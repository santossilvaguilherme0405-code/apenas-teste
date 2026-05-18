// ==========================================
// INICIALIZAÇÃO DO VLibras
// ==========================================

new window.VLibras.Widget('https://vlibras.gov.br/app');


// ==========================================
// PARTICLES BACKGROUND
// ==========================================

particlesJS('particles-js', {

particles: {

number: {
value: 80
},

color: {
value: '#00ff88'
},

shape: {
type: 'circle'
},

opacity: {
value: 0.5
},

size: {
value: 3
},

line_linked: {
enable: true,
distance: 150,
color: '#00ff88',
opacity: 0.4,
width: 1
},

move: {
enable: true,
speed: 2
}

}

});


// ==========================================
// TEMA CLARO / ESCURO
// ==========================================

const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {

document.body.classList.toggle('light-mode');

});


// ==========================================
// ZOOM DA PÁGINA
// ==========================================

let zoomLevel = 100;

document.getElementById('zoomIn').addEventListener('click', () => {

zoomLevel += 10;

document.body.style.zoom = zoomLevel + '%';

});

document.getElementById('zoomOut').addEventListener('click', () => {

zoomLevel -= 10;

document.body.style.zoom = zoomLevel + '%';

});


// ==========================================
// MODAL DAS TECNOLOGIAS
// ==========================================

function openModal(type){

const modal = document.getElementById('modal');

const title = document.getElementById('modalTitle');

const text = document.getElementById('modalText');

modal.style.display = 'block';

if(type == 1){

title.innerHTML = '🌾 Irrigação Inteligente';

text.innerHTML =
'Sensores analisam a umidade do solo e evitam desperdício de água.';

}

if(type == 2){

title.innerHTML = '🚁 Drones Agrícolas';

text.innerHTML =
'Drones ajudam produtores a monitorar plantações e melhorar a produtividade.';

}

if(type == 3){

title.innerHTML = '☀️ Energia Solar';

text.innerHTML =
'Painéis solares fornecem energia limpa e reduzem impactos ambientais.';

}

}


// ==========================================
// FECHAR MODAL
// ==========================================

function closeModal(){

document.getElementById('modal').style.display = 'none';

}


// ==========================================
// FECHAR MODAL CLICANDO FORA
// ==========================================

window.onclick = function(event){

const modal = document.getElementById('modal');

const helpModal = document.getElementById('helpModal');

if(event.target == modal){

modal.style.display = 'none';

}

if(event.target == helpModal){

helpModal.style.display = 'none';

}

};


// ==========================================
// CLIMA EM TEMPO REAL
// ==========================================

navigator.geolocation.getCurrentPosition(

async(position)=>{

const lat = position.coords.latitude;

const lon = position.coords.longitude;

const apiKey = '3924a0c6fd1f4f713a1f3b29f8f32da8';

try{

const response = await fetch(

`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`

);

const data = await response.json();

const temp = Math.round(data.main.temp);


// ==========================================
// CLIMA PRINCIPAL
// ==========================================

document.querySelector('.weather-box').innerHTML = `

<h3>🌦️ ${data.name}</h3>

<p>🌡️ Temperatura: ${temp}°C</p>

<p>💧 Umidade: ${data.main.humidity}%</p>

<p>🌬️ Vento: ${data.wind.speed} km/h</p>

<p>📍 Localização detectada automaticamente</p>

`;


// ==========================================
// CARDS DO MAPA
// ==========================================

document.getElementById('tempMapa').innerHTML =
temp + '°C';

document.getElementById('umidadeMapa').innerHTML =
data.main.humidity + '%';

document.getElementById('ventoMapa').innerHTML =
data.wind.speed + ' km/h';

document.getElementById('climaMapa').innerHTML =
data.weather[0].description;


// ==========================================
// ALERTAS CLIMÁTICOS
// ==========================================

const alerta =
document.getElementById('alertaClima');

if(temp <= 5){

alerta.innerHTML = `
❄️ ALERTA DE GEADA:
Proteja plantações contra frio intenso.
`;

}

else if(temp >= 35){

alerta.innerHTML = `
🔥 ALERTA DE CALOR EXTREMO:
Aumente irrigação e monitore o solo.
`;

}

else if(data.weather[0].description.includes('chuva')){

alerta.innerHTML = `
🌧️ ALERTA DE CHUVA:
Monitore áreas de plantação e drenagem.
`;

}

else{

alerta.innerHTML = `
✅ Clima favorável para atividades agrícolas.
`;

}

}catch(error){

mostrarClimaPadrao();

}

},

(error)=>{

mostrarClimaPadrao();

}

);


