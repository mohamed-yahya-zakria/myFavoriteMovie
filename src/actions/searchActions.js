/* import {SEARCH_MOVIE ,FETCH_MOVIES} from './types';
import axios from 'axios';
import {APIKey} from '../APIKey';

export const searchMovie = text =>dispatch=>{
    dispatch({
        type:SEARCH_MOVIE,
        payload:text    
    });
};

export const fetchMovies = text=>dispatch=>{
        axios.get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`).then(response=>dispatch({
            type: FETCH_MOVIES,
            payload: response.data
           
        }))
     
      
      .catch(err=>console.log(err))
      
}; */

import { SEARCH_MOVIE, FETCH_MOVIES,FETCH_MOVIE, LOADING} from './types';
import axios from 'axios';

/* import { APIKey } from '../APIKey'; */
const APIKey = 'c951ff1'

export const searchMovie = text => dispatch => {
    dispatch({
      type: SEARCH_MOVIE,
      payload: text
    });
  };
  


export const fetchMovies = text => dispatch => {

  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchMovie = id =>dispatch=>{
  // &s changed to &i that in api has written if you need single movie should change to (i) insteat (s) 
  axios.get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`).then(res=>dispatch({
    type: FETCH_MOVIE,
    payload: res.data
  }))

  .catch(error=>console.log(error));

};

// if i don;t get data iam gonna show the spinner component 
export const setLoading=()=>{
  return {
    type: LOADING
  };
};
    
