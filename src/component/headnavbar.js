import Image1 from '../img/logo.png';
function NavBar() {
    return (
        <div class="header">
            <a href="/" ><img class="logo" src={Image1}></img></a>
            <div class="header-right">
              <a class="active" href="#home">Inicio</a>
              <a href="#contact">Contato</a>
              <a href="#about">Sobre</a>
            </div>
        </div>
    );
  }
export default NavBar;