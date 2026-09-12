const video = document.getElementById('heroVideo');
if (video) {
  video.addEventListener('loadedmetadata', () => { video.playbackRate = 0.7; });
}

const search = document.querySelector('#portfolioSearch');
if (search) {
  const destinations = [
    { terms: ['profile','about','yasamin','bio','education'], url: 'profile.html' },
    { terms: ['skill','python','node','javascript','html','css','nlp','vision','pytorch','mediapipe','resnet','vit','bigru','hugging face'], url: 'skills.html' },
    { terms: ['project','thesis','battery','sensor','sign language','persian sign language','psl','qcri','image','video','mountaineering','resnet152'], url: 'projects.html' },
    { terms: ['journey','experience','steel alborz','sharif','babol','career','work','education'], url: 'journey.html' }
  ];

  search.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    const value = search.value.trim().toLowerCase();
    if (!value) return;
    const match = destinations.find(item => item.terms.some(term => value.includes(term) || term.includes(value)));
    window.location.href = match ? match.url : `projects.html?q=${encodeURIComponent(value)}`;
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
