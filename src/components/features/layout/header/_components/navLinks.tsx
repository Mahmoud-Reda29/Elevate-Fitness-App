import { NavLink } from "react-router-dom"

export default function NavLinks() {
    // Variables
    const navLinks =[
        {path:"/" , title:"Home"},
        {path:"/about" , title:"About"},
        {path:"/classes" , title:"Classes"},
        {path:"/healthy" , title:"Healthy"},
    ]

  return (
    <div className="lg:flex gap-6 hidden">
        {navLinks.map(({title, path})=>
            <NavLink className={"font-bold text-custom-black-800 dark:text-white"} to={path}>{title}</NavLink>
        )}
      
    </div>
  )
}
