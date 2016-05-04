import React from 'react'
import ScrollArea from 'react-scrollbar'

const Test = React.createClass({

  render(){
    const Style = {
      height: '50vh',
      border: '1px solid black'
    };
    return (
      <ScrollArea smoothScrolling={true}
                  minScrollSize={40}
                  style={Style}>

          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>
          <h1>So many h1's</h1>

      </ScrollArea>
    )
  }

})

export default Test
