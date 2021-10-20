const API = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY";


const tomarDatos = (api) => {
    return fetch (api)
    .then((response) => response.json())
    .then((json) => {
        cicloDatos(json);

    })

    .catch((error) => {
    })

}

const cicloDatos =  (data) => {
let html = "";


data.photos.forEach(element => {
    console.log(element);

    html += '<div class="col">';
    html += '<div class="card h-100">';
    html += `<img src="${element.img_src}" class="card-img-top"`
    html += '<div class="card-body">';
    html += `<small class="text-muted"> ${element.earth_date}</small> <br>`;
    html += `<small class="text-muted"> ${element.id}</small>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";

});


document.getElementById("datosAPI").innerHTML = html;

};

tomarDatos(API);