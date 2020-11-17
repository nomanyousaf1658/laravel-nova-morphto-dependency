Nova.booting((Vue, router) => {
    Vue.component('form-morph-to-field',
        Vue.component('form-morph-to-field').extend({
            computed: {
                queryParams() {
                    var selectedFields = {};
                    var ignoreFieldTypes = ['form-textarea-field'];
                    if (this && this.$parent && this.$parent.$children) {
                        this.$parent.$children.forEach(function(child){
                            if (ignoreFieldTypes.indexOf(child.$options._componentTag)>-1) {
                                return;
                            }
                            var name = _.camelCase('selected_' + child._props.field.attribute);
                            if (child.value) {
                                selectedFields[name] = child.value;
                            }
                            if (child && child._data && child._data.selectedResource) {
                                selectedFields[name] = child._data.selectedResource.value;
                            }
                        });
                    }
                    return {
                        params: Object.assign({},{
                            type:this.resourceType,
                            current: this.selectedResourceId,
                            first: this.initializingWithExistingResource,
                            search: this.search,
                            withTrashed: this.withTrashed,
                            dependsOnValue: this.dependsOnValue,
                        },selectedFields),
                    }
                },
            },
        })
    );
})
