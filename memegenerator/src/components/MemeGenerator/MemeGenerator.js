import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state = {
            topText : "", 
            bottomText: "", 
            randomImg : "http://i.imgflip.com/1bij.jpg", 
            allMemes : []
        }
        this.handleChange=this.handleChange.bind(this)
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
        this.setState({[name]: value})
    }

    handleSubmit(event){
        event.preventDefault()
        const randomNum = Math.floor(Math.random() * this.state.allMemes.length)
        const randomImage = this.state.allMemes[randomNum].url
        this.setState({randomImg: randomImage})
    }

    render() {
        return (

            <div>
                <form className="meme-form"> 
                <input 
                name="topText"
                value={this.state.topText}
                type="text" 
                placeholder="Top Text"
                onChange={this.handleChange}    
                />

                <input 
                name="bottomText"
                value={this.state.bottomText}
                type="text" 
                placeholder="Bottom Text"
                onChange={this.handleChange}    
                />

                <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="Problem?" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
            
        )
    }
}

export default MemeGenerator