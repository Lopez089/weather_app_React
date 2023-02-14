import React from 'react'
import { CurrentWeather } from '../../model'

type IWeather = Pick<CurrentWeather, 'summary' | 'temperature' | 'windSpeed' | 'icon'>

export const Icon = {
    'clear-day': 'clear_day',
    'clear-night': 'clear_night',
    rain: 'rainy',
    snow: 'snowing',
    sleet: 'weather_snowy',
    wind: 'air',
    fog: 'water',
    cloudy: 'cloudy',
    "partly-cloudy-day": 'partly_cloudy_day',
    "partly-cloudy-night": 'nights_stay'
}
export function Weather({ summary, temperature, windSpeed, icon }: IWeather) {


    return (
        <>
            <div className='h-60 flex flex-col justify-center items-center'>
                <span className='mb-6 material-symbols-outlined font-thin text-8xl'>
                    {Icon[icon]}
                </span>
                <p className='font-normal text-6xl '>{`${temperature}º`}</p>
                <p>{summary}</p>

            </div>
            <div className='mt-4 flex flex-col justify-center items-center '>
                <p className='font-extralight'>Viento</p>
                <div className='font-extralight flex items-center justify-center'>
                    <span className=' mr-2  material-symbols-outlined font-extralight text-3xl'>
                        air
                    </span>
                    {`${windSpeed} km/h`}
                    <p className='text-base'>
                    </p>
                </div>
            </div></>
    )
}
