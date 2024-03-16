function cambiarIdioma(idioma) {
  const nuevoArchivo = idioma === "es" ? "/index.html" : "/index-en.html";
  window.location.href = nuevoArchivo;
}
