function showInfo() { // Showing & hiding the info about greenhouse gas & changing the color to purple when it's clicked.
    var info = document.getElementById('ghg-info');
    if (info.style.display === 'none') 
    {
        info.style.display = 'block';
    } 
    else 
    {
        info.style.display = 'none';
    }
    document.getElementById('ghg').style.color = 'purple';
}
