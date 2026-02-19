import React, { useState } from "react";
import PropTypes from "prop-types";

const Card = ({ data }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="group relative w-full h-[500px] rounded-3xl overflow-hidden bg-black ring-1 ring-white/10 hover:ring-red-600 transition-all duration-500 hover:shadow-[0_0_50px_rgba(220,38,38,0.3)]">
      <div className="absolute inset-0 w-full h-full">
        {data.image ? (
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-black">
            <span className="text-red-500 text-9xl font-bold">?</span>
          </div>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>

      {/* 3. CONTENT LAYER */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
        {/* Top Header */}
        <div className="flex justify-between items-start translate-y-0 transition-transform duration-500">
          <div>
            <h1 className="text-red-600 font-extrabold text-xl tracking-tighter leading-none">
              TEDx
            </h1>
            <p className="text-white/50 text-[10px] font-semibold tracking-wider uppercase">
              Vishnu Institute
            </p>
          </div>
        </div>

        {/* Bottom Text Area */}
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="border-l-4 border-red-600 pl-4 mb-3">
            <h2 className="text-white text-3xl font-bold leading-tight">
              {data.name}
            </h2>
            <p className="text-red-500 font-medium text-sm tracking-wide uppercase mt-1">
              {data.role}
            </p>
          </div>

          <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
            {showFullDescription ? (
              <div className="max-h-48 overflow-y-auto pr-2">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {data.description}
                </p>
                {data.description && data.description.length > 200 && (
                  <button
                    onClick={() => setShowFullDescription(false)}
                    className="text-red-500 hover:text-red-400 text-xs font-semibold mt-2 transition-colors duration-200"
                  >
                    Show Less
                  </button>
                )}
              </div>
            ) : (
              <div>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                  {data.description}
                </p>
                {data.description && data.description.length > 200 && (
                  <button
                    onClick={() => setShowFullDescription(true)}
                    className="text-red-500 hover:text-red-400 text-sm font-semibold transition-colors duration-200 mt-1"
                  >
                    Know More
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default Card;
