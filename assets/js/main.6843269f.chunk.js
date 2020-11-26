(this["webpackJsonpsnake-game"]=this["webpackJsonpsnake-game"]||[]).push([[0],{10:function(t,e,n){t.exports=n(16)},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),a=n(9),s=n.n(a),r=n(7),l=n(2),u=n(3),c=n(5),d=n(4),h=n(1),p=n(6),f=function(t){function e(){return Object(l.a)(this,e),Object(c.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"fruit",style:{width:this.props.fruitDimension,height:this.props.fruitDimension,top:this.props.fruitPosition.top,left:this.props.fruitPosition.left}})}}]),e}(o.a.Component),k=function(t){function e(){return Object(l.a)(this,e),Object(c.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"snake"},this.props.renderSnakeParts())}}]),e}(o.a.Component),b=function(t){function e(){return Object(l.a)(this,e),Object(c.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=document.querySelector(".board");this.props.setBoardPosition(t),this.props.setFruitSnakeDimension(),this.props.updateFruitPosition(),this.props.setSnakeHeadPosition()}},{key:"render",value:function(){return o.a.createElement("div",{className:"board"},o.a.createElement(f,{fruitPosition:this.props.fruitPosition,fruitDimension:this.props.fruitDimension}),o.a.createElement(k,{renderSnakeParts:this.props.renderSnakeParts}))}}]),e}(o.a.Component),m=function(t){function e(){return Object(l.a)(this,e),Object(c.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"controls"},o.a.createElement("div",{className:"status"},this.props.gameStatus&&o.a.createElement("h1",null,this.props.gameStatus),o.a.createElement("h2",null,"Points"),o.a.createElement("h3",null,this.props.gamePoints)),o.a.createElement("div",{className:"controls-movement"},o.a.createElement("button",{onClick:this.props.handlePlay},"Play"),o.a.createElement("button",{onClick:this.props.handlePause},"Pause"),o.a.createElement("button",{onClick:this.props.handleStart},"Start")),o.a.createElement("div",{className:"controls-direction"},o.a.createElement("button",{className:"ArrowUp",onClick:function(){return t.props.handleArrowButtonClick("ArrowUp")}},">"),o.a.createElement("button",{className:"ArrowRight",onClick:function(){return t.props.handleArrowButtonClick("ArrowRight")}},">"),o.a.createElement("button",{className:"ArrowDown",onClick:function(){return t.props.handleArrowButtonClick("ArrowDown")}},">"),o.a.createElement("button",{className:"ArrowLeft",onClick:function(){return t.props.handleArrowButtonClick("ArrowLeft")}},">")))}}]),e}(o.a.Component),P=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(c.a)(this,Object(d.a)(e).call(this,t))).state={fruitPosition:{top:null,left:null},boardPosition:{top:null,right:null,bottom:null,left:null},snake:[{direction:null,position:{top:null,left:null}}],snakeIsAlive:!0,fruitSnakeDimension:null},n.updateFruitPosition=n.updateFruitPosition.bind(Object(h.a)(n)),n.getRandomPosition=n.getRandomPosition.bind(Object(h.a)(n)),n.setBoardPosition=n.setBoardPosition.bind(Object(h.a)(n)),n.updateBoardPosition=n.updateBoardPosition.bind(Object(h.a)(n)),n.setSnakeHeadPosition=n.setSnakeHeadPosition.bind(Object(h.a)(n)),n.renderSnakeParts=n.renderSnakeParts.bind(Object(h.a)(n)),n.moveSnake=n.moveSnake.bind(Object(h.a)(n)),n.handlePlay=n.handlePlay.bind(Object(h.a)(n)),n.handlePause=n.handlePause.bind(Object(h.a)(n)),n.handleStart=n.handleStart.bind(Object(h.a)(n)),n.handleArrowKeyPress=n.handleArrowKeyPress.bind(Object(h.a)(n)),n.killSnake=n.killSnake.bind(Object(h.a)(n)),n.eatFruit=n.eatFruit.bind(Object(h.a)(n)),n.snakeWillDie=n.snakeWillDie.bind(Object(h.a)(n)),n.setFruitSnakeDimension=n.setFruitSnakeDimension.bind(Object(h.a)(n)),n.handleArrowButtonClick=n.handleArrowButtonClick.bind(Object(h.a)(n)),document.addEventListener("keydown",n.handleArrowKeyPress),window.addEventListener("resize",n.updateBoardPosition),n.session={id:null,speed:300},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"updateFruitPosition",value:function(){var t=this;this.setState((function(e){return{fruitPosition:t.getRandomPosition(e)}}))}},{key:"setSnakeHeadPosition",value:function(){var t=this;this.setState((function(e){var n=e.snake.slice(0,1),i=n[0];return i.direction=t.getRandomDirection(),i.position=t.getRandomPosition(e),{snake:n}}))}},{key:"renderSnakeParts",value:function(){var t=this;return this.state.snake.map((function(e,n){var i,a,s=0===n?"head":"body";switch(e.direction){case"top":a="borderBottom";break;case"right":a="borderLeft";break;case"bottom":a="borderTop";break;default:a="borderRight"}return o.a.createElement("div",{className:s,style:(i={},Object(r.a)(i,a,"1px solid #445500ff"),Object(r.a)(i,"width",t.state.fruitSnakeDimension),Object(r.a)(i,"height",t.state.fruitSnakeDimension),Object(r.a)(i,"top",e.position.top),Object(r.a)(i,"left",e.position.left),i),key:n})}))}},{key:"getRandomPosition",value:function(t){for(var e=t.boardPosition,n=e.right-e.left,i=e.bottom-e.top,o=t.fruitSnakeDimension,a=e.top+o+i%o/2,s=e.right-2*o-n%o/2,r=e.bottom-2*o-i%o/2,l=e.left+o+n%o/2,u=Math.round(Math.random()*r);0===u||u%o!==0||u<a;)u=Math.round(Math.random()*r);var c=u+i%o/2;for(u=Math.round(Math.random()*s);0===u||u%o!==0||u<l;)u=Math.round(Math.random()*s);return{top:c,left:u+n%o/2}}},{key:"getRandomDirection",value:function(){var t=Math.round(10*Math.random())%4+1;return 1===t?"top":2===t?"right":3===t?"bottom":"left"}},{key:"setBoardPosition",value:function(t){var e={top:t.offsetTop,right:t.offsetLeft+t.offsetWidth,bottom:t.offsetTop+t.offsetHeight,left:t.offsetLeft};this.setState({boardPosition:e})}},{key:"updateBoardPosition",value:function(){var t=document.querySelector(".board");this.setBoardPosition(t),this.setFruitSnakeDimension(),this.handleStart()}},{key:"setFruitSnakeDimension",value:function(){this.setState((function(t){var e,n=document.querySelector(".board"),i=t.boardPosition,o=i.right-i.left,a=i.bottom-i.top;return e=o<=425?Math.floor(.05*o):Math.floor(.025*o),n.style.borderLeftWidth=n.style.borderRightWidth=e+o%e/2+"px",n.style.borderTopWidth=n.style.borderBottomWidth=e+a%e/2+"px",{fruitSnakeDimension:e}}))}},{key:"moveSnake",value:function(){var t,e,n=this.state.fruitPosition,i=this.state.snake.slice(),o=i[0];t={direction:o.direction,position:{top:o.position.top,left:o.position.left}};var a=this.state.fruitSnakeDimension;switch(o.direction){case"top":t.position.top-=a;break;case"right":t.position.left+=a;break;case"bottom":t.position.top+=a;break;default:t.position.left-=a}if(this.snakeWillDie(t.position))this.killSnake();else{t.position.top===n.top&&t.position.left===n.left&&this.eatFruit(i);for(var s=0;s<i.length;s++)e=i[s],i[s]=t,t=e;this.setState({snake:i})}}},{key:"handlePlay",value:function(){null===this.session.id&&(this.session.id=setInterval(this.moveSnake,this.session.speed))}},{key:"handlePause",value:function(){clearInterval(this.session.id),this.session.id=null}},{key:"handleStart",value:function(){this.handlePause(),this.setSnakeHeadPosition(),this.updateFruitPosition(),this.session.speed=300,this.handlePlay(),this.setState({snakeIsAlive:!0})}},{key:"handleArrowKeyPress",value:function(t){var e=this.state.snake.slice(),n=e[0],i=n.direction;if(this.state.snakeIsAlive&&null!==this.session.id){switch(t.code){case"ArrowUp":if("bottom"===i)break;i="top";break;case"ArrowRight":if("left"===i)break;i="right";break;case"ArrowDown":if("top"===i)break;i="bottom";break;case"ArrowLeft":if("right"===i)break;i="left"}n.direction=i,this.setState({snake:e})}}},{key:"killSnake",value:function(){this.setState({snakeIsAlive:!1}),this.handlePause()}},{key:"snakeWillDie",value:function(t){var e=this.state.boardPosition,n=e.right-e.left,i=e.bottom-e.top,o=this.state.fruitSnakeDimension,a=e.top+o+i%o/2,s=e.right-2*o-n%o/2,r=e.bottom-2*o-i%o/2,l=e.left+o+n%o/2;if(t.top<a||t.top>r||t.left<l||t.left>s)return!0;for(var u,c=this.state.snake,d=1;d<c.length;d++)if(u=c[d],t.top===u.position.top&&t.left===u.position.left)return!0;return!1}},{key:"eatFruit",value:function(t){t.push({direction:null,position:{top:null,left:null}}),this.updateFruitPosition(),this.session.speed>100&&(this.state.boardPosition.right-this.state.boardPosition.left>425?this.session.speed-=100:this.session.speed-=50),this.handlePause(),this.handlePlay()}},{key:"handleArrowButtonClick",value:function(t){var e={code:t};this.handleArrowKeyPress(e)}},{key:"render",value:function(){return o.a.createElement("div",{className:"snakegame"},o.a.createElement(b,{setBoardPosition:this.setBoardPosition,fruitPosition:this.state.fruitPosition,fruitDimension:this.state.fruitSnakeDimension,updateFruitPosition:this.updateFruitPosition,setSnakeHeadPosition:this.setSnakeHeadPosition,renderSnakeParts:this.renderSnakeParts,setFruitSnakeDimension:this.setFruitSnakeDimension}),o.a.createElement(m,{handlePlay:this.handlePlay,handlePause:this.handlePause,handleStart:this.handleStart,handleArrowButtonClick:this.handleArrowButtonClick,gameStatus:this.state.snakeIsAlive?null:"Game Over!",gamePoints:(this.state.snake.length-1)*this.state.fruitSnakeDimension}))}}]),e}(o.a.Component);n(15);var v=function(t){return o.a.createElement(P,null)};s.a.render(o.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.6843269f.chunk.js.map