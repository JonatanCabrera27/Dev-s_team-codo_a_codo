cad=`
<nav class="nbar">
<div class="nbar-logo">
    <div class="logo">
        <a href="index.html"><img src="./img/icono.png" alt="index.html"></a>
    </div>
    <div class="nbar-burger">
        <button id="bBurger">
            <span class="material-symbols-outlined">
                menu
            </span>
        </button>
    </div>
</div>
<div id="links" class="nbar-inicio">
    <a href="./index.html">Inicio</a>
    <a href="./normativas.html">Normativas</a>
    <a href="./vulnerabilidades.html">Vulnerabilidades</a>
    <a href="./noticias.html">Noticias</a>
    <a href="./contacto.html">Contacto</a>
    <a href="./noticiasAdministrador.html">Administrador</a>
</div>
</nav>
`

document.getElementById("idheader").innerHTML=cad;

cad=`
<nav id="footer">
            <a href="https://facebook.com" target="_blank">
                <img width="30" src="./img/facebook.png" alt="logoFacebook">
            </a>
            <a href="https://instagram.com" target="_blank">
                <img width="30" src="./img/instagram.png" alt="logo instagram">
            </a>
            <a href="mailto:valeriaaragon@gmail.com" target="_blank">
                <img width="30" src="./img/gmail.png" alt="logo gmail">
            </a>
            <p>DevsTeam @2023</p><br>
        </nav>
`

document.getElementById("idfooter").innerHTML=cad;