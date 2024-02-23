// let container = document.createElement('div')
// container.className = 'container'



// let musicPlayer = document.createElement('div')
// musicPlayer.className = 'musicPlayer'

// let nav = document.createElement('nav')
// nav.className = 'nav'

// let circle1 = document.createElement('div')
// circle1.className = 'circle1'
// circle1.innerHTML = `<i class="fa-solid fa-angle-left"></i>`
// nav.append(circle1)

// let circle2 = document.createElement('div')
// circle2.className = 'circle2'
// circle2.innerHTML = `<i class="fa-solid fa-bars"></i>`
// nav.append(circle2)

// musicPlayer.append(nav)

// let songImg = document.createElement('img')
// songImg.src = './Letali.png'
// songImg.className = 'songImg'
// musicPlayer.append(songImg)

// let texIt = document.createElement('div')
// texIt.className = 'texIt'
// texIt.innerHTML = `<h1>Летали</h1> `
// musicPlayer.append(texIt)

// let texIs = document.createElement('div')
// texIs.classList = 'texIs'
// texIs.innerHTML = `<p>Трек - Ulukmanapo`
// musicPlayer.append(texIs)

// let audios = document.createElement('div')
// audios.className = 'audios'
// audios.innerHTML = `<audio controls id="song">
//                      <source src="Ulukmanapo – Летали.mp3" type="audio/mpeg">
//                       </audio>`
// musicPlayer.append(audios)

// let inp = document.createElement('div')
// inp.innerHTML = `<input type="range" value="0" id="progress">`
// musicPlayer.append(inp)

// let controls = document.createElement('div')
// controls.className = 'controls'

// let controls1 = document.createElement('div')
// controls1.className = 'controls1'
// controls1.innerHTML = `<div><i class="fa-solid fa-backward"></i></div>`
// controls.append(controls1)

// let controls2 = document.createElement('div')
// controls2.className = 'controls2'
// controls2.innerHTML = `<div onclick="playPause()><i class="fa-solid fa-play" id="ctrlIcon"></i></div>`

// controls.append(controls2)

// let controls3 = document.createElement('div')
// controls3.className = 'controls3'
// controls3.innerHTML = `<div><i class="fa-solid fa-forward"></i></div>`
// controls.append(controls3)

// musicPlayer.append(controls)



// container.append(musicPlayer)
// document.body.append(container)



let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");


song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}


if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}


progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}




// body{
//     margin: 0;
//     padding: 0;
//     font-family: 'Poppins', sans-serif;
//     box-sizing: border-box;
// }

// .container{
//     width: 100%;
//     height: 100vh;
//     background: #333;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-wrap: wrap;
// }

// .music-player{
//     background: #ffe0e5;
//     width: 400px;
//     padding: 25px 35px;
//     text-align: center;
// }

// nav{
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 30px;
// }

// nav .circle{
//     border-radius: 50%;
//     width: 40px;
//     height: 40px;
//     line-height: 40px;
//     background: #fff;
//     color: #f53192;
//     box-shadow: 0 5px 10px rgba(255, 26, 26, 0.22);

// }

// /* nav .circle2{
//     border-radius: 50%;
//     width: 40px;
//     height: 40px;
//     line-height: 40px;
//     background: #fff;
//     color: #f53192;
//     box-shadow: 0 5px 10px rgba(255, 26, 26, 0.22);
// } */

// .song-img{
//     width: 220px;
//     border-radius: 50%;
//     border: 8px solid #fff;
//     box-shadow: 0 10px 60px rgba(255, 26, 26, 0.22);
// }

// .music-player h1 {
//     font-family: 'Times New Roman', Times, serif;
//     font-size: 20px;
//     font-weight: 400;
//     color: #333;
//     margin-top: 20px;
// }

// .music-player p{
//     font-size: 14px;
//     color: #333;
// }

// #progress{
//     -webkit-appearance: none;
//     width: 100%;
//     height: 6px;
//     background: #f53192;
//     border-radius: 4px;
//     cursor: pointer;
//     margin: 40px 0;
// }

// #progress::-webkit-slider-thumb{
//     -webkit-appearance: none;
//     background: #f53192;
//     width: 30px;
//     height: 30px;
//     border-radius: 50%;
//     border: 8px solid #fff;
//     box-shadow: 0 5px 5px rgba(255, 26, 26, 0.22);
// }

// .controls{
//     display: flex;
//     justify-content: center;
//     align-items: center;

// }

// .controls div{
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 60px;
//     height: 60px;
//     margin: 20px;
//     background: #fff;
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 50%;
//     color: #f53192;
//     box-shadow: 0 10px 20px rgba(255, 26, 26, 0.22);
//     cursor: pointer;
// }

// .controls1:nth-child(2){
//     transform: scale(1.5);
//     background: #f53192;
//     color: #fff;
// }








/* body{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}

.container{
    width: 100%;
    height: 100vh;
    background: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.musicPlayer{
    background: #ffe0e5;
    width: 400px;
    padding: 25px 35px;
    text-align: center;
}

nav{
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}

nav .circle1{
    border-radius: 50%;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background: #fff;
    color: #f53192;
    box-shadow: 0 5px 10px rgba(255, 26, 26, 0.22);

}

nav .circle2{
    border-radius: 50%;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background: #fff;
    color: #f53192;
    box-shadow: 0 5px 10px rgba(255, 26, 26, 0.22);
}

.songImg{
    width: 220px;
    border-radius: 50%;
    border: 8px solid #fff;
    box-shadow: 0 10px 60px rgba(255, 26, 26, 0.22);
}

.texIt {
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    font-weight: 400;
    color: #333;
    margin-top: 20px;
}

.texIs{
    font-size: 14px;
    color: #333;
}

#progress{
    -webkit-appearance: none;
    width: 100%;
    height: 6px;
    background: #f53192;
    border-radius: 4px;
    cursor: pointer;
    margin: 40px 0;
}

#progress::-webkit-slider-thumb{
    -webkit-appearance: none;
    background: #f53192;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 8px solid #fff;
    box-shadow: 0 5px 5px rgba(255, 26, 26, 0.22);
}

.controls{
    display: flex;
    justify-content: center;
    align-items: center;

}

.controls1{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    margin: 20px;
    background: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #f53192;
    box-shadow: 0 10px 20px rgba(255, 26, 26, 0.22);
    cursor: pointer;
}

.controls1:nth-child(2){
    transform: scale(1.5);
    background: #f53192;
    color: #fff;
}

.controls2{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    margin: 20px;
    background: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #f53192;
    box-shadow: 0 10px 20px rgba(255, 26, 26, 0.22);
    cursor: pointer;
}

.controls12:nth-child(2){
    transform: scale(1.5);
    background: #f53192;
    color: #fff;
}

.controls3{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    margin: 20px;
    background: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #f53192;
    box-shadow: 0 10px 20px rgba(255, 26, 26, 0.22);
    cursor: pointer;
}

.controls3:nth-child(2){
    transform: scale(1.5);
    background: #f53192;
    color: #fff;
} */

/* .prog{
    color: re;
} */