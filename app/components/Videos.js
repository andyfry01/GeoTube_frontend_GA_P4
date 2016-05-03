import React from 'react';
import SearchContainer from '../containers/SearchContainer';

const Videos = React.createClass({
  componentDidMount: function(){
    console.log("in componentDidMount and props are:", this.props);
  },
  render: function(){
    console.log("in vid comp and props are", this.props);
    let video = this.props.ajaxReturn.map(function(obj){
      let url = "https://www.youtube.com/embed/" + obj.id.videoId;
      return(
        <div>
          <h4>{obj.snippet.title}</h4>
          <h2>{obj.id.videoId}</h2>
          <a href = {url}>Click me for video</a>
          <iframe width="560" height="315" src={url} frameborder="0" allowfullscreen></iframe>

        </div>
      )
    })
    return(
      <div>{video}</div>
    )
  }
})

export default Videos;

// let url = {obj.id.videoId}
// <a href = "https://www.youtube.com/watch?v=" + url></a>


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
