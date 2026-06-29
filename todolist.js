let bar = document.querySelector(".bar")
bar.addEventListener("click",()=>{
    if (document.querySelector(".class")){
        let delPrevious = document.querySelector(".class");
        delPrevious.remove(); 
    } 
})
let pending = document.querySelector(".pending")
let counter = 0;
let button = document.querySelector(".enter")
button.addEventListener("click",()=>{
    counter++
    if (bar.value !==""){
        let p = document.querySelector(".error");
        p.textContent = "";
        let create = document.querySelector(".add");
        create.innerHTML +=`<div class="all" id="${counter}"><p class="para">${bar.value}</p><button class='complete' onclick='forComplete(this)'>Completed</button><button class="butto" onclick="del(this)">Delete</button><button class="edit" onclick="editer(this);">Edit</button></div>`;
        pending.innerHTML +=`<div class="pendingAll" id="${counter}"><p class="pendingPara">${bar.value}</p><button class='pendingComplete' onclick='pendingForComplete(this)'>Completed</button><button class="pendingEdit" onclick="pendingEditer(this);">Edit</button></div>`;
        bar.value = "";
        let pendingdisappear = document.querySelector(".pending");
        pendingdisappear.classList.add("pendingDisappear");
    }
    else{
        let p = document.querySelector(".error");
        p.textContent = "Type something to add in Todo";
    }
})
function del(btn){
    let div = btn.closest(".all");
    div.remove()
    let idNumber = close.getAttribute("id");
    let alls = document.querySelectorAll(".pendingAll");
    for(let i = 0; i < alls.length; i++){
        if(idNumber === alls[i].getAttribute("id")){
            let delPendingTask = alls[i].remove();
            break;
        }
    }
}
function editer(btn){
    if (document.querySelector(".class")){
        let delPrevious = document.querySelector(".class");
        delPrevious.remove();   
    }
    let div = btn.parentElement;
    div.innerHTML += `<div class='class'><input type='text' placeholder='Change your Tasks' class='inputEditor'><p class="innererror"></p>
        <div class='classinner'><button class='change' onclick="changeContent(this)">Change</button><button class='Cancel' onclick='forCancel(this)'>Cancel</button></div>
        </div>` 
    let inputValue = div.querySelector(".inputEditor")
    let grapPara  = div.querySelector(".para").textContent;
    inputValue.setAttribute("value",`${grapPara}`)
} 
function changeContent(btn){
    let close = btn.closest(".all")
    let changeCont = close.querySelector(".inputEditor");
    if (changeCont.value !==""){
        let changepara = close.querySelector(".para");
        changepara.textContent = `${changeCont.value}`;
        let toRemovePopUp = close.querySelector(".class");
        toRemovePopUp.remove();
    }else{
        let innererror = close.querySelector(".innererror");
        innererror.textContent = "Type Something to Modify";
    }
    let idNumber = close.getAttribute("id");
    let alls = document.querySelectorAll(".pendingAll");
    for(let i = 0; i < alls.length; i++){
        if(idNumber === alls[i].getAttribute("id")){
            let changeParaFromEdit = alls[i].querySelector(".pendingPara");
            changeParaFromEdit.textContent = `${changeCont.value}`;
            break;
        }
    }
}
function forCancel(btn){
    let close = btn.closest(".all")
    let toRemovePopUp = close.querySelector(".class")
    toRemovePopUp.remove()
}
function forComplete(btn){
    let complete = btn.closest(".all");
    let button = complete.querySelector(".complete");
    button.classList.add("reduceOpacity")
    let completeButton = complete.querySelector(".para");
    completeButton.classList.add("completeButton")
    let edit = complete.querySelector(".edit")

    if(!edit.classList.contains("editDisable")){
    edit.classList.add("editDisable");
    let completePage = document.querySelector(".completed");
    let completeButton = complete.querySelector(".para");
    let idnumber = complete.getAttribute("id");
    completePage.innerHTML += `<div class="completedSectionAll" id="${idnumber}"><p class="completedPara">${completeButton.textContent}</p><button class="undo" onclick="completedUndo(this)">Undo</button><button class="completedDelete" onclick="completedDelete(this)">Delete</button></div>`;
    } 
    let idNumber = complete.getAttribute("id");
    let pendingTaskRemove = document.querySelectorAll(".pendingAll");
    for (let i = 0; i < pendingTaskRemove.length; i++){
        if(idNumber === pendingTaskRemove[i].getAttribute("id")){
            pendingTaskRemove[i].remove();
            break;
        }
    }
}
let completeClick = document.querySelector(".completedTask");
completeClick.addEventListener("click",()=>{
    let all = document.querySelector(".add");
    all.classList.add("alldisappear");
    let pendingdisappear = document.querySelector(".pending");
    pendingdisappear.classList.add("pendingDisappear");
    let completePage = document.querySelector(".completed");
    completePage.classList.add("appearcompleted"); 
})
let allClick = document.querySelector(".allTask");
allClick.addEventListener("click",()=>{
    let all = document.querySelector(".add");
    all.classList.remove("alldisappear");
    let completePage = document.querySelector(".completed");
    completePage.classList.remove("appearcompleted");
    let pendingdisappear = document.querySelector(".pending");
    pendingdisappear.classList.add("pendingDisappear");
})
function completedDelete(btn){
    let completedSectionSelector = btn.closest(".completedSectionAll");
    completedSectionSelector.remove();
}
function completedUndo(btn){
    let completedId = btn.closest(".completedSectionAll");
    let idNumber = completedId.getAttribute("id");
    let create = document.querySelectorAll(".all");
    for (let i = 0; i < create.length; i++){
        if(idNumber === create[i].getAttribute("id")){
            let toChange = create[i];
            let toRemoveParaLine = toChange.querySelector(".para");
            toRemoveParaLine.classList.remove("completeButton");
            let toRemoveEditDisable = toChange.querySelector(".edit");
            toRemoveEditDisable.classList.remove("editDisable");
            let toRemoveCompleteOpacity = toChange.querySelector(".complete");
            toRemoveCompleteOpacity.classList.remove("reduceOpacity");
            completedId.remove();
            pending.innerHTML += `<div class="pendingAll" id="${idNumber}"><p class="pendingPara">${toRemoveParaLine.textContent}</p><button class='pendingComplete' onclick='pendingForComplete(this)'>Completed</button><button class="pendingEdit" onclick="pendingEditer(this);">Edit</button></div>`;
            break;
        }
        }
    }
