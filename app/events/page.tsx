"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar, Clock } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* DATA                                       */
/* -------------------------------------------------------------------------- */

const day1Events = [
  {
    title: "ROBO WARS",
    description: "The flagship combat robotics event. 15kg and 60kg categories fighting for dominance.",
    src: "https://images.unsplash.com/photo-1563206767-5b1d972b9fb9?q=80&w=1974&auto=format&fit=crop",
    date: "Feb 12",
    time: "09:00 AM",
    color: "#1a1a1a",
  },
  {
    title: "CAD MASTER",
    description: "A precision design challenge. Create complex assemblies in SolidWorks under extreme pressure.",
    src: "https://images.unsplash.com/photo-1581094794329-cd136ce404ea?q=80&w=2070&auto=format&fit=crop",
    date: "Feb 12",
    time: "02:00 PM",
    color: "#171717",
  },
  {
    title: "DRONE RACING",
    description: "FPV drone racing through a neon-lit obstacle course. Speed and reflex test.",
    src: "https://images.unsplash.com/photo-1506947411487-a5673826e6e6?q=80&w=2070&auto=format&fit=crop",
    date: "Feb 12",
    time: "05:00 PM",
    color: "#141414",
  },
  {
    title: "HACK OVERFLOW",
    description: "The beginning of the 36-hour industrial AI hackathon.",
    src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop",
    date: "Feb 12",
    time: "08:00 PM",
    color: "#0f0f0f",
  },
];

const day2Events = [
  {
    title: "NITRO RALLY",
    description: "High-speed RC car racing on an all-terrain track. Test your driving skills.",
    src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop",
    date: "Feb 13",
    time: "10:00 AM",
    color: "#1a1a1a",
  },
  {
    title: "BRIDGE IT",
    description: "Structural engineering challenge using balsa wood and glue.",
    src: "https://images.unsplash.com/photo-1513828583685-6162b5b7593a?q=80&w=2070&auto=format&fit=crop",
    date: "Feb 13",
    time: "01:00 PM",
    color: "#171717",
  },
  {
    title: "CIRCUITRIX",
    description: "Debug complex embedded systems before the fuse blows.",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    date: "Feb 13",
    time: "03:00 PM",
    color: "#141414",
  },
  {
    title: "PRIZE NIGHT",
    description: "The grand finale and award distribution ceremony.",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    date: "Feb 13",
    time: "07:00 PM",
    color: "#0f0f0f",
  },
];

/* -------------------------------------------------------------------------- */
/* MAIN PAGE                                   */
/* -------------------------------------------------------------------------- */

