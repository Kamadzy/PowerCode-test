function saveData(){

    var tasks = localStorage['dLine'] ? JSON.parse(localStorage.dLine) : [];

    var checkBox = $('input[name="optionsRadios"]:checked').val();
    /*localStorage.setItem("cBox", checkBox);*/

    var textArea = $('#textArea').val();
    /*localStorage.setItem("tArea", textArea);*/

    var deadLine = $('#datetimepicker').val();

    var task = {status:checkBox,text:textArea,date:deadLine};
    tasks.push(task);
    localStorage.setItem("dLine", JSON.stringify(tasks));

    return false;
}