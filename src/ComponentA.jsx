import React from 'react'

const ComponenteA = (props)=> {
  return (
    <div>Componente A =D
      <div>{props.children}</div>
    </div>
  )
}

export default ComponenteA