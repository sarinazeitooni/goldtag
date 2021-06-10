import Header from './components/header/Header';
import MainComponents from './components/MainComponents';
import Advices from './components/advices/advices';
import Footer from './components/footer/footer';
import Detail from './components/detailpage/allDetails/detail';
import './style/main.scss';
import {BrowserRouter,Route} from "react-router-dom";
import { Provider } from 'react-redux';
import store, {persistor} from './redux/store/store';

import { PersistGate } from 'redux-persist/integration/react';
function App() {
  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
        <div className='app'>
          <Header/>
          <BrowserRouter>
                <Route exact path='/' component={MainComponents}/>
                <Route path='/:id' component={Detail}/>
          </BrowserRouter>
          <Advices/>
          <Footer/>
        </div>
          </PersistGate>
      </Provider>
  );
}
export default App;
