import './App.scss';
import classNames from 'classnames';
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

  const handleCheck = index => {
    const arr = [...task];
    arr[index].check ? arr[index].check = false : arr[index].check = true;
    return setTask(arr)
  };

  const handleDelete = index => {
    const arr = [...task];
    arr.splice(index, 1);
    return setTask(arr)
  };

  const handleInput = (index, newValue) => {
    const arr = [...task];
    arr[index].label = newValue;
    return setTask(arr)
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
      <ul className="list">
        {task.map((item, index) => (
          <li key={item.label} className="list__item">
            <div className="data-field">
              <span className="data-field--number">1/21/2020</span>
              <span className="data-field--time">15:00</span>
            </div>
            <input type="text"
                   className={classNames("output-field ", {
                     "output-field--checked": item.check,
                     "output-field--unchecked": !item.check,
                   })}
                   onChange={e => handleInput(index, e.target.value)}
                   value={item.label} disabled={item.check} />
            <div className="btn-panel">
              <button className={classNames("check", {
                "check--checked": item.check,
                "check--unchecked": !item.check,
              })}
                      onClick={() => handleCheck(index)}
              >
                C
              </button>
              <button className="delete"
                      onClick={() => handleDelete(index)}
              >
                D
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  </div>
});

export default App;
