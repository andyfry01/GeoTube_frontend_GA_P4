import React from 'react';
import display from '../styles/styles';
import {Input, Row, Button} from 'react-materialize';


const Search = React.createClass({
  render: function(){
    return(
      <div id="mainDiv" style={display.search.mainDiv}>
        <h4 style={display.search.searchHeader}>Search for a video!</h4>
          <div id="rowContainer">
            <Row>
              <Input s={2} onChange={this.props.onChangeCity} label="Search Location" placeholder="ex: 'New York,' 'Russia'" />
              <Input s={1.5} type="select" onChange = {this.props.onChangeLive} label="Live or All">
                <option value="false">All videos</option>
                <option value="true">Only live</option>
              </Input>
              <Input s={1.5} type="select" onChange={this.props.onChangeRadius} label ="Search Radius">
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
              <Input s={3} onChange={this.props.onChangeQuery} label ="Anything in particular you'd like to find?"/>
              <Button floating large className='red' waves='light' icon='grade' onClick={this.props.onSubmit} />
            </Row>
          </div>
        <hr></hr>
      </div>
    )
  }
})

export default Search;
