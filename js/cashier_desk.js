window.onload=function(){
  var a=document.querySelectorAll('.choose p a')
  var action=document.querySelectorAll('.all')
  var payment=document.querySelector('.payment a')
  console.log(payment)
  for(var i=0;i<a.length;i++){
    a[i].index=i
      a[i].onclick=function(event){
      event.preventDefault()
      var ind=this.index
      for(var j=0;j<action.length;j++){
        if(ind!=j){
          action[j].style.display='none'
        }
      }
      action[ind].style.display='block'
    }
  }
}

//   //付款
//   payment.onclick=function(event){
//     event.preventDefault()
//     for(var i=0;i<action.length;i++){
//       if(i==0){
//         payment.setAttribute('href','../page/Bomb_box.html')
//       }
//     }
//   }
