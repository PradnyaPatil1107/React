import logo from './logo.svg';
import './App.css';
import ResevationForm from './components/ResevationForm';
import DisplayData from './components/DisplayData';

function App() {
  return (
    <div>
          <h1>TicketReservation Dashboard</h1>
          <DisplayData></DisplayData>
          <hr color="red" size="2px"></hr>
          <ResevationForm></ResevationForm>
    </div>
  );
}

export default App;
