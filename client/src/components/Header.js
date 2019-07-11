import React from "react"

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import {
    FaRegBell,
    FaRegHeart,
    FaRegEnvelope, } from "react-icons/fa";

import Disconnect from "./Disconnect"

const pagesArray = [
    { page: "List of person", icon: <FaRegHeart /> },
    { page: "Chat", icon: <FaRegEnvelope /> },
    { page: "Notifications", icon: <FaRegBell /> },
]

const menuProfil = ["Edit profil", "List Profil Block"]

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
      const { notificationsArray, displayPage, dataUser } = this.props
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
                <img src={ process.env.PUBLIC_URL + "img/header.png" } alt="header" style={{ width: "200px" }} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            {
                pagesArray.map((dataPage) => (
                    (dataPage.page === "Notifications")
                        ? (
                            <UncontrolledDropdown key={ `page-${dataPage.page}` }>
                                <DropdownToggle nav caret>
                                { dataPage.icon } { dataPage.page }
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {
                                        notificationsArray.map((notification) => (
                                            <DropdownItem key={ `id-${notification.id}` }>
                                                { notification.notificationType }
                                                <DropdownItem divider />
                                            </DropdownItem>
                                            
                                        ))
                                    }
                                </DropdownMenu>
                            </UncontrolledDropdown>            
                        )
                        : (
                            <NavItem
                                key={ `page-${dataPage.page}` }
                                onClick={ () => displayPage(dataPage.page) }
                            >
                            <NavLink>{ dataPage.icon } { dataPage.page }</NavLink>
                            </NavItem>
                        )
                ))
            }
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Me
                </DropdownToggle>
                <DropdownMenu right>
                    {
                        menuProfil.map((dropdown) => (
                            <DropdownItem key={ `page-${dropdown}` } onClick={ () => displayPage(dropdown) }>
                                { dropdown }
                            </DropdownItem>
                        ))
                    }
                  <DropdownItem divider />
                  <DropdownItem>
                  <Disconnect userName={ dataUser.userName } />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header
