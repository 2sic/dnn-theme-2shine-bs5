<%-- 
  Set common CSS classes on the body which determine the Layout 
  Layout="Full" are: Default, Wide, Full, Box
  Navigation="Left": Right, Center, Left
--%>
<%@ Register TagPrefix="tosic" TagName="BodyCssClasses" src="controls/body-css-classes.ascx" %>
<tosic:BodyCssClasses runat="server" Layout="full" Navigation="right"/>

<%-- All Themes share the same main part - they only differ in the css classes etc. --%>
<!--#include file="controls/theme-body.ascx"-->