import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cart from './component/cart/cart';
import Main from './component/main/main';

function App() {
  return (
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Main/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>

    </Routes>
  </BrowserRouter>
  )
}

export default App;
