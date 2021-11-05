import styled from "styled-components"

export const StyledHeader = styled.header`
    display : flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
    height: 5rem;
    background-color: green;
    color: white;
    box-shadow: 1px 1px 3px 2px #808080;
    text-decoration: none;
    nav {
        display: flex;
        align-items: center;
        ul {
            display: flex;
            list-style: none;
            li {
                margin-right: 1.5rem;
                a {
                    text-decoration: none;
                    color: inherit;
                    font-size: 1.5rem;
                    font-weight: 700;
                }
                &:last-child:hover {
                    cursor: pointer;
                }
            }
        }
    }

`;
export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`