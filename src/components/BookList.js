import React, {Component, useContext} from "react"
import { BookContext } from "../contexts/BookContext"
import { ThemeContext } from "../contexts/ThemeContext"

// class BookList extends Component {
//     static contextType = ThemeContext 
//     // contextType only works in class components
//     // can not use multiple context
//     render(){
//         const {isLightTheme, dark, light} = this.context
//         const theme = isLightTheme ? light : dark
//         return(
//             <div className = "book-list" style={{background:theme.bg, color: theme.syntax}}>
//                 <ul>
//                     <li style = {{background: theme.ui}}>the way of kings</li>
//                     <li style = {{background: theme.ui}}>the name of the wind</li>
//                     <li style = {{background: theme.ui}}>the final empire</li>
//                 </ul>
//             </div>
//         )
//     }
// }

const BookList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext)
    const {books} = useContext(BookContext)
    const theme = isLightTheme ? light : dark
    return(
        <div className = "book-list" style={{background:theme.bg, color: theme.syntax}}>
            <ul>
                {books.map(book => {
                    return (
                        <li key = {book.id} style = {{background: theme.ui}}>{book.title}</li>
                    )
                })}
            </ul>
        </div>
    )
    
}
export default BookList