import React from 'react';
import display from '../styles/styles';

const Search = React.createClass({
  render: function(){
    return(
      <div>
        <hr/>
        <h3>Search for a video!</h3>
        <div className="filter-bar">
          <form>
            <p style={display.search.searchPara} class="search-paragraph">Enter a city</p>
            <input type="text" id="city-input" onChange={this.props.onChangeCity}></input>
            <br/>

            <p style={display.search.searchPara} class="search-paragraph">Search radius(mi)?</p>
            <input id="radius-input" onChange={this.props.onChangeRadius}></input>
            <br/>

            <p style={display.search.searchPara} class="search-paragraph">All videos or only live?</p>
            <select
              className="select-live"
              onChange = {this.props.onChangeLive}
              >
              <option value="not-only-live">All</option>
              <option value="only-live">Only live</option>
            </select>

            <p style={display.search.searchPara} class="search-paragraph">How many results would you like?</p>
            <select
              className="select-number"
              onChange={this.props.onChangeMaxResults}
              >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>

            <p style={display.search.searchPara} class="search-paragraph">Anything in particular you'd like to search for?</p>
            <input id="query-input" onChange={this.props.onChangeQuery}></input>
            <br/>
            <button type='button' onClick={this.props.onSubmit}>Search!</button>
          </form>
        </div>
        <hr/>
      </div>
    )
  }
})

export default Search;
