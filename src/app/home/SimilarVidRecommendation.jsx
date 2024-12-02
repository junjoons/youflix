"use client";

import axios from "axios";
import { useState, useEffect } from "react";

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
                    title: element.snippet.title,
                    thumbnailUrl: element.snippet.thumbnails.high.url,
                    channelTitle: element.snippet.channelTitle
                }
            ));
            setVidList(result);
            setStatus('completed');
        } catch(err) {
            console.log("API threw an error.", err);
            setStatus('error'); // Will not rerender since 'error' already was 'true', just for code symmetry
        }
    }

    useEffect(() => {
        fetchRelatedVid();
    }, []);

    if (status === 'completed') {
        return (
            <div>
                {vidList.map((vid, index) => ( // () => (...)는 () => {return(...)}을 대체
                    <div key={index}>{vid.title}</div>
                ))}
            </div>
        )
    } else if (status === 'error') {
        return (
            <div>
                <h3>ERROR</h3>
            </div>
        )
    } else if (status === 'loading') {
        return (
            <div>
                <h3>loading...</h3>
            </div>
        )
    } else {
        return(
            <div>
                <h3>WHAT THE FUCK IS HAPPENING</h3>
            </div>
        )
    }
}
