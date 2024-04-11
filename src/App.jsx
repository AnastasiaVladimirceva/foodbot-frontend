import Header from "./components/Header"
import { useState } from 'react'
import { differences, menu } from "./data"
import Button from "./components/Button/Button"
import React from "react"
import Form from "./components/Form/Form"


export default function App() {
  const [contentType, setContentType] = useState(null)

  let tabContent = null
  if (contentType) {
    tabContent = <p>{differences[contentType]}</p>
  } else {
    tabContent = <p>Основные блюда</p>

  }

  function handleClick(type) {
    setContentType(type)
}

  return (
    <div>
      <Header />
      <main>
      <section>
          <h3>Меню</h3>
          <Button isActive={contentType == 'mainMenu'} onClick={() => handleClick('mainMenu')}>Основные блюда</Button>
          <Button isActive={contentType == 'burgers'} onClick={() => handleClick('burgers')}>Бургеры</Button>
          <Button isActive={contentType == 'salads'} onClick={() => handleClick('salads')}>Салаты</Button>
          <Button isActive={contentType == 'dessert'} onClick={() => handleClick('dessert')}>Десерты</Button>
          {tabContent}
        </section>
        <Form />
      </main>
      
    </div>
  )
}


