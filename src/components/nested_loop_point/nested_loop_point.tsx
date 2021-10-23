interface ItemArea {
    links:{
        name:string
        // link:string
        subLink?:ItemArea[]
    }[]
}

export const NestedLoopPoint = (prop:ItemArea) => {
    return(
        <div>
        {prop.links.map(value => {
                return(
                    <>
                    <div className="nested_item">{value.name}</div>
                    {value.subLink && 
                    value.subLink.map(link => {
                        return(
                            <div className="nested_list_item">
                            <NestedLoopPoint
                            links={link.links}/>
                            </div>
                        )
                    })
                    } 
                    </>
                )
            })}
        </div>
    )
}