let pendingTask = document.querySelector(".pendingTask");
pendingTask.addEventListener("click",()=>{
    let all = document.querySelector(".add");
    all.classList.add("alldisappear");
    let pendingdisappear = document.querySelector(".pending");
    pendingdisappear.classList.remove("pendingDisappear");
    let completePage = document.querySelector(".completed");
    completePage.classList.remove("appearcompleted");

})
function pendingForComplete(btn){
    let close = btn.closest(".pendingAll"); 
    let idNumber = close.getAttribute("id");
    let alls = document.querySelectorAll(".all");
    for (let i = 0; i < alls.length; i++){
        if(idNumber === alls[i].getAttribute("id")){
            let complete = alls[i];
            let button = complete.querySelector(".complete");
            button.classList.add("reduceOpacity")
            let completeButton = complete.querySelector(".para");
            completeButton.classList.add("completeButton")
            let edit = complete.querySelector(".edit")

            if(!edit.classList.contains("editDisable")){
            edit.classList.add("editDisable");
            let completePage = document.querySelector(".completed");
            let completeButton = complete.querySelector(".para");
            let idnumber = complete.getAttribute("id");
            completePage.innerHTML += `<div class="completedSectionAll" id="${idnumber}"><p class="completedPara">${completeButton.textContent}</p><button class="undo" onclick="completedUndo(this)">Undo</button><button class="completedDelete" onclick="completedDelete(this)">Delete</button></div>`;
            }
            break;
        }
    }
    close.remove();
}
function pendingEditer(btn){
    let close = btn.closest(".pendingAll");
    if (document.querySelector(".present")){
    let delPrevious = document.querySelector(".present");
    delPrevious.remove();   
    }
    close.innerHTML += `<div class='present'><input type='text' placeholder='Change your Tasks' class='inputPendingEditor'><p class="innerPendingerror"></p>
    <div class='classPendinginner'><button class='change' onclick="changePendingContent(this)">Change</button><button class='Cancel' onclick='forPendingCancel(this)'>Cancel</button></div></div>` 
    let inputValue = close.querySelector(".inputPendingEditor")
    let grapPendingPara  = close.querySelector(".PendingPara").textContent;
    inputValue.setAttribute("value",`${grapPendingPara}`)
}

function changePendingContent(btn){
    let close = btn.closest(".pendingAll")
    let changeCont = close.querySelector(".inputPendingEditor");
    if (changeCont.value !==""){
        let changepara = close.querySelector(".pendingPara");
        changepara.textContent = `${changeCont.value}`;
        let toRemovePopUp = close.querySelector(".Present");
        toRemovePopUp.remove();
    }else{
        let innererror = close.querySelector(".innerPendingerror");
        innererror.textContent = "Type Something to Modify";
    }
    let idNumber = close.getAttribute("id");
    let alls = document.querySelectorAll(".all");
    for(let i = 0; i < alls.length; i++){
        if(idNumber === alls[i].getAttribute("id")){
            let changeParaFromEdit = alls[i].querySelector(".para");
            changeParaFromEdit.textContent = `${changeCont.value}`;
            break;
        }
    }
}
function forPendingCancel(btn){
    let close = btn.closest(".pendingAll");
    let toRemovePopUp = close.querySelector(".present");
    toRemovePopUp.remove();
}