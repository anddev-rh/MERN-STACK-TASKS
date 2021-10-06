import React, { useState, useEffect } from 'react'


const App = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);


  const addTask = (e) => {
    fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        M.toast({ html: 'Task saved' })
        setTitle('')
        setDescription('')

      })

      .catch(err => console.error(err))
    e.preventDefault();
  }


  useEffect(() => {
    fetchTasks();
  }, [])


  const fetchTasks = () => {
    fetch('/api/tasks')
      .then(res => res.json())
      .then(data => {
        setTasks([...tasks, data])
        console.log(tasks)
      })
  }



  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "title") {
      setTitle(value);
    }
    else if (name == "description") {
      setDescription(value);
    }
  }


  return (
    <div>
      {/* navigation */}
      <nav className="light-blue darken-4">
        <div className="container">
          <a className="brand-logo" href="/">MERN STACK</a>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col s5">
            <div className="card">
              <div className="card-content">
                <form onSubmit={(e) => { addTask(e) }}>
                  <div className="row">
                    <div className="input-field col s12">
                      <input name="title" value={title} type="text" placeholder="Task Title" onChange={e => handleChange(e)} />
                    </div>

                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <textarea name="description" value={description} placeholder="Task Description" className="materialize-textarea" onChange={e => handleChange(e)} />
                    </div>

                  </div>

                  <button className="btn light-blue darken-4">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col s7">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {
                  tasks.map(task => {
                    return (
                      <tr>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;

