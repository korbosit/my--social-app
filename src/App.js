import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

import { Routes, Route, BrowserRouter, } from 'react-router-dom';

import './App.css';


const App = (props) => {

return (
   <BrowserRouter>
      <div className="app-wrapper">
         <Header />
         <Navbar />
         <div className="app-wrapper-content">
            <Routes>
               {/* <Route path="/dialogs/*" render={() => <Dialogs />} />
               <Route path="/dialogs/*" render={() => <Profile />} /> */}
					
					
               {/* <Route path="/dialogs/*" element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
               <Route path="/profile" element={<Profile posts={props.posts} />} /> */}

               {/* <Route path="/dialogs/*" element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />
               <Route path="/profile" element={<Profile posts={props.posts} />} /> */}


               {/* <Route path="/dialogs/*" element={<Dialogs 
																	dialogs={props.state.dialogsPages.dialogs}
																	messages={props.state.dialogsPages.messages} />} />

               <Route path="/profile" element={<Profile posts={props.state.profilePage.posts} />} /> */}

               <Route path="/dialogs/*" element={<Dialogs 
																	state={props.state.dialogsPages} />} />

               <Route path="/profile" element={<Profile state={props.state.profilePage} />} />

            </Routes>
         </div>
      </div>
   </BrowserRouter>
);
};

export default App;
