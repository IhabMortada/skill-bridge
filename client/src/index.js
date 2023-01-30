import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import LoginCard from './components/login-card';
import Footer from './components/footer';
import Header from './components/header';
import BulletListFeatures from './components/bullet-list';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <body>
      <div className={ 'body_wrapper' }>
        <Header />
        <BulletListFeatures />
        {/* <LoginCard /> */}
        <Footer />
      </div>
    </body>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
