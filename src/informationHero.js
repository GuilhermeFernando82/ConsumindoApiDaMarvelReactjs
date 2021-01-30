import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './component/headnavbar';
import Footer from './component/footer';
 
const Informationhero = (props) => {
  let [data, setD] = useState([])
  var subtitle;
  const [selectedId, setSelectedId] = React.useState(null);
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const { id } = useParams()
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  useEffect(() => {
    loadHeroes()
  }, [])
  
  const loadHeroes = () =>{
    var requestOptions = {
       redirect: 'follow'
    };
    
    fetch("http://gateway.marvel.com/v1/public/characters/"+id+"/comics?ts=2&apikey=6616f6a1cd1418a54283d951a25aed1f&hash=487baae429d87edea3f729e173a3811f", requestOptions)
      .then(response => response.json())
      .then(response => {setD(data = response.data.results)})
      .catch(error => console.log('error', error));
      
    }

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