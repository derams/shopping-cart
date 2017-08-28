window.onload=function(){
// 倒计时
// 最终时间
var taagetDate=31,targetHours=0,targetMinutes=0,targetSeconds=0;
//获取当前时间
  function time(){
    var date=new Date()
    var nowDate=date.getDate()
    var nowHours=date.getHours()
    var nowminutes=date.getMinutes()
    var nowSeconds=date.getSeconds()
    //计算当前距最终是时间
    var showDate=taagetDate-nowDate
    var showSecond=targetSeconds-nowSeconds
    var showMinute=targetMinutes-nowminutes
    var showHour=targetHours-nowHours
    if(targetSeconds<nowSeconds){
        showSecond=showSecond+60
        showMinute=showMinute-1
    }
    if(targetMinutes<nowminutes){
        showMinute=showMinute+60
        showHour=showHour-1
      }
    if(targetHours<nowHours){
      showHour=showHour+24
      // taagetDate=nowDate-24
    }
    if(showDate<10){
        showDate='0'+showDate
      }
    if(showHour<10){
        showHour='0'+showHour
      }
    if(showMinute<10){
      showMinute='0'+showMinute
    }
    if(showSecond<10){
      showSecond='0'+showSecond
    }
    document.querySelector('.day em').innerHTML=showDate
    document.querySelector('.hour em').innerHTML=showHour
    document.querySelector('.minute em').innerHTML=showMinute
    document.querySelector('.second em').innerHTML=showSecond
    // console.log(showDate+':'+showHour+':'+showMinute+':'+showSecond)
    if(nowDate==taagetDate&&nowHours==targetHours&&nowMinutes==targetMinutes&&nowSeconds==targetSeconds){
      clearInterval(stop)
    }
  }
  time()
  var stop=setInterval(time,1000)
  //款式
    var phone=document.querySelectorAll('.style span>a')
    for(var i=0;i<phone.length;i++){
      phone[i].index=i
      phone[i].onclick=function(event){
        var ind=this.index
        event.preventDefault()
        for(var j=0;j<phone.length;j++){
          if(j!=ind){
            phone[j].style.backgroundColor='#2b2e33'
          }
        }
        phone[ind].style.backgroundColor='#fdd900'
      }
    }
  //尺码
    var size=document.querySelectorAll('.size span>a')
    for(var i=0;i<size.length;i++){
      size[i].index=i
      size[i].onclick=function(){
        var ind=this.index
        event.preventDefault()
        for(var j=0;j<size.length;j++){
          if(j!=ind){
            size[j].style.backgroundColor='#2b2e33'
          }
        }
        size[ind].style.backgroundColor='#fdd900'
      }
    }
    // //点击预购
    // var button=document.querySelector('.button')
    // button.onclick=function(event){
    //   event.preventDefault()

    // }
    //点击减号
    var sub=document.querySelector('.number .sub')
    var num=parseFloat(document.querySelector('.number span>b').innerHTML)
    sub.onclick=function(){
      event.preventDefault()

      if(num>1){
        num=num-1
      }

    document.querySelector('.number span>b').innerHTML=num
    }
     //点击加号
    var add=document.querySelector('.number .add')
    var num=parseFloat(document.querySelector('.number span>b').innerHTML)
    add.onclick=function(){
      event.preventDefault()
      num=num+1
    document.querySelector('.number span>b').innerHTML=num
    }
}
