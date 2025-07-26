let list = []
function displayList(){
    let itemList = "List:\n"
    for(let i = 0; i <list.length; i++){
        itemList += "- " + list[i] + "\n"
    }
    alert(itemList)
}
function add(){
    let newitem = prompt("Any new item?");
    if (newitem){
        list.push(newitem)
    }else {
        alert("404 Erorr")
    }
}
function del(){
	let victomIdx = Number(prompt("What item to delete?(1, 2, 3, 4, ...)")) - 1
	list.splice(victomIdx, 1)
}