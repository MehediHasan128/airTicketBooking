import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import logo from '../../../assets/images/logo.jpg';


function Navbar() {


  return (
    <AppBar position="static" sx={{backgroundColor: 'white', padding: '15px 0'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box className="flex items-center justify-between w-full">
          <Box className="w-48">
            <img src={logo} alt="" />
          </Box>

          <Box>
            <button className='bg-red-600 px-5 py-3 rounded-md border font-medium text-white hover:text-black hover:bg-transparent hover:border border-red-600 duration-500'>Sign In</button>
          </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;