const exampleData = {
    "kind": "youtube#searchListResponse",
    "etag": "etag_value",
    "nextPageToken": "next_page_token",
    "regionCode": "KR",
    "pageInfo": {
      "totalResults": 1000000,
      "resultsPerPage": 10
    },
    "items": 
    [
        {
            "kind": "youtube#searchResult",
            "etag": "etag_value",
            "id": {
            "kind": "youtube#video",
            "videoId": "VIDEO_ID"
            },
            "snippet": {
            "publishedAt": "2023-01-01T00:00:00Z",
            "channelId": "CHANNEL_ID",
            "title": "영상 제목",
            "description": "영상 설명",
            "thumbnails": {
                "default": {
                "url": "https://example.com/default.jpg",
                "width": 120,
                "height": 90
                },
                "medium": {
                "url": "https://example.com/mqdefault.jpg",
                "width": 320,
                "height": 180
                },
                "high": {
                "url": "https://example.com/hqdefault.jpg",
                "width": 480,
                "height": 360
                }
            },
            "channelTitle": "유튜버 채널 이름",
            "liveBroadcastContent": "none",
            "publishTime": "2023-01-01T00:00:00Z"
            }
        }
    ]
};

let vidList: Vid[] = [];
  
class Vid {
    title:string = '';
    thumbnailUrl:string = '';
    youtuberName:string = '';

    constructor (title:string, thumbnailUrl:string, youtuberName:string) {
        this.title = title;
        this.thumbnailUrl = thumbnailUrl;
        this.youtuberName = youtuberName;
    }
}

exampleData.items.forEach((index) => {
    // 여기서 새로운 변수 선언하면 안되는걸까?
    const title = index.snippet.title;
    const thumbnailUrl = index.snippet.thumbnails.high.url;
    const channelTItle = index.snippet.channelTitle
    const vid = new Vid (title, thumbnailUrl, channelTItle);
    vidList.push(vid);
    console.log(vidList);
})

export default function SimilarVidRecommendation() {
    return (
        <div>
            {vidList.map((vid, index) => ( // () => (...)는 () => {return(...)}을 대체
                <div key={index}>{vid.title}</div>
            ))}
        </div>
    )
}
