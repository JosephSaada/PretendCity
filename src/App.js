import './App.css';
import pcCharacter from './assets/pcCharacter.png';
import nfcPhoneIcon from './assets/nfcPhoneIcon.png';
import mapIcon from './assets/mapIcon.png';

function App() {
  return (
    <div>
      <div className='header'>
        <h2>Hello, Pretend City Visitor</h2>
        <img id='pcCharacter' src={ pcCharacter }/>
      </div>
      <div className='carousel'>
        <div className='card'>
          <img className='icon' src={ nfcPhoneIcon }/>
          <div className='cardTitle'>Guide to Tap2Play</div>
          <div className='cardDesc'>Click to learn how to use the Tap2Play system</div>
        </div>
        <div className='card'>
            <img className='icon' src={ mapIcon }/>
          <div className='cardTitle'>Map of Museum</div>
          <div className='cardDesc'>Click to view Tap2Play signs in the museum</div>
        </div>
      </div>
    </div>
  );
}

export default App;
