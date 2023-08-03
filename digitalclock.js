const hourElement = document
.getElementById("hour");

const minuteElemnt = document
.getElementById("minutes");

const secondElemnt = document
.getElementById("seconds");

const ampmElement = document
.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    if(h > 12){
        h = h - 12
        ampm = "PM"
    }
    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;
    hourElement.innerText = h;

    minuteElemnt.innerText = m;
    
    secondElemnt.innerText = s;
    ampmElement, (innertext = ampm)
    setTimeout(() => {
    updateClock()
    }, 1000)

}
updateClock()
