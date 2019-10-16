import React from 'react'
import Form from 'react-bootstrap/Form'

function SelectOption(props) {
    let handleChange = (e) => {
        props.onChange(e.target.value);
    }
    return (
        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control as="select" onChange={handleChange}>
                {props.data.map(item => (
                    <option id={item.id}>{item.label}</option>
                ))}
            </Form.Control>
        </Form.Group>
    )
}

export default SelectOption;