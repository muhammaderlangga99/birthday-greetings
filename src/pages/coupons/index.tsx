import FlipCard from "@/components/flip-card";
import Heading from "@/components/heading";
import { useEffect } from "react";

const coupons = [
  {
    code: "Hadiah 1",
    front: "/coupon/aku.png",
    back: "/coupon/aku.png",
    revealOnClick: false,
    showLock: true,
  },
  {
    code: "Hadiah 2: rahasia ?",
    front: "/coupon/secret.jpg",
    back: "/coupon/secret.jpg",
    revealOnClick: false,
    showLock: true,
  },
];

const Coupons = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-gradient-to-b from-[#FFF5EA] via-[#FDF9FF] to-[#F3FBFF]">
        <div className="container mx-auto px-4 lg:px-24">
          <section className="overflow-hidden text-gray-700">
            <div className="mt-28">
              <Heading title="Gift" subtitle="for your special day ??" />
            </div>

            <section className="font-inter mt-6">
              <h3 className="font-semibold text-lg">Surprise kecil</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                Satu per satu nanti kebuka, bukan cuma bungkusnya, tapi juga
                semua doa baik yang aku simpan buat kamu.
              </p>
            </section>

            <div className="mt-10 grid gap-10 lg:grid-cols-2 mb-32">
              {coupons.map((coupon) => (
                <div key={coupon.code} className="w-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                      Gift
                    </span>
                    <span className="text-sm font-semibold text-gray-700">
                      {coupon.code}
                    </span>
                  </div>
                  <div className="w-full h-[28rem] sm:h-[34rem] lg:h-[40rem]">
                    <FlipCard
                      front={coupon.front}
                      back={coupon.back}
                      revealOnClick={coupon.revealOnClick}
                      showLock={coupon.showLock}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Coupons;
