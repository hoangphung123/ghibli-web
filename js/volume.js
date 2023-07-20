const prevIcon = document.getElementById('prevIcon');
const volumeIcon = document.getElementById('volumeIcon');
const nextIcon = document.getElementById('nextIcon');

let currentTrack = 0;
let isPlaying = false;

const audioList = [
    'aseets/img/AriettysSong-VA_4bqzj.mp3',
    'aseets/img/AlwaysWithMeSpiritedAwayOST-JoeH_3he4c.mp3',
    'aseets/img/CityWithAnOceanViewKiki39sDeli_37vkb.mp3',
    'aseets/img/TonariNoTotoroMyNeighborTotoro-A_37bm3.mp3',
    'aseets/img/MerryGoRound-JoeHisaishi-2706190.mp3',
    'aseets/img/CityWithAnOceanViewKiki39sDeli_37vkb.mp3',
    'aseets/img/TonariNoTotoroMyNeighborTotoro-A_37bm3.mp3',
    'aseets/img/MerryGoRound-JoeHisaishi-2706190.mp3'
  ];

let audio = new Audio(audioList[currentTrack]);

function toggleAudio() {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
    volumeIcon.classList.remove('fa-volume-mute');
    volumeIcon.classList.add('fa-volume-down');
  } else {
    audio.pause();
    isPlaying = false;
    volumeIcon.classList.remove('fa-volume-down');
    volumeIcon.classList.add('fa-volume-mute');
  }
}

function playPrevious() {
  currentTrack = (currentTrack - 1 + audioList.length) % audioList.length;
  audio.src = audioList[currentTrack];
  audio.play();
}

function playNext() {
  currentTrack = (currentTrack + 1) % audioList.length;
  audio.src = audioList[currentTrack];
  audio.play();
}

audio.addEventListener('ended', function () {
  // Move to the next track
  currentTrack = (currentTrack + 1) % audioList.length;
  audio.src = audioList[currentTrack];
  audio.play();

  // If it's the last track, go back to the first one
  if (currentTrack === audioList.length - 1) {
    currentTrack = 0;
  }
});


