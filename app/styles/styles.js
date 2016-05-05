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
    mainDiv: {
      backgroundImage: "url('http://www.freestylephoto.biz/static/images/product/321253.jpg')",
      backgroundSize: "cover",
      margin: "0 auto"
    },
    searchHeader: {
      color: "#9e9e9e",
      textAlign: "center"
    },
    parentDiv: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between"
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
      cursor: 'pointer',
      color: 'red'
    },
  },
  about: {
    contentContainer: {
      display: "flex",
      flexFlow: "row nowrap",
    },
    leftCol: {
      width: "20%",
      minHeight: "80vh",
      backgroundImage: "url('/app/images/seanNewGeoTube.jpg')",
      backgroundSize: "cover",
      position: "center "
    },
    centerCol: {
      width: "60%",
      display: "flex",
      flexFlow: "column nowrap",
      justifyContent: "space-around",
      backgroundImage: "url('https://bikramyoganyc.com/wp-content/uploads/2015/07/flatiron_building_new_york_city-111.jpg')",
      backgroundSize: "cover",
    },
    topInfo: {
      marginRight: "15%"
    },
    bottomInfo: {
      marginLeft: "15%"
    },
    infoPar: {
      color: "white",
      fontFamily: "Garamond sans-serif",
      fontSize: "20px",
      textAlign: "center",
      background: "black",
      opacity: "0.6",
      borderRadius: "2%",
      padding: "3px"
    },
    p: {
      opacity: "1"
    },
    rightCol: {
      width: "20%",
      backgroundImage: "url('/app/images/andyNewGeoTube.jpg')",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }
  }
}
