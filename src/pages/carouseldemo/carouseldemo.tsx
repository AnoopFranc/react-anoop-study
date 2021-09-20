import { Carousel, FlexBoxTitleCard } from "../../components"

export const CAROUSELDEMO = () => {
    return(
        <div>
            <Carousel
            heading="demo"
            g="24px"
            >
             {[...Array(10)].map((_val,index) => {
                    return(
                        <FlexBoxTitleCard
                        title={`item ${index+1}`}
                        key={`item ${index+1}`}
                        />
                    )
                })}
            </Carousel>
        </div>
    )
}