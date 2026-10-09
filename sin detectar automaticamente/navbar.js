const links = [
  { label: 'Inicio',      href: '/index.html' },
  { label: 'Categoría 1', href: '/pages/cat1.html' },
  { label: 'Categoría 2', href: '/pages/cat2.html' },
  { label: 'Categoría 3', href: '/pages/cat3.html' },
  { label: 'Categoría 4', href: '/pages/cat4.html' },
  { label: 'Categoría 5', href: '/pages/cat5.html' }
];

function renderNavbar() {
  const contenedor = document.getElementById('navbar');
  if (!contenedor) return;

  const linksHTML = links.map(link => `
    <li class="nav-item">
      <a class="nav-link" href="${link.href}">${link.label}</a>
    </li>`).join('');

  contenedor.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/index.html">Mi Sitio</a>
        <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navMenu">
          <ul class="navbar-nav ms-auto">${linksHTML}</ul>
        </div>
      </div>
    </nav>`;
}

document.addEventListener('DOMContentLoaded', renderNavbar);