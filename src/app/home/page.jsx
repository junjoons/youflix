import SimilarVidRecommendation from "./SimilarVidRecommendation";
import ChannelRecommendation from "./ChannelRecommendation";
import ChannelVidRecommendation from "./ChannelVidRecommendation"

let query = '빅헤드';

export default function Home() {
  return (
      <div>
        <h1>This is the Home Page. haha, get it?</h1>
        <div className="channel-vid-recommendation">
          <ChannelVidRecommendation query={query}/>
        </div>
        <SimilarVidRecommendation />
        <ChannelRecommendation />
      </div>
  );
}
