const dataStore = require("./data-store.js");
const dataStoreClient = dataStore.getDataStore();
const logger = require("../utils/logger.js");

const playlistStore = {
  async getPlaylist(id) {
    const query = "SELECT * FROM playlist2_playlists WHERE id=$1";
    const values = [id];
    try {
      let result = await dataStoreClient.query(query, values);
      return result.rows[0];
    } catch (e) {
      logger.error("Error fetching playlist", e);
    }
  },
};

module.exports = playlistStore;
