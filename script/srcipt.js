//pega a data atual
dia = new Date().getDate()
mes = new Date().getMonth()+1
ano = new Date().getUTCFullYear()

//Cálculo da idade
idade = ano - 1995
idadeAntesDoAniversario =  idade - 1

//Puxa a id do html, para poder escrever diante das condições
sobre = document.getElementById('sobre')

if( dia >= 09 && mes >= 10){
    sobre.innerHTML = '<p>Me chamo Iago Teixeira, tenho ' + idade  + ' anos de idade, residente de Salvador - BA. </br> Total dedicação para aprimoração das minhas habilidades, desenvolvedor web front-end, com habilidades em html, css , javascript e aprimorando em back-end com Node.Js. <br> Extrovertido, sempre procuro estabelecer um bom ambiente de trabalho e comunicação, trabalhar com uma ar... um pouco mais confortável sempre é bom kkk.</p>'
}else(
    sobre.innerHTML = '<p>Me chamo iago Teixeira, tenho ' + idadeAntesDoAniversario  + ' anos de idade, residente de Salvador - BA. </br> Total dedicação para aprimoração das minhas habilidades, desenvolvedor web front-end, com habilidades em html, css , javascript e aprimorando em back-end com Node.Js. <br> Extrovertido, sempre procuro estabelecer um bom ambiente de trabalho e comunicação, trabalhar com uma ar... um pouco mais confortável sempre é bom kkk.</p>'
)