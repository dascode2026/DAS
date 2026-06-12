const data = {
  aba: [
    { code: "0110", desc: "جهد منخفض" },
    { code: "0111", desc: "جهد مرتفع" }
  ],
  art: [
    { code: "0200", desc: "عطل حساس الرادار" }
  ],
  bs: [
    { code: "0160", desc: "عطل CAN Bus" }
  ],
  bts: [
    { code: "0110", desc: "عطل داخلي" }
  ],
  edw: [
    { code: "0050", desc: "لا توجد تغذية" }
  ]
};

/* عرض الجداول */
function render(){
  for(let section in data){
    let table = document.getElementById(section);
    table.innerHTML = "";

    data[section].forEach((item,i)=>{
      table.innerHTML += `
        <tr id="${section}-${i}">
          <td class="code">${item.code}</td>
          <td class="desc">${item.desc}</td>
        </tr>
      `;
    });
  }
}

/* 🔍 بحث دقيق (5 أرقام فقط) */
function searchCode(){
  let value = document.getElementById("search").value.trim();

  /* منع غير الأرقام */
  if(/\D/.test(value)){
    return;
  }

  /* إذا أكثر من 5 أرقام نوقف */
  if(value.length > 5){
    return;
  }

  for(let section in data){
    let table = document.getElementById(section);
    table.innerHTML = "";

    data[section].forEach((item,i)=>{

      if(item.code.includes(value) && value !== ""){

        table.innerHTML += `
          <tr id="${section}-${i}" style="background:#1f2937">
            <td class="code highlight">${item.code}</td>
            <td class="desc">${item.desc}</td>
          </tr>
        `;

        /* 📍 ينزل مباشرة للكود */
        setTimeout(()=>{
          document.getElementById(`${section}-${i}`)
          .scrollIntoView({behavior:"smooth", block:"center"});
        },50);
      }
    });
  }

  /* لو البحث فاضي نعرض الكل */
  if(value === ""){
    render();
  }
}

render();