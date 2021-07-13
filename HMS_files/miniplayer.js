(function(g){var window=this;'use strict';var o6=function(a){g.V.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.Zf=!1;this.player=a;this.N(a,"minimized",this.fg);this.N(a,"onStateChange",this.LE)},p6=function(a){g.EN.call(this,a);
this.i=new o6(this.player);this.i.hide();g.sN(this.player,this.i.element,4);a.Le()&&(this.load(),g.M(a.getRootNode(),"ytp-player-minimized",!0))};
g.v(o6,g.V);g.k=o6.prototype;
g.k.XC=function(){this.tooltip=new g.cR(this.player,this);g.F(this,this.tooltip);g.sN(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.qc=new g.zO(this.player);g.F(this,this.qc);this.vg=new g.V({D:"div",K:"ytp-miniplayer-scrim"});g.F(this,this.vg);this.vg.Ba(this.element);this.N(this.vg.element,"click",this.Py);var a=new g.V({D:"button",Ea:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.HL()]});g.F(this,a);a.Ba(this.vg.element);this.N(a.element,"click",this.ri);
a=new g.O1(this.player,this);g.F(this,a);a.Ba(this.vg.element);this.Uo=new g.V({D:"div",K:"ytp-miniplayer-controls"});g.F(this,this.Uo);this.Uo.Ba(this.vg.element);this.N(this.Uo.element,"click",this.Py);var b=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.F(this,b);b.Ba(this.Uo.element);a=new g.V({D:"div",K:"ytp-miniplayer-play-button-container"});g.F(this,a);a.Ba(this.Uo.element);var c=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.F(this,c);c.Ba(this.Uo.element);this.dL=new g.$P(this.player,
this,!1);g.F(this,this.dL);this.dL.Ba(b.element);b=new g.XP(this.player,this);g.F(this,b);b.Ba(a.element);this.nextButton=new g.$P(this.player,this,!0);g.F(this,this.nextButton);this.nextButton.Ba(c.element);this.xg=new g.QQ(this.player,this);g.F(this,this.xg);this.xg.Ba(this.vg.element);this.Ic=new g.eQ(this.player,this);g.F(this,this.Ic);g.sN(this.player,this.Ic.element,4);this.By=new g.V({D:"div",K:"ytp-miniplayer-buttons"});g.F(this,this.By);g.sN(this.player,this.By.element,4);a=new g.V({D:"button",
Ea:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.HL()]});g.F(this,a);a.Ba(this.By.element);this.N(a.element,"click",this.ri);a=new g.V({D:"button",Ea:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Close"},S:[g.ML()]});g.F(this,a);a.Ba(this.By.element);this.N(a.element,"click",this.ST);this.N(this.player,"presentingplayerstatechange",this.Hc);this.N(this.player,"appresize",this.tb);this.N(this.player,"fullscreentoggled",this.tb);this.tb()};
g.k.show=function(){this.yd=new g.Bq(this.Lp,null,this);this.yd.start();this.Zf||(this.XC(),this.Zf=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Ic.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.yd&&(this.yd.dispose(),this.yd=void 0);g.V.prototype.hide.call(this);this.player.Le()||(this.Zf&&this.Ic.hide(),this.player.loadModule("annotations_module"))};
g.k.xa=function(){this.yd&&(this.yd.dispose(),this.yd=void 0);g.V.prototype.xa.call(this)};
g.k.ri=function(){this.player.stopVideo();this.player.Na("onCloseMiniplayer")};
g.k.ST=function(){this.player.playVideo()};
g.k.Py=function(a){if(a.target===this.vg.element||a.target===this.Uo.element)g.S(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.LK(this.player.ub())?this.player.pauseVideo():this.player.playVideo():this.player.Na("onExpandMiniplayer")};
g.k.fg=function(){g.M(this.player.getRootNode(),"ytp-player-minimized",this.player.Le())};
g.k.fd=function(){this.Ic.Sb();this.xg.Sb()};
g.k.Lp=function(){this.fd();this.yd&&this.yd.start()};
g.k.Hc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.tb=function(){g.pQ(this.Ic,0,this.player.bb().getPlayerSize().width,!1);g.gQ(this.Ic)};
g.k.LE=function(a){this.player.Le()&&(0===a?this.hide():this.show())};
g.k.jc=function(){return this.tooltip};
g.k.Je=function(){return!1};
g.k.hf=function(){return!1};
g.k.ci=function(){return!1};
g.k.zz=function(){};
g.k.Gm=function(){};
g.k.lr=function(){};
g.k.Sm=function(){return null};
g.k.bj=function(){return new g.rl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Tp=function(a,b,c,d,e){var f=0,h=d=0,l=g.Ql(a);if(b){c=g.Lq(b,"ytp-prev-button")||g.Lq(b,"ytp-next-button");var m=g.Lq(b,"ytp-play-button"),n=g.Lq(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Ol(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Lq(b,"ytp-miniplayer-button-top-left"),f=g.Ol(b,this.element),b=g.Ql(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.bb().getPlayerSize().width;e=f+(e||0);l=g.Nf(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Kk=function(){};
g.k.fk=function(){return!1};g.v(p6,g.EN);p6.prototype.create=function(){};
p6.prototype.Gi=function(){return!1};
p6.prototype.load=function(){this.player.hideControls();this.i.show()};
p6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.PN.miniplayer=p6;})(_yt_player);
