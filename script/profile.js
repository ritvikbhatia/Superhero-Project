var xhrRequest= new XMLHttpRequest();
xhrRequest.onload=function(){
    console.log(xhrRequest.response)
    var responseJSON=JSON.parse(xhrRequest.response);

    //image
    var elem = document.createElement("img");
    elem.src = responseJSON.image.url;
    document.getElementById("imagebox").appendChild(elem);
    //name
    var link = document.createElement("H1");
    var node = document.createTextNode(responseJSON.name);
    link.appendChild(node);
    document.getElementById("namebox").appendChild(link);

    //power stats
    for (var key of Object.keys(responseJSON.powerstats)) {
        var stat = document.createTextNode(key + " -> " + responseJSON.powerstats[key])
        document.getElementById("power").appendChild(stat);

    }


}
xhrRequest.open('get',"https://superheroapi.com/api/4630807856945450/"+localStorage.getItem('names'),true);
xhrRequest.send();