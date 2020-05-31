
var xhrRequest= new XMLHttpRequest();

xhrRequest.onload=function()
{
    console.log(xhrRequest.response);
    
}
xhrRequest.open('get',"https://superheroapi.com/api/4630807856945450/644",true);
xhrRequest.send();