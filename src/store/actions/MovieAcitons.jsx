export { unMountMovieInfo } from "../reducers/MovieSlice";
import axios from "../../utils/Axios";
import { mountMovieInfo } from "../reducers/MovieSlice";

export const asyncMountMovie = (id) => async (dispatch, getState) => {
    try {

        const details = await axios.get(`/movie/${id}`);
        const watchProviders = await axios.get(`/movie/${id}/watch/providers`);
        const externalId = await axios.get(`/movie/${id}/external_ids`);
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const videos = await axios.get(`/movie/${id}/videos`);

        let theUltimateDetails = {
            details : details.data,
            watchProviders : watchProviders.data.results.IN,
            externalId : externalId.data,
            recommendations : recommendations.data.results,
            similar : similar.data.results,
            videos : videos.data.results.find( m => m.type === "Teaser" || m.type === "Trailer" ),
        };

        dispatch(mountMovieInfo(theUltimateDetails));

    } catch (error) {
        console.log("Error occured :", error);
    }
}
