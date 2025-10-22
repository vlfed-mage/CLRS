import { PageLayout, PageContent } from '../components/PageLayout';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <PageLayout>
      <PageContent
        title="Introduction to Algorithms"
        description="An interactive handbook for learning fundamental algorithms and data structures."
      >
        <div className="mt-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Getting Started</h2>
            <p className="text-gray-700 leading-relaxed">
              This handbook provides interactive visualizations and detailed
              explanations of fundamental algorithms. Each algorithm includes:
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
              <li>Step-by-step visual demonstrations</li>
              <li>Complexity analysis</li>
              <li>Code implementations</li>
              <li>Real-world applications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Available Chapters</h2>
            <div className="space-y-4">
              <Link
                to="/sorting"
                className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sorting Algorithms</h3>
                <p className="text-gray-600">
                  Explore various sorting algorithms including Insertion Sort,
                  and more coming soon.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </PageContent>
    </PageLayout>
  );
};
