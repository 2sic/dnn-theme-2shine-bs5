<script runat="server">
  // Settings which determine what variation of the skin is loaded
  // TODO Camel case
  public bool showSidebarNavigation = false;

  // Todo: probably do it like this, and move the Register & tosic:BodyCss etc. into the include?
  public string Layout = "Wide";

</script>
<%-- 
  Set common CSS classes on the body which determine the Layout 
  Layout="Full" are: Default, Wide, Full, Box
  TODO: "Header: ?"
  TODO: Remove Navigation?? 
  Navigation="Left": Right, Center, Left
  

--%>
<%@ Register TagPrefix="tosic" TagName="BodyCssClasses" src="controls/body-css-classes.ascx" %>
<tosic:BodyCssClasses runat="server" Layout="Wide" Navigation=""/>

<%-- All Themes share the same main part - they only differ in the css classes etc. --%>
<!--#include file="controls/theme-body.ascx"-->
