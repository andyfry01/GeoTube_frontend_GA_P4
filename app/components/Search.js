// The basics
import React from 'react';

// Display
import DISPLAY from '../styles/styles';
import { Grid, Row, Col, Button } from 'react-bootstrap'

const Search = React.createClass({
  render: function(){
    return (
      <div>
        <Grid>

          <Row>
            <h1 style={null}>GeoTube</h1>
            <h2 style={null}>A geolocation-based tool for YouTube video search and visualization</h2>
            <h3 style={null}>Find a YouTube video with geo-tag information for any city, anywhere in the world!</h3>
          </Row>

          <Row>

            <Col xs={DISPLAY.main.searchFieldElement.xs} md={DISPLAY.main.searchFieldElement.md}>
              <input onChange={this.props.onChangeCity} label="Search Location" defaultValue="New York" placeholder="ex: 'New York,' 'Russia'" />
            </Col>

            <Col xs={DISPLAY.main.searchFieldElement.xs} md={DISPLAY.main.searchFieldElement.md}>
              <select onChange = {this.props.onChangeLive} label="Live or All">
                <option value="false">All</option>
                <option value="true">Only live</option>
              </select>
            </Col>

            <Col xs={DISPLAY.main.searchFieldElement.xs} md={DISPLAY.main.searchFieldElement.md}>
              <select onChange={this.props.onChangeRadius} label ="Search Radius">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </Col>

            <Col xs={DISPLAY.main.searchFieldElement.xs} md={DISPLAY.main.searchFieldElement.md}>
              <select onChange={this.props.onChangeMaxResults} label ="# of videos returned?">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </Col>

            <Col xs={DISPLAY.main.searchFieldElement.xs} md={DISPLAY.main.searchFieldElement.md}>
              <input onChange={this.props.onChangeQuery} placeholder="'cats' or 'weather'" label ="Search term (optional)"/>
            </Col>

            <Col xs={DISPLAY.main.searchFieldElement.xs} md={DISPLAY.main.searchFieldElement.md}>
              <Button bsStyle={'regular'} onClick={this.props.onSubmit}>Search!</Button>
            </Col>

          </Row>
        </Grid>
      </div>

    )
  }
})

export default Search;
