import { useState } from "react";

interface CouponProps {
  front: string;
  back: string;
  revealOnClick?: boolean;
  showLock?: boolean;
}

const FlipCard = ({
  front,
  back,
  revealOnClick = true,
  showLock = false,
}: CouponProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className="group w-full h-full min-h-[24rem] cursor-pointer [perspective:1000px]"
      onClick={() => {
        if (revealOnClick) {
          setIsRevealed(true);
        }
        // Only flip on click if on mobile
        if (window.innerWidth < 1024) {
          handleFlip();
        }
      }}
    >
      <div
        className={`relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] 
          lg:group-hover:[transform:rotateY(180deg)] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
      >
        {/* Front side */}
        <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] flex items-center justify-center">
          <img
            className={`h-full w-full rounded-xl object-contain transition-[filter] duration-1000 ${
              isRevealed ? "blur-0" : "blur-2xl"
            }`}
            src={front}
          />
          <div
            className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
              isRevealed ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm animate-pulse">
              Klik untuk buka
            </span>
          </div>
          {showLock ? (
            <div className="pointer-events-none absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/85 shadow-sm">
              <svg
                className="h-6 w-6 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
            </div>
          ) : null}
        </div>

        {/* Back side */}
        <div className="absolute inset-0 h-full w-full rounded-xl [transform:rotateY(-180deg)] [backface-visibility:hidden] flex items-center justify-center">
          <img
            className={`h-full w-full rounded-xl object-contain transition-[filter] duration-1000 ${
              isRevealed ? "blur-0" : "blur-2xl"
            }`}
            src={back}
          />
          <div
            className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
              isRevealed ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm animate-pulse">
              Klik untuk buka
            </span>
          </div>
          {showLock ? (
            <div className="pointer-events-none absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/85 shadow-sm">
              <svg
                className="h-6 w-6 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
