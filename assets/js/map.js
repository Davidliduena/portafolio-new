document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
        <iframe class="contact__iframe" frameborder="0" scrolling="no" margingheiht="0" margingwight="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3816.203761606316!2d-75.58586750712772!3d6.260421015573411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442910e3f56d1b%3A0x5d94af1ee7417cf6!2sCamino%20de%20Colores!5e0!3m2!1ses-419!2sco!4v1709268125016!5m2!1ses-419!2sco" ></iframe>
        `;
    }, 500);

   
});