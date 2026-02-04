import React, { useEffect, useState } from "react";


const images = Object.values(
  import.meta.glob("../assets/images/Gallery/*.{jpg,jpeg,png,JPG,JPEG,PNG}", {
    eager: true,
    import: "default",
  }),
).sort((a, b) => a.localeCompare(b));


const season2Talks = [
  { speaker: "Ravi Mantri", videoId: "5bOeKaE4PbU" },
  { speaker: "Raul Handa", videoId: "2OTxl8DT12U" },
  { speaker: "Kowshik Maridi", videoId: "v9aFNbjpb2o" },
  { speaker: "Sahiti Divi", videoId: "ZJd8H-kH_XQ" },
  { speaker: "Bijay Bairagi", videoId: "dNc9BJKPP48" },
  { speaker: "JVS Bhaskar", videoId: "aiurVPbYvgI" },
  { speaker: "Eshwar Bolegar", videoId: "cfK_T7xDGAo" },
  { speaker: "Sandeep Israni", videoId: "RvCKnGirJ88" },
];

function Gallery() {
  const [current, setCurrent] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const slides = images.slice(0, 5);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [slides.length]);

  const closeModal = () => setSelectedIndex(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-black text-white w-full min-h-screen pt-24">
      {slides.length > 0 && (
        <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
          {slides.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`TEDx Gallery Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-black/65 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              <span className="text-red-600">TEDx</span> Gallery
            </h1>
            <div className="mt-6 w-20 h-[3px] bg-red-600 rounded-full" />
            <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl">
              Moments where ideas met the spotlight
            </p>
          </div>
        </section>
      )}

      <section className="px-4 sm:px-8 md:px-16 py-16">
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="w-10 h-[2px] bg-red-600" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Event <span className="text-red-600">Highlights</span>
          </h2>
          <span className="w-10 h-[2px] bg-red-600" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-zinc-900 cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* =========================
         SEASON 2 TALKS
      ========================= */}
      <section className="px-4 sm:px-8 md:px-16 py-20">
        <div className="flex items-center justify-center gap-4 mb-14">
          <span className="w-10 h-[2px] bg-red-600" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            SEASON <span className="text-red-600">2</span> TALKS
          </h2>
          <span className="w-10 h-[2px] bg-red-600" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {season2Talks.map((talk, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${talk.videoId}`}
                  title={talk.speaker}
                  allowFullScreen
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{talk.speaker}</h3>
                <p className="text-sm text-gray-400">TEDx Speaker</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
   IMAGE MODAL (MEDIUM SIZE)
========================= */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute -top-14 right-0 text-white text-4xl 
                   hover:text-red-600 transition"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Left Button */}
            <button
              className="absolute -left-6 top-1/2 -translate-y-1/2
                   w-14 h-14 rounded-full
                   bg-black/60 backdrop-blur
                   text-white text-4xl
                   flex items-center justify-center
                   border border-red-600/40
                   shadow-[0_0_15px_rgba(255,0,0,0.35)]
                   hover:bg-red-600 hover:text-black
                   transition"
              onClick={prevImage}
            >
              ‹
            </button>

            {/* Right Button */}
            <button
              className="absolute -right-6 top-1/2 -translate-y-1/2
                   w-14 h-14 rounded-full
                   bg-black/60 backdrop-blur
                   text-white text-4xl
                   flex items-center justify-center
                   border border-red-600/40
                   shadow-[0_0_15px_rgba(255,0,0,0.35)]
                   hover:bg-red-600 hover:text-black
                   transition"
              onClick={nextImage}
            >
              ›
            </button>

            {/* Image */}
            <img
              src={images[selectedIndex]}
              alt="Expanded view"
              className="
          w-full max-h-[75vh] object-contain rounded-xl mx-auto
          border border-red-600/40
          shadow-[0_0_25px_rgba(255,0,0,0.25)]
        "
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
