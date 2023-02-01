import CartWidget from './CartWidget';

function NavBar() {
    return (
      <div className='contenedorNav'>
        <h2 className='tituloComercio'>A TUS ZAPATOS</h2>
        <nav className='navegacionNav'>
        
            <ul className='itemsNav'>
                <li><a>Nosotros</a></li>
                <li><a>Zapatos</a></li>
                <li><a>Contacto</a></li>
            </ul>
        </nav>
        <CartWidget />
      </div>
    );
  }

  export default NavBar;