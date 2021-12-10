---
layout: doc
title: Navigation 
permalink: /navigation/
---

---

# <center> {{page.title}}  </center>

---

2shine is built to be easy to customize to anyones needs one of the more often customized components is the navigation. 
So here you go a complete guide to 2shine navigation. 

The navigation files are located at: **2shine > nav** 

If you want to make any adjustements to the navigation which aren't already provided you will have to do that there. 


---

## Disabble Droppwon in the Navigation 

1. Go to **> controls > theme-body.ascx**
2. In this file search for the line where the navigation file is loaded. It should look like this: 

    > `<dnn:MENU MenuStyle="nav/mainDropdown" NodeSelector="*,0" runat="server" />`

3. On this line change the source from `nav/mainDropdown` to `nav/mainNoDropdown`

This is possible because we prepared a second version of our normal navbar which doesnt generate the dropdown menu. 

#### How we did it 

1. We created the alternative navbar without the dropdown menu in the **nav** folder **nav > mainNoDropdown**
2. Inside the new folder we created a **menudef.xml** and **template.cshtml** file.
3. The **menudef.xml** is only used to load the other file and doesn't need much code. 
4. The **template.cshtml** file is the navbar template and is simply a copy of the normal navbar without the dropdown code. 
5. So now if we wanted to switch between the two we just had to change the loaded file in the **theme-body.ascx** file.


## Change navbar from sticky behaviour

To make the navbar not sticky anymore you have to go to ** > src > scss > components > _header.scss ** in the header you will find the position attribute which is normally set to **sticky** you can change that property to whatever you like. 

**Important:** [Make sure **webpack** is running and building your changes.]() 