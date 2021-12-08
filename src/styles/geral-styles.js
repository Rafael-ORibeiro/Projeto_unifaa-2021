import styled from "styled-components";

export const DivPersolanizada = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    padding: 25px;
    border:${props => props.border};
    margin: ${props => props.margin};
    margin-top: ${props => props.marginTop};
`;

export const NavBar = styled.ul`

    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: var(--cor-primaria);

    li {
        float: left;
        :last-child {
            float:right;
        }

        :first-child{
            margin-left: 20px;
        }
    }

    li a {
        display: block;
        color: #fff;
        padding: 15px 17px;
        text-decoration: none;
        text-align: center;
        cursor: pointer;
        

        :hover {
            background-color: var(--cor-secundaria);
        }
    
    }





`;