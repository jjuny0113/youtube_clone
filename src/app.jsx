import { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";
function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCX3EL_Eu5tQ_0oRIt7Flx7GaliBJn_uHo",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  useEffect(() => {});
  return <VideoList videos={videos} />;
}

export default App;
