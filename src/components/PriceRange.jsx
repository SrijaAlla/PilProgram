import { useCallback, useEffect, useRef, useState } from "react";



function PriceRange({min,max,trackingColor,onChange,width="200px",currency='$',trackColor = "#cecece",rangeColor = "#78716c"}) {
    const [minVal,setMinVal] = useState(min);
    const [maxVal,setMaxVal] = useState(max);
    
    const range = useRef(null);

    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );


    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, maxVal, getPercent]);

    
    const handleMinChange = (e) => {
        setMinVal(Math.min(Number(e.target.value), maxVal - 1));
    };

    const handleMaxChange = (e) => {
        setMaxVal(Math.max(Number(e.target.value), minVal + 1));
    };

    return (<>
        <div className="w-full flex items-center justify-center  flex-col">
            <div className="px-4 flex items-center justify-between gap-x-5 mb-2" style={{width}}>
                <p className="text-xl font-semibold">
                    {currency}{minVal}
                </p>
                <div className="flex-1 border-dashed border border-neutral-500 mt-1">

                </div>
                <p className="text-xl font-semibold">
                    {currency}{maxVal}
                </p>
            </div>
            <div className="price_range_slider" style={{width}}>
                <input 
                type="range" 
                className="thumb thumb-left" 
                min={min}
                max={max}
                value={minVal}
                onChange={handleMinChange}
                style={{
                    width,
                    zIndex: minVal === maxVal ? 5 : 2,
                }}
                />

                <input 
                type="range" 
                className="thumb thumb-right" 
                min={min}
                max={max}
                value={maxVal}
                onChange={handleMaxChange}
                style={{
                    width,
                    zIndex: minVal === maxVal ? 5 : 2,
                }}
                /> 

                <div className="slider">
                    <div
                        style={{ backgroundColor: trackColor }}
                        className="track-slider"
                    />
                    <div
                        ref={range}
                        style={{ backgroundColor: rangeColor }}
                        className="range-slider"
                    />

                </div>

            </div>
        </div>
    </>);
}

export default PriceRange;