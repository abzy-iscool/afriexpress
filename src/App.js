
import { NavBar, ProfileCardCollection, ActionCardCollection } from './ui-components';
import './App.css';

function App() {
  return (
    <>
      <NavBar width='100%' />
      <div>
        <h1 id='header1'>Users Collection</h1>
        <br></br>
       <ProfileCardCollection  itemsPerPage={5}/>
      </div>
      <br></br>
      <div>
      <br></br>
        <h1 id='header2'>Products Section</h1>
        <ActionCardCollection itemsPerPage={4}/>
      </div>
    </>
  );
}

export default App;
