// =========================
// ระบบช่วยลดความเครียด
// =========================

const messages = [
    "🔍 กำลังวิเคราะห์ระดับความเครียด...",
    "📊 ตรวจสอบอารมณ์...",
    "🧠 กำลังค้นหาวิธีทำให้ยิ้ม...",
    "☕ กาแฟ...ไม่พอ",
    "🛌 นอน...ก็คงยังไม่หาย",
    "🍽️ กำลังค้นหาร้านที่เหมาะสม...",
    "🥩 กำลังประมวลผล...",
    "██████████ 100%",
    "",
    "🎉 พบวิธีลดความเครียดที่ดีที่สุด!",
    "",
    "💖 คำแนะนำจากระบบ 💖",
    "",
    "ไปกินหมูกระทะกับเรามั้ย 😊",
    "",
    "ไม่ต้องคิดมาก",
    "แค่ไปกิน อิ่มแล้วค่อยกลับมาสู้ต่อ ❤️"
];

let index = 0;
let timer = null;

function start() {

    const text = document.getElementById("text");
    const btn = document.getElementById("startBtn");

    text.innerHTML = "";
    btn.disabled = true;
    btn.innerText = "กำลังวิเคราะห์...";

    index = 0;

    timer = setInterval(() => {

        if (index < messages.length) {

            text.innerHTML += messages[index] + "<br>";

            text.scrollTop = text.scrollHeight;

            index++;

        } else {

            clearInterval(timer);

            btn.disabled = false;
            btn.innerText = "เริ่มใหม่";

        }

    }, 900);

}
