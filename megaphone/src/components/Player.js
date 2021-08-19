// Add components
import PlayerControl from "./PlayerControl";

const Player = ({
  audioRef,
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo,
}) => {
  return (
    <div className="player">
      <img
        className="player__cover"
        src={currentSong.cover}
        alt={currentSong.name}
      />
      <PlayerControl
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
    </div>
  );
};

export default Player;
