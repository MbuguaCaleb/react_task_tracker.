# Getting Started with React Task Tracker App

```
1.Small chnages there is no class in react this is replaced with className and for is replaced with htmlFor.

2.Jsx (I can now be able to return my HTML directly from within my javascript).

3.Props is what you want to be passed into your component dynamically.

You may as well have default props.

//default props
Header.defaultProps ={
    title:"Caleb Mbugua"
}

4.Proptypes bring more of typescript functionality into react.

Header.propTypes={
    title:PropTypes.string.isRequired
}

5.Styling in React


(a)Inline

 <h1 style={{color:'red', backgroundColor:'black'}}>{title}</h1>

(b)CSS In Js

 <h1 style={headingStyle}>{title}</h1>

// const headingStyle ={
//     color:'red',
//     backgroundColor:'black'
// }

6.As i loop through using React i must have a unique key ID

  {tasks.map((task)=>(
    <h3 key={task.id}>{task.text}</h3>
  ))}


```

**Sample class based component**

```
import React from 'react';

class App extends React.Component{
render(){
  return (
    <h1>cALEB</h1>
  )
}
}

```

**Project by**

```
Mbugua Caleb

```
