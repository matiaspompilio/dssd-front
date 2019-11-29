import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

class DropdownComponent extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(value) {
    const {
      input,
      selectedValue
    } = this.props
    if (selectedValue) return input.onChange(selectedValue)

    input.onChange(value)
  }

  render() {
    const {
      selectedValue,
      disabled,
      ...rest
    } = this.props
    return (
      <Dropdown
        value={selectedValue}
        disabled={disabled}
        onChange={(param, data) => this.onChange(data.value)}
        {...rest}
      />
    )
  }
}

export default DropdownComponent
