import Setbutton from "./components/Setbutton"
import Number from "./components/Number"
import Button from "./components/Button"
import React from "react"
import store from "./redux/store"
import {Provider} from "react-redux"


function App() {
    return (
        <Provider store={store}>
            <div>
                <div className="container">
                    <Setbutton />
                    <Number />
                </div>
                <Button/>
            </div>
        </Provider>
    );
}

export default App;
