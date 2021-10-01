import { Carousel, FlexBoxTitleCard, UploadButton } from "../../components"
export const CAROUSELDEMO = () => {
    return(
        <div>
            <Carousel
            heading="demo"
            n={2}
            g="12px"
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

            <UploadButton
            heading="Select Files"
            multiple
            />
        </div>
    )
}