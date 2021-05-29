import React, { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


import codeString from "../../../doc/test_respuestas.txt"

const Code = () => {
    
    const [code, setCode] = useState("")

    useEffect(() => {
        fetch(codeString)
            .then(response => response.text())
            .then(data => {
                setCode(data)
            });
    }, [])

    return (
        <SyntaxHighlighter language="javascript" style={a11yDark}>
            {
                code?
                code
                :
                "Todavia no he cargado"
            }
        </SyntaxHighlighter>
    )
}

export default Code
