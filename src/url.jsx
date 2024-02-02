import  {API_KEY} from './constance/constance'
export const originals = `trending/all/week?api_key=${API_KEY}&language=en-US`
export const action = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const Horror = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`
export const Romance = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`