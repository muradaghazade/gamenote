; /* Start:"a:4:{s:4:"full";s:60:"/local/templates/main/js/jquery-3.3.1.min.js?164217444786927";s:6:"source";s:44:"/local/templates/main/js/jquery-3.3.1.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function e(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        },
        y = function e(t) {
            return null != t && t === t.window
        },
        v = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function m(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e, n)
            for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var b = "3.3.1",
        w = function(e, t) {
            return new w.fn.init(e, t)
        },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return w.each(this, e)
        },
        map: function(e) {
            return this.pushStack(w.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            m(e)
        },
        each: function(e, t) {
            var n, r = 0;
            if (C(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(T, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)(r = !t(e[o], o)) !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                s = [];
            if (C(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });

    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    var E = function(e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date,
            w = e.document,
            T = 0,
            C = 0,
            E = ae(),
            k = ae(),
            S = ae(),
            D = function(e, t) {
                return e === t && (f = !0), 0
            },
            N = {}.hasOwnProperty,
            A = [],
            j = A.pop,
            q = A.push,
            L = A.push,
            H = A.slice,
            O = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = function() {
                p()
            },
            ie = me(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: A.length ? function(e, t) {
                    q.apply(e, H.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, r, i) {
            var o, s, l, c, f, h, v, m = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== T && (f = J.exec(e)))
                    if (o = f[1]) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                    } else {
                        if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                    }
                if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) m = t, v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne): t.setAttribute("id", c = b), s = (h = a(e)).length;
                        while (s--) h[s] = "#" + c + " " + ve(h[s]);
                        v = h.join(","), m = K.test(e) && ge(t.parentNode) || t
                    }
                    if (v) try {
                        return L.apply(r, m.querySelectorAll(v)), r
                    } catch (e) {} finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }

        function ae() {
            var e = [];

            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            return t
        }

        function se(e) {
            return e[b] = !0, e
        }

        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            var n = e.split("|"),
                i = n.length;
            while (i--) r.attrHandle[n[i]] = t
        }

        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function de(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function he(e) {
            return se(function(t) {
                return t = +t, se(function(n, r) {
                    var i, o = e([], n.length, t),
                        a = o.length;
                    while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        n = oe.support = {}, o = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, p = oe.setDocument = function(e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ue(function(e) {
                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function(e) {
                return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
            }), n.getById ? (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e)
            }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function(e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
            }), ue(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
            })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
                n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W)
            }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, D = t ? function(e, t) {
                if (e === t) return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t) return f = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                if (i === o) return ce(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
            }, d) : d
        }, oe.matches = function(e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return oe(t, d, null, [e]).length > 0
        }, oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t)
        }, oe.attr = function(e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
                o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function(e) {
            return (e + "").replace(te, ne)
        }, oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function(e) {
            var t, r = [],
                i = 0,
                o = 0;
            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                while (t = e[o++]) t === e[o] && (i = r.push(o));
                while (i--) e.splice(r[i], 1)
            }
            return c = null, e
        }, i = oe.getText = function(e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                while (t = e[r++]) n += i(t);
            return n
        }, (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                            y = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            m = !u && !s,
                            x = !1;
                        if (y) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? y.firstChild : y.lastChild], a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [T, d, x];
                                        break
                                    }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                        var r, o = i(e, t),
                            a = o.length;
                        while (a--) e[r = O(e, o[a])] = !(n[r] = o[a])
                    }) : function(e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: se(function(e) {
                    var t = [],
                        n = [],
                        r = s(e.replace(B, "$1"));
                    return r[b] ? se(function(e, t, n, i) {
                        var o, a = r(e, null, i, []),
                            s = e.length;
                        while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: se(function(e) {
                    return function(t) {
                        return oe(e, t).length > 0
                    }
                }),
                contains: se(function(e) {
                    return e = e.replace(Z, ee),
                        function(t) {
                            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                        }
                }),
                lang: se(function(e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return Y.test(e.nodeName)
                },
                input: function(e) {
                    return G.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he(function() {
                    return [0]
                }),
                last: he(function(e, t) {
                    return [t - 1]
                }),
                eq: he(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: he(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = fe(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = pe(t);

        function ye() {}
        ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function(e, t) {
            var n, i, o, a, s, u, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, u = [], l = r.preFilter;
            while (s) {
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(B, " ")
                }), s = s.slice(n.length));
                for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
        };

        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function me(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
            return t.first ? function(t, n, i) {
                while (t = t[r])
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function(t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    while (t = t[r])
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || a)
                            if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                                if (c[o] = p, p[2] = e(t, n, u)) return !0
                            } return !1
            }
        }

        function xe(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n
        }

        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function(o, a, s, u) {
                var l, c, f, p = [],
                    d = [],
                    h = a.length,
                    g = o || be(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !o && t ? g : we(g, p, e, s, u),
                    v = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u), r) {
                    l = we(v, d), r(l, [], s, u), c = l.length;
                    while (c--)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = v.length;
                            while (c--)(f = v[c]) && l.push(y[c] = f);
                            i(null, v = [], l, u)
                        }
                        c = v.length;
                        while (c--)(f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v)
            })
        }

        function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function(e) {
                    return e === t
                }, s, !0), f = me(function(e) {
                    return O(t, e) > -1
                }, s, !0), p = [function(e, n, r) {
                    var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return t = null, i
                }]; u < o; u++)
                if (n = r.relative[e[u].type]) p = [me(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++)
                            if (r.relative[e[i].type]) break;
                        return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                    }
                    p.push(n)
                }
            return xe(p)
        }

        function Ee(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function(o, a, s, u, c) {
                    var f, h, y, v = 0,
                        m = "0",
                        x = o && [],
                        b = [],
                        w = l,
                        C = o || i && r.find.TAG("*", c),
                        E = T += null == w ? 1 : Math.random() || .1,
                        k = C.length;
                    for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                        if (i && f) {
                            h = 0, a || f.ownerDocument === d || (p(f), s = !g);
                            while (y = e[h++])
                                if (y(f, a || d, s)) {
                                    u.push(f);
                                    break
                                }
                            c && (T = E)
                        }
                        n && ((f = !y && f) && v--, o && x.push(f))
                    }
                    if (v += m, n && m !== v) {
                        h = 0;
                        while (y = t[h++]) y(x, b, a, s);
                        if (o) {
                            if (v > 0)
                                while (m--) x[m] || b[m] || (b[m] = j.call(u));
                            b = we(b)
                        }
                        L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                    }
                    return c && (T = E, l = w), x
                };
            return n ? se(o) : o
        }
        return s = oe.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = S[e + " "];
            if (!o) {
                t || (t = a(e)), n = t.length;
                while (n--)(o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ee(i, r))).selector = e
            }
            return o
        }, u = oe.select = function(e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e,
                d = !i && a(e = p.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                o = V.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    if (l = u[o], r.relative[c = l.type]) break;
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
                        break
                    }
                }
            }
            return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }), ue(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ue(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || le(P, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), oe
    }(e);
    w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
    var k = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        S = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        D = w.expr.match.needsContext;

    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, t, n) {
        return g(t) ? w.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function(e) {
            return u.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (w.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))
                    for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, q = w(r);
    var H = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    w.fn.extend({
        has: function(e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return k(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return k(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return k(e, "nextSibling")
        },
        prevAll: function(e) {
            return k(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return k(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return k(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, function(e, t) {
        w.fn[e] = function(n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var M = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        var t = {};
        return w.each(e.match(M) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    w.Callbacks = function(e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            s = -1,
            u = function() {
                for (i = i || e.once, r = t = !0; a.length; s = -1) {
                    n = a.shift();
                    while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1)
                }
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            l = {
                add: function() {
                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                        w.each(n, function(n, r) {
                            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function() {
                    return w.each(arguments, function(e, t) {
                        var n;
                        while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--
                    }), this
                },
                has: function(e) {
                    return e ? w.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return i = a = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return i = a = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return l
    };

    function I(e) {
        return e
    }

    function W(e) {
        throw e
    }

    function $(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return w.Deferred(function(t) {
                            w.each(n, function(n, r) {
                                var i = g(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function() {
                                var s = this,
                                    u = arguments,
                                    l = function() {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                        }
                                    },
                                    c = i ? l : function() {
                                        try {
                                            l()
                                        } catch (e) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u))
                                        }
                                    };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return w.Deferred(function(e) {
                            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? w.extend(e, i) : i
                    }
                },
                o = {};
            return w.each(n, function(e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = w.Deferred(),
                s = function(e) {
                    return function(n) {
                        r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
                    }
                };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            while (n--) $(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var F = w.Deferred();
    w.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            w.readyException(e)
        }), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
        }
    }), w.ready.then = F.then;

    function _() {
        r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready()
    }
    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
    var z = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n)) {
                i = !0;
                for (s in n) z(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(w(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        X = /^-ms-/,
        U = /-([a-z])/g;

    function V(e, t) {
        return t.toUpperCase()
    }

    function G(e) {
        return e.replace(X, "ms-").replace(U, V)
    }
    var Y = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Q() {
        this.expando = w.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[G(t)] = n;
            else
                for (r in t) i[G(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var J = new Q,
        K = new Q,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;

    function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
    }

    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = te(n)
                } catch (e) {}
                K.set(e, t, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function(e) {
            return K.hasData(e) || J.hasData(e)
        },
        data: function(e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function(e, t) {
            K.remove(e, t)
        },
        _data: function(e, t, n) {
            return J.access(e, t, n)
        },
        _removeData: function(e, t) {
            J.remove(e, t)
        }
    }), w.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    n = a.length;
                    while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                K.set(this, e)
            }) : z(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e))) return n;
                    if (void 0 !== (n = ne(o, e))) return n
                } else this.each(function() {
                    K.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                K.remove(this, e)
            })
        }
    }), w.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = w._queueHooks(e, t),
                a = function() {
                    w.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: w.Callbacks("once memory").add(function() {
                    J.remove(e, [t + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = w.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
        },
        se = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        };

    function ue(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return w.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, w.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var le = {};

    function ce(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
    }

    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    w.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && w.inArray(o, r) > -1) i && i.push(o);
            else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }! function() {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var be = r.documentElement,
        we = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;

    function Ee() {
        return !0
    }

    function ke() {
        return !1
    }

    function Se() {
        try {
            return r.activeElement
        } catch (e) {}
    }

    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) De(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function() {
            w.event.add(this, t, i, r, n)
        })
    }
    w.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
            if (y) {
                n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function(t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }), l = (t = (t || "").match(M) || [""]).length;
                while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && w.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d])
                    } else
                        for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t = w.event.fix(e),
                n, r, i, o, a, s, u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[t.type] || [],
                c = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w.event.handlers.call(this, t, l), n = 0;
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem, r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Se() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Se() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return N(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function(e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.fn.extend({
        on: function(e, t, n, r) {
            return De(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return De(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function() {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
    }

    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n])
            }
            K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u))
        }
    }

    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0,
            p = e.length,
            d = p - 1,
            y = t[0],
            v = g(y);
        if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function(i) {
            var o = e.eq(i);
            v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r)
        });
        if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
        }
        return e
    }

    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ne, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
                else Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if (t = n[J.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function(e) {
            return Ie(this, e, !0)
        },
        remove: function(e) {
            return Ie(this, e)
        },
        text: function(e) {
            return z(this, function(e) {
                return void 0 === e ? w.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Re(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return w.clone(this, e, t)
            })
        },
        html: function(e) {
            return z(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Re(this, arguments, function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        w.fn[e] = function(e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        $e = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Be = new RegExp(oe.join("|"), "i");
    ! function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, a, s, u, l = r.createElement("div"),
            c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
            boxSizingReliable: function() {
                return t(), o
            },
            pixelBoxStyles: function() {
                return t(), s
            },
            pixelPosition: function() {
                return t(), i
            },
            reliableMarginLeft: function() {
                return t(), u
            },
            scrollboxSize: function() {
                return t(), a
            }
        }))
    }();

    function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function _e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    var ze = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ue = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ve = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ge = ["Webkit", "Moz", "ms"],
        Ye = r.createElement("div").style;

    function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1),
            n = Ge.length;
        while (n--)
            if ((e = Ge[n] + t) in Ye) return e
    }

    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e), t
    }

    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
    }

    function et(e, t, n) {
        var r = $e(e),
            i = Fe(e, t, r),
            o = "border-box" === w.css(e, "boxSizing", !1, r),
            a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = G(t),
                    u = Xe.test(t),
                    l = e.style;
                if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = G(t);
            return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), w.each(["height", "width"], function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function() {
                    return et(e, t, r)
                })
            },
            set: function(e, n, r) {
                var i, o = $e(e),
                    a = "border-box" === w.css(e, "boxSizing", !1, o),
                    s = r && Ze(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s)
            }
        }
    }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
    }), w.fn.extend({
        css: function(e, t) {
            return z(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    });

    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i)
    }
    w.Tween = tt, tt.prototype = {
        constructor: tt,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
        }
    }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = tt.prototype.init, w.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;

    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
    }

    function st() {
        return e.setTimeout(function() {
            nt = void 0
        }), nt = Date.now()
    }

    function ut(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ct(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            y = J.get(e, "fxshow");
        n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
            a.unqueued || s()
        }), a.unqueued++, p.always(function() {
            p.always(function() {
                a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t)
            if (i = t[r], it.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;
                    g = !0
                }
                d[r] = y && y[r] || w.style(e, r)
            }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function() {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1;
            for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
                display: l
            }), o && (y.hidden = !g), g && fe([e], !0), p.done(function() {
                g || fe([e]), J.remove(e, "fxshow");
                for (r in d) w.style(e, r, d[r])
            })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
        }
    }

    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function pt(e, t, n) {
        var r, i, o = 0,
            a = pt.prefilters.length,
            s = w.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: nt || st(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++)
            if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    w.Animation = w.extend(pt, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return ue(n.elem, e, ie.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                g(e) ? (t = e, e = ["*"]) : e = e.match(M);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
            },
            prefilters: [ct],
            prefilter: function(e, t) {
                t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
            }
        }), w.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? w.extend({}, e) : {
                complete: n || !n && t || g(e) && e,
                duration: e,
                easing: n && t || t && !g(t) && t
            };
            return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
            }, r
        }, w.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = w.isEmptyObject(e),
                    o = w.speed(t, n, r),
                    a = function() {
                        var t = pt(this, w.extend({}, e), o);
                        (i || J.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = w.timers,
                        a = J.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || w.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = J.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = w.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), w.each(["toggle", "show", "hide"], function(e, t) {
            var n = w.fn[t];
            w.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
            }
        }), w.each({
            slideDown: ut("show"),
            slideUp: ut("hide"),
            slideToggle: ut("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            w.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), w.timers = [], w.fx.tick = function() {
            var e, t = 0,
                n = w.timers;
            for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || w.fx.stop(), nt = void 0
        }, w.fx.timer = function(e) {
            w.timers.push(e), w.fx.start()
        }, w.fx.interval = 13, w.fx.start = function() {
            rt || (rt = !0, at())
        }, w.fx.stop = function() {
            rt = null
        }, w.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, w.fn.delay = function(t, n) {
            return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(i)
                }
            })
        },
        function() {
            var e = r.createElement("input"),
                t = r.createElement("select").appendChild(r.createElement("option"));
            e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
        }();
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return z(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(M);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), dt = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function(e, t) {
            return z(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), h.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    });

    function vt(e) {
        return (e.match(M) || []).join(" ")
    }

    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
    }
    w.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function(t) {
                w(this).addClass(e.call(this, t, mt(this)))
            });
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function(t) {
                w(this).removeClass(e.call(this, t, mt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++])
                            while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t)
            }) : this.each(function() {
                var t, i, o, a;
                if (r) {
                    i = 0, o = w(this), a = xt(e);
                    while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = g(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n
            }
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : vt(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = w.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
            }
        }, h.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), h.focusin = "onfocusin" in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function(e) {
            e.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function(t, n, i, o) {
            var a, s, u, l, c, p, d, h, v = [i || r],
                m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(r, null, t)
        }
    }), w.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
            }
        }
    });
    var Ct = e.location,
        Et = Date.now(),
        kt = /\?/;
    w.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
    };
    var St = /\[\]$/,
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;

    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) w.each(t, function(t, i) {
            n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== x(t)) r(e, t);
        else
            for (i in t) jt(e + "[" + i + "]", t[i], n, r)
    }
    w.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = g(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) jt(n, e[n], t, i);
        return r.join("&")
    }, w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var qt = /%20/g,
        Lt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Bt = r.createElement("a");
    Bt.href = Ct.href;

    function Ft(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(M) || [];
            if (g(n))
                while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function _t(e, t, n, r) {
        var i = {},
            o = e === Wt;

        function a(s) {
            var u;
            return i[s] = !0, w.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            }), u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function zt(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e
    }

    function Xt(e, t, n) {
        var r, i, o, a, s = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function Ut(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o]))
                for (i in l)
                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (!0 !== a)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n),
                g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                m = w.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                T = {},
                C = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s) {
                                s = {};
                                while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2]
                            }
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) E.always(e[E.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || C;
                        return i && i.abort(t), k(0, t), this
                    }
                };
            if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
            if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
                if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                    E.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, i.send(b, k)
                } catch (e) {
                    if (c) throw e;
                    k(-1, e)
                }
            } else k(-1, "No Transport");

            function k(t, n, r, s) {
                var l, p, d, b, T, C = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], function(e, t) {
        w[t] = function(e, n, r, i) {
            return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e))
        }
    }), w._evalUrl = function(e) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Vt = {
            0: 200,
            1223: 204
        },
        Gt = w.ajaxSettings.xhr();
    h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function(t) {
        var n, r;
        if (h.cors || Gt && !t.crossDomain) return {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), w.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), w.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, o) {
                    t = w("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), r.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || w.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments
        }, r.always(function() {
            void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0
        }), "script"
    }), h.createHTMLDocument = function() {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), w.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, a;
        return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes))
    }, w.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, function(t) {
            return e === t.elem
        }).length
    }, w.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = w.css(e, "position"),
                f = w(e),
                p = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, w.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                w.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                return e || be
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(r) {
            return z(this, function(e, r, i) {
                var o;
                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), w.each(["top", "left"], function(e, t) {
        w.cssHooks[t] = _e(h.pixelPosition, function(e, n) {
            if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n
        })
    }), w.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            w.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(this, function(t, n, i) {
                    var o;
                    return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        w.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), w.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function() {
            return e.apply(t || this, r.concat(o.call(arguments)))
        }, i.guid = e.guid = e.guid || w.guid++, i
    }, w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return w
    });
    var Jt = e.jQuery,
        Kt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w
    }, t || (e.jQuery = e.$ = w), w
});

/* End */
;; /* Start:"a:4:{s:4:"full";s:56:"/local/templates/main/js/vendors.min.js?1642174447350603";s:6:"source";s:39:"/local/templates/main/js/vendors.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
! function(e, t, i, s) {
    "use strict";

    function n(e, t) {
        var s, n, a = [],
            r = 0;
        e && e.isDefaultPrevented() || (e.preventDefault(), (n = (s = (t = e && e.data ? e.data.options : t || {}).$target || i(e.currentTarget)).attr("data-fancybox") || "") ? (r = (a = (a = t.selector ? i(t.selector) : e.data ? e.data.items : []).length ? a.filter('[data-fancybox="' + n + '"]') : i('[data-fancybox="' + n + '"]')).index(s)) < 0 && (r = 0) : a = [s], i.fancybox.open(a, t, r))
    }
    if (e.console = e.console || {
            info: function(e) {}
        }, i) {
        if (i.fn.fancybox) return void console.info("fancyBox already initialized");
        var a = {
                loop: !1,
                gutter: 50,
                keyboard: !0,
                arrows: !0,
                infobar: !0,
                smallBtn: "auto",
                toolbar: "auto",
                buttons: ["zoom", "thumbs", "close"],
                idleTime: 3,
                protect: !1,
                modal: !1,
                image: {
                    preload: !1
                },
                ajax: {
                    settings: {
                        data: {
                            fancybox: !0
                        }
                    }
                },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: {
                        scrolling: "auto"
                    }
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                btnTpl: {
                    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M13,16 L20,23 L27,16 M20,7 L20,23 M10,24 L10,28 L30,28 L30,24" /></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M18,17 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 M24,22 L31,29" /></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
                    smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"><svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"></path></svg></button>',
                    arrowLeft: '<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M18,12 L10,20 L18,28 M10,20 L30,20"></path></svg></a>',
                    arrowRight: '<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 M22,12 L30,20 L22,28"></path></svg></a>'
                },
                parentEl: "body",
                autoFocus: !1,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {
                    autoStart: !1
                },
                touch: {
                    vertical: !0,
                    momentum: !0
                },
                hash: null,
                media: {},
                slideShow: {
                    autoStart: !1,
                    speed: 4e3
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                },
                wheel: "auto",
                onInit: i.noop,
                beforeLoad: i.noop,
                afterLoad: i.noop,
                beforeShow: i.noop,
                afterShow: i.noop,
                beforeClose: i.noop,
                afterClose: i.noop,
                onActivate: i.noop,
                onDeactivate: i.noop,
                clickContent: function(e, t) {
                    return "image" === e.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    idleTime: !1,
                    clickContent: function(e, t) {
                        return "image" === e.type && "toggleControls"
                    },
                    clickSlide: function(e, t) {
                        return "image" === e.type ? "toggleControls" : "close"
                    },
                    dblclickContent: function(e, t) {
                        return "image" === e.type && "zoom"
                    },
                    dblclickSlide: function(e, t) {
                        return "image" === e.type && "zoom"
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom"
                    },
                    de: {
                        CLOSE: "Schliessen",
                        NEXT: "Weiter",
                        PREV: "Zurück",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Maßstab"
                    }
                }
            },
            r = i(e),
            o = i(t),
            l = 0,
            c = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
                return e.setTimeout(t, 1e3 / 60)
            },
            d = function() {
                var e, i = t.createElement("fakeelement"),
                    n = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (e in n)
                    if (i.style[e] !== s) return n[e];
                return "transitionend"
            }(),
            h = function(e) {
                return e && e.length && e[0].offsetHeight
            },
            u = function(e, t) {
                var s = i.extend(!0, {}, e, t);
                return i.each(t, (function(e, t) {
                    i.isArray(t) && (s[e] = t)
                })), s
            },
            p = function(e, s, n) {
                var a = this;
                a.opts = u({
                    index: n
                }, i.fancybox.defaults), i.isPlainObject(s) && (a.opts = u(a.opts, s)), i.fancybox.isMobile && (a.opts = u(a.opts, a.opts.mobile)), a.id = a.opts.id || ++l, a.currIndex = parseInt(a.opts.index, 10) || 0, a.prevIndex = null, a.prevPos = null, a.currPos = 0, a.firstRun = !0, a.group = [], a.slides = {}, a.addContent(e), a.group.length && (a.$lastFocus = i(t.activeElement).trigger("blur"), a.init())
            };
        i.extend(p.prototype, {
            init: function() {
                var n, a, r, o = this,
                    l = o.group[o.currIndex].opts,
                    c = i.fancybox.scrollbarWidth;
                i.fancybox.getInstance() || !1 === l.hideScrollbar || (i("body").addClass("fancybox-active"), !i.fancybox.isMobile && t.body.scrollHeight > e.innerHeight && (c === s && (n = i('<div style="width:100px;height:100px;overflow:scroll;" />').appendTo("body"), c = i.fancybox.scrollbarWidth = n[0].offsetWidth - n[0].clientWidth, n.remove()), i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' + c + "px; }</style>"), i("body").addClass("compensate-for-scrollbar"))), r = "", i.each(l.buttons, (function(e, t) {
                    r += l.btnTpl[t] || ""
                })), a = i(o.translate(o, l.baseTpl.replace("{{buttons}}", r).replace("{{arrows}}", l.btnTpl.arrowLeft + l.btnTpl.arrowRight))).attr("id", "fancybox-container-" + o.id).addClass("fancybox-is-hidden").addClass(l.baseClass).data("FancyBox", o).appendTo(l.parentEl), o.$refs = {
                    container: a
                }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach((function(e) {
                    o.$refs[e] = a.find(".fancybox-" + e)
                })), o.trigger("onInit"), o.activate(), o.jumpTo(o.currIndex)
            },
            translate: function(e, t) {
                var i = e.opts.i18n[e.opts.lang];
                return t.replace(/\{\{(\w+)\}\}/g, (function(e, t) {
                    var n = i[t];
                    return n === s ? e : n
                }))
            },
            addContent: function(e) {
                var t, n = this,
                    a = i.makeArray(e);
                i.each(a, (function(e, t) {
                    var a, r, o, l, c, d = {},
                        h = {};
                    i.isPlainObject(t) ? (d = t, h = t.opts || t) : "object" === i.type(t) && i(t).length ? (h = (a = i(t)).data() || {}, (h = i.extend(!0, {}, h, h.options)).$orig = a, d.src = n.opts.src || h.src || a.attr("href"), d.type || d.src || (d.type = "inline", d.src = t)) : d = {
                        type: "html",
                        src: t + ""
                    }, d.opts = i.extend(!0, {}, n.opts, h), i.isArray(h.buttons) && (d.opts.buttons = h.buttons), r = d.type || d.opts.type, l = d.src || "", !r && l && ((o = l.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i)) ? (r = "video", d.opts.videoFormat || (d.opts.videoFormat = "video/" + ("ogv" === o[1] ? "ogg" : o[1]))) : l.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? r = "image" : l.match(/\.(pdf)((\?|#).*)?$/i) ? r = "iframe" : "#" === l.charAt(0) && (r = "inline")), r ? d.type = r : n.trigger("objectNeedsType", d), d.contentType || (d.contentType = i.inArray(d.type, ["html", "inline", "ajax"]) > -1 ? "html" : d.type), d.index = n.group.length, "auto" == d.opts.smallBtn && (d.opts.smallBtn = i.inArray(d.type, ["html", "inline", "ajax"]) > -1), "auto" === d.opts.toolbar && (d.opts.toolbar = !d.opts.smallBtn), d.opts.$trigger && d.index === n.opts.index && (d.opts.$thumb = d.opts.$trigger.find("img:first")), d.opts.$thumb && d.opts.$thumb.length || !d.opts.$orig || (d.opts.$thumb = d.opts.$orig.find("img:first")), "function" === i.type(d.opts.caption) && (d.opts.caption = d.opts.caption.apply(t, [n, d])), "function" === i.type(n.opts.caption) && (d.opts.caption = n.opts.caption.apply(t, [n, d])), d.opts.caption instanceof i || (d.opts.caption = d.opts.caption === s ? "" : d.opts.caption + ""), "ajax" === d.type && ((c = l.split(/\s+/, 2)).length > 1 && (d.src = c.shift(), d.opts.filter = c.shift())), d.opts.modal && (d.opts = i.extend(!0, d.opts, {
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    })), n.group.push(d)
                })), Object.keys(n.slides).length && (n.updateControls(), (t = n.Thumbs) && t.isActive && (t.create(), t.focus()))
            },
            addEvents: function() {
                var s = this;
                s.removeEvents(), s.$refs.container.on("click.fb-close", "[data-fancybox-close]", (function(e) {
                    e.stopPropagation(), e.preventDefault(), s.close(e)
                })).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", (function(e) {
                    e.stopPropagation(), e.preventDefault(), s.previous()
                })).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", (function(e) {
                    e.stopPropagation(), e.preventDefault(), s.next()
                })).on("click.fb", "[data-fancybox-zoom]", (function(e) {
                    s[s.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                })), r.on("orientationchange.fb resize.fb", (function(e) {
                    e && e.originalEvent && "resize" === e.originalEvent.type ? c((function() {
                        s.update()
                    })) : (s.$refs.stage.hide(), setTimeout((function() {
                        s.$refs.stage.show(), s.update()
                    }), i.fancybox.isMobile ? 600 : 250))
                })), o.on("focusin.fb", (function(e) {
                    var s = i.fancybox ? i.fancybox.getInstance() : null;
                    s.isClosing || !s.current || !s.current.opts.trapFocus || i(e.target).hasClass("fancybox-container") || i(e.target).is(t) || s && "fixed" !== i(e.target).css("position") && !s.$refs.container.has(e.target).length && (e.stopPropagation(), s.focus())
                })), o.on("keydown.fb", (function(e) {
                    var t = s.current,
                        n = e.keyCode || e.which;
                    if (t && t.opts.keyboard && !(e.ctrlKey || e.altKey || e.shiftKey || i(e.target).is("input") || i(e.target).is("textarea"))) return 8 === n || 27 === n ? (e.preventDefault(), void s.close(e)) : 37 === n || 38 === n ? (e.preventDefault(), void s.previous()) : 39 === n || 40 === n ? (e.preventDefault(), void s.next()) : void s.trigger("afterKeydown", e, n)
                })), s.group[s.currIndex].opts.idleTime && (s.idleSecondsCounter = 0, o.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", (function(e) {
                    s.idleSecondsCounter = 0, s.isIdle && s.showControls(), s.isIdle = !1
                })), s.idleInterval = e.setInterval((function() {
                    s.idleSecondsCounter++, s.idleSecondsCounter >= s.group[s.currIndex].opts.idleTime && !s.isDragging && (s.isIdle = !0, s.idleSecondsCounter = 0, s.hideControls())
                }), 1e3))
            },
            removeEvents: function() {
                var t = this;
                r.off("orientationchange.fb resize.fb"), o.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), t.idleInterval && (e.clearInterval(t.idleInterval), t.idleInterval = null)
            },
            previous: function(e) {
                return this.jumpTo(this.currPos - 1, e)
            },
            next: function(e) {
                return this.jumpTo(this.currPos + 1, e)
            },
            jumpTo: function(e, t) {
                var n, a, r, o, l, c, d, u = this,
                    p = u.group.length;
                if (!(u.isDragging || u.isClosing || u.isAnimating && u.firstRun)) {
                    if (e = parseInt(e, 10), !(a = u.current ? u.current.opts.loop : u.opts.loop) && (e < 0 || e >= p)) return !1;
                    if (n = u.firstRun = !Object.keys(u.slides).length, !(p < 2 && !n && u.isDragging)) {
                        if (o = u.current, u.prevIndex = u.currIndex, u.prevPos = u.currPos, r = u.createSlide(e), p > 1 && ((a || r.index > 0) && u.createSlide(e - 1), (a || r.index < p - 1) && u.createSlide(e + 1)), u.current = r, u.currIndex = r.index, u.currPos = r.pos, u.trigger("beforeShow", n), u.updateControls(), c = i.fancybox.getTranslate(r.$slide), r.isMoved = (0 !== c.left || 0 !== c.top) && !r.$slide.hasClass("fancybox-animated"), r.forcedDuration = s, i.isNumeric(t) ? r.forcedDuration = t : t = r.opts[n ? "animationDuration" : "transitionDuration"], t = parseInt(t, 10), n) return r.opts.animationEffect && t && u.$refs.container.css("transition-duration", t + "ms"), u.$refs.container.removeClass("fancybox-is-hidden"), h(u.$refs.container), u.$refs.container.addClass("fancybox-is-open"), h(u.$refs.container), r.$slide.addClass("fancybox-slide--previous"), u.loadSlide(r), r.$slide.removeClass("fancybox-slide--previous").addClass("fancybox-slide--current"), void u.preload("image");
                        i.each(u.slides, (function(e, t) {
                            i.fancybox.stop(t.$slide)
                        })), r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), r.isMoved ? (l = Math.round(r.$slide.width()), i.each(u.slides, (function(e, s) {
                            var n = s.pos - r.pos;
                            i.fancybox.animate(s.$slide, {
                                top: 0,
                                left: n * l + n * s.opts.gutter
                            }, t, (function() {
                                s.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), s.pos === u.currPos && (r.isMoved = !1, u.complete())
                            }))
                        }))) : u.$refs.stage.children().removeAttr("style"), r.isLoaded ? u.revealContent(r) : u.loadSlide(r), u.preload("image"), o.pos !== r.pos && (d = "fancybox-slide--" + (o.pos > r.pos ? "next" : "previous"), o.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), o.isComplete = !1, t && (r.isMoved || r.opts.transitionEffect) && (r.isMoved ? o.$slide.addClass(d) : (d = "fancybox-animated " + d + " fancybox-fx-" + r.opts.transitionEffect, i.fancybox.animate(o.$slide, d, t, (function() {
                            o.$slide.removeClass(d).removeAttr("style")
                        })))))
                    }
                }
            },
            createSlide: function(e) {
                var t, s, n = this;
                return s = (s = e % n.group.length) < 0 ? n.group.length + s : s, !n.slides[e] && n.group[s] && (t = i('<div class="fancybox-slide"></div>').appendTo(n.$refs.stage), n.slides[e] = i.extend(!0, {}, n.group[s], {
                    pos: e,
                    $slide: t,
                    isLoaded: !1
                }), n.updateSlide(n.slides[e])), n.slides[e]
            },
            scaleToActual: function(e, t, n) {
                var a, r, o, l, c, d = this,
                    h = d.current,
                    u = h.$content,
                    p = i.fancybox.getTranslate(h.$slide).width,
                    f = i.fancybox.getTranslate(h.$slide).height,
                    m = h.width,
                    g = h.height;
                !d.isAnimating && u && "image" == h.type && h.isLoaded && !h.hasError && (i.fancybox.stop(u), d.isAnimating = !0, e = e === s ? .5 * p : e, t = t === s ? .5 * f : t, (a = i.fancybox.getTranslate(u)).top -= i.fancybox.getTranslate(h.$slide).top, a.left -= i.fancybox.getTranslate(h.$slide).left, l = m / a.width, c = g / a.height, r = .5 * p - .5 * m, o = .5 * f - .5 * g, m > p && ((r = a.left * l - (e * l - e)) > 0 && (r = 0), r < p - m && (r = p - m)), g > f && ((o = a.top * c - (t * c - t)) > 0 && (o = 0), o < f - g && (o = f - g)), d.updateCursor(m, g), i.fancybox.animate(u, {
                    top: o,
                    left: r,
                    scaleX: l,
                    scaleY: c
                }, n || 330, (function() {
                    d.isAnimating = !1
                })), d.SlideShow && d.SlideShow.isActive && d.SlideShow.stop())
            },
            scaleToFit: function(e) {
                var t, s = this,
                    n = s.current,
                    a = n.$content;
                !s.isAnimating && a && "image" == n.type && n.isLoaded && !n.hasError && (i.fancybox.stop(a), s.isAnimating = !0, t = s.getFitPos(n), s.updateCursor(t.width, t.height), i.fancybox.animate(a, {
                    top: t.top,
                    left: t.left,
                    scaleX: t.width / a.width(),
                    scaleY: t.height / a.height()
                }, e || 330, (function() {
                    s.isAnimating = !1
                })))
            },
            getFitPos: function(e) {
                var t, i, s, n, a, r = e.$content,
                    o = e.width || e.opts.width,
                    l = e.height || e.opts.height,
                    c = {};
                return !!(e.isLoaded && r && r.length) && (n = {
                    top: parseInt(e.$slide.css("paddingTop"), 10),
                    right: parseInt(e.$slide.css("paddingRight"), 10),
                    bottom: parseInt(e.$slide.css("paddingBottom"), 10),
                    left: parseInt(e.$slide.css("paddingLeft"), 10)
                }, t = parseInt(this.$refs.stage.width(), 10) - (n.left + n.right), i = parseInt(this.$refs.stage.height(), 10) - (n.top + n.bottom), o && l || (o = t, l = i), s = Math.min(1, t / o, i / l), o = Math.floor(s * o), l = Math.floor(s * l), "image" === e.type ? (c.top = Math.floor(.5 * (i - l)) + n.top, c.left = Math.floor(.5 * (t - o)) + n.left) : "video" === e.contentType && (l > o / (a = e.opts.width && e.opts.height ? o / l : e.opts.ratio || 16 / 9) ? l = o / a : o > l * a && (o = l * a)), c.width = o, c.height = l, c)
            },
            update: function() {
                var e = this;
                i.each(e.slides, (function(t, i) {
                    e.updateSlide(i)
                }))
            },
            updateSlide: function(e, t) {
                var s = this,
                    n = e && e.$content,
                    a = e.width || e.opts.width,
                    r = e.height || e.opts.height;
                n && (a || r || "video" === e.contentType) && !e.hasError && (i.fancybox.stop(n), i.fancybox.setTranslate(n, s.getFitPos(e)), e.pos === s.currPos && (s.isAnimating = !1, s.updateCursor())), e.$slide.trigger("refresh"), s.$refs.toolbar.toggleClass("compensate-for-scrollbar", e.$slide.get(0).scrollHeight > e.$slide.get(0).clientHeight), s.trigger("onUpdate", e)
            },
            centerSlide: function(e, t) {
                var n, a;
                this.current && (n = Math.round(e.$slide.width()), a = e.pos - this.current.pos, i.fancybox.animate(e.$slide, {
                    top: 0,
                    left: a * n + a * e.opts.gutter,
                    opacity: 1
                }, t === s ? 0 : t, null, !1))
            },
            updateCursor: function(e, t) {
                var s, n = this,
                    a = n.current,
                    r = n.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                a && !n.isClosing && (s = n.isZoomable(), r.toggleClass("fancybox-is-zoomable", s), i("[data-fancybox-zoom]").prop("disabled", !s), s && ("zoom" === a.opts.clickContent || i.isFunction(a.opts.clickContent) && "zoom" === a.opts.clickContent(a)) ? n.isScaledDown(e, t) ? r.addClass("fancybox-can-zoomIn") : a.opts.touch ? r.addClass("fancybox-can-drag") : r.addClass("fancybox-can-zoomOut") : a.opts.touch && "video" !== a.contentType && r.addClass("fancybox-can-drag"))
            },
            isZoomable: function() {
                var e, t = this,
                    i = t.current;
                if (i && !t.isClosing && "image" === i.type && !i.hasError) {
                    if (!i.isLoaded) return !0;
                    if (e = t.getFitPos(i), i.width > e.width || i.height > e.height) return !0
                }
                return !1
            },
            isScaledDown: function(e, t) {
                var n = !1,
                    a = this.current,
                    r = a.$content;
                return e !== s && t !== s ? n = e < a.width && t < a.height : r && (n = (n = i.fancybox.getTranslate(r)).width < a.width && n.height < a.height), n
            },
            canPan: function() {
                var e, t = !1,
                    i = this.current;
                return "image" === i.type && (e = i.$content) && !i.hasError && (t = this.getFitPos(i), t = Math.abs(e.width() - t.width) > 1 || Math.abs(e.height() - t.height) > 1), t
            },
            loadSlide: function(e) {
                var t, s, n, a = this;
                if (!e.isLoading && !e.isLoaded) {
                    switch (e.isLoading = !0, a.trigger("beforeLoad", e), t = e.type, (s = e.$slide).off("refresh").trigger("onReset").addClass(e.opts.slideClass), t) {
                        case "image":
                            a.setImage(e);
                            break;
                        case "iframe":
                            a.setIframe(e);
                            break;
                        case "html":
                            a.setContent(e, e.src || e.content);
                            break;
                        case "video":
                            a.setContent(e, '<video class="fancybox-video" controls controlsList="nodownload"><source src="' + e.src + '" type="' + e.opts.videoFormat + "\">Your browser doesn't support HTML5 video</video");
                            break;
                        case "inline":
                            i(e.src).length ? a.setContent(e, i(e.src)) : a.setError(e);
                            break;
                        case "ajax":
                            a.showLoading(e), n = i.ajax(i.extend({}, e.opts.ajax.settings, {
                                url: e.src,
                                success: function(t, i) {
                                    "success" === i && a.setContent(e, t)
                                },
                                error: function(t, i) {
                                    t && "abort" !== i && a.setError(e)
                                }
                            })), s.one("onReset", (function() {
                                n.abort()
                            }));
                            break;
                        default:
                            a.setError(e)
                    }
                    return !0
                }
            },
            setImage: function(t) {
                var s, n, a, r, o, l = this,
                    c = t.opts.srcset || t.opts.image.srcset;
                if (t.timouts = setTimeout((function() {
                        var e = t.$image;
                        !t.isLoading || e && e[0].complete || t.hasError || l.showLoading(t)
                    }), 350), c) {
                    r = e.devicePixelRatio || 1, o = e.innerWidth * r, (a = c.split(",").map((function(e) {
                        var t = {};
                        return e.trim().split(/\s+/).forEach((function(e, i) {
                            var s = parseInt(e.substring(0, e.length - 1), 10);
                            return 0 === i ? t.url = e : void(s && (t.value = s, t.postfix = e[e.length - 1]))
                        })), t
                    }))).sort((function(e, t) {
                        return e.value - t.value
                    }));
                    for (var d = 0; d < a.length; d++) {
                        var h = a[d];
                        if ("w" === h.postfix && h.value >= o || "x" === h.postfix && h.value >= r) {
                            n = h;
                            break
                        }
                    }!n && a.length && (n = a[a.length - 1]), n && (t.src = n.url, t.width && t.height && "w" == n.postfix && (t.height = t.width / t.height * n.value, t.width = n.value), t.opts.srcset = c)
                }
                t.$content = i('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), s = t.opts.thumb || !(!t.opts.$thumb || !t.opts.$thumb.length) && t.opts.$thumb.attr("src"), !1 !== t.opts.preload && t.opts.width && t.opts.height && s && (t.width = t.opts.width, t.height = t.opts.height, t.$ghost = i("<img />").one("error", (function() {
                    i(this).remove(), t.$ghost = null
                })).one("load", (function() {
                    l.afterLoad(t)
                })).addClass("fancybox-image").appendTo(t.$content).attr("src", s)), l.setBigImage(t)
            },
            setBigImage: function(e) {
                var t = this,
                    s = i("<img />");
                e.$image = s.one("error", (function() {
                    t.setError(e)
                })).one("load", (function() {
                    var i;
                    e.$ghost || (t.resolveImageSlideSize(e, this.naturalWidth, this.naturalHeight), t.afterLoad(e)), e.timouts && (clearTimeout(e.timouts), e.timouts = null), t.isClosing || (e.opts.srcset && ((i = e.opts.sizes) && "auto" !== i || (i = (e.width / e.height > 1 && r.width() / r.height() > 1 ? "100" : Math.round(e.width / e.height * 100)) + "vw"), s.attr("sizes", i).attr("srcset", e.opts.srcset)), e.$ghost && setTimeout((function() {
                        e.$ghost && !t.isClosing && e.$ghost.hide()
                    }), Math.min(300, Math.max(1e3, e.height / 1600))), t.hideLoading(e))
                })).addClass("fancybox-image").attr("src", e.src).appendTo(e.$content), (s[0].complete || "complete" == s[0].readyState) && s[0].naturalWidth && s[0].naturalHeight ? s.trigger("load") : s[0].error && s.trigger("error")
            },
            resolveImageSlideSize: function(e, t, i) {
                var s = parseInt(e.opts.width, 10),
                    n = parseInt(e.opts.height, 10);
                e.width = t, e.height = i, s > 0 && (e.width = s, e.height = Math.floor(s * i / t)), n > 0 && (e.width = Math.floor(n * t / i), e.height = n)
            },
            setIframe: function(e) {
                var t, n = this,
                    a = e.opts.iframe,
                    r = e.$slide;
                e.$content = i('<div class="fancybox-content' + (a.preload ? " fancybox-is-hidden" : "") + '"></div>').css(a.css).appendTo(r), r.addClass("fancybox-slide--" + e.contentType), e.$iframe = t = i(a.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(a.attr).appendTo(e.$content), a.preload ? (n.showLoading(e), t.on("load.fb error.fb", (function(t) {
                    this.isReady = 1, e.$slide.trigger("refresh"), n.afterLoad(e)
                })), r.on("refresh.fb", (function() {
                    var i, n = e.$content,
                        r = a.css.width,
                        o = a.css.height;
                    if (1 === t[0].isReady) {
                        try {
                            i = t.contents().find("body")
                        } catch (e) {}
                        i && i.length && i.children().length && (n.css({
                            width: "",
                            height: ""
                        }), r === s && (r = Math.ceil(Math.max(i[0].clientWidth, i.outerWidth(!0)))), r && n.width(r), o === s && (o = Math.ceil(Math.max(i[0].clientHeight, i.outerHeight(!0)))), o && n.height(o)), n.removeClass("fancybox-is-hidden")
                    }
                }))) : this.afterLoad(e), t.attr("src", e.src), r.one("onReset", (function() {
                    try {
                        i(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                    } catch (e) {}
                    i(this).off("refresh.fb").empty(), e.isLoaded = !1
                }))
            },
            setContent: function(e, t) {
                this.isClosing || (this.hideLoading(e), e.$content && i.fancybox.stop(e.$content), e.$slide.empty(), function(e) {
                    return e && e.hasOwnProperty && e instanceof i
                }(t) && t.parent().length ? (t.parent().parent(".fancybox-slide--inline").trigger("onReset"), e.$placeholder = i("<div>").hide().insertAfter(t), t.css("display", "inline-block")) : e.hasError || ("string" === i.type(t) && (3 === (t = i("<div>").append(i.trim(t)).contents())[0].nodeType && (t = i("<div>").html(t))), e.opts.filter && (t = i("<div>").html(t).find(e.opts.filter))), e.$slide.one("onReset", (function() {
                    i(this).find("video,audio").trigger("pause"), e.$placeholder && (e.$placeholder.after(t.hide()).remove(), e.$placeholder = null), e.$smallBtn && (e.$smallBtn.remove(), e.$smallBtn = null), e.hasError || (i(this).empty(), e.isLoaded = !1)
                })), i(t).appendTo(e.$slide), i(t).is("video,audio") && (i(t).addClass("fancybox-video"), i(t).wrap("<div></div>"), e.contentType = "video", e.opts.width = e.opts.width || i(t).attr("width"), e.opts.height = e.opts.height || i(t).attr("height")), e.$content = e.$slide.children().filter("div,form,main,video,audio").first().addClass("fancybox-content"), e.$slide.addClass("fancybox-slide--" + e.contentType), this.afterLoad(e))
            },
            setError: function(e) {
                e.hasError = !0, e.$slide.trigger("onReset").removeClass("fancybox-slide--" + e.contentType).addClass("fancybox-slide--error"), e.contentType = "html", this.setContent(e, this.translate(e, e.opts.errorTpl)), e.pos === this.currPos && (this.isAnimating = !1)
            },
            showLoading: function(e) {
                var t = this;
                (e = e || t.current) && !e.$spinner && (e.$spinner = i(t.translate(t, t.opts.spinnerTpl)).appendTo(e.$slide))
            },
            hideLoading: function(e) {
                (e = e || this.current) && e.$spinner && (e.$spinner.remove(), delete e.$spinner)
            },
            afterLoad: function(e) {
                var t = this;
                t.isClosing || (e.isLoading = !1, e.isLoaded = !0, t.trigger("afterLoad", e), t.hideLoading(e), e.pos === t.currPos && t.updateCursor(), !e.opts.smallBtn || e.$smallBtn && e.$smallBtn.length || (e.$smallBtn = i(t.translate(e, e.opts.btnTpl.smallBtn)).prependTo(e.$content)), e.opts.protect && e.$content && !e.hasError && (e.$content.on("contextmenu.fb", (function(e) {
                    return 2 == e.button && e.preventDefault(), !0
                })), "image" === e.type && i('<div class="fancybox-spaceball"></div>').appendTo(e.$content)), t.revealContent(e))
            },
            revealContent: function(e) {
                var t, n, a, r, o = this,
                    l = e.$slide,
                    c = !1,
                    d = !1;
                return t = e.opts[o.firstRun ? "animationEffect" : "transitionEffect"], a = e.opts[o.firstRun ? "animationDuration" : "transitionDuration"], a = parseInt(e.forcedDuration === s ? a : e.forcedDuration, 10), e.pos === o.currPos && (e.isComplete ? t = !1 : o.isAnimating = !0), !e.isMoved && e.pos === o.currPos && a || (t = !1), "zoom" === t && (e.pos === o.currPos && a && "image" === e.type && !e.hasError && (d = o.getThumbPos(e)) ? c = o.getFitPos(e) : t = "fade"), "zoom" === t ? (c.scaleX = c.width / d.width, c.scaleY = c.height / d.height, "auto" == (r = e.opts.zoomOpacity) && (r = Math.abs(e.width / e.height - d.width / d.height) > .1), r && (d.opacity = .1, c.opacity = 1), i.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), d), h(e.$content), void i.fancybox.animate(e.$content, c, a, (function() {
                    o.isAnimating = !1, o.complete()
                }))) : (o.updateSlide(e), t ? (i.fancybox.stop(l), n = "fancybox-animated fancybox-slide--" + (e.pos >= o.prevPos ? "next" : "previous") + " fancybox-fx-" + t, l.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(n), e.$content.removeClass("fancybox-is-hidden"), h(l), void i.fancybox.animate(l, "fancybox-slide--current", a, (function(t) {
                    l.removeClass(n).removeAttr("style"), e.pos === o.currPos && o.complete()
                }), !0)) : (h(l), e.$content.removeClass("fancybox-is-hidden"), void(e.pos === o.currPos && o.complete())))
            },
            getThumbPos: function(s) {
                var n, a = !1,
                    r = s.opts.$thumb,
                    o = r && r.length && r[0].ownerDocument === t ? r.offset() : 0;
                return o && function(t) {
                    for (var s = t[0], n = s.getBoundingClientRect(), a = []; null !== s.parentElement;) "hidden" !== i(s.parentElement).css("overflow") && "auto" !== i(s.parentElement).css("overflow") || a.push(s.parentElement.getBoundingClientRect()), s = s.parentElement;
                    return a.every((function(e) {
                        var t = Math.min(n.right, e.right) - Math.max(n.left, e.left),
                            i = Math.min(n.bottom, e.bottom) - Math.max(n.top, e.top);
                        return t > 0 && i > 0
                    })) && n.bottom > 0 && n.right > 0 && n.left < i(e).width() && n.top < i(e).height()
                }(r) && (n = this.$refs.stage.offset(), a = {
                    top: o.top - n.top + parseFloat(r.css("border-top-width") || 0),
                    left: o.left - n.left + parseFloat(r.css("border-left-width") || 0),
                    width: r.width(),
                    height: r.height(),
                    scaleX: 1,
                    scaleY: 1
                }), a
            },
            complete: function() {
                var e = this,
                    s = e.current,
                    n = {};
                !s.isMoved && s.isLoaded && (s.isComplete || (s.isComplete = !0, s.$slide.siblings().trigger("onReset"), e.preload("inline"), h(s.$slide), s.$slide.addClass("fancybox-slide--complete"), i.each(e.slides, (function(t, s) {
                    s.pos >= e.currPos - 1 && s.pos <= e.currPos + 1 ? n[s.pos] = s : s && (i.fancybox.stop(s.$slide), s.$slide.off().remove())
                })), e.slides = n), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), s.$slide.find("video,audio").filter(":visible:first").trigger("play"), (i(t.activeElement).is("[disabled]") || s.opts.autoFocus && "image" != s.type && "iframe" !== s.type) && e.focus())
            },
            preload: function(e) {
                var t = this,
                    i = t.slides[t.currPos + 1],
                    s = t.slides[t.currPos - 1];
                i && i.type === e && t.loadSlide(i), s && s.type === e && t.loadSlide(s)
            },
            focus: function() {
                var e, t = this.current;
                this.isClosing || t && t.isComplete && t.$content && ((e = t.$content.find("input[autofocus]:enabled:visible:first")).length || (e = t.$content.find("button,:input,[tabindex],a").filter(":enabled:visible:first")), (e = e && e.length ? e : t.$content).trigger("focus"))
            },
            activate: function() {
                var e = this;
                i(".fancybox-container").each((function() {
                    var t = i(this).data("FancyBox");
                    t && t.id !== e.id && !t.isClosing && (t.trigger("onDeactivate"), t.removeEvents(), t.isVisible = !1)
                })), e.isVisible = !0, (e.current || e.isIdle) && (e.update(), e.updateControls()), e.trigger("onActivate"), e.addEvents()
            },
            close: function(e, t) {
                var s, n, a, r, o, l, u, p = this,
                    f = p.current,
                    m = function() {
                        p.cleanUp(e)
                    };
                return !(p.isClosing || (p.isClosing = !0, !1 === p.trigger("beforeClose", e) ? (p.isClosing = !1, c((function() {
                    p.update()
                })), 1) : (p.removeEvents(), f.timouts && clearTimeout(f.timouts), a = f.$content, s = f.opts.animationEffect, n = i.isNumeric(t) ? t : s ? f.opts.animationDuration : 0, f.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), f.$slide.siblings().trigger("onReset").remove(), n && p.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), p.hideLoading(f), p.hideControls(), p.updateCursor(), "zoom" !== s || !0 !== e && a && n && "image" === f.type && !f.hasError && (u = p.getThumbPos(f)) || (s = "fade"), "zoom" === s ? (i.fancybox.stop(a), r = i.fancybox.getTranslate(a), l = {
                    top: r.top,
                    left: r.left,
                    scaleX: r.width / u.width,
                    scaleY: r.height / u.height,
                    width: u.width,
                    height: u.height
                }, o = f.opts.zoomOpacity, "auto" == o && (o = Math.abs(f.width / f.height - u.width / u.height) > .1), o && (u.opacity = 0), i.fancybox.setTranslate(a, l), h(a), i.fancybox.animate(a, u, n, m), 0) : (s && n ? !0 === e ? setTimeout(m, n) : i.fancybox.animate(f.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + s, n, m) : m(), 0))))
            },
            cleanUp: function(e) {
                var t, s = this,
                    n = i("body");
                s.current.$slide.trigger("onReset"), s.$refs.container.empty().remove(), s.trigger("afterClose", e), s.$lastFocus && s.current.opts.backFocus && s.$lastFocus.trigger("focus"), s.current = null, (t = i.fancybox.getInstance()) ? t.activate() : (n.removeClass("fancybox-active compensate-for-scrollbar"), i("#fancybox-style-noscroll").remove())
            },
            trigger: function(e, t) {
                var s, n = Array.prototype.slice.call(arguments, 1),
                    a = this,
                    r = t && t.opts ? t : a.current;
                return r ? n.unshift(r) : r = a, n.unshift(a), i.isFunction(r.opts[e]) && (s = r.opts[e].apply(r, n)), !1 === s ? s : void("afterClose" !== e && a.$refs ? a.$refs.container.trigger(e + ".fb", n) : o.trigger(e + ".fb", n))
            },
            updateControls: function(e) {
                var t = this,
                    i = t.current,
                    s = i.index,
                    n = i.opts.caption,
                    a = t.$refs.container,
                    r = t.$refs.caption;
                i.$slide.trigger("refresh"), t.$caption = n && n.length ? r.html(n) : null, t.isHiddenControls || t.isIdle || t.showControls(), a.find("[data-fancybox-count]").html(t.group.length), a.find("[data-fancybox-index]").html(s + 1), a.find("[data-fancybox-prev]").toggleClass("disabled", !i.opts.loop && s <= 0), a.find("[data-fancybox-next]").toggleClass("disabled", !i.opts.loop && s >= t.group.length - 1), "image" === i.type ? a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", i.opts.image.src || i.src).show() : i.opts.toolbar && a.find("[data-fancybox-download],[data-fancybox-zoom]").hide()
            },
            hideControls: function() {
                this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
            },
            showControls: function() {
                var e = this,
                    t = e.current ? e.current.opts : e.opts,
                    i = e.$refs.container;
                e.isHiddenControls = !1, e.idleSecondsCounter = 0, i.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && e.group.length > 1)).toggleClass("fancybox-show-nav", !!(t.arrows && e.group.length > 1)).toggleClass("fancybox-is-modal", !!t.modal), e.$caption ? i.addClass("fancybox-show-caption ") : i.removeClass("fancybox-show-caption")
            },
            toggleControls: function() {
                this.isHiddenControls ? this.showControls() : this.hideControls()
            }
        }), i.fancybox = {
            version: "3.3.5",
            defaults: a,
            getInstance: function(e) {
                var t = i('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                    s = Array.prototype.slice.call(arguments, 1);
                return t instanceof p && ("string" === i.type(e) ? t[e].apply(t, s) : "function" === i.type(e) && e.apply(t, s), t)
            },
            open: function(e, t, i) {
                return new p(e, t, i)
            },
            close: function(e) {
                var t = this.getInstance();
                t && (t.close(), !0 === e && this.close())
            },
            destroy: function() {
                this.close(!0), o.add("body").off("click.fb-start", "**")
            },
            isMobile: t.createTouch !== s && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: function() {
                var i = t.createElement("div");
                return e.getComputedStyle && e.getComputedStyle(i) && e.getComputedStyle(i).getPropertyValue("transform") && !(t.documentMode && t.documentMode < 11)
            }(),
            getTranslate: function(e) {
                var t;
                return !(!e || !e.length) && {
                    top: (t = e[0].getBoundingClientRect()).top || 0,
                    left: t.left || 0,
                    width: t.width,
                    height: t.height,
                    opacity: parseFloat(e.css("opacity"))
                }
            },
            setTranslate: function(e, t) {
                var i = "",
                    n = {};
                if (e && t) return t.left === s && t.top === s || (i = (t.left === s ? e.position().left : t.left) + "px, " + (t.top === s ? e.position().top : t.top) + "px", i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), t.scaleX !== s && t.scaleY !== s && (i = (i.length ? i + " " : "") + "scale(" + t.scaleX + ", " + t.scaleY + ")"), i.length && (n.transform = i), t.opacity !== s && (n.opacity = t.opacity), t.width !== s && (n.width = t.width), t.height !== s && (n.height = t.height), e.css(n)
            },
            animate: function(e, t, n, a, r) {
                var o = !1;
                i.isFunction(n) && (a = n, n = null), i.isPlainObject(t) || e.removeAttr("style"), i.fancybox.stop(e), e.on(d, (function(s) {
                    (!s || !s.originalEvent || e.is(s.originalEvent.target) && "z-index" != s.originalEvent.propertyName) && (i.fancybox.stop(e), o && i.fancybox.setTranslate(e, o), i.isPlainObject(t) ? !1 === r && e.removeAttr("style") : !0 !== r && e.removeClass(t), i.isFunction(a) && a(s))
                })), i.isNumeric(n) && e.css("transition-duration", n + "ms"), i.isPlainObject(t) ? (t.scaleX !== s && t.scaleY !== s && (o = i.extend({}, t, {
                    width: e.width() * t.scaleX,
                    height: e.height() * t.scaleY,
                    scaleX: 1,
                    scaleY: 1
                }), delete t.width, delete t.height, e.parent().hasClass("fancybox-slide--image") && e.parent().addClass("fancybox-is-scaling")), i.fancybox.setTranslate(e, t)) : e.addClass(t), e.data("timer", setTimeout((function() {
                    e.trigger("transitionend")
                }), n + 16))
            },
            stop: function(e) {
                e && e.length && (clearTimeout(e.data("timer")), e.off("transitionend").css("transition-duration", ""), e.parent().removeClass("fancybox-is-scaling"))
            }
        }, i.fn.fancybox = function(e) {
            var t;
            return (t = (e = e || {}).selector || !1) ? i("body").off("click.fb-start", t).on("click.fb-start", t, {
                options: e
            }, n) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: e
            }, n), this
        }, o.on("click.fb-start", "[data-fancybox]", n), o.on("click.fb-start", "[data-trigger]", (function(e) {
            n(e, {
                $target: i('[data-fancybox="' + i(e.currentTarget).attr("data-trigger") + '"]').eq(i(e.currentTarget).attr("data-index") || 0),
                $trigger: i(this)
            })
        }))
    }
}(window, document, window.jQuery || jQuery),
function(e) {
    "use strict";
    var t = function(t, i, s) {
            if (t) return s = s || "", "object" === e.type(s) && (s = e.param(s, !0)), e.each(i, (function(e, i) {
                t = t.replace("$" + e, i || "")
            })), s.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + s), t
        },
        i = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "//www.youtube.com/embed/$4",
                thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1,
                    api: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function(e) {
                    return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12] + "").replace(/\?/, "&") + "&output=" + (e[12] && e[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                }
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function(e) {
                    return "//maps.google." + e[2] + "/maps?q=" + e[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                }
            }
        };
    e(document).on("objectNeedsType.fb", (function(s, n, a) {
        var r, o, l, c, d, h, u, p = a.src || "",
            f = !1;
        r = e.extend(!0, {}, i, a.opts.media), e.each(r, (function(i, s) {
            if (l = p.match(s.matcher)) {
                if (f = s.type, u = i, h = {}, s.paramPlace && l[s.paramPlace]) {
                    "?" == (d = l[s.paramPlace])[0] && (d = d.substring(1)), d = d.split("&");
                    for (var n = 0; n < d.length; ++n) {
                        var r = d[n].split("=", 2);
                        2 == r.length && (h[r[0]] = decodeURIComponent(r[1].replace(/\+/g, " ")))
                    }
                }
                return c = e.extend(!0, {}, s.params, a.opts[i], h), p = "function" === e.type(s.url) ? s.url.call(this, l, c, a) : t(s.url, l, c), o = "function" === e.type(s.thumb) ? s.thumb.call(this, l, c, a) : t(s.thumb, l), "youtube" === i ? p = p.replace(/&t=((\d+)m)?(\d+)s/, (function(e, t, i, s) {
                    return "&start=" + ((i ? 60 * parseInt(i, 10) : 0) + parseInt(s, 10))
                })) : "vimeo" === i && (p = p.replace("&%23", "#")), !1
            }
        })), f ? (a.opts.thumb || a.opts.$thumb && a.opts.$thumb.length || (a.opts.thumb = o), "iframe" === f && (a.opts = e.extend(!0, a.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })), e.extend(a, {
            type: f,
            src: p,
            origSrc: a.src,
            contentSource: u,
            contentType: "image" === f ? "image" : "gmap_place" == u || "gmap_search" == u ? "map" : "video"
        })) : p && (a.type = a.opts.defaultType)
    }))
}(window.jQuery || jQuery),
function(e, t, i) {
    "use strict";
    var s = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
            return e.setTimeout(t, 1e3 / 60)
        },
        n = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.oCancelAnimationFrame || function(t) {
            e.clearTimeout(t)
        },
        a = function(t) {
            var i = [];
            for (var s in t = (t = t.originalEvent || t || e.e).touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t]) t[s].pageX ? i.push({
                x: t[s].pageX,
                y: t[s].pageY
            }) : t[s].clientX && i.push({
                x: t[s].clientX,
                y: t[s].clientY
            });
            return i
        },
        r = function(e, t, i) {
            return t && e ? "x" === i ? e.x - t.x : "y" === i ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) : 0
        },
        o = function(e) {
            if (e.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio') || i.isFunction(e.get(0).onclick) || e.data("selectable")) return !0;
            for (var t = 0, s = e[0].attributes, n = s.length; t < n; t++)
                if ("data-fancybox-" === s[t].nodeName.substr(0, 14)) return !0;
            return !1
        },
        l = function(t) {
            var i = e.getComputedStyle(t)["overflow-y"],
                s = e.getComputedStyle(t)["overflow-x"],
                n = ("scroll" === i || "auto" === i) && t.scrollHeight > t.clientHeight,
                a = ("scroll" === s || "auto" === s) && t.scrollWidth > t.clientWidth;
            return n || a
        },
        c = function(e) {
            for (var t = !1; !(t = l(e.get(0))) && ((e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body")););
            return t
        },
        d = function(e) {
            var t = this;
            t.instance = e, t.$bg = e.$refs.bg, t.$stage = e.$refs.stage, t.$container = e.$refs.container, t.destroy(), t.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(t, "ontouchstart"))
        };
    d.prototype.destroy = function() {
        this.$container.off(".fb.touch")
    }, d.prototype.ontouchstart = function(s) {
        var n = this,
            l = i(s.target),
            d = n.instance,
            h = d.current,
            u = h.$content,
            p = "touchstart" == s.type;
        if (p && n.$container.off("mousedown.fb.touch"), (!s.originalEvent || 2 != s.originalEvent.button) && l.length && !o(l) && !o(l.parent()) && (l.is("img") || !(s.originalEvent.clientX > l[0].clientWidth + l.offset().left))) {
            if (!h || d.isAnimating || d.isClosing) return s.stopPropagation(), void s.preventDefault();
            if (n.realPoints = n.startPoints = a(s), n.startPoints.length) {
                if (s.stopPropagation(), n.startEvent = s, n.canTap = !0, n.$target = l, n.$content = u, n.opts = h.opts.touch, n.isPanning = !1, n.isSwiping = !1, n.isZooming = !1, n.isScrolling = !1, n.startTime = (new Date).getTime(), n.distanceX = n.distanceY = n.distance = 0, n.canvasWidth = Math.round(h.$slide[0].clientWidth), n.canvasHeight = Math.round(h.$slide[0].clientHeight), n.contentLastPos = null, n.contentStartPos = i.fancybox.getTranslate(n.$content) || {
                        top: 0,
                        left: 0
                    }, n.sliderStartPos = n.sliderLastPos || i.fancybox.getTranslate(h.$slide), n.stagePos = i.fancybox.getTranslate(d.$refs.stage), n.sliderStartPos.top -= n.stagePos.top, n.sliderStartPos.left -= n.stagePos.left, n.contentStartPos.top -= n.stagePos.top, n.contentStartPos.left -= n.stagePos.left, i(t).off(".fb.touch").on(p ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(n, "ontouchend")).on(p ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(n, "ontouchmove")), i.fancybox.isMobile && t.addEventListener("scroll", n.onscroll, !0), !n.opts && !d.canPan() || !l.is(n.$stage) && !n.$stage.find(l).length) return void(l.is(".fancybox-image") && s.preventDefault());
                i.fancybox.isMobile && (c(l) || c(l.parent())) || s.preventDefault(), (1 === n.startPoints.length || h.hasError) && (n.instance.canPan() ? (i.fancybox.stop(n.$content), n.$content.css("transition-duration", ""), n.isPanning = !0) : n.isSwiping = !0, n.$container.addClass("fancybox-controls--isGrabbing")), 2 === n.startPoints.length && "image" === h.type && (h.isLoaded || h.$ghost) && (n.canTap = !1, n.isSwiping = !1, n.isPanning = !1, n.isZooming = !0, i.fancybox.stop(n.$content), n.$content.css("transition-duration", ""), n.centerPointStartX = .5 * (n.startPoints[0].x + n.startPoints[1].x) - i(e).scrollLeft(), n.centerPointStartY = .5 * (n.startPoints[0].y + n.startPoints[1].y) - i(e).scrollTop(), n.percentageOfImageAtPinchPointX = (n.centerPointStartX - n.contentStartPos.left) / n.contentStartPos.width, n.percentageOfImageAtPinchPointY = (n.centerPointStartY - n.contentStartPos.top) / n.contentStartPos.height, n.startDistanceBetweenFingers = r(n.startPoints[0], n.startPoints[1]))
            }
        }
    }, d.prototype.onscroll = function(e) {
        this.isScrolling = !0, t.removeEventListener("scroll", this.onscroll, !0)
    }, d.prototype.ontouchmove = function(e) {
        var t = this,
            s = i(e.target);
        return void 0 !== e.originalEvent.buttons && 0 === e.originalEvent.buttons ? void t.ontouchend(e) : t.isScrolling || !s.is(t.$stage) && !t.$stage.find(s).length ? void(t.canTap = !1) : (t.newPoints = a(e), void((t.opts || t.instance.canPan()) && t.newPoints.length && t.newPoints.length && (t.isSwiping && !0 === t.isSwiping || e.preventDefault(), t.distanceX = r(t.newPoints[0], t.startPoints[0], "x"), t.distanceY = r(t.newPoints[0], t.startPoints[0], "y"), t.distance = r(t.newPoints[0], t.startPoints[0]), t.distance > 0 && (t.isSwiping ? t.onSwipe(e) : t.isPanning ? t.onPan() : t.isZooming && t.onZoom()))))
    }, d.prototype.onSwipe = function(t) {
        var a, r = this,
            o = r.isSwiping,
            l = r.sliderStartPos.left || 0;
        if (!0 !== o) "x" == o && (r.distanceX > 0 && (r.instance.group.length < 2 || 0 === r.instance.current.index && !r.instance.current.opts.loop) ? l += Math.pow(r.distanceX, .8) : r.distanceX < 0 && (r.instance.group.length < 2 || r.instance.current.index === r.instance.group.length - 1 && !r.instance.current.opts.loop) ? l -= Math.pow(-r.distanceX, .8) : l += r.distanceX), r.sliderLastPos = {
            top: "x" == o ? 0 : r.sliderStartPos.top + r.distanceY,
            left: l
        }, r.requestId && (n(r.requestId), r.requestId = null), r.requestId = s((function() {
            r.sliderLastPos && (i.each(r.instance.slides, (function(e, t) {
                var s = t.pos - r.instance.currPos;
                i.fancybox.setTranslate(t.$slide, {
                    top: r.sliderLastPos.top,
                    left: r.sliderLastPos.left + s * r.canvasWidth + s * t.opts.gutter
                })
            })), r.$container.addClass("fancybox-is-sliding"))
        }));
        else if (Math.abs(r.distance) > 10) {
            if (r.canTap = !1, r.instance.group.length < 2 && r.opts.vertical ? r.isSwiping = "y" : r.instance.isDragging || !1 === r.opts.vertical || "auto" === r.opts.vertical && i(e).width() > 800 ? r.isSwiping = "x" : (a = Math.abs(180 * Math.atan2(r.distanceY, r.distanceX) / Math.PI), r.isSwiping = a > 45 && a < 135 ? "y" : "x"), r.canTap = !1, "y" === r.isSwiping && i.fancybox.isMobile && (c(r.$target) || c(r.$target.parent()))) return void(r.isScrolling = !0);
            r.instance.isDragging = r.isSwiping, r.startPoints = r.newPoints, i.each(r.instance.slides, (function(e, t) {
                i.fancybox.stop(t.$slide), t.$slide.css("transition-duration", ""), t.inTransition = !1, t.pos === r.instance.current.pos && (r.sliderStartPos.left = i.fancybox.getTranslate(t.$slide).left - i.fancybox.getTranslate(r.instance.$refs.stage).left)
            })), r.instance.SlideShow && r.instance.SlideShow.isActive && r.instance.SlideShow.stop()
        }
    }, d.prototype.onPan = function() {
        var e = this;
        return r(e.newPoints[0], e.realPoints[0]) < (i.fancybox.isMobile ? 10 : 5) ? void(e.startPoints = e.newPoints) : (e.canTap = !1, e.contentLastPos = e.limitMovement(), e.requestId && (n(e.requestId), e.requestId = null), void(e.requestId = s((function() {
            i.fancybox.setTranslate(e.$content, e.contentLastPos)
        }))))
    }, d.prototype.limitMovement = function() {
        var e, t, i, s, n, a, r = this,
            o = r.canvasWidth,
            l = r.canvasHeight,
            c = r.distanceX,
            d = r.distanceY,
            h = r.contentStartPos,
            u = h.left,
            p = h.top,
            f = h.width,
            m = h.height;
        return n = f > o ? u + c : u, a = p + d, e = Math.max(0, .5 * o - .5 * f), t = Math.max(0, .5 * l - .5 * m), i = Math.min(o - f, .5 * o - .5 * f), s = Math.min(l - m, .5 * l - .5 * m), c > 0 && n > e && (n = e - 1 + Math.pow(-e + u + c, .8) || 0), c < 0 && n < i && (n = i + 1 - Math.pow(i - u - c, .8) || 0), d > 0 && a > t && (a = t - 1 + Math.pow(-t + p + d, .8) || 0), d < 0 && a < s && (a = s + 1 - Math.pow(s - p - d, .8) || 0), {
            top: a,
            left: n
        }
    }, d.prototype.limitPosition = function(e, t, i, s) {
        var n = this.canvasWidth,
            a = this.canvasHeight;
        return i > n ? e = (e = e > 0 ? 0 : e) < n - i ? n - i : e : e = Math.max(0, n / 2 - i / 2), s > a ? t = (t = t > 0 ? 0 : t) < a - s ? a - s : t : t = Math.max(0, a / 2 - s / 2), {
            top: t,
            left: e
        }
    }, d.prototype.onZoom = function() {
        var t = this,
            a = t.contentStartPos,
            o = a.width,
            l = a.height,
            c = a.left,
            d = a.top,
            h = r(t.newPoints[0], t.newPoints[1]) / t.startDistanceBetweenFingers,
            u = Math.floor(o * h),
            p = Math.floor(l * h),
            f = (o - u) * t.percentageOfImageAtPinchPointX,
            m = (l - p) * t.percentageOfImageAtPinchPointY,
            g = (t.newPoints[0].x + t.newPoints[1].x) / 2 - i(e).scrollLeft(),
            v = (t.newPoints[0].y + t.newPoints[1].y) / 2 - i(e).scrollTop(),
            y = g - t.centerPointStartX,
            b = {
                top: d + (m + (v - t.centerPointStartY)),
                left: c + (f + y),
                scaleX: h,
                scaleY: h
            };
        t.canTap = !1, t.newWidth = u, t.newHeight = p, t.contentLastPos = b, t.requestId && (n(t.requestId), t.requestId = null), t.requestId = s((function() {
            i.fancybox.setTranslate(t.$content, t.contentLastPos)
        }))
    }, d.prototype.ontouchend = function(e) {
        var s = this,
            r = Math.max((new Date).getTime() - s.startTime, 1),
            o = s.isSwiping,
            l = s.isPanning,
            c = s.isZooming,
            d = s.isScrolling;
        return s.endPoints = a(e), s.$container.removeClass("fancybox-controls--isGrabbing"), i(t).off(".fb.touch"), t.removeEventListener("scroll", s.onscroll, !0), s.requestId && (n(s.requestId), s.requestId = null), s.isSwiping = !1, s.isPanning = !1, s.isZooming = !1, s.isScrolling = !1, s.instance.isDragging = !1, s.canTap ? s.onTap(e) : (s.speed = 366, s.velocityX = s.distanceX / r * .5, s.velocityY = s.distanceY / r * .5, s.speedX = Math.max(.5 * s.speed, Math.min(1.5 * s.speed, 1 / Math.abs(s.velocityX) * s.speed)), void(l ? s.endPanning() : c ? s.endZooming() : s.endSwiping(o, d)))
    }, d.prototype.endSwiping = function(e, t) {
        var s = this,
            n = !1,
            a = s.instance.group.length;
        s.sliderLastPos = null, "y" == e && !t && Math.abs(s.distanceY) > 50 ? (i.fancybox.animate(s.instance.current.$slide, {
            top: s.sliderStartPos.top + s.distanceY + 150 * s.velocityY,
            opacity: 0
        }, 200), n = s.instance.close(!0, 200)) : "x" == e && s.distanceX > 50 && a > 1 ? n = s.instance.previous(s.speedX) : "x" == e && s.distanceX < -50 && a > 1 && (n = s.instance.next(s.speedX)), !1 !== n || "x" != e && "y" != e || (t || a < 2 ? s.instance.centerSlide(s.instance.current, 150) : s.instance.jumpTo(s.instance.current.index)), s.$container.removeClass("fancybox-is-sliding")
    }, d.prototype.endPanning = function() {
        var e, t, s, n = this;
        n.contentLastPos && (!1 === n.opts.momentum ? (e = n.contentLastPos.left, t = n.contentLastPos.top) : (e = n.contentLastPos.left + n.velocityX * n.speed, t = n.contentLastPos.top + n.velocityY * n.speed), (s = n.limitPosition(e, t, n.contentStartPos.width, n.contentStartPos.height)).width = n.contentStartPos.width, s.height = n.contentStartPos.height, i.fancybox.animate(n.$content, s, 330))
    }, d.prototype.endZooming = function() {
        var e, t, s, n, a = this,
            r = a.instance.current,
            o = a.newWidth,
            l = a.newHeight;
        a.contentLastPos && (e = a.contentLastPos.left, n = {
            top: t = a.contentLastPos.top,
            left: e,
            width: o,
            height: l,
            scaleX: 1,
            scaleY: 1
        }, i.fancybox.setTranslate(a.$content, n), o < a.canvasWidth && l < a.canvasHeight ? a.instance.scaleToFit(150) : o > r.width || l > r.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (s = a.limitPosition(e, t, o, l), i.fancybox.setTranslate(a.$content, i.fancybox.getTranslate(a.$content)), i.fancybox.animate(a.$content, s, 150)))
    }, d.prototype.onTap = function(t) {
        var s, n = this,
            r = i(t.target),
            o = n.instance,
            l = o.current,
            c = t && a(t) || n.startPoints,
            d = c[0] ? c[0].x - i(e).scrollLeft() - n.stagePos.left : 0,
            h = c[0] ? c[0].y - i(e).scrollTop() - n.stagePos.top : 0,
            u = function(e) {
                var s = l.opts[e];
                if (i.isFunction(s) && (s = s.apply(o, [l, t])), s) switch (s) {
                    case "close":
                        o.close(n.startEvent);
                        break;
                    case "toggleControls":
                        o.toggleControls(!0);
                        break;
                    case "next":
                        o.next();
                        break;
                    case "nextOrClose":
                        o.group.length > 1 ? o.next() : o.close(n.startEvent);
                        break;
                    case "zoom":
                        "image" == l.type && (l.isLoaded || l.$ghost) && (o.canPan() ? o.scaleToFit() : o.isScaledDown() ? o.scaleToActual(d, h) : o.group.length < 2 && o.close(n.startEvent))
                }
            };
        if ((!t.originalEvent || 2 != t.originalEvent.button) && (r.is("img") || !(d > r[0].clientWidth + r.offset().left))) {
            if (r.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) s = "Outside";
            else if (r.is(".fancybox-slide")) s = "Slide";
            else {
                if (!o.current.$content || !o.current.$content.find(r).addBack().filter(r).length) return;
                s = "Content"
            }
            if (n.tapped) {
                if (clearTimeout(n.tapped), n.tapped = null, Math.abs(d - n.tapX) > 50 || Math.abs(h - n.tapY) > 50) return this;
                u("dblclick" + s)
            } else n.tapX = d, n.tapY = h, l.opts["dblclick" + s] && l.opts["dblclick" + s] !== l.opts["click" + s] ? n.tapped = setTimeout((function() {
                n.tapped = null, u("click" + s)
            }), 500) : u("click" + s);
            return this
        }
    }, i(t).on("onActivate.fb", (function(e, t) {
        t && !t.Guestures && (t.Guestures = new d(t))
    }))
}(window, document, window.jQuery || jQuery),
function(e, t) {
    "use strict";
    t.extend(!0, t.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3
        }
    });
    var i = function(e) {
        this.instance = e, this.init()
    };
    t.extend(i.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var e = this;
            e.$button = e.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", (function() {
                e.toggle()
            })), (e.instance.group.length < 2 || !e.instance.group[e.instance.currIndex].opts.slideShow) && e.$button.hide()
        },
        set: function(e) {
            var t = this;
            t.instance && t.instance.current && (!0 === e || t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) ? t.timer = setTimeout((function() {
                t.isActive && t.instance.jumpTo((t.instance.currIndex + 1) % t.instance.group.length)
            }), t.instance.current.opts.slideShow.speed) : (t.stop(), t.instance.idleSecondsCounter = 0, t.instance.showControls())
        },
        clear: function() {
            clearTimeout(this.timer), this.timer = null
        },
        start: function() {
            var e = this,
                t = e.instance.current;
            t && (e.isActive = !0, e.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), e.set(!0))
        },
        stop: function() {
            var e = this,
                t = e.instance.current;
            e.clear(), e.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), e.isActive = !1
        },
        toggle: function() {
            var e = this;
            e.isActive ? e.stop() : e.start()
        }
    }), t(e).on({
        "onInit.fb": function(e, t) {
            t && !t.SlideShow && (t.SlideShow = new i(t))
        },
        "beforeShow.fb": function(e, t, i, s) {
            var n = t && t.SlideShow;
            s ? n && i.opts.slideShow.autoStart && n.start() : n && n.isActive && n.clear()
        },
        "afterShow.fb": function(e, t, i) {
            var s = t && t.SlideShow;
            s && s.isActive && s.set()
        },
        "afterKeydown.fb": function(i, s, n, a, r) {
            var o = s && s.SlideShow;
            !o || !n.opts.slideShow || 80 !== r && 32 !== r || t(e.activeElement).is("button,a,input") || (a.preventDefault(), o.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(e, t) {
            var i = t && t.SlideShow;
            i && i.stop()
        }
    }), t(e).on("visibilitychange", (function() {
        var i = t.fancybox.getInstance(),
            s = i && i.SlideShow;
        s && s.isActive && (e.hidden ? s.clear() : s.set())
    }))
}(document, window.jQuery || jQuery),
function(e, t) {
    "use strict";
    var i = function() {
        for (var t = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ], i = {}, s = 0; s < t.length; s++) {
            var n = t[s];
            if (n && n[1] in e) {
                for (var a = 0; a < n.length; a++) i[t[0][a]] = n[a];
                return i
            }
        }
        return !1
    }();
    if (i) {
        var s = {
            request: function(t) {
                (t = t || e.documentElement)[i.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                e[i.exitFullscreen]()
            },
            toggle: function(t) {
                t = t || e.documentElement, this.isFullscreen() ? this.exit() : this.request(t)
            },
            isFullscreen: function() {
                return Boolean(e[i.fullscreenElement])
            },
            enabled: function() {
                return Boolean(e[i.fullscreenEnabled])
            }
        };
        t.extend(!0, t.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 v16 h22 v-16 h-22 v8" /></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }), t(e).on({
            "onInit.fb": function(e, t) {
                t && t.group[t.currIndex].opts.fullScreen ? (t.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", (function(e) {
                    e.stopPropagation(), e.preventDefault(), s.toggle()
                })), t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && s.request(), t.FullScreen = s) : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
            },
            "afterKeydown.fb": function(e, t, i, s, n) {
                t && t.FullScreen && 70 === n && (s.preventDefault(), t.FullScreen.toggle())
            },
            "beforeClose.fb": function(e, t) {
                t && t.FullScreen && t.$refs.container.hasClass("fancybox-is-fullscreen") && s.exit()
            }
        }), t(e).on(i.fullscreenchange, (function() {
            var e = s.isFullscreen(),
                i = t.fancybox.getInstance();
            i && (i.current && "image" === i.current.type && i.isAnimating && (i.current.$content.css("transition", "none"), i.isAnimating = !1, i.update(!0, !0, 0)), i.trigger("onFullscreenChange", e), i.$refs.container.toggleClass("fancybox-is-fullscreen", e))
        }))
    } else t && t.fancybox && (t.fancybox.defaults.btnTpl.fullScreen = !1)
}(document, window.jQuery || jQuery),
function(e, t) {
    "use strict";
    var i = "fancybox-thumbs",
        s = i + "-active";
    t.fancybox.defaults = t.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, t.fancybox.defaults);
    var n = function(e) {
        this.init(e)
    };
    t.extend(n.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(e) {
            var t, i, s = this;
            s.instance = e, e.Thumbs = s, s.opts = e.group[e.currIndex].opts.thumbs, t = (t = e.group[0]).opts.thumb || !(!t.opts.$thumb || !t.opts.$thumb.length) && t.opts.$thumb.attr("src"), e.group.length > 1 && (i = (i = e.group[1]).opts.thumb || !(!i.opts.$thumb || !i.opts.$thumb.length) && i.opts.$thumb.attr("src")), s.$button = e.$refs.toolbar.find("[data-fancybox-thumbs]"), s.opts && t && i && t && i ? (s.$button.show().on("click", (function() {
                s.toggle()
            })), s.isActive = !0) : s.$button.hide()
        },
        create: function() {
            var e, s = this,
                n = s.instance,
                a = s.opts.parentEl,
                r = [];
            s.$grid || (s.$grid = t('<div class="' + i + " " + i + "-" + s.opts.axis + '"></div>').appendTo(n.$refs.container.find(a).addBack().filter(a)), s.$grid.on("click", "li", (function() {
                n.jumpTo(t(this).attr("data-index"))
            }))), s.$list || (s.$list = t("<ul>").appendTo(s.$grid)), t.each(n.group, (function(t, i) {
                (e = i.opts.thumb || (i.opts.$thumb ? i.opts.$thumb.attr("src") : null)) || "image" !== i.type || (e = i.src), r.push('<li data-index="' + t + '" tabindex="0" class="fancybox-thumbs-loading"' + (e && e.length ? ' style="background-image:url(' + e + ')" />' : "") + "></li>")
            })), s.$list[0].innerHTML = r.join(""), "x" === s.opts.axis && s.$list.width(parseInt(s.$grid.css("padding-right"), 10) + n.group.length * s.$list.children().eq(0).outerWidth(!0))
        },
        focus: function(e) {
            var t, i, n = this,
                a = n.$list,
                r = n.$grid;
            n.instance.current && (i = (t = a.children().removeClass(s).filter('[data-index="' + n.instance.current.index + '"]').addClass(s)).position(), "y" === n.opts.axis && (i.top < 0 || i.top > a.height() - t.outerHeight()) ? a.stop().animate({
                scrollTop: a.scrollTop() + i.top
            }, e) : "x" === n.opts.axis && (i.left < r.scrollLeft() || i.left > r.scrollLeft() + (r.width() - t.outerWidth())) && a.parent().stop().animate({
                scrollLeft: i.left
            }, e))
        },
        update: function() {
            var e = this;
            e.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), e.isVisible ? (e.$grid || e.create(), e.instance.trigger("onThumbsShow"), e.focus(0)) : e.$grid && e.instance.trigger("onThumbsHide"), e.instance.update()
        },
        hide: function() {
            this.isVisible = !1, this.update()
        },
        show: function() {
            this.isVisible = !0, this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible, this.update()
        }
    }), t(e).on({
        "onInit.fb": function(e, t) {
            var i;
            t && !t.Thumbs && ((i = new n(t)).isActive && !0 === i.opts.autoStart && i.show())
        },
        "beforeShow.fb": function(e, t, i, s) {
            var n = t && t.Thumbs;
            n && n.isVisible && n.focus(s ? 0 : 250)
        },
        "afterKeydown.fb": function(e, t, i, s, n) {
            var a = t && t.Thumbs;
            a && a.isActive && 71 === n && (s.preventDefault(), a.toggle())
        },
        "beforeClose.fb": function(e, t) {
            var i = t && t.Thumbs;
            i && i.isVisible && !1 !== i.opts.hideOnClose && i.$grid.hide()
        }
    })
}(document, window.jQuery || jQuery),
function(e, t) {
    "use strict";
    t.extend(!0, t.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'
        },
        share: {
            url: function(e, t) {
                return !e.currentHash && "inline" !== t.type && "html" !== t.type && (t.origSrc || t.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>'
        }
    }), t(e).on("click", "[data-fancybox-share]", (function() {
        var e, i, s = t.fancybox.getInstance(),
            n = s.current || null;
        n && ("function" === t.type(n.opts.share.url) && (e = n.opts.share.url.apply(n, [s, n])), i = n.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === n.type ? encodeURIComponent(n.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(e)).replace(/\{\{url_raw\}\}/g, function(e) {
            var t = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            };
            return String(e).replace(/[&<>"'`=\/]/g, (function(e) {
                return t[e]
            }))
        }(e)).replace(/\{\{descr\}\}/g, s.$caption ? encodeURIComponent(s.$caption.text()) : ""), t.fancybox.open({
            src: s.translate(s, i),
            type: "html",
            opts: {
                animationEffect: !1,
                afterLoad: function(e, t) {
                    s.$refs.container.one("beforeClose.fb", (function() {
                        e.close(null, 0)
                    })), t.$content.find(".fancybox-share__links a").click((function() {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    }))
                }
            }
        }))
    }))
}(document, window.jQuery || jQuery),
function(e, t, i) {
    "use strict";

    function s() {
        var e = t.location.hash.substr(1),
            i = e.split("-"),
            s = i.length > 1 && /^\+?\d+$/.test(i[i.length - 1]) && parseInt(i.pop(-1), 10) || 1;
        return {
            hash: e,
            index: s < 1 ? 1 : s,
            gallery: i.join("-")
        }
    }

    function n(e) {
        "" !== e.gallery && i("[data-fancybox='" + i.escapeSelector(e.gallery) + "']").eq(e.index - 1).trigger("click.fb-start")
    }

    function a(e) {
        var t, i;
        return !!e && ("" !== (i = (t = e.current ? e.current.opts : e.opts).hash || (t.$orig ? t.$orig.data("fancybox") : "")) && i)
    }
    i.escapeSelector || (i.escapeSelector = function(e) {
        return (e + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, (function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }))
    }), i((function() {
        !1 !== i.fancybox.defaults.hash && (i(e).on({
            "onInit.fb": function(e, t) {
                var i, n;
                !1 !== t.group[t.currIndex].opts.hash && (i = s(), (n = a(t)) && i.gallery && n == i.gallery && (t.currIndex = i.index - 1))
            },
            "beforeShow.fb": function(i, s, n, r) {
                var o;
                n && !1 !== n.opts.hash && ((o = a(s)) && (s.currentHash = o + (s.group.length > 1 ? "-" + (n.index + 1) : ""), t.location.hash !== "#" + s.currentHash && (s.origHash || (s.origHash = t.location.hash), s.hashTimer && clearTimeout(s.hashTimer), s.hashTimer = setTimeout((function() {
                    "replaceState" in t.history ? (t.history[r ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + s.currentHash), r && (s.hasCreatedHistory = !0)) : t.location.hash = s.currentHash, s.hashTimer = null
                }), 300))))
            },
            "beforeClose.fb": function(i, s, n) {
                !1 !== n.opts.hash && (a(s), s.currentHash && s.hasCreatedHistory ? t.history.back() : s.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (s.origHash || "")) : t.location.hash = s.origHash), s.currentHash = null, clearTimeout(s.hashTimer))
            }
        }), i(t).on("hashchange.fb", (function() {
            var e, t = s();
            i.each(i(".fancybox-container").get().reverse(), (function(t, s) {
                var n = i(s).data("FancyBox");
                if (n.currentHash) return e = n, !1
            })), e ? !e.currentHash || e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && n(t)
        })), setTimeout((function() {
            i.fancybox.getInstance() || n(s())
        }), 50))
    }))
}(document, window, window.jQuery || jQuery),
function(e, t) {
    "use strict";
    var i = (new Date).getTime();
    t(e).on({
        "onInit.fb": function(e, t, s) {
            t.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", (function(e) {
                var s = t.current,
                    n = (new Date).getTime();
                t.group.length < 2 || !1 === s.opts.wheel || "auto" === s.opts.wheel && "image" !== s.type || (e.preventDefault(), e.stopPropagation(), s.$slide.hasClass("fancybox-animated") || (e = e.originalEvent || e, n - i < 250 || (i = n, t[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]())))
            }))
        }
    })
}(document, window.jQuery || jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}((function(e) {
    var t, i = navigator.userAgent,
        s = /iphone/i.test(i),
        n = /chrome/i.test(i),
        a = /android/i.test(i);
    e.mask = {
        definitions: {
            9: "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, e.fn.extend({
        caret: function(e, t) {
            var i;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each((function() {
                this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && ((i = this.createTextRange()).collapse(!0), i.moveEnd("character", t), i.moveStart("character", e), i.select())
            }))) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (i = document.selection.createRange(), e = 0 - i.duplicate().moveStart("character", -1e5), t = e + i.text.length), {
                begin: e,
                end: t
            })
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(i, r) {
            var o, l, c, d, h, u, p;
            if (!i && this.length > 0) {
                var f = e(this[0]).data(e.mask.dataName);
                return f ? f() : void 0
            }
            return r = e.extend({
                autoclear: e.mask.autoclear,
                placeholder: e.mask.placeholder,
                completed: null
            }, r), o = e.mask.definitions, l = [], c = u = i.length, d = null, e.each(i.split(""), (function(e, t) {
                "?" == t ? (u--, c = e) : o[t] ? (l.push(new RegExp(o[t])), null === d && (d = l.length - 1), c > e && (h = l.length - 1)) : l.push(null)
            })), this.trigger("unmask").each((function() {
                function f() {
                    if (r.completed) {
                        for (var e = d; h >= e; e++)
                            if (l[e] && T[e] === m(e)) return;
                        r.completed.call(S)
                    }
                }

                function m(e) {
                    return r.placeholder.charAt(e < r.placeholder.length ? e : 0)
                }

                function g(e) {
                    for (; ++e < u && !l[e];);
                    return e
                }

                function v(e, t) {
                    var i, s;
                    if (!(0 > e)) {
                        for (i = e, s = g(t); u > i; i++)
                            if (l[i]) {
                                if (!(u > s && l[i].test(T[s]))) break;
                                T[i] = T[s], T[s] = m(s), s = g(s)
                            }
                        x(), S.caret(Math.max(d, e))
                    }
                }

                function y() {
                    C(), S.val() != $ && S.change()
                }

                function b(e) {
                    if (!S.prop("readonly")) {
                        var t, i, n, a = e.which || e.keyCode;
                        p = S.val(), 8 === a || 46 === a || s && 127 === a ? (i = (t = S.caret()).begin, (n = t.end) - i == 0 && (i = 46 !== a ? function(e) {
                            for (; --e >= 0 && !l[e];);
                            return e
                        }(i) : n = g(i - 1), n = 46 === a ? g(n) : n), w(i, n), v(i, n - 1), e.preventDefault()) : 13 === a ? y.call(this, e) : 27 === a && (S.val($), S.caret(0, C()), e.preventDefault())
                    }
                }

                function w(e, t) {
                    var i;
                    for (i = e; t > i && u > i; i++) l[i] && (T[i] = m(i))
                }

                function x() {
                    S.val(T.join(""))
                }

                function C(e) {
                    var t, i, s, n = S.val(),
                        a = -1;
                    for (t = 0, s = 0; u > t; t++)
                        if (l[t]) {
                            for (T[t] = m(t); s++ < n.length;)
                                if (i = n.charAt(s - 1), l[t].test(i)) {
                                    T[t] = i, a = t;
                                    break
                                }
                            if (s > n.length) {
                                w(t + 1, u);
                                break
                            }
                        } else T[t] === n.charAt(s) && s++, c > t && (a = t);
                    return e ? x() : c > a + 1 ? r.autoclear || T.join("") === E ? (S.val() && S.val(""), w(0, u)) : x() : (x(), S.val(S.val().substring(0, a + 1))), c ? t : d
                }
                var S = e(this),
                    T = e.map(i.split(""), (function(e, t) {
                        return "?" != e ? o[e] ? m(t) : e : void 0
                    })),
                    E = T.join(""),
                    $ = S.val();
                S.data(e.mask.dataName, (function() {
                    return e.map(T, (function(e, t) {
                        return l[t] && e != m(t) ? e : null
                    })).join("")
                })), S.one("unmask", (function() {
                    S.off(".mask").removeData(e.mask.dataName)
                })).on("focus.mask", (function() {
                    var e;
                    S.prop("readonly") || (clearTimeout(t), $ = S.val(), e = C(), t = setTimeout((function() {
                        S.get(0) === document.activeElement && (x(), e == i.replace("?", "").length ? S.caret(0, e) : S.caret(e))
                    }), 10))
                })).on("blur.mask", y).on("keyup.mask", b).on("keydown.mask", b).on("keypress.mask", (function(t) {
                    if (!S.prop("readonly")) {
                        var i, s, n, r = t.which || t.keyCode,
                            o = S.caret();
                        if (!(t.ctrlKey || t.altKey || t.metaKey || 32 > r) && r && 13 !== r) {
                            if (o.end - o.begin != 0 && (w(o.begin, o.end), v(o.begin, o.end - 1)), i = g(o.begin - 1), u > i && (s = String.fromCharCode(r), l[i].test(s))) {
                                if (function(e) {
                                        var t, i, s, n;
                                        for (t = e, i = m(e); u > t; t++)
                                            if (l[t]) {
                                                if (s = g(t), n = T[t], T[t] = i, !(u > s && l[s].test(n))) break;
                                                i = n
                                            }
                                    }(i), T[i] = s, x(), n = g(i), a) {
                                    setTimeout((function() {
                                        e.proxy(e.fn.caret, S, n)()
                                    }), 0)
                                } else S.caret(n);
                                o.begin <= h && f()
                            }
                            t.preventDefault()
                        }
                    }
                })).on("input.mask paste.mask", (function() {
                    S.prop("readonly") || setTimeout((function() {
                        var e = C(!0);
                        S.caret(e), f()
                    }), 0)
                })), n && a && S.off("input.mask").on("input.mask", (function() {
                    var e = S.val(),
                        t = S.caret();
                    if (p && p.length && p.length > e.length) {
                        for (C(!0); t.begin > 0 && !l[t.begin - 1];) t.begin--;
                        if (0 === t.begin)
                            for (; t.begin < d && !l[t.begin];) t.begin++;
                        S.caret(t.begin, t.begin)
                    } else {
                        for (C(!0); t.begin < u && !l[t.begin];) t.begin++;
                        S.caret(t.begin, t.begin)
                    }
                    f()
                })), C()
            }))
        }
    })
})),
function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(e.jQuery)
}(this, (function(e) {
    "use strict";

    function t(t) {
        if (s.webkit && !t) return {
            height: 0,
            width: 0
        };
        if (!s.data.outer) {
            var i = {
                border: "none",
                "box-sizing": "content-box",
                height: "200px",
                margin: "0",
                padding: "0",
                width: "200px"
            };
            s.data.inner = e("<div>").css(e.extend({}, i)), s.data.outer = e("<div>").css(e.extend({
                left: "-1000px",
                overflow: "scroll",
                position: "absolute",
                top: "-1000px"
            }, i)).append(s.data.inner).appendTo("body")
        }
        return s.data.outer.scrollLeft(1e3).scrollTop(1e3), {
            height: Math.ceil(s.data.outer.offset().top - s.data.inner.offset().top || 0),
            width: Math.ceil(s.data.outer.offset().left - s.data.inner.offset().left || 0)
        }
    }

    function i(e) {
        var t = e.originalEvent;
        return (!t.axis || t.axis !== t.HORIZONTAL_AXIS) && !t.wheelDeltaX
    }
    var s = {
        data: {
            index: 0,
            name: "scrollbar"
        },
        macosx: /mac/i.test(navigator.platform),
        mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
        overlay: null,
        scroll: null,
        scrolls: [],
        webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent)
    };
    s.scrolls.add = function(e) {
        this.remove(e).push(e)
    }, s.scrolls.remove = function(t) {
        for (; e.inArray(t, this) >= 0;) this.splice(e.inArray(t, this), 1);
        return this
    };
    var n = {
            autoScrollSize: !0,
            autoUpdate: !0,
            debug: !1,
            disableBodyScroll: !1,
            duration: 200,
            ignoreMobile: !1,
            ignoreOverlay: !1,
            scrollStep: 30,
            showArrows: !1,
            stepScrolling: !0,
            scrollx: null,
            scrolly: null,
            onDestroy: null,
            onInit: null,
            onScroll: null,
            onUpdate: null
        },
        a = function(i) {
            s.scroll || (s.overlay = function() {
                var e = t(!0);
                return !(e.height || e.width)
            }(), s.scroll = t(), o(), e(window).resize((function() {
                var e = !1;
                if (s.scroll && (s.scroll.height || s.scroll.width)) {
                    var i = t();
                    (i.height !== s.scroll.height || i.width !== s.scroll.width) && (s.scroll = i, e = !0)
                }
                o(e)
            }))), this.container = i, this.namespace = ".scrollbar_" + s.data.index++, this.options = e.extend({}, n, window.jQueryScrollbarOptions || {}), this.scrollTo = null, this.scrollx = {}, this.scrolly = {}, i.data(s.data.name, this), s.scrolls.add(this)
        };
    a.prototype = {
        destroy: function() {
            if (this.wrapper) {
                this.container.removeData(s.data.name), s.scrolls.remove(this);
                var t = this.container.scrollLeft(),
                    i = this.container.scrollTop();
                this.container.insertBefore(this.wrapper).css({
                    height: "",
                    margin: "",
                    "max-height": ""
                }).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(t).scrollTop(i), this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").andSelf().off(this.namespace), this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").andSelf().off(this.namespace), this.wrapper.remove(), e(document).add("body").off(this.namespace), e.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [this.container])
            }
        },
        init: function(t) {
            var n = this,
                a = this.container,
                r = this.containerWrapper || a,
                o = this.namespace,
                l = e.extend(this.options, t || {}),
                c = {
                    x: this.scrollx,
                    y: this.scrolly
                },
                d = this.wrapper,
                h = {
                    scrollLeft: a.scrollLeft(),
                    scrollTop: a.scrollTop()
                };
            if (s.mobile && l.ignoreMobile || s.overlay && l.ignoreOverlay || s.macosx && !s.webkit) return !1;
            if (d) r.css({
                height: "auto",
                "margin-bottom": -1 * s.scroll.height + "px",
                "margin-right": -1 * s.scroll.width + "px",
                "max-height": ""
            });
            else {
                if (this.wrapper = d = e("<div>").addClass("scroll-wrapper").addClass(a.attr("class")).css("position", "absolute" == a.css("position") ? "absolute" : "relative").insertBefore(a).append(a), a.is("textarea") && (this.containerWrapper = r = e("<div>").insertBefore(a).append(a), d.addClass("scroll-textarea")), r.addClass("scroll-content").css({
                        height: "auto",
                        "margin-bottom": -1 * s.scroll.height + "px",
                        "margin-right": -1 * s.scroll.width + "px",
                        "max-height": ""
                    }), a.on("scroll" + o, (function(t) {
                        e.isFunction(l.onScroll) && l.onScroll.call(n, {
                            maxScroll: c.y.maxScrollOffset,
                            scroll: a.scrollTop(),
                            size: c.y.size,
                            visible: c.y.visible
                        }, {
                            maxScroll: c.x.maxScrollOffset,
                            scroll: a.scrollLeft(),
                            size: c.x.size,
                            visible: c.x.visible
                        }), c.x.isVisible && c.x.scroll.bar.css("left", a.scrollLeft() * c.x.kx + "px"), c.y.isVisible && c.y.scroll.bar.css("top", a.scrollTop() * c.y.kx + "px")
                    })), d.on("scroll" + o, (function() {
                        d.scrollTop(0).scrollLeft(0)
                    })), l.disableBodyScroll) {
                    var u = function(e) {
                        i(e) ? c.y.isVisible && c.y.mousewheel(e) : c.x.isVisible && c.x.mousewheel(e)
                    };
                    d.on("MozMousePixelScroll" + o, u), d.on("mousewheel" + o, u), s.mobile && d.on("touchstart" + o, (function(t) {
                        var i = t.originalEvent.touches && t.originalEvent.touches[0] || t,
                            s = i.pageX,
                            n = i.pageY,
                            r = a.scrollLeft(),
                            l = a.scrollTop();
                        e(document).on("touchmove" + o, (function(e) {
                            var t = e.originalEvent.targetTouches && e.originalEvent.targetTouches[0] || e;
                            a.scrollLeft(r + s - t.pageX), a.scrollTop(l + n - t.pageY), e.preventDefault()
                        })), e(document).on("touchend" + o, (function() {
                            e(document).off(o)
                        }))
                    }))
                }
                e.isFunction(l.onInit) && l.onInit.apply(this, [a])
            }
            e.each(c, (function(t, s) {
                var r = null,
                    d = 1,
                    h = "x" === t ? "scrollLeft" : "scrollTop",
                    u = l.scrollStep,
                    p = function() {
                        var e = a[h]();
                        a[h](e + u), 1 == d && e + u >= f && (e = a[h]()), -1 == d && f >= e + u && (e = a[h]()), a[h]() == e && r && r()
                    },
                    f = 0;
                s.scroll || (s.scroll = n._getScroll(l["scroll" + t]).addClass("scroll-" + t), l.showArrows && s.scroll.addClass("scroll-element_arrows_visible"), s.mousewheel = function(e) {
                    if (!s.isVisible || "x" === t && i(e)) return !0;
                    if ("y" === t && !i(e)) return c.x.mousewheel(e), !0;
                    var r = -1 * e.originalEvent.wheelDelta || e.originalEvent.detail,
                        o = s.size - s.visible - s.offset;
                    return (r > 0 && o > f || 0 > r && f > 0) && (0 > (f += r) && (f = 0), f > o && (f = o), n.scrollTo = n.scrollTo || {}, n.scrollTo[h] = f, setTimeout((function() {
                        n.scrollTo && (a.stop().animate(n.scrollTo, 240, "linear", (function() {
                            f = a[h]()
                        })), n.scrollTo = null)
                    }), 1)), e.preventDefault(), !1
                }, s.scroll.on("MozMousePixelScroll" + o, s.mousewheel).on("mousewheel" + o, s.mousewheel).on("mouseenter" + o, (function() {
                    f = a[h]()
                })), s.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + o, (function(i) {
                    if (1 != i.which) return !0;
                    d = 1;
                    var o = {
                            eventOffset: i["x" === t ? "pageX" : "pageY"],
                            maxScrollValue: s.size - s.visible - s.offset,
                            scrollbarOffset: s.scroll.bar.offset()["x" === t ? "left" : "top"],
                            scrollbarSize: s.scroll.bar["x" === t ? "outerWidth" : "outerHeight"]()
                        },
                        c = 0,
                        m = 0;
                    return e(this).hasClass("scroll-arrow") ? (d = e(this).hasClass("scroll-arrow_more") ? 1 : -1, u = l.scrollStep * d, f = d > 0 ? o.maxScrollValue : 0) : (d = o.eventOffset > o.scrollbarOffset + o.scrollbarSize ? 1 : o.eventOffset < o.scrollbarOffset ? -1 : 0, u = Math.round(.75 * s.visible) * d, f = o.eventOffset - o.scrollbarOffset - (l.stepScrolling ? 1 == d ? o.scrollbarSize : 0 : Math.round(o.scrollbarSize / 2)), f = a[h]() + f / s.kx), n.scrollTo = n.scrollTo || {}, n.scrollTo[h] = l.stepScrolling ? a[h]() + u : f, l.stepScrolling && (r = function() {
                        f = a[h](), clearInterval(m), clearTimeout(c), c = 0, m = 0
                    }, c = setTimeout((function() {
                        m = setInterval(p, 40)
                    }), l.duration + 100)), setTimeout((function() {
                        n.scrollTo && (a.animate(n.scrollTo, l.duration), n.scrollTo = null)
                    }), 1), n._handleMouseDown(r, i)
                })), s.scroll.bar.on("mousedown" + o, (function(i) {
                    if (1 != i.which) return !0;
                    var r = i["x" === t ? "pageX" : "pageY"],
                        l = a[h]();
                    return s.scroll.addClass("scroll-draggable"), e(document).on("mousemove" + o, (function(e) {
                        var i = parseInt((e["x" === t ? "pageX" : "pageY"] - r) / s.kx, 10);
                        a[h](l + i)
                    })), n._handleMouseDown((function() {
                        s.scroll.removeClass("scroll-draggable"), f = a[h]()
                    }), i)
                })))
            })), e.each(c, (function(e, t) {
                var i = "scroll-scroll" + e + "_visible",
                    s = "x" == e ? c.y : c.x;
                t.scroll.removeClass(i), s.scroll.removeClass(i), r.removeClass(i)
            })), e.each(c, (function(t, i) {
                e.extend(i, "x" == t ? {
                    offset: parseInt(a.css("left"), 10) || 0,
                    size: a.prop("scrollWidth"),
                    visible: d.width()
                } : {
                    offset: parseInt(a.css("top"), 10) || 0,
                    size: a.prop("scrollHeight"),
                    visible: d.height()
                })
            })), this._updateScroll("x", this.scrollx), this._updateScroll("y", this.scrolly), e.isFunction(l.onUpdate) && l.onUpdate.apply(this, [a]), e.each(c, (function(e, t) {
                var i = "x" === e ? "left" : "top",
                    s = "x" === e ? "outerWidth" : "outerHeight",
                    n = "x" === e ? "width" : "height",
                    r = parseInt(a.css(i), 10) || 0,
                    o = t.size,
                    c = t.visible + r,
                    d = t.scroll.size[s]() + (parseInt(t.scroll.size.css(i), 10) || 0);
                l.autoScrollSize && (t.scrollbarSize = parseInt(d * c / o, 10), t.scroll.bar.css(n, t.scrollbarSize + "px")), t.scrollbarSize = t.scroll.bar[s](), t.kx = (d - t.scrollbarSize) / (o - c) || 1, t.maxScrollOffset = o - c
            })), a.scrollLeft(h.scrollLeft).scrollTop(h.scrollTop).trigger("scroll")
        },
        _getScroll: function(t) {
            var i = {
                advanced: ['<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', '<div class="scroll-element_inner-bottom"></div>', "</div>", "</div>", '<div class="scroll-bar">', '<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', "</div>", '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', "</div>", "</div>", "</div>"].join(""),
                simple: ['<div class="scroll-element">', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_track"></div>', '<div class="scroll-bar"></div>', "</div>", "</div>"].join("")
            };
            return i[t] && (t = i[t]), t || (t = i.simple), t = "string" == typeof t ? e(t).appendTo(this.wrapper) : e(t), e.extend(t, {
                bar: t.find(".scroll-bar"),
                size: t.find(".scroll-element_size"),
                track: t.find(".scroll-element_track")
            }), t
        },
        _handleMouseDown: function(t, i) {
            var s = this.namespace;
            return e(document).on("blur" + s, (function() {
                e(document).add("body").off(s), t && t()
            })), e(document).on("dragstart" + s, (function(e) {
                return e.preventDefault(), !1
            })), e(document).on("mouseup" + s, (function() {
                e(document).add("body").off(s), t && t()
            })), e("body").on("selectstart" + s, (function(e) {
                return e.preventDefault(), !1
            })), i && i.preventDefault(), !1
        },
        _updateScroll: function(t, i) {
            var n = this.container,
                a = this.containerWrapper || n,
                r = "scroll-scroll" + t + "_visible",
                o = "x" === t ? this.scrolly : this.scrollx,
                l = parseInt(this.container.css("x" === t ? "left" : "top"), 10) || 0,
                c = this.wrapper,
                d = i.size,
                h = i.visible + l;
            i.isVisible = d - h > 1, i.isVisible ? (i.scroll.addClass(r), o.scroll.addClass(r), a.addClass(r)) : (i.scroll.removeClass(r), o.scroll.removeClass(r), a.removeClass(r)), "y" === t && (n.is("textarea") || h > d ? a.css({
                height: h + s.scroll.height + "px",
                "max-height": "none"
            }) : a.css({
                "max-height": h + s.scroll.height + "px"
            })), (i.size != n.prop("scrollWidth") || o.size != n.prop("scrollHeight") || i.visible != c.width() || o.visible != c.height() || i.offset != (parseInt(n.css("left"), 10) || 0) || o.offset != (parseInt(n.css("top"), 10) || 0)) && (e.extend(this.scrollx, {
                offset: parseInt(n.css("left"), 10) || 0,
                size: n.prop("scrollWidth"),
                visible: c.width()
            }), e.extend(this.scrolly, {
                offset: parseInt(n.css("top"), 10) || 0,
                size: this.container.prop("scrollHeight"),
                visible: c.height()
            }), this._updateScroll("x" === t ? "y" : "x", o))
        }
    };
    var r = a;
    e.fn.scrollbar = function(t, i) {
        return "string" != typeof t && (i = t, t = "init"), void 0 === i && (i = []), e.isArray(i) || (i = [i]), this.not("body, .scroll-wrapper").each((function() {
            var n = e(this),
                a = n.data(s.data.name);
            (a || "init" === t) && (a || (a = new r(n)), a[t] && a[t].apply(a, i))
        })), this
    }, e.fn.scrollbar.options = n;
    var o = function() {
        var e = 0;
        return function(t) {
            var i, n, a, r, l, c, d;
            for (i = 0; i < s.scrolls.length; i++) n = (r = s.scrolls[i]).container, a = r.options, l = r.wrapper, c = r.scrollx, d = r.scrolly, (t || a.autoUpdate && l && l.is(":visible") && (n.prop("scrollWidth") != c.size || n.prop("scrollHeight") != d.size || l.width() != c.visible || l.height() != d.visible)) && (r.init(), a.debug && (window.console && console.log({
                scrollHeight: n.prop("scrollHeight") + ":" + r.scrolly.size,
                scrollWidth: n.prop("scrollWidth") + ":" + r.scrollx.size,
                visibleHeight: l.height() + ":" + r.scrolly.visible,
                visibleWidth: l.width() + ":" + r.scrollx.visible
            }, !0)));
            clearTimeout(e), e = setTimeout(o, 300)
        }
    }();
    window.angular && function(e) {
        e.module("jQueryScrollbar", []).provider("jQueryScrollbar", (function() {
            var t = n;
            return {
                setOptions: function(i) {
                    e.extend(t, i)
                },
                $get: function() {
                    return {
                        options: e.copy(t)
                    }
                }
            }
        })).directive("jqueryScrollbar", ["jQueryScrollbar", "$parse", function(e, t) {
            return {
                restrict: "AC",
                link: function(i, s, n) {
                    var a = t(n.jqueryScrollbar)(i);
                    s.scrollbar(a || e.options).on("$destroy", (function() {
                        s.scrollbar("destroy")
                    }))
                }
            }
        }])
    }(window.angular)
})),
function(e, t) {
    var i = function(e, t, i) {
        "use strict";
        var s, n;
        if (function() {
                var t, i = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: !0,
                    expFactor: 1.5,
                    hFac: .8,
                    loadMode: 2,
                    loadHidden: !0,
                    ricTimeout: 0,
                    throttleDelay: 125
                };
                for (t in n = e.lazySizesConfig || e.lazysizesConfig || {}, i) t in n || (n[t] = i[t])
            }(), !t || !t.getElementsByClassName) return {
            init: function() {},
            cfg: n,
            noSupport: !0
        };
        var a = t.documentElement,
            r = e.HTMLPictureElement,
            o = "addEventListener",
            l = "getAttribute",
            c = e[o].bind(e),
            d = e.setTimeout,
            h = e.requestAnimationFrame || d,
            u = e.requestIdleCallback,
            p = /^picture$/i,
            f = ["load", "error", "lazyincluded", "_lazyloaded"],
            m = {},
            g = Array.prototype.forEach,
            v = function(e, t) {
                return m[t] || (m[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), m[t].test(e[l]("class") || "") && m[t]
            },
            y = function(e, t) {
                v(e, t) || e.setAttribute("class", (e[l]("class") || "").trim() + " " + t)
            },
            b = function(e, t) {
                var i;
                (i = v(e, t)) && e.setAttribute("class", (e[l]("class") || "").replace(i, " "))
            },
            w = function(e, t, i) {
                var s = i ? o : "removeEventListener";
                i && w(e, t), f.forEach((function(i) {
                    e[s](i, t)
                }))
            },
            x = function(e, i, n, a, r) {
                var o = t.createEvent("Event");
                return n || (n = {}), n.instance = s, o.initEvent(i, !a, !r), o.detail = n, e.dispatchEvent(o), o
            },
            C = function(t, i) {
                var s;
                !r && (s = e.picturefill || n.pf) ? (i && i.src && !t[l]("srcset") && t.setAttribute("srcset", i.src), s({
                    reevaluate: !0,
                    elements: [t]
                })) : i && i.src && (t.src = i.src)
            },
            S = function(e, t) {
                return (getComputedStyle(e, null) || {})[t]
            },
            T = function(e, t, i) {
                for (i = i || e.offsetWidth; i < n.minSize && t && !e._lazysizesWidth;) i = t.offsetWidth, t = t.parentNode;
                return i
            },
            E = function() {
                var e, i, s = [],
                    n = [],
                    a = s,
                    r = function() {
                        var t = a;
                        for (a = s.length ? n : s, e = !0, i = !1; t.length;) t.shift()();
                        e = !1
                    },
                    o = function(s, n) {
                        e && !n ? s.apply(this, arguments) : (a.push(s), i || (i = !0, (t.hidden ? d : h)(r)))
                    };
                return o._lsFlush = r, o
            }(),
            $ = function(e, t) {
                return t ? function() {
                    E(e)
                } : function() {
                    var t = this,
                        i = arguments;
                    E((function() {
                        e.apply(t, i)
                    }))
                }
            },
            M = function(e) {
                var t, s = 0,
                    a = n.throttleDelay,
                    r = n.ricTimeout,
                    o = function() {
                        t = !1, s = i.now(), e()
                    },
                    l = u && r > 49 ? function() {
                        u(o, {
                            timeout: r
                        }), r !== n.ricTimeout && (r = n.ricTimeout)
                    } : $((function() {
                        d(o)
                    }), !0);
                return function(e) {
                    var n;
                    (e = !0 === e) && (r = 33), t || (t = !0, (n = a - (i.now() - s)) < 0 && (n = 0), e || n < 9 ? l() : d(l, n))
                }
            },
            P = function(e) {
                var t, s, n = function() {
                        t = null, e()
                    },
                    a = function() {
                        var e = i.now() - s;
                        e < 99 ? d(a, 99 - e) : (u || n)(n)
                    };
                return function() {
                    s = i.now(), t || (t = d(a, 99))
                }
            },
            z = function() {
                var r, u, f, m, T, z, _, L, A, I, O, D, H = /^img$/i,
                    R = /^iframe$/i,
                    q = "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent),
                    F = 0,
                    N = 0,
                    B = -1,
                    j = function(e) {
                        N--, (!e || N < 0 || !e.target) && (N = 0)
                    },
                    W = function(e) {
                        return null == D && (D = "hidden" == S(t.body, "visibility")), D || !("hidden" == S(e.parentNode, "visibility") && "hidden" == S(e, "visibility"))
                    },
                    G = function(e, i) {
                        var s, n = e,
                            r = W(e);
                        for (L -= i, O += i, A -= i, I += i; r && (n = n.offsetParent) && n != t.body && n != a;)(r = (S(n, "opacity") || 1) > 0) && "visible" != S(n, "overflow") && (s = n.getBoundingClientRect(), r = I > s.left && A < s.right && O > s.top - 1 && L < s.bottom + 1);
                        return r
                    },
                    Y = function() {
                        var e, i, o, c, d, h, p, f, g, v, y, b, w = s.elements;
                        if ((m = n.loadMode) && N < 8 && (e = w.length)) {
                            for (i = 0, B++; i < e; i++)
                                if (w[i] && !w[i]._lazyRace)
                                    if (!q || s.prematureUnveil && s.prematureUnveil(w[i])) J(w[i]);
                                    else if ((f = w[i][l]("data-expand")) && (h = 1 * f) || (h = F), v || (v = !n.expand || n.expand < 1 ? a.clientHeight > 500 && a.clientWidth > 500 ? 500 : 370 : n.expand, s._defEx = v, y = v * n.expFactor, b = n.hFac, D = null, F < y && N < 1 && B > 2 && m > 2 && !t.hidden ? (F = y, B = 0) : F = m > 1 && B > 1 && N < 6 ? v : 0), g !== h && (z = innerWidth + h * b, _ = innerHeight + h, p = -1 * h, g = h), o = w[i].getBoundingClientRect(), (O = o.bottom) >= p && (L = o.top) <= _ && (I = o.right) >= p * b && (A = o.left) <= z && (O || I || A || L) && (n.loadHidden || W(w[i])) && (u && N < 3 && !f && (m < 3 || B < 4) || G(w[i], h))) {
                                if (J(w[i]), d = !0, N > 9) break
                            } else !d && u && !c && N < 4 && B < 4 && m > 2 && (r[0] || n.preloadAfterLoad) && (r[0] || !f && (O || I || A || L || "auto" != w[i][l](n.sizesAttr))) && (c = r[0] || w[i]);
                            c && !d && J(c)
                        }
                    },
                    X = M(Y),
                    V = function(e) {
                        var t = e.target;
                        t._lazyCache ? delete t._lazyCache : (j(e), y(t, n.loadedClass), b(t, n.loadingClass), w(t, Z), x(t, "lazyloaded"))
                    },
                    U = $(V),
                    Z = function(e) {
                        U({
                            target: e.target
                        })
                    },
                    K = function(e) {
                        var t, i = e[l](n.srcsetAttr);
                        (t = n.customMedia[e[l]("data-media") || e[l]("media")]) && e.setAttribute("media", t), i && e.setAttribute("srcset", i)
                    },
                    Q = $((function(e, t, i, s, a) {
                        var r, o, c, h, u, m;
                        (u = x(e, "lazybeforeunveil", t)).defaultPrevented || (s && (i ? y(e, n.autosizesClass) : e.setAttribute("sizes", s)), o = e[l](n.srcsetAttr), r = e[l](n.srcAttr), a && (h = (c = e.parentNode) && p.test(c.nodeName || "")), m = t.firesLoad || "src" in e && (o || r || h), u = {
                            target: e
                        }, y(e, n.loadingClass), m && (clearTimeout(f), f = d(j, 2500), w(e, Z, !0)), h && g.call(c.getElementsByTagName("source"), K), o ? e.setAttribute("srcset", o) : r && !h && (R.test(e.nodeName) ? function(e, t) {
                            try {
                                e.contentWindow.location.replace(t)
                            } catch (i) {
                                e.src = t
                            }
                        }(e, r) : e.src = r), a && (o || h) && C(e, {
                            src: r
                        })), e._lazyRace && delete e._lazyRace, b(e, n.lazyClass), E((function() {
                            var t = e.complete && e.naturalWidth > 1;
                            m && !t || (t && y(e, "ls-is-cached"), V(u), e._lazyCache = !0, d((function() {
                                "_lazyCache" in e && delete e._lazyCache
                            }), 9)), "lazy" == e.loading && N--
                        }), !0)
                    })),
                    J = function(e) {
                        if (!e._lazyRace) {
                            var t, i = H.test(e.nodeName),
                                s = i && (e[l](n.sizesAttr) || e[l]("sizes")),
                                a = "auto" == s;
                            (!a && u || !i || !e[l]("src") && !e.srcset || e.complete || v(e, n.errorClass) || !v(e, n.lazyClass)) && (t = x(e, "lazyunveilread").detail, a && k.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, N++, Q(e, t, a, s, i))
                        }
                    },
                    ee = P((function() {
                        n.loadMode = 3, X()
                    })),
                    te = function() {
                        3 == n.loadMode && (n.loadMode = 2), ee()
                    },
                    ie = function() {
                        if (!u) {
                            if (i.now() - T < 999) return void d(ie, 999);
                            u = !0, n.loadMode = 3, X(), c("scroll", te, !0)
                        }
                    };
                return {
                    _: function() {
                        T = i.now(), s.elements = t.getElementsByClassName(n.lazyClass), r = t.getElementsByClassName(n.lazyClass + " " + n.preloadClass), c("scroll", X, !0), c("resize", X, !0), c("pageshow", (function(e) {
                            if (e.persisted) {
                                var i = t.querySelectorAll("." + n.loadingClass);
                                i.length && i.forEach && h((function() {
                                    i.forEach((function(e) {
                                        e.complete && J(e)
                                    }))
                                }))
                            }
                        })), e.MutationObserver ? new MutationObserver(X).observe(a, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (a[o]("DOMNodeInserted", X, !0), a[o]("DOMAttrModified", X, !0), setInterval(X, 999)), c("hashchange", X, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach((function(e) {
                            t[o](e, X, !0)
                        })), /d$|^c/.test(t.readyState) ? ie() : (c("load", ie), t[o]("DOMContentLoaded", X), d(ie, 2e4)), s.elements.length ? (Y(), E._lsFlush()) : X()
                    },
                    checkElems: X,
                    unveil: J,
                    _aLSL: te
                }
            }(),
            k = function() {
                var e, i = $((function(e, t, i, s) {
                        var n, a, r;
                        if (e._lazysizesWidth = s, s += "px", e.setAttribute("sizes", s), p.test(t.nodeName || ""))
                            for (a = 0, r = (n = t.getElementsByTagName("source")).length; a < r; a++) n[a].setAttribute("sizes", s);
                        i.detail.dataAttr || C(e, i.detail)
                    })),
                    s = function(e, t, s) {
                        var n, a = e.parentNode;
                        a && (s = T(e, a, s), (n = x(e, "lazybeforesizes", {
                            width: s,
                            dataAttr: !!t
                        })).defaultPrevented || (s = n.detail.width) && s !== e._lazysizesWidth && i(e, a, n, s))
                    },
                    a = P((function() {
                        var t, i = e.length;
                        if (i)
                            for (t = 0; t < i; t++) s(e[t])
                    }));
                return {
                    _: function() {
                        e = t.getElementsByClassName(n.autosizesClass), c("resize", a)
                    },
                    checkElems: a,
                    updateElem: s
                }
            }(),
            _ = function() {
                !_.i && t.getElementsByClassName && (_.i = !0, k._(), z._())
            };
        return d((function() {
            n.init && _()
        })), s = {
            cfg: n,
            autoSizer: k,
            loader: z,
            init: _,
            uP: C,
            aC: y,
            rC: b,
            hC: v,
            fire: x,
            gW: T,
            rAF: E
        }
    }(e, e.document, Date);
    e.lazySizes = i, "object" == typeof module && module.exports && (module.exports = i)
}("undefined" != typeof window ? window : {}),
function(e, t) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], (function(i) {
        return t(e, i)
    })) : "object" == typeof module && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery)
}(window, (function(e, t) {
    "use strict";

    function i(i, a, o) {
        function l(e, t, s) {
            var n, a = "$()." + i + '("' + t + '")';
            return e.each((function(e, l) {
                var c = o.data(l, i);
                if (c) {
                    var d = c[t];
                    if (d && "_" != t.charAt(0)) {
                        var h = d.apply(c, s);
                        n = void 0 === n ? h : n
                    } else r(a + " is not a valid method")
                } else r(i + " not initialized. Cannot call methods, i.e. " + a)
            })), void 0 !== n ? n : e
        }

        function c(e, t) {
            e.each((function(e, s) {
                var n = o.data(s, i);
                n ? (n.option(t), n._init()) : (n = new a(s, t), o.data(s, i, n))
            }))
        }(o = o || t || e.jQuery) && (a.prototype.option || (a.prototype.option = function(e) {
            o.isPlainObject(e) && (this.options = o.extend(!0, this.options, e))
        }), o.fn[i] = function(e) {
            if ("string" == typeof e) {
                var t = n.call(arguments, 1);
                return l(this, e, t)
            }
            return c(this, e), this
        }, s(o))
    }

    function s(e) {
        !e || e && e.bridget || (e.bridget = i)
    }
    var n = Array.prototype.slice,
        a = e.console,
        r = void 0 === a ? function() {} : function(e) {
            a.error(e)
        };
    return s(t || e.jQuery), i
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, (function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                s = i[e] = i[e] || [];
            return -1 == s.indexOf(t) && s.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[e] = i[e] || {})[t] = !0, this
        }
    }, t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var s = i.indexOf(t);
            return -1 != s && i.splice(s, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var s = this._onceEvents && this._onceEvents[e], n = 0; n < i.length; n++) {
                var a = i[n];
                s && s[a] && (this.off(e, a), delete s[a]), a.apply(this, t)
            }
            return this
        }
    }, t.allOff = function() {
        delete this._events, delete this._onceEvents
    }, e
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("get-size/get-size", t) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
}(window, (function() {
    "use strict";

    function e(e) {
        var t = parseFloat(e);
        return -1 == e.indexOf("%") && !isNaN(t) && t
    }

    function t(e) {
        var t = getComputedStyle(e);
        return t || a("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), t
    }

    function i() {
        if (!l) {
            l = !0;
            var i = document.createElement("div");
            i.style.width = "200px", i.style.padding = "1px 2px 3px 4px", i.style.borderStyle = "solid", i.style.borderWidth = "1px 2px 3px 4px", i.style.boxSizing = "border-box";
            var a = document.body || document.documentElement;
            a.appendChild(i);
            var r = t(i);
            n = 200 == Math.round(e(r.width)), s.isBoxSizeOuter = n, a.removeChild(i)
        }
    }

    function s(s) {
        if (i(), "string" == typeof s && (s = document.querySelector(s)), s && "object" == typeof s && s.nodeType) {
            var a = t(s);
            if ("none" == a.display) return function() {
                for (var e = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, t = 0; o > t; t++) {
                    e[r[t]] = 0
                }
                return e
            }();
            var l = {};
            l.width = s.offsetWidth, l.height = s.offsetHeight;
            for (var c = l.isBorderBox = "border-box" == a.boxSizing, d = 0; o > d; d++) {
                var h = r[d],
                    u = a[h],
                    p = parseFloat(u);
                l[h] = isNaN(p) ? 0 : p
            }
            var f = l.paddingLeft + l.paddingRight,
                m = l.paddingTop + l.paddingBottom,
                g = l.marginLeft + l.marginRight,
                v = l.marginTop + l.marginBottom,
                y = l.borderLeftWidth + l.borderRightWidth,
                b = l.borderTopWidth + l.borderBottomWidth,
                w = c && n,
                x = e(a.width);
            !1 !== x && (l.width = x + (w ? 0 : f + y));
            var C = e(a.height);
            return !1 !== C && (l.height = C + (w ? 0 : m + b)), l.innerWidth = l.width - (f + y), l.innerHeight = l.height - (m + b), l.outerWidth = l.width + g, l.outerHeight = l.height + v, l
        }
    }
    var n, a = "undefined" == typeof console ? function() {} : function(e) {
            console.error(e)
        },
        r = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        o = r.length,
        l = !1;
    return s
})),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
}(window, (function() {
    "use strict";
    var e = function() {
        var e = window.Element.prototype;
        if (e.matches) return "matches";
        if (e.matchesSelector) return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], i = 0; i < t.length; i++) {
            var s = t[i] + "MatchesSelector";
            if (e[s]) return s
        }
    }();
    return function(t, i) {
        return t[e](i)
    }
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], (function(i) {
        return t(e, i)
    })) : "object" == typeof module && module.exports ? module.exports = t(e, require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.matchesSelector)
}(window, (function(e, t) {
    var i = {
            extend: function(e, t) {
                for (var i in t) e[i] = t[i];
                return e
            },
            modulo: function(e, t) {
                return (e % t + t) % t
            }
        },
        s = Array.prototype.slice;
    i.makeArray = function(e) {
        return Array.isArray(e) ? e : null == e ? [] : "object" == typeof e && "number" == typeof e.length ? s.call(e) : [e]
    }, i.removeFrom = function(e, t) {
        var i = e.indexOf(t); - 1 != i && e.splice(i, 1)
    }, i.getParent = function(e, i) {
        for (; e.parentNode && e != document.body;)
            if (e = e.parentNode, t(e, i)) return e
    }, i.getQueryElement = function(e) {
        return "string" == typeof e ? document.querySelector(e) : e
    }, i.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, i.filterFindElements = function(e, s) {
        e = i.makeArray(e);
        var n = [];
        return e.forEach((function(e) {
            if (e instanceof HTMLElement) {
                if (!s) return void n.push(e);
                t(e, s) && n.push(e);
                for (var i = e.querySelectorAll(s), a = 0; a < i.length; a++) n.push(i[a])
            }
        })), n
    }, i.debounceMethod = function(e, t, i) {
        i = i || 100;
        var s = e.prototype[t],
            n = t + "Timeout";
        e.prototype[t] = function() {
            var e = this[n];
            clearTimeout(e);
            var t = arguments,
                a = this;
            this[n] = setTimeout((function() {
                s.apply(a, t), delete a[n]
            }), i)
        }
    }, i.docReady = function(e) {
        var t = document.readyState;
        "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
    }, i.toDashed = function(e) {
        return e.replace(/(.)([A-Z])/g, (function(e, t, i) {
            return t + "-" + i
        })).toLowerCase()
    };
    var n = e.console;
    return i.htmlInit = function(t, s) {
        i.docReady((function() {
            var a = i.toDashed(s),
                r = "data-" + a,
                o = document.querySelectorAll("[" + r + "]"),
                l = document.querySelectorAll(".js-" + a),
                c = i.makeArray(o).concat(i.makeArray(l)),
                d = r + "-options",
                h = e.jQuery;
            c.forEach((function(e) {
                var i, a = e.getAttribute(r) || e.getAttribute(d);
                try {
                    i = a && JSON.parse(a)
                } catch (t) {
                    return void(n && n.error("Error parsing " + r + " on " + e.className + ": " + t))
                }
                var o = new t(e, i);
                h && h.data(e, s, o)
            }))
        }))
    }, i
})),
function(e, t) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (e.Outlayer = {}, e.Outlayer.Item = t(e.EvEmitter, e.getSize))
}(window, (function(e, t) {
    "use strict";

    function i(e, t) {
        e && (this.element = e, this.layout = t, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }
    var s = document.documentElement.style,
        n = "string" == typeof s.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
        r = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[n],
        o = {
            transform: a,
            transition: n,
            transitionDuration: n + "Duration",
            transitionProperty: n + "Property",
            transitionDelay: n + "Delay"
        },
        l = i.prototype = Object.create(e.prototype);
    l.constructor = i, l._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, l.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, l.getSize = function() {
        this.size = t(this.element)
    }, l.css = function(e) {
        var t = this.element.style;
        for (var i in e) {
            t[o[i] || i] = e[i]
        }
    }, l.getPosition = function() {
        var e = getComputedStyle(this.element),
            t = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            s = e[t ? "left" : "right"],
            n = e[i ? "top" : "bottom"],
            a = parseFloat(s),
            r = parseFloat(n),
            o = this.layout.size; - 1 != s.indexOf("%") && (a = a / 100 * o.width), -1 != n.indexOf("%") && (r = r / 100 * o.height), a = isNaN(a) ? 0 : a, r = isNaN(r) ? 0 : r, a -= t ? o.paddingLeft : o.paddingRight, r -= i ? o.paddingTop : o.paddingBottom, this.position.x = a, this.position.y = r
    }, l.layoutPosition = function() {
        var e = this.layout.size,
            t = {},
            i = this.layout._getOption("originLeft"),
            s = this.layout._getOption("originTop"),
            n = i ? "paddingLeft" : "paddingRight",
            a = i ? "left" : "right",
            r = i ? "right" : "left",
            o = this.position.x + e[n];
        t[a] = this.getXValue(o), t[r] = "";
        var l = s ? "paddingTop" : "paddingBottom",
            c = s ? "top" : "bottom",
            d = s ? "bottom" : "top",
            h = this.position.y + e[l];
        t[c] = this.getYValue(h), t[d] = "", this.css(t), this.emitEvent("layout", [this])
    }, l.getXValue = function(e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
    }, l.getYValue = function(e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
    }, l._transitionTo = function(e, t) {
        this.getPosition();
        var i = this.position.x,
            s = this.position.y,
            n = e == this.position.x && t == this.position.y;
        if (this.setPosition(e, t), !n || this.isTransitioning) {
            var a = e - i,
                r = t - s,
                o = {};
            o.transform = this.getTranslate(a, r), this.transition({
                to: o,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        } else this.layoutPosition()
    }, l.getTranslate = function(e, t) {
        return "translate3d(" + (e = this.layout._getOption("originLeft") ? e : -e) + "px, " + (t = this.layout._getOption("originTop") ? t : -t) + "px, 0)"
    }, l.goTo = function(e, t) {
        this.setPosition(e, t), this.layoutPosition()
    }, l.moveTo = l._transitionTo, l.setPosition = function(e, t) {
        this.position.x = parseFloat(e), this.position.y = parseFloat(t)
    }, l._nonTransition = function(e) {
        for (var t in this.css(e.to), e.isCleaning && this._removeStyles(e.to), e.onTransitionEnd) e.onTransitionEnd[t].call(this)
    }, l.transition = function(e) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var t = this._transn;
            for (var i in e.onTransitionEnd) t.onEnd[i] = e.onTransitionEnd[i];
            for (i in e.to) t.ingProperties[i] = !0, e.isCleaning && (t.clean[i] = !0);
            if (e.from) {
                this.css(e.from);
                this.element.offsetHeight;
                null
            }
            this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
        } else this._nonTransition(e)
    };
    var c = "opacity," + function(e) {
        return e.replace(/([A-Z])/g, (function(e) {
            return "-" + e.toLowerCase()
        }))
    }(a);
    l.enableTransition = function() {
        if (!this.isTransitioning) {
            var e = this.layout.options.transitionDuration;
            e = "number" == typeof e ? e + "ms" : e, this.css({
                transitionProperty: c,
                transitionDuration: e,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(r, this, !1)
        }
    }, l.onwebkitTransitionEnd = function(e) {
        this.ontransitionend(e)
    }, l.onotransitionend = function(e) {
        this.ontransitionend(e)
    };
    var d = {
        "-webkit-transform": "transform"
    };
    l.ontransitionend = function(e) {
        if (e.target === this.element) {
            var t = this._transn,
                i = d[e.propertyName] || e.propertyName;
            if (delete t.ingProperties[i], function(e) {
                    for (var t in e) return !1;
                    return null, !0
                }(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[i]), i in t.onEnd) t.onEnd[i].call(this), delete t.onEnd[i];
            this.emitEvent("transitionEnd", [this])
        }
    }, l.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(r, this, !1), this.isTransitioning = !1
    }, l._removeStyles = function(e) {
        var t = {};
        for (var i in e) t[i] = "";
        this.css(t)
    };
    var h = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return l.removeTransitionStyles = function() {
        this.css(h)
    }, l.stagger = function(e) {
        e = isNaN(e) ? 0 : e, this.staggerDelay = e + "ms"
    }, l.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, l.remove = function() {
        return n && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", (function() {
            this.removeElem()
        })), void this.hide()) : void this.removeElem()
    }, l.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var e = this.layout.options,
            t = {};
        t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
            from: e.hiddenStyle,
            to: e.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }, l.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, l.getHideRevealTransitionEndProperty = function(e) {
        var t = this.layout.options[e];
        if (t.opacity) return "opacity";
        for (var i in t) return i
    }, l.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var e = this.layout.options,
            t = {};
        t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
            from: e.visibleStyle,
            to: e.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }, l.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, l.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, i
})),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], (function(i, s, n, a) {
        return t(e, i, s, n, a)
    })) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : e.Outlayer = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, e.Outlayer.Item)
}(window, (function(e, t, i, s, n) {
    "use strict";

    function a(e, t) {
        var i = s.getQueryElement(e);
        if (i) {
            this.element = i, l && (this.$element = l(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(t);
            var n = ++d;
            this.element.outlayerGUID = n, h[n] = this, this._create(), this._getOption("initLayout") && this.layout()
        } else o && o.error("Bad element for " + this.constructor.namespace + ": " + (i || e))
    }

    function r(e) {
        function t() {
            e.apply(this, arguments)
        }
        return t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t
    }
    var o = e.console,
        l = e.jQuery,
        c = function() {},
        d = 0,
        h = {};
    a.namespace = "outlayer", a.Item = n, a.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var u = a.prototype;
    s.extend(u, t.prototype), u.option = function(e) {
        s.extend(this.options, e)
    }, u._getOption = function(e) {
        var t = this.constructor.compatOptions[e];
        return t && void 0 !== this.options[t] ? this.options[t] : this.options[e]
    }, a.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, u._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), s.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
    }, u.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, u._itemize = function(e) {
        for (var t = this._filterFindItemElements(e), i = this.constructor.Item, s = [], n = 0; n < t.length; n++) {
            var a = new i(t[n], this);
            s.push(a)
        }
        return s
    }, u._filterFindItemElements = function(e) {
        return s.filterFindElements(e, this.options.itemSelector)
    }, u.getItemElements = function() {
        return this.items.map((function(e) {
            return e.element
        }))
    }, u.layout = function() {
        this._resetLayout(), this._manageStamps();
        var e = this._getOption("layoutInstant"),
            t = void 0 !== e ? e : !this._isLayoutInited;
        this.layoutItems(this.items, t), this._isLayoutInited = !0
    }, u._init = u.layout, u._resetLayout = function() {
        this.getSize()
    }, u.getSize = function() {
        this.size = i(this.element)
    }, u._getMeasurement = function(e, t) {
        var s, n = this.options[e];
        n ? ("string" == typeof n ? s = this.element.querySelector(n) : n instanceof HTMLElement && (s = n), this[e] = s ? i(s)[t] : n) : this[e] = 0
    }, u.layoutItems = function(e, t) {
        e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
    }, u._getItemsForLayout = function(e) {
        return e.filter((function(e) {
            return !e.isIgnored
        }))
    }, u._layoutItems = function(e, t) {
        if (this._emitCompleteOnItems("layout", e), e && e.length) {
            var i = [];
            e.forEach((function(e) {
                var s = this._getItemLayoutPosition(e);
                s.item = e, s.isInstant = t || e.isLayoutInstant, i.push(s)
            }), this), this._processLayoutQueue(i)
        }
    }, u._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, u._processLayoutQueue = function(e) {
        this.updateStagger(), e.forEach((function(e, t) {
            this._positionItem(e.item, e.x, e.y, e.isInstant, t)
        }), this)
    }, u.updateStagger = function() {
        var e = this.options.stagger;
        return null == e ? void(this.stagger = 0) : (this.stagger = function(e) {
            if ("number" == typeof e) return e;
            var t = e.match(/(^\d*\.?\d*)(\w*)/),
                i = t && t[1],
                s = t && t[2];
            return i.length ? (i = parseFloat(i)) * (p[s] || 1) : 0
        }(e), this.stagger)
    }, u._positionItem = function(e, t, i, s, n) {
        s ? e.goTo(t, i) : (e.stagger(n * this.stagger), e.moveTo(t, i))
    }, u._postLayout = function() {
        this.resizeContainer()
    }, u.resizeContainer = function() {
        if (this._getOption("resizeContainer")) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, u._getContainerSize = c, u._setContainerMeasure = function(e, t) {
        if (void 0 !== e) {
            var i = this.size;
            i.isBorderBox && (e += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
        }
    }, u._emitCompleteOnItems = function(e, t) {
        function i() {
            n.dispatchEvent(e + "Complete", null, [t])
        }

        function s() {
            ++r == a && i()
        }
        var n = this,
            a = t.length;
        if (t && a) {
            var r = 0;
            t.forEach((function(t) {
                t.once(e, s)
            }))
        } else i()
    }, u.dispatchEvent = function(e, t, i) {
        var s = t ? [t].concat(i) : i;
        if (this.emitEvent(e, s), l)
            if (this.$element = this.$element || l(this.element), t) {
                var n = l.Event(t);
                n.type = e, this.$element.trigger(n, i)
            } else this.$element.trigger(e, i)
    }, u.ignore = function(e) {
        var t = this.getItem(e);
        t && (t.isIgnored = !0)
    }, u.unignore = function(e) {
        var t = this.getItem(e);
        t && delete t.isIgnored
    }, u.stamp = function(e) {
        (e = this._find(e)) && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this))
    }, u.unstamp = function(e) {
        (e = this._find(e)) && e.forEach((function(e) {
            s.removeFrom(this.stamps, e), this.unignore(e)
        }), this)
    }, u._find = function(e) {
        return e ? ("string" == typeof e && (e = this.element.querySelectorAll(e)), e = s.makeArray(e)) : void 0
    }, u._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, u._getBoundingRect = function() {
        var e = this.element.getBoundingClientRect(),
            t = this.size;
        this._boundingRect = {
            left: e.left + t.paddingLeft + t.borderLeftWidth,
            top: e.top + t.paddingTop + t.borderTopWidth,
            right: e.right - (t.paddingRight + t.borderRightWidth),
            bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
        }
    }, u._manageStamp = c, u._getElementOffset = function(e) {
        var t = e.getBoundingClientRect(),
            s = this._boundingRect,
            n = i(e);
        return {
            left: t.left - s.left - n.marginLeft,
            top: t.top - s.top - n.marginTop,
            right: s.right - t.right - n.marginRight,
            bottom: s.bottom - t.bottom - n.marginBottom
        }
    }, u.handleEvent = s.handleEvent, u.bindResize = function() {
        e.addEventListener("resize", this), this.isResizeBound = !0
    }, u.unbindResize = function() {
        e.removeEventListener("resize", this), this.isResizeBound = !1
    }, u.onresize = function() {
        this.resize()
    }, s.debounceMethod(a, "onresize", 100), u.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, u.needsResizeLayout = function() {
        var e = i(this.element);
        return this.size && e && e.innerWidth !== this.size.innerWidth
    }, u.addItems = function(e) {
        var t = this._itemize(e);
        return t.length && (this.items = this.items.concat(t)), t
    }, u.appended = function(e) {
        var t = this.addItems(e);
        t.length && (this.layoutItems(t, !0), this.reveal(t))
    }, u.prepended = function(e) {
        var t = this._itemize(e);
        if (t.length) {
            var i = this.items.slice(0);
            this.items = t.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i)
        }
    }, u.reveal = function(e) {
        if (this._emitCompleteOnItems("reveal", e), e && e.length) {
            var t = this.updateStagger();
            e.forEach((function(e, i) {
                e.stagger(i * t), e.reveal()
            }))
        }
    }, u.hide = function(e) {
        if (this._emitCompleteOnItems("hide", e), e && e.length) {
            var t = this.updateStagger();
            e.forEach((function(e, i) {
                e.stagger(i * t), e.hide()
            }))
        }
    }, u.revealItemElements = function(e) {
        var t = this.getItems(e);
        this.reveal(t)
    }, u.hideItemElements = function(e) {
        var t = this.getItems(e);
        this.hide(t)
    }, u.getItem = function(e) {
        for (var t = 0; t < this.items.length; t++) {
            var i = this.items[t];
            if (i.element == e) return i
        }
    }, u.getItems = function(e) {
        e = s.makeArray(e);
        var t = [];
        return e.forEach((function(e) {
            var i = this.getItem(e);
            i && t.push(i)
        }), this), t
    }, u.remove = function(e) {
        var t = this.getItems(e);
        this._emitCompleteOnItems("remove", t), t && t.length && t.forEach((function(e) {
            e.remove(), s.removeFrom(this.items, e)
        }), this)
    }, u.destroy = function() {
        var e = this.element.style;
        e.height = "", e.position = "", e.width = "", this.items.forEach((function(e) {
            e.destroy()
        })), this.unbindResize();
        var t = this.element.outlayerGUID;
        delete h[t], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
    }, a.data = function(e) {
        var t = (e = s.getQueryElement(e)) && e.outlayerGUID;
        return t && h[t]
    }, a.create = function(e, t) {
        var i = r(a);
        return i.defaults = s.extend({}, a.defaults), s.extend(i.defaults, t), i.compatOptions = s.extend({}, a.compatOptions), i.namespace = e, i.data = a.data, i.Item = r(n), s.htmlInit(i, e), l && l.bridget && l.bridget(e, i), i
    };
    var p = {
        ms: 1,
        s: 1e3
    };
    return a.Item = n, a
})),
function(e, t) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : e.Masonry = t(e.Outlayer, e.getSize)
}(window, (function(e, t) {
    var i = e.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var s = i.prototype;
    return s._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var e = 0; e < this.cols; e++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, s.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var e = this.items[0],
                i = e && e.element;
            this.columnWidth = i && t(i).outerWidth || this.containerWidth
        }
        var s = this.columnWidth += this.gutter,
            n = this.containerWidth + this.gutter,
            a = n / s,
            r = s - n % s;
        a = Math[r && 1 > r ? "round" : "floor"](a), this.cols = Math.max(a, 1)
    }, s.getContainerWidth = function() {
        var e = this._getOption("fitWidth") ? this.element.parentNode : this.element,
            i = t(e);
        this.containerWidth = i && i.innerWidth
    }, s._getItemLayoutPosition = function(e) {
        e.getSize();
        var t = e.size.outerWidth % this.columnWidth,
            i = Math[t && 1 > t ? "round" : "ceil"](e.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols);
        for (var s = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, e), n = {
                x: this.columnWidth * s.col,
                y: s.y
            }, a = s.y + e.size.outerHeight, r = i + s.col, o = s.col; r > o; o++) this.colYs[o] = a;
        return n
    }, s._getTopColPosition = function(e) {
        var t = this._getTopColGroup(e),
            i = Math.min.apply(Math, t);
        return {
            col: t.indexOf(i),
            y: i
        }
    }, s._getTopColGroup = function(e) {
        if (2 > e) return this.colYs;
        for (var t = [], i = this.cols + 1 - e, s = 0; i > s; s++) t[s] = this._getColGroupY(s, e);
        return t
    }, s._getColGroupY = function(e, t) {
        if (2 > t) return this.colYs[e];
        var i = this.colYs.slice(e, e + t);
        return Math.max.apply(Math, i)
    }, s._getHorizontalColPosition = function(e, t) {
        var i = this.horizontalColIndex % this.cols;
        i = e > 1 && i + e > this.cols ? 0 : i;
        var s = t.size.outerWidth && t.size.outerHeight;
        return this.horizontalColIndex = s ? i + e : this.horizontalColIndex, {
            col: i,
            y: this._getColGroupY(i, e)
        }
    }, s._manageStamp = function(e) {
        var i = t(e),
            s = this._getElementOffset(e),
            n = this._getOption("originLeft") ? s.left : s.right,
            a = n + i.outerWidth,
            r = Math.floor(n / this.columnWidth);
        r = Math.max(0, r);
        var o = Math.floor(a / this.columnWidth);
        o -= a % this.columnWidth ? 0 : 1, o = Math.min(this.cols - 1, o);
        for (var l = (this._getOption("originTop") ? s.top : s.bottom) + i.outerHeight, c = r; o >= c; c++) this.colYs[c] = Math.max(l, this.colYs[c])
    }, s._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var e = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e
    }, s._getContainerFitWidth = function() {
        for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
        return (this.cols - e) * this.columnWidth - this.gutter
    }, s.needsResizeLayout = function() {
        var e = this.containerWidth;
        return this.getContainerWidth(), e != this.containerWidth
    }, i
})),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function(t, i) {
        return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(i), i
    } : e(jQuery)
}((function(e) {
    var t = function() {
            if (e && e.fn && e.fn.select2 && e.fn.select2.amd) var t = e.fn.select2.amd;
            var i, s, n, a, r, o, l, c, d, h, u, p, f, m, g;

            function v(e, t) {
                return f.call(e, t)
            }

            function y(e, t) {
                var i, s, n, a, r, o, l, c, d, h, p, f = t && t.split("/"),
                    m = u.map,
                    v = m && m["*"] || {};
                if (e) {
                    for (r = (e = e.split("/")).length - 1, u.nodeIdCompat && g.test(e[r]) && (e[r] = e[r].replace(g, "")), "." === e[0].charAt(0) && f && (e = f.slice(0, f.length - 1).concat(e)), d = 0; d < e.length; d++)
                        if ("." === (p = e[d])) e.splice(d, 1), d -= 1;
                        else if (".." === p) {
                        if (0 === d || 1 === d && ".." === e[2] || ".." === e[d - 1]) continue;
                        0 < d && (e.splice(d - 1, 2), d -= 2)
                    }
                    e = e.join("/")
                }
                if ((f || v) && m) {
                    for (d = (i = e.split("/")).length; 0 < d; d -= 1) {
                        if (s = i.slice(0, d).join("/"), f)
                            for (h = f.length; 0 < h; h -= 1)
                                if (n = (n = m[f.slice(0, h).join("/")]) && n[s]) {
                                    a = n, o = d;
                                    break
                                }
                        if (a) break;
                        !l && v && v[s] && (l = v[s], c = d)
                    }!a && l && (a = l, o = c), a && (i.splice(0, o, a), e = i.join("/"))
                }
                return e
            }

            function b(e, t) {
                return function() {
                    var i = m.call(arguments, 0);
                    return "string" != typeof i[0] && 1 === i.length && i.push(null), o.apply(a, i.concat([e, t]))
                }
            }

            function w(e) {
                return function(t) {
                    d[e] = t
                }
            }

            function x(e) {
                if (v(h, e)) {
                    var t = h[e];
                    delete h[e], p[e] = !0, r.apply(a, t)
                }
                if (!v(d, e) && !v(p, e)) throw new Error("No " + e);
                return d[e]
            }

            function C(e) {
                var t, i = e ? e.indexOf("!") : -1;
                return -1 < i && (t = e.substring(0, i), e = e.substring(i + 1, e.length)), [t, e]
            }

            function S(e) {
                return e ? C(e) : []
            }
            return t && t.requirejs || (t ? s = t : t = {}, d = {}, h = {}, u = {}, p = {}, f = Object.prototype.hasOwnProperty, m = [].slice, g = /\.js$/, l = function(e, t) {
                var i, s = C(e),
                    n = s[0],
                    a = t[1];
                return e = s[1], n && (i = x(n = y(n, a))), n ? e = i && i.normalize ? i.normalize(e, function(e) {
                    return function(t) {
                        return y(t, e)
                    }
                }(a)) : y(e, a) : (n = (s = C(e = y(e, a)))[0], e = s[1], n && (i = x(n))), {
                    f: n ? n + "!" + e : e,
                    n: e,
                    pr: n,
                    p: i
                }
            }, c = {
                require: function(e) {
                    return b(e)
                },
                exports: function(e) {
                    var t = d[e];
                    return void 0 !== t ? t : d[e] = {}
                },
                module: function(e) {
                    return {
                        id: e,
                        uri: "",
                        exports: d[e],
                        config: function(e) {
                            return function() {
                                return u && u.config && u.config[e] || {}
                            }
                        }(e)
                    }
                }
            }, r = function(e, t, i, s) {
                var n, r, o, u, f, m, g, y = [],
                    C = typeof i;
                if (m = S(s = s || e), "undefined" == C || "function" == C) {
                    for (t = !t.length && i.length ? ["require", "exports", "module"] : t, f = 0; f < t.length; f += 1)
                        if ("require" === (r = (u = l(t[f], m)).f)) y[f] = c.require(e);
                        else if ("exports" === r) y[f] = c.exports(e), g = !0;
                    else if ("module" === r) n = y[f] = c.module(e);
                    else if (v(d, r) || v(h, r) || v(p, r)) y[f] = x(r);
                    else {
                        if (!u.p) throw new Error(e + " missing " + r);
                        u.p.load(u.n, b(s, !0), w(r), {}), y[f] = d[r]
                    }
                    o = i ? i.apply(d[e], y) : void 0, e && (n && n.exports !== a && n.exports !== d[e] ? d[e] = n.exports : o === a && g || (d[e] = o))
                } else e && (d[e] = i)
            }, i = s = o = function(e, t, i, s, n) {
                if ("string" == typeof e) return c[e] ? c[e](t) : x(l(e, S(t)).f);
                if (!e.splice) {
                    if ((u = e).deps && o(u.deps, u.callback), !t) return;
                    t.splice ? (e = t, t = i, i = null) : e = a
                }
                return t = t || function() {}, "function" == typeof i && (i = s, s = n), s ? r(a, e, t, i) : setTimeout((function() {
                    r(a, e, t, i)
                }), 4), o
            }, o.config = function(e) {
                return o(e)
            }, i._defined = d, (n = function(e, t, i) {
                if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                t.splice || (i = t, t = []), v(d, e) || v(h, e) || (h[e] = [e, t, i])
            }).amd = {
                jQuery: !0
            }, t.requirejs = i, t.require = s, t.define = n), t.define("almond", (function() {})), t.define("jquery", [], (function() {
                var t = e || $;
                return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
            })), t.define("select2/utils", ["jquery"], (function(e) {
                var t = {};

                function i(e) {
                    var t = e.prototype,
                        i = [];
                    for (var s in t) "function" == typeof t[s] && "constructor" !== s && i.push(s);
                    return i
                }

                function s() {
                    this.listeners = {}
                }
                t.Extend = function(e, t) {
                    var i = {}.hasOwnProperty;

                    function s() {
                        this.constructor = e
                    }
                    for (var n in t) i.call(t, n) && (e[n] = t[n]);
                    return s.prototype = t.prototype, e.prototype = new s, e.__super__ = t.prototype, e
                }, t.Decorate = function(e, t) {
                    var s = i(t),
                        n = i(e);

                    function a() {
                        var i = Array.prototype.unshift,
                            s = t.prototype.constructor.length,
                            n = e.prototype.constructor;
                        0 < s && (i.call(arguments, e.prototype.constructor), n = t.prototype.constructor), n.apply(this, arguments)
                    }
                    t.displayName = e.displayName, a.prototype = new function() {
                        this.constructor = a
                    };
                    for (var r = 0; r < n.length; r++) {
                        var o = n[r];
                        a.prototype[o] = e.prototype[o]
                    }

                    function l(e) {
                        var i = function() {};
                        e in a.prototype && (i = a.prototype[e]);
                        var s = t.prototype[e];
                        return function() {
                            return Array.prototype.unshift.call(arguments, i), s.apply(this, arguments)
                        }
                    }
                    for (var c = 0; c < s.length; c++) {
                        var d = s[c];
                        a.prototype[d] = l(d)
                    }
                    return a
                }, s.prototype.on = function(e, t) {
                    this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
                }, s.prototype.trigger = function(e) {
                    var t = Array.prototype.slice,
                        i = t.call(arguments, 1);
                    this.listeners = this.listeners || {}, null == i && (i = []), 0 === i.length && i.push({}), (i[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                }, s.prototype.invoke = function(e, t) {
                    for (var i = 0, s = e.length; i < s; i++) e[i].apply(this, t)
                }, t.Observable = s, t.generateChars = function(e) {
                    for (var t = "", i = 0; i < e; i++) t += Math.floor(36 * Math.random()).toString(36);
                    return t
                }, t.bind = function(e, t) {
                    return function() {
                        e.apply(t, arguments)
                    }
                }, t._convertData = function(e) {
                    for (var t in e) {
                        var i = t.split("-"),
                            s = e;
                        if (1 !== i.length) {
                            for (var n = 0; n < i.length; n++) {
                                var a = i[n];
                                (a = a.substring(0, 1).toLowerCase() + a.substring(1)) in s || (s[a] = {}), n == i.length - 1 && (s[a] = e[t]), s = s[a]
                            }
                            delete e[t]
                        }
                    }
                    return e
                }, t.hasScroll = function(t, i) {
                    var s = e(i),
                        n = i.style.overflowX,
                        a = i.style.overflowY;
                    return (n !== a || "hidden" !== a && "visible" !== a) && ("scroll" === n || "scroll" === a || s.innerHeight() < i.scrollHeight || s.innerWidth() < i.scrollWidth)
                }, t.escapeMarkup = function(e) {
                    var t = {
                        "\\": "&#92;",
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#47;"
                    };
                    return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, (function(e) {
                        return t[e]
                    }))
                }, t.appendMany = function(t, i) {
                    if ("1.7" === e.fn.jquery.substr(0, 3)) {
                        var s = e();
                        e.map(i, (function(e) {
                            s = s.add(e)
                        })), i = s
                    }
                    t.append(i)
                }, t.__cache = {};
                var n = 0;
                return t.GetUniqueElementId = function(e) {
                    var t = e.getAttribute("data-select2-id");
                    return null == t && (e.id ? (t = e.id, e.setAttribute("data-select2-id", t)) : (e.setAttribute("data-select2-id", ++n), t = n.toString())), t
                }, t.StoreData = function(e, i, s) {
                    var n = t.GetUniqueElementId(e);
                    t.__cache[n] || (t.__cache[n] = {}), t.__cache[n][i] = s
                }, t.GetData = function(i, s) {
                    var n = t.GetUniqueElementId(i);
                    return s ? t.__cache[n] && null != t.__cache[n][s] ? t.__cache[n][s] : e(i).data(s) : t.__cache[n]
                }, t.RemoveData = function(e) {
                    var i = t.GetUniqueElementId(e);
                    null != t.__cache[i] && delete t.__cache[i], e.removeAttribute("data-select2-id")
                }, t
            })), t.define("select2/results", ["jquery", "./utils"], (function(e, t) {
                function i(e, t, s) {
                    this.$element = e, this.data = s, this.options = t, i.__super__.constructor.call(this)
                }
                return t.Extend(i, t.Observable), i.prototype.render = function() {
                    var t = e('<ul class="select2-results__options" role="listbox"></ul>');
                    return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t
                }, i.prototype.clear = function() {
                    this.$results.empty()
                }, i.prototype.displayMessage = function(t) {
                    var i = this.options.get("escapeMarkup");
                    this.clear(), this.hideLoading();
                    var s = e('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),
                        n = this.options.get("translations").get(t.message);
                    s.append(i(n(t.args))), s[0].className += " select2-results__message", this.$results.append(s)
                }, i.prototype.hideMessages = function() {
                    this.$results.find(".select2-results__message").remove()
                }, i.prototype.append = function(e) {
                    this.hideLoading();
                    var t = [];
                    if (null != e.results && 0 !== e.results.length) {
                        e.results = this.sort(e.results);
                        for (var i = 0; i < e.results.length; i++) {
                            var s = e.results[i],
                                n = this.option(s);
                            t.push(n)
                        }
                        this.$results.append(t)
                    } else 0 === this.$results.children().length && this.trigger("results:message", {
                        message: "noResults"
                    })
                }, i.prototype.position = function(e, t) {
                    t.find(".select2-results").append(e)
                }, i.prototype.sort = function(e) {
                    return this.options.get("sorter")(e)
                }, i.prototype.highlightFirstItem = function() {
                    var e = this.$results.find(".select2-results__option[aria-selected]"),
                        t = e.filter("[aria-selected=true]");
                    0 < t.length ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
                }, i.prototype.setClasses = function() {
                    var i = this;
                    this.data.current((function(s) {
                        var n = e.map(s, (function(e) {
                            return e.id.toString()
                        }));
                        i.$results.find(".select2-results__option[aria-selected]").each((function() {
                            var i = e(this),
                                s = t.GetData(this, "data"),
                                a = "" + s.id;
                            null != s.element && s.element.selected || null == s.element && -1 < e.inArray(a, n) ? i.attr("aria-selected", "true") : i.attr("aria-selected", "false")
                        }))
                    }))
                }, i.prototype.showLoading = function(e) {
                    this.hideLoading();
                    var t = {
                            disabled: !0,
                            loading: !0,
                            text: this.options.get("translations").get("searching")(e)
                        },
                        i = this.option(t);
                    i.className += " loading-results", this.$results.prepend(i)
                }, i.prototype.hideLoading = function() {
                    this.$results.find(".loading-results").remove()
                }, i.prototype.option = function(i) {
                    var s = document.createElement("li");
                    s.className = "select2-results__option";
                    var n = {
                            role: "option",
                            "aria-selected": "false"
                        },
                        a = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
                    for (var r in (null != i.element && a.call(i.element, ":disabled") || null == i.element && i.disabled) && (delete n["aria-selected"], n["aria-disabled"] = "true"), null == i.id && delete n["aria-selected"], null != i._resultId && (s.id = i._resultId), i.title && (s.title = i.title), i.children && (n.role = "group", n["aria-label"] = i.text, delete n["aria-selected"]), n) {
                        var o = n[r];
                        s.setAttribute(r, o)
                    }
                    if (i.children) {
                        var l = e(s),
                            c = document.createElement("strong");
                        c.className = "select2-results__group", e(c), this.template(i, c);
                        for (var d = [], h = 0; h < i.children.length; h++) {
                            var u = i.children[h],
                                p = this.option(u);
                            d.push(p)
                        }
                        var f = e("<ul></ul>", {
                            class: "select2-results__options select2-results__options--nested"
                        });
                        f.append(d), l.append(c), l.append(f)
                    } else this.template(i, s);
                    return t.StoreData(s, "data", i), s
                }, i.prototype.bind = function(i, s) {
                    var n = this,
                        a = i.id + "-results";
                    this.$results.attr("id", a), i.on("results:all", (function(e) {
                        n.clear(), n.append(e.data), i.isOpen() && (n.setClasses(), n.highlightFirstItem())
                    })), i.on("results:append", (function(e) {
                        n.append(e.data), i.isOpen() && n.setClasses()
                    })), i.on("query", (function(e) {
                        n.hideMessages(), n.showLoading(e)
                    })), i.on("select", (function() {
                        i.isOpen() && (n.setClasses(), n.options.get("scrollAfterSelect") && n.highlightFirstItem())
                    })), i.on("unselect", (function() {
                        i.isOpen() && (n.setClasses(), n.options.get("scrollAfterSelect") && n.highlightFirstItem())
                    })), i.on("open", (function() {
                        n.$results.attr("aria-expanded", "true"), n.$results.attr("aria-hidden", "false"), n.setClasses(), n.ensureHighlightVisible()
                    })), i.on("close", (function() {
                        n.$results.attr("aria-expanded", "false"), n.$results.attr("aria-hidden", "true"), n.$results.removeAttr("aria-activedescendant")
                    })), i.on("results:toggle", (function() {
                        var e = n.getHighlightedResults();
                        0 !== e.length && e.trigger("mouseup")
                    })), i.on("results:select", (function() {
                        var e = n.getHighlightedResults();
                        if (0 !== e.length) {
                            var i = t.GetData(e[0], "data");
                            "true" == e.attr("aria-selected") ? n.trigger("close", {}) : n.trigger("select", {
                                data: i
                            })
                        }
                    })), i.on("results:previous", (function() {
                        var e = n.getHighlightedResults(),
                            t = n.$results.find("[aria-selected]"),
                            i = t.index(e);
                        if (!(i <= 0)) {
                            var s = i - 1;
                            0 === e.length && (s = 0);
                            var a = t.eq(s);
                            a.trigger("mouseenter");
                            var r = n.$results.offset().top,
                                o = a.offset().top,
                                l = n.$results.scrollTop() + (o - r);
                            0 === s ? n.$results.scrollTop(0) : o - r < 0 && n.$results.scrollTop(l)
                        }
                    })), i.on("results:next", (function() {
                        var e = n.getHighlightedResults(),
                            t = n.$results.find("[aria-selected]"),
                            i = t.index(e) + 1;
                        if (!(i >= t.length)) {
                            var s = t.eq(i);
                            s.trigger("mouseenter");
                            var a = n.$results.offset().top + n.$results.outerHeight(!1),
                                r = s.offset().top + s.outerHeight(!1),
                                o = n.$results.scrollTop() + r - a;
                            0 === i ? n.$results.scrollTop(0) : a < r && n.$results.scrollTop(o)
                        }
                    })), i.on("results:focus", (function(e) {
                        e.element.addClass("select2-results__option--highlighted")
                    })), i.on("results:message", (function(e) {
                        n.displayMessage(e)
                    })), e.fn.mousewheel && this.$results.on("mousewheel", (function(e) {
                        var t = n.$results.scrollTop(),
                            i = n.$results.get(0).scrollHeight - t + e.deltaY,
                            s = 0 < e.deltaY && t - e.deltaY <= 0,
                            a = e.deltaY < 0 && i <= n.$results.height();
                        s ? (n.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : a && (n.$results.scrollTop(n.$results.get(0).scrollHeight - n.$results.height()), e.preventDefault(), e.stopPropagation())
                    })), this.$results.on("mouseup", ".select2-results__option[aria-selected]", (function(i) {
                        var s = e(this),
                            a = t.GetData(this, "data");
                        "true" !== s.attr("aria-selected") ? n.trigger("select", {
                            originalEvent: i,
                            data: a
                        }) : n.options.get("multiple") ? n.trigger("unselect", {
                            originalEvent: i,
                            data: a
                        }) : n.trigger("close", {})
                    })), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", (function(i) {
                        var s = t.GetData(this, "data");
                        n.getHighlightedResults().removeClass("select2-results__option--highlighted"), n.trigger("results:focus", {
                            data: s,
                            element: e(this)
                        })
                    }))
                }, i.prototype.getHighlightedResults = function() {
                    return this.$results.find(".select2-results__option--highlighted")
                }, i.prototype.destroy = function() {
                    this.$results.remove()
                }, i.prototype.ensureHighlightVisible = function() {
                    var e = this.getHighlightedResults();
                    if (0 !== e.length) {
                        var t = this.$results.find("[aria-selected]").index(e),
                            i = this.$results.offset().top,
                            s = e.offset().top,
                            n = this.$results.scrollTop() + (s - i),
                            a = s - i;
                        n -= 2 * e.outerHeight(!1), t <= 2 ? this.$results.scrollTop(0) : (a > this.$results.outerHeight() || a < 0) && this.$results.scrollTop(n)
                    }
                }, i.prototype.template = function(t, i) {
                    var s = this.options.get("templateResult"),
                        n = this.options.get("escapeMarkup"),
                        a = s(t, i);
                    null == a ? i.style.display = "none" : "string" == typeof a ? i.innerHTML = n(a) : e(i).append(a)
                }, i
            })), t.define("select2/keys", [], (function() {
                return {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    DELETE: 46
                }
            })), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], (function(e, t, i) {
                function s(e, t) {
                    this.$element = e, this.options = t, s.__super__.constructor.call(this)
                }
                return t.Extend(s, t.Observable), s.prototype.render = function() {
                    var i = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                    return this._tabindex = 0, null != t.GetData(this.$element[0], "old-tabindex") ? this._tabindex = t.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), i.attr("title", this.$element.attr("title")), i.attr("tabindex", this._tabindex), i.attr("aria-disabled", "false"), this.$selection = i
                }, s.prototype.bind = function(e, t) {
                    var s = this,
                        n = e.id + "-results";
                    this.container = e, this.$selection.on("focus", (function(e) {
                        s.trigger("focus", e)
                    })), this.$selection.on("blur", (function(e) {
                        s._handleBlur(e)
                    })), this.$selection.on("keydown", (function(e) {
                        s.trigger("keypress", e), e.which === i.SPACE && e.preventDefault()
                    })), e.on("results:focus", (function(e) {
                        s.$selection.attr("aria-activedescendant", e.data._resultId)
                    })), e.on("selection:update", (function(e) {
                        s.update(e.data)
                    })), e.on("open", (function() {
                        s.$selection.attr("aria-expanded", "true"), s.$selection.attr("aria-owns", n), s._attachCloseHandler(e)
                    })), e.on("close", (function() {
                        s.$selection.attr("aria-expanded", "false"), s.$selection.removeAttr("aria-activedescendant"), s.$selection.removeAttr("aria-owns"), s.$selection.trigger("focus"), s._detachCloseHandler(e)
                    })), e.on("enable", (function() {
                        s.$selection.attr("tabindex", s._tabindex), s.$selection.attr("aria-disabled", "false")
                    })), e.on("disable", (function() {
                        s.$selection.attr("tabindex", "-1"), s.$selection.attr("aria-disabled", "true")
                    }))
                }, s.prototype._handleBlur = function(t) {
                    var i = this;
                    window.setTimeout((function() {
                        document.activeElement == i.$selection[0] || e.contains(i.$selection[0], document.activeElement) || i.trigger("blur", t)
                    }), 1)
                }, s.prototype._attachCloseHandler = function(i) {
                    e(document.body).on("mousedown.select2." + i.id, (function(i) {
                        var s = e(i.target).closest(".select2");
                        e(".select2.select2-container--open").each((function() {
                            this != s[0] && t.GetData(this, "element").select2("close")
                        }))
                    }))
                }, s.prototype._detachCloseHandler = function(t) {
                    e(document.body).off("mousedown.select2." + t.id)
                }, s.prototype.position = function(e, t) {
                    t.find(".selection").append(e)
                }, s.prototype.destroy = function() {
                    this._detachCloseHandler(this.container)
                }, s.prototype.update = function(e) {
                    throw new Error("The `update` method must be defined in child classes.")
                }, s
            })), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], (function(e, t, i, s) {
                function n() {
                    n.__super__.constructor.apply(this, arguments)
                }
                return i.Extend(n, t), n.prototype.render = function() {
                    var e = n.__super__.render.call(this);
                    return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
                }, n.prototype.bind = function(e, t) {
                    var i = this;
                    n.__super__.bind.apply(this, arguments);
                    var s = e.id + "-container";
                    this.$selection.find(".select2-selection__rendered").attr("id", s).attr("role", "textbox").attr("aria-readonly", "true"), this.$selection.attr("aria-labelledby", s), this.$selection.on("mousedown", (function(e) {
                        1 === e.which && i.trigger("toggle", {
                            originalEvent: e
                        })
                    })), this.$selection.on("focus", (function(e) {})), this.$selection.on("blur", (function(e) {})), e.on("focus", (function(t) {
                        e.isOpen() || i.$selection.trigger("focus")
                    }))
                }, n.prototype.clear = function() {
                    var e = this.$selection.find(".select2-selection__rendered");
                    e.empty(), e.removeAttr("title")
                }, n.prototype.display = function(e, t) {
                    var i = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(i(e, t))
                }, n.prototype.selectionContainer = function() {
                    return e("<span></span>")
                }, n.prototype.update = function(e) {
                    if (0 !== e.length) {
                        var t = e[0],
                            i = this.$selection.find(".select2-selection__rendered"),
                            s = this.display(t, i);
                        i.empty().append(s);
                        var n = t.title || t.text;
                        n ? i.attr("title", n) : i.removeAttr("title")
                    } else this.clear()
                }, n
            })), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], (function(e, t, i) {
                function s(e, t) {
                    s.__super__.constructor.apply(this, arguments)
                }
                return i.Extend(s, t), s.prototype.render = function() {
                    var e = s.__super__.render.call(this);
                    return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
                }, s.prototype.bind = function(t, n) {
                    var a = this;
                    s.__super__.bind.apply(this, arguments), this.$selection.on("click", (function(e) {
                        a.trigger("toggle", {
                            originalEvent: e
                        })
                    })), this.$selection.on("click", ".select2-selection__choice__remove", (function(t) {
                        if (!a.options.get("disabled")) {
                            var s = e(this).parent(),
                                n = i.GetData(s[0], "data");
                            a.trigger("unselect", {
                                originalEvent: t,
                                data: n
                            })
                        }
                    }))
                }, s.prototype.clear = function() {
                    var e = this.$selection.find(".select2-selection__rendered");
                    e.empty(), e.removeAttr("title")
                }, s.prototype.display = function(e, t) {
                    var i = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(i(e, t))
                }, s.prototype.selectionContainer = function() {
                    return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
                }, s.prototype.update = function(e) {
                    if (this.clear(), 0 !== e.length) {
                        for (var t = [], s = 0; s < e.length; s++) {
                            var n = e[s],
                                a = this.selectionContainer(),
                                r = this.display(n, a);
                            a.append(r);
                            var o = n.title || n.text;
                            o && a.attr("title", o), i.StoreData(a[0], "data", n), t.push(a)
                        }
                        var l = this.$selection.find(".select2-selection__rendered");
                        i.appendMany(l, t)
                    }
                }, s
            })), t.define("select2/selection/placeholder", ["../utils"], (function(e) {
                function t(e, t, i) {
                    this.placeholder = this.normalizePlaceholder(i.get("placeholder")), e.call(this, t, i)
                }
                return t.prototype.normalizePlaceholder = function(e, t) {
                    return "string" == typeof t && (t = {
                        id: "",
                        text: t
                    }), t
                }, t.prototype.createPlaceholder = function(e, t) {
                    var i = this.selectionContainer();
                    return i.html(this.display(t)), i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), i
                }, t.prototype.update = function(e, t) {
                    var i = 1 == t.length && t[0].id != this.placeholder.id;
                    if (1 < t.length || i) return e.call(this, t);
                    this.clear();
                    var s = this.createPlaceholder(this.placeholder);
                    this.$selection.find(".select2-selection__rendered").append(s)
                }, t
            })), t.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], (function(e, t, i) {
                function s() {}
                return s.prototype.bind = function(e, t, i) {
                    var s = this;
                    e.call(this, t, i), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", (function(e) {
                        s._handleClear(e)
                    })), t.on("keypress", (function(e) {
                        s._handleKeyboardClear(e, t)
                    }))
                }, s.prototype._handleClear = function(e, t) {
                    if (!this.options.get("disabled")) {
                        var s = this.$selection.find(".select2-selection__clear");
                        if (0 !== s.length) {
                            t.stopPropagation();
                            var n = i.GetData(s[0], "data"),
                                a = this.$element.val();
                            this.$element.val(this.placeholder.id);
                            var r = {
                                data: n
                            };
                            if (this.trigger("clear", r), r.prevented) this.$element.val(a);
                            else {
                                for (var o = 0; o < n.length; o++)
                                    if (r = {
                                            data: n[o]
                                        }, this.trigger("unselect", r), r.prevented) return void this.$element.val(a);
                                this.$element.trigger("change"), this.trigger("toggle", {})
                            }
                        }
                    }
                }, s.prototype._handleKeyboardClear = function(e, i, s) {
                    s.isOpen() || i.which != t.DELETE && i.which != t.BACKSPACE || this._handleClear(i)
                }, s.prototype.update = function(t, s) {
                    if (t.call(this, s), !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === s.length)) {
                        var n = this.options.get("translations").get("removeAllItems"),
                            a = e('<span class="select2-selection__clear" title="' + n() + '">&times;</span>');
                        i.StoreData(a[0], "data", s), this.$selection.find(".select2-selection__rendered").prepend(a)
                    }
                }, s
            })), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], (function(e, t, i) {
                function s(e, t, i) {
                    e.call(this, t, i)
                }
                return s.prototype.render = function(t) {
                    var i = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');
                    this.$searchContainer = i, this.$search = i.find("input");
                    var s = t.call(this);
                    return this._transferTabIndex(), s
                }, s.prototype.bind = function(e, s, n) {
                    var a = this,
                        r = s.id + "-results";
                    e.call(this, s, n), s.on("open", (function() {
                        a.$search.attr("aria-controls", r), a.$search.trigger("focus")
                    })), s.on("close", (function() {
                        a.$search.val(""), a.$search.removeAttr("aria-controls"), a.$search.removeAttr("aria-activedescendant"), a.$search.trigger("focus")
                    })), s.on("enable", (function() {
                        a.$search.prop("disabled", !1), a._transferTabIndex()
                    })), s.on("disable", (function() {
                        a.$search.prop("disabled", !0)
                    })), s.on("focus", (function(e) {
                        a.$search.trigger("focus")
                    })), s.on("results:focus", (function(e) {
                        e.data._resultId ? a.$search.attr("aria-activedescendant", e.data._resultId) : a.$search.removeAttr("aria-activedescendant")
                    })), this.$selection.on("focusin", ".select2-search--inline", (function(e) {
                        a.trigger("focus", e)
                    })), this.$selection.on("focusout", ".select2-search--inline", (function(e) {
                        a._handleBlur(e)
                    })), this.$selection.on("keydown", ".select2-search--inline", (function(e) {
                        if (e.stopPropagation(), a.trigger("keypress", e), a._keyUpPrevented = e.isDefaultPrevented(), e.which === i.BACKSPACE && "" === a.$search.val()) {
                            var s = a.$searchContainer.prev(".select2-selection__choice");
                            if (0 < s.length) {
                                var n = t.GetData(s[0], "data");
                                a.searchRemoveChoice(n), e.preventDefault()
                            }
                        }
                    })), this.$selection.on("click", ".select2-search--inline", (function(e) {
                        a.$search.val() && e.stopPropagation()
                    }));
                    var o = document.documentMode,
                        l = o && o <= 11;
                    this.$selection.on("input.searchcheck", ".select2-search--inline", (function(e) {
                        l ? a.$selection.off("input.search input.searchcheck") : a.$selection.off("keyup.search")
                    })), this.$selection.on("keyup.search input.search", ".select2-search--inline", (function(e) {
                        if (l && "input" === e.type) a.$selection.off("input.search input.searchcheck");
                        else {
                            var t = e.which;
                            t != i.SHIFT && t != i.CTRL && t != i.ALT && t != i.TAB && a.handleSearch(e)
                        }
                    }))
                }, s.prototype._transferTabIndex = function(e) {
                    this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                }, s.prototype.createPlaceholder = function(e, t) {
                    this.$search.attr("placeholder", t.text)
                }, s.prototype.update = function(e, t) {
                    var i = this.$search[0] == document.activeElement;
                    this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), i && this.$search.trigger("focus")
                }, s.prototype.handleSearch = function() {
                    if (this.resizeSearch(), !this._keyUpPrevented) {
                        var e = this.$search.val();
                        this.trigger("query", {
                            term: e
                        })
                    }
                    this._keyUpPrevented = !1
                }, s.prototype.searchRemoveChoice = function(e, t) {
                    this.trigger("unselect", {
                        data: t
                    }), this.$search.val(t.text), this.handleSearch()
                }, s.prototype.resizeSearch = function() {
                    this.$search.css("width", "25px");
                    var e = "";
                    e = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").width() : .75 * (this.$search.val().length + 1) + "em", this.$search.css("width", e)
                }, s
            })), t.define("select2/selection/eventRelay", ["jquery"], (function(e) {
                function t() {}
                return t.prototype.bind = function(t, i, s) {
                    var n = this,
                        a = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"],
                        r = ["opening", "closing", "selecting", "unselecting", "clearing"];
                    t.call(this, i, s), i.on("*", (function(t, i) {
                        if (-1 !== e.inArray(t, a)) {
                            i = i || {};
                            var s = e.Event("select2:" + t, {
                                params: i
                            });
                            n.$element.trigger(s), -1 !== e.inArray(t, r) && (i.prevented = s.isDefaultPrevented())
                        }
                    }))
                }, t
            })), t.define("select2/translation", ["jquery", "require"], (function(e, t) {
                function i(e) {
                    this.dict = e || {}
                }
                return i.prototype.all = function() {
                    return this.dict
                }, i.prototype.get = function(e) {
                    return this.dict[e]
                }, i.prototype.extend = function(t) {
                    this.dict = e.extend({}, t.all(), this.dict)
                }, i._cache = {}, i.loadPath = function(e) {
                    if (!(e in i._cache)) {
                        var s = t(e);
                        i._cache[e] = s
                    }
                    return new i(i._cache[e])
                }, i
            })), t.define("select2/diacritics", [], (function() {
                return {
                    "Ⓐ": "A",
                    "Ａ": "A",
                    "À": "A",
                    "Á": "A",
                    "Â": "A",
                    "Ầ": "A",
                    "Ấ": "A",
                    "Ẫ": "A",
                    "Ẩ": "A",
                    "Ã": "A",
                    "Ā": "A",
                    "Ă": "A",
                    "Ằ": "A",
                    "Ắ": "A",
                    "Ẵ": "A",
                    "Ẳ": "A",
                    "Ȧ": "A",
                    "Ǡ": "A",
                    "Ä": "A",
                    "Ǟ": "A",
                    "Ả": "A",
                    "Å": "A",
                    "Ǻ": "A",
                    "Ǎ": "A",
                    "Ȁ": "A",
                    "Ȃ": "A",
                    "Ạ": "A",
                    "Ậ": "A",
                    "Ặ": "A",
                    "Ḁ": "A",
                    "Ą": "A",
                    "Ⱥ": "A",
                    "Ɐ": "A",
                    "Ꜳ": "AA",
                    "Æ": "AE",
                    "Ǽ": "AE",
                    "Ǣ": "AE",
                    "Ꜵ": "AO",
                    "Ꜷ": "AU",
                    "Ꜹ": "AV",
                    "Ꜻ": "AV",
                    "Ꜽ": "AY",
                    "Ⓑ": "B",
                    "Ｂ": "B",
                    "Ḃ": "B",
                    "Ḅ": "B",
                    "Ḇ": "B",
                    "Ƀ": "B",
                    "Ƃ": "B",
                    "Ɓ": "B",
                    "Ⓒ": "C",
                    "Ｃ": "C",
                    "Ć": "C",
                    "Ĉ": "C",
                    "Ċ": "C",
                    "Č": "C",
                    "Ç": "C",
                    "Ḉ": "C",
                    "Ƈ": "C",
                    "Ȼ": "C",
                    "Ꜿ": "C",
                    "Ⓓ": "D",
                    "Ｄ": "D",
                    "Ḋ": "D",
                    "Ď": "D",
                    "Ḍ": "D",
                    "Ḑ": "D",
                    "Ḓ": "D",
                    "Ḏ": "D",
                    "Đ": "D",
                    "Ƌ": "D",
                    "Ɗ": "D",
                    "Ɖ": "D",
                    "Ꝺ": "D",
                    "Ǳ": "DZ",
                    "Ǆ": "DZ",
                    "ǲ": "Dz",
                    "ǅ": "Dz",
                    "Ⓔ": "E",
                    "Ｅ": "E",
                    "È": "E",
                    "É": "E",
                    "Ê": "E",
                    "Ề": "E",
                    "Ế": "E",
                    "Ễ": "E",
                    "Ể": "E",
                    "Ẽ": "E",
                    "Ē": "E",
                    "Ḕ": "E",
                    "Ḗ": "E",
                    "Ĕ": "E",
                    "Ė": "E",
                    "Ë": "E",
                    "Ẻ": "E",
                    "Ě": "E",
                    "Ȅ": "E",
                    "Ȇ": "E",
                    "Ẹ": "E",
                    "Ệ": "E",
                    "Ȩ": "E",
                    "Ḝ": "E",
                    "Ę": "E",
                    "Ḙ": "E",
                    "Ḛ": "E",
                    "Ɛ": "E",
                    "Ǝ": "E",
                    "Ⓕ": "F",
                    "Ｆ": "F",
                    "Ḟ": "F",
                    "Ƒ": "F",
                    "Ꝼ": "F",
                    "Ⓖ": "G",
                    "Ｇ": "G",
                    "Ǵ": "G",
                    "Ĝ": "G",
                    "Ḡ": "G",
                    "Ğ": "G",
                    "Ġ": "G",
                    "Ǧ": "G",
                    "Ģ": "G",
                    "Ǥ": "G",
                    "Ɠ": "G",
                    "Ꞡ": "G",
                    "Ᵹ": "G",
                    "Ꝿ": "G",
                    "Ⓗ": "H",
                    "Ｈ": "H",
                    "Ĥ": "H",
                    "Ḣ": "H",
                    "Ḧ": "H",
                    "Ȟ": "H",
                    "Ḥ": "H",
                    "Ḩ": "H",
                    "Ḫ": "H",
                    "Ħ": "H",
                    "Ⱨ": "H",
                    "Ⱶ": "H",
                    "Ɥ": "H",
                    "Ⓘ": "I",
                    "Ｉ": "I",
                    "Ì": "I",
                    "Í": "I",
                    "Î": "I",
                    "Ĩ": "I",
                    "Ī": "I",
                    "Ĭ": "I",
                    "İ": "I",
                    "Ï": "I",
                    "Ḯ": "I",
                    "Ỉ": "I",
                    "Ǐ": "I",
                    "Ȉ": "I",
                    "Ȋ": "I",
                    "Ị": "I",
                    "Į": "I",
                    "Ḭ": "I",
                    "Ɨ": "I",
                    "Ⓙ": "J",
                    "Ｊ": "J",
                    "Ĵ": "J",
                    "Ɉ": "J",
                    "Ⓚ": "K",
                    "Ｋ": "K",
                    "Ḱ": "K",
                    "Ǩ": "K",
                    "Ḳ": "K",
                    "Ķ": "K",
                    "Ḵ": "K",
                    "Ƙ": "K",
                    "Ⱪ": "K",
                    "Ꝁ": "K",
                    "Ꝃ": "K",
                    "Ꝅ": "K",
                    "Ꞣ": "K",
                    "Ⓛ": "L",
                    "Ｌ": "L",
                    "Ŀ": "L",
                    "Ĺ": "L",
                    "Ľ": "L",
                    "Ḷ": "L",
                    "Ḹ": "L",
                    "Ļ": "L",
                    "Ḽ": "L",
                    "Ḻ": "L",
                    "Ł": "L",
                    "Ƚ": "L",
                    "Ɫ": "L",
                    "Ⱡ": "L",
                    "Ꝉ": "L",
                    "Ꝇ": "L",
                    "Ꞁ": "L",
                    "Ǉ": "LJ",
                    "ǈ": "Lj",
                    "Ⓜ": "M",
                    "Ｍ": "M",
                    "Ḿ": "M",
                    "Ṁ": "M",
                    "Ṃ": "M",
                    "Ɱ": "M",
                    "Ɯ": "M",
                    "Ⓝ": "N",
                    "Ｎ": "N",
                    "Ǹ": "N",
                    "Ń": "N",
                    "Ñ": "N",
                    "Ṅ": "N",
                    "Ň": "N",
                    "Ṇ": "N",
                    "Ņ": "N",
                    "Ṋ": "N",
                    "Ṉ": "N",
                    "Ƞ": "N",
                    "Ɲ": "N",
                    "Ꞑ": "N",
                    "Ꞥ": "N",
                    "Ǌ": "NJ",
                    "ǋ": "Nj",
                    "Ⓞ": "O",
                    "Ｏ": "O",
                    "Ò": "O",
                    "Ó": "O",
                    "Ô": "O",
                    "Ồ": "O",
                    "Ố": "O",
                    "Ỗ": "O",
                    "Ổ": "O",
                    "Õ": "O",
                    "Ṍ": "O",
                    "Ȭ": "O",
                    "Ṏ": "O",
                    "Ō": "O",
                    "Ṑ": "O",
                    "Ṓ": "O",
                    "Ŏ": "O",
                    "Ȯ": "O",
                    "Ȱ": "O",
                    "Ö": "O",
                    "Ȫ": "O",
                    "Ỏ": "O",
                    "Ő": "O",
                    "Ǒ": "O",
                    "Ȍ": "O",
                    "Ȏ": "O",
                    "Ơ": "O",
                    "Ờ": "O",
                    "Ớ": "O",
                    "Ỡ": "O",
                    "Ở": "O",
                    "Ợ": "O",
                    "Ọ": "O",
                    "Ộ": "O",
                    "Ǫ": "O",
                    "Ǭ": "O",
                    "Ø": "O",
                    "Ǿ": "O",
                    "Ɔ": "O",
                    "Ɵ": "O",
                    "Ꝋ": "O",
                    "Ꝍ": "O",
                    "Œ": "OE",
                    "Ƣ": "OI",
                    "Ꝏ": "OO",
                    "Ȣ": "OU",
                    "Ⓟ": "P",
                    "Ｐ": "P",
                    "Ṕ": "P",
                    "Ṗ": "P",
                    "Ƥ": "P",
                    "Ᵽ": "P",
                    "Ꝑ": "P",
                    "Ꝓ": "P",
                    "Ꝕ": "P",
                    "Ⓠ": "Q",
                    "Ｑ": "Q",
                    "Ꝗ": "Q",
                    "Ꝙ": "Q",
                    "Ɋ": "Q",
                    "Ⓡ": "R",
                    "Ｒ": "R",
                    "Ŕ": "R",
                    "Ṙ": "R",
                    "Ř": "R",
                    "Ȑ": "R",
                    "Ȓ": "R",
                    "Ṛ": "R",
                    "Ṝ": "R",
                    "Ŗ": "R",
                    "Ṟ": "R",
                    "Ɍ": "R",
                    "Ɽ": "R",
                    "Ꝛ": "R",
                    "Ꞧ": "R",
                    "Ꞃ": "R",
                    "Ⓢ": "S",
                    "Ｓ": "S",
                    "ẞ": "S",
                    "Ś": "S",
                    "Ṥ": "S",
                    "Ŝ": "S",
                    "Ṡ": "S",
                    "Š": "S",
                    "Ṧ": "S",
                    "Ṣ": "S",
                    "Ṩ": "S",
                    "Ș": "S",
                    "Ş": "S",
                    "Ȿ": "S",
                    "Ꞩ": "S",
                    "Ꞅ": "S",
                    "Ⓣ": "T",
                    "Ｔ": "T",
                    "Ṫ": "T",
                    "Ť": "T",
                    "Ṭ": "T",
                    "Ț": "T",
                    "Ţ": "T",
                    "Ṱ": "T",
                    "Ṯ": "T",
                    "Ŧ": "T",
                    "Ƭ": "T",
                    "Ʈ": "T",
                    "Ⱦ": "T",
                    "Ꞇ": "T",
                    "Ꜩ": "TZ",
                    "Ⓤ": "U",
                    "Ｕ": "U",
                    "Ù": "U",
                    "Ú": "U",
                    "Û": "U",
                    "Ũ": "U",
                    "Ṹ": "U",
                    "Ū": "U",
                    "Ṻ": "U",
                    "Ŭ": "U",
                    "Ü": "U",
                    "Ǜ": "U",
                    "Ǘ": "U",
                    "Ǖ": "U",
                    "Ǚ": "U",
                    "Ủ": "U",
                    "Ů": "U",
                    "Ű": "U",
                    "Ǔ": "U",
                    "Ȕ": "U",
                    "Ȗ": "U",
                    "Ư": "U",
                    "Ừ": "U",
                    "Ứ": "U",
                    "Ữ": "U",
                    "Ử": "U",
                    "Ự": "U",
                    "Ụ": "U",
                    "Ṳ": "U",
                    "Ų": "U",
                    "Ṷ": "U",
                    "Ṵ": "U",
                    "Ʉ": "U",
                    "Ⓥ": "V",
                    "Ｖ": "V",
                    "Ṽ": "V",
                    "Ṿ": "V",
                    "Ʋ": "V",
                    "Ꝟ": "V",
                    "Ʌ": "V",
                    "Ꝡ": "VY",
                    "Ⓦ": "W",
                    "Ｗ": "W",
                    "Ẁ": "W",
                    "Ẃ": "W",
                    "Ŵ": "W",
                    "Ẇ": "W",
                    "Ẅ": "W",
                    "Ẉ": "W",
                    "Ⱳ": "W",
                    "Ⓧ": "X",
                    "Ｘ": "X",
                    "Ẋ": "X",
                    "Ẍ": "X",
                    "Ⓨ": "Y",
                    "Ｙ": "Y",
                    "Ỳ": "Y",
                    "Ý": "Y",
                    "Ŷ": "Y",
                    "Ỹ": "Y",
                    "Ȳ": "Y",
                    "Ẏ": "Y",
                    "Ÿ": "Y",
                    "Ỷ": "Y",
                    "Ỵ": "Y",
                    "Ƴ": "Y",
                    "Ɏ": "Y",
                    "Ỿ": "Y",
                    "Ⓩ": "Z",
                    "Ｚ": "Z",
                    "Ź": "Z",
                    "Ẑ": "Z",
                    "Ż": "Z",
                    "Ž": "Z",
                    "Ẓ": "Z",
                    "Ẕ": "Z",
                    "Ƶ": "Z",
                    "Ȥ": "Z",
                    "Ɀ": "Z",
                    "Ⱬ": "Z",
                    "Ꝣ": "Z",
                    "ⓐ": "a",
                    "ａ": "a",
                    "ẚ": "a",
                    "à": "a",
                    "á": "a",
                    "â": "a",
                    "ầ": "a",
                    "ấ": "a",
                    "ẫ": "a",
                    "ẩ": "a",
                    "ã": "a",
                    "ā": "a",
                    "ă": "a",
                    "ằ": "a",
                    "ắ": "a",
                    "ẵ": "a",
                    "ẳ": "a",
                    "ȧ": "a",
                    "ǡ": "a",
                    "ä": "a",
                    "ǟ": "a",
                    "ả": "a",
                    "å": "a",
                    "ǻ": "a",
                    "ǎ": "a",
                    "ȁ": "a",
                    "ȃ": "a",
                    "ạ": "a",
                    "ậ": "a",
                    "ặ": "a",
                    "ḁ": "a",
                    "ą": "a",
                    "ⱥ": "a",
                    "ɐ": "a",
                    "ꜳ": "aa",
                    "æ": "ae",
                    "ǽ": "ae",
                    "ǣ": "ae",
                    "ꜵ": "ao",
                    "ꜷ": "au",
                    "ꜹ": "av",
                    "ꜻ": "av",
                    "ꜽ": "ay",
                    "ⓑ": "b",
                    "ｂ": "b",
                    "ḃ": "b",
                    "ḅ": "b",
                    "ḇ": "b",
                    "ƀ": "b",
                    "ƃ": "b",
                    "ɓ": "b",
                    "ⓒ": "c",
                    "ｃ": "c",
                    "ć": "c",
                    "ĉ": "c",
                    "ċ": "c",
                    "č": "c",
                    "ç": "c",
                    "ḉ": "c",
                    "ƈ": "c",
                    "ȼ": "c",
                    "ꜿ": "c",
                    "ↄ": "c",
                    "ⓓ": "d",
                    "ｄ": "d",
                    "ḋ": "d",
                    "ď": "d",
                    "ḍ": "d",
                    "ḑ": "d",
                    "ḓ": "d",
                    "ḏ": "d",
                    "đ": "d",
                    "ƌ": "d",
                    "ɖ": "d",
                    "ɗ": "d",
                    "ꝺ": "d",
                    "ǳ": "dz",
                    "ǆ": "dz",
                    "ⓔ": "e",
                    "ｅ": "e",
                    "è": "e",
                    "é": "e",
                    "ê": "e",
                    "ề": "e",
                    "ế": "e",
                    "ễ": "e",
                    "ể": "e",
                    "ẽ": "e",
                    "ē": "e",
                    "ḕ": "e",
                    "ḗ": "e",
                    "ĕ": "e",
                    "ė": "e",
                    "ë": "e",
                    "ẻ": "e",
                    "ě": "e",
                    "ȅ": "e",
                    "ȇ": "e",
                    "ẹ": "e",
                    "ệ": "e",
                    "ȩ": "e",
                    "ḝ": "e",
                    "ę": "e",
                    "ḙ": "e",
                    "ḛ": "e",
                    "ɇ": "e",
                    "ɛ": "e",
                    "ǝ": "e",
                    "ⓕ": "f",
                    "ｆ": "f",
                    "ḟ": "f",
                    "ƒ": "f",
                    "ꝼ": "f",
                    "ⓖ": "g",
                    "ｇ": "g",
                    "ǵ": "g",
                    "ĝ": "g",
                    "ḡ": "g",
                    "ğ": "g",
                    "ġ": "g",
                    "ǧ": "g",
                    "ģ": "g",
                    "ǥ": "g",
                    "ɠ": "g",
                    "ꞡ": "g",
                    "ᵹ": "g",
                    "ꝿ": "g",
                    "ⓗ": "h",
                    "ｈ": "h",
                    "ĥ": "h",
                    "ḣ": "h",
                    "ḧ": "h",
                    "ȟ": "h",
                    "ḥ": "h",
                    "ḩ": "h",
                    "ḫ": "h",
                    "ẖ": "h",
                    "ħ": "h",
                    "ⱨ": "h",
                    "ⱶ": "h",
                    "ɥ": "h",
                    "ƕ": "hv",
                    "ⓘ": "i",
                    "ｉ": "i",
                    "ì": "i",
                    "í": "i",
                    "î": "i",
                    "ĩ": "i",
                    "ī": "i",
                    "ĭ": "i",
                    "ï": "i",
                    "ḯ": "i",
                    "ỉ": "i",
                    "ǐ": "i",
                    "ȉ": "i",
                    "ȋ": "i",
                    "ị": "i",
                    "į": "i",
                    "ḭ": "i",
                    "ɨ": "i",
                    "ı": "i",
                    "ⓙ": "j",
                    "ｊ": "j",
                    "ĵ": "j",
                    "ǰ": "j",
                    "ɉ": "j",
                    "ⓚ": "k",
                    "ｋ": "k",
                    "ḱ": "k",
                    "ǩ": "k",
                    "ḳ": "k",
                    "ķ": "k",
                    "ḵ": "k",
                    "ƙ": "k",
                    "ⱪ": "k",
                    "ꝁ": "k",
                    "ꝃ": "k",
                    "ꝅ": "k",
                    "ꞣ": "k",
                    "ⓛ": "l",
                    "ｌ": "l",
                    "ŀ": "l",
                    "ĺ": "l",
                    "ľ": "l",
                    "ḷ": "l",
                    "ḹ": "l",
                    "ļ": "l",
                    "ḽ": "l",
                    "ḻ": "l",
                    "ſ": "l",
                    "ł": "l",
                    "ƚ": "l",
                    "ɫ": "l",
                    "ⱡ": "l",
                    "ꝉ": "l",
                    "ꞁ": "l",
                    "ꝇ": "l",
                    "ǉ": "lj",
                    "ⓜ": "m",
                    "ｍ": "m",
                    "ḿ": "m",
                    "ṁ": "m",
                    "ṃ": "m",
                    "ɱ": "m",
                    "ɯ": "m",
                    "ⓝ": "n",
                    "ｎ": "n",
                    "ǹ": "n",
                    "ń": "n",
                    "ñ": "n",
                    "ṅ": "n",
                    "ň": "n",
                    "ṇ": "n",
                    "ņ": "n",
                    "ṋ": "n",
                    "ṉ": "n",
                    "ƞ": "n",
                    "ɲ": "n",
                    "ŉ": "n",
                    "ꞑ": "n",
                    "ꞥ": "n",
                    "ǌ": "nj",
                    "ⓞ": "o",
                    "ｏ": "o",
                    "ò": "o",
                    "ó": "o",
                    "ô": "o",
                    "ồ": "o",
                    "ố": "o",
                    "ỗ": "o",
                    "ổ": "o",
                    "õ": "o",
                    "ṍ": "o",
                    "ȭ": "o",
                    "ṏ": "o",
                    "ō": "o",
                    "ṑ": "o",
                    "ṓ": "o",
                    "ŏ": "o",
                    "ȯ": "o",
                    "ȱ": "o",
                    "ö": "o",
                    "ȫ": "o",
                    "ỏ": "o",
                    "ő": "o",
                    "ǒ": "o",
                    "ȍ": "o",
                    "ȏ": "o",
                    "ơ": "o",
                    "ờ": "o",
                    "ớ": "o",
                    "ỡ": "o",
                    "ở": "o",
                    "ợ": "o",
                    "ọ": "o",
                    "ộ": "o",
                    "ǫ": "o",
                    "ǭ": "o",
                    "ø": "o",
                    "ǿ": "o",
                    "ɔ": "o",
                    "ꝋ": "o",
                    "ꝍ": "o",
                    "ɵ": "o",
                    "œ": "oe",
                    "ƣ": "oi",
                    "ȣ": "ou",
                    "ꝏ": "oo",
                    "ⓟ": "p",
                    "ｐ": "p",
                    "ṕ": "p",
                    "ṗ": "p",
                    "ƥ": "p",
                    "ᵽ": "p",
                    "ꝑ": "p",
                    "ꝓ": "p",
                    "ꝕ": "p",
                    "ⓠ": "q",
                    "ｑ": "q",
                    "ɋ": "q",
                    "ꝗ": "q",
                    "ꝙ": "q",
                    "ⓡ": "r",
                    "ｒ": "r",
                    "ŕ": "r",
                    "ṙ": "r",
                    "ř": "r",
                    "ȑ": "r",
                    "ȓ": "r",
                    "ṛ": "r",
                    "ṝ": "r",
                    "ŗ": "r",
                    "ṟ": "r",
                    "ɍ": "r",
                    "ɽ": "r",
                    "ꝛ": "r",
                    "ꞧ": "r",
                    "ꞃ": "r",
                    "ⓢ": "s",
                    "ｓ": "s",
                    "ß": "s",
                    "ś": "s",
                    "ṥ": "s",
                    "ŝ": "s",
                    "ṡ": "s",
                    "š": "s",
                    "ṧ": "s",
                    "ṣ": "s",
                    "ṩ": "s",
                    "ș": "s",
                    "ş": "s",
                    "ȿ": "s",
                    "ꞩ": "s",
                    "ꞅ": "s",
                    "ẛ": "s",
                    "ⓣ": "t",
                    "ｔ": "t",
                    "ṫ": "t",
                    "ẗ": "t",
                    "ť": "t",
                    "ṭ": "t",
                    "ț": "t",
                    "ţ": "t",
                    "ṱ": "t",
                    "ṯ": "t",
                    "ŧ": "t",
                    "ƭ": "t",
                    "ʈ": "t",
                    "ⱦ": "t",
                    "ꞇ": "t",
                    "ꜩ": "tz",
                    "ⓤ": "u",
                    "ｕ": "u",
                    "ù": "u",
                    "ú": "u",
                    "û": "u",
                    "ũ": "u",
                    "ṹ": "u",
                    "ū": "u",
                    "ṻ": "u",
                    "ŭ": "u",
                    "ü": "u",
                    "ǜ": "u",
                    "ǘ": "u",
                    "ǖ": "u",
                    "ǚ": "u",
                    "ủ": "u",
                    "ů": "u",
                    "ű": "u",
                    "ǔ": "u",
                    "ȕ": "u",
                    "ȗ": "u",
                    "ư": "u",
                    "ừ": "u",
                    "ứ": "u",
                    "ữ": "u",
                    "ử": "u",
                    "ự": "u",
                    "ụ": "u",
                    "ṳ": "u",
                    "ų": "u",
                    "ṷ": "u",
                    "ṵ": "u",
                    "ʉ": "u",
                    "ⓥ": "v",
                    "ｖ": "v",
                    "ṽ": "v",
                    "ṿ": "v",
                    "ʋ": "v",
                    "ꝟ": "v",
                    "ʌ": "v",
                    "ꝡ": "vy",
                    "ⓦ": "w",
                    "ｗ": "w",
                    "ẁ": "w",
                    "ẃ": "w",
                    "ŵ": "w",
                    "ẇ": "w",
                    "ẅ": "w",
                    "ẘ": "w",
                    "ẉ": "w",
                    "ⱳ": "w",
                    "ⓧ": "x",
                    "ｘ": "x",
                    "ẋ": "x",
                    "ẍ": "x",
                    "ⓨ": "y",
                    "ｙ": "y",
                    "ỳ": "y",
                    "ý": "y",
                    "ŷ": "y",
                    "ỹ": "y",
                    "ȳ": "y",
                    "ẏ": "y",
                    "ÿ": "y",
                    "ỷ": "y",
                    "ẙ": "y",
                    "ỵ": "y",
                    "ƴ": "y",
                    "ɏ": "y",
                    "ỿ": "y",
                    "ⓩ": "z",
                    "ｚ": "z",
                    "ź": "z",
                    "ẑ": "z",
                    "ż": "z",
                    "ž": "z",
                    "ẓ": "z",
                    "ẕ": "z",
                    "ƶ": "z",
                    "ȥ": "z",
                    "ɀ": "z",
                    "ⱬ": "z",
                    "ꝣ": "z",
                    "Ά": "Α",
                    "Έ": "Ε",
                    "Ή": "Η",
                    "Ί": "Ι",
                    "Ϊ": "Ι",
                    "Ό": "Ο",
                    "Ύ": "Υ",
                    "Ϋ": "Υ",
                    "Ώ": "Ω",
                    "ά": "α",
                    "έ": "ε",
                    "ή": "η",
                    "ί": "ι",
                    "ϊ": "ι",
                    "ΐ": "ι",
                    "ό": "ο",
                    "ύ": "υ",
                    "ϋ": "υ",
                    "ΰ": "υ",
                    "ώ": "ω",
                    "ς": "σ",
                    "’": "'"
                }
            })), t.define("select2/data/base", ["../utils"], (function(e) {
                function t(e, i) {
                    t.__super__.constructor.call(this)
                }
                return e.Extend(t, e.Observable), t.prototype.current = function(e) {
                    throw new Error("The `current` method must be defined in child classes.")
                }, t.prototype.query = function(e, t) {
                    throw new Error("The `query` method must be defined in child classes.")
                }, t.prototype.bind = function(e, t) {}, t.prototype.destroy = function() {}, t.prototype.generateResultId = function(t, i) {
                    var s = t.id + "-result-";
                    return s += e.generateChars(4), null != i.id ? s += "-" + i.id.toString() : s += "-" + e.generateChars(4), s
                }, t
            })), t.define("select2/data/select", ["./base", "../utils", "jquery"], (function(e, t, i) {
                function s(e, t) {
                    this.$element = e, this.options = t, s.__super__.constructor.call(this)
                }
                return t.Extend(s, e), s.prototype.current = function(e) {
                    var t = [],
                        s = this;
                    this.$element.find(":selected").each((function() {
                        var e = i(this),
                            n = s.item(e);
                        t.push(n)
                    })), e(t)
                }, s.prototype.select = function(e) {
                    var t = this;
                    if (e.selected = !0, i(e.element).is("option")) return e.element.selected = !0, void this.$element.trigger("change");
                    if (this.$element.prop("multiple")) this.current((function(s) {
                        var n = [];
                        (e = [e]).push.apply(e, s);
                        for (var a = 0; a < e.length; a++) {
                            var r = e[a].id; - 1 === i.inArray(r, n) && n.push(r)
                        }
                        t.$element.val(n), t.$element.trigger("change")
                    }));
                    else {
                        var s = e.id;
                        this.$element.val(s), this.$element.trigger("change")
                    }
                }, s.prototype.unselect = function(e) {
                    var t = this;
                    if (this.$element.prop("multiple")) {
                        if (e.selected = !1, i(e.element).is("option")) return e.element.selected = !1, void this.$element.trigger("change");
                        this.current((function(s) {
                            for (var n = [], a = 0; a < s.length; a++) {
                                var r = s[a].id;
                                r !== e.id && -1 === i.inArray(r, n) && n.push(r)
                            }
                            t.$element.val(n), t.$element.trigger("change")
                        }))
                    }
                }, s.prototype.bind = function(e, t) {
                    var i = this;
                    (this.container = e).on("select", (function(e) {
                        i.select(e.data)
                    })), e.on("unselect", (function(e) {
                        i.unselect(e.data)
                    }))
                }, s.prototype.destroy = function() {
                    this.$element.find("*").each((function() {
                        t.RemoveData(this)
                    }))
                }, s.prototype.query = function(e, t) {
                    var s = [],
                        n = this;
                    this.$element.children().each((function() {
                        var t = i(this);
                        if (t.is("option") || t.is("optgroup")) {
                            var a = n.item(t),
                                r = n.matches(e, a);
                            null !== r && s.push(r)
                        }
                    })), t({
                        results: s
                    })
                }, s.prototype.addOptions = function(e) {
                    t.appendMany(this.$element, e)
                }, s.prototype.option = function(e) {
                    var s;
                    e.children ? (s = document.createElement("optgroup")).label = e.text : void 0 !== (s = document.createElement("option")).textContent ? s.textContent = e.text : s.innerText = e.text, void 0 !== e.id && (s.value = e.id), e.disabled && (s.disabled = !0), e.selected && (s.selected = !0), e.title && (s.title = e.title);
                    var n = i(s),
                        a = this._normalizeItem(e);
                    return a.element = s, t.StoreData(s, "data", a), n
                }, s.prototype.item = function(e) {
                    var s = {};
                    if (null != (s = t.GetData(e[0], "data"))) return s;
                    if (e.is("option")) s = {
                        id: e.val(),
                        text: e.text(),
                        disabled: e.prop("disabled"),
                        selected: e.prop("selected"),
                        title: e.prop("title")
                    };
                    else if (e.is("optgroup")) {
                        s = {
                            text: e.prop("label"),
                            children: [],
                            title: e.prop("title")
                        };
                        for (var n = e.children("option"), a = [], r = 0; r < n.length; r++) {
                            var o = i(n[r]),
                                l = this.item(o);
                            a.push(l)
                        }
                        s.children = a
                    }
                    return (s = this._normalizeItem(s)).element = e[0], t.StoreData(e[0], "data", s), s
                }, s.prototype._normalizeItem = function(e) {
                    return e !== Object(e) && (e = {
                        id: e,
                        text: e
                    }), null != (e = i.extend({}, {
                        text: ""
                    }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), i.extend({}, {
                        selected: !1,
                        disabled: !1
                    }, e)
                }, s.prototype.matches = function(e, t) {
                    return this.options.get("matcher")(e, t)
                }, s
            })), t.define("select2/data/array", ["./select", "../utils", "jquery"], (function(e, t, i) {
                function s(e, t) {
                    this._dataToConvert = t.get("data") || [], s.__super__.constructor.call(this, e, t)
                }
                return t.Extend(s, e), s.prototype.bind = function(e, t) {
                    s.__super__.bind.call(this, e, t), this.addOptions(this.convertToOptions(this._dataToConvert))
                }, s.prototype.select = function(e) {
                    var t = this.$element.find("option").filter((function(t, i) {
                        return i.value == e.id.toString()
                    }));
                    0 === t.length && (t = this.option(e), this.addOptions(t)), s.__super__.select.call(this, e)
                }, s.prototype.convertToOptions = function(e) {
                    var s = this,
                        n = this.$element.find("option"),
                        a = n.map((function() {
                            return s.item(i(this)).id
                        })).get(),
                        r = [];

                    function o(e) {
                        return function() {
                            return i(this).val() == e.id
                        }
                    }
                    for (var l = 0; l < e.length; l++) {
                        var c = this._normalizeItem(e[l]);
                        if (0 <= i.inArray(c.id, a)) {
                            var d = n.filter(o(c)),
                                h = this.item(d),
                                u = i.extend(!0, {}, c, h),
                                p = this.option(u);
                            d.replaceWith(p)
                        } else {
                            var f = this.option(c);
                            if (c.children) {
                                var m = this.convertToOptions(c.children);
                                t.appendMany(f, m)
                            }
                            r.push(f)
                        }
                    }
                    return r
                }, s
            })), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], (function(e, t, i) {
                function s(e, t) {
                    this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), s.__super__.constructor.call(this, e, t)
                }
                return t.Extend(s, e), s.prototype._applyDefaults = function(e) {
                    var t = {
                        data: function(e) {
                            return i.extend({}, e, {
                                q: e.term
                            })
                        },
                        transport: function(e, t, s) {
                            var n = i.ajax(e);
                            return n.then(t), n.fail(s), n
                        }
                    };
                    return i.extend({}, t, e, !0)
                }, s.prototype.processResults = function(e) {
                    return e
                }, s.prototype.query = function(e, t) {
                    var s = this;
                    null != this._request && (i.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                    var n = i.extend({
                        type: "GET"
                    }, this.ajaxOptions);

                    function a() {
                        var a = n.transport(n, (function(n) {
                            var a = s.processResults(n, e);
                            s.options.get("debug") && window.console && console.error && (a && a.results && i.isArray(a.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(a)
                        }), (function() {
                            "status" in a && (0 === a.status || "0" === a.status) || s.trigger("results:message", {
                                message: "errorLoading"
                            })
                        }));
                        s._request = a
                    }
                    "function" == typeof n.url && (n.url = n.url.call(this.$element, e)), "function" == typeof n.data && (n.data = n.data.call(this.$element, e)), this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(a, this.ajaxOptions.delay)) : a()
                }, s
            })), t.define("select2/data/tags", ["jquery"], (function(e) {
                function t(t, i, s) {
                    var n = s.get("tags"),
                        a = s.get("createTag");
                    void 0 !== a && (this.createTag = a);
                    var r = s.get("insertTag");
                    if (void 0 !== r && (this.insertTag = r), t.call(this, i, s), e.isArray(n))
                        for (var o = 0; o < n.length; o++) {
                            var l = n[o],
                                c = this._normalizeItem(l),
                                d = this.option(c);
                            this.$element.append(d)
                        }
                }
                return t.prototype.query = function(e, t, i) {
                    var s = this;
                    this._removeOldTags(), null != t.term && null == t.page ? e.call(this, t, (function e(n, a) {
                        for (var r = n.results, o = 0; o < r.length; o++) {
                            var l = r[o],
                                c = null != l.children && !e({
                                    results: l.children
                                }, !0);
                            if ((l.text || "").toUpperCase() === (t.term || "").toUpperCase() || c) return !a && (n.data = r, void i(n))
                        }
                        if (a) return !0;
                        var d = s.createTag(t);
                        if (null != d) {
                            var h = s.option(d);
                            h.attr("data-select2-tag", !0), s.addOptions([h]), s.insertTag(r, d)
                        }
                        n.results = r, i(n)
                    })) : e.call(this, t, i)
                }, t.prototype.createTag = function(t, i) {
                    var s = e.trim(i.term);
                    return "" === s ? null : {
                        id: s,
                        text: s
                    }
                }, t.prototype.insertTag = function(e, t, i) {
                    t.unshift(i)
                }, t.prototype._removeOldTags = function(t) {
                    this.$element.find("option[data-select2-tag]").each((function() {
                        this.selected || e(this).remove()
                    }))
                }, t
            })), t.define("select2/data/tokenizer", ["jquery"], (function(e) {
                function t(e, t, i) {
                    var s = i.get("tokenizer");
                    void 0 !== s && (this.tokenizer = s), e.call(this, t, i)
                }
                return t.prototype.bind = function(e, t, i) {
                    e.call(this, t, i), this.$search = t.dropdown.$search || t.selection.$search || i.find(".select2-search__field")
                }, t.prototype.query = function(t, i, s) {
                    var n = this;
                    i.term = i.term || "";
                    var a = this.tokenizer(i, this.options, (function(t) {
                        var i = n._normalizeItem(t);
                        if (!n.$element.find("option").filter((function() {
                                return e(this).val() === i.id
                            })).length) {
                            var s = n.option(i);
                            s.attr("data-select2-tag", !0), n._removeOldTags(), n.addOptions([s])
                        }! function(e) {
                            n.trigger("select", {
                                data: e
                            })
                        }(i)
                    }));
                    a.term !== i.term && (this.$search.length && (this.$search.val(a.term), this.$search.trigger("focus")), i.term = a.term), t.call(this, i, s)
                }, t.prototype.tokenizer = function(t, i, s, n) {
                    for (var a = s.get("tokenSeparators") || [], r = i.term, o = 0, l = this.createTag || function(e) {
                            return {
                                id: e.term,
                                text: e.term
                            }
                        }; o < r.length;) {
                        var c = r[o];
                        if (-1 !== e.inArray(c, a)) {
                            var d = r.substr(0, o),
                                h = l(e.extend({}, i, {
                                    term: d
                                }));
                            null != h ? (n(h), r = r.substr(o + 1) || "", o = 0) : o++
                        } else o++
                    }
                    return {
                        term: r
                    }
                }, t
            })), t.define("select2/data/minimumInputLength", [], (function() {
                function e(e, t, i) {
                    this.minimumInputLength = i.get("minimumInputLength"), e.call(this, t, i)
                }
                return e.prototype.query = function(e, t, i) {
                    t.term = t.term || "", t.term.length < this.minimumInputLength ? this.trigger("results:message", {
                        message: "inputTooShort",
                        args: {
                            minimum: this.minimumInputLength,
                            input: t.term,
                            params: t
                        }
                    }) : e.call(this, t, i)
                }, e
            })), t.define("select2/data/maximumInputLength", [], (function() {
                function e(e, t, i) {
                    this.maximumInputLength = i.get("maximumInputLength"), e.call(this, t, i)
                }
                return e.prototype.query = function(e, t, i) {
                    t.term = t.term || "", 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
                        message: "inputTooLong",
                        args: {
                            maximum: this.maximumInputLength,
                            input: t.term,
                            params: t
                        }
                    }) : e.call(this, t, i)
                }, e
            })), t.define("select2/data/maximumSelectionLength", [], (function() {
                function e(e, t, i) {
                    this.maximumSelectionLength = i.get("maximumSelectionLength"), e.call(this, t, i)
                }
                return e.prototype.bind = function(e, t, i) {
                    var s = this;
                    e.call(this, t, i), t.on("select", (function() {
                        s._checkIfMaximumSelected()
                    }))
                }, e.prototype.query = function(e, t, i) {
                    var s = this;
                    this._checkIfMaximumSelected((function() {
                        e.call(s, t, i)
                    }))
                }, e.prototype._checkIfMaximumSelected = function(e, t) {
                    var i = this;
                    this.current((function(e) {
                        var s = null != e ? e.length : 0;
                        0 < i.maximumSelectionLength && s >= i.maximumSelectionLength ? i.trigger("results:message", {
                            message: "maximumSelected",
                            args: {
                                maximum: i.maximumSelectionLength
                            }
                        }) : t && t()
                    }))
                }, e
            })), t.define("select2/dropdown", ["jquery", "./utils"], (function(e, t) {
                function i(e, t) {
                    this.$element = e, this.options = t, i.__super__.constructor.call(this)
                }
                return t.Extend(i, t.Observable), i.prototype.render = function() {
                    var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                    return t.attr("dir", this.options.get("dir")), this.$dropdown = t
                }, i.prototype.bind = function() {}, i.prototype.position = function(e, t) {}, i.prototype.destroy = function() {
                    this.$dropdown.remove()
                }, i
            })), t.define("select2/dropdown/search", ["jquery", "../utils"], (function(e, t) {
                function i() {}
                return i.prototype.render = function(t) {
                    var i = t.call(this),
                        s = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
                    return this.$searchContainer = s, this.$search = s.find("input"), i.prepend(s), i
                }, i.prototype.bind = function(t, i, s) {
                    var n = this,
                        a = i.id + "-results";
                    t.call(this, i, s), this.$search.on("keydown", (function(e) {
                        n.trigger("keypress", e), n._keyUpPrevented = e.isDefaultPrevented()
                    })), this.$search.on("input", (function(t) {
                        e(this).off("keyup")
                    })), this.$search.on("keyup input", (function(e) {
                        n.handleSearch(e)
                    })), i.on("open", (function() {
                        n.$search.attr("tabindex", 0), n.$search.attr("aria-controls", a), n.$search.trigger("focus"), window.setTimeout((function() {
                            n.$search.trigger("focus")
                        }), 0)
                    })), i.on("close", (function() {
                        n.$search.attr("tabindex", -1), n.$search.removeAttr("aria-controls"), n.$search.removeAttr("aria-activedescendant"), n.$search.val(""), n.$search.trigger("blur")
                    })), i.on("focus", (function() {
                        i.isOpen() || n.$search.trigger("focus")
                    })), i.on("results:all", (function(e) {
                        null != e.query.term && "" !== e.query.term || (n.showSearch(e) ? n.$searchContainer.removeClass("select2-search--hide") : n.$searchContainer.addClass("select2-search--hide"))
                    })), i.on("results:focus", (function(e) {
                        e.data._resultId ? n.$search.attr("aria-activedescendant", e.data._resultId) : n.$search.removeAttr("aria-activedescendant")
                    }))
                }, i.prototype.handleSearch = function(e) {
                    if (!this._keyUpPrevented) {
                        var t = this.$search.val();
                        this.trigger("query", {
                            term: t
                        })
                    }
                    this._keyUpPrevented = !1
                }, i.prototype.showSearch = function(e, t) {
                    return !0
                }, i
            })), t.define("select2/dropdown/hidePlaceholder", [], (function() {
                function e(e, t, i, s) {
                    this.placeholder = this.normalizePlaceholder(i.get("placeholder")), e.call(this, t, i, s)
                }
                return e.prototype.append = function(e, t) {
                    t.results = this.removePlaceholder(t.results), e.call(this, t)
                }, e.prototype.normalizePlaceholder = function(e, t) {
                    return "string" == typeof t && (t = {
                        id: "",
                        text: t
                    }), t
                }, e.prototype.removePlaceholder = function(e, t) {
                    for (var i = t.slice(0), s = t.length - 1; 0 <= s; s--) {
                        var n = t[s];
                        this.placeholder.id === n.id && i.splice(s, 1)
                    }
                    return i
                }, e
            })), t.define("select2/dropdown/infiniteScroll", ["jquery"], (function(e) {
                function t(e, t, i, s) {
                    this.lastParams = {}, e.call(this, t, i, s), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                }
                return t.prototype.append = function(e, t) {
                    this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && (this.$results.append(this.$loadingMore), this.loadMoreIfNeeded())
                }, t.prototype.bind = function(e, t, i) {
                    var s = this;
                    e.call(this, t, i), t.on("query", (function(e) {
                        s.lastParams = e, s.loading = !0
                    })), t.on("query:append", (function(e) {
                        s.lastParams = e, s.loading = !0
                    })), this.$results.on("scroll", this.loadMoreIfNeeded.bind(this))
                }, t.prototype.loadMoreIfNeeded = function() {
                    var t = e.contains(document.documentElement, this.$loadingMore[0]);
                    if (!this.loading && t) {
                        var i = this.$results.offset().top + this.$results.outerHeight(!1);
                        this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) <= i + 50 && this.loadMore()
                    }
                }, t.prototype.loadMore = function() {
                    this.loading = !0;
                    var t = e.extend({}, {
                        page: 1
                    }, this.lastParams);
                    t.page++, this.trigger("query:append", t)
                }, t.prototype.showLoadingMore = function(e, t) {
                    return t.pagination && t.pagination.more
                }, t.prototype.createLoadingMore = function() {
                    var t = e('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),
                        i = this.options.get("translations").get("loadingMore");
                    return t.html(i(this.lastParams)), t
                }, t
            })), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], (function(e, t) {
                function i(t, i, s) {
                    this.$dropdownParent = e(s.get("dropdownParent") || document.body), t.call(this, i, s)
                }
                return i.prototype.bind = function(e, t, i) {
                    var s = this;
                    e.call(this, t, i), t.on("open", (function() {
                        s._showDropdown(), s._attachPositioningHandler(t), s._bindContainerResultHandlers(t)
                    })), t.on("close", (function() {
                        s._hideDropdown(), s._detachPositioningHandler(t)
                    })), this.$dropdownContainer.on("mousedown", (function(e) {
                        e.stopPropagation()
                    }))
                }, i.prototype.destroy = function(e) {
                    e.call(this), this.$dropdownContainer.remove()
                }, i.prototype.position = function(e, t, i) {
                    t.attr("class", i.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                        position: "absolute",
                        top: -999999
                    }), this.$container = i
                }, i.prototype.render = function(t) {
                    var i = e("<span></span>"),
                        s = t.call(this);
                    return i.append(s), this.$dropdownContainer = i
                }, i.prototype._hideDropdown = function(e) {
                    this.$dropdownContainer.detach()
                }, i.prototype._bindContainerResultHandlers = function(e, t) {
                    if (!this._containerResultsHandlersBound) {
                        var i = this;
                        t.on("results:all", (function() {
                            i._positionDropdown(), i._resizeDropdown()
                        })), t.on("results:append", (function() {
                            i._positionDropdown(), i._resizeDropdown()
                        })), t.on("results:message", (function() {
                            i._positionDropdown(), i._resizeDropdown()
                        })), t.on("select", (function() {
                            i._positionDropdown(), i._resizeDropdown()
                        })), t.on("unselect", (function() {
                            i._positionDropdown(), i._resizeDropdown()
                        })), this._containerResultsHandlersBound = !0
                    }
                }, i.prototype._attachPositioningHandler = function(i, s) {
                    var n = this,
                        a = "scroll.select2." + s.id,
                        r = "resize.select2." + s.id,
                        o = "orientationchange.select2." + s.id,
                        l = this.$container.parents().filter(t.hasScroll);
                    l.each((function() {
                        t.StoreData(this, "select2-scroll-position", {
                            x: e(this).scrollLeft(),
                            y: e(this).scrollTop()
                        })
                    })), l.on(a, (function(i) {
                        var s = t.GetData(this, "select2-scroll-position");
                        e(this).scrollTop(s.y)
                    })), e(window).on(a + " " + r + " " + o, (function(e) {
                        n._positionDropdown(), n._resizeDropdown()
                    }))
                }, i.prototype._detachPositioningHandler = function(i, s) {
                    var n = "scroll.select2." + s.id,
                        a = "resize.select2." + s.id,
                        r = "orientationchange.select2." + s.id;
                    this.$container.parents().filter(t.hasScroll).off(n), e(window).off(n + " " + a + " " + r)
                }, i.prototype._positionDropdown = function() {
                    var t = e(window),
                        i = this.$dropdown.hasClass("select2-dropdown--above"),
                        s = this.$dropdown.hasClass("select2-dropdown--below"),
                        n = null,
                        a = this.$container.offset();
                    a.bottom = a.top + this.$container.outerHeight(!1);
                    var r = {
                        height: this.$container.outerHeight(!1)
                    };
                    r.top = a.top, r.bottom = a.top + r.height;
                    var o = this.$dropdown.outerHeight(!1),
                        l = t.scrollTop(),
                        c = t.scrollTop() + t.height(),
                        d = l < a.top - o,
                        h = c > a.bottom + o,
                        u = {
                            left: a.left,
                            top: r.bottom
                        },
                        p = this.$dropdownParent;
                    "static" === p.css("position") && (p = p.offsetParent());
                    var f = {
                        top: 0,
                        left: 0
                    };
                    (e.contains(document.body, p[0]) || p[0].isConnected) && (f = p.offset()), u.top -= f.top, u.left -= f.left, i || s || (n = "below"), h || !d || i ? !d && h && i && (n = "below") : n = "above", ("above" == n || i && "below" !== n) && (u.top = r.top - f.top - o), null != n && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + n), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + n)), this.$dropdownContainer.css(u)
                }, i.prototype._resizeDropdown = function() {
                    var e = {
                        width: this.$container.outerWidth(!1) + "px"
                    };
                    this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
                }, i.prototype._showDropdown = function(e) {
                    this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                }, i
            })), t.define("select2/dropdown/minimumResultsForSearch", [], (function() {
                function e(e, t, i, s) {
                    this.minimumResultsForSearch = i.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, i, s)
                }
                return e.prototype.showSearch = function(e, t) {
                    return !(function e(t) {
                        for (var i = 0, s = 0; s < t.length; s++) {
                            var n = t[s];
                            n.children ? i += e(n.children) : i++
                        }
                        return i
                    }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t)
                }, e
            })), t.define("select2/dropdown/selectOnClose", ["../utils"], (function(e) {
                function t() {}
                return t.prototype.bind = function(e, t, i) {
                    var s = this;
                    e.call(this, t, i), t.on("close", (function(e) {
                        s._handleSelectOnClose(e)
                    }))
                }, t.prototype._handleSelectOnClose = function(t, i) {
                    if (i && null != i.originalSelect2Event) {
                        var s = i.originalSelect2Event;
                        if ("select" === s._type || "unselect" === s._type) return
                    }
                    var n = this.getHighlightedResults();
                    if (!(n.length < 1)) {
                        var a = e.GetData(n[0], "data");
                        null != a.element && a.element.selected || null == a.element && a.selected || this.trigger("select", {
                            data: a
                        })
                    }
                }, t
            })), t.define("select2/dropdown/closeOnSelect", [], (function() {
                function e() {}
                return e.prototype.bind = function(e, t, i) {
                    var s = this;
                    e.call(this, t, i), t.on("select", (function(e) {
                        s._selectTriggered(e)
                    })), t.on("unselect", (function(e) {
                        s._selectTriggered(e)
                    }))
                }, e.prototype._selectTriggered = function(e, t) {
                    var i = t.originalEvent;
                    i && (i.ctrlKey || i.metaKey) || this.trigger("close", {
                        originalEvent: i,
                        originalSelect2Event: t
                    })
                }, e
            })), t.define("select2/i18n/en", [], (function() {
                return {
                    errorLoading: function() {
                        return "The results could not be loaded."
                    },
                    inputTooLong: function(e) {
                        var t = e.input.length - e.maximum,
                            i = "Please delete " + t + " character";
                        return 1 != t && (i += "s"), i
                    },
                    inputTooShort: function(e) {
                        return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                    },
                    loadingMore: function() {
                        return "Loading more results…"
                    },
                    maximumSelected: function(e) {
                        var t = "You can only select " + e.maximum + " item";
                        return 1 != e.maximum && (t += "s"), t
                    },
                    noResults: function() {
                        return "No results found"
                    },
                    searching: function() {
                        return "Searching…"
                    },
                    removeAllItems: function() {
                        return "Remove all items"
                    }
                }
            })), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], (function(e, t, i, s, n, a, r, o, l, c, d, h, u, p, f, m, g, v, y, b, w, x, C, S, T, E, $, M, P) {
                function z() {
                    this.reset()
                }
                return z.prototype.apply = function(d) {
                    if (null == (d = e.extend(!0, {}, this.defaults, d)).dataAdapter) {
                        if (null != d.ajax ? d.dataAdapter = f : null != d.data ? d.dataAdapter = p : d.dataAdapter = u, 0 < d.minimumInputLength && (d.dataAdapter = c.Decorate(d.dataAdapter, v)), 0 < d.maximumInputLength && (d.dataAdapter = c.Decorate(d.dataAdapter, y)), 0 < d.maximumSelectionLength && (d.dataAdapter = c.Decorate(d.dataAdapter, b)), d.tags && (d.dataAdapter = c.Decorate(d.dataAdapter, m)), null == d.tokenSeparators && null == d.tokenizer || (d.dataAdapter = c.Decorate(d.dataAdapter, g)), null != d.query) {
                            var h = t(d.amdBase + "compat/query");
                            d.dataAdapter = c.Decorate(d.dataAdapter, h)
                        }
                        if (null != d.initSelection) {
                            var P = t(d.amdBase + "compat/initSelection");
                            d.dataAdapter = c.Decorate(d.dataAdapter, P)
                        }
                    }
                    if (null == d.resultsAdapter && (d.resultsAdapter = i, null != d.ajax && (d.resultsAdapter = c.Decorate(d.resultsAdapter, S)), null != d.placeholder && (d.resultsAdapter = c.Decorate(d.resultsAdapter, C)), d.selectOnClose && (d.resultsAdapter = c.Decorate(d.resultsAdapter, $))), null == d.dropdownAdapter) {
                        if (d.multiple) d.dropdownAdapter = w;
                        else {
                            var z = c.Decorate(w, x);
                            d.dropdownAdapter = z
                        }
                        if (0 !== d.minimumResultsForSearch && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, E)), d.closeOnSelect && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, M)), null != d.dropdownCssClass || null != d.dropdownCss || null != d.adaptDropdownCssClass) {
                            var k = t(d.amdBase + "compat/dropdownCss");
                            d.dropdownAdapter = c.Decorate(d.dropdownAdapter, k)
                        }
                        d.dropdownAdapter = c.Decorate(d.dropdownAdapter, T)
                    }
                    if (null == d.selectionAdapter) {
                        if (d.multiple ? d.selectionAdapter = n : d.selectionAdapter = s, null != d.placeholder && (d.selectionAdapter = c.Decorate(d.selectionAdapter, a)), d.allowClear && (d.selectionAdapter = c.Decorate(d.selectionAdapter, r)), d.multiple && (d.selectionAdapter = c.Decorate(d.selectionAdapter, o)), null != d.containerCssClass || null != d.containerCss || null != d.adaptContainerCssClass) {
                            var _ = t(d.amdBase + "compat/containerCss");
                            d.selectionAdapter = c.Decorate(d.selectionAdapter, _)
                        }
                        d.selectionAdapter = c.Decorate(d.selectionAdapter, l)
                    }
                    d.language = this._resolveLanguage(d.language), d.language.push("en");
                    for (var L = [], A = 0; A < d.language.length; A++) {
                        var I = d.language[A]; - 1 === L.indexOf(I) && L.push(I)
                    }
                    return d.language = L, d.translations = this._processTranslations(d.language, d.debug), d
                }, z.prototype.reset = function() {
                    function t(e) {
                        return e.replace(/[^\u0000-\u007E]/g, (function(e) {
                            return h[e] || e
                        }))
                    }
                    this.defaults = {
                        amdBase: "./",
                        amdLanguageBase: "./i18n/",
                        closeOnSelect: !0,
                        debug: !1,
                        dropdownAutoWidth: !1,
                        escapeMarkup: c.escapeMarkup,
                        language: {},
                        matcher: function i(s, n) {
                            if ("" === e.trim(s.term)) return n;
                            if (n.children && 0 < n.children.length) {
                                for (var a = e.extend(!0, {}, n), r = n.children.length - 1; 0 <= r; r--) null == i(s, n.children[r]) && a.children.splice(r, 1);
                                return 0 < a.children.length ? a : i(s, a)
                            }
                            var o = t(n.text).toUpperCase(),
                                l = t(s.term).toUpperCase();
                            return -1 < o.indexOf(l) ? n : null
                        },
                        minimumInputLength: 0,
                        maximumInputLength: 0,
                        maximumSelectionLength: 0,
                        minimumResultsForSearch: 0,
                        selectOnClose: !1,
                        scrollAfterSelect: !1,
                        sorter: function(e) {
                            return e
                        },
                        templateResult: function(e) {
                            return e.text
                        },
                        templateSelection: function(e) {
                            return e.text
                        },
                        theme: "default",
                        width: "resolve"
                    }
                }, z.prototype.applyFromElement = function(e, t) {
                    var i = e.language,
                        s = this.defaults.language,
                        n = t.prop("lang"),
                        a = t.closest("[lang]").prop("lang"),
                        r = Array.prototype.concat.call(this._resolveLanguage(n), this._resolveLanguage(i), this._resolveLanguage(s), this._resolveLanguage(a));
                    return e.language = r, e
                }, z.prototype._resolveLanguage = function(t) {
                    if (!t) return [];
                    if (e.isEmptyObject(t)) return [];
                    if (e.isPlainObject(t)) return [t];
                    var i;
                    i = e.isArray(t) ? t : [t];
                    for (var s = [], n = 0; n < i.length; n++)
                        if (s.push(i[n]), "string" == typeof i[n] && 0 < i[n].indexOf("-")) {
                            var a = i[n].split("-")[0];
                            s.push(a)
                        }
                    return s
                }, z.prototype._processTranslations = function(t, i) {
                    for (var s = new d, n = 0; n < t.length; n++) {
                        var a = new d,
                            r = t[n];
                        if ("string" == typeof r) try {
                            a = d.loadPath(r)
                        } catch (t) {
                            try {
                                r = this.defaults.amdLanguageBase + r, a = d.loadPath(r)
                            } catch (t) {
                                i && window.console && console.warn && console.warn('Select2: The language file for "' + r + '" could not be automatically loaded. A fallback will be used instead.')
                            }
                        } else a = e.isPlainObject(r) ? new d(r) : r;
                        s.extend(a)
                    }
                    return s
                }, z.prototype.set = function(t, i) {
                    var s = {};
                    s[e.camelCase(t)] = i;
                    var n = c._convertData(s);
                    e.extend(!0, this.defaults, n)
                }, new z
            })), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], (function(e, t, i, s) {
                function n(t, n) {
                    if (this.options = t, null != n && this.fromElement(n), null != n && (this.options = i.applyFromElement(this.options, n)), this.options = i.apply(this.options), n && n.is("input")) {
                        var a = e(this.get("amdBase") + "compat/inputData");
                        this.options.dataAdapter = s.Decorate(this.options.dataAdapter, a)
                    }
                }
                return n.prototype.fromElement = function(e) {
                    var i = ["select2"];
                    null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), s.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), s.StoreData(e[0], "data", s.GetData(e[0], "select2Tags")), s.StoreData(e[0], "tags", !0)), s.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", s.GetData(e[0], "ajaxUrl")), s.StoreData(e[0], "ajax-Url", s.GetData(e[0], "ajaxUrl")));
                    var n = {};

                    function a(e, t) {
                        return t.toUpperCase()
                    }
                    for (var r = 0; r < e[0].attributes.length; r++) {
                        var o = e[0].attributes[r].name,
                            l = "data-";
                        if (o.substr(0, l.length) == l) {
                            var c = o.substring(l.length),
                                d = s.GetData(e[0], c);
                            n[c.replace(/-([a-z])/g, a)] = d
                        }
                    }
                    t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset && (n = t.extend(!0, {}, e[0].dataset, n));
                    var h = t.extend(!0, {}, s.GetData(e[0]), n);
                    for (var u in h = s._convertData(h)) - 1 < t.inArray(u, i) || (t.isPlainObject(this.options[u]) ? t.extend(this.options[u], h[u]) : this.options[u] = h[u]);
                    return this
                }, n.prototype.get = function(e) {
                    return this.options[e]
                }, n.prototype.set = function(e, t) {
                    this.options[e] = t
                }, n
            })), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], (function(e, t, i, s) {
                var n = function(e, s) {
                    null != i.GetData(e[0], "select2") && i.GetData(e[0], "select2").destroy(), this.$element = e, this.id = this._generateId(e), s = s || {}, this.options = new t(s, e), n.__super__.constructor.call(this);
                    var a = e.attr("tabindex") || 0;
                    i.StoreData(e[0], "old-tabindex", a), e.attr("tabindex", "-1");
                    var r = this.options.get("dataAdapter");
                    this.dataAdapter = new r(e, this.options);
                    var o = this.render();
                    this._placeContainer(o);
                    var l = this.options.get("selectionAdapter");
                    this.selection = new l(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, o);
                    var c = this.options.get("dropdownAdapter");
                    this.dropdown = new c(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, o);
                    var d = this.options.get("resultsAdapter");
                    this.results = new d(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                    var h = this;
                    this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current((function(e) {
                        h.trigger("selection:update", {
                            data: e
                        })
                    })), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), i.StoreData(e[0], "select2", this), e.data("select2", this)
                };
                return i.Extend(n, i.Observable), n.prototype._generateId = function(e) {
                    return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + i.generateChars(2) : i.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
                }, n.prototype._placeContainer = function(e) {
                    e.insertAfter(this.$element);
                    var t = this._resolveWidth(this.$element, this.options.get("width"));
                    null != t && e.css("width", t)
                }, n.prototype._resolveWidth = function(e, t) {
                    var i = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                    if ("resolve" == t) {
                        var s = this._resolveWidth(e, "style");
                        return null != s ? s : this._resolveWidth(e, "element")
                    }
                    if ("element" == t) {
                        var n = e.outerWidth(!1);
                        return n <= 0 ? "auto" : n + "px"
                    }
                    if ("style" != t) return "computedstyle" != t ? t : window.getComputedStyle(e[0]).width;
                    var a = e.attr("style");
                    if ("string" != typeof a) return null;
                    for (var r = a.split(";"), o = 0, l = r.length; o < l; o += 1) {
                        var c = r[o].replace(/\s/g, "").match(i);
                        if (null !== c && 1 <= c.length) return c[1]
                    }
                    return null
                }, n.prototype._bindAdapters = function() {
                    this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                }, n.prototype._registerDomEvents = function() {
                    var t = this;
                    this.$element.on("change.select2", (function() {
                        t.dataAdapter.current((function(e) {
                            t.trigger("selection:update", {
                                data: e
                            })
                        }))
                    })), this.$element.on("focus.select2", (function(e) {
                        t.trigger("focus", e)
                    })), this._syncA = i.bind(this._syncAttributes, this), this._syncS = i.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                    var s = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    null != s ? (this._observer = new s((function(i) {
                        e.each(i, t._syncA), e.each(i, t._syncS)
                    })), this._observer.observe(this.$element[0], {
                        attributes: !0,
                        childList: !0,
                        subtree: !1
                    })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
                }, n.prototype._registerDataEvents = function() {
                    var e = this;
                    this.dataAdapter.on("*", (function(t, i) {
                        e.trigger(t, i)
                    }))
                }, n.prototype._registerSelectionEvents = function() {
                    var t = this,
                        i = ["toggle", "focus"];
                    this.selection.on("toggle", (function() {
                        t.toggleDropdown()
                    })), this.selection.on("focus", (function(e) {
                        t.focus(e)
                    })), this.selection.on("*", (function(s, n) {
                        -1 === e.inArray(s, i) && t.trigger(s, n)
                    }))
                }, n.prototype._registerDropdownEvents = function() {
                    var e = this;
                    this.dropdown.on("*", (function(t, i) {
                        e.trigger(t, i)
                    }))
                }, n.prototype._registerResultsEvents = function() {
                    var e = this;
                    this.results.on("*", (function(t, i) {
                        e.trigger(t, i)
                    }))
                }, n.prototype._registerEvents = function() {
                    var e = this;
                    this.on("open", (function() {
                        e.$container.addClass("select2-container--open")
                    })), this.on("close", (function() {
                        e.$container.removeClass("select2-container--open")
                    })), this.on("enable", (function() {
                        e.$container.removeClass("select2-container--disabled")
                    })), this.on("disable", (function() {
                        e.$container.addClass("select2-container--disabled")
                    })), this.on("blur", (function() {
                        e.$container.removeClass("select2-container--focus")
                    })), this.on("query", (function(t) {
                        e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, (function(i) {
                            e.trigger("results:all", {
                                data: i,
                                query: t
                            })
                        }))
                    })), this.on("query:append", (function(t) {
                        this.dataAdapter.query(t, (function(i) {
                            e.trigger("results:append", {
                                data: i,
                                query: t
                            })
                        }))
                    })), this.on("keypress", (function(t) {
                        var i = t.which;
                        e.isOpen() ? i === s.ESC || i === s.TAB || i === s.UP && t.altKey ? (e.close(), t.preventDefault()) : i === s.ENTER ? (e.trigger("results:select", {}), t.preventDefault()) : i === s.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : i === s.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : i === s.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (i === s.ENTER || i === s.SPACE || i === s.DOWN && t.altKey) && (e.open(), t.preventDefault())
                    }))
                }, n.prototype._syncAttributes = function() {
                    this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                }, n.prototype._syncSubtree = function(e, t) {
                    var i = !1,
                        s = this;
                    if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                        if (t)
                            if (t.addedNodes && 0 < t.addedNodes.length)
                                for (var n = 0; n < t.addedNodes.length; n++) t.addedNodes[n].selected && (i = !0);
                            else t.removedNodes && 0 < t.removedNodes.length && (i = !0);
                        else i = !0;
                        i && this.dataAdapter.current((function(e) {
                            s.trigger("selection:update", {
                                data: e
                            })
                        }))
                    }
                }, n.prototype.trigger = function(e, t) {
                    var i = n.__super__.trigger,
                        s = {
                            open: "opening",
                            close: "closing",
                            select: "selecting",
                            unselect: "unselecting",
                            clear: "clearing"
                        };
                    if (void 0 === t && (t = {}), e in s) {
                        var a = s[e],
                            r = {
                                prevented: !1,
                                name: e,
                                args: t
                            };
                        if (i.call(this, a, r), r.prevented) return void(t.prevented = !0)
                    }
                    i.call(this, e, t)
                }, n.prototype.toggleDropdown = function() {
                    this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                }, n.prototype.open = function() {
                    this.isOpen() || this.trigger("query", {})
                }, n.prototype.close = function() {
                    this.isOpen() && this.trigger("close", {})
                }, n.prototype.isOpen = function() {
                    return this.$container.hasClass("select2-container--open")
                }, n.prototype.hasFocus = function() {
                    return this.$container.hasClass("select2-container--focus")
                }, n.prototype.focus = function(e) {
                    this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                }, n.prototype.enable = function(e) {
                    this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), null != e && 0 !== e.length || (e = [!0]);
                    var t = !e[0];
                    this.$element.prop("disabled", t)
                }, n.prototype.data = function() {
                    this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                    var e = [];
                    return this.dataAdapter.current((function(t) {
                        e = t
                    })), e
                }, n.prototype.val = function(t) {
                    if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
                    var i = t[0];
                    e.isArray(i) && (i = e.map(i, (function(e) {
                        return e.toString()
                    }))), this.$element.val(i).trigger("change")
                }, n.prototype.destroy = function() {
                    this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", i.GetData(this.$element[0], "old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), i.RemoveData(this.$element[0]), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                }, n.prototype.render = function() {
                    var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                    return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), i.StoreData(t[0], "element", this.$element), t
                }, n
            })), t.define("jquery-mousewheel", ["jquery"], (function(e) {
                return e
            })), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], (function(e, t, i, s, n) {
                if (null == e.fn.select2) {
                    var a = ["open", "close", "destroy"];
                    e.fn.select2 = function(t) {
                        if ("object" == typeof(t = t || {})) return this.each((function() {
                            var s = e.extend(!0, {}, t);
                            new i(e(this), s)
                        })), this;
                        if ("string" != typeof t) throw new Error("Invalid arguments for Select2: " + t);
                        var s, r = Array.prototype.slice.call(arguments, 1);
                        return this.each((function() {
                            var e = n.GetData(this, "select2");
                            null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), s = e[t].apply(e, r)
                        })), -1 < e.inArray(t, a) ? this : s
                    }
                }
                return null == e.fn.select2.defaults && (e.fn.select2.defaults = s), i
            })), {
                define: t.define,
                require: t.require
            }
        }(),
        i = t.require("jquery.select2");
    return e.fn.select2.amd = t, i
})),
function(e) {
    var t = e.fn.select2.amd.require("select2/defaults");
    e.extend(t.defaults, {
        dropdownPosition: "auto"
    });
    var i = e.fn.select2.amd.require("select2/dropdown/attachBody");
    i.prototype._positionDropdown;
    i.prototype._positionDropdown = function() {
        var t = e(window),
            i = this.$dropdown.hasClass("select2-dropdown--above"),
            s = this.$dropdown.hasClass("select2-dropdown--below"),
            n = null,
            a = this.$container.offset();
        a.bottom = a.top + this.$container.outerHeight(!1);
        var r = {
            height: this.$container.outerHeight(!1)
        };
        r.top = a.top, r.bottom = a.top + r.height;
        var o = this.$dropdown.outerHeight(!1),
            l = t.scrollTop(),
            c = t.scrollTop() + t.height(),
            d = l < a.top - o,
            h = c > a.bottom + o,
            u = {
                left: a.left,
                top: r.bottom
            },
            p = this.$dropdownParent;
        "static" === p.css("position") && (p = p.offsetParent());
        var f = p.offset();
        u.top -= f.top, u.left -= f.left;
        var m = this.options.get("dropdownPosition");
        "above" === m || "below" === m ? n = m : (i || s || (n = "below"), h || !d || i ? !d && h && i && (n = "below") : n = "above"), ("above" == n || i && "below" !== n) && (u.top = r.top - f.top - o), null != n && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + n), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + n)), this.$dropdownContainer.css(u)
    }
}(window.jQuery),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, (function() {
    "use strict";
    var e = "undefined" == typeof document ? {
            body: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return null
            },
            querySelectorAll: function() {
                return []
            },
            getElementById: function() {
                return null
            },
            createEvent: function() {
                return {
                    initEvent: function() {}
                }
            },
            createElement: function() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document,
        t = "undefined" == typeof window ? {
            document: e,
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            CustomEvent: function() {
                return this
            },
            addEventListener: function() {},
            removeEventListener: function() {},
            getComputedStyle: function() {
                return {
                    getPropertyValue: function() {
                        return ""
                    }
                }
            },
            Image: function() {},
            Date: function() {},
            screen: {},
            setTimeout: function() {},
            clearTimeout: function() {}
        } : window,
        i = function(e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return this.length = e.length, this
        };

    function s(s, n) {
        var a = [],
            r = 0;
        if (s && !n && s instanceof i) return s;
        if (s)
            if ("string" == typeof s) {
                var o, l, c = s.trim();
                if (c.indexOf("<") >= 0 && c.indexOf(">") >= 0) {
                    var d = "div";
                    for (0 === c.indexOf("<li") && (d = "ul"), 0 === c.indexOf("<tr") && (d = "tbody"), 0 !== c.indexOf("<td") && 0 !== c.indexOf("<th") || (d = "tr"), 0 === c.indexOf("<tbody") && (d = "table"), 0 === c.indexOf("<option") && (d = "select"), (l = e.createElement(d)).innerHTML = c, r = 0; r < l.childNodes.length; r += 1) a.push(l.childNodes[r])
                } else
                    for (o = n || "#" !== s[0] || s.match(/[ .<>:~]/) ? (n || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])], r = 0; r < o.length; r += 1) o[r] && a.push(o[r])
            } else if (s.nodeType || s === t || s === e) a.push(s);
        else if (s.length > 0 && s[0].nodeType)
            for (r = 0; r < s.length; r += 1) a.push(s[r]);
        return new i(a)
    }

    function n(e) {
        for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }
    s.fn = i.prototype, s.Class = i, s.Dom7 = i;
    var a = {
        addClass: function(e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
            return this
        },
        attr: function(e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var s = 0; s < this.length; s += 1)
                if (2 === i.length) this[s].setAttribute(e, t);
                else
                    for (var n in e) this[s][n] = e[n], this[s].setAttribute(n, e[n]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var i;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) return i.dom7ElementDataStorage && e in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[e] : i.getAttribute("data-" + e) || void 0
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var n = t[0],
                a = t[1],
                r = t[2],
                o = t[3];

            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e), s(t).is(a)) r.apply(t, i);
                    else
                        for (var n = s(t).parents(), o = 0; o < n.length; o += 1) s(n[o]).is(a) && r.apply(n[o], i)
                }
            }

            function c(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
            }
            "function" == typeof t[1] && (n = (e = t)[0], r = e[1], o = e[2], a = void 0), o || (o = !1);
            for (var d, h = n.split(" "), u = 0; u < this.length; u += 1) {
                var p = this[u];
                if (a)
                    for (d = 0; d < h.length; d += 1) {
                        var f = h[d];
                        p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []), p.dom7LiveListeners[f].push({
                            listener: r,
                            proxyListener: l
                        }), p.addEventListener(f, l, o)
                    } else
                        for (d = 0; d < h.length; d += 1) {
                            var m = h[d];
                            p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[m] || (p.dom7Listeners[m] = []), p.dom7Listeners[m].push({
                                listener: r,
                                proxyListener: c
                            }), p.addEventListener(m, c, o)
                        }
            }
            return this
        },
        off: function() {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var s = t[0],
                n = t[1],
                a = t[2],
                r = t[3];
            "function" == typeof t[1] && (s = (e = t)[0], a = e[1], r = e[2], n = void 0), r || (r = !1);
            for (var o = s.split(" "), l = 0; l < o.length; l += 1)
                for (var c = o[l], d = 0; d < this.length; d += 1) {
                    var h = this[d],
                        u = void 0;
                    if (!n && h.dom7Listeners ? u = h.dom7Listeners[c] : n && h.dom7LiveListeners && (u = h.dom7LiveListeners[c]), u && u.length)
                        for (var p = u.length - 1; p >= 0; p -= 1) {
                            var f = u[p];
                            a && f.listener === a || a && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === a ? (h.removeEventListener(c, f.proxyListener, r), u.splice(p, 1)) : a || (h.removeEventListener(c, f.proxyListener, r), u.splice(p, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var i = [], s = arguments.length; s--;) i[s] = arguments[s];
            for (var n = i[0].split(" "), a = i[1], r = 0; r < n.length; r += 1)
                for (var o = n[r], l = 0; l < this.length; l += 1) {
                    var c = this[l],
                        d = void 0;
                    try {
                        d = new t.CustomEvent(o, {
                            detail: a,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (t) {
                        (d = e.createEvent("Event")).initEvent(o, !0, !0), d.detail = a
                    }
                    c.dom7EventData = i.filter((function(e, t) {
                        return t > 0
                    })), c.dispatchEvent(d), c.dom7EventData = [], delete c.dom7EventData
                }
            return this
        },
        transitionEnd: function(e) {
            var t, i = ["webkitTransitionEnd", "transitionend"],
                s = this;

            function n(a) {
                if (a.target === this)
                    for (e.call(this, a), t = 0; t < i.length; t += 1) s.off(i[t], n)
            }
            if (e)
                for (t = 0; t < i.length; t += 1) s.on(i[t], n);
            return this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (this.length > 0) {
                var i = this[0],
                    s = i.getBoundingClientRect(),
                    n = e.body,
                    a = i.clientTop || n.clientTop || 0,
                    r = i.clientLeft || n.clientLeft || 0,
                    o = i === t ? t.scrollY : i.scrollTop,
                    l = i === t ? t.scrollX : i.scrollLeft;
                return {
                    top: s.top + o - a,
                    left: s.left + l - r
                }
            }
            return null
        },
        css: function(e, i) {
            var s;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (s = 0; s < this.length; s += 1)
                        for (var n in e) this[s].style[n] = e[n];
                    return this
                }
                if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (s = 0; s < this.length; s += 1) this[s].style[e] = i;
                return this
            }
            return this
        },
        each: function(e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(n) {
            var a, r, o = this[0];
            if (!o || void 0 === n) return !1;
            if ("string" == typeof n) {
                if (o.matches) return o.matches(n);
                if (o.webkitMatchesSelector) return o.webkitMatchesSelector(n);
                if (o.msMatchesSelector) return o.msMatchesSelector(n);
                for (a = s(n), r = 0; r < a.length; r += 1)
                    if (a[r] === o) return !0;
                return !1
            }
            if (n === e) return o === e;
            if (n === t) return o === t;
            if (n.nodeType || n instanceof i) {
                for (a = n.nodeType ? [n] : n, r = 0; r < a.length; r += 1)
                    if (a[r] === o) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            var t, s = this.length;
            return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            for (var t, s = [], n = arguments.length; n--;) s[n] = arguments[n];
            for (var a = 0; a < s.length; a += 1) {
                t = s[a];
                for (var r = 0; r < this.length; r += 1)
                    if ("string" == typeof t) {
                        var o = e.createElement("div");
                        for (o.innerHTML = t; o.firstChild;) this[r].appendChild(o.firstChild)
                    } else if (t instanceof i)
                    for (var l = 0; l < t.length; l += 1) this[r].appendChild(t[l]);
                else this[r].appendChild(t)
            }
            return this
        },
        prepend: function(t) {
            var s, n;
            for (s = 0; s < this.length; s += 1)
                if ("string" == typeof t) {
                    var a = e.createElement("div");
                    for (a.innerHTML = t, n = a.childNodes.length - 1; n >= 0; n -= 1) this[s].insertBefore(a.childNodes[n], this[s].childNodes[0])
                } else if (t instanceof i)
                for (n = 0; n < t.length; n += 1) this[s].insertBefore(t[n], this[s].childNodes[0]);
            else this[s].insertBefore(t, this[s].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
        },
        nextAll: function(e) {
            var t = [],
                n = this[0];
            if (!n) return new i([]);
            for (; n.nextElementSibling;) {
                var a = n.nextElementSibling;
                e ? s(a).is(e) && t.push(a) : t.push(a), n = a
            }
            return new i(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([])
            }
            return new i([])
        },
        prevAll: function(e) {
            var t = [],
                n = this[0];
            if (!n) return new i([]);
            for (; n.previousElementSibling;) {
                var a = n.previousElementSibling;
                e ? s(a).is(e) && t.push(a) : t.push(a), n = a
            }
            return new i(t)
        },
        parent: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return s(n(t))
        },
        parents: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var a = this[i].parentNode; a;) e ? s(a).is(e) && t.push(a) : t.push(a), a = a.parentNode;
            return s(n(t))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            for (var t = [], s = 0; s < this.length; s += 1)
                for (var n = this[s].querySelectorAll(e), a = 0; a < n.length; a += 1) t.push(n[a]);
            return new i(t)
        },
        children: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var r = this[a].childNodes, o = 0; o < r.length; o += 1) e ? 1 === r[o].nodeType && s(r[o]).is(e) && t.push(r[o]) : 1 === r[o].nodeType && t.push(r[o]);
            return new i(n(t))
        },
        filter: function(e) {
            for (var t = [], s = 0; s < this.length; s += 1) e.call(this[s], s, this[s]) && t.push(this[s]);
            return new i(t)
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i, n;
            for (i = 0; i < e.length; i += 1) {
                var a = s(e[i]);
                for (n = 0; n < a.length; n += 1) this[this.length] = a[n], this.length += 1
            }
            return this
        },
        styles: function() {
            return this[0] ? t.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(a).forEach((function(e) {
        s.fn[e] = s.fn[e] || a[e]
    }));
    var r = {
            deleteProps: function(e) {
                var t = e;
                Object.keys(t).forEach((function(e) {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }))
            },
            nextTick: function(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            },
            now: function() {
                return Date.now()
            },
            getTranslate: function(e, i) {
                var s, n, a;
                void 0 === i && (i = "x");
                var r = t.getComputedStyle(e, null);
                return t.WebKitCSSMatrix ? ((n = r.transform || r.webkitTransform).split(",").length > 6 && (n = n.split(", ").map((function(e) {
                    return e.replace(",", ".")
                })).join(", ")), a = new t.WebKitCSSMatrix("none" === n ? "" : n)) : s = (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (n = t.WebKitCSSMatrix ? a.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (n = t.WebKitCSSMatrix ? a.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), n || 0
            },
            parseUrlQuery: function(e) {
                var i, s, n, a, r = {},
                    o = e || t.location.href;
                if ("string" == typeof o && o.length)
                    for (a = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter((function(e) {
                            return "" !== e
                        }))).length, i = 0; i < a; i += 1) n = s[i].replace(/#\S+/g, "").split("="), r[decodeURIComponent(n[0])] = void 0 === n[1] ? void 0 : decodeURIComponent(n[1]) || "";
                return r
            },
            isObject: function(e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
            },
            extend: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                    var n = e[s];
                    if (null != n)
                        for (var a = Object.keys(Object(n)), o = 0, l = a.length; o < l; o += 1) {
                            var c = a[o],
                                d = Object.getOwnPropertyDescriptor(n, c);
                            void 0 !== d && d.enumerable && (r.isObject(i[c]) && r.isObject(n[c]) ? r.extend(i[c], n[c]) : !r.isObject(i[c]) && r.isObject(n[c]) ? (i[c] = {}, r.extend(i[c], n[c])) : i[c] = n[c])
                        }
                }
                return i
            }
        },
        o = {
            touch: t.Modernizr && !0 === t.Modernizr.touch || !!(t.navigator.maxTouchPoints > 0 || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
            pointerEvents: !!t.PointerEvent && "maxTouchPoints" in t.navigator && t.navigator.maxTouchPoints > 0,
            observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
            passiveListener: function() {
                var e = !1;
                try {
                    var i = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    t.addEventListener("testPassiveListener", null, i)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in t
        },
        l = function(e) {
            void 0 === e && (e = {});
            var t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach((function(e) {
                t.on(e, t.params.on[e])
            }))
        },
        c = {
            components: {
                configurable: !0
            }
        };
    l.prototype.on = function(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        var n = i ? "unshift" : "push";
        return e.split(" ").forEach((function(e) {
            s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][n](t)
        })), s
    }, l.prototype.once = function(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;

        function n() {
            for (var i = [], a = arguments.length; a--;) i[a] = arguments[a];
            s.off(e, n), n.f7proxy && delete n.f7proxy, t.apply(s, i)
        }
        return n.f7proxy = t, s.on(e, n, i)
    }, l.prototype.off = function(e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach((function(e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((function(s, n) {
                (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(n, 1)
            }))
        })), i) : i
    }, l.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var i, s, n, a = this;
        if (!a.eventsListeners) return a;
        "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), n = a) : (i = e[0].events, s = e[0].data, n = e[0].context || a);
        var r = Array.isArray(i) ? i : i.split(" ");
        return r.forEach((function(e) {
            if (a.eventsListeners && a.eventsListeners[e]) {
                var t = [];
                a.eventsListeners[e].forEach((function(e) {
                    t.push(e)
                })), t.forEach((function(e) {
                    e.apply(n, s)
                }))
            }
        })), a
    }, l.prototype.useModulesParams = function(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function(i) {
            var s = t.modules[i];
            s.params && r.extend(e, s.params)
        }))
    }, l.prototype.useModules = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach((function(i) {
            var s = t.modules[i],
                n = e[i] || {};
            s.instance && Object.keys(s.instance).forEach((function(e) {
                var i = s.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i
            })), s.on && t.on && Object.keys(s.on).forEach((function(e) {
                t.on(e, s.on[e])
            })), s.create && s.create.bind(t)(n)
        }))
    }, c.components.set = function(e) {
        this.use && this.use(e)
    }, l.installModule = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var s = this;
        s.prototype.modules || (s.prototype.modules = {});
        var n = e.name || Object.keys(s.prototype.modules).length + "_" + r.now();
        return s.prototype.modules[n] = e, e.proto && Object.keys(e.proto).forEach((function(t) {
            s.prototype[t] = e.proto[t]
        })), e.static && Object.keys(e.static).forEach((function(t) {
            s[t] = e.static[t]
        })), e.install && e.install.apply(s, t), s
    }, l.use = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var s = this;
        return Array.isArray(e) ? (e.forEach((function(e) {
            return s.installModule(e)
        })), s) : s.installModule.apply(s, [e].concat(t))
    }, Object.defineProperties(l, c);
    var d, h, u, p, f, m, g, v, y, b, w, x, C, S, T, E = {
            updateSize: function() {
                var e, t, i = this.$el;
                e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), r.extend(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t
                }))
            },
            updateSlides: function() {
                var e = this.params,
                    i = this.$wrapperEl,
                    s = this.size,
                    n = this.rtlTranslate,
                    a = this.wrongRTL,
                    o = this.virtual && e.virtual.enabled,
                    l = o ? this.virtual.slides.length : this.slides.length,
                    c = i.children("." + this.params.slideClass),
                    d = o ? this.virtual.slides.length : c.length,
                    h = [],
                    u = [],
                    p = [];

                function f(t) {
                    return !e.cssMode || t !== c.length - 1
                }
                var m = e.slidesOffsetBefore;
                "function" == typeof m && (m = e.slidesOffsetBefore.call(this));
                var g = e.slidesOffsetAfter;
                "function" == typeof g && (g = e.slidesOffsetAfter.call(this));
                var v = this.snapGrid.length,
                    y = this.snapGrid.length,
                    b = e.spaceBetween,
                    w = -m,
                    x = 0,
                    C = 0;
                if (void 0 !== s) {
                    var S, T;
                    "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * s), this.virtualSize = -b, n ? c.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : c.css({
                        marginRight: "",
                        marginBottom: ""
                    }), e.slidesPerColumn > 1 && (S = Math.floor(d / e.slidesPerColumn) === d / this.params.slidesPerColumn ? d : Math.ceil(d / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (S = Math.max(S, e.slidesPerView * e.slidesPerColumn)));
                    for (var E, $ = e.slidesPerColumn, M = S / $, P = Math.floor(d / e.slidesPerColumn), z = 0; z < d; z += 1) {
                        T = 0;
                        var k = c.eq(z);
                        if (e.slidesPerColumn > 1) {
                            var _ = void 0,
                                L = void 0,
                                A = void 0;
                            if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                                var I = Math.floor(z / (e.slidesPerGroup * e.slidesPerColumn)),
                                    O = z - e.slidesPerColumn * e.slidesPerGroup * I,
                                    D = 0 === I ? e.slidesPerGroup : Math.min(Math.ceil((d - I * $ * e.slidesPerGroup) / $), e.slidesPerGroup);
                                _ = (L = O - (A = Math.floor(O / D)) * D + I * e.slidesPerGroup) + A * S / $, k.css({
                                    "-webkit-box-ordinal-group": _,
                                    "-moz-box-ordinal-group": _,
                                    "-ms-flex-order": _,
                                    "-webkit-order": _,
                                    order: _
                                })
                            } else "column" === e.slidesPerColumnFill ? (A = z - (L = Math.floor(z / $)) * $, (L > P || L === P && A === $ - 1) && (A += 1) >= $ && (A = 0, L += 1)) : L = z - (A = Math.floor(z / M)) * M;
                            k.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== A && e.spaceBetween && e.spaceBetween + "px")
                        }
                        if ("none" !== k.css("display")) {
                            if ("auto" === e.slidesPerView) {
                                var H = t.getComputedStyle(k[0], null),
                                    R = k[0].style.transform,
                                    q = k[0].style.webkitTransform;
                                if (R && (k[0].style.transform = "none"), q && (k[0].style.webkitTransform = "none"), e.roundLengths) T = this.isHorizontal() ? k.outerWidth(!0) : k.outerHeight(!0);
                                else if (this.isHorizontal()) {
                                    var F = parseFloat(H.getPropertyValue("width")),
                                        N = parseFloat(H.getPropertyValue("padding-left")),
                                        B = parseFloat(H.getPropertyValue("padding-right")),
                                        j = parseFloat(H.getPropertyValue("margin-left")),
                                        W = parseFloat(H.getPropertyValue("margin-right")),
                                        G = H.getPropertyValue("box-sizing");
                                    T = G && "border-box" === G ? F + j + W : F + N + B + j + W
                                } else {
                                    var Y = parseFloat(H.getPropertyValue("height")),
                                        X = parseFloat(H.getPropertyValue("padding-top")),
                                        V = parseFloat(H.getPropertyValue("padding-bottom")),
                                        U = parseFloat(H.getPropertyValue("margin-top")),
                                        Z = parseFloat(H.getPropertyValue("margin-bottom")),
                                        K = H.getPropertyValue("box-sizing");
                                    T = K && "border-box" === K ? Y + U + Z : Y + X + V + U + Z
                                }
                                R && (k[0].style.transform = R), q && (k[0].style.webkitTransform = q), e.roundLengths && (T = Math.floor(T))
                            } else T = (s - (e.slidesPerView - 1) * b) / e.slidesPerView, e.roundLengths && (T = Math.floor(T)), c[z] && (this.isHorizontal() ? c[z].style.width = T + "px" : c[z].style.height = T + "px");
                            c[z] && (c[z].swiperSlideSize = T), p.push(T), e.centeredSlides ? (w = w + T / 2 + x / 2 + b, 0 === x && 0 !== z && (w = w - s / 2 - b), 0 === z && (w = w - s / 2 - b), Math.abs(w) < .001 && (w = 0), e.roundLengths && (w = Math.floor(w)), C % e.slidesPerGroup == 0 && h.push(w), u.push(w)) : (e.roundLengths && (w = Math.floor(w)), (C - Math.min(this.params.slidesPerGroupSkip, C)) % this.params.slidesPerGroup == 0 && h.push(w), u.push(w), w = w + T + b), this.virtualSize += T + b, x = T, C += 1
                        }
                    }
                    if (this.virtualSize = Math.max(this.virtualSize, s) + g, n && a && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
                            width: this.virtualSize + e.spaceBetween + "px"
                        }), e.setWrapperSize && (this.isHorizontal() ? i.css({
                            width: this.virtualSize + e.spaceBetween + "px"
                        }) : i.css({
                            height: this.virtualSize + e.spaceBetween + "px"
                        })), e.slidesPerColumn > 1 && (this.virtualSize = (T + e.spaceBetween) * S, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({
                            width: this.virtualSize + e.spaceBetween + "px"
                        }) : i.css({
                            height: this.virtualSize + e.spaceBetween + "px"
                        }), e.centeredSlides)) {
                        E = [];
                        for (var Q = 0; Q < h.length; Q += 1) {
                            var J = h[Q];
                            e.roundLengths && (J = Math.floor(J)), h[Q] < this.virtualSize + h[0] && E.push(J)
                        }
                        h = E
                    }
                    if (!e.centeredSlides) {
                        E = [];
                        for (var ee = 0; ee < h.length; ee += 1) {
                            var te = h[ee];
                            e.roundLengths && (te = Math.floor(te)), h[ee] <= this.virtualSize - s && E.push(te)
                        }
                        h = E, Math.floor(this.virtualSize - s) - Math.floor(h[h.length - 1]) > 1 && h.push(this.virtualSize - s)
                    }
                    if (0 === h.length && (h = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? n ? c.filter(f).css({
                            marginLeft: b + "px"
                        }) : c.filter(f).css({
                            marginRight: b + "px"
                        }) : c.filter(f).css({
                            marginBottom: b + "px"
                        })), e.centeredSlides && e.centeredSlidesBounds) {
                        var ie = 0;
                        p.forEach((function(t) {
                            ie += t + (e.spaceBetween ? e.spaceBetween : 0)
                        }));
                        var se = (ie -= e.spaceBetween) - s;
                        h = h.map((function(e) {
                            return e < 0 ? -m : e > se ? se + g : e
                        }))
                    }
                    if (e.centerInsufficientSlides) {
                        var ne = 0;
                        if (p.forEach((function(t) {
                                ne += t + (e.spaceBetween ? e.spaceBetween : 0)
                            })), (ne -= e.spaceBetween) < s) {
                            var ae = (s - ne) / 2;
                            h.forEach((function(e, t) {
                                h[t] = e - ae
                            })), u.forEach((function(e, t) {
                                u[t] = e + ae
                            }))
                        }
                    }
                    r.extend(this, {
                        slides: c,
                        snapGrid: h,
                        slidesGrid: u,
                        slidesSizesGrid: p
                    }), d !== l && this.emit("slidesLengthChange"), h.length !== v && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), u.length !== y && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
                }
            },
            updateAutoHeight: function(e) {
                var t, i = [],
                    s = 0;
                if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                    if (this.params.centeredSlides) i.push.apply(i, this.visibleSlides);
                    else
                        for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                            var n = this.activeIndex + t;
                            if (n > this.slides.length) break;
                            i.push(this.slides.eq(n)[0])
                        } else i.push(this.slides.eq(this.activeIndex)[0]);
                for (t = 0; t < i.length; t += 1)
                    if (void 0 !== i[t]) {
                        var a = i[t].offsetHeight;
                        s = a > s ? a : s
                    }
                s && this.$wrapperEl.css("height", s + "px")
            },
            updateSlidesOffset: function() {
                for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
            },
            updateSlidesProgress: function(e) {
                void 0 === e && (e = this && this.translate || 0);
                var t = this.params,
                    i = this.slides,
                    n = this.rtlTranslate;
                if (0 !== i.length) {
                    void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                    var a = -e;
                    n && (a = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                    for (var r = 0; r < i.length; r += 1) {
                        var o = i[r],
                            l = (a + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);
                        if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
                            var c = -(a - o.swiperSlideOffset),
                                d = c + this.slidesSizesGrid[r];
                            (c >= 0 && c < this.size - 1 || d > 1 && d <= this.size || c <= 0 && d >= this.size) && (this.visibleSlides.push(o), this.visibleSlidesIndexes.push(r), i.eq(r).addClass(t.slideVisibleClass))
                        }
                        o.progress = n ? -l : l
                    }
                    this.visibleSlides = s(this.visibleSlides)
                }
            },
            updateProgress: function(e) {
                if (void 0 === e) {
                    var t = this.rtlTranslate ? -1 : 1;
                    e = this && this.translate && this.translate * t || 0
                }
                var i = this.params,
                    s = this.maxTranslate() - this.minTranslate(),
                    n = this.progress,
                    a = this.isBeginning,
                    o = this.isEnd,
                    l = a,
                    c = o;
                0 === s ? (n = 0, a = !0, o = !0) : (a = (n = (e - this.minTranslate()) / s) <= 0, o = n >= 1), r.extend(this, {
                    progress: n,
                    isBeginning: a,
                    isEnd: o
                }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), a && !l && this.emit("reachBeginning toEdge"), o && !c && this.emit("reachEnd toEdge"), (l && !a || c && !o) && this.emit("fromEdge"), this.emit("progress", n)
            },
            updateSlidesClasses: function() {
                var e, t = this.slides,
                    i = this.params,
                    s = this.$wrapperEl,
                    n = this.activeIndex,
                    a = this.realIndex,
                    r = this.virtual && i.virtual.enabled;
                t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = r ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + n + '"]') : t.eq(n)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass));
                var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
                var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
            },
            updateActiveIndex: function(e) {
                var t, i = this.rtlTranslate ? this.translate : -this.translate,
                    s = this.slidesGrid,
                    n = this.snapGrid,
                    a = this.params,
                    o = this.activeIndex,
                    l = this.realIndex,
                    c = this.snapIndex,
                    d = e;
                if (void 0 === d) {
                    for (var h = 0; h < s.length; h += 1) void 0 !== s[h + 1] ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2 ? d = h : i >= s[h] && i < s[h + 1] && (d = h + 1) : i >= s[h] && (d = h);
                    a.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                }
                if (n.indexOf(i) >= 0) t = n.indexOf(i);
                else {
                    var u = Math.min(a.slidesPerGroupSkip, d);
                    t = u + Math.floor((d - u) / a.slidesPerGroup)
                }
                if (t >= n.length && (t = n.length - 1), d !== o) {
                    var p = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                    r.extend(this, {
                        snapIndex: t,
                        realIndex: p,
                        previousIndex: o,
                        activeIndex: d
                    }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), l !== p && this.emit("realIndexChange"), (this.initialized || this.runCallbacksOnInit) && this.emit("slideChange")
                } else t !== c && (this.snapIndex = t, this.emit("snapIndexChange"))
            },
            updateClickedSlide: function(e) {
                var t = this.params,
                    i = s(e.target).closest("." + t.slideClass)[0],
                    n = !1;
                if (i)
                    for (var a = 0; a < this.slides.length; a += 1) this.slides[a] === i && (n = !0);
                if (!i || !n) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
                this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
            }
        },
        $ = {
            getTranslate: function(e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var t = this.params,
                    i = this.rtlTranslate,
                    s = this.translate,
                    n = this.$wrapperEl;
                if (t.virtualTranslate) return i ? -s : s;
                if (t.cssMode) return s;
                var a = r.getTranslate(n[0], e);
                return i && (a = -a), a || 0
            },
            setTranslate: function(e, t) {
                var i = this.rtlTranslate,
                    s = this.params,
                    n = this.$wrapperEl,
                    a = this.wrapperEl,
                    r = this.progress,
                    o = 0,
                    l = 0;
                this.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.cssMode ? a[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || n.transform("translate3d(" + o + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;
                var c = this.maxTranslate() - this.minTranslate();
                (0 === c ? 0 : (e - this.minTranslate()) / c) !== r && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, i, s, n) {
                var a;
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
                var r = this,
                    o = r.params,
                    l = r.wrapperEl;
                if (r.animating && o.preventInteractionOnTransition) return !1;
                var c, d = r.minTranslate(),
                    h = r.maxTranslate();
                if (c = s && e > d ? d : s && e < h ? h : e, r.updateProgress(c), o.cssMode) {
                    var u = r.isHorizontal();
                    return 0 === t ? l[u ? "scrollLeft" : "scrollTop"] = -c : l.scrollTo ? l.scrollTo(((a = {})[u ? "left" : "top"] = -c, a.behavior = "smooth", a)) : l[u ? "scrollLeft" : "scrollTop"] = -c, !0
                }
                return 0 === t ? (r.setTransition(0), r.setTranslate(c), i && (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), i && (r.emit("beforeTransitionStart", t, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"))
                }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
            }
        },
        M = {
            slideTo: function(e, t, i, s) {
                var n;
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                var a = this,
                    r = e;
                r < 0 && (r = 0);
                var o = a.params,
                    l = a.snapGrid,
                    c = a.slidesGrid,
                    d = a.previousIndex,
                    h = a.activeIndex,
                    u = a.rtlTranslate,
                    p = a.wrapperEl;
                if (a.animating && o.preventInteractionOnTransition) return !1;
                var f = Math.min(a.params.slidesPerGroupSkip, r),
                    m = f + Math.floor((r - f) / a.params.slidesPerGroup);
                m >= l.length && (m = l.length - 1), (h || o.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
                var g, v = -l[m];
                if (a.updateProgress(v), o.normalizeSlideIndex)
                    for (var y = 0; y < c.length; y += 1) - Math.floor(100 * v) >= Math.floor(100 * c[y]) && (r = y);
                if (a.initialized && r !== h) {
                    if (!a.allowSlideNext && v < a.translate && v < a.minTranslate()) return !1;
                    if (!a.allowSlidePrev && v > a.translate && v > a.maxTranslate() && (h || 0) !== r) return !1
                }
                if (g = r > h ? "next" : r < h ? "prev" : "reset", u && -v === a.translate || !u && v === a.translate) return a.updateActiveIndex(r), o.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== o.effect && a.setTranslate(v), "reset" !== g && (a.transitionStart(i, g), a.transitionEnd(i, g)), !1;
                if (o.cssMode) {
                    var b = a.isHorizontal();
                    return 0 === t ? p[b ? "scrollLeft" : "scrollTop"] = -v : p.scrollTo ? p.scrollTo(((n = {})[b ? "left" : "top"] = -v, n.behavior = "smooth", n)) : p[b ? "scrollLeft" : "scrollTop"] = -v, !0
                }
                return 0 === t ? (a.setTransition(0), a.setTranslate(v), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, g), a.transitionEnd(i, g)) : (a.setTransition(t), a.setTranslate(v), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, g), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
                    a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(i, g))
                }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))), !0
            },
            slideToLoop: function(e, t, i, s) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                var n = e;
                return this.params.loop && (n += this.loopedSlides), this.slideTo(n, t, i, s)
            },
            slideNext: function(e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var s = this.params,
                    n = this.animating,
                    a = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
                if (s.loop) {
                    if (n) return !1;
                    this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                }
                return this.slideTo(this.activeIndex + a, e, t, i)
            },
            slidePrev: function(e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var s = this.params,
                    n = this.animating,
                    a = this.snapGrid,
                    r = this.slidesGrid,
                    o = this.rtlTranslate;
                if (s.loop) {
                    if (n) return !1;
                    this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
                }

                function l(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                var c, d = l(o ? this.translate : -this.translate),
                    h = a.map((function(e) {
                        return l(e)
                    })),
                    u = (r.map((function(e) {
                        return l(e)
                    })), a[h.indexOf(d)], a[h.indexOf(d) - 1]);
                return void 0 === u && s.cssMode && a.forEach((function(e) {
                    !u && d >= e && (u = e)
                })), void 0 !== u && (c = r.indexOf(u)) < 0 && (c = this.activeIndex - 1), this.slideTo(c, e, t, i)
            },
            slideReset: function(e, t, i) {
                return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
            },
            slideToClosest: function(e, t, i, s) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
                var n = this.activeIndex,
                    a = Math.min(this.params.slidesPerGroupSkip, n),
                    r = a + Math.floor((n - a) / this.params.slidesPerGroup),
                    o = this.rtlTranslate ? this.translate : -this.translate;
                if (o >= this.snapGrid[r]) {
                    var l = this.snapGrid[r];
                    o - l > (this.snapGrid[r + 1] - l) * s && (n += this.params.slidesPerGroup)
                } else {
                    var c = this.snapGrid[r - 1];
                    o - c <= (this.snapGrid[r] - c) * s && (n -= this.params.slidesPerGroup)
                }
                return n = Math.max(n, 0), n = Math.min(n, this.slidesGrid.length - 1), this.slideTo(n, e, t, i)
            },
            slideToClickedSlide: function() {
                var e, t = this,
                    i = t.params,
                    n = t.$wrapperEl,
                    a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                    o = t.clickedIndex;
                if (i.loop) {
                    if (t.animating) return;
                    e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? o < t.loopedSlides - a / 2 || o > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), o = n.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), r.nextTick((function() {
                        t.slideTo(o)
                    }))) : t.slideTo(o) : o > t.slides.length - a ? (t.loopFix(), o = n.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), r.nextTick((function() {
                        t.slideTo(o)
                    }))) : t.slideTo(o)
                } else t.slideTo(o)
            }
        },
        P = {
            loopCreate: function() {
                var t = this,
                    i = t.params,
                    n = t.$wrapperEl;
                n.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                var a = n.children("." + i.slideClass);
                if (i.loopFillGroupWithBlank) {
                    var r = i.slidesPerGroup - a.length % i.slidesPerGroup;
                    if (r !== i.slidesPerGroup) {
                        for (var o = 0; o < r; o += 1) {
                            var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                            n.append(l)
                        }
                        a = n.children("." + i.slideClass)
                    }
                }
                "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), t.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > a.length && (t.loopedSlides = a.length);
                var c = [],
                    d = [];
                a.each((function(e, i) {
                    var n = s(i);
                    e < t.loopedSlides && d.push(i), e < a.length && e >= a.length - t.loopedSlides && c.push(i), n.attr("data-swiper-slide-index", e)
                }));
                for (var h = 0; h < d.length; h += 1) n.append(s(d[h].cloneNode(!0)).addClass(i.slideDuplicateClass));
                for (var u = c.length - 1; u >= 0; u -= 1) n.prepend(s(c[u].cloneNode(!0)).addClass(i.slideDuplicateClass))
            },
            loopFix: function() {
                this.emit("beforeLoopFix");
                var e, t = this.activeIndex,
                    i = this.slides,
                    s = this.loopedSlides,
                    n = this.allowSlidePrev,
                    a = this.allowSlideNext,
                    r = this.snapGrid,
                    o = this.rtlTranslate;
                this.allowSlidePrev = !0, this.allowSlideNext = !0;
                var l = -r[t] - this.getTranslate();
                t < s ? (e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)) : t >= i.length - s && (e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)), this.allowSlidePrev = n, this.allowSlideNext = a, this.emit("loopFix")
            },
            loopDestroy: function() {
                var e = this.$wrapperEl,
                    t = this.params,
                    i = this.slides;
                e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
            }
        },
        z = {
            setGrabCursor: function(e) {
                if (!(o.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                    var t = this.el;
                    t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
                }
            },
            unsetGrabCursor: function() {
                o.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
            }
        },
        k = {
            appendSlide: function(e) {
                var t = this.$wrapperEl,
                    i = this.params;
                if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
                    for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
                else t.append(e);
                i.loop && this.loopCreate(), i.observer && o.observer || this.update()
            },
            prependSlide: function(e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    s = this.activeIndex;
                t.loop && this.loopDestroy();
                var n = s + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var a = 0; a < e.length; a += 1) e[a] && i.prepend(e[a]);
                    n = s + e.length
                } else i.prepend(e);
                t.loop && this.loopCreate(), t.observer && o.observer || this.update(), this.slideTo(n, 0, !1)
            },
            addSlide: function(e, t) {
                var i = this.$wrapperEl,
                    s = this.params,
                    n = this.activeIndex;
                s.loop && (n -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
                var a = this.slides.length;
                if (e <= 0) this.prependSlide(t);
                else if (e >= a) this.appendSlide(t);
                else {
                    for (var r = n > e ? n + 1 : n, l = [], c = a - 1; c >= e; c -= 1) {
                        var d = this.slides.eq(c);
                        d.remove(), l.unshift(d)
                    }
                    if ("object" == typeof t && "length" in t) {
                        for (var h = 0; h < t.length; h += 1) t[h] && i.append(t[h]);
                        r = n > e ? n + t.length : n
                    } else i.append(t);
                    for (var u = 0; u < l.length; u += 1) i.append(l[u]);
                    s.loop && this.loopCreate(), s.observer && o.observer || this.update(), s.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
                }
            },
            removeSlide: function(e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    s = this.activeIndex;
                t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
                var n, a = s;
                if ("object" == typeof e && "length" in e) {
                    for (var r = 0; r < e.length; r += 1) n = e[r], this.slides[n] && this.slides.eq(n).remove(), n < a && (a -= 1);
                    a = Math.max(a, 0)
                } else n = e, this.slides[n] && this.slides.eq(n).remove(), n < a && (a -= 1), a = Math.max(a, 0);
                t.loop && this.loopCreate(), t.observer && o.observer || this.update(), t.loop ? this.slideTo(a + this.loopedSlides, 0, !1) : this.slideTo(a, 0, !1)
            },
            removeAllSlides: function() {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }
        },
        _ = (d = t.navigator.platform, h = t.navigator.userAgent, u = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            edge: !1,
            ie: !1,
            firefox: !1,
            macos: !1,
            windows: !1,
            cordova: !(!t.cordova && !t.phonegap),
            phonegap: !(!t.cordova && !t.phonegap),
            electron: !1
        }, p = t.screen.width, f = t.screen.height, m = h.match(/(Android);?[\s\/]+([\d.]+)?/), g = h.match(/(iPad).*OS\s([\d_]+)/), v = h.match(/(iPod)(.*OS\s([\d_]+))?/), y = !g && h.match(/(iPhone\sOS|iOS)\s([\d_]+)/), b = h.indexOf("MSIE ") >= 0 || h.indexOf("Trident/") >= 0, w = h.indexOf("Edge/") >= 0, x = h.indexOf("Gecko/") >= 0 && h.indexOf("Firefox/") >= 0, C = "Win32" === d, S = h.toLowerCase().indexOf("electron") >= 0, T = "MacIntel" === d, !g && T && o.touch && (1024 === p && 1366 === f || 834 === p && 1194 === f || 834 === p && 1112 === f || 768 === p && 1024 === f) && (g = h.match(/(Version)\/([\d.]+)/), T = !1), u.ie = b, u.edge = w, u.firefox = x, m && !C && (u.os = "android", u.osVersion = m[2], u.android = !0, u.androidChrome = h.toLowerCase().indexOf("chrome") >= 0), (g || y || v) && (u.os = "ios", u.ios = !0), y && !v && (u.osVersion = y[2].replace(/_/g, "."), u.iphone = !0), g && (u.osVersion = g[2].replace(/_/g, "."), u.ipad = !0), v && (u.osVersion = v[3] ? v[3].replace(/_/g, ".") : null, u.ipod = !0), u.ios && u.osVersion && h.indexOf("Version/") >= 0 && "10" === u.osVersion.split(".")[0] && (u.osVersion = h.toLowerCase().split("version/")[1].split(" ")[0]), u.webView = !(!(y || g || v) || !h.match(/.*AppleWebKit(?!.*Safari)/i) && !t.navigator.standalone) || t.matchMedia && t.matchMedia("(display-mode: standalone)").matches, u.webview = u.webView, u.standalone = u.webView, u.desktop = !(u.ios || u.android) || S, u.desktop && (u.electron = S, u.macos = T, u.windows = C, u.macos && (u.os = "macos"), u.windows && (u.os = "windows")), u.pixelRatio = t.devicePixelRatio || 1, u);

    function L(i) {
        var n = this.touchEventsData,
            a = this.params,
            o = this.touches;
        if (!this.animating || !a.preventInteractionOnTransition) {
            var l = i;
            l.originalEvent && (l = l.originalEvent);
            var c = s(l.target);
            if (("wrapper" !== a.touchEventsTarget || c.closest(this.wrapperEl).length) && (n.isTouchEvent = "touchstart" === l.type, (n.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!n.isTouchEvent && "button" in l && l.button > 0 || n.isTouched && n.isMoved)))
                if (a.noSwiping && c.closest(a.noSwipingSelector ? a.noSwipingSelector : "." + a.noSwipingClass)[0]) this.allowClick = !0;
                else if (!a.swipeHandler || c.closest(a.swipeHandler)[0]) {
                o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                var d = o.currentX,
                    h = o.currentY,
                    u = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                    p = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                if (!u || !(d <= p || d >= t.screen.width - p)) {
                    if (r.extend(n, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }), o.startX = d, o.startY = h, n.touchStartTime = r.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, a.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== l.type) {
                        var f = !0;
                        c.is(n.formElements) && (f = !1), e.activeElement && s(e.activeElement).is(n.formElements) && e.activeElement !== c[0] && e.activeElement.blur();
                        var m = f && this.allowTouchMove && a.touchStartPreventDefault;
                        (a.touchStartForcePreventDefault || m) && l.preventDefault()
                    }
                    this.emit("touchStart", l)
                }
            }
        }
    }

    function A(t) {
        var i = this.touchEventsData,
            n = this.params,
            a = this.touches,
            o = this.rtlTranslate,
            l = t;
        if (l.originalEvent && (l = l.originalEvent), i.isTouched) {
            if (!i.isTouchEvent || "mousemove" !== l.type) {
                var c = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                    d = "touchmove" === l.type ? c.pageX : l.pageX,
                    h = "touchmove" === l.type ? c.pageY : l.pageY;
                if (l.preventedByNestedSwiper) return a.startX = d, void(a.startY = h);
                if (!this.allowTouchMove) return this.allowClick = !1, void(i.isTouched && (r.extend(a, {
                    startX: d,
                    startY: h,
                    currentX: d,
                    currentY: h
                }), i.touchStartTime = r.now()));
                if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                    if (this.isVertical()) {
                        if (h < a.startY && this.translate <= this.maxTranslate() || h > a.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                    } else if (d < a.startX && this.translate <= this.maxTranslate() || d > a.startX && this.translate >= this.minTranslate()) return;
                if (i.isTouchEvent && e.activeElement && l.target === e.activeElement && s(l.target).is(i.formElements)) return i.isMoved = !0, void(this.allowClick = !1);
                if (i.allowTouchCallbacks && this.emit("touchMove", l), !(l.targetTouches && l.targetTouches.length > 1)) {
                    a.currentX = d, a.currentY = h;
                    var u, p = a.currentX - a.startX,
                        f = a.currentY - a.startY;
                    if (!(this.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(f, 2)) < this.params.threshold))
                        if (void 0 === i.isScrolling && (this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : p * p + f * f >= 25 && (u = 180 * Math.atan2(Math.abs(f), Math.abs(p)) / Math.PI, i.isScrolling = this.isHorizontal() ? u > n.touchAngle : 90 - u > n.touchAngle)), i.isScrolling && this.emit("touchMoveOpposite", l), void 0 === i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
                        else if (i.startMoving) {
                        this.allowClick = !1, n.cssMode || l.preventDefault(), n.touchMoveStopPropagation && !n.nested && l.stopPropagation(), i.isMoved || (n.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !n.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", l)), this.emit("sliderMove", l), i.isMoved = !0;
                        var m = this.isHorizontal() ? p : f;
                        a.diff = m, m *= n.touchRatio, o && (m = -m), this.swipeDirection = m > 0 ? "prev" : "next", i.currentTranslate = m + i.startTranslate;
                        var g = !0,
                            v = n.resistanceRatio;
                        if (n.touchReleaseOnEdges && (v = 0), m > 0 && i.currentTranslate > this.minTranslate() ? (g = !1, n.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + m, v))) : m < 0 && i.currentTranslate < this.maxTranslate() && (g = !1, n.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - m, v))), g && (l.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), n.threshold > 0) {
                            if (!(Math.abs(m) > n.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void(a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                        }
                        n.followFinger && !n.cssMode && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), n.freeMode && (0 === i.velocities.length && i.velocities.push({
                            position: a[this.isHorizontal() ? "startX" : "startY"],
                            time: i.touchStartTime
                        }), i.velocities.push({
                            position: a[this.isHorizontal() ? "currentX" : "currentY"],
                            time: r.now()
                        })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
                    }
                }
            }
        } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l)
    }

    function I(e) {
        var t = this,
            i = t.touchEventsData,
            s = t.params,
            n = t.touches,
            a = t.rtlTranslate,
            o = t.$wrapperEl,
            l = t.slidesGrid,
            c = t.snapGrid,
            d = e;
        if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var h, u = r.now(),
            p = u - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), p < 300 && u - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), i.lastClickTime = r.now(), r.nextTick((function() {
                t.destroyed || (t.allowClick = !0)
            })), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === n.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = s.followFinger ? a ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode)
            if (s.freeMode) {
                if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                if (h > -t.maxTranslate()) return void(t.slides.length < c.length ? t.slideTo(c.length - 1) : t.slideTo(t.slides.length - 1));
                if (s.freeModeMomentum) {
                    if (i.velocities.length > 1) {
                        var f = i.velocities.pop(),
                            m = i.velocities.pop(),
                            g = f.position - m.position,
                            v = f.time - m.time;
                        t.velocity = g / v, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (v > 150 || r.now() - f.time > 300) && (t.velocity = 0)
                    } else t.velocity = 0;
                    t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                    var y = 1e3 * s.freeModeMomentumRatio,
                        b = t.velocity * y,
                        w = t.translate + b;
                    a && (w = -w);
                    var x, C, S = !1,
                        T = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                    if (w < t.maxTranslate()) s.freeModeMomentumBounce ? (w + t.maxTranslate() < -T && (w = t.maxTranslate() - T), x = t.maxTranslate(), S = !0, i.allowMomentumBounce = !0) : w = t.maxTranslate(), s.loop && s.centeredSlides && (C = !0);
                    else if (w > t.minTranslate()) s.freeModeMomentumBounce ? (w - t.minTranslate() > T && (w = t.minTranslate() + T), x = t.minTranslate(), S = !0, i.allowMomentumBounce = !0) : w = t.minTranslate(), s.loop && s.centeredSlides && (C = !0);
                    else if (s.freeModeSticky) {
                        for (var E, $ = 0; $ < c.length; $ += 1)
                            if (c[$] > -w) {
                                E = $;
                                break
                            }
                        w = -(w = Math.abs(c[E] - w) < Math.abs(c[E - 1] - w) || "next" === t.swipeDirection ? c[E] : c[E - 1])
                    }
                    if (C && t.once("transitionEnd", (function() {
                            t.loopFix()
                        })), 0 !== t.velocity) {
                        if (y = a ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity), s.freeModeSticky) {
                            var M = Math.abs((a ? -w : w) - t.translate),
                                P = t.slidesSizesGrid[t.activeIndex];
                            y = M < P ? s.speed : M < 2 * P ? 1.5 * s.speed : 2.5 * s.speed
                        }
                    } else if (s.freeModeSticky) return void t.slideToClosest();
                    s.freeModeMomentumBounce && S ? (t.updateProgress(x), t.setTransition(y), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, o.transitionEnd((function() {
                        t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), o.transitionEnd((function() {
                            t && !t.destroyed && t.transitionEnd()
                        })))
                    }))) : t.velocity ? (t.updateProgress(w), t.setTransition(y), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, o.transitionEnd((function() {
                        t && !t.destroyed && t.transitionEnd()
                    })))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
                } else if (s.freeModeSticky) return void t.slideToClosest();
                (!s.freeModeMomentum || p >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
            } else {
                for (var z = 0, k = t.slidesSizesGrid[0], _ = 0; _ < l.length; _ += _ < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                    var L = _ < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                    void 0 !== l[_ + L] ? h >= l[_] && h < l[_ + L] && (z = _, k = l[_ + L] - l[_]) : h >= l[_] && (z = _, k = l[l.length - 1] - l[l.length - 2])
                }
                var A = (h - l[z]) / k,
                    I = z < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                if (p > s.longSwipesMs) {
                    if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (A >= s.longSwipesRatio ? t.slideTo(z + I) : t.slideTo(z)), "prev" === t.swipeDirection && (A > 1 - s.longSwipesRatio ? t.slideTo(z + I) : t.slideTo(z))
                } else {
                    if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                    !t.navigation || d.target !== t.navigation.nextEl && d.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(z + I), "prev" === t.swipeDirection && t.slideTo(z)) : d.target === t.navigation.nextEl ? t.slideTo(z + I) : t.slideTo(z)
                }
            }
    }

    function O() {
        var e = this.params,
            t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext,
                s = this.allowSlidePrev,
                n = this.snapGrid;
            this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && n !== this.snapGrid && this.checkOverflow()
        }
    }

    function D(e) {
        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
    }

    function H() {
        var e = this.wrapperEl;
        this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? -e.scrollLeft : -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
        var t = this.maxTranslate() - this.minTranslate();
        (0 === t ? 0 : (this.translate - this.minTranslate()) / t) !== this.progress && this.updateProgress(this.translate), this.emit("setTranslate", this.translate, !1)
    }
    var R = !1;

    function q() {}
    var F = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        },
        N = {
            update: E,
            translate: $,
            transition: {
                setTransition: function(e, t) {
                    this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                },
                transitionStart: function(e, t) {
                    void 0 === e && (e = !0);
                    var i = this.activeIndex,
                        s = this.params,
                        n = this.previousIndex;
                    if (!s.cssMode) {
                        s.autoHeight && this.updateAutoHeight();
                        var a = t;
                        if (a || (a = i > n ? "next" : i < n ? "prev" : "reset"), this.emit("transitionStart"), e && i !== n) {
                            if ("reset" === a) return void this.emit("slideResetTransitionStart");
                            this.emit("slideChangeTransitionStart"), "next" === a ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                        }
                    }
                },
                transitionEnd: function(e, t) {
                    void 0 === e && (e = !0);
                    var i = this.activeIndex,
                        s = this.previousIndex,
                        n = this.params;
                    if (this.animating = !1, !n.cssMode) {
                        this.setTransition(0);
                        var a = t;
                        if (a || (a = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
                            if ("reset" === a) return void this.emit("slideResetTransitionEnd");
                            this.emit("slideChangeTransitionEnd"), "next" === a ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                        }
                    }
                }
            },
            slide: M,
            loop: P,
            grabCursor: z,
            manipulation: k,
            events: {
                attachEvents: function() {
                    var t = this.params,
                        i = this.touchEvents,
                        s = this.el,
                        n = this.wrapperEl;
                    this.onTouchStart = L.bind(this), this.onTouchMove = A.bind(this), this.onTouchEnd = I.bind(this), t.cssMode && (this.onScroll = H.bind(this)), this.onClick = D.bind(this);
                    var a = !!t.nested;
                    if (!o.touch && o.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), e.addEventListener(i.move, this.onTouchMove, a), e.addEventListener(i.end, this.onTouchEnd, !1);
                    else {
                        if (o.touch) {
                            var r = !("touchstart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.addEventListener(i.start, this.onTouchStart, r), s.addEventListener(i.move, this.onTouchMove, o.passiveListener ? {
                                passive: !1,
                                capture: a
                            } : a), s.addEventListener(i.end, this.onTouchEnd, r), i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, r), R || (e.addEventListener("touchstart", q), R = !0)
                        }(t.simulateTouch && !_.ios && !_.android || t.simulateTouch && !o.touch && _.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, a), e.addEventListener("mouseup", this.onTouchEnd, !1))
                    }(t.preventClicks || t.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), t.cssMode && n.addEventListener("scroll", this.onScroll), t.updateOnWindowResize ? this.on(_.ios || _.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", O, !0) : this.on("observerUpdate", O, !0)
                },
                detachEvents: function() {
                    var t = this.params,
                        i = this.touchEvents,
                        s = this.el,
                        n = this.wrapperEl,
                        a = !!t.nested;
                    if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, a), e.removeEventListener(i.end, this.onTouchEnd, !1);
                    else {
                        if (o.touch) {
                            var r = !("onTouchStart" !== i.start || !o.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.removeEventListener(i.start, this.onTouchStart, r), s.removeEventListener(i.move, this.onTouchMove, a), s.removeEventListener(i.end, this.onTouchEnd, r), i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, r)
                        }(t.simulateTouch && !_.ios && !_.android || t.simulateTouch && !o.touch && _.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, a), e.removeEventListener("mouseup", this.onTouchEnd, !1))
                    }(t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), t.cssMode && n.removeEventListener("scroll", this.onScroll), this.off(_.ios || _.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", O)
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    var e = this.activeIndex,
                        t = this.initialized,
                        i = this.loopedSlides;
                    void 0 === i && (i = 0);
                    var s = this.params,
                        n = this.$el,
                        a = s.breakpoints;
                    if (a && (!a || 0 !== Object.keys(a).length)) {
                        var o = this.getBreakpoint(a);
                        if (o && this.currentBreakpoint !== o) {
                            var l = o in a ? a[o] : void 0;
                            l && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function(e) {
                                var t = l[e];
                                void 0 !== t && (l[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                            }));
                            var c = l || this.originalParams,
                                d = s.slidesPerColumn > 1,
                                h = c.slidesPerColumn > 1;
                            d && !h ? n.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !d && h && (n.addClass(s.containerModifierClass + "multirow"), "column" === c.slidesPerColumnFill && n.addClass(s.containerModifierClass + "multirow-column"));
                            var u = c.direction && c.direction !== s.direction,
                                p = s.loop && (c.slidesPerView !== s.slidesPerView || u);
                            u && t && this.changeDirection(), r.extend(this.params, c), r.extend(this, {
                                allowTouchMove: this.params.allowTouchMove,
                                allowSlideNext: this.params.allowSlideNext,
                                allowSlidePrev: this.params.allowSlidePrev
                            }), this.currentBreakpoint = o, p && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", c)
                        }
                    }
                },
                getBreakpoint: function(e) {
                    if (e) {
                        var i = !1,
                            s = Object.keys(e).map((function(e) {
                                if ("string" == typeof e && 0 === e.indexOf("@")) {
                                    var i = parseFloat(e.substr(1));
                                    return {
                                        value: t.innerHeight * i,
                                        point: e
                                    }
                                }
                                return {
                                    value: e,
                                    point: e
                                }
                            }));
                        s.sort((function(e, t) {
                            return parseInt(e.value, 10) - parseInt(t.value, 10)
                        }));
                        for (var n = 0; n < s.length; n += 1) {
                            var a = s[n],
                                r = a.point;
                            a.value <= t.innerWidth && (i = r)
                        }
                        return i || "max"
                    }
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    var e = this.params,
                        t = this.isLocked,
                        i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                    e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    var e = this.classNames,
                        t = this.params,
                        i = this.rtl,
                        s = this.$el,
                        n = [];
                    n.push("initialized"), n.push(t.direction), t.freeMode && n.push("free-mode"), t.autoHeight && n.push("autoheight"), i && n.push("rtl"), t.slidesPerColumn > 1 && (n.push("multirow"), "column" === t.slidesPerColumnFill && n.push("multirow-column")), _.android && n.push("android"), _.ios && n.push("ios"), t.cssMode && n.push("css-mode"), n.forEach((function(i) {
                        e.push(t.containerModifierClass + i)
                    })), s.addClass(e.join(" "))
                },
                removeClasses: function() {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function(e, i, s, n, a, r) {
                    var o;

                    function l() {
                        r && r()
                    }
                    e.complete && a ? l() : i ? ((o = new t.Image).onload = l, o.onerror = l, n && (o.sizes = n), s && (o.srcset = s), i && (o.src = i)) : l()
                },
                preloadImages: function() {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var s = e.imagesToLoad[i];
                        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        B = {},
        j = function(e) {
            function t() {
                for (var i, n, a, l = [], c = arguments.length; c--;) l[c] = arguments[c];
                1 === l.length && l[0].constructor && l[0].constructor === Object ? a = l[0] : (n = (i = l)[0], a = i[1]), a || (a = {}), a = r.extend({}, a), n && !a.el && (a.el = n), e.call(this, a), Object.keys(N).forEach((function(e) {
                    Object.keys(N[e]).forEach((function(i) {
                        t.prototype[i] || (t.prototype[i] = N[e][i])
                    }))
                }));
                var d = this;
                void 0 === d.modules && (d.modules = {}), Object.keys(d.modules).forEach((function(e) {
                    var t = d.modules[e];
                    if (t.params) {
                        var i = Object.keys(t.params)[0],
                            s = t.params[i];
                        if ("object" != typeof s || null === s) return;
                        if (!(i in a) || !("enabled" in s)) return;
                        !0 === a[i] && (a[i] = {
                            enabled: !0
                        }), "object" != typeof a[i] || "enabled" in a[i] || (a[i].enabled = !0), a[i] || (a[i] = {
                            enabled: !1
                        })
                    }
                }));
                var h = r.extend({}, F);
                d.useModulesParams(h), d.params = r.extend({}, h, B, a), d.originalParams = r.extend({}, d.params), d.passedParams = r.extend({}, a), d.$ = s;
                var u = s(d.params.el);
                if (n = u[0]) {
                    if (u.length > 1) {
                        var p = [];
                        return u.each((function(e, i) {
                            var s = r.extend({}, a, {
                                el: i
                            });
                            p.push(new t(s))
                        })), p
                    }
                    var f, m, g;
                    return n.swiper = d, u.data("swiper", d), n && n.shadowRoot && n.shadowRoot.querySelector ? (f = s(n.shadowRoot.querySelector("." + d.params.wrapperClass))).children = function(e) {
                        return u.children(e)
                    } : f = u.children("." + d.params.wrapperClass), r.extend(d, {
                        $el: u,
                        el: n,
                        $wrapperEl: f,
                        wrapperEl: f[0],
                        classNames: [],
                        slides: s(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function() {
                            return "horizontal" === d.params.direction
                        },
                        isVertical: function() {
                            return "vertical" === d.params.direction
                        },
                        rtl: "rtl" === n.dir.toLowerCase() || "rtl" === u.css("direction"),
                        rtlTranslate: "horizontal" === d.params.direction && ("rtl" === n.dir.toLowerCase() || "rtl" === u.css("direction")),
                        wrongRTL: "-webkit-box" === f.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: d.params.allowSlideNext,
                        allowSlidePrev: d.params.allowSlidePrev,
                        touchEvents: (m = ["touchstart", "touchmove", "touchend", "touchcancel"], g = ["mousedown", "mousemove", "mouseup"], o.pointerEvents && (g = ["pointerdown", "pointermove", "pointerup"]), d.touchEventsTouch = {
                            start: m[0],
                            move: m[1],
                            end: m[2],
                            cancel: m[3]
                        }, d.touchEventsDesktop = {
                            start: g[0],
                            move: g[1],
                            end: g[2]
                        }, o.touch || !d.params.simulateTouch ? d.touchEventsTouch : d.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video, label",
                            lastClickTime: r.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: d.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), d.useModules(), d.params.init && d.init(), d
                }
            }
            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var i = {
                extendedDefaults: {
                    configurable: !0
                },
                defaults: {
                    configurable: !0
                },
                Class: {
                    configurable: !0
                },
                $: {
                    configurable: !0
                }
            };
            return t.prototype.slidesPerViewDynamic = function() {
                var e = this.params,
                    t = this.slides,
                    i = this.slidesGrid,
                    s = this.size,
                    n = this.activeIndex,
                    a = 1;
                if (e.centeredSlides) {
                    for (var r, o = t[n].swiperSlideSize, l = n + 1; l < t.length; l += 1) t[l] && !r && (a += 1, (o += t[l].swiperSlideSize) > s && (r = !0));
                    for (var c = n - 1; c >= 0; c -= 1) t[c] && !r && (a += 1, (o += t[c].swiperSlideSize) > s && (r = !0))
                } else
                    for (var d = n + 1; d < t.length; d += 1) i[d] - i[n] < s && (a += 1);
                return a
            }, t.prototype.update = function() {
                var e = this;
                if (e && !e.destroyed) {
                    var t = e.snapGrid,
                        i = e.params;
                    i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }

                function s() {
                    var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                }
            }, t.prototype.changeDirection = function(e, t) {
                void 0 === t && (t = !0);
                var i = this.params.direction;
                return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.params.direction = e, this.slides.each((function(t, i) {
                    "vertical" === e ? i.style.width = "" : i.style.height = ""
                })), this.emit("changeDirection"), t && this.update()), this
            }, t.prototype.init = function() {
                this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
            }, t.prototype.destroy = function(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var i = this,
                    s = i.params,
                    n = i.$el,
                    a = i.$wrapperEl,
                    o = i.slides;
                return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), n.removeAttr("style"), a.removeAttr("style"), o && o.length && o.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((function(e) {
                    i.off(e)
                })), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), r.deleteProps(i)), i.destroyed = !0), null
            }, t.extendDefaults = function(e) {
                r.extend(B, e)
            }, i.extendedDefaults.get = function() {
                return B
            }, i.defaults.get = function() {
                return F
            }, i.Class.get = function() {
                return e
            }, i.$.get = function() {
                return s
            }, Object.defineProperties(t, i), t
        }(l),
        W = {
            name: "device",
            proto: {
                device: _
            },
            static: {
                device: _
            }
        },
        G = {
            name: "support",
            proto: {
                support: o
            },
            static: {
                support: o
            }
        },
        Y = {
            isEdge: !!t.navigator.userAgent.match(/Edge/g),
            isSafari: function() {
                var e = t.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
        },
        X = {
            name: "browser",
            proto: {
                browser: Y
            },
            static: {
                browser: Y
            }
        },
        V = {
            name: "resize",
            create: function() {
                var e = this;
                r.extend(e, {
                    resize: {
                        resizeHandler: function() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler: function() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function() {
                    t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy: function() {
                    t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        },
        U = {
            func: t.MutationObserver || t.WebkitMutationObserver,
            attach: function(e, i) {
                void 0 === i && (i = {});
                var s = this,
                    n = new(0, U.func)((function(e) {
                        if (1 !== e.length) {
                            var i = function() {
                                s.emit("observerUpdate", e[0])
                            };
                            t.requestAnimationFrame ? t.requestAnimationFrame(i) : t.setTimeout(i, 0)
                        } else s.emit("observerUpdate", e[0])
                    }));
                n.observe(e, {
                    attributes: void 0 === i.attributes || i.attributes,
                    childList: void 0 === i.childList || i.childList,
                    characterData: void 0 === i.characterData || i.characterData
                }), s.observer.observers.push(n)
            },
            init: function() {
                if (o.observer && this.params.observer) {
                    if (this.params.observeParents)
                        for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                    this.observer.attach(this.$el[0], {
                        childList: this.params.observeSlideChildren
                    }), this.observer.attach(this.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function() {
                this.observer.observers.forEach((function(e) {
                    e.disconnect()
                })), this.observer.observers = []
            }
        },
        Z = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create: function() {
                r.extend(this, {
                    observer: {
                        init: U.init.bind(this),
                        attach: U.attach.bind(this),
                        destroy: U.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function() {
                    this.observer.init()
                },
                destroy: function() {
                    this.observer.destroy()
                }
            }
        },
        K = {
            update: function(e) {
                var t = this,
                    i = t.params,
                    s = i.slidesPerView,
                    n = i.slidesPerGroup,
                    a = i.centeredSlides,
                    o = t.params.virtual,
                    l = o.addSlidesBefore,
                    c = o.addSlidesAfter,
                    d = t.virtual,
                    h = d.from,
                    u = d.to,
                    p = d.slides,
                    f = d.slidesGrid,
                    m = d.renderSlide,
                    g = d.offset;
                t.updateActiveIndex();
                var v, y, b, w = t.activeIndex || 0;
                v = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", a ? (y = Math.floor(s / 2) + n + l, b = Math.floor(s / 2) + n + c) : (y = s + (n - 1) + l, b = n + c);
                var x = Math.max((w || 0) - b, 0),
                    C = Math.min((w || 0) + y, p.length - 1),
                    S = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);

                function T() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }
                if (r.extend(t.virtual, {
                        from: x,
                        to: C,
                        offset: S,
                        slidesGrid: t.slidesGrid
                    }), h === x && u === C && !e) return t.slidesGrid !== f && S !== g && t.slides.css(v, S + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: S,
                    from: x,
                    to: C,
                    slides: function() {
                        for (var e = [], t = x; t <= C; t += 1) e.push(p[t]);
                        return e
                    }()
                }), void T();
                var E = [],
                    $ = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (var M = h; M <= u; M += 1)(M < x || M > C) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
                for (var P = 0; P < p.length; P += 1) P >= x && P <= C && (void 0 === u || e ? $.push(P) : (P > u && $.push(P), P < h && E.push(P)));
                $.forEach((function(e) {
                    t.$wrapperEl.append(m(p[e], e))
                })), E.sort((function(e, t) {
                    return t - e
                })).forEach((function(e) {
                    t.$wrapperEl.prepend(m(p[e], e))
                })), t.$wrapperEl.children(".swiper-slide").css(v, S + "px"), T()
            },
            renderSlide: function(e, t) {
                var i = this.params.virtual;
                if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                var n = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return n.attr("data-swiper-slide-index") || n.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = n), n
            },
            appendSlide: function(e) {
                if ("object" == typeof e && "length" in e)
                    for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
                else this.virtual.slides.push(e);
                this.virtual.update(!0)
            },
            prependSlide: function(e) {
                var t = this.activeIndex,
                    i = t + 1,
                    s = 1;
                if (Array.isArray(e)) {
                    for (var n = 0; n < e.length; n += 1) e[n] && this.virtual.slides.unshift(e[n]);
                    i = t + e.length, s = e.length
                } else this.virtual.slides.unshift(e);
                if (this.params.virtual.cache) {
                    var a = this.virtual.cache,
                        r = {};
                    Object.keys(a).forEach((function(e) {
                        var t = a[e],
                            i = t.attr("data-swiper-slide-index");
                        i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), r[parseInt(e, 10) + s] = t
                    })), this.virtual.cache = r
                }
                this.virtual.update(!0), this.slideTo(i, 0)
            },
            removeSlide: function(e) {
                if (null != e) {
                    var t = this.activeIndex;
                    if (Array.isArray(e))
                        for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);
                    else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                    this.virtual.update(!0), this.slideTo(t, 0)
                }
            },
            removeAllSlides: function() {
                this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
            }
        },
        Q = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function() {
                r.extend(this, {
                    virtual: {
                        update: K.update.bind(this),
                        appendSlide: K.appendSlide.bind(this),
                        prependSlide: K.prependSlide.bind(this),
                        removeSlide: K.removeSlide.bind(this),
                        removeAllSlides: K.removeAllSlides.bind(this),
                        renderSlide: K.renderSlide.bind(this),
                        slides: this.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if (this.params.virtual.enabled) {
                        this.classNames.push(this.params.containerModifierClass + "virtual");
                        var e = {
                            watchSlidesProgress: !0
                        };
                        r.extend(this.params, e), r.extend(this.originalParams, e), this.params.initialSlide || this.virtual.update()
                    }
                },
                setTranslate: function() {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        },
        J = {
            handle: function(i) {
                var s = this.rtlTranslate,
                    n = i;
                n.originalEvent && (n = n.originalEvent);
                var a = n.keyCode || n.charCode;
                if (!this.allowSlideNext && (this.isHorizontal() && 39 === a || this.isVertical() && 40 === a || 34 === a)) return !1;
                if (!this.allowSlidePrev && (this.isHorizontal() && 37 === a || this.isVertical() && 38 === a || 33 === a)) return !1;
                if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                    if (this.params.keyboard.onlyInViewport && (33 === a || 34 === a || 37 === a || 39 === a || 38 === a || 40 === a)) {
                        var r = !1;
                        if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                        var o = t.innerWidth,
                            l = t.innerHeight,
                            c = this.$el.offset();
                        s && (c.left -= this.$el[0].scrollLeft);
                        for (var d = [
                                [c.left, c.top],
                                [c.left + this.width, c.top],
                                [c.left, c.top + this.height],
                                [c.left + this.width, c.top + this.height]
                            ], h = 0; h < d.length; h += 1) {
                            var u = d[h];
                            u[0] >= 0 && u[0] <= o && u[1] >= 0 && u[1] <= l && (r = !0)
                        }
                        if (!r) return
                    }
                    this.isHorizontal() ? (33 !== a && 34 !== a && 37 !== a && 39 !== a || (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (34 !== a && 39 !== a || s) && (33 !== a && 37 !== a || !s) || this.slideNext(), (33 !== a && 37 !== a || s) && (34 !== a && 39 !== a || !s) || this.slidePrev()) : (33 !== a && 34 !== a && 38 !== a && 40 !== a || (n.preventDefault ? n.preventDefault() : n.returnValue = !1), 34 !== a && 40 !== a || this.slideNext(), 33 !== a && 38 !== a || this.slidePrev()), this.emit("keyPress", a)
                }
            },
            enable: function() {
                this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            },
            disable: function() {
                this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        },
        ee = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0
                }
            },
            create: function() {
                r.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: J.enable.bind(this),
                        disable: J.disable.bind(this),
                        handle: J.handle.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.keyboard.enabled && this.keyboard.enable()
                },
                destroy: function() {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        },
        te = {
            lastScrollTime: r.now(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: function() {
                return t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                    var t = "onwheel" in e;
                    if (!t) {
                        var i = e.createElement("div");
                        i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel
                    }
                    return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t
                }() ? "wheel" : "mousewheel"
            },
            normalize: function(e) {
                var t = 0,
                    i = 0,
                    s = 0,
                    n = 0;
                return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, n = 10 * i, "deltaY" in e && (n = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = n, n = 0), (s || n) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, n *= 40) : (s *= 800, n *= 800)), s && !t && (t = s < 1 ? -1 : 1), n && !i && (i = n < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: i,
                    pixelX: s,
                    pixelY: n
                }
            },
            handleMouseEnter: function() {
                this.mouseEntered = !0
            },
            handleMouseLeave: function() {
                this.mouseEntered = !1
            },
            handle: function(e) {
                var t = e,
                    i = this,
                    n = i.params.mousewheel;
                i.params.cssMode && t.preventDefault();
                var a = i.$el;
                if ("container" !== i.params.mousewheel.eventsTarged && (a = s(i.params.mousewheel.eventsTarged)), !i.mouseEntered && !a[0].contains(t.target) && !n.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                var o = 0,
                    l = i.rtlTranslate ? -1 : 1,
                    c = te.normalize(t);
                if (n.forceToAxis)
                    if (i.isHorizontal()) {
                        if (!(Math.abs(c.pixelX) > Math.abs(c.pixelY))) return !0;
                        o = c.pixelX * l
                    } else {
                        if (!(Math.abs(c.pixelY) > Math.abs(c.pixelX))) return !0;
                        o = c.pixelY
                    }
                else o = Math.abs(c.pixelX) > Math.abs(c.pixelY) ? -c.pixelX * l : -c.pixelY;
                if (0 === o) return !0;
                if (n.invert && (o = -o), i.params.freeMode) {
                    var d = {
                            time: r.now(),
                            delta: Math.abs(o),
                            direction: Math.sign(o)
                        },
                        h = i.mousewheel.lastEventBeforeSnap,
                        u = h && d.time < h.time + 500 && d.delta <= h.delta && d.direction === h.direction;
                    if (!u) {
                        i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
                        var p = i.getTranslate() + o * n.sensitivity,
                            f = i.isBeginning,
                            m = i.isEnd;
                        if (p >= i.minTranslate() && (p = i.minTranslate()), p <= i.maxTranslate() && (p = i.maxTranslate()), i.setTransition(0), i.setTranslate(p), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!f && i.isBeginning || !m && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
                            clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
                            var g = i.mousewheel.recentWheelEvents;
                            g.length >= 15 && g.shift();
                            var v = g.length ? g[g.length - 1] : void 0,
                                y = g[0];
                            if (g.push(d), v && (d.delta > v.delta || d.direction !== v.direction)) g.splice(0);
                            else if (g.length >= 15 && d.time - y.time < 500 && y.delta - d.delta >= 1 && d.delta <= 6) {
                                var b = o > 0 ? .8 : .2;
                                i.mousewheel.lastEventBeforeSnap = d, g.splice(0), i.mousewheel.timeout = r.nextTick((function() {
                                    i.slideToClosest(i.params.speed, !0, void 0, b)
                                }), 0)
                            }
                            i.mousewheel.timeout || (i.mousewheel.timeout = r.nextTick((function() {
                                i.mousewheel.lastEventBeforeSnap = d, g.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5)
                            }), 500))
                        }
                        if (u || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), p === i.minTranslate() || p === i.maxTranslate()) return !0
                    }
                } else {
                    var w = {
                            time: r.now(),
                            delta: Math.abs(o),
                            direction: Math.sign(o),
                            raw: e
                        },
                        x = i.mousewheel.recentWheelEvents;
                    x.length >= 2 && x.shift();
                    var C = x.length ? x[x.length - 1] : void 0;
                    if (x.push(w), C ? (w.direction !== C.direction || w.delta > C.delta) && i.mousewheel.animateSlider(w) : i.mousewheel.animateSlider(w), i.mousewheel.releaseScroll(w)) return !0
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            },
            animateSlider: function(e) {
                return e.delta >= 6 && r.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = (new t.Date).getTime(), !1)
            },
            releaseScroll: function(e) {
                var t = this.params.mousewheel;
                if (e.direction < 0) {
                    if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0
                } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
                return !1
            },
            enable: function() {
                var e = te.event();
                if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
                if (!e) return !1;
                if (this.mousewheel.enabled) return !1;
                var t = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
            },
            disable: function() {
                var e = te.event();
                if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
                if (!e) return !1;
                if (!this.mousewheel.enabled) return !1;
                var t = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (t = s(this.params.mousewheel.eventsTarged)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
            }
        },
        ie = {
            update: function() {
                var e = this.params.navigation;
                if (!this.params.loop) {
                    var t = this.navigation,
                        i = t.$nextEl,
                        s = t.$prevEl;
                    s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
                }
            },
            onPrevClick: function(e) {
                e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
            },
            onNextClick: function(e) {
                e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
            },
            init: function() {
                var e, t, i = this.params.navigation;
                (i.nextEl || i.prevEl) && (i.nextEl && (e = s(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = s(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), r.extend(this.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }))
            },
            destroy: function() {
                var e = this.navigation,
                    t = e.$nextEl,
                    i = e.$prevEl;
                t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass))
            }
        },
        se = {
            update: function() {
                var e = this.rtl,
                    t = this.params.pagination;
                if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var i, n = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        a = this.pagination.$el,
                        r = this.params.loop ? Math.ceil((n - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                    if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > n - 1 - 2 * this.loopedSlides && (i -= n - 2 * this.loopedSlides), i > r - 1 && (i -= r), i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                        var o, l, c, d = this.pagination.bullets;
                        if (t.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, c = ((l = o + (Math.min(d.length, t.dynamicMainBullets) - 1)) + o) / 2), d.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), a.length > 1) d.each((function(e, n) {
                            var a = s(n),
                                r = a.index();
                            r === i && a.addClass(t.bulletActiveClass), t.dynamicBullets && (r >= o && r <= l && a.addClass(t.bulletActiveClass + "-main"), r === o && a.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), r === l && a.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                        }));
                        else {
                            var h = d.eq(i),
                                u = h.index();
                            if (h.addClass(t.bulletActiveClass), t.dynamicBullets) {
                                for (var p = d.eq(o), f = d.eq(l), m = o; m <= l; m += 1) d.eq(m).addClass(t.bulletActiveClass + "-main");
                                if (this.params.loop)
                                    if (u >= d.length - t.dynamicMainBullets) {
                                        for (var g = t.dynamicMainBullets; g >= 0; g -= 1) d.eq(d.length - g).addClass(t.bulletActiveClass + "-main");
                                        d.eq(d.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev")
                                    } else p.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), f.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
                                else p.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), f.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                            }
                        }
                        if (t.dynamicBullets) {
                            var v = Math.min(d.length, t.dynamicMainBullets + 4),
                                y = (this.pagination.bulletSize * v - this.pagination.bulletSize) / 2 - c * this.pagination.bulletSize,
                                b = e ? "right" : "left";
                            d.css(this.isHorizontal() ? b : "top", y + "px")
                        }
                    }
                    if ("fraction" === t.type && (a.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), a.find("." + t.totalClass).text(t.formatFractionTotal(r))), "progressbar" === t.type) {
                        var w;
                        w = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                        var x = (i + 1) / r,
                            C = 1,
                            S = 1;
                        "horizontal" === w ? C = x : S = x, a.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + C + ") scaleY(" + S + ")").transition(this.params.speed)
                    }
                    "custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)), this.emit("paginationRender", this, a[0])) : this.emit("paginationUpdate", this, a[0]), a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
                }
            },
            render: function() {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        i = this.pagination.$el,
                        s = "";
                    if ("bullets" === e.type) {
                        for (var n = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, a = 0; a < n; a += 1) e.renderBullet ? s += e.renderBullet.call(this, a, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                        i.html(s), this.pagination.bullets = i.find("." + e.bulletClass)
                    }
                    "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
                }
            },
            init: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el) {
                    var i = s(t.el);
                    0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, (function(t) {
                        t.preventDefault();
                        var i = s(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                    })), r.extend(e.pagination, {
                        $el: i,
                        el: i[0]
                    }))
                }
            },
            destroy: function() {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.pagination.$el;
                    t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
                }
            }
        },
        ne = {
            setTranslate: function() {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.rtlTranslate,
                        i = this.progress,
                        s = e.dragSize,
                        n = e.trackSize,
                        a = e.$dragEl,
                        r = e.$el,
                        o = this.params.scrollbar,
                        l = s,
                        c = (n - s) * i;
                    t ? (c = -c) > 0 ? (l = s - c, c = 0) : -c + s > n && (l = n + c) : c < 0 ? (l = s + c, c = 0) : c + s > n && (l = n - c), this.isHorizontal() ? (a.transform("translate3d(" + c + "px, 0, 0)"), a[0].style.width = l + "px") : (a.transform("translate3d(0px, " + c + "px, 0)"), a[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), r[0].style.opacity = 1, this.scrollbar.timeout = setTimeout((function() {
                        r[0].style.opacity = 0, r.transition(400)
                    }), 1e3))
                }
            },
            setTransition: function(e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            },
            updateSize: function() {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = e.$dragEl,
                        i = e.$el;
                    t[0].style.width = "", t[0].style.height = "";
                    var s, n = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        a = this.size / this.virtualSize,
                        o = a * (n / this.size);
                    s = "auto" === this.params.scrollbar.dragSize ? n * a : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = a >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), r.extend(e, {
                        trackSize: n,
                        divider: a,
                        moveDivider: o,
                        dragSize: s
                    }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                }
            },
            getPointerPosition: function(e) {
                return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
            },
            setDragPosition: function(e) {
                var t, i = this.scrollbar,
                    s = this.rtlTranslate,
                    n = i.$el,
                    a = i.dragSize,
                    r = i.trackSize,
                    o = i.dragStartPos;
                t = (i.getPointerPosition(e) - n.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : a / 2)) / (r - a), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
                var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
                this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
            },
            onDragStart: function(e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar,
                    s = this.$wrapperEl,
                    n = i.$el,
                    a = i.$dragEl;
                this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === a[0] || e.target === a ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), a.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), n.transition(0), t.hide && n.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e)
            },
            onDragMove: function(e) {
                var t = this.scrollbar,
                    i = this.$wrapperEl,
                    s = t.$el,
                    n = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), n.transition(0), this.emit("scrollbarDragMove", e))
            },
            onDragEnd: function(e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar,
                    s = this.$wrapperEl,
                    n = i.$el;
                this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = r.nextTick((function() {
                    n.css("opacity", 0), n.transition(400)
                }), 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
            },
            enableDraggable: function() {
                if (this.params.scrollbar.el) {
                    var t = this.scrollbar,
                        i = this.touchEventsTouch,
                        s = this.touchEventsDesktop,
                        n = this.params,
                        a = t.$el[0],
                        r = !(!o.passiveListener || !n.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        l = !(!o.passiveListener || !n.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    o.touch ? (a.addEventListener(i.start, this.scrollbar.onDragStart, r), a.addEventListener(i.move, this.scrollbar.onDragMove, r), a.addEventListener(i.end, this.scrollbar.onDragEnd, l)) : (a.addEventListener(s.start, this.scrollbar.onDragStart, r), e.addEventListener(s.move, this.scrollbar.onDragMove, r), e.addEventListener(s.end, this.scrollbar.onDragEnd, l))
                }
            },
            disableDraggable: function() {
                if (this.params.scrollbar.el) {
                    var t = this.scrollbar,
                        i = this.touchEventsTouch,
                        s = this.touchEventsDesktop,
                        n = this.params,
                        a = t.$el[0],
                        r = !(!o.passiveListener || !n.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        l = !(!o.passiveListener || !n.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    o.touch ? (a.removeEventListener(i.start, this.scrollbar.onDragStart, r), a.removeEventListener(i.move, this.scrollbar.onDragMove, r), a.removeEventListener(i.end, this.scrollbar.onDragEnd, l)) : (a.removeEventListener(s.start, this.scrollbar.onDragStart, r), e.removeEventListener(s.move, this.scrollbar.onDragMove, r), e.removeEventListener(s.end, this.scrollbar.onDragEnd, l))
                }
            },
            init: function() {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.$el,
                        i = this.params.scrollbar,
                        n = s(i.el);
                    this.params.uniqueNavElements && "string" == typeof i.el && n.length > 1 && 1 === t.find(i.el).length && (n = t.find(i.el));
                    var a = n.find("." + this.params.scrollbar.dragClass);
                    0 === a.length && (a = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), n.append(a)), r.extend(e, {
                        $el: n,
                        el: n[0],
                        $dragEl: a,
                        dragEl: a[0]
                    }), i.draggable && e.enableDraggable()
                }
            },
            destroy: function() {
                this.scrollbar.disableDraggable()
            }
        },
        ae = {
            setTransform: function(e, t) {
                var i = this.rtl,
                    n = s(e),
                    a = i ? -1 : 1,
                    r = n.attr("data-swiper-parallax") || "0",
                    o = n.attr("data-swiper-parallax-x"),
                    l = n.attr("data-swiper-parallax-y"),
                    c = n.attr("data-swiper-parallax-scale"),
                    d = n.attr("data-swiper-parallax-opacity");
                if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = r, l = "0") : (l = r, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * a + "%" : o * t * a + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != d) {
                    var h = d - (d - 1) * (1 - Math.abs(t));
                    n[0].style.opacity = h
                }
                if (null == c) n.transform("translate3d(" + o + ", " + l + ", 0px)");
                else {
                    var u = c - (c - 1) * (1 - Math.abs(t));
                    n.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + u + ")")
                }
            },
            setTranslate: function() {
                var e = this,
                    t = e.$el,
                    i = e.slides,
                    n = e.progress,
                    a = e.snapGrid;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                    e.parallax.setTransform(i, n)
                })), i.each((function(t, i) {
                    var r = i.progress;
                    e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(t / 2) - n * (a.length - 1)), r = Math.min(Math.max(r, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                        e.parallax.setTransform(i, r)
                    }))
                }))
            },
            setTransition: function(e) {
                void 0 === e && (e = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((function(t, i) {
                    var n = s(i),
                        a = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (a = 0), n.transition(a)
                }))
            }
        },
        re = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    i = e.targetTouches[0].pageY,
                    s = e.targetTouches[1].pageX,
                    n = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(s - t, 2) + Math.pow(n - i, 2))
            },
            onGestureStart: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    n = i.gesture;
                if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !o.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureTouched = !0, n.scaleStart = re.getDistanceBetweenTouches(e)
                }
                n.$slideEl && n.$slideEl.length || (n.$slideEl = s(e.target).closest("." + this.params.slideClass), 0 === n.$slideEl.length && (n.$slideEl = this.slides.eq(this.activeIndex)), n.$imageEl = n.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), n.$imageWrapEl = n.$imageEl.parent("." + t.containerClass), n.maxRatio = n.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== n.$imageWrapEl.length) ? (n.$imageEl.transition(0), this.zoom.isScaling = !0) : n.$imageEl = void 0
            },
            onGestureChange: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (!o.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureMoved = !0, s.scaleMove = re.getDistanceBetweenTouches(e)
                }
                s.$imageEl && 0 !== s.$imageEl.length && (i.scale = o.gestures ? e.scale * i.currentScale : s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
            },
            onGestureEnd: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (!o.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !_.android) return;
                    i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                }
                s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
            },
            onTouchStart: function(e) {
                var t = this.zoom,
                    i = t.gesture,
                    s = t.image;
                i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (_.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function(e) {
                var t = this.zoom,
                    i = t.gesture,
                    s = t.image,
                    n = t.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
                    s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = r.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = r.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                    var a = s.width * t.scale,
                        o = s.height * t.scale;
                    if (!(a < i.slideWidth && o < i.slideHeight)) {
                        if (s.minX = Math.min(i.slideWidth / 2 - a / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
                            if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
                            if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
                        }
                        e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), n.prevPositionX || (n.prevPositionX = s.touchesCurrent.x), n.prevPositionY || (n.prevPositionY = s.touchesCurrent.y), n.prevTime || (n.prevTime = Date.now()), n.x = (s.touchesCurrent.x - n.prevPositionX) / (Date.now() - n.prevTime) / 2, n.y = (s.touchesCurrent.y - n.prevPositionY) / (Date.now() - n.prevTime) / 2, Math.abs(s.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0), Math.abs(s.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0), n.prevPositionX = s.touchesCurrent.x, n.prevPositionY = s.touchesCurrent.y, n.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function() {
                var e = this.zoom,
                    t = e.gesture,
                    i = e.image,
                    s = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                    i.isTouched = !1, i.isMoved = !1;
                    var n = 300,
                        a = 300,
                        r = s.x * n,
                        o = i.currentX + r,
                        l = s.y * a,
                        c = i.currentY + l;
                    0 !== s.x && (n = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (a = Math.abs((c - i.currentY) / s.y));
                    var d = Math.max(n, a);
                    i.currentX = o, i.currentY = c;
                    var h = i.width * e.scale,
                        u = i.height * e.scale;
                    i.minX = Math.min(t.slideWidth / 2 - h / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - u / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(d).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                }
            },
            onTransitionEnd: function() {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
            },
            toggle: function(e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function(e) {
                var t, i, s, n, a, r, o, l, c, d, h, u, p, f, m, g, v = this.zoom,
                    y = this.params.zoom,
                    b = v.gesture,
                    w = v.image;
                b.$slideEl || (b.$slideEl = this.slides.eq(this.activeIndex), b.$imageEl = b.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), b.$imageWrapEl = b.$imageEl.parent("." + y.containerClass)), b.$imageEl && 0 !== b.$imageEl.length && (b.$slideEl.addClass("" + y.zoomedSlideClass), void 0 === w.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = w.touchesStart.x, i = w.touchesStart.y), v.scale = b.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio, v.currentScale = b.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio, e ? (m = b.$slideEl[0].offsetWidth, g = b.$slideEl[0].offsetHeight, s = b.$slideEl.offset().left + m / 2 - t, n = b.$slideEl.offset().top + g / 2 - i, o = b.$imageEl[0].offsetWidth, l = b.$imageEl[0].offsetHeight, c = o * v.scale, d = l * v.scale, p = -(h = Math.min(m / 2 - c / 2, 0)), f = -(u = Math.min(g / 2 - d / 2, 0)), (a = s * v.scale) < h && (a = h), a > p && (a = p), (r = n * v.scale) < u && (r = u), r > f && (r = f)) : (a = 0, r = 0), b.$imageWrapEl.transition(300).transform("translate3d(" + a + "px, " + r + "px,0)"), b.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + v.scale + ")"))
            },
            out: function() {
                var e = this.zoom,
                    t = this.params.zoom,
                    i = e.gesture;
                i.$slideEl || (i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
            },
            enable: function() {
                var e = this.zoom;
                if (!e.enabled) {
                    e.enabled = !0;
                    var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        i = !o.passiveListener || {
                            passive: !1,
                            capture: !0
                        },
                        s = "." + this.params.slideClass;
                    o.gestures ? (this.$wrapperEl.on("gesturestart", s, e.onGestureStart, t), this.$wrapperEl.on("gesturechange", s, e.onGestureChange, t), this.$wrapperEl.on("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, s, e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, s, e.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, s, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, s, e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
                }
            },
            disable: function() {
                var e = this.zoom;
                if (e.enabled) {
                    this.zoom.enabled = !1;
                    var t = !("touchstart" !== this.touchEvents.start || !o.passiveListener || !this.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        },
                        i = !o.passiveListener || {
                            passive: !1,
                            capture: !0
                        },
                        s = "." + this.params.slideClass;
                    o.gestures ? (this.$wrapperEl.off("gesturestart", s, e.onGestureStart, t), this.$wrapperEl.off("gesturechange", s, e.onGestureChange, t), this.$wrapperEl.off("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, s, e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, s, e.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, s, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, s, e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
                }
            }
        },
        oe = {
            loadInSlide: function(e, t) {
                void 0 === t && (t = !0);
                var i = this,
                    n = i.params.lazy;
                if (void 0 !== e && 0 !== i.slides.length) {
                    var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                        r = a.find("." + n.elementClass + ":not(." + n.loadedClass + "):not(." + n.loadingClass + ")");
                    !a.hasClass(n.elementClass) || a.hasClass(n.loadedClass) || a.hasClass(n.loadingClass) || (r = r.add(a[0])), 0 !== r.length && r.each((function(e, r) {
                        var o = s(r);
                        o.addClass(n.loadingClass);
                        var l = o.attr("data-background"),
                            c = o.attr("data-src"),
                            d = o.attr("data-srcset"),
                            h = o.attr("data-sizes");
                        i.loadImage(o[0], c || l, d, h, !1, (function() {
                            if (null != i && i && (!i || i.params) && !i.destroyed) {
                                if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (d && (o.attr("srcset", d), o.removeAttr("data-srcset")), h && (o.attr("sizes", h), o.removeAttr("data-sizes")), c && (o.attr("src", c), o.removeAttr("data-src"))), o.addClass(n.loadedClass).removeClass(n.loadingClass), a.find("." + n.preloaderClass).remove(), i.params.loop && t) {
                                    var e = a.attr("data-swiper-slide-index");
                                    if (a.hasClass(i.params.slideDuplicateClass)) {
                                        var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                        i.lazy.loadInSlide(s.index(), !1)
                                    } else {
                                        var r = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        i.lazy.loadInSlide(r.index(), !1)
                                    }
                                }
                                i.emit("lazyImageReady", a[0], o[0]), i.params.autoHeight && i.updateAutoHeight()
                            }
                        })), i.emit("lazyImageLoad", a[0], o[0])
                    }))
                }
            },
            load: function() {
                var e = this,
                    t = e.$wrapperEl,
                    i = e.params,
                    n = e.slides,
                    a = e.activeIndex,
                    r = e.virtual && i.virtual.enabled,
                    o = i.lazy,
                    l = i.slidesPerView;

                function c(e) {
                    if (r) {
                        if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                    } else if (n[e]) return !0;
                    return !1
                }

                function d(e) {
                    return r ? s(e).attr("data-swiper-slide-index") : s(e).index()
                }
                if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each((function(t, i) {
                    var n = r ? s(i).attr("data-swiper-slide-index") : s(i).index();
                    e.lazy.loadInSlide(n)
                }));
                else if (l > 1)
                    for (var h = a; h < a + l; h += 1) c(h) && e.lazy.loadInSlide(h);
                else e.lazy.loadInSlide(a);
                if (o.loadPrevNext)
                    if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                        for (var u = o.loadPrevNextAmount, p = l, f = Math.min(a + p + Math.max(u, p), n.length), m = Math.max(a - Math.max(p, u), 0), g = a + l; g < f; g += 1) c(g) && e.lazy.loadInSlide(g);
                        for (var v = m; v < a; v += 1) c(v) && e.lazy.loadInSlide(v)
                    } else {
                        var y = t.children("." + i.slideNextClass);
                        y.length > 0 && e.lazy.loadInSlide(d(y));
                        var b = t.children("." + i.slidePrevClass);
                        b.length > 0 && e.lazy.loadInSlide(d(b))
                    }
            }
        },
        le = {
            LinearSpline: function(e, t) {
                var i, s, n, a, r;
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                    return e ? (r = function(e, t) {
                        for (s = -1, i = e.length; i - s > 1;) e[n = i + s >> 1] <= t ? s = n : i = n;
                        return i
                    }(this.x, e), a = r - 1, (e - this.x[a]) * (this.y[r] - this.y[a]) / (this.x[r] - this.x[a]) + this.y[a]) : 0
                }, this
            },
            getInterpolateFunction: function(e) {
                this.controller.spline || (this.controller.spline = this.params.loop ? new le.LinearSpline(this.slidesGrid, e.slidesGrid) : new le.LinearSpline(this.snapGrid, e.snapGrid))
            },
            setTranslate: function(e, t) {
                var i, s, n = this,
                    a = n.controller.control;

                function r(e) {
                    var t = n.rtlTranslate ? -n.translate : n.translate;
                    "slide" === n.params.controller.by && (n.controller.getInterpolateFunction(e), s = -n.controller.spline.interpolate(-t)), s && "container" !== n.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (n.maxTranslate() - n.minTranslate()), s = (t - n.minTranslate()) * i + e.minTranslate()), n.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, n), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(a))
                    for (var o = 0; o < a.length; o += 1) a[o] !== t && a[o] instanceof j && r(a[o]);
                else a instanceof j && t !== a && r(a)
            },
            setTransition: function(e, t) {
                var i, s = this,
                    n = s.controller.control;

                function a(t) {
                    t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && r.nextTick((function() {
                        t.updateAutoHeight()
                    })), t.$wrapperEl.transitionEnd((function() {
                        n && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
                    })))
                }
                if (Array.isArray(n))
                    for (i = 0; i < n.length; i += 1) n[i] !== t && n[i] instanceof j && a(n[i]);
                else n instanceof j && t !== n && a(n)
            }
        },
        ce = {
            makeElFocusable: function(e) {
                return e.attr("tabIndex", "0"), e
            },
            addElRole: function(e, t) {
                return e.attr("role", t), e
            },
            addElLabel: function(e, t) {
                return e.attr("aria-label", t), e
            },
            disableEl: function(e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function(e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterKey: function(e) {
                var t = this.params.a11y;
                if (13 === e.keyCode) {
                    var i = s(e.target);
                    this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
                }
            },
            notify: function(e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function() {
                if (!this.params.loop && this.navigation) {
                    var e = this.navigation,
                        t = e.$nextEl,
                        i = e.$prevEl;
                    i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
                }
            },
            updatePagination: function() {
                var e = this,
                    t = e.params.a11y;
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((function(i, n) {
                    var a = s(n);
                    e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, t.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
                }))
            },
            init: function() {
                this.$el.append(this.a11y.liveRegion);
                var e, t, i = this.params.a11y;
                this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
            },
            destroy: function() {
                var e, t;
                this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
            }
        },
        de = {
            init: function() {
                if (this.params.history) {
                    if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
                    var e = this.history;
                    e.initialized = !0, e.paths = de.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState))
                }
            },
            destroy: function() {
                this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function() {
                this.history.paths = de.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            },
            getPathValues: function() {
                var e = t.location.pathname.slice(1).split("/").filter((function(e) {
                        return "" !== e
                    })),
                    i = e.length;
                return {
                    key: e[i - 2],
                    value: e[i - 1]
                }
            },
            setHistory: function(e, i) {
                if (this.history.initialized && this.params.history.enabled) {
                    var s = this.slides.eq(i),
                        n = de.slugify(s.attr("data-history"));
                    t.location.pathname.includes(e) || (n = e + "/" + n);
                    var a = t.history.state;
                    a && a.value === n || (this.params.history.replaceState ? t.history.replaceState({
                        value: n
                    }, null, n) : t.history.pushState({
                        value: n
                    }, null, n))
                }
            },
            slugify: function(e) {
                return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function(e, t, i) {
                if (t)
                    for (var s = 0, n = this.slides.length; s < n; s += 1) {
                        var a = this.slides.eq(s);
                        if (de.slugify(a.attr("data-history")) === t && !a.hasClass(this.params.slideDuplicateClass)) {
                            var r = a.index();
                            this.slideTo(r, e, i)
                        }
                    } else this.slideTo(0, e, i)
            }
        },
        he = {
            onHashCange: function() {
                var t = e.location.hash.replace("#", "");
                if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                    var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index();
                    if (void 0 === i) return;
                    this.slideTo(i)
                }
            },
            setHash: function() {
                if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                    if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
                    else {
                        var i = this.slides.eq(this.activeIndex),
                            s = i.attr("data-hash") || i.attr("data-history");
                        e.location.hash = s || ""
                    }
            },
            init: function() {
                if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                    this.hashNavigation.initialized = !0;
                    var i = e.location.hash.replace("#", "");
                    if (i)
                        for (var n = 0, a = this.slides.length; n < a; n += 1) {
                            var r = this.slides.eq(n);
                            if ((r.attr("data-hash") || r.attr("data-history")) === i && !r.hasClass(this.params.slideDuplicateClass)) {
                                var o = r.index();
                                this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
                            }
                        }
                    this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange)
                }
            },
            destroy: function() {
                this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange)
            }
        },
        ue = {
            run: function() {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    i = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = r.nextTick((function() {
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run()
                }), i)
            },
            start: function() {
                return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)
            },
            stop: function() {
                return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)
            },
            pause: function(e) {
                this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
            }
        },
        pe = {
            setTranslate: function() {
                for (var e = this.slides, t = 0; t < e.length; t += 1) {
                    var i = this.slides.eq(t),
                        s = -i[0].swiperSlideOffset;
                    this.params.virtualTranslate || (s -= this.translate);
                    var n = 0;
                    this.isHorizontal() || (n = s, s = 0);
                    var a = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({
                        opacity: a
                    }).transform("translate3d(" + s + "px, " + n + "px, 0px)")
                }
            },
            setTransition: function(e) {
                var t = this,
                    i = t.slides,
                    s = t.$wrapperEl;
                if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                    var n = !1;
                    i.transitionEnd((function() {
                        if (!n && t && !t.destroyed) {
                            n = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
                        }
                    }))
                }
            }
        },
        fe = {
            setTranslate: function() {
                var e, t = this.$el,
                    i = this.$wrapperEl,
                    n = this.slides,
                    a = this.width,
                    r = this.height,
                    o = this.rtlTranslate,
                    l = this.size,
                    c = this.params.cubeEffect,
                    d = this.isHorizontal(),
                    h = this.virtual && this.params.virtual.enabled,
                    u = 0;
                c.shadow && (d ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                    height: a + "px"
                })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e)));
                for (var p = 0; p < n.length; p += 1) {
                    var f = n.eq(p),
                        m = p;
                    h && (m = parseInt(f.attr("data-swiper-slide-index"), 10));
                    var g = 90 * m,
                        v = Math.floor(g / 360);
                    o && (g = -g, v = Math.floor(-g / 360));
                    var y = Math.max(Math.min(f[0].progress, 1), -1),
                        b = 0,
                        w = 0,
                        x = 0;
                    m % 4 == 0 ? (b = 4 * -v * l, x = 0) : (m - 1) % 4 == 0 ? (b = 0, x = 4 * -v * l) : (m - 2) % 4 == 0 ? (b = l + 4 * v * l, x = l) : (m - 3) % 4 == 0 && (b = -l, x = 3 * l + 4 * l * v), o && (b = -b), d || (w = b, b = 0);
                    var C = "rotateX(" + (d ? 0 : -g) + "deg) rotateY(" + (d ? g : 0) + "deg) translate3d(" + b + "px, " + w + "px, " + x + "px)";
                    if (y <= 1 && y > -1 && (u = 90 * m + 90 * y, o && (u = 90 * -m - 90 * y)), f.transform(C), c.slideShadows) {
                        var S = d ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            T = d ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (d ? "left" : "top") + '"></div>'), f.append(S)), 0 === T.length && (T = s('<div class="swiper-slide-shadow-' + (d ? "right" : "bottom") + '"></div>'), f.append(T)), S.length && (S[0].style.opacity = Math.max(-y, 0)), T.length && (T[0].style.opacity = Math.max(y, 0))
                    }
                }
                if (i.css({
                        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                        "transform-origin": "50% 50% -" + l / 2 + "px"
                    }), c.shadow)
                    if (d) e.transform("translate3d(0px, " + (a / 2 + c.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + c.shadowScale + ")");
                    else {
                        var E = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
                            $ = 1.5 - (Math.sin(2 * E * Math.PI / 360) / 2 + Math.cos(2 * E * Math.PI / 360) / 2),
                            M = c.shadowScale,
                            P = c.shadowScale / $,
                            z = c.shadowOffset;
                        e.transform("scale3d(" + M + ", 1, " + P + ") translate3d(0px, " + (r / 2 + z) + "px, " + -r / 2 / P + "px) rotateX(-90deg)")
                    }
                var k = Y.isSafari || Y.isUiWebView ? -l / 2 : 0;
                i.transform("translate3d(0px,0," + k + "px) rotateX(" + (this.isHorizontal() ? 0 : u) + "deg) rotateY(" + (this.isHorizontal() ? -u : 0) + "deg)")
            },
            setTransition: function(e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        },
        me = {
            setTranslate: function() {
                for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                    var n = e.eq(i),
                        a = n[0].progress;
                    this.params.flipEffect.limitRotation && (a = Math.max(Math.min(n[0].progress, 1), -1));
                    var r = -180 * a,
                        o = 0,
                        l = -n[0].swiperSlideOffset,
                        c = 0;
                    if (this.isHorizontal() ? t && (r = -r) : (c = l, l = 0, o = -r, r = 0), n[0].style.zIndex = -Math.abs(Math.round(a)) + e.length, this.params.flipEffect.slideShadows) {
                        var d = this.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                            h = this.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                        0 === d.length && (d = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), n.append(d)), 0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), n.append(h)), d.length && (d[0].style.opacity = Math.max(-a, 0)), h.length && (h[0].style.opacity = Math.max(a, 0))
                    }
                    n.transform("translate3d(" + l + "px, " + c + "px, 0px) rotateX(" + o + "deg) rotateY(" + r + "deg)")
                }
            },
            setTransition: function(e) {
                var t = this,
                    i = t.slides,
                    s = t.activeIndex,
                    n = t.$wrapperEl;
                if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                    var a = !1;
                    i.eq(s).transitionEnd((function() {
                        if (!a && t && !t.destroyed) {
                            a = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) n.trigger(e[i])
                        }
                    }))
                }
            }
        },
        ge = {
            setTranslate: function() {
                for (var e = this.width, t = this.height, i = this.slides, n = this.$wrapperEl, a = this.slidesSizesGrid, r = this.params.coverflowEffect, l = this.isHorizontal(), c = this.translate, d = l ? e / 2 - c : t / 2 - c, h = l ? r.rotate : -r.rotate, u = r.depth, p = 0, f = i.length; p < f; p += 1) {
                    var m = i.eq(p),
                        g = a[p],
                        v = (d - m[0].swiperSlideOffset - g / 2) / g * r.modifier,
                        y = l ? h * v : 0,
                        b = l ? 0 : h * v,
                        w = -u * Math.abs(v),
                        x = r.stretch;
                    "string" == typeof x && -1 !== x.indexOf("%") && (x = parseFloat(r.stretch) / 100 * g);
                    var C = l ? 0 : x * v,
                        S = l ? x * v : 0;
                    Math.abs(S) < .001 && (S = 0), Math.abs(C) < .001 && (C = 0), Math.abs(w) < .001 && (w = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0);
                    var T = "translate3d(" + S + "px," + C + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + y + "deg)";
                    if (m.transform(T), m[0].style.zIndex = 1 - Math.abs(Math.round(v)), r.slideShadows) {
                        var E = l ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                            $ = l ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
                        0 === E.length && (E = s('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), m.append(E)), 0 === $.length && ($ = s('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), m.append($)), E.length && (E[0].style.opacity = v > 0 ? v : 0), $.length && ($[0].style.opacity = -v > 0 ? -v : 0)
                    }
                }(o.pointerEvents || o.prefixedPointerEvents) && (n[0].style.perspectiveOrigin = d + "px 50%")
            },
            setTransition: function(e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        ve = {
            init: function() {
                var e = this.params.thumbs,
                    t = this.constructor;
                e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, r.extend(this.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), r.extend(this.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : r.isObject(e.swiper) && (this.thumbs.swiper = new t(r.extend({}, e.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
            },
            onThumbClick: function() {
                var e = this.thumbs.swiper;
                if (e) {
                    var t = e.clickedIndex,
                        i = e.clickedSlide;
                    if (!(i && s(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                        var n;
                        if (n = e.params.loop ? parseInt(s(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
                            var a = this.activeIndex;
                            this.slides.eq(a).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, a = this.activeIndex);
                            var r = this.slides.eq(a).prevAll('[data-swiper-slide-index="' + n + '"]').eq(0).index(),
                                o = this.slides.eq(a).nextAll('[data-swiper-slide-index="' + n + '"]').eq(0).index();
                            n = void 0 === r ? o : void 0 === o ? r : o - a < a - r ? o : r
                        }
                        this.slideTo(n)
                    }
                }
            },
            update: function(e) {
                var t = this.thumbs.swiper;
                if (t) {
                    var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView;
                    if (this.realIndex !== t.realIndex) {
                        var s, n = t.activeIndex;
                        if (t.params.loop) {
                            t.slides.eq(n).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, n = t.activeIndex);
                            var a = t.slides.eq(n).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                                r = t.slides.eq(n).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                            s = void 0 === a ? r : void 0 === r ? a : r - n == n - a ? n : r - n < n - a ? r : a
                        } else s = this.realIndex;
                        t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(s) < 0 && (t.params.centeredSlides ? s = s > n ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : s > n && (s = s - i + 1), t.slideTo(s, e ? 0 : void 0))
                    }
                    var o = 1,
                        l = this.params.thumbs.slideThumbActiveClass;
                    if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (o = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (o = 1), o = Math.floor(o), t.slides.removeClass(l), t.params.loop || t.params.virtual && t.params.virtual.enabled)
                        for (var c = 0; c < o; c += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + c) + '"]').addClass(l);
                    else
                        for (var d = 0; d < o; d += 1) t.slides.eq(this.realIndex + d).addClass(l)
                }
            }
        },
        ye = [W, G, X, V, Z, Q, ee, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function() {
                r.extend(this, {
                    mousewheel: {
                        enabled: !1,
                        enable: te.enable.bind(this),
                        disable: te.disable.bind(this),
                        handle: te.handle.bind(this),
                        handleMouseEnter: te.handleMouseEnter.bind(this),
                        handleMouseLeave: te.handleMouseLeave.bind(this),
                        animateSlider: te.animateSlider.bind(this),
                        releaseScroll: te.releaseScroll.bind(this),
                        lastScrollTime: r.now(),
                        lastEventBeforeSnap: void 0,
                        recentWheelEvents: []
                    }
                })
            },
            on: {
                init: function() {
                    !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable()
                },
                destroy: function() {
                    this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                r.extend(this, {
                    navigation: {
                        init: ie.init.bind(this),
                        update: ie.update.bind(this),
                        destroy: ie.destroy.bind(this),
                        onNextClick: ie.onNextClick.bind(this),
                        onPrevClick: ie.onPrevClick.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.navigation.init(), this.navigation.update()
                },
                toEdge: function() {
                    this.navigation.update()
                },
                fromEdge: function() {
                    this.navigation.update()
                },
                destroy: function() {
                    this.navigation.destroy()
                },
                click: function(e) {
                    var t, i = this.navigation,
                        n = i.$nextEl,
                        a = i.$prevEl;
                    !this.params.navigation.hideOnClick || s(e.target).is(a) || s(e.target).is(n) || (n ? t = n.hasClass(this.params.navigation.hiddenClass) : a && (t = a.hasClass(this.params.navigation.hiddenClass)), !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this), n && n.toggleClass(this.params.navigation.hiddenClass), a && a.toggleClass(this.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function(e) {
                        return e
                    },
                    formatFractionTotal: function(e) {
                        return e
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                r.extend(this, {
                    pagination: {
                        init: se.init.bind(this),
                        render: se.render.bind(this),
                        update: se.update.bind(this),
                        destroy: se.destroy.bind(this),
                        dynamicBulletIndex: 0
                    }
                })
            },
            on: {
                init: function() {
                    this.pagination.init(), this.pagination.render(), this.pagination.update()
                },
                activeIndexChange: function() {
                    (this.params.loop || void 0 === this.snapIndex) && this.pagination.update()
                },
                snapIndexChange: function() {
                    this.params.loop || this.pagination.update()
                },
                slidesLengthChange: function() {
                    this.params.loop && (this.pagination.render(), this.pagination.update())
                },
                snapGridLengthChange: function() {
                    this.params.loop || (this.pagination.render(), this.pagination.update())
                },
                destroy: function() {
                    this.pagination.destroy()
                },
                click: function(e) {
                    this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function() {
                r.extend(this, {
                    scrollbar: {
                        init: ne.init.bind(this),
                        destroy: ne.destroy.bind(this),
                        updateSize: ne.updateSize.bind(this),
                        setTranslate: ne.setTranslate.bind(this),
                        setTransition: ne.setTransition.bind(this),
                        enableDraggable: ne.enableDraggable.bind(this),
                        disableDraggable: ne.disableDraggable.bind(this),
                        setDragPosition: ne.setDragPosition.bind(this),
                        getPointerPosition: ne.getPointerPosition.bind(this),
                        onDragStart: ne.onDragStart.bind(this),
                        onDragMove: ne.onDragMove.bind(this),
                        onDragEnd: ne.onDragEnd.bind(this),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function() {
                    this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                },
                update: function() {
                    this.scrollbar.updateSize()
                },
                resize: function() {
                    this.scrollbar.updateSize()
                },
                observerUpdate: function() {
                    this.scrollbar.updateSize()
                },
                setTranslate: function() {
                    this.scrollbar.setTranslate()
                },
                setTransition: function(e) {
                    this.scrollbar.setTransition(e)
                },
                destroy: function() {
                    this.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                r.extend(this, {
                    parallax: {
                        setTransform: ae.setTransform.bind(this),
                        setTranslate: ae.setTranslate.bind(this),
                        setTransition: ae.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                init: function() {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTranslate: function() {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTransition: function(e) {
                    this.params.parallax.enabled && this.parallax.setTransition(e)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var e = this,
                    t = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach((function(i) {
                    t[i] = re[i].bind(e)
                })), r.extend(e, {
                    zoom: t
                });
                var i = 1;
                Object.defineProperty(e.zoom, "scale", {
                    get: function() {
                        return i
                    },
                    set: function(t) {
                        if (i !== t) {
                            var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                n = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                            e.emit("zoomChange", t, s, n)
                        }
                        i = t
                    }
                })
            },
            on: {
                init: function() {
                    this.params.zoom.enabled && this.zoom.enable()
                },
                destroy: function() {
                    this.zoom.disable()
                },
                touchStart: function(e) {
                    this.zoom.enabled && this.zoom.onTouchStart(e)
                },
                touchEnd: function(e) {
                    this.zoom.enabled && this.zoom.onTouchEnd(e)
                },
                doubleTap: function(e) {
                    this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                },
                transitionEnd: function() {
                    this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                },
                slideChange: function() {
                    this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                r.extend(this, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: oe.load.bind(this),
                        loadInSlide: oe.loadInSlide.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                },
                init: function() {
                    this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                },
                scroll: function() {
                    this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                },
                resize: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                scrollbarDragMove: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                transitionStart: function() {
                    this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
                },
                transitionEnd: function() {
                    this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                },
                slideChange: function() {
                    this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
                }
            }
        }, {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                r.extend(this, {
                    controller: {
                        control: this.params.controller.control,
                        getInterpolateFunction: le.getInterpolateFunction.bind(this),
                        setTranslate: le.setTranslate.bind(this),
                        setTransition: le.setTransition.bind(this)
                    }
                })
            },
            on: {
                update: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                resize: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                observerUpdate: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                setTranslate: function(e, t) {
                    this.controller.control && this.controller.setTranslate(e, t)
                },
                setTransition: function(e, t) {
                    this.controller.control && this.controller.setTransition(e, t)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function() {
                var e = this;
                r.extend(e, {
                    a11y: {
                        liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }), Object.keys(ce).forEach((function(t) {
                    e.a11y[t] = ce[t].bind(e)
                }))
            },
            on: {
                init: function() {
                    this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                },
                toEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                fromEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                paginationUpdate: function() {
                    this.params.a11y.enabled && this.a11y.updatePagination()
                },
                destroy: function() {
                    this.params.a11y.enabled && this.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                r.extend(this, {
                    history: {
                        init: de.init.bind(this),
                        setHistory: de.setHistory.bind(this),
                        setHistoryPopState: de.setHistoryPopState.bind(this),
                        scrollToSlide: de.scrollToSlide.bind(this),
                        destroy: de.destroy.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.history.enabled && this.history.init()
                },
                destroy: function() {
                    this.params.history.enabled && this.history.destroy()
                },
                transitionEnd: function() {
                    this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                },
                slideChange: function() {
                    this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                r.extend(this, {
                    hashNavigation: {
                        initialized: !1,
                        init: he.init.bind(this),
                        destroy: he.destroy.bind(this),
                        setHash: he.setHash.bind(this),
                        onHashCange: he.onHashCange.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.init()
                },
                destroy: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                },
                transitionEnd: function() {
                    this.hashNavigation.initialized && this.hashNavigation.setHash()
                },
                slideChange: function() {
                    this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function() {
                var e = this;
                r.extend(e, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: ue.run.bind(e),
                        start: ue.start.bind(e),
                        stop: ue.stop.bind(e),
                        pause: ue.pause.bind(e),
                        onVisibilityChange: function() {
                            "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
                        },
                        onTransitionEnd: function(t) {
                            e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                        }
                    }
                })
            },
            on: {
                init: function() {
                    this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
                },
                beforeTransitionStart: function(e, t) {
                    this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                },
                sliderFirstMove: function() {
                    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                },
                touchEnd: function() {
                    this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
                },
                destroy: function() {
                    this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                r.extend(this, {
                    fadeEffect: {
                        setTranslate: pe.setTranslate.bind(this),
                        setTransition: pe.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("fade" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "fade");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        r.extend(this.params, e), r.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function() {
                r.extend(this, {
                    cubeEffect: {
                        setTranslate: fe.setTranslate.bind(this),
                        setTransition: fe.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("cube" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        r.extend(this.params, e), r.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                r.extend(this, {
                    flipEffect: {
                        setTranslate: me.setTranslate.bind(this),
                        setTransition: me.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("flip" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        r.extend(this.params, e), r.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "flip" === this.params.effect && this.flipEffect.setTranslate()
                },
                setTransition: function(e) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                r.extend(this, {
                    coverflowEffect: {
                        setTranslate: ge.setTranslate.bind(this),
                        setTransition: ge.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function() {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                },
                setTransition: function(e) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                }
            }
        }, {
            name: "thumbs",
            params: {
                thumbs: {
                    multipleActiveThumbs: !0,
                    swiper: null,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function() {
                r.extend(this, {
                    thumbs: {
                        swiper: null,
                        init: ve.init.bind(this),
                        update: ve.update.bind(this),
                        onThumbClick: ve.onThumbClick.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this.params.thumbs;
                    e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                },
                slideChange: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                update: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                resize: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                observerUpdate: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                setTransition: function(e) {
                    var t = this.thumbs.swiper;
                    t && t.setTransition(e)
                },
                beforeDestroy: function() {
                    var e = this.thumbs.swiper;
                    e && this.thumbs.swiperCreated && e && e.destroy()
                }
            }
        }];
    return void 0 === j.use && (j.use = j.Class.use, j.installModule = j.Class.installModule), j.use(ye), j
})),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}((function(e) {
    e.extend(e.fn, {
        validate: function(t) {
            if (this.length) {
                var i = e.data(this[0], "validator");
                return i || (this.attr("novalidate", "novalidate"), i = new e.validator(t, this[0]), e.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", (function(t) {
                    i.submitButton = t.currentTarget, e(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (i.cancelSubmit = !0)
                })), this.on("submit.validate", (function(t) {
                    function s() {
                        var s, n;
                        return i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (s = e("<input type='hidden'/>").attr("name", i.submitButton.name).val(e(i.submitButton).val()).appendTo(i.currentForm)), !(i.settings.submitHandler && !i.settings.debug) || (n = i.settings.submitHandler.call(i, i.currentForm, t), s && s.remove(), void 0 !== n && n)
                    }
                    return i.settings.debug && t.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1)
                }))), i)
            }
            t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            var t, i, s;
            return e(this[0]).is("form") ? t = this.validate().form() : (s = [], t = !0, i = e(this[0].form).validate(), this.each((function() {
                (t = i.element(this) && t) || (s = s.concat(i.errorList))
            })), i.errorList = s), t
        },
        rules: function(t, i) {
            var s, n, a, r, o, l, c = this[0],
                d = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable");
            if (null != c && (!c.form && d && (c.form = this.closest("form")[0], c.name = this.attr("name")), null != c.form)) {
                if (t) switch (s = e.data(c.form, "validator").settings, n = s.rules, a = e.validator.staticRules(c), t) {
                    case "add":
                        e.extend(a, e.validator.normalizeRule(i)), delete a.messages, n[c.name] = a, i.messages && (s.messages[c.name] = e.extend(s.messages[c.name], i.messages));
                        break;
                    case "remove":
                        return i ? (l = {}, e.each(i.split(/\s/), (function(e, t) {
                            l[t] = a[t], delete a[t]
                        })), l) : (delete n[c.name], a)
                }
                return (r = e.validator.normalizeRules(e.extend({}, e.validator.classRules(c), e.validator.attributeRules(c), e.validator.dataRules(c), e.validator.staticRules(c)), c)).required && (o = r.required, delete r.required, r = e.extend({
                    required: o
                }, r)), r.remote && (o = r.remote, delete r.remote, r = e.extend(r, {
                    remote: o
                })), r
            }
        }
    }), e.extend(e.expr.pseudos || e.expr[":"], {
        blank: function(t) {
            return !e.trim("" + e(t).val())
        },
        filled: function(t) {
            var i = e(t).val();
            return null !== i && !!e.trim("" + i)
        },
        unchecked: function(t) {
            return !e(t).prop("checked")
        }
    }), e.validator = function(t, i) {
        this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = i, this.init()
    }, e.validator.format = function(t, i) {
        return 1 === arguments.length ? function() {
            var i = e.makeArray(arguments);
            return i.unshift(t), e.validator.format.apply(this, i)
        } : (void 0 === i || (arguments.length > 2 && i.constructor !== Array && (i = e.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), e.each(i, (function(e, i) {
            t = t.replace(new RegExp("\\{" + e + "\\}", "g"), (function() {
                return i
            }))
        }))), t)
    }, e.extend(e.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: e([]),
            errorLabelContainer: e([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(e) {
                this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
            },
            onfocusout: function(e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function(t, i) {
                9 === i.which && "" === this.elementValue(t) || -1 !== e.inArray(i.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
            },
            onclick: function(e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function(t, i, s) {
                "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(s) : e(t).addClass(i).removeClass(s)
            },
            unhighlight: function(t, i, s) {
                "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(s) : e(t).removeClass(i).addClass(s)
            }
        },
        setDefaults: function(t) {
            e.extend(e.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: e.validator.format("Please enter no more than {0} characters."),
            minlength: e.validator.format("Please enter at least {0} characters."),
            rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
            range: e.validator.format("Please enter a value between {0} and {1}."),
            max: e.validator.format("Please enter a value less than or equal to {0}."),
            min: e.validator.format("Please enter a value greater than or equal to {0}."),
            step: e.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function t(t) {
                    var i = void 0 !== e(this).attr("contenteditable") && "false" !== e(this).attr("contenteditable");
                    if (!this.form && i && (this.form = e(this).closest("form")[0], this.name = e(this).attr("name")), s === this.form) {
                        var n = e.data(this.form, "validator"),
                            a = "on" + t.type.replace(/^validate/, ""),
                            r = n.settings;
                        r[a] && !e(this).is(r.ignore) && r[a].call(n, this, t)
                    }
                }
                this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i, s = this.currentForm,
                    n = this.groups = {};
                e.each(this.settings.groups, (function(t, i) {
                    "string" == typeof i && (i = i.split(/\s/)), e.each(i, (function(e, i) {
                        n[i] = t
                    }))
                })), i = this.settings.rules, e.each(i, (function(t, s) {
                    i[t] = e.validator.normalizeRule(s)
                })), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                return this.valid()
            },
            element: function(t) {
                var i, s, n = this.clean(t),
                    a = this.validationTargetFor(n),
                    r = this,
                    o = !0;
                return void 0 === a ? delete this.invalid[n.name] : (this.prepareElement(a), this.currentElements = e(a), (s = this.groups[a.name]) && e.each(this.groups, (function(e, t) {
                    t === s && e !== a.name && ((n = r.validationTargetFor(r.clean(r.findByName(e)))) && n.name in r.invalid && (r.currentElements.push(n), o = r.check(n) && o))
                })), i = !1 !== this.check(a), o = o && i, this.invalid[a.name] = !i, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !i)), o
            },
            showErrors: function(t) {
                if (t) {
                    var i = this;
                    e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, (function(e, t) {
                        return {
                            message: e,
                            element: i.findByName(t)[0]
                        }
                    })), this.successList = e.grep(this.successList, (function(e) {
                        return !(e.name in t)
                    }))
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(t)
            },
            resetElements: function(e) {
                var t;
                if (this.settings.unhighlight)
                    for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
                else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(e) {
                var t, i = 0;
                for (t in e) void 0 !== e[t] && null !== e[t] && !1 !== e[t] && i++;
                return i
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(e) {
                e.not(this.containers).text(""), this.addWrapper(e).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (e) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === e.grep(this.errorList, (function(e) {
                    return e.element.name === t.name
                })).length && t
            },
            elements: function() {
                var t = this,
                    i = {};
                return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter((function() {
                    var s = this.name || e(this).attr("name"),
                        n = void 0 !== e(this).attr("contenteditable") && "false" !== e(this).attr("contenteditable");
                    return !s && t.settings.debug && window.console && console.error("%o has no name assigned", this), n && (this.form = e(this).closest("form")[0], this.name = s), !(this.form !== t.currentForm || s in i || !t.objectLength(e(this).rules()) || (i[s] = !0, 0))
                }))
            },
            clean: function(t) {
                return e(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return e(this.settings.errorElement + "." + t, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([])
            },
            reset: function() {
                this.resetInternals(), this.currentElements = e([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(e) {
                this.reset(), this.toHide = this.errorsFor(e)
            },
            elementValue: function(t) {
                var i, s, n = e(t),
                    a = t.type,
                    r = void 0 !== n.attr("contenteditable") && "false" !== n.attr("contenteditable");
                return "radio" === a || "checkbox" === a ? this.findByName(t.name).filter(":checked").val() : "number" === a && void 0 !== t.validity ? t.validity.badInput ? "NaN" : n.val() : (i = r ? n.text() : n.val(), "file" === a ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (s = i.lastIndexOf("/")) >= 0 ? i.substr(s + 1) : (s = i.lastIndexOf("\\")) >= 0 ? i.substr(s + 1) : i : "string" == typeof i ? i.replace(/\r/g, "") : i)
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var i, s, n, a, r = e(t).rules(),
                    o = e.map(r, (function(e, t) {
                        return t
                    })).length,
                    l = !1,
                    c = this.elementValue(t);
                for (s in "function" == typeof r.normalizer ? a = r.normalizer : "function" == typeof this.settings.normalizer && (a = this.settings.normalizer), a && (c = a.call(t, c), delete r.normalizer), r) {
                    n = {
                        method: s,
                        parameters: r[s]
                    };
                    try {
                        if ("dependency-mismatch" === (i = e.validator.methods[s].call(this, c, t, n.parameters)) && 1 === o) {
                            l = !0;
                            continue
                        }
                        if (l = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!i) return this.formatAndAdd(t, n), !1
                    } catch (e) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + n.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + n.method + "' method."), e
                    }
                }
                if (!l) return this.objectLength(r) && this.successList.push(t), !0
            },
            customDataMessage: function(t, i) {
                return e(t).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || e(t).data("msg")
            },
            customMessage: function(e, t) {
                var i = this.settings.messages[e];
                return i && (i.constructor === String ? i : i[t])
            },
            findDefined: function() {
                for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e]) return arguments[e]
            },
            defaultMessage: function(t, i) {
                "string" == typeof i && (i = {
                    method: i
                });
                var s = this.findDefined(this.customMessage(t.name, i.method), this.customDataMessage(t, i.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[i.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
                    n = /\$?\{(\d+)\}/g;
                return "function" == typeof s ? s = s.call(this, i.parameters, t) : n.test(s) && (s = e.validator.format(s.replace(n, "{$1}"), i.parameters)), s
            },
            formatAndAdd: function(e, t) {
                var i = this.defaultMessage(e, t);
                this.errorList.push({
                    message: i,
                    element: e,
                    method: t.method
                }), this.errorMap[e.name] = i, this.submitted[e.name] = i
            },
            addWrapper: function(e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
            },
            defaultShowErrors: function() {
                var e, t, i;
                for (e = 0; this.errorList[e]; e++) i = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                if (this.settings.unhighlight)
                    for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return e(this.errorList).map((function() {
                    return this.element
                }))
            },
            showLabel: function(t, i) {
                var s, n, a, r, o = this.errorsFor(t),
                    l = this.idOrName(t),
                    c = e(t).attr("aria-describedby");
                o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass), o.html(i)) : (s = o = e("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (s = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(s) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, s, e(t)) : s.insertAfter(t), o.is("label") ? o.attr("for", l) : 0 === o.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (a = o.attr("id"), c ? c.match(new RegExp("\\b" + this.escapeCssMeta(a) + "\\b")) || (c += " " + a) : c = a, e(t).attr("aria-describedby", c), (n = this.groups[t.name]) && (r = this, e.each(r.groups, (function(t, i) {
                    i === n && e("[name='" + r.escapeCssMeta(t) + "']", r.currentForm).attr("aria-describedby", o.attr("id"))
                }))))), !i && this.settings.success && (o.text(""), "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, t)), this.toShow = this.toShow.add(o)
            },
            errorsFor: function(t) {
                var i = this.escapeCssMeta(this.idOrName(t)),
                    s = e(t).attr("aria-describedby"),
                    n = "label[for='" + i + "'], label[for='" + i + "'] *";
                return s && (n = n + ", #" + this.escapeCssMeta(s).replace(/\s+/g, ", #")), this.errors().filter(n)
            },
            escapeCssMeta: function(e) {
                return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0]
            },
            checkable: function(e) {
                return /radio|checkbox/i.test(e.type)
            },
            findByName: function(t) {
                return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
            },
            getLength: function(t, i) {
                switch (i.nodeName.toLowerCase()) {
                    case "select":
                        return e("option:selected", i).length;
                    case "input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(e, t) {
                return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
            },
            dependTypes: {
                boolean: function(e) {
                    return e
                },
                string: function(t, i) {
                    return !!e(t, i.form).length
                },
                function: function(e, t) {
                    return e(t)
                }
            },
            optional: function(t) {
                var i = this.elementValue(t);
                return !e.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
            },
            stopRequest: function(t, i) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.submitButton && e("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(t, i) {
                return i = "string" == typeof i && i || "remote", e.data(t, "previousValue") || e.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, {
                        method: i
                    })
                })
            },
            destroy: function() {
                this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i : e.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var i = {},
                s = e(t).attr("class");
            return s && e.each(s.split(" "), (function() {
                this in e.validator.classRuleSettings && e.extend(i, e.validator.classRuleSettings[this])
            })), i
        },
        normalizeAttributeRule: function(e, t, i, s) {
            /min|max|step/.test(i) && (null === t || /number|range|text/.test(t)) && (s = Number(s), isNaN(s) && (s = void 0)), s || 0 === s ? e[i] = s : t === i && "range" !== t && (e[i] = !0)
        },
        attributeRules: function(t) {
            var i, s, n = {},
                a = e(t),
                r = t.getAttribute("type");
            for (i in e.validator.methods) "required" === i ? ("" === (s = t.getAttribute(i)) && (s = !0), s = !!s) : s = a.attr(i), this.normalizeAttributeRule(n, r, i, s);
            return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
        },
        dataRules: function(t) {
            var i, s, n = {},
                a = e(t),
                r = t.getAttribute("type");
            for (i in e.validator.methods) "" === (s = a.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase())) && (s = !0), this.normalizeAttributeRule(n, r, i, s);
            return n
        },
        staticRules: function(t) {
            var i = {},
                s = e.data(t.form, "validator");
            return s.settings.rules && (i = e.validator.normalizeRule(s.settings.rules[t.name]) || {}), i
        },
        normalizeRules: function(t, i) {
            return e.each(t, (function(s, n) {
                if (!1 !== n) {
                    if (n.param || n.depends) {
                        var a = !0;
                        switch (typeof n.depends) {
                            case "string":
                                a = !!e(n.depends, i.form).length;
                                break;
                            case "function":
                                a = n.depends.call(i, i)
                        }
                        a ? t[s] = void 0 === n.param || n.param : (e.data(i.form, "validator").resetElements(e(i)), delete t[s])
                    }
                } else delete t[s]
            })), e.each(t, (function(s, n) {
                t[s] = e.isFunction(n) && "normalizer" !== s ? n(i) : n
            })), e.each(["minlength", "maxlength"], (function() {
                t[this] && (t[this] = Number(t[this]))
            })), e.each(["rangelength", "range"], (function() {
                var i;
                t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(i[0]), Number(i[1])]))
            })), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var i = {};
                e.each(t.split(/\s/), (function() {
                    i[this] = !0
                })), t = i
            }
            return t
        },
        addMethod: function(t, i, s) {
            e.validator.methods[t] = i, e.validator.messages[t] = void 0 !== s ? s : e.validator.messages[t], i.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, i, s) {
                if (!this.depend(s, i)) return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var n = e(i).val();
                    return n && n.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : null != t && t.length > 0
            },
            email: function(e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            },
            url: function(e, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)
            },
            date: function() {
                var e = !1;
                return function(t, i) {
                    return e || (e = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(i) || !/Invalid|NaN/.test(new Date(t).toString())
                }
            }(),
            dateISO: function(e, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
            },
            number: function(e, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            },
            digits: function(e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            },
            minlength: function(t, i, s) {
                var n = e.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || n >= s
            },
            maxlength: function(t, i, s) {
                var n = e.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || n <= s
            },
            rangelength: function(t, i, s) {
                var n = e.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || n >= s[0] && n <= s[1]
            },
            min: function(e, t, i) {
                return this.optional(t) || e >= i
            },
            max: function(e, t, i) {
                return this.optional(t) || e <= i
            },
            range: function(e, t, i) {
                return this.optional(t) || e >= i[0] && e <= i[1]
            },
            step: function(t, i, s) {
                var n, a = e(i).attr("type"),
                    r = "Step attribute on input type " + a + " is not supported.",
                    o = new RegExp("\\b" + a + "\\b"),
                    l = function(e) {
                        var t = ("" + e).match(/(?:\.(\d+))?$/);
                        return t && t[1] ? t[1].length : 0
                    },
                    c = function(e) {
                        return Math.round(e * Math.pow(10, n))
                    },
                    d = !0;
                if (a && !o.test(["text", "number", "range"].join())) throw new Error(r);
                return n = l(s), (l(t) > n || c(t) % c(s) != 0) && (d = !1), this.optional(i) || d
            },
            equalTo: function(t, i, s) {
                var n = e(s);
                return this.settings.onfocusout && n.not(".validate-equalTo-blur").length && n.addClass("validate-equalTo-blur").on("blur.validate-equalTo", (function() {
                    e(i).valid()
                })), t === n.val()
            },
            remote: function(t, i, s, n) {
                if (this.optional(i)) return "dependency-mismatch";
                n = "string" == typeof n && n || "remote";
                var a, r, o, l = this.previousValue(i, n);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[i.name][n], this.settings.messages[i.name][n] = l.message, s = "string" == typeof s && {
                    url: s
                } || s, o = e.param(e.extend({
                    data: t
                }, s.data)), l.old === o ? l.valid : (l.old = o, a = this, this.startRequest(i), (r = {})[i.name] = t, e.ajax(e.extend(!0, {
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: r,
                    context: a.currentForm,
                    success: function(e) {
                        var s, r, o, c = !0 === e || "true" === e;
                        a.settings.messages[i.name][n] = l.originalMessage, c ? (o = a.formSubmitted, a.resetInternals(), a.toHide = a.errorsFor(i), a.formSubmitted = o, a.successList.push(i), a.invalid[i.name] = !1, a.showErrors()) : (s = {}, r = e || a.defaultMessage(i, {
                            method: n,
                            parameters: t
                        }), s[i.name] = l.message = r, a.invalid[i.name] = !0, a.showErrors(s)), l.valid = c, a.stopRequest(i, c)
                    }
                }, s)), "pending")
            }
        }
    });
    var t, i = {};
    return e.ajaxPrefilter ? e.ajaxPrefilter((function(e, t, s) {
        var n = e.port;
        "abort" === e.mode && (i[n] && i[n].abort(), i[n] = s)
    })) : (t = e.ajax, e.ajax = function(s) {
        var n = ("mode" in s ? s : e.ajaxSettings).mode,
            a = ("port" in s ? s : e.ajaxSettings).port;
        return "abort" === n ? (i[a] && i[a].abort(), i[a] = t.apply(this, arguments), i[a]) : t.apply(this, arguments)
    }), e
})),
function(e, t) {
    if ("function" == typeof define && define.amd) define(["module", "exports"], t);
    else if ("undefined" != typeof exports) t(module, exports);
    else {
        var i = {
            exports: {}
        };
        t(i, i.exports), e.WOW = i.exports
    }
}(this, (function(e, t) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function s(e, t) {
        return t.indexOf(e) >= 0
    }

    function n(e, t) {
        for (var i in t)
            if (null == e[i]) {
                var s = t[i];
                e[i] = s
            }
        return e
    }

    function a(e) {
        var t = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1],
            i = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2],
            s = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
            n = void 0;
        return null != document.createEvent ? (n = document.createEvent("CustomEvent")).initCustomEvent(e, t, i, s) : null != document.createEventObject ? (n = document.createEventObject()).eventType = e : n.eventName = e, n
    }

    function r(e, t, i) {
        null != e.addEventListener ? e.addEventListener(t, i, !1) : null != e.attachEvent ? e.attachEvent("on" + t, i) : e[t] = i
    }

    function o(e, t, i) {
        null != e.removeEventListener ? e.removeEventListener(t, i, !1) : null != e.detachEvent ? e.detachEvent("on" + t, i) : delete e[t]
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var l, c, d = function() {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }
            return function(t, i, s) {
                return i && e(t.prototype, i), s && e(t, s), t
            }
        }(),
        h = window.WeakMap || window.MozWeakMap || function() {
            function e() {
                i(this, e), this.keys = [], this.values = []
            }
            return d(e, [{
                key: "get",
                value: function(e) {
                    for (var t = 0; t < this.keys.length; t++) {
                        if (this.keys[t] === e) return this.values[t]
                    }
                }
            }, {
                key: "set",
                value: function(e, t) {
                    for (var i = 0; i < this.keys.length; i++) {
                        if (this.keys[i] === e) return this.values[i] = t, this
                    }
                    return this.keys.push(e), this.values.push(t), this
                }
            }]), e
        }(),
        u = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (c = l = function() {
            function e() {
                i(this, e), "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
            }
            return d(e, [{
                key: "observe",
                value: function() {}
            }]), e
        }(), l.notSupported = !0, c),
        p = window.getComputedStyle || function(e) {
            var t = /(\-([a-z]){1})/g;
            return {
                getPropertyValue: function(i) {
                    "float" === i && (i = "styleFloat"), t.test(i) && i.replace(t, (function(e, t) {
                        return t.toUpperCase()
                    }));
                    var s = e.currentStyle;
                    return (null != s ? s[i] : void 0) || null
                }
            }
        },
        f = function() {
            function e() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                i(this, e), this.defaults = {
                    boxClass: "wow",
                    animateClass: "animated",
                    offset: 0,
                    mobile: !0,
                    live: !0,
                    callback: null,
                    scrollContainer: null,
                    resetAnimation: !0
                }, this.animate = "requestAnimationFrame" in window ? function(e) {
                    return window.requestAnimationFrame(e)
                } : function(e) {
                    return e()
                }, this.vendors = ["moz", "webkit"], this.start = this.start.bind(this), this.resetAnimation = this.resetAnimation.bind(this), this.scrollHandler = this.scrollHandler.bind(this), this.scrollCallback = this.scrollCallback.bind(this), this.scrolled = !0, this.config = n(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new h, this.wowEvent = a(this.config.boxClass)
            }
            return d(e, [{
                key: "init",
                value: function() {
                    this.element = window.document.documentElement, s(document.readyState, ["interactive", "complete"]) ? this.start() : r(document, "DOMContentLoaded", this.start), this.finished = []
                }
            }, {
                key: "start",
                value: function() {
                    var e = this;
                    if (this.stopped = !1, this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)), this.all = this.boxes.slice(0), this.boxes.length)
                        if (this.disabled()) this.resetStyle();
                        else
                            for (var t = 0; t < this.boxes.length; t++) {
                                var i = this.boxes[t];
                                this.applyStyle(i, !0)
                            }(this.disabled() || (r(this.config.scrollContainer || window, "scroll", this.scrollHandler), r(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) && new u((function(t) {
                                for (var i = 0; i < t.length; i++)
                                    for (var s = t[i], n = 0; n < s.addedNodes.length; n++) {
                                        var a = s.addedNodes[n];
                                        e.doSync(a)
                                    }
                            })).observe(document.body, {
                                childList: !0,
                                subtree: !0
                            })
                }
            }, {
                key: "stop",
                value: function() {
                    this.stopped = !0, o(this.config.scrollContainer || window, "scroll", this.scrollHandler), o(window, "resize", this.scrollHandler), null != this.interval && clearInterval(this.interval)
                }
            }, {
                key: "sync",
                value: function() {
                    u.notSupported && this.doSync(this.element)
                }
            }, {
                key: "doSync",
                value: function(e) {
                    if (null != e || (e = this.element), 1 === e.nodeType)
                        for (var t = (e = e.parentNode || e).querySelectorAll("." + this.config.boxClass), i = 0; i < t.length; i++) {
                            var n = t[i];
                            s(n, this.all) || (this.boxes.push(n), this.all.push(n), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(n, !0), this.scrolled = !0)
                        }
                }
            }, {
                key: "show",
                value: function(e) {
                    return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(e),
                        function(e, t) {
                            null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) && e["on" + t]()
                        }(e, this.wowEvent), this.config.resetAnimation && (r(e, "animationend", this.resetAnimation), r(e, "oanimationend", this.resetAnimation), r(e, "webkitAnimationEnd", this.resetAnimation), r(e, "MSAnimationEnd", this.resetAnimation)), e
                }
            }, {
                key: "applyStyle",
                value: function(e, t) {
                    var i = this,
                        s = e.getAttribute("data-wow-duration"),
                        n = e.getAttribute("data-wow-delay"),
                        a = e.getAttribute("data-wow-iteration");
                    return this.animate((function() {
                        return i.customStyle(e, t, s, n, a)
                    }))
                }
            }, {
                key: "resetStyle",
                value: function() {
                    for (var e = 0; e < this.boxes.length; e++) {
                        this.boxes[e].style.visibility = "visible"
                    }
                }
            }, {
                key: "resetAnimation",
                value: function(e) {
                    if (e.type.toLowerCase().indexOf("animationend") >= 0) {
                        var t = e.target || e.srcElement;
                        t.className = t.className.replace(this.config.animateClass, "").trim()
                    }
                }
            }, {
                key: "customStyle",
                value: function(e, t, i, s, n) {
                    return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", i && this.vendorSet(e.style, {
                        animationDuration: i
                    }), s && this.vendorSet(e.style, {
                        animationDelay: s
                    }), n && this.vendorSet(e.style, {
                        animationIterationCount: n
                    }), this.vendorSet(e.style, {
                        animationName: t ? "none" : this.cachedAnimationName(e)
                    }), e
                }
            }, {
                key: "vendorSet",
                value: function(e, t) {
                    for (var i in t)
                        if (t.hasOwnProperty(i)) {
                            var s = t[i];
                            e["" + i] = s;
                            for (var n = 0; n < this.vendors.length; n++) {
                                e["" + this.vendors[n] + i.charAt(0).toUpperCase() + i.substr(1)] = s
                            }
                        }
                }
            }, {
                key: "vendorCSS",
                value: function(e, t) {
                    for (var i = p(e), s = i.getPropertyCSSValue(t), n = 0; n < this.vendors.length; n++) {
                        var a = this.vendors[n];
                        s = s || i.getPropertyCSSValue("-" + a + "-" + t)
                    }
                    return s
                }
            }, {
                key: "animationName",
                value: function(e) {
                    var t = void 0;
                    try {
                        t = this.vendorCSS(e, "animation-name").cssText
                    } catch (i) {
                        t = p(e).getPropertyValue("animation-name")
                    }
                    return "none" === t ? "" : t
                }
            }, {
                key: "cacheAnimationName",
                value: function(e) {
                    return this.animationNameCache.set(e, this.animationName(e))
                }
            }, {
                key: "cachedAnimationName",
                value: function(e) {
                    return this.animationNameCache.get(e)
                }
            }, {
                key: "scrollHandler",
                value: function() {
                    this.scrolled = !0
                }
            }, {
                key: "scrollCallback",
                value: function() {
                    if (this.scrolled) {
                        this.scrolled = !1;
                        for (var e = [], t = 0; t < this.boxes.length; t++) {
                            var i = this.boxes[t];
                            if (i) {
                                if (this.isVisible(i)) {
                                    this.show(i);
                                    continue
                                }
                                e.push(i)
                            }
                        }
                        this.boxes = e, this.boxes.length || this.config.live || this.stop()
                    }
                }
            }, {
                key: "offsetTop",
                value: function(e) {
                    for (; void 0 === e.offsetTop;) e = e.parentNode;
                    for (var t = e.offsetTop; e.offsetParent;) t += (e = e.offsetParent).offsetTop;
                    return t
                }
            }, {
                key: "isVisible",
                value: function(e) {
                    var t = e.getAttribute("data-wow-offset") || this.config.offset,
                        i = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
                        s = i + Math.min(this.element.clientHeight, "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight) - t,
                        n = this.offsetTop(e),
                        a = n + e.clientHeight;
                    return s >= n && a >= i
                }
            }, {
                key: "disabled",
                value: function() {
                    return !this.config.mobile && function(e) {
                        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
                    }(navigator.userAgent)
                }
            }]), e
        }();
    t.default = f, e.exports = t.default
}));
/* End */
;; /* Start:"a:4:{s:4:"full";s:55:"/local/templates/main/js/scripts.min.js?164217444727815";s:6:"source";s:35:"/local/templates/main/js/scripts.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function $tile(e) {
    e.length && e.masonry({
        itemSelector: "li",
        singleMode: !0,
        isResizable: !0,
        isAnimated: !0,
        horizontalOrder: !0,
        animationOptions: {
            queue: !1,
            duration: 500
        }
    })
}

function initMasonry() {
    $(".article-list__container").each((function() {
        var e = $(this);
        $(".article-list__li", e), e.masonry(), this.addEventListener("load", (function() {
            e.masonry()
        }), !0)
    }))
} - 1 == location.pathname.search("/bitrix/") && "function" != typeof String.prototype.reverse && (String.prototype.reverse = function() {
    return this.split("").reverse().join("")
}), $((function() {
    $(".advantages__li").each((function() {
        $(this).find(".advantages__li-box").append($(this).find(".advantages__li-icon-box").clone().removeClass("advantages__li-icon-box").addClass("advantages__li-bg-box")), $(this).find(".advantages__li-bg-box .advantages__li-icon").removeClass("advantages__li-icon").addClass("advantages__li-bg");
        var e = 10 * $(this).find(".advantages__li-bg").attr("width"),
            t = 10 * $(this).find(".advantages__li-bg").attr("height");
        $(this).find(".advantages__li-bg").attr("width", e), $(this).find(".advantages__li-bg").attr("height", t)
    }));
    var e = $(".advertisement ");
    void 0 !== BX.getCookie("hide_green") && "Y" == BX.getCookie("hide_green") || e.removeClass("hide1"), $(document).on("click", ".js-advertisement-close", (function() {
        return $(this).closest(".advertisement").slideUp(), BX.setCookie("hide_green", "Y", {
            expires: 86400,
            path: "/"
        }), !1
    }))
})), initMasonry();
var detalicScroll, detalicSalePosition, userAgent = navigator.userAgent.toLowerCase(),
    ff = /firefox/.test(userAgent),
    mac = /mac/.test(userAgent);

function positionHidd() {
    $(".catalog__credit").each((function() {
        var e = $(window).width();
        positionCredit = $(this).offset().left, e - positionCredit <= 150 ? $(this).addClass("catalog__credit--left") : $(this).removeClass("catalog__credit--left")
    }))
}

function result(e) {
    var t, a = e.closest(".configurator__equipment-item").data("id"),
        o = $('.configurator__result-list-name[href="' + a + '"]').closest(".configurator__result-list-box"),
        n = e.closest(".configurator__equipment-item").find(".configurator__equipment-name-select");
    if (e.closest(".configurator__equipment-arr").length) {
        let a = [];
        e.closest(".configurator__equipment-arr").find("input:checked").each((function() {
            0 != $(this).attr("data-price") && a.push($(this).siblings(".configurator__equipment-radio-text").text())
        })), t = a.join()
    } else t = e.siblings(".configurator__equipment-radio-text").text();
    if (o.find(".sum-box").remove(), e.closest(".configurator__equipment-list-box").find(".amount").length) {
        var i = e.closest(".configurator__equipment-list-box").find(".amount").find(".amount__input").val();
        1 != i && o.find(".configurator__result-list-current").addClass("_sum").after('<p class="sum-box">x' + i + "</p>")
    }
    0 != e.data("price") || e.closest(".configurator__equipment-arr").length ? (o.hasClass("_active") || o.addClass("_active"), o.find(".configurator__result-list-current").text(t), n.text(t)) : o.removeClass("_active"), $(".configurator__result-list").find("._active").length > 4 ? $(".configurator__result-list").addClass("_hide") : $(".configurator__result-list").hasClass("_hide") && $(".configurator__result-list").removeClass("_hide")
}

function counterCall() {}

function counter(e, t, a) {
    e.countTo({
        from: +t,
        to: a,
        speed: 500,
        refreshInterval: 50,
        formatter: function(e, t) {
            return e.toLocaleString("ru-RU")
        }
    })
}

function pricePlus(e) {
    var t = e.data("price");
    e.closest(".configurator__equipment-list-box").siblings(".configurator__equipment-list-box").each((function() {
        var e = $(this).find(".configurator__equipment-radio-input").data("price");
        $(this).find(".configurator__equipment-radio-price").remove(), (e -= t) > 0 ? $(this).find(".configurator__equipment-radio-text").append('<span class="configurator__equipment-radio-price">+' + e + "руб.</span>") : e < 0 && $(this).find(".configurator__equipment-radio-text").append('<span class="configurator__equipment-radio-price">' + e + "руб.</span>")
    }))
}
1 == mac && $("body").addClass("macos"), $(".basket__input-massage").length && $(".basket__input-massage").clone().addClass("basket__input-massage--mobile").prependTo($(".basket__order-box-btn")), $(".basket").length && ($(".footer").addClass("footer--padding-mob"), $(".basket").append('<div class="basket__control"/>'), $(".basket__control").append($(".basket__worth").clone(), $(".basket__order-btn").clone())), $(document).on("click", ".catalog__credit .detalic__control-price-i", (function() {
        return $(".catalog__credit").removeClass("_active"), $(this).closest(".catalog__credit").toggleClass("_active"), !1
    })), $(document).on("click", (function(e) {
        $(e.target).closest(".catalog__credit").length || ($(".catalog__credit").removeClass("_active"), e.stopPropagation())
    })), $(".catalog__credit").length && ($(document).on("DOMContentLoaded", (function() {
        positionHidd()
    })), $(window).on("resize", (function() {
        setTimeout((function() {
            positionHidd()
        }), 300)
    }))), $("[data-cloneMobile]").each((function() {
        $("." + $(this).attr("data-cloneMobile")).after($(this).clone().addClass("clone-mobile"))
    })), $(document).on("click", ".configurator__result-list-name", (function() {
        var e = $(this).attr("href"),
            t = $('[data-id="' + e + '"]').offset().top - 80;
        return $("body,html").animate({
            scrollTop: t
        }, 500), !1
    })), $(".select__configurator").on("select2:select", (function(e) {
        var t = $(this.selectedOptions[0]).data("load"),
            a = $(this);
        "none" != t && new Promise((function(e, o) {
            $.ajax({
                url: t,
                success: function(t) {
                    a.closest(".configurator__equipment-item").find(".configurator__equipment-box").empty().append(t), $(".configurator__result-box").addClass("_active"), $(".footer").addClass("footer--padding-mob"), e()
                },
                error: function() {}
            })
        })).then((function() {
            a.closest(".configurator__equipment-item").find(".configurator__equipment-list").slideDown()
        }));
        $(this).closest(".configurator__equipment-list-box").find(".configurator__equipment-radio-price").remove()
    })), $(document).on("click", ".configurator__result-btn-open", (function() {
        $(".configurator__title").slideToggle(), $(this).toggleClass("_open");
        var e = $(this).data("open"),
            t = $(this).data("close"),
            a = $(".configurator__result-list-content").height();
        return $(this).hasClass("_open") ? ($(".configurator__result-list").css("max-height", a), $(this).text(t)) : ($(".configurator__result-list").removeAttr("style"), $(this).text(e)), !1
    })),
    function(e) {
        e.fn.countTo = function(t) {
            return t = t || {}, e(this).each((function() {
                var a = e.extend({}, e.fn.countTo.defaults, {
                        from: e(this).data("pricefrom"),
                        to: e(this).data("priceto"),
                        speed: e(this).data("speed"),
                        refreshInterval: e(this).data("refresh-interval"),
                        decimals: e(this).data("decimals")
                    }, t),
                    o = Math.ceil(a.speed / a.refreshInterval),
                    n = (a.to - a.from) / o,
                    i = this,
                    s = e(this),
                    l = 0,
                    r = a.from,
                    c = s.data("countTo") || {};

                function d(e) {
                    var t = a.formatter.call(i, e, a);
                    s.html(t)
                }
                s.data("countTo", c), c.interval && clearInterval(c.interval), c.interval = setInterval((function() {
                    l++, d(r += n), "function" == typeof a.onUpdate && a.onUpdate.call(i, r);
                    l >= o && (s.removeData("countTo"), clearInterval(c.interval), r = a.to, "function" == typeof a.onComplete && a.onComplete.call(i, r))
                }), a.refreshInterval), d(r)
            }))
        }, e.fn.countTo.defaults = {
            from: 0,
            to: 0,
            speed: 1e3,
            refreshInterval: 100,
            decimals: 0,
            formatter: function(e, t) {
                return e.toFixed(t.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, " ")
            },
            onUpdate: null,
            onComplete: null
        }
    }(jQuery), $(document).on("click", ".js-configurator__control-btn", (function() {
        return $(this).siblings(".configurator__control-btn").toggleClass("_open"), $("body").toggleClass("bgActive"), !1
    })), $(document).on("click", ".bgDark, .configurator__control-btn", (function(e) {
        $(e.target).closest(".btn").length || ($(".configurator__control-btn").removeClass("_open"), $("body").removeClass("bgActive"), e.stopPropagation())
    })), $(".configurator__result-btn--3").clone().addClass("mob").appendTo($(".configurator__control-btn")), $(".configurator__result-btn--2").clone().addClass("mob").appendTo($(".configurator__control-btn")), $(".configurator__result-box").length && ($(".configurator__result-box").before('<div class="configurator__result-mobile"><div class="configurator__result-mobile-start"/><div class="configurator__result-mobile-end"/></div>'), $(".configurator__result-mobile-start").append($(".configurator__number").clone()), $(".configurator__result-mobile-start").append($(".configurator__price-box").clone()), $(".configurator__result-mobile-end").append($(".configurator__result-img-box").clone()));
var headerPosition, detalicP = function() {
    detalicScroll = $(document).scrollTop(), detalicSalePosition = $(".catalog").offset().top - $(window).height(), detalicScroll >= detalicSalePosition ? $(".detalic__control").addClass("hide") : $(".detalic__control").removeClass("hide")
};
$(".detalic__control").length && $(".catalog").length && ($(document).on("DOMContentLoaded", (function() {
    detalicP()
})), $(window).on("resize", (function() {
    setTimeout((function() {
        detalicP()
    }), 100)
})), $(document).on("scroll load", (function() {
    detalicP()
}))), $(document).on("click", ".faq-page__content-question", (function() {
    return $(this).siblings(".faq-page__content-answer").slideToggle(), $(this).closest("li").toggleClass("_active"), !1
})), ($(".basket").length || $(".detalic").length || $(".fps").length) && $(".footer").addClass("footer--padding-mob"), $(document).on("click", ".to-top", (function(e) {
    e.preventDefault(), $("html, body").animate({
        scrollTop: 0
    }, "300")
}));
var fHeader = function() {
    headerPosition = $(".header__foot").offset().top, $(".header").css("--top", $(".header__foot").height())
};

function sliderCatalog() {
    var e = new Swiper(".catalog__slider", {
        freeMode: !1,
        speed: 600,
        navigation: {
            nextEl: ".catalog__slider-button--next",
            prevEl: ".catalog__slider-button--prev"
        },
        pagination: {
            el: ".catalog__slider-controll",
            dynamicBullets: !0
        },
        breakpoints: {
            0: {
                slidesPerView: "auto",
                spaceBetween: 16,
                loop: $(".swiper-slide").lenght > 1
            },
            580: {
                slidesPerView: "auto",
                spaceBetween: 24,
                loop: $(".swiper-slide").lenght > 1
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
                loop: $(".swiper-slide").lenght > 3
            },
            1224: {
                slidesPerView: 4,
                spaceBetween: 40,
                loop: $(".swiper-slide").lenght > 4
            }
        },
        on: {
            init: function() {}
        }
    });
    $(".catalog__slider").hover((function() {
        $(this).addClass("stop"), e.autoplay.stop()
    }), (function() {
        $(this).removeClass("stop"), e.autoplay.start()
    }))
}

function speedometer(e) {
    e.each((function() {
        var e = $(this).data("max"),
            t = $(this).attr("data-real"),
            a = $(".select__game").val(),
            o = $(".select__responsive").val(),
            n = (t = JSON.parse(t))[a][o];
        e = n > 200 ? n : 200, console.log("obgResp: " + n), console.log("testimonyMax: " + e), e < n && (n = e);
        var i = n / (e / 100),
            s = 1e3 - 1.32 * i,
            l = -288 - -2.88 * i,
            r = $(this).find(".speedometer__counter").text(),
            c = $(this).find(".speedometer__counter"),
            d = n > r ? 7 * (n - r) : 7 * (r - n),
            _ = setInterval((function() {
                r != n && (r < n ? r++ : r > n && r--, c.text(r), r == n && clearInterval(_))
            }), 7);
        c.text(r), $(this).find(".speedometer__arrow").css({
            "--speed": d + "ms",
            "--rotate": l + "deg"
        }), $(this).find(".speedometer__icon").css({
            "--stroke": s,
            "--speed": d + "ms"
        })
    }))
}
$(document).on("DOMContentLoaded", (function() {
    fHeader()
})), $(window).on("resize", (function() {
    setTimeout((function() {
        fHeader()
    }), 100)
})), $(document).on("scroll load", (function() {
    $(this).scrollTop() >= headerPosition ? $(".header").hasClass("_fix").lenght || $(".header").addClass("_fix") : $(".header").removeClass("_fix")
})), $((function() {
    var e = 0,
        t = function() {
            window.header = $(".header"), window.hheaderOffser = window.header.offset().top
        };
    t(), $(window).on("resize", (function() {
        setTimeout((function() {
            t()
        }), 300)
    })), $(window).scroll((function() {
        $(".advertisement").innerHeight();
        var t = $(window).scrollTop();
        window.hheaderOffser < t ? $(".header__head").addClass("_fix-mob") : $(".header__head").removeClass("_fix-mob"), t > 100 + window.hheaderOffser && t > e ? window.header.addClass("header__out") : window.header.removeClass("header__out"), e = t
    }))
})), $(document).on("click", ".js-anhor", (function() {
    var e = $(this).attr("href"),
        t = $('[data-id="' + e + '"]').offset().top - 80;
    return $("body,html").animate({
        scrollTop: t
    }, 500), !1
})), $(document).on("click", ".js-control-btn", (function() {
    return $(this).closest(".detalic__control").toggleClass("_open"), $("body").toggleClass("bgActive"), !1
})), $(".js-control-btn").length && $(".js-control-btn").length && $(".detalic__control").addClass("mob-bt"), $(document).on("click", ".bgDark, .detalic__control-btn-box", (function(e) {
    $(e.target).closest(".detalic__control-btn-2").length || ($(".detalic__control").removeClass("_open"), $("body").removeClass("bgActive"), e.stopPropagation())
})), $(document).on("click", ".js-fps-btn", (function() {
    return $(this).toggleClass("_active"), $(".js-search-btn").removeClass("_active"), $(".menu-mobile").removeClass("_active"), $(".js-btn-menu").removeClass("_active"), $("body").removeClass("bgActive"), localStorage.setItem("animation-fps", !1), $(".header__fps").removeClass("animation").removeClass("animation-fps"), !1
})), $(document).on("click", (function(e) {
    $(e.target).closest(".search").length || ($(".js-fps-btn").removeClass("_active"), e.stopPropagation())
})), localStorage.getItem("animation-fps") ? $(".header__fps").removeClass("animation").removeClass("animation-fps") : setTimeout((function() {
    $(".header__fps").removeClass("animation-fps"), setInterval((function() {
        $(".header__fps").addClass("animation-fps"), setTimeout((function() {
            $(".header__fps").removeClass("animation-fps")
        }), 1e3)
    }), 6e3)
}), 1e3), $.masked = function() {
    $(".mask").mask("+7 (999) 999-99-99")
}, $.masked(), $(document).on("click", ".js-output", (function(e) {
    $(this).closest(".detalic__equipment-item").addClass("_active").siblings(".detalic__equipment-item").removeClass("_active"), $(".card__info").remove(), $(".card__prev").show(), $("body").addClass("_active-mob"), e.preventDefault();
    var t = JSON.parse(atob($(this).data("json"))),
        a = $(".card__prev"),
        o = '<div class="card__info">';
    o += '<div class="card__info-img-box"><img src="' + t.PICTURE + '" alt="" class="card__info-img"></div>', o += '<p class="card__info-title">' + t.NAME + "</p>", console.log(t), t.PROPERTIES.length && (o += '<div class="card__info-box">', t.PROPERTIES.forEach((function(e) {
        o += '<dl class="card__info-dl">\n            <dt class="card__info-dt">' + e.NAME + '</dt>\n            <dd class="card__info-dd">' + e.VALUE + "</dd>\n        </dl>"
    })), o += "</div>"), o += "</div>", a.hide();
    var n = $(".card");
    n.find(".card__info").remove(), n.addClass("load").addClass("open").append(o)
})), $(document).on("click", ".js-output-close", (function(e) {
    return e.stopPropagation(), $(".detalic__equipment-item").removeClass("_active"), $("body").removeClass("_active-mob"), $(".card").removeClass("open"), !1
})), $(".js-output").hover((function() {
    $(this).siblings(".js-output").addClass("_hover")
}), (function() {
    $(this).siblings(".js-output").removeClass("_hover")
})), $(document).on("click", "._active-mob .bgDark", (function() {
    $("body").removeClass("_active-mob"), $(".card").removeClass("open"), $(".detalic__equipment-item").removeClass("_active"), event.stopPropagation()
})), 1 == ff && jQuery(".js-scroll").scrollbar(), $(document).on("click", ".js-search-btn", (function() {
    return $(this).toggleClass("_active"), $(".menu-mobile").removeClass("_active"), $(".js-btn-menu").removeClass("_active"), $("body").removeClass("bgActive"), $(".js-fps-btn").removeClass("_active"), setTimeout((function() {
        $(".search__input").focus()
    }), 100), !1
})), $(document).on("change keyup", ".search__input", (function() {
    return $(this).val().length ? $(this).next(".search__btn").prop("disabled", !1) : $(this).next(".search__btn").prop("disabled", !0), !1
})), $(document).on("click", (function(e) {
    $(e.target).closest(".search").length || ($(".js-search-btn").removeClass("_active"), e.stopPropagation())
})), $(document).on("click", ".js-search__close", (function(e) {
    return $(".js-search-btn").removeClass("_active"), $(".header__fps").removeClass("_active"), !1
})), $(".no-result").length && $(".js-search-btn").addClass("_active"), $(document).on("click", ".tabs__link", (function() {
    return $(this).closest("li").addClass("_current").siblings("li").removeClass("_current"), $(this).closest(".tabs").find(".tabs__box").eq($(this).closest("li").index()).show().siblings(".tabs__box").hide(), optionLink = $(this).closest("li").index(), $(".tabs-select").val(optionLink).trigger("change"), !1
})), $(".tabs__list").after('<select class="select-box tabs-select"/>'), $(".tabs__li").each((function() {
    var e = $(this).text(),
        t = $(this).index();
    $(this).hasClass("_current") ? $(".tabs-select").append('<option value="' + t + '" selected>' + e + "</option>") : $(".tabs-select").append('<option value="' + t + '">' + e + "</option>")
})), $(".tabs-select").on("select2:select", (function(e) {
    var t = e.params.data;
    $(".tabs__li").eq(t.id).addClass("_current").siblings("li").removeClass("_current"), $(".tabs__li").eq(t.id).trigger("click"), $(this).closest(".tabs").find(".tabs__box").eq(t.id).show().siblings(".tabs__box").hide()
})), $(document).on("click", ".tabs-ajax__link", (function() {
    $(this).closest("li").addClass("_active").siblings("li").removeClass("_active"), optionLink = $(this).closest(".tabs-ajax__li").index();
    $(this).attr("data-img");
    $(".tabs-ajax .tabs-ajax__select").val(optionLink).trigger("change")
})), $(".tabs-ajax__inner").append('<select class="select-box tabs-ajax__select"/>'), $(".tabs-ajax__text").each((function() {
    var e = $(this).text(),
        t = $(this).closest(".tabs-ajax__li");
    $(".tabs-ajax__select").append('<option value="' + t.index() + '" ' + (t.hasClass("_active") ? "selected" : "") + ">" + e + "</option>")
})), $(document).on("DOMContentLoaded", (function() {
    $(".tabs-ajax__li").each((function(e) {
        var t = $(this).closest(".tabs-ajax__li").index();
        $(this).closest(".tabs-ajax__li").hasClass("_active") && $(".tabs-ajax .tabs-ajax__select").val(t).trigger("change")
    }))
})), $(".tabs-ajax__select").on("select2:select", (function(e) {
    var t = e.params.data;
    $(".tabs-ajax__li").eq(t.id).addClass("_active").siblings("li").removeClass("_active");
    var a = $(".tabs-ajax__li").eq(t.id).find(".tabs-ajax__link").attr("href");
    $(".tabs-ajax__li").eq(t.id).find("a").attr("data-img");
    location.href = a
})), $(document).on("click", ".js-title-page", (function() {
    $(this).closest(".title-page").toggleClass("_open");
    var e = $(this).data("open"),
        t = $(this).data("close");
    return $(this).closest(".title-page").hasClass("_open") ? ($(this).text(t), $(".catalog__slider").length && setTimeout((function() {
        sliderCatalog()
    }), 100)) : $(this).text(e), $(this).closest(".title-page").find(".title-page__hidd").slideToggle(), !1
})), window.lazySizesConfig = {
    addClasses: !0
}, $((function() {
    $(".header").append('<div class="menu-mobile" style="--topm:167px;"><a href="#" class="menu-mobile__close"/><div class="menu-mobile__wrapper"/></div>'), $("body").prepend('<div class="bgDark"/>'), $(".menu-mobile").prepend($(".location__header").clone().addClass("location__header--mobile")), $(".menu-mobile__wrapper").append($(".header__menu").clone()).append($(".header__menu-top").clone())
})), $(document).on("click", ".menu-mobile__close", (function() {
    return $(this).removeClass("_active"), $(".menu-mobile").removeClass("_active"), $("body").removeClass("bgActive"), !1
})), $(document).on("click", ".bgDark", (function() {
    return $(".js-btn-menu").removeClass("_active"), $(".menu-mobile").removeClass("_active"), $("body").removeClass("bgActive"), !1
})), $(document).on("click", ".js-btn-menu", (function() {
    return $(this).toggleClass("_active"), $(".js-search-btn").removeClass("_active"), $(".js-fps-btn").removeClass("_active"), $(".menu-mobile").toggleClass("_active"), $("body").toggleClass("bgActive"), !1
})), $(".header__menu-top-hidd").each((function() {
    $(this).closest(".header__menu-top-box").addClass("two-lvl")
})), $(document).on("scroll", (function() {
    var e = 167 - $(window).scrollTop();
    e < 70 && (e = 70), $(".menu-mobile").css("--topm", e)
})), $(document).on("click", "[data-modal]", (function(e) {
    let t = $(this).attr("data-modal");
    e.preventDefault();
    var a, o, n, i, s = $(this).attr("href"),
        l = ($(this), $(this));
    if ("text" == t && reachGoal__("clckpomoshspec"), $(document).on("click", ".js-modal-amount", (function(e) {
            e.stopPropagation(), $(".modal__amount-form").find(".radio__input").length ? (valChecked = $(".modal__amount-form").find(".radio__input:checked").val(), l.siblings(".amount__input").val(valChecked), l.closest(".amount").siblings(".configurator__equipment-radio").find(".configurator__equipment-radio-input").attr("data-sum", valChecked), counterCall()) : (valChecked = $(".modal__amount-input").val(), l.siblings(".amount__input").val(valChecked), l.closest(".amount").siblings(".configurator__equipment-radio").find(".configurator__equipment-radio-input").attr("data-sum", valChecked)), $.fancybox.close()
        })), $(this).hasClass("amount__mobile")) {
        a = $(this).closest(".amount").attr("data-amoutnName"), o = $(this).closest(".amount").attr("data-amountSum"), o = JSON.parse(o), $(".modal__amount-name").empty().text(a), $(".modal__amount-form").empty();
        for (var r = 0; r < o.length; r++) n = o[r], $(".modal__amount-form").append('<div class="radio"><label class="radio__label"><input type="radio" class="radio__input" name="amount" value="' + n + '"><span class="radio__text">' + n + "</span></label></div>");
        $(".modal__amount-form").find(".radio__input:eq(0)").prop("checked", !0)
    }
    return $(this).hasClass("amount__mobile-unit") && (a = $(this).closest(".amount").attr("data-amoutnName"), i = $(this).siblings(".amount__input").val(), $(".modal__amount-name").empty().text(a), $(".modal__amount-form").empty(), $(".modal__amount-form").append('<input type="text" class="modal__amount-input" value="' + i + '">')), $.fancybox.open({
        src: s,
        type: "ajax" != t ? "inline" : "ajax",
        hash: !1,
        helpers: {
            overlay: {
                locked: !1
            }
        },
        opts: {
            smallBtn: !0,
            btnTpl: {
                smallBtn: '<button data-fancybox-close class="fancybox-close-small modal__close close" title="{{CLOSE}}"><svg class="modal__close-icon"><use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/local/templates/main/img/sprite.svg#icon-close1"></use></svg></button>',
                arrowLeft: "",
                arrowRight: ""
            },
            lang: "ru",
            i18n: {
                ru: {
                    CLOSE: "Закрыть",
                    NEXT: "Вперёд",
                    PREV: "Назад",
                    ERROR: "Запрашиваемый контент не был загружен <br/> Пожалуйста, попробуйте позднее.",
                    PLAY_START: "Запустить слайдшоу",
                    PLAY_STOP: "Остановить слайдшоу",
                    FULL_SCREEN: "На весь экран",
                    THUMBS: "Миниатюры",
                    DOWNLOAD: "Скачать",
                    SHARE: "Поделиться",
                    ZOOM: "Увеличить"
                }
            },
            infobar: !1,
            arrows: !1,
            zoom: !1,
            buttons: ["zoom", "close"],
            thumbs: {
                autoStart: !0
            },
            touch: !1,
            clickContent: !1,
            youtube: {
                controls: 0,
                showinfo: 0
            },
            beforeLoad: function(e, t) {
                "#popup__search-main" == t.src && $(".fancybox-container").addClass("fancybox__dark"), "#remove-account" == t.src && $(".fancybox-container").addClass("fancybox__white-little"), "#card__question" == t.src && $(".fancybox-container").addClass("fancybox__white-little"), "#reservation" == t.src && $(".fancybox-container").addClass("fancybox__white-little"), "#popup__search-main" == t.src && $(".fancybox-slide").addClass("event-no")
            },
            afterShow: function(e, t) {
                if (console.log("afterShow"), $(".Valid").each((function() {
                        $.Valid($(this))
                    })), $(".phone-masked").each((function() {
                        $.masked()
                    })), $(".datepicker-input").length && $.datepickerOp(), $(".select").each((function() {
                        $.select($(this))
                    })), $(".multiple").each((function() {
                        $.selectMulte($(this))
                    })), "#locationModal" == t.src) {
                    let e = $(".js-location__modal_size"),
                        t = e.height() + 96;
                    e.closest(".modal").css("--height", t + "px")
                }
            },
            afterLoad: function(e, t) {
                t.$content.closest(".fancybox-inner").addClass("fancy-text")
            }
        }
    }), !1
})), $(document).on("click", ".search-page__tabs-link", (function() {
    $(this).closest("li").addClass("_active").siblings("li").removeClass("_active"), optionLink = $(this).closest(".search-page__tabs-li").index(), $(".search-page__tabs .search-page__select").val(optionLink).trigger("change")
})), $(".search-page__inner").append('<select class="select-box search-page__select"/>'), $(".search-page__tabs-text").each((function() {
    var e = $(this).text(),
        t = $(this).closest(".search-page__tabs-li").index();
    $(".search-page__select").append('<option value="' + t + '">' + e + "</option>")
})), $(".search-page__select").on("select2:select", (function(e) {
    var t = e.params.data;
    $(".search-page__tabs-li").eq(t.id).addClass("_active").siblings("li").removeClass("_active");
    var a = $(".search-page__tabs-li").eq(t.id).find(".search-page__tabs-link").attr("href");
    location.href = a
})), $.select = function(e) {
    var t = e;
    if (t.length) {
        var a = $(document.body);
        0 !== t.parents(".select-box__conteiner").length && (a = t.parents(".select-box__conteiner"));
        t.data("placeholder");
        t.select2({
            placeholder: function() {
                $(this).data("placeholder")
            },
            allowClear: !1,
            minimumResultsForSearch: -1,
            dropdownAutoWidth: !0,
            dropdownParent: a
        })
    }
}, $(".select__game").on("select2:select", (function(e) {
    var t = $(this.selectedOptions[0]).data("img");
    $("." + t).removeClass("title-page__bg--hidd").siblings(".title-page__bg").addClass("title-page__bg--hidd")
})), $.select($(".tabs-ajax__select.select-box")), $.select($(".tabs__list+.tabs-select")), $.select($(".search select")), console.log(Swiper), $((function() {
    var e = new Swiper(".main-slider__container", {
        loop: !0,
        navigation: {
            nextEl: ".main-slider__button--next",
            prevEl: ".main-slider__button--prev"
        },
        autoplay: {
            delay: 5e3
        },
        speed: 600,
        pagination: {
            el: ".main-slider__controll"
        },
        on: {
            init: function() {
                $(".main-slider__container").find(".waitlazzyload:not(.lazyloaded)").removeClass("waitlazzyload"), initLazzyload()
            }
        }
    });
    e.on("slideChange", (function(e) {
        var t = this.$el[0].parentElement;
        t.classList.contains("delay") || t.classList.add("delay")
    })), $(".main-slider").hover((function() {
        $(this).addClass("stop"), e.autoplay.stop()
    }), (function() {
        $(this).removeClass("stop"), e.autoplay.start()
    })), window.swiperDetalic = new Swiper(".detalic__slider-container", {
        loop: !0,
        centeredSlides: !0,
        speed: 600,
        pagination: {
            el: ".detalic__slider-controll"
        },
        on: {
            init: function() {
                $(".detalic__slider-container").find(".waitlazzyload:not(.lazyloaded)").removeClass("waitlazzyload"), initLazzyload()
            }
        }
    })
})), $(document).on("change", "select", (function() {
    window.reachGoal__("fps"), speedometer($(".speedometer.on"))
}));
var wow = new WOW({
    boxClass: "speedometer",
    animateClass: "on",
    offset: $(window).width() > 767 ? 10 : 100,
    mobile: !0,
    live: !0,
    callback: function(e) {
        speedometer($(".speedometer.on"))
    },
    scrollContainer: null,
    resetAnimation: !0
});
if (wow.init(), $.Valid = function(e) {
        var t = e;
        if (t.length) {
            t.validate({
                rules: {
                    name: {
                        required: !0
                    },
                    assembly: {
                        required: !0
                    },
                    secondname: {
                        required: !0
                    },
                    password: {
                        required: !0
                    },
                    password1: {
                        required: !0,
                        minlength: 6,
                        pwcheck: !0
                    },
                    password2: {
                        required: !0,
                        minlength: 6,
                        equalTo: '[name="password1"]'
                    },
                    tel: {
                        required: !0,
                        checkMask: !0
                    },
                    telMail: {
                        required: !0,
                        checkTelMail: !0
                    },
                    check: {
                        required: !0
                    },
                    size: {
                        required: !0
                    },
                    city: {
                        required: !0
                    },
                    city: {
                        required: !0
                    },
                    street: {
                        required: !0
                    },
                    house: {
                        required: !0
                    },
                    email: {
                        required: !0,
                        mailVal: !0
                    },
                    submitHandler: function(e) {}
                }
            });
            $.validator.addMethod("pwcheck", (function(e) {
                return /^[A-Za-z0-9\d=!\-@._*]*$/.test(e) && /[a-z]/.test(e) && /\d/.test(e)
            }), "Incorrect Password!"), $.validator.addMethod("checkMask", (function(e) {
                return /\+\d{1}[" "]\(\d{3}\)[" "]\d{3}-\d{2}-\d{2}/g.test(e)
            })), $.validator.addMethod("checkTelMail", (function(e) {
                return /\+[0-9]{1,4}[0-9]{1,10}|(.*)@(.*)\.[a-z]{2,5}/g.test(e)
            })), $.validator.addMethod("mailVal", (function(e) {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
            }), "Incorrect Password!")
        }
    }, $(".Valid").each((function() {
        $.Valid($(this))
    })), $((function() {
        $(document).on("click", ".load_configuration", (function() {
            var e = $(this).data("code");
            window.vm.$store.dispatch("loadConfiguration", {
                code: e
            })
        }))
    })), document.querySelectorAll(".video_").length) {
    function setupVideo(e) {
        let t = e.querySelector(".video__link"),
            a = parseMediaURL(e.querySelector(".video__media"));
        e.addEventListener("click", (function() {
            let o = createIframe(a);
            t.remove(), e.appendChild(o)
        })), t.removeAttribute("href"), e.classList.add("video--enabled")
    }

    function parseMediaURL(e) {
        return e.src.match(/https:\/\/img\.youtube\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i)[1]
    }

    function createIframe(e) {
        let t = document.createElement("iframe");
        return t.setAttribute("allowfullscreen", ""), t.setAttribute("allow", "autoplay"), t.setAttribute("frameborder", "0"), t.setAttribute("src", generateURL(e)), t.classList.add("video__media"), t
    }

    function generateURL(e) {
        return "https://www.youtube.com/embed/" + e + "?rel=0&showinfo=0&autoplay=1"
    }
    $.findVideos = function() {
        let e = document.querySelectorAll(".video_");
        for (let t = 0; t < e.length; t++) setupVideo(e[t])
    }, $.findVideos()
}
/* End */
;; /* Start:"a:4:{s:4:"full";s:54:"/local/templates/main/js/custom.min.js?164217444711045";s:6:"source";s:34:"/local/templates/main/js/custom.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function reachGoal__(e, a) {
    if ("undefined" != typeof ym) {
        var t = {};
        if ("undefined" != typeof goalParams && (t = goalParams), void 0 !== a)
            for (var o in a) a.hasOwnProperty(o) && (t[o] = a[o]);
        ym(42310539, "reachGoal", e, t)
    }
}

function setAnalyticsDataLayer(e, a) {
    var t, o, n, r = [];
    for (o in a.products) a.products.hasOwnProperty(o) && (n = a.products[o], r.push({
        id: n.id,
        name: n.name,
        price: n.price,
        quantity: n.quantity
    }));
    switch (e) {
        case "checkout":
            t = {
                event: "checkout",
                ecommerce: {
                    checkout: {
                        products: r
                    }
                }
            };
            break;
        case "purchase":
            t = {
                ecommerce: {
                    purchase: {
                        actionField: {
                            id: a.id,
                            revenue: a.revenue,
                            shipping: a.shipping
                        },
                        products: r
                    }
                }
            }
    }
    window.dataLayer = window.dataLayer || [], window.dataLayer.push(t)
}

function initLoadMore(e) {
    e.click((function(a) {
        a.preventDefault();
        var t = $(this),
            o = t.closest(".load_more_items_wrapper"),
            n = o.find(".load_more_item"),
            r = t.data("ajax"),
            i = t.data("params"),
            s = t.data("get");
        return $.ajax({
            url: r + "?" + s,
            method: "POST",
            data: {
                signedParamsString: i
            }
        }).done((function(a) {
            var t = $(a);
            o.html(t), o.find(".load_more_items_container").prepend(n), initLoadMore(o.find(".load_more")), void 0 !== e.data("masonry") && initMasonry(), initLazzyload()
        })), !1
    }))
}

function formResultCallback(e, a) {
    var t = e.find(".response");
    t.html(""), e.find(".error").removeClass("error_"), e.find(".error ").remove(), e.find("._success").removeClass("_success"), "success" == a.STATUS ? (e.hasClass("no_reset") || e[0].reset(), t.addClass("success message"), t.removeClass("error_"), t.html(a.MSG)) : (t.addClass("error_ message"), t.removeClass("success")), e.hasClass("scroll_") && $("html, body").stop().animate({
        scrollTop: t.offset().top
    }, 300), e.find(".captcha_container").html(a.CAPTCHA), e.removeClass("onsubmit")
}

function showPopup(e) {
    $.fancybox.close(), $.fancybox.open({
        src: $(e),
        type: "inline",
        hash: !1,
        helpers: {
            overlay: {
                locked: !1
            }
        },
        opts: {
            smallBtn: !0,
            btnTpl: {
                smallBtn: '<button data-fancybox-close class="fancybox-close-small modal__close close" title="{{CLOSE}}"><svg class="modal__close-icon"><use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/local/templates/main/img/sprite.svg#icon-close1"></use></svg></button>',
                arrowLeft: "",
                arrowRight: ""
            },
            lang: "ru",
            i18n: {
                ru: {
                    CLOSE: "Закрыть",
                    NEXT: "Вперёд",
                    PREV: "Назад",
                    ERROR: "Запрашиваемый контент не был загружен <br/> Пожалуйста, попробуйте позднее.",
                    PLAY_START: "Запустить слайдшоу",
                    PLAY_STOP: "Остановить слайдшоу",
                    FULL_SCREEN: "На весь экран",
                    THUMBS: "Миниатюры",
                    DOWNLOAD: "Скачать",
                    SHARE: "Поделиться",
                    ZOOM: "Увеличить"
                }
            },
            infobar: !1,
            arrows: !1,
            zoom: !1,
            buttons: ["zoom", "close"],
            thumbs: {
                autoStart: !0
            },
            touch: !1,
            clickContent: !1,
            youtube: {
                controls: 0,
                showinfo: 0
            },
            afterLoad: function(e, a) {
                console.log("afterLoad"), a.$content.closest(".fancybox-inner").addClass("fancy-text")
            }
        }
    })
}

function sponsorHeight(e, a) {
    let t = e.innerHeight();
    a.css("--height", `${t}px`)
}
if (window.validations = function(e) {
        function a() {
            var e = $(this).parent();
            e.find(".error").remove(), e.removeClass("error_")
        }

        function t() {
            var e = $(this),
                a = e.parent();
            "radio" == e.attr("type") && (a = e.closest(".modal_item_box ")), a.find(".error").remove(), a.removeClass("error_")
        }
        if (void 0 !== e) {
            e.find("[required]").on("input", t), e.find("[required]").on("change", t), e.find("input:not([required])").on("change", a);
            var o = e.find(".form__button-send")
        } else {
            $("[required]").on("input", t), $("[required]").on("change", t), $("[required]").on("change", t), $("input:not([required])").on("change", a);
            o = $(".form").find(".form__button-send")
        }
        console.log(o), o.on("click", (function(e) {
            e.preventDefault();
            var a = !0,
                t = $(this).parents(".form"),
                o = t.find(".response");
            if (t.hasClass("onsubmit")) return !1;
            if (o.html(""), $(".ok_msg").hide(), t.find("[required]").map((function() {
                    var e = $(this),
                        o = e.parent(),
                        n = [];
                    e.attr("placeholder");
                    if ("radio" == e.attr("type") && (o = e.closest(".modal_item_box ")), o.hasClass("error_"), console.log(e), "" == e.val() ? (n.push(e.data("msg-required")), a = !1) : (o.removeClass("error_"), o.find(".error").remove()), "email" == e.attr("type")) {
                        var r = t.find('[type="email"]');
                        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/.test(r.val()) ? (o.removeClass("error_"), o.find(".error").remove()) : (n = ["Введите валидный E-mail"], a = !1)
                    }
                    "radio" == e.attr("type") ? (console.log(o), $('input:radio[name="' + e.attr("name") + '"]').is(":checked") ? (o.removeClass("error_"), o.find(".error").remove()) : (o.addClass("error_"), o.append('<label class="error">Отметьте флажок</div>'), a = !1), console.log(a)) : "checkbox" == e.attr("type") ? (console.log(e), e.is(":checked") ? (o.removeClass("error_"), o.find(".error").remove()) : (o.addClass("error_"), o.append('<label class="error">Отметьте флажок</div>'), a = !1)) : !a && n.length ? (o.addClass("error_"), o.find(".error").remove(), n.forEach((function(e) {
                        o.append('<label class="error">' + e + "</label>")
                    }))) : o.removeClass("error_")
                })), !a) return !1;
            if (t.addClass("onsubmit"), t.hasClass("js-ajax_form")) {
                var n = new FormData(t[0]),
                    r = t.data("back"),
                    i = parseInt(t.data("captcha")),
                    s = t.attr("action");
                i ? grecaptcha.ready((function() {
                    grecaptcha.execute(BX.message("RECAPTCHA_SITE_KEY"), {
                        action: "form"
                    }).then((function(e) {
                        n.append("g-recaptcha-response", e), $.ajax({
                            url: s,
                            data: n,
                            method: "POST",
                            dataType: "json",
                            cache: !1,
                            contentType: !1,
                            processData: !1
                        }).done((function(e) {
                            window[r](t, e)
                        }))
                    }), (function() {
                        t.removeClass("onsubmit")
                    }))
                })) : $.ajax({
                    url: s,
                    data: n,
                    method: "POST",
                    dataType: "json",
                    cache: !1,
                    contentType: !1,
                    processData: !1
                }).done((function(e) {
                    window[r](t, e)
                }))
            } else t.submit(), t.removeClass("onsubmit")
        }))
    }, window.twenty = function() {
        $.loadCss("/local/templates/main/css/twenty.css?v=5", (function() {
            $.loadScript("/local/templates/main/js/gsap.js?v=8", (function() {}))
        }))
    }, $((function() {
        $(document).on("click", ".yes_my_region", (function(e) {
            e.preventDefault(), console.log("click");
            var a = $(this),
                t = a.data("code"),
                o = a.data("name");
            return $.ajax({
                url: "/rest/?c=rest&action=selectregionfromquestion",
                dataType: "json",
                data: {
                    code: t,
                    name: o
                }
            }).done((function(e) {
                location.reload()
            })).fail((function(e) {
                location.reload()
            })), !1
        })), $(document).on("click", ".location__modal_search_option,.location__modal_list_link", (function(e) {
            e.preventDefault(), console.log("click");
            var a = $(this).data("code");
            return $.ajax({
                url: "/rest/?c=rest&action=selectregion",
                dataType: "json",
                data: {
                    code: a
                }
            }).done((function(e) {
                location.reload()
            })).fail((function(e) {
                location.reload()
            })), !1
        })), window.searchTimeout = !1, document.querySelectorAll(".js-location__modal_search").forEach((el, indexEl) => {
            function textEnter() {
                var searchField = el.value;
                document.querySelector(".location__modal_search_list").innerHTML = "", console.log(searchField), clearTimeout(window.searchTimeout), window.searchTimeout = setTimeout((function() {
                    $.ajax({
                        url: "/bitrix/components/bitrix/sale.location.selector.search/get.php",
                        method: "POST",
                        dataType: "html",
                        data: {
                            select: {
                                1: "CODE",
                                2: "TYPE_ID",
                                VALUE: "ID",
                                DISPLAY: "NAME.NAME"
                            },
                            additionals: {
                                1: "PATH"
                            },
                            filter: {
                                "=PHRASE": searchField,
                                "=NAME.LANGUAGE_ID": "ru"
                            },
                            version: 2,
                            PAGE_SIZE: 10,
                            PAGE: 0
                        }
                    }).done((function(data) {
                        var a = "a = " + data;
                        a = eval(a);
                        var list = [];
                        if (console.log(a), a.result) {
                            var responce = a.data;
                            responce.ITEMS.forEach((function(e) {
                                var a = [e.DISPLAY];
                                e.PATH.forEach((function(e) {
                                    a.push(responce.ETC.PATH_ITEMS[e].DISPLAY)
                                })), list.push('<div class="location__modal_search_container"><a href="javascript:void(0)" data-code="' + e.CODE + '" class="location__modal_search_option">' + a.join(", ") + "</a><div></div></div>")
                            }))
                        }
                        list.length ? $(".location__modal_search_list").html(list.join("")) : $(".location__modal_search_list").html(""), console.log(list)
                    }))
                }), 500), /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && searchEl.classList.add("_focus")
            }
            el.addEventListener("input", textEnter), el.addEventListener("paste", textEnter)
        }), $.loadCss = function(e, a) {
            var t = document.createElement("link");
            t.type = "text/css", t.rel = "stylesheet", t.async = 1, t.defer = 1, t.readyState ? t.onreadystatechange = function() {
                "loaded" !== t.readyState && "complete" !== t.readyState || (t.onreadystatechange = null, a())
            } : t.onload = function() {
                a()
            }, t.href = e, document.getElementsByTagName("head")[0].appendChild(t)
        }, $.loadScript = function(e, a) {
            var t = document.createElement("script");
            t.type = "text/javascript", t.async = 1, t.defer = 1, t.readyState ? t.onreadystatechange = function() {
                "loaded" !== t.readyState && "complete" !== t.readyState || (t.onreadystatechange = null, a())
            } : t.onload = function() {
                a()
            }, t.src = e, document.getElementsByTagName("head")[0].appendChild(t)
        }, initLoadMore($(".load_more")), validations(), $(".change_game_product").click((function() {
            var e = $(this).data("json"),
                a = $(".detalic__inner.product__");
            a.data("id", e.ID), console.log(a), console.log(a.find('[data-entity="pc_name"]')), a.find('[data-entity="pc_name"]').each((function(a, t) {
                $(t).text(e.NAME)
            })), a.find('[data-entity="pc_price"]').each((function(a, t) {
                $(t).text(e.PRICE)
            })), a.find('[data-entity="pc_credit_price"]').each((function(a, t) {
                $(t).text(e.CREDIT_PRICE)
            })), a.find('[data-entity="pc_detail_page_url"]').each((function(a, t) {
                $(t).attr("href", e.DETAIL_PAGE_URL)
            })), a.find('[data-entity="pc_detalic__text"]').each((function(a, t) {
                $(t).html(e.TEXT)
            })), a.find('[data-entity="pc_to_cofigurator"]').each((function(a, t) {
                $(t).attr("href", "/constructor/#" + e.CODE)
            })), a.find('[data-entity="pc_gallery"]').each((function() {
                var a = [];
                e.PHOTOS.forEach((function(e) {
                    var t = "";
                    t += '<div class="swiper-slide detalic__slider-slide"><picture>', t += '<img src="' + e + '" alt="" class="detalic__slider-img">', t += "</picture></div>", a.push(t)
                })), $(this).html(a.join("")), window.swiperDetalic.update()
            }))
        })), $(".add2basket").click((function() {
            var e = $(this).closest(".product__").data("id");
            reachGoal__("clckkupit"), $.ajax({
                url: "/rest/?c=basket&action=add&id=" + e
            }).done((function(e) {
                "success" == e.status && (showPopup("#successaddc"), BX.onCustomEvent("OnBasketChange"))
            }))
        })), $(".helpclick").click((function() {
            var e = $(this).closest(".product__").data("id");
            $("#sborka_").val(e)
        }))
    })), sponsorHeight($(".sponsor__graph_start"), $(".sponsor__graph")), $(window).resize((function() {
        sponsorHeight($(".sponsor__graph_start"), $(".sponsor__graph"))
    })), $(".sponsor__specification_table").length) {
    $(".sponsor__specification_table th").each((function(e) {
        let a = $(this).text();
        $(".sponsor__specification_table tr").each((function() {
            $(this).find("td").eq(e).attr("data-name", a)
        }))
    }));
    var arrPrice = [];
    $(".sponsor__specification_table tbody").each((function() {
        if ($(this).find("tr").length > 1) {
            $(this).find("tr").length;
            var e = $(this).find("tr");
            $(this).find("tr").addClass("sponsor__specification_table_tabs"), $(this).find("tr").each((function(a) {
                a && $(this).find("td").each((function(a) {
                    e.eq(0).find("td").eq(a).append($(this).find("p").clone().addClass("_hide"))
                })), 0 == a && $(this).find(".sponsor__specification_table_price").addClass("_current")
            }))
        }
    })), $(".sponsor__specification_table_tabs").on("click", ".sponsor__specification_table_price", (function() {
        $(this).addClass("_current").siblings(".sponsor__specification_table_price").removeClass("_current");
        var e = $(this).index();
        $(this).closest(".sponsor__specification_table_tabs").find("td").each((function() {
            $(this).find("p").eq(e).removeClass("_hide").siblings("p").addClass("_hide")
        }))
    }))
}
/* End */
;; /* Start:"a:4:{s:4:"full";s:101:"/local/templates/.default/components/bitrix/sale.basket.basket.line/cart/script.min.js?16421744473737";s:6:"source";s:82:"/local/templates/.default/components/bitrix/sale.basket.basket.line/cart/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
"use strict";

function BitrixSmallCart() {}
BitrixSmallCart.prototype = {
    activate: function() {
        if (this.cartElement = BX(this.cartId), this.fixedPosition = "Y" == this.arParams.POSITION_FIXED, this.fixedPosition) {
            this.cartClosed = !0, this.maxHeight = !1, this.itemRemoved = !1, this.verticalPosition = this.arParams.POSITION_VERTICAL, this.horizontalPosition = this.arParams.POSITION_HORIZONTAL, this.topPanelElement = BX("bx-panel"), this.fixAfterRender(), this.fixAfterRenderClosure = this.closure("fixAfterRender");
            var t = this.closure("fixCart");
            this.fixCartClosure = t, this.topPanelElement && "top" == this.verticalPosition && BX.addCustomEvent(window, "onTopPanelCollapse", t);
            var e = null;
            BX.bind(window, "resize", function() {
                clearTimeout(e), e = setTimeout(t, 200)
            })
        }
        this.setCartBodyClosure = this.closure("setCartBody"), BX.addCustomEvent(window, "OnBasketChange", this.closure("refreshCart", {}))
    },
    fixAfterRender: function() {
        this.statusElement = BX(this.cartId + "status"), this.statusElement && (this.cartClosed ? this.statusElement.innerHTML = this.openMessage : this.statusElement.innerHTML = this.closeMessage), this.productsElement = BX(this.cartId + "products"), this.fixCart()
    },
    closure: function(t, e) {
        var s = this;
        return e ? function() {
            s[t](e)
        } : function(e) {
            s[t](e)
        }
    },
    toggleOpenCloseCart: function() {
        if (this.cartClosed) BX.removeClass(this.cartElement, "bx-closed"), BX.addClass(this.cartElement, "bx-opener"), this.statusElement.innerHTML = this.closeMessage, this.cartClosed = !1, this.fixCart();
        else {
            BX.addClass(this.cartElement, "bx-closed"), BX.removeClass(this.cartElement, "bx-opener"), BX.removeClass(this.cartElement, "bx-max-height"), this.statusElement.innerHTML = this.openMessage, this.cartClosed = !0;
            var t = this.cartElement.querySelector("[data-role='basket-item-list']");
            t && (t.style.top = "auto")
        }
        setTimeout(this.fixCartClosure, 100)
    },
    setVerticalCenter: function(t) {
        var e = t / 2 - this.cartElement.offsetHeight / 2;
        e < 5 && (e = 5), this.cartElement.style.top = e + "px"
    },
    fixCart: function() {
        if ("hcenter" == this.horizontalPosition) {
            var t = ("innerWidth" in window ? window.innerWidth : document.documentElement.offsetWidth) / 2 - this.cartElement.offsetWidth / 2;
            t < 5 && (t = 5), this.cartElement.style.left = t + "px"
        }
        var e = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        switch (this.verticalPosition) {
            case "top":
                this.topPanelElement && (this.cartElement.style.top = this.topPanelElement.offsetHeight + 5 + "px");
                break;
            case "vcenter":
                this.setVerticalCenter(e)
        }
        if (this.productsElement) {
            var s = this.cartElement.querySelector("[data-role='basket-item-list']");
            this.cartClosed ? this.maxHeight && (BX.removeClass(this.cartElement, "bx-max-height"), s && (s.style.top = "auto"), this.maxHeight = !1) : this.maxHeight ? this.productsElement.scrollHeight == this.productsElement.clientHeight && (BX.removeClass(this.cartElement, "bx-max-height"), s && (s.style.top = "auto"), this.maxHeight = !1) : "top" == this.verticalPosition || "vcenter" == this.verticalPosition ? this.cartElement.offsetTop + this.cartElement.offsetHeight >= e && (BX.addClass(this.cartElement, "bx-max-height"), s && (s.style.top = "82px"), this.maxHeight = !0) : this.cartElement.offsetHeight >= e && (BX.addClass(this.cartElement, "bx-max-height"), s && (s.style.top = "82px"), this.maxHeight = !0), "vcenter" == this.verticalPosition && this.setVerticalCenter(e)
        }
    },
    refreshCart: function(t) {
        this.itemRemoved ? this.itemRemoved = !1 : (t.sessid = BX.bitrix_sessid(), t.siteId = this.siteId, t.templateName = this.templateName, t.arParams = this.arParams, BX.ajax({
            url: this.ajaxPath,
            method: "POST",
            dataType: "html",
            data: t,
            onsuccess: this.setCartBodyClosure
        }))
    },
    setCartBody: function(t) {
        this.cartElement && (this.cartElement.innerHTML = t.replace(/#CURRENT_URL#/g, this.currentUrl)), this.fixedPosition && setTimeout(this.fixAfterRenderClosure, 100)
    },
    removeItemFromCart: function(t) {
        this.refreshCart({
            sbblRemoveItemFromCart: t
        }), this.itemRemoved = !0, BX.onCustomEvent("OnBasketChange")
    }
};
/* End */
;; /* /local/templates/main/js/jquery-3.3.1.min.js?164217444786927*/ ; /* /local/templates/main/js/vendors.min.js?1642174447350603*/ ; /* /local/templates/main/js/scripts.min.js?164217444727815*/ ; /* /local/templates/main/js/custom.min.js?164217444711045*/ ; /* /local/templates/.default/components/bitrix/sale.basket.basket.line/cart/script.min.js?16421744473737*/