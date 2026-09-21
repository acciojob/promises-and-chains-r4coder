//your JS code here. If required.
const form=document.getElementbyId("f");
const name=document.getElementbyId("name");
const age=document.getElementbyId("age");

form.addEventListener("submit",()=>{

	if(name.value===""||age.value==="")
		{
			alert("Please enter valid details");
        }
	
});

promise1=new Promise((resolve,reject)=>{
      setTimeout(()=>{
		  resolve("Welcome,You can vote."); 
	  },40000)
		  
	});

promise2=new Promise((resolve,reject)=>{
      setTimeout(()=>{
		  resolve("Oh sorry.You aren't old enough"); 
	  },40000)
		  
	});

if(age>18)
{
	promise1.then((data1)=>{
	console.log(data1)
});
	
}

else 
{
  promise2.then((data2)=>{
	console.log(data2)
});
	
}




