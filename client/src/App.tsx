import { Helmet } from "react-helmet-async";
import "./App.css";
import ShitPostComponent from "./shitpost";

function App() {
    return (
        <div className='App'>
            <Helmet>
                <title>
                    Emoji Pasta siêu ỉa chảy
                </title>
            </Helmet>
            <ShitPostComponent />
        </div>
    );
}

export default App;
