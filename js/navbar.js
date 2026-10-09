/* ============================================================
   Definición de los enlaces del navbar
   ------------------------------------------------------------
   - `label`  → lo que se ve
   - `href`   → a dónde va (relativo al HTML que lo usa)
   - `pages/` porque el index está en la raíz y las páginas en /pages
   ============================================================ */
const links = [
  { label: 'Inicio',     href: 'index.html' },
  { label: 'Categoría 1', href: 'pages/cat1.html' },
  { label: 'Categoría 2', href: 'pages/cat2.html' },
  { label: 'Categoría 3', href: 'pages/cat3.html' },
  { label: 'Categoría 4', href: 'pages/cat4.html' },
  { label: 'Categoría 5', href: 'pages/cat5.html' }
];

/* ============================================================
   Genera el HTML del navbar y lo inyecta en <nav id="navbar">
   ------------------------------------------------------------
   - Detecta si estamos en la raíz o en /pages para ajustar
     las rutas automáticamente.
   ============================================================ */
function renderNavbar() {
  const contenedor = document.getElementById('navbar');
  if (!contenedor) return;

  /* ¿Estamos dentro de /pages? */
  const enPages = location.pathname.includes('/pages/');

  /* Prefijo para los href: '' si estamos en la raíz, '../' si estamos en /pages */
  const prefijo = enPages ? '../' : '';//operador ternario: si enPages es true, prefijo = '../', sino prefijo = ''

  const linksHTML = links.map(link => {
    /* Normalizamos: sacamos el "pages/" si estamos ya en /pages */
    const hrefFinal = prefijo + link.href.replace(/^pages\//, enPages ? '' : 'pages/');
    return `<li class="nav-item">
              <a class="nav-link" href="${hrefFinal}">${link.label}</a>
            </li>`;
  }).join('');

  contenedor.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="${prefijo}index.html">Mi Sitio</a>
        <button class="navbar-toggler" type="button"
                data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navMenu">
          <ul class="navbar-nav ms-auto">
            ${linksHTML}
          </ul>
        </div>
      </div>
    </nav>`;
}

document.addEventListener('DOMContentLoaded', renderNavbar);