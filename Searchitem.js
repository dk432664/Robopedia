import React from 'react';
const Searchitem=({searchfield, searchChange})=>
{
return(
<div className="pa5">
<input className='pa3 ba b-- orange  bg-lightest-blue'
 type='search' 
 placeholder='searchRobo'
 onChange={searchChange}
 />
</div>
);
}
export default Searchitem;