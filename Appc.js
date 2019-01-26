//import React from 'react';
import React, {Component}  from 'react';
import {Robo} from './Robo';
import Cardlist from './Cardlist';
import Searchitem from './Searchitem';
import './App.css';
import Scroll from './Scroll';
//import index from './index.css';
class  Appc extends Component
{
constructor()
{
super()
this.state=
{
Robo:Robo,
searchfield:" "
}

}
componentDidMount()
{
	//fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
	//.then(users=>
this.setState({Robo:Robo});
}
onSearchChange=(event)=>
{
this.setState({searchfield:event.target.value})
}
render()
{
const hello=this.state.Robo.filter(Robo=>{
return Robo.name.toLowerCase().includes(this.state.searchfield.toLowerCase());	
})
/*const filtera=this.state.Robo.filter(Robo=>{
return Robo.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
})*/
if(this.state.Robo.length===0)
{
 return <h1>ON HOLD</h1>
}
else{
	return(<div className="tc">
	<h2><em>Robopedia</em></h2>
	<Searchitem  searchChange={this.onSearchChange}/>
     <Scroll>
	<Cardlist Robo ={hello}/>
	</Scroll>
	</div>
	);
	}
	}
	}
export default Appc;
