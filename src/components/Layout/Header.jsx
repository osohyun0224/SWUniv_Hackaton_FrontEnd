import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 0;
  top: 0;
`;

const StyledLogo = styled.div`
  font-size: 30px;
  cursor: pointer;
  z-index: 10;
`;

const StyledButton = styled.div`
  cursor: pointer;
  font-size: 24px;
  z-index: 10;
`;

function Header() {
  const navigation = useNavigate();
  const user = useSelector((state) => state.user);

  return (
    <StyledHeader>
      <StyledLogo onClick={() => navigation("/")}>Loca</StyledLogo>
      {!user.access_token ? (
        <StyledButton onClick={() => navigation("/login")}>LOGIN</StyledButton>
      ) : (
        <StyledButton onClick={() => navigation("/my")}>MY</StyledButton>
      )}
    </StyledHeader>
  );
}

export default Header;
