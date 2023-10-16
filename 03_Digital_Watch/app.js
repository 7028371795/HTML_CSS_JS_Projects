//indian wath
let indianWatch=()=>
{
    let options={timezone :'Asia/Kolkata'};
    let currentDate=new Date().toLocaleDateString('en-US',options);
    let currentTime=new Date().toLocaleTimeString('en-US',options);
    document.querySelector('#india-time').innerText =currentDate;
    document.querySelector('#india-date').innerText =currentTime;

};
setInterval(indianWatch,1000);
let usaWatch=()=>
{
    let options={timezone :'America/New_York'};
    let currentDate=new Date().toLocaleDateString('en-US',options);
    let currentTime=new Date().toLocaleTimeString('en-US',options);
    document.querySelector('#usa-time').innerText =currentDate;
    document.querySelector('#usa-date').innerText =currentTime;

};
setInterval(usaWatch,1000)
let chinaWatch=()=>
{
    let options={timezone :'Asia/Shanghai'};
    let currentDate=new Date().toLocaleDateString('en-US',options);
    let currentTime=new Date().toLocaleTimeString('en-US',options);
    document.querySelector('#china-time').innerText =currentDate;
    document.querySelector('#china-date').innerText =currentTime;

};
setInterval(chinaWatch,1000)