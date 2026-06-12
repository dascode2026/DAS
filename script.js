const data = {

  aba: [
    { code: "0110", desc: "جهد منخفض." },
    { code: "0111", desc: "جهد مرتفع." },
    { code: "0150", desc: "عطل داخلي." },
    { code: "0160", desc: "عطل نظام ABA." },
    { code: "0170", desc: "عطل داخلي." },
    { code: "0180", desc: "خطأ تشغيل." },
    { code: "0205", desc: "اتصال رادار." },
    { code: "0206", desc: "اتصال رادار." },
    { code: "0290", desc: "احتمال اصطدام." },
    { code: "0305", desc: "CAN خطأ." },
    { code: "0306", desc: "CAN خطأ." },
    { code: "0405", desc: "اتصال FR." },
    { code: "0406", desc: "CAN FR." },
    { code: "0505", desc: "INS خطأ." },
    { code: "0506", desc: "CAN INS." },
    { code: "0605", desc: "GM خطأ." },
    { code: "0606", desc: "CAN GM." },
    { code: "0705", desc: "MSF خطأ." },
    { code: "0706", desc: "CAN MSF." },
    { code: "0805", desc: "TCO خطأ." },
    { code: "0806", desc: "CAN TCO." },
    { code: "0905", desc: "انقطاع CAN." },
    { code: "0907", desc: "CAN خطأ." },
    { code: "1008", desc: "قطع Terminal30." },
    { code: "1108", desc: "قطع Terminal15." },
    { code: "1205", desc: "MR انقطاع." },
    { code: "1206", desc: "MR CAN خطأ." },
    { code: "1305", desc: "BTS خطأ." },
    { code: "1306", desc: "BTS CAN خطأ." }
  ],

  art: [
    { code: "0100", desc: "عطل ART." },
    { code: "0150", desc: "عطل كامل." },
    { code: "0200", desc: "حساس رادار." },
    { code: "0202", desc: "ABA ارتباط." },
    { code: "0203", desc: "حرارة." },
    { code: "0204", desc: "حرارة." },
    { code: "0210", desc: "Terminal15 منخفض." },
    { code: "0211", desc: "Terminal15 مرتفع." },
    { code: "0250", desc: "رادار." },
    { code: "0251", desc: "حساس داخلي." },
    { code: "0270", desc: "ABA خطأ." },
    { code: "0290", desc: "عدم ضبط." },
    { code: "0291", desc: "حرارة." },
    { code: "0299", desc: "تنظيف مطلوب." },
    { code: "0300", desc: "ART خطأ." },
    { code: "0350", desc: "ART خطأ." },
    { code: "0405", desc: "HM CAN." },
    { code: "0406", desc: "HM CAN." },
    { code: "0407", desc: "مستوى شاحنة." },
    { code: "0505", desc: "INS CAN." },
    { code: "0506", desc: "INS CAN." },
    { code: "0605", desc: "BS CAN." },
    { code: "0606", desc: "BS CAN." },
    { code: "0615", desc: "BS فرامل." },
    { code: "0616", desc: "BS فرامل." },
    { code: "0625", desc: "سرعة محور." },
    { code: "0800", desc: "CAN عطل." },
    { code: "0801", desc: "شاسيه CAN." },
    { code: "1105", desc: "FR CAN." },
    { code: "1106", desc: "FR CAN." },
    { code: "1107", desc: "سرعة." },
    { code: "1205", desc: "TCO CAN." },
    { code: "1206", desc: "TCO CAN." },
    { code: "1305", desc: "INS طاقة." },
    { code: "1306", desc: "INS طاقة." }
  ],

  bs: [
    { code: "0117", desc: "سرعة غير متطابقة." },
    { code: "0160", desc: "CAN Bus." },
    { code: "0162", desc: "CAN Bus." },
    { code: "0180", desc: "CAN فقد." },
    { code: "0181", desc: "CAN فقد." },
    { code: "0182", desc: "CAN فقد." },
    { code: "0183", desc: "CAN فقد." },
    { code: "0184", desc: "CAN فقد." },
    { code: "0185", desc: "CAN فقد." },
    { code: "0260", desc: "مقطورة." },
    { code: "0263", desc: "مقطورة قطع." },
    { code: "0275", desc: "CAN عالي." },
    { code: "0276", desc: "CAN منخفض." },
    { code: "0300", desc: "فرامل." },
    { code: "0360", desc: "فرامل." },
    { code: "0463", desc: "انقطاع." },
    { code: "0563", desc: "انقطاع." },
    { code: "1001", desc: "جهد عالي." },
    { code: "1002", desc: "جهد منخفض." },
    { code: "1010", desc: "BS عطل." },
    { code: "1011", desc: "EEPROM." },
    { code: "1012", desc: "بيانات." },
    { code: "1052", desc: "برمجة." },
    { code: "1094", desc: "إطارات." },
    { code: "1102", desc: "30 منخفض." },
    { code: "1103", desc: "30 قطع." },
    { code: "1202", desc: "300 منخفض." },
    { code: "1203", desc: "306 قطع." },
    { code: "1302", desc: "15 منخفض." },
    { code: "1303", desc: "15 قطع." },
    { code: "1305", desc: "ماس." },
    { code: "1404", desc: "ماس حساس." },
    { code: "1405", desc: "ماس." }
  ],

  bts: [
    { code: "0110", desc: "BTS عطل." },
    { code: "0111", desc: "BTS عطل." },
    { code: "0112", desc: "BTS عطل." },
    { code: "0201", desc: "ماس." },
    { code: "0202", desc: "ماس." },
    { code: "0203", desc: "قطع." },
    { code: "0341", desc: "جهد عالي." },
    { code: "0342", desc: "جهد منخفض." },
    { code: "0413", desc: "ريلاي." },
    { code: "0515", desc: "لا رسائل." }
  ],

  edw: [
    { code: "5001", desc: "باب سائق." },
    { code: "5002", desc: "قطع." },
    { code: "5003", desc: "إشارة." },
    { code: "5101", desc: "إنذار." },
    { code: "5201", desc: "حساس باب." },
    { code: "5301", desc: "جرس." },
    { code: "5401", desc: "LED." }
  ]
};
  

/* ===================== SEARCH ===================== */
function searchCode() {
  const value = document.getElementById("search").value.trim();

  render();

  if (value === "") return;
  if (/\D/.test(value)) return;
  if (value.length > 5) return;

  let firstMatch = null;

  for (let section in data) {
    const rows = document.querySelectorAll(`#${section} tr`);

    rows.forEach(row => {
      const codeCell = row.querySelector(".code");

      if (!codeCell) return;

      const code = codeCell.textContent;

      if (code.includes(value)) {
        row.style.background = "#1f2937";
        codeCell.innerHTML = highlight(code, value);

        if (!firstMatch) firstMatch = row;
      }
    });
  }

  if (firstMatch) {
    setTimeout(() => {
      firstMatch.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 100);
  }
}

/* ===================== HIGHLIGHT ===================== */
function highlight(text, search) {
  return text.replace(
    new RegExp(search, "g"),
    `<span class="highlight">${search}</span>`
  );
}

/* ===================== INIT ===================== */
render();