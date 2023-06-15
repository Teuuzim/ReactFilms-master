import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    --bs-bg-opacity: 1;
    background: rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important;
    color: #fff;
  }
  div.offcanvas-top {
    height: 5%;
  }
  div.offcanvas {
    padding-bottom: 200px !important;
    background: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
  }
`;

export const CenterP = styled.div`
  text-align: center;
  font-size: 30px;
  padding: 50% 0%;
`;

export const CenterSM = styled.div`
  text-align: center;
  @media only screen and (min-width: 767px) {
    display: inline;
    float: left;
  }
`;

export const PositionRigth = styled.div`
  text-align: center;
  @media only screen and (min-width: 767px) {
    display: inline;
    float: right;
  }
`;

export const Background1 = styled.div`
  background: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
`;

export const Background2 = styled.div`
  background-color: rgba(
    var(--bs-secondary-rgb),
    var(--bs-bg-opacity)
  ) !important;
`;

export const ContentArea = styled.div`
  padding: 10px;
`;

export const IconsArea = styled.div`
  margin: 2%;
`;

export const FooterArea = styled.div`
  a {
    color: #fff;
  }
  a:hover {
    color: #4d4d4d;
  }
  @media only screen and (min-width: 4000px) {
    padding-top: 10rem;
  }
`;

export const Footer1 = styled.footer`
  --bs-bg-opacity: 1;
  margin-top: 10px;
  background: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
  padding-top: 3000px;
  @media only screen and (min-width: 4000px) {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
`;

export const HideArea = styled.p`
  opacity: 0;
  height: 0;

  @media only screen and (min-width: 850px) {
    opacity: 1;
    height: auto;
  }
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleColor = styled.div`
  background: #0eb5cf;
  background: linear-gradient(to right, #0eb5cf 32%, #1313cf 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
