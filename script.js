// Mengambil semua elemen header accordion
const accordions = document.querySelectorAll(".accordion-header");

// Menambahkan event listener untuk setiap header
accordions.forEach((acc) => {
  acc.addEventListener("click", function () {
    // Toggle class 'active' untuk styling tombol
    this.classList.toggle("active");

    // Mengambil panel konten setelah header
    const panel = this.nextElementSibling;

    // Logika untuk membuka/tutup panel dengan animasi max-height
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.classList.remove("show");
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.classList.add("show");
    }
  });
});

// Fungsi Buka Semua Panel
function expandAll() {
  accordions.forEach((acc) => {
    acc.classList.add("active");
    const panel = acc.nextElementSibling;
    panel.style.maxHeight = panel.scrollHeight + "px";
    panel.classList.add("show");
  });
}

// Fungsi Tutup Semua Panel
function collapseAll() {
  accordions.forEach((acc) => {
    acc.classList.remove("active");
    const panel = acc.nextElementSibling;
    panel.style.maxHeight = null;
    panel.classList.remove("show");
  });
}
