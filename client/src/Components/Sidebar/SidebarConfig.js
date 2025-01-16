import { AiFillCompass, AiFillHeart, AiFillHome, AiFillMessage, AiFillPlusCircle, AiOutlineCompass, AiOutlineHeart, AiOutlineHome, AiOutlineMessage, AiOutlinePlusCircle, AiOutlineSearch } from "react-icons/ai";
import {RiVideoFill, RiVideoLine} from "react-icons/ri";
import {CgProfile} from 'react-icons/cg'

export const menu=[
    {   
        title:'Home', icon:<AiOutlineHome className="text -2xl mr-5"/>, activeIcon:<AiFillHome/>
    },
    {
        title:'Search' , icon: <AiOutlineSearch className="text -2xl mr-5"/> , activeIcon: <AiOutlineSearch/>
    },
    {
        title:'Explore' , icon:<AiOutlineCompass className="text -2xl mr-5"/>, activeIcon:<AiFillCompass/>
    },
    {
        title:"Reels", icon:<RiVideoLine className="text -2xl mr-5"/> , activeIcon:<RiVideoFill/>
    },
    {
        title:'message', icon:<AiOutlineMessage className="text -2xl mr-5"/> , activeIcon:<AiFillMessage/>
    },
    {
        title:'Notification', icon:<AiOutlineHeart className="text -2xl mr-5"/>, activeIcon:<AiFillHeart/>
    },
    {
        title:'Create', icon:<AiOutlinePlusCircle className="text -2xl mr-5"/>, activeIcon:<AiFillPlusCircle/>
    },
    {
        title:'Profile', icon:<CgProfile className="text -2xl mr-5"/> , activeIcon:<CgProfile/>
    }
]