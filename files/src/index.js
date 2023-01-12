// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
// import App from './app/App';
// import reportWebVitals from './reportWebVitals';
// import './index.css';

// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//         ReactDOM.render(
//           <App 
//             state={store.getState()} 
//             dispatch={store.dispatch}
//           />,
//           container
//           );
//       </Provider>
//     </React.StrictMode>
//   );



// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";

import { App } from "./app/App.js";

// Import the store here.
import { store } from "./app/store.js";

// Pass state and dispatch props to the <App /> component.
const render = () => {
  ReactDOM.render(
    <App state={store.getState()} dispatch={store.dispatch} />,
    document.getElementById("root")
  );
};
render();

// Subscribe render to the store.
store.subscribe(render);
