import React, { Component } from 'react'
import {connect} from 'react-redux';
import SearchForm from './SearchForm';
import MoviesContainer from './MoviesContainer'
import Spinner from '../layout/Spinner';

 export class Landing extends Component {
    render() {
        const { loading } = this.props;
        return (
            <div className="container">
              <SearchForm/>
              {loading ? <Spinner/> : <MoviesContainer/>}
            </div>
        );
    }
}
// to get state and pass it as props should be use mapStateToProps
const mapStateToProps =state =>({
  loading: state.movies.loading
});

export default connect(mapStateToProps) (Landing);



