import Header from "./components/Header"
import React, { useEffect } from "react"
import Form from "./components/Form/Form"
import NavBar from "./components/NavBar/NavBar"
import { Fragment } from "react"
import { useState } from "react"
import FoodPage from "./components/FoodPage/FoodPage"


export default function App() {
  const [ tab, setTab ] = useState('Бургеры 🍔')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [category, setCategory] = useState([])
  
  async function fetchData() {
    setLoading(true)
    const response = await fetch('https://api.ricoroma.ru/menu/0/positions')
    const data = await response.json()
    setData(data)
    setLoading(false)
  }
  async function fetchCategory() {
    setLoading(true)
    const response = await fetch('https://api.ricoroma.ru/menu/categories')
    const category = await response.json()
    setCategory(category)
    setLoading(false)
  }
  useEffect(() => {
    fetchData(data),
    fetchCategory(category)
  }, [])
  
  return (
    <Fragment>
      <Header />
      <main>
        <NavBar category={category} active={tab} onChange={(current) => setTab(current)}/>
        {tab && 
        <>
        <Form category={tab} data={data}/>
        </>}
        {/* <FoodPage/> */}
      </main>
    </Fragment>
  )
}


