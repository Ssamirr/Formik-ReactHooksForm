import { Route, Routes } from 'react-router-dom';
import FormikSample from './components/FormikSample';
import Header from './components/Header';
import HookForm from './components/HookForm';
import { ToastContainer} from 'react-toastify';


function App() {
  return (
    <>
      <ToastContainer autoClose={2000} />
      <Header />
      <Routes>
        <Route path='/' element={<FormikSample />} ></Route>
        <Route path='/hook' element={<HookForm />} ></Route>
      </Routes>
    </>
  );
}

export default App;
