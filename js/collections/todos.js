var app = app || {};

(function(){
   'use strict';

   var Todos = Backbone.Collection.extend({
       // this collection's model
       model: app.Todo,

       // set rails backend
       url: 'http://localhost:3000/todos',

       // filter list of completed todo items
       completed: function(){
           return this.where({completed:true});
       },

       // filter list of remaining todo items
       remaining: function(){
           return this.where({completed:false});
       },

       // keep in sequential order
       nextOrder: function(){
           return this.length ? this.last().get('order') + 1 : 1;
       },

       // Todos are sorted by their original insertion order.
       comparator: 'order';
   });
   app.todos = new Todos();
})();
