import {SEARCH_MOVIE,FETCH_MOVIES,FETCH_MOVIE, LOADING} from '../actions/types'

const initialState = {
    text : '',
    movies : [],
    loading: false,
    movie : []
};
  
    // foo = to delete the warning (Unexpected default export of anonymous function  import/no-anonymous-default-export)
export default function foo(state = initialState,action) {
    switch(action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text : action.payload,
                loading: false
            };
            case FETCH_MOVIES :
                return {
                    ...state,
                    movies : action.payload,
                    // that by defualt flase coz spinner don't work fristly
                    loading: false
                };

            case FETCH_MOVIE:
                return {
                    ...state,
                    movie :action.payload,
                    loading: false
                };
            case LOADING:
                return {
                    ...state,
                    loading:true
                };

            default:
             return state;
    }
}