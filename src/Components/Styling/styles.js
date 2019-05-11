import styled from 'styled-components';


// styles for Header component
const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 3px solid lightgrey;
  width: 100%;
  height: 120px;
//   margin-top: 44px;
  padding-bottom: 15px;
`;

const HeaderH1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
  cursor: pointer;
  margin-right: 7%;
`;

const HeaderSpans = styled.span`
    ${props =>
        props.date
            ? `
        align-self: flex-end;
        font-size: 11px;
        font-weight: bold;
        letter-spacing: 1px;
        margin-left: 25px;
        flex: 1;
        `
            : null
        }
        ${props =>
            props.temp
                ? `
            align-self: flex-end;
            font-size: 11px;
            font-weight: bold;
            letter-spacing: 1px;
            text-align: right;
            margin-right: 75px;
            flex: 1;
            `
                : null
        } 
    `;

    export {
        HeaderDiv,
        HeaderSpans,
        HeaderH1



    }

