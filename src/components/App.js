import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <ol key="relativeList">
                <li key="relativeListItem1">Raghuraj singh</li>
                <li key="relativeListItem1">Arun sharma</li>
                <li key="relativeListItem1">Shivansh shrotriya</li>
               </ol>
            </div>
        )
    }
}


export default App;
