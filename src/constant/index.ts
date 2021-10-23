interface ItemArea {
    links:{
        name:string
        // link:string
        subLink?:ItemArea[]
    }[]
}
export const demoLink:ItemArea = {
    links:[
        {
            name:'anoop',
            subLink:[
                {
                    links:[
                        {
                            name:'developer'
                        },
                        {
                            name:'bugs'
                        },
                        {
                            name:'unit test'
                        },
                        {
                            name:'front end',
                            subLink:[
                                {
                                    links:[
                                        {
                                            name:'react'
                                        },
                                        {
                                            name:'Angular'
                                        },
                                        {
                                            name:'Vue'
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}