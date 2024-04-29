import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function ButtonPage() {
    const handleClick = () => {
    };

    return (
        <div>    
            <div>
                <Button secondary outline rounded className="mb-5" onClick={handleClick}>
                    <GoBell />
                    Click me!!
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <GoCloudDownload />
                    Download me!!
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase />
                    Go database!!
                </Button>
            </div>
            <div>
                <Button secondary outline>Click me!!</Button>
            </div>
            <div>
                <Button primary rounded>Click me!!</Button>
            </div>
        </div>
    );
}

export default ButtonPage;