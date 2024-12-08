import Image from "next/image";

export default function RenderContent({title, status, vidList}) { // destructing bc props come in array
    if (status === 'completed') {
        return (
            <div className={`${title}-list`}>
                <ul>
                    {vidList.map((vid, index) => ( // () => (...)는 () => {return(...)}을 대체
                    <li key={index}>
                        {title === 'channel-recommendation' ? 
                            (<a href={`https://www.youtube.com/channel/${vid.id}`} target="_blank" rel="noopener noreferrer" >
                                <Image 
                                    src={vid.thumbnailUrl} 
                                    alt={vid.title} 
                                    width={200} 
                                    height={200} 
                                />
                                {vid.title} [{vid.id}]
                            </a>) 
                            : 
                            (<a href={`https://www.youtube.com/watch?v=${vid.id}`} target="_blank" rel="noopener noreferrer" >
                                <div className="vidThumbnailContainer">
                                    <Image
                                        className="vidThumbnailImage"
                                        src={vid.thumbnailUrl} 
                                        alt={vid.title} 
                                        width={480} 
                                        height={270} 
                                        style={{ objectFit: 'cover' }}
                                        // fill
                                        // sizes="(max-width: 768px) 100vw, 480px"
                                    />
                                </div>
                                {vid.title}
                            </a>)
                        }
                    </li>
                    ))}
                </ul>
            </div>
        );
    } else if (status === 'error') {
        return (<h3 className={`${title}-error-message`}>ERROR</h3>);
    } else if (status === 'loading') {
        return (<h3 className={`${title}-loading-message`}>loading...</h3>);
    } else {
        return (<h3>WHAT THE FUCK IS HAPPENING</h3>);
    }
}
