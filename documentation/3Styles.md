---
layout: doc
title: Styles 
permalink: /styles/
---

---

# <center> {{page.title}}  </center>

---
With 2shine you have many different options to customize the style of the skin to your liking. We build in some convienience features like scss variables or different 
## The styling file system 

You can find all of the different stylesheets in the **src > scss** folder. In this folder you will also find some files that have the prefix **dnn** those files are used to make Dnn specific style changes like changes to the Dnn UI.  

1. theme.scss -> This file is the entry point. Webpack takes this and generates the dist/theme.min.css
2. _variable.scss -> This file prepares all the variables
3. _page-customizations.scss -> This file can be used to define page specific customization 
4. components -> In the components all the component styles are defined 
5. layout-variation -> Is used to define all the different layout variations and make changes to them

### Scss variables

You can find the scss variables in the 2shine skin folder. From there you go to **src > scss > _variables.scss**. Most of the variables are pretty self-explanatory but we will take a short look at the important ones anyway. 

- $primary      -> with this variable you can change the primary color of the skin 
- $secondary    -> with this variable you can change the secondary color of the skin 
- $theme-colors -> with this variable you can add or change theme-colors which can be used like BS Classes (like .bg-yourcolor) 

| **Variable** | **Description** |
|:-------------|:----------------|
|$primary         | -> with this variable you can change the primary color of the skin |
|$secondary       | -> with this variable you can change the secondary color of the skin |
|$theme-colors    | -> with this variable you can add or change theme-colors which can be used like BS Classes (like .bg-yourcolor) |
|$font-... | -> with those variables you can control everything about your font | 

There are many more variables but you can easily explore them by yourself. 