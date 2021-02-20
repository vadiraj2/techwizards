



const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }


  if (scrollHeight > 500) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});


const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
   
    e.preventDefault();
   
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
  
    linksContainer.style.height = 0;
  });
});





const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();


const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
 

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
 
});

//services

var infoIndex=1;
var imageIndex=2;
servicesIndex=1;
const services=["Servers","CCTV","Computer & Laptop Service","Data Recovery","OS Installation","Antivirus"];
const info=["We deal with all types of servers such as rackmount and standalone of all brand such as IBM,Hp ,Dell and CISCO. Service includes installation ,maintenance ,health checkup, hardware upgradation such as faulty HDD,FAN ,Motherboard replacement ,capacitor replacement etc, and software upgradation as disk partitioning, RAID configuration ,data dumping and updating OS. Servers once installed will be on 24hrs maintenance which requires diagnostics and collecting of logs hence maintenance will also be provided with upto date.",
"Installation of all types of cctv camera’s with mobile view option are done. Cctv camera’s for school and college premises,banks ,office & personal use & home purpose are been installed. Camera’s for children in kindergarten accessible through parents from their smarthphones are also been installed .",
"Basic troubleshooting to complex repair and replacement every brand pc and laptop service is being done here. Genuine Windows 8.1 and 10 activation, Backlight led screen issue, RAM upgrade, panel replacement , keyboard keys issue and all kinds of laptop and pc issues are fixed.",
"Formatted pendrives , Hdd , local drive , deleted files are recovered with 100% surety .",
"You might be familiar with the word “hardware issue detected “ when you try to turn on your laptop /pc the reason behind this is crashing of OS. So need not to worry we have got this one, as the only solution it need is installatiuon of OS.Some of your laptops/Pcs might be running outdated Os like Windos Vista & Windows XP.We do have genuine OS for both.",
"Antivirus play major role in your pc. It protects malicious/malware software,cache & cookies from entering into your pc/laptop. It also helps your pc perform smooth and speed. So if you are thinking of purchasing a new /refurbished pc/laptop without any second thought install antivirus to keep your laptop safe. Installation of antivirus such as QuickHeal and NPAV is done here. Software price is reasonable & similar to market price."];

const images=["images/server.jfif","images/server2.png","images/cctv.jpg","images/mobilecamera.jpg","images/laptop.jfif","images/ram.jpg","images/dataaa.webp","images/data-recovery-500x500.jpg","images/oscrash.jfif","images/windows.jfif","images/npav.jpg","images/quicker.png"];

var detail= document.querySelector(".info");
var addImage1=document.querySelector(".image1");
var addImage2=document.querySelector(".image2");
var service=document.querySelector(".service");
var lefty=document.querySelector(".left");
var righty=document.querySelector(".right");
var image1= document.querySelector(".img1");
var image2= document.querySelector(".img2");

righty.addEventListener("mouseover",rightMove);
righty.addEventListener("click",rightMove);

function rightMove(){
  if(!(servicesIndex>5)){
      if(servicesIndex<0){  
       defaultvalues();}
  service.innerHTML=services[servicesIndex];
  addImage1.setAttribute("src",images[imageIndex]);
  addImage2.setAttribute("src",images[imageIndex+1]);
  detail.innerHTML=info[infoIndex];
  increment();
}
}

lefty.addEventListener("mouseover",leftMove);
lefty.addEventListener("click",leftMove);

function leftMove(){
  if(servicesIndex>services.length-1){
      defaultvaluesleft();
    }
  if(!(servicesIndex<0)){
      service.innerHTML=services[servicesIndex];
      addImage2.setAttribute("src",images[imageIndex]);
       addImage1.setAttribute("src",images[imageIndex-1]);
      detail.innerHTML=info[infoIndex]; 
      decrement();
  }
}


function defaultvalues(){
    servicesIndex=0;
    imageIndex=0;
    infoIndex=0;
}
function defaultvaluesleft(){
    servicesIndex=services.length-1;
    imageIndex=images.length-1;
    infoIndex=info.length-1;
}
function decrement(){
  servicesIndex--;
  imageIndex= imageIndex-2;
  infoIndex--;
}

function increment(){
  servicesIndex++;
  imageIndex=imageIndex+2;
  infoIndex++;
  console.log(servicesIndex);
}