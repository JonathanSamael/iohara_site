import styled from "styled-components";

export const HeaderContainer = styled.header `
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 1rem;
   padding-bottom: .8rem;
   margin-bottom: 3rem;
   border-bottom: 1px solid #a9a9a980;
`; 

export const Nav = styled.nav `
    display: flex;
    justify-content: space-between;
    min-width: 25rem;

`; 

export const Item = styled.div `
    cursor: pointer;
    font-weight: 600;
    transition: ease-in-out 400ms;
    padding: .2rem .6rem;
    border-radius: 1rem;

    &:hover {
        background-color: var(--primary-detail);
    }
`; 