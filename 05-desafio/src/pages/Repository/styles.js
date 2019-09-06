import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }
  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }
  h1 {
    font-size: 24px;
    margin-top: 10px;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;
export const Filters = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  button {
    flex: 1;
    height: 30px;
    background: transparent;
    outline: none;
    border: 2px solid #7159c1;
    color: #333;

    &.selected {
      background: #7159c1;
      color: #fff;
    }
  }
`;
export const PageControl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  strong {
    margin: 0px 20px;
    font-size: 18px;
    color: #333;
  }
`;
export const LeftArrow = styled(FaArrowLeft)`
  cursor: ${props => (props.page !== '1' ? 'pointer' : 'auto')};
  opacity: ${props => (props.page === '1' ? 0.5 : 1)};
  &:hover {
    opacity: ${props => (props.page !== '1' ? 0.8 : 1)};
  }
`;
export const RightArrow = styled(FaArrowRight)`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }
    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;
      }

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #7159c1;
        }
      }
      span {
        background: #eee;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      }
      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;
