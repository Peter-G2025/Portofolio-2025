// ===============================
// 📱 Mobile Menu Toggle
// ===============================
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', () => {
  // Εναλλαγή της κατάστασης για εμφάνιση/απόκρυψη του μενού
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// ===============================
// 🔗 Κλείσιμο μενού όταν επιλέγεται link
// ===============================
document.querySelectorAll('.navbar__links').forEach(link => {
  link.addEventListener('click', () => {
    if (menu.classList.contains('is-active')) {
      menu.classList.remove('is-active');
      menuLinks.classList.remove('active');
    }
  });
});

// ===============================
// 🧹 Εξασφάλιση σταθερότητας viewport
// (Αποτρέπει μετακίνηση δεξιά/αριστερά όταν ανοίγει το μενού)
// ===============================
window.addEventListener('resize', () => {
  if (window.innerWidth > 968) {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
    document.body.style.overflowX = 'hidden';
  }
});

// ===============================
// 🚫 Αφαίρεση περιττού lightbox κώδικα
// (δεν χρειάζεται στη σελίδα Contact)
// ===============================
