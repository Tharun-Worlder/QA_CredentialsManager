import { useState, useEffect } from 'react';
import { ref, onValue, remove } from 'firebase/database';
import { database } from '../firebase';
import { Trash2, FolderOpen, Database as DatabaseIcon } from 'lucide-react';
import type { FolderType, FolderData} from '../types';

function ViewDataPage() {
  const [folderType, setFolderType] = useState<FolderType>('qa');
  const [data, setData] = useState<FolderData>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const dataRef = ref(database, folderType);

    const unsubscribe = onValue(dataRef, (snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      } else {
        setData({});
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [folderType]);

  const handleDelete = async (subfolder: string) => {
    if (confirm(`Are you sure you want to delete "${subfolder}"?`)) {
      const itemRef = ref(database, `${folderType}/${subfolder}`);
      await remove(itemRef);
    }
  };

  const getAllKeys = (): string[] => {
    const keysSet = new Set<string>();
    Object.values(data).forEach((item) => {
      Object.keys(item).forEach((key) => keysSet.add(key));
    });
    return Array.from(keysSet);
  };

  const allKeys = getAllKeys();
  const subfolderNames = Object.keys(data);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            View All Data
          </h1>
          <p className="text-gray-400">Browse and manage your test data</p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 mb-8 shadow-2xl">
          <label className="block text-sm font-medium mb-2 text-gray-300">
            Select Folder Type
          </label>
          <select
            value={folderType}
            onChange={(e) => setFolderType(e.target.value as FolderType)}
            className="w-full max-w-xs bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all"
          >
            <option value="qa">QA</option>
            <option value="uat">UAT</option>
          </select>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-8 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <DatabaseIcon className="w-6 h-6" />
                  <h2 className="text-2xl font-semibold">{folderType.toUpperCase()} Data</h2>
                </div>
                <p className="text-gray-400">
                  {subfolderNames.length} {subfolderNames.length === 1 ? 'subfolder' : 'subfolders'} found
                </p>
              </div>
            </div>
          </div>

          {isLoading ? (
            <div className="p-12 text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
              <p className="mt-4 text-gray-400">Loading data...</p>
            </div>
          ) : subfolderNames.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-gray-400 text-lg">No data available in {folderType.toUpperCase()}. Create some data first.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-black border-b border-gray-800">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider sticky left-0 bg-black">
                      <div className="flex items-center gap-2">
                        <FolderOpen className="w-4 h-4" />
                        Subfolder
                      </div>
                    </th>
                    {allKeys.map((key) => (
                      <th
                        key={key}
                        className="px-6 py-4 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider"
                      >
                        {key}
                      </th>
                    ))}
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {subfolderNames.map((subfolder) => (
                    <tr key={subfolder} className="hover:bg-gray-900/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-white sticky left-0 bg-gradient-to-r from-gray-900 to-transparent">
                        <div className="flex items-center gap-2">
                          <FolderOpen className="w-4 h-4 text-gray-400" />
                          {subfolder}
                        </div>
                      </td>
                      {allKeys.map((key) => (
                        <td key={key} className="px-6 py-4 text-gray-300">
                          {data[subfolder][key] !== undefined ? (
                            <span className="font-mono text-sm bg-gray-800 px-3 py-1 rounded">
                              {String(data[subfolder][key])}
                            </span>
                          ) : (
                            <span className="text-gray-600">-</span>
                          )}
                        </td>
                      ))}
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleDelete(subfolder)}
                            className="p-2 bg-red-900/50 text-red-300 rounded-lg hover:bg-red-900 transition-all transform hover:scale-110"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewDataPage;
