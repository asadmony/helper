// destroy the vue listeners, etc
this.$destroy();

// remove the element from the DOM
this.$el.parentNode.removeChild(this.$el);
