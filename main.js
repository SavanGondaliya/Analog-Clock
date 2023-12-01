function Time()
{
    let deg = 6;
    const date = new Date();
    let hour  = date.getHours()*30;
    let minute  = date.getMinutes()*deg;
    let second  = date.getSeconds()*deg;
    document.getElementById('hh').style.transform = `rotateZ(${hour+(minute/12)}deg)`;
    document.getElementById('mm').style.transform = `rotate(${minute}deg)`;
    document.getElementById('ss').style.transform = `rotate(${second}deg)`;
}
setInterval(Time,1000)    
// hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;