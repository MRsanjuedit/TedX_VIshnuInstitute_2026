import React from "react";
import Card from "./../components/common/card";

const speakers = [
  {
    id: 1,
    name: "Ashile Sharmila Anand",
    role: "Founder & Author, The Ashile Sharmila Anand Foundation",
    team: "TEDx Speakers",
    description: "Ashile is a 22-year-old entrepreneur, and internationally certified trainer, deeply committed to working with children and young adults. She is the Co-Founder of Aasha Academia, a platform focused on academics and personal development for children. She is the author of the bestselling book I Miss Understood, and has trained over 10,000 students across schools and colleges in India. Ashile has conducted workshops for institutions such as the London School of Economics, AIIMS, Barclays, and several leading educational institutions across the country & abroad. Currently a student at the London School of Economics, Ashile combines academic rigour with real-world impact. In recognition of her work, she was recently honoured with the 'Inspiring Annette Award' by Rotary. Her Mission is to transform the education system that creates young leaders that shine their light so bright that the world becomes a happier, better place.",
    image: "/speakers/Ashile.webp",
  },
  {
    id: 2,
    name: "Manohar Chivukula",
    role: "Founder & Influencer, Mencyclopedia",
    team: "TEDx Speakers",
    description: "Manohar Chivukula is the founder of Mencyclopedia, a trailblazing platform that brought men’s selfcare, grooming, fashion and lifestyle conversations to Telugu-speaking audiences where such topics were once considered taboo. As one of the first in South India to break into this space, he set out to dismantle stereotypes that framed self-care as unnecessary or unmanly. Driven by a clear mission to make men better Manohar simplifies science into actionable insights that go beyond grooming, emphasizing awareness, discipline, and self-respect as foundations of modern masculinity. Through clarity and consistency, he continues to reshape how men in South India view self-care and personal growth.",
    image: "/speakers/Manohar.webp",
  },
  {
    id: 3,
    name: "Abhigna Reddy",
    role: "Influencer",
    team: "TEDx Speakers",
    description:
      'Lakki Reddy Abhigna Reddy is a full-time content creator who believes that "life is meant to be celebrated, not just survived". She began her journey by completing engineering in Artificial Intelligence and Machine Learning with a research background and is currently pursuing law. Through her digital storytelling, she shares moments from lifestyle, skincare, travel and personal growth often alongside her super-loving family, fondly embraced by audiences for their warmth and positivity. Her online internet family loves her so deeply that they embrace her as their own, treating her like a member of their home, while many fondly call her akka an elder sister who cares wholeheartedly. Known for her girl-next-door energy, Abhigna believes life isn\'t a race toward destinations but a collection of moments meant to be lived fully. After many experiences, she chose to slow down and truly live, reminding others that this one life deserves joy, presence, and purpose.',
    image: "/speakers/Abhigna.webp",
  },
  {
    id: 4,
    name: "Lakshmi Shravanthi Pepakayala",
    role: "Content Creator & Actor",
    team: "TEDx Speakers",
    description:
      "At just 22, she is a full-time content creator who turned her passion into purpose within five months, building a massive audience that eagerly awaits her nostalgic and entertaining videos—many reaching millions. In college, when she spoke about films and reels, people often looked at her like a fool. But she chose belief over doubt and dreams over judgment. The same girl once laughed at now stands on stage as a speaker, proving that courage can rewrite any story. An aspiring actor working toward the big screen, and self-belief can turn any ordinary girl into an extraordinary inspiration.",
    image: "/speakers/Shravanthi.webp",
  },
  {
    id: 5,
    name: "Prof. Rajanikanth Aluvalu",
    role: "Director, SIT Hyderabad, Symbiosis International (Deemed University), Pune, India",
    team: "TEDx Speakers",
    description:
      "Rajanikanth Aluvalu is an accomplished academician with over 22 years of experience in Computer Science and Engineering. He holds a Ph.D. in CSE with specialization in cloud computing and is an IGIP-certified International Engineering Educator. He currently serves as Director of Symbiosis Institute of Technology, Hyderabad, a constituent of Symbiosis International (Deemed University). He has published 150+ research papers, edited seven books with leading publishers, and received the Best Faculty Advisor Award from the IEEE Hyderabad Section. He is a Life Member of Indian Society for Technical Education and a member of ACM.",
    image: "/speakers/Rajanikanth.webp",
  },
  {
    id: 6,
    name: "Anil Kumar Vishwanadhula",
    role: "Founder & CEO",
    team: "TEDx Speakers",
    description:
      "Anil is the Founder and CEO of EDTEX that develops Digital Transformation Solutions to business schools and universities. The Solutions developed by EDTEX are used at IIM Ahmedabad, IIM Bangalore, IIM Calcutta, ISB, IIT Bombay and IISc Bangalore. If you have to describe EDTEX in one sentence, it's like a Zoho for Education. Before starting EDTEX, Anil studied B.Tech Computer Science from IIT Guwahati and MBA from IIM Ahmedabad. He is very passionate about building Tech Products and worked at Yahoo! And Microsoft before starting up. Before EDTEX, Anil also co-founded two other startups. One is WINSPIRE - a student magazine for motivation and career guidance. Secondly, Anil built Epaata, a personal radio for Telugu songs. Anil is inspired by Sreedhar Vembu's model of Bootstrapped Entrepreneurship and personally chose this model to build EDTEX. Anil is running EDTEX for the last 8 years and he wants to make it global and be the No.1 company in the Higher Education Space Globally.",
    image: "/speakers/Anil.webp",
  },
  {
    id: 7,
    name: "Sri Harsha B. R.",
    role: "VP & Business Head, Elegant Builders and Developers",
    team: "TEDx Speakers",
    description:
      "Sri Harsha B.R. is a business leader and mentor with over two decades of experience across technology, real estate, and entrepreneurship. He has worked with organizations such as Tata Consultancy Services (TCS) and Thomson Reuters, managing global teams and large-scale business processes. He later founded a prop-tech venture focused on integrating technology into real estate operations. A Realty+ 40 Under 40 honoree, he actively coordinates with universities to bridge the gap between education and enterprise. Currently, he leads the business at Elegant Builders & Developers as VP & Business Head and continues to work as a trainer and motivator, driven by disciplined systems, ethical leadership, and long-term thinking.",
    image: "/speakers/Harsha.webp",
  },

];

export default function Speakers() {
  const teamGroups = speakers.reduce((groups, speaker) => {
    const team = speaker.team;
    if (!groups[team]) {
      groups[team] = [];
    }
    groups[team].push(speaker);
    return groups;
  }, {});

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 md:p-12 font-sans">
      <div className="w-full max-w-7xl my-12">
        <h2 className="text-center text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2 drop-shadow-lg">
          Our Speakers
        </h2>
        <div className="mx-auto mb-4 md:mb-6 w-24 sm:w-32 md:w-40 lg:w-48 h-1 bg-red-600"></div>

        <div className="text-center text-white/90 px-4 md:px-8 lg:px-16">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-3">
            Get ready to be inspired by our amazing lineup of speakers!
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Stay tuned as we reveal the thought leaders who will share their
            ideas worth spreading.
          </p>
        </div>
      </div>

      {Object.entries(teamGroups).map(([teamName, members]) => (
        <div key={teamName} className="w-full max-w-7xl mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-red-600"></div>
            <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold">
              {teamName}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {members.map((speaker) => (
              <Card key={speaker.id} data={speaker} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
