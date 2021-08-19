import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const PlayListSong = ({
  id,
  song,
  audioRef,
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo,
  getTime,
}) => {
  const songSelectorHandler = async () => {
    try {
      // Toggle active state
      const newSongs = songs.map((song) => {
        if (song.id === id) {
          return { ...song, active: true };
        } else {
          return { ...song, active: false };
        }
      });
      console.log(newSongs);

      await setSongs(newSongs);

      const newCurrentSong = newSongs.find((song) => song.active === true);
      console.log(newCurrentSong);

      await setCurrentSong(newCurrentSong);

      if (isPlaying) audioRef.current.play();
      console.log(audioRef.current);
    } catch (err) {}
  };

  return (
    <div
      onClick={songSelectorHandler}
      className={`playlist__info-wrap ${
        song.active ? "playlist__info-wrap--active" : ""
      }`}
    >
      <div className="playlist__info">
        <div className="playlist__icon-wrap">
          <FontAwesomeIcon className="playlist__icon" icon={faPlay} size="1x" />
        </div>

        <p className="playlist__title">{song.name}</p>
      </div>

      <div className="playlist__time">{getTime(songInfo.duration)}</div>
    </div>
  );
};

export default PlayListSong;
