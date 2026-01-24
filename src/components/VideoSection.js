import React from 'react';

const VideoSection = () => {
  return (
    <div className="mt-2 flex flex-col items-center">
      <p className="px-3 md:px-0 md:max-w-5xl mx-auto text-[1.1rem] md:text-[1.3rem] text-gray-700 mt-4 text-center">
        Please watch this short video, this will clear all your doubts regarding us and the stock market.
      </p>

      <div className="w-[95%] sm:w-[80%] md:w-[65%] bg-black rounded-md overflow-hidden mt-4 aspect-video">
        <video
          className="w-full h-full"
          controls
          preload="metadata"
          playsInline
          controlsList="nodownload"
          poster="https://res.cloudinary.com/dxaqwyerl/video/upload/f_jpg,q_auto/v1769156853/Indroduction_1_1_sopdwy"
        >
          <source
            src="https://res.cloudinary.com/dxaqwyerl/video/upload/f_auto,q_auto/v1769156853/Indroduction_1_1_sopdwy"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <p className="max-w-2xl mx-auto text-gray-700 mt-4 text-center px-4 text-[1.1rem] md:text-[1.3rem]">
        Learn And Earn
      </p>
    </div>
  );
};

export default VideoSection;
