document.getElementById("Generate1").addEventListener("click", function () {
  const loadingDiv = document.getElementById("custom-loading");
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const value = input1.value.trim();

  input2.value = "";
  input2.classList.remove("show-result");

  // نمایش انیمیشن لودینگ بلافاصله
  setTimeout(() => {
    loadingDiv.style.display = "block";
  }, 1);

  // بعد از 1.26 ثانیه نمایش نتیجه
  setTimeout(() => {
    loadingDiv.style.display = "none";
    let result;

    // بررسی آیا ورودی عددی با اعشار یا منفی هست
    const isNumeric = /^-?\d+(\.\d+)?$/.test(value);

    if (isNumeric) {
      // اگه عددیه، برعکسش می‌کنیم ولی منفی و اعشار رو حفظ می‌کنیم
      const isNegative = value.startsWith("-");
      const absVal = value.replace("-", "");

      const reversed = [...absVal].reverse().join('');
      result = isNegative ? "-" + reversed : reversed;
    } else {
      // اگه متن یا حروف باشه، عادی برعکس می‌کنیم
      result = [...value].reverse().join('');
    }

    input2.value = result;
    input2.classList.add("show-result");
  }, 1260);
});

// عملکرد کپی کردن متن input2
document.getElementById("copy").addEventListener("click", function () {
  const input = document.getElementById("input2");

  input.select();
  input.setSelectionRange(0, 99999); // برای موبایل

  document.execCommand("copy");

  alert("مقدار کپی شد: " + input.value);
});
