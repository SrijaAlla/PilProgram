export function EditActions({setUpload}){ 
    return (
        <div className="flex gap-2 font-mons mt-2 text-lynch-700">
            <button className="border-2 border-lynch-700 font-semibold p-1.5 rounded-md" onClick={setUpload}>EDIT</button>
            <button className="border-2 border-lynch-700 font-semibold p-1.5 rounded-md">DELETE</button>
        </div>
    )
}