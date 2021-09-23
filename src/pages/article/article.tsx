import { useEffect, useState } from "react"
import { getArticle } from "../../api"


import {useHistory, useLocation, useParams} from "react-router-dom"


type articlePara = {
    id: string
  }

export const ArticlePage = () => {

    let {id} = useParams<articlePara>()

    const [articledata , setArticleData] =  useState({
        author: "",
        content: "",
        date: "",
        tags: [""],
        heading: "",
      })

      useEffect(() => {
          getArticle(parseInt(id)).then((res) => {
            setArticleData({
              author: res?.data["author"],
              content: res?.data["content"],
              date: res?.data["date"],
              heading: res?.data["heading"],
              tags: res?.data["tags"],
            })
          }).catch(err => {
            console.error(`error while geting article ${err}`)
          })
    
        window.scroll(0, 0)
    
      }, [id])

    return(
        <div>
            <p>{articledata.heading}</p>
            <p>{articledata.date}</p>
            <div dangerouslySetInnerHTML =  {{__html: articledata.content}}></div>
        </div>
    )
}