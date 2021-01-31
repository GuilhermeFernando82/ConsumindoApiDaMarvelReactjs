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
      
      fetch("https://gateway.marvel.com/v1/public/characters/"+id+"/comics?ts=1&apikey=73b451360b955e10ac6cdaf9efe86338&hash=1a4d4181b03ce9e8209e8301ef5ad51b", requestOptions)
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