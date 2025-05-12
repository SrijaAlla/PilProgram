import CustomDropdown from "../components/CustomDropdown";
import philImage from "../assets/Profile/phil.png";
import CustomInput from "../components/CustomInput";
import { useEffect, useRef, useState } from "react";
import SpecialityItem from "../components/SpecialityItem";
import emailIcon from "../assets/Profile/sms.svg";

function Profile() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const textareaRef = useRef(null);
  const [textareaValue, setTextareaValue] = useState("");

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "0px"; // reset
      const scrollHeight = textareaRef.current.scrollHeight; // read actual content height
      textareaRef.current.style.height = `${scrollHeight}px`; // grow/shrink
    }
  }, [textareaValue]);

  const specials = ["Negotiation", "Relocation", "Documentation"];

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-12 lg:px-12 mt-[71px] font-poppins mb-[50px]">
      <h1 className="font-inter text-3xl font-bold text-rustyNail-800">
        My <span className="text-black">Profile</span>
      </h1>

      {/* Profile Info Header */}
      <div className="flex flex-col md:flex-row items-center md:justify-between mt-[53px] gap-4 md:gap-8">
        <div className="flex items-center gap-4 md:gap-6">
          <div className="w-20 md:w-[94px]">
            <img src={philImage} className="w-full rounded-full" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-medium text-lg">Phil Dunphy</h2>
            <h3 className="text-gray-500">phildunphy@gmail.com</h3>
          </div>
        </div>
        <button className="py-2.5 px-8 md:px-16 text-white rounded-lg text-[15px] font-normal bg-[#A68B64]">
          Edit Image
        </button>
      </div>

      {/* Form Fields */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 font-mons">
        <CustomInput
          label={"Full Name"}
          placeHolder={"Phil Dunphy"}
          labelId={"FullName"}
        />
        <CustomInput
          label={"Nick Name"}
          placeHolder={"Clive Bixby"}
          labelId={"NickName"}
        />
        <CustomDropdown
          label={"Gender"}
          placeHolder={"Gender"}
          labelId={"Gender"}
          optionsgiven={options}
        />
        <CustomDropdown
          label={"State"}
          placeHolder={"State"}
          labelId={"state"}
          optionsgiven={options}
        />
        <CustomDropdown
          label={"County"}
          placeHolder={"County"}
          labelId={"county"}
          optionsgiven={options}
        />
        <CustomDropdown
          label={"City"}
          placeHolder={"City"}
          labelId={"city"}
          optionsgiven={options}
        />
        <CustomDropdown
          label={"Experience"}
          placeHolder={"30 Years"}
          labelId={"experience"}
          optionsgiven={options}
        />
        <CustomInput
          label={"Age"}
          placeHolder={"Enter Age"}
          labelId={"age"}
          typeGiven="number"
        />
      </div>

      {/* About Me */}
      <div className="mt-6 font-mons">
        <label className="font-medium">About Me</label>
        <textarea
          ref={textareaRef}
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
          className="p-3 mt-3.5 font-light w-full outline-none resize-none min-h-24 bg-[#F2F2F2]"
        ></textarea>
      </div>

      {/* Specialities */}
      <div className="flex flex-col mt-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <CustomInput
            label={"Speciality"}
            placeHolder={"Negotiation"}
            labelId={"speciality"}
          />
          <button className="py-3 px-8 md:px-16 text-white rounded-lg text-[15px] font-normal bg-[#A68B64] self-start md:self-end">
            Add Speciality
          </button>
        </div>
        <div className="flex flex-wrap mt-5 gap-4">
          {specials.map((special) => (
            <SpecialityItem specialityName={special} />
          ))}
        </div>

        {/* Email Section */}
        <div className="mt-6 flex flex-col items-start">
          <h2 className="font-medium">My Email Address</h2>
          <div className="mt-6 flex items-center gap-4 flex-wrap">
            <div className="w-11 h-11 flex rounded-full bg-[#F7F4F0]">
              <img src={emailIcon} className="object-none" alt="email icon" />
            </div>
            <div>
              <h3 className="font-normal text-sm">phildunphy@gmail.com</h3>
              <h3 className="text-sm text-gray-500">1 month ago</h3>
            </div>
          </div>
          <button className="font-normal text-sm py-2.5 px-5 rounded-lg mt-7 bg-[#F7F4F0] text-[#A68B64]">
            +Add Email Address
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
