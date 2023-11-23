function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = window.document.getElementById('txtano');
    var res = window.document.getElementById('res');

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var gênero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            gênero = 'Homem';
            if (idade >= 0 && idade < 10) {
                //criança
            } else if (idade >= 10 && idade < 21) {
                //jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                //criança
            } else if (idade >= 10 && idade < 21) {
                //jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`;
    }
}




/*
Infancia
Primeira infância: do nascimento aos 3 anos de idade;
Segunda infância: dos 3 aos 6 anos;
Terceira infância: dos 6 aos 11 anos.

Adolescência
Pré-adolescência ou adolescência menor: dos 11 aos 14 anos de idade;
Adolescência média: dos 14 aos 17 anos;
Adolescência maior ou juventude: dos 17 aos 20 anos.

Adulto
Adulto jovem: dos 21 aos 40 anos de idade;
Meia idade: dos 40 aos 65 anos.

Velhice
Idoso jovem: dos 65 aos 75 anos de idade;
Idoso mais velho: acima dos 75 anos.
*/
