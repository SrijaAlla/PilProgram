
import { useRef, useState } from "react";
import { Amenities } from "../components/listingProfile/Amenities";
import { MainImageSwiper } from "../components/listingProfile/MainImageSwiper";
import { ThumbNailSwiper } from "../components/listingProfile/ThumbNailSwiper";
import { PropertyDescription } from "../components/listingProfile/PropertyDescription";
import { EditActions } from "../components/listingProfile/EditActions";
import { Analytics } from "../components/listingProfile/Analytics";
import { SwiperVersion } from "../components/listingProfile/SwiperVersion";
import { EditForm } from "../components/listingProfile/EditForm";
import {data} from "../Utilities/profileData"

function ListingProfile() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [thumbsSwiper2, setThumbsSwiper2] = useState(null);
    const [upload,setUpload] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [listingData, setListingData] = useState(data);

    const formRef = useRef(null);

    const openForm = () => {
        setUpload(true);
        setTimeout(() => {
          setIsVisible(true);
          formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      };
    
      const closeForm = () => {
        
        setIsVisible(false);
        
        setTimeout(() => {
            setUpload(false);
        }, 300); 
      };



    return (
        <>
        <div className="bg-white" >
            <h1 className="font-inter text-3xl ml-11 mt-12 font-bold text-rustyNail-800">Listing <span style={{color: 'black'}}>Details</span></h1>
            <div className="container">
                <div className="mt-12">
                    <div className="flex justify-between gap-24 mt-20">
                        
                        <MainImageSwiper images={listingData.images} thumbsSwiper={thumbsSwiper}/>

                        <div className="flex flex-col gap-4 min-w-0">
                            
                            <ThumbNailSwiper images={listingData.images} setThumbsSwiper={setThumbsSwiper}/>

                            <PropertyDescription description={listingData.description}/>

                            <Amenities list={listingData.amenities}/>

                            <EditActions setUpload={openForm}/>
                            
                            { upload && <EditForm draft={listingData} isVisible={isVisible} close={closeForm} formRef={formRef}/> }

                        </div>
                    </div>
                </div>
            </div>
            <h1 className="font-inter text-3xl ml-11 mt-28 font-bold text-rustyNail-800">Parliamade <span style={{color: 'black'}}>AI</span></h1> 
            <div className="container">
                <div className="mt-12">
                    <div className="flex justify-between gap-24 mt-20">
                        
                        <MainImageSwiper images={listingData.images} thumbsSwiper={thumbsSwiper2}/>

                        <div className="flex flex-col gap-4 min-w-0">
                            
                            <ThumbNailSwiper images={listingData.images} setThumbsSwiper={setThumbsSwiper2}/>

                            <PropertyDescription description={listingData.description}/>

                            <Amenities list={listingData.amenities}/>

                            <EditActions/>

                        </div>
                    </div>
                </div>
            </div>                       
            
            <Analytics/>
            <div className="mb-36">
                <h1 className="font-inter text-3xl ml-11 mt-16 font-bold text-rustyNail-800">Customer <span style={{color: "black"}}>Reviews</span></h1>
                <SwiperVersion/>
            </div>
        </div>
        </>
    );
}

export default ListingProfile;
