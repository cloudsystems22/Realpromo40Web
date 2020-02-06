using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace Realpromo40Web.Hubs
{
    //[HubName("MyHub1")]
    public class MyHub1 : Hub
    {
        public void Send(string name, string message)
        {
            Clients.All.addNewMessageToPage(name, message);
            //Clients.Others.addNewMessageToPage(name, message);
        }
    }
}