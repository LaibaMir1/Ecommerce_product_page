import styled from "styled-components"

const Button = ({ func, children, className }) => {
  return (
    <StyledButton className={className} onClick={func}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  width: 100%;
  background-color: hsl(var(--pink));
  padding: 1.9rem;
  border-radius: 1rem;
  color: hsl(var(--white));
  font-size: 1.6rem;
  font-weight: 700;

  &.cart {
    box-shadow: 0px 2rem 5rem -2rem hsl(var(--pink));
  }

  @media screen and (min-width: 768px) {
    &.cart {
      box-shadow: none;
    }
  }
`


export default Button
