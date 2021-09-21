import { Carousel, FlexBoxTitleCard } from "../../components"
import {LinkedinShareButton} from 'react-share'
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
            <LinkedinShareButton
                title="ssss"
                summary="anoop"
                source="123"  url={`https://www.dev-kibwebsite.regovdevservices.com/`}>
                    <p>hi</p>
                </LinkedinShareButton>
        </div>
    )
}