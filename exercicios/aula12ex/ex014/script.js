function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas. `;

    if (hora > 4 && hora < 12) {
        //Bom dia!
        img.src = 'imagens/manha.png';
        document.body.style.background = '#f5da99';
        innerHTML = 'Bom dia';
        msg.innerHTML += 'Bom dia!';
    } else if (hora >= 12 && hora < 16) {
        //Boa tarde!
        img.src = 'imagens/tarde12.png';
        document.body.style.background = '#91c7f5';    
        msg.innerHTML += 'Boa tarde!';
    } else if (hora >= 16 && hora <= 18) {
        img.src = 'imagens/tarde-noite.png';
        document.body.style.background = '#926044';
        msg.innerHTML += 'Boa tarde!';
    } else {
        //Boa noite!
        img.src = 'imagens/noite.png';
        document.body.style.background = '#091316';
        msg.innerHTML += 'Boa noite!';
    }
}

