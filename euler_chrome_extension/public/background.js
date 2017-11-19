
! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}(function(e) {
    for (var t in e)
        if (Object.prototype.hasOwnProperty.call(e, t)) switch (typeof e[t]) {
            case "function":
                break;
            case "object":
                e[t] = function(t) {
                    var n = t.slice(1),
                        r = e[t[0]];
                    return function(e, t, o) {
                        r.apply(this, [e, t, o].concat(n))
                    }
                }(e[t]);
                break;
            default:
                e[t] = e[e[t]]
        }
    return e
}([function(e, t, n) {
        "use strict";
        var r = n(34),
            o = new r([n(30), n(65), n(35), n(62)]);
        o.start()
    }, , function(e, t) {
        "use strict";
        var n = {},
            r = ["Alert", "UserSelection", "UserMouseDown", "UserMouseMove", "UserMouseUp", "UserSelecting", "TooltipClick", "WindowResize", "SaveNote", "DeleteNote", "FetchNoteList", "ReceiveNoteList", "PageChanged", "ContextMenuClick", "CommentOnHighlight", "DisablePage", "EnablePage", "CheckBlackList", "AddBlackList", "RemoveBlackList", "GetRecentNotes", "ReceiveRecentNotes", "LOG_INFO", "LOG_WARNING", "LOG_ERROR"];
        r.forEach(function(e) {
            return n[e] = e
        }), e.exports = n
    }, function(e, t, n) {
        console.log("Chirag");
        "use strict";
        n(2), e.exports = {
            debug: !1,
            logEvents: [],
            constant: {
                XPathCondition: {
                    TAG_NAME_ONLY: 0
                },
                PointInRange: {
                    Tooltip: 1,
                    Note: 0,
                    Outside: -1
                }
            },
            googleQueryURL: "https://www.google.com/#q=",
            noteEvent: ["remove", "hover"],
            global: {
                get BeenoteEventHub() {
                    return window.BeenoteEventHub
                },
                get IsSelecting() {
                    return window.IsSelecting
                }
            },
            highlightColor: {
                default: "yellow",
                palette: {
                    red: "#FDC3D3",
                    green: "#CEF5C5",
                    yellow: "#F9DB95",
                    blue: "#6CB1EF"
                },
                strong: {
                    red: "#84334a",
                    green: "#469106",
                    yellow: "#9d8d49",
                    blue: "#4682b4"
                }
            }
        }
    }, , function(e, t) {


        "use strict";

        function n(e, t) {
            t = t || function() {}, chrome.runtime.sendMessage(e, function(e) {
                return t(e ? e : e), !0
            })
        }

        function r(e, t, n) {
            chrome.tabs.sendMessage(e, t, n)
        }

        function o(e) {
            chrome.runtime.onMessage.addListener(function(t, n, r) {
                return e(t, n, r)
            })
        }

        function i(e, t) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? function() {} : arguments[2];
            r(e.id, t, n)
        }

        function a(e) {
            return o(e)
        }

        function s(e, t) {
            return n(e, t)
        }

        function u(e, t) {
            return {
                type: e,
                content: t
            }
        }
        e.exports = {
            sendMessage: s,
            sendMessageToTab: i,
            onMessage: a,
            createMessage: u
        }
    }, , function(e, t) {
        "use strict";
        e.exports = function(e, t) {
            var n = {};
            for (var r in e) n[r] = e[r];
            for (var r in t) n[r] = t[r];
            return n
        }
    }, , function(e, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function r() {
            throw new Error("clearTimeout has not been defined")
        }

        function o(e) {
            if (f === setTimeout) return setTimeout(e, 0);
            if ((f === n || !f) && setTimeout) return f = setTimeout, setTimeout(e, 0);
            try {
                return f(e, 0)
            } catch (t) {
                try {
                    return f.call(null, e, 0)
                } catch (t) {
                    return f.call(this, e, 0)
                }
            }
        }

        function i(e) {
            if (l === clearTimeout) return clearTimeout(e);
            if ((l === r || !l) && clearTimeout) return l = clearTimeout, clearTimeout(e);
            try {
                return l(e)
            } catch (t) {
                try {
                    return l.call(null, e)
                } catch (t) {
                    return l.call(this, e)
                }
            }
        }

        function a() {
            v && h && (v = !1, h.length ? p = h.concat(p) : y = -1, p.length && s())
        }

        function s() {
            if (!v) {
                var e = o(a);
                v = !0;
                for (var t = p.length; t;) {
                    for (h = p, p = []; ++y < t;) h && h[y].run();
                    y = -1, t = p.length
                }
                h = null, v = !1, i(e)
            }
        }

        function u(e, t) {
            this.fun = e, this.array = t
        }

        function c() {}
        var f, l, d = e.exports = {};
        ! function() {
            try {
                f = "function" == typeof setTimeout ? setTimeout : n
            } catch (e) {
                f = n
            }
            try {
                l = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (e) {
                l = r
            }
        }();
        var h, p = [],
            v = !1,
            y = -1;
        d.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            p.push(new u(e, t)), 1 !== p.length || v || o(s)
        }, u.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = c, d.addListener = c, d.once = c, d.off = c, d.removeListener = c, d.removeAllListeners = c, d.emit = c, d.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, d.cwd = function() {
            return "/"
        }, d.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, d.umask = function() {
            return 0
        }
    }, , , , function(e, t, n) {
        (function(e) {
            "use strict";
            var r = n(51);
            t.once = function(e) {
                var n = !1;
                return t.getArguments(function(t) {
                    if (n) throw console.trace(), new Error("once called  more than once");
                    n = !0, e.apply(this, t)
                })
            }, t.getArguments = function(e) {
                return function() {
                    for (var t = arguments.length, n = new Array(t), r = -1; ++r < t;) n[r] = arguments[r];
                    return e.call(this, n)
                }
            }, t.toPromise = function(n) {
                return t.getArguments(function(o) {
                    var i, a = this,
                        s = "function" == typeof o[o.length - 1] && o.pop();
                    s && (i = function(t, n) {
                        e.nextTick(function() {
                            s(t, n)
                        })
                    });
                    var u = new r(function(e, r) {
                        try {
                            var i = t.once(function(t, n) {
                                t ? r(t) : e(n)
                            });
                            o.push(i), n.apply(a, o)
                        } catch (e) {
                            r(e)
                        }
                    });
                    return i && u.then(function(e) {
                        i(null, e)
                    }, i), u.cancel = function() {
                        return this
                    }, u
                })
            }, t.inherits = n(45), t.Promise = r, t.clone = function(e) {
                return t.extend(!0, {}, e)
            }, t.extend = n(46), t.callbackify = function(e) {
                return t.getArguments(function(n) {
                    var r = n.pop(),
                        o = e.apply(this, n);
                    return t.promisedCallback(o, r), o
                })
            }, t.promisedCallback = function(t, n) {
                return t.then(function(t) {
                    e.nextTick(function() {
                        n(null, t)
                    })
                }, function(t) {
                    e.nextTick(function() {
                        n(t)
                    })
                }), t
            };
            var o = n(101),
                i = n(50);
            t.MD5 = function(t) {
                return e.browser ? i.hash(t) : o.createHash("md5").update(t).digest("hex")
            }, t.flatten = t.getArguments(function(e) {
                for (var n = [], r = 0, o = e.length; r < o; r++) {
                    var i = e[r];
                    Array.isArray(i) ? n = n.concat(t.flatten.apply(null, i)) : n.push(i)
                }
                return n
            }), t.mergeObjects = function(e) {
                for (var n = {}, r = 0, o = e.length; r < o; r++) n = t.extend(!0, n, e[r]);
                return n
            }, t.getFieldFromDoc = function(e, t) {
                for (var n = e, r = 0, o = t.length; r < o; r++) {
                    var i = t[r];
                    if (n = n[i], !n) break
                }
                return n
            }, t.setFieldInDoc = function(e, t, n) {
                for (var r = 0, o = t.length; r < o - 1; r++) {
                    var i = t[r];
                    e = e[i] = {}
                }
                e[t[o - 1]] = n
            }, t.parseField = function(e) {
                for (var t = [], n = "", r = 0, o = e.length; r < o; r++) {
                    var i = e[r];
                    "." === i ? r > 0 && "\\" === e[r - 1] ? n = n.substring(0, n.length - 1) + "." : (t.push(n), n = "") : n += i
                }
                return t.push(n), t
            }, t.pick = function(e, n) {
                for (var r = {}, o = 0, i = n.length; o < i; o++) {
                    var a = t.parseField(n[o]),
                        s = t.getFieldFromDoc(e, a);
                    "undefined" != typeof s && t.setFieldInDoc(r, a, s)
                }
                return r
            }, t.oneArrayIsSubArrayOfOther = function(e, t) {
                for (var n = 0, r = Math.min(e.length, t.length); n < r; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }, t.oneArrayIsStrictSubArrayOfOther = function(e, n) {
                return !(e.length > n.length) && t.oneArrayIsSubArrayOfOther(e, n)
            }, t.oneSetIsSubArrayOfOther = function(e, t) {
                e = e.slice();
                for (var n = 0, r = t.length; n < r; n++) {
                    var o = t[n];
                    if (!e.length) break;
                    var i = e.indexOf(o);
                    if (i === -1) return !1;
                    e.splice(i, 1)
                }
                return !0
            }, t.compare = function(e, t) {
                return e < t ? -1 : e > t ? 1 : 0
            }, t.arrayToObject = function(e) {
                for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n]] = !0;
                return t
            }, t.max = function(e, t) {
                for (var n = null, r = -1, o = 0, i = e.length; o < i; o++) {
                    var a = e[o],
                        s = t(a);
                    s > r && (r = s, n = a)
                }
                return n
            }, t.arrayEquals = function(e, t) {
                if (e.length !== t.length) return !1;
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }, t.uniq = function(e) {
                for (var t = {}, n = 0; n < e.length; n++) t["$" + e[n]] = !0;
                return Object.keys(t).map(function(e) {
                    return e.substring(1)
                })
            }, t.log = n(71)("pouchdb:find")
        }).call(t, n(9))
    }, function(e, t) {
        "use strict";
        var n = {},
            r = ["SaveNote", "RemoveNote", "FetchNoteList", "SearchWebPage", "CheckBlackList", "AddBlackList", "RemoveBlackList", "EnablePage", "GetRecentNotes"];
        r.forEach(function(e) {
            return n[e] = e
        }), e.exports = n
    }, , function(e, t, n) {
        "use strict";

        function r(e) {
            return Object.keys(e)[0]
        }

        function o(e) {
            return e[r(e)]
        }

        function i(e) {
            if (!Array.isArray(e)) throw new Error("invalid sort json - should be an array");
            return e.map(function(e) {
                if ("string" == typeof e) {
                    var t = {};
                    return t[e] = "asc", t
                }
                return e
            })
        }

        function a(e) {
            return E.indexOf(e) > -1
        }

        function s(e, t, n) {
            "undefined" == typeof n.$eq && ("undefined" != typeof n.$gte ? "$gte" === e ? t > n.$gte && (n.$gte = t) : t >= n.$gte && (delete n.$gte, n.$gt = t) : "undefined" != typeof n.$gt ? "$gte" === e ? t > n.$gt && (delete n.$gt, n.$gte = t) : t > n.$gt && (n.$gt = t) : n[e] = t)
        }

        function u(e, t, n) {
            "undefined" == typeof n.$eq && ("undefined" != typeof n.$lte ? "$lte" === e ? t < n.$lte && (n.$lte = t) : t <= n.$lte && (delete n.$lte, n.$lt = t) : "undefined" != typeof n.$lt ? "$lte" === e ? t < n.$lt && (delete n.$lt, n.$lte = t) : t < n.$lt && (n.$lt = t) : n[e] = t)
        }

        function c(e, t) {
            "$ne" in t ? t.$ne.push(e) : t.$ne = [e]
        }

        function f(e, t) {
            delete t.$gt, delete t.$gte, delete t.$lt, delete t.$lte, delete t.$ne, t.$eq = e
        }

        function l(e) {
            var t = {};
            return e.forEach(function(e) {
                Object.keys(e).forEach(function(n) {
                    var r = e[n];
                    if ("object" != typeof r && (r = {
                            $eq: r
                        }), a(n)) r instanceof Array ? t[n] = r.map(function(e) {
                        return l([e])
                    }) : t[n] = l([r]);
                    else {
                        var o = t[n] = t[n] || {};
                        Object.keys(r).forEach(function(e) {
                            var t = r[e];
                            return "$gt" === e || "$gte" === e ? s(e, t, o) : "$lt" === e || "$lte" === e ? u(e, t, o) : "$ne" === e ? c(t, o) : "$eq" === e ? f(t, o) : void(o[e] = t)
                        })
                    }
                })
            }), t
        }

        function d(e) {
            var t = w.clone(e),
                n = !1;
            "$and" in t && (t = l(t.$and), n = !0), "$not" in t && (t.$not = l([t.$not]));
            for (var r = Object.keys(t), o = 0; o < r.length; o++) {
                var i = r[o],
                    a = t[i];
                "object" != typeof a || null === a ? a = {
                    $eq: a
                } : "$ne" in a && !n && (a.$ne = [a.$ne]), t[i] = a
            }
            return t
        }

        function h(e) {
            return e.fields = e.fields.map(function(e) {
                if ("string" == typeof e) {
                    var t = {};
                    return t[e] = "asc", t
                }
                return e
            }), e
        }

        function p(e, t) {
            for (var n = [], o = 0; o < t.def.fields.length; o++) {
                var i = r(t.def.fields[o]);
                n.push(e[i])
            }
            return n
        }

        function v(e, t, n) {
            for (var r = n.def.fields, o = 0, i = e.length; o < i; o++) {
                var a = e[o],
                    s = p(a.doc, n);
                if (1 === r.length) s = s[0];
                else
                    for (; s.length > t.length;) s.pop();
                if (Math.abs(k.collate(s, t)) > 0) break
            }
            return o > 0 ? e.slice(o) : e
        }

        function y(e) {
            var t = w.clone(e);
            return delete t.startkey, delete t.endkey, delete t.inclusive_start, delete t.inclusive_end, "endkey" in e && (t.startkey = e.endkey), "startkey" in e && (t.endkey = e.startkey), "inclusive_start" in e && (t.inclusive_end = e.inclusive_start), "inclusive_end" in e && (t.inclusive_start = e.inclusive_end), t
        }

        function g(e) {
            var t = e.fields.filter(function(e) {
                return "asc" === o(e)
            });
            if (0 !== t.length && t.length !== e.fields.length) throw new Error("unsupported mixed sorting")
        }

        function m(e, t) {
            if (t.defaultUsed && e.sort) {
                var n = e.sort.filter(function(e) {
                    return "_id" !== Object.keys(e)[0]
                }).map(function(e) {
                    return Object.keys(e)[0]
                });
                if (n.length > 0) throw new Error('Cannot sort on field(s) "' + n.join(",") + '" when using the default index')
            }
            t.defaultUsed
        }

        function _(e) {
            if ("object" != typeof e.selector) throw new Error("you must provide a selector when you find()")
        }

        function b(e, t) {
            var n, o = Object.keys(e),
                i = t ? t.map(r) : [];
            return n = o.length >= i.length ? o : i, 0 === i.length ? {
                fields: n
            } : (n = n.sort(function(e, t) {
                var n = i.indexOf(e);
                n === -1 && (n = Number.MAX_VALUE);
                var r = i.indexOf(t);
                return r === -1 && (r = Number.MAX_VALUE), n < r ? -1 : n > r ? 1 : 0
            }), {
                fields: n,
                sortOrder: t.map(r)
            })
        }
        var w = n(13),
            k = n(26),
            E = ["$or", "$nor", "$not"];
        e.exports = {
            getKey: r,
            getValue: o,
            massageSort: i,
            massageSelector: d,
            validateIndex: g,
            validateFindRequest: _,
            validateSort: m,
            reverseOptions: y,
            filterInclusiveStart: v,
            massageIndexDef: h,
            parseField: w.parseField,
            getUserFields: b,
            isCombinationalField: a
        }
    }, , function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            o = function() {
                function e() {
                    n(this, e), this.events = {}
                }
                return r(e, [{
                    key: "on",
                    value: function(e, t) {
                        var n, r = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2];
                        return n = r ? [] : this.events[e] || [], n.push(t), this.events[e] = n, this
                    }
                }, {
                    key: "emit",
                    value: function(e, t) {
                        var n = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2],
                            r = this.events[e] || [];
                        return n ? (t instanceof Array || (t = [t]), r.forEach(function(e) {
                            return e.apply(null, t)
                        })) : r.forEach(function(e) {
                            return e(t)
                        }), this
                    }
                }]), e
            }();
        e.exports = o
    }, function(e, t, n) {
        (function(e) {
            "use strict";
            var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };
            ! function(n) {
                function r() {}

                function o(e, t) {
                    return function() {
                        e.apply(t, arguments)
                    }
                }

                function i(e) {
                    if ("object" !== t(this)) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e) throw new TypeError("not a function");
                    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], l(e, this)
                }

                function a(e, t) {
                    for (; 3 === e._state;) e = e._value;
                    return 0 === e._state ? void e._deferreds.push(t) : (e._handled = !0, void i._immediateFn(function() {
                        var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                        if (null === n) return void(1 === e._state ? s : u)(t.promise, e._value);
                        var r;
                        try {
                            r = n(e._value)
                        } catch (e) {
                            return void u(t.promise, e)
                        }
                        s(t.promise, r)
                    }))
                }

                function s(e, n) {
                    try {
                        if (n === e) throw new TypeError("A promise cannot be resolved with itself.");
                        if (n && ("object" === ("undefined" == typeof n ? "undefined" : t(n)) || "function" == typeof n)) {
                            var r = n.then;
                            if (n instanceof i) return e._state = 3, e._value = n, void c(e);
                            if ("function" == typeof r) return void l(o(r, n), e)
                        }
                        e._state = 1, e._value = n, c(e)
                    } catch (t) {
                        u(e, t)
                    }
                }

                function u(e, t) {
                    e._state = 2, e._value = t, c(e)
                }

                function c(e) {
                    2 === e._state && 0 === e._deferreds.length && i._immediateFn(function() {
                        e._handled || i._unhandledRejectionFn(e._value)
                    });
                    for (var t = 0, n = e._deferreds.length; t < n; t++) a(e, e._deferreds[t]);
                    e._deferreds = null
                }

                function f(e, t, n) {
                    this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
                }

                function l(e, t) {
                    var n = !1;
                    try {
                        e(function(e) {
                            n || (n = !0, s(t, e))
                        }, function(e) {
                            n || (n = !0, u(t, e))
                        })
                    } catch (e) {
                        if (n) return;
                        n = !0, u(t, e)
                    }
                }
                var d = setTimeout;
                i.prototype.catch = function(e) {
                    return this.then(null, e)
                }, i.prototype.then = function(e, t) {
                    var n = new this.constructor(r);
                    return a(this, new f(e, t, n)), n
                }, i.all = function(e) {
                    var n = Array.prototype.slice.call(e);
                    return new i(function(e, r) {
                        function o(a, s) {
                            try {
                                if (s && ("object" === ("undefined" == typeof s ? "undefined" : t(s)) || "function" == typeof s)) {
                                    var u = s.then;
                                    if ("function" == typeof u) return void u.call(s, function(e) {
                                        o(a, e)
                                    }, r)
                                }
                                n[a] = s, 0 === --i && e(n)
                            } catch (e) {
                                r(e)
                            }
                        }
                        if (0 === n.length) return e([]);
                        for (var i = n.length, a = 0; a < n.length; a++) o(a, n[a])
                    })
                }, i.resolve = function(e) {
                    return e && "object" === ("undefined" == typeof e ? "undefined" : t(e)) && e.constructor === i ? e : new i(function(t) {
                        t(e)
                    })
                }, i.reject = function(e) {
                    return new i(function(t, n) {
                        n(e)
                    })
                }, i.race = function(e) {
                    return new i(function(t, n) {
                        for (var r = 0, o = e.length; r < o; r++) e[r].then(t, n)
                    })
                }, i._immediateFn = "function" == typeof e && function(t) {
                    e(t)
                } || function(e) {
                    d(e, 0)
                }, i._unhandledRejectionFn = function(e) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                }, i._setImmediateFn = function(e) {
                    i._immediateFn = e
                }, i._setUnhandledRejectionFn = function(e) {
                    i._unhandledRejectionFn = e
                }, window.Promise || (window.Promise = i)
            }(void 0)
        }).call(t, n(23).setImmediate)
    }, function(e, t) {
        /**
         * es6-weakmap.js
         * WeakMap (ECMA-262 6th Edition / ECMAScript 2015)
         *
         *
         * @version 0.9.2
         * @author think49
         * @url https://gist.github.com/think49/283b7374e352e09fc131
         * @license http://www.opensource.org/licenses/mit-license.php (The MIT License)
         * @see <a href="http://www.ecma-international.org/ecma-262/6.0/#sec-weakmap-constructor">23.3.1 The WeakMap Constructor – ECMA-262 6th Edition</a>
         */
        "use strict";
        if ("function" != typeof n && "function" == typeof Object.defineProperties) {
            var n = function(e, t) {
                function n() {
                    r.push([this, []])
                }
                var r = [];
                return e.defineProperties(n.prototype, {
                    get: {
                        writable: !0,
                        enumerable: !1,
                        configurable: !0,
                        value: function(t) {
                            if (e(this) !== this) throw new TypeError("Method WeakMap.prototype.get called on incompatible receiver " + this);
                            for (var n, o, i, a = 0, s = r.length; a < s;)
                                if (n = r[a++], n[0] === this) {
                                    if (e(t) !== t) return;
                                    for (o = n[1], a = 0, s = o.length; a < s;)
                                        if (i = o[a++], i[0] === t) return i[1];
                                    return
                                }
                            throw new TypeError("Method WeakMap.prototype.get called on incompatible receiver " + this)
                        }
                    },
                    set: {
                        writable: !0,
                        enumerable: !1,
                        configurable: !0,
                        value: function(t, n) {
                            if (e(this) !== this) throw new TypeError("Method WeakMap.prototype.set called on incompatible receiver " + this);
                            for (var o, i, a, s = 0, u = r.length; s < u;)
                                if (o = r[s++], o[0] === this) {
                                    if (e(t) !== t) throw new TypeError("Invalid value used as weak map key");
                                    for (i = o[1], s = 0, u = i.length; s < u;)
                                        if (a = i[s++], a[0] === t) return a[1] = n, this;
                                    return i.push([t, n]), this
                                }
                            throw new TypeError("Method WeakMap.prototype.set called on incompatible receiver " + this)
                        }
                    },
                    has: {
                        writable: !0,
                        enumerable: !1,
                        configurable: !0,
                        value: function(t) {
                            if (e(this) !== this) throw new TypeError("Method WeakMap.prototype.has called on incompatible receiver " + this);
                            for (var n, o, i = 0, a = r.length; i < a;)
                                if (n = r[i++], n[0] === this) {
                                    if (e(t) !== t) return !1;
                                    for (o = n[1], i = 0, a = o.length; i < a;)
                                        if (o[i++][0] === t) return !0;
                                    return !1
                                }
                            throw new TypeError("Method WeakMap.prototype.has called on incompatible receiver " + this)
                        }
                    },
                    delete: {
                        writable: !0,
                        enumerable: !1,
                        configurable: !0,
                        value: function(t) {
                            if (e(this) !== this) throw new TypeError("Method WeakMap.prototype.delete called on incompatible receiver " + this);
                            for (var n, o, i = 0, a = r.length; i < a;)
                                if (n = r[i++], n[0] === this) {
                                    if (e(t) !== t) return !1;
                                    for (o = n[1], i = 0, a = o.length; i < a;)
                                        if (o[i++][0] === t) return n[1] = o.slice(0, i - 1).concat(o.slice(i)), !0;
                                    return !1
                                }
                            throw new TypeError("Method WeakMap.prototype.delete called on incompatible receiver " + this)
                        }
                    }
                }), n
            }(Object, Array.isArray);
            window.WeakMap = n
        }
    }, , function(e, t, n) {
        (function(e, t) {
            ! function(e, n) {
                "use strict";

                function r(e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                    var r = {
                        callback: e,
                        args: t
                    };
                    return v[p] = r, h(p), p++
                }

                function o(e) {
                    delete v[e]
                }

                function i(e) {
                    var t = e.callback,
                        r = e.args;
                    switch (r.length) {
                        case 0:
                            t();
                            break;
                        case 1:
                            t(r[0]);
                            break;
                        case 2:
                            t(r[0], r[1]);
                            break;
                        case 3:
                            t(r[0], r[1], r[2]);
                            break;
                        default:
                            t.apply(n, r)
                    }
                }

                function a(e) {
                    if (y) setTimeout(a, 0, e);
                    else {
                        var t = v[e];
                        if (t) {
                            y = !0;
                            try {
                                i(t)
                            } finally {
                                o(e), y = !1
                            }
                        }
                    }
                }

                function s() {
                    h = function(e) {
                        t.nextTick(function() {
                            a(e)
                        })
                    }
                }

                function u() {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0,
                            n = e.onmessage;
                        return e.onmessage = function() {
                            t = !1
                        }, e.postMessage("", "*"), e.onmessage = n, t
                    }
                }

                function c() {
                    var t = "setImmediate$" + Math.random() + "$",
                        n = function(n) {
                            n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && a(+n.data.slice(t.length))
                        };
                    e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), h = function(n) {
                        e.postMessage(t + n, "*")
                    }
                }

                function f() {
                    var e = new MessageChannel;
                    e.port1.onmessage = function(e) {
                        var t = e.data;
                        a(t)
                    }, h = function(t) {
                        e.port2.postMessage(t)
                    }
                }

                function l() {
                    var e = g.documentElement;
                    h = function(t) {
                        var n = g.createElement("script");
                        n.onreadystatechange = function() {
                            a(t), n.onreadystatechange = null, e.removeChild(n), n = null
                        }, e.appendChild(n)
                    }
                }

                function d() {
                    h = function(e) {
                        setTimeout(a, 0, e)
                    }
                }
                if (!e.setImmediate) {
                    var h, p = 1,
                        v = {},
                        y = !1,
                        g = e.document,
                        m = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    m = m && m.setTimeout ? m : e, "[object process]" === {}.toString.call(e.process) ? s() : u() ? c() : e.MessageChannel ? f() : g && "onreadystatechange" in g.createElement("script") ? l() : d(), m.setImmediate = r, m.clearImmediate = o
                }
            }("undefined" == typeof self ? "undefined" == typeof e ? this : e : self)
        }).call(t, function() {
            return this
        }(), n(9))
    }, function(e, t, n) {
        function r(e, t) {
            this._id = e, this._clearFn = t
        }
        var o = Function.prototype.apply;
        t.setTimeout = function() {
            return new r(o.call(setTimeout, window, arguments), clearTimeout)
        }, t.setInterval = function() {
            return new r(o.call(setInterval, window, arguments), clearInterval)
        }, t.clearTimeout = t.clearInterval = function(e) {
            e && e.close()
        }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
            this._clearFn.call(window, this._id)
        }, t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
        }, t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
        }, t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                e._onTimeout && e._onTimeout()
            }, t))
        }, n(22), t.setImmediate = setImmediate, t.clearImmediate = clearImmediate
    }, , function(e, t) {
        (function(t) {
            "use strict";

            function n() {
                f = !0;
                for (var e, t, n = l.length; n;) {
                    for (t = l, l = [], e = -1; ++e < n;) t[e]();
                    n = l.length
                }
                f = !1
            }

            function r(e) {
                1 !== l.push(e) || f || o()
            }
            var o, i = t.MutationObserver || t.WebKitMutationObserver;
            if (i) {
                var a = 0,
                    s = new i(n),
                    u = t.document.createTextNode("");
                s.observe(u, {
                    characterData: !0
                }), o = function() {
                    u.data = a = ++a % 2
                }
            } else if (t.setImmediate || "undefined" == typeof t.MessageChannel) o = "document" in t && "onreadystatechange" in t.document.createElement("script") ? function() {
                var e = t.document.createElement("script");
                e.onreadystatechange = function() {
                    n(), e.onreadystatechange = null, e.parentNode.removeChild(e), e = null
                }, t.document.documentElement.appendChild(e)
            } : function() {
                setTimeout(n, 0)
            };
            else {
                var c = new t.MessageChannel;
                c.port1.onmessage = n, o = function() {
                    c.port2.postMessage(0)
                }
            }
            var f, l = [];
            e.exports = r
        }).call(t, function() {
            return this
        }())
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (null !== e) switch (typeof e) {
                case "boolean":
                    return e ? 1 : 0;
                case "number":
                    return f(e);
                case "string":
                    return e.replace(/\u0002/g, "").replace(/\u0001/g, "").replace(/\u0000/g, "");
                case "object":
                    var n = Array.isArray(e),
                        r = n ? e : Object.keys(e),
                        o = -1,
                        i = r.length,
                        a = "";
                    if (n)
                        for (; ++o < i;) a += t.toIndexableString(r[o]);
                    else
                        for (; ++o < i;) {
                            var s = r[o];
                            a += t.toIndexableString(s) + t.toIndexableString(e[s])
                        }
                    return a
            }
            return ""
        }

        function o(e, t) {
            var n, r = t,
                o = "1" === e[t];
            if (o) n = 0, t++;
            else {
                var i = "0" === e[t];
                t++;
                var a = "",
                    s = e.substring(t, t + d),
                    u = parseInt(s, 10) + l;
                for (i && (u = -u), t += d;;) {
                    var c = e[t];
                    if ("\0" === c) break;
                    a += c, t++
                }
                a = a.split("."), n = 1 === a.length ? parseInt(a, 10) : parseFloat(a[0] + "." + a[1]), i && (n -= 10), 0 !== u && (n = parseFloat(n + "e" + u))
            }
            return {
                num: n,
                length: t - r
            }
        }

        function i(e, t) {
            var n = e.pop();
            if (t.length) {
                var r = t[t.length - 1];
                n === r.element && (t.pop(), r = t[t.length - 1]);
                var o = r.element,
                    i = r.index;
                if (Array.isArray(o)) o.push(n);
                else if (i === e.length - 2) {
                    var a = e.pop();
                    o[a] = n
                } else e.push(n)
            }
        }

        function a(e, n) {
            for (var r = Math.min(e.length, n.length), o = 0; o < r; o++) {
                var i = t.collate(e[o], n[o]);
                if (0 !== i) return i
            }
            return e.length === n.length ? 0 : e.length > n.length ? 1 : -1
        }

        function s(e, t) {
            return e === t ? 0 : e > t ? 1 : -1
        }

        function u(e, n) {
            for (var r = Object.keys(e), o = Object.keys(n), i = Math.min(r.length, o.length), a = 0; a < i; a++) {
                var s = t.collate(r[a], o[a]);
                if (0 !== s) return s;
                if (s = t.collate(e[r[a]], n[o[a]]), 0 !== s) return s
            }
            return r.length === o.length ? 0 : r.length > o.length ? 1 : -1
        }

        function c(e) {
            var t = ["boolean", "number", "string", "object"],
                n = t.indexOf(typeof e);
            return ~n ? null === e ? 1 : Array.isArray(e) ? 5 : n < 3 ? n + 2 : n + 3 : Array.isArray(e) ? 5 : void 0
        }

        function f(e) {
            if (0 === e) return "1";
            var t = e.toExponential().split(/e\+?/),
                n = parseInt(t[1], 10),
                r = e < 0,
                o = r ? "0" : "2",
                i = (r ? -n : n) - l,
                a = p.padLeft(i.toString(), "0", d);
            o += h + a;
            var s = Math.abs(parseFloat(t[0]));
            r && (s = 10 - s);
            var u = s.toFixed(20);
            return u = u.replace(/\.?0+$/, ""), o += h + u
        }
        var l = -324,
            d = 3,
            h = "",
            p = n(78);
        t.collate = function(e, n) {
            if (e === n) return 0;
            e = t.normalizeKey(e), n = t.normalizeKey(n);
            var r = c(e),
                o = c(n);
            if (r - o !== 0) return r - o;
            if (null === e) return 0;
            switch (typeof e) {
                case "number":
                    return e - n;
                case "boolean":
                    return e === n ? 0 : e < n ? -1 : 1;
                case "string":
                    return s(e, n)
            }
            return Array.isArray(e) ? a(e, n) : u(e, n)
        }, t.normalizeKey = function(e) {
            switch (typeof e) {
                case "undefined":
                    return null;
                case "number":
                    return e === 1 / 0 || e === -(1 / 0) || isNaN(e) ? null : e;
                case "object":
                    var n = e;
                    if (Array.isArray(e)) {
                        var r = e.length;
                        e = new Array(r);
                        for (var o = 0; o < r; o++) e[o] = t.normalizeKey(n[o])
                    } else {
                        if (e instanceof Date) return e.toJSON();
                        if (null !== e) {
                            e = {};
                            for (var i in n)
                                if (n.hasOwnProperty(i)) {
                                    var a = n[i];
                                    "undefined" != typeof a && (e[i] = t.normalizeKey(a))
                                }
                        }
                    }
            }
            return e
        }, t.toIndexableString = function(e) {
            var n = "\0";
            return e = t.normalizeKey(e), c(e) + h + r(e) + n
        }, t.parseIndexableString = function(e) {
            for (var t = [], n = [], r = 0;;) {
                var a = e[r++];
                if ("\0" !== a) switch (a) {
                    case "1":
                        t.push(null);
                        break;
                    case "2":
                        t.push("1" === e[r]), r++;
                        break;
                    case "3":
                        var s = o(e, r);
                        t.push(s.num), r += s.length;
                        break;
                    case "4":
                        for (var u = "";;) {
                            var c = e[r];
                            if ("\0" === c) break;
                            u += c, r++
                        }
                        u = u.replace(/\u0001\u0001/g, "\0").replace(/\u0001\u0002/g, "").replace(/\u0002\u0002/g, ""), t.push(u);
                        break;
                    case "5":
                        var f = {
                            element: [],
                            index: t.length
                        };
                        t.push(f.element), n.push(f);
                        break;
                    case "6":
                        var l = {
                            element: {},
                            index: t.length
                        };
                        t.push(l.element), n.push(l);
                        break;
                    default:
                        throw new Error("bad collationIndex or unexpectedly reached end of input: " + a)
                } else {
                    if (1 === t.length) return t.pop();
                    i(t, n)
                }
            }
        }
    }, , , function(e, t) {
        "use strict";

        function n() {
            return new Promise(function(e, t) {
                chrome.tabs.query({
                    currentWindow: !0,
                    active: !0
                }, function(n) {
                    n[0] ? e(n[0]) : t(null)
                })
            })
        }

        function r(e) {
            return new Promise(function(t, n) {
                chrome.tabs.query({
                    url: e
                }, function(e) {
                    e[0] ? t(e[0]) : n(null)
                })
            })
        }
        e.exports = {
            getCurrentTab: n,
            getTabByURL: r
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(2),
            o = n(3);
        e.exports = function() {
            var e = window.BeenoteEventHub;
            o.debug && (e.on(r.LOG_INFO, function(e) {
                console.info(e)
            }), e.on(r.LOG_WARNING, function(e) {
                console.warn(e)
            }), e.on(r.LOG_ERROR, function(e) {
                console.error(e)
            })), o.logEvents.forEach(function(t) {
                e.on(t, function(e) {
                    console.log("Events: " + t), console.dir(e)
                })
            })
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            var t = document.createElement("a");
            return t.href = e, t
        }

        function o(e) {
            return "BLOCKED::" + e
        }

        function i(e, t) {
            var n = r(e),
                i = n.hostname,
                a = n.pathname,
                s = t.getBlackList(o(i));
            return s.then(function(e) {
                var t = 0,
                    n = 0,
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var s, u = e.enablePathList[Symbol.iterator](); !(r = (s = u.next()).done); r = !0) {
                        var c = s.value;
                        0 == a.indexOf(c) && (t = Math.max(t, c.length))
                    }
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        !r && u.return && u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                var f = !0,
                    l = !1,
                    d = void 0;
                try {
                    for (var h, p = e.disablePathList[Symbol.iterator](); !(f = (h = p.next()).done); f = !0) {
                        var c = h.value;
                        0 == a.indexOf(c) && (n = Math.max(n, c.length))
                    }
                } catch (e) {
                    l = !0, d = e
                } finally {
                    try {
                        !f && p.return && p.return()
                    } finally {
                        if (l) throw d
                    }
                }
                return n > t
            }).catch(function(e) {
                return 404 == e.status ? !!u[i] : Promise.reject(e)
            })
        }

        function a(e, t) {
            var n = r(e),
                i = n.hostname,
                a = n.pathname,
                s = t.getBlackList(o(i));
            return s.then(function(e) {
                var n = [],
                    r = [],
                    s = !0,
                    u = !1,
                    c = void 0;
                try {
                    for (var f, l = e.enablePathList[Symbol.iterator](); !(s = (f = l.next()).done); s = !0) {
                        var d = f.value;
                        0 != d.indexOf(a) && n.push(d)
                    }
                } catch (e) {
                    u = !0, c = e
                } finally {
                    try {
                        !s && l.return && l.return()
                    } finally {
                        if (u) throw c
                    }
                }
                var h = !0,
                    p = !1,
                    v = void 0;
                try {
                    for (var y, g = e.disablePathList[Symbol.iterator](); !(h = (y = g.next()).done); h = !0) {
                        var d = y.value;
                        0 != d.indexOf(a) && r.push(d)
                    }
                } catch (e) {
                    p = !0, v = e
                } finally {
                    try {
                        !h && g.return && g.return()
                    } finally {
                        if (p) throw v
                    }
                }
                r.push(a);
                var m = {
                    enablePathList: n,
                    disablePathList: r
                };
                return t.saveBlackList(o(i), m)
            }).catch(function(e) {
                if (404 == e.status) {
                    var n = {
                        enablePathList: [],
                        disablePathList: [a]
                    };
                    return t.saveBlackList(o(i), n)
                }
                return Promise.reject(e)
            })
        }

        function s(e, t) {
            var n = r(e),
                i = n.hostname,
                a = n.pathname,
                s = t.getBlackList(o(i));
            return s.then(function(e) {
                var n = [],
                    r = [],
                    s = !0,
                    u = !1,
                    c = void 0;
                try {
                    for (var f, l = e.enablePathList[Symbol.iterator](); !(s = (f = l.next()).done); s = !0) {
                        var d = f.value;
                        0 != d.indexOf(a) && n.push(d)
                    }
                } catch (e) {
                    u = !0, c = e
                } finally {
                    try {
                        !s && l.return && l.return()
                    } finally {
                        if (u) throw c
                    }
                }
                var h = !0,
                    p = !1,
                    v = void 0;
                try {
                    for (var y, g = e.disablePathList[Symbol.iterator](); !(h = (y = g.next()).done); h = !0) {
                        var d = y.value;
                        0 != d.indexOf(a) && r.push(d)
                    }
                } catch (e) {
                    p = !0, v = e
                } finally {
                    try {
                        !h && g.return && g.return()
                    } finally {
                        if (p) throw v
                    }
                }
                if (0 == n.length && 0 == r.length) return t.removeBlackList(o(i));
                n.push(a);
                var m = {
                    enablePathList: n,
                    disablePathList: r
                };
                return t.saveBlackList(o(i), m)
            })
        }
        var u = (n(7), n(2), n(14), {
            "www.youtube.com": !0,
            "www.google.com": !0,
            "doc.google.com": !0,
            "mail.google.com": !0,
            "www.facebook.com": !0,
            "twitter.com": !0,
            "www.instagram.com": !0,
            "weibo.com": !0,
            "www.renren.com": !0,
            "www.baidu.com": !0,
            "www.bing.com": !0,
            "medium.com": !0
        });
        e.exports = {
            isPageInBlackList: i,
            addPageToBlackList: a,
            removePageFromBlackList: s
        }
    }, , , function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(18);
        n(20), n(19);
        var a = function() {
            function e(t) {
                r(this, e);
                var n = this;
                n.eventEmitter = new i, window.BeenoteEventHub = n.eventEmitter, n.programList = [], t.forEach(function(e) {
                    n.programList.push(e)
                })
            }
            return o(e, [{
                key: "start",
                value: function() {
                    this.programList.forEach(function(e) {
                        return e()
                    })
                }
            }]), e
        }();
        e.exports = a
    }, function(e, t) {
        "use strict";
        e.exports = function() {}
    }, function(e, t, n) {
        (function(e) {
            "use strict";
            t.Promise = n(51), t.inherits = n(45), t.extend = n(46);
            var r = n(38);
            t.promisedCallback = function(t, n) {
                return n && t.then(function(t) {
                    e.nextTick(function() {
                        n(null, t)
                    })
                }, function(t) {
                    e.nextTick(function() {
                        n(t)
                    })
                }), t
            }, t.callbackify = function(e) {
                return r(function(n) {
                    var r = n.pop(),
                        o = e.apply(this, n);
                    return "function" == typeof r && t.promisedCallback(o, r), o
                })
            }, t.fin = function(e, t) {
                return e.then(function(e) {
                    var n = t();
                    return "function" == typeof n.then ? n.then(function() {
                        return e
                    }) : e
                }, function(e) {
                    var n = t();
                    if ("function" == typeof n.then) return n.then(function() {
                        throw e
                    });
                    throw e
                })
            }, t.sequentialize = function(e, t) {
                return function() {
                    var n = arguments,
                        r = this;
                    return e.add(function() {
                        return t.apply(r, n)
                    })
                }
            }, t.flatten = function(e) {
                for (var t = [], n = 0, r = e.length; n < r; n++) t = t.concat(e[n]);
                return t
            }, t.uniq = function(e) {
                for (var t = {}, n = 0, r = e.length; n < r; n++) t["$" + e[n]] = !0;
                var o = Object.keys(t),
                    i = new Array(o.length);
                for (n = 0, r = o.length; n < r; n++) i[n] = o[n].substring(1);
                return i
            };
            var o = n(102),
                i = n(50);
            t.MD5 = function(t) {
                return e.browser ? i.hash(t) : o.createHash("md5").update(t).digest("hex")
            }
        }).call(t, n(9))
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            return function(n) {
                for (var r = [], o = 0, i = e.length; o < i; o++) {
                    for (var a = p(e[o]), s = n, u = 0, c = a.length; u < c; u++) {
                        var f = a[u];
                        if (s = s[f], !s) break
                    }
                    r.push(s)
                }
                t(r)
            }
        }

        function o(e, t) {
            var n = p(e);
            return function(e) {
                for (var r = e, o = 0, i = n.length; o < i; o++) {
                    var a = n[o];
                    if (r = r[a], !r) return
                }
                t(r)
            }
        }

        function i(e, t) {
            return function(n) {
                t(n[e])
            }
        }

        function a(e, t) {
            return function(n) {
                for (var r = [], o = 0, i = e.length; o < i; o++) r.push(n[e[o]]);
                t(r)
            }
        }

        function s(e) {
            for (var t = 0, n = e.length; t < n; t++) {
                var r = e[t];
                if (r.indexOf(".") !== -1) return !1
            }
            return !0
        }

        function u(e, t) {
            var n = s(e),
                u = 1 === e.length;
            return n ? u ? i(e[0], t) : a(e, t) : u ? o(e[0], t) : r(e, t)
        }

        function c(e, t) {
            var n = Object.keys(e.fields);
            return u(n, t)
        }

        function f() {
            throw new Error("reduce not supported")
        }

        function l(e, t) {
            var n = e.views[t];
            if (!n.map || !n.map.fields) throw new Error("ddoc " + e._id + " with view " + t + " doesn't have map.fields defined. maybe it wasn't created by this plugin?")
        }
        var d = n(16),
            h = n(80),
            p = d.parseField,
            v = h({
                name: "indexes",
                mapper: c,
                reducer: f,
                ddocValidator: l
            });
        e.exports = v
    }, function(e, t) {
        "use strict";

        function n(e) {
            return function() {
                var t = arguments.length;
                if (t) {
                    for (var n = [], r = -1; ++r < t;) n[r] = arguments[r];
                    return e.call(this, n)
                }
                return e.call(this, [])
            }
        }
        e.exports = n
    }, , , , , , , function(e, t) {
        "function" == typeof Object.create ? e.exports = function(e, t) {
            e.super_ = t, e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : e.exports = function(e, t) {
            e.super_ = t;
            var n = function() {};
            n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
        }
    }, function(e, t) {
        "use strict";

        function n(e) {
            return null === e ? String(e) : "object" == typeof e || "function" == typeof e ? u[d.call(e)] || "object" : typeof e
        }

        function r(e) {
            return null !== e && e === e.window
        }

        function o(e) {
            if (!e || "object" !== n(e) || e.nodeType || r(e)) return !1;
            try {
                if (e.constructor && !h.call(e, "constructor") && !h.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            var t;
            for (t in e);
            return void 0 === t || h.call(e, t)
        }

        function i(e) {
            return "function" === n(e)
        }

        function a() {
            for (var e = [], t = -1, n = arguments.length, r = new Array(n); ++t < n;) r[t] = arguments[t];
            var o = {};
            e.push({
                args: r,
                result: {
                    container: o,
                    key: "key"
                }
            });
            for (var i; i = e.pop();) s(e, i.args, i.result);
            return o.key
        }

        function s(e, t, n) {
            var r, a, s, u, c, f, l, d = t[0] || {},
                h = 1,
                v = t.length,
                y = !1,
                g = /\d+/;
            for ("boolean" == typeof d && (y = d, d = t[1] || {}, h = 2), "object" == typeof d || i(d) || (d = {}), v === h && (d = this, --h); h < v; h++)
                if (null != (r = t[h])) {
                    l = p(r);
                    for (a in r)
                        if (!(a in Object.prototype)) {
                            if (l && !g.test(a)) continue;
                            if (s = d[a], u = r[a], d === u) continue;
                            y && u && (o(u) || (c = p(u))) ? (c ? (c = !1, f = s && p(s) ? s : []) : f = s && o(s) ? s : {}, e.push({
                                args: [y, f, u],
                                result: {
                                    container: d,
                                    key: a
                                }
                            })) : void 0 !== u && (p(r) && i(u) || (d[a] = u))
                        }
                }
            n.container[n.key] = d
        }
        for (var u = {}, c = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error"], f = 0; f < c.length; f++) {
            var l = c[f];
            u["[object " + l + "]"] = l.toLowerCase()
        }
        var d = u.toString,
            h = u.hasOwnProperty,
            p = Array.isArray || function(e) {
                return "array" === n(e)
            };
        e.exports = a
    }, function(e, t, n) {
        "use strict";
        var r = n(52).upsert;
        e.exports = function(e, t, n) {
            return r.apply(e, [t, n])
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e.allDocs({
                startkey: "_design/",
                endkey: "_design/￿",
                include_docs: !0
            }).then(function(e) {
                var t = {
                    indexes: [{
                        ddoc: null,
                        name: "_all_docs",
                        type: "special",
                        def: {
                            fields: [{
                                _id: "asc"
                            }]
                        }
                    }]
                };
                return t.indexes = o.flatten(t.indexes, e.rows.filter(function(e) {
                    return "query" === e.doc.language
                }).map(function(e) {
                    var t = void 0 !== e.doc.views ? Object.keys(e.doc.views) : [];
                    return t.map(function(t) {
                        var n = e.doc.views[t];
                        return {
                            ddoc: e.id,
                            name: t,
                            type: "json",
                            def: a(n.options.def)
                        }
                    })
                })), t.indexes.sort(function(e, t) {
                    return o.compare(e.name, t.name)
                }), t.total_rows = t.indexes.length, t
            })
        }
        var o = n(13),
            i = n(16),
            a = i.massageIndexDef;
        e.exports = r
    }, function(e, t, n) {
        "use strict";
        var r = n(13),
            o = r.clone;
        e.exports = function(e) {
            return e = o(e), e.index || (e.index = {}), ["type", "name", "ddoc"].forEach(function(t) {
                e.index[t] && (e[t] = e.index[t], delete e.index[t])
            }), e.fields && (e.index.fields = e.fields, delete e.fields), e.type || (e.type = "json"), e
        }
    }, function(e, t, n) {
        ! function(t) {
            e.exports = t()
        }(function(e) {
            "use strict";

            function t(e, t, n, r, o, i) {
                return t = _(_(t, e), _(r, i)), _(t << o | t >>> 32 - o, n)
            }

            function n(e, n, r, o, i, a, s) {
                return t(n & r | ~n & o, e, n, i, a, s)
            }

            function r(e, n, r, o, i, a, s) {
                return t(n & o | r & ~o, e, n, i, a, s)
            }

            function o(e, n, r, o, i, a, s) {
                return t(n ^ r ^ o, e, n, i, a, s)
            }

            function i(e, n, r, o, i, a, s) {
                return t(r ^ (n | ~o), e, n, i, a, s)
            }

            function a(e, t) {
                var a = e[0],
                    s = e[1],
                    u = e[2],
                    c = e[3];
                a = n(a, s, u, c, t[0], 7, -680876936), c = n(c, a, s, u, t[1], 12, -389564586), u = n(u, c, a, s, t[2], 17, 606105819), s = n(s, u, c, a, t[3], 22, -1044525330), a = n(a, s, u, c, t[4], 7, -176418897), c = n(c, a, s, u, t[5], 12, 1200080426), u = n(u, c, a, s, t[6], 17, -1473231341), s = n(s, u, c, a, t[7], 22, -45705983), a = n(a, s, u, c, t[8], 7, 1770035416), c = n(c, a, s, u, t[9], 12, -1958414417), u = n(u, c, a, s, t[10], 17, -42063), s = n(s, u, c, a, t[11], 22, -1990404162), a = n(a, s, u, c, t[12], 7, 1804603682), c = n(c, a, s, u, t[13], 12, -40341101), u = n(u, c, a, s, t[14], 17, -1502002290), s = n(s, u, c, a, t[15], 22, 1236535329), a = r(a, s, u, c, t[1], 5, -165796510), c = r(c, a, s, u, t[6], 9, -1069501632), u = r(u, c, a, s, t[11], 14, 643717713), s = r(s, u, c, a, t[0], 20, -373897302), a = r(a, s, u, c, t[5], 5, -701558691), c = r(c, a, s, u, t[10], 9, 38016083), u = r(u, c, a, s, t[15], 14, -660478335), s = r(s, u, c, a, t[4], 20, -405537848), a = r(a, s, u, c, t[9], 5, 568446438), c = r(c, a, s, u, t[14], 9, -1019803690), u = r(u, c, a, s, t[3], 14, -187363961), s = r(s, u, c, a, t[8], 20, 1163531501), a = r(a, s, u, c, t[13], 5, -1444681467), c = r(c, a, s, u, t[2], 9, -51403784), u = r(u, c, a, s, t[7], 14, 1735328473), s = r(s, u, c, a, t[12], 20, -1926607734), a = o(a, s, u, c, t[5], 4, -378558), c = o(c, a, s, u, t[8], 11, -2022574463), u = o(u, c, a, s, t[11], 16, 1839030562), s = o(s, u, c, a, t[14], 23, -35309556), a = o(a, s, u, c, t[1], 4, -1530992060), c = o(c, a, s, u, t[4], 11, 1272893353), u = o(u, c, a, s, t[7], 16, -155497632), s = o(s, u, c, a, t[10], 23, -1094730640), a = o(a, s, u, c, t[13], 4, 681279174), c = o(c, a, s, u, t[0], 11, -358537222), u = o(u, c, a, s, t[3], 16, -722521979), s = o(s, u, c, a, t[6], 23, 76029189), a = o(a, s, u, c, t[9], 4, -640364487), c = o(c, a, s, u, t[12], 11, -421815835), u = o(u, c, a, s, t[15], 16, 530742520), s = o(s, u, c, a, t[2], 23, -995338651), a = i(a, s, u, c, t[0], 6, -198630844), c = i(c, a, s, u, t[7], 10, 1126891415), u = i(u, c, a, s, t[14], 15, -1416354905), s = i(s, u, c, a, t[5], 21, -57434055), a = i(a, s, u, c, t[12], 6, 1700485571), c = i(c, a, s, u, t[3], 10, -1894986606), u = i(u, c, a, s, t[10], 15, -1051523), s = i(s, u, c, a, t[1], 21, -2054922799), a = i(a, s, u, c, t[8], 6, 1873313359), c = i(c, a, s, u, t[15], 10, -30611744), u = i(u, c, a, s, t[6], 15, -1560198380), s = i(s, u, c, a, t[13], 21, 1309151649), a = i(a, s, u, c, t[4], 6, -145523070), c = i(c, a, s, u, t[11], 10, -1120210379), u = i(u, c, a, s, t[2], 15, 718787259), s = i(s, u, c, a, t[9], 21, -343485551), e[0] = _(a, e[0]), e[1] = _(s, e[1]), e[2] = _(u, e[2]), e[3] = _(c, e[3])
            }

            function s(e) {
                var t, n = [];
                for (t = 0; t < 64; t += 4) n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
                return n
            }

            function u(e) {
                var t, n = [];
                for (t = 0; t < 64; t += 4) n[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
                return n
            }

            function c(e) {
                var t, n, r, o, i, u, c = e.length,
                    f = [1732584193, -271733879, -1732584194, 271733878];
                for (t = 64; t <= c; t += 64) a(f, s(e.substring(t - 64, t)));
                for (e = e.substring(t - 64), n = e.length, r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t = 0; t < n; t += 1) r[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
                if (r[t >> 2] |= 128 << (t % 4 << 3), t > 55)
                    for (a(f, r), t = 0; t < 16; t += 1) r[t] = 0;
                return o = 8 * c, o = o.toString(16).match(/(.*?)(.{0,8})$/), i = parseInt(o[2], 16), u = parseInt(o[1], 16) || 0, r[14] = i, r[15] = u, a(f, r), f
            }

            function f(e) {
                var t, n, r, o, i, s, c = e.length,
                    f = [1732584193, -271733879, -1732584194, 271733878];
                for (t = 64; t <= c; t += 64) a(f, u(e.subarray(t - 64, t)));
                for (e = t - 64 < c ? e.subarray(t - 64) : new Uint8Array(0), n = e.length, r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t = 0; t < n; t += 1) r[t >> 2] |= e[t] << (t % 4 << 3);
                if (r[t >> 2] |= 128 << (t % 4 << 3), t > 55)
                    for (a(f, r), t = 0; t < 16; t += 1) r[t] = 0;
                return o = 8 * c, o = o.toString(16).match(/(.*?)(.{0,8})$/), i = parseInt(o[2], 16), s = parseInt(o[1], 16) || 0, r[14] = i, r[15] = s, a(f, r), f
            }

            function l(e) {
                var t, n = "";
                for (t = 0; t < 4; t += 1) n += b[e >> 8 * t + 4 & 15] + b[e >> 8 * t & 15];
                return n
            }

            function d(e) {
                var t;
                for (t = 0; t < e.length; t += 1) e[t] = l(e[t]);
                return e.join("")
            }

            function h(e) {
                return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))), e
            }

            function p(e, t) {
                var n, r = e.length,
                    o = new ArrayBuffer(r),
                    i = new Uint8Array(o);
                for (n = 0; n < r; n += 1) i[n] = e.charCodeAt(n);
                return t ? i : o
            }

            function v(e) {
                return String.fromCharCode.apply(null, new Uint8Array(e))
            }

            function y(e, t, n) {
                var r = new Uint8Array(e.byteLength + t.byteLength);
                return r.set(new Uint8Array(e)), r.set(new Uint8Array(t), e.byteLength), n ? r : r.buffer
            }

            function g(e) {
                var t, n = [],
                    r = e.length;
                for (t = 0; t < r - 1; t += 2) n.push(parseInt(e.substr(t, 2), 16));
                return String.fromCharCode.apply(String, n)
            }

            function m() {
                this.reset()
            }
            var _ = function(e, t) {
                    return e + t & 4294967295
                },
                b = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
            return "5d41402abc4b2a76b9719d911017c592" !== d(c("hello")) && (_ = function(e, t) {
                var n = (65535 & e) + (65535 & t),
                    r = (e >> 16) + (t >> 16) + (n >> 16);
                return r << 16 | 65535 & n
            }), "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || ! function() {
                function t(e, t) {
                    return e = 0 | e || 0, e < 0 ? Math.max(e + t, 0) : Math.min(e, t)
                }
                ArrayBuffer.prototype.slice = function(n, r) {
                    var o, i, a, s, u = this.byteLength,
                        c = t(n, u),
                        f = u;
                    return r !== e && (f = t(r, u)), c > f ? new ArrayBuffer(0) : (o = f - c, i = new ArrayBuffer(o), a = new Uint8Array(i), s = new Uint8Array(this, c, o), a.set(s), i)
                }
            }(), m.prototype.append = function(e) {
                return this.appendBinary(h(e)), this
            }, m.prototype.appendBinary = function(e) {
                this._buff += e, this._length += e.length;
                var t, n = this._buff.length;
                for (t = 64; t <= n; t += 64) a(this._hash, s(this._buff.substring(t - 64, t)));
                return this._buff = this._buff.substring(t - 64), this
            }, m.prototype.end = function(e) {
                var t, n, r = this._buff,
                    o = r.length,
                    i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (t = 0; t < o; t += 1) i[t >> 2] |= r.charCodeAt(t) << (t % 4 << 3);
                return this._finish(i, o), n = d(this._hash), e && (n = g(n)), this.reset(), n
            }, m.prototype.reset = function() {
                return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
            }, m.prototype.getState = function() {
                return {
                    buff: this._buff,
                    length: this._length,
                    hash: this._hash
                }
            }, m.prototype.setState = function(e) {
                return this._buff = e.buff, this._length = e.length, this._hash = e.hash, this
            }, m.prototype.destroy = function() {
                delete this._hash, delete this._buff, delete this._length
            }, m.prototype._finish = function(e, t) {
                var n, r, o, i = t;
                if (e[i >> 2] |= 128 << (i % 4 << 3), i > 55)
                    for (a(this._hash, e), i = 0; i < 16; i += 1) e[i] = 0;
                n = 8 * this._length, n = n.toString(16).match(/(.*?)(.{0,8})$/), r = parseInt(n[2], 16), o = parseInt(n[1], 16) || 0, e[14] = r, e[15] = o, a(this._hash, e)
            }, m.hash = function(e, t) {
                return m.hashBinary(h(e), t)
            }, m.hashBinary = function(e, t) {
                var n = c(e),
                    r = d(n);
                return t ? g(r) : r
            }, m.ArrayBuffer = function() {
                this.reset()
            }, m.ArrayBuffer.prototype.append = function(e) {
                var t, n = y(this._buff.buffer, e, !0),
                    r = n.length;
                for (this._length += e.byteLength, t = 64; t <= r; t += 64) a(this._hash, u(n.subarray(t - 64, t)));
                return this._buff = t - 64 < r ? new Uint8Array(n.buffer.slice(t - 64)) : new Uint8Array(0), this
            }, m.ArrayBuffer.prototype.end = function(e) {
                var t, n, r = this._buff,
                    o = r.length,
                    i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (t = 0; t < o; t += 1) i[t >> 2] |= r[t] << (t % 4 << 3);
                return this._finish(i, o), n = d(this._hash), e && (n = g(n)), this.reset(), n
            }, m.ArrayBuffer.prototype.reset = function() {
                return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
            }, m.ArrayBuffer.prototype.getState = function() {
                var e = m.prototype.getState.call(this);
                return e.buff = v(e.buff), e
            }, m.ArrayBuffer.prototype.setState = function(e) {
                return e.buff = p(e.buff, !0), m.prototype.setState.call(this, e)
            }, m.ArrayBuffer.prototype.destroy = m.prototype.destroy, m.ArrayBuffer.prototype._finish = m.prototype._finish, m.ArrayBuffer.hash = function(e, t) {
                var n = f(new Uint8Array(e)),
                    r = d(n);
                return t ? g(r) : r
            }, m
        })
    },
    [103, 90],
    function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            return "string" != typeof t ? i.reject(new Error("doc id is required")) : e.get(t).catch(function(e) {
                if (404 !== e.status) throw e;
                return {}
            }).then(function(r) {
                var i = r._rev,
                    a = n(r);
                return a ? (a._id = t, a._rev = i, o(e, a, n)) : {
                    updated: !1,
                    rev: i
                }
            })
        }

        function o(e, t, n) {
            return e.put(t).then(function(e) {
                return {
                    updated: !0,
                    rev: e.rev
                }
            }, function(o) {
                if (409 !== o.status) throw o;
                return r(e, t._id, n)
            })
        }
        var i = n(92);
        t.upsert = function(e, t, n) {
            var o = this,
                i = r(o, e, t);
            return "function" != typeof n ? i : void i.then(function(e) {
                n(null, e)
            }, n)
        }, t.putIfNotExists = function(e, t, n) {
            var o = this;
            "string" != typeof e && (n = t, t = e, e = t._id);
            var i = function(e) {
                    return !e._rev && t
                },
                a = r(o, e, i);
            return "function" != typeof n ? a : void a.then(function(e) {
                n(null, e)
            }, n)
        }, "undefined" != typeof window && window.PouchDB && window.PouchDB.plugin(t)
    }, , , , , , , , , ,
    function(e, t) {
        "use strict";
        e.exports = function() {
            function e(e) {
                return {
                    menuId: e,
                    type: "ContextMenuClick"
                }
            }
            chrome.contextMenus.create({
                id: "StickerNote",
                title: "Beanote - Create Sticker Note",
                contexts: ["all"]
            }), chrome.contextMenus.onClicked.addListener(function(t, n) {
                chrome.tabs.sendMessage(n.id, e(t.menuItemId))
            })
        }
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(7),
            a = n(93);
        a.plugin(n(89));
        var s = {
                Note: "Note",
                BlackList: "BlackList",
                WebPage: "WebPage"
            },
            u = function() {
                function e(t) {
                    r(this, e), this.className = "NoteDB", this.activeTabs = {}, this.db = {
                        local: new a(t.localName, t.localOption),
                        remote: new a(t.remoteName),
                        personal: null
                    }, this.db.local.createIndex({
                        index: {
                            fields: ["urlId", "docType"]
                        }
                    }), this.db.local.createIndex({
                        index: {
                            fields: ["updatedTime", "docType"]
                        }
                    })
                }
                return o(e, [{
                    key: "findNotesInPage",
                    value: function(e) {
                        var t = this,
                            n = s.Note;
                        return t.db.local.find({
                            selector: {
                                $and: [{
                                    urlId: {
                                        $eq: e
                                    }
                                }, {
                                    docType: {
                                        $eq: n
                                    }
                                }]
                            }
                        })
                    }
                }, {
                    key: "getRecentNotes",
                    value: function(e, t) {
                        var n = this,
                            r = s.Note;
                        return n.db.local.find({
                            selector: {
                                $and: [{
                                    docType: {
                                        $eq: r
                                    }
                                }, {
                                    updatedTime: {
                                        $lt: t
                                    }
                                }]
                            },
                            sort: [{
                                updatedTime: "desc"
                            }],
                            limit: e
                        })
                    }
                }, {
                    key: "saveNote",
                    value: function(e, t) {
                        var n = this;
                        return e._id = t, e.docType = s.Note, e.updatedTime = Date.now(), n.db.local.get(e._id).then(function(t) {
                            var r = i(t, e);
                            return n.db.local.put(r)
                        }).catch(function(t) {
                            return 404 == t.status ? n.db.local.put(e) : Promise.reject(t)
                        })
                    }
                }, {
                    key: "removeNote",
                    value: function(e, t) {
                        var n = this;
                        return e._id = t, this.db.local.get(e._id).then(function(e) {
                            return e.docType == s.Note ? n.db.local.remove(e) : Promise.reject("Not a note type")
                        })
                    }
                }, {
                    key: "createNoteIndexes",
                    value: function(e) {
                        return this.db.local.allDocs({
                            include_docs: !0
                        }).then(function(t) {
                            for (var n = 0; n < t.rows.length; n++) {
                                var r = t.rows[n].doc;
                                r.docType == s.Note ? e.appendItem(r._id, r, r.urlId) : r.docType == s.WebPage && e.appendItem(r._id, r, r.pageIndex)
                            }
                        })
                    }
                }, {
                    key: "getBlackList",
                    value: function(e) {
                        var t = this;
                        return t.db.local.get(e).then(function(e) {
                            return e
                        })
                    }
                }, {
                    key: "saveBlackList",
                    value: function(e, t) {
                        var n = this;
                        return t._id = e, t.docType = s.BlackList, t.updatedTime = Date.now(), n.db.local.get(t._id).then(function(e) {
                            var r = i(e, t);
                            return n.db.local.put(r)
                        }).catch(function(e) {
                            return 404 == e.status ? n.db.local.put(t) : Promise.reject(e)
                        })
                    }
                }, {
                    key: "removeBlackList",
                    value: function(e) {
                        var t = this;
                        return this.db.local.get(e).then(function(e) {
                            return e.docType == s.BlackList ? t.db.local.remove(e) : Promise.reject("Not a blackList type")
                        })
                    }
                }, {
                    key: "saveWebPage",
                    value: function(e, t) {
                        var n = this;
                        return t._id = e, t.docType = s.WebPage, t.updatedTime = Date.now(), n.db.local.get(t._id).then(function(e) {
                            var r = i(e, t);
                            return n.db.local.put(r)
                        }).catch(function(e) {
                            return 404 == e.status ? n.db.local.put(t) : Promise.reject(e)
                        })
                    }
                }, {
                    key: "removeWebPage",
                    value: function(e) {
                        var t = this;
                        return this.db.local.get(e).then(function(e) {
                            return e.docType == s.WebPage ? t.db.local.remove(e) : Promise.reject("Not a webPage type")
                        }).catch(function(e) {
                            if (404 != e.status) return Promise.reject(e)
                        })
                    }
                }, {
                    key: "getItemListByIds",
                    value: function(e) {
                        var t = this,
                            n = e.map(function(e) {
                                return t.db.local.get(e).then(function(e) {
                                    return e
                                }).catch(function(e) {
                                    return null
                                })
                            });
                        return Promise.all(n).then(function(e) {
                            return e.filter(function(e) {
                                return e
                            })
                        })
                    }
                }]), e
            }();
        e.exports = u
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var o = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = n(74),
            a = function() {
                function e() {
                    r(this, e), this.noteList = [], this.options = {
                        include: ["score"],
                        shouldSort: !0,
                        findAllMatches: !0,
                        threshold: .3,
                        location: 0,
                        distance: 1e3,
                        maxPatternLength: 32,
                        minMatchCharLength: 2,
                        keys: [{
                            name: "pageTitle",
                            weight: .9
                        }, {
                            name: "pageUrl",
                            weight: .9
                        }, {
                            name: "pageKeywords",
                            weight: .5
                        }, {
                            name: "pageDescription",
                            weight: .5
                        }, {
                            name: "textContent",
                            weight: .2
                        }]
                    }, this.fuseIndex = new i(this.noteList, this.options)
                }
                return o(e, [{
                    key: "appendItem",
                    value: function(e, t, n) {
                        var r = {
                            id: e,
                            pageTitle: t.title,
                            pageUrl: n,
                            pageKeywords: t.keywords,
                            pageDescription: t.description,
                            textContent: t.textContent
                        };
                        this.noteList.push(r), this.fuseIndex.set(this.noteList)
                    }
                }, {
                    key: "removeItem",
                    value: function(e) {
                        for (var t = 0; t < this.noteList.length; t++)
                            if (this.noteList[t].id == e) {
                                this.noteList.splice(t, 1), this.fuseIndex.set(this.noteList);
                                break
                            }
                    }
                }, {
                    key: "searchForKey",
                    value: function(e) {
                        if (e.length < 2) return [];
                        var t = this.fuseIndex.search(e);
                        console.log(t);
                        var n = {};
                        t.forEach(function(e) {
                            n[e.item.pageUrl] ? n[e.item.pageUrl].count += 1 : n[e.item.pageUrl] = {
                                id: e.item.pageUrl,
                                score: e.score,
                                count: 1
                            }
                        });
                        var r = 6,
                            o = [];
                        for (var i in n) n[i].score += r / (r + n[i].count), o.push(n[i]);
                        return o.sort(function(e, t) {
                            return e.score - t.score
                        }), o
                    }
                }]), e
            }();
        e.exports = a
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return "PAGEINFO::" + e
        }

        function o(e, t) {
            console.error(e), t(null)
        }
        var i = n(14),
            a = n(5).onMessage,
            s = n(63),
            u = n(64),
            c = n(29).getCurrentTab,
            f = n(31).isPageInBlackList,
            l = n(31).addPageToBlackList,
            d = n(31).removePageFromBlackList;
        e.exports = function() {
            var e = new s({
                    localName: "localhost",
                    remoteName: "remote"
                }),
                t = new u;
            e.createNoteIndexes(t), a(function(n, a, s) {
                switch (n.type) {
                    case i.SaveNote:
                        t.appendItem(n.id, n.content, n.content.urlId);
                        var u = e.saveNote(n.content, n.id);
                        u.then(function(e) {
                            return s(e)
                        }).catch(function(e) {
                            return o(e, s)
                        }), n.updatePage && c().then(function(t) {
                            n.pageInfo.favicon = t.favIconUrl;
                            var o = r(n.pageInfo.pageIndex);
                            e.saveWebPage(o, n.pageInfo)
                        }).catch(function(e) {
                            console.error(e)
                        });
                        break;
                    case i.RemoveNote:
                        t.removeItem(n.id);
                        var u = e.removeNote(n.content, n.id);
                        u.then(function(e) {
                            return s(e)
                        }).catch(function(e) {
                            return o(e, s)
                        });
                        break;
                    case i.FetchNoteList:
                        var h = e.findNotesInPage(n.content);
                        h.then(function(o) {
                            s(o.docs), 0 == o.docs.length && (t.removeItem(r(n.content)), e.removeWebPage(r(n.content)))
                        }).catch(function(e) {
                            return o(e, s)
                        });
                        break;
                    case i.SearchWebPage:
                        var p = t.searchForKey(n.content),
                            v = p.map(function(e) {
                                return r(e.id)
                            }),
                            y = e.getItemListByIds(v);
                        y.then(function(e) {
                            return s(e)
                        }).catch(function(e) {
                            return o(e, s)
                        });
                        break;
                    case i.GetRecentNotes:
                        var g = {
                                noteList: [],
                                webPageList: []
                            },
                            m = e.getRecentNotes(n.content.limit, n.content.timeBefore);
                        m.then(function(t) {
                            var n = t.docs;
                            g.noteList = n;
                            var o = n.map(function(e) {
                                    return r(e.urlId)
                                }),
                                i = {};
                            return o.forEach(function(e) {
                                return i[e] = 1
                            }), e.getItemListByIds(Object.keys(i))
                        }).then(function(e) {
                            g.webPageList = e, s(g)
                        }).catch(function(e) {
                            return o(e, s)
                        });
                        break;
                    case i.CheckBlackList:
                        var _ = f(n.content, e);
                        _.then(function(e) {
                            return s(e)
                        }).catch(function(e) {
                            return o(e, s)
                        });
                        break;
                    case i.AddBlackList:
                        var b = l(n.content, e);
                        b.then(function(e) {
                            return s(e)
                        }).catch(function(e) {
                            return o(e, s)
                        });
                        break;
                    case i.RemoveBlackList:
                        var w = d(n.content, e);
                        w.then(function(e) {
                            return s(e)
                        }).catch(function(e) {
                            return o(e, s)
                        })
                }
                return !0
            })
        }
    }, , , , , ,
    function(e, t, n) {
        function r() {
            return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
        }

        function o() {
            var e = arguments,
                n = this.useColors;
            if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), !n) return e;
            var r = "color: " + this.color;
            e = [e[0], r, "color: inherit"].concat(Array.prototype.slice.call(e, 1));
            var o = 0,
                i = 0;
            return e[0].replace(/%[a-z%]/g, function(e) {
                "%%" !== e && (o++, "%c" === e && (i = o))
            }), e.splice(i, 0, r), e
        }

        function i() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }

        function a(e) {
            try {
                null == e ? t.storage.removeItem("debug") : t.storage.debug = e
            } catch (e) {}
        }

        function s() {
            var e;
            try {
                e = t.storage.debug
            } catch (e) {}
            return e
        }

        function u() {
            try {
                return window.localStorage
            } catch (e) {}
        }
        t = e.exports = n(72), t.log = i, t.formatArgs = o, t.save = a, t.load = s, t.useColors = r, t.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : u(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function(e) {
            return JSON.stringify(e)
        }, t.enable(s())
    },
    function(e, t, n) {
        function r() {
            return t.colors[f++ % t.colors.length]
        }

        function o(e) {
            function n() {}

            function o() {
                var e = o,
                    n = +new Date,
                    i = n - (c || n);
                e.diff = i, e.prev = c, e.curr = n, c = n, null == e.useColors && (e.useColors = t.useColors()), null == e.color && e.useColors && (e.color = r());
                var a = Array.prototype.slice.call(arguments);
                a[0] = t.coerce(a[0]), "string" != typeof a[0] && (a = ["%o"].concat(a));
                var s = 0;
                a[0] = a[0].replace(/%([a-z%])/g, function(n, r) {
                    if ("%%" === n) return n;
                    s++;
                    var o = t.formatters[r];
                    if ("function" == typeof o) {
                        var i = a[s];
                        n = o.call(e, i), a.splice(s, 1), s--
                    }
                    return n
                }), "function" == typeof t.formatArgs && (a = t.formatArgs.apply(e, a));
                var u = o.log || t.log || console.log.bind(console);
                u.apply(e, a)
            }
            n.enabled = !1, o.enabled = !0;
            var i = t.enabled(e) ? o : n;
            return i.namespace = e, i
        }

        function i(e) {
            t.save(e);
            for (var n = (e || "").split(/[\s,]+/), r = n.length, o = 0; o < r; o++) n[o] && (e = n[o].replace(/\*/g, ".*?"), "-" === e[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
        }

        function a() {
            t.enable("")
        }

        function s(e) {
            var n, r;
            for (n = 0, r = t.skips.length; n < r; n++)
                if (t.skips[n].test(e)) return !1;
            for (n = 0, r = t.names.length; n < r; n++)
                if (t.names[n].test(e)) return !0;
            return !1
        }

        function u(e) {
            return e instanceof Error ? e.stack || e.message : e
        }
        t = e.exports = o, t.coerce = u, t.disable = a, t.enable = i, t.enabled = s, t.humanize = n(77), t.names = [], t.skips = [], t.formatters = {};
        var c, f = 0
    },
    function(e, t) {
        function n() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }

        function r(e) {
            return "function" == typeof e
        }

        function o(e) {
            return "number" == typeof e
        }

        function i(e) {
            return "object" == typeof e && null !== e
        }

        function a(e) {
            return void 0 === e
        }
        e.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(e) {
            if (!o(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
            return this._maxListeners = e, this
        }, n.prototype.emit = function(e) {
            var t, n, o, s, u, c;
            if (this._events || (this._events = {}), "error" === e && (!this._events.error || i(this._events.error) && !this._events.error.length)) {
                if (t = arguments[1], t instanceof Error) throw t;
                var f = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                throw f.context = t, f
            }
            if (n = this._events[e], a(n)) return !1;
            if (r(n)) switch (arguments.length) {
                case 1:
                    n.call(this);
                    break;
                case 2:
                    n.call(this, arguments[1]);
                    break;
                case 3:
                    n.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    s = Array.prototype.slice.call(arguments, 1), n.apply(this, s)
            } else if (i(n))
                for (s = Array.prototype.slice.call(arguments, 1), c = n.slice(), o = c.length, u = 0; u < o; u++) c[u].apply(this, s);
            return !0
        }, n.prototype.addListener = function(e, t) {
            var o;
            if (!r(t)) throw TypeError("listener must be a function");
            return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, r(t.listener) ? t.listener : t), this._events[e] ? i(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, i(this._events[e]) && !this._events[e].warned && (o = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, o && o > 0 && this._events[e].length > o && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace())), this
        }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(e, t) {
            function n() {
                this.removeListener(e, n), o || (o = !0, t.apply(this, arguments))
            }
            if (!r(t)) throw TypeError("listener must be a function");
            var o = !1;
            return n.listener = t, this.on(e, n), this
        }, n.prototype.removeListener = function(e, t) {
            var n, o, a, s;
            if (!r(t)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[e]) return this;
            if (n = this._events[e], a = n.length, o = -1, n === t || r(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
            else if (i(n)) {
                for (s = a; s-- > 0;)
                    if (n[s] === t || n[s].listener && n[s].listener === t) {
                        o = s;
                        break
                    }
                if (o < 0) return this;
                1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(o, 1), this._events.removeListener && this.emit("removeListener", e, t)
            }
            return this
        }, n.prototype.removeAllListeners = function(e) {
            var t, n;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
            if (0 === arguments.length) {
                for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if (n = this._events[e], r(n)) this.removeListener(e, n);
            else if (n)
                for (; n.length;) this.removeListener(e, n[n.length - 1]);
            return delete this._events[e], this
        }, n.prototype.listeners = function(e) {
            var t;
            return t = this._events && this._events[e] ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
        }, n.prototype.listenerCount = function(e) {
            if (this._events) {
                var t = this._events[e];
                if (r(t)) return 1;
                if (t) return t.length
            }
            return 0
        }, n.listenerCount = function(e, t) {
            return e.listenerCount(t)
        }
    },
    function(e, t, n) {
        ! function(t) {
            "use strict";

            function n() {
                console.log.apply(console, arguments)
            }

            function r(e, t) {
                var n;
                this.list = e, this.options = t = t || {};
                for (n in s) s.hasOwnProperty(n) && ("boolean" == typeof s[n] ? this.options[n] = n in t ? t[n] : s[n] : this.options[n] = t[n] || s[n])
            }

            function o(e, t, n) {
                var r, a, s, u, c, f;
                if (t) {
                    if (s = t.indexOf("."), s !== -1 ? (r = t.slice(0, s), a = t.slice(s + 1)) : r = t, u = e[r], null !== u && void 0 !== u)
                        if (a || "string" != typeof u && "number" != typeof u)
                            if (i(u))
                                for (c = 0, f = u.length; c < f; c++) o(u[c], a, n);
                            else a && o(u, a, n);
                    else n.push(u)
                } else n.push(e);
                return n
            }

            function i(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }

            function a(e, t) {
                t = t || {}, this.options = t, this.options.location = t.location || a.defaultOptions.location, this.options.distance = "distance" in t ? t.distance : a.defaultOptions.distance, this.options.threshold = "threshold" in t ? t.threshold : a.defaultOptions.threshold, this.options.maxPatternLength = t.maxPatternLength || a.defaultOptions.maxPatternLength, this.pattern = t.caseSensitive ? e : e.toLowerCase(), this.patternLen = e.length, this.patternLen <= this.options.maxPatternLength && (this.matchmask = 1 << this.patternLen - 1, this.patternAlphabet = this._calculatePatternAlphabet())
            }
            var s = {
                id: null,
                caseSensitive: !1,
                include: [],
                shouldSort: !0,
                searchFn: a,
                sortFn: function(e, t) {
                    return e.score - t.score
                },
                getFn: o,
                keys: [],
                verbose: !1,
                tokenize: !1,
                matchAllTokens: !1,
                tokenSeparator: / +/g,
                minMatchCharLength: 1,
                findAllMatches: !1
            };
            r.VERSION = "2.6.2", r.prototype.set = function(e) {
                return this.list = e, e
            }, r.prototype.search = function(e) {
                this.options.verbose && n("\nSearch term:", e, "\n"), this.pattern = e, this.results = [], this.resultMap = {}, this._keyMap = null, this._prepareSearchers(), this._startSearch(), this._computeScore(), this._sort();
                var t = this._format();
                return t
            }, r.prototype._prepareSearchers = function() {
                var e = this.options,
                    t = this.pattern,
                    n = e.searchFn,
                    r = t.split(e.tokenSeparator),
                    o = 0,
                    i = r.length;
                if (this.options.tokenize)
                    for (this.tokenSearchers = []; o < i; o++) this.tokenSearchers.push(new n(r[o], e));
                this.fullSeacher = new n(t, e)
            }, r.prototype._startSearch = function() {
                var e, t, n, r, o = this.options,
                    i = o.getFn,
                    a = this.list,
                    s = a.length,
                    u = this.options.keys,
                    c = u.length,
                    f = null;
                if ("string" == typeof a[0])
                    for (n = 0; n < s; n++) this._analyze("", a[n], n, n);
                else
                    for (this._keyMap = {}, n = 0; n < s; n++)
                        for (f = a[n], r = 0; r < c; r++) {
                            if (e = u[r], "string" != typeof e) {
                                if (t = 1 - e.weight || 1, this._keyMap[e.name] = {
                                        weight: t
                                    }, e.weight <= 0 || e.weight > 1) throw new Error("Key weight has to be > 0 and <= 1");
                                e = e.name
                            } else this._keyMap[e] = {
                                weight: 1
                            };
                            this._analyze(e, i(f, e, []), f, n)
                        }
            }, r.prototype._analyze = function(e, t, r, o) {
                var a, s, u, c, f, l, d, h, p, v, y, g, m, _, b, w = this.options,
                    k = !1;
                if (void 0 !== t && null !== t) {
                    s = [];
                    var E = 0;
                    if ("string" == typeof t) {
                        if (a = t.split(w.tokenSeparator), w.verbose && n("---------\nKey:", e), this.options.tokenize) {
                            for (_ = 0; _ < this.tokenSearchers.length; _++) {
                                for (h = this.tokenSearchers[_], w.verbose && n("Pattern:", h.pattern), p = [], g = !1, b = 0; b < a.length; b++) {
                                    v = a[b], y = h.search(v);
                                    var x = {};
                                    y.isMatch ? (x[v] = y.score, k = !0, g = !0, s.push(y.score)) : (x[v] = 1, this.options.matchAllTokens || s.push(1)), p.push(x)
                                }
                                g && E++, w.verbose && n("Token scores:", p)
                            }
                            for (c = s[0], l = s.length, _ = 1; _ < l; _++) c += s[_];
                            c /= l, w.verbose && n("Token score average:", c)
                        }
                        d = this.fullSeacher.search(t), w.verbose && n("Full text score:", d.score), f = d.score, void 0 !== c && (f = (f + c) / 2), w.verbose && n("Score average:", f), m = !this.options.tokenize || !this.options.matchAllTokens || E >= this.tokenSearchers.length, w.verbose && n("Check Matches", m), (k || d.isMatch) && m && (u = this.resultMap[o], u ? u.output.push({
                            key: e,
                            score: f,
                            matchedIndices: d.matchedIndices
                        }) : (this.resultMap[o] = {
                            item: r,
                            output: [{
                                key: e,
                                score: f,
                                matchedIndices: d.matchedIndices
                            }]
                        }, this.results.push(this.resultMap[o])))
                    } else if (i(t))
                        for (_ = 0; _ < t.length; _++) this._analyze(e, t[_], r, o)
                }
            }, r.prototype._computeScore = function() {
                var e, t, r, o, i, a, s, u, c, f = this._keyMap,
                    l = this.results;
                for (this.options.verbose && n("\n\nComputing score:\n"), e = 0; e < l.length; e++) {
                    for (r = 0, o = l[e].output, i = o.length, u = 1, t = 0; t < i; t++) a = o[t].score, s = f ? f[o[t].key].weight : 1, c = a * s, 1 !== s ? u = Math.min(u, c) : (r += c, o[t].nScore = c);
                    1 === u ? l[e].score = r / i : l[e].score = u, this.options.verbose && n(l[e])
                }
            }, r.prototype._sort = function() {
                var e = this.options;
                e.shouldSort && (e.verbose && n("\n\nSorting...."), this.results.sort(e.sortFn))
            }, r.prototype._format = function() {
                var e, t, r, o, i, a = this.options,
                    s = a.getFn,
                    u = [],
                    c = this.results,
                    f = a.include;
                for (a.verbose && n("\n\nOutput:\n\n", c), o = a.id ? function(e) {
                        c[e].item = s(c[e].item, a.id, [])[0]
                    } : function() {}, i = function(e) {
                        var t, n, r, o, i, a = c[e];
                        if (f.length > 0) {
                            if (t = {
                                    item: a.item
                                }, f.indexOf("matches") !== -1)
                                for (r = a.output, t.matches = [], n = 0; n < r.length; n++) o = r[n], i = {
                                    indices: o.matchedIndices
                                }, o.key && (i.key = o.key), t.matches.push(i);
                            f.indexOf("score") !== -1 && (t.score = c[e].score)
                        } else t = a.item;
                        return t
                    }, t = 0, r = c.length; t < r; t++) o(t), e = i(t), u.push(e);
                return u
            }, a.defaultOptions = {
                location: 0,
                distance: 100,
                threshold: .6,
                maxPatternLength: 32
            }, a.prototype._calculatePatternAlphabet = function() {
                var e = {},
                    t = 0;
                for (t = 0; t < this.patternLen; t++) e[this.pattern.charAt(t)] = 0;
                for (t = 0; t < this.patternLen; t++) e[this.pattern.charAt(t)] |= 1 << this.pattern.length - t - 1;
                return e
            }, a.prototype._bitapScore = function(e, t) {
                var n = e / this.patternLen,
                    r = Math.abs(this.options.location - t);
                return this.options.distance ? n + r / this.options.distance : r ? 1 : n
            }, a.prototype.search = function(e) {
                var t, n, r, o, i, a, s, u, c, f, l, d, h, p, v, y, g, m, _, b, w, k, E, x = this.options;
                if (e = x.caseSensitive ? e : e.toLowerCase(), this.pattern === e) return {
                    isMatch: !0,
                    score: 0,
                    matchedIndices: [
                        [0, e.length - 1]
                    ]
                };
                if (this.patternLen > x.maxPatternLength) {
                    if (m = e.match(new RegExp(this.pattern.replace(x.tokenSeparator, "|"))), _ = !!m)
                        for (w = [], t = 0, k = m.length; t < k; t++) E = m[t], w.push([e.indexOf(E), E.length - 1]);
                    return {
                        isMatch: _,
                        score: _ ? .5 : 1,
                        matchedIndices: w
                    }
                }
                for (o = x.findAllMatches, i = x.location, r = e.length, a = x.threshold, s = e.indexOf(this.pattern, i), b = [], t = 0; t < r; t++) b[t] = 0;
                for (s != -1 && (a = Math.min(this._bitapScore(0, s), a), s = e.lastIndexOf(this.pattern, i + this.patternLen), s != -1 && (a = Math.min(this._bitapScore(0, s), a))), s = -1, y = 1, g = [], f = this.patternLen + r, t = 0; t < this.patternLen; t++) {
                    for (u = 0, c = f; u < c;) this._bitapScore(t, i + c) <= a ? u = c : f = c, c = Math.floor((f - u) / 2 + u);
                    for (f = c, l = Math.max(1, i - c + 1), d = o ? r : Math.min(i + c, r) + this.patternLen, h = Array(d + 2), h[d + 1] = (1 << t) - 1, n = d; n >= l; n--)
                        if (v = this.patternAlphabet[e.charAt(n - 1)], v && (b[n - 1] = 1), 0 === t ? h[n] = (h[n + 1] << 1 | 1) & v : h[n] = (h[n + 1] << 1 | 1) & v | ((p[n + 1] | p[n]) << 1 | 1) | p[n + 1], h[n] & this.matchmask && (y = this._bitapScore(t, n - 1), y <= a)) {
                            if (a = y, s = n - 1, g.push(s), !(s > i)) break;
                            l = Math.max(1, 2 * i - s)
                        }
                    if (this._bitapScore(t + 1, i) > a) break;
                    p = h
                }
                return w = this._getMatchedIndices(b), {
                    isMatch: s >= 0,
                    score: 0 === y ? .001 : y,
                    matchedIndices: w
                }
            }, a.prototype._getMatchedIndices = function(e) {
                for (var t, n = [], r = -1, o = -1, i = 0, a = e.length; i < a; i++) t = e[i], t && r === -1 ? r = i : t || r === -1 || (o = i - 1, o - r + 1 >= this.options.minMatchCharLength && n.push([r, o]), r = -1);
                return e[i - 1] && i - 1 - r + 1 >= this.options.minMatchCharLength && n.push([r, i - 1]), n
            }, e.exports = r
        }(this)
    },
    function(e, t) {
        var n = Array.isArray,
            r = Object.prototype.toString;
        e.exports = n || function(e) {
            return !!e && "[object Array]" == r.call(e)
        }
    },
    function(e, t, n) {
        "use strict";

        function r() {}

        function o(e) {
            if ("function" != typeof e) throw new TypeError("resolver must be a function");
            this.state = m, this.queue = [], this.outcome = void 0, e !== r && u(this, e)
        }

        function i(e, t, n) {
            this.promise = e, "function" == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), "function" == typeof n && (this.onRejected = n, this.callRejected = this.otherCallRejected)
        }

        function a(e, t, n) {
            p(function() {
                var r;
                try {
                    r = t(n)
                } catch (t) {
                    return v.reject(e, t)
                }
                r === e ? v.reject(e, new TypeError("Cannot resolve promise with itself")) : v.resolve(e, r)
            })
        }

        function s(e) {
            var t = e && e.then;
            if (e && "object" == typeof e && "function" == typeof t) return function() {
                t.apply(e, arguments)
            }
        }

        function u(e, t) {
            function n(t) {
                i || (i = !0, v.reject(e, t))
            }

            function r(t) {
                i || (i = !0, v.resolve(e, t))
            }

            function o() {
                t(r, n)
            }
            var i = !1,
                a = c(o);
            "error" === a.status && n(a.value)
        }

        function c(e, t) {
            var n = {};
            try {
                n.value = e(t), n.status = "success"
            } catch (e) {
                n.status = "error", n.value = e
            }
            return n
        }

        function f(e) {
            return e instanceof this ? e : v.resolve(new this(r), e)
        }

        function l(e) {
            var t = new this(r);
            return v.reject(t, e)
        }

        function d(e) {
            function t(e, t) {
                function r(e) {
                    a[t] = e, ++s !== o || i || (i = !0, v.resolve(c, a))
                }
                n.resolve(e).then(r, function(e) {
                    i || (i = !0, v.reject(c, e))
                })
            }
            var n = this;
            if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
            var o = e.length,
                i = !1;
            if (!o) return this.resolve([]);
            for (var a = new Array(o), s = 0, u = -1, c = new this(r); ++u < o;) t(e[u], u);
            return c
        }

        function h(e) {
            function t(e) {
                n.resolve(e).then(function(e) {
                    i || (i = !0, v.resolve(s, e))
                }, function(e) {
                    i || (i = !0, v.reject(s, e))
                })
            }
            var n = this;
            if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
            var o = e.length,
                i = !1;
            if (!o) return this.resolve([]);
            for (var a = -1, s = new this(r); ++a < o;) t(e[a]);
            return s
        }
        var p = n(25),
            v = {},
            y = ["REJECTED"],
            g = ["FULFILLED"],
            m = ["PENDING"];
        e.exports = o, o.prototype.catch = function(e) {
            return this.then(null, e)
        }, o.prototype.then = function(e, t) {
            if ("function" != typeof e && this.state === g || "function" != typeof t && this.state === y) return this;
            var n = new this.constructor(r);
            if (this.state !== m) {
                var o = this.state === g ? e : t;
                a(n, o, this.outcome)
            } else this.queue.push(new i(n, e, t));
            return n
        }, i.prototype.callFulfilled = function(e) {
            v.resolve(this.promise, e)
        }, i.prototype.otherCallFulfilled = function(e) {
            a(this.promise, this.onFulfilled, e)
        }, i.prototype.callRejected = function(e) {
            v.reject(this.promise, e)
        }, i.prototype.otherCallRejected = function(e) {
            a(this.promise, this.onRejected, e)
        }, v.resolve = function(e, t) {
            var n = c(s, t);
            if ("error" === n.status) return v.reject(e, n.value);
            var r = n.value;
            if (r) u(e, r);
            else {
                e.state = g, e.outcome = t;
                for (var o = -1, i = e.queue.length; ++o < i;) e.queue[o].callFulfilled(t)
            }
            return e
        }, v.reject = function(e, t) {
            e.state = y, e.outcome = t;
            for (var n = -1, r = e.queue.length; ++n < r;) e.queue[n].callRejected(t);
            return e
        }, o.resolve = f, o.reject = l, o.all = d, o.race = h
    },
    function(e, t) {
        function n(e) {
            if (e = "" + e, !(e.length > 1e4)) {
                var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                if (t) {
                    var n = parseFloat(t[1]),
                        r = (t[2] || "ms").toLowerCase();
                    switch (r) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return n * f;
                        case "days":
                        case "day":
                        case "d":
                            return n * c;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return n * u;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return n * s;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return n * a;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return n
                    }
                }
            }
        }

        function r(e) {
            return e >= c ? Math.round(e / c) + "d" : e >= u ? Math.round(e / u) + "h" : e >= s ? Math.round(e / s) + "m" : e >= a ? Math.round(e / a) + "s" : e + "ms"
        }

        function o(e) {
            return i(e, c, "day") || i(e, u, "hour") || i(e, s, "minute") || i(e, a, "second") || e + " ms"
        }

        function i(e, t, n) {
            if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
        }
        var a = 1e3,
            s = 60 * a,
            u = 60 * s,
            c = 24 * u,
            f = 365.25 * c;
        e.exports = function(e, t) {
            return t = t || {}, "string" == typeof e ? n(e) : t.long ? o(e) : r(e)
        }
    },
    function(e, t) {
        "use strict";

        function n(e, t, n) {
            for (var r = "", o = n - e.length; r.length < o;) r += t;
            return r
        }
        t.padLeft = function(e, t, r) {
            var o = n(e, t, r);
            return o + e
        }, t.padRight = function(e, t, r) {
            var o = n(e, t, r);
            return e + o
        }, t.stringLexCompare = function(e, t) {
            var n, r = e.length,
                o = t.length;
            for (n = 0; n < r; n++) {
                if (n === o) return 1;
                var i = e.charAt(n),
                    a = t.charAt(n);
                if (i !== a) return i < a ? -1 : 1
            }
            return r < o ? -1 : 0
        }, t.intToDecimalForm = function(e) {
            var t = e < 0,
                n = "";
            do {
                var r = t ? -Math.ceil(e % 10) : Math.floor(e % 10);
                n = r + n, e = t ? Math.ceil(e / 10) : Math.floor(e / 10)
            } while (e);
            return t && "0" !== n && (n = "-" + n), n
        }
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            if (!e) return "undefined";
            switch (typeof e) {
                case "function":
                    return e.toString();
                case "string":
                    return e.toString();
                default:
                    return JSON.stringify(e)
            }
        }
        var o = n(47),
            i = n(36),
            a = i.Promise;
        e.exports = function(e) {
            var t = e.db,
                n = e.viewName,
                s = e.map,
                u = e.reduce,
                c = e.temporary,
                f = e.pluginName,
                l = r(s) + r(u) + "undefined";
            if (!c && t._cachedViews) {
                var d = t._cachedViews[l];
                if (d) return a.resolve(d)
            }
            return t.info().then(function(e) {
                function r(e) {
                    e.views = e.views || {};
                    var t = n;
                    t.indexOf("/") === -1 && (t = n + "/" + n);
                    var r = e.views[t] = e.views[t] || {};
                    if (!r[a]) return r[a] = !0, e
                }
                var a = e.db_name + "-mrview-" + (c ? "temp" : i.MD5(l));
                return o(t, "_local/" + f, r).then(function() {
                    return t.registerDependentDatabase(a).then(function(e) {
                        var n = e.db;
                        n.auto_compaction = !0;
                        var r = {
                            name: a,
                            db: n,
                            sourceDB: t,
                            adapter: t.adapter,
                            mapFun: s,
                            reduceFun: u
                        };
                        return r.db.get("_local/lastSeq").catch(function(e) {
                            if (404 !== e.status) throw e
                        }).then(function(e) {
                            return r.seq = e ? e.seq : 0, c || (t._cachedViews = t._cachedViews || {}, t._cachedViews[l] = r, r.db.on("destroyed", function() {
                                delete t._cachedViews[l]
                            })), r
                        })
                    })
                })
            })
        }
    },
    function(e, t, n) {
        (function(t) {
            "use strict";

            function r(e) {
                this.status = 400, this.name = "query_parse_error", this.message = e, this.error = !0;
                try {
                    Error.captureStackTrace(this, r)
                } catch (e) {}
            }

            function o(e) {
                this.status = 404, this.name = "not_found", this.message = e, this.error = !0;
                try {
                    Error.captureStackTrace(this, o)
                } catch (e) {}
            }

            function i(e) {
                return e.indexOf("/") === -1 ? [e, e] : e.split("/")
            }

            function a(e) {
                return 1 === e.length && /^1-/.test(e[0].rev)
            }

            function s(e, t) {
                var n = m(e.key, t.key);
                return 0 !== n ? n : m(e.value, t.value)
            }

            function u(e, t, n) {
                return n = n || 0, "number" == typeof t ? e.slice(n, t + n) : n > 0 ? e.slice(n) : e
            }

            function c(e) {
                var t = e.value,
                    n = t && "object" == typeof t && t._id || e.id;
                return n
            }

            function f(e, t) {
                try {
                    e.emit("error", t)
                } catch (e) {
                    console.error("The user's map/reduce function threw an uncaught error.\nYou can debug this error by doing:\nmyDatabase.on('error', function (err) { debugger; });\nPlease double-check your map/reduce function."), console.error(t)
                }
            }

            function l(e, t, n) {
                try {
                    return {
                        output: t.apply(null, n)
                    }
                } catch (t) {
                    return f(e, t), {
                        error: t
                    }
                }
            }

            function d(e, t) {
                var n = e.descending ? "endkey" : "startkey",
                    o = e.descending ? "startkey" : "endkey";
                if ("undefined" != typeof e[n] && "undefined" != typeof e[o] && m(e[n], e[o]) > 0) throw new r("No rows can match your key range, reverse your start_key and end_key or set {descending : true}");
                if (t.reduce && e.reduce !== !1) {
                    if (e.include_docs) throw new r("{include_docs:true} is invalid for reduce");
                    if (e.keys && e.keys.length > 1 && !e.group && !e.group_level) throw new r("Multi-key fetches for reduce views must use {group: true}")
                }
                if (e.group_level) {
                    if ("number" != typeof e.group_level) throw new r('Invalid value for integer: "' + e.group_level + '"');
                    if (e.group_level < 0) throw new r('Invalid value for positive integer: "' + e.group_level + '"')
                }
            }

            function h(e) {
                return function(t) {
                    if (404 === t.status) return e;
                    throw t
                }
            }

            function p(e) {
                function n(e, t, n) {
                    function r() {
                        return a(l) ? E.resolve(u) : t.db.get(s).catch(h(u))
                    }

                    function o(e) {
                        return e.keys.length ? t.db.allDocs({
                            keys: e.keys,
                            include_docs: !0
                        }) : E.resolve({
                            rows: []
                        })
                    }

                    function i(e, t) {
                        for (var n = [], r = {}, o = 0, i = t.rows.length; o < i; o++) {
                            var a = t.rows[o],
                                s = a.doc;
                            if (s && (n.push(s), r[s._id] = !0, s._deleted = !f[s._id], !s._deleted)) {
                                var u = f[s._id];
                                "value" in u && (s.value = u.value)
                            }
                        }
                        var c = Object.keys(f);
                        return c.forEach(function(e) {
                            if (!r[e]) {
                                var t = {
                                        _id: e
                                    },
                                    o = f[e];
                                "value" in o && (t.value = o.value), n.push(t)
                            }
                        }), e.keys = k.uniq(c.concat(e.keys)), n.push(e), n
                    }
                    var s = "_local/doc_" + e,
                        u = {
                            _id: s,
                            keys: []
                        },
                        c = n[e],
                        f = c.indexableKeysToKeyValues,
                        l = c.changes;
                    return r().then(function(e) {
                        return o(e).then(function(t) {
                            return i(e, t)
                        })
                    })
                }

                function r(e, t, r) {
                    var o = "_local/lastSeq";
                    return e.db.get(o).catch(h({
                        _id: o,
                        seq: 0
                    })).then(function(o) {
                        var i = Object.keys(t);
                        return E.all(i.map(function(r) {
                            return n(r, e, t)
                        })).then(function(t) {
                            var n = k.flatten(t);
                            return o.seq = r, n.push(o), e.db.bulkDocs({
                                docs: n
                            })
                        })
                    })
                }

                function f(e) {
                    var t = "string" == typeof e ? e : e.name,
                        n = x[t];
                    return n || (n = x[t] = new g), n
                }

                function p(e) {
                    return k.sequentialize(f(e), function() {
                        return v(e)
                    })()
                }

                function v(e) {
                    function t(e, t) {
                        var n = {
                            id: i._id,
                            key: b(e)
                        };
                        "undefined" != typeof t && null !== t && (n.value = b(t)), o.push(n)
                    }

                    function n(t, n) {
                        return function() {
                            return r(e, t, n)
                        }
                    }
                    var o, i, a = C(e.mapFun, t),
                        u = e.seq || 0,
                        c = new g;
                    return new E(function(t, r) {
                        function f() {
                            c.finish().then(function() {
                                e.seq = u, t()
                            })
                        }

                        function d() {
                            function t(e) {
                                r(e)
                            }
                            e.sourceDB.changes({
                                conflicts: !0,
                                include_docs: !0,
                                style: "all_docs",
                                since: u,
                                limit: A
                            }).on("complete", function(t) {
                                var r = t.results;
                                if (!r.length) return f();
                                for (var h = {}, p = 0, v = r.length; p < v; p++) {
                                    var y = r[p];
                                    if ("_" !== y.doc._id[0]) {
                                        o = [], i = y.doc, i._deleted || l(e.sourceDB, a, [i]), o.sort(s);
                                        for (var g, b = {}, w = 0, k = o.length; w < k; w++) {
                                            var E = o[w],
                                                x = [E.key, E.id];
                                            0 === m(E.key, g) && x.push(w);
                                            var S = _(x);
                                            b[S] = E, g = E.key
                                        }
                                        h[y.doc._id] = {
                                            indexableKeysToKeyValues: b,
                                            changes: y.changes
                                        }
                                    }
                                    u = y.seq
                                }
                                return c.add(n(h, u)), r.length < A ? f() : d()
                            }).on("error", t)
                        }
                        d()
                    })
                }

                function O(e, t, n) {
                    0 === n.group_level && delete n.group_level;
                    var r = n.group || n.group_level,
                        o = D(e.reduceFun),
                        i = [],
                        a = n.group_level;
                    t.forEach(function(e) {
                        var t = i[i.length - 1],
                            n = r ? e.key : null;
                        return r && Array.isArray(n) && "number" == typeof a && (n = n.length > a ? n.slice(0, a) : n), t && 0 === m(t.key[0][0], n) ? (t.key.push([n, e.id]), void t.value.push(e.value)) : void i.push({
                            key: [
                                [n, e.id]
                            ],
                            value: [e.value]
                        })
                    });
                    for (var s = 0, c = i.length; s < c; s++) {
                        var f = i[s],
                            d = l(e.sourceDB, o, [f.key, f.value, !1]);
                        if (d.error && /BuiltInError/.test(d.error.constructor)) throw d.error;
                        f.value = d.error ? null : d.output, f.key = f.key[0][0]
                    }
                    return {
                        rows: u(i, n.limit, n.skip)
                    }
                }

                function j(e, t) {
                    return k.sequentialize(f(e), function() {
                        return q(e, t)
                    })()
                }

                function q(e, t) {
                    function n(t) {
                        return t.include_docs = !0, e.db.allDocs(t).then(function(e) {
                            return o = e.total_rows, e.rows.map(function(e) {
                                if ("value" in e.doc && "object" == typeof e.doc.value && null !== e.doc.value) {
                                    var t = Object.keys(e.doc.value).sort(),
                                        n = ["id", "key", "value"];
                                    if (!(t < n || t > n)) return e.doc.value
                                }
                                var r = y.parseIndexableString(e.doc._id);
                                return {
                                    key: r[0],
                                    id: r[1],
                                    value: "value" in e.doc ? e.doc.value : null
                                }
                            })
                        })
                    }

                    function r(n) {
                        var r;
                        if (r = i ? O(e, n, t) : {
                                total_rows: o,
                                offset: a,
                                rows: n
                            }, t.include_docs) {
                            var s = k.uniq(n.map(c));
                            return e.sourceDB.allDocs({
                                keys: s,
                                include_docs: !0,
                                conflicts: t.conflicts,
                                attachments: t.attachments,
                                binary: t.binary
                            }).then(function(e) {
                                var t = {};
                                return e.rows.forEach(function(e) {
                                    e.doc && (t["$" + e.id] = e.doc)
                                }), n.forEach(function(e) {
                                    var n = c(e),
                                        r = t["$" + n];
                                    r && (e.doc = r)
                                }), r
                            })
                        }
                        return r
                    }
                    var o, i = e.reduceFun && t.reduce !== !1,
                        a = t.skip || 0;
                    "undefined" == typeof t.keys || t.keys.length || (t.limit = 0, delete t.keys);
                    var s = function(e) {
                        return e.reduce(function(e, t) {
                            return e.concat(t)
                        })
                    };
                    if ("undefined" != typeof t.keys) {
                        var u = t.keys,
                            f = u.map(function(e) {
                                var t = {
                                    startkey: _([e]),
                                    endkey: _([e, {}])
                                };
                                return n(t)
                            });
                        return E.all(f).then(s).then(r)
                    }
                    var l = {
                        descending: t.descending
                    };
                    if ("undefined" != typeof t.startkey && (l.startkey = _(t.descending ? [t.startkey, {}] : [t.startkey])), "undefined" != typeof t.endkey) {
                        var d = t.inclusive_end !== !1;
                        t.descending && (d = !d), l.endkey = _(d ? [t.endkey, {}] : [t.endkey])
                    }
                    if ("undefined" != typeof t.key) {
                        var h = _([t.key]),
                            p = _([t.key, {}]);
                        l.descending ? (l.endkey = h, l.startkey = p) : (l.startkey = h, l.endkey = p)
                    }
                    return i || ("number" == typeof t.limit && (l.limit = t.limit), l.skip = a), n(l).then(r)
                }

                function T(e) {
                    return e.get("_local/" + L).then(function(t) {
                        var n = {};
                        Object.keys(t.views).forEach(function(e) {
                            var t = i(e),
                                r = "_design/" + t[0],
                                o = t[1];
                            n[r] = n[r] || {}, n[r][o] = !0
                        });
                        var r = {
                            keys: Object.keys(n),
                            include_docs: !0
                        };
                        return e.allDocs(r).then(function(r) {
                            var o = {};
                            r.rows.forEach(function(e) {
                                var r = e.key.substring(8);
                                Object.keys(n[e.key]).forEach(function(n) {
                                    var i = r + "/" + n;
                                    t.views[i] || (i = n);
                                    var a = Object.keys(t.views[i]),
                                        s = e.doc && e.doc.views && e.doc.views[n];
                                    a.forEach(function(e) {
                                        o[e] = o[e] || s
                                    })
                                })
                            });
                            var i = Object.keys(o).filter(function(e) {
                                    return !o[e]
                                }),
                                a = i.map(function(t) {
                                    return k.sequentialize(f(t), function() {
                                        return new e.constructor(t, e.__opts).destroy()
                                    })()
                                });
                            return E.all(a).then(function() {
                                return {
                                    ok: !0
                                }
                            })
                        })
                    }, h({
                        ok: !0
                    }))
                }

                function I(e, n, r) {
                    if ("string" != typeof n) {
                        d(r, n);
                        var a = {
                            db: e,
                            viewName: "temp_view/temp_view",
                            map: n.map,
                            reduce: n.reduce,
                            temporary: !0,
                            pluginName: L
                        };
                        return S.add(function() {
                            return w(a).then(function(e) {
                                function t() {
                                    return e.db.destroy()
                                }
                                return k.fin(p(e).then(function() {
                                    return j(e, r)
                                }), t)
                            })
                        }), S.finish()
                    }
                    var s = n,
                        u = i(s),
                        c = u[0],
                        f = u[1];
                    return e.get("_design/" + c).then(function(n) {
                        var i = n.views && n.views[f];
                        if (!i) throw new o("ddoc " + n._id + " has no view named " + f);
                        N(n, f), d(r, i);
                        var a = {
                            db: e,
                            viewName: s,
                            map: i.map,
                            reduce: i.reduce,
                            pluginName: L
                        };
                        return w(a).then(function(e) {
                            return "ok" === r.stale || "update_after" === r.stale ? ("update_after" === r.stale && t.nextTick(function() {
                                p(e)
                            }), j(e, r)) : p(e).then(function() {
                                return j(e, r)
                            })
                        })
                    })
                }
                var L = e.name,
                    C = e.mapper,
                    D = e.reducer,
                    N = e.ddocValidator,
                    R = function(e, t, n) {
                        var r = this;
                        "function" == typeof t && (n = t, t = {}), t = k.extend(!0, {}, t), "function" == typeof e && (e = {
                            map: e
                        });
                        var o = E.resolve().then(function() {
                            return I(r, e, t)
                        });
                        return k.promisedCallback(o, n), o
                    },
                    M = k.callbackify(function() {
                        var e = this;
                        return T(e)
                    });
                return {
                    query: R,
                    viewCleanup: M
                }
            }
            var v, y = n(26),
                g = n(81),
                m = y.collate,
                _ = y.toIndexableString,
                b = y.normalizeKey,
                w = n(79);
            v = "undefined" != typeof console && "function" == typeof console.log ? Function.prototype.bind.call(console.log, console) : function() {};
            var k = n(36),
                E = k.Promise,
                x = {},
                S = new g,
                A = 50;
            k.inherits(r, Error), k.inherits(o, Error), e.exports = p
        }).call(t, n(9))
    },
    function(e, t, n) {
        "use strict";

        function r() {
            this.promise = new o(function(e) {
                e()
            })
        }
        var o = n(36).Promise;
        r.prototype.add = function(e) {
            return this.promise = this.promise.catch(function() {}).then(function() {
                return e()
            }), this.promise
        }, r.prototype.finish = function() {
            return this.promise
        }, e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            t = s(t), e.request({
                method: "POST",
                url: "_index",
                body: t
            }, n)
        }

        function o(e, t, n) {
            e.request({
                method: "POST",
                url: "_find",
                body: t
            }, n)
        }

        function i(e, t) {
            e.request({
                method: "GET",
                url: "_index"
            }, t)
        }

        function a(e, t, n) {
            var r = t.ddoc,
                o = t.type || "json",
                i = t.name;
            if (!r) return n(new Error("you must provide an index's ddoc"));
            if (!i) return n(new Error("you must provide an index's name"));
            var a = "_index/" + [r, o, i].map(encodeURIComponent).join("/");
            e.request({
                method: "DELETE",
                url: a
            }, n)
        }
        var s = n(49);
        t.createIndex = r, t.find = o, t.getIndexes = i, t.deleteIndex = a
    },
    function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            return s.upsert.call(e, t, n)
        }

        function o(e, t) {
            function n(e) {
                return e._rev && "query" !== e.language && (v = !0), e.language = "query", e.views = e.views || {}, !(y = !!e.views[c]) && (e.views[c] = {
                    map: {
                        fields: i.mergeObjects(t.index.fields)
                    },
                    reduce: "_count",
                    options: {
                        def: o
                    }
                }, e)
            }
            t = d(t);
            var o = i.clone(t.index);
            t.index = l(t.index), f(t.index);
            var s = i.MD5(JSON.stringify(t)),
                c = t.name || "idx-" + s,
                h = t.ddoc || "idx-" + s,
                p = "_design/" + h,
                v = !1,
                y = !1;
            return a("creating index", p), r(e, p, n).then(function() {
                if (v) throw new Error('invalid language for ddoc with id "' + p + '" (should be "query")')
            }).then(function() {
                var t = h + "/" + c;
                return u.query.call(e, t, {
                    limit: 0,
                    reduce: !1
                }).then(function() {
                    return {
                        id: p,
                        name: c,
                        result: y ? "exists" : "created"
                    }
                })
            })
        }
        var i = n(13),
            a = i.log,
            s = n(52),
            u = n(37),
            c = n(16),
            f = c.validateIndex,
            l = c.massageIndexDef,
            d = n(49);
        e.exports = o
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            function n(e) {
                return 1 === Object.keys(e.views).length && e.views[a] ? {
                    _id: r,
                    _deleted: !0
                } : (delete e.views[a], e)
            }
            if (!t.ddoc) throw new Error("you must supply an index.ddoc when deleting");
            if (!t.name) throw new Error("you must supply an index.name when deleting");
            var r = t.ddoc,
                a = t.name;
            return i(e, r, n).then(function() {
                return o.viewCleanup.apply(e)
            }).then(function() {
                return {
                    ok: !0
                }
            })
        }
        var o = n(37),
            i = n(47);
        e.exports = r
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            function t(t) {
                return e.map(function(e) {
                    var n = k(e),
                        r = x(n),
                        o = A(t, r);
                    return o
                })
            }
            return function(e, n) {
                var r = t(e.doc),
                    o = t(n.doc),
                    i = _(r, o);
                return 0 !== i ? i : S.compare(e.doc._id, n.doc._id)
            }
        }

        function o(e, t, n) {
            if (e = e.filter(function(e) {
                    return i(e.doc, t.selector, n)
                }), t.sort) {
                var o = r(t.sort);
                e = e.sort(o), "string" != typeof t.sort[0] && "desc" === E(t.sort[0]) && (e = e.reverse())
            }
            if ("limit" in t || "skip" in t) {
                var a = t.skip || 0,
                    s = ("limit" in t ? t.limit : e.length) + a;
                e = e.slice(a, s)
            }
            return e
        }

        function i(e, t, n) {
            return n.every(function(n) {
                if (a(e)) return !1;
                var r = t[n],
                    o = x(n),
                    i = A(e, o);
                return w(n) ? u(n, r, e) : s(r, e, o, i)
            })
        }

        function a(e) {
            return /^_design\//.test(e._id)
        }

        function s(e, t, n, r) {
            return !e || Object.keys(e).every(function(o) {
                var i = e[o];
                return c(o, t, i, n, r)
            })
        }

        function u(e, t, n) {
            return "$or" === e ? t.some(function(e) {
                return i(n, e, Object.keys(e))
            }) : "$not" === e ? !i(n, t, Object.keys(t)) : !t.find(function(e) {
                return i(n, e, Object.keys(e))
            })
        }

        function c(e, t, n, r, o) {
            if (!O[e]) throw new Error('unknown operator "' + e + '" - should be one of $eq, $lte, $lt, $gt, $gte, $exists, $ne, $in, $nin, $size, $mod, $regex, $elemMatch, $type or $all');
            return O[e](t, n, r, o)
        }

        function f(e) {
            return "undefined" != typeof e && null !== e
        }

        function l(e) {
            return "undefined" != typeof e
        }

        function d(e, t) {
            var n = t[0],
                r = t[1];
            if (0 === n) throw new Error("Bad divisor, cannot divide by zero");
            if (parseInt(n, 10) !== n) throw new Error("Divisor is not an integer");
            if (parseInt(r, 10) !== r) throw new Error("Modulus is not an integer");
            return parseInt(e, 10) === e && e % n === r
        }

        function h(e, t) {
            return t.some(function(t) {
                return e instanceof Array ? e.indexOf(t) > -1 : e === t
            })
        }

        function p(e, t) {
            return t.every(function(t) {
                return e.indexOf(t) > -1
            })
        }

        function v(e, t) {
            return e.length === t
        }

        function y(e, t) {
            var n = new RegExp(t);
            return n.test(e)
        }

        function g(e, t) {
            switch (t) {
                case "null":
                    return null === e;
                case "boolean":
                    return "boolean" == typeof e;
                case "number":
                    return "number" == typeof e;
                case "string":
                    return "string" == typeof e;
                case "array":
                    return e instanceof Array;
                case "object":
                    return "[object Object]" === {}.toString.call(e)
            }
            throw new Error(t + " not supported as a type.Please use one of object, string, array, number, boolean or null.");
        }
        var m = n(75),
            _ = n(26).collate,
            b = n(16),
            w = b.isCombinationalField,
            k = b.getKey,
            E = b.getValue,
            x = b.parseField,
            S = n(13),
            A = S.getFieldFromDoc,
            O = {
                $elemMatch: function(e, t, n, r) {
                    return !!m(r) && 0 !== r.length && ("object" == typeof r[0] ? r.some(function(e) {
                        return i(e, t, Object.keys(t))
                    }) : r.some(function(r) {
                        return s(t, e, n, r)
                    }))
                },
                $eq: function(e, t, n, r) {
                    return l(r) && 0 === _(r, t)
                },
                $gte: function(e, t, n, r) {
                    return l(r) && _(r, t) >= 0
                },
                $gt: function(e, t, n, r) {
                    return l(r) && _(r, t) > 0
                },
                $lte: function(e, t, n, r) {
                    return l(r) && _(r, t) <= 0
                },
                $lt: function(e, t, n, r) {
                    return l(r) && _(r, t) < 0
                },
                $exists: function(e, t, n, r) {
                    return t ? l(r) : !l(r)
                },
                $mod: function(e, t, n, r) {
                    return f(r) && d(r, t)
                },
                $ne: function(e, t, n, r) {
                    return t.every(function(e) {
                        return 0 !== _(r, e)
                    })
                },
                $in: function(e, t, n, r) {
                    return f(r) && h(r, t)
                },
                $nin: function(e, t, n, r) {
                    return f(r) && !h(r, t)
                },
                $size: function(e, t, n, r) {
                    return f(r) && v(r, t)
                },
                $all: function(e, t, n, r) {
                    return m(r) && p(r, t)
                },
                $regex: function(e, t, n, r) {
                    return f(r) && y(r, t)
                },
                $type: function(e, t, n, r) {
                    return g(r, t)
                }
            };
        e.exports = o
    },
    function(e, t, n) {
        "use strict";

        function r(e) {
            return e.ddoc.substring(8) + "/" + e.name
        }

        function o(e, t) {
            var n = s(t);
            return n.descending ? ("endkey" in n && "string" != typeof n.endkey && (n.endkey = ""), "startkey" in n && "string" != typeof n.startkey && (n.limit = 0)) : ("startkey" in n && "string" != typeof n.startkey && (n.startkey = ""), "endkey" in n && "string" != typeof n.endkey && (n.limit = 0)), "key" in n && "string" != typeof n.key && (n.limit = 0), e.allDocs(n)
        }

        function i(e, t) {
            return t.selector && (t.selector = p(t.selector)), t.sort && (t.sort = v(t.sort)), g(t), u(e).then(function(n) {
                var i = l(t, n.indexes),
                    s = i.index;
                m(t, s);
                var u = a.extend(!0, {
                    include_docs: !0,
                    reduce: !1
                }, i.queryOpts);
                if ("startkey" in u && "endkey" in u && c(u.startkey, u.endkey) > 0) return {
                    docs: []
                };
                var d = t.sort && "string" != typeof t.sort[0] && "desc" === y(t.sort[0]);
                return d && (u.descending = !0, u = _(u)), i.inMemoryFields.length || ("limit" in t && (u.limit = t.limit), "skip" in t && (u.skip = t.skip)), w.resolve().then(function() {
                    if ("_all_docs" === s.name) return o(e, u);
                    var t = r(s);
                    return f.query.call(e, t, u)
                }).then(function(e) {
                    u.inclusive_start === !1 && (e.rows = b(e.rows, u.startkey, s)), i.inMemoryFields.length && (e.rows = h(e.rows, t, i.inMemoryFields));
                    var n = {
                        docs: e.rows.map(function(e) {
                            var n = e.doc;
                            return t.fields ? a.pick(n, t.fields) : n
                        })
                    };
                    return s.defaultUsed && (n.warning = "no matching index found, create an index to optimize query time"), n
                })
            })
        }
        var a = n(13),
            s = a.clone,
            u = n(48),
            c = n(26).collate,
            f = n(37),
            l = n(87),
            d = n(16),
            h = n(85),
            p = d.massageSelector,
            v = d.massageSort,
            y = d.getValue,
            g = d.validateFindRequest,
            m = d.validateSort,
            _ = d.reverseOptions,
            b = d.filterInclusiveStart,
            w = a.Promise;
        e.exports = i
    },
    function(e, t, n) {
        "use strict";

        function r(e, t) {
            for (var n = e.def.fields.map(S), r = 0, o = n.length; r < o; r++) {
                var i = n[r];
                if (t === i) return !0
            }
            return !1
        }

        function o(e, t) {
            var n = e[t],
                r = S(n);
            return "$eq" !== r
        }

        function i(e, t) {
            var n = t.def.fields.map(S);
            return e.slice().sort(function(e, t) {
                var r = n.indexOf(e),
                    o = n.indexOf(t);
                return r === -1 && (r = Number.MAX_VALUE), o === -1 && (o = Number.MAX_VALUE), k.compare(r, o)
            })
        }

        function a(e, t, n) {
            n = i(n, e);
            for (var a = !1, s = 0, u = n.length; s < u; s++) {
                var c = n[s];
                if (a || !r(e, c)) return n.slice(s);
                s < u - 1 && o(t, c) && (a = !0)
            }
            return []
        }

        function s(e) {
            var t = [];
            return Object.keys(e).forEach(function(n) {
                var r = e[n];
                Object.keys(r).forEach(function(e) {
                    "$ne" === e && t.push(n)
                })
            }), t
        }

        function u(e, t, n, r) {
            var o = k.flatten(e, a(t, n, r), s(n));
            return i(k.uniq(o), t)
        }

        function c(e, t, n) {
            if (t) {
                var r = k.oneArrayIsStrictSubArrayOfOther(t, e),
                    o = k.oneArrayIsSubArrayOfOther(n, e);
                return r && o
            }
            return k.oneSetIsSubArrayOfOther(n, e)
        }

        function f(e) {
            return q.indexOf(e) === -1
        }

        function l(e, t) {
            var n = e[0],
                r = t[n];
            if ("undefined" == typeof r) return !0;
            var o = Object.keys(r).some(function(e) {
                return !f(e)
            });
            if (!o) return !1;
            var i = 1 === Object.keys(r).length && "$ne" === S(r);
            return !i
        }

        function d(e, t, n, r) {
            var o = e.def.fields.map(S),
                i = c(o, t, n);
            return !!i && l(o, r)
        }

        function h(e, t, n, r) {
            return r.reduce(function(r, o) {
                var i = d(o, n, t, e);
                return i && r.push(o), r
            }, [])
        }

        function p(e, t, n, r) {
            function o(e) {
                for (var t = e.def.fields.map(S), n = 0, r = 0, o = t.length; r < o; r++) {
                    var i = t[r];
                    s[i] && n++
                }
                return n
            }
            var i = h(e, t, n, r);
            if (0 === i.length) {
                var a = r[0];
                return a.defaultUsed = !0, a
            }
            if (1 === i.length) return i[0];
            var s = k.arrayToObject(t);
            return k.max(i, o)
        }

        function v(e, t) {
            switch (e) {
                case "$eq":
                    return {
                        key: t
                    };
                case "$lte":
                    return {
                        endkey: t
                    };
                case "$gte":
                    return {
                        startkey: t
                    };
                case "$lt":
                    return {
                        endkey: t,
                        inclusive_end: !1
                    };
                case "$gt":
                    return {
                        startkey: t,
                        inclusive_start: !1
                    }
            }
        }

        function y(e, t) {
            var n, r = S(t.def.fields[0]),
                o = e[r] || {},
                i = [],
                a = Object.keys(o);
            return a.forEach(function(e) {
                if (f(e)) return void i.push(r);
                var t = o[e],
                    a = v(e, t);
                n = n ? k.mergeObjects([n, a]) : a
            }), {
                queryOpts: n,
                inMemoryFields: i
            }
        }

        function g(e, t) {
            switch (e) {
                case "$eq":
                    return {
                        startkey: t,
                        endkey: t
                    };
                case "$lte":
                    return {
                        endkey: t
                    };
                case "$gte":
                    return {
                        startkey: t
                    };
                case "$lt":
                    return {
                        endkey: t,
                        inclusive_end: !1
                    };
                case "$gt":
                    return {
                        startkey: t,
                        inclusive_start: !1
                    }
            }
        }

        function m(e, t) {
            function n(e) {
                r !== !1 && s.push(O), o !== !1 && u.push(j), a = i.slice(e)
            }
            for (var r, o, i = t.def.fields.map(S), a = [], s = [], u = [], c = 0, l = i.length; c < l; c++) {
                var d = i[c],
                    h = e[d];
                if (!h) {
                    n(c);
                    break
                }
                if (c > 0) {
                    if (Object.keys(h).some(f)) {
                        n(c);
                        break
                    }
                    var p = "$gt" in h || "$gte" in h || "$lt" in h || "$lte" in h,
                        v = Object.keys(e[i[c - 1]]),
                        y = k.arrayEquals(v, ["$eq"]),
                        m = k.arrayEquals(v, Object.keys(h)),
                        _ = p && !y && !m;
                    if (_) {
                        n(c);
                        break
                    }
                }
                for (var b = Object.keys(h), w = null, E = 0; E < b.length; E++) {
                    var x = b[E],
                        A = h[x],
                        q = g(x, A);
                    w = w ? k.mergeObjects([w, q]) : q
                }
                s.push("startkey" in w ? w.startkey : O), u.push("endkey" in w ? w.endkey : j), "inclusive_start" in w && (r = w.inclusive_start), "inclusive_end" in w && (o = w.inclusive_end)
            }
            var T = {
                startkey: s,
                endkey: u
            };
            return "undefined" != typeof r && (T.inclusive_start = r), "undefined" != typeof o && (T.inclusive_end = o), {
                queryOpts: T,
                inMemoryFields: a
            }
        }

        function _(e) {
            return {
                queryOpts: {
                    startkey: null
                },
                inMemoryFields: [Object.keys(e)]
            }
        }

        function b(e, t) {
            return t.defaultUsed ? _(e, t) : 1 === t.def.fields.length ? y(e, t) : m(e, t)
        }

        function w(e, t) {
            E("planning query", e);
            var n = e.selector,
                r = e.sort,
                o = A(n, r),
                i = o.fields,
                a = o.sortOrder,
                s = p(n, i, a, t),
                c = b(n, s),
                f = c.queryOpts,
                l = c.inMemoryFields,
                d = u(l, s, n, i),
                h = {
                    queryOpts: f,
                    index: s,
                    inMemoryFields: d
                };
            return E("query plan", h), h
        }
        var k = n(13),
            E = k.log,
            x = n(16),
            S = x.getKey,
            A = x.getUserFields,
            O = null,
            j = {
                "￿": {}
            },
            q = ["$eq", "$gt", "$gte", "$lt", "$lte"];
        e.exports = w
    },
    function(e, t, n) {
        "use strict";
        var r = n(13),
            o = r.callbackify;
        t.createIndex = o(n(83)), t.find = o(n(86)), t.getIndexes = o(n(48)), t.deleteIndex = o(n(84))
    },
    function(e, t, n) {
        "use strict";
        var r = n(13),
            o = n(82),
            i = n(88),
            a = {};
        a.createIndex = r.toPromise(function(e, t) {
            if ("object" != typeof e) return t(new Error("you must provide an index to create"));
            var n = "http" === this.type() ? o : i;
            n.createIndex(this, e, t)
        }), a.find = r.toPromise(function(e, t) {
            if ("undefined" == typeof t && (t = e, e = void 0), "object" != typeof e) return t(new Error("you must provide search parameters to find()"));
            var n = "http" === this.type() ? o : i;
            n.find(this, e, t)
        }), a.getIndexes = r.toPromise(function(e) {
            var t = "http" === this.type() ? o : i;
            t.getIndexes(this, e)
        }), a.deleteIndex = r.toPromise(function(e, t) {
            if ("object" != typeof e) return t(new Error("you must provide an index to delete"));
            var n = "http" === this.type() ? o : i;
            n.deleteIndex(this, e, t)
        }), e.exports = a, "undefined" != typeof window && window.PouchDB && window.PouchDB.plugin(a)
    },
    function(e, t, n) {
        (function(t) {
            "use strict";

            function r() {}

            function o(e) {
                if ("function" != typeof e) throw new TypeError("resolver must be a function");
                this.state = m, this.queue = [], this.outcome = void 0, t.browser || (this.handled = _), e !== r && u(this, e)
            }

            function i(e, t, n) {
                this.promise = e, "function" == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), "function" == typeof n && (this.onRejected = n, this.callRejected = this.otherCallRejected)
            }

            function a(e, t, n) {
                p(function() {
                    var r;
                    try {
                        r = t(n)
                    } catch (t) {
                        return v.reject(e, t)
                    }
                    r === e ? v.reject(e, new TypeError("Cannot resolve promise with itself")) : v.resolve(e, r)
                })
            }

            function s(e) {
                var t = e && e.then;
                if (e && "object" == typeof e && "function" == typeof t) return function() {
                    t.apply(e, arguments)
                }
            }

            function u(e, t) {
                function n(t) {
                    i || (i = !0, v.reject(e, t))
                }

                function r(t) {
                    i || (i = !0, v.resolve(e, t))
                }

                function o() {
                    t(r, n)
                }
                var i = !1,
                    a = c(o);
                "error" === a.status && n(a.value)
            }

            function c(e, t) {
                var n = {};
                try {
                    n.value = e(t), n.status = "success"
                } catch (e) {
                    n.status = "error", n.value = e
                }
                return n
            }

            function f(e) {
                return e instanceof this ? e : v.resolve(new this(r), e)
            }

            function l(e) {
                var t = new this(r);
                return v.reject(t, e)
            }

            function d(e) {
                function t(e, t) {
                    function r(e) {
                        a[t] = e, ++s !== o || i || (i = !0, v.resolve(c, a))
                    }
                    n.resolve(e).then(r, function(e) {
                        i || (i = !0, v.reject(c, e))
                    })
                }
                var n = this;
                if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                var o = e.length,
                    i = !1;
                if (!o) return this.resolve([]);
                for (var a = new Array(o), s = 0, u = -1, c = new this(r); ++u < o;) t(e[u], u);
                return c
            }

            function h(e) {
                function t(e) {
                    n.resolve(e).then(function(e) {
                        i || (i = !0, v.resolve(s, e))
                    }, function(e) {
                        i || (i = !0, v.reject(s, e))
                    })
                }
                var n = this;
                if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                var o = e.length,
                    i = !1;
                if (!o) return this.resolve([]);
                for (var a = -1, s = new this(r); ++a < o;) t(e[a]);
                return s
            }
            var p = n(25),
                v = {},
                y = ["REJECTED"],
                g = ["FULFILLED"],
                m = ["PENDING"];
            if (!t.browser) var _ = ["UNHANDLED"];
            e.exports = o, o.prototype.catch = function(e) {
                return this.then(null, e)
            }, o.prototype.then = function(e, n) {
                if ("function" != typeof e && this.state === g || "function" != typeof n && this.state === y) return this;
                var o = new this.constructor(r);
                if (t.browser || this.handled === _ && (this.handled = null), this.state !== m) {
                    var s = this.state === g ? e : n;
                    a(o, s, this.outcome)
                } else this.queue.push(new i(o, e, n));
                return o
            }, i.prototype.callFulfilled = function(e) {
                v.resolve(this.promise, e)
            }, i.prototype.otherCallFulfilled = function(e) {
                a(this.promise, this.onFulfilled, e)
            }, i.prototype.callRejected = function(e) {
                v.reject(this.promise, e)
            }, i.prototype.otherCallRejected = function(e) {
                a(this.promise, this.onRejected, e)
            }, v.resolve = function(e, t) {
                var n = c(s, t);
                if ("error" === n.status) return v.reject(e, n.value);
                var r = n.value;
                if (r) u(e, r);
                else {
                    e.state = g, e.outcome = t;
                    for (var o = -1, i = e.queue.length; ++o < i;) e.queue[o].callFulfilled(t)
                }
                return e
            }, v.reject = function(e, n) {
                e.state = y, e.outcome = n, t.browser || e.handled === _ && p(function() {
                    e.handled === _ && t.emit("unhandledRejection", n, e)
                });
                for (var r = -1, o = e.queue.length; ++r < o;) e.queue[r].callRejected(n);
                return e
            }, o.resolve = f, o.reject = l, o.all = d, o.race = h
        }).call(t, n(9))
    },
    90, [103, 91],
    function(e, t, n) {
        (function(t) {
            "use strict";

            function r(e) {
                return e && "object" == typeof e && "default" in e ? e.default : e
            }

            function o(e) {
                return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer || "undefined" != typeof Blob && e instanceof Blob
            }

            function i(e) {
                if ("function" == typeof e.slice) return e.slice(0);
                var t = new ArrayBuffer(e.byteLength),
                    n = new Uint8Array(t),
                    r = new Uint8Array(e);
                return n.set(r), t
            }

            function a(e) {
                if (e instanceof ArrayBuffer) return i(e);
                var t = e.size,
                    n = e.type;
                return "function" == typeof e.slice ? e.slice(0, t, n) : e.webkitSlice(0, t, n)
            }

            function s(e) {
                var t = Object.getPrototypeOf(e);
                if (null === t) return !0;
                var n = t.constructor;
                return "function" == typeof n && n instanceof n && Nr.call(n) == Rr
            }

            function u(e) {
                var t, n, r;
                if (!e || "object" != typeof e) return e;
                if (Array.isArray(e)) {
                    for (t = [], n = 0, r = e.length; n < r; n++) t[n] = u(e[n]);
                    return t
                }
                if (e instanceof Date) return e.toISOString();
                if (o(e)) return a(e);
                if (!s(e)) return e;
                t = {};
                for (n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var i = u(e[n]);
                        "undefined" != typeof i && (t[n] = i)
                    }
                return t
            }

            function c(e) {
                var t = !1;
                return Ar(function(n) {
                    if (t) throw new Error("once called more than once");
                    t = !0, e.apply(this, n)
                })
            }

            function f(e) {
                return Ar(function(t) {
                    t = u(t);
                    var n = this,
                        r = "function" == typeof t[t.length - 1] && t.pop(),
                        o = new Dr(function(r, o) {
                            var i;
                            try {
                                var a = c(function(e, t) {
                                    e ? o(e) : r(t)
                                });
                                t.push(a), i = e.apply(n, t), i && "function" == typeof i.then && r(i)
                            } catch (e) {
                                o(e)
                            }
                        });
                    return r && o.then(function(e) {
                        r(null, e)
                    }, r), o
                })
            }

            function l(e, t) {
                function n(e, t, n) {
                    if (Mr.enabled) {
                        for (var r = [e.name, t], o = 0; o < n.length - 1; o++) r.push(n[o]);
                        Mr.apply(null, r);
                        var i = n[n.length - 1];
                        n[n.length - 1] = function(n, r) {
                            var o = [e.name, t];
                            o = o.concat(n ? ["error", n] : ["success", r]), Mr.apply(null, o), i(n, r)
                        }
                    }
                }
                return f(Ar(function(r) {
                    if (this._closed) return Dr.reject(new Error("database is closed"));
                    if (this._destroyed) return Dr.reject(new Error("database is destroyed"));
                    var o = this;
                    return n(o, e, r), this.taskqueue.isReady ? t.apply(this, r) : new Dr(function(t, n) {
                        o.taskqueue.addTask(function(i) {
                            i ? n(i) : t(o[e].apply(o, r))
                        })
                    })
                }))
            }

            function d(e) {
                return "$" + e
            }

            function h(e) {
                return e.substring(1)
            }

            function p() {
                this._store = {}
            }

            function v(e) {
                if (this._store = new p, e && Array.isArray(e))
                    for (var t = 0, n = e.length; t < n; t++) this.add(e[t])
            }

            function y() {
                if ("undefined" == typeof Symbol || "undefined" == typeof Map || "undefined" == typeof Set) return !1;
                var e = Object.getOwnPropertyDescriptor(Map, Symbol.species);
                return e && "get" in e && Map[Symbol.species] === Map
            }

            function g(e, t) {
                for (var n = {}, r = 0, o = t.length; r < o; r++) {
                    var i = t[r];
                    i in e && (n[i] = e[i])
                }
                return n
            }

            function m(e) {
                return e
            }

            function _(e) {
                return [{
                    ok: e
                }]
            }

            function b(e, t, n) {
                function r() {
                    var e = [];
                    d.forEach(function(t) {
                        t.docs.forEach(function(n) {
                            e.push({
                                id: t.id,
                                docs: [n]
                            })
                        })
                    }), n(null, {
                        results: e
                    })
                }

                function o() {
                    ++l === f && r()
                }

                function i(e, t, n) {
                    d[e] = {
                        id: t,
                        docs: n
                    }, o()
                }

                function a() {
                    if (!(p >= h.length)) {
                        var e = Math.min(p + $r, h.length),
                            t = h.slice(p, e);
                        s(t, p), p += t.length
                    }
                }

                function s(n, r) {
                    n.forEach(function(n, o) {
                        var s = r + o,
                            u = c.get(n),
                            f = g(u[0], ["atts_since", "attachments"]);
                        f.open_revs = u.map(function(e) {
                            return e.rev
                        }), f.open_revs = f.open_revs.filter(m);
                        var l = m;
                        0 === f.open_revs.length && (delete f.open_revs, l = _), ["revs", "attachments", "binary", "ajax", "latest"].forEach(function(e) {
                            e in t && (f[e] = t[e])
                        }), e.get(n, f, function(e, t) {
                            var r;
                            r = e ? [{
                                error: e
                            }] : l(t), i(s, n, r), a()
                        })
                    })
                }
                var u = t.docs,
                    c = new Pr;
                u.forEach(function(e) {
                    c.has(e.id) ? c.get(e.id).push(e) : c.set(e.id, [e])
                });
                var f = c.size,
                    l = 0,
                    d = new Array(f),
                    h = [];
                c.forEach(function(e, t) {
                    h.push(t)
                });
                var p = 0;
                a()
            }

            function w() {
                return "undefined" != typeof chrome && "undefined" != typeof chrome.storage && "undefined" != typeof chrome.storage.local
            }

            function k() {
                return Fr
            }

            function E(e) {
                w() ? chrome.storage.onChanged.addListener(function(t) {
                    null != t.db_name && e.emit(t.dbName.newValue)
                }) : k() && ("undefined" != typeof addEventListener ? addEventListener("storage", function(t) {
                    e.emit(t.key)
                }) : window.attachEvent("storage", function(t) {
                    e.emit(t.key)
                }))
            }

            function x() {
                jr.EventEmitter.call(this), this._listeners = {}, E(this)
            }

            function S(e) {
                if ("undefined" !== console && e in console) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    console[e].apply(console, t)
                }
            }

            function A(e, t) {
                var n = 6e5;
                e = parseInt(e, 10) || 0, t = parseInt(t, 10), t !== t || t <= e ? t = (e || 1) << 1 : t += 1, t > n && (e = n >> 1, t = n);
                var r = Math.random(),
                    o = t - e;
                return ~~(o * r + e)
            }

            function O(e) {
                var t = 0;
                return e || (t = 2e3), A(e, t)
            }

            function j(e, t) {
                S("info", "The above " + e + " is totally normal. " + t)
            }

            function q(e, t, n) {
                Error.call(this, n), this.status = e, this.name = t, this.message = n, this.error = !0
            }

            function T(e, t) {
                function n(t) {
                    for (var n in e) "function" != typeof e[n] && (this[n] = e[n]);
                    void 0 !== t && (this.reason = t)
                }
                return n.prototype = q.prototype, new n(t)
            }

            function I(e) {
                if ("object" != typeof e) {
                    var t = e;
                    e = Qr, e.data = t
                }
                return "error" in e && "conflict" === e.error && (e.name = "conflict", e.status = 409), "name" in e || (e.name = e.error || "unknown"), "status" in e || (e.status = 500), "message" in e || (e.message = e.message || e.reason), e
            }

            function L(e, t, n) {
                try {
                    return !e(t, n)
                } catch (e) {
                    var r = "Filter function threw: " + e.toString();
                    return T(to, r)
                }
            }

            function C(e) {
                var t = {},
                    n = e.filter && "function" == typeof e.filter;
                return t.query = e.query_params,
                    function(r) {
                        r.doc || (r.doc = {});
                        var o = n && L(e.filter, r.doc, t);
                        if ("object" == typeof o) return o;
                        if (o) return !1;
                        if (e.include_docs) {
                            if (!e.attachments)
                                for (var i in r.doc._attachments) r.doc._attachments.hasOwnProperty(i) && (r.doc._attachments[i].stub = !0)
                        } else delete r.doc;
                        return !0
                    }
            }

            function D(e) {
                for (var t = [], n = 0, r = e.length; n < r; n++) t = t.concat(e[n]);
                return t
            }

            function N() {}

            function R(e) {
                var t;
                if (e ? "string" != typeof e ? t = T(Jr) : /^_/.test(e) && !/^_(design|local)/.test(e) && (t = T(Xr)) : t = T(Vr), t) throw t
            }

            function M(e, t) {
                return "listenerCount" in e ? e.listenerCount(t) : jr.EventEmitter.listenerCount(e, t)
            }

            function B(e) {
                if (!e) return null;
                var t = e.split("/");
                return 2 === t.length ? t : 1 === t.length ? [e, e] : null
            }

            function P(e) {
                var t = B(e);
                return t ? t.join("/") : null
            }

            function F(e) {
                for (var t = lo.exec(e), n = {}, r = 14; r--;) {
                    var o = uo[r],
                        i = t[r] || "",
                        a = ["user", "password"].indexOf(o) !== -1;
                    n[o] = a ? decodeURIComponent(i) : i
                }
                return n[co] = {}, n[uo[12]].replace(fo, function(e, t, r) {
                    t && (n[co][t] = r)
                }), n
            }

            function $(e, t, n) {
                return new Dr(function(r, o) {
                    e.get(t, function(i, a) {
                        if (i) {
                            if (404 !== i.status) return o(i);
                            a = {}
                        }
                        var s = a._rev,
                            u = n(a);
                        return u ? (u._id = t, u._rev = s, void r(U(e, u, n))) : r({
                            updated: !1,
                            rev: s
                        })
                    })
                })
            }

            function U(e, t, n) {
                return e.put(t).then(function(e) {
                    return {
                        updated: !0,
                        rev: e.rev
                    }
                }, function(r) {
                    if (409 !== r.status) throw r;
                    return $(e, t._id, n)
                })
            }

            function W(e) {
                return 0 | Math.random() * e
            }

            function z(e, t) {
                t = t || ho.length;
                var n = "",
                    r = -1;
                if (e) {
                    for (; ++r < e;) n += ho[W(t)];
                    return n
                }
                for (; ++r < 36;) switch (r) {
                    case 8:
                    case 13:
                    case 18:
                    case 23:
                        n += "-";
                        break;
                    case 19:
                        n += ho[3 & W(16) | 8];
                        break;
                    default:
                        n += ho[W(16)]
                }
                return n
            }

            function K(e) {
                for (var t, n, r, o, i = e.rev_tree.slice(); o = i.pop();) {
                    var a = o.ids,
                        s = a[2],
                        u = o.pos;
                    if (s.length)
                        for (var c = 0, f = s.length; c < f; c++) i.push({
                            pos: u + 1,
                            ids: s[c]
                        });
                    else {
                        var l = !!a[1].deleted,
                            d = a[0];
                        t && !(r !== l ? r : n !== u ? n < u : t < d) || (t = d, n = u, r = l)
                    }
                }
                return n + "-" + t
            }

            function H(e, t) {
                for (var n, r = e.slice(); n = r.pop();)
                    for (var o = n.pos, i = n.ids, a = i[2], s = t(0 === a.length, o, i[0], n.ctx, i[1]), u = 0, c = a.length; u < c; u++) r.push({
                        pos: o + 1,
                        ids: a[u],
                        ctx: s
                    })
            }

            function G(e, t) {
                return e.pos - t.pos
            }

            function J(e) {
                var t = [];
                H(e, function(e, n, r, o, i) {
                    e && t.push({
                        rev: n + "-" + r,
                        pos: n,
                        opts: i
                    })
                }), t.sort(G).reverse();
                for (var n = 0, r = t.length; n < r; n++) delete t[n].pos;
                return t
            }

            function V(e) {
                for (var t = K(e), n = J(e.rev_tree), r = [], o = 0, i = n.length; o < i; o++) {
                    var a = n[o];
                    a.rev === t || a.opts.deleted || r.push(a.rev)
                }
                return r
            }

            function X(e) {
                var t = [];
                return H(e.rev_tree, function(e, n, r, o, i) {
                    "available" !== i.status || e || (t.push(n + "-" + r), i.status = "missing")
                }), t
            }

            function Q(e) {
                for (var t, n = [], r = e.slice(); t = r.pop();) {
                    var o = t.pos,
                        i = t.ids,
                        a = i[0],
                        s = i[1],
                        u = i[2],
                        c = 0 === u.length,
                        f = t.history ? t.history.slice() : [];
                    f.push({
                        id: a,
                        opts: s
                    }), c && n.push({
                        pos: o + 1 - f.length,
                        ids: f
                    });
                    for (var l = 0, d = u.length; l < d; l++) r.push({
                        pos: o + 1,
                        ids: u[l],
                        history: f
                    })
                }
                return n.reverse()
            }

            function Y(e, t) {
                return e.pos - t.pos
            }

            function Z(e, t, n) {
                for (var r, o = 0, i = e.length; o < i;) r = o + i >>> 1, n(e[r], t) < 0 ? o = r + 1 : i = r;
                return o
            }

            function ee(e, t, n) {
                var r = Z(e, t, n);
                e.splice(r, 0, t)
            }

            function te(e, t) {
                for (var n, r, o = t, i = e.length; o < i; o++) {
                    var a = e[o],
                        s = [a.id, a.opts, []];
                    r ? (r[2].push(s), r = s) : n = r = s
                }
                return n
            }

            function ne(e, t) {
                return e[0] < t[0] ? -1 : 1
            }

            function re(e, t) {
                for (var n = [{
                        tree1: e,
                        tree2: t
                    }], r = !1; n.length > 0;) {
                    var o = n.pop(),
                        i = o.tree1,
                        a = o.tree2;
                    (i[1].status || a[1].status) && (i[1].status = "available" === i[1].status || "available" === a[1].status ? "available" : "missing");
                    for (var s = 0; s < a[2].length; s++)
                        if (i[2][0]) {
                            for (var u = !1, c = 0; c < i[2].length; c++) i[2][c][0] === a[2][s][0] && (n.push({
                                tree1: i[2][c],
                                tree2: a[2][s]
                            }), u = !0);
                            u || (r = "new_branch", ee(i[2], a[2][s], ne))
                        } else r = "new_leaf", i[2][0] = a[2][s]
                }
                return {
                    conflicts: r,
                    tree: e
                }
            }

            function oe(e, t, n) {
                var r, o = [],
                    i = !1,
                    a = !1;
                if (!e.length) return {
                    tree: [t],
                    conflicts: "new_leaf"
                };
                for (var s = 0, u = e.length; s < u; s++) {
                    var c = e[s];
                    if (c.pos === t.pos && c.ids[0] === t.ids[0]) r = re(c.ids, t.ids), o.push({
                        pos: c.pos,
                        ids: r.tree
                    }), i = i || r.conflicts, a = !0;
                    else if (n !== !0) {
                        var f = c.pos < t.pos ? c : t,
                            l = c.pos < t.pos ? t : c,
                            d = l.pos - f.pos,
                            h = [],
                            p = [];
                        for (p.push({
                                ids: f.ids,
                                diff: d,
                                parent: null,
                                parentIdx: null
                            }); p.length > 0;) {
                            var v = p.pop();
                            if (0 !== v.diff)
                                for (var y = v.ids[2], g = 0, m = y.length; g < m; g++) p.push({
                                    ids: y[g],
                                    diff: v.diff - 1,
                                    parent: v.ids,
                                    parentIdx: g
                                });
                            else v.ids[0] === l.ids[0] && h.push(v)
                        }
                        var _ = h[0];
                        _ ? (r = re(_.ids, l.ids), _.parent[2][_.parentIdx] = r.tree, o.push({
                            pos: f.pos,
                            ids: f.ids
                        }), i = i || r.conflicts, a = !0) : o.push(c)
                    } else o.push(c)
                }
                return a || o.push(t), o.sort(Y), {
                    tree: o,
                    conflicts: i || "internal_node"
                }
            }

            function ie(e, t) {
                for (var n, r, o = Q(e), i = 0, a = o.length; i < a; i++) {
                    var s, u = o[i],
                        c = u.ids;
                    if (c.length > t) {
                        n || (n = {});
                        var f = c.length - t;
                        s = {
                            pos: u.pos + f,
                            ids: te(c, f)
                        };
                        for (var l = 0; l < f; l++) {
                            var d = u.pos + l + "-" + c[l].id;
                            n[d] = !0
                        }
                    } else s = {
                        pos: u.pos,
                        ids: te(c, 0)
                    };
                    r = r ? oe(r, s, !0).tree : [s]
                }
                return n && H(r, function(e, t, r) {
                    delete n[t + "-" + r]
                }), {
                    tree: r,
                    revs: n ? Object.keys(n) : []
                }
            }

            function ae(e, t, n) {
                var r = oe(e, t),
                    o = ie(r.tree, n);
                return {
                    tree: o.tree,
                    stemmedRevs: o.revs,
                    conflicts: r.conflicts
                }
            }

            function se(e, t) {
                for (var n, r = e.slice(), o = t.split("-"), i = parseInt(o[0], 10), a = o[1]; n = r.pop();) {
                    if (n.pos === i && n.ids[0] === a) return !0;
                    for (var s = n.ids[2], u = 0, c = s.length; u < c; u++) r.push({
                        pos: n.pos + 1,
                        ids: s[u]
                    })
                }
                return !1
            }

            function ue(e) {
                return e.ids
            }

            function ce(e, t) {
                t || (t = K(e));
                for (var n, r = t.substring(t.indexOf("-") + 1), o = e.rev_tree.map(ue); n = o.pop();) {
                    if (n[0] === r) return !!n[1].deleted;
                    o = o.concat(n[2])
                }
            }

            function fe(e) {
                return /^_local/.test(e)
            }

            function le(e, t) {
                for (var n, r = t.rev_tree.slice(); n = r.pop();) {
                    var o = n.pos,
                        i = n.ids,
                        a = i[0],
                        s = i[1],
                        u = i[2],
                        c = 0 === u.length,
                        f = n.history ? n.history.slice() : [];
                    if (f.push({
                            id: a,
                            pos: o,
                            opts: s
                        }), c)
                        for (var l = 0, d = f.length; l < d; l++) {
                            var h = f[l],
                                p = h.pos + "-" + h.id;
                            if (p === e) return o + "-" + a
                        }
                    for (var v = 0, y = u.length; v < y; v++) r.push({
                        pos: o + 1,
                        ids: u[v],
                        history: f
                    })
                }
                throw new Error("Unable to resolve latest revision for id " + t.id + ", rev " + e)
            }

            function de(e) {
                return Ir('"use strict";\nreturn ' + e + ";", {})
            }

            function he(e) {
                var t = ["return function(doc) {", '  "use strict";', "  var emitted = false;", "  var emit = function (a, b) {", "    emitted = true;", "  };", "  var view = " + e + ";", "  view(doc);", "  if (emitted) {", "    return true;", "  }", "};"].join("\n");
                return Ir(t, {})
            }

            function pe(e, t) {
                try {
                    e.emit("change", t)
                } catch (e) {
                    S("error", 'Error in .on("change", function):', e)
                }
            }

            function ve(e, t, n) {
                function r() {
                    o.cancel()
                }
                jr.EventEmitter.call(this);
                var o = this;
                this.db = e, t = t ? u(t) : {};
                var i = t.complete = c(function(t, n) {
                    t ? M(o, "error") > 0 && o.emit("error", t) : o.emit("complete", n), o.removeAllListeners(), e.removeListener("destroyed", r)
                });
                n && (o.on("complete", function(e) {
                    n(null, e)
                }), o.on("error", n)), e.once("destroyed", r), t.onChange = function(e) {
                    o.isCancelled || pe(o, e)
                };
                var a = new Dr(function(e, n) {
                    t.complete = function(t, r) {
                        t ? n(t) : e(r)
                    }
                });
                o.once("cancel", function() {
                    e.removeListener("destroyed", r), t.complete(null, {
                        status: "cancelled"
                    })
                }), this.then = a.then.bind(a), this.catch = a.catch.bind(a), this.then(function(e) {
                    i(null, e)
                }, i), e.taskqueue.isReady ? o.doChanges(t) : e.taskqueue.addTask(function(e) {
                    e ? t.complete(e) : o.isCancelled ? o.emit("cancel") : o.doChanges(t)
                })
            }

            function ye(e, t, n) {
                var r = [{
                    rev: e._rev
                }];
                "all_docs" === n.style && (r = J(t.rev_tree).map(function(e) {
                    return {
                        rev: e.rev
                    }
                }));
                var o = {
                    id: t.id,
                    changes: r,
                    doc: e
                };
                return ce(t, e._rev) && (o.deleted = !0), n.conflicts && (o.doc._conflicts = V(t), o.doc._conflicts.length || delete o.doc._conflicts), o
            }

            function ge(e, t) {
                return e < t ? -1 : e > t ? 1 : 0
            }

            function me(e) {
                return function(t, n) {
                    t || n[0] && n[0].error ? e(t || n[0]) : e(null, n.length ? n[0] : n)
                }
            }

            function _e(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (n._deleted) delete n._attachments;
                    else if (n._attachments)
                        for (var r = Object.keys(n._attachments), o = 0; o < r.length; o++) {
                            var i = r[o];
                            n._attachments[i] = g(n._attachments[i], ["data", "digest", "content_type", "length", "revpos", "stub"])
                        }
                }
            }

            function be(e, t) {
                var n = ge(e._id, t._id);
                if (0 !== n) return n;
                var r = e._revisions ? e._revisions.start : 0,
                    o = t._revisions ? t._revisions.start : 0;
                return ge(r, o)
            }

            function we(e) {
                var t = {},
                    n = [];
                return H(e, function(e, r, o, i) {
                    var a = r + "-" + o;
                    return e && (t[a] = 0), void 0 !== i && n.push({
                        from: i,
                        to: a
                    }), a
                }), n.reverse(), n.forEach(function(e) {
                    void 0 === t[e.from] ? t[e.from] = 1 + t[e.to] : t[e.from] = Math.min(t[e.from], 1 + t[e.to])
                }), t
            }

            function ke(e, t, n) {
                var r = "limit" in t ? t.keys.slice(t.skip, t.limit + t.skip) : t.skip > 0 ? t.keys.slice(t.skip) : t.keys;
                if (t.descending && r.reverse(), !r.length) return e._allDocs({
                    limit: 0
                }, n);
                var o = {
                    offset: t.skip
                };
                return Dr.all(r.map(function(n) {
                    var r = Wr({
                        key: n,
                        deleted: "ok"
                    }, t);
                    return ["limit", "skip", "keys"].forEach(function(e) {
                        delete r[e]
                    }), new Dr(function(t, i) {
                        e._allDocs(r, function(e, r) {
                            return e ? i(e) : (o.total_rows = r.total_rows, void t(r.rows[0] || {
                                key: n,
                                error: "not_found"
                            }))
                        })
                    })
                })).then(function(e) {
                    return o.rows = e, o
                })
            }

            function Ee(e) {
                var t = e._compactionQueue[0],
                    n = t.opts,
                    r = t.callback;
                e.get("_local/compaction").catch(function() {
                    return !1
                }).then(function(t) {
                    t && t.last_seq && (n.last_seq = t.last_seq), e._compact(n, function(t, n) {
                        t ? r(t) : r(null, n), Tr(function() {
                            e._compactionQueue.shift(), e._compactionQueue.length && Ee(e)
                        })
                    })
                })
            }

            function xe(e) {
                return "_" === e.charAt(0) && e + " is not a valid attachment name, attachment names cannot start with '_'"
            }

            function Se() {
                jr.EventEmitter.call(this)
            }

            function Ae() {
                this.isReady = !1, this.failed = !1, this.queue = []
            }

            function Oe(e, t) {
                var n = e.match(/([a-z\-]*):\/\/(.*)/);
                if (n) return {
                    name: /https?/.test(n[1]) ? n[1] + "://" + n[2] : n[2],
                    adapter: n[1]
                };
                var r = qe.adapters,
                    o = qe.preferredAdapters,
                    i = qe.prefix,
                    a = t.adapter;
                if (!a)
                    for (var s = 0; s < o.length && (a = o[s], "idb" === a && "websql" in r && k() && localStorage["_pouch__websqldb_" + i + e]); ++s) S("log", 'PouchDB is downgrading "' + e + '" to WebSQL to avoid data loss, because it was already opened with WebSQL.');
                var u = r[a],
                    c = !(u && "use_prefix" in u) || u.use_prefix;
                return {
                    name: c ? i + e : e,
                    adapter: a
                }
            }

            function je(e) {
                function t() {
                    e.removeListener("closed", r), e.constructor.emit("destroyed", e.name)
                }

                function n() {
                    e.removeListener("destroyed", t), e.removeListener("closed", r), e.emit("destroyed")
                }

                function r() {
                    e.removeListener("destroyed", t), o.delete(e.name)
                }
                var o = e.constructor._destructionListeners;
                e.once("destroyed", t), e.once("closed", r), o.has(e.name) || o.set(e.name, []), o.get(e.name).push(n)
            }

            function qe(e, t) {
                if (!(this instanceof qe)) return new qe(e, t);
                var n = this;
                if (t = t || {}, e && "object" == typeof e && (t = e, e = t.name, delete t.name), this.__opts = t = u(t), n.auto_compaction = t.auto_compaction, n.prefix = qe.prefix, "string" != typeof e) throw new Error("Missing/invalid DB name");
                var r = (t.prefix || "") + e,
                    o = Oe(r, t);
                if (t.name = o.name, t.adapter = t.adapter || o.adapter, n.name = e, n._adapter = t.adapter, Or("pouchdb:adapter")("Picked adapter: " + t.adapter), !qe.adapters[t.adapter] || !qe.adapters[t.adapter].valid()) throw new Error("Invalid Adapter: " + t.adapter);
                Se.call(n), n.taskqueue = new Ae, n.adapter = t.adapter, qe.adapters[t.adapter].call(n, t, function(e) {
                    return e ? n.taskqueue.fail(e) : (je(n), n.emit("created", n), qe.emit("created", n.name), void n.taskqueue.ready(n))
                })
            }

            function Te(e) {
                Object.keys(jr.EventEmitter.prototype).forEach(function(t) {
                    "function" == typeof jr.EventEmitter.prototype[t] && (e[t] = po[t].bind(po))
                });
                var t = e._destructionListeners = new Pr;
                e.on("destroyed", function(e) {
                    t.get(e).forEach(function(e) {
                        e()
                    }), t.delete(e)
                })
            }

            function Ie(e) {
                return e.reduce(function(e, t) {
                    return e[t] = !0, e
                }, {})
            }

            function Le(e) {
                if (!/^\d+\-./.test(e)) return T(io);
                var t = e.indexOf("-"),
                    n = e.substring(0, t),
                    r = e.substring(t + 1);
                return {
                    prefix: parseInt(n, 10),
                    id: r
                }
            }

            function Ce(e, t) {
                for (var n = e.start - e.ids.length + 1, r = e.ids, o = [r[0], t, []], i = 1, a = r.length; i < a; i++) o = [r[i], {
                        status: "missing"
                    },
                    [o]
                ];
                return [{
                    pos: n,
                    ids: o
                }]
            }

            function De(e, t) {
                var n, r, o, i = {
                    status: "available"
                };
                if (e._deleted && (i.deleted = !0), t)
                    if (e._id || (e._id = z()), r = z(32, 16).toLowerCase(), e._rev) {
                        if (o = Le(e._rev), o.error) return o;
                        e._rev_tree = [{
                            pos: o.prefix,
                            ids: [o.id, {
                                    status: "missing"
                                },
                                [
                                    [r, i, []]
                                ]
                            ]
                        }], n = o.prefix + 1
                    } else e._rev_tree = [{
                        pos: 1,
                        ids: [r, i, []]
                    }], n = 1;
                else if (e._revisions && (e._rev_tree = Ce(e._revisions, i), n = e._revisions.start, r = e._revisions.ids[0]), !e._rev_tree) {
                    if (o = Le(e._rev), o.error) return o;
                    n = o.prefix, r = o.id, e._rev_tree = [{
                        pos: n,
                        ids: [r, i, []]
                    }]
                }
                R(e._id), e._rev = n + "-" + r;
                var a = {
                    metadata: {},
                    data: {}
                };
                for (var s in e)
                    if (Object.prototype.hasOwnProperty.call(e, s)) {
                        var u = "_" === s[0];
                        if (u && !go[s]) {
                            var c = T(eo, s);
                            throw c.message = eo.message + ": " + s, c
                        }
                        u && !mo[s] ? a.metadata[s.slice(1)] = e[s] : a.data[s] = e[s]
                    }
                return a
            }

            function Ne(e, t) {
                e = e || [], t = t || {};
                try {
                    return new Blob(e, t)
                } catch (i) {
                    if ("TypeError" !== i.name) throw i;
                    for (var n = "undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder, r = new n, o = 0; o < e.length; o += 1) r.append(e[o]);
                    return r.getBlob(t.type)
                }
            }

            function Re(e) {
                for (var t = e.length, n = new ArrayBuffer(t), r = new Uint8Array(n), o = 0; o < t; o++) r[o] = e.charCodeAt(o);
                return n
            }

            function Me(e, t) {
                return Ne([Re(e)], {
                    type: t
                })
            }

            function Be(e, t) {
                return Me(_o(e), t)
            }

            function Pe(e) {
                for (var t = "", n = new Uint8Array(e), r = n.byteLength, o = 0; o < r; o++) t += String.fromCharCode(n[o]);
                return t
            }

            function Fe(e, t) {
                if ("undefined" == typeof FileReader) return t(Pe((new FileReaderSync).readAsArrayBuffer(e)));
                var n = new FileReader,
                    r = "function" == typeof n.readAsBinaryString;
                n.onloadend = function(e) {
                    var n = e.target.result || "";
                    return r ? t(n) : void t(Pe(n))
                }, r ? n.readAsBinaryString(e) : n.readAsArrayBuffer(e)
            }

            function $e(e, t) {
                Fe(e, function(e) {
                    t(e)
                })
            }

            function Ue(e, t) {
                $e(e, function(e) {
                    t(bo(e))
                })
            }

            function We(e, t) {
                if ("undefined" == typeof FileReader) return t((new FileReaderSync).readAsArrayBuffer(e));
                var n = new FileReader;
                n.onloadend = function(e) {
                    var n = e.target.result || new ArrayBuffer(0);
                    t(n)
                }, n.readAsArrayBuffer(e)
            }

            function ze(e) {
                return bo(e)
            }

            function Ke(e, t, n) {
                return e.webkitSlice ? e.webkitSlice(t, n) : e.slice(t, n)
            }

            function He(e, t, n, r, o) {
                (n > 0 || r < t.size) && (t = Ke(t, n, r)), We(t, function(t) {
                    e.append(t), o()
                })
            }

            function Ge(e, t, n, r, o) {
                (n > 0 || r < t.length) && (t = t.substring(n, r)), e.appendBinary(t), o()
            }

            function Je(e, t) {
                function n() {
                    wo(o)
                }

                function r() {
                    var e = f.end(!0),
                        n = ze(e);
                    t(n), f.destroy()
                }

                function o() {
                    var t = c * s,
                        o = t + s;
                    c++, c < u ? l(f, e, t, o, n) : l(f, e, t, o, r)
                }
                var i = "string" == typeof e,
                    a = i ? e.length : e.size,
                    s = Math.min(ko, a),
                    u = Math.ceil(a / s),
                    c = 0,
                    f = i ? new Lr : new Lr.ArrayBuffer,
                    l = i ? Ge : He;
                o()
            }

            function Ve(e) {
                return Lr.hash(e)
            }

            function Xe(e) {
                try {
                    return _o(e)
                } catch (e) {
                    var t = T(Yr, "Attachment is not a valid base64 string");
                    return {
                        error: t
                    }
                }
            }

            function Qe(e, t, n) {
                var r = Xe(e.data);
                return r.error ? n(r.error) : (e.length = r.length, "blob" === t ? e.data = Me(r, e.content_type) : "base64" === t ? e.data = bo(r) : e.data = r, void Je(r, function(t) {
                    e.digest = "md5-" + t, n()
                }))
            }

            function Ye(e, t, n) {
                Je(e.data, function(r) {
                    e.digest = "md5-" + r, e.length = e.data.size || e.data.length || 0, "binary" === t ? $e(e.data, function(t) {
                        e.data = t, n()
                    }) : "base64" === t ? Ue(e.data, function(t) {
                        e.data = t, n()
                    }) : n()
                })
            }

            function Ze(e, t, n) {
                return e.stub ? n() : void("string" == typeof e.data ? Qe(e, t, n) : Ye(e, t, n))
            }

            function et(e, t, n) {
                function r() {
                    i++, e.length === i && (o ? n(o) : n())
                }
                if (!e.length) return n();
                var o, i = 0;
                e.forEach(function(e) {
                    function n(e) {
                        o = e, a++, a === i.length && r()
                    }
                    var i = e.data && e.data._attachments ? Object.keys(e.data._attachments) : [],
                        a = 0;
                    if (!i.length) return r();
                    for (var s in e.data._attachments) e.data._attachments.hasOwnProperty(s) && Ze(e.data._attachments[s], t, n)
                })
            }

            function tt(e, t, n, r, o, i, a, s) {
                if (se(t.rev_tree, n.metadata.rev)) return r[o] = n, i();
                var u = t.winningRev || K(t),
                    c = "deleted" in t ? t.deleted : ce(t, u),
                    f = "deleted" in n.metadata ? n.metadata.deleted : ce(n.metadata),
                    l = /^1-/.test(n.metadata.rev);
                if (c && !f && s && l) {
                    var d = n.data;
                    d._rev = u, d._id = n.metadata.id, n = De(d, s)
                }
                var h = ae(t.rev_tree, n.metadata.rev_tree[0], e),
                    p = s && (c && f && "new_leaf" !== h.conflicts || !c && "new_leaf" !== h.conflicts || c && !f && "new_branch" === h.conflicts);
                if (p) {
                    var v = T(Gr);
                    return r[o] = v, i()
                }
                var y = n.metadata.rev;
                n.metadata.rev_tree = h.tree, n.stemmedRevs = h.stemmedRevs || [], t.rev_map && (n.metadata.rev_map = t.rev_map);
                var g, m = K(n.metadata),
                    _ = ce(n.metadata, m),
                    b = c === _ ? 0 : c < _ ? -1 : 1;
                g = y === m ? _ : ce(n.metadata, y), a(n, m, _, g, !0, b, o, i)
            }

            function nt(e) {
                return "missing" === e.metadata.rev_tree[0].ids[1].status
            }

            function rt(e, t, n, r, o, i, a, s, u) {
                function c(e, t, n) {
                    var r = K(e.metadata),
                        o = ce(e.metadata, r);
                    if ("was_delete" in s && o) return i[t] = T(Hr, "deleted"), n();
                    var u = l && nt(e);
                    if (u) {
                        var c = T(Gr);
                        return i[t] = c, n()
                    }
                    var f = o ? 0 : 1;
                    a(e, r, o, o, !1, f, t, n)
                }

                function f() {
                    ++h === p && u && u()
                }
                e = e || 1e3;
                var l = s.new_edits,
                    d = new Pr,
                    h = 0,
                    p = t.length;
                t.forEach(function(e, t) {
                    if (e._id && fe(e._id)) {
                        var r = e._deleted ? "_removeLocal" : "_putLocal";
                        return void n[r](e, {
                            ctx: o
                        }, function(e, n) {
                            i[t] = e || n, f()
                        })
                    }
                    var a = e.metadata.id;
                    d.has(a) ? (p--, d.get(a).push([e, t])) : d.set(a, [
                        [e, t]
                    ])
                }), d.forEach(function(t, n) {
                    function o() {
                        ++u < t.length ? s() : f()
                    }

                    function s() {
                        var s = t[u],
                            f = s[0],
                            d = s[1];
                        if (r.has(n)) tt(e, r.get(n), f, i, d, o, a, l);
                        else {
                            var h = ae([], f.metadata.rev_tree[0], e);
                            f.metadata.rev_tree = h.tree, f.stemmedRevs = h.stemmedRevs || [], c(f, d, o)
                        }
                    }
                    var u = 0;
                    s()
                })
            }

            function ot(e) {
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return Cr.parse(e)
                }
            }

            function it(e) {
                try {
                    return JSON.stringify(e)
                } catch (t) {
                    return Cr.stringify(e)
                }
            }

            function at(e) {
                return function(t) {
                    var n = "unknown_error";
                    t.target && t.target.error && (n = t.target.error.name || t.target.error.message), e(T(ro, n, t.type))
                }
            }

            function st(e, t, n) {
                return {
                    data: it(e),
                    winningRev: t,
                    deletedOrLocal: n ? "1" : "0",
                    seq: e.seq,
                    id: e.id
                }
            }

            function ut(e) {
                if (!e) return null;
                var t = ot(e.data);
                return t.winningRev = e.winningRev, t.deleted = "1" === e.deletedOrLocal, t.seq = e.seq, t
            }

            function ct(e) {
                if (!e) return e;
                var t = e._doc_id_rev.lastIndexOf(":");
                return e._id = e._doc_id_rev.substring(0, t - 1), e._rev = e._doc_id_rev.substring(t + 1), delete e._doc_id_rev, e
            }

            function ft(e, t, n, r) {
                n ? r(e ? "string" != typeof e ? e : Be(e, t) : Ne([""], {
                    type: t
                })) : e ? "string" != typeof e ? Fe(e, function(e) {
                    r(bo(e))
                }) : r(e) : r("")
            }

            function lt(e, t, n, r) {
                function o() {
                    ++s === a.length && r && r()
                }

                function i(e, t) {
                    var r = e._attachments[t],
                        i = r.digest,
                        a = n.objectStore(Ao).get(i);
                    a.onsuccess = function(e) {
                        r.body = e.target.result.body, o()
                    }
                }
                var a = Object.keys(e._attachments || {});
                if (!a.length) return r && r();
                var s = 0;
                a.forEach(function(n) {
                    t.attachments && t.include_docs ? i(e, n) : (e._attachments[n].stub = !0, o())
                })
            }

            function dt(e, t) {
                return Dr.all(e.map(function(e) {
                    if (e.doc && e.doc._attachments) {
                        var n = Object.keys(e.doc._attachments);
                        return Dr.all(n.map(function(n) {
                            var r = e.doc._attachments[n];
                            if ("body" in r) {
                                var o = r.body,
                                    i = r.content_type;
                                return new Dr(function(a) {
                                    ft(o, i, t, function(t) {
                                        e.doc._attachments[n] = Wr(g(r, ["digest", "content_type"]), {
                                            data: t
                                        }), a()
                                    })
                                })
                            }
                        }))
                    }
                }))
            }

            function ht(e, t, n) {
                function r() {
                    c--, c || o()
                }

                function o() {
                    i.length && i.forEach(function(e) {
                        var t = u.index("digestSeq").count(IDBKeyRange.bound(e + "::", e + "::￿", !1, !1));
                        t.onsuccess = function(t) {
                            var n = t.target.result;
                            n || s.delete(e)
                        }
                    })
                }
                var i = [],
                    a = n.objectStore(So),
                    s = n.objectStore(Ao),
                    u = n.objectStore(Oo),
                    c = e.length;
                e.forEach(function(e) {
                    var n = a.index("_doc_id_rev"),
                        o = t + "::" + e;
                    n.getKey(o).onsuccess = function(e) {
                        var t = e.target.result;
                        if ("number" != typeof t) return r();
                        a.delete(t);
                        var n = u.index("seq").openCursor(IDBKeyRange.only(t));
                        n.onsuccess = function(e) {
                            var t = e.target.result;
                            if (t) {
                                var n = t.value.digestSeq.split("::")[0];
                                i.push(n), u.delete(t.primaryKey), t.continue()
                            } else r()
                        }
                    }
                })
            }

            function pt(e, t, n) {
                try {
                    return {
                        txn: e.transaction(t, n)
                    }
                } catch (e) {
                    return {
                        error: e
                    }
                }
            }

            function vt(e, t, n, r, o, i) {
                function a() {
                    var e = [xo, So, Ao, qo, Oo, jo],
                        t = pt(o, e, "readwrite");
                    return t.error ? i(t.error) : (_ = t.txn, _.onabort = at(i), _.ontimeout = at(i), _.oncomplete = l, b = _.objectStore(xo), w = _.objectStore(So), k = _.objectStore(Ao), E = _.objectStore(Oo), x = _.objectStore(jo), x.get(jo).onsuccess = function(e) {
                        A = e.target.result, c()
                    }, void h(function(e) {
                        return e ? (R = !0, i(e)) : void f()
                    }))
                }

                function s() {
                    L = !0, c()
                }

                function u() {
                    rt(e.revs_limit, O, r, N, _, D, p, n, s)
                }

                function c() {
                    A && L && (A.docCount += C, x.put(A))
                }

                function f() {
                    function e() {
                        ++n === O.length && u()
                    }

                    function t(t) {
                        var n = ut(t.target.result);
                        n && N.set(n.id, n), e()
                    }
                    if (O.length)
                        for (var n = 0, r = 0, o = O.length; r < o; r++) {
                            var i = O[r];
                            if (i._id && fe(i._id)) e();
                            else {
                                var a = b.get(i.metadata.id);
                                a.onsuccess = t
                            }
                        }
                }

                function l() {
                    R || (Io.notify(r._meta.name), i(null, D))
                }

                function d(e, t) {
                    var n = k.get(e);
                    n.onsuccess = function(n) {
                        if (n.target.result) t();
                        else {
                            var r = T(ao, "unknown stub attachment with digest " + e);
                            r.status = 412, t(r)
                        }
                    }
                }

                function h(e) {
                    function t() {
                        ++o === n.length && e(r)
                    }
                    var n = [];
                    if (O.forEach(function(e) {
                            e.data && e.data._attachments && Object.keys(e.data._attachments).forEach(function(t) {
                                var r = e.data._attachments[t];
                                r.stub && n.push(r.digest)
                            })
                        }), !n.length) return e();
                    var r, o = 0;
                    n.forEach(function(e) {
                        d(e, function(e) {
                            e && !r && (r = e), t()
                        })
                    })
                }

                function p(e, t, n, r, o, i, a, s) {
                    e.metadata.winningRev = t, e.metadata.deleted = n;
                    var u = e.data;
                    u._id = e.metadata.id, u._rev = e.metadata.rev, r && (u._deleted = !0);
                    var f = u._attachments && Object.keys(u._attachments).length;
                    return f ? y(e, t, n, o, a, s) : (C += i, c(), void v(e, t, n, o, a, s))
                }

                function v(e, t, n, o, i, a) {
                    function s(i) {
                        var a = e.stemmedRevs || [];
                        o && r.auto_compaction && (a = a.concat(X(e.metadata))), a && a.length && ht(a, e.metadata.id, _), l.seq = i.target.result;
                        var s = st(l, t, n),
                            u = b.put(s);
                        u.onsuccess = c
                    }

                    function u(e) {
                        e.preventDefault(), e.stopPropagation();
                        var t = w.index("_doc_id_rev"),
                            n = t.getKey(f._doc_id_rev);
                        n.onsuccess = function(e) {
                            var t = w.put(f, e.target.result);
                            t.onsuccess = s
                        }
                    }

                    function c() {
                        D[i] = {
                            ok: !0,
                            id: l.id,
                            rev: l.rev
                        }, N.set(e.metadata.id, e.metadata), g(e, l.seq, a)
                    }
                    var f = e.data,
                        l = e.metadata;
                    f._doc_id_rev = l.id + "::" + l.rev, delete f._id, delete f._rev;
                    var d = w.put(f);
                    d.onsuccess = s, d.onerror = u
                }

                function y(e, t, n, r, o, i) {
                    function a() {
                        c === f.length && v(e, t, n, r, o, i)
                    }

                    function s() {
                        c++, a()
                    }
                    var u = e.data,
                        c = 0,
                        f = Object.keys(u._attachments);
                    f.forEach(function(n) {
                        var r = e.data._attachments[n];
                        if (r.stub) c++, a();
                        else {
                            var o = r.data;
                            delete r.data, r.revpos = parseInt(t, 10);
                            var i = r.digest;
                            m(i, o, s)
                        }
                    })
                }

                function g(e, t, n) {
                    function r() {
                        ++i === a.length && n()
                    }

                    function o(n) {
                        var o = e.data._attachments[n].digest,
                            i = E.put({
                                seq: t,
                                digestSeq: o + "::" + t
                            });
                        i.onsuccess = r, i.onerror = function(e) {
                            e.preventDefault(), e.stopPropagation(), r()
                        }
                    }
                    var i = 0,
                        a = Object.keys(e.data._attachments || {});
                    if (!a.length) return n();
                    for (var s = 0; s < a.length; s++) o(a[s])
                }

                function m(e, t, n) {
                    var r = k.count(e);
                    r.onsuccess = function(r) {
                        var o = r.target.result;
                        if (o) return n();
                        var i = {
                                digest: e,
                                body: t
                            },
                            a = k.put(i);
                        a.onsuccess = n
                    }
                }
                for (var _, b, w, k, E, x, S, A, O = t.docs, j = 0, q = O.length; j < q; j++) {
                    var I = O[j];
                    I._id && fe(I._id) || (I = O[j] = De(I, n.new_edits), I.error && !S && (S = I))
                }
                if (S) return i(S);
                var L = !1,
                    C = 0,
                    D = new Array(O.length),
                    N = new Pr,
                    R = !1,
                    M = r._meta.blobSupport ? "blob" : "base64";
                et(O, M, function(e) {
                    return e ? i(e) : void a()
                })
            }

            function yt(e, t, n, r, o) {
                function i(e) {
                    f = e.target.result, c && o(c, f, l)
                }

                function a(e) {
                    c = e.target.result, f && o(c, f, l)
                }

                function s() {
                    if (!c.length) return o();
                    var n, s = c[c.length - 1];
                    if (t && t.upper) try {
                        n = IDBKeyRange.bound(s, t.upper, !0, t.upperOpen)
                    } catch (e) {
                        if ("DataError" === e.name && 0 === e.code) return o()
                    } else n = IDBKeyRange.lowerBound(s, !0);
                    t = n, c = null, f = null, e.getAll(t, r).onsuccess = i, e.getAllKeys(t, r).onsuccess = a
                }

                function u(e) {
                    var t = e.target.result;
                    return t ? void o([t.key], [t.value], t) : o()
                }
                var c, f, l, d = "function" == typeof e.getAll && "function" == typeof e.getAllKeys && r > 1 && !n;
                d ? (l = {
                    continue: s
                }, e.getAll(t, r).onsuccess = i, e.getAllKeys(t, r).onsuccess = a) : n ? e.openCursor(t, "prev").onsuccess = u : e.openCursor(t).onsuccess = u
            }

            function gt(e, t, n) {
                function r(e) {
                    var t = e.target.result;
                    t ? (o.push(t.value), t.continue()) : n({
                        target: {
                            result: o
                        }
                    })
                }
                if ("function" == typeof e.getAll) return void(e.getAll(t).onsuccess = n);
                var o = [];
                e.openCursor(t).onsuccess = r
            }

            function mt(e, t, n, r, o) {
                try {
                    if (e && t) return o ? IDBKeyRange.bound(t, e, !n, !1) : IDBKeyRange.bound(e, t, !1, !n);
                    if (e) return o ? IDBKeyRange.upperBound(e) : IDBKeyRange.lowerBound(e);
                    if (t) return o ? IDBKeyRange.lowerBound(t, !n) : IDBKeyRange.upperBound(t, !n);
                    if (r) return IDBKeyRange.only(r)
                } catch (e) {
                    return {
                        error: e
                    }
                }
                return null
            }

            function _t(e, t, n) {
                function r(t, n, r) {
                    var o = t.id + "::" + r;
                    S.get(o).onsuccess = function(r) {
                        if (n.doc = ct(r.target.result), e.conflicts) {
                            var o = V(t);
                            o.length && (n.doc._conflicts = o)
                        }
                        lt(n.doc, e, b)
                    }
                }

                function o(t, n) {
                    var o = {
                            id: n.id,
                            key: n.id,
                            value: {
                                rev: t
                            }
                        },
                        i = n.deleted;
                    "ok" === e.deleted ? (A.push(o), i ? (o.value.deleted = !0, o.doc = null) : e.include_docs && r(n, o, t)) : !i && h-- <= 0 && (A.push(o), e.include_docs && r(n, o, t))
                }

                function i(e) {
                    for (var t = 0, n = e.length; t < n && A.length !== p; t++) {
                        var r = e[t],
                            i = ut(r),
                            a = i.winningRev;
                        o(a, i)
                    }
                }

                function a(e, t, n) {
                    n && (i(t), A.length < p && n.continue())
                }

                function s(t) {
                    var n = t.target.result;
                    e.descending && (n = n.reverse()), i(n)
                }

                function u() {
                    n(null, {
                        total_rows: w,
                        offset: e.skip,
                        rows: A
                    })
                }

                function c() {
                    e.attachments ? dt(A, e.binary).then(u) : u()
                }
                var f = "startkey" in e && e.startkey,
                    l = "endkey" in e && e.endkey,
                    d = "key" in e && e.key,
                    h = e.skip || 0,
                    p = "number" == typeof e.limit ? e.limit : -1,
                    v = e.inclusive_end !== !1,
                    y = mt(f, l, v, d, e.descending),
                    g = y && y.error;
                if (g && ("DataError" !== g.name || 0 !== g.code)) return n(T(ro, g.name, g.message));
                var m = [xo, So, jo];
                e.attachments && m.push(Ao);
                var _ = pt(t, m, "readonly");
                if (_.error) return n(_.error);
                var b = _.txn;
                b.oncomplete = c, b.onabort = at(n);
                var w, k = b.objectStore(xo),
                    E = b.objectStore(So),
                    x = b.objectStore(jo),
                    S = E.index("_doc_id_rev"),
                    A = [];
                return x.get(jo).onsuccess = function(e) {
                    w = e.target.result.docCount
                }, g || 0 === p ? void 0 : p === -1 ? gt(k, y, s) : void yt(k, y, e.descending, p + h, a)
            }

            function bt(e) {
                return new Dr(function(t) {
                    var n = Ne([""]),
                        r = e.objectStore(To).put(n, "key");
                    r.onsuccess = function() {
                        var e = navigator.userAgent.match(/Chrome\/(\d+)/),
                            n = navigator.userAgent.match(/Edge\//);
                        t(n || !e || parseInt(e[1], 10) >= 43)
                    }, e.onabort = function(e) {
                        e.preventDefault(), e.stopPropagation(), t(!1)
                    }
                }).catch(function() {
                    return !1
                })
            }

            function wt(e, t) {
                var n = e.objectStore(xo).index("deletedOrLocal");
                n.count(IDBKeyRange.only("0")).onsuccess = function(e) {
                    t(e.target.result)
                }
            }

            function kt(e, t, n, r) {
                try {
                    e(t, n)
                } catch (e) {
                    r.emit("error", e)
                }
            }

            function Et() {
                !Lo && Co.length && (Lo = !0, Co.shift()())
            }

            function xt(e, t, n) {
                Co.push(function() {
                    e(function(e, r) {
                        kt(t, e, r, n), Lo = !1, Tr(function() {
                            Et(n)
                        })
                    })
                }), Et()
            }

            function St(e, t, n, r) {
                function o(t, n, r) {
                    function o(t, n) {
                        var r = e.processChange(n, t, e);
                        d = r.seq = t.seq;
                        var o = w(r);
                        return "object" == typeof o ? e.complete(o) : void(o && (b++, p && _.push(r), e.attachments && e.include_docs ? lt(n, e, v, function() {
                            dt([r], e.binary).then(function() {
                                e.onChange(r)
                            })
                        }) : e.onChange(r)))
                    }

                    function i() {
                        for (var e = 0, t = s.length; e < t && b !== h; e++) {
                            var n = s[e];
                            if (n) {
                                var i = u[e];
                                o(i, n)
                            }
                        }
                        b !== h && r.continue()
                    }
                    if (r && t.length) {
                        var s = new Array(t.length),
                            u = new Array(t.length),
                            c = 0;
                        n.forEach(function(e, n) {
                            var r = ct(e),
                                o = t[n];
                            a(r, o, function(e, r) {
                                u[n] = e, s[n] = r, ++c === t.length && i()
                            })
                        })
                    }
                }

                function i(e, t, n, r) {
                    if (n.seq !== t) return r();
                    if (n.winningRev === e._rev) return r(n, e);
                    var o = e._id + "::" + n.winningRev,
                        i = m.get(o);
                    i.onsuccess = function(e) {
                        r(n, ct(e.target.result))
                    }
                }

                function a(e, t, n) {
                    if (l && !l.has(e._id)) return n();
                    var r = k.get(e._id);
                    return r ? i(e, t, r, n) : void(g.get(e._id).onsuccess = function(o) {
                        r = ut(o.target.result), k.set(e._id, r), i(e, t, r, n)
                    })
                }

                function s() {
                    e.complete(null, {
                        results: _,
                        last_seq: d
                    })
                }

                function c() {
                    !e.continuous && e.attachments ? dt(_).then(s) : s()
                }
                if (e = u(e), e.continuous) {
                    var f = n + ":" + z();
                    return Io.addListener(n, f, t, e), Io.notify(n), {
                        cancel: function() {
                            Io.removeListener(n, f)
                        }
                    }
                }
                var l = e.doc_ids && new Br(e.doc_ids);
                e.since = e.since || 0;
                var d = e.since,
                    h = "limit" in e ? e.limit : -1;
                0 === h && (h = 1);
                var p;
                p = "return_docs" in e ? e.return_docs : !("returnDocs" in e) || e.returnDocs;
                var v, y, g, m, _ = [],
                    b = 0,
                    w = C(e),
                    k = new Pr,
                    E = [xo, So];
                e.attachments && E.push(Ao);
                var x = pt(r, E, "readonly");
                if (x.error) return e.complete(x.error);
                v = x.txn, v.onabort = at(e.complete), v.oncomplete = c, y = v.objectStore(So), g = v.objectStore(xo), m = y.index("_doc_id_rev");
                var S = e.since && !e.descending ? IDBKeyRange.lowerBound(e.since, !0) : null;
                yt(y, S, e.descending, h, o)
            }

            function At(e, t) {
                var n = this;
                xt(function(t) {
                    Ot(n, e, t)
                }, t, n.constructor)
            }

            function Ot(e, t, n) {
                function r(e) {
                    var t = e.createObjectStore(xo, {
                        keyPath: "id"
                    });
                    e.createObjectStore(So, {
                        autoIncrement: !0
                    }).createIndex("_doc_id_rev", "_doc_id_rev", {
                        unique: !0
                    }), e.createObjectStore(Ao, {
                        keyPath: "digest"
                    }), e.createObjectStore(jo, {
                        keyPath: "id",
                        autoIncrement: !1
                    }), e.createObjectStore(To), t.createIndex("deletedOrLocal", "deletedOrLocal", {
                        unique: !1
                    }), e.createObjectStore(qo, {
                        keyPath: "_id"
                    });
                    var n = e.createObjectStore(Oo, {
                        autoIncrement: !0
                    });
                    n.createIndex("seq", "seq"), n.createIndex("digestSeq", "digestSeq", {
                        unique: !0
                    })
                }

                function o(e, t) {
                    var n = e.objectStore(xo);
                    n.createIndex("deletedOrLocal", "deletedOrLocal", {
                        unique: !1
                    }), n.openCursor().onsuccess = function(e) {
                        var r = e.target.result;
                        if (r) {
                            var o = r.value,
                                i = ce(o);
                            o.deletedOrLocal = i ? "1" : "0", n.put(o), r.continue()
                        } else t()
                    }
                }

                function i(e) {
                    e.createObjectStore(qo, {
                        keyPath: "_id"
                    }).createIndex("_doc_id_rev", "_doc_id_rev", {
                        unique: !0
                    })
                }

                function a(e, t) {
                    var n = e.objectStore(qo),
                        r = e.objectStore(xo),
                        o = e.objectStore(So),
                        i = r.openCursor();
                    i.onsuccess = function(e) {
                        var i = e.target.result;
                        if (i) {
                            var a = i.value,
                                s = a.id,
                                u = fe(s),
                                c = K(a);
                            if (u) {
                                var f = s + "::" + c,
                                    l = s + "::",
                                    d = s + "::~",
                                    h = o.index("_doc_id_rev"),
                                    p = IDBKeyRange.bound(l, d, !1, !1),
                                    v = h.openCursor(p);
                                v.onsuccess = function(e) {
                                    if (v = e.target.result) {
                                        var t = v.value;
                                        t._doc_id_rev === f && n.put(t), o.delete(v.primaryKey), v.continue()
                                    } else r.delete(i.primaryKey), i.continue()
                                }
                            } else i.continue()
                        } else t && t()
                    }
                }

                function s(e) {
                    var t = e.createObjectStore(Oo, {
                        autoIncrement: !0
                    });
                    t.createIndex("seq", "seq"), t.createIndex("digestSeq", "digestSeq", {
                        unique: !0
                    })
                }

                function u(e, t) {
                    var n = e.objectStore(So),
                        r = e.objectStore(Ao),
                        o = e.objectStore(Oo),
                        i = r.count();
                    i.onsuccess = function(e) {
                        var r = e.target.result;
                        return r ? void(n.openCursor().onsuccess = function(e) {
                            var n = e.target.result;
                            if (!n) return t();
                            for (var r = n.value, i = n.primaryKey, a = Object.keys(r._attachments || {}), s = {}, u = 0; u < a.length; u++) {
                                var c = r._attachments[a[u]];
                                s[c.digest] = !0
                            }
                            var f = Object.keys(s);
                            for (u = 0; u < f.length; u++) {
                                var l = f[u];
                                o.put({
                                    seq: i,
                                    digestSeq: l + "::" + i
                                })
                            }
                            n.continue()
                        }) : t()
                    }
                }

                function c(e) {
                    function t(e) {
                        return e.data ? ut(e) : (e.deleted = "1" === e.deletedOrLocal, e)
                    }
                    var n = e.objectStore(So),
                        r = e.objectStore(xo),
                        o = r.openCursor();
                    o.onsuccess = function(e) {
                        function o() {
                            var e = s.id + "::",
                                t = s.id + "::￿",
                                r = n.index("_doc_id_rev").openCursor(IDBKeyRange.bound(e, t)),
                                o = 0;
                            r.onsuccess = function(e) {
                                var t = e.target.result;
                                if (!t) return s.seq = o, i();
                                var n = t.primaryKey;
                                n > o && (o = n), t.continue()
                            }
                        }

                        function i() {
                            var e = st(s, s.winningRev, s.deleted),
                                t = r.put(e);
                            t.onsuccess = function() {
                                a.continue()
                            }
                        }
                        var a = e.target.result;
                        if (a) {
                            var s = t(a.value);
                            return s.winningRev = s.winningRev || K(s), s.seq ? i() : void o()
                        }
                    }
                }
                var l = t.name,
                    d = null;
                e._meta = null, e.type = function() {
                    return "idb"
                }, e._id = f(function(t) {
                    t(null, e._meta.instanceId)
                }), e._bulkDocs = function(n, r, o) {
                    vt(t, n, r, e, d, o)
                }, e._get = function(e, t, n) {
                    function r() {
                        n(a, {
                            doc: o,
                            metadata: i,
                            ctx: s
                        })
                    }
                    var o, i, a, s = t.ctx;
                    if (!s) {
                        var u = pt(d, [xo, So, Ao], "readonly");
                        if (u.error) return n(u.error);
                        s = u.txn
                    }
                    s.objectStore(xo).get(e).onsuccess = function(e) {
                        if (i = ut(e.target.result), !i) return a = T(Hr, "missing"), r();
                        var n;
                        if (t.rev) n = t.latest ? le(t.rev, i) : t.rev;
                        else {
                            n = i.winningRev;
                            var u = ce(i);
                            if (u) return a = T(Hr, "deleted"), r()
                        }
                        var c = s.objectStore(So),
                            f = i.id + "::" + n;
                        c.index("_doc_id_rev").get(f).onsuccess = function(e) {
                            return o = e.target.result, o && (o = ct(o)), o ? void r() : (a = T(Hr, "missing"), r())
                        }
                    }
                }, e._getAttachment = function(e, t, n, r, o) {
                    var i;
                    if (r.ctx) i = r.ctx;
                    else {
                        var a = pt(d, [xo, So, Ao], "readonly");
                        if (a.error) return o(a.error);
                        i = a.txn
                    }
                    var s = n.digest,
                        u = n.content_type;
                    i.objectStore(Ao).get(s).onsuccess = function(e) {
                        var t = e.target.result.body;
                        ft(t, u, r.binary, function(e) {
                            o(null, e)
                        })
                    }
                }, e._info = function(t) {
                    var n, r, o = pt(d, [jo, So], "readonly");
                    if (o.error) return t(o.error);
                    var i = o.txn;
                    i.objectStore(jo).get(jo).onsuccess = function(e) {
                        r = e.target.result.docCount
                    }, i.objectStore(So).openCursor(null, "prev").onsuccess = function(e) {
                        var t = e.target.result;
                        n = t ? t.key : 0
                    }, i.oncomplete = function() {
                        t(null, {
                            doc_count: r,
                            update_seq: n,
                            idb_attachment_format: e._meta.blobSupport ? "binary" : "base64"
                        })
                    }
                }, e._allDocs = function(e, t) {
                    _t(e, d, t)
                }, e._changes = function(t) {
                    St(t, e, l, d)
                }, e._close = function(e) {
                    d.close(), Do.delete(l), e()
                }, e._getRevisionTree = function(e, t) {
                    var n = pt(d, [xo], "readonly");
                    if (n.error) return t(n.error);
                    var r = n.txn,
                        o = r.objectStore(xo).get(e);
                    o.onsuccess = function(e) {
                        var n = ut(e.target.result);
                        n ? t(null, n.rev_tree) : t(T(Hr))
                    }
                }, e._doCompaction = function(e, t, n) {
                    var r = [xo, So, Ao, Oo],
                        o = pt(d, r, "readwrite");
                    if (o.error) return n(o.error);
                    var i = o.txn,
                        a = i.objectStore(xo);
                    a.get(e).onsuccess = function(n) {
                        var r = ut(n.target.result);
                        H(r.rev_tree, function(e, n, r, o, i) {
                            var a = n + "-" + r;
                            t.indexOf(a) !== -1 && (i.status = "missing")
                        }), ht(t, e, i);
                        var o = r.winningRev,
                            a = r.deleted;
                        i.objectStore(xo).put(st(r, o, a))
                    }, i.onabort = at(n), i.oncomplete = function() {
                        n()
                    }
                }, e._getLocal = function(e, t) {
                    var n = pt(d, [qo], "readonly");
                    if (n.error) return t(n.error);
                    var r = n.txn,
                        o = r.objectStore(qo).get(e);
                    o.onerror = at(t), o.onsuccess = function(e) {
                        var n = e.target.result;
                        n ? (delete n._doc_id_rev, t(null, n)) : t(T(Hr))
                    }
                }, e._putLocal = function(e, t, n) {
                    "function" == typeof t && (n = t, t = {}), delete e._revisions;
                    var r = e._rev,
                        o = e._id;
                    r ? e._rev = "0-" + (parseInt(r.split("-")[1], 10) + 1) : e._rev = "0-1";
                    var i, a = t.ctx;
                    if (!a) {
                        var s = pt(d, [qo], "readwrite");
                        if (s.error) return n(s.error);
                        a = s.txn, a.onerror = at(n), a.oncomplete = function() {
                            i && n(null, i)
                        }
                    }
                    var u, c = a.objectStore(qo);
                    r ? (u = c.get(o), u.onsuccess = function(o) {
                        var a = o.target.result;
                        if (a && a._rev === r) {
                            var s = c.put(e);
                            s.onsuccess = function() {
                                i = {
                                    ok: !0,
                                    id: e._id,
                                    rev: e._rev
                                }, t.ctx && n(null, i)
                            }
                        } else n(T(Gr))
                    }) : (u = c.add(e), u.onerror = function(e) {
                        n(T(Gr)), e.preventDefault(), e.stopPropagation()
                    }, u.onsuccess = function() {
                        i = {
                            ok: !0,
                            id: e._id,
                            rev: e._rev
                        }, t.ctx && n(null, i)
                    })
                }, e._removeLocal = function(e, t, n) {
                    "function" == typeof t && (n = t, t = {});
                    var r = t.ctx;
                    if (!r) {
                        var o = pt(d, [qo], "readwrite");
                        if (o.error) return n(o.error);
                        r = o.txn, r.oncomplete = function() {
                            i && n(null, i)
                        }
                    }
                    var i, a = e._id,
                        s = r.objectStore(qo),
                        u = s.get(a);
                    u.onerror = at(n), u.onsuccess = function(r) {
                        var o = r.target.result;
                        o && o._rev === e._rev ? (s.delete(a), i = {
                            ok: !0,
                            id: a,
                            rev: "0-0"
                        }, t.ctx && n(null, i)) : n(T(Hr))
                    }
                }, e._destroy = function(e, t) {
                    Io.removeAllListeners(l);
                    var n = No.get(l);
                    n && n.result && (n.result.close(), Do.delete(l));
                    var r = indexedDB.deleteDatabase(l);
                    r.onsuccess = function() {
                        No.delete(l), k() && l in localStorage && delete localStorage[l], t(null, {
                            ok: !0
                        })
                    }, r.onerror = at(t)
                };
                var h = Do.get(l);
                if (h) return d = h.idb, e._meta = h.global, Tr(function() {
                    n(null, e)
                });
                var p;
                p = t.storage ? jt(l, t.storage) : indexedDB.open(l, Eo), No.set(l, p), p.onupgradeneeded = function(e) {
                    function t() {
                        var e = l[d - 1];
                        d++, e && e(f, t)
                    }
                    var n = e.target.result;
                    if (e.oldVersion < 1) return r(n);
                    var f = e.currentTarget.transaction;
                    e.oldVersion < 3 && i(n), e.oldVersion < 4 && s(n);
                    var l = [o, a, u, c],
                        d = e.oldVersion;
                    t()
                }, p.onsuccess = function(t) {
                    function r() {
                        "undefined" != typeof s && f && (e._meta = {
                            name: l,
                            instanceId: u,
                            blobSupport: s
                        }, Do.set(l, {
                            idb: d,
                            global: e._meta
                        }), n(null, e))
                    }

                    function o() {
                        if ("undefined" != typeof a && "undefined" != typeof i) {
                            var e = l + "_id";
                            e in i ? u = i[e] : i[e] = u = z(), i.docCount = a, c.objectStore(jo).put(i)
                        }
                    }
                    d = t.target.result, d.onversionchange = function() {
                        d.close(), Do.delete(l)
                    }, d.onabort = function(e) {
                        S("error", "Database has a global failure", e.target.error), d.close(), Do.delete(l)
                    };
                    var i, a, s, u, c = d.transaction([jo, To, xo], "readwrite"),
                        f = !1;
                    c.objectStore(jo).get(jo).onsuccess = function(e) {
                        i = e.target.result || {
                            id: jo
                        }, o()
                    }, wt(c, function(e) {
                        a = e, o()
                    }), yo || (yo = bt(c)), yo.then(function(e) {
                        s = e, r()
                    }), c.oncomplete = function() {
                        f = !0, r()
                    }
                }, p.onerror = function() {
                    var e = "Failed to open indexedDB, are you in private browsing mode?";
                    S("error", e), n(T(ro, e))
                }
            }

            function jt(e, t) {
                try {
                    return indexedDB.open(e, {
                        version: Eo,
                        storage: t
                    })
                } catch (t) {
                    return indexedDB.open(e, Eo)
                }
            }

            function qt(e) {
                return decodeURIComponent(escape(e))
            }

            function Tt(e) {
                return e < 65 ? e - 48 : e - 55
            }

            function It(e, t, n) {
                for (var r = ""; t < n;) r += String.fromCharCode(Tt(e.charCodeAt(t++)) << 4 | Tt(e.charCodeAt(t++)));
                return r
            }

            function Lt(e, t, n) {
                for (var r = ""; t < n;) r += String.fromCharCode(Tt(e.charCodeAt(t + 2)) << 12 | Tt(e.charCodeAt(t + 3)) << 8 | Tt(e.charCodeAt(t)) << 4 | Tt(e.charCodeAt(t + 1))), t += 4;
                return r
            }

            function Ct(e, t) {
                return "UTF-8" === t ? qt(It(e, 0, e.length)) : Lt(e, 0, e.length)
            }

            function Dt(e) {
                return "'" + e + "'"
            }

            function Nt(e) {
                return e.replace(/\u0002/g, "").replace(/\u0001/g, "").replace(/\u0000/g, "")
            }

            function Rt(e) {
                return e.replace(/\u0001\u0001/g, "\0").replace(/\u0001\u0002/g, "").replace(/\u0002\u0002/g, "")
            }

            function Mt(e) {
                return delete e._id, delete e._rev, JSON.stringify(e)
            }

            function Bt(e, t, n) {
                return e = JSON.parse(e), e._id = t, e._rev = n, e
            }

            function Pt(e) {
                for (var t = "("; e--;) t += "?", e && (t += ",");
                return t + ")"
            }

            function Ft(e, t, n, r, o) {
                return "SELECT " + e + " FROM " + ("string" == typeof t ? t : t.join(" JOIN ")) + (n ? " ON " + n : "") + (r ? " WHERE " + ("string" == typeof r ? r : r.join(" AND ")) : "") + (o ? " ORDER BY " + o : "")
            }

            function $t(e, t, n) {
                function r() {
                    ++i === e.length && o()
                }

                function o() {
                    if (a.length) {
                        var e = "SELECT DISTINCT digest AS digest FROM " + Wo + " WHERE seq IN " + Pt(a.length);
                        n.executeSql(e, a, function(e, t) {
                            for (var n = [], r = 0; r < t.rows.length; r++) n.push(t.rows.item(r).digest);
                            if (n.length) {
                                var o = "DELETE FROM " + Wo + " WHERE seq IN (" + a.map(function() {
                                    return "?"
                                }).join(",") + ")";
                                e.executeSql(o, a, function(e) {
                                    var t = "SELECT digest FROM " + Wo + " WHERE digest IN (" + n.map(function() {
                                        return "?"
                                    }).join(",") + ")";
                                    e.executeSql(t, n, function(e, t) {
                                        for (var r = new Br, o = 0; o < t.rows.length; o++) r.add(t.rows.item(o).digest);
                                        n.forEach(function(t) {
                                            r.has(t) || (e.executeSql("DELETE FROM " + Wo + " WHERE digest=?", [t]), e.executeSql("DELETE FROM " + Fo + " WHERE digest=?", [t]))
                                        })
                                    })
                                })
                            }
                        })
                    }
                }
                if (e.length) {
                    var i = 0,
                        a = [];
                    e.forEach(function(e) {
                        var o = "SELECT seq FROM " + Po + " WHERE doc_id=? AND rev=?";
                        n.executeSql(o, [t, e], function(e, t) {
                            if (!t.rows.length) return r();
                            var n = t.rows.item(0).seq;
                            a.push(n), e.executeSql("DELETE FROM " + Po + " WHERE seq=?", [n], r)
                        })
                    })
                }
            }

            function Ut(e) {
                return function(t) {
                    S("error", "WebSQL threw an error", t);
                    var n = t && t.constructor.toString().match(/function ([^\(]+)/),
                        r = n && n[1] || t.type,
                        o = t.target || t.message;
                    e(T(oo, o, r))
                }
            }

            function Wt(e) {
                if ("size" in e) return 1e6 * e.size;
                var t = "undefined" != typeof navigator && /Android/.test(navigator.userAgent);
                return t ? 5e6 : 1
            }

            function zt(e, t, n, r, o, i, a) {
                function s() {
                    return _ ? a(_) : (i.notify(r._name), void a(null, b))
                }

                function u(e, t) {
                    var n = "SELECT count(*) as cnt FROM " + Fo + " WHERE digest=?";
                    m.executeSql(n, [e], function(n, r) {
                        if (0 === r.rows.item(0).cnt) {
                            var o = T(ao, "unknown stub attachment with digest " + e);
                            t(o)
                        } else t()
                    })
                }

                function c(e) {
                    function t() {
                        ++o === n.length && e(r)
                    }
                    var n = [];
                    if (y.forEach(function(e) {
                            e.data && e.data._attachments && Object.keys(e.data._attachments).forEach(function(t) {
                                var r = e.data._attachments[t];
                                r.stub && n.push(r.digest)
                            })
                        }), !n.length) return e();
                    var r, o = 0;
                    n.forEach(function(e) {
                        u(e, function(e) {
                            e && !r && (r = e), t()
                        })
                    })
                }

                function f(e, t, n, o, i, a, s, u) {
                    function c() {
                        function t(e, t) {
                            function r() {
                                return ++i === a.length && t(), !1
                            }

                            function o(t) {
                                var o = "INSERT INTO " + Wo + " (digest, seq) VALUES (?,?)",
                                    i = [n._attachments[t].digest, e];
                                m.executeSql(o, i, r, r)
                            }
                            var i = 0,
                                a = Object.keys(n._attachments || {});
                            if (!a.length) return t();
                            for (var s = 0; s < a.length; s++) o(a[s])
                        }
                        var n = e.data,
                            r = o ? 1 : 0,
                            i = n._id,
                            a = n._rev,
                            s = Mt(n),
                            u = "INSERT INTO " + Po + " (doc_id, rev, json, deleted) VALUES (?, ?, ?, ?);",
                            c = [i, a, s, r];
                        m.executeSql(u, c, function(e, n) {
                            var r = n.insertId;
                            t(r, function() {
                                d(e, r)
                            })
                        }, function() {
                            var e = Ft("seq", Po, null, "doc_id=? AND rev=?");
                            return m.executeSql(e, [i, a], function(e, n) {
                                var o = n.rows.item(0).seq,
                                    u = "UPDATE " + Po + " SET json=?, deleted=? WHERE doc_id=? AND rev=?;",
                                    c = [s, r, i, a];
                                e.executeSql(u, c, function(e) {
                                    t(o, function() {
                                        d(e, o)
                                    })
                                })
                            }), !1
                        })
                    }

                    function f(e) {
                        p || (e ? (p = e, u(p)) : v === y.length && c())
                    }

                    function l(e) {
                        v++, f(e)
                    }

                    function d(n, o) {
                        var a = e.metadata.id,
                            c = e.stemmedRevs || [];
                        i && r.auto_compaction && (c = X(e.metadata).concat(c)), c.length && $t(c, a, n), e.metadata.seq = o;
                        var f = e.metadata.rev;
                        delete e.metadata.rev;
                        var l = i ? "UPDATE " + Bo + " SET json=?, max_seq=?, winningseq=(SELECT seq FROM " + Po + " WHERE doc_id=" + Bo + ".id AND rev=?) WHERE id=?" : "INSERT INTO " + Bo + " (id, winningseq, max_seq, json) VALUES (?,?,?,?);",
                            d = it(e.metadata),
                            h = i ? [d, o, t, a] : [a, o, o, d];
                        n.executeSql(l, h, function() {
                            b[s] = {
                                ok: !0,
                                id: e.metadata.id,
                                rev: f
                            }, w.set(a, e.metadata), u()
                        })
                    }
                    var p = null,
                        v = 0;
                    e.data._id = e.metadata.id, e.data._rev = e.metadata.rev;
                    var y = Object.keys(e.data._attachments || {});
                    o && (e.data._deleted = !0), y.forEach(function(n) {
                        var r = e.data._attachments[n];
                        if (r.stub) v++, f();
                        else {
                            var o = r.data;
                            delete r.data, r.revpos = parseInt(t, 10);
                            var i = r.digest;
                            h(i, o, l)
                        }
                    }), y.length || c()
                }

                function l() {
                    rt(e.revs_limit, y, r, w, m, b, f, n)
                }

                function d(e) {
                    function t() {
                        ++n === y.length && e()
                    }
                    if (!y.length) return e();
                    var n = 0;
                    y.forEach(function(e) {
                        if (e._id && fe(e._id)) return t();
                        var n = e.metadata.id;
                        m.executeSql("SELECT json FROM " + Bo + " WHERE id = ?", [n], function(e, r) {
                            if (r.rows.length) {
                                var o = ot(r.rows.item(0).json);
                                w.set(n, o)
                            }
                            t()
                        })
                    })
                }

                function h(e, t, n) {
                    var r = "SELECT digest FROM " + Fo + " WHERE digest=?";
                    m.executeSql(r, [e], function(o, i) {
                        return i.rows.length ? n() : (r = "INSERT INTO " + Fo + " (digest, body, escaped) VALUES (?,?,1)", void o.executeSql(r, [e, Nt(t)], function() {
                            n()
                        }, function() {
                            return n(), !1
                        }))
                    })
                }
                var p = n.new_edits,
                    v = t.docs,
                    y = v.map(function(e) {
                        if (e._id && fe(e._id)) return e;
                        var t = De(e, p);
                        return t
                    }),
                    g = y.filter(function(e) {
                        return e.error
                    });
                if (g.length) return a(g[0]);
                var m, _, b = new Array(y.length),
                    w = new Pr;
                et(y, "binary", function(e) {
                    return e ? a(e) : void o.transaction(function(e) {
                        m = e, c(function(e) {
                            e ? _ = e : d(l)
                        })
                    }, Ut(a), s)
                })
            }

            function Kt(e) {
                return e.websql(e.name, e.version, e.description, e.size)
            }

            function Ht(e) {
                try {
                    return {
                        db: Kt(e)
                    }
                } catch (e) {
                    return {
                        error: e
                    }
                }
            }

            function Gt(e) {
                var t = zo.get(e.name);
                return t || (t = Ht(e), zo.set(e.name, t)), t
            }

            function Jt(e, t, n, r, o) {
                function i() {
                    ++u === s.length && o && o()
                }

                function a(e, o) {
                    var a = e._attachments[o],
                        s = {
                            binary: t.binary,
                            ctx: r
                        };
                    n._getAttachment(e._id, o, a, s, function(t, n) {
                        e._attachments[o] = Wr(g(a, ["digest", "content_type"]), {
                            data: n
                        }), i()
                    })
                }
                var s = Object.keys(e._attachments || {});
                if (!s.length) return o && o();
                var u = 0;
                s.forEach(function(n) {
                    t.attachments && t.include_docs ? a(e, n) : (e._attachments[n].stub = !0, i())
                })
            }

            function Vt(e, t) {
                function n() {
                    k() && (window.localStorage["_pouch__websqldb_" + b._name] = !0), t(null, b)
                }

                function r(e, t) {
                    e.executeSql(Vo), e.executeSql("ALTER TABLE " + Po + " ADD COLUMN deleted TINYINT(1) DEFAULT 0", [], function() {
                        e.executeSql(Go), e.executeSql("ALTER TABLE " + Bo + " ADD COLUMN local TINYINT(1) DEFAULT 0", [], function() {
                            e.executeSql("CREATE INDEX IF NOT EXISTS 'doc-store-local-idx' ON " + Bo + " (local, id)");
                            var n = "SELECT " + Bo + ".winningseq AS seq, " + Bo + ".json AS metadata FROM " + Po + " JOIN " + Bo + " ON " + Po + ".seq = " + Bo + ".winningseq";
                            e.executeSql(n, [], function(e, n) {
                                for (var r = [], o = [], i = 0; i < n.rows.length; i++) {
                                    var a = n.rows.item(i),
                                        s = a.seq,
                                        u = JSON.parse(a.metadata);
                                    ce(u) && r.push(s), fe(u.id) && o.push(u.id)
                                }
                                e.executeSql("UPDATE " + Bo + "SET local = 1 WHERE id IN " + Pt(o.length), o, function() {
                                    e.executeSql("UPDATE " + Po + " SET deleted = 1 WHERE seq IN " + Pt(r.length), r, t)
                                })
                            })
                        })
                    })
                }

                function o(e, t) {
                    var n = "CREATE TABLE IF NOT EXISTS " + $o + " (id UNIQUE, rev, json)";
                    e.executeSql(n, [], function() {
                        var n = "SELECT " + Bo + ".id AS id, " + Po + ".json AS data FROM " + Po + " JOIN " + Bo + " ON " + Po + ".seq = " + Bo + ".winningseq WHERE local = 1";
                        e.executeSql(n, [], function(e, n) {
                            function r() {
                                if (!o.length) return t(e);
                                var n = o.shift(),
                                    i = JSON.parse(n.data)._rev;
                                e.executeSql("INSERT INTO " + $o + " (id, rev, json) VALUES (?,?,?)", [n.id, i, n.data], function(e) {
                                    e.executeSql("DELETE FROM " + Bo + " WHERE id=?", [n.id], function(e) {
                                        e.executeSql("DELETE FROM " + Po + " WHERE seq=?", [n.seq], function() {
                                            r()
                                        })
                                    })
                                })
                            }
                            for (var o = [], i = 0; i < n.rows.length; i++) o.push(n.rows.item(i));
                            r()
                        })
                    })
                }

                function i(e, t) {
                    function n(n) {
                        function r() {
                            if (!n.length) return t(e);
                            var o = n.shift(),
                                i = Ct(o.hex, _),
                                a = i.lastIndexOf("::"),
                                s = i.substring(0, a),
                                u = i.substring(a + 2),
                                c = "UPDATE " + Po + " SET doc_id=?, rev=? WHERE doc_id_rev=?";
                            e.executeSql(c, [s, u, i], function() {
                                r()
                            })
                        }
                        r()
                    }
                    var r = "ALTER TABLE " + Po + " ADD COLUMN doc_id";
                    e.executeSql(r, [], function(e) {
                        var t = "ALTER TABLE " + Po + " ADD COLUMN rev";
                        e.executeSql(t, [], function(e) {
                            e.executeSql(Jo, [], function(e) {
                                var t = "SELECT hex(doc_id_rev) as hex FROM " + Po;
                                e.executeSql(t, [], function(e, t) {
                                    for (var r = [], o = 0; o < t.rows.length; o++) r.push(t.rows.item(o));
                                    n(r)
                                })
                            })
                        })
                    })
                }

                function a(e, t) {
                    function n(e) {
                        var n = "SELECT COUNT(*) AS cnt FROM " + Fo;
                        e.executeSql(n, [], function(e, n) {
                            function r() {
                                var n = Ft(Zo + ", " + Bo + ".id AS id", [Bo, Po], Yo, null, Bo + ".id ");
                                n += " LIMIT " + a + " OFFSET " + i, i += a, e.executeSql(n, [], function(e, n) {
                                    function o(e, t) {
                                        var n = i[e] = i[e] || [];
                                        n.indexOf(t) === -1 && n.push(t)
                                    }
                                    if (!n.rows.length) return t(e);
                                    for (var i = {}, a = 0; a < n.rows.length; a++)
                                        for (var s = n.rows.item(a), u = Bt(s.data, s.id, s.rev), c = Object.keys(u._attachments || {}), f = 0; f < c.length; f++) {
                                            var l = u._attachments[c[f]];
                                            o(l.digest, s.seq)
                                        }
                                    var d = [];
                                    if (Object.keys(i).forEach(function(e) {
                                            var t = i[e];
                                            t.forEach(function(t) {
                                                d.push([e, t])
                                            })
                                        }), !d.length) return r();
                                    var h = 0;
                                    d.forEach(function(t) {
                                        var n = "INSERT INTO " + Wo + " (digest, seq) VALUES (?,?)";
                                        e.executeSql(n, t, function() {
                                            ++h === d.length && r()
                                        })
                                    })
                                })
                            }
                            var o = n.rows.item(0).cnt;
                            if (!o) return t(e);
                            var i = 0,
                                a = 10;
                            r()
                        })
                    }
                    var r = "CREATE TABLE IF NOT EXISTS " + Wo + " (digest, seq INTEGER)";
                    e.executeSql(r, [], function(e) {
                        e.executeSql(Qo, [], function(e) {
                            e.executeSql(Xo, [], n)
                        })
                    })
                }

                function s(e, t) {
                    var n = "ALTER TABLE " + Fo + " ADD COLUMN escaped TINYINT(1) DEFAULT 0";
                    e.executeSql(n, [], t)
                }

                function c(e, t) {
                    var n = "ALTER TABLE " + Bo + " ADD COLUMN max_seq INTEGER";
                    e.executeSql(n, [], function(e) {
                        var n = "UPDATE " + Bo + " SET max_seq=(SELECT MAX(seq) FROM " + Po + " WHERE doc_id=id)";
                        e.executeSql(n, [], function(e) {
                            var n = "CREATE UNIQUE INDEX IF NOT EXISTS 'doc-max-seq-idx' ON " + Bo + " (max_seq)";
                            e.executeSql(n, [], t)
                        })
                    })
                }

                function l(e, t) {
                    e.executeSql('SELECT HEX("a") AS hex', [], function(e, n) {
                        var r = n.rows.item(0).hex;
                        _ = 2 === r.length ? "UTF-8" : "UTF-16", t()
                    })
                }

                function d() {
                    for (; x.length > 0;) {
                        var e = x.pop();
                        e(null, w)
                    }
                }

                function h(e, t) {
                    if (0 === t) {
                        var n = "CREATE TABLE IF NOT EXISTS " + Uo + " (dbid, db_version INTEGER)",
                            u = "CREATE TABLE IF NOT EXISTS " + Fo + " (digest UNIQUE, escaped TINYINT(1), body BLOB)",
                            f = "CREATE TABLE IF NOT EXISTS " + Wo + " (digest, seq INTEGER)",
                            l = "CREATE TABLE IF NOT EXISTS " + Bo + " (id unique, json, winningseq, max_seq INTEGER UNIQUE)",
                            h = "CREATE TABLE IF NOT EXISTS " + Po + " (seq INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, json, deleted TINYINT(1), doc_id, rev)",
                            p = "CREATE TABLE IF NOT EXISTS " + $o + " (id UNIQUE, rev, json)";
                        e.executeSql(u), e.executeSql(p), e.executeSql(f, [], function() {
                            e.executeSql(Xo), e.executeSql(Qo)
                        }), e.executeSql(l, [], function() {
                            e.executeSql(Vo), e.executeSql(h, [], function() {
                                e.executeSql(Go), e.executeSql(Jo), e.executeSql(n, [], function() {
                                    var t = "INSERT INTO " + Uo + " (db_version, dbid) VALUES (?,?)";
                                    w = z();
                                    var n = [Mo, w];
                                    e.executeSql(t, n, function() {
                                        d()
                                    })
                                })
                            })
                        })
                    } else {
                        var v = function() {
                                var n = t < Mo;
                                n && e.executeSql("UPDATE " + Uo + " SET db_version = " + Mo);
                                var r = "SELECT dbid FROM " + Uo;
                                e.executeSql(r, [], function(e, t) {
                                    w = t.rows.item(0).dbid, d()
                                })
                            },
                            y = [r, o, i, a, s, c, v],
                            g = t,
                            m = function(e) {
                                y[g - 1](e, m), g++
                            };
                        m(e)
                    }
                }

                function p() {
                    O.transaction(function(e) {
                        l(e, function() {
                            v(e)
                        })
                    }, Ut(t), n)
                }

                function v(e) {
                    var t = "SELECT sql FROM sqlite_master WHERE tbl_name = " + Uo;
                    e.executeSql(t, [], function(e, t) {
                        t.rows.length ? /db_version/.test(t.rows.item(0).sql) ? e.executeSql("SELECT db_version FROM " + Uo, [], function(e, t) {
                            var n = t.rows.item(0).db_version;
                            h(e, n)
                        }) : e.executeSql("ALTER TABLE " + Uo + " ADD COLUMN db_version INTEGER", [], function() {
                            h(e, 1)
                        }) : h(e, 0)
                    })
                }

                function y(e, t) {
                    var n = "SELECT MAX(seq) AS seq FROM " + Po;
                    e.executeSql(n, [], function(e, n) {
                        var r = n.rows.item(0).seq || 0;
                        t(r)
                    })
                }

                function g(e, t) {
                    var n = Ft("COUNT(" + Bo + ".id) AS 'num'", [Bo, Po], Yo, Po + ".deleted=0");
                    e.executeSql(n, [], function(e, n) {
                        t(n.rows.item(0).num)
                    })
                }

                function m(e, t, n, r, o) {
                    var i = Ft(Zo, [Bo, Po], Yo, Bo + ".id=?"),
                        a = [t];
                    e.executeSql(i, a, function(e, t) {
                        if (!t.rows.length) {
                            var i = T(Hr, "missing");
                            return o(i)
                        }
                        var a = t.rows.item(0),
                            s = ot(a.metadata);
                        r(le(n, s))
                    })
                }
                var _, b = this,
                    w = null,
                    E = Wt(e),
                    x = [];
                b._name = e.name;
                var S = Wr({}, e, {
                        version: Ho,
                        description: e.name,
                        size: E
                    }),
                    A = Gt(S);
                if (A.error) return Ut(t)(A.error);
                var O = A.db;
                "function" != typeof O.readTransaction && (O.readTransaction = O.transaction), p(), b.type = function() {
                    return "websql"
                }, b._id = f(function(e) {
                    e(null, w)
                }), b._info = function(e) {
                    var t, n;
                    O.readTransaction(function(e) {
                        y(e, function(e) {
                            t = e
                        }), g(e, function(e) {
                            n = e
                        })
                    }, Ut(e), function() {
                        e(null, {
                            doc_count: n,
                            update_seq: t,
                            websql_encoding: _
                        })
                    })
                }, b._bulkDocs = function(t, n, r) {
                    zt(e, t, n, b, O, Ko, r)
                }, b._get = function(e, t, n) {
                    function r(e) {
                        n(e, {
                            doc: o,
                            metadata: i,
                            ctx: a
                        })
                    }
                    var o, i, a = t.ctx;
                    if (!a) return O.readTransaction(function(r) {
                        b._get(e, Wr({
                            ctx: r
                        }, t), n)
                    });
                    var s, u;
                    if (t.rev) {
                        if (t.latest) return void m(a, e, t.rev, function(r) {
                            t.latest = !1, t.rev = r, b._get(e, t, n)
                        }, r);
                        s = Ft(Zo, [Bo, Po], Bo + ".id=" + Po + ".doc_id", [Po + ".doc_id=?", Po + ".rev=?"]), u = [e, t.rev]
                    } else s = Ft(Zo, [Bo, Po], Yo, Bo + ".id=?"), u = [e];
                    a.executeSql(s, u, function(e, n) {
                        if (!n.rows.length) {
                            var a = T(Hr, "missing");
                            return r(a)
                        }
                        var s = n.rows.item(0);
                        if (i = ot(s.metadata), s.deleted && !t.rev) {
                            var u = T(Hr, "deleted");
                            return r(u)
                        }
                        o = Bt(s.data, i.id, s.rev), r()
                    })
                }, b._allDocs = function(e, t) {
                    var n, r = [],
                        o = "startkey" in e && e.startkey,
                        i = "endkey" in e && e.endkey,
                        a = "key" in e && e.key,
                        s = "descending" in e && e.descending,
                        u = "limit" in e ? e.limit : -1,
                        c = "skip" in e ? e.skip : 0,
                        f = e.inclusive_end !== !1,
                        l = [],
                        d = [];
                    if (a !== !1) d.push(Bo + ".id = ?"), l.push(a);
                    else if (o !== !1 || i !== !1) {
                        if (o !== !1 && (d.push(Bo + ".id " + (s ? "<=" : ">=") + " ?"), l.push(o)), i !== !1) {
                            var h = s ? ">" : "<";
                            f && (h += "="), d.push(Bo + ".id " + h + " ?"), l.push(i)
                        }
                        a !== !1 && (d.push(Bo + ".id = ?"), l.push(a))
                    }
                    "ok" !== e.deleted && d.push(Po + ".deleted = 0"), O.readTransaction(function(t) {
                        if (g(t, function(e) {
                                n = e
                            }), 0 !== u) {
                            var o = Ft(Zo, [Bo, Po], Yo, d, Bo + ".id " + (s ? "DESC" : "ASC"));
                            o += " LIMIT " + u + " OFFSET " + c, t.executeSql(o, l, function(t, n) {
                                for (var o = 0, i = n.rows.length; o < i; o++) {
                                    var a = n.rows.item(o),
                                        s = ot(a.metadata),
                                        u = s.id,
                                        c = Bt(a.data, u, a.rev),
                                        f = c._rev,
                                        l = {
                                            id: u,
                                            key: u,
                                            value: {
                                                rev: f
                                            }
                                        };
                                    if (e.include_docs) {
                                        if (l.doc = c, l.doc._rev = f, e.conflicts) {
                                            var d = V(s);
                                            d.length && (l.doc._conflicts = d)
                                        }
                                        Jt(l.doc, e, b, t)
                                    }
                                    if (a.deleted) {
                                        if ("ok" !== e.deleted) continue;
                                        l.value.deleted = !0, l.doc = null
                                    }
                                    r.push(l)
                                }
                            })
                        }
                    }, Ut(t), function() {
                        t(null, {
                            total_rows: n,
                            offset: e.skip,
                            rows: r
                        })
                    })
                }, b._changes = function(e) {
                    function t() {
                        var t = Bo + ".json AS metadata, " + Bo + ".max_seq AS maxSeq, " + Po + ".json AS winningDoc, " + Po + ".rev AS winningRev ",
                            n = Bo + " JOIN " + Po,
                            u = Bo + ".id=" + Po + ".doc_id AND " + Bo + ".winningseq=" + Po + ".seq",
                            c = ["maxSeq > ?"],
                            f = [e.since];
                        e.doc_ids && (c.push(Bo + ".id IN " + Pt(e.doc_ids.length)), f = f.concat(e.doc_ids));
                        var l = "maxSeq " + (r ? "DESC" : "ASC"),
                            d = Ft(t, n, u, c, l),
                            h = C(e);
                        e.view || e.filter || (d += " LIMIT " + o);
                        var p = e.since || 0;
                        O.readTransaction(function(t) {
                            t.executeSql(d, f, function(t, n) {
                                function r(t) {
                                    return function() {
                                        e.onChange(t)
                                    }
                                }
                                for (var u = 0, c = n.rows.length; u < c; u++) {
                                    var f = n.rows.item(u),
                                        l = ot(f.metadata);
                                    p = f.maxSeq;
                                    var d = Bt(f.winningDoc, l.id, f.winningRev),
                                        v = e.processChange(d, l, e);
                                    v.seq = f.maxSeq;
                                    var y = h(v);
                                    if ("object" == typeof y) return e.complete(y);
                                    if (y && (s++, i && a.push(v), e.attachments && e.include_docs ? Jt(d, e, b, t, r(v)) : r(v)()), s === o) break
                                }
                            })
                        }, Ut(e.complete), function() {
                            e.continuous || e.complete(null, {
                                results: a,
                                last_seq: p
                            })
                        })
                    }
                    if (e = u(e), e.continuous) {
                        var n = b._name + ":" + z();
                        return Ko.addListener(b._name, n, b, e), Ko.notify(b._name), {
                            cancel: function() {
                                Ko.removeListener(b._name, n)
                            }
                        }
                    }
                    var r = e.descending;
                    e.since = e.since && !r ? e.since : 0;
                    var o = "limit" in e ? e.limit : -1;
                    0 === o && (o = 1);
                    var i;
                    i = "return_docs" in e ? e.return_docs : !("returnDocs" in e) || e.returnDocs;
                    var a = [],
                        s = 0;
                    t()
                }, b._close = function(e) {
                    e()
                }, b._getAttachment = function(e, t, n, r, o) {
                    var i, a = r.ctx,
                        s = n.digest,
                        u = n.content_type,
                        c = "SELECT escaped, CASE WHEN escaped = 1 THEN body ELSE HEX(body) END AS body FROM " + Fo + " WHERE digest=?";
                    a.executeSql(c, [s], function(e, t) {
                        var n = t.rows.item(0),
                            a = n.escaped ? Rt(n.body) : Ct(n.body, _);
                        i = r.binary ? Me(a, u) : bo(a), o(null, i)
                    })
                }, b._getRevisionTree = function(e, t) {
                    O.readTransaction(function(n) {
                        var r = "SELECT json AS metadata FROM " + Bo + " WHERE id = ?";
                        n.executeSql(r, [e], function(e, n) {
                            if (n.rows.length) {
                                var r = ot(n.rows.item(0).metadata);
                                t(null, r.rev_tree)
                            } else t(T(Hr))
                        })
                    })
                }, b._doCompaction = function(e, t, n) {
                    return t.length ? void O.transaction(function(n) {
                        var r = "SELECT json AS metadata FROM " + Bo + " WHERE id = ?";
                        n.executeSql(r, [e], function(n, r) {
                            var o = ot(r.rows.item(0).metadata);
                            H(o.rev_tree, function(e, n, r, o, i) {
                                var a = n + "-" + r;
                                t.indexOf(a) !== -1 && (i.status = "missing")
                            });
                            var i = "UPDATE " + Bo + " SET json = ? WHERE id = ?";
                            n.executeSql(i, [it(o), e])
                        }), $t(t, e, n)
                    }, Ut(n), function() {
                        n()
                    }) : n()
                }, b._getLocal = function(e, t) {
                    O.readTransaction(function(n) {
                        var r = "SELECT json, rev FROM " + $o + " WHERE id=?";
                        n.executeSql(r, [e], function(n, r) {
                            if (r.rows.length) {
                                var o = r.rows.item(0),
                                    i = Bt(o.json, e, o.rev);
                                t(null, i)
                            } else t(T(Hr))
                        })
                    })
                }, b._putLocal = function(e, t, n) {
                    function r(e) {
                        var r, c;
                        i ? (r = "UPDATE " + $o + " SET rev=?, json=? WHERE id=? AND rev=?", c = [o, u, a, i]) : (r = "INSERT INTO " + $o + " (id, rev, json) VALUES (?,?,?)", c = [a, o, u]), e.executeSql(r, c, function(e, r) {
                            r.rowsAffected ? (s = {
                                ok: !0,
                                id: a,
                                rev: o
                            }, t.ctx && n(null, s)) : n(T(Gr))
                        }, function() {
                            return n(T(Gr)), !1
                        })
                    }
                    "function" == typeof t && (n = t, t = {}), delete e._revisions;
                    var o, i = e._rev,
                        a = e._id;
                    o = i ? e._rev = "0-" + (parseInt(i.split("-")[1], 10) + 1) : e._rev = "0-1";
                    var s, u = Mt(e);
                    t.ctx ? r(t.ctx) : O.transaction(r, Ut(n), function() {
                        s && n(null, s)
                    })
                }, b._removeLocal = function(e, t, n) {
                    function r(r) {
                        var i = "DELETE FROM " + $o + " WHERE id=? AND rev=?",
                            a = [e._id, e._rev];
                        r.executeSql(i, a, function(r, i) {
                            return i.rowsAffected ? (o = {
                                ok: !0,
                                id: e._id,
                                rev: "0-0"
                            }, void(t.ctx && n(null, o))) : n(T(Hr))
                        })
                    }
                    "function" == typeof t && (n = t, t = {});
                    var o;
                    t.ctx ? r(t.ctx) : O.transaction(r, Ut(n), function() {
                        o && n(null, o)
                    })
                }, b._destroy = function(e, t) {
                    Ko.removeAllListeners(b._name), O.transaction(function(e) {
                        var t = [Bo, Po, Fo, Uo, $o, Wo];
                        t.forEach(function(t) {
                            e.executeSql("DROP TABLE IF EXISTS " + t, [])
                        })
                    }, Ut(t), function() {
                        k() && (delete window.localStorage["_pouch__websqldb_" + b._name], delete window.localStorage[b._name]), t(null, {
                            ok: !0
                        })
                    })
                }
            }

            function Xt() {
                try {
                    return openDatabase("_pouch_validate_websql", 1, "", 1), !0
                } catch (e) {
                    return !1
                }
            }

            function Qt() {
                if ("undefined" == typeof indexedDB || null === indexedDB || !/iP(hone|od|ad)/.test(navigator.userAgent)) return !0;
                var e = k(),
                    t = "_pouch__websqldb_valid_" + navigator.userAgent;
                if (e && localStorage[t]) return "1" === localStorage[t];
                var n = Xt();
                return e && (localStorage[t] = n ? "1" : "0"), n
            }

            function Yt() {
                return "function" == typeof openDatabase && Qt()
            }

            function Zt(e, t, n, r) {
                return openDatabase(e, t, n, r)
            }

            function en(e, t) {
                var n = Wr({
                    websql: Zt
                }, e);
                Vt.call(this, n, t)
            }

            function tn() {
                for (var e = {}, t = new Dr(function(t, n) {
                        e.resolve = t, e.reject = n
                    }), n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                return e.promise = t, Dr.resolve().then(function() {
                    return fetch.apply(null, n)
                }).then(function(t) {
                    e.resolve(t)
                }).catch(function(t) {
                    e.reject(t)
                }), e
            }

            function nn(e, t) {
                var n, r, o, i = new Headers,
                    a = {
                        method: e.method,
                        credentials: "include",
                        headers: i
                    };
                return e.json && (i.set("Accept", "application/json"), i.set("Content-Type", e.headers["Content-Type"] || "application/json")), e.body && e.processData && "string" != typeof e.body ? a.body = JSON.stringify(e.body) : "body" in e ? a.body = e.body : a.body = null, Object.keys(e.headers).forEach(function(t) {
                    e.headers.hasOwnProperty(t) && i.set(t, e.headers[t])
                }), n = tn(e.url, a), e.timeout > 0 && (r = setTimeout(function() {
                    n.reject(new Error("Load timeout for resource: " + e.url))
                }, e.timeout)), n.promise.then(function(t) {
                    return o = {
                        statusCode: t.status
                    }, e.timeout > 0 && clearTimeout(r), o.statusCode >= 200 && o.statusCode < 300 ? e.binary ? t.blob() : t.text() : t.json()
                }).then(function(e) {
                    o.statusCode >= 200 && o.statusCode < 300 ? t(null, o, e) : (e.status = o.statusCode, t(e))
                }).catch(function(e) {
                    e || (e = new Error("canceled")), t(e)
                }), {
                    abort: n.reject
                }
            }

            function rn(e, t) {
                var n, r, o = !1,
                    i = function() {
                        n.abort(), u()
                    },
                    a = function() {
                        o = !0, n.abort(), u()
                    },
                    s = {
                        abort: i
                    },
                    u = function() {
                        clearTimeout(r), s.abort = function() {}, n && (n.onprogress = void 0, n.upload && (n.upload.onprogress = void 0), n.onreadystatechange = void 0, n = void 0)
                    };
                n = e.xhr ? new e.xhr : new XMLHttpRequest;
                try {
                    n.open(e.method, e.url)
                } catch (e) {
                    return t(new Error(e.name || "Url is invalid"))
                }
                n.withCredentials = !("withCredentials" in e) || e.withCredentials, "GET" === e.method ? delete e.headers["Content-Type"] : e.json && (e.headers.Accept = "application/json", e.headers["Content-Type"] = e.headers["Content-Type"] || "application/json", e.body && e.processData && "string" != typeof e.body && (e.body = JSON.stringify(e.body))), e.binary && (n.responseType = "arraybuffer"), "body" in e || (e.body = null);
                for (var c in e.headers) e.headers.hasOwnProperty(c) && n.setRequestHeader(c, e.headers[c]);
                return e.timeout > 0 && (r = setTimeout(a, e.timeout), n.onprogress = function() {
                    clearTimeout(r), 4 !== n.readyState && (r = setTimeout(a, e.timeout))
                }, "undefined" != typeof n.upload && (n.upload.onprogress = n.onprogress)), n.onreadystatechange = function() {
                    if (4 === n.readyState) {
                        var r = {
                            statusCode: n.status
                        };
                        if (n.status >= 200 && n.status < 300) {
                            var i;
                            i = e.binary ? Ne([n.response || ""], {
                                type: n.getResponseHeader("Content-Type")
                            }) : n.responseText, t(null, r, i)
                        } else {
                            var a = {};
                            if (o) a = new Error("ETIMEDOUT"), a.code = "ETIMEDOUT";
                            else if ("string" == typeof n.response) try {
                                a = JSON.parse(n.response)
                            } catch (e) {}
                            a.status = n.status, t(a)
                        }
                        u()
                    }
                }, e.body && e.body instanceof Blob ? We(e.body, function(e) {
                    n.send(e)
                }) : n.send(e.body), s
            }

            function on() {
                try {
                    return new XMLHttpRequest, !0
                } catch (e) {
                    return !1
                }
            }

            function an(e, t) {
                return ti || e.xhr ? rn(e, t) : nn(e, t)
            }

            function sn() {
                return ""
            }

            function un(e, t) {
                function n(t, n, r) {
                    if (!e.binary && e.json && "string" == typeof t) try {
                        t = JSON.parse(t)
                    } catch (e) {
                        return r(e)
                    }
                    Array.isArray(t) && (t = t.map(function(e) {
                        return e.error || e.missing ? I(e) : e
                    })), e.binary && ni(t, n), r(null, t, n)
                }
                e = u(e);
                var r = {
                    method: "GET",
                    headers: {},
                    json: !0,
                    processData: !0,
                    timeout: 1e4,
                    cache: !1
                };
                return e = Wr(r, e), e.json && (e.binary || (e.headers.Accept = "application/json"), e.headers["Content-Type"] = e.headers["Content-Type"] || "application/json"), e.binary && (e.encoding = null, e.json = !1), e.processData || (e.json = !1), an(e, function(r, o, i) {
                    if (r) return t(I(r));
                    var a, s = o.headers && o.headers["content-type"],
                        u = i || sn();
                    if (!e.binary && (e.json || !e.processData) && "object" != typeof u && (/json/.test(s) || /^[\s]*\{/.test(u) && /\}[\s]*$/.test(u))) try {
                        u = JSON.parse(u.toString())
                    } catch (e) {}
                    o.statusCode >= 200 && o.statusCode < 300 ? n(u, o, t) : (a = I(u), a.status = o.statusCode, t(a))
                })
            }

            function cn(e, t) {
                var n = navigator && navigator.userAgent ? navigator.userAgent.toLowerCase() : "",
                    r = n.indexOf("safari") !== -1 && n.indexOf("chrome") === -1,
                    o = n.indexOf("msie") !== -1,
                    i = n.indexOf("edge") !== -1,
                    a = r || (o || i) && "GET" === e.method,
                    s = !("cache" in e) || e.cache,
                    u = /^blob:/.test(e.url);
                if (!u && (a || !s)) {
                    var c = e.url.indexOf("?") !== -1;
                    e.url += (c ? "&" : "?") + "_nonce=" + Date.now()
                }
                return un(e, t)
            }

            function fn(e, t) {
                return new Dr(function(n, r) {
                    function o() {
                        f++, e[l++]().then(a, s)
                    }

                    function i() {
                        ++d === h ? c ? r(c) : n() : u()
                    }

                    function a() {
                        f--, i()
                    }

                    function s(e) {
                        f--, c = c || e, i()
                    }

                    function u() {
                        for (; f < t && l < h;) o()
                    }
                    var c, f = 0,
                        l = 0,
                        d = 0,
                        h = e.length;
                    u()
                })
            }

            function ln(e) {
                var t = e.doc && e.doc._attachments;
                t && Object.keys(t).forEach(function(e) {
                    var n = t[e];
                    n.data = Be(n.data, n.content_type)
                })
            }

            function dn(e) {
                return /^_design/.test(e) ? "_design/" + encodeURIComponent(e.slice(8)) : /^_local/.test(e) ? "_local/" + encodeURIComponent(e.slice(7)) : encodeURIComponent(e)
            }

            function hn(e) {
                return e._attachments && Object.keys(e._attachments) ? Dr.all(Object.keys(e._attachments).map(function(t) {
                    var n = e._attachments[t];
                    if (n.data && "string" != typeof n.data) return new Dr(function(e) {
                        Ue(n.data, e)
                    }).then(function(e) {
                        n.data = e
                    })
                })) : Dr.resolve()
            }

            function pn(e) {
                if (!e.prefix) return !1;
                var t = F(e.prefix).protocol;
                return "http" === t || "https" === t
            }

            function vn(e, t) {
                if (pn(t)) {
                    var n = t.name.substr(t.prefix.length);
                    e = t.prefix + encodeURIComponent(n)
                }
                var r = F(e);
                (r.user || r.password) && (r.auth = {
                    username: r.user,
                    password: r.password
                });
                var o = r.path.replace(/(^\/|\/$)/g, "").split("/");
                return r.db = o.pop(), r.db.indexOf("%") === -1 && (r.db = encodeURIComponent(r.db)), r.path = o.join("/"), r
            }

            function yn(e, t) {
                return gn(e, e.db + "/" + t)
            }

            function gn(e, t) {
                var n = e.path ? "/" : "";
                return e.protocol + "://" + e.host + (e.port ? ":" + e.port : "") + "/" + e.path + n + t
            }

            function mn(e) {
                return "?" + Object.keys(e).map(function(t) {
                    return t + "=" + encodeURIComponent(e[t])
                }).join("&")
            }

            function _n(e, t) {
                function n(e, t, n) {
                    var r = e.ajax || {},
                        o = Wr(u(d), r, t),
                        i = u(d.headers || {});
                    return o.headers = Wr(i, r.headers, t.headers || {}), ai(o.method + " " + o.url), s._ajax(o, n)
                }

                function r(e, t) {
                    return new Dr(function(r, o) {
                        n(e, t, function(e, t) {
                            return e ? o(e) : void r(t)
                        })
                    })
                }

                function o(e, t) {
                    return l(e, Ar(function(e) {
                        i().then(function() {
                            return t.apply(this, e)
                        }).catch(function(t) {
                            var n = e.pop();
                            n(t)
                        })
                    }))
                }

                function i() {
                    if (e.skipSetup || e.skip_setup) return Dr.resolve();
                    if (y) return y;
                    var t = {
                        method: "GET",
                        url: f
                    };
                    return y = r({}, t).catch(function(e) {
                        return e && e.status && 404 === e.status ? (j(404, "PouchDB is just detecting if the remote exists."), r({}, {
                            method: "PUT",
                            url: f
                        })) : Dr.reject(e)
                    }).catch(function(e) {
                        return !(!e || !e.status || 412 !== e.status) || Dr.reject(e)
                    }), y.catch(function() {
                        y = null
                    }), y
                }

                function a(e) {
                    return e.split("/").map(encodeURIComponent).join("/")
                }
                var s = this,
                    c = vn(e.name, e),
                    f = yn(c, "");
                e = u(e);
                var d = e.ajax || {};
                if (e.auth || c.auth) {
                    var h = e.auth || c.auth,
                        p = h.username + ":" + h.password,
                        v = bo(unescape(encodeURIComponent(p)));
                    d.headers = d.headers || {}, d.headers.Authorization = "Basic " + v
                }
                s._ajax = cn;
                var y;
                Tr(function() {
                    t(null, s)
                }), s.type = function() {
                    return "http"
                }, s.id = o("id", function(e) {
                    n({}, {
                        method: "GET",
                        url: gn(c, "")
                    }, function(t, n) {
                        var r = n && n.uuid ? n.uuid + c.db : yn(c, "");
                        e(null, r)
                    })
                }), s.request = o("request", function(e, t) {
                    e.url = yn(c, e.url), n({}, e, t)
                }), s.compact = o("compact", function(e, t) {
                    "function" == typeof e && (t = e, e = {}), e = u(e), n(e, {
                        url: yn(c, "_compact"),
                        method: "POST"
                    }, function() {
                        function n() {
                            s.info(function(r, o) {
                                o && !o.compact_running ? t(null, {
                                    ok: !0
                                }) : setTimeout(n, e.interval || 200)
                            })
                        }
                        n()
                    })
                }), s.bulkGet = l("bulkGet", function(e, t) {
                    function r(t) {
                        var r = {};
                        e.revs && (r.revs = !0), e.attachments && (r.attachments = !0), e.latest && (r.latest = !0), n(e, {
                            url: yn(c, "_bulk_get" + mn(r)),
                            method: "POST",
                            body: {
                                docs: e.docs
                            }
                        }, t)
                    }

                    function o() {
                        function n(e) {
                            return function(n, r) {
                                s[e] = r.results, ++a === o && t(null, {
                                    results: D(s)
                                })
                            }
                        }
                        for (var r = oi, o = Math.ceil(e.docs.length / r), a = 0, s = new Array(o), u = 0; u < o; u++) {
                            var c = g(e, ["revs", "attachments", "latest"]);
                            c.ajax = d, c.docs = e.docs.slice(u * r, Math.min(e.docs.length, (u + 1) * r)), b(i, c, n(u))
                        }
                    }
                    var i = this,
                        a = gn(c, ""),
                        s = ii[a];
                    "boolean" != typeof s ? r(function(e, n) {
                        e ? (ii[a] = !1, j(e.status, "PouchDB is just detecting if the remote supports the _bulk_get API."), o()) : (ii[a] = !0, t(null, n))
                    }) : s ? r(t) : o()
                }), s._info = function(e) {
                    i().then(function() {
                        n({}, {
                            method: "GET",
                            url: yn(c, "")
                        }, function(t, n) {
                            return t ? e(t) : (n.host = yn(c, ""), void e(null, n))
                        })
                    }).catch(e)
                }, s.get = o("get", function(e, t, n) {
                    function o(e) {
                        function n(n) {
                            var i = o[n],
                                s = dn(e._id) + "/" + a(n) + "?rev=" + e._rev;
                            return r(t, {
                                method: "GET",
                                url: yn(c, s),
                                binary: !0
                            }).then(function(e) {
                                return t.binary ? e : new Dr(function(t) {
                                    Ue(e, t)
                                })
                            }).then(function(e) {
                                delete i.stub, delete i.length, i.data = e
                            })
                        }
                        var o = e._attachments,
                            i = o && Object.keys(o);
                        if (o && i.length) {
                            var s = i.map(function(e) {
                                return function() {
                                    return n(e)
                                }
                            });
                            return fn(s, 5)
                        }
                    }

                    function i(e) {
                        return Array.isArray(e) ? Dr.all(e.map(function(e) {
                            if (e.ok) return o(e.ok)
                        })) : o(e)
                    }
                    "function" == typeof t && (n = t, t = {}), t = u(t);
                    var s = {};
                    t.revs && (s.revs = !0), t.revs_info && (s.revs_info = !0), t.latest && (s.latest = !0), t.open_revs && ("all" !== t.open_revs && (t.open_revs = JSON.stringify(t.open_revs)), s.open_revs = t.open_revs), t.rev && (s.rev = t.rev), t.conflicts && (s.conflicts = t.conflicts), e = dn(e);
                    var f = {
                        method: "GET",
                        url: yn(c, e + mn(s))
                    };
                    r(t, f).then(function(e) {
                        return Dr.resolve().then(function() {
                            if (t.attachments) return i(e)
                        }).then(function() {
                            n(null, e)
                        })
                    }).catch(n)
                }), s.remove = o("remove", function(e, t, r, o) {
                    var i;
                    "string" == typeof t ? (i = {
                        _id: e,
                        _rev: t
                    }, "function" == typeof r && (o = r, r = {})) : (i = e, "function" == typeof t ? (o = t, r = {}) : (o = r, r = t));
                    var a = i._rev || r.rev;
                    n(r, {
                        method: "DELETE",
                        url: yn(c, dn(i._id)) + "?rev=" + a
                    }, o)
                }), s.getAttachment = o("getAttachment", function(e, t, r, o) {
                    "function" == typeof r && (o = r, r = {});
                    var i = r.rev ? "?rev=" + r.rev : "",
                        s = yn(c, dn(e)) + "/" + a(t) + i;
                    n(r, {
                        method: "GET",
                        url: s,
                        binary: !0
                    }, o)
                }), s.removeAttachment = o("removeAttachment", function(e, t, r, o) {
                    var i = yn(c, dn(e) + "/" + a(t)) + "?rev=" + r;
                    n({}, {
                        method: "DELETE",
                        url: i
                    }, o)
                }), s.putAttachment = o("putAttachment", function(e, t, r, o, i, s) {
                    "function" == typeof i && (s = i, i = o, o = r, r = null);
                    var u = dn(e) + "/" + a(t),
                        f = yn(c, u);
                    if (r && (f += "?rev=" + r), "string" == typeof o) {
                        var l;
                        try {
                            l = _o(o)
                        } catch (e) {
                            return s(T(Yr, "Attachment is not a valid base64 string"))
                        }
                        o = l ? Me(l, i) : ""
                    }
                    var h = {
                        headers: {
                            "Content-Type": i
                        },
                        method: "PUT",
                        url: f,
                        processData: !1,
                        body: o,
                        timeout: d.timeout || 6e4
                    };
                    n({}, h, s)
                }), s._bulkDocs = function(e, t, r) {
                    e.new_edits = t.new_edits, i().then(function() {
                        return Dr.all(e.docs.map(hn))
                    }).then(function() {
                        n(t, {
                            method: "POST",
                            url: yn(c, "_bulk_docs"),
                            timeout: t.timeout,
                            body: e
                        }, function(e, t) {
                            return e ? r(e) : (t.forEach(function(e) {
                                e.ok = !0
                            }), void r(null, t))
                        })
                    }).catch(r)
                }, s._put = function(e, t, r) {
                    i().then(function() {
                        return hn(e)
                    }).then(function() {
                        n(t, {
                            method: "PUT",
                            url: yn(c, dn(e._id)),
                            body: e
                        }, function(e, t) {
                            return e ? r(e) : void r(null, t)
                        })
                    }).catch(r)
                }, s.allDocs = o("allDocs", function(e, t) {
                    "function" == typeof e && (t = e, e = {}), e = u(e);
                    var n, o = {},
                        i = "GET";
                    e.conflicts && (o.conflicts = !0), e.descending && (o.descending = !0), e.include_docs && (o.include_docs = !0), e.attachments && (o.attachments = !0), e.key && (o.key = JSON.stringify(e.key)), e.start_key && (e.startkey = e.start_key), e.startkey && (o.startkey = JSON.stringify(e.startkey)), e.end_key && (e.endkey = e.end_key), e.endkey && (o.endkey = JSON.stringify(e.endkey)), "undefined" != typeof e.inclusive_end && (o.inclusive_end = !!e.inclusive_end), "undefined" != typeof e.limit && (o.limit = e.limit), "undefined" != typeof e.skip && (o.skip = e.skip);
                    var a = mn(o);
                    "undefined" != typeof e.keys && (i = "POST", n = {
                        keys: e.keys
                    }), r(e, {
                        method: i,
                        url: yn(c, "_all_docs" + a),
                        body: n
                    }).then(function(n) {
                        e.include_docs && e.attachments && e.binary && n.rows.forEach(ln), t(null, n)
                    }).catch(t)
                }), s._changes = function(e) {
                    var t = "batch_size" in e ? e.batch_size : ri;
                    e = u(e), e.timeout = "timeout" in e ? e.timeout : "timeout" in d ? d.timeout : 3e4;
                    var r, o = e.timeout ? {
                            timeout: e.timeout - 5e3
                        } : {},
                        a = "undefined" != typeof e.limit && e.limit;
                    r = "return_docs" in e ? e.return_docs : !("returnDocs" in e) || e.returnDocs;
                    var s = a;
                    if (e.style && (o.style = e.style), (e.include_docs || e.filter && "function" == typeof e.filter) && (o.include_docs = !0), e.attachments && (o.attachments = !0), e.continuous && (o.feed = "longpoll"), e.conflicts && (o.conflicts = !0), e.descending && (o.descending = !0), "heartbeat" in e ? e.heartbeat && (o.heartbeat = e.heartbeat) : e.continuous && (o.heartbeat = 1e4), e.filter && "string" == typeof e.filter && (o.filter = e.filter), e.view && "string" == typeof e.view && (o.filter = "_view", o.view = e.view), e.query_params && "object" == typeof e.query_params)
                        for (var f in e.query_params) e.query_params.hasOwnProperty(f) && (o[f] = e.query_params[f]);
                    var l, h = "GET";
                    e.doc_ids && (o.filter = "_doc_ids", h = "POST", l = {
                        doc_ids: e.doc_ids
                    });
                    var p, v, y = function(r, u) {
                            if (!e.aborted) {
                                o.since = r, "object" == typeof o.since && (o.since = JSON.stringify(o.since)), e.descending ? a && (o.limit = s) : o.limit = !a || s > t ? t : s;
                                var f = {
                                    method: h,
                                    url: yn(c, "_changes" + mn(o)),
                                    timeout: e.timeout,
                                    body: l
                                };
                                v = r, e.aborted || i().then(function() {
                                    p = n(e, f, u)
                                }).catch(u)
                            }
                        },
                        g = {
                            results: []
                        },
                        m = function(n, o) {
                            if (!e.aborted) {
                                var i = 0;
                                if (o && o.results) {
                                    i = o.results.length, g.last_seq = o.last_seq;
                                    var u = {};
                                    u.query = e.query_params, o.results = o.results.filter(function(t) {
                                        s--;
                                        var n = C(e)(t);
                                        return n && (e.include_docs && e.attachments && e.binary && ln(t), r && g.results.push(t), e.onChange(t)), n
                                    })
                                } else if (n) return e.aborted = !0, void e.complete(n);
                                o && o.last_seq && (v = o.last_seq);
                                var c = a && s <= 0 || o && i < t || e.descending;
                                (!e.continuous || a && s <= 0) && c ? e.complete(null, g) : Tr(function() {
                                    y(v, m)
                                })
                            }
                        };
                    return y(e.since || 0, m), {
                        cancel: function() {
                            e.aborted = !0, p && p.abort()
                        }
                    }
                }, s.revsDiff = o("revsDiff", function(e, t, r) {
                    "function" == typeof t && (r = t, t = {}), n(t, {
                        method: "POST",
                        url: yn(c, "_revs_diff"),
                        body: e
                    }, r)
                }), s._close = function(e) {
                    e()
                }, s._destroy = function(e, t) {
                    n(e, {
                        url: yn(c, ""),
                        method: "DELETE"
                    }, function(e, n) {
                        return e && e.status && 404 !== e.status ? t(e) : void t(null, n)
                    })
                }
            }

            function bn(e) {
                this.status = 400, this.name = "query_parse_error", this.message = e, this.error = !0;
                try {
                    Error.captureStackTrace(this, bn)
                } catch (e) {}
            }

            function wn(e) {
                this.status = 404, this.name = "not_found", this.message = e, this.error = !0;
                try {
                    Error.captureStackTrace(this, wn)
                } catch (e) {}
            }

            function kn(e) {
                this.status = 500, this.name = "invalid_value", this.message = e, this.error = !0;
                try {
                    Error.captureStackTrace(this, kn)
                } catch (e) {}
            }

            function En(e, t) {
                return t && e.then(function(e) {
                    Tr(function() {
                        t(null, e)
                    })
                }, function(e) {
                    Tr(function() {
                        t(e)
                    })
                }), e
            }

            function xn(e) {
                return Ar(function(t) {
                    var n = t.pop(),
                        r = e.apply(this, t);
                    return "function" == typeof n && En(r, n), r
                })
            }

            function Sn(e, t) {
                return e.then(function(e) {
                    return t().then(function() {
                        return e
                    })
                }, function(e) {
                    return t().then(function() {
                        throw e
                    })
                })
            }

            function An(e, t) {
                return function() {
                    var n = arguments,
                        r = this;
                    return e.add(function() {
                        return t.apply(r, n)
                    })
                }
            }

            function On(e) {
                var t = new Br(e),
                    n = new Array(t.size),
                    r = -1;
                return t.forEach(function(e) {
                    n[++r] = e
                }), n
            }

            function jn(e) {
                var t = new Array(e.size),
                    n = -1;
                return e.forEach(function(e, r) {
                    t[++n] = r
                }), t
            }

            function qn(e) {
                var t = "builtin " + e + " function requires map values to be numbers or number arrays";
                return new kn(t)
            }

            function Tn(e) {
                for (var t = 0, n = 0, r = e.length; n < r; n++) {
                    var o = e[n];
                    if ("number" != typeof o) {
                        if (!Array.isArray(o)) throw qn("_sum");
                        t = "number" == typeof t ? [t] : t;
                        for (var i = 0, a = o.length; i < a; i++) {
                            var s = o[i];
                            if ("number" != typeof s) throw qn("_sum");
                            "undefined" == typeof t[i] ? t.push(s) : t[i] += s
                        }
                    } else "number" == typeof t ? t += o : t[0] += o
                }
                return t
            }

            function In(e, t) {
                return Ir("return (" + e.replace(/;\s*$/, "") + ");", {
                    emit: t,
                    sum: Tn,
                    log: ui,
                    isArray: ci,
                    toJSON: fi
                })
            }

            function Ln(e, t, n) {
                for (var r = "", o = n - e.length; r.length < o;) r += t;
                return r
            }

            function Cn(e, t, n) {
                var r = Ln(e, t, n);
                return r + e
            }

            function Dn(e, t) {
                if (e === t) return 0;
                e = Nn(e), t = Nn(t);
                var n = zn(e),
                    r = zn(t);
                if (n - r !== 0) return n - r;
                switch (typeof e) {
                    case "number":
                        return e - t;
                    case "boolean":
                        return e < t ? -1 : 1;
                    case "string":
                        return Un(e, t)
                }
                return Array.isArray(e) ? $n(e, t) : Wn(e, t)
            }

            function Nn(e) {
                switch (typeof e) {
                    case "undefined":
                        return null;
                    case "number":
                        return e === 1 / 0 || e === -(1 / 0) || isNaN(e) ? null : e;
                    case "object":
                        var t = e;
                        if (Array.isArray(e)) {
                            var n = e.length;
                            e = new Array(n);
                            for (var r = 0; r < n; r++) e[r] = Nn(t[r])
                        } else {
                            if (e instanceof Date) return e.toJSON();
                            if (null !== e) {
                                e = {};
                                for (var o in t)
                                    if (t.hasOwnProperty(o)) {
                                        var i = t[o];
                                        "undefined" != typeof i && (e[o] = Nn(i))
                                    }
                            }
                        }
                }
                return e
            }

            function Rn(e) {
                if (null !== e) switch (typeof e) {
                    case "boolean":
                        return e ? 1 : 0;
                    case "number":
                        return Kn(e);
                    case "string":
                        return e.replace(/\u0002/g, "").replace(/\u0001/g, "").replace(/\u0000/g, "");
                    case "object":
                        var t = Array.isArray(e),
                            n = t ? e : Object.keys(e),
                            r = -1,
                            o = n.length,
                            i = "";
                        if (t)
                            for (; ++r < o;) i += Mn(n[r]);
                        else
                            for (; ++r < o;) {
                                var a = n[r];
                                i += Mn(a) + Mn(e[a])
                            }
                        return i
                }
                return ""
            }

            function Mn(e) {
                var t = "\0";
                return e = Nn(e), zn(e) + hi + Rn(e) + t
            }

            function Bn(e, t) {
                var n, r = t,
                    o = "1" === e[t];
                if (o) n = 0, t++;
                else {
                    var i = "0" === e[t];
                    t++;
                    var a = "",
                        s = e.substring(t, t + di),
                        u = parseInt(s, 10) + li;
                    for (i && (u = -u), t += di;;) {
                        var c = e[t];
                        if ("\0" === c) break;
                        a += c, t++
                    }
                    a = a.split("."), n = 1 === a.length ? parseInt(a, 10) : parseFloat(a[0] + "." + a[1]), i && (n -= 10), 0 !== u && (n = parseFloat(n + "e" + u))
                }
                return {
                    num: n,
                    length: t - r
                }
            }

            function Pn(e, t) {
                var n = e.pop();
                if (t.length) {
                    var r = t[t.length - 1];
                    n === r.element && (t.pop(), r = t[t.length - 1]);
                    var o = r.element,
                        i = r.index;
                    if (Array.isArray(o)) o.push(n);
                    else if (i === e.length - 2) {
                        var a = e.pop();
                        o[a] = n
                    } else e.push(n)
                }
            }

            function Fn(e) {
                for (var t = [], n = [], r = 0;;) {
                    var o = e[r++];
                    if ("\0" !== o) switch (o) {
                        case "1":
                            t.push(null);
                            break;
                        case "2":
                            t.push("1" === e[r]), r++;
                            break;
                        case "3":
                            var i = Bn(e, r);
                            t.push(i.num), r += i.length;
                            break;
                        case "4":
                            for (var a = "";;) {
                                var s = e[r];
                                if ("\0" === s) break;
                                a += s, r++
                            }
                            a = a.replace(/\u0001\u0001/g, "\0").replace(/\u0001\u0002/g, "").replace(/\u0002\u0002/g, ""), t.push(a);
                            break;
                        case "5":
                            var u = {
                                element: [],
                                index: t.length
                            };
                            t.push(u.element), n.push(u);
                            break;
                        case "6":
                            var c = {
                                element: {},
                                index: t.length
                            };
                            t.push(c.element), n.push(c);
                            break;
                        default:
                            throw new Error("bad collationIndex or unexpectedly reached end of input: " + o)
                    } else {
                        if (1 === t.length) return t.pop();
                        Pn(t, n)
                    }
                }
            }

            function $n(e, t) {
                for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) {
                    var o = Dn(e[r], t[r]);
                    if (0 !== o) return o
                }
                return e.length === t.length ? 0 : e.length > t.length ? 1 : -1
            }

            function Un(e, t) {
                return e === t ? 0 : e > t ? 1 : -1
            }

            function Wn(e, t) {
                for (var n = Object.keys(e), r = Object.keys(t), o = Math.min(n.length, r.length), i = 0; i < o; i++) {
                    var a = Dn(n[i], r[i]);
                    if (0 !== a) return a;
                    if (a = Dn(e[n[i]], t[r[i]]), 0 !== a) return a
                }
                return n.length === r.length ? 0 : n.length > r.length ? 1 : -1
            }

            function zn(e) {
                var t = ["boolean", "number", "string", "object"],
                    n = t.indexOf(typeof e);
                return ~n ? null === e ? 1 : Array.isArray(e) ? 5 : n < 3 ? n + 2 : n + 3 : Array.isArray(e) ? 5 : void 0
            }

            function Kn(e) {
                if (0 === e) return "1";
                var t = e.toExponential().split(/e\+?/),
                    n = parseInt(t[1], 10),
                    r = e < 0,
                    o = r ? "0" : "2",
                    i = (r ? -n : n) - li,
                    a = Cn(i.toString(), "0", di);
                o += hi + a;
                var s = Math.abs(parseFloat(t[0]));
                r && (s = 10 - s);
                var u = s.toFixed(20);
                return u = u.replace(/\.?0+$/, ""), o += hi + u
            }

            function Hn() {
                this.promise = new Dr(function(e) {
                    e()
                })
            }

            function Gn(e, t, n, r, o, i) {
                var a, s = n.toString() + (r && r.toString()) + "undefined";
                if (!o && (a = e._cachedViews = e._cachedViews || {}, a[s])) return a[s];
                var u = e.info().then(function(u) {
                    function c(e) {
                        e.views = e.views || {};
                        var n = t;
                        n.indexOf("/") === -1 && (n = t + "/" + t);
                        var r = e.views[n] = e.views[n] || {};
                        if (!r[f]) return r[f] = !0, e
                    }
                    var f = u.db_name + "-mrview-" + (o ? "temp" : Ve(s));
                    return $(e, "_local/" + i, c).then(function() {
                        return e.registerDependentDatabase(f).then(function(t) {
                            var o = t.db;
                            o.auto_compaction = !0;
                            var i = {
                                name: f,
                                db: o,
                                sourceDB: e,
                                adapter: e.adapter,
                                mapFun: n,
                                reduceFun: r
                            };
                            return i.db.get("_local/lastSeq").catch(function(e) {
                                if (404 !== e.status) throw e
                            }).then(function(e) {
                                return i.seq = e ? e.seq : 0, a && i.db.once("destroyed", function() {
                                    delete a[s]
                                }), i
                            })
                        })
                    })
                });
                return a && (a[s] = u), u
            }

            function Jn(e) {
                return e.indexOf("/") === -1 ? [e, e] : e.split("/")
            }

            function Vn(e) {
                return 1 === e.length && /^1-/.test(e[0].rev)
            }

            function Xn(e, t) {
                try {
                    e.emit("error", t)
                } catch (e) {
                    S("error", "The user's map/reduce function threw an uncaught error.\nYou can debug this error by doing:\nmyDatabase.on('error', function (err) { debugger; });\nPlease double-check your map/reduce function."), S("error", t)
                }
            }

            function Qn(e, t, n, r) {
                function o(e, t, n) {
                    try {
                        t(n)
                    } catch (t) {
                        Xn(e, t)
                    }
                }

                function i(e, t, n, r, o) {
                    try {
                        return {
                            output: t(n, r, o)
                        }
                    } catch (t) {
                        return Xn(e, t), {
                            error: t
                        }
                    }
                }

                function a(e, t) {
                    var n = Dn(e.key, t.key);
                    return 0 !== n ? n : Dn(e.value, t.value)
                }

                function s(e, t, n) {
                    return n = n || 0, "number" == typeof t ? e.slice(n, t + n) : n > 0 ? e.slice(n) : e
                }

                function u(e) {
                    var t = e.value,
                        n = t && "object" == typeof t && t._id || e.id;
                    return n
                }

                function c(e) {
                    e.rows.forEach(function(e) {
                        var t = e.doc && e.doc._attachments;
                        t && Object.keys(t).forEach(function(e) {
                            var n = t[e];
                            t[e].data = Be(n.data, n.content_type)
                        })
                    })
                }

                function f(e) {
                    return function(t) {
                        return e.include_docs && e.attachments && e.binary && c(t), t
                    }
                }

                function l(e, t, n, r) {
                    var o = t[e];
                    "undefined" != typeof o && (r && (o = encodeURIComponent(JSON.stringify(o))), n.push(e + "=" + o))
                }

                function d(e) {
                    if ("undefined" != typeof e) {
                        var t = Number(e);
                        return isNaN(t) || t !== parseInt(e, 10) ? e : t
                    }
                }

                function h(e) {
                    return e.group_level = d(e.group_level), e.limit = d(e.limit), e.skip = d(e.skip), e
                }

                function p(e) {
                    if (e) {
                        if ("number" != typeof e) return new bn('Invalid value for integer: "' + e + '"');
                        if (e < 0) return new bn('Invalid value for positive integer: "' + e + '"')
                    }
                }

                function v(e, t) {
                    var n = e.descending ? "endkey" : "startkey",
                        r = e.descending ? "startkey" : "endkey";
                    if ("undefined" != typeof e[n] && "undefined" != typeof e[r] && Dn(e[n], e[r]) > 0) throw new bn("No rows can match your key range, reverse your start_key and end_key or set {descending : true}");
                    if (t.reduce && e.reduce !== !1) {
                        if (e.include_docs) throw new bn("{include_docs:true} is invalid for reduce");
                        if (e.keys && e.keys.length > 1 && !e.group && !e.group_level) throw new bn("Multi-key fetches for reduce views must use {group: true}")
                    }["group_level", "limit", "skip"].forEach(function(t) {
                        var n = p(e[t]);
                        if (n) throw n
                    })
                }

                function y(e, t, n) {
                    var r, o = [],
                        i = "GET";
                    if (l("reduce", n, o), l("include_docs", n, o), l("attachments", n, o), l("limit", n, o), l("descending", n, o), l("group", n, o), l("group_level", n, o), l("skip", n, o), l("stale", n, o), l("conflicts", n, o), l("startkey", n, o, !0), l("start_key", n, o, !0), l("endkey", n, o, !0), l("end_key", n, o, !0), l("inclusive_end", n, o), l("key", n, o, !0), o = o.join("&"), o = "" === o ? "" : "?" + o, "undefined" != typeof n.keys) {
                        var a = 2e3,
                            s = "keys=" + encodeURIComponent(JSON.stringify(n.keys));
                        s.length + o.length + 1 <= a ? o += ("?" === o[0] ? "&" : "?") + s : (i = "POST", "string" == typeof t ? r = {
                            keys: n.keys
                        } : t.keys = n.keys)
                    }
                    if ("string" == typeof t) {
                        var u = Jn(t);
                        return e.request({
                            method: i,
                            url: "_design/" + u[0] + "/_view/" + u[1] + o,
                            body: r
                        }).then(f(n))
                    }
                    return r = r || {}, Object.keys(t).forEach(function(e) {
                        Array.isArray(t[e]) ? r[e] = t[e] : r[e] = t[e].toString()
                    }), e.request({
                        method: "POST",
                        url: "_temp_view" + o,
                        body: r
                    }).then(f(n))
                }

                function g(e, t, n) {
                    return new Dr(function(r, o) {
                        e._query(t, n, function(e, t) {
                            return e ? o(e) : void r(t)
                        })
                    })
                }

                function m(e) {
                    return new Dr(function(t, n) {
                        e._viewCleanup(function(e, r) {
                            return e ? n(e) : void t(r)
                        })
                    })
                }

                function _(e) {
                    return function(t) {
                        if (404 === t.status) return e;
                        throw t
                    }
                }

                function b(e, t, n) {
                    function r() {
                        return Vn(f) ? Dr.resolve(s) : t.db.get(a).catch(_(s))
                    }

                    function o(e) {
                        return e.keys.length ? t.db.allDocs({
                            keys: e.keys,
                            include_docs: !0
                        }) : Dr.resolve({
                            rows: []
                        })
                    }

                    function i(e, t) {
                        for (var n = [], r = new Br, o = 0, i = t.rows.length; o < i; o++) {
                            var a = t.rows[o],
                                s = a.doc;
                            if (s && (n.push(s), r.add(s._id), s._deleted = !c.has(s._id), !s._deleted)) {
                                var u = c.get(s._id);
                                "value" in u && (s.value = u.value)
                            }
                        }
                        var f = jn(c);
                        return f.forEach(function(e) {
                            if (!r.has(e)) {
                                var t = {
                                        _id: e
                                    },
                                    o = c.get(e);
                                "value" in o && (t.value = o.value), n.push(t)
                            }
                        }), e.keys = On(f.concat(e.keys)), n.push(e), n
                    }
                    var a = "_local/doc_" + e,
                        s = {
                            _id: a,
                            keys: []
                        },
                        u = n.get(e),
                        c = u[0],
                        f = u[1];
                    return r().then(function(e) {
                        return o(e).then(function(t) {
                            return i(e, t)
                        })
                    })
                }

                function w(e, t, n) {
                    var r = "_local/lastSeq";
                    return e.db.get(r).catch(_({
                        _id: r,
                        seq: 0
                    })).then(function(r) {
                        var o = jn(t);
                        return Dr.all(o.map(function(n) {
                            return b(n, e, t)
                        })).then(function(t) {
                            var o = D(t);
                            return r.seq = n, o.push(r), e.db.bulkDocs({
                                docs: o
                            })
                        })
                    })
                }

                function k(e) {
                    var t = "string" == typeof e ? e : e.name,
                        n = pi[t];
                    return n || (n = pi[t] = new Hn), n
                }

                function E(e) {
                    return An(k(e), function() {
                        return x(e)
                    })()
                }

                function x(e) {
                    function n(e, t) {
                        var n = {
                            id: l._id,
                            key: Nn(e)
                        };
                        "undefined" != typeof t && null !== t && (n.value = Nn(t)), f.push(n)
                    }

                    function r(t, n) {
                        return function() {
                            return w(e, t, n)
                        }
                    }

                    function i() {
                        return e.sourceDB.changes({
                            conflicts: !0,
                            include_docs: !0,
                            style: "all_docs",
                            since: h,
                            limit: yi
                        }).then(s)
                    }

                    function s(e) {
                        var t = e.results;
                        if (t.length) {
                            var n = u(t);
                            if (p.add(r(n, h)), !(t.length < yi)) return i()
                        }
                    }

                    function u(t) {
                        for (var n = new Pr, r = 0, i = t.length; r < i; r++) {
                            var s = t[r];
                            if ("_" !== s.doc._id[0]) {
                                f = [], l = s.doc, l._deleted || o(e.sourceDB, d, l), f.sort(a);
                                var u = c(f);
                                n.set(s.doc._id, [u, s.changes])
                            }
                            h = s.seq
                        }
                        return n
                    }

                    function c(e) {
                        for (var t, n = new Pr, r = 0, o = e.length; r < o; r++) {
                            var i = e[r],
                                a = [i.key, i.id];
                            r > 0 && 0 === Dn(i.key, t) && a.push(r), n.set(Mn(a), i), t = i.key
                        }
                        return n
                    }
                    var f, l, d = t(e.mapFun, n),
                        h = e.seq || 0,
                        p = new Hn;
                    return i().then(function() {
                        return p.finish()
                    }).then(function() {
                        e.seq = h
                    })
                }

                function S(e, t, r) {
                    0 === r.group_level && delete r.group_level;
                    var o = r.group || r.group_level,
                        a = n(e.reduceFun),
                        u = [],
                        c = isNaN(r.group_level) ? Number.POSITIVE_INFINITY : r.group_level;
                    t.forEach(function(e) {
                        var t = u[u.length - 1],
                            n = o ? e.key : null;
                        return o && Array.isArray(n) && (n = n.slice(0, c)), t && 0 === Dn(t.groupKey, n) ? (t.keys.push([e.key, e.id]), void t.values.push(e.value)) : void u.push({
                            keys: [
                                [e.key, e.id]
                            ],
                            values: [e.value],
                            groupKey: n
                        })
                    }), t = [];
                    for (var f = 0, l = u.length; f < l; f++) {
                        var d = u[f],
                            h = i(e.sourceDB, a, d.keys, d.values, !1);
                        if (h.error && h.error instanceof kn) throw h.error;
                        t.push({
                            value: h.error ? null : h.output,
                            key: d.groupKey
                        })
                    }
                    return {
                        rows: s(t, r.limit, r.skip)
                    }
                }

                function A(e, t) {
                    return An(k(e), function() {
                        return O(e, t)
                    })()
                }

                function O(e, t) {
                    function n(t) {
                        return t.include_docs = !0, e.db.allDocs(t).then(function(e) {
                            return o = e.total_rows, e.rows.map(function(e) {
                                if ("value" in e.doc && "object" == typeof e.doc.value && null !== e.doc.value) {
                                    var t = Object.keys(e.doc.value).sort(),
                                        n = ["id", "key", "value"];
                                    if (!(t < n || t > n)) return e.doc.value
                                }
                                var r = Fn(e.doc._id);
                                return {
                                    key: r[0],
                                    id: r[1],
                                    value: "value" in e.doc ? e.doc.value : null
                                }
                            })
                        })
                    }

                    function r(n) {
                        var r;
                        if (r = i ? S(e, n, t) : {
                                total_rows: o,
                                offset: a,
                                rows: n
                            }, t.include_docs) {
                            var s = On(n.map(u));
                            return e.sourceDB.allDocs({
                                keys: s,
                                include_docs: !0,
                                conflicts: t.conflicts,
                                attachments: t.attachments,
                                binary: t.binary
                            }).then(function(e) {
                                var t = new Pr;
                                return e.rows.forEach(function(e) {
                                    t.set(e.id, e.doc)
                                }), n.forEach(function(e) {
                                    var n = u(e),
                                        r = t.get(n);
                                    r && (e.doc = r)
                                }), r
                            })
                        }
                        return r
                    }
                    var o, i = e.reduceFun && t.reduce !== !1,
                        a = t.skip || 0;
                    if ("undefined" == typeof t.keys || t.keys.length || (t.limit = 0, delete t.keys), "undefined" != typeof t.keys) {
                        var s = t.keys,
                            c = s.map(function(e) {
                                var t = {
                                    startkey: Mn([e]),
                                    endkey: Mn([e, {}])
                                };
                                return n(t)
                            });
                        return Dr.all(c).then(D).then(r)
                    }
                    var f = {
                        descending: t.descending
                    };
                    if (t.start_key && (t.startkey = t.start_key), t.end_key && (t.endkey = t.end_key), "undefined" != typeof t.startkey && (f.startkey = Mn(t.descending ? [t.startkey, {}] : [t.startkey])), "undefined" != typeof t.endkey) {
                        var l = t.inclusive_end !== !1;
                        t.descending && (l = !l), f.endkey = Mn(l ? [t.endkey, {}] : [t.endkey])
                    }
                    if ("undefined" != typeof t.key) {
                        var d = Mn([t.key]),
                            h = Mn([t.key, {}]);
                        f.descending ? (f.endkey = d, f.startkey = h) : (f.startkey = d, f.endkey = h)
                    }
                    return i || ("number" == typeof t.limit && (f.limit = t.limit), f.skip = a), n(f).then(r)
                }

                function j(e) {
                    return e.request({
                        method: "POST",
                        url: "_view_cleanup"
                    })
                }

                function q(t) {
                    return t.get("_local/" + e).then(function(e) {
                        var n = new Pr;
                        Object.keys(e.views).forEach(function(e) {
                            var t = Jn(e),
                                r = "_design/" + t[0],
                                o = t[1],
                                i = n.get(r);
                            i || (i = new Br, n.set(r, i)), i.add(o)
                        });
                        var r = {
                            keys: jn(n),
                            include_docs: !0
                        };
                        return t.allDocs(r).then(function(r) {
                            var o = {};
                            r.rows.forEach(function(t) {
                                var r = t.key.substring(8);
                                n.get(t.key).forEach(function(n) {
                                    var i = r + "/" + n;
                                    e.views[i] || (i = n);
                                    var a = Object.keys(e.views[i]),
                                        s = t.doc && t.doc.views && t.doc.views[n];
                                    a.forEach(function(e) {
                                        o[e] = o[e] || s
                                    })
                                })
                            });
                            var i = Object.keys(o).filter(function(e) {
                                    return !o[e]
                                }),
                                a = i.map(function(e) {
                                    return An(k(e), function() {
                                        return new t.constructor(e, t.__opts).destroy()
                                    })()
                                });
                            return Dr.all(a).then(function() {
                                return {
                                    ok: !0
                                }
                            })
                        })
                    }, _({
                        ok: !0
                    }))
                }

                function T(t, n, o) {
                    if ("http" === t.type()) return y(t, n, o);
                    if ("function" == typeof t._query) return g(t, n, o);
                    if ("string" != typeof n) return v(o, n), vi.add(function() {
                        var r = Gn(t, "temp_view/temp_view", n.map, n.reduce, !0, e);
                        return r.then(function(e) {
                            return Sn(E(e).then(function() {
                                return A(e, o)
                            }), function() {
                                return e.db.destroy()
                            })
                        })
                    }), vi.finish();
                    var i = n,
                        a = Jn(i),
                        s = a[0],
                        u = a[1];
                    return t.get("_design/" + s).then(function(n) {
                        var a = n.views && n.views[u];
                        if (!a) throw new wn("ddoc " + n._id + " has no view named " + u);
                        r(n, u), v(o, a);
                        var s = Gn(t, i, a.map, a.reduce, !1, e);
                        return s.then(function(e) {
                            return "ok" === o.stale || "update_after" === o.stale ? ("update_after" === o.stale && Tr(function() {
                                E(e)
                            }), A(e, o)) : E(e).then(function() {
                                return A(e, o)
                            })
                        })
                    })
                }

                function I(e, t, n) {
                    var r = this;
                    "function" == typeof t && (n = t, t = {}), t = t ? h(t) : {}, "function" == typeof e && (e = {
                        map: e
                    });
                    var o = Dr.resolve().then(function() {
                        return T(r, e, t)
                    });
                    return En(o, n), o
                }
                var L = xn(function() {
                    var e = this;
                    return "http" === e.type() ? j(e) : "function" == typeof e._viewCleanup ? m(e) : q(e)
                });
                return {
                    query: I,
                    viewCleanup: L
                }
            }

            function Yn(e, t) {
                if ("function" == typeof e && 2 === e.length) {
                    var n = e;
                    return function(e) {
                        return n(e, t)
                    }
                }
                return In(e.toString(), t)
            }

            function Zn(e) {
                return gi[e] ? gi[e] : In(e.toString())
            }

            function er(e, t) {
                var n = e.views && e.views[t];
                if ("string" != typeof n.map) throw new wn("ddoc " + e._id + " has no string view named " + t + ", instead found object of type: " + typeof n.map)
            }

            function tr(e, t, n) {
                return _i.query.call(this, e, t, n)
            }

            function nr(e) {
                return _i.viewCleanup.call(this, e)
            }

            function rr(e) {
                return /^1-/.test(e)
            }

            function or(e, t, n) {
                return !e._attachments || !e._attachments[n] || e._attachments[n].digest !== t._attachments[n].digest;
            }

            function ir(e, t) {
                var n = Object.keys(t._attachments);
                return Dr.all(n.map(function(n) {
                    return e.getAttachment(t._id, n, {
                        rev: t._rev
                    })
                }))
            }

            function ar(e, t, n) {
                var r = "http" === t.type() && "http" !== e.type(),
                    o = Object.keys(n._attachments);
                return r ? e.get(n._id).then(function(r) {
                    return Dr.all(o.map(function(o) {
                        return or(r, n, o) ? t.getAttachment(n._id, o) : e.getAttachment(r._id, o)
                    }))
                }).catch(function(e) {
                    if (404 !== e.status) throw e;
                    return ir(t, n)
                }) : ir(t, n)
            }

            function sr(e) {
                var t = [];
                return Object.keys(e).forEach(function(n) {
                    var r = e[n].missing;
                    r.forEach(function(e) {
                        t.push({
                            id: n,
                            rev: e
                        })
                    })
                }), {
                    docs: t,
                    revs: !0,
                    latest: !0
                }
            }

            function ur(e, t, n, r) {
                function o() {
                    var o = sr(n);
                    if (o.docs.length) return e.bulkGet(o).then(function(n) {
                        if (r.cancelled) throw new Error("cancelled");
                        return Dr.all(n.results.map(function(n) {
                            return Dr.all(n.docs.map(function(n) {
                                var r = n.ok;
                                return n.error && (d = !1), r && r._attachments ? ar(t, e, r).then(function(e) {
                                    var t = Object.keys(r._attachments);
                                    return e.forEach(function(e, n) {
                                        var o = r._attachments[t[n]];
                                        delete o.stub, delete o.length, o.data = e
                                    }), r
                                }) : r
                            }))
                        })).then(function(e) {
                            l = l.concat(D(e).filter(Boolean))
                        })
                    })
                }

                function i(e) {
                    return e._attachments && Object.keys(e._attachments).length > 0
                }

                function a(e) {
                    return e._conflicts && e._conflicts.length > 0
                }

                function s(t) {
                    return e.allDocs({
                        keys: t,
                        include_docs: !0,
                        conflicts: !0
                    }).then(function(e) {
                        if (r.cancelled) throw new Error("cancelled");
                        e.rows.forEach(function(e) {
                            e.deleted || !e.doc || !rr(e.value.rev) || i(e.doc) || a(e.doc) || (e.doc._conflicts && delete e.doc._conflicts, l.push(e.doc), delete n[e.id])
                        })
                    })
                }

                function c() {
                    var e = Object.keys(n).filter(function(e) {
                        var t = n[e].missing;
                        return 1 === t.length && rr(t[0])
                    });
                    if (e.length > 0) return s(e)
                }

                function f() {
                    return {
                        ok: d,
                        docs: l
                    }
                }
                n = u(n);
                var l = [],
                    d = !0;
                return Dr.resolve().then(c).then(o).then(f)
            }

            function cr(e, t, n, r, o) {
                return e.get(t).catch(function(n) {
                    if (404 === n.status) return "http" === e.type() && j(404, "PouchDB is just checking if a remote checkpoint exists."), {
                        session_id: r,
                        _id: t,
                        history: [],
                        replicator: ki,
                        version: wi
                    };
                    throw n
                }).then(function(i) {
                    if (!o.cancelled && i.last_seq !== n) return i.history = (i.history || []).filter(function(e) {
                        return e.session_id !== r
                    }), i.history.unshift({
                        last_seq: n,
                        session_id: r
                    }), i.history = i.history.slice(0, Ei), i.version = wi, i.replicator = ki, i.session_id = r, i.last_seq = n, e.put(i).catch(function(i) {
                        if (409 === i.status) return cr(e, t, n, r, o);
                        throw i
                    })
                })
            }

            function fr(e, t, n, r) {
                this.src = e, this.target = t, this.id = n, this.returnValue = r
            }

            function lr(e, t) {
                return e.session_id === t.session_id ? {
                    last_seq: e.last_seq,
                    history: e.history
                } : dr(e.history, t.history)
            }

            function dr(e, t) {
                var n = e[0],
                    r = e.slice(1),
                    o = t[0],
                    i = t.slice(1);
                if (!n || 0 === t.length) return {
                    last_seq: xi,
                    history: []
                };
                var a = n.session_id;
                if (hr(a, t)) return {
                    last_seq: n.last_seq,
                    history: e
                };
                var s = o.session_id;
                return hr(s, r) ? {
                    last_seq: o.last_seq,
                    history: i
                } : dr(r, i)
            }

            function hr(e, t) {
                var n = t[0],
                    r = t.slice(1);
                return !(!e || 0 === t.length) && (e === n.session_id || hr(e, r))
            }

            function pr(e) {
                return "number" == typeof e.status && 4 === Math.floor(e.status / 100)
            }

            function vr(e, t, n, r) {
                if (e.retry === !1) return t.emit("error", n), void t.removeAllListeners();
                if ("function" != typeof e.back_off_function && (e.back_off_function = O), t.emit("requestError", n), "active" === t.state || "pending" === t.state) {
                    t.emit("paused", n), t.state = "stopped";
                    var o = function() {
                            e.current_back_off = Ai
                        },
                        i = function() {
                            t.removeListener("active", o)
                        };
                    t.once("paused", i), t.once("active", o)
                }
                e.current_back_off = e.current_back_off || Ai, e.current_back_off = e.back_off_function(e.current_back_off), setTimeout(r, e.current_back_off)
            }

            function yr(e) {
                return Object.keys(e).sort(Dn).reduce(function(t, n) {
                    return t[n] = e[n], t
                }, {})
            }

            function gr(e, t, n) {
                var r = n.doc_ids ? n.doc_ids.sort(Dn) : "",
                    o = n.filter ? n.filter.toString() : "",
                    i = "",
                    a = "";
                return n.filter && n.query_params && (i = JSON.stringify(yr(n.query_params))), n.filter && "_view" === n.filter && (a = n.view.toString()), Dr.all([e.id(), t.id()]).then(function(e) {
                    var t = e[0] + e[1] + o + a + i + r;
                    return new Dr(function(e) {
                        Je(t, e)
                    })
                }).then(function(e) {
                    return e = e.replace(/\//g, ".").replace(/\+/g, "_"), "_local/" + e
                })
            }

            function mr(e, t, n, r, o) {
                function i() {
                    return E ? Dr.resolve() : gr(e, t, n).then(function(n) {
                        k = n, E = new fr(e, t, k, r)
                    })
                }

                function a() {
                    if (R = [], 0 !== w.docs.length) {
                        var e = w.docs,
                            i = {
                                timeout: n.timeout
                            };
                        return t.bulkDocs({
                            docs: e,
                            new_edits: !1
                        }, i).then(function(t) {
                            if (r.cancelled) throw p(), new Error("cancelled");
                            var n = Object.create(null);
                            t.forEach(function(e) {
                                e.error && (n[e.id] = e)
                            });
                            var i = Object.keys(n).length;
                            o.doc_write_failures += i, o.docs_written += e.length - i, e.forEach(function(e) {
                                var t = n[e._id];
                                if (t) {
                                    if (o.errors.push(t), "unauthorized" !== t.name && "forbidden" !== t.name) throw t;
                                    r.emit("denied", u(t))
                                } else R.push(e)
                            })
                        }, function(t) {
                            throw o.doc_write_failures += e.length, t
                        })
                    }
                }

                function s() {
                    if (w.error) throw new Error("There was a problem getting docs.");
                    o.last_seq = q = w.seq;
                    var e = u(o);
                    return R.length && (e.docs = R, r.emit("change", e)), A = !0, E.writeCheckpoint(w.seq, M).then(function() {
                        if (A = !1, r.cancelled) throw p(), new Error("cancelled");
                        w = void 0, m()
                    }).catch(function(e) {
                        throw b(e), e
                    })
                }

                function c() {
                    var e = {};
                    return w.changes.forEach(function(t) {
                        "_user/" !== t.id && (e[t.id] = t.changes.map(function(e) {
                            return e.rev
                        }))
                    }), t.revsDiff(e).then(function(e) {
                        if (r.cancelled) throw p(), new Error("cancelled");
                        w.diffs = e
                    })
                }

                function f() {
                    return ur(e, t, w.diffs, r).then(function(e) {
                        w.error = !e.ok, e.docs.forEach(function(e) {
                            delete w.diffs[e._id], o.docs_read++, w.docs.push(e)
                        })
                    })
                }

                function l() {
                    if (!r.cancelled && !w) {
                        if (0 === x.length) return void d(!0);
                        w = x.shift(), c().then(f).then(a).then(s).then(l).catch(function(e) {
                            h("batch processing terminated with error", e)
                        })
                    }
                }

                function d(e) {
                    return 0 === S.changes.length ? void(0 !== x.length || w || ((T && B.live || O) && (r.state = "pending", r.emit("paused")), O && p())) : void((e || O || S.changes.length >= I) && (x.push(S), S = {
                        seq: 0,
                        changes: [],
                        docs: []
                    }, "pending" !== r.state && "stopped" !== r.state || (r.state = "active", r.emit("active")), l()))
                }

                function h(e, t) {
                    j || (t.message || (t.message = e), o.ok = !1, o.status = "aborting", x = [], S = {
                        seq: 0,
                        changes: [],
                        docs: []
                    }, p(t))
                }

                function p(i) {
                    j || r.cancelled && (o.status = "cancelled", A) || (o.status = o.status || "complete", o.end_time = new Date, o.last_seq = q, j = !0, i ? (i.result = o, "unauthorized" === i.name || "forbidden" === i.name ? (r.emit("error", i), r.removeAllListeners()) : vr(n, r, i, function() {
                        mr(e, t, n, r)
                    })) : (r.emit("complete", o), r.removeAllListeners()))
                }

                function v(e) {
                    if (r.cancelled) return p();
                    var t = C(n)(e);
                    t && (S.seq = e.seq, S.changes.push(e), d(0 === x.length && B.live))
                }

                function y(e) {
                    if (D = !1, r.cancelled) return p();
                    if (e.results.length > 0) B.since = e.last_seq, m(), d(!0);
                    else {
                        var t = function() {
                            T ? (B.live = !0, m()) : O = !0, d(!0)
                        };
                        w || 0 !== e.results.length ? t() : (A = !0, E.writeCheckpoint(e.last_seq, M).then(function() {
                            A = !1, o.last_seq = q = e.last_seq, t()
                        }).catch(b))
                    }
                }

                function g(e) {
                    return D = !1, r.cancelled ? p() : void h("changes rejected", e)
                }

                function m() {
                    function t() {
                        i.cancel()
                    }

                    function o() {
                        r.removeListener("cancel", t)
                    }
                    if (!D && !O && x.length < L) {
                        D = !0, r._changes && (r.removeListener("cancel", r._abortChanges), r._changes.cancel()), r.once("cancel", t);
                        var i = e.changes(B).on("change", v);
                        i.then(o, o), i.then(y).catch(g), n.retry && (r._changes = i, r._abortChanges = t)
                    }
                }

                function _() {
                    i().then(function() {
                        return r.cancelled ? void p() : E.getCheckpoint().then(function(e) {
                            q = e, B = {
                                since: q,
                                limit: I,
                                batch_size: I,
                                style: "all_docs",
                                doc_ids: N,
                                return_docs: !0
                            }, n.filter && ("string" != typeof n.filter ? B.include_docs = !0 : B.filter = n.filter), "heartbeat" in n && (B.heartbeat = n.heartbeat), "timeout" in n && (B.timeout = n.timeout), n.query_params && (B.query_params = n.query_params), n.view && (B.view = n.view), m()
                        })
                    }).catch(function(e) {
                        h("getCheckpoint rejected with ", e)
                    })
                }

                function b(e) {
                    A = !1, h("writeCheckpoint completed with error", e)
                }
                var w, k, E, x = [],
                    S = {
                        seq: 0,
                        changes: [],
                        docs: []
                    },
                    A = !1,
                    O = !1,
                    j = !1,
                    q = 0,
                    T = n.continuous || n.live || !1,
                    I = n.batch_size || 100,
                    L = n.batches_limit || 10,
                    D = !1,
                    N = n.doc_ids,
                    R = [],
                    M = z();
                o = o || {
                    ok: !0,
                    start_time: new Date,
                    docs_read: 0,
                    docs_written: 0,
                    doc_write_failures: 0,
                    errors: []
                };
                var B = {};
                return r.ready(e, t), r.cancelled ? void p() : (r._addedListeners || (r.once("cancel", p), "function" == typeof n.complete && (r.once("error", n.complete), r.once("complete", function(e) {
                    n.complete(null, e)
                })), r._addedListeners = !0), void("undefined" == typeof n.since ? _() : i().then(function() {
                    return A = !0, E.writeCheckpoint(n.since, M)
                }).then(function() {
                    return A = !1, r.cancelled ? void p() : (q = n.since, void _())
                }).catch(b)))
            }

            function _r() {
                jr.EventEmitter.call(this), this.cancelled = !1, this.state = "pending";
                var e = this,
                    t = new Dr(function(t, n) {
                        e.once("complete", t), e.once("error", n)
                    });
                e.then = function(e, n) {
                    return t.then(e, n)
                }, e.catch = function(e) {
                    return t.catch(e)
                }, e.catch(function() {})
            }

            function br(e, t) {
                var n = t.PouchConstructor;
                return "string" == typeof e ? new n(e, t) : e
            }

            function wr(e, t, n, r) {
                if ("function" == typeof n && (r = n, n = {}), "undefined" == typeof n && (n = {}), n.doc_ids && !Array.isArray(n.doc_ids)) throw T(to, "`doc_ids` filter parameter is not a list.");
                n.complete = r, n = u(n), n.continuous = n.continuous || n.live, n.retry = "retry" in n && n.retry, n.PouchConstructor = n.PouchConstructor || this;
                var o = new _r(n),
                    i = br(e, n),
                    a = br(t, n);
                return mr(i, a, n, o), o
            }

            function kr(e, t, n, r) {
                return "function" == typeof n && (r = n, n = {}), "undefined" == typeof n && (n = {}), n = u(n), n.PouchConstructor = n.PouchConstructor || this, e = br(e, n), t = br(t, n), new Er(e, t, n, r)
            }

            function Er(e, t, n, r) {
                function o(e) {
                    p.emit("change", {
                        direction: "pull",
                        change: e
                    })
                }

                function i(e) {
                    p.emit("change", {
                        direction: "push",
                        change: e
                    })
                }

                function a(e) {
                    p.emit("denied", {
                        direction: "push",
                        doc: e
                    })
                }

                function s(e) {
                    p.emit("denied", {
                        direction: "pull",
                        doc: e
                    })
                }

                function u() {
                    p.pushPaused = !0, p.pullPaused && p.emit("paused")
                }

                function c() {
                    p.pullPaused = !0, p.pushPaused && p.emit("paused")
                }

                function f() {
                    p.pushPaused = !1, p.pullPaused && p.emit("active", {
                        direction: "push"
                    })
                }

                function l() {
                    p.pullPaused = !1, p.pushPaused && p.emit("active", {
                        direction: "pull"
                    })
                }

                function d(e) {
                    return function(t, n) {
                        var r = "change" === t && (n === o || n === i),
                            d = "denied" === t && (n === s || n === a),
                            h = "paused" === t && (n === c || n === u),
                            v = "active" === t && (n === l || n === f);
                        (r || d || h || v) && (t in g || (g[t] = {}), g[t][e] = !0, 2 === Object.keys(g[t]).length && p.removeAllListeners(t))
                    }
                }

                function h(e, t, n) {
                    e.listeners(t).indexOf(n) == -1 && e.on(t, n)
                }
                var p = this;
                this.canceled = !1;
                var v = n.push ? Wr({}, n, n.push) : n,
                    y = n.pull ? Wr({}, n, n.pull) : n;
                this.push = wr(e, t, v), this.pull = wr(t, e, y), this.pushPaused = !0, this.pullPaused = !0;
                var g = {};
                n.live && (this.push.on("complete", p.pull.cancel.bind(p.pull)), this.pull.on("complete", p.push.cancel.bind(p.push))), this.on("newListener", function(e) {
                    "change" === e ? (h(p.pull, "change", o), h(p.push, "change", i)) : "denied" === e ? (h(p.pull, "denied", s), h(p.push, "denied", a)) : "active" === e ? (h(p.pull, "active", l), h(p.push, "active", f)) : "paused" === e && (h(p.pull, "paused", c), h(p.push, "paused", u))
                }), this.on("removeListener", function(e) {
                    "change" === e ? (p.pull.removeListener("change", o), p.push.removeListener("change", i)) : "denied" === e ? (p.pull.removeListener("denied", s), p.push.removeListener("denied", a)) : "active" === e ? (p.pull.removeListener("active", l), p.push.removeListener("active", f)) : "paused" === e && (p.pull.removeListener("paused", c), p.push.removeListener("paused", u))
                }), this.pull.on("removeListener", d("pull")), this.push.on("removeListener", d("push"));
                var m = Dr.all([this.push, this.pull]).then(function(e) {
                    var t = {
                        push: e[0],
                        pull: e[1]
                    };
                    return p.emit("complete", t), r && r(null, t), p.removeAllListeners(), t
                }, function(e) {
                    if (p.cancel(), r ? r(e) : p.emit("error", e), p.removeAllListeners(), r) throw e
                });
                this.then = function(e, t) {
                    return m.then(e, t)
                }, this.catch = function(e) {
                    return m.catch(e)
                }
            }

            function xr(e) {
                e.replicate = wr, e.sync = kr, Object.defineProperty(e.prototype, "replicate", {
                    get: function() {
                        var e = this;
                        return {
                            from: function(t, n, r) {
                                return e.constructor.replicate(t, e, n, r)
                            },
                            to: function(t, n, r) {
                                return e.constructor.replicate(e, t, n, r)
                            }
                        }
                    }
                }), e.prototype.sync = function(e, t, n) {
                    return this.constructor.sync(this, e, t, n)
                }
            }
            var Sr = r(n(76)),
                Ar = r(n(38)),
                Or = r(n(94)),
                jr = n(73),
                qr = r(n(96)),
                Tr = r(n(25)),
                Ir = r(n(98)),
                Lr = r(n(99)),
                Cr = r(n(100)),
                Dr = "function" == typeof Promise ? Promise : Sr,
                Nr = Function.prototype.toString,
                Rr = Nr.call(Object),
                Mr = Or("pouchdb:api");
            p.prototype.get = function(e) {
                var t = d(e);
                return this._store[t]
            }, p.prototype.set = function(e, t) {
                var n = d(e);
                return this._store[n] = t, !0
            }, p.prototype.has = function(e) {
                var t = d(e);
                return t in this._store
            }, p.prototype.delete = function(e) {
                var t = d(e),
                    n = t in this._store;
                return delete this._store[t], n
            }, p.prototype.forEach = function(e) {
                for (var t = Object.keys(this._store), n = 0, r = t.length; n < r; n++) {
                    var o = t[n],
                        i = this._store[o];
                    o = h(o), e(i, o)
                }
            }, Object.defineProperty(p.prototype, "size", {
                get: function() {
                    return Object.keys(this._store).length
                }
            }), v.prototype.add = function(e) {
                return this._store.set(e, !0)
            }, v.prototype.has = function(e) {
                return this._store.has(e)
            }, v.prototype.forEach = function(e) {
                this._store.forEach(function(t, n) {
                    e(n)
                })
            }, Object.defineProperty(v.prototype, "size", {
                get: function() {
                    return this._store.size
                }
            });
            var Br, Pr;
            y() ? (Br = Set, Pr = Map) : (Br = v, Pr = p);
            var Fr, $r = 6;
            if (w()) Fr = !1;
            else try {
                localStorage.setItem("_pouch_check_localstorage", 1), Fr = !!localStorage.getItem("_pouch_check_localstorage")
            } catch (e) {
                Fr = !1
            }
            qr(x, jr.EventEmitter), x.prototype.addListener = function(e, t, n, r) {
                function o() {
                    function e() {
                        a = !1
                    }
                    if (i._listeners[t]) {
                        if (a) return void(a = "waiting");
                        a = !0;
                        var s = g(r, ["style", "include_docs", "attachments", "conflicts", "filter", "doc_ids", "view", "since", "query_params", "binary"]);
                        n.changes(s).on("change", function(e) {
                            e.seq > r.since && !r.cancelled && (r.since = e.seq, r.onChange(e))
                        }).on("complete", function() {
                            "waiting" === a && Tr(o), a = !1
                        }).on("error", e)
                    }
                }
                if (!this._listeners[t]) {
                    var i = this,
                        a = !1;
                    this._listeners[t] = o, this.on(e, o)
                }
            }, x.prototype.removeListener = function(e, t) {
                t in this._listeners && (jr.EventEmitter.prototype.removeListener.call(this, e, this._listeners[t]), delete this._listeners[t])
            }, x.prototype.notifyLocalWindows = function(e) {
                w() ? chrome.storage.local.set({
                    dbName: e
                }) : k() && (localStorage[e] = "a" === localStorage[e] ? "b" : "a")
            }, x.prototype.notify = function(e) {
                this.emit(e), this.notifyLocalWindows(e)
            };
            var Ur;
            Ur = "function" == typeof Object.assign ? Object.assign : function(e) {
                for (var t = Object(e), n = 1; n < arguments.length; n++) {
                    var r = arguments[n];
                    if (null != r)
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o])
                }
                return t
            };
            var Wr = Ur;
            qr(q, Error), q.prototype.toString = function() {
                return JSON.stringify({
                    status: this.status,
                    name: this.name,
                    message: this.message,
                    reason: this.reason
                })
            };
            var zr, Kr = (new q(401, "unauthorized", "Name or password is incorrect."), new q(400, "bad_request", "Missing JSON list of 'docs'")),
                Hr = new q(404, "not_found", "missing"),
                Gr = new q(409, "conflict", "Document update conflict"),
                Jr = new q(400, "bad_request", "_id field must contain a string"),
                Vr = new q(412, "missing_id", "_id is required for puts"),
                Xr = new q(400, "bad_request", "Only reserved document ids may start with underscore."),
                Qr = (new q(412, "precondition_failed", "Database not open"), new q(500, "unknown_error", "Database encountered an unknown error")),
                Yr = new q(500, "badarg", "Some query argument is invalid"),
                Zr = (new q(400, "invalid_request", "Request was invalid"), new q(400, "query_parse_error", "Some query parameter is invalid")),
                eo = new q(500, "doc_validation", "Bad special document member"),
                to = new q(400, "bad_request", "Something wrong with the request"),
                no = new q(400, "bad_request", "Document must be a JSON object"),
                ro = (new q(404, "not_found", "Database not found"), new q(500, "indexed_db_went_bad", "unknown")),
                oo = new q(500, "web_sql_went_bad", "unknown"),
                io = (new q(500, "levelDB_went_went_bad", "unknown"), new q(403, "forbidden", "Forbidden by design doc validate_doc_update function"), new q(400, "bad_request", "Invalid rev format")),
                ao = (new q(412, "file_exists", "The database could not be created, the file already exists."), new q(412, "missing_stub", "A pre-existing attachment stub wasn't found")),
                so = (new q(413, "invalid_url", "Provided URL is invalid"), N.name);
            zr = so ? function(e) {
                return e.name
            } : function(e) {
                return e.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]
            };
            var uo = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                co = "queryKey",
                fo = /(?:^|&)([^&=]*)=?([^&]*)/g,
                lo = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                ho = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
            qr(ve, jr.EventEmitter), ve.prototype.cancel = function() {
                this.isCancelled = !0, this.db.taskqueue.isReady && this.emit("cancel")
            }, ve.prototype.doChanges = function(e) {
                var t = this,
                    n = e.complete;
                if (e = u(e), "live" in e && !("continuous" in e) && (e.continuous = e.live), e.processChange = ye, "latest" === e.since && (e.since = "now"), e.since || (e.since = 0), "now" === e.since) return void this.db.info().then(function(r) {
                    return t.isCancelled ? void n(null, {
                        status: "cancelled"
                    }) : (e.since = r.update_seq, void t.doChanges(e))
                }, n);
                if (e.view && !e.filter && (e.filter = "_view"), e.filter && "string" == typeof e.filter && ("_view" === e.filter ? e.view = P(e.view) : e.filter = P(e.filter), "http" !== this.db.type() && !e.doc_ids)) return this.filterChanges(e);
                "descending" in e || (e.descending = !1), e.limit = 0 === e.limit ? 1 : e.limit, e.complete = n;
                var r = this.db._changes(e);
                if (r && "function" == typeof r.cancel) {
                    var o = t.cancel;
                    t.cancel = Ar(function(e) {
                        r.cancel(), o.apply(this, e)
                    })
                }
            }, ve.prototype.filterChanges = function(e) {
                var t = this,
                    n = e.complete;
                if ("_view" === e.filter) {
                    if (!e.view || "string" != typeof e.view) {
                        var r = T(to, "`view` filter parameter not found or invalid.");
                        return n(r)
                    }
                    var o = B(e.view);
                    this.db.get("_design/" + o[0], function(r, i) {
                        if (t.isCancelled) return n(null, {
                            status: "cancelled"
                        });
                        if (r) return n(I(r));
                        var a = i && i.views && i.views[o[1]] && i.views[o[1]].map;
                        return a ? (e.filter = he(a), void t.doChanges(e)) : n(T(Hr, i.views ? "missing json key: " + o[1] : "missing json key: views"))
                    })
                } else {
                    var i = B(e.filter);
                    if (!i) return t.doChanges(e);
                    this.db.get("_design/" + i[0], function(r, o) {
                        if (t.isCancelled) return n(null, {
                            status: "cancelled"
                        });
                        if (r) return n(I(r));
                        var a = o && o.filters && o.filters[i[1]];
                        return a ? (e.filter = de(a), void t.doChanges(e)) : n(T(Hr, o && o.filters ? "missing json key: " + i[1] : "missing json key: filters"))
                    })
                }
            }, qr(Se, jr.EventEmitter), Se.prototype.post = l("post", function(e, t, n) {
                return "function" == typeof t && (n = t, t = {}), "object" != typeof e || Array.isArray(e) ? n(T(no)) : void this.bulkDocs({
                    docs: [e]
                }, t, me(n))
            }), Se.prototype.put = l("put", function(e, t, n) {
                return "function" == typeof t && (n = t, t = {}), "object" != typeof e || Array.isArray(e) ? n(T(no)) : (R(e._id), fe(e._id) && "function" == typeof this._putLocal ? e._deleted ? this._removeLocal(e, n) : this._putLocal(e, n) : void("function" == typeof this._put && t.new_edits !== !1 ? this._put(e, t, n) : this.bulkDocs({
                    docs: [e]
                }, t, me(n))))
            }), Se.prototype.putAttachment = l("putAttachment", function(e, t, n, r, o) {
                function i(e) {
                    var n = "_rev" in e ? parseInt(e._rev, 10) : 0;
                    return e._attachments = e._attachments || {}, e._attachments[t] = {
                        content_type: o,
                        data: r,
                        revpos: ++n
                    }, a.put(e)
                }
                var a = this;
                return "function" == typeof o && (o = r, r = n, n = null), "undefined" == typeof o && (o = r, r = n, n = null), o || S("warn", "Attachment", t, "on document", e, "is missing content_type"), a.get(e).then(function(e) {
                    if (e._rev !== n) throw T(Gr);
                    return i(e)
                }, function(t) {
                    if (t.reason === Hr.message) return i({
                        _id: e
                    });
                    throw t
                })
            }), Se.prototype.removeAttachment = l("removeAttachment", function(e, t, n, r) {
                var o = this;
                o.get(e, function(e, i) {
                    return e ? void r(e) : i._rev !== n ? void r(T(Gr)) : i._attachments ? (delete i._attachments[t], 0 === Object.keys(i._attachments).length && delete i._attachments, void o.put(i, r)) : r()
                })
            }), Se.prototype.remove = l("remove", function(e, t, n, r) {
                var o;
                "string" == typeof t ? (o = {
                    _id: e,
                    _rev: t
                }, "function" == typeof n && (r = n, n = {})) : (o = e, "function" == typeof t ? (r = t, n = {}) : (r = n, n = t)), n = n || {}, n.was_delete = !0;
                var i = {
                    _id: o._id,
                    _rev: o._rev || n.rev
                };
                return i._deleted = !0, fe(i._id) && "function" == typeof this._removeLocal ? this._removeLocal(o, r) : void this.bulkDocs({
                    docs: [i]
                }, n, me(r))
            }), Se.prototype.revsDiff = l("revsDiff", function(e, t, n) {
                function r(e, t) {
                    s.has(e) || s.set(e, {
                        missing: []
                    }), s.get(e).missing.push(t)
                }

                function o(t, n) {
                    var o = e[t].slice(0);
                    H(n, function(e, n, i, a, s) {
                        var u = n + "-" + i,
                            c = o.indexOf(u);
                        c !== -1 && (o.splice(c, 1), "available" !== s.status && r(t, u))
                    }), o.forEach(function(e) {
                        r(t, e)
                    })
                }
                "function" == typeof t && (n = t, t = {});
                var i = Object.keys(e);
                if (!i.length) return n(null, {});
                var a = 0,
                    s = new Pr;
                i.map(function(t) {
                    this._getRevisionTree(t, function(r, u) {
                        if (r && 404 === r.status && "missing" === r.message) s.set(t, {
                            missing: e[t]
                        });
                        else {
                            if (r) return n(r);
                            o(t, u)
                        }
                        if (++a === i.length) {
                            var c = {};
                            return s.forEach(function(e, t) {
                                c[t] = e
                            }), n(null, c)
                        }
                    })
                }, this)
            }), Se.prototype.bulkGet = l("bulkGet", function(e, t) {
                b(this, e, t)
            }), Se.prototype.compactDocument = l("compactDocument", function(e, t, n) {
                var r = this;
                this._getRevisionTree(e, function(o, i) {
                    if (o) return n(o);
                    var a = we(i),
                        s = [],
                        u = [];
                    Object.keys(a).forEach(function(e) {
                        a[e] > t && s.push(e)
                    }), H(i, function(e, t, n, r, o) {
                        var i = t + "-" + n;
                        "available" === o.status && s.indexOf(i) !== -1 && u.push(i)
                    }), r._doCompaction(e, u, n)
                })
            }), Se.prototype.compact = l("compact", function(e, t) {
                "function" == typeof e && (t = e, e = {});
                var n = this;
                e = e || {}, n._compactionQueue = n._compactionQueue || [], n._compactionQueue.push({
                    opts: e,
                    callback: t
                }), 1 === n._compactionQueue.length && Ee(n)
            }), Se.prototype._compact = function(e, t) {
                function n(e) {
                    a.push(o.compactDocument(e.id, 0))
                }

                function r(e) {
                    var n = e.last_seq;
                    Dr.all(a).then(function() {
                        return $(o, "_local/compaction", function(e) {
                            return (!e.last_seq || e.last_seq < n) && (e.last_seq = n, e)
                        })
                    }).then(function() {
                        t(null, {
                            ok: !0
                        })
                    }).catch(t)
                }
                var o = this,
                    i = {
                        return_docs: !1,
                        last_seq: e.last_seq || 0
                    },
                    a = [];
                o.changes(i).on("change", n).on("complete", r).on("error", t)
            }, Se.prototype.get = l("get", function(e, t, n) {
                function r() {
                    var r = [],
                        a = o.length;
                    return a ? void o.forEach(function(o) {
                        i.get(e, {
                            rev: o,
                            revs: t.revs,
                            latest: t.latest,
                            attachments: t.attachments
                        }, function(e, t) {
                            if (e) r.push({
                                missing: o
                            });
                            else {
                                for (var i, s = 0, u = r.length; s < u; s++)
                                    if (r[s].ok && r[s].ok._rev === t._rev) {
                                        i = !0;
                                        break
                                    }
                                i || r.push({
                                    ok: t
                                })
                            }
                            a--, a || n(null, r)
                        })
                    }) : n(null, r)
                }
                if ("function" == typeof t && (n = t, t = {}), "string" != typeof e) return n(T(Jr));
                if (fe(e) && "function" == typeof this._getLocal) return this._getLocal(e, n);
                var o = [],
                    i = this;
                if (!t.open_revs) return this._get(e, t, function(e, r) {
                    if (e) return n(e);
                    var o = r.doc,
                        a = r.metadata,
                        s = r.ctx;
                    if (t.conflicts) {
                        var u = V(a);
                        u.length && (o._conflicts = u)
                    }
                    if (ce(a, o._rev) && (o._deleted = !0), t.revs || t.revs_info) {
                        for (var c = o._rev.split("-"), f = parseInt(c[0], 10), l = c[1], d = Q(a.rev_tree), h = null, p = 0; p < d.length; p++) {
                            var v = d[p],
                                y = v.ids.map(function(e) {
                                    return e.id
                                }).indexOf(l),
                                g = y === f - 1;
                            (g || !h && y !== -1) && (h = v)
                        }
                        var m = h.ids.map(function(e) {
                                return e.id
                            }).indexOf(o._rev.split("-")[1]) + 1,
                            _ = h.ids.length - m;
                        if (h.ids.splice(m, _), h.ids.reverse(), t.revs && (o._revisions = {
                                start: h.pos + h.ids.length - 1,
                                ids: h.ids.map(function(e) {
                                    return e.id
                                })
                            }), t.revs_info) {
                            var b = h.pos + h.ids.length;
                            o._revs_info = h.ids.map(function(e) {
                                return b--, {
                                    rev: b + "-" + e.id,
                                    status: e.opts.status
                                }
                            })
                        }
                    }
                    if (t.attachments && o._attachments) {
                        var w = o._attachments,
                            k = Object.keys(w).length;
                        if (0 === k) return n(null, o);
                        Object.keys(w).forEach(function(e) {
                            this._getAttachment(o._id, e, w[e], {
                                rev: o._rev,
                                binary: t.binary,
                                ctx: s
                            }, function(t, r) {
                                var i = o._attachments[e];
                                i.data = r, delete i.stub, delete i.length, --k || n(null, o)
                            })
                        }, i)
                    } else {
                        if (o._attachments)
                            for (var E in o._attachments) o._attachments.hasOwnProperty(E) && (o._attachments[E].stub = !0);
                        n(null, o)
                    }
                });
                if ("all" === t.open_revs) this._getRevisionTree(e, function(e, t) {
                    return e ? n(e) : (o = J(t).map(function(e) {
                        return e.rev
                    }), void r())
                });
                else {
                    if (!Array.isArray(t.open_revs)) return n(T(Qr, "function_clause"));
                    o = t.open_revs;
                    for (var a = 0; a < o.length; a++) {
                        var s = o[a];
                        if ("string" != typeof s || !/^\d+-/.test(s)) return n(T(io))
                    }
                    r()
                }
            }), Se.prototype.getAttachment = l("getAttachment", function(e, t, n, r) {
                var o = this;
                n instanceof Function && (r = n, n = {}), this._get(e, n, function(i, a) {
                    return i ? r(i) : a.doc._attachments && a.doc._attachments[t] ? (n.ctx = a.ctx, n.binary = !0, void o._getAttachment(e, t, a.doc._attachments[t], n, r)) : r(T(Hr))
                })
            }), Se.prototype.allDocs = l("allDocs", function(e, t) {
                if ("function" == typeof e && (t = e, e = {}), e.skip = "undefined" != typeof e.skip ? e.skip : 0, e.start_key && (e.startkey = e.start_key), e.end_key && (e.endkey = e.end_key), "keys" in e) {
                    if (!Array.isArray(e.keys)) return t(new TypeError("options.keys must be an array"));
                    var n = ["startkey", "endkey", "key"].filter(function(t) {
                        return t in e
                    })[0];
                    if (n) return void t(T(Zr, "Query parameter `" + n + "` is not compatible with multi-get"));
                    if ("http" !== this.type()) return ke(this, e, t)
                }
                return this._allDocs(e, t)
            }), Se.prototype.changes = function(e, t) {
                return "function" == typeof e && (t = e, e = {}), new ve(this, e, t)
            }, Se.prototype.close = l("close", function(e) {
                return this._closed = !0, this.emit("closed"), this._close(e)
            }), Se.prototype.info = l("info", function(e) {
                var t = this;
                this._info(function(n, r) {
                    return n ? e(n) : (r.db_name = r.db_name || t.name, r.auto_compaction = !(!t.auto_compaction || "http" === t.type()), r.adapter = t.type(), void e(null, r))
                })
            }), Se.prototype.id = l("id", function(e) {
                return this._id(e)
            }), Se.prototype.type = function() {
                return "function" == typeof this._type ? this._type() : this.adapter
            }, Se.prototype.bulkDocs = l("bulkDocs", function(e, t, n) {
                if ("function" == typeof t && (n = t, t = {}), t = t || {}, Array.isArray(e) && (e = {
                        docs: e
                    }), !e || !e.docs || !Array.isArray(e.docs)) return n(T(Kr));
                for (var r = 0; r < e.docs.length; ++r)
                    if ("object" != typeof e.docs[r] || Array.isArray(e.docs[r])) return n(T(no));
                var o;
                if (e.docs.forEach(function(e) {
                        e._attachments && Object.keys(e._attachments).forEach(function(t) {
                            o = o || xe(t), e._attachments[t].content_type || S("warn", "Attachment", t, "on document", e._id, "is missing content_type")
                        })
                    }), o) return n(T(to, o));
                "new_edits" in t || ("new_edits" in e ? t.new_edits = e.new_edits : t.new_edits = !0);
                var i = this;
                t.new_edits || "http" === i.type() || e.docs.sort(be), _e(e.docs);
                var a = e.docs.map(function(e) {
                    return e._id
                });
                return this._bulkDocs(e, t, function(e, r) {
                    if (e) return n(e);
                    if (t.new_edits || (r = r.filter(function(e) {
                            return e.error
                        })), "http" !== i.type())
                        for (var o = 0, s = r.length; o < s; o++) r[o].id = r[o].id || a[o];
                    n(null, r)
                })
            }), Se.prototype.registerDependentDatabase = l("registerDependentDatabase", function(e, t) {
                function n(t) {
                    return t.dependentDbs = t.dependentDbs || {}, !t.dependentDbs[e] && (t.dependentDbs[e] = !0, t)
                }
                var r = new this.constructor(e, this.__opts);
                $(this, "_local/_pouch_dependentDbs", n).then(function() {
                    t(null, {
                        db: r
                    })
                }).catch(t)
            }), Se.prototype.destroy = l("destroy", function(e, t) {
                function n() {
                    r._destroy(e, function(e, n) {
                        return e ? t(e) : (r._destroyed = !0, r.emit("destroyed"), void t(null, n || {
                            ok: !0
                        }))
                    })
                }
                "function" == typeof e && (t = e, e = {});
                var r = this,
                    o = !("use_prefix" in r) || r.use_prefix;
                return "http" === r.type() ? n() : void r.get("_local/_pouch_dependentDbs", function(e, i) {
                    if (e) return 404 !== e.status ? t(e) : n();
                    var a = i.dependentDbs,
                        s = r.constructor,
                        u = Object.keys(a).map(function(e) {
                            var t = o ? e.replace(new RegExp("^" + s.prefix), "") : e;
                            return new s(t, r.__opts).destroy()
                        });
                    Dr.all(u).then(n, t)
                })
            }), Ae.prototype.execute = function() {
                var e;
                if (this.failed)
                    for (; e = this.queue.shift();) e(this.failed);
                else
                    for (; e = this.queue.shift();) e()
            }, Ae.prototype.fail = function(e) {
                this.failed = e, this.execute()
            }, Ae.prototype.ready = function(e) {
                this.isReady = !0, this.db = e, this.execute()
            }, Ae.prototype.addTask = function(e) {
                this.queue.push(e), this.failed && this.execute()
            }, qr(qe, Se), qe.debug = Or, qe.adapters = {}, qe.preferredAdapters = [], qe.prefix = "_pouch_";
            var po = new jr.EventEmitter;
            Te(qe), qe.adapter = function(e, t, n) {
                t.valid() && (qe.adapters[e] = t, n && qe.preferredAdapters.push(e))
            }, qe.plugin = function(e) {
                if ("function" == typeof e) e(qe);
                else {
                    if ("object" != typeof e || 0 === Object.keys(e).length) throw new Error('Invalid plugin: got "' + e + '", expected an object or a function');
                    Object.keys(e).forEach(function(t) {
                        qe.prototype[t] = e[t]
                    })
                }
                return this.__defaults && (qe.__defaults = Wr({}, this.__defaults)), qe
            }, qe.defaults = function(e) {
                function t(e, n) {
                    return this instanceof t ? (n = n || {}, e && "object" == typeof e && (n = e, e = n.name, delete n.name), n = Wr({}, t.__defaults, n), void qe.call(this, e, n)) : new t(e, n)
                }
                return qr(t, qe), t.preferredAdapters = qe.preferredAdapters.slice(), Object.keys(qe).forEach(function(e) {
                    e in t || (t[e] = qe[e])
                }), t.__defaults = Wr({}, this.__defaults, e), t
            };
            var vo = "6.1.2";
            qe.version = vo;
            var yo, go = Ie(["_id", "_rev", "_attachments", "_deleted", "_revisions", "_revs_info", "_conflicts", "_deleted_conflicts", "_local_seq", "_rev_tree", "_replication_id", "_replication_state", "_replication_state_time", "_replication_state_reason", "_replication_stats", "_removed"]),
                mo = Ie(["_attachments", "_replication_id", "_replication_state", "_replication_state_time", "_replication_state_reason", "_replication_stats"]),
                _o = function(e) {
                    return atob(e)
                },
                bo = function(e) {
                    return btoa(e)
                },
                wo = t.setImmediate || t.setTimeout,
                ko = 32768,
                Eo = 5,
                xo = "document-store",
                So = "by-sequence",
                Ao = "attach-store",
                Oo = "attach-seq-store",
                jo = "meta-store",
                qo = "local-store",
                To = "detect-blob-support",
                Io = new x,
                Lo = !1,
                Co = [],
                Do = new Pr,
                No = new Pr;
            At.valid = function() {
                var e = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);
                return !e && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange
            };
            var Ro = function(e) {
                    e.adapter("idb", At, !0)
                },
                Mo = 7,
                Bo = Dt("document-store"),
                Po = Dt("by-sequence"),
                Fo = Dt("attach-store"),
                $o = Dt("local-store"),
                Uo = Dt("metadata-store"),
                Wo = Dt("attach-seq-store"),
                zo = new Pr,
                Ko = new x,
                Ho = 1,
                Go = "CREATE INDEX IF NOT EXISTS 'by-seq-deleted-idx' ON " + Po + " (seq, deleted)",
                Jo = "CREATE UNIQUE INDEX IF NOT EXISTS 'by-seq-doc-id-rev' ON " + Po + " (doc_id, rev)",
                Vo = "CREATE INDEX IF NOT EXISTS 'doc-winningseq-idx' ON " + Bo + " (winningseq)",
                Xo = "CREATE INDEX IF NOT EXISTS 'attach-seq-seq-idx' ON " + Wo + " (seq)",
                Qo = "CREATE UNIQUE INDEX IF NOT EXISTS 'attach-seq-digest-idx' ON " + Wo + " (digest, seq)",
                Yo = Po + ".seq = " + Bo + ".winningseq",
                Zo = Po + ".seq AS seq, " + Po + ".deleted AS deleted, " + Po + ".json AS data, " + Po + ".rev AS rev, " + Bo + ".json AS metadata";
            en.valid = Yt, en.use_prefix = !0;
            var ei = function(e) {
                    e.adapter("websql", en, !0)
                },
                ti = on(),
                ni = function() {},
                ri = 25,
                oi = 50,
                ii = {},
                ai = Or("pouchdb:http");
            _n.valid = function() {
                return !0
            };
            var si = function(e) {
                e.adapter("http", _n, !1), e.adapter("https", _n, !1)
            };
            qr(bn, Error), qr(wn, Error), qr(kn, Error);
            var ui = S.bind(null, "log"),
                ci = Array.isArray,
                fi = JSON.parse,
                li = -324,
                di = 3,
                hi = "";
            Hn.prototype.add = function(e) {
                return this.promise = this.promise.catch(function() {}).then(function() {
                    return e()
                }), this.promise
            }, Hn.prototype.finish = function() {
                return this.promise
            };
            var pi = {},
                vi = new Hn,
                yi = 50,
                gi = {
                    _sum: function(e, t) {
                        return Tn(t)
                    },
                    _count: function(e, t) {
                        return t.length
                    },
                    _stats: function(e, t) {
                        function n(e) {
                            for (var t = 0, n = 0, r = e.length; n < r; n++) {
                                var o = e[n];
                                t += o * o
                            }
                            return t
                        }
                        return {
                            sum: Tn(t),
                            min: Math.min.apply(null, t),
                            max: Math.max.apply(null, t),
                            count: t.length,
                            sumsqr: n(t)
                        }
                    }
                },
                mi = "mrviews",
                _i = Qn(mi, Yn, Zn, er),
                bi = {
                    query: tr,
                    viewCleanup: nr
                },
                wi = 1,
                ki = "pouchdb",
                Ei = 5,
                xi = 0;
            fr.prototype.writeCheckpoint = function(e, t) {
                var n = this;
                return this.updateTarget(e, t).then(function() {
                    return n.updateSource(e, t)
                })
            }, fr.prototype.updateTarget = function(e, t) {
                return cr(this.target, this.id, e, t, this.returnValue)
            }, fr.prototype.updateSource = function(e, t) {
                var n = this;
                return this.readOnlySource ? Dr.resolve(!0) : cr(this.src, this.id, e, t, this.returnValue).catch(function(e) {
                    if (pr(e)) return n.readOnlySource = !0, !0;
                    throw e
                })
            };
            var Si = {
                undefined: function(e, t) {
                    return 0 === Dn(e.last_seq, t.last_seq) ? t.last_seq : 0
                },
                1: function(e, t) {
                    return lr(t, e).last_seq
                }
            };
            fr.prototype.getCheckpoint = function() {
                var e = this;
                return e.target.get(e.id).then(function(t) {
                    return e.readOnlySource ? Dr.resolve(t.last_seq) : e.src.get(e.id).then(function(e) {
                        if (t.version !== e.version) return xi;
                        var n;
                        return n = t.version ? t.version.toString() : "undefined", n in Si ? Si[n](t, e) : xi
                    }, function(n) {
                        if (404 === n.status && t.last_seq) return e.src.put({
                            _id: e.id,
                            last_seq: xi
                        }).then(function() {
                            return xi
                        }, function(n) {
                            return pr(n) ? (e.readOnlySource = !0, t.last_seq) : xi
                        });
                        throw n
                    })
                }).catch(function(e) {
                    if (404 !== e.status) throw e;
                    return xi
                })
            };
            var Ai = 0;
            qr(_r, jr.EventEmitter), _r.prototype.cancel = function() {
                this.cancelled = !0, this.state = "cancelled", this.emit("cancel")
            }, _r.prototype.ready = function(e, t) {
                function n() {
                    o.cancel()
                }

                function r() {
                    e.removeListener("destroyed", n), t.removeListener("destroyed", n)
                }
                var o = this;
                o._readyCalled || (o._readyCalled = !0, e.once("destroyed", n), t.once("destroyed", n), o.once("complete", r))
            }, qr(Er, jr.EventEmitter), Er.prototype.cancel = function() {
                this.canceled || (this.canceled = !0, this.push.cancel(), this.pull.cancel())
            }, qe.plugin(Ro).plugin(ei).plugin(si).plugin(bi).plugin(xr), e.exports = qe
        }).call(t, function() {
            return this
        }())
    },
    function(e, t, n) {
        (function(r) {
            function o() {
                return !("undefined" == typeof window || !window || "undefined" == typeof window.process || "renderer" !== window.process.type) || "undefined" != typeof document && document && "WebkitAppearance" in document.documentElement.style || "undefined" != typeof window && window && window.console && (console.firebug || console.exception && console.table) || "undefined" != typeof navigator && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
            }

            function i(e) {
                var n = this.useColors;
                if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), n) {
                    var r = "color: " + this.color;
                    e.splice(1, 0, r, "color: inherit");
                    var o = 0,
                        i = 0;
                    e[0].replace(/%[a-zA-Z%]/g, function(e) {
                        "%%" !== e && (o++, "%c" === e && (i = o))
                    }), e.splice(i, 0, r)
                }
            }

            function a() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }

            function s(e) {
                try {
                    null == e ? t.storage.removeItem("debug") : t.storage.debug = e
                } catch (e) {}
            }

            function u() {
                try {
                    return t.storage.debug
                } catch (e) {}
                if ("undefined" != typeof r && "env" in r) return {
                    NODE_ENV: "production"
                }.DEBUG
            }

            function c() {
                try {
                    return window.localStorage
                } catch (e) {}
            }
            t = e.exports = n(95), t.log = a, t.formatArgs = i, t.save = s, t.load = u, t.useColors = o, t.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : c(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message
                }
            }, t.enable(u())
        }).call(t, n(9))
    },
    function(e, t, n) {
        function r(e) {
            var n, r = 0;
            for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
            return t.colors[Math.abs(r) % t.colors.length]
        }

        function o(e) {
            function n() {
                if (n.enabled) {
                    var e = n,
                        r = +new Date,
                        o = r - (c || r);
                    e.diff = o, e.prev = c, e.curr = r, c = r;
                    for (var i = new Array(arguments.length), a = 0; a < i.length; a++) i[a] = arguments[a];
                    i[0] = t.coerce(i[0]), "string" != typeof i[0] && i.unshift("%O");
                    var s = 0;
                    i[0] = i[0].replace(/%([a-zA-Z%])/g, function(n, r) {
                        if ("%%" === n) return n;
                        s++;
                        var o = t.formatters[r];
                        if ("function" == typeof o) {
                            var a = i[s];
                            n = o.call(e, a), i.splice(s, 1), s--
                        }
                        return n
                    }), t.formatArgs.call(e, i);
                    var u = n.log || t.log || console.log.bind(console);
                    u.apply(e, i)
                }
            }
            return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = r(e), "function" == typeof t.init && t.init(n), n
        }

        function i(e) {
            t.save(e);
            for (var n = (e || "").split(/[\s,]+/), r = n.length, o = 0; o < r; o++) n[o] && (e = n[o].replace(/\*/g, ".*?"), "-" === e[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
        }

        function a() {
            t.enable("")
        }

        function s(e) {
            var n, r;
            for (n = 0, r = t.skips.length; n < r; n++)
                if (t.skips[n].test(e)) return !1;
            for (n = 0, r = t.names.length; n < r; n++)
                if (t.names[n].test(e)) return !0;
            return !1
        }

        function u(e) {
            return e instanceof Error ? e.stack || e.message : e
        }
        t = e.exports = o.debug = o.default = o, t.coerce = u, t.disable = a, t.enable = i, t.enabled = s, t.humanize = n(97), t.names = [], t.skips = [], t.formatters = {};
        var c
    },
    45,
    function(e, t) {
        function n(e) {
            if (e = String(e), !(e.length > 1e4)) {
                var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                if (t) {
                    var n = parseFloat(t[1]),
                        r = (t[2] || "ms").toLowerCase();
                    switch (r) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return n * f;
                        case "days":
                        case "day":
                        case "d":
                            return n * c;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return n * u;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return n * s;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return n * a;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return n;
                        default:
                            return
                    }
                }
            }
        }

        function r(e) {
            return e >= c ? Math.round(e / c) + "d" : e >= u ? Math.round(e / u) + "h" : e >= s ? Math.round(e / s) + "m" : e >= a ? Math.round(e / a) + "s" : e + "ms"
        }

        function o(e) {
            return i(e, c, "day") || i(e, u, "hour") || i(e, s, "minute") || i(e, a, "second") || e + " ms"
        }

        function i(e, t, n) {
            if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
        }
        var a = 1e3,
            s = 60 * a,
            u = 60 * s,
            c = 24 * u,
            f = 365.25 * c;
        e.exports = function(e, t) {
            t = t || {};
            var i = typeof e;
            if ("string" === i && e.length > 0) return n(e);
            if ("number" === i && isNaN(e) === !1) return t.long ? o(e) : r(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        }
    },
    function(e, t) {
        (function() {
            var t = {}.hasOwnProperty,
                n = [].slice;
            e.exports = function(e, r) {
                var o, i, a, s;
                i = [], s = [];
                for (o in r) t.call(r, o) && (a = r[o], "this" !== o && (i.push(o), s.push(a)));
                return Function.apply(null, n.call(i).concat([e])).apply(r.this, s)
            }
        }).call(this)
    },
    function(e, t, n) {
        ! function(t) {
            e.exports = t()
        }(function(e) {
            "use strict";

            function t(e, t) {
                var n = e[0],
                    r = e[1],
                    o = e[2],
                    i = e[3];
                n += (r & o | ~r & i) + t[0] - 680876936 | 0, n = (n << 7 | n >>> 25) + r | 0, i += (n & r | ~n & o) + t[1] - 389564586 | 0, i = (i << 12 | i >>> 20) + n | 0, o += (i & n | ~i & r) + t[2] + 606105819 | 0, o = (o << 17 | o >>> 15) + i | 0, r += (o & i | ~o & n) + t[3] - 1044525330 | 0, r = (r << 22 | r >>> 10) + o | 0, n += (r & o | ~r & i) + t[4] - 176418897 | 0, n = (n << 7 | n >>> 25) + r | 0, i += (n & r | ~n & o) + t[5] + 1200080426 | 0, i = (i << 12 | i >>> 20) + n | 0, o += (i & n | ~i & r) + t[6] - 1473231341 | 0, o = (o << 17 | o >>> 15) + i | 0, r += (o & i | ~o & n) + t[7] - 45705983 | 0, r = (r << 22 | r >>> 10) + o | 0, n += (r & o | ~r & i) + t[8] + 1770035416 | 0, n = (n << 7 | n >>> 25) + r | 0, i += (n & r | ~n & o) + t[9] - 1958414417 | 0, i = (i << 12 | i >>> 20) + n | 0, o += (i & n | ~i & r) + t[10] - 42063 | 0, o = (o << 17 | o >>> 15) + i | 0, r += (o & i | ~o & n) + t[11] - 1990404162 | 0, r = (r << 22 | r >>> 10) + o | 0, n += (r & o | ~r & i) + t[12] + 1804603682 | 0, n = (n << 7 | n >>> 25) + r | 0, i += (n & r | ~n & o) + t[13] - 40341101 | 0, i = (i << 12 | i >>> 20) + n | 0, o += (i & n | ~i & r) + t[14] - 1502002290 | 0, o = (o << 17 | o >>> 15) + i | 0, r += (o & i | ~o & n) + t[15] + 1236535329 | 0, r = (r << 22 | r >>> 10) + o | 0, n += (r & i | o & ~i) + t[1] - 165796510 | 0, n = (n << 5 | n >>> 27) + r | 0, i += (n & o | r & ~o) + t[6] - 1069501632 | 0, i = (i << 9 | i >>> 23) + n | 0, o += (i & r | n & ~r) + t[11] + 643717713 | 0, o = (o << 14 | o >>> 18) + i | 0, r += (o & n | i & ~n) + t[0] - 373897302 | 0, r = (r << 20 | r >>> 12) + o | 0, n += (r & i | o & ~i) + t[5] - 701558691 | 0, n = (n << 5 | n >>> 27) + r | 0, i += (n & o | r & ~o) + t[10] + 38016083 | 0, i = (i << 9 | i >>> 23) + n | 0, o += (i & r | n & ~r) + t[15] - 660478335 | 0, o = (o << 14 | o >>> 18) + i | 0, r += (o & n | i & ~n) + t[4] - 405537848 | 0, r = (r << 20 | r >>> 12) + o | 0, n += (r & i | o & ~i) + t[9] + 568446438 | 0, n = (n << 5 | n >>> 27) + r | 0, i += (n & o | r & ~o) + t[14] - 1019803690 | 0, i = (i << 9 | i >>> 23) + n | 0, o += (i & r | n & ~r) + t[3] - 187363961 | 0, o = (o << 14 | o >>> 18) + i | 0, r += (o & n | i & ~n) + t[8] + 1163531501 | 0, r = (r << 20 | r >>> 12) + o | 0, n += (r & i | o & ~i) + t[13] - 1444681467 | 0, n = (n << 5 | n >>> 27) + r | 0, i += (n & o | r & ~o) + t[2] - 51403784 | 0, i = (i << 9 | i >>> 23) + n | 0, o += (i & r | n & ~r) + t[7] + 1735328473 | 0, o = (o << 14 | o >>> 18) + i | 0, r += (o & n | i & ~n) + t[12] - 1926607734 | 0, r = (r << 20 | r >>> 12) + o | 0, n += (r ^ o ^ i) + t[5] - 378558 | 0, n = (n << 4 | n >>> 28) + r | 0, i += (n ^ r ^ o) + t[8] - 2022574463 | 0, i = (i << 11 | i >>> 21) + n | 0, o += (i ^ n ^ r) + t[11] + 1839030562 | 0, o = (o << 16 | o >>> 16) + i | 0, r += (o ^ i ^ n) + t[14] - 35309556 | 0, r = (r << 23 | r >>> 9) + o | 0, n += (r ^ o ^ i) + t[1] - 1530992060 | 0, n = (n << 4 | n >>> 28) + r | 0, i += (n ^ r ^ o) + t[4] + 1272893353 | 0, i = (i << 11 | i >>> 21) + n | 0, o += (i ^ n ^ r) + t[7] - 155497632 | 0, o = (o << 16 | o >>> 16) + i | 0, r += (o ^ i ^ n) + t[10] - 1094730640 | 0, r = (r << 23 | r >>> 9) + o | 0, n += (r ^ o ^ i) + t[13] + 681279174 | 0, n = (n << 4 | n >>> 28) + r | 0, i += (n ^ r ^ o) + t[0] - 358537222 | 0, i = (i << 11 | i >>> 21) + n | 0, o += (i ^ n ^ r) + t[3] - 722521979 | 0, o = (o << 16 | o >>> 16) + i | 0, r += (o ^ i ^ n) + t[6] + 76029189 | 0, r = (r << 23 | r >>> 9) + o | 0, n += (r ^ o ^ i) + t[9] - 640364487 | 0, n = (n << 4 | n >>> 28) + r | 0, i += (n ^ r ^ o) + t[12] - 421815835 | 0, i = (i << 11 | i >>> 21) + n | 0, o += (i ^ n ^ r) + t[15] + 530742520 | 0, o = (o << 16 | o >>> 16) + i | 0, r += (o ^ i ^ n) + t[2] - 995338651 | 0, r = (r << 23 | r >>> 9) + o | 0, n += (o ^ (r | ~i)) + t[0] - 198630844 | 0, n = (n << 6 | n >>> 26) + r | 0, i += (r ^ (n | ~o)) + t[7] + 1126891415 | 0, i = (i << 10 | i >>> 22) + n | 0, o += (n ^ (i | ~r)) + t[14] - 1416354905 | 0, o = (o << 15 | o >>> 17) + i | 0, r += (i ^ (o | ~n)) + t[5] - 57434055 | 0, r = (r << 21 | r >>> 11) + o | 0, n += (o ^ (r | ~i)) + t[12] + 1700485571 | 0, n = (n << 6 | n >>> 26) + r | 0, i += (r ^ (n | ~o)) + t[3] - 1894986606 | 0, i = (i << 10 | i >>> 22) + n | 0, o += (n ^ (i | ~r)) + t[10] - 1051523 | 0, o = (o << 15 | o >>> 17) + i | 0, r += (i ^ (o | ~n)) + t[1] - 2054922799 | 0, r = (r << 21 | r >>> 11) + o | 0, n += (o ^ (r | ~i)) + t[8] + 1873313359 | 0, n = (n << 6 | n >>> 26) + r | 0, i += (r ^ (n | ~o)) + t[15] - 30611744 | 0, i = (i << 10 | i >>> 22) + n | 0, o += (n ^ (i | ~r)) + t[6] - 1560198380 | 0, o = (o << 15 | o >>> 17) + i | 0, r += (i ^ (o | ~n)) + t[13] + 1309151649 | 0, r = (r << 21 | r >>> 11) + o | 0, n += (o ^ (r | ~i)) + t[4] - 145523070 | 0, n = (n << 6 | n >>> 26) + r | 0, i += (r ^ (n | ~o)) + t[11] - 1120210379 | 0, i = (i << 10 | i >>> 22) + n | 0, o += (n ^ (i | ~r)) + t[2] + 718787259 | 0, o = (o << 15 | o >>> 17) + i | 0, r += (i ^ (o | ~n)) + t[9] - 343485551 | 0, r = (r << 21 | r >>> 11) + o | 0, e[0] = n + e[0] | 0, e[1] = r + e[1] | 0, e[2] = o + e[2] | 0, e[3] = i + e[3] | 0
            }

            function n(e) {
                var t, n = [];
                for (t = 0; t < 64; t += 4) n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
                return n
            }

            function r(e) {
                var t, n = [];
                for (t = 0; t < 64; t += 4) n[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
                return n
            }

            function o(e) {
                var r, o, i, a, s, u, c = e.length,
                    f = [1732584193, -271733879, -1732584194, 271733878];
                for (r = 64; r <= c; r += 64) t(f, n(e.substring(r - 64, r)));
                for (e = e.substring(r - 64), o = e.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], r = 0; r < o; r += 1) i[r >> 2] |= e.charCodeAt(r) << (r % 4 << 3);
                if (i[r >> 2] |= 128 << (r % 4 << 3), r > 55)
                    for (t(f, i), r = 0; r < 16; r += 1) i[r] = 0;
                return a = 8 * c, a = a.toString(16).match(/(.*?)(.{0,8})$/), s = parseInt(a[2], 16), u = parseInt(a[1], 16) || 0, i[14] = s, i[15] = u, t(f, i), f
            }

            function i(e) {
                var n, o, i, a, s, u, c = e.length,
                    f = [1732584193, -271733879, -1732584194, 271733878];
                for (n = 64; n <= c; n += 64) t(f, r(e.subarray(n - 64, n)));
                for (e = n - 64 < c ? e.subarray(n - 64) : new Uint8Array(0), o = e.length, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], n = 0; n < o; n += 1) i[n >> 2] |= e[n] << (n % 4 << 3);
                if (i[n >> 2] |= 128 << (n % 4 << 3), n > 55)
                    for (t(f, i), n = 0; n < 16; n += 1) i[n] = 0;
                return a = 8 * c, a = a.toString(16).match(/(.*?)(.{0,8})$/), s = parseInt(a[2], 16), u = parseInt(a[1], 16) || 0, i[14] = s, i[15] = u, t(f, i), f
            }

            function a(e) {
                var t, n = "";
                for (t = 0; t < 4; t += 1) n += v[e >> 8 * t + 4 & 15] + v[e >> 8 * t & 15];
                return n
            }

            function s(e) {
                var t;
                for (t = 0; t < e.length; t += 1) e[t] = a(e[t]);
                return e.join("")
            }

            function u(e) {
                return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))), e
            }

            function c(e, t) {
                var n, r = e.length,
                    o = new ArrayBuffer(r),
                    i = new Uint8Array(o);
                for (n = 0; n < r; n += 1) i[n] = e.charCodeAt(n);
                return t ? i : o
            }

            function f(e) {
                return String.fromCharCode.apply(null, new Uint8Array(e))
            }

            function l(e, t, n) {
                var r = new Uint8Array(e.byteLength + t.byteLength);
                return r.set(new Uint8Array(e)), r.set(new Uint8Array(t), e.byteLength), n ? r : r.buffer
            }

            function d(e) {
                var t, n = [],
                    r = e.length;
                for (t = 0; t < r - 1; t += 2) n.push(parseInt(e.substr(t, 2), 16));
                return String.fromCharCode.apply(String, n)
            }

            function h() {
                this.reset()
            }
            var p = function(e, t) {
                    return e + t & 4294967295
                },
                v = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
            return "5d41402abc4b2a76b9719d911017c592" !== s(o("hello")) && (p = function(e, t) {
                var n = (65535 & e) + (65535 & t),
                    r = (e >> 16) + (t >> 16) + (n >> 16);
                return r << 16 | 65535 & n
            }), "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || ! function() {
                function t(e, t) {
                    return e = 0 | e || 0, e < 0 ? Math.max(e + t, 0) : Math.min(e, t)
                }
                ArrayBuffer.prototype.slice = function(n, r) {
                    var o, i, a, s, u = this.byteLength,
                        c = t(n, u),
                        f = u;
                    return r !== e && (f = t(r, u)), c > f ? new ArrayBuffer(0) : (o = f - c, i = new ArrayBuffer(o), a = new Uint8Array(i), s = new Uint8Array(this, c, o), a.set(s), i)
                }
            }(), h.prototype.append = function(e) {
                return this.appendBinary(u(e)), this
            }, h.prototype.appendBinary = function(e) {
                this._buff += e, this._length += e.length;
                var r, o = this._buff.length;
                for (r = 64; r <= o; r += 64) t(this._hash, n(this._buff.substring(r - 64, r)));
                return this._buff = this._buff.substring(r - 64), this
            }, h.prototype.end = function(e) {
                var t, n, r = this._buff,
                    o = r.length,
                    i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (t = 0; t < o; t += 1) i[t >> 2] |= r.charCodeAt(t) << (t % 4 << 3);
                return this._finish(i, o), n = s(this._hash), e && (n = d(n)), this.reset(), n
            }, h.prototype.reset = function() {
                return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
            }, h.prototype.getState = function() {
                return {
                    buff: this._buff,
                    length: this._length,
                    hash: this._hash
                }
            }, h.prototype.setState = function(e) {
                return this._buff = e.buff, this._length = e.length, this._hash = e.hash, this
            }, h.prototype.destroy = function() {
                delete this._hash, delete this._buff, delete this._length
            }, h.prototype._finish = function(e, n) {
                var r, o, i, a = n;
                if (e[a >> 2] |= 128 << (a % 4 << 3), a > 55)
                    for (t(this._hash, e), a = 0; a < 16; a += 1) e[a] = 0;
                r = 8 * this._length, r = r.toString(16).match(/(.*?)(.{0,8})$/), o = parseInt(r[2], 16), i = parseInt(r[1], 16) || 0, e[14] = o, e[15] = i, t(this._hash, e)
            }, h.hash = function(e, t) {
                return h.hashBinary(u(e), t)
            }, h.hashBinary = function(e, t) {
                var n = o(e),
                    r = s(n);
                return t ? d(r) : r
            }, h.ArrayBuffer = function() {
                this.reset()
            }, h.ArrayBuffer.prototype.append = function(e) {
                var n, o = l(this._buff.buffer, e, !0),
                    i = o.length;
                for (this._length += e.byteLength, n = 64; n <= i; n += 64) t(this._hash, r(o.subarray(n - 64, n)));
                return this._buff = n - 64 < i ? new Uint8Array(o.buffer.slice(n - 64)) : new Uint8Array(0), this
            }, h.ArrayBuffer.prototype.end = function(e) {
                var t, n, r = this._buff,
                    o = r.length,
                    i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (t = 0; t < o; t += 1) i[t >> 2] |= r[t] << (t % 4 << 3);
                return this._finish(i, o), n = s(this._hash), e && (n = d(n)), this.reset(), n
            }, h.ArrayBuffer.prototype.reset = function() {
                return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
            }, h.ArrayBuffer.prototype.getState = function() {
                var e = h.prototype.getState.call(this);
                return e.buff = f(e.buff), e
            }, h.ArrayBuffer.prototype.setState = function(e) {
                return e.buff = c(e.buff, !0), h.prototype.setState.call(this, e)
            }, h.ArrayBuffer.prototype.destroy = h.prototype.destroy, h.ArrayBuffer.prototype._finish = h.prototype._finish, h.ArrayBuffer.hash = function(e, t) {
                var n = i(new Uint8Array(e)),
                    r = s(n);
                return t ? d(r) : r
            }, h
        })
    },
    function(e, t) {
        "use strict";

        function n(e, t, n) {
            var r = n[n.length - 1];
            e === r.element && (n.pop(), r = n[n.length - 1]);
            var o = r.element,
                i = r.index;
            if (Array.isArray(o)) o.push(e);
            else if (i === t.length - 2) {
                var a = t.pop();
                o[a] = e
            } else t.push(e)
        }
        t.stringify = function(e) {
            var t = [];
            t.push({
                obj: e
            });
            for (var n, r, o, i, a, s, u, c, f, l, d, h = ""; n = t.pop();)
                if (r = n.obj, o = n.prefix || "", i = n.val || "", h += o, i) h += i;
                else if ("object" != typeof r) h += "undefined" == typeof r ? null : JSON.stringify(r);
            else if (null === r) h += "null";
            else if (Array.isArray(r)) {
                for (t.push({
                        val: "]"
                    }), a = r.length - 1; a >= 0; a--) s = 0 === a ? "" : ",", t.push({
                    obj: r[a],
                    prefix: s
                });
                t.push({
                    val: "["
                })
            } else {
                u = [];
                for (c in r) r.hasOwnProperty(c) && u.push(c);
                for (t.push({
                        val: "}"
                    }), a = u.length - 1; a >= 0; a--) f = u[a], l = r[f], d = a > 0 ? "," : "", d += JSON.stringify(f) + ":", t.push({
                    obj: l,
                    prefix: d
                });
                t.push({
                    val: "{"
                })
            }
            return h
        }, t.parse = function(e) {
            for (var t, r, o, i, a, s, u, c, f, l = [], d = [], h = 0;;)
                if (t = e[h++], "}" !== t && "]" !== t && "undefined" != typeof t) switch (t) {
                    case " ":
                    case "\t":
                    case "\n":
                    case ":":
                    case ",":
                        break;
                    case "n":
                        h += 3, n(null, l, d);
                        break;
                    case "t":
                        h += 3, n(!0, l, d);
                        break;
                    case "f":
                        h += 4, n(!1, l, d);
                        break;
                    case "0":
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                    case "-":
                        for (r = "", h--;;) {
                            if (o = e[h++], !/[\d\.\-e\+]/.test(o)) {
                                h--;
                                break
                            }
                            r += o
                        }
                        n(parseFloat(r), l, d);
                        break;
                    case '"':
                        for (i = "", a = void 0, s = 0; u = e[h++], '"' !== u || "\\" === a && s % 2 === 1;) i += u, a = u, "\\" === a ? s++ : s = 0;
                        n(JSON.parse('"' + i + '"'), l, d);
                        break;
                    case "[":
                        c = {
                            element: [],
                            index: l.length
                        }, l.push(c.element), d.push(c);
                        break;
                    case "{":
                        f = {
                            element: {},
                            index: l.length
                        }, l.push(f.element), d.push(f);
                        break;
                    default:
                        throw new Error("unexpectedly reached end of input: " + t)
                } else {
                    if (1 === l.length) return l.pop();
                    n(l.pop(), l, d)
                }
        }
    },
    function(e, t) {},
    101,
    function(e, t, n, r) {
        "use strict";

        function o(e) {
            return e && "object" == typeof e && "default" in e ? e.default : e
        }
        var i = o(n(r)),
            a = "function" == typeof Promise ? Promise : i;
        e.exports = a
    }
]));
