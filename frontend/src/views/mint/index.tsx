'use client';

import { FC, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { notify } from 'utils/notifications';

export const MintView: FC = () => {
  const { publicKey, signTransaction } = useWallet();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isMinting, setIsMinting] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setFile(selectedFile);
  };

  const handleMint = async () => {
    if (!publicKey) {
      notify({ type: 'error', message: 'Wallet not connected!' });
      return;
    }

    if (!file) {
      notify({ type: 'error', message: 'Please upload a file to mint!' });
      return;
    }

    try {
      setIsMinting(true);

      // Simulate minting process (replace this with actual minting logic)
      const mintTransaction = await new Promise((resolve) =>
        setTimeout(() => resolve('TransactionHash12345'), 2000)
      );

      notify({ type: 'success', message: `Mint successful: ${mintTransaction}` });
    } catch (error) {
      notify({ type: 'error', message: `Mint failed: ${error.message}` });
    } finally {
      setIsMinting(false);
    }
  };

  return (
    <div className="p-4 mx-auto max-w-xl">
      <h1 className="text-center text-4xl font-bold mb-4">Mint Your NFT</h1>
      <div className="bg-gray-800 p-6 rounded-lg">
        <label className="block mb-2 text-sm font-medium">Name</label>
        <input
          type="text"
          placeholder="NFT Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 rounded-md bg-gray-700 text-white mb-4"
        />

        <label className="block mb-2 text-sm font-medium">Description</label>
        <textarea
          placeholder="NFT Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 rounded-md bg-gray-700 text-white mb-4"
        />

        <label className="block mb-2 text-sm font-medium">Upload File</label>
        <input
          type="file"
          onChange={handleFileUpload}
          className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-600 file:text-white hover:file:bg-gray-700"
        />

        <button
          onClick={handleMint}
          disabled={isMinting}
          className={`w-full mt-4 py-2 px-4 rounded-md text-white ${
            isMinting ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isMinting ? 'Minting...' : 'Mint NFT'}
        </button>
      </div>
    </div>
  );
};
