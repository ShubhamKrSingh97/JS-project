const submit = document.getElementById('submit');
const amount = document.getElementById('amt');
const descr = document.getElementById('description');
const cat = document.getElementById('cat');
const list = document.getElementById('lists');

submit.addEventListener('click', async (e) => {
    e.preventDefault();
    const obj = {
        amount: amount.value,
        description: descr.value,
        category: cat.value
    }
    const res = await axios.post("http://localhost:5000/add-expense", obj);
    display(res.data);
});

document.addEventListener('DOMContentLoaded', async () => {
    const res = await axios.get("http://localhost:5000/get-all-expenses");
    for (let i = 0; i < res.data.length; i++) {
        display(res.data[i]);
    }
});

function display(res) {
    const li = document.createElement('li');
    li.innerText = "Rs." + res.amount + " " + res.description + " " + res.category + " ";
    list.appendChild(li);
    li.setAttribute('class', 'list-group-item')
    const del = document.createElement('button');
    del.textContent = 'Delete Expense';
    del.setAttribute('class', 'delete btn btn-danger m-2 float-right');
    const edit = document.createElement('button');
    edit.textContent = 'Edit Expense';
    edit.setAttribute('class', 'edit btn btn-primary m-2 float-right');
    li.appendChild(edit);
    li.appendChild(del);

    del.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:5000/delete-expense/${res.id}`);
            list.removeChild(li);
        }
        catch (err) {
            alert("No such records found");
        }

    });
    edit.addEventListener('click', async (e) => {
        e.preventDefault();
        amount.value = res.amount;
        descr.value = res.description;
        list.value = res.category;
        try {
            await axios.delete(`http://localhost:5000/delete-expense/${res.id}`);
            list.removeChild(li);
        }
        catch (err) {
            alert("No such records found");
        }
    })


}
