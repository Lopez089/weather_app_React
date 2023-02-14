import React from 'react'
import { Forecast } from '../../model'
import { Icon } from '../../components/weather/weather'

type IForecast = {
    forecast: Forecast[]
}

export function Forecast({ forecast }: IForecast) {
    return (
        <div className='grid gap-3 mt-12'>
            {
                forecast.map(({ date, icon, temperature_max, temperature_min }) => {
                    return (
                        <div className='flex justify-around  text-xs '>
                            <div className='font-light'>{date}</div>
                            <div>
                                <span className=' mr-2  material-symbols-outlined font-extralight text-base'>
                                    {Icon[icon]}
                                </span>
                            </div>
                            <div>{`${temperature_max}º | ${temperature_min}º`}</div>
                        </div>

                    )
                })
            }

        </div>
    )
}
