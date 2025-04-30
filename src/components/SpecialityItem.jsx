import RemoveIcon from '@mui/icons-material/Remove';

function SpecialityItem({specialityName}) {
    return (<div className="relative">
        <span className="py-1 px-3.5 rounded-md text-white" style={{backgroundColor: "#A68B64"}}>{specialityName}</span>
        {/* <div className="absolute top-0 right-0 -translate-y-3 translate-x-2">
            <RemoveIcon fontSize="small" style={{color: "#A68B64", borderColor: "#F2F2F2"}} className="bg-white rounded-full border-2 shadow-xl"/>
        </div> */}
      </div>);
}

export default SpecialityItem;