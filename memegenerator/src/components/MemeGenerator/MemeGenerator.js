import React, {Component} from "react"

class MemeGenerator extends Component {

    constructor(){
        super()
        this.state = {
            topText: "", 
            bottomText: "",
            allMemes : []
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            this.setState({allMemes : memes})
        })
    }
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <form className="meme-form">
                <input 
                type="text" 
                placeholder="Top Text" 
                onChange={this.handleChange}
                name="topText" 
                value={this.state.topText}/>
                
                <input 
                type="text" 
                placeholder="Bottom Text" 
                onChange={this.handleChange}
                name="bottomText" 
                value={this.state.bottomText}/>
                <br/>
                <button>Gen</button>

            </form>
        )
    }
    
}

export default MemeGenerator