
function ImageShow({ image }) {
    console.log(image)
    return (
        <div className='image-container'>
            <img className='single-image' src={image.urls.small} alt={image.alt_description}></img>
        </div>
    )
}

export default ImageShow;