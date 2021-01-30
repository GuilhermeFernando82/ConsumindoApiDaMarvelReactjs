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
      
      fetch("https://gateway.marvel.com/v1/public/characters/"+id+"/comics?ts=2&apikey=6616f6a1cd1418a54283d951a25aed1f&hash=487baae429d87edea3f729e173a3811f", requestOptions)
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
              <div style={styleItens} class="center1">
                <img alt="imgDesc" style={{width: '100%',height:'189px', border: '6px solid #7460E1'}} src={m.thumbnail.path+"."+m.thumbnail.extension}/>   
                <span style={{fontFamily:'fantasy'}}>{m.name}</span><br/>
                <h4 style={{color:'turquoise'}}>Description the Comics</h4>
                <p style={{fontFamily:'Lucida Console', color:'white',fontSize:15}}>{m.description}</p>
              </div>
            ))}
        <Footer></Footer>      
    </React.Fragment>
    )
}

export default Description