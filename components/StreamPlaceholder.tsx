
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const StreamPlaceholder: React.FC = () => {
  return (
    <div className="min-h-screen bg-wedding-900 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
       {/* Background patterns similar to Hero */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-wedding-800/50 via-wedding-900/80 to-wedding-900 pointer-events-none"></div>
       <div className="absolute inset-0 pattern-overlay opacity-5 pointer-events-none"></div>
       
       <div className="relative z-10 max-w-2xl flex flex-col items-center">
         <h1 className="font-serif text-5xl md:text-6xl text-wedding-300 mb-8 animate-fade-in-up">
           Hold Your Horses!
         </h1>
         
         <div className="mb-8 rounded-lg overflow-hidden shadow-2xl border-4 border-wedding-500/30 mx-auto max-w-md animate-fade-in-up" style={{animationDelay: '200ms'}}>
            {/* Minion Dancing/Cheering GIF */}
            <img 
              src="https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif" 
              alt="Minions Dancing" 
              className="w-full h-auto"
            />
         </div>

         <p className="text-wedding-100 text-lg md:text-xl mb-4 font-serif italic animate-fade-in-up" style={{animationDelay: '400ms'}}>
           "Good things come to those who wait... and are invited!"
         </p>
         
         <p className="text-wedding-200/60 mb-12 animate-fade-in-up max-w-md" style={{animationDelay: '500ms'}}>
           We haven't received the live stream links from the videographer just yet. Please check back closer to the event date (7-10 days prior)!
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
