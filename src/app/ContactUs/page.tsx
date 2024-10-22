import ContactForm from "@/Components/ContactUs/ContactForm";
import React from "react";
import Image from "next/image";

const ContactUs = () => {
  
  return (
    <>
      <div className='w-full h-[70vh] flex items-center bg-[url("/contact-banner.jpg")] bg-cover bg-center lg:h-[80vh]'>
        <div className="container flex flex-col items-start max-w-[1280px] mx-auto gap-[10px] text-white md:px-10 lg:mb-[-80px]">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Contact Us
          </h1>
        </div>
      </div>
      {/* Section 2 */}
      <div className="bg-[#F7F7F7] py-20">
        <div className="max-w-screen-xl container mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
        Welcome to<span className="text-[#DC143C]"> Ask Experts </span>Support
          </h1>
          <p className="max-w-3xl mx-auto">
          We’re here to help. Looking for customer service contact information? Explore support resources for the relevant products below to find the best way to reach out about your issue.
          </p>
        </div>
        <ContactForm></ContactForm>
      </div>

      {/* Section 3 */}
      <div className="">
        <div className="text-sm">
          <div className="flex text-white">
            <div className=" basis-1/3">
              <iframe
                src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                style={{ border: "none", width: "100%", height: "100%" }}
                allowFullScreen
                title="map"
              ></iframe>
            </div>
            <div className="basis-1/3 bg-[#282828] p-16 ">
              <h1 className="text-3xl underline underline-offset-8 mb-8">
                Reach Us:
              </h1>
              <div className="flex gap-2 mb-3 items-center">
                <Image
                 src="/phone.png" 
                 alt="image"
                 className="w-[18px]"
                  />
                <p className="">+40724343949</p>
              </div>
              <div className="flex gap-2 mb-3 items-center">
                <Image src="/mail.png"
                alt="image"
                 className="w-[18px]" />
                <p className="">contact@brandaffair.ro</p>
              </div>
              <div className="flex gap-2 mb-3 items-center">
                <Image src="/location.png"
                alt="image" className="w-[18px]" />
                <p className="">Amman St, no 35, 4th floor, ap 10, Bucharest</p>
              </div>
            </div>
            <div className="basis-1/3 bg-[#DC143C] p-16">
              <h1 className="text-3xl underline underline-offset-8 mb-6">
                Contact Us
              </h1>
              <p className=" mb-3">
                <span className="text-lg leading-9 font-bold">Hello,</span>
                <br />
                Ready to get started? Click the button below to fill out our
                quick form and let us know how we can assist you!
              </p>
              <button
                type="button"
                className=" bg-black text-white rounded-md px-4 py-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                Click Here !
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
