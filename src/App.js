import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

import { Routes, Route, BrowserRouter, } from 'react-router-dom';

import './App.css';



// const App =() => {
// 	return (
// 	<BrowserRouter>
// 		<div className="app-wrapper">
// 			<Header />
// 			<Navbar />
// 				<div className="app-wrapper-content">
// 					<Route component={Dialogs}/>
// 					<Route component={Profile}/>
// 				</div>
// 			</div>
// 	</BrowserRouter>
// 	);
// }

const App = () => {
   return (
		<BrowserRouter>
        <div className='app-wrapper'>
              <Header />
              <Navbar />
         <div class='app-wrapper-content'>
             <Routes>
                 <Route path="/dialog" element= {<Dialogs/>}/>
                 <Route path="/profile" element={<Profile/>}/>
             </Routes>
         </div>
        </div>
     </BrowserRouter>
   );
};

export default App;
