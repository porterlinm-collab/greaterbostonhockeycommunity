// Shared header + footer, injected into every page so layout stays consistent.
// To add/rename a nav page, edit the `pages` array below — it updates everywhere.

const pages = [
  { href: "index.html", label: "Home" },
  { href: "programs.html", label: "Programs & Calendar" },
  { href: "skating.html", label: "Skate Sharpening / Public Skates" },
  { href: "gear.html", label: "Hockey Gear" },
  { href: "community.html", label: "Our Community" },
  { href: "faqs.html", label: "FAQs" },
];

function currentPage() {
  let path = window.location.pathname.split("/").pop();
  if (path === "" || path === "/") path = "index.html";
  return path;
}

function renderHeader() {
  const current = currentPage();
  const navItems = pages
    .map(
      (p) =>
        `<li><a href="${p.href}" class="${p.href === current ? "active" : ""}">${p.label}</a></li>`
    )
    .join("");

  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="header-inner">
      <a href="index.html" class="site-title">Greater Boston <span>Hockey</span> Community</a>
      <button class="nav-toggle" aria-label="Toggle navigation">&#9776;</button>
      <nav class="main-nav">
        <ul>${navItems}</ul>
      </nav>
    </div>
  `;
  document.body.prepend(header);

  const toggle = header.querySelector(".nav-toggle");
  const nav = header.querySelector(".main-nav");
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
}

function renderFooter() {
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <p>&copy; ${new Date().getFullYear()} Greater Boston Hockey Community. Built for women's hockey players of all levels.</p>
    <p><a href="community.html">Get in touch with our community</a></p>
  `;
  document.body.appendChild(footer);
}

renderHeader();
renderFooter();
