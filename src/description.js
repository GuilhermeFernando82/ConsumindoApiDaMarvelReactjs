import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './component/headnavbar';
import Footer from './component/footer';
 
const Description = (props) => {
  let [data, setD] = useState([])
  const { id } = useParams()
  const { idD } = useParams()
  
  useEffect(() => {
    const loadHeroes = () =>{
      var requestOptions = {
         redirect: 'follow'
      };
      
      fetch("https://gateway.marvel.com/v1/public/characters/"+id+"/comics?ts=1&apikey=4869898858a8224c4c4a5fa9dccb0eca&hash=b450505d5c3b35f34025c9564e766fa5", requestOptions)
        .then(response => response.json())
        .then(response => {setD(data = response.data.results)})
        .catch(error => console.log('error', error));
        
      }
    loadHeroes()
  }, [data])
  
 

  const styleItens = {
    width: 200,
    
    display: 'inline-block',
    verticalAlign: 'top',
    marginLeft:23,
    position:'relative',
    
    //justifyContent:'center', alignItems:'center', alignContent:'center'

  
}
return (
    <React.Fragment>
        <NavBar></NavBar>
          <h1 style={{fontFamily:'Comic Sans MS', color:'white', textAlign:'center'}}></h1>
            {data.filter(name => name.id == idD).map((m) => (    
            <div id="container" style={{textAlign:'center',alignContent:'center',justifyContent:'center',justifyItems:'center'}}>
              <div style={styleItens} class="center">
                <img alt="imgDesc" style={{width: '100%',height:'189px', border: '6px solid #7460E1'}} src={m.thumbnail.path+"."+m.thumbnail.extension}/>   
                <span style={{fontFamily:'fantasy'}}>{m.name}</span><br/>
                <h4 style={{color:'turquoise'}}>Description the Comics</h4>
                <p style={{fontFamily:'Lucida Console', color:'white',fontSize:15}}>{m.description}</p>
              </div>
            </div>
            ))}
        <Footer></Footer>      
    </React.Fragment>
    )
}

export default Description