window.onload=function(){
  var a=document.querySelectorAll('.choose p a')
  var action=document.querySelectorAll('.all')
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