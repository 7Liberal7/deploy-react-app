import React from "react";

type TypeographyProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode
}

const Typeography = ({ children }: TypeographyProps) => {
  return (
    <>
      {
        <h1 className="title">{children}</h1>
      }
    </>
  )
}

export default Typeography