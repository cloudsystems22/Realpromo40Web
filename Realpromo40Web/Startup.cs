using Microsoft.Owin;
using Owin;
using Realpromo40Web.Hubs;

[assembly: OwinStartupAttribute(typeof(Realpromo40Web.Startup))]
namespace Realpromo40Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            app.MapSignalR();


        }
    }
}
