var promocoes = [
    {
        nome:"mesa de estar",
        preco:Math.round(Math.random()*100000)+"."+Math.round(Math.random()*100),
        avaliacao:4,
        lugares:{
            quarto:2,
            escritorio:3,
            sala:4,
            outros:10
        },
        img:"/img/sof1.jpg",
        id:Math.round(Math.random()*100000000000000*Math.random()*753),
        quant:1,
        desconto:Math.round(Math.random()*50),
        entrega:Math.round(Math.random()*50),
        tipo:"escritorio",
        tipo2:"promotion"
    },
]


export default promocoes;