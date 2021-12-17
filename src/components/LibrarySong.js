import React from 'react'

const LibrarySong = ({
  setSongs,
  isPlaying,
  audioRef,
  song,
  songs,
  setCurrentSong,
}) => {
  const selectedSongHandler = () => {
    setCurrentSong(song)
    songs.map((object) => (object.active = false))
    song.active = true
    if (isPlaying) {
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play()
        })
      }
    }
  }

  return (
    <div
      onClick={selectedSongHandler}
      className={`library-song ${song.active ? 'selected' : ''}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className='song-description'>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySong
