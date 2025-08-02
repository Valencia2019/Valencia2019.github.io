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

export default async function ReportPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'public/reports', `${params.slug}.json`);

  try {
    const json = await fs.readFile(filePath, 'utf8');
    const data: ReportData = JSON.parse(json);

    const { summary, suites } = data;
    const projectName = params.slug.split('-').join(' ').toUpperCase();

    return (
      <div className="p-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">🧪 {projectName} Report</h1>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>Total Tests: <strong>{summary.totalTests}</strong></div>
          <div>⏱ Duration: <strong>{(summary.duration / 1000).toFixed(2)}s</strong></div>
          <div>✅ Passed: <strong>{summary.passes}</strong></div>
          <div>📅 Start: <strong>{new Date(summary.start).toLocaleString()}</strong></div>
          <div>❌ Failed: <strong>{summary.failures}</strong></div>
          <div>📅 End: <strong>{new Date(summary.end).toLocaleString()}</strong></div>
        </div>

        {suites.map((suite, idx) => (
          <div key={idx} className="mb-6 border-t pt-4">
            <h2 className="text-xl font-semibold mb-2">{suite.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{suite.file}</p>

            <ul className="space-y-2">
              {suite.tests.map((test, i) => (
                <li key={i} className={`p-4 border rounded ${test.state === 'passed' ? 'bg-green-50' : 'bg-red-50'}`}>
                  <p className="font-medium">{test.title}</p>
                  <p>Status: <strong>{test.state}</strong></p>
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
          <Link href="/projects" className="text-blue-600 hover:underline text-sm">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  } catch (err) {
    console.log(err);
    return notFound();
  }
}
