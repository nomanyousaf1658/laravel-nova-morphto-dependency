!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t){Nova.booting(function(e,t){e.component("form-morph-to-field",e.component("form-morph-to-field").extend({computed:{queryParams:function(){var e={},t=["form-textarea-field"];return this&&this.$parent&&this.$parent.$children&&this.$parent.$children.forEach(function(r){if(!(t.indexOf(r.$options._componentTag)>-1)){var n=_.camelCase("selected_"+r._props.field.attribute);r.value&&(e[n]=r.value),r&&r._data&&r._data.selectedResource&&(e[n]=r._data.selectedResource.value)}}),{params:Object.assign({},{type:this.resourceType,current:this.selectedResourceId,first:this.initializingWithExistingResource,search:this.search,withTrashed:this.withTrashed,dependsOnValue:this.dependsOnValue},e)}}}}))})}]);