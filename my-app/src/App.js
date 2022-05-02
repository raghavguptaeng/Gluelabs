import store from './redux/store';
import { Provider } from 'react-redux';
import './App.css';
import Eggs from './components/eggs';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Eggs />
      </Provider>
    </div>
  );
}

export default App;
