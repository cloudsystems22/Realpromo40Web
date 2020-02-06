using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebRealpromo.Models;

namespace Realpromo40Web.Hubs
{
    [HubName("promoHub")]
    public class PromoHub : Hub
    {
        /*
         * Client - JS/C#/Java
         * RPC
         * Client(JS) --> Hub(C#) (C# - Cliente cadastra promo)
         * Hub(C#) --> Cliente(JS) (JS - Servidor recebe)
         */

        public async Task CadastrarPromocao(Promocao promocao)
        {
            /*
             * Notificar o usuário
             */
            await Clients.Caller.SendAsync("CadastradoSucesso"); //Notificar o Caller --> Cadastro realizado com sucesso!
            await Clients.Others.SendAsync("ReceberPromocao", promocao); //Notificar a promoção!

        }

        public void Send(Promocao promocao)
        {
            //Clients.Caller.Send(promocao); //Notificar o Caller --> Cadastro realizado com sucesso!
            //Clients.Others.Send("ReceberPromocao", promocao); //Notificar a promoção!
            Clients.Others.Send(promocao);
        }

       

    }
}
