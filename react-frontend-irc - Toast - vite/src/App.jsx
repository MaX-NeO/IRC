import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Signup from './Admin/Signup';
import Signin from './Admin/Signin';
import Dashboard from './Admin/Dashboard';
import EditProduct from './Admin/EditProduct';
import AddProduct from './Admin/AddProduct';
import ViewProduct from './Pages/ViewProduct';

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Signup' element={<Signup/>}/>
        <Route exact path='/Signin' element={<Signin/>}/>
        <Route exact path='/Dashboard' element={<Dashboard/>}/>
        <Route exact path='/Dashboard/edit/:productId' element={<EditProduct/>}/>
        <Route exact path='/Dashboard/add' element={<AddProduct/>}/>
        <Route exact path='/View/:productId' element={<ViewProduct/>}/>
      </Routes>
  );
}

export default App;
