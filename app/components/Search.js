import React from 'react';
import display from '../styles/styles';
import {Input, Row, Button, Icon} from 'react-materialize';

const Search = React.createClass({
  render: function(){
    return(
      <div id="mainDiv" style={display.search.mainDiv}>
        <h4 style={display.search.searchHeader}>Find a YouTube video tagged by location for any city!</h4>
        <div id="rowParent">
          <div id="rowContainer" style={display.search.rowContainer}>
            <Row>
              <div style={display.search.searchSelect}>
                <Input s={2} onChange={this.props.onChangeCity} label="Search Location" defaultValue="New York" placeholder="ex: 'New York,' 'Russia'" />
                <Input s={1} type="select" onChange = {this.props.onChangeLive} label="Live or All">
                  <option value="false">All</option>
                  <option value="true">Only live</option>
                </Input>
                <Input s={1} type="select" onChange={this.props.onChangeRadius} label ="Search Radius">
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </Input>
                <Input s={1.5} type="select" onChange={this.props.onChangeMaxResults} label ="# of videos returned?">
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </Input>
                <Input s={2.5} onChange={this.props.onChangeQuery} placeholder="'cats' or 'weather'" label ="Search term (optional)"/>
                <Button waves='light' onClick={this.props.onSubmit}>Search!<Icon left>star</Icon></Button>
              </div>
            </Row>
          </div>

        </div>
      </div>
    )
  }
})

export default Search;
