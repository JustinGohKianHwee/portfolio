import Link from "next/link"

import {FaGithub, FaLinkedinIn, FaInstagram} from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: ""},
    {icon: <FaLinkedinIn/>, path: ""},
    {icon: <FaInstagram />, path: ""}
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index)=> {
            return <Link key={index} href = {item.path} className={iconStyles}>
                {item.icon}
                </Link>
        })}
        </div>
  )
}

export default Socials