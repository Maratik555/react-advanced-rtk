import React from 'react'
import {Link} from 'react-router-dom'

export function Navigation() {
    return (
        <nav className="flex justify-between items-center h-[50px] px-7 shadow-md bg-amber-400 text-white">
            <h3 className="font-bold">Github Search Repo</h3>
       <span>
        <Link to="/" className="mr-5 text-blue-600">Search</Link>
        <Link to="/favourites">Favourites</Link>
      </span>
        </nav>
    )
}