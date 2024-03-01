function cambiarIdioma(idioma) {
  const nuevoArchivo = idioma === "es" ? "/index.html" : "/lang/index-en.html";
  window.location.href = nuevoArchivo;
}
