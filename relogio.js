// Criar  trés constantes(const) chamadas horas, minutos e segundos.
const caixaHoras = document.getElementById("horas");
const caixaMinutos = document.getElementById("minutos");
const caixaSegundos = document.getElementById ("segundos");
const caixaDate = document.getElementById("date")

// Crie uma contante chamada relogio e atribua o metodo sentInteval.

const relogio = setInterval(() => {

// Cria uma variavel(let) chamada datetoday e atribuir o super metodo new Date.
let datetoday = new Date()

const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

// Criar  trés variaveis chamadas hr, min e sec. e atribua a variavel daToday em cada uma.


let date = datetoday.toLocaleDateString('pt-BR', options);

let hr = datetoday.getHours();

let min = datetoday.getMinutes();

let sec = datetoday.getSeconds();


if (hr < 10) hr = '0' + hr;
if (min < 10) min = '0' + min;
if (sec < 10) sec = '0' + sec;

// ultilazar o textContent para mostra as hr, min e sec na tela, lembre-se de chamar a caixa de cada campo.
caixaDate.textContent = date;
caixaHoras.textContent = hr;
caixaMinutos.textContent = min;
caixaSegundos.textContent = sec;
}, 10);