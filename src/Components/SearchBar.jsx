import { useState } from "react"
const SearchBar = (props) => {
    const [query, setQuery] = useState("")
    props.result(query)
  return (
    <div className="container flex justify-center items-center w-full">
      <form onChange={(e)=>setQuery(e.target.value)} className="searchbar m-7  flex justify-between px-7">
        <input className="lg:text-xl text-sm h-[44px] px-7 bg-slate-700 outline-none text-white rounded-xl lg:w-[550px] w-[250px]" type="text" value={query} placeholder="Search Image...."/>
      </form>
    </div>
  )
}

export default SearchBar
