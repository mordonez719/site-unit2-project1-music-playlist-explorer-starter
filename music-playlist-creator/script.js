var gallery = document.getElementById("all-cards");

let playlist_data = data['playlists']

for (let i = 0; i < playlist_data.length; i++){
    let new_playlist = playlist_data[i];

    gallery.innerHTML+=

    `
    <span class="playlist-card" id="${new_playlist.playlistID}">
        <img class="playlist-image" src="${new_playlist.playlist_art}">
        <section id="card1-content">
            <h4 class="playlist-title">${new_playlist.playlist_name}</h4>
            <p class="playlist-creator">${new_playlist.playlist_creator}</p>
            <button class="playlist-open">...</button>
            <button class="like-button" id=${i}>❤️</button>
            <p class="like-count" id=${i}>${new_playlist.likeCount}</p>
        </section>
    </span>`;

}

var modal = document.getElementById("playlist-modal");
//const openButton = document.getElementsByClassName("playlist-open")[0];
const closeButton = document.getElementsByClassName("modal-close")[0];
const modal_openers = document.getElementsByClassName("playlist-open");

function openModal() {
     modal.style.display = "flex"
 }

// let container = document.getElementsByClassName("modal-content")[0];
// container.innerHTML +=
// `
// <p>here</p>
// `;

function updateModal(button_clicked){
    modal.style.display = "flex"
    let playlist_id = button_clicked.id;
    let container = document.getElementsByClassName("modal-content")[0];
    let opening = playlist_data[playlist_id];
    let songs = opening.songs;

    container.innerHTML+=
    `
    <p>here again</p>
    `;
}

// for (let i = 0; i < modal_openers.length; i++){
//      modal_openers[i].addEventListener('click', openModal);
//  }

 for (let i = 0; i < modal_openers.length; i++){
    modal_openers[i].onclick = function(){
        updateModal(this);
    }
}








function closeModal() {
     modal.style.display = "none"
 }

closeButton.addEventListener('click', closeModal);






const play_cards = document.getElementsByClassName("playlist-card");

function upLikeAll(button_clicked) {
    index_id = button_clicked.id;
    //play_card[index_id].querySelectorAll('p')[1].textContent = index;
    play_cards[index_id].querySelectorAll('p')[1].textContent = (parseInt(play_cards[index_id].querySelectorAll('p')[1].textContent) + 1);
}

//like1.addEventListener('click', upLike);

const like_buttons = document.getElementsByClassName("like-button");

for (let i = 0; i < like_buttons.length; i++){
    like_buttons[i].onclick = function(){
        upLikeAll(this);
    }
    //addEventListener('click', upLike);
}

function generateFeature(){
    let randIndex = Math.floor(Math.random() * playlist_data.length)
    let randPlaylist = playlist_data[randIndex];
    let f_img = document.getElementById("feature-img");
    f_img.src=randPlaylist.playlist_art;
}

generateFeature();