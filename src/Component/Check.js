import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

function Check(props) {
    const [data, setData] = useState(0);
    const handleChange = (e) => {
        (e.target.checked) ?
            props.onChange(e.target.id, true) :
            props.onChange(e.target.id, false)
    }
    return (
        <Form.Group controlId='check-1'>
            <Form.Label>{props.label}</Form.Label>
            {
                props.data.map(item => (
                    <Form.Check
                        onChange={handleChange}
                        type={item.type}
                        id={item.label}
                        label={item.label}
                        name={item.name}
                    />
                ))
            }
        </Form.Group>
    );
}

export default Check;