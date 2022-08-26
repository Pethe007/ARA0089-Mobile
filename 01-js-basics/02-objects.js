const saladeaula = {
    quantidade: 10,
    aluno: [
        {
        nome: 'joao',
        idade: 20,
        sexo: 'm',
        }
    ],
    professor: [
        {

        }
    ],
    quantidadedecadeiras: 20,
    mesa:20,
    projetor: true
};

saladeaula.aluno.forEach(aluno => {
    if(aluno.nome === 'Maria') {
        console.log('achei o aluno ${aluno.nome}');

    }else {
        console.log('voce n e a doida ${aluno.nome}')
    }
})

