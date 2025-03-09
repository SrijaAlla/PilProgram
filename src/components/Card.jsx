export function Card({src}){
    return (
        <div className="flex flex-col font-serif bg-stone-200 shadow-lg rounded-lg border border-gray-100 h-[280px] transition-transform hover:-translate-y-3 hover:shadow-xl">
        <div className="overflow-hidden rounded-t-lg h-[180px]">
          <img src={src} alt="It is a house" className="object-cover w-full h-full"/>
        </div>
        <div className="flex flex-col text-center mt-2">
          <h2 className="text-lg font-semibold text-gray-700">MLS: 23134</h2>
          <h3 className="text-sm text-gray-500">Listed on 2/31/24</h3>
        </div>
      </div>
    )
}