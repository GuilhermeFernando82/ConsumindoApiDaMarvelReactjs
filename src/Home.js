import React, { useEffect, useState } from 'react'
import {Autocomplete} from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import NavBar from './component/headnavbar';
import Footer from './component/footer';
const Home = () => {
    
    let [data, setD] = useState([])
    let [Iddata, setID] = useState([])
    useEffect(() => {
      const loadHeroes = () =>{
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=ca2d7522c5335cf4063f41cdf441b285&hash=de260f8ad7782698855edf89786a425e", requestOptions)
          .then(response => response.json())
          .then(response => {setD(data = response.data.results)})
          .catch(error => console.log('error', error));
          
      }
      loadHeroes()
    }, [data])
    
  
      
      const styleItens = {
          width: 200,
          height:200,
          display: 'inline-block',
          marginLeft:36 ,
          position:'relative',
          
          justifyContent:'center', alignItems:'center', alignContent:'center'

        
      }
      
    const Hero = data.map((number) => number.name);
    return (
        <React.Fragment>
         <NavBar></NavBar>
        <h1 style={{fontFamily:'sans-serif',  color:'whitesmoke',textAlign:'center' }}>Herois da Marvel</h1> 
        <div id="searchPC" style={{textAlign:'center',alignContent:'center',justifyContent:'center',justifyItems:'center'}}>
        <div class="p-3" id="mySearch">
        <Autocomplete
            id="combo-box-demo"
            options={Hero}
            getOptionLabel={(option) => option}
            style={{height:50 ,width:500,backgroundColor:'white',color:'black',fontSize:12}}
            renderInput={(params) => <TextField {...params} style={{padding:2, fontSize:15,textAlign:'center',alignContent:'center',justifyContent:'center',justifyItems:'center'}} label="Pesquisar Heroi" variant="outlined" />}
            onChange={(event, newValue) => {
              setID(Iddata = newValue)
              console.log(JSON.stringify(newValue, null, ' '));
          }}
          
        />
        {data.filter((filter) => filter.name === Iddata).map((n) =>( 
          <button style={{fontSize:14,height:40, marginTop:20}} class="button2"><a style={{fontFamily:'sans-serif', textDecoration:'none', color:"white"}} href={"/informationHero/"+n.id}>Buscar Heroi</a></button>
        ))}
        </div>
        
      </div>
      <div id="searchM" style={{textAlign:'center',alignContent:'center',justifyContent:'center',justifyItems:'center'}}>
        <div class="p-3" id="mySearchM">
        <Autocomplete
            id="combo-box-demo"
            options={Hero}
            getOptionLabel={(option) => option}
            style={{marginLeft:65,height:50 ,width:225,backgroundColor:'white',color:'black',fontSize:12}}
            renderInput={(params) => <TextField {...params} style={{padding:2, fontSize:15,textAlign:'center',alignContent:'center',justifyContent:'center',justifyItems:'center'}} label="Pesquisar Heroi" variant="outlined" />}
            onChange={(event, newValue) => {
              setID(Iddata = newValue)
              console.log(JSON.stringify(newValue, null, ' '));
          }}
        />

        {data.filter((filter) => filter.name === Iddata).map((n) =>( 
          <button style={{fontSize:14,height:40, marginTop:20}} class="button2"><a style={{fontFamily:'sans-serif', textDecoration:'none', color:"white"}} href={"/informationHero/"+n.id}>Buscar Heroi</a></button>
        ))}
        </div>
        
      </div>
          { data.map((m) => (     
            <div style={styleItens}>
              <img style={{marginTop:22, width: '100%',height:'189px', border: '6px solid #7460E1'}} src={m.thumbnail.path+"."+m.thumbnail.extension}/>   
              <span style={{fontFamily:'fantasy'}}>{m.name}</span><br/>
              <button class="button1"><a style={{fontFamily:'sans-serif', textDecoration:'none', color:"white"}} href={"/informationHero/"+m.id}>Detalhes</a></button>
            </div>
          ))}
             
                
        <Footer></Footer>
        
        </React.Fragment>
    )
}
export default Home