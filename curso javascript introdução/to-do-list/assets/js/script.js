var input = document.getElementById('input').value;

var list = document.getElementById('list');

var button = document.getElementById('button');

button.addEventListener('click', ()=>{
    entradaDados();
})



function entradaDados(){
    var div = document.createElement('div');
    div.setAttribute("id", "task");
    list.appendChild(div);

    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    div.appendChild(checkbox);

    var tag_p = document.createElement('p');
    tag_p.setAttribute("id", "tarefa")
    var tarefa = document.createTextNode(document.getElementById('input').value);
    tag_p.appendChild(tarefa);
    div.appendChild(tag_p);
    
    var check = document.getElementById('checkbox');

}

function check() {
    
}



