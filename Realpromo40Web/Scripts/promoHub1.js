
var connectionHub = $.connection.promoHub;
//var connection = new signalR.HubConnectionBuilder().withUrl("/PromoHub").build();

start();
//connectionHub.hub.onclosed(async () => {
    //await start();
//});

/*
$.connection.hub.start().then(function () {
    console.info("Conectado!");
}).catch(function (err) {
    console.error(err.toString());
    }); */


connectionHub.client.send = function (promocao) {
    // Add the message to the page.
    $('#list-promo').append('<li><h3>' + promocao.Chamada + '</h3><p>' + promocao.Regras + '</p><p>' + promocao.Empresa + '</p><p><a href=' + promocao.EnderecoURL + ' target="_blank">Pegar promoção!</a></p></li>');
};
var btnCadastrar = document.getElementById('btnCadastrar');
if (btnCadastrar !== null) {
    btnCadastrar.addEventListener("click", function () {
        

        //TODO - SignalR chamar o cadastro de promoções;
        var empresa = document.getElementById('txtEmpresa').value;
        var chamada = document.getElementById('txtChamada').value;
        var regras = document.getElementById('txtRegras').value;
        var url = document.getElementById('txtURL').value;

        var promocao = { Empresa: empresa, Chamada: chamada, Regras: regras, EnderecoURL: url };
        connectionHub.server.send(promocao);
        /*
        connectionHub.invoke("Send", promocao).then(function () {
            console.info("Cadastrado com sucesso!");
            //$('#list-promo').append('<li><h3>TESTE 123</h3><p>13 CAIXAS</p></li>');

        }).catch(function (err) {
            console.error(err.toString());
            }); */

       
        /*
        connectionHub.server.Send(promocao).then(function () {
            console.info("Cadastrado com sucesso!");
        }).catch(function (err) {
            console.error(err.toString());
        });*/

    });
}

function htmlEncode(value) {
    var encodedValue = $('<div />').text(value).html();
    return encodedValue;
}

function start() {
    $.connection.hub.start().then(function () {
        console.info("Conectado!");
    }).catch(function (err) {
        console.error(err.toString());
        setTimeout(() => start(), 5000);
    });
}