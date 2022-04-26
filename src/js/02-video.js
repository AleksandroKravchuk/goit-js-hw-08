import Player from '@vimeo/player';

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);



player.on('playing', function (timeupdate) {
         const time = timeupdate.seconds;
    const currentTime = { 'videoplayer-current-time': `${time}`, }; 
    console.log(currentTime);
 localStorage.setItem('currentTime', JSON.stringify(currentTime));  
        });


const getTime = localStorage.getItem('currentTime');



let newTime =  JSON.parse(getTime);
newTime = Number(Object.values(newTime));

player.setCurrentTime(newTime).then(function(seconds) {

    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});











