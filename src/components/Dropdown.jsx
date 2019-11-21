import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownComponent = ({ input, ...props }) => (
  <Dropdown {...props} onChange={(param, data) => input.onChange(data.value)} />
)

export default DropdownComponent
