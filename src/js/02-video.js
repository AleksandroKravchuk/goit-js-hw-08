import Player from '@vimeo/player';

const iFreim = document.querySelector("#vimeo-player");



    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);



    player.on('play',  function() {
        console.log('played the video!');





        
//      player.getCurrentTime().then(function(seconds) {
//     console.log(seconds)
// }).catch(function(error) {
//     // an error occurred
// });   
    });


player.on('playing', function (timeupdate) {
         console.log(timeupdate.seconds);
          
        });




player.setCurrentTime().then(function(seconds) {
 console.log(seconds);
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










