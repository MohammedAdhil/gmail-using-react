import React from 'react'
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import './MainNav.css'
import { Link } from 'react-router-dom';

// function MainNav() {
//   return (
//    <div className='main '>
//     <Navbar  className='ms-4 d-flex '  >
//         <Container >
//           <Navbar.Brand  href="#home">
//            <img
//               alt=""
//               src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
//               width="100"
//               height="30"
//               className="d-inline-block align-top img"
//             />{' '}
//          <Link to='/' className='link'> </Link> 
//           </Navbar.Brand>
//         <div className='me-6 float-end' >
//         <IoSettingsOutline  width="20" height="30" className='icons'/>
//         <AiOutlineQuestionCircle className='icons'/>
//         <TbGridDots className='icons'/>
//         </div>
//         </Container>
        
        
        
//       </Navbar>
      
     
//    </div>
//   )
// }

// export default MainNav

import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';


function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className='ml-0' href="#home"> <img
              alt=""
              src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
              width="100"
              height="30"
              className="d-inline-block align-top img"
            />{' '}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div >
            <a ><IoSettingsOutline  width="20" height="30" className='icons'/></a>
            <a ><AiOutlineQuestionCircle className='icons'/></a>
            <a ><TbGridDots className='icons'/></a>
            
            
        </div>
      </Container>
    </Navbar>
  );
}

export default BasicExample;