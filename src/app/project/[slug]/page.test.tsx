// __tests__/report-page.test.tsx
import { render, screen } from '@testing-library/react';
import { notFound } from 'next/navigation';
import {  generateStaticParams } from './page';
import ReportPage from './page';
import '@testing-library/jest-dom';

jest.mock('fs/promises', () => ({
  readdir: jest.fn(),
  readFile: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}));

describe('generateStaticParams', () => {
  it('returns slugs from JSON files', async () => {
    const { readdir } = require('fs/promises');
    readdir.mockResolvedValue(['cypress-playground.json', 'ignore.txt']);

    const result = await generateStaticParams();

    expect(result).toEqual([{ slug: 'cypress-playground' }]);
  });
});

describe('ReportPage', () => {
  const { readFile } = require('fs/promises');

  const mockReport = {
    summary: {
      totalTests: 2,
      passes: 2,
      failures: 0,
      duration: 1400,
      start: new Date('2025-08-01T00:00:00Z').toISOString(),
      end: new Date('2025-08-01T00:01:00Z').toISOString(),
    },
    suites: [
      {
        file: 'cypress/test.js',
        title: 'Suite Title',
        tests: [
          {
            title: 'Test A',
            state: 'passed',
            duration: 700,
            error: null,
          },
          {
            title: 'Test B',
            state: 'passed',
            duration: 700,
            error: null,
          },
        ],
      },
    ],
  };

  beforeEach(() => {
    readFile.mockReset();
    (notFound as never as jest.Mock).mockReset();
  });

  it('renders report details correctly', async () => {
    readFile.mockResolvedValue(JSON.stringify(mockReport));

    const jsx = await ReportPage({ params: Promise.resolve({ slug: 'cypress-playground' }) });
    render(jsx as any);

    expect(screen.getByTestId('total-tests')).toBeInTheDocument();
    expect(screen.getByTestId('total-passed')).toBeInTheDocument();
    expect(screen.getByTestId('total-failed')).toBeInTheDocument();
    expect(screen.getByTestId('duration')).toBeInTheDocument();
    expect(screen.getByTestId('start')).toBeInTheDocument();
    expect(screen.getByTestId('end')).toBeInTheDocument();

    expect(screen.getByTestId('back-to-projects')).toBeInTheDocument();
  });

  it('calls notFound if file does not exist', async () => {
    readFile.mockRejectedValue(new Error('File not found'));

    await ReportPage({ params: Promise.resolve({ slug: 'missing-report' }) });
    expect(notFound).toHaveBeenCalled();
  });
});
