import React from 'react'




function Main() {
// const [id,setId] = React.useState("");
const [comand , setComand] = React.useState(false);
const [users , setUsers] = React.useState([]);
const [newUser , setNewUser] = React.useState({
  name:'',
  surname:'',
  avatar:'',
})

// const deletePerson = () =>{
//   users.map(item =>{
//     if(id === item.id){
//       fetch('https://6363b0578a3337d9a2e48d82.mockapi.io/userscontent/users' + id, {
//       method: 'DELETE',
// }).then(res => res.text())
// .then(res => console.log(res))}
//   })
// }

// const handleChangeIdValue = (e)=>{
//   const {value} = e.target;
//   setId(value);
// }

const handleShow = () =>{
setComand(!comand)
}

const handleChangeInputValue = React.useCallback((e)=>{
    const{name , value} = e.target;
    setNewUser({...newUser,[name]:value})
},[])

const pushAddBtn = React.useCallback(()=>{
  if(newUser.avatar&& newUser.name&&newUser.surname){
    fetch("https://6363b0578a3337d9a2e48d82.mockapi.io/userscontent/users",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(newUser),
    });
  }
},[])



React.useEffect(()=>{
  fetch("https://6363b0578a3337d9a2e48d82.mockapi.io/userscontent/users")
.then((responce)=>responce.json())
.then((data)=>{setUsers(data)})
},[comand])

  return (
    <>
        <div id='second'>
      <input onChange={handleChangeInputValue} placeholder='enter your name' name='name'></input>
      <input onChange={handleChangeInputValue} placeholder='enter your surname' name='surname'></input>
      <input onChange={handleChangeInputValue} placeholder='entr your image url' name='avatar'></input>
      <button onClick={pushAddBtn}>Create Add</button>
      {/* <input onChange={handleChangeIdValue}  placeholder='Enter Id for Delete' name='id'></input>
      <button onClick={deletePerson} >Delete</button> */}
    </div>
    <div id='first'>
      <button onClick={handleShow}>Show</button>
      {users.map((item) =>(
        <>
          <h1 key={item.id}>
           {item.id} - {item.name} - {item.surname}
          </h1>
          <img src={item.avatar} alt=""></img>
        </>
      )
     )}
    </div>
    </>
  )
}

export default Main