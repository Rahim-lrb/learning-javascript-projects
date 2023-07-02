/*
get total 
create product 
save in local storage
clear inputs
read
count
delete 
update
search
clean data
*/ 
const title = document.getElementById("title"),
price = document.getElementById("price"),
taxes = document.getElementById("taxes"),
ads = document.getElementById("ads"),
discount = document.getElementById("discount"),
total = document.getElementById("total"),
count = document.getElementById("count"),
category = document.getElementById("category"),
submit = document.getElementById("submit"),
mood = "create";
let tmp;

// ! get total
function getTotal() {
    if (price.value != "") {
        console.log(price.value)
        console.log(+price.value)
        let result = +price.value + +taxes.value + +ads.value - +discount.value;
        total.innerHTML = result;
        total.style.backgroundColor = "#040";
    } else {
        total.innerHTML = "";
        total.style.backgroundColor = "#e32727";
    }
}


// ! create 
let dataPro = [];
submit.addEventListener("click", function() {
    let newPro = {
        title: title.value.toLowerCase(),
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value.toLowerCase(),
    }

    if (mood === "create") {
        
            if (newPro.count > 1) {
                for (let i = 0; i < newPro.count; i++) {
                    dataPro.push(newPro);
                }
            } else {
                dataPro.push(newPro);
            }
    } else {
        dataPro[tm] = newPro;
        mood = "create";
        submit.innerHTML = "create";
        count.style.display = "block";
    }

    localStorage.setItem("product",JSON.stringify(dataPro));
    clearData();
    showData();
})

// ! clear data
function clearData() {
    title.value = "";
    price.value = "";
    taxes.value = "";
    ads.value = "";
    discount.value = "";
    total.innerHTML = "";
    count.value = "";
    category.value = "";
}


// ! read
function showData() {
    getTotal();
    let table = "";
    for (let i = 0; i < dataPro.length; i++) {
        table += `
        <tr>
            <td>${i}</td>
            <td>${dataPro[i].title}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].taxes}</td>
            <td>${dataPro[i].ads}</td>
            <td>${dataPro[i].discount}</td>
            <td>${dataPro[i].total}</td>
            <td>${dataPro[i].category}</td>
            <td><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
        </tr>
        `;
    }
    document.getElementById("tbody").innerHTML = table;
    let btnDelete = document.getElementById("deleteAll");
    if (dataPro.length > 0) {
        btnDelete.innerHTML = `
            <button onclick="deleteAll()">delete All (${newPro.length})</button>
        `
    } else {
        btnDelete.innerHTML = "";
    }
}
showData();


// ! delete
function deleteData(i) {
    dataPro.splice(i, 1);
    localStorage.product = JSON.stringify(dataPro);
    showData()
}

// ! delete all
function deleteAll() {
    localStorage.removeItem("product");
    dataPro.splice(0);
    showData();
}


// ! update
function updateData(i) {
    title.value = dataPro[i].title;
    price.value = dataPro[i].price;
    taxes.value = dataPro[i].taxes;
    ads.value = dataPro[i].ads;
    discount.value = dataPro[i].discount;
    category.value = dataPro[i].category;
    getTotal();
    count.style.display = "none";
    category.value = dataPro[i].category;
    submit.innerHTML = "update";
    mood = "update";
    tm = i;
    scroll({
        top:0,
        behavior: smooth,
    })
}


// ! search
let searchMode = "title";
function getSearchMode(id) {
    let search = document.getElementById("search");
    search.focus();
    if (id == "searchByTitle") {
        searchMode = "title";
        console.log("title")
        search.placeholder = "search by title";
    } else if (id == "searchByCategory") {
        console.log("category")
        search.placeholder = "search by category";
        searchMode = "category";
    }
    search.value = "";
    showData();
}


function searchData(value) {
    let table = ""; 
    if (searchMode == "title") {
        for (let i = 0; i < dataPro.length; i++) {
            if (dataPro[i].title.includes(value.toLowerCase())) {
                table += `
                <tr>
                    <td>${i}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].category}</td>
                    <td><button onclick="updateData(${i})" id="update">update</button></td>
                    <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                </tr>
                `;
            }
        }
    } else if (searchMode == "category") {
        for (let i = 0; i < dataPro.length; i++) {
            if (dataPro[i].category.includes(value.toLowerCase())) {
                table += `
                <tr>
                    <td>${i}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].category}</td>
                    <td><button onclick="updateData(${i})" id="update">update</button></td>
                    <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                </tr>
                `;
            }
        }
    }
    document.getElementById("tbody").innerHTML = table;
}
