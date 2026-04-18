const categories = [
  {
    title: 'Pesca de alto nivel',
    description: 'Selección técnica para jornadas largas con desempeño superior en agua dulce y salada.',
    eyebrow: 'Categoría',
    cta: 'Explorar selección'
  },
  {
    title: 'Conquista cualquier altura',
    description: 'Equipo confiable para ascenso, protección térmica y movilidad en terreno exigente.',
    eyebrow: 'Categoría',
    cta: 'Ver equipamiento'
  },
  {
    title: 'Domina el entorno',
    description: 'Capas, herramientas y accesorios para controlar clima, ritmo y resistencia al aire libre.',
    eyebrow: 'Categoría',
    cta: 'Abrir colección'
  },
  {
    title: 'Precisión y estrategia',
    description: 'Instrumentos y accesorios tácticos con enfoque en control, enfoque y desempeño.',
    eyebrow: 'Categoría',
    cta: 'Conocer línea'
  },
  {
    title: 'Adrenalina controlada',
    description: 'Productos robustos para experiencias intensas con equilibrio entre seguridad y potencia.',
    eyebrow: 'Categoría',
    cta: 'Ver propuesta'
  }
];

const blogItems = [
  {
    title: '¿Qué funda escoger según tu uso?',
    description: 'Comparativa rápida por tipo de terreno, frecuencia y clima para tomar una decisión efectiva.',
    eyebrow: 'Blog',
    cta: 'Leer más'
  },
  {
    title: 'Airsoft de Resorte vs. Airsoft de Viento',
    description: 'Diferencias clave en mantenimiento, precisión y experiencia de uso para cada perfil.',
    eyebrow: 'Blog',
    cta: 'Leer más'
  },
  {
    title: 'Elige tu Primer Equipo de Camping',
    description: 'Checklist minimalista para construir un kit funcional y durable sin gastar de más.',
    eyebrow: 'Blog',
    cta: 'Leer más'
  },
  {
    title: 'Guía de Mantenimiento Básico',
    description: 'Rutina esencial para conservar equipos outdoor en rendimiento y apariencia premium.',
    eyebrow: 'Blog',
    cta: 'Leer más'
  }
];

const educationItems = [
  {
    title: 'Uso seguro en campo abierto',
    description: 'Principios esenciales de manipulación responsable y preparación previa.',
    eyebrow: 'Formación',
    cta: 'Ver recurso'
  },
  {
    title: 'Mantenimiento preventivo del equipo',
    description: 'Rutina semanal para prolongar la vida útil de tus herramientas y accesorios.',
    eyebrow: 'Formación',
    cta: 'Ver recurso'
  },
  {
    title: 'Protocolos de seguridad táctica',
    description: 'Buenas prácticas para operar en grupo con control y criterio técnico.',
    eyebrow: 'Formación',
    cta: 'Ver recurso'
  }
];

const locations = [
  {
    title: 'Avenida Hincapié',
    description: 'Sucursal principal · Atención integral',
    eyebrow: 'Ubicación',
    cta: 'Ver sede'
  },
  {
    title: 'Tikal Futura Local 145',
    description: 'Centro comercial · Nivel premium',
    eyebrow: 'Ubicación',
    cta: 'Ver sede'
  },
  {
    title: 'Los Próceres Local 402-8B',
    description: 'Zona estratégica · Acceso rápido',
    eyebrow: 'Ubicación',
    cta: 'Ver sede'
  },
  {
    title: 'Eskala Roosevelt Local L229A',
    description: 'Formato boutique · Curaduría técnica',
    eyebrow: 'Ubicación',
    cta: 'Ver sede'
  },
  {
    title: 'Pradera Concepción',
    description: 'Atención especializada · Outdoor',
    eyebrow: 'Ubicación',
    cta: 'Ver sede'
  }
];

const app = document.querySelector('#app');
const drawer = document.querySelector('#drawer');
const overlay = document.querySelector('#overlay');
const closeDrawer = document.querySelector('#closeDrawer');

const drawerEyebrow = document.querySelector('#drawerEyebrow');
const drawerTitle = document.querySelector('#drawerTitle');
const drawerDescription = document.querySelector('#drawerDescription');
const drawerCta = document.querySelector('#drawerCta');
const drawerMedia = document.querySelector('#drawerMedia');

