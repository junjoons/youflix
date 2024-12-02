import SimilarVidRecommendation from "./SimilarVidRecommendation";
import ChannelRecommendation from "./ChannelRecommendation";
import ChannelVidRecommendation from "./ChannelVidRecommendation"

export default function Home() {
  return (
      <div>
        <h1>This is the Home Page. haha, get it?</h1>
        <ChannelVidRecommendation />
        <SimilarVidRecommendation />
        <ChannelRecommendation />
      </div>
  );
}
