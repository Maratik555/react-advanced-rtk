import React, {useEffect, useState} from 'react'
import {useLazyGetUserReposQuery, useSearchUsersQuery} from '../store/github/github.api'
import {Loader} from '../components/Loader'
import {useDebounce} from '../hooks/debounce'
import {RepoCard} from '../components/RepoCard'

export function HomePage() {
    const [search, setSearch] = useState('')
    const [drop, setDrop] = useState(false)
    const debounced = useDebounce(search)
    const {isLoading, isError, data} = useSearchUsersQuery(debounced, {
        skip: debounced.length < 3,
        refetchOnFocus: true
    })

    const [fetchRepos, {isLoading: areLoading, data: repos}] = useLazyGetUserReposQuery()
    const clickHandler = (username: string) => {
         fetchRepos(username)
        setDrop(false)
    }


    useEffect(() => {
    setDrop(debounced.length > 3 && data?.length! > 0)
    },[debounced, data])

    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
            {isLoading && <Loader/>}
            { isError && <p className="text-center text-red-600">Something went wrong...</p> }

            <div className="relative w-[560px]">
                <input type="text" className="border py-2 px-4 w-full h-[42px] mb-2"
                       placeholder="Search GitHub username..."
                       value={search}
                       onChange={e => setSearch(e.target.value)}
                />
                {drop && <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-auto shadow-md
                bg-white">
                    {data?.map(user => <li onClick={() => clickHandler(user.login)} key={user.id} className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'>{user.login}</li>)}
                </ul>}
                <div className='container'>
                    {areLoading && <p className='text-center'>Loading...</p>}
                    {repos?.map(repo => <RepoCard repo={repo} key={repo.id}/>)}
                </div>
            </div>
        </div>
    )
}
