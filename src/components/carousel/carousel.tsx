import { useRef, useState } from 'react'

interface CarouselProps {
    heading:string,
    children:JSX.Element[]
    n?:number,
    g?:string,
}

export const Carousel = (props:CarouselProps) => {

    const [active,setActive] = useState(0)

    const carouselRef = useRef<HTMLDivElement>(null)

    
    const scrollToNextElement= () => {
        if(carouselRef.current){
            if(active < carouselRef.current.childNodes.length - 1){
                carouselRef.current.scrollLeft = (carouselRef.current.childNodes[active + 1] as HTMLElement).offsetLeft - (carouselRef.current.parentNode as HTMLElement).offsetLeft;
                setActive(active +1)
            }
        }
    }

    const scrollToPreviousElement = () => {
        console.log(active);
        if(carouselRef.current){
            if(active > 0) {
                carouselRef.current.scrollLeft = (carouselRef.current.childNodes[active - 1] as HTMLElement).offsetLeft - (carouselRef.current.parentNode as HTMLElement).offsetLeft ;
                setActive(active - 1)
            }
        }
    }

    return(
        <div>
            <div>
                <p>{props.heading}</p>
                <div>
                    <span className="nav-button cursor_pointer" onClick={scrollToPreviousElement} style={{marginRight:"32px"}}>{"<"}</span>
                    <span className="nav-button cursor_pointer" onClick={scrollToNextElement}>{">"}</span>
                </div>
            </div>
            <div
            className="carousel-slides"
            ref={carouselRef}
            style={{
                gridAutoColumns:`calc((100% - (${props.n?props.n:3} - 1)*${props.g?props.g:"32px"})/${props.n?props.n:3})`,
                gridGap:props.g
            }}
            >
                {props.children}
            </div>
        </div>

    )
}