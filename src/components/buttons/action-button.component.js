import styled from "styled-components";

const ActionButton = styled.button`
    border-radius: 50%;
    border: 1px solid #000000;
    color: #FFFFFF;
    font-size: 0.8rem;
    margin: 0.3rem;
    width: 1.5rem;
    height: 1.5rem;
`;

const Positive = styled(ActionButton)`
    background: #36A854;
`;

const Delete = styled(ActionButton)`
    background: #60605F;
`;

const Suspect = styled(ActionButton)`
    background: #EB8309;
`;

const Restrict = styled(ActionButton)`
    background: #BD362F;
`;

export { Positive, Delete, Suspect, Restrict };