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
            localStorage.setItem('channelList', JSON.stringify(result));
            localStorage.setItem('channelLastUpdatedTime', new Date().getTime());
            console.log('Saved channel list');
        } catch(err) {
            console.log("API threw an error.", err);
            setStatus('error');
        }
    }

    const getRelatedVid = () => {
        const storedTimeString = localStorage.getItem('channelLastUpdatedTime');
        let needsFetch = false;

        if (storedTimeString) {
            const storedTime = parseInt(storedTimeString, 10);
            const currentTime = new Date().getTime();
            if (currentTime - storedTime >= 5 * 60 * 60 * 1000) {
                needsFetch = true;
                console.log(`Will fetch data since ${(currentTime - storedTime) / 60 * 60 * 1000} hours passed since last fetch`);
            } else {console.log("Will not fetch new data since 5 hours did not pass");}
        } else {
            needsFetch = true;
            console.log("Will fetch new data since nothing was stored in localstorage");
        }

        if (needsFetch) {
            fetchRelatedVid();
        } else {
            const storedChannelList = localStorage.getItem('channelList');
            if (storedChannelList) {
                setVidList(JSON.parse(storedChannelList));
                setStatus('completed');
            } else {
                console.log("IDK wtf happened");
                setStatus('error');
            }
        }
    }


    useEffect(() => {
        getRelatedVid();
    }, [query]); // prop으로 받는 query가 바뀔때마다 rerender

    return (
        <div>
            <h2 className="channel-recommendation__title">Channel recommendation</h2>
            <RenderContent title="channel-recommendation" status={status} vidList={vidList} />
        </div>
    )
}
