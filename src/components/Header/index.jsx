import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #9eadba;
    padding: 16px 60px;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <h1>Logo</h1>
        </HeaderContainer>
    );
}

export default Header;