import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBO8ZHNa6_L78CefGExR3UD5TBOFa7lpoI';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      videos: [],
      color: "black"
    };

    this.videoSearch = this.videoSearch.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    this.videoSearch('kitties');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term }, (videos) => {
      console.log(videos);
      this.setState({ videos });
    });
  }

  handleButtonClick() {
    this.setState({ color: 'blue' });
  }

  render() {
    return (
      <div>
        <SubmitButton color={this.state.color} handleButtonClick={this.handleButtonClick} />
        {this.state.videos.map((video, i) => {
          return <p key={i}>{video.snippet.title}</p>
        })}
      </div>
    );
  }
}

const SubmitButton = ({ handleButtonClick, color }) => {
  return (
    <button
      onClick = {handleButtonClick}
      style={{backgroundColor: color}}>
      Submit
    </button>
  );
};
