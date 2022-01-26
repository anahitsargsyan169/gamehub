import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Main>
      <Content>{children}</Content>
    </Main>
  );
};

const Main = styled.main`
  background-color: rgb(50, 56, 62);
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Layout;
