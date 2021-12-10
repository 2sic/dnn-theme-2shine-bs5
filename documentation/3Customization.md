---
layout: doc
title: Customization 
permalink: /customization/
---

---

# <center> {{page.title}}  </center>

---

## Important: Before you start customizing 

2shine is built to give you many different customization possibilites. You will have to prepare for your customization by installing **node.js** and some **dependenzies** that are needed to convert your changes to CSS and JS. 

1. Make sure node.js is installed - or [install Node now](https://nodejs.org/en/download/). This will also install NPM (the node-package-manager).

2. Install all Install all dependencies by running this command in your root folder: 

    > `npm ci`

    1. If it says it can't run, then try running:

        > `npm install`

    2. **Verify it works:** to verify **webpack** is working and watching for changes to convert, run: 

        > `npm run build-prod`

You should now be abble to make changes to your installation of 2shine. 

---

## The styling file system 

You can find all of the different stylesheets in the **src > scss** folder. In this folder you will also find some files that have the prefix **dnn** those files are used to make Dnn specific style changes like changes to the Dnn UI.  

1. theme.scss -> This file is the entry point. Webpack takes this and generates the dist/theme.min.css
2. _variable.scss -> This file prepares all the variables
3. _page-customizations.scss -> This file can be used to define page specific customization 
4. components -> In the components all the component styles are defined 
5. layout-variation -> Is used to define all the different layout variations and make changes to them

### Scss variables

You can find the standart scss variables in the 2shine skin folder. From there you go to **src > scss > _variables.scss**. There are variables with the prefix **tosic** which just means those are variables that we prepared and are set for our preference. Most of the variables are pretty self-explanatory but we will take a short look at the important ones anyway.  

- $primary      -> with this variable you can change the primary color of the skin 
- $secondary    -> with this variable you can change the secondary color of the skin 
- $theme-colors -> with this variable you can add or change theme-colors which can be used like BS Classes (like .bg-yourcolor) 

| **Variable** | **Description** |
|:-------------|:----------------|
|$primary         | -> with this variable you can change the primary color of the skin |
|$secondary       | -> with this variable you can change the secondary color of the skin |
|$theme-colors    | -> with this variable you can add or change theme-colors which can be used like BS Classes (like .bg-yourcolor) |
|$font-... | -> with those variables you can control everything about your font | 

