document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-btn');
    const progress = document.getElementById('progress');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const titleEl = document.getElementById('player-episode-title');
    
    // State
    let isPlaying = false;
    
    // Play/Pause button functionality
    playBtn.addEventListener('click', function() {
      if (isPlaying) {
        audioPlayer.pause();
      } else {
        audioPlayer.play();
      }
    });
    
    // Update play/pause button based on audio state
    audioPlayer.addEventListener('play', function() {
      isPlaying = true;
      playBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="currentColor"/>
        </svg>
      `;
    });
    
    audioPlayer.addEventListener('pause', function() {
      isPlaying = false;
      playBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M8 5v14l11-7z" fill="currentColor"/>
        </svg>
      `;
    });
    
    // Update progress bar and time display
    audioPlayer.addEventListener('timeupdate', function() {
      const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      progress.style.width = percent + '%';
      
      currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
      if (!isNaN(audioPlayer.duration)) {
        durationEl.textContent = formatTime(audioPlayer.duration);
      }
    });
    
    // Format time in mm:ss
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
    
    // Function to load and play an episode
    window.playEpisode = function(url, title) {
      titleEl.textContent = title;
      audioPlayer.src = url;
      audioPlayer.load();
      audioPlayer.play();
    };
    
    // Add click events to all episode play buttons on the page
    document.querySelectorAll('.episode-play-btn').forEach(button => {
      button.addEventListener('click', function() {
        const url = this.dataset.audioUrl;
        const title = this.dataset.title;
        window.playEpisode(url, title);
      });
    });
  });