import getData from "@/lib/getData";
import Image from "next/image";
import {BookTypes} from "@/types/BookTypes";

export default async function Home() {

    const data = await getData();
    const books = Array.isArray(data.books)?data.books.flat(): []; //convert 2D array to 1D array

    if (books.length === 0) {
        return <h1>Error fetching books!!</h1>;
    }

    return (
      <>
          {
              books.map((book: BookTypes) => {
                  //every node needs a key / unique identifier
                  return(
                      <div key = {book.id}>
                          <h1>{book.title}</h1>
                          <img src = {book.image} alt = {book.title} width = {400}/>
                      </div>
                  )
              })
          }
      </>
    )
}
