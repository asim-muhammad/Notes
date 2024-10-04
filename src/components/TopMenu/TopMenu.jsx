
function MenuItem({ text = "", selected=false, onClick=()=>{}}) {
    
    return (
        <li onClick={onClick} className={`${selected? "border-b" : ""} hover:before:block relative before:bottom-0 before:left before:absolute before:hidden before:bg-white before:w-full before:h-[1px] cursor-pointer`}>
            <a href="#">{text}</a>
        </li>
    )
}

export default function TopMenu({values=[], selected="all", onItemClick}) {
    return (
        <nav className="hidden md:block">
            <ul className='flex gap-4 text-base'>
                {
                    values.map((item, index)=> <MenuItem key={index} selected={item.toLowerCase() === selected.toLowerCase()} onClick={(evt)=> onItemClick(evt)} text={item}/>)
                }
            </ul>
        </nav>
    )
}