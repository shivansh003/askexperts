"use client";
import TabCarousel from "@/Components/HomePage/TabCarousel";
import Testimonials from "@/Components/HomePage/Testimonials";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Section 1 */}
      <div className="bg-gradient-to-b from-[#ffe3e3] pt-12">
        <div className="container flex max-w-screen-xl mx-auto items-center p-4">
          <div className="basis-1/2">
            <h1 className="font-bold text-6xl">
              Drive Business <br /> Efficiency at Scale <br /> with{" "}
              <span className="text-[#dc143c]">Generative AI</span>{" "}
            </h1>
            <p className="my-5">
              Integrate Gen AI into your marketing, support and operation to
              boost ROI,
              <br /> elevate customer satisfaction, optimize costs, and reduce
              time-to-value
            </p>
            <button className="bg-[#ffd600] text-sm py-3 px-7 font-[400] rounded-md my-3">
              Chat Now!
            </button>
          </div>
          <div className="basis-1/2">
            <Image
              src="/banner2.png"
              width={500}
              height={500}
              alt="image"
              className="ml-auto"
            />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full pt-20 pb-14">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">
            Trusted By <span className="text-[#dc143c]">500+ Leading </span>
            Brands
          </h3>
          <p className="max-w-3xl mx-auto">Delivering measurable outcome</p>
        </div>
        <div className="w-full overflow-hidden">
          <div
            className="flex w-[140%] justify-between items-center"
            style={{
              transform: `translateX(${scrollPosition * 0.5 - 300}px)`, // -200px to initially shift items off the left side
              transition: "transform 0.1s linear", // Smooth scrolling effect
            }}
          >
            <Image
              src="/sugar.png"
              alt="Sugarbearhair"
              className=" w-auto h-24 text-center"
              width={100}
              height={100}
            />
            <Image
              src="/mindvalley.png"
              alt="Mindvalley"
              className=" w-auto h-24 text-center"
              width={100}
              height={100}
            />
            <Image
              src="/jenna.png"
              alt="Jenna Kutcher"
              className=" w-auto h-24 text-center"
              width={100}
              height={100}
            />

            {/* Original items */}

            <Image
              src="/nike.png"
              alt="Nike"
              className=" w-auto object-cover h-24 text-center"
              width={100}
              height={100}
            />
            <Image
              src="/amy.png"
              alt="Amy Porterfield"
              className=" w-auto h-24 text-center"
              width={100}
              height={100}
            />
            <Image
              src="/hotmart.png"
              alt="Hotmart"
              className=" w-auto object-fit h-24 text-center"
              width={100}
              height={100}
            />
            <Image
              src="/benefit.png"
              alt="Benefit"
              className=" w-auto  h-24 text-center"
              width={100}
              height={100}
            />
            <Image
              src="/sugar.png"
              alt="Sugarbearhair"
              className=" w-auto h-24 text-center"
              width={100}
              height={100}
            />
            <Image
              src="/mindvalley.png"
              alt="Mindvalley"
              className=" w-auto h-24 text-center"
              width={100}
              height={100}
            />
            <Image
              src="/jenna.png"
              alt="Jenna Kutcher"
              className=" w-auto h-24 text-center"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className=" w-full py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Streamline Efficiency with{" "}
            <span className="text-[#DC143C]">Seamless Human AI</span>{" "}
            Colaboration
          </h1>
          <p className="max-w-3xl mx-auto">
            Harness generative AI for quick & personalized experiences
          </p>
        </div>

        <div className="container flex items-center max-w-[1100px] mx-auto bg-black justify-between rounded-2xl">
          <div className=" basis-1/2 p-16">
            <h3 className="font-bold text-3xl text-white">
              Start your
              <span className="text-[#dc143c]"> First Chat </span> today
            </h3>
            <p className="text-sm text-white pt-2">
              Lorem Ipsum is simply dummy text of the printing and <br />{" "}
              typesetting industry. Lorem Ipsum has been the industrys <br />{" "}
              standard dummy text ever since the 1500s.
            </p>
            <button className="bg-black text-white text-left w-32 h-10 rounded-md my-2 underline underline-offset-4 font-[500]">
              Chat Now
            </button>
          </div>

          <div className="basis-1/2 ">
            <Image
              className=" ml-auto rounded-r-2xl"
              src="/Rectangle-24.png"
              width={470}
              height={306}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="w-full py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Solutions for <span className="text-[#DC143C]">Every </span>{" "}
            Industry
          </h1>
          <p className="max-w-3xl mx-auto">
            We’re here to help. Looking for customer service contact
            information? Explore support resources for the relevant products
            below to find the best way to reach out about your issue.
          </p>
        </div>
        <TabCarousel></TabCarousel>
      </div>

      {/* Section 6 */}
      <div className=" w-full bg-[#F7F7F7] py-20">
        <div className=" mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Our <span className="text-[#DC143C]">Clients</span> Reviews
          </h1>
          <p className="max-w-3xl mx-auto">
            Industry-specific use cases designed to increase leads,
            transactions, repeat purchases and operational efficiency and operational efficiency
          </p>
        </div>

        <Testimonials />
      </div>
    </>
  );
}
