
// document.getElementById("myform").addEventListener("submit", myFunction);
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
            var element = document.getElementById("SearchResults");
            element.appendChild(link);
            return;
        }
        else{
            var div1 =document.createElement("div");
            var link1 = document.createElement("h3");
            var node1 = document.createTextNode( "Do you mean..?");
            link1.appendChild(node1);
            var element1 = document.getElementById("SearchResults");
            div1.appendChild(link1);
            element1.appendChild(div1);
        for(let i of responseJSON.results)
        {

            var div =document.createElement("div");
            var link = document.createElement("A");
            var node = document.createTextNode(i.name);
            link.setAttribute("href", "profile.html");
            link.setAttribute("onclick","localStorage.setItem('names',id)");
            link.setAttribute("id",i.id);
            link.appendChild(node);
            var element = document.getElementById("SearchResults");
            div.appendChild(link);
            element.appendChild(div);

        }
    }
        // alert(responseJSON.name);
        
    }
    var superHeroName=document.getElementById("superHeroName").value;
    xhrRequest.open('get',"https://superheroapi.com/api/4630807856945450/search/"+superHeroName,true);
    xhrRequest.send();
    return false;
    
}


