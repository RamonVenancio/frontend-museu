import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TelaVisitante from "../pages/TelaVisitante";
import TelaLogin from "../pages/TelaLogin";
import TelaAdmin from "../pages/TelaAdmin";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import TelaLayout from "../layouts/TelaLayout";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token')
    if(token){
        return <>{children}</> 
    }else{
        return <Navigate to={"/login"}/>
    }
}

const Ways = () => {
    return (
        <BrowserRouter>
        <Routes>
            {/* O route que engloba os outros, vai ser o template deles. Ele recebe o path que antes a tela visitante recebia, e a tela visitante recebe o index pra saber que ela é a primeira quando se entra */}
            <Route path={"/"} element={<TelaLayout />}>
                <Route index element={<TelaVisitante />}/>
                <Route path={"/login"} element={<TelaLogin />}/>
                <Route path={"/admin"} element={ <ProtectedRoute> <TelaAdmin /> </ProtectedRoute>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    );
}

export default Ways;