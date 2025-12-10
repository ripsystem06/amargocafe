// proteccion_codigo.js

// 1. Deshabilitar el Clic Derecho (Menú Contextual)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    // Opcional: Mostrar un mensaje
    // alert("El código fuente está protegido."); 
});

// 2. Deshabilitar Atajos de Teclado Comunes para Desarrolladores
document.onkeydown = function(e) {
    // Tecla F12 (Herramientas de desarrollador estándar)
    if(e.keyCode == 123) {
        return false;
    }
    
    // Combinaciones con Ctrl (Windows/Linux)
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Ctrl+Shift+I (Inspeccionar)
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { // Ctrl+Shift+C (Inspeccionar Elemento)
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { // Ctrl+Shift+J (Consola)
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { // Ctrl+U (Ver código fuente)
        return false;
    }

    // Combinaciones con Command (Mac OS)
    if(e.metaKey && e.altKey && e.keyCode == 'I'.charCodeAt(0)) { // Cmd+Opt+I (Mac)
        return false;
    }
}