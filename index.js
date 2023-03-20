const submit = document.getElementById('submit');
const amount = document.getElementById('amt');
const descr = document.getElementById('description');
const cat = document.getElementById('cat');
const list = document.getElementById('lists');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    create();
});

function create(obj=null){
    obj = obj === null? { 'amount': amount.value, 'description': descr.value, 'category': cat.value } : obj;
    console.log(obj)
    const li = document.createElement('li');
    li.innerText = "Rs." + obj.amount + " " + obj.description + " " + obj.category + " ";
    list.appendChild(li);
    li.setAttribute('class','list-group-item')
    const del = document.createElement('button');
    del.textContent = 'Delete Expense';
    del.setAttribute('class', 'delete btn btn-danger m-2');
    const edit = document.createElement('button');
    edit.textContent = 'Edit Expense';
    edit.setAttribute('class', 'edit btn btn-primary m-2');
    li.appendChild(edit); li.appendChild(del);
    
    localStorage.setItem(obj.description, JSON.stringify(obj));
    del.addEventListener('click', () => {
        console.log(descr.value, obj.description)
        localStorage.removeItem(obj.description);
        list.removeChild(li);
    });
    edit.addEventListener('click', () => {
        amount.value = obj.amount;
        descr.value = obj.description;
        list.value = obj.category;
        localStorage.removeItem(descr.value);
        list.removeChild(li);
    })


}


function load(){
    var arr=[];
    Object.keys(localStorage).forEach(keys=>{
        create(JSON.parse(localStorage.getItem(keys)));
    })
}