// This section builds and populates the quicklinks section (off-canvas right)

UW.QuickLinks = Backbone.View.extend({

    DELAY : 500,

    settings : {},

    // todo: the default list and these elements could be put into the php templates
    container: '#uw-container',

    template : '<nav id="quicklinks" role="navigation" aria-label="quick links" aria-hidden="true">' +
                        '<ul id="big-links">' +
                            '<% _.each( links, function( link ) { %> ' +
                                '<% if (link.classes) { %>' +
                                    '<li>' +
                                        '<span class="<%= link.classes %>"></span>' +
                                        '<a href="<%= link.url %>" tabindex="-1"><%= link.title %></a>' +
                                    '</li>' +
                                '<% } %>' +
                            '<% }) %>' +
                        '</ul>' +
                        '<h3>Helpful Links</h3>' +
                        '<ul id="little-links">' +
                            '<% _.each( links, function( link ) { %> '+
                                '<% if ( ! link.classes) { %>' +
                                    '<li>' +
                                        '<span class="<%= link.classes %>"></span>' +
                                        '<a href="<%= link.url %>" tabindex="-1"><%= link.title %></a>' +
                                    '</li>' +
                                '<% } %>' +
                            '<% }) %>' +
                        '</ul>' +
                    '</nav>',

    events: {
       'click'           : 'animate',
       'touchstart'   : 'animate',
       'keyup'         : 'animate',
       'blur button' : 'loop'
    },

    initialize: function ( options ) {
        _.bindAll( this, 'render', 'renderDefault', 'animate', 'accessible', 'loop', 'transitionEnd' );

        this.options = _.extend( {}, this.settings , options )

        this.links = new UW.QuickLinks.Collection( this.options )

        this.links.on( 'sync', this.render )

        this.links.on( 'error', this.renderDefault )
    },

    renderDefault : function ()
    {
        this.defaultLinks =  this.links.defaults
        this.render()
    },

    render : function(  )
    {
        this.quicklinks = $ ( _.template( this.template, { links : this.defaultLinks ? this.defaultLinks : this.links.toJSON() }) )
        this.$container = $(this.container);
        this.$container.prepend( this.quicklinks )
        this.$el.attr( 'aria-controls', 'quicklinks' ).attr( 'aria-owns', 'quicklinks' )
        UW.$body.on( 'keyup', '#quicklinks a', this.animate )
        this.quicklinks.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', this.transitionEnd);
    },

    transitionEnd: function (event) {
        if (this.open && event.target == this.quicklinks[0]) {
            this.accessible();
        }
    },

    animate: function ( e ) {
        e.preventDefault();

        if ( e.keyCode && e.keyCode != 27 )
        {
            if ( e.keyCode && e.keyCode != 13 ||
                e.keyCode && e.keyCode != 32 )
            return false;
        }

        this.$container.toggleClass('open')
        this.quicklinks.toggleClass('open')

        this.open = this.quicklinks.hasClass( 'open' )

        if (!this.open) {
            this.accessible();
        }
    },

    // todo : cache the uw-container-inner and screen-reader
    accessible : function (argument)
    {
        this.$el.find('button').attr( 'aria-expanded', this.open )
        this.quicklinks.attr('aria-hidden',  ( ! this.open ).toString() )
        if ( this.open ) {
            this.quicklinks.find('a').attr( 'tabindex', 0 ).first().focus()
           $('#uw-container-inner').attr('aria-hidden', true);
           $('.screen-reader-shortcut').attr('aria-hidden', true)
        } else {
            this.quicklinks.find('a').attr( 'tabindex', -1 )
            this.$el.find('button').focus()
           $('#uw-container-inner').attr('aria-hidden', false);
           $('.screen-reader-shortcut').attr('aria-hidden', false);
        }
    },

    loop : function (event) {
        if( this.open ) this.quicklinks.find('li a').first().focus();
    }

});

UW.QuickLinks.Model = Backbone.Model.extend({});

UW.QuickLinks.Collection = Backbone.Collection.extend({

    model: UW.QuickLinks.Model,

    initialize: function ( options )
    {
        this.url = options.url;
        this.fetch()
    },

    defaults : [{
       "ID": 296,
       "menu_item_parent": "0",
       "title": "MyUW",
       "url": "http:\/\/myuw.washington.edu",
       "classes": ["icon-myuw"]
   }, {
       "ID": 297,
       "menu_item_parent": "0",
       "title": "Calendar",
       "url": "http:\/\/uw.edu\/calendar",
       "classes": ["icon-calendar"]
   }, {
       "ID": 298,
       "menu_item_parent": "0",
       "title": "Directories",
       "url": "http:\/\/uw.edu\/directory\/",
       "classes": ["icon-directories"]
   }, {
       "ID": 299,
       "menu_item_parent": "0",
       "title": "Libraries",
       "url": "http:\/\/www.lib.washington.edu\/",
       "classes": ["icon-libraries"]
   }, {
       "ID": 300,
       "menu_item_parent": "0",
       "title": "Maps",
       "url": "http:\/\/uw.edu\/maps",
       "classes": ["icon-maps"]
   }, {
       "ID": 301,
       "menu_item_parent": "0",
       "title": "UW Today",
       "url": "http:\/\/www.uw.edu\/news",
       "classes": ["icon-uwtoday"]
   }, {
       "ID": 302,
       "menu_item_parent": "0",
       "title": "Computing\/IT",
       "url": "http:\/\/www.washington.edu\/itconnect\/forstudents.html",
       "classes": false
   }, {
       "ID": 303,
       "menu_item_parent": "0",
       "title": "Employee Self Service",
       "url": "http:\/\/f2.washington.edu\/fm\/payroll\/payroll\/ESS",
       "classes": false
   }, {
       "ID": 304,
       "menu_item_parent": "0",
       "title": "Husky Card",
       "url": "http:\/\/www.hfs.washington.edu\/huskycard\/",
       "classes": false
   }, {
       "ID": 313,
       "menu_item_parent": "0",
       "title": "UW Medicine",
       "url": "http:\/\/www.uwmedicine.org",
       "classes": false
   }, {
       "ID": 305,
       "menu_item_parent": "0",
       "title": "UW Bothell",
       "url": "http:\/\/www.bothell.washington.edu\/",
       "classes": false
   }, {
       "ID": 306,
       "menu_item_parent": "0",
       "title": "UW Tacoma",
       "url": "http:\/\/www.tacoma.uw.edu\/",
       "classes": false
   }, {
       "ID": 307,
       "menu_item_parent": "0",
       "title": "UW Facebook",
       "url": "https:\/\/www.facebook.com\/UofWA",
       "classes": false
   }, {
       "ID": 308,
       "menu_item_parent": "0",
       "title": "UW Twitter",
       "url": "https:\/\/twitter.com\/UW",
       "classes": false
   }]

});
