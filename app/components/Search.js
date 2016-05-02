import React from 'react';
import display from '../styles/styles';

function FilterCategory() {
  return(
    <div>
      <hr/>
      <h3>Search for a video!</h3>
      <div className="filter-bar">
        <p style={display.search.searchPara} class="search-paragraph">Enter a city</p>
        <input id="city-input"></input>
        <br/>

        <p style={display.search.searchPara} class="search-paragraph">Search radius(mi)?</p>
        <input id="radius-input"></input>
        <br/>

        <p style={display.search.searchPara} class="search-paragraph">All videos or only live?</p>
        <select
          className="select-live"
          >
          <option value="not-only-live">All</option>
          <option value="only-live">Only live</option>
        </select>

        <p style={display.search.searchPara} class="search-paragraph">How many results would you like?</p>
        <select
          className="select-number"
          >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>

        <p style={display.search.searchPara} class="search-paragraph">Anything in particular you'd like to search for?</p>
        <input id="query-input"></input>
        <br/>
        <button>Search!</button>
      </div>
      <hr/>
    </div>
  )
}

export default FilterCategory;
