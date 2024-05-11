import './App.css';
import {BrowserRouter as Router, Routes, Route, useNavigate, Form} from 'react-router-dom';
import Navbar from './components/Layouts/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Footer from './components/Layouts/Footer';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import { useContext, useEffect } from 'react';
import { Context } from '.';
import toast,{Toaster} from 'react-hot-toast';
import axios from 'axios';
import Diagnosis from "./components/Diagnosis/Diagnosis"
import HeartDiseaseForm from './components/Form/Heart_disease.jsx';
import DiabetesForm from './components/Form/Diabetes.jsx';
import DiabeticRetinopathyForm from './components/Form/Image-Part/Diabeticretinopathy.jsx';
import CataractForm from './components/Form/Image-Part/Cataract.jsx';
import BestmodelForm from './components/Form/Image-Part/Bestmodel.jsx';
import Cardio_disease from '../src/components/Form/Cardio_disease.jsx';
import Liver_Disease from '../src/components/Form/Liver_Disease.jsx'
import Blood_Test from '../src/components/Form/BloodTest.jsx';
import Kidney_Stone from '../src/components/Form/Kidney_Stone.jsx';
import Medibuddy from './components/MediBuddy/Main/Medibuddy.jsx';
import { BASE_URL } from './Base_url.js';
function App() {

  const {isAuthorized,setIsAuthorized,user,setUser}=useContext(Context);

  console.log("auth->",isAuthorized);
  console.log("user->",user);
  
// const navigateTo=useNavigate();
  // const getUser = async () => {
  //   try {
  //     const response = await axios.get(`${BASE_URL}/getuser`,{withCredentials:true});
  //     console.log("app response",response);
  //     setUser(response.data.user);
  //     setIsAuthorized(true);
  //     toast.success(response.data.message);
  //     // navigateTo('/');
     
  //   } catch (error) {
  //     toast.success(error.response.data.message);
  //     setIsAuthorized(false);
  //     console.error('Error fetching user data:', error);

  //   }
  // };
  
  // useEffect(() => {
  //   getUser();
  // }, [isAuthorized]);

  return (
   <>
   <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Register />} />
      <Route path='/diagnosis' element={<Diagnosis />} />
      <Route path='/diabetes' element={<DiabetesForm />} />
      <Route path='/heart-disease' element={<HeartDiseaseForm />} />
      <Route path='/diabetic-retinopathy' element={<DiabeticRetinopathyForm />} />
      <Route path='/cataract' element={<CataractForm />} />
      <Route path='/cardioDisease' element={<Cardio_disease />} />
      <Route path='/liverDisease' element={<Liver_Disease />} />
      <Route path='/bloodTest' element={<Blood_Test />} />
      <Route path='/kidneyStone' element={<Kidney_Stone />} />
      <Route path='/skin-disease' element={<BestmodelForm />} />
      <Route path='/medibuddy' element={<Medibuddy />} />
   <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
    <Toaster />
   </Router>
   </>
  );
}

export default App;
