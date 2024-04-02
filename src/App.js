// import logo from './logo.svg';
import cat from './avatar.png';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <meta property="og:title" content={'seo practice'} />
        <meta property="og:description" content={'민초의 연습용'} />
        <meta property="og:image" content={''} />
        <meta property="og:url" content={''} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={'seo practice'} />
        <meta name="twitter:description" content={'민초의 연습용'} />
        <meta name="twitter:image" content={''} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="App">
        <header className="App-header">
          <h1> SEO PRACTICE </h1>
          <h2> H2 heading </h2>
          <h3> H3 heading </h3>
          <h4> H4 heading </h4>
          <h5> H5 heading </h5>
          <h6> H6 heading </h6>
          <img src={cat} className="App-logo" alt="logo" />
          <p>
            Hello world!
          </p>
        </header>
      </div>
    </>
  );
}

export default App;
