// Main site JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuButton = document.querySelector('button.md\\:hidden');
  
  if (menuButton) {
    menuButton.addEventListener('click', function() {
      // This would toggle a mobile menu in a real implementation
      console.log('Mobile menu clicked');
    });
  }
  
  // Initialize podcast player
  if (window.podcastData) {
      window.podcastPlayer = new PodcastPlayer();
      window.podcastPlayer.init();
  }
  
  // Any other site-wide JavaScript can go here
});

class PodcastPlayer {
constructor() {
  this.currentEpisode = null;
  this.isPlaying = false;
  this.episodes = window.podcastData?.episodes || [];
}

// Initialize player when page loads
init() {
  this.setupEventListeners();
  
  // Auto-load trailer if available
  const trailer = this.getTrailerEpisode();
  if (trailer) {
    this.loadEpisode(trailer);
  }
}

// Find trailer episode
getTrailerEpisode() {
  return this.episodes.find(episode => 
    episode.episodeType === 'trailer' || 
    episode.title.toLowerCase().includes('trailer')
  ) || this.episodes[0];
}

// Setup event listeners
setupEventListeners() {
  // Play trailer button in hero
  const playTrailerBtn = document.getElementById('play-trailer-btn');
  if (playTrailerBtn) {
    playTrailerBtn.addEventListener('click', () => {
      const trailer = this.getTrailerEpisode();
      if (trailer) {
        this.playEpisode(trailer);
      }
    });
  }

  // Episode play buttons
  document.addEventListener('click', (e) => {
    if (e.target.matches('[data-play-episode]')) {
      const episodeId = parseInt(e.target.getAttribute('data-play-episode'));
      const episode = this.episodes[episodeId];
      if (episode) {
        this.playEpisode(episode);
      }
    }

    if (e.target.matches('#toggle-play')) {
      this.togglePlay();
    }
  });
}

// Load episode into player (without auto-playing)
loadEpisode(episode) {
  this.currentEpisode = episode;
  this.updatePlayerUI(episode);
}

// Play episode (loads and auto-plays)
playEpisode(episode) {
  this.loadEpisode(episode);
  setTimeout(() => {
    const audio = document.getElementById('audio-element');
    if (audio) {
      audio.play();
    }
  }, 100);
}

// Update player UI
updatePlayerUI(episode) {
  const player = document.getElementById('audio-player');
  if (!player) return;

  player.innerHTML = `
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
      <div class="container mx-auto flex items-center gap-4">
        <div class="flex items-center gap-3 flex-1 min-w-0">
          <button id="toggle-play" class="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full flex-shrink-0">
            <svg id="play-icon" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 5v10l8-5z"/>
            </svg>
            <svg id="pause-icon" class="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 4h2v12H6zm6 0h2v12h-2z"/>
            </svg>
          </button>
          
          <div class="flex-1 min-w-0">
            <h4 class="font-medium text-sm truncate">${episode.title}</h4>
            <p class="text-gray-600 text-xs">Solving for Zero</p>
          </div>
        </div>

        <div class="hidden md:flex items-center gap-4 flex-1">
          <span id="current-time" class="text-sm text-gray-500">0:00</span>
          <div class="flex-1 bg-gray-200 rounded-full h-2 cursor-pointer" id="progress-container">
            <div id="progress-bar" class="bg-green-600 h-2 rounded-full" style="width: 0%"></div>
          </div>
          <span id="duration" class="text-sm text-gray-500">${episode.duration || '0:00'}</span>
        </div>

        <audio id="audio-element" preload="none">
          <source src="${episode.audioUrl}" type="audio/mpeg">
        </audio>
      </div>
    </div>
  `;

  this.setupAudioControls();
}

// Setup audio controls
setupAudioControls() {
  const audio = document.getElementById('audio-element');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');
  const progressBar = document.getElementById('progress-bar');
  const progressContainer = document.getElementById('progress-container');
  const currentTimeSpan = document.getElementById('current-time');
  const durationSpan = document.getElementById('duration');

  if (!audio) return;

  // Update progress
  audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = `${progress}%`;
      currentTimeSpan.textContent = this.formatTime(audio.currentTime);
    }
  });

  // Update duration when loaded
  audio.addEventListener('loadedmetadata', () => {
    durationSpan.textContent = this.formatTime(audio.duration);
  });

  // Update play/pause icons
  audio.addEventListener('play', () => {
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
    this.isPlaying = true;
  });

  audio.addEventListener('pause', () => {
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
    this.isPlaying = false;
  });

  // Click to seek
  if (progressContainer) {
    progressContainer.addEventListener('click', (e) => {
      if (audio.duration) {
        const rect = progressContainer.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const seekTime = (clickX / rect.width) * audio.duration;
        audio.currentTime = seekTime;
      }
    });
  }
}

// Toggle play/pause
togglePlay() {
  const audio = document.getElementById('audio-element');
  if (!audio) return;

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

// Format time helper
formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '0:00';
  
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
}