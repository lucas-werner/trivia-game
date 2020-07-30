(this["webpackJsonptrivia-test"]=this["webpackJsonptrivia-test"]||[]).push([[0],{1260:function(e,t,a){},1261:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(80),c=a.n(o),i=a(45),s=a(39),u=a(31),l=a(279),m=a(107),d=a(19),p={name:"",email:"",logged:!1},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"HANDLE_LOGIN":return Object(d.a)(Object(d.a)({},e),{},Object(m.a)({},n.name,n.value));case"HANDLE_SUBMIT":return Object(d.a)(Object(d.a)({},e),{},{logged:!0});case"HANDLE_LOGOUT":return p;default:return e}},v={loading:!1,token:"",error:""};var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_TOKEN":return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case"TOKEN_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{loading:!1,token:t.payload.token});case"TOKEN_ERROR":return Object(d.a)(Object(d.a)({},e),{},{loading:!1,error:t.payload.error});default:return e}},g={loading:!1,questions:[],questionNumber:0,error:""};var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_QUESTIONS":return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case"QUESTIONS_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{loading:!1,questions:t.payload.questions});case"QUESTIONS_ERROR":return Object(d.a)(Object(d.a)({},e),{},{loading:!1,error:t.payload.error});case"NEXT-QUESTION":return Object(d.a)(Object(d.a)({},e),{},{questionNumber:e.questionNumber+1});case"HANDLE_LOGOUT":return g;default:return e}},h={name:"",gravatarEmail:"",assertions:0,score:0},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SAVE_PLAYER":return Object(d.a)(Object(d.a)({},e),{},{name:n.name,gravatarEmail:n.gravatarEmail});case"SUM_POINTS":return Object(d.a)(Object(d.a)({},e),{},{score:e.score+n.score,assertions:e.assertions+1});default:return e}},y={timer:30,stopTimer:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,a=t.type;switch(a){case"TICK_TIMER":return 0!==e.timer&&!1===e.stopTimer?Object(d.a)(Object(d.a)({},e),{},{timer:e.timer-1}):Object(d.a)({},e);case"RESET_TIMER":return Object(d.a)(Object(d.a)({},e),{},{stopTimer:!1,timer:30});case"STOP_TIMER":return Object(d.a)(Object(d.a)({},e),{},{stopTimer:!0,timer:30});case"HANDLE_LOGOUT":return y;default:return e}},k=function(){return Object(u.c)({ReducerLogin:f,ReducerToken:b,ReducerQuestions:E,ReducerPlayer:O,ReducerTimer:j})},N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,S=Object(u.e)(k(),N(Object(u.a)(l.a))),T=(a(297),a(66)),w=a(42),R=a.n(w),I=a(55),C=a(27),x=a(28),_=a(30),L=a(29),q=(a(153),a(285)),U=function(e){Object(_.a)(a,e);var t=Object(L.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(x.a)(a,[{key:"render",value:function(){return r.a.createElement(i.b,{to:"/settings","data-testid":"btn-settings"},r.a.createElement(q.a,{"font-size":"2em"}))}}]),a}(r.a.Component),P=function(){return{type:"HANDLE_SUBMIT"}},Q=function(e){return{type:"HANDLE_LOGIN",payload:{name:e.name,value:e.value}}},A=function(){var e=Object(I.a)(R.a.mark((function e(){var t,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api_token.php?command=request");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",t.ok?Promise.resolve(a):Promise.reject(a));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function M(){return function(e){return e({type:"REQUEST_TOKEN"}),A().then((function(t){e({type:"TOKEN_SUCCESS",payload:{token:t.token}}),localStorage.setItem("token",t.token)}),(function(t){return e(function(e){return{type:"TOKEN_ERROR",payload:{error:e}}}(t.message))}))}}var G=function(){var e=Object(I.a)(R.a.mark((function e(t){var a,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api.php?amount=5&encode=url3986&token=".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",a.ok?Promise.resolve(n):Promise.reject(n));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function J(e){return function(t){return t({type:"REQUEST_QUESTIONS"}),G(e).then((function(e){return t({type:"QUESTIONS_SUCCESS",payload:{questions:e.results}},console.log("teste",e))}),(function(e){return t(function(e){return{type:"QUESTIONS_ERROR",payload:{error:e}}}(e.message))}))}}var B=function(){return{type:"NEXT-QUESTION"}},H=function(e,t){return{type:"SAVE_PLAYER",payload:{name:e,gravatarEmail:t}}},D=function(e){return{type:"SUM_POINTS",payload:{score:e}}},F=function(){return{type:"HANDLE_LOGOUT"}},K=a(281),V=a.n(K),X=function(e){var t=e.trim().toLowerCase();return"https://www.gravatar.com/avatar/".concat(V()(t))},z=function(e){Object(_.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).state={},n}return Object(x.a)(a,[{key:"startGame",value:function(){var e=Object(I.a)(R.a.mark((function e(){var t,a,n,r,o,c,i,s;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,a=t.SubmitLogin,n=t.GetToken,r=t.email,o=t.name,c=t.SavePlayer,localStorage.removeItem("token"),i=localStorage.getItem("token"),s=X(r),c(o,s),i){e.next=8;break}return e.next=8,n();case 8:localStorage.removeItem("state"),localStorage.setItem("state",JSON.stringify({player:{name:o,gravatarEmail:s,assertions:0,score:0}})),a();case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderInputEmail",value:function(){var e=this.props,t=e.email,a=e.HandleLogin;return r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"email",className:"label"},"Email do Gravatar:"),r.a.createElement("input",{htmlFor:"email",name:"email",value:t,type:"email","data-testid":"input-gravatar-email",onChange:function(e){return a(e.target)},className:"input"}))}},{key:"renderInputName",value:function(){var e=this.props,t=e.name,a=e.HandleLogin;return r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"player-name",className:"label"},"Nome do Jogador:"),r.a.createElement("input",{htmlFor:"player-name",name:"name",value:t,type:"text","data-testid":"input-player-name",onChange:function(e){return a(e.target)},className:"input"}))}},{key:"renderSubmitButton",value:function(){var e=this,t=this.props,a=t.email,n=""!==t.name&&""!==a;return r.a.createElement("button",{type:"button",value:"Jogar","data-testid":"btn-play",disabled:!n,onClick:function(){return e.startGame()},className:"button is-success"},"Jogar")}},{key:"renderInput",value:function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",{className:"card",style:{width:"400px"}},r.a.createElement("div",{className:"card-header"},r.a.createElement(U,null)),r.a.createElement("div",{className:"card-content"},this.renderInputEmail(),this.renderInputName()),r.a.createElement("div",{className:"card-content"},this.renderSubmitButton())))}},{key:"render",value:function(){return this.props.logged?r.a.createElement(T.a,{to:"/game"}):this.renderInput()}}]),a}(r.a.Component);z.defaultProps={};var Y=Object(s.b)((function(e){var t=e.ReducerLogin;return{name:t.name,email:t.email,logged:t.logged}}),(function(e){return Object(u.b)({HandleLogin:Q,SubmitLogin:P,GetToken:M,SavePlayer:H},e)}))(z),Z=function(e){Object(_.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).state={},n}return Object(x.a)(a,[{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("state")).player,t=this.props.score;return r.a.createElement("header",{className:"card-header"},r.a.createElement("div",{className:"card-header-title"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("img",{src:e.gravatarEmail,alt:"profile-pic",className:"image is-48x48","data-testid":"header-profile-picture"})),r.a.createElement("p",{className:"title is-6","data-testid":"header-player-name"},"Jogador: ".concat(e.name)),r.a.createElement("div",{className:"media-right"},r.a.createElement("p",{className:"subtitle is-6","data-testid":"header-score"},t)))))}}]),a}(n.Component),W=Object(s.b)((function(e){var t=e.ReducerPlayer;return{name:t.name,gravatarEmail:t.gravatarEmail,score:t.score}}))(Z),$=a(81),ee=(a(201),function(){return{type:"RESET_TIMER"}}),te=function(){return{type:"TICK_TIMER"}},ae=function(){return{type:"STOP_TIMER"}},ne=function(e){Object(_.a)(a,e);var t=Object(L.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(x.a)(a,[{key:"highlightCorrectAnswer",value:function(){console.log(this.props);var e=document.getElementsByClassName("wrong-answer"),t=Object($.a)(e),a=document.getElementsByClassName("correct-answer")[0];t.map((function(e){return e.classList.add("wrong")})),a.classList.add("correct")}},{key:"difficultyMeasurement",value:function(e){switch(console.log(this.props),e){case"easy":return 1;case"medium":return 2;case"hard":return 3;default:return 0}}},{key:"saveScore",value:function(){var e=this.props,t={player:{name:e.name,gravatarEmail:e.gravatarEmail,assertions:e.assertions,score:e.score}};localStorage.removeItem("state"),localStorage.setItem("state",JSON.stringify(t))}},{key:"handleAnswer",value:function(e){this.highlightCorrectAnswer();var t=e.target.classList;Object($.a)(t).includes("correct-answer")&&this.calculatePoints()}},{key:"calculatePoints",value:function(){var e=Object(I.a)(R.a.mark((function e(){var t,a,n,r,o,c,i,s;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.questions,n=t.questionNumber,r=t.timer,o=t.sumPoints,c=a[n].difficulty,i=this.difficultyMeasurement(c),s=10+r*i,e.next=6,o(s);case 6:this.saveScore();case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"generateOptions",value:function(){var e=this.props,t=e.questions[e.questionNumber],n=t.correct_answer,r=t.incorrect_answers,o=[{answer:n,isCorrect:!0}];return r.map((function(e){return o.push({answer:e,isCorrect:!1})})),o.sort(a.compareAnswers)}},{key:"renderQuestions",value:function(){var e=this.props,t=e.questions[e.questionNumber],a=t.category,n=t.question;return r.a.createElement("div",{className:"game-content-question"},r.a.createElement("div",{"data-testid":"question-category",className:"game-content-category"},decodeURIComponent(a)),r.a.createElement("div",{"data-testid":"question-text"},r.a.createElement("p",null,decodeURIComponent(n))))}},{key:"renderOptions",value:function(){var e=this,t=this.props,a=t.timer,n=t.stopTimer,o=t.toStopTimer;return r.a.createElement("div",{className:"game-content-answers"},this.generateOptions().map((function(t,c){return r.a.createElement("button",{"data-testid":t.isCorrect?"correct-answer":"wrong-answer-".concat(c),type:"button",className:"button is-fullwidth \n                ".concat(t.isCorrect?"correct-answer":"wrong-answer"),onClick:function(t){e.handleAnswer(t),o()},disabled:0===a||n},decodeURIComponent(t.answer))})))}},{key:"render",value:function(){return r.a.createElement("div",{className:"game-content"},this.renderQuestions(),this.renderOptions())}}],[{key:"compareAnswers",value:function(e,t){var a=e.answer.toUpperCase(),n=t.answer.toUpperCase(),r=0;return a>n?r=1:a<n&&(r=-1),r}}]),a}(n.Component);ne.defaultProps={};var re=Object(s.b)((function(e){var t=e.ReducerQuestions,a=t.questions,n=t.questionNumber,r=e.ReducerTimer,o=r.timer,c=r.stopTimer,i=e.ReducerPlayer;return{questionNumber:n,questions:a,timer:o,stopTimer:c,name:i.name,gravatarEmail:i.gravatarEmail,assertions:i.assertions,score:i.score}}),(function(e){return Object(u.b)({toStopTimer:ae,sumPoints:D},e)}))(ne),oe=function(e){Object(_.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).state={setTimer:""},n}return Object(x.a)(a,[{key:"componentDidMount",value:function(){var e=Object(I.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.StartTimer();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){var t=this.props.stopTimer,a=e.stopTimer,n=this.state.setTimer;!0===t&&clearInterval(n),!0===a&&(clearInterval(n),this.StartTimer())}},{key:"StartTimer",value:function(){var e=this.props.TickTimer;this.setState((function(){return{setTimer:setInterval((function(){return e()}),1e3)}}))}},{key:"render",value:function(){var e=this.props.timer;return r.a.createElement("div",{"data-testid":"timer"},"Tempo: ".concat(e))}}]),a}(n.Component),ce=Object(s.b)((function(e){var t=e.ReducerTimer;return{timer:t.timer,stopTimer:t.stopTimer}}),(function(e){return Object(u.b)({TickTimer:te},e)}))(oe);oe.defaultProps={stopTimer:!1};var ie=function(e){Object(_.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).state={},n}return Object(x.a)(a,[{key:"getRanking",value:function(){var e=this.props,t={name:e.name,gravatarEmail:e.gravatarEmail,score:e.score},a=null!==localStorage.getItem("ranking")?JSON.parse(localStorage.getItem("ranking")):null;return null===a?[t]:[].concat(Object($.a)(a),[t]).sort((function(e,t){return t.score-e.score}))}},{key:"updateRanking",value:function(){var e=this.getRanking();localStorage.setItem("ranking",JSON.stringify(e))}},{key:"endGame",value:function(){var e=this.props.Logout;this.updateRanking(),e()}},{key:"nextQuestion",value:function(){(0,this.props.ChangeQuestion)(),this.removeCorrectAnswerHighlight()}},{key:"removeCorrectAnswerHighlight",value:function(){console.log(this.props);var e=document.getElementsByClassName("wrong-answer"),t=Object($.a)(e),a=document.getElementsByClassName("correct-answer")[0];t.map((function(e){return e.classList.remove("wrong")})),a.classList.remove("correct")}},{key:"renderButtonNextQuestion",value:function(){var e=this,t=this.props,a=t.questionNumber,n=t.ResetTimer;return 4===a?r.a.createElement(i.b,{to:"/feedback"},r.a.createElement("button",{type:"button",className:"button is-info card-footer-item","data-testid":"btn-next",onClick:function(){return e.endGame()}},"FINALIZAR")):r.a.createElement("button",{type:"button",className:"button is-info card-footer-item",onClick:function(){e.nextQuestion(),n()},"data-testid":"btn-next"},"PR\xd3XIMA")}},{key:"render",value:function(){var e=this.props.stopTimer;return r.a.createElement("div",{className:"card-footer"},r.a.createElement("div",{className:"card-footer-item"},r.a.createElement(ce,null)),r.a.createElement("div",null,e&&this.renderButtonNextQuestion()))}}]),a}(n.Component);ie.defaultProps={};var se=Object(s.b)((function(e){var t=e.ReducerTimer,a=t.timer,n=t.stopTimer,r=e.ReducerQuestions.questionNumber,o=e.ReducerPlayer;return{timer:a,questionNumber:r,name:o.name,gravatarEmail:o.gravatarEmail,assertions:o.assertions,score:o.score,stopTimer:n}}),(function(e){return Object(u.b)({ResetTimer:ee,ChangeQuestion:B,Logout:F},e)}))(ie),ue=a(282);function le(){return r.a.createElement("div",{style:{width:300,height:200}},r.a.createElement(ue.Spinner,{size:"large"}))}var me=function(e){Object(_.a)(a,e);var t=Object(L.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(x.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.GetQuestions,t=localStorage.getItem("token");console.log("token:",t),e(t)}},{key:"render",value:function(){return 0===this.props.questions.length?r.a.createElement(le,null):r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",{className:"card",style:{width:"600px"}},r.a.createElement(W,null),r.a.createElement(re,null),r.a.createElement(se,null)))}}]),a}(n.Component);me.defaultProps={};var de=Object(s.b)((function(e){var t=e.ReducerQuestions;return{loading:t.loading,questions:t.questions}}),(function(e){return Object(u.b)({GetQuestions:J},e)}))(me),pe=function(e){Object(_.a)(a,e);var t=Object(L.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(x.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",textAlign:"center",width:"600px"}},r.a.createElement(W,null),a.renderFeedbackInfo(),a.renderButtons())}}],[{key:"renderFeedbackMessage",value:function(){var e=localStorage.getItem("state");return JSON.parse(e).player.assertions<3?"Podia ser melhor...":"Mandou bem!"}},{key:"renderFeedbackInfo",value:function(){var e=localStorage.getItem("state"),t=JSON.parse(e).player,n=t.assertions,o=t.score;return r.a.createElement("div",null,r.a.createElement("p",{"data-testid":"feedback-text"},a.renderFeedbackMessage(n)),r.a.createElement("p",{"data-testid":"feedback-total-score"},o),r.a.createElement("p",{"data-testid":"feedback-total-question"},n))}},{key:"renderButtons",value:function(){return r.a.createElement("div",null,r.a.createElement(i.b,{to:"/"},r.a.createElement("button",{"data-testid":"btn-play-again",type:"button"},"Jogar novamente")),r.a.createElement(i.b,{to:"/ranking"},r.a.createElement("button",{"data-testid":"btn-ranking",type:"button"},"Ver Ranking")))}}]),a}(n.Component);pe.defaultProps={};var fe=Object(s.b)((function(e){var t=e.ReducerQuestions;return{loading:t.loading,questions:t.questions}}),(function(e){return Object(u.b)({},e)}))(pe),ve=function(e){Object(_.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).state={},n}return Object(x.a)(a,[{key:"restartGame",value:function(){console.log(this.props),localStorage.removeItem("state")}},{key:"renderRankingList",value:function(){console.log(this.props);var e=JSON.parse(localStorage.getItem("ranking"));return r.a.createElement("ol",null,e.map((function(e,t){var a=e.name,n=e.gravatarEmail,o=e.score;return r.a.createElement("li",null,r.a.createElement("img",{className:"image is-25x25",src:n,alt:"profile-pic"}),r.a.createElement("span",{"data-testid":"player-name-".concat(t)},"".concat(a," - ")),r.a.createElement("span",{"data-testid":"player-score-".concat(t)},o))})))}},{key:"renderGoHomeButton",value:function(){var e=this;return console.log(this.props),r.a.createElement(i.b,{to:"/"},r.a.createElement("button",{type:"button",className:"button is-info card-footer-item","data-testid":"btn-go-home",onClick:function(){return e.restartGame()}},"JOGAR NOVAMENTE"))}},{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",{className:"card",style:{width:"600px"}},r.a.createElement("div",{className:"card-header-title is-centered","data-testid":"ranking-title"},"Ranking"),r.a.createElement("div",{className:"card-content"},this.renderRankingList()),r.a.createElement("div",{className:"card-content"},this.renderGoHomeButton())))}}]),a}(r.a.Component),be=function(e){Object(_.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).state={},n}return Object(x.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{"data-testid":"settings-title"},"Merda")}}]),a}(n.Component);a(1260);function ge(){return r.a.createElement(T.d,null,r.a.createElement(T.b,{exact:!0,path:"/",component:Y}),r.a.createElement(T.b,{exact:!0,path:"/game",component:de}),r.a.createElement(T.b,{exact:!0,path:"/feedback",component:fe}),r.a.createElement(T.b,{exact:!0,path:"/settings",component:be}),r.a.createElement(T.b,{exact:!0,path:"/ranking",component:ve}))}c.a.render(r.a.createElement(s.a,{store:S},r.a.createElement(i.a,{basename:"/trivia-game"},r.a.createElement(ge,null))),document.getElementById("root"))},201:function(e,t,a){},242:function(e,t){},288:function(e,t,a){e.exports=a(1261)},297:function(e,t,a){},306:function(e,t){},308:function(e,t){},320:function(e,t){},322:function(e,t){},349:function(e,t){},351:function(e,t){},352:function(e,t){},358:function(e,t){},360:function(e,t){},378:function(e,t){},381:function(e,t){},397:function(e,t){},400:function(e,t){},768:function(e,t){},769:function(e,t){}},[[288,1,2]]]);
//# sourceMappingURL=main.88afbb3e.chunk.js.map