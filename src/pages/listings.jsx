import React from "react";
import { Card } from "../components/Card";
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context("./../assets/lisitngs", false, /\.(png|jpe?g|svg)$/));

function Listings() {
  return (
    <>
    <div className="container pt-16 mx-auto">
      <div className="lg:grid lg:grid-cols-4 gap-5">
        {images.map((src,index)=>{
          return (
           <Card key={index} src={src}/>
          )
        })}
        </div>
    </div>
    </>
  );
}

export default Listings;
