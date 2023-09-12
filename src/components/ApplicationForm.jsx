import React, { useRef } from "react";
import toast from "react-hot-toast";

const ApplicationForm = () => {
  const nameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const stateRef = useRef();
  const cityRef = useRef();
  const courseRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    let firstname = nameRef.current.value;
    let lastName = lastnameRef.current.value;
    let email = emailRef.current.value;
    let mobileno = numberRef.current.value;
    let state = stateRef.current.value;
    let city = cityRef.current.value;
    let course = courseRef.current.value;
    const obj = { firstname, lastName, email, mobileno, state, city, course };
    console.log(obj);
    toast.success("Successfully Registered!")
  };

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];

  const educationalCourses = [
    "Computer Science",
    "Biology",
    "Physics",
    "Chemistry",
    "Mathematics",
    "History",
    "Geography",
    "Economics",
    "Psychology",
    "Sociology",
    "Political Science",
    "Business Administration",
    "Engineering (Various Specializations)",
    "Medicine",
    "Nursing",
    "Dentistry",
    "Law",
    "Fine Arts",
    "Music",
    "Drama",
    "Education",
    "Environmental Science",
    "Languages (e.g., English, Spanish, French, etc.)",
    "Philosophy",
    "Religious Studies",
    "Communication Studies",
    "Film Studies",
    "Information Technology",
    "Data Science",
    "Cybersecurity",
    "Graphic Design",
    "Fashion Design",
    "Culinary Arts",
    "Automotive Technology",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Agricultural Sciences",
    "Environmental Engineering",
    "Archaeology",
    "Social Work",
    "Public Health",
    "MBA (Master of Business Administration)",
    "Pharmacy",
    "Physical Therapy",
    "Occupational Therapy",
    "Astronomy",
    "Marine Biology",
    "Aeronautics",
    "Robotics",
    "Animation",
    "Forensic Science",
  ];

  return (
    <div className="bg-[url(file:///C:/Users/Admin/Downloads/Untitled.png)] relative h-[650px] w-full  ">
      <div className="w-full h-full   items-center flex justify-between ">
        <div className="absolute left-[7%] top-[5%] w-[60%] text-white text-opacity-900   ">
          <p className=" top-[30%] font-bold text-3xl">Welcome to </p>
          <p className=" font-bold text-2xl">
            {" "}
            AKASH GROUP OF INSTITUTIONS (AGI)
          </p>
          <p className=" font-bold text-xl">
            Akash Group of Institutions is one of the leading educational
            institutions in Karnataka that was founded in 2014. The institute
            has a state of the art campus and is an embodiment of the essence of
            cultural heritage and diversity with a blend of 21st century
            modernity. The institute is comfortably nestled in the city of
            Bangalore, ‘The Silicon Valley of India’.
          </p>
          <div className=" absolute left-[105%] top-[5%] w-[40%] h-[520px] bg-white border">
            <label className=" text-black font-semibold text-xl  mx-[50px] my-[20px] ">
              Admissions Open 2023-25
            </label>
            <form
              className=" h-full text-black mt-5 items-center ml-[30px]  "
              onSubmit={submitHandler}
            >
              <input
                type="text"
                className="border border-black w-[90%] py-1 rounded-sm text-center"
                placeholder=" Enter your first name"
                required
                ref={nameRef}
              />

              <input
                type="text"
                className="border border-black w-[90%] py-1 rounded-sm mt-6 text-center"
                placeholder=" Enter your last name"
                required
                ref={lastnameRef}
              />
              <input
                type="email"
                className="border border-black w-[90%] py-1 rounded-sm mt-6 text-center"
                placeholder=" Enter your Email Address"
                required
                ref={emailRef}
              />
              <input
                type="number"
                className="border border-black w-[90%] py-1 rounded-sm mt-6 text-center"
                placeholder=" Enter your Mobile Number"
                required
                ref={numberRef}
              />
              <select
                className="border border-black w-[90%] py-1 rounded-sm mt-6 text-center "
                name="Select your State"
                required
                ref={stateRef}
              >
                <option value="">Select your state</option>
                {indianStates.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
              <select
                className="border border-black w-[90%] py-1 rounded-sm mt-6 text-center"
                ref={cityRef}
                required
              >
                <option value="">Select City</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="Secunderabad">Secunderabad</option>
              </select>
              <select
                className="border border-black w-[90%] py-1 rounded-sm mt-6 text-center "
                name="Select your State"
                required
                ref={courseRef}
              >
                <option value="">Select your course</option>
                {educationalCourses.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
              <button
                type="submit"
                className="bg-red-400  py-3 mt-4 w-[90%] rounded  font-semibold text-white text-lg"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
