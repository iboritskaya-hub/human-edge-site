// Payment links for the ticket buttons.
// Paste each checkout URL (Luma, Stripe Payment Link, etc.) between the quotes.
// Empty = the button keeps scrolling to the tickets section.
const PAYMENT_LINKS = {
  LIBRARY_PASS_URL: "",
  ONLINE_PASS_URL: "",
  SALON_PASS_URL: "",
  VIP_PASS_URL: "",
};

document.querySelectorAll("[data-pay]").forEach((link) => {
  const url = PAYMENT_LINKS[link.dataset.pay];
  if (url) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener";
  }
});
