import { Component } from "react";
import Input from '@material-ui/core/Input';

class SearchBar extends Component {
    render(){
        return(
        <div>
            <h2>Search for a city.</h2>
        <form><Input type="text"></Input></form>
        </div>)
    }
}

export default SearchBar