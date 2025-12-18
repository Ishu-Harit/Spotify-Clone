console.log('Welcome to Spotify');

let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');


let songs = [
    {songName: "Attention", filePath: "song/1.mp3", coverPath: "covers/cover.jpg"},
    {songName: "We Don't Talk Anymore", filePath: "song/2.mp3", coverPath: "covers/cover1.jpg"},
    {songName: "Left and Right", filePath: "song/3.mp3", coverPath: "covers/cover2.jpg"},
    {songName: "Dangerously", filePath: "song/4.mp3", coverPath: "covers/cover3.jpg"},
    {songName: "River", filePath: "song/5.mp3", coverPath: "covers/cover4.jpg"},
]

//audioElement.play();

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;

    }
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })    

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach(element => {
    element.addEventListener('click',(element)=>{
        makeAllPlays();
        songIndex = parseInt(element.target.id);
        element.target.classList.remove('fa-play');
        element.target.classList.add('fa-pause');
        audioElement.src =`song/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=1;
    }
    else{
        songIndex += 1;
    }

    audioElement.src =`song/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=1;
    }
    else{
        songIndex -= 1;
    }

    audioElement.src =`song/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})
