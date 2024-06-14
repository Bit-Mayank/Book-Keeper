import SearchResults from "./SearchResults";

/* eslint react/prop-types: 0 */
function SearchBox({ OnChange, data, books, OnClick, show }) {

    return (
        <div className="flex flex-col">
            <div className="flex justify-center w-full">
                <input type="text" name="book-search" id="book-search" className=" bg-slate-200 h-10 w-2/6 border-solid border-2 border-black p-2 font-semibold rounded-t-md" value={data} onChange={(e) => OnChange(e.target.value)} placeholder="Search Your Book" />

                <button className=" mx-6 bg-slate-200 p-2 rounded-md border-solid border-black border-spacing-2 font-semibold hover:bg-slate-400 active:bg-red-300" onClick={() => OnClick()} >Search</button>

            </div>

            {show ?
                null :
                <div className="flex flex-col items-center max-h-96 overflow-y-scroll w-2/6 overflow-x-hidden relative mx-auto right-14 border border-black border-1 scroll hidden-scrollbar bg-black">
                    {books != null ? books.map((book) => <SearchResults key={book.id} books={book} />) : null}
                </div>
            }


        </div>
    );
}

export default SearchBox;