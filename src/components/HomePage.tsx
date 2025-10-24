import { useState, useEffect } from 'react';
import { ref, set, onValue } from 'firebase/database';
import { database } from '../firebase';
import { Plus, Save, Trash2, FolderOpen } from 'lucide-react';
import type { FolderType, DataItem } from '../types';

function HomePage() {
  const [folderType, setFolderType] = useState<FolderType>('qa');
  const [subfolders, setSubfolders] = useState<string[]>([]);
  const [selectedSubfolder, setSelectedSubfolder] = useState<string>('');
  const [newSubfolderName, setNewSubfolderName] = useState('');
  const [showNewSubfolder, setShowNewSubfolder] = useState(false);
  const [keyValuePairs, setKeyValuePairs] = useState<Array<{ key: string; value: string }>>([
    { key: 'email', value: '' },
    { key: 'password', value: '' }
  ]);

  useEffect(() => {
    const foldersRef = ref(database, `${folderType}`);
    const unsubscribe = onValue(foldersRef, (snapshot) => {
      if (snapshot.exists()) {
        const folders = Object.keys(snapshot.val());
        setSubfolders(folders);
      } else {
        setSubfolders([]);
      }
    });

    return () => unsubscribe();
  }, [folderType]);

  useEffect(() => {
    if (selectedSubfolder) {
      const dataRef = ref(database, `${folderType}/${selectedSubfolder}`);
      const unsubscribe = onValue(dataRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const pairs = Object.entries(data).map(([key, value]) => ({
            key,
            value: String(value)
          }));
          setKeyValuePairs(pairs.length > 0 ? pairs : [{ key: 'email', value: '' }, { key: 'password', value: '' }]);
        }
      });

      return () => unsubscribe();
    }
  }, [folderType, selectedSubfolder]);

  const handleCreateSubfolder = () => {
    if (newSubfolderName.trim()) {
      setSelectedSubfolder(newSubfolderName.trim());
      setNewSubfolderName('');
      setShowNewSubfolder(false);
      setKeyValuePairs([{ key: 'email', value: '' }, { key: 'password', value: '' }]);
    }
  };

  const handleAddField = () => {
    setKeyValuePairs([...keyValuePairs, { key: '', value: '' }]);
  };

  const handleRemoveField = (index: number) => {
    if (keyValuePairs.length > 1) {
      setKeyValuePairs(keyValuePairs.filter((_, i) => i !== index));
    }
  };

  const handleKeyChange = (index: number, newKey: string) => {
    const updated = [...keyValuePairs];
    updated[index].key = newKey;
    setKeyValuePairs(updated);
  };

  const handleValueChange = (index: number, newValue: string) => {
    const updated = [...keyValuePairs];
    updated[index].value = newValue;
    setKeyValuePairs(updated);
  };

  const handleSaveData = async () => {
    if (!selectedSubfolder) {
      alert('Please select or create a subfolder');
      return;
    }

    const data: DataItem = {};
    let hasEmptyKey = false;

    keyValuePairs.forEach(pair => {
      if (pair.key.trim()) {
        data[pair.key.trim()] = pair.value;
      } else if (pair.key === '' && pair.value !== '') {
        hasEmptyKey = true;
      }
    });

    if (hasEmptyKey) {
      alert('Please provide a key name for all fields');
      return;
    }

    if (Object.keys(data).length === 0) {
      alert('Please add at least one field with a key');
      return;
    }

    const dataRef = ref(database, `${folderType}/${selectedSubfolder}`);
    await set(dataRef, data);
    alert('Data saved successfully!');
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Manage Test Data
          </h1>
          <p className="text-gray-400">Create and manage test automation data</p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-2xl space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Select Folder Type
            </label>
            <select
              value={folderType}
              onChange={(e) => {
                setFolderType(e.target.value as FolderType);
                setSelectedSubfolder('');
                setKeyValuePairs([{ key: 'email', value: '' }, { key: 'password', value: '' }]);
              }}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all"
            >
              <option value="qa">QA</option>
              <option value="uat">UAT</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Select or Create Subfolder
            </label>
            <div className="flex gap-2">
              {!showNewSubfolder ? (
                <>
                  <select
                    value={selectedSubfolder}
                    onChange={(e) => setSelectedSubfolder(e.target.value)}
                    className="flex-1 bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all"
                  >
                    <option value="">Select a subfolder...</option>
                    {subfolders.map((folder) => (
                      <option key={folder} value={folder}>
                        {folder}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => setShowNewSubfolder(true)}
                    className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-all font-medium flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    New
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    value={newSubfolderName}
                    onChange={(e) => setNewSubfolderName(e.target.value)}
                    placeholder="e.g., automation1"
                    className="flex-1 bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all"
                    onKeyPress={(e) => e.key === 'Enter' && handleCreateSubfolder()}
                  />
                  <button
                    onClick={handleCreateSubfolder}
                    className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-all font-medium"
                  >
                    Create
                  </button>
                  <button
                    onClick={() => {
                      setShowNewSubfolder(false);
                      setNewSubfolderName('');
                    }}
                    className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all font-medium"
                  >
                    Cancel
                  </button>
                </>
              )}
            </div>
          </div>

          {selectedSubfolder && (
            <>
              <div className="border-t border-gray-800 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FolderOpen className="w-5 h-5 text-gray-400" />
                    <h3 className="text-xl font-semibold">
                      {folderType.toUpperCase()} / {selectedSubfolder}
                    </h3>
                  </div>
                  <button
                    onClick={handleAddField}
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all flex items-center gap-2 text-sm"
                  >
                    <Plus className="w-4 h-4" />
                    Add Field
                  </button>
                </div>

                <div className="space-y-3">
                  {keyValuePairs.map((pair, index) => (
                    <div key={index} className="flex gap-3 items-center">
                      <input
                        type="text"
                        value={pair.key}
                        onChange={(e) => handleKeyChange(index, e.target.value)}
                        placeholder="Key (e.g., email)"
                        className="flex-1 bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all"
                      />
                      <input
                        type="text"
                        value={pair.value}
                        onChange={(e) => handleValueChange(index, e.target.value)}
                        placeholder="Value"
                        className="flex-1 bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all"
                      />
                      <button
                        onClick={() => handleRemoveField(index)}
                        className="p-3 bg-red-900/50 text-red-300 rounded-lg hover:bg-red-900 transition-all"
                        disabled={keyValuePairs.length === 1}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleSaveData}
                className="w-full bg-white text-black font-semibold px-8 py-4 rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2"
              >
                <Save className="w-5 h-5" />
                Save Data
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
