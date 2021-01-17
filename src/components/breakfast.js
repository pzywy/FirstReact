import React from 'react' 
import BreakfastList from './BreakfastList'

class Breakfast extends React.Component
{

    state = 
    {
        elements:[
            {id:'1', title:'jebac dissa', isCompleated:false},
            {id:'2', title:'jebac dissa', isCompleated:true},
            {id:'3', title:'jebac dissa2', iCcompleated:false}
        ]
    }

    markCompleaded(id)
    {
        const index = this.state.elements
        .findIndex(x => x.id == id);
        const newElements = this.state.elements
        if(newElements[index].isCompleated)
        newElements[index].isCompleated = false
        else newElements[index].isCompleated = true
        
        this.setState({elements: newElements})
    }

    addItem()
    {
        //dodawanie
        return 0;
    }

    render()
    {
        const elements = this.state.elements.map(e=>{
            return <BreakfastList element={e} markCompleaded={this.markCompleaded.bind(this)}/>
        })
        return(
            
            <div className="Breakfast-mainDiv">
                Lista
                <input type="text"/>
                <button onClick={this.addItem.bind(this)}>Dodaj</button>
                {elements}
            </div>

        )
    }
}

export default Breakfast;

