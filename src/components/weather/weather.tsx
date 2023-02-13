import React from 'react'

export function Weather() {
    return (
        <>
            <div className='h-60 flex flex-col justify-center items-center'>
                <span className='mb-6 material-symbols-outlined font-thin text-8xl'>
                    sunny
                </span>
                <p className='font-normal text-6xl '>24º</p>
                <p>Partly cloudy</p>

            </div>
            <div className='mt-4 flex flex-col justify-center items-center '>
                <p className='font-extralight'>Viento</p>
                <div className='font-extralight flex items-center justify-center'>
                    <span className=' mr-2  material-symbols-outlined font-extralight text-3xl'>
                        air
                    </span>
                    5.7 km/h
                    <p className='text-base'>
                    </p>
                </div>
            </div></>
    )
}
