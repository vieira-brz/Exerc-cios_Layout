$(document).ready(function(e) {

    // 
    // CURSOS
    // 
    let cursos = [
        {
            icone: "fas fa-business-time",
            curso: "Administração",
            tempo: "4 anos",
            turno: "Manhã e Noite",
            valor: "1.500,00"
        },
        {
            icone: "fas fa-city",
            curso: "Engenharia Civil",
            tempo: "5 anos",
            turno: "Tarde e Noite",
            valor: "2.000,00"
        },
        {
            icone: "fas fa-gavel",
            curso: "Direito",
            tempo: "5 anos",
            turno: "Noite",
            valor: "1.800,00"
        },
        {
            icone: "fas fa-code",
            curso: "Egenharia de Software",
            tempo: "4 anos",
            turno: "Noite",
            valor: "1.200,00"
        },
    ];

    $.each(cursos, function(i, k) {
        $('#cursos').find('table').find('tbody').append(`
            <tr>
                <td style="text-align: start;"><i class="${ k.icone }"></i>&nbsp ${ k.curso }</td>
                <td>${ k.tempo }</td>
                <td>${ k.turno }</td>
                <td>${ k.valor }</td>
            </tr>
        `);
    });


    // 
    // NOTÍCIAS
    // 
    let noticias = [
        'Universidade XYZ é eleita a melhor instítuição do país.',
        'Professores da universidade XYZ são premiados.',
        'Aluno da Universidade XYZ ganha prêmio internacional.'
    ];

    $.each(noticias, function(i, k) {
        $('#noticias').find('.cards').append(`
            <div class="card">
                <div class="card-img">
                    <img src="./img/logo.png" alt="Logo XYZ">
                </div>
                <div class="card-text">
                    ${ k }
                    <div class="saiba-mais">
                        <a href="./"> Ler mais </a>
                    </div>
                </div>
            </div>
        `);
    });
});