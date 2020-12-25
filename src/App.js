import { HashRouter } from "react-router-dom";
import Sidebar from './views/containers/Sidebar';
import Header from './views/containers/Header';
import Router from './views/routes';

function App() {
    return (
        <HashRouter>
            <div className='app'>
                <div className='d-flex'>
                    <Sidebar />
                    <div className='flex-grow-1'>
                        <Header />
                        <Router />
                    </div>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;