export default function Cards(props) {
    return (
        <div className="cards-background-color">
            <div className="cards-container">
                <img className="cards-img" src={`/${props.item.imageUrl}`} />
                <h2 className="discover">Discover</h2>
                <h2 className="cards-title">{props.item.title}</h2>
                <p className="cards-location">
                    <i className="fa-solid fa-location-dot"></i>
                    {props.item.location}
                    <a className="cards-location-Url" href={`${props.item.googleMapsUrl}`}>
                    View on Google Maps</a>
                </p>
                <p className="cards-description">{props.item.description}</p>
            </div>
        </div>
    )
}