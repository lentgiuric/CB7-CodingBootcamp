export const BASE_URL = `https://dummyjson.com`

export const GET = async (endpoint) => {
    let res = await fetch(BASE_URL + endpoint);

    let data = res.json();

    return data
}