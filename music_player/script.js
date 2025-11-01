let progress = document.getElementById('progress')
// select the audio element (id="song") not the progress input
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime
}

function playPause(){
    if(ctrlIcon.classList.contains('fa-pause')){
        song.pause();
        ctrlIcon.classList.remove('fa-pause')
        ctrlIcon.classList.add('fa-play')
    }else{
        song.play()
        ctrlIcon.classList.add('fa-pause')
        ctrlIcon.classList.remove('fa-play')
    }

}

// update the progress input as the audio plays
song.addEventListener('timeupdate', () => {
    progress.value = song.currentTime;
});

progress.onchange = function(){
    // seek to chosen time and ensure playback state reflects the control
    song.currentTime = progress.value;
    song.play();
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play');
}