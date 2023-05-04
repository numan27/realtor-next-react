import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '362bba1adamsh3f7680001565d87p1286e9jsn543a7d8f5bd9',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data;
}
