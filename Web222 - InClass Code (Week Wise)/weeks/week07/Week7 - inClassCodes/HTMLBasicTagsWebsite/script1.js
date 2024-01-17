var students = ['Tom Sue','Sam Jiff','Dave Mike'];
onload = function(){
    var e = getELementsById('id1');
    e.innerHTML+="Dev Soni";

    e = document.querySelector('#id1');

    var text = " ";

    for(let i = 0; i< students.length; i++){
        //text+="<p>"+students[i]+"</p>";
        text+=`<p>${students[i]}</p>`;
    }
    e.innerHTML=text;

function createList(students){
    e = document.querySelector('#id1');

    var text = "<ol>";

    for(let i = 0; i< students.length; i++){
        //text+="<p>"+students[i]+"</p>";
        text+=`<li>${students[i]}</li>`;
    }
    text+="</ol>";
    e.innerHTML=text;
}

function createTable(students){
    e = document.querySelector('#id1');

    var text = '<table border="2px">';
    text+='<tr><th>No</th><th>Name</th></tr>'
    for(let i = 0; i< students.length; i++){
        //text+="<p>"+students[i]+"</p>";
        text+=`<tr><td>${i+1}</td><td>${students[i]}</td></tr>`;
    }
    text+="</table>";
    e.innerHTML=text;
}
};
