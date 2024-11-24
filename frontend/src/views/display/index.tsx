import { FC } from "react";
import { FetchNft } from "../../components/FetchNft";

export const DisplayView: FC = ({}) => {
  return (
    <div className="md:hero mx-auto p-8">
      <div className="md:hero-content flex flex-col">
        {/* Title Section */}
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195] mb-8">
          Explore NFTs
        </h1>

        {/* NFT Display Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Circular Partitions */}
          <div className="flex justify-center items-center bg-gradient-to-r from-[#FFD700] to-[#FF6347] p-4 rounded-full shadow-lg">
            <div className="w-40 h-40 bg-white rounded-full flex justify-center items-center">
              <span className="text-gray-500 text-sm">NFT Placeholder</span>
            </div>
          </div>
          <div className="flex justify-center items-center bg-gradient-to-r from-[#6A5ACD] to-[#1E90FF] p-4 rounded-full shadow-lg">
            <div className="w-40 h-40 bg-white rounded-full flex justify-center items-center">
              <span className="text-gray-500 text-sm">NFT Placeholder</span>
            </div>
          </div>

          {/* Square Partitions */}
          <div className="bg-gradient-to-r from-[#FF4500] to-[#32CD32] p-4 rounded-lg shadow-lg">
            <div className="w-40 h-40 bg-white rounded-lg flex justify-center items-center">
              <span className="text-gray-500 text-sm">NFT Placeholder</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#8A2BE2] to-[#00BFFF] p-4 rounded-lg shadow-lg">
            <div className="w-40 h-40 bg-white rounded-lg flex justify-center items-center">
              <span className="text-gray-500 text-sm">NFT Placeholder</span>
            </div>
          </div>

          {/* Another Circular Partition */}
          <div className="flex justify-center items-center bg-gradient-to-r from-[#FFD700] to-[#FF6347] p-4 rounded-full shadow-lg">
            <div className="w-40 h-40 bg-white rounded-full flex justify-center items-center">
              <span className="text-gray-500 text-sm">NFT Placeholder</span>
            </div>
          </div>

          {/* Another Square Partition */}
          <div className="bg-gradient-to-r from-[#FF4500] to-[#32CD32] p-4 rounded-lg shadow-lg">
            <div className="w-40 h-40 bg-white rounded-lg flex justify-center items-center">
              <span className="text-gray-500 text-sm">NFT Placeholder</span>
            </div>
          </div>
        </div>

        {/* Fetch NFTs Section */}
        <div className="text-center mt-12">
          <FetchNft />
        </div>
      </div>
    </div>
  );
};

