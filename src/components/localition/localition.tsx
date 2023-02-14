import React from 'react'
import { Location } from '../../model'

type ILocalition = Pick<Location, 'city' | 'country'>


export function Localition({ city, country }: ILocalition): JSX.Element {
    return (
        <div className='flex items-center flex-col h-24 justify-center'>
            <p className='text-2xl font-thin'>{`${city} | ${country}`}</p>
            <p>Lunes 11:50 AM</p>
        </div>
    )
}
