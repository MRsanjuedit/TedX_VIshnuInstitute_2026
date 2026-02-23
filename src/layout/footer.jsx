import React from "react";
import InfoCard from "../components/footer/info_card";
import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";

function Footer() {
  const contactList = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7674957556",
      link: "tel:+917674957556",
    },
    {
      icon: Mail,
      title: "Email",
      value: "tedxvishnu@vishnu.edu.in",
      link: "mailto:tedxvishnu@vishnu.edu.in",
    },
    {
      icon: MapPin,
      title: "Address",
      value:
        "Vishnu Institute of Technology, Bhimavaram, Andhra Pradesh, India",
      link: "https://maps.google.com/?q=Vishnu+Institute+of+Technology+Bhimavaram",
    },
  ];

  return (
    <div>
      <div
        id="footer"
        className="
        bg-black w-full 
        px-6 md:px-20 lg:px-20 
        pt-12 pb-6 
        flex flex-col lg:flex-row 
        gap-10 
        justify-between items-start 
        text-white
      "
      >
        <div className="w-full lg:w-1/2">
          <div className="font-medium text-2xl md:text-3xl my-2 text-white">
            Contact Information
          </div>

          <div className="py-[2px] w-full bg-red-600" />

          <div className="my-5 space-y-5">
            {contactList.map((item, index) => (
              <InfoCard
                key={index}
                icon={item.icon}
                title={item.title}
                value={item.value}
                link={item.link}
              />
            ))}
          </div>

          <div className="font-medium text-2xl md:text-3xl mt-6 text-white">
            Follow Us
          </div>

          <div className="py-[2px] mt-2 w-full bg-red-600" />

          <div className="mt-5 flex gap-6">
            <a
              href="https://www.instagram.com/tedxvishnuinstitute?igsh=ZHN3NmU2YzV0OHdn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform"
            >
              <Instagram className="h-8 w-8 text-white hover:text-red-600" />
            </a>

            <a
              href="https://www.linkedin.com/company/tedxvishnuinstitute/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform"
            >
              <Linkedin className="h-8 w-8 text-white hover:text-red-600" />
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full lg:w-1/2">
          <div className="font-medium text-2xl md:text-3xl my-2 text-white">
            Our Location
          </div>

          <div className="py-[2px] w-full bg-red-600" />

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.2093775535222!2d81.52251249999998!3d16.565965300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37cd4e8d1d1d8d%3A0xab52da15615ac690!2sVishnu%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1724255495953!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Vishnu Institute Of Technology"
            className="border-0 rounded-lg my-5 h-64 md:h-100 w-full"
          ></iframe>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black w-full pb-8 text-center text-white">
        <p>© Copyright 2026 TEDxVishnu Institute</p>
      </div>
    </div>
  );
}

export default Footer;
