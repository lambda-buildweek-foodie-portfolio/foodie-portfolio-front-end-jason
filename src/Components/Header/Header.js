import React, { Component } from 'react';
import { 
  HeaderH1, 
  HeaderDiv, 
  HeaderSpans,
} from '../Styling/styles'


import Moment from '../Moment/moment';

class Header extends Component{
  state = {
    user: {
        username: '',
        password: '',
    }
}

homePageClick = () => {
  this.props.history.push('/');
}
  
  render() {
    return (
      <div>
        <HeaderDiv>
          <HeaderSpans date> <Moment/></HeaderSpans>
          <HeaderH1 >Foodie Portfollio</HeaderH1> 
         
          <HeaderSpans temp>80°</HeaderSpans>   
        </HeaderDiv>
      </div>
    )
  }
}
// export default Header
export default Header; 