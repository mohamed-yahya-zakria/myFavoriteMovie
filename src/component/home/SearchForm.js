import React, { Component } from 'react';
import { connect } from 'react-redux';
import {searchMovie,fetchMovies,setLoading} from '../../actions/searchActions'

export class SearchForm extends Component {

    onChange = e => {
      this.props.searchMovie(e.target.value);
    };

    onSubmit = e =>{
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
       // if i dont get the data it will spinner work
        this.props.setLoading(); // right now setLoading() = true
    };

    render() {
        return (
           <div className="jumbotron jumbotron-fluid mt-5 text-center">
               <div className="container">

                   <h6 className="display-4 mb-3">
                   <i className="fa fa-search" /> Search for a movie ,TV series ..
                   </h6>

                   <form id="searchForm" onSubmit={this.onSubmit} >

                       <input type="text" className="form-control"  name="searchText"  placeholder="Search TV Series ..." onChange={this.onChange}/>
                       
                       <button type="submit" className="btn btn-primary btn-bg mt-3">
                           search
                      
                       </button>
                   </form>
               </div>
           </div>
        );
    }
}
const mapStateToProps = state=>({
    //movies = in index=>reducer short cut
    text: state.movies.text
});

export default connect(mapStateToProps,{searchMovie,fetchMovies,setLoading}) (SearchForm) 





