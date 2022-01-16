import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { routes } from './config/routes';
import { Provider } from 'react-redux';
import generateStore from './redux/store';
import { LoadScriptCustom } from './shared/GoogleMaps';

//store & customTypes
const store = generateStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

function App() {
  return (
    <Provider store={store}>
      <LoadScriptCustom>
        <BrowserRouter>
          <Routes>
            {(routes || []).map((route) => (
              <Route key={route.path} path={route.path} element={<route.component />} />
            ))}
          </Routes>
        </BrowserRouter>
      </LoadScriptCustom>
    </Provider>
  );
}

export default App;
