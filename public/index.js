document.getElementById('register').addEventListener('submit',  async (event)=> {
    event.preventDefault();
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    
    const obj={name:name,email:email,password:password};
    console.log(obj)
    try{
        const response=await axios.post('http://localhost:3000/registeruser', obj);
        if(response.status==201){
            window.location.href="./login.html";
        }
    }catch(err){
        console.log(err)
    }
})