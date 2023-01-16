import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'

const Sidebar = () => {
  return (
    <Nav bsStyle="pills" stacked>
      <NavItem title="Item 1">
        <Nav bsStyle="pills" stacked>
          <NavItem title="Sub Item 1">Sub Item 1</NavItem>
          <NavItem title="Sub Item 2">Sub Item 2</NavItem>
          <NavItem title="Sub Item 3">Sub Item 3</NavItem>
        </Nav>
      </NavItem>
      <NavItem title="Item 2">Item 2</NavItem>
      <NavItem title="Item 3">Item 3</NavItem>
    </Nav>
  )
}
export default Sidebar
