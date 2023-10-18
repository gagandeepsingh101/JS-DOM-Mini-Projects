setInterval(function() {
    let currentDate =new Date().getTime();

    let giveawayDate = new Date("October 28, 2023 12:00:00").getTime();
    let diff = giveawayDate - currentDate;
    var days=Math.floor(diff/(1000*60*60*24));
    var hours=Math.floor(diff%(1000*60*60*24)/(60*60*1000));
    var mins=Math.floor(diff%(60*60*1000)/(1000*60));
    var secs=Math.floor(diff%(60*1000)/(1000));
    document.querySelector("#day").textContent=days;
    document.querySelector("#hour").textContent=hours;
    document.querySelector("#min").textContent=mins;
    document.querySelector("#sec").textContent=secs;

    if (diff===0) {
        document.querySelector(".count-down").innerHTML="<h1>Sorry, giveaway is expired</h1>"
    }
},1000)
