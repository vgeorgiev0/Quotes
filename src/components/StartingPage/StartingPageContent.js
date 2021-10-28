import classes from './StartingPageContent.module.css';
import AuthContext from '../../store/auth-context';
import { useContext } from 'react';

const StartingPageContent = () => {
  const authCtx = useContext(AuthContext);
  return (
    <section className={classes.starting}>
      <h1>
        {authCtx.isLoggedIn
          ? 'Your Favorite Quotes'
          : 'Log in or Sign up to see our Quotes'}
      </h1>
    </section>
  );
};

export default StartingPageContent;
