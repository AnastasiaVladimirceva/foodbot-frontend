import Header from "./components/Header"
import React from "react"
import Form from "./components/Form/Form"
import NavBar from "./components/NavBar/NavBar"



export default function App() {

  return (
    <div>
      <Header />
      <main>
        <NavBar />
        <Form />
      </main>
      
    </div>
  )
}


