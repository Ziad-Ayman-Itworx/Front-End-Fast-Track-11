require("./styles.scss");

import { init } from './shared-scripts/api-service';
import { NowPlayingComponent } from './components/now-playing';

function loadNowPlaying() {
    var $nowPlayingContainer = $("<div id='nowPlayingContainer'></div>");
    $(document.body).append($nowPlayingContainer);
    new NowPlayingComponent($nowPlayingContainer.get(0)).init();
}

init().then(loadNowPlaying);