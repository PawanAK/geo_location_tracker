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

}

const Ipp=document.querySelector('.bar_Search').value;


where(Ipp);