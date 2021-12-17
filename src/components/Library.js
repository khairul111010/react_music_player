import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({
  setSongs,
  isPlaying,
  libraryStatus,
  audioRef,
  songs,
  setCurrentSong,
}) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className='library-songs'>
        {songs.map((song) => (
          <LibrarySong
            isPlaying={isPlaying}
            setSongs={setSongs}
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            key={song.id}
            audioRef={audioRef}
          />
        ))}
      </div>
    </div>
  )
}

export default Library
