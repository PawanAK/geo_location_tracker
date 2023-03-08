const where =async function(ip_ad)
{
    const res = await fetch(
"http://api.ipapi.com/api/"+ip_ad+"?access_key=c4f275366698ec39f39e3dead7936349");

const data = await res.json();
console.log(data);

document.querySelector('.info_Ip_val').textContent=data.ip;
document.querySelector(".info_Country_val").textContent = data.country_name +" ("+ data.location.capital+')';
document.querySelector(".info_State_val").textContent = data.region_name;
document.querySelector(".info_City_val").textContent = data.city;

mmap(data.latitude,data.longitude)
}

const Ipp=document.querySelector('.bar_Search').value;


where(Ipp);

const mmap= function(lat,lng)
{
    const coords=[lat,lng]

    const mymap = L.map("map").setView(coords, 13);
    const marker = L.marker(coords).addTo(mymap);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
      {
        maxZoom: 18,
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
      }
    ).addTo(mymap);
}

// const mymap = L.map("map").setView(coords, 13);
// const marker = L.marker(coords).addTo(mymap);

// L.tileLayer(
//   "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
//   {
//     maxZoom: 18,
//     attribution:
//       'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
//       'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     id: "mapbox/streets-v11",
//     tileSize: 512,
//     zoomOffset: -1,
//   }
// ).addTo(mymap);

