import React, { useEffect } from "react"
import { Fragment } from "react"
import { useState } from "react"
import { serv } from "./data"
import FoodPage from "./components/FoodPage/FoodPage"
import HomePage from "./components/HomePage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Kitchen from "./components/Kitchen/Kitchen"
import ShoppingBag from "./components/ShoppingBag/ShoppindBag"



export default function App() {
  const [ tab, setTab ] = useState('Бургеры 🍔')
  const [data, setData] = useState([])
  const [category, setCategory] = useState([])
  const [dataSet, setDataSet] = useState()
  
  async function fetchData() {
    const response = await fetch(serv+'menu/0/positions')
    const data = await response.json()
    setData(data)
  }
  async function fetchCategory() {
    const res = await fetch(serv+'menu/categories')
    const category = await res.json()
    setCategory(category)
  }

  async function fetchDataPost() {
    const response = await fetch(serv+'menu/0/update_cart', {
        method: 'POST', 
        body: JSON.stringify(dataSet)
    })
    const data = await response.json()
    setData(data)
  }
  useEffect(() => {
    fetchData(data),
    fetchCategory(category)
    // fetchDataPost(data)
  }, [])


  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage category={category} tab={tab} setTab={(current) => setTab(current)} data={data} setDataSet={setDataSet}/>} />
          <Route path="/food-page" element={<FoodPage name={'Чизбургер'} description={'рубленый бифштекс из натуральной цельной говядины с кусочками сыра Чеддер на карамелизованной булочке, заправленной горчицей, кетчупом, луком и кусочком маринованного огурчика'}/>} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/shopping_bag" element={<ShoppingBag data={data}/>} />
        </Routes>
      </Router>
    </Fragment>
  )
}


