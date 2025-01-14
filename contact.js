// Selecciona el formulario por su clase
const form = document.querySelector(".contact-form");

// Añade el evento de envío
form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Evita la recarga de la página

    const formData = new FormData(form); // Recoge los datos del formulario

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            // Muestra la ventana emergente de "Gracias"
            alert("¡Gracias! Tu mensaje ha sido enviado.");

            // Limpia el formulario después de mostrar el mensaje
            form.reset();
        } else {
            alert("Hubo un problema al enviar tu mensaje. Intenta nuevamente.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error al enviar el mensaje. Por favor, intenta más tarde.");
    }
});

