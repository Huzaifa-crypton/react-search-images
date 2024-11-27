import "bulma/css/bulma.css";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import searchImage from "./api";
import * as bulmaToast from 'bulma-toast'
import "bulma-pageloader";
import { useState } from "react";
function App() {
    const [imageList, setImageList] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (query) => {
        setLoading(true)
        await searchImage(query)
            .then((res) => {
                setImageList(res)
                setLoading(false)
                console.log(res)
            })
            .catch((err) => {
                setLoading(false)
            
                console.log("Could Not fetch Images")
            })
    }
    return (
        <div className="container" style={{width:"100vw"}}>
            <div class={'pageloader is-bottom-to-top ' + (loading && "is-active")}><span class="title">Pageloader</span></div>
            <SearchBar onSubmit={handleSubmit}></SearchBar>
            <ImageList images={imageList}></ImageList>
        </div>
    )
}
export default App;