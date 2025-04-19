import ClearIcon from '@mui/icons-material/Clear';
import dummyImage from "../../assets/dummyImage.svg"
import { useReducer, useRef } from 'react';
import { profileReducer } from '../../Utilities/profileReducer';
import { Pagination, Navigation, Thumbs } from "swiper/modules";
import "swiper/css"
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css/pagination"
import EditCard from './EditCard';
import { TextField } from '@mui/material';

export function EditForm({draft,formRef, close ,isVisible}){
    const uploadRef = useRef(null)
    const [temp,setTemp] = useReducer(profileReducer,draft)
    console.log(temp)

    return (
        <div ref={formRef} className={`absolute top-1/2 right-1/2 translate-x-1/2 w-[760px] h-[842px] bg-white border rounded-md shadow z-20 transition-all duration-400 ease-in-out  ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} `}>
            <div className="absolute left-full -translate-x-20 top-14">
                        <ClearIcon onClick={close} style={{cursor:"pointer"}} fontSize="medium"/>
                </div>
            <div className="ml-24 mr-[87px]">
                <div className='mt-16 flex gap-5'>
                    <div className="w-[100px]">
                        <img src={dummyImage} alt="dummyImage"/>
                    </div>
                    <div>
                        <h2 className='font-poppins text-sm italic '>Please upload square image, size less than 100KB</h2>
                        <input ref={uploadRef} type='file' accept='image/*' alt="input house" hidden/>
                        <button className='mt-5 ml-2.5 margin px-28 py-2.5 text-muesli-400 border border-muesli-400 shadow rounded-md' onClick={()=>uploadRef.current.click()}>Choose file</button>
                    </div>
                </div>
                <div className='mt-9'>
                    <Swiper
                    modules={[Thumbs]}
                    slidesPerView="auto"
                    spaceBetween={14}

                    >
                    {
                        temp.images.map((image)=>{
                            return (
                            <SwiperSlide className="!w-[82px] !h-[76px]" key={image.isNew ? image.id : image.tempId}>
                                <EditCard url={image.url} alt={image.alt}/>
                            </SwiperSlide>
                            )
                        })
                    }
                    </Swiper>
                </div>
                <div className='font-mons mt-3'>
                    <label htmlFor='title' className='font-bold text-rustyNail-800 tracking-wide' >Title</label>
                    <input id="title" value={temp.id} onChange={(e)=> setTemp({type: "Edit_title", title: e.target.value})}type="text" className='w-full h-[48px] px-4 py-3 rounded-lg mt-2' style={{border: "1px solid #646464",outline: "none"}}/>
                </div>
                <div className='font-mons mt-5'>
                    <label htmlFor='description' className='font-bold text-rustyNail-800 tracking-wide'>Description</label>
                    <textarea value={temp.description} id="title" onChange={(e)=> setTemp({type: "Edit_description", description: e.target.value})} type="text" className='w-full h-[48px] px-4 py-3 rounded-lg mt-2 custom-textarea custom-scrollbar resize-none' >
                    </textarea>
                </div>
                
                <div className='mt-2.5 font-mons'>
                    <label htmlFor="Amenities" className="block font-bold text-rustyNail-800 text-lg tracking-wide">Amenities </label>
                    <div className='flex gap-3 mt-2'>
                        <input id="Amenities" value={temp.id} onChange={(e)=> setTemp({type: "Edit_title", title: e.target.value})}type="text" className='w-full h-[48px] px-4 py-3 rounded-lg' style={{border: "1px solid #646464",outline: "none"}}/>
                        <button className='font-medium text-base py-3 px-[61px] bg-rustyNail-800 rounded-md text-white'>Add</button>
                    </div>
                    <div className="flex gap-[18px] mt-5 flex-wrap mb-4">
                        {
                            temp.amenities.map((item,key)=>{

                                return (
                                    <div className='relative'>
                                        <span key={key} className="bubble pl-4 pr-9">{item}</span>
                                        <div className='absolute top-0 right-0 -translate-y-0.5 -translate-x-1'>
                                            <ClearIcon style={{color: "#7B5715"}}/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex gap-6 justify-center mt-11 font-poppins'>
                    <button className='px-[58px] py-3 bg-rustyNail-800 rounded border font-medium text-white transition-transform hover:-translate-y-1 hover:shadow-xl'>Save</button>
                    <button className='px-[58px] py-3 border-rustyNail-800 text-rustyNail-800 bg-white font-medium border rounded transition-transform hover:-translate-y-1 hover:shadow-xl'>Cancel</button>
                </div>
        </div>
    </div>
    )
}