(window.webpackJsonp=window.webpackJsonp||[]).push([[11,9],{258:function(e,t,n){"use strict";var r=n(10),o=n(5),l=n(3),C=n(106),d=n(15),c=n(11),f=n(184),h=n(33),v=n(74),m=n(183),L=n(4),w=n(75).f,_=n(26).f,x=n(14).f,y=n(259),N=n(260).trim,k="Number",M=o.Number,V=M.prototype,I=o.TypeError,E=l("".slice),Z=l("".charCodeAt),O=function(e){var t=m(e,"number");return"bigint"==typeof t?t:F(t)},F=function(e){var t,n,r,o,l,C,d,code,c=m(e,"number");if(v(c))throw I("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=N(c),43===(t=Z(c,0))||45===t){if(88===(n=Z(c,2))||120===n)return NaN}else if(48===t){switch(Z(c,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+c}for(C=(l=E(c,2)).length,d=0;d<C;d++)if((code=Z(l,d))<48||code>o)return NaN;return parseInt(l,r)}return+c};if(C(k,!M(" 0o1")||!M("0b1")||M("+0x1"))){for(var T,A=function(e){var t=arguments.length<1?0:M(O(e)),n=this;return h(V,n)&&L((function(){y(n)}))?f(Object(t),n,A):t},S=r?w(M):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),H=0;S.length>H;H++)c(M,T=S[H])&&!c(A,T)&&x(A,T,_(M,T));A.prototype=V,V.constructor=A,d(o,k,A,{constructor:!0})}},259:function(e,t,n){var r=n(3);e.exports=r(1..valueOf)},260:function(e,t,n){var r=n(3),o=n(22),l=n(13),C=n(261),d=r("".replace),c="["+C+"]",f=RegExp("^"+c+c+"*"),h=RegExp(c+c+"*$"),v=function(e){return function(t){var n=l(o(t));return 1&e&&(n=d(n,f,"")),2&e&&(n=d(n,h,"")),n}};e.exports={start:v(1),end:v(2),trim:v(3)}},261:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},262:function(e,t,n){var content=n(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(73).default)("496c8b94",content,!0,{sourceMap:!1})},264:function(e,t,n){"use strict";n(262)},265:function(e,t,n){var r=n(72)(!1);r.push([e.i,'.collapse{display:inline-flex;align-items:center;justify-content:center;background:rgba(0,0,0,.2);border:.15rem solid rgba(0,0,0,.2);border-radius:.5rem;height:3.8rem;min-width:6.3rem;cursor:pointer;padding:0 2.4rem;position:relative;transition:all .4s}.collapse:hover .collapse-head-title{transform:scale(.8)}.collapse.-open{border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom:none}.collapse.-open .collapse-head-title{transform:scale(1)}.collapse-head{font-weight:300;font-size:2.5rem;display:flex;align-items:center;justify-content:space-between;grid-gap:1rem;gap:1rem}.collapse-head-title{color:#fff;transition:all .4s}.collapse-head-icon{transition:all .6s}.collapse-head-icon.-open{transform:rotate(90deg)}.collapse-content{z-index:2;position:absolute;left:-.15rem;opacity:0;right:-2.15rem;top:3.65rem;background:linear-gradient(180deg,rgba(0,0,0,.2) 0,transparent 110%);height:0;max-height:0;overflow:hidden;transition:all .4s;color:#fff;border:1px solid transparent;padding:0 1rem}.collapse-content.-open{opacity:1;padding:1rem;height:var(--height);max-height:var(--height);border:.15rem solid rgba(0,0,0,.2);border-top:none;border-bottom:none;-o-border-image:linear-gradient(0deg,transparent,rgba(0,0,0,.2));border-image:linear-gradient(0deg,transparent,rgba(0,0,0,.2));border-image-slice:1}.collapse-content.-open:before{content:"";position:absolute;top:0;right:0;height:.05rem;left:calc(100% - 1.95rem);background:rgba(0,0,0,.2)}',""]),e.exports=r},278:function(e,t,n){var content=n(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(73).default)("df9733a4",content,!0,{sourceMap:!1})},287:function(e,t,n){"use strict";n.r(t);n(258);var r={props:{height:{type:[String,Number],default:50}},data:function(){return{isOpen:!1}},mounted:function(){this.height&&this.$refs.collapse.style.setProperty("--height","".concat(this.height/10,"rem"))}},o=(n(264),n(42)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:function(){return e.isOpen=!1},expression:"() => isOpen = false"}],ref:"collapse",staticClass:"collapse",class:{"-open":e.isOpen}},[t("div",{staticClass:"collapse-head",on:{click:function(t){e.isOpen=!e.isOpen}}},[t("span",{staticClass:"collapse-head-title"},[e._t("title")],2),e._v(" "),t("svg",{staticClass:"collapse-head-icon",class:{"-open":e.isOpen},attrs:{width:"2.2rem",height:"1.5rem",viewBox:"0 0 22 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.53557 0.464431L3.46899e-05 3.99997L6.99906 10.999L6.99902 10.999L10.5346 14.5346L10.5346 14.5345L10.6066 14.6066L14.1422 11.071L14.0701 10.999L21.1412 3.92796L17.6056 0.392422L10.5346 7.46345L3.53557 0.464431Z",fill:"white"}})])]),e._v(" "),t("div",{staticClass:"collapse-content",class:{"-open":e.isOpen}},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports},299:function(e,t,n){e.exports=n.p+"img/giffycanvas.d77e75d.gif"},300:function(e,t,n){"use strict";n(278)},301:function(e,t,n){var r=n(72)(!1);r.push([e.i,"header{height:10rem;padding:0 2.5rem;position:fixed;top:0;left:0;right:0;display:flex;align-items:center;z-index:100;transition:all .6s}header.-hidden{top:-10rem;transition:all .4s}header>.coin{width:9rem;height:9rem}header>.coin>img{-o-object-fit:contain;object-fit:contain;width:100%;height:100%}header>.links{flex-grow:1;margin-left:2rem;display:flex;align-items:center}header>.links>:not(:first-child){margin-left:1.1rem}header>.links .link{white-space:nowrap;font-weight:300;font-size:2.5rem;line-height:3.1rem;color:#fff;text-shadow:0 .4rem .4rem rgba(0,0,0,.5)}header>.buttons{display:flex;align-items:center}header>.buttons>:not(:first-child){margin-left:1rem}",""]),e.exports=r},362:function(e,t,n){"use strict";n.r(t);var r={components:{fDropdown:n(287).default},props:{isHidenHeader:{type:Boolean}}},o=(n(300),n(42)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("header",{class:{"-hidden":e.isHidenHeader}},[t("div",{staticClass:"coin"},[t("img",{attrs:{src:n(299),alt:""}})]),e._v(" "),t("div",{staticClass:"links"},[t("f-dropdown",{attrs:{height:77},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n        About\n      ")]},proxy:!0}])},[e._v(" "),[t("a",{staticClass:"link",attrs:{href:""}},[e._v("Fortune Pike")]),e._v(" "),t("a",{staticClass:"link",attrs:{href:""}},[e._v("Tournaments")])]],2),e._v(" "),t("f-social-button",[e._v("\n      "+e._s(e.$i18n.get("Gameplay"))+"\n    ")]),e._v(" "),t("f-dropdown",{attrs:{height:77},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n        NFT\n      ")]},proxy:!0}])},[e._v(" "),[t("a",{staticClass:"link",attrs:{href:""}},[e._v("NFT Fish")]),e._v(" "),t("a",{staticClass:"link",attrs:{href:""}},[e._v("NFT Avatar")])]],2),e._v(" "),t("f-social-button",[e._v("\n      "+e._s(e.$i18n.get("Roadmap"))+"\n    ")]),e._v(" "),t("f-social-button",[e._v("\n      "+e._s(e.$i18n.get("Wiki"))+"\n    ")])],1),e._v(" "),t("div",{staticClass:"buttons"},[t("f-button",[e._v("\n      "+e._s(e.$i18n.get("Join game"))+"\n    ")]),e._v(" "),t("f-social-button",[t("svg",{attrs:{width:"34",height:"25",viewBox:"0 0 34 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.0202009 3.76714L8.19758 10.1232C8.36384 10.2365 8.54093 10.3815 8.69552 10.5011L12.2857 13.2858C12.4648 13.425 12.6144 13.5204 12.7807 13.6658C12.8948 13.7658 12.9365 13.7863 13.0423 13.8638C14.1132 14.6471 15.6174 16.2613 16.9283 15.668C17.4992 15.4096 18.6005 14.6113 19.0721 14.185C19.2459 14.0279 19.3913 13.9313 19.5618 13.7988L22.096 11.7929C22.2627 11.6516 22.4294 11.5595 22.6164 11.3953C22.7323 11.2941 22.7715 11.2732 22.8769 11.1962C23.5073 10.7378 24.4769 9.92153 25.1865 9.38276L26.4495 8.39523C27.1449 7.80104 28.4946 6.83517 29.285 6.18973L31.3209 4.60092C31.5364 4.42966 33.3235 3.12795 33.3548 2.96669C33.3548 2.60293 33.4027 2.0925 33.2902 1.78082C33.0502 1.11496 32.0668 0.0903402 31.3047 0.0261712C30.668 -0.0275808 27.2508 0.021171 26.3128 0.021171L3.81201 0.0215877C3.09365 0.0215877 2.06236 -0.0938332 1.51109 0.209094C1.05191 0.461604 0.500635 1.01537 0.249376 1.44706C0.0197842 1.84124 0.0193675 1.93957 0.0202009 2.46668C0.0206175 2.90003 0.0197842 3.33379 0.0202009 3.76714V3.76714Z",fill:"white"}}),e._v(" "),t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.96055 18.7005C8.73179 18.9135 8.55345 19.0635 8.31969 19.2672L6.70921 20.696C6.56921 20.8139 6.51629 20.8385 6.36879 20.9815L3.74744 23.2799C3.4716 23.5395 1.93904 24.8299 1.85779 24.9999L31.1864 24.9962C31.1097 24.8049 30.1026 23.9982 29.8876 23.8074C29.7726 23.7053 29.6646 23.6024 29.5638 23.5061L25.9357 20.2623C25.7995 20.1527 25.7441 20.0923 25.607 19.9664C25.4803 19.8497 25.397 19.8114 25.2686 19.6781L23.2823 17.9159C22.9281 17.5597 22.6398 17.3359 22.2852 17.0338C22.1523 16.9201 22.1069 16.8492 21.9589 16.7359L20.6618 15.5446C20.4451 15.6042 19.9189 16.0784 19.7022 16.2334L18.7838 16.8976C15.9579 18.861 14.6108 17.4876 12.2707 15.8288L8.96055 18.7005V18.7005Z",fill:"white"}}),e._v(" "),t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M30.5567 7.75229C29.6355 8.48148 28.7096 9.20234 27.7862 9.89945L23.6465 13.1358C23.399 13.3229 23.199 13.5204 22.9552 13.6921C22.7527 13.8346 22.3814 14.0429 22.2935 14.2809C22.4881 14.3938 22.8327 14.7155 23.0115 14.8938C23.1452 15.0271 23.2436 15.0809 23.3715 15.2013C23.5177 15.3392 23.5511 15.3805 23.6998 15.4967C23.9323 15.6788 24.1415 15.9259 24.3761 16.1105L29.853 20.9707C29.9625 21.0582 30.1042 21.1965 30.2026 21.2869L32.931 23.7258C33.0414 23.8391 33.1377 23.9229 33.2677 23.997C33.4518 23.6208 33.3548 20.194 33.3548 19.4673V10.217C33.3548 8.73107 33.426 7.0606 33.3489 5.59763L30.5567 7.75229V7.75229Z",fill:"white"}}),e._v(" "),t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.062239 23.7254C0.17141 23.7333 3.16944 20.9965 3.68654 20.5903L7.295 17.4102C7.72335 16.9893 8.49838 16.3918 8.94048 15.9697L10.5622 14.5546C10.4897 14.4088 10.0639 14.0967 9.91426 13.9909C9.31883 13.57 8.56047 12.9312 7.93169 12.4708L0.0201542 6.33142V19.4256C0.0201542 20.3478 -0.0231807 22.6249 0.0172374 23.512L0.062239 23.7254V23.7254Z",fill:"white"}})])]),e._v(" "),t("f-social-button",[t("svg",{attrs:{width:"34",height:"25",viewBox:"0 0 34 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.80245 13.8596C8.80245 13.2521 8.8487 12.9283 9.05287 12.4038C9.58078 11.0488 10.902 10.2017 12.387 10.5413C13.64 10.8275 14.6662 12.1483 14.6662 13.4863V13.8596C14.6662 15.4558 13.4037 17.0042 11.8408 17.0042H11.6279C10.072 17.0042 8.80245 15.44 8.80245 13.8596V13.8596ZM33.6962 17.15V18.2838C33.682 18.9296 33.6462 19.6042 33.5937 20.3671C33.5587 20.8825 33.6279 20.7688 33.2854 21.0183L31.6204 22.1246C31.2437 22.3483 30.8391 22.6104 30.4449 22.8154L29.2179 23.4538C28.4858 23.7792 25.8258 24.9454 25.167 25C24.9733 24.7104 23.4437 22.4979 23.4083 22.0683C24.0849 21.9108 25.5775 21.1079 26.18 20.7892C26.112 20.6963 25.8945 20.5367 25.777 20.4442C25.5666 20.2783 25.6024 20.2333 25.3633 20.3388C24.3754 20.775 23.3729 21.1646 22.3 21.44C18.1183 22.5142 13.9983 22.3417 9.98287 20.7279C8.75995 20.2367 9.04037 20.0725 8.2162 20.7892C8.40287 20.8325 10.222 21.89 10.9879 22.0683C10.9579 22.4317 9.94078 24.0138 9.71662 24.3154L9.2287 25C8.69745 24.8763 8.23078 24.6892 7.74328 24.5138C5.6787 23.7717 3.71787 22.7638 1.90453 21.5567C1.64078 21.3813 0.903284 20.9721 0.832451 20.6567C0.739118 20.2425 0.701201 18.3708 0.699951 17.8796V17.8571C0.699951 12.6221 2.26245 7.68958 4.88037 3.43417C5.00953 3.22417 5.11495 3.05 5.25203 2.84625C5.73995 2.12083 5.50245 2.22 6.17245 1.90125C7.21578 1.40458 11.3645 0.0275 12.587 0C12.7329 0.275833 13.3683 1.45 13.44 1.75917L14.9708 1.58375C16.6045 1.3725 18.58 1.50667 20.205 1.65708C20.4358 1.67875 20.725 1.75375 20.9562 1.75917L21.8091 0C23.0237 0.0270833 27.5854 1.48958 28.5629 2.04167C28.8004 2.17583 29.3325 3.10958 29.482 3.36125L30.1604 4.495C31.7916 7.54292 32.9449 10.53 33.4266 14.0221C33.5912 15.2138 33.6737 16.1879 33.6962 17.15V17.15ZM19.73 13.7529C19.73 12.8617 20.1079 11.9367 20.542 11.4729C20.8108 11.1863 21.035 10.9813 21.3995 10.785C23.5533 9.62667 25.5937 11.6937 25.5937 13.3262C25.5937 14.3654 25.5516 15.205 24.7816 16.0321C22.7533 18.2108 19.73 16.4733 19.73 13.7529V13.7529Z",fill:"white"}})])]),e._v(" "),t("f-social-button",[t("svg",{attrs:{width:"26",height:"25",viewBox:"0 0 26 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.65002 0H19.15C22.5875 0 25.4 2.8125 25.4 6.25V18.75C25.4 22.1875 22.5875 25 19.15 25H6.65002C3.21252 25 0.400024 22.1875 0.400024 18.75V6.25C0.400024 2.8125 3.21252 0 6.65002 0ZM12.9 6.16458C16.3988 6.16458 19.2354 9.00125 19.2354 12.5C19.2354 15.9992 16.3988 18.8354 12.9 18.8354C9.40086 18.8354 6.56461 15.9992 6.56461 12.5C6.56461 9.00125 9.40086 6.16458 12.9 6.16458ZM20.7684 5.87167C20.7684 5.05083 20.1029 4.38542 19.2821 4.38542C18.4613 4.38542 17.7959 5.05083 17.7959 5.87167C17.7959 6.6925 18.4613 7.35792 19.2821 7.35792C20.1029 7.35792 20.7684 6.6925 20.7684 5.87167ZM12.9 8.43625C15.1442 8.43625 16.9638 10.2558 16.9638 12.5C16.9638 14.7446 15.1442 16.5638 12.9 16.5638C10.6554 16.5638 8.83628 14.7446 8.83628 12.5C8.83628 10.2558 10.6554 8.43625 12.9 8.43625Z",fill:"white"}})])]),e._v(" "),t("f-social-button",[t("svg",{attrs:{width:"31",height:"25",viewBox:"0 0 31 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M30.8629 2.95875C29.7312 3.46125 28.5146 3.8 27.2379 3.9525C28.5416 3.17208 29.5425 1.93458 30.0129 0.460833C28.7941 1.18375 27.4429 1.70958 26.0046 1.99292C24.855 0.76625 23.2129 0 21.3979 0C17.3233 0 14.3287 3.80167 15.2496 7.74833C10.0058 7.48542 5.35539 4.97333 2.24206 1.15458C0.588309 3.99125 1.38456 7.70208 4.19414 9.58125C3.16081 9.54792 2.18706 9.26458 1.33706 8.79167C1.26748 11.7154 3.36331 14.4504 6.39831 15.0596C5.50997 15.3004 4.53706 15.3571 3.54789 15.1671C4.35039 17.6742 6.68039 19.4979 9.44414 19.5492C6.79081 21.6296 3.44831 22.5588 0.0999756 22.1646C2.89289 23.955 6.21164 25 9.77497 25C21.4929 25 28.1133 15.1038 27.7133 6.22708C28.9462 5.33625 30.0171 4.22458 30.8629 2.96V2.95875Z",fill:"white"}})])]),e._v(" "),t("f-social-button",[t("svg",{attrs:{width:"26",height:"25",viewBox:"0 0 26 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M16.747 18.9594C16.4115 18.9594 16.1915 18.7861 15.9599 18.6132C15.8832 18.5557 15.8182 18.5069 15.7415 18.449C15.5919 18.3369 15.4532 18.2361 15.3027 18.1236L13.9868 17.146C13.806 17.016 13.2643 16.6293 13.1093 16.4947C13.0714 16.5201 13.0151 16.5685 12.981 16.6035L12.6184 16.9531C12.4438 17.1068 12.0863 17.4869 11.8938 17.6648L11.7684 17.7765C11.7234 17.8215 11.688 17.8569 11.6434 17.9019C11.5009 18.0461 11.2063 18.2344 10.9613 18.2344C10.9613 17.8444 11.0713 16.9885 11.0929 16.5343L11.1467 15.7839C11.1504 15.7343 11.1575 15.738 11.1592 15.678C11.1613 15.5897 11.1696 15.5547 11.1721 15.4668C11.1734 15.4172 11.1825 15.3047 11.1909 15.2484C11.2 15.1876 11.1921 15.0855 11.213 15.0463L12.0584 14.2709C12.2484 14.08 12.4663 13.9138 12.6584 13.7242C12.7068 13.6762 12.728 13.6533 12.7818 13.6104L13.2643 13.1704C13.3106 13.1279 13.3272 13.1037 13.3806 13.0625L14.7073 11.8453C14.7498 11.8037 14.7819 11.7857 14.826 11.7403L16.877 9.86355C16.9428 9.81064 17.1983 9.61312 17.0357 9.53729C16.9062 9.47728 16.7528 9.54229 16.657 9.60437L15.5028 10.3348C15.1957 10.5365 14.8777 10.7165 14.5723 10.9199L13.1726 11.8003C12.753 12.0645 12.1997 12.4308 11.7826 12.677C11.4675 12.8629 11.1671 13.0754 10.8517 13.2616C10.5354 13.4483 10.2325 13.6533 9.92247 13.8483C9.83996 13.9 9.77079 13.9421 9.68829 13.9963C9.43286 14.1638 9.48786 14.1567 9.20993 14.0684L6.41604 13.2116C6.2327 13.1525 5.87393 13.0908 5.87393 12.8308C5.87393 12.6787 5.98894 12.5395 6.08103 12.4712C6.32646 12.2891 6.76689 12.1491 7.06774 12.0345C7.14108 12.0066 7.20317 11.9832 7.2765 11.9537C8.23447 11.5666 9.19952 11.2215 10.1571 10.8407L11.4038 10.3607C11.5446 10.304 11.6713 10.2594 11.8121 10.2027C11.8859 10.1727 11.9476 10.1494 12.0209 10.1215L13.8756 9.40603C14.4277 9.18435 14.9777 8.98976 15.5307 8.76808L16.149 8.52932C16.4995 8.40515 16.8399 8.26472 17.1858 8.12972L18.5262 7.61177C18.8433 7.49427 19.0483 7.49218 19.2875 7.74678C19.5696 8.04721 19.4025 8.57307 19.3271 8.92642C19.2784 9.15269 19.2325 9.38561 19.1796 9.62271L18.4416 13.0891C18.3941 13.3296 18.3412 13.5454 18.2946 13.7854L17.4116 17.9369C17.327 18.3177 17.2633 18.9594 16.747 18.9594ZM0.799927 12.5016C0.799927 13.9888 1.04119 15.1813 1.47371 16.4797C1.63122 16.9527 1.82081 17.4098 2.02999 17.861C2.07124 17.9506 2.11916 18.0302 2.15708 18.1161C2.19916 18.2111 2.23792 18.2765 2.28458 18.3707L2.63252 18.9982C2.92503 19.5065 3.55423 20.387 3.93967 20.8012L4.60512 21.4933C4.76429 21.6533 5.04681 21.875 5.22473 22.0338C5.75309 22.5042 6.45521 22.9442 7.05941 23.3092C7.13858 23.3572 7.22067 23.3959 7.30484 23.4459C7.58527 23.6134 8.05363 23.823 8.35197 23.9538C8.44531 23.9947 8.53323 24.0297 8.6324 24.0693C8.82116 24.1447 9.00409 24.2184 9.19702 24.2822C10.0991 24.5805 10.6938 24.7497 11.6984 24.891C13.2447 25.1081 15.0119 25.001 16.492 24.5693C16.7941 24.481 17.0891 24.4035 17.3778 24.2951C17.5612 24.2264 17.7512 24.1593 17.9333 24.0864C18.1179 24.0122 18.2975 23.9376 18.4779 23.8534C18.8258 23.6905 19.17 23.5263 19.5059 23.3392L20.3397 22.8288L22.0552 21.4471L22.3385 21.1508C22.3748 21.1133 22.3852 21.09 22.4239 21.0512C22.7727 20.7054 23.4765 19.7732 23.6952 19.4232C23.9453 19.0232 24.1953 18.6202 24.4086 18.1994C24.4553 18.1077 24.4907 18.0373 24.5324 17.9406L24.659 17.6723C24.6824 17.6256 24.6945 17.5931 24.7161 17.5448C24.7386 17.4935 24.7557 17.4569 24.777 17.4081C24.8174 17.3156 24.8511 17.2298 24.8882 17.1368C25.0762 16.6639 25.2478 16.191 25.3716 15.6963C25.5062 15.1584 25.6158 14.66 25.6983 14.0854C25.7295 13.8654 25.7404 13.6075 25.7712 13.3808C25.7795 13.3212 25.7712 13.2658 25.7804 13.2054C25.8024 13.0587 25.8012 12.5495 25.8012 12.3828C25.8012 11.4265 25.6783 10.5036 25.4558 9.61771C25.3516 9.20185 25.2345 8.81225 25.0974 8.42098C24.9111 7.88721 24.6099 7.17259 24.3174 6.68381L23.5107 5.34249C23.2544 4.95789 22.9698 4.59496 22.6794 4.23619C22.4773 3.98659 22.2556 3.75866 22.0285 3.52949L21.1943 2.80903C20.9743 2.63611 20.758 2.4611 20.5243 2.30567C20.4792 2.27609 20.4492 2.25692 20.4072 2.22525C20.2576 2.11316 20.0913 2.02066 19.9363 1.91815C19.6184 1.70773 19.28 1.53105 18.9392 1.36063C16.5299 0.155565 14.0235 -0.287374 11.1663 0.1864C10.1575 0.353492 9.1166 0.693926 8.18072 1.11478C8.00196 1.19478 7.8257 1.27854 7.65319 1.36479C7.36067 1.51105 7.04899 1.66397 6.77564 1.84482L5.94727 2.38734L5.17348 2.98404C5.15265 3.00113 5.14598 3.01071 5.12598 3.02863L4.36136 3.74033C4.3226 3.7795 4.30969 3.80617 4.26968 3.84617L3.55132 4.68288C3.14338 5.18165 2.76461 5.76085 2.45168 6.32463C2.11791 6.92466 1.82915 7.54344 1.58872 8.18972C1.55496 8.28014 1.51538 8.38348 1.48329 8.47974C1.45246 8.57391 1.42121 8.66599 1.38787 8.76642C1.35287 8.87225 1.33079 8.96476 1.29537 9.06976C1.22578 9.27686 1.18036 9.48395 1.12911 9.69396C0.929933 10.5132 0.799927 11.487 0.799927 12.5016H0.799927Z",fill:"white"}})])])],1)])}),[],!1,null,null,null);t.default=component.exports}}]);