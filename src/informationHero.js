import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './component/headnavbar';
import Footer from './component/footer';
 
const Informationhero = (props) => {
  let [data, setD] = useState([])
  const { id } = useParams()

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
    marginLeft:36,
    position:'relative',
    
    //justifyContent:'center', alignItems:'center', alignContent:'center'

  
} 
    return (
        <React.Fragment>
          <NavBar></NavBar>
          <h1 style={{fontFamily:'Comic Sans MS', color:'white', textAlign:'center'}}>Principais quadrinhos que o personagem faz parte</h1>
          {data.map((m) => (    
              <div style={styleItens} class="center1"> 
                <img style={{width: '100%',height:'189px', border: '6px solid #7460E1'}} src={m.thumbnail.path+"."+m.thumbnail.extension}/>   
                <span style={{fontFamily:'fantasy'}}>{m.name}</span><br/>
                <button class="button1"><a style={{fontFamily:'sans-serif', textDecoration:'none', color:"white"}} href={"/description/"+m.id+"/"+id}>Detalhes</a></button>
              </div>
           
          ))}
        <Footer></Footer>
        </React.Fragment>
    )
}

export default Informationhero