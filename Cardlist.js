import React from "react";
import Card from './Card';
function Cardlist({Robo}){
return(
<div> 
{
Robo.map((user,x)=>{
return ( <Card  key={x} id={Robo[x].id} name={Robo[x].name}  username={Robo[x].username} email={Robo[x].email}/>
);
})
}
</div>
);
}
export default Cardlist;