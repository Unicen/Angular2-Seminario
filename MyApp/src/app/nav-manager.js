var navManager = {
    $body : [],
    $nav : [],
    selectors : {
        activeclass : 'active',
        body : 'body',
        cart : '.mini-cart',
        nav : 'header',
        search : '.search-container',
        main : '.main-content',
        triggerNav : '.menu, .close, nav li',
        triggerCart : '.cart',
        triggerSearch : '.header-container .search',
        triggerWeather : '.weather-icon'
    },
    $triggerCart : [],
    $triggerNav : [],
    $triggerSearch : [],
    $triggerWeather : [],

    init : function() {
        this.$body = $(this.selectors.body);
        this.$nav = $(this.selectors.nav);
        this.$triggerNav = $(this.selectors.triggerNav);
        this.$triggerCart = $(this.selectors.triggerCart);
        this.$triggerSearch = $(this.selectors.triggerSearch);
        this.$triggerWeather = $(this.selectors.triggerWeather);

        this.bind();
    },

    bind : function() {
        var self = this;

        self.$triggerNav.on('click', function(e) {
            e.preventDefault();
            self._hideOrShowNav();
        });

        self.$triggerSearch.on('click', function(e) {
            e.preventDefault();
            self._hideOrShowSearch();
        });

        self.$triggerCart.on('click', function(e) {
            e.preventDefault();
            self._hideOrShowNextElement(this);
        });

        self.$body.find(this.selectors.main).on('click', function() {
            self._removeActiveClass();
        });

        self.$triggerWeather.on('click', function(e) {
            self._hideOrShowNextElement(this);
        });
    },

    _hideOrShowNav : function() {
        if (this.$nav.hasClass(this.selectors.activeclass)) {
            this.$body.removeClass(this.selectors.activeclass);
            this.$nav.removeClass(this.selectors.activeclass);
        } else {
            this._removeActiveClass();
            this.$body.addClass(this.selectors.activeclass);
            this.$nav.addClass(this.selectors.activeclass);
        }
    },

    _hideOrShowSearch : function() {
        this._hideOrShow(this.selectors.search);
        $(this.selectors.search).find('input').focus();
    },

    _hideOrShowNextElement : function(element) {
        var _elementToShow = $(element).next();

        this._hideOrShow(_elementToShow);
    },

    _hideOrShow : function(element) {
        var _element = $(element);

        if (_element.hasClass(this.selectors.activeclass)) {
            _element.removeClass(this.selectors.activeclass);
        } else {
            this._removeActiveClass();
            _element.addClass(this.selectors.activeclass);
        }
    },

    _removeActiveClass: function() {
        $('.' + this.selectors.activeclass).removeClass(this.selectors.activeclass);
    }
};

$(document).ready(function() {
    navManager.init();
});
