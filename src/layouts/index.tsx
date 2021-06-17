import React, { FC } from 'react'

const Index: FC = (props) => {
  return (
    <div>
      <div>header</div>
      {props.children}
    </div>
  )
}

export default Index
