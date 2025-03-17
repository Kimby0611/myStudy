import React from 'react'
import Hello from './Hello'

const Library = (props) => {
  return (
    <div>
        <Hello name = "처음 만난 파이썬" numOfPage={300}/>
        <Hello name = "처음 만난 AWS" numOfPage={400}/>
        <Hello name = "처음 만난 리액트" numOfPage={500}/>
    </div>
  )
}

export default Library