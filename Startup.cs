using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(jasonalinton.Startup))]
namespace jasonalinton
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
