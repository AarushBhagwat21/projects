var list=["Classic_Pizza",
    "Deluxe_Pizza",
    "Farm_House_Pizza",
    "Cheese_And_Corn_Pizza"];
function show_menu(){
    console.log("inside show menu")
    var htmldata;
    htmldata="<ol class='menulist'>"
 for(var i = 0; i < list.length; i++){
    htmldata=htmldata+'<li>' + list[i] + '</li>'
 }
 htmldata= htmldata+"</ol>"
 document.getElementById("display_menu").innerHTML = htmldata
}
function add_item(){
    var htmldata;
    var item = document.getElementById("add_item").value
    list.push(item);
    list.sort();
    htmldata = htmldata + "<section class='cards'>"
    for(var i=0; i<list.length;i++){
        htmldata=htmldata+'<div class="card"'+'<img src="pizzaImg.png"/>'+list[i]+"</div>";
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}