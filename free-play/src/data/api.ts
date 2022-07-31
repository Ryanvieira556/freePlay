import axios from "axios";


const options = {
  method: "GET",
  url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
  headers: {
    "X-RapidAPI-Key": "632e37cbe9msh3082027facaeb9fp1b25c9jsn6bfb325d359e",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

export const dataGames = axios.request(options).then(function (response) {
  return response.data;
});

export const getGames = async (platform:string, genre: string ) => {
  const optionsFilter = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: {
      platform: platform,
      category: genre,
      "sort-by": "release-date",
    },

    headers: {
      'X-RapidAPI-Key': '632e37cbe9msh3082027facaeb9fp1b25c9jsn6bfb325d359e',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
 return axios.request(optionsFilter).then(function (response) {
    return response.data;
  });
};
