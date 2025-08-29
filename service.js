// Heart count section
let count = 0
const heartCount = document.getElementById("heart-count")

const heartBtn1 = document.getElementById("heart-btn1")
const heartBtn2 = document.getElementById("heart-btn2")
const heartBtn3 = document.getElementById("heart-btn3")
const heartBtn4 = document.getElementById("heart-btn4")
const heartBtn5 = document.getElementById("heart-btn5")
const heartBtn6 = document.getElementById("heart-btn6")

heartBtn1.addEventListener("click",function(){
    count++
    heartCount.textContent = count
})

heartBtn2.addEventListener("click",function(){
    count++
    heartCount.textContent = count
})

heartBtn3.addEventListener("click",function(){
    count++
    heartCount.textContent = count
})

heartBtn4.addEventListener("click",function(){
    count++
    heartCount.textContent = count
})

heartBtn5.addEventListener("click",function(){
    count++
    heartCount.textContent = count
})

heartBtn6.addEventListener("click",function(){
    count++
    heartCount.textContent = count
})

// call section
let coin = 100
const balanceCoin = document.getElementById("balance")


const callBtn1 = document.getElementById("call-btn-1")
const callBtn2 = document.getElementById("call-btn-2")
const callBtn3 = document.getElementById("call-btn-3")
const callBtn4 = document.getElementById("call-btn-4")
const callBtn5 = document.getElementById("call-btn-5")
const callBtn6 = document.getElementById("call-btn-6")

// calling function

callBtn1.addEventListener("click",function(){
    if(coin < 20){
       return alert("Not enough coin")
    }
    else{
        coin -= 20;
        balanceCoin.textContent = coin
        alert("Calling National Emergency Number .\n999 ")
    }
})

callBtn2.addEventListener("click",function(){
    if(coin < 20){
       return alert("Not enough coin")
    }
    else{
        coin -= 20;
        balanceCoin.textContent = coin
        alert("Calling Police Helpline Number .\n999 ")
    }
})

callBtn3.addEventListener("click",function(){
    if(coin < 20){
       return alert("Not enough coin")
    }
    else{
        coin -= 20;
        balanceCoin.textContent = coin
        alert("Calling Fire Service Number .\n999 ")
    }
})

callBtn4.addEventListener("click",function(){
    if(coin < 20){
       return alert("Not enough coin")
    }
    else{
        coin -= 20;
        balanceCoin.textContent = coin
        alert("Calling Ambulance Service .\n1994-999999")
    }
})

callBtn5.addEventListener("click",function(){
    if(coin < 20){
       return alert("Not enough coin")
    }
    else{
        coin -= 20;
        balanceCoin.textContent = coin
        alert("Calling Women & Child Helpline .\n109")
    }
})

callBtn6.addEventListener("click",function(){
    if(coin < 20){
       return alert("Not enough coin")
    }
    else{
        coin -= 20;
        balanceCoin.textContent = coin
        alert("Calling Anti-Corruption Helpline .\n106")
    }
})

// Call history list

const callHistoryBtn1 = document.getElementById("call-btn-1")
const callHistoryBtn2 = document.getElementById("call-btn-2")
const callHistoryBtn3 = document.getElementById("call-btn-3")
const callHistoryBtn4 = document.getElementById("call-btn-4")
const callHistoryBtn5 = document.getElementById("call-btn-5")
const callHistoryBtn6 = document.getElementById("call-btn-6")

const time = new Date().toLocaleTimeString();

const clearBtn = document.getElementById("clear-history")
const historyList = document.getElementById("call-history-list")

const serviceName1 = document.getElementById("service-name-1").textContent
const serviceNumber1 = document.getElementById("service-num-1").textContent


const serviceName2 = document.getElementById("service-name-2").textContent
const serviceNumber2 = document.getElementById("service-num-2").textContent


const serviceName3 = document.getElementById("service-name-3").textContent
const serviceNumber3 = document.getElementById("service-num-3").textContent


const serviceName4 = document.getElementById("service-name-4").textContent
const serviceNumber4 = document.getElementById("service-num-4").textContent


const serviceName5 = document.getElementById("service-name-5").textContent
const serviceNumber5 = document.getElementById("service-num-5").textContent


const serviceName6 = document.getElementById("service-name-6").textContent
const serviceNumber6 = document.getElementById("service-num-6").textContent


callHistoryBtn1.addEventListener("click",function(){
    const div = document.createElement("div");
    div.className = "bg-[#fafafa] p-2 mt-[20px] rounded-lg";

    div.innerHTML = `<div class="flex items-center">
    <div><h1 class="font-[500]">${serviceName1}</h1>
      <p>${serviceNumber1}</p></div>
      <div class="text-gray-500 text-[15px]">${time}</div>
      </div>
    `;
    historyList.appendChild(div)

})

