require("./styles.scss");

const { NowPlayingComponent } = require("./components/now-playing");

function loadNowPlaying() {
    var $nowPlayingContainer = $("<div id='nowPlayingContainer'></div>");
    $(document.body).append($nowPlayingContainer);
    new NowPlayingComponent($nowPlayingContainer.get(0)).init();
}

loadNowPlaying();