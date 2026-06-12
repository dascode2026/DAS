const data = {
ABA:[
{code:"0110",desc:"جهد منخفض"},
{code:"0111",desc:"جهد مرتفع"},
{code:"0150",desc:"عطل داخلي"}
],

ART:[
{code:"0100",desc:"عطل داخلي"},
{code:"0200",desc:"حساس رادار"}
],

BS:[
{code:"0117",desc:"خطأ سرعة"},
{code:"0160",desc:"CAN Bus عطل"}
],

BTS:[
{code:"0110",desc:"عطل داخلي BTS"}
],

EDW:[
{code:"F052",desc:"باب السائق"}
]
};

const content = document.getElementById("content");
const stats = document.getElementById("stats");

function render(){
content.innerHTML = "";

for(let module in data){

let html = `
<div class="section" id="${module}">
<h2>${module}</h2>
<table>
<tr><th>الكود</th><th>الوصف</th></tr>
`;

data[module].forEach(item=>{
html += `
<tr class="row"
data-module="${module}"
data-code="${item.code}"
data-desc="${item.desc}">
<td>${item.code}</td>
<td>${item.desc}</td>
</tr>
`;
});

html += "</table></div>";

content.innerHTML += html;
}

}

render();

document.getElementById("search").addEventListener("input", function(){

let q = this.value.trim().toLowerCase();

let rows = document.querySelectorAll(".row");

rows.forEach(r=>r.classList.remove("highlight"));

if(!q){
stats.innerHTML = "";
return;
}

let matches = [];

rows.forEach(row=>{

let code = row.dataset.code.toLowerCase();
let desc = row.dataset.desc.toLowerCase();
let module = row.dataset.module.toLowerCase();

if(
code === q ||          // دقة 100%
code.includes(q) ||    // بحث جزئي
desc.includes(q) ||
module.includes(q)
){
matches.push(row);
}
});

stats.innerHTML = `عدد النتائج: ${matches.length}`;

matches.forEach((row,index)=>{

row.classList.add("highlight");

if(index === 0){
row.scrollIntoView({
behavior:"smooth",
block:"center"
});
}

});

});