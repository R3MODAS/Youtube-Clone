import { useSearchParams } from "react-router-dom"

const WatchContainer = () => {
    const [SearchParams] = useSearchParams();
    const VideoId = SearchParams.get("v");
    return (
        <div className="px-5 py-2">
            <iframe width="1280" height="720" src={`https://www.youtube.com/embed/${VideoId}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default WatchContainer