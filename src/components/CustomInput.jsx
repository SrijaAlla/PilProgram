function CustomInput({label,placeHolder,labelId,typeGiven="text"}) {
    return (
        <div className="w-full flex-1">
            <label htmlFor={labelId} className="font-medium">{label}</label>
            <input id={labelId} placeholder={placeHolder} type={typeGiven} className="mt-3.5 h-[48px] px-4 py-3 rounded-lg w-full font-light" style={{outline: "none", backgroundColor: "#F2F2F2"}}/>
        </div>
    );
}

export default CustomInput;