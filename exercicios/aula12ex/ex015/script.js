function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = window.document.getElementById('txtano');
    var res = window.document.getElementById('res');

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');
    } else if (fAno.value <= 1899) {
        window.alert('[ERRO] O ano de nascimento tem que ser acima de 1899!')
    }
    else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var gênero = '';
        var img = window.document.getElementById('foto');

        if (fsex[0].checked) { //importante
            gênero = 'Homem';
            if (idade >= 0 && idade <= 3) {
                img.src = 'imagens/bebe-m.png';
                gênero = 'Bebê';

            } else if (idade >= 4 && idade <= 8) {
                img.src = 'imagens/crianca-m.png';
                gênero = 'Criança';

            } else if (idade >= 9 && idade <= 12) {
                img.src = 'imagens/menino.png';
                gênero = 'Menino';

            } else if (idade >= 13 && idade <= 17) {
                img.src = 'imagens/adolescente-m.png';
                gênero = 'Menino';

            } else if (idade >= 18 && idade <= 21) {
                img.src = 'imagens/adolescente-20-m.png';
                gênero = 'Homem';

            } else if (idade >= 22 && idade <= 30) {
                img.src = 'imagens/homem.png';
                gênero = 'Homem';

            } else if (idade >= 31 && idade < 50) {
                img.src = 'imagens/homem-40.png';

            } else if (idade >= 51 && idade <= 65) {
                img.src = 'imagens/idoso-j-m.png';

            } else {
                img.src = 'imagens/idoso-80.png';

            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher';
            if (idade >= 0 && idade <= 3) {
                img.src = 'imagens/bebe-f.png';
                gênero = 'Bebê';

            } else if (idade >= 4 && idade <= 8) {
                img.src = 'imagens/crianca-f.png';
                gênero = 'Criança';

            } else if (idade >= 9 && idade <= 12) {
                img.src = 'imagens/menina.png';
                gênero = 'Menina';

            } else if (idade >= 13 && idade <= 17) {
                img.src = 'imagens/adolescente-f.png';
                gênero = 'Menina';

            } else if (idade >= 18 && idade <= 21) {
                img.src = 'imagens/adolescente-20-f.png';
                gênero = 'Mulher';
            } else if (idade >= 22 && idade <= 30) {
                img.src = 'imagens/mulher.png';
                gênero = 'Mulher';

            } else if (idade >= 31 && idade < 50) {
                img.src = 'imagens/mulher-40.png';
                gênero = 'Mulher'

            } else if (idade >= 51 && idade <= 65) {
                img.src = 'imagens/idosa-j-f.png';
                gênero = 'Mulher'

            } else {
                img.src = 'imagens/idosa-80.png';
                gênero = 'Mulher'

            }
        }


        res.innerHTML = `Detectamos ${gênero} com ${idade} ano/s`;
    }
}

