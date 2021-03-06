import React, { Component } from 'react';

const API = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA';
const channelID = 'UCNpIE11a9nLW_s2GUWmksqw';
const result = 5;

let finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelID=${channelID}&part=snippet,id&order=date&maxResults=${result}`;

class Youtube extends Component {
    constructor(props){
        super(props);

        this.state = {
            resultyt: []
        };
        this.clicked = this.clicked.bind(this);
    }

    clicked = () => {
        fetch(finalURL)
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);
                const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
                this.setState({ resultyt: resultyt });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        console.log(finalURL);
        
    return (
        <div>
            <div>
                <button onClick={this.clicked} className='Youtube'>Get Youtube Videos</button>
            </div>
                {
                    this.state.resultyt.map((link, i) => {
                        let frame = <div key={i}><iframe width="560" height="315" title="Youtube Fetch" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        return frame;
                    })
                }
                {this.frame}
        </div>
    )
  }
}

export default Youtube;
