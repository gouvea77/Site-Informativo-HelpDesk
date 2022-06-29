const express = require('express');
const { engine } = require ('express-handlebars');


const app = express();

app.use(express.static('public'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

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


    let conteudoo = conteudoController.findOne('id: 1')
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



app.listen(3000, console.log('server online'));
