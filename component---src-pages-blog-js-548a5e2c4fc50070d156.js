webpackJsonp([0xc19374f83753],{103:function(e,t){"use strict";function r(e,t,s){if("string"!=typeof t){if(f){var p=d(t);p&&p!==f&&r(e,p,s)}var i=o(t);u&&(i=i.concat(u(t)));for(var m=0;m<i.length;++m){var y=i[m];if(!(a[y]||l[y]||s&&s[y])){var g=c(t,y);try{n(e,y,g)}catch(e){}}}return e}return e}var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,o=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,f=d&&d(Object);e.exports=r},204:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var l=r(2),n=a(l),o=r(34),u=a(o),c=function(e){var t=e.data;return n.default.createElement("div",null,n.default.createElement("h1",null,"Latest Posts"),t.allMarkdownRemark.edges.map(function(e){return n.default.createElement("div",{key:e.node.id},n.default.createElement("h3",null,e.node.frontmatter.title),n.default.createElement("small",null,"Posted by ",e.node.frontmatter.author," on ",e.node.frontmatter.date),n.default.createElement("br",null),n.default.createElement("br",null),n.default.createElement(u.default,{to:e.node.frontmatter.path,style:{color:"white"}},"Read More"),n.default.createElement("br",null),n.default.createElement("br",null),n.default.createElement("hr",null))}))};t.pageQuery="** extracted graphql fragment **";t.default=c}});
//# sourceMappingURL=component---src-pages-blog-js-548a5e2c4fc50070d156.js.map