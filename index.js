const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyBgV3q8M71c-Hkqh3VmKzJSDlnoidrmuzM';

function searchYoutube() {
  $('#search-form').submit(function(event) {
    event.preventDefault();
    
    const query = {
      part: 'snippet',
      key: API_KEY,
      q: $('#search').val()
    }
    
    let results = $.getJSON(YOUTUBE_URL, query, showResults)  
  });
}

function showResults(data) {
  let videoList = $('a');
  
  console.log(data);
  
  for(let i=0; i<5; i++) {
    $(videoList[i]).attr('href', `https://youtube.com/watch?v=${data.items[i].id.videoId}`);
    $(videoList[i]).children('img').attr('src', data.items[i].snippet.thumbnails.high.url);
  }
  
  $('#search').val('');
}

$(searchYoutube);