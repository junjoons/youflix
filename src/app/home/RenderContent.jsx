import Image from "next/image";
import he from "he";

export default function RenderContent({title, status, vidList}) { // destructing bc props come in array
    if (status === 'completed') {
        return (
            <div className={`${title}-list`}>
                <ul className={`${title}-list__container`}>
                    {vidList.map((vid, index) => ( // () => (...)는 () => {return(...)}을 대체
                    <li key={index}>
                        {title === 'channel-recommendation' ? 
                            (<a href={`https://www.youtube.com/channel/${vid.id}`} target="_blank" rel="noopener noreferrer" >
                                <Image 
                                    src={vid.thumbnailUrl} 
                                    alt={he.decode(vid.title)} 
                                    width={200} 
                                    height={200} 
                                />
                                <br />
                                <h3 className="channel__title">
                                    {he.decode(vid.title)}
                                </h3>
                            </a>) 
                            : 
                            (<a href={`https://www.youtube.com/watch?v=${vid.id}`} target="_blank" rel="noopener noreferrer" >
                                <div className="vid-thumbnail__container">
                                    <Image
                                        className="vid-thumbnail__image"
                                        src={vid.thumbnailUrl} 
                                        alt={he.decode(vid.title)} 
                                        width={320} 
                                        height={180} 
                                        style={{ objectFit: 'cover' }}
                                        // fill
                                        // sizes="(max-width: 768px) 100vw, 480px"
                                    />
                                </div>
                                <h3 className="vid-recommendation__title">
                                    {he.decode(vid.title)}
                                </h3>
                            </a>)
                        }
                    </li>
                    ))}
                </ul>
                {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
            </div>
        );
    } else if (status === 'error') {
        return (<h3 className={`${title}__error-message`}>ERROR</h3>);
    } else if (status === 'loading') {
        return (<h3 className={`${title}__loading-message`}>loading...</h3>);
    } else {
        return (<h3>WHAT THE FUCK IS HAPPENING</h3>);
    }
}
