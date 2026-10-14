function Header( { title, description } ){
  // JS
  // const { title, description } = props

  // JSX
  return (
  
        <header> 
          <h1> { title }</h1>
          <p>{ description}</p>
        </header>
  )
}

export default Header;