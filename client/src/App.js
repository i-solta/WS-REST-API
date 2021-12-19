import './App.css';
import { Button } from "reactstrap";
import{Link,Routes,Route} from "react-router-dom";
import ContactList from "./components/ContactList"
import AddForm from './components/AddForm';


function App() {
  return (
    <div className="App">
      <Link to="/list"> 
      <Button color="info">Contact List</Button>
      </Link>
      <Link to="/form-add-contact">
      <Button color="info">Add Contact</Button>
      </Link>
      <Routes>
        <Route path="/list" element={<ContactList />}/>
        <Route path="/form-add-contact" element={<AddForm/>}/>
      </Routes>
  
  
    </div>
  );
}

export default App;
