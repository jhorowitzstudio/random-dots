import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 250px;
    justify-content: space-between;

    div {
        display: flex;
        margin-bottom: 20px;
        align-items: center;
        input {
            width: 90px;
            margin-right: 20px;
        }
        span {
            width: 120px;
        }
    }
`;