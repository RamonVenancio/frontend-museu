import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const TelaLayout = () => {
    return(
        <>
            <Header />
            <Outlet />
            {/* o outlet é um componente que vai trazer dentro da rota o que está sendo chamado dentro dele */}
        </>
    );
}

export default TelaLayout;