import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import './responsive.scss';

class PicOfTheDay extends React.Component { 
    constructor(props) {
        super(props);
        this.state = { 
            loading: true,
            title: '',
            explanation: '',
            date: '',
            copyright: '',
            img: '',
            media_type: '',
            video: ''
        }
    }

    componentDidMount() {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=NMnY548zyrPfYSxvM1mATNzhwYbOqgEkFiwV422Z`)
            .then(r => r.json())
            .then(ans => {
                this.setState({ 
                    title: ans.title,
                    explanation: ans.explanation,
                    date: ans.date,
                    copyright: ans.copyright,
                    img: ans.hdurl,
                    loading: false,
                    media_type: ans.media_type,
                    video: ans.url
                })
            });
    }

    render() {
        if (this.state.loading) { 
            return (
                <div className="loading">
                    Please, wait a moment...
                </div>
            )
        }
        return (
            <div className="main-container">
                <h1 className="main-title">
                    Astronomy Picture of the Day
                </h1>
                <p className="pic-title text">
                    { this.state.title }
                </p>
                <p className="pic-date text">
                    { this.state.date }
                </p>
                { (this.state.copyright != null) ? <p className="text">Copyright: { this.state.copyright }</p> : "" }
                <div className="polaroid">
                    { (this.state.media_type === "video") ? <iframe src={ this.state.video }></iframe> : <img src={ this.state.img } alt="Image from NASA Library"></img> }
                    <div className="text-container">
                        <p className="pic-description">
                            { this.state.explanation }
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<PicOfTheDay />, document.getElementById("root"));
