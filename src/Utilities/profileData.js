const importAll = (r)=> r.keys().map(r)
const images = importAll(
    require.context("./../assets/listings", false, /\.(png|jpe?g|svg)$/)
);



const imgs = images.map((url, index) => ({
    id: `img_${index}`,
    url: url,
    alt: `img_${index}`,
    isNew: false,
    order: index
  }));

const tempAmenities = ["Swimming Pool", "Gym", "High Ceiling"];

const data = {
    id:"MLS2546",
    description:"Description text lorem ipsum product content lorem ipsum product content will go here and various informationDescriptionDescription text lorem ipsum product content lorem ipsum product content will go here and various information.",
    amenities: tempAmenities,
    images: imgs
}

export {data,images}