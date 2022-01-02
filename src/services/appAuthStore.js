import axios from "axios";
import configService from "../config";
import encodeBasic from "../utils/encodeBasic";
async function appAuthStore() {
  const urlToken = "https://accounts.spotify.com/api/token";
  try {
    const { data } = await axios(urlToken, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${encodeBasic(
          configService.spotifyClientId,
          configService.spotifyClientSecret
        )}`,
      },
      data: "grant_type=client_credentials",
    });

    const { access_token } = data;
    localStorage.access_token = access_token;
    return access_token;
  } catch (error) {}
}

export default appAuthStore;
