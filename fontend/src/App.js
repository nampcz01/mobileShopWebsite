import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {publicRoutes} from './routes';
import { defaultLayout } from './components/Layout';
import { Fragment } from 'react';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route, index) =>{
            // Mac dinh la defaultLayout
            const Page = route.component;
            let Layout = defaultLayout

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
      </div>
    </Router>
  );
}

export default App;
