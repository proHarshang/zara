import React from 'react'
import Menu from "../common/Menu";
import Logo from "../common/BrandLogo";
import NavLinks from '../common/NavLinks';

const Navbar = () => {
    return (
        <nav className="flex justify-between w-full align-top fixed top-0 p-5 z-10">
            <div id="brand" className='flex gap-2 relative m-4'>
                <Menu />
                <div className="flex flex-col gap-3">
                    <Logo color="black" />
                    <div className="flex text-black text-xl justify-around">
                        <a href="#">WOMEN</a>
                        <a href="#">MAN</a>
                        <a href="#">KIDS</a>
                        <a href="#">BEAUTY</a>
                    </div>
                </div>
            </div>
            <NavLinks />
        </nav>
    )
}

export default Navbar