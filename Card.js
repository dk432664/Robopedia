import React from "react";
function Card({name,email,id})
{
return(
<div className=" tc  bg-blue  dib br4 pa3 ma3 grow bw3 shadow6 ">
<img  alt ="Ipl"  src ={`https://robohash.org/${id}?200x300`}
/>
<div>
<h1><strong>{name}</strong></h1>
<p>{email}</p>
</div>
</div>
);
}
export default Card;