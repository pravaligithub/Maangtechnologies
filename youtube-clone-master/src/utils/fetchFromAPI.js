import axios from "axios";

const BASE_URL='https://youtube-v31.p.rapidapi.com'


  const options = {
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': '030b297dc5msh29e5e624a98a481p175343jsn643c69a00675',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  export const fetchFromAPI= async(url) => {
   const {data }= await axios.get(`${BASE_URL}/${url}`, options);
   return data;
  } 