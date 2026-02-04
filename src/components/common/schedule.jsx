import React from "react";

const scheduleData = [
  {
    sno: 1,
    title: "Opening Ceremony",
    description: "Welcome to TEDxVishnu Institute",
    planOfAction: [
      "Prayer Song & Classical Dance Performance",
      "Welcome Address - Dr. M. Venu, Principal, Vishnu Institute of Technology",
      "Opening Remarks - Mr. Suraj Lankey, Organizer",
      "Introduction - Ms. Vaishnavi Dasika, Co-Organizer",
    ],
    time: "9:30 AM",
    duration: "30 mins",
    type: "opening",
  },
  {
    sno: 2,
    title: "Mr. Sandeep Israni",
    description: "Partner, Tulip Group",
    planOfAction: ["Entrepreneurship & Business Innovation"],
    time: "10:00 AM",
    duration: "20 mins",
    type: "talk",
  },
  {
    sno: 3,
    title: "Mr. Bijay Bairagi",
    description: "Supply Chain Management Head, East West Seeds",
    planOfAction: ["Sustainable Agriculture & Global Supply Chains"],
    time: "10:20 AM",
    duration: "20 mins",
    type: "talk",
  },
  {
    sno: 4,
    title: "Dr. JVS Bhaskar",
    description: "Founder & CEO, Inspire International Foundation",
    planOfAction: ["Social Impact & Community Development"],
    time: "10:40 AM",
    duration: "20 mins",
    type: "talk",
  },
  {
    sno: 5,
    title: "Mr. Eswar Bolegar",
    description: "Fitness Influencer & Wellness Coach",
    planOfAction: ["Health, Fitness & Mental Wellness"],
    time: "11:00 AM",
    duration: "20 mins",
    type: "talk",
  },
  {
    sno: 6,
    title: "Mr. Ravi Mantri",
    description: "Author & Storyteller",
    planOfAction: ["The Power of Stories & Creative Writing"],
    time: "11:20 AM",
    duration: "20 mins",
    type: "talk",
  },
  {
    sno: 7,
    title: "Dr. Moksha Kalyanram Abhiramula",
    description: "Advocate & Legal Expert",
    planOfAction: ["Justice, Rights & Social Change"],
    time: "11:40 AM",
    duration: "20 mins",
    type: "talk",
  },
  {
    sno: 8,
    title: "Lunch Break",
    description: "Networking & Refreshments",
    planOfAction: ["Enjoy lunch and connect with fellow attendees"],
    time: "12:00 PM",
    duration: "60 mins",
    type: "break",
  },
  {
    sno: 9,
    title: "Cultural Performance",
    description: "Artistic Expression",
    planOfAction: ["Live Cultural Performance by Students"],
    time: "1:00 PM",
    duration: "10 mins",
    type: "cultural",
  },
  {
    sno: 10,
    title: "Mr. Raul Handa",
    description: "Founder & CEO, The Forttuna Group",
    planOfAction: ["Leadership & Strategic Growth"],
    time: "1:10 PM",
    duration: "20 mins",
    type: "talk",
  },
  {
    sno: 11,
    title: "Ms. Sahithi Divi",
    description: "Tourism Consultant, Govt. of Andhra Pradesh",
    planOfAction: ["Heritage Tourism & Cultural Preservation"],
    time: "1:30 PM",
    duration: "20 mins",
    type: "talk",
  },
  {
    sno: 12,
    title: "Mr. Kowshik Maridi",
    description: "Financial Expert & Investment Strategist",
    planOfAction: ["Financial Literacy & Smart Investing"],
    time: "1:50 PM",
    duration: "20 mins",
    type: "talk",
  },
  {
    sno: 13,
    title: "Curator's Address",
    description: "Akash Rao Mallareddy, Curator, TEDxVishnu Institute",
    planOfAction: ["Reflections on Shifting Realms"],
    time: "2:10 PM",
    duration: "5 mins",
    type: "closing",
  },
  {
    sno: 14,
    title: "Vote of Thanks",
    description: "Ms. Srilakshmi, Faculty Coordinator",
    planOfAction: ["Gratitude & Acknowledgments"],
    time: "2:15 PM",
    duration: "5 mins",
    type: "closing",
  },
  {
    sno: 15,
    title: "Valedictory Ceremony",
    description: "Official Closing",
    planOfAction: ["Closing Remarks & Event Conclusion"],
    time: "2:25 PM",
    duration: "5 mins",
    type: "closing",
  },
  {
    sno: 16,
    title: "Photo Session",
    description: "Capture the Memories",
    planOfAction: ["Group Photos with Speakers & Attendees"],
    time: "2:35 PM",
    duration: "5 mins",
    type: "closing",
  },
];

