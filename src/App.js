import React, {Fragment, useState} from 'react'
import Axios from 'axios'
import "./App.css"
import {v4 as uuidv4} from 'uuid'
import Recipe from './components/Recipe'
import Alert from './components/Alert'
import { AiOutlineSearch } from 'react-icons/ai'

const App = () => {

    const [recipes, setRecpies] = useState([])
    const [recipeName, setRecipeName] = useState('')
    const [alert, setAlert] = useState("")

    const app_id = "b213a682"
    const app_key = "2418ebd040a20738db42f53922ba1ce0"
    const url = `https://api.edamam.com/search?q=${recipeName}&app_id=${app_id}&app_key=${app_key}`

    const getData = async () => {
        if(recipeName !== "") {
            const result = await Axios.get(url)
            if(!result.data.more) {
                return setAlert("No food with such name")
                
            }
            setRecpies(result.data.hits)
            console.log(result)
            setRecipeName('')
        } else {
            setAlert("Please fill the form")
        }
        
    }

    const onSubmit = e => {
        e.preventDefault()
        getData()
    }

    const onChange = e => {
        setRecipeName(e.target.value)
    }
    return (
        <Fragment>
        <div className="header">
        <h1>Food Searching App</h1>
        </div>
        <div className="App">
            
            <form className='search-form' onSubmit={onSubmit}>
                {alert !== "" && <Alert alert={alert} />}
                <input type='text' placeholder='Search Recipe' autoComplete='off' onChange={onChange} value={recipeName}/>
                <input type='submit' value='Search' ></input>
                
            </form>
            
            <div className='recipes'>
                {recipes !== [] && recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
            </div>
        </div>
        </Fragment>
    )
}

export default App
