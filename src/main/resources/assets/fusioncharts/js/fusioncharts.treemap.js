/*
 FusionCharts JavaScript Library - Tree Map Chart
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @version 3.11.0
*/
FusionCharts.register("module",["private","modules.renderer.js-treemap",function(){function Q(c){return c?c.replace(/^#*/,"#"):"#E5E5E5"}function z(c,b,d){this.label=c;this.value=parseFloat(b,10);this.colorValue=parseFloat(d,10);this.prev=this.next=void 0;this.meta={}}function M(){this._b=[];this._css=void 0;this.rangeOurEffectApplyFn=function(){};this.statePointerLow={value:void 0,index:void 0};this.statePointerHigh={value:void 0,index:void 0}}var ba,ca,Z,da,K=this.hcLib,U=K.chartAPI,N=Math,R=N.max,
ea=N.round,ka=N.tan,fa=N.min,la=N.PI,ga=K.extend2,N=this.window,ma=K.Raphael,ha=K.graphics,V=ha.convertColor,ia=ha.getLightColor,I=this.raiseEvent,C=K.pluckNumber,F=K.pluck,na=K.each,$=K.BLANKSTRING,oa="rgba(192,192,192,"+(/msie/i.test(N.navigator.userAgent)&&!N.opera?.002:1E-6)+")";ma.addSymbol({backIcon:function(c,b,d){--d;var a=b+d,g=a-d/2,s=c+d,q=g-d;return["M",c,b-d,"L",c-d,b,c,a,c,g,s,g,s,q,s-d,q,"Z"]},homeIcon:function(c,b,d){--d;var a=2*d,g=c-d,s=g+a/6,q=b+d,D=s+a/4,l=q-d/2,v=D+a/6,t=l+d/
2,u=v+a/4,f=t-d;return["M",c,b-d,"L",g,b,s,b,s,q,D,q,D,l,v,l,v,t,u,t,u,f,u+a/6,f,"Z"]}});z.prototype.constructor=z;z.prototype.getCSSconf=function(){return this.cssConf};z.prototype.getPath=function(){return this.path};z.prototype.setPath=function(){var c=this.getParent();this.path=(c?c.getPath():[]).concat(this)};z.prototype.addChild=function(c){c instanceof z&&(this.next=this.next||[],[].push.call(this.next,c),c.setParent(this));return this.next};z.prototype.getChildren=function(){return this.next};
z.prototype.addChildren=function(c,b){var d=this.getChildren()||(this.next=[]),a=d.length;b||(b=a-1);d.splice(b>a-1?a-1:0>b?0:b,0,c);c.setParent(this)};z.prototype.getDepth=function(){return this.meta.depth};z.prototype.isLeaf=function(c){return(c?this.getDepth()<c:!0)&&this.next};z.prototype.setParent=function(c){c instanceof z&&(this.prev=c);return this};z.prototype.getSiblingCount=function(c){var b,d=0,a=this;if(this instanceof z){b=this.getParent();if(c){for(;a;)(a=a.getSibling(c))&&(d+=1);return d}if(b)return b.getChildren().length}};
z.prototype.getParent=function(){return this.prev};z.prototype.getLabel=function(){return this.label};z.prototype.getValue=function(){return this.value};z.prototype.setValue=function(c,b){this.value=b?this.value+c:c};z.prototype.getColorValue=function(){return this.colorValue};z.prototype.getSibling=function(c){c=c.toLowerCase();var b=this.getParent(),d=this.getLabel(),a,g;if(b)for(b=b.getChildren(),a=0;a<b.length;a++)if(g=b[a],g=g.getLabel(),g===d)switch(c){case "left":return b[a-1];case "right":return b[a+
1]}};z.prototype.setMeta=function(c,b){this.meta[c]=b};z.prototype.setDepth=function(c){this.meta.depth=c};z.prototype.getMeta=function(c){return c?this.meta[c]:this.meta};M.prototype.constructor=M;M.prototype.resetPointers=function(){this.statePointerLow={value:void 0,index:void 0};this.statePointerHigh={value:void 0,index:void 0}};M.prototype.setRangeOutEffect=function(c,b){this._css=c;this.rangeOurEffectApplyFn=b};M.prototype.addInBucket=function(c){var b=this._b,d=c.getColorValue(),a=0,g=b.length-
1;if(d){a:{for(var s,q;a<=g;)if(s=(a+g)/2|0,q=b[s],q=q.getColorValue(),q<d)a=s+1;else if(q>d)g=s-1;else{d=s;break a}d=~g}b.splice(Math.abs(d),0,c)}};M.prototype.moveLowerShadePointer=function(c){var b=this._b,d,a,g,s=this.statePointerLow;d=s.index;a=s.value;var q=!1;d=void 0!==d?d:0;a=void 0!==a?a:Number.NEGATIVE_INFINITY;if(c!==a){if(a<=c){for(;;){g=(a=b[d++])?a.getColorValue():0;if(c<g||!a)break;q=!0;a.rangeOutEffect=this._css;this.rangeOurEffectApplyFn.call(a,this._css)}d=q?d-2:d-1}else{for(;;){g=
(a=b[d--])?a.getColorValue():0;if(c>=g||!a)break;a.cssConf=a.cssConf||{};q=!0;delete a.rangeOutEffect;a.cssConf.opacity=1;this.rangeOurEffectApplyFn.call(a,a.cssConf)}d=q?d+2:d+1}s.index=d;s.value=c}};M.prototype.moveHigherShadePointer=function(c){var b=this._b,d=b.length,a,g,s=this.statePointerHigh;g=s.index;a=s.value;var q=!1,d=void 0!==g?g:d-1;a=void 0!==a?a:Number.POSITIVE_INFINITY;if(c!==a){if(a>c){for(;;){g=(a=b[d--])?a.getColorValue():0;if(c>=g||!a)break;q=!0;a.rangeOutEffect=this._css;this.rangeOurEffectApplyFn.call(a,
this._css)}d=q?d+2:d+1}else{for(;;){g=(a=b[d++])?a.getColorValue():0;if(c<g||!a)break;a.cssConf=a.cssConf||{};q=!0;delete a.rangeOutEffect;a.cssConf.opacity=1;this.rangeOurEffectApplyFn.call(a,a.cssConf)}d=q?d-2:d-1}s.index=d;s.value=c}};U("treemap",{friendlyName:"TreeMap",standaloneInit:!0,hasGradientLegend:!0,creditLabel:!1,defaultDatasetType:"treemap",applicableDSList:{treemap:!0},addData:function(){var c=this._ref.algorithmFactory,b=Array.prototype.slice.call(arguments,0);b.unshift("addData");
b.unshift(this._getCleanValue());c.realTimeUpdate.apply(this,b)},removeData:function(){var c=this._ref.algorithmFactory,b=Array.prototype.slice.call(arguments,0);b.unshift("deleteData");b.unshift(this._getCleanValue());c.realTimeUpdate.apply(this,b)},_createToolBox:function(){var c,b,d,a,g=this.components;c=g.chartMenuBar;c&&c.drawn||(U.mscartesian._createToolBox.call(this),c=g.tb,b=c.getAPIInstances(c.ALIGNMENT_HORIZONTAL),d=b.Symbol,b=g.chartMenuBar.componentGroups[0],a=new d("backIcon",!1,(c.idCount=
c.idCount||0,c.idCount++),c.pId),c=new d("homeIcon",!1,c.idCount++,c.pId),b.addSymbol(c,!0),b.addSymbol(a,!0),g.toolbarBtns={back:a,home:c})},_getCleanValue:function(){var c=this.components.numberFormatter;return function(b){return c.getCleanValue(b)}},_createDatasets:function(){var c=this.components,b=this.jsonData,d=b.dataset,d=b.data||d&&d[0].data,a=this.defaultDatasetType,g=[];d&&d.length||this.setChartMessage();na(d,function(a){a.vline||g.push(a)});b={data:g};this.config.categories=g;c=c.dataset||
(c.dataset=[]);d?a&&(d=FusionCharts.get("component",["dataset",a]))&&(c[0]?(c[0].JSONData=g[0],c[0].configure()):(this._dsInstance=d=new d,c.push(d),d.chart=this,d.init(b))):this.setChartMessage()},init:function(){var c={},b={},d={};this._ref={afAPI:ba(c,b,d),algorithmFactory:ca(c,b,d),containerManager:da(c,b,d),treeOpt:Z};U.guageBase.init.apply(this,arguments)}},U.guageBase);FusionCharts.register("component",["dataset","TreeMap",{type:"treemap",pIndex:2,customConfigFn:"_createDatasets",init:function(c){this.JSONData=
c.data[0];this.components={};this.conf={};this.graphics={elemStore:{rect:[],label:[],highlight:[],hot:[],polypath:[]}};this.configure()},configure:function(){var c,b=this.chart,d=b.components,a=this.conf,b=b.jsonData.chart;a.metaTreeInf={};a.algorithm=(b.algorithm||"squarified").toLowerCase();a.horizontalPadding=C(b.horizontalpadding,5);a.horizontalPadding=0>a.horizontalPadding?0:a.horizontalPadding;a.verticalPadding=C(b.verticalpadding,5);a.verticalPadding=0>a.verticalPadding?0:a.verticalPadding;
a.showParent=C(b.showparent,1);a.showChildLabels=C(b.showchildlabels,0);a.highlightParentsOnHover=C(b.highlightparentsonhover,0);a.defaultParentBGColor=F(b.defaultparentbgcolor,void 0);a.defaultNavigationBarBGColor=F(b.defaultnavigationbarbgcolor,a.defaultParentBGColor);a.showTooltip=C(b.showtooltip,1);a.baseFontSize=C(b.basefontsize,10);a.baseFontSize=1>a.baseFontSize?1:a.baseFontSize;a.labelFontSize=C(b.labelfontsize,void 0);a.labelFontSize=1>a.labelFontSize?1:a.labelFontSize;a.baseFont=F(b.basefont,
"Verdana, Sans");a.labelFont=F(b.labelfont,void 0);a.baseFontColor=F(b.basefontcolor,"#000000").replace(/^#?([a-f0-9]+)/ig,"#$1");a.labelFontColor=F(b.labelfontcolor,void 0);a.labelFontColor&&(a.labelFontColor=a.labelFontColor.replace(/^#?([a-f0-9]+)/ig,"#$1"));a.labelFontBold=C(b.labelfontbold,0);a.labelFontItalic=C(b.labelfontitalic,0);a.plotBorderThickness=C(b.plotborderthickness,1);a.plotBorderThickness=0>a.plotBorderThickness?0:5<a.plotBorderThickness?5:a.plotBorderThickness;a.plotBorderColor=
F(b.plotbordercolor,"#000000").replace(/^#?([a-f0-9]+)/ig,"#$1");a.tooltipSeparationCharacter=F(b.tooltipsepchar,",");a.plotToolText=F(b.plottooltext,"");a.parentLabelLineHeight=C(b.parentlabellineheight,12);a.parentLabelLineHeight=0>a.parentLabelLineHeight?0:a.parentLabelLineHeight;a.labelGlow=C(b.labelglow,1);a.labelGlowIntensity=C(b.labelglowintensity,100)/100;a.labelGlowIntensity=0>a.labelGlowIntensity?0:1<a.labelGlowIntensity?1:a.labelGlowIntensity;a.labelGlowColor=F(b.labelglowcolor,"#ffffff").replace(/^#?([a-f0-9]+)/ig,
"#$1");a.labelGlowRadius=C(b.labelglowradius,2);a.labelGlowRadius=0>a.labelGlowRadius?0:10<a.labelGlowRadius?10:a.labelGlowRadius;a.btnResetChartTooltext=F(b.btnresetcharttooltext,"Back to Top");a.btnBackChartTooltext=F(b.btnbackcharttooltext,"Back to Parent");a.rangeOutBgColor=F(b.rangeoutbgcolor,"#808080").replace(/^#?([a-f0-9]+)/ig,"#$1");a.rangeOutBgAlpha=C(b.rangeoutbgalpha,100);a.rangeOutBgAlpha=1>a.rangeOutBgAlpha||100<a.rangeOutBgAlpha?100:a.rangeOutBgAlpha;c=C(b.maxdepth);a.maxDepth=void 0!==
c?R(c,1):void 0;c=a.showNavigationBar=C(b.shownavigationbar,1);a.slicingMode=F(b.slicingmode,"alternate");a.navigationBarHeight=C(b.navigationbarheight);a.navigationBarHeightRatio=C(b.navigationbarheightratio);a.navigationBarBorderColor=F(b.navigationbarbordercolor,a.plotBorderColor).replace(/^#?([a-f0-9]+)/ig,"#$1");a.navigationBarBorderThickness=c?C(b.navigationbarborderthickness,a.plotBorderThickness):0;a.seperatorAngle=C(b.seperatorangle)*(la/180);d.postLegendInitFn({min:0,max:100});a.isConfigured=
!0},draw:function(){var c=this.conf,b=this.chart,d=b.config,a=b.components,g=d.canvasLeft,s=d.canvasRight,q=d.canvasBottom,D=d.canvasTop,l=a.paper,v=b.graphics,t=v.trackerGroup,u,f,B,h,n,d=c.metaTreeInf,m=this.graphics.elemStore,x={},p,e,k,a=a.gradientLegend,w,y=b._ref,W=y.afAPI.visibilityController,r=b.get("config","animationObj"),A=r.duration||0,X=r.dummyObj,O=r.animObj,S=r.animType,Y,aa,E,z,r=y.containerManager,y=y.algorithmFactory;for(f in m){Y=m[f];E=0;for(z=Y.length;E<z;E++)(aa=Y[E])&&aa.remove&&
aa.remove();Y.length=0}r.remove();u=v.datasetGroup=v.datasetGroup||l.group("dataset");f=v.datalabelsGroup=v.datalabelsGroup||l.group("datalabels").insertAfter(u);B=v.lineHot=v.lineHot||l.group("line-hot",t);h=v.labelHighlight=v.labelHighlight||l.group("labelhighlight",f);n=v.floatLabel=v.floatLabel||l.group("labelfloat",f).insertAfter(h);c.colorRange=a.colorRange;d.effectiveWidth=s-g;d.effectiveHeight=q-D;d.startX=g;d.startY=D;p=d.effectiveWidth/2;e=d.effectiveHeight/2;p=d.effectiveWidth/2;e=d.effectiveHeight/
2;x.drawPolyPath=function(a,e){var c,b;c=(x.graphicPool(!1,"polyPathItem")||(b=l.path(u))).attr({path:a._path}).animateWith(X,O,{path:a.path},A,S);c.css(e);b&&m.polypath.push(b);return c};x.drawRect=function(a,c,b,d){var n,h,w={},f={},t;for(n in a)h=a[n],0>h&&(a[n]=0,f.visibility="hidden");ga(w,a);w.x=p;w.y=e;w.height=0;w.width=0;k=x.graphicPool(!1,"plotItem")||(t=l.rect(u));k.attr(b&&(b.x||b.y)&&b||w);k.attr(d);k.animateWith(X,O,a,A,S,W.controlPostAnimVisibility);k.css(c).toFront();k.css(f);t&&m.rect.push(t);
return k};x.drawText=function(a,b,k,d,w){var f={},t,v,r=x.graphicPool(!1,"labelItem")||(t=l.text(n)),y=x.graphicPool(!1,"highlightItem")||(v=l.text(h)),ja=k.textAttrs;k=k.highlightAttrs;ga(f,ja);delete f.fill;f["stroke-linejoin"]="round";r.attr({x:d.x||p,y:d.y||e,fill:"#000000"}).css(ja);r.attr(w);a=0>b.x||0>b.y?$:a;r.animateWith(X,O,{text:a,x:b.x,y:b.y},A,S);y.attr({text:a,x:d.x||p,y:d.y||e,stroke:c.labelGlow?"#ffffff":oa}).css(f).css(k);y.attr(w);y.animateWith(X,O,{x:b.x,y:b.y},A,S);m.label.push(t);
m.highlight.push(v);return{label:r,highlightMask:y}};x.drawHot=function(a,c){var e;e=a.plotItem||{};var b=a.rect,k,d,n;for(d in b)n=b[d],0>n&&(b[d]=0);e=e.tracker=l.rect(B).attr(b).attr({cursor:"pointer",fill:"rgba(255, 255, 255, 0)",stroke:"none"});for(k in c)b=c[k],e[k].apply(e,b);m.hot.push(e);return e};x.disposeItems=function(a,e){var c,b,m,k=e||"plotItem labelItem hotItem highlightItem polyPathItem pathlabelItem pathhighlightItem stackedpolyPathItem stackedpathlabelItem stackedpathhighlightItem".split(" ");
for(c=0;c<k.length;c+=1)m=k[c],(b=a[m])&&x.graphicPool(!0,m,b,a.rect),b&&b.hide(),a[m]=void 0};x.disposeChild=function(){var a,e=function(){return a.disposeItems},c=function(a,b){var m,k;e(a);for(m=0;m<(a.getChildren()||[]).length;m++)k=a.getChildren(),m=c(k[m],m);return b};return function(b){var m=b.getParent();a||(a=this,e=e());m?a.disposeChild(m):c(b,0)}}();x.graphicPool=function(){var a={};return function(e,c,b){var m=a[c];m||(m=a[c]=[]);"hotItem"!==c&&"pathhotItem"!==c||b.remove();if(e)m.push(b);
else if(e=m.splice(0,1)[0])return e.show(),e}}();x.disposeComplimentary=function(a){var e,c;e=a.getParent();var b=a.getSiblingCount("left");e&&(c=e.getChildren(),e=c.splice(b,1)[0],this.disposeChild(a),c.splice(b,0,e));this.removeLayers()};x.removeLayers=function(){var a,e,c,b;c=m.hot;b=c.length;for(a=0;a<b;a++)(e=c[a])&&e.remove();c.length=0};y.init(c.algorithm,!0,c.maxDepth);b=y.plotOnCanvas(this.JSONData,void 0,b._getCleanValue());r.init(this,d,x,void 0,b);r.draw();w=y.applyShadeFiltering({fill:c.rangeOutBgColor,
opacity:.01*c.rangeOutBgAlpha},function(a){this.plotItem&&this.plotItem.css(a)});a&&a.enabled&&(a.resetLegend(),a.clearListeners());a.notifyWhenUpdate(function(a,e){w.call(this,{start:a,end:e})},this);c.isConfigured=!1}}]);ba=function(c,b,d){function a(a,c,b){this.node=a;this.bucket=c?new M:void 0;this.cleansingFn=b}var g,s,q,D;a.prototype.get=function(){var a=this.order,c=this.bucket,b=this.cleansingFn;return function f(d,h){var n,m,x,p;m=["label","value","data","svalue"];if(d)for(p in n=new z(d.label,
b(d.value),b(d.svalue)),x=d.data||[],0===x.length&&c&&c.addInBucket(n),n.setDepth(h),d)-1===m.indexOf(p)&&n.setMeta(p,d[p]);a&&(x=a(x));for(m=0;m<x.length;m++)p=x[m],p=f(p,h+1),n.addChild(p);return n}(this.node,0)};a.prototype.getBucket=function(){return this.bucket};a.prototype.getMaxDepth=function(){return s};g=function(a,c){function b(a){this.iterAPI=a}var d=c&&c.exception,f,g;b.prototype.constructor=b;b.prototype.initWith=function(a){return this.iterAPI(a)};f=(new b(function(a){var c=a,b=[],x=
!1;b.push(c);return{next:function(a){var c,k;if(!x){c=b.shift();if(d&&c===d&&(c=b.shift(),!c)){x=!0;return}(k=(a=void 0!==a?c.getDepth()>=a?[]:c.getChildren():c.getChildren())&&a.length||0)&&[].unshift.apply(b,a);0===b.length&&(x=!0);return c}},reset:function(){x=!1;c=a;b.length=0;b.push(c)}}})).initWith(a);g=(new b(function(a){var c=a,b=[],d=[],f=!1;b.push(c);d.push(c);return{next:function(){var a,c,d;if(!f)return c=b.shift(),(d=(a=c.getChildren())&&a.length||0)&&[].push.apply(b,a),0===b.length&&
(f=!0),c},nextBatch:function(){var a,c;if(!f)return a=d.shift(),(c=(a=a.getChildren())&&a.length||0)&&[].push.apply(d,a),0===b.length&&(f=!0),a},reset:function(){f=!1;c=a;b.length=0;b.push(c)}}})).initWith(a);return{df:f,bf:g}};D=function(){function a(){this.con={}}var c={},b;a.prototype.constructor=a;a.prototype.get=function(a){return this.con[a]};a.prototype.set=function(a,c){this.con[a]=c};a.prototype["delete"]=function(a){return delete this.con[a]};return{getInstance:function(d){var f;return(f=
c[d])?b=f:b=c[d]=new a}}}();b=function(){var a=[],c,b=!1,d={visibility:"visible"};return{controlPreAnimVisibility:function(d,B){var h,n,m;if(d){for(n=d;;){n=n.getParent();if(!n)break;h=n}h=g(h,{exception:d});for(h=h.df;;){n=h.next();if(!n)break;m=n.overAttr||(n.overAttr={});m.visibility="hidden";a.push(n)}c=B||d.getParent();b=!1;return a}},displayAll:function(d){var B;if(d){d=g(d.getParent()||d);for(d=d.df;;){B=d.next();if(!B)break;B=B.overAttr||(B.overAttr={});B.visibility="visible"}c=void 0;a.length=
0;b=!1}},controlPostAnimVisibility:function(){var f,B;if(!b&&(b=!0,c)){B=g(c);for(B=B.df;;){f=B.next(s);if(!f)break;if(f=f.dirtyNode)f&&f.plotItem.attr(d),(f=f&&f.textItem)&&f.label&&f.label.attr(d),f&&f.label&&f.highlightMask.attr(d)}c=void 0;a.length=0}}}}();c.AbstractTreeMaker=a;c.iterator=g;c.initConfigurationForlabel=function(a,c,b){var d=a.x,f=a.y,g=c/2,h=b.showParent?0:1,n=b.showChildLabels;return function(a,x,p,e){p=!1;var k={x:void 0,y:void 0,width:void 0,height:void 0},w={},y=0,l={},r={},
A,l=a.meta;if(a)return a.isLeaf(s)||(p=!0),w.label=a.getLabel(),k.width=x.width-2*d,k.x=x.x+x.width/2,a=x.height-2*f,!p&&a<c&&(k.height=-1),!e&&p?(k.height=n?k.height?k.height:x.height-2*f:-1,k.y=x.y+x.height/2):h?(k.y=-1,c=f=0,A="hidden"):(k.height=k.height?k.height:c,k.y=x.y+f+g),y+=2*f,y+=c,w.rectShiftY=y,w.textRect=k,b.labelGlow?(r["stroke-width"]=b.labelGlowRadius,r.opacity=b.labelGlowIntensity,r.stroke=b.labelGlowColor,r.visibility="hidden"===A?"hidden":"visible"):r.visibility="hidden",l={fontSize:b.labelFontSize||
b.baseFontSize,fontFamily:b.labelFont||b.baseFont,fill:l&&l.fontcolor&&Q(l.fontcolor)||b.labelFontColor||b.baseFontColor,fontWeight:b.labelFontBold&&"bold",fontStyle:b.labelFontItalic&&"italic",visibility:A},{conf:w,attr:l,highlight:r}}};c.context=D;c.mapColorManager=function(a,c,b){var d=Q(b?a.defaultNavigationBarBGColor:a.defaultParentBGColor);return function(b,g,h){g={};var n=b.cssConf,m=b.meta,m=m.fillcolor?Q(m.fillcolor):void 0,x=b.getParent(),p;p=b.getColorValue();a.isLegendEnabled=!0;p=a.isLegendEnabled&&
p===p?c.getColorByValue(p)&&"#"+c.getColorByValue(p)||Q(c.rangeOutsideColor):void 0;b.isLeaf(s)?g.fill=m||p||d:(b=(b=(x?x:b).cssConf)&&b.fill,g.fill=m||(p?p:b));g.stroke=h?a.navigationBarBorderColor:a.plotBorderColor;g.strokeWidth=h?a.navigationBarBorderThickness:a.plotBorderThickness;g["stroke-dasharray"]="none";!h&&n&&"--"===n["stroke-dasharray"]&&(g["stroke-dasharray"]=n["stroke-dasharray"],g.strokeWidth=n.strokeWidth);return g}};c.abstractEventRegisterer=function(a,b,g,u){function f(a){var c=
{},b,e;for(b in A)e=A[b],c[e]=a[b];return c}var s=b.chart,h=s.components,n=h.toolbarBtns,m=s.chartInstance,x=b.conf,p=h.gradientLegend,e=a.drawTree,k=u.disposeChild,w,y=arguments,W,r,A={colorValue:"svalue",label:"name",value:"value",rect:"metrics"};W=c.context.getInstance("ClickedState");s._intSR={};s._intSR.backToParent=w=function(a){var b=this,d=b,n=d&&b.getParent(),h=c.context.getInstance("ClickedState").get("VisibileRoot")||{};a?I("beforedrillup",{node:b,withoutHead:!x.showParent},m,void 0,function(){n&&
(h.state="drillup",h.node=[{virginNode:c.getVisibleRoot()},n],k(d),e.apply(n,y));I("drillup",{node:b,withoutHead:!x.showParent,drillUp:w,drillUpToTop:r},m);b=b&&b.getParent()},function(){I("drillupcancelled",{node:b,withoutHead:!x.showParent},m)}):(n&&(h.state="drillup",h.node=[{virginNode:c.getVisibleRoot()},n],k(d),e.apply(n,y)),b=b&&b.getParent())};s._intSR.resetTree=r=function(a){for(var b=this,d=b&&b.getParent(),n,h=c.context.getInstance("ClickedState").get("VisibileRoot")||{};d;)n=d,d=d.getParent();
a?I("beforedrillup",{node:b,withoutHead:!x.showParent},m,void 0,function(){n&&(h.state="drillup",h.node=[{virginNode:c.getVisibleRoot()},n],k(n),e.apply(n,y),I("drillup",{node:b,sender:s.fusionCharts,withoutHead:!x.showParent,drillUp:w,drillUpToTop:r},m))},function(){I("drillupcancelled",{node:b,withoutHead:!x.showParent},m)}):n&&(h.state="drillup",h.node=[{virginNode:c.getVisibleRoot()},n],k(n),e.apply(n,y))};return{click:function(b,c){var e=b.virginNode,h,y,g;I("dataplotclick",f(b.virginNode),m);
if(y=e.getParent()){if(e===c)g=y,h="drillup";else{if(e.next)g=e;else if(g=y,c===g){h=void 0;return}h="drilldown"}p&&p.enabled&&p.resetLegend();a.applyShadeFiltering.reset();h&&I("before"+h,{node:g,withoutHead:!x.showParent},m,void 0,function(){W.set("VisibileRoot",{node:b,state:h});k.call(u,g);q=g;d.draw();I(h,{node:g,withoutHead:!x.showParent,drillUp:w,drillUpToTop:r},m)},function(){I(h+"cancelled",{node:g,withoutHead:!x.showParent},m)});n.back&&n.back.attachEventHandlers({click:w.bind(g)});n.home&&
n.home.attachEventHandlers({click:r.bind(g)})}},mouseover:function(a){var b=f(a.virginNode);I("dataplotrollover",b,m,void 0,void 0,function(){I("dataplotrollovercancelled",b,m)})},mouseout:function(a){var b=f(a.virginNode);I("dataplotrollout",f(a.virginNode),m,void 0,void 0,function(){I("dataplotrolloutcancelled",b,m)})}}};c.setMaxDepth=function(a){return s=a};c.getVisibleRoot=function(){return q};c.setVisibleRoot=function(a){q=a};c.visibilityController=b;return c};ca=function(c,b){function d(){D.apply(this,
arguments)}function a(a,b,m){v=new d(a,u,b);a=v.get();!1!==m&&(t=a);c.setVisibleRoot(a);return a}function g(){var a=q[l],d;b.realTimeUpdate=s.apply(this,arguments);d=Array.prototype.slice.call(arguments,0);d.unshift(a);a.drawTree.apply(c.getVisibleRoot(),d)}function s(){var a,b,c=q[l];b=Array.prototype.slice.call(arguments,0);b.unshift(c);a=b.slice(-1)[0];return function(){var d=Array.prototype.slice.call(arguments,0),p=d.shift(),e=d.shift();Z(t,function(a){c.drawTree.apply(a||t,b)},a,p)[e].apply(this,
d)}}var q,D=c.AbstractTreeMaker,l,v,t,u,f,B;q={sliceanddice:{areaBaseCalculator:function(a,b){return function(c,d,p){var e,k,w={},y,g,r,f=e=0;if(c){p&&(e=p.textMargin||e);f=e;p=c.getParent();e=c.getSibling("left");if(p){k=p.getValue();r=p.rect;y=r.height-2*b-f;g=r.width-2*a;w.effectiveRect={height:y,width:g,x:r.x+a,y:r.y+b+f};w.effectiveArea=y*g;w.ratio=c.getValue()/k;if(e)return d.call(c,w,e,p);w.lastIsParent=!0;return d.call(c,w,p)}return null}}},applyShadeFiltering:function(a,b,c){a.setRangeOutEffect(b,
c);this.applyShadeFiltering.reset=function(){a.resetPointers()};return function(b){a.moveLowerShadePointer(b.start);a.moveHigherShadePointer(b.end)}},alternateModeManager:function(){return function(a,b){var c,d,g,e,k,w=a.effectiveArea*a.ratio;d=a.effectiveRect;var y=b.rect;a.lastIsParent?(e=d.x,k=d.y,c=d.height,d=d.width,g=this.isDirectionVertical=!0):(c=d.height+d.y-(y.height+y.y),d=d.width+d.x-(y.width+y.x),g=this.isDirectionVertical=!b.isDirectionVertical);g?(d=w/c,e=void 0!==e?e:y.x,k=void 0!==
k?k:y.y+y.height):(c=w/d,e=void 0!==e?e:y.x+y.width,k=void 0!==k?k:y.y);return{height:c,width:d,x:e,y:k}}},horizontalVerticalManager:function(a){var b=Boolean("vertical"===a?!0:!1);return function(a,c,d){var e,k,w,g=a.effectiveArea*a.ratio,h=a.effectiveRect,f=c.rect;a.lastIsParent?(k=h.x,w=h.y,a=h.height,e=h.width,c=this.isDirectionVertical=!c.isDirectionVertical):(a=h.height+h.y-(f.height+f.y),e=h.width+h.x-(f.width+f.x),c=this.isDirectionVertical=!d.isDirectionVertical);(c=b?c:!c)?(0===a&&(a=h.height,
k=void 0!==k?k:f.x+f.width,w=void 0!==w?w:f.y),e=g/a,k=void 0!==k?k:f.x,w=void 0!==w?w:f.y+f.height):(0===e&&(e=h.width,k=void 0!==k?k:f.x,w=void 0!==w?w:f.y+f.height),a=g/e,k=void 0!==k?k:f.x+f.width,w=void 0!==w?w:f.y);return{height:a,width:e,x:k,y:w}}},drawTree:function(a,b,d,g){var p=b.chart,e=p.components,k=e.numberFormatter,e=e.toolbarBtns,w=g.drawRect,y=g.drawText,v=g.drawHot,r=d.horizontalPadding,A=d.verticalPadding,t=b.chart.linkedItems.smartLabel,l=c.iterator,s=l(this).df,q,u=a.areaBaseCalculator(r,
A),E=b.conf,D=E.highlightParentsOnHover,z,C=c.context,r=c.visibilityController,L=c.mapColorManager(E,b.conf.colorRange),A=c.abstractEventRegisterer.apply(c,arguments),F=A.click,I=A.mouseover,G=A.mouseout,A=E.slicingMode,J=a["alternate"===A?"alternateModeManager":"horizontalVerticalManager"](A),A=p._intSR,H,l=C.getInstance("ClickedState").get("VisibileRoot")||{};(H=l.node)&&l.state&&("drillup"===l.state.toLowerCase()?H instanceof Array?r.controlPreAnimVisibility(H[0].virginNode,H[1]):r.controlPreAnimVisibility(H.virginNode):
r.displayAll(l.node.virginNode));z=c.initConfigurationForlabel({x:5,y:5},E.parentLabelLineHeight,E);for(r=q=s.next(B=c.setMaxDepth(this.getDepth()+f));r.getParent();)r=r.getParent();E.showNavigationBar?(e.home.hide(),e.back.hide()):r!=q?(e.home.show(),e.back.show()):(e.home.hide(),e.back.hide());t.useEllipsesOnOverflow(p.config.useEllipsesWhenOverflow);t.setStyle(E._setStyle={fontSize:(E.labelFontSize||E.baseFontSize)+"px",fontFamily:E.labelFont||E.baseFont,lineHeight:1.2*(E.labelFontSize||E.baseFontSize)+
"px"});p=A.backToParent;r=A.resetTree;e.back&&e.back.attachEventHandlers({click:p.bind(q)});e.home&&e.home.attachEventHandlers({click:r.bind(q)});(function P(a,b){var c,d,e,n,m,f,h,p;f={};var r,l,A={},O={};h={};var H="",M,N;a&&(M=k.yAxis(a.getValue()),N=k.sYAxis(a.getColorValue()),a.setPath(),c=a.rect||{},d=a.textRect||{},e=a.rect={},h=a.textRect={},e.width=b.width,e.height=b.height,e.x=b.x,e.y=b.y,h=L(a),(l=a.plotItem)&&g.graphicPool(!0,"plotItem",l,c),l=a.plotItem=w(e,h,c,a.overAttr),a.cssConf=
h,p=z(a,e),n=p.conf,f.textMargin=n.rectShiftY,h=a.textRect=n.textRect,r=t.getSmartText(n.label,h.width,h.height).text,a.plotItem=l,(n=a.labelItem)?(m=a.highlightItem,g.graphicPool(!0,"labelItem",n,c),g.graphicPool(!0,"highlightItem",m,c)):d=d||{},d=y(r,h,{textAttrs:p.attr,highlightAttrs:p.highlight},d,a.overAttr),a.labelItem=d.label,a.highlightItem=d.highlightMask,A.virginNode=a,A.plotItem=l,A.textItem=d,A.virginNode.dirtyNode=A,a.getColorValue()&&(H=E.tooltipSeparationCharacter+N),A.toolText=K.parseTooltext(E.plotToolText,
[1,2,3,119,122],{label:a.getLabel(),formattedValue:M,formattedsValue:N},{value:a.getValue(),svalue:a.getColorValue()})||a.getLabel()+E.tooltipSeparationCharacter+M+H,A.rect=e,O.hover=[function(){var a,b,c;c=C.getInstance("hover");b=this.virginNode;a=D&&!b.next?(a=b.getParent())?a:b:this.virginNode;c.set("element",a);c=V(ia(a.cssConf.fill,80),60);a.plotItem.tracker.attr({fill:c});I(this)}.bind(A),function(){var a,b;a=C.getInstance("hover").get("element");b=V(a.cssConf.fill||"#fff",0);a.plotItem.tracker.attr({fill:b});
G(this)}.bind(A)],O.tooltip=[A.toolText],O.click=[function(){F(this,q)}.bind(A)],(e=a.hotItem)&&g.graphicPool(!0,"hotItem",e,c),e=a.hotItem=v(A,O),c=s.next(B),f=u(c,J,f),P(c,f))})(q,d)}},squarified:{orderNodes:function(){return this.sort(function(a,b){return parseFloat(a.value,10)<parseFloat(b.value,10)?1:-1})},areaBaseCalculator:function(a,b){return function(c,d,f){var e={},k,w=k=0,g,l;if(c&&0!==c.length)return f&&(k=f.textMargin||k),w=k,g=c[0],(c=g.getParent())?(l=c.rect,f=l.height-2*b-w,k=l.width-
2*a,e.effectiveRect={height:f,width:k,x:l.x+a,y:l.y+b+w},e.effectiveArea=f*k,d.call(g,e,c)):null}},layoutManager:function(){function a(b,c){this.totalValue=c;this._rHeight=b.height;this._rWidth=b.width;this._rx=b.x;this._ry=b.y;this._rTotalArea=b.height*b.width;this.nodes=[];this._prevAR=void 0;this._rHeight<this._rWidth&&(this._hSegmented=!0)}a.prototype.constructor=a;a.prototype.addNode=function(a){var b=this._rTotalArea,c,d,e,k,f,g,h,r=this._hSegmented,l=this._rx,v=this._ry,t,s,q,u,E=0;this.nodes.push(a);
e=0;for(d=this.nodes.length;e<d;e++)E+=parseFloat(this.nodes[e].getValue(),10);c=E/this.totalValue*b;r?(b=this._rHeight,d=c/b,t=l+d,s=v,q=this._rHeight,u=this._rWidth-d):(d=this._rWidth,b=c/d,t=l,s=v+b,q=this._rHeight-b,u=this._rWidth);e=0;for(k=this.nodes.length;e<k;e++)a=this.nodes[e],f=a.getValue(),g=f/E*c,a.hRect=a.rect||{},a._hRect=a._rect||{},f=a.rect={},r?(f.width=h=d,f.height=h=g/h,f.x=l,f.y=v,v+=h):(f.height=h=b,f.width=h=g/h,f.x=l,f.y=v,l+=h),g=R(f.height,f.width),f=fa(f.height,f.width),
a.aspectRatio=g/f;if(1<this.nodes.length){if(this.prevAR<a.aspectRatio){this.nodes.pop().rect={};e=0;for(d=this.nodes.length;e<d;e++)this.nodes[e].rect=1===d&&this.nodes[e].firstPassed?this.nodes[e]._hRect:this.nodes[e].hRect,r=this.nodes[e]._rect={},l=this.nodes[e].rect,r.width=l.width,r.height=l.height,r.x=l.x,r.y=l.y;return!1}}else a&&(r=a._rect={},l=a.rect,r.width=l.width,r.height=l.height,r.x=l.x,r.y=l.y,a.firstPassed=!0);this.prevAR=a.aspectRatio;this.height=b;this.width=d;this.getNextLogicalDivision=
function(){return{height:q,width:u,x:t,y:s}};return a};return{RowLayout:a}}(),applyShadeFiltering:function(a,b,c){a.setRangeOutEffect(b,c);this.applyShadeFiltering.reset=function(){a.resetPointers()};return function(b){a.moveLowerShadePointer(b.start);a.moveHigherShadePointer(b.end)}},drawTree:function(a,b,d,g){var l=b.chart,e=l.components,k=e.numberFormatter,e=e.toolbarBtns,w=a.areaBaseCalculator(d.horizontalPadding,d.verticalPadding),y=a.layoutManager.RowLayout,v=b.chart.linkedItems.smartLabel,
r=g.drawRect,t=g.drawText,s=g.drawHot,q=c.iterator,u=q(this).bf,z,D=b.conf,E=D.highlightParentsOnHover,C,F=c.context,I=c.mapColorManager(D,b.conf.colorRange),q=c.abstractEventRegisterer.apply(c,arguments),L=q.click,M=q.mouseover,N=q.mouseout,q=l._intSR,G=c.visibilityController,J,H;J=F.getInstance("ClickedState").get("VisibileRoot")||{};(H=J.node)&&J.state&&("drillup"===J.state.toLowerCase()?H instanceof Array?G.controlPreAnimVisibility(H[0].virginNode,H[1]):G.controlPreAnimVisibility(H.virginNode):
G.displayAll(J.node.virginNode));C=c.initConfigurationForlabel({x:5,y:5},D.parentLabelLineHeight,D);for(u=z=u.next(B=c.setMaxDepth(this.getDepth()+f));u.getParent();)u=u.getParent();D.showNavigationBar?(e.home.hide(),e.back.hide()):u!=z?(e.home.show(),e.back.show()):(e.home.hide(),e.back.hide());v.useEllipsesOnOverflow(l.config.useEllipsesWhenOverflow);v.setStyle(D._setStyle={fontSize:(D.labelFontSize||D.baseFontSize)+"px",fontFamily:D.labelFont||D.baseFont,lineHeight:1.2*(D.labelFontSize||D.baseFontSize)+
"px"});l=q.backToParent;q=q.resetTree;e.back&&e.back.attachEventHandlers({click:l.bind(z)});e.home&&e.home.attachEventHandlers({click:q.bind(z)});(function P(a,b){var c,d={},e,f,h,l,m,n,q=0,p,u,G,H;n={};var J;p={};u={};l={};var O="",S,R;if(a){S=k.yAxis(a.getValue());R=k.sYAxis(a.getColorValue());a.setPath();if(c=a.__initRect)d.x=c.x,d.y=c.y,d.width=c.width,d.height=c.height;h=a.textRect||{};c=a.rect=a.__initRect={};l=a.textRect={};c.width=b.width;c.height=b.height;c.x=b.x;c.y=b.y;l=I(a);(G=a.plotItem)&&
g.graphicPool(!0,"plotItem",G,d);G=a.plotItem=r(c,l,d,a.overAttr);a.cssConf=l;J=C(a,c);e=J.conf;n.textMargin=e.rectShiftY;l=a.textRect=e.textRect;H=v.getSmartText(e.label,l.width,l.height).text;(f=a.labelItem)?(e=a.highlightItem,g.graphicPool(!0,"labelItem",f,d),g.graphicPool(!0,"highlightItem",e,d)):h=h||{};h=t(H,l,{textAttrs:J.attr,highlightAttrs:J.highlight},h,a.overAttr);a.labelItem=h.label;a.highlightItem=h.highlightMask;a.plotItem=G;p.virginNode=a;p.plotItem=G;p.textItem=h;p.virginNode.dirtyNode=
p;a.getColorValue()&&(O=D.tooltipSeparationCharacter+R);p.toolText=D.showTooltip?K.parseTooltext(D.plotToolText,[1,2,3,119,122],{label:a.getLabel(),formattedValue:S,formattedsValue:R},{value:a.getValue(),svalue:a.getColorValue()})||a.getLabel()+D.tooltipSeparationCharacter+S+O:$;p.rect=c;u.hover=[function(){var a,b,c;c=F.getInstance("hover");b=this.virginNode;a=E&&!b.next?(a=b.getParent())?a:b:this.virginNode;c.set("element",a);c=a.cssConf;c=V(c.fill&&ia(c.fill,80),60);a.plotItem.tracker.attr({fill:c});
M(this)}.bind(p),function(){var a,b;a=F.getInstance("hover").get("element");b=V(a.cssConf.fill||"#fff",0);a.plotItem.tracker.attr({fill:b});N(this)}.bind(p)];u.tooltip=[p.toolText];u.click=[function(){L(this,z)}.bind(p)];(c=a.hotItem)&&g.graphicPool(!0,"hotItem",c,d);c=a.hotItem=s(p,u);if(m=void 0!==B?a.getDepth()>=B?void 0:a.getChildren():a.getChildren())for(p=w(m,function(a,b){var c,d,e=0,k,f,g=[];c=new y({width:a.effectiveRect.width,height:a.effectiveRect.height,x:a.effectiveRect.x,y:a.effectiveRect.y},
b.getValue());for(d=m.length;e++!==d;)k=m[e-1],f=c.addNode(k),!1===f?(c=c.getNextLogicalDivision(),c=new y(c,b.getValue()-q),e--):(q+=parseFloat(k.getValue(),10),g.push(k));return g},n),d=0,n=p.length;d<n;d++)u=p[d],P(u,u.rect)}})(z,d)}}};d.prototype=Object.create(D.prototype);d.prototype.constructor=D;d.prototype.order=function(a){var b=q[l],c=b.orderNodes;return c?c.apply(a,[b]):a};b.init=function(a,b,d){l=a;u=b;f=c.setMaxDepth(d);return q[l]};b.plotOnCanvas=function(b,c,d){t=a(b,d);return g};b.applyShadeFiltering=
function(a,b){var c,d;d=q[l].applyShadeFiltering(v.getBucket(),a,b);return function(a){c=Array.prototype.slice.call(arguments,0);c.unshift(a);d.apply(v.getBucket(),c)}};b.setTreeBase=function(a){return a&&(t=a)};b.realTimeUpdate=s;b.makeTree=a;return b};Z=function(c,b,d,a){function g(a){var b,d=0;b=c;if(!a.length)return c;for(;b;){b=s.call(b,a[d]);if(d===a.length-1&&b)return q=b.getValue(),b;d+=1}}function s(a){var b,c,d,g=this.getChildren()||[],f=g.length;for(b=0;b<f;b+=1)if(d=g[b],d.label.toLowerCase().trim()===
a.toLowerCase().trim()){c=d;break}return c}var q;return{deleteData:function(a,c){var v=g(a),t=(void 0).iterator(v).df,u=v&&v.getParent(),f=v&&v.getSiblingCount("left"),s=u&&u.getChildren(),h=(void 0).getVisibleRoot();if(v&&u){s.splice(f,1);for(v===h&&(h=v.getParent()||h);v;)d.disposeItems(v),v=t.next();for(;u;)u.setValue(-q,!0),u=u.getParent();c&&b(h)}},addData:function(c,d,q,t){for(var u,f,s,h=0,n=!0,m=(void 0).getVisibleRoot();c.length;)if(u=c.pop(),u=(void 0).makeTree(u,a,!1),h=u.getValue(),f=
g(d||[]))for(f.getChildren()||(s=f.getValue(),n=!1),f.addChildren(u,t);f;)f.setValue(h,n),s&&(h-=s,s=void 0,n=!0),f=f.getParent();q&&b(m)}}};da=function(c,b,d){function a(){}function g(a){var b=t.plotBorderThickness;l.apply(c.getVisibleRoot(),[z,{width:a.effectiveWidth,height:a.effectiveHeight,x:a.startX,y:a.startY,horizontalPadding:t.horizontalPadding,verticalPadding:t.verticalPadding},u]);t.plotBorderThickness=b}function s(a,b,c){var d=a.width,f=a.height,g=t.seperatorAngle/2;a=["M",a.x,a.y];var h=
C(g?f/2*(1-ka(g)):c,15);c=function(a){return{both:["h",d,"v",a,"h",-d,"v",-a],right:["h",d,"v",a,"h",-d,"l",h,-a/2,"l",-h,-a/2],no:["h",d,"l",h,a/2,"l",-h,a/2,"h",-d,"l",h,-a/2,"l",-h,-a/2],left:["h",d,"l",h,a/2,"l",-h,a/2,"h",-d,"v",-a]}};return{path:a.concat(c(f)[b]),_path:a.concat(c(0)[b]),offset:h}}function q(){var a=Array.prototype.splice.call(arguments,0);a.push(!0);h("navigationBar").apply(this,a)}var z,l,v,t,u,f,B=function(a,b){var f,g,h=c.mapColorManager(t,t.colorRange,!0),l=function(){var a;
return{get:function(b,c,d){var e={y:b.startY,height:b.effectiveHeight};c=f[c];var k=c.getParent();e.x=a||(a=b.startX);a=d?a+(e.width=b.effectiveWidth*(c.getValue()/k.getValue())):a+(e.width=b.effectiveWidth/g);return e},resetAllocation:function(){a=void 0}}}(),m=c.initConfigurationForlabel({x:5,y:5},t.parentLabelLineHeight,t),p=u.drawPolyPath,q=u.drawText,C=u.drawHot,B={navigationHistory:{path:"polyPathItem",label:"pathlabelItem",highlightItem:"pathhighlightItem",hotItem:"pathhotItem"}},F=z.chart,
E=F.components.gradientLegend,F=F.linkedItems.smartLabel,I=function(a){return function(){var b=c.context.getInstance("ClickedState").get("VisibileRoot")||{};b.state="drillup";b.node=[{virginNode:c.getVisibleRoot()},a];E&&E.enabled&&E.resetLegend();d.draw([a,a,a])}},M=function(){return function(){}},N=function(){return function(){}},L,K,T,G,J,H,Q=t._setStyle,P;L=n.get().navigationBar;G=2*x("navigationBar");Q=fa(L*v.effectiveHeight-(G+6),Q.fontSize.replace(/\D+/g,""));L=Q+"px";B.stacked={path:"stacked"+
B.navigationHistory.path,label:"stacked"+B.navigationHistory.label,highlightItem:"stacked"+B.navigationHistory.highlightItem,hotItem:"stacked"+B.navigationHistory.hotItem};l.resetAllocation();(function(a){var b=c.getVisibleRoot();f=a?b.getChildren():b.getPath()||[].concat(b);f.pop();g=f.length})(b);F.setStyle({fontSize:L,lineHeight:L});for(L=0;L<g;L+=1)G=f[L],J=l.get(a,L,b),K=(T=s(J,b?"both":1===g?"both":0===L?"left":L<g-1?"no":"right")).offset,G[B[b?"stacked":"navigationHistory"].path]=p(T,h(G,!0,
!0),L),T=m(G,J,!1,!0),H=T.conf,P=H.textRect,P.width-=2*K,P.y=J.y+J.height/2,K=F.getSmartText(H.label,P.width,R(Q,P.height)).text,K=q(K,P,{textAttrs:T.attr,highlightAttrs:T.highlight},{y:J.height/10,"font-size":t._setStyle.fontSize,"font-family":t._setStyle.fontFamily},(b?"stacked":"")+"path"),G[B[b?"stacked":"navigationHistory"].label]=K.label,G[B[b?"stacked":"navigationHistory"].highlightItem]=K.highlightMask,G[B[b?"stacked":"navigationHistory"].hotItem]=C({rect:J},{click:[I(G,b)],hover:[M(G),N()],
tooltip:[t.showTooltip?G.getLabel():$]})},h=function(a){return{treeMap:g,navigationBar:B,stackedNavigation:q}[a]},n=function(){var a={treeMap:1,navigationBar:0,stackedNavigation:0};return{set:function(b){var c=C(t.navigationBarHeightRatio,t.navigationBarHeight/v.effectiveHeight,.15),d=t.labelFontSize?R(t.labelFontSize,t.baseFontSize):t.baseFontSize,f=2*x("navigationBar"),c=R((6+d+f)/v.effectiveHeight,c);.1>c?c=.1:.15<c&&(c=.15);t.navigationBarHeightRatio=c;a=b?{treeMap:1-c,navigationBar:c,stackedNavigation:0}:
{treeMap:1,navigationBar:0,stackedNavigation:0}},get:function(){return a}}}(),m=0,x=function(a){var b=t.plotBorderThickness,c=t.navigationBarBorderThickness;return t.verticalPadding+("navigationBar"===a?c:b)},p=function(a){var b=v.effectiveWidth,c=v.effectiveHeight,d=x(a);a=n.get()[a];1<=m&&(m=0);m+=a;return{effectiveHeight:ea(a*c*100)/100-d,effectiveWidth:b,startX:v.startX,startY:v.startY+d+ea((m-a)*c*100)/100}};a.prototype.constructor=a;a.prototype.init=function(a,b){(this.conf||(this.conf={})).name=
a.name;this.setDrawingArea(a.drawingAreaMeasurement);this.draw=this.draw(b)};a.prototype.setDrawingArea=function(a){this.conf.drawingAreaMeasurement=a};a.prototype.draw=function(a){return function(){var b=this.conf;0<b.drawingAreaMeasurement.effectiveHeight&&a(b.drawingAreaMeasurement)}};a.prototype.eventCallback=function(){};f=function(){var b=[];return{get:function(){return b},set:function(c){var d;c?(d=new a,d.init({name:c.type,drawingAreaMeasurement:c.drawingArea},c.drawFn),b.push(d)):b.length=
0;return b}}}();d.init=function(){var a,b=["navigationBar","treeMap","stackedNavigation"];a=Array.prototype.slice.call(arguments,0);z=a[0];v=a[1];t=z.conf;u=a[2];l=a[4];for(f.get().length>=b.length&&f.set();b.length;)a=b.shift(),f.set({type:a,drawFn:h(a),drawingArea:p(a)})};d.draw=function(a){var b,g,h;b=c.getVisibleRoot();u.disposeChild(b);a&&(b=a[1]);b.getParent()?t.showNavigationBar&&d.heightProportion.set(!0):d.heightProportion.set(!1);g=f.get();for(b=0;b<g.length;b+=1)h=g[b],h.setDrawingArea(p(h.conf.name)),
a&&c.setVisibleRoot(a[b]),h.draw()};d.heightProportion=n;d.remove=function(){var a=c.getVisibleRoot();a&&u.disposeChild(a)};return d}}]);
