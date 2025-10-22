import { PageLayout, PageContent } from '../../components/PageLayout';
import { MergeSortVisualizer } from '../../components/algorithms';

export const MergeSort = () => {
  return (
    <PageLayout>
      <PageContent title="Merge Sort">
        <div className="space-y-8">
          {/* Algorithm Description */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Merge sort is an efficient, stable sorting algorithm that uses
              the divide-and-conquer strategy. It divides the input array into
              two halves, recursively sorts them, and then merges the two
              sorted halves. The key advantage of merge sort is its consistent
              performance across all input cases.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
              <li>Efficient for large datasets</li>
              <li>
                Stable: maintains the relative order of equal elements
              </li>
              <li>
                Predictable performance: O(n log n) in all cases
              </li>
              <li>
                Divide-and-conquer approach makes it easy to understand
              </li>
              <li>
                Can be easily parallelized for multi-threaded processing
              </li>
            </ul>
          </section>

          {/* Interactive Visualization */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Interactive Visualization
            </h2>
            <MergeSortVisualizer />
          </section>

          {/* Complexity Analysis */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Complexity Analysis
            </h2>
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
                      O(n log n)
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Same performance regardless of input
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Average Case
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-700">
                      O(n log n)
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Consistent logarithmic divisions
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Worst Case
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-700">
                      O(n log n)
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Guaranteed performance
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Space Complexity
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-700">
                      O(n)
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Requires additional space for merging
                    </td>
                  </tr>
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
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full font-semibold">
                  1
                </span>
                <div>
                  <strong>Divide:</strong> Split the array into two halves at
                  the middle point.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full font-semibold">
                  2
                </span>
                <div>
                  <strong>Conquer:</strong> Recursively sort the left half and
                  the right half.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full font-semibold">
                  3
                </span>
                <div>
                  <strong>Merge:</strong> Combine the two sorted halves by
                  comparing elements from each half and placing them in order.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full font-semibold">
                  4
                </span>
                <div>
                  <strong>Base case:</strong> When the subarray has only one
                  element, it is already sorted.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-800 rounded-full font-semibold">
                  5
                </span>
                <div>
                  <strong>Combine:</strong> The recursion unwinds, merging
                  sorted subarrays until the entire array is sorted.
                </div>
              </li>
            </ol>
          </section>
        </div>
      </PageContent>
    </PageLayout>
  );
};
