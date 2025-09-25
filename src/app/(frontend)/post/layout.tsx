// craete layout for post.tsx file
import React, { ReactNode } from 'react'        

export default function layout({children}: {children: ReactNode}) {                     
    return (    
        <div>
            <h1>Post Layout</h1>
            {children}
        </div>
    )
}                       