import styled from 'styled-components';

export const MainWrapper = styled.main({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
})

export const CodesWrapper = styled(MainWrapper)({
  flexDirection: 'row'
})

export const Header = styled.header({
  width: '100%',
  height: '50px',
  borderBottom: '1px solid grey',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'sans-serif',
})

export const Codeblock = styled.pre({
  width: '50%',
  height: '100%',
  margin: 0,
  padding: 0,
  whiteSpace: 'pre-wrap'
})