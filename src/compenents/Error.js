import React from 'react'

function Error() {
  return (
      <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Sorry!</h4>
          <p>We cannot find details for given location</p>
          <hr/>
              <p className="mb-0">Please check if the location exists.</p>
      </div>
  )
}

export default Error