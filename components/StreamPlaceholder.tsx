
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { EVENTS } from '../constants';

// Updated GIF Map with verified reliable Minions GIFs
// Using high-availability CDN links
const GIF_MAP: Record<string, string> = {
  // Haldi: Minion drinking/yellow theme (Long Giphy URL for reliability)
  '1': "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2J5N3p1bmpybTBkcGNtajN4MTlzOHc4ZnFtMm9zdjNsZ3kybTUzayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zLwGFRBSFf0g8/giphy.gif",
  
  // Grah Shanti: Minions Praying/Clapping (Long Giphy URL for reliability)
  '2': "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHVraDI2c2hnYXd6d2R1b2NjbjdmZm9rdGYwcjZvbmNteHJ1MjczdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2KA0SDTC5ouZtlsJst/giphy.gif",
  
  // Sangeet: Disco Minions
  '3': "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeno5anRhZmc2c3BzcnpxOHN6aDBjdXF3cjJ1Nm1obml5cmNsMmliNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3EfgWHj0YIDrW/giphy.gif",
  
  // Wedding: Minions Celebrating
  '4': "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjgza2tlamV1ZTBoOTQ1ampwMDFocHM1Zmt2cmM5b25raG5iczBrOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cKbLJzS0cOTklEmzto/giphy.gif",
};

const DEFAULT_GIF = GIF_MAP['4'];

const StreamPlaceholder: React.FC = () => {
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get('eventId');
  
  const event = EVENTS.find(e => e.id === eventId);
  // Ensure we have a valid GIF, otherwise fallback
  const gifUrl = eventId && GIF_MAP[eventId] ? GIF_MAP[eventId] : DEFAULT_GIF;

  return (
    <div className="min-h-screen bg-wedding-900 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
       {/* Background patterns similar to Hero */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-wedding-800/50 via-wedding-900/80 to-wedding-900 pointer-events-none"></div>
       <div className="absolute inset-0 pattern-overlay opacity-5 pointer-events-none"></div>
       
       <div className="relative z-10 max-w-2xl flex flex-col items-center">
         <h1 className="font-serif text-4xl md:text-6xl text-wedding-300 mb-8 animate-fade-in-up leading-tight">
           Hold Your Horses!
         </h1>
         
         <div className="mb-8 rounded-lg overflow-hidden shadow-2xl border-4 border-wedding-500/30 mx-auto max-w-md animate-fade-in-up bg-black" style={{animationDelay: '200ms'}}>
            <img 
              src={gifUrl}
              alt="Minions Waiting..." 
              className="w-full h-auto object-cover"
            />
         </div>

         <p className="text-wedding-100 text-lg md:text-xl mb-4 font-serif italic animate-fade-in-up" style={{animationDelay: '400ms'}}>
           "Good things come to those who wait... and are invited!"
         </p>
         
         <p className="text-wedding-200/60 mb-12 animate-fade-in-up max-w-md font-light" style={{animationDelay: '500ms'}}>
           We haven't received the live stream link for {event ? <strong className="text-wedding-300 font-medium">{event.title}</strong> : "this event"} just yet. Please check back closer to the event date (7-10 days prior)!
         </p>

         <Link 
           to="/"
           className="inline-flex items-center gap-2 text-wedding-300 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1 animate-fade-in-up"
           style={{animationDelay: '600ms'}}
         >
           <ArrowLeft size={20} />
           <span>Back to Wedding Details</span>
         </Link>
       </div>
    </div>
  );
};

export default StreamPlaceholder;
