import { PageLayout, PageContent } from '../../components/PageLayout';
import { InsertionSortVisualizer } from '../../components/algorithms';

export const InsertionSort = () => {
  return (
    <PageLayout>
      <PageContent title="Insertion Sort">
        <div className="space-y-8">
          {/* Algorithm Description */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              Insertion sort is a simple sorting algorithm that builds the
              final sorted array one item at a time. It is much less
              efficient on large lists than more advanced algorithms such as
              quicksort, heapsort, or merge sort. However, insertion sort
              provides several advantages:
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
              <li>Simple implementation</li>
              <li>Efficient for small data sets</li>
              <li>
                Adaptive: efficient for data sets that are already
                substantially sorted
              </li>
              <li>
                Stable: does not change the relative order of elements with
                equal keys
              </li>
              <li>
                In-place: only requires a constant amount O(1) of additional
                memory space
              </li>
            </ul>
          </section>

          {/* Interactive Visualization */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Interactive Visualization
            </h2>
            <InsertionSortVisualizer />
          </section>

          {/* Complexity Analysis */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Complexity Analysis</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Case
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time Complexity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Best Case
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-700">
                      O(n)
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      When the array is already sorted
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Average Case
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-700">
                      O(n²)
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      When the array is randomly ordered
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Worst Case
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-700">
                      O(n²)
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      When the array is sorted in reverse order
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Space Complexity
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-700">
                      O(1)
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      In-place sorting algorithm
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* How It Works */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How It Works</h2>
            <ol className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full font-semibold">
                  1
                </span>
                <div>
                  <strong>Start from the second element</strong> (index 1),
                  assuming the first element is already sorted.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full font-semibold">
                  2
                </span>
                <div>
                  <strong>Compare the current element</strong> with elements
                  in the sorted portion (to its left).
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full font-semibold">
                  3
                </span>
                <div>
                  <strong>Shift larger elements</strong> to the right to make
                  space for the current element.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full font-semibold">
                  4
                </span>
                <div>
                  <strong>Insert the current element</strong> at its correct
                  position in the sorted portion.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full font-semibold">
                  5
                </span>
                <div>
                  <strong>Repeat</strong> until all elements have been
                  processed.
                </div>
              </li>
            </ol>
          </section>
        </div>
      </PageContent>
    </PageLayout>
  );
};