export default function CascadingEventsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
        {/* Hide Scrollbar for clean UI */}
        <style jsx global>{`
          body::-webkit-scrollbar { display: none; }
          body { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      {/* {/* Introduction Space 
      <div className="h-[40vh] flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-800">
          Scroll to Explore
        </h1>
      </div> */}

      {/* --- DAY 1 SECTION (Normal Layout) --- */}
      <DaySection 
        dayTitle="Day 01 - The Opening" 
        events={day1Events} 
        isReversed={false} 
      />

      {/* Spacer between days */}
      <div className="h-[20vh] bg-gradient-to-b from-black to-zinc-900/50" />

      {/* --- DAY 2 SECTION (Reversed Layout) --- */}
      <DaySection 
        dayTitle="Day 02 - The Climax" 
        events={day2Events} 
        isReversed={true} 
      />
      
      {/* <div className="h-[50vh] flex items-center justify-center text-zinc-800 font-mono">
        END OF SCHEDULE
      </div> */}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* DAY SECTION COMPONENT                            */
/* -------------------------------------------------------------------------- */

const DaySection = ({ dayTitle, events, isReversed }: { dayTitle: string, events: any[], isReversed: boolean }) => {
  const container = useRef(null);
  
  // Track scroll ONLY within this specific day section
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={container} className="relative min-h-[300vh] mb-20"> {/* min-h ensures we have scroll space */}
      
      {/* Sticky Day Header */}
      <div className="sticky top-10 z-20 flex justify-center mb-10 pointer-events-none">
        <span className="bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-white border border-white/10">
            {dayTitle}
        </span>
      </div>

      <div className={`flex ${isReversed ? "flex-row-reverse" : "flex-row"} relative`}>
        
        {/* --- TIMELINE COLUMN (Sticky) --- */}
        <div className="w-[15%] md:w-[20%] hidden md:flex justify-center relative">
          <div className="h-screen sticky top-0 flex flex-col justify-center">
             <Timeline progress={scrollYProgress} events={events} />
          </div>
        </div>

        {/* --- EVENTS COLUMN (Scrollable Stack) --- */}
        <div className="w-full md:w-[80%] px-4 md:px-10">
          {events.map((project, i) => {
            const targetScale = 1 - ((events.length - i) * 0.05);
            return (
              <Card
                key={i}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                total={events.length}
              />
            );
          })}
        </div>

      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* TIMELINE                                    */
/* -------------------------------------------------------------------------- */

const Timeline = ({ progress, events }: { progress: MotionValue<number>; events: any[] }) => {
  return (
    <div className="relative flex flex-col gap-16 border-l border-zinc-800 pl-8">
      
      {/* The Active Line Indicator */}
      <motion.div 
         className="absolute left-[-1px] top-0 w-[3px] bg-yellow-500 origin-top"
         style={{ height: "100%", scaleY: progress }}
      />

      {events.map((event, i) => {
        // Logic: Is this specific event active right now?
        const step = 1 / events.length;
        const start = i * step;
        const end = start + step;
        
        const opacity = useTransform(progress, [start, end], [0.3, 1]);
        const scale = useTransform(progress, [start, end], [1, 1.2]);
        const color = useTransform(progress, [start, end], ["#52525b", "#EAB308"]); // Zinc to Yellow

        return (
            <motion.div key={i} style={{ opacity }} className="flex flex-col gap-1">
                <motion.span style={{ color }} className="text-xs font-mono font-bold uppercase tracking-wider">
                    {event.time}
                </motion.span>
                <motion.span style={{ scale, originX: 0 }} className="text-sm font-bold uppercase tracking-tight">
                    {event.title}
                </motion.span>
            </motion.div>
        )
      })}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* CARD                                      */
/* -------------------------------------------------------------------------- */

const Card = ({ i, title, description, src, date, time, color, progress, range, targetScale, total }: any) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          // Calculate offset so they stack visibly: Card 1 is top, Card 2 is slightly lower, etc.
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="
          relative
          w-full
          max-w-4xl
          h-[60vh] md:h-[600px]
          rounded-3xl
          overflow-hidden
          border
          border-white/10
          shadow-2xl
          origin-top
        "
      >
        <div className="flex flex-col md:flex-row h-full">
          
          {/* TEXT CONTENT */}
          <div className="w-full md:w-[45%] p-8 md:p-12 flex flex-col justify-between z-10 relative">
            <div>
              <div className="flex items-center gap-3 text-zinc-500 text-xs font-mono tracking-widest uppercase mb-8">
                <span className="flex items-center gap-1 text-zinc-400"><Calendar size={12} /> {date}</span>
                <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                <span className="flex items-center gap-1 text-yellow-600"><Clock size={12} /> {time}</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] text-white mb-6">
                {title}
              </h2>

              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                {description}
              </p>
            </div>

            <button className="w-fit flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-yellow-400 transition-colors">
               Register Event <ArrowUpRight size={16} />
            </button>
          </div>

          {/* IMAGE CONTENT */}
          <div className="relative w-full md:w-[55%] h-full overflow-hidden group">
            <div className="absolute inset-0 bg-zinc-900" /> {/* Placeholder while loading */}
            <img
              src={src}
              alt={title}
              className="w-full h-full object-cover grayscale scale-105 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
            {/* Gradient Overlay for text readability on mobile mostly */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-black/50 md:to-transparent" />
          </div>
          
        </div>
      </motion.div>
    </div>
  );
};