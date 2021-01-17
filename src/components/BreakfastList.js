import React from 'react'

const BreakfastList = props =>
{
   return <div className={`Breakfast-element ${props.element.isCompleated ? 'Breakfast-element-compleate' : ''}`} key={props.element.id}>
      <h2>{props.element.title}</h2>
      
      <button onClick={() => props.markCompleaded(props.element.id)}>Toggle</button>
      </div>
}
export default BreakfastList