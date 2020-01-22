import './App.scss';
import React, {useState} from 'react';

const tasks = [
  {label: '1231 23123', check: true},
  {label: 'qweef fwfw fwq', check: false},
];

const App = React.memo(() => {
  const [task, setTask] = useState(tasks);
  const [values, setValues] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (values !== "") {
      const arr = [...task];
      arr.unshift({label: values, check: false});
      setValues("");
      return setTask(arr);
    }
  };

  return <div className="container">
    <div className="header">
      <h1><i>Todo</i></h1>
      <form onSubmit={handleSubmit} className="header__field">
        <input type="text" value={values} onChange={e => setValues(e.target.value)} className="input--field"
               placeholder="Task"/>
        <button type="submit" className="btn btn--mgl">add</button>
      </form>
    </div>
    <main>
      TODO on React Hooks
    </main>
  </div>
});

export default App;
