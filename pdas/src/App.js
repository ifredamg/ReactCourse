import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    return (
        <div>
            <div className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </div>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                                title="Alexa" 
                                handle="@alexa99" 
                                description="Alexa was created by Amazon and helps you buy things"
                                image={AlexaImage} />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title="Cortana" 
                                handle="@cortana32" 
                                description="Cortana was created by Microsoft. Who knows what it does?"
                                image={CortanaImage} />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title="Siri" 
                                handle="@siri01" 
                                description="Siri was made by Apple and is being phased out"
                                image={SiriImage} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;