import React, { Component } from 'react'
import {connect} from 'react-redux';
import MovieCard from './MovieCard'

class MoviesContainer extends Component {
    render() {
        const {movies} = this.props;
        let content = ''; 


        // movies.length > 0 means if movies array not empty .if movies array == 0 means is empty
       /*  content = movies.length > 0 ? movies.map((movie,index)=> <MovieCard key={index} movie={movie}/>) : null ; */


       //Response  is in API if get the data it's gonna true of not become false
       content = movies.Response === 'True' ? movies.Search.map((movie,index)=>(
         <MovieCard key={index} movie={movie}/>
       )) : null;

        return (
            <div className='row'>
                {content}
            </div>
        )
    }
}
 
 const mapStateToProps = state=>({
    movies: state.movies.movies
})
export default connect(mapStateToProps) (MoviesContainer); 




    
