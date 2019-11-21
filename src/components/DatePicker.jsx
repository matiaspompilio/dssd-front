import React from 'react'
import SemanticDatepicker from 'react-semantic-ui-datepickers'

const DatePicker = ({ input, ...props }) => (
  <SemanticDatepicker {...input} {...props} format='DD-MM-YYYY' onDateChange={input.onChange} />
)

export default DatePicker
