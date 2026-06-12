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
    { code: "F052", desc: "لا توجد تغذية" }
  ]
};

/* عرض البيانات */
function render() {
  for (let section in data) {
    let container = document.getElementById(section);
    container.innerHTML = "";

    data[section].forEach(item => {
      container.innerHTML += `
        <div class="code-box">
          <div class="code">${item.code}</div>
          <div class="desc">${item.desc}</div>
        </div>
      `;
    });
  }
}

/* البحث */
function searchCode() {
  let value = document.getElementById("search").value.toLowerCase();

  for (let section in data) {
    let container = document.getElementById(section);
    container.innerHTML = "";

    data[section].forEach(item => {
      if (
        item.code.includes(value) ||
        item.desc.includes(value)
      ) {
        container.innerHTML += `
          <div class="code-box">
            <div class="code highlight">${item.code}</div>
            <div class="desc">${item.desc}</div>
          </div>
        `;
      }
    });
  }
}

render();