import React from 'react'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';  
import { Link } from "react-router-dom";

const Header3 = () => {
  return (
    
<Navbar bg="" expand="lg" style={{paddingLeft:'5%',paddingRight:'5%',color:'#fff'}}>
<>
  <Navbar.Brand href="/">
    {/* <img className="LogoHeight" src={testnetlogo}/> */}hii
</Navbar.Brand>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button> */}
  <Navbar.Toggle aria-controls="" className="a b"/>
  <Navbar.Collapse id="" >
    <Nav
      className="ml-auto mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="/"  style={{marginRight:'25px',color:"#7F3AF3",minWidth:'',fontSize:'18px',fontWeight:""}}>
      Home
      </Nav.Link>
      <li className="nav-item dropdown">
      <Nav.Link href="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{marginRight:'25px',color:"#7F3AF3",minWidth:'',fontSize:'18px',fontWeight:""}}>
      Blockchain
      </Nav.Link>
      <div className="dropdown-menu dropdown-menu-right" style={{backgroundColor:"#0F1B29",height:"auto",width:"240%",marginRight:"-5%",padding:"10px",boxShadow:"rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",border:"1px solid #fff"}} aria-labelledby="navbarDropdown">
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <Nav.Link className="dropdown-item drphover" href="/blocks" style={{marginRight:'25px',color:"#7F3AF3",minWidth:'',fontSize:'18px',fontWeight:""}} to="/blocks" >Blocks</Nav.Link>
            <Nav.Link className="dropdown-item drphover" href="/transactions" style={{marginRight:'25px',color:"#7F3AF3",minWidth:'',fontSize:'18px',fontWeight:""}} to="/transactions" >Transactions</Nav.Link>
            </div>
            <div className='col-md-6 col-sm-12'>     
            <Nav.Link className="dropdown-item drphover" href="https://status.sharkweb.com/" target='_blank' style={{marginRight:'25px',color:"#7F3AF3",minWidth:'',fontSize:'18px',fontWeight:""}} to="/" >Nodes</Nav.Link> 
            <Nav.Link className="dropdown-item drphover" href="/assets" style={{marginRight:'25px',color:"#7F3AF3",minWidth:'',fontSize:'18px',fontWeight:""}} to="/assets">Assets</Nav.Link>
            </div>
        </div>      
      </div>
      </li>
      
      <Nav.Link target='_blank' href="https://sharkwallet.app"  style={{marginRight:'25px',color:"#7F3AF3",minWidth:'',fontSize:'18px',fontWeight:""}}>
      Wallets
      </Nav.Link>
      <Nav.Link  href="/nft" style={{marginRight:'25px',color:"#7F3AF3",minWidth:'',fontSize:'18px',fontWeight:""}}>
       NFT
      </Nav.Link>
      </Nav>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:'#7F3AF3',border:'1px solid #000',borderRadius:'2rem',color:'#fff',minHeight:'6vh',fontSize:'17px',width:"8rem",}}>
          Testnet
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link className="dropdown-item" target='_blank' href="https://sharkscan.com/" style={{}}>Beta</Link>
        </div>
      </div>
      <Nav
      className="ml-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      </Nav>  
  </Navbar.Collapse>
</>
</Navbar>
  )
}

export default Header3
