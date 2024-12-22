export { unMountPeopleInfo } from "../reducers/PeopleSlice";
import axios from "../../utils/Axios";
import { mountPeopleInfo } from "../reducers/PeopleSlice";

export const asyncMountPerson = (id) => async (dispatch, getState) => {
    try {

        const details = await axios.get(`/person/${id}`);
        const externalId = await axios.get(`/person/${id}/external_ids`);
        const combinedCredits = await axios.get(`/person/${id}/combined_credits`)
        const movieCredits = await axios.get(`/person/${id}/movie_credits`)
        const tvCredits = await axios.get(`/person/${id}/tv_credits`)

        let theUltimateDetails = {
            details : details.data,
            externalId : externalId.data,
            combinedCredits: combinedCredits.data,
            movieCredits : movieCredits.data,
            tvCredits: tvCredits.data,
        };

        dispatch(mountPeopleInfo(theUltimateDetails));

    } catch (error) {
        console.log("Error occured :", error);
    }
}
