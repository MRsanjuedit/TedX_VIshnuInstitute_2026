import React from "react";
import Card from "./../components/common/card";

const speakers = [
  {
    id: 1,
    name: "Speaker 1",
    role: "Speaker",
    team: "TEDx Speakers",
    description: "To be announced soon.",
  },
  {
    id: 2,
    name: "Speaker 2",
    role: "Speaker",
    team: "TEDx Speakers",
    description: "To be announced soon.",
  },
  {
    id: 3,
    name: "Speaker 3",
    role: "Speaker",
    team: "TEDx Speakers",
    description: "To be announced soon.",
  },
  {
    id: 4,
    name: "Speaker 4",
    role: "Speaker",
    team: "TEDx Speakers",
    description: "To be announced soon.",
  },
  {
    id: 5,
    name: "Speaker 5",
    role: "Speaker",
    team: "TEDx Speakers",
    description: "To be announced soon.",
  },
  {
    id: 6,
    name: "Speaker 6",
    role: "Speaker",
    team: "TEDx Speakers",
    description: "To be announced soon.",
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
