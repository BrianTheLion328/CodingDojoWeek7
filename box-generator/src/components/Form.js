import React, { useState } from 'react'
import '../App.css'

const Form = () => {
    const [color, setColor] = useState("");
    const [colorBoxes, setColorBoxes] = useState([])


    // const COLOR_BOXES = [
    //     "blue", "yellow", "red"
    // ];

    const createBox = (e) => {
        e.preventDefault();

        const newColor = color

        // colorBoxes.push(newColor)
        setColorBoxes([...colorBoxes, newColor])

        console.log("NEW COLOR: ", newColor)
        console.log("COLOR BOXES: ", colorBoxes)

        setColor("");
    }


    return (
        <div className="color-form">
            <div>
                <form onSubmit={ createBox }>
                    <div>
                        <label>Color: </label>
                        <input type="text" onChange={(e) => setColor(e.target.value)} value={ color } />
                    </div>
                    <input type="submit" value="Add" />
                </form>
            </div>

            <div>
                {colorBoxes.map((color, index) => (
                <p className="colored-box" style={{backgroundColor: color}} key={index}>  </p>
    ))}

            </div>
        </div>
    )
}

export default Form;
