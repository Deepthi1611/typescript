import React, { ReactElement } from 'react'
// defining type of props thst need to be received by Heading component
type HeadingProps = {title: string}

const Heading = ({title}: HeadingProps): ReactElement => {
  return (
    <h1>{title}</h1>
  )
}

export default Heading