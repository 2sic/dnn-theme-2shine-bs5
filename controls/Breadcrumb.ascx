<%@ Control Language="C#" AutoEventWireup="true" Inherits="DotNetNuke.Entities.Modules.PortalModuleBase" %>
<%@ Import Namespace="DotNetNuke.Entities.Tabs" %>
<%@ Import Namespace="System.Collections.Generic" %>

<div class="theme-page-breadcrumb">
	<div class="container py-1">
		<nav style="--bs-breadcrumb-divider: '›';" aria-label="breadcrumb">
			<ol class="breadcrumb mb-0" itemscope itemtype="https://schema.org/BreadcrumbList">
				<li class="breadcrumb-item first" itemscope itemprop="itemListElement" itemtype="https://schema.org/ListItem">
					<a itemprop="item" class="breadcrumb-item-home" href="<%= DotNetNuke.Common.Globals.NavigateURL(PortalSettings.HomeTabId) %>">
						<span itemprop="name"><%= LocalizeString("Home.Text") %></span>
					</a>
					<a href="javascript:void(0)" class="breadcrumb-item-trigger">...</a>
					<meta itemprop="position" content="1" />
				</li>
				<%
					// Get TabId and PortalId from the DNN context
					int tabId = PortalSettings.Current.ActiveTab.TabID; // TabId for the current page
					int portalId = PortalSettings.Current.PortalId; // PortalId for the current Portal

					var tabController = new DotNetNuke.Entities.Tabs.TabController();
					var currentTab = tabController.GetTab(tabId, portalId, false);

					if (currentTab != null)
					{
						// List of all tabs
						var breadcrumbTabs = new List<DotNetNuke.Entities.Tabs.TabInfo>();

						// Get Parentpage
						while (currentTab != null)
						{
							breadcrumbTabs.Insert(0, currentTab); // Add current tab to the list
							currentTab = currentTab.ParentId > 0 ? tabController.GetTab(currentTab.ParentId, portalId, false) : null;
						}

						// Generate the breadcrumb
						int position = 2; // Start from 2 since Home is 1
						for (int i = 0; i < breadcrumbTabs.Count; i++)
						{
							var tab = breadcrumbTabs[i];
							string cssClass = "breadcrumb-item";
							if (i == 0) cssClass += " first";
							if (i == breadcrumbTabs.Count - 1) cssClass += " last";
							if (tab.TabID == tabId) cssClass += " active";
							%>
							<li class="<%= cssClass %>" itemscope itemprop="itemListElement" itemtype="https://schema.org/ListItem">
								<% if (tab.TabID == tabId) { %>
									<span itemprop="name"><%= tab.TabName %></span>
								<% } else { %>
									<a href="<%= tab.FullUrl %>" itemprop="item">
										<span itemprop="name"><%= tab.TabName %></span>
									</a>
								<% } %>
								<meta itemprop="position" content="<%= position %>" />
							</li>
							<%
							position++;
						}
					}
				%>
			</ol>
		</nav>
	</div>
</div>

<script runat="server">

  protected string LocalizeString(string key)
  {
      return Localization.GetString(key, ResourceFilePath);
  }

  protected string ResourceFilePath
  {
    get
    {
      return _resPath ?? (_resPath = PortalSettings.Current.ActiveTab.SkinPath + "App_LocalResources/2shine.resx" );
    }
  }
  private string _resPath;

</script>