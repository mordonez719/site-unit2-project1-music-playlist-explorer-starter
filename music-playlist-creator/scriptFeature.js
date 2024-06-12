let playlist_data = data['playlists']


function generateFeature(){
    let randIndex = Math.floor(Math.random() * playlist_data.length)
    console.log(randIndex);
    let randPlaylist = playlist_data[randIndex];
    console.log(randPlaylist);
    let f_img = document.getElementById("feature-img");
    console.log(f_img);
    f_img.src=randPlaylist.playlist_art;
    let f_title = document.getElementById("feature-title");
    f_title.textContent=randPlaylist.playlist_name;

    let container = document.getElementById("feature-songs");
    let songs = randPlaylist.songs;

    for (let i=0; i < songs.length; i++){
        container.innerHTML +=
        `
        <div class="feature-song">
            <span class="feature-song-image">
                <img class="feature-song-image" style="margin: 5px;" src=${songs[i].cover_art}>
            </span>
                <section style="width: 500px; margin-left: 10px;">
                    <h3 class="feature-song-title">${songs[i].title}</h2>
                    <p class="feature-artist-name">${songs[i].artist}</p>
                    <p class="feature-album-name">${songs[i].album}</p>
                </section>
            <span class="feature-song-time">
                ${songs[i].duration}
            </span>
        </div>
        `
       };
}

generateFeature();