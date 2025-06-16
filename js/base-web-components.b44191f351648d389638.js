/*! Turbowow render.txt */
( () => {
    var e = {};
    e.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    e.p = "",
    e.p = window.__WOW_UI_PUBLIC_PATH__,
    ( () => {
        "use strict";
        const t = e => (t, o) => {
            void 0 !== o ? o.addInitializer(( () => {
                customElements.define(e, t)
            }
            )) : customElements.define(e, t)
        }
        ;
        var o;
        !function(e) {
            e.BlzLocaleSelector = "blz-locale-selector",
            e.BlzAccordion = "blz-accordion",
            e.BlzAccordionCarouselSection = "blz-accordion-carousel-section",
            e.BlzAccordionSection = "blz-accordion-section",
            e.BlzAnimatedAsset = "blz-animated-asset",
            e.BlzAgeGate = "blz-age-gate",
            e.BlzAlert = "blz-alert",
            e.BlzAvatar = "blz-avatar",
            e.BlzAnnouncementBanner = "blz-announcement-banner",
            e.BlzBackToTopButton = "blz-back-to-top-button",
            e.BlzBadge = "blz-badge",
            e.BlzBanner = "blz-banner",
            e.BlzBaseCard = "blz-base-card",
            e.BlzButton = "blz-button",
            e.BlzButtonGroup = "blz-button-group",
            e.BlzCard = "trb-card",
            e.BlzCarousel = "blz-carousel",
            e.BlzCarouselSection = "blz-carousel-section",
            e.BlzCheckbox = "blz-checkbox",
            e.BlzCloutBar = "blz-clout-bar",
            e.BlzCloutBlock = "blz-clout-block",
            e.BlzComparisonSlider = "blz-comparison-slider",
            e.BlzCommentCounter = "blz-comment-counter",
            e.BlzComparisonTable = "blz-comparison-table",
            e.BlzCountdownTimer = "blz-countdown-timer",
            e.BlzContentBlock = "blz-content-block",
            e.BlzCrossSell = "blz-cross-sell",
            e.BlzDataTable = "blz-data-table",
            e.BlzDivider = "blz-divider",
            e.BlzDrawer = "blz-drawer",
            e.BlzDropdown = "blz-dropdown",
            e.BlzEditionSelect = "blz-edition-select",
            e.BlzFeature = "blz-feature",
            e.BlzFeatureCarouselSection = "blz-feature-carousel-section",
            e.BlzFeaturesList = "blz-features-list",
            e.BlzGameCard = "blz-game-card",
            e.BlzGameTile = "blz-game-tile",
            e.BlzGrid = "blz-grid",
            e.BlzHeader = "blz-header",
            e.BlzHero = "blz-hero",
            e.BlzHeroCard = "blz-hero-card",
            e.BlzHeroGallery = "blz-hero-gallery",
            e.BlzHighlights = "blz-highlights",
            e.BlzIcon = "blz-icon",
            e.BlzIconButton = "blz-icon-button",
            e.BlzIconGroup = "blz-icon-group",
            e.BlzImage = "blz-image",
            e.BlzInput = "blz-input",
            e.BlzLightbox = "blz-lightbox",
            e.BlzLightboxTrigger = "blz-lightbox-trigger",
            e.BlzList = "blz-list",
            e.BlzListItem = "blz-list-item",
            e.BlzLoadingSpinner = "blz-loading-spinner",
            e.BlzMacroSection = "blz-macro-section",
            e.BlzMasthead = "blz-masthead",
            e.BlzMediaGallery = "blz-media-gallery",
            e.BlzModal = "blz-modal",
            e.BlzNav = "blz-nav",
            e.BlzNavBattlenet = "blz-nav-battlenet",
            e.BlzNavLink = "blz-nav-link",
            e.BlzNavDropdown = "blz-nav-dropdown",
            e.BlzNavFooter = "blz-nav-footer",
            e.BlzNavContentBlock = "blz-nav-content-block",
            e.BlzNavLegalRatings = "blz-nav-legal-ratings",
            e.BlzNews = "blz-news",
            e.BlzNewsCard = "blz-news-card",
            e.BlzOptin = "blz-optin",
            e.BlzPill = "blz-pill",
            e.BlzPageHeader = "blz-page-header",
            e.BlzPlaceholderText = "blz-placeholder-text",
            e.BlzPlatformButton = "blz-platform-button",
            e.BlzPlatformOptin = "blz-platform-optin",
            e.BlzPlatformSelect = "blz-platform-select",
            e.BlzPlayButton = "blz-play-button",
            e.BlzPrice = "blz-price",
            e.BlzProfileCard = "blz-profile-card",
            e.BlzProgressIndicator = "blz-progress-indicator",
            e.BlzQrCode = "blz-qr-code",
            e.BlzRadioButton = "blz-radio-button",
            e.BlzSection = "blz-section",
            e.BlzShowcase = "blz-showcase",
            e.BlzSkeleton = "blz-skeleton",
            e.BlzSocialSection = "blz-social-section",
            e.BlzSpacer = "blz-spacer",
            e.BlzStoreBadge = "blz-store-badge",
            e.BlzStoreBadgeGroup = "blz-store-badge-group",
            e.BlzSwitch = "blz-switch",
            e.BlzTabControl = "blz-tab-control",
            e.BlzTabControls = "blz-tab-controls",
            e.BlzTabs = "blz-tabs",
            e.BlzTabsSection = "blz-tabs-section",
            e.BlzTimestamp = "blz-timestamp",
            e.BlzToggle = "blz-toggle",
            e.BlzTokenReferenceTable = "blz-token-reference-table",
            e.BlzTwitchVideo = "blz-twitch-video",
            e.BlzUserFeedback = "blz-user-feedback",
            e.BlzUserInfo = "blz-user-info",
            e.BlzVideo = "blz-video",
            e.BlzVirtualCurrency = "blz-virtual-currency",
            e.BlzWebVideo = "blz-web-video",
            e.BlzYoutubeVideo = "blz-youtube-video"
        }(o || (o = {}));
        const n = globalThis
          , a = n.trustedTypes
          , r = a ? a.createPolicy("lit-html", {
            createHTML: e => e
        }) : void 0
          , s = "$lit$"
          , l = `lit$${Math.random().toFixed(9).slice(2)}$`
          , c = "?" + l
          , d = `<${c}>`
          , u = document
          , p = () => u.createComment("")
          , h = e => null === e || "object" != typeof e && "function" != typeof e
          , b = Array.isArray
          , g = "[ \t\n\f\r]"
          , m = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g
          , v = /-->/g
          , f = />/g
          , y = RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g")
          , w = /'/g
          , _ = /"/g
          , x = /^(?:script|style|textarea|title)$/i
          , z = (e => (t, ...o) => ({
            _$litType$: e,
            strings: t,
            values: o
        }))(1)
          , k = Symbol.for("lit-noChange")
          , S = Symbol.for("lit-nothing")
          , A = new WeakMap
          , E = u.createTreeWalker(u, 129);
        function C(e, t) {
            if (!b(e) || !e.hasOwnProperty("raw"))
                throw Error("invalid template strings array");
            return void 0 !== r ? r.createHTML(t) : t
        }
        const O = (e, t) => {
            const o = e.length - 1
              , n = [];
            let i, a = 2 === t ? "<svg>" : 3 === t ? "<math>" : "", r = m;
            for (let t = 0; t < o; t++) {
                const o = e[t];
                let c, u, p = -1, h = 0;
                for (; h < o.length && (r.lastIndex = h,
                u = r.exec(o),
                null !== u); )
                    h = r.lastIndex,
                    r === m ? "!--" === u[1] ? r = v : void 0 !== u[1] ? r = f : void 0 !== u[2] ? (x.test(u[2]) && (i = RegExp("</" + u[2], "g")),
                    r = y) : void 0 !== u[3] && (r = y) : r === y ? ">" === u[0] ? (r = i ?? m,
                    p = -1) : void 0 === u[1] ? p = -2 : (p = r.lastIndex - u[2].length,
                    c = u[1],
                    r = void 0 === u[3] ? y : '"' === u[3] ? _ : w) : r === _ || r === w ? r = y : r === v || r === f ? r = m : (r = y,
                    i = void 0);
                const b = r === y && e[t + 1].startsWith("/>") ? " " : "";
                a += r === m ? o + d : p >= 0 ? (n.push(c),
                o.slice(0, p) + s + o.slice(p) + l + b) : o + l + (-2 === p ? t : b)
            }
            return [C(e, a + (e[o] || "<?>") + (2 === t ? "</svg>" : 3 === t ? "</math>" : "")), n]
        }
        ;
        class B {
            constructor({strings: e, _$litType$: t}, o) {
                let n;
                this.parts = [];
                let i = 0
                  , r = 0;
                const d = e.length - 1
                  , u = this.parts
                  , [h,b] = O(e, t);
                if (this.el = B.createElement(h, o),
                E.currentNode = this.el.content,
                2 === t || 3 === t) {
                    const e = this.el.content.firstChild;
                    e.replaceWith(...e.childNodes)
                }
                for (; null !== (n = E.nextNode()) && u.length < d; ) {
                    if (1 === n.nodeType) {
                        if (n.hasAttributes())
                            for (const e of n.getAttributeNames())
                                if (e.endsWith(s)) {
                                    const t = b[r++]
                                      , o = n.getAttribute(e).split(l)
                                      , a = /([.?@])?(.*)/.exec(t);
                                    u.push({
                                        type: 1,
                                        index: i,
                                        name: a[2],
                                        strings: o,
                                        ctor: "." === a[1] ? R : "?" === a[1] ? $ : "@" === a[1] ? j : I
                                    }),
                                    n.removeAttribute(e)
                                } else
                                    e.startsWith(l) && (u.push({
                                        type: 6,
                                        index: i
                                    }),
                                    n.removeAttribute(e));
                        if (x.test(n.tagName)) {
                            const e = n.textContent.split(l)
                              , t = e.length - 1;
                            if (t > 0) {
                                n.textContent = a ? a.emptyScript : "";
                                for (let o = 0; o < t; o++)
                                    n.append(e[o], p()),
                                    E.nextNode(),
                                    u.push({
                                        type: 2,
                                        index: ++i
                                    });
                                n.append(e[t], p())
                            }
                        }
                    } else if (8 === n.nodeType)
                        if (n.data === c)
                            u.push({
                                type: 2,
                                index: i
                            });
                        else {
                            let e = -1;
                            for (; -1 !== (e = n.data.indexOf(l, e + 1)); )
                                u.push({
                                    type: 7,
                                    index: i
                                }),
                                e += l.length - 1
                        }
                    i++
                }
            }
            static createElement(e, t) {
                const o = u.createElement("template");
                return o.innerHTML = e,
                o
            }
        }
        function P(e, t, o=e, n) {
            if (t === k)
                return t;
            let i = void 0 !== n ? o._$Co?.[n] : o._$Cl;
            const a = h(t) ? void 0 : t._$litDirective$;
            return i?.constructor !== a && (i?._$AO?.(!1),
            void 0 === a ? i = void 0 : (i = new a(e),
            i._$AT(e, o, n)),
            void 0 !== n ? (o._$Co ??= [])[n] = i : o._$Cl = i),
            void 0 !== i && (t = P(e, i._$AS(e, t.values), i, n)),
            t
        }
        class T {
            constructor(e, t) {
                this._$AV = [],
                this._$AN = void 0,
                this._$AD = e,
                this._$AM = t
            }
            get parentNode() {
                return this._$AM.parentNode
            }
            get _$AU() {
                return this._$AM._$AU
            }
            u(e) {
                const {el: {content: t}, parts: o} = this._$AD
                  , n = (e?.creationScope ?? u).importNode(t, !0);
                E.currentNode = n;
                let i = E.nextNode()
                  , a = 0
                  , r = 0
                  , s = o[0];
                for (; void 0 !== s; ) {
                    if (a === s.index) {
                        let t;
                        2 === s.type ? t = new L(i,i.nextSibling,this,e) : 1 === s.type ? t = new s.ctor(i,s.name,s.strings,this,e) : 6 === s.type && (t = new D(i,this,e)),
                        this._$AV.push(t),
                        s = o[++r]
                    }
                    a !== s?.index && (i = E.nextNode(),
                    a++)
                }
                return E.currentNode = u,
                n
            }
            p(e) {
                let t = 0;
                for (const o of this._$AV)
                    void 0 !== o && (void 0 !== o.strings ? (o._$AI(e, o, t),
                    t += o.strings.length - 2) : o._$AI(e[t])),
                    t++
            }
        }
        class L {
            get _$AU() {
                return this._$AM?._$AU ?? this._$Cv
            }
            constructor(e, t, o, n) {
                this.type = 2,
                this._$AH = S,
                this._$AN = void 0,
                this._$AA = e,
                this._$AB = t,
                this._$AM = o,
                this.options = n,
                this._$Cv = n?.isConnected ?? !0
            }
            get parentNode() {
                let e = this._$AA.parentNode;
                const t = this._$AM;
                return void 0 !== t && 11 === e?.nodeType && (e = t.parentNode),
                e
            }
            get startNode() {
                return this._$AA
            }
            get endNode() {
                return this._$AB
            }
            _$AI(e, t=this) {
                e = P(this, e, t),
                h(e) ? e === S || null == e || "" === e ? (this._$AH !== S && this._$AR(),
                this._$AH = S) : e !== this._$AH && e !== k && this._(e) : void 0 !== e._$litType$ ? this.$(e) : void 0 !== e.nodeType ? this.T(e) : (e => b(e) || "function" == typeof e?.[Symbol.iterator])(e) ? this.k(e) : this._(e)
            }
            O(e) {
                return this._$AA.parentNode.insertBefore(e, this._$AB)
            }
            T(e) {
                this._$AH !== e && (this._$AR(),
                this._$AH = this.O(e))
            }
            _(e) {
                this._$AH !== S && h(this._$AH) ? this._$AA.nextSibling.data = e : this.T(u.createTextNode(e)),
                this._$AH = e
            }
            $(e) {
                const {values: t, _$litType$: o} = e
                  , n = "number" == typeof o ? this._$AC(e) : (void 0 === o.el && (o.el = B.createElement(C(o.h, o.h[0]), this.options)),
                o);
                if (this._$AH?._$AD === n)
                    this._$AH.p(t);
                else {
                    const e = new T(n,this)
                      , o = e.u(this.options);
                    e.p(t),
                    this.T(o),
                    this._$AH = e
                }
            }
            _$AC(e) {
                let t = A.get(e.strings);
                return void 0 === t && A.set(e.strings, t = new B(e)),
                t
            }
            k(e) {
                b(this._$AH) || (this._$AH = [],
                this._$AR());
                const t = this._$AH;
                let o, n = 0;
                for (const i of e)
                    n === t.length ? t.push(o = new L(this.O(p()),this.O(p()),this,this.options)) : o = t[n],
                    o._$AI(i),
                    n++;
                n < t.length && (this._$AR(o && o._$AB.nextSibling, n),
                t.length = n)
            }
            _$AR(e=this._$AA.nextSibling, t) {
                for (this._$AP?.(!1, !0, t); e && e !== this._$AB; ) {
                    const t = e.nextSibling;
                    e.remove(),
                    e = t
                }
            }
            setConnected(e) {
                void 0 === this._$AM && (this._$Cv = e,
                this._$AP?.(e))
            }
        }
        class I {
            get tagName() {
                return this.element.tagName
            }
            get _$AU() {
                return this._$AM._$AU
            }
            constructor(e, t, o, n, i) {
                this.type = 1,
                this._$AH = S,
                this._$AN = void 0,
                this.element = e,
                this.name = t,
                this._$AM = n,
                this.options = i,
                o.length > 2 || "" !== o[0] || "" !== o[1] ? (this._$AH = Array(o.length - 1).fill(new String),
                this.strings = o) : this._$AH = S
            }
            _$AI(e, t=this, o, n) {
                const i = this.strings;
                let a = !1;
                if (void 0 === i)
                    e = P(this, e, t, 0),
                    a = !h(e) || e !== this._$AH && e !== k,
                    a && (this._$AH = e);
                else {
                    const n = e;
                    let r, s;
                    for (e = i[0],
                    r = 0; r < i.length - 1; r++)
                        s = P(this, n[o + r], t, r),
                        s === k && (s = this._$AH[r]),
                        a ||= !h(s) || s !== this._$AH[r],
                        s === S ? e = S : e !== S && (e += (s ?? "") + i[r + 1]),
                        this._$AH[r] = s
                }
                a && !n && this.j(e)
            }
            j(e) {
                e === S ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "")
            }
        }
        class R extends I {
            constructor() {
                super(...arguments),
                this.type = 3
            }
            j(e) {
                this.element[this.name] = e === S ? void 0 : e
            }
        }
        class $ extends I {
            constructor() {
                super(...arguments),
                this.type = 4
            }
            j(e) {
                this.element.toggleAttribute(this.name, !!e && e !== S)
            }
        }
        class j extends I {
            constructor(e, t, o, n, i) {
                super(e, t, o, n, i),
                this.type = 5
            }
            _$AI(e, t=this) {
                if ((e = P(this, e, t, 0) ?? S) === k)
                    return;
                const o = this._$AH
                  , n = e === S && o !== S || e.capture !== o.capture || e.once !== o.once || e.passive !== o.passive
                  , i = e !== S && (o === S || n);
                n && this.element.removeEventListener(this.name, this, o),
                i && this.element.addEventListener(this.name, this, e),
                this._$AH = e
            }
            handleEvent(e) {
                "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e)
            }
        }
        class D {
            constructor(e, t, o) {
                this.element = e,
                this.type = 6,
                this._$AN = void 0,
                this._$AM = t,
                this.options = o
            }
            get _$AU() {
                return this._$AM._$AU
            }
            _$AI(e) {
                P(this, e)
            }
        }
        const N = n.litHtmlPolyfillSupport;
        N?.(B, L),
        (n.litHtmlVersions ??= []).push("3.2.1");
        const M = globalThis
          , F = M.ShadowRoot && (void 0 === M.ShadyCSS || M.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
          , U = Symbol()
          , H = new WeakMap;
        class V {
            constructor(e, t, o) {
                if (this._$cssResult$ = !0,
                o !== U)
                    throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = e,
                this.t = t
            }
            get styleSheet() {
                let e = this.o;
                const t = this.t;
                if (F && void 0 === e) {
                    const o = void 0 !== t && 1 === t.length;
                    o && (e = H.get(t)),
                    void 0 === e && ((this.o = e = new CSSStyleSheet).replaceSync(this.cssText),
                    o && H.set(t, e))
                }
                return e
            }
            toString() {
                return this.cssText
            }
        }
        const q = (e, ...t) => {
            const o = 1 === e.length ? e[0] : t.reduce(( (t, o, n) => t + (e => {
                if (!0 === e._$cssResult$)
                    return e.cssText;
                if ("number" == typeof e)
                    return e;
                throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
            }
            )(o) + e[n + 1]), e[0]);
            return new V(o,e,U)
        }
          , G = F ? e => e : e => e instanceof CSSStyleSheet ? (e => {
            let t = "";
            for (const o of e.cssRules)
                t += o.cssText;
            return (e => new V("string" == typeof e ? e : e + "",void 0,U))(t)
        }
        )(e) : e
          , {is: W, defineProperty: Y, getOwnPropertyDescriptor: K, getOwnPropertyNames: X, getOwnPropertySymbols: Z, getPrototypeOf: J} = Object
          , Q = globalThis
          , ee = Q.trustedTypes
          , te = ee ? ee.emptyScript : ""
          , oe = Q.reactiveElementPolyfillSupport
          , ne = (e, t) => e
          , ie = {
            toAttribute(e, t) {
                switch (t) {
                case Boolean:
                    e = e ? te : null;
                    break;
                case Object:
                case Array:
                    e = null == e ? e : JSON.stringify(e)
                }
                return e
            },
            fromAttribute(e, t) {
                let o = e;
                switch (t) {
                case Boolean:
                    o = null !== e;
                    break;
                case Number:
                    o = null === e ? null : Number(e);
                    break;
                case Object:
                case Array:
                    try {
                        o = JSON.parse(e)
                    } catch (e) {
                        o = null
                    }
                }
                return o
            }
        }
          , ae = (e, t) => !W(e, t)
          , re = {
            attribute: !0,
            type: String,
            converter: ie,
            reflect: !1,
            hasChanged: ae
        };
        Symbol.metadata ??= Symbol("metadata"),
        Q.litPropertyMetadata ??= new WeakMap;
        class se extends HTMLElement {
            static addInitializer(e) {
                this._$Ei(),
                (this.l ??= []).push(e)
            }
            static get observedAttributes() {
                return this.finalize(),
                this._$Eh && [...this._$Eh.keys()]
            }
            static createProperty(e, t=re) {
                if (t.state && (t.attribute = !1),
                this._$Ei(),
                this.elementProperties.set(e, t),
                !t.noAccessor) {
                    const o = Symbol()
                      , n = this.getPropertyDescriptor(e, o, t);
                    void 0 !== n && Y(this.prototype, e, n)
                }
            }
            static getPropertyDescriptor(e, t, o) {
                const {get: n, set: i} = K(this.prototype, e) ?? {
                    get() {
                        return this[t]
                    },
                    set(e) {
                        this[t] = e
                    }
                };
                return {
                    get() {
                        return n?.call(this)
                    },
                    set(t) {
                        const a = n?.call(this);
                        i.call(this, t),
                        this.requestUpdate(e, a, o)
                    },
                    configurable: !0,
                    enumerable: !0
                }
            }
            static getPropertyOptions(e) {
                return this.elementProperties.get(e) ?? re
            }
            static _$Ei() {
                if (this.hasOwnProperty(ne("elementProperties")))
                    return;
                const e = J(this);
                e.finalize(),
                void 0 !== e.l && (this.l = [...e.l]),
                this.elementProperties = new Map(e.elementProperties)
            }
            static finalize() {
                if (this.hasOwnProperty(ne("finalized")))
                    return;
                if (this.finalized = !0,
                this._$Ei(),
                this.hasOwnProperty(ne("properties"))) {
                    const e = this.properties
                      , t = [...X(e), ...Z(e)];
                    for (const o of t)
                        this.createProperty(o, e[o])
                }
                const e = this[Symbol.metadata];
                if (null !== e) {
                    const t = litPropertyMetadata.get(e);
                    if (void 0 !== t)
                        for (const [e,o] of t)
                            this.elementProperties.set(e, o)
                }
                this._$Eh = new Map;
                for (const [e,t] of this.elementProperties) {
                    const o = this._$Eu(e, t);
                    void 0 !== o && this._$Eh.set(o, e)
                }
                this.elementStyles = this.finalizeStyles(this.styles)
            }
            static finalizeStyles(e) {
                const t = [];
                if (Array.isArray(e)) {
                    const o = new Set(e.flat(1 / 0).reverse());
                    for (const e of o)
                        t.unshift(G(e))
                } else
                    void 0 !== e && t.push(G(e));
                return t
            }
            static _$Eu(e, t) {
                const o = t.attribute;
                return !1 === o ? void 0 : "string" == typeof o ? o : "string" == typeof e ? e.toLowerCase() : void 0
            }
            constructor() {
                super(),
                this._$Ep = void 0,
                this.isUpdatePending = !1,
                this.hasUpdated = !1,
                this._$Em = null,
                this._$Ev()
            }
            _$Ev() {
                this._$ES = new Promise((e => this.enableUpdating = e)),
                this._$AL = new Map,
                this._$E_(),
                this.requestUpdate(),
                this.constructor.l?.forEach((e => e(this)))
            }
            addController(e) {
                (this._$EO ??= new Set).add(e),
                void 0 !== this.renderRoot && this.isConnected && e.hostConnected?.()
            }
            removeController(e) {
                this._$EO?.delete(e)
            }
            _$E_() {
                const e = new Map
                  , t = this.constructor.elementProperties;
                for (const o of t.keys())
                    this.hasOwnProperty(o) && (e.set(o, this[o]),
                    delete this[o]);
                e.size > 0 && (this._$Ep = e)
            }
            createRenderRoot() {
                const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
                return ( (e, t) => {
                    if (F)
                        e.adoptedStyleSheets = t.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet));
                    else
                        for (const o of t) {
                            const t = document.createElement("style")
                              , n = M.litNonce;
                            void 0 !== n && t.setAttribute("nonce", n),
                            t.textContent = o.cssText,
                            e.appendChild(t)
                        }
                }
                )(e, this.constructor.elementStyles),
                e
            }
            connectedCallback() {
                this.renderRoot ??= this.createRenderRoot(),
                this.enableUpdating(!0),
                this._$EO?.forEach((e => e.hostConnected?.()))
            }
            enableUpdating(e) {}
            disconnectedCallback() {
                this._$EO?.forEach((e => e.hostDisconnected?.()))
            }
            attributeChangedCallback(e, t, o) {
                this._$AK(e, o)
            }
            _$EC(e, t) {
                const o = this.constructor.elementProperties.get(e)
                  , n = this.constructor._$Eu(e, o);
                if (void 0 !== n && !0 === o.reflect) {
                    const i = (void 0 !== o.converter?.toAttribute ? o.converter : ie).toAttribute(t, o.type);
                    this._$Em = e,
                    null == i ? this.removeAttribute(n) : this.setAttribute(n, i),
                    this._$Em = null
                }
            }
            _$AK(e, t) {
                const o = this.constructor
                  , n = o._$Eh.get(e);
                if (void 0 !== n && this._$Em !== n) {
                    const e = o.getPropertyOptions(n)
                      , i = "function" == typeof e.converter ? {
                        fromAttribute: e.converter
                    } : void 0 !== e.converter?.fromAttribute ? e.converter : ie;
                    this._$Em = n,
                    this[n] = i.fromAttribute(t, e.type),
                    this._$Em = null
                }
            }
            requestUpdate(e, t, o) {
                if (void 0 !== e) {
                    if (o ??= this.constructor.getPropertyOptions(e),
                    !(o.hasChanged ?? ae)(this[e], t))
                        return;
                    this.P(e, t, o)
                }
                !1 === this.isUpdatePending && (this._$ES = this._$ET())
            }
            P(e, t, o) {
                this._$AL.has(e) || this._$AL.set(e, t),
                !0 === o.reflect && this._$Em !== e && (this._$Ej ??= new Set).add(e)
            }
            async _$ET() {
                this.isUpdatePending = !0;
                try {
                    await this._$ES
                } catch (e) {
                    Promise.reject(e)
                }
                const e = this.scheduleUpdate();
                return null != e && await e,
                !this.isUpdatePending
            }
            scheduleUpdate() {
                return this.performUpdate()
            }
            performUpdate() {
                if (!this.isUpdatePending)
                    return;
                if (!this.hasUpdated) {
                    if (this.renderRoot ??= this.createRenderRoot(),
                    this._$Ep) {
                        for (const [e,t] of this._$Ep)
                            this[e] = t;
                        this._$Ep = void 0
                    }
                    const e = this.constructor.elementProperties;
                    if (e.size > 0)
                        for (const [t,o] of e)
                            !0 !== o.wrapped || this._$AL.has(t) || void 0 === this[t] || this.P(t, this[t], o)
                }
                let e = !1;
                const t = this._$AL;
                try {
                    e = this.shouldUpdate(t),
                    e ? (this.willUpdate(t),
                    this._$EO?.forEach((e => e.hostUpdate?.())),
                    this.update(t)) : this._$EU()
                } catch (t) {
                    throw e = !1,
                    this._$EU(),
                    t
                }
                e && this._$AE(t)
            }
            willUpdate(e) {}
            _$AE(e) {
                this._$EO?.forEach((e => e.hostUpdated?.())),
                this.hasUpdated || (this.hasUpdated = !0,
                this.firstUpdated(e)),
                this.updated(e)
            }
            _$EU() {
                this._$AL = new Map,
                this.isUpdatePending = !1
            }
            get updateComplete() {
                return this.getUpdateComplete()
            }
            getUpdateComplete() {
                return this._$ES
            }
            shouldUpdate(e) {
                return !0
            }
            update(e) {
                this._$Ej &&= this._$Ej.forEach((e => this._$EC(e, this[e]))),
                this._$EU()
            }
            updated(e) {}
            firstUpdated(e) {}
        }
        se.elementStyles = [],
        se.shadowRootOptions = {
            mode: "open"
        },
        se[ne("elementProperties")] = new Map,
        se[ne("finalized")] = new Map,
        oe?.({
            ReactiveElement: se
        }),
        (Q.reactiveElementVersions ??= []).push("2.0.4");
        const le = {
            attribute: !0,
            type: String,
            converter: ie,
            reflect: !1,
            hasChanged: ae
        }
          , ce = (e=le, t, o) => {
            const {kind: n, metadata: i} = o;
            let a = globalThis.litPropertyMetadata.get(i);
            if (void 0 === a && globalThis.litPropertyMetadata.set(i, a = new Map),
            a.set(o.name, e),
            "accessor" === n) {
                const {name: n} = o;
                return {
                    set(o) {
                        const i = t.get.call(this);
                        t.set.call(this, o),
                        this.requestUpdate(n, i, e)
                    },
                    init(t) {
                        return void 0 !== t && this.P(n, void 0, e),
                        t
                    }
                }
            }
            if ("setter" === n) {
                const {name: n} = o;
                return function(o) {
                    const i = this[n];
                    t.call(this, o),
                    this.requestUpdate(n, i, e)
                }
            }
            throw Error("Unsupported decorator location: " + n)
        }
        ;
        function de(e) {
            return (t, o) => "object" == typeof o ? ce(e, t, o) : ( (e, t, o) => {
                const n = t.hasOwnProperty(o);
                return t.constructor.createProperty(o, n ? {
                    ...e,
                    wrapped: !0
                } : e),
                n ? Object.getOwnPropertyDescriptor(t, o) : void 0
            }
            )(e, t, o)
        }
        const ue = (e, t, o) => (o.configurable = !0,
        o.enumerable = !0,
        Reflect.decorate && "object" != typeof t && Object.defineProperty(e, t, o),
        o);
        function pe(e) {
            return (t, o) => {
                const {slot: n} = e ?? {}
                  , i = "slot" + (n ? `[name=${n}]` : ":not([name])");
                return ue(t, o, {
                    get() {
                        const t = this.renderRoot?.querySelector(i);
                        return t?.assignedNodes(e) ?? []
                    }
                })
            }
        }
        class he extends se {
            constructor() {
                super(...arguments),
                this.renderOptions = {
                    host: this
                },
                this._$Do = void 0
            }
            createRenderRoot() {
                const e = super.createRenderRoot();
                return this.renderOptions.renderBefore ??= e.firstChild,
                e
            }
            update(e) {
                const t = this.render();
                this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
                super.update(e),
                this._$Do = ( (e, t, o) => {
                    const n = o?.renderBefore ?? t;
                    let i = n._$litPart$;
                    if (void 0 === i) {
                        const e = o?.renderBefore ?? null;
                        n._$litPart$ = i = new L(t.insertBefore(p(), e),e,void 0,o ?? {})
                    }
                    return i._$AI(e),
                    i
                }
                )(t, this.renderRoot, this.renderOptions)
            }
            connectedCallback() {
                super.connectedCallback(),
                this._$Do?.setConnected(!0)
            }
            disconnectedCallback() {
                super.disconnectedCallback(),
                this._$Do?.setConnected(!1)
            }
            render() {
                return k
            }
        }
        he._$litElement$ = !0,
        he.finalized = !0,
        globalThis.litElementHydrateSupport?.({
            LitElement: he
        });
        const be = globalThis.litElementPolyfillSupport;
        function ge(e, t, o) {
            var n, i = o || {}, a = i.noTrailing, r = void 0 !== a && a, s = i.noLeading, l = void 0 !== s && s, c = i.debounceMode, d = void 0 === c ? void 0 : c, u = !1, p = 0;
            function h() {
                n && clearTimeout(n)
            }
            function b() {
                for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
                    i[a] = arguments[a];
                var s = this
                  , c = Date.now() - p;
                function b() {
                    p = Date.now(),
                    t.apply(s, i)
                }
                function g() {
                    n = void 0
                }
                u || (l || !d || n || b(),
                h(),
                void 0 === d && c > e ? l ? (p = Date.now(),
                r || (n = setTimeout(d ? g : b, e))) : b() : !0 !== r && (n = setTimeout(d ? g : b, void 0 === d ? e - c : e)))
            }
            return b.cancel = function(e) {
                var t = (e || {}).upcomingOnly
                  , o = void 0 !== t && t;
                h(),
                u = !o
            }
            ,
            b
        }
        function me(e, t, o) {
            var n = (o || {}).atBegin;
            return ge(e, t, {
                debounceMode: !1 !== (void 0 !== n && n)
            })
        }
        be?.({
            LitElement: he
        }),
        (globalThis.litElementVersions ??= []).push("4.1.1");
        const ve = (e, t, o) => {
            const n = e.querySelector(t ? `slot[name="${t}"]` : "slot:not([name])")
              , i = n.assignedElements({
                flatten: !0
            })
              , a = [];
            if (i && i.length > 0)
                return i.map(( (e, t) => o(e, t)));
            {
                const {children: e} = n;
                for (let t = 0; t < e.length; t++) {
                    const n = e[t];
                    a.push(o(n, t))
                }
            }
            return a
        }
        ;
        const fe = ({vertical: e, index: t, length: o, callback: n}) => {
            const i = e ? "ArrowDown" : "ArrowRight"
              , a = e ? "ArrowUp" : "ArrowLeft"
              , r = [i, a, "Home", "End"];
            return e => {
                r.includes(e.key) && e.preventDefault();
                let s = 0;
                e.key === i ? (s = t + 1 < o ? t + 1 : 0,
                n(s)) : e.key === a ? (s = t - 1 >= 0 ? t - 1 : o - 1,
                n(s)) : "Home" === e.key ? n(s) : "End" === e.key && (s = o - 1,
                n(s))
            }
        }
          , ye = 'a, button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), blz-video, blz-accordion, blz-comparison-slider, blz-button, blz-icon-button, blz-tabs, blz-nav-link, blz-toggle, blz-tab-control'
          , we = e => window.getComputedStyle(document.body).getPropertyValue(e).slice(0, -2).trim()
          , _e = (e, t) => {
            e && ((e => {
                const t = e.getBoundingClientRect();
                return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
            }
            )(e) || ("horizontal" === t?.orientation ? t.container.scrollLeft = e.offsetLeft : e.scrollIntoView(t)))
        }
          , xe = (e, t) => {
            e && (e => !!e.detail)(e) ? (e => {
                e.focus();
                let t = document.activeElement;
                for (; t.shadowRoot && t.shadowRoot.activeElement; )
                    t = t.shadowRoot.activeElement;
                t.classList.add("remove-outline"),
                t.addEventListener("blur", (function() {
                    t.classList.remove("remove-outline")
                }
                ), {
                    once: !0
                })
            }
            )(t) : t.focus()
        }
          , ze = (e, t, o) => {
            const n = e.getAttribute("part")?.split(" ") || []
              , i = n.findIndex((e => e === t));
            void 0 === o && i > -1 || !o && n.includes(t) ? n.splice(i, 1) : (void 0 === o && -1 === i || o && !n.includes(t)) && n.push(t),
            e.setAttribute("part", n.join(" "))
        }
          , ke = e => {
            const t = window.getComputedStyle(e);
            return !("none" === t.display || "hidden" === t.visibility || "0" === t.opacity)
        }
          , Se = (...e) => e.filter(Boolean).join(" || ")
          , Ae = e => e.parentElement ? [].concat(e).concat(...Ae(e.parentElement)) : [e]
          , Ee = e => {
            let t, o, n = !1, i = !1;
            e.addEventListener("click", (e => {
                if (i)
                    return i = !1,
                    e.preventDefault()
            }
            )),
            e.addEventListener("mousedown", (i => {
                const {scrollLeft: a, offsetLeft: r} = e;
                n = !0,
                e.classList.add("active"),
                t = i.pageX - r,
                o = a,
                s()
            }
            )),
            e.addEventListener("mouseleave", ( () => {
                n = !1,
                i = !1,
                e.classList.remove("active")
            }
            )),
            e.addEventListener("mouseup", ( () => {
                n = !1,
                e.classList.remove("active"),
                s(),
                a = requestAnimationFrame(l)
            }
            )),
            e.addEventListener("mousemove", (a => {
                if (!n)
                    return;
                a.preventDefault(),
                i = !0;
                const s = 3 * (a.pageX - e.offsetLeft - t)
                  , l = e.scrollLeft;
                e.scrollLeft = o - s,
                r = e.scrollLeft - l
            }
            )),
            e.addEventListener("wheel", ( () => {
                s()
            }
            ));
            let a, r = 0;
            function s() {
                cancelAnimationFrame(a)
            }
            function l() {
                e.scrollLeft += r,
                r *= .95,
                Math.abs(r) > .5 && (a = requestAnimationFrame(l))
            }
        }
          , Ce = ["min", "xs", "sm", "md", "lg", "xl", "xxl", "max"]
          , Oe = new RegExp(`^(?:${Ce.join("|")})(?:-(?:plus|less))?$`,"i");
        var Be = e => Pe(e);
        const Pe = e => {
            const t = {}
              , o = Array.from(e.attributes).reduce(( (e, t) => {
                const o = t.nodeName.includes("--") ? "--" : ":"
                  , n = t.nodeName.substring(0, t.nodeName.lastIndexOf(o))
                  , i = t.nodeName.substring(t.nodeName.lastIndexOf(o) + o.length, t.nodeName.length);
                if (-1 !== i.search(Oe)) {
                    const o = e[n] || {
                        less: [],
                        plus: [],
                        bp: []
                    }
                      , a = {
                        breakpoint: i,
                        nodeValue: t.nodeValue || ""
                    };
                    -1 !== a.breakpoint.indexOf("-less") ? o.less.push(a) : -1 !== a.breakpoint.indexOf("-plus") ? o.plus.push(a) : o.bp.push(a),
                    e[n] = o
                }
                return e
            }
            ), {});
            Object.keys(o).length && (Object.keys(o).forEach((n => {
                const i = Object.keys(o[n]).reduce(( (e, t) => e.concat(o[n][t].sort(( (e, t) => Ce.indexOf(e.breakpoint.replace(/-less$|-plus$/, "")) - Ce.indexOf(t.breakpoint.replace(/-less$|-plus$/, "")))))), []);
                i.forEach(( ({breakpoint: o, nodeValue: i}) => {
                    let a = [];
                    const r = -1 !== o.indexOf("-less")
                      , s = -1 !== o.indexOf("-plus")
                      , l = o.split("-")[0]
                      , c = Ce.findIndex((e => e === l));
                    if (a = r ? [...Ce.slice(0, c + 1)] : s ? [...Ce.slice(c)] : [Ce[c]],
                    void 0 === t[n] && (t[n] = {},
                    e.hasAttribute(n))) {
                        const o = e.getAttribute(n) || "";
                        t[n] = Object.fromEntries(Ce.map((e => [e, o])))
                    }
                    for (const e of a)
                        t[n][e] = i
                }
                ))
            }
            )),
            Te(e, t),
            window.addEventListener("resize", ge(500, ( () => Te(e, t)))))
        }
          , Te = (e, t) => {
            const o = Le(window);
            for (const n in t)
                void 0 !== t[n][o] && e.getAttribute(n) !== t[n][o] ? e.setAttribute(n, t[n][o]) : void 0 === t[n][o] && e.hasAttribute(n) && e.removeAttribute(n)
        }
          , Le = (e=window) => {
            const t = Ce.map((e => parseInt(we(`--view-${e}`))))
              , o = t.findIndex((t => e.innerWidth < t));
            return o < 0 ? Ce[t.length - 1] : 0 === o ? Ce[0] : Ce[o - 1]
        }
        ;
        var Ie = "3.12.0";
        const Re = "Android"
          , $e = "iOS"
          , je = "macOS"
          , De = "Windows"
          , Ne = "Other"
          , Me = "data-device-type"
          , Fe = "data-geo-country"
          , Ue = "data-geo-subdivision"
          , He = () => {
            const e = window.navigator.userAgent || window.navigator.vendor || window.opera
              , {platform: t} = navigator
              , o = {
                ios: ["iPad", "iPhone", "iPod", "iPad Simulator", "iPhone Simulator", "iPod Simulator"],
                mac: ["macOS", "Macintosh", "MacIntel", "MacPPC", "Mac68K"],
                windows: ["Win32", "Win64", "Windows", "WinCE"]
            };
            let n = Ne;
            return /android/i.test(e) ? n = Re : -1 !== o.ios.indexOf(t) || e.includes("Mac") && "ontouchend"in document ? n = $e : -1 !== o.mac.indexOf(t) ? n = je : -1 !== o.windows.indexOf(t) && (n = De),
            n
        }
          , Ve = (e, t=["interactive", "complete"]) => {
            Array.isArray(t) || (t = [t]),
            t.includes(document.readyState) ? e() : document.addEventListener("readystatechange", ( () => Ve(e, t)), {
                once: !0
            })
        }
          , qe = (e, t=!0) => {
            if (!e)
                return;
            !t && window.blz.geo || (window.blz.geo = e),
            !t && document.documentElement.hasAttribute(Fe) || document.documentElement.setAttribute(Fe, e.country),
            !t && document.documentElement.hasAttribute(Ue) || document.documentElement.setAttribute(Ue, e.subdivision);
            let o = document.querySelector("style[data-blz-geo]");
            if (t || !o) {
                o && o.remove();
                let t = `[${Fe}='${e.country}'] [blz-geo-country]:not([blz-geo-country~='${e.country}' i]) { display: none; } `;
                t += `[${Ue}='${e.subdivision}'] [blz-geo-subdivision]:not([blz-geo-subdivision~='${e.subdivision}' i]) { display: none; } `,
                t += `[${Fe}='${e.country}'] [blz-geo-exclude-country~='${e.country}' i]:not([blz-geo-exclude-subdivision]) { display: none; } `,
                t += `[${Ue}='${e.subdivision}'] [blz-geo-exclude-country~='${e.country}' i][blz-geo-exclude-subdivision~='${e.subdivision}' i] { display: none; }`;
                const n = document.head || document.getElementsByTagName("head")[0];
                o = document.createElement("style"),
                n.appendChild(o),
                o.setAttribute("data-blz-geo", ""),
                o.appendChild(document.createTextNode(t))
            }
            Ve(( () => window.dispatchEvent(new CustomEvent("blz-geo:setup",{
                detail: window.blz.geo
            }))))
        }
        ;
        "undefined" == typeof window || window.setupBlzGeo || (window.setupBlzGeo = qe);
        var Ge, We = q`*,:host{box-sizing:border-box}:host{display:block}::slotted(:not(:defined)),:not(:defined){opacity:0}::slotted(:defined),:defined{opacity:1}:host([aspect-ratio])>*{height:100%!important;left:0;position:absolute;top:0;width:100%!important}:focus:not(:focus-visible){outline:0}::slotted(h1),::slotted(h2),::slotted(h3),::slotted(h4),::slotted(h5),::slotted(h6),::slotted(p),p{font-size:inherit;margin:0}::slotted(a){color:inherit;text-decoration:none}button{background:0 0;border:none;color:inherit;cursor:pointer;font:inherit;padding:0}`, Ye = q`.blz-body-text-xxl{font:var(--semantic-body-text-xxl)}.blz-body-text-xl{font:var(--semantic-body-text-xl)}.blz-body-text-lg{font:var(--semantic-body-text-lg)}.blz-body-text-md{font:var(--semantic-body-text-md)}.blz-body-text-sm{font:var(--semantic-body-text-sm)}.blz-body-text-lg,.blz-body-text-lg::slotted(*),.blz-body-text-md,.blz-body-text-md::slotted(*),.blz-body-text-sm,.blz-body-text-sm::slotted(*),.blz-body-text-xl,.blz-body-text-xl::slotted(*),.blz-body-text-xxl,.blz-body-text-xxl::slotted(*){color:var(--global-color-content-700)}.blz-heading-text-xxl{font:var(--semantic-heading-text-xxl)}.blz-heading-text-xl{font:var(--semantic-heading-text-xl)}.blz-heading-text-lg{font:var(--semantic-heading-text-lg)}.blz-heading-text-md{font:var(--semantic-heading-text-md)}.blz-heading-text-sm{font:var(--semantic-heading-text-sm)}.blz-heading-text-xs{font:var(--semantic-heading-text-xs)}.blz-heading-text-xxs{font:var(--semantic-heading-text-xxs)}.blz-heading-text-lg,.blz-heading-text-lg::slotted(*),.blz-heading-text-md,.blz-heading-text-md::slotted(*),.blz-heading-text-sm,.blz-heading-text-sm::slotted(*),.blz-heading-text-xl,.blz-heading-text-xl::slotted(*),.blz-heading-text-xs,.blz-heading-text-xs::slotted(*),.blz-heading-text-xxl,.blz-heading-text-xxl::slotted(*),.blz-heading-text-xxs{color:var(--semantic-color-content-default);margin:0}.blz-link{color:var(--semantic-color-text-link-default);font-weight:var(--global-font-weight-bold);text-decoration:none;text-underline-position:under}h1>.blz-link,h2>.blz-link,h3>.blz-link,h4>.blz-link,h5>.blz-link,h6>.blz-link,p>.blz-link{text-decoration:underline}.blz-link:active,.blz-link:visited{color:var(--semantic-color-text-link-default);font-weight:var(--global-font-weight-bold);text-decoration:none;text-underline-position:under}.blz-link.hover,.blz-link:hover{color:var(--semantic-color-text-link-hover);text-decoration:underline}.blz-subheading-text-lg{font:var(--semantic-subheading-text-lg)}.blz-subheading-text-lg,.blz-subheading-text-md{letter-spacing:var(--semantic-subheading-letter-spacing);text-transform:uppercase}.blz-subheading-text-md{font:var(--semantic-subheading-text-md)}.blz-subheading-text-lg,.blz-subheading-text-lg::slotted(*),.blz-subheading-text-md,.blz-subheading-text-md::slotted(*){margin:0}.blz-title-text-lg{font:var(--semantic-title-text-lg)}.blz-title-text-md{font:var(--semantic-title-text-md)}.blz-title-text-sm{font:var(--semantic-title-text-sm)}.blz-title-text-lg,.blz-title-text-lg::slotted(*),.blz-title-text-md,.blz-title-text-md::slotted(*),.blz-title-text-sm,.blz-title-text-sm::slotted(*){color:var(--semantic-color-content-default);margin:0}.blz-body,.blz-body-lead,.blz-body-lead::slotted(*),.blz-body-lede,.blz-body-lede::slotted(*),.blz-body::slotted(*),.blz-text,.blz-text::slotted(*),[class*=" blz-label"],[class*=" blz-label"]::slotted(*),[class^=blz-label],[class^=blz-label]::slotted(*){color:var(--global-color-content-700);font:var(--semantic-body-text-xl)}.blz-body-sm,.blz-body-sm::slotted(*),.blz-label,.blz-label::slotted(*){font:var(--semantic-body-text-md)}.blz-body-xs,.blz-body-xs::slotted(*),.blz-label-sm,.blz-label-sm::slotted(*){font:var(--semantic-body-text-sm)}.blz-body,.blz-body-lead,.blz-body-lead::slotted(*),.blz-body-lede,.blz-body-lede::slotted(*),.blz-body::slotted(*),[class*=" blz-label"],[class*=" blz-label"]::slotted(*),[class^=blz-label],[class^=blz-label]::slotted(*){line-height:var(--global-font-line-height-comfy);margin:0}.blz-body-lead,.blz-body-lead::slotted(*),.blz-body-lede,.blz-body-lede::slotted(*){font:var(--semantic-body-text-xxl)}[class*=" blz-heading"],[class*=" blz-heading"]::slotted(*),[class^=blz-heading],[class^=blz-heading]::slotted(*){color:var(--semantic-color-content-default);margin:0}.blz-heading-xl,.blz-heading-xl::slotted(*){font:var(--header-heading-font-xl)}.blz-heading-lg,.blz-heading-lg::slotted(*){font:var(--header-heading-font-lg)}.blz-heading,.blz-heading::slotted(*){font:var(--header-heading-font-md)}.blz-heading-sm,.blz-heading-sm::slotted(*){font:var(--header-heading-font-sm)}.blz-heading-xs,.blz-heading-xs::slotted(*){font:var(--header-heading-font-xs)}.blz-heading-xxs,.blz-heading-xxs::slotted(*){font:var(--header-heading-font-xxs)}.blz-subheading-lg,.blz-subheading-lg::slotted(*){font:var(--semantic-subheading-text-lg);letter-spacing:var(--semantic-subheading-letter-spacing);text-transform:uppercase}.blz-subheading,.blz-subheading::slotted(*){font:var(--semantic-subheading-text-md);letter-spacing:var(--semantic-subheading-letter-spacing);text-transform:uppercase}`, Ke = q`[screen-reader-only]{clip:rect(0,0,0,0);border:0;height:1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}`, Xe = q`.remove-outline:focus{outline:0}`, Ze = function(e, t, o, n) {
            if ("a" === o && !n)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === o ? n : "a" === o ? n.call(e) : n ? n.value : t.get(e)
        }, Je = function(e, t, o, n, i) {
            if ("m" === n)
                throw new TypeError("Private method is not writable");
            if ("a" === n && !i)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === n ? i.call(e, o) : i ? i.value = o : t.set(e, o),
            o
        };
        class Qe extends he {
            constructor() {
                super(),
                this._firstUpdated = !1,
                this.slotListeners = {},
                this._dependencies = {},
                Ge.set(this, {}),
                this._attachSlotChangeListener = ({slotName: e}) => {
                    this._getSlotsAndCallback({
                        slotName: e,
                        callback: t => {
                            this.slotListeners[e] || (this.slotListeners[e] = e => {
                                this._setDefaultSlottedAttributes({
                                    slot: e.target
                                })
                            }
                            ),
                            t.addEventListener("slotchange", this.slotListeners[e])
                        }
                    })
                }
                ,
                this._getSlotsAndCallback = ({slotName: e, callback: t}) => {
                    const o = this.shadowRoot?.querySelectorAll("default" === e ? "slot:not([name])" : `slot[name^="${e}"]`) || [];
                    Object.entries(o).forEach(( ([,e]) => {
                        t(e)
                    }
                    ))
                }
                ,
                this._setDefaultSlottedAttributes = ({slot: e, overwrite: t, defaultAttributes: o}) => {
                    const n = e && "assignedElements"in e ? e.assignedElements({
                        flatten: !0
                    }) : [];
                    if (!o && e) {
                        const t = "assignedElements"in e && e.getAttribute("name") || "default";
                        o = this._defaultSlottedAttributes[t]
                    }
                    n.length && o && Object.entries(o).forEach(( ([e,o]) => {
                        Object.entries(n).forEach(( ([,n]) => {
                            n.tagName?.toLowerCase() !== e && "*" !== e || Object.entries(o).forEach(( ([e,o]) => {
                                let i = "function" == typeof o.value ? o.value(this) : o.value;
                                if (void 0 !== i)
                                    if ("class" === e)
                                        for (const e of i.split(" "))
                                            n.classList.add(e);
                                    else
                                        n.hasAttribute(e) && !t || (!0 === i && (i = ""),
                                        n.setAttribute(e, i))
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ,
                Object.entries(this.componentDependencies).forEach(( ([e,t]) => {
                    ( (e, t) => {
                        try {
                            customElements.define(e, t)
                        } catch (o) {
                            const {message: n} = o;
                            if (n.includes("this constructor") || n.includes("have the same constructor") || n.includes("multiple custom elements with the same class"))
                                customElements.define(e, class extends t {
                                }
                                );
                            else {
                                if (n.includes("the name") || n.includes("this name") || n.includes("same tag name") || n.includes("multiple custom elements with the same tag name"))
                                    return;
                                console.error(n)
                            }
                        }
                    }
                    )(e, t)
                }
                ))
            }
            get _defaultSlottedAttributes() {
                return Ze(this, Ge, "f")
            }
            set _defaultSlottedAttributes(e) {
                Je(this, Ge, e, "f")
            }
            get componentDependencies() {
                return {}
            }
            get tag() {
                return this.tagName.toLowerCase()
            }
            firstUpdated(e) {
                if (this._initializeBlzWindow(),
                this._firstUpdated = !0,
                Be(this),
                this._defaultSlottedAttributes) {
                    this.slotListeners = {};
                    for (const [e,t] of Object.entries(this._defaultSlottedAttributes)) {
                        for (const o of Object.values(t))
                            for (const [t,n] of Object.entries(o))
                                if ("function" == typeof n.value) {
                                    const o = n.watch || [t];
                                    for (const t of o)
                                        this._dependencies[t] || (this._dependencies[t] = []),
                                        this._dependencies[t].includes(e) || this._dependencies[t].push(e)
                                }
                        this._attachSlotChangeListener({
                            slotName: e
                        })
                    }
                }
                "complete" === document.readyState ? this._dispatchUpdatedEvent("first-updated", e) : document.addEventListener("readystatechange", ( () => this._readyStateDefer("first-updated", e)))
            }
            updated(e) {
                const t = this._firstUpdated;
                delete this._firstUpdated,
                e.forEach(( (e, o) => {
                    const n = o.toString().split(/(?=[A-Z])/).join("-").toLowerCase();
                    if (this._dependencies[n])
                        for (const e of this._dependencies[n])
                            this._getSlotsAndCallback({
                                slotName: e,
                                callback: e => {
                                    this._setDefaultSlottedAttributes({
                                        slot: e,
                                        overwrite: !t
                                    })
                                }
                            })
                }
                )),
                e.size && ("complete" === document.readyState ? this._dispatchUpdatedEvent("updated", e) : document.addEventListener("readystatechange", ( () => this._readyStateDefer("updated", e))))
            }
            disconnectedCallback() {
                super.disconnectedCallback(),
                this._disconnect()
            }
            _readyStateDefer(e, t) {
                "complete" === document.readyState && (this._dispatchUpdatedEvent(e, t),
                document.removeEventListener("readystatechange", ( () => this._readyStateDefer(e, t))))
            }
            _dispatchUpdatedEvent(e, t) {
                this.dispatchEvent(new CustomEvent(`${this.nodeName ? `${this.nodeName.toLowerCase()}:` : ""}${e}`,{
                    composed: !0,
                    detail: t
                }))
            }
            _initializeBlzWindow() {
                window.blz || (window.blz = {
                    debug: {
                        version: {}
                    },
                    ootbAnalytics: "configurable",
                    os: He()
                }),
                window.blz.os || (window.blz.os = He()),
                window.blz.ootbAnalytics || (window.blz.ootbAnalytics = "configurable"),
                document.documentElement.hasAttribute(Me) || document.documentElement.setAttribute(Me, window.blz.os),
                window.blz.debug = window.blz.debug || {},
                window.blz.debug.version = window.blz.debug.version || {},
                window.blz?.debug?.version[this.tag] || (window.blz.debug.version[this.tag] = Ie)
            }
            _disconnect() {
                this.slotListeners && Object.entries(this.slotListeners).forEach(( ([e,t]) => {
                    this._getSlotsAndCallback({
                        slotName: e,
                        callback: e => {
                            e.removeEventListener("slotchange", t)
                        }
                    })
                }
                ))
            }
        }
        Ge = new WeakMap,
        Qe.styles = [We, Ye, Ke, Xe],
        Qe.DEFAULT_RESIZE_THROTTLE_DELAY_MS = 500;
        var et = Qe
          , tt = q`.accordion-container{display:grid;grid-auto-flow:column dense;grid-column-gap:var(--semantic-grid-gap-xl-mobile)}:host([layout=center]) .accordion-container{grid-template-columns:[accordion-start] 1fr [accordion-end]}:host([layout=left]) .accordion-container{grid-template-columns:[accordion-start] 2fr [accordion-end media-start] 3fr [media-end]}:host([layout=right]) .accordion-container{grid-template-columns:[media-start] 3fr [media-end accordion-start] 2fr [accordion-end]}:host([layout=left]) blz-section,:host([layout=right]) blz-section{min-height:336px}slot[name=accordion]::slotted(*){grid-column:accordion-start/accordion-end}slot[name=media]::slotted(*){display:flex;grid-column:media-start/media-end;max-width:100%}:host([media-alignment=top]) slot[name=media]::slotted(*){place-self:flex-start}:host([media-alignment=center]) slot[name=media]::slotted(*){place-self:center}:host([media-alignment=bottom]) slot[name=media]::slotted(*){place-self:flex-end}slot[name=media]::slotted(:not(.media-active)){height:0;opacity:0;visibility:hidden}slot[name=media]::slotted(.media-active){opacity:1}.media-group{display:block}:host([media-alignment=top]) .media-group{align-self:flex-start}:host([media-alignment=center]) .media-group{align-self:center}:host([media-alignment=bottom]) .media-group{align-self:flex-end}@media (min-width:720px){.accordion-container{grid-column-gap:var(--semantic-grid-gap-xl-desktop)}:host([layout=left]) blz-section,:host([layout=right]) blz-section{min-height:648px}}`
          , ot = q`@media (max-width:479px){[bp]:not([bp~="+min"]):not([bp~=min]):not([bp~="min+"]):not([bp~="+xs"]):not([bp~="+sm"]):not([bp~="+md"]):not([bp~="+lg"]):not([bp~="+xl"]):not([bp~="+xxl"]):not([bp~="+max"]){display:none}}@media (min-width:480px) and (max-width:719px){[bp]:not([bp~="min+"]):not([bp~="+xs"]):not([bp~=xs]):not([bp~="xs+"]):not([bp~="+sm"]):not([bp~="+md"]):not([bp~="+lg"]):not([bp~="+xl"]):not([bp~="+xxl"]):not([bp~="+max"]){display:none}}@media (min-width:720px) and (max-width:959px){[bp]:not([bp~="min+"]):not([bp~="xs+"]):not([bp~="+sm"]):not([bp~=sm]):not([bp~="sm+"]):not([bp~="+md"]):not([bp~="+lg"]):not([bp~="+xl"]):not([bp~="+xxl"]):not([bp~="+max"]){display:none}}@media (min-width:960px) and (max-width:1199px){[bp]:not([bp~="min+"]):not([bp~="xs+"]):not([bp~="sm+"]):not([bp~="+md"]):not([bp~=md]):not([bp~="md+"]):not([bp~="+lg"]):not([bp~="+xl"]):not([bp~="+xxl"]):not([bp~="+max"]){display:none}}@media (min-width:1200px) and (max-width:1399px){[bp]:not([bp~="min+"]):not([bp~="xs+"]):not([bp~="sm+"]):not([bp~="md+"]):not([bp~="+lg"]):not([bp~=lg]):not([bp~="lg+"]):not([bp~="+xl"]):not([bp~="+xxl"]):not([bp~="+max"]){display:none}}@media (min-width:1400px) and (max-width:1599px){[bp]:not([bp~="min+"]):not([bp~="xs+"]):not([bp~="sm+"]):not([bp~="md+"]):not([bp~="lg+"]):not([bp~="+xl"]):not([bp~=xl]):not([bp~="xl+"]):not([bp~="+xxl"]):not([bp~="+max"]){display:none}}@media (min-width:1600px) and (max-width:2599px){[bp]:not([bp~="min+"]):not([bp~="xs+"]):not([bp~="sm+"]):not([bp~="md+"]):not([bp~="lg+"]):not([bp~="xl+"]):not([bp~="+xxl"]):not([bp~=xxl]):not([bp~="xxl+"]):not([bp~="+max"]){display:none}}@media (min-width:2600px){[bp]:not([bp~="min+"]):not([bp~="xs+"]):not([bp~="sm+"]):not([bp~="md+"]):not([bp~="lg+"]):not([bp~="xl+"]):not([bp~="xxl+"]):not([bp~="+max"]):not([bp~=max]):not([bp~="max+"]){display:none}}`;
        function nt(e) {
            return de({
                ...e,
                state: !0,
                attribute: !1
            })
        }
        const it = e => e ?? S;
        var at = q`:host{--header-margin:var(--semantic-header-margin-space-xl-mobile);align-items:center;display:flex;flex-direction:column;margin:0 auto;max-width:var(--view-max);padding:var(--section-padding);position:relative;z-index:var(--measure-z-index-above)}:host([section-padding=none]){--section-padding:0}[part=content]{width:100%}[part=background-overlay]{height:100%;left:0;margin-bottom:-100%;pointer-events:none;position:absolute;top:0;width:100%;z-index:var(--measure-z-index-below)}:host(:not([size])) #content,:host([size=default]) #content{max-width:var(--view-xl)}slot[name=background]{display:flex;inset:0;justify-content:center;pointer-events:none;position:absolute;z-index:var(--measure-z-index-below)}:host([size=slim]) #content{max-width:var(--view-md)}:host([size=narrow]) #content{max-width:var(--view-lg)}:host([size=wide]) #content{max-width:var(--view-xxl)}slot[name=background]::slotted(*){height:100%;width:100%}slot[name=background]::slotted(:not(slot, .background-active)){display:none}slot[name=header]::slotted(:not(slot)[slot=header]:last-of-type){margin-bottom:var(--header-margin)}.bg-video-control{bottom:var(--semantic-space-around-vertical-lg-desktop);display:flex;left:var(--semantic-space-around-horizontal-lg-desktop);position:absolute}.bg-video-control.right{left:auto;right:var(--semantic-space-around-horizontal-lg-desktop)}@media (min-width:720px){:host{--header-margin:var(--semantic-header-margin-space-xl-desktop)}}`
          , rt = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        const st = "en-US"
          , lt = ["en-US", "en-GB", "en-SG", "de-DE", "es-ES", "es-MX", "fr-FR", "it-IT", "ja-JP", "ko-KR", "pl-PL", "pt-BR", "ru-RU", "th-TH", "tr-TR", "zh-CN", "zh-TW"]
          , ct = /([a-z]{2})[-_]?([a-z]{2})?/i
          , dt = e => {
            class t extends e {
                constructor(...e) {
                    super(...e),
                    this.lang = "en-US",
                    this.loc = {},
                    this.lang = this.getDocumentLocale()
                }
                initializeLoc(...e) {
                    this.lang = this.getDocumentLocale(),
                    e.length && (this.loc = this.concatLocStrings(e))
                }
                getString(e, t) {
                    const o = this.lang || this.getDocumentLocale()
                      , n = this.loc[o] && this.loc[o][e] ? this.loc[o][e] : this.loc[st][e] || e;
                    return t ? this.interpolateString(n, t) : n
                }
                interpolateString(e, t) {
                    let o;
                    return o = Array.isArray(t) ? t.reduce(( (e, t, o) => (e[o] = t,
                    e)), {}) : t,
                    e.replace(/\{(\w+)\}/g, ( (e, t) => String(o[t]) || e))
                }
                getDocumentLocale() {
                    let e = st;
                    const t = ct.exec(document.documentElement.lang);
                    if (t) {
                        const [,o,n] = t;
                        o && (e = n ? `${o.toLowerCase()}-${n.toUpperCase()}` : o.toLowerCase())
                    }
                    if (lt.includes(e))
                        return e;
                    if ("function" == typeof Intl?.Locale) {
                        const t = new Intl.Locale(e).maximize();
                        e = `${t.language}-${t.region}`
                    } else
                        e = window.navigator.language;
                    return lt.includes(e) ? e : st
                }
                concatLocStrings(e) {
                    const t = {};
                    return e.forEach((e => {
                        Object.keys(e).forEach((o => {
                            t[o] = {
                                ...this.loc[o] || {},
                                ...e[o] || {}
                            }
                        }
                        ))
                    }
                    )),
                    t
                }
            }
            return rt([de({
                type: String
            })], t.prototype, "lang", void 0),
            t
        }
        ;
        var ut, pt, ht, bt, gt, mt, vt, ft, yt, wt, _t, xt = {
            "en-US": {
                video_overlay_aria_label: "Click To Play"
            },
            "de-DE": {},
            "es-ES": {},
            "es-MX": {},
            "fr-FR": {},
            "it-IT": {},
            "ja-JP": {},
            "ko-KR": {},
            "pl-PL": {},
            "pt-BR": {},
            "ru-RU": {},
            "th-TH": {},
            "zh-CN": {},
            "zh-TW": {}
        }, zt = q`:host{--icon-box-shadow-color:transparent;--icon-box-shadow-border:var(--icon-button-border-size-sm);border-style:none;box-shadow:inset 0 0 0 var(--icon-box-shadow-border) var(--icon-box-shadow-color);color:var(--icon-button-color-default);cursor:pointer;display:inline-block;padding:0}:host(.active),:host(:active){transform:translateY(1px)}:host([size=x-small]){--icon-box-shadow-border:var(--icon-button-border-size-sm);border-radius:var(--icon-button-border-radius-xs);height:var(--global-size-250);width:var(--global-size-250)}:host([size=x-small][height=tall]){border-radius:var(--icon-button-tall-border-radius-md);height:var(--global-size-350);width:var(--global-size-250)}:host([size=small]){--icon-box-shadow-border:var(--icon-button-border-size-sm);border-radius:calc(var(--icon-button-border-radius-sm));height:var(--button-height-sm);width:var(--button-height-sm)}:host([size=small][height=tall]){border-radius:var(--icon-button-tall-border-radius-md);height:var(--global-size-600);width:var(--global-size-300)}:host([size=medium]){--icon-box-shadow-border:var(--icon-button-border-size-md);border-radius:var(--icon-button-border-radius-md);height:var(--button-height-md);width:var(--button-height-md)}:host([size=medium][height=tall]){border-radius:var(--icon-button-tall-border-radius-md);height:var(--global-size-800);width:var(--global-size-350)}:host([size=large]){--icon-box-shadow-border:var(--icon-button-border-size-md);border-radius:var(--icon-button-border-radius-md);height:var(--semantic-size-input-height-lg-mobile);width:var(--semantic-size-input-height-lg-mobile)}:host([size=large][height=tall]){border-radius:var(--icon-button-tall-border-radius-md);height:var(--global-size-900);width:var(--global-size-400)}:host([size=x-large]){--icon-box-shadow-border:var(--icon-button-border-size-md);border-radius:var(--icon-button-border-radius-md);height:var(--semantic-size-input-height-xxl-mobile);width:var(--semantic-size-input-height-xxl-mobile)}:host([size=x-large][height=tall]){border-radius:var(--icon-button-tall-border-radius-md);height:var(--global-size-1000);width:var(--global-size-500)}:host([variant=primary]){background:var(--semantic-color-background-action-primary-default);color:var(--icon-button-color-default)}:host([variant=primary].hover),:host([variant=primary]:hover){--icon-box-shadow-color:var(--button-color-border-primary-hover);background:var(--semantic-color-background-action-primary-hover);color:var(--icon-button-color-hover)}:host([variant=primary].active),:host([variant=primary].focus),:host([variant=primary]:active),:host([variant=primary]:focus){--icon-box-shadow-color:var(--button-color-border-primary-pressed);background:var(--semantic-color-background-action-primary-pressed);color:var(--semantic-color-content-pressed)}:host([variant=primary][disabled]){--icon-box-shadow-color:transparent;background:var(--semantic-color-background-action-primary-disabled);color:var(--semantic-color-content-inactive)}:host([variant=secondary]){background:var(--semantic-color-background-action-secondary-default);color:var(--icon-button-color-default)}:host([variant=secondary].hover),:host([variant=secondary]:hover){--icon-box-shadow-color:var(--button-color-border-secondary-hover);background:var(--semantic-color-background-action-secondary-hover);color:var(--icon-button-color-hover)}:host([variant=secondary].active),:host([variant=secondary].focus),:host([variant=secondary]:active),:host([variant=secondary]:focus){--icon-box-shadow-color:var(--button-color-border-secondary-pressed);background:var(--semantic-color-background-action-secondary-pressed);color:var(--semantic-color-content-pressed)}:host([variant=secondary][disabled]){--icon-box-shadow-color:transparent;background:var(--semantic-color-background-action-secondary-pressed);color:var(--semantic-color-content-inactive)}:host([variant=tertiary]){--icon-box-shadow-color:var(--button-color-border-tertiary-default);background:var(--icon-button-color-tertiary-background-default);color:var(--icon-button-color-default)}:host([variant=tertiary].hover),:host([variant=tertiary]:hover){--icon-box-shadow-color:var(--button-color-border-tertiary-hover);background:var(--icon-button-color-tertiary-background-hover);color:var(--icon-button-color-hover)}:host([variant=tertiary].active),:host([variant=tertiary].focus),:host([variant=tertiary]:active),:host([variant=tertiary]:focus){--icon-box-shadow-color:var(--button-color-border-tertiary-pressed);background:var(--icon-button-color-tertiary-background-default);color:var(--semantic-color-content-pressed)}:host([variant=tertiary][disabled]){--icon-box-shadow-color:transparent;background:var(--icon-button-color-tertiary-background-default);color:var(--semantic-color-content-secondary-inactive)}:host([variant=ghost]){background:0 0;color:var(--icon-button-color-default)}:host([variant=ghost].hover),:host([variant=ghost]:hover){background:var(--icon-button-color-ghost-background-hover);color:var(--icon-button-color-hover)}:host([variant=ghost].active),:host([variant=ghost].focus),:host([variant=ghost]:active),:host([variant=ghost]:focus){background:var(--icon-button-color-ghost-background-active);color:var(--semantic-color-content-pressed)}:host([variant=ghost][disabled]){background:0 0;color:var(--semantic-color-content-secondary-inactive)}#host{align-items:center;display:inline-flex}button{height:100%;width:100%}:host([cosmetic]),button{align-items:center;display:flex;justify-content:center}:host([size=x-small]) blz-icon-button-icon{height:-webkit-fill-available;width:var(--semantic-size-icon-height-xs)}:host([size=small]) blz-icon-button-icon{height:var(--semantic-size-icon-height-sm);width:var(--semantic-size-icon-height-sm)}:host([size=medium]) blz-icon-button-icon{height:var(--semantic-size-icon-height-md);width:var(--semantic-size-icon-height-md)}:host([size=large]) blz-icon-button-icon{height:var(--semantic-size-icon-height-lg);width:var(--semantic-size-icon-height-lg)}:host([size=x-large]) blz-icon-button-icon{height:var(--semantic-size-icon-height-xl);width:var(--semantic-size-icon-height-xl)}:host[variant=default]{background:var(--icon-button-color-default-background);color:var(--icon-button-color-default)}:host([variant=default].focus),:host([variant=default].hover),:host([variant=default]:focus),:host([variant=default]:hover){background:var(--icon-button-color-default-background-hover)}:host([variant=contrast]){background-color:var(--icon-button-color-contrast-background)}:host([variant=contrast].focus),:host([variant=contrast].hover),:host([variant=contrast]:focus),:host([variant=contrast]:hover){background-color:var(--icon-button-color-contrast-background-hover)}@media (min-width:960px){:host([size=large]){height:var(--semantic-size-input-height-lg-desktop);width:var(--semantic-size-input-height-lg-desktop)}:host([size=x-large]){height:var(--semantic-size-input-height-xxl-desktop);width:var(--semantic-size-input-height-xxl-desktop)}}`, kt = ["alert-triangle.svg", "amazon-appstore-logo.svg", "amazon-appstore.svg", "android.svg", "app-store.svg", "apple-app-store.svg", "arrow-down.svg", "arrow-left.svg", "arrow-right.svg", "arrow-up-right.svg", "arrow-up.svg", "avowed.svg", "base-ui-logo-mini.svg", "base-ui-logo-stacked.svg", "base-ui-logo.svg", "battlenet-cn-logo-color.svg", "battlenet-cn-logo-stacked-color.svg", "battlenet-cn-logo-stacked.svg", "battlenet-cn-logo.svg", "battlenet-logo-color-trademark-tm.svg", "battlenet-logo-color-trademark.svg", "battlenet-logo-color.svg", "battlenet-logo-stacked-color-trademark.svg", "battlenet-logo-stacked-color.svg", "battlenet-logo-stacked.svg", "battlenet-logo.svg", "battlenet.svg", "blizzard-arcade-collection.svg", "blizzard.svg", "blizzcon.svg", "bluesky.svg", "bn-accessibility-filled.svg", "bn-accessibility-outlined.svg", "bn-account-alert-filled.svg", "bn-account-alert-outlined.svg", "bn-account-delete-filled.svg", "bn-account-delete-outlined.svg", "bn-account-filled.svg", "bn-account-outlined.svg", "bn-account-settings-filled.svg", "bn-account-settings-outlined.svg", "bn-alert-critical-filled.svg", "bn-alert-critical-outlined.svg", "bn-alert-filled.svg", "bn-alert-outlined.svg", "bn-app-settings-filled.svg", "bn-app-settings-outlined.svg", "bn-arrow-down-filled.svg", "bn-arrow-down-outlined.svg", "bn-arrow-left-filled.svg", "bn-arrow-left-outlined.svg", "bn-arrow-right-filled.svg", "bn-arrow-right-outlined.svg", "bn-arrow-up-filled.svg", "bn-arrow-up-outlined.svg", "bn-attachment-filled.svg", "bn-attachment-outlined.svg", "bn-authenticator-disabled-filled.svg", "bn-authenticator-disabled-outlined.svg", "bn-authenticator-filled.svg", "bn-authenticator-outlined.svg", "bn-availability-away-filled.svg", "bn-availability-away-outlined.svg", "bn-availability-busy-filled.svg", "bn-availability-busy-outlined.svg", "bn-availability-offline-filled.svg", "bn-availability-offline-outlined.svg", "bn-availability-online-filled.svg", "bn-availability-online-outlined.svg", "bn-ban-filled.svg", "bn-ban-outlined.svg", "bn-bar-code-filled.svg", "bn-bar-code-outlined.svg", "bn-battletag-change-filled.svg", "bn-battletag-change-outlined.svg", "bn-bell-filled.svg", "bn-bell-off-filled.svg", "bn-bell-off-outlined.svg", "bn-bell-outlined.svg", "bn-beta-filled.svg", "bn-beta-outlined.svg", "bn-bookmark-filled.svg", "bn-bookmark-outlined.svg", "bn-browser-alert-filled.svg", "bn-browser-alert-outlined.svg", "bn-browser-filled.svg", "bn-browser-info-filled.svg", "bn-browser-info-outlined.svg", "bn-browser-outlined.svg", "bn-bug-filled.svg", "bn-bug-outlined.svg", "bn-calendar-filled.svg", "bn-calendar-outlined.svg", "bn-channel-filled.svg", "bn-channel-outlined.svg", "bn-chat-add-filled.svg", "bn-chat-add-outlined.svg", "bn-chat-filled.svg", "bn-chat-outlined.svg", "bn-checkmark-circle-filled.svg", "bn-checkmark-circle-outlined.svg", "bn-checkmark-filled.svg", "bn-checkmark-outlined.svg", "bn-chevron-down-filled.svg", "bn-chevron-down-outlined.svg", "bn-chevron-left-filled.svg", "bn-chevron-left-outlined.svg", "bn-chevron-right-filled.svg", "bn-chevron-right-outlined.svg", "bn-chevron-up-filled.svg", "bn-chevron-up-outlined.svg", "bn-clock-filled.svg", "bn-clock-outlined.svg", "bn-close-circle-filled.svg", "bn-close-circle-outlined.svg", "bn-close-filled.svg", "bn-close-outlined.svg", "bn-console-filled.svg", "bn-console-outlined.svg", "bn-copy-filled.svg", "bn-copy-outlined.svg", "bn-credit-card-alert-filled.svg", "bn-credit-card-alert-outlined.svg", "bn-credit-card-filled.svg", "bn-credit-card-outlined.svg", "bn-credit-card-restore-filled.svg", "bn-credit-card-restore-outlined.svg", "bn-crossplay-filled.svg", "bn-crossplay-outlined.svg", "bn-crown-filled.svg", "bn-crown-outlined.svg", "bn-delete-filled.svg", "bn-delete-outlined.svg", "bn-desktop-filled.svg", "bn-desktop-outlined.svg", "bn-desktop-pc-filled.svg", "bn-desktop-pc-outlined.svg", "bn-disk-storage-filled.svg", "bn-disk-storage-outlined.svg", "bn-download-alert-filled.svg", "bn-download-alert-outlined.svg", "bn-download-filled.svg", "bn-download-outlined.svg", "bn-download-settings-filled.svg", "bn-download-settings-outlined.svg", "bn-editor-filled.svg", "bn-editor-outlined.svg", "bn-emoji-filled.svg", "bn-emoji-outlined.svg", "bn-external-link-filled.svg", "bn-external-link-outlined.svg", "bn-eye-disabled-filled.svg", "bn-eye-disabled-outlined.svg", "bn-eye-filled.svg", "bn-eye-outlined.svg", "bn-face-id-filled.svg", "bn-face-id-outlined.svg", "bn-family-filled.svg", "bn-family-outlined.svg", "bn-filter-filled.svg", "bn-filter-outlined.svg", "bn-fingerprint-filled.svg", "bn-fingerprint-outlined.svg", "bn-flag-filled.svg", "bn-flag-outlined.svg", "bn-forums-filled.svg", "bn-forums-outlined.svg", "bn-friend-add-filled.svg", "bn-friend-add-outlined.svg", "bn-friend-filled.svg", "bn-friend-outlined.svg", "bn-friend-setting-filled.svg", "bn-friend-setting-outlined.svg", "bn-friends-filled.svg", "bn-friends-outlined.svg", "bn-games-filled.svg", "bn-games-outlined.svg", "bn-gear-filled.svg", "bn-gear-outlined.svg", "bn-gearstore-filled.svg", "bn-gearstore-outlined.svg", "bn-gif-filled.svg", "bn-gif-outlined.svg", "bn-gift-filled.svg", "bn-gift-outlined.svg", "bn-globe-filled.svg", "bn-globe-outlined.svg", "bn-group-filled.svg", "bn-group-outlined.svg", "bn-headset-filled.svg", "bn-headset-outlined.svg", "bn-heart-filled.svg", "bn-heart-outlined.svg", "bn-history-filled.svg", "bn-history-outlined.svg", "bn-home-filled.svg", "bn-home-outlined.svg", "bn-hourglass-filled.svg", "bn-hourglass-outlined.svg", "bn-image-filled.svg", "bn-image-outlined.svg", "bn-incognito-filled.svg", "bn-incognito-outlined.svg", "bn-info-circle-filled.svg", "bn-info-circle-outlined.svg", "bn-installed-filled.svg", "bn-installed-outlined.svg", "bn-instant-unlock-filled.svg", "bn-instant-unlock-outlined.svg", "bn-key-filled.svg", "bn-key-outlined.svg", "bn-legal-filled.svg", "bn-legal-outlined.svg", "bn-letter-filled.svg", "bn-letter-outlined.svg", "bn-library-filled.svg", "bn-library-outlined.svg", "bn-light-bulb-filled.svg", "bn-light-bulb-outlined.svg", "bn-link-filled.svg", "bn-link-outlined.svg", "bn-list-add-filled.svg", "bn-list-add-outlined.svg", "bn-list-filled.svg", "bn-list-outlined.svg", "bn-list-remove-filled.svg", "bn-list-remove-outlined.svg", "bn-lock-checked-filled.svg", "bn-lock-checked-outlined.svg", "bn-lock-filled.svg", "bn-lock-open-filled.svg", "bn-lock-open-outlined.svg", "bn-lock-outlined.svg", "bn-menu-filled.svg", "bn-menu-outlined.svg", "bn-micophone-filled.svg", "bn-micophone-outlined.svg", "bn-microphone-off-filled.svg", "bn-microphone-off-outlined.svg", "bn-minus-circle-filled.svg", "bn-minus-circle-outlined.svg", "bn-minus-filled.svg", "bn-minus-outlined.svg", "bn-mobile-notification-filled.svg", "bn-mobile-notification-outlined.svg", "bn-move-down-filled.svg", "bn-move-down-outlined.svg", "bn-move-left-filled.svg", "bn-move-left-outlined.svg", "bn-move-right-filled.svg", "bn-move-right-outlined.svg", "bn-move-up-filled.svg", "bn-move-up-outlined.svg", "bn-network-alert-filled.svg", "bn-network-alert-outlined.svg", "bn-new-filled.svg", "bn-new-outlined.svg", "bn-news-filled.svg", "bn-news-outlined.svg", "bn-note-filled.svg", "bn-note-outlined.svg", "bn-overflow-filled.svg", "bn-overflow-outlined.svg", "bn-pause-filled.svg", "bn-pause-outlined.svg", "bn-pencil-filled.svg", "bn-pencil-outlined.svg", "bn-phone-filled.svg", "bn-phone-outlined.svg", "bn-phone-play-filled.svg", "bn-phone-play-outlined.svg", "bn-phone-settings-filled.svg", "bn-phone-settings-outlined.svg", "bn-play-circle-filled.svg", "bn-play-circle-outlined.svg", "bn-play-filled.svg", "bn-play-outlined.svg", "bn-player-lock-filled.svg", "bn-player-lock-outlined.svg", "bn-player-reset-filled.svg", "bn-player-reset-outlined.svg", "bn-plus-circle-filled.svg", "bn-plus-circle-outlined.svg", "bn-plus-filled.svg", "bn-plus-outlined.svg", "bn-pop-in-filled.svg", "bn-pop-in-outlined.svg", "bn-pop-out-filled.svg", "bn-pop-out-outlined.svg", "bn-pulse-filled.svg", "bn-pulse-outlined.svg", "bn-qr-code-filled.svg", "bn-qr-code-outlined.svg", "bn-question-filled.svg", "bn-question-outlined.svg", "bn-randomize-filled.svg", "bn-randomize-outlined.svg", "bn-repeat-filled.svg", "bn-repeat-outlined.svg", "bn-replay-filled.svg", "bn-replay-outlined.svg", "bn-rocket-filled.svg", "bn-rocket-outlined.svg", "bn-rotate-left-filled.svg", "bn-rotate-left-outlined.svg", "bn-rotate-right-filled.svg", "bn-rotate-right-outlined.svg", "bn-search-filled.svg", "bn-search-outlined.svg", "bn-send-filled.svg", "bn-send-outlined.svg", "bn-share-filled.svg", "bn-share-outlined.svg", "bn-shield-filled.svg", "bn-shield-outlined.svg", "bn-shop-alert-filled.svg", "bn-shop-alert-outlined.svg", "bn-shop-filled.svg", "bn-shop-outlined.svg", "bn-shuffle-filled.svg", "bn-shuffle-outlined.svg", "bn-sign-out-filled.svg", "bn-sign-out-outlined.svg", "bn-speaker-filled.svg", "bn-speaker-off-filled.svg", "bn-speaker-off-outlined.svg", "bn-speaker-on-filled.svg", "bn-speaker-on-outlined.svg", "bn-speaker-outlined.svg", "bn-special-filled.svg", "bn-special-outlined.svg", "bn-speed-filled.svg", "bn-speed-outlined.svg", "bn-star-filled.svg", "bn-star-outlined.svg", "bn-sync-filled.svg", "bn-sync-outlined.svg", "bn-tag-filled.svg", "bn-tag-outlined.svg", "bn-tags-filled.svg", "bn-tags-outlined.svg", "bn-thumbs-down-filled.svg", "bn-thumbs-down-outlined.svg", "bn-thumbs-up-filled.svg", "bn-thumbs-up-outlined.svg", "bn-ticket-filled.svg", "bn-ticket-outlined.svg", "bn-transcription-filled.svg", "bn-transcription-outlined.svg", "bn-triangle-down-filled.svg", "bn-triangle-down-outlined.svg", "bn-triangle-left-filled.svg", "bn-triangle-left-outlined.svg", "bn-triangle-right-filled.svg", "bn-triangle-right-outlined.svg", "bn-triangle-up-filled.svg", "bn-triangle-up-outlined.svg", "bn-trophy-filled.svg", "bn-trophy-outlined.svg", "bn-update-filled.svg", "bn-update-outlined.svg", "bn-upload-filled.svg", "bn-upload-outlined.svg", "bn-video-filled.svg", "bn-video-outlined.svg", "bn-voice-chat-active-filled.svg", "bn-voice-chat-active-outlined.svg", "bn-voice-chat-filled.svg", "bn-voice-chat-loading-filled.svg", "bn-voice-chat-loading-outlined.svg", "bn-voice-chat-outlined.svg", "bn-window-lock-filled.svg", "bn-window-lock-outlined.svg", "bn-window-unlock-filled.svg", "bn-window-unlock-outlined.svg", "bn-wrench-filled.svg", "bn-wrench-outlined.svg", "bn-zoom-filled.svg", "bn-zoom-outlined.svg", "briefcase.svg", "check-circle.svg", "chevron-down.svg", "chevron-left.svg", "chevron-right.svg", "chevron-up.svg", "cod-black-ops-4.svg", "cod-black-ops-6.svg", "cod-black-ops-cw.svg", "cod-modern-warfare-2-cr.svg", "cod-modern-warfare-2.svg", "cod-modern-warfare-3.svg", "cod-modern-warfare.svg", "cod-vanguard.svg", "cod-warzone.svg", "crash-bandicoot-4.svg", "diablo-II.svg", "diablo-III.svg", "diablo-IV.svg", "diablo-immortal.svg", "diablo.svg", "diablo3-platinum.png", "diablo4-platinum.png", "download.svg", "edit.svg", "employee.svg", "external.svg", "facebook.svg", "file.svg", "google-play-logo.svg", "google-play.svg", "google.svg", "grid.svg", "heart.svg", "hearthstone-esports.svg", "hearthstone-orb.png", "hearthstone-runestone.png", "hearthstone.svg", "help-circle.svg", "heroes-of-the-storm.svg", "history.svg", "info-circle.svg", "instagram.svg", "laurel.svg", "log-out.svg", "mac-logo.svg", "mac.svg", "mathematical-double-struck-capital-x.svg", "maximize.svg", "menu.svg", "message-circle.svg", "more-horizontal.svg", "netease-games.svg", "netease-logo.svg", "onestore-logo.svg", "onestore.svg", "overwatch-2-dark.svg", "overwatch-2.svg", "overwatch-credits.png", "overwatch-league-tokens.png", "overwatch.svg", "pause.svg", "payment-afterpay-default.svg", "payment-alipay-default.svg", "payment-american-express-default.svg", "payment-aupay-default.svg", "payment-battlenet-default.svg", "payment-bit-cash-default.svg", "payment-boku-default.svg", "payment-carte-bancaire-default.svg", "payment-diners-club-default.svg", "payment-discover-default.svg", "payment-ideal-default.svg", "payment-jcb-default.svg", "payment-jp-online-banking-default.svg", "payment-konbini-default.svg", "payment-kr-ars-default.svg", "payment-kr-bank-transfer-default.svg", "payment-kr-bookn-life-culture-default.svg", "payment-kr-credit-card-default.svg", "payment-kr-culture-land-gift-certificate-default.svg", "payment-kr-cvs-convenience-store-default.svg", "payment-kr-happy-money-default.svg", "payment-kr-kakao-pay-default.svg", "payment-kr-kakao-pay-pill.svg", "payment-kr-mobile-default.svg", "payment-kr-pay-co-default.svg", "payment-kr-pay-co-inverse.svg", "payment-kr-posa-prepaid-card-default.svg", "payment-kr-smart-culture-gift-certificate-default.svg", "payment-kr-ssg-default.svg", "payment-kr-t-money-default.svg", "payment-kr-teen-cash-default.svg", "payment-kr-toss-default.svg", "payment-kr-virtual-account-default.svg", "payment-linepay-default.svg", "payment-master-card-default.svg", "payment-mercado-pago-default.svg", "payment-pay-easy-default.svg", "payment-paypal-default.svg", "payment-paypal-mark-color.svg", "payment-paypal-wordmark.svg", "payment-paypay-default.svg", "payment-paysafecard-default.svg", "payment-pic-pay-default.svg", "payment-pix-default.svg", "payment-razer-gold-default.svg", "payment-razer-gold-white.svg", "payment-sepa-default.svg", "payment-union-pay-default.svg", "payment-union-pay-white.svg", "payment-visa-default.svg", "payment-web-money-default.svg", "payment-wechat-pay-default.svg", "phone.svg", "play.svg", "playstation-4-5-logo.svg", "playstation-4-logo.svg", "playstation-5-logo.svg", "playstation-logo.svg", "playstation.svg", "reddit.svg", "search.svg", "settings.svg", "shared-tech-logo-mini.svg", "shared-tech-logo-stacked.svg", "shared-tech-logo.svg", "shirt.svg", "shopping-bag.svg", "starcraft-II.svg", "starcraft.svg", "steam-logo.svg", "steam.svg", "switch-logo.svg", "switch.svg", "threads.svg", "ticket.svg", "tiktok.svg", "twitch.svg", "twitter.svg", "update.svg", "user-circle.svg", "user.svg", "users.svg", "vkontakte.svg", "war.svg", "warcraft-II-remastered.svg", "warcraft-II.svg", "warcraft-III.svg", "warcraft-arclight-rumble.svg", "warcraft-family.svg", "warcraft-remastered.svg", "warcraft.svg", "wechat.svg", "weibo.svg", "windows-logo.svg", "windows.svg", "world-of-warcraft.svg", "wotlk.svg", "wow-cata.svg", "wow-classic.svg", "wow-df.svg", "wow-tww.svg", "x.svg", "xbox-gamepass-logo-stacked.svg", "xbox-gamepass-logo.svg", "xbox-logo.svg", "xbox-one-logo.svg", "xbox-series-logo.svg", "xbox.svg", "youku.svg", "youtube.svg"];
        !function(e) {
            e.AlertTriangle = "alert-triangle",
            e.ArrowDown = "arrow-down",
            e.ArrowLeft = "arrow-left",
            e.ArrowRight = "arrow-right",
            e.ArrowUpRight = "arrow-up-right",
            e.ArrowUp = "arrow-up",
            e.Briefcase = "briefcase",
            e.CheckCircle = "check-circle",
            e.ChevronDown = "chevron-down",
            e.ChevronLeft = "chevron-left",
            e.ChevronRight = "chevron-right",
            e.ChevronUp = "chevron-up",
            e.Download = "download",
            e.Edit = "edit",
            e.Employee = "employee",
            e.External = "external",
            e.File = "file",
            e.Grid = "grid",
            e.Heart = "heart",
            e.HelpCircle = "help-circle",
            e.History = "history",
            e.InfoCircle = "info-circle",
            e.Laurel = "laurel",
            e.LogOut = "log-out",
            e.Maximize = "maximize",
            e.Menu = "menu",
            e.MessageCircle = "message-circle",
            e.MoreHorizontal = "more-horizontal",
            e.Phone = "phone",
            e.Play = "play",
            e.Pause = "pause",
            e.Search = "search",
            e.Settings = "settings",
            e.Shirt = "shirt",
            e.ShoppingBag = "shopping-bag",
            e.Ticket = "ticket",
            e.User = "user",
            e.Users = "users",
            e.Update = "update",
            e.UserCircle = "user-circle",
            e.X = "x"
        }(ut || (ut = {})),
        function(e) {
            e.AmazonAppstore = "amazon-appstore",
            e.Android = "android",
            e.AppleAppStore = "apple-app-store",
            e.Battlenet = "battlenet",
            e.Google = "google",
            e.GooglePlay = "google-play",
            e.Mac = "mac",
            e.OneStore = "onestore",
            e.Playstation = "playstation",
            e.Steam = "steam",
            e.Switch = "switch",
            e.Windows = "windows",
            e.Xbox = "xbox"
        }(pt || (pt = {})),
        function(e) {
            e.AmazonAppstoreLogo = "amazon-appstore-logo",
            e.AppStore = "app-store",
            e.BattlenetLogo = "battlenet-logo",
            e.BattlenetLogoColor = "battlenet-logo-color",
            e.BattlenetLogoColorTrademark = "battlenet-logo-color-trademark",
            e.BattlenetLogoColorTrademarkTm = "battlenet-logo-color-trademark-tm",
            e.BattlenetCnLogo = "battlenet-cn-logo",
            e.BattlenetCnLogoColor = "battlenet-cn-logo-color",
            e.BattlenetLogoStacked = "battlenet-logo-stacked",
            e.BattlenetLogoStackedColor = "battlenet-logo-stacked-color",
            e.BattlenetLogoStackedColorTrademark = "battlenet-logo-stacked-color-trademark",
            e.BattlenetCnLogoStacked = "battlenet-cn-logo-stacked",
            e.BattlenetCnLogoStackedColor = "battlenet-cn-logo-stacked-color",
            e.GooglePlayLogo = "google-play-logo",
            e.MacLogo = "mac-logo",
            e.OneStoreLogo = "onestore-logo",
            e.PlaystationLogo = "playstation-logo",
            e.Playstation45Logo = "playstation-4-5-logo",
            e.Playstation4Logo = "playstation-4-logo",
            e.Playstation5Logo = "playstation-5-logo",
            e.SteamLogo = "steam-logo",
            e.SwitchLogo = "switch-logo",
            e.WindowsLogo = "windows-logo",
            e.XboxLogo = "xbox-logo",
            e.XboxOneLogo = "xbox-one-logo",
            e.XboxSeriesLogo = "xbox-series-logo",
            e.XboxGamepassLogo = "xbox-gamepass-logo",
            e.XboxGamepassLogoStacked = "xbox-gamepass-logo-stacked"
        }(ht || (ht = {})),
        function(e) {
            e.Bluesky = "bluesky",
            e.Facebook = "facebook",
            e.Instagram = "instagram",
            e.Reddit = "reddit",
            e.Twitch = "twitch",
            e.Twitter = "twitter",
            e.Vkontakte = "vkontakte",
            e.Wechat = "wechat",
            e.Weibo = "weibo",
            e.Youku = "youku",
            e.Youtube = "youtube",
            e.Tiktok = "tiktok",
            e.Threads = "threads"
        }(bt || (bt = {})),
        function(e) {
            e.Avowed = "avowed",
            e.Blizzcon = "blizzcon",
            e.BlizzardArcadeCollection = "blizzard-arcade-collection",
            e.Diablo = "diablo",
            e.DiabloII = "diablo-II",
            e.DiabloIII = "diablo-III",
            e.DiabloIV = "diablo-IV",
            e.DiabloImmortal = "diablo-immortal",
            e.Hearthstone = "hearthstone",
            e.HearthstoneEsports = "hearthstone-esports",
            e.HeroesOfTheStorm = "heroes-of-the-storm",
            e.Overwatch2 = "overwatch-2",
            e.Overwatch2Dark = "overwatch-2-dark",
            e.Overwatch = "overwatch",
            e.StarcraftII = "starcraft-II",
            e.Starcraft = "starcraft",
            e.Warcraft = "warcraft",
            e.WarcraftRemastered = "warcraft-remastered",
            e.WarcraftII = "warcraft-II",
            e.WarcraftIIRemastered = "warcraft-II-remastered",
            e.WarcraftIII = "warcraft-III",
            e.WarcraftFamily = "warcraft-family",
            e.Wotlk = "wotlk",
            e.WarcraftArclightRumble = "warcraft-arclight-rumble",
            e.WorldOfWarcraft = "world-of-warcraft",
            e.WowCata = "wow-cata",
            e.WowClassic = "wow-classic",
            e.WowDf = "wow-df",
            e.WowTww = "wow-tww",
            e.CodBlackOps4 = "cod-black-ops-4",
            e.CodBlackOps6 = "cod-black-ops-6",
            e.CodBlackOpsCw = "cod-black-ops-cw",
            e.CodModernWarfare2Cr = "cod-modern-warfare-2-cr",
            e.CodModernWarfare2 = "cod-modern-warfare-2",
            e.CodModernWarfare3 = "cod-modern-warfare-3",
            e.CodModernWarfare = "cod-modern-warfare",
            e.CodVanguard = "cod-vanguard",
            e.CodWarzone = "cod-warzone",
            e.CrashBandicoot4 = "crash-bandicoot-4"
        }(gt || (gt = {})),
        function(e) {
            e.HearthstoneOrb = "hearthstone-orb",
            e.HearthstoneRunestone = "hearthstone-runestone",
            e.OverwatchCredits = "overwatch-credits",
            e.OverwatchLeagueTokens = "overwatch-league-tokens",
            e.Diablo3Platinum = "diablo3-platinum",
            e.Diablo4Platinum = "diablo4-platinum"
        }(mt || (mt = {})),
        function(e) {
            e.Blizzard = "blizzard",
            e.NeteaseLogo = "netease-logo",
            e.NeteaseGames = "netease-games"
        }(vt || (vt = {})),
        function(e) {
            e.BaseUiLogo = "base-ui-logo",
            e.BaseUiLogoStacked = "base-ui-logo-stacked",
            e.BaseUiLogoMini = "base-ui-logo-mini",
            e.SharedTechLogo = "shared-tech-logo",
            e.SharedTechLogoStacked = "shared-tech-logo-stacked",
            e.SharedTechLogoMini = "shared-tech-logo-mini"
        }(ft || (ft = {})),
        function(e) {
            e.BnAccessibilityFilled = "bn-accessibility-filled",
            e.BnAccountAlertFilled = "bn-account-alert-filled",
            e.BnAccountDeleteFilled = "bn-account-delete-filled",
            e.BnAccountFilled = "bn-account-filled",
            e.BnAccountSettingsFilled = "bn-account-settings-filled",
            e.BnAlertCriticalFilled = "bn-alert-critical-filled",
            e.BnAlertFilled = "bn-alert-filled",
            e.BnAppSettingsFilled = "bn-app-settings-filled",
            e.BnArrowDownFilled = "bn-arrow-down-filled",
            e.BnArrowLeftFilled = "bn-arrow-left-filled",
            e.BnArrowRightFilled = "bn-arrow-right-filled",
            e.BnArrowUpFilled = "bn-arrow-up-filled",
            e.BnAttachmentFilled = "bn-attachment-filled",
            e.BnAuthenticatorDisabledFilled = "bn-authenticator-disabled-filled",
            e.BnAuthenticatorFilled = "bn-authenticator-filled",
            e.BnAvailabilityAwayFilled = "bn-availability-away-filled",
            e.BnAvailabilityBusyFilled = "bn-availability-busy-filled",
            e.BnAvailabilityOfflineFilled = "bn-availability-offline-filled",
            e.BnAvailabilityOnlineFilled = "bn-availability-online-filled",
            e.BnBanFilled = "bn-ban-filled",
            e.BnBarCodeFilled = "bn-bar-code-filled",
            e.BnBattletagChangeFilled = "bn-battletag-change-filled",
            e.BnBellFilled = "bn-bell-filled",
            e.BnBellOffFilled = "bn-bell-off-filled",
            e.BnBetaFilled = "bn-beta-filled",
            e.BnBookmarkFilled = "bn-bookmark-filled",
            e.BnBrowserAlertFilled = "bn-browser-alert-filled",
            e.BnBrowserFilled = "bn-browser-filled",
            e.BnBrowserInfoFilled = "bn-browser-info-filled",
            e.BnBugFilled = "bn-bug-filled",
            e.BnCalendarFilled = "bn-calendar-filled",
            e.BnChannelFilled = "bn-channel-filled",
            e.BnChatAddFilled = "bn-chat-add-filled",
            e.BnChatFilled = "bn-chat-filled",
            e.BnCheckmarkCircleFilled = "bn-checkmark-circle-filled",
            e.BnCheckmarkFilled = "bn-checkmark-filled",
            e.BnChevronDownFilled = "bn-chevron-down-filled",
            e.BnChevronLeftFilled = "bn-chevron-left-filled",
            e.BnChevronRightFilled = "bn-chevron-right-filled",
            e.BnChevronUpFilled = "bn-chevron-up-filled",
            e.BnClockFilled = "bn-clock-filled",
            e.BnCloseCircleFilled = "bn-close-circle-filled",
            e.BnCloseFilled = "bn-close-filled",
            e.BnConsoleFilled = "bn-console-filled",
            e.BnCopyFilled = "bn-copy-filled",
            e.BnCreditCardAlertFilled = "bn-credit-card-alert-filled",
            e.BnCreditCardFilled = "bn-credit-card-filled",
            e.BnCreditCardRestoreFilled = "bn-credit-card-restore-filled",
            e.BnCrossplayFilled = "bn-crossplay-filled",
            e.BnCrownFilled = "bn-crown-filled",
            e.BnDeleteFilled = "bn-delete-filled",
            e.BnDesktopFilled = "bn-desktop-filled",
            e.BnDesktopPcFilled = "bn-desktop-pc-filled",
            e.BnDiskStorageFilled = "bn-disk-storage-filled",
            e.BnDownloadAlertFilled = "bn-download-alert-filled",
            e.BnDownloadFilled = "bn-download-filled",
            e.BnDownloadSettingsFilled = "bn-download-settings-filled",
            e.BnEditorFilled = "bn-editor-filled",
            e.BnEmojiFilled = "bn-emoji-filled",
            e.BnExternalLinkFilled = "bn-external-link-filled",
            e.BnEyeDisabledFilled = "bn-eye-disabled-filled",
            e.BnEyeFilled = "bn-eye-filled",
            e.BnFaceIdFilled = "bn-face-id-filled",
            e.BnFamilyFilled = "bn-family-filled",
            e.BnFilterFilled = "bn-filter-filled",
            e.BnFingerprintFilled = "bn-fingerprint-filled",
            e.BnFlagFilled = "bn-flag-filled",
            e.BnForumsFilled = "bn-forums-filled",
            e.BnFriendAddFilled = "bn-friend-add-filled",
            e.BnFriendFilled = "bn-friend-filled",
            e.BnFriendSettingFilled = "bn-friend-setting-filled",
            e.BnFriendsFilled = "bn-friends-filled",
            e.BnGamesFilled = "bn-games-filled",
            e.BnGearFilled = "bn-gear-filled",
            e.BnGearstoreFilled = "bn-gearstore-filled",
            e.BnGifFilled = "bn-gif-filled",
            e.BnGiftFilled = "bn-gift-filled",
            e.BnGlobeFilled = "bn-globe-filled",
            e.BnGroupFilled = "bn-group-filled",
            e.BnHeadsetFilled = "bn-headset-filled",
            e.BnHeartFilled = "bn-heart-filled",
            e.BnHistoryFilled = "bn-history-filled",
            e.BnHomeFilled = "bn-home-filled",
            e.BnHourglassFilled = "bn-hourglass-filled",
            e.BnImageFilled = "bn-image-filled",
            e.BnIncognitoFilled = "bn-incognito-filled",
            e.BnInfoCircleFilled = "bn-info-circle-filled",
            e.BnInstalledFilled = "bn-installed-filled",
            e.BnInstantUnlockFilled = "bn-instant-unlock-filled",
            e.BnKeyFilled = "bn-key-filled",
            e.BnLegalFilled = "bn-legal-filled",
            e.BnLetterFilled = "bn-letter-filled",
            e.BnLibraryFilled = "bn-library-filled",
            e.BnLightBulbFilled = "bn-light-bulb-filled",
            e.BnLinkFilled = "bn-link-filled",
            e.BnListAddFilled = "bn-list-add-filled",
            e.BnListRemoveFilled = "bn-list-remove-filled",
            e.BnListFilled = "bn-list-filled",
            e.BnLockCheckedFilled = "bn-lock-checked-filled",
            e.BnLockFilled = "bn-lock-filled",
            e.BnLockOpenFilled = "bn-lock-open-filled",
            e.BnMenuFilled = "bn-menu-filled",
            e.BnMicophoneFilled = "bn-micophone-filled",
            e.BnMicrophoneOffFilled = "bn-microphone-off-filled",
            e.BnMinusCircleFilled = "bn-minus-circle-filled",
            e.BnMinusFilled = "bn-minus-filled",
            e.BnMobileNotificationFilled = "bn-mobile-notification-filled",
            e.BnMoveDownFilled = "bn-move-down-filled",
            e.BnMoveLeftFilled = "bn-move-left-filled",
            e.BnMoveRightFilled = "bn-move-right-filled",
            e.BnMoveUpFilled = "bn-move-up-filled",
            e.BnNetworkAlertFilled = "bn-network-alert-filled",
            e.BnNewFilled = "bn-new-filled",
            e.BnNewsFilled = "bn-news-filled",
            e.BnNoteFilled = "bn-note-filled",
            e.BnOverflowFilled = "bn-overflow-filled",
            e.BnPauseFilled = "bn-pause-filled",
            e.BnPencilFilled = "bn-pencil-filled",
            e.BnPhoneFilled = "bn-phone-filled",
            e.BnPhonePlayFilled = "bn-phone-play-filled",
            e.BnPhoneSettingsFilled = "bn-phone-settings-filled",
            e.BnPlayCircleFilled = "bn-play-circle-filled",
            e.BnPlayFilled = "bn-play-filled",
            e.BnPlayerLockFilled = "bn-player-lock-filled",
            e.BnPlayerResetFilled = "bn-player-reset-filled",
            e.BnPlusCircleFilled = "bn-plus-circle-filled",
            e.BnPlusFilled = "bn-plus-filled",
            e.BnPopInFilled = "bn-pop-in-filled",
            e.BnPopOutFilled = "bn-pop-out-filled",
            e.BnPulseFilled = "bn-pulse-filled",
            e.BnQrCodeFilled = "bn-qr-code-filled",
            e.BnQuestionFilled = "bn-question-filled",
            e.BnRandomizeFilled = "bn-randomize-filled",
            e.BnRepeatFilled = "bn-repeat-filled",
            e.BnReplayFilled = "bn-replay-filled",
            e.BnRocketFilled = "bn-rocket-filled",
            e.BnRotateLeftFilled = "bn-rotate-left-filled",
            e.BnRotateRightFilled = "bn-rotate-right-filled",
            e.BnSearchFilled = "bn-search-filled",
            e.BnSendFilled = "bn-send-filled",
            e.BnShareFilled = "bn-share-filled",
            e.BnShieldFilled = "bn-shield-filled",
            e.BnShopAlertFilled = "bn-shop-alert-filled",
            e.BnShopFilled = "bn-shop-filled",
            e.BnShuffleFilled = "bn-shuffle-filled",
            e.BnSignOutFilled = "bn-sign-out-filled",
            e.BnSpeakerFilled = "bn-speaker-filled",
            e.BnSpeakerOffFilled = "bn-speaker-off-filled",
            e.BnSpeakerOnFilled = "bn-speaker-on-filled",
            e.BnSpecialFilled = "bn-special-filled",
            e.BnSpeedFilled = "bn-speed-filled",
            e.BnStarFilled = "bn-star-filled",
            e.BnSyncFilled = "bn-sync-filled",
            e.BnTagFilled = "bn-tag-filled",
            e.BnTagsFilled = "bn-tags-filled",
            e.BnThumbsDownFilled = "bn-thumbs-down-filled",
            e.BnThumbsUpFilled = "bn-thumbs-up-filled",
            e.BnTicketFilled = "bn-ticket-filled",
            e.BnTranscriptionFilled = "bn-transcription-filled",
            e.BnTriangleDownFilled = "bn-triangle-down-filled",
            e.BnTriangleLeftFilled = "bn-triangle-left-filled",
            e.BnTriangleRightFilled = "bn-triangle-right-filled",
            e.BnTriangleUpFilled = "bn-triangle-up-filled",
            e.BnTrophyFilled = "bn-trophy-filled",
            e.BnUpdateFilled = "bn-update-filled",
            e.BnUploadFilled = "bn-upload-filled",
            e.BnVideoFilled = "bn-video-filled",
            e.BnVoiceChatActiveFilled = "bn-voice-chat-active-filled",
            e.BnVoiceChatFilled = "bn-voice-chat-filled",
            e.BnVoiceChatLoadingFilled = "bn-voice-chat-loading-filled",
            e.BnWindowLockFilled = "bn-window-lock-filled",
            e.BnWindowUnlockFilled = "bn-window-unlock-filled",
            e.BnWrenchFilled = "bn-wrench-filled",
            e.BnZoomFilled = "bn-zoom-filled"
        }(yt || (yt = {})),
        function(e) {
            e.BnAccessibilityOutlined = "bn-accessibility-outlined",
            e.BnAccountAlertOutlined = "bn-account-alert-outlined",
            e.BnAccountDeleteOutlined = "bn-account-delete-outlined",
            e.BnAccountOutlined = "bn-account-outlined",
            e.BnAccountSettingsOutlined = "bn-account-settings-outlined",
            e.BnAlertCriticalOutlined = "bn-alert-critical-outlined",
            e.BnAlertOutlined = "bn-alert-outlined",
            e.BnAppSettingsOutlined = "bn-app-settings-outlined",
            e.BnArrowDownOutlined = "bn-arrow-down-outlined",
            e.BnArrowLeftOutlined = "bn-arrow-left-outlined",
            e.BnArrowRightOutlined = "bn-arrow-right-outlined",
            e.BnArrowUpOutlined = "bn-arrow-up-outlined",
            e.BnAttachmentOutlined = "bn-attachment-outlined",
            e.BnAuthenticatorDisabledOutlined = "bn-authenticator-disabled-outlined",
            e.BnAuthenticatorOutlined = "bn-authenticator-outlined",
            e.BnAvailabilityAwayOutlined = "bn-availability-away-outlined",
            e.BnAvailabilityBusyOutlined = "bn-availability-busy-outlined",
            e.BnAvailabilityOfflineOutlined = "bn-availability-offline-outlined",
            e.BnAvailabilityOnlineOutlined = "bn-availability-online-outlined",
            e.BnBanOutlined = "bn-ban-outlined",
            e.BnBarCodeOutlined = "bn-bar-code-outlined",
            e.BnBattletagChangeOutlined = "bn-battletag-change-outlined",
            e.BnBellOutlined = "bn-bell-outlined",
            e.BnBellOffOutlined = "bn-bell-off-outlined",
            e.BnBetaOutlined = "bn-beta-outlined",
            e.BnBookmarkOutlined = "bn-bookmark-outlined",
            e.BnBrowserAlertOutlined = "bn-browser-alert-outlined",
            e.BnBrowserOutlined = "bn-browser-outlined",
            e.BnBrowserInfoOutlined = "bn-browser-info-outlined",
            e.BnBugOutlined = "bn-bug-outlined",
            e.BnCalendarOutlined = "bn-calendar-outlined",
            e.BnChannelOutlined = "bn-channel-outlined",
            e.BnChatAddOutlined = "bn-chat-add-outlined",
            e.BnChatOutlined = "bn-chat-outlined",
            e.BnCheckmarkCircleOutlined = "bn-checkmark-circle-outlined",
            e.BnCheckmarkOutlined = "bn-checkmark-outlined",
            e.BnChevronDownOutlined = "bn-chevron-down-outlined",
            e.BnChevronLeftOutlined = "bn-chevron-left-outlined",
            e.BnChevronRightOutlined = "bn-chevron-right-outlined",
            e.BnChevronUpOutlined = "bn-chevron-up-outlined",
            e.BnClockOutlined = "bn-clock-outlined",
            e.BnCloseCircleOutlined = "bn-close-circle-outlined",
            e.BnCloseOutlined = "bn-close-outlined",
            e.BnConsoleOutlined = "bn-console-outlined",
            e.BnCopyOutlined = "bn-copy-outlined",
            e.BnCreditCardAlertOutlined = "bn-credit-card-alert-outlined",
            e.BnCreditCardOutlined = "bn-credit-card-outlined",
            e.BnCreditCardRestoreOutlined = "bn-credit-card-restore-outlined",
            e.BnCrossplayOutlined = "bn-crossplay-outlined",
            e.BnCrownOutlined = "bn-crown-outlined",
            e.BnDeleteOutlined = "bn-delete-outlined",
            e.BnDesktopOutlined = "bn-desktop-outlined",
            e.BnDesktopPcOutlined = "bn-desktop-pc-outlined",
            e.BnDiskStorageOutlined = "bn-disk-storage-outlined",
            e.BnDownloadAlertOutlined = "bn-download-alert-outlined",
            e.BnDownloadOutlined = "bn-download-outlined",
            e.BnDownloadSettingsOutlined = "bn-download-settings-outlined",
            e.BnEditorOutlined = "bn-editor-outlined",
            e.BnEmojiOutlined = "bn-emoji-outlined",
            e.BnExternalLinkOutlined = "bn-external-link-outlined",
            e.BnEyeDisabledOutlined = "bn-eye-disabled-outlined",
            e.BnEyeOutlined = "bn-eye-outlined",
            e.BnFaceIdOutlined = "bn-face-id-outlined",
            e.BnFamilyOutlined = "bn-family-outlined",
            e.BnFilterOutlined = "bn-filter-outlined",
            e.BnFingerprintOutlined = "bn-fingerprint-outlined",
            e.BnFlagOutlined = "bn-flag-outlined",
            e.BnForumsOutlined = "bn-forums-outlined",
            e.BnFriendAddOutlined = "bn-friend-add-outlined",
            e.BnFriendOutlined = "bn-friend-outlined",
            e.BnFriendSettingOutlined = "bn-friend-setting-outlined",
            e.BnFriendsOutlined = "bn-friends-outlined",
            e.BnGamesOutlined = "bn-games-outlined",
            e.BnGearOutlined = "bn-gear-outlined",
            e.BnGearstoreOutlined = "bn-gearstore-outlined",
            e.BnGifOutlined = "bn-gif-outlined",
            e.BnGiftOutlined = "bn-gift-outlined",
            e.BnGlobeOutlined = "bn-globe-outlined",
            e.BnGroupOutlined = "bn-group-outlined",
            e.BnHeadsetOutlined = "bn-headset-outlined",
            e.BnHeartOutlined = "bn-heart-outlined",
            e.BnHistoryOutlined = "bn-history-outlined",
            e.BnHomeOutlined = "bn-home-outlined",
            e.BnHourglassOutlined = "bn-hourglass-outlined",
            e.BnImageOutlined = "bn-image-outlined",
            e.BnIncognitoOutlined = "bn-incognito-outlined",
            e.BnInfoCircleOutlined = "bn-info-circle-outlined",
            e.BnInstalledOutlined = "bn-installed-outlined",
            e.BnInstantUnlockOutlined = "bn-instant-unlock-outlined",
            e.BnKeyOutlined = "bn-key-outlined",
            e.BnLegalOutlined = "bn-legal-outlined",
            e.BnLetterOutlined = "bn-letter-outlined",
            e.BnLibraryOutlined = "bn-library-outlined",
            e.BnLightBulbOutlined = "bn-light-bulb-outlined",
            e.BnLinkOutlined = "bn-link-outlined",
            e.BnListAddOutlined = "bn-list-add-outlined",
            e.BnListRemoveOutlined = "bn-list-remove-outlined",
            e.BnListOutlined = "bn-list-outlined",
            e.BnLockCheckedOutlined = "bn-lock-checked-outlined",
            e.BnLockOutlined = "bn-lock-outlined",
            e.BnLockOpenOutlined = "bn-lock-open-outlined",
            e.BnMenuOutlined = "bn-menu-outlined",
            e.BnMicophoneOutlined = "bn-micophone-outlined",
            e.BnMicrophoneOffOutlined = "bn-microphone-off-outlined",
            e.BnMinusCircleOutlined = "bn-minus-circle-outlined",
            e.BnMinusOutlined = "bn-minus-outlined",
            e.BnMobileNotificationOutlined = "bn-mobile-notification-outlined",
            e.BnMoveDownOutlined = "bn-move-down-outlined",
            e.BnMoveLeftOutlined = "bn-move-left-outlined",
            e.BnMoveRightOutlined = "bn-move-right-outlined",
            e.BnMoveUpOutlined = "bn-move-up-outlined",
            e.BnNetworkAlertOutlined = "bn-network-alert-outlined",
            e.BnNewOutlined = "bn-new-outlined",
            e.BnNewsOutlined = "bn-news-outlined",
            e.BnNoteOutlined = "bn-note-outlined",
            e.BnOverflowOutlined = "bn-overflow-outlined",
            e.BnPauseOutlined = "bn-pause-outlined",
            e.BnPencilOutlined = "bn-pencil-outlined",
            e.BnPhoneOutlined = "bn-phone-outlined",
            e.BnPhonePlayOutlined = "bn-phone-play-outlined",
            e.BnPhoneSettingsOutlined = "bn-phone-settings-outlined",
            e.BnPlayCircleOutlined = "bn-play-circle-outlined",
            e.BnPlayOutlined = "bn-play-outlined",
            e.BnPlayerLockOutlined = "bn-player-lock-outlined",
            e.BnPlayerResetOutlined = "bn-player-reset-outlined",
            e.BnPlusCircleOutlined = "bn-plus-circle-outlined",
            e.BnPlusOutlined = "bn-plus-outlined",
            e.BnPopInOutlined = "bn-pop-in-outlined",
            e.BnPopOutOutlined = "bn-pop-out-outlined",
            e.BnPulseOutlined = "bn-pulse-outlined",
            e.BnQrCodeOutlined = "bn-qr-code-outlined",
            e.BnQuestionOutlined = "bn-question-outlined",
            e.BnRandomizeOutlined = "bn-randomize-outlined",
            e.BnRepeatOutlined = "bn-repeat-outlined",
            e.BnReplayOutlined = "bn-replay-outlined",
            e.BnRocketOutlined = "bn-rocket-outlined",
            e.BnRotateLeftOutlined = "bn-rotate-left-outlined",
            e.BnRotateRightOutlined = "bn-rotate-right-outlined",
            e.BnSearchOutlined = "bn-search-outlined",
            e.BnSendOutlined = "bn-send-outlined",
            e.BnShareOutlined = "bn-share-outlined",
            e.BnShieldOutlined = "bn-shield-outlined",
            e.BnShopAlertOutlined = "bn-shop-alert-outlined",
            e.BnShopOutlined = "bn-shop-outlined",
            e.BnShuffleOutlined = "bn-shuffle-outlined",
            e.BnSignOutOutlined = "bn-sign-out-outlined",
            e.BnSpeakerOutlined = "bn-speaker-outlined",
            e.BnSpeakerOffOutlined = "bn-speaker-off-outlined",
            e.BnSpeakerOnOutlined = "bn-speaker-on-outlined",
            e.BnSpecialOutlined = "bn-special-outlined",
            e.BnSpeedOutlined = "bn-speed-outlined",
            e.BnStarOutlined = "bn-star-outlined",
            e.BnSyncOutlined = "bn-sync-outlined",
            e.BnTagOutlined = "bn-tag-outlined",
            e.BnTagsOutlined = "bn-tags-outlined",
            e.BnThumbsDownOutlined = "bn-thumbs-down-outlined",
            e.BnThumbsUpOutlined = "bn-thumbs-up-outlined",
            e.BnTicketOutlined = "bn-ticket-outlined",
            e.BnTranscriptionOutlined = "bn-transcription-outlined",
            e.BnTriangleDownOutlined = "bn-triangle-down-outlined",
            e.BnTriangleLeftOutlined = "bn-triangle-left-outlined",
            e.BnTriangleRightOutlined = "bn-triangle-right-outlined",
            e.BnTriangleUpOutlined = "bn-triangle-up-outlined",
            e.BnTrophyOutlined = "bn-trophy-outlined",
            e.BnUpdateOutlined = "bn-update-outlined",
            e.BnUploadOutlined = "bn-upload-outlined",
            e.BnVideoOutlined = "bn-video-outlined",
            e.BnVoiceChatActiveOutlined = "bn-voice-chat-active-outlined",
            e.BnVoiceChatOutlined = "bn-voice-chat-outlined",
            e.BnVoiceChatLoadingOutlined = "bn-voice-chat-loading-outlined",
            e.BnWindowLockOutlined = "bn-window-lock-outlined",
            e.BnWindowUnlockOutlined = "bn-window-unlock-outlined",
            e.BnWrenchOutlined = "bn-wrench-outlined",
            e.BnZoomOutlined = "bn-zoom-outlined"
        }(wt || (wt = {})),
        function(e) {
            e.PaymentAfterpayDefault = "payment-afterpay-default",
            e.PaymentAlipayDefault = "payment-alipay-default",
            e.PaymentAmericanExpressDefault = "payment-american-express-default",
            e.PaymentAupayDefault = "payment-aupay-default",
            e.PaymentBattlenetDefault = "payment-battlenet-default",
            e.PaymentBitCashDefault = "payment-bit-cash-default",
            e.PaymentBokuDefault = "payment-boku-default",
            e.PaymentCarteBancaireDefault = "payment-carte-bancaire-default",
            e.PaymentDinersClubDefault = "payment-diners-club-default",
            e.PaymentDiscoverDefault = "payment-discover-default",
            e.PaymentIdealDefault = "payment-ideal-default",
            e.PaymentJcbDefault = "payment-jcb-default",
            e.PaymentJpOnlineBankingDefault = "payment-jp-online-banking-default",
            e.PaymentKonbiniDefault = "payment-konbini-default",
            e.PaymentKrArsDefault = "payment-kr-ars-default",
            e.PaymentKrBankTransferDefault = "payment-kr-bank-transfer-default",
            e.PaymentKrBooknLifeCultureDefault = "payment-kr-bookn-life-culture-default",
            e.PaymentKrCultureLandGiftCertificateDefault = "payment-kr-culture-land-gift-certificate-default",
            e.PaymentKrCvsConvenienceStoreDefault = "payment-kr-cvs-convenience-store-default",
            e.PaymentKrHappyMoneyDefault = "payment-kr-happy-money-default",
            e.PaymentKrKakaoPayDefault = "payment-kr-kakao-pay-default",
            e.PaymentKrKakaoPayPill = "payment-kr-kakao-pay-pill",
            e.PaymentKrMobileDefault = "payment-kr-mobile-default",
            e.PaymentKrPayCoDefault = "payment-kr-pay-co-default",
            e.PaymentKrPayCoInverse = "payment-kr-pay-co-inverse",
            e.PaymentKrPosaPrepaidCardDefault = "payment-kr-posa-prepaid-card-default",
            e.PaymentKrSmartCultureGiftCertificateDefault = "payment-kr-smart-culture-gift-certificate-default",
            e.PaymentKrSsgDefault = "payment-kr-ssg-default",
            e.PaymentKrTeenCashDefault = "payment-kr-teen-cash-default",
            e.PaymentKrTMoneyDefault = "payment-kr-t-money-default",
            e.PaymentKrTossDefault = "payment-kr-toss-default",
            e.PaymentKrVirtualAccountDefault = "payment-kr-virtual-account-default",
            e.PaymentKrCreditCardDefault = "payment-kr-credit-card-default",
            e.PaymentLinepayDefault = "payment-linepay-default",
            e.PaymentMasterCardDefault = "payment-master-card-default",
            e.PaymentMercadoPagoDefault = "payment-mercado-pago-default",
            e.PaymentPayEasyDefault = "payment-pay-easy-default",
            e.PaymentPaypalDefault = "payment-paypal-default",
            e.PaymentPaypalMarkColor = "payment-paypal-mark-color",
            e.PaymentPaypalWordmark = "payment-paypal-wordmark",
            e.PaymentPaypayDefault = "payment-paypay-default",
            e.PaymentPaysafecardDefault = "payment-paysafecard-default",
            e.PaymentPicPayDefault = "payment-pic-pay-default",
            e.PaymentPixDefault = "payment-pix-default",
            e.PaymentRazerGoldDefault = "payment-razer-gold-default",
            e.PaymentRazerGoldWhite = "payment-razer-gold-white",
            e.PaymentSepaDefault = "payment-sepa-default",
            e.PaymentUnionPayDefault = "payment-union-pay-default",
            e.PaymentUnionPayWhite = "payment-union-pay-white",
            e.PaymentVisaDefault = "payment-visa-default",
            e.PaymentWebMoneyDefault = "payment-web-money-default",
            e.PaymentWechatPayDefault = "payment-wechat-pay-default"
        }(_t || (_t = {})),
        Object.values(ut),
        Object.values(_t),
        Object.values(pt),
        Object.values(ht),
        Object.values(bt),
        Object.values(gt),
        ut.X,
        ut.ArrowLeft,
        ut.ArrowRight,
        ut.ArrowUp,
        ut.ArrowDown,
        ut.ArrowUpRight,
        ut.ChevronDown,
        ut.ChevronDown,
        Object.values(mt),
        Object.values(vt),
        Object.values(ft),
        Object.values(yt),
        Object.values(wt),
        Object.values(yt),
        Object.values(wt);
        const St = kt;
        var At = kt.map((e => e.substring(0, e.lastIndexOf("."))));
        const Et = 1
          , Ct = 2
          , Ot = e => (...t) => ({
            _$litDirective$: e,
            values: t
        });
        class Bt {
            constructor(e) {}
            get _$AU() {
                return this._$AM._$AU
            }
            _$AT(e, t, o) {
                this._$Ct = e,
                this._$AM = t,
                this._$Ci = o
            }
            _$AS(e, t) {
                return this.update(e, t)
            }
            update(e, t) {
                return this.render(...t)
            }
        }
        class Pt extends Bt {
            constructor(e) {
                if (super(e),
                this.it = S,
                e.type !== Ct)
                    throw Error(this.constructor.directiveName + "() can only be used in child bindings")
            }
            render(e) {
                if (e === S || null == e)
                    return this._t = void 0,
                    this.it = e;
                if (e === k)
                    return e;
                if ("string" != typeof e)
                    throw Error(this.constructor.directiveName + "() called with a non-string value");
                if (e === this.it)
                    return this._t;
                this.it = e;
                const t = [e];
                return t.raw = t,
                this._t = {
                    _$litType$: this.constructor.resultType,
                    strings: t,
                    values: []
                }
            }
        }
        Pt.directiveName = "unsafeHTML",
        Pt.resultType = 1;
        const Tt = Ot(Pt);
        class Lt extends Pt {
        }
        Lt.directiveName = "unsafeSVG",
        Lt.resultType = 2;
        const It = Ot(Lt)
          , Rt = ({attribute: e, mOptions: t={}, onConnect: o, onDisconnect: n, onChildListChange: i, onAttributeChange: a, root: r=document.documentElement}) => ("loading" !== document.readyState ? $t({
            attribute: e,
            mOptions: t,
            onConnect: o,
            onDisconnect: n,
            onAttributeChange: a,
            onChildListChange: i,
            root: r
        }) : window.addEventListener("DOMContentLoaded", ( () => $t({
            attribute: e,
            mOptions: t,
            onConnect: o,
            onDisconnect: n,
            onChildListChange: i,
            onAttributeChange: a,
            root: r
        })), {
            once: !0
        }),
        jt)
          , $t = ({attribute: e, mOptions: t, onConnect: o, onDisconnect: n, onChildListChange: i, onAttributeChange: a, root: r}) => {
            jt.attributes[e] = {
                onConnect: o,
                onDisconnect: n,
                onChildListChange: i,
                onAttributeChange: a,
                config: {
                    attributes: t.attributes || !0,
                    childList: t.childList || !0,
                    subtree: t.subtree || !0,
                    attributeOldValue: t.attributeOldValue || !0,
                    attributeFilter: t.attributeFilter || []
                }
            },
            jt.observers[e] = Dt(e, r)
        }
          , jt = {
            attributes: {},
            observers: {},
            observe: (e, t) => {
                jt.attributes[e] && (jt.observers[e].observe(t, jt.attributes[e].config),
                "function" == typeof jt.attributes[e].onConnect && jt.attributes[e].onConnect(t))
            }
        }
          , Dt = (e, t) => {
            const o = new MutationObserver((e => t => {
                for (const o of t)
                    "childList" === o.type ? jt.attributes[e].onChildListChange(o) : "attributes" === o.type && jt.attributes[e].onAttributeChange(o)
            }
            )(e));
            return o.observe(t, jt.attributes[e].config),
            "function" == typeof jt.attributes[e].onConnect && jt.attributes[e].onConnect(t),
            o
        }
        ;
        var Nt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e.g ? e.g : "undefined" != typeof self ? self : {};
        function Mt(e) {
            return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
        }
        var Ft, Ut = {
            exports: {}
        };
        Ft = Ut,
        function() {
            function e(e) {
                var t = {
                    omitExtraWLInCodeBlocks: {
                        defaultValue: !1,
                        describe: "Omit the default extra whiteline added to code blocks",
                        type: "boolean"
                    },
                    noHeaderId: {
                        defaultValue: !1,
                        describe: "Turn on/off generated header id",
                        type: "boolean"
                    },
                    prefixHeaderId: {
                        defaultValue: !1,
                        describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
                        type: "string"
                    },
                    rawPrefixHeaderId: {
                        defaultValue: !1,
                        describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
                        type: "boolean"
                    },
                    ghCompatibleHeaderId: {
                        defaultValue: !1,
                        describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
                        type: "boolean"
                    },
                    rawHeaderId: {
                        defaultValue: !1,
                        describe: "Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",
                        type: "boolean"
                    },
                    headerLevelStart: {
                        defaultValue: !1,
                        describe: "The header blocks level start",
                        type: "integer"
                    },
                    parseImgDimensions: {
                        defaultValue: !1,
                        describe: "Turn on/off image dimension parsing",
                        type: "boolean"
                    },
                    simplifiedAutoLink: {
                        defaultValue: !1,
                        describe: "Turn on/off GFM autolink style",
                        type: "boolean"
                    },
                    excludeTrailingPunctuationFromURLs: {
                        defaultValue: !1,
                        describe: "Excludes trailing punctuation from links generated with autoLinking",
                        type: "boolean"
                    },
                    literalMidWordUnderscores: {
                        defaultValue: !1,
                        describe: "Parse midword underscores as literal underscores",
                        type: "boolean"
                    },
                    literalMidWordAsterisks: {
                        defaultValue: !1,
                        describe: "Parse midword asterisks as literal asterisks",
                        type: "boolean"
                    },
                    strikethrough: {
                        defaultValue: !1,
                        describe: "Turn on/off strikethrough support",
                        type: "boolean"
                    },
                    tables: {
                        defaultValue: !1,
                        describe: "Turn on/off tables support",
                        type: "boolean"
                    },
                    tablesHeaderId: {
                        defaultValue: !1,
                        describe: "Add an id to table headers",
                        type: "boolean"
                    },
                    ghCodeBlocks: {
                        defaultValue: !0,
                        describe: "Turn on/off GFM fenced code blocks support",
                        type: "boolean"
                    },
                    tasklists: {
                        defaultValue: !1,
                        describe: "Turn on/off GFM tasklist support",
                        type: "boolean"
                    },
                    smoothLivePreview: {
                        defaultValue: !1,
                        describe: "Prevents weird effects in live previews due to incomplete input",
                        type: "boolean"
                    },
                    smartIndentationFix: {
                        defaultValue: !1,
                        describe: "Tries to smartly fix indentation in es6 strings",
                        type: "boolean"
                    },
                    disableForced4SpacesIndentedSublists: {
                        defaultValue: !1,
                        describe: "Disables the requirement of indenting nested sublists by 4 spaces",
                        type: "boolean"
                    },
                    simpleLineBreaks: {
                        defaultValue: !1,
                        describe: "Parses simple line breaks as <br> (GFM Style)",
                        type: "boolean"
                    },
                    requireSpaceBeforeHeadingText: {
                        defaultValue: !1,
                        describe: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
                        type: "boolean"
                    },
                    ghMentions: {
                        defaultValue: !1,
                        describe: "Enables github @mentions",
                        type: "boolean"
                    },
                    ghMentionsLink: {
                        defaultValue: "https://github.com/{u}",
                        describe: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
                        type: "string"
                    },
                    encodeEmails: {
                        defaultValue: !0,
                        describe: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
                        type: "boolean"
                    },
                    openLinksInNewWindow: {
                        defaultValue: !1,
                        describe: "Open all links in new windows",
                        type: "boolean"
                    },
                    backslashEscapesHTMLTags: {
                        defaultValue: !1,
                        describe: "Support for HTML Tag escaping. ex: <div>foo</div>",
                        type: "boolean"
                    },
                    emoji: {
                        defaultValue: !1,
                        describe: "Enable emoji support. Ex: `this is a :smile: emoji`",
                        type: "boolean"
                    },
                    underline: {
                        defaultValue: !1,
                        describe: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
                        type: "boolean"
                    },
                    ellipsis: {
                        defaultValue: !0,
                        describe: "Replaces three dots with the ellipsis unicode character",
                        type: "boolean"
                    },
                    completeHTMLDocument: {
                        defaultValue: !1,
                        describe: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
                        type: "boolean"
                    },
                    metadata: {
                        defaultValue: !1,
                        describe: "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
                        type: "boolean"
                    },
                    splitAdjacentBlockquotes: {
                        defaultValue: !1,
                        describe: "Split adjacent blockquote blocks",
                        type: "boolean"
                    }
                };
                if (!1 === e)
                    return JSON.parse(JSON.stringify(t));
                var o = {};
                for (var n in t)
                    t.hasOwnProperty(n) && (o[n] = t[n].defaultValue);
                return o
            }
            var t = {}
              , o = {}
              , n = {}
              , i = e(!0)
              , a = "vanilla"
              , r = {
                github: {
                    omitExtraWLInCodeBlocks: !0,
                    simplifiedAutoLink: !0,
                    excludeTrailingPunctuationFromURLs: !0,
                    literalMidWordUnderscores: !0,
                    strikethrough: !0,
                    tables: !0,
                    tablesHeaderId: !0,
                    ghCodeBlocks: !0,
                    tasklists: !0,
                    disableForced4SpacesIndentedSublists: !0,
                    simpleLineBreaks: !0,
                    requireSpaceBeforeHeadingText: !0,
                    ghCompatibleHeaderId: !0,
                    ghMentions: !0,
                    backslashEscapesHTMLTags: !0,
                    emoji: !0,
                    splitAdjacentBlockquotes: !0
                },
                original: {
                    noHeaderId: !0,
                    ghCodeBlocks: !1
                },
                ghost: {
                    omitExtraWLInCodeBlocks: !0,
                    parseImgDimensions: !0,
                    simplifiedAutoLink: !0,
                    excludeTrailingPunctuationFromURLs: !0,
                    literalMidWordUnderscores: !0,
                    strikethrough: !0,
                    tables: !0,
                    tablesHeaderId: !0,
                    ghCodeBlocks: !0,
                    tasklists: !0,
                    smoothLivePreview: !0,
                    simpleLineBreaks: !0,
                    requireSpaceBeforeHeadingText: !0,
                    ghMentions: !1,
                    encodeEmails: !0
                },
                vanilla: e(!0),
                allOn: function() {
                    var t = e(!0)
                      , o = {};
                    for (var n in t)
                        t.hasOwnProperty(n) && (o[n] = !0);
                    return o
                }()
            };
            function s(e, o) {
                var n = o ? "Error in " + o + " extension->" : "Error in unnamed extension"
                  , i = {
                    valid: !0,
                    error: ""
                };
                t.helper.isArray(e) || (e = [e]);
                for (var a = 0; a < e.length; ++a) {
                    var r = n + " sub-extension " + a + ": "
                      , s = e[a];
                    if ("object" != typeof s)
                        return i.valid = !1,
                        i.error = r + "must be an object, but " + typeof s + " given",
                        i;
                    if (!t.helper.isString(s.type))
                        return i.valid = !1,
                        i.error = r + 'property "type" must be a string, but ' + typeof s.type + " given",
                        i;
                    var l = s.type = s.type.toLowerCase();
                    if ("language" === l && (l = s.type = "lang"),
                    "html" === l && (l = s.type = "output"),
                    "lang" !== l && "output" !== l && "listener" !== l)
                        return i.valid = !1,
                        i.error = r + "type " + l + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"',
                        i;
                    if ("listener" === l) {
                        if (t.helper.isUndefined(s.listeners))
                            return i.valid = !1,
                            i.error = r + '. Extensions of type "listener" must have a property called "listeners"',
                            i
                    } else if (t.helper.isUndefined(s.filter) && t.helper.isUndefined(s.regex))
                        return i.valid = !1,
                        i.error = r + l + ' extensions must define either a "regex" property or a "filter" method',
                        i;
                    if (s.listeners) {
                        if ("object" != typeof s.listeners)
                            return i.valid = !1,
                            i.error = r + '"listeners" property must be an object but ' + typeof s.listeners + " given",
                            i;
                        for (var c in s.listeners)
                            if (s.listeners.hasOwnProperty(c) && "function" != typeof s.listeners[c])
                                return i.valid = !1,
                                i.error = r + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + c + " must be a function but " + typeof s.listeners[c] + " given",
                                i
                    }
                    if (s.filter) {
                        if ("function" != typeof s.filter)
                            return i.valid = !1,
                            i.error = r + '"filter" must be a function, but ' + typeof s.filter + " given",
                            i
                    } else if (s.regex) {
                        if (t.helper.isString(s.regex) && (s.regex = new RegExp(s.regex,"g")),
                        !(s.regex instanceof RegExp))
                            return i.valid = !1,
                            i.error = r + '"regex" property must either be a string or a RegExp object, but ' + typeof s.regex + " given",
                            i;
                        if (t.helper.isUndefined(s.replace))
                            return i.valid = !1,
                            i.error = r + '"regex" extensions must implement a replace string or function',
                            i
                    }
                }
                return i
            }
            function l(e, t) {
                return "¨E" + t.charCodeAt(0) + "E"
            }
            t.helper = {},
            t.extensions = {},
            t.setOption = function(e, t) {
                return i[e] = t,
                this
            }
            ,
            t.getOption = function(e) {
                return i[e]
            }
            ,
            t.getOptions = function() {
                return i
            }
            ,
            t.resetOptions = function() {
                i = e(!0)
            }
            ,
            t.setFlavor = function(e) {
                if (!r.hasOwnProperty(e))
                    throw Error(e + " flavor was not found");
                t.resetOptions();
                var o = r[e];
                for (var n in a = e,
                o)
                    o.hasOwnProperty(n) && (i[n] = o[n])
            }
            ,
            t.getFlavor = function() {
                return a
            }
            ,
            t.getFlavorOptions = function(e) {
                if (r.hasOwnProperty(e))
                    return r[e]
            }
            ,
            t.getDefaultOptions = function(t) {
                return e(t)
            }
            ,
            t.subParser = function(e, n) {
                if (t.helper.isString(e)) {
                    if (void 0 === n) {
                        if (o.hasOwnProperty(e))
                            return o[e];
                        throw Error("SubParser named " + e + " not registered!")
                    }
                    o[e] = n
                }
            }
            ,
            t.extension = function(e, o) {
                if (!t.helper.isString(e))
                    throw Error("Extension 'name' must be a string");
                if (e = t.helper.stdExtName(e),
                t.helper.isUndefined(o)) {
                    if (!n.hasOwnProperty(e))
                        throw Error("Extension named " + e + " is not registered!");
                    return n[e]
                }
                "function" == typeof o && (o = o()),
                t.helper.isArray(o) || (o = [o]);
                var i = s(o, e);
                if (!i.valid)
                    throw Error(i.error);
                n[e] = o
            }
            ,
            t.getAllExtensions = function() {
                return n
            }
            ,
            t.removeExtension = function(e) {
                delete n[e]
            }
            ,
            t.resetExtensions = function() {
                n = {}
            }
            ,
            t.validateExtension = function(e) {
                var t = s(e, null);
                return !!t.valid || (console.warn(t.error),
                !1)
            }
            ,
            t.hasOwnProperty("helper") || (t.helper = {}),
            t.helper.isString = function(e) {
                return "string" == typeof e || e instanceof String
            }
            ,
            t.helper.isFunction = function(e) {
                return e && "[object Function]" === {}.toString.call(e)
            }
            ,
            t.helper.isArray = function(e) {
                return Array.isArray(e)
            }
            ,
            t.helper.isUndefined = function(e) {
                return void 0 === e
            }
            ,
            t.helper.forEach = function(e, o) {
                if (t.helper.isUndefined(e))
                    throw new Error("obj param is required");
                if (t.helper.isUndefined(o))
                    throw new Error("callback param is required");
                if (!t.helper.isFunction(o))
                    throw new Error("callback param must be a function/closure");
                if ("function" == typeof e.forEach)
                    e.forEach(o);
                else if (t.helper.isArray(e))
                    for (var n = 0; n < e.length; n++)
                        o(e[n], n, e);
                else {
                    if ("object" != typeof e)
                        throw new Error("obj does not seem to be an array or an iterable object");
                    for (var i in e)
                        e.hasOwnProperty(i) && o(e[i], i, e)
                }
            }
            ,
            t.helper.stdExtName = function(e) {
                return e.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase()
            }
            ,
            t.helper.escapeCharactersCallback = l,
            t.helper.escapeCharacters = function(e, t, o) {
                var n = "([" + t.replace(/([\[\]\\])/g, "\\$1") + "])";
                o && (n = "\\\\" + n);
                var i = new RegExp(n,"g");
                return e = e.replace(i, l)
            }
            ,
            t.helper.unescapeHTMLEntities = function(e) {
                return e.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
            }
            ;
            var c = function(e, t, o, n) {
                var i, a, r, s, l, c = n || "", d = c.indexOf("g") > -1, u = new RegExp(t + "|" + o,"g" + c.replace(/g/g, "")), p = new RegExp(t,c.replace(/g/g, "")), h = [];
                do {
                    for (i = 0; r = u.exec(e); )
                        if (p.test(r[0]))
                            i++ || (s = (a = u.lastIndex) - r[0].length);
                        else if (i && !--i) {
                            l = r.index + r[0].length;
                            var b = {
                                left: {
                                    start: s,
                                    end: a
                                },
                                match: {
                                    start: a,
                                    end: r.index
                                },
                                right: {
                                    start: r.index,
                                    end: l
                                },
                                wholeMatch: {
                                    start: s,
                                    end: l
                                }
                            };
                            if (h.push(b),
                            !d)
                                return h
                        }
                } while (i && (u.lastIndex = a));
                return h
            };
            t.helper.matchRecursiveRegExp = function(e, t, o, n) {
                for (var i = c(e, t, o, n), a = [], r = 0; r < i.length; ++r)
                    a.push([e.slice(i[r].wholeMatch.start, i[r].wholeMatch.end), e.slice(i[r].match.start, i[r].match.end), e.slice(i[r].left.start, i[r].left.end), e.slice(i[r].right.start, i[r].right.end)]);
                return a
            }
            ,
            t.helper.replaceRecursiveRegExp = function(e, o, n, i, a) {
                if (!t.helper.isFunction(o)) {
                    var r = o;
                    o = function() {
                        return r
                    }
                }
                var s = c(e, n, i, a)
                  , l = e
                  , d = s.length;
                if (d > 0) {
                    var u = [];
                    0 !== s[0].wholeMatch.start && u.push(e.slice(0, s[0].wholeMatch.start));
                    for (var p = 0; p < d; ++p)
                        u.push(o(e.slice(s[p].wholeMatch.start, s[p].wholeMatch.end), e.slice(s[p].match.start, s[p].match.end), e.slice(s[p].left.start, s[p].left.end), e.slice(s[p].right.start, s[p].right.end))),
                        p < d - 1 && u.push(e.slice(s[p].wholeMatch.end, s[p + 1].wholeMatch.start));
                    s[d - 1].wholeMatch.end < e.length && u.push(e.slice(s[d - 1].wholeMatch.end)),
                    l = u.join("")
                }
                return l
            }
            ,
            t.helper.regexIndexOf = function(e, o, n) {
                if (!t.helper.isString(e))
                    throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
                if (o instanceof RegExp == 0)
                    throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
                var i = e.substring(n || 0).search(o);
                return i >= 0 ? i + (n || 0) : i
            }
            ,
            t.helper.splitAtIndex = function(e, o) {
                if (!t.helper.isString(e))
                    throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
                return [e.substring(0, o), e.substring(o)]
            }
            ,
            t.helper.encodeEmailAddress = function(e) {
                var t = [function(e) {
                    return "&#" + e.charCodeAt(0) + ";"
                }
                , function(e) {
                    return "&#x" + e.charCodeAt(0).toString(16) + ";"
                }
                , function(e) {
                    return e
                }
                ];
                return e = e.replace(/./g, (function(e) {
                    if ("@" === e)
                        e = t[Math.floor(2 * Math.random())](e);
                    else {
                        var o = Math.random();
                        e = o > .9 ? t[2](e) : o > .45 ? t[1](e) : t[0](e)
                    }
                    return e
                }
                )),
                e
            }
            ,
            t.helper.padEnd = function(e, t, o) {
                return t |= 0,
                o = String(o || " "),
                e.length > t ? String(e) : ((t -= e.length) > o.length && (o += o.repeat(t / o.length)),
                String(e) + o.slice(0, t))
            }
            ,
            "undefined" == typeof console && (console = {
                warn: function(e) {
                    alert(e)
                },
                log: function(e) {
                    alert(e)
                },
                error: function(e) {
                    throw e
                }
            }),
            t.helper.regexes = {
                asteriskDashAndColon: /([*_:~])/g
            },
            t.helper.emojis = {
                "+1": "👍",
                "-1": "👎",
                100: "💯",
                1234: "🔢",
                "1st_place_medal": "🥇",
                "2nd_place_medal": "🥈",
                "3rd_place_medal": "🥉",
                "8ball": "🎱",
                a: "🅰️",
                ab: "🆎",
                abc: "🔤",
                abcd: "🔡",
                accept: "🉑",
                aerial_tramway: "🚡",
                airplane: "✈️",
                alarm_clock: "⏰",
                alembic: "⚗️",
                alien: "👽",
                ambulance: "🚑",
                amphora: "🏺",
                anchor: "⚓️",
                angel: "👼",
                anger: "💢",
                angry: "😠",
                anguished: "😧",
                ant: "🐜",
                apple: "🍎",
                aquarius: "♒️",
                aries: "♈️",
                arrow_backward: "◀️",
                arrow_double_down: "⏬",
                arrow_double_up: "⏫",
                arrow_down: "⬇️",
                arrow_down_small: "🔽",
                arrow_forward: "▶️",
                arrow_heading_down: "⤵️",
                arrow_heading_up: "⤴️",
                arrow_left: "⬅️",
                arrow_lower_left: "↙️",
                arrow_lower_right: "↘️",
                arrow_right: "➡️",
                arrow_right_hook: "↪️",
                arrow_up: "⬆️",
                arrow_up_down: "↕️",
                arrow_up_small: "🔼",
                arrow_upper_left: "↖️",
                arrow_upper_right: "↗️",
                arrows_clockwise: "🔃",
                arrows_counterclockwise: "🔄",
                art: "🎨",
                articulated_lorry: "🚛",
                artificial_satellite: "🛰",
                astonished: "😲",
                athletic_shoe: "👟",
                atm: "🏧",
                atom_symbol: "⚛️",
                avocado: "🥑",
                b: "🅱️",
                baby: "👶",
                baby_bottle: "🍼",
                baby_chick: "🐤",
                baby_symbol: "🚼",
                back: "🔙",
                bacon: "🥓",
                badminton: "🏸",
                baggage_claim: "🛄",
                baguette_bread: "🥖",
                balance_scale: "⚖️",
                balloon: "🎈",
                ballot_box: "🗳",
                ballot_box_with_check: "☑️",
                bamboo: "🎍",
                banana: "🍌",
                bangbang: "‼️",
                bank: "🏦",
                bar_chart: "📊",
                barber: "💈",
                baseball: "⚾️",
                basketball: "🏀",
                basketball_man: "⛹️",
                basketball_woman: "⛹️&zwj;♀️",
                bat: "🦇",
                bath: "🛀",
                bathtub: "🛁",
                battery: "🔋",
                beach_umbrella: "🏖",
                bear: "🐻",
                bed: "🛏",
                bee: "🐝",
                beer: "🍺",
                beers: "🍻",
                beetle: "🐞",
                beginner: "🔰",
                bell: "🔔",
                bellhop_bell: "🛎",
                bento: "🍱",
                biking_man: "🚴",
                bike: "🚲",
                biking_woman: "🚴&zwj;♀️",
                bikini: "👙",
                biohazard: "☣️",
                bird: "🐦",
                birthday: "🎂",
                black_circle: "⚫️",
                black_flag: "🏴",
                black_heart: "🖤",
                black_joker: "🃏",
                black_large_square: "⬛️",
                black_medium_small_square: "◾️",
                black_medium_square: "◼️",
                black_nib: "✒️",
                black_small_square: "▪️",
                black_square_button: "🔲",
                blonde_man: "👱",
                blonde_woman: "👱&zwj;♀️",
                blossom: "🌼",
                blowfish: "🐡",
                blue_book: "📘",
                blue_car: "🚙",
                blue_heart: "💙",
                blush: "😊",
                boar: "🐗",
                boat: "⛵️",
                bomb: "💣",
                book: "📖",
                bookmark: "🔖",
                bookmark_tabs: "📑",
                books: "📚",
                boom: "💥",
                boot: "👢",
                bouquet: "💐",
                bowing_man: "🙇",
                bow_and_arrow: "🏹",
                bowing_woman: "🙇&zwj;♀️",
                bowling: "🎳",
                boxing_glove: "🥊",
                boy: "👦",
                bread: "🍞",
                bride_with_veil: "👰",
                bridge_at_night: "🌉",
                briefcase: "💼",
                broken_heart: "💔",
                bug: "🐛",
                building_construction: "🏗",
                bulb: "💡",
                bullettrain_front: "🚅",
                bullettrain_side: "🚄",
                burrito: "🌯",
                bus: "🚌",
                business_suit_levitating: "🕴",
                busstop: "🚏",
                bust_in_silhouette: "👤",
                busts_in_silhouette: "👥",
                butterfly: "🦋",
                cactus: "🌵",
                cake: "🍰",
                calendar: "📆",
                call_me_hand: "🤙",
                calling: "📲",
                camel: "🐫",
                camera: "📷",
                camera_flash: "📸",
                camping: "🏕",
                cancer: "♋️",
                candle: "🕯",
                candy: "🍬",
                canoe: "🛶",
                capital_abcd: "🔠",
                capricorn: "♑️",
                car: "🚗",
                card_file_box: "🗃",
                card_index: "📇",
                card_index_dividers: "🗂",
                carousel_horse: "🎠",
                carrot: "🥕",
                cat: "🐱",
                cat2: "🐈",
                cd: "💿",
                chains: "⛓",
                champagne: "🍾",
                chart: "💹",
                chart_with_downwards_trend: "📉",
                chart_with_upwards_trend: "📈",
                checkered_flag: "🏁",
                cheese: "🧀",
                cherries: "🍒",
                cherry_blossom: "🌸",
                chestnut: "🌰",
                chicken: "🐔",
                children_crossing: "🚸",
                chipmunk: "🐿",
                chocolate_bar: "🍫",
                christmas_tree: "🎄",
                church: "⛪️",
                cinema: "🎦",
                circus_tent: "🎪",
                city_sunrise: "🌇",
                city_sunset: "🌆",
                cityscape: "🏙",
                cl: "🆑",
                clamp: "🗜",
                clap: "👏",
                clapper: "🎬",
                classical_building: "🏛",
                clinking_glasses: "🥂",
                clipboard: "📋",
                clock1: "🕐",
                clock10: "🕙",
                clock1030: "🕥",
                clock11: "🕚",
                clock1130: "🕦",
                clock12: "🕛",
                clock1230: "🕧",
                clock130: "🕜",
                clock2: "🕑",
                clock230: "🕝",
                clock3: "🕒",
                clock330: "🕞",
                clock4: "🕓",
                clock430: "🕟",
                clock5: "🕔",
                clock530: "🕠",
                clock6: "🕕",
                clock630: "🕡",
                clock7: "🕖",
                clock730: "🕢",
                clock8: "🕗",
                clock830: "🕣",
                clock9: "🕘",
                clock930: "🕤",
                closed_book: "📕",
                closed_lock_with_key: "🔐",
                closed_umbrella: "🌂",
                cloud: "☁️",
                cloud_with_lightning: "🌩",
                cloud_with_lightning_and_rain: "⛈",
                cloud_with_rain: "🌧",
                cloud_with_snow: "🌨",
                clown_face: "🤡",
                clubs: "♣️",
                cocktail: "🍸",
                coffee: "☕️",
                coffin: "⚰️",
                cold_sweat: "😰",
                comet: "☄️",
                computer: "💻",
                computer_mouse: "🖱",
                confetti_ball: "🎊",
                confounded: "😖",
                confused: "😕",
                congratulations: "㊗️",
                construction: "🚧",
                construction_worker_man: "👷",
                construction_worker_woman: "👷&zwj;♀️",
                control_knobs: "🎛",
                convenience_store: "🏪",
                cookie: "🍪",
                cool: "🆒",
                policeman: "👮",
                copyright: "©️",
                corn: "🌽",
                couch_and_lamp: "🛋",
                couple: "👫",
                couple_with_heart_woman_man: "💑",
                couple_with_heart_man_man: "👨&zwj;❤️&zwj;👨",
                couple_with_heart_woman_woman: "👩&zwj;❤️&zwj;👩",
                couplekiss_man_man: "👨&zwj;❤️&zwj;💋&zwj;👨",
                couplekiss_man_woman: "💏",
                couplekiss_woman_woman: "👩&zwj;❤️&zwj;💋&zwj;👩",
                cow: "🐮",
                cow2: "🐄",
                cowboy_hat_face: "🤠",
                crab: "🦀",
                crayon: "🖍",
                credit_card: "💳",
                crescent_moon: "🌙",
                cricket: "🏏",
                crocodile: "🐊",
                croissant: "🥐",
                crossed_fingers: "🤞",
                crossed_flags: "🎌",
                crossed_swords: "⚔️",
                crown: "👑",
                cry: "😢",
                crying_cat_face: "😿",
                crystal_ball: "🔮",
                cucumber: "🥒",
                cupid: "💘",
                curly_loop: "➰",
                currency_exchange: "💱",
                curry: "🍛",
                custard: "🍮",
                customs: "🛃",
                cyclone: "🌀",
                dagger: "🗡",
                dancer: "💃",
                dancing_women: "👯",
                dancing_men: "👯&zwj;♂️",
                dango: "🍡",
                dark_sunglasses: "🕶",
                dart: "🎯",
                dash: "💨",
                date: "📅",
                deciduous_tree: "🌳",
                deer: "🦌",
                department_store: "🏬",
                derelict_house: "🏚",
                desert: "🏜",
                desert_island: "🏝",
                desktop_computer: "🖥",
                male_detective: "🕵️",
                diamond_shape_with_a_dot_inside: "💠",
                diamonds: "♦️",
                disappointed: "😞",
                disappointed_relieved: "😥",
                dizzy: "💫",
                dizzy_face: "😵",
                do_not_litter: "🚯",
                dog: "🐶",
                dog2: "🐕",
                dollar: "💵",
                dolls: "🎎",
                dolphin: "🐬",
                door: "🚪",
                doughnut: "🍩",
                dove: "🕊",
                dragon: "🐉",
                dragon_face: "🐲",
                dress: "👗",
                dromedary_camel: "🐪",
                drooling_face: "🤤",
                droplet: "💧",
                drum: "🥁",
                duck: "🦆",
                dvd: "📀",
                "e-mail": "📧",
                eagle: "🦅",
                ear: "👂",
                ear_of_rice: "🌾",
                earth_africa: "🌍",
                earth_americas: "🌎",
                earth_asia: "🌏",
                egg: "🥚",
                eggplant: "🍆",
                eight_pointed_black_star: "✴️",
                eight_spoked_asterisk: "✳️",
                electric_plug: "🔌",
                elephant: "🐘",
                email: "✉️",
                end: "🔚",
                envelope_with_arrow: "📩",
                euro: "💶",
                european_castle: "🏰",
                european_post_office: "🏤",
                evergreen_tree: "🌲",
                exclamation: "❗️",
                expressionless: "😑",
                eye: "👁",
                eye_speech_bubble: "👁&zwj;🗨",
                eyeglasses: "👓",
                eyes: "👀",
                face_with_head_bandage: "🤕",
                face_with_thermometer: "🤒",
                fist_oncoming: "👊",
                factory: "🏭",
                fallen_leaf: "🍂",
                family_man_woman_boy: "👪",
                family_man_boy: "👨&zwj;👦",
                family_man_boy_boy: "👨&zwj;👦&zwj;👦",
                family_man_girl: "👨&zwj;👧",
                family_man_girl_boy: "👨&zwj;👧&zwj;👦",
                family_man_girl_girl: "👨&zwj;👧&zwj;👧",
                family_man_man_boy: "👨&zwj;👨&zwj;👦",
                family_man_man_boy_boy: "👨&zwj;👨&zwj;👦&zwj;👦",
                family_man_man_girl: "👨&zwj;👨&zwj;👧",
                family_man_man_girl_boy: "👨&zwj;👨&zwj;👧&zwj;👦",
                family_man_man_girl_girl: "👨&zwj;👨&zwj;👧&zwj;👧",
                family_man_woman_boy_boy: "👨&zwj;👩&zwj;👦&zwj;👦",
                family_man_woman_girl: "👨&zwj;👩&zwj;👧",
                family_man_woman_girl_boy: "👨&zwj;👩&zwj;👧&zwj;👦",
                family_man_woman_girl_girl: "👨&zwj;👩&zwj;👧&zwj;👧",
                family_woman_boy: "👩&zwj;👦",
                family_woman_boy_boy: "👩&zwj;👦&zwj;👦",
                family_woman_girl: "👩&zwj;👧",
                family_woman_girl_boy: "👩&zwj;👧&zwj;👦",
                family_woman_girl_girl: "👩&zwj;👧&zwj;👧",
                family_woman_woman_boy: "👩&zwj;👩&zwj;👦",
                family_woman_woman_boy_boy: "👩&zwj;👩&zwj;👦&zwj;👦",
                family_woman_woman_girl: "👩&zwj;👩&zwj;👧",
                family_woman_woman_girl_boy: "👩&zwj;👩&zwj;👧&zwj;👦",
                family_woman_woman_girl_girl: "👩&zwj;👩&zwj;👧&zwj;👧",
                fast_forward: "⏩",
                fax: "📠",
                fearful: "😨",
                feet: "🐾",
                female_detective: "🕵️&zwj;♀️",
                ferris_wheel: "🎡",
                ferry: "⛴",
                field_hockey: "🏑",
                file_cabinet: "🗄",
                file_folder: "📁",
                film_projector: "📽",
                film_strip: "🎞",
                fire: "🔥",
                fire_engine: "🚒",
                fireworks: "🎆",
                first_quarter_moon: "🌓",
                first_quarter_moon_with_face: "🌛",
                fish: "🐟",
                fish_cake: "🍥",
                fishing_pole_and_fish: "🎣",
                fist_raised: "✊",
                fist_left: "🤛",
                fist_right: "🤜",
                flags: "🎏",
                flashlight: "🔦",
                fleur_de_lis: "⚜️",
                flight_arrival: "🛬",
                flight_departure: "🛫",
                floppy_disk: "💾",
                flower_playing_cards: "🎴",
                flushed: "😳",
                fog: "🌫",
                foggy: "🌁",
                football: "🏈",
                footprints: "👣",
                fork_and_knife: "🍴",
                fountain: "⛲️",
                fountain_pen: "🖋",
                four_leaf_clover: "🍀",
                fox_face: "🦊",
                framed_picture: "🖼",
                free: "🆓",
                fried_egg: "🍳",
                fried_shrimp: "🍤",
                fries: "🍟",
                frog: "🐸",
                frowning: "😦",
                frowning_face: "☹️",
                frowning_man: "🙍&zwj;♂️",
                frowning_woman: "🙍",
                middle_finger: "🖕",
                fuelpump: "⛽️",
                full_moon: "🌕",
                full_moon_with_face: "🌝",
                funeral_urn: "⚱️",
                game_die: "🎲",
                gear: "⚙️",
                gem: "💎",
                gemini: "♊️",
                ghost: "👻",
                gift: "🎁",
                gift_heart: "💝",
                girl: "👧",
                globe_with_meridians: "🌐",
                goal_net: "🥅",
                goat: "🐐",
                golf: "⛳️",
                golfing_man: "🏌️",
                golfing_woman: "🏌️&zwj;♀️",
                gorilla: "🦍",
                grapes: "🍇",
                green_apple: "🍏",
                green_book: "📗",
                green_heart: "💚",
                green_salad: "🥗",
                grey_exclamation: "❕",
                grey_question: "❔",
                grimacing: "😬",
                grin: "😁",
                grinning: "😀",
                guardsman: "💂",
                guardswoman: "💂&zwj;♀️",
                guitar: "🎸",
                gun: "🔫",
                haircut_woman: "💇",
                haircut_man: "💇&zwj;♂️",
                hamburger: "🍔",
                hammer: "🔨",
                hammer_and_pick: "⚒",
                hammer_and_wrench: "🛠",
                hamster: "🐹",
                hand: "✋",
                handbag: "👜",
                handshake: "🤝",
                hankey: "💩",
                hatched_chick: "🐥",
                hatching_chick: "🐣",
                headphones: "🎧",
                hear_no_evil: "🙉",
                heart: "❤️",
                heart_decoration: "💟",
                heart_eyes: "😍",
                heart_eyes_cat: "😻",
                heartbeat: "💓",
                heartpulse: "💗",
                hearts: "♥️",
                heavy_check_mark: "✔️",
                heavy_division_sign: "➗",
                heavy_dollar_sign: "💲",
                heavy_heart_exclamation: "❣️",
                heavy_minus_sign: "➖",
                heavy_multiplication_x: "✖️",
                heavy_plus_sign: "➕",
                helicopter: "🚁",
                herb: "🌿",
                hibiscus: "🌺",
                high_brightness: "🔆",
                high_heel: "👠",
                hocho: "🔪",
                hole: "🕳",
                honey_pot: "🍯",
                horse: "🐴",
                horse_racing: "🏇",
                hospital: "🏥",
                hot_pepper: "🌶",
                hotdog: "🌭",
                hotel: "🏨",
                hotsprings: "♨️",
                hourglass: "⌛️",
                hourglass_flowing_sand: "⏳",
                house: "🏠",
                house_with_garden: "🏡",
                houses: "🏘",
                hugs: "🤗",
                hushed: "😯",
                ice_cream: "🍨",
                ice_hockey: "🏒",
                ice_skate: "⛸",
                icecream: "🍦",
                id: "🆔",
                ideograph_advantage: "🉐",
                imp: "👿",
                inbox_tray: "📥",
                incoming_envelope: "📨",
                tipping_hand_woman: "💁",
                information_source: "ℹ️",
                innocent: "😇",
                interrobang: "⁉️",
                iphone: "📱",
                izakaya_lantern: "🏮",
                jack_o_lantern: "🎃",
                japan: "🗾",
                japanese_castle: "🏯",
                japanese_goblin: "👺",
                japanese_ogre: "👹",
                jeans: "👖",
                joy: "😂",
                joy_cat: "😹",
                joystick: "🕹",
                kaaba: "🕋",
                key: "🔑",
                keyboard: "⌨️",
                keycap_ten: "🔟",
                kick_scooter: "🛴",
                kimono: "👘",
                kiss: "💋",
                kissing: "😗",
                kissing_cat: "😽",
                kissing_closed_eyes: "😚",
                kissing_heart: "😘",
                kissing_smiling_eyes: "😙",
                kiwi_fruit: "🥝",
                koala: "🐨",
                koko: "🈁",
                label: "🏷",
                large_blue_circle: "🔵",
                large_blue_diamond: "🔷",
                large_orange_diamond: "🔶",
                last_quarter_moon: "🌗",
                last_quarter_moon_with_face: "🌜",
                latin_cross: "✝️",
                laughing: "😆",
                leaves: "🍃",
                ledger: "📒",
                left_luggage: "🛅",
                left_right_arrow: "↔️",
                leftwards_arrow_with_hook: "↩️",
                lemon: "🍋",
                leo: "♌️",
                leopard: "🐆",
                level_slider: "🎚",
                libra: "♎️",
                light_rail: "🚈",
                link: "🔗",
                lion: "🦁",
                lips: "👄",
                lipstick: "💄",
                lizard: "🦎",
                lock: "🔒",
                lock_with_ink_pen: "🔏",
                lollipop: "🍭",
                loop: "➿",
                loud_sound: "🔊",
                loudspeaker: "📢",
                love_hotel: "🏩",
                love_letter: "💌",
                low_brightness: "🔅",
                lying_face: "🤥",
                m: "Ⓜ️",
                mag: "🔍",
                mag_right: "🔎",
                mahjong: "🀄️",
                mailbox: "📫",
                mailbox_closed: "📪",
                mailbox_with_mail: "📬",
                mailbox_with_no_mail: "📭",
                man: "👨",
                man_artist: "👨&zwj;🎨",
                man_astronaut: "👨&zwj;🚀",
                man_cartwheeling: "🤸&zwj;♂️",
                man_cook: "👨&zwj;🍳",
                man_dancing: "🕺",
                man_facepalming: "🤦&zwj;♂️",
                man_factory_worker: "👨&zwj;🏭",
                man_farmer: "👨&zwj;🌾",
                man_firefighter: "👨&zwj;🚒",
                man_health_worker: "👨&zwj;⚕️",
                man_in_tuxedo: "🤵",
                man_judge: "👨&zwj;⚖️",
                man_juggling: "🤹&zwj;♂️",
                man_mechanic: "👨&zwj;🔧",
                man_office_worker: "👨&zwj;💼",
                man_pilot: "👨&zwj;✈️",
                man_playing_handball: "🤾&zwj;♂️",
                man_playing_water_polo: "🤽&zwj;♂️",
                man_scientist: "👨&zwj;🔬",
                man_shrugging: "🤷&zwj;♂️",
                man_singer: "👨&zwj;🎤",
                man_student: "👨&zwj;🎓",
                man_teacher: "👨&zwj;🏫",
                man_technologist: "👨&zwj;💻",
                man_with_gua_pi_mao: "👲",
                man_with_turban: "👳",
                tangerine: "🍊",
                mans_shoe: "👞",
                mantelpiece_clock: "🕰",
                maple_leaf: "🍁",
                martial_arts_uniform: "🥋",
                mask: "😷",
                massage_woman: "💆",
                massage_man: "💆&zwj;♂️",
                meat_on_bone: "🍖",
                medal_military: "🎖",
                medal_sports: "🏅",
                mega: "📣",
                melon: "🍈",
                memo: "📝",
                men_wrestling: "🤼&zwj;♂️",
                menorah: "🕎",
                mens: "🚹",
                metal: "🤘",
                metro: "🚇",
                microphone: "🎤",
                microscope: "🔬",
                milk_glass: "🥛",
                milky_way: "🌌",
                minibus: "🚐",
                minidisc: "💽",
                mobile_phone_off: "📴",
                money_mouth_face: "🤑",
                money_with_wings: "💸",
                moneybag: "💰",
                monkey: "🐒",
                monkey_face: "🐵",
                monorail: "🚝",
                moon: "🌔",
                mortar_board: "🎓",
                mosque: "🕌",
                motor_boat: "🛥",
                motor_scooter: "🛵",
                motorcycle: "🏍",
                motorway: "🛣",
                mount_fuji: "🗻",
                mountain: "⛰",
                mountain_biking_man: "🚵",
                mountain_biking_woman: "🚵&zwj;♀️",
                mountain_cableway: "🚠",
                mountain_railway: "🚞",
                mountain_snow: "🏔",
                mouse: "🐭",
                mouse2: "🐁",
                movie_camera: "🎥",
                moyai: "🗿",
                mrs_claus: "🤶",
                muscle: "💪",
                mushroom: "🍄",
                musical_keyboard: "🎹",
                musical_note: "🎵",
                musical_score: "🎼",
                mute: "🔇",
                nail_care: "💅",
                name_badge: "📛",
                national_park: "🏞",
                nauseated_face: "🤢",
                necktie: "👔",
                negative_squared_cross_mark: "❎",
                nerd_face: "🤓",
                neutral_face: "😐",
                new: "🆕",
                new_moon: "🌑",
                new_moon_with_face: "🌚",
                newspaper: "📰",
                newspaper_roll: "🗞",
                next_track_button: "⏭",
                ng: "🆖",
                no_good_man: "🙅&zwj;♂️",
                no_good_woman: "🙅",
                night_with_stars: "🌃",
                no_bell: "🔕",
                no_bicycles: "🚳",
                no_entry: "⛔️",
                no_entry_sign: "🚫",
                no_mobile_phones: "📵",
                no_mouth: "😶",
                no_pedestrians: "🚷",
                no_smoking: "🚭",
                "non-potable_water": "🚱",
                nose: "👃",
                notebook: "📓",
                notebook_with_decorative_cover: "📔",
                notes: "🎶",
                nut_and_bolt: "🔩",
                o: "⭕️",
                o2: "🅾️",
                ocean: "🌊",
                octopus: "🐙",
                oden: "🍢",
                office: "🏢",
                oil_drum: "🛢",
                ok: "🆗",
                ok_hand: "👌",
                ok_man: "🙆&zwj;♂️",
                ok_woman: "🙆",
                old_key: "🗝",
                older_man: "👴",
                older_woman: "👵",
                om: "🕉",
                on: "🔛",
                oncoming_automobile: "🚘",
                oncoming_bus: "🚍",
                oncoming_police_car: "🚔",
                oncoming_taxi: "🚖",
                open_file_folder: "📂",
                open_hands: "👐",
                open_mouth: "😮",
                open_umbrella: "☂️",
                ophiuchus: "⛎",
                orange_book: "📙",
                orthodox_cross: "☦️",
                outbox_tray: "📤",
                owl: "🦉",
                ox: "🐂",
                package: "📦",
                page_facing_up: "📄",
                page_with_curl: "📃",
                pager: "📟",
                paintbrush: "🖌",
                palm_tree: "🌴",
                pancakes: "🥞",
                panda_face: "🐼",
                paperclip: "📎",
                paperclips: "🖇",
                parasol_on_ground: "⛱",
                parking: "🅿️",
                part_alternation_mark: "〽️",
                partly_sunny: "⛅️",
                passenger_ship: "🛳",
                passport_control: "🛂",
                pause_button: "⏸",
                peace_symbol: "☮️",
                peach: "🍑",
                peanuts: "🥜",
                pear: "🍐",
                pen: "🖊",
                pencil2: "✏️",
                penguin: "🐧",
                pensive: "😔",
                performing_arts: "🎭",
                persevere: "😣",
                person_fencing: "🤺",
                pouting_woman: "🙎",
                phone: "☎️",
                pick: "⛏",
                pig: "🐷",
                pig2: "🐖",
                pig_nose: "🐽",
                pill: "💊",
                pineapple: "🍍",
                ping_pong: "🏓",
                pisces: "♓️",
                pizza: "🍕",
                place_of_worship: "🛐",
                plate_with_cutlery: "🍽",
                play_or_pause_button: "⏯",
                point_down: "👇",
                point_left: "👈",
                point_right: "👉",
                point_up: "☝️",
                point_up_2: "👆",
                police_car: "🚓",
                policewoman: "👮&zwj;♀️",
                poodle: "🐩",
                popcorn: "🍿",
                post_office: "🏣",
                postal_horn: "📯",
                postbox: "📮",
                potable_water: "🚰",
                potato: "🥔",
                pouch: "👝",
                poultry_leg: "🍗",
                pound: "💷",
                rage: "😡",
                pouting_cat: "😾",
                pouting_man: "🙎&zwj;♂️",
                pray: "🙏",
                prayer_beads: "📿",
                pregnant_woman: "🤰",
                previous_track_button: "⏮",
                prince: "🤴",
                princess: "👸",
                printer: "🖨",
                purple_heart: "💜",
                purse: "👛",
                pushpin: "📌",
                put_litter_in_its_place: "🚮",
                question: "❓",
                rabbit: "🐰",
                rabbit2: "🐇",
                racehorse: "🐎",
                racing_car: "🏎",
                radio: "📻",
                radio_button: "🔘",
                radioactive: "☢️",
                railway_car: "🚃",
                railway_track: "🛤",
                rainbow: "🌈",
                rainbow_flag: "🏳️&zwj;🌈",
                raised_back_of_hand: "🤚",
                raised_hand_with_fingers_splayed: "🖐",
                raised_hands: "🙌",
                raising_hand_woman: "🙋",
                raising_hand_man: "🙋&zwj;♂️",
                ram: "🐏",
                ramen: "🍜",
                rat: "🐀",
                record_button: "⏺",
                recycle: "♻️",
                red_circle: "🔴",
                registered: "®️",
                relaxed: "☺️",
                relieved: "😌",
                reminder_ribbon: "🎗",
                repeat: "🔁",
                repeat_one: "🔂",
                rescue_worker_helmet: "⛑",
                restroom: "🚻",
                revolving_hearts: "💞",
                rewind: "⏪",
                rhinoceros: "🦏",
                ribbon: "🎀",
                rice: "🍚",
                rice_ball: "🍙",
                rice_cracker: "🍘",
                rice_scene: "🎑",
                right_anger_bubble: "🗯",
                ring: "💍",
                robot: "🤖",
                rocket: "🚀",
                rofl: "🤣",
                roll_eyes: "🙄",
                roller_coaster: "🎢",
                rooster: "🐓",
                rose: "🌹",
                rosette: "🏵",
                rotating_light: "🚨",
                round_pushpin: "📍",
                rowing_man: "🚣",
                rowing_woman: "🚣&zwj;♀️",
                rugby_football: "🏉",
                running_man: "🏃",
                running_shirt_with_sash: "🎽",
                running_woman: "🏃&zwj;♀️",
                sa: "🈂️",
                sagittarius: "♐️",
                sake: "🍶",
                sandal: "👡",
                santa: "🎅",
                satellite: "📡",
                saxophone: "🎷",
                school: "🏫",
                school_satchel: "🎒",
                scissors: "✂️",
                scorpion: "🦂",
                scorpius: "♏️",
                scream: "😱",
                scream_cat: "🙀",
                scroll: "📜",
                seat: "💺",
                secret: "㊙️",
                see_no_evil: "🙈",
                seedling: "🌱",
                selfie: "🤳",
                shallow_pan_of_food: "🥘",
                shamrock: "☘️",
                shark: "🦈",
                shaved_ice: "🍧",
                sheep: "🐑",
                shell: "🐚",
                shield: "🛡",
                shinto_shrine: "⛩",
                ship: "🚢",
                shirt: "👕",
                shopping: "🛍",
                shopping_cart: "🛒",
                shower: "🚿",
                shrimp: "🦐",
                signal_strength: "📶",
                six_pointed_star: "🔯",
                ski: "🎿",
                skier: "⛷",
                skull: "💀",
                skull_and_crossbones: "☠️",
                sleeping: "😴",
                sleeping_bed: "🛌",
                sleepy: "😪",
                slightly_frowning_face: "🙁",
                slightly_smiling_face: "🙂",
                slot_machine: "🎰",
                small_airplane: "🛩",
                small_blue_diamond: "🔹",
                small_orange_diamond: "🔸",
                small_red_triangle: "🔺",
                small_red_triangle_down: "🔻",
                smile: "😄",
                smile_cat: "😸",
                smiley: "😃",
                smiley_cat: "😺",
                smiling_imp: "😈",
                smirk: "😏",
                smirk_cat: "😼",
                smoking: "🚬",
                snail: "🐌",
                snake: "🐍",
                sneezing_face: "🤧",
                snowboarder: "🏂",
                snowflake: "❄️",
                snowman: "⛄️",
                snowman_with_snow: "☃️",
                sob: "😭",
                soccer: "⚽️",
                soon: "🔜",
                sos: "🆘",
                sound: "🔉",
                space_invader: "👾",
                spades: "♠️",
                spaghetti: "🍝",
                sparkle: "❇️",
                sparkler: "🎇",
                sparkles: "✨",
                sparkling_heart: "💖",
                speak_no_evil: "🙊",
                speaker: "🔈",
                speaking_head: "🗣",
                speech_balloon: "💬",
                speedboat: "🚤",
                spider: "🕷",
                spider_web: "🕸",
                spiral_calendar: "🗓",
                spiral_notepad: "🗒",
                spoon: "🥄",
                squid: "🦑",
                stadium: "🏟",
                star: "⭐️",
                star2: "🌟",
                star_and_crescent: "☪️",
                star_of_david: "✡️",
                stars: "🌠",
                station: "🚉",
                statue_of_liberty: "🗽",
                steam_locomotive: "🚂",
                stew: "🍲",
                stop_button: "⏹",
                stop_sign: "🛑",
                stopwatch: "⏱",
                straight_ruler: "📏",
                strawberry: "🍓",
                stuck_out_tongue: "😛",
                stuck_out_tongue_closed_eyes: "😝",
                stuck_out_tongue_winking_eye: "😜",
                studio_microphone: "🎙",
                stuffed_flatbread: "🥙",
                sun_behind_large_cloud: "🌥",
                sun_behind_rain_cloud: "🌦",
                sun_behind_small_cloud: "🌤",
                sun_with_face: "🌞",
                sunflower: "🌻",
                sunglasses: "😎",
                sunny: "☀️",
                sunrise: "🌅",
                sunrise_over_mountains: "🌄",
                surfing_man: "🏄",
                surfing_woman: "🏄&zwj;♀️",
                sushi: "🍣",
                suspension_railway: "🚟",
                sweat: "😓",
                sweat_drops: "💦",
                sweat_smile: "😅",
                sweet_potato: "🍠",
                swimming_man: "🏊",
                swimming_woman: "🏊&zwj;♀️",
                symbols: "🔣",
                synagogue: "🕍",
                syringe: "💉",
                taco: "🌮",
                tada: "🎉",
                tanabata_tree: "🎋",
                taurus: "♉️",
                taxi: "🚕",
                tea: "🍵",
                telephone_receiver: "📞",
                telescope: "🔭",
                tennis: "🎾",
                tent: "⛺️",
                thermometer: "🌡",
                thinking: "🤔",
                thought_balloon: "💭",
                ticket: "🎫",
                tickets: "🎟",
                tiger: "🐯",
                tiger2: "🐅",
                timer_clock: "⏲",
                tipping_hand_man: "💁&zwj;♂️",
                tired_face: "😫",
                tm: "™️",
                toilet: "🚽",
                tokyo_tower: "🗼",
                tomato: "🍅",
                tongue: "👅",
                top: "🔝",
                tophat: "🎩",
                tornado: "🌪",
                trackball: "🖲",
                tractor: "🚜",
                traffic_light: "🚥",
                train: "🚋",
                train2: "🚆",
                tram: "🚊",
                triangular_flag_on_post: "🚩",
                triangular_ruler: "📐",
                trident: "🔱",
                triumph: "😤",
                trolleybus: "🚎",
                trophy: "🏆",
                tropical_drink: "🍹",
                tropical_fish: "🐠",
                truck: "🚚",
                trumpet: "🎺",
                tulip: "🌷",
                tumbler_glass: "🥃",
                turkey: "🦃",
                turtle: "🐢",
                tv: "📺",
                twisted_rightwards_arrows: "🔀",
                two_hearts: "💕",
                two_men_holding_hands: "👬",
                two_women_holding_hands: "👭",
                u5272: "🈹",
                u5408: "🈴",
                u55b6: "🈺",
                u6307: "🈯️",
                u6708: "🈷️",
                u6709: "🈶",
                u6e80: "🈵",
                u7121: "🈚️",
                u7533: "🈸",
                u7981: "🈲",
                u7a7a: "🈳",
                umbrella: "☔️",
                unamused: "😒",
                underage: "🔞",
                unicorn: "🦄",
                unlock: "🔓",
                up: "🆙",
                upside_down_face: "🙃",
                v: "✌️",
                vertical_traffic_light: "🚦",
                vhs: "📼",
                vibration_mode: "📳",
                video_camera: "📹",
                video_game: "🎮",
                violin: "🎻",
                virgo: "♍️",
                volcano: "🌋",
                volleyball: "🏐",
                vs: "🆚",
                vulcan_salute: "🖖",
                walking_man: "🚶",
                walking_woman: "🚶&zwj;♀️",
                waning_crescent_moon: "🌘",
                waning_gibbous_moon: "🌖",
                warning: "⚠️",
                wastebasket: "🗑",
                watch: "⌚️",
                water_buffalo: "🐃",
                watermelon: "🍉",
                wave: "👋",
                wavy_dash: "〰️",
                waxing_crescent_moon: "🌒",
                wc: "🚾",
                weary: "😩",
                wedding: "💒",
                weight_lifting_man: "🏋️",
                weight_lifting_woman: "🏋️&zwj;♀️",
                whale: "🐳",
                whale2: "🐋",
                wheel_of_dharma: "☸️",
                wheelchair: "♿️",
                white_check_mark: "✅",
                white_circle: "⚪️",
                white_flag: "🏳️",
                white_flower: "💮",
                white_large_square: "⬜️",
                white_medium_small_square: "◽️",
                white_medium_square: "◻️",
                white_small_square: "▫️",
                white_square_button: "🔳",
                wilted_flower: "🥀",
                wind_chime: "🎐",
                wind_face: "🌬",
                wine_glass: "🍷",
                wink: "😉",
                wolf: "🐺",
                woman: "👩",
                woman_artist: "👩&zwj;🎨",
                woman_astronaut: "👩&zwj;🚀",
                woman_cartwheeling: "🤸&zwj;♀️",
                woman_cook: "👩&zwj;🍳",
                woman_facepalming: "🤦&zwj;♀️",
                woman_factory_worker: "👩&zwj;🏭",
                woman_farmer: "👩&zwj;🌾",
                woman_firefighter: "👩&zwj;🚒",
                woman_health_worker: "👩&zwj;⚕️",
                woman_judge: "👩&zwj;⚖️",
                woman_juggling: "🤹&zwj;♀️",
                woman_mechanic: "👩&zwj;🔧",
                woman_office_worker: "👩&zwj;💼",
                woman_pilot: "👩&zwj;✈️",
                woman_playing_handball: "🤾&zwj;♀️",
                woman_playing_water_polo: "🤽&zwj;♀️",
                woman_scientist: "👩&zwj;🔬",
                woman_shrugging: "🤷&zwj;♀️",
                woman_singer: "👩&zwj;🎤",
                woman_student: "👩&zwj;🎓",
                woman_teacher: "👩&zwj;🏫",
                woman_technologist: "👩&zwj;💻",
                woman_with_turban: "👳&zwj;♀️",
                womans_clothes: "👚",
                womans_hat: "👒",
                women_wrestling: "🤼&zwj;♀️",
                womens: "🚺",
                world_map: "🗺",
                worried: "😟",
                wrench: "🔧",
                writing_hand: "✍️",
                x: "❌",
                yellow_heart: "💛",
                yen: "💴",
                yin_yang: "☯️",
                yum: "😋",
                zap: "⚡️",
                zipper_mouth_face: "🤐",
                zzz: "💤",
                octocat: '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
                showdown: "<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>"
            },
            t.Converter = function(e) {
                var o = {}
                  , l = []
                  , c = []
                  , d = {}
                  , u = a
                  , p = {
                    parsed: {},
                    raw: "",
                    format: ""
                };
                function h(e, o) {
                    if (o = o || null,
                    t.helper.isString(e)) {
                        if (o = e = t.helper.stdExtName(e),
                        t.extensions[e])
                            return console.warn("DEPRECATION WARNING: " + e + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),
                            void function(e, o) {
                                "function" == typeof e && (e = e(new t.Converter)),
                                t.helper.isArray(e) || (e = [e]);
                                var n = s(e, o);
                                if (!n.valid)
                                    throw Error(n.error);
                                for (var i = 0; i < e.length; ++i)
                                    switch (e[i].type) {
                                    case "lang":
                                        l.push(e[i]);
                                        break;
                                    case "output":
                                        c.push(e[i]);
                                        break;
                                    default:
                                        throw Error("Extension loader error: Type unrecognized!!!")
                                    }
                            }(t.extensions[e], e);
                        if (t.helper.isUndefined(n[e]))
                            throw Error('Extension "' + e + '" could not be loaded. It was either not found or is not a valid extension.');
                        e = n[e]
                    }
                    "function" == typeof e && (e = e()),
                    t.helper.isArray(e) || (e = [e]);
                    var i = s(e, o);
                    if (!i.valid)
                        throw Error(i.error);
                    for (var a = 0; a < e.length; ++a) {
                        switch (e[a].type) {
                        case "lang":
                            l.push(e[a]);
                            break;
                        case "output":
                            c.push(e[a])
                        }
                        if (e[a].hasOwnProperty("listeners"))
                            for (var r in e[a].listeners)
                                e[a].listeners.hasOwnProperty(r) && b(r, e[a].listeners[r])
                    }
                }
                function b(e, o) {
                    if (!t.helper.isString(e))
                        throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof e + " given");
                    if ("function" != typeof o)
                        throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof o + " given");
                    d.hasOwnProperty(e) || (d[e] = []),
                    d[e].push(o)
                }
                !function() {
                    for (var n in e = e || {},
                    i)
                        i.hasOwnProperty(n) && (o[n] = i[n]);
                    if ("object" != typeof e)
                        throw Error("Converter expects the passed parameter to be an object, but " + typeof e + " was passed instead.");
                    for (var a in e)
                        e.hasOwnProperty(a) && (o[a] = e[a]);
                    o.extensions && t.helper.forEach(o.extensions, h)
                }(),
                this._dispatch = function(e, t, o, n) {
                    if (d.hasOwnProperty(e))
                        for (var i = 0; i < d[e].length; ++i) {
                            var a = d[e][i](e, t, this, o, n);
                            a && void 0 !== a && (t = a)
                        }
                    return t
                }
                ,
                this.listen = function(e, t) {
                    return b(e, t),
                    this
                }
                ,
                this.makeHtml = function(e) {
                    if (!e)
                        return e;
                    var n = {
                        gHtmlBlocks: [],
                        gHtmlMdBlocks: [],
                        gHtmlSpans: [],
                        gUrls: {},
                        gTitles: {},
                        gDimensions: {},
                        gListLevel: 0,
                        hashLinkCounts: {},
                        langExtensions: l,
                        outputModifiers: c,
                        converter: this,
                        ghCodeBlocks: [],
                        metadata: {
                            parsed: {},
                            raw: "",
                            format: ""
                        }
                    };
                    return e = (e = (e = (e = (e = e.replace(/¨/g, "¨T")).replace(/\$/g, "¨D")).replace(/\r\n/g, "\n")).replace(/\r/g, "\n")).replace(/\u00A0/g, "&nbsp;"),
                    o.smartIndentationFix && (e = function(e) {
                        var t = e.match(/^\s*/)[0].length
                          , o = new RegExp("^\\s{0," + t + "}","gm");
                        return e.replace(o, "")
                    }(e)),
                    e = "\n\n" + e + "\n\n",
                    e = (e = t.subParser("detab")(e, o, n)).replace(/^[ \t]+$/gm, ""),
                    t.helper.forEach(l, (function(i) {
                        e = t.subParser("runExtension")(i, e, o, n)
                    }
                    )),
                    e = t.subParser("metadata")(e, o, n),
                    e = t.subParser("hashPreCodeTags")(e, o, n),
                    e = t.subParser("githubCodeBlocks")(e, o, n),
                    e = t.subParser("hashHTMLBlocks")(e, o, n),
                    e = t.subParser("hashCodeTags")(e, o, n),
                    e = t.subParser("stripLinkDefinitions")(e, o, n),
                    e = t.subParser("blockGamut")(e, o, n),
                    e = t.subParser("unhashHTMLSpans")(e, o, n),
                    e = (e = (e = t.subParser("unescapeSpecialChars")(e, o, n)).replace(/¨D/g, "$$")).replace(/¨T/g, "¨"),
                    e = t.subParser("completeHTMLDocument")(e, o, n),
                    t.helper.forEach(c, (function(i) {
                        e = t.subParser("runExtension")(i, e, o, n)
                    }
                    )),
                    p = n.metadata,
                    e
                }
                ,
                this.makeMarkdown = this.makeMd = function(e, o) {
                    if (e = (e = (e = e.replace(/\r\n/g, "\n")).replace(/\r/g, "\n")).replace(/>[ \t]+</, ">¨NBSP;<"),
                    !o) {
                        if (!window || !window.document)
                            throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
                        o = window.document
                    }
                    var n = o.createElement("div");
                    n.innerHTML = e;
                    var i = {
                        preList: function(e) {
                            for (var o = e.querySelectorAll("pre"), n = [], i = 0; i < o.length; ++i)
                                if (1 === o[i].childElementCount && "code" === o[i].firstChild.tagName.toLowerCase()) {
                                    var a = o[i].firstChild.innerHTML.trim()
                                      , r = o[i].firstChild.getAttribute("data-language") || "";
                                    if ("" === r)
                                        for (var s = o[i].firstChild.className.split(" "), l = 0; l < s.length; ++l) {
                                            var c = s[l].match(/^language-(.+)$/);
                                            if (null !== c) {
                                                r = c[1];
                                                break
                                            }
                                        }
                                    a = t.helper.unescapeHTMLEntities(a),
                                    n.push(a),
                                    o[i].outerHTML = '<precode language="' + r + '" precodenum="' + i.toString() + '"></precode>'
                                } else
                                    n.push(o[i].innerHTML),
                                    o[i].innerHTML = "",
                                    o[i].setAttribute("prenum", i.toString());
                            return n
                        }(n)
                    };
                    !function e(t) {
                        for (var o = 0; o < t.childNodes.length; ++o) {
                            var n = t.childNodes[o];
                            3 === n.nodeType ? /\S/.test(n.nodeValue) || /^[ ]+$/.test(n.nodeValue) ? (n.nodeValue = n.nodeValue.split("\n").join(" "),
                            n.nodeValue = n.nodeValue.replace(/(\s)+/g, "$1")) : (t.removeChild(n),
                            --o) : 1 === n.nodeType && e(n)
                        }
                    }(n);
                    for (var a = n.childNodes, r = "", s = 0; s < a.length; s++)
                        r += t.subParser("makeMarkdown.node")(a[s], i);
                    return r
                }
                ,
                this.setOption = function(e, t) {
                    o[e] = t
                }
                ,
                this.getOption = function(e) {
                    return o[e]
                }
                ,
                this.getOptions = function() {
                    return o
                }
                ,
                this.addExtension = function(e, t) {
                    h(e, t = t || null)
                }
                ,
                this.useExtension = function(e) {
                    h(e)
                }
                ,
                this.setFlavor = function(e) {
                    if (!r.hasOwnProperty(e))
                        throw Error(e + " flavor was not found");
                    var t = r[e];
                    for (var n in u = e,
                    t)
                        t.hasOwnProperty(n) && (o[n] = t[n])
                }
                ,
                this.getFlavor = function() {
                    return u
                }
                ,
                this.removeExtension = function(e) {
                    t.helper.isArray(e) || (e = [e]);
                    for (var o = 0; o < e.length; ++o) {
                        for (var n = e[o], i = 0; i < l.length; ++i)
                            l[i] === n && l.splice(i, 1);
                        for (var a = 0; a < c.length; ++a)
                            c[a] === n && c.splice(a, 1)
                    }
                }
                ,
                this.getAllExtensions = function() {
                    return {
                        language: l,
                        output: c
                    }
                }
                ,
                this.getMetadata = function(e) {
                    return e ? p.raw : p.parsed
                }
                ,
                this.getMetadataFormat = function() {
                    return p.format
                }
                ,
                this._setMetadataPair = function(e, t) {
                    p.parsed[e] = t
                }
                ,
                this._setMetadataFormat = function(e) {
                    p.format = e
                }
                ,
                this._setMetadataRaw = function(e) {
                    p.raw = e
                }
            }
            ,
            t.subParser("anchors", (function(e, o, n) {
                var i = function(e, i, a, r, s, l, c) {
                    if (t.helper.isUndefined(c) && (c = ""),
                    a = a.toLowerCase(),
                    e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
                        r = "";
                    else if (!r) {
                        if (a || (a = i.toLowerCase().replace(/ ?\n/g, " ")),
                        r = "#" + a,
                        t.helper.isUndefined(n.gUrls[a]))
                            return e;
                        r = n.gUrls[a],
                        t.helper.isUndefined(n.gTitles[a]) || (c = n.gTitles[a])
                    }
                    var d = '<a href="' + (r = r.replace(t.helper.regexes.asteriskDashAndColon, t.helper.escapeCharactersCallback)) + '"';
                    return "" !== c && null !== c && (d += ' title="' + (c = (c = c.replace(/"/g, "&quot;")).replace(t.helper.regexes.asteriskDashAndColon, t.helper.escapeCharactersCallback)) + '"'),
                    o.openLinksInNewWindow && !/^#/.test(r) && (d += ' rel="noopener noreferrer" target="¨E95Eblank"'),
                    d += ">" + i + "</a>"
                };
                return e = (e = (e = (e = (e = n.converter._dispatch("anchors.before", e, o, n)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, i)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, i)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, i)).replace(/\[([^\[\]]+)]()()()()()/g, i),
                o.ghMentions && (e = e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim, (function(e, n, i, a, r) {
                    if ("\\" === i)
                        return n + a;
                    if (!t.helper.isString(o.ghMentionsLink))
                        throw new Error("ghMentionsLink option must be a string");
                    var s = o.ghMentionsLink.replace(/\{u}/g, r)
                      , l = "";
                    return o.openLinksInNewWindow && (l = ' rel="noopener noreferrer" target="¨E95Eblank"'),
                    n + '<a href="' + s + '"' + l + ">" + a + "</a>"
                }
                ))),
                e = n.converter._dispatch("anchors.after", e, o, n)
            }
            ));
            var d = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi
              , u = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi
              , p = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi
              , h = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim
              , b = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi
              , g = function(e) {
                return function(o, n, i, a, r, s, l) {
                    var c = i = i.replace(t.helper.regexes.asteriskDashAndColon, t.helper.escapeCharactersCallback)
                      , d = ""
                      , u = ""
                      , p = n || ""
                      , h = l || "";
                    return /^www\./i.test(i) && (i = i.replace(/^www\./i, "http://www.")),
                    e.excludeTrailingPunctuationFromURLs && s && (d = s),
                    e.openLinksInNewWindow && (u = ' rel="noopener noreferrer" target="¨E95Eblank"'),
                    p + '<a href="' + i + '"' + u + ">" + c + "</a>" + d + h
                }
            }
              , m = function(e, o) {
                return function(n, i, a) {
                    var r = "mailto:";
                    return i = i || "",
                    a = t.subParser("unescapeSpecialChars")(a, e, o),
                    e.encodeEmails ? (r = t.helper.encodeEmailAddress(r + a),
                    a = t.helper.encodeEmailAddress(a)) : r += a,
                    i + '<a href="' + r + '">' + a + "</a>"
                }
            };
            t.subParser("autoLinks", (function(e, t, o) {
                return e = (e = (e = o.converter._dispatch("autoLinks.before", e, t, o)).replace(p, g(t))).replace(b, m(t, o)),
                e = o.converter._dispatch("autoLinks.after", e, t, o)
            }
            )),
            t.subParser("simplifiedAutoLinks", (function(e, t, o) {
                return t.simplifiedAutoLink ? (e = o.converter._dispatch("simplifiedAutoLinks.before", e, t, o),
                e = (e = t.excludeTrailingPunctuationFromURLs ? e.replace(u, g(t)) : e.replace(d, g(t))).replace(h, m(t, o)),
                e = o.converter._dispatch("simplifiedAutoLinks.after", e, t, o)) : e
            }
            )),
            t.subParser("blockGamut", (function(e, o, n) {
                return e = n.converter._dispatch("blockGamut.before", e, o, n),
                e = t.subParser("blockQuotes")(e, o, n),
                e = t.subParser("headers")(e, o, n),
                e = t.subParser("horizontalRule")(e, o, n),
                e = t.subParser("lists")(e, o, n),
                e = t.subParser("codeBlocks")(e, o, n),
                e = t.subParser("tables")(e, o, n),
                e = t.subParser("hashHTMLBlocks")(e, o, n),
                e = t.subParser("paragraphs")(e, o, n),
                e = n.converter._dispatch("blockGamut.after", e, o, n)
            }
            )),
            t.subParser("blockQuotes", (function(e, o, n) {
                e = n.converter._dispatch("blockQuotes.before", e, o, n),
                e += "\n\n";
                var i = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
                return o.splitAdjacentBlockquotes && (i = /^ {0,3}>[\s\S]*?(?:\n\n)/gm),
                e = e.replace(i, (function(e) {
                    return e = (e = (e = e.replace(/^[ \t]*>[ \t]?/gm, "")).replace(/¨0/g, "")).replace(/^[ \t]+$/gm, ""),
                    e = t.subParser("githubCodeBlocks")(e, o, n),
                    e = (e = (e = t.subParser("blockGamut")(e, o, n)).replace(/(^|\n)/g, "$1  ")).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, (function(e, t) {
                        var o = t;
                        return o = (o = o.replace(/^  /gm, "¨0")).replace(/¨0/g, "")
                    }
                    )),
                    t.subParser("hashBlock")("<blockquote>\n" + e + "\n</blockquote>", o, n)
                }
                )),
                e = n.converter._dispatch("blockQuotes.after", e, o, n)
            }
            )),
            t.subParser("codeBlocks", (function(e, o, n) {
                return e = n.converter._dispatch("codeBlocks.before", e, o, n),
                e = (e = (e += "¨0").replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g, (function(e, i, a) {
                    var r = i
                      , s = a
                      , l = "\n";
                    return r = t.subParser("outdent")(r, o, n),
                    r = t.subParser("encodeCode")(r, o, n),
                    r = (r = (r = t.subParser("detab")(r, o, n)).replace(/^\n+/g, "")).replace(/\n+$/g, ""),
                    o.omitExtraWLInCodeBlocks && (l = ""),
                    r = "<pre><code>" + r + l + "</code></pre>",
                    t.subParser("hashBlock")(r, o, n) + s
                }
                ))).replace(/¨0/, ""),
                e = n.converter._dispatch("codeBlocks.after", e, o, n)
            }
            )),
            t.subParser("codeSpans", (function(e, o, n) {
                return void 0 === (e = n.converter._dispatch("codeSpans.before", e, o, n)) && (e = ""),
                e = e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, (function(e, i, a, r) {
                    var s = r;
                    return s = (s = s.replace(/^([ \t]*)/g, "")).replace(/[ \t]*$/g, ""),
                    s = i + "<code>" + (s = t.subParser("encodeCode")(s, o, n)) + "</code>",
                    s = t.subParser("hashHTMLSpans")(s, o, n)
                }
                )),
                e = n.converter._dispatch("codeSpans.after", e, o, n)
            }
            )),
            t.subParser("completeHTMLDocument", (function(e, t, o) {
                if (!t.completeHTMLDocument)
                    return e;
                e = o.converter._dispatch("completeHTMLDocument.before", e, t, o);
                var n = "html"
                  , i = "<!DOCTYPE HTML>\n"
                  , a = ""
                  , r = '<meta charset="utf-8">\n'
                  , s = ""
                  , l = "";
                for (var c in void 0 !== o.metadata.parsed.doctype && (i = "<!DOCTYPE " + o.metadata.parsed.doctype + ">\n",
                "html" !== (n = o.metadata.parsed.doctype.toString().toLowerCase()) && "html5" !== n || (r = '<meta charset="utf-8">')),
                o.metadata.parsed)
                    if (o.metadata.parsed.hasOwnProperty(c))
                        switch (c.toLowerCase()) {
                        case "doctype":
                            break;
                        case "title":
                            a = "<title>" + o.metadata.parsed.title + "</title>\n";
                            break;
                        case "charset":
                            r = "html" === n || "html5" === n ? '<meta charset="' + o.metadata.parsed.charset + '">\n' : '<meta name="charset" content="' + o.metadata.parsed.charset + '">\n';
                            break;
                        case "language":
                        case "lang":
                            s = ' lang="' + o.metadata.parsed[c] + '"',
                            l += '<meta name="' + c + '" content="' + o.metadata.parsed[c] + '">\n';
                            break;
                        default:
                            l += '<meta name="' + c + '" content="' + o.metadata.parsed[c] + '">\n'
                        }
                return e = i + "<html" + s + ">\n<head>\n" + a + r + l + "</head>\n<body>\n" + e.trim() + "\n</body>\n</html>",
                e = o.converter._dispatch("completeHTMLDocument.after", e, t, o)
            }
            )),
            t.subParser("detab", (function(e, t, o) {
                return e = (e = (e = (e = (e = (e = o.converter._dispatch("detab.before", e, t, o)).replace(/\t(?=\t)/g, "    ")).replace(/\t/g, "¨A¨B")).replace(/¨B(.+?)¨A/g, (function(e, t) {
                    for (var o = t, n = 4 - o.length % 4, i = 0; i < n; i++)
                        o += " ";
                    return o
                }
                ))).replace(/¨A/g, "    ")).replace(/¨B/g, ""),
                e = o.converter._dispatch("detab.after", e, t, o)
            }
            )),
            t.subParser("ellipsis", (function(e, t, o) {
                return t.ellipsis ? (e = (e = o.converter._dispatch("ellipsis.before", e, t, o)).replace(/\.\.\./g, "…"),
                e = o.converter._dispatch("ellipsis.after", e, t, o)) : e
            }
            )),
            t.subParser("emoji", (function(e, o, n) {
                return o.emoji ? (e = (e = n.converter._dispatch("emoji.before", e, o, n)).replace(/:([\S]+?):/g, (function(e, o) {
                    return t.helper.emojis.hasOwnProperty(o) ? t.helper.emojis[o] : e
                }
                )),
                e = n.converter._dispatch("emoji.after", e, o, n)) : e
            }
            )),
            t.subParser("encodeAmpsAndAngles", (function(e, t, o) {
                return e = (e = (e = (e = (e = o.converter._dispatch("encodeAmpsAndAngles.before", e, t, o)).replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;")).replace(/<(?![a-z\/?$!])/gi, "&lt;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;"),
                e = o.converter._dispatch("encodeAmpsAndAngles.after", e, t, o)
            }
            )),
            t.subParser("encodeBackslashEscapes", (function(e, o, n) {
                return e = (e = (e = n.converter._dispatch("encodeBackslashEscapes.before", e, o, n)).replace(/\\(\\)/g, t.helper.escapeCharactersCallback)).replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, t.helper.escapeCharactersCallback),
                e = n.converter._dispatch("encodeBackslashEscapes.after", e, o, n)
            }
            )),
            t.subParser("encodeCode", (function(e, o, n) {
                return e = (e = n.converter._dispatch("encodeCode.before", e, o, n)).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, t.helper.escapeCharactersCallback),
                e = n.converter._dispatch("encodeCode.after", e, o, n)
            }
            )),
            t.subParser("escapeSpecialCharsWithinTagAttributes", (function(e, o, n) {
                return e = (e = (e = n.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", e, o, n)).replace(/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, (function(e) {
                    return e.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, t.helper.escapeCharactersCallback)
                }
                ))).replace(/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi, (function(e) {
                    return e.replace(/([\\`*_~=|])/g, t.helper.escapeCharactersCallback)
                }
                )),
                e = n.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", e, o, n)
            }
            )),
            t.subParser("githubCodeBlocks", (function(e, o, n) {
                return o.ghCodeBlocks ? (e = n.converter._dispatch("githubCodeBlocks.before", e, o, n),
                e = (e = (e += "¨0").replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, (function(e, i, a, r) {
                    var s = o.omitExtraWLInCodeBlocks ? "" : "\n";
                    return r = t.subParser("encodeCode")(r, o, n),
                    r = "<pre><code" + (a ? ' class="' + a + " language-" + a + '"' : "") + ">" + (r = (r = (r = t.subParser("detab")(r, o, n)).replace(/^\n+/g, "")).replace(/\n+$/g, "")) + s + "</code></pre>",
                    r = t.subParser("hashBlock")(r, o, n),
                    "\n\n¨G" + (n.ghCodeBlocks.push({
                        text: e,
                        codeblock: r
                    }) - 1) + "G\n\n"
                }
                ))).replace(/¨0/, ""),
                n.converter._dispatch("githubCodeBlocks.after", e, o, n)) : e
            }
            )),
            t.subParser("hashBlock", (function(e, t, o) {
                return e = (e = o.converter._dispatch("hashBlock.before", e, t, o)).replace(/(^\n+|\n+$)/g, ""),
                e = "\n\n¨K" + (o.gHtmlBlocks.push(e) - 1) + "K\n\n",
                e = o.converter._dispatch("hashBlock.after", e, t, o)
            }
            )),
            t.subParser("hashCodeTags", (function(e, o, n) {
                return e = n.converter._dispatch("hashCodeTags.before", e, o, n),
                e = t.helper.replaceRecursiveRegExp(e, (function(e, i, a, r) {
                    var s = a + t.subParser("encodeCode")(i, o, n) + r;
                    return "¨C" + (n.gHtmlSpans.push(s) - 1) + "C"
                }
                ), "<code\\b[^>]*>", "</code>", "gim"),
                e = n.converter._dispatch("hashCodeTags.after", e, o, n)
            }
            )),
            t.subParser("hashElement", (function(e, t, o) {
                return function(e, t) {
                    var n = t;
                    return n = (n = (n = n.replace(/\n\n/g, "\n")).replace(/^\n/, "")).replace(/\n+$/g, ""),
                    n = "\n\n¨K" + (o.gHtmlBlocks.push(n) - 1) + "K\n\n"
                }
            }
            )),
            t.subParser("hashHTMLBlocks", (function(e, o, n) {
                e = n.converter._dispatch("hashHTMLBlocks.before", e, o, n);
                var i = ["pre", "div", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "table", "dl", "ol", "ul", "script", "noscript", "form", "fieldset", "iframe", "math", "style", "section", "header", "footer", "nav", "article", "aside", "address", "audio", "canvas", "figure", "hgroup", "output", "video", "p"]
                  , a = function(e, t, o, i) {
                    var a = e;
                    return -1 !== o.search(/\bmarkdown\b/) && (a = o + n.converter.makeHtml(t) + i),
                    "\n\n¨K" + (n.gHtmlBlocks.push(a) - 1) + "K\n\n"
                };
                o.backslashEscapesHTMLTags && (e = e.replace(/\\<(\/?[^>]+?)>/g, (function(e, t) {
                    return "&lt;" + t + "&gt;"
                }
                )));
                for (var r = 0; r < i.length; ++r)
                    for (var s, l = new RegExp("^ {0,3}(<" + i[r] + "\\b[^>]*>)","im"), c = "<" + i[r] + "\\b[^>]*>", d = "</" + i[r] + ">"; -1 !== (s = t.helper.regexIndexOf(e, l)); ) {
                        var u = t.helper.splitAtIndex(e, s)
                          , p = t.helper.replaceRecursiveRegExp(u[1], a, c, d, "im");
                        if (p === u[1])
                            break;
                        e = u[0].concat(p)
                    }
                return e = e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, t.subParser("hashElement")(e, o, n)),
                e = (e = t.helper.replaceRecursiveRegExp(e, (function(e) {
                    return "\n\n¨K" + (n.gHtmlBlocks.push(e) - 1) + "K\n\n"
                }
                ), "^ {0,3}\x3c!--", "--\x3e", "gm")).replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, t.subParser("hashElement")(e, o, n)),
                e = n.converter._dispatch("hashHTMLBlocks.after", e, o, n)
            }
            )),
            t.subParser("hashHTMLSpans", (function(e, t, o) {
                function n(e) {
                    return "¨C" + (o.gHtmlSpans.push(e) - 1) + "C"
                }
                return e = (e = (e = (e = (e = o.converter._dispatch("hashHTMLSpans.before", e, t, o)).replace(/<[^>]+?\/>/gi, (function(e) {
                    return n(e)
                }
                ))).replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, (function(e) {
                    return n(e)
                }
                ))).replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, (function(e) {
                    return n(e)
                }
                ))).replace(/<[^>]+?>/gi, (function(e) {
                    return n(e)
                }
                )),
                e = o.converter._dispatch("hashHTMLSpans.after", e, t, o)
            }
            )),
            t.subParser("unhashHTMLSpans", (function(e, t, o) {
                e = o.converter._dispatch("unhashHTMLSpans.before", e, t, o);
                for (var n = 0; n < o.gHtmlSpans.length; ++n) {
                    for (var i = o.gHtmlSpans[n], a = 0; /¨C(\d+)C/.test(i); ) {
                        var r = RegExp.$1;
                        if (i = i.replace("¨C" + r + "C", o.gHtmlSpans[r]),
                        10 === a) {
                            console.error("maximum nesting of 10 spans reached!!!");
                            break
                        }
                        ++a
                    }
                    e = e.replace("¨C" + n + "C", i)
                }
                return e = o.converter._dispatch("unhashHTMLSpans.after", e, t, o)
            }
            )),
            t.subParser("hashPreCodeTags", (function(e, o, n) {
                return e = n.converter._dispatch("hashPreCodeTags.before", e, o, n),
                e = t.helper.replaceRecursiveRegExp(e, (function(e, i, a, r) {
                    var s = a + t.subParser("encodeCode")(i, o, n) + r;
                    return "\n\n¨G" + (n.ghCodeBlocks.push({
                        text: e,
                        codeblock: s
                    }) - 1) + "G\n\n"
                }
                ), "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"),
                e = n.converter._dispatch("hashPreCodeTags.after", e, o, n)
            }
            )),
            t.subParser("headers", (function(e, o, n) {
                e = n.converter._dispatch("headers.before", e, o, n);
                var i = isNaN(parseInt(o.headerLevelStart)) ? 1 : parseInt(o.headerLevelStart)
                  , a = o.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm
                  , r = o.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
                e = (e = e.replace(a, (function(e, a) {
                    var r = t.subParser("spanGamut")(a, o, n)
                      , s = o.noHeaderId ? "" : ' id="' + l(a) + '"'
                      , c = "<h" + i + s + ">" + r + "</h" + i + ">";
                    return t.subParser("hashBlock")(c, o, n)
                }
                ))).replace(r, (function(e, a) {
                    var r = t.subParser("spanGamut")(a, o, n)
                      , s = o.noHeaderId ? "" : ' id="' + l(a) + '"'
                      , c = i + 1
                      , d = "<h" + c + s + ">" + r + "</h" + c + ">";
                    return t.subParser("hashBlock")(d, o, n)
                }
                ));
                var s = o.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
                function l(e) {
                    var i, a;
                    if (o.customizedHeaderId) {
                        var r = e.match(/\{([^{]+?)}\s*$/);
                        r && r[1] && (e = r[1])
                    }
                    return i = e,
                    a = t.helper.isString(o.prefixHeaderId) ? o.prefixHeaderId : !0 === o.prefixHeaderId ? "section-" : "",
                    o.rawPrefixHeaderId || (i = a + i),
                    i = o.ghCompatibleHeaderId ? i.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : o.rawHeaderId ? i.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : i.replace(/[^\w]/g, "").toLowerCase(),
                    o.rawPrefixHeaderId && (i = a + i),
                    n.hashLinkCounts[i] ? i = i + "-" + n.hashLinkCounts[i]++ : n.hashLinkCounts[i] = 1,
                    i
                }
                return e = e.replace(s, (function(e, a, r) {
                    var s = r;
                    o.customizedHeaderId && (s = r.replace(/\s?\{([^{]+?)}\s*$/, ""));
                    var c = t.subParser("spanGamut")(s, o, n)
                      , d = o.noHeaderId ? "" : ' id="' + l(r) + '"'
                      , u = i - 1 + a.length
                      , p = "<h" + u + d + ">" + c + "</h" + u + ">";
                    return t.subParser("hashBlock")(p, o, n)
                }
                )),
                e = n.converter._dispatch("headers.after", e, o, n)
            }
            )),
            t.subParser("horizontalRule", (function(e, o, n) {
                e = n.converter._dispatch("horizontalRule.before", e, o, n);
                var i = t.subParser("hashBlock")("<hr />", o, n);
                return e = (e = (e = e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, i)).replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, i)).replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, i),
                e = n.converter._dispatch("horizontalRule.after", e, o, n)
            }
            )),
            t.subParser("images", (function(e, o, n) {
                function i(e, o, i, a, r, s, l, c) {
                    var d = n.gUrls
                      , u = n.gTitles
                      , p = n.gDimensions;
                    if (i = i.toLowerCase(),
                    c || (c = ""),
                    e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
                        a = "";
                    else if ("" === a || null === a) {
                        if ("" !== i && null !== i || (i = o.toLowerCase().replace(/ ?\n/g, " ")),
                        a = "#" + i,
                        t.helper.isUndefined(d[i]))
                            return e;
                        a = d[i],
                        t.helper.isUndefined(u[i]) || (c = u[i]),
                        t.helper.isUndefined(p[i]) || (r = p[i].width,
                        s = p[i].height)
                    }
                    o = o.replace(/"/g, "&quot;").replace(t.helper.regexes.asteriskDashAndColon, t.helper.escapeCharactersCallback);
                    var h = '<img src="' + (a = a.replace(t.helper.regexes.asteriskDashAndColon, t.helper.escapeCharactersCallback)) + '" alt="' + o + '"';
                    return c && t.helper.isString(c) && (h += ' title="' + (c = c.replace(/"/g, "&quot;").replace(t.helper.regexes.asteriskDashAndColon, t.helper.escapeCharactersCallback)) + '"'),
                    r && s && (h += ' width="' + (r = "*" === r ? "auto" : r) + '"',
                    h += ' height="' + (s = "*" === s ? "auto" : s) + '"'),
                    h += " />"
                }
                return e = (e = (e = (e = (e = (e = n.converter._dispatch("images.before", e, o, n)).replace(/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, i)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, (function(e, t, o, n, a, r, s, l) {
                    return i(e, t, o, n = n.replace(/\s/g, ""), a, r, 0, l)
                }
                ))).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, i)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, i)).replace(/!\[([^\[\]]+)]()()()()()/g, i),
                e = n.converter._dispatch("images.after", e, o, n)
            }
            )),
            t.subParser("italicsAndBold", (function(e, t, o) {
                function n(e, t, o) {
                    return t + e + o
                }
                return e = o.converter._dispatch("italicsAndBold.before", e, t, o),
                t.literalMidWordUnderscores ? e = (e = (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, (function(e, t) {
                    return n(t, "<strong><em>", "</em></strong>")
                }
                ))).replace(/\b__(\S[\s\S]*?)__\b/g, (function(e, t) {
                    return n(t, "<strong>", "</strong>")
                }
                ))).replace(/\b_(\S[\s\S]*?)_\b/g, (function(e, t) {
                    return n(t, "<em>", "</em>")
                }
                )) : (e = e.replace(/___(\S[\s\S]*?)___/g, (function(e, t) {
                    return /\S$/.test(t) ? n(t, "<strong><em>", "</em></strong>") : e
                }
                )),
                e = e.replace(/__(\S[\s\S]*?)__/g, (function(e, t) {
                    return /\S$/.test(t) ? n(t, "<strong>", "</strong>") : e
                }
                )),
                e = e.replace(/_([^\s_][\s\S]*?)_/g, (function(e, t) {
                    return /\S$/.test(t) ? n(t, "<em>", "</em>") : e
                }
                ))),
                t.literalMidWordAsterisks ? e = (e = (e = e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, (function(e, t, o) {
                    return n(o, t + "<strong><em>", "</em></strong>")
                }
                ))).replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, (function(e, t, o) {
                    return n(o, t + "<strong>", "</strong>")
                }
                ))).replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, (function(e, t, o) {
                    return n(o, t + "<em>", "</em>")
                }
                )) : (e = e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, (function(e, t) {
                    return /\S$/.test(t) ? n(t, "<strong><em>", "</em></strong>") : e
                }
                )),
                e = e.replace(/\*\*(\S[\s\S]*?)\*\*/g, (function(e, t) {
                    return /\S$/.test(t) ? n(t, "<strong>", "</strong>") : e
                }
                )),
                e = e.replace(/\*([^\s*][\s\S]*?)\*/g, (function(e, t) {
                    return /\S$/.test(t) ? n(t, "<em>", "</em>") : e
                }
                ))),
                e = o.converter._dispatch("italicsAndBold.after", e, t, o)
            }
            )),
            t.subParser("lists", (function(e, o, n) {
                function i(e, i) {
                    n.gListLevel++,
                    e = e.replace(/\n{2,}$/, "\n");
                    var a = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm
                      , r = /\n[ \t]*\n(?!¨0)/.test(e += "¨0");
                    return o.disableForced4SpacesIndentedSublists && (a = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),
                    e = (e = e.replace(a, (function(e, i, a, s, l, c, d) {
                        d = d && "" !== d.trim();
                        var u = t.subParser("outdent")(l, o, n)
                          , p = "";
                        return c && o.tasklists && (p = ' class="task-list-item" style="list-style-type: none;"',
                        u = u.replace(/^[ \t]*\[(x|X| )?]/m, (function() {
                            var e = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                            return d && (e += " checked"),
                            e += ">"
                        }
                        ))),
                        u = u.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, (function(e) {
                            return "¨A" + e
                        }
                        )),
                        i || u.search(/\n{2,}/) > -1 ? (u = t.subParser("githubCodeBlocks")(u, o, n),
                        u = t.subParser("blockGamut")(u, o, n)) : (u = (u = t.subParser("lists")(u, o, n)).replace(/\n$/, ""),
                        u = (u = t.subParser("hashHTMLBlocks")(u, o, n)).replace(/\n\n+/g, "\n\n"),
                        u = r ? t.subParser("paragraphs")(u, o, n) : t.subParser("spanGamut")(u, o, n)),
                        u = "<li" + p + ">" + (u = u.replace("¨A", "")) + "</li>\n"
                    }
                    ))).replace(/¨0/g, ""),
                    n.gListLevel--,
                    i && (e = e.replace(/\s+$/, "")),
                    e
                }
                function a(e, t) {
                    if ("ol" === t) {
                        var o = e.match(/^ *(\d+)\./);
                        if (o && "1" !== o[1])
                            return ' start="' + o[1] + '"'
                    }
                    return ""
                }
                function r(e, t, n) {
                    var r = o.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm
                      , s = o.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm
                      , l = "ul" === t ? r : s
                      , c = "";
                    if (-1 !== e.search(l))
                        !function o(d) {
                            var u = d.search(l)
                              , p = a(e, t);
                            -1 !== u ? (c += "\n\n<" + t + p + ">\n" + i(d.slice(0, u), !!n) + "</" + t + ">\n",
                            l = "ul" == (t = "ul" === t ? "ol" : "ul") ? r : s,
                            o(d.slice(u))) : c += "\n\n<" + t + p + ">\n" + i(d, !!n) + "</" + t + ">\n"
                        }(e);
                    else {
                        var d = a(e, t);
                        c = "\n\n<" + t + d + ">\n" + i(e, !!n) + "</" + t + ">\n"
                    }
                    return c
                }
                return e = n.converter._dispatch("lists.before", e, o, n),
                e += "¨0",
                e = (e = n.gListLevel ? e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, (function(e, t, o) {
                    return r(t, o.search(/[*+-]/g) > -1 ? "ul" : "ol", !0)
                }
                )) : e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, (function(e, t, o, n) {
                    return r(o, n.search(/[*+-]/g) > -1 ? "ul" : "ol", !1)
                }
                ))).replace(/¨0/, ""),
                e = n.converter._dispatch("lists.after", e, o, n)
            }
            )),
            t.subParser("metadata", (function(e, t, o) {
                if (!t.metadata)
                    return e;
                function n(e) {
                    o.metadata.raw = e,
                    (e = (e = e.replace(/&/g, "&amp;").replace(/"/g, "&quot;")).replace(/\n {4}/g, " ")).replace(/^([\S ]+): +([\s\S]+?)$/gm, (function(e, t, n) {
                        return o.metadata.parsed[t] = n,
                        ""
                    }
                    ))
                }
                return e = (e = (e = (e = o.converter._dispatch("metadata.before", e, t, o)).replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, (function(e, t, o) {
                    return n(o),
                    "¨M"
                }
                ))).replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, (function(e, t, i) {
                    return t && (o.metadata.format = t),
                    n(i),
                    "¨M"
                }
                ))).replace(/¨M/g, ""),
                e = o.converter._dispatch("metadata.after", e, t, o)
            }
            )),
            t.subParser("outdent", (function(e, t, o) {
                return e = (e = (e = o.converter._dispatch("outdent.before", e, t, o)).replace(/^(\t|[ ]{1,4})/gm, "¨0")).replace(/¨0/g, ""),
                e = o.converter._dispatch("outdent.after", e, t, o)
            }
            )),
            t.subParser("paragraphs", (function(e, o, n) {
                for (var i = (e = (e = (e = n.converter._dispatch("paragraphs.before", e, o, n)).replace(/^\n+/g, "")).replace(/\n+$/g, "")).split(/\n{2,}/g), a = [], r = i.length, s = 0; s < r; s++) {
                    var l = i[s];
                    l.search(/¨(K|G)(\d+)\1/g) >= 0 ? a.push(l) : l.search(/\S/) >= 0 && (l = (l = t.subParser("spanGamut")(l, o, n)).replace(/^([ \t]*)/g, "<p>"),
                    l += "</p>",
                    a.push(l))
                }
                for (r = a.length,
                s = 0; s < r; s++) {
                    for (var c = "", d = a[s], u = !1; /¨(K|G)(\d+)\1/.test(d); ) {
                        var p = RegExp.$1
                          , h = RegExp.$2;
                        c = (c = "K" === p ? n.gHtmlBlocks[h] : u ? t.subParser("encodeCode")(n.ghCodeBlocks[h].text, o, n) : n.ghCodeBlocks[h].codeblock).replace(/\$/g, "$$$$"),
                        d = d.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, c),
                        /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(d) && (u = !0)
                    }
                    a[s] = d
                }
                return e = (e = (e = a.join("\n")).replace(/^\n+/g, "")).replace(/\n+$/g, ""),
                n.converter._dispatch("paragraphs.after", e, o, n)
            }
            )),
            t.subParser("runExtension", (function(e, t, o, n) {
                if (e.filter)
                    t = e.filter(t, n.converter, o);
                else if (e.regex) {
                    var i = e.regex;
                    i instanceof RegExp || (i = new RegExp(i,"g")),
                    t = t.replace(i, e.replace)
                }
                return t
            }
            )),
            t.subParser("spanGamut", (function(e, o, n) {
                return e = n.converter._dispatch("spanGamut.before", e, o, n),
                e = t.subParser("codeSpans")(e, o, n),
                e = t.subParser("escapeSpecialCharsWithinTagAttributes")(e, o, n),
                e = t.subParser("encodeBackslashEscapes")(e, o, n),
                e = t.subParser("images")(e, o, n),
                e = t.subParser("anchors")(e, o, n),
                e = t.subParser("autoLinks")(e, o, n),
                e = t.subParser("simplifiedAutoLinks")(e, o, n),
                e = t.subParser("emoji")(e, o, n),
                e = t.subParser("underline")(e, o, n),
                e = t.subParser("italicsAndBold")(e, o, n),
                e = t.subParser("strikethrough")(e, o, n),
                e = t.subParser("ellipsis")(e, o, n),
                e = t.subParser("hashHTMLSpans")(e, o, n),
                e = t.subParser("encodeAmpsAndAngles")(e, o, n),
                o.simpleLineBreaks ? /\n\n¨K/.test(e) || (e = e.replace(/\n+/g, "<br />\n")) : e = e.replace(/  +\n/g, "<br />\n"),
                e = n.converter._dispatch("spanGamut.after", e, o, n)
            }
            )),
            t.subParser("strikethrough", (function(e, o, n) {
                return o.strikethrough && (e = (e = n.converter._dispatch("strikethrough.before", e, o, n)).replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, (function(e, i) {
                    return function(e) {
                        return o.simplifiedAutoLink && (e = t.subParser("simplifiedAutoLinks")(e, o, n)),
                        "<del>" + e + "</del>"
                    }(i)
                }
                )),
                e = n.converter._dispatch("strikethrough.after", e, o, n)),
                e
            }
            )),
            t.subParser("stripLinkDefinitions", (function(e, o, n) {
                var i = function(i, a, r, s, l, c, d) {
                    return a = a.toLowerCase(),
                    e.toLowerCase().split(a).length - 1 < 2 ? i : (r.match(/^data:.+?\/.+?;base64,/) ? n.gUrls[a] = r.replace(/\s/g, "") : n.gUrls[a] = t.subParser("encodeAmpsAndAngles")(r, o, n),
                    c ? c + d : (d && (n.gTitles[a] = d.replace(/"|'/g, "&quot;")),
                    o.parseImgDimensions && s && l && (n.gDimensions[a] = {
                        width: s,
                        height: l
                    }),
                    ""))
                };
                return e = (e = (e = (e += "¨0").replace(/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm, i)).replace(/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, i)).replace(/¨0/, "")
            }
            )),
            t.subParser("tables", (function(e, o, n) {
                if (!o.tables)
                    return e;
                function i(e, i) {
                    return "<td" + i + ">" + t.subParser("spanGamut")(e, o, n) + "</td>\n"
                }
                function a(e) {
                    var a, r = e.split("\n");
                    for (a = 0; a < r.length; ++a)
                        /^ {0,3}\|/.test(r[a]) && (r[a] = r[a].replace(/^ {0,3}\|/, "")),
                        /\|[ \t]*$/.test(r[a]) && (r[a] = r[a].replace(/\|[ \t]*$/, "")),
                        r[a] = t.subParser("codeSpans")(r[a], o, n);
                    var s, l, c, d, u = r[0].split("|").map((function(e) {
                        return e.trim()
                    }
                    )), p = r[1].split("|").map((function(e) {
                        return e.trim()
                    }
                    )), h = [], b = [], g = [], m = [];
                    for (r.shift(),
                    r.shift(),
                    a = 0; a < r.length; ++a)
                        "" !== r[a].trim() && h.push(r[a].split("|").map((function(e) {
                            return e.trim()
                        }
                        )));
                    if (u.length < p.length)
                        return e;
                    for (a = 0; a < p.length; ++a)
                        g.push((s = p[a],
                        /^:[ \t]*--*$/.test(s) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(s) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(s) ? ' style="text-align:center;"' : ""));
                    for (a = 0; a < u.length; ++a)
                        t.helper.isUndefined(g[a]) && (g[a] = ""),
                        b.push((l = u[a],
                        c = g[a],
                        d = void 0,
                        d = "",
                        l = l.trim(),
                        (o.tablesHeaderId || o.tableHeaderId) && (d = ' id="' + l.replace(/ /g, "_").toLowerCase() + '"'),
                        "<th" + d + c + ">" + (l = t.subParser("spanGamut")(l, o, n)) + "</th>\n"));
                    for (a = 0; a < h.length; ++a) {
                        for (var v = [], f = 0; f < b.length; ++f)
                            t.helper.isUndefined(h[a][f]),
                            v.push(i(h[a][f], g[f]));
                        m.push(v)
                    }
                    return function(e, t) {
                        for (var o = "<table>\n<thead>\n<tr>\n", n = e.length, i = 0; i < n; ++i)
                            o += e[i];
                        for (o += "</tr>\n</thead>\n<tbody>\n",
                        i = 0; i < t.length; ++i) {
                            o += "<tr>\n";
                            for (var a = 0; a < n; ++a)
                                o += t[i][a];
                            o += "</tr>\n"
                        }
                        return o + "</tbody>\n</table>\n"
                    }(b, m)
                }
                return e = (e = (e = (e = n.converter._dispatch("tables.before", e, o, n)).replace(/\\(\|)/g, t.helper.escapeCharactersCallback)).replace(/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, a)).replace(/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm, a),
                e = n.converter._dispatch("tables.after", e, o, n)
            }
            )),
            t.subParser("underline", (function(e, o, n) {
                return o.underline ? (e = n.converter._dispatch("underline.before", e, o, n),
                o.literalMidWordUnderscores ? e = (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, (function(e, t) {
                    return "<u>" + t + "</u>"
                }
                ))).replace(/\b__(\S[\s\S]*?)__\b/g, (function(e, t) {
                    return "<u>" + t + "</u>"
                }
                )) : (e = e.replace(/___(\S[\s\S]*?)___/g, (function(e, t) {
                    return /\S$/.test(t) ? "<u>" + t + "</u>" : e
                }
                )),
                e = e.replace(/__(\S[\s\S]*?)__/g, (function(e, t) {
                    return /\S$/.test(t) ? "<u>" + t + "</u>" : e
                }
                ))),
                e = e.replace(/(_)/g, t.helper.escapeCharactersCallback),
                e = n.converter._dispatch("underline.after", e, o, n)) : e
            }
            )),
            t.subParser("unescapeSpecialChars", (function(e, t, o) {
                return e = (e = o.converter._dispatch("unescapeSpecialChars.before", e, t, o)).replace(/¨E(\d+)E/g, (function(e, t) {
                    var o = parseInt(t);
                    return String.fromCharCode(o)
                }
                )),
                e = o.converter._dispatch("unescapeSpecialChars.after", e, t, o)
            }
            )),
            t.subParser("makeMarkdown.blockquote", (function(e, o) {
                var n = "";
                if (e.hasChildNodes())
                    for (var i = e.childNodes, a = i.length, r = 0; r < a; ++r) {
                        var s = t.subParser("makeMarkdown.node")(i[r], o);
                        "" !== s && (n += s)
                    }
                return n = "> " + (n = n.trim()).split("\n").join("\n> ")
            }
            )),
            t.subParser("makeMarkdown.codeBlock", (function(e, t) {
                var o = e.getAttribute("language")
                  , n = e.getAttribute("precodenum");
                return "```" + o + "\n" + t.preList[n] + "\n```"
            }
            )),
            t.subParser("makeMarkdown.codeSpan", (function(e) {
                return "`" + e.innerHTML + "`"
            }
            )),
            t.subParser("makeMarkdown.emphasis", (function(e, o) {
                var n = "";
                if (e.hasChildNodes()) {
                    n += "*";
                    for (var i = e.childNodes, a = i.length, r = 0; r < a; ++r)
                        n += t.subParser("makeMarkdown.node")(i[r], o);
                    n += "*"
                }
                return n
            }
            )),
            t.subParser("makeMarkdown.header", (function(e, o, n) {
                var i = new Array(n + 1).join("#")
                  , a = "";
                if (e.hasChildNodes()) {
                    a = i + " ";
                    for (var r = e.childNodes, s = r.length, l = 0; l < s; ++l)
                        a += t.subParser("makeMarkdown.node")(r[l], o)
                }
                return a
            }
            )),
            t.subParser("makeMarkdown.hr", (function() {
                return "---"
            }
            )),
            t.subParser("makeMarkdown.image", (function(e) {
                var t = "";
                return e.hasAttribute("src") && (t += "![" + e.getAttribute("alt") + "](",
                t += "<" + e.getAttribute("src") + ">",
                e.hasAttribute("width") && e.hasAttribute("height") && (t += " =" + e.getAttribute("width") + "x" + e.getAttribute("height")),
                e.hasAttribute("title") && (t += ' "' + e.getAttribute("title") + '"'),
                t += ")"),
                t
            }
            )),
            t.subParser("makeMarkdown.links", (function(e, o) {
                var n = "";
                if (e.hasChildNodes() && e.hasAttribute("href")) {
                    var i = e.childNodes
                      , a = i.length;
                    n = "[";
                    for (var r = 0; r < a; ++r)
                        n += t.subParser("makeMarkdown.node")(i[r], o);
                    n += "](",
                    n += "<" + e.getAttribute("href") + ">",
                    e.hasAttribute("title") && (n += ' "' + e.getAttribute("title") + '"'),
                    n += ")"
                }
                return n
            }
            )),
            t.subParser("makeMarkdown.list", (function(e, o, n) {
                var i = "";
                if (!e.hasChildNodes())
                    return "";
                for (var a = e.childNodes, r = a.length, s = e.getAttribute("start") || 1, l = 0; l < r; ++l)
                    void 0 !== a[l].tagName && "li" === a[l].tagName.toLowerCase() && (i += ("ol" === n ? s.toString() + ". " : "- ") + t.subParser("makeMarkdown.listItem")(a[l], o),
                    ++s);
                return (i += "\n\x3c!-- --\x3e\n").trim()
            }
            )),
            t.subParser("makeMarkdown.listItem", (function(e, o) {
                for (var n = "", i = e.childNodes, a = i.length, r = 0; r < a; ++r)
                    n += t.subParser("makeMarkdown.node")(i[r], o);
                return /\n$/.test(n) ? n = n.split("\n").join("\n    ").replace(/^ {4}$/gm, "").replace(/\n\n+/g, "\n\n") : n += "\n",
                n
            }
            )),
            t.subParser("makeMarkdown.node", (function(e, o, n) {
                n = n || !1;
                var i = "";
                if (3 === e.nodeType)
                    return t.subParser("makeMarkdown.txt")(e, o);
                if (8 === e.nodeType)
                    return "\x3c!--" + e.data + "--\x3e\n\n";
                if (1 !== e.nodeType)
                    return "";
                switch (e.tagName.toLowerCase()) {
                case "h1":
                    n || (i = t.subParser("makeMarkdown.header")(e, o, 1) + "\n\n");
                    break;
                case "h2":
                    n || (i = t.subParser("makeMarkdown.header")(e, o, 2) + "\n\n");
                    break;
                case "h3":
                    n || (i = t.subParser("makeMarkdown.header")(e, o, 3) + "\n\n");
                    break;
                case "h4":
                    n || (i = t.subParser("makeMarkdown.header")(e, o, 4) + "\n\n");
                    break;
                case "h5":
                    n || (i = t.subParser("makeMarkdown.header")(e, o, 5) + "\n\n");
                    break;
                case "h6":
                    n || (i = t.subParser("makeMarkdown.header")(e, o, 6) + "\n\n");
                    break;
                case "p":
                    n || (i = t.subParser("makeMarkdown.paragraph")(e, o) + "\n\n");
                    break;
                case "blockquote":
                    n || (i = t.subParser("makeMarkdown.blockquote")(e, o) + "\n\n");
                    break;
                case "hr":
                    n || (i = t.subParser("makeMarkdown.hr")(e, o) + "\n\n");
                    break;
                case "ol":
                    n || (i = t.subParser("makeMarkdown.list")(e, o, "ol") + "\n\n");
                    break;
                case "ul":
                    n || (i = t.subParser("makeMarkdown.list")(e, o, "ul") + "\n\n");
                    break;
                case "precode":
                    n || (i = t.subParser("makeMarkdown.codeBlock")(e, o) + "\n\n");
                    break;
                case "pre":
                    n || (i = t.subParser("makeMarkdown.pre")(e, o) + "\n\n");
                    break;
                case "table":
                    n || (i = t.subParser("makeMarkdown.table")(e, o) + "\n\n");
                    break;
                case "code":
                    i = t.subParser("makeMarkdown.codeSpan")(e, o);
                    break;
                case "em":
                case "i":
                    i = t.subParser("makeMarkdown.emphasis")(e, o);
                    break;
                case "strong":
                case "b":
                    i = t.subParser("makeMarkdown.strong")(e, o);
                    break;
                case "del":
                    i = t.subParser("makeMarkdown.strikethrough")(e, o);
                    break;
                case "a":
                    i = t.subParser("makeMarkdown.links")(e, o);
                    break;
                case "img":
                    i = t.subParser("makeMarkdown.image")(e, o);
                    break;
                default:
                    i = e.outerHTML + "\n\n"
                }
                return i
            }
            )),
            t.subParser("makeMarkdown.paragraph", (function(e, o) {
                var n = "";
                if (e.hasChildNodes())
                    for (var i = e.childNodes, a = i.length, r = 0; r < a; ++r)
                        n += t.subParser("makeMarkdown.node")(i[r], o);
                return n = n.trim()
            }
            )),
            t.subParser("makeMarkdown.pre", (function(e, t) {
                var o = e.getAttribute("prenum");
                return "<pre>" + t.preList[o] + "</pre>"
            }
            )),
            t.subParser("makeMarkdown.strikethrough", (function(e, o) {
                var n = "";
                if (e.hasChildNodes()) {
                    n += "~~";
                    for (var i = e.childNodes, a = i.length, r = 0; r < a; ++r)
                        n += t.subParser("makeMarkdown.node")(i[r], o);
                    n += "~~"
                }
                return n
            }
            )),
            t.subParser("makeMarkdown.strong", (function(e, o) {
                var n = "";
                if (e.hasChildNodes()) {
                    n += "**";
                    for (var i = e.childNodes, a = i.length, r = 0; r < a; ++r)
                        n += t.subParser("makeMarkdown.node")(i[r], o);
                    n += "**"
                }
                return n
            }
            )),
            t.subParser("makeMarkdown.table", (function(e, o) {
                var n, i, a = "", r = [[], []], s = e.querySelectorAll("thead>tr>th"), l = e.querySelectorAll("tbody>tr");
                for (n = 0; n < s.length; ++n) {
                    var c = t.subParser("makeMarkdown.tableCell")(s[n], o)
                      , d = "---";
                    if (s[n].hasAttribute("style"))
                        switch (s[n].getAttribute("style").toLowerCase().replace(/\s/g, "")) {
                        case "text-align:left;":
                            d = ":---";
                            break;
                        case "text-align:right;":
                            d = "---:";
                            break;
                        case "text-align:center;":
                            d = ":---:"
                        }
                    r[0][n] = c.trim(),
                    r[1][n] = d
                }
                for (n = 0; n < l.length; ++n) {
                    var u = r.push([]) - 1
                      , p = l[n].getElementsByTagName("td");
                    for (i = 0; i < s.length; ++i) {
                        var h = " ";
                        void 0 !== p[i] && (h = t.subParser("makeMarkdown.tableCell")(p[i], o)),
                        r[u].push(h)
                    }
                }
                var b = 3;
                for (n = 0; n < r.length; ++n)
                    for (i = 0; i < r[n].length; ++i) {
                        var g = r[n][i].length;
                        g > b && (b = g)
                    }
                for (n = 0; n < r.length; ++n) {
                    for (i = 0; i < r[n].length; ++i)
                        1 === n ? ":" === r[n][i].slice(-1) ? r[n][i] = t.helper.padEnd(r[n][i].slice(-1), b - 1, "-") + ":" : r[n][i] = t.helper.padEnd(r[n][i], b, "-") : r[n][i] = t.helper.padEnd(r[n][i], b);
                    a += "| " + r[n].join(" | ") + " |\n"
                }
                return a.trim()
            }
            )),
            t.subParser("makeMarkdown.tableCell", (function(e, o) {
                var n = "";
                if (!e.hasChildNodes())
                    return "";
                for (var i = e.childNodes, a = i.length, r = 0; r < a; ++r)
                    n += t.subParser("makeMarkdown.node")(i[r], o, !0);
                return n.trim()
            }
            )),
            t.subParser("makeMarkdown.txt", (function(e) {
                var o = e.nodeValue;
                return o = (o = o.replace(/ +/g, " ")).replace(/¨NBSP;/g, " "),
                o = (o = (o = (o = (o = (o = (o = (o = (o = t.helper.unescapeHTMLEntities(o)).replace(/([*_~|`])/g, "\\$1")).replace(/^(\s*)>/g, "\\$1>")).replace(/^#/gm, "\\#")).replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3")).replace(/^( {0,3}\d+)\./gm, "$1\\.")).replace(/^( {0,3})([+-])/gm, "$1\\$2")).replace(/]([\s]*)\(/g, "\\]$1\\(")).replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:")
            }
            )),
            Ft.exports ? Ft.exports = t : this.showdown = t
        }
        .call(Nt);
        var Ht = Mt(Ut.exports);
        const {entries: Vt, setPrototypeOf: qt, isFrozen: Gt, getPrototypeOf: Wt, getOwnPropertyDescriptor: Yt} = Object;
        let {freeze: Kt, seal: Xt, create: Zt} = Object
          , {apply: Jt, construct: Qt} = "undefined" != typeof Reflect && Reflect;
        Kt || (Kt = function(e) {
            return e
        }
        ),
        Xt || (Xt = function(e) {
            return e
        }
        ),
        Jt || (Jt = function(e, t, o) {
            return e.apply(t, o)
        }
        ),
        Qt || (Qt = function(e, t) {
            return new e(...t)
        }
        );
        const eo = mo(Array.prototype.forEach)
          , to = mo(Array.prototype.lastIndexOf)
          , oo = mo(Array.prototype.pop)
          , no = mo(Array.prototype.push)
          , io = mo(Array.prototype.splice)
          , ao = mo(String.prototype.toLowerCase)
          , ro = mo(String.prototype.toString)
          , so = mo(String.prototype.match)
          , lo = mo(String.prototype.replace)
          , co = mo(String.prototype.indexOf)
          , uo = mo(String.prototype.trim)
          , po = mo(Object.prototype.hasOwnProperty)
          , ho = mo(RegExp.prototype.test)
          , bo = (go = TypeError,
        function() {
            for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
                t[o] = arguments[o];
            return Qt(go, t)
        }
        );
        var go;
        function mo(e) {
            return function(t) {
                for (var o = arguments.length, n = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
                    n[i - 1] = arguments[i];
                return Jt(e, t, n)
            }
        }
        function vo(e, t) {
            let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ao;
            qt && qt(e, null);
            let n = t.length;
            for (; n--; ) {
                let i = t[n];
                if ("string" == typeof i) {
                    const e = o(i);
                    e !== i && (Gt(t) || (t[n] = e),
                    i = e)
                }
                e[i] = !0
            }
            return e
        }
        function fo(e) {
            for (let t = 0; t < e.length; t++) {
                po(e, t) || (e[t] = null)
            }
            return e
        }
        function yo(e) {
            const t = Zt(null);
            for (const [o,n] of Vt(e)) {
                po(e, o) && (Array.isArray(n) ? t[o] = fo(n) : n && "object" == typeof n && n.constructor === Object ? t[o] = yo(n) : t[o] = n)
            }
            return t
        }
        function wo(e, t) {
            for (; null !== e; ) {
                const o = Yt(e, t);
                if (o) {
                    if (o.get)
                        return mo(o.get);
                    if ("function" == typeof o.value)
                        return mo(o.value)
                }
                e = Wt(e)
            }
            return function() {
                return null
            }
        }
        const _o = Kt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"])
          , xo = Kt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"])
          , zo = Kt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"])
          , ko = Kt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"])
          , So = Kt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"])
          , Ao = Kt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"])
          , Eo = Kt(["#text"])
          , Co = Kt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"])
          , Oo = Kt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"])
          , Bo = Kt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"])
          , Po = Kt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"])
          , To = Xt(/\{\{[\w\W]*|[\w\W]*\}\}/gm)
          , Lo = Xt(/<%[\w\W]*|[\w\W]*%>/gm)
          , Io = Xt(/\$\{[\w\W]*/gm)
          , Ro = Xt(/^data-[\-\w.\u00B7-\uFFFF]+$/)
          , $o = Xt(/^aria-[\-\w]+$/)
          , jo = Xt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i)
          , Do = Xt(/^(?:\w+script|data):/i)
          , No = Xt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g)
          , Mo = Xt(/^html$/i)
          , Fo = Xt(/^[a-z][.\w]*(-[.\w]+)+$/i);
        var Uo = Object.freeze({
            __proto__: null,
            ARIA_ATTR: $o,
            ATTR_WHITESPACE: No,
            CUSTOM_ELEMENT: Fo,
            DATA_ATTR: Ro,
            DOCTYPE_NAME: Mo,
            ERB_EXPR: Lo,
            IS_ALLOWED_URI: jo,
            IS_SCRIPT_OR_DATA: Do,
            MUSTACHE_EXPR: To,
            TMPLIT_EXPR: Io
        });
        const Ho = 1
          , Vo = 3
          , qo = 7
          , Go = 8
          , Wo = 9
          , Yo = function() {
            return "undefined" == typeof window ? null : window
        };
        var Ko = function e() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yo();
            const o = t => e(t);
            if (o.version = "3.2.4",
            o.removed = [],
            !t || !t.document || t.document.nodeType !== Wo || !t.Element)
                return o.isSupported = !1,
                o;
            let {document: n} = t;
            const i = n
              , a = i.currentScript
              , {DocumentFragment: r, HTMLTemplateElement: s, Node: l, Element: c, NodeFilter: d, NamedNodeMap: u=t.NamedNodeMap || t.MozNamedAttrMap, HTMLFormElement: p, DOMParser: h, trustedTypes: b} = t
              , g = c.prototype
              , m = wo(g, "cloneNode")
              , v = wo(g, "remove")
              , f = wo(g, "nextSibling")
              , y = wo(g, "childNodes")
              , w = wo(g, "parentNode");
            if ("function" == typeof s) {
                const e = n.createElement("template");
                e.content && e.content.ownerDocument && (n = e.content.ownerDocument)
            }
            let _, x = "";
            const {implementation: z, createNodeIterator: k, createDocumentFragment: S, getElementsByTagName: A} = n
              , {importNode: E} = i;
            let C = {
                afterSanitizeAttributes: [],
                afterSanitizeElements: [],
                afterSanitizeShadowDOM: [],
                beforeSanitizeAttributes: [],
                beforeSanitizeElements: [],
                beforeSanitizeShadowDOM: [],
                uponSanitizeAttribute: [],
                uponSanitizeElement: [],
                uponSanitizeShadowNode: []
            };
            o.isSupported = "function" == typeof Vt && "function" == typeof w && z && void 0 !== z.createHTMLDocument;
            const {MUSTACHE_EXPR: O, ERB_EXPR: B, TMPLIT_EXPR: P, DATA_ATTR: T, ARIA_ATTR: L, IS_SCRIPT_OR_DATA: I, ATTR_WHITESPACE: R, CUSTOM_ELEMENT: $} = Uo;
            let {IS_ALLOWED_URI: j} = Uo
              , D = null;
            const N = vo({}, [..._o, ...xo, ...zo, ...So, ...Eo]);
            let M = null;
            const F = vo({}, [...Co, ...Oo, ...Bo, ...Po]);
            let U = Object.seal(Zt(null, {
                tagNameCheck: {
                    writable: !0,
                    configurable: !1,
                    enumerable: !0,
                    value: null
                },
                attributeNameCheck: {
                    writable: !0,
                    configurable: !1,
                    enumerable: !0,
                    value: null
                },
                allowCustomizedBuiltInElements: {
                    writable: !0,
                    configurable: !1,
                    enumerable: !0,
                    value: !1
                }
            }))
              , H = null
              , V = null
              , q = !0
              , G = !0
              , W = !1
              , Y = !0
              , K = !1
              , X = !0
              , Z = !1
              , J = !1
              , Q = !1
              , ee = !1
              , te = !1
              , oe = !1
              , ne = !0
              , ie = !1
              , ae = !0
              , re = !1
              , se = {}
              , le = null;
            const ce = vo({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
            let de = null;
            const ue = vo({}, ["audio", "video", "img", "source", "image", "track"]);
            let pe = null;
            const he = vo({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"])
              , be = "http://www.w3.org/1998/Math/MathML"
              , ge = "http://www.w3.org/2000/svg"
              , me = "http://www.w3.org/1999/xhtml";
            let ve = me
              , fe = !1
              , ye = null;
            const we = vo({}, [be, ge, me], ro);
            let _e = vo({}, ["mi", "mo", "mn", "ms", "mtext"])
              , xe = vo({}, ["annotation-xml"]);
            const ze = vo({}, ["title", "style", "font", "a", "script"]);
            let ke = null;
            const Se = ["application/xhtml+xml", "text/html"];
            let Ae = null
              , Ee = null;
            const Ce = n.createElement("form")
              , Oe = function(e) {
                return e instanceof RegExp || e instanceof Function
            }
              , Be = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!Ee || Ee !== e) {
                    if (e && "object" == typeof e || (e = {}),
                    e = yo(e),
                    ke = -1 === Se.indexOf(e.PARSER_MEDIA_TYPE) ? "text/html" : e.PARSER_MEDIA_TYPE,
                    Ae = "application/xhtml+xml" === ke ? ro : ao,
                    D = po(e, "ALLOWED_TAGS") ? vo({}, e.ALLOWED_TAGS, Ae) : N,
                    M = po(e, "ALLOWED_ATTR") ? vo({}, e.ALLOWED_ATTR, Ae) : F,
                    ye = po(e, "ALLOWED_NAMESPACES") ? vo({}, e.ALLOWED_NAMESPACES, ro) : we,
                    pe = po(e, "ADD_URI_SAFE_ATTR") ? vo(yo(he), e.ADD_URI_SAFE_ATTR, Ae) : he,
                    de = po(e, "ADD_DATA_URI_TAGS") ? vo(yo(ue), e.ADD_DATA_URI_TAGS, Ae) : ue,
                    le = po(e, "FORBID_CONTENTS") ? vo({}, e.FORBID_CONTENTS, Ae) : ce,
                    H = po(e, "FORBID_TAGS") ? vo({}, e.FORBID_TAGS, Ae) : {},
                    V = po(e, "FORBID_ATTR") ? vo({}, e.FORBID_ATTR, Ae) : {},
                    se = !!po(e, "USE_PROFILES") && e.USE_PROFILES,
                    q = !1 !== e.ALLOW_ARIA_ATTR,
                    G = !1 !== e.ALLOW_DATA_ATTR,
                    W = e.ALLOW_UNKNOWN_PROTOCOLS || !1,
                    Y = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR,
                    K = e.SAFE_FOR_TEMPLATES || !1,
                    X = !1 !== e.SAFE_FOR_XML,
                    Z = e.WHOLE_DOCUMENT || !1,
                    ee = e.RETURN_DOM || !1,
                    te = e.RETURN_DOM_FRAGMENT || !1,
                    oe = e.RETURN_TRUSTED_TYPE || !1,
                    Q = e.FORCE_BODY || !1,
                    ne = !1 !== e.SANITIZE_DOM,
                    ie = e.SANITIZE_NAMED_PROPS || !1,
                    ae = !1 !== e.KEEP_CONTENT,
                    re = e.IN_PLACE || !1,
                    j = e.ALLOWED_URI_REGEXP || jo,
                    ve = e.NAMESPACE || me,
                    _e = e.MATHML_TEXT_INTEGRATION_POINTS || _e,
                    xe = e.HTML_INTEGRATION_POINTS || xe,
                    U = e.CUSTOM_ELEMENT_HANDLING || {},
                    e.CUSTOM_ELEMENT_HANDLING && Oe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (U.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                    e.CUSTOM_ELEMENT_HANDLING && Oe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (U.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                    e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (U.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                    K && (G = !1),
                    te && (ee = !0),
                    se && (D = vo({}, Eo),
                    M = [],
                    !0 === se.html && (vo(D, _o),
                    vo(M, Co)),
                    !0 === se.svg && (vo(D, xo),
                    vo(M, Oo),
                    vo(M, Po)),
                    !0 === se.svgFilters && (vo(D, zo),
                    vo(M, Oo),
                    vo(M, Po)),
                    !0 === se.mathMl && (vo(D, So),
                    vo(M, Bo),
                    vo(M, Po))),
                    e.ADD_TAGS && (D === N && (D = yo(D)),
                    vo(D, e.ADD_TAGS, Ae)),
                    e.ADD_ATTR && (M === F && (M = yo(M)),
                    vo(M, e.ADD_ATTR, Ae)),
                    e.ADD_URI_SAFE_ATTR && vo(pe, e.ADD_URI_SAFE_ATTR, Ae),
                    e.FORBID_CONTENTS && (le === ce && (le = yo(le)),
                    vo(le, e.FORBID_CONTENTS, Ae)),
                    ae && (D["#text"] = !0),
                    Z && vo(D, ["html", "head", "body"]),
                    D.table && (vo(D, ["tbody"]),
                    delete H.tbody),
                    e.TRUSTED_TYPES_POLICY) {
                        if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML)
                            throw bo('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                        if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL)
                            throw bo('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                        _ = e.TRUSTED_TYPES_POLICY,
                        x = _.createHTML("")
                    } else
                        void 0 === _ && (_ = function(e, t) {
                            if ("object" != typeof e || "function" != typeof e.createPolicy)
                                return null;
                            let o = null;
                            const n = "data-tt-policy-suffix";
                            t && t.hasAttribute(n) && (o = t.getAttribute(n));
                            const i = "dompurify" + (o ? "#" + o : "");
                            try {
                                return e.createPolicy(i, {
                                    createHTML: e => e,
                                    createScriptURL: e => e
                                })
                            } catch (e) {
                                return console.warn("TrustedTypes policy " + i + " could not be created."),
                                null
                            }
                        }(b, a)),
                        null !== _ && "string" == typeof x && (x = _.createHTML(""));
                    Kt && Kt(e),
                    Ee = e
                }
            }
              , Pe = vo({}, [...xo, ...zo, ...ko])
              , Te = vo({}, [...So, ...Ao])
              , Le = function(e) {
                no(o.removed, {
                    element: e
                });
                try {
                    w(e).removeChild(e)
                } catch (t) {
                    v(e)
                }
            }
              , Ie = function(e, t) {
                try {
                    no(o.removed, {
                        attribute: t.getAttributeNode(e),
                        from: t
                    })
                } catch (e) {
                    no(o.removed, {
                        attribute: null,
                        from: t
                    })
                }
                if (t.removeAttribute(e),
                "is" === e)
                    if (ee || te)
                        try {
                            Le(t)
                        } catch (e) {}
                    else
                        try {
                            t.setAttribute(e, "")
                        } catch (e) {}
            }
              , Re = function(e) {
                let t = null
                  , o = null;
                if (Q)
                    e = "<remove></remove>" + e;
                else {
                    const t = so(e, /^[\r\n\t ]+/);
                    o = t && t[0]
                }
                "application/xhtml+xml" === ke && ve === me && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                const i = _ ? _.createHTML(e) : e;
                if (ve === me)
                    try {
                        t = (new h).parseFromString(i, ke)
                    } catch (e) {}
                if (!t || !t.documentElement) {
                    t = z.createDocument(ve, "template", null);
                    try {
                        t.documentElement.innerHTML = fe ? x : i
                    } catch (e) {}
                }
                const a = t.body || t.documentElement;
                return e && o && a.insertBefore(n.createTextNode(o), a.childNodes[0] || null),
                ve === me ? A.call(t, Z ? "html" : "body")[0] : Z ? t.documentElement : a
            }
              , $e = function(e) {
                return k.call(e.ownerDocument || e, e, d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION, null)
            }
              , je = function(e) {
                return e instanceof p && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof u) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
            }
              , De = function(e) {
                return "function" == typeof l && e instanceof l
            };
            function Ne(e, t, n) {
                eo(e, (e => {
                    e.call(o, t, n, Ee)
                }
                ))
            }
            const Me = function(e) {
                let t = null;
                if (Ne(C.beforeSanitizeElements, e, null),
                je(e))
                    return Le(e),
                    !0;
                const n = Ae(e.nodeName);
                if (Ne(C.uponSanitizeElement, e, {
                    tagName: n,
                    allowedTags: D
                }),
                e.hasChildNodes() && !De(e.firstElementChild) && ho(/<[/\w]/g, e.innerHTML) && ho(/<[/\w]/g, e.textContent))
                    return Le(e),
                    !0;
                if (e.nodeType === qo)
                    return Le(e),
                    !0;
                if (X && e.nodeType === Go && ho(/<[/\w]/g, e.data))
                    return Le(e),
                    !0;
                if (!D[n] || H[n]) {
                    if (!H[n] && Ue(n)) {
                        if (U.tagNameCheck instanceof RegExp && ho(U.tagNameCheck, n))
                            return !1;
                        if (U.tagNameCheck instanceof Function && U.tagNameCheck(n))
                            return !1
                    }
                    if (ae && !le[n]) {
                        const t = w(e) || e.parentNode
                          , o = y(e) || e.childNodes;
                        if (o && t) {
                            for (let n = o.length - 1; n >= 0; --n) {
                                const i = m(o[n], !0);
                                i.__removalCount = (e.__removalCount || 0) + 1,
                                t.insertBefore(i, f(e))
                            }
                        }
                    }
                    return Le(e),
                    !0
                }
                return e instanceof c && !function(e) {
                    let t = w(e);
                    t && t.tagName || (t = {
                        namespaceURI: ve,
                        tagName: "template"
                    });
                    const o = ao(e.tagName)
                      , n = ao(t.tagName);
                    return !!ye[e.namespaceURI] && (e.namespaceURI === ge ? t.namespaceURI === me ? "svg" === o : t.namespaceURI === be ? "svg" === o && ("annotation-xml" === n || _e[n]) : Boolean(Pe[o]) : e.namespaceURI === be ? t.namespaceURI === me ? "math" === o : t.namespaceURI === ge ? "math" === o && xe[n] : Boolean(Te[o]) : e.namespaceURI === me ? !(t.namespaceURI === ge && !xe[n]) && !(t.namespaceURI === be && !_e[n]) && !Te[o] && (ze[o] || !Pe[o]) : !("application/xhtml+xml" !== ke || !ye[e.namespaceURI]))
                }(e) ? (Le(e),
                !0) : "noscript" !== n && "noembed" !== n && "noframes" !== n || !ho(/<\/no(script|embed|frames)/i, e.innerHTML) ? (K && e.nodeType === Vo && (t = e.textContent,
                eo([O, B, P], (e => {
                    t = lo(t, e, " ")
                }
                )),
                e.textContent !== t && (no(o.removed, {
                    element: e.cloneNode()
                }),
                e.textContent = t)),
                Ne(C.afterSanitizeElements, e, null),
                !1) : (Le(e),
                !0)
            }
              , Fe = function(e, t, o) {
                if (ne && ("id" === t || "name" === t) && (o in n || o in Ce))
                    return !1;
                if (G && !V[t] && ho(T, t))
                    ;
                else if (q && ho(L, t))
                    ;
                else if (!M[t] || V[t]) {
                    if (!(Ue(e) && (U.tagNameCheck instanceof RegExp && ho(U.tagNameCheck, e) || U.tagNameCheck instanceof Function && U.tagNameCheck(e)) && (U.attributeNameCheck instanceof RegExp && ho(U.attributeNameCheck, t) || U.attributeNameCheck instanceof Function && U.attributeNameCheck(t)) || "is" === t && U.allowCustomizedBuiltInElements && (U.tagNameCheck instanceof RegExp && ho(U.tagNameCheck, o) || U.tagNameCheck instanceof Function && U.tagNameCheck(o))))
                        return !1
                } else if (pe[t])
                    ;
                else if (ho(j, lo(o, R, "")))
                    ;
                else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== co(o, "data:") || !de[e]) {
                    if (W && !ho(I, lo(o, R, "")))
                        ;
                    else if (o)
                        return !1
                } else
                    ;return !0
            }
              , Ue = function(e) {
                return "annotation-xml" !== e && so(e, $)
            }
              , He = function(e) {
                Ne(C.beforeSanitizeAttributes, e, null);
                const {attributes: t} = e;
                if (!t || je(e))
                    return;
                const n = {
                    attrName: "",
                    attrValue: "",
                    keepAttr: !0,
                    allowedAttributes: M,
                    forceKeepAttr: void 0
                };
                let i = t.length;
                for (; i--; ) {
                    const a = t[i]
                      , {name: r, namespaceURI: s, value: l} = a
                      , c = Ae(r);
                    let d = "value" === r ? l : uo(l);
                    if (n.attrName = c,
                    n.attrValue = d,
                    n.keepAttr = !0,
                    n.forceKeepAttr = void 0,
                    Ne(C.uponSanitizeAttribute, e, n),
                    d = n.attrValue,
                    !ie || "id" !== c && "name" !== c || (Ie(r, e),
                    d = "user-content-" + d),
                    X && ho(/((--!?|])>)|<\/(style|title)/i, d)) {
                        Ie(r, e);
                        continue
                    }
                    if (n.forceKeepAttr)
                        continue;
                    if (Ie(r, e),
                    !n.keepAttr)
                        continue;
                    if (!Y && ho(/\/>/i, d)) {
                        Ie(r, e);
                        continue
                    }
                    K && eo([O, B, P], (e => {
                        d = lo(d, e, " ")
                    }
                    ));
                    const u = Ae(e.nodeName);
                    if (Fe(u, c, d)) {
                        if (_ && "object" == typeof b && "function" == typeof b.getAttributeType)
                            if (s)
                                ;
                            else
                                switch (b.getAttributeType(u, c)) {
                                case "TrustedHTML":
                                    d = _.createHTML(d);
                                    break;
                                case "TrustedScriptURL":
                                    d = _.createScriptURL(d)
                                }
                        try {
                            s ? e.setAttributeNS(s, r, d) : e.setAttribute(r, d),
                            je(e) ? Le(e) : oo(o.removed)
                        } catch (e) {}
                    }
                }
                Ne(C.afterSanitizeAttributes, e, null)
            }
              , Ve = function e(t) {
                let o = null;
                const n = $e(t);
                for (Ne(C.beforeSanitizeShadowDOM, t, null); o = n.nextNode(); )
                    Ne(C.uponSanitizeShadowNode, o, null),
                    Me(o),
                    He(o),
                    o.content instanceof r && e(o.content);
                Ne(C.afterSanitizeShadowDOM, t, null)
            };
            return o.sanitize = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = null
                  , a = null
                  , s = null
                  , c = null;
                if (fe = !e,
                fe && (e = "\x3c!--\x3e"),
                "string" != typeof e && !De(e)) {
                    if ("function" != typeof e.toString)
                        throw bo("toString is not a function");
                    if ("string" != typeof (e = e.toString()))
                        throw bo("dirty is not a string, aborting")
                }
                if (!o.isSupported)
                    return e;
                if (J || Be(t),
                o.removed = [],
                "string" == typeof e && (re = !1),
                re) {
                    if (e.nodeName) {
                        const t = Ae(e.nodeName);
                        if (!D[t] || H[t])
                            throw bo("root node is forbidden and cannot be sanitized in-place")
                    }
                } else if (e instanceof l)
                    n = Re("\x3c!----\x3e"),
                    a = n.ownerDocument.importNode(e, !0),
                    a.nodeType === Ho && "BODY" === a.nodeName || "HTML" === a.nodeName ? n = a : n.appendChild(a);
                else {
                    if (!ee && !K && !Z && -1 === e.indexOf("<"))
                        return _ && oe ? _.createHTML(e) : e;
                    if (n = Re(e),
                    !n)
                        return ee ? null : oe ? x : ""
                }
                n && Q && Le(n.firstChild);
                const d = $e(re ? e : n);
                for (; s = d.nextNode(); )
                    Me(s),
                    He(s),
                    s.content instanceof r && Ve(s.content);
                if (re)
                    return e;
                if (ee) {
                    if (te)
                        for (c = S.call(n.ownerDocument); n.firstChild; )
                            c.appendChild(n.firstChild);
                    else
                        c = n;
                    return (M.shadowroot || M.shadowrootmode) && (c = E.call(i, c, !0)),
                    c
                }
                let u = Z ? n.outerHTML : n.innerHTML;
                return Z && D["!doctype"] && n.ownerDocument && n.ownerDocument.doctype && n.ownerDocument.doctype.name && ho(Mo, n.ownerDocument.doctype.name) && (u = "<!DOCTYPE " + n.ownerDocument.doctype.name + ">\n" + u),
                K && eo([O, B, P], (e => {
                    u = lo(u, e, " ")
                }
                )),
                _ && oe ? _.createHTML(u) : u
            }
            ,
            o.setConfig = function() {
                Be(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
                J = !0
            }
            ,
            o.clearConfig = function() {
                Ee = null,
                J = !1
            }
            ,
            o.isValidAttribute = function(e, t, o) {
                Ee || Be({});
                const n = Ae(e)
                  , i = Ae(t);
                return Fe(n, i, o)
            }
            ,
            o.addHook = function(e, t) {
                "function" == typeof t && no(C[e], t)
            }
            ,
            o.removeHook = function(e, t) {
                if (void 0 !== t) {
                    const o = to(C[e], t);
                    return -1 === o ? void 0 : io(C[e], o, 1)[0]
                }
                return oo(C[e])
            }
            ,
            o.removeHooks = function(e) {
                C[e] = []
            }
            ,
            o.removeAllHooks = function() {
                C = {
                    afterSanitizeAttributes: [],
                    afterSanitizeElements: [],
                    afterSanitizeShadowDOM: [],
                    beforeSanitizeAttributes: [],
                    beforeSanitizeElements: [],
                    beforeSanitizeShadowDOM: [],
                    uponSanitizeAttribute: [],
                    uponSanitizeElement: [],
                    uponSanitizeShadowNode: []
                }
            }
            ,
            o
        }();
        const Xo = ["blz-image", "blz-icon"]
          , Zo = ["icon", "size"]
          , Jo = ({markdown: e, extendedElementAllowList: t=Xo, extendedAttributeAllowList: o=Zo}) => ( ({html: e, extendedElementAllowList: t=Xo, extendedAttributeAllowList: o=Zo}) => Ko.sanitize(e, {
            ADD_TAGS: t,
            ADD_ATTR: o
        }))({
            html: (new Ht.Converter).makeHtml(e),
            extendedElementAllowList: t,
            extendedAttributeAllowList: o
        });
        const Qo = "blz-tooltip"
          , en = "blz-tooltip:place"
          , tn = "blz-tooltip:sticky"
          , on = ".blz-tooltip"
          , nn = ".blz-tooltip-extension"
          , an = ".blz-tooltip-caret"
          , rn = "data-blz-tooltip-slot"
          , sn = "data-blz-tooltip-active"
          , ln = "data-blz-tooltip-original-place";
        let cn = 0;
        const dn = e => {
            const t = e.querySelector(on)
              , o = e.getAttribute(en);
            let n = o;
            e.hasAttribute(tn) && e.removeAttribute(tn);
            const i = t.getBoundingClientRect()
              , a = i.top < 0
              , r = i.left < 0
              , s = i.right > (window.innerWidth || document.documentElement.clientWidth)
              , l = i.bottom > (window.innerHeight || document.documentElement.clientHeight);
            "top" === o && a && !l ? n = "bottom" : "bottom" === o && l && !a && (n = "top"),
            n !== o && (e.setAttribute(en, n),
            e.setAttribute(ln, o)),
            r && !s ? e.setAttribute(tn, "left") : s && !r && e.setAttribute(tn, "right")
        }
          , un = e => {
            const t = e.getAttribute(en)
              , o = e.querySelector(nn)
              , n = e.querySelector(on).getBoundingClientRect()
              , i = e.getBoundingClientRect()
              , a = n.width < i.width ? n : i;
            o.style.width = `${a.width}px`,
            o.style.left = a.left - i.left + "px",
            "top" === t ? o.style.height = i.bottom - n.top + "px" : "bottom" === t && (o.style.height = n.bottom - i.top + "px")
        }
          , pn = e => {
            const t = e.target.querySelector(on)
              , o = e.target.querySelector(an);
            e.target.hasAttribute(sn) || (e.target.setAttribute(sn, ""),
            document.addEventListener("keydown", bn),
            t.hasAttribute("aria-hidden") && (t.removeAttribute("aria-hidden"),
            o.removeAttribute("aria-hidden")),
            dn(e.target),
            un(e.target),
            e.target.dispatchEvent(new CustomEvent({
                bubbles: !0,
                cancelable: !0,
                composed: !0,
                detail: {
                    isVisible: !0
                }
            })))
        }
          , hn = e => {
            const t = e.target.querySelector(`[${sn}]`) || e.target
              , o = t.querySelector(on)
              , n = e.target.querySelector(an);
            !t.hasAttribute(sn) || document.activeElement === t && "Escape" !== e.key || (t.removeAttribute(sn),
            document.removeEventListener("keydown", bn),
            o.setAttribute("aria-hidden", !0),
            n.setAttribute("aria-hidden", !0),
            t.hasAttribute(ln) && (t.setAttribute(en, t.getAttribute(ln)),
            t.removeAttribute(ln)),
            e.target.dispatchEvent(new CustomEvent({
                bubbles: !0,
                cancelable: !0,
                composed: !0,
                detail: {
                    isVisible: !1
                }
            })))
        }
          , bn = e => {
            "Escape" === e.key && hn(e)
        }
          , gn = e => {
            const t = e.querySelector(on);
            t && t.remove();
            const o = e.querySelector(nn);
            o && o.remove();
            const n = e.querySelector(an);
            n && n.remove();
            const i = document.createElement("div");
            i.classList.add("blz-tooltip"),
            i.setAttribute("aria-hidden", !0),
            i.setAttribute("role", "tooltip"),
            i.setAttribute("id", `blz-tooltip-${cn}`),
            i.innerHTML = Jo({
                markdown: `<div class="blz-tooltip-container">${e.getAttribute(Qo)}</div>`
            });
            const a = document.createElement("div");
            a.setAttribute("aria-hidden", !0),
            a.classList.add("blz-tooltip-extension");
            const r = document.createElement("div");
            if (r.setAttribute("aria-hidden", !0),
            r.classList.add("blz-tooltip-caret"),
            e.setAttribute("aria-describedby", `blz-tooltip-${cn}`),
            e.appendChild(a),
            e.appendChild(i),
            e.appendChild(r),
            e.hasAttribute(en) || e.setAttribute(en, "bottom"),
            e.shadowRoot && !e.shadowRoot.querySelector("slot:not([name])") && !e.hasAttribute(rn)) {
                const t = document.createElement("slot");
                t.setAttribute("name", Qo),
                i.setAttribute("slot", Qo),
                a.setAttribute("slot", Qo),
                r.setAttribute("slot", Qo),
                e.shadowRoot.appendChild(t),
                e.setAttribute(rn, "")
            }
            e._blzTooltipRo = new ResizeObserver(ge(350, (e => {
                e.forEach((e => {
                    e.target.hasAttribute(sn) && (dn(e.target),
                    un(e.target))
                }
                ))
            }
            ))),
            e._blzTooltipRo.observe(e),
            e.addEventListener("mouseenter", pn),
            e.addEventListener("focus", pn),
            e.addEventListener("mouseleave", hn),
            e.addEventListener("blur", hn),
            e.addEventListener("keydown", bn),
            cn++
        }
          , mn = Rt({
            attribute: Qo,
            mOptions: {
                attributeFilter: [Qo]
            },
            onConnect: e => {
                e.querySelectorAll(`[${Qo}]`).forEach(gn)
            }
            ,
            onChildListChange: e => {
                e.addedNodes.forEach((e => {
                    "function" == typeof e.querySelectorAll && e.querySelectorAll(`[${Qo}]`).forEach((e => {
                        gn(e)
                    }
                    ))
                }
                ))
            }
            ,
            onAttributeChange: e => {
                const t = e.target.querySelector(on)
                  , o = e.target.getAttribute(Qo);
                t ? o ? t.textContent = o : (e => {
                    const t = e.querySelector(on)
                      , o = e.querySelector(nn)
                      , n = e.querySelector(an);
                    t.remove(),
                    o.remove(),
                    n.remove(),
                    e.removeAttribute("aria-describedby"),
                    void 0 !== e.dataset.blzTooltipSlot && (e.shadowRoot.querySelector(`slot[name=${Qo}`).remove(),
                    e.removeAttribute(rn)),
                    e.removeEventListener("mouseenter", pn),
                    e.removeEventListener("focus", pn),
                    e.removeEventListener("mouseleave", hn),
                    e.removeEventListener("blur", hn),
                    e.removeEventListener("keydown", bn)
                }
                )(e.target) : gn(e.target)
            }
        });
        var vn = {
            TOOLTIP_ATTRIBUTE: Qo,
            TOOLTIP_PLACE_ATTRIBUTE: en,
            TOOLTIP_STICKY_ATTRIBUTE: tn,
            TOOLTIP_CLASS_SELECTOR: on,
            TOOLTIP_EXT_SELECTOR: nn,
            TOOLTIP_DATA_SLOT: rn,
            TOOLTIP_DATA_ACTIVE: sn,
            TOOLTIP_DATA_ORIG_PLACE: ln,
            store: mn
        };
        function fn(e, t, o="") {
            const n = ("" !== o ? o : e.analyticsEvent).replace(/(cta_other)/g, ( () => "click_cta")).replace(/(cta)_/g, ( () => "click_"))
              , i = n.split("_")
              , a = i.length > 1 && "click_cta" !== n ? i[1] : "other";
            return {
                event: n,
                cta_name: e.analyticsLabel,
                cta_category: "click",
                cta_action: a,
                cta_placement: e.analyticsPlacement,
                ...t
            }
        }
        function yn(e, t, o) {
            if ("video_id"in t && void 0 !== t.video_id && "" !== t.video_id && "" !== o)
                return {
                    event: o,
                    video_placement: e.analyticsPlacement,
                    video_title: e.analyticsLabel,
                    video_id: t.video_id,
                    ...t
                };
            throw new Error("Video ID and/or valid eventName are required for video events")
        }
        function wn(e, t, o) {
            return {
                event: o,
                modal_name: e.analyticsLabel,
                modal_placement: e.analyticsPlacement,
                ...t
            }
        }
        function _n(e, t, o) {
            return {
                event: o,
                ...t,
                slide_name: Se(e.analyticsLabel, t.slide_name),
                carousel_placement: e.analyticsPlacement
            }
        }
        const xn = () => window?.blz?.debug?.logging?.enabled || !1;
        var zn = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class kn extends et {
            get analyticsConfigured() {
                return void 0 !== (e = {
                    analyticsEvent: this.analyticsEvent,
                    analyticsPlacement: this.analyticsPlacement,
                    analyticsLabel: this.analyticsLabel
                }).analyticsEvent && null !== e.analyticsEvent && "" != e.analyticsEvent && void 0 !== e.analyticsLabel && null !== e.analyticsLabel && "" != e.analyticsLabel && void 0 !== e.analyticsPlacement && null !== e.analyticsPlacement && "" != e.analyticsPlacement;
                var e
            }
            get analyticsEnabled() {
                const e = "massEnabledAnalytics" === window?.blz?.ootbAnalytics && "disabled" !== this.analyticsStatus
                  , t = "enabled" === this.analyticsStatus;
                return e || t
            }
            pushEventToDataLayer(e) {
                this.analyticsEnabled && this.analyticsConfigured && queueMicrotask(( () => {
                    window.dataLayer = window.dataLayer || [],
                    window.dataLayer.push(e)
                }
                ))
            }
            pushEventFromGenerator(e, t, o="") {
                if (this.analyticsEnabled && this.analyticsConfigured) {
                    const n = {
                        analyticsEvent: this.analyticsEvent,
                        analyticsPlacement: this.analyticsPlacement,
                        analyticsLabel: this.analyticsLabel
                    };
                    try {
                        const i = e(n, t, o);
                        this.pushEventToDataLayer(i)
                    } catch (e) {
                        xn() && console.warn(e)
                    }
                }
            }
        }
        zn([de({
            type: String,
            attribute: "analytics-status",
            reflect: !0
        })], kn.prototype, "analyticsStatus", void 0),
        zn([de({
            type: String,
            attribute: "analytics-event"
        })], kn.prototype, "analyticsEvent", void 0),
        zn([de({
            type: String,
            attribute: "analytics-label"
        })], kn.prototype, "analyticsLabel", void 0),
        zn([de({
            type: String,
            attribute: "analytics-placement"
        })], kn.prototype, "analyticsPlacement", void 0);
        var Sn = q`:host{--logo-icon-scale:0.75;--jumbo:var(--global-size-600);--large:var(--global-size-400);--medium:var(--global-size-300);--small:var(--global-size-250);display:inline-block}#icon{display:block}img,svg{height:100%;width:100%}@media (min-width:960px){:host{--logo-icon-scale:1}}@media (min-width:720px){:host{--jumbo:var(--global-size-800);--large:var(--global-size-600);--medium:calc(var(--global-size-900) / 2);--small:var(--global-size-300)}}.analytics-wrapper{display:contents}`
          , An = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class En extends kn {
            constructor() {
                super(...arguments),
                this.userCountry = "",
                this.width = 0,
                this.height = 0,
                this.svgContent = "",
                this.imageUrl = "",
                this.loading = !1,
                this.iconContent = {}
            }
            static get observedAttributes() {
                return [...super.observedAttributes ?? [], Qo]
            }
            static get styles() {
                return [...kn.styles, Sn]
            }
            get isChina() {
                return this.userCountry && "CHN" === this.userCountry || this.isChinaHost(window.location.host)
            }
            isChinaHost(e) {
                return e.endsWith(".cn")
            }
            connectedCallback() {
                super.connectedCallback(),
                this._analyticsListener()
            }
            willUpdate(e) {
                super.willUpdate(e),
                (e.has("icon") || e.has("src") || e.has("userCountry")) && this.loadIcon(),
                !e.has("svgContent") && !e.has("imageUrl") || this.size || this.setSize()
            }
            attributeChangedCallback(e, t, o) {
                super.attributeChangedCallback(e, t, o),
                e === Qo && this.setTooltip()
            }
            updated(e) {
                super.updated(e);
                const t = this.shadowRoot?.querySelector("svg");
                t && !t.hasAttribute("part") && t.setAttribute("part", "icon"),
                e.forEach(( (e, t) => {
                    "tooltip" !== t && "icon" !== t && "iconTitle" !== t && "tooltipTitle" !== t && "svgContent" !== t && "imageUrl" !== t || this.setTooltip()
                }
                ))
            }
            render() {
                let e;
                const t = {
                    jumbo: "--jumbo",
                    large: "--large",
                    medium: "--medium",
                    small: "--small"
                };
                this.variant && (e = `var(${t[this.variant]})`),
                !e && this.size && (e = `var(--global-size-${this.size})`);
                const o = z`<style>:host{width:${e || this.width + "px"};height:${e || this.height + "px"}}:host([icon*=logo]),:host([icon=app-store]){width:calc(var(--logo-icon-scale) * ${this.width + "px"});height:calc(var(--logo-icon-scale) * ${this.height + "px"})}</style>`;
                if (this.svgContent)
                    return z`${o}${It(this.svgContent)}`;
                if (this.imageUrl) {
                    let e = this.imageUrl;
                    if (!this.src) {
                        const t = this.size && we(`--global-size-${this.size}`);
                        e = `${e}?width=${2 * Number(t || this.width)}`
                    }
                    return z`${o}<img src="${e}" alt="${this.iconTitle || this.icon || ""}">`
                }
                return this.loading ? z`${o}<slot name="loading"></slot>` : z`${this.iconTitle || this.icon}`
            }
            getIconUrl() {
                const e = this.isChina ? En.ICONS_HOST_CN : En.ICONS_HOST;
                let t = this.src ? this.src : "";
                if (this.icon && At.includes(this.icon)) {
                    const o = St.find((e => e.startsWith(`${this.icon}.`)));
                    o && (t = `${e}${o}`)
                }
                return t
            }
            isValid(e) {
                return 1 !== e.nodeType || "script" !== e.nodeName.toLowerCase() && !(Array.from(e.attributes).some((e => "string" == typeof e.value && e.value.toLowerCase().startsWith("on"))) || Array.from(e.childNodes).some((e => !this.isValid(e))))
            }
            async fetchSvgContent(e) {
                let t = "";
                try {
                    const o = await fetch(e);
                    t = await (o.text?.())
                } catch (t) {
                    console.error(`Failed to fetch & parse SVG from URL: ${e}`, t)
                }
                return this.validateContent(t)
            }
            validateContent(e) {
                const t = document.createElement("div");
                t.innerHTML = e,
                Array.from(t.childNodes).forEach((e => {
                    "svg" !== e.nodeName.toLowerCase() && t.removeChild(e)
                }
                ));
                const o = t.firstElementChild;
                return o && "svg" === o.nodeName.toLowerCase() && this.isValid(o) ? t.innerHTML : ""
            }
            async loadIcon() {
                const e = this.getIconUrl();
                if (!e)
                    return;
                e.includes(".svg") ? this.icon && At.includes(this.icon) && this.iconContent[e] ? this.svgContent = this.iconContent[e] : (this.icon && At.includes(this.icon) || this.src) && (this.loading = !0,
                this.iconContent[e] = this.svgContent = await this.fetchSvgContent(e),
                this.loading = !1) : (this.icon && At.includes(this.icon) && (this.loading = !0),
                this.imageUrl = e)
            }
            setTooltip() {
                const e = this.shadowRoot?.querySelector("svg")
                  , t = this.getAttribute(Qo);
                if ("native" === this.tooltip) {
                    if (e) {
                        const e = this.shadowRoot?.querySelector("title");
                        e && (this.tooltipTitle = e)
                    }
                    t && this.tooltipTitle && (this.tooltipTitle.textContent = t,
                    this.removeAttribute(Qo))
                } else if ("custom" === this.tooltip) {
                    const o = this.shadowRoot?.querySelector("title")
                      , n = this.shadowRoot?.querySelector("img");
                    o && o.textContent && (t || this.setAttribute(Qo, this.iconTitle ? this.iconTitle : o.textContent),
                    e?.removeAttribute("aria-labelledby"),
                    o.remove()),
                    n && this.iconTitle && !t && this.setAttribute(Qo, this.iconTitle)
                }
            }
            setSize() {
                const e = document.createElement("div");
                e.innerHTML = this.svgContent,
                this.svgContent ? (this.width = Number(e?.firstElementChild?.getAttribute("viewBox")?.split(" ")[2]),
                this.height = Number(e?.firstElementChild?.getAttribute("viewBox")?.split(" ")[3])) : (this.width = 48,
                this.height = 48)
            }
            _analyticsListener() {
                const e = Ae(this).find((e => "A" === e.nodeName));
                e?.addEventListener("click", ( () => {
                    e.hasAttribute("href") && "javascript:" !== e.getAttribute("href") && super.pushEventFromGenerator(fn, {
                        destination_url: e.getAttribute("href")
                    })
                }
                ))
            }
        }
        En.ICONS_HOST = "https://baseui.akamaized.net/icons/",
        En.ICONS_HOST_CN = "https://baseui.blzstatic.cn/icons/";
        var Cn, On, Bn, Pn, Tn, Ln, In, Rn = En;
        An([de({
            type: String
        })], En.prototype, "icon", void 0),
        An([de({
            type: String
        })], En.prototype, "src", void 0),
        An([de({
            type: String,
            attribute: "title"
        })], En.prototype, "iconTitle", void 0),
        An([de({
            type: Number
        })], En.prototype, "size", void 0),
        An([de({
            type: String
        })], En.prototype, "variant", void 0),
        An([de({
            type: String
        })], En.prototype, "tooltip", void 0),
        An([de({
            type: String,
            attribute: "user-country"
        })], En.prototype, "userCountry", void 0),
        An([nt()], En.prototype, "tooltipTitle", void 0),
        An([nt()], En.prototype, "width", void 0),
        An([nt()], En.prototype, "height", void 0),
        An([nt()], En.prototype, "svgContent", void 0),
        An([nt()], En.prototype, "imageUrl", void 0),
        An([nt()], En.prototype, "loading", void 0),
        An([nt()], En.prototype, "iconContent", void 0),
        function(e) {
            e.Other = "click_cta",
            e.Click = "click",
            e.Download = "click_download",
            e.Register = "click_register",
            e.Buy = "click_buy",
            e.Login = "click_login",
            e.HeaderNav = "header_nav"
        }(Cn || (Cn = {})),
        function(e) {
            e.Seek = "video_seek",
            e.Play = "video_play",
            e.Pause = "video_pause",
            e.Complete = "video_complete_native",
            e.Audio = "video_audio_select"
        }(On || (On = {})),
        function(e) {
            e.Open = "modal_open",
            e.Close = "modal_close"
        }(Bn || (Bn = {})),
        function(e) {
            e.View = "view_carousel",
            e.Navigation = "carousel_navigation",
            e.Click = "click_carousel",
            e.Engagement = "content_engagement"
        }(Pn || (Pn = {})),
        function(e) {
            e.Gate = "age_gate"
        }(Tn || (Tn = {})),
        function(e) {
            e.Success = "success",
            e.Lockout = "lockout",
            e.Auto_Success = "auto-success",
            e.Auto_Lockout = "auto-lockout"
        }(Ln || (Ln = {})),
        function(e) {
            e.DESTINATION_URL = "destination_url",
            e.COMPONENT = "component"
        }(In || (In = {}));
        const $n = Symbol.for("")
          , jn = e => {
            if (e?.r === $n)
                return e?._$litStatic$
        }
          , Dn = (e, ...t) => ({
            _$litStatic$: t.reduce(( (t, o, n) => t + (e => {
                if (void 0 !== e._$litStatic$)
                    return e._$litStatic$;
                throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)
            }
            )(o) + e[n + 1]), e[0]),
            r: $n
        })
          , Nn = new Map
          , Mn = (e => (t, ...o) => {
            const n = o.length;
            let i, a;
            const r = []
              , s = [];
            let l, c = 0, d = !1;
            for (; c < n; ) {
                for (l = t[c]; c < n && void 0 !== (a = o[c],
                i = jn(a)); )
                    l += i + t[++c],
                    d = !0;
                c !== n && s.push(a),
                r.push(l),
                c++
            }
            if (c === n && r.push(t[n]),
            d) {
                const e = r.join("$$lit$$");
                void 0 === (t = Nn.get(e)) && (r.raw = r,
                Nn.set(e, t = r)),
                o = s
            }
            return e(t, ...o)
        }
        )(z);
        var Fn, Un = q`:host([disabled]) :disabled{cursor:not-allowed}`, Hn = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class Vn extends kn {
            constructor() {
                super(...arguments),
                this.type = "button",
                this.cosmetic = !1,
                this.disabled = !1,
                this.rel = "noreferrer noopener"
            }
            static get styles() {
                return [...kn.styles, Un]
            }
            get isLink() {
                return !!this.href
            }
            get isCosmetic() {
                return Boolean(this.cosmetic || this.href && this.disabled)
            }
            render() {
                const e = this.isCosmetic ? Dn`div` : this.isLink ? Dn`a` : Dn`button`;
                return Mn`
      ${this.renderOuterContent()}

      <${e}
        id="host"
        part="host-anchor button"
        ?disabled=${it(this.isLink || this.isCosmetic ? void 0 : this.disabled)}
        type=${it(this.isLink || this.isCosmetic ? void 0 : this.type)}
        name=${it(this.isLink || this.isCosmetic ? void 0 : this.name)}
        value=${it(this.isLink || this.isCosmetic ? void 0 : this.value)}
        href=${it(this.isLink ? this.href : void 0)}
        target=${it(this.isLink ? this.target : void 0)}
        download=${it(this.isLink ? this.download : void 0)}
        rel=${it(this.isLink ? this.rel : void 0)}
        role=${it(this.isLink || this.isCosmetic ? void 0 : "button")}
        aria-label=${it(this.label)}
        aria-disabled=${this.isCosmetic ? void 0 : this.disabled ? "true" : "false"}
        @click=${this.isCosmetic ? void 0 : this._clickHandler}
        @auxclick=${this.isCosmetic ? void 0 : this._middleClickHandler}
      >
        ${this.renderInnerContent()}
      </${e}>
    `
            }
            focus(e) {
                this.shadowRoot?.querySelector("a")?.focus(e),
                this.shadowRoot?.querySelector("button")?.focus(e)
            }
            _clickHandler() {
                if ("submit" === this.type) {
                    const e = this.closest("form");
                    e && e.requestSubmit()
                }
                this.pushAnalyticsEvent()
            }
            _middleClickHandler(e) {
                this.href || e.preventDefault(),
                this.pushAnalyticsEvent()
            }
        }
        Hn([de({
            type: String
        })], Vn.prototype, "type", void 0),
        Hn([de({
            type: String
        })], Vn.prototype, "href", void 0),
        Hn([de({
            type: String
        })], Vn.prototype, "target", void 0),
        Hn([de({
            type: Boolean
        })], Vn.prototype, "cosmetic", void 0),
        Hn([de({
            type: Boolean
        })], Vn.prototype, "disabled", void 0),
        Hn([de({
            type: String
        })], Vn.prototype, "rel", void 0),
        Hn([de({
            type: String
        })], Vn.prototype, "download", void 0),
        Hn([de({
            type: String
        })], Vn.prototype, "name", void 0),
        Hn([de({
            type: String
        })], Vn.prototype, "value", void 0),
        Hn([de({
            type: String
        })], Vn.prototype, "label", void 0),
        function(e) {
            e.BlzButtonVariantNames = "BlzButtonVariantNames",
            e.UrlProperty = "UrlProperty",
            e.Version2Components = "Version2Components",
            e.Version3Components = "Version3Components",
            e.BlzAnnouncementBannerCountdownTimerProps = "BlzAnnouncementBannerCountdownTimerProps",
            e.BlzAnnouncementBannerHref = "BlzAnnouncementBannerHref",
            e.BlzAnnouncementBannerBacgroundSlot = "BlzAnnouncementBannerBacgroundSlot",
            e.BlzBaseCardHref = "BlzBaseCardHref",
            e.BlzIconButtonDefaultVariant = "BlzIconButtonDefaultVariant",
            e.BlzIconButtonGhostVariant = "BlzIconButtonGhostVariant"
        }(Fn || (Fn = {}));
        const qn = Object.freeze({
            [Fn.BlzButtonVariantNames]: {
                deprecatedAsOfVersion: 2,
                scheduledToBeRemovedInMajorVersion: 4,
                components: ["BlzButton"],
                description: 'using "default" and "subtle" via the type attribute'
            },
            [Fn.UrlProperty]: {
                deprecatedAsOfVersion: 2,
                scheduledToBeRemovedInMajorVersion: 4,
                components: ["BlzHeroCard", "BlzProfileCard", "BlzGameCard"],
                description: "url attribute"
            },
            [Fn.Version2Components]: {
                deprecatedAsOfVersion: 2,
                scheduledToBeRemovedInMajorVersion: 4,
                components: ["BlzVirtualCurrency", "BlzCard", "BlzHeroGallery"],
                description: "Components"
            },
            [Fn.Version3Components]: {
                deprecatedAsOfVersion: 3,
                scheduledToBeRemovedInMajorVersion: 4,
                components: ["BlzHeroGallery", "BlzVideo", "BlzToggle"],
                description: "Components"
            },
            [Fn.BlzAnnouncementBannerCountdownTimerProps]: {
                deprecatedAsOfVersion: 3,
                scheduledToBeRemovedInMajorVersion: 4,
                components: ["BlzAnnouncementBanner"],
                description: 'Countdown timer specific properties, such as "date", "disable-labels", and "persistEmptyTimers" will no longer be supported. Please slot in a countdown timer component in the countdown-timer slot instead.'
            },
            [Fn.BlzAnnouncementBannerHref]: {
                deprecatedAsOfVersion: 3,
                scheduledToBeRemovedInMajorVersion: 4,
                components: ["BlzAnnouncementBanner"],
                description: 'using "href" for linking will no longer be supported. Please wrap the component in an anchor tag instead.'
            },
            [Fn.BlzAnnouncementBannerBacgroundSlot]: {
                deprecatedAsOfVersion: 3,
                scheduledToBeRemovedInMajorVersion: 4,
                components: ["BlzAnnouncementBanner"],
                description: "Removed the announcement-banner-background slot. Please use the background-cover or background-fixed slot instead."
            },
            [Fn.BlzBaseCardHref]: {
                deprecatedAsOfVersion: 3,
                scheduledToBeRemovedInMajorVersion: 4,
                components: ["BlzBaseCard"],
                description: "href attribute"
            },
            [Fn.BlzIconButtonDefaultVariant]: {
                deprecatedAsOfVersion: 3,
                scheduledToBeRemovedInMajorVersion: 4,
                components: ["BlzIconButton"],
                description: "Default varitant of Icon Button. Please use other variants: primary, secondary, tertiary, and ghost."
            },
            [Fn.BlzIconButtonGhostVariant]: {
                deprecatedAsOfVersion: 3,
                scheduledToBeRemovedInMajorVersion: 4,
                components: ["BlzIconButton"],
                description: "Ghost varitant of Icon Button. Please use other variants: primary, secondary, tertiary, and ghost."
            }
        })
          , Gn = e => {
            const t = qn[e]
              , o = `${t.components?.join(", ")}: ${t.description} has been deprecated as of v${t.deprecatedAsOfVersion}. `
              , n = Ie.split(".")[0];
            Number(n) + 1 === t.scheduledToBeRemovedInMajorVersion || Number(n) >= t.scheduledToBeRemovedInMajorVersion ? xn() && console.error(`📅 ‼️ ${o} This is scheduled to removed in the next major version (v${t.scheduledToBeRemovedInMajorVersion}). Please refer to the deprecations section of the project readme for more information.`) : xn() && console.warn(`📅 ‼️ ${o} This is scheduled to removed in an upcoming update (v${t.scheduledToBeRemovedInMajorVersion}). Please refer to the deprecations section of the project readme for more information.`)
        }
        ;
        var Wn = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class Yn extends Vn {
            constructor() {
                super(),
                this.size = "medium",
                this.variant = "secondary",
                this.height = "default",
                this.analyticsEvent = Cn.Other,
                Gn(Fn.BlzIconButtonDefaultVariant),
                Gn(Fn.BlzIconButtonGhostVariant)
            }
            static get styles() {
                return [...Vn.styles, zt]
            }
            get componentDependencies() {
                return {
                    "blz-icon-button-icon": Rn
                }
            }
            renderInnerContent() {
                return z`<slot part="content"><blz-icon-button-icon icon="${it(this.icon)}" src="${it(this.src)}" label="${it(this.label)}" part="icon"></blz-icon-button-icon></slot>`
            }
            renderOuterContent() {}
            pushAnalyticsEvent() {
                const e = Ae(this).find(( ({nodeName: e}) => "A" === e))
                  , t = e ? {
                    [In.DESTINATION_URL]: e.href
                } : {};
                super.pushEventFromGenerator(fn, t)
            }
        }
        Wn([de({
            type: String
        })], Yn.prototype, "icon", void 0),
        Wn([de({
            type: String
        })], Yn.prototype, "src", void 0),
        Wn([de({
            type: String,
            reflect: !0
        })], Yn.prototype, "size", void 0),
        Wn([de({
            type: String
        })], Yn.prototype, "variant", void 0),
        Wn([de({
            type: String
        })], Yn.prototype, "height", void 0);
        var Kn = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class Xn extends (dt(et)) {
            get componentDependencies() {
                return {
                    "blz-section-icon-button": Yn
                }
            }
            constructor() {
                super(),
                this._playPauseStatus = "pause",
                this._videoBgs = [],
                this._videoControl = null,
                this.videoControlPosition = "left"
            }
            connectedCallback() {
                super.connectedCallback && super.connectedCallback(),
                this.initializeLoc(xt)
            }
            static get styles() {
                return [...et.styles, at]
            }
            get _defaultSlottedAttributes() {
                return {
                    background: {
                        "blz-video": {
                            "no-ratio": {
                                value: ""
                            },
                            autoplay: {
                                value: ""
                            },
                            muted: {
                                value: ""
                            },
                            loop: {
                                value: ""
                            },
                            playsinline: {
                                value: ""
                            }
                        }
                    }
                }
            }
            setBackground(e) {
                if (void 0 !== e) {
                    const t = this._background?.filter((e => e.getAttribute("data-group")))
                      , o = this._background?.filter((e => !e.getAttribute("data-group")));
                    o?.forEach(( (t, o) => {
                        t.classList.toggle("background-active", o === e)
                    }
                    )),
                    t?.forEach((t => {
                        const o = parseInt(t.getAttribute("data-group"));
                        t.classList.toggle("background-active", o === e)
                    }
                    ))
                }
            }
            playVideo() {
                this._videoBgs.forEach((e => e.play())),
                this._playPauseStatus = "pause",
                this._videoControl = this._playPauseStatus
            }
            pauseVideo() {
                this._videoBgs.forEach((e => e.pause())),
                this._playPauseStatus = "play",
                this._videoControl = this._playPauseStatus
            }
            showVideoControl() {
                const e = this._videoBgs.filter((e => ke(e))).length ? this._playPauseStatus : null;
                e !== this._videoControl && (this._videoControl = e,
                this.requestUpdate())
            }
            _slotChange(e) {
                this._storeElements(e),
                this._videoBgs = this._background.filter((e => e.matches("blz-video"))),
                0 !== this._videoBgs.length && (this.showVideoControl(),
                window.addEventListener("resize", ( () => this.showVideoControl())))
            }
            render() {
                return z`<slot name="background" @slotchange="${this._slotChange}"></slot><div part="background-overlay" class="background-overlay"></div>${this._videoControl ? z`<div class="bg-video-control ${this.videoControlPosition}" part="bg-video-control"><blz-section-icon-button class="${this._videoControl}" size="small" variant="contrast" label="${this.getString(this._videoControl)}" @click="${"play" === this._videoControl ? this.playVideo : this.pauseVideo}"><blz-icon-button-icon icon="${this._videoControl}"></blz-icon-button-icon></blz-section-icon-button></div>` : null}<slot name="content-before"></slot><section id="content" part="content" role="${it(this.role)}"><slot name="header" class="blz-title-text-sm"></slot><slot></slot></section><slot name="content-after"></slot>`
            }
            _storeElements(e) {
                const t = e.currentTarget.getAttribute("name");
                this[`_${t}`] = [];
                let o = "";
                (e.currentTarget.assignedElements?.({
                    flatten: !0
                }) || e.currentTarget.assignedNodes({
                    flatten: !0
                })).forEach((e => {
                    const n = e.getAttribute("data-group");
                    (!o || n && o === n) && (o = n,
                    e.classList.toggle("background-active", !0)),
                    this[`_${t}`].push(e)
                }
                ))
            }
        }
        Kn([de({
            type: String
        })], Xn.prototype, "size", void 0),
        Kn([de({
            attribute: "section-padding",
            type: String
        })], Xn.prototype, "sectionPadding", void 0),
        Kn([de({
            type: String
        })], Xn.prototype, "role", void 0),
        Kn([de({
            attribute: "video-control-position",
            type: String
        })], Xn.prototype, "videoControlPosition", void 0),
        Kn([nt()], Xn.prototype, "_playPauseStatus", void 0);
        var Zn = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let Jn = class extends Xn {
        }
        ;
        Jn = Zn([t(o.BlzSection)], Jn);
        var Qn = Jn;
        const ei = ["section", "content", "bg-video-control", "background-overlay"].join(", ");
        var ti = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class oi extends et {
            constructor() {
                super(...arguments),
                this.variant = "standard",
                this.layout = "left",
                this.mediaAlignment = "top",
                this.activeIndex = 0
            }
            static get styles() {
                return [...et.styles, ot, tt]
            }
            get componentDependencies() {
                return {
                    [o.BlzSection]: Qn
                }
            }
            get _defaultSlottedAttributes() {
                return {
                    header: {
                        "blz-header": {
                            layout: {
                                value: "center"
                            }
                        }
                    },
                    accordion: {
                        "blz-accordion": {
                            simple: {
                                value: e => "simple" === e.variant ? "" : void 0,
                                watch: ["variant"]
                            },
                            center: {
                                value: e => "center" === e.layout ? "" : void 0,
                                watch: ["layout"]
                            },
                            "height-mode": {
                                value: "auto"
                            }
                        }
                    },
                    "mobile-carousel": {
                        "blz-carousel": {
                            "height-mode": {
                                value: "auto"
                            }
                        }
                    }
                }
            }
            render() {
                return z`<blz-section part="section" exportparts="${ei}" size="wide"><slot name="background" slot="background"></slot><slot name="header" slot="header"></slot><div class="accordion-container" part="accordion-container" bp="md+"><slot name="accordion" @slotchange="${this._addEventListener}"></slot><div class="media-group"><slot name="media" @slotchange="${this._ensureActiveMedia}"></slot></div></div><slot name="mobile-carousel" bp="+sm" @slotchange="${this._addEventListener}"></slot></blz-section>`
            }
            updated(e) {
                super.updated(e),
                e.forEach((async (e, t) => {
                    if ("activeIndex" === t) {
                        const t = +this.activeIndex;
                        this._slottedBackgrounds?.length && this.shadowRoot?.querySelector("blz-section")?.setBackground(t),
                        this._slottedMedia?.forEach(( (e, o) => {
                            const n = e.dataset.group ? parseInt(e.dataset.group) : o;
                            t === n ? e.classList.add("media-active") : e.classList.remove("media-active")
                        }
                        ));
                        const o = this._slottedAccordion?.length ? this._slottedAccordion[0] : null
                          , n = this._slottedCarousel?.length ? this._slottedCarousel[0] : null;
                        n && (n.activeIndex = t),
                        o && (await (o?.updateComplete),
                        !0 !== o.isActiveIndex(t) && (o.activeIndex = t),
                        this.dispatchEvent(new CustomEvent("blz-accordion-carousel-section:index-change",{
                            composed: !0,
                            detail: {
                                newIndex: t,
                                oldIndex: e
                            }
                        })))
                    }
                }
                ))
            }
            _ensureActiveMedia() {
                const e = this._slottedMedia?.find((e => e.classList.contains("media-active")));
                e ? e.dataset && e.dataset.group && this._slottedMedia?.filter((t => t.dataset.group === e.dataset.group)).forEach((e => e.classList.add("media-active"))) : this._slottedMedia?.forEach(( (e, t) => {
                    0 === (e.dataset.group ? parseInt(e.dataset.group) : t) && e.classList.add("media-active")
                }
                ))
            }
            _addEventListener(e) {
                const t = e.currentTarget?.assignedElements()[0];
                if (t && !t.hasAttribute("data-observed:bacs"))
                    switch (t.tagName) {
                    case "BLZ-ACCORDION":
                        t.addEventListener("change", (e => {
                            void 0 !== e.detail?.selected && (this.activeIndex = parseInt(e.detail.selected))
                        }
                        )),
                        t.setAttribute("data-observed:bacs", "true");
                        break;
                    case "BLZ-CAROUSEL":
                        t.addEventListener("blz-carousel:index-change", (e => this.activeIndex = e.detail.newIndex)),
                        t.setAttribute("data-observed:bacs", "true")
                    }
            }
        }
        ti([de({
            type: String
        })], oi.prototype, "variant", void 0),
        ti([de({
            type: String,
            reflect: !0
        })], oi.prototype, "layout", void 0),
        ti([de({
            attribute: "media-alignment",
            type: String,
            reflect: !0
        })], oi.prototype, "mediaAlignment", void 0),
        ti([de({
            attribute: "active-index",
            type: Number,
            reflect: !0
        })], oi.prototype, "activeIndex", void 0),
        ti([pe({
            slot: "accordion",
            flatten: !1
        })], oi.prototype, "_slottedAccordion", void 0),
        ti([pe({
            slot: "mobile-carousel",
            flatten: !1
        })], oi.prototype, "_slottedCarousel", void 0),
        ti([pe({
            slot: "background",
            flatten: !0
        })], oi.prototype, "_slottedBackgrounds", void 0),
        ti([pe({
            slot: "media",
            flatten: !0
        })], oi.prototype, "_slottedMedia", void 0);
        var ni = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let ii = class extends oi {
        }
        ;
        ii = ni([t(o.BlzAccordionCarouselSection)], ii);
        function ai(e, t) {
            return (o, n, i) => {
                const a = t => t.renderRoot?.querySelector(e) ?? null;
                if (t) {
                    const {get: e, set: t} = "object" == typeof n ? o : i ?? ( () => {
                        const e = Symbol();
                        return {
                            get() {
                                return this[e]
                            },
                            set(t) {
                                this[e] = t
                            }
                        }
                    }
                    )();
                    return ue(o, n, {
                        get() {
                            let o = e.call(this);
                            return void 0 === o && (o = a(this),
                            (null !== o || this.hasUpdated) && t.call(this, o)),
                            o
                        }
                    })
                }
                return ue(o, n, {
                    get() {
                        return a(this)
                    }
                })
            }
        }
        var ri = q`:host([layout=left]) [part=accordion-container],:host([layout=right]) [part=accordion-container],[part=accordion-container].has-media{display:grid;grid-auto-flow:column dense;grid-column-gap:var(--semantic-grid-gap-xl-mobile);grid-template-columns:[accordion-start] 1fr [accordion-end]}:host([layout=left]) blz-section,:host([layout=right]) blz-section{min-height:336px}[part=section]{--header-margin:var(--semantic-header-margin-space-md-mobile)}slot[name=accordion]::slotted(*){grid-column:accordion-start/accordion-end}slot[name=media]::slotted(*){display:flex;grid-column:media-start/media-end;max-width:100%}slot[name=media]::slotted(:not(.media-active)){height:0;opacity:0;visibility:hidden}slot[name=media]::slotted(.media-active){opacity:1}.media-group{display:block}:host([media-alignment=top]) .media-group,:host([media-alignment=top]) [part=accordion-container]{align-content:flex-start;align-self:flex-start}:host([media-alignment=center]) .media-group,:host([media-alignment=center]) [part=accordion-container]{align-content:center;align-self:center}:host([media-alignment=bottom]) .media-group,:host([media-alignment=bottom]) [part=accordion-container]{align-content:flex-end;align-self:flex-end}@media (min-width:960px){:host([layout=left]) [part=accordion-container]{grid-template-columns:[accordion-start] 2fr [accordion-end media-start] 3fr [media-end]}:host([layout=right]) [part=accordion-container]{grid-template-columns:[media-start] 3fr [media-end accordion-start] 2fr [accordion-end]}}@media (min-width:720px){:host([layout=left]) blz-section,:host([layout=right]) blz-section{min-height:648px}[part=section]{--header-margin:var(--semantic-header-margin-space-md-desktop)}:host([layout=left]) [part=accordion-container],:host([layout=right]) [part=accordion-container],[part=accordion-container].has-media{grid-column-gap:var(--semantic-grid-gap-xl-desktop)}}`
          , si = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class li extends et {
            constructor() {
                super(),
                this.multiple = !1,
                this.variant = "standard",
                this.layout = "left",
                this.mediaAlignment = "top",
                this._media = [],
                this._changeIndexContent = this._changeIndexContent.bind(this)
            }
            static get styles() {
                return [...et.styles, ri]
            }
            get componentDependencies() {
                return {
                    [o.BlzSection]: Qn
                }
            }
            get _defaultSlottedAttributes() {
                return {
                    header: {
                        "blz-header": {
                            layout: {
                                value: "center"
                            }
                        }
                    },
                    accordion: {
                        "blz-accordion": {
                            simple: {
                                value: e => e.simple || "simple" === e.variant ? "" : void 0,
                                watch: ["simple", "variant"]
                            },
                            center: {
                                value: e => e.center || "center" === e.layout ? "" : void 0,
                                watch: ["center", "layout"]
                            },
                            multiple: {
                                value: e => e.multiple ? "" : void 0
                            },
                            "height-mode": {
                                value: "auto"
                            }
                        }
                    }
                }
            }
            render() {
                return z`<blz-section part="section" exportparts="${ei}" size="wide"><slot name="background" slot="background"></slot><slot name="header" slot="header"></slot><div part="accordion-container"><slot name="accordion" @slotchange="${this._addEventListener}"></slot><div class="media-group"><slot name="media" @slotchange="${this._storeElements}"></slot></div></div></blz-section>`
            }
            _storeElements(e) {
                const t = e.currentTarget?.getAttribute("name");
                this[`_${t}`] = [],
                e.currentTarget?.assignedElements({
                    flatten: !0
                }).forEach(( (e, o) => {
                    const n = e.dataset;
                    0 === (n.group ? parseInt(n.group) : o) ? e.classList.add(`${t}-active`) : e.classList.remove(`${t}-active`),
                    this[`_${t}`].push(e)
                }
                )),
                "media" === t && this._accordionContainer?.classList.toggle("has-media", !!this._media.length)
            }
            _addEventListener(e) {
                const t = e.currentTarget.assignedElements()[0];
                this.multiple || !t || t.hasAttribute("data-observed") || (t.addEventListener("change", this._changeIndexContent),
                t.setAttribute("data-observed", "true"))
            }
            _changeIndexContent(e) {
                let t;
                void 0 !== e.detail?.selected && (t = parseInt(e.detail.selected)),
                void 0 !== t && (this.changeOnClick?.includes("background") && this.shadowRoot?.querySelector("blz-section")?.setBackground(t),
                this.changeOnClick?.includes("media") && this._media.forEach(( (e, o) => {
                    const n = e.dataset.group ? parseInt(e.dataset.group) : o;
                    t === n ? e.classList.add("media-active") : e.classList.remove("media-active")
                }
                )))
            }
        }
        si([de({
            type: Boolean
        })], li.prototype, "multiple", void 0),
        si([de({
            type: String
        })], li.prototype, "variant", void 0),
        si([de({
            type: String,
            reflect: !0
        })], li.prototype, "layout", void 0),
        si([de({
            attribute: "change-on-click",
            type: String
        })], li.prototype, "changeOnClick", void 0),
        si([de({
            attribute: "media-alignment",
            type: String,
            reflect: !0
        })], li.prototype, "mediaAlignment", void 0),
        si([ai('[part="accordion-container"]')], li.prototype, "_accordionContainer", void 0);
        var ci = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let di = class extends li {
        }
        ;
        di = ci([t(o.BlzAccordionSection)], di);
        const ui = Ot(class extends Bt {
            constructor(e) {
                if (super(e),
                e.type !== Et || "class" !== e.name || e.strings?.length > 2)
                    throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
            }
            render(e) {
                return " " + Object.keys(e).filter((t => e[t])).join(" ") + " "
            }
            update(e, [t]) {
                if (void 0 === this.st) {
                    this.st = new Set,
                    void 0 !== e.strings && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((e => "" !== e))));
                    for (const e in t)
                        t[e] && !this.nt?.has(e) && this.st.add(e);
                    return this.render(t)
                }
                const o = e.element.classList;
                for (const e of this.st)
                    e in t || (o.remove(e),
                    this.st.delete(e));
                for (const e in t) {
                    const n = !!t[e];
                    n === this.st.has(e) || this.nt?.has(e) || (n ? (o.add(e),
                    this.st.add(e)) : (o.remove(e),
                    this.st.delete(e)))
                }
                return k
            }
        }
        );
        var pi = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let hi = class extends Rn {
        }
        ;
        hi = pi([t(o.BlzIcon)], hi);
        var bi = hi
          , gi = q`:host{--group-icon-size:var(--global-size-600);display:grid;max-width:800px;width:100%}:host([center]:not([center=false])){margin:auto}:host([has-icons]) .group{display:grid;grid-template-columns:[icon-start] min-content [icon-end group-start] auto [group-end]}.group.no-dividers{margin-bottom:var(--semantic-space-between-xs)}[part*=group-icon],[part*=group-icon]::slotted(*){align-self:center;cursor:pointer;height:var(--group-icon-size);margin-right:var(--semantic-space-between-sm);width:var(--group-icon-size)}[part=group-text]{width:100%}.group-control{align-items:center;color:var(--semantic-color-content-inactive);display:flex;justify-content:flex-start;padding:var(--semantic-space-around-vertical-md-mobile) 0;text-align:left;width:100%}.expand-icon{color:var(--semantic-color-content-inactive);flex-shrink:0;margin-left:auto}.content-mask{max-height:0;visibility:hidden}.group-control.active .expand-icon{transform:scaleY(-1)}.group-control.active,.group-control:focus-within,.group-control:hover,:host(.focus-within) .group-control,:host(.hover) .group-control{color:var(--semantic-color-content-default)}:host([has-icon]) .group-control,:host([has-icons]) .content-mask{grid-column:group-start/group-end}.active.content-mask{max-height:none;padding-bottom:var(--semantic-space-around-vertical-md-mobile);visibility:visible}.dividers{background-color:var(--global-color-content-300);border:none;height:var(--global-size-25);margin:var(--semantic-space-between-sm) 0;width:100%}slot[name^=content]::slotted(*){margin:0}slot[name^=optional]::slotted(*){margin-top:var(--semantic-space-between-sm);max-width:410px}slot[name^=optional]::slotted(blz-button[type=ghost]){margin-top:var(--semantic-space-between-xxs);padding:0}slot[name^=optional]::slotted(blz-image),slot[name^=optional]::slotted(blz-video),slot[name^=optional]::slotted(img),slot[name^=optional]::slotted(video){margin-top:var(--semantic-space-between-md)}@media (min-width:960px){:host([icon-size=large]){--group-icon-size:var(--global-size-800)}}@media (min-width:720px){.group-control{padding:var(--semantic-space-around-vertical-sm-desktop) 0}.active.content-mask{padding-bottom:var(--semantic-space-around-vertical-sm-desktop)}}`
          , mi = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class vi extends kn {
            constructor() {
                super(),
                this.center = !1,
                this.simple = !1,
                this.multiple = !1,
                this.expandIcon = "chevron-down",
                this.startIndex = 0,
                this.heightMode = "auto",
                this.iconSize = "medium",
                this._activeMap = {},
                this._largestGroup = 0,
                this._scrollTimeout = 100,
                this._resizeTimeout = 300,
                this._slots = [],
                this._labels = [],
                this._contents = [],
                this._icons = [],
                this._resizeObserver = null,
                this._setSlotIndex = this._setSlotIndex.bind(this),
                this._getMaxHeight = this._getMaxHeight.bind(this),
                this._setMaxHeight = this._setMaxHeight.bind(this),
                this.pushChangeEventAnalytics = this.pushChangeEventAnalytics.bind(this),
                this.analyticsEvent = Cn.Other,
                this.analyticsLabel = o.BlzAccordion
            }
            static get styles() {
                return [...kn.styles, gi]
            }
            get componentDependencies() {
                return {
                    [o.BlzIcon]: bi
                }
            }
            get resizeTimeout() {
                return this._resizeTimeout
            }
            set resizeTimeout(e) {
                this._resizeTimeout = e
            }
            set activeIndex(e) {
                const t = e;
                e = +e,
                this._activeMap[e] = !this._activeMap[e],
                !this.multiple && Object.entries(this._activeMap).length > 1 && !0 === this._activeMap[e] && (Object.entries(this._activeMap).forEach(( ([e,t]) => {
                    t && (this._activeMap[e] = !1)
                }
                )),
                this._activeMap[e] = !0),
                Object.entries(this._activeMap).forEach(( ([e,t]) => {
                    this._slots.forEach((o => {
                        this[`${o}`].find((t => t.matches(`[slot="${o.slice(1, -1)}-${e}"]`)))?.classList.toggle("group-active", t)
                    }
                    ))
                }
                )),
                this.dispatchEvent(new CustomEvent("change",{
                    composed: !0,
                    detail: {
                        active: this._activeMap,
                        selected: t
                    }
                })),
                this.requestUpdate("activeIndex", null)
            }
            isActiveIndex(e) {
                return this._activeMap[e]
            }
            render() {
                return z`<div part="group-container" @click="${this._handleGroupsClick}">${this._buildGroups()}</div><slot name="label" @slotchange="${this._handleSlotChange}"></slot><slot name="content" @slotchange="${this._handleSlotChange}"></slot><slot name="icon" @slotchange="${this._handleSlotChange}"></slot>`
            }
            firstUpdated(e) {
                super.firstUpdated(e),
                this._slots = ["_labels", "_contents", "_icons"],
                "max" === this.heightMode && (this._resizeThrottled = ge(this._resizeTimeout, ( () => {
                    "max" === this.heightMode && (this._largestGroup = 0,
                    this._contents.forEach((e => {
                        e.offsetHeight > this._largestGroup && (this._largestGroup = e.offsetHeight)
                    }
                    )),
                    this._setMaxHeight())
                }
                )),
                this._resizeObserver = new ResizeObserver(this._resizeThrottled),
                this._resizeObserver.observe(this))
            }
            updated(e) {
                super.updated(e),
                e.forEach(( (e, t) => {
                    "startIndex" === t && void 0 !== e && (Object.keys(this._activeMap).forEach((e => this._activeMap[e] = !1)),
                    this._activeMap[this.startIndex] = !0),
                    "multiple" === t && (this._activeMap[0] = !this.multiple)
                }
                ))
            }
            connectedCallback() {
                super.connectedCallback(),
                this.addEventListener("change", this.pushChangeEventAnalytics),
                window.addEventListener("load", this._handleWindowLoad)
            }
            disconnectedCallback() {
                this._resizeObserver && this._resizeObserver.unobserve(this),
                window.removeEventListener("load", this._handleWindowLoad),
                this.removeEventListener("change", this.pushChangeEventAnalytics),
                super.disconnectedCallback()
            }
            _handleWindowLoad() {
                "function" == typeof this._resizeThrottled && this._resizeThrottled()
            }
            _handleGroupsClick(e) {
                let t = e.target;
                if (e.currentTarget?.contains(t)) {
                    for (; t && !t.hasAttribute("aria-controls"); )
                        t = t.parentElement;
                    t?.hasAttribute("aria-controls") && (this.activeIndex = parseInt(t.getAttribute("aria-controls")?.split("-").pop() ?? ""))
                } else {
                    for (; t.parentElement && t.parentElement !== this; )
                        t = t.parentElement;
                    const e = t.getAttribute("slot")?.split("-") ?? [];
                    "label" !== e[0].toLowerCase() && "icon" !== e[0].toLowerCase() || (this.activeIndex = parseInt(e.pop() ?? ""))
                }
                setTimeout(( () => {
                    _e(t, {})
                }
                ), this._scrollTimeout)
            }
            _handleSlotChange(e) {
                this._activeMap[this.startIndex || 0] = !0;
                const t = e.target?.name;
                ve(this.shadowRoot, t, (e => {
                    queueMicrotask(( () => {
                        "max" === this.heightMode && "content" === t && e.offsetHeight > this._largestGroup && (this._largestGroup = e.offsetHeight,
                        this._setMaxHeight())
                    }
                    )),
                    this[`_${t}s`].push(e),
                    1 === this[`_${t}s`].length && e.classList.toggle("group-active", !0)
                }
                )),
                this.requestUpdate()
            }
            _setSlotIndex(e, t) {
                e.forEach((e => {
                    this[`_${e}s`][t] && this[`_${e}s`][t].getAttribute("slot") === e && this[`_${e}s`][t].setAttribute("slot", `${e}-${t}`)
                }
                ))
            }
            _setMaxHeight() {
                this.multiple || "max" !== this.heightMode || this.style.setProperty("height", this._getMaxHeight())
            }
            _getMaxHeight() {
                this.style.setProperty("height", "auto");
                let e = "auto";
                const t = this.offsetHeight
                  , o = Object.entries(this._activeMap).find(( ([,e]) => e));
                if (void 0 !== o) {
                    const n = this._contents[parseInt(o[0])]?.offsetHeight;
                    e = `${t - n + this._largestGroup}px`
                }
                return e
            }
            _buildGroups() {
                return this._labels.length && this._contents.length ? (this._icons.length ? this.setAttribute("has-icons", "") : this.removeAttribute("has-icons"),
                this._labels.map(( (e, t) => {
                    this._setSlotIndex(["label", "content", "icon"], t);
                    const o = this._activeMap[t] || !1
                      , n = {
                        group: !0,
                        "no-dividers": !!this.simple,
                        active: o
                    }
                      , i = {
                        "blz-heading-text-xl": !0,
                        "group-control": !0,
                        active: o
                    }
                      , a = {
                        "blz-body-text-xl": !0,
                        "content-mask": !0,
                        active: o
                    }
                      , r = {
                        vertical: !0,
                        index: t,
                        length: this._labels.length,
                        callback: e => {
                            this.shadowRoot?.getElementById(`group-control-${e}`)?.focus()
                        }
                    }
                      , s = this._icons && this._icons[t] && z`<slot part="group-icon ${o ? "group-icon-active" : "group-icon-inactive"}" name="icon-${t}"></slot>`;
                    return z`<div class="${ui(n)}" part="group group-${t} ${o ? "group-active" : "group-inactive"}">${s} <button id="group-control-${t}" class="${ui(i)}" part="group-control group-control-${t} ${o ? "group-control-active" : "group-control-inactive"}" aria-expanded="${o}" aria-controls="content-mask-${t}" aria-disabled="false" @keydown="${fe(r)}"><slot name="label-${t}"></slot>${this.simple ? null : z`<blz-icon icon="${this.expandIcon}" size="300" class="expand-icon" exportparts="icon: expand-icon, icon: expand-icon-${o ? "active" : "inactive"}"></blz-icon>`}</button><div id="content-mask-${t}" class="${ui(a)}" part="content-mask" role="region" aria-labelledby="group-control-${t}"><slot name="content-${t}"></slot><slot name="optional-${t + 1}"></slot></div></div>${this.simple || t === this._contents.length - 1 ? null : z`<hr class="dividers" part="divider">`}`
                }
                ))) : null
            }
            pushChangeEventAnalytics(e) {
                const {detail: t} = e
                  , o = t?.active
                  , n = t?.selected;
                o && void 0 !== n && o[n] && this.pushEventFromGenerator(fn, {
                    cta_name: `${this.analyticsLabel} || ${n}`
                })
            }
        }
        mi([de({
            type: Boolean
        })], vi.prototype, "center", void 0),
        mi([de({
            type: Boolean
        })], vi.prototype, "simple", void 0),
        mi([de({
            type: Boolean
        })], vi.prototype, "multiple", void 0),
        mi([de({
            attribute: "expand-icon",
            type: String
        })], vi.prototype, "expandIcon", void 0),
        mi([de({
            attribute: "start-index",
            type: Number
        })], vi.prototype, "startIndex", void 0),
        mi([de({
            attribute: "height-mode",
            type: String
        })], vi.prototype, "heightMode", void 0),
        mi([de({
            attribute: "icon-size",
            type: String
        })], vi.prototype, "iconSize", void 0);
        var fi = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let yi = class extends vi {
        }
        ;
        yi = fi([t(o.BlzAccordion)], yi);
        var wi = q`:host{background-color:var(--badge-color-background-neutral);border-radius:var(--global-size-50);color:var(--semantic-color-content-default);display:flex;font:var(--badge-font-text);letter-spacing:var(--semantic-subheading-letter-spacing);text-transform:uppercase;width:fit-content}:host([level=urgent]){background-color:var(--badge-color-background-urgent);color:var(--semantic-color-content-default)}:host([level=positive]){background-color:var(--badge-color-background-positive);color:var(--semantic-color-content-default-dark)}::slotted([slot=leading-icon]){height:var(--global-size-300);margin-right:var(--semantic-space-between-xxxs);width:var(--global-size-300)}::slotted([slot=trailing-icon]){height:var(--global-size-300);margin-left:var(--semantic-space-between-xxxs);width:var(--global-size-300)}.badge-wrapper{align-items:center;display:flex;padding:var(--badge-space-padding-md)}.badge-wrapper-clone{opacity:0;padding:var(--badge-space-padding-md);position:absolute}.resize-width{width:min-content}:host([size=small]) .badge-wrapper,:host([size=small]) .badge-wrapper-clone,:host([variant=small]) .badge-wrapper,:host([variant=small]) .badge-wrapper-clone{padding:var(--badge-space-padding-sm)}`
          , _i = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class xi extends et {
            constructor() {
                super(...arguments),
                this.text = "",
                this.variant = "medium",
                this.size = "medium",
                this.level = "neutral",
                this._resizeWidth = !1
            }
            static get styles() {
                return [...et.styles, wi]
            }
            render() {
                return z`${this._renderBadgeTemplate(!1)} ${this._renderBadgeTemplate(!0)}`
            }
            firstUpdated() {
                const e = this.shadowRoot?.querySelector(".text-clone")
                  , t = this.shadowRoot?.querySelector(".text-wrapper-clone");
                this._textCloneBadge = this.shadowRoot?.querySelector(".badge-wrapper-clone"),
                this._resizeObserver = new ResizeObserver(( () => {
                    this._resizeWidth = t?.offsetWidth > e.offsetWidth
                }
                )),
                this._resizeObserver.observe(this._textCloneBadge)
            }
            disconnectedCallback() {
                this._resizeObserver && this._resizeObserver.unobserve(this._textCloneBadge),
                super.disconnectedCallback()
            }
            _renderBadgeTemplate(e) {
                const t = {
                    "badge-wrapper": !0,
                    "badge-wrapper-clone": e,
                    "resize-width": !e && this._resizeWidth
                };
                return z`<div class="${ui(t)}"><slot name="leading-icon"></slot><div class="text-wrapper${e ? "-clone" : ""}"><span class="${e ? "text-clone" : ""}">${this.text}</span></div><slot name="trailing-icon"></slot></div>`
            }
        }
        _i([de({
            type: String
        })], xi.prototype, "text", void 0),
        _i([de({
            type: String
        })], xi.prototype, "variant", void 0),
        _i([de({
            type: String
        })], xi.prototype, "size", void 0),
        _i([de({
            type: String
        })], xi.prototype, "level", void 0),
        _i([nt()], xi.prototype, "_resizeWidth", void 0);
        var zi = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let ki = class extends xi {
        }
        ;
        ki = zi([t(o.BlzBadge)], ki);
        var Si = ki
          , Ai = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let Ei = class extends Yn {
        }
        ;
        Ei = Ai([t(o.BlzIconButton)], Ei);
        var Ci = Ei
          , Oi = q`:host{--base-card-size-media-width-horizontal:60%;background-color:var(--card-backplate-color-background-default);border-radius:var(--global-size-50);height:100%;position:relative;width:100%}:host(:not([cosmetic]).hover),:host(:not([cosmetic]):hover){background-color:var(--card-backplate-color-background-hover)}:host(:not([cosmetic]):focus),:host(:not([cosmetic]):focus-within),:host(:not([cosmetic])[active]){background-color:var(--card-backplate-color-background-hover)}:host(:not([cosmetic]).hover),:host(:not([cosmetic]):focus),:host(:not([cosmetic]):focus-within),:host(:not([cosmetic]):hover),:host(:not([cosmetic])[active]){cursor:pointer}::slotted([slot=media]){height:100%;object-fit:cover;object-position:top center;overflow:hidden;width:100%}::slotted(*){height:max-content}a{height:100%;text-decoration:none;width:100%}a:focus{outline:0}a::after{content:'';inset:0;position:absolute}.media-wrapper{align-items:center;border-top-left-radius:var(--global-size-50);border-top-right-radius:var(--global-size-50);display:flex;position:relative}.badge-container{height:100%;left:0;position:absolute;top:0;width:100%}[part=card]{height:100%;width:100%}.vertical[part=card]{display:flex;flex-direction:column}.horizontal.reverse-position[part=card],.vertical.reverse-position[part=card]{display:flex;flex-direction:column-reverse}::slotted([slot=bottom-left-corner]),::slotted([slot=bottom-right-corner]),::slotted([slot=top-left-corner]),::slotted([slot=top-right-corner]){position:absolute;z-index:var(--measure-z-index-above)}[part=content]{display:grid;height:100%}.no-media .media-wrapper{display:none}.horizontal [part=content].has-footer{align-items:initial;grid-template-rows:2fr 1fr;grid-template-rows:auto;height:auto}.horizontal [part=content]{align-items:center;height:auto;width:calc(100% - var(--base-card-size-media-width-horizontal))}:host([backplate]) [part=content]{padding:var(--base-card-space-padding-sm)}:host(:not([backplate])),:host(:not([backplate]):focus),:host(:not([backplate]):focus-within),:host(:not([backplate]):hover){background-color:transparent}.no-media.horizontal [part=content]{width:100%}:host(:not([backplate])) .horizontal [part=content]{padding:0 0 0 var(--base-card-space-padding-sm-desktop-horizontal)}:host(:not([backplate])) .vertical [part=content]{padding:var(--base-card-space-padding-sm-desktop-horizontal) 0 0 0}:host(:not([backplate])) .horizontal.reverse-position [part=content],:host(:not([backplate])) .vertical.reverse-position [part=content]{padding:0 0 var(--base-card-space-padding-sm-desktop-vertical) 0}:host(:not([backplate])) ::slotted([slot=media]){border-radius:var(--global-size-50)}:host([backplate][orientation=vertical]) ::slotted([slot=media]){border-radius:var(--global-size-50) var(--global-size-50) 0 0}:host([backplate][orientation=horizontal]) ::slotted([slot=media]){border-radius:var(--global-size-50) 0 0 var(--global-size-50)}:host([backplate][orientation=vertical][position=reverse]) ::slotted([slot=media]){border-radius:0 0 var(--global-size-50) var(--global-size-50)}:host([backplate][orientation=horizontal][position=reverse]) ::slotted([slot=media]){border-radius:0 var(--global-size-50) var(--global-size-50) 0}::slotted([slot=top-left-corner]){left:0;margin:var(--base-card-space-media-top-left);top:0}::slotted([slot=top-right-corner]){margin:var(--base-card-space-media-top-right);right:0;top:0}::slotted([slot=bottom-left-corner]){bottom:0;left:0;margin:var(--base-card-space-media-bottom-left)}::slotted([slot=bottom-right-corner]){bottom:0;margin:var(--base-card-space-media-bottom-right);right:0}::slotted([slot=footer]){margin-top:auto;padding-top:var(--content-block-space-optional-slot-bottom)}.vertical{grid-template-rows:1fr}:host(:not([backplate])) .horizontal.reverse-position [part=content]{padding:0 var(--base-card-space-padding-md-desktop-vertical) 0 0}.horizontal.reverse-position[part=card]{flex-direction:row-reverse}.horizontal[part=card]{display:flex;flex-direction:row}.horizontal .media-wrapper{width:var(--base-card-size-media-width-horizontal)}.horizontal a{display:contents}.horizontal .main{display:flex;flex-grow:1}@media (min-width:960px){:host([backplate]) [part=content]{padding:var(--base-card-space-padding-md)}}@media (min-width:1200px){:host([backplate]) .horizontal [part=content]{padding:var(--base-card-space-padding-lg)}}`
          , Bi = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class Pi extends kn {
            constructor() {
                super(),
                this.href = "",
                this.label = "",
                this.orientation = "vertical",
                this.position = "default",
                this.backplate = !0,
                this.cosmetic = !1,
                this.active = !1,
                this.hasMediaContent = !1,
                this.href && Gn(Fn.BlzBaseCardHref)
            }
            static get styles() {
                return [...kn.styles, Oi]
            }
            get _defaultSlottedAttributes() {
                return {
                    media: {
                        "blz-video": {
                            "aspect-ratio": {
                                value: "16:9"
                            },
                            preload: {
                                value: "none"
                            },
                            muted: {
                                value: !0
                            },
                            loop: {
                                value: !0
                            },
                            playsinline: {
                                value: !0
                            }
                        },
                        "blz-image": {
                            "aspect-ratio": {
                                value: "16:9"
                            }
                        }
                    },
                    "content-block": {
                        "blz-content-block": {
                            layout: {
                                value: "left"
                            }
                        }
                    }
                }
            }
            get componentDependencies() {
                return {
                    [o.BlzIconButton]: Ci
                }
            }
            focus(e) {
                this.href ? this.shadowRoot?.querySelector("a")?.focus(e) : super.focus(e)
            }
            render() {
                const e = ui({
                    "reverse-position": "reverse" === this.position,
                    vertical: "vertical" === this.orientation,
                    horizontal: "horizontal" === this.orientation,
                    "no-media": !this.hasMediaContent
                });
                return z`<article part="card" class="${e}">${this._renderAnchorTemplate()}<div part="content">${this.hasMediaContent ? "" : z`<div class="badge-wrapper"><slot name="top-left-corner"></slot><slot name="top-right-corner"></slot><slot name="bottom-left-corner"></slot><slot name="bottom-right-corner"></slot></div>`}<slot class="content-area"></slot><slot class="content-area" name="content-area" @slotchange="${this._handleContentAreaDeprecation}"></slot><slot @slotchange="${this._adjustContentStyles}" name="footer"></slot></div></article>`
            }
            _handleContentAreaDeprecation() {
                this._contentAreaSlotNodes.length > 0 && xn() && console.warn('The "content-area" slot is deprecated and will be removed in a future update. Please use the default slot instead.')
            }
            _adjustContentStyles() {
                this._footerNodes.length > 0 ? this._contentContainer.classList.add("has-footer") : this._contentContainer.classList.remove("has-footer")
            }
            _handleMediaSlotChange(e) {
                const t = e.target;
                this.hasMediaContent = t.assignedNodes().length > 0
            }
            _renderMediaContent() {
                return z`<div class="media-wrapper">${this.hasMediaContent ? z`<slot name="top-left-corner"></slot><slot name="top-right-corner"></slot><slot name="bottom-left-corner"></slot><slot name="bottom-right-corner"></slot>` : z``}<slot name="media" @slotchange="${this._handleMediaSlotChange}"></slot></div>`
            }
            _renderAnchorTemplate() {
                return this.href ? z`<a class="anchor" href="${it(this.href)}" target="_blank" rel="noopener" part="anchor" @click="${this._handleClick}">${this._renderMediaContent()}</a>` : this._renderMediaContent()
            }
            _handleClick() {
                this.pushEventFromGenerator(fn, this.href && "javascript:" !== this.href ? {
                    [In.DESTINATION_URL]: this.href
                } : {})
            }
        }
        Bi([de({
            type: String
        })], Pi.prototype, "href", void 0),
        Bi([de({
            type: String
        })], Pi.prototype, "label", void 0),
        Bi([de({
            type: String
        })], Pi.prototype, "orientation", void 0),
        Bi([de({
            type: String
        })], Pi.prototype, "position", void 0),
        Bi([de({
            type: Boolean
        })], Pi.prototype, "backplate", void 0),
        Bi([de({
            type: Boolean
        })], Pi.prototype, "cosmetic", void 0),
        Bi([de({
            type: Boolean
        })], Pi.prototype, "active", void 0),
        Bi([ai('[part="content"]')], Pi.prototype, "_contentContainer", void 0),
        Bi([pe({
            slot: "footer",
            flatten: !0
        })], Pi.prototype, "_footerNodes", void 0),
        Bi([pe({
            slot: "content-area",
            flatten: !0
        })], Pi.prototype, "_contentAreaSlotNodes", void 0),
        Bi([nt()], Pi.prototype, "hasMediaContent", void 0);
        var Ti = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let Li = class extends Pi {
        }
        ;
        Li = Ti([t(o.BlzBaseCard)], Li);
        var Ii = q`:host{--background-left-top:none;--background-center-top:none;--background-right-top:none;--background-center-left:none;--background-center:none;--background-center-right:none;--background-left-bottom:none;--background-center-bottom:none;--background-right-bottom:none;--hover-background-left-top:none;--hover-background-center-top:none;--hover-background-right-top:none;--hover-background-center-left:none;--hover-background-center:none;--hover-background-center-right:none;--hover-background-left-bottom:none;--hover-background-center-bottom:none;--hover-background-right-bottom:none;--background-optional-fill:none;--hover-background-optional-fill:none;--nine-box-width:38px;--nine-box-height:16px;align-items:center;background:var(--semantic-color-background-action-secondary-default);border-radius:var(--global-size-50);color:var(--semantic-color-content-default);cursor:pointer;display:inline-flex;font:var(--button-font-label-md);gap:var(--semantic-space-between-xxs);grid-auto-flow:column;height:fit-content;justify-content:center;line-height:1;min-height:var(--button-height-md);position:relative;text-decoration:none;user-select:none;white-space:nowrap}::slotted(*){pointer-events:none}#host{align-items:inherit;color:inherit;display:inherit;gap:inherit;grid-auto-flow:inherit;height:100%;justify-content:inherit;min-height:inherit;padding:var(--button-space-padding-md);position:relative;text-decoration:inherit;user-select:none;width:100%}:host([variant=nine-box]) #host{background-image:var(--background-left-top),var(--background-center-top),var(--background-right-top),var(--background-center-left),var(--background-center),var(--background-center-right),var(--background-left-bottom),var(--background-center-bottom),var(--background-right-bottom);background-position:left top,center top,right top,left center,center,right center,left bottom,center bottom,right bottom;background-repeat:no-repeat;background-size:var(--nine-box-width) var(--nine-box-height),calc(100% - 2 * calc(var(--nine-box-width) - 1px)) var(--nine-box-height),var(--nine-box-width) var(--nine-box-height),var(--nine-box-width) calc(100% - 2 * calc(var(--nine-box-height) - 1px)),calc(100% - 2 * calc(var(--nine-box-width) - 1px)) calc(100% - 2 * calc(var(--nine-box-height) - 1px)),var(--nine-box-width) calc(100% - 2 * calc(var(--nine-box-height) - 1px)),var(--nine-box-width) var(--nine-box-height),calc(100% - 2 * calc(var(--nine-box-width) - 1px)) var(--nine-box-height),var(--nine-box-width) var(--nine-box-height);z-index:var(--measure-z-index-docked)}:host([variant=reset]),:host([variant=reset]) #host{background:0 0;border:0;color:inherit;display:inline-block;padding:0}:host(:not([disabled]):active){transform:translateY(1px)}::slotted(:not(:first-child)){margin-left:var(--global-size-50)}:host([size=small]) #host{padding:var(--button-space-padding-sm)}:host([size=small]){font:var(--button-font-label-sm);min-height:var(--button-height-sm)}:host([size=large]){font:var(--button-font-label-lg);min-height:var(--semantic-size-input-height-lg-mobile)}:host([size=large]) #host{padding:var(--button-space-padding-lg)}:host([size=small][variant=nine-box]) #host{--nine-box-width:30px;--nine-box-height:12px}:host([size=large][variant=nine-box]) #host{--nine-box-width:54px;--nine-box-height:20px}:host([variant=nine-box]:hover) #host{background-image:var(--hover-background-left-top),var(--hover-background-center-top),var(--hover-background-right-top),var(--hover-background-center-left),var(--hover-background-center),var(--hover-background-center-right),var(--hover-background-left-bottom),var(--hover-background-center-bottom),var(--hover-background-right-bottom)}[part=center-bottom-overlay],[part=center-top-overlay],[part=left-bottom-overlay],[part=left-center-overlay],[part=left-top-overlay],[part=right-bottom-overlay],[part=right-center-overlay],[part=right-top-overlay]{align-items:center;display:flex;justify-content:center;margin:auto;position:absolute}[part=center-bottom-overlay],[part=center-top-overlay]{height:var(--global-size-250);left:0;right:0;width:var(--global-size-700)}[part=left-top-overlay],[part=right-top-overlay]{height:20px;top:-4px;width:20px}[part=left-center-overlay],[part=right-center-overlay]{bottom:0;height:var(--global-size-300);top:0;width:var(--global-size-250)}[part=left-bottom-overlay],[part=right-bottom-overlay]{bottom:calc(-1 * var(--global-size-50));height:var(--global-size-250);width:var(--global-size-250)}[part=center-top-overlay]{top:-10px}[part=center-bottom-overlay]{bottom:-10px}[part=left-bottom-overlay],[part=left-center-overlay],[part=left-top-overlay]{left:calc(-1 * var(--global-size-75))}[part=right-bottom-overlay],[part=right-center-overlay],[part=right-top-overlay]{right:calc(-1 * var(--global-size-25))}:host([size=small]) [part=center-bottom-overlay],:host([size=small]) [part=center-top-overlay]{height:var(--global-size-200);width:var(--global-size-500)}:host([size=small]) [part=left-bottom-overlay],:host([size=small]) [part=left-top-overlay],:host([size=small]) [part=right-bottom-overlay],:host([size=small]) [part=right-top-overlay]{height:var(--global-size-200);width:var(--global-size-200)}:host([size=small]) [part=left-center-overlay],:host([size=small]) [part=right-center-overlay]{height:18px;width:var(--global-size-200)}:host([size=small]) [part=center-top-overlay]{top:calc(-1 * var(--global-size-100))}:host([size=small]) [part=center-bottom-overlay]{bottom:calc(-1 * var(--global-size-100))}:host([size=large]) [part=center-bottom-overlay],:host([size=large]) [part=center-top-overlay]{height:var(--global-size-250);width:var(--global-size-700)}:host([size=large]) [part=left-top-overlay],:host([size=large]) [part=right-top-overlay]{height:var(--global-size-250);top:calc(-1 * var(--global-size-50));width:var(--global-size-250)}:host([size=large]) [part=left-center-overlay],:host([size=large]) [part=right-center-overlay]{height:26px;width:var(--global-size-250)}:host([size=large]) [part=left-bottom-overlay],:host([size=large]) [part=right-bottom-overlay]{bottom:calc(-1 * var(--global-size-50));height:var(--global-size-250);width:var(--global-size-250)}:host ::slotted([slot=optional-fill]){display:flex}.optional-fill{background:var(--background-optional-fill);background-repeat:repeat;display:flex;height:calc(100% - var(--global-size-150));pointer-events:none;position:absolute;width:calc(100% - var(--global-size-150));z-index:var(--measure-z-index-above)}:host(:hover) .optional-fill{background:var(--hover-background-optional-fill)}[part=content]{line-height:initial;white-space:normal;word-wrap:break-word}:host([variant=nine-box]){background:0 0;width:fit-content}:host(.disabled),:host([disabled]){color:var(--semantic-color-content-inactive)}:host(.focus-within),:host(:focus-within){color:var(--button-color-text-pressed)}:host([type=primary]),:host([variant=primary]){background:var(--semantic-color-background-action-primary-default)}:host([type=primary]:not([disabled]).hover),:host([type=primary]:not([disabled]):hover),:host([variant=primary]:not([disabled]).hover),:host([variant=primary]:not([disabled]):hover){background:var(--semantic-color-background-action-primary-hover);box-shadow:inset 0 0 0 1px var(--button-color-border-primary-hover)}:host([type=primary]:not([disabled]).focus-within),:host([type=primary]:not([disabled]):focus-within),:host([variant=primary]:not([disabled]).focus-within),:host([variant=primary]:not([disabled]):focus-within){background:var(--semantic-color-background-action-primary-pressed);box-shadow:inset 0 0 0 1px var(--button-color-border-primary-pressed)}:host([type=primary].disabled),:host([type=primary][disabled]),:host([variant=primary].disabled),:host([variant=primary][disabled]){background:var(--semantic-color-background-action-primary-disabled)}:host(:not([variant])),:host([type=secondary]),:host([variant=secondary]){background:var(--semantic-color-background-action-secondary-default)}:host(:not([variant]).hover),:host(:not([variant]):hover),:host([type=secondary]:not([disabled]).hover),:host([type=secondary]:not([disabled]):hover),:host([variant=secondary]:not([disabled]).hover),:host([variant=secondary]:not([disabled]):hover){background:var(--semantic-color-background-action-secondary-hover);box-shadow:inset 0 0 0 1px var(--button-color-border-secondary-hover)}:host(:not([variant]).focus-within),:host(:not([variant]):focus-within),:host([type=secondary]:not([disabled]).focus-within),:host([type=secondary]:not([disabled]):focus-within),:host([variant=secondary]:not([disabled]).focus-within),:host([variant=secondary]:not([disabled]):focus-within){background:var(--semantic-color-background-action-secondary-pressed);box-shadow:inset 0 0 0 1px var(--button-color-border-secondary-pressed)}:host(:not([variant]).disabled),:host(:not([variant])[disabled]),:host([type=secondary].disabled),:host([type=secondary][disabled]),:host([variant=secondary].disabled),:host([variant=secondary][disabled]){background:var(--semantic-color-background-action-secondary-pressed)}:host([type=subtle]:not([disabled])),:host([type=tertiary]:not([disabled])),:host([variant=subtle]:not([disabled])),:host([variant=tertiary]:not([disabled])){background:var(--semantic-color-background-action-tertiary-default);box-shadow:inset 0 0 0 1px var(--button-color-border-tertiary-default);color:var(--semantic-color-content-default)}:host([type=tertiary][disabled]),:host([variant=tertiary][disabled]){background:var(--semantic-color-background-action-tertiary-default);box-shadow:inset 0 0 0 1px var(--button-color-border-tertiary-disabled)}:host([type=subtle]:not([disabled]):focus-within),:host([type=subtle]:not([disabled]):hover),:host([type=tertiary]:not([disabled]).hover),:host([type=tertiary]:not([disabled]):hover),:host([variant=subtle]:not([disabled]):focus-within),:host([variant=subtle]:not([disabled]):hover),:host([variant=tertiary]:not([disabled]).hover),:host([variant=tertiary]:not([disabled]):hover){background:var(--semantic-color-background-action-tertiary-hover);box-shadow:inset 0 0 0 1px var(--button-color-border-tertiary-hover)}:host([type=tertiary]:not([disabled]).focus-within),:host([type=tertiary]:not([disabled]):focus-within),:host([variant=tertiary]:not([disabled]).focus-within),:host([variant=tertiary]:not([disabled]):focus-within){background:var(--semantic-color-background-action-tertiary-default);box-shadow:inset 0 0 0 1px var(--button-color-border-tertiary-pressed);color:var(--button-color-text-pressed)}:host([type=ghost]),:host([variant=ghost]){background:0 0;border:transparent}:host([type=ghost]:not([disabled])),:host([variant=ghost]:not([disabled])){color:var(--global-color-primary-400)}:host([type=ghost]:not([disabled]).focus-within),:host([type=ghost]:not([disabled]).hover),:host([type=ghost]:not([disabled]):focus-within),:host([type=ghost]:not([disabled]):hover),:host([variant=ghost]:not([disabled]).focus-within),:host([variant=ghost]:not([disabled]).hover),:host([variant=ghost]:not([disabled]):focus-within),:host([variant=ghost]:not([disabled]):hover){background:0 0;color:var(--button-color-text-pressed)}:host([cosmetic=true]){position:relative}[part=cosmetic-button]{inset:0;position:absolute}:host([full-width]){padding:0;width:100%}@media (min-width:720px){:host([type=nine-box]) #host,:host([variant=nine-box]) #host{--nine-box-width:54px;--nine-box-height:18px}:host([size=large]){min-height:var(--semantic-size-input-height-lg-desktop)}:host([size=large][type=nine-box]) #host,:host([size=large][variant=nine-box]) #host{--nine-box-width:62px;--nine-box-height:24px}:host([size=small][type=nine-box]) #host,:host([size=small][variant=nine-box]) #host{--nine-box-width:32px;--nine-box-height:12px}}`
          , Ri = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class $i extends Vn {
            constructor() {
                super(),
                this.fullWidth = !1,
                this.variant = "primary",
                this.size = "medium",
                this.submit = !1,
                this.variant = this.type
            }
            static get styles() {
                return [...Vn.styles, Ii]
            }
            get _defaultSlottedAttributes() {
                return {
                    default: {
                        "blz-icon": {
                            size: {
                                value: e => "small" === e.size ? 250 : 300
                            }
                        }
                    }
                }
            }
            connectedCallback() {
                super.connectedCallback(),
                this.type = this.submit ? "submit" : "button"
            }
            renderInnerContent() {
                return z`<slot part="content"></slot>${"nine-box" === this.variant ? this._renderOuterNineBox() : null}`
            }
            renderOuterContent() {
                return z`<div class="optional-fill"></div>`
            }
            pushAnalyticsEvent() {
                this.pushEventFromGenerator(fn, this.href && "javascript:" !== this.href ? {
                    [In.DESTINATION_URL]: this.href
                } : {})
            }
            _renderOuterNineBox() {
                return z`<div part="center-top-overlay"><slot name="center-top-overlay"></slot></div><div part="left-top-overlay"><slot name="left-top-overlay"></slot></div><div part="right-top-overlay"><slot name="right-top-overlay"></slot></div><div part="left-center-overlay"><slot name="left-center-overlay"></slot></div><div part="right-center-overlay"><slot name="right-center-overlay"></slot></div><div part="center-bottom-overlay"><slot name="center-bottom-overlay"></slot></div><div part="left-bottom-overlay"><slot name="left-bottom-overlay"></slot></div><div part="right-bottom-overlay"><slot name="right-bottom-overlay"></slot></div>`
            }
        }
        Ri([de({
            attribute: "full-width",
            type: Boolean
        })], $i.prototype, "fullWidth", void 0),
        Ri([de({
            type: String,
            reflect: !0
        })], $i.prototype, "variant", void 0),
        Ri([de({
            type: String
        })], $i.prototype, "size", void 0),
        Ri([de({
            type: Boolean
        })], $i.prototype, "submit", void 0);
        var ji = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let Di = class extends $i {
        }
        ;
        Di = ji([t(o.BlzButton)], Di);
        var Ni = Di
          , Mi = q`:host{display:inline-flex;flex-flow:column wrap;gap:var(--semantic-space-between-sm)}::slotted(*){width:100%}:host([full-width]){display:flex;flex-direction:column}:host([variant=right]){flex-direction:row-reverse}@media (min-width:720px){:host([size=large]){gap:var(--semantic-space-between-md)}}@media (min-width:480px){:host{flex-direction:row}:host(:not([full-width])) ::slotted(*){width:auto}}`
          , Fi = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class Ui extends et {
            constructor() {
                super(...arguments),
                this.variant = "left",
                this.size = "medium",
                this.fullWidth = !1
            }
            static get styles() {
                return [...et.styles, Mi]
            }
            get _defaultSlottedAttributes() {
                return {
                    default: {
                        "blz-button": {
                            size: {
                                value: e => e.size
                            },
                            "full-width": {
                                value: e => e.fullWidth
                            }
                        }
                    }
                }
            }
            render() {
                return z`<slot></slot>`
            }
        }
        Fi([de({
            type: String
        })], Ui.prototype, "variant", void 0),
        Fi([de({
            type: String
        })], Ui.prototype, "size", void 0),
        Fi([de({
            type: Boolean,
            attribute: "full-width"
        })], Ui.prototype, "fullWidth", void 0);
        var Hi = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let Vi = class extends Ui {
        }
        ;
        Vi = Hi([t(o.BlzButtonGroup)], Vi);
        var qi = q`:host{background-color:var(--global-color-background-800);border-radius:var(--global-size-50);display:grid;grid-template-columns:100%;grid-template-rows:auto 1fr}::slotted(blz-button[slot=optional]){margin-top:var(--semantic-space-between-sm)}::slotted(blz-button[slot=optional].focus),::slotted(blz-button[slot=optional].focus-within),::slotted(blz-button[slot=optional].hover),::slotted(blz-button[slot=optional]:focus),::slotted(blz-button[slot=optional]:focus-within),::slotted(blz-button[slot=optional]:hover){background:var(--global-color-accent-600)}:host([variant|=simple]){background-color:transparent}:host([href]){grid-template-rows:1fr}:host([href][anchor-wrapped]):host(:focus),:host([href][anchor-wrapped]):host(:focus-within),:host([href][anchor-wrapped]):host(:hover),:host([href][anchor-wrapped].focus),:host([href][anchor-wrapped].focus-within),:host([href][anchor-wrapped].hover){background-color:var(--semantic-color-background-page-primary);cursor:pointer}:host([href]) [part=anchor]{display:flex;flex-direction:column;height:100%}:host ::slotted([slot=image]){aspect-ratio:16/9}:host([variant|=simple]) ::slotted([slot=image]){border-radius:var(--global-size-50);overflow:hidden}[part=content]{display:flex;flex-direction:column;justify-content:space-between;margin:var(--semantic-space-around-vertical-xl-mobile) var(--semantic-space-around-horizontal-md-mobile)}a [part=content]{height:100%}:host([variant=simple]) [part=content]{margin:var(--semantic-space-around-vertical-md-mobile) 0 0}:host([variant=simple]) [part=content].no-details{display:contents}:host([variant=simple-large]) [part=content]{margin:var(--semantic-space-around-vertical-xl-mobile) 0 0}:host([layout=center]) [part=content]{text-align:center}:host([layout=left]) [part=content]{text-align:left}::slotted([slot=subheading]){color:var(--global-color-content-600);font:var(--semantic-heading-text-xs);margin-bottom:var(--semantic-content-space-xs);text-transform:uppercase}::slotted([slot=heading]){line-height:var(--global-font-line-height-comfy)}::slotted([slot=description]){font:var(--semantic-body-text-md);line-height:var(--global-font-line-height-comfy);margin-top:var(--global-size-150)}::slotted(ul[slot=description]){list-style-position:inside;padding-left:0}:host([variant=simple-large]) ::slotted([slot=heading]){font:var(--semantic-heading-text-xl)}a{text-decoration:none}.image-wrapper{position:relative}::slotted(blz-image[slot=image]){object-fit:cover}blz-icon{color:var(--global-color-content-900);height:var(--global-size-500);left:calc(50% - (var(--global-size-500)/ 2));pointer-events:none;position:absolute;top:calc(50% - (var(--global-size-500)/ 2));width:var(--global-size-500)}:host([variant=simple-large]) ::slotted([slot=description]){margin:var(--global-size-150) 0 0}.footer-text,::slotted(div[slot=optional]){color:var(--global-color-content-600);font:var(--semantic-body-text-sm);margin:var(--semantic-content-space-sm) 0 0}[part=footer]{display:flex}:host([layout=center]) [part=footer]{justify-content:center}@media (min-width:720px){:host([href]){grid-template-rows:1fr}::slotted(blz-button[slot=optional]){margin-top:var(--global-size-300)}:host([href]):host(.focus) ::slotted(blz-button[slot=optional]),:host([href]):host(.focus-within) ::slotted(blz-button[slot=optional]),:host([href]):host(.hover) ::slotted(blz-button[slot=optional]),:host([href]):host(:focus) ::slotted(blz-button[slot=optional]),:host([href]):host(:focus-within) ::slotted(blz-button[slot=optional]),:host([href]):host(:hover) ::slotted(blz-button[slot=optional]){background:var(--global-color-accent-600)}blz-icon{height:var(--global-size-800);left:calc(50% - (var(--global-size-800)/ 2));top:calc(50% - (var(--global-size-800)/ 2));width:var(--global-size-800)}}@media (min-width:960px){::slotted([slot=description]){margin-top:var(--semantic-content-space-md)}.footer-text,::slotted(div[slot=optional]){margin:var(--semantic-space-around-vertical-sm-desktop) 0 0}}@media (min-width:720px){[part=content]{margin:var(--semantic-space-around-vertical-md-desktop) var(--semantic-space-around-horizontal-md-desktop)}:host([variant=simple]) [part=content]{margin:var(--semantic-space-around-vertical-sm-desktop) 0 0}:host([variant=simple-large]) [part=content]{margin:var(--semantic-space-around-vertical-md-desktop) 0 0}}`
          , Gi = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class Wi extends (dt(kn)) {
            get componentDependencies() {
                return {
                    [o.BlzIcon]: bi
                }
            }
            constructor() {
                super(),
                this.variant = "standard",
                this.layout = "left",
                this.video = !1,
                this._ctaHref = void 0,
                this._resizedTimeout = 300,
                this.analyticsEvent = Cn.Other,
                Gn(Fn.Version2Components)
            }
            static get styles() {
                return [...kn.styles, qi]
            }
            get _defaultSlottedAttributes() {
                return {
                    image: {
                        "blz-image": {
                            "aspect-ratio": {
                                value: "16:9"
                            }
                        }
                    },
                    optional: {
                        "blz-button": {
                            size: {
                                value: "small"
                            }
                        }
                    }
                }
            }
            focus(e) {
                this.href ? this.shadowRoot.querySelector("a").focus(e) : super.focus(e)
            }
            render() {
                const e = z`<div class="image-wrapper"><slot name="image" @slotchange="${this._setContentDisplay}"></slot>${this.video ? z`<blz-icon icon="play" exportparts="icon: play-icon" size="700"></blz-icon>` : ""}</div><div class="blz-body-text-xl" part="content"><div class="main"><slot name="subheading" @slotchange="${this._setContentDisplay}"></slot><slot name="heading" class="blz-heading-text-lg" @slotchange="${this._setContentDisplay}"></slot>${"simple" !== this.variant ? z`<slot name="description" class="blz-body-text-xl"></slot>` : ""}</div>${"standard" === this.variant ? this._footerFormatter() : ""}</div>`;
                return this.href && !this._ctaHref ? z`<a href="${it(this.href)}" target="_blank" rel="noopener" part="anchor" @click="${this._handleClick}">${e}</a>` : e
            }
            firstUpdated(e) {
                super.firstUpdated(e),
                "standard" === this.variant && this.href && this._slottedCta?.length > 0 && (this.setAttribute("anchor-wrapped", !0),
                this._resizedThrottled = ge(this._resizedTimeout, ( () => {
                    const e = window.innerWidth < we("--view-sm");
                    void 0 === this._ctaHref && e ? (this._ctaHref = this.href,
                    this._slottedCta[0].setAttribute("href", this.href),
                    this._slottedCta[0].setAttribute("target", "_blank"),
                    this._slottedCta[0].removeAttribute("cosmetic"),
                    this.removeAttribute("anchor-wrapped")) : this._ctaHref && !e && (this._ctaHref = void 0,
                    this._slottedCta[0].removeAttribute("href"),
                    this._slottedCta[0].removeAttribute("target"),
                    this._slottedCta[0].setAttribute("cosmetic", !0),
                    this.setAttribute("anchor-wrapped", !0))
                }
                )),
                this._resizeObserver = new ResizeObserver(this._resizedThrottled),
                this._resizeObserver.observe(this))
            }
            updated(e) {
                super.updated(e)
            }
            _dateFormatter() {
                const e = new Date(this.date)
                  , t = (new Date).getFullYear()
                  , o = e.getFullYear() === t ? {
                    month: "short",
                    day: "numeric"
                } : {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                };
                return e.toLocaleDateString(this.lang, o)
            }
            _footerFormatter() {
                return this.date ? z`<div class="footer-text">${this._dateFormatter()}</div>` : z`<div part="footer"><slot name="optional"></slot></div>`
            }
            _setContentDisplay() {
                if ("simple" === this.variant) {
                    const e = this.shadowRoot.querySelector('slot[name="heading"]')
                      , t = this.shadowRoot.querySelector('slot[name="subheading"]')
                      , o = e.assignedElements().length + t.assignedElements().length;
                    this.shadowRoot.querySelector('[part="content"]').classList.toggle("no-details", 0 === o)
                }
            }
            _handleClick() {
                super.pushEventFromGenerator(fn, this.href && "javascript:" !== this.href ? {
                    [In.DESTINATION_URL]: this.href
                } : {})
            }
        }
        Gi([de({
            type: String
        })], Wi.prototype, "variant", void 0),
        Gi([de({
            type: String
        })], Wi.prototype, "layout", void 0),
        Gi([de({
            type: Boolean
        })], Wi.prototype, "video", void 0),
        Gi([de({
            type: String
        })], Wi.prototype, "date", void 0),
        Gi([de({
            type: String
        })], Wi.prototype, "href", void 0),
        Gi([de({
            type: String
        })], Wi.prototype, "label", void 0),
        Gi([nt()], Wi.prototype, "_ctaHref", void 0),
        Gi([pe({
            slot: "optional",
            flatten: !0,
            selector: "blz-button"
        })], Wi.prototype, "_slottedCta", void 0);
        var Yi = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let Ki = class extends Wi {
        }
        ;
        Ki = Yi([t(o.BlzCard)], Ki);
        const Xi = Object.freeze({
            PREFERS_REDUCED_MOTION: "(prefers-reduced-motion: reduce)",
            PREFERS_REDUCED_TRANSPARENCY: "(prefers-reduced-transparency)",
            PREFERS_MORE_CONTRAST: "(prefers-contrast: more)",
            PREFERS_LESS_CONTRAST: "(prefers-contrast: less)",
            PREFERS_DARK_COLOR_SCHEME: "(prefers-color-scheme: dark)",
            PREFERS_LIGHT_COLOR_SCHEME: "(prefers-color-scheme: light)"
        });
        function Zi(e, t, o) {
            Object.defineProperty(e, t, o)
        }
        function Ji(e) {
            return "string" == typeof e
        }
        function Qi(e, t, o) {
            const n = {
                mount() {
                    this.root = e.selector,
                    this.track = this.root.querySelector('[data-glide-el="track"]'),
                    this.collectSlides()
                },
                collectSlides() {
                    var t;
                    this.slides = (t = this.wrapper.children,
                    Array.prototype.slice.call(t)).filter((t => !t.classList.contains(e.settings.classes.slide.clone)))
                }
            };
            return Zi(n, "root", {
                get: () => n._r,
                set(e) {
                    var t;
                    Ji(e) && (e = document.querySelector(e)),
                    null !== e ? n._r = e : (t = "Root element must be a existing Html node",
                    console.error(`[Glide warn]: ${t}`))
                }
            }),
            Zi(n, "track", {
                get: () => n._t,
                set(e) {
                    n._t = e
                }
            }),
            Zi(n, "wrapper", {
                get: () => n.track.children[0]
            }),
            o.on("update", ( () => {
                n.collectSlides()
            }
            )),
            n
        }
        function ea() {
            return (new Date).getTime()
        }
        class ta {
            constructor(e={}) {
                this.listeners = e
            }
            on(e, t, o, n=!1) {
                Ji(e) && (e = [e]);
                for (let i = 0; i < e.length; i++)
                    this.listeners[e[i]] = o,
                    t.addEventListener(e[i], this.listeners[e[i]], n)
            }
            off(e, t, o=!1) {
                Ji(e) && (e = [e]);
                for (let n = 0; n < e.length; n++)
                    t.removeEventListener(e[n], this.listeners[e[n]], o)
            }
            destroy() {
                delete this.listeners
            }
        }
        function oa(e, t, o) {
            const n = new ta
              , i = {
                mount() {
                    this.bind()
                },
                bind() {
                    n.on("resize", window, function(e, t, o={}) {
                        let n, i, a, r, s = 0;
                        const l = function() {
                            s = !1 === o.leading ? 0 : ea(),
                            n = null,
                            r = e.apply(i, a),
                            n || (i = a = null)
                        }
                          , c = function() {
                            let c = ea();
                            s || !1 !== o.leading || (s = c);
                            let d = t - (c - s);
                            return i = this,
                            a = arguments,
                            d <= 0 || d > t ? (n && (clearTimeout(n),
                            n = null),
                            s = c,
                            r = e.apply(i, a),
                            n || (i = a = null)) : n || !1 === o.trailing || (n = setTimeout(l, d)),
                            r
                        };
                        return c.cancel = function() {
                            clearTimeout(n),
                            s = 0,
                            n = i = a = null
                        }
                        ,
                        c
                    }(( () => {
                        o.emit("resize")
                    }
                    ), e.settings.throttle))
                },
                unbind() {
                    n.off("resize", window)
                }
            };
            return o.on("destroy", ( () => {
                i.unbind(),
                n.destroy()
            }
            )),
            i
        }
        const na = (e, t, o) => {
            const n = Qi(e, 0, o);
            return o.on("update", ( () => {
                n.slides[0].parentNode || (n.slides = Array.prototype.slice.call(n.wrapper.children).filter((t => !t.classList.contains(e.settings.classes.cloneSlide))))
            }
            )),
            n
        }
          , ia = (e, t, o) => {
            const n = oa(e, 0, o)
              , i = ge(et.DEFAULT_RESIZE_THROTTLE_DELAY_MS, ( () => {
                o.emit("resize")
            }
            ))
              , a = new ResizeObserver(i);
            return n.bind = () => {
                a.observe(t.Html.root)
            }
            ,
            o.on("destroy", ( () => {
                a.unobserve(t.Html.root)
            }
            )),
            n
        }
          , aa = e => (t, o, n) => {
            const i = function(e, t, o) {
                const n = {
                    mount() {
                        this.items = [],
                        e.isType("carousel") && (this.items = this.collect())
                    },
                    collect(o=[]) {
                        const {slides: n} = t.Html
                          , {perView: i, classes: a, cloningRatio: r} = e.settings;
                        if (n.length > 0) {
                            const t = i + +!!e.settings.peek + Math.round(i / 2)
                              , s = n.slice(0, t).reverse()
                              , l = n.slice(-1 * t);
                            for (let e = 0; e < Math.max(r, Math.floor(i / n.length)); e++) {
                                for (let e = 0; e < s.length; e++) {
                                    const t = s[e].cloneNode(!0);
                                    t.classList.add(a.slide.clone),
                                    o.push(t)
                                }
                                for (let e = 0; e < l.length; e++) {
                                    const t = l[e].cloneNode(!0);
                                    t.classList.add(a.slide.clone),
                                    o.unshift(t)
                                }
                            }
                        }
                        return o
                    },
                    append() {
                        const {items: e} = this
                          , {wrapper: o, slides: n} = t.Html
                          , i = Math.floor(e.length / 2)
                          , a = e.slice(0, i).reverse()
                          , r = e.slice(-1 * i).reverse()
                          , s = `${t.Sizes.slideWidth}px`;
                        for (let e = 0; e < r.length; e++)
                            o.appendChild(r[e]);
                        for (let e = 0; e < a.length; e++)
                            o.insertBefore(a[e], n[0]);
                        for (let t = 0; t < e.length; t++)
                            e[t].style.width = s
                    },
                    remove() {
                        let {items: e} = this;
                        for (let o = 0; o < e.length; o++)
                            t.Html.wrapper.removeChild(e[o])
                    }
                };
                return Zi(n, "grow", {
                    get: () => (t.Sizes.slideWidth + t.Gaps.value) * n.items.length
                }),
                o.on("update", ( () => {
                    n.remove(),
                    n.mount(),
                    n.append()
                }
                )),
                o.on("build.before", ( () => {
                    e.isType("carousel") && n.append()
                }
                )),
                o.on("destroy", ( () => {
                    n.remove()
                }
                )),
                n
            }(t, o, n)
              , a = "data-copied"
              , r = e => t => (t.querySelectorAll("slot").forEach((t => {
                const o = t.getAttribute("name");
                let n = 1;
                if (o.includes("copy"))
                    e.add(o);
                else {
                    for (; e.has(o + "-copy-" + n); )
                        n++;
                    t.setAttribute("name", o + "-copy-" + n),
                    t.setAttribute("tabindex", -1),
                    e.add(o + "-copy-" + n)
                }
            }
            )),
            t)
              , s = e => {
                e.querySelectorAll(`[${a}]`).forEach((e => e.remove())),
                e.getRootNode().host && s(e.getRootNode().host)
            }
            ;
            return i.append = () => {
                const {items: n} = i
                  , {wrapper: l, slides: c} = o.Html
                  , d = new Set
                  , u = Math.floor(n.length / 2)
                  , p = n.slice(0, u).reverse().map(r(d))
                  , h = n.slice(u, n.length).reverse().map(r(d))
                  , b = `${o.Sizes.slideWidth}px`;
                for (let e = 0; e < h.length; e++)
                    l.appendChild(h[e]);
                for (let e = 0; e < p.length; e++)
                    l.insertBefore(p[e], c[0]);
                for (let e = 0; e < n.length; e++)
                    n[e].style.width = b;
                if (o.Html.slides[0].querySelector("[id=lightbox-content]"))
                    for (let e = 0; e < o.Html.slides.length; e++) {
                        const t = o.Html.slides[e].querySelector("[id=lightbox-content]")
                          , n = t.clientWidth / t.clientHeight
                          , i = .9 * o.Html.slides[e].clientHeight * n;
                        i > o.Sizes.slideWidth && "" !== t.style.width || 0 === i ? t.style.width = "" : i <= o.Sizes.slideWidth && (t.style.width = `${i}px`)
                    }
                "carousel" === t.settings.type && (s(e),
                d.forEach((t => {
                    let o = e;
                    const n = t.split("-")
                      , i = n[0] + "-" + n[1];
                    let r = o.querySelector(`[slot="${i}"]`);
                    for (; r; ) {
                        const e = r.cloneNode(!0);
                        e.setAttribute("slot", t),
                        e.setAttribute(a, ""),
                        o.appendChild(e),
                        "SLOT" === e.tagName ? (e.setAttribute("name", t),
                        o = r.getRootNode().host,
                        r = o?.querySelector(`[slot="${i}"]`)) : r = null
                    }
                }
                )))
            }
            ,
            i.remove = () => {
                for (let e = 0; e < i.items.length; e++)
                    i.items[e].remove()
            }
            ,
            i
        }
          , ra = ({slideIndex: e, activeIndex: t, perView: o, totalSlideNum: n}) => {
            const i = t + o - 1;
            if (i >= n) {
                return e >= t || e <= i % n
            }
            return e >= t && e <= i
        }
        ;
        var sa = q`:host{--icon-size:var(--global-size-600);color:var(--semantic-color-content-inactive);cursor:pointer;display:inline-flex;font:var(--tab-standard-font-label);position:relative}:host(.focus),:host(:focus),:host([active]),:host([focus]){color:var(--semantic-color-content-default)}:host [part=tab-control]{padding:var(--semantic-space-around-vertical-md-mobile) var(--semantic-space-around-horizontal-xl-mobile);user-select:none;white-space:nowrap;width:100%}:host([variant=icon-standard][active]) [part=tab-control]::after,:host([variant=standard][active]) [part=tab-control]::after{background-color:var(--semantic-color-background-icon-selected);border-radius:var(--global-size-25);bottom:0;content:'';height:var(--global-size-50);left:0;position:absolute;width:100%}:host([variant*=icon]) [part=tab-control]{padding:0}:host([variant=icon]) slot[name=icon]::slotted(*){display:block;height:var(--icon-size);margin:0 auto var(--semantic-space-around-vertical-md-mobile) auto;width:var(--icon-size)}:host([variant*=icon]) slot[name=icon]>div[role=presentation]{background-image:var(--icon-image, 'none');background-position:center;background-repeat:no-repeat;background-size:cover;border-radius:50%}:host([variant=icon]) [part=icon]{background-color:var(--global-color-content-400);height:var(--global-size-600);width:var(--global-size-600)}:host([variant=icon-tiny]){background-color:var(--semantic-color-content-inactive);border-radius:50%;height:var(--global-size-150);width:var(--global-size-150)}:host([variant=icon-standard]) [part=tab-control]{align-items:center;content:'';display:inline-flex;padding:var(--semantic-space-around-vertical-md-mobile) var(--semantic-space-around-horizontal-xl-mobile)}:host([variant=icon-standard]) slot[name=icon]::slotted(*){align-items:center;display:inline-flex;height:var(--global-size-250);margin-right:var(--semantic-space-between-xxs);width:var(--global-size-250)}:host([variant=icon-text]){font:var(--semantic-heading-text-sm);max-width:120px;text-align:center}:host([variant=icon-text]) [part=tab-control]{white-space:normal}:host([variant=icon-text]) slot[name=icon]::slotted(*){display:block;height:var(--icon-size);margin:0 auto var(--semantic-space-around-vertical-md-mobile) auto;width:var(--icon-size)}:host([variant=icon-text]) slot:not([name]){display:none}:host([variant=icon-text]) [part=icon]{background-color:var(--global-color-content-400);height:var(--global-size-600);width:var(--global-size-600)}:host([variant=icon-text].focus) [part=icon],:host([variant=icon-text]:focus) [part=icon],:host([variant=icon-text][focus]) [part=icon],:host([variant=icon].focus) [part=icon],:host([variant=icon]:focus) [part=icon],:host([variant=icon][focus]) [part=icon]{background-color:var(--global-color-content-500)}:host([variant=icon-standard].focus) [part=icon],:host([variant=icon-standard]:focus) [part=icon],:host([variant=icon-standard][focus]) [part=icon],:host([variant=icon-tiny].focus),:host([variant=icon-tiny].hover),:host([variant=icon-tiny]:focus),:host([variant=icon-tiny]:hover){background-color:var(--pagination-tab-color-hover)}:host([variant=icon-text][active]) [part=icon],:host([variant=icon][active]) [part=icon]{background-color:var(--semantic-color-content-inactive)}:host([variant=icon-tiny][active]),:host([variant=icon-tiny][active].focus),:host([variant=icon-tiny][active].hover),:host([variant=icon-tiny][active]:focus),:host([variant=icon-tiny][active]:hover){background-color:var(--pagination-tab-color-active)}:host([variant*=icon][image]) [part=icon]{background-color:transparent}:host([variant=dash]){background-color:var(--semantic-color-content-inactive);border-radius:var(--global-size-50);height:var(--global-size-50);width:var(--global-size-300)}:host([variant=dash]) [part=tab-control]{padding:0}:host([variant=dash][active]){background-color:var(--semantic-color-background-icon-selected);height:var(--global-size-75)}:host([variant=dash].focus),:host([variant=dash].hover),:host([variant=dash]:focus),:host([variant=dash]:hover){background-color:var(--global-color-content-800)}:host([variant=dash][active].focus),:host([variant=dash][active].hover),:host([variant=dash][active]:focus),:host([variant=dash][active]:hover){background-color:var(--semantic-color-background-icon-selected)}@media (pointer:fine){:host([variant=icon-text].hover) [part=icon],:host([variant=icon-text]:hover) [part=icon],:host([variant=icon].hover) [part=icon],:host([variant=icon]:hover) [part=icon]{background-color:var(--semantic-color-content-placeholder)}:host(.hover),:host(:hover){color:var(--semantic-color-content-default)}}@media (min-width:720px){:host [part=tab-control]{padding:var(--semantic-space-around-vertical-sm-desktop) var(--semantic-space-around-vertical-xl-desktop);user-select:none;white-space:nowrap;width:100%}:host([variant=icon-text]) [part=icon],:host([variant=icon]) [part=icon]{height:var(--global-size-900);width:var(--global-size-900)}:host([variant=icon-standard]) [part=tab-control]{padding:var(--semantic-space-around-vertical-sm-desktop) var(--semantic-space-around-horizontal-xl-desktop)}:host([variant=dash]){width:var(--global-size-400)}:host([variant=icon-text]) slot[name=icon]::slotted(*),:host([variant=icon-tiny]) slot[name=icon]::slotted(*),:host([variant=icon]) slot[name=icon]::slotted(*){margin:0 auto var(--semantic-space-around-vertical-sm-desktop) auto}}@media (min-width:960px){:host([variant=icon-text]) slot:not([name]){display:contents}:host([variant=icon-text]) [part=icon]{margin:0 auto var(--semantic-space-around-vertical-sm-desktop) auto}:host([variant=icon-standard]) slot[name=icon]::slotted(*){height:var(--global-size-300);margin-right:var(--semantic-space-between-xs);width:var(--global-size-300)}:host([variant=dash]){width:var(--global-size-500)}}`;
        const la = Object.freeze({
            STANDARD: "standard",
            SIMPLE: "simple",
            ICON_STANDARD: "icon-standard",
            ICON: "icon",
            ICON_TINY: "icon-tiny",
            ICON_TEXT: "icon-text",
            PREVIEW: "preview",
            DASH: "dash"
        });
        var ca = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class da extends et {
            static get styles() {
                return [...et.styles, sa]
            }
            constructor() {
                super(),
                this.variant = la.STANDARD,
                this._hasText = this.variant === la.STANDARD || this.variant === la.SIMPLE || this.variant === la.ICON_STANDARD || this.variant === la.ICON_TEXT
            }
            _renderTabContent() {
                return z`${this.variant.includes(la.ICON) ? z`<slot name="icon"><div role="presentation" part="icon"></div></slot>` : null} ${this._hasText ? z`<slot></slot>` : null}`
            }
            render() {
                return this.variant.includes(la.ICON) && this.image && this.style.setProperty("--icon-image", `url(${this.image})`),
                z`<div part="tab-control">${this._renderTabContent()}</div>`
            }
            _setAccessibility() {
                !this.getAttribute("aria-label") && this.label && this.setAttribute("aria-label", this.label),
                this.setAttribute("title", this.getAttribute("aria-label") || "")
            }
            firstUpdated() {
                this._setAccessibility()
            }
            update(e) {
                super.update && super.update(e),
                this.active || this.blur()
            }
        }
        ca([de({
            type: String,
            reflect: !0
        })], da.prototype, "variant", void 0),
        ca([de({
            type: String
        })], da.prototype, "image", void 0),
        ca([de({
            type: String
        })], da.prototype, "label", void 0),
        ca([de({
            type: Boolean
        })], da.prototype, "active", void 0);
        var ua = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let pa = class extends da {
        }
        ;
        pa = ua([t(o.BlzTabControl)], pa);
        var ha = pa
          , ba = q`:host{--gap:0;--animation-play-state-control:'running';--animation-duration-control:0ms;--animation-name-control:grow;display:inline-flex;flex-direction:row;gap:var(--semantic-grid-gap-xs-mobile);max-width:100%;overflow-x:scroll;scrollbar-width:none}:host::-webkit-scrollbar{display:none}[part=tab-content]{align-items:center;display:flex;flex-wrap:wrap;gap:var(--gap)}:host([variant=icons]) [part=tab-content]{--gap:var(--semantic-grid-gap-xl-mobile);justify-content:center}:host([variant=icons-text]) [part=tab-content]{--gap:var(--semantic-grid-gap-xl-mobile);align-items:baseline;display:flex}:host([variant=dash]) [part=tab-content]{--gap:var(--global-size-100)}:host([variant=icons-tiny]) [part=tab-content]{--gap:var(--semantic-grid-gap-xs-mobile)}::slotted(blz-news-card){--content-display:none;--news-card-image-aspect-ratio:4/3;--news-card-content-margin:0;--news-card-heading-font:var(--semantic-heading-text-sm);--news-card-subheading-font:var(--semantic-subheading-text-md);flex-grow:1}:host([variant=preview]) [part=tab-content]{--gap:var(--semantic-grid-gap-xs-mobile);width:var(--content-width-slim)}:host([variant=preview]) ::slotted(blz-news-card){--animation-play-state-news-card:var(--animation-play-state-control);--animation-duration-news-card:var(--animation-duration-control);--animation-name-news-card:var(--animation-name-control);flex:1 1 0}::slotted([slot=play-button]){--play-button-color:var(--semantic-color-content-inactive);--play-button-hover-color:var(--semantic-color-content-default);--play-button-focus-color:var(--semantic-color-content-default);background:0 0}::slotted([slot=play-button].hover),::slotted([slot=play-button]:hover){--play-button-hover-color:var(--semantic-color-content-default)}@media (min-width:960px){:host([variant=icons]) [part=tab-content]{--gap:var(--semantic-grid-gap-md-desktop)}::slotted(blz-news-card){--news-card-content-margin:var(--global-size-150) var(--semantic-space-around-horizontal-xs);--news-card-image-aspect-ratio:16/9;--content-display:flex;height:100%}:host([variant=preview]) [part=tab-content]{--gap:var(--semantic-grid-gap-xs-desktop)}}@media (min-width:720px){:host([variant=icons-text]) [part=tab-content]{--gap:var(--semantic-grid-gap-md-desktop);display:grid;grid-auto-columns:minmax(0,1fr);grid-auto-flow:column}}`;
        var ga = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class ma extends et {
            constructor() {
                super(...arguments),
                this.variant = la.STANDARD,
                this.activeIndex = 0,
                this.animation = !1,
                this._setIndexByInteraction = e => {
                    const {target: t} = e;
                    ("click" === e.type || ma._KEYPRESS_STATES.includes(e.key)) && (this._tabs?.forEach(( (e, o) => {
                        e === t || e.contains(t) ? (e.setAttribute("tabindex", 0),
                        e.setAttribute(ma._ACTIVE_ELEMENT, !0),
                        this.activeIndex = o) : (e.setAttribute("tabindex", -1),
                        e.removeAttribute(ma._ACTIVE_ELEMENT))
                    }
                    )),
                    this._dispatchIndexChange())
                }
            }
            static get styles() {
                return [...et.styles, ba]
            }
            render() {
                return z`<slot name="play-button"></slot><div part="tab-content"><slot @slotchange="${this._setUpIndex}" @click="${this._setIndexByInteraction}" @keypress="${this._setIndexByInteraction}"></slot></div>`
            }
            _setUpIndex() {
                this._tabs?.forEach(( (e, t) => {
                    const o = this.variant.includes("icons") ? "icon" : this.variant;
                    e.variant.includes(o) || (e.variant = "icon" === o ? this.variant.replace("icons", "icon") : o),
                    t === this.activeIndex ? (e.setAttribute("tabindex", 0),
                    e.setAttribute(ma._ACTIVE_ELEMENT, !0)) : (e.setAttribute("tabindex", -1),
                    e.removeAttribute(ma._ACTIVE_ELEMENT))
                }
                )),
                this._dispatchIndexChange()
            }
            _navigate(e) {
                if (this._tabs.length && ma._SUPPORT_KEYS.includes(e.key)) {
                    const t = {
                        length: this._tabs.length,
                        callback: e => {
                            this._tabs[e]?.focus()
                        }
                    };
                    t.index = this._tabs.findIndex((t => t.contains(e.target))),
                    -1 !== t.index && fe(t)(e)
                }
            }
            _dispatchIndexChange() {
                this.dispatchEvent(new CustomEvent("blz-tab-controls:index-change",{
                    composed: !0,
                    detail: {
                        activeIndex: this.activeIndex,
                        total: this._tabs.length
                    }
                }))
            }
            _setVariant() {
                for (const e of this._tabs)
                    e.variant = this.variant,
                    this.variant.includes("icons") ? e.variant = this.variant.replace("icons", "icon") : e.variant = this.variant
            }
            firstUpdated(e) {
                super.firstUpdated(e),
                Ee(this),
                this._setVariant(),
                this.addEventListener("keydown", this._navigate)
            }
            updated(e) {
                e.has("activeIndex") && this._setUpIndex()
            }
            disconnectedCallback() {
                super.disconnectedCallback(),
                this.removeEventListener("keydown", this._navigate)
            }
        }
        ma._ACTIVE_ELEMENT = "active",
        ma._KEYPRESS_STATES = ["Enter", " "],
        ma._SUPPORT_KEYS = ["ArrowLeft", "ArrowRight", "Home", "End"];
        var va = ma;
        ga([de({
            type: String
        })], ma.prototype, "variant", void 0),
        ga([de({
            attribute: "active-index",
            type: Number,
            reflect: !0
        })], ma.prototype, "activeIndex", void 0),
        ga([de({
            type: Boolean
        })], ma.prototype, "animation", void 0),
        ga([function(e) {
            return (t, o) => {
                const {slot: n, selector: i} = e ?? {}
                  , a = "slot" + (n ? `[name=${n}]` : ":not([name])");
                return ue(t, o, {
                    get() {
                        const t = this.renderRoot?.querySelector(a)
                          , o = t?.assignedElements(e) ?? [];
                        return void 0 === i ? o : o.filter((e => e.matches(i)))
                    }
                })
            }
        }()], ma.prototype, "_tabs", void 0);
        var fa = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let ya = class extends va {
        }
        ;
        ya = fa([t(o.BlzTabControls)], ya);
        var wa = ya;
        function _a(e, t) {
            var o = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                o.push.apply(o, n)
            }
            return o
        }
        function xa(e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {};
                t % 2 ? _a(Object(o), !0).forEach((function(t) {
                    Ea(e, t, o[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : _a(Object(o)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                }
                ))
            }
            return e
        }
        function za(e) {
            return za = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            za(e)
        }
        function ka(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function Sa(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function Aa(e, t, o) {
            return t && Sa(e.prototype, t),
            o && Sa(e, o),
            e
        }
        function Ea(e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o,
            e
        }
        function Ca(e) {
            return Ca = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            Ca(e)
        }
        function Oa(e, t) {
            return Oa = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            Oa(e, t)
        }
        function Ba(e, t) {
            if (t && ("object" == typeof t || "function" == typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        }
        function Pa(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var o, n = Ca(e);
                if (t) {
                    var i = Ca(this).constructor;
                    o = Reflect.construct(n, arguments, i)
                } else
                    o = n.apply(this, arguments);
                return Ba(this, o)
            }
        }
        function Ta() {
            return Ta = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, o) {
                var n = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Ca(e)); )
                        ;
                    return e
                }(e, t);
                if (n) {
                    var i = Object.getOwnPropertyDescriptor(n, t);
                    return i.get ? i.get.call(arguments.length < 3 ? e : o) : i.value
                }
            }
            ,
            Ta.apply(this, arguments)
        }
        var La = {
            type: "slider",
            startAt: 0,
            perView: 1,
            focusAt: 0,
            gap: 10,
            autoplay: !1,
            hoverpause: !0,
            keyboard: !0,
            bound: !1,
            swipeThreshold: 80,
            dragThreshold: 120,
            perSwipe: "",
            touchRatio: .5,
            touchAngle: 45,
            animationDuration: 400,
            rewind: !0,
            rewindDuration: 800,
            animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
            waitForTransition: !0,
            throttle: 10,
            direction: "ltr",
            peek: 0,
            cloningRatio: 1,
            breakpoints: {},
            classes: {
                swipeable: "glide--swipeable",
                dragging: "glide--dragging",
                direction: {
                    ltr: "glide--ltr",
                    rtl: "glide--rtl"
                },
                type: {
                    slider: "glide--slider",
                    carousel: "glide--carousel"
                },
                slide: {
                    clone: "glide__slide--clone",
                    active: "glide__slide--active"
                },
                arrow: {
                    disabled: "glide__arrow--disabled"
                },
                nav: {
                    active: "glide__bullet--active"
                }
            }
        };
        function Ia(e) {
            console.error("[Glide warn]: ".concat(e))
        }
        function Ra(e) {
            return parseInt(e)
        }
        function $a(e) {
            return "string" == typeof e
        }
        function ja(e) {
            var t = za(e);
            return "function" === t || "object" === t && !!e
        }
        function Da(e) {
            return "function" == typeof e
        }
        function Na(e) {
            return void 0 === e
        }
        function Ma(e) {
            return e.constructor === Array
        }
        function Fa(e, t, o) {
            Object.defineProperty(e, t, o)
        }
        function Ua(e, t) {
            var o = Object.assign({}, e, t);
            if (t.hasOwnProperty("classes")) {
                o.classes = Object.assign({}, e.classes, t.classes);
                ["direction", "type", "slide", "arrow", "nav"].forEach((function(n) {
                    t.classes.hasOwnProperty(n) && (o.classes[n] = xa(xa({}, e.classes[n]), t.classes[n]))
                }
                ))
            }
            return t.hasOwnProperty("breakpoints") && (o.breakpoints = Object.assign({}, e.breakpoints, t.breakpoints)),
            o
        }
        var Ha = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                ka(this, e),
                this.events = t,
                this.hop = t.hasOwnProperty
            }
            return Aa(e, [{
                key: "on",
                value: function(e, t) {
                    if (!Ma(e)) {
                        this.hop.call(this.events, e) || (this.events[e] = []);
                        var o = this.events[e].push(t) - 1;
                        return {
                            remove: function() {
                                delete this.events[e][o]
                            }
                        }
                    }
                    for (var n = 0; n < e.length; n++)
                        this.on(e[n], t)
                }
            }, {
                key: "emit",
                value: function(e, t) {
                    if (Ma(e))
                        for (var o = 0; o < e.length; o++)
                            this.emit(e[o], t);
                    else
                        this.hop.call(this.events, e) && this.events[e].forEach((function(e) {
                            e(t || {})
                        }
                        ))
                }
            }]),
            e
        }()
          , Va = function() {
            function e(t) {
                var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                ka(this, e),
                this._c = {},
                this._t = [],
                this._e = new Ha,
                this.disabled = !1,
                this.selector = t,
                this.settings = Ua(La, o),
                this.index = this.settings.startAt
            }
            return Aa(e, [{
                key: "mount",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this._e.emit("mount.before"),
                    ja(e) ? this._c = function(e, t, o) {
                        var n = {};
                        for (var i in t)
                            Da(t[i]) ? n[i] = t[i](e, n, o) : Ia("Extension must be a function");
                        for (var a in n)
                            Da(n[a].mount) && n[a].mount();
                        return n
                    }(this, e, this._e) : Ia("You need to provide a object on `mount()`"),
                    this._e.emit("mount.after"),
                    this
                }
            }, {
                key: "mutate",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return Ma(e) ? this._t = e : Ia("You need to provide a array on `mutate()`"),
                    this
                }
            }, {
                key: "update",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this.settings = Ua(this.settings, e),
                    e.hasOwnProperty("startAt") && (this.index = e.startAt),
                    this._e.emit("update"),
                    this
                }
            }, {
                key: "go",
                value: function(e) {
                    return this._c.Run.make(e),
                    this
                }
            }, {
                key: "move",
                value: function(e) {
                    return this._c.Transition.disable(),
                    this._c.Move.make(e),
                    this
                }
            }, {
                key: "destroy",
                value: function() {
                    return this._e.emit("destroy"),
                    this
                }
            }, {
                key: "play",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return e && (this.settings.autoplay = e),
                    this._e.emit("play"),
                    this
                }
            }, {
                key: "pause",
                value: function() {
                    return this._e.emit("pause"),
                    this
                }
            }, {
                key: "disable",
                value: function() {
                    return this.disabled = !0,
                    this
                }
            }, {
                key: "enable",
                value: function() {
                    return this.disabled = !1,
                    this
                }
            }, {
                key: "on",
                value: function(e, t) {
                    return this._e.on(e, t),
                    this
                }
            }, {
                key: "isType",
                value: function(e) {
                    return this.settings.type === e
                }
            }, {
                key: "settings",
                get: function() {
                    return this._o
                },
                set: function(e) {
                    ja(e) ? this._o = e : Ia("Options must be an `object` instance.")
                }
            }, {
                key: "index",
                get: function() {
                    return this._i
                },
                set: function(e) {
                    this._i = Ra(e)
                }
            }, {
                key: "type",
                get: function() {
                    return this.settings.type
                }
            }, {
                key: "disabled",
                get: function() {
                    return this._d
                },
                set: function(e) {
                    this._d = !!e
                }
            }]),
            e
        }();
        function qa() {
            return (new Date).getTime()
        }
        function Ga(e, t) {
            var o, n, i, a, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = 0, l = function() {
                s = !1 === r.leading ? 0 : qa(),
                o = null,
                a = e.apply(n, i),
                o || (n = i = null)
            }, c = function() {
                var c = qa();
                s || !1 !== r.leading || (s = c);
                var d = t - (c - s);
                return n = this,
                i = arguments,
                d <= 0 || d > t ? (o && (clearTimeout(o),
                o = null),
                s = c,
                a = e.apply(n, i),
                o || (n = i = null)) : o || !1 === r.trailing || (o = setTimeout(l, d)),
                a
            };
            return c.cancel = function() {
                clearTimeout(o),
                s = 0,
                o = n = i = null
            }
            ,
            c
        }
        var Wa = {
            ltr: ["marginLeft", "marginRight"],
            rtl: ["marginRight", "marginLeft"]
        };
        function Ya(e) {
            if (e && e.parentNode) {
                for (var t = e.parentNode.firstChild, o = []; t; t = t.nextSibling)
                    1 === t.nodeType && t !== e && o.push(t);
                return o
            }
            return []
        }
        function Ka(e) {
            return Array.prototype.slice.call(e)
        }
        var Xa = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                ka(this, e),
                this.listeners = t
            }
            return Aa(e, [{
                key: "on",
                value: function(e, t, o) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    $a(e) && (e = [e]);
                    for (var i = 0; i < e.length; i++)
                        this.listeners[e[i]] = o,
                        t.addEventListener(e[i], this.listeners[e[i]], n)
                }
            }, {
                key: "off",
                value: function(e, t) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    $a(e) && (e = [e]);
                    for (var n = 0; n < e.length; n++)
                        t.removeEventListener(e[n], this.listeners[e[n]], o)
                }
            }, {
                key: "destroy",
                value: function() {
                    delete this.listeners
                }
            }]),
            e
        }();
        var Za = ["ltr", "rtl"]
          , Ja = {
            ">": "<",
            "<": ">",
            "=": "="
        };
        function Qa(e, t) {
            return {
                modify: function(e) {
                    return t.Direction.is("rtl") ? -e : e
                }
            }
        }
        function er(e, t) {
            return {
                modify: function(e) {
                    var o = Math.floor(e / t.Sizes.slideWidth);
                    return e + t.Gaps.value * o
                }
            }
        }
        function tr(e, t) {
            return {
                modify: function(e) {
                    return e + t.Clones.grow / 2
                }
            }
        }
        function or(e, t) {
            return {
                modify: function(o) {
                    if (e.settings.focusAt >= 0) {
                        var n = t.Peek.value;
                        return ja(n) ? o - n.before : o - n
                    }
                    return o
                }
            }
        }
        function nr(e, t) {
            return {
                modify: function(o) {
                    var n = t.Gaps.value
                      , i = t.Sizes.width
                      , a = e.settings.focusAt
                      , r = t.Sizes.slideWidth;
                    return "center" === a ? o - (i / 2 - r / 2) : o - r * a - n * a
                }
            }
        }
        var ir = !1;
        try {
            var ar = Object.defineProperty({}, "passive", {
                get: function() {
                    ir = !0
                }
            });
            window.addEventListener("testPassive", null, ar),
            window.removeEventListener("testPassive", null, ar)
        } catch (s) {}
        var rr = ir
          , sr = ["touchstart", "mousedown"]
          , lr = ["touchmove", "mousemove"]
          , cr = ["touchend", "touchcancel", "mouseup", "mouseleave"]
          , dr = ["mousedown", "mousemove", "mouseup", "mouseleave"];
        var ur = '[data-glide-el^="controls"]'
          , pr = "".concat(ur, ' [data-glide-dir*="<"]')
          , hr = "".concat(ur, ' [data-glide-dir*=">"]');
        function br(e) {
            return ja(e) ? (t = e,
            Object.keys(t).sort().reduce((function(e, o) {
                return e[o] = t[o],
                e[o],
                e
            }
            ), {})) : (Ia("Breakpoints option must be an object"),
            {});
            var t
        }
        var gr = {
            Html: function(e, t, o) {
                var n = {
                    mount: function() {
                        this.root = e.selector,
                        this.track = this.root.querySelector('[data-glide-el="track"]'),
                        this.collectSlides()
                    },
                    collectSlides: function() {
                        this.slides = Ka(this.wrapper.children).filter((function(t) {
                            return !t.classList.contains(e.settings.classes.slide.clone)
                        }
                        ))
                    }
                };
                return Fa(n, "root", {
                    get: function() {
                        return n._r
                    },
                    set: function(e) {
                        $a(e) && (e = document.querySelector(e)),
                        null !== e ? n._r = e : Ia("Root element must be a existing Html node")
                    }
                }),
                Fa(n, "track", {
                    get: function() {
                        return n._t
                    },
                    set: function(e) {
                        n._t = e
                    }
                }),
                Fa(n, "wrapper", {
                    get: function() {
                        return n.track.children[0]
                    }
                }),
                o.on("update", (function() {
                    n.collectSlides()
                }
                )),
                n
            },
            Translate: function(e, t, o) {
                var n = {
                    set: function(o) {
                        var n = function(e, t, o) {
                            var n = [er, tr, or, nr].concat(e._t, [Qa]);
                            return {
                                mutate: function(i) {
                                    for (var a = 0; a < n.length; a++) {
                                        var r = n[a];
                                        Da(r) && Da(r().modify) ? i = r(e, t, o).modify(i) : Ia("Transformer should be a function that returns an object with `modify()` method")
                                    }
                                    return i
                                }
                            }
                        }(e, t).mutate(o)
                          , i = "translate3d(".concat(-1 * n, "px, 0px, 0px)");
                        t.Html.wrapper.style.mozTransform = i,
                        t.Html.wrapper.style.webkitTransform = i,
                        t.Html.wrapper.style.transform = i
                    },
                    remove: function() {
                        t.Html.wrapper.style.transform = ""
                    },
                    getStartIndex: function() {
                        var o = t.Sizes.length
                          , n = e.index
                          , i = e.settings.perView;
                        return t.Run.isOffset(">") || t.Run.isOffset("|>") ? o + (n - i) : (n + i) % o
                    },
                    getTravelDistance: function() {
                        var o = t.Sizes.slideWidth * e.settings.perView;
                        return t.Run.isOffset(">") || t.Run.isOffset("|>") ? -1 * o : o
                    }
                };
                return o.on("move", (function(i) {
                    if (!e.isType("carousel") || !t.Run.isOffset())
                        return n.set(i.movement);
                    t.Transition.after((function() {
                        o.emit("translate.jump"),
                        n.set(t.Sizes.slideWidth * e.index)
                    }
                    ));
                    var a = t.Sizes.slideWidth * t.Translate.getStartIndex();
                    return n.set(a - t.Translate.getTravelDistance())
                }
                )),
                o.on("destroy", (function() {
                    n.remove()
                }
                )),
                n
            },
            Transition: function(e, t, o) {
                var n = !1
                  , i = {
                    compose: function(t) {
                        var o = e.settings;
                        return n ? "".concat(t, " 0ms ").concat(o.animationTimingFunc) : "".concat(t, " ").concat(this.duration, "ms ").concat(o.animationTimingFunc)
                    },
                    set: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
                        t.Html.wrapper.style.transition = this.compose(e)
                    },
                    remove: function() {
                        t.Html.wrapper.style.transition = ""
                    },
                    after: function(e) {
                        setTimeout((function() {
                            e()
                        }
                        ), this.duration)
                    },
                    enable: function() {
                        n = !1,
                        this.set()
                    },
                    disable: function() {
                        n = !0,
                        this.set()
                    }
                };
                return Fa(i, "duration", {
                    get: function() {
                        var o = e.settings;
                        return e.isType("slider") && t.Run.offset ? o.rewindDuration : o.animationDuration
                    }
                }),
                o.on("move", (function() {
                    i.set()
                }
                )),
                o.on(["build.before", "resize", "translate.jump"], (function() {
                    i.disable()
                }
                )),
                o.on("run", (function() {
                    i.enable()
                }
                )),
                o.on("destroy", (function() {
                    i.remove()
                }
                )),
                i
            },
            Direction: function(e, t, o) {
                var n = {
                    mount: function() {
                        this.value = e.settings.direction
                    },
                    resolve: function(e) {
                        var t = e.slice(0, 1);
                        return this.is("rtl") ? e.split(t).join(Ja[t]) : e
                    },
                    is: function(e) {
                        return this.value === e
                    },
                    addClass: function() {
                        t.Html.root.classList.add(e.settings.classes.direction[this.value])
                    },
                    removeClass: function() {
                        t.Html.root.classList.remove(e.settings.classes.direction[this.value])
                    }
                };
                return Fa(n, "value", {
                    get: function() {
                        return n._v
                    },
                    set: function(e) {
                        Za.indexOf(e) > -1 ? n._v = e : Ia("Direction value must be `ltr` or `rtl`")
                    }
                }),
                o.on(["destroy", "update"], (function() {
                    n.removeClass()
                }
                )),
                o.on("update", (function() {
                    n.mount()
                }
                )),
                o.on(["build.before", "update"], (function() {
                    n.addClass()
                }
                )),
                n
            },
            Peek: function(e, t, o) {
                var n = {
                    mount: function() {
                        this.value = e.settings.peek
                    }
                };
                return Fa(n, "value", {
                    get: function() {
                        return n._v
                    },
                    set: function(e) {
                        ja(e) ? (e.before = Ra(e.before),
                        e.after = Ra(e.after)) : e = Ra(e),
                        n._v = e
                    }
                }),
                Fa(n, "reductor", {
                    get: function() {
                        var t = n.value
                          , o = e.settings.perView;
                        return ja(t) ? t.before / o + t.after / o : 2 * t / o
                    }
                }),
                o.on(["resize", "update"], (function() {
                    n.mount()
                }
                )),
                n
            },
            Sizes: function(e, t, o) {
                var n = {
                    setupSlides: function() {
                        for (var e = "".concat(this.slideWidth, "px"), o = t.Html.slides, n = 0; n < o.length; n++)
                            o[n].style.width = e
                    },
                    setupWrapper: function() {
                        t.Html.wrapper.style.width = "".concat(this.wrapperSize, "px")
                    },
                    remove: function() {
                        for (var e = t.Html.slides, o = 0; o < e.length; o++)
                            e[o].style.width = "";
                        t.Html.wrapper.style.width = ""
                    }
                };
                return Fa(n, "length", {
                    get: function() {
                        return t.Html.slides.length
                    }
                }),
                Fa(n, "width", {
                    get: function() {
                        return t.Html.track.offsetWidth
                    }
                }),
                Fa(n, "wrapperSize", {
                    get: function() {
                        return n.slideWidth * n.length + t.Gaps.grow + t.Clones.grow
                    }
                }),
                Fa(n, "slideWidth", {
                    get: function() {
                        return n.width / e.settings.perView - t.Peek.reductor - t.Gaps.reductor
                    }
                }),
                o.on(["build.before", "resize", "update"], (function() {
                    n.setupSlides(),
                    n.setupWrapper()
                }
                )),
                o.on("destroy", (function() {
                    n.remove()
                }
                )),
                n
            },
            Gaps: function(e, t, o) {
                var n = {
                    apply: function(e) {
                        for (var o = 0, n = e.length; o < n; o++) {
                            var i = e[o].style
                              , a = t.Direction.value;
                            i[Wa[a][0]] = 0 !== o ? "".concat(this.value / 2, "px") : "",
                            o !== e.length - 1 ? i[Wa[a][1]] = "".concat(this.value / 2, "px") : i[Wa[a][1]] = ""
                        }
                    },
                    remove: function(e) {
                        for (var t = 0, o = e.length; t < o; t++) {
                            var n = e[t].style;
                            n.marginLeft = "",
                            n.marginRight = ""
                        }
                    }
                };
                return Fa(n, "value", {
                    get: function() {
                        return Ra(e.settings.gap)
                    }
                }),
                Fa(n, "grow", {
                    get: function() {
                        return n.value * t.Sizes.length
                    }
                }),
                Fa(n, "reductor", {
                    get: function() {
                        var t = e.settings.perView;
                        return n.value * (t - 1) / t
                    }
                }),
                o.on(["build.after", "update"], Ga((function() {
                    n.apply(t.Html.wrapper.children)
                }
                ), 30)),
                o.on("destroy", (function() {
                    n.remove(t.Html.wrapper.children)
                }
                )),
                n
            },
            Move: function(e, t, o) {
                var n = {
                    mount: function() {
                        this._o = 0
                    },
                    make: function() {
                        var e = this
                          , n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.offset = n,
                        o.emit("move", {
                            movement: this.value
                        }),
                        t.Transition.after((function() {
                            o.emit("move.after", {
                                movement: e.value
                            })
                        }
                        ))
                    }
                };
                return Fa(n, "offset", {
                    get: function() {
                        return n._o
                    },
                    set: function(e) {
                        n._o = Na(e) ? 0 : Ra(e)
                    }
                }),
                Fa(n, "translate", {
                    get: function() {
                        return t.Sizes.slideWidth * e.index
                    }
                }),
                Fa(n, "value", {
                    get: function() {
                        var e = this.offset
                          , o = this.translate;
                        return t.Direction.is("rtl") ? o + e : o - e
                    }
                }),
                o.on(["build.before", "run"], (function() {
                    n.make()
                }
                )),
                n
            },
            Clones: function(e, t, o) {
                var n = {
                    mount: function() {
                        this.items = [],
                        e.isType("carousel") && (this.items = this.collect())
                    },
                    collect: function() {
                        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                          , n = t.Html.slides
                          , i = e.settings
                          , a = i.perView
                          , r = i.classes
                          , s = i.cloningRatio;
                        if (n.length > 0)
                            for (var l = a + +!!e.settings.peek + Math.round(a / 2), c = n.slice(0, l).reverse(), d = n.slice(-1 * l), u = 0; u < Math.max(s, Math.floor(a / n.length)); u++) {
                                for (var p = 0; p < c.length; p++) {
                                    var h = c[p].cloneNode(!0);
                                    h.classList.add(r.slide.clone),
                                    o.push(h)
                                }
                                for (var b = 0; b < d.length; b++) {
                                    var g = d[b].cloneNode(!0);
                                    g.classList.add(r.slide.clone),
                                    o.unshift(g)
                                }
                            }
                        return o
                    },
                    append: function() {
                        for (var e = this.items, o = t.Html, n = o.wrapper, i = o.slides, a = Math.floor(e.length / 2), r = e.slice(0, a).reverse(), s = e.slice(-1 * a).reverse(), l = "".concat(t.Sizes.slideWidth, "px"), c = 0; c < s.length; c++)
                            n.appendChild(s[c]);
                        for (var d = 0; d < r.length; d++)
                            n.insertBefore(r[d], i[0]);
                        for (var u = 0; u < e.length; u++)
                            e[u].style.width = l
                    },
                    remove: function() {
                        for (var e = this.items, o = 0; o < e.length; o++)
                            t.Html.wrapper.removeChild(e[o])
                    }
                };
                return Fa(n, "grow", {
                    get: function() {
                        return (t.Sizes.slideWidth + t.Gaps.value) * n.items.length
                    }
                }),
                o.on("update", (function() {
                    n.remove(),
                    n.mount(),
                    n.append()
                }
                )),
                o.on("build.before", (function() {
                    e.isType("carousel") && n.append()
                }
                )),
                o.on("destroy", (function() {
                    n.remove()
                }
                )),
                n
            },
            Resize: function(e, t, o) {
                var n = new Xa
                  , i = {
                    mount: function() {
                        this.bind()
                    },
                    bind: function() {
                        n.on("resize", window, Ga((function() {
                            o.emit("resize")
                        }
                        ), e.settings.throttle))
                    },
                    unbind: function() {
                        n.off("resize", window)
                    }
                };
                return o.on("destroy", (function() {
                    i.unbind(),
                    n.destroy()
                }
                )),
                i
            },
            Build: function(e, t, o) {
                var n = {
                    mount: function() {
                        o.emit("build.before"),
                        this.typeClass(),
                        this.activeClass(),
                        o.emit("build.after")
                    },
                    typeClass: function() {
                        t.Html.root.classList.add(e.settings.classes.type[e.settings.type])
                    },
                    activeClass: function() {
                        var o = e.settings.classes
                          , n = t.Html.slides[e.index];
                        n && (n.classList.add(o.slide.active),
                        Ya(n).forEach((function(e) {
                            e.classList.remove(o.slide.active)
                        }
                        )))
                    },
                    removeClasses: function() {
                        var o = e.settings.classes
                          , n = o.type
                          , i = o.slide;
                        t.Html.root.classList.remove(n[e.settings.type]),
                        t.Html.slides.forEach((function(e) {
                            e.classList.remove(i.active)
                        }
                        ))
                    }
                };
                return o.on(["destroy", "update"], (function() {
                    n.removeClasses()
                }
                )),
                o.on(["resize", "update"], (function() {
                    n.mount()
                }
                )),
                o.on("move.after", (function() {
                    n.activeClass()
                }
                )),
                n
            },
            Run: function(e, t, o) {
                var n = {
                    mount: function() {
                        this._o = !1
                    },
                    make: function(n) {
                        var i = this;
                        e.disabled || (!e.settings.waitForTransition || e.disable(),
                        this.move = n,
                        o.emit("run.before", this.move),
                        this.calculate(),
                        o.emit("run", this.move),
                        t.Transition.after((function() {
                            i.isStart() && o.emit("run.start", i.move),
                            i.isEnd() && o.emit("run.end", i.move),
                            i.isOffset() && (i._o = !1,
                            o.emit("run.offset", i.move)),
                            o.emit("run.after", i.move),
                            e.enable()
                        }
                        )))
                    },
                    calculate: function() {
                        var t = this.move
                          , o = this.length
                          , i = t.steps
                          , a = t.direction
                          , r = 1;
                        if ("=" === a)
                            return e.settings.bound && Ra(i) > o ? void (e.index = o) : void (e.index = i);
                        if (">" !== a || ">" !== i)
                            if ("<" !== a || "<" !== i) {
                                if ("|" === a && (r = e.settings.perView || 1),
                                ">" === a || "|" === a && ">" === i) {
                                    var s = function(t) {
                                        var o = e.index;
                                        if (e.isType("carousel"))
                                            return o + t;
                                        return o + (t - o % t)
                                    }(r);
                                    return s > o && (this._o = !0),
                                    void (e.index = function(t, o) {
                                        var i = n.length;
                                        if (t <= i)
                                            return t;
                                        if (e.isType("carousel"))
                                            return t - (i + 1);
                                        if (e.settings.rewind)
                                            return n.isBound() && !n.isEnd() ? i : 0;
                                        if (n.isBound())
                                            return i;
                                        return Math.floor(i / o) * o
                                    }(s, r))
                                }
                                if ("<" === a || "|" === a && "<" === i) {
                                    var l = function(t) {
                                        var o = e.index;
                                        if (e.isType("carousel"))
                                            return o - t;
                                        var n = Math.ceil(o / t);
                                        return (n - 1) * t
                                    }(r);
                                    return l < 0 && (this._o = !0),
                                    void (e.index = function(t, o) {
                                        var i = n.length;
                                        if (t >= 0)
                                            return t;
                                        if (e.isType("carousel"))
                                            return t + (i + 1);
                                        if (e.settings.rewind)
                                            return n.isBound() && n.isStart() ? i : Math.floor(i / o) * o;
                                        return 0
                                    }(l, r))
                                }
                                Ia("Invalid direction pattern [".concat(a).concat(i, "] has been used"))
                            } else
                                e.index = 0;
                        else
                            e.index = o
                    },
                    isStart: function() {
                        return e.index <= 0
                    },
                    isEnd: function() {
                        return e.index >= this.length
                    },
                    isOffset: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                        return e ? !!this._o && ("|>" === e ? "|" === this.move.direction && ">" === this.move.steps : "|<" === e ? "|" === this.move.direction && "<" === this.move.steps : this.move.direction === e) : this._o
                    },
                    isBound: function() {
                        return e.isType("slider") && "center" !== e.settings.focusAt && e.settings.bound
                    }
                };
                return Fa(n, "move", {
                    get: function() {
                        return this._m
                    },
                    set: function(e) {
                        var t = e.substr(1);
                        this._m = {
                            direction: e.substr(0, 1),
                            steps: t ? Ra(t) ? Ra(t) : t : 0
                        }
                    }
                }),
                Fa(n, "length", {
                    get: function() {
                        var o = e.settings
                          , n = t.Html.slides.length;
                        return this.isBound() ? n - 1 - (Ra(o.perView) - 1) + Ra(o.focusAt) : n - 1
                    }
                }),
                Fa(n, "offset", {
                    get: function() {
                        return this._o
                    }
                }),
                n
            },
            Swipe: function(e, t, o) {
                var n = new Xa
                  , i = 0
                  , a = 0
                  , r = 0
                  , s = !1
                  , l = !!rr && {
                    passive: !0
                }
                  , c = {
                    mount: function() {
                        this.bindSwipeStart()
                    },
                    start: function(t) {
                        if (!s && !e.disabled) {
                            this.disable();
                            var n = this.touches(t);
                            i = null,
                            a = Ra(n.pageX),
                            r = Ra(n.pageY),
                            this.bindSwipeMove(),
                            this.bindSwipeEnd(),
                            o.emit("swipe.start")
                        }
                    },
                    move: function(n) {
                        if (!e.disabled) {
                            var s = e.settings
                              , l = s.touchAngle
                              , c = s.touchRatio
                              , d = s.classes
                              , u = this.touches(n)
                              , p = Ra(u.pageX) - a
                              , h = Ra(u.pageY) - r
                              , b = Math.abs(p << 2)
                              , g = Math.abs(h << 2)
                              , m = Math.sqrt(b + g)
                              , v = Math.sqrt(g);
                            if (!(180 * (i = Math.asin(v / m)) / Math.PI < l))
                                return !1;
                            n.stopPropagation(),
                            t.Move.make(p * parseFloat(c)),
                            t.Html.root.classList.add(d.dragging),
                            o.emit("swipe.move")
                        }
                    },
                    end: function(n) {
                        if (!e.disabled) {
                            var r = e.settings
                              , s = r.perSwipe
                              , l = r.touchAngle
                              , c = r.classes
                              , d = this.touches(n)
                              , u = this.threshold(n)
                              , p = d.pageX - a
                              , h = 180 * i / Math.PI;
                            this.enable(),
                            p > u && h < l ? t.Run.make(t.Direction.resolve("".concat(s, "<"))) : p < -u && h < l ? t.Run.make(t.Direction.resolve("".concat(s, ">"))) : t.Move.make(),
                            t.Html.root.classList.remove(c.dragging),
                            this.unbindSwipeMove(),
                            this.unbindSwipeEnd(),
                            o.emit("swipe.end")
                        }
                    },
                    bindSwipeStart: function() {
                        var o = this
                          , i = e.settings
                          , a = i.swipeThreshold
                          , r = i.dragThreshold;
                        a && n.on(sr[0], t.Html.wrapper, (function(e) {
                            o.start(e)
                        }
                        ), l),
                        r && n.on(sr[1], t.Html.wrapper, (function(e) {
                            o.start(e)
                        }
                        ), l)
                    },
                    unbindSwipeStart: function() {
                        n.off(sr[0], t.Html.wrapper, l),
                        n.off(sr[1], t.Html.wrapper, l)
                    },
                    bindSwipeMove: function() {
                        var o = this;
                        n.on(lr, t.Html.wrapper, Ga((function(e) {
                            o.move(e)
                        }
                        ), e.settings.throttle), l)
                    },
                    unbindSwipeMove: function() {
                        n.off(lr, t.Html.wrapper, l)
                    },
                    bindSwipeEnd: function() {
                        var e = this;
                        n.on(cr, t.Html.wrapper, (function(t) {
                            e.end(t)
                        }
                        ))
                    },
                    unbindSwipeEnd: function() {
                        n.off(cr, t.Html.wrapper)
                    },
                    touches: function(e) {
                        return dr.indexOf(e.type) > -1 ? e : e.touches[0] || e.changedTouches[0]
                    },
                    threshold: function(t) {
                        var o = e.settings;
                        return dr.indexOf(t.type) > -1 ? o.dragThreshold : o.swipeThreshold
                    },
                    enable: function() {
                        return s = !1,
                        t.Transition.enable(),
                        this
                    },
                    disable: function() {
                        return s = !0,
                        t.Transition.disable(),
                        this
                    }
                };
                return o.on("build.after", (function() {
                    t.Html.root.classList.add(e.settings.classes.swipeable)
                }
                )),
                o.on("destroy", (function() {
                    c.unbindSwipeStart(),
                    c.unbindSwipeMove(),
                    c.unbindSwipeEnd(),
                    n.destroy()
                }
                )),
                c
            },
            Images: function(e, t, o) {
                var n = new Xa
                  , i = {
                    mount: function() {
                        this.bind()
                    },
                    bind: function() {
                        n.on("dragstart", t.Html.wrapper, this.dragstart)
                    },
                    unbind: function() {
                        n.off("dragstart", t.Html.wrapper)
                    },
                    dragstart: function(e) {
                        e.preventDefault()
                    }
                };
                return o.on("destroy", (function() {
                    i.unbind(),
                    n.destroy()
                }
                )),
                i
            },
            Anchors: function(e, t, o) {
                var n = new Xa
                  , i = !1
                  , a = !1
                  , r = {
                    mount: function() {
                        this._a = t.Html.wrapper.querySelectorAll("a"),
                        this.bind()
                    },
                    bind: function() {
                        n.on("click", t.Html.wrapper, this.click)
                    },
                    unbind: function() {
                        n.off("click", t.Html.wrapper)
                    },
                    click: function(e) {
                        a && (e.stopPropagation(),
                        e.preventDefault())
                    },
                    detach: function() {
                        if (a = !0,
                        !i) {
                            for (var e = 0; e < this.items.length; e++)
                                this.items[e].draggable = !1;
                            i = !0
                        }
                        return this
                    },
                    attach: function() {
                        if (a = !1,
                        i) {
                            for (var e = 0; e < this.items.length; e++)
                                this.items[e].draggable = !0;
                            i = !1
                        }
                        return this
                    }
                };
                return Fa(r, "items", {
                    get: function() {
                        return r._a
                    }
                }),
                o.on("swipe.move", (function() {
                    r.detach()
                }
                )),
                o.on("swipe.end", (function() {
                    t.Transition.after((function() {
                        r.attach()
                    }
                    ))
                }
                )),
                o.on("destroy", (function() {
                    r.attach(),
                    r.unbind(),
                    n.destroy()
                }
                )),
                r
            },
            Controls: function(e, t, o) {
                var n = new Xa
                  , i = !!rr && {
                    passive: !0
                }
                  , a = {
                    mount: function() {
                        this._n = t.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),
                        this._c = t.Html.root.querySelectorAll(ur),
                        this._arrowControls = {
                            previous: t.Html.root.querySelectorAll(pr),
                            next: t.Html.root.querySelectorAll(hr)
                        },
                        this.addBindings()
                    },
                    setActive: function() {
                        for (var e = 0; e < this._n.length; e++)
                            this.addClass(this._n[e].children)
                    },
                    removeActive: function() {
                        for (var e = 0; e < this._n.length; e++)
                            this.removeClass(this._n[e].children)
                    },
                    addClass: function(t) {
                        var o = e.settings
                          , n = t[e.index];
                        n && (n.classList.add(o.classes.nav.active),
                        Ya(n).forEach((function(e) {
                            e.classList.remove(o.classes.nav.active)
                        }
                        )))
                    },
                    removeClass: function(t) {
                        var o = t[e.index];
                        null == o || o.classList.remove(e.settings.classes.nav.active)
                    },
                    setArrowState: function() {
                        if (!e.settings.rewind) {
                            var o = a._arrowControls.next
                              , n = a._arrowControls.previous;
                            this.resetArrowState(o, n),
                            0 === e.index && this.disableArrow(n),
                            e.index === t.Run.length && this.disableArrow(o)
                        }
                    },
                    resetArrowState: function() {
                        for (var t = e.settings, o = arguments.length, n = new Array(o), i = 0; i < o; i++)
                            n[i] = arguments[i];
                        n.forEach((function(e) {
                            Ka(e).forEach((function(e) {
                                e.classList.remove(t.classes.arrow.disabled)
                            }
                            ))
                        }
                        ))
                    },
                    disableArrow: function() {
                        for (var t = e.settings, o = arguments.length, n = new Array(o), i = 0; i < o; i++)
                            n[i] = arguments[i];
                        n.forEach((function(e) {
                            Ka(e).forEach((function(e) {
                                e.classList.add(t.classes.arrow.disabled)
                            }
                            ))
                        }
                        ))
                    },
                    addBindings: function() {
                        for (var e = 0; e < this._c.length; e++)
                            this.bind(this._c[e].children)
                    },
                    removeBindings: function() {
                        for (var e = 0; e < this._c.length; e++)
                            this.unbind(this._c[e].children)
                    },
                    bind: function(e) {
                        for (var t = 0; t < e.length; t++)
                            n.on("click", e[t], this.click),
                            n.on("touchstart", e[t], this.click, i)
                    },
                    unbind: function(e) {
                        for (var t = 0; t < e.length; t++)
                            n.off(["click", "touchstart"], e[t])
                    },
                    click: function(e) {
                        rr || "touchstart" !== e.type || e.preventDefault();
                        var o = e.currentTarget.getAttribute("data-glide-dir");
                        t.Run.make(t.Direction.resolve(o))
                    }
                };
                return Fa(a, "items", {
                    get: function() {
                        return a._c
                    }
                }),
                o.on(["mount.after", "move.after"], (function() {
                    a.setActive()
                }
                )),
                o.on(["mount.after", "run"], (function() {
                    a.setArrowState()
                }
                )),
                o.on("destroy", (function() {
                    a.removeBindings(),
                    a.removeActive(),
                    n.destroy()
                }
                )),
                a
            },
            Keyboard: function(e, t, o) {
                var n = new Xa
                  , i = {
                    mount: function() {
                        e.settings.keyboard && this.bind()
                    },
                    bind: function() {
                        n.on("keyup", document, this.press)
                    },
                    unbind: function() {
                        n.off("keyup", document)
                    },
                    press: function(o) {
                        var n = e.settings.perSwipe;
                        ["ArrowRight", "ArrowLeft"].includes(o.code) && t.Run.make(t.Direction.resolve("".concat(n).concat({
                            ArrowRight: ">",
                            ArrowLeft: "<"
                        }[o.code])))
                    }
                };
                return o.on(["destroy", "update"], (function() {
                    i.unbind()
                }
                )),
                o.on("update", (function() {
                    i.mount()
                }
                )),
                o.on("destroy", (function() {
                    n.destroy()
                }
                )),
                i
            },
            Autoplay: function(e, t, o) {
                var n = new Xa
                  , i = {
                    mount: function() {
                        this.enable(),
                        this.start(),
                        e.settings.hoverpause && this.bind()
                    },
                    enable: function() {
                        this._e = !0
                    },
                    disable: function() {
                        this._e = !1
                    },
                    start: function() {
                        var n = this;
                        this._e && (this.enable(),
                        e.settings.autoplay && Na(this._i) && (this._i = setInterval((function() {
                            n.stop(),
                            t.Run.make(">"),
                            n.start(),
                            o.emit("autoplay")
                        }
                        ), this.time)))
                    },
                    stop: function() {
                        this._i = clearInterval(this._i)
                    },
                    bind: function() {
                        var e = this;
                        n.on("mouseover", t.Html.root, (function() {
                            e._e && e.stop()
                        }
                        )),
                        n.on("mouseout", t.Html.root, (function() {
                            e._e && e.start()
                        }
                        ))
                    },
                    unbind: function() {
                        n.off(["mouseover", "mouseout"], t.Html.root)
                    }
                };
                return Fa(i, "time", {
                    get: function() {
                        var o = t.Html.slides[e.index].getAttribute("data-glide-autoplay");
                        return Ra(o || e.settings.autoplay)
                    }
                }),
                o.on(["destroy", "update"], (function() {
                    i.unbind()
                }
                )),
                o.on(["run.before", "swipe.start", "update"], (function() {
                    i.stop()
                }
                )),
                o.on(["pause", "destroy"], (function() {
                    i.disable(),
                    i.stop()
                }
                )),
                o.on(["run.after", "swipe.end"], (function() {
                    i.start()
                }
                )),
                o.on(["play"], (function() {
                    i.enable(),
                    i.start()
                }
                )),
                o.on("update", (function() {
                    i.mount()
                }
                )),
                o.on("destroy", (function() {
                    n.destroy()
                }
                )),
                i
            },
            Breakpoints: function(e, t, o) {
                var n = new Xa
                  , i = e.settings
                  , a = br(i.breakpoints)
                  , r = Object.assign({}, i)
                  , s = {
                    match: function(e) {
                        if (void 0 !== window.matchMedia)
                            for (var t in e)
                                if (e.hasOwnProperty(t) && window.matchMedia("(max-width: ".concat(t, "px)")).matches)
                                    return e[t];
                        return r
                    }
                };
                return Object.assign(i, s.match(a)),
                n.on("resize", window, Ga((function() {
                    e.settings = Ua(i, s.match(a))
                }
                ), e.settings.throttle)),
                o.on("update", (function() {
                    a = br(a),
                    r = Object.assign({}, i)
                }
                )),
                o.on("destroy", (function() {
                    n.off("resize", window)
                }
                )),
                s
            }
        }
          , mr = function(e) {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Oa(e, t)
            }(o, e);
            var t = Pa(o);
            function o() {
                return ka(this, o),
                t.apply(this, arguments)
            }
            return Aa(o, [{
                key: "mount",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Ta(Ca(o.prototype), "mount", this).call(this, Object.assign({}, gr, e))
                }
            }]),
            o
        }(Va)
          , vr = q`.glide{box-sizing:border-box;position:relative;width:100%}.glide *{box-sizing:inherit}.glide__slides,.glide__track{overflow:hidden}.glide__slides{backface-visibility:hidden;display:flex;flex-wrap:nowrap;list-style:none;margin:0;padding:0;position:relative;touch-action:pan-Y;transform-style:preserve-3d;white-space:nowrap;width:100%;will-change:transform}.glide__slide,.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;flex-shrink:0;height:100%;white-space:normal;width:100%}.glide__slide a{-webkit-user-drag:none;-webkit-user-select:none;user-select:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}`
          , fr = q`[aspect-ratio]{--x:16;--y:9;position:relative;width:100%}[aspect-ratio]:before{content:"";display:block;padding-bottom:calc(var(--y)/var(--x)*100%);width:100%}[aspect-ratio="9:16"]{--x:9;--y:16}[aspect-ratio="3:4"]{--x:3;--y:4}[aspect-ratio="4:3"]{--x:4;--y:3}[aspect-ratio="7:8"]{--x:7;--y:8}[aspect-ratio="1:1"]{--x:1;--y:1}`
          , yr = function(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
        }
          , wr = function(e) {
            return e.reduce((function(e, t) {
                return e + t
            }
            ), 0)
        }
          , _r = function() {
            function e(e) {
                this.colors = e
            }
            var t = e.prototype;
            return t.palette = function() {
                return this.colors
            }
            ,
            t.map = function(e) {
                return e
            }
            ,
            e
        }()
          , xr = function() {
            function e(e, t, o) {
                return (e << 10) + (t << 5) + o
            }
            function t(e) {
                var t = []
                  , o = !1;
                function n() {
                    t.sort(e),
                    o = !0
                }
                return {
                    push: function(e) {
                        t.push(e),
                        o = !1
                    },
                    peek: function(e) {
                        return o || n(),
                        void 0 === e && (e = t.length - 1),
                        t[e]
                    },
                    pop: function() {
                        return o || n(),
                        t.pop()
                    },
                    size: function() {
                        return t.length
                    },
                    map: function(e) {
                        return t.map(e)
                    },
                    debug: function() {
                        return o || n(),
                        t
                    }
                }
            }
            function o(e, t, o, n, i, a, r) {
                var s = this;
                s.r1 = e,
                s.r2 = t,
                s.g1 = o,
                s.g2 = n,
                s.b1 = i,
                s.b2 = a,
                s.histo = r
            }
            function n() {
                this.vboxes = new t((function(e, t) {
                    return yr(e.vbox.count() * e.vbox.volume(), t.vbox.count() * t.vbox.volume())
                }
                ))
            }
            function i(t, o) {
                if (o.count()) {
                    var n = o.r2 - o.r1 + 1
                      , i = o.g2 - o.g1 + 1
                      , a = Math.max.apply(null, [n, i, o.b2 - o.b1 + 1]);
                    if (1 == o.count())
                        return [o.copy()];
                    var r, s, l, c, d = 0, u = [], p = [];
                    if (a == n)
                        for (r = o.r1; r <= o.r2; r++) {
                            for (c = 0,
                            s = o.g1; s <= o.g2; s++)
                                for (l = o.b1; l <= o.b2; l++)
                                    c += t[e(r, s, l)] || 0;
                            u[r] = d += c
                        }
                    else if (a == i)
                        for (r = o.g1; r <= o.g2; r++) {
                            for (c = 0,
                            s = o.r1; s <= o.r2; s++)
                                for (l = o.b1; l <= o.b2; l++)
                                    c += t[e(s, r, l)] || 0;
                            u[r] = d += c
                        }
                    else
                        for (r = o.b1; r <= o.b2; r++) {
                            for (c = 0,
                            s = o.r1; s <= o.r2; s++)
                                for (l = o.g1; l <= o.g2; l++)
                                    c += t[e(s, l, r)] || 0;
                            u[r] = d += c
                        }
                    return u.forEach((function(e, t) {
                        p[t] = d - e
                    }
                    )),
                    function(e) {
                        var t, n, i, a, s, l = e + "1", c = e + "2", h = 0;
                        for (r = o[l]; r <= o[c]; r++)
                            if (u[r] > d / 2) {
                                for (i = o.copy(),
                                a = o.copy(),
                                s = (t = r - o[l]) <= (n = o[c] - r) ? Math.min(o[c] - 1, ~~(r + n / 2)) : Math.max(o[l], ~~(r - 1 - t / 2)); !u[s]; )
                                    s++;
                                for (h = p[s]; !h && u[s - 1]; )
                                    h = p[--s];
                                return i[c] = s,
                                a[l] = i[c] + 1,
                                [i, a]
                            }
                    }(a == n ? "r" : a == i ? "g" : "b")
                }
            }
            return o.prototype = {
                volume: function(e) {
                    var t = this;
                    return t._volume && !e || (t._volume = (t.r2 - t.r1 + 1) * (t.g2 - t.g1 + 1) * (t.b2 - t.b1 + 1)),
                    t._volume
                },
                count: function(t) {
                    var o = this
                      , n = o.histo;
                    if (!o._count_set || t) {
                        var i, a, r, s = 0;
                        for (i = o.r1; i <= o.r2; i++)
                            for (a = o.g1; a <= o.g2; a++)
                                for (r = o.b1; r <= o.b2; r++)
                                    s += n[e(i, a, r)] || 0;
                        o._count = s,
                        o._count_set = !0
                    }
                    return o._count
                },
                copy: function() {
                    var e = this;
                    return new o(e.r1,e.r2,e.g1,e.g2,e.b1,e.b2,e.histo)
                },
                avg: function(t) {
                    var o = this
                      , n = o.histo;
                    if (!o._avg || t) {
                        var i, a, r, s, l = 0, c = 0, d = 0, u = 0;
                        if (o.r1 === o.r2 && o.g1 === o.g2 && o.b1 === o.b2)
                            o._avg = [o.r1 << 3, o.g1 << 3, o.b1 << 3];
                        else {
                            for (a = o.r1; a <= o.r2; a++)
                                for (r = o.g1; r <= o.g2; r++)
                                    for (s = o.b1; s <= o.b2; s++)
                                        l += i = n[e(a, r, s)] || 0,
                                        c += i * (a + .5) * 8,
                                        d += i * (r + .5) * 8,
                                        u += i * (s + .5) * 8;
                            o._avg = l ? [~~(c / l), ~~(d / l), ~~(u / l)] : [~~(8 * (o.r1 + o.r2 + 1) / 2), ~~(8 * (o.g1 + o.g2 + 1) / 2), ~~(8 * (o.b1 + o.b2 + 1) / 2)]
                        }
                    }
                    return o._avg
                },
                contains: function(e) {
                    var t = this
                      , o = e[0] >> 3;
                    return gval = e[1] >> 3,
                    bval = e[2] >> 3,
                    o >= t.r1 && o <= t.r2 && gval >= t.g1 && gval <= t.g2 && bval >= t.b1 && bval <= t.b2
                }
            },
            n.prototype = {
                push: function(e) {
                    this.vboxes.push({
                        vbox: e,
                        color: e.avg()
                    })
                },
                palette: function() {
                    return this.vboxes.map((function(e) {
                        return e.color
                    }
                    ))
                },
                size: function() {
                    return this.vboxes.size()
                },
                map: function(e) {
                    for (var t = this.vboxes, o = 0; o < t.size(); o++)
                        if (t.peek(o).vbox.contains(e))
                            return t.peek(o).color;
                    return this.nearest(e)
                },
                nearest: function(e) {
                    for (var t, o, n, i = this.vboxes, a = 0; a < i.size(); a++)
                        ((o = Math.sqrt(Math.pow(e[0] - i.peek(a).color[0], 2) + Math.pow(e[1] - i.peek(a).color[1], 2) + Math.pow(e[2] - i.peek(a).color[2], 2))) < t || void 0 === t) && (t = o,
                        n = i.peek(a).color);
                    return n
                },
                forcebw: function() {
                    var e = this.vboxes;
                    e.sort((function(e, t) {
                        return yr(wr(e.color), wr(t.color))
                    }
                    ));
                    var t = e[0].color;
                    t[0] < 5 && t[1] < 5 && t[2] < 5 && (e[0].color = [0, 0, 0]);
                    var o = e.length - 1
                      , n = e[o].color;
                    n[0] > 251 && n[1] > 251 && n[2] > 251 && (e[o].color = [255, 255, 255])
                }
            },
            {
                quantize: function(a, r) {
                    if (!Number.isInteger(r) || r < 1 || r > 256)
                        throw new Error("Invalid maximum color count. It must be an integer between 1 and 256.");
                    if (!a.length || r < 2 || r > 256)
                        return !1;
                    if (!a.length || r < 2 || r > 256)
                        return !1;
                    for (var s = [], l = new Set, c = 0; c < a.length; c++) {
                        var d = a[c]
                          , u = d.join(",");
                        l.has(u) || (l.add(u),
                        s.push(d))
                    }
                    if (s.length <= r)
                        return new _r(s);
                    var p = function(t) {
                        var o, n = new Array(32768);
                        return t.forEach((function(t) {
                            o = e(t[0] >> 3, t[1] >> 3, t[2] >> 3),
                            n[o] = (n[o] || 0) + 1
                        }
                        )),
                        n
                    }(a);
                    p.forEach((function() {}
                    ));
                    var h = function(e, t) {
                        var n, i, a, r = 1e6, s = 0, l = 1e6, c = 0, d = 1e6, u = 0;
                        return e.forEach((function(e) {
                            (n = e[0] >> 3) < r ? r = n : n > s && (s = n),
                            (i = e[1] >> 3) < l ? l = i : i > c && (c = i),
                            (a = e[2] >> 3) < d ? d = a : a > u && (u = a)
                        }
                        )),
                        new o(r,s,l,c,d,u,t)
                    }(a, p)
                      , b = new t((function(e, t) {
                        return yr(e.count(), t.count())
                    }
                    ));
                    function g(e, t) {
                        for (var o, n = e.size(), a = 0; a < 1e3; ) {
                            if (n >= t)
                                return;
                            if (a++ > 1e3)
                                return;
                            if ((o = e.pop()).count()) {
                                var r = i(p, o)
                                  , s = r[0]
                                  , l = r[1];
                                if (!s)
                                    return;
                                e.push(s),
                                l && (e.push(l),
                                n++)
                            } else
                                e.push(o),
                                a++
                        }
                    }
                    b.push(h),
                    g(b, .75 * r);
                    for (var m = new t((function(e, t) {
                        return yr(e.count() * e.volume(), t.count() * t.volume())
                    }
                    )); b.size(); )
                        m.push(b.pop());
                    g(m, r);
                    for (var v = new n; m.size(); )
                        v.push(m.pop());
                    return v
                }
            }
        }().quantize
          , zr = function(e) {
            this.canvas = document.createElement("canvas"),
            this.context = this.canvas.getContext("2d"),
            this.width = this.canvas.width = e.naturalWidth,
            this.height = this.canvas.height = e.naturalHeight,
            this.context.drawImage(e, 0, 0, this.width, this.height)
        };
        zr.prototype.getImageData = function() {
            return this.context.getImageData(0, 0, this.width, this.height)
        }
        ;
        var kr = function() {};
        kr.prototype.getColor = function(e, t) {
            return void 0 === t && (t = 10),
            this.getPalette(e, 5, t)[0]
        }
        ,
        kr.prototype.getPalette = function(e, t, o) {
            var n = function(e) {
                var t = e.colorCount
                  , o = e.quality;
                if (void 0 !== t && Number.isInteger(t)) {
                    if (1 === t)
                        throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");
                    t = Math.max(t, 2),
                    t = Math.min(t, 20)
                } else
                    t = 10;
                return (void 0 === o || !Number.isInteger(o) || o < 1) && (o = 10),
                {
                    colorCount: t,
                    quality: o
                }
            }({
                colorCount: t,
                quality: o
            })
              , i = new zr(e)
              , a = function(e, t, o) {
                for (var n, i, a, r, s, l = e, c = [], d = 0; d < t; d += o)
                    i = l[0 + (n = 4 * d)],
                    a = l[n + 1],
                    r = l[n + 2],
                    (void 0 === (s = l[n + 3]) || s >= 125) && (i > 250 && a > 250 && r > 250 || c.push([i, a, r]));
                return c
            }(i.getImageData().data, i.width * i.height, n.quality)
              , r = xr(a, n.colorCount);
            return r ? r.palette() : null
        }
        ,
        kr.prototype.getColorFromUrl = function(e, t, o) {
            var n = this
              , i = document.createElement("img");
            i.addEventListener("load", (function() {
                var a = n.getPalette(i, 5, o);
                t(a[0], e)
            }
            )),
            i.src = e
        }
        ,
        kr.prototype.getImageData = function(e, t) {
            var o = new XMLHttpRequest;
            o.open("GET", e, !0),
            o.responseType = "arraybuffer",
            o.onload = function() {
                if (200 == this.status) {
                    var e = new Uint8Array(this.response);
                    i = e.length;
                    for (var o = new Array(i), n = 0; n < e.length; n++)
                        o[n] = String.fromCharCode(e[n]);
                    var a = o.join("")
                      , r = window.btoa(a);
                    t("data:image/png;base64," + r)
                }
            }
            ,
            o.send()
        }
        ,
        kr.prototype.getColorAsync = function(e, t, o) {
            var n = this;
            this.getImageData(e, (function(e) {
                var i = document.createElement("img");
                i.addEventListener("load", (function() {
                    var e = n.getPalette(i, 5, o);
                    t(e[0], this)
                }
                )),
                i.src = e
            }
            ))
        }
        ;
        const Sr = Object.freeze({
            IMDENSITY: "imdensity",
            IMWIDTH: "imwidth",
            IM: "im",
            ASPECT_CROP: (e, t) => `AspectCrop=(${e},${t})`
        })
          , Ar = 255
          , Er = [Ar, Ar, Ar]
          , Cr = [34, 36, 44]
          , Or = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
        async function Br({backgroundUrl: e, logoUrl: t, hexColorToCompare: o}) {
            let n = Er;
            const i = new Image
              , a = new URL(e)
              , r = a.origin + a.pathname;
            if (i.src = r + `?${Sr.IMWIDTH}=400`,
            t) {
                const e = new Image
                  , o = new URL(t)
                  , i = o.origin + o.pathname;
                e.src = i + `?${Sr.IMWIDTH}=400`,
                n = await Tr(e)
            } else
                o && (n = Mr(o));
            return await Pr(i, n)
        }
        const Pr = (e, t) => {
            let o;
            const n = new kr;
            return e.crossOrigin = "Anonymous",
            new Promise((i => {
                e.onload = function() {
                    const a = n.getColor(e);
                    let r = n.getPalette(e);
                    r.push(a),
                    r.push(Cr);
                    const s = Lr(r);
                    Rr(s, t) > 3 && i("transparent");
                    let l = 0;
                    r.forEach(( (e, n) => {
                        const i = n !== r.length - 1 ? Dr(e, -.5) : e
                          , a = Ir(s, i)
                          , c = Rr(a, t);
                        c > l && (l = c,
                        o = i)
                    }
                    )),
                    i(Ur(o))
                }
            }
            ))
        }
          , Tr = e => {
            const t = new kr;
            return e.crossOrigin = "Anonymous",
            new Promise((o => {
                e.onload = function() {
                    const n = t.getColor(e);
                    o(n)
                }
            }
            ))
        }
          , Lr = e => {
            const t = new Map;
            for (let o of e) {
                const e = o[0] + o[1] + o[2];
                t.set(e, o)
            }
            const o = Math.max(...t.keys());
            return t.get(o)
        }
          , Ir = (e, t) => {
            const o = Array(3);
            for (let n = 0; n < 3; n++)
                o[n] = $r(e[n], jr(t[n]));
            return o
        }
          , Rr = (e, t) => {
            const o = Hr(...e)
              , n = Hr(...t);
            return (Math.max(o, n) + .05) / (Math.min(o, n) + .05)
        }
          , $r = (e, t) => Math.min(e, t)
          , jr = (e, t=.55) => Ar - t * (Ar - e)
          , Dr = (e, t=0) => e.map((e => Nr(e, t)))
          , Nr = (e, t) => Math.round(Math.min(Math.max(0, e + e * t), Ar))
          , Mr = e => {
            const t = Or.exec(e)
              , [,o,n,i] = t;
            return [parseInt(o, 16), parseInt(n, 16), parseInt(i, 16)]
        }
          , Fr = e => e.toString(16).padStart(2, "0")
          , Ur = e => `#${Fr(e[0]) + Fr(e[1]) + Fr(e[2])}`
          , Hr = (e, t, o) => {
            let n = e / Ar
              , i = t / Ar
              , a = o / Ar;
            return .2126 * (n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)) + .7152 * (i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)) + .0722 * (a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4))
        }
        ;
        var Vr = {
            "en-US": {
                lightbox_close: "Close Lightbox",
                lightbox_next: "Next Slide",
                lightbox_open: "Open Lightbox",
                lightbox_previous: "Previous Slide",
                slide_phrase: "{0} of {1}"
            },
            "de-DE": {
                lightbox_close: "Viewer schließen",
                lightbox_next: "Nächster Artikel",
                lightbox_open: "Viewer öffnen",
                lightbox_previous: "Vorheriger Artikel",
                slide_phrase: "{0} von {1}"
            },
            "es-ES": {
                lightbox_close: "Cerrar Lightbox",
                lightbox_next: "Imagen siguiente",
                lightbox_open: "Abrir Lightbox",
                lightbox_previous: "Imagen anterior",
                slide_phrase: "{0} de {1}"
            },
            "es-MX": {
                lightbox_close: "Cerrar Lightbox",
                lightbox_next: "Imagen siguiente",
                lightbox_open: "Abrir Lightbox",
                lightbox_previous: "Imagen anterior",
                slide_phrase: "{0} de {1}"
            },
            "fr-FR": {
                lightbox_close: "Fermer la fenêtre",
                lightbox_next: "Image suivante",
                lightbox_open: "Ouvrir la fenêtre",
                lightbox_previous: "Image précédente",
                slide_phrase: "{0} / {1}"
            },
            "it-IT": {
                lightbox_close: "Chiudi Lightbox",
                lightbox_next: "Slide successiva",
                lightbox_open: "Apri Lightbox",
                lightbox_previous: "Slide precedente",
                slide_phrase: "{0} di {1}"
            },
            "ja-JP": {
                lightbox_close: "Lightboxを閉じる",
                lightbox_next: "次のスライド",
                lightbox_open: "Lightboxを開く",
                lightbox_previous: "前のスライド",
                slide_phrase: "{0}/{1}"
            },
            "ko-KR": {
                lightbox_close: "라이트박스 닫기",
                lightbox_next: "다음 슬라이드",
                lightbox_open: "라이트박스 열기",
                lightbox_previous: "이전 슬라이드",
                slide_phrase: "{1} 중 {0}"
            },
            "pl-PL": {
                lightbox_close: "Zamknij obraz lightbox",
                lightbox_next: "Następny slajd",
                lightbox_open: "Otwórz obraz lightbox",
                lightbox_previous: "Poprzedni slajd",
                slide_phrase: "{0} z {1}"
            },
            "pt-BR": {
                lightbox_close: "Fechar caixa de imagem",
                lightbox_next: "Slide seguinte",
                lightbox_open: "Abrir caixa de imagem",
                lightbox_previous: "Slide anterior",
                slide_phrase: "{0} de {1}"
            },
            "ru-RU": {
                lightbox_close: "Закрыть подсветку",
                lightbox_next: "Следующий слайд",
                lightbox_open: "Открыть подсветку",
                lightbox_previous: "Предыдущий слайд",
                slide_phrase: "{0} из {1}"
            },
            "th-TH": {
                lightbox_close: "ปิดไลท์บ็อกซ์",
                lightbox_next: "สไลด์ถัดไป",
                lightbox_open: "เปิดไลท์บ็อกซ์",
                lightbox_previous: "สไลด์ก่อนหน้า",
                slide_phrase: "{0} จากทั้งหมด {1}"
            },
            "zh-CN": {
                lightbox_close: "关闭灯箱",
                lightbox_next: "下一页",
                lightbox_open: "打开灯箱",
                lightbox_previous: "上一页",
                slide_phrase: "第{0}页，共{1}页"
            },
            "zh-TW": {
                lightbox_close: "關閉 Lightbox",
                lightbox_next: "下一頁",
                lightbox_open: "開啟 Lightbox",
                lightbox_previous: "上一頁",
                slide_phrase: "{0}／{1}"
            }
        }
          , qr = q`:host{--carousel-transition:opacity 200ms ease-out;--max-content:var(--view-xl);position:relative}[part=control]{display:flex;justify-content:center}:host(:not([content-size])),:host([content-size=wide]){--max-content:var(--view-xxl)}:host([content-size=default]){--max-content:var(--view-xl)}:host(.video-narrow),:host([content-size=narrow]){--max-content:var(--view-lg)}[part=main-content]{display:grid;grid-auto-flow:column;grid-template-columns:[left-arrow-start] 1fr [left-arrow-end content-start] minmax(0,var(--max-content)) [content-end right-arrow-start] 1fr [right-arrow-end];grid-template-rows:1fr;justify-content:center;width:100%}.content-container{position:relative}:host([bottom-navigation=preview]) .content-container{position:relative}:host([bottom-navigation=preview]) [part=main-content]{padding-bottom:var(--global-size-600)}:host([bottom-navigation=preview]){padding-bottom:0}[part~=glide],[part~=glide__slides],[part~=glide__track],[part~=main-content],[part~=slide]{align-items:center;height:100%;overflow:hidden}[part~=slide]{align-items:center;display:flex;flex-direction:column;justify-content:center}[part~=slide].glide__slide--clone:not([part~=active-slide]),[part~=slide]:not([part~=active-slide]){opacity:0}:host([height=default]) [part=main-content]{min-height:360px}:host([height=large]) [part=main-content]{min-height:400px}:host([arrow-position=outside]) [part~=glide],[part~=glide]{grid-column:content-start/content-end}:host([arrow-position=inside]) [part~=glide]{grid-column:left-arrow-start/right-arrow-end;grid-row:1/2}:host([arrows=none]) [part=main-content]{grid-template-columns:[content-start] minmax(0,var(--max-content)) [content-end]}:host([drag-threshold]:not([drag-threshold=false])) .glide--swipeable{cursor:grab}:host(:not([drag-threshold=false])) .glide--dragging{cursor:grabbing}[part~=slides]{align-items:center;margin:0}:host([drag-threshold=false]) [part~=slide]{user-select:auto}[part~=slide-content]{align-content:center;display:flex;height:100%;position:relative;width:100%}.glide__slide--active{z-index:var(--measure-z-index-above)}[part=expanded-left-arrow],[part=expanded-right-arrow]{cursor:pointer;display:none;padding:var(--semantic-space-around-vertical-sm-desktop) var(--semantic-space-around-horizontal-sm)}[part=bottom-navigation] [part=expanded-left-arrow],[part=bottom-navigation] [part=expanded-right-arrow]{display:block}:host([arrows=visible]) [part=expanded-left-arrow],:host([arrows=visible]) [part=expanded-right-arrow]{display:block}[part=left-arrow-area],[part=right-arrow-area]{align-items:center;display:inline-flex;z-index:var(--measure-z-index-docked)}[part=left-arrow-area]:hover blz-icon-button,[part=right-arrow-area]:hover blz-icon-button{background-color:var(--semantic-color-background-action-default-hover);color:var(--semantic-color-content-default)}:host([arrow-position=outside]) [part=left-arrow-area],[part=left-arrow-area]{grid-column:left-arrow;justify-self:flex-end}:host([arrow-position=outside]) [part=right-arrow-area],[part=right-arrow-area]{grid-column:right-arrow;justify-self:flex-start}:host([arrow-position=inside]) [part=left-arrow-area]{grid-column:left-arrow-start/content-start;grid-row:1/2;justify-self:flex-start}:host([arrow-position=inside]) [part=right-arrow-area]{grid-column:content-end/right-arrow-end;grid-row:1/2;justify-self:flex-end}[part=bottom-navigation]{display:flex;grid-row:bottom-start/bottom-end;justify-content:center;margin-top:var(--semantic-space-between-lg)}[part=count]{font:var(--semantic-body-text-md)}[part=active-count]{color:var(--global-color-content-900)}:host([bottom-navigation=preview]) [part=bottom-navigation]{margin-top:0}slot[name=control]::slotted(*){margin-bottom:var(--semantic-space-between-lg)}slot[name^=slide-]::slotted(*){max-height:100%;max-width:100%;overflow:hidden}slot[name^=slide-]::slotted(blz-video){display:block!important;margin:0 auto}slot[name=bottom-navigation]::slotted(*){justify-content:center;position:initial;width:100%}:host([bottom-navigation=preview]) slot[name=bottom-navigation]::slotted(*){margin-top:calc(-1 * var(--semantic-space-between-lg));padding-left:var(--semantic-space-around-horizontal-lg-desktop);padding-right:var(--semantic-space-around-horizontal-lg-desktop)}slot[name^=slide-]{display:flex;flex:1;max-height:100%;max-width:100%;overflow:hidden}slot[name^=slide-]::slotted(blz-feature){--gap:var(--semantic-grid-gap-xl-mobile);align-self:center;width:100%}slot[name^=caption-]::slotted(*){margin:var(--semantic-space-around-vertical-lg-mobile) var(--semantic-space-around-horizontal-sm)}.analytics-wrapper{display:contents}.background{display:flex;inset:0;justify-content:center;opacity:1;pointer-events:none;position:absolute;transition:var(--carousel-transition);z-index:var(--measure-z-index-below)}blz-image.background.background-active{height:100%;width:100%}slot[name=background]::slotted(*){height:100%;opacity:1;transition:var(--carousel-transition);width:100%}blz-image.background:not(.background-active){height:0;opacity:0;visibility:hidden;width:0}slot[name=background]::slotted([data-group]:not(slot, .background-active)){height:0;opacity:0;visibility:hidden;width:0}.background-overlay{height:100%;left:0;margin-bottom:-100%;opacity:1;pointer-events:none;position:absolute;top:0;transition:var(--carousel-transition);width:100%;z-index:var(--measure-z-index-below)}[part*=background-overlay-]{transition:var(--carousel-transition)}[part*=background-overlay-].background-active{height:100%;width:100%}[part*=background-overlay-]:not(.background-active){height:0;opacity:0;visibility:hidden;width:0}.bg-video-control{bottom:var(--global-size-700);left:var(--semantic-space-around-vertical-lg-desktop);padding:0;position:absolute;z-index:var(--measure-z-index-fixed)}@media (min-width:960px){[part=expanded-left-arrow],[part=expanded-right-arrow]{display:block}[part=bottom-navigation] [part=expanded-left-arrow],[part=bottom-navigation] [part=expanded-right-arrow]{display:none}:host([height=large]) [part=main-content]{min-height:672px}slot[name^=slide-]::slotted(blz-base-card){display:flex;flex:1}:host([bottom-navigation=preview]) .bg-video-control{bottom:var(--global-size-700)}}@media (min-width:1200px){:host([bottom-navigation=preview]) .bg-video-control{bottom:var(--semantic-space-around-vertical-lg-desktop)}}@media (min-width:720px){:host([bottom-navigation=preview]) [part=main-content]{padding-bottom:var(--semantic-section-space-vertical-md-desktop)}[part=bottom-navigation]{margin-top:var(--semantic-space-between-xl)}slot[name=control]::slotted(*){margin-bottom:var(--semantic-space-between-xl)}:host([bottom-navigation=preview]) slot[name=bottom-navigation]::slotted(*){margin-top:calc(-1 * var(--semantic-space-between-xl))}slot[name^=caption-]::slotted(*){margin:var(--semantic-space-around-vertical-lg-desktop) var(--semantic-space-around-horizontal-lg-desktop)}}`
          , Gr = q`:host{--background-caption:var(--semantic-color-background-content-default);display:inline-block;object-fit:cover;overflow:hidden;vertical-align:middle}[part=picture]{height:100%;max-height:100%;max-width:100%;object-fit:inherit;width:100%}[part=image]{display:block;height:100%;max-height:100%;max-width:100%;object-fit:inherit;width:100%}:host([aspect-ratio]) [name=bottom-caption]{position:absolute;width:100%;z-index:var(--measure-z-index-above)}:host([aspect-ratio]) .spacer{display:block;height:100%;width:100%;z-index:var(--measure-z-index-below)}::slotted([slot=bottom-caption]){background-color:var(--background-caption);font:var(--semantic-body-text-lg);padding:var(--semantic-space-around-vertical-xs-mobile) var(--semantic-space-around-horizontal-xxs);text-align:center}@media (min-width:720px){::slotted([slot=bottom-caption]){padding:var(--semantic-space-around-vertical-sm-desktop) var(--semantic-space-around-horizontal-sm)}}`
          , Wr = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class Yr extends et {
            constructor() {
                super(...arguments),
                this.loading = "lazy",
                this.fetchpriority = "auto"
            }
            static get styles() {
                return [...et.styles, Gr]
            }
            render() {
                return this.src && this._handleContentStack(this.src),
                z`<picture part="picture">${this.sources && this.sources.length ? this._makeSources(this.sources) : null} <img src="${it(this.src)}" alt="${it(this.alt)}" part="image" loading="${this.loading}" fetchpriority="${this.fetchpriority}"></picture><div class="blz-body-text-xl" part="content"><div class="spacer"></div><div class="main"><slot name="bottom-caption"></slot></div></div>`
            }
            _makeSources(e) {
                return e ? e.map((e => z`<source srcset="${it(e.srcset)}" sizes="${it(e.sizes)}" media="${it(e.media)}" type="${it(e.type)}">`)) : null
            }
            _handleContentStack(e) {
                let t = "";
                try {
                    const o = new URL(e);
                    o.hostname.includes("akamai") && (t = this._contentStackToAkamaiParams(o))
                } catch {} finally {
                    this.sources = [...this.sources ? this.sources.filter((e => !e.generated)) : [], {
                        srcset: t.toString().length > 0 ? t.toString() : e,
                        generated: !0
                    }]
                }
            }
            _contentStackToAkamaiParams(e) {
                const t = [...e.searchParams].reduce(( (e, t) => {
                    switch (t[0]) {
                    case "width":
                    case Sr.IMWIDTH:
                        e.set(Sr.IMWIDTH, t[1]);
                        break;
                    case "dpr":
                    case Sr.IMDENSITY:
                        e.set(Sr.IMDENSITY, t[1]);
                        break;
                    case "crop":
                        try {
                            const o = t[1].split(":");
                            2 === o.length && e.append(Sr.IM, Sr.ASPECT_CROP(o[0], o[1]))
                        } catch {
                            break
                        }
                        break;
                    case Sr.IM:
                        e.append(Sr.IM, t[1])
                    }
                    return e
                }
                ), new URLSearchParams);
                return new URL(`${e.origin}${e.pathname}?${t}`)
            }
        }
        Wr([de({
            type: String
        })], Yr.prototype, "src", void 0),
        Wr([de({
            type: String
        })], Yr.prototype, "alt", void 0),
        Wr([de({
            type: Array
        })], Yr.prototype, "sources", void 0),
        Wr([de({
            type: String
        })], Yr.prototype, "loading", void 0),
        Wr([de({
            type: String
        })], Yr.prototype, "fetchpriority", void 0),
        Wr([de({
            type: String,
            attribute: "aspect-ratio"
        })], Yr.prototype, "aspectRatio", void 0);
        var Kr = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let Xr = class extends Yr {
        }
        ;
        Xr = Kr([t(o.BlzImage)], Xr);
        var Zr = Xr
          , Jr = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class Qr extends (dt(kn)) {
            get componentDependencies() {
                return {
                    [o.BlzIconButton]: Ci,
                    [o.BlzTabControl]: ha,
                    [o.BlzTabControls]: wa,
                    [o.BlzImage]: Zr
                }
            }
            constructor() {
                super(),
                this.arrows = "default",
                this.arrowPosition = "outside",
                this.bottomNavigation = "dots",
                this.contentSize = "wide",
                this.slides = [],
                this.animationDuration = 0,
                this.autoplay = 0,
                this.dragThreshold = 0,
                this.focusAt = "center",
                this.gap = 48,
                this.disableHoverPause = !1,
                this.peek = 0,
                this.perView = 1,
                this.rewindDuration = 0,
                this.swipeThreshold = 0,
                this.type = "carousel",
                this.heightMode = "max",
                this.height = "default",
                this._playPauseStatus = Qr._VIDEO_STATES.PLAY,
                this._checkFocusOnChildElements = () => {
                    if (!this._isValidFocus || this._videoControl === Qr._VIDEO_STATES.PLAY || this._externalPlayButton?.icon === Qr._VIDEO_STATES.PLAY)
                        return;
                    const e = this.contains(document.activeElement);
                    this._animationControl(e),
                    this._isFocusPaused = e,
                    !e && this._isHoverEnter && (this._animationControl(!0),
                    this._isHoverPaused = !0)
                }
                ,
                this._checkMousedown = e => {
                    if (this._videoControl === Qr._VIDEO_STATES.PLAY || this._externalPlayButton?.icon === Qr._VIDEO_STATES.PLAY)
                        return;
                    this._isValidFocus = !1;
                    const t = this._slottedBottomNavigation[0]?.contains(e.target);
                    this.disableHoverPause || t ? this._animationControl(!1) : (this._isHoverPaused = !0,
                    this._isFocusPaused = !1)
                }
                ,
                this._checkFocusByKeydown = () => {
                    this._isValidFocus = !0
                }
                ,
                this._handleEnter = () => {
                    this._isHoverEnter = !0,
                    this._isFocusPaused || this._videoControl === Qr._VIDEO_STATES.PLAY || this._externalPlayButton?.icon === Qr._VIDEO_STATES.PLAY || (this._animationControl(!0),
                    this._isHoverPaused = !0)
                }
                ,
                this._handleLeave = () => {
                    this._isHoverEnter = !1,
                    this._isFocusPaused || this._videoControl === Qr._VIDEO_STATES.PLAY || this._externalPlayButton?.icon === Qr._VIDEO_STATES.PLAY || (this._animationControl(!1),
                    this._isHoverPaused = !1)
                }
                ,
                this._onClickVideoControl = e => {
                    if (this.disableAnimation)
                        return;
                    this._isFocusPaused = e.detail === Qr._PLAY_EVENTS.KEYDOWN,
                    this._initialReducedMotionRender = !1;
                    (this._externalPlayButton ? this._externalPlayButton?.icon : this._videoControl) === Qr._VIDEO_STATES.PAUSE ? (this._playPauseStatus = Qr._VIDEO_STATES.PAUSE,
                    this._videoControl = this._externalPlayButton ? "" : Qr._VIDEO_STATES.PLAY,
                    this._animationControl(!0),
                    this._videoControlButtonTriggered = !0) : (this._playPauseStatus = Qr._VIDEO_STATES.PLAY,
                    this._videoControl = this._externalPlayButton ? "" : Qr._VIDEO_STATES.PAUSE,
                    this._isFocusPaused || (this._animationControl(!1),
                    this._videoControlButtonTriggered = !1)),
                    this.requestUpdate()
                }
                ,
                this._forwardElements = async () => {
                    this.slides = Array.from(this.querySelectorAll('[slot*="slide"]')).filter((e => !e.slot.includes("copy"))),
                    this.slides.forEach((e => {
                        e.setAttribute("slot", `slide-${this.slides.indexOf(e) + 1}`)
                    }
                    )),
                    this._ref?.destroy(),
                    this._initializeComponent(),
                    await this.updateComplete,
                    this.mountGlide(!0),
                    this._disableTab(this._ref.index),
                    this._findVideos(),
                    this._slideAnalytics()
                }
                ,
                this._updateChildTabIndexes = (e, t) => {
                    e.querySelectorAll("[data-orig-tab-index]").forEach((e => {
                        t ? e.setAttribute("tabindex", -1) : e.removeAttribute("tabindex")
                    }
                    ))
                }
                ,
                this.analyticsEvent = "carousel",
                this._videoControl = null,
                this._videoBgs = [],
                this._gliderProperties = [],
                this._lastActiveIndex = 0,
                this._clones = new Set,
                this._previewCardData = [],
                this._isValidFocus = !0,
                this._analyticsFeatureObserver = void 0,
                this._videoControlButtonTriggered = !1,
                this._updateControls = this._updateControls.bind(this),
                this._listenIndexChange = this._listenIndexChange.bind(this),
                this._addAnalyticsListeners = this._addAnalyticsListeners.bind(this)
            }
            static get styles() {
                return [vr, ...kn.styles, fr, qr]
            }
            get _defaultSlottedAttributes() {
                return {
                    background: {
                        "blz-video": {
                            "no-ratio": {
                                value: ""
                            },
                            autoplay: {
                                value: ""
                            },
                            muted: {
                                value: ""
                            },
                            loop: {
                                value: ""
                            },
                            playsinline: {
                                value: ""
                            }
                        }
                    }
                }
            }
            get activeIndex() {
                return this._ref?.index || 0
            }
            set activeIndex(e) {
                this.go(`=${e}`)
            }
            next() {
                this.go(">")
            }
            previous() {
                this.go("<")
            }
            async go(e, t) {
                this._ref && this._ref.go(e),
                t && (this._scrollTabControlIntoView(this.activeIndex),
                await this.updateComplete,
                this.dispatchEvent(new CustomEvent(`${o.BlzCarousel}:${t}`,{
                    composed: !0,
                    detail: {
                        newIndex: this.activeIndex,
                        oldIndex: this._lastActiveIndex,
                        total: this.slides.length
                    }
                })),
                this._sideControlAnalytics(t, this.activeIndex))
            }
            async _getPreviewVariables() {
                await this.updateComplete,
                "preview" === this.bottomNavigation && (this._previewCardData = Array.from(this.querySelectorAll(o.BlzNewsCard)))
            }
            async _setUpBackground(e) {
                if (await this.updateComplete,
                !this._slottedBackgrounds.length)
                    return;
                this._videoBgs = this._slottedBackgrounds.filter((e => e.matches(o.BlzVideo)));
                const t = this._slottedBackgrounds.filter((e => e.getAttribute("data-group")));
                t.length ? t.forEach(( (t, o) => {
                    parseInt(t.getAttribute("data-group")) === e && "none" !== getComputedStyle(t).display ? (t.classList.add("background-active"),
                    this._backgroundIndex = o) : t.classList.remove("background-active")
                }
                )) : this._slottedBackgrounds.forEach(( (e, t) => {
                    "none" !== getComputedStyle(e).display ? (e.classList.add("background-active"),
                    this._backgroundIndex = t) : e.classList.remove("background-active")
                }
                )),
                this._setUpOverlays()
            }
            _setUpOverlays() {
                this.shadowRoot.querySelectorAll(".background-overlay").forEach(( (e, t) => {
                    t === this._backgroundIndex ? e.classList.add("background-active") : e.classList.remove("background-active")
                }
                ))
            }
            async _loadGradients() {
                if (await this.updateComplete,
                !this._slottedBackgrounds.length && !this._previewCardData.length)
                    return;
                let e;
                if (this._slottedBackgrounds.length) {
                    if (this._gradients.has(this._backgroundIndex))
                        return;
                    const t = this._slottedBackgrounds.find((e => e.classList.contains("background-active")));
                    if (!t)
                        return;
                    const n = t.tagName === o.BlzVideo.toUpperCase() || o.BlzWebVideo.toUpperCase() || "VIDEO" === t.tagName ? t.poster : t.src;
                    if (!n)
                        return;
                    e = await Br({
                        backgroundUrl: n
                    })
                } else if (this._previewCardData.length) {
                    if (this._gradients.has(this.activeIndex))
                        return;
                    const t = this._previewCardData[this.activeIndex].querySelector(o.BlzImage);
                    e = await Br({
                        backgroundUrl: t.src
                    })
                }
                const t = this._backgroundIndex ? this._backgroundIndex : this.activeIndex;
                this._gradients.set(t, e);
                const n = this.shadowRoot.querySelector(`[part='background-overlay-${t}']`)
                  , i = "preview" === this.bottomNavigation && this._mobileQuery.matches ? Qr._GRADIENT_DEGREES.MOBILE : Qr._GRADIENT_DEGREES.DEFAULT;
                n && (n.style.background = `linear-gradient(${i}deg, ${this._gradients.get(t)} 0%, transparent 66.87%)`)
            }
            playVideos() {
                const e = this.shadowRoot.querySelector(`[part~=slide-${this.activeIndex + 1}]:not(.glide__slide--clone) slot[name|=slide]`)?.assignedNodes({
                    flatten: !0
                })[0];
                if (e?.tagName.includes("VIDEO") && e.hasAttribute("autoplay"))
                    e.play();
                else {
                    const t = e?.querySelectorAll(`video, ${o.BlzVideo}`);
                    t?.forEach((e => {
                        e.hasAttribute("autoplay") && e.play()
                    }
                    ))
                }
            }
            pauseVideos() {
                const e = this.shadowRoot.querySelector(`[part~=slide-${this.activeIndex + 1}]:not(.glide__slide--clone) slot[name|=slide]`)?.assignedNodes({
                    flatten: !0
                })[0];
                if (e?.tagName.includes("VIDEO"))
                    "function" == typeof e.pause && e.pause();
                else {
                    const t = e?.querySelectorAll(`video, ${o.BlzVideo}`);
                    t?.forEach((e => {
                        "function" == typeof e.pause && e.pause()
                    }
                    ))
                }
            }
            _playVideoBackground() {
                this._videoBgs.length && this._videoBgs.forEach((e => {
                    const t = e.tagName === o.BlzVideo.toUpperCase() || o.BlzWebVideo.toUpperCase() ? e.shadowRoot.querySelector("video") : e;
                    t?.play().then(( () => {}
                    )).catch(( () => {}
                    ))
                }
                ))
            }
            _pauseVideoBackground() {
                0 !== this._videoBgs.length && this._videoBgs.forEach((e => {
                    (e.tagName === o.BlzVideo.toUpperCase() || o.BlzWebVideo.toUpperCase() ? e.shadowRoot.querySelector("video") : e).pause()
                }
                ))
            }
            _playCardAnimation() {
                if (this.autoplay !== Qr._ANIMATION.DISABLE_AUTOPLAY && "preview" === this.bottomNavigation) {
                    this._slottedBottomNavigation[0]?.style.setProperty(Qr._STATE_CSS_VARIABLE, Qr._ANIMATION.RUNNING);
                    this._previewCardData[this.activeIndex].shadowRoot.querySelector(".underline").addEventListener("animationend", ( () => {
                        this.go(">", "next")
                    }
                    ), {
                        once: !0
                    })
                }
            }
            _pauseCardAnimation() {
                this.autoplay !== Qr._ANIMATION.DISABLE_AUTOPLAY && "preview" === this.bottomNavigation && this._slottedBottomNavigation[0]?.style.setProperty(Qr._STATE_CSS_VARIABLE, Qr._ANIMATION.PAUSED)
            }
            _changePlayState(e) {
                const t = e ? Qr._VIDEO_STATES.PAUSE : Qr._VIDEO_STATES.PLAY;
                this._playPauseStatus = t
            }
            async _animationControl(e) {
                await this.updateComplete,
                this._changePlayState(e),
                e ? (this._pauseCardAnimation(),
                this._pauseVideoBackground(),
                this.autoplay !== Qr._ANIMATION.DISABLE_AUTOPLAY && this._ref?.pause()) : (this._playCardAnimation(),
                this._playVideoBackground(),
                this.autoplay !== Qr._ANIMATION.DISABLE_AUTOPLAY && this._ref?.play())
            }
            async _handleFocusPause() {
                await this.updateComplete,
                document.addEventListener("focusin", this._checkFocusOnChildElements),
                document.addEventListener("focusout", this._checkFocusOnChildElements),
                this._contentContainer.addEventListener("mousedown", this._checkMousedown),
                "preview" === this.bottomNavigation && (this._bottomPreviewControls = this.querySelector("[slot=bottom-navigation][variant=preview]"),
                this._bottomPreviewControls?.addEventListener("mousedown", this._checkMousedown)),
                this.disableAnimation || document.addEventListener("keydown", this._checkFocusByKeydown)
            }
            async _handleHoverPause() {
                await this.updateComplete,
                this._contentContainer = this.shadowRoot.querySelector(".content-container"),
                this.disableHoverPause || (this._contentContainer.addEventListener("mouseenter", this._handleEnter),
                this._contentContainer.addEventListener("mouseleave", this._handleLeave))
            }
            _setUpPlayButton() {
                this._externalPlayButton = this.querySelector("[slot=play-button]");
                const e = this._playPauseStatus === Qr._VIDEO_STATES.PAUSE || this._prefersReducedMotion ? Qr._VIDEO_STATES.PLAY : Qr._VIDEO_STATES.PAUSE;
                this._externalPlayButton ? (this._externalPlayButton.icon = e,
                this._externalPlayButton.addEventListener("click", this._onClickVideoControl)) : this._videoControl = e
            }
            _renderBackaground() {
                return "preview" === this.bottomNavigation && this._previewCardData.length && !this._slottedBackgrounds.length ? z`<div>${this._previewCardData.map(( (e, t) => z`<blz-image class="background ${t === this.activeIndex ? "background-active" : ""}" data-group="${t}" src="${e.querySelector(o.BlzImage).src}" alt="${e.querySelector(o.BlzImage).alt}"></blz-image>`))}</div>` : z`<slot name="background" class="background"></slot>`
            }
            _renderBackgroundOverlay() {
                const e = this._slottedBackgrounds.length ? this._slottedBackgrounds : this.slides;
                return z`<div>${e.map(( (e, t) => z`<div class="background-overlay ${this._slottedBackgrounds.length || t !== this.activeIndex ? "" : "background-active"}" part="background-overlay-${t}"></div>`))}</div>`
            }
            _glideHandleHeight() {
                if ("auto" === this.heightMode) {
                    const e = this.shadowRoot.querySelector(".glide__slide--active").querySelector("[part=slide-content]")
                      , t = e ? e.offsetHeight : 0
                      , o = this.shadowRoot.querySelector(".glide__track");
                    t !== (o ? o.offsetHeight : 0) && (o.style.height = `${t}px`,
                    o.style.transition = "height 0.15s ease-in-out")
                }
            }
            mountGlide(e=!1) {
                const t = {
                    keyboard: !1,
                    hoverpause: !1
                };
                this._gliderProperties.forEach((e => {
                    let o = this[e];
                    !e.includes("Threshold") && "autoplay" !== e || o !== Qr._ANIMATION.DISABLE_AUTOPLAY ? t[e] = o : t[e] = !1
                }
                )),
                t.perView > 1 && (t.focusAt = "0"),
                e ? this._ref.update(t) : (this._ref = new mr(this.shadowRoot.querySelector(".glide"),t).mount({
                    Html: na,
                    Clones: aa(this),
                    Resize: ia
                }),
                this._ref.on("run", ( () => {
                    this._setUpBackground(this.activeIndex),
                    this.playVideos(),
                    this._loadGradients(),
                    this._updateControls(),
                    this._findVideos(),
                    this.dispatchEvent(new CustomEvent(`${o.BlzCarousel}:index-change`,{
                        composed: !0,
                        detail: {
                            newIndex: this.activeIndex,
                            oldIndex: this._lastActiveIndex,
                            total: this.slides.length
                        }
                    }))
                }
                )),
                this._ref.on("build.before", ( () => {
                    this._setUpBackground(this.activeIndex),
                    this._loadGradients()
                }
                )),
                this._ref.on("run.before", ( () => {
                    this.pauseVideos(),
                    this._toggleTabControls(!1),
                    this._lastActiveIndex = this._ref.index
                }
                )),
                this._ref.on("run.after", ( () => {
                    this._toggleTabControls(!0),
                    this._exposeGlideParts(),
                    this._glideHandleHeight(),
                    this._disableTab(this._ref.index),
                    this.requestUpdate()
                }
                )))
            }
            render() {
                return z`<div class="analytics-wrapper" role="presentation"><div part="content-container" class="content-container">${this._renderBackaground()} ${this._renderBackgroundOverlay()}<slot name="slide"></slot><div part="control"><slot name="control" @slotchange="${this._bindControls}"></slot></div><div part="main-content" aria-live="polite">${this._getArrowHTML("left")}<div class="glide" part="glide"><div class="glide__track" part="glide__track" data-glide-el="track"><div id="slides" class="glide__slides" part="slides">${this._renderSlides(this.slides)}</div></div></div>${this._getArrowHTML("right")}</div>${this._videoControl ? z`<div class="bg-video-control" part="bg-video-control"><blz-icon-button size="small" part="icon-button" exportparts="button: play-pause-button" label="${this.getString(this._videoControl)}" @click="${e => {
                    this._onClickVideoControl(e)
                }
                }"><blz-icon icon="${this._videoControl}"></blz-icon></blz-icon-button></div>` : null}</div>${this._getBottomNav(this.bottomNavigation)}</div>`
            }
            connectedCallback() {
                super.connectedCallback && super.connectedCallback(),
                this.initializeLoc(Vr)
            }
            firstUpdated(e) {
                super.firstUpdated(e),
                this._initializeComponent();
                this.shadowRoot.querySelectorAll('slot[name="slide"]').forEach((e => {
                    e.addEventListener("slotchange", this._forwardElements)
                }
                ))
            }
            _initializeComponent() {
                var e;
                this._gradients = new Map,
                this._mobileQuery = window.matchMedia("(max-width: 960px)"),
                this._prefersReducedMotion = (e = Xi.PREFERS_REDUCED_MOTION,
                window && window.matchMedia(e) && window.matchMedia(e).matches),
                this._gliderProperties = ["type", "perView", "animationDuration", "autoplay", "rewindDuration", "gap", "peek", "focusAt", "swipeThreshold", "dragThreshold"],
                this.mountGlide(),
                this._getPreviewVariables(),
                this._setUpBackground(0),
                this._loadGradients(),
                this._updateControls();
                const t = this.autoplay !== Qr._ANIMATION.DISABLE_AUTOPLAY;
                (this.querySelector(`${o.BlzVideo}[slot=background]`) || this.querySelector("video[slot=background]") || t) && (this._handleHoverPause(),
                this._handleFocusPause(),
                t && (this._autoplayRef = this.autoplay),
                this._prefersReducedMotion ? (this._playPauseStatus = Qr._VIDEO_STATES.PAUSE,
                this._initialReducedMotionRender = !0) : this._playPauseStatus = Qr._VIDEO_STATES.PLAY,
                this._setUpPlayButton()),
                "preview" !== this.bottomNavigation || this._slottedBackgrounds.length || this._mobileQuery.addEventListener("change", ( () => {
                    this._gradients.clear(),
                    this._loadGradients()
                }
                )),
                this._addAnalyticsListeners()
            }
            updated(e) {
                super.updated(e);
                let t = !1;
                if (e.forEach(( (e, o) => {
                    this._gliderProperties.includes(o) && void 0 !== e && (t = !0)
                }
                )),
                this._initialReducedMotionRender && this._animationControl(!0),
                void 0 !== this.disableAnimation && !this._initialReducedMotionRender) {
                    if (!this._videoControlButtonTriggered) {
                        this._animationControl(this.disableAnimation),
                        this._playPauseStatus = this.disableAnimation ? Qr._VIDEO_STATES.PAUSE : Qr._VIDEO_STATES.PLAY;
                        const e = this.disableAnimation ? Qr._VIDEO_STATES.PLAY : Qr._VIDEO_STATES.PAUSE;
                        this._externalPlayButton ? this._externalPlayButton.icon = e : this._videoControl = e
                    }
                    this.disableAnimation || (this.disableAnimation = void 0)
                }
                t && this.mountGlide(!0),
                this._disableTab(this._ref.index),
                this._exposeGlideParts()
            }
            _renderSlides(e) {
                return e.length ? ("carousel" === this.type && this.shadowRoot.querySelectorAll(".glide__slide--clone").forEach((e => {
                    const t = /slide-\d+/g.exec(e.getAttribute("part"));
                    if (t) {
                        const o = parseInt(t[0].split("-")[1])
                          , n = [!0, !1];
                        ra({
                            slideIndex: o - 1,
                            activeIndex: this.activeIndex,
                            perView: this.perView,
                            totalSlideNum: this.slides.length
                        }) && (n[0] = !1,
                        n[1] = !0),
                        ze(e, "inactive-slide", n[0]),
                        ze(e, "active-slide", n[1])
                    }
                }
                )),
                e.map(( (t, n) => {
                    t.tagName === o.BlzFeature.toUpperCase() && (t.setAttribute("mobile-order", "reverse"),
                    t.setAttribute("context-gap", "ghost-button media"));
                    const i = `slide slide-${n + 1} ${ra({
                        slideIndex: n,
                        activeIndex: this.activeIndex,
                        perView: this.perView,
                        totalSlideNum: e.length
                    }) ? "active-slide" : "inactive-slide"}`;
                    return z`<div class="glide__slide blz-body-text-xl" part="${i}" role="group" aria-label="${this.getString("slide_phrase", [n + 1, e.length])}"><div part="slide-content" id="${this.lightbox ? "lightbox-content" : ""}"><slot name="slide-${n + 1}"></slot></div><div part="slide-caption"><slot name="caption-${n + 1}"></slot></div></div>`
                }
                ))) : z`<div class="glide__slide"><div></div></div>`
            }
            _updateControls() {
                const e = this.shadowRoot.querySelector('slot[name="control"]').assignedElements({
                    flatten: !0
                })[0]
                  , t = this.querySelector('[slot="bottom-navigation"]');
                e?.tagName.includes("TAB-CONTROLS") && (e.activeIndex = this.activeIndex),
                t?.tagName.includes("TAB-CONTROLS") && (t.activeIndex = this.activeIndex),
                "dots" === this.bottomNavigation && this.shadowRoot.querySelector(o.BlzTabControls) && (this.shadowRoot.querySelector(o.BlzTabControls).activeIndex = this.activeIndex)
            }
            _bindControls() {
                "preview" === this.bottomNavigation && this.autoplay !== Qr._ANIMATION.DISABLE_AUTOPLAY && (this._slottedBottomNavigation[0].setAttribute("animation", !0),
                this._slottedBottomNavigation[0].style.setProperty(Qr._STATE_CSS_VARIABLE, Qr._ANIMATION.RUNNING),
                this._slottedBottomNavigation[0].style.setProperty(Qr._DURATION_CSS_VARIABLE, `${this._autoplayRef}ms`)),
                this._slottedControls[0] && this._slottedControls[0].addEventListener(`${o.BlzTabControls}:index-change`, this._listenIndexChange),
                this._slottedBottomNavigation[0] && this._slottedBottomNavigation[0].addEventListener(`${o.BlzTabControls}:index-change`, this._listenIndexChange)
            }
            _getArrowHTML(e) {
                if (!("none" !== this.arrows && this.slides.length > 1))
                    return null;
                const t = "left" === e ? "previous" : "next"
                  , o = "left" === e ? "<" : ">";
                return z`<button aria-label="${this.getString(`${e}-arrow}`)}" part="${e}-arrow-area" @click="${e => {
                    e.stopPropagation(),
                    e.preventDefault(),
                    this.go(o, t)
                }
                }"><div part="expanded-${e}-arrow"><slot name="${e}-arrow"><blz-icon-button part="${e}-arrow" exportparts="${e}-arrow, icon: ${e}-arrow-icon, button: direction-arrow-button" icon="arrow-${e}" cosmetic></blz-icon-button></slot></div></button>`
            }
            _listenIndexChange(e) {
                this.activeIndex !== e.detail.activeIndex && (this.go(`=${e.detail.activeIndex}`),
                this._scrollTabControlIntoView(e.detail.activeIndex),
                this._tabControlAnalytics(e.detail.activeIndex))
            }
            _toggleTabControls(e) {
                const t = this.shadowRoot.querySelector('slot[name="control"]')?.assignedElements({
                    flatten: !0
                })[0]
                  , n = this.shadowRoot.querySelector(o.BlzTabControls);
                e ? (t?.hasAttribute("disabled") && t.removeAttribute("disabled"),
                n?.hasAttribute("disabled") && n.removeAttribute("disabled")) : (t?.setAttribute("disabled", !0),
                n?.setAttribute("disabled", !0))
            }
            _scrollTabControlIntoView(e) {
                this._slottedControls[0]?.children[e]?.scrollIntoViewIfNeeded()
            }
            _disableTab(e) {
                this.slides.forEach(( (t, o) => {
                    ("SLOT" === t.tagName ? t.assignedElements() : [t]).forEach((t => {
                        if (!t.hasAttribute("data-orig-tab-index")) {
                            const e = t.getAttribute("tabindex") || "false";
                            t.setAttribute("data-orig-tab-index", e)
                        }
                        if (o === e) {
                            const e = t.getAttribute("data-orig-tab-index");
                            "false" !== e ? t.setAttribute("tabindex", e) : (t.removeAttribute("tabindex"),
                            this._updateChildTabIndexes(t, !1))
                        } else
                            t.setAttribute("tabindex", -1),
                            this._updateChildTabIndexes(t, !0)
                    }
                    ))
                }
                ))
            }
            async _findVideos() {
                await this.updateComplete;
                const e = this.shadowRoot.querySelector(".glide__slide--active").querySelector('slot[name^="slide"]')
                  , t = e ? e.assignedElements({
                    flatten: !0
                }).filter((e => e.tagName === o.BlzFeature.toUpperCase() ? e.shadowRoot?.querySelector('slot[name="media"]')?.assignedElements()?.reduce(( (e, t) => t.matches(`video, ${o.BlzVideo}`) || e), !1) : e.matches(`video, ${o.BlzVideo}`))) : [];
                this.classList.toggle("video-narrow", t.length)
            }
            _getBottomNav(e) {
                if (this.slides.length <= 1)
                    return null;
                if (e) {
                    let t;
                    return t = "count" === e ? z`${this._getArrowHTML("left", "bottom")}<div part="count" class="blz-body-text-xl"><span part="active-count">${this.activeIndex + 1}</span>/${this.slides.length}</div>${this._getArrowHTML("right", "bottom")}` : "dots" === e ? z`<blz-tab-controls part="bottom-controls" role="tablist" variant="icons-tiny" active-index="${this.activeIndex}" @blz-tab-controls:index-change="${this._listenIndexChange}">${this.slides.map(( (e, t, o) => {
                        const n = t === this.activeIndex;
                        return z`<blz-tab-control role="tab" exportparts="${`tab-control, tab-control: ${n ? "active-tab-control" : "inactive-tab-control"}, icon: tab-control-icon, icon: ${n ? "active-tab-control-icon" : "inactive-tab-control-icon"}`}" label="${this.getString("slide_phrase", [t + 1, o.length])}"></blz-tab-control>`
                    }
                    ))}</blz-tab-controls>` : z`<slot name="bottom-navigation" @slotchange="${this._bindControls}"></slot>`,
                    z`<div part="bottom-navigation">${t}</div>`
                }
            }
            _exposeGlideParts() {
                this.shadowRoot.querySelectorAll("[class*=glide]").forEach((e => {
                    e.classList.forEach(( (t, o) => {
                        let n = !0;
                        t.includes("active") && o !== this.activeIndex && (n = !1),
                        ze(e, t, n)
                    }
                    ))
                }
                ))
            }
            disconnectedCallback() {
                this._ref?.destroy(),
                this._analyticsFeatureObserver?.disconnect(),
                document.removeEventListener("focusin", this._checkFocusOnChildElements),
                document.removeEventListener("focusout", this._checkFocusOnChildElements),
                this._contentContainer?.removeEventListener("mouseenter", this._handleEnter),
                this._contentContainer?.removeEventListener("mouseleave", this._handleLeave),
                this._contentContainer?.removeEventListener("mousedown", this._checkMousedown),
                "preview" === this.bottomNavigation && this._bottomPreviewControls?.removeEventListener("mousedown", this._checkMousedown),
                this.disableAnimation || document.removeEventListener("keydown", this._checkFocusByKeydown);
                this.shadowRoot.querySelectorAll('slot[name="slide"]').forEach((e => {
                    e.removeEventListener("slotchange", this._forwardElements)
                }
                )),
                super.disconnectedCallback()
            }
            _addAnalyticsListeners() {
                this.querySelectorAll(o.BlzFeature).forEach((e => {
                    const t = e.querySelector("[slot=header]")
                      , o = e.querySelector("[slot=media]");
                    t && t.addEventListener("click", ( () => {
                        super.pushEventFromGenerator(_n, {
                            slide_name: this._getControlAnalyticsLabel("title engagement", this.activeIndex)
                        }, Pn.Engagement)
                    }
                    )),
                    o && o.addEventListener("click", ( () => {
                        super.pushEventFromGenerator(_n, {
                            slide_name: this._getControlAnalyticsLabel("body engagement", this.activeIndex)
                        }, Pn.Engagement)
                    }
                    ))
                }
                ))
            }
            _getControlAnalyticsLabel(e, t) {
                const n = this._slottedControls.length ? `${this._slottedControls[0].querySelectorAll(o.BlzTabControl)[t]?.label}` : ""
                  , i = this.slides.length && t > -1 ? `${t + 1} of ${this.slides.length}` : "";
                return Se(e, n, i)
            }
            _slideAnalytics() {
                if (this.analyticsEnabled) {
                    const e = this.slides.map((e => "SLOT" === e.nodeName ? e.assignedNodes()[0] : e)).filter((e => e));
                    this._analyticsFeatureObserver = new IntersectionObserver((e => {
                        const t = e.find((e => e.target.getAttribute("slot") === `slide-${this.activeIndex + 1}`))
                          , o = t?.target.hasAttribute("viewed");
                        t?.isIntersecting && !o && (t.target.setAttribute("viewed", ""),
                        super.pushEventFromGenerator(_n, {
                            event: Pn.View,
                            slide_name: this._getControlAnalyticsLabel("view", this.activeIndex)
                        }))
                    }
                    ),{
                        root: this,
                        threshold: .01
                    }),
                    e.forEach((e => this._analyticsFeatureObserver.observe(e)))
                }
            }
            _tabControlAnalytics(e) {
                super.pushEventFromGenerator(_n, {
                    event: Pn.Navigation,
                    slide_name: this._getControlAnalyticsLabel("slide selection", e)
                })
            }
            _sideControlAnalytics(e, t) {
                super.pushEventFromGenerator(_n, {
                    event: Pn.Navigation,
                    slide_name: this._getControlAnalyticsLabel(e, t)
                })
            }
        }
        Qr._VIDEO_STATES = {
            PLAY: "play",
            PAUSE: "pause"
        },
        Qr._ANIMATION = {
            PAUSED: "paused",
            RUNNING: "running",
            DISABLE_AUTOPLAY: 0
        },
        Qr._DURATION_CSS_VARIABLE = "--animation-duration-control",
        Qr._STATE_CSS_VARIABLE = "--animation-play-state-control",
        Qr._GRADIENT_DEGREES = {
            MOBILE: "0",
            DEFAULT: "45"
        },
        Qr._PLAY_EVENTS = {
            KEYDOWN: 0,
            CLICK: 1
        };
        var es = Qr;
        Jr([de({
            type: String
        })], Qr.prototype, "arrows", void 0),
        Jr([de({
            attribute: "arrow-position"
        })], Qr.prototype, "arrowPosition", void 0),
        Jr([de({
            attribute: "bottom-navigation",
            type: String
        })], Qr.prototype, "bottomNavigation", void 0),
        Jr([de({
            attribute: "content-size",
            type: String
        })], Qr.prototype, "contentSize", void 0),
        Jr([de({
            attribute: !1,
            type: Array
        })], Qr.prototype, "slides", void 0),
        Jr([de({
            attribute: "animation-duration",
            type: Number
        })], Qr.prototype, "animationDuration", void 0),
        Jr([de({
            attribute: "autoplay",
            type: Number
        })], Qr.prototype, "autoplay", void 0),
        Jr([de({
            attribute: "drag-threshold",
            type: Number
        })], Qr.prototype, "dragThreshold", void 0),
        Jr([de({
            attribute: "focus-at",
            type: String
        })], Qr.prototype, "focusAt", void 0),
        Jr([de({
            type: Number
        })], Qr.prototype, "gap", void 0),
        Jr([de({
            attribute: "disable-animation",
            type: Boolean
        })], Qr.prototype, "disableAnimation", void 0),
        Jr([de({
            attribute: "disable-hover-pause",
            type: Boolean
        })], Qr.prototype, "disableHoverPause", void 0),
        Jr([de({
            type: Number
        })], Qr.prototype, "peek", void 0),
        Jr([de({
            attribute: "per-view",
            type: Number
        })], Qr.prototype, "perView", void 0),
        Jr([de({
            attribute: "rewind-duration",
            type: Number
        })], Qr.prototype, "rewindDuration", void 0),
        Jr([de({
            attribute: "swipe-threshold",
            type: Number
        })], Qr.prototype, "swipeThreshold", void 0),
        Jr([de({
            type: String
        })], Qr.prototype, "type", void 0),
        Jr([de({
            type: Boolean
        })], Qr.prototype, "lightbox", void 0),
        Jr([de({
            attribute: "height-mode",
            type: String
        })], Qr.prototype, "heightMode", void 0),
        Jr([de({
            attribute: "height",
            type: String
        })], Qr.prototype, "height", void 0),
        Jr([de({
            attribute: "data-orig-tab-index",
            type: String
        })], Qr.prototype, "dataOrigTabIndex", void 0),
        Jr([pe({
            slot: "background",
            flatten: !0
        })], Qr.prototype, "_slottedBackgrounds", void 0),
        Jr([pe({
            slot: "control",
            flatten: !0
        })], Qr.prototype, "_slottedControls", void 0),
        Jr([pe({
            slot: "bottom-navigation",
            flatten: !0
        })], Qr.prototype, "_slottedBottomNavigation", void 0),
        Jr([nt()], Qr.prototype, "_playPauseStatus", void 0);
        var ts = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let os = class extends es {
        }
        ;
        os = ts([t(o.BlzCarousel)], os);
        var ns = q`:host{--content-block-background-color:transparent;background-color:var(--content-block-background-color);display:inline-flex;flex-direction:column}:host([layout=left]){place-items:left;text-align:left}:host([layout=center]){place-items:center;text-align:center}.subheading-content{margin-bottom:var(--semantic-space-between-xxxs);order:1}.heading-content,.subheading-content{align-items:center;display:flex}.heading-content{order:2}.subheading-below .subheading-content{margin-bottom:0;margin-top:var(--semantic-content-space-xs);order:3}[part=content-container]{display:contents;height:100%}:host([layout=center]) .bottom-container,:host([layout=center]) .heading-content,:host([layout=center]) .subheading-content{justify-content:center}::slotted([slot=subheading]){color:var(--semantic-color-content-info);font:var(--content-block-font-subheading-md);letter-spacing:var(--semantic-subheading-letter-spacing);text-transform:uppercase}::slotted([slot=heading-icon]),::slotted([slot=subheading-icon]){color:var(--semantic-color-content-info);height:var(--global-size-300);margin-right:var(--semantic-space-between-xxxs);width:var(--global-size-300)}::slotted([slot=heading]){color:var(--semantic-color-text-heading)}::slotted([slot=description]){color:var(--semantic-color-content-info);margin-top:var(--content-block-description-space-margin-top);order:4}::slotted([slot=callout]){color:var(--semantic-color-content-callout-secondary);margin-top:var(--content-block-description-space-margin-top);order:3}::slotted([slot=optional-top]){margin-bottom:var(--content-block-space-optional-slot-top);max-width:min(40%,400px);order:0}::slotted([slot=optional-bottom]){margin-top:auto;order:5;padding-top:var(--content-block-space-optional-slot-bottom)}.extra-small ::slotted([slot=heading]){font:var(--content-block-font-heading-xs)}.extra-small ::slotted([slot=description]){font:var(--content-block-font-description-xs)}.extra-small ::slotted([slot=subheading-icon]){height:var(--global-size-200);width:var(--global-size-200)}.extra-small ::slotted([slot=callout]){font:var(--content-block-font-callout-xs)}.small ::slotted([slot=heading]){font:var(--content-block-font-heading-sm)}.small ::slotted([slot=description]){font:var(--content-block-font-description-sm)}.small ::slotted([slot=callout]){font:var(--content-block-font-callout-sm)}.medium ::slotted([slot=heading]){font:var(--content-block-font-heading-md)}.medium ::slotted([slot=description]){font:var(--content-block-font-description-md)}.medium ::slotted([slot=callout]){font:var(--content-block-font-callout-md)}.medium ::slotted([slot=subheading-icon]){height:var(--global-size-300);width:var(--global-size-300)}.large ::slotted([slot=heading]){font:var(--content-block-font-heading-lg)}.large ::slotted([slot=description]){font:var(--content-block-font-description-lg)}.large ::slotted([slot=callout]){font:var(--content-block-font-callout-lg)}.large ::slotted([slot=subheading]){font:var(--content-block-font-subheading-lg)}:host(:hover) ::slotted([slot=heading]){color:var(--semantic-color-content-heading-hover)}@media (min-width:720px){:host{height:100%}}`
          , is = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class as extends et {
            constructor() {
                super(...arguments),
                this.layout = "left",
                this.size = "medium",
                this.subheadingOrder = "above"
            }
            static get styles() {
                return [...et.styles, ns]
            }
            get _defaultSlottedAttributes() {
                return {
                    "optional-bottom": {
                        "blz-button": {
                            size: {
                                value: "small"
                            }
                        },
                        "blz-button-group": {
                            size: {
                                value: "small"
                            }
                        }
                    }
                }
            }
            render() {
                const e = {
                    medium: "medium" === this.size,
                    large: "large" === this.size,
                    small: "small" === this.size,
                    "extra-small": "extra-small" === this.size,
                    "subheading-below": "below" === this.subheadingOrder
                };
                return z`<div part="content-container" class="${ui(e)}"><slot name="optional-top"></slot><div class="subheading-content" part="subheading-content"><slot name="subheading-icon"></slot><slot name="subheading"></slot></div><div class="heading-content" part="heading-content"><slot name="heading-icon"></slot><slot name="heading"></slot></div><slot name="heading"></slot><slot name="callout"></slot><slot name="description"></slot><slot name="optional-bottom"></slot></div>`
            }
        }
        is([de({
            type: String
        })], as.prototype, "layout", void 0),
        is([de({
            type: String
        })], as.prototype, "size", void 0),
        is([de({
            type: String,
            attribute: "subheading-order"
        })], as.prototype, "subheadingOrder", void 0);
        var rs = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let ss = class extends as {
        }
        ;
        ss = rs([t(o.BlzContentBlock)], ss);
        var ls = q`:host{--items-in-gallery:4;--gallery-medium-column-size-based-on-cards:28%;--gallery-width-based-on-cards:var(--view-xl);--gallery-column-size:45%;--padding-to-reveal-focus:var(--global-size-200);--padding-to-combine-w-margin-for-correct-spacing:var(--global-size-600);--padding-to-add-to-sides-for-section:var(
      --semantic-space-around-horizontal-sm
    )}[part=section]::part(content){max-width:var(--gallery-width-based-on-cards)}[part=section]{--header-margin:var(--semantic-header-margin-space-md-mobile);padding:var(--semantic-section-space-vertical-md-mobile) 0}::slotted([slot=header]){justify-content:center}slot[name=header]::slotted(:not(slot)[slot=header]:last-of-type){margin-bottom:var(--semantic-header-margin-space-md-mobile)}[part=gallery]{display:grid;gap:0 var(--semantic-grid-gap-md-mobile);grid-template-columns:repeat(var(--items-in-gallery),var(--gallery-column-size));margin:0;overflow:scroll hidden;padding:var(--padding-to-reveal-focus) var(--padding-to-add-to-sides-for-section) var(--padding-to-combine-w-margin-for-correct-spacing);visibility:hidden}::slotted([slot=gallery-items]){max-width:none;width:100%}::slotted([slot=gallery-items-standard]){max-width:none;width:100%}::slotted([slot=gallery-items-mobile]){max-width:none;width:100%}::slotted([slot=gallery-items-mobile]),::slotted([slot=gallery-items-standard]),::slotted([slot=gallery-items]),:host(.focus) [part=gallery],:host(.focus-within) [part=gallery],:host(.hover) [part=gallery],[part=gallery].show-scroll,[part=gallery]:focus,[part=gallery]:focus-within,[part=gallery]:hover{visibility:visible}[part=gallery]::after{content:none;margin-right:-1px;padding-right:0}::slotted(a:nth-of-type(4)){padding-right:0}slot[name=cta]{display:flex;justify-content:center}@media (min-width:720px){[part=gallery]{--gallery-column-size:28%;--padding-to-combine-w-margin-for-correct-spacing:var(--global-size-900);--padding-to-add-to-sides-for-section:var(
        --semantic-space-around-horizontal-sm
      )}slot[name=header]::slotted(:not(slot)[slot=header]:last-of-type){margin-bottom:var(--semantic-header-margin-space-lg-desktop)}[part=section]{--header-margin:var(--semantic-header-margin-space-md-desktop);padding:var(--semantic-section-space-vertical-md-desktop) 0}}@media (min-width:960px){[part=gallery]{--gallery-column-size:var(--gallery-medium-column-size-based-on-cards);--padding-to-combine-w-margin-for-correct-spacing:var(--global-size-900);--padding-to-add-to-sides-for-section:var(
        --semantic-space-around-horizontal-lg-desktop
      );gap:0 var(--semantic-grid-gap-md-desktop)}}@media (min-width:1200px){[part=gallery]{--gallery-column-size:minmax(122px, 25%);--padding-to-combine-w-margin-for-correct-spacing:var(--global-size-900);--padding-to-add-to-sides-for-section:var(
        --semantic-space-around-horizontal-xxs
      );grid-template-columns:repeat(var(--items-in-gallery),var(--gallery-column-size))}[part=section]{padding:var(--semantic-section-space-vertical-md-desktop) var(--semantic-section-space-horizontal-desktop)}[part=gallery]::after{content:none;padding-right:0}::slotted(a:nth-of-type(4)){padding-right:0}slot[name=header]::slotted(:not(slot)[slot=header]:last-of-type){margin-bottom:var(--semantic-header-margin-space-lg-desktop)}:host(.focus) [part=gallery],:host(.hover) [part=gallery],[part=gallery].show-scroll,[part=gallery]:focus,[part=gallery]:hover{visibility:hidden}::-webkit-scrollbar{background:0 0;height:0}}`;
        class cs extends et {
            static get styles() {
                return [...et.styles, ls]
            }
            get componentDependencies() {
                return {
                    [o.BlzSection]: Qn
                }
            }
            get _defaultSlottedAttributes() {
                return {
                    header: {
                        "blz-header": {
                            layout: {
                                value: "center"
                            }
                        }
                    },
                    cta: {
                        "blz-button-group": {
                            size: {
                                value: "large"
                            }
                        }
                    }
                }
            }
            render() {
                return z`<blz-section class="show-overflow" part="section" exportparts="${ei}"><slot name="background" slot="background"></slot><slot name="header" slot="header"></slot><div part="gallery"><slot name="gallery-items" @slotchange="${this._handleGalleryItems}"></slot></div><slot name="cta"></slot></blz-section>`
            }
            firstUpdated(e) {
                super.firstUpdated(e),
                queueMicrotask(( () => {
                    Ee(this.shadowRoot?.querySelector('[part="gallery"]')),
                    this.addEventListener("touchstart", this._toggleScrollVisibility),
                    this.addEventListener("touchend", this._toggleScrollVisibility),
                    this.addEventListener("mouseenter", this._toggleScrollVisibility),
                    this.addEventListener("mouseleave", this._toggleScrollVisibility),
                    this.addEventListener("keyup", this._scrollToElement)
                }
                ))
            }
            _handleGalleryItems() {
                const e = this.querySelectorAll("[slot='gallery-items']").length / 2;
                this.style.setProperty("--items-in-gallery", e.toString()),
                e > 4 ? (this.style.setProperty("--gallery-medium-column-size-based-on-cards", "21%"),
                this.style.setProperty("--gallery-width-based-on-cards", "var(--view-xxl)")) : e < 5 && (this.style.setProperty("--gallery-medium-column-size-based-on-cards", "28%"),
                this.style.setProperty("--gallery-width-based-on-cards", "var(--view-xl)")),
                this.style.setProperty("--items-in-gallery", e.toString())
            }
            _scrollToElement(e) {
                "Tab" === e.key && document.activeElement && _e(document.activeElement, {
                    orientation: "horizontal",
                    container: this.shadowRoot?.querySelector('[part="gallery"]')
                })
            }
            _toggleScrollVisibility() {
                const e = this.shadowRoot?.querySelector('[part="gallery"]');
                e && e.classList.toggle("show-scroll")
            }
        }
        var ds = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let us = class extends cs {
        }
        ;
        us = ds([t(o.BlzCrossSell)], us);
        var ps = q`:host{display:flex;width:100%}.small{font:var(--price-font-label-sm)}.medium{font:var(--price-font-label-md)}.large{font:var(--price-font-label-lg)}.extra-large{font:var(--price-font-label-xl)}:host(:not([discount])),:host(:not([discount]:empty)){color:var(--semantic-color-text-heading)}:host([size=small]:not([discount])),:host([size=small]:not([discount]:empty)){font:var(--price-font-label-sm)}:host([size=medium]:not([discount])),:host([size=medium]:not([discount]:empty)){font:var(--price-font-label-md)}:host([size=large]:not([discount])),:host([size=large]:not([discount]:empty)){font:var(--price-font-label-lg)}:host([size=extra-large]:not([discount])),:host([size=extra-large]:not([discount]:empty)){font:var(--price-font-label-xl)}.price-wrapper{color:var(--semantic-color-content-inactive)}.label{color:var(--semantic-color-text-heading)}.label.before{margin-right:var(--global-size-75)}.discount-price{align-items:center;display:inline-flex;gap:var(--global-size-75)}.discount-wrapper,.price-wrapper{align-items:center;display:flex}.small .price-wrapper{font:var(--price-font-label-discount-sm)}.medium .price-wrapper{font:var(--price-font-label-discount-md)}.large .price-wrapper{font:var(--price-font-label-discount-lg)}.extra-large .price-wrapper{font:var(--price-font-label-discount-xl)}.discount-wrapper{align-items:center;color:var(--semantic-color-content-callout-primary);display:flex}blz-badge{background-color:var(--semantic-color-content-callout-primary);color:var(--global-color-background-500);font-weight:var(--global-font-weight-bold)}.container{align-items:center}.horizontal .container{display:flex;flex:1 1 0%;flex-flow:wrap;flex-wrap:wrap}.horizontal .container.discount{gap:var(--semantic-space-between-xs)}.horizontal .discount-price{margin-right:var(--semantic-space-between-xs)}.vertical .price-wrapper{display:flex;flex-wrap:wrap;gap:var(--semantic-space-between-xxs);justify-content:center;margin-top:var(--semantic-space-between-xs)}.horizontal .discount-wrapper{flex-wrap:wrap;margin-right:auto}.horizontal blz-badge{align-self:center}.horizontal .price-wrapper{margin-right:var(--semantic-space-between-sm)}.horizontal{width:100%}.vertical{align-items:center;display:flex;flex-direction:column;justify-content:center;width:100%}.vertical .discount-price{justify-content:center}.vertical.with-discount{flex-direction:column}.vertical slot{display:inline-block;vertical-align:middle}.vertical.with-discount .discount-wrapper,.vertical:not(.with-discount){display:inline-block;text-align:center}.horizontal.label-after .discount-price{margin-right:0}.horizontal.label-after .label{margin-left:var(--global-size-75);margin-right:var(--semantic-space-between-xs)}::slotted([slot=virtual-currency]){align-self:center;display:flex;height:var(--global-size-300);margin-right:var(--global-size-25);width:var(--global-size-300)}.large ::slotted([slot=virtual-currency]){height:var(--global-size-400);width:var(--global-size-400)}.extra-large ::slotted([slot=virtual-currency]){height:var(--global-size-500);width:var(--global-size-500)}::slotted([slot=optional-bottom]){align-self:center;color:var(--semantic-color-content-info);font:var(--semantic-body-text-sm-mobile)}:not(.with-discount) ::slotted([slot=optional-bottom]){margin-top:var(--semantic-space-between-xxs)}.horizontal.with-discount ::slotted([slot=optional-bottom]),.vertical.with-discount ::slotted([slot=optional-bottom]){margin-top:var(--semantic-space-between-sm)}.horizontal.medium.with-discount ::slotted([slot=optional-bottom]),.horizontal.small.with-discount ::slotted([slot=optional-bottom]){margin-top:var(--semantic-space-between-xs)}@media (min-width:720px){::slotted([slot=optional-bottom]){align-self:center;font:var(--semantic-body-text-sm-desktop)}.vertical.extra-large.with-discount ::slotted([slot=optional-bottom]){margin-top:var(--semantic-space-between-md)}.horizontal.medium.with-discount ::slotted([slot=optional-bottom]){margin-top:var(--semantic-space-between-sm)}}`
          , hs = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class bs extends et {
            constructor() {
                super(...arguments),
                this.labelOrder = "before",
                this.price = "",
                this.discountPrice = "",
                this.discount = "",
                this.orientation = "vertical",
                this.size = "medium"
            }
            static get styles() {
                return [...et.styles, ps]
            }
            get componentDependencies() {
                return {
                    [o.BlzBadge]: Si
                }
            }
            render() {
                const e = {
                    vertical: "vertical" === this.orientation,
                    horizontal: "horizontal" === this.orientation,
                    "label-before": "before" === this.labelOrder,
                    "label-after": "after" === this.labelOrder,
                    "with-discount": !!this.discount,
                    [this.size]: !0
                };
                return z`${this.discountPrice ? z`<div class="${ui(e)}"><div class="container discount"><div part="discount" class="discount-wrapper">${this.label && "before" === this.labelOrder ? this._renderLabel() : S}<slot name="virtual-currency"></slot><span class="discount-price">${this.discountPrice}</span> ${this.label && "after" === this.labelOrder ? this._renderLabel() : S} ${this.discount ? z`${this._renderOriginalPrice()}` : S}</div>${this.discount && "horizontal" === this.orientation ? z`${this._renderDiscountedBadge()}` : S}</div><slot name="optional-bottom"></slot></div>` : z`<div class="${ui(e)}" part="price"><div class="container">${this.label && "before" === this.labelOrder ? this._renderLabel() : S}<slot name="virtual-currency"></slot>${this.price} ${this.label && "after" === this.labelOrder ? this._renderLabel() : S}</div><slot name="optional-bottom"></slot></div>`}`
            }
            _renderOriginalPrice() {
                return z`<div part="price" class="price-wrapper"><s>${this.price}</s> ${this.discount && "vertical" === this.orientation ? z`${this._renderDiscountedBadge()}` : z``}</div>`
            }
            _renderDiscountedBadge() {
                return z`<blz-badge variant="small" part="badge" text="${this.discount}"></blz-badge>`
            }
            _renderLabel() {
                return z`<span class="label ${this.labelOrder}">${this.label}</span>`
            }
        }
        hs([de({
            type: String
        })], bs.prototype, "label", void 0),
        hs([de({
            type: String,
            attribute: "label-order"
        })], bs.prototype, "labelOrder", void 0),
        hs([de({
            type: String
        })], bs.prototype, "price", void 0),
        hs([de({
            type: String,
            attribute: "discount-price"
        })], bs.prototype, "discountPrice", void 0),
        hs([de({
            type: String
        })], bs.prototype, "discount", void 0),
        hs([de({
            type: String
        })], bs.prototype, "orientation", void 0),
        hs([de({
            type: String
        })], bs.prototype, "size", void 0);
        var gs = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let ms = class extends bs {
        }
        ;
        ms = gs([t(o.BlzPrice)], ms);
        var vs = ms
          , fs = {
            "en-US": {
                lightbox_close: "Close Lightbox",
                lightbox_next: "Next Slide",
                lightbox_open: "Open Lightbox",
                lightbox_previous: "Previous Slide",
                slide_phrase: "{0} of {1}"
            },
            "de-DE": {
                lightbox_close: "Viewer schließen",
                lightbox_next: "Nächster Artikel",
                lightbox_open: "Viewer öffnen",
                lightbox_previous: "Vorheriger Artikel",
                slide_phrase: "{0} von {1}"
            },
            "es-ES": {
                lightbox_close: "Cerrar Lightbox",
                lightbox_next: "Imagen siguiente",
                lightbox_open: "Abrir Lightbox",
                lightbox_previous: "Imagen anterior",
                slide_phrase: "{0} de {1}"
            },
            "es-MX": {
                lightbox_close: "Cerrar Lightbox",
                lightbox_next: "Imagen siguiente",
                lightbox_open: "Abrir Lightbox",
                lightbox_previous: "Imagen anterior",
                slide_phrase: "{0} de {1}"
            },
            "fr-FR": {
                lightbox_close: "Fermer la fenêtre",
                lightbox_next: "Image suivante",
                lightbox_open: "Ouvrir la fenêtre",
                lightbox_previous: "Image précédente",
                slide_phrase: "{0} / {1}"
            },
            "it-IT": {
                lightbox_close: "Chiudi Lightbox",
                lightbox_next: "Slide successiva",
                lightbox_open: "Apri Lightbox",
                lightbox_previous: "Slide precedente",
                slide_phrase: "{0} di {1}"
            },
            "ja-JP": {
                lightbox_close: "Lightboxを閉じる",
                lightbox_next: "次のスライド",
                lightbox_open: "Lightboxを開く",
                lightbox_previous: "前のスライド",
                slide_phrase: "{0}/{1}"
            },
            "ko-KR": {
                lightbox_close: "라이트박스 닫기",
                lightbox_next: "다음 슬라이드",
                lightbox_open: "라이트박스 열기",
                lightbox_previous: "이전 슬라이드",
                slide_phrase: "{1} 중 {0}"
            },
            "pl-PL": {
                lightbox_close: "Zamknij obraz lightbox",
                lightbox_next: "Następny slajd",
                lightbox_open: "Otwórz obraz lightbox",
                lightbox_previous: "Poprzedni slajd",
                slide_phrase: "{0} z {1}"
            },
            "pt-BR": {
                lightbox_close: "Fechar caixa de imagem",
                lightbox_next: "Slide seguinte",
                lightbox_open: "Abrir caixa de imagem",
                lightbox_previous: "Slide anterior",
                slide_phrase: "{0} de {1}"
            },
            "ru-RU": {
                lightbox_close: "Закрыть подсветку",
                lightbox_next: "Следующий слайд",
                lightbox_open: "Открыть подсветку",
                lightbox_previous: "Предыдущий слайд",
                slide_phrase: "{0} из {1}"
            },
            "tr-TR": {
                lightbox_close: "Görsel Penceresini Kapat",
                lightbox_next: "Sonraki Slayt",
                lightbox_open: "Görsel Penceresini Aç",
                lightbox_previous: "Önceki Slayt",
                slide_phrase: "{0} / {1}"
            },
            "th-TH": {
                lightbox_close: "ปิดไลท์บ็อกซ์",
                lightbox_next: "สไลด์ถัดไป",
                lightbox_open: "เปิดไลท์บ็อกซ์",
                lightbox_previous: "สไลด์ก่อนหน้า",
                slide_phrase: "{0} จากทั้งหมด {1}"
            },
            "zh-CN": {
                lightbox_close: "关闭灯箱",
                lightbox_next: "下一页",
                lightbox_open: "打开灯箱",
                lightbox_previous: "上一页",
                slide_phrase: "第{0}页，共{1}页"
            },
            "zh-TW": {
                lightbox_close: "關閉 Lightbox",
                lightbox_next: "下一頁",
                lightbox_open: "開啟 Lightbox",
                lightbox_previous: "上一頁",
                slide_phrase: "{0}／{1}"
            }
        }
          , ys = q`:host{cursor:pointer;display:inline-block;position:relative}button{width:100%}::slotted(blz-video[youtube-id]){z-index:var(--measure-z-index-below)}`
          , ws = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class _s extends (dt(et)) {
            constructor() {
                super(),
                this.hasFocusChild = !1,
                this._handleSlotChange = this._handleSlotChange.bind(this)
            }
            static get styles() {
                return [...et.styles, ys]
            }
            focus(e) {
                this.hasFocusChild ? this.shadowRoot.querySelector("slot").assignedElements().find((e => e.matches(ye))).focus(e) : this.shadowRoot.querySelector("button").focus(e)
            }
            videos(e="pause") {
                const t = this.shadowRoot.querySelector("slot").assignedElements().filter((e => e.tagName.includes("VIDEO")));
                t.length && t.forEach((t => "pause" === e ? t.pause() : t.play()))
            }
            render() {
                const e = z`<slot @slotchange="${this._handleSlotChange}"></slot>`;
                return this.hasFocusChild ? e : z`<button aria-label="${this.getString("lightbox_open")}" part="button">${e}</button>`
            }
            connectedCallback() {
                super.connectedCallback && super.connectedCallback(),
                this.initializeLoc(fs)
            }
            firstUpdated(e) {
                super.firstUpdated(e),
                this.addEventListener("click", this._openLightbox)
            }
            updated(e) {
                super.updated(e),
                e.forEach(( (e, t) => {
                    "hasFocusChild" === t && (!1 === e ? (this.setAttribute("data-aria-label", this.getString("lightbox_open")),
                    this.addEventListener("keydown", this._openLightboxKey)) : (this.removeAttribute("data-aria-label"),
                    this.removeEventListener("keydown", this._openLightboxKey)))
                }
                ))
            }
            _openLightbox(e) {
                if ("A" === e.target.tagName)
                    return;
                const t = document.getElementById(this.target);
                t && t.open(e, this)
            }
            _openLightboxKey(e) {
                "Space" !== e.code && "Enter" !== e.key || (e.preventDefault(),
                this._openLightbox(e))
            }
            _handleSlotChange() {
                let e = !1;
                ve(this.shadowRoot, "", (t => {
                    t.matches(ye) && (this.hasFocusChild = !0,
                    _s._CARDS.includes(t.tagName) && !t.hasAttribute("href") && t.setAttribute("tabindex", 0),
                    this.hasFocusChild = !0,
                    _s._CARDS.includes(t.tagName) && !t.hasAttribute("href") && t.setAttribute("tabindex", 0)),
                    t.hasAttribute("aspect-ratio") && (e = !0)
                }
                )),
                e && (this.style.width = "100%")
            }
        }
        _s._CARDS = [o.BlzCard.toUpperCase(), o.BlzBaseCard.toUpperCase()];
        var xs = _s;
        ws([de({
            type: String
        })], _s.prototype, "target", void 0),
        ws([de({
            type: Number
        })], _s.prototype, "slide", void 0),
        ws([de({
            type: Boolean,
            attribute: !1
        })], _s.prototype, "hasFocusChild", void 0);
        var zs = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let ks = class extends xs {
        }
        ;
        ks = zs([t(o.BlzLightboxTrigger)], ks);
        var Ss = ks
          , As = {
            "en-US": {
                comparison_table_features: "Compare Products"
            },
            "de-DE": {
                comparison_table_features: "Artikel vergleichen"
            },
            "es-ES": {
                comparison_table_features: "Compara productos"
            },
            "es-MX": {
                comparison_table_features: "Comparación de productos"
            },
            "fr-FR": {
                comparison_table_features: "Comparer les produits"
            },
            "it-IT": {
                comparison_table_features: "Confronta prodotti"
            },
            "ja-JP": {
                comparison_table_features: "プロダクトを比較"
            },
            "ko-KR": {
                comparison_table_features: "상품 비교"
            },
            "pl-PL": {
                comparison_table_features: "Porównaj produkty"
            },
            "pt-BR": {
                comparison_table_features: "Compare Produtos"
            },
            "ru-RU": {
                comparison_table_features: "Сравнение товаров"
            },
            "tr-TR": {
                comparison_table_features: "Ürünleri Karşılaştırın"
            },
            "th-TH": {
                comparison_table_features: "เปรียบเทียบผลิตภัณฑ์"
            },
            "zh-CN": {
                comparison_table_features: "商品对比"
            },
            "zh-TW": {
                comparison_table_features: "產品比較"
            }
        }
          , Es = q`:host{--product-subheading-color:var(--semantic-color-text-description);--product-header-color:var(--semantic-color-content-default);--comparison-values-color:var(--semantic-color-content-default);--legalese-text-color:var(--global-color-content-500);--feature-label-color:var(--semantic-color-content-info);--featured-column-alt:rgb(255 255 255 / 2%);--sticky-header-background:#181d28;--sticky-header-shadow:0px 4px 4px 0px #00000040;--sticky-nav-height:var(--nav-height);--feature-image-size:var(--global-size-600);--featured-column-color:#3b2f24;--featured-subheading-color:#f29e0d}.table-container{position:relative}.header-container,.header-container-mobile{position:static;top:var(--sticky-nav-height)}.header-container-mobile.sticky,.header-container.sticky{background-color:var(--sticky-header-background);box-shadow:var(--sticky-header-shadow);position:sticky;z-index:var(--measure-z-index-fixed)}.header-container-top{color:var(--global-color-content-700)}tbody td{padding:var(--semantic-space-around-vertical-sm-desktop) var(--semantic-space-around-horizontal-lg-desktop)}.product-value-row td:first-of-type{border-bottom-left-radius:var(--global-size-50)}.product-value-row td:last-of-type{border-bottom-right-radius:var(--global-size-50)}table{border-collapse:collapse;table-layout:fixed;width:100%}.featured-column.product-thumbnail-cell{background-color:var(--featured-column-color);border-radius:var(--global-size-50) var(--global-size-50) 0 0!important}.featured-column.even{background-color:var(--featured-column-color)}.product-subheading.featured-column{color:var(--featured-subheading-color)}.featured-column.product-option-header{background-color:var(--featured-column-color)}tbody.feature-body .featured-column.odd{background-color:var(--featured-column-color);background-image:linear-gradient(var(--featured-column-alt),var(--featured-column-alt))}.featured-column.comparison-button-cell{background-color:var(--featured-column-color)}.feature-icon,.feature-number,.feature-text{align-items:center;color:var(--comparison-values-color,var(--semantic-color-content-default));display:flex;justify-content:center}.feature-text{font:var(--semantic-body-text-md)}.feature-number{font:var(--semantic-heading-text-lg)}.feature-label-table-cell{color:var(--feature-label-color,var(--semantic-color-content-info));font:var(--semantic-body-text-md);padding-left:var(--semantic-space-around-horizontal-sm)!important}.feature-label-table-cell-inner{align-items:center;display:flex;gap:var(--semantic-space-between-xxs)}.feature-label-table-cell-inner blz-icon{min-width:var(--global-size-200)}.product-label-cell{border-top-left-radius:var(--global-size-50);border-top-right-radius:var(--global-size-50)}.product-option-header{vertical-align:baseline}.legalese-wrapper{display:flex;justify-content:center}.legalese-block{max-width:700px}.legal-slot::slotted(*){margin-top:var(--semantic-space-between-xxxl)}.legalese-block>*{color:var(--legalese-text-color,var(--global-color-content-500));font:var(--semantic-body-text-sm)}blz-price{margin-top:var(--semantic-space-between-xs)}.product-header-text{color:var(--product-header-color,var(--semantic-color-content-default));font:var(--semantic-heading-text-lg);word-break:break-word}.product-subheading{background-color:transparent;color:var(--product-subheading-color,var(--semantic-color-text-description));font:var(--semantic-heading-text-xs);margin-top:var(--semantic-space-between-xs);word-break:break-word}.comparison-button-cell{padding-top:0}.product-header-container{margin:var(--semantic-space-around-vertical-sm-desktop) var(--semantic-space-around-horizontal-lg-desktop) var(--semantic-space-around-vertical-lg-desktop) var(--semantic-space-around-horizontal-lg-desktop)}blz-image::part(image){aspect-ratio:16/9;border-radius:var(--global-size-50)}.feature-image blz-image::part(image){aspect-ratio:1/1;border-radius:var(--global-size-50);width:var(--feature-image-size)}.feature-image,.feature-image blz-image{min-width:var(--feature-image-size);width:var(--feature-image-size)}.feature-image,.feature-image-spacer{height:var(--feature-image-size);position:relative;transition:var(--global-motion-duration-medium) var(--global-motion-ease-out)}blz-lightbox-trigger:hover blz-image{filter:brightness(1.3) saturate(1)}.image-overlay-gradient{background:linear-gradient(180deg,rgb(21 23 30 / 0) 38%,var(--color-background-700) 100%);border-radius:var(--global-size-50);height:var(--feature-image-size);left:0;outline:1px solid var(--global-color-content-400);pointer-events:none;position:absolute;top:0;transition:all .2s linear;width:var(--feature-image-size)}blz-lightbox-trigger:hover .image-overlay-gradient{outline:var(--global-size-25) solid var(--global-color-content-500)}.feature-image blz-icon{bottom:var(--global-size-50);color:var(--global-color-content-800);height:var(--global-size-250);left:var(--global-size-50);position:absolute;width:var(--global-size-250)}@media (max-width:719px){.desktop-comparison-table{display:none}.mobile-comparison-table{display:block}.product-thumbnail-cell{padding-bottom:0}.featured-column.comparison-button-cell{background-color:var(--featured-column-color);border-radius:0 0 var(--global-size-50) var(--global-size-50)}.feature-label{color:var(--feature-label-color,var(--global-color-content-700));font:var(--semantic-body-text-md);line-height:var(--global-font-line-height-comfy);padding:var(--semantic-space-around-vertical-md-desktop) var(--semantic-space-around-horizontal-md-desktop) 0 var(--semantic-space-around-horizontal-md-desktop)}td.product-label-cell{height:30%;padding:0}.product-value-cell{height:var(--global-size-600);padding-bottom:var(--global-size-125)}tbody td,thead td{padding:var(--semantic-space-around-horizontal-xxs)}tr.product-label-row.odd td,tr.product-value-row.odd td{background:rgb(255 255 255 / 5%)}.product-option-header{padding:0 var(--semantic-space-around-horizontal-xxs)}.comparison-button-cell{padding-bottom:var(--semantic-space-around-horizontal-xxs)}.product-header-container{margin:var(--semantic-space-around-vertical-sm-mobile) 0 var(--semantic-space-around-vertical-md-mobile) 0}blz-price{margin-top:var(--semantic-space-between-xxs)}.product-subheading{margin-top:var(--semantic-space-between-xxs)}blz-image::part(image){aspect-ratio:1/1}}@media (min-width:720px){.mobile-comparison-table{display:none}.product-thumbnail-cell{padding:var(--semantic-space-around-vertical-xs-desktop) var(--semantic-space-around-horizontal-xs) 0 var(--semantic-space-around-horizontal-xs)}.comparison-button-cell{padding:0 var(--semantic-space-around-horizontal-xs) var(--semantic-space-around-vertical-xs-desktop) var(--semantic-space-around-horizontal-xs)}.feature-image-spacer{min-width:var(--feature-image-size);width:var(--feature-image-size)}td:first-child{border-bottom-left-radius:var(--global-size-50);border-top-left-radius:var(--global-size-50)}td:last-child{border-bottom-right-radius:var(--global-size-50);border-top-right-radius:var(--global-size-50)}.featured-column:nth-of-type(n + 3){border-bottom-right-radius:0;border-top-right-radius:0}.featured-column.last-td{border-bottom-right-radius:var(--global-size-50)}tbody tr:first-child td{background:rgb(255 255 255 / 0%)}tbody tr:nth-child(3) td{background:rgb(255 255 255 / 0%)}tbody.feature-body tr:nth-child(even) td{background:rgb(255 255 255 / 5%)}}`
          , Cs = q`[blz-tooltip]{cursor:pointer;position:relative}.blz-tooltip,.blz-tooltip-extension{display:none;margin:0;padding:0;pointer-events:all;position:absolute;-webkit-user-select:text;user-select:text;z-index:var(--measure-z-index-fixed)}.blz-tooltip{background-color:var(--semantic-color-background-info-primary);border:1px solid var(--tooltip-color-border-primary);border-radius:var(--global-size-50);bottom:0;font:var(--tooltip-font-text);left:50%;max-width:var(--tooltip-max-width);padding:var(--global-size-100) var(--global-size-200);text-align:left;transform:translate(-50%,var(--tooltip-vertical-transform));white-space:normal;width:max-content}.blz-tooltip>.blz-tooltip-container{display:flex;flex-direction:column;gap:var(--semantic-space-between-xxl)}.blz-tooltip .blz-tooltip-container>*{max-width:100%}[blz-tooltip\\:place=top] .blz-tooltip{--tooltip-vertical-transform:calc(-100% - var(--tooltip-offset));bottom:auto;top:0}[blz-tooltip\\:place=top] .blz-tooltip-extension{bottom:0}.blz-tooltip-caret{background-color:var(--semantic-color-background-info-primary);content:"";display:none;height:var(--global-size-200);left:50%;margin:0;padding:0;position:absolute;transform:rotate(45deg) translate(-50%);transform-origin:center;width:var(--global-size-200)}[blz-tooltip\\:place=top] .blz-tooltip-caret{top:-18px}[blz-tooltip\\:place=bottom] .blz-tooltip-caret{bottom:-30px}[blz-tooltip\\:place=bottom] .blz-tooltip-extension{top:0}[blz-tooltip\\:sticky=left] .blz-tooltip{left:0;transform:translateY(var(--tooltip-vertical-transform))}[blz-tooltip\\:sticky=right] .blz-tooltip{left:auto;right:0;text-align:right;transform:translateY(var(--tooltip-vertical-transform))}[data-blz-tooltip-active] .blz-tooltip,[data-blz-tooltip-active] .blz-tooltip-caret,[data-blz-tooltip-active] .blz-tooltip-extension{display:inline-block}`
          , Os = q`.blz-table-overflow-container{overflow:auto}[class*=blz-table]{border-collapse:collapse;text-align:left;width:100%}[class*=blz-table] td,[class*=blz-table] th{min-width:240px;padding:var(--global-size-150) var(--global-size-100);vertical-align:top;word-break:break-word}[class*=blz-table] thead{color:var(--global-color-content-900);font:var(--semantic-heading-text-sm)}[class*=blz-table] tbody{color:var(--global-color-content-700);font:var(--semantic-body-text-sm)}[class*=blz-table] tbody tr:nth-child(odd){background-color:#ffffff0d}[class*=blz-table] tbody tr.hover,[class*=blz-table] tbody tr:hover{background-color:#ffffff1a}[class*=blz-table-sticky] th{background-color:var(--global-color-background-800);position:sticky;top:0}[class*=blz-table] tr td:first-of-type,[class*=blz-table] tr th:first-of-type{border:0 solid #0000;border-bottom-left-radius:var(--global-size-50);border-top-left-radius:var(--global-size-50)}[class*=blz-table] tr td:last-of-type,[class*=blz-table] tr th:last-of-type{border:0 solid #0000;border-bottom-right-radius:var(--global-size-50);border-top-right-radius:var(--global-size-50)}@media (min-width:960px){[class*=blz-table] td,[class*=blz-table] th{padding:var(--global-size-300) var(--global-size-200)}[class*=blz-table] thead{font:var(--semantic-heading-text-md)}[class*=blz-table] tbody{font:var(--semantic-body-text-md)}}`
          , Bs = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class Ps extends (dt(et)) {
            static get styles() {
                return [...et.styles, Cs, Ke, Os, Es]
            }
            get componentDependencies() {
                return {
                    [o.BlzImage]: Zr,
                    [o.BlzIcon]: bi,
                    [o.BlzPrice]: vs,
                    [o.BlzLightboxTrigger]: Ss
                }
            }
            constructor() {
                super(),
                this.showFeatureThumbnailSpacers = !1,
                this.sticky = !1,
                this.showFeatureThumbnailSpacers = !1
            }
            connectedCallback() {
                super.connectedCallback && super.connectedCallback(),
                this.initializeLoc(As)
            }
            firstUpdated(e) {
                if (super.firstUpdated(e),
                Ve(( () => vn.store.observe(Qo, this.shadowRoot)), ["complete"]),
                this.sticky) {
                    const e = this.shadowRoot.querySelector(".desktop-comparison-table").children[0].querySelector(".product-thumbnail-cell")
                      , t = this.shadowRoot.querySelector(".mobile-comparison-table").children[0].querySelector(".product-thumbnail-cell")
                      , o = this.shadowRoot.querySelector(".header-container")
                      , n = this.shadowRoot.querySelector(".header-container-mobile")
                      , i = 0 === this._navHeight ? {
                        threshold: [0, 1]
                    } : {
                        threshold: [.1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
                    };
                    this._intersectionObserver = new IntersectionObserver((i => {
                        const a = getComputedStyle(o).top;
                        this._navHeight = parseInt(a.replace("px", "")),
                        window.innerWidth > 720 ? (this._intersectionTarget = e,
                        this._stickyEl = o) : (this._intersectionTarget = t,
                        this._stickyEl = n),
                        this._stickyToggle(i[0])
                    }
                    ),i),
                    this._intersectionObserver.observe(e),
                    this._intersectionObserver.observe(t)
                }
            }
            willUpdate(e) {
                super.willUpdate(e),
                e.has("data") && this._updateFeatureThumbnails()
            }
            _updateFeatureThumbnails() {
                this.showFeatureThumbnailSpacers = !1;
                let e = 0;
                (this.data?.features || []).filter((e => e.image)).forEach((t => {
                    this.showFeatureThumbnailSpacers = !0,
                    t.slide = e++
                }
                ))
            }
            _stickyToggle(e) {
                const t = this._navHeight / this._intersectionTarget.clientHeight;
                e.intersectionRatio < t || !e.isIntersecting ? this._stickyEl.classList.toggle("sticky", !0) : this._stickyEl.classList.toggle("sticky", !1)
            }
            renderFeatureValue(e) {
                switch (e.type) {
                case "icon":
                    return z`<div class="feature-icon"><blz-icon class="icon" icon="${e.value ? "bn-checkmark-outlined" : ""}"></blz-icon></div>`;
                case "text":
                    return z`<div class="feature-text">${e.value}</div>`;
                case "number":
                    return z`<div class="feature-number">${e.value}</div>`;
                default:
                    return z``
                }
            }
            renderFeatureLabel(e) {
                return z`<div class="feature-label-table-cell-inner">${e.image?.src ? z`<span class="feature-image"><blz-lightbox-trigger target="comparison-table-lightbox" slide="${e.slide || "0"}"><blz-image src="${e.image.src}"></blz-image><div class="image-overlay-gradient"></div><blz-icon class="zoom-icon" icon="bn-zoom-filled"></blz-icon></blz-lightbox-trigger></span>` : this.showFeatureThumbnailSpacers ? z`<span class="feature-image-spacer"></span>` : ""} <span part="feature-label-text">${Tt(Jo({
                    markdown: e.label
                }))}</span> ${e.tooltip && e.tooltip.label ? z`<blz-icon part="feature-label-tooltip" blz-tooltip="${e.tooltip.label} ${e.tooltip.image?.src ? `<blz-image\n                  src="${e.tooltip.image.src}"\n                  ${e.tooltip.image.alt ? `alt="${e.tooltip.image.alt}"` : ""}\n                ></blz-image>` : ""}" icon="info-circle" size="200"></blz-icon>` : z``}</div>`
            }
            renderLegaleseBlock() {
                return z`<div class="legalese-wrapper"><div class="legalese-block"><slot class="legal-slot" name="comparison-legalese"></slot></div></div>`
            }
            renderMobileComparisonTable() {
                const {columns: e, features: t} = this.data
                  , o = `width: calc(100%/${e.length + ""})`;
                return z`<table class="mobile-comparison-table"><thead class="header-container-mobile"><tr>${e.map((e => {
                    const t = e.isFeatured ? "featured-column" : "";
                    return z`<td class="product-thumbnail-cell ${t}"><div><blz-image part="product-thumbnail" src="${e.imageSources ? e.imageSources.mobile : e.image}" alt="${e.title}"></blz-image></div></td>`
                }
                ))}</tr><tr>${e.map((e => {
                    const t = e.isFeatured ? "featured-column" : "";
                    return z`<th class="product-option-header ${t}" style="${o}"><div class="product-header-container"><div part="product-header-text" class="product-header-text">${e.title}</div>${e.price ? z`<blz-price part="product-price" price="${e.price}" discount-price="${it(e.discountPrice)}" discount="${it(e.discount)}">${e.priceIcon ? z`<blz-icon slot="virtual-currency" icon="${e.priceIcon}"></blz-icon>` : z``}</blz-price>` : z``}</div><div part="product-subheading-text" class="product-subheading">${e.subheading ? e.subheading : ""}</div></th>`
                }
                ))}</tr>${this.data?.hasButton ? z`<tr class="button-row">${e.map(( (e, t) => {
                    const o = e.isFeatured ? "featured-column" : "";
                    return z`<td class="comparison-button-cell ${o}"><slot name="comparison-button-${t + 1}-mobile"></slot></td>`
                }
                ))}</tr>` : z`<tr></tr>`}</thead><tbody>${t.map(( (t, o) => {
                    const n = t.id;
                    return z`<tr class="product-label-row ${o % 2 == 0 ? "even" : "odd"}"><td class="product-label-cell" colspan="4"><div><div class="feature-label">${this.renderFeatureLabel(t)}</div></div></td></tr><tr class="product-value-row ${o % 2 == 0 ? "even" : "odd"}">${e.map((e => z`<td class="product-value-cell">${this.renderFeatureValue({
                        type: t.type,
                        value: e.features[n]
                    })}</td>`))}</tr>`
                }
                ))}</tbody></table>`
            }
            renderDesktopComparisonTable() {
                const {columns: e, features: t} = this.data
                  , o = `width: calc(80%/${e.length + ""})`;
                return z`<table class="desktop-comparison-table"><tr><td></td>${e.map((e => {
                    const t = e.isFeatured ? "featured-column" : "";
                    return z`<td class="product-thumbnail-cell ${t}"><div class="product-thumbnail"><blz-image part="product-thumbnail" src="${e.imageSources ? e.imageSources.desktop : e.image}" alt="${e.title}"></blz-image></div></td>`
                }
                ))}</tr><tbody class="header-container"><tr><th class="header-container-top" screen-reader-only>${this.getString("comparison_table_features")}</th>${e.map((e => {
                    const t = e.isFeatured ? "featured-column" : "";
                    return z`<th class="product-option-header ${t}" style="${o}"><div class="product-option-cell"><div class="product-header-container"><div part="product-header-text" class="product-header-text">${e.title}</div>${e.price ? z`<blz-price part="product-price" price="${e.price}" discount-price="${it(e.discountPrice)}" discount="${it(e.discount)}">${e.priceIcon ? z`<blz-icon slot="virtual-currency" icon="${e.priceIcon}"></blz-icon>` : z``}</blz-price>` : z``} ${e.subheading ? z`<div part="product-subheading-text" class="product-subheading ${t}">${e.subheading ? e.subheading : ""}</div>` : z``}</div></div></th>`
                }
                ))}</tr>${this.data?.hasButton ? z`<tr class="button-row"><td></td>${e.map(( (e, t) => {
                    const o = e.isFeatured ? "featured-column" : "";
                    return z`<td class="comparison-button-cell ${o}"><slot name="comparison-button-${t + 1}"></slot></td>`
                }
                ))}</tr>` : z`<tr></tr>`}</tbody><tbody class="feature-body">${t.map(( (o, n) => {
                    const i = o.id;
                    return z`<tr><td class="feature-label-table-cell">${this.renderFeatureLabel(o)}</td>${e.map(( (a, r) => {
                        const s = a.isFeatured ? "featured-column" : "";
                        return z`<td class="${s} ${n % 2 == 0 && a.isFeatured ? "even" : "odd"} ${n === t.length - 1 && r === e.length - 1 ? "last-td" : ""}">${this.renderFeatureValue({
                            type: o.type,
                            value: a.features[i]
                        })}</td>`
                    }
                    ))}</tr>`
                }
                ))}</tbody></table>`
            }
            disconnectedCallback() {
                if (this.sticky) {
                    const e = this.shadowRoot.querySelector(".desktop-comparison-table").children[0].querySelector(".product-thumbnail-cell")
                      , t = this.shadowRoot.querySelector(".mobile-comparison-table").children[0].querySelector(".product-thumbnail-cell");
                    this._intersectionObserver && (this._intersectionObserver.unobserve(e),
                    this._intersectionObserver.unobserve(t))
                }
                super.disconnectedCallback && super.disconnectedCallback()
            }
            render() {
                return z`<div class="table-container">${this.renderDesktopComparisonTable()} ${this.renderMobileComparisonTable()} ${this.renderLegaleseBlock()}</div>`
            }
        }
        Bs([de({
            type: Object
        })], Ps.prototype, "data", void 0),
        Bs([de({
            type: Boolean
        })], Ps.prototype, "sticky", void 0),
        Bs([nt()], Ps.prototype, "showFeatureThumbnailSpacers", void 0);
        var Ts = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let Ls = class extends Ps {
        }
        ;
        Ls = Ts([t(o.BlzComparisonTable)], Ls);
        var Is = Ls;
        const Rs = ["product-header-text", "product-subheading-text", "product-price", "product-thumbnail"].join(", ");
        var $s = {
            "en-US": {
                lightbox_close: "Close Lightbox",
                lightbox_next: "Next Slide",
                lightbox_open: "Open Lightbox",
                lightbox_previous: "Previous Slide",
                slide_phrase: "{0} of {1}"
            },
            "de-DE": {
                lightbox_close: "Viewer schließen",
                lightbox_next: "Nächster Artikel",
                lightbox_open: "Viewer öffnen",
                lightbox_previous: "Vorheriger Artikel",
                slide_phrase: "{0} von {1}"
            },
            "es-ES": {
                lightbox_close: "Cerrar Lightbox",
                lightbox_next: "Imagen siguiente",
                lightbox_open: "Abrir Lightbox",
                lightbox_previous: "Imagen anterior",
                slide_phrase: "{0} de {1}"
            },
            "es-MX": {
                lightbox_close: "Cerrar Lightbox",
                lightbox_next: "Imagen siguiente",
                lightbox_open: "Abrir Lightbox",
                lightbox_previous: "Imagen anterior",
                slide_phrase: "{0} de {1}"
            },
            "fr-FR": {
                lightbox_close: "Fermer la fenêtre",
                lightbox_next: "Image suivante",
                lightbox_open: "Ouvrir la fenêtre",
                lightbox_previous: "Image précédente",
                slide_phrase: "{0} / {1}"
            },
            "it-IT": {
                lightbox_close: "Chiudi Lightbox",
                lightbox_next: "Slide successiva",
                lightbox_open: "Apri Lightbox",
                lightbox_previous: "Slide precedente",
                slide_phrase: "{0} di {1}"
            },
            "ja-JP": {
                lightbox_close: "Lightboxを閉じる",
                lightbox_next: "次のスライド",
                lightbox_open: "Lightboxを開く",
                lightbox_previous: "前のスライド",
                slide_phrase: "{0}/{1}"
            },
            "ko-KR": {
                lightbox_close: "라이트박스 닫기",
                lightbox_next: "다음 슬라이드",
                lightbox_open: "라이트박스 열기",
                lightbox_previous: "이전 슬라이드",
                slide_phrase: "{1} 중 {0}"
            },
            "pl-PL": {
                lightbox_close: "Zamknij obraz lightbox",
                lightbox_next: "Następny slajd",
                lightbox_open: "Otwórz obraz lightbox",
                lightbox_previous: "Poprzedni slajd",
                slide_phrase: "{0} z {1}"
            },
            "pt-BR": {
                lightbox_close: "Fechar caixa de imagem",
                lightbox_next: "Slide seguinte",
                lightbox_open: "Abrir caixa de imagem",
                lightbox_previous: "Slide anterior",
                slide_phrase: "{0} de {1}"
            },
            "ru-RU": {
                lightbox_close: "Закрыть подсветку",
                lightbox_next: "Следующий слайд",
                lightbox_open: "Открыть подсветку",
                lightbox_previous: "Предыдущий слайд",
                slide_phrase: "{0} из {1}"
            },
            "tr-TR": {
                lightbox_close: "Görsel Penceresini Kapat",
                lightbox_next: "Sonraki Slayt",
                lightbox_open: "Görsel Penceresini Aç",
                lightbox_previous: "Önceki Slayt",
                slide_phrase: "{0} / {1}"
            },
            "th-TH": {
                lightbox_close: "ปิดไลท์บ็อกซ์",
                lightbox_next: "สไลด์ถัดไป",
                lightbox_open: "เปิดไลท์บ็อกซ์",
                lightbox_previous: "สไลด์ก่อนหน้า",
                slide_phrase: "{0} จากทั้งหมด {1}"
            },
            "zh-CN": {
                lightbox_close: "关闭灯箱",
                lightbox_next: "下一页",
                lightbox_open: "打开灯箱",
                lightbox_previous: "上一页",
                slide_phrase: "第{0}页，共{1}页"
            },
            "zh-TW": {
                lightbox_close: "關閉 Lightbox",
                lightbox_next: "下一頁",
                lightbox_open: "開啟 Lightbox",
                lightbox_previous: "上一頁",
                slide_phrase: "{0}／{1}"
            }
        }
          , js = q`:host{--top-bar-height:72px;background:rgb(0 0 0 / 95%);display:grid;grid-template-columns:1fr;grid-template-rows:[top-bar-start] auto [top-bar-end content-start] 1fr [content-end];height:100%;inset:0;place-content:center;position:fixed;visibility:hidden;width:100%;z-index:var(--measure-z-index-modal)}@supports (backdrop-filter:blur(var(--global-size-250))){:host{backdrop-filter:blur(var(--global-size-250));background:rgb(0 0 0 / 80%)}}:host([visible]){visibility:visible}[part=top-bar]{align-items:center;display:inline-block;grid-row:top-bar;padding:var(--semantic-space-around-vertical-xs-mobile) var(--semantic-space-around-horizontal-xxs);pointer-events:none;position:sticky;top:0;width:100%;z-index:var(--measure-z-index-docked)}.dialog-container{overflow-x:hidden}[part=close]{display:flex;float:right;pointer-events:auto}[part=back]{display:flex;float:left;pointer-events:auto}.dialog-close{height:var(--global-size-500);width:var(--global-size-500)}[part=content]{background-color:var(--semantic-color-background-page-primary);border-radius:var(--global-size-50);bottom:0;margin:0 auto;max-width:800px;opacity:0;overflow:hidden;padding-bottom:var(--top-bar-height);position:absolute;text-align:center;transform:rotateX(30deg) translateY(300px);transition:transform 250ms ease,opacity 250ms ease;width:100%}:host([visible]) [part=content]{opacity:1;transform:rotateX(0) translateY(0)}.inner-content{height:100%;padding:var(--semantic-space-around-vertical-md-mobile) var(--semantic-space-around-horizontal-sm)}.hide{display:none}.content-container{display:grid;height:calc(100vh - var(--top-bar-height));padding:0 var(--semantic-space-around-horizontal-sm) var(--top-bar-height);place-items:center center}:host([variant=dialog]) .content-container{height:100vh;padding:0}.content{max-height:100%}:host(.focus) [part*=content],[part*=content]:focus{outline:0}::slotted(*){display:none}:host([visible]) ::slotted(*){display:initial}slot:not([name])::slotted(*){margin:0 auto}slot[name^=content-]::slotted(*){--section-padding:var(--semantic-section-space-vertical-md-mobile) 0px}@media (min-width:720px){.content-container{padding:0 var(--semantic-space-around-horizontal-lg-desktop) var(--top-bar-height)}[part=content]{bottom:auto;position:static;transition:none}slot[name^=content-]::slotted(*){--section-padding:var(--semantic-section-space-vertical-md-desktop) 0px}}@media (min-width:960px){:host{--top-bar-height:88px}[part=top-bar]{padding:var(--semantic-space-around-vertical-sm-desktop) var(--semantic-space-around-horizontal-sm)}.content-container{padding:0 var(--semantic-space-around-horizontal-xxl-desktop) var(--top-bar-height)}}`
          , Ds = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"]
          , Ns = Ds.join(",")
          , Ms = "undefined" == typeof Element
          , Fs = Ms ? function() {}
        : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
          , Us = !Ms && Element.prototype.getRootNode ? function(e) {
            var t;
            return null == e || null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)
        }
        : function(e) {
            return null == e ? void 0 : e.ownerDocument
        }
          , Hs = function e(t, o) {
            var n;
            void 0 === o && (o = !0);
            var i = null == t || null === (n = t.getAttribute) || void 0 === n ? void 0 : n.call(t, "inert");
            return "" === i || "true" === i || o && t && e(t.parentNode)
        }
          , Vs = function(e, t, o) {
            if (Hs(e))
                return [];
            var n = Array.prototype.slice.apply(e.querySelectorAll(Ns));
            return t && Fs.call(e, Ns) && n.unshift(e),
            n = n.filter(o)
        }
          , qs = function e(t, o, n) {
            for (var i = [], a = Array.from(t); a.length; ) {
                var r = a.shift();
                if (!Hs(r, !1))
                    if ("SLOT" === r.tagName) {
                        var s = r.assignedElements()
                          , l = e(s.length ? s : r.children, !0, n);
                        n.flatten ? i.push.apply(i, l) : i.push({
                            scopeParent: r,
                            candidates: l
                        })
                    } else {
                        Fs.call(r, Ns) && n.filter(r) && (o || !t.includes(r)) && i.push(r);
                        var c = r.shadowRoot || "function" == typeof n.getShadowRoot && n.getShadowRoot(r)
                          , d = !Hs(c, !1) && (!n.shadowRootFilter || n.shadowRootFilter(r));
                        if (c && d) {
                            var u = e(!0 === c ? r.children : c.children, !0, n);
                            n.flatten ? i.push.apply(i, u) : i.push({
                                scopeParent: r,
                                candidates: u
                            })
                        } else
                            a.unshift.apply(a, r.children)
                    }
            }
            return i
        }
          , Gs = function(e) {
            return !isNaN(parseInt(e.getAttribute("tabindex"), 10))
        }
          , Ws = function(e) {
            if (!e)
                throw new Error("No node provided");
            return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || function(e) {
                var t, o = null == e || null === (t = e.getAttribute) || void 0 === t ? void 0 : t.call(e, "contenteditable");
                return "" === o || "true" === o
            }(e)) && !Gs(e) ? 0 : e.tabIndex
        }
          , Ys = function(e, t) {
            return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
        }
          , Ks = function(e) {
            return "INPUT" === e.tagName
        }
          , Xs = function(e) {
            return function(e) {
                return Ks(e) && "radio" === e.type
            }(e) && !function(e) {
                if (!e.name)
                    return !0;
                var t, o = e.form || Us(e), n = function(e) {
                    return o.querySelectorAll('input[type="radio"][name="' + e + '"]')
                };
                if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape)
                    t = n(window.CSS.escape(e.name));
                else
                    try {
                        t = n(e.name)
                    } catch (e) {
                        return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message),
                        !1
                    }
                var i = function(e, t) {
                    for (var o = 0; o < e.length; o++)
                        if (e[o].checked && e[o].form === t)
                            return e[o]
                }(t, e.form);
                return !i || i === e
            }(e)
        }
          , Zs = function(e) {
            var t = e.getBoundingClientRect()
              , o = t.width
              , n = t.height;
            return 0 === o && 0 === n
        }
          , Js = function(e, t) {
            var o = t.displayCheck
              , n = t.getShadowRoot;
            if ("hidden" === getComputedStyle(e).visibility)
                return !0;
            var i = Fs.call(e, "details>summary:first-of-type") ? e.parentElement : e;
            if (Fs.call(i, "details:not([open]) *"))
                return !0;
            if (o && "full" !== o && "legacy-full" !== o) {
                if ("non-zero-area" === o)
                    return Zs(e)
            } else {
                if ("function" == typeof n) {
                    for (var a = e; e; ) {
                        var r = e.parentElement
                          , s = Us(e);
                        if (r && !r.shadowRoot && !0 === n(r))
                            return Zs(e);
                        e = e.assignedSlot ? e.assignedSlot : r || s === e.ownerDocument ? r : s.host
                    }
                    e = a
                }
                if (function(e) {
                    var t, o, n, i, a = e && Us(e), r = null === (t = a) || void 0 === t ? void 0 : t.host, s = !1;
                    if (a && a !== e)
                        for (s = !!(null !== (o = r) && void 0 !== o && null !== (n = o.ownerDocument) && void 0 !== n && n.contains(r) || null != e && null !== (i = e.ownerDocument) && void 0 !== i && i.contains(e)); !s && r; ) {
                            var l, c, d;
                            s = !(null === (c = r = null === (l = a = Us(r)) || void 0 === l ? void 0 : l.host) || void 0 === c || null === (d = c.ownerDocument) || void 0 === d || !d.contains(r))
                        }
                    return s
                }(e))
                    return !e.getClientRects().length;
                if ("legacy-full" !== o)
                    return !0
            }
            return !1
        }
          , Qs = function(e, t) {
            return !(t.disabled || Hs(t) || function(e) {
                return Ks(e) && "hidden" === e.type
            }(t) || Js(t, e) || function(e) {
                return "DETAILS" === e.tagName && Array.prototype.slice.apply(e.children).some((function(e) {
                    return "SUMMARY" === e.tagName
                }
                ))
            }(t) || function(e) {
                if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                    for (var t = e.parentElement; t; ) {
                        if ("FIELDSET" === t.tagName && t.disabled) {
                            for (var o = 0; o < t.children.length; o++) {
                                var n = t.children.item(o);
                                if ("LEGEND" === n.tagName)
                                    return !!Fs.call(t, "fieldset[disabled] *") || !n.contains(e)
                            }
                            return !0
                        }
                        t = t.parentElement
                    }
                return !1
            }(t))
        }
          , el = function(e, t) {
            return !(Xs(t) || Ws(t) < 0 || !Qs(e, t))
        }
          , tl = function(e) {
            var t = parseInt(e.getAttribute("tabindex"), 10);
            return !!(isNaN(t) || t >= 0)
        }
          , ol = function e(t) {
            var o = []
              , n = [];
            return t.forEach((function(t, i) {
                var a = !!t.scopeParent
                  , r = a ? t.scopeParent : t
                  , s = function(e, t) {
                    var o = Ws(e);
                    return o < 0 && t && !Gs(e) ? 0 : o
                }(r, a)
                  , l = a ? e(t.candidates) : r;
                0 === s ? a ? o.push.apply(o, l) : o.push(r) : n.push({
                    documentOrder: i,
                    tabIndex: s,
                    item: t,
                    isScope: a,
                    content: l
                })
            }
            )),
            n.sort(Ys).reduce((function(e, t) {
                return t.isScope ? e.push.apply(e, t.content) : e.push(t.content),
                e
            }
            ), []).concat(o)
        }
          , nl = function(e, t) {
            if (t = t || {},
            !e)
                throw new Error("No node provided");
            return !1 !== Fs.call(e, Ns) && el(t, e)
        }
          , il = Ds.concat("iframe").join(",")
          , al = function(e, t) {
            if (t = t || {},
            !e)
                throw new Error("No node provided");
            return !1 !== Fs.call(e, il) && Qs(t, e)
        };
        function rl(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var o = 0, n = Array(t); o < t; o++)
                n[o] = e[o];
            return n
        }
        function sl(e, t, o) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || !e)
                        return e;
                    var o = e[Symbol.toPrimitive];
                    if (void 0 !== o) {
                        var n = o.call(e, t || "default");
                        if ("object" != typeof n)
                            return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : t + ""
            }(t))in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o,
            e
        }
        function ll(e, t) {
            var o = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                o.push.apply(o, n)
            }
            return o
        }
        function cl(e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ll(Object(o), !0).forEach((function(t) {
                    sl(e, t, o[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : ll(Object(o)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                }
                ))
            }
            return e
        }
        function dl(e) {
            return function(e) {
                if (Array.isArray(e))
                    return rl(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return rl(e, t);
                    var o = {}.toString.call(e).slice(8, -1);
                    return "Object" === o && e.constructor && (o = e.constructor.name),
                    "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? rl(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var ul = function(e, t) {
            if (e.length > 0) {
                var o = e[e.length - 1];
                o !== t && o._setPausedState(!0)
            }
            var n = e.indexOf(t);
            -1 === n || e.splice(n, 1),
            e.push(t)
        }
          , pl = function(e, t) {
            var o = e.indexOf(t);
            -1 !== o && e.splice(o, 1),
            e.length > 0 && !e[e.length - 1]._isManuallyPaused() && e[e.length - 1]._setPausedState(!1)
        }
          , hl = function(e) {
            return "Tab" === (null == e ? void 0 : e.key) || 9 === (null == e ? void 0 : e.keyCode)
        }
          , bl = function(e) {
            return hl(e) && !e.shiftKey
        }
          , gl = function(e) {
            return hl(e) && e.shiftKey
        }
          , ml = function(e) {
            return setTimeout(e, 0)
        }
          , vl = function(e) {
            for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                o[n - 1] = arguments[n];
            return "function" == typeof e ? e.apply(void 0, o) : e
        }
          , fl = function(e) {
            return e.target.shadowRoot && "function" == typeof e.composedPath ? e.composedPath()[0] : e.target
        }
          , yl = []
          , wl = function(e, t) {
            var o, n = (null == t ? void 0 : t.document) || document, i = (null == t ? void 0 : t.trapStack) || yl, a = cl({
                returnFocusOnDeactivate: !0,
                escapeDeactivates: !0,
                delayInitialFocus: !0,
                isKeyForward: bl,
                isKeyBackward: gl
            }, t), r = {
                containers: [],
                containerGroups: [],
                tabbableGroups: [],
                nodeFocusedBeforeActivation: null,
                mostRecentlyFocusedNode: null,
                active: !1,
                paused: !1,
                manuallyPaused: !1,
                delayInitialFocusTimer: void 0,
                recentNavEvent: void 0
            }, s = function(e, t, o) {
                return e && void 0 !== e[t] ? e[t] : a[o || t]
            }, l = function(e, t) {
                var o = "function" == typeof (null == t ? void 0 : t.composedPath) ? t.composedPath() : void 0;
                return r.containerGroups.findIndex((function(t) {
                    var n = t.container
                      , i = t.tabbableNodes;
                    return n.contains(e) || (null == o ? void 0 : o.includes(n)) || i.find((function(t) {
                        return t === e
                    }
                    ))
                }
                ))
            }, c = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , o = t.hasFallback
                  , i = void 0 !== o && o
                  , r = t.params
                  , s = void 0 === r ? [] : r
                  , l = a[e];
                if ("function" == typeof l && (l = l.apply(void 0, dl(s))),
                !0 === l && (l = void 0),
                !l) {
                    if (void 0 === l || !1 === l)
                        return l;
                    throw new Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
                }
                var c = l;
                if ("string" == typeof l) {
                    try {
                        c = n.querySelector(l)
                    } catch (t) {
                        throw new Error("`".concat(e, '` appears to be an invalid selector; error="').concat(t.message, '"'))
                    }
                    if (!c && !i)
                        throw new Error("`".concat(e, "` as selector refers to no known node"))
                }
                return c
            }, d = function() {
                var e = c("initialFocus", {
                    hasFallback: !0
                });
                if (!1 === e)
                    return !1;
                if (void 0 === e || e && !al(e, a.tabbableOptions))
                    if (l(n.activeElement) >= 0)
                        e = n.activeElement;
                    else {
                        var t = r.tabbableGroups[0];
                        e = t && t.firstTabbableNode || c("fallbackFocus")
                    }
                else
                    null === e && (e = c("fallbackFocus"));
                if (!e)
                    throw new Error("Your focus-trap needs to have at least one focusable element");
                return e
            }, u = function() {
                if (r.containerGroups = r.containers.map((function(e) {
                    var t = function(e, t) {
                        var o;
                        return o = (t = t || {}).getShadowRoot ? qs([e], t.includeContainer, {
                            filter: el.bind(null, t),
                            flatten: !1,
                            getShadowRoot: t.getShadowRoot,
                            shadowRootFilter: tl
                        }) : Vs(e, t.includeContainer, el.bind(null, t)),
                        ol(o)
                    }(e, a.tabbableOptions)
                      , o = function(e, t) {
                        return (t = t || {}).getShadowRoot ? qs([e], t.includeContainer, {
                            filter: Qs.bind(null, t),
                            flatten: !0,
                            getShadowRoot: t.getShadowRoot
                        }) : Vs(e, t.includeContainer, Qs.bind(null, t))
                    }(e, a.tabbableOptions)
                      , n = t.length > 0 ? t[0] : void 0
                      , i = t.length > 0 ? t[t.length - 1] : void 0
                      , r = o.find((function(e) {
                        return nl(e)
                    }
                    ))
                      , s = o.slice().reverse().find((function(e) {
                        return nl(e)
                    }
                    ))
                      , l = !!t.find((function(e) {
                        return Ws(e) > 0
                    }
                    ));
                    return {
                        container: e,
                        tabbableNodes: t,
                        focusableNodes: o,
                        posTabIndexesFound: l,
                        firstTabbableNode: n,
                        lastTabbableNode: i,
                        firstDomTabbableNode: r,
                        lastDomTabbableNode: s,
                        nextTabbableNode: function(e) {
                            var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                              , i = t.indexOf(e);
                            return i < 0 ? n ? o.slice(o.indexOf(e) + 1).find((function(e) {
                                return nl(e)
                            }
                            )) : o.slice(0, o.indexOf(e)).reverse().find((function(e) {
                                return nl(e)
                            }
                            )) : t[i + (n ? 1 : -1)]
                        }
                    }
                }
                )),
                r.tabbableGroups = r.containerGroups.filter((function(e) {
                    return e.tabbableNodes.length > 0
                }
                )),
                r.tabbableGroups.length <= 0 && !c("fallbackFocus"))
                    throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
                if (r.containerGroups.find((function(e) {
                    return e.posTabIndexesFound
                }
                )) && r.containerGroups.length > 1)
                    throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
            }, p = function(e) {
                var t = e.activeElement;
                if (t)
                    return t.shadowRoot && null !== t.shadowRoot.activeElement ? p(t.shadowRoot) : t
            }, h = function(e) {
                !1 !== e && e !== p(document) && (e && e.focus ? (e.focus({
                    preventScroll: !!a.preventScroll
                }),
                r.mostRecentlyFocusedNode = e,
                function(e) {
                    return e.tagName && "input" === e.tagName.toLowerCase() && "function" == typeof e.select
                }(e) && e.select()) : h(d()))
            }, b = function(e) {
                var t = c("setReturnFocus", {
                    params: [e]
                });
                return t || !1 !== t && e
            }, g = function(e) {
                var t = e.target
                  , o = e.event
                  , n = e.isBackward
                  , i = void 0 !== n && n;
                t = t || fl(o),
                u();
                var s = null;
                if (r.tabbableGroups.length > 0) {
                    var d = l(t, o)
                      , p = d >= 0 ? r.containerGroups[d] : void 0;
                    if (d < 0)
                        s = i ? r.tabbableGroups[r.tabbableGroups.length - 1].lastTabbableNode : r.tabbableGroups[0].firstTabbableNode;
                    else if (i) {
                        var h = r.tabbableGroups.findIndex((function(e) {
                            var o = e.firstTabbableNode;
                            return t === o
                        }
                        ));
                        if (h < 0 && (p.container === t || al(t, a.tabbableOptions) && !nl(t, a.tabbableOptions) && !p.nextTabbableNode(t, !1)) && (h = d),
                        h >= 0) {
                            var b = 0 === h ? r.tabbableGroups.length - 1 : h - 1
                              , g = r.tabbableGroups[b];
                            s = Ws(t) >= 0 ? g.lastTabbableNode : g.lastDomTabbableNode
                        } else
                            hl(o) || (s = p.nextTabbableNode(t, !1))
                    } else {
                        var m = r.tabbableGroups.findIndex((function(e) {
                            var o = e.lastTabbableNode;
                            return t === o
                        }
                        ));
                        if (m < 0 && (p.container === t || al(t, a.tabbableOptions) && !nl(t, a.tabbableOptions) && !p.nextTabbableNode(t)) && (m = d),
                        m >= 0) {
                            var v = m === r.tabbableGroups.length - 1 ? 0 : m + 1
                              , f = r.tabbableGroups[v];
                            s = Ws(t) >= 0 ? f.firstTabbableNode : f.firstDomTabbableNode
                        } else
                            hl(o) || (s = p.nextTabbableNode(t))
                    }
                } else
                    s = c("fallbackFocus");
                return s
            }, m = function(e) {
                var t = fl(e);
                l(t, e) >= 0 || (vl(a.clickOutsideDeactivates, e) ? o.deactivate({
                    returnFocus: a.returnFocusOnDeactivate
                }) : vl(a.allowOutsideClick, e) || e.preventDefault())
            }, v = function(e) {
                var t = fl(e)
                  , o = l(t, e) >= 0;
                if (o || t instanceof Document)
                    o && (r.mostRecentlyFocusedNode = t);
                else {
                    var n;
                    e.stopImmediatePropagation();
                    var i = !0;
                    if (r.mostRecentlyFocusedNode)
                        if (Ws(r.mostRecentlyFocusedNode) > 0) {
                            var s = l(r.mostRecentlyFocusedNode)
                              , c = r.containerGroups[s].tabbableNodes;
                            if (c.length > 0) {
                                var u = c.findIndex((function(e) {
                                    return e === r.mostRecentlyFocusedNode
                                }
                                ));
                                u >= 0 && (a.isKeyForward(r.recentNavEvent) ? u + 1 < c.length && (n = c[u + 1],
                                i = !1) : u - 1 >= 0 && (n = c[u - 1],
                                i = !1))
                            }
                        } else
                            r.containerGroups.some((function(e) {
                                return e.tabbableNodes.some((function(e) {
                                    return Ws(e) > 0
                                }
                                ))
                            }
                            )) || (i = !1);
                    else
                        i = !1;
                    i && (n = g({
                        target: r.mostRecentlyFocusedNode,
                        isBackward: a.isKeyBackward(r.recentNavEvent)
                    })),
                    h(n || (r.mostRecentlyFocusedNode || d()))
                }
                r.recentNavEvent = void 0
            }, f = function(e) {
                (a.isKeyForward(e) || a.isKeyBackward(e)) && function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    r.recentNavEvent = e;
                    var o = g({
                        event: e,
                        isBackward: t
                    });
                    o && (hl(e) && e.preventDefault(),
                    h(o))
                }(e, a.isKeyBackward(e))
            }, y = function(e) {
                (function(e) {
                    return "Escape" === (null == e ? void 0 : e.key) || "Esc" === (null == e ? void 0 : e.key) || 27 === (null == e ? void 0 : e.keyCode)
                }
                )(e) && !1 !== vl(a.escapeDeactivates, e) && (e.preventDefault(),
                o.deactivate())
            }, w = function(e) {
                var t = fl(e);
                l(t, e) >= 0 || vl(a.clickOutsideDeactivates, e) || vl(a.allowOutsideClick, e) || (e.preventDefault(),
                e.stopImmediatePropagation())
            }, _ = function() {
                if (r.active)
                    return ul(i, o),
                    r.delayInitialFocusTimer = a.delayInitialFocus ? ml((function() {
                        h(d())
                    }
                    )) : h(d()),
                    n.addEventListener("focusin", v, !0),
                    n.addEventListener("mousedown", m, {
                        capture: !0,
                        passive: !1
                    }),
                    n.addEventListener("touchstart", m, {
                        capture: !0,
                        passive: !1
                    }),
                    n.addEventListener("click", w, {
                        capture: !0,
                        passive: !1
                    }),
                    n.addEventListener("keydown", f, {
                        capture: !0,
                        passive: !1
                    }),
                    n.addEventListener("keydown", y),
                    o
            }, x = function() {
                if (r.active)
                    return n.removeEventListener("focusin", v, !0),
                    n.removeEventListener("mousedown", m, !0),
                    n.removeEventListener("touchstart", m, !0),
                    n.removeEventListener("click", w, !0),
                    n.removeEventListener("keydown", f, !0),
                    n.removeEventListener("keydown", y),
                    o
            }, z = "undefined" != typeof window && "MutationObserver"in window ? new MutationObserver((function(e) {
                e.some((function(e) {
                    return Array.from(e.removedNodes).some((function(e) {
                        return e === r.mostRecentlyFocusedNode
                    }
                    ))
                }
                )) && h(d())
            }
            )) : void 0, k = function() {
                z && (z.disconnect(),
                r.active && !r.paused && r.containers.map((function(e) {
                    z.observe(e, {
                        subtree: !0,
                        childList: !0
                    })
                }
                )))
            };
            return o = {
                get active() {
                    return r.active
                },
                get paused() {
                    return r.paused
                },
                activate: function(e) {
                    if (r.active)
                        return this;
                    var t = s(e, "onActivate")
                      , o = s(e, "onPostActivate")
                      , i = s(e, "checkCanFocusTrap");
                    i || u(),
                    r.active = !0,
                    r.paused = !1,
                    r.nodeFocusedBeforeActivation = n.activeElement,
                    null == t || t();
                    var a = function() {
                        i && u(),
                        _(),
                        k(),
                        null == o || o()
                    };
                    return i ? (i(r.containers.concat()).then(a, a),
                    this) : (a(),
                    this)
                },
                deactivate: function(e) {
                    if (!r.active)
                        return this;
                    var t = cl({
                        onDeactivate: a.onDeactivate,
                        onPostDeactivate: a.onPostDeactivate,
                        checkCanReturnFocus: a.checkCanReturnFocus
                    }, e);
                    clearTimeout(r.delayInitialFocusTimer),
                    r.delayInitialFocusTimer = void 0,
                    x(),
                    r.active = !1,
                    r.paused = !1,
                    k(),
                    pl(i, o);
                    var n = s(t, "onDeactivate")
                      , l = s(t, "onPostDeactivate")
                      , c = s(t, "checkCanReturnFocus")
                      , d = s(t, "returnFocus", "returnFocusOnDeactivate");
                    null == n || n();
                    var u = function() {
                        ml((function() {
                            d && h(b(r.nodeFocusedBeforeActivation)),
                            null == l || l()
                        }
                        ))
                    };
                    return d && c ? (c(b(r.nodeFocusedBeforeActivation)).then(u, u),
                    this) : (u(),
                    this)
                },
                pause: function(e) {
                    return r.active ? (r.manuallyPaused = !0,
                    this._setPausedState(!0, e)) : this
                },
                unpause: function(e) {
                    return r.active ? (r.manuallyPaused = !1,
                    i[i.length - 1] !== this ? this : this._setPausedState(!1, e)) : this
                },
                updateContainerElements: function(e) {
                    var t = [].concat(e).filter(Boolean);
                    return r.containers = t.map((function(e) {
                        return "string" == typeof e ? n.querySelector(e) : e
                    }
                    )),
                    r.active && u(),
                    k(),
                    this
                }
            },
            Object.defineProperties(o, {
                _isManuallyPaused: {
                    value: function() {
                        return r.manuallyPaused
                    }
                },
                _setPausedState: {
                    value: function(e, t) {
                        if (r.paused === e)
                            return this;
                        if (r.paused = e,
                        e) {
                            var o = s(t, "onPause")
                              , n = s(t, "onPostPause");
                            null == o || o(),
                            x(),
                            k(),
                            null == n || n()
                        } else {
                            var i = s(t, "onUnpause")
                              , a = s(t, "onPostUnpause");
                            null == i || i(),
                            u(),
                            _(),
                            k(),
                            null == a || a()
                        }
                        return this
                    }
                }
            }),
            o.updateContainerElements(e),
            o
        }
          , _l = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class xl extends (dt(kn)) {
            get componentDependencies() {
                return {
                    [o.BlzIconButton]: Ci
                }
            }
            constructor() {
                super(),
                this._isModalActive = !1,
                this._resetStates = () => {
                    this.steps.item([this._activeIndex]).removeAttribute("active"),
                    this._activeIndex = 0,
                    this.requestUpdate()
                }
                ,
                this._renderDialogVariant = () => z`<div role="dialog" aria-label="${it(this.title)}" aria-labelledby="${it(this.ariaLabelledBy)}" tabindex="0" class="content-container"><div part="content" class="content" blz-modal-ignore-click><div part="top-bar"><blz-icon-button class="dialog-close" @click="${this._clickClose}" part="close" exportparts="close, icon: close-icon" icon="x" label="${this.getString("lightbox_close")}"></blz-icon-button></div><div class="inner-content"><slot name="content-before"></slot><slot class="dialog-content" blz-modal-ignore-click name="dialog-content"></slot>${this._defaultContent()}<slot name="content-after"></slot></div></div></div>`,
                this._handleHistoryChange = e => {
                    !history.state || 0 === Object.keys(history.state).length || !history.state.modal ? this.close({
                        event: e
                    }) : this.id && history.state && history.state.modal === this.id && (this._isModalActive ? this.close({
                        event: e
                    }) : this.open({
                        event: e
                    }))
                }
                ,
                this._setHistoryStateWithModalId = () => {
                    window.history.state && window.history.state.modal || window.history.pushState({
                        modal: this.id
                    }, "")
                }
                ,
                this._handleURL = e => {
                    this.urlHash && -1 !== window.location.href.indexOf(this.urlHash) && this.open(e)
                }
                ,
                this.retainPlacement = !1,
                this.ignoreClickClass = "blz-modal-ignore-click",
                this.multistep = !1,
                this._componentDeps = [Ci],
                this.analyticsEvent = "modal",
                this._activeIndex = 0
            }
            static get styles() {
                return [...kn.styles, js]
            }
            async open({event: e}={}) {
                this._isModalActive || (e && (this._trigger = e.currentTarget),
                this._isModalActive = !0,
                this.visible = !0,
                this._disableScrolling(),
                this.dispatchEvent(new CustomEvent(`${this.nodeName.toLowerCase()}:open`,{
                    detail: {
                        event: e
                    }
                })),
                document.documentElement.setAttribute("data-blz-modal-opened", ""),
                await this.updateComplete,
                this._focusTrap.activate(),
                this.multistep && (this.steps = this._defaultContent() ? this.shadowRoot.querySelectorAll('[slot*="step-"]') : this.querySelectorAll('[slot*="step-"]'),
                this._setUpMultistep()),
                super.pushEventFromGenerator(wn, {}, Bn.Open))
            }
            async close({event: e}={}) {
                this._isModalActive && (this._isModalActive = !1,
                this.visible = !1,
                this._enableScrolling(),
                this.multistep && this._resetStates(),
                this.dispatchEvent(new CustomEvent(`${this.nodeName.toLowerCase()}:close`,{
                    detail: {
                        event: e
                    }
                })),
                document.documentElement.removeAttribute("data-blz-modal-opened"),
                await this.updateComplete,
                this._focusTrap.deactivate(),
                this._trigger && (xe(e, this._trigger),
                this._trigger = void 0),
                super.pushEventFromGenerator(wn, {}, Bn.Close))
            }
            back({event: e}={}) {
                this._enableScrolling(),
                this.dispatchEvent(new CustomEvent(`${this.nodeName.toLowerCase()}:back`,{
                    detail: {
                        event: e
                    }
                })),
                this._previousIndex = this._previousIndex === this._activeIndex ? this._activeIndex - 1 : this._previousIndex,
                this._backed = !0,
                this._handleProgress(this._previousIndex, void 0),
                this._ModalContent.setAttribute("tabindex", -1),
                this.requestUpdate()
            }
            async _setUpMultistep() {
                await this.updateComplete;
                const e = this.shadowRoot.querySelector('[part="back"]');
                0 === this._activeIndex ? (this.steps[0].setAttribute("active", ""),
                e.classList.toggle("hide", !0)) : e.classList.toggle("hide", !1);
                for (const e of this.steps)
                    e.hasAttribute("active") ? e.style.removeProperty("display") : e.style.setProperty("display", "none")
            }
            _defaultContent() {
                return null
            }
            _ariaLabel(e) {
                !this.hasAttribute("data-aria-label") && e && "false" !== e && (this.title = e)
            }
            render() {
                return "dialog" === this.variant ? this._renderDialogVariant() : z`<div role="dialog" aria-label="${it(this.title)}" aria-labelledby="${it(this.ariaLabelledBy)}" class="dialog-container" tabindex="0"><div part="top-bar" blz-modal-ignore-click>${this.multistep ? z`<blz-icon-button @click="${this.back}" part="back" exportparts="back, icon: arrow-left-icon" icon="arrow-left" label="${this.getString("lightbox_back")}"></blz-icon-button>` : ""}<blz-icon-button @click="${this._clickClose}" part="close" exportparts="close, icon: close-icon" icon="x" label="${this.getString("lightbox_close")}"></blz-icon-button></div><div class="content-container"><div class="content-wrapper"><slot name="content-before"></slot><div class="content" blz-modal-ignore-click part="modal-content content">${this.multistep && !this._defaultContent() ? z`<slot name="step-0"></slot><slot name="step-1"></slot><slot name="step-2"></slot><slot name="step-3"></slot><slot name="step-4"></slot>` : this._defaultContent() ? this._defaultContent() : z`<slot></slot>`}</div><slot name="content-after"></slot></div></div></div>`
            }
            updated(e) {
                if (super.updated(e),
                !this.retainPlacement) {
                    const e = this.id ? document.body.querySelector(`:scope > #${this.id}`) : void 0;
                    e && this.parentNode !== document.body ? (document.body.removeChild(e),
                    document.body.appendChild(this)) : this.parentNode !== document.body && document.body.appendChild(this)
                }
                e.forEach(( (e, t) => {
                    "visible" === t && this.visible !== this._isModalActive && (this.visible ? this.open() : this.close())
                }
                ))
            }
            firstUpdated(e) {
                super.firstUpdated(e),
                this._focusTrap = wl(this._Dialog, {
                    onPostActivate: () => {
                        this.dispatchEvent(new CustomEvent(`${this.nodeName.toLowerCase()}:focus-trap-activated`))
                    }
                    ,
                    onPostDeactivate: () => {
                        this.dispatchEvent(new CustomEvent(`${this.nodeName.toLowerCase()}:focus-trap-deactivated`))
                    }
                    ,
                    clickOutsideDeactivates: !0,
                    tabbableOptions: {
                        getShadowRoot: !0
                    },
                    fallbackFocus: this
                }),
                this.visible && (this._setHistoryStateWithModalId(),
                this._focusTrap.activate(),
                this._isModalActive = !0,
                super.pushEventFromGenerator(wn, {}, Bn.Open)),
                this._handleURL()
            }
            _findModalStep(e) {
                if (e.parentNode.slot.includes("step") ? this._previousIndex = parseInt(e.parentNode.slot.replace("step-", "")) : this._findModalStep(e.parentNode),
                void 0 !== this._previousIndex)
                    return this._previousIndex
            }
            _handleProgress(e, t) {
                void 0 !== t && this._findModalStep(t);
                for (let t = 0; t < this.steps.length; t++)
                    t === e ? (this.steps[t].setAttribute("active", ""),
                    this._activeIndex = e,
                    this._setUpMultistep()) : this.steps[t].hasAttribute("active") && this.steps[t].removeAttribute("active")
            }
            connectedCallback() {
                super.connectedCallback && super.connectedCallback(),
                this.initializeLoc($s),
                this.setAttribute("variant", this.variant),
                this.addEventListener("click", this._ignoreClick),
                this.addEventListener("keydown", this._handleKeyDown),
                this.multistep && (this._buttons = this._defaultContent() ? this.shadowRoot.querySelectorAll("[step]") : this.querySelectorAll("[step]"),
                this._buttons.forEach((e => {
                    e.addEventListener("click", ( () => {
                        this._handleProgress(parseInt(e.getAttribute("step")), e)
                    }
                    ))
                }
                ))),
                this.addEventListener(`${this.nodeName.toLowerCase()}:open`, this._setHistoryStateWithModalId),
                window.addEventListener("popstate", this._handleHistoryChange)
            }
            disconnectedCallback() {
                this._enableScrolling(),
                window.removeEventListener("popstate", this._handleHistoryChange),
                document.documentElement.removeAttribute("data-blz-modal-opened"),
                this.removeEventListener("click", this._ignoreClick),
                this.removeEventListener("keydown", this._handleKeyDown),
                super.disconnectedCallback && super.disconnectedCallback()
            }
            _enableScrolling() {
                document.body.style.overflow = "visible"
            }
            _disableScrolling() {
                document.body.style.overflow = "hidden"
            }
            _handleKeyDown(e) {
                "Escape" === e.key && window.history.back()
            }
            _clickClose() {
                window.history.back()
            }
            _ignoreClick(e) {
                e.composedPath().some((e => "function" == typeof e.getAttributeNames && e.getAttributeNames().includes(this.ignoreClickClass))) || this._clickClose(e)
            }
        }
        _l([ai("[part*=content]")], xl.prototype, "_ModalContent", void 0),
        _l([ai('[role="dialog"]')], xl.prototype, "_Dialog", void 0),
        _l([de({
            attribute: "data-aria-labelledby",
            type: String
        })], xl.prototype, "ariaLabelledBy", void 0),
        _l([de({
            type: String
        })], xl.prototype, "title", void 0),
        _l([de({
            type: Boolean,
            reflect: !0
        })], xl.prototype, "visible", void 0),
        _l([de({
            attribute: "url-hash",
            type: String
        })], xl.prototype, "urlHash", void 0),
        _l([de({
            type: String
        })], xl.prototype, "variant", void 0),
        _l([de({
            type: Boolean
        })], xl.prototype, "multistep", void 0),
        _l([de({
            attribute: "retain-placement",
            type: Boolean
        })], xl.prototype, "retainPlacement", void 0),
        _l([de({
            type: String
        })], xl.prototype, "id", void 0),
        _l([nt()], xl.prototype, "_isModalActive", void 0);
        var zl = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let kl = class extends xl {
        }
        ;
        kl = zl([t(o.BlzModal)], kl);
        var Sl = kl
          , Al = q`.content{overflow:visible;width:100%}.edition-selection{margin:0 auto;max-width:var(--view-xl);padding-bottom:var(--semantic-section-space-vertical-lg);width:100%}#logo{max-width:480px;width:100%}#logo,.header{margin-bottom:var(--semantic-space-between-lg);text-align:center}.header h2,.header-edition h2{margin-bottom:var(--semantic-space-between-xs)}.header-edition{margin-bottom:var(--semantic-space-between-xl)}.content-wrapper{width:100%}.disclaimer.blz-body-text-sm{color:var(--semantic-color-text-description);margin-top:var(--semantic-space-between-lg)}[slot=comparison-legalese]{margin-top:var(--semantic-space-between-lg)}@media (min-width:720px){.header h2,.header-edition h2{margin-bottom:var(--semantic-content-space-md)}#logo,.header{margin-bottom:var(--semantic-space-between-xxl)}.disclaimer.blz-body-text-xl{margin-top:var(--semantic-space-between-xxl)}[slot=comparison-legalese]{margin-top:var(--semantic-space-between-xxl)}}`
          , El = {
            "en-US": {
                available_editions: "Available Editions",
                choose_edition: "Choose Edition"
            },
            "de-DE": {
                available_editions: "Verfügbare Editionen",
                choose_edition: "Edition wählen"
            },
            "es-ES": {
                available_editions: "Ediciones disponibles",
                choose_edition: "Seleccionar edición"
            },
            "es-MX": {
                available_editions: "Ediciones disponibles",
                choose_edition: "Elegir edición"
            },
            "fr-FR": {
                available_editions: "Éditions disponibles",
                choose_edition: "Choisissez une édition"
            },
            "it-IT": {
                available_editions: "Edizioni disponibili",
                choose_edition: "Scegli edizione"
            },
            "ja-JP": {
                available_editions: "利用可能なエディション",
                choose_edition: "エディションを選択"
            },
            "ko-KR": {
                available_editions: "이용 가능한 에디션",
                choose_edition: "에디션 선택"
            },
            "pl-PL": {
                available_editions: "Dostępne edycje",
                choose_edition: "Wybierz edycję"
            },
            "pt-BR": {
                available_editions: "Edições Disponíveis",
                choose_edition: "Escolher Edição"
            },
            "ru-RU": {
                available_editions: "Доступные издания",
                choose_edition: "Выберите издание"
            },
            "tr-TR": {
                choose_edition: "Sürüm Seçin",
                available_editions: "Mevcut Sürümler"
            },
            "th-TH": {
                available_editions: "รุ่นที่พร้อมใช้งาน",
                choose_edition: "เลือกรุ่น"
            },
            "zh-CN": {
                available_editions: "可供选择的版本",
                choose_edition: "选择版本"
            },
            "zh-TW": {
                available_editions: "版本選項",
                choose_edition: "選擇版本"
            }
        }
          , Cl = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class Ol extends Sl {
            get componentDependencies() {
                return {
                    [o.BlzComparisonTable]: Is
                }
            }
            static get styles() {
                return [super.styles, Al]
            }
            connectedCallback() {
                super.connectedCallback && super.connectedCallback(),
                this.initializeLoc(El)
            }
            firstUpdated(e) {
                super.firstUpdated(e),
                super._ariaLabel(this.heading)
            }
            _defaultContent() {
                const {logoUrl: e, heading: t, subheading: o, showDisclaimer: n, _defaultDisclaimer: i, customDisclaimer: a, comparisonLegalese: r, comparisonTable: s} = this;
                return z`<div class="edition-selection"><div part="header" class="header">${e ? z`<blz-image id="logo" src="${it(e)}" part="logo" exportparts="logo, image: logo-image" alt=""></blz-image>` : null} ${"false" !== t ? z`<h2 part="heading" class="blz-title-text-md">${t}</h2>` : null}<p part="subheading" class="blz-body-text-xl">${o}</p></div>${Bl(s, r)} ${n || a ? z`<p class="disclaimer blz-body-text-sm" part="disclaimer-text">${a || i}</p>` : ""}</div>`
            }
        }
        Cl([de({
            attribute: "logo-url",
            type: String
        })], Ol.prototype, "logoUrl", void 0),
        Cl([de({
            type: String
        })], Ol.prototype, "heading", void 0),
        Cl([de({
            type: String
        })], Ol.prototype, "subheading", void 0),
        Cl([de({
            attribute: "show-disclaimer",
            type: Boolean
        })], Ol.prototype, "showDisclaimer", void 0),
        Cl([de({
            attribute: "custom-disclaimer",
            type: String
        })], Ol.prototype, "customDisclaimer", void 0),
        Cl([de({
            attribute: "comparison-legalese",
            type: String
        })], Ol.prototype, "comparisonLegalese", void 0),
        Cl([de({
            attribute: "comparison-table",
            type: Object
        })], Ol.prototype, "comparisonTable", void 0);
        const Bl = (e, t) => z`<blz-comparison-table exportparts="${Rs}" data="${JSON.stringify(e)}">${e.hasButton && e.buttons.length > 0 && e.buttons.map(( (e, t) => z`<blz-button slot="comparison-button-${t + 1}" variant="primary" full-width="true" href="${e.href}" target="_blank" part="comparison-button" analytics-status="${e.analyticsStatus}" analytics-event="${e.analyticsEvent}" analytics-label="${e.analyticsLabel}" analytics-placement="${e.analyticsPlacement}">${e.label}</blz-button><blz-button slot="comparison-button-${t + 1}-mobile" variant="primary" full-width="true" href="${e.href}" target="_blank" part="comparison-button" analytics-status="${e.analyticsStatus}" analytics-event="${e.analyticsEvent}" analytics-label="${e.analyticsLabel}" analytics-placement="${e.analyticsPlacement}">${e.label}</blz-button>`))}<div slot="comparison-legalese">${function(e) {
            if (!e)
                return document.createDocumentFragment();
            const t = document.createElement("template");
            return t.innerHTML = Jo({
                markdown: e
            }),
            t.content
        }(t)}</div></blz-comparison-table>`;
        var Pl = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let Tl = class extends Ol {
        }
        ;
        Tl = Pl([t(o.BlzEditionSelect)], Tl);
        var Ll = q`:host{--gap:var(--semantic-grid-gap-xl-mobile);text-align:center}:host([variant|=center]){display:flex;flex-direction:column;justify-content:center;text-align:center}:host([variant^=left]) #main-content::part(cell-1),:host([variant^=right]) #main-content::part(cell-2){align-self:center}:host([variant*=right]) #main-content::part(cell-1){order:1}:host([mobile-order=reverse][variant*=right]) #main-content::part(cell-1){order:0}:host([mobile-order=reverse][variant*=left]) #main-content::part(cell-1){order:1}:host([variant*=mobile]) slot[name=media]{display:flex;justify-content:center}::slotted([slot=extras]){margin-top:var(--semantic-space-between-xl)}:host([context-gap]) [name=cta]::slotted(*),:host([context-gap]) [name=extras]::slotted(*){margin-top:var(--semantic-space-between-lg)}:host([context-gap~=ghost-button]) [name=cta]::slotted(blz-button[type=ghost]),:host([context-gap~=ghost-button]) [name=extras]::slotted(blz-button[type=ghost]){margin-top:var(--semantic-space-between-xxs)}:host([context-gap~=media]) [name=extras]::slotted(blz-image),:host([context-gap~=media]) [name=extras]::slotted(blz-video),:host([context-gap~=media]) [name=extras]::slotted(img),:host([context-gap~=media]) [name=extras]::slotted(video){margin-top:var(--semantic-space-between-md)}[part=inner-content]{align-items:center;display:flex;flex-direction:column;justify-content:flex-end;text-align:inherit}:host([slot^=slide]) [part=inner-content]{gap:var(--inner-gap,0)}:host([content-alignment=center]) [part=inner-content]{align-items:center;justify-content:center}:host([content-alignment=center]) ::slotted([slot=header]){justify-items:center;text-align:center}slot[name=cta]::slotted(*){display:block;justify-content:center;justify-self:center;margin-top:var(--semantic-space-between-lg)}slot[name=cta]::slotted(blz-button-group){display:inline-flex}slot[name=media]::slotted(*){max-width:100%}slot[name=bottom]::slotted(*),slot[name=top]::slotted(*){height:auto;max-width:480px;width:60%}slot[name=top]::slotted(*){margin-bottom:var(--semantic-space-between-xl)}slot[name=bottom]::slotted(*){margin-top:var(--semantic-space-between-xl)}blz-grid{align-items:center;gap:var(--gap);justify-content:center}@media (min-width:960px){:host{--gap:var(--semantic-grid-gap-xl-desktop)}:host(:not([variant|=center])){text-align:left}:host([variant*=right]) #main-content::part(cell-1){order:0}:host([mobile-order=reverse][variant*=left]) #main-content::part(cell-1){order:0}:host([variant*=mobile]) slot[name=media]::slotted(*){max-width:60%}:host(:not([variant=center])) slot[name=cta]::slotted(*){justify-content:flex-start;justify-self:flex-start}:host([context-gap~=ghost-button]) [name=cta]::slotted(blz-button[type=ghost]),:host([context-gap~=ghost-button]) [name=extras]::slotted(blz-button[type=ghost]){padding:0}:host(:not([content-alignment])) [part=inner-content],:host([content-alignment=left]) [part=inner-content]{align-items:flex-start;justify-content:left}slot[name=top]::slotted(*){margin-bottom:var(--semantic-space-between-xl)}slot[name=bottom]::slotted(*){margin-top:var(--semantic-space-between-xl)}}@media (min-width:720px){::slotted([slot=extras]){margin-top:var(--semantic-space-between-xxxl)}:host([context-gap]) [name=cta]::slotted(*),:host([context-gap]) [name=extras]::slotted(*){margin-top:var(--semantic-space-between-xl)}slot[name=cta]::slotted(*){margin-top:var(--semantic-space-between-xl)}}`
          , Il = q`:host{--template:none;display:grid;gap:var(--semantic-grid-gap-xl-mobile)}:host([vertical]){grid-template-rows:var(--template)}div[part~=cell]{display:none}div[part~=cell].active{display:block}@media (min-width:960px){:host(:not([vertical])){grid-template-columns:var(--template)}}@media (min-width:720px){:host{gap:var(--semantic-grid-gap-xl-desktop)}}`
          , Rl = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class $l extends et {
            constructor() {
                super(...arguments),
                this.vertical = !1
            }
            static get styles() {
                return [...et.styles, Il]
            }
            _mapVariant() {
                this._templates = this.variant.trim().split(" ")
            }
            _setStyle() {
                this.style.setProperty("--template", this._templates.map((e => parseFloat(e).toString().length === e.length ? `${e}fr` : e)).filter((e => void 0 !== e)).join(" "))
            }
            _handleSlotChange() {
                return e => {
                    e.target.assignedElements({
                        flatten: !0
                    }).length > 0 ? e.currentTarget.classList.add("active") : e.currentTarget.classList.remove("active"),
                    this._setStyle()
                }
            }
            _buildLayout() {
                const e = [z`<div part="cell-1 cell" @slotchange="${this._handleSlotChange()}"><slot name="1"><slot></slot></slot></div>`];
                if (this.variant) {
                    this.variant.trim().split(" ").forEach(( (t, o) => {
                        o && e.push(z`<div part="cell-${o + 1} cell" @slotchange="${this._handleSlotChange()}"><slot name="${o + 1}"></slot></div>`)
                    }
                    ))
                }
                return e
            }
            render() {
                return this._buildLayout()
            }
            updated(e) {
                super.updated(e),
                e.has("variant") && (this._mapVariant(),
                this._setStyle())
            }
            firstUpdated(e) {
                super.firstUpdated(e),
                this._mapVariant()
            }
        }
        Rl([de({
            type: Boolean
        })], $l.prototype, "vertical", void 0),
        Rl([de({
            type: String
        })], $l.prototype, "variant", void 0);
        var jl = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let Dl = class extends $l {
        }
        ;
        Dl = jl([t(o.BlzGrid)], Dl);
        var Nl = Dl
          , Ml = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class Fl extends et {
            get componentDependencies() {
                return {
                    [o.BlzGrid]: Nl
                }
            }
            constructor() {
                super(),
                this.contentAlignment = "left",
                this.variant = "left"
            }
            static get styles() {
                return [...et.styles, fr, ot, Ll]
            }
            get _defaultSlottedAttributes() {
                const e = {
                    size: {
                        value: "large"
                    }
                };
                return {
                    header: {
                        "blz-header": {
                            layout: {
                                value: e => e.variant.includes("center") || "center" === this.contentAlignment ? "center" : "left",
                                watch: ["variant"]
                            }
                        }
                    },
                    cta: {
                        "blz-button-group": e,
                        "blz-button": e
                    }
                }
            }
            getSplit() {
                if (this.split)
                    return this.split;
                switch (this.variant) {
                case "center":
                    return "100";
                case "center-top":
                    return "auto min-content";
                case "center-bottom":
                    return "min-content auto";
                case "right":
                    return "60 40";
                default:
                    return this.variant.includes("mobile-game") || this.variant.includes("center-") ? "50 50" : "40 60"
                }
            }
            render() {
                const e = this.getSplit()
                  , t = this.variant.includes("right") || "center-bottom" === this.variant ? "2" : "1"
                  , o = this.variant.includes("right") || "center-bottom" === this.variant ? "1" : "2";
                [...this.children].some((e => "BLZ-LIST" === e.tagName)) && this.style.setProperty("--inner-gap", "var(--global-resize-800)");
                const n = this.variant.includes("center");
                return z`<blz-grid id="main-content" variant="${e}" vertical="${it(n ? "" : void 0)}"><div part="inner-content" slot="${t}"><slot name="top"></slot><slot name="header"></slot><slot name="cta" slot="2"></slot><slot name="extras" slot="3"></slot><slot name="bottom"></slot></div><slot name="media" slot="${o}"><div aspect-ratio="1:1" bp="+sm"></div></slot></blz-grid>`
            }
            firstUpdated(e) {
                super.firstUpdated(e),
                Be(this)
            }
        }
        Ml([de({
            type: String
        })], Fl.prototype, "split", void 0),
        Ml([de({
            attribute: "context-gap",
            type: String
        })], Fl.prototype, "contextGap", void 0),
        Ml([de({
            attribute: "content-alignment",
            type: String
        })], Fl.prototype, "contentAlignment", void 0),
        Ml([de({
            attribute: "mobile-order",
            type: String
        })], Fl.prototype, "mobileOrder", void 0),
        Ml([de({
            type: String,
            reflect: !0
        })], Fl.prototype, "variant", void 0);
        var Ul = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let Hl = class extends Fl {
        }
        ;
        Hl = Ul([t(o.BlzFeature)], Hl);
        var Vl = q`:host{margin:0 auto}:host #main-content{gap:var(--semantic-header-margin-space-lg-mobile)}:host([variant=split]) #main-content{grid-template-columns:repeat(1,1fr);max-width:var(--view-xl)}@media (min-width:1200px){:host([variant=split]) #main-content{grid-template-columns:var(--template)}}@media (min-width:720px){:host #main-content{gap:var(--semantic-header-margin-space-lg-desktop)}}`
          , ql = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class Gl extends et {
            get componentDependencies() {
                return {
                    [o.BlzGrid]: Nl,
                    [o.BlzSection]: Qn
                }
            }
            constructor() {
                super(),
                this.variant = "standard"
            }
            static get styles() {
                return [...et.styles, Vl]
            }
            get _defaultSlottedAttributes() {
                return {
                    header: {
                        "blz-header": {
                            layout: {
                                value: e => "split" === e.variant ? "left" : "center",
                                watch: ["variant"]
                            },
                            size: {
                                value: e => "split" === e.variant ? "medium" : "large",
                                watch: ["variant"]
                            }
                        }
                    }
                }
            }
            render() {
                const e = "split" === this.variant;
                return z`<blz-section size="${e ? "default" : "narrow"}" part="section" exportparts="${ei}"><blz-grid id="main-content" variant="${e ? "minmax(300px,min-content) 1" : "1 -1"}" ?vertical="${!e}"><slot name="header" slot="1"></slot><slot name="list" slot="2"></slot></blz-grid></blz-section>`
            }
        }
        ql([de({
            type: String,
            reflect: !0
        })], Gl.prototype, "variant", void 0);
        var Wl = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let Yl = class extends Gl {
        }
        ;
        Yl = Wl([t(o.BlzFeaturesList)], Yl);
        var Kl = q`:host{--icon-size:var(--global-size-800);display:grid;justify-content:center;justify-items:center;text-align:center}:host([size=small]){--icon-size:var(--global-size-700)}::slotted([slot=icon]){height:var(--icon-size);margin:auto auto var(--semantic-space-between-md);width:var(--icon-size)}#subheading::slotted(*){color:var(--semantic-color-text-description)}#subheading::slotted([slot=subheading]){margin-bottom:var(--semantic-content-space-xs)}#heading::slotted(*){max-width:800px}:host([size=large]) #heading::slotted(*){max-width:1000px}#description::slotted(*){color:var(--semantic-color-content-info);justify-self:center;max-width:720px}#description::slotted([slot=description]){margin-top:var(--semantic-content-space-md)}#description::slotted([slot=description]),:host([size=medium]) #description::slotted([slot=description]),:host([size=small]){margin-top:var(--semantic-content-space-sm)}@media (min-width:960px){:host{--icon-size:var(--global-size-1000)}:host([size=small]){--icon-size:var(--global-size-800)}:host(:not([layout=center])){justify-content:flex-start;justify-items:left;text-align:left}:host(:not([layout=center])) ::slotted([slot=icon]){margin:0 0 var(--semantic-space-between-xl)}:host([variant=center]){justify-content:center;text-align:center}:host(:not([layout=center])) #description::slotted(*){justify-self:initial}#description::slotted([slot=description]),:host([size=medium]) #description::slotted([slot=description]),:host([size=small]){margin-top:var(--semantic-content-space-md)}@media (min-width:720px){::slotted([slot=icon]){margin:auto auto var(--semantic-space-between-xl)}}}`
          , Xl = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class Zl extends et {
            constructor() {
                super(...arguments),
                this.layout = "left",
                this.size = "large"
            }
            static get styles() {
                return [...et.styles, Kl]
            }
            render() {
                const e = z`<slot name="subheading" id="subheading" class="blz-heading-text-lg"></slot>`;
                return z`<slot name="icon">${e}</slot><slot name="heading" id="heading" class="blz-title-text${"large" === this.size ? "-lg" : "medium" === this.size ? "-md" : "-sm"}"></slot><slot name="description" id="description" class="blz-body-text-xl" @slotchange="${ () => this.toggleAttribute("has-description", this.shadowRoot?.getElementById("description")?.assignedElements().length > 0)}"></slot>`
            }
        }
        Xl([de({
            type: String
        })], Zl.prototype, "variant", void 0),
        Xl([de({
            type: String
        })], Zl.prototype, "layout", void 0),
        Xl([de({
            type: String
        })], Zl.prototype, "size", void 0);
        var Jl = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let Ql = class extends Zl {
        }
        ;
        Ql = Jl([t(o.BlzHeader)], Ql);
        var ec = q`:host{--card-gap:var(--semantic-grid-gap-lg-mobile)}[part=section]{--header-margin:var(--semantic-header-margin-space-lg-mobile)}.gallery{display:flex;flex-wrap:wrap;gap:var(--card-gap);justify-content:center}.standard{--card-gap:var(--semantic-grid-gap-md-mobile)}::slotted([slot=gallery-items]){width:100%}::slotted([slot=gallery-items]:focus),::slotted([slot=gallery-items]:focus-within),::slotted([slot=gallery-items]:hover),:host(.focus) ::slotted([slot=gallery-items]),:host(.focus-within) ::slotted([slot=gallery-items]),:host(.hover) ::slotted([slot=gallery-items]){cursor:auto}::slotted([slot=cta]:first-of-type){display:flex;justify-content:center;margin-top:var(--semantic-space-between-xl)}[sectionSize=wide] .gallery{max-width:1600px}@media (min-width:720px){:host{--card-gap:var(--semantic-grid-gap-lg-desktop)}.standard{--card-gap:var(--semantic-grid-gap-md-desktop)}::slotted([slot=gallery-items]){width:calc(50% - calc(var(--card-gap)/ 2))}::slotted([slot=cta]:first-of-type){margin-top:var(--semantic-space-between-xxxl)}[part=section]{--header-margin:var(--semantic-header-margin-space-lg-desktop)}}@media (min-width:960px){blz-section[size=narrow] ::slotted([slot=gallery-items]){width:calc(33.33% - calc(var(--card-gap) * 2 / 3))}}@media (min-width:1200px){blz-section:not([size]) ::slotted([slot=gallery-items]),blz-section[size=default] ::slotted([slot=gallery-items]){width:calc(25% - calc(var(--card-gap) * 3 / 4))}}`
          , tc = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class oc extends et {
            constructor() {
                super(...arguments),
                this.sectionSize = "default"
            }
            static get styles() {
                return [...et.styles, ec]
            }
            get componentDependencies() {
                return {
                    [o.BlzSection]: Qn
                }
            }
            get _defaultSlottedAttributes() {
                return {
                    header: {
                        "blz-header": {
                            layout: {
                                value: "center"
                            }
                        }
                    }
                }
            }
            render() {
                return z`<blz-section part="section" exportparts="${ei}" size="${it(this.sectionSize)}"><slot name="background" slot="background"></slot><slot name="header" slot="header"></slot><div class="gallery"><slot name="gallery-items" @slotchange="${this._handleGalleryItemChange}"></slot></div><slot name="cta"></slot></blz-section>`
            }
            _handleGalleryItemChange() {
                const e = this.galleryItems.length;
                this._adjustGalleryGap(this.galleryItems);
                const t = {
                    1: "slim",
                    2: "slim",
                    3: "narrow"
                };
                "wide" !== this.sectionSize && (this.sectionSize = t[e])
            }
            _adjustGalleryGap(e) {
                "standard" === [...new Set(e.map((e => e.getAttribute("variant"))))][0] ? this.shadowRoot.querySelector(".gallery").classList.add("standard") : this.shadowRoot.querySelector(".gallery").classList.remove("standard")
            }
        }
        tc([de({
            type: String
        })], oc.prototype, "sectionSize", void 0),
        tc([pe({
            slot: "gallery-items"
        })], oc.prototype, "galleryItems", void 0);
        var nc = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let ic = class extends oc {
        }
        ;
        ic = nc([t(o.BlzHighlights)], ic);
        var ac = q`:host{align-items:center;display:flex}[part=group]{color:var(--semantic-color-content-info);display:flex;flex-wrap:wrap;gap:var(--semantic-grid-gap-sm-mobile);justify-content:center}[part=label],slot[name=label]{color:var(--semantic-color-text-description);display:block;font:var(--semantic-body-text-md);line-height:var(--global-size-200);text-align:center}:host(.hover) slot:not([name])::slotted(a),slot:not([name])::slotted(a:hover){color:var(--global-color-content-900)}:host(.hover) slot:not([name]) ::slotted(blz-icon),slot:not([name]) ::slotted(blz-icon:hover){color:var(--global-color-content-900)}[part=label]{margin-bottom:var(--semantic-space-between-xs)}[part=content]{display:inline-block;justify-content:center}:host([platform]) [part=group],:host([slot=platform]) [part=group]{column-gap:var(--semantic-grid-gap-lg-mobile)}:host([variant|=jumbo]) [part=group]{gap:var(--semantic-grid-gap-sm-mobile)}:host([variant|=large]) [part=group]{gap:var(--semantic-grid-gap-sm-mobile)}:host([variant|=medium]) [part=group]{gap:var(--semantic-grid-gap-xs-mobile)}:host([variant|=small]) [part=group]{gap:var(--semantic-space-between-xxs)}@media (min-width:720px){[part=label]{margin-bottom:var(--semantic-space-between-sm)}:host([variant|=jumbo]) [part=group]{gap:var(--semantic-grid-gap-sm-desktop)}:host([variant|=large]) [part=group]{gap:var(--semantic-grid-gap-sm-desktop)}:host([variant|=medium]) [part=group]{gap:var(--semantic-grid-gap-xs-desktop)}:host([variant|=small]) [part=group]{gap:var(--semantic-space-between-xs)}:host([platform]) [part=group],:host([slot=platform]) [part=group]{column-gap:var(--semantic-space-between-xxxl)}}`
          , rc = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class sc extends et {
            constructor() {
                super(...arguments),
                this.platform = !1,
                this.variant = "large"
            }
            static get styles() {
                return [...et.styles, ac]
            }
            render() {
                return z`<div part="content"><slot name="label">${this.label ? z`<span part="label">${this.label}</span>` : null}</slot><div part="group"><slot></slot></div></div>`
            }
        }
        rc([de({
            type: Boolean
        })], sc.prototype, "platform", void 0),
        rc([de({
            type: String
        })], sc.prototype, "variant", void 0),
        rc([de({
            type: String
        })], sc.prototype, "label", void 0);
        var lc = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let cc = class extends sc {
        }
        ;
        cc = lc([t(o.BlzIconGroup)], cc);
        var dc = q`div[role=list]{display:grid;gap:var(--semantic-grid-gap-sm-mobile) var(--semantic-grid-gap-lg-mobile);grid-template-columns:repeat(1,1fr);list-style:none;margin:0;padding:0}li{column-gap:var(--semantic-grid-gap-sm-mobile);display:grid;place-content:flex-start flex-start}.item-slot{align-self:center;display:inline-block}#image{max-height:100%;width:100%}:host([image]) li{grid-template-columns:var(--image-size,var(--global-size-500)) auto}:host(:not([image])) li{grid-template-columns:var(--semantic-space-between-xxs) auto}.marker{text-align:center}:host([variant=feature-vertical]) div[role=list],:host([variant=feature]) div[role=list]{row-gap:var(--semantic-grid-gap-lg-mobile)}:host(:is([variant=feature-vertical][columns='2'])) div[role=list],:host(:is([variant=feature][columns='2'])) div[role=list]{gap:var(--semantic-grid-gap-lg-mobile)}:host(:is([variant=feature-vertical])) .item-slot,:host(:is([variant=feature])) .item-slot{align-self:flex-start}:host(:is([variant=accent][columns='2'])) div[role=list]{gap:var(--semantic-grid-gap-md-mobile)}@media (min-width:720px){div[role=list]{gap:var(--semantic-grid-gap-sm-desktop) var(--semantic-grid-gap-lg-desktop);grid-template-columns:repeat(var(--columns,1),1fr)}:host([variant=feature-vertical]) div[role=list],:host([variant=feature]) div[role=list]{row-gap:var(--semantic-grid-gap-md-desktop)}:host(:is([variant=accent][columns='2'])) div[role=list]{gap:var(--semantic-grid-gap-md-desktop)}:host(:is([variant=feature-vertical][columns='2'])) div[role=list],:host(:is([variant=feature][columns='2'])) div[role=list]{gap:var(--semantic-grid-gap-lg-desktop)}}`
          , uc = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class pc extends et {
            static get styles() {
                return [...et.styles, dc]
            }
            constructor() {
                super(),
                this._items = [],
                this.imageSize = "500",
                this.columns = 1
            }
            get _defaultSlottedAttributes() {
                return {
                    default: {
                        "blz-list-item": {
                            "parent-image": {
                                value: e => e.image,
                                watch: ["image"]
                            },
                            variant: {
                                value: e => e.variant
                            }
                        }
                    }
                }
            }
            _getMarkerTag(e) {
                const t = document.createElement(e.tagName);
                return t.classList.add("marker"),
                t.part = "marker",
                t.textContent = "•",
                t.classList.add(Array.from(e.classList).find((e => e.match(/blz-title-text-sm/g))) || "blz-body-text-xl"),
                t
            }
            _handleContentChange() {
                ve(this.shadowRoot, "", (e => {
                    this._items.push(e)
                }
                )),
                this.requestUpdate()
            }
            _makeListItems(e) {
                return e.map(( (e, t) => {
                    if ("BLZ-LIST-ITEM" === e.tagName)
                        return "";
                    e.getAttribute("slot") || e.setAttribute("slot", `item-${t}`);
                    const o = this.image ? z`<img src="${this.image}" alt="" id="image" part="marker">` : this._getMarkerTag(e);
                    return z`<li part="item">${o}<slot class="item-slot blz-body" name="item-${t}"></slot></li>`
                }
                ))
            }
            render() {
                return this.columns > 1 && this.style.setProperty("--columns", this.columns),
                "500" !== this.imageSize && this.style.setProperty("--image-size", `var(--global-size-${this.imageSize})`),
                z`<div part="list" role="list"><slot @slotchange="${this._handleContentChange}"></slot>${this._makeListItems(this._items)}</div>`
            }
            updated(e) {
                super.updated(e);
                const t = this.querySelectorAll("blz-list-item");
                e.forEach(( (e, o) => {
                    "columns" === o && (this.style.removeProperty("--columns"),
                    this.style.setProperty("--columns", this[o])),
                    "image" !== o && "variant" !== o || t.forEach((e => {
                        e.setAttribute("data-aria-role", "listitem"),
                        "feature" !== this.variant && "feature-vertical" !== this.variant && this.image ? e.setAttribute("parent-image", this.image) : (this.image = void 0,
                        e.removeAttribute("parent-image"))
                    }
                    ))
                }
                ))
            }
        }
        uc([de({
            type: String
        })], pc.prototype, "image", void 0),
        uc([de({
            attribute: "image-size",
            type: String
        })], pc.prototype, "imageSize", void 0),
        uc([de({
            type: String
        })], pc.prototype, "variant", void 0),
        uc([de({
            type: Number
        })], pc.prototype, "columns", void 0);
        var hc = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let bc = class extends pc {
        }
        ;
        bc = hc([t(o.BlzList)], bc);
        var gc = q`li{column-gap:var(--semantic-grid-gap-sm-mobile);display:grid;text-align:left}:host([variant=feature]) li{grid-template-columns:var(--image-size,var(--global-size-600)) auto}:host([variant=feature-vertical]) li{grid-template-rows:var(--image-size,var(--global-size-600)) auto;place-items:center center;row-gap:var(--semantic-grid-gap-sm-mobile);text-align:center}slot[name=heading]::slotted(*){margin-bottom:var(--semantic-content-space-sm)}.item-slot{align-self:center;display:inline-block}.marker{text-align:center}#image,::slotted(blz-image),::slotted(img){max-height:100%;width:100%}:host(:not([variant],[parent-image],[has-image])) li{grid-template-columns:var(--semantic-space-between-xxs) auto}:host([hide-accent]) li,:host([hide-accent][variant=feature]) li{grid-template-columns:auto}:host([hide-accent][variant=feature-vertical]) li{grid-template-rows:auto}:host(:not([variant=feature],[variant=feature-vertical],[hide-accent])[has-image]) li,:host(:not([variant=feature],[variant=feature-vertical],[hide-accent])[parent-image]) li{grid-template-columns:var(--image-size,var(--global-size-600)) auto}:host(:not([parent-image])[variant=feature-vertical]) slot[name=description]::slotted(*),:host(:not([parent-image])[variant=feature]) slot[name=description]::slotted(*){font:var(--semantic-body-text-md)}:host([variant=feature-vertical]) #image,:host([variant=feature-vertical]) slot[name=image]::slotted(*),:host([variant=feature]) slot[name=image]::slotted(*){height:var(--image-size,var(--global-size-600));width:var(--image-size,var(--global-size-600))}@media (min-width:720px){li{column-gap:var(--semantic-grid-gap-xs-desktop)}slot[name=heading]::slotted(*){margin-bottom:var(--semantic-content-space-md)}:host([variant=feature]) li{grid-template-columns:var(--image-size,var(--global-size-1000)) auto}:host([variant=feature-vertical]) li{grid-template-rows:var(--image-size,var(--global-size-1000)) auto;row-gap:var(--semantic-grid-gap-xs-desktop)}:host([variant=feature-vertical]) #image,:host([variant=feature-vertical]) slot[name=image]::slotted(*),:host([variant=feature]) slot[name=image]::slotted(*){height:var(--image-size,var(--global-size-1000));width:var(--image-size,var(--global-size-1000))}}`
          , mc = q`.blz-list,.blz-list-alpha{margin:0}.blz-list-alpha{list-style-type:upper-alpha}[class*=blz-list] li{padding-inline-start:var(--global-size-200)}[class*=blz-list] ol{list-style-type:lower-alpha;padding-inline-start:0}[class*=blz-list] ol ol{list-style-type:lower-roman}.blz-list ul{padding-inline-start:0}.blz-list ul ul{list-style-type:"\\2013"}.blz-list ul ul li{padding-inline-start:var(--global-size-250)}`
          , vc = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class fc extends et {
            static get styles() {
                return [...et.styles, mc, gc]
            }
            firstUpdated() {
                this.hasAttribute("role") || this.setAttribute("role", "presentation")
            }
            _handleSlotChange(e) {
                e.target.assignedElements().some((e => ["blz-image", "IMG"].includes(e.tagName))) ? this.setAttribute("has-image", "") : this.removeAttribute("has-image")
            }
            render() {
                this.bulletClass = Array.from(this.classList).find((e => e.match(/blz-title-text-sm/g))) || "blz-body-text-xl",
                this.descriptionClass = {
                    "blz-heading-text-lg": "accent" === this.variant,
                    "blz-body-text-xl": "blz-body-text-xl" === this.bulletClass,
                    "blz-title-text-sm": "blz-title-text-sm" === this.bulletClass
                };
                const e = "feature" === this.variant || "feature-vertical" === this.variant ? z`<slot name="heading" class="blz-heading-text-xl"></slot>` : null
                  , t = (o = this.parentImage,
                n = this.bulletClass,
                o ? z`<img src="${o}" alt="" id="image" part="marker">` : z`<p class="marker ${n}" part="marker" aria-hidden="true">•</p>`);
                var o, n;
                return z`<li part="list-item" role="${it(this.ariaRole)}"><slot name="image" @slotchange="${this._handleSlotChange}" hidden="${it(this.hideAccent || S)}">${t}</slot><article class="item-slot">${e}<slot name="description" class="${ui(this.descriptionClass)}"></slot></article></li>`
            }
        }
        vc([de({
            attribute: "data-aria-role",
            type: String
        })], fc.prototype, "ariaRole", void 0),
        vc([de({
            attribute: "parent-image",
            type: String
        })], fc.prototype, "parentImage", void 0),
        vc([de({
            type: String
        })], fc.prototype, "variant", void 0),
        vc([de({
            attribute: "hide-accent",
            type: Boolean
        })], fc.prototype, "hideAccent", void 0);
        var yc = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let wc = class extends fc {
        }
        ;
        wc = yc([t(o.BlzListItem)], wc);
        var _c = q`:host{--gap:var(--semantic-grid-gap-lg-mobile);--column-gap:var(--gap);--row-gap:var(--gap);--logo-offset:0px}slot[name=cta]::slotted(blz-button-group){justify-content:center}blz-section{--section-padding-vertical:var(--semantic-section-space-vertical-md-mobile) var(--semantic-section-space-horizontal-mobile);justify-content:center;min-height:600px}blz-section::part(content){align-items:center;display:flex;height:100%;justify-content:center;margin-top:var(--semantic-space-between-xxxl)}[part=main-content]{align-items:center;display:flex}[part=top]{align-items:center;display:flex;flex-direction:column;gap:calc(var(--row-gap)/ 2) calc(var(--column-gap)/ 2)}[part=platform-text],slot[name=platform-text]::slotted(*){margin:var(--semantic-space-around-vertical-md-mobile) 0;text-align:center}slot[name=logo]{max-width:min(100%,480px)}slot[name=logo]::slotted(*){max-height:100%;max-width:100%;padding:0 var(--semantic-space-around-horizontal-sm)}:host([logo-orientation=vertical]) slot[name=logo]::slotted(*){padding:0 var(--semantic-space-around-vertical-xxl-mobile)}slot[name=sticky]::slotted(*){bottom:var(--semantic-space-around-vertical-md-mobile);left:var(--semantic-space-around-horizontal-sm);opacity:0;position:fixed;right:var(--semantic-space-around-horizontal-sm);transition:all .25s;transition-timing-function:cubic-bezier(0,0,.2,1);visibility:hidden;z-index:var(--measure-z-index-fixed)}slot[name=sticky][active]::slotted(*){opacity:1;transition-timing-function:cubic-bezier(.8,0,1,1);visibility:visible}@media (min-width:960px){blz-section{height:90vh;max-height:var(--section-max-height,1050px);min-height:var(--section-min-height,800px);position:relative}[part=top]{gap:var(--row-gap) var(--column-gap)}:host([layout=left]) .has-multiple-icons [part=top],:host([layout=left]) :not(.has-multiple-icons) [part=main-content],:host([layout=right]) .has-multiple-icons [part=top],:host([layout=right]) :not(.has-multiple-icons) [part=main-content]{max-width:max(50%,720px)}blz-section::part(content){margin-top:0}:host([layout=left]) blz-section::part(content){justify-content:flex-start}:host([layout=right]) blz-section::part(content){justify-content:flex-end}slot[name=logo]{display:flex}slot[name=logo]::slotted(*){padding:0}[part=platform]{bottom:var(--semantic-space-around-vertical-xxl-desktop);margin:0;position:absolute}:host(:is([layout=right],[layout=left])) .has-multiple-icons [part=platform]{left:50%;transform:translateX(-50%)}slot[name=sticky][active]::slotted(*){opacity:0;visibility:hidden}}@media (min-width:720px){:host{--gap:var(--semantic-grid-gap-lg-desktop)}blz-section{--section-padding-vertical:var(
          --semantic-section-space-vertical-md-desktop
        ) var(--semantic-section-space-horizontal-desktop)}[part=platform-text],slot[name=platform-text]::slotted(*){margin:var(--semantic-space-around-vertical-sm-desktop) 0;text-align:center}:host([logo-orientation=vertical]) slot[name=logo]::slotted(*){padding:0 var(--semantic-space-around-horizontal-xxl-desktop)}slot[name=sticky]::slotted(*){bottom:var(--semantic-space-around-vertical-sm-desktop)}}`
          , xc = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class zc extends et {
            get componentDependencies() {
                return {
                    [o.BlzSection]: Qn
                }
            }
            constructor() {
                super(),
                this.layout = "center",
                this.logoOffset = "none",
                this.logoOrientation = "horizontal",
                this.nav = !1
            }
            static get styles() {
                return [...et.styles, _c]
            }
            get _defaultSlottedAttributes() {
                return {
                    background: {
                        "blz-image": {
                            loading: {
                                value: "eager"
                            }
                        }
                    },
                    logo: {
                        "blz-image": {
                            loading: {
                                value: "eager"
                            }
                        }
                    },
                    header: {
                        "blz-header": {
                            layout: {
                                value: "center"
                            },
                            size: {
                                value: "medium"
                            }
                        }
                    },
                    cta: {
                        "blz-button-group": {
                            size: {
                                value: "large"
                            }
                        },
                        "blz-button": {
                            size: {
                                value: "large"
                            }
                        },
                        "*": {
                            "blz-intersection": {
                                value: "0 0.5"
                            }
                        }
                    },
                    platform: {
                        "blz-icon-group": {
                            label: {
                                value: this.platformText
                            }
                        }
                    }
                }
            }
            toggleSticky(e) {
                e ? this._stickySlot.setAttribute("active", "") : this._stickySlot.hasAttribute("active") && this._stickySlot.removeAttribute("active")
            }
            render() {
                return z`<blz-section part="section" exportparts="${ei}" size="wide"><slot name="background" slot="background"></slot><slot name="content-before" slot="content-before"></slot><div part="main-content"><div part="top"><slot part="logo" name="logo" @slotchange="${this._setOffset}"></slot><slot part="header" name="header"></slot><slot part="cta" name="cta" @slotchange="${this._bindIntersectionListener}"></slot><slot name="optional-content"></slot><div part="platform"><slot name="platform" @slotchange="${this._addPadding}"></slot></div></div></div><slot name="content-after" slot="content-after"></slot></blz-section><slot name="sticky"></slot>`
            }
            firstUpdated(e) {
                let t;
                super.firstUpdated(e),
                window.addEventListener("DOMContentLoaded", ( () => {
                    if (t = this.outroCta ? document.body.querySelector(`#${this.outroCta}`) : document.body.querySelector("#outro"),
                    t && !t.hasAttribute("data-masthead:observed")) {
                        const e = t.getAttribute("blz-intersection")?.split(" ") || [];
                        e.includes("0") || e.unshift("0"),
                        t.setAttribute("data-observed:masthead", ""),
                        t.setAttribute("blz-intersection", e.join(" ")),
                        t.addEventListener("blz-intersection:threshold", this._handleIntersection("outro"))
                    }
                    document.body.querySelector("blz-nav") && this.setAttribute("nav", "")
                }
                )),
                Ve(( () => this._addPadding()))
            }
            updated(e) {
                super.updated(e),
                e.forEach(( (e, t) => {
                    "logoOffset" === t && this._setOffset()
                }
                ))
            }
            _setOffset() {
                const e = this.shadowRoot.querySelector('slot[name="logo"]').assignedElements()[0]
                  , t = {
                    small: .05,
                    medium: .15,
                    large: .25
                }[this.logoOffset] || 0;
                let o;
                e && ("blz-image" === e.tagName ? o = e.shadowRoot.querySelector("img") : "IMG" === e.tagName && (o = e)),
                o && (o.complete ? queueMicrotask(( () => {
                    this.style.setProperty("--logo-offset", `-${o.height * t}px`)
                }
                )) : o.addEventListener("load", (e => this.style.setProperty("--logo-offset", `-${e.target.height * t}px`)), {
                    once: !0
                }))
            }
            _addPadding() {
                const e = this.shadowRoot.querySelector("blz-section");
                if (!e)
                    return null;
                const t = this._platformItems.reduce(( (e, t) => "BLZ-ICON" === t.tagName && ke(t) ? e + 1 : "BLZ-ICON-GROUP" === t.tagName ? e + Array.from(t.children).filter((e => ("BLZ-ICON" === e.tagName || "A" === e.tagName) && ke(e))).length : e), 0);
                t ? (e.classList.toggle("has-icons", !0),
                e.classList.toggle("has-multiple-icons", t > 1)) : ["has-icons", "has-multiple-icons"].forEach((t => e.classList.toggle(t, !1))),
                this.requestUpdate()
            }
            _bindIntersectionListener(e) {
                e.target.assignedElements().forEach((e => {
                    e.hasAttribute("data-observed:masthead") || (e.addEventListener("blz-intersection:threshold", this._handleIntersection("masthead")),
                    e.setAttribute("data-observed:masthead", ""))
                }
                ))
            }
            _handleIntersection(e="masthead") {
                return t => {
                    const {intersectionRatio: o, isIntersecting: n} = t.detail;
                    let i = !1;
                    if ("masthead" === e) {
                        const e = t.target.getBoundingClientRect();
                        i = o <= .5 && e.y < 0
                    } else if ("outro" === e) {
                        const e = t.target.getBoundingClientRect();
                        i = !n && e.y > 0 && 0 !== window.scrollY
                    }
                    this.toggleSticky(i)
                }
            }
        }
        xc([de({
            type: String,
            reflect: !0
        })], zc.prototype, "layout", void 0),
        xc([de({
            attribute: "logo-offset",
            type: String
        })], zc.prototype, "logoOffset", void 0),
        xc([de({
            attribute: "logo-orientation",
            type: String
        })], zc.prototype, "logoOrientation", void 0),
        xc([de({
            type: Boolean
        })], zc.prototype, "nav", void 0),
        xc([de({
            attribute: "outro-cta",
            type: String
        })], zc.prototype, "outroCta", void 0),
        xc([de({
            attribute: "icon-group-label",
            type: String
        })], zc.prototype, "iconGroupLabel", void 0),
        xc([de({
            attribute: "sticky-cta",
            type: Boolean
        })], zc.prototype, "stickyCta", void 0),
        xc([pe({
            slot: "platform"
        })], zc.prototype, "_platformItems", void 0),
        xc([ai('[name="sticky"]')], zc.prototype, "_stickySlot", void 0);
        var kc = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let Sc = class extends zc {
        }
        ;
        Sc = kc([t(o.BlzMasthead)], Sc);
        const Ac = "blz-modal-trigger"
          , Ec = "data-modal-tabindex"
          , Cc = e => {
            e.addEventListener("click", Oc),
            e.matches(ye) || (e.setAttribute("tabindex", 0),
            e.setAttribute(Ec, ""))
        }
          , Oc = e => {
            const t = e.currentTarget.getAttribute(Ac);
            if (!t)
                return null;
            const o = e.currentTarget.getRootNode().getElementById(t);
            o && o.open({
                event: e
            })
        }
          , Bc = (Rt({
            attribute: Ac,
            mOptions: {
                attributeFilter: [Ac]
            },
            onConnect: e => {
                e.querySelectorAll(`[${Ac}]`).forEach(Cc)
            }
            ,
            onDisconnect: () => {}
            ,
            onChildListChange: e => {
                e.addedNodes.forEach((e => {
                    "function" == typeof e.querySelectorAll && (e.querySelectorAll(`[${Ac}]`).forEach((e => {
                        Cc(e)
                    }
                    )),
                    e.hasAttribute(Ac) && Cc(e))
                }
                ))
            }
            ,
            onAttributeChange: e => {
                const {target: t} = e
                  , o = t.getAttribute(Ac);
                Bc(t),
                o && t.addEventListener("click", Oc)
            }
        }),
        e => {
            e.removeEventListener("click", Oc),
            e.hasAttribute(Ec) && (e.removeAttribute("tabindex"),
            e.removeAttribute(Ec))
        }
        );
        var Pc = {
            "en-US": {
                media_gallery_view_all: "View All"
            },
            "de-DE": {
                media_gallery_view_all: "Alle anzeigen"
            },
            "es-ES": {
                media_gallery_view_all: "Ver todo"
            },
            "es-MX": {
                media_gallery_view_all: "Ver todos"
            },
            "fr-FR": {
                media_gallery_view_all: "Voir tout"
            },
            "it-IT": {
                media_gallery_view_all: "Vedi tutti"
            },
            "ja-JP": {
                media_gallery_view_all: "すべて表示"
            },
            "ko-KR": {
                media_gallery_view_all: "전체 보기"
            },
            "pl-PL": {
                media_gallery_view_all: "Pokaż wszystko"
            },
            "pt-BR": {
                media_gallery_view_all: "Ver Tudo"
            },
            "ru-RU": {
                media_gallery_view_all: "Просмотреть все"
            },
            "tr-TR": {
                media_gallery_view_all: "Tümünü Gör"
            },
            "th-TH": {
                media_gallery_view_all: "ดูทั้งหมด"
            },
            "zh-CN": {
                media_gallery_view_all: "查看全部"
            },
            "zh-TW": {
                media_gallery_view_all: "檢視全部"
            }
        }
          , Tc = q`:host{--cards-per-row:2;--gallery-column-size:minmax(122px, calc(100% / var(--cards-per-row)));text-align:center}[part=section]{--header-margin:var(--semantic-header-margin-space-md-mobile)}::slotted([slot=cta]),[part=cta]{margin-top:var(--semantic-space-between-lg)}::slotted([slot=header]){justify-content:center}.gallery{align-items:flex-start;display:grid;gap:var(--semantic-grid-gap-md-mobile);grid-template-columns:repeat(var(--cards-per-row),var(--gallery-column-size));justify-content:center}::slotted([slot=gallery-items]){display:grid}::slotted([slot=gallery-items]:nth-of-type(n+5)){display:none}@media (min-width:720px){:host{--cards-per-row:3}::slotted([slot=gallery-items]:nth-of-type(n+5)){display:grid}::slotted([slot=gallery-items]:nth-of-type(n+7)){display:none}::slotted([slot=cta]),[part=cta]{margin-top:var(--semantic-space-between-xl)}[part=section]{--header-margin:var(--semantic-header-margin-space-md-desktop)}}@media (min-width:960px){:host{--cards-per-row:4}.gallery{gap:var(--semantic-grid-gap-md-desktop)}::slotted([slot=gallery-items]:nth-of-type(-n+8)){display:grid}::slotted([slot=gallery-items]:nth-of-type(n+9)){display:none}}:host([revealed]) ::slotted([slot=gallery-items]){display:grid}`
          , Lc = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class Ic extends (dt(kn)) {
            get componentDependencies() {
                return {
                    [o.BlzSection]: Qn,
                    [o.BlzButton]: Ni
                }
            }
            constructor() {
                super(),
                this.revealed = !1,
                this._targetCount = 0,
                this.analyticsEvent = Cn.Other,
                this.analyticsLabel = "blz-media-gallery - view all"
            }
            static get styles() {
                return [ot, ...kn.styles, Tc]
            }
            get _defaultSlottedAttributes() {
                return {
                    header: {
                        "blz-header": {
                            layout: {
                                value: "center"
                            }
                        }
                    }
                }
            }
            _showMore(e, t) {
                const o = (t = t || this).shadowRoot.querySelector('slot[name="gallery-items"]').assignedElements();
                o.forEach((e => {
                    e.style.display = Ic._CARDS.includes(e.tagName) ? "grid" : "inherit"
                }
                ));
                const n = window.innerWidth >= we("--view-sm") && window.innerWidth < we("--view-md");
                let i = 4;
                window.innerWidth >= we("--view-sm") && (i = n && o.length > 6 ? 6 : 8),
                xe(e, o[i]),
                this.revealed = !0,
                this.dispatchEvent(new CustomEvent("blz-media-gallery:cta-click",{
                    composed: !0,
                    detail: e.detail
                })),
                super.pushEventFromGenerator(fn, {})
            }
            _bindCTAClick(e) {
                if (e.target) {
                    const t = e.target.assignedElements({
                        flatten: !0
                    }).find((e => e.tagName.includes("BUTTON")));
                    t && t.addEventListener("click", (e => this._showMore(e, this)))
                }
            }
            _ctaVisibility() {
                return !this.revealed && this._targetCount > 4 ? Array.from(this.children).some((e => "cta" === e.getAttribute("slot"))) ? z`<slot name="cta" @slotchange="${this._bindCTAClick}"></slot>` : z`<blz-button size="large" part="cta" exportparts="cta, content: cta-text" analytics-status="disabled" bp="${it(this._targetCount > 8 ? "min+" : this._targetCount > 6 ? "+sm" : this._targetCount > 4 ? "+xs" : void 0)}" @click="${e => this._showMore(e, this)}">${this.ctaText}</blz-button>` : null
            }
            render() {
                return z`<blz-section part="section" exportparts="${ei}"><slot name="background" slot="background"></slot><slot name="header" slot="header"></slot><slot name="lightbox"></slot><div class="gallery"><slot name="gallery-items" @slotchange="${ () => this._targetCount = document.querySelectorAll(`.${this.collection}`)?.length}"></slot></div>${this._ctaVisibility()}</blz-section>`
            }
            connectedCallback() {
                super.connectedCallback && super.connectedCallback(),
                this.initializeLoc(Pc)
            }
            firstUpdated(e) {
                super.firstUpdated(e),
                this.ctaText = this.ctaText || `${this.getString("media_gallery_view_all")}`,
                this.requestUpdate()
            }
        }
        Ic._CARDS = [o.BlzCard.toUpperCase(), o.BlzBaseCard.toUpperCase()];
        var Rc = Ic;
        Lc([de({
            type: Boolean,
            reflect: !0
        })], Ic.prototype, "revealed", void 0),
        Lc([de({
            type: String
        })], Ic.prototype, "ctaText", void 0),
        Lc([de({
            type: String
        })], Ic.prototype, "collection", void 0),
        Lc([de({
            type: Number
        })], Ic.prototype, "_targetCount", void 0);
        var $c = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let jc = class extends Rc {
        }
        ;
        jc = $c([t(o.BlzMediaGallery)], jc);
        var Dc = q`:host{--gallery-column-size:80%;--section-offset:var(--global-size-200);--padding-to-reveal-focus:var(--global-size-50);--padding-to-combine-w-margin-for-correct-spacing:var(--global-size-150)}[part=section]{--header-margin:var(--semantic-header-margin-space-md-mobile);padding-left:0;padding-right:0}::slotted([slot=header]){justify-content:center}[part=gallery]{display:grid;gap:0 var(--semantic-grid-gap-md-mobile);grid-template-columns:repeat(4,var(--gallery-column-size)) auto;margin:0 0 calc(var(--global-size-400) - var(--global-size-150));overflow:scroll hidden;padding-bottom:var(--padding-to-combine-w-margin-for-correct-spacing);padding-left:var(--section-offset);padding-top:var(--padding-to-reveal-focus);visibility:hidden}::slotted([slot=gallery-items]),:host(.focus) [part=gallery],:host(.focus-within) [part=gallery],:host(.hover) [part=gallery],[part=gallery].show-scroll,[part=gallery]:focus,[part=gallery]:focus-within,[part=gallery]:hover{visibility:visible}[part=gallery]::after{content:'';margin-right:-1px;padding-right:1px}slot[name=cta]{display:flex;justify-content:center}@media (min-width:720px){[part=gallery]{--gallery-column-size:45%;--section-offset:var(--global-size-300);margin:0 0 calc(var(--global-size-500) - var(--global-size-150))}[part=gallery]::after{padding-right:calc(var(--section-offset) - var(--semantic-grid-gap-md-desktop))}[part=section]{--header-margin:var(--semantic-header-margin-space-md-desktop)}}@media (min-width:960px){[part=gallery]{--gallery-column-size:28%;--section-offset:var(--global-size-500);gap:0 var(--semantic-grid-gap-md-desktop)}}@media (min-width:1200px){blz-section{padding:var(--semantic-section-space-vertical-md-desktop) 0}[part=gallery]{--gallery-column-size:minmax(122px, 25%);grid-template-columns:repeat(4,var(--gallery-column-size));padding:var(--padding-to-reveal-focus) var(--padding-to-reveal-focus) var(--padding-to-combine-w-margin-for-correct-spacing)}[part=gallery]::after{content:none;padding-right:0}::slotted(a:nth-of-type(4)){padding-right:0}:host(.focus) [part=gallery],:host(.hover) [part=gallery],[part=gallery].show-scroll,[part=gallery]:focus,[part=gallery]:hover{visibility:hidden}::-webkit-scrollbar{background:0 0;height:0}}`;
        class Nc extends et {
            static get styles() {
                return [...et.styles, Dc]
            }
            get componentDependencies() {
                return {
                    [o.BlzSection]: Qn
                }
            }
            get _defaultSlottedAttributes() {
                return {
                    header: {
                        "blz-header": {
                            layout: {
                                value: "center"
                            }
                        }
                    },
                    cta: {
                        "blz-button-group": {
                            size: {
                                value: "large"
                            }
                        }
                    }
                }
            }
            render() {
                return z`<blz-section class="show-overflow" part="section" exportparts="${ei}"><slot name="background" slot="background"></slot><slot name="header" slot="header"></slot><div part="gallery"><slot name="gallery-items"></slot></div><slot name="cta"></slot></blz-section>`
            }
            firstUpdated(e) {
                super.firstUpdated(e),
                queueMicrotask(( () => {
                    Ee(this.shadowRoot.querySelector('[part="gallery"]')),
                    this.addEventListener("touchstart", this._toggleScrollVisibility),
                    this.addEventListener("touchend", this._toggleScrollVisibility),
                    this.addEventListener("mouseenter", this._toggleScrollVisibility),
                    this.addEventListener("mouseleave", this._toggleScrollVisibility),
                    this.addEventListener("keyup", this._scrollToElement)
                }
                ))
            }
            _scrollToElement(e) {
                "Tab" === e.key && document.activeElement && _e(document.activeElement, {
                    orientation: "horizontal",
                    container: this.shadowRoot.querySelector('[part="gallery"]')
                })
            }
            _toggleScrollVisibility() {
                this.shadowRoot.querySelector('[part="gallery"]').classList.toggle("show-scroll")
            }
        }
        var Mc = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let Fc = class extends Nc {
        }
        ;
        Fc = Mc([t(o.BlzNews)], Fc);
        var Uc = q`:host{--gap:var(--semantic-grid-gap-lg-mobile);--column-gap:var(--gap);--row-gap:var(--gap);--logo-offset:0px}blz-section{justify-content:flex-end;min-height:240px}blz-section::part(content){align-items:center;display:flex;height:100%;justify-content:center}:host([alignment=left]) blz-section::part(content){justify-content:flex-start}:host(:is([layout=large])) blz-section{justify-content:center;min-height:400px}:host([nav]) ::part(content){margin-top:var(--semantic-space-between-xxxl)}[name=extras]::slotted(*){margin-top:var(--semantic-space-between-lg)}@media (min-width:960px){blz-section{min-height:440px;padding-top:var(--nav-height);position:relative}blz-section::part(content){max-width:var(--view-xl)}:host([nav]) ::part(content){margin-top:var(--nav-height)}:host([layout=large]) blz-section{min-height:760px}}@media (min-width:720px){:host{--gap:var(--semantic-header-margin-space-md-desktop)}[name=extras]::slotted(*){margin-top:var(--semantic-space-between-xl)}}`
          , Hc = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class Vc extends et {
            get componentDependencies() {
                return {
                    [o.BlzSection]: Qn
                }
            }
            constructor() {
                super(),
                this.layout = "default",
                this.alignment = "center",
                this.nav = !1
            }
            static get styles() {
                return [...et.styles, Uc]
            }
            connectedCallback() {
                super.connectedCallback && super.connectedCallback(),
                document.body.querySelector("blz-nav, blz-nav-battlenet") && this.setAttribute("nav", "")
            }
            get _defaultSlottedAttributes() {
                return {
                    background: {
                        "blz-image": {
                            loading: {
                                value: "eager"
                            }
                        }
                    },
                    header: {
                        "blz-header": {
                            layout: {
                                value: "center"
                            },
                            size: {
                                value: "medium"
                            }
                        }
                    }
                }
            }
            render() {
                return z`<blz-section part="section" exportparts="${ei}" size="default"><slot name="background" slot="background"></slot><slot name="content-before" slot="content-before"></slot><div part="main-content"><div part="content"><slot part="header" name="header"></slot><slot name="extras" slot="extras"></slot></div></div><slot name="content-after" slot="content-after"></slot></blz-section>`
            }
        }
        Hc([de({
            type: String,
            reflect: !0
        })], Vc.prototype, "alignment", void 0),
        Hc([de({
            type: String,
            reflect: !0
        })], Vc.prototype, "layout", void 0),
        Hc([de({
            type: Boolean
        })], Vc.prototype, "nav", void 0);
        var qc = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let Gc = class extends Vc {
        }
        ;
        Gc = qc([t(o.BlzPageHeader)], Gc);
        var Wc = q`:host{--padding-offset:175px;text-align:center}:host([size=large]){--padding-offset:325px}blz-section{width:100%}:host([variant=top-background]) blz-section::part(content){padding-top:var(--padding-offset)}:host([variant=bottom-background]) blz-section::part(content){padding-bottom:var(--padding-offset)}#inner-content{display:flex;flex-direction:column;gap:var(--inner-gap,var(--semantic-space-between-lg));justify-content:flex-end;text-align:center}slot[name=cta]::slotted(*){justify-content:center}slot[name=cta]{display:flex;justify-content:center}slot[name=media]{display:flex;justify-content:center}slot[name=media]::slotted(*){max-width:100%}slot[name=list]::slotted(blz-list){margin:0 auto;max-width:600px;text-align:left}slot[name=list]::slotted(blz-list),slot[name=media]::slotted(*){margin-top:var(--semantic-space-between-xxl)}#inner-content::part(cell-2){display:flex;justify-content:center}@media (min-width:960px){:host{--padding-offset:350px}:host([size=large]){--padding-offset:650px}}@media (min-width:720px){#inner-content{gap:var(--inner-gap,var(--semantic-space-between-xl))}slot[name=list]::slotted(blz-list),slot[name=media]::slotted(*){margin-top:var(--global-size-900)}}`
          , Yc = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class Kc extends et {
            static get styles() {
                return [...et.styles, Wc]
            }
            get componentDependencies() {
                return {
                    [o.BlzSection]: Qn,
                    [o.BlzGrid]: Nl
                }
            }
            get _defaultSlottedAttributes() {
                const e = {
                    size: {
                        value: "large"
                    }
                };
                return {
                    header: {
                        "blz-header": {
                            layout: {
                                value: "center"
                            }
                        }
                    },
                    cta: {
                        "blz-button-group": e,
                        "blz-button": e
                    }
                }
            }
            render() {
                const e = "slim" === this.variant ? "slim" : void 0;
                return z`<blz-section id="main-content" part="section" exportparts="${ei}" size="${it(e)}"><slot name="background" slot="background"></slot><div id="inner-content"><slot name="header"></slot><slot name="cta" slot="2"></slot><slot name="extras" slot="3"></slot></div><slot name="list"></slot><slot name="media"></slot></blz-section>`
            }
        }
        Yc([de({
            type: String,
            reflect: !0
        })], Kc.prototype, "variant", void 0),
        Yc([de({
            type: String
        })], Kc.prototype, "size", void 0);
        var Xc = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let Zc = class extends Kc {
        }
        ;
        Zc = Xc([t(o.BlzShowcase)], Zc);
        var Jc = {
            "en-US": {
                social_section_stay_connected: "Stay Connected"
            },
            "de-DE": {
                social_section_stay_connected: "Soziale Netzwerke"
            },
            "es-ES": {
                social_section_stay_connected: "Mantente al día"
            },
            "es-MX": {
                social_section_stay_connected: "Sigue conectado"
            },
            "fr-FR": {
                social_section_stay_connected: "Restez connecté"
            },
            "it-IT": {
                social_section_stay_connected: "Resta connesso"
            },
            "ja-JP": {
                social_section_stay_connected: "最新情報をお見逃しなく！"
            },
            "ko-KR": {
                social_section_stay_connected: "소셜 서비스"
            },
            "pl-PL": {
                social_section_stay_connected: "Bądź na bieżąco"
            },
            "pt-BR": {
                social_section_stay_connected: "Fique conectado"
            },
            "ru-RU": {
                social_section_stay_connected: "Будем на связи!"
            },
            "th-TH": {
                social_section_stay_connected: "ติดต่อถึงกัน!"
            },
            "zh-CN": {
                social_section_stay_connected: "持续关注"
            },
            "zh-TW": {
                social_section_stay_connected: "加入社群網路"
            }
        }
          , Qc = q`:host{--section-padding:var(--semantic-section-space-vertical-sm-mobile) var(--semantic-section-space-horizontal-mobile);text-align:center}blz-section::part(content){display:grid;justify-content:center;row-gap:var(--semantic-space-between-sm)}slot[name=icons]{display:flex;justify-content:center}@media (min-width:720px){:host{--section-padding:var(--semantic-section-space-vertical-sm-desktop) var(--semantic-section-space-horizontal-desktop)}blz-section::part(content){display:grid;justify-content:center;row-gap:var(--semantic-space-between-md)}}`;
        class ed extends (dt(et)) {
            static get styles() {
                return [...et.styles, Qc]
            }
            get componentDependencies() {
                return {
                    [o.BlzSection]: Qn
                }
            }
            connectedCallback() {
                super.connectedCallback(),
                this.initializeLoc(Jc)
            }
            render() {
                return z`<blz-section part="section" exportparts="${ei}"><slot name="background" slot="background"></slot><slot name="header" slot="header"><h3 class="blz-title-text-sm" part="header">${this.getString("social_section_stay_connected")}</h3></slot><slot name="icons"></slot></blz-section>`
            }
        }
        var td = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let od = class extends ed {
        }
        ;
        od = td([t(o.BlzSocialSection)], od);
        var nd = q`:host{color:var(--semantic-color-content-info);font:var(--semantic-body-text-md)}`
          , id = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class ad extends (dt(et)) {
            constructor() {
                super(...arguments),
                this.options = {
                    dateStyle: "long"
                }
            }
            static get styles() {
                return [...et.styles, nd]
            }
            render() {
                return z`<time datetime="${it(this.timestamp)}">${this._getFormattedTimestamp()}</time>`
            }
            _getFormattedTimestamp() {
                if (!this.timestamp)
                    return "";
                const e = new Date(this.timestamp);
                return isNaN(e.getTime()) ? "" : new Intl.DateTimeFormat(this.lang,this.options).format(new Date(this.timestamp))
            }
        }
        id([de({
            type: Object
        })], ad.prototype, "options", void 0),
        id([de({
            type: String
        })], ad.prototype, "timestamp", void 0);
        var rd = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let sd = class extends ad {
        }
        ;
        sd = rd([t(o.BlzTimestamp)], sd);
        class ld {
            init(e, t) {
                this.category = e,
                this.callback = t;
                const {TrbCookieConsent: o} = window;
                o ? (this._addListener(),
                o.initialized && this._onConsentListener()) : this.callback()
            }
            _addListener() {
                window.addEventListener("CookieConsentChange", ( () => {
                    this._onConsentListener()
                }
                ))
            }
            _onConsentListener() {
                ld.isCategoryAllowed(this.category) ? this.callback() : xn() && console.warn("Some content has been blocked due to privacy settings")
            }
            static isCategoryAllowed(e) {
                switch (e) {
                case ld.CATEGORY_ANALYTICS:
                    return window.TrbCookieConsent.isGoogleAnalyticsStorageAllowed();
                case ld.CATEGORY_FUNCTIONAL:
                    return window.TrbCookieConsent.isFunctionalStorageAllowed();
                case ld.CATEGORY_MARKETING:
                    return window.TrbCookieConsent.isMarketingStorageAllowed();
                case ld.CATEGORY_OTHER:
                    return window.TrbCookieConsent.isOtherStorageAllowed();
                case ld.CATEGORY_PERFORMANCE:
                    return window.TrbCookieConsent.isPerformanceStorageAllowed();
                case ld.CATEGORY_SOCIAL:
                    return window.TrbCookieConsent.isSocialStorageAllowed();
                default:
                    throw new Error(`BlzCookieCheck: Invalid cookie category '${e}'`)
                }
            }
        }
        ld.CATEGORY_ANALYTICS = "analytics",
        ld.CATEGORY_FUNCTIONAL = "functional",
        ld.CATEGORY_MARKETING = "marketing",
        ld.CATEGORY_OTHER = "other",
        ld.CATEGORY_PERFORMANCE = "performance",
        ld.CATEGORY_SOCIAL = "social";
        const cd = Object.freeze({
            UNSTARTED: -1,
            ENDED: 0,
            PLAYING: 1,
            PAUSED: 2,
            BUFFERING: 3,
            CUED: 5
        });
        var dd = {
            "en-US": {
                video_overlay_aria_label: "Click To Play"
            },
            "de-DE": {
                video_overlay_aria_label: "Zum Spielen klicken"
            },
            "es-ES": {
                video_overlay_aria_label: "Haz clic para reproducir"
            },
            "es-MX": {
                video_overlay_aria_label: "Haz clic para reproducir"
            },
            "fr-FR": {
                video_overlay_aria_label: "Cliquez pour démarrer la lecture."
            },
            "it-IT": {
                video_overlay_aria_label: "Clicca per riprodurre"
            },
            "ja-JP": {
                video_overlay_aria_label: "クリックしてプレイ"
            },
            "ko-KR": {
                video_overlay_aria_label: "클릭하여 재생"
            },
            "pl-PL": {
                video_overlay_aria_label: "Kliknij, aby zagrać"
            },
            "pt-BR": {
                video_overlay_aria_label: "Clique para Jogar"
            },
            "ru-RU": {
                video_overlay_aria_label: "Щелкните, чтобы воспроизвести"
            },
            "tr-TR": {
                video_overlay_aria_label: "Oynamak İçin Tıklayın"
            },
            "th-TH": {
                video_overlay_aria_label: "คลิกเพื่อเล่น"
            },
            "zh-CN": {
                video_overlay_aria_label: "点击游玩"
            },
            "zh-TW": {
                video_overlay_aria_label: "按一下以播放"
            }
        }
          , ud = q`:host{--background-caption:var(--semantic-color-background-content-default);object-fit:cover;position:relative;vertical-align:middle}:host([youtube-id]){object-fit:fill}:host([privacy-hidden]){display:none}[part=overlay-inactive],[part=overlay]{cursor:pointer;height:100%;inset:0;position:absolute;width:100%;z-index:var(--measure-z-index-above)}.disabled[part=overlay]{pointer-events:none}[part=overlay-inactive]{opacity:0;visibility:hidden}[part=overlay-inactive]>img,[part=overlay]>img{display:block;height:100%;object-fit:cover;width:100%}[name=icon],[name=thumbnail-play]{color:var(--semantic-color-content-default);display:block;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);z-index:var(--measure-z-index-docked)}[name=caption]{bottom:var(--global-size-300);display:flex;justify-content:center;position:absolute;width:100%}[name=caption]::slotted(*){text-align:center}iframe,video{height:100%;max-height:100%;max-width:100%;object-fit:inherit;width:100%;z-index:var(--measure-z-index-base)}:host([aspect-ratio]) [name=bottom-caption]{position:absolute;width:100%;z-index:var(--measure-z-index-above)}:host([aspect-ratio]) .spacer{display:block;height:100%;width:100%;z-index:var(--measure-z-index-below)}::slotted([slot=bottom-caption]){background:var(--background-caption);font:var(--semantic-body-text-lg);padding:var(--semantic-space-around-vertical-xs-mobile) var(--semantic-space-around-horizontal-xxs);text-align:center}@media (min-width:720px){::slotted([slot=bottom-caption]){padding:var(--semantic-space-around-vertical-sm-desktop) var(--semantic-space-around-horizontal-sm)}[name=caption]{bottom:var(--semantic-space-around-vertical-xl-desktop)}}`;
        class pd extends HTMLElement {
            constructor() {
                super(),
                this.isIframeLoaded = !1,
                this.setupDom()
            }
            static get observedAttributes() {
                return ["videoid", "playlistid", "videoplay", "videotitle"]
            }
            connectedCallback() {
                this.addEventListener("pointerover", ( () => pd.warmConnections(this)), {
                    once: !0
                }),
                this.addEventListener("click", ( () => this.addIframe()))
            }
            get videoId() {
                return encodeURIComponent(this.getAttribute("videoid") || "")
            }
            set videoId(e) {
                this.setAttribute("videoid", e)
            }
            get playlistId() {
                return encodeURIComponent(this.getAttribute("playlistid") || "")
            }
            set playlistId(e) {
                this.setAttribute("playlistid", e)
            }
            get videoTitle() {
                return this.getAttribute("videotitle") || "Video"
            }
            set videoTitle(e) {
                this.setAttribute("videotitle", e)
            }
            get videoPlay() {
                return this.getAttribute("videoplay") || "Play"
            }
            set videoPlay(e) {
                this.setAttribute("videoplay", e)
            }
            get videoStartAt() {
                return this.getAttribute("videoStartAt") || "0"
            }
            get autoLoad() {
                return this.hasAttribute("autoload")
            }
            get autoPause() {
                return this.hasAttribute("autopause")
            }
            get noCookie() {
                return this.hasAttribute("nocookie")
            }
            get posterQuality() {
                return this.getAttribute("posterquality") || "hqdefault"
            }
            get posterLoading() {
                return this.getAttribute("posterloading") || "lazy"
            }
            get params() {
                return `start=${this.videoStartAt}&${this.getAttribute("params")}`
            }
            set params(e) {
                this.setAttribute("params", e)
            }
            setupDom() {
                const e = this.attachShadow({
                    mode: "open"
                });
                let t = "";
                window.liteYouTubeNonce && (t = `nonce="${window.liteYouTubeNonce}"`),
                e.innerHTML = `\n      <style ${t}>\n        :host {\n          --aspect-ratio: var(--lite-youtube-aspect-ratio, 16 / 9);\n          --aspect-ratio-short: var(--lite-youtube-aspect-ratio-short, 9 / 16);\n          --frame-shadow-visible: var(--lite-youtube-frame-shadow-visible, yes);\n          contain: content;\n          display: block;\n          position: relative;\n          width: 100%;\n          aspect-ratio: var(--aspect-ratio);\n        }\n\n        @media (max-width: 40em) {\n          :host([short]) {\n            aspect-ratio: var(--aspect-ratio-short);\n          }\n        }\n\n        #frame, #fallbackPlaceholder, iframe {\n          position: absolute;\n          width: 100%;\n          height: 100%;\n          left: 0;\n        }\n\n        #frame {\n          cursor: pointer;\n        }\n\n        #fallbackPlaceholder, slot[name=image]::slotted(*) {\n          object-fit: cover;\n          width: 100%;\n        }\n\n        @container style(--frame-shadow-visible: yes) {\n          #frame::before {\n            content: '';\n            display: block;\n            position: absolute;\n            top: 0;\n            background-image: linear-gradient(180deg, #111 -20%, transparent 90%);\n            height: 60px;\n            width: 100%;\n            z-index: 1;\n          }\n        }\n\n        #playButton {\n          width: 68px;\n          height: 48px;\n          background-color: transparent;\n          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="red"/><path d="M45 24 27 14v20" fill="white"/></svg>');\n          z-index: 1;\n          border: 0;\n          border-radius: inherit;\n        }\n\n        #playButton:before {\n          content: '';\n          border-style: solid;\n          border-width: 11px 0 11px 19px;\n          border-color: transparent transparent transparent #fff;\n        }\n\n        #playButton,\n        #playButton:before {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate3d(-50%, -50%, 0);\n          cursor: inherit;\n        }\n\n        /* Post-click styles */\n        .activated {\n          cursor: unset;\n        }\n\n        #frame.activated::before,\n        #frame.activated > #playButton {\n          display: none;\n        }\n      </style>\n      <div id="frame">\n        <picture>\n          <slot name="image">\n            <source id="webpPlaceholder" type="image/webp">\n            <source id="jpegPlaceholder" type="image/jpeg">\n            <img id="fallbackPlaceholder" referrerpolicy="origin" loading="lazy">\n          </slot>\n        </picture>\n        <button id="playButton"></button>\n      </div>\n    `,
                this.domRefFrame = e.querySelector("#frame"),
                this.domRefImg = {
                    fallback: e.querySelector("#fallbackPlaceholder"),
                    webp: e.querySelector("#webpPlaceholder"),
                    jpeg: e.querySelector("#jpegPlaceholder")
                },
                this.domRefPlayButton = e.querySelector("#playButton")
            }
            setupComponent() {
                this.initImagePlaceholder(),
                this.domRefPlayButton.setAttribute("aria-label", `${this.videoPlay}: ${this.videoTitle}`),
                this.setAttribute("title", `${this.videoPlay}: ${this.videoTitle}`),
                (this.autoLoad || this.isYouTubeShort() || this.autoPause) && this.initIntersectionObserver()
            }
            attributeChangedCallback(e, t, o) {
                t !== o && (this.setupComponent(),
                this.domRefFrame.classList.contains("activated") && (this.domRefFrame.classList.remove("activated"),
                this.shadowRoot.querySelector("iframe").remove(),
                this.isIframeLoaded = !1))
            }
            addIframe(e=!1) {
                if (!this.isIframeLoaded) {
                    let t = e ? 0 : 1;
                    const o = this.noCookie ? "-nocookie" : "";
                    let n;
                    n = this.playlistId ? `?listType=playlist&list=${this.playlistId}&` : `${this.videoId}?`,
                    this.autoPause && (this.params = "enablejsapi=1"),
                    this.isYouTubeShort() && (this.params = `loop=1&mute=1&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=${this.videoId}`,
                    t = 1);
                    const i = `\n<iframe credentialless frameborder="0" title="${this.videoTitle}"\n  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen\n  src="https://www.youtube${o}.com/embed/${n}autoplay=${t}&${this.params}"\n></iframe>`;
                    this.domRefFrame.insertAdjacentHTML("beforeend", i),
                    this.domRefFrame.classList.add("activated"),
                    this.isIframeLoaded = !0,
                    this.attemptShortAutoPlay(),
                    this.dispatchEvent(new CustomEvent("liteYoutubeIframeLoaded",{
                        detail: {
                            videoId: this.videoId
                        },
                        bubbles: !0,
                        cancelable: !0
                    }))
                }
            }
            initImagePlaceholder() {
                const e = `https://i.ytimg.com/vi_webp/${this.videoId}/${this.posterQuality}.webp`
                  , t = `https://i.ytimg.com/vi/${this.videoId}/${this.posterQuality}.jpg`;
                this.domRefImg.fallback.loading = this.posterLoading,
                this.domRefImg.webp.srcset = e,
                this.domRefImg.jpeg.srcset = t,
                this.domRefImg.fallback.src = t,
                this.domRefImg.fallback.setAttribute("aria-label", `${this.videoPlay}: ${this.videoTitle}`),
                this.domRefImg?.fallback?.setAttribute("alt", `${this.videoPlay}: ${this.videoTitle}`)
            }
            initIntersectionObserver() {
                const e = new IntersectionObserver(( (e, t) => {
                    e.forEach((e => {
                        e.isIntersecting && !this.isIframeLoaded && (pd.warmConnections(this),
                        this.addIframe(!0),
                        t.unobserve(this))
                    }
                    ))
                }
                ),{
                    root: null,
                    rootMargin: "0px",
                    threshold: 0
                });
                if (e.observe(this),
                this.autoPause) {
                    const e = new IntersectionObserver(( (e, t) => {
                        e.forEach((e => {
                            1 !== e.intersectionRatio && this.shadowRoot.querySelector("iframe")?.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                        }
                        ))
                    }
                    ),{
                        threshold: 1
                    });
                    e.observe(this)
                }
            }
            attemptShortAutoPlay() {
                this.isYouTubeShort() && setTimeout(( () => {
                    this.shadowRoot.querySelector("iframe")?.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
                }
                ), 2e3)
            }
            isYouTubeShort() {
                return "" === this.getAttribute("short") && window.matchMedia("(max-width: 40em)").matches
            }
            static addPrefetch(e, t) {
                const o = document.createElement("link");
                o.rel = e,
                o.href = t,
                o.crossOrigin = "true",
                document.head.append(o)
            }
            static warmConnections(e) {
                pd.isPreconnected || window.liteYouTubeIsPreconnected || (pd.addPrefetch("preconnect", "https://i.ytimg.com/"),
                pd.addPrefetch("preconnect", "https://s.ytimg.com"),
                e.noCookie ? pd.addPrefetch("preconnect", "https://www.youtube-nocookie.com") : (pd.addPrefetch("preconnect", "https://www.youtube.com"),
                pd.addPrefetch("preconnect", "https://www.google.com"),
                pd.addPrefetch("preconnect", "https://googleads.g.doubleclick.net"),
                pd.addPrefetch("preconnect", "https://static.doubleclick.net")),
                pd.isPreconnected = !0,
                window.liteYouTubeIsPreconnected = !0)
            }
        }
        pd.isPreconnected = !1,
        customElements.define("lite-youtube", pd);
        var hd = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class bd extends (dt(kn)) {
            get componentDependencies() {
                return {
                    "lite-youtube": pd,
                    [o.BlzIcon]: bi
                }
            }
            constructor() {
                super(),
                this.tracks = [],
                this.autoplay = !1,
                this.preload = !1,
                this.controls = !1,
                this.loop = !1,
                this.modestbranding = !0,
                this.muted = !1,
                this.playsinline = !1,
                this.rel = !1,
                this.noRatio = !1,
                this._youtubeTimestamp = 0,
                this._setUpYoutubeAllowed = () => {
                    window.youtubeAllowed && (this._youtubeAllowed = window.youtubeAllowed,
                    this.requestUpdate())
                }
                ,
                this._setupYoutubeId = () => {
                    if (this.youtubeId) {
                        const e = /^(?:(?<playlistId>PL.*?)|(?<videoId>.*?))(?:[#&]t=(?<timeStamp>[0-9]+).*?)?$/g.exec(this.youtubeId);
                        this._youtubeTimestamp = parseInt(e.groups.timeStamp),
                        this._youtubePlaylistId = e.groups.playlistId,
                        this._youtubeVideoId = e.groups.videoId
                    }
                }
                ,
                this._coreAnalyticsEvent = e => {
                    let t = "";
                    switch (e.detail) {
                    case cd.PLAYING:
                        t = On.Play;
                        break;
                    case cd.PAUSED:
                        t = On.Pause;
                        break;
                    case cd.ENDED:
                        t = On.Complete
                    }
                    super.pushEventFromGenerator(yn, {
                        video_id: this.youtubeId || this.twitchChannel || this.twitchId || this.src || this.webm || this.mp4
                    }, t)
                }
                ,
                this.captionText = !1,
                this._videoCued = !1,
                this._isBuffering = !1,
                this._ytPlayer = {},
                this._createSource = this._createSource.bind(this),
                this._dispatchCanPlay = this._dispatchCanPlay.bind(this),
                this._dispatchStateChange = this._dispatchStateChange.bind(this),
                this._setupYT = this._setupYT.bind(this),
                this._handleLiteYtLoadedEvent = this._handleLiteYtLoadedEvent.bind(this),
                this._onYTPlayerReady = this._onYTPlayerReady.bind(this),
                this._onYTPlayerStateChange = this._onYTPlayerStateChange.bind(this),
                this._canPlay = !1,
                this.analyticsEvent = "video",
                this._youtubeAllowed = !1,
                Gn(Fn.Version3Components)
            }
            static get styles() {
                return [...kn.styles, ud]
            }
            getPlayerState() {
                return this.twitchId || this.twitchChannel ? null : this.youtubeId && this._ytPlayer.getPlayerState ? this._ytPlayer.getPlayerState() : this._player && 0 !== this._player.played?.length ? this._player.ended ? cd.ENDED : this._player.paused ? cd.PAUSED : !1 === this._player.paused ? cd.PLAYING : this._isBuffering ? cd.BUFFERING : this._videoCued ? cd.CUED : cd.UNSTARTED : cd.UNSTARTED
            }
            render() {
                this.getAttribute("aspect-ratio") || this.noRatio ? this.getAttribute("aspect-ratio") && this.noRatio && this.removeAttribute("aspect-ratio") : this.setAttribute("aspect-ratio", "16:9");
                const e = this._makeOverlay()
                  , t = this._renderOptionalCaption();
                return this.getAttribute("preload") && this.removeAttribute("autoplay"),
                this.youtubeId ? z`${e}${t} ${this._youtubeAllowed ? z`<lite-youtube videoid="${it(this._youtubeVideoId)}" videoStartAt="${it(this._youtubeTimestamp)}" playlistid="${it(this._youtubePlaylistId)}" nocookie autoload params="${new URLSearchParams({
                    controls: +this.controls,
                    preload: +this.preload,
                    loop: +this.loop,
                    mute: +this.muted,
                    playsinline: +this.playsinline,
                    modestbranding: +this.modestbranding,
                    rel: +this.rel,
                    enablejsapi: 1
                }).toString()}"></lite-youtube>` : null}` : this.twitchId ? this._twitchFrame({
                    param: "video",
                    value: this.twitchId,
                    overlay: e,
                    caption: t
                }) : this.twitchChannel ? this._twitchFrame({
                    param: "channel",
                    value: this.twitchChannel,
                    overlay: e,
                    caption: t
                }) : z`${e}${t}<video ?autoplay="${this.autoplay && !this.thumbnail}" ?controls="${this.controls}" ?loop="${this.loop}" muted ?playsinline="${this.playsinline}" poster="${it(this.poster)}" preload="${it(this.preload)}" src="${it(this.src)}" crossorigin="${it(this.crossorigin)}" tabindex="${it(this.thumbnail ? -1 : void 0)}" @canplay="${this._dispatchCanPlay}" @loadedmetadata="${this._onLoadedMetadata}" @play="${this._onPlay}" @playing="${ () => this._isBuffering = !1}" @waiting="${ () => this._isBuffering = !0}">${this.hasAttribute("webm") ? this._createSource("webm", this.webmCodec) : null} ${this.hasAttribute("mp4") ? this._createSource("mp4", this.mp4Codec) : null} ${this.tracks.length ? this._createTracks() : null}</video>`
            }
            connectedCallback() {
                super.connectedCallback && super.connectedCallback(),
                this.initializeLoc(dd),
                window.addEventListener("blz-video:window-youtube-allowed", this._setUpYoutubeAllowed, {
                    once: !0
                }),
                this.addEventListener("blz-video:can-play", this._handleBlzVideoCanPlay, {
                    once: !0
                }),
                this._initializeYoutube()
            }
            disconnectedCallback() {
                this.removeEventListener("blz-video:can-play", this._handleBlzVideoCanPlay),
                window.removeEventListener("blz-video:window-youtube-allowed", this._setUpYoutubeAllowed),
                super.disconnectedCallback && super.disconnectedCallback()
            }
            firstUpdated(e) {
                super.firstUpdated(e),
                this._setUpYoutubeAllowed(),
                this._player && this.youtubeId && this._listenForYouTubeReady(),
                this.youtubeId && !this._youtubeAllowed && this.setAttribute("privacy-hidden", ""),
                !this._player || this.twitchId || this.twitchChannel || (Object.values(bd.CORE_EVENTS).forEach((e => {
                    this._player.addEventListener(e, this._dispatchStateChange)
                }
                )),
                this._addSecondaryAnalyticsEvent()),
                this.addEventListener("blz-video:state-change", this._coreAnalyticsEvent)
            }
            updated(e) {
                if (super.updated(e),
                this.youtubeId) {
                    this._youtubeAllowed && (this.removeAttribute("privacy-hidden"),
                    this._setupYoutubeId(),
                    this._listenForYouTubeReady());
                    const t = ["controls", "autoplay", "preload", "loop", "muted", "playsinline", "modestbranding", "rel"];
                    Array.from(e.keys()).some((e => t.includes(e))) && (e.forEach(( (e, o) => {
                        if (t.includes(o)) {
                            const e = "muted" === o ? "mute" : o;
                            this._ytPlayer.playerVars = {
                                ...this._ytPlayer.playerVars,
                                [e]: this[o] ? 1 : 0
                            }
                        }
                    }
                    )),
                    this.requestUpdate())
                } else
                    Array.from(e.keys()).some((e => ["webm", "mp4"].includes(e))) && this._canPlay && this.autoplay && this._player && (this._player.pause(),
                    this._player.load(),
                    this._player.play())
            }
            _initializeYoutube() {
                (new ld).init(ld.CATEGORY_FUNCTIONAL, ( () => {
                    window.youtubeAllowed = !0;
                    const e = "";
                    if (!document.querySelector(`script[src^="${e}"]`)) {
                        const t = document.createElement("script");
                        t.id = "",
                        t.src = e;
                        const o = document.getElementsByTagName("script")[0];
                        o.parentNode.insertBefore(t, o)
                    }
                    function t() {
                        window.dispatchEvent(new CustomEvent("blz-video:youtube-api-ready")),
                        window.dispatchEvent(new CustomEvent("blz-video:window-youtube-allowed"))
                    }
                    window.onYouTubeIframeAPIReady = () => {
                        "complete" !== document.readyState ? document.addEventListener("readystatechange", t, {
                            once: !0
                        }) : t()
                    }
                }
                ))
            }
            _handleBlzVideoCanPlay() {
                ["play", "pause"].forEach((e => {
                    let t;
                    "play" === e ? t = "playVideo" : "pause" === e && (t = "pauseVideo"),
                    this[e] = () => {
                        this.youtubeId ? this._ytPlayer[t]() : this._player[e]()
                    }
                }
                )),
                this.youtubeId && this.autoplay && this.muted && this.play()
            }
            _handleLiteYtLoadedEvent() {
                window.YT && window.YT.Player ? this._setupYT() : window.addEventListener("blz-video:youtube-api-ready", this._setupYT, {
                    once: !0
                })
            }
            _listenForYouTubeReady() {
                this._player?.addEventListener("liteYoutubeIframeLoaded", this._handleLiteYtLoadedEvent, {
                    once: !0
                })
            }
            _setupYT() {
                this._player?.shadowRoot?.querySelector("iframe") ? this._ytPlayer = new window.YT.Player(this._player.shadowRoot.querySelector("iframe"),{
                    events: {
                        onReady: this._onYTPlayerReady,
                        onStateChange: this._onYTPlayerStateChange
                    }
                }) : setTimeout(this._setupYT, 500)
            }
            _onYTPlayerReady(e) {
                this.thumbnail && this._player.setAttribute("tabindex", -1),
                this._dispatchCanPlay(e)
            }
            _onYTPlayerStateChange(e) {
                switch (e.data) {
                case cd.ENDED:
                case cd.PLAYING:
                case cd.PAUSED:
                    this._dispatchStateChange()
                }
            }
            play() {
                this._onPlay(),
                this._videoCued || (this._videoCued = !0,
                this.addEventListener("blz-video:can-play", ( () => {
                    this.play(),
                    this._videoCued = !1
                }
                ), {
                    once: !0
                }))
            }
            _createSource(e, t) {
                const o = t ? `;codecs=${t}` : "";
                return z`<source src="${this[e]}" type="video/${e}${o}">`
            }
            _createTracks() {
                return this.tracks.map((e => {
                    const {isDefault: t, kind: o, label: n, src: i, srclang: a} = e;
                    return z`<track ?default="${t}" kind="${it(o)}" label="${it(n)}" src="${it(i)}" srclang="${it(a)}">`
                }
                ))
            }
            _dispatchCanPlay() {
                this._canPlay = !0,
                this.dispatchEvent(new CustomEvent("blz-video:can-play",{
                    composed: !0
                }))
            }
            _handlethumbnailAlt() {
                ve(this.shadowRoot, "caption", (e => {
                    this.captionText = e.innerText
                }
                )),
                this.requestUpdate()
            }
            _renderOptionalCaption() {
                return z`<div class="blz-body-text-xl" part="content"><div class="spacer"></div><div class="main"><slot name="bottom-caption"></slot></div></div>`
            }
            _makeOverlay() {
                if (this.thumbnail) {
                    const e = z`<slot name="caption" part="caption" class="blz-heading-text-xl" @slotchange="${this._handlethumbnailAlt}"></slot>`
                      , t = z`<img src="${this.thumbnail}" alt="${this.captionText ? this.captionText : this.thumbnailAlt}" id="videoImgOverlay"><slot name="thumbnail-play"><blz-icon icon="play" size="900"></blz-icon></slot>`;
                    return z`<button part="overlay" @click="${this._removeOverlay}" aria-describedby="videoImgOverlay" aria-label="${this.getString("video_overlay_aria_label")}">${t}${e}</button>`
                }
                return z`<div class="disabled" part="overlay"><slot name="icon"></slot></div>`
            }
            _removeOverlay() {
                this._overlay && (this._overlay.setAttribute("part", "overlay-inactive"),
                this._player && (this._player.removeAttribute("tabindex"),
                this._player.focus()),
                this.play())
            }
            _onPlay() {
                this.thumbnail && this._removeOverlay()
            }
            _twitchFrame({param: e, value: t, overlay: o, caption: n}) {
                const i = {
                    parent: window.location.host.replace(/:\d+/, ""),
                    autoplay: this.autoplay,
                    muted: this.muted
                };
                i[e] = t;
                const a = `https://player.twitch.tv/?${new URLSearchParams(i)}`;
                return z`${o}${n}<iframe title="${this.getString("video_overlay_aria_label")}" src="${a}"></iframe>`
            }
            _dispatchStateChange() {
                const e = this.getPlayerState();
                e === cd.PLAYING && this._onPlay(),
                this.dispatchEvent(new CustomEvent("blz-video:state-change",{
                    composed: !0,
                    detail: e
                }))
            }
            _onLoadedMetadata(e) {
                this._ensureVideoIsMuted(e),
                "ios" === window.blz.os.toLowerCase() && this._dispatchCanPlay(e)
            }
            _ensureVideoIsMuted(e) {
                e.target.muted = this.muted
            }
            _addSecondaryAnalyticsEvent() {
                const e = me(1e3, ( () => {
                    super.pushEventFromGenerator(yn, {
                        video_id: this.youtubeId || this.twitchChannel || this.twitchId || this.src || this.webm || this.mp4
                    }, On.Seek)
                }
                ))
                  , t = me(1e3, ( () => {
                    super.pushEventFromGenerator(yn, {
                        video_id: this.youtubeId || this.twitchChannel || this.twitchId || this.src || this.webm || this.mp4
                    }, On.Audio)
                }
                ));
                this._player?.addEventListener("seeked", e),
                this._player?.addEventListener("volumechange", t)
            }
        }
        bd.CORE_EVENTS = Object.freeze({
            PLAY: "play",
            PAUSE: "pause",
            ENDED: "ended"
        });
        var gd = bd;
        hd([ai("lite-youtube,iframe,video")], bd.prototype, "_player", void 0),
        hd([ai("[part=overlay]")], bd.prototype, "_overlay", void 0),
        hd([de({
            type: String
        })], bd.prototype, "title", void 0),
        hd([de({
            type: Array
        })], bd.prototype, "tracks", void 0),
        hd([de({
            type: Boolean
        })], bd.prototype, "autoplay", void 0),
        hd([de({
            type: Boolean
        })], bd.prototype, "preload", void 0),
        hd([de({
            type: Boolean
        })], bd.prototype, "controls", void 0),
        hd([de({
            type: Boolean
        })], bd.prototype, "loop", void 0),
        hd([de({
            type: Boolean
        })], bd.prototype, "modestbranding", void 0),
        hd([de({
            type: Boolean
        })], bd.prototype, "muted", void 0),
        hd([de({
            type: Boolean
        })], bd.prototype, "playsinline", void 0),
        hd([de({
            type: String
        })], bd.prototype, "poster", void 0),
        hd([de({
            type: String
        })], bd.prototype, "thumbnail", void 0),
        hd([de({
            attribute: "thumbnail-alt",
            type: String
        })], bd.prototype, "thumbnailAlt", void 0),
        hd([de({
            type: Boolean
        })], bd.prototype, "rel", void 0),
        hd([de({
            type: String
        })], bd.prototype, "crossorigin", void 0),
        hd([de({
            attribute: "no-ratio",
            type: Boolean
        })], bd.prototype, "noRatio", void 0),
        hd([de({
            type: String
        })], bd.prototype, "mp4", void 0),
        hd([de({
            type: String
        })], bd.prototype, "mp4Codec", void 0),
        hd([de({
            type: String
        })], bd.prototype, "webm", void 0),
        hd([de({
            type: String
        })], bd.prototype, "webmCodec", void 0),
        hd([de({
            type: String
        })], bd.prototype, "src", void 0),
        hd([de({
            attribute: "youtube-id",
            type: String
        })], bd.prototype, "youtubeId", void 0),
        hd([de({
            attribute: "twitch-id",
            type: String
        })], bd.prototype, "twitchId", void 0),
        hd([de({
            attribute: "twitch-channel",
            type: String
        })], bd.prototype, "twitchChannel", void 0),
        hd([nt()], bd.prototype, "_youtubeVideoId", void 0),
        hd([nt()], bd.prototype, "_youtubePlaylistId", void 0),
        hd([nt()], bd.prototype, "_youtubeTimestamp", void 0);
        var md = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let vd = class extends gd {
        }
        ;
        vd = md([t(o.BlzVideo)], vd);
        var fd, yd, wd, _d = q`:host{--background-caption:var(--global-color-background-100);object-fit:cover;overflow:hidden;position:relative;vertical-align:middle}:host([youtube-id]){object-fit:fill}:host([privacy-hidden]){display:none}[part=overlay-inactive],[part=overlay]{cursor:pointer;height:100%;inset:0;position:absolute;width:100%;z-index:var(--measure-z-index-above)}.disabled[part=overlay]{pointer-events:none}[part=overlay-inactive]{opacity:0;visibility:hidden}[part=overlay-inactive]>img,[part=overlay]>img{display:block;height:100%;object-fit:cover;width:100%}[name=icon],[name=overlay-play]{color:var(--global-color-content-900);display:block;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);z-index:var(--measure-z-index-docked)}[name=overlay-caption]{bottom:var(--global-size-300);display:flex;justify-content:center;position:absolute;width:100%}[name=overlay-caption]::slotted(*){text-align:center}#twitch-embed,lite-youtube,video{display:block;height:100%;max-height:100%;max-width:100%;object-fit:inherit;width:100%;z-index:var(--measure-z-index-base)}:host([aspect-ratio]) [name=bottom-caption]{position:absolute;width:100%;z-index:var(--measure-z-index-below)}:host([aspect-ratio]) .spacer{display:block;height:100%;width:100%;z-index:var(--measure-z-index-below)}::slotted([slot=bottom-caption]){background:var(--background-caption);font:var(--font-400);padding:var(--global-size-100);text-align:center}::slotted([slot=overlay-poster]){height:100%;object-fit:cover;width:100%}.analytics-wrapper{aspect-ratio:inherit;height:inherit;object-fit:inherit;width:inherit}@media (min-width:720px){[name=overlay-caption]{bottom:var(--global-size-400)}::slotted([slot=bottom-caption]){padding:var(--global-size-200)}}`, xd = {
            "en-US": {
                video_overlay_aria_label: "Click To Play"
            },
            "de-DE": {
                video_overlay_aria_label: "Zum Spielen klicken"
            },
            "es-ES": {
                video_overlay_aria_label: "Haz clic para reproducir"
            },
            "es-MX": {
                video_overlay_aria_label: "Haz clic para reproducir"
            },
            "fr-FR": {
                video_overlay_aria_label: "Cliquez pour démarrer la lecture."
            },
            "it-IT": {
                video_overlay_aria_label: "Clicca per riprodurre"
            },
            "ja-JP": {
                video_overlay_aria_label: "クリックしてプレイ"
            },
            "ko-KR": {
                video_overlay_aria_label: "클릭하여 재생"
            },
            "pl-PL": {
                video_overlay_aria_label: "Kliknij, aby zagrać"
            },
            "pt-BR": {
                video_overlay_aria_label: "Clique para Jogar"
            },
            "ru-RU": {
                video_overlay_aria_label: "Щелкните, чтобы воспроизвести"
            },
            "tr-TR": {
                video_overlay_aria_label: "Oynamak İçin Tıklayın"
            },
            "th-TH": {
                video_overlay_aria_label: "คลิกเพื่อเล่น"
            },
            "zh-CN": {
                video_overlay_aria_label: "点击游玩"
            },
            "zh-TW": {
                video_overlay_aria_label: "按一下以播放"
            }
        };
        !function(e) {
            e.UNSTARTED = "unstarted",
            e.PLAYING = "playing",
            e.PAUSED = "paused",
            e.ENDED = "ended"
        }(fd || (fd = {})),
        function(e) {
            e.PENDING = "pending",
            e.READY = "ready"
        }(yd || (yd = {})),
        function(e) {
            e.SEEKED = "seeked",
            e.VOLUMECHANGE = "volumechange"
        }(wd || (wd = {}));
        var zd = function(e, t) {
            return zd = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var o in t)
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            ,
            zd(e, t)
        };
        function kd(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function o() {
                this.constructor = e
            }
            zd(e, t),
            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
            new o)
        }
        function Sd(e, t, o, n) {
            return new (o || (o = Promise))((function(i, a) {
                function r(e) {
                    try {
                        l(n.next(e))
                    } catch (e) {
                        a(e)
                    }
                }
                function s(e) {
                    try {
                        l(n.throw(e))
                    } catch (e) {
                        a(e)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value,
                    t instanceof o ? t : new o((function(e) {
                        e(t)
                    }
                    ))).then(r, s)
                }
                l((n = n.apply(e, t || [])).next())
            }
            ))
        }
        function Ad(e, t) {
            var o, n, i, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            }, r = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
            return r.next = s(0),
            r.throw = s(1),
            r.return = s(2),
            "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function s(s) {
                return function(l) {
                    return function(s) {
                        if (o)
                            throw new TypeError("Generator is already executing.");
                        for (; r && (r = 0,
                        s[0] && (a = 0)),
                        a; )
                            try {
                                if (o = 1,
                                n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n),
                                0) : n.next) && !(i = i.call(n, s[1])).done)
                                    return i;
                                switch (n = 0,
                                i && (s = [2 & s[0], i.value]),
                                s[0]) {
                                case 0:
                                case 1:
                                    i = s;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: s[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    n = s[1],
                                    s = [0];
                                    continue;
                                case 7:
                                    s = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = a.trys,
                                    (i = i.length > 0 && i[i.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                        a.label = s[1];
                                        break
                                    }
                                    if (6 === s[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = s;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(s);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                s = t.call(e, a)
                            } catch (e) {
                                s = [6, e],
                                n = 0
                            } finally {
                                o = i = 0
                            }
                        if (5 & s[0])
                            throw s[1];
                        return {
                            value: s[0] ? s[1] : void 0,
                            done: !0
                        }
                    }([s, l])
                }
            }
        }
        function Ed(e) {
            var t = "function" == typeof Symbol && Symbol.iterator
              , o = t && e[t]
              , n = 0;
            if (o)
                return o.call(e);
            if (e && "number" == typeof e.length)
                return {
                    next: function() {
                        return e && n >= e.length && (e = void 0),
                        {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
        function Cd(e, t) {
            var o = "function" == typeof Symbol && e[Symbol.iterator];
            if (!o)
                return e;
            var n, i, a = o.call(e), r = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; )
                    r.push(n.value)
            } catch (e) {
                i = {
                    error: e
                }
            } finally {
                try {
                    n && !n.done && (o = a.return) && o.call(a)
                } finally {
                    if (i)
                        throw i.error
                }
            }
            return r
        }
        function Od(e, t, o) {
            if (o || 2 === arguments.length)
                for (var n, i = 0, a = t.length; i < a; i++)
                    !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)),
                    n[i] = t[i]);
            return e.concat(n || Array.prototype.slice.call(t))
        }
        function Bd(e) {
            return this instanceof Bd ? (this.v = e,
            this) : new Bd(e)
        }
        function Pd(e, t, o) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var n, i = o.apply(e, t || []), a = [];
            return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype),
            r("next"),
            r("throw"),
            r("return", (function(e) {
                return function(t) {
                    return Promise.resolve(t).then(e, c)
                }
            }
            )),
            n[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            n;
            function r(e, t) {
                i[e] && (n[e] = function(t) {
                    return new Promise((function(o, n) {
                        a.push([e, t, o, n]) > 1 || s(e, t)
                    }
                    ))
                }
                ,
                t && (n[e] = t(n[e])))
            }
            function s(e, t) {
                try {
                    !function(e) {
                        e.value instanceof Bd ? Promise.resolve(e.value.v).then(l, c) : d(a[0][2], e)
                    }(i[e](t))
                } catch (e) {
                    d(a[0][3], e)
                }
            }
            function l(e) {
                s("next", e)
            }
            function c(e) {
                s("throw", e)
            }
            function d(e, t) {
                e(t),
                a.shift(),
                a.length && s(a[0][0], a[0][1])
            }
        }
        function Td(e) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var t, o = e[Symbol.asyncIterator];
            return o ? o.call(e) : (e = Ed(e),
            t = {},
            n("next"),
            n("throw"),
            n("return"),
            t[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            t);
            function n(o) {
                t[o] = e[o] && function(t) {
                    return new Promise((function(n, i) {
                        (function(e, t, o, n) {
                            Promise.resolve(n).then((function(t) {
                                e({
                                    value: t,
                                    done: o
                                })
                            }
                            ), t)
                        }
                        )(n, i, (t = e[o](t)).done, t.value)
                    }
                    ))
                }
            }
        }
        function Ld(e) {
            return "function" == typeof e
        }
        function Id(e) {
            var t = e((function(e) {
                Error.call(e),
                e.stack = (new Error).stack
            }
            ));
            return t.prototype = Object.create(Error.prototype),
            t.prototype.constructor = t,
            t
        }
        "function" == typeof SuppressedError && SuppressedError;
        var Rd = Id((function(e) {
            return function(t) {
                e(this),
                this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map((function(e, t) {
                    return t + 1 + ") " + e.toString()
                }
                )).join("\n  ") : "",
                this.name = "UnsubscriptionError",
                this.errors = t
            }
        }
        ));
        function $d(e, t) {
            if (e) {
                var o = e.indexOf(t);
                0 <= o && e.splice(o, 1)
            }
        }
        var jd = function() {
            function e(e) {
                this.initialTeardown = e,
                this.closed = !1,
                this._parentage = null,
                this._finalizers = null
            }
            var t;
            return e.prototype.unsubscribe = function() {
                var e, t, o, n, i;
                if (!this.closed) {
                    this.closed = !0;
                    var a = this._parentage;
                    if (a)
                        if (this._parentage = null,
                        Array.isArray(a))
                            try {
                                for (var r = Ed(a), s = r.next(); !s.done; s = r.next()) {
                                    s.value.remove(this)
                                }
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    s && !s.done && (t = r.return) && t.call(r)
                                } finally {
                                    if (e)
                                        throw e.error
                                }
                            }
                        else
                            a.remove(this);
                    var l = this.initialTeardown;
                    if (Ld(l))
                        try {
                            l()
                        } catch (e) {
                            i = e instanceof Rd ? e.errors : [e]
                        }
                    var c = this._finalizers;
                    if (c) {
                        this._finalizers = null;
                        try {
                            for (var d = Ed(c), u = d.next(); !u.done; u = d.next()) {
                                var p = u.value;
                                try {
                                    Md(p)
                                } catch (e) {
                                    i = null != i ? i : [],
                                    e instanceof Rd ? i = Od(Od([], Cd(i)), Cd(e.errors)) : i.push(e)
                                }
                            }
                        } catch (e) {
                            o = {
                                error: e
                            }
                        } finally {
                            try {
                                u && !u.done && (n = d.return) && n.call(d)
                            } finally {
                                if (o)
                                    throw o.error
                            }
                        }
                    }
                    if (i)
                        throw new Rd(i)
                }
            }
            ,
            e.prototype.add = function(t) {
                var o;
                if (t && t !== this)
                    if (this.closed)
                        Md(t);
                    else {
                        if (t instanceof e) {
                            if (t.closed || t._hasParent(this))
                                return;
                            t._addParent(this)
                        }
                        (this._finalizers = null !== (o = this._finalizers) && void 0 !== o ? o : []).push(t)
                    }
            }
            ,
            e.prototype._hasParent = function(e) {
                var t = this._parentage;
                return t === e || Array.isArray(t) && t.includes(e)
            }
            ,
            e.prototype._addParent = function(e) {
                var t = this._parentage;
                this._parentage = Array.isArray(t) ? (t.push(e),
                t) : t ? [t, e] : e
            }
            ,
            e.prototype._removeParent = function(e) {
                var t = this._parentage;
                t === e ? this._parentage = null : Array.isArray(t) && $d(t, e)
            }
            ,
            e.prototype.remove = function(t) {
                var o = this._finalizers;
                o && $d(o, t),
                t instanceof e && t._removeParent(this)
            }
            ,
            e.EMPTY = ((t = new e).closed = !0,
            t),
            e
        }()
          , Dd = jd.EMPTY;
        function Nd(e) {
            return e instanceof jd || e && "closed"in e && Ld(e.remove) && Ld(e.add) && Ld(e.unsubscribe)
        }
        function Md(e) {
            Ld(e) ? e() : e.unsubscribe()
        }
        var Fd = {
            onUnhandledError: null,
            onStoppedNotification: null,
            Promise: void 0,
            useDeprecatedSynchronousErrorHandling: !1,
            useDeprecatedNextContext: !1
        }
          , Ud = {
            setTimeout: function(e, t) {
                for (var o = [], n = 2; n < arguments.length; n++)
                    o[n - 2] = arguments[n];
                var i = Ud.delegate;
                return (null == i ? void 0 : i.setTimeout) ? i.setTimeout.apply(i, Od([e, t], Cd(o))) : setTimeout.apply(void 0, Od([e, t], Cd(o)))
            },
            clearTimeout: function(e) {
                var t = Ud.delegate;
                return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e)
            },
            delegate: void 0
        };
        function Hd(e) {
            Ud.setTimeout((function() {
                throw e
            }
            ))
        }
        function Vd() {}
        var qd = function(e) {
            function t(t) {
                var o = e.call(this) || this;
                return o.isStopped = !1,
                t ? (o.destination = t,
                Nd(t) && t.add(o)) : o.destination = Zd,
                o
            }
            return kd(t, e),
            t.create = function(e, t, o) {
                return new Kd(e,t,o)
            }
            ,
            t.prototype.next = function(e) {
                this.isStopped || this._next(e)
            }
            ,
            t.prototype.error = function(e) {
                this.isStopped || (this.isStopped = !0,
                this._error(e))
            }
            ,
            t.prototype.complete = function() {
                this.isStopped || (this.isStopped = !0,
                this._complete())
            }
            ,
            t.prototype.unsubscribe = function() {
                this.closed || (this.isStopped = !0,
                e.prototype.unsubscribe.call(this),
                this.destination = null)
            }
            ,
            t.prototype._next = function(e) {
                this.destination.next(e)
            }
            ,
            t.prototype._error = function(e) {
                try {
                    this.destination.error(e)
                } finally {
                    this.unsubscribe()
                }
            }
            ,
            t.prototype._complete = function() {
                try {
                    this.destination.complete()
                } finally {
                    this.unsubscribe()
                }
            }
            ,
            t
        }(jd)
          , Gd = Function.prototype.bind;
        function Wd(e, t) {
            return Gd.call(e, t)
        }
        var Yd = function() {
            function e(e) {
                this.partialObserver = e
            }
            return e.prototype.next = function(e) {
                var t = this.partialObserver;
                if (t.next)
                    try {
                        t.next(e)
                    } catch (e) {
                        Xd(e)
                    }
            }
            ,
            e.prototype.error = function(e) {
                var t = this.partialObserver;
                if (t.error)
                    try {
                        t.error(e)
                    } catch (e) {
                        Xd(e)
                    }
                else
                    Xd(e)
            }
            ,
            e.prototype.complete = function() {
                var e = this.partialObserver;
                if (e.complete)
                    try {
                        e.complete()
                    } catch (e) {
                        Xd(e)
                    }
            }
            ,
            e
        }()
          , Kd = function(e) {
            function t(t, o, n) {
                var i, a, r = e.call(this) || this;
                Ld(t) || !t ? i = {
                    next: null != t ? t : void 0,
                    error: null != o ? o : void 0,
                    complete: null != n ? n : void 0
                } : r && Fd.useDeprecatedNextContext ? ((a = Object.create(t)).unsubscribe = function() {
                    return r.unsubscribe()
                }
                ,
                i = {
                    next: t.next && Wd(t.next, a),
                    error: t.error && Wd(t.error, a),
                    complete: t.complete && Wd(t.complete, a)
                }) : i = t;
                return r.destination = new Yd(i),
                r
            }
            return kd(t, e),
            t
        }(qd);
        function Xd(e) {
            Hd(e)
        }
        var Zd = {
            closed: !0,
            next: Vd,
            error: function(e) {
                throw e
            },
            complete: Vd
        }
          , Jd = "function" == typeof Symbol && Symbol.observable || "@@observable";
        function Qd(e) {
            return e
        }
        function eu(e) {
            e()
        }
        var tu = function() {
            function e(e) {
                e && (this._subscribe = e)
            }
            return e.prototype.lift = function(t) {
                var o = new e;
                return o.source = this,
                o.operator = t,
                o
            }
            ,
            e.prototype.subscribe = function(e, t, o) {
                var n, i = this, a = (n = e) && n instanceof qd || function(e) {
                    return e && Ld(e.next) && Ld(e.error) && Ld(e.complete)
                }(n) && Nd(n) ? e : new Kd(e,t,o);
                return eu((function() {
                    var e = i
                      , t = e.operator
                      , o = e.source;
                    a.add(t ? t.call(a, o) : o ? i._subscribe(a) : i._trySubscribe(a))
                }
                )),
                a
            }
            ,
            e.prototype._trySubscribe = function(e) {
                try {
                    return this._subscribe(e)
                } catch (t) {
                    e.error(t)
                }
            }
            ,
            e.prototype.forEach = function(e, t) {
                var o = this;
                return new (t = ou(t))((function(t, n) {
                    var i = new Kd({
                        next: function(t) {
                            try {
                                e(t)
                            } catch (e) {
                                n(e),
                                i.unsubscribe()
                            }
                        },
                        error: n,
                        complete: t
                    });
                    o.subscribe(i)
                }
                ))
            }
            ,
            e.prototype._subscribe = function(e) {
                var t;
                return null === (t = this.source) || void 0 === t ? void 0 : t.subscribe(e)
            }
            ,
            e.prototype[Jd] = function() {
                return this
            }
            ,
            e.prototype.pipe = function() {
                for (var e, t = [], o = 0; o < arguments.length; o++)
                    t[o] = arguments[o];
                return (0 === (e = t).length ? Qd : 1 === e.length ? e[0] : function(t) {
                    return e.reduce((function(e, t) {
                        return t(e)
                    }
                    ), t)
                }
                )(this)
            }
            ,
            e.prototype.toPromise = function(e) {
                var t = this;
                return new (e = ou(e))((function(e, o) {
                    var n;
                    t.subscribe((function(e) {
                        return n = e
                    }
                    ), (function(e) {
                        return o(e)
                    }
                    ), (function() {
                        return e(n)
                    }
                    ))
                }
                ))
            }
            ,
            e.create = function(t) {
                return new e(t)
            }
            ,
            e
        }();
        function ou(e) {
            var t;
            return null !== (t = null != e ? e : Fd.Promise) && void 0 !== t ? t : Promise
        }
        var nu = Id((function(e) {
            return function() {
                e(this),
                this.name = "ObjectUnsubscribedError",
                this.message = "object unsubscribed"
            }
        }
        ))
          , iu = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.closed = !1,
                t.currentObservers = null,
                t.observers = [],
                t.isStopped = !1,
                t.hasError = !1,
                t.thrownError = null,
                t
            }
            return kd(t, e),
            t.prototype.lift = function(e) {
                var t = new au(this,this);
                return t.operator = e,
                t
            }
            ,
            t.prototype._throwIfClosed = function() {
                if (this.closed)
                    throw new nu
            }
            ,
            t.prototype.next = function(e) {
                var t = this;
                eu((function() {
                    var o, n;
                    if (t._throwIfClosed(),
                    !t.isStopped) {
                        t.currentObservers || (t.currentObservers = Array.from(t.observers));
                        try {
                            for (var i = Ed(t.currentObservers), a = i.next(); !a.done; a = i.next()) {
                                a.value.next(e)
                            }
                        } catch (e) {
                            o = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (n = i.return) && n.call(i)
                            } finally {
                                if (o)
                                    throw o.error
                            }
                        }
                    }
                }
                ))
            }
            ,
            t.prototype.error = function(e) {
                var t = this;
                eu((function() {
                    if (t._throwIfClosed(),
                    !t.isStopped) {
                        t.hasError = t.isStopped = !0,
                        t.thrownError = e;
                        for (var o = t.observers; o.length; )
                            o.shift().error(e)
                    }
                }
                ))
            }
            ,
            t.prototype.complete = function() {
                var e = this;
                eu((function() {
                    if (e._throwIfClosed(),
                    !e.isStopped) {
                        e.isStopped = !0;
                        for (var t = e.observers; t.length; )
                            t.shift().complete()
                    }
                }
                ))
            }
            ,
            t.prototype.unsubscribe = function() {
                this.isStopped = this.closed = !0,
                this.observers = this.currentObservers = null
            }
            ,
            Object.defineProperty(t.prototype, "observed", {
                get: function() {
                    var e;
                    return (null === (e = this.observers) || void 0 === e ? void 0 : e.length) > 0
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype._trySubscribe = function(t) {
                return this._throwIfClosed(),
                e.prototype._trySubscribe.call(this, t)
            }
            ,
            t.prototype._subscribe = function(e) {
                return this._throwIfClosed(),
                this._checkFinalizedStatuses(e),
                this._innerSubscribe(e)
            }
            ,
            t.prototype._innerSubscribe = function(e) {
                var t = this
                  , o = this
                  , n = o.hasError
                  , i = o.isStopped
                  , a = o.observers;
                return n || i ? Dd : (this.currentObservers = null,
                a.push(e),
                new jd((function() {
                    t.currentObservers = null,
                    $d(a, e)
                }
                )))
            }
            ,
            t.prototype._checkFinalizedStatuses = function(e) {
                var t = this
                  , o = t.hasError
                  , n = t.thrownError
                  , i = t.isStopped;
                o ? e.error(n) : i && e.complete()
            }
            ,
            t.prototype.asObservable = function() {
                var e = new tu;
                return e.source = this,
                e
            }
            ,
            t.create = function(e, t) {
                return new au(e,t)
            }
            ,
            t
        }(tu)
          , au = function(e) {
            function t(t, o) {
                var n = e.call(this) || this;
                return n.destination = t,
                n.source = o,
                n
            }
            return kd(t, e),
            t.prototype.next = function(e) {
                var t, o;
                null === (o = null === (t = this.destination) || void 0 === t ? void 0 : t.next) || void 0 === o || o.call(t, e)
            }
            ,
            t.prototype.error = function(e) {
                var t, o;
                null === (o = null === (t = this.destination) || void 0 === t ? void 0 : t.error) || void 0 === o || o.call(t, e)
            }
            ,
            t.prototype.complete = function() {
                var e, t;
                null === (t = null === (e = this.destination) || void 0 === e ? void 0 : e.complete) || void 0 === t || t.call(e)
            }
            ,
            t.prototype._subscribe = function(e) {
                var t, o;
                return null !== (o = null === (t = this.source) || void 0 === t ? void 0 : t.subscribe(e)) && void 0 !== o ? o : Dd
            }
            ,
            t
        }(iu)
          , ru = function(e) {
            function t(t) {
                var o = e.call(this) || this;
                return o._value = t,
                o
            }
            return kd(t, e),
            Object.defineProperty(t.prototype, "value", {
                get: function() {
                    return this.getValue()
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype._subscribe = function(t) {
                var o = e.prototype._subscribe.call(this, t);
                return !o.closed && t.next(this._value),
                o
            }
            ,
            t.prototype.getValue = function() {
                var e = this
                  , t = e.hasError
                  , o = e.thrownError
                  , n = e._value;
                if (t)
                    throw o;
                return this._throwIfClosed(),
                n
            }
            ,
            t.prototype.next = function(t) {
                e.prototype.next.call(this, this._value = t)
            }
            ,
            t
        }(iu)
          , su = function(e) {
            return e && "number" == typeof e.length && "function" != typeof e
        };
        var lu = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
        function cu(e) {
            if (e instanceof tu)
                return e;
            if (null != e) {
                if (function(e) {
                    return Ld(e[Jd])
                }(e))
                    return a = e,
                    new tu((function(e) {
                        var t = a[Jd]();
                        if (Ld(t.subscribe))
                            return t.subscribe(e);
                        throw new TypeError("Provided object does not correctly implement Symbol.observable")
                    }
                    ));
                if (su(e))
                    return i = e,
                    new tu((function(e) {
                        for (var t = 0; t < i.length && !e.closed; t++)
                            e.next(i[t]);
                        e.complete()
                    }
                    ));
                if (Ld(null == (n = e) ? void 0 : n.then))
                    return o = e,
                    new tu((function(e) {
                        o.then((function(t) {
                            e.closed || (e.next(t),
                            e.complete())
                        }
                        ), (function(t) {
                            return e.error(t)
                        }
                        )).then(null, Hd)
                    }
                    ));
                if (function(e) {
                    return Symbol.asyncIterator && Ld(null == e ? void 0 : e[Symbol.asyncIterator])
                }(e))
                    return du(e);
                if (function(e) {
                    return Ld(null == e ? void 0 : e[lu])
                }(e))
                    return t = e,
                    new tu((function(e) {
                        var o, n;
                        try {
                            for (var i = Ed(t), a = i.next(); !a.done; a = i.next()) {
                                var r = a.value;
                                if (e.next(r),
                                e.closed)
                                    return
                            }
                        } catch (e) {
                            o = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (n = i.return) && n.call(i)
                            } finally {
                                if (o)
                                    throw o.error
                            }
                        }
                        e.complete()
                    }
                    ));
                if (function(e) {
                    return Ld(null == e ? void 0 : e.getReader)
                }(e))
                    return du(function(e) {
                        return Pd(this, arguments, (function() {
                            var t, o, n;
                            return Ad(this, (function(i) {
                                switch (i.label) {
                                case 0:
                                    t = e.getReader(),
                                    i.label = 1;
                                case 1:
                                    i.trys.push([1, , 9, 10]),
                                    i.label = 2;
                                case 2:
                                    return [4, Bd(t.read())];
                                case 3:
                                    return o = i.sent(),
                                    n = o.value,
                                    o.done ? [4, Bd(void 0)] : [3, 5];
                                case 4:
                                    return [2, i.sent()];
                                case 5:
                                    return [4, Bd(n)];
                                case 6:
                                    return [4, i.sent()];
                                case 7:
                                    return i.sent(),
                                    [3, 2];
                                case 8:
                                    return [3, 10];
                                case 9:
                                    return t.releaseLock(),
                                    [7];
                                case 10:
                                    return [2]
                                }
                            }
                            ))
                        }
                        ))
                    }(e))
            }
            var t, o, n, i, a;
            throw function(e) {
                return new TypeError("You provided " + (null !== e && "object" == typeof e ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
            }(e)
        }
        function du(e) {
            return new tu((function(t) {
                (function(e, t) {
                    var o, n, i, a;
                    return Sd(this, void 0, void 0, (function() {
                        var r, s;
                        return Ad(this, (function(l) {
                            switch (l.label) {
                            case 0:
                                l.trys.push([0, 5, 6, 11]),
                                o = Td(e),
                                l.label = 1;
                            case 1:
                                return [4, o.next()];
                            case 2:
                                if ((n = l.sent()).done)
                                    return [3, 4];
                                if (r = n.value,
                                t.next(r),
                                t.closed)
                                    return [2];
                                l.label = 3;
                            case 3:
                                return [3, 1];
                            case 4:
                                return [3, 11];
                            case 5:
                                return s = l.sent(),
                                i = {
                                    error: s
                                },
                                [3, 11];
                            case 6:
                                return l.trys.push([6, , 9, 10]),
                                n && !n.done && (a = o.return) ? [4, a.call(o)] : [3, 8];
                            case 7:
                                l.sent(),
                                l.label = 8;
                            case 8:
                                return [3, 10];
                            case 9:
                                if (i)
                                    throw i.error;
                                return [7];
                            case 10:
                                return [7];
                            case 11:
                                return t.complete(),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                )(e, t).catch((function(e) {
                    return t.error(e)
                }
                ))
            }
            ))
        }
        function uu(e) {
            return function(t) {
                if (function(e) {
                    return Ld(null == e ? void 0 : e.lift)
                }(t))
                    return t.lift((function(t) {
                        try {
                            return e(t, this)
                        } catch (e) {
                            this.error(e)
                        }
                    }
                    ));
                throw new TypeError("Unable to lift unknown Observable type")
            }
        }
        function pu(e, t, o, n, i) {
            return new hu(e,t,o,n,i)
        }
        var hu = function(e) {
            function t(t, o, n, i, a, r) {
                var s = e.call(this, t) || this;
                return s.onFinalize = a,
                s.shouldUnsubscribe = r,
                s._next = o ? function(e) {
                    try {
                        o(e)
                    } catch (e) {
                        t.error(e)
                    }
                }
                : e.prototype._next,
                s._error = i ? function(e) {
                    try {
                        i(e)
                    } catch (e) {
                        t.error(e)
                    } finally {
                        this.unsubscribe()
                    }
                }
                : e.prototype._error,
                s._complete = n ? function() {
                    try {
                        n()
                    } catch (e) {
                        t.error(e)
                    } finally {
                        this.unsubscribe()
                    }
                }
                : e.prototype._complete,
                s
            }
            return kd(t, e),
            t.prototype.unsubscribe = function() {
                var t;
                if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                    var o = this.closed;
                    e.prototype.unsubscribe.call(this),
                    !o && (null === (t = this.onFinalize) || void 0 === t || t.call(this))
                }
            }
            ,
            t
        }(qd);
        function bu(e, t) {
            return uu((function(o, n) {
                var i = 0;
                o.subscribe(pu(n, (function(o) {
                    n.next(e.call(t, o, i++))
                }
                )))
            }
            ))
        }
        function gu(e, t, o) {
            return void 0 === o && (o = 1 / 0),
            Ld(t) ? gu((function(o, n) {
                return bu((function(e, i) {
                    return t(o, e, n, i)
                }
                ))(cu(e(o, n)))
            }
            ), o) : ("number" == typeof t && (o = t),
            uu((function(t, n) {
                return function(e, t, o, n, i, a, r, s) {
                    var l = []
                      , c = 0
                      , d = 0
                      , u = !1
                      , p = function() {
                        !u || l.length || c || t.complete()
                    }
                      , h = function(e) {
                        return c < n ? b(e) : l.push(e)
                    }
                      , b = function(e) {
                        a && t.next(e),
                        c++;
                        var s = !1;
                        cu(o(e, d++)).subscribe(pu(t, (function(e) {
                            null == i || i(e),
                            a ? h(e) : t.next(e)
                        }
                        ), (function() {
                            s = !0
                        }
                        ), void 0, (function() {
                            if (s)
                                try {
                                    c--;
                                    for (var e = function() {
                                        var e = l.shift();
                                        r ? function(e, t, o, n, i) {
                                            void 0 === n && (n = 0),
                                            void 0 === i && (i = !1);
                                            var a = t.schedule((function() {
                                                o(),
                                                i ? e.add(this.schedule(null, n)) : this.unsubscribe()
                                            }
                                            ), n);
                                            e.add(a)
                                        }(t, r, (function() {
                                            return b(e)
                                        }
                                        )) : b(e)
                                    }; l.length && c < n; )
                                        e();
                                    p()
                                } catch (e) {
                                    t.error(e)
                                }
                        }
                        )))
                    };
                    return e.subscribe(pu(t, h, (function() {
                        u = !0,
                        p()
                    }
                    ))),
                    function() {
                        null == s || s()
                    }
                }(t, n, e, o)
            }
            )))
        }
        var mu = Array.isArray;
        function vu(e) {
            return bu((function(t) {
                return function(e, t) {
                    return mu(t) ? e.apply(void 0, Od([], Cd(t))) : e(t)
                }(e, t)
            }
            ))
        }
        var fu = ["addListener", "removeListener"]
          , yu = ["addEventListener", "removeEventListener"]
          , wu = ["on", "off"];
        function _u(e, t, o, n) {
            if (Ld(o) && (n = o,
            o = void 0),
            n)
                return _u(e, t, o).pipe(vu(n));
            var i = Cd(function(e) {
                return Ld(e.addEventListener) && Ld(e.removeEventListener)
            }(e) ? yu.map((function(n) {
                return function(i) {
                    return e[n](t, i, o)
                }
            }
            )) : function(e) {
                return Ld(e.addListener) && Ld(e.removeListener)
            }(e) ? fu.map(xu(e, t)) : function(e) {
                return Ld(e.on) && Ld(e.off)
            }(e) ? wu.map(xu(e, t)) : [], 2)
              , a = i[0]
              , r = i[1];
            if (!a && su(e))
                return gu((function(e) {
                    return _u(e, t, o)
                }
                ))(cu(e));
            if (!a)
                throw new TypeError("Invalid event target");
            return new tu((function(e) {
                var t = function() {
                    for (var t = [], o = 0; o < arguments.length; o++)
                        t[o] = arguments[o];
                    return e.next(1 < t.length ? t : t[0])
                };
                return a(t),
                function() {
                    return r(t)
                }
            }
            ))
        }
        function xu(e, t) {
            return function(o) {
                return function(n) {
                    return e[o](t, n)
                }
            }
        }
        function zu(e) {
            return uu((function(t, o) {
                cu(e).subscribe(pu(o, (function() {
                    return o.complete()
                }
                ), Vd)),
                !o.closed && t.subscribe(o)
            }
            ))
        }
        var ku = function(e) {
            function t(t, o) {
                return e.call(this) || this
            }
            return kd(t, e),
            t.prototype.schedule = function(e, t) {
                return this
            }
            ,
            t
        }(jd)
          , Su = {
            setInterval: function(e, t) {
                for (var o = [], n = 2; n < arguments.length; n++)
                    o[n - 2] = arguments[n];
                var i = Su.delegate;
                return (null == i ? void 0 : i.setInterval) ? i.setInterval.apply(i, Od([e, t], Cd(o))) : setInterval.apply(void 0, Od([e, t], Cd(o)))
            },
            clearInterval: function(e) {
                var t = Su.delegate;
                return ((null == t ? void 0 : t.clearInterval) || clearInterval)(e)
            },
            delegate: void 0
        }
          , Au = function(e) {
            function t(t, o) {
                var n = e.call(this, t, o) || this;
                return n.scheduler = t,
                n.work = o,
                n.pending = !1,
                n
            }
            return kd(t, e),
            t.prototype.schedule = function(e, t) {
                var o;
                if (void 0 === t && (t = 0),
                this.closed)
                    return this;
                this.state = e;
                var n = this.id
                  , i = this.scheduler;
                return null != n && (this.id = this.recycleAsyncId(i, n, t)),
                this.pending = !0,
                this.delay = t,
                this.id = null !== (o = this.id) && void 0 !== o ? o : this.requestAsyncId(i, this.id, t),
                this
            }
            ,
            t.prototype.requestAsyncId = function(e, t, o) {
                return void 0 === o && (o = 0),
                Su.setInterval(e.flush.bind(e, this), o)
            }
            ,
            t.prototype.recycleAsyncId = function(e, t, o) {
                if (void 0 === o && (o = 0),
                null != o && this.delay === o && !1 === this.pending)
                    return t;
                null != t && Su.clearInterval(t)
            }
            ,
            t.prototype.execute = function(e, t) {
                if (this.closed)
                    return new Error("executing a cancelled action");
                this.pending = !1;
                var o = this._execute(e, t);
                if (o)
                    return o;
                !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
            }
            ,
            t.prototype._execute = function(e, t) {
                var o, n = !1;
                try {
                    this.work(e)
                } catch (e) {
                    n = !0,
                    o = e || new Error("Scheduled action threw falsy error")
                }
                if (n)
                    return this.unsubscribe(),
                    o
            }
            ,
            t.prototype.unsubscribe = function() {
                if (!this.closed) {
                    var t = this.id
                      , o = this.scheduler
                      , n = o.actions;
                    this.work = this.state = this.scheduler = null,
                    this.pending = !1,
                    $d(n, this),
                    null != t && (this.id = this.recycleAsyncId(o, t, null)),
                    this.delay = null,
                    e.prototype.unsubscribe.call(this)
                }
            }
            ,
            t
        }(ku)
          , Eu = {
            now: function() {
                return (Eu.delegate || Date).now()
            },
            delegate: void 0
        }
          , Cu = function() {
            function e(t, o) {
                void 0 === o && (o = e.now),
                this.schedulerActionCtor = t,
                this.now = o
            }
            return e.prototype.schedule = function(e, t, o) {
                return void 0 === t && (t = 0),
                new this.schedulerActionCtor(this,e).schedule(o, t)
            }
            ,
            e.now = Eu.now,
            e
        }()
          , Ou = function(e) {
            function t(t, o) {
                void 0 === o && (o = Cu.now);
                var n = e.call(this, t, o) || this;
                return n.actions = [],
                n._active = !1,
                n
            }
            return kd(t, e),
            t.prototype.flush = function(e) {
                var t = this.actions;
                if (this._active)
                    t.push(e);
                else {
                    var o;
                    this._active = !0;
                    do {
                        if (o = e.execute(e.state, e.delay))
                            break
                    } while (e = t.shift());
                    if (this._active = !1,
                    o) {
                        for (; e = t.shift(); )
                            e.unsubscribe();
                        throw o
                    }
                }
            }
            ,
            t
        }(Cu)
          , Bu = new Ou(Au);
        function Pu(e, t) {
            return void 0 === t && (t = Qd),
            e = null != e ? e : Tu,
            uu((function(o, n) {
                var i, a = !0;
                o.subscribe(pu(n, (function(o) {
                    var r = t(o);
                    !a && e(i, r) || (a = !1,
                    i = r,
                    n.next(o))
                }
                )))
            }
            ))
        }
        function Tu(e, t) {
            return e === t
        }
        var Lu = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class Iu extends (dt(kn)) {
            constructor() {
                super(...arguments),
                this.title = "",
                this.autoplay = !1,
                this.loop = !1,
                this.muted = !1,
                this.playsinline = !1,
                this.timestamp = 0,
                this.controls = !1,
                this.aspectRatio = "16:9",
                this.analyticsEvent = "video",
                this.loadingState$ = new ru(yd.PENDING),
                this.playbackState$ = new ru(fd.UNSTARTED),
                this.unsubscribe$ = new iu
            }
            static get styles() {
                return [...kn.styles, _d]
            }
            get componentDependencies() {
                return {
                    [o.BlzIcon]: bi
                }
            }
            get playbackState() {
                return this.playbackState$ ? this.playbackState$.getValue() : fd.UNSTARTED
            }
            get loadingState() {
                return this.loadingState$ ? this.loadingState$.getValue() : yd.PENDING
            }
            render() {
                const e = this.renderOverlay()
                  , t = this.renderBottomCaption()
                  , o = this.renderVideo();
                return z`<div class="analytics-wrapper" role="presentation">${e} ${o} ${t}</div>`
            }
            connectedCallback() {
                super.connectedCallback(),
                this.setupStateListeners(),
                this.initializeLoc(xd),
                this.playerAnalytics(),
                this.playerActionsAnalytics(),
                this.bindEventListeners()
            }
            disconnectedCallback() {
                super.disconnectedCallback(),
                this.unsubscribe$.next({}),
                this.unsubscribe$.complete(),
                this.destroyEventListeners()
            }
            removeOverlay() {
                this.overlay && (this.overlay.setAttribute("part", "overlay-inactive"),
                this.setPlayerFocusable(!0))
            }
            dispatchStateChangeEvent(e) {
                e === yd.READY ? this.dispatchEvent(new CustomEvent("blz-video:can-play",{
                    composed: !0
                })) : this.dispatchEvent(new CustomEvent("blz-video:state-change",{
                    composed: !0,
                    detail: {
                        state: e,
                        id: this.id
                    }
                }))
            }
            pushPlayerAnalytics(e) {
                let t = "";
                switch (e) {
                case fd.PLAYING:
                    t = On.Play;
                    break;
                case fd.PAUSED:
                    t = On.Pause;
                    break;
                case fd.ENDED:
                    t = On.Complete;
                    break;
                case wd.VOLUMECHANGE:
                    t = On.Audio;
                    break;
                case wd.SEEKED:
                    t = On.Seek
                }
                void 0 !== this.videoIdString && "" !== this.videoIdString && "" !== t && super.pushEventFromGenerator(yn, {
                    video_id: this.videoIdString
                }, t)
            }
            playerActionsAnalytics() {
                var e, t, o, n;
                _u(this, "blz-video:state-change").pipe(zu(this.unsubscribe$), (o = e => [wd.SEEKED, wd.VOLUMECHANGE].includes(e.detail.state),
                uu((function(e, t) {
                    var i = 0;
                    e.subscribe(pu(t, (function(e) {
                        return o.call(n, e, i++) && t.next(e)
                    }
                    )))
                }
                ))), (e = 750,
                void 0 === t && (t = Bu),
                uu((function(o, n) {
                    var i = null
                      , a = null
                      , r = null
                      , s = function() {
                        if (i) {
                            i.unsubscribe(),
                            i = null;
                            var e = a;
                            a = null,
                            n.next(e)
                        }
                    };
                    function l() {
                        var o = r + e
                          , a = t.now();
                        if (a < o)
                            return i = this.schedule(void 0, o - a),
                            void n.add(i);
                        s()
                    }
                    o.subscribe(pu(n, (function(o) {
                        a = o,
                        r = t.now(),
                        i || (i = t.schedule(l, e),
                        n.add(i))
                    }
                    ), (function() {
                        s(),
                        n.complete()
                    }
                    ), void 0, (function() {
                        a = i = null
                    }
                    )))
                }
                ))), bu((e => e.detail.state))).subscribe((e => {
                    this.pushPlayerAnalytics(e)
                }
                ))
            }
            playerAnalytics() {
                this.playbackState$.pipe(zu(this.unsubscribe$), Pu()).subscribe((e => this.pushPlayerAnalytics(e)))
            }
            bindEventListeners() {
                window.addEventListener("blz-video:play", (e => {
                    this.isValidEvent(e) && this.handlePlay()
                }
                )),
                window.addEventListener("blz-video:pause", (e => {
                    this.isValidEvent(e) && this.handlePause()
                }
                )),
                window.addEventListener("blz-video:stop", (e => {
                    this.isValidEvent(e) && this.handleStop()
                }
                )),
                this.addEventListener("blz-video:play", this.handlePlay),
                this.addEventListener("blz-video:pause", this.handlePause),
                this.addEventListener("blz-video:stop", this.handleStop)
            }
            destroyEventListeners() {
                window.removeEventListener("blz-video:play", this.handlePlay),
                window.removeEventListener("blz-video:pause", this.handlePause),
                window.removeEventListener("blz-video:stop", this.handleStop),
                this.removeEventListener("blz-video:play", this.handlePlay),
                this.removeEventListener("blz-video:pause", this.handlePause),
                this.removeEventListener("blz-video:stop", this.handleStop)
            }
            renderBottomCaption() {
                return z`<div class="blz-body-text-xl" part="content"><div class="spacer"></div><div class="main"><slot name="bottom-caption"></slot></div></div>`
            }
            renderOverlay() {
                const e = this.querySelector('[slot="overlay-poster"]');
                this.setPlayerFocusable(!e);
                const t = e ? z`<slot name="overlay-poster" part="overlay-poster"></slot><slot name="icon"><blz-icon icon="play" size="900"></blz-icon></slot><slot name="overlay-caption" part="overlay-caption" class="blz-heading-text-xl"></slot>` : z`<slot name="icon"></slot>`;
                return z`<button part="overlay" @click="${this.handleInitialPlayback}" aria-describedby="videoImgOverlay" aria-label="${this.getString("video_overlay_aria_label")}">${t}</button>`
            }
            handleInitialPlayback() {
                this.loadingState$.getValue() === yd.READY && (this.removeOverlay(),
                this.handlePlay())
            }
            setupStateListeners() {
                this.playbackState$ = new ru(fd.UNSTARTED),
                this.loadingState$ = new ru(yd.PENDING),
                this.playbackState$.pipe(zu(this.unsubscribe$), Pu()).subscribe((e => {
                    this.dispatchStateChangeEvent(e)
                }
                )),
                this.loadingState$.pipe(zu(this.unsubscribe$), Pu()).subscribe((e => {
                    this.dispatchStateChangeEvent(e)
                }
                ))
            }
            isValidEvent(e) {
                return !!this.id && e.detail.id === this.id
            }
            setPlayerFocusable(e) {
                this.playerElement && (e ? this.playerElement.removeAttribute("tabindex") : this.playerElement.setAttribute("tabindex", "-1"))
            }
        }
        Lu([de({
            type: String
        })], Iu.prototype, "title", void 0),
        Lu([de({
            type: Boolean
        })], Iu.prototype, "autoplay", void 0),
        Lu([de({
            type: Boolean
        })], Iu.prototype, "loop", void 0),
        Lu([de({
            type: Boolean
        })], Iu.prototype, "muted", void 0),
        Lu([de({
            type: Boolean
        })], Iu.prototype, "playsinline", void 0),
        Lu([de({
            type: Number
        })], Iu.prototype, "timestamp", void 0),
        Lu([de({
            type: Boolean
        })], Iu.prototype, "controls", void 0),
        Lu([de({
            attribute: "aspect-ratio",
            type: String
        })], Iu.prototype, "aspectRatio", void 0),
        Lu([ai("[part=overlay]")], Iu.prototype, "overlay", void 0);
        var Ru = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        class $u extends Iu {
            constructor() {
                super(...arguments),
                this.videoId = "",
                this.playlistId = "",
                this.rel = !1,
                this.youtubeAllowed = !1
            }
            get componentDependencies() {
                return {
                    ...super.componentDependencies,
                    "lite-youtube": pd
                }
            }
            get videoIdString() {
                return this.videoId || this.playlistId
            }
            connectedCallback() {
                super.connectedCallback(),
                this.handleSetup()
            }
            firstUpdated(e) {
                super.firstUpdated(e),
                this.playerElement?.addEventListener("liteYoutubeIframeLoaded", ( () => {
                    window.YT ? this.loadYouTubeAPI() : window.onYouTubeIframeAPIReady = () => {
                        this.loadYouTubeAPI()
                    }
                }
                ))
            }
            renderVideo() {
                if (this.requestUpdate(),
                !this.videoId && !this.playlistId)
                    return z``;
                const e = new URLSearchParams;
                return e.append("enablejsapi", "1"),
                e.append("controls", (+this.controls).toString()),
                e.append("mute", (+(this.muted || this.autoplay)).toString()),
                e.append("playsinline", (+this.playsinline).toString()),
                e.append("rel", (+this.rel).toString()),
                e.append("autoplay", (+this.autoplay).toString()),
                this.loop && (e.append("loop", "1"),
                e.append("playlist", this.videoId || this.playlistId)),
                z`${this.youtubeAllowed ? z`<lite-youtube id="jsapi" autoload nocookie videoId="${it(this.videoId)}" playlistId="${it(this.playlistId)}" videoStartAt="${it(this.timestamp)}" params="${e.toString()}"></lite-youtube>` : null}`
            }
            handleSetup() {
                (new ld).init(ld.CATEGORY_FUNCTIONAL, ( () => {
                    this.youtubeAllowed = !0;
                    const e = "https://www.youtube.com/iframe_api";
                    if (!document.querySelector(`script[src^="${e}"]`)) {
                        const t = document.createElement("script");
                        t.src = e;
                        const o = document.getElementsByTagName("script")[0];
                        o.parentNode?.insertBefore(t, o)
                    }
                }
                ))
            }
            handlePlay() {
                this.ytPlayer?.playVideo()
            }
            handlePause() {
                this.ytPlayer?.pauseVideo()
            }
            handleStop() {
                this.ytPlayer?.stopVideo()
            }
            onYTPlayerStateChange(e) {
                const t = {
                    [YT.PlayerState.UNSTARTED]: fd.UNSTARTED,
                    [YT.PlayerState.ENDED]: fd.ENDED,
                    [YT.PlayerState.PLAYING]: fd.PLAYING,
                    [YT.PlayerState.PAUSED]: fd.PAUSED
                }[e.data];
                t && this.playbackState$.next(t)
            }
            loadYouTubeAPI() {
                const e = this.playerElement?.shadowRoot?.querySelector("iframe");
                e && (this.ytPlayer = new window.YT.Player(e,{
                    events: {
                        onReady: () => {
                            this.loadingState$.next(yd.READY),
                            this.autoplay && (this.removeOverlay(),
                            this.handlePlay())
                        }
                        ,
                        onStateChange: e => this.onYTPlayerStateChange(e)
                    }
                }))
            }
        }
        Ru([de({
            attribute: "youtube-id"
        })], $u.prototype, "videoId", void 0),
        Ru([de({
            attribute: "youtube-playlist-id"
        })], $u.prototype, "playlistId", void 0),
        Ru([de({
            type: Boolean
        })], $u.prototype, "rel", void 0),
        Ru([ai("lite-youtube")], $u.prototype, "playerElement", void 0);
        var ju = function(e, t, o, n) {
            var i, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, o, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (i = e[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(t, o, r) : i(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r),
            r
        };
        let Du = class extends $u {
        }
        ;
        Du = ju([t(o.BlzYoutubeVideo)], Du);
        !function(e, t) {
            void 0 === t && (t = {});
            var o = t.insertAt;
            if (e && "undefined" != typeof document) {
                var n = document.head || document.getElementsByTagName("head")[0]
                  , i = document.createElement("style");
                i.type = "text/css",
                "top" === o && n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i),
                i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e))
            }
        }('@media (max-width:479px){[bp]:not([bp~="+min"]):not([bp~=min]):not([bp~="min+"]):not([bp~="+xs"]):not([bp~="+sm"]):not([bp~="+md"]):not([bp~="+lg"]):not([bp~="+xl"]):not([bp~="+xxl"]):not([bp~="+max"]){display:none}}@media (min-width:480px) and (max-width:719px){[bp]:not([bp~="min+"]):not([bp~="+xs"]):not([bp~=xs]):not([bp~="xs+"]):not([bp~="+sm"]):not([bp~="+md"]):not([bp~="+lg"]):not([bp~="+xl"]):not([bp~="+xxl"]):not([bp~="+max"]){display:none}}@media (min-width:720px) and (max-width:959px){[bp]:not([bp~="min+"]):not([bp~="xs+"]):not([bp~="+sm"]):not([bp~=sm]):not([bp~="sm+"]):not([bp~="+md"]):not([bp~="+lg"]):not([bp~="+xl"]):not([bp~="+xxl"]):not([bp~="+max"]){display:none}}@media (min-width:960px) and (max-width:1199px){[bp]:not([bp~="min+"]):not([bp~="xs+"]):not([bp~="sm+"]):not([bp~="+md"]):not([bp~=md]):not([bp~="md+"]):not([bp~="+lg"]):not([bp~="+xl"]):not([bp~="+xxl"]):not([bp~="+max"]){display:none}}@media (min-width:1200px) and (max-width:1399px){[bp]:not([bp~="min+"]):not([bp~="xs+"]):not([bp~="sm+"]):not([bp~="md+"]):not([bp~="+lg"]):not([bp~=lg]):not([bp~="lg+"]):not([bp~="+xl"]):not([bp~="+xxl"]):not([bp~="+max"]){display:none}}@media (min-width:1400px) and (max-width:1599px){[bp]:not([bp~="min+"]):not([bp~="xs+"]):not([bp~="sm+"]):not([bp~="md+"]):not([bp~="lg+"]):not([bp~="+xl"]):not([bp~=xl]):not([bp~="xl+"]):not([bp~="+xxl"]):not([bp~="+max"]){display:none}}@media (min-width:1600px) and (max-width:2599px){[bp]:not([bp~="min+"]):not([bp~="xs+"]):not([bp~="sm+"]):not([bp~="md+"]):not([bp~="lg+"]):not([bp~="xl+"]):not([bp~="+xxl"]):not([bp~=xxl]):not([bp~="xxl+"]):not([bp~="+max"]){display:none}}@media (min-width:2600px){[bp]:not([bp~="min+"]):not([bp~="xs+"]):not([bp~="sm+"]):not([bp~="md+"]):not([bp~="lg+"]):not([bp~="xl+"]):not([bp~="xxl+"]):not([bp~="+max"]):not([bp~=max]):not([bp~="max+"]){display:none}}[aspect-ratio]{--x:16;--y:9;position:relative;width:100%}[aspect-ratio]:before{content:"";display:block;padding-bottom:calc(var(--y)/var(--x)*100%);width:100%}[aspect-ratio="9:16"]{--x:9;--y:16}[aspect-ratio="3:4"]{--x:3;--y:4}[aspect-ratio="4:3"]{--x:4;--y:3}[aspect-ratio="7:8"]{--x:7;--y:8}[aspect-ratio="1:1"]{--x:1;--y:1}[data-device-type=Android] [blz-device]:not([blz-device~=Android]):not([blz-device~=android]):not([blz-device~=mobile]),[data-device-type=Other] [blz-device]:not([blz-device~=Other]):not([blz-device~=other]),[data-device-type=Windows] [blz-device]:not([blz-device~=Windows]):not([blz-device~=windows]):not([blz-device~=PC]):not([blz-device~=pc]),[data-device-type=iOS] [blz-device]:not([blz-device~=iOS]):not([blz-device~=ios]):not([blz-device~=mobile]),[data-device-type=macOS] [blz-device]:not([blz-device~=macOS]):not([blz-device~=macos]):not([blz-device~=mac]):not([blz-device~=PC]):not([blz-device~=pc]){display:none!important}[blz-tooltip]{cursor:pointer;position:relative}.blz-tooltip,.blz-tooltip-extension{display:none;margin:0;padding:0;pointer-events:all;position:absolute;user-select:text;z-index:var(--measure-z-index-fixed)}.blz-tooltip{background-color:var(--semantic-color-background-info-primary);border:1px solid var(--tooltip-color-border-primary);border-radius:var(--global-size-50);bottom:0;font:var(--tooltip-font-text);left:50%;max-width:var(--tooltip-max-width);padding:var(--global-size-100) var(--global-size-200);text-align:left;transform:translate(-50%,var(--tooltip-vertical-transform));white-space:normal;width:max-content}.blz-tooltip>.blz-tooltip-container{display:flex;flex-direction:column;gap:var(--semantic-space-between-xxl)}.blz-tooltip .blz-tooltip-container>*{max-width:100%}[blz-tooltip\\:place=top] .blz-tooltip{--tooltip-vertical-transform:calc(-100% - var(--tooltip-offset));bottom:auto;top:0}[blz-tooltip\\:place=top] .blz-tooltip-extension{bottom:0}.blz-tooltip-caret{background-color:var(--semantic-color-background-info-primary);content:"";display:none;height:var(--global-size-200);left:50%;margin:0;padding:0;position:absolute;transform:rotate(45deg) translate(-50%);transform-origin:center;width:var(--global-size-200)}[blz-tooltip\\:place=top] .blz-tooltip-caret{top:-18px}[blz-tooltip\\:place=bottom] .blz-tooltip-caret{bottom:-30px}[blz-tooltip\\:place=bottom] .blz-tooltip-extension{top:0}[blz-tooltip\\:sticky=left] .blz-tooltip{left:0;transform:translateY(var(--tooltip-vertical-transform))}[blz-tooltip\\:sticky=right] .blz-tooltip{left:auto;right:0;text-align:right;transform:translateY(var(--tooltip-vertical-transform))}[data-blz-tooltip-active] .blz-tooltip,[data-blz-tooltip-active] .blz-tooltip-caret,[data-blz-tooltip-active] .blz-tooltip-extension{display:inline-block}.blz-body-text-xxl{font:var(--semantic-body-text-xxl)}.blz-body-text-xl{font:var(--semantic-body-text-xl)}.blz-body-text-lg{font:var(--semantic-body-text-lg)}.blz-body-text-md{font:var(--semantic-body-text-md)}.blz-body-text-sm{font:var(--semantic-body-text-sm)}.blz-body-text-lg,.blz-body-text-lg::slotted(*),.blz-body-text-md,.blz-body-text-md::slotted(*),.blz-body-text-sm,.blz-body-text-sm::slotted(*),.blz-body-text-xl,.blz-body-text-xl::slotted(*),.blz-body-text-xxl,.blz-body-text-xxl::slotted(*){color:var(--global-color-content-700)}.blz-heading-text-xxl{font:var(--semantic-heading-text-xxl)}.blz-heading-text-xl{font:var(--semantic-heading-text-xl)}.blz-heading-text-lg{font:var(--semantic-heading-text-lg)}.blz-heading-text-md{font:var(--semantic-heading-text-md)}.blz-heading-text-sm{font:var(--semantic-heading-text-sm)}.blz-heading-text-xs{font:var(--semantic-heading-text-xs)}.blz-heading-text-xxs{font:var(--semantic-heading-text-xxs)}.blz-heading-text-lg,.blz-heading-text-lg::slotted(*),.blz-heading-text-md,.blz-heading-text-md::slotted(*),.blz-heading-text-sm,.blz-heading-text-sm::slotted(*),.blz-heading-text-xl,.blz-heading-text-xl::slotted(*),.blz-heading-text-xs,.blz-heading-text-xs::slotted(*),.blz-heading-text-xxl,.blz-heading-text-xxl::slotted(*),.blz-heading-text-xxs{color:var(--semantic-color-content-default);margin:0}.blz-link{color:var(--semantic-color-text-link-default);font-weight:var(--global-font-weight-bold);text-decoration:none;text-underline-position:under}h1>.blz-link,h2>.blz-link,h3>.blz-link,h4>.blz-link,h5>.blz-link,h6>.blz-link,p>.blz-link{text-decoration:underline}.blz-link:active,.blz-link:visited{color:var(--semantic-color-text-link-default);font-weight:var(--global-font-weight-bold);text-decoration:none;text-underline-position:under}.blz-link.hover,.blz-link:hover{color:var(--semantic-color-text-link-hover);text-decoration:underline}.blz-subheading-text-lg{font:var(--semantic-subheading-text-lg)}.blz-subheading-text-lg,.blz-subheading-text-md{letter-spacing:var(--semantic-subheading-letter-spacing);text-transform:uppercase}.blz-subheading-text-md{font:var(--semantic-subheading-text-md)}.blz-subheading-text-lg,.blz-subheading-text-lg::slotted(*),.blz-subheading-text-md,.blz-subheading-text-md::slotted(*){margin:0}.blz-title-text-lg{font:var(--semantic-title-text-lg)}.blz-title-text-md{font:var(--semantic-title-text-md)}.blz-title-text-sm{font:var(--semantic-title-text-sm)}.blz-title-text-lg,.blz-title-text-lg::slotted(*),.blz-title-text-md,.blz-title-text-md::slotted(*),.blz-title-text-sm,.blz-title-text-sm::slotted(*){color:var(--semantic-color-content-default);margin:0}.blz-body,.blz-body-lead,.blz-body-lead::slotted(*),.blz-body-lede,.blz-body-lede::slotted(*),.blz-body::slotted(*),.blz-text,.blz-text::slotted(*),[class*=" blz-label"],[class*=" blz-label"]::slotted(*),[class^=blz-label],[class^=blz-label]::slotted(*){color:var(--global-color-content-700);font:var(--semantic-body-text-xl)}.blz-body-sm,.blz-body-sm::slotted(*),.blz-label,.blz-label::slotted(*){font:var(--semantic-body-text-md)}.blz-body-xs,.blz-body-xs::slotted(*),.blz-label-sm,.blz-label-sm::slotted(*){font:var(--semantic-body-text-sm)}.blz-body,.blz-body-lead,.blz-body-lead::slotted(*),.blz-body-lede,.blz-body-lede::slotted(*),.blz-body::slotted(*),[class*=" blz-label"],[class*=" blz-label"]::slotted(*),[class^=blz-label],[class^=blz-label]::slotted(*){line-height:var(--global-font-line-height-comfy);margin:0}.blz-body-lead,.blz-body-lead::slotted(*),.blz-body-lede,.blz-body-lede::slotted(*){font:var(--semantic-body-text-xxl)}[class*=" blz-heading"],[class*=" blz-heading"]::slotted(*),[class^=blz-heading],[class^=blz-heading]::slotted(*){color:var(--semantic-color-content-default);margin:0}.blz-heading-xl,.blz-heading-xl::slotted(*){font:var(--header-heading-font-xl)}.blz-heading-lg,.blz-heading-lg::slotted(*){font:var(--header-heading-font-lg)}.blz-heading,.blz-heading::slotted(*){font:var(--header-heading-font-md)}.blz-heading-sm,.blz-heading-sm::slotted(*){font:var(--header-heading-font-sm)}.blz-heading-xs,.blz-heading-xs::slotted(*){font:var(--header-heading-font-xs)}.blz-heading-xxs,.blz-heading-xxs::slotted(*){font:var(--header-heading-font-xxs)}.blz-subheading-lg,.blz-subheading-lg::slotted(*){font:var(--semantic-subheading-text-lg);letter-spacing:var(--semantic-subheading-letter-spacing);text-transform:uppercase}.blz-subheading,.blz-subheading::slotted(*){font:var(--semantic-subheading-text-md);letter-spacing:var(--semantic-subheading-letter-spacing);text-transform:uppercase}.blz-list,.blz-list-alpha{margin:0}.blz-list-alpha{list-style-type:upper-alpha}[class*=blz-list] li{padding-inline-start:var(--global-size-200)}[class*=blz-list] ol{list-style-type:lower-alpha;padding-inline-start:0}[class*=blz-list] ol ol{list-style-type:lower-roman}.blz-list ul{padding-inline-start:0}.blz-list ul ul{list-style-type:"\\2013"}.blz-list ul ul li{padding-inline-start:var(--global-size-250)}.blz-table-overflow-container{overflow:auto}[class*=blz-table]{border-collapse:collapse;text-align:left;width:100%}[class*=blz-table] td,[class*=blz-table] th{min-width:240px;padding:var(--global-size-150) var(--global-size-100);vertical-align:top;word-break:break-word}[class*=blz-table] thead{color:var(--global-color-content-900);font:var(--semantic-heading-text-sm)}[class*=blz-table] tbody{color:var(--global-color-content-700);font:var(--semantic-body-text-sm)}[class*=blz-table] tbody tr:nth-child(odd){background-color:#ffffff0d}[class*=blz-table] tbody tr.hover,[class*=blz-table] tbody tr:hover{background-color:#ffffff1a}[class*=blz-table-sticky] th{background-color:var(--global-color-background-800);position:sticky;top:0}[class*=blz-table] tr td:first-of-type,[class*=blz-table] tr th:first-of-type{border:0 solid #0000;border-bottom-left-radius:var(--global-size-50);border-top-left-radius:var(--global-size-50)}[class*=blz-table] tr td:last-of-type,[class*=blz-table] tr th:last-of-type{border:0 solid #0000;border-bottom-right-radius:var(--global-size-50);border-top-right-radius:var(--global-size-50)}@media (min-width:960px){[class*=blz-table] td,[class*=blz-table] th{padding:var(--global-size-300) var(--global-size-200)}[class*=blz-table] thead{font:var(--semantic-heading-text-md)}[class*=blz-table] tbody{font:var(--semantic-body-text-md)}}.blz-scrollbar{scrollbar-color:var(--global-color-content-200) #0000;scrollbar-width:auto}.blz-scrollbar:hover{scrollbar-color:var(--global-color-content-400) #0000}.blz-scrollbar::-webkit-scrollbar{width:var(--global-size-100)}.blz-scrollbar::-webkit-scrollbar-thumb{background-color:var(--global-color-content-200);border-radius:var(--global-size-50)}.blz-scrollbar::-webkit-scrollbar-thumb:hover{background-color:var(--global-color-content-400)}.blz-scrollbar::-webkit-scrollbar-track{background:#0000}.blz-scrollbar--with-container,.blz-scrollbar--with-container:hover{scrollbar-color:inherit;scrollbar-width:inherit}.blz-scrollbar--with-container::-webkit-scrollbar{width:var(--global-size-300)}.blz-scrollbar--with-container::-webkit-scrollbar-thumb{background-clip:content-box;background-color:var(--global-color-content-200);border:var(--global-size-75) solid #0000;border-radius:var(--global-size-300)}.blz-scrollbar--with-container::-webkit-scrollbar-thumb:hover{background-color:var(--global-color-content-400)}.blz-scrollbar--with-container::-webkit-scrollbar-track{background:#0000;border:1px solid var(--global-color-content-300);border-radius:var(--global-size-50)}.blz-form{display:flex;flex-direction:column;gap:16px}.blz-form .blz-input-message{visibility:hidden}.blz-form .blz-input:invalid:not(:placeholder-shown){border:1px solid var(--semantic-color-feedback-warning)}.blz-form-group .blz-input~blz-alert,.blz-form-group .blz-input~div,.blz-form-group .blz-input~span{width:100%}.blz-form .blz-input.invalid:not(:placeholder-shown)~.blz-input-message,.blz-form .blz-input.invalid:not(:placeholder-shown)~blz-alert,.blz-form .blz-input:invalid:not(:placeholder-shown)~.blz-input-message,.blz-form .blz-input:invalid:not(:placeholder-shown)~blz-alert{visibility:visible}.blz-form-group{display:flex;flex-direction:column;gap:var(--semantic-space-between-xxxs)}.blz-form-label{color:var(--semantic-color-text-label);display:block;font:var(--semantic-subheading-text-md);letter-spacing:var(--semantic-subheading-letter-spacing);text-transform:uppercase}.blz-form-wrapper{align-items:center;display:flex;flex-wrap:wrap;gap:var(--global-size-100);position:relative;width:100%}select[is=blz-dropdown]{appearance:none;background-color:var(--input-text-field-color-background-default);background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' stroke=\'%23fff8\' stroke-linecap=\'round\' stroke-linejoin=\'round\' fill=\'none\' stroke-width=\'2\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'m6 9 6 6 6-6\'/%3E%3C/svg%3E");background-position:calc(100% - var(--global-size-100));background-repeat:no-repeat;background-size:var(--global-size-300);border:var(--global-size-25) solid #0000;border-radius:var(--global-size-50);color:var(--semantic-color-content-placeholder);font:var(--input-font-md);height:var(--semantic-size-input-height-md-mobile);list-style:none;padding:var(--input-select-space-padding-sm);text-overflow:ellipsis;width:280px}select[is=blz-dropdown].focus-visible,select[is=blz-dropdown].hover,select[is=blz-dropdown]:focus-visible,select[is=blz-dropdown]:hover{background-color:var(--input-color-background-hover)}select[is=blz-dropdown].focus-visible,select[is=blz-dropdown].focus.focus-visible,select[is=blz-dropdown]:focus-visible,select[is=blz-dropdown]:focus:focus-visible{outline:var(--global-color-content-700) solid 2px}select[is=blz-dropdown]:focus:not(:focus-visible){outline:none}select[is=blz-dropdown].selected{color:var(--global-color-content-900)}select[is=blz-dropdown].small{background-size:var(--global-size-250);font:var(--input-font-sm);height:var(--semantic-size-input-height-sm-mobile)}select[is=blz-dropdown] option{background-color:var(--global-color-background-800);color:var(--global-color-content-900);font:var(--input-font-sm)}@media (min-width:720px){select[is=blz-dropdown]{height:var(--semantic-size-input-height-md-desktop);padding:var(--input-select-space-padding-md)}select[is=blz-dropdown].small{height:var(--semantic-size-input-height-sm-desktop)}}.blz-dropdown{appearance:none;background-color:var(--input-text-field-color-background-default);background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' stroke=\'%23fff8\' stroke-linecap=\'round\' stroke-linejoin=\'round\' fill=\'none\' stroke-width=\'2\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'m6 9 6 6 6-6\'/%3E%3C/svg%3E");background-position:calc(100% - var(--global-size-100));background-repeat:no-repeat;background-size:var(--global-size-300);border:1px solid var(--semantic-color-border-input-default);border-radius:var(--global-size-50);font:var(--input-font-md);height:var(--semantic-size-input-height-md-mobile);list-style:none;padding:var(--input-text-field-space-padding-md);text-overflow:ellipsis;transition:border-color var(--global-motion-duration-medium) var(--global-motion-ease-out),color var(--global-motion-duration-medium) var(--global-motion-ease-out);width:100%}.blz-dropdown,.blz-dropdown::placeholder{color:var(--semantic-color-content-placeholder)}.blz-dropdown option,.blz-dropdown.selected{color:var(--semantic-color-content-info)}.blz-dropdown.disabled,.blz-dropdown:disabled{border:1px solid var(--semantic-color-border-input-disabled);color:var(--semantic-color-content-inactive)}.blz-dropdown.hover,.blz-dropdown:hover{background-color:var(--input-text-field-color-background-hover);border:1px solid var(--semantic-color-border-input-hover);color:var(--semantic-color-text-heading)}.blz-dropdown.active,.blz-dropdown.focus,.blz-dropdown:active,.blz-dropdown:focus{border:1px solid var(--semantic-color-border-input-focus);color:var(--semantic-color-content-default)}.blz-dropdown.disabled::placeholder,.blz-dropdown:disabled::placeholder{color:var(--semantic-color-content-inactive)}.blz-dropdown.disabled:hover,.blz-dropdown:disabled:hover{border:1px solid var(--semantic-color-border-input-disabled);color:var(--semantic-color-content-inactive)}.blz-dropdown.disabled:hover::placeholder,.blz-dropdown:disabled:hover::placeholder{color:var(--semantic-color-content-inactive)}.blz-dropdown.invalid{border:1px solid var(--semantic-color-feedback-warning)}.blz-dropdown.valid{border:1px solid var(--semantic-color-feedback-success)}.blz-dropdown.small{background-size:var(--global-size-250);font:var(--input-font-sm);height:var(--semantic-size-input-height-sm-mobile)}.blz-dropdown:focus:not(:focus-visible){outline:none}.blz-dropdown-icon{display:block;height:var(--global-size-300);pointer-events:none;position:absolute;width:var(--global-size-300)}.blz-dropdown-icon.prepend{left:var(--global-size-125)}.blz-dropdown-icon.append{right:var(--global-size-125)}.blz-dropdown-icon.prepend~.blz-dropdown{padding-left:var(--global-size-500)}@media (min-width:720px){.blz-dropdown{height:var(--semantic-size-input-height-md-desktop);padding:var(--input-select-space-padding-md)}.blz-dropdown.small{height:var(--semantic-size-input-height-sm-desktop)}}input[is=blz-input]{appearance:none;background-color:var(--input-text-field-color-background-default);border:0;border-radius:var(--global-size-50);display:flex;font:var(--input-font-md);height:var(--semantic-size-input-height-md-mobile);padding:var(--input-text-field-space-padding-md);text-overflow:ellipsis}input[is=blz-input],textarea{color:var(--global-color-content-900)}input[is=blz-input]::placeholder{color:var(--semantic-color-content-placeholder)}input[is=blz-input]:invalid{outline:var(--global-color-warning-500) solid 2px}input[is=blz-input].focus-visible,input[is=blz-input].hover,input[is=blz-input]:focus-visible,input[is=blz-input]:hover,input[is=blz-input]:invalid{background-color:var(--input-text-field-color-background-hover)}input[is=blz-input]:focus-visible,input[is=blz-input]:focus:focus-visible{outline:var(--global-color-content-700) solid 2px}input[is=blz-input].small{font:var(--input-font-sm);height:var(--semantic-size-input-height-sm-mobile);padding:var(--input-text-field-space-padding-sm)}@media (min-width:720px){input[is=blz-input]{height:var(--semantic-size-input-height-md-desktop)}}.blz-input{appearance:none;background-color:var(--input-text-field-color-background-default);border:1px solid var(--semantic-color-border-input-default);border-radius:var(--global-size-50);color:var(--semantic-color-content-info);display:flex;font:var(--input-font-md);height:var(--semantic-size-input-height-md-mobile);padding:var(--input-text-field-space-padding-md);text-overflow:ellipsis;transition:border-color var(--global-motion-duration-medium) var(--global-motion-ease-out),color var(--global-motion-duration-medium) var(--global-motion-ease-out);width:100%}textarea.blz-input{height:auto;padding:var(--global-size-250) var(--global-size-200)}.blz-input.small{font:var(--input-font-sm);height:var(--semantic-size-input-height-sm-mobile);padding:var(--input-text-field-space-padding-sm)}.blz-input.single-digit{font:var(--semantic-title-text-md);height:var(--semantic-size-input-height-xl-mobile);padding:0;text-align:center;width:var(--semantic-size-input-width-sm-desktop)}.blz-input::placeholder{color:var(--semantic-color-content-placeholder)}.blz-input.disabled,.blz-input:disabled{border:1px solid var(--semantic-color-border-input-disabled);color:var(--semantic-color-content-inactive);cursor:not-allowed}.blz-input.hover,.blz-input:hover{border:1px solid var(--semantic-color-border-input-hover);color:var(--semantic-color-text-heading)}.blz-input.active,.blz-input.focus,.blz-input:active,.blz-input:focus{border:1px solid var(--semantic-color-border-input-focus);color:var(--semantic-color-content-default)}.blz-input.disabled::placeholder,.blz-input:disabled::placeholder{color:var(--semantic-color-content-inactive)}.blz-input.disabled:hover,.blz-input:disabled:hover{border:1px solid var(--semantic-color-border-input-disabled);color:var(--semantic-color-content-inactive)}.blz-input.disabled:hover::placeholder,.blz-input:disabled:hover::placeholder{color:var(--semantic-color-content-inactive)}.blz-input.invalid{border:1px solid var(--semantic-color-feedback-warning)}.blz-input.valid{border:1px solid var(--semantic-color-feedback-success)}.blz-input-icon{display:block;height:var(--global-size-300);pointer-events:none;position:absolute;width:var(--global-size-300)}.blz-input-icon.small{height:var(--global-size-250);width:var(--global-size-250)}.blz-input-icon.prepend{left:var(--global-size-125)}.blz-input-icon.append{right:var(--global-size-125)}.blz-input-icon.prepend~.blz-input{padding-left:var(--global-size-500)}.blz-input-icon.append~.blz-input{padding-right:var(--global-size-500)}.blz-input:focus:not(:focus-visible){outline:none}@media (min-width:720px){.blz-input{height:var(--semantic-size-input-height-md-desktop)}}input[is=blz-checkbox]{align-self:baseline;appearance:none;background-color:var(--input-selection-color-background);border:1px solid var(--semantic-color-border-input-default);border-radius:1px;margin:0 var(--input-selection-label-gap) 0 0;min-height:var(--global-size-200);min-width:var(--global-size-200)}input[is=blz-checkbox]:checked{background-color:var(--semantic-color-background-icon-selected);background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' stroke=\'%23fff8\' stroke-linecap=\'round\' stroke-linejoin=\'round\' fill=\'%23fff\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M19.777 5.636a.5.5 0 0 0-.707 0L8.818 15.888 4.93 12a.5.5 0 0 0-.707 0l-.707.707a.5.5 0 0 0 0 .707l4.216 4.217a.527.527 0 0 0 .025.026l.707.707a.499.499 0 0 0 .708 0l.708-.707a.48.48 0 0 0 .021-.023L20.485 7.05a.5.5 0 0 0 0-.707l-.707-.707Z\'/%3E%3C/svg%3E");border:0;border-radius:1px}input[is=blz-checkbox].hover,input[is=blz-checkbox]:hover{border:1px solid var(--semantic-color-border-input-hover)}input[is=blz-checkbox].focus-visible,input[is=blz-checkbox].focus.focus-visible,input[is=blz-checkbox]:focus-visible,input[is=blz-checkbox]:focus:focus-visible{outline:var(--semantic-color-content-info) solid 2px}label[is=blz-checkbox]{color:var(--semantic-color-content-info);display:flex;font:var(--semantic-body-text-md);max-width:340px}label[is=blz-checkbox].hover,label[is=blz-checkbox]:hover{color:var(--semantic-color-content-heading-hover)}@media (min-width:720px){label[is=blz-checkbox]{max-width:540px}}.blz-checkbox{align-items:center;cursor:pointer;display:flex;font:var(--semantic-body-text-md);position:relative;user-select:none}.blz-checkbox input{height:0;opacity:0;position:absolute;width:0}.blz-checkbox__label{color:var(--semantic-color-content-info);padding-left:var(--global-font-size-650);transition:color var(--global-motion-duration-medium) var(--global-motion-ease-out)}.blz-checkbox__checkmark{background-color:var(--input-text-field-color-background-default);border:1px solid var(--semantic-color-border-input-default);border-radius:var(--global-size-50);height:var(--global-size-250);left:0;position:absolute;width:var(--global-size-250)}.blz-checkbox__checkmark:after{border:solid var(--input-selection-checkmark-color-icon-active);border-width:0 3px 3px 0;content:"";display:none;height:var(--global-size-150);left:var(--global-size-75);position:relative;top:1px;transform:rotate(45deg);transition:border-color var(--global-motion-duration-medium) var(--global-motion-ease-out),background-color var(--global-motion-duration-medium) var(--global-motion-ease-out);width:5px}.blz-checkbox__checkmark:focus:after,.blz-checkbox__checkmark:hover:after{border:solid var(--input-selection-checkmark-color-icon-hover);border-width:0 3px 3px 0}.blz-checkbox__checkmark:active:after{border:solid var(--semantic-color-background-action-primary-pressed);border-width:0 3px 3px 0}.blz-checkbox.invalid .blz-checkbox__checkmark{border:1px solid var(--semantic-color-feedback-warning)}.blz-checkbox.valid .blz-checkbox__checkmark{border:1px solid var(--semantic-color-feedback-success)}.blz-checkbox:has(:focus-visible) .blz-checkbox__checkmark{outline:5px auto Highlight;outline:5px auto -webkit-focus-ring-color}.blz-checkbox input:checked~.blz-checkbox__checkmark{border-color:var(--semantic-color-border-input-default)}.blz-checkbox input:disabled~.blz-checkbox__checkmark{border-color:var(--semantic-color-border-input-disabled);cursor:not-allowed}.blz-checkbox input:disabled~.blz-checkbox__label{color:var(--global-color-content-600);cursor:not-allowed}.blz-checkbox.invalid input:checked~.blz-checkbox__checkmark{border-color:var(--semantic-color-feedback-warning)}.blz-checkbox.valid input:checked~.blz-checkbox__checkmark{border-color:var(--semantic-color-feedback-success)}.blz-checkbox input:checked~.blz-checkbox__checkmark:after{display:block}.blz-checkbox input:checked:disabled~.blz-checkbox__checkmark:after{border-color:var(--semantic-color-content-inactive);opacity:.48}.blz-checkbox.hover input:not(:disabled)~.blz-checkbox__checkmark:after,.blz-checkbox:hover input:not(:disabled)~.blz-checkbox__checkmark:after{border-color:var(--input-selection-checkmark-color-icon-hover)}.blz-checkbox:focus input:not(:disabled)~.blz-checkbox__checkmark,.blz-checkbox:hover input:not(:disabled)~.blz-checkbox__checkmark{border-color:var(--semantic-color-border-input-hover)}.blz-checkbox:focus input:not(:disabled)~.blz-checkbox__label,.blz-checkbox:hover input:not(:disabled)~.blz-checkbox__label{color:var(--semantic-color-content-info)}.blz-checkbox:active input:not(:disabled)~.blz-checkbox__checkmark{border-color:var(--semantic-color-border-action-primary-default)}.blz-checkbox:active input:not(:disabled)~.blz-checkbox__checkmark:after{border:solid var(--semantic-color-background-action-primary-pressed);border-width:0 3px 3px 0}.blz-checkbox.preview input:not(:checked)~.blz-checkbox__checkmark:hover:after{border:solid var(--semantic-color-border-input-default);border-width:0 3px 3px 0;display:block;transition:border-color var(--global-motion-duration-medium) var(--global-motion-ease-out),background-color var(--global-motion-duration-medium) var(--global-motion-ease-out)}.blz-checkbox input:disabled:not(:checked)~.blz-checkbox__checkmark:hover:after{display:none}input[is=blz-radio-button]{align-self:baseline;appearance:none;background-color:var(--input-selection-color-background);border:1px solid var(--semantic-color-border-input-default);border-radius:50%;justify-content:center;margin:0 var(--input-selection-label-gap) 0 0;min-height:var(--global-size-200);min-width:var(--global-size-200)}input[is=blz-radio-button]:checked{border:3px solid var(--semantic-color-background-icon-selected)}input[is=blz-radio-button].hover,input[is=blz-radio-button]:hover{border:1px solid var(--semantic-color-border-input-hover)}label[is=blz-radio-button]{color:var(--global-color-content-700);display:flex;font:var(--semantic-body-text-md);max-width:340px}label[is=blz-radio-button].hover,label[is=blz-radio-button]:hover{color:var(--semantic-color-content-heading-hover)}@media (min-width:720px){label[is=blz-radio-button]{max-width:540px}}.blz-radio-button{align-items:center;cursor:pointer;display:flex;font:var(--semantic-body-text-md);position:relative;user-select:none}.blz-radio-button input{height:0;opacity:0;position:absolute;width:0}.blz-radio-button__label{color:var(--semantic-color-content-info);padding-left:var(--global-font-size-650);transition:color var(--global-motion-duration-medium) var(--global-motion-ease-out)}.blz-radio-button__checkmark{background-color:var(--input-text-field-color-background-default);border:1px solid var(--semantic-color-border-input-default);border-radius:100%;height:var(--global-size-250);left:0;position:absolute;transition:border-color var(--global-motion-duration-medium) var(--global-motion-ease-out);width:var(--global-size-250)}.blz-radio-button__checkmark:after{background:var(--input-selection-checkmark-color-icon-active);border:1px solid var(--input-selection-checkmark-color-icon-active);border-radius:100%;content:"";display:none;height:11px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);transition:border-color var(--global-motion-duration-medium) var(--global-motion-ease-out),background-color var(--global-motion-duration-medium) var(--global-motion-ease-out);width:11px}.blz-radio-button__checkmark:active:after{background:var(--semantic-color-background-action-primary-pressed);border:1px solid var(--semantic-color-background-action-primary-pressed)}.blz-radio-button:has(:focus-visible) .blz-radio-button__checkmark{outline:5px auto Highlight;outline:5px auto -webkit-focus-ring-color;outline:5px auto var(--semantic-color-border-input-focus)}.blz-radio-button.invalid .blz-radio-button__checkmark{border:1px solid var(--semantic-color-feedback-warning)}.blz-radio-button.valid .blz-radio-button__checkmark{border:1px solid var(--semantic-color-feedback-success)}.blz-radio-button input:disabled~.blz-radio-button__label{color:var(--semantic-color-content-inactive);cursor:not-allowed}.blz-radio-button input:checked:disabled~.blz-radio-button__checkmark,.blz-radio-button input:disabled~.blz-radio-button__checkmark{border-color:var(--semantic-color-border-input-disabled);cursor:not-allowed}.blz-radio-button.invalid input:checked~.blz-radio-button__checkmark{border-color:var(--semantic-color-feedback-warning)}.blz-radio-button.valid input:checked~.blz-radio-button__checkmark{border-color:var(--semantic-color-feedback-success)}.blz-radio-button input:checked~.blz-radio-button__checkmark:after{display:block}.blz-radio-button input:checked:disabled~.blz-radio-button__checkmark:after{background:var(--semantic-color-border-input-disabled);border:1px solid #0000}.blz-radio-button:hover input:not(:disabled)~.blz-radio-button__checkmark{border-color:var(--semantic-color-border-input-hover)}.blz-radio-button:focus input:not(:disabled)~.blz-radio-button__checkmark{border-color:var(--semantic-color-border-input-focus)}.blz-radio-button.hover input:not(:disabled)~.blz-radio-button__checkmark:after,.blz-radio-button:hover input:not(:disabled)~.blz-radio-button__checkmark:after{background:var(--input-selection-checkmark-color-icon-hover);border:1px solid var(--input-selection-checkmark-color-icon-hover)}.blz-radio-button.active input:not(:disabled)~.blz-radio-button__checkmark:after,.blz-radio-button:active input:not(:disabled)~.blz-radio-button__checkmark:after{background:var(--semantic-color-background-action-primary-pressed);border:1px solid var(--semantic-color-background-action-primary-pressed)}.blz-radio-button:focus input:not(:disabled)~.blz-radio-button__label,.blz-radio-button:hover input:not(:disabled)~.blz-radio-button__label{color:var(--semantic-color-content-info)}.blz-radio-button:active input:not(:disabled)~.blz-radio-button__checkmark{border-color:var(--semantic-color-border-action-pressed)}.blz-radio-button.preview.hover input:not(:checked)~.blz-radio-button__checkmark:after,.blz-radio-button.preview:hover input:not(:checked)~.blz-radio-button__checkmark:after{background:var(--semantic-color-border-action-primary-default);border:1px solid #0000;display:block}.blz-radio-button.preview.hover input:disabled~.blz-radio-button__checkmark:after,.blz-radio-button.preview:hover input:disabled~.blz-radio-button__checkmark:after{display:none}:host,:root{--size-025:2px;--size-050:4px;--size-075:6px;--size-100:8px;--size-125:10px;--size-150:12px;--size-200:16px;--size-250:20px;--size-300:24px;--size-325:26px;--size-350:28px;--size-400:32px;--size-500:40px;--size-600:48px;--size-700:56px;--size-800:64px;--size-900:72px;--size-1000:80px;--size-1100:88px;--size-1150:92px;--resize-025:2px;--resize-050:4px;--resize-075:6px;--resize-100:8px;--resize-150:12px;--resize-200:16px;--resize-250:16px;--resize-300:16px;--resize-400:24px;--resize-500:32px;--resize-600:32px;--resize-700:40px;--resize-800:40px;--resize-900:48px;--resize-1000:48px;--resize-250-sm:20px;--resize-300-sm:24px;--resize-400-sm:32px;--resize-500-sm:40px;--resize-600-sm:48px;--resize-700-sm:56px;--resize-800-sm:64px;--resize-900-sm:72px;--resize-1000-sm:80px;--font-default-scale:1;--font-accent-scale:1;--font-default:roboto;--font-accent:montserrat;--font-fallback:sans-serif;--font-default-weight:400;--font-accent-weight:500;--font-size-100:10px;--font-size-200:12px;--font-size-300:14px;--font-size-400:16px;--font-size-500:16px;--font-size-600:20px;--font-size-700:24px;--font-size-800:30px;--font-size-900:36px;--font-size-100-sm:12px;--font-size-200-sm:14px;--font-size-300-sm:16px;--font-size-400-sm:18px;--font-size-500-sm:20px;--font-size-600-sm:24px;--font-size-700-sm:36px;--font-size-800-sm:48px;--font-size-900-sm:60px;--line-height:1;--line-height-tight:1.1;--line-height-comfy:1.4;--line-height-relaxed:1.7;--line-height-loose:2;--color-background-25:#d5d7dd;--color-background-50:#5a5d70;--color-background-100:#3a465f;--color-background-300:#323a48;--color-background-500:#232a39;--color-background-700:#151c28;--color-background-800:#0a0d15;--color-darken-100:#0000000d;--color-darken-300:#0000001a;--color-darken-400:#00000026;--color-darken-500:#0000004d;--color-darken-600:#00000080;--color-darken-700:#000000b3;--color-darken-800:#000000e6;--color-darken-900:#000;--color-content-100:#ffffff0d;--color-content-200:#ffffff1a;--color-content-300:#ffffff1f;--color-content-400:#ffffff26;--color-content-500:#ffffff4d;--color-content-600:#ffffff80;--color-content-700:#ffffffb3;--color-content-800:#fffc;--color-content-900:#ffffffe6;--color-content-1000:#fff;--color-accent-400:#5d719833;--color-accent-500:#5d719866;--color-accent-600:#5d719899;--color-accent-700:#5d7198cc;--color-primary-300:#66c4ff;--color-primary-400:#33b1ff;--color-primary-500:#009dff;--color-primary-600:#007ecc;--color-primary-700:#005e99;--color-success-400:#66ffbf;--color-success-500:#00ff94;--color-error-400:#f87cb0;--color-error-500:#f31d77;--color-error-900:#350000;--color-warning-400:#fd9;--color-warning-500:#fb3;--color-tooltip-background:var(--color-background-800);--content-width-slim:960px;--content-width-narrow:1200px;--content-width-default:1400px;--content-width-wide:1600px;--nav-height:var(--global-size-700);--row-gap-tight:var(--global-size-150);--col-gap-tight:var(--global-size-150);--row-gap-comfy:var(--global-size-200);--col-gap-comfy:var(--global-size-200);--row-gap-loose:var(--global-size-400);--col-gap-loose:var(--global-size-400);--row-gap-spacious:var(--global-size-300);--col-gap-spacious:var(--global-size-300);--row-gap-tight-md:var(--global-size-200);--col-gap-tight-md:var(--global-size-200);--row-gap-comfy-md:var(--global-size-400);--col-gap-comfy-md:var(--global-size-400);--row-gap-loose-md:var(--global-size-600);--col-gap-loose-md:var(--global-size-600);--row-gap-spacious-md:var(--global-size-500);--col-gap-spacious-md:var(--global-size-500);--row-gap-spacious-lg:var(--global-size-1000);--col-gap-spacious-lg:var(--global-size-1000);--row-gap-spacious-sm:var(--global-size-400);--col-gap-spacious-sm:var(--global-size-400);--section-padding-vertical:var(--global-size-500);--section-padding-horizontal:var(--global-size-200);--section-padding-vertical-md:var(--global-size-1000);--section-padding-horizontal-md:var(--global-size-500);--section-padding-vertical-sm:var(--global-size-800);--section-padding-horizontal-sm:var(--global-size-300);--tooltip-horizontal-padding:var(--global-size-150);--tooltip-max-width:min(calc(100vw - var(--tooltip-horizontal-padding)*6),calc(360px - var(--tooltip-horizontal-padding)*2));--tooltip-offset:var(--global-size-150);--tooltip-vertical-transform:calc(100% + var(--tooltip-offset));--nav-height-md:var(--global-size-1100);--shadow-xs:0 1px 3px 0 #0000001f;--shadow-sm:0 4px 6px 0 #0000001f;--shadow-md:0 5px 15px 0 #0000001f;--shadow-lg:0 10px 24px 0 #0000001f;--shadow-xl:0 15px 35px 0 #0000001f;--global-motion-ease-out:cubic-bezier(0,0,0.2,1);--global-motion-ease-in-out:cubic-bezier(0.5,0,0.5,1);--global-motion-ease-in:cubic-bezier(0.8,0,1,1);--global-motion-duration-fast:100ms;--global-motion-duration-medium:200ms;--global-motion-duration-slow:300ms}html{scroll-behavior:smooth}:root{--measure-z-index-below:-1;--measure-z-index-base:0;--measure-z-index-above:1;--measure-z-index-docked:4;--measure-z-index-fixed:10;--measure-z-index-overlay:50;--measure-z-index-menu:999;--measure-z-index-modal:10000;--measure-z-index-toast:11000;--view-min:320px;--view-xs:480px;--view-sm:720px;--view-md:960px;--view-lg:1200px;--view-xl:1400px;--view-xxl:1600px;--view-max:2600px;--semantic-title-text-lg:var(--semantic-title-text-lg-mobile);--semantic-title-text-md:var(--semantic-title-text-md-mobile);--semantic-title-text-sm:var(--semantic-title-text-sm-mobile);--semantic-heading-text-xxl:var(--semantic-heading-text-xl-mobile);--semantic-heading-text-xl:var(--semantic-heading-text-xl-mobile);--semantic-heading-text-lg:var(--semantic-heading-text-lg-mobile);--semantic-heading-text-md:var(--semantic-heading-text-md-mobile);--semantic-heading-text-sm:var(--semantic-heading-text-sm-mobile);--semantic-subheading-text-lg:var(--semantic-subheading-text-lg-mobile);--semantic-subheading-text-md:var(--semantic-subheading-text-md-mobile);--semantic-body-text-xxl:var(--semantic-body-text-xxl-mobile);--semantic-body-text-xl:var(--semantic-body-text-xl-mobile);--semantic-body-text-lg:var(--semantic-body-text-lg-mobile);--semantic-body-text-md:var(--semantic-body-text-md-mobile);--semantic-body-text-sm:var(--semantic-body-text-sm-mobile);--semantic-body-text-xs:var(--semantic-body-text-xs-mobile);--announcement-banner-font-heading:var(\n    --announcement-banner-font-heading-mobile\n  );--announcement-banner-font-subtext:var(\n    --announcement-banner-font-subtext-mobile\n  );--badge-font-text:var(--badge-font-text-mobile);--button-font-label-lg:var(--button-font-label-lg-mobile);--button-font-label-md:var(--button-font-label-md-mobile);--button-font-label-sm:var(--button-font-label-sm-mobile);--content-block-font-subheading-lg:var(\n    --content-block-font-subheading-lg-mobile\n  );--content-block-font-subheading-md:var(\n    --content-block-font-subheading-md-mobile\n  );--content-block-font-heading-lg:var(--content-block-font-heading-lg-mobile);--content-block-font-heading-md:var(--content-block-font-heading-md-mobile);--content-block-font-heading-sm:var(--content-block-font-heading-sm-mobile);--content-block-font-heading-xs:var(--content-block-font-heading-xs-mobile);--content-block-font-callout-lg:var(--content-block-font-callout-lg-mobile);--content-block-font-callout-md:var(--content-block-font-callout-md-mobile);--content-block-font-callout-sm:var(--content-block-font-callout-sm-mobile);--content-block-font-callout-xs:var(--content-block-font-callout-xs-mobile);--content-block-font-description-lg:var(\n    --content-block-font-description-lg-mobile\n  );--content-block-font-description-md:var(\n    --content-block-font-description-md-mobile\n  );--content-block-font-description-sm:var(\n    --content-block-font-description-sm-mobile\n  );--content-block-font-description-xs:var(\n    --content-block-font-description-xs-mobile\n  );--header-heading-font-xl:var(--header-heading-font-xl-mobile);--header-heading-font-lg:var(--header-heading-font-lg-mobile);--header-heading-font-md:var(--header-heading-font-md-mobile);--header-heading-font-sm:var(--header-heading-font-sm-mobile);--header-heading-font-xs:var(--header-heading-font-xs-mobile);--header-heading-font-xxs:var(--header-heading-font-xxs-mobile);--input-font-md:var(--input-font-md-mobile);--input-font-sm:var(--input-font-sm-mobile);--tooltip-font-text:var(--tooltip-font-text-mobile);--price-font-label-xl:var(--price-font-label-xl-mobile);--price-font-label-lg:var(--price-font-label-lg-mobile);--price-font-label-md:var(--price-font-label-md-mobile);--price-font-label-sm:var(--price-font-label-sm-mobile);--price-font-label-discount-xl:var(--price-font-label-discount-xl-mobile);--price-font-label-discount-lg:var(--price-font-label-discount-lg-mobile);--price-font-label-discount-md:var(--price-font-label-discount-md-mobile);--price-font-label-discount-sm:var(--price-font-label-discount-sm-mobile);--tab-standard-font-label:var(--tab-standard-font-label-mobile);--announcement-banner-space-padding:var(\n      --announcement-banner-space-padding-mobile-vertical\n    ) var(--announcement-banner-space-padding-mobile-horizontal);--announcement-banner-sticky-space-padding:var(\n      --announcement-banner-sticky-space-padding-mobile-vertical\n    ) var(--announcement-banner-sticky-space-padding-mobile-horizontal);--announcement-banner-content-gap-horizontal:var(\n    --announcement-banner-content-gap-horizontal-mobile\n  );--announcement-banner-content-gap-vertical:var(\n    --announcement-banner-content-gap-vertical-mobile\n  );--button-space-padding-xl:var(--button-space-padding-xl-mobile-vertical) var(--button-space-padding-xl-mobile-horizontal);--button-space-padding-lg:var(--button-space-padding-lg-mobile-vertical) var(--button-space-padding-lg-mobile-horizontal);--button-space-padding-md:var(--button-space-padding-md-mobile-vertical) var(--button-space-padding-md-mobile-horizontal);--button-space-padding-sm:var(--button-space-padding-sm-vertical) var(--button-space-padding-sm-horizontal);--base-card-space-padding-lg:var(\n      --base-card-space-padding-lg-mobile-vertical\n    ) var(--base-card-space-padding-lg-mobile-horizontal);--base-card-space-padding-md:var(\n      --base-card-space-padding-md-mobile-vertical\n    ) var(--base-card-space-padding-md-mobile-horizontal);--base-card-space-padding-sm:var(\n      --base-card-space-padding-sm-mobile-vertical\n    ) var(--base-card-space-padding-sm-mobile-horizontal);--badge-space-padding-sm:var(--badge-space-padding-sm-top) var(--badge-space-padding-sm-horizontal) var(--badge-space-padding-sm-bottom) var(--badge-space-padding-sm-horizontal);--badge-space-padding-md:var(--badge-space-md-mobile-top) var(--badge-space-md-mobile-horizontal) var(--badge-space-md-mobile-bottom) var(--badge-space-md-mobile-horizontal);--content-block-space-optional-slot-bottom:var(\n    --content-block-space-optional-slot-bottom-mobile\n  );--content-block-space-optional-slot-top:var(\n    --content-block-space-optional-slot-top-mobile\n  );--base-card-space-media-top-left:var(--base-card-space-media-top-left-top) var(--base-card-space-media-top-left-right) var(--base-card-space-media-top-left-bottom) var(--base-card-space-media-top-left-left);--base-card-space-media-top-right:var(--base-card-space-media-top-right-top) var(--base-card-space-media-top-right-right) var(--base-card-space-media-top-right-bottom) var(--base-card-space-media-top-right-left);--base-card-space-media-bottom-left:var(\n      --base-card-space-media-bottom-left-top\n    ) var(--base-card-space-media-bottom-left-right) var(--base-card-space-media-bottom-left-bottom) var(--base-card-space-media-bottom-left-left);--base-card-space-media-bottom-right:var(\n      --base-card-space-media-bottom-right-top\n    ) var(--base-card-space-media-bottom-right-right) var(--base-card-space-media-bottom-right-bottom) var(--base-card-space-media-bottom-right-left);--input-text-field-space-padding-sm:var(\n      --input-text-field-space-padding-sm-top\n    ) var(--input-text-field-space-padding-sm-right) var(--input-text-field-space-padding-sm-bottom) var(--input-text-field-space-padding-sm-left);--input-text-field-space-padding-md:var(\n      --input-text-field-space-padding-md-top\n    ) var(--input-text-field-space-padding-md-right) var(--input-text-field-space-padding-md-bottom) var(--input-text-field-space-padding-md-left);--input-select-space-padding-sm:var(--input-select-space-padding-sm-top) var(--input-select-space-padding-sm-right) var(--input-select-space-padding-sm-bottom) var(--input-select-space-padding-sm-left);--input-select-space-padding-md:var(--input-select-space-padding-md-top) var(--input-select-space-padding-md-right) var(--input-select-space-padding-md-bottom) var(--input-select-space-padding-md-left);--section-padding:var(--semantic-section-space-vertical-md-mobile) var(--semantic-section-space-horizontal-mobile);--banner-space-padding:var(--banner-space-padding-vertical-mobile) var(--banner-space-padding-horizontal-mobile);--banner-fixed-height-space-bottom-aligned-padding:var(\n      --banner-fixed-height-space-bottom-aligned-padding-vertical-mobile\n    ) var(--banner-fixed-height-space-bottom-aligned-padding-horizontal-mobile);--button-height-md:var(--button-height-md-mobile);--button-height-sm:var(--button-height-sm-mobile);--countdown-timer-height-sm:var(--countdown-timer-height-sm-mobile);--semantic-size-icon-height-xs:var(--semantic-size-icon-height-xs-mobile);--semantic-size-icon-height-sm:var(--semantic-size-icon-height-sm-mobile);--semantic-size-icon-height-md:var(--semantic-size-icon-height-md-mobile);--semantic-size-icon-height-lg:var(--semantic-size-icon-height-lg-mobile);--semantic-size-icon-height-xl:var(--semantic-size-icon-height-xl-mobile)}@media (min-width:720px){:root{--font-size-100:var(--font-size-100-sm);--font-size-200:var(--font-size-200-sm);--font-size-300:var(--font-size-300-sm);--font-size-400:var(--font-size-400-sm);--font-size-500:var(--font-size-500-sm);--font-size-600:var(--font-size-600-sm);--font-size-700:var(--font-size-700-sm);--font-size-800:var(--font-size-800-sm);--font-size-900:var(--font-size-900-sm);--resize-250:var(--resize-250-sm);--resize-300:var(--resize-300-sm);--resize-400:var(--resize-400-sm);--resize-500:var(--resize-500-sm);--resize-600:var(--resize-600-sm);--resize-700:var(--resize-700-sm);--resize-800:var(--resize-800-sm);--resize-900:var(--resize-900-sm);--resize-1000:var(--resize-1000-sm);--row-gap-spacious:var(--row-gap-spacious-sm);--col-gap-spacious:var(--col-gap-spacious-sm);--section-padding-vertical:var(--section-padding-vertical-sm);--section-padding-horizontal:var(--section-padding-horizontal-sm);--announcement-banner-space-padding:var(\n        --announcement-banner-space-padding-desktop-vertical\n      ) var(--announcement-banner-space-padding-desktop-horizontal);--announcement-banner-sticky-space-padding:var(\n        --announcement-banner-sticky-space-padding-desktop-vertical\n      ) var(--announcement-banner-sticky-space-padding-desktop-horizontal);--announcement-banner-content-gap-horizontal:var(\n      --announcement-banner-content-gap-horizontal-desktop\n    );--announcement-banner-content-gap-vertical:var(\n      --announcement-banner-content-gap-vertical-desktop\n    );--button-space-padding-xl:var(--button-space-padding-xl-desktop-vertical) var(--button-space-padding-xl-desktop-horizontal);--button-space-padding-lg:var(--button-space-padding-lg-desktop-vertical) var(--button-space-padding-lg-desktop-horizontal);--button-space-padding-md:var(--button-space-padding-md-desktop-vertical) var(--button-space-padding-md-desktop-horizontal);--base-card-space-padding-lg:var(\n        --base-card-space-padding-lg-desktop-vertical\n      ) var(--base-card-space-padding-lg-desktop-horizontal);--base-card-space-padding-md:var(\n        --base-card-space-padding-md-desktop-vertical\n      ) var(--base-card-space-padding-md-desktop-horizontal);--base-card-space-padding-sm:var(\n        --base-card-space-padding-sm-desktop-vertical\n      ) var(--base-card-space-padding-sm-desktop-horizontal);--badge-space-padding-md:var(--badge-space-md-desktop-top) var(--badge-space-md-desktop-horizontal) var(--badge-space-md-desktop-bottom) var(--badge-space-md-desktop-horizontal);--content-block-space-optional-slot-bottom:var(\n      --content-block-space-optional-slot-bottom-desktop\n    );--content-block-space-optional-slot-top:var(\n      --content-block-space-optional-slot-top-desktop\n    );--section-padding:var(--semantic-section-space-vertical-md-desktop) var(--semantic-section-space-horizontal-desktop);--banner-space-padding:var(--banner-space-padding-vertical-desktop) var(--banner-space-padding-horizontal-desktop);--banner-fixed-height-space-bottom-aligned-padding:var(\n        --banner-fixed-height-space-bottom-aligned-padding-vertical-desktop\n      ) var(--banner-fixed-height-space-bottom-aligned-padding-horizontal-desktop);--button-height-md:var(--button-height-md-desktop);--button-height-sm:var(--button-height-sm-desktop);--countdown-timer-height-sm:var(--countdown-timer-height-sm-desktop);--semantic-title-text-lg:var(--semantic-title-text-lg-desktop);--semantic-title-text-md:var(--semantic-title-text-md-desktop);--semantic-title-text-sm:var(--semantic-title-text-sm-desktop);--semantic-heading-text-xxl:var(--semantic-heading-text-xxl-desktop);--semantic-heading-text-xl:var(--semantic-heading-text-xl-desktop);--semantic-heading-text-lg:var(--semantic-heading-text-lg-desktop);--semantic-heading-text-md:var(--semantic-heading-text-md-desktop);--semantic-heading-text-sm:var(--semantic-heading-text-sm-desktop);--semantic-subheading-text-lg:var(--semantic-subheading-text-lg-desktop);--semantic-subheading-text-md:var(--semantic-subheading-text-md-desktop);--semantic-body-text-xxl:var(--semantic-body-text-xxl-desktop);--semantic-body-text-xl:var(--semantic-body-text-xl-desktop);--semantic-body-text-lg:var(--semantic-body-text-lg-desktop);--semantic-body-text-md:var(--semantic-body-text-md-desktop);--semantic-body-text-sm:var(--semantic-body-text-sm-desktop);--semantic-body-text-xs:var(--semantic-body-text-xs-desktop);--announcement-banner-font-heading:var(\n      --announcement-banner-font-heading-desktop\n    );--announcement-banner-font-subtext:var(\n      --announcement-banner-font-subtext-desktop\n    );--badge-font-text:var(--badge-font-text-desktop);--button-font-label-lg:var(--button-font-label-lg-desktop);--button-font-label-md:var(--button-font-label-md-desktop);--button-font-label-sm:var(--button-font-label-sm-desktop);--content-block-font-subheading-lg:var(\n      --content-block-font-subheading-lg-desktop\n    );--content-block-font-subheading-md:var(\n      --content-block-font-subheading-md-desktop\n    );--content-block-font-heading-lg:var(\n      --content-block-font-heading-lg-desktop\n    );--content-block-font-heading-md:var(\n      --content-block-font-heading-md-desktop\n    );--content-block-font-heading-sm:var(\n      --content-block-font-heading-sm-desktop\n    );--content-block-font-heading-xs:var(\n      --content-block-font-heading-xs-desktop\n    );--content-block-font-callout-lg:var(\n      --content-block-font-callout-lg-desktop\n    );--content-block-font-callout-md:var(\n      --content-block-font-callout-md-desktop\n    );--content-block-font-callout-sm:var(\n      --content-block-font-callout-sm-desktop\n    );--content-block-font-callout-xs:var(\n      --content-block-font-callout-xs-desktop\n    );--content-block-font-description-lg:var(\n      --content-block-font-description-lg-desktop\n    );--content-block-font-description-md:var(\n      --content-block-font-description-md-desktop\n    );--content-block-font-description-sm:var(\n      --content-block-font-description-sm-desktop\n    );--content-block-font-description-xs:var(\n      --content-block-font-description-xs-desktop\n    );--header-heading-font-xl:var(--header-heading-font-xl-desktop);--header-heading-font-lg:var(--header-heading-font-lg-desktop);--header-heading-font-md:var(--header-heading-font-md-desktop);--header-heading-font-sm:var(--header-heading-font-sm-desktop);--header-heading-font-xs:var(--header-heading-font-xs-desktop);--header-heading-font-xxs:var(--header-heading-font-xxs-desktop);--input-font-md:var(--input-font-md-desktop);--input-font-sm:var(--input-font-sm-desktop);--tooltip-font-text:var(--tooltip-font-text-desktop);--price-font-label-xl:var(--price-font-label-xl-desktop);--price-font-label-lg:var(--price-font-label-lg-desktop);--price-font-label-md:var(--price-font-label-md-desktop);--price-font-label-sm:var(--price-font-label-sm-desktop);--price-font-label-discount-xl:var(--price-font-label-discount-xl-desktop);--price-font-label-discount-lg:var(--price-font-label-discount-lg-desktop);--price-font-label-discount-md:var(--price-font-label-discount-md-desktop);--price-font-label-discount-sm:var(--price-font-label-discount-sm-desktop);--tab-standard-font-label:var(--tab-standard-font-label-desktop);--semantic-size-icon-height-xs:var(--semantic-size-icon-height-xs-desktop);--semantic-size-icon-height-sm:var(--semantic-size-icon-height-sm-desktop);--semantic-size-icon-height-md:var(--semantic-size-icon-height-md-desktop);--semantic-size-icon-height-lg:var(--semantic-size-icon-height-lg-desktop);--semantic-size-icon-height-xl:var(--semantic-size-icon-height-xl-desktop)}}@media (min-width:960px){:root{--row-gap-tight:var(--row-gap-tight-md);--col-gap-tight:var(--col-gap-tight-md);--row-gap-comfy:var(--row-gap-comfy-md);--col-gap-comfy:var(--col-gap-comfy-md);--row-gap-loose:var(--row-gap-loose-md);--col-gap-loose:var(--col-gap-loose-md);--row-gap-spacious:var(--row-gap-spacious-md);--col-gap-spacious:var(--col-gap-spacious-md);--section-padding-vertical:var(--section-padding-vertical-md);--section-padding-horizontal:var(--section-padding-horizontal-md);--nav-height:var(--nav-height-md)}}@media (min-width:1200px){:root{--row-gap-spacious:var(--row-gap-spacious-lg);--col-gap-spacious:var(--col-gap-spacious-lg)}}');
        class Hu {
            constructor(e) {
                this.model = new Map(Object.entries(e).map(( ([e,t]) => [e, new Map(Object.entries(t))]))),
                this.baseScore = -.5 * [...this.model.values()].map((e => [...e.values()])).flat().reduce(( (e, t) => e + t), 0)
            }
            parse(e) {
                if ("" === e)
                    return [];
                const t = this.parseBoundaries(e)
                  , o = [];
                let n = 0;
                for (const i of t)
                    o.push(e.slice(n, i)),
                    n = i;
                return o.push(e.slice(n)),
                o
            }
            parseBoundaries(e) {
                var t, o, n, i, a, r, s, l, c, d, u, p, h;
                const b = [];
                for (let g = 1; g < e.length; g++) {
                    let m = this.baseScore;
                    m += (null === (t = this.model.get("UW1")) || void 0 === t ? void 0 : t.get(e.substring(g - 3, g - 2))) || 0,
                    m += (null === (o = this.model.get("UW2")) || void 0 === o ? void 0 : o.get(e.substring(g - 2, g - 1))) || 0,
                    m += (null === (n = this.model.get("UW3")) || void 0 === n ? void 0 : n.get(e.substring(g - 1, g))) || 0,
                    m += (null === (i = this.model.get("UW4")) || void 0 === i ? void 0 : i.get(e.substring(g, g + 1))) || 0,
                    m += (null === (a = this.model.get("UW5")) || void 0 === a ? void 0 : a.get(e.substring(g + 1, g + 2))) || 0,
                    m += (null === (r = this.model.get("UW6")) || void 0 === r ? void 0 : r.get(e.substring(g + 2, g + 3))) || 0,
                    m += (null === (s = this.model.get("BW1")) || void 0 === s ? void 0 : s.get(e.substring(g - 2, g))) || 0,
                    m += (null === (l = this.model.get("BW2")) || void 0 === l ? void 0 : l.get(e.substring(g - 1, g + 1))) || 0,
                    m += (null === (c = this.model.get("BW3")) || void 0 === c ? void 0 : c.get(e.substring(g, g + 2))) || 0,
                    m += (null === (d = this.model.get("TW1")) || void 0 === d ? void 0 : d.get(e.substring(g - 3, g))) || 0,
                    m += (null === (u = this.model.get("TW2")) || void 0 === u ? void 0 : u.get(e.substring(g - 2, g + 1))) || 0,
                    m += (null === (p = this.model.get("TW3")) || void 0 === p ? void 0 : p.get(e.substring(g - 1, g + 2))) || 0,
                    m += (null === (h = this.model.get("TW4")) || void 0 === h ? void 0 : h.get(e.substring(g, g + 3))) || 0,
                    m > 0 && b.push(g)
                }
                return b
            }
        }
        const Vu = console.assert
          , qu = String.fromCharCode(8203)
          , Gu = 1
          , Wu = 3
          , Yu = 0
          , Ku = 1
          , Xu = 2
          , Zu = 3
          , Ju = 4
          , Qu = 5
          , ep = {
            AREA: Xu,
            BASE: Xu,
            BASEFONT: Xu,
            DATALIST: Xu,
            HEAD: Xu,
            LINK: Xu,
            META: Xu,
            NOEMBED: Xu,
            NOFRAMES: Xu,
            PARAM: Xu,
            RP: Xu,
            SCRIPT: Xu,
            STYLE: Xu,
            TEMPLATE: Xu,
            TITLE: Xu,
            NOSCRIPT: Xu,
            HR: Zu,
            LISTING: Xu,
            PLAINTEXT: Xu,
            PRE: Xu,
            XMP: Xu,
            BR: Zu,
            RT: Xu,
            WBR: Qu,
            INPUT: Xu,
            SELECT: Xu,
            BUTTON: Xu,
            TEXTAREA: Xu,
            ABBR: Xu,
            CODE: Xu,
            IFRAME: Xu,
            TIME: Xu,
            VAR: Xu,
            NOBR: Ju
        }
          , tp = new Set(["HTML", "BODY", "ADDRESS", "BLOCKQUOTE", "CENTER", "DIALOG", "DIV", "FIGURE", "FIGCAPTION", "FOOTER", "FORM", "HEADER", "LEGEND", "LISTING", "MAIN", "P", "ARTICLE", "ASIDE", "H1", "H2", "H3", "H4", "H5", "H6", "HGROUP", "NAV", "SECTION", "DIR", "DD", "DL", "DT", "MENU", "OL", "UL", "LI", "TABLE", "CAPTION", "COL", "TR", "TD", "TH", "FIELDSET", "DETAILS", "SUMMARY", "MARQUEE"])
          , op = 3;
        function np(e) {
            const t = e.nodeName
              , o = ep[t];
            if (void 0 !== o)
                return o;
            if ("function" == typeof Uu.getComputedStyle) {
                const t = Uu.getComputedStyle(e);
                switch (t.whiteSpace) {
                case "nowrap":
                case "pre":
                    return Ju
                }
                const o = t.display;
                if (o)
                    return function(e) {
                        return "inline" === e ? Yu : "block" === e ? Ku : e.startsWith("ruby") ? "ruby-text" === e ? Xu : Yu : Ku
                    }(o)
            }
            return tp.has(t) ? Ku : Yu
        }
        class ip {
            constructor(e) {
                this.chunks = [],
                this.hasBreakOpportunityAfter = !1,
                this.nodeOrText = e
            }
            get isString() {
                return "string" == typeof this.nodeOrText
            }
            get canSplit() {
                return !this.isString
            }
            get text() {
                return this.isString ? this.nodeOrText : this.nodeOrText.nodeValue
            }
            get length() {
                var e, t;
                return null !== (t = null === (e = this.text) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0
            }
            split(e) {
                const t = this.chunks;
                if (Vu(0 === t.length || t.join("") === this.text),
                t.length <= 1)
                    return;
                Vu(this.canSplit);
                const o = this.nodeOrText;
                if ("string" == typeof e)
                    return void (o.nodeValue = t.join(e));
                const n = o.ownerDocument;
                let i = [];
                for (const e of t)
                    e && i.push(n.createTextNode(e)),
                    i.push(null);
                i.pop(),
                i = i.map((t => t || e.cloneNode(!0))),
                o.replaceWith(...i)
            }
        }
        class ap {
            constructor(e) {
                this.nodes = [],
                this.element = e
            }
            isEmpty() {
                return 0 === this.nodes.length
            }
            get text() {
                return this.nodes.map((e => e.text)).join("")
            }
            get lastNode() {
                return this.nodes.length ? this.nodes[this.nodes.length - 1] : void 0
            }
            setHasBreakOpportunityAfter() {
                const e = this.lastNode;
                e && (e.hasBreakOpportunityAfter = !0)
            }
            getForcedOpportunities() {
                const e = [];
                let t = 0;
                for (const o of this.nodes) {
                    if (o.canSplit) {
                        const n = o.text;
                        if (n)
                            for (let o = 0; o < n.length; ++o)
                                8203 === n.charCodeAt(o) && e.push(t + o + 1)
                    }
                    t += o.length,
                    o.hasBreakOpportunityAfter && e.push(t)
                }
                return e
            }
            excludeForcedOpportunities(e) {
                const t = this.getForcedOpportunities();
                if (!t.length)
                    return e;
                const o = new Set(t);
                return e.filter((e => !o.has(e)))
            }
        }
        class rp {
            constructor(e, t) {
                this.separator = qu,
                this.parser_ = e,
                void 0 !== t && (void 0 !== t.className && (this.className = t.className),
                void 0 !== t.separator && (this.separator = t.separator))
            }
            static hasChildTextNode(e) {
                for (const t of e.childNodes)
                    if (t.nodeType === op)
                        return !0;
                return !1
            }
            applyToElement(e) {
                for (const t of this.getBlocks(e))
                    Vu(!t.isEmpty()),
                    this.applyToParagraph(t)
            }
            *getBlocks(e, t) {
                if (Vu(e.nodeType === Gu),
                this.className && e.classList.contains(this.className))
                    return;
                const o = np(e);
                if (o === Xu)
                    return;
                if (o === Zu)
                    return t && !t.isEmpty() && (t.setHasBreakOpportunityAfter(),
                    yield t,
                    t.nodes = []),
                    void Vu(!e.firstChild);
                if (o === Qu)
                    return void (t && t.setHasBreakOpportunityAfter());
                Vu(o === Ku || o === Yu || o === Ju);
                const n = !t || o === Ku
                  , i = n ? new ap(e) : t;
                for (const t of e.childNodes)
                    switch (t.nodeType) {
                    case Gu:
                        for (const e of this.getBlocks(t, i))
                            yield e;
                        break;
                    case Wu:
                        if (o === Ju) {
                            const e = t.nodeValue;
                            e && i.nodes.push(new ip(e));
                            break
                        }
                        i.nodes.push(new ip(t))
                    }
                n && !i.isEmpty() && (yield i)
            }
            applyToParagraph(e) {
                if (Vu(e.nodes.length > 0),
                !e.nodes.some((e => e.canSplit)))
                    return;
                const t = e.text;
                if (/^\s*$/.test(t))
                    return;
                const o = this.parser_.parseBoundaries(t);
                if (o.length <= 0)
                    return;
                Vu(o[0] > 0),
                Vu(o.every(( (e, t) => 0 === t || e > o[t - 1]))),
                Vu(o[o.length - 1] < t.length);
                const n = e.excludeForcedOpportunities(o);
                n.push(t.length + 1),
                this.splitNodes(e.nodes, n),
                this.applyBlockStyle(e.element)
            }
            splitNodes(e, t) {
                var o;
                Vu(t.length > 0),
                Vu(t.every(( (e, o) => 0 === o || e > t[o - 1])));
                const n = e.reduce(( (e, t) => e + t.length), 0);
                Vu(t[t.length - 1] > n);
                let i = 0
                  , a = t[0];
                Vu(a > 0);
                let r = 0
                  , s = null;
                for (const n of e) {
                    Vu(a >= r),
                    Vu(0 === n.chunks.length);
                    const e = n.text;
                    if (!e)
                        continue;
                    const l = e.length
                      , c = r + l;
                    if (Vu(!s || s.canSplit),
                    !n.canSplit) {
                        for (s && a === r && (0 === s.chunks.length && s.chunks.push(null !== (o = s.text) && void 0 !== o ? o : ""),
                        s.chunks.push("")); a < c; )
                            a = t[++i];
                        s = null,
                        r = c;
                        continue
                    }
                    if (s = n,
                    a >= c) {
                        r = c;
                        continue
                    }
                    const d = n.chunks;
                    let u = 0;
                    for (; a < c; ) {
                        const o = a - r;
                        Vu(o >= u),
                        d.push(e.slice(u, o)),
                        u = o,
                        a = t[++i]
                    }
                    Vu(u < l),
                    d.push(e.slice(u)),
                    r = c
                }
                Vu(r === n),
                Vu(i < t.length),
                Vu(t[i] >= n);
                for (const t of e)
                    t.split(this.separator)
            }
            applyBlockStyle(e) {
                this.className ? e.classList.add(this.className) : (e => {
                    e.style.wordBreak = "keep-all",
                    e.style.overflowWrap = "anywhere"
                }
                )(e)
            }
        }
        class sp extends Hu {
            constructor(e, t={
                separator: qu
            }) {
                super(e),
                this.htmlProcessor = new rp(this,t)
            }
            applyElement(e) {
                console.warn("`applyElement` is deprecated. Please use `applyToElement` instead. `applyElement` will be removed in v0.7.0."),
                this.applyToElement(e)
            }
            applyToElement(e) {
                this.htmlProcessor.applyToElement(e)
            }
            translateHTMLString(e) {
                if ("" === e)
                    return e;
                const t = (e => (new Uu.DOMParser).parseFromString(e, "text/html"))(e);
                if (rp.hasChildTextNode(t.body)) {
                    const e = t.createElement("span");
                    e.append(...t.body.childNodes),
                    t.body.append(e)
                }
                return this.applyToElement(t.body.childNodes[0]),
                t.body.innerHTML
            }
        }
        let lp;
        const cp = e => {
            if (!lp)
                throw new Error("Budoux parser not setup yet.");
            if (!e)
                throw new Error('parseElements "selectors" param must be defined.');
            const t = document.querySelectorAll(e);
            t?.length && t.forEach((e => lp.applyToElement(e)))
        }
        ;
        var dp = ({selectors: e='h1, h2, h3, h4, h5, h6, p, span, [slot="description"], [slot="heading"], [slot^="content"]', supportedLanguages: t=["ja", "ja-jp", "zh-cn", "zh-tw"]}={}) => {
            if (document.documentElement.hasAttribute("lang")) {
                const o = document.documentElement.lang.trim().toLowerCase().replace("_", "-");
                if (!t.includes(o))
                    return;
                switch (o) {
                case "ja":
                case "ja-jp":
                    lp = new sp(Nu);
                    break;
                case "zh-cn":
                    lp = new sp(Mu);
                    break;
                case "zh-tw":
                    lp = new sp(Fu)
                }
                lp && (document.addEventListener("readystatechange", (t => {
                    "interactive" === t.target.readyState && cp(e)
                }
                )),
                "complete" !== document.readyState && "interactive" !== document.readyState || cp(e))
            }
        }
        ;
        dp()
    }
    )(),
    window.addEventListener("DOMContentLoaded", (e => {
        document.querySelectorAll("blz-section blz-button, blz-masthead blz-button, blz-news blz-button").forEach((e => {
            e.addEventListener("click", (t => {
                const o = {
                    event: e.getAttribute("event"),
                    cta_category: e.getAttribute("cta_category"),
                    cta_action: e.getAttribute("cta_action"),
                    cta_name: e.getAttribute("cta_name"),
                    cta_placement: e.getAttribute("cta_placement"),
                    destination_url: e.getAttribute("href")
                };
                window.dataLayer.push(o)
            }
            ))
        }
        )),
        document.querySelectorAll("blz-section.two-panel trb-card").forEach((e => {
            e.addEventListener("click", (t => {
                const o = {
                    event: e.getAttribute("event"),
                    cta_category: e.getAttribute("cta_category"),
                    cta_action: e.getAttribute("cta_action"),
                    cta_name: e.getAttribute("cta_name"),
                    cta_placement: e.getAttribute("cta_placement"),
                    destination_url: e.getAttribute("href")
                };
                window.dataLayer.push(o)
            }
            ))
        }
        ))
    }
    )),
    ( () => {
        "use strict";
        let e = null;
        if (window.__WOW_UI_QUERY_SELECTOR_ALWAYS)
            e = window.__WOW_UI_QUERY_SELECTOR_ALWAYS;
        else {
            function a(e, t) {
                if (!t)
                    throw new Error("querySelectorAlways expects a callback");
                a.init(),
                a.addSelector(e, t)
            }
            a.attribute = "queryselectoralways",
            a.init = function() {
                a.style || (a.style = document.createElement("style"),
                a.style.id = "querySelectorAlways",
                a.style.appendChild(document.createTextNode("")),
                document.head.appendChild(a.style),
                ["animationstart", "MSAnimationStart", "webkitAnimationStart"].map((function(e) {
                    document.addEventListener(e, a.onanimationstart, !1)
                }
                )),
                document.addEventListener("DOMContentLoaded", a.update))
            }
            ,
            a.selectors = {},
            a.callbacks = [],
            a.addSelector = function(e, t) {
                e = e.trim();
                let o = a.selectors[e];
                return o ? a.callbacks[o].push(t) : (o = a.callbacks.length,
                a.selectors[e] = o,
                a.callbacks[o] = [t],
                a.install(o, e)),
                o
            }
            ,
            a.update = function() {
                let e, t;
                for (e in a.selectors) {
                    t = a.selectors[e];
                    const o = document.querySelectorAll(e);
                    Array.prototype.map.call(o, (function(e) {
                        a.addNode(t, e)
                    }
                    ))
                }
            }
            ,
            a.install = function(e, t) {
                const o = "querySelectorAlways" + e
                  , n = ":not([" + a.attribute + '~="' + e + '"])';
                function i(e) {
                    a.style.textContent += "\n" + e
                }
                i((t = t.replace(/(,|$)/g, (function(e) {
                    return n + e
                }
                ))) + " { visibility:hidden!important; animation: 0.01ms " + o + "!important; -webkit-animation: 0.01ms " + o + "!important; }"),
                i("@keyframes " + o + " { from { opacity: 0.999; } to { opacity: 1; } }"),
                i("@-webkit-keyframes " + o + " { from { opacity: 0.999; } to { opacity: 1; } }\n")
            }
            ,
            a.regexEvent = /querySelectorAlways(\d+)/,
            a.onanimationstart = function(e) {
                const t = e.animationName.match(a.regexEvent);
                if (t) {
                    const o = parseInt(t[1])
                      , n = e.target;
                    a.addNode.call(this, o, n)
                }
            }
            ,
            a.addNode = function(e, t) {
                const o = t.getAttribute(a.attribute)
                  , n = o ? o.split(" ") : [];
                if (n.indexOf(String(e)) < 0) {
                    n.push(e),
                    t.setAttribute(a.attribute, n.join(" "));
                    const o = a.callbacks[e];
                    if (o) {
                        if (a.shouldIgnoreNode(t))
                            return;
                        o.map((function(e) {
                            e(t)
                        }
                        ))
                    }
                }
            }
            ,
            a.shouldIgnoreNode = function(e) {
                const t = e.getAttribute("queryselectoralways-ignore");
                return !(null == t || !JSON.parse(t))
            }
            ,
            window.__WOW_UI_QUERY_SELECTOR_ALWAYS = a,
            e = a,
            window.__WOW_UI_QUERY_SELECTOR_ALWAYS = e
        }
        const t = e
          , o = /^\/\w{2}-\w{2}/
          , n = "https://blz-contentstack-images.akamaized.net/v3/assets/blt72f16e066f85e164/blt61f43b9d971d2eee/64a735483563c9d147e78eb5/Avatar-anon.png";
        class i {
            constructor({elem: e}) {
                this.elem = e,
                this.charactersHaveBeenAdded = !1,
                this.init()
            }
            static init() {
                t(".SiteNav", i.create)
            }
            static create(e) {
                return new i({
                    elem: e
                })
            }
            addCharacters(e, t) {
                if (e && !this.charactersHaveBeenAdded && t) {
                    this.charactersHaveBeenAdded = !0,
                    Array.isArray(t.characters) && t.characters.length > 0 ? this.elem.classList.add("has-characters") : this.elem.classList.add("no-characters");
                    const e = location.pathname.match(o)[0]
                      , i = document.createDocumentFragment();
                    t.characters.forEach((t => {
                        var o, a;
                        const r = document.createElement("blz-nav-link");
                        r.setAttribute("href", `${e}${t.url}`),
                        r.setAttribute("slot", "account-primary-bottom"),
                        r.setAttribute("text", t.name),
                        r.setAttribute("subtext", t.navSubtext),
                        r.classList.add("jumbo", "icon-rounded");
                        const s = document.createElement("img");
                        s.setAttribute("slot", "icon"),
                        s.setAttribute("src", null !== (o = null === (a = t.avatar) || void 0 === a ? void 0 : a.url) && void 0 !== o ? o : n),
                        s.setAttribute("onerror", `this.onerror=null; this.src='${n}'`),
                        r.appendChild(s),
                        i.appendChild(r)
                    }
                    )),
                    this.elem.appendChild(i);
                    const a = document.getElementById("blz-nav-wow-account-all-characters");
                    a && (this.elem.removeChild(a),
                    this.elem.appendChild(a))
                }
            }
            init() {
                this.elem.hasAttribute("authenticated") ? this.addCharacters(!0, this.elem.user) : this.elem.addEventListener("blz-nav:authenticated", (e => {
                    const {user: t, authenticated: o} = e.detail;
                    this.addCharacters(o, t)
                }
                ))
            }
        }
        t(".SiteNav", i.create)
    }
    )()
}
)();