callHistoryBtn2.addEventListener("click",function(){
    const div = document.createElement("div");
    div.className = "bg-[#fafafa] p-3 mt-[20px] rounded-lg";

    div.innerHTML = `<div class="flex items-center">
    <div><h1 class="font-[500]">${serviceName2}</h1>
      <p>${serviceNumber2}</p></div>
      <div class="text-gray-500 text-[15px]">${time}</div>
      </div>
    `;
    historyList.appendChild(div)

})


callHistoryBtn3.addEventListener("click",function(){
    const div = document.createElement("div");
    div.className = "bg-[#fafafa] p-3 mt-[20px] rounded-lg";

    div.innerHTML = `<div class="flex items-center">
    <div><h1 class="font-[500]">${serviceName3}</h1>
      <p>${serviceNumber3}</p></div>
      <div class="text-gray-500 text-[15px]">${time}</div>
      </div>
    `;
    historyList.appendChild(div)

})


callHistoryBtn4.addEventListener("click",function(){
    const div = document.createElement("div");
    div.className = "bg-[#fafafa] p-3 mt-[20px] rounded-lg";

    div.innerHTML = `<div class="flex items-center">
    <div><h1 class="font-[500]">${serviceName4}</h1>
      <p>${serviceNumber4}</p></div>
      <div class="text-gray-500 text-[15px]">${time}</div>
      </div>
    `;
    historyList.appendChild(div)

})


callHistoryBtn5.addEventListener("click",function(){
    const div = document.createElement("div");
    div.className = "bg-[#fafafa] p-3 mt-[20px] rounded-lg";

    div.innerHTML = `<div class="flex items-center">
    <div><h1 class="font-[500]">${serviceName5}</h1>
      <p>${serviceNumber5}</p></div>
      <div class="text-gray-500 text-[15px]">${time}</div>
      </div>
    `;
    historyList.appendChild(div)

})


callHistoryBtn6.addEventListener("click",function(){
    const div = document.createElement("div");
    div.className = "bg-[#fafafa] p-3 mt-[20px] rounded-lg";

    div.innerHTML = `<div class="flex items-center">
    <div><h1 class="font-[500]">${serviceName6}</h1>
      <p>${serviceNumber6}</p></div>
      <div class="text-gray-500 text-[15px]">${time}</div>
      </div>
    `;
    historyList.appendChild(div)

})


// history clear funtion

clearBtn.addEventListener("click",function(){
    historyList.innerHTML = "";
})


// Copy button and count section

let copy = 0
const copyCount = document.getElementById("copy-count")

const copyBtn1 = document.getElementById("copy-btn1")
const copyBtn2 = document.getElementById("copy-btn2")
const copyBtn3 = document.getElementById("copy-btn3")
const copyBtn4 = document.getElementById("copy-btn4")
const copyBtn5 = document.getElementById("copy-btn5")
const copyBtn6 = document.getElementById("copy-btn6")

const serviceNumber_1 = document.getElementById("service-num-1").textContent;
const serviceNumber_2 = document.getElementById("service-num-2").textContent;
const serviceNumber_3 = document.getElementById("service-num-3").textContent;
const serviceNumber_4 = document.getElementById("service-num-4").textContent;
const serviceNumber_5 = document.getElementById("service-num-5").textContent;
const serviceNumber_6 = document.getElementById("service-num-6").textContent;


copyBtn1.addEventListener("click",function(){
    copy++
    copyCount.textContent = copy
    navigator.clipboard.writeText(serviceNumber_1) 
    alert(serviceNumber_1 + ".\nThe number has been copied")
})

copyBtn2.addEventListener("click",function(){
    copy++
    copyCount.textContent = copy
    navigator.clipboard.writeText(serviceNumber_2) 
    alert(serviceNumber_2 + ".\nThe number has been copied")
})

copyBtn3.addEventListener("click",function(){
    copy++
    copyCount.textContent = copy
    navigator.clipboard.writeText(serviceNumber_3) 
    alert(serviceNumber_3 + ".\nThe number has been copied")
})

copyBtn4.addEventListener("click",function(){
    copy++
    copyCount.textContent = copy
    navigator.clipboard.writeText(serviceNumber_4) 
    alert(serviceNumber_4 + ".\nThe number has been copied")
})


copyBtn5.addEventListener("click",function(){
    copy++
    copyCount.textContent = copy
    navigator.clipboard.writeText(serviceNumber_5) 
    alert(serviceNumber_5 + ".\nThe number has been copied")
})

copyBtn6.addEventListener("click",function(){
    copy++
    copyCount.textContent = copy
    navigator.clipboard.writeText(serviceNumber_6) 
    alert(serviceNumber_6 + ".\nThe number has been copied")
})

