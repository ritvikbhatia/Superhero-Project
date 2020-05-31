document.getElementById("myform").addEventListener("submit", myFunction);

function myFunction() {
    var xhrRequest= new XMLHttpRequest();

    xhrRequest.onload=function()
    {
        console.log(xhrRequest.response);
        var responseJSON=JSON.parse(xhrRequest.response);
        alert(responseJSON.name);
        
    }
    var superHeroName=document.getElementById("superHeroName").value;
    xhrRequest.open('get',"https://superheroapi.com/api/4630807856945450/search/"+superHeroName,false);
    xhrRequest.send();
    
}


