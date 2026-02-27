import React from "react";

const scheduleData = [
  {
    sno: 1,
    title: "Opening Ceremony",
    description: "Welcome to TEDxVishnu Institute",
    planOfAction: [
      "Prayer Song & Classical Dance Performance",
      "Address by Dr. M. Venu, Principal, Vishnu Institute of Technology",
      "Address by Mrs. M. Srilakshmi, Vice Principal & Faculty Coordinator, Vishnu Institute of Technology",
      "Address by Ms. Divya Pabolu, Organizer, TEDxVishnu Institute",
      "Address by Ms. Priyanka Reddi, Co-Organizer, TEDxVishnu Institute",
    ],
    time: "10:00 AM",
    duration: "30 mins",
    type: "opening",
  },
  {
    sno: 2,
    title: "Prof. Rajanikanth Aluvalu",
    description: "Director, SIT Hyderabad, Symbiosis International University (Pune)",
    planOfAction: ["Talk 1"],
    time: "10:30 AM",
    duration: "20 mins",
    type: "talk",
  },
  {
    sno: 3,
    title: "Ms. Ashile Sharmila Anand",
    description: "Founder & Author, Aasha Academia",
    planOfAction: ["Talk 2"],
    time: "10:50 AM",
    duration: "20 mins",
    type: "talk",
  },
  {
    sno: 4,
    title: "Sri Harsha B. R.",
    description: "VP & Business Head, Elegant Builders and Developers",
    planOfAction: ["Talk 3"],
    time: "11:10 AM",
    duration: "20 mins",
    type: "talk",
  },
  {
    sno: 5,
    title: "Western Dance",
    description: "Artistic Expression",
    planOfAction: ["Western Dance Performance"],
    time: "11:30 AM",
    duration: "10 mins",
    type: "cultural",
  },
  {
    sno: 6,
    title: "Mr. Anil Kumar Vishwanandhula",
    description: "Founder & CEO, EDTEX",
    planOfAction: ["Talk 4"],
    time: "11:40 AM",
    duration: "20 mins",
    type: "talk",
  },
  {
    sno: 7,
    title: "Ms. Lakkireddy Abhigna Reddy",
    description: "Content Creator",
    planOfAction: ["Talk 5"],
    time: "12:00 PM",
    duration: "20 mins",
    type: "talk",
  },
  {
    sno: 8,
    title: "Lunch Break",
    description: "Networking & Refreshments",
    planOfAction: ["Enjoy lunch and connect with fellow attendees"],
    time: "12:20 PM",
    duration: "70 mins",
    type: "break",
  },
  {
    sno: 9,
    title: "Music Band",
    description: "Musical Performance",
    planOfAction: ["Live Music Band Performance"],
    time: "1:30 PM",
    duration: "20 mins",
    type: "cultural",
  },
  {
    sno: 10,
    title: "Manohar Chivukula",
    description: "Founder, Mencyclopedia",
    planOfAction: ["Talk 6"],
    time: "1:50 PM",
    duration: "20 mins",
    type: "talk",
  },
  {
    sno: 11,
    title: "Lakshmi Sravanthi Pepakayala",
    description: "Actor & Content Creator",
    planOfAction: ["Talk 7"],
    time: "2:10 PM",
    duration: "20 mins",
    type: "talk",
  },
  {
    sno: 12,
    title: "Valedictory Ceremony",
    description: "Official Closing",
    planOfAction: [
      "Closing Remarks",
      "Vote of Thanks",
      "Group Photos with Speakers & Attendees",
    ],
    time: "2:30 PM",
    duration: "30 mins",
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
