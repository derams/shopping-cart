window.onload=function(){
  var close=document.querySelector('.box_up>a')
  console.log(close)
  var big=document.querySelector('.wrap1')
  var box=document.querySelector('.box')
  close.onclick=function(event){
      event.preventDefault()
      big.style.display='none'
  }
  big.onclick=function(){
    big.style.display='none'
  }
  box.onclick=function(event){
    event.stopPropagation()
  }
}