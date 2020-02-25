var wrapperEle = document.body.querySelector(".wrapper");
var numberEle = document.body.querySelector(".number");
var increaseEle= document.body.querySelector(".increase");
var number= 0;
numberEle.innerHTML=number;
var namelist = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];
for (var i=0; i < namelist.length; i++){
  var ele = document.createElement("div");
  ele.innerHTML = namelist[i].name + " " + namelist[i].age;
  ele.style.color = namelist[i].color;
  
  if(namelist[i].age>40){
    ele.style.color="red"
  } else if (namelist[i].age <20){
    ele.style.color="blue"
  }
  
  wrapperEle.appendChild(ele);
}

function increase(num, color){
  number= number+num;
  numberEle.innerHTML=number;
  numberEle.style.color=color;
}

increaseEle.addEventListener("click", function(){
  increase(1);
})