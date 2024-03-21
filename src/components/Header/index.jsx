import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #000000;
    padding: 16px 60px;
    height: 13vh;

    img{
    height: 100%;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <img src="../img/museu.png" alt="" />
        </HeaderContainer>
    );
}

export default Header;