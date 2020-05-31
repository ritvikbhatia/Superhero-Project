var a={"fav":["Batman"]};
window.localStorage.setItem("favs",JSON.stringify(a));
var ab=JSON.parse(window.localStorage.getItem('favs'));
console.log(ab);
for(var i of ab.fav)
{
        var div =document.createElement("div");
        var stat = document.createTextNode(i)
        div.appendChild(stat);
        document.body.appendChild(div);
        var butt=document.createElement("button");
        var stat2 = document.createTextNode("delete");
        butt.appendChild(stat2);
        butt.setAttribute(onclick,function()
        {
            var ab=JSON.parse(window.localStorage.getItem('favs'));
            const index = ab.fav.indexOf(5);
            if (index > -1) {
            ab.fav.splice(index, 1);
            }
            console.log(ab);
            window.localStorage.setItem('favs',JSON.stringify(ab));
        }
        );
        div.appendChild(butt);

}