const ScheduleItem = ({ item, index, isLast }) => {
  return (
    <div className="relative flex gap-6 md:gap-8 lg:gap-12 group">
      {/* Time Section - Left (Desktop Only) */}
      <div className="hidden md:block w-40 lg:w-48 flex-shrink-0 text-right pt-1">
        <div className="space-y-2">
          <div
            className="inline-block px-4 py-2 rounded-lg bg-red-700 backdrop-blur-sm
            border border-red-600/30 text-white font-bold text-base md:text-lg lg:text-xl
            shadow-[0_0_20px_rgba(220,38,38,0.2)]"
          >
            {item.time}
          </div>
          <div className="text-white/60 text-xs md:text-sm font-semibold">
            {item.duration}
          </div>
        </div>
      </div>

      {/* Vertical Line & Dot */}
      <div className="relative flex flex-col items-center">
        {/* Dot */}
        <div
          className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)]
          border-4 border-black z-10 flex-shrink-0"
        />

        {/* Vertical Line */}
        {!isLast && (
          <div className="w-[2px] flex-1 bg-gradient-to-b from-red-600/60 via-red-600/30 to-red-600/60" />
        )}
      </div>

      {/* Content Section - Right */}
      <div className="flex-1 pb-8 md:pb-12">
        <div
          className="bg-gradient-to-br from-white/12 to-transparent backdrop-blur-sm
          border border-white/10 rounded-2xl p-4 md:p-6 lg:p-8
          shadow-[0_0_30px_rgba(0,0,0,0.3)]"
        >
          {/* Header Section */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-start gap-4 flex-1">
              {/* Serial Number Badge */}
              <div
                className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 
                rounded-full bg-gradient-to-br from-red-600 to-red-700 
                border-2 border-black shadow-[0_0_20px_rgba(220,38,38,0.6)]
                flex-shrink-0"
              >
                <span className="text-white text-base md:text-lg font-bold">
                  {item.sno}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex-1 min-w-0">
                <h3
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-red-600 
                  leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mb-2"
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm md:text-base lg:text-lg text-white/80 font-medium
                  drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                >
                  {item.description}
                </p>
              </div>
            </div>

            {/* Time Section - Mobile (Right Top) */}
            <div className="md:hidden flex-shrink-0 text-right">
              <div className="text-red-600 font-bold text-sm leading-tight">
                {item.time}
              </div>
              <div className="text-white/60 text-xs font-semibold mt-1">
                {item.duration}
              </div>
            </div>
          </div>

          {/* Plan of Action / Details */}
          <div className="space-y-2 pl-14 md:pl-16">
            {item.planOfAction.map((action, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0
                  shadow-[0_0_8px_rgba(220,38,38,0.6)]"
                />
                <p
                  className="text-sm md:text-base lg:text-lg font-medium text-white/90
                  leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                >
                  {action}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function Schedule() {
  return (
    <div className="relative w-full bg-black py-16 md:py-24 lg:py-32 px-8 md:px-12 lg:px-15 xl:px-30 overflow-hidden">
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-center text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2 drop-shadow-lg">
            Event Schedule
          </h2>
          <div className="mx-auto mb-4 md:mb-6 w-24 sm:w-32 md:w-40 lg:w-48 h-1 bg-red-600"></div>
        </div>

        {/* Timeline */}
        <div className="w-full ">
          {scheduleData.map((item, index) => (
            <ScheduleItem
              key={item.sno}
              item={item}
              index={index}
              isLast={index === scheduleData.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Schedule;
