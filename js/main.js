const video = document.getElementById('heroVideo');

video.addEventListener('loadedmetadata', () => {
  video.playbackRate = 0.7; 
});
