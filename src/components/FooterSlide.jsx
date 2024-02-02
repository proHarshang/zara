import React from 'react'

const FooterSlide = () => {
    return (
        <>
            <div className='bg-white h-full w-full flex flex-col items-center justify-center font-thin gap-32 text-gray-700'>
                <a href='#' className='text-base'>JOIN OUR NEWSLETTER</a>
                <div className="flex gap-8 text-sm">
                    <a href='#'>INSTAGRAM</a>
                    <a href='#'>FACEBOOK</a>
                    <a href='#'>TWITTER</a>
                    <a href='#'>PINTREST</a>
                    <a href='#'>YOUTUBE</a>
                    <a href='#'>SPOTIFY</a>
                </div>
            </div>
            <p className='absolute bottom-0 left-0 text-xs m-24 text-gray-700'>Name and address of the manufacturer:<br />Industria de Diseño Textil, S.A. (INDITEX, S.A.) <br />Avenida de la Diputación, Edificio Inditex, 15143, Arteixo (A Coruña), Spain</p>
        </>
    )
}

export default FooterSlide