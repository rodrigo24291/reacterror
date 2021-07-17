
export const Re= async({pais,ciudad})=>{
    const api=`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=430fe26998dfb30d155f549706857a18`;
const sultado=await fetch(api);
const final=await sultado.json()

return final;
}