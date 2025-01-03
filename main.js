let darkMode=true;

function Time()
{
    let deg = 6;
    const date = new Date();
    let hour  = date.getHours()*30;
    let minute  = date.getMinutes() * deg;
    let second  = date.getSeconds() * deg;
    document.getElementById('hh').style.transform = `rotateZ(${hour+(minute/12)}deg)`;
    document.getElementById('mm').style.transform = `rotate(${minute}deg)`;
    document.getElementById('ss').style.transform = `rotate(${second}deg)`;
}
setInterval(Time,1000)    

function light_mode() {
    document.getElementById("hour").style.background = darkMode?"black":"wheat";
    document.getElementById("minute").style.background = darkMode?"black":"wheat";
    document.getElementById("center").style.background = darkMode?"black":"wheat";
    document.getElementById("clock").style.background = darkMode?"white":"#333";
    document.getElementById("body").style.background = darkMode?"#dee2e6":"#50555a";
    document.getElementById("darkMode").innerHTML = darkMode?"Dark Mode":"Light Mode";
    darkMode=!darkMode;
}

const clockContainer = document.querySelector(".clock_container");

document.addEventListener("DOMContentLoaded",() => {

    const messageContainer = document.createElement("div");
    messageContainer.classList.add("messageContainer");
    clockContainer.appendChild(messageContainer);
    document.body.style.filter = blur("10px");

    messageContainer.innerHTML =`
        <div>
            <h3>We Are Coming With Something New in Few Days</h3>        
        </div>
    `
})