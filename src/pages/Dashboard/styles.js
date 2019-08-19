import styled, { css } from 'styled-components';

export const Navbar = styled.nav`
  flex: 0 0 auto;
  height: 40px;
  min-width: 100%;
  overflow: hidden;
  display: flex;
  list-style: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    display: block;
    padding: 0 20px;
    max-height: 40px;
    width: auto;
    height: auto;
  }

  a {
    color: #f4b300;
    font-size: 20px;
    font-weight: bold;
    padding: 0 20px;
    text-decoration: none;
    vertical-align: middle;
  }

  a:hover {
    color: #333;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  margin: auto;
  color: #333;
  display: flex;
  flex-direction: row;
`;

export const Aside = styled.div`
  width: 200px;
  background: #00a1b6;
  height: 100%;
  padding: 20px;
  text-align: center;

  p {
    font-size: 20px;
    font-weight: bold;
  }

  strong {
    font-size: 16px;
    line-height: 40px;
  }
`;
export const Info = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  flex: 1;
  overflow-y: auto;

  p {
    line-height: 40px;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Filter = styled.div`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(50, 50, 50, 0.2);
  margin-bottom: 20px;

  input {
    font-size: 14px;
    line-height: 20px;
    padding: 0 5px;
    margin-right: 20px;
    border: 1px solid rgba(50, 50, 50, 0.1);
    border-radius: 3px;
  }
`;

export const List = styled.ul`
  width: 100%;

  > div {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const Entry = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid rgba(50, 50, 50, 0.2);

  p {
    font-weight: normal;
    font-size: 12px;
  }

  p.value {
    font-weight: bold;
    font-size: 16px;
    color: #14522d;
  }

  p.redColor {
    color: #a31d1d;
  }
`;

export const Button = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  padding: 3px 20px;

  border-radius: 3px;
  background: #eee;
  cursor: pointer;
  color: #7f7f7f;
  font-size: 14px;
  margin: 10px 2px 0;

  :hover {
    background: #ccc;
    color: #222;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading
      ? css`
          border: 1px solid #f88;
          color: #f00;
        `
      : css`
          border: 1px solid rgba(50, 50, 50, 0.4);
        `}
`;
