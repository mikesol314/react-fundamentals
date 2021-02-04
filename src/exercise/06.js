// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(username)
  }

  const handleChange = event => {
    const userInput = event.target.value

    setUsername(userInput.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          onChange={handleChange}
          value={username}
          type="text"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

// Extra Credit 2 Saving
//
// function UsernameForm({onSubmitUsername}) {
//   const [error, setError] = React.useState(null)

//   const handleSubmit = event => {
//     event.preventDefault()

//     console.dir(event.target)

//     onSubmitUsername(event.target.elements.usernameInput.value)
//   }

//   const handleChange = event => {
//     console.dir(event.target.value)
//     const userInput = event.target.value

//     // const isLowerCase = value === value.toLowerCase()
//     let isLowerCase = true
//     if (userInput !== userInput.toLowerCase()) {
//       isLowerCase = false
//     }

//     // setError(isLowerCase ? null : 'Username must be lower case')
//     if (isLowerCase) {
//       setError(null)
//     } else {
//       setError('Username must be lower case')
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input id="usernameInput" onChange={handleChange} type="text" />
//       </div>
//       <div role="alert" style={{color: 'red'}}>
//         {error}
//       </div>
//       <button disabled={Boolean(error)} type="submit">
//         Submit
//       </button>
//     </form>
//   )
// }
