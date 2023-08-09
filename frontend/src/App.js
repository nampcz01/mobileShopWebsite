import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {publicRoutes} from './routes';
import { Home } from './components/Layout/Layout';
import { Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route, index) =>{
            // Mac dinh la Home
            const Page = route.component;
            let Layout = Home

            if (route.layout) {
              Layout = route.layout
            }else if (route.layout === null){
              Layout = Fragment
            }
            return (
              <Route key={index} path={route.path} 
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
        <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
        
{/* Same as */}
      </div>
    </Router>
  );
}

export default App;
