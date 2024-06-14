
/* eslint react/prop-types: 0 */
export default function Card({ book }) {

    const docs = book;

    return (
        <div className="flex mx-2 w-full border border-red-500 p-2 rounded-md bg-black">
            <img src={`https://covers.openlibrary.org/b/id/${docs.cover_i}-M.jpg`} alt={`${docs.title} avatar`} className=" w-40 h-40" />


            <div className=" flex flex-col text-white px-2">
                <span className=" text-md font-bold">{`${docs.title}`}</span>
                <span className=" font-serif text-sm">
                    {`by ${docs.author_name ? docs.author_name.map(data => (' ' + data)) : "unknown"}`}
                </span>
                <span className=" text-sm"> {`Rating: ${(docs.ratings_average ? docs.ratings_average.toPrecision(2) : "??")}/5`} </span>
                <span className=" text-sm"> {`Publish Year: ${(docs.publish_year ? docs.publish_year[0] : "??")}`} </span>
            </div>

        </div>
    )
}


// return default Card;