// ==========================================
// CLIMA PADRÃO OFFLINE
// ==========================================

function mostrarClimaPadrao(){

document.querySelector('.weather-box').innerHTML = `

<h3>🌦️ Guarapuava</h3>

<p>🌡️ Temperatura: 18°C</p>

<p>💧 Umidade: 82%</p>

<p>🌬️ Vento: 9 km/h</p>

<p>⚠️ Modo offline ativado</p>

`;

}


// ==========================================
// SIMULADOR DE SUSTENTABILIDADE
// ==========================================

function calcularSustentabilidade(){

const agua =
Number(document.getElementById('agua').value);

const solar =
Number(document.getElementById('solar').value);

const verde =
Number(document.getElementById('verde').value);

const media =
Math.round((agua + solar + verde) / 3);

let nivel = '';

if(media < 40){

nivel = '❌ Sustentabilidade baixa';

}

else if(media < 70){

nivel = '⚠️ Sustentabilidade média';

}

else{

nivel = '✅ Sustentabilidade excelente';

}

document.getElementById('resultadoSimulador').innerHTML = `

🌱 Resultado: ${media}%<br><br>

${nivel}

`;

}


// ==========================================
// CENTRAL EDUCACIONAL
// ==========================================

function mostrarInfo(tipo){

const resposta =
document.getElementById('respostaIA');


// ==========================================
// ECONOMIA DE ÁGUA
// ==========================================

if(tipo == 'agua'){

resposta.innerHTML = `

<h3>💧 Economia de Água</h3>

<p>
A irrigação inteligente utiliza sensores modernos para analisar a umidade do solo e evitar desperdícios.
</p>

`;

}


// ==========================================
// ENERGIA SOLAR
// ==========================================

else if(tipo == 'energia'){

resposta.innerHTML = `

<h3>☀️ Energia Solar</h3>

<p>
A energia solar é uma alternativa limpa e renovável muito importante para o agro sustentável.
</p>

`;

}


// ==========================================
// DRONES
// ==========================================

else if(tipo == 'drones'){

resposta.innerHTML = `

<h3>🚁 Drones Agrícolas</h3>

<p>
Os drones agrícolas ajudam no monitoramento das plantações e identificação de pragas.
</p>

`;

}


// ==========================================
// SOLO
// ==========================================

else if(tipo == 'solo'){

resposta.innerHTML = `

<h3>🌱 Preservação do Solo</h3>

<p>
Técnicas sustentáveis evitam erosão e mantêm nutrientes importantes.
</p>

`;

}


// ==========================================
// CLIMA
// ==========================================

else if(tipo == 'clima'){

resposta.innerHTML = `

<h3>🌦️ Mudanças Climáticas</h3>

<p>
Secas, geadas e chuvas intensas afetam diretamente a agricultura.
</p>

`;

}


// ==========================================
// SUSTENTABILIDADE
// ==========================================

else if(tipo == 'sustentabilidade'){

resposta.innerHTML = `

<h3>🌎 Sustentabilidade</h3>

<p>
A agricultura sustentável busca equilibrar produção e preservação ambiental.
</p>

`;

}


// ==========================================
// GEADA
// ==========================================

else if(tipo == 'geada'){

resposta.innerHTML = `

<h3>❄️ Alertas de Geada</h3>

<p>
O monitoramento climático ajuda produtores a proteger plantações.
</p>

`;

}


// ==========================================
// CHUVAS
// ==========================================

else if(tipo == 'chuva'){

resposta.innerHTML = `

<h3>🌧️ Chuvas Intensas</h3>

<p>
Chuvas fortes podem causar erosão e prejuízos agrícolas.
</p>

`;

}


// ==========================================
// PRAGAS
// ==========================================

else if(tipo == 'pragas'){

resposta.innerHTML = `

<h3>🐛 Controle de Pragas</h3>

<p>
Tecnologias modernas ajudam produtores a identificar pragas rapidamente.
</p>

`;

}


// ==========================================
// ECONOMIA
// ==========================================

else if(tipo == 'economia'){

resposta.innerHTML = `

<h3>💰 Economia Rural</h3>

<p>
A sustentabilidade ajuda produtores a reduzir custos.
</p>

`;

}


// ==========================================
// SENSORES
// ==========================================

else if(tipo == 'sensores'){

resposta.innerHTML = `

<h3>📡 Sensores Inteligentes</h3>

<p>
Sensores monitoram solo, umidade e clima em tempo real.
</p>

`;

}


// ==========================================
// CARBONO
// ==========================================

else if(tipo == 'carbono'){

resposta.innerHTML = `

<h3>🌳 Redução de Carbono</h3>

<p>
Práticas sustentáveis ajudam a reduzir emissão de carbono.
</p>

`;

}


// ==========================================
// SCROLL AUTOMÁTICO
// ==========================================

setTimeout(() => {

const y =
resposta.getBoundingClientRect().top +
window.pageYOffset - 120;

window.scrollTo({

top:y,
behavior:'smooth'

});

},200);

}


