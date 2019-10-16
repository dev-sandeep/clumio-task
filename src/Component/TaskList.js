import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

function TaskList(props) {
    let counter = 1;

    return (
        <section className='task-list'>
            {props.task.map((item) => (
                <div className='row' key={counter++}>
                    <div className='col-lg-10'>
                        <Alert key={item.text} variant={item.status <= 1 ? 'primary' : 'dark'}>
                            {item.text}
                        </Alert>
                    </div>
                    <div className='col-lg-2'>
                        <div className="text-right" style={{ marginTop: 5 }}>
                            <Button variant="danger" value={item.id} onClick={(e)=>{
                                props.onCross(e.target.value)
                            }} className='btn btn-small'>
                                &#10005;
                            </Button>
                            &nbsp;
                            <Button variant="success" value={item.id} onClick={(e)=>{
                                props.onCheck(e.target.value)
                            }} >
                                &#10003;
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default TaskList;