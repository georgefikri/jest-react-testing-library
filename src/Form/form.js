import React, {useState} from 'react'

// create login form /////
// create user name
// create last name
// create submit button 

function Form() {
    const [name, setName] = useState({name:'',lastName:''})

    const handleChange = (event)=> {
        event.persist();
        setName(name => ({...name, [event.target.name]:event.target.value }))
    }

    const handleClick = (e)=> {
      e.preventDefault();
      console.log('name:', name.name)
      console.log('lastname:', name.lastName)
    }

    return (
        <div>
            <form data-testid="form">
                <div>
                    <span>first name</span>
                    <input type='text' data-testid="firstName" placeholder='first name' value={name.name} name='name' onChange={handleChange} />
                </div>
                <div>
                    <span>last name</span>
                    <input type='text' placeholder='last name' value={name.lastName} name='lastName' onChange={handleChange} />
                </div>
                <div>
                    <button data-testid='clickme' onClick={handleClick}>click me</button>
                </div>
            </form>
        </div>
    )
}

export default Form
