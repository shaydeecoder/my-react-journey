import PlayListSong from "./PlayListSong";

const PlayList = ({
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
  return (
    <div className="playlist__wrap">
      <div className="playlist__head">
        <p>IN THIS PLAYLIST</p>
        <p>{songs.length} SONGS</p>
      </div>
      <div className="playlist__body">
        {songs.map((song) => {
          return (
            <PlayListSong
              key={song.id}
              id={song.id}
              song={song}
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
          );
        })}
      </div>
    </div>
  );
};

export default PlayList;
