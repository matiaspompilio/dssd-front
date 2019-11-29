import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  Input,
  Form,
  Button,
  Header,
  Icon,
  Grid,
  Modal,
} from 'semantic-ui-react'
import DatePicker from 'src/components/DatePicker'
import Dropdown from 'src/components/Dropdown'


const rangeOptions = [
  {
    key: 1,
    text: '8 AM a 9 AM',
    value: 1,
  },
  {
    key: 2,
    text: '9 AM a 10 AM',
    value: 2,
  },
  {
    key: 3,
    text: '10 AM a 11 AM',
    value: 3,
  },
  {
    key: 4,
    text: '11 AM a 12 PM',
    value: 4,
  },
  {
    key: 5,
    text: '12 PM a 13 PM',
    value: 5,
  },
  {
    key: 6,
    text: '13 PM a 14 PM',
    value: 6,
  },
]

const InterviewForm = (
  {
    locations,
    handleSubmit,
    onSubmit,
    confirm,
    recommendations,
    recoSelected,
    users
  }
) => {
  const locationsOptions = locations.map((item, key) => ({
    key,
    text: item.name,
    value: item.id,
  }))

  const recoOptions = recommendations.map((item, key) => ({
    key,
    text: `${item.locationName}, ${item.date}, ${rangeOptions[item.range - 1].text}`,
    value: JSON.stringify(item)
  }))

  const userOptions = users.map((item, key) => ({
    key,
    text: item,
    value: item,
  }))
  return (
    <>
      <Modal
        // trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
        open={confirm}
        // onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='browser' content='Solicitud de entrevista' />
        <Modal.Content>
          <h3>La solicitud de entrevista fue creada con éxito.</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color='green'
            // onClick={this.handleClose}
            inverted
          >
            <Icon name='checkmark' /> Aceptar
          </Button>
        </Modal.Actions>
      </Modal>
      <Form>
        <Form.Field>
          <label>Solicitante</label>
          <Field
            name='applicant'
            component={Dropdown}
            placeholder='Seleccione el solicitante de la entrevista'
            fluid
            search
            selection
            options={userOptions}
          />
        </Form.Field>
        <Form.Field>
          <label>Participantes</label>
          <Field
            name='participants'
            component={Dropdown}
            placeholder='Seleccione los demás participantes de la entrevista'
            fluid
            multiple
            search
            selection
            options={userOptions}
          />
        </Form.Field>
        <Form.Field>
          <label>Número de causa</label>
          <Field
            name='caseNumber'
            component={Input}
            placeholder='Ingrese un numero de causa'
            type='number'
          />
        </Form.Field>
        <Form.Field>
          <label>Motivo</label>
          <Field
            name='reason'
            component={Input}
            placeholder='Ingrese el motivo de la videoconferencia'
          />
        </Form.Field>
        {confirm === false && (
          <Form.Field>
            <label>Recomendaciones</label>
            <Field
              name='recoSelected'
              component={Dropdown}
              placeholder='Seleccione entre las siguientes recomendaciones'
              fluid
              search
              selection
              options={recoOptions}
            />
          </Form.Field>
        )}
        <Form.Field>
          <label>Localización</label>
          <Field
            name='locationId'
            component={Dropdown}
            placeholder='Seleccione la localización de la entrevista'
            fluid
            search
            selection
            selectedValue={recoSelected ? JSON.parse(recoSelected).locationId : undefined}
            disabled={confirm === false}
            options={locationsOptions}
          />
        </Form.Field>
        <Grid.Row>
          <Grid columns={2}>
            <Grid.Column width='50'>
              <Form.Field>
                <label>Fecha</label>
                <Field
                  name='date'
                  component={DatePicker}
                  date={recoSelected ? JSON.parse(recoSelected).range : undefined}
                  disabled={confirm === false}
                  pointing='top left'
                  placeholder='Ingrese la fecha estimada para la videoconferencia'
                />
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field>
                <label>Rango horario</label>
                <Field
                  type='input'
                  name='range'
                  selectedValue={recoSelected ? JSON.parse(recoSelected).range : undefined}
                  disabled={confirm === false}
                  component={Dropdown}
                  placeholder='Seleccione el rango horario'
                  selection
                  options={rangeOptions}
                />
              </Form.Field>
            </Grid.Column>
          </Grid>
        </Grid.Row>
        <Grid textAlign='center'>
          <Grid.Row>
            <Form.Field>
              <Button
                onClick={handleSubmit(onSubmit)}
              >
                Enviar
              </Button>
            </Form.Field>
          </Grid.Row>
        </Grid>
      </Form>
    </>
  )
}

export default reduxForm({
  form: 'interview'
})(InterviewForm)
