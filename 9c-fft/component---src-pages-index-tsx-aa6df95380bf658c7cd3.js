(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{295:function(n,e,t){"use strict";t.r(e);t(45);var a=t(0),r=t.n(a),i=t(342),c=t(161),o=t(348),s=t(350),u=t(349),l=t(347),d=t(341),m=t(327),f=t(326),b=t(338),h=t.n(b),g=t(325);function v(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n                  margin-right: 5px;\n                "]);return v=function(){return n},n}var k=function(n){var e=n.blocks,t=[{key:"columnIndex",name:"Index",fieldName:"index",iconName:"NumberSymbol",isIconOnly:!0,minWidth:5,maxWidth:40,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"number",isPadded:!0},{key:"columnHash",name:"Hash",fieldName:"hash",minWidth:350,maxWidth:450,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!1,data:"string",isPadded:!0,onRender:function(n){return r.a.createElement(u.a,{href:"./block/?"+n.hash},n.hash)}},{key:"columnTimestamp",name:"Timestamp",fieldName:"timestamp",minWidth:100,maxWidth:200,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!0,data:"string",isPadded:!0},{key:"columnTxNumber",name:"Tx #",fieldName:null,minWidth:5,maxWidth:20,isRowHeader:!0,isResizable:!0,isSorted:!1,isSortedDescending:!1,data:"number",isPadded:!0,onRender:function(n){return r.a.createElement(r.a.Fragment,null,n.transactions.length)}}];return r.a.createElement(l.a,{items:e,columns:t,selectionMode:d.b.none,getKey:function(n){return n.hash},setKey:"set",layoutMode:m.e.justified,isHeaderVisible:!0,onItemInvoked:function(n){return Object(c.navigate)("/block/?"+n.hash)}})};e.default=function(n){var e=n.location,t=function(n){var e=Object(g.a)(n),t=e[0],a=e[1];return[h.a.parse(t),function(n){return a(h.a.stringify(n))}]}(e),c=t[0],u=t[1],l=c.offset,d=void 0===l?0:l,m=function(n){if(n<1){var e=Object.assign({},c);delete e.offset,u(e)}else u(Object.assign({},c,{offset:n}))},b=function(){m(+d+20)},y=function(){m(+d-20)},p=Object(a.useState)(!1),x=p[0],E=p[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{label:"Include blocks having any tx",checked:x,onChange:function(n,e){E(!!e)}}),r.a.createElement(f.b,{variables:{offset:d,limit:20,excludeEmptyTxs:x}},function(n){var e=n.data,t=n.loading;if(n.error)return r.a.createElement("p",null,"error!");var a=e&&e.blocks?e.blocks.map(function(n){return new Date(n.timestamp)}):null,c=a?0:null;if(null!=c&&a){for(var o=0;o<a.length-1;o++)c+=+a[o]-+a[o+1];c/=1e3*(a.length-1)}var u=e&&e.blocks?e.blocks.map(function(n){return n.difficulty}):null,l=0;return null!=l&&u&&(l=u.reduce(function(n,e){return n+e},0)/u.length),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{key:"interval"},"Average interval in this page: ",c," sec"),r.a.createElement("p",{key:"difficulty"},"Average difficulty in this page: ",l),r.a.createElement(s.a,{onClick:y,disabled:t||d<1,className:Object(i.a)(v())},"← Newer"),r.a.createElement(s.a,{disabled:t,onClick:b},"Older →"),t?r.a.createElement("p",null,"Loading…"):r.a.createElement(k,{blocks:t?[]:e.blocks}))}))}},325:function(n,e,t){"use strict";t.d(e,"a",function(){return i});t(162);var a=t(0),r=t(161);function i(n){return[Object(a.useMemo)(function(){return n.search.substr(1)},[n]),Object(a.useCallback)(function(e){var t=n.pathname.substr(Object(r.withPrefix)("/").length-1);Object(r.navigate)(t+(e?"?"+e:""))},[n,r.navigate])]}},326:function(n,e,t){"use strict";t.d(e,"b",function(){return g}),t.d(e,"a",function(){return k}),t.d(e,"c",function(){return p});t(45);var a=t(163),r=t.n(a),i=t(0),c=t(328);t(330);function o(){var n=m(["\n    query TransactionById($id: ID) {\n  transaction(id: $id) {\n    ...TransactionCommon\n  }\n}\n    ",""]);return o=function(){return n},n}function s(){var n=m(["\n    query BlockByHash($hash: ID) {\n  block(hash: $hash) {\n    ...BlockCommon\n    miner\n    nonce\n    previousBlock {\n      hash\n    }\n    transactions {\n      ...TransactionCommon\n    }\n  }\n}\n    ","\n",""]);return s=function(){return n},n}function u(){var n=m(["\n    query BlockList($offset: Int!, $limit: Int!, $excludeEmptyTxs: Boolean!) {\n  blocks(desc: true, offset: $offset, limit: $limit, excludeEmptyTxs: $excludeEmptyTxs) {\n    ...BlockCommon\n    transactions {\n      id\n    }\n  }\n}\n    ",""]);return u=function(){return n},n}function l(){var n=m(["\n    fragment TransactionCommon on Transaction {\n  id\n  nonce\n  publicKey\n  signature\n  signer\n  timestamp\n  updatedAddresses\n}\n    "]);return l=function(){return n},n}function d(){var n=m(["\n    fragment BlockCommon on Block {\n  hash\n  index\n  difficulty\n  timestamp\n}\n    "]);return d=function(){return n},n}function m(n,e){return e||(e=n.slice(0)),n.raw=e,n}var f=r()(d()),b=r()(l()),h=r()(u(),f),g=function(n){return i.createElement(c.b,Object.assign({query:h},n))};var v=r()(s(),f,b),k=function(n){return i.createElement(c.b,Object.assign({query:v},n))};var y=r()(o(),b),p=function(n){return i.createElement(c.b,Object.assign({query:y},n))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-aa6df95380bf658c7cd3.js.map