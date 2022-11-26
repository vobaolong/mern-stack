import styled from "styled-components";

export const Spacer = styled.div`
  width: ${({ width }) => (width ? width : "0")}rem;
  height: ${({ height }) => (height ? height : "0")}rem;

  @media (max-width: 768px) {
    width: ${({ width }) => (width ? width / 2 : "0")}rem;
    height: ${({ height }) => (height ? height / 2 : "0")}rem;
  }
`;
