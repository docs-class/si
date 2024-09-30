// Detectar el idioma preferido del navegador
const userLang = navigator.language || navigator.userLanguage;

// Redirigir según el idioma
if (userLang.startsWith('es')) {
  window.location.href = '/es/';
} else if (userLang.startsWith('en')) {
  window.location.href = '/en/';
} else if (userLang.startsWith('va')) {
  window.location.href = '/va/';
} else {
  // Redirigir al español por defecto si no coincide
  window.location.href = '/es/';
}
