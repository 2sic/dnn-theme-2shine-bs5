<%--
  This is the main part of our Themes
  It's in a separate file so it can be shared

  Note that it's included using the include-syntax, not as a web-control. 
  This is important, because otherwise Dnn won't detect the panes in here
--%>

<%@ Control language="C#" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" TagName="LOGIN" Src="~/Admin/Skins/Login.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.DDRMenu.TemplateEngine" Assembly="DotNetNuke.Web.DDRMenu" %>
<%@ Register TagPrefix="dnn" TagName="MENU" src="~/DesktopModules/DDRMenu/Menu.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="ToSic" TagName="LanguageNavigation" src="controls/LanguageNavigation.ascx" %>
<%@ Register TagPrefix="dnn" TagName="BREADCRUMB" Src="~/Admin/Skins/BreadCrumb.ascx" %>
<%-- Change the page title to contain the breadcrumbi in an SEO optimized way --%>
<%@ Register TagPrefix="tosic" TagName="PageTitle" src="controls/optimize-page-title.ascx" %>
<tosic:PageTitle runat="server" />

<%-- 
  Set common CSS classes on the body which determine the Layout 
  Layout="Fullscreen" are: Default, FloatWideHeader, Fullscreen, Centered
  Navigation="Left": Right, Center, Left
--%>
<%@ Register TagPrefix="tosic" TagName="BodyCssClasses" src="controls/body-css-classes.ascx" %>
<tosic:BodyCssClasses runat="server" Layout="Landingpage" Navigation="right"/>

<%-- Activate Quick-Edit in empty pages if 2sxc is installed
  more infos on 2sxc quick-edit: https://2sxc.org/en/blog/post/quick-edit-2-add-move-delete-modules-in-preview-touch-capable-for-dnn
--%>
<%@ Register TagPrefix="tosic" TagName="SxcQuickEdit" src="controls/2sxc-quickedit.ascx" %>
<tosic:SxcQuickEdit runat="server" />

<main id="to-shine-page-main">
  <div id="ContentPane" runat="server" containertype="G" containername="2shineBS5" containersrc="fullwidthWithPadding.ascx"></div>
</main>

<style>
.personalBarContainer {
	display:none !important;
}
body {
	overflow-y: auto !important;
	margin-left:0 !important;
	background-color: transparent;
}
</style>

<!-- include files -->
<dnn:DnnCssInclude runat="server" FilePath="dist/theme.min.css" Priority="100" PathNameAlias="SkinPath" />
<dnn:DnnJsInclude runat="server" FilePath="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js" ForceProvider="DnnFormBottomProvider" Priority="100" PathNameAlias="SkinPath"  />
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
      return Localization.GetString(key, ResourceFilePath);
  }

  protected string ResourceFilePath
  {
    get
    {
      return _resPath ?? (_resPath = Localization.GetResourceFile(this, System.IO.Path.GetFileName(AppRelativeTemplateSourceDirectory + "2shine.resx" )));
    }
  }
  private string _resPath;
</script>

