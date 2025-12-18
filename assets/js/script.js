(function () {
  emailjs.init("ZUx7D_RSoEpUWNv0e");
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const status = document.getElementById("form-status");
  status.innerText = "Sending...";
  status.className = "text-center mt-3 text-info";

  // 1️⃣ Send message to YOU
  emailjs.sendForm(
    "service_qcaovsh",
    "template_v9vl8od",
    this
  ).then(() => {

    // 2️⃣ Send auto-reply to USER
    emailjs.sendForm(
      "service_qcaovsh",
      "template_dchc0i1", // 🔴 replace this
      this
    );

    status.innerText = "Message sent successfully ✅";
    status.className = "text-center mt-3 text-success";
    this.reset();

  }).catch((error) => {
    status.innerText = "Failed to send message ❌";
    status.className = "text-center mt-3 text-danger";
    console.error("EmailJS Error:", error);
  });
});
