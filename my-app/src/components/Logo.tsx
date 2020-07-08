import React from "react";
import styled from "styled-components";

const LogSize = styled.div`
  width: 16rem;
  height: 16rem;
  fill: #ff8f66;
  filter: drop-shadow(1px 3px 3px rgba(0, 0, 0, 0.7));

  @media (max-width: 1024px) {
    width: 10rem;
    height: 10rem;
  }
`;

const Logo: React.FC = () => {
  return (
    <LogSize>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <title>arrow-down2</title>
        <path d="M27.414 19.414l-10 10c-0.781 0.781-2.047 0.781-2.828 0l-10-10c-0.781-0.781-0.781-2.047 0-2.828s2.047-0.781 2.828 0l6.586 6.586v-19.172c0-1.105 0.895-2 2-2s2 0.895 2 2v19.172l6.586-6.586c0.39-0.39 0.902-0.586 1.414-0.586s1.024 0.195 1.414 0.586c0.781 0.781 0.781 2.047 0 2.828z"></path>
      </svg>
    </LogSize>
  );
};

export default Logo;
