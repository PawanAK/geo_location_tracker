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
    const map = L.map("map").setView(coords, 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(coords)
    .addTo(map)
    .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
    .openPopup();
}
