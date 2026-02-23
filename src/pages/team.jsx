import React from "react";
import Card from "./../components/common/card";
//Core Team Images
import Chairman from "./../assets/images/team/core/tedx_chairman.jpg";
import Principal from "./../assets/images/team/core/tedx_principal.jpg";
import Vice_Principal from "./../assets/images/team/core/tedx_vice_principal.jpg";
//Organizing Team Images
import Organizer from "./../assets/images/team/organizers/tedx_organizer.jpg";
import Co_Org from "./../assets/images/team/organizers/tedx_co_org.jpeg";
import Co_Org1 from "./../assets/images/team/organizers/tedx_co_org1.png";
import Curator from "./../assets/images/team/organizers/tedx_curator.jpg";
//Production and Communication Team Images
import Prod_Lead from "./../assets/images/team/production/tedx_lead.jpeg";
import Prod_Co_Lead from "./../assets/images/team/production/tedx_co_lead.jpg";
import Prod_Mem1 from "./../assets/images/team/production/tedx_mem1.png";
import Prod_Mem2 from "./../assets/images/team/production/tedx_mem2.png";
import Prod_Mem3 from "./../assets/images/team/production/tedx_mem3.png";
import Prod_Mem4 from "./../assets/images/team/production/tedx_mem4.jpg";
import Prod_Vol from "./../assets/images/team/production/tedx_volunteer.png";
// Design Team Images
import Design_Lead from "./../assets/images/team/design/tedx_lead.jpg";
import Design_Co_Lead from "./../assets/images/team/design/tedx_co_lead.png";
import Design_Mem from "./../assets/images/team/design/tedx_member.jpg";
//Technical Team Images
import Tech_Co_Lead from "./../assets/images/team/technical/tedx_co_lead.jpg";
import Tech_Lead from "./../assets/images/team/technical/tedx_lead.jpg";
import Tech_Mem from "./../assets/images/team/technical/tedx_member.jpg";
//Hospitality Team Images
import Hosp_Lead from "./../assets/images/team/hospitality/tedx_lead.jpeg";
import Hosp_Co_Lead from "./../assets/images/team/hospitality/tedx_co_lead.jpg";
import Hosp_Mem1 from "./../assets/images/team/hospitality/tedx_member1.jpg";
import Hosp_Mem2 from "./../assets/images/team/hospitality/tedx_member2.jpg";
import Hosp_Mem3 from "./../assets/images/team/hospitality/tedx_member3.jpeg";
import Hosp_Vol1 from "./../assets/images/team/hospitality/tedx_volunteer1.jpg";
import Hosp_Vol2 from "./../assets/images/team/hospitality/tedx_volunteer2.jpg";
import Hosp_Vol3 from "./../assets/images/team/hospitality/tedx_volunteer3.jpg";
import Hosp_Vol4 from "./../assets/images/team/hospitality/tedx_volunteer4.jpg";
//Marketing and Operations Team Images
import Mark_Lead from "./../assets/images/team/marketing/tedx_lead.jpg";
import Mark_Co_Lead from "./../assets/images/team/marketing/tedx_co_lead.jpg";
import Mark_Mem from "./../assets/images/team/marketing/tedx_member.jpg";
import Mark_Vol1 from "./../assets/images/team/marketing/tedx_volunteer1.jpg";
import Mark_Vol2 from "./../assets/images/team/marketing/tedx_volunteer2.jpg";
import Mark_Vol3 from "./../assets/images/team/marketing/tedx_volunteer3.jpg";
import Mark_Vol4 from "./../assets/images/team/marketing/tedx_volunteer4.jpg";
import Mark_Vol5 from "./../assets/images/team/marketing/tedx_volunteer5.jpg";

