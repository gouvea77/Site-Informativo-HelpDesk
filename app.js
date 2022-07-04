const express = require('express');
const { engine } = require ('express-handlebars');
const conteudosController = require('./src/controllers/conteudosControllers')
const db = require('./src/configs/dbConnection')
const bodyParser = require('body-parser')

db.on("error", console.log.bind(console, "erro de conexão"))
db.once('open', ()=>{
    console.log('Conectado ao banco de dados')
})

const app = express();

app.use(express.static('public'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');
app.use(express.json())

app.get('/', (req, res) => {
    res.render('padrao')
})

function geraMensagemDia(){
    let temp = 10+30
    return temp;

}

app.get('/dia', (req, res)=>{
    res.render('msgdia', {msgdia: geraMensagemDia()})
})

app.get('/medsmart', (req, res) => {
    let conteudo = [
        {
            'titulo': 'Medsmart',
            'texto': 'O MEDSMART é uma nova ferramenta que oferece ao aluno a nossa inteligência artificial, que vai acompanhar o aluno durante todo ano nos temas que ele mais precisa e apresenta mais dificuldade.'
        },
        {
            'titulo': 'Quem tem acesso?',
            'texto': "A partir de 2022 terão acesso: Alunos ativos no EXTENSIVO (MEDCURSO E MED) Alunos do MEDMASTER"
        },
        {
            'titulo':'Revisão de temas unicos ou mix de temas',
            'texto': 'A lista de temas e a ordenação em ambas estas formas de revisão é a mesma. Se você quiser rever tema por tema, use a revisão por Tema Único. Mas se você quiser rever uma quantidade maior de temas de uma única vez, opte pelo modo Mix Temas'
        },
        {
            'titulo': 'Contabilização de questões',
            'texto': 'TODAS as questões realizadas são contabilizadas pelo MEDSMART, independentemente de em qual módulo ela é realizada. E, por isso, há a opção de escolher a partir de quando o aluno quer que as questões sejam selecionadas. Anteriormente, o módulo compreendia todas as questões realizadas, inclusive aquelas do aluno que fez em MEDCURSO 2021, por exemplo.'
        },
        {
            'titulo': 'Exemplo de titulo 4',
            'texto': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo mi eu tortor euismod, luctus cursus odio sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent et malesuada leo. Vivamus ac leo at mi laoreet tincidunt sit amet viverra elit. Suspendisse ut sapien justo. Donec rutrum urna quam, quis dignissim lorem finibus ac. Pellentesque vel nisl magna. Morbi vel nunc ex. Quisque ullamcorper mollis nibh et condimentum. Sed egestas felis quis odio tincidunt lobortis. Morbi quam sapien, rutrum eu pellentesque non, tempus non odio. Maecenas quis condimentum est, sed semper turpis. Integer ut tellus ullamcorper, porta purus eu, pretium sem. Ut eget euismod turpis. Curabitur aliquam felis et ante suscipit, sit amet porta ex pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; '
        },
        
    ]
    res.render('padrao', {dados: conteudo});
});

app.get('/medeletro', (req, res) => {
    let conteudo = [
        {
            'titulo': 'Medeletro ECG',
            'texto': 'O MedEletro é um programa de treinamento para quem quer aprender eletrocardiografia. Os contratantes terminarão o cronograma dominando não somente o diagnóstico do ECG, mas também a conduta clínica e terapêutica em diversas situações especiais.'
        },
        {
            'titulo': 'Para quem é indicado?',
            'texto': 'É indicado para todos os médicos e estudantes de medicina, inclusive os que estão se preparando para a Residência Médica, já que ECG é tema frequente em provas.'
        },
        {
            'titulo': 'Mas o que é o iMED ?',
            'texto': 'O iMED é o resultado da união das didáticas oral (aula) e escrita (texto) em um único formato: o eletrônico. Os contratantes receberão material acadêmico único, na forma de textos especiais, extremamente completos e detalhados, e ainda assim preservando a didática.'
        },
        {
            'titulo': 'Pontos de atenção',
            'texto': 'Não há material físico nem aulas. <br><br> Todo o conteúdo fica disponível por 11 semanas a partir da data de contratação  <br><br> Todo o conteúdo acadêmico pertinente ao módulo online MEDELETRO iMED será oferecido exclusivamente no formato ELETRÔNICO, através do aplicativo MEDSoft Pro.  <br><br>'
        },
        {
            'titulo': 'Contrato',
            'texto': 'O aluno faz a assinatura do contrato de forma on-line através da plataforma DocuSign. Entretanto, esse envio não ocorre de imediato porque a ordem de venda precisa estar com status ATIVA e ADIMPLENTE.'
        }
    ]


    res.render('padrao', {dados: conteudo});
});

app.get('/medplanner', (req, res) => {
    let conteudo = [
        {
            'titulo': 'Med Planner',
            'texto': 'Exemplo de texto med planner'
        },
        {
            'titulo': 'Exemplo titulo 2 med planner',
            'texto': 'Exemplo texto 2 med planner'
        },
        {
            'titulo': 'Quem tem acesso ao med planner',
            'texto': 'Todos os alunos ativos e adimplentes do ano vigente possuem acesso a ferramenta'
        },
        {
            'titulo': 'Exemplo de titulo 4',
            'texto': 'Med Planner tem o próprio aplicativo'
        },
        {
            'titulo': 'Exemplo de titulo 5',
            'texto': 'Exemplo texto final'
        }
    ]


    res.render('padrao', {dados: conteudo});
});

app.get('/rmais', (req, res)=>{
        let conteudo = [
            {
                'titulo': 'Módulo online R+',
                'texto': 'As EDITORAS comercializam COLEÇÕES EDITORIAIS ON-LINE para aqueles que buscam se preparar para as provas de R3 e R4. São 7 programas de treinamento diferentes, onde o aluno irá optar pela área em que pretende se especializar.'
            },
            {
                'titulo': 'Como funciona?',
                'texto': 'O módulo de treinamento R+ diz respeito exclusivamente a uma coleção de livros eletrônicos especiais. Trata-se de um sistema de treinamento pautado em material didático, que se utilizará de um formato inédito: o iMED. Neste formato, o escritor (de cada assunto) se fará presente em inserções de vídeo e funcionará como guia para a leitura e estudo de todos os temas apresentados.'
            },
            {
                'titulo': 'O que é iMED?',
                'texto': 'O iMED é o resultado da união das didáticas oral (aula) e escrita (texto) em um único formato: o eletrônico. Os contratantes receberão material acadêmico único, na forma de textos especiais, extremamente completos e detalhados, e ainda assim preservando a didática. Como? Não serão textos quaisquer, pois os escritores – os próprios – estarão presentes dentro do conteúdo eletrônico, dando voz às páginas, em inserções constantes e estrategicamente premeditadas, conceituando tudo o que o aluno precisa saber sobre o tema.'
            }
        ]

        res.render('padrao', {dados:conteudo});
})

app.post('/create', conteudosController.criarConteudo)

app.get('/all', conteudosController.listarTodos)

app.get('/test', conteudosController.listarPorId)

    



app.listen(3000, console.log('server online'));

