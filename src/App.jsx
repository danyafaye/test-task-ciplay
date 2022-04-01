import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import ChangePass from "./components/ChangePass/ChangePass";
import {useSelector} from "react-redux";
import {Fragment} from "react";

const App = () => {
    const {isAuth} = useSelector(state => state.app)
    return (
        <div className="app__wrapper">
            <Navbar/>
            <div className="app__content">
                <Routes>
                    {isAuth ? (<Route path="content__pass" element={<ChangePass/>}/>) : (
                        <Fragment>
                            <Route path="content__reg" element={<Registration/>}/>
                            <Route path="content__login" element={<Login/>}/>
                        </Fragment>)}
                </Routes>
            </div>
        </div>
    );
}

export default App;
