// Add components
import { useState, useRef } from "react";
import Player from "./components/Player";
import PlayList from "./components/PlayList";

// Import SongBank Object
import songBank from "./data";

// Add styles
import "./styles/app.scss";

function App() {
  // Refs
  const audioRef = useRef(null);

  // States
  const [songs, setSongs] = useState(songBank());
  // const [currentSong, setCurrentSong] = useState(songs[0]);
  const [currentSong, setCurrentSong] = useState(
    songs.find((song) => song.active === true)
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  // Event Handlers
  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    const animationPercentage = Math.round((currentTime / duration) * 100);

    setSongInfo({
      ...songInfo,
      currentTime,
      duration: duration || 0,
      animationPercentage,
    });
  };

  // Helper functions
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className="App">
      <Player
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <PlayList
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        getTime={getTime}
      />

      <audio
        ref={audioRef}
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
      >
        <source src={currentSong.audio} type="audio/mpeg"></source>
      </audio>
    </div>
  );
}

export default App;
