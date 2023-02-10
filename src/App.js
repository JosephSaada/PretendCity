import './App.css';
import pcCharacter from './assets/pcCharacter.png';
import nfcPhoneIcon from './assets/nfcPhoneIcon.png';
import mapIcon from './assets/mapIcon.png';

function App() {
  const date = new Date();

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
      <h2 className='currDate'>{ date.toDateString() }</h2>
      <div className='cardBig'>
        <div className='cardBigTitle'>How It Works</div>
        <div className='cardBigDesc'>
          Tap2Play works by using NFC chips builtin
          to devices. NFC stands for near field 
          communication, which allows devices
          to transfer data when they are close. 
          Similar to tap-to-pay methods with in store
          purchases, Tap2Play is able to reroute your
          device to our platform. Watch the video below
          to learn more.
        </div>
      </div>
    </div>
  );
}

export default App;
