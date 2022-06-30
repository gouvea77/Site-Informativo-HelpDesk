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
            'titulo': 'Exemplo de titulo 3',
            'texto': 'Exemplo de texto 3'
        },
        {
            'texto': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo mi eu tortor euismod, luctus cursus odio sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent et malesuada leo. Vivamus ac leo at mi laoreet tincidunt sit amet viverra elit. Suspendisse ut sapien justo. Donec rutrum urna quam, quis dignissim lorem finibus ac. Pellentesque vel nisl magna. Morbi vel nunc ex. Quisque ullamcorper mollis nibh et condimentum. Sed egestas felis quis odio tincidunt lobortis. Morbi quam sapien, rutrum eu pellentesque non, tempus non odio. Maecenas quis condimentum est, sed semper turpis. Integer ut tellus ullamcorper, porta purus eu, pretium sem. Ut eget euismod turpis. Curabitur aliquam felis et ante suscipit, sit amet porta ex pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; '
        },
        {
            'texto': 'Ultima div criada'
        }
        
    ]
    res.render('padrao', {dados: conteudo});
});

app.get('/medeletro', (req, res) => {
    let conteudo = [
        {
            'titulo': 'Medeletro ECG',
            'texto': 'Exemplo de texto medeletro'
        },
        {
            'titulo': 'Exemplo titulo 2 medeletro',
            'texto': 'Exemplo texto 2 medeletro'
        },
        {
            'titulo': 'Quem tem acesso ao medeletro',
            'texto': 'Alunos medeletro ativo e adimplentes dentro do período letivo'
        },
        {
            'texto': 'Medeletro tem o próprio aplicativo'
        },
        {
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

