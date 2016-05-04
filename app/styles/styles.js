export default {
  nav: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    padding: "30px"
  },
  logo: {
    fontSize: "30px"
  },
  header: {
    backgroundColor: "red",
    height: '80px',
  },
  search: {
    parentDiv: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-around"
    },
    searchPara: {
      margin: "0px 0px 5px 0px",
      color: "blue",
      textAlign: "center",
    },
    searchSelect: {
      margin: "0 auto"
    },
    button: {
      margin: "0 auto",
      color: "white",
      backgroundColor: "red"
    }
  },
  main: {
    parent: {
      display: "flex",
      flexFlow: "row nowrap",
      height: '50vh',
      width: '100vw',
    },
  },
  videos: {
    rightDiv: {
      border: "1px solid black",
      display: "flex",
      flexFlow: "row nowrap",
      justifyContent: "center",
      padding: "3px",
    },
    eachVideoElement: {
      margin: '0 8.5%'

    },
    titleInfo: {
      margin: '5px auto',
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'red'
    },
    favorite: {
      textAlign: 'right',
      cursor: 'pointer'
    },
  }
}
