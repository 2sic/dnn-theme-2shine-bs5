<%@ Control language="C#" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" TagName="LOGIN" Src="~/Admin/Skins/Login.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.DDRMenu.TemplateEngine" Assembly="DotNetNuke.Web.DDRMenu" %>
<%@ Register TagPrefix="dnn" TagName="MENU" src="~/DesktopModules/DDRMenu/Menu.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>

<%-- Change the page title to contain the breadcrumbi in an SEO optimized way --%>
<%@ Register TagPrefix="tosic" TagName="PageTitle" src="controls/optimize-page-title.ascx" %>
<tosic:PageTitle runat="server" />

<%-- Set common CSS classes on the body which determine the Layout 
  Layout="Full" are: Default, Wide, Full, Box
  Navigation="Left": Right, Center, Left
--%>
<%@ Register TagPrefix="tosic" TagName="BodyCssClasses" src="controls/body-css-classes.ascx" %>
<tosic:BodyCssClasses runat="server" Layout="default" Navigation="right"/>

<%-- Activate Quick-Edit in empty pages if 2sxc is installed
  more infos on 2sxc quick-edit: https://2sxc.org/en/blog/post/quick-edit-2-add-move-delete-modules-in-preview-touch-capable-for-dnn
--%>
<%@ Register TagPrefix="tosic" TagName="SxcQuickEdit" src="controls/2sxc-quickedit.ascx" %>
<tosic:SxcQuickEdit runat="server" />

<%-- Include Google Font 
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
--%>


<a class="sr-only sr-only-focusable" href="#content"><%= LocalizeString("SkipLink.MainContent") %></a>

  <header>
    <div class="ly-container d-flex justify-content-between align-items-center px-1 px-sm-2 px-md-3 px-lg-4 py-1">			
      <a class="ly-logo" href="/" title="Bootstrap 5 Instant (change this in the default.ascx)">			
        <img alt="Logo" class="img-fluid" src="<%=SkinPath%>images/logo.svg" data-fallback="<%=SkinPath%>images/logo.png" onerror="this.src=this.getAttribute('data-fallback');this.onerror=null;">
      </a>
      <nav id="nav-mobile">
        <div class="ly-header-mobile">
          <div class="ly-container">
            <a class="ly-logo" href="/" title="Bootstrap 5 Instant (change this in the default.ascx)">			
              <img alt="Logo" class="img-fluid" src="<%#SkinPath%>images/logo.svg" data-fallback="<%#SkinPath%>images/logo.png" onerror="this.src=this.getAttribute('data-fallback');this.onerror=null;">
            </a>
          </div>
        </div>
        <div class="ly-nav-mobile-container">
          <dnn:MENU MenuStyle="nav/main-mobile" NodeSelector="*,0,6" runat="server" />
        </div>
      </nav>
      <div id="nav-icon" class="ly-hamburger" title="Menu">
        <div>
        <span></span>
        <span></span>
        <span></span>
        </div>
      </div>
      <nav id="nav-desktop" class="navbar d-none d-lg-flex">
        <dnn:MENU MenuStyle="nav/main" NodeSelector="*,0,0" runat="server" />
      </nav>
    </div>
  </header>

  <main>
  <div class="ly-header-pane <%= (HeaderPane.Attributes["class"] ?? "").Contains("DNNEmptyPane") ? "ly-header-pane-empty" : "" %>">
    <div id="HeaderPane" runat="server" containertype="G" containername="Invisible Container" containersrc="default.ascx"></div>
  </div>
  
    <div class="ly-container pt-2 pt-md-3 pt-lg-4">			
      <div id="ContentPane" runat="server" containertype="G" containername="Invisible Container" containersrc="default.ascx"></div>
      <div class="row">
        <div class="col-xs-12 col-lg-9 order-lg-2 ly-col-contentpane">
          <div id="RightPane" runat="server" containertype="G" containername="Invisible Container" containersrc="default.ascx"></div>
        </div>
        <div class="col-xs-12 col-lg-3 order-lg-1 ly-col-leftpane">
          <div id="nav-sub" class="d-none d-sm-block">
            <dnn:MENU MenuStyle="nav/sub" NodeSelector="+0,0,2" runat="server" />
          </div>
          <div class="d-block d-sm-none">
            <dnn:MENU MenuStyle="nav/sub" NodeSelector="CurrentChildren" runat="server" />
          </div>
        </div>
      </div>
    <a class="ly-top" href="#" title="Nach oben">
      <svg xmlns="http://www.w3.org/2000/svg" width="19.032" height="20.034" viewBox="0 0 19.032 20.034">
        <g id="Group_2" data-name="Group 2" transform="translate(-1055.984 -551.276)">
          <path id="Path_2" data-name="Path 2" d="M8.1,16.2,0,8.1,8.1,0" transform="translate(1073.602 552.69) rotate(90)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
          <line id="Line_1" data-name="Line 1" y2="17.599" transform="translate(1065.481 552.711)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
        </g>
      </svg>
    </a>
  </main>

