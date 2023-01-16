const btn=document.querySelector('.btn')
const notification = document.getElementById("notification")

let count=0
btn.onclick=()=>{
count++;
if(count<1){
    notification.style.visibility='hidden'
}else if(count>99){
    notification.style.visibility = "visible";
    notification.innerHTML = '99+';
}
else{
    notification.style.visibility = "visible";
    notification.innerHTML = count;
}

}