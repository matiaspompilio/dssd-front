import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  Input,
  Form,
  // Image,
  // Button,
  // Header,
  // Icon,
  // Grid,
  // Modal,
} from 'semantic-ui-react'
// import DatePicker from 'src/components/DatePicker'
import Dropdown from 'src/components/Dropdown'

// const src1 = '../../../static/images/call.png'

class AppointmentForm extends Component {
  render() {
    return (
      <>
        {/* <Image src={src1} size='medium' centered /> */}
        <Form.Field>
          <label>Estado de la videollamada</label>
          <Field
            name='state'
            placeholder='Seleccione el siguiente estado'
            component={Dropdown}
            fluid
            search
            selection
            options={[]}
          />
        </Form.Field>
        <Form.Field>
          <label>Comentario</label>
          <Field
            name='comment'
            component={Input}
            placeholder='Ingrese un comentario'
          />
        </Form.Field>
      </>
    )
  }
}


export default reduxForm({
  form: 'appointment'
})(AppointmentForm)
