import SimilarVidRecommendation from "./SimilarVidRecommendation";
import ChannelRecommendation from "./ChannelRecommendation";
import ChannelVidRecommendation from "./ChannelVidRecommendation"

const CHANNEL_QUERY = '빅헤드';
const VIDEO_QUERY = '극사실주의 FPS게임에 좀비모드가 나왔습니다.';

export default function Home() {
  return (
      <div>
        <h1>This is the Home Page. haha, get it?</h1>
        <div className="channel-vid-recommendation">
          <ChannelVidRecommendation channelVidRcmdQuery={CHANNEL_QUERY}/>
        </div>
        <div className="similar-vid-recommendation">
          <SimilarVidRecommendation similarVidRcmdQuery={VIDEO_QUERY} />
        </div>
        <div className="channel-recommendation">
          <ChannelRecommendation channelRcmdQuery={CHANNEL_QUERY}/>
        </div>
      </div>
  );
}
