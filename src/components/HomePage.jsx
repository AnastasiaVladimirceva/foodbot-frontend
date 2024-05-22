import { Fragment } from "react"
import Header from "./Header"
import Form from "./Form/Form"
import NavBar from "./NavBar/NavBar"

export default function HomePage({ category, tab, setTab, data, setDataSet }) {
  const cartContent = data.filter(el => el.amount_in_cart > 0).map(el => el.id)
  const chosenProducts = data.filter(el => el.amount_in_cart > 0).map(el => el.id)
    return ( <Fragment>
        {/* <Header /> */}
        <NavBar category={category} active={tab} onChange={(current) => setTab(current)}/>
      <main>
        
        {tab && cartContent &&
          <Form title={tab} data={data} category={category} setDataSet={setDataSet} chosenProducts={chosenProducts} cartContent={cartContent}/>
        }
      </main>
    </Fragment>
        
    )
}