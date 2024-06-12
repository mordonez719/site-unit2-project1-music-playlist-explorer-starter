var gallery = document.getElementById("all-cards");

let playlist_data = data['playlists']

for (let i = 0; i < playlist_data.length; i++){
    let new_playlist = playlist_data[i];

    gallery.innerHTML+=

    `
    <span class="playlist-card" id="${new_playlist.playlistID}">
        <img class="playlist-image" id="${new_playlist.playlistID}" src="${new_playlist.playlist_art}">
        <section id="card1-content">
            <h4 class="playlist-title">${new_playlist.playlist_name}</h4>
            <p class="playlist-creator">${new_playlist.playlist_creator}</p>
            <button class="like-button" id=${i}>❤️</button>
            <p class="like-count" id=${i}>${new_playlist.likeCount}</p>
        </section>
    </span>`;

}

var modal = document.getElementById("playlist-modal");

const modal_openers = document.getElementsByClassName("playlist-open");

function openModal(button_clicked) {
    modal.style.display = "flex"
    let playlist_id = button_clicked.id;
    let opening = playlist_data[playlist_id];
    let container = document.getElementsByClassName("modal-content")[0];
    container.innerHTML+=
   `
   <div id="modal-top">
        <span>
            <img class="modal-image" src=${opening.playlist_art}>
        </span>
        <span>
            <h2>${opening.playlist_name}</h2>
            <h3>${opening.playlist_creator}</h3>
        </span>
    </div>
    <button class="shuffle-button" id=${opening.playlistID}>
        Shuffle
    </button>
    <section id="modal-song-list">
    </section>
   `

   let songs = opening.songs;
//    console.log(songs)

    container = document.getElementById("modal-song-list");
    for (let i=0; i < songs.length; i++){
    container.innerHTML +=
    `
    <div class="modal-song" style="display: flex;">
        <span class="modal-song-image">
            <img class="song-image" src=${songs[i].cover_art}>
        </span>
        <span class="modal-song-info">
            <section>
                <h3 class="song-title">${songs[i].title}</h2>
                <p class="artist-name">${songs[i].artist}</p>
                <p class="album-name">${songs[i].album}</p>
            </section>
        </span>
        <span class="modal-song-time">
            ${songs[i].duration}
        </span>
    </div>
    `
   };

}


for (let i = 0; i < modal_openers.length; i++){
    modal_openers[i].onclick = function(){
        openModal(this);
    }
}



const closeButton = document.getElementsByClassName("modal-close")[0];

const closeButtons = document.getElementsByClassName("modal-close");
console.log(closeButtons);

function closeModal() {
     modal.style.display = "none"
 }


closeButton.addEventListener('click', closeModal);
// addEventListener('click', upLike);


// for (let i = 0; i < closeButtons.length; i++){
//     closeButtons[i].onclick = function(){
//         closeModal(this);
//     }
// }





const play_cards = document.getElementsByClassName("playlist-card");

function upLikeAll(button_clicked) {
    index_id = button_clicked.id;
    //play_card[index_id].querySelectorAll('p')[1].textContent = index;
    play_cards[index_id].querySelectorAll('p')[1].textContent = (parseInt(play_cards[index_id].querySelectorAll('p')[1].textContent) + 1);
}


const like_buttons = document.getElementsByClassName("like-button");

for (let i = 0; i < like_buttons.length; i++){
    like_buttons[i].onclick = function(){
        upLikeAll(this);
    }
    //addEventListener('click', upLike);
}

const play_imgs = document.getElementsByClassName("playlist-image");

for (let i = 0; i < play_imgs.length; i++){
    play_imgs[i].onclick = function(){
        openModal(this);
        const shuffles = document.getElementsByClassName("shuffle-button");
        console.log(shuffles)
        for (let i = 0; i < shuffles.length; i++){
            shuffles[i].onclick = function(){
            console.log('log test')
            shuffleSongs(this);
    }
}
    }
    //addEventListener('click', upLike);
}

// console.log("here");

function shuffleSongArray(songArray) {
    for (var i = songArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = songArray[i];
        songArray[i] = songArray[j];
        songArray[j] = temp;
    }
}


function shuffleSongs(shuffle_clicked){
    let playlist_id = shuffle_clicked.id;
    let opening = playlist_data[playlist_id];
    let songs = opening.songs;
    console.log(songs)
    let container = document.getElementById("modal-song-list");
    shuffleSongArray(songs);
//    for (let i=0; i < songs.length; i++){
    container.innerHTML =
    `
    `

    for (let i=0; i < songs.length; i++){
        container.innerHTML +=
        `
    <div class="modal-song" style="display: flex;">
        <span class="modal-song-image">
            <img class="song-image" src=${songs[i].cover_art}>
        </span>
        <span class="modal-song-info">
            <section>
                <h3 class="song-title">${songs[i].title}</h2>
                <p class="artist-name">${songs[i].artist}</p>
                <p class="album-name">${songs[i].album}</p>
            </section>
        </span>
        <span class="modal-song-time">
            ${songs[i].duration}
        </span>
    </div>
    `
    //   };
    // `
    // <div class="modal-song" style="display: flex;">
    //     <span class="modal-song-image">
    //         <img class="song-image" src=${songs[i].cover_art}>
    //     </span>
    //     <span class="modal-song-info">
    //         <section>
    //             <h3 class="song-title">${songs[i].title}</h2>
    //             <p class="artist-name">${songs[i].artist}</p>
    //             <p class="album-name">${songs[i].album}</p>
    //         </section>
    //     </span>
    //     <span class="modal-song-time">
    //         ${songs[i].duration}
    //     </span>
    // </div>
    // `
   };
}

// console.log("here");

// const shuffles = document.getElementsByClassName("shuffle-button");
// console.log(shuffles)

// for (let i = 0; i < shuffles.length; i++){
//     shuffles[i].onclick = function(){
//         console.log('log test')
//         shuffleSongs(this);
//     }
// }