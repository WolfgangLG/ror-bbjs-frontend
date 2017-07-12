var app = app || {};

(function (){
   'use strict';

//   Has `title`, `order`, and `completed` attributes.
    app.Todo = Backbone.Model.extend({
       defaults: {
           title: '',
           completed: false
       },

        toggle: function(){
           this.save({
               completed: !this.get('completed')
           });
        }
    });
})();
