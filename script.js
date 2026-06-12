const data = {
  ABA: [
    { code: "0110", desc: "جهد منخفض" },
    { code: "F015", desc: "عطل داخلي" },
    { code: "0205", desc: "مشكلة رادار" }
  ],
  ART: [
    { code: "0200", desc: "عطل حساس رادار" },
    { code: "F120", desc: "خطأ نظام" }
  ],
  BS: [
    { code: "0160", desc: "CAN Bus Error" }
  ],
  BTS: [
    { code: "0110", desc: "Internal Fault" }
  ],
  EDW: [
    { code: "F050", desc: "Alarm System Fault" }
  ]
};

let allResults = [];

/* ================= INIT ================= */
function init(){
  allResults = [];

  for(let section in data){
    data[section].forEach(item=>{
      allResults.push({
        section,
        code: item.code,
        desc: item.desc
      });
    });
  }

  renderList(allResults);
}

init();

/* ================= RENDER LIST ================= */
function renderList(list){

  const box = document.getElementById("list");
  box.innerHTML = "";

  list.forEach(item=>{

    box.innerHTML += `
      <div onclick="showDetails('${item.section}','${item.code}','${item.desc}')">
        <b>${item.code}</b> - ${item.desc}
        <small style="display:block;color:#888">${item.section}</small>
      </div>
    `;

  });

  document.getElementById("resultCount")
  .innerText = `Results: ${list.length}`;
}

/* ================= SEARCH ================= */
function searchCode(){

  const value =
  document.getElementById("search")
  .value
  .trim()
  .toUpperCase();

  if(value === ""){
    renderList(allResults);
    return;
  }

  const filtered =
  allResults.filter(item =>
    item.code.includes(value) ||
    item.desc.toUpperCase().includes(value)
  );

  renderList(filtered);
}

/* ================= DETAILS ================= */
function showDetails(section, code, desc){

  document.getElementById("details").innerHTML = `
    <div class="card">

      <div class="code">${code}</div>

      <div class="desc">${desc}</div>

      <hr style="margin:15px 0">

      <div>System: ${section}</div>

      <div style="margin-top:10px;color:#888">
        Diagnostic Information Loaded
      </div>

    </div>
  `;

}