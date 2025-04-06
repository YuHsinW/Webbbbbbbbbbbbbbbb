const textbox = document.querySelector("#fill-in");
const list = document.querySelector(".to-do-list");
const button = document.querySelector(".button");

function newtask(){
    if(textbox.value === ""){
        return;
    }
    const task = document.createElement("li");

    task.innerHTML=`
        <input type="checkbox" class="checkbox">
        <label>${textbox.value}</label>
        <button class="trashcan">🗑</button>
    `
    const trashcan = task.querySelector(".trashcan");
    trashcan.addEventListener("click", function(){
        task.remove();
    });


    const checkbox = task.querySelector(".checkbox");
    checkbox.addEventListener("change", function(){
        if(checkbox.checked){
            task.style.textDecoration = "line-through";
            task.style.color="#999";
            list.append(task);
        }
        else{
            task.style.textDecoration = "none";
            task.style.color="";
            list.prepend(task);
        }
    });

    // task.textContent = textbox.value;
    list.append(task);
    textbox.value="";
}

button.addEventListener("click", newtask);

textbox.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        newtask();
    }
});