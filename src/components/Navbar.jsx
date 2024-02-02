import React from 'react'
import Menu from "../common/Menu";
import Logo from "../common/BrandLogo";
import NavLinks from '../common/NavLinks';
import { useAppContext } from '../AppContext';

const Navbar = () => {
    const { handleButtonClick } = useAppContext();

    const handleClick = (slideIndex) => {
        handleButtonClick(slideIndex);
    };
    
    return (
        <nav className="flex justify-between w-full align-top fixed top-0 p-5 z-10">
            <div id="brand" className='flex gap-2 relative m-4'>
                <Menu />
                <div className="flex flex-col gap-3">
                    <Logo color="black" />
                    <div className="flex text-black text-xl justify-around">
                        <button onClick={() => handleClick(0)}>WOMEN</button>
                        <button onClick={() => handleClick(1)}>MAN</button>
                        <button onClick={() => handleClick(2)}>KIDS</button>
                        <button onClick={() => handleClick(3)}>BEAUTY</button>
                    </div>
                </div>
            </div>
            <NavLinks />
        </nav>
    )
}

export default Navbar