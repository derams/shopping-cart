window.onload=function(){
  //新增地址
  var address=document.querySelector('.address1')
  var big=document.querySelector('.big_wrap')
  var box=document.querySelector('.box')
  var close=document.querySelector('.con_up a')
  var people=document.querySelector('.people1 p:nth-child(1) input')
  var phone=document.querySelector('.people1 p:nth-child(2) input')
  var area=document.querySelector('.area input')
  var name1=document.querySelectorAll('.name1 a')
  var oldli=document.querySelectorAll('.news>ul li')
  console.log(name1)
  address.onclick=function(event){
    event.preventDefault()
    big.style.display='block'
  }
  big.onclick=function(event){
    big.style.display='none'
  }
  box.onclick=function(event){
    event.stopPropagation()
  }
  close.onclick=function(event){
    event.preventDefault()
    big.style.display='none'
  }

//收货人
  people.onblur=function(){
    var val=people.value
    if(val==''){
      people.previousSibling.previousSibling.previousSibling.style.display='block'
    }else{
      people.previousSibling.previousSibling.previousSibling.style.display='none'
    }
  }
//手机号
  phone.onblur=function(){
    var val=phone.value
    if(val!=''){
      var res=/^1[34578]\d{9}$/
      if(res.test(val)==false){
        phone.previousSibling.previousSibling.previousSibling.style.display='block'
      }else{
        phone.previousSibling.previousSibling.previousSibling.style.display='none'
      }
    }
  }
//地址
  area.onblur=function(){
    var val=area.value
    if(val==''){
      area.parentNode.querySelector('span:nth-child(2)').style.display='block'
    }else{
      area.parentNode.querySelector('span:nth-child(2)').style.display='none'
    }
  }
// 地名按钮
  for(var i=0;i<name1.length;i++){
    name1[i].index=i
    name1[i].onclick=function(event){
      event.preventDefault()
      var ind=this.index
      for(var j=0;j<name1.length;j++){
        if(j!=ind){
          name1[j].style.backgroundColor='#fff'
        }
      }
      name1[ind].style.backgroundColor='#fdd900'
    }

  }

  //发票
  var bill=document.querySelectorAll('.bill a')
  var conserve=document.querySelector('.conserve')
  for(var i=0;i<bill.length;i++){
    bill[i].index=i
    bill[i].onclick=function(event){
      event.preventDefault()
      var ind=this.index
      for(var j=0;j<bill.length;j++){
        if(j!=ind){
          bill[j].style.backgroundImage='none'
          bill[j].style.border='3px solid #babec9'
        }
        bill[ind].style.backgroundImage='url("../images/332_03.png")'
        bill[ind].style.border='0px'
        if(ind==0){
          conserve.style.display='none'
        }else{
          conserve.style.display='block'
        }
      }
    }
  }

  //点li
  for(var i=0;i<oldli.length;i++){
    oldli[i].index=i
    oldli[i].onclick=function(){
      var ind=this.index
      for(var j=0;j<oldli.length;j++){
        if(j!=ind){
          oldli[j].style.backgroundImage='none'
        }
      }
      oldli[ind].style.backgroundImage='url("../images/543_03.png")'
    }
  }
  //点显示更多
  var more=document.querySelector('.more')
  more.onclick=function(event){
    event.preventDefault()
    for(var i=0;i<oldli.length;i++){
       oldli[i].style.display='block'
       more.style.display='none'
    }
  }

  //点删除
  var clear=document.querySelectorAll('.clear')
  var box=document.querySelector('.box')
  for(var i=0;i<clear.length;i++){
    clear[i].index=i
    clear[i].onclick=function(event){
      event.preventDefault()
      var ind=this.index
      var clear_s=clear[ind].parentNode.parentNode.querySelector('.box_s')
      clear_s.style.display='block'
      // 点确定删除
      var ok=clear[ind].parentNode.parentNode.querySelector('.box_s a:nth-child(1)')
          ok.onclick=function(event){
          event.preventDefault()
          this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
        }
      //点不删除
      var noOk=clear[ind].parentNode.parentNode.querySelector('.box_s a:nth-child(2)')
      noOk.onclick=function(event){
        event.preventDefault()
        var clear_s=clear[ind].parentNode.parentNode.querySelector('.box_s')
          clear_s.style.display='none'
      }
    }
  }


  //新增地址
  var btn=document.querySelector('.btn a')
  var ul=document.querySelector('.news ul')
  var li=document.querySelector('.one')
  btn.onclick=function(event){
    event.preventDefault()
    var peo_val=people.value
    var phone_val=phone.value
    var sheng_val=document.querySelector('.one1').value
    var shi_val=document.querySelector('.two1').value
    var qu_val=document.querySelector('.three1').value
    var area_val=area.value
    var newli=document.createElement('li')
    newli.innerHTML='<p><i class=news1>&#xe6ee;</i>'+peo_val+'<br /><i class=news1>&#xe618;</i>'+sheng_val+''+shi_val+''+qu_val+''+area_val+'<br /><i class=news1>&#xe6b9;</i>'+phone_val+'</p><p class=clearfix><a href=#>设为默认</a><a href=#> <i class=news1>&#xe69d;</i>编辑</a><a class=clear href=#><i class=news1>&#xe608;</i>删除</a><a class=mo_ren href="#">默认</a></p><p class=box_s><a href=#>确定删除</a><a href=#>不删除</a></p>'
    newli.style.borderBottom='1px solid #d1d7e3'
    newli.className='clearfix'
    if(peo_val!=''&&phone_val!=''&&area_val!=''){
      ul.insertBefore(newli,li)
      big.style.display='none'
    }

    console.log(newli)
    //点删除
    var clear=document.querySelectorAll('.clear')
    var box=document.querySelector('.box')
    for(var i=0;i<clear.length;i++){
      clear[i].index=i
      clear[i].onclick=function(event){
        event.preventDefault()
        var ind=this.index
        var clear_s=clear[ind].parentNode.parentNode.querySelector('.box_s')
        clear_s.style.display='block'
        // 点确定删除
        var ok=clear[ind].parentNode.parentNode.querySelector('.box_s a:nth-child(1)')
            ok.onclick=function(event){
            event.preventDefault()
            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
          }
        //点不删除
        var noOk=clear[ind].parentNode.parentNode.querySelector('.box_s a:nth-child(2)')
        noOk.onclick=function(event){
          event.preventDefault()
          var clear_s=clear[ind].parentNode.parentNode.querySelector('.box_s')
            clear_s.style.display='none'
        }
      }
    }
  }


  //点设为默认
  var swmr=document.querySelectorAll('.news li p:nth-child(2) a:nth-child(1)')
  var mr=document.querySelectorAll('.mo_ren')
  for(var i=0;i<swmr.length;i++){
    swmr[i].index=i
      swmr[i].onclick=function(event){
        event.preventDefault()
        var ind=this.index
        mr[ind].style.display='block'
    }
  }
  //点默认
  for(var i=0;i<mr.length;i++){
    mr[i].index=i
      mr[i].onclick=function(event){
        event.preventDefault()
        var ind=this.index
        mr[ind].style.display='none'
    }
  }
}