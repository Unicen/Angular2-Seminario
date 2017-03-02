var navManager = {
    $triggerCart : [],
    $triggerNav : [],
    $cart :[],
    $nav : [],
    selectors : {
        triggerNav : '.menu, .close',
        triggerCart : '.cart',
        cart : '.mini-cart',
        nav : 'header',
        activeclass : 'active'
    },
    init : function() {
        this.$triggerNav = $(this.selectors.triggerNav);
        this.$triggerCart = $(this.selectors.triggerCart);
        this.$nav = $(this.selectors.nav);
        this.$cart = $(this.selectors.cart);

        this.bind();
    },
    bind : function() {
        var self = this;

        self.$triggerNav.on('click', function(e) {
            e.preventDefault();
            self._hideOrShowNav();
        });

        self.$triggerCart.on('click', function(e) {
            e.preventDefault();
            self._hideOrShowMiniCart();
        });
    },
    _hideOrShowNav : function() {
        if (this.$nav.hasClass(this.selectors.activeclass)) {
            this.$nav.removeClass(this.selectors.activeclass);
        } else {
            this.$nav.addClass(this.selectors.activeclass);
        }
    },
    _hideOrShowMiniCart : function() {
        if (this.$cart.hasClass(this.selectors.activeclass)) {
            this.$cart.removeClass(this.selectors.activeclass);
        } else {
            this.$cart.addClass(this.selectors.activeclass);
        }
    }
}

$(document).ready(function() {
    navManager.init();
});
