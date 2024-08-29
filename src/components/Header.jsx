import React, { useState } from 'react'
import logo from "../assets/logo.svg"
import { MdOutlineDashboard } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <header>
            <div>
                <p>
                    <MdOutlineDashboard />
                    <h5>Lorem ipsum dolor</h5>
                </p>
                <p>
                    <MdOutlineDashboard />
                    <h5>Lorem ipsum dolor</h5>
                </p>
                <p>
                    <MdOutlineDashboard />
                    <h5>Lorem ipsum dolor</h5>
                </p>
            </div>
            <nav>
                <div id='top-nav'>
                    <div>
                        <div style={{ gap: '10px', justifyContent: 'start', alignItems: 'center' }}>
                            <span><FaBars size={22} onClick={() => setOpenMenu(true)} /></span>
                            <img src={logo} alt="logo" />
                        </div>
                        <h1>LOGO</h1>
                    </div>
                    <ul>
                        <li><FiSearch /></li>
                        <li><FaRegHeart /></li>
                        <li><BsHandbag /></li>
                        <li><FaRegUser /></li>
                        <li><b>ENG</b><IoIosArrowDown /></li>
                    </ul>
                </div>
                <ul id="bottom-nav" className={openMenu && 'active'}>
                    <li id='cross'><RxCross1 size={30} onClick={() => setOpenMenu(false)} /></li>
                    <li>SHOP</li>
                    <li>SKILLS</li>
                    <li>STORIES</li>
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                </ul>
                <p style={{color:'#000',padding:'0 10px'}}>HOME | SHOP</p>
            </nav>
        </header>
    )
}
