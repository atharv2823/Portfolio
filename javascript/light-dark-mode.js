function dark()
{

   const darkimage = document.getElementById('dark');
   darkimage.classList.add("active");

   const lightimage = document.getElementById('light');
   lightimage.classList.remove("active");

    const darktheme = document.getElementById('body');
    darktheme.className = 'dark-theme';
    
}

function light()
{
    
    const darkimage = document.getElementById('dark');
   darkimage.classList.remove("active");

   const lightimage = document.getElementById('light');
   lightimage.classList.add("active");

   const lighttheme = document.getElementById('body');
    lighttheme.className = 'light-theme';
}