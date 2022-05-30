import React, {Component} from 'react';
import ReactDom from "react-dom/client"
import Newcard from "./yangilik/new";
import Teacher from "./ustozlar/teacher";
import Course from "./kurslar/kurs";
import Mobile from "./aloqa/mobile";

class Index extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src="/public/" alt="im" width="30" height="24"/>
                        </a>
                    </div>
                </nav>
            </div>
        );
    }
}
const root = ReactDom.createRoot(document.querySelector("#root"))
root.render(<Index/>)
{/*<Newcard/>*/}
{/*<Teacher/>*/}
{/*<Course/>*/}
{/*<Mobile/>*/}
