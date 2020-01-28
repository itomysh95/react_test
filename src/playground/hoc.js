

import React from 'react'
import ReactDOM from 'react-dom'

const Info=(props)=>(
    <div>
        <h1>info</h1>
        <p>the info is: {props.info}</p>
    </div>
)

const withAdminWarning=(WrappedComponent)=>{
    // takes the props passed in and passes/spreads it into wrappedComponent below
    return(props)=>(
        <div>
            {props.isAdmin &&<p> this is private ifno. please dont' share</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}


const requireAuthentication = (WrappedComponent)=>{
    return(props)=>(
        <div>
            {props.isAuthenticated?<WrappedComponent {...props}/>:<p>go away sir</p>}
            
        </div>
    )
}

// requireAuthentication
const AuthInfo = requireAuthentication(Info);


const AdminInfo = withAdminWarning(Info)
// ReactDOM.render(<AdminInfo isAdmin={false} info="there are the details"/>,document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info={"you are logged in"}/>,document.getElementById('app'))