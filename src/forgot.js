const otpField = document.getElementById("otp-field");
const submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", () => {
    console.log("hi");
    if (otpField.classList.contains("hidden")) {
        otpField.classList.remove("hidden");
        submitBtn.textContent = "Verify";
        submitBtn.type = "submit";
    }
});
