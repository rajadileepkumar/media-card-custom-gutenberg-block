!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n(3),i=n(2),l=n(4);Object(c.registerBlockType)("gutenberg-examples/example-05-recipe-card-esnext",{title:Object(a.__)("Media Card","gutenberg-examples"),icon:"index-card",category:"layout",attributes:{title:{type:"array",source:"children",selector:"h2"},mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:"img",attribute:"src"},ingredients:{type:"array",source:"children",selector:".ingredients"},instructions:{type:"array",source:"children",selector:".steps"}},example:{attributes:{title:Object(a.__)("Chocolate Chip Cookies","gutenberg-examples"),mediaURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/320px-2ChocolateChipCookies.jpg",ingredients:[Object(a.__)("flour","gutenberg-examples"),Object(a.__)("sugar","gutenberg-examples"),Object(a.__)("chocolate","gutenberg-examples"),"💖"],instructions:[Object(a.__)("Mix","gutenberg-examples"),Object(a.__)("Bake","gutenberg-examples"),Object(a.__)("Enjoy","gutenberg-examples")]}},edit:function(e){var t=e.className,n=e.attributes,c=n.title,s=n.mediaID,o=n.mediaURL,u=n.ingredients,m=n.instructions,b=e.setAttributes;return Object(r.createElement)("div",{className:t},Object(r.createElement)(i.RichText,{tagName:"h2",placeholder:Object(a.__)("Write Recipe title…","gutenberg-examples"),value:c,onChange:function(e){b({title:e})}}),Object(r.createElement)("div",{className:"media-card-image"},Object(r.createElement)(i.MediaUpload,{onSelect:function(e){b({mediaURL:e.url,mediaID:e.id})},allowedTypes:"image",value:s,render:function(e){var t=e.open;return Object(r.createElement)(l.Button,{className:s?"image-button":"button button-large",onClick:t},s?Object(r.createElement)("img",{src:o,alt:Object(a.__)("Upload Recipe Image","gutenberg-examples")}):Object(a.__)("Upload Image","gutenberg-examples"))}})),Object(r.createElement)("h3",null,Object(a.__)("Ingredients","gutenberg-examples")),Object(r.createElement)(i.RichText,{tagName:"ul",multiline:"li",placeholder:Object(a.__)("Write a list of ingredients…","gutenberg-examples"),value:u,onChange:function(e){b({ingredients:e})},className:"ingredients"}),Object(r.createElement)("h3",null,Object(a.__)("Instructions","gutenberg-examples")),Object(r.createElement)(i.RichText,{tagName:"div",multiline:"p",className:"steps",placeholder:Object(a.__)("Write the instructions…","gutenberg-examples"),value:m,onChange:function(e){b({instructions:e})}}),Object(r.createElement)("div",{className:t},Object(r.createElement)(i.InnerBlocks,null)))},save:function(e){var t=e.className,n=e.attributes,c=n.title,l=n.mediaURL,s=n.ingredients,o=n.instructions;return Object(r.createElement)("div",{className:t},Object(r.createElement)(i.RichText.Content,{tagName:"h2",value:c}),l&&Object(r.createElement)("img",{className:"recipe-image",src:l,alt:Object(a.__)("Recipe Image","gutenberg-examples")}),Object(r.createElement)("h3",null,Object(a.__)("Ingredients","gutenberg-examples")),Object(r.createElement)(i.RichText.Content,{tagName:"ul",className:"ingredients",value:s}),Object(r.createElement)("h3",null,Object(a.__)("Instructions","gutenberg-examples")),Object(r.createElement)(i.RichText.Content,{tagName:"div",className:"steps",value:o}),Object(r.createElement)("div",{className:t},Object(r.createElement)(i.InnerBlocks.Content,null)))}})}]);