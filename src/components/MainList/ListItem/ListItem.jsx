export default function ({onClick = ()=>{}, value = { title: "no title", emoji: "", category: "" } }) {
    return (
        <li onClick={onClick} className="px-4  py-2 w-full border gap-4 border-[#383838] flex items-center
        cursor-pointer
        hover:bg-[#151515]">
            <span className="min-w-4">{value.emoji}</span>
            <div className="flex w-full flex-col ">
                <span className="max-w-[90%] overflow-hidden text-sm text-ellipsis whitespace-nowrap">{value.title ? value.title : "No Title"}</span>
            </div>
        </li>
    )
}