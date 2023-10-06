import styled from "styled-components";

export const Div_Opacity = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeIn ${(props) => props.$duration || 0.5}s forwards;
`;