// ==========================================
// MODAL DE AJUDA
// ==========================================

function abrirAjuda(){

document.getElementById('helpModal')
.style.display = 'block';

}

function fecharAjuda(){

document.getElementById('helpModal')
.style.display = 'none';

}


// ==========================================
// TELA DE ENTRADA
// ==========================================

function entrarSite(){

const intro =
document.getElementById('intro-screen');

const site =
document.getElementById('site-content');

intro.style.opacity = '0';

intro.style.transform = 'scale(1.1)';

setTimeout(()=>{

intro.style.display = 'none';

site.style.opacity = '1';

document.body.style.overflow = 'auto';

},1000);

}


// ==========================================
// ANIMAÇÕES AO ROLAR
// ==========================================

const observer =
new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add('show');

}

});

});

document.querySelectorAll('.hidden')
.forEach((el)=>observer.observe(el));

// ================================
// DIAGNÓSTICO AGRÍCOLA IA
// ================================

function analisarCidade(){

const cidade = document
.getElementById('cidadeInput')
.value
.toLowerCase()
.trim();

const resultado = document
.getElementById('resultadoCidade');


// LISTA DE CIDADES DO PARANÁ

const cidades = {

"guarapuava": {
culturas: "Erva-mate, soja, milho, trigo, batata e morango.",
clima: "Clima frio com geadas frequentes.",
venda: "Feiras rurais, cooperativas e mercados locais."
},

"curitiba": {
culturas: "Hortaliças, flores, morango e alface.",
clima: "Clima úmido e frio.",
venda: "Feiras urbanas e mercados municipais."
},

"londrina": {
culturas: "Café, soja, milho e frutas.",
clima: "Clima subtropical quente.",
venda: "Mercados regionais e cooperativas."
},

"maringa": {
culturas: "Soja, milho, cana e frutas tropicais.",
clima: "Clima quente e produtivo.",
venda: "Cooperativas agrícolas."
},

"cascavel": {
culturas: "Soja, milho, trigo e aves.",
clima: "Clima ideal para grãos.",
venda: "Exportação e cooperativas."
},

"ponta grossa": {
culturas: "Batata, trigo, cevada e soja.",
clima: "Clima frio e úmido.",
venda: "Feiras e indústrias."
},

"foz do iguaçu": {
culturas: "Mandioca, frutas e hortaliças.",
clima: "Clima quente e úmido.",
venda: "Turismo e mercados locais."
},

"guaratuba": {
culturas: "Banana, palmito e mandioca.",
clima: "Litorâneo e úmido.",
venda: "Feiras locais e turismo."
},

"guaíra": {
culturas: "Soja, milho e mandioca.",
clima: "Clima quente.",
venda: "Cooperativas agrícolas."
},

"toledo": {
culturas: "Milho, soja e criação de aves.",
clima: "Subtropical.",
venda: "Frigoríficos e cooperativas."
},

"paranavaí": {
culturas: "Laranja, mandioca e cana.",
clima: "Quente.",
venda: "Indústrias e mercados."
},

"umuarama": {
culturas: "Mandioca, soja e milho.",
clima: "Quente e seco.",
venda: "Feiras e cooperativas."
},

"campo mourão": {
culturas: "Soja, trigo e milho.",
clima: "Subtropical.",
venda: "Cooperativas."
},

"irati": {
culturas: "Erva-mate, feijão e milho.",
clima: "Frio.",
venda: "Mercados locais."
},

"união da vitória": {
culturas: "Erva-mate, pinus e hortaliças.",
clima: "Frio e úmido.",
venda: "Madeireiras e feiras."
},

"francisco beltrão": {
culturas: "Milho, soja e aves.",
clima: "Subtropical.",
venda: "Cooperativas."
},

"pato branco": {
culturas: "Soja, trigo e hortaliças.",
clima: "Frio moderado.",
venda: "Mercados e cooperativas."
},

"apucarana": {
culturas: "Café, milho e soja.",
clima: "Subtropical.",
venda: "Mercados regionais."
},

"arapongas": {
culturas: "Milho, soja e café.",
clima: "Quente.",
venda: "Cooperativas."
},

"telêmaco borba": {
culturas: "Pinus, eucalipto e milho.",
clima: "Úmido.",
venda: "Indústria madeireira."
},

"castro": {
culturas: "Leite, soja e milho.",
clima: "Frio.",
venda: "Laticínios e cooperativas."
},

"lapa": {
culturas: "Batata, milho e feijão.",
clima: "Frio.",
venda: "Feiras agrícolas."
},

"prudentópolis": {
culturas: "Erva-mate, feijão e milho.",
clima: "Frio.",
venda: "Mercados locais."
},

"pinhão": {
culturas: "Erva-mate, pinus e soja.",
clima: "Frio.",
venda: "Madeireiras e feiras."
},

"reserva": {
culturas: "Milho, feijão e soja.",
clima: "Subtropical.",
venda: "Cooperativas."
},

"pitanga": {
culturas: "Soja, milho e trigo.",
clima: "Frio moderado.",
venda: "Mercados rurais."
},

"candói": {
culturas: "Soja, milho e erva-mate.",
clima: "Frio.",
venda: "Cooperativas."
},

"turvo": {
culturas: "Erva-mate, milho e feijão.",
clima: "Frio e úmido.",
venda: "Feiras locais."
}

};

// VERIFICA SE EXISTE

if(cidades[cidade]){

resultado.innerHTML = `

<h3>🌱 Cultivos indicados para ${cidade}</h3>

<p><b>🌾 Culturas:</b>
${cidades[cidade].culturas}</p>

<p><b>🌦️ Clima:</b>
${cidades[cidade].clima}</p>

<p><b>🛒 Onde vender:</b>
${cidades[cidade].venda}</p>

`;

}else{

resultado.innerHTML = `

<h3>❌ Cidade não encontrada</h3>

<p>
Digite uma cidade paranaense cadastrada.
</p>

<p>
Exemplos:
Guarapuava, Curitiba, Cascavel,
Londrina, Maringá, Ponta Grossa
ou Foz do Iguaçu.
</p>

`;

}

}
