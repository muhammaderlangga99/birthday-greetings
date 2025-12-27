// GiftBox.tsx
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface GiftBoxProps {
  toggleModal: () => void;
}

const GiftBox = ({ toggleModal }: GiftBoxProps) => {
  const [step, setStep] = useState(1);
  const stepMinutes = [2000, 2000, 1000];

  const openBox = () => {
    if (step < 3) {
      // Stop incrementing after step-3
      setStep((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (step === 1) return;

    if (step < 3) {
      const timeoutId = setTimeout(openBox, stepMinutes[step - 1]);
      return () => clearTimeout(timeoutId);
    }
  }, [step]);

  return (
    <div
      className={`merrywrap step-${step}`}
      onClick={step === 1 ? openBox : toggleModal}
    >
      <canvas id="snowfall"></canvas>
      <div className="giftbox">
        <div className="cover">
          <div></div>
        </div>
        <div className="box"></div>
      </div>
      <div
        className="letter-card md:w-[70%] max-w-2xl text-[#2B343A] font-inter"
        style={{
          opacity: step === 3 ? 1 : 0,
          height: step === 3 ? "auto" : 0,
          overflow: step === 3 ? "visible" : "hidden",
          pointerEvents: step === 3 ? "auto" : "none",
        }}
      >
        <div className="relative rounded-3xl bg-[#FFF7F0] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)] border border-[#F0D6D1] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16px_16px,#F7D7D6_1px,transparent_0)] bg-[length:24px_24px] opacity-40" />
          <div className="absolute -top-16 -right-10 h-40 w-40 rounded-full bg-[#F4C6CE]/70 blur-2xl" />
          <div className="absolute -bottom-16 -left-12 h-44 w-44 rounded-full bg-[#FAD7B8]/60 blur-2xl" />

          {/* Close Button */}
          <button
            onClick={toggleModal}
            className="absolute top-4 right-4 z-10 rounded-full bg-white/80 p-2 text-black shadow-md backdrop-blur"
          >
            <IoCloseOutline className="text-lg" />
          </button>

          <div className="relative z-10 px-5 py-10 sm:px-10 sm:py-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F4C6CE] px-4 py-1 text-xs font-semibold uppercase tracking-[.25em] text-[#5B2B33]">
              For You
              <span className="h-1.5 w-1.5 rounded-full bg-[#5B2B33]" />
            </div>

            {/* Title */}
            <h2 className="mt-4 text-4xl sm:text-5xl font-pacifico text-[#C24F5C]">
              Happy birthday, sayang!
            </h2>

            {/* Subtitle */}
            <p className="mt-3 text-sm sm:text-base text-[#4D3A3F]">
              To the one who brings so much joy, laughter, and warmth into my
              life. Today is all about you.
            </p>

            {/* Divider */}
            <div className="my-6 h-[2px] w-full bg-gradient-to-r from-transparent via-[#E9B8BE] to-transparent" />

            {/* Letter Content */}
            <div className="space-y-4 text-[#2B343A] text-sm sm:text-base text-justify">
              <p className="font-semibold text-[#4A2E33]">
                My dearest Vingki,
              </p>
              <p>
                It feels like time has flown by since the moment we first got to know each other. Even though we haven’t been together for very long, every moment with you always feels meaningful and warm. I hope this day brings you
                all the joy and happiness that you deserve.
              </p>
              <p>
                I want you to know how much I love and appreciate everything
                that you do for me. You make me feel loved, cared for, and
                valued, and I feel incredibly lucky to have you in my life. You
                have brought so much happiness and joy into my life, and I
                can't imagine a world without you.
              </p>
              <p>
                I admire you for so many reasons - your kindness, your strength,
                and the way you make ordinary days feel special.
              </p>
              <div className="mt-6 rounded-2xl bg-[#FBE7E4] px-5 py-4 text-left text-sm sm:text-base">
                <p className="font-semibold text-[#5B2B33]">
                  Promise for today:
                </p>
                <p className="text-[#4D3A3F]">
                  I will keep choosing you, celebrating you, and loving you in
                  the loud and quiet moments.
                </p>
              </div>
              <p className="pt-4 font-pacifico text-2xl text-[#C24F5C] text-right">
                From Erlangga
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftBox;
