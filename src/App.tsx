import { AppRoutes } from './components/AppRoutes';
import { AppHeader } from 'components/AppHeader';

import './App.scss';

function App() {

  return (
    <div className="App">
      <AppHeader/>
     <AppRoutes/>  
    </div>
  );
}

export default App;
