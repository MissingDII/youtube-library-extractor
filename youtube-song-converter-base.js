// Process the visible tracks
function getVisibleTracks() {
    var playlistTrackContainers = document.querySelectorAll('#contents > ytmusic-responsive-list-item-renderer');
    for(var i = 1; i < playlistTrackContainers.length ; i++) { 
        var trackContainer = playlistTrackContainers[i];

        var titleElement = trackContainer.querySelector('.title');
		console.log(titleElement);
        if(titleElement !== null) {
            titleElement = titleElement.textContent;
        } else return;

        var artistsElement = trackContainer.querySelector('.secondary-flex-columns > yt-formatted-string');
		console.log(artistsElement);
        if(artistsElement !== null) {
            artistsElement = artistsElement.textContent;
        } else return;
		
        // Add it if it doesn't exist already
        var key = artistsElement + " - " + titleElement;
        if(tracklistObj && !tracklistObj.includes(key)) {
            tracklistObj.push(key);

            if(printTracksToConsole) {
                console.log(key);
            }
        }
    }
}
// Whether or not to print the tracks obtained to the console
var tracklistObj = []
var printTracksToConsole = false;

//starting
getVisibleTracks();
console.log(tracklistObj);