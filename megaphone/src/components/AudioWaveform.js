const AudioWaveform = (
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo
) => {
  return (
    <div className="audiowaveform">
      <form action="#">
        <input type="range" name="wave-sample" id="wave-sample" />
      </form>
    </div>
  );
};

export default AudioWaveform;
