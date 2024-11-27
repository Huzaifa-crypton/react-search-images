import axios from "axios";

const searchImage = async (query) => {
    return await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID XVFLm5Z-bcLgRQXuS6ipRbmcgsSYLd6wz-ZtisXdy9Q"
        },
        params: {
            query: query
        }
    }).then(response=>{
        return response.data.results
    })

}
export default searchImage;