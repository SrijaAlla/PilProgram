import { Rating } from "@mui/material"
import p1 from "../../assets/Profile/p1.png"

export function CustomerReviews(){
    return(
        
        <div className="h-[210px] border shadow flex flex-col font-poppins">
  
        
        <div className="ml-7 flex mt-5 gap-5 items-start">
          <div className="w-[55px] h-[55px]">
            <img className="rounded-full" src={p1} alt="profile_1" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h3 className="text-sm font-medium">Andrea Rodrigues</h3>
            <h4 className="text-xs font-medium text-stone-500">Buffalo NY</h4>
            <Rating size="small" name="half-rating-read" style={{color: "#E67136"}} defaultValue={2.5} precision={0.5} readOnly />
          </div>
        </div>
      
        
        <div className="ml-7 flex flex-1 justify-center items-center w-[550px]">
          <p className="text-sm font-normal">
            Lovely home with a cozy vibe! The spacious living room and modern kitchen were a treat. 
            The backyard was perfect for summer barbecues, and the neighborhood was quiet yet close to essentials. 
            A few minor maintenance issues, but overall a charming place that feels like home.
          </p>
        </div>
      </div>
    )
}