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
          <iframe width="360" height="210" src={url} frameborder="0" allowfullscreen="true"></iframe>

        </div>
      )
    })
    return(
      <div>{video}</div>
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
