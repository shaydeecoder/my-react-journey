import AudioWaveform from "./AudioWaveform";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const PlayerControl = ({
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
  // Event Handlers
  const playSongHandler = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="player__control">
      <div className="control__info">
        <div className="player__playbtn" onClick={playSongHandler}>
          <FontAwesomeIcon
            className="playbtn__icon"
            icon={isPlaying ? faPause : faPlay}
            size="1x"
          />
        </div>

        <div>
          <h2 className="artist">{currentSong.artist}</h2>
          <h2 className="song-name">{currentSong.name}</h2>
        </div>
      </div>

      <div className="player__waveform">
        <AudioWaveform />
      </div>

      <div className="player__logo-wrap">
        <div className="logo">
          <div className="logo__icon-wrap">
            <span className="logo__icon logo__icon--1"></span>
            <span className="logo__icon logo__icon--2"></span>
            <span className="logo__icon logo__icon--3"></span>
          </div>
          <h2 className="logo__text">Megaphone</h2>
        </div>
      </div>
    </div>
  );
};

export default PlayerControl;
