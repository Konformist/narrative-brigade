(function(){"use strict";var e={7409:function(e,n,t){var s=t(9242),c=t(3766),a=t(3396);function r(e,n,t,s,c,r){const o=(0,a.up)("ScreenLoading"),i=(0,a.up)("ScreenStart"),d=(0,a.up)("ScreenSettings"),l=(0,a.up)("ScreenSaved"),u=(0,a.up)("ScreenSave"),v=(0,a.up)("ScreenHelp"),m=(0,a.up)("ScreenAbout"),p=(0,a.up)("ScreenSpecials"),b=(0,a.up)("ScreenScene"),S=(0,a.up)("ScreenCredits");return"loading"===e.mainStore.screen?((0,a.wg)(),(0,a.j4)(o,{key:0})):"start"===e.mainStore.screen?((0,a.wg)(),(0,a.j4)(i,{key:1})):"settings"===e.mainStore.screen?((0,a.wg)(),(0,a.j4)(d,{key:2})):"saved"===e.mainStore.screen?((0,a.wg)(),(0,a.j4)(l,{key:3})):"save"===e.mainStore.screen?((0,a.wg)(),(0,a.j4)(u,{key:4})):"help"===e.mainStore.screen?((0,a.wg)(),(0,a.j4)(v,{key:5})):"about"===e.mainStore.screen?((0,a.wg)(),(0,a.j4)(m,{key:6})):"specials"===e.mainStore.screen?((0,a.wg)(),(0,a.j4)(p,{key:7})):"scene"===e.mainStore.screen?((0,a.wg)(),(0,a.j4)(b,{key:8})):"credits"===e.mainStore.screen?((0,a.wg)(),(0,a.j4)(S,{key:9})):(0,a.kq)("",!0)}const o=e=>((0,a.dD)("data-v-57f50eec"),e=e(),(0,a.Cn)(),e),i={class:"screen-start nb-flex nb-flex-center"},d={class:"screen-start-menu"},l=o((()=>(0,a._)("div",{class:"screen-start-menu--caption"}," About ",-1))),u=o((()=>(0,a._)("div",null," HELP ME!!! I'M IN JAIL!!! ",-1)));function v(e,n,t,s,c,r){return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",d,[l,u,(0,a._)("button",{class:"nb-wp-100 nb-mt-4",onClick:n[0]||(n[0]=n=>e.mainStore.screen="start")}," Back ")])])}const m=(0,c.Q_)("main",{state:()=>({screen:"loading",scene:"start",player:{name:""},settings:{sound:50}})});var p={name:"ScreenAbout",computed:{...(0,c.Kc)(m)}},b=t(89);const S=(0,b.Z)(p,[["render",v],["__scopeId","data-v-57f50eec"]]);var _=S;const f=e=>((0,a.dD)("data-v-1e8771ad"),e=e(),(0,a.Cn)(),e),g={class:"screen-start nb-flex nb-flex-center"},w=f((()=>(0,a._)("div",{class:"screen-start-menu"},[(0,a._)("div",{class:"screen-start-menu--caption"}," Credits "),(0,a._)("div",null," This is credits ")],-1))),k=[w];function x(e,n,t,s,c,r){return(0,a.wg)(),(0,a.iD)("div",g,k)}var C={name:"ScreenCredits",computed:{...(0,c.Kc)(m)},created(){setTimeout((()=>{this.mainStore.scene="start",this.mainStore.screen="start"}),5e3)}};const y=(0,b.Z)(C,[["render",x],["__scopeId","data-v-1e8771ad"]]);var h=y;const M=e=>((0,a.dD)("data-v-bd803f28"),e=e(),(0,a.Cn)(),e),D={class:"screen-start nb-flex nb-flex-center"},I={class:"screen-start-menu"},j=M((()=>(0,a._)("div",{class:"screen-start-menu--caption"}," Help ",-1))),Z=M((()=>(0,a._)("div",null," HELP ME!!! I'M IN JAIL!!! ",-1)));function K(e,n,t,s,c,r){return(0,a.wg)(),(0,a.iD)("div",D,[(0,a._)("div",I,[j,Z,(0,a._)("button",{class:"nb-wp-100 nb-mt-4",onClick:n[0]||(n[0]=n=>e.mainStore.screen="start")}," Back ")])])}var L={name:"ScreenHelp",computed:{...(0,c.Kc)(m)}};const N=(0,b.Z)(L,[["render",K],["__scopeId","data-v-bd803f28"]]);var O=N;const A=e=>((0,a.dD)("data-v-1e3856a0"),e=e(),(0,a.Cn)(),e),H={class:"screen-start nb-flex nb-flex-center"},B={class:"screen-start-menu"},$=A((()=>(0,a._)("div",{class:"screen-start-menu--caption"}," Specials ",-1))),z=A((()=>(0,a._)("div",null," WTF??? ",-1)));function E(e,n,t,s,c,r){return(0,a.wg)(),(0,a.iD)("div",H,[(0,a._)("div",B,[$,z,(0,a._)("button",{class:"nb-wp-100 nb-mt-4",onClick:n[0]||(n[0]=n=>e.mainStore.screen="start")}," Back ")])])}var T={name:"ScreenSpecials",computed:{...(0,c.Kc)(m)}};const q=(0,b.Z)(T,[["render",E],["__scopeId","data-v-1e3856a0"]]);var P=q;const W={class:"screen-start nb-flex nb-flex-center"},F={class:"screen-start-menu"},J=(0,a.uE)('<div class="screen-start-menu--caption" data-v-5df772ed> Save game </div><button class="nb-wp-100" data-v-5df772ed> New save </button><div class="list nb-mt-4" data-v-5df772ed><div class="nb-flex" data-v-5df772ed><div data-v-5df772ed> 1. </div><div style="flex-grow:1;padding:0 4px;" data-v-5df772ed> Saved game </div><button data-v-5df772ed> Save </button></div></div>',3);function G(e,n,t,s,c,r){return(0,a.wg)(),(0,a.iD)("div",W,[(0,a._)("div",F,[J,(0,a._)("button",{class:"nb-wp-100 nb-mt-4",onClick:n[0]||(n[0]=n=>e.mainStore.screen="start")}," Back ")])])}var Q={name:"ScreenSave",computed:{...(0,c.Kc)(m)}};const R=(0,b.Z)(Q,[["render",G],["__scopeId","data-v-5df772ed"]]);var U=R;const V=e=>((0,a.dD)("data-v-542e4842"),e=e(),(0,a.Cn)(),e),Y={class:"screen-start nb-flex nb-flex-center"},X={class:"screen-start-menu"},ee=V((()=>(0,a._)("div",{class:"screen-start-menu--caption"}," Load game ",-1))),ne=V((()=>(0,a._)("div",{class:"list"},[(0,a._)("div",{class:"nb-flex"},[(0,a._)("div",null," 1. "),(0,a._)("div",{style:{"flex-grow":"1",padding:"0 4px"}}," Saved game "),(0,a._)("button",null," x ")])],-1)));function te(e,n,t,s,c,r){return(0,a.wg)(),(0,a.iD)("div",Y,[(0,a._)("div",X,[ee,ne,(0,a._)("button",{class:"nb-wp-100 nb-mt-4",onClick:n[0]||(n[0]=n=>e.mainStore.screen="start")}," Back ")])])}var se={name:"ScreenSaved",computed:{...(0,c.Kc)(m)}};const ce=(0,b.Z)(se,[["render",te],["__scopeId","data-v-542e4842"]]);var ae=ce;const re=e=>((0,a.dD)("data-v-32104843"),e=e(),(0,a.Cn)(),e),oe={class:"screen-start nb-flex nb-flex-center"},ie={class:"screen-start-menu"},de=re((()=>(0,a._)("div",{class:"screen-start-menu--caption"}," Settings ",-1))),le=re((()=>(0,a._)("div",null," Sound ",-1))),ue={class:"nb-flex nb-mt-4"},ve=re((()=>(0,a._)("button",{class:"nb-wp-100 nb-mt-4"}," Reset game ",-1)));function me(e,n,t,c,r,o){return(0,a.wg)(),(0,a.iD)("div",oe,[(0,a._)("div",ie,[de,le,(0,a._)("div",ue,[(0,a._)("button",{onClick:n[0]||(n[0]=n=>e.mainStore.settings.sound=o.normalize(e.mainStore.settings.sound-5,100,0))}," - "),(0,a.wy)((0,a._)("input",{style:{"flex-grow":"1"},type:"range",max:100,min:0,step:1,"onUpdate:modelValue":n[1]||(n[1]=n=>e.mainStore.settings.sound=n)},null,512),[[s.nr,e.mainStore.settings.sound,void 0,{number:!0}]]),(0,a._)("button",{onClick:n[2]||(n[2]=n=>e.mainStore.settings.sound=o.normalize(e.mainStore.settings.sound+5,100,0))}," + ")]),ve,(0,a._)("button",{class:"nb-wp-100 nb-mt-4",onClick:n[3]||(n[3]=n=>e.mainStore.screen="start")}," Back ")])])}var pe={name:"ScreenSettings",computed:{...(0,c.Kc)(m)},methods:{normalize(e,n,t){return e>n?n:e<t?t:e}}};const be=(0,b.Z)(pe,[["render",me],["__scopeId","data-v-32104843"]]);var Se=be;const _e={class:"nb-flex nb-flex-center",style:{width:"100%",height:"100%"}};function fe(e,n,t,s,c,r){return(0,a.wg)(),(0,a.iD)("div",_e," Loading... ")}var ge={name:"ScreenLoading"};const we=(0,b.Z)(ge,[["render",fe]]);var ke=we,xe=t(7139);const Ce=e=>((0,a.dD)("data-v-6d0ac720"),e=e(),(0,a.Cn)(),e),ye=Ce((()=>(0,a._)("span",null,[(0,a._)("span"),(0,a._)("span"),(0,a._)("span")],-1))),he=[ye],Me=Ce((()=>(0,a._)("div",{class:"screen-scene-image"},null,-1))),De={class:"screen-scene-block"},Ie=["onClick"];function je(e,n,t,s,c,r){const o=(0,a.up)("ModalMenu"),i=(0,a.up)("ModalInventory"),d=(0,a.up)("ModalScene");return(0,a.wg)(),(0,a.iD)("div",{class:(0,xe.C_)(["screen-scene",r.position])},[(0,a._)("button",{class:"screen-scene-buttons screen-scene-buttons--inventory",onClick:n[0]||(n[0]=e=>c.modalInventory=!0)}," i "),(0,a._)("button",{class:"screen-scene-buttons screen-scene-buttons--menu",onClick:n[1]||(n[1]=e=>c.modalMenu=!0)},he),Me,(0,a._)("div",De,[(0,a._)("div",null,(0,xe.zw)(r.currentScene.text),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.currentScene.actions,((e,n)=>((0,a.wg)(),(0,a.iD)("div",{key:n,class:"screen-scene-action",onClick:n=>r.onClick(e)},(0,xe.zw)(e.text),9,Ie)))),128))]),c.modalMenu?((0,a.wg)(),(0,a.j4)(o,{key:0,onClose:n[2]||(n[2]=e=>c.modalMenu=!1)})):(0,a.kq)("",!0),c.modalInventory?((0,a.wg)(),(0,a.j4)(i,{key:1,onClose:n[3]||(n[3]=e=>c.modalInventory=!1)})):(0,a.kq)("",!0),c.modalScene?((0,a.wg)(),(0,a.j4)(d,{key:2,onClose:n[4]||(n[4]=e=>c.modalScene=!1)})):(0,a.kq)("",!0)],2)}const Ze=e=>((0,a.dD)("data-v-e55bf8d8"),e=e(),(0,a.Cn)(),e),Ke=Ze((()=>(0,a._)("div",{class:"container",style:{padding:"16px"}},[(0,a._)("div",{class:"card"},[(0,a._)("div",{class:"card-image"}),(0,a._)("div",{class:"card-info"}," Description ")]),(0,a._)("div",{class:"card"},[(0,a._)("div",{class:"card-image"}),(0,a._)("div",{class:"card-info"}," Description ")]),(0,a._)("div",{class:"card"},[(0,a._)("div",{class:"card-image"}),(0,a._)("div",{class:"card-info"}," Description ")]),(0,a._)("div",{class:"card"},[(0,a._)("div",{class:"card-image"}),(0,a._)("div",{class:"card-info"}," Description ")]),(0,a._)("div",{class:"card"},[(0,a._)("div",{class:"card-image"}),(0,a._)("div",{class:"card-info"}," Description ")])],-1)));function Le(e,n,t,s,c,r){const o=(0,a.up)("NbModal");return(0,a.wg)(),(0,a.j4)(o,{caption:"Inventory",onClose:n[0]||(n[0]=n=>e.$emit("close"))},{default:(0,a.w5)((()=>[Ke])),_:1})}const Ne={class:"modal-container"},Oe={class:"nb-flex nb-flex-center"},Ae={style:{"flex-grow":"1","margin-right":"8px"}},He={class:"modal-block"};function Be(e,n,t,c,r,o){return(0,a.wg)(),(0,a.iD)("div",{class:"modal nb-flex nb-flex-center",onClick:n[1]||(n[1]=(0,s.iM)((n=>e.$emit("close")),["self"]))},[(0,a._)("div",Ne,[(0,a._)("div",Oe,[(0,a._)("div",Ae,(0,xe.zw)(t.caption),1),(0,a._)("button",{class:"modal-button",onClick:n[0]||(n[0]=n=>e.$emit("close"))}," x ")]),(0,a._)("div",He,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])])])}var $e={name:"NbModal",props:{caption:{type:String,default:""}}};const ze=(0,b.Z)($e,[["render",Be],["__scopeId","data-v-c94ba952"]]);var Ee=ze,Te={name:"ModalInventory",components:{NbModal:Ee}};const qe=(0,b.Z)(Te,[["render",Le],["__scopeId","data-v-e55bf8d8"]]);var Pe=qe;const We={style:{width:"250px",padding:"16px"}};function Fe(e,n,t,s,c,r){const o=(0,a.up)("NbModal");return(0,a.wg)(),(0,a.j4)(o,{caption:"Menu",onClose:n[6]||(n[6]=n=>e.$emit("close"))},{default:(0,a.w5)((()=>[(0,a._)("div",We,[(0,a._)("button",{class:"nb-wp-100",onClick:n[0]||(n[0]=n=>e.$emit("close"))}," Continue "),(0,a._)("button",{class:"nb-wp-100 nb-mt-4",onClick:n[1]||(n[1]=n=>e.mainStore.screen="saved")}," Load "),(0,a._)("button",{class:"nb-wp-100 nb-mt-4",onClick:n[2]||(n[2]=n=>e.mainStore.screen="save")}," Save "),(0,a._)("button",{class:"nb-wp-100 nb-mt-4",onClick:n[3]||(n[3]=n=>e.mainStore.screen="help")}," Help "),(0,a._)("button",{class:"nb-wp-100 nb-mt-4",onClick:n[4]||(n[4]=n=>e.mainStore.screen="settings")}," Settings "),(0,a._)("button",{class:"nb-wp-100 nb-mt-4",onClick:n[5]||(n[5]=n=>e.mainStore.screen="start")}," General menu ")])])),_:1})}var Je={name:"ModalMenu",components:{NbModal:Ee},computed:{...(0,c.Kc)(m)}};const Ge=(0,b.Z)(Je,[["render",Fe]]);var Qe=Ge;const Re=e=>((0,a.dD)("data-v-456940ce"),e=e(),(0,a.Cn)(),e),Ue=Re((()=>(0,a._)("div",{style:{width:"600px",padding:"16px"}},[(0,a._)("div",null," Discription "),(0,a._)("div",{class:"modal-scene-action"}," Action ")],-1)));function Ve(e,n,t,s,c,r){const o=(0,a.up)("NbModal");return(0,a.wg)(),(0,a.j4)(o,{caption:"Micro scene",onClose:n[0]||(n[0]=n=>e.$emit("close"))},{default:(0,a.w5)((()=>[Ue])),_:1})}var Ye={name:"ModalScene",components:{NbModal:Ee}};const Xe=(0,b.Z)(Ye,[["render",Ve],["__scopeId","data-v-456940ce"]]);var en=Xe,nn={start:{background:"#76c758",text:"Вперёд!",position:5,actions:[{scene:"1",text:"Начать"}]},1:{background:"#76c758",position:1,text:"Вы быстро идете вперед и вскоре оказываетесь в лесу. Даже странно, что о нем рассказывают столько страшных и невероятных историй: таинственный, зачарованный, с множеством ловушек и опасностей. Но все тихо и спокойно, высокие и могучие деревья справа и слева пропускают много солнечного света, дорога прямая и ровная, и вы расслабляетесь. Веселое щебетание птиц убеждает в том, что поблизости нет никакой опасности. Примерно через три четверти часа вы доходите до развилки. Путь раздваивается. Теперь вам надо принять первое решение — какую дорогу выбрать. Вы пойдете:",actions:[{scene:"86",text:"По правой дороге"},{scene:"110",text:"По левой дороге"},{microScene:"110",text:"Микросцена"}]},86:{background:"#76c758",text:"Дорога широка и удобна. По ней ходят явно чаще, чем по той, что отходила влево. Следы копыт в пыли говорят о том, что совсем недавно по ней проезжали всадники, и вы уже жалеете, что поверили сказкам об ужасах Зачарованного леса и не пустились в путь верхом. Вот и развилка: наезженная дорога немного поворачивает влево и скрывается в лесу, другая, поуже, по которой явно меньше ходят и ездят, отходит от нее направо. Куда вы пойдете?",position:2,actions:[{scene:"616",text:"Налево?"},{scene:"617",text:"Направо?"}]},110:{background:"#76c758",text:"Не успевает развилка скрыться за деревьями, как шум впереди заставляет вас насторожиться. Вы медленно идете вперед, пока не видите человека в грязной и потрепанной одежде, лежащего на краю дороги. Все выдает в нем разбойника: и богатый расшитый пояс, которым подвязаны лохмотья, и сломанная кривая сабля, которая валяется неподалеку. На оружии и вокруг него — пятна крови. Явно незадолго до вашего появления здесь разыгралась битва не на жизнь, а на смерть, и тот, кто перед вами, не вышел из нее победителем. Лежащий человек тяжело ранен, с первого взгляда видно, что он умирает. Увидев вас, он с трудом приподнимается и зовет: «Путник, подойди, кто бы ты ни был. Я несчастный торговец, на меня напали разбойники, ограбили до нитки и бросили здесь умирать. Подойди, помоги мне!» Вы понимаете, что человек вряд ли говорит правду. Скорее всего, он что-то не поделил со своими собратьями, и те нанесли ему несколько настолько страшных ран, что даже лохмотья не могут скрыть их. Что вы сделаете? Дорога широка и удобна. По ней ходят явно чаще, чем по той, что отходила влево. Следы копыт в пыли говорят о том, что совсем недавно по ней проезжали всадники, и вы уже жалеете, что поверили сказкам об ужасах Зачарованного леса и не пустились в путь верхом. Вот и развилка: наезженная дорога немного поворачивает влево и скрывается в лесу, другая, поуже, по которой явно меньше ходят и ездят, отходит от нее направо. Куда вы пойдете?",position:3,actions:[{scene:"1",text:"Подойдете к нему и выясните, что ему надо?"},{scene:"616",text:"Оставите умирать и пойдете дальше и пойдете дальше?"}]},616:{background:"#76c758",text:"Дорога приводит на прекрасный маленький луг посреди леса. Вы даже и не думали, что в лесу может встретиться такое красивое и спокойное место. Мягкая трава так и манит прилечь и отдохнуть, тем более что вы сильно устали. К тому же вас клонит ко сну. Не в силах сопротивляться, вы решаете поспать часок-другой и ложитесь на траву. Но вам не повезло: вы попали на луг, на котором растет сон-трава. Она уже не выпустит, а Король так и не дождется вашего возвращения…",position:4,actions:[{screen:"credits",text:"Конец"}]},617:{background:"#76c758",text:"Итак, путешествие подошло к концу. Вы выполнили обещание: Барлад Дэрт погиб от вашей руки, Принцесса свободна. Узнав о том, что их властелина более не существует, Зеленые рыцари, Гоблины, Орки, слуги и прочая нечисть торопятся как можно скорее покинуть замок: они понимают, что этому творению черной магии долго не простоять. Коридоры замка быстро пустеют, и вы в безопасности выводите Принцессу наружу. Ворота распахнуты, стража оставила их. И вот уже страшная и угрюмая цитадель позади. Из-за леса показалось восходящее солнце, и с его первыми лучами Черный замок рушится, как карточный домик, и проваливается в разверзшуюся землю. Лес светлеет, и вы понимаете, что злые чары покинули его. Теперь дорога через лес займет немного времени, и вскоре вы уже будете во дворце. После этого сможете оставить сказочное королевство, но у вас всегда будет возможность вернуться туда вновь, чтобы стать героем совсем другой истории…",position:5,actions:[{screen:"credits",text:"Конец"}]}},tn={name:"ScreenScene",components:{ModalScene:en,ModalInventory:Pe,ModalMenu:Qe},data(){return{modalMenu:!1,modalInventory:!1,modalScene:!1,microScene:null}},computed:{...(0,c.Kc)(m),currentScene(){return nn[this.mainStore.scene]},currentMicroScene(){return nn[this.microScene]},position(){return`screen-scene-position-${this.currentScene.position}`}},methods:{onClick(e){"scene"in e&&(this.mainStore.scene=e.scene),"screen"in e&&(this.mainStore.screen=e.screen),"microScene"in e&&(this.microScene=e.microScene,this.modalScene=!0)}}};const sn=(0,b.Z)(tn,[["render",je],["__scopeId","data-v-6d0ac720"]]);var cn=sn;const an=e=>((0,a.dD)("data-v-7d59d7fe"),e=e(),(0,a.Cn)(),e),rn={class:"screen-start nb-flex nb-flex-center"},on=an((()=>(0,a._)("div",{class:"screen-start-name",style:{"margin-bottom":"40px"}}," Narrative Brigade ",-1))),dn={class:"screen-start-menu"},ln=an((()=>(0,a._)("div",{class:"screen-start-menu--caption"}," Menu ",-1)));function un(e,n,t,s,c,r){return(0,a.wg)(),(0,a.iD)("div",rn,[on,(0,a._)("div",dn,[ln,(0,a._)("button",{class:"nb-wp-100",onClick:n[0]||(n[0]=n=>e.mainStore.screen="scene")}," Start "),(0,a._)("button",{class:"nb-wp-100 nb-mt-4",onClick:n[1]||(n[1]=n=>e.mainStore.screen="saved")}," Load "),(0,a._)("button",{class:"nb-wp-100 nb-mt-4",onClick:n[2]||(n[2]=n=>e.mainStore.screen="settings")}," Settings "),(0,a._)("button",{class:"nb-wp-100 nb-mt-4",onClick:n[3]||(n[3]=n=>e.mainStore.screen="help")}," Help "),(0,a._)("button",{class:"nb-wp-100 nb-mt-4",onClick:n[4]||(n[4]=n=>e.mainStore.screen="about")}," About "),(0,a._)("button",{class:"nb-wp-100 nb-mt-4",onClick:n[5]||(n[5]=n=>e.mainStore.screen="specials")}," Specials ")])])}var vn={name:"ScreenStart",computed:{...(0,c.Kc)(m)}};const mn=(0,b.Z)(vn,[["render",un],["__scopeId","data-v-7d59d7fe"]]);var pn=mn,bn={name:"App",components:{ScreenCredits:h,ScreenSpecials:P,ScreenAbout:_,ScreenHelp:O,ScreenSave:U,ScreenSaved:ae,ScreenSettings:Se,ScreenLoading:ke,ScreenScene:cn,ScreenStart:pn},computed:{...(0,c.Kc)(m)},created(){setTimeout((()=>{this.mainStore.screen="start"}),1e3)}};const Sn=(0,b.Z)(bn,[["render",r]]);var _n=Sn;const fn=(0,c.WB)(),gn=(0,s.ri)(_n);gn.use(fn),gn.mount("#app")}},n={};function t(s){var c=n[s];if(void 0!==c)return c.exports;var a=n[s]={exports:{}};return e[s](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,s,c,a){if(!s){var r=1/0;for(l=0;l<e.length;l++){s=e[l][0],c=e[l][1],a=e[l][2];for(var o=!0,i=0;i<s.length;i++)(!1&a||r>=a)&&Object.keys(t.O).every((function(e){return t.O[e](s[i])}))?s.splice(i--,1):(o=!1,a<r&&(r=a));if(o){e.splice(l--,1);var d=c();void 0!==d&&(n=d)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[s,c,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var s in n)t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,s){var c,a,r=s[0],o=s[1],i=s[2],d=0;if(r.some((function(n){return 0!==e[n]}))){for(c in o)t.o(o,c)&&(t.m[c]=o[c]);if(i)var l=i(t)}for(n&&n(s);d<r.length;d++)a=r[d],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},s=self["webpackChunknarrative_brigade"]=self["webpackChunknarrative_brigade"]||[];s.forEach(n.bind(null,0)),s.push=n.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(7409)}));s=t.O(s)})();
//# sourceMappingURL=app.a8c3b15b.js.map