const sectionHeader = (title, subtitle = '') => `
  <header class="section__header">
    <h2>${title}</h2>
    ${subtitle ? `<p>${subtitle}</p>` : ''}
  </header>
`;

const card = (item, className = '') => `
  <button class="card ${className}" data-title="${item.title}" data-description="${item.description}" data-eyebrow="${item.eyebrow}" data-cta="${item.cta}">
    <div class="card__image"></div>
    <p class="eyebrow">${item.eyebrow}</p>
    <h3>${item.title}</h3>
    <span class="card__link">${item.cta}</span>
  </button>
`;

app.innerHTML = `
  <section class="section section--categories fade-in">
    ${sectionHeader('TACTICAL SHOP', 'MVP visual mobile-first · editorial/outdoor premium')}
    <div class="categories-row">
      ${categories.map((item) => card(item, 'card--category')).join('')}
    </div>
  </section>

  <section class="section section--hero fade-in">
    <div class="hero-panel" data-title="SELLO DE CALIDAD GLOBAL" data-description="Operamos bajo estándares internacionales en selección, rendimiento y durabilidad." data-eyebrow="Institucional" data-cta="Conocer estándares">
      <p class="eyebrow">Institucional</p>
      <h1>SELLO DE CALIDAD GLOBAL</h1>
      <p>Operamos bajo estándares internacionales en selección, rendimiento y durabilidad.</p>
      <button class="hero-panel__cta">Conocer más</button>
    </div>
  </section>

  <section class="section fade-in">
    ${sectionHeader('QUIÉNES SOMOS')}
    <article class="about-panel" data-title="QUIÉNES SOMOS" data-description="Tactical Shop no es una tienda. Es un ecosistema para personas aventureras y profesionales del outdoor. Seleccionamos equipamiento de pesca, montañismo, camping y airsoft bajo un criterio técnico riguroso." data-eyebrow="Marca" data-cta="Ver manifiesto">
      <div class="about-panel__media"></div>
      <div>
        <p>Tactical Shop no es una tienda.<br>Es un ecosistema para personas aventureras y profesionales del outdoor.</p>
        <p>Seleccionamos equipamiento de pesca, montañismo, camping y airsoft bajo un criterio técnico riguroso.</p>
      </div>
    </article>
  </section>

  <section class="section fade-in">
    ${sectionHeader('Nuestro Blog')}
    <div class="stack-grid">
      ${blogItems.map((item) => card(item)).join('')}
    </div>
  </section>

  <section class="section fade-in">
    ${sectionHeader('FORMACIÓN Y RESPONSABILIDAD', 'Contenido educativo sobre uso, mantenimiento y seguridad')}
    <div class="stack-grid">
      ${educationItems.map((item) => card(item, 'card--video')).join('')}
    </div>
  </section>

  <section class="section fade-in">
    ${sectionHeader('Ubicaciones')}
    <div class="locations-row">
      ${locations.map((item) => card(item, 'card--location')).join('')}
    </div>
  </section>
`;

const openDrawer = (data) => {
  drawerEyebrow.textContent = data.eyebrow;
  drawerTitle.textContent = data.title;
  drawerDescription.textContent = data.description;
  drawerCta.textContent = data.cta;
  drawerMedia.innerHTML = '<div class="drawer__placeholder"></div>';

  drawer.classList.add('is-open');
  overlay.classList.add('is-open');
  drawer.setAttribute('aria-hidden', 'false');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
};

const closePanel = () => {
  drawer.classList.remove('is-open');
  overlay.classList.remove('is-open');
  drawer.setAttribute('aria-hidden', 'true');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
};

document.addEventListener('click', (event) => {
  const clickable = event.target.closest('[data-title]');

  if (clickable) {
    openDrawer({
      title: clickable.dataset.title,
      description: clickable.dataset.description,
      eyebrow: clickable.dataset.eyebrow,
      cta: clickable.dataset.cta
    });
  }
});

closeDrawer.addEventListener('click', closePanel);
overlay.addEventListener('click', closePanel);
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closePanel();
});
