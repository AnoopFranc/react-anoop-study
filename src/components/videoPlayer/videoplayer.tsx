import { useEffect, useRef, useState } from "react"

interface VideoPlayerProps {
    src:string
    autoPlay?:boolean
}

export const VideoPlayer = (props: VideoPlayerProps) => {
    const [ispaused,setIsPaused] = useState(false)
    const [hoverSeeked,setHoverSeeked] = useState(0)

    const videoElementRef = useRef<HTMLVideoElement>(null)
    const hiddenVideoElementRef = useRef<HTMLVideoElement>(null)
    const previewImageElementRef = useRef<HTMLImageElement>(null)
    const seekRangeElementRef = useRef<HTMLInputElement>(null)
    const previewCanvasElementRef = useRef<HTMLCanvasElement>(null)

    const togglePlayPause = () => {
        if(videoElementRef.current){
            ispaused?videoElementRef.current.play():videoElementRef.current.pause()
            setIsPaused(!ispaused)
        }
    }

    const seekToTime = (time:number) => {
        if(videoElementRef.current){
            videoElementRef.current.currentTime = parseInt(time.toFixed(2))
            setHoverSeeked((videoElementRef.current.currentTime / videoElementRef.current.duration) * 100)
        }
    }

    const handleSeekSliderChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(videoElementRef.current){
            let seekTime = (parseInt(e.target.value)/parseInt(e.target.max))*videoElementRef.current.duration
            seekToTime(seekTime)
        }

    }

    const Mute = () => {
        if(videoElementRef.current){
            videoElementRef.current.volume = 0.0
        }
    }

    const calculateSliderPositionOnHover = (e:any) => {
        return (e.offsetX / e.target.clientWidth) *  parseInt(e.target.getAttribute('max'),10);
    }

    const captureVideoFrame = (time:number) => {
        console.log("outside hidden frame")
        if(hiddenVideoElementRef.current && previewCanvasElementRef.current){
            console.log("in hidden frame")
            let canvas = previewCanvasElementRef.current
            canvas.width = 150;
            canvas.height = 100;
            hiddenVideoElementRef.current.currentTime = time
            let video = hiddenVideoElementRef.current
            canvas.getContext('2d')?.drawImage(video, 0, 0, 150, 100)
            canvas.style.display = "block"
            return canvas.toDataURL()
            // if(previewImageElementRef.current){
            //     previewImageElementRef.current.src = ""
            //     previewImageElementRef.current.src =  canvas.toDataURL()
            // }
        }
    }

    const getPreviewVideoFrameUrl = async(time:number) => {
        return new Promise((resovle,reject) => {
            try {
                resovle(captureVideoFrame(time))
            } catch (error) {
                reject("")
            }
        })
    }

    const setPreviewImage = async (time:number) => {
            if(previewImageElementRef.current){
                previewImageElementRef.current.src =  await getPreviewVideoFrameUrl(time) as string
                console.log(previewImageElementRef.current.src)
            }
    }

    const positionImagePreviewToleft = (e:any) => {
        if(previewImageElementRef.current){
            previewImageElementRef.current.style.left = e.offsetX + 'px'
        }
        if(previewCanvasElementRef.current){
            previewCanvasElementRef.current.style.left = e.offsetX + 'px'
        }
    }

    const getPreviewImageOnHover = (e:any) => {
        if(previewImageElementRef.current) {
            previewImageElementRef.current.src = ""
        }
        if(videoElementRef.current){
            positionImagePreviewToleft(e)
            setPreviewImage(calculateSliderPositionOnHover(e)*(videoElementRef.current.duration/100))
        }
    }



    useEffect(() => {
        if(seekRangeElementRef.current){
            seekRangeElementRef.current.addEventListener('mousemove',getPreviewImageOnHover)
        }
        return(() => seekRangeElementRef.current?.removeEventListener('mousemove',getPreviewImageOnHover))

    },[])

    return(
        <div className="custom_video_player_wrapper">
            <video className="video_player" ref={videoElementRef} src={props.src} autoPlay={props.autoPlay} controls>
            </video>
            <video className="hidden_video_player" ref={hiddenVideoElementRef} src={props.src} autoPlay={props.autoPlay}>
            </video>
            <div className="custom_video_controls" >
                <div className="control_elemennts_wrapper">

                    <div onClick={togglePlayPause} className={`video_control_play ${ispaused?"playing":"paused"}`}>
                    </div>

                    <div onClick={Mute}>
                        Mute
                    </div>

                </div>
                <div className ="video_seek_element_wrapper">
                    <img src="" alt="preview" className="video_seek_preview" ref={previewImageElementRef}/>
                    <canvas ref={previewCanvasElementRef} className="hidden_preview_canvas"/>
                    <input
                    type="range"
                    max={100}
                    min={0}
                    value={hoverSeeked}
                    className="custom_seek_element"
                    ref={seekRangeElementRef}
                    onChange={handleSeekSliderChange}
                    />
                </div>
            </div>
        </div>
    )
}