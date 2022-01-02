import axios from "axios";

export default {
  async searchTracks(nameArtists) {
    const { data } = await axios({
      method: "GET",
      url: `https://api.spotify.com/v1/search?q=${nameArtists}&type=track%2Cartist&market=ES&limit=10&offset=0`,
    });

    const arrayItemsTracks = data.tracks.items;
    const arrayAlbumTracks = arrayItemsTracks.map(({ album }) => album);
    const arrayAlbumImages = arrayAlbumTracks.map(({ images }) => images);
    const arrayImagesTrack = arrayAlbumImages.map((item) => item[0].url);

    return { arrayItemsTracks, arrayImagesTrack, arrayAlbumTracks };
  },
};
