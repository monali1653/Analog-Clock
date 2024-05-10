setInterval(()=>{
    date = new Date();
    hr=date.getHours();
    min=date.getMinutes();
    sec=date.getSeconds();
    hrhand=30*hr + min/2;
    minhand=6*min;
    sechand=6*sec;
    hourshand.style.transform = `rotate(${hrhand}deg)`;
    minuteshand.style.transform = `rotate(${minhand}deg)`;
    secondshand.style.transform = `rotate(${sechand}deg)`;

}, 1000);