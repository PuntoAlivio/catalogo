/* --- Lógica General del Sitio --- */
const numeroWhatsApp = "+51929783902";

// 1. Título de Pestaña Dinámico
let fisioencasa = document.title;
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        document.title = "¡No nos abandones! 😢";
    } else { 
        document.title = fisioencasa;
    }
});

// 2. Controladores de WhatsApp
function abrirWhatsApp(mensaje) {
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

function pedirPaquete(nombrePaquete, precio) {
    const mensaje = `¡Hola! Me interesa adquirir el *${nombrePaquete}* (Referencia: ${precio}).\n\n¿Me podrían confirmar el stock y los métodos de entrega, por favor?`;
    abrirWhatsApp(mensaje);
}

function pedirProducto(nombreProducto, precio) {
    const mensaje = `Hola, quiero comprar un artículo de su catálogo:\n\n*Producto:* ${nombreProducto}\n*Precio:* ${precio}\n\n¿Tienen disponibilidad actual?`;
    abrirWhatsApp(mensaje);
}

function consultarCategoria(categoria) {
    const mensaje = `Hola, me gustaría ver qué opciones tienen disponibles en la categoría de *${categoria}*.`;
    abrirWhatsApp(mensaje);
}

function consultaGeneral() {
    const mensaje = `¡Hola! Vengo de su página web y necesito asesoría para adquirir productos de fisioterapia.`;
    abrirWhatsApp(mensaje);
}

const slides = document.querySelectorAll('.slide');
if (slides.length > 0) {
    let slideIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        if (index >= slides.length) slideIndex = 0;
        if (index < 0) slideIndex = slides.length - 1;
        slides[slideIndex].classList.add('active');
    }

    function moveSlide(step) {
        slideIndex += step;
        showSlide(slideIndex);
    }

    window.moveSlide = moveSlide;

    setInterval(() => {
        moveSlide(1);
    }, 6000);
}
// ==========================================
// MENÚ HAMBURGUESA PARA CELULARES
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('nav');

    if(menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            // Abre o cierra el menú
            navMenu.classList.toggle('menu-abierto');
            
            // Cambia el icono de Hamburguesa (barras) a una "X"
            const icono = menuToggle.querySelector('i');
            if(navMenu.classList.contains('menu-abierto')) {
                icono.classList.remove('fa-bars');
                icono.classList.add('fa-xmark');
            } else {
                icono.classList.remove('fa-xmark');
                icono.classList.add('fa-bars');
            }
        });
    }
});