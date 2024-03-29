"use strict";

var _player = _interopRequireDefault(require("@vimeo/player"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const iFreim = document.querySelector("#vimeo-player");
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
console.log(player);
player.on('play', function () {
  console.log('played the video!'); //   console.log(player.element. timeupdate )  
});
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlay = function (timeupdate) {
  console.log(timeupdate);
};

player.on('play', onPlay);