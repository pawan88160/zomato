window.onload=()=>{
    fetch('res.txt')
.then(res=>res.json())
.then(data=>{
   
       console.log(data)
      
})
.catch(err=>{console.log("data not found")})
console.log('data loded');
}