"use client"
import React, { useState } from "react";
import Link from 'next/link';
import Image from "next/image";


const Footer = () => {

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call)
    console.log(formData);
  };

  return (
    <div className='bg-black w-full text-white pt-10'>
      <div className='max-w-screen-xl mx-auto p-2 flex justify-between'>
        <div className='text-sm basis-1/3'>
          <h3 className='text-4xl font-bold mb-4'>LOGO</h3>
          <p className="mb-4">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>
          <Link href="/cta" className="bg-[#FFD600] text-black px-5 py-3 rounded text-sm inline-block">
              Chat Now!
            </Link>
        </div>
        <div className="basis-1/3">
          <h4 className='text-lg mb-3'>Join our Newsletter!</h4>
          <form
      onSubmit={handleSubmit}
      className="flex items-baseline"
    >
      
      <div className="basis-5/6">
        {/* Email Input */}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full bg-transparent border-b border-gray-300 p-2  focus:outline-none"
            placeholder="Enter your email"
          />
      </div>
      {/* Submit Button */}
      <div className="basis-1/6">
        <button
          type="submit"
          className="bg-white px-4 py-2 focus:outline-none focus:ring-2 text-black"
        >
          Submit
        </button>
      </div>
    </form>
        </div>
      </div>
      <div className='text-right max-w-screen-xl mx-auto p-2 border-b border-[#585858]'>
        <div className="flex gap-5 justify-end"> 
        <Image
              className="max-w-[18px]"
              src="/facebook.png "
              width={30}
              height={30}
              alt=""
            />
            <Image
              className="max-w-[18px]"
              src="/youtube.png "
              width={30}
              height={30}
              alt=""
            />
            <Image
              className="max-w-[18px]"
              src="/pinterest.png "
              width={30}
              height={30}
              alt=""
            />
            <Image
              className="max-w-[18px]"
              src="/instagram.png "
              width={30}
              height={30}
              alt=""
            />

        </div>
      </div>
      <div className='flex justify-between max-w-screen-xl mx-auto text-sm px-2 py-3'>
        <p>Copyright © <span className="text-[#DC143C]">Crobstacle Ventures LLP</span> 2024</p>
        <div className='underline flex gap-3 text-[#ACACAC] underline-offset-4'>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Contact Us</p>
        </div>
      </div>

    </div>
  )
}

export default Footer