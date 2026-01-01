import Heading from "@/components/heading";
import { useEffect, useState } from "react";

interface TimelineEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

const timelineData: TimelineEvent[] = [
  {
    id: 1,
    title: "First time I Found You",
    date: "Agust 18, 2025",
    description:
      "Ini percakapan pertama kita ketika kamu chat aku di whatsapp, aku masih ingat banget waktu itu, kaku dan awkward banget aku gombalin kamu.",
    image: "/timeline/first-momment.jpeg",
  },
  {
    id: 2,
    title: "First Date",
    date: "Agust 24, 2025",
    description:
      "Aku gatau ini pantas dihitung sebagai first date atau nggak, tapi waktu pertama kita ketemu reaksi kamu iuh dan dingin banget, aku sempet mikir jangan-jangan kamu benci aku ya waktu itu haha.",
    image: "/timeline/firstdate.jpeg",
  },
  {
    id: 3,
    title: "Became a Couple",
    date: "Sept 06, 2025",
    description:
      "Di hari itu kita belum sempat foto bareng, jadi aku pakai foto ini buat ngingetin momen kecil ini. \n\nSiangnya kita makan bareng di Plaza Kalibata, ngobrol panjang tanpa sadar waktu jalan terus. Dari situ aku ngerasa kita bukan cuma sekadar dekat, tapi lagi jatuh suka. Sorenya kita nonton The Conjuring: Last Rites di CGV. Film horor, tapi yang paling aku perhatiiin justru kamu bukan filmnya, dan di momen ini juga kita saling berpelukan ❤️. Aku sampai buka lagi chat WhatsApp kita satu per satu, takut salah tanggal buat momen yang sespesial ini.",
    image: "/love/flower.jpeg",
  },
  {
    id: 4,
    title: "First Trip Together",
    date: "July 20, 2020",
    description:
      "Finally kemarin akhirnya jadi juga ke seaworld sebagai hukuman kekalahan aku karna permen caca. sebelum kita jalan, ada aja ujiannya sampai pertimbangin lagi buat berangkat, walaupun begitu aku seneng bisa wujudin itu bareng kamu, malah kalo bisa kita taruhan lagi wlee",
    image: "/love/seaworld.jpeg",
  },
  {
    id: 5,
    title: "Your Birthday Celebration",
    date: "April 15, 2021",
    description:
      "Hari spesial kamu, aku seneng banget bisa bikin kamu surprise kecil-kecilan. semoga kamu suka yaa hadiahnya (rahasiaa), walaupun sederhana tapi aku pilih dengan sepenuh hati hehe. semoga di umur yang baru ini, semua harapan dan impian kamu bisa tercapai yaa sayang.",
    image: "/love/kondangan.jpeg",
  },
];

const Timeline = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(
    timelineData[0] || null
  );

  const handleClick = (event: TimelineEvent) => {
    setSelectedEvent(event);
  };

  return (
    <div className="mb-24">
      <div className="container mx-auto px-4 lg:px-24">
        <section className="overflow-hidden">
          <div className="mt-28">
            <Heading title="timeline" subtitle="our sweetest moments" />
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:items-start px-5 lg:p-8 mb-16">
            {/* Timeline Section */}
            <div className="flex flex-col lg:mr-8 relative lg:w-1/2">
              {timelineData.map((event, index) => (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => handleClick(event)}
                  className={`group relative flex items-start gap-4 rounded-2xl border px-4 py-4 text-left transition ${
                    selectedEvent?.id === event.id
                      ? "border-mandy/50 bg-rose/40 shadow-md"
                      : "border-transparent hover:border-rose/60 hover:bg-rose/20"
                  }`}
                >
                  {/* Line between nodes */}
                  {index !== timelineData.length - 1 && (
                    <div className="absolute left-5 top-12 h-full w-[2px] bg-rose/60" />
                  )}
                  <div
                    className={`mt-1 h-4 w-4 rounded-full ring-4 ring-white transition ${
                      selectedEvent?.id === event.id ? "bg-mandy" : "bg-rose"
                    }`}
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[.3em] text-gray-400">
                      {event.date}
                    </p>
                    <h3
                      className={`mt-1 text-lg font-semibold ${
                        selectedEvent?.id === event.id
                          ? "text-mandy"
                          : "text-gray-800 group-hover:text-mandy"
                      }`}
                    >
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {event.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Display Card Section */}
            <div className="flex-1 lg:w-1/2">
              {selectedEvent && (
                <div className="relative overflow-hidden rounded-[2rem] border border-rose/60 bg-[#FFF7F0] shadow-[0_24px_60px_-40px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_16px_16px,#F7D7D6_1px,transparent_0)] bg-[length:24px_24px] opacity-40" />
                  <div className="absolute -top-16 -right-12 h-48 w-48 rounded-full bg-[#F4C6CE]/70 blur-2xl" />
                  <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#FAD7B8]/60 blur-2xl" />

                  <div className="relative z-10 p-6 sm:p-8">
                    <div className="overflow-hidden rounded-2xl shadow-md">
                      <img
                        src={selectedEvent.image}
                        alt={selectedEvent.title}
                        className="h-56 sm:h-64 w-full object-cover"
                      />
                    </div>

                    <div className="mt-6">
                      <p className="text-xs uppercase tracking-[.35em] text-[#8C6B72]">
                        {selectedEvent.date}
                      </p>
                      <h2 className="mt-2 text-3xl sm:text-4xl font-pacifico text-[#C24F5C]">
                        {selectedEvent.title}
                      </h2>
                      <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-transparent via-[#E9B8BE] to-transparent" />
                      <p className="mt-4 text-base text-[#3E2E33]">
                        {selectedEvent.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Timeline;
