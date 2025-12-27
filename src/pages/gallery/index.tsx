import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Heading from "@/components/heading";

interface Image {
  id: number;
  src: string;
  alt: string;
}

const imageFiles = [
  "etive.jpeg",
  "etive2.jpeg",
  "etive3.jpeg",
  "alunalun.jpeg",
  "first2.jpeg",
  "first3.jpeg",
  "flower.jpeg",
  "kondangan.jpeg",
  "first1.jpeg",
  "library.jpeg",
  "lift.jpeg",
  "movie.jpeg",
  "movie2.jpeg",
  "movie4.jpeg",
  "movie5.jpeg",
  "seaworld.jpeg",
  "shadow.jpeg",
  "tooffice.jpeg",
  "tooffice2.jpeg",
];

const images: Image[] = imageFiles.map((file, index) => ({
  id: index + 1,
  src: `/love/${file}`,
  alt: file.replace(/\.[^/.]+$/, "").replace(/-/g, " "),
}));

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openSlider = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeSlider = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) => (prevIndex! + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (prevIndex) => (prevIndex! - 1 + images.length) % images.length
      );
    }
  };

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    trackMouse: true,
  });

  // Add event listener for 'Esc' key to close the modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeSlider();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Handle clicking outside of the image to close the modal
  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLDivElement).id === "modal-overlay") {
      closeSlider();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="mb-32">
        <div className="container mx-auto px-4 lg:px-24">
          <section className="overflow-hidden text-gray-700">
            <div className="mt-28 mb-8">
              <Heading title="gallery" subtitle="Memories" />
            </div>
            <div className="columns-2 lg:columns-3 gap-4 space-y-4">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  className="w-full break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
                  onClick={() => openSlider(index)}
                >
                  <img
                    alt={image.alt}
                    className="block w-full h-auto object-cover"
                    src={image.src}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Slider Modal */}
      {selectedImageIndex !== null && (
        <div
          id="modal-overlay"
          className="fixed inset-0 backdrop-blur-lg flex items-center justify-center z-50"
          onClick={handleOutsideClick}
          {...handlers}
        >
          <div
            className="relative max-w-5xl mx-auto p-4 flex items-center space-x-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Thumbnail */}
            <div className="w-1/4">
              <img
                src={
                  images[
                    (selectedImageIndex - 1 + images.length) % images.length
                  ].src
                }
                alt={
                  images[
                    (selectedImageIndex - 1 + images.length) % images.length
                  ].alt
                }
                className="rounded-lg object-cover cursor-pointer opacity-70 h-40"
                onClick={prevImage}
              />
            </div>

            {/* Center Image */}
            <div className="w-2/4">
              <img
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
                className="rounded-lg object-cover max-w-full max-h-[80vh]"
              />
            </div>

            {/* Right Thumbnail */}
            <div className="w-1/4">
              <img
                src={images[(selectedImageIndex + 1) % images.length].src}
                alt={images[(selectedImageIndex + 1) % images.length].alt}
                className="rounded-lg object-cover cursor-pointer opacity-70 h-40"
                onClick={nextImage}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
