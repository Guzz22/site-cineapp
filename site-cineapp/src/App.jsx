import Header from "./Componentes/Header.jsx"
import {Outlet} from "react-router-dom"


function App() {
  

  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
