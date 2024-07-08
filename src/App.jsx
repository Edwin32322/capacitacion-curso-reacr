import './App.css'
import { ContactForm } from './components/ContactForm'
import { CrudApi } from './components/CrudApi'
import { CrudApp } from './components/CrudApp'
import { Modales } from './components/Modales'
import { SelectsAnidados } from './components/SelectsAnidados'
import { SongSearch } from './components/SongSearch'

function App() {
  return (
    <>
      <h1>Ejercicios React</h1>
      <Modales></Modales>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ContactForm></ContactForm>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SelectsAnidados></SelectsAnidados>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SongSearch></SongSearch>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <CrudApi></CrudApi>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <CrudApp></CrudApp>
    </>
  )
}

export default App
