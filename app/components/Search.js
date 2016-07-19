import React from 'react';
import display from '../styles/styles';

const Search = React.createClass({
  render: function(){
    return(
      <div id="mainDiv" style={null}>
        <h4 style={null}>Find a YouTube video tagged by location for any city!</h4>
        <div id="rowParent">
          <div id="rowContainer" style={null}>
              <div style={null}>
                <input onChange={this.props.onChangeCity} label="Search Location" defaultValue="New York" placeholder="ex: 'New York,' 'Russia'" />
                <select onChange = {this.props.onChangeLive} label="Live or All">
                  <option value="false">All</option>
                  <option value="true">Only live</option>
                </select>
                <select onChange={this.props.onChangeRadius} label ="Search Radius">
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
                <select onChange={this.props.onChangeMaxResults} label ="# of videos returned?">
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
                <input onChange={this.props.onChangeQuery} placeholder="'cats' or 'weather'" label ="Search term (optional)"/>
                <button onClick={this.props.onSubmit}>Search!</button>
              </div>
          </div>
        </div>
      </div>
    )
  }
})

export default Search;
