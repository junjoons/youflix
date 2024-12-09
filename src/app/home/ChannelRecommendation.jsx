"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import RenderContent from "./RenderContent";

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export default function ChannelVidRecommendation(props) {
    const [vidList, setVidList] = useState([]); //"vid"라고 하면 안되긴 하는데 고치기 귀찮음
    const [status, setStatus] = useState('loading');
    const query = props.channelRcmdQuery;

    const fetchRelatedVid = async() => {
        try {
            const response = await axios.get(`${BASE_URL}/search`, {
                params: {
                    part: "snippet",
                    q: query,
                    type: "channel",
                    maxResults: 6,
                    key: API_KEY,
                },
            });
            const result = response.data.items.map((element) => (
                {
                    id: element.id.channelId,
                    title: element.snippet.title,
                    thumbnailUrl: element.snippet.thumbnails.high.url
                }
            ));
            setVidList(result);
            setStatus('completed');
        } catch(err) {
            console.log("API threw an error.", err);
            setStatus('error');
        }
    }

    useEffect(() => {
        fetchRelatedVid();
    }, [query]); // prop으로 받는 query가 바뀔때마다 rerender

    return (
        <div>
            <h2 className="channel-recommendation__title">Channel recommendation</h2>
            <RenderContent title="channel-recommendation" status={status} vidList={vidList} />
        </div>
    )
}
