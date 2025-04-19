


export function Amenities({list}){
    return (
        <div className="font-mons">
            <h2 className="text-lg font-semibold text-rustyNail-800 mt-2">AMENITIES</h2>
                <div className="flex gap-2 mt-3 flex-wrap">
                    {
                        list.map((item,key)=> <span key={key} className="bubble">{item}</span> )
                    }
                </div>
        </div>
    )
}