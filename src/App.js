
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Packages from './pages/Products/Packages';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import PackageDetail from './pages/PackageDetail/PackageDetail';
import { PackageContent } from './utility/productContent/PackageContent';
import BookForm from './pages/BookForm/BookForm';
import AboutUs from './pages/AboutUs.js/AboutUs';


function App() {
  return (
    <Provider store= {store}>
     <div className='App'>
     <BrowserRouter>
      <Routes> 
        <Route path='/' element={<HomePage/>}/>
        <Route path='about_us' element={<AboutUs/>}/>
        <Route path='travelpackages'>
        <Route index element={<Packages/>}/>
        <Route path= ":packagedetail" element= {<PackageDetail/>} />
        </Route>
        <Route path= "bookForm" element= {<BookForm/>} />
      </Routes>
      </BrowserRouter>
   </div> 
    </Provider>
   
  );
}

export default App;
