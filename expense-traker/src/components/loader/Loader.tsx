import React from 'react'
import { Spinner } from 'react-bootstrap'

type Props = {
    message : string 
}


const Loader = ({message} : Props) => {
  return (
    <div className="d-flex flex-column align-items-center my-5">
            <Spinner animation={'grow'} role="status">
                <span className='visually-hidden'>{message}</span>
            </Spinner>
            <span>{message}</span>
        </div>
  )
}

Loader.defaultProps = {
    message : "Fetching"
}

export default Loader;