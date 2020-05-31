var names=[];
document.getElementById("myform").addEventListener("submit", myFunction);

function myFunction() {
    var xhrRequest= new XMLHttpRequest();

    xhrRequest.onload=function()
    {
        console.log(xhrRequest.response);
        var responseJSON=JSON.parse(xhrRequest.response);
        if(responseJSON.response=="error")
        {
            var link = document.createElement("p");
            var node = document.createTextNode("Nothing Found");
            link.appendChild(node);
            var element = document.getElementById("individual_result");
            element.appendChild(link);
            return;
        }
        for(let i of responseJSON.results)
        {
            var link = document.createElement("A");
            var node = document.createTextNode(i.name);
            link.setAttribute("href", "profile.html");
            link.appendChild(node);
            var element = document.getElementById("individual_result");
            element.appendChild(link);
        }
        // alert(responseJSON.name);
        
    }
    var superHeroName=document.getElementById("superHeroName").value;
    xhrRequest.open('get',"https://superheroapi.com/api/4630807856945450/search/"+superHeroName,true);
    xhrRequest.send();
    return false;
    
}


