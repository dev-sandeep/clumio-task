import React, { useState } from 'react'
import InputText from './../Component/InputText'
import TaskList from './../Component/TaskList'

function Tasks() {
    const [text, setText] = useState('');
    const [task, setTask] = useState([]);

    let handleCahange = (val) => {
        setText(val);
    }

    let onSave = (e) => {
        e.preventDefault();
        setTask([...task, {
            text,
            status: 0,
            id: task.length + 1
        }]);
    }

    let onCheck = (passedId) => {
        console.log("on-Check", passedId);
        let res = task.find(item => (
            item.id === passedId
        ));
        console.log(res, task);
    }
    let onCross = (id) => {
        let res = task.find((item) => (item.id == id));
        //removing elements
        let index = parseInt(res.id) - 1;
        task[index]['status'] = 3;
        console.log(task);
    }

    return (
        <section className="task-page">
            <h3>My Tasks</h3>
            <hr />
            <div className="container">
                <div className="col-lg-12">
                    <form onSubmit={onSave}>
                        <InputText
                            type="text"
                            placeholder="type in your task"
                            onChange={handleCahange}
                        />
                    </form>

                    <TaskList
                        task={task}
                        onCheck={onCheck}
                        onCross={onCross}
                    />
                </div>
            </div>
        </section>
    );
}

export default Tasks;