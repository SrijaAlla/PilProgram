 


export function profileReducer(state, action){

    switch(action.type){

    case "Add_image":
        const newData = {
            tempId: `temp_${crypto.randomUUID()}`,
            url: URL.createObjectURL(action.file),
            file: action.file,
            isNew: true,
            alt:`temp_${crypto.randomUUID()}`
        }
        return {...state,images:[...state.images,newData]};

    case "Remove_image":
        const filteredData = state.images.map((img)=> (img.isNew ? img.tempId : img.id) === action.key )

        return {...state,images: filteredData}

    case "Edit_title":
        
        return {...state,id: action.title}

    case "Edit_description":

        return {...state,description: action.description}

    default:
        return state
    
}

}