import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
`;

export const Form = styled.form`
  max-width: 500px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 50px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 20px;
  }

  h1 {
    font-size: 34px;
    display: flex;
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  margin: 10px;
  flex: 1;
  border: 1px solid #eee;
  padding: 8px 15px;
  border-radius: 4px;
  font-size: 16px;
  ${props =>
    props.error
      ? css`
          border: 1px solid #f88;
          color: #f00;
        `
      : css`
          border: 1px solid #eee;
        `}
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
