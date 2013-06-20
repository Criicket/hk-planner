openerp.hk_planner = function (instance) {
    instance.web.client_actions.add('showcapacityplanner', 'instance.hk_planner.HKPlanner');

    instance.hk_planner.HKPlanner = instance.web.Widget.extend({
        template: 'hk_planner.home',
        init: function (parent, dataset) {
            this._super.apply(this);
        },

        start: function (argument) {
            var that = this;
            var $rootElement = $('#hkp-root');
            $rootElement.append(instance.web.qweb.render("hk_planner.rawTable", {widget: this}));
            that.bootstrap();
        },

        bootstrap: function(){
            var rootElement = document.getElementById("hkp-root");
            angular.bootstrap(rootElement, [
                'hkp.controllers'
            ]);
        }
    })
}
