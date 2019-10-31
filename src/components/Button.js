import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class Button extends React.Component {

    // used with this.context, not Consumer component
    // static contextType = LanguageContext

    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen'
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({ language }) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {

        // used with this.context, not Consumer component
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen'

        return (
            <ColorContext.Consumer>
                {color => this.renderButton(color)}
            </ColorContext.Consumer>
        )
    }
}

export default Button