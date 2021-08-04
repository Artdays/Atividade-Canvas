//código utilizados para instanciar o canvas.
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//gradiente
//criaum gradiente linear utilizando duas cores.
var grd = ctx.createLinearGradient(0, 0, 0, 800);
//códigos que determinam as cores do gradiente.
grd.addColorStop(0, "#2F4E96");
grd.addColorStop(1, "#3990B6");
ctx.fillStyle = grd;
//código que controla o tamanho do gradiente.
ctx.fillRect(0, 0, 1980, 930);

//linhas
//esses códigos são utilizados para criar e adionar linha que vão de um ponto A para um ponto B.
ctx.moveTo(960, 800);
ctx.lineTo(960,180);
ctx.lineTo(300,800);
ctx.lineTo(1600,800);
ctx.lineTo(960,180);
//código para mudar a cor das linhas geradas.
ctx.strokeStyle = "navy-blue";
ctx.stroke();

//circulo
//cria um arco utilizando de parametro o raio, posição x e angulo de inicialização.
ctx.beginPath();
ctx.arc(960, 500, 250, -550, 2 * Math.PI);
//código para controlar a cor do arco formado.
ctx.strokeStyle = "navy-blue";
ctx.stroke();

//texto
//froma palavras com parâmetros de cor, fonte e tamanho em pixels.
ctx.font = "50px Times New Roman";
ctx.strokeStyle = "pink";
//determina a posição no canvas e a frase que será mostrada.
ctx.strokeText("um Site Incrível", 800, 510);

//PointInPath
//forma um arco utilizando uma constante.
const circle = new Path2D();
circle.arc(960, 100, 60, 0, 2 * Math.PI);
//código para mudança de cor do arco.
ctx.fillStyle= "#152762";
ctx.fill(circle);

//Mudar de Cor
//um código de IF e ELSE que detecta se o cursor estiver em contato com o arco e caso ele esteja o arco troca de cor.
canvas.addEventListener('mousemove', function(event) {

    if (ctx.isPointInPath(circle, event.offsetX, event.offsetY)) {
        ctx.fillStyle = 'pink';

    }
    else {
     ctx.fillStyle = '#152762';
    }
    ctx.fill(circle);
  });

//curva
//cria uma linha com um ponto de curva que pode ser controlado.
ctx.beginPath();
ctx.moveTo(960, 600);
//controla as caracteristicas da curva na linha
ctx.quadraticCurveTo(600, 500, 960, 400);
ctx.stroke();
ctx.beginPath();
//deteremina um ponto inicial e um ponto final.
ctx.moveTo(960, 600);
ctx.quadraticCurveTo(1350, 500, 960, 400);
ctx.stroke();

//imagem
//um código utilizado para buscar um arquivo de imagem na pasta do site.
var img = new Image();
img.src = 'Lixo.jpg';
img.onload = function(){
//código para determinar o ponto em que a foto é criada no canvas, além sua altura e seu largura em pixels.
ctx.drawImage(img,920,830,80,85);};
