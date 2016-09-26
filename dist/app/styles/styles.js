const DISPLAY = {

  // Styles for the nav component at the top of the page
  nav: {
    height: '7vh',
    width: '100vw',
    backgroundColor: '#e52d27',
    fontSize: '20px',
    padding: '10px',
    text: 'white',
  },


  // Styles for the main page: map, video column, button styles, header, and search bar
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
      backgroundColor: 'rgb(191, 215, 234)',
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


  // Styles for the about page
  about: {
    bg: {
      background: 'url(../app/images/flatiron.jpg) no-repeat center center fixed',
      backgroundSize: 'cover',
      height: '100%',
    },
    infoRow: {
      position: 'relative',
      height: '30%',
      width: '100vw',
    },
    logo: {
      fontFamily: 'Righteous, cursive',
      color: 'white',
      fontSize: '1.75em',
    },
    text: {
      fontFamily: 'Nixie One, cursive',
      fontSize: '1.25em',
      color: 'white',
      margin: '10px',
    },
    infoCol: {
      xs: 12,
      md: 8,
      mdOffset: 2,
      marginTop: '25px',
      backgroundColor: 'rgba(229, 45, 39, 0.70)',
    },
    contributorRow: {
      position: 'relative',
      height: '70%',
      width: '100vw',
    },
    contributorCol: {
      xs: 12,
      md: 5,
      div: {
        marginTop: '25px',
        backgroundColor: 'rgba(229, 45, 39, 0.70)',
        height: '100%'
      },
      andy: {
        backgroundImage: 'url(../app/images/andy.jpg)',
        backgroundSize: 'cover',
        height: '280px',
        width: '280px',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      sean: {
        backgroundImage: 'url(../app/images/sean.jpg)',
        backgroundSize: 'cover',
        height: '280px',
        width: '280px',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
    }
  },


  // Styles for the video favorite page
  favorites: {
    favoritesContainer: {
      backgroundColor: 'rgb(191, 215, 234)',
      position: 'relative',
      height: '100%',
      width: '100vw',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    iFrameDiv: {
      height: '230px',
      width: '460px',
      margin: '10px',
    },
    videoDiv: {
      height: '300px',
      width: '460px',
      margin: '0 auto'
    },
    button: {
      bsStyle: "primary",
      fontFamily: 'Nixie One, cursive',
      color: 'white',
      fontSize: '1em',
      marginLeft: '10px'
    }
  }
}

export default DISPLAY;
