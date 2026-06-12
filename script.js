const data = {
  aba: [
    { code: "0110", desc: "جهد منخفض" },
    { code: "0111", desc: "جهد مرتفع" },
    { code: "0160", desc: "عطل نظام ABA" }
  ],
  art: [
    { code: "0100", desc: "عطل ART" },
    { code: "0200", desc: "عطل رادار" }
  ],
  bs: [
    { code: "0117", desc: "اختلاف سرعة" },
    { code: "0160", desc: "CAN Bus" }
  ],
  bts: [
    { code: "0110", desc: "عطل BTS" }
  ],
  edw: [
    { code: "5001", desc: "إنذار باب" }
  ]
};

/* ================= render ================= */
function render() {
  for (let section in data) {
    const table = document.getElementById(section);
    if (!table) continue;

    table.innerHTML = "";

    data[section].forEach((item, i) => {
      table.innerHTML += `
        <tr id="${section}-${i}">
          <td class="code">${item.code}</td>
          <td>${item.desc}</td>
        </tr>
      `;
    });
  }
}

/* ================= search ================= */
function searchCode() {
  const value = document.getElementById("search").value.trim();

  render();

  if (value === "") return;
  if (/\D/.test(value)) return;
  if (value.length > 5) return;

  let first = null;

  for (let section in data) {
    const rows = document.querySelectorAll(`#${section} tr`);

    rows.forEach(row => {
      const codeCell = row.querySelector(".code");
      if (!codeCell) return;

      const code = codeCell.textContent;

      if (code.includes(value)) {
        row.style.background = "#1f2937";
        codeCell.innerHTML = code.replace(
          value,
          `<span class="highlight">${value}</span>`
        );

        if (!first) first = row;
      }
    });
  }

  if (first) {
    setTimeout(() => {
      first.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  }
}

/* init */
render();