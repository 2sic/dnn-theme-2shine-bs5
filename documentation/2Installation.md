---
layout: doc
title: Installation 
permalink: /gettingstarted/
---
---

# <center> {{page.title}} </center>

---

There are two methods to get started with 2shine. The first one is the easier one and recommended for beginners. The second one is more difficult and only recommended for people who know what they are doing. It is recommended that you download Dnn before you beginn with the installation process. To find out how to download and install Dnn visit their [official website](https://www.dnnsoftware.com/). 

## Install 2shine with the Dnn extension manager 

For this method you are required to have a Dnn implementation installed and running. You can do that easily and on your computer with tools like **[nvquickSITE](https://www.nvquicksite.com/)**.
1. Go to the  **[2shine github page](https://github.com/2sic/dnn-theme-2shine-bs5)** and download the ZIP file provided there
2. In your running Dnn instance:
    1. Go to **Settings**
    2. Go to **Extensions**
    3. Click on the **installation wizard** 
    4. Then drag and drop your ZIP File into the interface or search for it in the file explorer that will open with a click 
    5. Go to **Manage**
    6. Go to **Themes**
    7. Select the 2shine skin

**Important:** The skin won't be applied to already existing pages. [Apply skin to already existing pages](#apply-skin-to-already-existing-pages)

---

## Install 2shine by cloning the repository 
1. Go to your project files > Go to **Website** > Go to **Portals** > Go to **_default** > Go to **Skins**
2. Open the Skins folder in your console 
    1. Option 1: Right click and select **Open with Powershell** or **Open with Command Prompt**
    2. Option 2: Click on the folder Path in the explorer and write **cmd** and press enter 
    3. Option 3: Navigate to the folder with your console
3. Clone the repository into this folder with the `git clone` command:
    - `git clone https://github.com/2sic/dnn-theme-2shine-bs5.git`

4. Change skin folder name to project's name
5. Delete the existing repository 
        1. Command Line: in the **root** folder of the skin, open cmd and execute "`rd /s /q .git`"
        2. Powershell: In the **root** folder of the skin, open powershell and execute "`rm -r -fo .git`"
6. Initialize a new repository with VS Code and issue and initial commit with all the files present in the root folder  
7. Apply the skin to an [**existing page**](#apply-skin-to-already-existing-pages) or the [**whole site**](#apply-skin-to-whole-site)

---

### Apply skin to whole site 

1. Go to **Manage** > **Themes** 
2. Select the desired theme 
3. Confirm your choice
4. **Reload** the page to see changes 
5. **Existing pages wont update**- for these you will have to [apply the skin manually](#apply-skin-to-already-existing-pages) 

### Apply skin to already existing pages

1.Go to **Content** > **Pages**
2. Select relevant **Page** > Go to **Advanced** > **Appearance** and select the theme    
3. Save the changes after the selection 
4. Reload the page to see changes 


