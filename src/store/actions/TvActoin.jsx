export { unMountTvInfo } from "../reducers/TvSlice";
import axios from "../../utils/Axios";
import { mountTvInfo } from "../reducers/TvSlice";

export const AsyncMountTv = (id)=> async (dispatch, getState)=>{
    try {

        const details = await axios.get(`/tv/${id}`);
        const watchProviders = await axios.get(`/tv/${id}/watch/providers`);
        const externalId = await axios.get(`/tv/${id}/external_ids`);
        const recommendations = await axios.get(`/tv/${id}/recommendations`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const videos = await axios.get(`/tv/${id}/videos`);
        const images = await axios.get(`/tv/${id}/images`);

        let theUltimateDetails = {
            details : details.data,
            watchProviders : watchProviders.data.results.IN,
            externalId : externalId.data,
            recommendations : recommendations.data.results,
            similar : similar.data.results,
            videos : videos.data.results.find( m => m.type === "Teaser" || m.type === "Trailer" ),
            images : images.data.backdrops
            
        };

        // console.log(theUltimateDetails, "FROM TV ACTIONS")  

        dispatch(mountTvInfo(theUltimateDetails));

    } catch (error) {
        console.log("Error occured :", error);
    }
}