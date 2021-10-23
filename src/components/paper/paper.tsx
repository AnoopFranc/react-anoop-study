interface paperProps {
    paperStyle?: string
    children: JSX.Element
  }
  
  export const Paper = ({paperStyle, children}: paperProps) => {
    return <div className={"paper " + paperStyle}>{children}</div>
  }
  