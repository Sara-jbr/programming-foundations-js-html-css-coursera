function addTask () {
    var input = document.getElementById("input");
    var newTask = input.value;
    if (newTask != "") {
        var item = document.createElement("li");
        item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)"  value="&#x2713;" /> ' +
                         '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' +
                         newTask;
        document.getElementById("tasks").appendChild(item);


        input.value = "";
        input.placeholder = "enter next task …";
    }
}

function markDone (item) {
    item.className = 'finished';
}


function remove (item) {
    if (item.className === 'finished') {
        item.remove();
    }
}


function doAbout() {
    var aboutDiv = document.getElementById("divabout");
    aboutDiv.innerHTML = "Author is Sara Jabbari";
    aboutDiv.className = "divabout aboutcolor";
}


function clearAbout() {
    var aboutDiv = document.getElementById("divabout");
    aboutDiv.innerHTML = "";
    aboutDiv.className = "divabout";
}
