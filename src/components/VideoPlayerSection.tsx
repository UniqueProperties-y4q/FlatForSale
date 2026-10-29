import React, { useRef, useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  RotateCcw, 
  Clock, 
  Compass,
  Sparkles,
  Info
} from 'lucide-react';
import { VIDEO_TIMESTAMPS } from '../data/propertyData';

export const VideoPlayerSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(110);
  const [activeTimestampIndex, setActiveTimestampIndex] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const time = videoRef.current.currentTime;
    setCurrentTime(time);

    // Update active chapter index
    let activeIdx = 0;
    for (let i = 0; i < VIDEO_TIMESTAMPS.length; i++) {
      if (time >= VIDEO_TIMESTAMPS[i].seconds) {
        activeIdx = i;
      }
    }
    setActiveTimestampIndex(activeIdx);
  };

  const jumpToTimestamp = (seconds: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = seconds;
    videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleFullScreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen().catch(() => {});
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const currentChapter = VIDEO_TIMESTAMPS[activeTimestampIndex] || VIDEO_TIMESTAMPS[0];

  return (
    <section id="video-tour" className="py-16 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Full Video Walkthrough</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif-luxury text-white">
              Take a Virtual Tour of Your Future Home
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-1">
              Explore the seamless layout, well-ventilated rooms, private terrace, and expansive master suite.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs bg-stone-800/80 border border-stone-700 px-3.5 py-2 rounded-lg text-stone-300">
            <Info className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>Click any room chapter below to jump directly to that space.</span>
          </div>
        </div>

        {/* Video Player Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Player */}
          <div className="lg:col-span-8 bg-stone-950 rounded-2xl border border-stone-800 shadow-2xl overflow-hidden">
            <div className="relative aspect-[9/16] sm:aspect-[16/9] bg-black flex items-center justify-center group">
              <video
                ref={videoRef}
                src="/assets/aistudio/Flat3VDOSocialMedia_1__8f1efa2b.mp4"
                playsInline
                preload="metadata"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={() => {
                  if (videoRef.current) setDuration(videoRef.current.duration);
                }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-contain cursor-pointer"
                onClick={togglePlay}
              />

              {/* Center Play Overlay when paused */}
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-amber-500/90 text-stone-950 flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </button>
              )}

              {/* Top Banner showing current room */}
              <div className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-md border border-stone-700/80 px-3 py-1.5 rounded-lg text-xs font-semibold text-amber-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                <span>Now Viewing: {currentChapter.roomName}</span>
              </div>
            </div>

            {/* Custom Control Bar */}
            <div className="p-4 bg-stone-950/90 border-t border-stone-800 space-y-3">
              {/* Scrub Slider */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-stone-400 font-mono w-10">
                  {formatTime(currentTime)}
                </span>
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <span className="text-xs text-stone-400 font-mono w-10 text-right">
                  {formatTime(duration)}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors"
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => jumpToTimestamp(0)}
                    className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors"
                    title="Restart from Beginning"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-stone-400 hidden sm:inline">
                    High Definition Walkthrough
                  </span>
                  <button
                    onClick={toggleFullScreen}
                    className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors"
                    title="Toggle Fullscreen"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Chapter Navigator */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 shadow-xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-800">
                <h3 className="font-bold text-base text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  Room Chapters
                </h3>
                <span className="text-xs text-stone-400">{VIDEO_TIMESTAMPS.length} Highlights</span>
              </div>

              <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
                {VIDEO_TIMESTAMPS.map((ts, idx) => {
                  const isActive = idx === activeTimestampIndex;
                  return (
                    <button
                      key={ts.seconds}
                      onClick={() => jumpToTimestamp(ts.seconds)}
                      className={`w-full text-left p-3 rounded-xl transition-all border flex items-center justify-between ${
                        isActive 
                          ? 'bg-amber-500/10 border-amber-500/50 text-white shadow-md' 
                          : 'bg-stone-900/60 border-stone-800/80 text-stone-300 hover:bg-stone-800/80 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-semibold ${
                          isActive ? 'bg-amber-500 text-stone-950' : 'bg-stone-800 text-stone-400'
                        }`}>
                          {ts.label}
                        </span>
                        <div>
                          <div className={`text-sm font-semibold ${isActive ? 'text-amber-300' : 'text-stone-200'}`}>
                            {ts.roomName}
                          </div>
                          <div className="text-[11px] text-stone-400 line-clamp-1">
                            {ts.description}
                          </div>
                        </div>
                      </div>
                      
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 animate-pulse"></span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Quick Info Box */}
              <div className="mt-4 pt-4 border-t border-stone-800/80 bg-stone-900/50 p-3 rounded-xl">
                <div className="text-xs font-semibold text-amber-300 flex items-center gap-1.5 mb-1">
                  <Compass className="w-3.5 h-3.5" />
                  Natural Lighting & Ventilation
                </div>
                <p className="text-[11px] text-stone-400 leading-relaxed">
                  Notice the expansive window openings in all three bedrooms, cross-ventilation breeze from the attached terrace, and deep natural daylight throughout the day.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
