import React from 'react'
import {Link} from 'react-router-dom'

export function Navigation() {
    return (
        <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-amber-400 text-white">
            <h3 className="font-bold">Github Search Repo</h3>
       <span>
        <Link to="/" className="mr-2">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </span>
        </nav>
    )
}