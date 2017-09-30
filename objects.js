var playlist = {bono: "song"};

function updatePlaylist(obj, artist, song){
  Object.assign(obj, {[artist]: song})
  
}