const speakers = [
  {
    id: 1,
    name: "Shri K. V. Vishnu Raju",
    role: "Chairman",
    team: "Core Team",
    description:
      "Provides strategic vision, leadership, and institutional guidance for the event.",
    image: Chairman,
  },
  {
    id: 2,
    name: "Dr. M. Venu",
    role: "Principal",
    team: "Core Team",
    description:
      "Oversees academic coordination and ensures smooth institutional support.",
    image: Principal,
  },
  {
    id: 3,
    name: "Dr. M. Srilakshmi",
    role: "Vice Principal",
    team: "Core Team",
    description:
      "Supports academic planning and administrative coordination for the event.",
    image: Vice_Principal,
  },

  // Organising Team
  {
    id: 4,
    name: "Divya Pabolu",
    role: "Organiser",
    team: "Organising Team",
    description: "Manages overall event planning, coordination, and execution.",
    image: Organizer,
  },
  {
    id: 5,
    name: "Reddi Priyanka",
    role: "Co-Organiser",
    team: "Organising Team",
    description:
      "Assists in organising activities, scheduling, and team coordination.",
    image: Co_Org,
  },
  {
    id: 6,
    name: "Suraj Lankey",
    role: "Executive Producer",
    team: "Organising Team",
    description:
      "Supports logistics, planning, and smooth execution of event activities.",
    image: Co_Org1,
  },
  {
    id: 7,
    name: "Akash Mallareddy",
    role: "Curator",
    team: "Organising Team",
    description: "Curates event content, sessions, and speaker coordination.",
    image: Curator,
  },

  // Communication and Production Team
  {
    id: 8,
    name: "Bhavani Devarapudi",
    role: "Lead",
    team: "Communication and Production",
    description:
      "Leads communication strategy, media outreach, and production planning.",
    image: Prod_Lead,
  },
  {
    id: 9,
    name: "Sathvika Dasari",
    role: "Co-Lead",
    team: "Communication and Production",
    description:
      "Supports communication leadership and manages content coordination.",
    image: Prod_Co_Lead,
  },
  {
    id: 10,
    name: "Hema Naraharisetti",
    role: "Member",
    team: "Communication and Production",
    description:
      "Assists in content creation, coordination, and communication workflows.",
    image: Prod_Mem2,
  },
  {
    id: 11,
    name: "Kandula Srikar",
    role: "Member",
    team: "Communication and Production",
    description: "Supports production activities and communication execution.",
    image: Prod_Mem3,
  },
  {
    id: 12,
    name: "Kaushik Dasari",
    role: "Member",
    team: "Communication and Production",
    description:
      "Handles coordination and communication-related responsibilities.",
    image: Prod_Mem1,
  },
  {
    id: 13,
    name: "Mulakala Naga Vasanth Kumar",
    role: "Member",
    team: "Communication and Production",
    description: "Supports communication tasks and production coordination.",
    image: Prod_Mem4,
  },
  {
    id: 14,
    name: "Deeksha",
    role: "Member",
    team: "Communication and Production",
    description:
      "Volunteers in communication support and production activities.",
    image: Prod_Vol,
  },

  // Design Team
  {
    id: 15,
    name: "Praveen",
    role: "Lead",
    team: "Design Team",
    description: "Leads visual design, branding, and creative direction.",
    image: Design_Lead,
  },
  {
    id: 16,
    name: "Penmatsa Chandu",
    role: "Co-Lead",
    team: "Design Team",
    description: "Assists in graphic design and creative asset development.",
    image: Design_Co_Lead,
  },
  {
    id: 17,
    name: "Ch. J. V. Siddhartha",
    role: "Member",
    team: "Design Team",
    description: "Supports creative execution and design deliverables.",
    image: Design_Mem,
  },

  // Hospitality Team
  {
    id: 18,
    name: "Ms. Yasmin SK",
    role: "Lead",
    team: "Hospitality Team",
    description:
      "Leads hospitality planning, guest coordination, and logistics.",
    image: Hosp_Lead,
  },
  {
    id: 19,
    name: "Srinivas",
    role: "Co-Lead",
    team: "Hospitality Team",
    description: "Supports hospitality management and operational execution.",
    image: Hosp_Co_Lead,
  },
  {
    id: 20,
    name: "Ch. A. S. M. S. Kartheek",
    role: "Member",
    team: "Hospitality Team",
    description: "Assists in hospitality operations and guest services.",
    image: Hosp_Mem1,
  },
  {
    id: 21,
    name: "Vivek Sadhu",
    role: "Member",
    team: "Hospitality Team",
    description: "Manages guest arrangements and hospitality coordination.",
    image: Hosp_Mem2,
  },
  {
    id: 22,
    name: "R Mahesh Babu",
    role: "Member",
    team: "Hospitality Team",
    description: "Supports hospitality planning and coordination.",
    image: Hosp_Mem3,
  },
  {
    id: 23,
    name: "Mounika Mopidevi",
    role: "Member",
    team: "Hospitality Team",
    description: "Volunteers in hospitality services and guest support.",
    image: Hosp_Vol1,
  },
  {
    id: 24,
    name: "Lakshman",
    role: "Member",
    team: "Hospitality Team",
    description: "Assists in on-ground hospitality operations.",
    image: Hosp_Vol2,
  },
  {
    id: 25,
    name: "Shanmukha",
    role: "Member",
    team: "Hospitality Team",
    description: "Provides support for hospitality and logistics.",
    image: Hosp_Vol3,
  },
  {
    id: 26,
    name: "Abhi",
    role: "Member",
    team: "Hospitality Team",
    description: "Supports hospitality team during event operations.",
    image: Hosp_Vol4,
  },

  // Marketing and Operations Team
  {
    id: 27,
    name: "Dinesh Yallabandi",
    role: "Lead",
    team: "Marketing and Operations",
    description: "Leads marketing strategy and operational planning.",
    image: Mark_Lead,
  },
  {
    id: 28,
    name: "Veeravalli Subash",
    role: "Co-Lead",
    team: "Marketing and Operations",
    description: "Supports marketing campaigns and operational coordination.",
    image: Mark_Co_Lead,
  },
  {
    id: 29,
    name: "Chaitanya Gubbala",
    role: "Member",
    team: "Marketing and Operations",
    description: "Handles marketing activities and event operations.",
    image: Mark_Mem,
  },
  {
    id: 30,
    name: "Swathi Sopeti",
    role: "Member",
    team: "Marketing and Operations",
    description: "Volunteers in marketing promotions and outreach.",
    image: Mark_Vol1,
  },
  {
    id: 31,
    name: "Chandu Bandarupalli",
    role: "Member",
    team: "Marketing and Operations",
    description: "Supports marketing campaigns and coordination.",
    image: Mark_Vol2,
  },
  {
    id: 32,
    name: "JayaSri Thota",
    role: "Member",
    team: "Marketing and Operations",
    description: "Assists in promotional and marketing activities.",
    image: Mark_Vol3,
  },
  {
    id: 33,
    name: "Ganesh Botcha",
    role: "Member",
    team: "Marketing and Operations",
    description: "Supports operational execution and logistics.",
    image: Mark_Vol4,
  },
  {
    id: 34,
    name: "Harika Sakalabattula",
    role: "Member",
    team: "Marketing and Operations",
    description: "Volunteers in marketing and outreach initiatives.",
    image: Mark_Vol5,
  },

  // Technical Team
  {
    id: 35,
    name: "Farhana",
    role: "Lead",
    team: "Technical Team",
    description:
      "Leads web development, deployment, and technical infrastructure.",
    image: Tech_Lead,
  },
  {
    id: 36,
    name: "Phanindra Nelavalli",
    role: "Co-Lead",
    team: "Technical Team",
    description:
      "Co-leads technical planning, development, and implementation.",
    image: Tech_Co_Lead,
  },
  {
    id: 37,
    name: "T K Mojesh",
    role: "Member",
    team: "Technical Team",
    description: "Contributes to development, testing, and technical support.",
    image: Tech_Mem,
  },
];

export default function Team() {
  const teamGroups = speakers.reduce((groups, speaker) => {
    const team = speaker.team;
    if (!groups[team]) {
      groups[team] = [];
    }
    groups[team].push(speaker);
    return groups;
  }, {});

  const teamOrder = [
    "Core Team",
    "Organising Team",
    "Technical Team",
    "Communication and Production",
    "Design Team",
    "Hospitality Team",
    "Marketing and Operations",
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 md:p-12 font-sans">
      <div className="w-full max-w-7xl my-12">
        <h2 className="text-center text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2 drop-shadow-lg">
          Meet our Core Team
        </h2>
        <div className="mx-auto mb-4 md:mb-6 w-24 sm:w-32 md:w-40 lg:w-48 h-1 bg-red-600"></div>

        <div className="text-center text-white/90 px-4 md:px-8 lg:px-16">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-3">
            The Core team here at TEDx Vishnu Institute is made up of a diverse
            bunch of awesome humans!
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            We are driven by passion and curiosity. We are inspired by ideas.
            And we want to leave the world better than we found it.
          </p>
        </div>
      </div>

      {teamOrder.map((teamName) => {
        const members = teamGroups[teamName];
        if (!members) return null;

        return (
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
        );
      })}
    </div>
  );
}
