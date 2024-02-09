import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, addMessagestoUser1, addUser } from '../utils/appSlice';

const AddUser = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [receiver, setReceiver] = useState("");
    const dispatch = useDispatch();
    const users = useSelector(store=> store.app?.userNames);
    const messagesContainer = useSelector(store=> store.app?.messages);
    const submitHandler = () => {
        dispatch(addUser(name));
        setName('');
    }

    const messageSubmitHandler = () => {
        dispatch(addMessage(message));
        setMessage('');
        let arr = ['sudheer',receiver,message]
        dispatch(addMessagestoUser1(arr))
    }
  return (
    <div>
        <div>
          <input
            type="text"
            name="userName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={submitHandler}>Submit</button>
        </div>
        {/* {users.map(el=> <li>{el}</li>)} */}
        <div>
        <input type="text" name='receiver' value={receiver} onChange={(e) => setReceiver(e.target.value)}/>
        <input type="text" name='messages' value={message} onChange={(e) => setMessage(e.target.value)}/>
        <button onClick={messageSubmitHandler}>Submit message</button>
        </div>
        <div>
            {/* {messagesContainer.map(el => <li>{el}</li>)} */}
        </div>
    </div>
  )
}

export default AddUser