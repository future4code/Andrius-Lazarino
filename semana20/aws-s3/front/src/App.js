import React, { useState } from 'react';
import axios from "axios"
import styled from "styled-components"

function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [isLink, setIsLink] = useState(undefined)

  const handleFile = async (event) => {
    try {
      setIsLink(undefined)
      setIsLoading(true)

      const data = new FormData()
      data.append("file", event.target.files[0])

      const res = await axios.put("https://2tjhwmmzo1.execute-api.us-east-1.amazonaws.com/v1/file/upload", data)

      setIsLink(res.data.link)
      setIsLoading(false)

      console.log(res) // APAGAR

    } catch (err) {
      setIsLoading(false)
    }
  }

  const loading = <div>Carregando...</div>

  const link = <div>Link de acesso gerado: {isLink}</div>

  return (
    <div className="App">

      <input type="file" onChange={handleFile} />

      {isLoading ? loading : false}

      {isLink ? link : false}
    </div>
  );
}

export default App;
