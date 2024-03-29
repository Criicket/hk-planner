openerp.hk_planner = function (instance) {
    instance.web.client_actions.add('showDollopPlan', 'instance.hk_planner.HKPlanner');

    instance.hk_planner.HKPlanner = instance.web.Widget.extend({
        template: 'hk_planner.home',
        init: function () {
            this._super.apply(this);
            angular.oeinstance = instance;
        },

        start: function () {
            var that = this;
            var $rootElement = $('#hkp-root');
            $rootElement.append(instance.web.qweb.render("hk_planner.dollopTrack", {widget: this}));
            that.bootstrap();
        },

        bootstrap: function(){
            var rootElement = document.getElementById("hkp-root");
            angular.bootstrap(rootElement, [
                'hkp.controllers',
                'hkp.services',
                'hkp.directives'
            ]);
        }
    });
};
