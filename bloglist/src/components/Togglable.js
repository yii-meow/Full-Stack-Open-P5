import { useState } from 'react'

const Togglable = (props) => {
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    return (
        <span>
            <span style={hideWhenVisible}>
                <button onClick={toggleVisibility} style={{ "display": "inline-block" }}>
                    {props.buttonLabel}
                </button>
            </span>

            <span style={showWhenVisible}>
                {props.buttonLabel === "view" ?
                    <span>
                        <button onClick={toggleVisibility}>hide</button>
                        {props.children}
                    </span>
                    :
                    <div>
                        {props.children}
                        <button onClick={toggleVisibility}>cancel</button>
                    </div>
                }
            </span>
        </span>
    )
}

export default Togglable