import React from "react"

const HelloWorld  = (props) => {
    const { name } = props;
    return (
        
        <div> Que o Senhor Jesus possa me abençoar nesse novo aprendizado, seja bem vindo, {name}
            <div>{props.children}</div>
        </div>
        
    )
}

export default HelloWorld

