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

function light_mode() {
    document.getElementById("hour").style.background = "black";
    document.getElementById("minute").style.background = "black";
    document.getElementById("center").style.background = "black";
    document.getElementById("second").style.background = "red";
    document.getElementById("clock").style.background = "white";
    // document.getElementById("header").style.background = "white";
    document.getElementById("body").style.background = "#dee2e6";
}
function Dark_mode()
{
    document.getElementById("hour").style.background = "wheat";
    document.getElementById("minute").style.background = "wheat";
    document.getElementById("center").style.background = "wheat";
    document.getElementById("second").style.background = "red";
    document.getElementById("clock").style.background = "#333";
    document.getElementById("header").style.background = "#333";
    document.getElementById("body").style.background = "#50555a";
}
