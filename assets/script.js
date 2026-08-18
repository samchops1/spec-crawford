(function () {
  var btn = document.querySelector(".nav-toggle");
  var nav = document.querySelector("nav");
  if (!btn || !nav) return;
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();

function sendInquiry(e) {
  e.preventDefault();
  var f = e.target;
  var name = (f.name.value || "").trim();
  var phone = (f.phone.value || "").trim();
  var note = (f.note.value || "").trim();
  var body = [
    "Name: " + name,
    "Phone: " + phone,
    "",
    note
  ].join("\n");
  var url =
    "mailto:crawfordtreecare@gmail.com" +
    "?subject=" + encodeURIComponent("Treecare inquiry from " + (name || "website")) +
    "&body=" + encodeURIComponent(body);
  window.location.href = url;
}
