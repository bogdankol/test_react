import {useState, useRef} from 'react';
import RegistrationForm from '../../components/RegistrationForm';
import LoginForm from '../../components/LoginForm';
import s from './HomePage.module.css';


function HomePage() {
    const [registrationFormNeeded, setRegistrationFormNeeded] = useState(true);
    const onGoToLoginClick = () => {
        setRegistrationFormNeeded(false);
      };
    
      const onBackToRegistration = () => {
        setRegistrationFormNeeded(true);
      };

  return <div className={s.mainDiv}>
      <div className={s.div}>
          {
          registrationFormNeeded ? 
            <RegistrationForm setRegistrationFormNeeded={onGoToLoginClick}/> : 
            <LoginForm setRegistrationFormNeeded={onBackToRegistration}/>
          }
      </div>    
  </div>;
}

export default HomePage;
