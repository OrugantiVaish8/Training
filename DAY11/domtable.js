let table = document.createElement("table");
console.log(table);
document.body.appendChild(table);
table.setAttribute("border","2px solid");




//createing tr tags
let tr1 = document.createElement("tr");
console.log(tr1);
table.appendChild(tr1);
tr1.textContent="row1"
// tr1.style.border="2px solid";

let tr2 = document.createElement("tr");
console.log(tr2);
table.appendChild(tr2);
tr2.textContent="row2"
// tr2.style.border="2px solid";
let tr3 = document.createElement("tr");
console.log(tr3);
table.appendChild(tr3);
tr3.textContent="row3"
// tr3.style.border="2px solid";
let tr4 = document.createElement("tr");
console.log(tr4);
table.appendChild(tr4);
tr4.textContent="row4"
// tr4.style.border="2px solid";


//tds for 1st tr
let td1_1 = document.createElement("td");
td1_1.textContent="Hello"
tr1.appendChild(td1_1);
let td1_2 = document.createElement("td");
td1_2.textContent="Hello"
tr1.appendChild(td1_2);
let td1_3 = document.createElement("td");
td1_3.textContent="Hello"
tr1.appendChild(td1_3);
let td1_4 = document.createElement("td");
td1_4.textContent="Hello"
tr1.appendChild(td1_4);

//tds for 2nd tr
let td2_1 = document.createElement("td");
td2_1.textContent="hello2"
tr2.appendChild(td2_1);
let td2_2 = document.createElement("td");
td2_2.textContent="hello2"
tr2.appendChild(td2_2);
let td2_3 = document.createElement("td");
td2_3.textContent="hello2"
tr2.appendChild(td2_3);
let td2_4 = document.createElement("td");
td2_4.textContent="hello2"
tr2.appendChild(td2_4);

//tds for 1st tr
let td3_1 = document.createElement("td");
td3_1.textContent="hello3"
tr3.appendChild(td3_1);
let td3_2 = document.createElement("td");
td3_2.textContent="hello3"
tr3.appendChild(td3_2);
let td3_3 = document.createElement("td");
td3_3.textContent="hello3"
tr3.appendChild(td3_3);
let td3_4 = document.createElement("td");
td3_4.textContent="hello3"
tr3.appendChild(td3_4);

//tds for 1st tr
let td4_1 = document.createElement("td");
td4_1.textContent="hello4"
tr4.appendChild(td4_1);
let td4_2 = document.createElement("td");
td4_2.textContent="hello4"
tr4.appendChild(td4_2);
let td4_3 = document.createElement("td");
td4_3.textContent="hello4"
tr4.appendChild(td4_3);
let td4_4 = document.createElement("td");
td4_4.textContent="hello4"
tr4.appendChild(td4_4);