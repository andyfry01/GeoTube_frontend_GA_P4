// The basics
import React from 'react';

// Display info
import DISPLAY from '../styles/styles';
import { Grid, Row, Col, Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const Search = React.createClass({
  render: function(){
    return (
      <div>

      <Row>
        <h1 style={null} className="text-center">GeoTube</h1>
        <h2 style={null} className="text-center">A geolocation-based tool for YouTube video search and visualization</h2>
        <h3 style={null} className="text-center">Find a YouTube video with geo-tag information for any city, anywhere in the world!</h3>
      </Row>

      <Row>
        <Form>
          <FormGroup controlId="cityData">
            <Col className="text-center" xs={DISPLAY.main.searchFieldElement.colStyles.xs} md={DISPLAY.main.searchFieldElement.colStyles.md}>
              <ControlLabel>Search location</ControlLabel>
              <FormControl
              type="text"
              onChange={this.props.onChangeCity}
              placeholder="e.g. New York, Japan"
              />
            </Col>

            <Col className="text-center" xs={DISPLAY.main.searchFieldElement.colStyles.xs} md={DISPLAY.main.searchFieldElement.colStyles.md}>
              <ControlLabel>Show only live videos?</ControlLabel>
              <FormControl componentClass="select" placeholder="Live Videos" onChange={this.props.onChangeLive}>
                <option value="false">All Videos</option>
                <option value="true">Only live videos</option>
              </FormControl>
            </Col>

            <Col className="text-center" xs={DISPLAY.main.searchFieldElement.colStyles.xs} md={DISPLAY.main.searchFieldElement.colStyles.md}>
              <ControlLabel>Select search radius (in miles)</ControlLabel>
              <FormControl componentClass="select" placeholder="Five miles" onChange={this.props.onChangeRadius}>
                <option value="5">Five miles</option>
                <option value="10">Ten miles</option>
                <option value="25">Twenty-five miles</option>
                <option value="50">Fifty miles</option>
              </FormControl>
            </Col>

            <Col className="text-center" xs={DISPLAY.main.searchFieldElement.colStyles.xs} md={DISPLAY.main.searchFieldElement.colStyles.md}>
              <ControlLabel>Select number of video results</ControlLabel>
              <FormControl componentClass="select" placeholder="Five" onChange={this.props.onChangeMaxResults}>
                <option value="5">Five</option>
                <option value="10">Ten</option>
                <option value="25">Twenty-five</option>
                <option value="50">Fifty</option>
              </FormControl>
            </Col>

            <Col className="text-center" xs={DISPLAY.main.searchFieldElement.colStyles.xs} md={DISPLAY.main.searchFieldElement.colStyles.md}>
              <ControlLabel>Enter a search term</ControlLabel>
                <FormControl
                type="text"
                onChange={this.props.onChangeQuery}
                placeholder="Maybe 'cats' or 'weather'"
                />
            </Col>

            <Col className="text-center" xs={DISPLAY.main.searchFieldElement.colStyles.xs} md={DISPLAY.main.searchFieldElement.colStyles.md}>
              <Button bsStyle={'primary'} onClick={this.props.onSubmit}>Search!</Button>
            </Col>

          </FormGroup>
        </Form>
      </Row>
      </div>
    )
  }
})

export default Search;
