import searchIcon from "./search.png"
import { useState } from "react"
const SearchBar = (props) => {
    const [query, setQuery] = useState("")
    const submitQuery=()=>{
        console.log(query)
        props.result(query);
    }
  return (
    <div className="container flex justify-center items-center w-full">
      <div className="searchbar m-7">
        <input onChange={(e)=>{setQuery(e.target.value)}} className="text-xl h-[44px] px-7 rounded-xl" type="text" value={query} placeholder="Search Image...."/>
      </div>
      <div className="search">
        <button className= "text-slate-700 p-3 bg-white rounded-full" onClick={submitQuery}><img src={searchIcon} alt="" width={"20px"}/></button>
      </div>
    </div>
  )
}

export default SearchBar
