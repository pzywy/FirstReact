import React from 'react' 
import BreakfastList from './BreakfastList'

class Breakfast extends React.Component
{

    state = 
    {
        elements:[
            
        ],
        inputValue: '',
        elementsCount:0
    }

    markCompleted(id)
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
        this.state.elementsCount+=1
        const item = 
        {
            id: this.state.elementsCount,
            title: this.state.inputValue
        }
        //tu można dodać jakieś sortowanie
        const newElements = [item,...this.state.elements]

        this.setState({elements: newElements})
    }

    inputHandler(event)
    {
        const newValue = event.target.value
        this.setState({inputValue: newValue})
    }

    render()
    {
        const elements = this.state.elements.map(e=>{
            return <BreakfastList element={e} markCompleted={this.markCompleted.bind(this)}/>
        })
        return(
            
            <div className="Breakfast-mainDiv">
                <div className="Breakfast-inputs">
                
                <input type="text" value={this.state.inputValue} onChange={this.inputHandler.bind(this)}/>
                <button onClick={this.addItem.bind(this)}>Dodaj</button>
                </div>

                {elements}
            </div>

        )
    }
}

export default Breakfast;

