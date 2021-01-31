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
      
      fetch("https://gateway.marvel.com/v1/public/characters/"+id+"/comics?ts=1&apikey=ca2d7522c5335cf4063f41cdf441b285&hash=de260f8ad7782698855edf89786a425e", requestOptions)
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
    marginLeft:30,
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