import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  Input,
  Form,
  Label,
  Button,
  Grid,
  // Image,
  // Icon,
  // Modal,
} from 'semantic-ui-react'
// import DatePicker from 'src/components/DatePicker'
import Dropdown from 'src/components/Dropdown'

// const src1 = '../../../static/images/call.png'

const statesTranslate = {
  UNINITIATED: 'Sin iniciar',
  INITIATED_IN_TERM: 'Iniciado en término',
  INITIATED_WITH_DELAY: 'Iniciado con delay',
  SUSPENDED: 'Suspendido',
  COMPLETED_IN_TERM: 'Completado en término',
  COMPLETED_WITH_DELAY: 'Completado con delay',
  INTERRUPTED_BY_TECHNICAL_PROBLEM: 'Interrumpido por problema técnico',
  INTERRUPTED_BY_INMATE_BEHAVIOUR: 'Interrumpido por comportamiento desconocido'
}


class AppointmentForm extends Component {
  render() {
    const {
      current,
      handleSubmit,
      onSubmit,
    } = this.props

    const stateOptions = current.possibleStates.map((item, key) => ({
      key,
      text: statesTranslate[item] ? statesTranslate[item] : item,
      value: item
    }))

    return (
      <Form>
        {/* <Image src={src1} size='medium' centered /> */}
        <Form.Field>
          <Label as='a' color='blue' image>
            Estado
            <Label.Detail>{statesTranslate[current.state]}</Label.Detail>
          </Label>
          <Field
            name='state'
            placeholder='Seleccione el siguiente estado'
            component={Dropdown}
            fluid
            search
            selection
            options={stateOptions}
          />
        </Form.Field>
        <Form.Field>
          <label>Comentario</label>
          <Field
            name='comment'
            required
            component={Input}
            placeholder='Ingrese un comentario'
          />
        </Form.Field>
        <Grid textAlign='center'>
          <Grid.Row>
            <Form.Field>
              <Button
                onClick={handleSubmit(onSubmit)}
              >
                Aceptar
              </Button>
            </Form.Field>
          </Grid.Row>
        </Grid>
      </Form>
    )
  }
}


export default reduxForm({
  form: 'appointment'
})(AppointmentForm)
