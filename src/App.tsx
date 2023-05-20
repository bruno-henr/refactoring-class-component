import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App = () => {
  return (
    <div>
      <Router>
        <Routes />
      </Router>
      <GlobalStyle />
    </div>
  )
}

export default App;
