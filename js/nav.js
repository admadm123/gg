{
    let BaseNavUI = function(e) {
        "use strict";

        function t(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
            return o
        }

        function n(e, t, n, l) {
            var d = o();
            if (l)
                for (var c = 0; c < l.length; c++) d = l[c](d);
            var u = t((function(e) {
                    d.initializeInstanceElements(e, h.elements)
                }), n),
                h = d.decorateClass(function(e) {
                    for (var t = [], n = function(e) {
                            return "method" === e.kind && e.key === l.key && e.placement === l.placement
                        }, o = 0; o < e.length; o++) {
                        var i, l = e[o];
                        if ("method" === l.kind && (i = t.find(n)))
                            if (s(l.descriptor) || s(i.descriptor)) {
                                if (a(l) || a(i)) throw new ReferenceError("Duplicated methods (" + l.key + ") can't be decorated.");
                                i.descriptor = l.descriptor
                            } else {
                                if (a(l)) {
                                    if (a(i)) throw new ReferenceError("Decorators can't be placed on different accessors with for the same property (" + l.key + ").");
                                    i.decorators = l.decorators
                                }
                                r(l, i)
                            }
                        else t.push(l)
                    }
                    return t
                }(u.d.map(i)), e);
            return d.initializeClassElements(u.F, h.elements), d.runClassFinishers(u.F, h.finishers)
        }

        function o() {
            o = function() {
                return e
            };
            var e = {
                elementsDefinitionOrder: [
                    ["method"],
                    ["field"]
                ],
                initializeInstanceElements: function(e, t) {
                    ["method", "field"].forEach((function(n) {
                        t.forEach((function(t) {
                            t.kind === n && "own" === t.placement && this.defineClassElement(e, t)
                        }), this)
                    }), this)
                },
                initializeClassElements: function(e, t) {
                    var n = e.prototype;
                    ["method", "field"].forEach((function(o) {
                        t.forEach((function(t) {
                            var i = t.placement;
                            if (t.kind === o && ("static" === i || "prototype" === i)) {
                                var r = "static" === i ? e : n;
                                this.defineClassElement(r, t)
                            }
                        }), this)
                    }), this)
                },
                defineClassElement: function(e, t) {
                    var n = t.descriptor;
                    if ("field" === t.kind) {
                        var o = t.initializer;
                        n = {
                            enumerable: n.enumerable,
                            writable: n.writable,
                            configurable: n.configurable,
                            value: void 0 === o ? void 0 : o.call(e)
                        }
                    }
                    Object.defineProperty(e, t.key, n)
                },
                decorateClass: function(e, t) {
                    var n = [],
                        o = [],
                        i = {
                            static: [],
                            prototype: [],
                            own: []
                        };
                    if (e.forEach((function(e) {
                            this.addElementPlacement(e, i)
                        }), this), e.forEach((function(e) {
                            if (!a(e)) return n.push(e);
                            var t = this.decorateElement(e, i);
                            n.push(t.element), n.push.apply(n, t.extras), o.push.apply(o, t.finishers)
                        }), this), !t) return {
                        elements: n,
                        finishers: o
                    };
                    var r = this.decorateConstructor(n, t);
                    return o.push.apply(o, r.finishers), r.finishers = o, r
                },
                addElementPlacement: function(e, t, n) {
                    var o = t[e.placement];
                    if (!n && -1 !== o.indexOf(e.key)) throw new TypeError("Duplicated element (" + e.key + ")");
                    o.push(e.key)
                },
                decorateElement: function(e, t) {
                    for (var n = [], o = [], i = e.decorators, r = i.length - 1; r >= 0; r--) {
                        var a = t[e.placement];
                        a.splice(a.indexOf(e.key), 1);
                        var s = this.fromElementDescriptor(e),
                            l = this.toElementFinisherExtras((0, i[r])(s) || s);
                        e = l.element, this.addElementPlacement(e, t), l.finisher && o.push(l.finisher);
                        var d = l.extras;
                        if (d) {
                            for (var c = 0; c < d.length; c++) this.addElementPlacement(d[c], t);
                            n.push.apply(n, d)
                        }
                    }
                    return {
                        element: e,
                        finishers: o,
                        extras: n
                    }
                },
                decorateConstructor: function(e, t) {
                    for (var n = [], o = t.length - 1; o >= 0; o--) {
                        var i = this.fromClassDescriptor(e),
                            r = this.toClassDescriptor((0, t[o])(i) || i);
                        if (void 0 !== r.finisher && n.push(r.finisher), void 0 !== r.elements) {
                            e = r.elements;
                            for (var a = 0; a < e.length - 1; a++)
                                for (var s = a + 1; s < e.length; s++)
                                    if (e[a].key === e[s].key && e[a].placement === e[s].placement) throw new TypeError("Duplicated element (" + e[a].key + ")")
                        }
                    }
                    return {
                        elements: e,
                        finishers: n
                    }
                },
                fromElementDescriptor: function(e) {
                    var t = {
                        kind: e.kind,
                        key: e.key,
                        placement: e.placement,
                        descriptor: e.descriptor
                    };
                    return Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Descriptor",
                        configurable: !0
                    }), "field" === e.kind && (t.initializer = e.initializer), t
                },
                toElementDescriptors: function(e) {
                    if (void 0 !== e) return function(e) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                        }(e) || function(e, n) {
                            if (e) {
                                if ("string" == typeof e) return t(e, n);
                                var o = {}.toString.call(e).slice(8, -1);
                                return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? t(e, n) : void 0
                            }
                        }
                        /**
                         * @license
                         * Copyright 2017 Google LLC
                         * SPDX-License-Identifier: BSD-3-Clause
                         */
                        (e) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }(e).map((function(e) {
                        var t = this.toElementDescriptor(e);
                        return this.disallowProperty(e, "finisher", "An element descriptor"), this.disallowProperty(e, "extras", "An element descriptor"), t
                    }), this)
                },
                toElementDescriptor: function(e) {
                    var t = e.kind + "";
                    if ("method" !== t && "field" !== t) throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' + t + '"');
                    var n = p(e.key),
                        o = e.placement + "";
                    if ("static" !== o && "prototype" !== o && "own" !== o) throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' + o + '"');
                    var i = e.descriptor;
                    this.disallowProperty(e, "elements", "An element descriptor");
                    var r = {
                        kind: t,
                        key: n,
                        placement: o,
                        descriptor: Object.assign({}, i)
                    };
                    return "field" !== t ? this.disallowProperty(e, "initializer", "A method descriptor") : (this.disallowProperty(i, "get", "The property descriptor of a field descriptor"), this.disallowProperty(i, "set", "The property descriptor of a field descriptor"), this.disallowProperty(i, "value", "The property descriptor of a field descriptor"), r.initializer = e.initializer), r
                },
                toElementFinisherExtras: function(e) {
                    return {
                        element: this.toElementDescriptor(e),
                        finisher: l(e, "finisher"),
                        extras: this.toElementDescriptors(e.extras)
                    }
                },
                fromClassDescriptor: function(e) {
                    var t = {
                        kind: "class",
                        elements: e.map(this.fromElementDescriptor, this)
                    };
                    return Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Descriptor",
                        configurable: !0
                    }), t
                },
                toClassDescriptor: function(e) {
                    var t = e.kind + "";
                    if ("class" !== t) throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' + t + '"');
                    this.disallowProperty(e, "key", "A class descriptor"), this.disallowProperty(e, "placement", "A class descriptor"), this.disallowProperty(e, "descriptor", "A class descriptor"), this.disallowProperty(e, "initializer", "A class descriptor"), this.disallowProperty(e, "extras", "A class descriptor");
                    var n = l(e, "finisher");
                    return {
                        elements: this.toElementDescriptors(e.elements),
                        finisher: n
                    }
                },
                runClassFinishers: function(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = (0, t[n])(e);
                        if (void 0 !== o) {
                            if ("function" != typeof o) throw new TypeError("Finishers must return a constructor.");
                            e = o
                        }
                    }
                    return e
                },
                disallowProperty: function(e, t, n) {
                    if (void 0 !== e[t]) throw new TypeError(n + " can't have a ." + t + " property.")
                }
            };
            return e
        }

        function i(e) {
            var t, n = p(e.key);
            "method" === e.kind ? t = {
                value: e.value,
                writable: !0,
                configurable: !0,
                enumerable: !1
            } : "get" === e.kind ? t = {
                get: e.value,
                configurable: !0,
                enumerable: !1
            } : "set" === e.kind ? t = {
                set: e.value,
                configurable: !0,
                enumerable: !1
            } : "field" === e.kind && (t = {
                configurable: !0,
                writable: !0,
                enumerable: !0
            });
            var o = {
                kind: "field" === e.kind ? "field" : "method",
                key: n,
                placement: e.static ? "static" : "field" === e.kind ? "own" : "prototype",
                descriptor: t
            };
            return e.decorators && (o.decorators = e.decorators), "field" === e.kind && (o.initializer = e.value), o
        }

        function r(e, t) {
            void 0 !== e.descriptor.get ? t.descriptor.get = e.descriptor.get : t.descriptor.set = e.descriptor.set
        }

        function a(e) {
            return e.decorators && e.decorators.length
        }

        function s(e) {
            return void 0 !== e && !(void 0 === e.value && void 0 === e.writable)
        }

        function l(e, t) {
            var n = e[t];
            if (void 0 !== n && "function" != typeof n) throw new TypeError("Expected '" + t + "' to be a function");
            return n
        }

        function d(e, t, n) {
            return (t = p(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function c() {
            return c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
                var o = function(e, t) {
                    for (; !{}.hasOwnProperty.call(e, t) && null !== (e = u(e)););
                    return e
                }(e, t);
                if (o) {
                    var i = Object.getOwnPropertyDescriptor(o, t);
                    return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value
                }
            }, c.apply(null, arguments)
        }

        function u(e) {
            return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, u(e)
        }

        function h(e, t, n, o) {
            var i = c(u(1 & o ? e.prototype : e), t, n);
            return 2 & o ? function(e) {
                return i.apply(n, e)
            } : i
        }

        function p(e) {
            var t = function(e, t) {
                if ("object" != typeof e || !e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" != typeof o) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" == typeof t ? t : t + ""
        }
        var b;
        const v = window,
            f = v.trustedTypes,
            g = f ? f.createPolicy("lit-html", {
                createHTML: e => e
            }) : void 0,
            m = "$lit$",
            w = `lit$${(Math.random()+"").slice(9)}$`,
            _ = "?" + w,
            y = `<${_}>`,
            k = document,
            z = () => k.createComment(""),
            A = e => null === e || "object" != typeof e && "function" != typeof e,
            x = Array.isArray,
            S = "[ \t\n\f\r]",
            $ = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
            E = /-->/g,
            C = />/g,
            O = RegExp(`>|${S}(?:([^\\s"'>=/]+)(${S}*=${S}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"),
            B = /'/g,
            L = /"/g,
            T = /^(?:script|style|textarea|title)$/i,
            P = Symbol.for("lit-noChange"),
            N = Symbol.for("lit-nothing"),
            M = new WeakMap,
            D = k.createTreeWalker(k, 129, null, !1);

        function j(e, t) {
            if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
            return void 0 !== g ? g.createHTML(t) : t
        }
        class R {
            constructor({
                strings: e,
                _$litType$: t
            }, n) {
                let o;
                this.parts = [];
                let i = 0,
                    r = 0;
                const a = e.length - 1,
                    s = this.parts,
                    [l, d] = ((e, t) => {
                        const n = e.length - 1,
                            o = [];
                        let i, r = 2 === t ? "<svg>" : "",
                            a = $;
                        for (let t = 0; t < n; t++) {
                            const n = e[t];
                            let s, l, d = -1,
                                c = 0;
                            for (; c < n.length && (a.lastIndex = c, l = a.exec(n), null !== l);) c = a.lastIndex, a === $ ? "!--" === l[1] ? a = E : void 0 !== l[1] ? a = C : void 0 !== l[2] ? (T.test(l[2]) && (i = RegExp("</" + l[2], "g")), a = O) : void 0 !== l[3] && (a = O) : a === O ? ">" === l[0] ? (a = null != i ? i : $, d = -1) : void 0 === l[1] ? d = -2 : (d = a.lastIndex - l[2].length, s = l[1], a = void 0 === l[3] ? O : '"' === l[3] ? L : B) : a === L || a === B ? a = O : a === E || a === C ? a = $ : (a = O, i = void 0);
                            const u = a === O && e[t + 1].startsWith("/>") ? " " : "";
                            r += a === $ ? n + y : d >= 0 ? (o.push(s), n.slice(0, d) + m + n.slice(d) + w + u) : n + w + (-2 === d ? (o.push(void 0), t) : u)
                        }
                        return [j(e, r + (e[n] || "<?>") + (2 === t ? "</svg>" : "")), o]
                    })(e, t);
                if (this.el = R.createElement(l, n), D.currentNode = this.el.content, 2 === t) {
                    const e = this.el.content,
                        t = e.firstChild;
                    t.remove(), e.append(...t.childNodes)
                }
                for (; null !== (o = D.nextNode()) && s.length < a;) {
                    if (1 === o.nodeType) {
                        if (o.hasAttributes()) {
                            const e = [];
                            for (const t of o.getAttributeNames())
                                if (t.endsWith(m) || t.startsWith(w)) {
                                    const n = d[r++];
                                    if (e.push(t), void 0 !== n) {
                                        const e = o.getAttribute(n.toLowerCase() + m).split(w),
                                            t = /([.?@])?(.*)/.exec(n);
                                        s.push({
                                            type: 1,
                                            index: i,
                                            name: t[2],
                                            strings: e,
                                            ctor: "." === t[1] ? q : "?" === t[1] ? V : "@" === t[1] ? G : H
                                        })
                                    } else s.push({
                                        type: 6,
                                        index: i
                                    })
                                } for (const t of e) o.removeAttribute(t)
                        }
                        if (T.test(o.tagName)) {
                            const e = o.textContent.split(w),
                                t = e.length - 1;
                            if (t > 0) {
                                o.textContent = f ? f.emptyScript : "";
                                for (let n = 0; n < t; n++) o.append(e[n], z()), D.nextNode(), s.push({
                                    type: 2,
                                    index: ++i
                                });
                                o.append(e[t], z())
                            }
                        }
                    } else if (8 === o.nodeType)
                        if (o.data === _) s.push({
                            type: 2,
                            index: i
                        });
                        else {
                            let e = -1;
                            for (; - 1 !== (e = o.data.indexOf(w, e + 1));) s.push({
                                type: 7,
                                index: i
                            }), e += w.length - 1
                        } i++
                }
            }
            static createElement(e, t) {
                const n = k.createElement("template");
                return n.innerHTML = e, n
            }
        }

        function I(e, t, n = e, o) {
            var i, r, a, s;
            if (t === P) return t;
            let l = void 0 !== o ? null === (i = n._$Co) || void 0 === i ? void 0 : i[o] : n._$Cl;
            const d = A(t) ? void 0 : t._$litDirective$;
            return (null == l ? void 0 : l.constructor) !== d && (null === (r = null == l ? void 0 : l._$AO) || void 0 === r || r.call(l, !1), void 0 === d ? l = void 0 : (l = new d(e), l._$AT(e, n, o)), void 0 !== o ? (null !== (a = (s = n)._$Co) && void 0 !== a ? a : s._$Co = [])[o] = l : n._$Cl = l), void 0 !== l && (t = I(e, l._$AS(e, t.values), l, o)), t
        }
        class F {
            constructor(e, t) {
                this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t
            }
            get parentNode() {
                return this._$AM.parentNode
            }
            get _$AU() {
                return this._$AM._$AU
            }
            u(e) {
                var t;
                const {
                    el: {
                        content: n
                    },
                    parts: o
                } = this._$AD, i = (null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t ? t : k).importNode(n, !0);
                D.currentNode = i;
                let r = D.nextNode(),
                    a = 0,
                    s = 0,
                    l = o[0];
                for (; void 0 !== l;) {
                    if (a === l.index) {
                        let t;
                        2 === l.type ? t = new U(r, r.nextSibling, this, e) : 1 === l.type ? t = new l.ctor(r, l.name, l.strings, this, e) : 6 === l.type && (t = new K(r, this, e)), this._$AV.push(t), l = o[++s]
                    }
                    a !== (null == l ? void 0 : l.index) && (r = D.nextNode(), a++)
                }
                return D.currentNode = k, i
            }
            v(e) {
                let t = 0;
                for (const n of this._$AV) void 0 !== n && (void 0 !== n.strings ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++
            }
        }
        class U {
            constructor(e, t, n, o) {
                var i;
                this.type = 2, this._$AH = N, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this._$Cp = null === (i = null == o ? void 0 : o.isConnected) || void 0 === i || i
            }
            get _$AU() {
                var e, t;
                return null !== (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) && void 0 !== t ? t : this._$Cp
            }
            get parentNode() {
                let e = this._$AA.parentNode;
                const t = this._$AM;
                return void 0 !== t && 11 === (null == e ? void 0 : e.nodeType) && (e = t.parentNode), e
            }
            get startNode() {
                return this._$AA
            }
            get endNode() {
                return this._$AB
            }
            _$AI(e, t = this) {
                e = I(this, e, t), A(e) ? e === N || null == e || "" === e ? (this._$AH !== N && this._$AR(), this._$AH = N) : e !== this._$AH && e !== P && this._(e) : void 0 !== e._$litType$ ? this.g(e) : void 0 !== e.nodeType ? this.$(e) : (e => x(e) || "function" == typeof(null == e ? void 0 : e[Symbol.iterator]))(e) ? this.T(e) : this._(e)
            }
            k(e) {
                return this._$AA.parentNode.insertBefore(e, this._$AB)
            }
            $(e) {
                this._$AH !== e && (this._$AR(), this._$AH = this.k(e))
            }
            _(e) {
                this._$AH !== N && A(this._$AH) ? this._$AA.nextSibling.data = e : this.$(k.createTextNode(e)), this._$AH = e
            }
            g(e) {
                var t;
                const {
                    values: n,
                    _$litType$: o
                } = e, i = "number" == typeof o ? this._$AC(e) : (void 0 === o.el && (o.el = R.createElement(j(o.h, o.h[0]), this.options)), o);
                if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === i) this._$AH.v(n);
                else {
                    const e = new F(i, this),
                        t = e.u(this.options);
                    e.v(n), this.$(t), this._$AH = e
                }
            }
            _$AC(e) {
                let t = M.get(e.strings);
                return void 0 === t && M.set(e.strings, t = new R(e)), t
            }
            T(e) {
                x(this._$AH) || (this._$AH = [], this._$AR());
                const t = this._$AH;
                let n, o = 0;
                for (const i of e) o === t.length ? t.push(n = new U(this.k(z()), this.k(z()), this, this.options)) : n = t[o], n._$AI(i), o++;
                o < t.length && (this._$AR(n && n._$AB.nextSibling, o), t.length = o)
            }
            _$AR(e = this._$AA.nextSibling, t) {
                var n;
                for (null === (n = this._$AP) || void 0 === n || n.call(this, !1, !0, t); e && e !== this._$AB;) {
                    const t = e.nextSibling;
                    e.remove(), e = t
                }
            }
            setConnected(e) {
                var t;
                void 0 === this._$AM && (this._$Cp = e, null === (t = this._$AP) || void 0 === t || t.call(this, e))
            }
        }
        class H {
            constructor(e, t, n, o, i) {
                this.type = 1, this._$AH = N, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = i, n.length > 2 || "" !== n[0] || "" !== n[1] ? (this._$AH = Array(n.length - 1).fill(new String), this.strings = n) : this._$AH = N
            }
            get tagName() {
                return this.element.tagName
            }
            get _$AU() {
                return this._$AM._$AU
            }
            _$AI(e, t = this, n, o) {
                const i = this.strings;
                let r = !1;
                if (void 0 === i) e = I(this, e, t, 0), r = !A(e) || e !== this._$AH && e !== P, r && (this._$AH = e);
                else {
                    const o = e;
                    let a, s;
                    for (e = i[0], a = 0; a < i.length - 1; a++) s = I(this, o[n + a], t, a), s === P && (s = this._$AH[a]), r || (r = !A(s) || s !== this._$AH[a]), s === N ? e = N : e !== N && (e += (null != s ? s : "") + i[a + 1]), this._$AH[a] = s
                }
                r && !o && this.j(e)
            }
            j(e) {
                e === N ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != e ? e : "")
            }
        }
        class q extends H {
            constructor() {
                super(...arguments), this.type = 3
            }
            j(e) {
                this.element[this.name] = e === N ? void 0 : e
            }
        }
        const W = f ? f.emptyScript : "";
        class V extends H {
            constructor() {
                super(...arguments), this.type = 4
            }
            j(e) {
                e && e !== N ? this.element.setAttribute(this.name, W) : this.element.removeAttribute(this.name)
            }
        }
        class G extends H {
            constructor(e, t, n, o, i) {
                super(e, t, n, o, i), this.type = 5
            }
            _$AI(e, t = this) {
                var n;
                if ((e = null !== (n = I(this, e, t, 0)) && void 0 !== n ? n : N) === P) return;
                const o = this._$AH,
                    i = e === N && o !== N || e.capture !== o.capture || e.once !== o.once || e.passive !== o.passive,
                    r = e !== N && (o === N || i);
                i && this.element.removeEventListener(this.name, this, o), r && this.element.addEventListener(this.name, this, e), this._$AH = e
            }
            handleEvent(e) {
                var t, n;
                "function" == typeof this._$AH ? this._$AH.call(null !== (n = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== n ? n : this.element, e) : this._$AH.handleEvent(e)
            }
        }
        class K {
            constructor(e, t, n) {
                this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n
            }
            get _$AU() {
                return this._$AM._$AU
            }
            _$AI(e) {
                I(this, e)
            }
        }
        const Y = v.litHtmlPolyfillSupport;
        null == Y || Y(R, U), (null !== (b = v.litHtmlVersions) && void 0 !== b ? b : v.litHtmlVersions = []).push("2.8.0");
        /**
         * @license
         * Copyright 2017 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        const X = 1,
            Z = 2,
            J = e => (...t) => ({
                _$litDirective$: e,
                values: t
            });
        class Q {
            constructor(e) {}
            get _$AU() {
                return this._$AM._$AU
            }
            _$AT(e, t, n) {
                this._$Ct = e, this._$AM = t, this._$Ci = n
            }
            _$AS(e, t) {
                return this.update(e, t)
            }
            update(e, t) {
                return this.render(...t)
            }
        }
        /**
         * @license
         * Copyright 2018 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        const ee = J(class extends Q {
            constructor(e) {
                var t;
                if (super(e), e.type !== X || "class" !== e.name || (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
            }
            render(e) {
                return " " + Object.keys(e).filter((t => e[t])).join(" ") + " "
            }
            update(e, [t]) {
                var n, o;
                if (void 0 === this.it) {
                    this.it = new Set, void 0 !== e.strings && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((e => "" !== e))));
                    for (const e in t) t[e] && !(null === (n = this.nt) || void 0 === n ? void 0 : n.has(e)) && this.it.add(e);
                    return this.render(t)
                }
                const i = e.element.classList;
                this.it.forEach((e => {
                    e in t || (i.remove(e), this.it.delete(e))
                }));
                for (const e in t) {
                    const n = !!t[e];
                    n === this.it.has(e) || (null === (o = this.nt) || void 0 === o ? void 0 : o.has(e)) || (n ? (i.add(e), this.it.add(e)) : (i.remove(e), this.it.delete(e)))
                }
                return P
            }
        });
        const te = "Android",
            ne = "iOS",
            oe = "macOS",
            ie = "Windows",
            re = "Other",
            ae = "data-device-type",
            se = "data-geo-country",
            le = "data-geo-subdivision",
            de = () => {
                const e = window.navigator.userAgent || window.navigator.vendor || window.opera,
                    t = navigator.userAgentData?.platform || navigator.platform,
                    n = {
                        ios: ["iPad", "iPhone", "iPod", "iPad Simulator", "iPhone Simulator", "iPod Simulator"],
                        mac: ["macOS", "Macintosh", "MacIntel", "MacPPC", "Mac68K"],
                        windows: ["Win32", "Win64", "Windows", "WinCE"]
                    };
                let o = re;
                return /android/i.test(e) ? o = te : -1 !== n.ios.indexOf(t) || e.includes("Mac") && "ontouchend" in document ? o = ne : -1 !== n.mac.indexOf(t) ? o = oe : -1 !== n.windows.indexOf(t) && (o = ie), o
            },
            ce = (e, t = ["interactive", "complete"]) => {
                Array.isArray(t) || (t = [t]), t.includes(document.readyState) ? e() : document.addEventListener("readystatechange", (() => ce(e, t)), {
                    once: !0
                })
            },
            ue = (e, t = !0) => {
                if (!e) return;
                !t && window.trb.geo || (window.trb.geo = e), !t && document.documentElement.hasAttribute(se) || document.documentElement.setAttribute(se, e.country), !t && document.documentElement.hasAttribute(le) || document.documentElement.setAttribute(le, e.subdivision);
                let n = document.querySelector("style[data-trb-geo]");
                if (t || !n) {
                    n && n.remove();
                    let t = `[${se}='${e.country}'] [trb-geo-country]:not([trb-geo-country~='${e.country}' i]) { display: none; } `;
                    t += `[${le}='${e.subdivision}'] [trb-geo-subdivision]:not([trb-geo-subdivision~='${e.subdivision}' i]) { display: none; } `, t += `[${se}='${e.country}'] [trb-geo-exclude-country~='${e.country}' i]:not([trb-geo-exclude-subdivision]) { display: none; } `, t += `[${le}='${e.subdivision}'] [trb-geo-exclude-country~='${e.country}' i][trb-geo-exclude-subdivision~='${e.subdivision}' i] { display: none; }`;
                    const o = document.head || document.getElementsByTagName("head")[0];
                    n = document.createElement("style"), o.appendChild(n), n.setAttribute("data-trb-geo", ""), n.appendChild(document.createTextNode(t))
                }
                ce((() => window.dispatchEvent(new CustomEvent("trb-geo:setup", {
                    detail: window.trb.geo
                }))))
            };
        "undefined" == typeof window || window.setuptrbGeo || (window.setuptrbGeo = ue);
        const he = () => {
                let e = "mobile",
                    t = !1;
                return Object.entries({
                    md: 960,
                    lg: 1200,
                    xl: 1400
                }).forEach((([t, n]) => {
                    window.innerWidth >= n && (e = `${e} ${t}`)
                })), "mobile" === e && (t = !0), [e, t]
            },
            pe = e => e?.shadowRoot ? pe(e.shadowRoot.querySelector(`:host > ${me}`)) : e?.matches(me) && !e?.matches('[tabindex="-1"], [disabled], .disabled, #trb-nav-search') ? e : void 0,
            be = (e = []) => [...e].flatMap((e => [...e.assignedNodes({
                flatten: !0
            })].flatMap((e => "SLOT" === e.nodeName ? e.assignedNodes({
                flatten: !0
            }) : [e])))),
            ve = e => "trb-NAV-LINK" === e.nodeName ? e : [...e.querySelectorAll("trb-nav-link")],
            fe = (e, t) => ({
                ...e,
                [t]: !0
            }),
            ge = (e, {
                text: t
            }, n) => e.concat(n ? ", " : "").concat(`${t}`),
            me = "trb-nav-link, button, [href], input, select, textarea, [tabindex]",
            we = /[^@]+@([\w-]+\.)+[\w-]{2,4}/,
            _e = ({
                attribute: e,
                mOptions: t,
                onConnect: n,
                onDisconnect: o,
                onChildListChange: i,
                onAttributeChange: r,
                root: a
            }) => {
                ye.attributes[e] = {
                    onConnect: n,
                    onDisconnect: o,
                    onChildListChange: i,
                    onAttributeChange: r,
                    config: {
                        attributes: t.attributes || !0,
                        childList: t.childList || !0,
                        subtree: t.subtree || !0,
                        attributeOldValue: t.attributeOldValue || !0,
                        attributeFilter: t.attributeFilter || []
                    }
                }, ye.observers[e] = ke(e, a)
            },
            ye = {
                attributes: {},
                observers: {},
                observe: (e, t) => {
                    ye.attributes[e] && (ye.observers[e].observe(t, ye.attributes[e].config), "function" == typeof ye.attributes[e].onConnect && ye.attributes[e].onConnect(t))
                }
            },
            ke = (e, t) => {
                const n = new MutationObserver((e => t => {
                    for (const n of t) "childList" === n.type ? ye.attributes[e].onChildListChange(n) : "attributes" === n.type && ye.attributes[e].onAttributeChange(n)
                })(e));
                return n.observe(t, ye.attributes[e].config), "function" == typeof ye.attributes[e].onConnect && ye.attributes[e].onConnect(t), n
            },
            ze = e => window.getComputedStyle(document.body).getPropertyValue(e).slice(0, -2).trim(),
            Ae = e => e.parentElement ? [].concat(e).concat(...Ae(e.parentElement)) : [e];

        function xe(e, t, n) {
            var o, i = n || {},
                r = i.noTrailing,
                a = void 0 !== r && r,
                s = i.noLeading,
                l = void 0 !== s && s,
                d = i.debounceMode,
                c = void 0 === d ? void 0 : d,
                u = !1,
                h = 0;

            function p() {
                o && clearTimeout(o)
            }

            function b() {
                for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                var s = this,
                    d = Date.now() - h;

                function b() {
                    h = Date.now(), t.apply(s, i)
                }

                function v() {
                    o = void 0
                }
                u || (l || !c || o || b(), p(), void 0 === c && d > e ? l ? (h = Date.now(), a || (o = setTimeout(c ? v : b, e))) : b() : !0 !== a && (o = setTimeout(c ? v : b, void 0 === c ? e - d : e)))
            }
            return b.cancel = function(e) {
                var t = (e || {}).upcomingOnly,
                    n = void 0 !== t && t;
                p(), u = !n
            }, b
        }
        var Se = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

        function $e(e) {
            return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
        }
        var Ee, Ce = {
            exports: {}
        };
        Ee = Ce,
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
                    if (!1 === e) return JSON.parse(JSON.stringify(t));
                    var n = {};
                    for (var o in t) t.hasOwnProperty(o) && (n[o] = t[o].defaultValue);
                    return n
                }
                var t = {},
                    n = {},
                    o = {},
                    i = e(!0),
                    r = "vanilla",
                    a = {
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
                            var t = e(!0),
                                n = {};
                            for (var o in t) t.hasOwnProperty(o) && (n[o] = !0);
                            return n
                        }()
                    };

                function s(e, n) {
                    var o = n ? "Error in " + n + " extension->" : "Error in unnamed extension",
                        i = {
                            valid: !0,
                            error: ""
                        };
                    t.helper.isArray(e) || (e = [e]);
                    for (var r = 0; r < e.length; ++r) {
                        var a = o + " sub-extension " + r + ": ",
                            s = e[r];
                        if ("object" != typeof s) return i.valid = !1, i.error = a + "must be an object, but " + typeof s + " given", i;
                        if (!t.helper.isString(s.type)) return i.valid = !1, i.error = a + 'property "type" must be a string, but ' + typeof s.type + " given", i;
                        var l = s.type = s.type.toLowerCase();
                        if ("language" === l && (l = s.type = "lang"), "html" === l && (l = s.type = "output"), "lang" !== l && "output" !== l && "listener" !== l) return i.valid = !1, i.error = a + "type " + l + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', i;
                        if ("listener" === l) {
                            if (t.helper.isUndefined(s.listeners)) return i.valid = !1, i.error = a + '. Extensions of type "listener" must have a property called "listeners"', i
                        } else if (t.helper.isUndefined(s.filter) && t.helper.isUndefined(s.regex)) return i.valid = !1, i.error = a + l + ' extensions must define either a "regex" property or a "filter" method', i;
                        if (s.listeners) {
                            if ("object" != typeof s.listeners) return i.valid = !1, i.error = a + '"listeners" property must be an object but ' + typeof s.listeners + " given", i;
                            for (var d in s.listeners)
                                if (s.listeners.hasOwnProperty(d) && "function" != typeof s.listeners[d]) return i.valid = !1, i.error = a + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + d + " must be a function but " + typeof s.listeners[d] + " given", i
                        }
                        if (s.filter) {
                            if ("function" != typeof s.filter) return i.valid = !1, i.error = a + '"filter" must be a function, but ' + typeof s.filter + " given", i
                        } else if (s.regex) {
                            if (t.helper.isString(s.regex) && (s.regex = new RegExp(s.regex, "g")), !(s.regex instanceof RegExp)) return i.valid = !1, i.error = a + '"regex" property must either be a string or a RegExp object, but ' + typeof s.regex + " given", i;
                            if (t.helper.isUndefined(s.replace)) return i.valid = !1, i.error = a + '"regex" extensions must implement a replace string or function', i
                        }
                    }
                    return i
                }

                function l(e, t) {
                    return "¨E" + t.charCodeAt(0) + "E"
                }
                t.helper = {}, t.extensions = {}, t.setOption = function(e, t) {
                    return i[e] = t, this
                }, t.getOption = function(e) {
                    return i[e]
                }, t.getOptions = function() {
                    return i
                }, t.resetOptions = function() {
                    i = e(!0)
                }, t.setFlavor = function(e) {
                    if (!a.hasOwnProperty(e)) throw Error(e + " flavor was not found");
                    t.resetOptions();
                    var n = a[e];
                    for (var o in r = e, n) n.hasOwnProperty(o) && (i[o] = n[o])
                }, t.getFlavor = function() {
                    return r
                }, t.getFlavorOptions = function(e) {
                    if (a.hasOwnProperty(e)) return a[e]
                }, t.getDefaultOptions = function(t) {
                    return e(t)
                }, t.subParser = function(e, o) {
                    if (t.helper.isString(e)) {
                        if (void 0 === o) {
                            if (n.hasOwnProperty(e)) return n[e];
                            throw Error("SubParser named " + e + " not registered!")
                        }
                        n[e] = o
                    }
                }, t.extension = function(e, n) {
                    if (!t.helper.isString(e)) throw Error("Extension 'name' must be a string");
                    if (e = t.helper.stdExtName(e), t.helper.isUndefined(n)) {
                        if (!o.hasOwnProperty(e)) throw Error("Extension named " + e + " is not registered!");
                        return o[e]
                    }
                    "function" == typeof n && (n = n()), t.helper.isArray(n) || (n = [n]);
                    var i = s(n, e);
                    if (!i.valid) throw Error(i.error);
                    o[e] = n
                }, t.getAllExtensions = function() {
                    return o
                }, t.removeExtension = function(e) {
                    delete o[e]
                }, t.resetExtensions = function() {
                    o = {}
                }, t.validateExtension = function(e) {
                    var t = s(e, null);
                    return !!t.valid || (console.warn(t.error), !1)
                }, t.hasOwnProperty("helper") || (t.helper = {}), t.helper.isString = function(e) {
                    return "string" == typeof e || e instanceof String
                }, t.helper.isFunction = function(e) {
                    return e && "[object Function]" === {}.toString.call(e)
                }, t.helper.isArray = function(e) {
                    return Array.isArray(e)
                }, t.helper.isUndefined = function(e) {
                    return void 0 === e
                }, t.helper.forEach = function(e, n) {
                    if (t.helper.isUndefined(e)) throw new Error("obj param is required");
                    if (t.helper.isUndefined(n)) throw new Error("callback param is required");
                    if (!t.helper.isFunction(n)) throw new Error("callback param must be a function/closure");
                    if ("function" == typeof e.forEach) e.forEach(n);
                    else if (t.helper.isArray(e))
                        for (var o = 0; o < e.length; o++) n(e[o], o, e);
                    else {
                        if ("object" != typeof e) throw new Error("obj does not seem to be an array or an iterable object");
                        for (var i in e) e.hasOwnProperty(i) && n(e[i], i, e)
                    }
                }, t.helper.stdExtName = function(e) {
                    return e.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase()
                }, t.helper.escapeCharactersCallback = l, t.helper.escapeCharacters = function(e, t, n) {
                    var o = "([" + t.replace(/([\[\]\\])/g, "\\$1") + "])";
                    n && (o = "\\\\" + o);
                    var i = new RegExp(o, "g");
                    return e = e.replace(i, l)
                }, t.helper.unescapeHTMLEntities = function(e) {
                    return e.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
                };
                var d = function(e, t, n, o) {
                    var i, r, a, s, l, d = o || "",
                        c = d.indexOf("g") > -1,
                        u = new RegExp(t + "|" + n, "g" + d.replace(/g/g, "")),
                        h = new RegExp(t, d.replace(/g/g, "")),
                        p = [];
                    do {
                        for (i = 0; a = u.exec(e);)
                            if (h.test(a[0])) i++ || (s = (r = u.lastIndex) - a[0].length);
                            else if (i && !--i) {
                            l = a.index + a[0].length;
                            var b = {
                                left: {
                                    start: s,
                                    end: r
                                },
                                match: {
                                    start: r,
                                    end: a.index
                                },
                                right: {
                                    start: a.index,
                                    end: l
                                },
                                wholeMatch: {
                                    start: s,
                                    end: l
                                }
                            };
                            if (p.push(b), !c) return p
                        }
                    } while (i && (u.lastIndex = r));
                    return p
                };
                t.helper.matchRecursiveRegExp = function(e, t, n, o) {
                    for (var i = d(e, t, n, o), r = [], a = 0; a < i.length; ++a) r.push([e.slice(i[a].wholeMatch.start, i[a].wholeMatch.end), e.slice(i[a].match.start, i[a].match.end), e.slice(i[a].left.start, i[a].left.end), e.slice(i[a].right.start, i[a].right.end)]);
                    return r
                }, t.helper.replaceRecursiveRegExp = function(e, n, o, i, r) {
                    if (!t.helper.isFunction(n)) {
                        var a = n;
                        n = function() {
                            return a
                        }
                    }
                    var s = d(e, o, i, r),
                        l = e,
                        c = s.length;
                    if (c > 0) {
                        var u = [];
                        0 !== s[0].wholeMatch.start && u.push(e.slice(0, s[0].wholeMatch.start));
                        for (var h = 0; h < c; ++h) u.push(n(e.slice(s[h].wholeMatch.start, s[h].wholeMatch.end), e.slice(s[h].match.start, s[h].match.end), e.slice(s[h].left.start, s[h].left.end), e.slice(s[h].right.start, s[h].right.end))), h < c - 1 && u.push(e.slice(s[h].wholeMatch.end, s[h + 1].wholeMatch.start));
                        s[c - 1].wholeMatch.end < e.length && u.push(e.slice(s[c - 1].wholeMatch.end)), l = u.join("")
                    }
                    return l
                }, t.helper.regexIndexOf = function(e, n, o) {
                    if (!t.helper.isString(e)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
                    if (n instanceof RegExp == 0) throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
                    var i = e.substring(o || 0).search(n);
                    return i >= 0 ? i + (o || 0) : i
                }, t.helper.splitAtIndex = function(e, n) {
                    if (!t.helper.isString(e)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
                    return [e.substring(0, n), e.substring(n)]
                }, t.helper.encodeEmailAddress = function(e) {
                    var t = [function(e) {
                        return "&#" + e.charCodeAt(0) + ";"
                    }, function(e) {
                        return "&#x" + e.charCodeAt(0).toString(16) + ";"
                    }, function(e) {
                        return e
                    }];
                    return e = e.replace(/./g, (function(e) {
                        if ("@" === e) e = t[Math.floor(2 * Math.random())](e);
                        else {
                            var n = Math.random();
                            e = n > .9 ? t[2](e) : n > .45 ? t[1](e) : t[0](e)
                        }
                        return e
                    })), e
                }, t.helper.padEnd = function(e, t, n) {
                    return t |= 0, n = String(n || " "), e.length > t ? String(e) : ((t -= e.length) > n.length && (n += n.repeat(t / n.length)), String(e) + n.slice(0, t))
                }, "undefined" == typeof console && (console = {
                    warn: function(e) {
                        alert(e)
                    },
                    log: function(e) {
                        alert(e)
                    },
                    error: function(e) {
                        throw e
                    }
                }), t.helper.regexes = {
                    asteriskDashAndColon: /([*_:~])/g
                }, t.helper.emojis = {
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
                }, t.Converter = function(e) {
                    var n = {},
                        l = [],
                        d = [],
                        c = {},
                        u = r,
                        h = {
                            parsed: {},
                            raw: "",
                            format: ""
                        };

                    function p(e, n) {
                        if (n = n || null, t.helper.isString(e)) {
                            if (n = e = t.helper.stdExtName(e), t.extensions[e]) return console.warn("DEPRECATION WARNING: " + e + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), void
                            function(e, n) {
                                "function" == typeof e && (e = e(new t.Converter)), t.helper.isArray(e) || (e = [e]);
                                var o = s(e, n);
                                if (!o.valid) throw Error(o.error);
                                for (var i = 0; i < e.length; ++i) switch (e[i].type) {
                                    case "lang":
                                        l.push(e[i]);
                                        break;
                                    case "output":
                                        d.push(e[i]);
                                        break;
                                    default:
                                        throw Error("Extension loader error: Type unrecognized!!!")
                                }
                            }(t.extensions[e], e);
                            if (t.helper.isUndefined(o[e])) throw Error('Extension "' + e + '" could not be loaded. It was either not found or is not a valid extension.');
                            e = o[e]
                        }
                        "function" == typeof e && (e = e()), t.helper.isArray(e) || (e = [e]);
                        var i = s(e, n);
                        if (!i.valid) throw Error(i.error);
                        for (var r = 0; r < e.length; ++r) {
                            switch (e[r].type) {
                                case "lang":
                                    l.push(e[r]);
                                    break;
                                case "output":
                                    d.push(e[r])
                            }
                            if (e[r].hasOwnProperty("listeners"))
                                for (var a in e[r].listeners) e[r].listeners.hasOwnProperty(a) && b(a, e[r].listeners[a])
                        }
                    }

                    function b(e, n) {
                        if (!t.helper.isString(e)) throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof e + " given");
                        if ("function" != typeof n) throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof n + " given");
                        c.hasOwnProperty(e) || (c[e] = []), c[e].push(n)
                    }! function() {
                        for (var o in e = e || {}, i) i.hasOwnProperty(o) && (n[o] = i[o]);
                        if ("object" != typeof e) throw Error("Converter expects the passed parameter to be an object, but " + typeof e + " was passed instead.");
                        for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
                        n.extensions && t.helper.forEach(n.extensions, p)
                    }(), this._dispatch = function(e, t, n, o) {
                        if (c.hasOwnProperty(e))
                            for (var i = 0; i < c[e].length; ++i) {
                                var r = c[e][i](e, t, this, n, o);
                                r && void 0 !== r && (t = r)
                            }
                        return t
                    }, this.listen = function(e, t) {
                        return b(e, t), this
                    }, this.makeHtml = function(e) {
                        if (!e) return e;
                        var o = {
                            gHtmlBlocks: [],
                            gHtmlMdBlocks: [],
                            gHtmlSpans: [],
                            gUrls: {},
                            gTitles: {},
                            gDimensions: {},
                            gListLevel: 0,
                            hashLinkCounts: {},
                            langExtensions: l,
                            outputModifiers: d,
                            converter: this,
                            ghCodeBlocks: [],
                            metadata: {
                                parsed: {},
                                raw: "",
                                format: ""
                            }
                        };
                        return e = (e = (e = (e = (e = e.replace(/¨/g, "¨T")).replace(/\$/g, "¨D")).replace(/\r\n/g, "\n")).replace(/\r/g, "\n")).replace(/\u00A0/g, "&nbsp;"), n.smartIndentationFix && (e = function(e) {
                            var t = e.match(/^\s*/)[0].length,
                                n = new RegExp("^\\s{0," + t + "}", "gm");
                            return e.replace(n, "")
                        }(e)), e = "\n\n" + e + "\n\n", e = (e = t.subParser("detab")(e, n, o)).replace(/^[ \t]+$/gm, ""), t.helper.forEach(l, (function(i) {
                            e = t.subParser("runExtension")(i, e, n, o)
                        })), e = t.subParser("metadata")(e, n, o), e = t.subParser("hashPreCodeTags")(e, n, o), e = t.subParser("githubCodeBlocks")(e, n, o), e = t.subParser("hashHTMLBlocks")(e, n, o), e = t.subParser("hashCodeTags")(e, n, o), e = t.subParser("stripLinkDefinitions")(e, n, o), e = t.subParser("blockGamut")(e, n, o), e = t.subParser("unhashHTMLSpans")(e, n, o), e = (e = (e = t.subParser("unescapeSpecialChars")(e, n, o)).replace(/¨D/g, "$$")).replace(/¨T/g, "¨"), e = t.subParser("completeHTMLDocument")(e, n, o), t.helper.forEach(d, (function(i) {
                            e = t.subParser("runExtension")(i, e, n, o)
                        })), h = o.metadata, e
                    }, this.makeMarkdown = this.makeMd = function(e, n) {
                        if (e = (e = (e = e.replace(/\r\n/g, "\n")).replace(/\r/g, "\n")).replace(/>[ \t]+</, ">¨NBSP;<"), !n) {
                            if (!window || !window.document) throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
                            n = window.document
                        }
                        var o = n.createElement("div");
                        o.innerHTML = e;
                        var i = {
                            preList: function(e) {
                                for (var n = e.querySelectorAll("pre"), o = [], i = 0; i < n.length; ++i)
                                    if (1 === n[i].childElementCount && "code" === n[i].firstChild.tagName.toLowerCase()) {
                                        var r = n[i].firstChild.innerHTML.trim(),
                                            a = n[i].firstChild.getAttribute("data-language") || "";
                                        if ("" === a)
                                            for (var s = n[i].firstChild.className.split(" "), l = 0; l < s.length; ++l) {
                                                var d = s[l].match(/^language-(.+)$/);
                                                if (null !== d) {
                                                    a = d[1];
                                                    break
                                                }
                                            }
                                        r = t.helper.unescapeHTMLEntities(r), o.push(r), n[i].outerHTML = '<precode language="' + a + '" precodenum="' + i.toString() + '"></precode>'
                                    } else o.push(n[i].innerHTML), n[i].innerHTML = "", n[i].setAttribute("prenum", i.toString());
                                return o
                            }(o)
                        };
                        ! function e(t) {
                            for (var n = 0; n < t.childNodes.length; ++n) {
                                var o = t.childNodes[n];
                                3 === o.nodeType ? /\S/.test(o.nodeValue) || /^[ ]+$/.test(o.nodeValue) ? (o.nodeValue = o.nodeValue.split("\n").join(" "), o.nodeValue = o.nodeValue.replace(/(\s)+/g, "$1")) : (t.removeChild(o), --n) : 1 === o.nodeType && e(o)
                            }
                        }(o);
                        for (var r = o.childNodes, a = "", s = 0; s < r.length; s++) a += t.subParser("makeMarkdown.node")(r[s], i);
                        return a
                    }, this.setOption = function(e, t) {
                        n[e] = t
                    }, this.getOption = function(e) {
                        return n[e]
                    }, this.getOptions = function() {
                        return n
                    }, this.addExtension = function(e, t) {
                        p(e, t = t || null)
                    }, this.useExtension = function(e) {
                        p(e)
                    }, this.setFlavor = function(e) {
                        if (!a.hasOwnProperty(e)) throw Error(e + " flavor was not found");
                        var t = a[e];
                        for (var o in u = e, t) t.hasOwnProperty(o) && (n[o] = t[o])
                    }, this.getFlavor = function() {
                        return u
                    }, this.removeExtension = function(e) {
                        t.helper.isArray(e) || (e = [e]);
                        for (var n = 0; n < e.length; ++n) {
                            for (var o = e[n], i = 0; i < l.length; ++i) l[i] === o && l.splice(i, 1);
                            for (var r = 0; r < d.length; ++r) d[r] === o && d.splice(r, 1)
                        }
                    }, this.getAllExtensions = function() {
                        return {
                            language: l,
                            output: d
                        }
                    }, this.getMetadata = function(e) {
                        return e ? h.raw : h.parsed
                    }, this.getMetadataFormat = function() {
                        return h.format
                    }, this._setMetadataPair = function(e, t) {
                        h.parsed[e] = t
                    }, this._setMetadataFormat = function(e) {
                        h.format = e
                    }, this._setMetadataRaw = function(e) {
                        h.raw = e
                    }
                }, t.subParser("anchors", (function(e, n, o) {
                    var i = function(e, i, r, a, s, l, d) {
                        if (t.helper.isUndefined(d) && (d = ""), r = r.toLowerCase(), e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) a = "";
                        else if (!a) {
                            if (r || (r = i.toLowerCase().replace(/ ?\n/g, " ")), a = "#" + r, t.helper.isUndefined(o.gUrls[r])) return e;
                            a = o.gUrls[r], t.helper.isUndefined(o.gTitles[r]) || (d = o.gTitles[r])
                        }
                        var c = '<a href="' + (a = a.replace(t.helper.regexes.asteriskDashAndColon, t.helper.escapeCharactersCallback)) + '"';
                        return "" !== d && null !== d && (c += ' title="' + (d = (d = d.replace(/"/g, "&quot;")).replace(t.helper.regexes.asteriskDashAndColon, t.helper.escapeCharactersCallback)) + '"'), n.openLinksInNewWindow && !/^#/.test(a) && (c += ' rel="noopener noreferrer" target="¨E95Eblank"'), c += ">" + i + "</a>"
                    };
                    return e = (e = (e = (e = (e = o.converter._dispatch("anchors.before", e, n, o)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, i)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, i)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, i)).replace(/\[([^\[\]]+)]()()()()()/g, i), n.ghMentions && (e = e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim, (function(e, o, i, r, a) {
                        if ("\\" === i) return o + r;
                        if (!t.helper.isString(n.ghMentionsLink)) throw new Error("ghMentionsLink option must be a string");
                        var s = n.ghMentionsLink.replace(/\{u}/g, a),
                            l = "";
                        return n.openLinksInNewWindow && (l = ' rel="noopener noreferrer" target="¨E95Eblank"'), o + '<a href="' + s + '"' + l + ">" + r + "</a>"
                    }))), e = o.converter._dispatch("anchors.after", e, n, o)
                }));
                var c = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
                    u = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
                    h = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
                    p = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,
                    b = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
                    v = function(e) {
                        return function(n, o, i, r, a, s, l) {
                            var d = i = i.replace(t.helper.regexes.asteriskDashAndColon, t.helper.escapeCharactersCallback),
                                c = "",
                                u = "",
                                h = o || "",
                                p = l || "";
                            return /^www\./i.test(i) && (i = i.replace(/^www\./i, "http://www.")), e.excludeTrailingPunctuationFromURLs && s && (c = s), e.openLinksInNewWindow && (u = ' rel="noopener noreferrer" target="¨E95Eblank"'), h + '<a href="' + i + '"' + u + ">" + d + "</a>" + c + p
                        }
                    },
                    f = function(e, n) {
                        return function(o, i, r) {
                            var a = "mailto:";
                            return i = i || "", r = t.subParser("unescapeSpecialChars")(r, e, n), e.encodeEmails ? (a = t.helper.encodeEmailAddress(a + r), r = t.helper.encodeEmailAddress(r)) : a += r, i + '<a href="' + a + '">' + r + "</a>"
                        }
                    };
                t.subParser("autoLinks", (function(e, t, n) {
                    return e = (e = (e = n.converter._dispatch("autoLinks.before", e, t, n)).replace(h, v(t))).replace(b, f(t, n)), e = n.converter._dispatch("autoLinks.after", e, t, n)
                })), t.subParser("simplifiedAutoLinks", (function(e, t, n) {
                    return t.simplifiedAutoLink ? (e = n.converter._dispatch("simplifiedAutoLinks.before", e, t, n), e = (e = t.excludeTrailingPunctuationFromURLs ? e.replace(u, v(t)) : e.replace(c, v(t))).replace(p, f(t, n)), e = n.converter._dispatch("simplifiedAutoLinks.after", e, t, n)) : e
                })), t.subParser("blockGamut", (function(e, n, o) {
                    return e = o.converter._dispatch("blockGamut.before", e, n, o), e = t.subParser("blockQuotes")(e, n, o), e = t.subParser("headers")(e, n, o), e = t.subParser("horizontalRule")(e, n, o), e = t.subParser("lists")(e, n, o), e = t.subParser("codeBlocks")(e, n, o), e = t.subParser("tables")(e, n, o), e = t.subParser("hashHTMLBlocks")(e, n, o), e = t.subParser("paragraphs")(e, n, o), e = o.converter._dispatch("blockGamut.after", e, n, o)
                })), t.subParser("blockQuotes", (function(e, n, o) {
                    e = o.converter._dispatch("blockQuotes.before", e, n, o), e += "\n\n";
                    var i = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
                    return n.splitAdjacentBlockquotes && (i = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), e = e.replace(i, (function(e) {
                        return e = (e = (e = e.replace(/^[ \t]*>[ \t]?/gm, "")).replace(/¨0/g, "")).replace(/^[ \t]+$/gm, ""), e = t.subParser("githubCodeBlocks")(e, n, o), e = (e = (e = t.subParser("blockGamut")(e, n, o)).replace(/(^|\n)/g, "$1  ")).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, (function(e, t) {
                            var n = t;
                            return n = (n = n.replace(/^  /gm, "¨0")).replace(/¨0/g, "")
                        })), t.subParser("hashBlock")("<blockquote>\n" + e + "\n</blockquote>", n, o)
                    })), e = o.converter._dispatch("blockQuotes.after", e, n, o)
                })), t.subParser("codeBlocks", (function(e, n, o) {
                    return e = o.converter._dispatch("codeBlocks.before", e, n, o), e = (e = (e += "¨0").replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g, (function(e, i, r) {
                        var a = i,
                            s = r,
                            l = "\n";
                        return a = t.subParser("outdent")(a, n, o), a = t.subParser("encodeCode")(a, n, o), a = (a = (a = t.subParser("detab")(a, n, o)).replace(/^\n+/g, "")).replace(/\n+$/g, ""), n.omitExtraWLInCodeBlocks && (l = ""), a = "<pre><code>" + a + l + "</code></pre>", t.subParser("hashBlock")(a, n, o) + s
                    }))).replace(/¨0/, ""), e = o.converter._dispatch("codeBlocks.after", e, n, o)
                })), t.subParser("codeSpans", (function(e, n, o) {
                    return void 0 === (e = o.converter._dispatch("codeSpans.before", e, n, o)) && (e = ""), e = e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, (function(e, i, r, a) {
                        var s = a;
                        return s = (s = s.replace(/^([ \t]*)/g, "")).replace(/[ \t]*$/g, ""), s = i + "<code>" + (s = t.subParser("encodeCode")(s, n, o)) + "</code>", s = t.subParser("hashHTMLSpans")(s, n, o)
                    })), e = o.converter._dispatch("codeSpans.after", e, n, o)
                })), t.subParser("completeHTMLDocument", (function(e, t, n) {
                    if (!t.completeHTMLDocument) return e;
                    e = n.converter._dispatch("completeHTMLDocument.before", e, t, n);
                    var o = "html",
                        i = "<!DOCTYPE HTML>\n",
                        r = "",
                        a = '<meta charset="utf-8">\n',
                        s = "",
                        l = "";
                    for (var d in void 0 !== n.metadata.parsed.doctype && (i = "<!DOCTYPE " + n.metadata.parsed.doctype + ">\n", "html" !== (o = n.metadata.parsed.doctype.toString().toLowerCase()) && "html5" !== o || (a = '<meta charset="utf-8">')), n.metadata.parsed)
                        if (n.metadata.parsed.hasOwnProperty(d)) switch (d.toLowerCase()) {
                            case "doctype":
                                break;
                            case "title":
                                r = "<title>" + n.metadata.parsed.title + "</title>\n";
                                break;
                            case "charset":
                                a = "html" === o || "html5" === o ? '<meta charset="' + n.metadata.parsed.charset + '">\n' : '<meta name="charset" content="' + n.metadata.parsed.charset + '">\n';
                                break;
                            case "language":
                            case "lang":
                                s = ' lang="' + n.metadata.parsed[d] + '"', l += '<meta name="' + d + '" content="' + n.metadata.parsed[d] + '">\n';
                                break;
                            default:
                                l += '<meta name="' + d + '" content="' + n.metadata.parsed[d] + '">\n'
                        }
                    return e = i + "<html" + s + ">\n<head>\n" + r + a + l + "</head>\n<body>\n" + e.trim() + "\n</body>\n</html>", e = n.converter._dispatch("completeHTMLDocument.after", e, t, n)
                })), t.subParser("detab", (function(e, t, n) {
                    return e = (e = (e = (e = n.converter._dispatch("detab.before", e, t, n)).replace(/\t(?=\t)/g, "    ")).replace(/\t/g, "¨A¨B")).replace(/¨B(.+?)¨A/g, (function(e, t) {
                        for (var n = t, o = 4 - n.length % 4, i = 0; i < o; i++) n += " ";
                        return n
                    })), e = (e = e.replace(/¨A/g, "    ")).replace(/¨B/g, ""), e = n.converter._dispatch("detab.after", e, t, n)
                })), t.subParser("ellipsis", (function(e, t, n) {
                    return t.ellipsis ? (e = (e = n.converter._dispatch("ellipsis.before", e, t, n)).replace(/\.\.\./g, "…"), e = n.converter._dispatch("ellipsis.after", e, t, n)) : e
                })), t.subParser("emoji", (function(e, n, o) {
                    return n.emoji ? (e = (e = o.converter._dispatch("emoji.before", e, n, o)).replace(/:([\S]+?):/g, (function(e, n) {
                        return t.helper.emojis.hasOwnProperty(n) ? t.helper.emojis[n] : e
                    })), e = o.converter._dispatch("emoji.after", e, n, o)) : e
                })), t.subParser("encodeAmpsAndAngles", (function(e, t, n) {
                    return e = (e = (e = (e = (e = n.converter._dispatch("encodeAmpsAndAngles.before", e, t, n)).replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;")).replace(/<(?![a-z\/?$!])/gi, "&lt;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;"), e = n.converter._dispatch("encodeAmpsAndAngles.after", e, t, n)
                })), t.subParser("encodeBackslashEscapes", (function(e, n, o) {
                    return e = (e = (e = o.converter._dispatch("encodeBackslashEscapes.before", e, n, o)).replace(/\\(\\)/g, t.helper.escapeCharactersCallback)).replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, t.helper.escapeCharactersCallback), e = o.converter._dispatch("encodeBackslashEscapes.after", e, n, o)
                })), t.subParser("encodeCode", (function(e, n, o) {
                    return e = (e = o.converter._dispatch("encodeCode.before", e, n, o)).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, t.helper.escapeCharactersCallback), e = o.converter._dispatch("encodeCode.after", e, n, o)
                })), t.subParser("escapeSpecialCharsWithinTagAttributes", (function(e, n, o) {
                    return e = (e = (e = o.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", e, n, o)).replace(/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, (function(e) {
                        return e.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, t.helper.escapeCharactersCallback)
                    }))).replace(/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi, (function(e) {
                        return e.replace(/([\\`*_~=|])/g, t.helper.escapeCharactersCallback)
                    })), e = o.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", e, n, o)
                })), t.subParser("githubCodeBlocks", (function(e, n, o) {
                    return n.ghCodeBlocks ? (e = o.converter._dispatch("githubCodeBlocks.before", e, n, o), e = (e = (e += "¨0").replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, (function(e, i, r, a) {
                        var s = n.omitExtraWLInCodeBlocks ? "" : "\n";
                        return a = t.subParser("encodeCode")(a, n, o), a = "<pre><code" + (r ? ' class="' + r + " language-" + r + '"' : "") + ">" + (a = (a = (a = t.subParser("detab")(a, n, o)).replace(/^\n+/g, "")).replace(/\n+$/g, "")) + s + "</code></pre>", a = t.subParser("hashBlock")(a, n, o), "\n\n¨G" + (o.ghCodeBlocks.push({
                            text: e,
                            codeblock: a
                        }) - 1) + "G\n\n"
                    }))).replace(/¨0/, ""), o.converter._dispatch("githubCodeBlocks.after", e, n, o)) : e
                })), t.subParser("hashBlock", (function(e, t, n) {
                    return e = (e = n.converter._dispatch("hashBlock.before", e, t, n)).replace(/(^\n+|\n+$)/g, ""), e = "\n\n¨K" + (n.gHtmlBlocks.push(e) - 1) + "K\n\n", e = n.converter._dispatch("hashBlock.after", e, t, n)
                })), t.subParser("hashCodeTags", (function(e, n, o) {
                    return e = o.converter._dispatch("hashCodeTags.before", e, n, o), e = t.helper.replaceRecursiveRegExp(e, (function(e, i, r, a) {
                        var s = r + t.subParser("encodeCode")(i, n, o) + a;
                        return "¨C" + (o.gHtmlSpans.push(s) - 1) + "C"
                    }), "<code\\b[^>]*>", "</code>", "gim"), e = o.converter._dispatch("hashCodeTags.after", e, n, o)
                })), t.subParser("hashElement", (function(e, t, n) {
                    return function(e, t) {
                        var o = t;
                        return o = (o = (o = o.replace(/\n\n/g, "\n")).replace(/^\n/, "")).replace(/\n+$/g, ""), o = "\n\n¨K" + (n.gHtmlBlocks.push(o) - 1) + "K\n\n"
                    }
                })), t.subParser("hashHTMLBlocks", (function(e, n, o) {
                    e = o.converter._dispatch("hashHTMLBlocks.before", e, n, o);
                    var i = ["pre", "div", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "table", "dl", "ol", "ul", "script", "noscript", "form", "fieldset", "iframe", "math", "style", "section", "header", "footer", "nav", "article", "aside", "address", "audio", "canvas", "figure", "hgroup", "output", "video", "p"],
                        r = function(e, t, n, i) {
                            var r = e;
                            return -1 !== n.search(/\bmarkdown\b/) && (r = n + o.converter.makeHtml(t) + i), "\n\n¨K" + (o.gHtmlBlocks.push(r) - 1) + "K\n\n"
                        };
                    n.backslashEscapesHTMLTags && (e = e.replace(/\\<(\/?[^>]+?)>/g, (function(e, t) {
                        return "&lt;" + t + "&gt;"
                    })));
                    for (var a = 0; a < i.length; ++a)
                        for (var s, l = new RegExp("^ {0,3}(<" + i[a] + "\\b[^>]*>)", "im"), d = "<" + i[a] + "\\b[^>]*>", c = "</" + i[a] + ">"; - 1 !== (s = t.helper.regexIndexOf(e, l));) {
                            var u = t.helper.splitAtIndex(e, s),
                                h = t.helper.replaceRecursiveRegExp(u[1], r, d, c, "im");
                            if (h === u[1]) break;
                            e = u[0].concat(h)
                        }
                    return e = e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, t.subParser("hashElement")(e, n, o)), e = (e = t.helper.replaceRecursiveRegExp(e, (function(e) {
                        return "\n\n¨K" + (o.gHtmlBlocks.push(e) - 1) + "K\n\n"
                    }), "^ {0,3}\x3c!--", "--\x3e", "gm")).replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, t.subParser("hashElement")(e, n, o)), e = o.converter._dispatch("hashHTMLBlocks.after", e, n, o)
                })), t.subParser("hashHTMLSpans", (function(e, t, n) {
                    function o(e) {
                        return "¨C" + (n.gHtmlSpans.push(e) - 1) + "C"
                    }
                    return e = (e = (e = (e = (e = n.converter._dispatch("hashHTMLSpans.before", e, t, n)).replace(/<[^>]+?\/>/gi, (function(e) {
                        return o(e)
                    }))).replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, (function(e) {
                        return o(e)
                    }))).replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, (function(e) {
                        return o(e)
                    }))).replace(/<[^>]+?>/gi, (function(e) {
                        return o(e)
                    })), e = n.converter._dispatch("hashHTMLSpans.after", e, t, n)
                })), t.subParser("unhashHTMLSpans", (function(e, t, n) {
                    e = n.converter._dispatch("unhashHTMLSpans.before", e, t, n);
                    for (var o = 0; o < n.gHtmlSpans.length; ++o) {
                        for (var i = n.gHtmlSpans[o], r = 0;
                            /¨C(\d+)C/.test(i);) {
                            var a = RegExp.$1;
                            if (i = i.replace("¨C" + a + "C", n.gHtmlSpans[a]), 10 === r) {
                                console.error("maximum nesting of 10 spans reached!!!");
                                break
                            }++r
                        }
                        e = e.replace("¨C" + o + "C", i)
                    }
                    return e = n.converter._dispatch("unhashHTMLSpans.after", e, t, n)
                })), t.subParser("hashPreCodeTags", (function(e, n, o) {
                    return e = o.converter._dispatch("hashPreCodeTags.before", e, n, o), e = t.helper.replaceRecursiveRegExp(e, (function(e, i, r, a) {
                        var s = r + t.subParser("encodeCode")(i, n, o) + a;
                        return "\n\n¨G" + (o.ghCodeBlocks.push({
                            text: e,
                            codeblock: s
                        }) - 1) + "G\n\n"
                    }), "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), e = o.converter._dispatch("hashPreCodeTags.after", e, n, o)
                })), t.subParser("headers", (function(e, n, o) {
                    e = o.converter._dispatch("headers.before", e, n, o);
                    var i = isNaN(parseInt(n.headerLevelStart)) ? 1 : parseInt(n.headerLevelStart),
                        r = n.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
                        a = n.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
                    e = (e = e.replace(r, (function(e, r) {
                        var a = t.subParser("spanGamut")(r, n, o),
                            s = n.noHeaderId ? "" : ' id="' + l(r) + '"',
                            d = "<h" + i + s + ">" + a + "</h" + i + ">";
                        return t.subParser("hashBlock")(d, n, o)
                    }))).replace(a, (function(e, r) {
                        var a = t.subParser("spanGamut")(r, n, o),
                            s = n.noHeaderId ? "" : ' id="' + l(r) + '"',
                            d = i + 1,
                            c = "<h" + d + s + ">" + a + "</h" + d + ">";
                        return t.subParser("hashBlock")(c, n, o)
                    }));
                    var s = n.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;

                    function l(e) {
                        var i, r;
                        if (n.customizedHeaderId) {
                            var a = e.match(/\{([^{]+?)}\s*$/);
                            a && a[1] && (e = a[1])
                        }
                        return i = e, r = t.helper.isString(n.prefixHeaderId) ? n.prefixHeaderId : !0 === n.prefixHeaderId ? "section-" : "", n.rawPrefixHeaderId || (i = r + i), i = n.ghCompatibleHeaderId ? i.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : n.rawHeaderId ? i.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : i.replace(/[^\w]/g, "").toLowerCase(), n.rawPrefixHeaderId && (i = r + i), o.hashLinkCounts[i] ? i = i + "-" + o.hashLinkCounts[i]++ : o.hashLinkCounts[i] = 1, i
                    }
                    return e = e.replace(s, (function(e, r, a) {
                        var s = a;
                        n.customizedHeaderId && (s = a.replace(/\s?\{([^{]+?)}\s*$/, ""));
                        var d = t.subParser("spanGamut")(s, n, o),
                            c = n.noHeaderId ? "" : ' id="' + l(a) + '"',
                            u = i - 1 + r.length,
                            h = "<h" + u + c + ">" + d + "</h" + u + ">";
                        return t.subParser("hashBlock")(h, n, o)
                    })), e = o.converter._dispatch("headers.after", e, n, o)
                })), t.subParser("horizontalRule", (function(e, n, o) {
                    e = o.converter._dispatch("horizontalRule.before", e, n, o);
                    var i = t.subParser("hashBlock")("<hr />", n, o);
                    return e = (e = (e = e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, i)).replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, i)).replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, i), e = o.converter._dispatch("horizontalRule.after", e, n, o)
                })), t.subParser("images", (function(e, n, o) {
                    function i(e, n, i, r, a, s, l, d) {
                        var c = o.gUrls,
                            u = o.gTitles,
                            h = o.gDimensions;
                        if (i = i.toLowerCase(), d || (d = ""), e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) r = "";
                        else if ("" === r || null === r) {
                            if ("" !== i && null !== i || (i = n.toLowerCase().replace(/ ?\n/g, " ")), r = "#" + i, t.helper.isUndefined(c[i])) return e;
                            r = c[i], t.helper.isUndefined(u[i]) || (d = u[i]), t.helper.isUndefined(h[i]) || (a = h[i].width, s = h[i].height)
                        }
                        n = n.replace(/"/g, "&quot;").replace(t.helper.regexes.asteriskDashAndColon, t.helper.escapeCharactersCallback);
                        var p = '<img src="' + (r = r.replace(t.helper.regexes.asteriskDashAndColon, t.helper.escapeCharactersCallback)) + '" alt="' + n + '"';
                        return d && t.helper.isString(d) && (p += ' title="' + (d = d.replace(/"/g, "&quot;").replace(t.helper.regexes.asteriskDashAndColon, t.helper.escapeCharactersCallback)) + '"'), a && s && (p += ' width="' + (a = "*" === a ? "auto" : a) + '"', p += ' height="' + (s = "*" === s ? "auto" : s) + '"'), p += " />"
                    }
                    return e = (e = (e = (e = (e = (e = o.converter._dispatch("images.before", e, n, o)).replace(/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, i)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, (function(e, t, n, o, r, a, s, l) {
                        return i(e, t, n, o = o.replace(/\s/g, ""), r, a, 0, l)
                    }))).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, i)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, i)).replace(/!\[([^\[\]]+)]()()()()()/g, i), e = o.converter._dispatch("images.after", e, n, o)
                })), t.subParser("italicsAndBold", (function(e, t, n) {
                    function o(e, t, n) {
                        return t + e + n
                    }
                    return e = n.converter._dispatch("italicsAndBold.before", e, t, n), t.literalMidWordUnderscores ? e = (e = (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, (function(e, t) {
                        return o(t, "<strong><em>", "</em></strong>")
                    }))).replace(/\b__(\S[\s\S]*?)__\b/g, (function(e, t) {
                        return o(t, "<strong>", "</strong>")
                    }))).replace(/\b_(\S[\s\S]*?)_\b/g, (function(e, t) {
                        return o(t, "<em>", "</em>")
                    })) : (e = e.replace(/___(\S[\s\S]*?)___/g, (function(e, t) {
                        return /\S$/.test(t) ? o(t, "<strong><em>", "</em></strong>") : e
                    })), e = e.replace(/__(\S[\s\S]*?)__/g, (function(e, t) {
                        return /\S$/.test(t) ? o(t, "<strong>", "</strong>") : e
                    })), e = e.replace(/_([^\s_][\s\S]*?)_/g, (function(e, t) {
                        return /\S$/.test(t) ? o(t, "<em>", "</em>") : e
                    }))), t.literalMidWordAsterisks ? e = (e = (e = e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, (function(e, t, n) {
                        return o(n, t + "<strong><em>", "</em></strong>")
                    }))).replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, (function(e, t, n) {
                        return o(n, t + "<strong>", "</strong>")
                    }))).replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, (function(e, t, n) {
                        return o(n, t + "<em>", "</em>")
                    })) : (e = e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, (function(e, t) {
                        return /\S$/.test(t) ? o(t, "<strong><em>", "</em></strong>") : e
                    })), e = e.replace(/\*\*(\S[\s\S]*?)\*\*/g, (function(e, t) {
                        return /\S$/.test(t) ? o(t, "<strong>", "</strong>") : e
                    })), e = e.replace(/\*([^\s*][\s\S]*?)\*/g, (function(e, t) {
                        return /\S$/.test(t) ? o(t, "<em>", "</em>") : e
                    }))), e = n.converter._dispatch("italicsAndBold.after", e, t, n)
                })), t.subParser("lists", (function(e, n, o) {
                    function i(e, i) {
                        o.gListLevel++, e = e.replace(/\n{2,}$/, "\n");
                        var r = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
                            a = /\n[ \t]*\n(?!¨0)/.test(e += "¨0");
                        return n.disableForced4SpacesIndentedSublists && (r = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), e = (e = e.replace(r, (function(e, i, r, s, l, d, c) {
                            c = c && "" !== c.trim();
                            var u = t.subParser("outdent")(l, n, o),
                                h = "";
                            return d && n.tasklists && (h = ' class="task-list-item" style="list-style-type: none;"', u = u.replace(/^[ \t]*\[(x|X| )?]/m, (function() {
                                var e = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                                return c && (e += " checked"), e += ">"
                            }))), u = u.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, (function(e) {
                                return "¨A" + e
                            })), i || u.search(/\n{2,}/) > -1 ? (u = t.subParser("githubCodeBlocks")(u, n, o), u = t.subParser("blockGamut")(u, n, o)) : (u = (u = t.subParser("lists")(u, n, o)).replace(/\n$/, ""), u = (u = t.subParser("hashHTMLBlocks")(u, n, o)).replace(/\n\n+/g, "\n\n"), u = a ? t.subParser("paragraphs")(u, n, o) : t.subParser("spanGamut")(u, n, o)), u = "<li" + h + ">" + (u = u.replace("¨A", "")) + "</li>\n"
                        }))).replace(/¨0/g, ""), o.gListLevel--, i && (e = e.replace(/\s+$/, "")), e
                    }

                    function r(e, t) {
                        if ("ol" === t) {
                            var n = e.match(/^ *(\d+)\./);
                            if (n && "1" !== n[1]) return ' start="' + n[1] + '"'
                        }
                        return ""
                    }

                    function a(e, t, o) {
                        var a = n.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm,
                            s = n.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm,
                            l = "ul" === t ? a : s,
                            d = "";
                        if (-1 !== e.search(l)) ! function n(c) {
                            var u = c.search(l),
                                h = r(e, t); - 1 !== u ? (d += "\n\n<" + t + h + ">\n" + i(c.slice(0, u), !!o) + "</" + t + ">\n", l = "ul" == (t = "ul" === t ? "ol" : "ul") ? a : s, n(c.slice(u))) : d += "\n\n<" + t + h + ">\n" + i(c, !!o) + "</" + t + ">\n"
                        }(e);
                        else {
                            var c = r(e, t);
                            d = "\n\n<" + t + c + ">\n" + i(e, !!o) + "</" + t + ">\n"
                        }
                        return d
                    }
                    return e = o.converter._dispatch("lists.before", e, n, o), e += "¨0", e = (e = o.gListLevel ? e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, (function(e, t, n) {
                        return a(t, n.search(/[*+-]/g) > -1 ? "ul" : "ol", !0)
                    })) : e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, (function(e, t, n, o) {
                        return a(n, o.search(/[*+-]/g) > -1 ? "ul" : "ol", !1)
                    }))).replace(/¨0/, ""), e = o.converter._dispatch("lists.after", e, n, o)
                })), t.subParser("metadata", (function(e, t, n) {
                    if (!t.metadata) return e;

                    function o(e) {
                        n.metadata.raw = e, (e = (e = e.replace(/&/g, "&amp;").replace(/"/g, "&quot;")).replace(/\n {4}/g, " ")).replace(/^([\S ]+): +([\s\S]+?)$/gm, (function(e, t, o) {
                            return n.metadata.parsed[t] = o, ""
                        }))
                    }
                    return e = (e = (e = (e = n.converter._dispatch("metadata.before", e, t, n)).replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, (function(e, t, n) {
                        return o(n), "¨M"
                    }))).replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, (function(e, t, i) {
                        return t && (n.metadata.format = t), o(i), "¨M"
                    }))).replace(/¨M/g, ""), e = n.converter._dispatch("metadata.after", e, t, n)
                })), t.subParser("outdent", (function(e, t, n) {
                    return e = (e = (e = n.converter._dispatch("outdent.before", e, t, n)).replace(/^(\t|[ ]{1,4})/gm, "¨0")).replace(/¨0/g, ""), e = n.converter._dispatch("outdent.after", e, t, n)
                })), t.subParser("paragraphs", (function(e, n, o) {
                    for (var i = (e = (e = (e = o.converter._dispatch("paragraphs.before", e, n, o)).replace(/^\n+/g, "")).replace(/\n+$/g, "")).split(/\n{2,}/g), r = [], a = i.length, s = 0; s < a; s++) {
                        var l = i[s];
                        l.search(/¨(K|G)(\d+)\1/g) >= 0 ? r.push(l) : l.search(/\S/) >= 0 && (l = (l = t.subParser("spanGamut")(l, n, o)).replace(/^([ \t]*)/g, "<p>"), l += "</p>", r.push(l))
                    }
                    for (a = r.length, s = 0; s < a; s++) {
                        for (var d = "", c = r[s], u = !1;
                            /¨(K|G)(\d+)\1/.test(c);) {
                            var h = RegExp.$1,
                                p = RegExp.$2;
                            d = (d = "K" === h ? o.gHtmlBlocks[p] : u ? t.subParser("encodeCode")(o.ghCodeBlocks[p].text, n, o) : o.ghCodeBlocks[p].codeblock).replace(/\$/g, "$$$$"), c = c.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, d), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(c) && (u = !0)
                        }
                        r[s] = c
                    }
                    return e = (e = (e = r.join("\n")).replace(/^\n+/g, "")).replace(/\n+$/g, ""), o.converter._dispatch("paragraphs.after", e, n, o)
                })), t.subParser("runExtension", (function(e, t, n, o) {
                    if (e.filter) t = e.filter(t, o.converter, n);
                    else if (e.regex) {
                        var i = e.regex;
                        i instanceof RegExp || (i = new RegExp(i, "g")), t = t.replace(i, e.replace)
                    }
                    return t
                })), t.subParser("spanGamut", (function(e, n, o) {
                    return e = o.converter._dispatch("spanGamut.before", e, n, o), e = t.subParser("codeSpans")(e, n, o), e = t.subParser("escapeSpecialCharsWithinTagAttributes")(e, n, o), e = t.subParser("encodeBackslashEscapes")(e, n, o), e = t.subParser("images")(e, n, o), e = t.subParser("anchors")(e, n, o), e = t.subParser("autoLinks")(e, n, o), e = t.subParser("simplifiedAutoLinks")(e, n, o), e = t.subParser("emoji")(e, n, o), e = t.subParser("underline")(e, n, o), e = t.subParser("italicsAndBold")(e, n, o), e = t.subParser("strikethrough")(e, n, o), e = t.subParser("ellipsis")(e, n, o), e = t.subParser("hashHTMLSpans")(e, n, o), e = t.subParser("encodeAmpsAndAngles")(e, n, o), n.simpleLineBreaks ? /\n\n¨K/.test(e) || (e = e.replace(/\n+/g, "<br />\n")) : e = e.replace(/  +\n/g, "<br />\n"), e = o.converter._dispatch("spanGamut.after", e, n, o)
                })), t.subParser("strikethrough", (function(e, n, o) {
                    return n.strikethrough && (e = (e = o.converter._dispatch("strikethrough.before", e, n, o)).replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, (function(e, i) {
                        return function(e) {
                            return n.simplifiedAutoLink && (e = t.subParser("simplifiedAutoLinks")(e, n, o)), "<del>" + e + "</del>"
                        }(i)
                    })), e = o.converter._dispatch("strikethrough.after", e, n, o)), e
                })), t.subParser("stripLinkDefinitions", (function(e, n, o) {
                    var i = function(i, r, a, s, l, d, c) {
                        return r = r.toLowerCase(), e.toLowerCase().split(r).length - 1 < 2 ? i : (a.match(/^data:.+?\/.+?;base64,/) ? o.gUrls[r] = a.replace(/\s/g, "") : o.gUrls[r] = t.subParser("encodeAmpsAndAngles")(a, n, o), d ? d + c : (c && (o.gTitles[r] = c.replace(/"|'/g, "&quot;")), n.parseImgDimensions && s && l && (o.gDimensions[r] = {
                            width: s,
                            height: l
                        }), ""))
                    };
                    return e = (e = (e = (e += "¨0").replace(/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm, i)).replace(/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, i)).replace(/¨0/, "")
                })), t.subParser("tables", (function(e, n, o) {
                    if (!n.tables) return e;

                    function i(e, i) {
                        return "<td" + i + ">" + t.subParser("spanGamut")(e, n, o) + "</td>\n"
                    }

                    function r(e) {
                        var r, a = e.split("\n");
                        for (r = 0; r < a.length; ++r) /^ {0,3}\|/.test(a[r]) && (a[r] = a[r].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(a[r]) && (a[r] = a[r].replace(/\|[ \t]*$/, "")), a[r] = t.subParser("codeSpans")(a[r], n, o);
                        var s, l, d, c, u = a[0].split("|").map((function(e) {
                                return e.trim()
                            })),
                            h = a[1].split("|").map((function(e) {
                                return e.trim()
                            })),
                            p = [],
                            b = [],
                            v = [],
                            f = [];
                        for (a.shift(), a.shift(), r = 0; r < a.length; ++r) "" !== a[r].trim() && p.push(a[r].split("|").map((function(e) {
                            return e.trim()
                        })));
                        if (u.length < h.length) return e;
                        for (r = 0; r < h.length; ++r) v.push((s = h[r], /^:[ \t]*--*$/.test(s) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(s) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(s) ? ' style="text-align:center;"' : ""));
                        for (r = 0; r < u.length; ++r) t.helper.isUndefined(v[r]) && (v[r] = ""), b.push((l = u[r], d = v[r], c = void 0, c = "", l = l.trim(), (n.tablesHeaderId || n.tableHeaderId) && (c = ' id="' + l.replace(/ /g, "_").toLowerCase() + '"'), "<th" + c + d + ">" + (l = t.subParser("spanGamut")(l, n, o)) + "</th>\n"));
                        for (r = 0; r < p.length; ++r) {
                            for (var g = [], m = 0; m < b.length; ++m) t.helper.isUndefined(p[r][m]), g.push(i(p[r][m], v[m]));
                            f.push(g)
                        }
                        return function(e, t) {
                            for (var n = "<table>\n<thead>\n<tr>\n", o = e.length, i = 0; i < o; ++i) n += e[i];
                            for (n += "</tr>\n</thead>\n<tbody>\n", i = 0; i < t.length; ++i) {
                                n += "<tr>\n";
                                for (var r = 0; r < o; ++r) n += t[i][r];
                                n += "</tr>\n"
                            }
                            return n + "</tbody>\n</table>\n"
                        }(b, f)
                    }
                    return e = (e = (e = (e = o.converter._dispatch("tables.before", e, n, o)).replace(/\\(\|)/g, t.helper.escapeCharactersCallback)).replace(/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, r)).replace(/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm, r), e = o.converter._dispatch("tables.after", e, n, o)
                })), t.subParser("underline", (function(e, n, o) {
                    return n.underline ? (e = o.converter._dispatch("underline.before", e, n, o), n.literalMidWordUnderscores ? e = (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, (function(e, t) {
                        return "<u>" + t + "</u>"
                    }))).replace(/\b__(\S[\s\S]*?)__\b/g, (function(e, t) {
                        return "<u>" + t + "</u>"
                    })) : (e = e.replace(/___(\S[\s\S]*?)___/g, (function(e, t) {
                        return /\S$/.test(t) ? "<u>" + t + "</u>" : e
                    })), e = e.replace(/__(\S[\s\S]*?)__/g, (function(e, t) {
                        return /\S$/.test(t) ? "<u>" + t + "</u>" : e
                    }))), e = e.replace(/(_)/g, t.helper.escapeCharactersCallback), e = o.converter._dispatch("underline.after", e, n, o)) : e
                })), t.subParser("unescapeSpecialChars", (function(e, t, n) {
                    return e = (e = n.converter._dispatch("unescapeSpecialChars.before", e, t, n)).replace(/¨E(\d+)E/g, (function(e, t) {
                        var n = parseInt(t);
                        return String.fromCharCode(n)
                    })), e = n.converter._dispatch("unescapeSpecialChars.after", e, t, n)
                })), t.subParser("makeMarkdown.blockquote", (function(e, n) {
                    var o = "";
                    if (e.hasChildNodes())
                        for (var i = e.childNodes, r = i.length, a = 0; a < r; ++a) {
                            var s = t.subParser("makeMarkdown.node")(i[a], n);
                            "" !== s && (o += s)
                        }
                    return o = "> " + (o = o.trim()).split("\n").join("\n> ")
                })), t.subParser("makeMarkdown.codeBlock", (function(e, t) {
                    var n = e.getAttribute("language"),
                        o = e.getAttribute("precodenum");
                    return "```" + n + "\n" + t.preList[o] + "\n```"
                })), t.subParser("makeMarkdown.codeSpan", (function(e) {
                    return "`" + e.innerHTML + "`"
                })), t.subParser("makeMarkdown.emphasis", (function(e, n) {
                    var o = "";
                    if (e.hasChildNodes()) {
                        o += "*";
                        for (var i = e.childNodes, r = i.length, a = 0; a < r; ++a) o += t.subParser("makeMarkdown.node")(i[a], n);
                        o += "*"
                    }
                    return o
                })), t.subParser("makeMarkdown.header", (function(e, n, o) {
                    var i = new Array(o + 1).join("#"),
                        r = "";
                    if (e.hasChildNodes()) {
                        r = i + " ";
                        for (var a = e.childNodes, s = a.length, l = 0; l < s; ++l) r += t.subParser("makeMarkdown.node")(a[l], n)
                    }
                    return r
                })), t.subParser("makeMarkdown.hr", (function() {
                    return "---"
                })), t.subParser("makeMarkdown.image", (function(e) {
                    var t = "";
                    return e.hasAttribute("src") && (t += "![" + e.getAttribute("alt") + "](", t += "<" + e.getAttribute("src") + ">", e.hasAttribute("width") && e.hasAttribute("height") && (t += " =" + e.getAttribute("width") + "x" + e.getAttribute("height")), e.hasAttribute("title") && (t += ' "' + e.getAttribute("title") + '"'), t += ")"), t
                })), t.subParser("makeMarkdown.links", (function(e, n) {
                    var o = "";
                    if (e.hasChildNodes() && e.hasAttribute("href")) {
                        var i = e.childNodes,
                            r = i.length;
                        o = "[";
                        for (var a = 0; a < r; ++a) o += t.subParser("makeMarkdown.node")(i[a], n);
                        o += "](", o += "<" + e.getAttribute("href") + ">", e.hasAttribute("title") && (o += ' "' + e.getAttribute("title") + '"'), o += ")"
                    }
                    return o
                })), t.subParser("makeMarkdown.list", (function(e, n, o) {
                    var i = "";
                    if (!e.hasChildNodes()) return "";
                    for (var r = e.childNodes, a = r.length, s = e.getAttribute("start") || 1, l = 0; l < a; ++l) void 0 !== r[l].tagName && "li" === r[l].tagName.toLowerCase() && (i += ("ol" === o ? s.toString() + ". " : "- ") + t.subParser("makeMarkdown.listItem")(r[l], n), ++s);
                    return (i += "\n\x3c!-- --\x3e\n").trim()
                })), t.subParser("makeMarkdown.listItem", (function(e, n) {
                    for (var o = "", i = e.childNodes, r = i.length, a = 0; a < r; ++a) o += t.subParser("makeMarkdown.node")(i[a], n);
                    return /\n$/.test(o) ? o = o.split("\n").join("\n    ").replace(/^ {4}$/gm, "").replace(/\n\n+/g, "\n\n") : o += "\n", o
                })), t.subParser("makeMarkdown.node", (function(e, n, o) {
                    o = o || !1;
                    var i = "";
                    if (3 === e.nodeType) return t.subParser("makeMarkdown.txt")(e, n);
                    if (8 === e.nodeType) return "\x3c!--" + e.data + "--\x3e\n\n";
                    if (1 !== e.nodeType) return "";
                    switch (e.tagName.toLowerCase()) {
                        case "h1":
                            o || (i = t.subParser("makeMarkdown.header")(e, n, 1) + "\n\n");
                            break;
                        case "h2":
                            o || (i = t.subParser("makeMarkdown.header")(e, n, 2) + "\n\n");
                            break;
                        case "h3":
                            o || (i = t.subParser("makeMarkdown.header")(e, n, 3) + "\n\n");
                            break;
                        case "h4":
                            o || (i = t.subParser("makeMarkdown.header")(e, n, 4) + "\n\n");
                            break;
                        case "h5":
                            o || (i = t.subParser("makeMarkdown.header")(e, n, 5) + "\n\n");
                            break;
                        case "h6":
                            o || (i = t.subParser("makeMarkdown.header")(e, n, 6) + "\n\n");
                            break;
                        case "p":
                            o || (i = t.subParser("makeMarkdown.paragraph")(e, n) + "\n\n");
                            break;
                        case "blockquote":
                            o || (i = t.subParser("makeMarkdown.blockquote")(e, n) + "\n\n");
                            break;
                        case "hr":
                            o || (i = t.subParser("makeMarkdown.hr")(e, n) + "\n\n");
                            break;
                        case "ol":
                            o || (i = t.subParser("makeMarkdown.list")(e, n, "ol") + "\n\n");
                            break;
                        case "ul":
                            o || (i = t.subParser("makeMarkdown.list")(e, n, "ul") + "\n\n");
                            break;
                        case "precode":
                            o || (i = t.subParser("makeMarkdown.codeBlock")(e, n) + "\n\n");
                            break;
                        case "pre":
                            o || (i = t.subParser("makeMarkdown.pre")(e, n) + "\n\n");
                            break;
                        case "table":
                            o || (i = t.subParser("makeMarkdown.table")(e, n) + "\n\n");
                            break;
                        case "code":
                            i = t.subParser("makeMarkdown.codeSpan")(e, n);
                            break;
                        case "em":
                        case "i":
                            i = t.subParser("makeMarkdown.emphasis")(e, n);
                            break;
                        case "strong":
                        case "b":
                            i = t.subParser("makeMarkdown.strong")(e, n);
                            break;
                        case "del":
                            i = t.subParser("makeMarkdown.strikethrough")(e, n);
                            break;
                        case "a":
                            i = t.subParser("makeMarkdown.links")(e, n);
                            break;
                        case "img":
                            i = t.subParser("makeMarkdown.image")(e, n);
                            break;
                        default:
                            i = e.outerHTML + "\n\n"
                    }
                    return i
                })), t.subParser("makeMarkdown.paragraph", (function(e, n) {
                    var o = "";
                    if (e.hasChildNodes())
                        for (var i = e.childNodes, r = i.length, a = 0; a < r; ++a) o += t.subParser("makeMarkdown.node")(i[a], n);
                    return o = o.trim()
                })), t.subParser("makeMarkdown.pre", (function(e, t) {
                    var n = e.getAttribute("prenum");
                    return "<pre>" + t.preList[n] + "</pre>"
                })), t.subParser("makeMarkdown.strikethrough", (function(e, n) {
                    var o = "";
                    if (e.hasChildNodes()) {
                        o += "~~";
                        for (var i = e.childNodes, r = i.length, a = 0; a < r; ++a) o += t.subParser("makeMarkdown.node")(i[a], n);
                        o += "~~"
                    }
                    return o
                })), t.subParser("makeMarkdown.strong", (function(e, n) {
                    var o = "";
                    if (e.hasChildNodes()) {
                        o += "**";
                        for (var i = e.childNodes, r = i.length, a = 0; a < r; ++a) o += t.subParser("makeMarkdown.node")(i[a], n);
                        o += "**"
                    }
                    return o
                })), t.subParser("makeMarkdown.table", (function(e, n) {
                    var o, i, r = "",
                        a = [
                            [],
                            []
                        ],
                        s = e.querySelectorAll("thead>tr>th"),
                        l = e.querySelectorAll("tbody>tr");
                    for (o = 0; o < s.length; ++o) {
                        var d = t.subParser("makeMarkdown.tableCell")(s[o], n),
                            c = "---";
                        if (s[o].hasAttribute("style")) switch (s[o].getAttribute("style").toLowerCase().replace(/\s/g, "")) {
                            case "text-align:left;":
                                c = ":---";
                                break;
                            case "text-align:right;":
                                c = "---:";
                                break;
                            case "text-align:center;":
                                c = ":---:"
                        }
                        a[0][o] = d.trim(), a[1][o] = c
                    }
                    for (o = 0; o < l.length; ++o) {
                        var u = a.push([]) - 1,
                            h = l[o].getElementsByTagName("td");
                        for (i = 0; i < s.length; ++i) {
                            var p = " ";
                            void 0 !== h[i] && (p = t.subParser("makeMarkdown.tableCell")(h[i], n)), a[u].push(p)
                        }
                    }
                    var b = 3;
                    for (o = 0; o < a.length; ++o)
                        for (i = 0; i < a[o].length; ++i) {
                            var v = a[o][i].length;
                            v > b && (b = v)
                        }
                    for (o = 0; o < a.length; ++o) {
                        for (i = 0; i < a[o].length; ++i) 1 === o ? ":" === a[o][i].slice(-1) ? a[o][i] = t.helper.padEnd(a[o][i].slice(-1), b - 1, "-") + ":" : a[o][i] = t.helper.padEnd(a[o][i], b, "-") : a[o][i] = t.helper.padEnd(a[o][i], b);
                        r += "| " + a[o].join(" | ") + " |\n"
                    }
                    return r.trim()
                })), t.subParser("makeMarkdown.tableCell", (function(e, n) {
                    var o = "";
                    if (!e.hasChildNodes()) return "";
                    for (var i = e.childNodes, r = i.length, a = 0; a < r; ++a) o += t.subParser("makeMarkdown.node")(i[a], n, !0);
                    return o.trim()
                })), t.subParser("makeMarkdown.txt", (function(e) {
                    var n = e.nodeValue;
                    return n = (n = n.replace(/ +/g, " ")).replace(/¨NBSP;/g, " "), n = (n = (n = (n = (n = (n = (n = (n = (n = t.helper.unescapeHTMLEntities(n)).replace(/([*_~|`])/g, "\\$1")).replace(/^(\s*)>/g, "\\$1>")).replace(/^#/gm, "\\#")).replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3")).replace(/^( {0,3}\d+)\./gm, "$1\\.")).replace(/^( {0,3})([+-])/gm, "$1\\$2")).replace(/]([\s]*)\(/g, "\\]$1\\(")).replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:")
                })), Ee.exports ? Ee.exports = t : this.showdown = t
            }.call(Se);
        var Oe = $e(Ce.exports),
            Be = {
                exports: {}
            };
        /*! @license DOMPurify 3.1.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.5/LICENSE */
        ! function(e) {
            e.exports = function() {
                const {
                    entries: e,
                    setPrototypeOf: t,
                    isFrozen: n,
                    getPrototypeOf: o,
                    getOwnPropertyDescriptor: i
                } = Object;
                let {
                    freeze: r,
                    seal: a,
                    create: s
                } = Object, {
                    apply: l,
                    construct: d
                } = "undefined" != typeof Reflect && Reflect;
                r || (r = function(e) {
                    return e
                }), a || (a = function(e) {
                    return e
                }), l || (l = function(e, t, n) {
                    return e.apply(t, n)
                }), d || (d = function(e, t) {
                    return new e(...t)
                });
                const c = k(Array.prototype.forEach),
                    u = k(Array.prototype.pop),
                    h = k(Array.prototype.push),
                    p = k(String.prototype.toLowerCase),
                    b = k(String.prototype.toString),
                    v = k(String.prototype.match),
                    f = k(String.prototype.replace),
                    g = k(String.prototype.indexOf),
                    m = k(String.prototype.trim),
                    w = k(Object.prototype.hasOwnProperty),
                    _ = k(RegExp.prototype.test),
                    y = z(TypeError);

                function k(e) {
                    return function(t) {
                        for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
                        return l(e, t, o)
                    }
                }

                function z(e) {
                    return function() {
                        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                        return d(e, n)
                    }
                }

                function A(e, o) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p;
                    t && t(e, null);
                    let r = o.length;
                    for (; r--;) {
                        let t = o[r];
                        if ("string" == typeof t) {
                            const e = i(t);
                            e !== t && (n(o) || (o[r] = e), t = e)
                        }
                        e[t] = !0
                    }
                    return e
                }

                function x(e) {
                    for (let t = 0; t < e.length; t++) w(e, t) || (e[t] = null);
                    return e
                }

                function S(t) {
                    const n = s(null);
                    for (const [o, i] of e(t)) w(t, o) && (Array.isArray(i) ? n[o] = x(i) : i && "object" == typeof i && i.constructor === Object ? n[o] = S(i) : n[o] = i);
                    return n
                }

                function $(e, t) {
                    for (; null !== e;) {
                        const n = i(e, t);
                        if (n) {
                            if (n.get) return k(n.get);
                            if ("function" == typeof n.value) return k(n.value)
                        }
                        e = o(e)
                    }

                    function n() {
                        return null
                    }
                    return n
                }
                const E = r(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
                    C = r(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
                    O = r(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
                    B = r(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
                    L = r(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
                    T = r(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
                    P = r(["#text"]),
                    N = r(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]),
                    M = r(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
                    D = r(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
                    j = r(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                    R = a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
                    I = a(/<%[\w\W]*|[\w\W]*%>/gm),
                    F = a(/\${[\w\W]*}/gm),
                    U = a(/^data-[\-\w.\u00B7-\uFFFF]/),
                    H = a(/^aria-[\-\w]+$/),
                    q = a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                    W = a(/^(?:\w+script|data):/i),
                    V = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
                    G = a(/^html$/i),
                    K = a(/^[a-z][.\w]*(-[.\w]+)+$/i);
                var Y = Object.freeze({
                    __proto__: null,
                    MUSTACHE_EXPR: R,
                    ERB_EXPR: I,
                    TMPLIT_EXPR: F,
                    DATA_ATTR: U,
                    ARIA_ATTR: H,
                    IS_ALLOWED_URI: q,
                    IS_SCRIPT_OR_DATA: W,
                    ATTR_WHITESPACE: V,
                    DOCTYPE_NAME: G,
                    CUSTOM_ELEMENT: K
                });
                const X = {
                        element: 1,
                        attribute: 2,
                        text: 3,
                        cdataSection: 4,
                        entityReference: 5,
                        entityNode: 6,
                        progressingInstruction: 7,
                        comment: 8,
                        document: 9,
                        documentType: 10,
                        documentFragment: 11,
                        notation: 12
                    },
                    Z = function() {
                        return "undefined" == typeof window ? null : window
                    },
                    J = function(e, t) {
                        if ("object" != typeof e || "function" != typeof e.createPolicy) return null;
                        let n = null;
                        const o = "data-tt-policy-suffix";
                        t && t.hasAttribute(o) && (n = t.getAttribute(o));
                        const i = "dompurify" + (n ? "#" + n : "");
                        try {
                            return e.createPolicy(i, {
                                createHTML: e => e,
                                createScriptURL: e => e
                            })
                        } catch (e) {
                            return console.warn("TrustedTypes policy " + i + " could not be created."), null
                        }
                    };

                function Q() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z();
                    const n = e => Q(e);
                    if (n.version = "3.1.5", n.removed = [], !t || !t.document || t.document.nodeType !== X.document) return n.isSupported = !1, n;
                    let {
                        document: o
                    } = t;
                    const i = o,
                        a = i.currentScript,
                        {
                            DocumentFragment: l,
                            HTMLTemplateElement: d,
                            Node: k,
                            Element: z,
                            NodeFilter: x,
                            NamedNodeMap: R = t.NamedNodeMap || t.MozNamedAttrMap,
                            HTMLFormElement: I,
                            DOMParser: F,
                            trustedTypes: U
                        } = t,
                        H = z.prototype,
                        W = $(H, "cloneNode"),
                        V = $(H, "nextSibling"),
                        K = $(H, "childNodes"),
                        ee = $(H, "parentNode");
                    if ("function" == typeof d) {
                        const e = o.createElement("template");
                        e.content && e.content.ownerDocument && (o = e.content.ownerDocument)
                    }
                    let te, ne = "";
                    const {
                        implementation: oe,
                        createNodeIterator: ie,
                        createDocumentFragment: re,
                        getElementsByTagName: ae
                    } = o, {
                        importNode: se
                    } = i;
                    let le = {};
                    n.isSupported = "function" == typeof e && "function" == typeof ee && oe && void 0 !== oe.createHTMLDocument;
                    const {
                        MUSTACHE_EXPR: de,
                        ERB_EXPR: ce,
                        TMPLIT_EXPR: ue,
                        DATA_ATTR: he,
                        ARIA_ATTR: pe,
                        IS_SCRIPT_OR_DATA: be,
                        ATTR_WHITESPACE: ve,
                        CUSTOM_ELEMENT: fe
                    } = Y;
                    let {
                        IS_ALLOWED_URI: ge
                    } = Y, me = null;
                    const we = A({}, [...E, ...C, ...O, ...L, ...P]);
                    let _e = null;
                    const ye = A({}, [...N, ...M, ...D, ...j]);
                    let ke = Object.seal(s(null, {
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
                        })),
                        ze = null,
                        Ae = null,
                        xe = !0,
                        Se = !0,
                        $e = !1,
                        Ee = !0,
                        Ce = !1,
                        Oe = !0,
                        Be = !1,
                        Le = !1,
                        Te = !1,
                        Pe = !1,
                        Ne = !1,
                        Me = !1,
                        De = !0,
                        je = !1;
                    const Re = "user-content-";
                    let Ie = !0,
                        Fe = !1,
                        Ue = {},
                        He = null;
                    const qe = A({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
                    let We = null;
                    const Ve = A({}, ["audio", "video", "img", "source", "image", "track"]);
                    let Ge = null;
                    const Ke = A({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
                        Ye = "http://www.w3.org/1998/Math/MathML",
                        Xe = "http://www.w3.org/2000/svg",
                        Ze = "http://www.w3.org/1999/xhtml";
                    let Je = Ze,
                        Qe = !1,
                        et = null;
                    const tt = A({}, [Ye, Xe, Ze], b);
                    let nt = null;
                    const ot = ["application/xhtml+xml", "text/html"],
                        it = "text/html";
                    let rt = null,
                        at = null;
                    const st = o.createElement("form"),
                        lt = function(e) {
                            return e instanceof RegExp || e instanceof Function
                        },
                        dt = function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            if (!at || at !== e) {
                                if (e && "object" == typeof e || (e = {}), e = S(e), nt = -1 === ot.indexOf(e.PARSER_MEDIA_TYPE) ? it : e.PARSER_MEDIA_TYPE, rt = "application/xhtml+xml" === nt ? b : p, me = w(e, "ALLOWED_TAGS") ? A({}, e.ALLOWED_TAGS, rt) : we, _e = w(e, "ALLOWED_ATTR") ? A({}, e.ALLOWED_ATTR, rt) : ye, et = w(e, "ALLOWED_NAMESPACES") ? A({}, e.ALLOWED_NAMESPACES, b) : tt, Ge = w(e, "ADD_URI_SAFE_ATTR") ? A(S(Ke), e.ADD_URI_SAFE_ATTR, rt) : Ke, We = w(e, "ADD_DATA_URI_TAGS") ? A(S(Ve), e.ADD_DATA_URI_TAGS, rt) : Ve, He = w(e, "FORBID_CONTENTS") ? A({}, e.FORBID_CONTENTS, rt) : qe, ze = w(e, "FORBID_TAGS") ? A({}, e.FORBID_TAGS, rt) : {}, Ae = w(e, "FORBID_ATTR") ? A({}, e.FORBID_ATTR, rt) : {}, Ue = !!w(e, "USE_PROFILES") && e.USE_PROFILES, xe = !1 !== e.ALLOW_ARIA_ATTR, Se = !1 !== e.ALLOW_DATA_ATTR, $e = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Ee = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR, Ce = e.SAFE_FOR_TEMPLATES || !1, Oe = !1 !== e.SAFE_FOR_XML, Be = e.WHOLE_DOCUMENT || !1, Pe = e.RETURN_DOM || !1, Ne = e.RETURN_DOM_FRAGMENT || !1, Me = e.RETURN_TRUSTED_TYPE || !1, Te = e.FORCE_BODY || !1, De = !1 !== e.SANITIZE_DOM, je = e.SANITIZE_NAMED_PROPS || !1, Ie = !1 !== e.KEEP_CONTENT, Fe = e.IN_PLACE || !1, ge = e.ALLOWED_URI_REGEXP || q, Je = e.NAMESPACE || Ze, ke = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && lt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ke.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && lt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ke.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (ke.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ce && (Se = !1), Ne && (Pe = !0), Ue && (me = A({}, P), _e = [], !0 === Ue.html && (A(me, E), A(_e, N)), !0 === Ue.svg && (A(me, C), A(_e, M), A(_e, j)), !0 === Ue.svgFilters && (A(me, O), A(_e, M), A(_e, j)), !0 === Ue.mathMl && (A(me, L), A(_e, D), A(_e, j))), e.ADD_TAGS && (me === we && (me = S(me)), A(me, e.ADD_TAGS, rt)), e.ADD_ATTR && (_e === ye && (_e = S(_e)), A(_e, e.ADD_ATTR, rt)), e.ADD_URI_SAFE_ATTR && A(Ge, e.ADD_URI_SAFE_ATTR, rt), e.FORBID_CONTENTS && (He === qe && (He = S(He)), A(He, e.FORBID_CONTENTS, rt)), Ie && (me["#text"] = !0), Be && A(me, ["html", "head", "body"]), me.table && (A(me, ["tbody"]), delete ze.tbody), e.TRUSTED_TYPES_POLICY) {
                                    if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML) throw y('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                                    if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL) throw y('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                                    te = e.TRUSTED_TYPES_POLICY, ne = te.createHTML("")
                                } else void 0 === te && (te = J(U, a)), null !== te && "string" == typeof ne && (ne = te.createHTML(""));
                                r && r(e), at = e
                            }
                        },
                        ct = A({}, ["mi", "mo", "mn", "ms", "mtext"]),
                        ut = A({}, ["foreignobject", "annotation-xml"]),
                        ht = A({}, ["title", "style", "font", "a", "script"]),
                        pt = A({}, [...C, ...O, ...B]),
                        bt = A({}, [...L, ...T]),
                        vt = function(e) {
                            let t = ee(e);
                            t && t.tagName || (t = {
                                namespaceURI: Je,
                                tagName: "template"
                            });
                            const n = p(e.tagName),
                                o = p(t.tagName);
                            return !!et[e.namespaceURI] && (e.namespaceURI === Xe ? t.namespaceURI === Ze ? "svg" === n : t.namespaceURI === Ye ? "svg" === n && ("annotation-xml" === o || ct[o]) : Boolean(pt[n]) : e.namespaceURI === Ye ? t.namespaceURI === Ze ? "math" === n : t.namespaceURI === Xe ? "math" === n && ut[o] : Boolean(bt[n]) : e.namespaceURI === Ze ? !(t.namespaceURI === Xe && !ut[o]) && !(t.namespaceURI === Ye && !ct[o]) && !bt[n] && (ht[n] || !pt[n]) : !("application/xhtml+xml" !== nt || !et[e.namespaceURI]))
                        },
                        ft = function(e) {
                            h(n.removed, {
                                element: e
                            });
                            try {
                                e.parentNode.removeChild(e)
                            } catch (t) {
                                e.remove()
                            }
                        },
                        gt = function(e, t) {
                            try {
                                h(n.removed, {
                                    attribute: t.getAttributeNode(e),
                                    from: t
                                })
                            } catch (e) {
                                h(n.removed, {
                                    attribute: null,
                                    from: t
                                })
                            }
                            if (t.removeAttribute(e), "is" === e && !_e[e])
                                if (Pe || Ne) try {
                                    ft(t)
                                } catch (e) {} else try {
                                    t.setAttribute(e, "")
                                } catch (e) {}
                        },
                        mt = function(e) {
                            let t = null,
                                n = null;
                            if (Te) e = "<remove></remove>" + e;
                            else {
                                const t = v(e, /^[\r\n\t ]+/);
                                n = t && t[0]
                            }
                            "application/xhtml+xml" === nt && Je === Ze && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                            const i = te ? te.createHTML(e) : e;
                            if (Je === Ze) try {
                                t = (new F).parseFromString(i, nt)
                            } catch (e) {}
                            if (!t || !t.documentElement) {
                                t = oe.createDocument(Je, "template", null);
                                try {
                                    t.documentElement.innerHTML = Qe ? ne : i
                                } catch (e) {}
                            }
                            const r = t.body || t.documentElement;
                            return e && n && r.insertBefore(o.createTextNode(n), r.childNodes[0] || null), Je === Ze ? ae.call(t, Be ? "html" : "body")[0] : Be ? t.documentElement : r
                        },
                        wt = function(e) {
                            return ie.call(e.ownerDocument || e, e, x.SHOW_ELEMENT | x.SHOW_COMMENT | x.SHOW_TEXT | x.SHOW_PROCESSING_INSTRUCTION | x.SHOW_CDATA_SECTION, null)
                        },
                        _t = function(e) {
                            return e instanceof I && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof R) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
                        },
                        yt = function(e) {
                            return "function" == typeof k && e instanceof k
                        },
                        kt = function(e, t, o) {
                            le[e] && c(le[e], (e => {
                                e.call(n, t, o, at)
                            }))
                        },
                        zt = function(e) {
                            let t = null;
                            if (kt("beforeSanitizeElements", e, null), _t(e)) return ft(e), !0;
                            const o = rt(e.nodeName);
                            if (kt("uponSanitizeElement", e, {
                                    tagName: o,
                                    allowedTags: me
                                }), e.hasChildNodes() && !yt(e.firstElementChild) && _(/<[/\w]/g, e.innerHTML) && _(/<[/\w]/g, e.textContent)) return ft(e), !0;
                            if (e.nodeType === X.progressingInstruction) return ft(e), !0;
                            if (Oe && e.nodeType === X.comment && _(/<[/\w]/g, e.data)) return ft(e), !0;
                            if (!me[o] || ze[o]) {
                                if (!ze[o] && xt(o)) {
                                    if (ke.tagNameCheck instanceof RegExp && _(ke.tagNameCheck, o)) return !1;
                                    if (ke.tagNameCheck instanceof Function && ke.tagNameCheck(o)) return !1
                                }
                                if (Ie && !He[o]) {
                                    const t = ee(e) || e.parentNode,
                                        n = K(e) || e.childNodes;
                                    if (n && t)
                                        for (let o = n.length - 1; o >= 0; --o) {
                                            const i = W(n[o], !0);
                                            i.__removalCount = (e.__removalCount || 0) + 1, t.insertBefore(i, V(e))
                                        }
                                }
                                return ft(e), !0
                            }
                            return e instanceof z && !vt(e) ? (ft(e), !0) : "noscript" !== o && "noembed" !== o && "noframes" !== o || !_(/<\/no(script|embed|frames)/i, e.innerHTML) ? (Ce && e.nodeType === X.text && (t = e.textContent, c([de, ce, ue], (e => {
                                t = f(t, e, " ")
                            })), e.textContent !== t && (h(n.removed, {
                                element: e.cloneNode()
                            }), e.textContent = t)), kt("afterSanitizeElements", e, null), !1) : (ft(e), !0)
                        },
                        At = function(e, t, n) {
                            if (De && ("id" === t || "name" === t) && (n in o || n in st)) return !1;
                            if (Se && !Ae[t] && _(he, t));
                            else if (xe && _(pe, t));
                            else if (!_e[t] || Ae[t]) {
                                if (!(xt(e) && (ke.tagNameCheck instanceof RegExp && _(ke.tagNameCheck, e) || ke.tagNameCheck instanceof Function && ke.tagNameCheck(e)) && (ke.attributeNameCheck instanceof RegExp && _(ke.attributeNameCheck, t) || ke.attributeNameCheck instanceof Function && ke.attributeNameCheck(t)) || "is" === t && ke.allowCustomizedBuiltInElements && (ke.tagNameCheck instanceof RegExp && _(ke.tagNameCheck, n) || ke.tagNameCheck instanceof Function && ke.tagNameCheck(n)))) return !1
                            } else if (Ge[t]);
                            else if (_(ge, f(n, ve, "")));
                            else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== g(n, "data:") || !We[e])
                                if ($e && !_(be, f(n, ve, "")));
                                else if (n) return !1;
                            return !0
                        },
                        xt = function(e) {
                            return "annotation-xml" !== e && v(e, fe)
                        },
                        St = function(e) {
                            kt("beforeSanitizeAttributes", e, null);
                            const {
                                attributes: t
                            } = e;
                            if (!t) return;
                            const o = {
                                attrName: "",
                                attrValue: "",
                                keepAttr: !0,
                                allowedAttributes: _e
                            };
                            let i = t.length;
                            for (; i--;) {
                                const r = t[i],
                                    {
                                        name: a,
                                        namespaceURI: s,
                                        value: l
                                    } = r,
                                    d = rt(a);
                                let h = "value" === a ? l : m(l);
                                if (o.attrName = d, o.attrValue = h, o.keepAttr = !0, o.forceKeepAttr = void 0, kt("uponSanitizeAttribute", e, o), h = o.attrValue, o.forceKeepAttr) continue;
                                if (gt(a, e), !o.keepAttr) continue;
                                if (!Ee && _(/\/>/i, h)) {
                                    gt(a, e);
                                    continue
                                }
                                if (Oe && _(/((--!?|])>)|<\/(style|title)/i, h)) {
                                    gt(a, e);
                                    continue
                                }
                                Ce && c([de, ce, ue], (e => {
                                    h = f(h, e, " ")
                                }));
                                const p = rt(e.nodeName);
                                if (At(p, d, h)) {
                                    if (!je || "id" !== d && "name" !== d || (gt(a, e), h = Re + h), te && "object" == typeof U && "function" == typeof U.getAttributeType)
                                        if (s);
                                        else switch (U.getAttributeType(p, d)) {
                                            case "TrustedHTML":
                                                h = te.createHTML(h);
                                                break;
                                            case "TrustedScriptURL":
                                                h = te.createScriptURL(h)
                                        }
                                    try {
                                        s ? e.setAttributeNS(s, a, h) : e.setAttribute(a, h), _t(e) ? ft(e) : u(n.removed)
                                    } catch (e) {}
                                }
                            }
                            kt("afterSanitizeAttributes", e, null)
                        },
                        $t = function e(t) {
                            let n = null;
                            const o = wt(t);
                            for (kt("beforeSanitizeShadowDOM", t, null); n = o.nextNode();) kt("uponSanitizeShadowNode", n, null), zt(n) || (n.content instanceof l && e(n.content), St(n));
                            kt("afterSanitizeShadowDOM", t, null)
                        };
                    return n.sanitize = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            o = null,
                            r = null,
                            a = null,
                            s = null;
                        if (Qe = !e, Qe && (e = "\x3c!--\x3e"), "string" != typeof e && !yt(e)) {
                            if ("function" != typeof e.toString) throw y("toString is not a function");
                            if ("string" != typeof(e = e.toString())) throw y("dirty is not a string, aborting")
                        }
                        if (!n.isSupported) return e;
                        if (Le || dt(t), n.removed = [], "string" == typeof e && (Fe = !1), Fe) {
                            if (e.nodeName) {
                                const t = rt(e.nodeName);
                                if (!me[t] || ze[t]) throw y("root node is forbidden and cannot be sanitized in-place")
                            }
                        } else if (e instanceof k) o = mt("\x3c!----\x3e"), r = o.ownerDocument.importNode(e, !0), r.nodeType === X.element && "BODY" === r.nodeName || "HTML" === r.nodeName ? o = r : o.appendChild(r);
                        else {
                            if (!Pe && !Ce && !Be && -1 === e.indexOf("<")) return te && Me ? te.createHTML(e) : e;
                            if (o = mt(e), !o) return Pe ? null : Me ? ne : ""
                        }
                        o && Te && ft(o.firstChild);
                        const d = wt(Fe ? e : o);
                        for (; a = d.nextNode();) zt(a) || (a.content instanceof l && $t(a.content), St(a));
                        if (Fe) return e;
                        if (Pe) {
                            if (Ne)
                                for (s = re.call(o.ownerDocument); o.firstChild;) s.appendChild(o.firstChild);
                            else s = o;
                            return (_e.shadowroot || _e.shadowrootmode) && (s = se.call(i, s, !0)), s
                        }
                        let u = Be ? o.outerHTML : o.innerHTML;
                        return Be && me["!doctype"] && o.ownerDocument && o.ownerDocument.doctype && o.ownerDocument.doctype.name && _(G, o.ownerDocument.doctype.name) && (u = "<!DOCTYPE " + o.ownerDocument.doctype.name + ">\n" + u), Ce && c([de, ce, ue], (e => {
                            u = f(u, e, " ")
                        })), te && Me ? te.createHTML(u) : u
                    }, n.setConfig = function() {
                        dt(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), Le = !0
                    }, n.clearConfig = function() {
                        at = null, Le = !1
                    }, n.isValidAttribute = function(e, t, n) {
                        at || dt({});
                        const o = rt(e),
                            i = rt(t);
                        return At(o, i, n)
                    }, n.addHook = function(e, t) {
                        "function" == typeof t && (le[e] = le[e] || [], h(le[e], t))
                    }, n.removeHook = function(e) {
                        if (le[e]) return u(le[e])
                    }, n.removeHooks = function(e) {
                        le[e] && (le[e] = [])
                    }, n.removeAllHooks = function() {
                        le = {}
                    }, n
                }
                var ee = Q();
                return ee
            }()
        }(Be);
        var Le = Be.exports;
        const Te = ["trb-image", "trb-icon"],
            Pe = ["icon", "size"],
            Ne = ({
                markdown: e,
                extendedElementAllowList: t = Te,
                extendedAttributeAllowList: n = Pe
            }) => (({
                html: e,
                extendedElementAllowList: t = Te,
                extendedAttributeAllowList: n = Pe
            }) => Le.sanitize(e, {
                ADD_TAGS: t,
                ADD_ATTR: n
            }))({
                html: (new Oe.Converter).makeHtml(e),
                extendedElementAllowList: t,
                extendedAttributeAllowList: n
            }),
            Me = "trb-tooltip",
            De = "trb-tooltip:place",
            je = "trb-tooltip:sticky",
            Re = ".trb-tooltip",
            Ie = ".trb-tooltip-extension",
            Fe = ".trb-tooltip-caret",
            Ue = "data-trb-tooltip-slot",
            He = "data-trb-tooltip-active",
            qe = "data-trb-tooltip-original-place";
        let We = 0;
        const Ve = e => {
                const t = e.querySelector(Re),
                    n = e.getAttribute(De);
                let o = n;
                e.hasAttribute(je) && e.removeAttribute(je);
                const i = t.getBoundingClientRect(),
                    r = i.top < 0,
                    a = i.left < 0,
                    s = i.right > (window.innerWidth || document.documentElement.clientWidth),
                    l = i.bottom > (window.innerHeight || document.documentElement.clientHeight);
                "top" === n && r && !l ? o = "bottom" : "bottom" === n && l && !r && (o = "top"), o !== n && (e.setAttribute(De, o), e.setAttribute(qe, n)), a && !s ? e.setAttribute(je, "left") : s && !a && e.setAttribute(je, "right")
            },
            Ge = e => {
                const t = e.getAttribute(De),
                    n = e.querySelector(Ie),
                    o = e.querySelector(Re).getBoundingClientRect(),
                    i = e.getBoundingClientRect(),
                    r = o.width < i.width ? o : i;
                n.style.width = `${r.width}px`, n.style.left = r.left - i.left + "px", "top" === t ? n.style.height = i.bottom - o.top + "px" : "bottom" === t && (n.style.height = o.bottom - i.top + "px")
            },
            Ke = e => {
                const t = e.target.querySelector(Re),
                    n = e.target.querySelector(Fe);
                e.target.hasAttribute(He) || (e.target.setAttribute(He, ""), document.addEventListener("keydown", Xe), t.hasAttribute("aria-hidden") && (t.removeAttribute("aria-hidden"), n.removeAttribute("aria-hidden")), Ve(e.target), Ge(e.target), e.target.dispatchEvent(new CustomEvent({
                    bubbles: !0,
                    cancelable: !0,
                    composed: !0,
                    detail: {
                        isVisible: !0
                    }
                })))
            },
            Ye = e => {
                const t = e.target.querySelector(`[${He}]`) || e.target,
                    n = t.querySelector(Re),
                    o = e.target.querySelector(Fe);
                !t.hasAttribute(He) || document.activeElement === t && "Escape" !== e.key || (t.removeAttribute(He), document.removeEventListener("keydown", Xe), n.setAttribute("aria-hidden", !0), o.setAttribute("aria-hidden", !0), t.hasAttribute(qe) && (t.setAttribute(De, t.getAttribute(qe)), t.removeAttribute(qe)), e.target.dispatchEvent(new CustomEvent({
                    bubbles: !0,
                    cancelable: !0,
                    composed: !0,
                    detail: {
                        isVisible: !1
                    }
                })))
            },
            Xe = e => {
                "Escape" === e.key && Ye(e)
            },
            Ze = e => {
                const t = e.querySelector(Re);
                t && t.remove();
                const n = e.querySelector(Ie);
                n && n.remove();
                const o = e.querySelector(Fe);
                o && o.remove();
                const i = document.createElement("div");
                i.classList.add("trb-tooltip"), i.setAttribute("aria-hidden", !0), i.setAttribute("role", "tooltip"), i.setAttribute("id", `trb-tooltip-${We}`), i.innerHTML = Ne({
                    markdown: `<div class="trb-tooltip-container">${e.getAttribute(Me)}</div>`
                });
                const r = document.createElement("div");
                r.setAttribute("aria-hidden", !0), r.classList.add("trb-tooltip-extension");
                const a = document.createElement("div");
                if (a.setAttribute("aria-hidden", !0), a.classList.add("trb-tooltip-caret"), e.setAttribute("aria-describedby", `trb-tooltip-${We}`), e.appendChild(r), e.appendChild(i), e.appendChild(a), e.hasAttribute(De) || e.setAttribute(De, "bottom"), e.shadowRoot && !e.shadowRoot.querySelector("slot:not([name])") && !e.hasAttribute(Ue)) {
                    const t = document.createElement("slot");
                    t.setAttribute("name", Me), i.setAttribute("slot", Me), r.setAttribute("slot", Me), a.setAttribute("slot", Me), e.shadowRoot.appendChild(t), e.setAttribute(Ue, "")
                }
                e._trbTooltipRo = new ResizeObserver(xe(350, (e => {
                    e.forEach((e => {
                        e.target.hasAttribute(He) && (Ve(e.target), Ge(e.target))
                    }))
                }))), e._trbTooltipRo.observe(e), e.addEventListener("mouseenter", Ke), e.addEventListener("focus", Ke), e.addEventListener("mouseleave", Ye), e.addEventListener("blur", Ye), e.addEventListener("keydown", Xe), We++
            };
        (({
            attribute: e,
            mOptions: t = {},
            onConnect: n,
            onDisconnect: o,
            onChildListChange: i,
            onAttributeChange: r,
            root: a = document.documentElement
        }) => {
            "loading" !== document.readyState ? _e({
                attribute: e,
                mOptions: t,
                onConnect: n,
                onDisconnect: o,
                onAttributeChange: r,
                onChildListChange: i,
                root: a
            }) : window.addEventListener("DOMContentLoaded", (() => _e({
                attribute: e,
                mOptions: t,
                onConnect: n,
                onDisconnect: o,
                onChildListChange: i,
                onAttributeChange: r,
                root: a
            })), {
                once: !0
            })
        })({
            attribute: Me,
            mOptions: {
                attributeFilter: [Me]
            },
            onConnect: e => {
                e.querySelectorAll(`[${Me}]`).forEach(Ze)
            },
            onChildListChange: e => {
                e.addedNodes.forEach((e => {
                    "function" == typeof e.querySelectorAll && e.querySelectorAll(`[${Me}]`).forEach((e => {
                        Ze(e)
                    }))
                }))
            },
            onAttributeChange: e => {
                const t = e.target.querySelector(Re),
                    n = e.target.getAttribute(Me);
                t ? n ? t.textContent = n : (e => {
                    const t = e.querySelector(Re),
                        n = e.querySelector(Ie),
                        o = e.querySelector(Fe);
                    t.remove(), n.remove(), o.remove(), e.removeAttribute("aria-describedby"), void 0 !== e.dataset.trbTooltipSlot && (e.shadowRoot.querySelector(`slot[name=${Me}`).remove(), e.removeAttribute(Ue)), e.removeEventListener("mouseenter", Ke), e.removeEventListener("focus", Ke), e.removeEventListener("mouseleave", Ye), e.removeEventListener("blur", Ye), e.removeEventListener("keydown", Xe)
                })(e.target) : Ze(e.target)
            }
        });
        /**
         * @license
         * Copyright 2019 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        const Je = globalThis,
            Qe = Je.ShadowRoot && (void 0 === Je.ShadyCSS || Je.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
            et = Symbol(),
            tt = new WeakMap;
        class nt {
            constructor(e, t, n) {
                if (this._$cssResult$ = !0, n !== et) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = e, this.t = t
            }
            get styleSheet() {
                let e = this.o;
                const t = this.t;
                if (Qe && void 0 === e) {
                    const n = void 0 !== t && 1 === t.length;
                    n && (e = tt.get(t)), void 0 === e && ((this.o = e = new CSSStyleSheet).replaceSync(this.cssText), n && tt.set(t, e))
                }
                return e
            }
            toString() {
                return this.cssText
            }
        }
        const ot = (e, ...t) => {
                const n = 1 === e.length ? e[0] : t.reduce(((t, n, o) => t + (e => {
                    if (!0 === e._$cssResult$) return e.cssText;
                    if ("number" == typeof e) return e;
                    throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
                })(n) + e[o + 1]), e[0]);
                return new nt(n, e, et)
            },
            it = Qe ? e => e : e => e instanceof CSSStyleSheet ? (e => {
                let t = "";
                for (const n of e.cssRules) t += n.cssText;
                return (e => new nt("string" == typeof e ? e : e + "", void 0, et))(t)
            })(e) : e
            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            ,
            {
                is: rt,
                defineProperty: at,
                getOwnPropertyDescriptor: st,
                getOwnPropertyNames: lt,
                getOwnPropertySymbols: dt,
                getPrototypeOf: ct
            } = Object,
            ut = globalThis,
            ht = ut.trustedTypes,
            pt = ht ? ht.emptyScript : "",
            bt = ut.reactiveElementPolyfillSupport,
            vt = (e, t) => e,
            ft = {
                toAttribute(e, t) {
                    switch (t) {
                        case Boolean:
                            e = e ? pt : null;
                            break;
                        case Object:
                        case Array:
                            e = null == e ? e : JSON.stringify(e)
                    }
                    return e
                },
                fromAttribute(e, t) {
                    let n = e;
                    switch (t) {
                        case Boolean:
                            n = null !== e;
                            break;
                        case Number:
                            n = null === e ? null : Number(e);
                            break;
                        case Object:
                        case Array:
                            try {
                                n = JSON.parse(e)
                            } catch (e) {
                                n = null
                            }
                    }
                    return n
                }
            },
            gt = (e, t) => !rt(e, t),
            mt = {
                attribute: !0,
                type: String,
                converter: ft,
                reflect: !1,
                hasChanged: gt
            };
        Symbol.metadata ??= Symbol("metadata"), ut.litPropertyMetadata ??= new WeakMap;
        class wt extends HTMLElement {
            static addInitializer(e) {
                this._$Ei(), (this.l ??= []).push(e)
            }
            static get observedAttributes() {
                return this.finalize(), this._$Eh && [...this._$Eh.keys()]
            }
            static createProperty(e, t = mt) {
                if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
                    const n = Symbol(),
                        o = this.getPropertyDescriptor(e, n, t);
                    void 0 !== o && at(this.prototype, e, o)
                }
            }
            static getPropertyDescriptor(e, t, n) {
                const {
                    get: o,
                    set: i
                } = st(this.prototype, e) ?? {
                    get() {
                        return this[t]
                    },
                    set(e) {
                        this[t] = e
                    }
                };
                return {
                    get() {
                        return o?.call(this)
                    },
                    set(t) {
                        const r = o?.call(this);
                        i.call(this, t), this.requestUpdate(e, r, n)
                    },
                    configurable: !0,
                    enumerable: !0
                }
            }
            static getPropertyOptions(e) {
                return this.elementProperties.get(e) ?? mt
            }
            static _$Ei() {
                if (this.hasOwnProperty(vt("elementProperties"))) return;
                const e = ct(this);
                e.finalize(), void 0 !== e.l && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties)
            }
            static finalize() {
                if (this.hasOwnProperty(vt("finalized"))) return;
                if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(vt("properties"))) {
                    const e = this.properties,
                        t = [...lt(e), ...dt(e)];
                    for (const n of t) this.createProperty(n, e[n])
                }
                const e = this[Symbol.metadata];
                if (null !== e) {
                    const t = litPropertyMetadata.get(e);
                    if (void 0 !== t)
                        for (const [e, n] of t) this.elementProperties.set(e, n)
                }
                this._$Eh = new Map;
                for (const [e, t] of this.elementProperties) {
                    const n = this._$Eu(e, t);
                    void 0 !== n && this._$Eh.set(n, e)
                }
                this.elementStyles = this.finalizeStyles(this.styles)
            }
            static finalizeStyles(e) {
                const t = [];
                if (Array.isArray(e)) {
                    const n = new Set(e.flat(1 / 0).reverse());
                    for (const e of n) t.unshift(it(e))
                } else void 0 !== e && t.push(it(e));
                return t
            }
            static _$Eu(e, t) {
                const n = t.attribute;
                return !1 === n ? void 0 : "string" == typeof n ? n : "string" == typeof e ? e.toLowerCase() : void 0
            }
            constructor() {
                super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev()
            }
            _$Ev() {
                this._$ES = new Promise((e => this.enableUpdating = e)), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e => e(this)))
            }
            addController(e) {
                (this._$EO ??= new Set).add(e), void 0 !== this.renderRoot && this.isConnected && e.hostConnected?.()
            }
            removeController(e) {
                this._$EO?.delete(e)
            }
            _$E_() {
                const e = new Map,
                    t = this.constructor.elementProperties;
                for (const n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
                e.size > 0 && (this._$Ep = e)
            }
            createRenderRoot() {
                const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
                return ((e, t) => {
                    if (Qe) e.adoptedStyleSheets = t.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet));
                    else
                        for (const n of t) {
                            const t = document.createElement("style"),
                                o = Je.litNonce;
                            void 0 !== o && t.setAttribute("nonce", o), t.textContent = n.cssText, e.appendChild(t)
                        }
                })(e, this.constructor.elementStyles), e
            }
            connectedCallback() {
                this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e => e.hostConnected?.()))
            }
            enableUpdating(e) {}
            disconnectedCallback() {
                this._$EO?.forEach((e => e.hostDisconnected?.()))
            }
            attributeChangedCallback(e, t, n) {
                this._$AK(e, n)
            }
            _$EC(e, t) {
                const n = this.constructor.elementProperties.get(e),
                    o = this.constructor._$Eu(e, n);
                if (void 0 !== o && !0 === n.reflect) {
                    const i = (void 0 !== n.converter?.toAttribute ? n.converter : ft).toAttribute(t, n.type);
                    this._$Em = e, null == i ? this.removeAttribute(o) : this.setAttribute(o, i), this._$Em = null
                }
            }
            _$AK(e, t) {
                const n = this.constructor,
                    o = n._$Eh.get(e);
                if (void 0 !== o && this._$Em !== o) {
                    const e = n.getPropertyOptions(o),
                        i = "function" == typeof e.converter ? {
                            fromAttribute: e.converter
                        } : void 0 !== e.converter?.fromAttribute ? e.converter : ft;
                    this._$Em = o, this[o] = i.fromAttribute(t, e.type), this._$Em = null
                }
            }
            requestUpdate(e, t, n) {
                if (void 0 !== e) {
                    if (n ??= this.constructor.getPropertyOptions(e), !(n.hasChanged ?? gt)(this[e], t)) return;
                    this.P(e, t, n)
                }!1 === this.isUpdatePending && (this._$ES = this._$ET())
            }
            P(e, t, n) {
                this._$AL.has(e) || this._$AL.set(e, t), !0 === n.reflect && this._$Em !== e && (this._$Ej ??= new Set).add(e)
            }
            async _$ET() {
                this.isUpdatePending = !0;
                try {
                    await this._$ES
                } catch (e) {
                    Promise.reject(e)
                }
                const e = this.scheduleUpdate();
                return null != e && await e, !this.isUpdatePending
            }
            scheduleUpdate() {
                return this.performUpdate()
            }
            performUpdate() {
                if (!this.isUpdatePending) return;
                if (!this.hasUpdated) {
                    if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                        for (const [e, t] of this._$Ep) this[e] = t;
                        this._$Ep = void 0
                    }
                    const e = this.constructor.elementProperties;
                    if (e.size > 0)
                        for (const [t, n] of e) !0 !== n.wrapped || this._$AL.has(t) || void 0 === this[t] || this.P(t, this[t], n)
                }
                let e = !1;
                const t = this._$AL;
                try {
                    e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((e => e.hostUpdate?.())), this.update(t)) : this._$EU()
                } catch (t) {
                    throw e = !1, this._$EU(), t
                }
                e && this._$AE(t)
            }
            willUpdate(e) {}
            _$AE(e) {
                this._$EO?.forEach((e => e.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e)
            }
            _$EU() {
                this._$AL = new Map, this.isUpdatePending = !1
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
                this._$Ej &&= this._$Ej.forEach((e => this._$EC(e, this[e]))), this._$EU()
            }
            updated(e) {}
            firstUpdated(e) {}
        }
        wt.elementStyles = [], wt.shadowRootOptions = {
            mode: "open"
        }, wt[vt("elementProperties")] = new Map, wt[vt("finalized")] = new Map, bt?.({
            ReactiveElement: wt
        }), (ut.reactiveElementVersions ??= []).push("2.0.4");
        /**
         * @license
         * Copyright 2017 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        const _t = globalThis,
            yt = _t.trustedTypes,
            kt = yt ? yt.createPolicy("lit-html", {
                createHTML: e => e
            }) : void 0,
            zt = "$lit$",
            At = `lit$${Math.random().toFixed(9).slice(2)}$`,
            xt = "?" + At,
            St = `<${xt}>`,
            $t = document,
            Et = () => $t.createComment(""),
            Ct = e => null === e || "object" != typeof e && "function" != typeof e,
            Ot = Array.isArray,
            Bt = "[ \t\n\f\r]",
            Lt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
            Tt = /-->/g,
            Pt = />/g,
            Nt = RegExp(`>|${Bt}(?:([^\\s"'>=/]+)(${Bt}*=${Bt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"),
            Mt = /'/g,
            Dt = /"/g,
            jt = /^(?:script|style|textarea|title)$/i,
            Rt = (e => (t, ...n) => ({
                _$litType$: e,
                strings: t,
                values: n
            }))(1),
            It = Symbol.for("lit-noChange"),
            Ft = Symbol.for("lit-nothing"),
            Ut = new WeakMap,
            Ht = $t.createTreeWalker($t, 129);

        function qt(e, t) {
            if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
            return void 0 !== kt ? kt.createHTML(t) : t
        }
        class Wt {
            constructor({
                strings: e,
                _$litType$: t
            }, n) {
                let o;
                this.parts = [];
                let i = 0,
                    r = 0;
                const a = e.length - 1,
                    s = this.parts,
                    [l, d] = ((e, t) => {
                        const n = e.length - 1,
                            o = [];
                        let i, r = 2 === t ? "<svg>" : "",
                            a = Lt;
                        for (let t = 0; t < n; t++) {
                            const n = e[t];
                            let s, l, d = -1,
                                c = 0;
                            for (; c < n.length && (a.lastIndex = c, l = a.exec(n), null !== l);) c = a.lastIndex, a === Lt ? "!--" === l[1] ? a = Tt : void 0 !== l[1] ? a = Pt : void 0 !== l[2] ? (jt.test(l[2]) && (i = RegExp("</" + l[2], "g")), a = Nt) : void 0 !== l[3] && (a = Nt) : a === Nt ? ">" === l[0] ? (a = i ?? Lt, d = -1) : void 0 === l[1] ? d = -2 : (d = a.lastIndex - l[2].length, s = l[1], a = void 0 === l[3] ? Nt : '"' === l[3] ? Dt : Mt) : a === Dt || a === Mt ? a = Nt : a === Tt || a === Pt ? a = Lt : (a = Nt, i = void 0);
                            const u = a === Nt && e[t + 1].startsWith("/>") ? " " : "";
                            r += a === Lt ? n + St : d >= 0 ? (o.push(s), n.slice(0, d) + zt + n.slice(d) + At + u) : n + At + (-2 === d ? t : u)
                        }
                        return [qt(e, r + (e[n] || "<?>") + (2 === t ? "</svg>" : "")), o]
                    })(e, t);
                if (this.el = Wt.createElement(l, n), Ht.currentNode = this.el.content, 2 === t) {
                    const e = this.el.content.firstChild;
                    e.replaceWith(...e.childNodes)
                }
                for (; null !== (o = Ht.nextNode()) && s.length < a;) {
                    if (1 === o.nodeType) {
                        if (o.hasAttributes())
                            for (const e of o.getAttributeNames())
                                if (e.endsWith(zt)) {
                                    const t = d[r++],
                                        n = o.getAttribute(e).split(At),
                                        a = /([.?@])?(.*)/.exec(t);
                                    s.push({
                                        type: 1,
                                        index: i,
                                        name: a[2],
                                        strings: n,
                                        ctor: "." === a[1] ? Xt : "?" === a[1] ? Zt : "@" === a[1] ? Jt : Yt
                                    }), o.removeAttribute(e)
                                } else e.startsWith(At) && (s.push({
                                    type: 6,
                                    index: i
                                }), o.removeAttribute(e));
                        if (jt.test(o.tagName)) {
                            const e = o.textContent.split(At),
                                t = e.length - 1;
                            if (t > 0) {
                                o.textContent = yt ? yt.emptyScript : "";
                                for (let n = 0; n < t; n++) o.append(e[n], Et()), Ht.nextNode(), s.push({
                                    type: 2,
                                    index: ++i
                                });
                                o.append(e[t], Et())
                            }
                        }
                    } else if (8 === o.nodeType)
                        if (o.data === xt) s.push({
                            type: 2,
                            index: i
                        });
                        else {
                            let e = -1;
                            for (; - 1 !== (e = o.data.indexOf(At, e + 1));) s.push({
                                type: 7,
                                index: i
                            }), e += At.length - 1
                        } i++
                }
            }
            static createElement(e, t) {
                const n = $t.createElement("template");
                return n.innerHTML = e, n
            }
        }

        function Vt(e, t, n = e, o) {
            if (t === It) return t;
            let i = void 0 !== o ? n._$Co?.[o] : n._$Cl;
            const r = Ct(t) ? void 0 : t._$litDirective$;
            return i?.constructor !== r && (i?._$AO?.(!1), void 0 === r ? i = void 0 : (i = new r(e), i._$AT(e, n, o)), void 0 !== o ? (n._$Co ??= [])[o] = i : n._$Cl = i), void 0 !== i && (t = Vt(e, i._$AS(e, t.values), i, o)), t
        }
        class Gt {
            constructor(e, t) {
                this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t
            }
            get parentNode() {
                return this._$AM.parentNode
            }
            get _$AU() {
                return this._$AM._$AU
            }
            u(e) {
                const {
                    el: {
                        content: t
                    },
                    parts: n
                } = this._$AD, o = (e?.creationScope ?? $t).importNode(t, !0);
                Ht.currentNode = o;
                let i = Ht.nextNode(),
                    r = 0,
                    a = 0,
                    s = n[0];
                for (; void 0 !== s;) {
                    if (r === s.index) {
                        let t;
                        2 === s.type ? t = new Kt(i, i.nextSibling, this, e) : 1 === s.type ? t = new s.ctor(i, s.name, s.strings, this, e) : 6 === s.type && (t = new Qt(i, this, e)), this._$AV.push(t), s = n[++a]
                    }
                    r !== s?.index && (i = Ht.nextNode(), r++)
                }
                return Ht.currentNode = $t, o
            }
            p(e) {
                let t = 0;
                for (const n of this._$AV) void 0 !== n && (void 0 !== n.strings ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++
            }
        }
        class Kt {
            get _$AU() {
                return this._$AM?._$AU ?? this._$Cv
            }
            constructor(e, t, n, o) {
                this.type = 2, this._$AH = Ft, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this._$Cv = o?.isConnected ?? !0
            }
            get parentNode() {
                let e = this._$AA.parentNode;
                const t = this._$AM;
                return void 0 !== t && 11 === e?.nodeType && (e = t.parentNode), e
            }
            get startNode() {
                return this._$AA
            }
            get endNode() {
                return this._$AB
            }
            _$AI(e, t = this) {
                e = Vt(this, e, t), Ct(e) ? e === Ft || null == e || "" === e ? (this._$AH !== Ft && this._$AR(), this._$AH = Ft) : e !== this._$AH && e !== It && this._(e) : void 0 !== e._$litType$ ? this.$(e) : void 0 !== e.nodeType ? this.T(e) : (e => Ot(e) || "function" == typeof e?.[Symbol.iterator])(e) ? this.k(e) : this._(e)
            }
            S(e) {
                return this._$AA.parentNode.insertBefore(e, this._$AB)
            }
            T(e) {
                this._$AH !== e && (this._$AR(), this._$AH = this.S(e))
            }
            _(e) {
                this._$AH !== Ft && Ct(this._$AH) ? this._$AA.nextSibling.data = e : this.T($t.createTextNode(e)), this._$AH = e
            }
            $(e) {
                const {
                    values: t,
                    _$litType$: n
                } = e, o = "number" == typeof n ? this._$AC(e) : (void 0 === n.el && (n.el = Wt.createElement(qt(n.h, n.h[0]), this.options)), n);
                if (this._$AH?._$AD === o) this._$AH.p(t);
                else {
                    const e = new Gt(o, this),
                        n = e.u(this.options);
                    e.p(t), this.T(n), this._$AH = e
                }
            }
            _$AC(e) {
                let t = Ut.get(e.strings);
                return void 0 === t && Ut.set(e.strings, t = new Wt(e)), t
            }
            k(e) {
                Ot(this._$AH) || (this._$AH = [], this._$AR());
                const t = this._$AH;
                let n, o = 0;
                for (const i of e) o === t.length ? t.push(n = new Kt(this.S(Et()), this.S(Et()), this, this.options)) : n = t[o], n._$AI(i), o++;
                o < t.length && (this._$AR(n && n._$AB.nextSibling, o), t.length = o)
            }
            _$AR(e = this._$AA.nextSibling, t) {
                for (this._$AP?.(!1, !0, t); e && e !== this._$AB;) {
                    const t = e.nextSibling;
                    e.remove(), e = t
                }
            }
            setConnected(e) {
                void 0 === this._$AM && (this._$Cv = e, this._$AP?.(e))
            }
        }
        class Yt {
            get tagName() {
                return this.element.tagName
            }
            get _$AU() {
                return this._$AM._$AU
            }
            constructor(e, t, n, o, i) {
                this.type = 1, this._$AH = Ft, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = i, n.length > 2 || "" !== n[0] || "" !== n[1] ? (this._$AH = Array(n.length - 1).fill(new String), this.strings = n) : this._$AH = Ft
            }
            _$AI(e, t = this, n, o) {
                const i = this.strings;
                let r = !1;
                if (void 0 === i) e = Vt(this, e, t, 0), r = !Ct(e) || e !== this._$AH && e !== It, r && (this._$AH = e);
                else {
                    const o = e;
                    let a, s;
                    for (e = i[0], a = 0; a < i.length - 1; a++) s = Vt(this, o[n + a], t, a), s === It && (s = this._$AH[a]), r ||= !Ct(s) || s !== this._$AH[a], s === Ft ? e = Ft : e !== Ft && (e += (s ?? "") + i[a + 1]), this._$AH[a] = s
                }
                r && !o && this.j(e)
            }
            j(e) {
                e === Ft ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "")
            }
        }
        class Xt extends Yt {
            constructor() {
                super(...arguments), this.type = 3
            }
            j(e) {
                this.element[this.name] = e === Ft ? void 0 : e
            }
        }
        class Zt extends Yt {
            constructor() {
                super(...arguments), this.type = 4
            }
            j(e) {
                this.element.toggleAttribute(this.name, !!e && e !== Ft)
            }
        }
        class Jt extends Yt {
            constructor(e, t, n, o, i) {
                super(e, t, n, o, i), this.type = 5
            }
            _$AI(e, t = this) {
                if ((e = Vt(this, e, t, 0) ?? Ft) === It) return;
                const n = this._$AH,
                    o = e === Ft && n !== Ft || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive,
                    i = e !== Ft && (n === Ft || o);
                o && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e
            }
            handleEvent(e) {
                "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e)
            }
        }
        class Qt {
            constructor(e, t, n) {
                this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n
            }
            get _$AU() {
                return this._$AM._$AU
            }
            _$AI(e) {
                Vt(this, e)
            }
        }
        const en = _t.litHtmlPolyfillSupport;
        en?.(Wt, Kt), (_t.litHtmlVersions ??= []).push("3.1.3");
        /**
         * @license
         * Copyright 2017 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        class tn extends wt {
            constructor() {
                super(...arguments), this.renderOptions = {
                    host: this
                }, this._$Do = void 0
            }
            createRenderRoot() {
                const e = super.createRenderRoot();
                return this.renderOptions.renderBefore ??= e.firstChild, e
            }
            update(e) {
                const t = this.render();
                this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = ((e, t, n) => {
                    const o = n?.renderBefore ?? t;
                    let i = o._$litPart$;
                    if (void 0 === i) {
                        const e = n?.renderBefore ?? null;
                        o._$litPart$ = i = new Kt(t.insertBefore(Et(), e), e, void 0, n ?? {})
                    }
                    return i._$AI(e), i
                })(t, this.renderRoot, this.renderOptions)
            }
            connectedCallback() {
                super.connectedCallback(), this._$Do?.setConnected(!0)
            }
            disconnectedCallback() {
                super.disconnectedCallback(), this._$Do?.setConnected(!1)
            }
            render() {
                return It
            }
        }
        tn._$litElement$ = !0, tn.finalized = !0, globalThis.litElementHydrateSupport?.({
            LitElement: tn
        });
        const nn = globalThis.litElementPolyfillSupport;
        nn?.({
            LitElement: tn
        }), (globalThis.litElementVersions ??= []).push("4.0.5");
        /**
         * @license
         * Copyright 2017 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        const on = {
                attribute: !0,
                type: String,
                converter: ft,
                reflect: !1,
                hasChanged: gt
            },
            rn = (e = on, t, n) => {
                const {
                    kind: o,
                    metadata: i
                } = n;
                let r = globalThis.litPropertyMetadata.get(i);
                if (void 0 === r && globalThis.litPropertyMetadata.set(i, r = new Map), r.set(n.name, e), "accessor" === o) {
                    const {
                        name: o
                    } = n;
                    return {
                        set(n) {
                            const i = t.get.call(this);
                            t.set.call(this, n), this.requestUpdate(o, i, e)
                        },
                        init(t) {
                            return void 0 !== t && this.P(o, void 0, e), t
                        }
                    }
                }
                if ("setter" === o) {
                    const {
                        name: o
                    } = n;
                    return function(n) {
                        const i = this[o];
                        t.call(this, n), this.requestUpdate(o, i, e)
                    }
                }
                throw Error("Unsupported decorator location: " + o)
            };

        function an(e) {
            return (t, n) => "object" == typeof n ? rn(e, t, n) : ((e, t, n) => {
                const o = t.hasOwnProperty(n);
                return t.constructor.createProperty(n, o ? {
                    ...e,
                    wrapped: !0
                } : e), o ? Object.getOwnPropertyDescriptor(t, n) : void 0
            })(e, t, n)
        }
        /**
         * @license
         * Copyright 2017 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        const sn = (e, t, n) => (n.configurable = !0, n.enumerable = !0, Reflect.decorate && "object" != typeof t && Object.defineProperty(e, t, n), n)
        /**
         * @license
         * Copyright 2017 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        ;

        function ln(e, t) {
            return (n, o, i) => {
                const r = t => t.renderRoot?.querySelector(e) ?? null;
                if (t) {
                    const {
                        get: e,
                        set: t
                    } = "object" == typeof o ? n : i ?? (() => {
                        const e = Symbol();
                        return {
                            get() {
                                return this[e]
                            },
                            set(t) {
                                this[e] = t
                            }
                        }
                    })();
                    return sn(n, o, {
                        get() {
                            let n = e.call(this);
                            return void 0 === n && (n = r(this), (null !== n || this.hasUpdated) && t.call(this, n)), n
                        }
                    })
                }
                return sn(n, o, {
                    get() {
                        return r(this)
                    }
                })
            }
        }
        /**
         * @license
         * Copyright 2018 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        const dn = e => e ?? Ft;
        var cn = {
            "en-US": {
                age_gate_heading: "Age Verification",
                age_gate_lockout_text: "Sorry, you may not access this content.",
                age_gate_lockout_text_button: "Close",
                age_gate_subheading: "Please enter your date of birth to continue.",
                age_gate_submit_button: "Continue"
            },
            "de-DE": {
                age_gate_heading: "Altersnachweis",
                age_gate_lockout_text: "Es tut uns leid, aber diese Inhalte sind nicht für dein Alter geeignet.",
                age_gate_lockout_text_button: "Schließen",
                age_gate_subheading: "Bitte gib dein Geburtsdatum ein, um fortzufahren.",
                age_gate_submit_button: "Weiter"
            },
            "es-ES": {
                age_gate_heading: "Verificación de edad",
                age_gate_lockout_text: "Lo siento, no puedes acceder a este contenido.",
                age_gate_lockout_text_button: "Cerrar",
                age_gate_subheading: "Introduce tu fecha de nacimiento para continuar.",
                age_gate_submit_button: "Continuar"
            },
            "es-MX": {
                age_gate_heading: "Verificación de edad",
                age_gate_lockout_text: "Lo sentimos, no puedes acceder a este contenido.",
                age_gate_lockout_text_button: "Cerrar",
                age_gate_subheading: "Ingresa tu fecha de nacimiento para continuar.",
                age_gate_submit_button: "Continuar"
            },
            "fr-FR": {
                age_gate_heading: "Vérification de l’âge",
                age_gate_lockout_text: "Désolé, vous ne pouvez pas accéder à ce contenu.",
                age_gate_lockout_text_button: "Fermer",
                age_gate_subheading: "Veuillez renseigner votre date de naissance pour continuer.",
                age_gate_submit_button: "Continuer"
            },
            "it-IT": {
                age_gate_heading: "Verifica dell'età",
                age_gate_lockout_text: "Spiacenti, non puoi accedere a questo contenuto.",
                age_gate_lockout_text_button: "Chiudi",
                age_gate_subheading: "Inserisci la tua data di nascita per continuare.",
                age_gate_submit_button: "Continua"
            },
            "ja-JP": {
                age_gate_heading: "年齢の認証",
                age_gate_lockout_text: "申し訳ありません。お客様はこのコンテンツはご利用いただけません。",
                age_gate_lockout_text_button: "閉じる",
                age_gate_subheading: "続行するには生年月日を入力してください。",
                age_gate_submit_button: "続ける"
            },
            "ko-KR": {
                age_gate_heading: "연령 확인",
                age_gate_lockout_text: "죄송합니다. 귀하께서는 해당 콘텐츠를 이용할 수 없습니다.",
                age_gate_lockout_text_button: "닫기",
                age_gate_subheading: "계속하려면 생년월일을 입력하세요.",
                age_gate_submit_button: "계속"
            },
            "pl-PL": {
                age_gate_heading: "Weryfikacja wieku",
                age_gate_lockout_text: "Przepraszamy, nie masz dostępu do tych treści.",
                age_gate_lockout_text_button: "Zamknij",
                age_gate_subheading: "Podaj datę urodzenia, aby przejść dalej.",
                age_gate_submit_button: "Kontynuuj"
            },
            "pt-BR": {
                age_gate_heading: "Verificação de Idade",
                age_gate_lockout_text: "Desculpe, você não pode acessar este conteúdo.",
                age_gate_lockout_text_button: "Fechar",
                age_gate_subheading: "Insira sua data de nascimento para continuar.",
                age_gate_submit_button: "Continuar"
            },
            "ru-RU": {
                age_gate_heading: "Проверка возраста",
                age_gate_lockout_text: "Вы не можете получить доступ к этому контенту. Приносим извинения.",
                age_gate_lockout_text_button: "Закрыть",
                age_gate_subheading: "Чтобы продолжить, укажите свою дату рождения.",
                age_gate_submit_button: "Продолжить"
            },
            "tr-TR": {
                age_gate_heading: "Yaş Doğrulaması",
                age_gate_subheading: "Devam etmek için lütfen doğum tarihinizi girin.",
                age_gate_submit_button: "Devam Et",
                age_gate_lockout_text: "Üzgünüz, bu içeriğe erişemezsiniz.",
                age_gate_lockout_text_button: "Kapat"
            },
            "th-TH": {
                age_gate_heading: "ยืนยันอายุ",
                age_gate_lockout_text: "ขออภัย คุณไม่สามารถเข้าถึงเนื้อหานี้ได้",
                age_gate_lockout_text_button: "ปิด",
                age_gate_subheading: "โปรดกรอกวันเกิดของคุณเพื่อดำเนินการต่อ",
                age_gate_submit_button: "ดำเนินการต่อ"
            },
            "zh-CN": {
                age_gate_heading: "年龄验证",
                age_gate_lockout_text: "抱歉，您无法获取这些内容。",
                age_gate_lockout_text_button: "关闭",
                age_gate_subheading: "请输入您的出生日期以继续。",
                age_gate_submit_button: "继续"
            },
            "zh-TW": {
                age_gate_heading: "年齡驗證",
                age_gate_lockout_text: "很抱歉，你無法使用此內容。",
                age_gate_lockout_text_button: "關閉",
                age_gate_subheading: "請輸入你的出生日期以繼續。",
                age_gate_submit_button: "繼續"
            }
        };
        const un = ["min", "xs", "sm", "md", "lg", "xl", "xxl", "max"],
            hn = new RegExp(`^(?:${un.join("|")})(?:-(?:plus|less))?$`, "i");
        var pn = e => bn(e);
        const bn = e => {
                const t = {},
                    n = Array.from(e.attributes).reduce(((e, t) => {
                        const n = t.nodeName.includes("--") ? "--" : ":",
                            o = t.nodeName.substring(0, t.nodeName.lastIndexOf(n)),
                            i = t.nodeName.substring(t.nodeName.lastIndexOf(n) + n.length, t.nodeName.length);
                        if (-1 !== i.search(hn)) {
                            const n = e[o] || {
                                    less: [],
                                    plus: [],
                                    bp: []
                                },
                                r = {
                                    breakpoint: i,
                                    nodeValue: t.nodeValue
                                }; - 1 !== r.breakpoint.indexOf("-less") ? n.less.push(r) : -1 !== r.breakpoint.indexOf("-plus") ? n.plus.push(r) : n.bp.push(r), e[o] = n
                        }
                        return e
                    }), {});
                Object.keys(n).length && (Object.keys(n).forEach((o => {
                    const i = Object.keys(n[o]).reduce(((e, t) => e.concat(n[o][t].sort(((e, t) => un.indexOf(e.breakpoint.replace(/-less$|-plus$/, "")) - un.indexOf(t.breakpoint.replace(/-less$|-plus$/, "")))))), []);
                    i.forEach((({
                        breakpoint: n,
                        nodeValue: i
                    }) => {
                        let r = [];
                        const a = -1 !== n.indexOf("-less"),
                            s = -1 !== n.indexOf("-plus"),
                            l = n.split("-")[0],
                            d = un.findIndex((e => e === l));
                        if (r = a ? [...un.slice(0, d + 1)] : s ? [...un.slice(d)] : [un[d]], void 0 === t[o] && (t[o] = {}, e.hasAttribute(o))) {
                            const n = e.getAttribute(o);
                            t[o] = Object.fromEntries(un.map((e => [e, n])))
                        }
                        for (const e of r) t[o][e] = i
                    }))
                })), vn(e, t), window.addEventListener("resize", (() => {
                    xe(500, (() => vn(e, t)))()
                })))
            },
            vn = (e, t) => {
                const n = fn(window);
                for (const o in t) void 0 !== t[o][n] && e.getAttribute(o) !== t[o][n] ? e.setAttribute(o, t[o][n]) : void 0 === t[o][n] && e.hasAttribute(o) && e.removeAttribute(o)
            },
            fn = (e = window) => {
                const t = un.map((e => parseInt(ze(`--view-${e}`)))),
                    n = t.findIndex((t => e.innerWidth < t));
                return n < 0 ? un[t.length - 1] : 0 === n ? un[0] : un[n - 1]
            };
        var gn, mn = "@blizzard/base-web-components",
            wn = "3.4.2",
            _n = ot`*,:host{box-sizing:border-box}:host{display:block}:host([aspect-ratio])>*{height:100%!important;left:0;position:absolute;top:0;width:100%!important}:focus:not(:focus-visible){outline:0}::slotted(h1),::slotted(h2),::slotted(h3),::slotted(h4),::slotted(h5),::slotted(h6),::slotted(p),p{font-size:inherit;margin:0}::slotted(a){color:inherit;text-decoration:none}button{background:0 0;border:none;color:inherit;cursor:pointer;font:inherit;padding:0}`,
            yn = (e, t) => {
                try {
                    customElements.define(e, t)
                } catch (n) {
                    const {
                        message: o
                    } = n;
                    if (o.includes("this constructor")) customElements.define(e, class extends t {});
                    else {
                        if (o.includes("the name")) return;
                        console.error(o)
                    }
                }
            },
            kn = ot`.trb-body,.trb-body-lead,.trb-body-lead::slotted(*),.trb-body-lede,.trb-body-lede::slotted(*),.trb-body::slotted(*),.trb-text,.trb-text::slotted(*),[class*=" trb-label"],[class*=" trb-label"]::slotted(*),[class^=trb-label],[class^=trb-label]::slotted(*){color:var(--global-color-content-700);font:var(--semantic-body-text-xl)}.trb-body-sm,.trb-body-sm::slotted(*),.trb-label,.trb-label::slotted(*){font:var(--semantic-body-text-md)}.trb-body-xs,.trb-body-xs::slotted(*),.trb-label-sm,.trb-label-sm::slotted(*){font:var(--semantic-body-text-sm)}.trb-body,.trb-body-lead,.trb-body-lead::slotted(*),.trb-body-lede,.trb-body-lede::slotted(*),.trb-body::slotted(*),[class*=" trb-label"],[class*=" trb-label"]::slotted(*),[class^=trb-label],[class^=trb-label]::slotted(*){line-height:var(--global-font-line-height-comfy);margin:0}.trb-body-lead,.trb-body-lead::slotted(*),.trb-body-lede,.trb-body-lede::slotted(*){font:var(--semantic-body-text-xxl)}[class*=" trb-heading"],[class*=" trb-heading"]::slotted(*),[class^=trb-heading],[class^=trb-heading]::slotted(*){color:var(--semantic-color-content-default);margin:0}.trb-heading-xl,.trb-heading-xl::slotted(*){font:var(--header-heading-font-xl)}.trb-heading-lg,.trb-heading-lg::slotted(*){font:var(--header-heading-font-lg)}.trb-heading,.trb-heading::slotted(*){font:var(--header-heading-font-md)}.trb-heading-sm,.trb-heading-sm::slotted(*){font:var(--header-heading-font-sm)}.trb-heading-xs,.trb-heading-xs::slotted(*){font:var(--header-heading-font-xs)}.trb-heading-xxs,.trb-heading-xxs::slotted(*){font:var(--header-heading-font-xxs)}.trb-subheading-lg,.trb-subheading-lg::slotted(*){font:var(--semantic-subheading-text-lg);letter-spacing:var(--semantic-subheading-letter-spacing);text-transform:uppercase}.trb-subheading,.trb-subheading::slotted(*){font:var(--semantic-subheading-text-md);letter-spacing:var(--semantic-subheading-letter-spacing);text-transform:uppercase}.trb-link{color:var(--semantic-color-background-icon-selected);font-weight:var(--global-font-weight-bold);text-decoration:none;text-underline-position:under}h1>.trb-link,h2>.trb-link,h3>.trb-link,h4>.trb-link,h5>.trb-link,h6>.trb-link,p>.trb-link{text-decoration:underline}.trb-link.hover,.trb-link:hover{color:var(--semantic-color-background-icon-hover);text-decoration:underline}`,
            zn = ot`[screen-reader-only]{clip:rect(0,0,0,0);border:0;height:1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}`,
            An = ot`.remove-outline:focus{outline:0}`;
        class xn extends tn {
            constructor() {
                super(), this._firstUpdated = !1, this.slotListeners = {}, this._dependencies = {}, gn.set(this, {}), this._attachSlotChangeListener = ({
                    slotName: e
                }) => {
                    this._getSlotsAndCallback({
                        slotName: e,
                        callback: t => {
                            this.slotListeners[e] || (this.slotListeners[e] = e => {
                                this._setDefaultSlottedAttributes({
                                    slot: e.target
                                })
                            }), t.addEventListener("slotchange", this.slotListeners[e])
                        }
                    })
                }, this._getSlotsAndCallback = ({
                    slotName: e,
                    callback: t
                }) => {
                    const n = this.shadowRoot?.querySelectorAll("default" === e ? "slot:not([name])" : `slot[name^="${e}"]`) || [];
                    Object.entries(n).forEach((([, e]) => {
                        t(e)
                    }))
                }, this._setDefaultSlottedAttributes = ({
                    slot: e,
                    overwrite: t,
                    defaultAttributes: n
                }) => {
                    const o = e && "assignedElements" in e ? e.assignedElements({
                        flatten: !0
                    }) : [];
                    if (!n && e) {
                        const t = "assignedElements" in e && e.getAttribute("name") || "default";
                        n = this._defaultSlottedAttributes[t]
                    }
                    o.length && n && Object.entries(n).forEach((([e, n]) => {
                        Object.entries(o).forEach((([, o]) => {
                            o.tagName?.toLowerCase() !== e && "*" !== e || Object.entries(n).forEach((([e, n]) => {
                                let i = "function" == typeof n.value ? n.value(this) : n.value;
                                if (void 0 !== i)
                                    if ("class" === e)
                                        for (const e of i.split(" ")) o.classList.add(e);
                                    else o.hasAttribute(e) && !t || (!0 === i && (i = ""), o.setAttribute(e, i))
                            }))
                        }))
                    }))
                }, Object.entries(this.componentDependencies).forEach((([e, t]) => {
                    yn(e, t)
                }))
            }
            get _defaultSlottedAttributes() {
                return function(e, t, n, o) {
                    if ("a" === n && !o) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === n ? o : "a" === n ? o.call(e) : o ? o.value : t.get(e)
                }(this, gn, "f")
            }
            set _defaultSlottedAttributes(e) {
                ! function(e, t, n, o, i) {
                    if ("m" === o) throw new TypeError("Private method is not writable");
                    if ("a" === o && !i) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    "a" === o ? i.call(e, n) : i ? i.value = n : t.set(e, n)
                }(this, gn, e, "f")
            }
            get componentDependencies() {
                return {}
            }
            firstUpdated(e) {
                if (this._initializetrbWindow(), this._firstUpdated = !0, pn(this), this._defaultSlottedAttributes) {
                    this.slotListeners = {};
                    for (const [e, t] of Object.entries(this._defaultSlottedAttributes)) {
                        for (const n of Object.values(t))
                            for (const [t, o] of Object.entries(n))
                                if ("function" == typeof o.value) {
                                    const n = o.watch || [t];
                                    for (const t of n) this._dependencies[t] || (this._dependencies[t] = []), this._dependencies[t].includes(e) || this._dependencies[t].push(e)
                                } this._attachSlotChangeListener({
                            slotName: e
                        })
                    }
                }
                "complete" === document.readyState ? this._dispatchUpdatedEvent("first-updated", e) : document.addEventListener("readystatechange", (() => this._readyStateDefer("first-updated", e)))
            }
            updated(e) {
                const t = this._firstUpdated;
                delete this._firstUpdated, e.forEach(((e, n) => {
                    const o = n.toString().split(/(?=[A-Z])/).join("-").toLowerCase();
                    if (this._dependencies[o])
                        for (const e of this._dependencies[o]) this._getSlotsAndCallback({
                            slotName: e,
                            callback: e => {
                                this._setDefaultSlottedAttributes({
                                    slot: e,
                                    overwrite: !t
                                })
                            }
                        })
                })), e.size && ("complete" === document.readyState ? this._dispatchUpdatedEvent("updated", e) : document.addEventListener("readystatechange", (() => this._readyStateDefer("updated", e))))
            }
            disconnectedCallback() {
                super.disconnectedCallback(), this._disconnect()
            }
            _readyStateDefer(e, t) {
                "complete" === document.readyState && (this._dispatchUpdatedEvent(e, t), document.removeEventListener("readystatechange", (() => this._readyStateDefer(e, t))))
            }
            _dispatchUpdatedEvent(e, t) {
                this.dispatchEvent(new CustomEvent(`${this.nodeName?`${this.nodeName.toLowerCase()}:`:""}${e}`, {
                    composed: !0,
                    detail: t
                }))
            }
            _initializetrbWindow() {
                window.trb || (window.trb = {
                    debug: {
                        version: {
                            [mn]: [wn]
                        }
                    },
                    ootbAnalytics: "configurable",
                    os: de()
                }), window.trb.os || (window.trb.os = de()), window.trb.ootbAnalytics || (window.trb.ootbAnalytics = "configurable"), window.trb.debug || (window.trb.debug = {
                    version: {
                        [mn]: [wn]
                    }
                }), document.documentElement.hasAttribute(ae) || document.documentElement.setAttribute(ae, window.trb.os)
            }
            _disconnect() {
                this.slotListeners && Object.entries(this.slotListeners).forEach((([e, t]) => {
                    this._getSlotsAndCallback({
                        slotName: e,
                        callback: e => {
                            e.removeEventListener("slotchange", t)
                        }
                    })
                }))
            }
        }
        gn = new WeakMap, xn.styles = [_n, kn, zn, An];
        var Sn = xn;

        function $n(e, t, n = "") {
            const o = ("" !== n ? n : e.analyticsEvent).replace(/(cta_other)/g, (() => "click_cta")).replace(/(cta)_/g, (() => "click_")),
                i = o.split("_"),
                r = i.length > 1 && "click_cta" !== o ? i[1] : "other";
            return {
                event: o,
                cta_name: e.analyticsLabel,
                cta_category: "click",
                cta_action: r,
                cta_placement: e.analyticsPlacement,
                ...t
            }
        }

        function En(e, t, n) {
            return {
                event: n,
                modal_name: e.analyticsLabel,
                modal_placement: e.analyticsPlacement,
                ...t
            }
        }
        var Cn = function(e, t, n, o) {
            var i, r = arguments.length,
                a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        };
        class On extends Sn {
            get analyticsConfigured() {
                return function(e) {
                    return void 0 !== e.analyticsEvent && null !== e.analyticsEvent && "" != e.analyticsEvent && void 0 !== e.analyticsLabel && null !== e.analyticsLabel && "" != e.analyticsLabel && void 0 !== e.analyticsPlacement && null !== e.analyticsPlacement && "" != e.analyticsPlacement
                }({
                    analyticsEvent: this.analyticsEvent,
                    analyticsPlacement: this.analyticsPlacement,
                    analyticsLabel: this.analyticsLabel
                })
            }
            get analyticsEnabled() {
                const e = "massEnabledAnalytics" === window?.trb?.ootbAnalytics && "disabled" !== this.analyticsStatus,
                    t = "enabled" === this.analyticsStatus;
                return e || t
            }
            pushEventToDataLayer(e) {
                this.analyticsEnabled && this.analyticsConfigured && queueMicrotask((() => {
                    window.dataLayer = window.dataLayer || [], window.dataLayer.push(e)
                }))
            }
            pushEventFromGenerator(e, t, n = "") {
                if (this.analyticsEnabled && this.analyticsConfigured) {
                    const o = {
                        analyticsEvent: this.analyticsEvent,
                        analyticsPlacement: this.analyticsPlacement,
                        analyticsLabel: this.analyticsLabel
                    };
                    try {
                        const i = e(o, t, n);
                        this.pushEventToDataLayer(i)
                    } catch (e) {
                        window?.trb?.debug?.logging?.enabled && console.warn(e)
                    }
                }
            }
        }
        Cn([an({
            type: String,
            attribute: "analytics-status",
            reflect: !0
        })], On.prototype, "analyticsStatus", void 0), Cn([an({
            type: String,
            attribute: "analytics-event"
        })], On.prototype, "analyticsEvent", void 0), Cn([an({
            type: String,
            attribute: "analytics-label"
        })], On.prototype, "analyticsLabel", void 0), Cn([an({
            type: String,
            attribute: "analytics-placement"
        })], On.prototype, "analyticsPlacement", void 0);
        var Bn, Ln, Tn, Pn, Nn, Mn, Dn, jn, Rn, In, Fn = ot`:host{background:var(--icon-button-color-default-background);border-radius:var(--global-size-350);border-style:none;box-shadow:inset 0 0 0 1px var(--icon-color-border-default);color:var(--icon-button-color-default);cursor:pointer;display:inline-block;height:var(--global-size-700);padding:0;width:var(--global-size-700)}:host(:active){transform:translateY(1px)}:host(.focus),:host(.hover),:host(:focus),:host(:hover){background:var(--icon-button-color-default-background-hover);box-shadow:inset 0 0 0 1px var(--icon-color-border-hover);color:var(--icon-button-color-hover)}:host([size=small]){height:var(--global-size-500);width:var(--global-size-500)}:host([variant=default]){background:var(--icon-button-color-default-background)}:host([variant=default].focus),:host([variant=default].hover),:host([variant=default]:focus),:host([variant=default]:hover){background:var(--icon-button-color-default-background-hover)}:host([variant=contrast]){background-color:var(--icon-button-color-contrast-background)}:host([variant=contrast].focus),:host([variant=contrast].hover),:host([variant=contrast]:focus),:host([variant=contrast]:hover){background-color:var(--icon-button-color-contrast-background-hover)}:host([variant=ghost]){background:var(--semantic-color-background-action-tertiary-default)}:host([variant=ghost].focus),:host([variant=ghost].hover),:host([variant=ghost]:focus),:host([variant=ghost]:hover){background:var(--semantic-color-background-action-tertiary-hover)}button{height:100%;width:100%}:host([cosmetic]),button{align-items:center;display:flex;justify-content:center}`,
            Un = ["alert-triangle.svg", "amazon-appstore-logo.svg", "amazon-appstore.svg", "android.svg", "app-store.svg", "apple-app-store.svg", "arrow-down.svg", "arrow-left.svg", "arrow-right.svg", "arrow-up-right.svg", "arrow-up.svg", "base-ui-logo-mini.svg", "base-ui-logo-stacked.svg", "base-ui-logo.svg", "battlenet-cn-logo-color.svg", "battlenet-cn-logo-stacked-color.svg", "battlenet-cn-logo-stacked.svg", "battlenet-cn-logo.svg", "battlenet-logo-color-trademark-tm.svg", "battlenet-logo-color-trademark.svg", "battlenet-logo-color.svg", "battlenet-logo-stacked-color-trademark.svg", "battlenet-logo-stacked-color.svg", "battlenet-logo-stacked.svg", "battlenet-logo.svg", "battlenet.svg", "blizzard-arcade-collection.svg", "blizzard.svg", "blizzcon.svg", "bn-accessibility-filled.svg", "bn-accessibility-outlined.svg", "bn-account-alert-filled.svg", "bn-account-alert-outlined.svg", "bn-account-delete-filled.svg", "bn-account-delete-outlined.svg", "bn-account-filled.svg", "bn-account-outlined.svg", "bn-account-settings-filled.svg", "bn-account-settings-outlined.svg", "bn-alert-critical-filled.svg", "bn-alert-critical-outlined.svg", "bn-alert-filled.svg", "bn-alert-outlined.svg", "bn-app-settings-filled.svg", "bn-app-settings-outlined.svg", "bn-arrow-down-filled.svg", "bn-arrow-down-outlined.svg", "bn-arrow-left-filled.svg", "bn-arrow-left-outlined.svg", "bn-arrow-right-filled.svg", "bn-arrow-right-outlined.svg", "bn-arrow-up-filled.svg", "bn-arrow-up-outlined.svg", "bn-attachment-filled.svg", "bn-attachment-outlined.svg", "bn-authenticator-disabled-filled.svg", "bn-authenticator-disabled-outlined.svg", "bn-authenticator-filled.svg", "bn-authenticator-outlined.svg", "bn-availability-away-filled.svg", "bn-availability-away-outlined.svg", "bn-availability-busy-filled.svg", "bn-availability-busy-outlined.svg", "bn-availability-offline-filled.svg", "bn-availability-offline-outlined.svg", "bn-availability-online-filled.svg", "bn-availability-online-outlined.svg", "bn-ban-filled.svg", "bn-ban-outlined.svg", "bn-bar-code-filled.svg", "bn-bar-code-outlined.svg", "bn-battletag-change-filled.svg", "bn-battletag-change-outlined.svg", "bn-bell-filled.svg", "bn-bell-off-filled.svg", "bn-bell-off-outlined.svg", "bn-bell-outlined.svg", "bn-beta-filled.svg", "bn-beta-outlined.svg", "bn-bookmark-filled.svg", "bn-bookmark-outlined.svg", "bn-browser-alert-filled.svg", "bn-browser-alert-outlined.svg", "bn-browser-filled.svg", "bn-browser-info-filled.svg", "bn-browser-info-outlined.svg", "bn-browser-outlined.svg", "bn-bug-filled.svg", "bn-bug-outlined.svg", "bn-calendar-filled.svg", "bn-calendar-outlined.svg", "bn-channel-filled.svg", "bn-channel-outlined.svg", "bn-chat-add-filled.svg", "bn-chat-add-outlined.svg", "bn-chat-filled.svg", "bn-chat-outlined.svg", "bn-checkmark-circle-filled.svg", "bn-checkmark-circle-outlined.svg", "bn-checkmark-filled.svg", "bn-checkmark-outlined.svg", "bn-chevron-down-filled.svg", "bn-chevron-down-outlined.svg", "bn-chevron-left-filled.svg", "bn-chevron-left-outlined.svg", "bn-chevron-right-filled.svg", "bn-chevron-right-outlined.svg", "bn-chevron-up-filled.svg", "bn-chevron-up-outlined.svg", "bn-clock-filled.svg", "bn-clock-outlined.svg", "bn-close-circle-filled.svg", "bn-close-circle-outlined.svg", "bn-close-filled.svg", "bn-close-outlined.svg", "bn-console-filled.svg", "bn-console-outlined.svg", "bn-copy-filled.svg", "bn-copy-outlined.svg", "bn-credit-card-alert-filled.svg", "bn-credit-card-alert-outlined.svg", "bn-credit-card-filled.svg", "bn-credit-card-outlined.svg", "bn-credit-card-restore-filled.svg", "bn-credit-card-restore-outlined.svg", "bn-crossplay-filled.svg", "bn-crossplay-outlined.svg", "bn-crown-filled.svg", "bn-crown-outlined.svg", "bn-delete-filled.svg", "bn-delete-outlined.svg", "bn-desktop-filled.svg", "bn-desktop-outlined.svg", "bn-disk-storage-filled.svg", "bn-disk-storage-outlined.svg", "bn-download-alert-filled.svg", "bn-download-alert-outlined.svg", "bn-download-filled.svg", "bn-download-outlined.svg", "bn-download-settings-filled.svg", "bn-download-settings-outlined.svg", "bn-emoji-filled.svg", "bn-emoji-outlined.svg", "bn-external-link-filled.svg", "bn-external-link-outlined.svg", "bn-eye-disabled-filled.svg", "bn-eye-disabled-outlined.svg", "bn-eye-filled.svg", "bn-eye-outlined.svg", "bn-family-filled.svg", "bn-family-outlined.svg", "bn-filter-filled.svg", "bn-filter-outlined.svg", "bn-flag-filled.svg", "bn-flag-outlined.svg", "bn-forums-filled.svg", "bn-forums-outlined.svg", "bn-friend-add-filled.svg", "bn-friend-add-outlined.svg", "bn-friend-filled.svg", "bn-friend-outlined.svg", "bn-friend-setting-filled.svg", "bn-friend-setting-outlined.svg", "bn-friends-filled.svg", "bn-friends-outlined.svg", "bn-games-filled.svg", "bn-games-outlined.svg", "bn-gear-filled.svg", "bn-gear-outlined.svg", "bn-gif-filled.svg", "bn-gif-outlined.svg", "bn-gift-filled.svg", "bn-gift-outlined.svg", "bn-globe-filled.svg", "bn-globe-outlined.svg", "bn-group-filled.svg", "bn-group-outlined.svg", "bn-headset-filled.svg", "bn-headset-outlined.svg", "bn-heart-filled.svg", "bn-heart-outlined.svg", "bn-history-filled.svg", "bn-history-outlined.svg", "bn-home-filled.svg", "bn-home-outlined.svg", "bn-hourglass-filled.svg", "bn-hourglass-outlined.svg", "bn-incognito-filled.svg", "bn-incognito-outlined.svg", "bn-info-circle-filled.svg", "bn-info-circle-outlined.svg", "bn-installed-filled.svg", "bn-installed-outlined.svg", "bn-instant-unlock-filled.svg", "bn-instant-unlock-outlined.svg", "bn-key-filled.svg", "bn-key-outlined.svg", "bn-legal-filled.svg", "bn-legal-outlined.svg", "bn-letter-filled.svg", "bn-letter-outlined.svg", "bn-library-filled.svg", "bn-library-outlined.svg", "bn-light-bulb-filled.svg", "bn-light-bulb-outlined.svg", "bn-link-filled.svg", "bn-link-outlined.svg", "bn-list-add-filled.svg", "bn-list-add-outlined.svg", "bn-list-filled.svg", "bn-list-outlined.svg", "bn-list-remove-filled.svg", "bn-list-remove-outlined.svg", "bn-lock-checked-filled.svg", "bn-lock-checked-outlined.svg", "bn-lock-filled.svg", "bn-lock-open-filled.svg", "bn-lock-open-outlined.svg", "bn-lock-outlined.svg", "bn-menu-filled.svg", "bn-menu-outlined.svg", "bn-micophone-filled.svg", "bn-micophone-outlined.svg", "bn-microphone-off-filled.svg", "bn-microphone-off-outlined.svg", "bn-minus-circle-filled.svg", "bn-minus-circle-outlined.svg", "bn-minus-filled.svg", "bn-minus-outlined.svg", "bn-mobile-notification-filled.svg", "bn-mobile-notification-outlined.svg", "bn-move-down-filled.svg", "bn-move-down-outlined.svg", "bn-move-left-filled.svg", "bn-move-left-outlined.svg", "bn-move-right-filled.svg", "bn-move-right-outlined.svg", "bn-move-up-filled.svg", "bn-move-up-outlined.svg", "bn-network-alert-filled.svg", "bn-network-alert-outlined.svg", "bn-new-filled.svg", "bn-new-outlined.svg", "bn-news-filled.svg", "bn-news-outlined.svg", "bn-note-filled.svg", "bn-note-outlined.svg", "bn-overflow-filled.svg", "bn-overflow-outlined.svg", "bn-pause-filled.svg", "bn-pause-outlined.svg", "bn-pencil-filled.svg", "bn-pencil-outlined.svg", "bn-phone-filled.svg", "bn-phone-outlined.svg", "bn-phone-play-filled.svg", "bn-phone-play-outlined.svg", "bn-phone-settings-filled.svg", "bn-phone-settings-outlined.svg", "bn-play-circle-filled.svg", "bn-play-circle-outlined.svg", "bn-play-filled.svg", "bn-play-outlined.svg", "bn-player-lock-filled.svg", "bn-player-lock-outlined.svg", "bn-player-reset-filled.svg", "bn-player-reset-outlined.svg", "bn-plus-circle-filled.svg", "bn-plus-circle-outlined.svg", "bn-plus-filled.svg", "bn-plus-outlined.svg", "bn-pop-in-filled.svg", "bn-pop-in-outlined.svg", "bn-pop-out-filled.svg", "bn-pop-out-outlined.svg", "bn-qr-code-filled.svg", "bn-qr-code-outlined.svg", "bn-question-filled.svg", "bn-question-outlined.svg", "bn-randomize-filled.svg", "bn-randomize-outlined.svg", "bn-repeat-filled.svg", "bn-repeat-outlined.svg", "bn-replay-filled.svg", "bn-replay-outlined.svg", "bn-rocket-filled.svg", "bn-rocket-outlined.svg", "bn-rotate-left-filled.svg", "bn-rotate-left-outlined.svg", "bn-rotate-right-filled.svg", "bn-rotate-right-outlined.svg", "bn-search-filled.svg", "bn-search-outlined.svg", "bn-send-filled.svg", "bn-send-outlined.svg", "bn-share-filled.svg", "bn-share-outlined.svg", "bn-shield-filled.svg", "bn-shield-outlined.svg", "bn-shop-alert-filled.svg", "bn-shop-alert-outlined.svg", "bn-shop-filled.svg", "bn-shop-outlined.svg", "bn-shuffle-filled.svg", "bn-shuffle-outlined.svg", "bn-sign-out-filled.svg", "bn-sign-out-outlined.svg", "bn-speaker-filled.svg", "bn-speaker-off-filled.svg", "bn-speaker-off-outlined.svg", "bn-speaker-on-filled.svg", "bn-speaker-on-outlined.svg", "bn-speaker-outlined.svg", "bn-special-filled.svg", "bn-special-outlined.svg", "bn-speed-filled.svg", "bn-speed-outlined.svg", "bn-star-filled.svg", "bn-star-outlined.svg", "bn-sync-filled.svg", "bn-sync-outlined.svg", "bn-tag-filled.svg", "bn-tag-outlined.svg", "bn-tags-filled.svg", "bn-tags-outlined.svg", "bn-thumbs-down-filled.svg", "bn-thumbs-down-outlined.svg", "bn-thumbs-up-filled.svg", "bn-thumbs-up-outlined.svg", "bn-ticket-filled.svg", "bn-ticket-outlined.svg", "bn-transcription-filled.svg", "bn-transcription-outlined.svg", "bn-triangle-down-filled.svg", "bn-triangle-down-outlined.svg", "bn-triangle-left-filled.svg", "bn-triangle-left-outlined.svg", "bn-triangle-right-filled.svg", "bn-triangle-right-outlined.svg", "bn-triangle-up-filled.svg", "bn-triangle-up-outlined.svg", "bn-trophy-filled.svg", "bn-trophy-outlined.svg", "bn-update-filled.svg", "bn-update-outlined.svg", "bn-upload-filled.svg", "bn-upload-outlined.svg", "bn-video-filled.svg", "bn-video-outlined.svg", "bn-voice-chat-active-filled.svg", "bn-voice-chat-active-outlined.svg", "bn-voice-chat-filled.svg", "bn-voice-chat-loading-filled.svg", "bn-voice-chat-loading-outlined.svg", "bn-voice-chat-outlined.svg", "bn-window-lock-filled.svg", "bn-window-lock-outlined.svg", "bn-window-unlock-filled.svg", "bn-window-unlock-outlined.svg", "bn-wrench-filled.svg", "bn-wrench-outlined.svg", "bn-zoom-filled.svg", "bn-zoom-outlined.svg", "briefcase.svg", "check-circle.svg", "chevron-down.svg", "chevron-left.svg", "chevron-right.svg", "chevron-up.svg", "cod-black-ops-4.svg", "cod-black-ops-cw.svg", "cod-modern-warfare-2-cr.svg", "cod-modern-warfare-2.svg", "cod-modern-warfare-3.svg", "cod-modern-warfare.svg", "cod-vanguard.svg", "cod-warzone.svg", "crash-bandicoot-4.svg", "diablo-II.svg", "diablo-III.svg", "diablo-IV.svg", "diablo-immortal.svg", "diablo.svg", "diablo3-platinum.png", "diablo4-platinum.png", "download.svg", "edit.svg", "employee.svg", "external.svg", "facebook.svg", "file.svg", "google-play-logo.svg", "google-play.svg", "google.svg", "grid.svg", "heart.svg", "hearthstone-esports.svg", "hearthstone-orb.png", "hearthstone-runestone.png", "hearthstone.svg", "help-circle.svg", "heroes-of-the-storm.svg", "history.svg", "info-circle.svg", "instagram.svg", "laurel.svg", "log-out.svg", "mac-logo.svg", "mac.svg", "mathematical-double-struck-capital-x.svg", "menu.svg", "message-circle.svg", "more-horizontal.svg", "netease-games.svg", "netease-logo.svg", "onestore-logo.svg", "onestore.svg", "overwatch-2-dark.svg", "overwatch-2.svg", "overwatch-credits.png", "overwatch-league-tokens.png", "overwatch.svg", "pause.svg", "phone.svg", "play.svg", "playstation-4-5-logo.svg", "playstation-4-logo.svg", "playstation-5-logo.svg", "playstation-logo.svg", "playstation.svg", "reddit.svg", "search.svg", "settings.svg", "shared-tech-logo-mini.svg", "shared-tech-logo-stacked.svg", "shared-tech-logo.svg", "shirt.svg", "shopping-bag.svg", "starcraft-II.svg", "starcraft.svg", "steam-logo.svg", "steam.svg", "switch-logo.svg", "switch.svg", "threads.svg", "ticket.svg", "tiktok.svg", "twitch.svg", "twitter.svg", "update.svg", "user-circle.svg", "user.svg", "users.svg", "vkontakte.svg", "war.svg", "warcraft-II.svg", "warcraft-III.svg", "warcraft-arclight-rumble.svg", "warcraft.svg", "wechat.svg", "weibo.svg", "windows-logo.svg", "windows.svg", "world-of-warcraft.svg", "wotlk.svg", "wow-cata.svg", "wow-classic.svg", "wow-df.svg", "wow-tww.svg", "x.svg", "xbox-gamepass-logo-stacked.svg", "xbox-gamepass-logo.svg", "xbox-logo.svg", "xbox-one-logo.svg", "xbox-series-logo.svg", "xbox.svg", "youku.svg", "youtube.svg"];
        ! function(e) {
            e.AlertTriangle = "alert-triangle", e.ArrowDown = "arrow-down", e.ArrowLeft = "arrow-left", e.ArrowRight = "arrow-right", e.ArrowUpRight = "arrow-up-right", e.ArrowUp = "arrow-up", e.Briefcase = "briefcase", e.CheckCircle = "check-circle", e.ChevronDown = "chevron-down", e.ChevronLeft = "chevron-left", e.ChevronRight = "chevron-right", e.ChevronUp = "chevron-up", e.Download = "download", e.Edit = "edit", e.Employee = "employee", e.External = "external", e.File = "file", e.Grid = "grid", e.Heart = "heart", e.HelpCircle = "help-circle", e.History = "history", e.InfoCircle = "info-circle", e.Laurel = "laurel", e.LogOut = "log-out", e.Menu = "menu", e.MessageCircle = "message-circle", e.MoreHorizontal = "more-horizontal", e.Phone = "phone", e.Play = "play", e.Pause = "pause", e.Search = "search", e.Settings = "settings", e.Shirt = "shirt", e.ShoppingBag = "shopping-bag", e.Ticket = "ticket", e.User = "user", e.Users = "users", e.Update = "update", e.UserCircle = "user-circle", e.X = "x"
        }(Bn || (Bn = {})),
        function(e) {
            e.AmazonAppstore = "amazon-appstore", e.Android = "android", e.AppleAppStore = "apple-app-store", e.Battlenet = "battlenet", e.Google = "google", e.GooglePlay = "google-play", e.Mac = "mac", e.OneStore = "onestore", e.Playstation = "playstation", e.Steam = "steam", e.Switch = "switch", e.Windows = "windows", e.Xbox = "xbox"
        }(Ln || (Ln = {})),
        function(e) {
            e.AmazonAppstoreLogo = "amazon-appstore-logo", e.AppStore = "app-store", e.BattlenetLogo = "battlenet-logo", e.BattlenetLogoColor = "battlenet-logo-color", e.BattlenetLogoColorTrademark = "battlenet-logo-color-trademark", e.BattlenetLogoColorTrademarkTm = "battlenet-logo-color-trademark-tm", e.BattlenetCnLogo = "battlenet-cn-logo", e.BattlenetCnLogoColor = "battlenet-cn-logo-color", e.BattlenetLogoStacked = "battlenet-logo-stacked", e.BattlenetLogoStackedColor = "battlenet-logo-stacked-color", e.BattlenetLogoStackedColorTrademark = "battlenet-logo-stacked-color-trademark", e.BattlenetCnLogoStacked = "battlenet-cn-logo-stacked", e.BattlenetCnLogoStackedColor = "battlenet-cn-logo-stacked-color", e.GooglePlayLogo = "google-play-logo", e.MacLogo = "mac-logo", e.OneStoreLogo = "onestore-logo", e.PlaystationLogo = "playstation-logo", e.Playstation45Logo = "playstation-4-5-logo", e.Playstation4Logo = "playstation-4-logo", e.Playstation5Logo = "playstation-5-logo", e.SteamLogo = "steam-logo", e.SwitchLogo = "switch-logo", e.WindowsLogo = "windows-logo", e.XboxLogo = "xbox-logo", e.XboxOneLogo = "xbox-one-logo", e.XboxSeriesLogo = "xbox-series-logo", e.XboxGamepassLogo = "xbox-gamepass-logo", e.XboxGamepassLogoStacked = "xbox-gamepass-logo-stacked"
        }(Tn || (Tn = {})),
        function(e) {
            e.Facebook = "facebook", e.Instagram = "instagram", e.Reddit = "reddit", e.Twitch = "twitch", e.Twitter = "twitter", e.Vkontakte = "vkontakte", e.Wechat = "wechat", e.Weibo = "weibo", e.Youku = "youku", e.Youtube = "youtube", e.Tiktok = "tiktok", e.Threads = "threads"
        }(Pn || (Pn = {})),
        function(e) {
            e.Blizzcon = "blizzcon", e.BlizzardArcadeCollection = "blizzard-arcade-collection", e.Diablo = "diablo", e.DiabloII = "diablo-II", e.DiabloIII = "diablo-III", e.DiabloIV = "diablo-IV", e.DiabloImmortal = "diablo-immortal", e.Hearthstone = "hearthstone", e.HearthstoneEsports = "hearthstone-esports", e.HeroesOfTheStorm = "heroes-of-the-storm", e.Overwatch2 = "overwatch-2", e.Overwatch2Dark = "overwatch-2-dark", e.Overwatch = "overwatch", e.StarcraftII = "starcraft-II", e.Starcraft = "starcraft", e.Warcraft = "warcraft", e.WarcraftII = "warcraft-II", e.WarcraftIII = "warcraft-III", e.Wotlk = "wotlk", e.WarcraftArclightRumble = "warcraft-arclight-rumble", e.WorldOfWarcraft = "world-of-warcraft", e.WowCata = "wow-cata", e.WowClassic = "wow-classic", e.WowDf = "wow-df", e.WowTww = "wow-tww", e.CodBlackOps4 = "cod-black-ops-4", e.CodBlackOpsCw = "cod-black-ops-cw", e.CodModernWarfare2Cr = "cod-modern-warfare-2-cr", e.CodModernWarfare2 = "cod-modern-warfare-2", e.CodModernWarfare3 = "cod-modern-warfare-3", e.CodModernWarfare = "cod-modern-warfare", e.CodVanguard = "cod-vanguard", e.CodWarzone = "cod-warzone", e.CrashBandicoot4 = "crash-bandicoot-4"
        }(Nn || (Nn = {})),
        function(e) {
            e.HearthstoneOrb = "hearthstone-orb", e.HearthstoneRunestone = "hearthstone-runestone", e.OverwatchCredits = "overwatch-credits", e.OverwatchLeagueTokens = "overwatch-league-tokens", e.Diablo3Platinum = "diablo3-platinum", e.Diablo4Platinum = "diablo4-platinum"
        }(Mn || (Mn = {})),
        function(e) {
            e.Blizzard = "blizzard", e.NeteaseLogo = "netease-logo", e.NeteaseGames = "netease-games"
        }(Dn || (Dn = {})),
        function(e) {
            e.BaseUiLogo = "base-ui-logo", e.BaseUiLogoStacked = "base-ui-logo-stacked", e.BaseUiLogoMini = "base-ui-logo-mini", e.SharedTechLogo = "shared-tech-logo", e.SharedTechLogoStacked = "shared-tech-logo-stacked", e.SharedTechLogoMini = "shared-tech-logo-mini"
        }(jn || (jn = {})),
        function(e) {
            e.BnAccessibilityFilled = "bn-accessibility-filled", e.BnAccountAlertFilled = "bn-account-alert-filled", e.BnAccountDeleteFilled = "bn-account-delete-filled", e.BnAccountFilled = "bn-account-filled", e.BnAccountSettingsFilled = "bn-account-settings-filled", e.BnAlertCriticalFilled = "bn-alert-critical-filled", e.BnAlertFilled = "bn-alert-filled", e.BnAppSettingsFilled = "bn-app-settings-filled", e.BnArrowDownFilled = "bn-arrow-down-filled", e.BnArrowLeftFilled = "bn-arrow-left-filled", e.BnArrowRightFilled = "bn-arrow-right-filled", e.BnArrowUpFilled = "bn-arrow-up-filled", e.BnAttachmentFilled = "bn-attachment-filled", e.BnAuthenticatorDisabledFilled = "bn-authenticator-disabled-filled", e.BnAuthenticatorFilled = "bn-authenticator-filled", e.BnAvailabilityAwayFilled = "bn-availability-away-filled", e.BnAvailabilityBusyFilled = "bn-availability-busy-filled", e.BnAvailabilityOfflineFilled = "bn-availability-offline-filled", e.BnAvailabilityOnlineFilled = "bn-availability-online-filled", e.BnBanFilled = "bn-ban-filled", e.BnBarCodeFilled = "bn-bar-code-filled", e.BnBattletagChangeFilled = "bn-battletag-change-filled", e.BnBellFilled = "bn-bell-filled", e.BnBellOffFilled = "bn-bell-off-filled", e.BnBetaFilled = "bn-beta-filled", e.BnBookmarkFilled = "bn-bookmark-filled", e.BnBrowserAlertFilled = "bn-browser-alert-filled", e.BnBrowserFilled = "bn-browser-filled", e.BnBrowserInfoFilled = "bn-browser-info-filled", e.BnBugFilled = "bn-bug-filled", e.BnCalendarFilled = "bn-calendar-filled", e.BnChannelFilled = "bn-channel-filled", e.BnChatAddFilled = "bn-chat-add-filled", e.BnChatFilled = "bn-chat-filled", e.BnCheckmarkCircleFilled = "bn-checkmark-circle-filled", e.BnCheckmarkFilled = "bn-checkmark-filled", e.BnChevronDownFilled = "bn-chevron-down-filled", e.BnChevronLeftFilled = "bn-chevron-left-filled", e.BnChevronRightFilled = "bn-chevron-right-filled", e.BnChevronUpFilled = "bn-chevron-up-filled", e.BnClockFilled = "bn-clock-filled", e.BnCloseCircleFilled = "bn-close-circle-filled", e.BnCloseFilled = "bn-close-filled", e.BnConsoleFilled = "bn-console-filled", e.BnCopyFilled = "bn-copy-filled", e.BnCreditCardAlertFilled = "bn-credit-card-alert-filled", e.BnCreditCardFilled = "bn-credit-card-filled", e.BnCreditCardRestoreFilled = "bn-credit-card-restore-filled", e.BnCrossplayFilled = "bn-crossplay-filled", e.BnCrownFilled = "bn-crown-filled", e.BnDeleteFilled = "bn-delete-filled", e.BnDesktopFilled = "bn-desktop-filled", e.BnDiskStorageFilled = "bn-disk-storage-filled", e.BnDownloadAlertFilled = "bn-download-alert-filled", e.BnDownloadFilled = "bn-download-filled", e.BnDownloadSettingsFilled = "bn-download-settings-filled", e.BnEmojiFilled = "bn-emoji-filled", e.BnExternalLinkFilled = "bn-external-link-filled", e.BnEyeDisabledFilled = "bn-eye-disabled-filled", e.BnEyeFilled = "bn-eye-filled", e.BnFamilyFilled = "bn-family-filled", e.BnFilterFilled = "bn-filter-filled", e.BnFlagFilled = "bn-flag-filled", e.BnForumsFilled = "bn-forums-filled", e.BnFriendAddFilled = "bn-friend-add-filled", e.BnFriendFilled = "bn-friend-filled", e.BnFriendSettingFilled = "bn-friend-setting-filled", e.BnFriendsFilled = "bn-friends-filled", e.BnGamesFilled = "bn-games-filled", e.BnGearFilled = "bn-gear-filled", e.BnGifFilled = "bn-gif-filled", e.BnGiftFilled = "bn-gift-filled", e.BnGlobeFilled = "bn-globe-filled", e.BnGroupFilled = "bn-group-filled", e.BnHeadsetFilled = "bn-headset-filled", e.BnHeartFilled = "bn-heart-filled", e.BnHistoryFilled = "bn-history-filled", e.BnHomeFilled = "bn-home-filled", e.BnHourglassFilled = "bn-hourglass-filled", e.BnIncognitoFilled = "bn-incognito-filled", e.BnInfoCircleFilled = "bn-info-circle-filled", e.BnInstalledFilled = "bn-installed-filled", e.BnInstantUnlockFilled = "bn-instant-unlock-filled", e.BnKeyFilled = "bn-key-filled", e.BnLegalFilled = "bn-legal-filled", e.BnLetterFilled = "bn-letter-filled", e.BnLibraryFilled = "bn-library-filled", e.BnLightBulbFilled = "bn-light-bulb-filled", e.BnLinkFilled = "bn-link-filled", e.BnListAddFilled = "bn-list-add-filled", e.BnListRemoveFilled = "bn-list-remove-filled", e.BnListFilled = "bn-list-filled", e.BnLockCheckedFilled = "bn-lock-checked-filled", e.BnLockFilled = "bn-lock-filled", e.BnLockOpenFilled = "bn-lock-open-filled", e.BnMenuFilled = "bn-menu-filled", e.BnMicophoneFilled = "bn-micophone-filled", e.BnMicrophoneOffFilled = "bn-microphone-off-filled", e.BnMinusCircleFilled = "bn-minus-circle-filled", e.BnMinusFilled = "bn-minus-filled", e.BnMobileNotificationFilled = "bn-mobile-notification-filled", e.BnMoveDownFilled = "bn-move-down-filled", e.BnMoveLeftFilled = "bn-move-left-filled", e.BnMoveRightFilled = "bn-move-right-filled", e.BnMoveUpFilled = "bn-move-up-filled", e.BnNetworkAlertFilled = "bn-network-alert-filled", e.BnNewFilled = "bn-new-filled", e.BnNewsFilled = "bn-news-filled", e.BnNoteFilled = "bn-note-filled", e.BnOverflowFilled = "bn-overflow-filled", e.BnPauseFilled = "bn-pause-filled", e.BnPencilFilled = "bn-pencil-filled", e.BnPhoneFilled = "bn-phone-filled", e.BnPhonePlayFilled = "bn-phone-play-filled", e.BnPhoneSettingsFilled = "bn-phone-settings-filled", e.BnPlayCircleFilled = "bn-play-circle-filled", e.BnPlayFilled = "bn-play-filled", e.BnPlayerLockFilled = "bn-player-lock-filled", e.BnPlayerResetFilled = "bn-player-reset-filled", e.BnPlusCircleFilled = "bn-plus-circle-filled", e.BnPlusFilled = "bn-plus-filled", e.BnPopInFilled = "bn-pop-in-filled", e.BnPopOutFilled = "bn-pop-out-filled", e.BnQrCodeFilled = "bn-qr-code-filled", e.BnQuestionFilled = "bn-question-filled", e.BnRandomizeFilled = "bn-randomize-filled", e.BnRepeatFilled = "bn-repeat-filled", e.BnReplayFilled = "bn-replay-filled", e.BnRocketFilled = "bn-rocket-filled", e.BnRotateLeftFilled = "bn-rotate-left-filled", e.BnRotateRightFilled = "bn-rotate-right-filled", e.BnSearchFilled = "bn-search-filled", e.BnSendFilled = "bn-send-filled", e.BnShareFilled = "bn-share-filled", e.BnShieldFilled = "bn-shield-filled", e.BnShopAlertFilled = "bn-shop-alert-filled", e.BnShopFilled = "bn-shop-filled", e.BnShuffleFilled = "bn-shuffle-filled", e.BnSignOutFilled = "bn-sign-out-filled", e.BnSpeakerFilled = "bn-speaker-filled", e.BnSpeakerOffFilled = "bn-speaker-off-filled", e.BnSpeakerOnFilled = "bn-speaker-on-filled", e.BnSpecialFilled = "bn-special-filled", e.BnSpeedFilled = "bn-speed-filled", e.BnStarFilled = "bn-star-filled", e.BnSyncFilled = "bn-sync-filled", e.BnTagFilled = "bn-tag-filled", e.BnTagsFilled = "bn-tags-filled", e.BnThumbsDownFilled = "bn-thumbs-down-filled", e.BnThumbsUpFilled = "bn-thumbs-up-filled", e.BnTicketFilled = "bn-ticket-filled", e.BnTranscriptionFilled = "bn-transcription-filled", e.BnTriangleDownFilled = "bn-triangle-down-filled", e.BnTriangleLeftFilled = "bn-triangle-left-filled", e.BnTriangleRightFilled = "bn-triangle-right-filled", e.BnTriangleUpFilled = "bn-triangle-up-filled", e.BnTrophyFilled = "bn-trophy-filled", e.BnUpdateFilled = "bn-update-filled", e.BnUploadFilled = "bn-upload-filled", e.BnVideoFilled = "bn-video-filled", e.BnVoiceChatActiveFilled = "bn-voice-chat-active-filled", e.BnVoiceChatFilled = "bn-voice-chat-filled", e.BnVoiceChatLoadingFilled = "bn-voice-chat-loading-filled", e.BnWindowLockFilled = "bn-window-lock-filled", e.BnWindowUnlockFilled = "bn-window-unlock-filled", e.BnWrenchFilled = "bn-wrench-filled", e.BnZoomFilled = "bn-zoom-filled"
        }(Rn || (Rn = {})),
        function(e) {
            e.BnAccessibilityOutlined = "bn-accessibility-outlined", e.BnAccountAlertOutlined = "bn-account-alert-outlined", e.BnAccountDeleteOutlined = "bn-account-delete-outlined", e.BnAccountOutlined = "bn-account-outlined", e.BnAccountSettingsOutlined = "bn-account-settings-outlined", e.BnAlertCriticalOutlined = "bn-alert-critical-outlined", e.BnAlertOutlined = "bn-alert-outlined", e.BnAppSettingsOutlined = "bn-app-settings-outlined", e.BnArrowDownOutlined = "bn-arrow-down-outlined", e.BnArrowLeftOutlined = "bn-arrow-left-outlined", e.BnArrowRightOutlined = "bn-arrow-right-outlined", e.BnArrowUpOutlined = "bn-arrow-up-outlined", e.BnAttachmentOutlined = "bn-attachment-outlined", e.BnAuthenticatorDisabledOutlined = "bn-authenticator-disabled-outlined", e.BnAuthenticatorOutlined = "bn-authenticator-outlined", e.BnAvailabilityAwayOutlined = "bn-availability-away-outlined", e.BnAvailabilityBusyOutlined = "bn-availability-busy-outlined", e.BnAvailabilityOfflineOutlined = "bn-availability-offline-outlined", e.BnAvailabilityOnlineOutlined = "bn-availability-online-outlined", e.BnBanOutlined = "bn-ban-outlined", e.BnBarCodeOutlined = "bn-bar-code-outlined", e.BnBattletagChangeOutlined = "bn-battletag-change-outlined", e.BnBellOutlined = "bn-bell-outlined", e.BnBellOffOutlined = "bn-bell-off-outlined", e.BnBetaOutlined = "bn-beta-outlined", e.BnBookmarkOutlined = "bn-bookmark-outlined", e.BnBrowserAlertOutlined = "bn-browser-alert-outlined", e.BnBrowserOutlined = "bn-browser-outlined", e.BnBrowserInfoOutlined = "bn-browser-info-outlined", e.BnBugOutlined = "bn-bug-outlined", e.BnCalendarOutlined = "bn-calendar-outlined", e.BnChannelOutlined = "bn-channel-outlined", e.BnChatAddOutlined = "bn-chat-add-outlined", e.BnChatOutlined = "bn-chat-outlined", e.BnCheckmarkCircleOutlined = "bn-checkmark-circle-outlined", e.BnCheckmarkOutlined = "bn-checkmark-outlined", e.BnChevronDownOutlined = "bn-chevron-down-outlined", e.BnChevronLeftOutlined = "bn-chevron-left-outlined", e.BnChevronRightOutlined = "bn-chevron-right-outlined", e.BnChevronUpOutlined = "bn-chevron-up-outlined", e.BnClockOutlined = "bn-clock-outlined", e.BnCloseCircleOutlined = "bn-close-circle-outlined", e.BnCloseOutlined = "bn-close-outlined", e.BnConsoleOutlined = "bn-console-outlined", e.BnCopyOutlined = "bn-copy-outlined", e.BnCreditCardAlertOutlined = "bn-credit-card-alert-outlined", e.BnCreditCardOutlined = "bn-credit-card-outlined", e.BnCreditCardRestoreOutlined = "bn-credit-card-restore-outlined", e.BnCrossplayOutlined = "bn-crossplay-outlined", e.BnCrownOutlined = "bn-crown-outlined", e.BnDeleteOutlined = "bn-delete-outlined", e.BnDesktopOutlined = "bn-desktop-outlined", e.BnDiskStorageOutlined = "bn-disk-storage-outlined", e.BnDownloadAlertOutlined = "bn-download-alert-outlined", e.BnDownloadOutlined = "bn-download-outlined", e.BnDownloadSettingsOutlined = "bn-download-settings-outlined", e.BnEmojiOutlined = "bn-emoji-outlined", e.BnExternalLinkOutlined = "bn-external-link-outlined", e.BnEyeDisabledOutlined = "bn-eye-disabled-outlined", e.BnEyeOutlined = "bn-eye-outlined", e.BnFamilyOutlined = "bn-family-outlined", e.BnFilterOutlined = "bn-filter-outlined", e.BnFlagOutlined = "bn-flag-outlined", e.BnForumsOutlined = "bn-forums-outlined", e.BnFriendAddOutlined = "bn-friend-add-outlined", e.BnFriendOutlined = "bn-friend-outlined", e.BnFriendSettingOutlined = "bn-friend-setting-outlined", e.BnFriendsOutlined = "bn-friends-outlined", e.BnGamesOutlined = "bn-games-outlined", e.BnGearOutlined = "bn-gear-outlined", e.BnGifOutlined = "bn-gif-outlined", e.BnGiftOutlined = "bn-gift-outlined", e.BnGlobeOutlined = "bn-globe-outlined", e.BnGroupOutlined = "bn-group-outlined", e.BnHeadsetOutlined = "bn-headset-outlined", e.BnHeartOutlined = "bn-heart-outlined", e.BnHistoryOutlined = "bn-history-outlined", e.BnHomeOutlined = "bn-home-outlined", e.BnHourglassOutlined = "bn-hourglass-outlined", e.BnIncognitoOutlined = "bn-incognito-outlined", e.BnInfoCircleOutlined = "bn-info-circle-outlined", e.BnInstalledOutlined = "bn-installed-outlined", e.BnInstantUnlockOutlined = "bn-instant-unlock-outlined", e.BnKeyOutlined = "bn-key-outlined", e.BnLegalOutlined = "bn-legal-outlined", e.BnLetterOutlined = "bn-letter-outlined", e.BnLibraryOutlined = "bn-library-outlined", e.BnLightBulbOutlined = "bn-light-bulb-outlined", e.BnLinkOutlined = "bn-link-outlined", e.BnListAddOutlined = "bn-list-add-outlined", e.BnListRemoveOutlined = "bn-list-remove-outlined", e.BnListOutlined = "bn-list-outlined", e.BnLockCheckedOutlined = "bn-lock-checked-outlined", e.BnLockOutlined = "bn-lock-outlined", e.BnLockOpenOutlined = "bn-lock-open-outlined", e.BnMenuOutlined = "bn-menu-outlined", e.BnMicophoneOutlined = "bn-micophone-outlined", e.BnMicrophoneOffOutlined = "bn-microphone-off-outlined", e.BnMinusCircleOutlined = "bn-minus-circle-outlined", e.BnMinusOutlined = "bn-minus-outlined", e.BnMobileNotificationOutlined = "bn-mobile-notification-outlined", e.BnMoveDownOutlined = "bn-move-down-outlined", e.BnMoveLeftOutlined = "bn-move-left-outlined", e.BnMoveRightOutlined = "bn-move-right-outlined", e.BnMoveUpOutlined = "bn-move-up-outlined", e.BnNetworkAlertOutlined = "bn-network-alert-outlined", e.BnNewOutlined = "bn-new-outlined", e.BnNewsOutlined = "bn-news-outlined", e.BnNoteOutlined = "bn-note-outlined", e.BnOverflowOutlined = "bn-overflow-outlined", e.BnPauseOutlined = "bn-pause-outlined", e.BnPencilOutlined = "bn-pencil-outlined", e.BnPhoneOutlined = "bn-phone-outlined", e.BnPhonePlayOutlined = "bn-phone-play-outlined", e.BnPhoneSettingsOutlined = "bn-phone-settings-outlined", e.BnPlayCircleOutlined = "bn-play-circle-outlined", e.BnPlayOutlined = "bn-play-outlined", e.BnPlayerLockOutlined = "bn-player-lock-outlined", e.BnPlayerResetOutlined = "bn-player-reset-outlined", e.BnPlusCircleOutlined = "bn-plus-circle-outlined", e.BnPlusOutlined = "bn-plus-outlined", e.BnPopInOutlined = "bn-pop-in-outlined", e.BnPopOutOutlined = "bn-pop-out-outlined", e.BnQrCodeOutlined = "bn-qr-code-outlined", e.BnQuestionOutlined = "bn-question-outlined", e.BnRandomizeOutlined = "bn-randomize-outlined", e.BnRepeatOutlined = "bn-repeat-outlined", e.BnReplayOutlined = "bn-replay-outlined", e.BnRocketOutlined = "bn-rocket-outlined", e.BnRotateLeftOutlined = "bn-rotate-left-outlined", e.BnRotateRightOutlined = "bn-rotate-right-outlined", e.BnSearchOutlined = "bn-search-outlined", e.BnSendOutlined = "bn-send-outlined", e.BnShareOutlined = "bn-share-outlined", e.BnShieldOutlined = "bn-shield-outlined", e.BnShopAlertOutlined = "bn-shop-alert-outlined", e.BnShopOutlined = "bn-shop-outlined", e.BnShuffleOutlined = "bn-shuffle-outlined", e.BnSignOutOutlined = "bn-sign-out-outlined", e.BnSpeakerOutlined = "bn-speaker-outlined", e.BnSpeakerOffOutlined = "bn-speaker-off-outlined", e.BnSpeakerOnOutlined = "bn-speaker-on-outlined", e.BnSpecialOutlined = "bn-special-outlined", e.BnSpeedOutlined = "bn-speed-outlined", e.BnStarOutlined = "bn-star-outlined", e.BnSyncOutlined = "bn-sync-outlined", e.BnTagOutlined = "bn-tag-outlined", e.BnTagsOutlined = "bn-tags-outlined", e.BnThumbsDownOutlined = "bn-thumbs-down-outlined", e.BnThumbsUpOutlined = "bn-thumbs-up-outlined", e.BnTicketOutlined = "bn-ticket-outlined", e.BnTranscriptionOutlined = "bn-transcription-outlined", e.BnTriangleDownOutlined = "bn-triangle-down-outlined", e.BnTriangleLeftOutlined = "bn-triangle-left-outlined", e.BnTriangleRightOutlined = "bn-triangle-right-outlined", e.BnTriangleUpOutlined = "bn-triangle-up-outlined", e.BnTrophyOutlined = "bn-trophy-outlined", e.BnUpdateOutlined = "bn-update-outlined", e.BnUploadOutlined = "bn-upload-outlined", e.BnVideoOutlined = "bn-video-outlined", e.BnVoiceChatActiveOutlined = "bn-voice-chat-active-outlined", e.BnVoiceChatOutlined = "bn-voice-chat-outlined", e.BnVoiceChatLoadingOutlined = "bn-voice-chat-loading-outlined", e.BnWindowLockOutlined = "bn-window-lock-outlined", e.BnWindowUnlockOutlined = "bn-window-unlock-outlined", e.BnWrenchOutlined = "bn-wrench-outlined", e.BnZoomOutlined = "bn-zoom-outlined"
        }(In || (In = {})), Object.values(Bn), Object.values(Ln), Object.values(Tn), Object.values(Pn), Object.values(Nn), Bn.X, Bn.ArrowLeft, Bn.ArrowRight, Bn.ArrowUp, Bn.ArrowDown, Bn.ArrowUpRight, Bn.ChevronDown, Bn.ChevronDown, Object.values(Mn), Object.values(Dn), Object.values(jn), Object.values(Rn), Object.values(In), Object.values(Rn), Object.values(In);
        const Hn = Un;
        var qn = Un.map((e => e.substring(0, e.lastIndexOf("."))));
        /**
         * @license
         * Copyright 2022 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        /**
         * @license
         * Copyright 2017 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        function Wn(e) {
            return an({
                ...e,
                state: !0,
                attribute: !1
            })
        }
        /**
         * @license
         * Copyright 2017 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        const Vn = 2;
        class Gn {
            constructor(e) {}
            get _$AU() {
                return this._$AM._$AU
            }
            _$AT(e, t, n) {
                this._$Ct = e, this._$AM = t, this._$Ci = n
            }
            _$AS(e, t) {
                return this.update(e, t)
            }
            update(e, t) {
                return this.render(...t)
            }
        }
        /**
         * @license
         * Copyright 2017 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        class Kn extends Gn {
            constructor(e) {
                if (super(e), this.it = Ft, e.type !== Vn) throw Error(this.constructor.directiveName + "() can only be used in child bindings")
            }
            render(e) {
                if (e === Ft || null == e) return this._t = void 0, this.it = e;
                if (e === It) return e;
                if ("string" != typeof e) throw Error(this.constructor.directiveName + "() called with a non-string value");
                if (e === this.it) return this._t;
                this.it = e;
                const t = [e];
                return t.raw = t, this._t = {
                    _$litType$: this.constructor.resultType,
                    strings: t,
                    values: []
                }
            }
        }
        Kn.directiveName = "unsafeHTML", Kn.resultType = 1;
        /**
         * @license
         * Copyright 2017 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        class Yn extends Kn {}
        Yn.directiveName = "unsafeSVG", Yn.resultType = 2;
        const Xn = (e => (...t) => ({
            _$litDirective$: e,
            values: t
        }))(Yn);
        var Zn = ot`:host{--logo-icon-scale:0.75;--jumbo:var(--global-size-600);--large:var(--global-size-400);--medium:var(--global-size-300);--small:var(--global-size-250);display:inline-block}#icon{display:block}img,svg{height:100%;width:100%}@media (min-width:960px){:host{--logo-icon-scale:1}}@media (min-width:720px){:host{--jumbo:var(--global-size-800);--large:var(--global-size-600);--medium:calc(var(--global-size-900) / 2);--small:var(--global-size-300)}}.analytics-wrapper{display:contents}`,
            Jn = function(e, t, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
                return r > 3 && a && Object.defineProperty(t, n, a), a
            };
        class Qn extends On {
            constructor() {
                super(...arguments), this.userCountry = "", this.width = 0, this.height = 0, this.svgContent = "", this.imageUrl = "", this.loading = !1, this.iconContent = {}, this.requests = {}
            }
            static get styles() {
                return [...On.styles, Zn]
            }
            get isChina() {
                return this.userCountry && "CHN" === this.userCountry || this.isChinaHost(window.location.host)
            }
            isChinaHost(e) {
                return e.endsWith(".cn")
            }
            connectedCallback() {
                super.connectedCallback(), this.loadIcon(), this._analyticsListener()
            }
            willUpdate(e) {
                super.willUpdate(e), (e.has("icon") || e.has("src") || e.has("userCountry")) && this.loadIcon(), !e.has("svgContent") && !e.has("imageUrl") || this.size || this.setSize()
            }
            updated(e) {
                super.updated(e);
                const t = this.shadowRoot?.querySelector("svg");
                t && !t.hasAttribute("part") && t.setAttribute("part", "icon"), e.forEach(((e, t) => {
                    "tooltip" !== t && "svgContent" !== t && "imageUrl" !== t || this.setTooltip()
                }))
            }
            render() {
                let e;
                const t = {
                    jumbo: "--jumbo",
                    large: "--large",
                    medium: "--medium",
                    small: "--small"
                };
                this.variant && (e = `var(${t[this.variant]})`), !e && this.size && (e = `var(--size-${this.size})`);
                const n = Rt`<style>:host{width:${e||this.width+"px"};height:${e||this.height+"px"}}:host([icon*=logo]),:host([icon=app-store]){width:calc(var(--logo-icon-scale) * ${this.width+"px"});height:calc(var(--logo-icon-scale) * ${this.height+"px"})}</style>`;
                if (this.svgContent) return Rt`${n}${Xn(this.svgContent)}`;
                if (this.imageUrl) {
                    let e = this.imageUrl;
                    if (!this.src) {
                        const t = this.size && ze(`--size-${this.size}`);
                        e = `${e}?width=${2*Number(t||this.width)}`
                    }
                    return Rt`${n}<img src="${e}" alt="${dn(this.iconTitle||this.icon)}">`
                }
                return this.loading ? Rt`${n}<slot name="loading"></slot>` : Rt`${this.iconTitle||this.icon}`
            }
            getIconUrl() {
                const e = this.isChina ? Qn.ICONS_HOST_CN : Qn.ICONS_HOST;
                let t = this.src ? this.src : "";
                if (this.icon && qn.includes(this.icon)) {
                    const n = Hn.find((e => e.startsWith(`${this.icon}.`)));
                    n && (t = `${e}${n}`)
                }
                return t
            }
            isValid(e) {
                return 1 !== e.nodeType || "script" !== e.nodeName.toLowerCase() && !(Array.from(e.attributes).some((e => "string" == typeof e.value && e.value.toLowerCase().startsWith("on"))) || Array.from(e.childNodes).some((e => !this.isValid(e))))
            }
            async getSvgContent(e) {
                let t = this.requests[e];
                t ? this.iconContent[e] = "" : (t = this.fetchSvgContent(e), this.requests[e] = t), await t
            }
            async fetchSvgContent(e) {
                const t = await fetch(e);
                if (t.ok) {
                    let n = await t.text();
                    n && (n = this.validateContent(n)), this.iconContent[e] = n || ""
                }
            }
            validateContent(e) {
                const t = document.createElement("div");
                t.innerHTML = e, Array.from(t.childNodes).forEach((e => {
                    "svg" !== e.nodeName.toLowerCase() && t.removeChild(e)
                }));
                const n = t.firstElementChild;
                return n && "svg" === n.nodeName.toLowerCase() && this.isValid(n) ? t.innerHTML : ""
            }
            loadIcon() {
                const e = this.getIconUrl();
                if (!e) return;
                e.includes(".svg") ? this.icon && qn.includes(this.icon) && this.iconContent[e] ? this.svgContent = this.iconContent[e] : (this.icon && qn.includes(this.icon) || this.src) && (this.loading = !0, this.getSvgContent(e).then((() => {
                    this.loading = !1, this.svgContent = this.iconContent[e]
                }))) : (this.icon && qn.includes(this.icon) && (this.loading = !0), this.imageUrl = e)
            }
            setTooltip() {
                const e = this.shadowRoot?.querySelector("svg");
                if ("native" === this.tooltip) {
                    const t = this.getAttribute(Me);
                    if (t) {
                        const n = document.createElement("title");
                        n.setAttribute("id", "title"), n.textContent = t, e?.setAttribute("aria-labelledby", "title"), e?.appendChild(n), this.removeAttribute(Me)
                    }
                } else if ("custom" === this.tooltip) {
                    const t = this.shadowRoot?.querySelector("title"),
                        n = this.shadowRoot?.querySelector("img");
                    t && t.textContent && (this.setAttribute(Me, this.iconTitle ? this.iconTitle : t.textContent), e?.removeAttribute("aria-labelledby"), t.remove()), n && this.iconTitle && this.setAttribute(Me, this.iconTitle)
                }
            }
            setSize() {
                const e = document.createElement("div");
                e.innerHTML = this.svgContent, this.svgContent ? (this.width = Number(e?.firstElementChild?.getAttribute("viewBox")?.split(" ")[2]), this.height = Number(e?.firstElementChild?.getAttribute("viewBox")?.split(" ")[3])) : (this.width = 48, this.height = 48)
            }
            _analyticsListener() {
                const e = Ae(this).find((e => "A" === e.nodeName));
                e?.addEventListener("click", (() => {
                    e.hasAttribute("href") && "javascript:" !== e.getAttribute("href") && super.pushEventFromGenerator($n, {
                        destination_url: e.getAttribute("href")
                    })
                }))
            }
        }
        Qn.ICONS_HOST = "https://d1yyu14twbo3rh.cloudfront.net/icons/", Qn.ICONS_HOST_CN = "https://baseui.trbstatic.cn/icons/";
        var eo, to, no, oo, io, ro, ao, so = Qn;
        Jn([an({
                type: String
            })], Qn.prototype, "icon", void 0), Jn([an({
                type: String
            })], Qn.prototype, "src", void 0), Jn([an({
                type: String,
                attribute: "title"
            })], Qn.prototype, "iconTitle", void 0), Jn([an({
                type: Number
            })], Qn.prototype, "size", void 0), Jn([an({
                type: String
            })], Qn.prototype, "variant", void 0), Jn([an({
                type: String
            })], Qn.prototype, "tooltip", void 0), Jn([an({
                type: String,
                attribute: "user-country"
            })], Qn.prototype, "userCountry", void 0), Jn([Wn()], Qn.prototype, "width", void 0), Jn([Wn()], Qn.prototype, "height", void 0), Jn([Wn()], Qn.prototype, "svgContent", void 0), Jn([Wn()], Qn.prototype, "imageUrl", void 0), Jn([Wn()], Qn.prototype, "loading", void 0), Jn([Wn()], Qn.prototype, "iconContent", void 0), Jn([Wn()], Qn.prototype, "requests", void 0),
            function(e) {
                e.Other = "click_cta", e.Click = "click", e.Download = "click_download", e.Register = "click_register", e.Buy = "click_buy", e.Login = "click_login", e.HeaderNav = "header_nav"
            }(eo || (eo = {})),
            function(e) {
                e.Seek = "video_seek", e.Play = "video_play", e.Pause = "video_pause", e.Complete = "video_complete_native", e.Audio = "video_audio_select"
            }(to || (to = {})),
            function(e) {
                e.Open = "modal_open", e.Close = "modal_close"
            }(no || (no = {})),
            function(e) {
                e.View = "view_carousel", e.Navigation = "carousel_navigation", e.Click = "click_carousel", e.Engagement = "content_engagement"
            }(oo || (oo = {})),
            function(e) {
                e.Gate = "age_gate"
            }(io || (io = {})),
            function(e) {
                e.Success = "success", e.Lockout = "lockout"
            }(ro || (ro = {})),
            function(e) {
                e.DESTINATION_URL = "destination_url", e.COMPONENT = "component"
            }(ao || (ao = {}));
        var lo = function(e, t, n, o) {
            var i, r = arguments.length,
                a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
            else
                for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
            return r > 3 && a && Object.defineProperty(t, n, a), a
        };
        class co extends On {
            static get styles() {
                return [...On.styles, Fn]
            }
            get componentDependencies() {
                return {
                    "trb-icon-button-icon": so
                }
            }
            constructor() {
                super(), this.size = "medium", this.variant = "default", this.cosmetic = !1, this.analyticsEvent = eo.Other, this.variant = "default"
            }
            get _defaultSlottedAttributes() {
                return {
                    "trb-icon": {
                        size: {
                            value: 300
                        }
                    }
                }
            }
            focus(e) {
                this.shadowRoot.querySelector("button").focus(e)
            }
            renderIconSlot() {
                const e = "medium" === this.size ? "300" : "200";
                return Rt`<slot><trb-icon-button-icon icon="${dn(this.icon)}" src="${dn(this.src)}" title="${dn(this.ariaLabel)}" size="${e}" part="icon"></trb-icon-button-icon></slot>`
            }
            render() {
                return this.cosmetic ? Rt`${this.renderIconSlot()}` : Rt`<button part="button" aria-label="${dn(this.ariaLabel)}" @click="${this._pushAnalyticsEvent}">${this.renderIconSlot()}</button>`
            }
            _pushAnalyticsEvent() {
                const e = Ae(this).find((({
                        nodeName: e
                    }) => "A" === e)),
                    t = e ? {
                        [ao.DESTINATION_URL]: e.href
                    } : {};
                super.pushEventFromGenerator($n, t)
            }
        }
        lo([an({
            type: String,
            attribute: "data-aria-label"
        })], co.prototype, "ariaLabel", void 0), lo([an({
            type: String
        })], co.prototype, "icon", void 0), lo([an({
            type: String
        })], co.prototype, "src", void 0), lo([an({
            type: String,
            reflect: !0
        })], co.prototype, "size", void 0), lo([an({
            type: String
        })], co.prototype, "variant", void 0), lo([an({
            type: Boolean
        })], co.prototype, "cosmetic", void 0);
        const uo = "en-US",
            ho = ["en-US", "de-DE", "es-ES", "es-MX", "fr-FR", "it-IT", "ja-JP", "ko-KR", "pl-PL", "pt-BR", "ru-RU", "th-TH", "tr-TR", "zh-CN", "zh-TW"],
            po = /([a-z]{2})[-_]?([a-z]{2})?/i,
            bo = e => {
                class t extends e {
                    constructor() {
                        super(...arguments), this.lang = "en-US", this.loc = {}
                    }
                    initializeLoc(...e) {
                        this.lang = this.getDocumentLocale(), e.length && (this.loc = this.concatLocStrings(e))
                    }
                    getString(e, t) {
                        const n = this.lang || this.getDocumentLocale(),
                            o = this.loc[n] && this.loc[n][e] ? this.loc[n][e] : this.loc[uo][e] || e;
                        return t ? this.replaceStringVars(o, t) : o
                    }
                    getDocumentLocale() {
                        let e = uo;
                        const t = po.exec(document.documentElement.lang);
                        if (t) {
                            const [, n, o] = t;
                            n && (e = o ? `${n.toLowerCase()}-${o.toUpperCase()}` : n.toLowerCase())
                        }
                        if (ho.includes(e)) return e;
                        if ("function" == typeof Intl?.Locale) {
                            const t = new Intl.Locale(e).maximize();
                            e = `${t.language}-${t.region}`
                        } else e = window.navigator.language;
                        return ho.includes(e) ? e : uo
                    }
                    replaceStringVars(e, t) {
                        let n = t;
                        return Array.isArray(t) && (n = t.reduce(((e, t, n) => (e[n] = t, e)), {})), e.replace(/\{\w+\}/g, (e => String(n[e.slice(1, -1)]) || e))
                    }
                    concatLocStrings(e) {
                        const t = {};
                        return e.forEach((e => {
                            Object.keys(e).forEach((n => {
                                t[n] = {
                                    ...this.loc[n] || {},
                                    ...e[n] || {}
                                }
                            }))
                        })), t
                    }
                }
                return function(e, t, n, o) {
                    var i, r = arguments.length,
                        a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
                    r > 3 && a && Object.defineProperty(t, n, a)
                }([an({
                    type: String
                })], t.prototype, "lang", void 0), t
            };
        /*!
         * tabbable 6.2.0
         * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
         */
        var vo = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"],
            fo = vo.join(","),
            go = "undefined" == typeof Element,
            mo = go ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
            wo = !go && Element.prototype.getRootNode ? function(e) {
                var t;
                return null == e || null === (t = e.getRootNode) || void 0 === t ? void 0 : t.call(e)
            } : function(e) {
                return null == e ? void 0 : e.ownerDocument
            },
            _o = function e(t, n) {
                var o;
                void 0 === n && (n = !0);
                var i = null == t || null === (o = t.getAttribute) || void 0 === o ? void 0 : o.call(t, "inert");
                return "" === i || "true" === i || n && t && e(t.parentNode)
            },
            yo = function(e, t, n) {
                if (_o(e)) return [];
                var o = Array.prototype.slice.apply(e.querySelectorAll(fo));
                return t && mo.call(e, fo) && o.unshift(e), o = o.filter(n)
            },
            ko = function e(t, n, o) {
                for (var i = [], r = Array.from(t); r.length;) {
                    var a = r.shift();
                    if (!_o(a, !1))
                        if ("SLOT" === a.tagName) {
                            var s = a.assignedElements(),
                                l = e(s.length ? s : a.children, !0, o);
                            o.flatten ? i.push.apply(i, l) : i.push({
                                scopeParent: a,
                                candidates: l
                            })
                        } else {
                            mo.call(a, fo) && o.filter(a) && (n || !t.includes(a)) && i.push(a);
                            var d = a.shadowRoot || "function" == typeof o.getShadowRoot && o.getShadowRoot(a),
                                c = !_o(d, !1) && (!o.shadowRootFilter || o.shadowRootFilter(a));
                            if (d && c) {
                                var u = e(!0 === d ? a.children : d.children, !0, o);
                                o.flatten ? i.push.apply(i, u) : i.push({
                                    scopeParent: a,
                                    candidates: u
                                })
                            } else r.unshift.apply(r, a.children)
                        }
                }
                return i
            },
            zo = function(e) {
                return !isNaN(parseInt(e.getAttribute("tabindex"), 10))
            },
            Ao = function(e) {
                if (!e) throw new Error("No node provided");
                return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || function(e) {
                    var t, n = null == e || null === (t = e.getAttribute) || void 0 === t ? void 0 : t.call(e, "contenteditable");
                    return "" === n || "true" === n
                }(e)) && !zo(e) ? 0 : e.tabIndex
            },
            xo = function(e, t) {
                return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
            },
            So = function(e) {
                return "INPUT" === e.tagName
            },
            $o = function(e) {
                return function(e) {
                    return So(e) && "radio" === e.type
                }(e) && ! function(e) {
                    if (!e.name) return !0;
                    var t, n = e.form || wo(e),
                        o = function(e) {
                            return n.querySelectorAll('input[type="radio"][name="' + e + '"]')
                        };
                    if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) t = o(window.CSS.escape(e.name));
                    else try {
                        t = o(e.name)
                    } catch (e) {
                        return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1
                    }
                    var i = function(e, t) {
                        for (var n = 0; n < e.length; n++)
                            if (e[n].checked && e[n].form === t) return e[n]
                    }(t, e.form);
                    return !i || i === e
                }(e)
            },
            Eo = function(e) {
                var t = e.getBoundingClientRect(),
                    n = t.width,
                    o = t.height;
                return 0 === n && 0 === o
            },
            Co = function(e, t) {
                var n = t.displayCheck,
                    o = t.getShadowRoot;
                if ("hidden" === getComputedStyle(e).visibility) return !0;
                var i = mo.call(e, "details>summary:first-of-type") ? e.parentElement : e;
                if (mo.call(i, "details:not([open]) *")) return !0;
                if (n && "full" !== n && "legacy-full" !== n) {
                    if ("non-zero-area" === n) return Eo(e)
                } else {
                    if ("function" == typeof o) {
                        for (var r = e; e;) {
                            var a = e.parentElement,
                                s = wo(e);
                            if (a && !a.shadowRoot && !0 === o(a)) return Eo(e);
                            e = e.assignedSlot ? e.assignedSlot : a || s === e.ownerDocument ? a : s.host
                        }
                        e = r
                    }
                    if (function(e) {
                            var t, n, o, i, r = e && wo(e),
                                a = null === (t = r) || void 0 === t ? void 0 : t.host,
                                s = !1;
                            if (r && r !== e)
                                for (s = !!(null !== (n = a) && void 0 !== n && null !== (o = n.ownerDocument) && void 0 !== o && o.contains(a) || null != e && null !== (i = e.ownerDocument) && void 0 !== i && i.contains(e)); !s && a;) {
                                    var l, d, c;
                                    s = !(null === (d = a = null === (l = r = wo(a)) || void 0 === l ? void 0 : l.host) || void 0 === d || null === (c = d.ownerDocument) || void 0 === c || !c.contains(a))
                                }
                            return s
                        }(e)) return !e.getClientRects().length;
                    if ("legacy-full" !== n) return !0
                }
                return !1
            },
            Oo = function(e, t) {
                return !(t.disabled || _o(t) || function(e) {
                    return So(e) && "hidden" === e.type
                }(t) || Co(t, e) || function(e) {
                    return "DETAILS" === e.tagName && Array.prototype.slice.apply(e.children).some((function(e) {
                        return "SUMMARY" === e.tagName
                    }))
                }(t) || function(e) {
                    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                        for (var t = e.parentElement; t;) {
                            if ("FIELDSET" === t.tagName && t.disabled) {
                                for (var n = 0; n < t.children.length; n++) {
                                    var o = t.children.item(n);
                                    if ("LEGEND" === o.tagName) return !!mo.call(t, "fieldset[disabled] *") || !o.contains(e)
                                }
                                return !0
                            }
                            t = t.parentElement
                        }
                    return !1
                }(t))
            },
            Bo = function(e, t) {
                return !($o(t) || Ao(t) < 0 || !Oo(e, t))
            },
            Lo = function(e) {
                var t = parseInt(e.getAttribute("tabindex"), 10);
                return !!(isNaN(t) || t >= 0)
            },
            To = function e(t) {
                var n = [],
                    o = [];
                return t.forEach((function(t, i) {
                    var r = !!t.scopeParent,
                        a = r ? t.scopeParent : t,
                        s = function(e, t) {
                            var n = Ao(e);
                            return n < 0 && t && !zo(e) ? 0 : n
                        }(a, r),
                        l = r ? e(t.candidates) : a;
                    0 === s ? r ? n.push.apply(n, l) : n.push(a) : o.push({
                        documentOrder: i,
                        tabIndex: s,
                        item: t,
                        isScope: r,
                        content: l
                    })
                })), o.sort(xo).reduce((function(e, t) {
                    return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
                }), []).concat(n)
            },
            Po = function(e, t) {
                if (t = t || {}, !e) throw new Error("No node provided");
                return !1 !== mo.call(e, fo) && Bo(t, e)
            },
            No = vo.concat("iframe").join(","),
            Mo = function(e, t) {
                if (t = t || {}, !e) throw new Error("No node provided");
                return !1 !== mo.call(e, No) && Oo(t, e)
            };
        /*!
         * focus-trap 7.5.4
         * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
         */
        function Do(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, o)
            }
            return n
        }

        function jo(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Do(Object(n), !0).forEach((function(t) {
                    Ro(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Do(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Ro(e, t, n) {
            return (t = function(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" != typeof o) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var Io = function(e, t) {
                if (e.length > 0) {
                    var n = e[e.length - 1];
                    n !== t && n.pause()
                }
                var o = e.indexOf(t); - 1 === o || e.splice(o, 1), e.push(t)
            },
            Fo = function(e, t) {
                var n = e.indexOf(t); - 1 !== n && e.splice(n, 1), e.length > 0 && e[e.length - 1].unpause()
            },
            Uo = function(e) {
                return "Tab" === (null == e ? void 0 : e.key) || 9 === (null == e ? void 0 : e.keyCode)
            },
            Ho = function(e) {
                return Uo(e) && !e.shiftKey
            },
            qo = function(e) {
                return Uo(e) && e.shiftKey
            },
            Wo = function(e) {
                return setTimeout(e, 0)
            },
            Vo = function(e, t) {
                var n = -1;
                return e.every((function(e, o) {
                    return !t(e) || (n = o, !1)
                })), n
            },
            Go = function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                return "function" == typeof e ? e.apply(void 0, n) : e
            },
            Ko = function(e) {
                return e.target.shadowRoot && "function" == typeof e.composedPath ? e.composedPath()[0] : e.target
            },
            Yo = [],
            Xo = function(e, t) {
                var n, o = (null == t ? void 0 : t.document) || document,
                    i = (null == t ? void 0 : t.trapStack) || Yo,
                    r = jo({
                        returnFocusOnDeactivate: !0,
                        escapeDeactivates: !0,
                        delayInitialFocus: !0,
                        isKeyForward: Ho,
                        isKeyBackward: qo
                    }, t),
                    a = {
                        containers: [],
                        containerGroups: [],
                        tabbableGroups: [],
                        nodeFocusedBeforeActivation: null,
                        mostRecentlyFocusedNode: null,
                        active: !1,
                        paused: !1,
                        delayInitialFocusTimer: void 0,
                        recentNavEvent: void 0
                    },
                    s = function(e, t, n) {
                        return e && void 0 !== e[t] ? e[t] : r[n || t]
                    },
                    l = function(e, t) {
                        var n = "function" == typeof(null == t ? void 0 : t.composedPath) ? t.composedPath() : void 0;
                        return a.containerGroups.findIndex((function(t) {
                            var o = t.container,
                                i = t.tabbableNodes;
                            return o.contains(e) || (null == n ? void 0 : n.includes(o)) || i.find((function(t) {
                                return t === e
                            }))
                        }))
                    },
                    d = function(e) {
                        var t = r[e];
                        if ("function" == typeof t) {
                            for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
                            t = t.apply(void 0, i)
                        }
                        if (!0 === t && (t = void 0), !t) {
                            if (void 0 === t || !1 === t) return t;
                            throw new Error("`".concat(e, "` was specified but was not a node, or did not return a node"))
                        }
                        var s = t;
                        if ("string" == typeof t && !(s = o.querySelector(t))) throw new Error("`".concat(e, "` as selector refers to no known node"));
                        return s
                    },
                    c = function() {
                        var e = d("initialFocus");
                        if (!1 === e) return !1;
                        if (void 0 === e || !Mo(e, r.tabbableOptions))
                            if (l(o.activeElement) >= 0) e = o.activeElement;
                            else {
                                var t = a.tabbableGroups[0];
                                e = t && t.firstTabbableNode || d("fallbackFocus")
                            } if (!e) throw new Error("Your focus-trap needs to have at least one focusable element");
                        return e
                    },
                    u = function() {
                        if (a.containerGroups = a.containers.map((function(e) {
                                var t = function(e, t) {
                                        var n;
                                        return n = (t = t || {}).getShadowRoot ? ko([e], t.includeContainer, {
                                            filter: Bo.bind(null, t),
                                            flatten: !1,
                                            getShadowRoot: t.getShadowRoot,
                                            shadowRootFilter: Lo
                                        }) : yo(e, t.includeContainer, Bo.bind(null, t)), To(n)
                                    }(e, r.tabbableOptions),
                                    n = function(e, t) {
                                        return (t = t || {}).getShadowRoot ? ko([e], t.includeContainer, {
                                            filter: Oo.bind(null, t),
                                            flatten: !0,
                                            getShadowRoot: t.getShadowRoot
                                        }) : yo(e, t.includeContainer, Oo.bind(null, t))
                                    }(e, r.tabbableOptions),
                                    o = t.length > 0 ? t[0] : void 0,
                                    i = t.length > 0 ? t[t.length - 1] : void 0,
                                    a = n.find((function(e) {
                                        return Po(e)
                                    })),
                                    s = n.slice().reverse().find((function(e) {
                                        return Po(e)
                                    })),
                                    l = !!t.find((function(e) {
                                        return Ao(e) > 0
                                    }));
                                return {
                                    container: e,
                                    tabbableNodes: t,
                                    focusableNodes: n,
                                    posTabIndexesFound: l,
                                    firstTabbableNode: o,
                                    lastTabbableNode: i,
                                    firstDomTabbableNode: a,
                                    lastDomTabbableNode: s,
                                    nextTabbableNode: function(e) {
                                        var o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                            i = t.indexOf(e);
                                        return i < 0 ? o ? n.slice(n.indexOf(e) + 1).find((function(e) {
                                            return Po(e)
                                        })) : n.slice(0, n.indexOf(e)).reverse().find((function(e) {
                                            return Po(e)
                                        })) : t[i + (o ? 1 : -1)]
                                    }
                                }
                            })), a.tabbableGroups = a.containerGroups.filter((function(e) {
                                return e.tabbableNodes.length > 0
                            })), a.tabbableGroups.length <= 0 && !d("fallbackFocus")) throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
                        if (a.containerGroups.find((function(e) {
                                return e.posTabIndexesFound
                            })) && a.containerGroups.length > 1) throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
                    },
                    h = function e(t) {
                        var n = t.activeElement;
                        if (n) return n.shadowRoot && null !== n.shadowRoot.activeElement ? e(n.shadowRoot) : n
                    },
                    p = function e(t) {
                        !1 !== t && t !== h(document) && (t && t.focus ? (t.focus({
                            preventScroll: !!r.preventScroll
                        }), a.mostRecentlyFocusedNode = t, function(e) {
                            return e.tagName && "input" === e.tagName.toLowerCase() && "function" == typeof e.select
                        }(t) && t.select()) : e(c()))
                    },
                    b = function(e) {
                        var t = d("setReturnFocus", e);
                        return t || !1 !== t && e
                    },
                    v = function(e) {
                        var t = e.target,
                            n = e.event,
                            o = e.isBackward,
                            i = void 0 !== o && o;
                        t = t || Ko(n), u();
                        var s = null;
                        if (a.tabbableGroups.length > 0) {
                            var c = l(t, n),
                                h = c >= 0 ? a.containerGroups[c] : void 0;
                            if (c < 0) s = i ? a.tabbableGroups[a.tabbableGroups.length - 1].lastTabbableNode : a.tabbableGroups[0].firstTabbableNode;
                            else if (i) {
                                var p = Vo(a.tabbableGroups, (function(e) {
                                    var n = e.firstTabbableNode;
                                    return t === n
                                }));
                                if (p < 0 && (h.container === t || Mo(t, r.tabbableOptions) && !Po(t, r.tabbableOptions) && !h.nextTabbableNode(t, !1)) && (p = c), p >= 0) {
                                    var b = 0 === p ? a.tabbableGroups.length - 1 : p - 1,
                                        v = a.tabbableGroups[b];
                                    s = Ao(t) >= 0 ? v.lastTabbableNode : v.lastDomTabbableNode
                                } else Uo(n) || (s = h.nextTabbableNode(t, !1))
                            } else {
                                var f = Vo(a.tabbableGroups, (function(e) {
                                    var n = e.lastTabbableNode;
                                    return t === n
                                }));
                                if (f < 0 && (h.container === t || Mo(t, r.tabbableOptions) && !Po(t, r.tabbableOptions) && !h.nextTabbableNode(t)) && (f = c), f >= 0) {
                                    var g = f === a.tabbableGroups.length - 1 ? 0 : f + 1,
                                        m = a.tabbableGroups[g];
                                    s = Ao(t) >= 0 ? m.firstTabbableNode : m.firstDomTabbableNode
                                } else Uo(n) || (s = h.nextTabbableNode(t))
                            }
                        } else s = d("fallbackFocus");
                        return s
                    },
                    f = function(e) {
                        var t = Ko(e);
                        l(t, e) >= 0 || (Go(r.clickOutsideDeactivates, e) ? n.deactivate({
                            returnFocus: r.returnFocusOnDeactivate
                        }) : Go(r.allowOutsideClick, e) || e.preventDefault())
                    },
                    g = function(e) {
                        var t = Ko(e),
                            n = l(t, e) >= 0;
                        if (n || t instanceof Document) n && (a.mostRecentlyFocusedNode = t);
                        else {
                            var o;
                            e.stopImmediatePropagation();
                            var i = !0;
                            if (a.mostRecentlyFocusedNode)
                                if (Ao(a.mostRecentlyFocusedNode) > 0) {
                                    var s = l(a.mostRecentlyFocusedNode),
                                        d = a.containerGroups[s].tabbableNodes;
                                    if (d.length > 0) {
                                        var u = d.findIndex((function(e) {
                                            return e === a.mostRecentlyFocusedNode
                                        }));
                                        u >= 0 && (r.isKeyForward(a.recentNavEvent) ? u + 1 < d.length && (o = d[u + 1], i = !1) : u - 1 >= 0 && (o = d[u - 1], i = !1))
                                    }
                                } else a.containerGroups.some((function(e) {
                                    return e.tabbableNodes.some((function(e) {
                                        return Ao(e) > 0
                                    }))
                                })) || (i = !1);
                            else i = !1;
                            i && (o = v({
                                target: a.mostRecentlyFocusedNode,
                                isBackward: r.isKeyBackward(a.recentNavEvent)
                            })), p(o || (a.mostRecentlyFocusedNode || c()))
                        }
                        a.recentNavEvent = void 0
                    },
                    m = function(e) {
                        if (function(e) {
                                return "Escape" === (null == e ? void 0 : e.key) || "Esc" === (null == e ? void 0 : e.key) || 27 === (null == e ? void 0 : e.keyCode)
                            }(e) && !1 !== Go(r.escapeDeactivates, e)) return e.preventDefault(), void n.deactivate();
                        (r.isKeyForward(e) || r.isKeyBackward(e)) && function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            a.recentNavEvent = e;
                            var n = v({
                                event: e,
                                isBackward: t
                            });
                            n && (Uo(e) && e.preventDefault(), p(n))
                        }(e, r.isKeyBackward(e))
                    },
                    w = function(e) {
                        var t = Ko(e);
                        l(t, e) >= 0 || Go(r.clickOutsideDeactivates, e) || Go(r.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation())
                    },
                    _ = function() {
                        if (a.active) return Io(i, n), a.delayInitialFocusTimer = r.delayInitialFocus ? Wo((function() {
                            p(c())
                        })) : p(c()), o.addEventListener("focusin", g, !0), o.addEventListener("mousedown", f, {
                            capture: !0,
                            passive: !1
                        }), o.addEventListener("touchstart", f, {
                            capture: !0,
                            passive: !1
                        }), o.addEventListener("click", w, {
                            capture: !0,
                            passive: !1
                        }), o.addEventListener("keydown", m, {
                            capture: !0,
                            passive: !1
                        }), n
                    },
                    y = function() {
                        if (a.active) return o.removeEventListener("focusin", g, !0), o.removeEventListener("mousedown", f, !0), o.removeEventListener("touchstart", f, !0), o.removeEventListener("click", w, !0), o.removeEventListener("keydown", m, !0), n
                    },
                    k = "undefined" != typeof window && "MutationObserver" in window ? new MutationObserver((function(e) {
                        e.some((function(e) {
                            return Array.from(e.removedNodes).some((function(e) {
                                return e === a.mostRecentlyFocusedNode
                            }))
                        })) && p(c())
                    })) : void 0,
                    z = function() {
                        k && (k.disconnect(), a.active && !a.paused && a.containers.map((function(e) {
                            k.observe(e, {
                                subtree: !0,
                                childList: !0
                            })
                        })))
                    };
                return (n = {
                    get active() {
                        return a.active
                    },
                    get paused() {
                        return a.paused
                    },
                    activate: function(e) {
                        if (a.active) return this;
                        var t = s(e, "onActivate"),
                            n = s(e, "onPostActivate"),
                            i = s(e, "checkCanFocusTrap");
                        i || u(), a.active = !0, a.paused = !1, a.nodeFocusedBeforeActivation = o.activeElement, null == t || t();
                        var r = function() {
                            i && u(), _(), z(), null == n || n()
                        };
                        return i ? (i(a.containers.concat()).then(r, r), this) : (r(), this)
                    },
                    deactivate: function(e) {
                        if (!a.active) return this;
                        var t = jo({
                            onDeactivate: r.onDeactivate,
                            onPostDeactivate: r.onPostDeactivate,
                            checkCanReturnFocus: r.checkCanReturnFocus
                        }, e);
                        clearTimeout(a.delayInitialFocusTimer), a.delayInitialFocusTimer = void 0, y(), a.active = !1, a.paused = !1, z(), Fo(i, n);
                        var o = s(t, "onDeactivate"),
                            l = s(t, "onPostDeactivate"),
                            d = s(t, "checkCanReturnFocus"),
                            c = s(t, "returnFocus", "returnFocusOnDeactivate");
                        null == o || o();
                        var u = function() {
                            Wo((function() {
                                c && p(b(a.nodeFocusedBeforeActivation)), null == l || l()
                            }))
                        };
                        return c && d ? (d(b(a.nodeFocusedBeforeActivation)).then(u, u), this) : (u(), this)
                    },
                    pause: function(e) {
                        if (a.paused || !a.active) return this;
                        var t = s(e, "onPause"),
                            n = s(e, "onPostPause");
                        return a.paused = !0, null == t || t(), y(), z(), null == n || n(), this
                    },
                    unpause: function(e) {
                        if (!a.paused || !a.active) return this;
                        var t = s(e, "onUnpause"),
                            n = s(e, "onPostUnpause");
                        return a.paused = !1, null == t || t(), u(), _(), z(), null == n || n(), this
                    },
                    updateContainerElements: function(e) {
                        var t = [].concat(e).filter(Boolean);
                        return a.containers = t.map((function(e) {
                            return "string" == typeof e ? o.querySelector(e) : e
                        })), a.active && u(), z(), this
                    }
                }).updateContainerElements(e), n
            };
        /**
         * @license
         * Copyright 2017 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        function Zo(e) {
            return (t, n) => {
                const {
                    slot: o
                } = e ?? {}, i = "slot" + (o ? `[name=${o}]` : ":not([name])");
                return sn(t, n, {
                    get() {
                        const t = this.renderRoot?.querySelector(i);
                        return t?.assignedNodes(e) ?? []
                    }
                })
            }
        }
        var Jo = ot`:host{--trb-drawer-gap:var(--global-size-700);--trb-drawer-container-width:calc(100% - var(--trb-drawer-gap));--trb-drawer-container-min-width:calc(
      var(--view-min) - var(--global-size-700)
    );--trb-drawer-container-max-width:var(--view-xs);--trb-drawer-primary-list-padding:var(
        --semantic-space-around-vertical-xs-mobile
      ) var(--semantic-space-around-horizontal-xxs) var(--semantic-space-around-vertical-xl-mobile) var(--semantic-space-around-horizontal-xxs);--trb-drawer-secondary-list-padding:var(
        --semantic-space-around-vertical-xs-mobile
      ) var(--semantic-space-around-horizontal-xxs) var(--global-size-1000) var(--semantic-space-around-horizontal-xxs);--trb-drawer-secondary-list-background:var(--global-color-darken-100);--trb-drawer-dialog-background-color:#171926;--trb-drawer-footer-background-color:var(
      --trb-drawer-dialog-background-color
    );--trb-drawer-container-top:0px;--trb-drawer-container-right:0px;--trb-drawer-container-bottom:0px;--trb-drawer-container-left:0px;--trb-drawer-overlay-top:var(--trb-drawer-container-top);--trb-drawer-overlay-right:var(--trb-drawer-container-right);--trb-drawer-overlay-bottom:var(--trb-drawer-container-bottom);--trb-drawer-overlay-left:var(--trb-drawer-container-left);--trb-drawer-font-family:var(--font-accent);--trb-drawer-font-weight:var(--font-accent-weight);--trb-drawer-transition-animation-duration:250ms;--trb-drawer-header-min-height:var(--global-size-700);--trb-drawer-header-background:transparent;--trb-drawer-overlay-width:100%;--trb-drawer-overlay-height:100%;--trb-drawer-container-height:100%;display:inline-block}header{background:var(--trb-drawer-header-background);display:flex;flex-direction:row;min-height:var(--trb-drawer-header-min-height);padding:0;position:relative}slot[name=header-item]::slotted(*),slot[name=header-item]>*{align-items:center;bottom:0;display:flex;left:50%;position:absolute;top:0;transform:translateX(-50%)}:host([side=right]) header{flex-direction:row-reverse}[part=container]{clip-path:polygon(100% 0,100% 100%,0 100%,0 0);display:none;font-family:var(--trb-drawer-font-family);font-weight:var(--trb-drawer-font-weight);height:var(--trb-drawer-container-height);inset:var(--trb-drawer-container-top) var(--trb-drawer-container-right) var(--trb-drawer-container-bottom) var(--trb-drawer-container-left);max-height:100vh;max-width:var(--trb-drawer-container-max-width);min-width:var(--trb-drawer-container-min-width);position:fixed;width:var(--trb-drawer-container-width);z-index:var(--measure-z-index-fixed)}:host([empty]){display:none}:host([is-open]) [part=container]{display:block}:host([side=left]) [part=container]{left:0;right:unset}:host([side=right]) [part=container]{left:unset;right:0}[part=primary-list],[part=secondary-list]{box-sizing:border-box;display:flex;flex-direction:column;position:relative;width:100%}:is([part=primary-list],[part=secondary-list]).hide{display:none}[part=primary-list]{flex-grow:0;margin-block:0;padding:var(--trb-drawer-primary-list-padding)}[part=secondary-list]{background:var(--trb-drawer-secondary-list-background);flex-grow:1;margin-block:0;padding:var(--trb-drawer-secondary-list-padding)}[part=overlay]{background-color:var(--global-color-darken-600);height:var(--trb-drawer-overlay-height);inset:var(--trb-drawer-overlay-top) var(--trb-drawer-overlay-right) var(--trb-drawer-overlay-bottom) var(--trb-drawer-overlay-left);opacity:0;pointer-events:none;position:fixed;transition:opacity .1s ease;width:var(--trb-drawer-overlay-width)}[part=overlay].show{opacity:1;pointer-events:unset}footer{background-color:var(--trb-drawer-footer-background-color);bottom:0;display:flex;gap:var(--semantic-space-between-sm);justify-content:right;left:0;padding:var(--semantic-space-around-vertical-xs-mobile) var(--semantic-space-around-horizontal-xxs);position:sticky;right:0}footer.hide{display:none}dialog{animation-duration:var(--trb-drawer-transition-animation-duration);animation-timing-function:ease;background-color:var(--trb-drawer-dialog-background-color);border:0;flex-direction:column;height:100%;overflow-y:auto;padding:0;position:relative;width:100%}:host([is-open]) dialog{display:flex}:host([transitioning][transition-from=left]) dialog[open]{animation-name:slide-from-left}:host([transitioning][transition-from=left]) dialog:not([open]){animation-name:slide-to-left;overflow:hidden}:host([transitioning][transition-from=right]) dialog[open]{animation-name:slide-from-right}:host([transitioning][transition-from=right]) dialog:not([open]){animation-name:slide-to-right;overflow:hidden}:host([transitioning][transition-from=bottom]) dialog[open]{animation-name:slide-from-bottom}:host([transitioning][transition-from=bottom]) dialog:not([open]){animation-name:slide-to-bottom;overflow:hidden}:host([transitioning][transition-from=top]) dialog[open]{animation-name:slide-from-top}:host([transitioning][transition-from=top]) dialog:not([open]){animation-name:slide-to-top;overflow:hidden}main{display:flex;flex-direction:column;height:100%}#close-button{border-radius:var(--global-size-75);margin:var(--semantic-space-between-sm)}#close-button::part(icon){height:var(--global-size-300);width:var(--global-size-300)}@media (min-width:720px){:host{--trb-drawer-primary-list-padding:var(
          --semantic-space-around-vertical-xxs-desktop
        ) var(--semantic-space-around-horizontal-xxs) var(--semantic-space-around-vertical-xl-desktop) var(--semantic-space-around-horizontal-xxs);--trb-drawer-secondary-list-padding:var(
          --semantic-space-around-vertical-xxs-desktop
        ) var(--semantic-space-around-horizontal-xxs) var(--global-size-1000) var(--semantic-space-around-horizontal-xxs)}footer{padding:var(--semantic-space-around-vertical-xxs-desktop) var(--semantic-space-around-horizontal-xxs)}}@keyframes slide-from-left{from{display:none;opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes slide-to-left{from{display:block;transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes slide-from-right{from{display:none;opacity:0;transform:translateX(100%)}to{opacity:1;transform:translateX(0)}}@keyframes slide-to-right{from{display:block;transform:translateX(0)}to{transform:translateX(100%)}}@keyframes slide-from-bottom{from{display:none;opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}@keyframes slide-to-bottom{from{display:block;transform:translateY(0)}to{transform:translateY(100%)}}@keyframes slide-from-top{from{display:none;opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(0)}}@keyframes slide-to-top{from{display:block;transform:translateY(0)}to{transform:translateY(-100%)}}`,
            Qo = {
                "en-US": {
                    drawer_close: "close"
                },
                "de-DE": {
                    drawer_close: "Schließen"
                },
                "es-ES": {
                    drawer_close: "Cerrar"
                },
                "es-MX": {
                    drawer_close: "Cerrar"
                },
                "fr-FR": {
                    drawer_close: "Fermer"
                },
                "it-IT": {
                    drawer_close: "Chiudi"
                },
                "ja-JP": {
                    drawer_close: "閉じる"
                },
                "ko-KR": {
                    drawer_close: "닫기"
                },
                "pl-PL": {
                    drawer_close: "Zamknij"
                },
                "pt-BR": {
                    drawer_close: "Fechar"
                },
                "ru-RU": {
                    drawer_close: "Закрыть"
                },
                "th-TH": {
                    drawer_close: "ปิด"
                },
                "tr-TR": {
                    drawer_close: "Kapat"
                },
                "zh-CN": {
                    drawer_close: "关闭"
                },
                "zh-TW": {
                    drawer_close: "關閉"
                }
            },
            ei = function(e, t, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
                return r > 3 && a && Object.defineProperty(t, n, a), a
            };
        class ti extends(bo(On)) {
            constructor() {
                super(), this.side = "left", this.transitionFrom = "left", this.disableDefaultCloseButton = !1, this.disableDefaultToggleButton = !1, this.hideWhenEmpty = !1, this.isOpen = !1, this._bindMethods = () => {
                    this.toggle = this.toggle.bind(this), this.open = this.open.bind(this), this.close = this.close.bind(this)
                }, this._toggleScrollLock = () => {
                    this.isOpen ? document.body.style.overflow = "hidden" : document.body.style.removeProperty("overflow")
                }, this._renderOverlay = ({
                    id: e = "overlay"
                } = {}) => Rt`<div id="${e}" @click="${this.close}" part="${e}"></div>`, this._renderDefaultToggleButton = ({
                    id: e = "toggle-button"
                } = {}) => this.disableDefaultToggleButton ? Rt`` : Rt`<trb-drawer-icon-button id="${e}" part="${e}" @click="${this.toggle}" icon="menu" data-aria-label="${dn(this.name)}" aria-haspopup="dialog" aria-controls="dialog" analytics-status="disabled"></trb-drawer-icon-button>`, this._renderDefaultCloseButton = ({
                    id: e = "close-button"
                } = {}) => this.disableDefaultCloseButton ? Rt`` : Rt`<trb-drawer-icon-button id="${e}" part="${e}" @click="${this.close}" icon="x" data-aria-label="${this.getString("drawer_close")}" size="small" analytics-status="disabled"></trb-drawer-icon-button>`, this._hideDrawer = () => this.setAttribute("empty", ""), this._showDrawer = () => this.removeAttribute("empty"), this._hideSecondaryList = () => this._SecondaryList.classList.add("hide"), this._showSecondaryList = () => this._SecondaryList.classList.remove("hide"), this._emptySlotCheck = () => {
                    queueMicrotask((() => {
                        const e = e => "none" !== getComputedStyle(e).display,
                            t = this._PrimarySlottedNodes && !this._PrimarySlottedNodes.some(e),
                            n = this._SecondarySlottedNodes && !this._SecondarySlottedNodes.some(e);
                        this.hideWhenEmpty && t && n ? this._hideDrawer() : this._showDrawer(), n ? this._hideSecondaryList() : this._showSecondaryList()
                    }))
                }, this._handleFooterSlotChange = () => {
                    this._FooterSlottedNodes && this._FooterSlottedNodes.some((e => "none" !== getComputedStyle(e).display)) ? this._Footer.classList.remove("hide") : this._Footer.classList.add("hide")
                }, this._handleOpenAnimationEnd = () => {
                    "keyboard" === this._interactionType && this.focusTrap.activate(), this.dispatchEvent(new CustomEvent("trb-drawer:opened")), this._Dialog.removeEventListener("animationend", this._handleOpenAnimationEnd), this.removeAttribute("transitioning")
                }, this._handleCloseAnimationEnd = () => {
                    this.isOpen = !1, this._toggleScrollLock(), this.dispatchEvent(new CustomEvent("trb-drawer:closed")), this._Dialog.removeEventListener("animationend", this._handleCloseAnimationEnd), this.removeAttribute("transitioning")
                }, this._handleKeyUp = ({
                    key: e
                }) => {
                    "Escape" === e && this.close()
                }, this._handleToggleButtonSlotChange = ({
                    target: e
                }) => {
                    e?.assignedNodes?.().forEach?.((e => {
                        e.addEventListener("click", this.toggle)
                    }))
                }, this._handleCloseButtonSlotChange = ({
                    target: e
                }) => {
                    e?.assignedNodes?.().forEach?.((e => {
                        e.addEventListener("click", this.close)
                    }))
                }, this._renderDefaultHeaderItem = () => this.headerText ? Rt`<h1 class="trb-heading-xxs">${this.headerText}</h1>` : Rt``, this._bindMethods(), this.addEventListener("keyup", this._handleKeyUp), this.close = this.close.bind(this), this.analyticsEvent = "modal"
            }
            static get styles() {
                return [...On.styles, Jo]
            }
            get componentDependencies() {
                return {
                    "trb-drawer-icon-button": co
                }
            }
            connectedCallback() {
                super.connectedCallback(), this.initializeLoc(Qo)
            }
            firstUpdated(e) {
                super.firstUpdated(e), this.focusTrap = Xo(this._Dialog, {
                    onPostActivate: () => {
                        this.dispatchEvent(new CustomEvent("trb-drawer:focus-trap-activated"))
                    },
                    onPostDeactivate: () => {
                        this.dispatchEvent(new CustomEvent("trb-drawer:focus-trap-deactivated"))
                    },
                    clickOutsideDeactivates: !0,
                    tabbableOptions: {
                        getShadowRoot: !0
                    },
                    fallbackFocus: this
                }), this._addAnalyticsListeners()
            }
            updated(e) {
                super.updated(e), e.has("hideWhenEmpty") && this._emptySlotCheck()
            }
            open({
                detail: e
            } = {}) {
                this.isOpen || (this.setAttribute("transitioning", ""), this.dispatchEvent(new CustomEvent("trb-drawer:open")), this._interactionType = 0 === e ? "keyboard" : "mouse", this.isOpen = !0, this._toggleScrollLock(), this._Overlay.classList.add("show"), this._Dialog.show(), this._Dialog.addEventListener("animationend", this._handleOpenAnimationEnd))
            }
            close() {
                this.isOpen && (this.setAttribute("transitioning", ""), this.dispatchEvent(new CustomEvent("trb-drawer:close")), this.focusTrap.deactivate(), this._Overlay.classList.remove("show"), this._Dialog.close(), this._Dialog.addEventListener("animationend", this._handleCloseAnimationEnd))
            }
            toggle(e) {
                this.isOpen ? this.close() : this.open(e)
            }
            render() {
                return Rt`${this._renderOverlay()}<slot name="toggle-button" @slotchange="${this._handleToggleButtonSlotChange}">${this._renderDefaultToggleButton()}</slot><div part="container" role="presentation"><dialog id="dialog" part="dialog" aria-label="${dn(this.name)}"><header part="header"><slot name="close-button" @slotchange="${this._handleCloseButtonSlotChange}">${this._renderDefaultCloseButton()}</slot><slot name="header-item">${this._renderDefaultHeaderItem()}</slot></header><main part="main"><div part="primary-list"><slot name="primary-list" @slotchange="${this._emptySlotCheck}"></slot></div><div part="secondary-list" class="hide"><slot name="secondary-list" @slotchange="${this._emptySlotCheck}"></slot></div></main><footer part="footer" class="hide"><slot name="footer" @slotchange="${this._handleFooterSlotChange}"></slot></footer></dialog></div>`
            }
            _addAnalyticsListeners() {
                this.addEventListener("trb-drawer:open", (() => super.pushEventFromGenerator(En, {}, no.Open))), this.addEventListener("trb-drawer:close", (() => super.pushEventFromGenerator(En, {}, no.Close)))
            }
        }
        ei([an({
            type: String,
            reflect: !0,
            attribute: "name"
        })], ti.prototype, "name", void 0), ei([an({
            type: String,
            attribute: "header-text",
            reflect: !0
        })], ti.prototype, "headerText", void 0), ei([an({
            type: String,
            reflect: !0
        })], ti.prototype, "side", void 0), ei([an({
            type: String,
            reflect: !0,
            attribute: "transition-from"
        })], ti.prototype, "transitionFrom", void 0), ei([an({
            type: Boolean,
            attribute: "disable-default-close-button"
        })], ti.prototype, "disableDefaultCloseButton", void 0), ei([an({
            type: Boolean,
            attribute: "disable-default-toggle-button"
        })], ti.prototype, "disableDefaultToggleButton", void 0), ei([an({
            type: Boolean,
            attribute: "hide-when-empty",
            reflect: !0
        })], ti.prototype, "hideWhenEmpty", void 0), ei([an({
            type: Boolean,
            attribute: "is-open",
            reflect: !0
        })], ti.prototype, "isOpen", void 0), ei([ln("dialog")], ti.prototype, "_Dialog", void 0), ei([ln("footer")], ti.prototype, "_Footer", void 0), ei([ln("[part=overlay]")], ti.prototype, "_Overlay", void 0), ei([ln("[part=secondary-list]")], ti.prototype, "_SecondaryList", void 0), ei([Zo({
            slot: "primary-list",
            flatten: !0
        })], ti.prototype, "_PrimarySlottedNodes", void 0), ei([Zo({
            slot: "secondary-list",
            flatten: !0
        })], ti.prototype, "_SecondarySlottedNodes", void 0), ei([Zo({
            slot: "footer",
            flatten: !0
        })], ti.prototype, "_FooterSlottedNodes", void 0);
        /**
         * @license
         * Copyright 2019 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        const ni = window,
            oi = ni.ShadowRoot && (void 0 === ni.ShadyCSS || ni.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
            ii = Symbol(),
            ri = new WeakMap;
        class ai {
            constructor(e, t, n) {
                if (this._$cssResult$ = !0, n !== ii) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = e, this.t = t
            }
            get styleSheet() {
                let e = this.o;
                const t = this.t;
                if (oi && void 0 === e) {
                    const n = void 0 !== t && 1 === t.length;
                    n && (e = ri.get(t)), void 0 === e && ((this.o = e = new CSSStyleSheet).replaceSync(this.cssText), n && ri.set(t, e))
                }
                return e
            }
            toString() {
                return this.cssText
            }
        }
        const si = oi ? e => e : e => e instanceof CSSStyleSheet ? (e => {
            let t = "";
            for (const n of e.cssRules) t += n.cssText;
            return (e => new ai("string" == typeof e ? e : e + "", void 0, ii))(t)
        })(e) : e
        /**
         * @license
         * Copyright 2017 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        ;
        var li;
        const di = window,
            ci = di.trustedTypes,
            ui = ci ? ci.emptyScript : "",
            hi = di.reactiveElementPolyfillSupport,
            pi = {
                toAttribute(e, t) {
                    switch (t) {
                        case Boolean:
                            e = e ? ui : null;
                            break;
                        case Object:
                        case Array:
                            e = null == e ? e : JSON.stringify(e)
                    }
                    return e
                },
                fromAttribute(e, t) {
                    let n = e;
                    switch (t) {
                        case Boolean:
                            n = null !== e;
                            break;
                        case Number:
                            n = null === e ? null : Number(e);
                            break;
                        case Object:
                        case Array:
                            try {
                                n = JSON.parse(e)
                            } catch (e) {
                                n = null
                            }
                    }
                    return n
                }
            },
            bi = (e, t) => t !== e && (t == t || e == e),
            vi = {
                attribute: !0,
                type: String,
                converter: pi,
                reflect: !1,
                hasChanged: bi
            },
            fi = "finalized";
        class gi extends HTMLElement {
            constructor() {
                super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu()
            }
            static addInitializer(e) {
                var t;
                this.finalize(), (null !== (t = this.h) && void 0 !== t ? t : this.h = []).push(e)
            }
            static get observedAttributes() {
                this.finalize();
                const e = [];
                return this.elementProperties.forEach(((t, n) => {
                    const o = this._$Ep(n, t);
                    void 0 !== o && (this._$Ev.set(o, n), e.push(o))
                })), e
            }
            static createProperty(e, t = vi) {
                if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
                    const n = "symbol" == typeof e ? Symbol() : "__" + e,
                        o = this.getPropertyDescriptor(e, n, t);
                    void 0 !== o && Object.defineProperty(this.prototype, e, o)
                }
            }
            static getPropertyDescriptor(e, t, n) {
                return {
                    get() {
                        return this[t]
                    },
                    set(o) {
                        const i = this[e];
                        this[t] = o, this.requestUpdate(e, i, n)
                    },
                    configurable: !0,
                    enumerable: !0
                }
            }
            static getPropertyOptions(e) {
                return this.elementProperties.get(e) || vi
            }
            static finalize() {
                if (this.hasOwnProperty(fi)) return !1;
                this[fi] = !0;
                const e = Object.getPrototypeOf(this);
                if (e.finalize(), void 0 !== e.h && (this.h = [...e.h]), this.elementProperties = new Map(e.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
                    const e = this.properties,
                        t = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
                    for (const n of t) this.createProperty(n, e[n])
                }
                return this.elementStyles = this.finalizeStyles(this.styles), !0
            }
            static finalizeStyles(e) {
                const t = [];
                if (Array.isArray(e)) {
                    const n = new Set(e.flat(1 / 0).reverse());
                    for (const e of n) t.unshift(si(e))
                } else void 0 !== e && t.push(si(e));
                return t
            }
            static _$Ep(e, t) {
                const n = t.attribute;
                return !1 === n ? void 0 : "string" == typeof n ? n : "string" == typeof e ? e.toLowerCase() : void 0
            }
            _$Eu() {
                var e;
                this._$E_ = new Promise((e => this.enableUpdating = e)), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (e = this.constructor.h) || void 0 === e || e.forEach((e => e(this)))
            }
            addController(e) {
                var t, n;
                (null !== (t = this._$ES) && void 0 !== t ? t : this._$ES = []).push(e), void 0 !== this.renderRoot && this.isConnected && (null === (n = e.hostConnected) || void 0 === n || n.call(e))
            }
            removeController(e) {
                var t;
                null === (t = this._$ES) || void 0 === t || t.splice(this._$ES.indexOf(e) >>> 0, 1)
            }
            _$Eg() {
                this.constructor.elementProperties.forEach(((e, t) => {
                    this.hasOwnProperty(t) && (this._$Ei.set(t, this[t]), delete this[t])
                }))
            }
            createRenderRoot() {
                var e;
                const t = null !== (e = this.shadowRoot) && void 0 !== e ? e : this.attachShadow(this.constructor.shadowRootOptions);
                return ((e, t) => {
                    oi ? e.adoptedStyleSheets = t.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : t.forEach((t => {
                        const n = document.createElement("style"),
                            o = ni.litNonce;
                        void 0 !== o && n.setAttribute("nonce", o), n.textContent = t.cssText, e.appendChild(n)
                    }))
                })(t, this.constructor.elementStyles), t
            }
            connectedCallback() {
                var e;
                void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (e = this._$ES) || void 0 === e || e.forEach((e => {
                    var t;
                    return null === (t = e.hostConnected) || void 0 === t ? void 0 : t.call(e)
                }))
            }
            enableUpdating(e) {}
            disconnectedCallback() {
                var e;
                null === (e = this._$ES) || void 0 === e || e.forEach((e => {
                    var t;
                    return null === (t = e.hostDisconnected) || void 0 === t ? void 0 : t.call(e)
                }))
            }
            attributeChangedCallback(e, t, n) {
                this._$AK(e, n)
            }
            _$EO(e, t, n = vi) {
                var o;
                const i = this.constructor._$Ep(e, n);
                if (void 0 !== i && !0 === n.reflect) {
                    const r = (void 0 !== (null === (o = n.converter) || void 0 === o ? void 0 : o.toAttribute) ? n.converter : pi).toAttribute(t, n.type);
                    this._$El = e, null == r ? this.removeAttribute(i) : this.setAttribute(i, r), this._$El = null
                }
            }
            _$AK(e, t) {
                var n;
                const o = this.constructor,
                    i = o._$Ev.get(e);
                if (void 0 !== i && this._$El !== i) {
                    const e = o.getPropertyOptions(i),
                        r = "function" == typeof e.converter ? {
                            fromAttribute: e.converter
                        } : void 0 !== (null === (n = e.converter) || void 0 === n ? void 0 : n.fromAttribute) ? e.converter : pi;
                    this._$El = i, this[i] = r.fromAttribute(t, e.type), this._$El = null
                }
            }
            requestUpdate(e, t, n) {
                let o = !0;
                void 0 !== e && (((n = n || this.constructor.getPropertyOptions(e)).hasChanged || bi)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), !0 === n.reflect && this._$El !== e && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(e, n))) : o = !1), !this.isUpdatePending && o && (this._$E_ = this._$Ej())
            }
            async _$Ej() {
                this.isUpdatePending = !0;
                try {
                    await this._$E_
                } catch (e) {
                    Promise.reject(e)
                }
                const e = this.scheduleUpdate();
                return null != e && await e, !this.isUpdatePending
            }
            scheduleUpdate() {
                return this.performUpdate()
            }
            performUpdate() {
                var e;
                if (!this.isUpdatePending) return;
                this.hasUpdated, this._$Ei && (this._$Ei.forEach(((e, t) => this[t] = e)), this._$Ei = void 0);
                let t = !1;
                const n = this._$AL;
                try {
                    t = this.shouldUpdate(n), t ? (this.willUpdate(n), null === (e = this._$ES) || void 0 === e || e.forEach((e => {
                        var t;
                        return null === (t = e.hostUpdate) || void 0 === t ? void 0 : t.call(e)
                    })), this.update(n)) : this._$Ek()
                } catch (e) {
                    throw t = !1, this._$Ek(), e
                }
                t && this._$AE(n)
            }
            willUpdate(e) {}
            _$AE(e) {
                var t;
                null === (t = this._$ES) || void 0 === t || t.forEach((e => {
                    var t;
                    return null === (t = e.hostUpdated) || void 0 === t ? void 0 : t.call(e)
                })), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e)
            }
            _$Ek() {
                this._$AL = new Map, this.isUpdatePending = !1
            }
            get updateComplete() {
                return this.getUpdateComplete()
            }
            getUpdateComplete() {
                return this._$E_
            }
            shouldUpdate(e) {
                return !0
            }
            update(e) {
                void 0 !== this._$EC && (this._$EC.forEach(((e, t) => this._$EO(t, this[t], e))), this._$EC = void 0), this._$Ek()
            }
            updated(e) {}
            firstUpdated(e) {}
        }
        gi[fi] = !0, gi.elementProperties = new Map, gi.elementStyles = [], gi.shadowRootOptions = {
            mode: "open"
        }, null == hi || hi({
            ReactiveElement: gi
        }), (null !== (li = di.reactiveElementVersions) && void 0 !== li ? li : di.reactiveElementVersions = []).push("1.6.3");
        /**
         * @license
         * Copyright 2019 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        const mi = window,
            wi = mi.ShadowRoot && (void 0 === mi.ShadyCSS || mi.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
            _i = Symbol(),
            yi = new WeakMap;
        class ki {
            constructor(e, t, n) {
                if (this._$cssResult$ = !0, n !== _i) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                this.cssText = e, this.t = t
            }
            get styleSheet() {
                let e = this.o;
                const t = this.t;
                if (wi && void 0 === e) {
                    const n = void 0 !== t && 1 === t.length;
                    n && (e = yi.get(t)), void 0 === e && ((this.o = e = new CSSStyleSheet).replaceSync(this.cssText), n && yi.set(t, e))
                }
                return e
            }
            toString() {
                return this.cssText
            }
        }
        const zi = (e, ...t) => {
                const n = 1 === e.length ? e[0] : t.reduce(((t, n, o) => t + (e => {
                    if (!0 === e._$cssResult$) return e.cssText;
                    if ("number" == typeof e) return e;
                    throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
                })(n) + e[o + 1]), e[0]);
                return new ki(n, e, _i)
            },
            Ai = wi ? e => e : e => e instanceof CSSStyleSheet ? (e => {
                let t = "";
                for (const n of e.cssRules) t += n.cssText;
                return (e => new ki("string" == typeof e ? e : e + "", void 0, _i))(t)
            })(e) : e
        /**
         * @license
         * Copyright 2017 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        ;
        var xi;
        const Si = window,
            $i = Si.trustedTypes,
            Ei = $i ? $i.emptyScript : "",
            Ci = Si.reactiveElementPolyfillSupport,
            Oi = {
                toAttribute(e, t) {
                    switch (t) {
                        case Boolean:
                            e = e ? Ei : null;
                            break;
                        case Object:
                        case Array:
                            e = null == e ? e : JSON.stringify(e)
                    }
                    return e
                },
                fromAttribute(e, t) {
                    let n = e;
                    switch (t) {
                        case Boolean:
                            n = null !== e;
                            break;
                        case Number:
                            n = null === e ? null : Number(e);
                            break;
                        case Object:
                        case Array:
                            try {
                                n = JSON.parse(e)
                            } catch (e) {
                                n = null
                            }
                    }
                    return n
                }
            },
            Bi = (e, t) => t !== e && (t == t || e == e),
            Li = {
                attribute: !0,
                type: String,
                converter: Oi,
                reflect: !1,
                hasChanged: Bi
            },
            Ti = "finalized";
        class Pi extends HTMLElement {
            constructor() {
                super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu()
            }
            static addInitializer(e) {
                var t;
                this.finalize(), (null !== (t = this.h) && void 0 !== t ? t : this.h = []).push(e)
            }
            static get observedAttributes() {
                this.finalize();
                const e = [];
                return this.elementProperties.forEach(((t, n) => {
                    const o = this._$Ep(n, t);
                    void 0 !== o && (this._$Ev.set(o, n), e.push(o))
                })), e
            }
            static createProperty(e, t = Li) {
                if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
                    const n = "symbol" == typeof e ? Symbol() : "__" + e,
                        o = this.getPropertyDescriptor(e, n, t);
                    void 0 !== o && Object.defineProperty(this.prototype, e, o)
                }
            }
            static getPropertyDescriptor(e, t, n) {
                return {
                    get() {
                        return this[t]
                    },
                    set(o) {
                        const i = this[e];
                        this[t] = o, this.requestUpdate(e, i, n)
                    },
                    configurable: !0,
                    enumerable: !0
                }
            }
            static getPropertyOptions(e) {
                return this.elementProperties.get(e) || Li
            }
            static finalize() {
                if (this.hasOwnProperty(Ti)) return !1;
                this[Ti] = !0;
                const e = Object.getPrototypeOf(this);
                if (e.finalize(), void 0 !== e.h && (this.h = [...e.h]), this.elementProperties = new Map(e.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
                    const e = this.properties,
                        t = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
                    for (const n of t) this.createProperty(n, e[n])
                }
                return this.elementStyles = this.finalizeStyles(this.styles), !0
            }
            static finalizeStyles(e) {
                const t = [];
                if (Array.isArray(e)) {
                    const n = new Set(e.flat(1 / 0).reverse());
                    for (const e of n) t.unshift(Ai(e))
                } else void 0 !== e && t.push(Ai(e));
                return t
            }
            static _$Ep(e, t) {
                const n = t.attribute;
                return !1 === n ? void 0 : "string" == typeof n ? n : "string" == typeof e ? e.toLowerCase() : void 0
            }
            _$Eu() {
                var e;
                this._$E_ = new Promise((e => this.enableUpdating = e)), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (e = this.constructor.h) || void 0 === e || e.forEach((e => e(this)))
            }
            addController(e) {
                var t, n;
                (null !== (t = this._$ES) && void 0 !== t ? t : this._$ES = []).push(e), void 0 !== this.renderRoot && this.isConnected && (null === (n = e.hostConnected) || void 0 === n || n.call(e))
            }
            removeController(e) {
                var t;
                null === (t = this._$ES) || void 0 === t || t.splice(this._$ES.indexOf(e) >>> 0, 1)
            }
            _$Eg() {
                this.constructor.elementProperties.forEach(((e, t) => {
                    this.hasOwnProperty(t) && (this._$Ei.set(t, this[t]), delete this[t])
                }))
            }
            createRenderRoot() {
                var e;
                const t = null !== (e = this.shadowRoot) && void 0 !== e ? e : this.attachShadow(this.constructor.shadowRootOptions);
                return ((e, t) => {
                    wi ? e.adoptedStyleSheets = t.map((e => e instanceof CSSStyleSheet ? e : e.styleSheet)) : t.forEach((t => {
                        const n = document.createElement("style"),
                            o = mi.litNonce;
                        void 0 !== o && n.setAttribute("nonce", o), n.textContent = t.cssText, e.appendChild(n)
                    }))
                })(t, this.constructor.elementStyles), t
            }
            connectedCallback() {
                var e;
                void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (e = this._$ES) || void 0 === e || e.forEach((e => {
                    var t;
                    return null === (t = e.hostConnected) || void 0 === t ? void 0 : t.call(e)
                }))
            }
            enableUpdating(e) {}
            disconnectedCallback() {
                var e;
                null === (e = this._$ES) || void 0 === e || e.forEach((e => {
                    var t;
                    return null === (t = e.hostDisconnected) || void 0 === t ? void 0 : t.call(e)
                }))
            }
            attributeChangedCallback(e, t, n) {
                this._$AK(e, n)
            }
            _$EO(e, t, n = Li) {
                var o;
                const i = this.constructor._$Ep(e, n);
                if (void 0 !== i && !0 === n.reflect) {
                    const r = (void 0 !== (null === (o = n.converter) || void 0 === o ? void 0 : o.toAttribute) ? n.converter : Oi).toAttribute(t, n.type);
                    this._$El = e, null == r ? this.removeAttribute(i) : this.setAttribute(i, r), this._$El = null
                }
            }
            _$AK(e, t) {
                var n;
                const o = this.constructor,
                    i = o._$Ev.get(e);
                if (void 0 !== i && this._$El !== i) {
                    const e = o.getPropertyOptions(i),
                        r = "function" == typeof e.converter ? {
                            fromAttribute: e.converter
                        } : void 0 !== (null === (n = e.converter) || void 0 === n ? void 0 : n.fromAttribute) ? e.converter : Oi;
                    this._$El = i, this[i] = r.fromAttribute(t, e.type), this._$El = null
                }
            }
            requestUpdate(e, t, n) {
                let o = !0;
                void 0 !== e && (((n = n || this.constructor.getPropertyOptions(e)).hasChanged || Bi)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), !0 === n.reflect && this._$El !== e && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(e, n))) : o = !1), !this.isUpdatePending && o && (this._$E_ = this._$Ej())
            }
            async _$Ej() {
                this.isUpdatePending = !0;
                try {
                    await this._$E_
                } catch (e) {
                    Promise.reject(e)
                }
                const e = this.scheduleUpdate();
                return null != e && await e, !this.isUpdatePending
            }
            scheduleUpdate() {
                return this.performUpdate()
            }
            performUpdate() {
                var e;
                if (!this.isUpdatePending) return;
                this.hasUpdated, this._$Ei && (this._$Ei.forEach(((e, t) => this[t] = e)), this._$Ei = void 0);
                let t = !1;
                const n = this._$AL;
                try {
                    t = this.shouldUpdate(n), t ? (this.willUpdate(n), null === (e = this._$ES) || void 0 === e || e.forEach((e => {
                        var t;
                        return null === (t = e.hostUpdate) || void 0 === t ? void 0 : t.call(e)
                    })), this.update(n)) : this._$Ek()
                } catch (e) {
                    throw t = !1, this._$Ek(), e
                }
                t && this._$AE(n)
            }
            willUpdate(e) {}
            _$AE(e) {
                var t;
                null === (t = this._$ES) || void 0 === t || t.forEach((e => {
                    var t;
                    return null === (t = e.hostUpdated) || void 0 === t ? void 0 : t.call(e)
                })), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e)
            }
            _$Ek() {
                this._$AL = new Map, this.isUpdatePending = !1
            }
            get updateComplete() {
                return this.getUpdateComplete()
            }
            getUpdateComplete() {
                return this._$E_
            }
            shouldUpdate(e) {
                return !0
            }
            update(e) {
                void 0 !== this._$EC && (this._$EC.forEach(((e, t) => this._$EO(t, this[t], e))), this._$EC = void 0), this._$Ek()
            }
            updated(e) {}
            firstUpdated(e) {}
        }
        /**
         * @license
         * Copyright 2017 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        var Ni;
        Pi[Ti] = !0, Pi.elementProperties = new Map, Pi.elementStyles = [], Pi.shadowRootOptions = {
            mode: "open"
        }, null == Ci || Ci({
            ReactiveElement: Pi
        }), (null !== (xi = Si.reactiveElementVersions) && void 0 !== xi ? xi : Si.reactiveElementVersions = []).push("1.6.3");
        const Mi = window,
            Di = Mi.trustedTypes,
            ji = Di ? Di.createPolicy("lit-html", {
                createHTML: e => e
            }) : void 0,
            Ri = "$lit$",
            Ii = `lit$${(Math.random()+"").slice(9)}$`,
            Fi = "?" + Ii,
            Ui = `<${Fi}>`,
            Hi = document,
            qi = () => Hi.createComment(""),
            Wi = e => null === e || "object" != typeof e && "function" != typeof e,
            Vi = Array.isArray,
            Gi = "[ \t\n\f\r]",
            Ki = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
            Yi = /-->/g,
            Xi = />/g,
            Zi = RegExp(`>|${Gi}(?:([^\\s"'>=/]+)(${Gi}*=${Gi}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"),
            Ji = /'/g,
            Qi = /"/g,
            er = /^(?:script|style|textarea|title)$/i,
            tr = (e => (t, ...n) => ({
                _$litType$: e,
                strings: t,
                values: n
            }))(1),
            nr = Symbol.for("lit-noChange"),
            or = Symbol.for("lit-nothing"),
            ir = new WeakMap,
            rr = Hi.createTreeWalker(Hi, 129, null, !1);

        function ar(e, t) {
            if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
            return void 0 !== ji ? ji.createHTML(t) : t
        }
        const sr = (e, t) => {
            const n = e.length - 1,
                o = [];
            let i, r = 2 === t ? "<svg>" : "",
                a = Ki;
            for (let t = 0; t < n; t++) {
                const n = e[t];
                let s, l, d = -1,
                    c = 0;
                for (; c < n.length && (a.lastIndex = c, l = a.exec(n), null !== l);) c = a.lastIndex, a === Ki ? "!--" === l[1] ? a = Yi : void 0 !== l[1] ? a = Xi : void 0 !== l[2] ? (er.test(l[2]) && (i = RegExp("</" + l[2], "g")), a = Zi) : void 0 !== l[3] && (a = Zi) : a === Zi ? ">" === l[0] ? (a = null != i ? i : Ki, d = -1) : void 0 === l[1] ? d = -2 : (d = a.lastIndex - l[2].length, s = l[1], a = void 0 === l[3] ? Zi : '"' === l[3] ? Qi : Ji) : a === Qi || a === Ji ? a = Zi : a === Yi || a === Xi ? a = Ki : (a = Zi, i = void 0);
                const u = a === Zi && e[t + 1].startsWith("/>") ? " " : "";
                r += a === Ki ? n + Ui : d >= 0 ? (o.push(s), n.slice(0, d) + Ri + n.slice(d) + Ii + u) : n + Ii + (-2 === d ? (o.push(void 0), t) : u)
            }
            return [ar(e, r + (e[n] || "<?>") + (2 === t ? "</svg>" : "")), o]
        };
        class lr {
            constructor({
                strings: e,
                _$litType$: t
            }, n) {
                let o;
                this.parts = [];
                let i = 0,
                    r = 0;
                const a = e.length - 1,
                    s = this.parts,
                    [l, d] = sr(e, t);
                if (this.el = lr.createElement(l, n), rr.currentNode = this.el.content, 2 === t) {
                    const e = this.el.content,
                        t = e.firstChild;
                    t.remove(), e.append(...t.childNodes)
                }
                for (; null !== (o = rr.nextNode()) && s.length < a;) {
                    if (1 === o.nodeType) {
                        if (o.hasAttributes()) {
                            const e = [];
                            for (const t of o.getAttributeNames())
                                if (t.endsWith(Ri) || t.startsWith(Ii)) {
                                    const n = d[r++];
                                    if (e.push(t), void 0 !== n) {
                                        const e = o.getAttribute(n.toLowerCase() + Ri).split(Ii),
                                            t = /([.?@])?(.*)/.exec(n);
                                        s.push({
                                            type: 1,
                                            index: i,
                                            name: t[2],
                                            strings: e,
                                            ctor: "." === t[1] ? pr : "?" === t[1] ? vr : "@" === t[1] ? fr : hr
                                        })
                                    } else s.push({
                                        type: 6,
                                        index: i
                                    })
                                } for (const t of e) o.removeAttribute(t)
                        }
                        if (er.test(o.tagName)) {
                            const e = o.textContent.split(Ii),
                                t = e.length - 1;
                            if (t > 0) {
                                o.textContent = Di ? Di.emptyScript : "";
                                for (let n = 0; n < t; n++) o.append(e[n], qi()), rr.nextNode(), s.push({
                                    type: 2,
                                    index: ++i
                                });
                                o.append(e[t], qi())
                            }
                        }
                    } else if (8 === o.nodeType)
                        if (o.data === Fi) s.push({
                            type: 2,
                            index: i
                        });
                        else {
                            let e = -1;
                            for (; - 1 !== (e = o.data.indexOf(Ii, e + 1));) s.push({
                                type: 7,
                                index: i
                            }), e += Ii.length - 1
                        } i++
                }
            }
            static createElement(e, t) {
                const n = Hi.createElement("template");
                return n.innerHTML = e, n
            }
        }

        function dr(e, t, n = e, o) {
            var i, r, a, s;
            if (t === nr) return t;
            let l = void 0 !== o ? null === (i = n._$Co) || void 0 === i ? void 0 : i[o] : n._$Cl;
            const d = Wi(t) ? void 0 : t._$litDirective$;
            return (null == l ? void 0 : l.constructor) !== d && (null === (r = null == l ? void 0 : l._$AO) || void 0 === r || r.call(l, !1), void 0 === d ? l = void 0 : (l = new d(e), l._$AT(e, n, o)), void 0 !== o ? (null !== (a = (s = n)._$Co) && void 0 !== a ? a : s._$Co = [])[o] = l : n._$Cl = l), void 0 !== l && (t = dr(e, l._$AS(e, t.values), l, o)), t
        }
        class cr {
            constructor(e, t) {
                this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t
            }
            get parentNode() {
                return this._$AM.parentNode
            }
            get _$AU() {
                return this._$AM._$AU
            }
            u(e) {
                var t;
                const {
                    el: {
                        content: n
                    },
                    parts: o
                } = this._$AD, i = (null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t ? t : Hi).importNode(n, !0);
                rr.currentNode = i;
                let r = rr.nextNode(),
                    a = 0,
                    s = 0,
                    l = o[0];
                for (; void 0 !== l;) {
                    if (a === l.index) {
                        let t;
                        2 === l.type ? t = new ur(r, r.nextSibling, this, e) : 1 === l.type ? t = new l.ctor(r, l.name, l.strings, this, e) : 6 === l.type && (t = new gr(r, this, e)), this._$AV.push(t), l = o[++s]
                    }
                    a !== (null == l ? void 0 : l.index) && (r = rr.nextNode(), a++)
                }
                return rr.currentNode = Hi, i
            }
            v(e) {
                let t = 0;
                for (const n of this._$AV) void 0 !== n && (void 0 !== n.strings ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++
            }
        }
        class ur {
            constructor(e, t, n, o) {
                var i;
                this.type = 2, this._$AH = or, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this._$Cp = null === (i = null == o ? void 0 : o.isConnected) || void 0 === i || i
            }
            get _$AU() {
                var e, t;
                return null !== (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) && void 0 !== t ? t : this._$Cp
            }
            get parentNode() {
                let e = this._$AA.parentNode;
                const t = this._$AM;
                return void 0 !== t && 11 === (null == e ? void 0 : e.nodeType) && (e = t.parentNode), e
            }
            get startNode() {
                return this._$AA
            }
            get endNode() {
                return this._$AB
            }
            _$AI(e, t = this) {
                e = dr(this, e, t), Wi(e) ? e === or || null == e || "" === e ? (this._$AH !== or && this._$AR(), this._$AH = or) : e !== this._$AH && e !== nr && this._(e) : void 0 !== e._$litType$ ? this.g(e) : void 0 !== e.nodeType ? this.$(e) : (e => Vi(e) || "function" == typeof(null == e ? void 0 : e[Symbol.iterator]))(e) ? this.T(e) : this._(e)
            }
            k(e) {
                return this._$AA.parentNode.insertBefore(e, this._$AB)
            }
            $(e) {
                this._$AH !== e && (this._$AR(), this._$AH = this.k(e))
            }
            _(e) {
                this._$AH !== or && Wi(this._$AH) ? this._$AA.nextSibling.data = e : this.$(Hi.createTextNode(e)), this._$AH = e
            }
            g(e) {
                var t;
                const {
                    values: n,
                    _$litType$: o
                } = e, i = "number" == typeof o ? this._$AC(e) : (void 0 === o.el && (o.el = lr.createElement(ar(o.h, o.h[0]), this.options)), o);
                if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === i) this._$AH.v(n);
                else {
                    const e = new cr(i, this),
                        t = e.u(this.options);
                    e.v(n), this.$(t), this._$AH = e
                }
            }
            _$AC(e) {
                let t = ir.get(e.strings);
                return void 0 === t && ir.set(e.strings, t = new lr(e)), t
            }
            T(e) {
                Vi(this._$AH) || (this._$AH = [], this._$AR());
                const t = this._$AH;
                let n, o = 0;
                for (const i of e) o === t.length ? t.push(n = new ur(this.k(qi()), this.k(qi()), this, this.options)) : n = t[o], n._$AI(i), o++;
                o < t.length && (this._$AR(n && n._$AB.nextSibling, o), t.length = o)
            }
            _$AR(e = this._$AA.nextSibling, t) {
                var n;
                for (null === (n = this._$AP) || void 0 === n || n.call(this, !1, !0, t); e && e !== this._$AB;) {
                    const t = e.nextSibling;
                    e.remove(), e = t
                }
            }
            setConnected(e) {
                var t;
                void 0 === this._$AM && (this._$Cp = e, null === (t = this._$AP) || void 0 === t || t.call(this, e))
            }
        }
        class hr {
            constructor(e, t, n, o, i) {
                this.type = 1, this._$AH = or, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = i, n.length > 2 || "" !== n[0] || "" !== n[1] ? (this._$AH = Array(n.length - 1).fill(new String), this.strings = n) : this._$AH = or
            }
            get tagName() {
                return this.element.tagName
            }
            get _$AU() {
                return this._$AM._$AU
            }
            _$AI(e, t = this, n, o) {
                const i = this.strings;
                let r = !1;
                if (void 0 === i) e = dr(this, e, t, 0), r = !Wi(e) || e !== this._$AH && e !== nr, r && (this._$AH = e);
                else {
                    const o = e;
                    let a, s;
                    for (e = i[0], a = 0; a < i.length - 1; a++) s = dr(this, o[n + a], t, a), s === nr && (s = this._$AH[a]), r || (r = !Wi(s) || s !== this._$AH[a]), s === or ? e = or : e !== or && (e += (null != s ? s : "") + i[a + 1]), this._$AH[a] = s
                }
                r && !o && this.j(e)
            }
            j(e) {
                e === or ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != e ? e : "")
            }
        }
        class pr extends hr {
            constructor() {
                super(...arguments), this.type = 3
            }
            j(e) {
                this.element[this.name] = e === or ? void 0 : e
            }
        }
        const br = Di ? Di.emptyScript : "";
        class vr extends hr {
            constructor() {
                super(...arguments), this.type = 4
            }
            j(e) {
                e && e !== or ? this.element.setAttribute(this.name, br) : this.element.removeAttribute(this.name)
            }
        }
        class fr extends hr {
            constructor(e, t, n, o, i) {
                super(e, t, n, o, i), this.type = 5
            }
            _$AI(e, t = this) {
                var n;
                if ((e = null !== (n = dr(this, e, t, 0)) && void 0 !== n ? n : or) === nr) return;
                const o = this._$AH,
                    i = e === or && o !== or || e.capture !== o.capture || e.once !== o.once || e.passive !== o.passive,
                    r = e !== or && (o === or || i);
                i && this.element.removeEventListener(this.name, this, o), r && this.element.addEventListener(this.name, this, e), this._$AH = e
            }
            handleEvent(e) {
                var t, n;
                "function" == typeof this._$AH ? this._$AH.call(null !== (n = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== n ? n : this.element, e) : this._$AH.handleEvent(e)
            }
        }
        class gr {
            constructor(e, t, n) {
                this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n
            }
            get _$AU() {
                return this._$AM._$AU
            }
            _$AI(e) {
                dr(this, e)
            }
        }
        const mr = Mi.litHtmlPolyfillSupport;
        null == mr || mr(lr, ur), (null !== (Ni = Mi.litHtmlVersions) && void 0 !== Ni ? Ni : Mi.litHtmlVersions = []).push("2.8.0");
        const wr = (e, t, n) => {
            var o, i;
            const r = null !== (o = null == n ? void 0 : n.renderBefore) && void 0 !== o ? o : t;
            let a = r._$litPart$;
            if (void 0 === a) {
                const e = null !== (i = null == n ? void 0 : n.renderBefore) && void 0 !== i ? i : null;
                r._$litPart$ = a = new ur(t.insertBefore(qi(), e), e, void 0, null != n ? n : {})
            }
            return a._$AI(e), a
        };
        /**
         * @license
         * Copyright 2017 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        var _r, yr;
        class kr extends Pi {
            constructor() {
                super(...arguments), this.renderOptions = {
                    host: this
                }, this._$Do = void 0
            }
            createRenderRoot() {
                var e, t;
                const n = super.createRenderRoot();
                return null !== (e = (t = this.renderOptions).renderBefore) && void 0 !== e || (t.renderBefore = n.firstChild), n
            }
            update(e) {
                const t = this.render();
                this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = wr(t, this.renderRoot, this.renderOptions)
            }
            connectedCallback() {
                var e;
                super.connectedCallback(), null === (e = this._$Do) || void 0 === e || e.setConnected(!0)
            }
            disconnectedCallback() {
                var e;
                super.disconnectedCallback(), null === (e = this._$Do) || void 0 === e || e.setConnected(!1)
            }
            render() {
                return nr
            }
        }
        kr.finalized = !0, kr._$litElement$ = !0, null === (_r = globalThis.litElementHydrateSupport) || void 0 === _r || _r.call(globalThis, {
            LitElement: kr
        });
        const zr = globalThis.litElementPolyfillSupport;
        null == zr || zr({
            LitElement: kr
        }), (null !== (yr = globalThis.litElementVersions) && void 0 !== yr ? yr : globalThis.litElementVersions = []).push("3.3.3");
        /**
         * @license
         * Copyright 2017 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        const Ar = ({
            finisher: e,
            descriptor: t
        }) => (n, o) => {
            var i;
            if (void 0 === o) {
                const o = null !== (i = n.originalKey) && void 0 !== i ? i : n.key,
                    r = null != t ? {
                        kind: "method",
                        placement: "prototype",
                        key: o,
                        descriptor: t(n.key)
                    } : {
                        ...n,
                        key: o
                    };
                return null != e && (r.finisher = function(t) {
                    e(t, o)
                }), r
            } {
                const i = n.constructor;
                void 0 !== t && Object.defineProperty(n, o, t(o)), null == e || e(i, o)
            }
        }
        /**
         * @license
         * Copyright 2017 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        ;

        function xr(e, t) {
            return Ar({
                descriptor: n => {
                    const o = {
                        get() {
                            var t, n;
                            return null !== (n = null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelector(e)) && void 0 !== n ? n : null
                        },
                        enumerable: !0,
                        configurable: !0
                    };
                    if (t) {
                        const t = "symbol" == typeof n ? Symbol() : "__" + n;
                        o.get = function() {
                            var n, o;
                            return void 0 === this[t] && (this[t] = null !== (o = null === (n = this.renderRoot) || void 0 === n ? void 0 : n.querySelector(e)) && void 0 !== o ? o : null), this[t]
                        }
                    }
                    return o
                }
            })
        }
        /**
         * @license
         * Copyright 2017 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        function Sr(e) {
            return Ar({
                descriptor: t => ({
                    get() {
                        var t, n;
                        return null !== (n = null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelectorAll(e)) && void 0 !== n ? n : []
                    },
                    enumerable: !0,
                    configurable: !0
                })
            })
        }
        /**
         * @license
         * Copyright 2021 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        var $r;
        const Er = null != (null === ($r = window.HTMLSlotElement) || void 0 === $r ? void 0 : $r.prototype.assignedElements) ? (e, t) => e.assignedElements(t) : (e, t) => e.assignedNodes(t).filter((e => e.nodeType === Node.ELEMENT_NODE));
        /**
         * @license
         * Copyright 2017 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        function Cr(e, t, n) {
            let o, i = e;
            return "object" == typeof e ? (i = e.slot, o = e) : o = {
                flatten: t
            }, n ? function(e) {
                const {
                    slot: t,
                    selector: n
                } = null != e ? e : {};
                return Ar({
                    descriptor: o => ({
                        get() {
                            var o;
                            const i = "slot" + (t ? `[name=${t}]` : ":not([name])"),
                                r = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i),
                                a = null != r ? Er(r, e) : [];
                            return n ? a.filter((e => e.matches(n))) : a
                        },
                        enumerable: !0,
                        configurable: !0
                    })
                })
            }({
                slot: i,
                flatten: t,
                selector: n
            }) : Ar({
                descriptor: e => ({
                    get() {
                        var e, t;
                        const n = "slot" + (i ? `[name=${i}]` : ":not([name])"),
                            r = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(n);
                        return null !== (t = null == r ? void 0 : r.assignedNodes(o)) && void 0 !== t ? t : []
                    },
                    enumerable: !0,
                    configurable: !0
                })
            })
        }
        var Or = "object" == typeof global && global && global.Object === Object && global,
            Br = "object" == typeof self && self && self.Object === Object && self,
            Lr = Or || Br || Function("return this")(),
            Tr = Lr.Symbol,
            Pr = Object.prototype,
            Nr = Pr.hasOwnProperty,
            Mr = Pr.toString,
            Dr = Tr ? Tr.toStringTag : void 0;
        var jr = Object.prototype.toString;
        var Rr = "[object Null]",
            Ir = "[object Undefined]",
            Fr = Tr ? Tr.toStringTag : void 0;

        function Ur(e) {
            return null == e ? void 0 === e ? Ir : Rr : Fr && Fr in Object(e) ? function(e) {
                var t = Nr.call(e, Dr),
                    n = e[Dr];
                try {
                    e[Dr] = void 0;
                    var o = !0
                } catch (e) {}
                var i = Mr.call(e);
                return o && (t ? e[Dr] = n : delete e[Dr]), i
            }(e) : function(e) {
                return jr.call(e)
            }(e)
        }
        var Hr = "[object Symbol]";
        var qr = /\s/;
        var Wr = /^\s+/;

        function Vr(e) {
            return e ? e.slice(0, function(e) {
                for (var t = e.length; t-- && qr.test(e.charAt(t)););
                return t
            }(e) + 1).replace(Wr, "") : e
        }

        function Gr(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
        var Kr = NaN,
            Yr = /^[-+]0x[0-9a-f]+$/i,
            Xr = /^0b[01]+$/i,
            Zr = /^0o[0-7]+$/i,
            Jr = parseInt;

        function Qr(e) {
            if ("number" == typeof e) return e;
            if (function(e) {
                    return "symbol" == typeof e || function(e) {
                        return null != e && "object" == typeof e
                    }(e) && Ur(e) == Hr
                }(e)) return Kr;
            if (Gr(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = Gr(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = Vr(e);
            var n = Xr.test(e);
            return n || Zr.test(e) ? Jr(e.slice(2), n ? 2 : 8) : Yr.test(e) ? Kr : +e
        }
        var ea = function() {
                return Lr.Date.now()
            },
            ta = "Expected a function",
            na = Math.max,
            oa = Math.min;

        function ia(e, t, n) {
            var o, i, r, a, s, l, d = 0,
                c = !1,
                u = !1,
                h = !0;
            if ("function" != typeof e) throw new TypeError(ta);

            function p(t) {
                var n = o,
                    r = i;
                return o = i = void 0, d = t, a = e.apply(r, n)
            }

            function b(e) {
                var n = e - l;
                return void 0 === l || n >= t || n < 0 || u && e - d >= r
            }

            function v() {
                var e = ea();
                if (b(e)) return f(e);
                s = setTimeout(v, function(e) {
                    var n = t - (e - l);
                    return u ? oa(n, r - (e - d)) : n
                }(e))
            }

            function f(e) {
                return s = void 0, h && o ? p(e) : (o = i = void 0, a)
            }

            function g() {
                var e = ea(),
                    n = b(e);
                if (o = arguments, i = this, l = e, n) {
                    if (void 0 === s) return function(e) {
                        return d = e, s = setTimeout(v, t), c ? p(e) : a
                    }(l);
                    if (u) return clearTimeout(s), s = setTimeout(v, t), p(l)
                }
                return void 0 === s && (s = setTimeout(v, t)), a
            }
            return t = Qr(t) || 0, Gr(n) && (c = !!n.leading, r = (u = "maxWait" in n) ? na(Qr(n.maxWait) || 0, t) : r, h = "trailing" in n ? !!n.trailing : h), g.cancel = function() {
                void 0 !== s && clearTimeout(s), d = 0, o = l = i = s = void 0
            }, g.flush = function() {
                return void 0 === s ? a : f(ea())
            }, g
        }

        function ra(e, t, n) {
            var o = !0,
                i = !0;
            if ("function" != typeof e) throw new TypeError("Expected a function");
            return Gr(n) && (o = "leading" in n ? !!n.leading : o, i = "trailing" in n ? !!n.trailing : i), ia(e, t, {
                leading: o,
                maxWait: t,
                trailing: i
            })
        }
        var aa = zi`@font-face{font-display:swap;font-family:Blizzard;font-style:"normal";font-weight:300;src:url(https://turbo-wow.ru/site/images/all/fonts/blizzard-300-normal.woff) format("woff")}@font-face{font-display:swap;font-family:Blizzard;font-style:italic;font-weight:300;src:url(https://turbo-wow.ru/site/images/all/fonts/blizzard-300-italic.woff) format("woff")}@font-face{font-display:swap;font-family:Blizzard;font-style:"normal";font-weight:400;src:url(https://turbo-wow.ru/site/images/all/fonts/blizzard-400-normal.woff) format("woff")}@font-face{font-display:swap;font-family:Blizzard;font-style:italic;font-weight:400;src:url(https://turbo-wow.ru/site/images/all/fonts/blizzard-400-italic.woff) format("woff")}@font-face{font-display:swap;font-family:Blizzard;font-style:"normal";font-weight:700;src:url(https://turbo-wow.ru/site/images/all/fonts/blizzard-700-normal.woff) format("woff")}@font-face{font-display:swap;font-family:Blizzard;font-style:italic;font-weight:700;src:url(https://turbo-wow.ru/site/images/all/fonts/blizzard-700-italic.woff) format("woff")}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:600;src:url(https://turbo-wow.ru/site/images/all/fonts/pxiByp8kv8JHgFVrLEj6Z11lFd2JQEl8qw.woff2) format("woff2");unicode-range:u+0900-097f,u+1cd0-1cf6,u+1cf8-1cf9,u+200c-200d,u+20a8,u+20b9,u+25cc,u+a830-a839,u+a8e0-a8fb}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:600;src:url(https://turbo-wow.ru/site/images/all/fonts/pxiByp8kv8JHgFVrLEj6Z1JlFd2JQEl8qw.woff2) format("woff2");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-display:swap;font-family:Poppins;font-style:normal;font-weight:600;src:url(https://turbo-wow.ru/site/images/all/fonts/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-family:Archivo;font-stretch:100%;font-style:normal;font-weight:500;src:url(https://turbo-wow.ru/site/images/all/fonts/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTTBjNZ-BdvBU7iVNRQGG4.woff) format("woff");unicode-range:u+0102-0103,u+0110-0111,u+0128-0129,u+0168-0169,u+01a0-01a1,u+01af-01b0,u+1ea0-1ef9,u+20ab}@font-face{font-family:Archivo;font-stretch:100%;font-style:normal;font-weight:500;src:url(https://turbo-wow.ru/site/images/all/fonts/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTTBjNZ-RdvBU7iVNRQGG4.woff) format("woff");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-family:Archivo;font-stretch:100%;font-style:normal;font-weight:500;src:url(https://turbo-wow.ru/site/images/all/fonts/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTTBjNZ9xdvBU7iVNRQ.woff) format("woff");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}`
        /**
         * @license
         * Copyright 2018 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        ;
        const sa = e => null != e ? e : N
        /**
         * @license
         * Copyright 2017 Google LLC
         * SPDX-License-Identifier: BSD-3-Clause
         */
        ;
        class la extends Q {
            constructor(e) {
                if (super(e), this.et = N, e.type !== Z) throw Error(this.constructor.directiveName + "() can only be used in child bindings")
            }
            render(e) {
                if (e === N || null == e) return this.ft = void 0, this.et = e;
                if (e === P) return e;
                if ("string" != typeof e) throw Error(this.constructor.directiveName + "() called with a non-string value");
                if (e === this.et) return this.ft;
                this.et = e;
                const t = [e];
                return t.raw = t, this.ft = {
                    _$litType$: this.constructor.resultType,
                    strings: t,
                    values: []
                }
            }
        }
        la.directiveName = "unsafeHTML", la.resultType = 1;
        const da = J(la);
        var ca = zi`:host{--font-default:"Poppins",Helvetica,Arial,sans-serif;box-sizing:border-box;display:block;max-width:var(--view-max);position:sticky;top:0;width:100%;z-index:var(--navbar-z-index)}:host>[part=bar]{align-items:center;background:var(--navbar-background-color-no-blur);display:flex;font-family:var(--font-default);font-weight:var(--font-default-weight);height:var(--size-700);justify-content:space-between;padding:0;position:absolute;white-space:nowrap}@supports ((-webkit-backdrop-filter:blur(var(--navbar-background-blur ))) or (backdrop-filter:blur(var(--navbar-background-blur )))){:host>[part=bar]{-webkit-backdrop-filter:blur(var(--navbar-background-blur));backdrop-filter:blur(var(--navbar-background-blur));background:var(--navbar-background-color)}}::slotted([slot=mobile-site-logo]){margin:0 auto var(--size-100)}:host ::slotted(trb-nav-link[icon=blizzard]:is([slot=site-logo-mobile-overflow],[slot=site-logo-mobile-account])){height:56px;width:104px}:host trb-nav-link[icon=x]::part(nav-link-content){align-items:center;display:flex;height:var(--size-500);justify-content:center;margin:var(--size-100);min-height:var(--size-500);padding:0;width:var(--size-500)}:host trb-nav-link[icon=x]:hover::part(icon){color:var(--navbar-content-color-primary)}.primary-menu,.secondary-menu{align-items:center;display:flex}:host(:not([authenticated])) ::slotted([requires-authentication=true]){display:none}:host([authenticated]) trb-nav-link#trb-nav-battlenet,:host([authenticated]) trb-nav-link#trb-nav-sign-up{display:none}:host(:not([authenticated])) #trb-nav-auth-menu,:host(:not([authenticated])) trb-nav-link#trb-nav-gifts,:host(:not([authenticated])) trb-nav-link#trb-nav-log-out{display:none}#overflow-inner{align-items:center;display:inline-flex}#overflow-outer{align-items:center;display:flex;width:100%}.primary-menu{flex:0 0 56px;justify-content:flex-start;order:0}.secondary-menu{flex:0 1 auto;justify-content:flex-end;order:1}:host([view*=md]) .secondary-menu{padding-left:var(--size-150)}:host>[part=bar]>*{transition:opacity var(--transition-hover-speed)}:host(.transition) ::slotted(*),:host(.transition)>[part=bar]>*{opacity:0;transition:opacity 0s}::slotted([slot=overflow]){display:none}:host([view=mobile])>[part=bar]{margin:auto;width:100%}:host([view=mobile]) slot[name=mobile-site-logo]::slotted(a:is(:hover,:focus)),:host([view=mobile]) slot[name=mobile-site-logo]::slotted(trb-nav-link:is(:hover,:focus)){filter:brightness(120%);opacity:1}:host([view=mobile])
	trb-nav-link[slot=navbar-cta][class*=button]+trb-nav-link[slot=navbar-cta][class*=button]{padding-top:0}:host([view*=md]){margin:0 auto}:host([view*=md])>[part=bar]{border-radius:var(--navbar-menu-border-radius);box-sizing:border-box;height:var(--size-900);left:var(--size-200);margin:0 auto;padding:0 var(--size-150) 0 0;right:var(--size-200);top:var(--size-200)}:host([view*=md]) .primary-menu{flex:1 1 auto}:host([view*=md]) .ctas{display:inline-flex}:host([view*=md]) trb-nav-dropdown.is-dropdown{filter:var(--navbar-menu-drop-shadow)}:host([view*=md]) ::slotted([slot=navbar-cta]),:host([view*=md]) [slot=navbar-cta]{margin-left:var(--size-100)}:host([view*=md]) ::slotted([slot=search]){margin-right:var(--size-100)}:host([view*=md]) ::slotted([slot=site-icon]){padding:calc(var(--size-050)*-1) 0;padding-left:var(--size-100)}:host([view*=lg]) ::slotted([slot=site-icon]){padding:calc(var(--size-050)*-1) 0;padding-left:var(--size-125)}:host([view*=lg]) ::slotted([slot=navbar-cta]),:host([view*=lg]) [slot=navbar-cta]{margin-left:var(--size-150)}:host([view*=lg]) ::slotted([slot=search]){margin-right:var(--size-150)}:host([view*=xl]) ::slotted([slot=site-icon]){padding:calc(var(--size-050)*-1) 0;padding-left:var(--size-200)}:host([view*=xl]) ::slotted([slot=navbar-cta]),:host([view*=xl]) [slot=navbar-cta]{margin-left:var(--size-200)}:host([view*=xl]) ::slotted([slot=search]){margin-right:var(--size-200)}:host([theme=light]){--navbar-content-color-primary:var(--color-darken-900);--navbar-content-color-secondary:var(--color-darken-600);--navbar-content-color-tertiary:var(--color-darken-500);--navbar-background-color:#e5ebf4cc;--navbar-background-color-no-blur:#e5ebf4f2;--navbar-menu-background-color:#efefef;--navbar-menu-background-color-alt:var(--color-darken-100);--navbar-hover-background-color:var(--color-darken-100);--navbar-hover-background-color-alt:var(--color-darken-300);--navbar-blizzard-logo-background-color:var(--color-content-700);--navbar-badge-text-color:var(--color-content-900);--navbar-battletag-text-color:var(--color-primary-500);--navbar-search-background-color:var(--color-content-900)}:host([theme=light]) trb-nav-drawer{--trb-drawer-secondary-list-background:var(--navbar-menu-background-color-alt);--trb-drawer-dialog-background-color:var(--navbar-menu-background-color)}:host([data-device-type=Other])
	[trb-device]:not([trb-device~=Other]):not([trb-device~=other]){display:none}:host([data-device-type=Android])
	[trb-device]:not([trb-device~=Android]):not([trb-device~=android]):not([trb-device~=mobile]){display:none}:host([data-device-type=iOS])
	[trb-device]:not([trb-device~=iOS]):not([trb-device~=ios]):not([trb-device~=mobile]){display:none}:host([data-device-type=Windows])
	[trb-device]:not([trb-device~=Windows]):not([trb-device~=windows]):not([trb-device~=PC]):not([trb-device~=pc]){display:none}:host([data-device-type=macOS])
	[trb-device]:not([trb-device~=macOS]):not([trb-device~=macos]):not([trb-device~=mac]):not([trb-device~=PC]):not([trb-device~=pc]){display:none}:host ::slotted([slot=skip-link]),:host [slot=skip-link]{left:var(--size-900);position:absolute;transform:translateY(-500%);z-index:2}:host([view*=md]) ::slotted([slot=skip-link]),:host([view*=md]) [slot=skip-link]{left:var(--size-150)}:host([view=mobile]) ::slotted([slot=skip-link]:is(:active,:focus)),:host([view=mobile]) [slot=skip-link]:is(:focus,:active){left:50%;top:50%;transform:translate(-50%,-50%)}:host([view*=md]) ::slotted([slot=skip-link]:is(:active,:focus)),:host([view*=md]) [slot=skip-link]:is(:focus,:active){transform:unset}:host([view=mobile]) [name=site-icon] ::slotted([slot=site-logo]){padding:0;width:min-content}:host([view=mobile]) ::slotted(trb-nav-dropdown[slot=site-logo]){display:inline-grid;height:unset;z-index:0}trb-nav-drawer{--trb-drawer-container-width:var(--navbar-mobile-dropdown-width,calc(100% - var(--size-700)));--trb-drawer-container-height:100vh;--trb-drawer-transition-animation-duration:var(--navbar-mobile-dropdown-duration);--trb-drawer-secondary-list-background:var(--navbar-menu-background-color-alt);--trb-drawer-overlay-top:var(--size-700);--trb-drawer-overlay-width:100vw;--trb-drawer-overlay-height:100vh;--z-index-fixed:10;--measure-z-index-fixed:10;--trb-drawer-dialog-background-color:var(--navbar-menu-background-color)}:host ::slotted(trb-nav-link[slot*=primary].overflowed),trb-nav-drawer#overflow trb-nav-link[slot*=primary]{font-family:var(--font-default);font-weight:var(--font-default-weight)}trb-nav-drawer#account>trb-nav-link#trb-nav-battlenet,trb-nav-dropdown#account>trb-nav-link#trb-nav-battlenet{order:-1}trb-nav-drawer#account>trb-nav-link[slot=toggle-button]>img,trb-nav-dropdown#account>img[slot=icon]{--navbar-icon-right-margin:var(--size-100);border-radius:50%;height:32px;width:32px}trb-nav-drawer trb-nav-link:not([class*=button]):not([slot=toggle-button]){--nav-link-icon-color:var(--navbar-content-color-secondary);--navbar-menu-font-size:var(--font-size-550)}trb-nav-drawer trb-nav-link[class*=button]{padding:var(--size-200) var(--size-150)}trb-nav-drawer::part(close-button){border-radius:var(--size-075);color:var(--navbar-content-color-primary);height:var(--size-500);margin:var(--size-100);width:var(--size-500)}trb-nav-drawer trb-nav-link[slot=toggle-button]::part(nav-link-content){justify-content:center;margin:var(--size-100);min-height:var(--size-500);width:var(--size-500)}trb-nav-drawer ::slotted(:not(trb-nav-dropdown)[slot=overflow-secondary-bottom][data-previous-slot=site-logo]){display:none}trb-nav-drawer ::slotted(.button-secondary){order:1}`,
            ua = zi`:host,body{--view-min:320px;--view-xs:480px;--view-sm:720px;--view-md:960px;--view-lg:1200px;--view-xl:1400px;--view-xxl:1600px;--view-max:2600px;--size-025:2px;--size-050:4px;--size-075:6px;--size-100:8px;--size-125:10px;--size-150:12px;--size-175:14px;--size-200:16px;--size-250:20px;--size-300:24px;--size-350:28px;--size-400:32px;--size-450:36px;--size-500:40px;--size-550:44px;--size-600:48px;--size-700:56px;--size-800:64px;--size-900:72px;--size-1000:80px;--size-1100:96px;--font-default:"Blizzard",Helvetica,Arial,sans-serif,"Microsoft YaHei";--font-accent:"Archivo",Helvetica,Arial,sans-serif,"Microsoft YaHei";--font-size-100:10px;--font-size-200:12px;--font-size-300:14px;--font-size-400:16px;--font-size-500:16px;--font-size-550:18px;--font-size-600:20px;--font-size-700:24px;--font-size-800:30px;--font-size-900:36px;--font-default-weight:600;--font-accent-weight:500;--color-background-100:#0a0d15;--color-background-300:#151c28;--color-background-500:#232a39;--color-background-700:#323a48;--color-darken-100:#0000000d;--color-darken-300:#0000001a;--color-darken-400:#00000026;--color-darken-500:#0000004d;--color-darken-600:#00000080;--color-darken-700:#000000b3;--color-darken-800:#000000e6;--color-darken-900:#000;--color-content-100:#ffffff0d;--color-content-300:#ffffff1a;--color-content-400:#ffffff26;--color-content-500:#ffffff4d;--color-content-600:#ffffff80;--color-content-700:#ffffffb3;--color-content-800:#ffffffe6;--color-content-900:#fff;--color-accent-500:#5d719866;--color-accent-600:#5d719899;--color-accent-700:#5d7198cc;--color-primary-500:#009dff;--color-primary-500-inverse:#0074e0;--color-primary-600:#33b1ff;--color-primary-700:#66c4ff;--shadow-xs:0 1px 3px 0 #0000001f;--color-success-500:#00ff94;--color-error-500:#f31d77;--line-height-default:normal;--filter-100:brightness(100%) contrast(100%);--filter-200:brightness(210%) contrast(90%);--transition-hover-speed:0.1s;--transition-hover:color var(--transition-hover-speed) ease,background-color var(--transition-hover-speed) ease,text-decoration-color var(--transition-hover-speed) ease,filter var(--transition-hover-speed) ease,border-color var(--transition-hover-speed) ease;--navbar-background-color:#282d43cc;--navbar-background-color-no-blur:#222639f2;--navbar-button-color-primary:#0c94ec;--navbar-button-color-primary-hover:#25a2f4;--navbar-button-color-secondary:#060c11;--navbar-button-color-secondary-hover:#101723;--navbar-button-color-battlenet:#0074e0;--navbar-button-color-battlenet-hover:#148eff;--navbar-menu-background-color:#171926;--navbar-search-background-color:var(--color-darken-600);--navbar-button-text-color:var(--navbar-button-font-color,var(--color-content-900));--navbar-badge-background-color:var(--navbar-menu-badge-background-color,#1fb8ff);--navbar-content-color-primary:var(--navbar-font-color,var(--color-content-900));--navbar-content-color-secondary:var(--navbar-icon-color,var(--color-content-600));--navbar-content-color-tertiary:var(--color-content-500);--navbar-blizzard-logo-background-color:var(--color-darken-500);--navbar-menu-background-color-alt:var(--navbar-menu-background-color--secondary,var(--color-darken-500));--navbar-hover-background-color:var(--color-content-100);--navbar-hover-background-color-alt:var(--color-content-300);--navbar-menu-background-color-open:var(--navbar-menu-background-color-alt);--navbar-hover-icon-color:var(--navbar-content-color-secondary);--navbar-badge-text-color:var(--color-darken-900);--navbar-battletag-text-color:var(--color-primary-700);--navbar-battletag-text-size:var(--navbar-menu-font-size);--navbar-menu-text-color-primary:var(--navbar-content-color-primary);--navbar-menu-icon-color-primary:var(--navbar-content-color-secondary);--navbar-menu-text-color-secondary:var(--navbar-content-color-primary);--navbar-menu-icon-color-secondary:var(--navbar-content-color-secondary);--navbar-background-blur:20px;--navbar-link-padding-md:0 var(--size-100);--navbar-link-padding-lg:0 var(--size-150);--navbar-link-padding-xl:0 var(--size-200);--navbar-link-white-space:nowrap;--navbar-button-padding-md:0 var(--size-150);--navbar-button-padding-lg:0 var(--size-200);--navbar-button-padding-xl:0 var(--size-300);--navbar-button-border-radius:var(--size-100);--navbar-z-index:99;--navbar-mobile-dropdown-duration:250ms;--navbar-logo-size:var(--size-1000);--navbar-logo-padding:var(--size-100);--navbar-mobile-logo-size-width:var(--size-500);--navbar-mobile-logo-size-height:var(--size-500);--navbar-menu-font-size:var(--font-size-550);--font-subtext-weight:var(--font-accent-weight);--navbar-mobile-overflowed-item-font-family:var(--font-default);--navbar-mobile-overflowed-item-font-weight:var(--font-default-weight);--navbar-menu-border-radius:var(--size-100);--navbar-icon-right-margin:var(--size-150);--navbar-menu-border-size:0px;--navbar-menu-border-color:#0000;--navbar-search-dropdown-max-height:600px;--navbar-search-dropdown-width:400px;--footer-z-index:98;--footer-logo-color:#009dff;--footer-logo-bottom-color:#009dff;--footer-background-image-desktop:none;--footer-background-image-mobile:none;--footer-background-gradient:none;--footer-content-size:var(--font-size-300);--footer-region-font-size:var(--font-size-400);--footer-language-font-size:var(--font-size-550);--footer-background-blur:none}`,
            ha = {
                "en-US": {
                    search: "search"
                },
                "de-DE": {
                    search: "März"
                },
                "es-ES": {
                    search: "Buscar"
                },
                "es-MX": {
                    search: "Buscar"
                },
                "fr-FR": {
                    search: "Rechercher"
                },
                "it-IT": {
                    search: "Cerca"
                },
                "ja-JP": {
                    search: "検索"
                },
                "ko-KR": {
                    search: "검색"
                },
                "pl-PL": {
                    search: "Wyszukaj"
                },
                "pt-BR": {
                    search: "Pesquisar"
                },
                "ru-RU": {
                    search: "Поиск"
                },
                "th-TH": {
                    search: "ค้นหา"
                },
                "zh-CN": {
                    search: "搜索"
                },
                "zh-TW": {
                    search: "搜尋"
                }
            },
            pa = zi`:host{color:var(--navbar-content-color-primary);display:block;position:relative}*{line-height:var(--line-height-default);transition:var(--transition-hover)}:host(#overflow)>trb-nav-link span{font-family:auto;letter-spacing:2px;transform:scale(1.5) translateY(-3px)}:host([slot=overflow]){display:none}:host
	.trb-nav-dropdown-menu:not(.has-submenu)
	.trb-nav-dropdown-menu--secondary{display:none!important}.trb-nav-dropdown-menu--subtitle{color:var(--navbar-content-color-secondary);font-family:var(--font-default);font-size:var(--font-size-300);font-weight:var(--font-default-weight);margin:var(--size-200) var(--size-150) var(--size-100);text-transform:uppercase}.trb-nav-dropdown-menu{clip-path:polygon(0 0,0 0,0 0,0 0);max-height:0;overflow:hidden;padding:0;transition:transform .25s ease,opacity .25s ease,max-height .25s ease}:host .trb-nav-dropdown-menu--primary{--navbar-content-color-primary:var(--navbar-menu-text-color-primary);--navbar-content-color-secondary:var(--navbar-menu-icon-color-primary);display:flex;flex-direction:column}:host .trb-nav-dropdown-menu--secondary{--navbar-content-color-primary:var(--navbar-menu-text-color-secondary);--navbar-content-color-secondary:var(--navbar-menu-icon-color-secondary);display:flex;flex-direction:column}:host([view=mobile][hide-on-mobile]){display:none}:host([view=mobile]) .trb-nav-dropdown-menu.has-submenu{position:relative}:host([view=mobile]:not(#overflow,#account)) .trb-nav-dropdown-menu{height:auto;width:auto}:host([view=mobile][slot*=-primary-]){background-color:initial;border-radius:var(--size-050);transition:background-color var(--transition-hover-speed) ease}:host([view=mobile][slot*=-secondary-]){border-radius:var(--size-050);transition:background-color var(--transition-hover-speed) ease}:host([view=mobile][slot*=-primary-].is-open){background-color:var(--navbar-menu-background-color-open);margin-bottom:var(--size-100)}:host([view=mobile][slot*=-secondary-].is-open){background-color:var(--navbar-menu-background-color-open)}:host([view=mobile][slot*=-primary-]:not(#trb-nav-search,[slot=overflow-secondary-bottom]))
	[class*=trb-nav-dropdown-menu--],:host([view=mobile][slot*=-secondary-]:not(#trb-nav-search,[slot=overflow-secondary-bottom]))
	[class*=trb-nav-dropdown-menu--]{padding:0;visibility:hidden;width:auto}:host([view=mobile]) .more-blizzard{background:var(--navbar-menu-background-color-alt);box-sizing:border-box;flex:1 1 auto;flex-direction:column;padding:var(--size-100) var(--size-100) var(--size-400)}:host(.overflowed[view=mobile]) ::slotted(trb-nav-link){color:var(--navbar-mobile-overflowed-dropdown-link-color);font-family:var(--navbar-mobile-overflowed-dropdown-link-font-family);font-weight:var(--navbar-mobile-overflowed-dropdown-link-weight)}:host(.overflowed[view=mobile])>trb-nav-link{font-family:var(--navbar-mobile-overflowed-item-font-family);font-weight:var(--navbar-mobile-overflowed-item-font-weight)}:host([hide-on-desktop]:not([view=mobile])){display:none}:host([view*=md]){perspective:1000px}:host([view*=md]:not(.hide,[hide-on-desktop],.overflowed)){display:inline-block}:host([view*=md])>trb-nav-link{font-size:var(--font-size-600);width:auto}:host([view*=md]) .trb-nav-dropdown-menu{display:none;height:auto;max-height:none;min-width:320px;opacity:1;padding-top:var(--size-200);position:absolute;top:100%;transform:rotateX(-15deg);transform-origin:50% -50px;width:auto}:host(#trb-nav-search[view*=md]:not(.show-dropdown))>.trb-nav-dropdown-menu{display:none}:host(#trb-nav-search[view*=md].show-dropdown)>.trb-nav-dropdown-menu{display:block}:host([view*=md].show-opacity)>.trb-nav-dropdown-menu,:host([view*=md]:not(#trb-nav-search))>trb-nav-link.focus-within+.trb-nav-dropdown-menu,:host([view*=md]:not(#trb-nav-search))>trb-nav-link:hover+.trb-nav-dropdown-menu{padding-top:var(--size-200)}:host([view*=md]:is([slot=primary-menu],[slot=secondary-menu]):hover)>trb-nav-link::part(nav-link-content){background:var(--navbar-hover-background-color)}@keyframes fadeIn{0%{opacity:0;transform:rotateX(-15deg)}to{opacity:1;transform:rotateX(0deg)}}:host(.show-opacity)>.trb-nav-dropdown-menu,:host(:is(.is-open)) .trb-nav-dropdown-menu{animation:fadeIn .25s;clip-path:polygon(100% 0,100% 100%,0 100%,0 0);display:block;opacity:1;transform:rotateX(0deg)}:host([view*=md]:not(.overflowed)) .trb-nav-dropdown-menu:before{background:var(--navbar-menu-background-color);border-radius:var(--navbar-menu-border-radius);content:"";height:calc(100% - var(--size-200));left:0;position:absolute;top:var(--size-200);width:100%;z-index:-1}:host([view*=md]:not(.overflowed)) .trb-nav-dropdown-menu:after{content:"";height:100%;position:absolute;width:100%}.dropdown-arrow{background:var(--navbar-menu-background-color);border-color:var(--navbar-menu-border-color) #0000 #0000 var(--navbar-menu-border-color);border-radius:4px;border-style:solid;border-width:var(--navbar-menu-border-size);height:var(--size-200);left:50%;position:absolute;top:var(--size-175);transform:rotate(45deg) translate(-50%);transform-origin:center;transition:opacity var(--transition-hover-speed) ease;width:var(--size-200);z-index:1}:host(.overflowed) .dropdown-arrow{display:none}:host([slot=overflow-secondary-bottom][view=mobile].overflowed)>trb-nav-link,:host([view*=md].overflowed)>trb-nav-link,:host([view*=md].overflowed)>trb-nav-link trb-nav-link-icon,:host([view*=md].overflowed)>trb-nav-link span,:host([view*=md].overflowed)>trb-nav-link.is-dropdown{display:none}:host([slot=overflow-secondary-bottom][view=mobile].overflowed)
	[class*=trb-nav-dropdown-menu],:host([view*=md].overflowed)>trb-nav-link+.trb-nav-dropdown-menu{display:contents}:host(:is([slot=secondary-menu],[slot=navbar-cta],[slot=account]))
	trb-nav-link::part(text){font-size:var(--font-size-500)}:host(#trb-nav-search) ::slotted(:is([slot=dropdown-secondary-menu])){--navbar-link-white-space:normal}:host([view*=md])
	[class*=trb-nav-dropdown-menu--]:not([class*="--subtitle"]){padding:var(--size-150);position:relative}:host([view*=md].overflowed)>trb-nav-link+.trb-nav-dropdown-menu
	[class*=trb-nav-dropdown-menu--]{display:contents}:host([view=mobile][slot=site-logo])>trb-nav-link+.trb-nav-dropdown-menu{display:none}:host([view*=md]#overflow){margin-left:var(--size-100)}:host([view*=md]) .trb-nav-dropdown-menu--primary{border-color:var(--navbar-menu-border-color);border-radius:var(--navbar-menu-border-radius) var(--navbar-menu-border-radius) 0 0;border-style:solid;border-width:var(--navbar-menu-border-size) var(--navbar-menu-border-size) 0 var(--navbar-menu-border-size)}:host([view*=md]) .trb-nav-dropdown-menu--secondary{background:var(--navbar-menu-background-color-alt);border-color:var(--navbar-menu-border-color);border-radius:0 0 var(--navbar-menu-border-radius) var(--navbar-menu-border-radius);border-style:solid;border-width:0 var(--navbar-menu-border-size) var(--navbar-menu-border-size) var(--navbar-menu-border-size)}:host
	.trb-nav-dropdown-menu:not(.has-submenu)
	.trb-nav-dropdown-menu--primary{border-radius:var(--navbar-menu-border-radius);border-width:var(--navbar-menu-border-size)}:host([view*=lg]#overflow){margin-left:var(--size-150)}:host([view*=xl]#overflow){margin-left:var(--size-200)}:host(.hide){display:none}:host(:not(#trb-nav-search)){z-index:1}:host(#trb-nav-search:not([view=mobile])){margin-right:var(--size-150)}:host(#trb-nav-search) ::slotted(input){background:var(--navbar-search-background-color);border:0;border-radius:var(--navbar-menu-border-radius);color:var(--navbar-content-color-primary);font-family:Poppins;font-size:var(--font-size-400);min-height:var(--size-600);padding:0;padding-left:var(--size-550);text-overflow:ellipsis;width:-webkit-fill-available;width:-moz-available}:host(#trb-nav-search) ::slotted(input)::placeholder{color:var(--navbar-content-color-tertiary)}:host(#trb-nav-search) ::slotted(input:hover){outline:solid var(--size-025) var(--navbar-content-color-tertiary)}:host(#trb-nav-search) ::slotted(input:focus){outline:solid var(--size-025) var(--navbar-badge-background-color)}:host(#trb-nav-search) ::slotted(#trb-nav-search-icon){color:var(--navbar-content-color-tertiary);left:var(--size-300);pointer-events:none;position:absolute;transform:translateY(50%)}:host(#trb-nav-search[view*=md]) ::slotted(#trb-nav-search-icon){left:var(--size-450);top:var(--size-350)}:host(#trb-nav-search) .trb-nav-dropdown-menu{max-height:none}:host(#trb-nav-search) trb-nav-link{color:var(--navbar-content-color-secondary)}:host(#trb-nav-search) .trb-nav-dropdown-menu--primary{padding:var(--size-200) var(--size-150)}:host(#trb-nav-search[view=mobile]) .trb-nav-dropdown-menu--secondary{padding:0}:host(#trb-nav-search:not([view=mobile])) .trb-nav-dropdown-menu--primary{padding:var(--size-350) var(--size-300)}:host(#trb-nav-search[view=mobile]) trb-nav-link{display:none}:host(#trb-nav-search[view=mobile]) .trb-nav-dropdown-menu{clip-path:polygon(100% 0,100% 100%,0 100%,0 0);max-height:none;opacity:1}:host(#trb-nav-search:not([view=mobile])) .trb-nav-dropdown-menu{width:var(--navbar-search-dropdown-width)}:host(#trb-nav-search:is(:hover,:focus,.show-dropdown)) ::part(nav-link-content){background-color:var(--navbar-hover-background-color);color:var(--navbar-content-color-primary)}:host(#trb-nav-search:not([view=mobile])) .trb-nav-dropdown-menu--secondary{max-height:var(--navbar-search-dropdown-max-height);overflow:auto}:host([slot=site-logo]) trb-nav-link::part(chevron-down){display:flex}:host([view*=md].icon-only:is(#overflow,#trb-nav-search)) ::part(nav-link-content){justify-content:center;padding:0;width:var(--size-600)}:host(trb-nav-dropdown[slot=site-logo][view=mobile]){display:inline-grid;height:unset;z-index:0}:host([slot=site-logo]){height:100%}`;
        let ba = n(null, (function(e, t) {
            class n extends t {
                constructor() {
                    super(), e(this), this._isMobile = !0, this._dropdownOffset = {}, this.role = void 0 === this.role || null === this.role ? "presentation" : this.role, this.addEventListener("mouseover", this._mouseover), this.addEventListener("mouseout", this._mouseout), this.addEventListener("keydown", (e => {
                        ("Escape" === e.key || 27 === e.keyCode) && requestAnimationFrame((() => {
                            this.dispatchEvent(new CustomEvent("trb-nav-dropdown:close", {
                                bubbles: !0,
                                composed: !0,
                                cancelable: !0,
                                detail: {
                                    target: this._NavLink
                                }
                            }))
                        }))
                    }), !0)
                }
            }
            return {
                F: n,
                d: [{
                    kind: "field",
                    decorators: [Cr("dropdown-primary-menu", !0)],
                    key: "_PrimaryItems",
                    value: void 0
                }, {
                    kind: "field",
                    decorators: [Cr("dropdown-secondary-menu", !0)],
                    key: "_SecondaryItems",
                    value: void 0
                }, {
                    kind: "field",
                    decorators: [Cr("more-from-blizzard", !0)],
                    key: "_MoreBlizzItems",
                    value: void 0
                }, {
                    kind: "field",
                    decorators: [xr('slot[name="more-from-blizzard"]')],
                    key: "_MoreBlizzSlot",
                    value: void 0
                }, {
                    kind: "field",
                    decorators: [xr(".trb-nav-dropdown-menu", !0)],
                    key: "_DropdownMenu",
                    value: void 0
                }, {
                    kind: "field",
                    decorators: [Sr('slot[name*="-primary-"], slot[name*="-secondary-"]')],
                    key: "_DropdownSlots",
                    value: void 0
                }, {
                    kind: "field",
                    decorators: [Sr('slot[name*="-primary-"], slot[name*="-secondary-"], slot[name="mobile-menu-header"]')],
                    key: "_AllDropdownSlots",
                    value: void 0
                }, {
                    kind: "field",
                    decorators: [xr(":host > trb-nav-link")],
                    key: "_NavLink",
                    value: void 0
                }, {
                    kind: "field",
                    decorators: [xr(".trb-nav-dropdown-menu")],
                    key: "_DropdownWrapper",
                    value: void 0
                }, {
                    kind: "field",
                    decorators: [Sr('[class*="trb-nav-dropdown-menu--"]')],
                    key: "_DropdownContents",
                    value: void 0
                }, {
                    kind: "get",
                    static: !0,
                    key: "styles",
                    value: function() {
                        return [pa]
                    }
                }, {
                    kind: "get",
                    static: !0,
                    key: "properties",
                    value: function() {
                        return {
                            id: {
                                type: String,
                                converter: e => e.toLowerCase().replace(" ", "-")
                            },
                            text: {
                                type: String
                            },
                            icon: {
                                type: String
                            },
                            iconSrc: {
                                type: String,
                                attribute: "icon-src"
                            },
                            chevronIcon: {
                                attribute: "chevron-icon",
                                type: String
                            },
                            badge: {
                                type: String
                            },
                            href: {
                                type: String
                            },
                            submenuTitle: {
                                attribute: "submenu-title",
                                type: String
                            },
                            requiresAuthentication: {
                                attribute: "requires-authentication",
                                type: Boolean
                            },
                            hideOnDesktop: {
                                attribute: "hide-on-desktop",
                                type: Boolean
                            },
                            hideOnMobile: {
                                attribute: "hide-on-mobile",
                                type: Boolean
                            },
                            transitionFrom: {
                                attribute: "transition-from",
                                type: String
                            },
                            openOnClick: {
                                attribute: "open-on-click",
                                type: String
                            },
                            _hasSubmenuItems: {
                                type: Boolean
                            },
                            _view: {
                                attribute: "view",
                                type: String,
                                reflect: !0
                            },
                            _isOpen: {
                                type: Boolean
                            },
                            _isMobile: {
                                type: Boolean
                            },
                            role: {
                                type: String,
                                reflect: !0
                            },
                            trbDevice: {
                                attribute: "trb-device",
                                type: String
                            }
                        }
                    }
                }, {
                    kind: "field",
                    key: "_hoverTimeout",
                    value: void 0
                }, {
                    kind: "field",
                    key: "_mouseout",
                    value() {
                        return e => {
                            this._isOpen && !this._isMobile && "trb-nav-search" !== this.id && (this._hoverTimeout = setTimeout(this._close, 300))
                        }
                    }
                }, {
                    kind: "field",
                    key: "_mouseover",
                    value() {
                        return e => {
                            clearTimeout(this._hoverTimeout), this._isOpen || this._isMobile || this.classList.contains("overflowed") || "trb-nav-search" === this.id || this._open(e)
                        }
                    }
                }, {
                    kind: "field",
                    key: "_expandDropdownMenu",
                    value() {
                        return async () => {
                            this._isMobileMenu || this._DropdownWrapper?.style.setProperty("max-height", `${this._getDropdownContentsHeight()+1}px`), this._DropdownContents.forEach((({
                                style: e
                            }) => e.visibility = "visible")), await this.updateComplete, requestAnimationFrame(this._positionDropdown)
                        }
                    }
                }, {
                    kind: "field",
                    key: "_collapseDropdownMenu",
                    value() {
                        return () => {
                            this._DropdownWrapper?.style.removeProperty("max-height"), this._DropdownContents.forEach((({
                                style: e
                            }) => e.removeProperty("visibility")))
                        }
                    }
                }, {
                    kind: "field",
                    key: "_open",
                    value() {
                        return (e = {}) => {
                            const {
                                target: t,
                                detail: n
                            } = e;
                            this._isOpen || (this.dispatchEvent(new CustomEvent("trb-nav-dropdown:close", {
                                bubbles: !0,
                                composed: !0,
                                cancelable: !0,
                                detail: {
                                    target: t
                                }
                            })), this._isOpen = !0, this.classList.add("is-open"), this._expandDropdownMenu(), !this._isMobile || n || this.classList.contains("overflowed") || this._getFirstSlottedItem?.()?.focus?.({
                                preventScroll: !0
                            }), this._isMobile && this._isMobileMenu && this._getClosesttrbNav()?._openOverlay?.())
                        }
                    }
                }, {
                    kind: "field",
                    key: "_close",
                    value() {
                        return e => {
                            this._isOpen && !this._getSlottedNodes().some((t => t === e?.detail?.target)) && (this._isOpen = !1, this.classList.remove("is-open"), this._collapseDropdownMenu(), e?.detail?.target?.focus?.(), this._isMobile && this._isMobileMenu && this._getClosesttrbNav()?._closeOverlay?.())
                        }
                    }
                }, {
                    kind: "field",
                    key: "_getSlottedNodes",
                    value() {
                        return () => be(this._DropdownSlots)
                    }
                }, {
                    kind: "field",
                    key: "_getDropdownContentsHeight",
                    value() {
                        return () => [...this._DropdownContents]?.reduce(((e, {
                            clientHeight: t
                        }) => e + t), 0)
                    }
                }, {
                    kind: "method",
                    key: "connectedCallback",
                    value: function() {
                        h(n, "connectedCallback", this, 3)([]), this.addEventListener("click", this._open), document.addEventListener("trb-nav:resized", ra((e => this._getViewportStatus(e)), 200)), document.addEventListener("trb-nav-dropdown:close", this._close)
                    }
                }, {
                    kind: "method",
                    key: "disconnectedCallback",
                    value: function() {
                        h(n, "disconnectedCallback", this, 3)([]), this.removeEventListener("click", this._open)
                    }
                }, {
                    kind: "method",
                    key: "firstUpdated",
                    value: async function() {
                        this._getViewportStatus(), this._isMobileMenu = "overflow" === this.id || "account" === this.id, this.classList.add("is-dropdown")
                    }
                }, {
                    kind: "field",
                    key: "_getViewportStatus",
                    value() {
                        return () => {
                            const [e, t] = he();
                            this._isMobile = t, this._view = e
                        }
                    }
                }, {
                    kind: "field",
                    key: "_nodeIsntHidden",
                    value() {
                        return ({
                            hideOnDesktop: e,
                            hideOnMobile: t
                        } = {}) => !(this._isMobile ? t : e)
                    }
                }, {
                    kind: "field",
                    key: "_handleSlotchange",
                    value() {
                        return () => {
                            const e = this._getSlottedNodes();
                            e.some(this._nodeIsntHidden) ? (this.classList.remove("hide"), this._hasSubmenuItems = e.some((e => e.slot?.includes("-secondary-") && this._nodeIsntHidden(e) && "SLOT" !== e.nodeName))) : this.classList.add("hide")
                        }
                    }
                }, {
                    kind: "field",
                    key: "_getClosesttrbNav",
                    value() {
                        return () => {
                            const {
                                host: e
                            } = this.getRootNode?.() || {};
                            return e?.nodeName.includes("trb-NAV") ? e : this.closest("trb-NAV, trb-NAV-BATTLENET")
                        }
                    }
                }, {
                    kind: "field",
                    key: "_positionDropdown",
                    value() {
                        return () => {
                            if (this._isMobile) return;
                            const e = this.shadowRoot.querySelector("trb-nav-link")?.shadowRoot?.querySelector(".nav-link-content"),
                                t = this._DropdownMenu.querySelector(".dropdown-arrow"),
                                n = e?.offsetWidth,
                                o = this._DropdownMenu.offsetWidth,
                                i = this.offsetParent?.offsetWidth - n - this.offsetLeft;
                            let r, a = o / 2 - n / 2;
                            this._DropdownMenu.style.removeProperty("left"), t?.style.removeProperty("left"), this._DropdownMenu.style.left = `-${a}px`;
                            const s = this._getClosesttrbNav();
                            if (s) {
                                const e = this._DropdownMenu.getBoundingClientRect(),
                                    l = (s.shadowRoot.querySelector("nav") || s).getBoundingClientRect(),
                                    d = e.left < l.left,
                                    c = e.right > l.right,
                                    u = parseInt(ze("--size-200"));
                                d ? (a = 0, l.left < u && (a = u), r = this.offsetWidth / 2 - this.offsetLeft / 2) : c && (a = o - n - i, l.right > window.innerWidth - u && (a += u), r = o - n / 2 - i), this._DropdownMenu.style.left = `-${a}px`, t && (t.style.left = `${r}px`)
                            }
                        }
                    }
                }, {
                    kind: "method",
                    key: "updated",
                    value: function(e) {
                        if (this._MoreBlizzItems?.length) {
                            const e = this._MoreBlizzSlot.parentElement;
                            this._MoreBlizzItems.forEach((t => e.append(t)))
                        }
                        e.has("_isMobile") && (this._isMobile ? this._DropdownMenu.style.removeProperty("left") : this._positionDropdown())
                    }
                }, {
                    kind: "field",
                    key: "_getAriaLabelFromTitles",
                    value() {
                        return () => {
                            const e = this._getSlottedNodes().filter((({
                                classList: e
                            }) => e.contains("title")));
                            return e.forEach((e => {
                                e.setAttribute("aria-hidden", !0)
                            })), {
                                titleTextPrimary: e.filter((e => e?.getAttribute?.("slot")?.includes?.("primary"))).reduce(ge, ""),
                                titleTextSecondary: e.filter((e => e?.getAttribute?.("slot")?.includes?.("secondary"))).reduce(ge, "")
                            }
                        }
                    }
                }, {
                    kind: "method",
                    key: "_createMenuContents",
                    value: function() {
                        let e = this.id;
                        e && (e = e.replace(/^trb-nav-/, ""));
                        const {
                            titleTextPrimary: t,
                            titleTextSecondary: n
                        } = this._getAriaLabelFromTitles();
                        return tr`<div class="mobile-menu-header"><slot name="mobile-menu-header"></slot></div><div class="trb-nav-dropdown-menu--primary" role="list" aria-label="${sa(t||void 0)}"><slot name="user-info"></slot><slot name="search"></slot><slot name="${e}-primary-top" @slotchange="${this._handleSlotchange}"></slot><slot name="dropdown-primary-menu" @slotchange="${this._handleSlotchange}"></slot><slot name="${e}-primary-bottom" @slotchange="${this._handleSlotchange}"></slot><slot name="navbar-cta"></slot></div><div class="trb-nav-dropdown-menu--secondary" role="list" aria-label="${sa(n||void 0)}" aria-labelledBy="subtitle-secondary">${this.submenuTitle&&"undefined"!==this.submenuTitle?tr`<div id="subtitle-secondary" class="trb-nav-dropdown-menu--subtitle" aria-hidden="true">${this.submenuTitle}</div>`:""}<div role="presentation"><slot name="${e}-secondary-top" @slotchange="${this._handleSlotchange}"></slot><slot name="dropdown-secondary-menu" @slotchange="${this._handleSlotchange}"></slot><slot name="${e}-secondary-bottom" @slotchange="${this._handleSlotchange}"></slot></div></div>`
                    }
                }, {
                    kind: "method",
                    key: "_createMenu",
                    value: function() {
                        return tr`<div id="dropdown-menu" role="menu" class="${ee({"trb-nav-dropdown-menu":!0,"has-submenu":this._hasSubmenuItems})}">${this._isMobile?"":tr`<div class="dropdown-arrow"></div>`} ${this._createMenuContents()}</div>`
                    }
                }, {
                    kind: "field",
                    key: "_getFirstSlottedItem",
                    value() {
                        return () => pe(be(this._AllDropdownSlots).filter((({
                            slot: e
                        }) => "mobile-menu-header" !== e && !e.includes("site-logo"))).at(0))
                    }
                }, {
                    kind: "field",
                    key: "_getLastSlottedItem",
                    value() {
                        return () => be(this._AllDropdownSlots).map((e => "trb-NAV-DROPDOWN" === e.nodeName && "overflow-secondary-bottom" === e.slot ? [...e.querySelectorAll("trb-nav-link")] : e)).flat().at(-1)
                    }
                }, {
                    kind: "field",
                    key: "_preventSiteLogoRedirect",
                    value() {
                        return e => t => {
                            !e || "Enter" !== t.code && 13 !== t.which || (t.preventDefault(), this._open(t))
                        }
                    }
                }, {
                    kind: "method",
                    key: "render",
                    value: function() {
                        const {
                            id: e,
                            text: t,
                            icon: n,
                            iconSrc: o,
                            chevronIcon: i,
                            badge: r,
                            href: a,
                            _isOpen: s,
                            _isMobile: l,
                            slot: d
                        } = this, c = "trb-nav-search" === e, u = "overflow" === e, h = d.includes("site-logo");
                        return tr`<trb-nav-link id="${sa(e||void 0)}" class="${ee({"is-open":s,"is-dropdown":!0,"icon-only":u||c||this.classList.contains("icon-only"),subtle:u&&!l,"show-dropdown":this.classList.contains("show-dropdown")})}" text="${sa(t||void 0)}" icon="${sa(n||void 0)}" icon-src="${sa(o||void 0)}" chevron-icon="${sa(i||void 0)}" badge="${sa(r||void 0)}" slot="${sa(h?d:void 0)}" href="${sa(a||void 0)}" @keydown="${this._preventSiteLogoRedirect(h)}"><slot name="icon" slot="icon"></slot></trb-nav-link>${this._createMenu()}`
                    }
                }]
            }
        }), kr);
        var va = zi`:host{color:var(--navbar-content-color-primary);position:relative}*{line-height:var(--line-height-default);transition:var(--transition-hover)}a,button{background:none;border:none;color:inherit;display:flex;font-family:inherit;font-size:var(--navbar-menu-font-size);font-weight:inherit;padding:0;position:relative;text-decoration:none;width:100%}button:hover{cursor:pointer}.nav-link-content{align-items:center;border-radius:var(--navbar-button-border-radius);box-sizing:border-box;display:flex;min-height:var(--size-600);overflow:hidden;text-align:left;transition:var(--transition-hover)}:host>span{display:flex}:host(:not(.is-dropdown,.disabled,.title))>:active{transform:translateY(1px)}:host(:is(.is-dropdown)){font-family:var(--font-default)}:host(:not(.icon-only,[slot=mobile-site-logo])) .nav-link-content{padding:var(--navbar-link-padding-md)}:host(.icon-only) .nav-link-content{padding:0 var(--size-100)}:host(.icon-only[slot=site-icon])>:is(:hover,:focus) .nav-link-content{filter:brightness(120%)}:host(.inline)>*{display:inline-block}:host([class*=button]) .nav-link-content{align-items:center;border-radius:var(--navbar-button-border-radius);color:var(--navbar-button-text-color);filter:brightness(100%);font-family:var(--font-default);justify-content:center;padding:var(--navbar-button-padding-md);text-align:center}:host(.button-primary) .nav-link-content{background-color:var(--navbar-button-color-primary)}:host(.button-primary) #trb-nav-battlenet .nav-link-content{background-color:var(
		--navbar-button-color-battlenet
	);color:#fff;transition:all var(--transition-hover-speed) ease}:host(.button-primary) #trb-nav-battlenet:is(:hover,:focus) .nav-link-content{background-color:var(
		--navbar-button-color-battlenet-hover
	);box-shadow:var(--navbar-button-box-shadow-battlenet-hover)}:host(.button-primary)>:is(:hover,:focus) .nav-link-content{background-color:var(--navbar-button-color-primary-hover)}:host(.button-secondary) .nav-link-content{background-color:var(--navbar-button-color-secondary)}:host(.button-secondary)>:is(:hover,:focus) .nav-link-content{background-color:var(--navbar-button-color-secondary-hover)}:host(.icon-only:not([slot=toggle-button],[slot=footer-social],[id*=close-]))>:is(:hover,:focus)
	.nav-link-content{background:#0000}:host([slot=site-icon])>*,:host([slot=site-logo])>*{height:100%}:host(:is([slot=site-icon],[slot=site-logo-mobile-overflow]))>:is(:hover,:focus)
	.nav-link-content,:host([icon=blizzard])>:is(:hover,:focus) .nav-link-content{filter:brightness(120%)}:host([icon=blizzard])>:is(:hover,:focus) .nav-link-content,:host([slot=site-icon])>:is(:hover,:focus) .nav-link-content{background-color:initial}trb-nav-link-icon:is([part=icon]){color:var(--nav-link-icon-color)}trb-nav-link-icon:is([slot=site-icon]){color:var(--nav-logo-color)}:host(#account[icon=employee]) trb-nav-link-icon,:host([icon=blizzard]:is([slot*=site-logo],[slot*=site-icon])) trb-nav-link-icon{--nav-link-icon-color:#00aeff}:host([slot=site-icon][clone]:not([view=mobile])),:host([slot=site-logo][view=mobile]){display:none}:host(.title:not([class*=button]))>:is(:hover,:focus) .nav-link-content{background:unset}:host(:not([class*=button],[slot*=site-logo],[slot=site-icon],[slot=footer-social],#trb-nav-search,#account,#overflow,[slot=toggle-button],#close-overflow-menu,#close-account-menu))>:is(:hover,:focus)
	.nav-link-content
	:is(trb-nav-link-icon[part=icon]){color:var(--navbar-hover-icon-color)}:host(:focus-within:not([class*=button],[slot=site-logo]))
	.nav-link-content,:host(:not([class*=button],[slot=site-icon],[slot=user-info],[slot=site-logo],[slot=mobile-site-logo],[slot=footer-social],.title,.disabled))>:is(:hover,:focus)
	.nav-link-content{background:var(--navbar-hover-background-color);color:var(--navbar-hover-text-color)}:host(:not(.icon-only,[slot=site-icon]))
	trb-nav-link-icon{align-items:center;display:inline-flex}:host trb-nav-link-icon[class=chevron-down],:host([is-external]:not(.icon-only)) trb-nav-link-icon[icon=arrow-up-right]{color:var(--navbar-content-color-secondary);margin:0 0 0 var(--size-050);transition:transform var(--transition-hover-speed) ease}:host(:not(.icon-only)) trb-nav-link-icon[class=chevron-down]::part(icon){stroke-width:var(--size-050)}:host(.icon-only) trb-nav-link-icon[class=chevron-down],:host(.icon-only) trb-nav-link-icon[icon=chevron-down]{display:none}:host([slot=site-logo-mobile]){align-items:center;display:flex;height:100%}.nav-link-text{font-size:var(--navbar-menu-font-size);overflow:hidden;text-overflow:ellipsis;white-space:var(--navbar-link-white-space)}:host(:not(.jumbo)) .nav-link-text:not(.has-subtext){align-items:center}:host(:is([slot=secondary-menu],[slot=navbar-cta])),:host([class*=button]){--navbar-menu-font-size:var(--font-size-500)}.nav-link-extras{display:inline-block;font-size:var(--font-size-300);vertical-align:middle}.nav-link-avatar{border-radius:50%;height:var(--size-400);object-fit:cover;width:var(--size-400)}.has-subtext .nav-link-extras{align-items:center;display:flex;margin-top:var(--size-075)}.nav-link-subtext{color:var(--navbar-content-color-secondary);font-weight:var(--font-subtext-weight);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.nav-link-display-only{display:inline-block}:host(:is([slot*=-primary-],[slot*=-secondary-],[slot*=user-info]))
	.nav-link-content{align-items:center;border-radius:var(--size-050);display:flex;justify-content:flex-start;padding:0 var(--size-150);width:100%}:host(:is([slot*=-primary-],[slot*=-secondary-],[slot*=user-info])[class*=button]){display:block;padding:var(--size-200) var(--size-150)}:host(:is([slot*=-primary-],[slot*=-secondary-],[slot*=user-info])[class*=button])
	.nav-link-content{align-items:center;border-radius:var(--navbar-button-border-radius);justify-content:center}:host(:not([slot=site-logo])) trb-nav-link-icon:not([part=chevron-down]),:host(:not([slot=site-logo],[slot=site-icon],.icon-only)) ::slotted([slot=icon]){margin-right:var(--navbar-icon-right-margin)}:host([class*=button]) trb-nav-link-icon[part=icon]{margin-right:var(--size-100)}:host(.jumbo) ::slotted([slot=icon]),:host(.jumbo) trb-nav-link-icon{margin-right:var(--size-150)}:host(.icon-only) trb-nav-link-icon[part=icon]{margin:0}:host(:is(#trb-nav-visit-blizzard,#trb-nav-more-from-blizzard):not([class*=button]))
	trb-nav-link-icon,:host(:is([slot*=-primary-],[slot*=-secondary-]):not([class*=button]))
	trb-nav-link-icon{color:var(--navbar-content-color-secondary)}:host(.subtle) .nav-link-content{background-color:var(--navbar-hover-background-color)}:host(.subtle)>:is(:hover,:focus) .nav-link-content,:host(.subtle.focus-within) .nav-link-content{background-color:var(--navbar-hover-background-color-alt)!important}.badge{align-items:center;background:var(--navbar-badge-background-color);border-radius:var(--size-050);color:var(--navbar-badge-text-color);display:inline-flex;font-family:var(--font-default);font-size:var(--font-size-200);font-weight:var(--font-default-weight);height:var(--size-200);margin-left:var(--size-150);padding:0 var(--size-050);text-transform:uppercase}:host(.is-dropdown) .badge{margin-right:var(--size-100)}:host([view*=md].is-dropdown) .badge{margin-left:0}:host(#trb-nav-download-battlenet) trb-nav-link-icon{color:#148eff}:host([view=mobile][hide-on-mobile]){display:none}:host([view=mobile]) .nav-link-content{width:100%}:host([view=mobile].inline),:host([view=mobile].inline) button{display:block}:host([view=mobile].is-dropdown.is-open) trb-nav-link-icon[class=chevron-down]{transform:rotate(180deg)}:host([view=mobile]:is(.is-dropdown):not([class*=button]))
	.nav-link-content{border-radius:var(--size-050)}:host([view=mobile].icon-only:not([class*=button],[slot=footer-social])) .nav-link-content{border-radius:var(--size-075)}:host([view=mobile][slot=site-logo-mobile]) .nav-link-content{display:flex;justify-content:center}:host([view=mobile][slot=site-icon]) trb-nav-link-icon{height:var(--navbar-mobile-logo-size,var(--navbar-mobile-logo-size-height));width:var(--navbar-mobile-logo-size,var(--navbar-mobile-logo-size-width))}:host([view=mobile][slot=site-icon][icon=blizzard]) trb-nav-link-icon{height:var(--size-400);width:var(--size-800)}:host([view=mobile]:not(.icon-only,[slot=mobile-site-logo],[slot=footer-secondary])) .nav-link-content{padding:var(--size-150)}:host([view=mobile][class*=button]:is([slot=navbar-cta],[slot=overflow-primary-bottom])){padding:var(--size-200) var(--size-150) 0 var(--size-150)}:host([view=mobile]:is([slot=navbar-cta])) .nav-link-content{display:flex;font-family:var(--font-default);justify-content:center;padding-bottom:var(--size-150);padding-top:var(--size-150)}:host([view*=md][slot=navbar-cta]){margin-left:var(--size-100)}:host([view*=lg][slot=navbar-cta]){margin-left:var(--size-150)}:host([view*=xl][slot=navbar-cta]){margin-left:var(--size-200)}:host([view=mobile][icon=x]) .nav-link-content{width:auto}:host([view=mobile]:is([icon=blizzard])) .nav-link-content{padding:0 var(--size-200)}:host([view=mobile]) .nav-link-text{overflow:hidden;text-overflow:ellipsis;white-space:var(--navbar-link-white-space)}:host([view=mobile]#trb-nav-download-bnet-desktop){display:none}:host([view*=md]) .nav-link-avatar{margin-right:var(--size-100)}:host(.overflowed[slot*=-primary-][view=mobile]:not([class*=button]))::part(:is(icon,nav-link-extras)){display:none}:host([hide-on-desktop]:not([view=mobile])){display:none}:host([view*=md]:not(.icon-only)) .nav-link-content{padding:var(--navbar-link-padding-md)}:host([view*=md][class*=button]) .nav-link-content{padding:var(--navbar-button-padding-md)}:host([view*=md].jumbo:not([slot=primary-menu],[slot=secondary-menu]))
	.nav-link-content{height:var(--size-1000)}:host trb-nav-link-icon[icon=arrow-up-right]{color:var(--navbar-content-color-tertiary);height:var(--size-150);margin:0 auto;margin-left:var(--size-050);width:var(--size-150)}:host trb-nav-link-icon[icon=arrow-up-right]::part(icon){stroke-width:var(--size-050)}:host([view*=md]:is([slot*=-primary-],[slot*=-secondary-]):not([class*=button],[class*=title]))
	.nav-link-content{font-family:var(--font-accent);font-weight:var(--font-accent-weight);padding-bottom:0;padding-top:0}:host([view*=md]:is([slot*=-primary-],[slot*=-secondary-]):not([class*=button],[class*=title],[class*=footer-top-link],[class*=selector-option-language]))
	.nav-link-content{
	/*
		!import required here in order to supercede the excessive specification caused by
		postCSS plugin transformation "postcssIsPseudoClass()" & "postcssNotSelector()".
		These are polyfils necessary for the battle.net implementation of trb-nav.
		TODO: remove !important when battle.net updates their node version.
	 */padding:var(--navbar-link-padding-lg)!important}:host([class*=selector-option-language]) .nav-link-content{padding:var(--navbar-link-padding-md)!important}:host([class*=selector-option]) .nav-link-text{font-size:inherit}:host([view*=md]:is([slot*=-primary-],[slot*=-secondary-]):is([class=selector-option-language]):not([class*=button],[class*=title]))
.nav-link-content{padding:var(--navbar-link-padding-lg)!important;padding-left:8px!important}:host([view*=md]:is(#account,[slot=secondary-menu],[class=is-dropdown]):not([slot=site-logo]))
	trb-nav-link-icon:not([class=chevron-down],[icon=employee]){color:var(--navbar-content-color-secondary)}:host([view*=md].focus-within:is(#account,[slot=secondary-menu],[class=is-dropdown]):not([slot=site-logo]))
	trb-nav-link-icon:not([class=chevron-down],[icon=employee]){color:var(--navbar-hover-icon-color)}:host(.is-dropdown[view*=md][slot=site-logo]:not(.icon-only):not(.overflowed))
	a>.nav-link-content{justify-content:center;padding:0 var(--navbar-logo-padding)}:host([view*=md][slot=site-icon]) .nav-link-content{display:flex;height:var(--size-700);justify-content:center;padding:0;width:var(--size-700)}:host([view*=md][slot=site-icon]) :hover .nav-link-content{background-color:initial}:host([view*=md][slot=site-logo]) trb-nav-link-icon[part=icon]{height:var(--size-700);width:var(--navbar-logo-size)}:host(.jumbo) ::slotted([slot=icon]),:host(.jumbo) [part=icon],:host([view*=md].icon-rounded.jumbo) ::slotted([slot=icon]){height:var(--size-600);width:var(--size-600)}:host([view*=md].jumbo) ::slotted([slot=icon]),:host([view*=md].jumbo) [part=icon]{height:var(--size-600);width:var(--size-600)}:host(#user-info) ::slotted([slot=icon]){height:var(--size-600);width:var(--size-600)}:host(:not(.icon-only).jumbo) ::slotted([slot=icon]),:host(:not(.icon-only).jumbo) [part=icon]{min-height:var(--size-600);min-width:var(--size-600)}:host(:not(.icon-only)) ::slotted([slot=icon]),:host(:not(.icon-only)) [part=icon]{height:24px;min-width:24px;width:24px}:host([view*=lg]:is(.is-dropdown,[slot=secondary-menu]):not(.icon-only,.overflowed))
	.nav-link-content{padding:var(--navbar-link-padding-lg)}:host([view*=lg][class*=button]) .nav-link-content{padding:var(--navbar-button-padding-lg)}:host([view*=lg]:not(.icon-only,.is-dropdown,[slot=secondary-menu],[class*=button],.title,[slot=site-icon]))
	.nav-link-content{padding:var(--navbar-link-padding-lg)}:host([view*=xl]:is(.is-dropdown,[slot=secondary-menu]):not(.icon-only,.overflowed))
	.nav-link-content{padding:var(--navbar-link-padding-xl)}:host([view*=xl][class*=button]) .nav-link-content{padding:var(--navbar-button-padding-xl)}:host([view*=xl]:not(.icon-only,.is-dropdown,[slot=secondary-menu],[slot=footer-secondary],[class*=button],.title,[slot=site-icon]))
	.nav-link-content{padding:var(--navbar-link-padding-xl)}:host(:is(.disabled,.title)) *{cursor:auto;-webkit-user-select:text;user-select:text}:host([text-secondary])::part(text){color:var(--navbar-battletag-text-color)}:host(.disabled)::part(text-secondary){color:var(--navbar-content-color-tertiary)}:host(.icon-circularize) ::slotted([slot=icon]){border-radius:50%;box-shadow:0 0 0 1px var(--navbar-hover-background-color)}:host(.icon-rounded) ::slotted([slot=icon]){border-radius:var(--size-050);box-shadow:0 0 0 1px var(--navbar-hover-background-color)}:host(#user-info)::part(text){font-family:var(--font-default);font-size:var(--navbar-battletag-text-size);font-weight:var(--font-default-weight)}:host(#user-info)::part(subtext){font-family:var(--font-accent);font-weight:var(--font-accent-weight)}:host([view*=md].title) .nav-link-content{margin:var(--size-200) var(--size-150) var(--size-100);min-height:0;
	/* !important applied to account for post-processor procedure "postcssNotSelector" which unintentially increases specifity of certain CSS rules and makes this rule not apply */padding:0!important}:host([view*=mobile].title.inner) .nav-link-content{margin-top:var(--size-200)}:host([view*=md].title.inner) .nav-link-content{margin-top:var(--size-400)}:host(.title)::part(text){color:var(--navbar-content-color-secondary);font-family:var(--font-default);font-size:var(--font-size-300);font-weight:var(--font-default-weight);text-transform:uppercase}:host([theme=light][slot^=dropdown].jumbo)::part(icon){background-color:var(--color-darken-800);border-radius:var(--navbar-menu-border-radius);outline:var(--size-025) solid var(--color-darken-800)}:host([view=mobile][slot=site-logo]) trb-nav-link-icon.chevron-down{display:none}:host([view=mobile][slot=site-logo-mobile]){left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}:host([view=mobile][slot=site-logo-mobile][icon=blizzard])::part(icon){height:36px;width:72px}:host(#trb-nav-battlenet-logo[slot=site-logo])>*{padding:0!important}:host(#trb-nav-battlenet-logo[slot=site-logo])::part(nav-link-content){padding:0}:host([slot=site-logo]){height:100%}:host([slot=site-logo]) .nav-link-content{padding:unset!important}:host([slot=site-logo]:not([root],[view=mobile]))>*{background-color:var(--navbar-blizzard-logo-background-color)}:host([slot=site-logo]:not([view=mobile]))>*{height:100%;padding-left:var(--size-175);padding-right:var(--size-100);width:unset}:host([slot=site-logo]:not([view=mobile]))>*{border-radius:var(--size-100) 0 0 var(--size-100)}:host([slot=site-logo]:not([root]))>*{padding:0 var(--size-200)}:host([slot=site-logo][root]:not([view=mobile]))>*{padding:0 var(--size-200);padding-right:var(--size-050)}:host([slot=site-logo].is-dropdown)>*{padding-left:var(--size-200);padding-right:var(--size-100)}:host([slot=site-logo][view*=lg]:not([root]))>*{padding:0 var(--size-250)}:host([slot=site-logo][view*=lg][root])>*{padding:0 var(--size-250);padding-right:var(--size-050)}:host([slot=site-logo][view*=lg].is-dropdown)>*{padding-left:var(--size-250);padding-right:var(--size-100)}:host([slot=site-logo][view*=xl]:not([root]))>*{padding:0 var(--size-400)}:host([slot=site-logo][view*=xl][root])>*{padding-left:var(--size-400);padding-right:var(--size-200)}:host([slot=site-logo][view*=xl].is-dropdown)>*{padding-left:var(--size-400);padding-right:var(--size-250)}:host([view=mobile][slot=mobile-site-logo]) trb-nav-link-icon{height:auto;margin:var(--size-250) 0 var(--size-100);width:100%}:host([slot=site-logo]) button[part=nav-link-button]{display:inline}:host([slot=footer-secondary]){border-radius:var(--size-050);font-family:var(--font-accent);font-weight:var(--font-accent-weight);padding:0}:host([slot=footer-primary]) .nav-link-content{font-family:var(--font-default);font-weight:var(--font-default-weight);padding:var(--navbar-link-padding-xl)}:host([slot=footer-secondary]) .nav-link-text{color:var(--color-content-700);font-size:var(--footer-content-size)}:host([slot=footer-secondary]) .nav-link-content{border-radius:var(--size-050);min-height:var(--size-300);padding:var(--size-100) var(--size-150)}:host(:is([slot=footer-secondary]):not(.icon-only,[slot=mobile-site-logo])) .nav-link-content{padding:var(--size-100) var(--size-150)}:host(.locale-toggle){display:flex;justify-content:center}:host(.locale-toggle) .nav-link-content{font-size:var(--footer-region-font-size)}:host(.locale-toggle) button[part=nav-link-button]{width:auto}:host(.selector-option) .nav-link-content{color:#fff;font-size:var(--footer-language-font-size);height:var(--size-500)}:host(.selector-option:not(.icon-only)) trb-nav-link-icon[icon=arrow-up-right]{color:#fff}:host(.region-selector-option) .nav-link-content{background-color:var(--color-content-100);min-height:var(--footer-region-font-size)}:host(:is(.selector-option-language,.locale-toggle)) .nav-link-text{font-size:inherit}:host(.region-selector-option.selected) .nav-link-content{background-color:var(--color-content-300)}:host(.region-selector-option)>:is(:hover,:focus){background-color:var(--color-content-300);border-radius:var(--size-050)}:host([slot=footer-social]) .nav-link-content{background-color:var(--color-content-100);border-radius:50%;height:var(--size-500);margin:0 6px;min-height:var(--size-500);width:var(--size-500)}:host([slot=footer-social])>:is(:hover,:focus) .nav-link-content{background-color:var(--color-content-300)}:host(.footer-mobile-close) .nav-link-content{min-height:var(--size-500)}:host([view*=md]:is(.footer-top-link,.selector-option,.locale-toggle):not([class*=button],[class*=title]))
	.nav-link-content{border-radius:var(--size-100);font-family:var(--font-default);font-weight:var(--font-default-weight);padding:var(--navbar-link-padding-xl)!important}:host(:is(.selector-option-language)) .nav-link-content{font-family:var(--font-accent);font-weight:var(--font-accent-weight)}:host([view*=md]:is(.selector-option-language):not([class*=button],[class*=title]))
.nav-link-content{font-family:var(--font-accent);font-weight:var(--font-accent-weight);padding-left:8px!important}:host([view*=md]:is(.footer-bottom-link):not([class*=button],[class*=title]))
	.nav-link-content{font-family:var(--font-accent);font-weight:var(--font-accent-weight);min-height:var(--size-400);padding:var(--navbar-link-padding-md)!important}:host(.footer-bottom-link)>:is(:hover,:focus) .nav-link-text{color:#fff}`;
        const fa = e => {
                const t = e?.currentTarget?.getRootNode()?.host;
                if (window.dataLayer && "disabled" !== t.analyticsStatus) {
                    const n = {
                        event: e?.currentTarget.getAttribute("analytics-event") || e?.currentTarget.dataset.event || t.dataset.event || t.analyticsEvent || "click_cta",
                        cta_name: e?.currentTarget.getAttribute("analytics-label") || e?.currentTarget.dataset.eventLabel || e?.currentTarget.dataset.analytics || t.dataset.eventLabel || t.dataset.analytics || t.analyticsLabel
                    };
                    let o = e?.currentTarget.getAttribute("analytics-placement") || e?.currentTarget.dataset.ctaPlacement || e?.currentTarget.dataset.analyticsPlacement || t.dataset.ctaPlacement || t.dataset.analyticsPlacement || t.analyticsPlacement;
                    o || ["click_header_nav", "click_footer_nav"].includes(n.event.trim()) || (o = "navbar"), o && (n.cta_placement = o), ["click", "cta", "video", "social"].includes(n.event.trim().split("_")[0]) && (n.event.indexOf("_") ? (n.cta_category = n.event.split("_")[0], n.cta_action = n.event.split("_").slice(1).join("_")) : n.cta_category = n.cta_action = n.event);
                    const i = e?.currentTarget.getAttribute("href") || t.href;
                    i && ["click_register", "click_buy"].includes(n.event.trim()) && (n.destination_url = i), window.dataLayer.push(n)
                }
            },
            ga = {
                analyticsStatus: {
                    attribute: "analytics-status",
                    type: String,
                    reflect: !0
                },
                analyticsEvent: {
                    attribute: "analytics-event",
                    type: String
                },
                analyticsLabel: {
                    attribute: "analytics-label",
                    type: String
                },
                analyticsPlacement: {
                    attribute: "analytics-placement",
                    type: String
                }
            };
        window.trb = window.trb || {};
        const ma = (document.documentElement.lang || navigator.language || "en-us").toLocaleLowerCase(),
            wa = window.matchMedia("(prefers-reduced-motion: reduce)"),
            _a = ({
                slot: e,
                html: t
            }) => ["primary-menu", "secondary-menu", "navbar-cta", "site-logo", "site-icon", "skip-link", "account-primary-top", "account-primary-bottom", "account-secondary-top", "account-secondary-bottom", "search", "mobile-site-logo"].includes(e) || !!t;
        let ya = n(null, (function(e, t) {
            class n extends t {
                constructor() {
                    super(), e(this);
                    const [t, n] = he();
                    this.locale = this.locale ? this.locale : ma, this._view = t, this._isMobile = n, this._fonts = aa.cssText, this._chevronIcon = "chevron-down", this._menuIcon = "menu", this.transitionOverflowFrom = "left", this.role = void 0 === this.role || null === this.role ? "navigation" : this.role, window && (window.trb || (window.trb = {}), window.trb.debug || (window.trb.debug = {}), window.trb.debug.version || (window.trb.debug.version = {}), window.trb.debug.version["@blizzard/base-nav-ui"] = "1.2.16")
                }
            }
            return {
                F: n,
                d: [{
                    kind: "field",
                    decorators: [Cr("search", !0)],
                    key: "_SearchMenu",
                    value: void 0
                }, {
                    kind: "field",
                    decorators: [Cr("primary-menu", !0)],
                    key: "_PrimaryItems",
                    value: void 0
                }, {
                    kind: "field",
                    decorators: [Cr("site-logo", !0)],
                    key: "_SiteLogo",
                    value: void 0
                }, {
                    kind: "field",
                    decorators: [Cr("site-icon", !0)],
                    key: "_SiteIcon",
                    value: void 0
                }, {
                    kind: "field",
                    decorators: [xr(".primary-menu")],
                    key: "_PrimaryMenu",
                    value: void 0
                }, {
                    kind: "field",
                    decorators: [xr(".secondary-menu")],
                    key: "_SecondaryMenu",
                    value: void 0
                }, {
                    kind: "field",
                    decorators: [xr("[part=bar]")],
                    key: "_Bar",
                    value: void 0
                }, {
                    kind: "field",
                    decorators: [xr("#overflow-outer")],
                    key: "_OverflowSpaceOuter",
                    value: void 0
                }, {
                    kind: "field",
                    decorators: [xr("#overflow-inner")],
                    key: "_OverflowSpaceInner",
                    value: void 0
                }, {
                    kind: "field",
                    decorators: [xr("trb-nav-drawer#overflow")],
                    key: "_Overflow",
                    value: void 0
                }, {
                    kind: "field",
                    decorators: [xr("trb-nav-drawer#account")],
                    key: "_Account",
                    value: void 0
                }, {
                    kind: "get",
                    static: !0,
                    key: "styles",
                    value: function() {
                        return [ua, ca]
                    }
                }, {
                    kind: "get",
                    static: !0,
                    key: "properties",
                    value: function() {
                        return {
                            content: {
                                type: String,
                                reflect: !0
                            },
                            locale: (e = {
                                type: String,
                                defaultValue: ma
                            }, {
                                converter: (t, n) => t ?? e.defaultValue,
                                ...e
                            }),
                            interpolate: {
                                type: Object
                            },
                            user: {
                                type: Object
                            },
                            userCountry: {
                                attribute: "user-country",
                                type: String
                            },
                            userSubdivision: {
                                attribute: "user-subdivision",
                                type: String
                            },
                            userEndpoint: {
                                type: String,
                                attribute: "user-endpoint",
                                reflect: !0
                            },
                            searchUrl: {
                                type: String,
                                attribute: "search-url",
                                reflect: !0
                            },
                            domainUrl: {
                                type: String,
                                attribute: "domain-url",
                                reflect: !0
                            },
                            linkPrefix: {
                                type: String,
                                attribute: "link-prefix",
                                reflect: !0
                            },
                            theme: {
                                type: String,
                                reflect: !0
                            },
                            authenticated: {
                                attribute: "authenticated",
                                type: Boolean,
                                reflect: !0
                            },
                            transitionOverflowFrom: {
                                attribute: "transition-overflow-from",
                                type: String
                            },
                            root: {
                                type: Boolean,
                                reflect: !0
                            },
                            _view: {
                                attribute: "view",
                                type: String,
                                reflect: !0
                            },
                            _isMobile: {
                                attribute: "ismobile",
                                type: Boolean
                            },
                            role: {
                                type: String,
                                reflect: !0
                            }
                        };
                        var e
                    }
                }, {
                    kind: "method",
                    key: "connectedCallback",
                    value: function() {
                        h(n, "connectedCallback", this, 3)([]), this._attachFonts(), this._setDropdownListeners(), this._smoothScrolling(), wa.addEventListener("change", (() => {
                            this._smoothScrolling()
                        })), this.initializeLoc(ha, cn)
                    }
                }, {
                    kind: "method",
                    key: "disconnectedCallback",
                    value: function() {
                        h(n, "disconnectedCallback", this, 3)([]), this._removeDropdownListeners()
                    }
                }, {
                    kind: "method",
                    key: "_attachFonts",
                    value: function() {
                        const e = document.createElement("style");
                        e.textContent = this._fonts, document.head.appendChild(e)
                    }
                }, {
                    kind: "field",
                    key: "_getPrivateDropdowns",
                    value() {
                        return () => [this._Overflow, this._Account].filter(Boolean)
                    }
                }, {
                    kind: "field",
                    key: "_tabTrappedElements",
                    value() {
                        return () => this._getPrivateDropdowns().map((e => ({
                            first: e._getFirstSlottedItem(),
                            last: e._getLastSlottedItem()
                        })))
                    }
                }, {
                    kind: "field",
                    key: "_openOverflowMenu",
                    value() {
                        return () => {
                            this._Account?.close?.(), this._Overflow?.open?.()
                        }
                    }
                }, {
                    kind: "field",
                    key: "_openAccountMenu",
                    value() {
                        return () => {
                            this._Overflow?.close?.(), this._Account?.open?.()
                        }
                    }
                }, {
                    kind: "field",
                    key: "closeActiveMenu",
                    value() {
                        return () => {
                            requestAnimationFrame((() => {
                                this._getActivePrivateDropdown()?.close?.()
                            }))
                        }
                    }
                }, {
                    kind: "field",
                    key: "_setDropdownListeners",
                    value() {
                        return () => {
                            document.addEventListener("trb-nav:openOverflowMenu", this._openOverflowMenu), document.addEventListener("trb-nav:openAccountMenu", this._openAccountMenu), document.addEventListener("trb-nav:closeActiveMenu", this.closeActiveMenu)
                        }
                    }
                }, {
                    kind: "field",
                    key: "_removeDropdownListeners",
                    value() {
                        return () => {
                            document.removeEventListener("trb-nav:openOverflowMenu", this._openOverflowMenu), document.removeEventListener("trb-nav:openAccountMenu", this._openAccountMenu), document.removeEventListener("trb-nav:closeActiveMenu", this.closeActiveMenu)
                        }
                    }
                }, {
                    kind: "method",
                    key: "fetchUserEndpoint",
                    value: async function() {
                        try {
                            const e = await fetch(this.userEndpoint),
                                t = await e.json();
                            t?.battletag && (this.user = t)
                        } catch (e) {}
                    }
                }, {
                    kind: "field",
                    key: "_dispatchAuth",
                    value() {
                        return ({
                            user: e,
                            authenticated: t = !1
                        } = this) => this.dispatchEvent(new CustomEvent("trb-nav:authenticated", {
                            bubbles: !0,
                            cancelable: !0,
                            composed: !0,
                            detail: {
                                authenticated: t,
                                ...t ? {
                                    user: e
                                } : {}
                            }
                        }))
                    }
                }, {
                    kind: "method",
                    key: "_checkAuthentication",
                    value: function() {
                        this.authenticated = Boolean(this.user && this.user.battletag)
                    }
                }, {
                    kind: "field",
                    key: "_startTransition",
                    value() {
                        return () => {
                            this.classList.contains("transition") || this.classList.add("transition")
                        }
                    }
                }, {
                    kind: "field",
                    key: "_endTransition",
                    value() {
                        return () => {
                            requestAnimationFrame((() => {
                                this.classList.contains("transition") && this.classList.remove("transition")
                            }))
                        }
                    }
                }, {
                    kind: "field",
                    key: "_debounceEndTransition",
                    value() {
                        return ia(this._endTransition, 100)
                    }
                }, {
                    kind: "method",
                    key: "firstUpdated",
                    value: async function() {
                        this._startTransition(), this._initResizeObserver(), !this.user && this.userEndpoint && await this.fetchUserEndpoint(), await this.updateComplete, this.hasAttribute(ae) || this.setAttribute(ae, de()), this.hidden = !1, this._debounceEndTransition()
                    }
                }, {
                    kind: "field",
                    key: "_removeCmsItem",
                    value() {
                        return e => this._isCms(e) && e.remove()
                    }
                }, {
                    kind: "field",
                    key: "_getAllSlottedChildren",
                    value() {
                        return () => [...this.querySelectorAll("[slot]")]
                    }
                }, {
                    kind: "field",
                    key: "_MobileOverflowItems",
                    value: () => () => ["navbar-cta", "site-logo", "search"].map((e => `[slot=${e}], [data-previous-slot=${e}]`)).toString()
                }, {
                    kind: "field",
                    key: "_overflowMobileItems",
                    value() {
                        return () => {
                            [...this.querySelectorAll(`${this._MobileOverflowItems()}`)].filter(Boolean).forEach(this._isMobile ? this._overflow : this._returnToNavbar)
                        }
                    }
                }, {
                    kind: "field",
                    key: "_mobileTransition",
                    value() {
                        return async () => {
                            this._startTransition(), this.dispatchEvent(new CustomEvent("trb-nav-dropdown:close", {
                                bubbles: !0,
                                cancelable: !0,
                                composed: !0
                            })), this._overflowMobileItems(), this._debounceEndTransition()
                        }
                    }
                }, {
                    kind: "field",
                    key: "_fetchContent",
                    value() {
                        return async (e = {}) => {
                            this.content && (this._startTransition(), this._getAllSlottedChildren().forEach(this._removeCmsItem), this._appendLinks.forEach((e => this.append(e))), await this._fetchData(), this._appendCmsItems(), this._appendOverflowSubheadingShim(), await this.requestUpdate(), this._dispatchCmsLoaded(), this._overflowMobileItems(), this._debounceEndTransition())
                        }
                    }
                }, {
                    kind: "method",
                    key: "_appendCmsItems",
                    value: function() {
                        const e = this._interpolateData(this._data).filter(_a).map(this._renderNavItems),
                            t = document.createElement("div");
                        wr(e, t), [...t.children].forEach((e => this.append(e)))
                    }
                }, {
                    kind: "method",
                    key: "_appendOverflowSubheadingShim",
                    value: function() {
                        const e = this._data?.filter((({
                                slot: e,
                                submenuHeading: t
                            }) => t && "overflow" === e)).map((({
                                submenuHeading: e
                            }) => this._createNavLink({
                                classes: "title",
                                text: e,
                                slot: "overflow-secondary-top",
                                hideOnDesktop: !0
                            }))),
                            t = document.createElement("div");
                        wr(e, t), [...t.children].forEach((e => {
                            this.prepend(e)
                        }))
                    }
                }, {
                    kind: "method",
                    key: "updated",
                    value: async function(e) {
                        e && (e.has("domainUrl") && (this.linkPrefix = this.domainUrl), e.has("locale") && (this.lang = ((e = "") => e.length >= 2 ? e.slice(0, -2) + e.slice(-2).toUpperCase() : e.toUpperCase())(this.locale)), (e.has("content") || e.has("userCountry") || e.has("userSubdivision") || e.has("locale")) && await this._fetchContent({
                            changedProps: e
                        }), e.has("user") && this._checkAuthentication(), e.has("authenticated") && this._dispatchAuth(), e.has("theme") && this._updateTheme(), e.has("_isMobile") && this._mobileTransition())
                    }
                }, {
                    kind: "field",
                    key: "_setRoot",
                    value() {
                        return async ([e] = this._SiteLogo) => {
                            if (!e) return;
                            await e.updateComplete;
                            const t = "trb-NAV-DROPDOWN" === e.nodeName ? e._NavLink : e;
                            this.root ? t.setAttribute("root", "") : t.removeAttribute("root")
                        }
                    }
                }, {
                    kind: "field",
                    key: "_resized",
                    value() {
                        return e => {
                            this.ready || (this.ready = !0), this.dispatchEvent(new CustomEvent("trb-nav:resized", {
                                bubbles: !0,
                                cancelable: !0,
                                composed: !0,
                                detail: {
                                    resizeEvent: e
                                }
                            }))
                        }
                    }
                }, {
                    kind: "field",
                    key: "_dispatchCmsLoaded",
                    value() {
                        return () => {
                            const e = [...this.shadowRoot.querySelectorAll("*[data-cms]"), ...this.querySelectorAll("*[data-cms]")];
                            this._appendLinksToDropdowns(), this.dispatchEvent(new CustomEvent("trb-nav:cms-loaded", {
                                bubbles: !0,
                                cancelable: !0,
                                composed: !0,
                                detail: {
                                    cmsContent: e
                                }
                            }))
                        }
                    }
                }, {
                    kind: "field",
                    key: "_appendLinks",
                    value: () => []
                }, {
                    kind: "field",
                    key: "_appendLinksToDropdowns",
                    value() {
                        return (e = [...this.children] || []) => {
                            const t = e.filter((({
                                    nodeName: e
                                }) => "trb-NAV-LINK" === e)),
                                n = e.filter((({
                                    nodeName: e
                                }) => "trb-NAV-DROPDOWN" === e));
                            t.forEach((e => {
                                const t = n.find((({
                                    _DropdownSlots: t,
                                    dataset: n
                                }) => [...t].some((({
                                    name: t
                                }) => t === e.slot && "cms" in n))));
                                t && (this._appendLinks.push(e), t.append(e))
                            })), this._updateTheme()
                        }
                    }
                }, {
                    kind: "field",
                    key: "_updateTheme",
                    value() {
                        return async () => {
                            await this.updateComplete, this._getAllSlottedChildren().flatMap(ve).forEach((e => {
                                e.theme = this.theme
                            }))
                        }
                    }
                }, {
                    kind: "field",
                    key: "_patchAccount",
                    value: () => e => ({
                        ...e,
                        slot: "trb-nav-account" === e.elementID ? "account" : e.slot
                    })
                }, {
                    kind: "field",
                    key: "_patchBlizzardLogo",
                    value: () => e => ({
                        ...e,
                        slot: "trb-nav-blizzard-logo" === e.elementID ? "site-logo" : e.slot
                    })
                }, {
                    kind: "method",
                    key: "_fetchData",
                    value: async function() {
                        const {
                            locale: e,
                            content: t,
                            userCountry: n,
                            userSubdivision: o
                        } = this, i = `https://navbar.blizzard.com/base-api/v1/${e}/nav?` + (r = {
                            entry: t,
                            userCountry: n,
                            userSubdivision: o
                        }, new URLSearchParams(Object.fromEntries(Object.entries(r).filter((([e, t]) => "" !== t && null != t)))));
                        var r;
                        try {
                            const e = await fetch(i),
                                t = await e.clone().text();
                            this.navbarData !== t && (this._data = (await e.json())?.map(this._patchAccount).map(this._patchBlizzardLogo), this.navbarData = t)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                }, {
                    kind: "method",
                    key: "_interpolateData",
                    value: function(e) {
                        if (!e) return [];
                        let t = JSON.stringify(e);
                        if (this.interpolate) {
                            const e = [...t.matchAll(/{{([\w\-.]+)(,[^}{]+)?}}/g) || []];
                            e.length && e.forEach((e => {
                                const n = e[1];
                                Object.keys(this.interpolate).includes(n) && (t = t.replaceAll(e[0], this.interpolate[n]))
                            }))
                        }
                        const n = [...t.matchAll(/{{([\w\-.]+)(,[^}{]+)?}}/g) || []];
                        return n.length && n.forEach((e => {
                            t = e[2] ? t.replaceAll(e[0], e[2].substring(1)) : t.replaceAll(e[0], "")
                        })), JSON.parse(t)
                    }
                }, {
                    kind: "method",
                    key: "_initResizeObserver",
                    value: function() {
                        const e = new ResizeObserver(ra(this._handleResize, 100));
                        e.observe(this._Bar), e.observe(this._PrimaryMenu), e.observe(this._SecondaryMenu)
                    }
                }, {
                    kind: "field",
                    key: "_createCustomDropdownSlots",
                    value: () => ({
                        elementID: e
                    }) => {
                        const t = e.replace(/^trb-nav-/, "");
                        return e ? ["primary-top", "primary-bottom", "secondary-top", "secondary-bottom"].map((e => tr`<slot name="${t}-${e}" slot="${t}-${e}"></slot>`)) : ""
                    }
                }, {
                    kind: "field",
                    key: "_isCms",
                    value: () => e => Object.entries(e.dataset).some((([e]) => "cms" === e))
                }, {
                    kind: "field",
                    key: "_getAvailableSpace",
                    value() {
                        return () => this._OverflowSpaceOuter.clientWidth - this._OverflowSpaceInner.clientWidth
                    }
                }, {
                    kind: "field",
                    key: "_createNavDropdown",
                    value() {
                        return e => tr`<trb-nav-dropdown data-cms id="${e.elementID}" class="${sa(e.classes)}" slot="${e.slot}" trb-device="${sa(e.trbDevice||void 0)}" chevron-icon="${this._chevronIcon}" avatar="${sa(e.avatar||void 0)}" text="${sa(e.text||void 0)}" icon="${sa(e.icon||void 0)}" icon-src="${sa(e.iconSrc||void 0)}" badge="${sa(e.badge||void 0)}" href="${sa(e.href||void 0)}" submenu-title="${sa(e.submenuHeading)}" hide-on-desktop="${sa(e.hideOnDesktop||void 0)}" hide-on-mobile="${sa(e.hideOnMobile||void 0)}" requires-authentication="${sa(e.requiresAuthentication||void 0)}">${this._createCustomDropdownSlots(e)} ${e.links.map(this._createNavLink)}</trb-nav-dropdown>`
                    }
                }, {
                    kind: "field",
                    key: "_createNavLink",
                    value() {
                        return e => e ? e.links ? e.links.map(this._createNavLink) : tr`<trb-nav-link data-cms id="${e.elementID}" class="${sa(((e="")=>{const t=e.trim().split(" ").filter(Boolean);return t.length?ee(t.reduce(fe,{})):void 0})(e.classes))}" slot="${sa(e.slot)}" trb-modal-trigger="${sa(e.trbModalTrigger||void 0)}" text="${sa(e.text)}" trb-device="${sa(e.trbDevice||void 0)}" chevron-icon="${this._chevronIcon}" external-icon="${sa(this.externalIcon||void 0)}" text-secondary="${sa(e.textSecondary)}" subtext="${sa(e.subtext)}" badge="${sa(e.badge)}" href="${sa(this.linkPrefix&&["/","#"].includes(e.href?.charAt(0))?`${this.linkPrefix.replace(/\/$/,"")}${e.href}`:e.href)}" icon="${sa(e.icon||void 0)}" icon-src="${sa(e.iconSrc||void 0)}" icon-size="${sa(e.iconSize)}" mobile-game="${sa(e.isMobileGame||void 0)}" is-external="${sa(e.isExternal||void 0)}" hide-on-desktop="${sa(e.hideOnDesktop||void 0)}" hide-on-mobile="${sa(e.hideOnMobile||void 0)}" requires-authentication="${sa(e.requiresAuthentication||void 0)}" analytics-event="${sa(e.event)}" analytics-label="${sa(e.eventLabel)}" analytics-placement="${sa(e.ctaPlacement)}" @click="${e.click}">${e.children}</trb-nav-link>` : ""
                    }
                }, {
                    kind: "field",
                    key: "_createNavCustomHtml",
                    value: () => e => {
                        if (!e?.html) return "";
                        try {
                            const t = (new DOMParser).parseFromString(e.html, "text/html");
                            for (let e = 0; e < t.body.childElementCount; e++) {
                                const n = t.body.children[e];
                                n.getAttribute("data-cms") || n.toggleAttribute("data-cms", !0)
                            }
                            return tr`${da(t.body.innerHTML)}`
                        } catch (e) {
                            return console.error(e), ""
                        }
                    }
                }, {
                    kind: "method",
                    key: "_handleMobileChange",
                    value: function() {
                        const [e, t] = he();
                        this._view = e, this._isMobile = t
                    }
                }, {
                    kind: "field",
                    key: "_handleResize",
                    value() {
                        return e => {
                            this._handleMobileChange(), this._checkOverflowForPrimaryItems(), this._resized(e)
                        }
                    }
                }, {
                    kind: "field",
                    key: "_overflow",
                    value() {
                        return e => {
                            e && !e.classList.contains("overflowed") && (e.classList.add("overflowed"), e.dataset.offset = e.offsetWidth, e.dataset.previousSlot = e.slot, e.slot = e.dataset.overflowTo || "overflow-primary-top", this._debounceEndTransition(), this._checkOverflowForPrimaryItems("overflow"))
                        }
                    }
                }, {
                    kind: "field",
                    key: "_returnToNavbar",
                    value() {
                        return e => {
                            e && e.classList.contains("overflowed") && (e.classList.remove("overflowed"), e.slot = e.dataset.previousSlot, delete e.dataset.offset, delete e.dataset.previousSlot, this._debounceEndTransition(), this._checkOverflowForPrimaryItems("return"))
                        }
                    }
                }, {
                    kind: "field",
                    key: "_OverflowedPrimaryItems",
                    value() {
                        return () => [...this.querySelectorAll(".overflowed[data-previous-slot=primary-menu]")]
                    }
                }, {
                    kind: "field",
                    key: "_checkOverflowForPrimaryItems",
                    value() {
                        return e => {
                            const t = this._getAvailableSpace();
                            if (t > 0) {
                                const n = this._OverflowedPrimaryItems()[0];
                                t > n?.dataset.offset && (!e || "return" === e) && this._returnToNavbar(n)
                            } else if (!e || "overflow" === e) {
                                const e = this._PrimaryItems[this._PrimaryItems.length - 1];
                                this._overflow(e)
                            }
                        }
                    }
                }, {
                    kind: "field",
                    key: "_getUserEmail",
                    value() {
                        return (e = this.user?.email || "") => {
                            if (!we.test(e) || !this._isChina()) return e;
                            const [t, n] = e.split("@");
                            return `${t.slice(0,1)}${"*".repeat(t.length-1)}@${n}`
                        }
                    }
                }, {
                    kind: "method",
                    key: "_createAccountDropdown",
                    value: function({
                        item: e
                    }) {
                        if (!e) return "";
                        const t = "account",
                            [n, o] = this.user?.battletag?.split("#") || [],
                            i = this.user?.avatar && tr`<img slot="icon" src="${this.user?.avatar}" alt="">`,
                            r = n && {
                                elementID: "user-info",
                                text: n,
                                textSecondary: o ? "" + ("#" + o) : "",
                                subtext: this._getUserEmail(),
                                classes: "disabled jumbo icon-circularize",
                                children: i
                            },
                            a = ({
                                slot: e
                            }) => this.authenticated ? this._createNavLink({
                                ...r,
                                slot: e
                            }) : tr``;
                        return this._isMobile ? this._OverflowDrawer({
                            links: e.links,
                            id: t,
                            side: "right",
                            transitionFrom: "right",
                            children: tr`${(()=>this._createNavLink({slot:"toggle-button",classes:"icon-only",text:"More",icon:!i&&"user",children:i,click:()=>{this._Overflow?.close?.()}}))()}${a({slot:"primary-list"})}`
                        }) : tr`<trb-nav-dropdown data-cms id="${t}" class="${e.classes}" slot="${e.slot}" chevron-icon="${this._chevronIcon}" text="${sa(this.authenticated&&`${n}`||e.text||void 0)}" icon="${sa(this.user?.flags?.employee?"employee":i?void 0:e.icon)}" href="${sa(e.href||void 0)}" submenu-title="${sa(e.submenuHeading)}" hide-on-desktop="${sa(e.hideOnDesktop||void 0)}" hide-on-mobile="${sa(e.hideOnMobile||void 0)}">${a({slot:"user-info"})} ${this._createCustomDropdownSlots({elementID:t})} ${e.links.map(this._createNavLink)} ${i}</trb-nav-dropdown>`
                    }
                }, {
                    kind: "method",
                    key: "_toDrawerSlot",
                    value: function(e) {
                        return e.includes("primary") ? "primary-list" : e.includes("secondary") ? "secondary-list" : e
                    }
                }, {
                    kind: "field",
                    key: "_OverflowDrawer",
                    value() {
                        return ({
                            links: e,
                            id: t,
                            side: n,
                            transitionFrom: o,
                            children: i
                        }) => tr`<trb-nav-drawer id="${t}" side="${sa(n)}" transition-from="${o}" hide-when-empty>${i}<slot name="${t}-primary-top" slot="primary-list"></slot><slot name="${t}-secondary-top" slot="secondary-list"></slot><slot slot="header-item" name="site-logo-mobile-${t}"></slot>${e.map((e=>({...e,slot:this._toDrawerSlot(e.slot)}))).map((e=>this._isMobile&&e.hideOnMobile||!this._isMobile&&e.hideOnDesktop?"":this._createNavLink(e)))}<slot name="${t}-primary-bottom" slot="primary-list"></slot><slot name="${t}-secondary-bottom" slot="secondary-list"></slot></trb-nav-drawer>`
                    }
                }, {
                    kind: "method",
                    key: "_createOverflowDropdown",
                    value: function({
                        item: e
                    }) {
                        const t = "overflow",
                            {
                                overflowSubMenuTitle: n
                            } = this,
                            {
                                links: o = [],
                                submenuHeading: i,
                                hideOnDesktop: r,
                                text: a
                            } = e || {};
                        return this._isMobile ? this._OverflowDrawer({
                            links: o,
                            id: t,
                            transitionFrom: this.transitionOverflowFrom,
                            children: tr`${this._createNavLink({slot:"toggle-button",classes:"icon-only",icon:"menu",role:"menuitem",text:"More",click:()=>{this._Account?.close?.()}})}<slot name="mobile-site-logo" slot="primary-list"></slot>`
                        }) : tr`<trb-nav-dropdown id="${t}" class="${ee({hide:!0,"icon-only":!0,subtle:!0})}" icon="${"more-horizontal"}" submenu-title="${sa(n||i||void 0)}" hide-on-desktop="${sa(r||void 0)}" text="${sa(a||void 0)}">${this._createCustomDropdownSlots({elementID:t})} ${o.map(this._createNavLink)}</trb-nav-dropdown>`
                    }
                }, {
                    kind: "field",
                    key: "_getActivePrivateDropdown",
                    value() {
                        return () => this._getPrivateDropdowns().find((e => e.hasAttribute("is-open")))
                    }
                }, {
                    kind: "field",
                    key: "_renderNavItems",
                    value() {
                        return e => {
                            switch (e.type) {
                                case "nav_dropdown":
                                    return this._createNavDropdown(e);
                                case "nav_link":
                                    return this._createNavLink(e);
                                case "nav_custom_html":
                                    return this._createNavCustomHtml(e);
                                default:
                                    return ""
                            }
                        }
                    }
                }, {
                    kind: "method",
                    key: "_smoothScrolling",
                    value: function() {
                        const [e] = document.getElementsByTagName("html");
                        wa.matches ? e.style.removeProperty("scroll-behavior") : e.style.scrollBehavior = "smooth"
                    }
                }, {
                    kind: "field",
                    key: "_onSkipLinkChange",
                    value: () => ({
                        target: e
                    }) => {
                        e.assignedNodes().forEach((e => {
                            e.classList.contains("button-primary") || e.classList.add("button-primary")
                        }))
                    }
                }, {
                    kind: "field",
                    key: "_onSearchSlotChange",
                    value() {
                        return async e => {
                            this._setOverflowTo(e);
                            const [t] = this._SearchMenu;
                            if (t && "trb-NAV-DROPDOWN" === t.nodeName) {
                                const {
                                    icon: e,
                                    hideOnMobile: n,
                                    hideOnDesktop: o,
                                    text: i
                                } = this._data?.find((({
                                    slot: e
                                }) => "search" === e)) || {}, r = t.querySelector("input") || Object.assign(document.createElement("input"), {
                                    type: "text",
                                    slot: "dropdown-primary-menu",
                                    placeholder: t.text || ""
                                });
                                if (t.setAttribute("id", "trb-nav-search"), t.setAttribute("icon", e || "search"), t.classList.add("icon-only"), t.setAttribute("text", this.getString("search")), t.addEventListener("click", (e => {
                                        e.stopPropagation()
                                    }), !0), i && r.setAttribute("placeholder", i), o && t.setAttribute("hide-on-desktop", ""), n && t.setAttribute("hide-on-mobile", ""), t.querySelector("input") || t.append(r), t.querySelector("trb-nav-link-icon") || t.append(Object.assign(document.createElement("trb-nav-link-icon"), {
                                        id: "trb-nav-search-icon",
                                        slot: "dropdown-primary-menu",
                                        icon: "search",
                                        role: "presentation"
                                    })), !t.hasAttribute("listening")) {
                                    await this.updateComplete, t.setAttribute("listening", "");
                                    const e = t.shadowRoot.querySelector("trb-nav-link#trb-nav-search"),
                                        n = () => {
                                            t.classList.contains("show-dropdown") ? t.classList.remove("show-dropdown", "show-opacity") : (t.classList.add("show-dropdown"), t._positionDropdown(), t.classList.add("show-opacity"), r.focus())
                                        },
                                        o = ({
                                            keyCode: e
                                        }) => {
                                            13 === e && n()
                                        },
                                        i = ({
                                            target: {
                                                value: e = ""
                                            },
                                            keyCode: n = NaN,
                                            key: o = ""
                                        }) => {
                                            !!this.dispatchEvent(new CustomEvent("trb-nav:search", {
                                                bubbles: !0,
                                                composed: !0,
                                                cancelable: !0,
                                                detail: {
                                                    value: e,
                                                    keyCode: n,
                                                    key: o,
                                                    Dropdown: t,
                                                    appendResult: async (e = {}) => {
                                                        e?.setAttribute && (e.setAttribute("slot", "dropdown-secondary-menu"), t.append(e))
                                                    },
                                                    emptyResults: async () => {
                                                        t._SecondaryItems.forEach((e => {
                                                            e.remove()
                                                        }))
                                                    }
                                                }
                                            })) && 13 === n && e && (window.location = this.searchUrl?.replace("{value}", e) || `/?q=${e}`)
                                        },
                                        a = ({
                                            target: e
                                        }) => {
                                            t.classList.contains("show-opacity") && !t.contains(e) && n()
                                        },
                                        s = ({
                                            keyCode: o
                                        }) => {
                                            27 === o && t.classList.contains("show-opacity") && (n(), e.shadowRoot.querySelector("button").focus())
                                        };
                                    e.addEventListener("mouseup", n), e.addEventListener("keydown", o), r.addEventListener("keyup", i), document.addEventListener("mousedown", a), document.addEventListener("keydown", s)
                                }
                            }
                            t !== this.children[0] && this.children[0]?.before(t)
                        }
                    }
                }, {
                    kind: "field",
                    key: "_logoClones",
                    value: () => []
                }, {
                    kind: "field",
                    key: "_cloneLogos",
                    value() {
                        return async e => {
                            await e.updateComplete, this._logoClones.forEach((e => e.remove()));
                            const t = "trb-NAV-DROPDOWN" === e.nodeName ? e.shadowRoot.querySelector(":host > trb-nav-link") : e;
                            this._logoClones = ["site-logo-mobile-overflow", "site-logo-mobile-account", ...this._SiteIcon?.length > 0 ? [] : ["site-icon"]].map((n => {
                                const o = t.cloneNode(!0);
                                return o.slot = n, o.dataset.overflowTo = n, o.classList.add("icon-only"), o.classList.remove("is-dropdown"), o.setAttribute("clone", ""), e.href && o.setAttribute("href", e.href), o
                            })), this._logoClones.forEach((e => {
                                this.append(e)
                            })), e.requestUpdate?.()
                        }
                    }
                }, {
                    kind: "field",
                    key: "_onSiteLogoSlotChanged",
                    value() {
                        return ({
                            target: e
                        }) => {
                            const [t] = e.assignedNodes();
                            t && (this._setOverflowTo({
                                target: e
                            }, "overflow-secondary-bottom"), this._cloneLogos(t), this._setRoot())
                        }
                    }
                }, {
                    kind: "field",
                    key: "_onNavbarCtaSlotChange",
                    value() {
                        return e => {
                            this._setOverflowTo(e, "overflow-primary-bottom")
                        }
                    }
                }, {
                    kind: "field",
                    key: "_setOverflowTo",
                    value: () => ({
                        target: e
                    }, t = "overflow-primary-top") => e.assignedNodes({
                        flatten: !0
                    }).filter((({
                        dataset: e
                    }) => !("overflowTo" in e))).forEach((({
                        dataset: e
                    }) => {
                        Object.assign(e, {
                            overflowTo: t
                        })
                    }))
                }, {
                    kind: "field",
                    key: "_LogoAndIconSlots",
                    value() {
                        return () => tr`<slot name="site-logo" @slotchange="${this._onSiteLogoSlotChanged}"></slot><slot name="site-icon"></slot>`
                    }
                }, {
                    kind: "field",
                    key: "_AccountMenu",
                    value() {
                        return () => this._createAccountDropdown({
                            item: this._interpolateData(this._data)?.find((({
                                slot: e
                            }) => "account" === e))
                        })
                    }
                }, {
                    kind: "field",
                    key: "_OverflowMenu",
                    value() {
                        return () => this._createOverflowDropdown({
                            item: this._interpolateData(this._data)?.find((({
                                slot: e
                            }) => "overflow" === e))
                        })
                    }
                }, {
                    kind: "field",
                    key: "_isChina",
                    value() {
                        return () => "CHN" === this.userCountry
                    }
                }, {
                    kind: "method",
                    key: "render",
                    value: function() {
                        const e = this._LogoAndIconSlots();
                        return tr`<ul part="bar" role="menubar"><slot name="skip-link" @slotchange="${this._onSkipLinkChange}"></slot>${this._isMobile?"":e}<div class="primary-menu"><slot name="primary-menu"></slot><div id="overflow-outer" role="presentation"><div id="overflow-inner" role="presentation">${this._OverflowMenu()}</div></div></div>${this._isMobile?e:""}<div class="secondary-menu"><slot name="search" @slotchange="${this._onSearchSlotChange}" slot="search"></slot><slot name="secondary-menu"></slot>${this._AccountMenu()}<slot name="navbar-cta" @slotchange="${this._onNavbarCtaSlotChange}"></slot></div></ul>`
                    }
                }]
            }
        }), bo(kr));
        return yn("trb-nav", ya), yn("trb-nav-drawer", ti), yn("trb-nav-link", class extends kr {
            static get styles() {
                return [va]
            }
            static get properties() {
                return {
                    id: {
                        type: String,
                        converter: e => e.toLowerCase().replace(/ /g, "-")
                    },
                    text: {
                        type: String
                    },
                    textSecondary: {
                        attribute: "text-secondary",
                        type: String
                    },
                    subtext: {
                        type: String
                    },
                    href: {
                        type: String
                    },
                    icon: {
                        type: String,
                        converter: e => "undefined" === e ? void 0 : e
                    },
                    iconSrc: {
                        type: String,
                        attribute: "icon-src",
                        converter: e => "undefined" === e ? void 0 : e
                    },
                    chevronIcon: {
                        attribute: "chevron-icon",
                        type: String
                    },
                    externalIcon: {
                        attribute: "external-icon",
                        type: String
                    },
                    iconSize: {
                        type: Number,
                        attribute: "icon-size",
                        reflect: !0
                    },
                    badge: {
                        type: String
                    },
                    mobileGame: {
                        attribute: "mobile-game",
                        type: Boolean
                    },
                    requiresAuthentication: {
                        attribute: "requires-authentication",
                        type: Boolean
                    },
                    hideOnDesktop: {
                        attribute: "hide-on-desktop",
                        type: Boolean
                    },
                    hideOnMobile: {
                        attribute: "hide-on-mobile",
                        type: Boolean
                    },
                    displayOnly: {
                        attribute: "display-only",
                        type: Boolean
                    },
                    isExternal: {
                        attribute: "is-external",
                        type: Boolean
                    },
                    _view: {
                        attribute: "view",
                        type: String,
                        reflect: !0
                    },
                    theme: {
                        type: String,
                        reflect: !0
                    },
                    _iconOnly: {
                        type: Boolean
                    },
                    _mobileGame: {
                        type: Boolean
                    },
                    _isDropdown: {
                        type: Boolean
                    },
                    class: {
                        type: String,
                        reflect: !0
                    },
                    eventLabel: {
                        attribute: "data-event-label",
                        type: String
                    },
                    ...ga,
                    role: {
                        type: String,
                        reflect: !0
                    },
                    trbDevice: {
                        attribute: "trb-device",
                        type: String
                    },
                    trbModalTrigger: {
                        attribute: "trb-modal-trigger",
                        type: String
                    }
                }
            }
            constructor() {
                super(), d(this, "_getViewportStatus", ra((() => {
                    const [e, t] = he();
                    this._isMobile = t, this._view = e
                }), 200)), d(this, "_linkContent", (() => {
                    const {
                        text: e,
                        subtext: t,
                        icon: n,
                        iconSrc: o,
                        iconSize: i,
                        badge: r,
                        _mobileGame: a,
                        _isDropdown: s,
                        isExternal: l,
                        _iconOnly: d
                    } = this;
                    let c = tr`<slot name="icon">`;
                    const u = r ? tr`<span class="badge">${r}</span>` : "";
                    return (o || n) && (c = tr`<trb-nav-link-icon part="icon" src="${sa(o||void 0)}" icon="${sa(n||void 0)}" size="${sa(i||void 0)}" aria-hidden="${sa(this._iconOnly?void 0:"true")}"></trb-nav-link-icon>`), tr`<div class="nav-link-content" part="nav-link-content">${this._isDropdown&&!this._isMobile?u:""} ${c||tr`<slot name="icon">`} ${d?tr`<slot></slot>`:tr`<div part="text" class="nav-link-text ${t?"has-subtext":""}">${e} ${this.textSecondary?tr`<span class="text-secondary" part="text-secondary">${this.textSecondary}</span>`:tr``} ${t||r?tr`<div class="nav-link-extras" part="nav-link-extras">${t?tr`<span class="nav-link-subtext" part="subtext">${t}</span>`:""} ${this._isDropdown?"":u}</div>`:""}</div>`} ${a?tr`<div class="mobile-game"><trb-nav-link-icon icon="phone" size="300" aria-hidden="true"></trb-nav-link-icon></div>`:""} ${s?tr`<trb-nav-link-icon class="chevron-down" part="chevron-down" icon="${this.chevronIcon?this.chevronIcon:"chevron-down"}" size="150" aria-hidden="true"></trb-nav-link-icon>${this._isMobile?u:""}`:""} ${l?tr`<trb-nav-link-icon icon="${this.externalIcon?this.externalIcon:"arrow-up-right"}" aria-hidden="true"></trb-nav-link-icon>`:tr``}</div>`
                })), d(this, "_button", (() => {
                    const {
                        id: e,
                        icon: t,
                        text: n,
                        analyticsLabel: o,
                        eventLabel: i,
                        _isDropdown: r
                    } = this;
                    return tr`<button part="nav-link-button" id="${sa(e)}" class="${ee({"is-dropdown":r})}" analytics-label="${sa(o||i||n||(t?`${t} icon`:void 0))}" @click="${this._dispatchButtonClick}" disabled="${sa(this.classList.contains("disabled")||this.classList.contains("title")?"":void 0)}" aria-haspopup="${sa(r?"true":void 0)}" aria-controls="${sa(r?"dropdown-menu":void 0)}" aria-expanded="${sa(r?this.classList.contains("is-open")?"true":"false":void 0)}" aria-label="${sa((this._isDropdown||this._iconOnly)&&this.text||void 0)}">${this._linkContent()}</button>`
                })), d(this, "_closeAllDropdownsAtDesktopResolutions", (() => {
                    this._isMobile || this._isDropdown || this.dispatchEvent(new CustomEvent("trb-nav-dropdown:close", {
                        bubbles: !0,
                        composed: !0,
                        cancelable: !0
                    }))
                })), d(this, "_handleClick", (e => {
                    fa(e), this.dispatchEvent(new CustomEvent("trb-nav-dropdown:close", {
                        bubbles: !0,
                        composed: !0,
                        cancelable: !0
                    })), e.stopPropagation()
                })), d(this, "_anchor", (() => {
                    const {
                        id: e,
                        href: t,
                        icon: n,
                        text: o,
                        analyticsLabel: i,
                        eventLabel: r,
                        isExternal: a
                    } = this;
                    return tr`<a id="${sa(e||void 0)}" class="nav-link" href="${sa(t)}" analytics-label="${sa(i||r||o||(n?`${n} icon`:void 0))}" @click="${this._handleClick}" target="${sa(a?"_blank":void 0)}" aria-label="${sa(this._iconOnly&&this.text||void 0)}">${this._linkContent()}</a>`
                })), d(this, "_span", ((e = !1) => e ? tr`<span class="nav-link-display-only">${this._linkContent()}</span>` : tr`<span @click="${e=>{e.stopPropagation()}}">${this._linkContent()}</span>`)), this._isMobile = !0, this.analyticsEvent = "click_header_nav", this.role = void 0 === this.role || null === this.role ? "menuitem" : this.role, this.addEventListener("mouseover", this._closeAllDropdownsAtDesktopResolutions)
            }
            connectedCallback() {
                super.connectedCallback(), document.addEventListener("trb-nav:resized", this._getViewportStatus)
            }
            disconnectedCallback() {
                document.removeEventListener("trb-nav:resized", this._getViewportStatus)
            }
            firstUpdated() {
                super.firstUpdated(), this._getViewportStatus()
            }
            updated(e) {
                e.has("class") && (this._isDropdown = this.classList.contains("is-dropdown"), this._mobileGame = this.classList.contains("mobile-game"), this._iconOnly = this.classList.contains("icon-only"))
            }
            focus(e) {
                const {
                    href: t
                } = this;
                this.shadowRoot.querySelector(t ? "a" : "button")?.focus(e)
            }
            _dispatchButtonClick(e) {
                fa(e), this.dispatchEvent(new CustomEvent("trb-nav-link:click", {
                    bubbles: !0,
                    composed: !0,
                    cancelable: !0,
                    detail: {}
                }))
            }
            render() {
                const {
                    href: e
                } = this;
                return e ? this._anchor() : this.classList.contains("disabled") || this.classList.contains("title") ? this._span() : this.displayOnly ? this._span(!0) : this._button()
            }
        }), yn("trb-nav-link-icon", so), yn("trb-nav-dropdown", ba), e.trbNav = ya, Object.defineProperty(e, "__esModule", {
            value: !0
        }), e
    }({})
}