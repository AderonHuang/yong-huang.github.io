// ============================================
// Navbar brand (Yong Huang) — change link target
// ============================================
// The al-folio theme renders the site title as a link to "/" (the CV
// page). We want it to go to "/blog/" instead. This small script runs
// on every page and rewrites the href so the visual style is unchanged
// but the destination is different.
(function () {
  var brand = document.querySelector("a.navbar-brand");
  if (brand) {
    var base = brand.getAttribute("href") || "";
    // If the brand is pointing at root or at the CV page, send to blog instead.
    if (base === "/" || base.endsWith("/") || base === "") {
      brand.setAttribute("href", "/yong-huang.github.io/blog/");
    }
  }
})();
