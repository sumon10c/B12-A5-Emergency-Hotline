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