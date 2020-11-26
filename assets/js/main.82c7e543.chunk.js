(this["webpackJsonpsnake-game"]=this["webpackJsonpsnake-game"]||[]).push([[0],[,,,,,,,,,,function(t,e,n){t.exports=n(21)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=n(9),s=n.n(o),r=n(7),l=n(2),u=n(3),c=n(5),d=n(4),h=n(1),f=n(6),p=(n(15),function(t){function e(){return Object(l.a)(this,e),Object(c.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"Fruit",style:this.props.fruitPosition})}}]),e}(i.a.Component)),b=(n(16),function(t){function e(){return Object(l.a)(this,e),Object(c.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"Snake"},this.props.renderSnakeParts())}}]),e}(i.a.Component)),k=(n(17),function(t){function e(){return Object(l.a)(this,e),Object(c.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=document.getElementsByClassName("Board")[0];this.props.setBoardPosition({top:t.offsetTop+20,right:t.offsetLeft+t.offsetWidth-40,bottom:t.offsetTop+t.offsetHeight-40,left:t.offsetLeft+20}),this.props.updateFruitPosition(),this.props.setSnakeHeadPosition()}},{key:"render",value:function(){return i.a.createElement("div",{className:"Board"},i.a.createElement(p,{fruitPosition:this.props.fruitPosition}),i.a.createElement(b,{renderSnakeParts:this.props.renderSnakeParts}))}}]),e}(i.a.Component)),m=(n(18),function(t){function e(){return Object(l.a)(this,e),Object(c.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"Status"},this.props.gameStatus,i.a.createElement("div",{className:"Status-info"},i.a.createElement("div",{className:"Status-info--title"},"Points"),i.a.createElement("div",{className:"Status-info--text"},this.props.gamePoints)),i.a.createElement("div",{className:"Status-controls"},i.a.createElement("button",{onClick:this.props.handlePlay},"Play"),i.a.createElement("button",{onClick:this.props.handlePause},"Pause"),i.a.createElement("button",{onClick:this.props.handleStart},"Start")))}}]),e}(i.a.Component)),P=(n(19),function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(c.a)(this,Object(d.a)(e).call(this,t))).state={fruitPosition:{top:null,left:null},boardPosition:{top:null,right:null,bottom:null,left:null},snake:[{direction:null,position:{top:null,left:null}}],snakeIsAlive:!0},n.updateFruitPosition=n.updateFruitPosition.bind(Object(h.a)(n)),n.getRandomPosition=n.getRandomPosition.bind(Object(h.a)(n)),n.setBoardPosition=n.setBoardPosition.bind(Object(h.a)(n)),n.setSnakeHeadPosition=n.setSnakeHeadPosition.bind(Object(h.a)(n)),n.renderSnakeParts=n.renderSnakeParts.bind(Object(h.a)(n)),n.moveSnake=n.moveSnake.bind(Object(h.a)(n)),n.handlePlay=n.handlePlay.bind(Object(h.a)(n)),n.handlePause=n.handlePause.bind(Object(h.a)(n)),n.handleStart=n.handleStart.bind(Object(h.a)(n)),n.handleArrowKeyPress=n.handleArrowKeyPress.bind(Object(h.a)(n)),n.killSnake=n.killSnake.bind(Object(h.a)(n)),n.eatFruit=n.eatFruit.bind(Object(h.a)(n)),n.snakeWillDie=n.snakeWillDie.bind(Object(h.a)(n)),document.onkeydown=n.handleArrowKeyPress,n.session={id:null,speed:500},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"updateFruitPosition",value:function(){var t=this;this.setState((function(e){return{fruitPosition:t.getRandomPosition(e)}}))}},{key:"setSnakeHeadPosition",value:function(){var t=this;this.setState((function(e){var n=e.snake.slice(0,1),a=n[0];return a.direction=t.getRandomDirection(),a.position=t.getRandomPosition(e),{snake:n}}))}},{key:"renderSnakeParts",value:function(){return this.state.snake.map((function(t,e){var n,a,o=0===e?"head":"body";switch(t.direction){case"top":a="borderBottom";break;case"right":a="borderLeft";break;case"bottom":a="borderTop";break;default:a="borderRight"}return i.a.createElement("div",{className:"Snake-"+o,style:(n={},Object(r.a)(n,a,"1px solid rgba(247, 243, 6, 0.986)"),Object(r.a)(n,"top",t.position.top),Object(r.a)(n,"left",t.position.left),n),key:e})}))}},{key:"getRandomPosition",value:function(t){for(var e,n=t.boardPosition,a=Math.round(Math.random()*n.bottom);0===a||a%20!==0||a<n.top;)a=Math.round(Math.random()*n.bottom);for(e=a,a=Math.round(Math.random()*n.right);0===a||a%20!==0||a<n.left;)a=Math.round(Math.random()*n.right);return{top:e,left:a}}},{key:"getRandomDirection",value:function(){var t=Math.round(10*Math.random())%4+1;return 1===t?"top":2===t?"right":3===t?"bottom":"left"}},{key:"setBoardPosition",value:function(t){this.setState({boardPosition:t})}},{key:"moveSnake",value:function(){var t,e,n=this.state.fruitPosition,a=this.state.snake.slice(),i=a[0];switch(t={direction:i.direction,position:{top:i.position.top,left:i.position.left}},i.direction){case"top":t.position.top-=20;break;case"right":t.position.left+=20;break;case"bottom":t.position.top+=20;break;default:t.position.left-=20}if(this.snakeWillDie(t.position))this.killSnake();else{t.position.top===n.top&&t.position.left===n.left&&this.eatFruit(a);for(var o=0;o<a.length;o++)e=a[o],a[o]=t,t=e;this.setState({snake:a})}}},{key:"handlePlay",value:function(){null===this.session.id&&(this.session.id=setInterval(this.moveSnake,this.session.speed))}},{key:"handlePause",value:function(){clearInterval(this.session.id),this.session.id=null}},{key:"handleStart",value:function(){this.handlePause(),this.setSnakeHeadPosition(),this.updateFruitPosition(),this.session.speed=500,this.handlePlay(),this.setState({snakeIsAlive:!0})}},{key:"handleArrowKeyPress",value:function(t){var e=this.state.snake.slice(),n=e[0],a=n.direction;if(this.state.snakeIsAlive&&null!==this.session.id){switch(t.code){case"ArrowUp":if("bottom"===a)break;a="top";break;case"ArrowRight":if("left"===a)break;a="right";break;case"ArrowDown":if("top"===a)break;a="bottom";break;case"ArrowLeft":if("right"===a)break;a="left"}n.direction=a,this.setState({snake:e})}}},{key:"killSnake",value:function(){this.setState({snakeIsAlive:!1}),this.handlePause()}},{key:"snakeWillDie",value:function(t){var e,n=this.state.boardPosition,a=this.state.snake;if(t.top<n.top||t.top>n.bottom||t.left<n.left||t.left>n.right)return!0;for(var i=1;i<a.length;i++)if(e=a[i],t.top===e.position.top&&t.left===e.position.left)return!0;return!1}},{key:"eatFruit",value:function(t){t.push({direction:null,position:{top:null,left:null}}),this.updateFruitPosition(),this.session.speed>100&&(this.session.speed-=50),this.handlePause(),this.handlePlay()}},{key:"render",value:function(){return i.a.createElement("div",{className:"SnakeGame"},i.a.createElement(k,{setBoardPosition:this.setBoardPosition,fruitPosition:this.state.fruitPosition,updateFruitPosition:this.updateFruitPosition,setSnakeHeadPosition:this.setSnakeHeadPosition,renderSnakeParts:this.renderSnakeParts}),i.a.createElement(m,{handlePlay:this.handlePlay,handlePause:this.handlePause,handleStart:this.handleStart,gameStatus:this.state.snakeIsAlive?"":"Game Over!",gamePoints:20*(this.state.snake.length-1)}))}}]),e}(i.a.Component));n(20);var v=function(t){return i.a.createElement(P,null)};s.a.render(i.a.createElement(v,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.82c7e543.chunk.js.map