<footer>
  <div class="ly-container py-2 px-md-2 px-lg-3 px-xl-4 d-flex justify-content-md-between flex-column flex-md-row text-white">
    <ul class="ly-footer-address clearfix" itemscope itemtype="http://schema.org/LocalBusiness">
      <li>
        <strong itemprop="name">Bootstrap 5 Instant</strong>
      </li>
      <li>
        <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
          <span itemprop="streetAddress">Instant Road 77</span>,
          <span itemprop="postalCode">50355</span>
          <span itemprop="addressLocality">Instant City</span>,
          <span itemprop="addressCountry">Instant Country</span>
        </span>
      </li>
        <li><a href="tel:+41817506777">+41 81 750 67 77</a></li>
      <li>
        <span data-madr1="instant" data-madr2="example" data-madr3="com" data-linktext="instant@example.com"></span>
      </li>
    </ul>
    <div class="ly-footer-imprint">
        <a href="<%= LocalizeString("Imprint.Url") %>" title="<%= LocalizeString("Imprint.Text") %>"><%= LocalizeString("Imprint.Text") %></a> | 
        <a href="<%= LocalizeString("Privacy.Url") %>" title="<%= LocalizeString("Privacy.Text") %>"><%= LocalizeString("Privacy.Text") %></a><br>
        <dnn:login id="DnnLogin" cssclass="ly-login d-none d-lg-inline-flex" runat="server" />
    </div>
  </div>
</footer>


<!-- include files -->
<dnn:DnnCssInclude runat="server" FilePath="dist/theme.min.css" Priority="100" PathNameAlias="SkinPath" />
<dnn:DnnJsInclude runat="server" FilePath="dist/lib/bootstrap.min.js" ForceProvider="DnnFormBottomProvider" Priority="100" PathNameAlias="SkinPath"  />
<dnn:DnnJsInclude runat="server" FilePath="dist/theme.min.js" ForceProvider="DnnFormBottomProvider" Priority="130" PathNameAlias="SkinPath" />
<script runat="server">
  
  protected override void OnLoad(EventArgs e)
  {
    base.OnLoad(e);
    AttachCustomHeader("<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />");

    // Set various FavIcon and Icon headers according to best practices
    // The next line is disabled by default, because it requires RazorBlade to be installed.
    // How to install RazorBlade 3: https://azing.org/dnn-community/r/zbh8JC5T
    // How to create best-practice FavIcons: https://azing.org/dnn-community/r/UhgWJbxh
    // ToSic.Razor.Blade.HtmlPage.AddIconSet(SkinPath + "favicon.png");
  }
  
  protected void AttachExternalCSS(string CSSPath) { AttachCustomHeader("<link type='text/css' rel='stylesheet' href='" + CSSPath + "' />"); }
  protected void AttachExternalJS(string JSPath) { AttachCustomHeader("<script type='text/javascript' src='" + JSPath + "'></scr" + "ipt>"); }
  protected void AttachCustomHeader(string CustomHeader) { HtmlHead HtmlHead = (HtmlHead)Page.FindControl("Head"); if ((HtmlHead != null)) { HtmlHead.Controls.Add(new LiteralControl(CustomHeader));	}	}
  
  protected string LocalizeString(string key)
  {
      return Localization.GetString(key, Localization.GetResourceFile(this, System.IO.Path.GetFileName(this.AppRelativeVirtualPath)));
  }
</script>

