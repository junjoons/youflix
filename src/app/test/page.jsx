import Image from "next/image";
import "./test.css"

export default function TestPage() {
    return (
        <div>
            <div className="testingImageContainer">
                <Image
                    className="testingImage"
                    src="https://i.ytimg.com/vi/eG4wjl0VgWg/hqdefault.jpg"
                    alt="testing image"
                    width={480}
                    height={360}
                    style={{objectFit:"cover"}}
                />
            </div>
            <h1>
                TESTING PAGE
            </h1>
        </div>
    );
  }
  