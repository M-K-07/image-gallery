import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Loader from "../assets/infinite-spinner.svg";

const ImageCard = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  const fetchData = async () => {
    const url = `https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY }&q=${text}&image_type=photo&pretty=true&per_page=100`;
    const api = await fetch(url);
    const info = await api.json();
    setData(info.hits);
    setIsFetching(false);
  };

  useEffect(() => {
    fetchData();
  }, [text]);



  return (
    <>
      <SearchBar result={(text) => setText(text)} />
      {!isFetching && data.length === 0 && <h1 className="text-5xl text-center text-white mx-auto mt-32">No Images Found</h1> }

      {isFetching ? <img src={Loader} alt=""  className="block mx-auto w-[80px]"/>
    :
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div key={index} className="flex flex-wrap w-full">
                <img
                  src={item.webformatURL}
                  className="w-[1000px] rounded-[22px] py-3"
                />
            </div>
          );
        })}
      </div>
}
    </>
  );
};

export default ImageCard;
