import React from 'react'
import {useAppSelector} from '../hooks/redux'

export function FavouritesPage() {

    const {favourites} = useAppSelector(state => state.github)

    return (
        <div className='flex justify-center pt-20 h-screen'>
            <ul className='list-none'>
                {favourites.map(f => (
                    <li key={f}>
                        <a href={f} target='_blank'>{f}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}