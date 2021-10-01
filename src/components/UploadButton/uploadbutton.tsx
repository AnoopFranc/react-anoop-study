import { url } from "inspector"
import { useRef, useState } from "react"

interface UploadButtonProps {
    heading:string
    multiple?:boolean
}

//https://web.dev/file-system-access/
// https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API

export const UploadButton = (props:UploadButtonProps) => {

    const [uploadedFiles,setUploadedFiles] = useState<File[]>([])
    const [fileProgress,setFileProgress] = useState<string[]>([])
    const uploadButtonRef = useRef<HTMLInputElement>(null)

    const handleFileUpload = (event: any) => {
        moveFilesToState(event)
    }
        
    
    

    const moveFilesToState = (event:any) => {
        let files = (event.target as HTMLInputElement).files
        if(files != null){
            let file:File[] = []
            // const reader = new FileReader();
                for (let i = 0; i < files.length; i++) {
                    file.push(files[i])
                    console.log(`files read at ${i} , ${files[i].name}`);
                    updateUploadProgess(files[i],i)
            }
            setUploadedFiles(file)
        }
    }

    const updateUploadProgess = (file:File,index:number) => {
        const reader = new FileReader();
        let data = reader.readAsDataURL(file)
        // console.log(data)
        let temp = [...fileProgress]
        let fileUrl = URL.createObjectURL(file)
        temp[index] = fileUrl
        setFileProgress(temp)
    }

    const handleVisibleUploadButtonClick = () => {
        if(uploadButtonRef){
            uploadButtonRef.current?.click()
        }
    }

    return(
        <div>
            <p>{props.heading}</p>
            <input type="file" multiple={props.multiple} hidden ref={uploadButtonRef} onChange = {handleFileUpload}/>
            <div className="visible-upload-button" onClick={handleVisibleUploadButtonClick}>
                <p>Upload</p>
            </div>
            <div>
                {uploadedFiles.map((file,index) => {
                    return(
                        <>
                        <p>{file.name}</p>
                        <p>{file.type}</p>
                        <span>
                            {fileProgress[index]}
                        </span>
                        {/* <img src={fileProgress[index]} alt={fileProgress[index]}/> */}
                        <iframe src={fileProgress[index]} title={file.name}/>
                        </>
                    )
                })}
            </div>
        </div>
    )
}