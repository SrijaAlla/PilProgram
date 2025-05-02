import CustomDropdown from "../components/CustomDropdown";
import philImage from "../assets/Profile/phil.png"
import CustomInput from "../components/CustomInput";
import { useEffect, useRef, useState } from "react";
import SpecialityItem from "../components/SpecialityItem";
import emailIcon from "../assets/Profile/sms.svg"


function Profile() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const textareaRef = useRef(null);
  const [textareaValue, setTextareaValue] = useState("");
  
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "0px";        // reset
      const scrollHeight = textareaRef.current.scrollHeight; // read actual content height
      textareaRef.current.style.height = `${scrollHeight}px`; // grow/shrink
    }
  }, [textareaValue]);
  
  const specials = ["Negotiation","Relocation","Documentation"];

  return (
    <div className="container mt-[71px] font-poppins mb-[50px]">
         <h1 className="font-inter text-3xl font-bold text-rustyNail-800">My <span style={{color: 'black'}}>Profile</span></h1>
         <div className="flex items-center justify-between mt-[53px]">
          <div className="flex items-center gap-6">
              <div className="w-[94px]">
                <img src={philImage} className="w-full rounded-full"/>
              </div>
              <div>
                <h2 className="font-medium text-lg">Phil Dunphy</h2>
                <h3 style={{color: "#969696"}}>phildunphy@gmail.com</h3>
              </div>
            </div>
            <div>
                <button className="py-2.5 px-16 text-white rounded-lg text-[15px] font-normal" style={{backgroundColor: "#A68B64"}}>Edit Image</button>
            </div>
         </div>
         <div className="mt-8 grid grid-cols-2 gap-y-6 gap-x-8 grid-rows-4 font-mons">
            <CustomInput label={"Full Name"} placeHolder={"Phil Dunphy"} labelId={"FullName"} />
            <CustomInput label={"Nick Name"} placeHolder={"Clive Bixby"} labelId={"NickName"} />
            <CustomDropdown label={"Gender"} placeHolder={"Gender"} labelId={"Gender"} optionsgiven={options}/>
            <CustomDropdown label={"State"} placeHolder={"State"} labelId={"state"} optionsgiven={options}/>
            <CustomDropdown label={"County"} placeHolder={"County"} labelId={"county"} optionsgiven={options}/>
            <CustomDropdown label={"City"} placeHolder={"City"} labelId={"city"} optionsgiven={options}/>
            <CustomDropdown label={"Experience"} placeHolder={"30 Years"} labelId={"experience"} optionsgiven={options}/>
            <CustomInput label={"Age"} placeHolder={"Enter Age"} labelId={"age"} typeGiven="number"/>
         </div>
         <div className="mt-6 font-mons">
            <label className="font-medium" >About Me</label>
            <textarea ref={textareaRef} value={textareaValue} onChange={(e)=> setTextareaValue(e.target.value)} className="p-3 mt-3.5  font-light w-full outline-none resize-none min-h-24" style={{backgroundColor: "#F2F2F2"}}></textarea>
         </div>
         <div className="flex flex-col">
          <div className="flex gap-6 mt-6">
              <CustomInput label={"Speciality"} placeHolder={"Negotiation"} labelId={"speciality"}/>
              <div className="self-end">
                <button className="py-3 px-16 text-white rounded-lg text-[15px] font-normal" style={{backgroundColor: "#A68B64"}}>Add Speciality</button>
              </div>
          </div>
          <div className="flex flex-wrap mt-5 gap-4">
            { specials.map((special)=> <SpecialityItem specialityName={special}/> )}
          </div>
          <div className="mt-6 flex flex-col items-start">
            <h2 className="font-medium">My Email Address</h2>
            <div className="mt-6 flex items-center gap-5">
              <div className="w-11 h-11 flex rounded-full" style={{backgroundColor: "#F7F4F0"}}>
                <img src={emailIcon} className="object-none" alt="showing an email"/>
              </div>
              <div>
                <h3 className="font-normal text-sm">phildunphy@gmail.com</h3>
                <h3 className="text-sm" style={{color: "#969696"}}>1 month ago</h3>
              </div>
            </div>
            <div className="mt-7">
              <button className="font-normal text-sm py-2.5 px-5 rounded-lg" style={{backgroundColor: "#F7F4F0", color:"#A68B64"}} >+Add Email Address</button>
            </div>
          </div>
         </div>
    </div>
  );
}

export default Profile;
