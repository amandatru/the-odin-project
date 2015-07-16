$(document).ready(function() {
     genDivs(8); 
$("#setsize").click(function() {
     var size = prompt("Enter how many squares you want on each side.");
     genDivs(size);
});

$("#clear").click(function (){
     $(".square").css("background-color", "#181818"); 
});

});

function genDivs(v){ 
      $(".center").remove();
      var e = document.body;  
      var center = document.createElement("center");
      center.className = "center";
      var container =document.createElement("div");
      container.className = "container";
      for(var i = 0; i < v; i++){ 
        var row = document.createElement("div"); 
        row.className = "row"; 
        for(var x = 1; x <= v; x++){ 
            var cell = document.createElement("div"); 
            cell.className = "square"; 
            //cell.innerText = (i * v) + x;
            row.appendChild(cell); 
        } 
        container.appendChild(row); 
        center.appendChild(container);
        e.appendChild(center);
        $(".container").css('height', 52*v + "px");
        $(".container").css('width', 52*v + "px");
      } 
      //document.getElementById("code").innerText = e.innerHTML;

$("div>div>div").mouseenter(function(){
        $(this).css("background-color","#002fb2");
    });
 }



