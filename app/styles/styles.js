const DISPLAY = {

  nav: {
    height: '7vh',
    width: '100vw',
    backgroundColor: '#e52d27',
    fontSize: '20px',
    padding: '10px',
    text: 'white',

    button: {
      bsStyle: "primary"
    }
  },

  main: {
    header: {
      logo: {
        fontFamily: 'Righteous, cursive',
        color: 'white',
        fontSize: '4em'
      },
      headerCol: {
        xs: 12,
      },
      bg: {
        backgroundColor: 'rgba(229, 45, 39, 0.70)',
        width: '75%',
        margin: '0 auto'
      },
      subHeader: {
        fontFamily: 'Nixie One, cursive',
        fontSize: '2em',
        color: 'white'
      }

    },
    searchContainer: {
      height: '93vh',
      width: '100vw',
      padding: '10px',
      background: 'lightBlue'
    },

    searchBar: {
      xs: 12,
      md: 12,
      position: 'relative'
    },

    error: {
      xs: 12,
      md: 12
    },

    contentArea: {
      height: '100%',
      colStyles: {
        xs: 12,
        md: 6
      }
    },

    scrollButton: {
      colStyling: {
        colSize: 8,
        colOffset: 2
      }
    },

    map: {
      height: '100%',
      width: '100%',
    },

    searchFieldElement: {
      colStyles: {
        xs: 12,
        md: 2
      }
    }
  },
}

export default DISPLAY;
