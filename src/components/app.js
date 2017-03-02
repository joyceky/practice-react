import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBO8ZHNa6_L78CefGExR3UD5TBOFa7lpoI';


export default class App extends Component {
  // constructor() {
  //   super();
  //
  // }

  componentDidMount() {
    console.log(this.videoSearch('kitties'));
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      console.log(videos);
    });
  }

  render() {
    return (
      <div>React simple starter</div>
    );
  }
}
