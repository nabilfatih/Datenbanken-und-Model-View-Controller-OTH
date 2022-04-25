const logger = require("../utils/logger");
const playlistStore = require("../models/playlist-store.js");

const playlist = {
  async index(request, response) {
    const playlistId = request.params.id; // hier holen wir uns die ID
    const playlist = await playlistStore.getPlaylist(playlistId);
    const viewData = {
      title: "Playlist",
      playlist: playlist,
    };
    response.render("playlist", viewData);
  },
};

module.exports = playlist;
