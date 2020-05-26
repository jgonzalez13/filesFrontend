import React, { Component } from 'react';
import TableFiles from './TableFiles/TableFiles'
import { data } from './data.jsx'

function searchingFor(term){
    return function(x){
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}



class SearchComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            people: data,
            term: '',
        }

        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event){
        this.setState({term: event.target.value})
    }

    render(){
        const { term, people } = this.state
        return (
            <div className = "App">
                <form>
                    <input type="text"
                        onChange={this.searchHandler}
                        value = {term}
                    />
                </form>
                {
                <TableFiles data={people.filter(searchingFor(term))} />
            }
            </div>
        )
    }
}

export default SearchComponent;
