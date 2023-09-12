import React from "react";

const AboutUs = () => {
  return (
    <div className="h-screen">
      <div className="text-5xl text-center text-blue-900 font-bold">
        Why Akash Group of Institutions (CGI)
      </div>
      <div className="grid grid-rows-2 grid-cols-3 w-[90%] mt-5 mx-auto gap-6 ">
        <div className="px-4 py-[60px] shadow-xl border text-center">
          <h1 className="text-4xl text-[#ED7700] font-extrabold">50+</h1>
          <p className="text-2xl text-black font-bold">Faculty Memberscourses in different streams</p>
        </div>
        <div className="px-4 py-[60px] shadow-xl border text-center">
          <p className="text-2xl text-black font-bold">Inspirational seminars through eminent personalities</p>
        </div>
        <div className="px-4 py-[60px] shadow-xl border text-center">
        <p className="text-2xl text-black font-bold">Cutting Edge lab facilities for practical learning</p>
        </div>
        <div className="px-4 py-[60px] shadow-xl border text-center">
        <p className="text-2xl text-black font-bold">Industrial ties with over 50+ companies</p>
        </div>
        <div className="px-4 py-[60px] shadow-xl border text-center">
        <h1 className="text-4xl text-[#ED7700] font-extrabold">100+</h1>   
        <p className="text-2xl text-black font-bold">faculties with excellent professional and academic experience</p>
        </div>
        <div className="px-4 py-[60px] shadow-xl border text-center">
        <h1 className="text-4xl text-[#ED7700] font-extrabold">3000+</h1>   
        <p className="text-2xl text-black font-bold">students from different cultures</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
