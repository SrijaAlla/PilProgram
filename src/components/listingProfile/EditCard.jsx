import ClearIcon from '@mui/icons-material/Clear';

function EditCard({url,alt}) {
    return (
    
    <div className="relative w-full h-full object-cover">
        <img className="rounded-lg w-full h-full object-cover cursor-pointer"src={url} alt={alt}/>
        <div className='absolute top-0 right-1 -translate-y-1'>
            <ClearIcon style={{fontSize: "15px", color: "#7B5715",cursor: "pointer" }}/>
        </div>
    </div>);
}

export default EditCard;