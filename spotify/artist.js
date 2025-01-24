let playButtonHTML = '<div><img src="playButton.png" alt="#" id="SongPlayButton"></div>';
let finalButtonPlaySong = document.getElementById("buttonsContainer");

// Get all song bars and numbers
let songbars = document.getElementsByClassName("Songs");
let numbers = document.getElementsByClassName("Number");
console.log(songbars);

// Loop through each songbar
for (let i = 0; i < songbars.length; i++) {
    // Add event listeners for mouseenter and mouseleave
    songbars[i].addEventListener("mouseenter", () => {
        numbers[i].innerHTML = playButtonHTML;
        songbars[i].style = "background-color:#80808069";
        if (isSelected) {
            songbars[i].style = "background-color:gray ";
        }

    });

    songbars[i].addEventListener("mouseleave", () => {
        numbers[i].textContent = i + 1;
        songbars[i].style = "background-color:burlywood";
        // if (!isSelected) {
        //     songbars[i].style = "background-color:burlywood";  
        // }
        if (isSelected) {
            songbars[i].style = "background-color:gray ";
        }
        isSelected = false;
    });
}


const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');
const volumeBarContainer = document.getElementById('volumeBarContainer');
const volumeBar = document.getElementById('volumeBar');

let isDragging = false;

// Play the audio
playBtn.addEventListener('click', () => {
    audioPlayer.play();
});

// Pause the audio
pauseBtn.addEventListener('click', () => {
    audioPlayer.pause();
});

// Stop the audio
stopBtn.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
});

// Function to update volume
function updateVolume(e) {
    const rect = volumeBarContainer.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;
    console.log('Adjusted offsetX:', offsetX);
    const volume = offsetX / rect.width;
    volumeBar.style.width = volume * 100 + '%';

    audioPlayer.volume = volume;
}

// Handle mouse down event
volumeBarContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateVolume(e);
    console.log(e);
});

/* These event listeners are attached to the window to handle dragging and stopping the drag anywhere on the screen.*/

// Handle mouse move event
window.addEventListener('mousemove', (e) => {
    if (isDragging) {
        updateVolume(e);
        console.log(e);


    }
});

// Handle mouse up event
window.addEventListener('mouseup', () => {
    isDragging = false;
});

// logic for  background color in song selection
let isSelected = false;
// const a = 0;
for (let i = 0; i < songbars.length; i++) {
    if (!isSelected) {
        songbars[i].addEventListener("click", () => {
            // Set all songbars to burlywood first
            for (let j = 0; j < songbars.length; j++) {
                songbars[j].style.backgroundColor = "burlywood";
            }

            // Then set the clicked songbar to gray
            songbars[i].style.backgroundColor = "gray";
            isSelected = true;
        });
    }
}

//final button play song script

let songPlay = false;
let buttonValue = false;
finalButtonPlaySong.addEventListener("click", e => {

    if (!buttonValue) {

        finalButtonPlaySong.innerHTML = `<img src="Newpause.164x256.png" alt="#">`;
        audioPlayer.play();
        buttonValue = true;
        songPlay = true;
        songTimeLine(1000);
    }
    else if (buttonValue) {
        finalButtonPlaySong.innerHTML = `<img src="playButton.png" alt="#">`;
        audioPlayer.pause();
        buttonValue = false;
    }
})

let speakerButton = document.getElementById("speaker-icon");
let speakerButtonValue = false;
let lastMusicVolume = 0;
speakerButton.addEventListener("click", e => {
    if (!speakerButtonValue) {
        speakerButton.src = "speaker.151x256.png";
        speakerButtonValue = true;
        lastMusicVolume = audioPlayer.volume;
        audioPlayer.volume = 0;
    }
    else if (speakerButtonValue) {
        speakerButton.src = "speaker-with-three-sound-waves.256x243.png";
        speakerButtonValue = false;
        audioPlayer.volume = lastMusicVolume;
    }
})

let timelineBar = document.getElementById("timelineBar");
console.log(timelineBar);

/**
 currentVolume.textContent = 'Volume: ' + Math.round(volume * 100) + '%';
 const currentVolume = document.getElementById('currentVolume');
 */


function songTimeLine(value) {
    if (songPlay && !audioPlayer.ended) {
        let currenWidth =parseFloat (timelineBar.style.width) || 0;
        setInterval(() => {
            currenWidth += 0.369;
            timelineBar.style.width = currenWidth + `%`;
        }, value);
    }
    
}
// songTimeLine(1000);