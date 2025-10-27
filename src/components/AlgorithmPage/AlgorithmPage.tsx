import type { ReactNode } from 'react';
import clsx from 'clsx';
import { PageLayout, PageContent } from '@/components/PageLayout';

export interface ComplexityRow {
  case: string;
  complexity: string;
  description: string;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
}

export interface AlgorithmPageProps {
  title: string;
  overview: {
    description: string;
    advantages: string[];
  };
  visualizer: ReactNode;
  complexityAnalysis: ComplexityRow[];
  howItWorks: StepItem[];
}

export const AlgorithmPage = ({
  title,
  overview,
  visualizer,
  complexityAnalysis,
  howItWorks,
}: AlgorithmPageProps) => {
  return (
    <PageLayout>
      <PageContent title={title}>
        <div className="space-y-8">
          {/* Algorithm Description */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {overview.description}
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
              {overview.advantages.map((advantage, index) => (
                <li key={index}>{advantage}</li>
              ))}
            </ul>
          </section>

          {/* Interactive Visualization */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Interactive Visualization
            </h2>
            {visualizer}
          </section>

          {/* Complexity Analysis */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Complexity Analysis
            </h2>
            <div className="overflow-x-auto">
              <table
                className={clsx(
                  'min-w-full divide-y divide-gray-200',
                  'border border-gray-200'
                )}
              >
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      className={clsx(
                        'px-6 py-3 text-left',
                        'text-xs font-medium text-gray-500',
                        'uppercase tracking-wider'
                      )}
                    >
                      Case
                    </th>
                    <th
                      className={clsx(
                        'px-6 py-3 text-left',
                        'text-xs font-medium text-gray-500',
                        'uppercase tracking-wider'
                      )}
                    >
                      Time Complexity
                    </th>
                    <th
                      className={clsx(
                        'px-6 py-3 text-left',
                        'text-xs font-medium text-gray-500',
                        'uppercase tracking-wider'
                      )}
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {complexityAnalysis.map((row, index) => (
                    <tr key={index}>
                      <td
                        className={clsx(
                          'px-6 py-4 whitespace-nowrap',
                          'text-sm font-medium text-gray-900'
                        )}
                      >
                        {row.case}
                      </td>
                      <td
                        className={clsx(
                          'px-6 py-4 whitespace-nowrap',
                          'text-sm font-mono text-gray-700'
                        )}
                      >
                        {row.complexity}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {row.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* How It Works */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How It Works
            </h2>
            <ol className="space-y-4 text-gray-700">
              {howItWorks.map((step) => (
                <li key={step.number} className="flex gap-3">
                  <span
                    className={clsx(
                      'flex-shrink-0 w-8 h-8',
                      'flex items-center justify-center',
                      'bg-blue-100 text-blue-800',
                      'rounded-full font-semibold'
                    )}
                  >
                    {step.number}
                  </span>
                  <div>
                    <strong>{step.title}</strong> {step.description}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </PageContent>
    </PageLayout>
  );
};
