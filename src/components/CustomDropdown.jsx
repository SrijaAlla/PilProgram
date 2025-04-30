import Select from 'react-select'
import React from 'react'

function CustomDropdown({label,optionsgiven,placeHolder,labelId}) {

    
    
    return (
        <>
        <div>
        <label htmlFor={labelId} className='font-medium'>{label}</label>
        <Select 
        id={labelId}
        options={optionsgiven}
        placeholder={placeHolder}
        className='w-full font-mons mt-3.5'
        styles={
            {
                control: (baseStyles,state)=>({
                    ...baseStyles,
                    borderColor: "#B0B0B0",
                    border:"0px",  
                    boxShadow: "none",  
                    outline: "none",
                    ":hover":{
                        borderColor: "#B0B0B0"
                    },
                    height: "48px",
                    borderRadius:"0.5rem",
                    backgroundColor:"#F2F2F2"
                }),
                indicatorSeparator:(base)=>({
                    ...base,
                    display:"none"
                }),
                option: (base,state)=>({
                    ...base,
                    backgroundColor: state.isFocused ? "#EFEFEF" : "white",
                    color: "black",
                    fontWeight: state.isFocused ? "500" :"400",
                    animation: 'fadeIn 0.2s ease-in-out',
                }),
                placeholder: (base)=>({
                    ...base,
                    color:"#ACACAC"
                })
            }
        }
        />
        </div>
        
        
        </>
    );
}

export default CustomDropdown;