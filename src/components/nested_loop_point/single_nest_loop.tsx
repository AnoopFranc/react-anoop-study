interface PointCardProps {
    pointData: {
      mainPoint: string
      subPoint: string[]
    }[] 
  }

export const singleNest = (props:PointCardProps) => {
    return(
        <ol>
        {props.pointData.map((value) => {
          return (
            <>
              <li>
                <div>
                  {value.mainPoint}
                  <div>
                    <ul>
                      {value.subPoint.map((point) => {
                        return <li>{point}</li>
                      })}
                    </ul>
                  </div>
                </div>
              </li>
            </>
          )
        })}
      </ol>
    )
}