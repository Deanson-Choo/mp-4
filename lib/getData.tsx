const API_KEY = process.env.API_KEY
// This is how to import .env file from the server

export default async function getData() {

    const res = await fetch(`https://api.bigbookapi.com/search-books?api-key=${API_KEY}&query=food.`)
    return res.json()
}