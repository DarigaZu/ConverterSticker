import React from "react";
import { Route, Routes } from "react-router";
import Header from "./Header/main";
import Footer from "./Footer/main";
import Home from "../Pages/Home/main";
import SignUp from "../Pages/SignUp/main";
import Error404 from "../Pages/Error404/main";
import SettingsProfile from "../Pages/SettingsProfile/main";
import Create from "../Pages/Create/main";
import LogIn from "../Pages/LogIn/main";
import MyProfile from "../Pages/MyProfile/main";
import OtherProfile from "../Pages/OtherProfile/main";
import Search from "./Search/main";

function Pages(){
    return(
        <>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/undefined' element={<Error404/>}/>
            <Route path='/settings' element={<SettingsProfile/>}/>
            <Route path='/added-stickers-pack' element={<Create/>}/>
            <Route path='/myprofile' element={<MyProfile/>}/>
            <Route path='/otherprofile' element={<OtherProfile/>}/>
            <Route path='/search' element={<Search/>}/>
        </Routes>
        <Footer/>
        </>
    )
}
export default Pages;