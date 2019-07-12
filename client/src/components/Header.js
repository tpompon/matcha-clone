import React from "react"

import { getImageProfil } from "utils/fileProvider"

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
    DropdownItem,
} from "reactstrap"

import { FaRegBell, FaRegHeart, FaRegEnvelope } from "react-icons/fa"

import Disconnect from "./Disconnect"

const pagesArray = [
    { page: "Discover", icon: <FaRegHeart /> },
    { page: "Messages", icon: <FaRegEnvelope /> },
    { page: "Notifications", icon: <FaRegBell /> },
]

const menuProfil = ["Edit profil", "List Profil Block"]

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false,
            profilePic: "",
        }
    }

    toggle() {
        this.setState({ isOpen: !this.state.isOpen })
    }

    componentWillMount() {
        const { dataUser } = this.props
        getImageProfil(dataUser.id)
            .then((response) => this.setState({ profilePic: response.imageProfil[0].picture }))
            .catch((err) => console.error(err))
    }

    render() {
        const { notificationsArray, displayPage, dataUser } = this.props
        const { profilePic } = this.state
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
                                                        (notificationsArray.length > 0)
                                                            ?
                                                                (
                                                                    notificationsArray.map((notification) => (
                                                                        <DropdownItem key={ `id-${notification.id}` }>
                                                                            { notification.notificationType }
                                                                        <DropdownItem divider />
                                                                        </DropdownItem>
                                                                    ))
                                                                )
                                                            :
                                                                (
                                                                    <DropdownItem>
                                                                        <span>No notifications</span>
                                                                    </DropdownItem>
                                                                )
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
                                <DropdownToggle nav>
                                    <img
                                        style={{ width: 30 }}
                                        src={ process.env.PUBLIC_URL + `/imageProfil/${dataUser.id}/${profilePic}` }
                                        alt="Profile pic"
                                    />
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
        )
    }
    
}

export default Header
