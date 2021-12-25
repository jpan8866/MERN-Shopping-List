// Bootstrap's ready-to-use css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'reactstrap'

function App() {
  return (
    <Provider store={store}> 
    {/* wrap Provider around whole thing in order to access store and share states across components of app */}
      <div className="App">
      <AppNavbar />
      <Container> 
        {/* use container for default grid system to place itemModal and shopping list together */}
        <ItemModal />
        <ShoppingList />
      </Container>
      </div>
    </Provider>
  );
}

export default App;
