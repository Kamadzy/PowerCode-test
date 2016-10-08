$(document).ready(function(){
    var tasks = localStorage['dLine'] ? JSON.parse(localStorage.dLine) : [];
    function openData(){
        $("#tableBody").empty();
        for (var i=0; i<tasks.length; i++){
            $( "#tableBody" ).append( "<tr> <td>"+tasks[i].status+"</td> <td>"+tasks[i].text+"</td> <td>"+tasks[i].date+"</td> <td><button data-id=\""+i+"\" class=\"deleteButton\">Delete Item</button></td> </tr>" );
        }
    }

    function saveData(){

        var checkBox = $('input[name="optionsRadios"]:checked').val();

        var textArea = $('#textArea').val();

        var deadLine = $('#datetimepicker').val();

        var task = {status:checkBox,text:textArea,date:deadLine};
        tasks.push(task);
        localStorage.setItem("dLine", JSON.stringify(tasks));

        openData();
    }
    function deleteItem(id){
        for (var i=0; i<tasks.length; i++){
          if(i==parseInt(id)){
             tasks.splice(i,1);
          }
        }
        localStorage.setItem("dLine", JSON.stringify(tasks));
        openData();
    }
    $("#tableBody").on("click",".deleteButton", function(){
        deleteItem($(this).data("id"));
    });
    $("#saveButton").click(function(){
        saveData();
    });
    openData();
    $(".table").tablesorter();

    
});