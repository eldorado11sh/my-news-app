import Select from "../common/Select"
import { LANGS, SORT_BY, SEARCH_IN } from "../../data/static"
import { useEffect, useState } from "react"

export default function Sidebar(props) {

  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [language, setLanguage] = useState("")
  const [sortBy, setSortBy] = useState("")
  const [searchIn, setSearchIn] = useState("")
  const [searchInCheck, setSearchInCheck] = useState([...Array(SEARCH_IN.length).fill(false)])

  const updateField = (e, func) => {
    func.call(this, e.target?e.target.value:e)
  }

  const updateSearchInCheck = (idx) => {
    const _searchInCheck = [...searchInCheck]
    const len = _searchInCheck.length;

    _searchInCheck[idx] = !_searchInCheck[idx]
    setSearchInCheck(_searchInCheck)
    let str = _searchInCheck.reduce((s, c, i) => {
      return s+(c?SEARCH_IN[i]+",":"")
    }, "");
    setSearchIn(str.substring(0, str.length-1));
  }

  useEffect(() => {
    props.updateParams({
      from, to, language, sortBy, searchIn
    })
  }, [from, to, language, sortBy, searchIn])

  return (    
    <aside id="default-sidebar" className="z-40 h-full" aria-label="Sidebar">
      <div className="px-3 py-4 overflow-y-auto h-full bg-gray-50 dark:bg-gray-800">
        
        <div id="date-range">
          <label className="mb-2 text-sm font-medium">From</label>
          <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input onChange={e => updateField(e, setFrom)} type="date" id="from" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
          </div>

          <label className="mb-2 text-sm font-medium">To</label>
          <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input onChange={e => updateField(e, setTo)} type="date" id="to" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
          </div>
        </div>

        <div id="language-container" className="mt-3">
          <label className="mb-2 text-sm font-medium">Language</label>
          <Select options={LANGS} placeholder="Choose Language"  onChange={e => updateField(e, setLanguage)} />
        </div>

        <div id="language-container" className="mt-3">
          <label className="mb-2 text-sm font-medium">Sort By</label>
          <Select options={SORT_BY} placeholder="Sort By" onChange={e => updateField(e, setSortBy)} />
        </div>

        <div id="search-in-container" className="mt-3">
          <label className="mb-2 text-sm font-medium">Search In</label>
          {
            SEARCH_IN.map((searchIn, idx) => (<div className="flex items-center mb-4 pl-2" key={searchIn}>
              <input onChange={() => updateSearchInCheck(idx)} id={searchIn} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for={searchIn} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{searchIn.toUpperCase()}</label>
            </div>))
          }
        </div>

      </div>
    </aside>

  )
}
