import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import WaveSurfer from 'wavesurfer.js'
import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs'
import { GoUnmute, GoMute } from 'react-icons/go'
import './AudioPlayer.css'


const AudioPlayer = ({ audio }) => {

  const containerRef = useRef();
  const waveSurferRef = useRef();
  const [isPlaying, toggleIsPlaying] = useState(false);
  const [volume, setVolume] = useState('.5')

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
      responsive: true,
      cursorWidth: 0,
      barHeight: .7,
      progressColor: '#DFA539',
      waveColor: '#888888',
    });
    waveSurfer.load(audio);
    waveSurfer.on('ready', () => {
      waveSurferRef.current = waveSurfer;
      waveSurferRef.current.setVolume(volume);
    });
    
    return () => {
      waveSurfer.destroy();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audio]);

  return (
    <div className='audio__player__container'>
      <button
        onClick={() => {
          waveSurferRef.current.playPause();
          toggleIsPlaying(waveSurferRef.current.isPlaying());
        }}
        type="button"
      >
        {isPlaying ? <BsPauseCircle className='play__icon' /> : <BsPlayCircle className='play__icon' />}
      </button>
      <div ref={containerRef}  className='audio__wave' />
      <button>
        {volume !== '0' ? <GoUnmute className='play__icon' /> : <GoMute className='play__icon' />}
      </button>
      <input
        type="range"
        min="0"
        step='.1'
        max="1"
        value={volume}
        className='input__volume__range'
        style={{
          backgroundSize: `${volume * 100 + '%'} 100%`
        }}
        onChange={(e) => {
          if(e.target.value === '0') {
            setVolume(e.target.value);
            waveSurferRef.current.setVolume(e.target.value);
          }else {
            setVolume(e.target.value);
            waveSurferRef.current.setVolume(e.target.value);
          }
        }}
      />
      {/* <input type="range" onChange={(e) => waveSurferRef.current.setVolume(e.target.value)} /> */}
    </div>
  )
}

AudioPlayer.propTypes = {
  audio: PropTypes.string.isRequired,
}

export default AudioPlayer