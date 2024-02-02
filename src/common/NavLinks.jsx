import React from 'react'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";

const NavLinks = () => {
    return (
        <div className='flex gap-6 text-white h-fit text-lg'>
            <Link>
                <button className='bg-transparent text-white flex items-center gap-2'><IoSearch className='text-2xl'/> SEARCH</button>
            </Link>
            <Link>
                <button className='bg-transparent text-white'>LOG IN</button>
            </Link>
            <Link>
                <button className='bg-transparent text-white'>HELP</button>
            </Link>
            <Link>
                <button className='bg-transparent text-white'>SHOPPING BAG</button>
            </Link>
        </div>
    )
}

export default NavLinks