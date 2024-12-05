"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import RenderContent from "./RenderContent";

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export default function ChannelVidRecommendation(props) {
    const [vidList, setVidList] = useState([]);
    const [status, setStatus] = useState('loading');
    const query = props.similarVidRcmdQuery;

    const fetchRelatedVid = async() => {
        try {
            const response = await axios.get(`${BASE_URL}/search`, {
                params: {
                    part: "snippet",
                    q: query,
                    type: "video",
                    maxResults: 10,
                    key: API_KEY,
                },
            });
            const result = response.data.items.map((element) => (
                {
                    id: element.id.videoId,
                    title: element.snippet.title,
                    thumbnailUrl: element.snippet.thumbnails.high.url,
                    channelTitle: element.snippet.channelTitle
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
    }, []);
    
    return (
        <div>
            <h3>Similar video that you watched</h3>
            <RenderContent title="similar-vid-recommendation" status={status} vidList={vidList} />
        </div>
    )
}
