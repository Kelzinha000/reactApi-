import React from "react"
import Produto from "./Produtos"

const App = () =>{

    const [data, setData] = React.useState(null)

 async function getData(event){
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
    
  const json = await response.json()
  setData(json)

  console.log(event.target.innerText)
}
    return(
        <>
        <button onClick={getData}>Tablet</button>
        <button onClick={getData}>Smartphone</button>
        <button onClick={getData}>Notebook</button>
             {data && <Produto data={data}/>}
        </>
    )
}

export default App;