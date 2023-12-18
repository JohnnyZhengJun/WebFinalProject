
// Make the image interactive
document.getElementById("myImage").onclick = function() {
    document.getElementById('content').style.animation = 'fadeOut 1s';
    setTimeout(function() {
        window.location.href = "FinalProject2/FinalProject2.html";
    }, 500);
};

var continents = ["Asia", "Africa", "North America", "South America", "Antarctica","Europe","Australia"];
var weather = ["Drought", "Heat Waves", "Hurricanes, Typhoons and Cyclones", "Tornadoes", "Wildfires", "Winter Storms"];

function createList(items) {
    var list = document.createElement('ul');
    for(var i = 0; i < items.length; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(items[i]));
        list.appendChild(item);
    }
    return list;
}

document.getElementById('ghg').addEventListener('click', function() {
    document.getElementById('ghg-info').style.display = 'block';
    this.classList.add('clicked');
}); // Creating ghg tag so that if the users want to know what it is. 

document.getElementById('continents').appendChild(createList(continents));
document.getElementById('weather').appendChild(createList(weather));

function search() {
    // Implement your search functionality here
}
