const DISPLAY = {

  nav: {
    height: '7vh',
    width: '100vw',
    backgroundColor: '#e52d27',
    fontSize: '20px',
    padding: '10px',
    text: 'white',
  },

  main: {
    button: {
      bsStyle: "primary",
      fontFamily: 'Nixie One, cursive',
      color: 'white',
      fontSize: '1em'
    },
    header: {
      logo: {
        fontFamily: 'Righteous, cursive',
        color: 'white',
        fontSize: '4.5em'
        // border: '5px solid white',
        // borderRadius: '5px'
      },
      headerDiv: {
        marginBottom: '20px'
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
      background: '#BFD7EA'
    },

    searchBar: {
      xs: 12,
      md: 12,
      position: 'relative'
    },

    error: {
      xs: 12,
      md: 12,
      fontFamily: 'Nixie One, cursive',
      fontSize: '1.5em',
      color: 'white'
    },

    contentArea: {
      height: '100%',
      background: '#BFD7EA',
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
      },
      searchButtonDiv: {
        paddingTop: '15px',
        paddingBottom: '15px'
      }
    },

    video: {
      videoCol: {
        xs: 12,
        height: '360px',
        marginBottom: '10px'
      },
      videoTitle: {
        xs: 12,
        fontFamily: 'Nixie One, cursive',
        color: 'black',
        fontSize: '2em',
      },
      iFrame: {
        height: '100%',
        width: '100%'
      }
    }

  },

  about: {

    bg: {
      backgroundImage: 'url(../app/images/flatiron.jpg)',
      height: '93vh',
    },
    infoRow: {
      position: 'relative',
      height: '30%',
      width: '100vw',
    },
    infoCol: {
      xs: 12,
      md: 6,
      mdOffset: 3,
      border: '1px solid black',

    },
    contributorRow: {
      position: 'relative',
      height: '70%',
      width: '100vw',
    },
    contributorCol: {
      xs: 12,
      md: 4,
      border: '1px solid black',
    }
  }
}

export default DISPLAY;
