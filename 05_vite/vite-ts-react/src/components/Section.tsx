import React, { ReactNode } from 'react'

// old approach
// export const Section: React.FC<{title: string}> = ({children, title}) => {
//   return (
//     <section>
//         <h2>{title}</h2>
//         <p>{children}</p>
//     </section>
//   )
// }

type sectionProps = {title?: string, children: ReactNode}

const Section = ({children, title = "Sub heading"}: sectionProps) => {
  return (
    <section>
        <h2>{title}</h2>
         <p>{children}</p>
    </section>
  )
}

export default Section