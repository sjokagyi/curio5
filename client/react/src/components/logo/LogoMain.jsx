// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    
      //if you want to use image instead of svg uncomment following, and comment out <svg> element.
     
      <img src='src/components/logo/curio_text.PNG' alt="Mantis" width="100" />
     
     
    
  );
};

export default Logo;
