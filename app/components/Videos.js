import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import display from '../styles/styles';
import styles from '../styles/styles.css';
import ScrollArea from 'react-scrollbar';

const Videos = React.createClass({
  componentDidMount: function(){
    console.log("in componentDidMount and props are:", this.props);
  },
  render: function(){
    const Style = {
      height: "50vh",
      width: "100vw",
    }
    console.log("in vid comp and props are", this.props);
    let video = this.props.ajaxReturn.map(function(obj){
      let url = "https://www.youtube.com/embed/" + obj.videoId;
      return(
        <div style={display.videos.rightDiv}>
          <div style={display.videos.eachVideoElement}>
            <h4 style={display.videos.titleInfo}>{obj.title}</h4>
            <iframe width="560" height="280" src={url} frameborder="0" allowfullscreen></iframe>
            <h4 className="favoriteLink" style={display.videos.favorite}>Add to favorites</h4>
          </div>
        </div>
      )
    })
    return(
      <ScrollArea
        smoothScrolling={true}
        minScrollSize={40}
        style={Style}
        >
        {video}
      </ScrollArea>
    )
  }
})

export default Videos;

//Search passes info up to searchcontainer, which will pass it up to Main, which passes it down to Videos as props.


// const TopHitsComponent = React.createClass({
//
//   render: function(){
//     console.log('spotify', this.props.play)
//     console.log('lastfm:', this.props.songs.track)
//
//     let song = this.props.songs.track.map(function(obj){
//       return (
//         <div key={obj['@attr'].rank}>
//           <SongComponent
//             name={obj.name}
//             artist={obj.artist.name}
//             rank={obj['@attr'].rank}
//             country={obj['@attr'].country}
//             album_image={obj.image[3]['#text']}
//             song_url={obj.url}
//             songs={obj.lastFM}
//             btnText='Save'
//           />
//         </div>
//       );
//     });
//
//     return (
//       <div className='flexResults'>
//         {song}
//       </div>
//     );
//   }
// });
//
// export default TopHitsComponent;
