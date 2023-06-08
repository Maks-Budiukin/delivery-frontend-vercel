import { StyledNotFound, StyledButton } from "./NotFound.styled"

export const NotFound = () => {
    return(<><StyledNotFound >
            <StyledButton to={"/"}>Go back!</StyledButton>
        </StyledNotFound></>)
}