import { promises as fs } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface Test {
  title: string;
  state: string;
  duration: number;
  error: string | null;
}

interface Suite {
  file: string;
  title: string;
  tests: Test[];
}

interface Summary {
  totalTests: number;
  passes: number;
  failures: number;
  duration: number;
  start: string;
  end: string;
}

interface ReportData {
  summary: Summary;
  suites: Suite[];
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'public/reports');
  const files = await fs.readdir(dir);

  return files
    .filter((file) => file.endsWith('.json'))
    .map((file) => ({
      slug: file.replace('.json', ''),
    }));
}

export default async function ReportPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const filePath = path.join(process.cwd(), 'public/reports', `${params.slug}.json`);

  try {
    const json = await fs.readFile(filePath, 'utf8');
    const data: ReportData = JSON.parse(json);

    const { summary, suites } = data;
    const projectName = params.slug.split('-').join(' ');

    return (
      <div className="p-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">🧪 {projectName} Report</h1>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div data-testid='total-tests'>Total Tests: <strong>{summary.totalTests}</strong></div>
          <div data-testid='duration'>⏱ Duration: <strong>{(summary.duration / 1000).toFixed(2)}s</strong></div>
          <div data-testid='total-passed'>✅ Passed: <strong>{summary.passes}</strong></div>
          <div data-testid='start'>📅 Start: <strong>{new Date(summary.start).toLocaleString()}</strong></div>
          <div data-testid='total-failed'>❌ Failed: <strong>{summary.failures}</strong></div>
          <div data-testid='end'>📅 End: <strong>{new Date(summary.end).toLocaleString()}</strong></div>
        </div>

        {suites.map((suite, idx) => (
          <div key={idx} className="mb-6 border-t pt-4">
            <h2 className="text-xl font-semibold mb-2">{suite.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{suite.file}</p>

            <ul className="space-y-2">
              {suite.tests.map((test, i) => (
                <li key={i} className={`p-4 border rounded `}>
                  <p className="font-medium">{test.title}</p>
                  <p>Status: <strong className={test.state === 'passed' ? 'text-green-600' : 'text-red-600'}>{test.state}</strong></p>
                  <p>Duration: {test.duration}ms</p>
                  {test.error && (
                    <pre className="text-red-600 text-sm whitespace-pre-wrap mt-2">{test.error}</pre>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="mt-10">
          <Link href="/projects" data-testid="back-to-projects" className="text-blue-600 hover:underline text-sm">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  } catch (err) {
    //log the error but don't break the page
    if( err instanceof Error && err.message.includes('no such file or directory') ) {
      //console.log("Error reading report. Likely file not found.");
    } else {
      console.error(err);
    }
    return notFound();
  }
}
