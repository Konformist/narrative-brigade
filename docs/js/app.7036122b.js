(function(){"use strict";var e={6003:function(e,n,t){var r=t(9242),c=t(3766),o=t(3396);const i={style:{padding:"4px",background:"#c9c9c9"}};function a(e,n,t,r,c,a){const s=(0,o.up)("ScreenStart"),u=(0,o.up)("ScreenScene"),l=(0,o.up)("ScreenEnd");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",i,[(0,o._)("button",{onClick:n[0]||(n[0]=n=>e.mainStore.nextScreen())}," To start ")]),"start"===e.mainStore.screen?((0,o.wg)(),(0,o.j4)(s,{key:0,style:{"flex-grow":"1"}})):"scene"===e.mainStore.screen?((0,o.wg)(),(0,o.j4)(u,{key:1,style:{"flex-grow":"1"}})):"end"===e.mainStore.screen?((0,o.wg)(),(0,o.j4)(l,{key:2,style:{"flex-grow":"1"}})):(0,o.kq)("",!0)],64)}const s=(0,c.Q_)("main",{state:()=>({screen:"start",scene:"start",player:{name:""}}),actions:{nextScreen(e="start"){this.screen=e}}}),u={style:{background:"#a016e8",display:"flex"}},l=(0,o._)("div",{style:{margin:"auto"}}," THE END ",-1),d=[l];function f(e,n,t,r,c,i){return(0,o.wg)(),(0,o.iD)("div",u,d)}var v={name:"ScreenEnd",computed:{...(0,c.Kc)(s)},created(){this.mainStore.scene="start"}},p=t(89);const g=(0,p.Z)(v,[["render",f]]);var m=g,S=t(7139);const x={class:"scene-block"},b=["onClick"];function k(e,n,t,r,c,i){return(0,o.wg)(),(0,o.iD)("div",{class:"scene",style:(0,S.j5)({background:i.currentScene.background})},[(0,o._)("div",x,[(0,o._)("div",null,(0,S.zw)(i.currentScene.text),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.currentScene.actions,((e,n)=>((0,o.wg)(),(0,o.iD)("div",{key:n,class:"scene-action",onClick:n=>i.onClick(e)},(0,S.zw)(e.text),9,b)))),128))])],4)}var y={start:{background:"#76c758",text:"Вперёд!",actions:[{scene:"1",text:"Начать"}]},1:{background:"#76c758",text:"Вы быстро идете вперед и вскоре оказываетесь в лесу. Даже странно, что о нем рассказывают столько страшных и невероятных историй: таинственный, зачарованный, с множеством ловушек и опасностей. Но все тихо и спокойно, высокие и могучие деревья справа и слева пропускают много солнечного света, дорога прямая и ровная, и вы расслабляетесь. Веселое щебетание птиц убеждает в том, что поблизости нет никакой опасности. Примерно через три четверти часа вы доходите до развилки. Путь раздваивается. Теперь вам надо принять первое решение — какую дорогу выбрать. Вы пойдете:",actions:[{scene:"86",text:"По правой дороге"},{scene:"110",text:"По левой дороге"}]},86:{background:"#76c758",text:"Дорога широка и удобна. По ней ходят явно чаще, чем по той, что отходила влево. Следы копыт в пыли говорят о том, что совсем недавно по ней проезжали всадники, и вы уже жалеете, что поверили сказкам об ужасах Зачарованного леса и не пустились в путь верхом. Вот и развилка: наезженная дорога немного поворачивает влево и скрывается в лесу, другая, поуже, по которой явно меньше ходят и ездят, отходит от нее направо. Куда вы пойдете?",actions:[{scene:"616",text:"Налево?"},{scene:"617",text:"Направо?"}]},110:{background:"#76c758",text:"Не успевает развилка скрыться за деревьями, как шум впереди заставляет вас насторожиться. Вы медленно идете вперед, пока не видите человека в грязной и потрепанной одежде, лежащего на краю дороги. Все выдает в нем разбойника: и богатый расшитый пояс, которым подвязаны лохмотья, и сломанная кривая сабля, которая валяется неподалеку. На оружии и вокруг него — пятна крови. Явно незадолго до вашего появления здесь разыгралась битва не на жизнь, а на смерть, и тот, кто перед вами, не вышел из нее победителем. Лежащий человек тяжело ранен, с первого взгляда видно, что он умирает. Увидев вас, он с трудом приподнимается и зовет: «Путник, подойди, кто бы ты ни был. Я несчастный торговец, на меня напали разбойники, ограбили до нитки и бросили здесь умирать. Подойди, помоги мне!» Вы понимаете, что человек вряд ли говорит правду. Скорее всего, он что-то не поделил со своими собратьями, и те нанесли ему несколько настолько страшных ран, что даже лохмотья не могут скрыть их. Что вы сделаете? Дорога широка и удобна. По ней ходят явно чаще, чем по той, что отходила влево. Следы копыт в пыли говорят о том, что совсем недавно по ней проезжали всадники, и вы уже жалеете, что поверили сказкам об ужасах Зачарованного леса и не пустились в путь верхом. Вот и развилка: наезженная дорога немного поворачивает влево и скрывается в лесу, другая, поуже, по которой явно меньше ходят и ездят, отходит от нее направо. Куда вы пойдете?",actions:[{scene:"1",text:"Подойдете к нему и выясните, что ему надо?"},{scene:"616",text:"Оставите умирать и пойдете дальше и пойдете дальше?"}]},616:{background:"#76c758",text:"Дорога приводит на прекрасный маленький луг посреди леса. Вы даже и не думали, что в лесу может встретиться такое красивое и спокойное место. Мягкая трава так и манит прилечь и отдохнуть, тем более что вы сильно устали. К тому же вас клонит ко сну. Не в силах сопротивляться, вы решаете поспать часок-другой и ложитесь на траву. Но вам не повезло: вы попали на луг, на котором растет сон-трава. Она уже не выпустит, а Король так и не дождется вашего возвращения…",actions:[{screen:"end",text:"Конец"}]},617:{background:"#76c758",text:"Итак, путешествие подошло к концу. Вы выполнили обещание: Барлад Дэрт погиб от вашей руки, Принцесса свободна. Узнав о том, что их властелина более не существует, Зеленые рыцари, Гоблины, Орки, слуги и прочая нечисть торопятся как можно скорее покинуть замок: они понимают, что этому творению черной магии долго не простоять. Коридоры замка быстро пустеют, и вы в безопасности выводите Принцессу наружу. Ворота распахнуты, стража оставила их. И вот уже страшная и угрюмая цитадель позади. Из-за леса показалось восходящее солнце, и с его первыми лучами Черный замок рушится, как карточный домик, и проваливается в разверзшуюся землю. Лес светлеет, и вы понимаете, что злые чары покинули его. Теперь дорога через лес займет немного времени, и вскоре вы уже будете во дворце. После этого сможете оставить сказочное королевство, но у вас всегда будет возможность вернуться туда вновь, чтобы стать героем совсем другой истории…",actions:[{screen:"end",text:"Конец"}]}},w={name:"ScreenScene",computed:{...(0,c.Kc)(s),currentScene(){return y[this.mainStore.scene]}},methods:{onClick(e){"scene"in e&&(this.mainStore.scene=e.scene),"screen"in e&&(this.mainStore.screen=e.screen)}}};const h=(0,p.Z)(w,[["render",k],["__scopeId","data-v-f028e296"]]);var _=h;const O={style:{background:"antiquewhite",display:"flex"}},j={style:{margin:"auto"}},C=(0,o._)("div",null," Your name ",-1);function D(e,n,t,c,i,a){return(0,o.wg)(),(0,o.iD)("div",O,[(0,o._)("div",j,[(0,o._)("div",null,[(0,o._)("label",null,[C,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":n[0]||(n[0]=n=>e.mainStore.player.name=n)},null,512),[[r.nr,e.mainStore.player.name]])])]),(0,o._)("div",null,[(0,o._)("button",{style:{width:"100%","margin-top":"4px"},onClick:n[1]||(n[1]=n=>e.mainStore.nextScreen("scene"))}," Start ")])])])}var E={name:"ScreenStart",computed:{...(0,c.Kc)(s)}};const K=(0,p.Z)(E,[["render",D]]);var T=K,Z={name:"App",components:{ScreenEnd:m,ScreenScene:_,ScreenStart:T},computed:{...(0,c.Kc)(s)}};const H=(0,p.Z)(Z,[["render",a]]);var Y=H;const q=(0,c.WB)(),z=(0,r.ri)(Y);z.use(q),z.mount("#app")}},n={};function t(r){var c=n[r];if(void 0!==c)return c.exports;var o=n[r]={exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,r,c,o){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],c=e[l][1],o=e[l][2];for(var a=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(t.O).every((function(e){return t.O[e](r[s])}))?r.splice(s--,1):(a=!1,o<i&&(i=o));if(a){e.splice(l--,1);var u=c();void 0!==u&&(n=u)}}return n}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,c,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var c,o,i=r[0],a=r[1],s=r[2],u=0;if(i.some((function(n){return 0!==e[n]}))){for(c in a)t.o(a,c)&&(t.m[c]=a[c]);if(s)var l=s(t)}for(n&&n(r);u<i.length;u++)o=i[u],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(l)},r=self["webpackChunknarrative_brigade"]=self["webpackChunknarrative_brigade"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(6003)}));r=t.O(r)})();
//# sourceMappingURL=app.7036122b.js.map