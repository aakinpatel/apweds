
import { EventDetail, TravelOption, Activity } from './types';

export const WEDDING_DETAILS = {
  couple: {
    names: "Aakin Patel & Palak Patel",
    headline: "Forever Begins Now",
    hashtag: "#AakinandPalak"
  },
  date: "July 19, 2026",
  location: {
    venue: "Ashyana Banquets",
    address: "1620 75th St, Downers Grove, IL 60516",
    mapUrl: "https://maps.google.com/?q=Ashyana+Banquets+Downers+Grove"
  },
  story: `We met online, but it never felt like strangers meeting - it felt like fate. What began as friendship turned into a connection that neither of us could ignore. When we finally met in Indianapolis, it was our true Bollywood moment - the spark was instant, the chemistry effortless, and the feeling undeniable. That's when we knew this was real.

Since 2023, distance has tested us, strengthened us, and proved that love always finds a way. We've become each other's strength and light through every challenge. Now, as we look toward 2026, we're ready to end the distance and begin the chapter destiny has always planned for us.`,
  faqs: [
    { question: "What is the dress code?", answer: "We encourage traditional Indian Formal or Black Tie. For the Sangeet, colorful Indian formal wear or Cocktail attire is recommended! For the Wedding Ceremony, please avoid wearing red (bride's color) or black." },
    { question: "What will the weather be like?", answer: "July in Illinois is typically warm and sunny, with temperatures averaging around 80°F. However, all indoor events will be fully air-conditioned for your comfort." },
    { question: "What is the venue address?", answer: "Ashyana Banquets\n1620 75th St, Downers Grove, IL 60516" },
    { question: "Is there parking?", answer: "Yes, Ashyana Banquets provides ample complimentary parking for all guests." }
  ]
};

export const EVENTS: EventDetail[] = [
  {
    id: '1',
    title: 'Haldi',
    time: 'July 17, 2026 - 9:30 AM',
    location: 'Ashyana Banquets',
    description: 'A fun and colorful ceremony where turmeric paste is applied to the bride and groom for a radiant glow.',
    icon: 'party',
    expectedWeather: "Sunny • 75°F",
    liveStreamUrl: "https://youtube.com/live/placeholder?feature=share"
  },
  {
    id: '2',
    title: 'Grah Shanti',
    time: 'July 18, 2026 - 9:00 AM',
    location: 'Ashyana Banquets',
    description: 'A traditional pre-wedding ceremony to seek peace from the planets.',
    icon: 'ganesh',
    expectedWeather: "Clear Skies • 78°F",
    liveStreamUrl: "https://youtube.com/live/placeholder?feature=share"
  },
  {
    id: '3',
    title: 'Sangeet',
    time: 'July 18, 2026 - 6:30 PM',
    location: 'Ashyana Banquets',
    description: 'A festive night of musical performances and dancing in a pre-reception style celebration.',
    icon: 'garrix',
    expectedWeather: "Sunset Clear • 72°F",
    liveStreamUrl: "https://youtube.com/live/placeholder?feature=share"
  },
  {
    id: '4',
    title: 'Wedding Ceremony',
    time: 'July 19, 2026 - 9:00 AM',
    location: 'Ashyana Banquets',
    description: 'Baraat assembly at 9:00 AM. Wedding Ceremony follows immediately.',
    icon: 'ring',
    expectedWeather: "Warm & Sunny • 80°F",
    liveStreamUrl: "https://youtube.com/live/placeholder?feature=share"
  }
];

export const TRAVEL_DETAILS = {
  hotels: [
    {
      name: "Hyatt Regency Lisle near Naperville",
      type: 'hotel',
      description: "Located conveniently near the venue, offering comfortable accommodations.",
      address: "1400 Corporetum Dr, Lisle, IL",
      distance: "3.5 miles from venue",
      priceRange: "$$",
      bookingUrl: "https://www.hyatt.com/events/en-US/group-booking/LISLE/G-PPAP"
    },
    {
      name: "Delta Hotels Chicago Willowbrook",
      type: 'hotel',
      description: "Modern accommodations with convenient access to the venue.",
      address: "7800 Kingery Hwy, Willowbrook, IL",
      distance: "~2.5 miles from venue",
      priceRange: "$$$",
      bookingUrl: "https://www.marriott.com/en-us/hotels/chido-delta-hotels-chicago-willowbrook/overview/"
    },
    {
      name: "DoubleTree by Hilton Lisle Naperville",
      type: 'hotel',
      description: "Modern hotel with spacious rooms and excellent amenities.",
      address: "3003 Corporate W Dr, Lisle, IL",
      distance: "4.0 miles from venue",
      priceRange: "$$",
      bookingUrl: "https://doubletreenaperville.bookonline.com/hotel/doubletree-by-hilton-lisle-naperville?id2=130012647007&gad_source=1&gad_campaignid=14390331726&gbraid=0AAAAABov2PYfyrTWAZbOhX5iDr58hRu-u&gclid=CjwKCAiAuIDJBhBoEiwAxhgyFhHnjbDoabb0kgAOcyWAgUhgRGVHgiU7Apop6zGrIvDAVgQEWEhdZBoCU6oQAvD_BwE"
    }
  ] as TravelOption[],
  airports: [
    {
      name: "O'Hare International Airport (ORD)",
      type: 'transport',
      description: "Major international hub with global connections.",
      address: "Chicago, IL",
      distance: "~22 miles (30-45 mins)",
      bookingUrl: "https://flychicago.com/ord"
    },
    {
      name: "Midway International Airport (MDW)",
      type: 'transport',
      description: "Convenient for domestic flights, especially Southwest.",
      address: "Chicago, IL",
      distance: "~19 miles (30-40 mins)",
      bookingUrl: "https://flychicago.com/midway"
    }
  ] as TravelOption[],
  activities: [
    {
      title: "Summer Nights Classic Car Show",
      description: "Live music and over 100 classic cars lining Main Street. Friday, July 17th, 6:00 PM - 9:00 PM.",
      location: "Downtown Downers Grove"
    },
    {
      title: "Naperville Farmers Market",
      description: "Fresh local produce, artisan cheeses, and handmade crafts. Saturday, July 18th, 7:00 AM - 12:00 PM.",
      location: "5th Avenue Station, Naperville"
    }
  ] as Activity[]
};

export const SYSTEM_INSTRUCTION = `You are ChaiGPT, a helpful and enthusiastic wedding assistant for ${WEDDING_DETAILS.couple.names}. 
Use the following details to answer guest questions:

Wedding Details:
- Date: ${WEDDING_DETAILS.date}
- Venue: ${WEDDING_DETAILS.location.venue}, ${WEDDING_DETAILS.location.address}
- Hashtag: ${WEDDING_DETAILS.couple.hashtag}

Events:
${EVENTS.map(e => `- ${e.title}: ${e.time} at ${e.location}. (${e.description}) Weather: ${e.expectedWeather}`).join('\n')}

FAQs:
${WEDDING_DETAILS.faqs.map(f => `Q: ${f.question} A: ${f.answer}`).join('\n')}

Travel:
${TRAVEL_DETAILS.hotels.map(h => `- ${h.name} (${h.priceRange}): ${h.description} (${h.distance})`).join('\n')}

Your tone should be polite, warm, and inviting. Use Indian greetings like "Namaste" occasionally. Keep answers concise.`;
