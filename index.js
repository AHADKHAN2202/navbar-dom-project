const list1 = document.getElementById('list1');
const list2 = document.getElementById('list2');
const list3 = document.getElementById('list3');
const list4 = document.getElementById('list4');
const list5 = document.getElementById('list5');
const icon1 = document.getElementById('star-icon');
const icon2 = document.getElementById('google-drive');
const icon3 = document.getElementById('circle-icon');
const icon4 = document.getElementById('check-icon');


list1.addEventListener('mouseover',function(){
   
   let styles = {
      border : '2px solid black',
      "border-radius":'10px',
      "font-weight": 'lighter',
      backgroundColor : '#D3D3D3',
      padding : '5px 10px'
   }
   Object.assign(list1.style,styles);
})

list1.addEventListener('mouseout',function(){
   
   let styles = {
      "font-weight": 'lighter',
      backgroundColor : 'initial',
      border: "initial",
      'border-radius':' initial'
   }
   Object.assign(list1.style,styles);
})



list2.addEventListener('mouseover',function(){
   // orderedList.style.backgroundColor = "grey"
   let styles = {
      border : '2px solid black',
      "border-radius":'10px',
      "font-weight": 'lighter',
      backgroundColor : '#D3D3D3',
      padding : '5px 10px'
   }
   Object.assign(list2.style,styles);
})

list2.addEventListener('mouseout',function(){
   
   let styles = {
      "font-weight": 'lighter',
      backgroundColor : 'initial',
      border: "initial",
      'border-radius':' initial'
   }
   Object.assign(list2.style,styles);
})


list3.addEventListener('mouseover',function(){
   
   let styles = {
      border : '2px solid black',
      "border-radius":'10px',
      "font-weight": 'lighter',
      backgroundColor : '#D3D3D3',
      padding : '5px 10px'
   }
   Object.assign(list3.style,styles);
})

list3.addEventListener('mouseout',function(){
   
   let styles = {
      "font-weight": 'lighter',
      backgroundColor : 'initial',
      border: "initial",
      'border-radius':' initial'
   }
   Object.assign(list3.style,styles);
})


list4.addEventListener('mouseover',function(){
  
   let styles = {
      border : '2px solid black',
      "border-radius":'10px',
      "font-weight": 'lighter',
      backgroundColor : '#D3D3D3',
      padding : '5px 10px'
   }
   Object.assign(list4.style,styles);
})

list4.addEventListener('mouseout',function(){
   
   let styles = {
      "font-weight": 'lighter',
      backgroundColor : 'initial',
      border: "initial",
      'border-radius':' initial'
   }
   Object.assign(list4.style,styles);
})


list5.addEventListener('mouseover',function(){

   let styles = {
      border : '2px solid black',
      "border-radius":'10px',
      "font-weight": 'lighter',
      backgroundColor : '#D3D3D3',
      padding : '5px 10px'
   }
   Object.assign(list5.style,styles);
})

list5.addEventListener('mouseout',function(){
   
   let styles = {
      "font-weight": 'lighter',
      backgroundColor : 'initial',
      border: "initial",
      'border-radius':' initial'
   }
   Object.assign(list5.style,styles);
})

icon1.addEventListener('mouseover',function(){
   icon1.style.color = "yellow";
})

icon1.addEventListener('mouseout',function(){
   icon1.style.color = "initial";
})

icon2.addEventListener('mouseover',function(){
   icon2.style.color = "blue";
})

icon2.addEventListener('mouseout',function(){
   icon2.style.color = "initial";
})

icon3.addEventListener('mouseover',function(){
   icon3.style.color = "red";
})

icon3.addEventListener('mouseout',function(){
   icon3.style.color = "initial";
})

icon4.addEventListener('mouseover',function(){
   icon4.style.color = 'blue'
})

icon4.addEventListener('mouseout',function(){
   icon4.style.color = "initial";
});