import styled from 'styled-components';

export const Navbar = styled.header`
    
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 45px;
    

    @media screen and (min-width: 1440px) {
        position: absolute;
        width: 100%;
        height: 100px;
        left: 0px;
        top: 0px;
        padding: 0;
    }
`;

export const Logo = styled.div`
    max-width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 36.24px;
        height: 36px;
    }

    a {
        color: #1E2537;
        font-weight: bold;
    }

    @media screen and (min-width: 1440px) {
        position: absolute;
        left: 5.56%;
        right: 84.03%;
        top: 32%;
        bottom: 32%;

        img {
            position: absolute;
            left: 0%;
            right: 75.84%;
            top: 0%;
            bottom: 0%;
        }

        a {
            position: absolute;
            left: 26.19%;
            right: 38.8%;
            top: 20.56%;
            bottom: 33.54%;
            width: fit-content;
        }
    }
`;

export const Links = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 70%;

    a {
        color: #636363;
        display: inline-block;
        margin: 20px;
    }

    @media screen and (min-width: 1440px) {
        position: absolute;
        width: 261px;
        right: 80px;
        top: 41%;
        bottom: 40%;

        a { 
            position: absolute;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            /* identical to box height */
            text-align: right;
            margin: 0
        }

        a:first-child {
            width: 56px;
            height: 20px;
            right: 204px;
            top: calc(50% - 20px/2 + 0.5px);
        }

        a:nth-child(2) {
            width: 104px;
            height: 20px;
            right: 75px;
            top: calc(50% - 20px/2 + 0.5px);
        }

        a:last-child {
            width: 50px;
            height: 20px;
            right: 0px;
            top: calc(50% - 20px/2 + 0.5px);
        }
    }
`;
