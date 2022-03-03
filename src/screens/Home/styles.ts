import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Footer = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 24px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const BoxContent = styled.View`
  flex: 1;
  //  padding-horizontal: 24px;
`;
