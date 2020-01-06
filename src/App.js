import React from "react"
import Button from './Button'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import HelloWorld from './HelloWorld'
import "./styles.css"
import "./bootstrap/css/bootstrap.min.css"

const soma = (a, b) => {
  alert(a + b)
}

const nomes = ["Tales", "João", "Maria", "Jorge"]


const escolheNome = (nomes) => {
  return nomes[Math.floor(Math.random() * nomes.length)]

}
  

const App = () => {
  return (




    <div className="main">

    <div className="App">

      
      
      <HelloWorld name = {escolheNome(nomes)} />
      <Button onClick={() => soma(10, 20)} name="Bruno Carneiro" />
      <ComponentA>
        <ComponentB>
          <Button onClick={() => soma(40, 20)} name="Aline Carneiro" />
        </ComponentB>
      </ComponentA>1
    </div>

    </div>
 
 
  )

}

export default App;
