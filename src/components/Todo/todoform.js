import React, {useState} from 'react';
import PropTypes from 'prop-types';

Todoform.propTypes = {
    
};

function Todoform(props) {
    const [input,setInput] = useState("");
    const [todos,setTodos] = useState([]);
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const handleClick = (e) => {
        e.preventDefault();
        setTodos(...todos,[{
            id: Math.floor(Math.random()),
            title : input
        }]);
        console.log(...todos)
        setInput('');
    }
    return (
        <form action="">
            <div className="form-group">
                <input type="text" value={input} onChange={handleChange}/>
                <button onClick={handleClick}>Add</button>
                {/*<Todolist todos={todos}/>*/}
            </div>
        </form>
    );
}

export default Todoform;