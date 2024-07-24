import { useEffect, useState } from "react"
import SearchBar from "./SearchBar"

  const ImageCard = () => {
      const [data, setData] = useState([])
      const [text, setText] = useState("")
      const fetchData=async()=>{
          const url=`https://pixabay.com/api/?key=42924440-c4e7d44fcb9c95eb853856ef9&q=${text}&image_type=photo&pretty=true&per_page=100`
          const api=await fetch(url)
          const info=await api.json()
          console.log(info)
          setData(info.hits)
      }

      useEffect(()=>{
        fetchData()
      },[text])

    return (
      <>
      <SearchBar result={(text)=>setText(text)}/>
      <div className="gallery" >

      {data.map((item,index)=>{
        return(

          <div key={index} className="flex flex-wrap">
          <img src={item.webformatURL} className="w-full rounded-[22px] py-3"/>
          {/* <div className="text-xl text-zinc-400 px-5 py-3">Photo By {item.user}</div> */}
      </div>
      )})}
      </div>
      </>
    )
  }

  export default ImageCard
