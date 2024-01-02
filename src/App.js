import './App.css';
import Home from './/Components/Home/Home';
import { BrowserRouter as Router,  Route,  Routes} from 'react-router-dom';
import AboutUs from './/Components/AboutUs/AboutUs';
import FinancialPlanning from './/Components/FinancialPlanning/FinancialPlanning';
import NRI from './/Components/NRI/NRI';
import ContactUs from './/Components/ContactUs/ContactUs';
import Learning from './/Components/Learning/Learning';
import Download from './/Components/Download/Download';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/FinancialPlanning' element={<FinancialPlanning/>} />
        <Route path='/NRI' element={<NRI/>} />
        <Route path='/Learning' element={<Learning/>} />
        <Route path='/Download' element={<Download/>} />
        <Route path='/ContactUs' element={<ContactUs/>} />
      </Routes>
    </Router>
  );
}

export default App;