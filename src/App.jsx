import SearchBox from "./components/SearchBox"
import { useState, useEffect, useCallback } from "react";
import useDebounce from "./hooks/debounce";
import Card from "./components/Card";

function App() {

  const [data, setData] = useState("");
  const [books, setBooks] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const debouncedData = useDebounce(data, 500)

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://openlibrary.org/search.json?q=${debouncedData.trim()}&limit=10&page=1`);
      const result = await response.json();
      setBooks(result.docs || []);
      setLoading(false);
      console.log(result.q); // Use result directly to log the response
    } catch (err) {
      console.log(err);
    }

  }, [debouncedData])

  useEffect(() => {
    if (debouncedData) {
      getData();
    } else {
      setBooks([])
    }

  }, [debouncedData, getData]);


  function handleOnChange(data) {
    setData(data);
    setShow(false);
  }


  return (
    <>
      <div className="h-screen w-full bg-blue-800">

        <div className="flex flex-col justify-center relative top-20">
          <SearchBox OnChange={(data) => handleOnChange(data)} data={data} books={books} OnClick={() => setShow(true)} show={show} />
        </div>



        {show ?
          <div className="absolute top-40 z-0 w-full">
            <div className=" flex justify-center font-bold text-2xl text-white">Search Results for: <span className="text-red-600 underline">{`${debouncedData}`}</span> </div>
            {loading ?
              <div className="flex justify-center text-xl">Loading...</div>
              :
              <div className="grid grid-cols-3 gap-4 mt-3 mx-10 max-[426px]:grid-cols-1 max-[769px]:grid-cols-2">
                {
                  books?.map(book => <Card book={book} key={book.key} searchResult />)
                }
              </div>}

          </div>
          :
          null}
      </div>
    </>
  )
}

export default App
