(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{293:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),l=t(325),c=t(326);e.default=function(n){var e=n.location,t=Object(l.a)(e),a=t[0],u=(t[1],a);return r.a.createElement(c.a,{variables:{hash:u}},function(n){var e=n.data,t=n.loading,a=n.error;if(t)return r.a.createElement("p",null,"loading…");if(a)return r.a.createElement("p",null,"error!");var l=e.block;return l?r.a.createElement("dl",null,r.a.createElement("dt",null,"Index"),r.a.createElement("dd",null,l.index),r.a.createElement("dt",null,"Hash"),r.a.createElement("dd",null,r.a.createElement("code",null,l.hash)),r.a.createElement("dt",null,"Nonce"),r.a.createElement("dd",null,r.a.createElement("code",null,l.nonce)),r.a.createElement("dt",null,"Miner"),r.a.createElement("dd",null,r.a.createElement("code",null,l.miner)),r.a.createElement("dt",null,"Timestamp"),r.a.createElement("dd",null,l.timestamp),r.a.createElement("dt",null,"Previous hash"),r.a.createElement("dd",null,l.previousBlock?r.a.createElement("code",null,l.previousBlock.hash):"N/A"),r.a.createElement("dt",null,"Difficulty"),r.a.createElement("dd",null,l.difficulty),r.a.createElement("dt",null,"Transactions"),r.a.createElement("dd",null,r.a.createElement("dl",null,l.transactions.map(function(n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("dt",null,"Id"),r.a.createElement("dd",null,r.a.createElement("a",{href:"/transaction/?"+n.id},r.a.createElement("code",null,n.id))),r.a.createElement("dt",null,"Timestamp"),r.a.createElement("dd",null,n.timestamp))})))):r.a.createElement("p",null,"No such block: ",r.a.createElement("code",null,u))})}},325:function(n,e,t){"use strict";t.d(e,"a",function(){return l});t(162);var a=t(0),r=t(161);function l(n){return[Object(a.useMemo)(function(){return n.search.substr(1)},[n]),Object(a.useCallback)(function(e){var t=n.pathname.substr(Object(r.withPrefix)("/").length-1);Object(r.navigate)(t+(e?"?"+e:""))},[n,r.navigate])]}},326:function(n,e,t){"use strict";t.d(e,"b",function(){return p}),t.d(e,"a",function(){return v}),t.d(e,"c",function(){return y});t(45);var a=t(163),r=t.n(a),l=t(0),c=t(328);t(330);function u(){var n=d(["\n    query TransactionById($id: ID) {\n  transaction(id: $id) {\n    ...TransactionCommon\n  }\n}\n    ",""]);return u=function(){return n},n}function o(){var n=d(["\n    query BlockByHash($hash: ID) {\n  block(hash: $hash) {\n    ...BlockCommon\n    miner\n    nonce\n    previousBlock {\n      hash\n    }\n    transactions {\n      ...TransactionCommon\n    }\n  }\n}\n    ","\n",""]);return o=function(){return n},n}function i(){var n=d(["\n    query BlockList($offset: Int!, $limit: Int!, $excludeEmptyTxs: Boolean!) {\n  blocks(desc: true, offset: $offset, limit: $limit, excludeEmptyTxs: $excludeEmptyTxs) {\n    ...BlockCommon\n    transactions {\n      id\n    }\n  }\n}\n    ",""]);return i=function(){return n},n}function m(){var n=d(["\n    fragment TransactionCommon on Transaction {\n  id\n  nonce\n  publicKey\n  signature\n  signer\n  timestamp\n  updatedAddresses\n}\n    "]);return m=function(){return n},n}function s(){var n=d(["\n    fragment BlockCommon on Block {\n  hash\n  index\n  difficulty\n  timestamp\n}\n    "]);return s=function(){return n},n}function d(n,e){return e||(e=n.slice(0)),n.raw=e,n}var f=r()(s()),E=r()(m()),h=r()(i(),f),p=function(n){return l.createElement(c.b,Object.assign({query:h},n))};var b=r()(o(),f,E),v=function(n){return l.createElement(c.b,Object.assign({query:b},n))};var k=r()(u(),E),y=function(n){return l.createElement(c.b,Object.assign({query:k},n))}}}]);
//# sourceMappingURL=component---src-pages-block-tsx-594a1d42393c0ebec653.js.map