const NavLink = (props) =>{

    return (
        <li className="group p-6">
            <span className=" group-hover:text-yellow-200 active:text-yellow-200">{props.name}</span>
            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow-200 active:bg-yellow-200"></span>
        </li>
    )
}

export default NavLink;