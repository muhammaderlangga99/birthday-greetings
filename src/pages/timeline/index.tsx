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
    title: "First Meeting",
    date: "February 14, 2020",
    description:
      "We met for the first time at a coffee shop on Valentine's Day. It was an unexpected encounter that turned out to be unforgettable.",
    image: "/love/first1.jpeg",
  },
  {
    id: 2,
    title: "First Date",
    date: "March 1, 2020",
    description:
      "Our first official date! We went to a movie and had dinner at our favorite Italian restaurant. It was the perfect start to our journey together.",
    image: "/love/movie.jpeg",
  },
  {
    id: 3,
    title: "Became a Couple",
    date: "April 15, 2020",
    description:
      "After a few amazing dates, we decided to make it official. We became a couple and shared this special moment with our closest friends.",
    image: "/love/flower.jpeg",
  },
  {
    id: 4,
    title: "First Trip Together",
    date: "July 20, 2020",
    description:
      "We went on our first trip together to Bali. It was a magical experience filled with laughter, adventure, and unforgettable memories.",
    image: "/love/seaworld.jpeg",
  },
  {
    id: 5,
    title: "First Anniversary",
    date: "April 15, 2021",
    description:
      "Celebrated our first anniversary together! We reminisced about all the wonderful memories we've made and looked forward to many more.",
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
