import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './page/Dashboard'
import ProductList from './page/ProductList'
import Detail from './page/Detail'

export default function Home() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Dashboard/>}/>
  <Route path='/product-list' element={<ProductList/>}/>
  <Route path='/product-list/id' element={<Detail/>}/>

</Routes>
</BrowserRouter>


</>
  )
}