import React, { useState } from 'react'
import { Card } from 'react-bootstrap' 

const Tweet = (props) => {
    // const [counter, setCounter] = useState(0)

    // const increment = () => {
    //     setCounter( counter + 1)
    // }

    // const decrement = () => {
    //     setCounter( counter - 1)
    // }

    const text = props.text
    const author = props.author
    const date = props.date
  
    return (
        <div>
            {/* <h3>{text.toUpperCase()}</h3>
            <h6>by {author} on {date}</h6> */}
            <Card style={{ width: '50rem', margin: 'auto', marginBottom: '30px' }}>
  <Card.Body>
        <Card.Title>{author}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
    <Card.Text>
      {text}
    </Card.Text>
  </Card.Body>
</Card>
            {/*<h1>counter: {counter}</h1>
             <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button> */}
        </div>
    )
}

export default Tweet