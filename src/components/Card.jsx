export function Card({ src, className = "" }) {
  return (
    <div
      className={`flex flex-col font-serif bg-stone-200 shadow-lg rounded-lg border border-gray-100 transition-transform hover:-translate-y-3 hover:shadow-xl ${className}`}
    >
      <div className="overflow-hidden rounded-t-lg h-25">
        <img
          src={src}
          alt="House listing"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col text-center mt-2">
        <h2 className="text-xs font-semibold text-gray-700">MLS: 23134</h2>
        <h3 className="text-xs text-gray-500">Listed on 2/31/24</h3>
      </div>
    </div>
  );
}
