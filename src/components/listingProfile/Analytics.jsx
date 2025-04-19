import { useState } from "react";
import { userData } from "../../assets/data";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Opacity } from "@mui/icons-material";

export function Analytics(){
    const [activeRange, setActiveRange] = useState('1D');
    const ranges = ['1D','1M','1Y','Max']
    const [opacity,setOpacity] = useState({likes: 1, saves: 1})

    const handleMouseEnter = (o)=>{
        const {dataKey} = o
        setOpacity((prev)=>{return {...prev,[dataKey]:0.5}})
    }

    const handleMouseLeave = (o)=>{
        const { dataKey } = o;
        setOpacity((op) => ({ ...op, [dataKey]: 1 }));
    }

    const roundToHour = (time)=>{
        let [hour,min] = time.split(":").map(Number)
        let h = min>=30 ? (hour+1)%24 : hour
        return `${String(h).padStart(2,'0')}:00`
    }

    const allowedHours = Array.from({length:24},(_,num)=> `${String(num).padStart(2,"0")}:00`)

    const allHours = allowedHours.reduce((hours,time)=>{
        hours[time] = {time, Likes: 0, Saves:0}
        return hours
    },{})
    
    userData.forEach((user)=>{
        const rounded = roundToHour(user.time)

        if (!allHours[rounded]) return;

        if(user.type === "like"){
            allHours[rounded].Likes++
        }
        else
        {
            allHours[rounded].Saves++
        }
    })

    const result = Object.values(allHours).sort((a,b)=> a.time.localeCompare(b.time))

    const sticks = allowedHours.filter((_,index)=> index%3 === 0 && index!==0 ) 

    const renderYAxisTick = ({ x, y, payload }) => {
        return (
          <text x={x + 10} y={y - 6} textAnchor="end" fill="#666" fontSize={12}>
            {payload.value}
          </text>
        );
      };

      const renderProps = (props) => {
        const { payload } = props;
      
        return (
          <div className="flex justify-center gap-28 mt-4">
            {
              payload.map((entry, index) => (
                <div className="flex gap-3 items-center">
                    <span className="w-[16px] h-[16px] rounded-full inline-block" style={{background: entry.color}}></span>
                    <span className="text-sm text-wildSand-500 font-medium" key={`item-${index}`}>{entry.value}</span>
                </div>
              ))
            }
          </div>
        );
      }

      

    return (
        <div>
            <h1 className="font-inter text-3xl ml-11 mt-28 font-bold text-black">Analytics</h1>
            <div className="container mt-16 w-[959px] h-[440px] border border-gray-300 rounded-lg shadow mb-8">
                <div className="flex flex-col mt-5">
                <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-1 justify-start">
                        <span className="text-sm font-medium">Impressions Over Time</span>
                        <span className="text-3xl font-normal">31</span>
                    </div>
                    <div className="flex justify-end">
                        <div className="inline-flex rounded-md p-1 items-center bg-wildSand-100/80 ">
                            {ranges.map((range,key)=> <span key={key} onClick={()=> setActiveRange(range)} className={`px-3 py-2 text-xs font-medium ${activeRange === range ? 'text-black bg-white rounded' : 'text-gray-500'}`}>{range}</span>)}
                        </div>
                    </div>
                </div>
                
                <div className="w-full max-w-full mt-7">
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                        data={result}
                        margin={{
                        top: 20,
                        right: 5,
                        left: -40,
                        bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                        <XAxis
                        dataKey="time"
                        ticks={sticks}
                        tick={{ fontSize: 12 }}
                        axisLine={false} 
                        tickLine={false}
                        padding={{ left: 20, right: 20 }}
                        />

                        <YAxis  axisLine={false} tickLine={false} tick={renderYAxisTick} />
                        <Tooltip />
                        <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} content={renderProps}/>
                        <Line  strokeWidth={2} dataKey="Likes" legendType="circle" strokeOpacity={opacity.likes} stroke="#949BA5" dot={false} />
                        <Line  strokeWidth={2} dataKey="Saves" legendType="circle" strokeOpacity={opacity.saves} stroke="#7B5715" dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                </div>    
            </div>  
        </div>
    )
}