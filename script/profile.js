var xhrRequest= new XMLHttpRequest();
xhrRequest.onload=function(){
    console.log(xhrRequest.response)
    var responseJSON=JSON.parse(xhrRequest.response);

    //image
    var elem = document.createElement("img");
    elem.src = responseJSON.image.url;
    document.getElementById("imagebox").appendChild(elem);
    //name
    var node = document.createTextNode(responseJSON.name);
    document.getElementById("naam").appendChild(node);

    //power stats
    for (var key of Object.keys(responseJSON.powerstats)) {
        var div =document.createElement("div");
        var stat = document.createTextNode(key + "    :    " + responseJSON.powerstats[key])
        div.appendChild(stat);
        document.getElementById("power").appendChild(div);

    }

    //biography
    for (var key of Object.keys(responseJSON.biography)) {
        var div =document.createElement("div");
        var stat = document.createTextNode(key + "    :    " + responseJSON.biography[key])
        div.appendChild(stat);
        document.getElementById("biography").appendChild(div);

    }
    //appearance
    for (var key of Object.keys(responseJSON.appearance)) {
        var div =document.createElement("div");
        var stat = document.createTextNode(key + "    :    " + responseJSON.appearance[key])
        div.appendChild(stat);
        document.getElementById("appearance").appendChild(div);

    }
    //work
    for (var key of Object.keys(responseJSON.work)) {
        var div =document.createElement("div");
        var stat = document.createTextNode(key + "    :    " + responseJSON.work[key])
        div.appendChild(stat);
        document.getElementById("work").appendChild(div);

    }
    //connections
    for (var key of Object.keys(responseJSON.connections)) {
        var div =document.createElement("div");
        var stat = document.createTextNode(key + "    :    " + responseJSON.connections[key])
        div.appendChild(stat);
        document.getElementById("connections").appendChild(div);

    }


}
xhrRequest.open('get',"https://superheroapi.com/api/4630807856945450/"+localStorage.getItem('names'),true);
xhrRequest.send();

function addtofav()
{
    var ab=JSON.parse(window.localStorage.getItem('favs'));
    ab.fav.push(document.getElementById("naam").innerHTML);
    window.localStorage.setItem("favs",JSON.stringify(ab));
    console.log(window.localStorage.getItem('favs'));
    
    

}