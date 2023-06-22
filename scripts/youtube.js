const videos = [{
    image: 'thumbnails/thumbnail-1.webp',
    videoTime: '14:20',
    profilePicture: 'channel-pictures/channel-1.jpeg',
    videoTitle: 'Talking Tech and AI with Google CEO Sundar Pichai!',
    videoAuthor: 'Marques Brownlee',
    videoStats: '3.4M views &#183; 6 months ago'
},
{
    image: 'thumbnails/thumbnail-2.webp',
    videoTime: '8:22',
    profilePicture: 'channel-pictures/channel-2.jpeg',
    videoTitle: 'Try Not To Laugh Challenge #9',
    videoAuthor: 'Markiplier',
    videoStats: '19M views &#183; 4 years ago'
},{
    image: 'thumbnails/thumbnail-3.webp',
    videoTime: '9:13',
    profilePicture: 'channel-pictures/channel-3.jpeg',
    videoTitle: 'Crazy Tik Toks Taken Moments Before DISASTER',
    videoAuthor: 'SSSniperWolf',
    videoStats: '12M views &#183; 1 year ago'
},{
    image: 'thumbnails/thumbnail-4.webp',
    videoTime: '22:09',
    profilePicture: 'channel-pictures/channel-4.jpeg',
    videoTitle: 'The Simplest Math Problem No One Can Solve - Collatz Conjecture',
    videoAuthor: 'Veritasium',
    videoStats: '18M views &#183; 4 months ago'
},{
    image: 'thumbnails/thumbnail-5.webp',
    videoTime: '11:17',
    profilePicture: 'channel-pictures/channel-5.jpeg',
    videoTitle: "Kadane's Algorithm to Maximum Sum Subarray Problem",
    videoAuthor: 'CS Dojo',
    videoStats: '519K views &#183; 5 years ago'
},{
    image: "thumbnails/thumbnail-6.webp",
    videoTime: '19:59',
    profilePicture: 'channel-pictures/channel-6.jpeg',
    videoTitle: "Anything You Can Fit In The Circle I’ll Pay For",
    videoAuthor: 'MrBeast',
    videoStats: '141M views &#183; 1 year ago'
},
// {
//     image: "",
//     videoTime: "",
//     profilePicture: "",
//     videoTitle: "",
//     videoAuthor: "",
//     videoStats: " views &#183;  ago"
// }
]

let videoHTML = '';

videos.forEach((video)=>{
    videoHTML += `
    <div class="video-preview">
    <div class="thumbnail-row">
      <img class="thumbnail" src="${video.image}">
      <div class="video-time">${video.videoTime}</div>
    </div>
    <div class="video-info-grid">
      <div class="channel-picture">
        <img class="profile-picture" src="${video.profilePicture}">
      </div>
      <div class="video-info">
        <p class="video-title">
          ${video.videoTitle}
        </p>
        <p class="video-author">
          ${video.videoAuthor}
        </p>
        <p class="video-stats">
          ${video.videoStats}
        </p>
      </div>
    </div>
  </div>
    `;
})

console.log(videoHTML);

document.querySelector('.js-video-grid').innerHTML = videoHTML;