import React from 'react'
import changeMainPageTop from '../components/page1/changePageTop';

function withScroll(Component, up_Down){
 
    return class extends React.Component {

        constructor(props){
          super(props);

          this.minDistance = 50;
          this.page1 = document.querySelector(".page_1").style;    
        }
        
        _OnWheel = e => {
          const { onWheel, offset } = this.props;
          const { deltaY } = e;
          switch(up_Down){
              case "up": 
                deltaY < 0 && onWheel(offset - 1);
                break;
              case "down":  
                deltaY > 0 && onWheel(offset + 1);
                deltaY < 0 && changeMainPageTop(); 
                break;
              case "up and down": 
                deltaY > 0 && onWheel(offset + 1);
                deltaY < 0 && onWheel(offset - 1);
                break;
              default:
          }
        };

        _onTouchStart = e => {
          this.swiping = e.changedTouches[0].clientY;
        }
      
        _onTouchEnd = e => {
          const deltaY = this.swiping - e.changedTouches[0].clientY;
          Math.abs(deltaY) > this.minDistance && this._OnWheel({deltaY});
        }
      
        render(){
          const events = {
            onWheel: this._OnWheel,
            onTouchStart: this._onTouchStart,
            onTouchEnd: this._onTouchEnd
          };  
          return <Component touchEvents={events} offset={this.props.offset}/>;
        }
    }
}

export default withScroll;