
! function(e) {
	
	
	if (location.host == "localhost"){

		function t(i) {
    	
	        if (n[i]) return n[i].exports;
	        var o = n[i] = {
	            exports: {},
	            id: i,
	            loaded: !1
	        };
	        return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
	    }
	    var n = {};
	    return t.m = e, t.c = n, t.p = "", t(0)

	}
    
}([function(e, t, n) {
    "use strict";
    var i = n(34),
        o = new i([n(30), n(33), n(35), n(66), n(67), n(69)]);
    o.start()
}, function(e, t, n) {
    "use strict";

    function i(e, t, n, i) {
        var o = document.createElement(e);
        return a(o, t), void 0 != n && (o.className = n), void 0 != i && i.forEach(function(e) {
            return o.appendChild(e)
        }), o
    }

    function o(e) {
        var t = i("style");
        return t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), t
    }

    function r(e, t) {
        var n = document.createTextNode(e);
        return n.parentNode = t, n
    }

    function s(e, t, n) {
        n && (e = e.parentElement), t instanceof Array || (t = [t]), t = t.map(function(e) {
            return e.toUpperCase()
        });
        do
            for (var i = 0; i < t.length; i++) {
                var o = t[i];
                if (e.tagName == o) return e
            }
        while (e = e.parentElement);
        return !1
    }

    function a(e, t) {
        if (void 0 != t)
            for (var n in t) e.style[n] = String(t[n])
    }

    function l(e, t) {
        if (d.Array(t) || (t = [t]), e.removeAttribute && t.forEach(function(t) {
                e.removeAttribute(t)
            }), e.childNodes.length > 0)
            for (var n in e.childNodes) 1 == e.childNodes[n].nodeType && l(e.childNodes[n], t);
        return e
    }

    function u(e) {
        var t = document.createElement("div");
        return t.innerHTML = e, t
    }

    function c(e) {
        e && e.parentNode && e.parentNode.removeChild(e)
    }

    function h(e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? 2 : arguments[1];
        if (!(t <= 0))
            for (var n = 0; n < e.children.length; n++) {
                var i = e.children[n];
                if ("SCRIPT" != i.nodeName && "STYLE" != i.nodeName) {
                    var o = p(i);
                    "sticky" == o.position ? "" != o.zIndex && "auto" != o.zIndex || (i.style.zIndex = 1) : h(i, t - 1)
                }
            }
    }

    function f(e) {
        return e.webkitTransform = e.transform, e
    }
    var d = n(6),
        p = n(17).getComputedStyle;
    e.exports = {
        domMaker: i,
        styleMaker: o,
        textMaker: r,
        hasParent: s,
        parse: u,
        setStyle: a,
        removeAttributes: l,
        updateStickyElements: h,
        removeElement: c,
        fixWebKit: f
    }
}, function(e, t) {
    "use strict";
    var n = {},
        i = ["Alert", "UserSelection", "UserMouseDown", "UserMouseMove", "UserMouseUp", "UserSelecting", "TooltipClick", "WindowResize", "SaveNote", "DeleteNote", "FetchNoteList", "ReceiveNoteList", "PageChanged", "ContextMenuClick", "CommentOnHighlight", "DisablePage", "EnablePage", "CheckBlackList", "AddBlackList", "RemoveBlackList", "GetRecentNotes", "ReceiveRecentNotes", "LOG_INFO", "LOG_WARNING", "LOG_ERROR"];
    i.forEach(function(e) {
        return n[e] = e
    }), e.exports = n
}, function(e, t, n) {
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
            default: "red",
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
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        r = n(2),
        s = function() {
            function e() {
                i(this, e)
            }
            return o(e, [{
                key: "INFO",
                value: function(e) {
                    window.BeenoteEventHub.emit(r.LOG_INFO, e)
                }
            }, {
                key: "ERROR",
                value: function(e) {
                    window.BeenoteEventHub.emit(r.LOG_ERROR, e)
                }
            }, {
                key: "WARNING",
                value: function(e) {
                    window.BeenoteEventHub.emit(r.LOG_WARNING, e)
                }
            }]), e
        }();
    e.exports = new s
}, function(e, t) {
    "use strict";

    function n(e, t) {

        t = t || function() {}, chrome.runtime.sendMessage(e, function(e) {
            return t(e ? e : e), !0
        })
    }

    function i(e, t, n) {
        chrome.tabs.sendMessage(e, t, n)
    }

    function o(e) {
        chrome.runtime.onMessage.addListener(function(t, n, i) {
            return e(t, n, i)
        })
    }

    function r(e, t) {
        var n = arguments.length <= 2 || void 0 === arguments[2] ? function() {} : arguments[2];
        i(e.id, t, n)
    }

    function s(e) {
        return o(e)
    }

    function a(e, t) {
        return n(e, t)
    }

    function l(e, t) {
        return {
            type: e,
            content: t
        }
    }
    e.exports = {
        sendMessage: a,
        sendMessageToTab: r,
        onMessage: s,
        createMessage: l
    }
}, function(e, t, n) {
    "use strict";

    function i(e) {
        return e.nodeType == Node.TEXT_NODE
    }

    function o(e) {
        return "IMG" == e.nodeName
    }

    function r(e) {
        return e.nodeType == Node.ELEMENT_NODE
    }

    function s(e) {
        return e.constructor == window.Range
    }

    function a(e) {
        return e.constructor == window.String
    }

    function l(e) {
        return e.constructor == window.Object
    }

    function u(e) {
        return e.constructor == p
    }

    function c(e) {
        return e instanceof Array
    }

    function h(e) {
        return e instanceof Function
    }

    function f(e) {
        if (!e) return !1;
        if (e.indexOf(".") == -1) return !1;
        var t = new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
        return t.test(e)
    }

    function d(e) {
        var t = /^[ -~]+$/;
        return !t.test(e)
    }
    var p = n(12).Selection;
    e.exports = {
        TextNode: i,
        ImageNode: o,
        HtmlNode: r,
        Range: s,
        String: a,
        Object: l,
        UserDefinedSelection: u,
        Array: c,
        Function: h,
        URL: f,
        Unicode: d
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e, t) {
        var n = {};
        for (var i in e) n[i] = e[i];
        for (var i in t) n[i] = t[i];
        return n
    }
}, function(e, t, n) {
    "use strict";

    function i() {
        return g({}, y)
    }

    function o(e, t) {
        var n = null;
        e.addEventListener("mouseup", function() {
            setTimeout(function() {
                var e = window.getSelection();
                e.isCollapsed || 0 == e.rangeCount || (n = e, t(e))
            })
        }, !1)
    }

    function r(e, t) {
        e.addEventListener("resize", t, !1)
    }

    function s(e, t) {
        var n = new MutationObserver(t),
            i = {
                childList: !0,
                subtree: !0,
                attributes: !0,
                attributeFilter: ["class", "src", "style", "hidden", "width", "height"]
            };
        n.observe(e, i)
    }

    function a(e, t) {
        e.addEventListener("mousedown", t, !1)
    }

    function l(e, t) {
        e.addEventListener("mousemove", t, !1)
    }

    function u(e, t) {
        e.addEventListener("mouseup", t, !1)
    }

    function c(e, t, n) {
        var i = !1;
        a(e, function(e) {
            i = !0, b = !1, t()
        }), l(e, function(e) {
            if (i) {
                var t = window.getSelection();
                t && !t.isCollapsed && (b = !0), n(t)
            }
        }), e.addEventListener("keydown", function(e) {
            65 == e.keyCode && (e.ctrlKey && !m || e.metaKey && m) && setTimeout(function() {
                n(window.getSelection())
            }, 10)
        }, !1), u(e, function(e) {
            i = !1, b = !1
        })
    }

    function h() {
        return b
    }

    function f(e, t) {
        if (!e) return i();
        t = t || 0;
        var n, o, r = e.getBoundingBox(!0),
            s = e.getClientRects(),
            a = i();
        return a.top < r.top + t ? (r = v(s[0]), n = a.top - t - 10, o = a.left) : (r = v(s[s.length - 1]), n = a.top + t - 4, o = a.left), {
            top: n,
            left: o
        }
    }

    function d(e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? "right" : arguments[1],
            n = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2],
            o = arguments.length <= 3 || void 0 === arguments[3] ? 0 : arguments[3];
        if (!e) return i();
        switch (t) {
            case "right":
                var r = e.getBoundingBox(!0),
                    s = (r.bottom + r.top) / 2 + n,
                    a = r.left + r.width + o;
                return {
                    top: s,
                    left: a
                };
            default:
                return i()
        }
    }

    function p(e, t) {
        return e.x > t.left && e.x < t.left + t.width && e.y > t.top && e.y < t.top + t.height
    }
    var g = n(7),
        v = (n(4), n(10).boxAbsolute),
        m = (n(3).debug, n(28).isMac),
        y = {
            top: 0,
            left: 0
        };
    window.document.addEventListener("mousemove", function(e) {
        y.top = e.pageY, y.left = e.pageX
    }, !1);
    var b = !1;
    e.exports = {
        setupOnSelection: o,
        setupOnMouseDown: a,
        setupOnMouseMove: l,
        setupOnMouseUp: u,
        setupOnSelecting: c,
        setupObserver: s,
        setupOnResize: r,
        mousePosition: i,
        mousePositionWithSelection: f,
        positionWithSelection: d,
        mouseInRectViewPort: p,
        userIsSelecting: h
    }
}, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function i() {
        throw new Error("clearTimeout has not been defined")
    }

    function o(e) {
        if (c === setTimeout) return setTimeout(e, 0);
        if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
        try {
            return c(e, 0)
        } catch (t) {
            try {
                return c.call(null, e, 0)
            } catch (t) {
                return c.call(this, e, 0)
            }
        }
    }

    function r(e) {
        if (h === clearTimeout) return clearTimeout(e);
        if ((h === i || !h) && clearTimeout) return h = clearTimeout, clearTimeout(e);
        try {
            return h(e)
        } catch (t) {
            try {
                return h.call(null, e)
            } catch (t) {
                return h.call(this, e)
            }
        }
    }

    function s() {
        g && d && (g = !1, d.length ? p = d.concat(p) : v = -1, p.length && a())
    }

    function a() {
        if (!g) {
            var e = o(s);
            g = !0;
            for (var t = p.length; t;) {
                for (d = p, p = []; ++v < t;) d && d[v].run();
                v = -1, t = p.length
            }
            d = null, g = !1, r(e)
        }
    }

    function l(e, t) {
        this.fun = e, this.array = t
    }

    function u() {}
    var c, h, f = e.exports = {};
    ! function() {
        try {
            c = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            c = n
        }
        try {
            h = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
            h = i
        }
    }();
    var d, p = [],
        g = !1,
        v = -1;
    f.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        p.push(new l(e, t)), 1 !== p.length || g || o(a)
    }, l.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, f.cwd = function() {
        return "/"
    }, f.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, f.umask = function() {
        return 0
    }
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        throw new Error("not implemented")
    }

    function o(e, t) {
        return e.top <= t.top && e.left <= t.left && e.bottom >= t.bottom && e.right >= t.right
    }

    function r(e) {
        var t = h({}, e);
        return t.top = t.top + window.pageYOffset, t.left = t.left + window.pageXOffset, t.bottom = t.bottom + window.pageYOffset, t.right = t.right + window.pageXOffset, t
    }

    function s(e, t) {
        return t.left < e.x && t.left + t.width > e.x && t.top < e.y && t.top + t.height > e.y
    }

    function a(e) {
        for (var t = [], n = 0; n < e.length; n++) 0 != e[n].width && 0 != e[n].height && t.push(e[n]);
        for (var n = 0; n < t.length; n++) {
            for (var i = !1, r = 0; r < t.length; r++) n != r && o(t[n], t[r]) && (i = !0);
            i && (t.splice(n, 1), n -= 1)
        }
        return t
    }

    function l(e, t) {
        for (var n = [], i = 0; i < e.length; i++) {
            var o = e[i];
            if (!(o.right <= t.left || o.left >= t.right || o.bottom <= t.top || o.top >= t.bottom)) {
                var r = Math.max(o.left, t.left),
                    s = Math.min(o.right, t.right),
                    a = Math.max(o.top, t.top),
                    l = Math.min(o.bottom, t.bottom);
                o.left = r, o.right = s, o.top = a, o.bottom = l, o.width = s - r, o.height = l - a, n.push(o)
            }
        }
        return n
    }

    function u(e) {
        return {
            bottom: e.bottom,
            height: e.height,
            left: e.left,
            right: e.right,
            top: e.top,
            width: e.width
        }
    }

    function c(e, t) {
        for (var n = e.textContent, i = f(e.style.font), o = [], r = 0; r < t.length; r++) o.push(u(t[r]));
        t = o;
        var s = t.reduce(function(e, t) {
                return e + t.width
            }, 0),
            a = i(n),
            l = n.split("").reverse(),
            c = l.map(function(e) {
                return i(e)
            });
        return Math.min.apply(null, c), t.forEach(function(e) {
            for (e.textPercentage = e.width / s, e.internalWidth = e.textPercentage * a, e.useInternalWidth = 0, e.charList = []; e.useInternalWidth + .8 * c[c.length - 1] <= e.internalWidth;) {
                var t = l.pop(),
                    n = c.pop();
                e.useInternalWidth += n, e.charList.push(t)
            }
            e.textContent = e.charList.join("")
        }), t
    }
    var h = n(7),
        f = n(27).textRuler;
    n(4), e.exports = {
        resolveBoxDuplication: a,
        boxIntersect: i,
        boxContains: o,
        boxAbsolute: r,
        isPointInBox: s,
        cropBoxWithFrame: l,
        rectCopyToObject: u,
        distributeTextAmongBoxes: c
    }
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        r = n(44).IconSet.Sparkk,
        s = n(1),
        a = s.domMaker,
        l = s.styleMaker,
        u = (s.setStyle, n(4), n(2)),
        c = n(8).mousePositionWithSelection,
        h = (n(10).boxAbsolute, n(3).googleQueryURL),
        f = n(3).highlightColor,
        d = n(15).type,
        p = function() {
            function e(t, n, o) {
                i(this, e), this.name = t, this.hint = n, this.dom = a("div"), this.dom.className = "bee-item", this.dom.setAttribute("title", n), this.callbackList = o || [], "html" != t && r.addIconTo(this.dom, t)
            }
            return o(e, [{
                key: "onClick",
                value: function(e) {
                    this.callbackList.push(e)
                }
            }]), e
        }(),
        g = function() {
            function e() {
                i(this, e), this.tooltipContainerDom = a("div"), this.isOpen = !1, this._hide(), this.tooltipContainerDom.className = "bee-tooltip-container", this.tooltipDom = a("div"), this.tooltipDom.className = "bee-tooltip", this.tooltipContainerDom.appendChild(this.tooltipDom), this.items = [], this.currentSelectionObject = null, this.currentPosition = null, this.currentWidth = 0, this.currentHeight = 0
            }
            return o(e, [{
                key: "attachTo",
                value: function(e) {
                    this.parentNode = e, e.appendChild(this.tooltipContainerDom)
                }
            }, {
                key: "_show",
                value: function() {
                    this.isOpen = !0, this.tooltipContainerDom.style.display = "block", this.currentWidth = this.tooltipContainerDom.offsetWidth, this.currentHeight = this.tooltipContainerDom.offsetHeight;
                    var e = parseFloat(this.tooltipContainerDom.style.left);
                    return this.currentHeight > 40 && (e > .5 * window.innerWidth ? e -= 1.5 * this.currentHeight : e += 1.5 * this.currentHeight, this.tooltipContainerDom.style.left = e + "px", this.currentPosition.left = e, this.currentWidth = this.tooltipContainerDom.offsetWidth, this.currentHeight = this.tooltipContainerDom.offsetHeight), this
                }
            }, {
                key: "display",
                value: function() {
                    return this._show()
                }
            }, {
                key: "_hide",
                value: function() {
                    return this.isOpen = !1, this.tooltipContainerDom.style.display = "none", this
                }
            }, {
                key: "nodisplay",
                value: function() {
                    return this._hide()
                }
            }, {
                key: "hideIfLossFocus",
                value: function(e) {
                    if (this.isOpen) {
                        var t = this,
                            n = this.currentPosition,
                            i = !(e.pageY >= n.top && e.pageY <= n.top + this.currentHeight && e.pageX >= n.left && e.pageX <= n.left + this.currentWidth);
                        i && t._hide()
                    }
                }
            }, {
                key: "isClickInside",
                value: function(e) {
                    if (!this.isOpen) return !1;
                    var t = this.currentPosition,
                        n = !(e.pageY >= t.top && e.pageY <= t.top + this.currentHeight && e.pageX >= t.left && e.pageX <= t.left + this.currentWidth);
                    return !n
                }
            }, {
                key: "addItem",
                value: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] || arguments[1],
                        n = arguments.length <= 2 || void 0 === arguments[2] || arguments[2],
                        i = this;
                    return this.items.push(e), this.tooltipDom.appendChild(e.dom), e.dom.addEventListener("mousedown", function(o) {
                        var r = window.BeenoteEventHub;
                        return t && r.emit(u.TooltipClick, [e.name, i.currentSelectionObject, o], !0), e.callbackList.forEach(function(e) {
                            return e(i.currentSelectionObject)
                        }), n && setTimeout(function() {
                            i.isOpen && i._hide()
                        }), !0
                    }, !1), this
                }
            }, {
                key: "removeItem",
                value: function(e) {
                    for (var t, n = -1, i = 0; i < this.items.length; i++)
                        if (e == this.items[i].name) {
                            n = i, t = this.items[i];
                            break
                        }
                    return n != -1 && this.items.splice(n, 1), t.dom.onclick(function() {}), this.tooltipDom.removeChild(t.dom), t
                }
            }, {
                key: "removeAllItems",
                value: function() {
                    this.items = [], this.tooltipDom.innerHTML = ""
                }
            }, {
                key: "addTo",
                value: function(t) {
                    var n = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
                    n && (r.addToLayer(t), t.add(l(e.style))), this.parentNode = t.root, t.add(this.tooltipContainerDom)
                }
            }, {
                key: "_setPosition",
                value: function(e) {
                    return this.currentPosition = e, this.tooltipContainerDom.style.left = e.left + "px", this.tooltipContainerDom.style.top = e.top + "px", this
                }
            }, {
                key: "setPosition",
                value: function(e) {
                    return this._setPosition(e)
                }
            }, {
                key: "show",
                value: function(t) {
                    return this.currentSelectionObject = t, this._setPosition(c(t, e.height)), this._show()
                }
            }]), e
        }();
    g.height = 22, g.width = 35, g.style = ".bee-tooltip-container{position:absolute;z-index:2147483638}.bee-tooltip-container *{height:" + g.height + "px}.bee-tooltip-container .bee-tooltip{box-shadow:inset 0 0 3px RGBA(37,37,37,.8),0 0 22px -3px rgba(0,0,0,.42);font-size:0;display:flex;color:#F8F8F8;border-radius:5px;width:auto;background:RGBA(37,37,37,.8)}.bee-tooltip-container .bee-tooltip .bee-item{font-size:17px;font-weight:400;display:inline-flex;align-items:center;justify-content:center;width:" + g.width + "px;text-align:center;cursor:pointer}.bee-tooltip-container .bee-tooltip .bee-item:hover{background:RGBA(56,115,240,1)}.bee-tooltip-container .bee-tooltip .bee-item:hover:first-child{border-top-left-radius:5px;border-bottom-left-radius:5px}.bee-tooltip-container .bee-tooltip .bee-item:hover:last-child{border-top-right-radius:5px;border-bottom-right-radius:5px}";
    var v = {
            Highlight: d.Highlight,
            StickerBelongToHighlight: d.StickerBelongToHighlight,
            Google: "Google"
        },
        m = new g,
        y = new p(v.Highlight, "Highlight selected text."),
        b = new p(v.StickerBelongToHighlight, "Create sticker note here."),
        k = new p(v.Google, "Google Search Selection", [function(e) {
            var t = e.toString();
            open(h + encodeURIComponent(t))
        }]);
    m.addItem(y).addItem(b).addItem(k);
    var w = new g,
        C = new g,
        x = a("div", {
            width: "12px",
            height: "12px",
            display: "inline-block",
            borderRadius: "50%"
        }),
        L = "",
        T = {};
    for (var S in f.palette) {
        L += "." + S + "{background-color:" + f.palette[S] + "}";
        var E = new p("html", "change color to " + S),
            N = x.cloneNode(!0);
        N.classList.add(S), N.colorName = S, E.dom.colorName = S, E.dom.appendChild(N), E.dom.style.width = "28px", T[S] = E
    }
    var R = l(L);
    e.exports = {
        Tooltip: g,
        TooltipItem: p,
        highlightTooltip: w,
        highlightColorItemDict: T,
        highlightColorTooltip: C,
        highlightColorStyleSheet: R,
        default: m,
        type: v
    }
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t, n) {
        function i(e) {
            return o(e) ? n ? n(e) : NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
        }

        function o(t) {
            return e.intersectsNode(t)
        }
        if (!e) throw new TypeError("a Range instance must be given");
        var r = e,
            s = (r.startContainer, r.endContainer, r.commonAncestorContainer),
            a = s.ownerDocument;
        return r = null, a.createNodeIterator(s, t, i)
    }
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        s = n(3).constant.XPathCondition,
        a = n(10).boxAbsolute,
        l = n(10).rectCopyToObject,
        u = n(6),
        c = (n(1).textMaker, n(17).getComputedAttributes),
        h = function() {
            function e(t, n, o, r, s, a) {
                if (i(this, e), u.Object(t)) {
                    var l = t;
                    for (var c in l) this[c] = l[c]
                } else this.elementName = t || "", this.className = n || "", this.idName = o || "", this.order = r || -1, this.contentMatcher = this.contentMatcher || "", this.otherMeta = a || {}
            }
            return r(e, [{
                key: "toJSON",
                value: function() {
                    return {
                        elementName: this.elementName,
                        className: this.className,
                        idName: this.idName,
                        order: this.order,
                        contentMatcher: this.contentMatcher,
                        otherMeta: this.otherMeta
                    }
                }
            }]), e
        }(),
        f = function() {
            function e(t) {
                if (i(this, e), t.constructor == window.Array) this.xPathElementList = t.map(function(e) {
                    return new h(e)
                });
                else {
                    if (this.xPathElementList = [], !u.HtmlNode(t)) {
                        for (var n = 1, o = t; o = o.previousSibling;) o.nodeType == t.nodeType && n++;
                        var r = new h(t.constructor.name.toLowerCase() + "()", "", "", n);
                        this.xPathElementList.unshift(r), t = t.parentNode
                    }
                    for (; t && 1 == t.nodeType; t = t.parentNode) {
                        var s = "",
                            a = "",
                            l = "",
                            n = -1,
                            c = "",
                            f = {};
                        s = t.localName.toLowerCase(), t.hasAttribute("id") && (l = t.getAttribute("id")), t.hasAttribute("class") && (a = t.getAttribute("class")), n = 1;
                        for (var o = t.previousSibling; o; o = o.previousSibling) o.localName == t.localName && n++;
                        var r = new h(s, a, l, n, c, f);
                        this.xPathElementList.unshift(r)
                    }
                }
            }
            return r(e, [{
                key: "toString",
                value: function(e) {
                    var t = this.xPathElementList.map(function(e) {
                            return e.elementName + "[" + e.order + "]"
                        }),
                        n = "/" + t.join("/");
                    return t.length ? n : null
                }
            }, {
                key: "evalToElement",
                value: function(e) {
                    var t = u.String(e) ? e : this.toString(e),
                        n = new XPathEvaluator,
                        i = n.evaluate(t, document.documentElement, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                    return i.singleNodeValue
                }
            }, {
                key: "toJSON",
                value: function() {
                    return this.xPathElementList.map(function(e) {
                        return e.toJSON()
                    })
                }
            }]), e
        }(),
        d = function() {
            function e(t) {
                if (i(this, e), u.Range(t)) {
                    var n = this._nativeRange = t;
                    this.startOffset = n.startOffset, this.endOffset = n.endOffset, this.startContainer = new f(n.startContainer), this.endContainer = new f(n.endContainer)
                } else {
                    var n = t;
                    this.startOffset = n.startOffset, this.endOffset = n.endOffset, this.startContainer = new f(n.startContainer), this.endContainer = new f(n.endContainer), this._nativeRange = document.createRange();
                    var o = this.startContainer.evalToElement(s.TAG_NAME_ONLY),
                        r = this.endContainer.evalToElement(s.TAG_NAME_ONLY);
                    o && r && (this._nativeRange.setStart(o, this.startOffset), this._nativeRange.setEnd(r, this.endOffset))
                }
            }
            return r(e, [{
                key: "reEvaluateRange",
                value: function() {
                    this._nativeRange = document.createRange();
                    var e = this.startContainer.evalToElement(s.TAG_NAME_ONLY),
                        t = this.endContainer.evalToElement(s.TAG_NAME_ONLY);
                    e && t && (this._nativeRange.setStart(e, this.startOffset), this._nativeRange.setEnd(t, this.endOffset))
                }
            }, {
                key: "getRangeList",
                value: function() {
                    function e(e) {
                        return u.TextNode(e) ? NodeFilter.FILTER_ACCEPT : u.ImageNode(e) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
                    }
                    if (this._nativeRange.collapsed) return [];
                    for (var t = o(this._nativeRange, NodeFilter.SHOW_ALL, e), n = [], i = void 0; i = t.nextNode();)
                        if (i.parentElement.offsetParent) {
                            var r = new Range;
                            if (u.ImageNode(i) ? r.selectNode(i) : r.selectNodeContents(i), !(this._nativeRange.compareBoundaryPoints(Range.START_TO_END, r) < 0)) {
                                i == this._nativeRange.startContainer && r.setStart(i, this._nativeRange.startOffset), i == this._nativeRange.endContainer && r.setEnd(i, this._nativeRange.endOffset);
                                var s = this.getClientRectsWithoutLineBreak(r);
                                s.length > 0 && n.push(r)
                            }
                        }
                    return n
                }
            }, {
                key: "getClientRectsWithoutLineBreak",
                value: function(e) {
                    for (var t = e.getClientRects(), n = [], i = 0; i < t.length; i++) n.push(t[i]);
                    var o = e.cloneRange();
                    o.setEnd(o.startContainer, o.startOffset);
                    var r = o.getClientRects().length;
                    return r > 1 && n.shift(), n
                }
            }, {
                key: "distributeText",
                value: function(e, t, n, i, o) {
                    var r = this.getClientRectsWithoutLineBreak(t);
                    if (1 == r.length) return void o.push(e.textContent.substr(n, i - n));
                    var s = n,
                        a = i,
                        l = new Range;
                    l.selectNodeContents(e), l.setStart(e, n);
                    for (var u = 0, c = parseInt((n + i) / 2); u < 50;) {
                        l.setEnd(e, c);
                        var h = this.getClientRectsWithoutLineBreak(l);
                        l.setEnd(e, c + 1);
                        var f = this.getClientRectsWithoutLineBreak(l);
                        if (h.length > 1) a = c, c = parseInt((s + a) / 2);
                        else {
                            if (f.length > 1) return o.push(e.textContent.substr(n, c - n + 1)), t.setStart(e, c + 1), void this.distributeText(e, t, c + 1, i, o);
                            s = c, c = parseInt((s + a) / 2)
                        }
                        u += 1
                    }
                }
            }, {
                key: "getBoundingBoxes",
                value: function(t) {
                    var n = this;
                    t.forEach(function(t) {
                        var i = t.startContainer;
                        if (u.TextNode(i)) {
                            var o = [];
                            n.distributeText(i, t.cloneRange(), t.startOffset, t.endOffset, o), t.textContent = o;
                            var r = t.startContainer.parentElement,
                                s = c(r, e.TextStyleList);
                            s.textIndent = "initial", t.style = s
                        }
                    });
                    for (var i = [], o = 0; o < t.length; o++) {
                        var r = t[o],
                            s = this.getClientRectsWithoutLineBreak(r);
                        if (r.textContent)
                            for (var a = 0; a < s.length; a++) {
                                var h = l(s[a]);
                                h.textContent = r.textContent[a], h.style = r.style, h.range = r, i.push(h)
                            } else {
                                console.assert(1 == s.length);
                                var f = l(s[0]);
                                f.textContent = null, f.style = {
                                    width: f.width + "px"
                                }, f.range = r, i.push(f)
                            }
                    }
                    return i
                }
            }, {
                key: "getClientRects",
                value: function() {
                    return this.reEvaluateRange(), this._nativeRange.getClientRects()
                }
            }, {
                key: "getBoundingBox",
                value: function(e) {
                    var t = this._nativeRange.getBoundingClientRect();
                    return e ? a(t) : t
                }
            }, {
                key: "toJSON",
                value: function() {
                    return {
                        startOffset: this.startOffset,
                        endOffset: this.endOffset,
                        startContainer: this.startContainer.toJSON(),
                        endContainer: this.endContainer.toJSON()
                    }
                }
            }, {
                key: "toString",
                value: function() {
                    var e = this._nativeRange.toString();
                    return e.split("\n").filter(function(e) {
                        return !e || e.trim()
                    }).join("\n")
                }
            }], [{
                key: "clearSelection",
                value: function() {
                    window.getSelection() ? window.getSelection().removeAllRanges() : document.selection && document.selection.empty()
                }
            }, {
                key: "serializeRange",
                value: function(e) {
                    return {
                        startContainer: e.startContainer,
                        endContainer: e.endContainer,
                        startOffset: e.startOffset,
                        endOffset: e.endOffset
                    }
                }
            }, {
                key: "deserializeRange",
                value: function(e) {
                    var t = document.createRange();
                    return t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), t
                }
            }]), e
        }();
    d.TextStyleList = ["fontSize", "color", "direction", "textTransform", "textAlign", "textDecoration", "textOrientation", "textShadow", "textRendering", "letterSpacing", "wordSpacing", "writingMode", "verticalAlign", "transform", "zIndex", "whiteSpace"], e.exports = {
        Selection: d,
        XPath: f
    }
}, , function(e, t) {
    "use strict";
    var n = {},
        i = ["SaveNote", "RemoveNote", "FetchNoteList", "SearchWebPage", "CheckBlackList", "AddBlackList", "RemoveBlackList", "EnablePage", "GetRecentNotes"];
    i.forEach(function(e) {
        return n[e] = e
    }), e.exports = n
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        r = (n(7), n(4), n(39)),
        s = (n(12).Selection, n(6)),
        a = (n(2), n(1).isCodeScroller, {
            Highlight: "Highlight",
            Sticker: "Sticker",
            StickerBelongToHighlight: "StickerBelongToHighlight"
        }),
        l = function() {
            function e(t) {
                i(this, e), s.Object(t) && void 0 != t.noteId ? (this.noteId = t.noteId, this.style = t.style, this.noteType = t.noteType, this.createdTime = new Date(t.createdTime), this.updatedTime = this.createdTime, this.isRestored = !0, this.isDeleted = !1) : (this.noteId = r(), this.style = {}, this.createdTime = Date.now(), this.updatedTime = this.createdTime, this.isRestored = !1, this.isDeleted = !1), this.callbacks = {
                    remove: [],
                    hover: [],
                    update: []
                }, this.elementList = []
            }
            return o(e, [{
                key: "addEventListener",
                value: function(e, t) {
                    return this.callbacks[e].push(t), this
                }
            }, {
                key: "emit",
                value: function(e) {
                    var t = this;
                    this.callbacks[e].forEach(function(e) {
                        return e(t)
                    })
                }
            }, {
                key: "render",
                value: function() {}
            }, {
                key: "getFocus",
                value: function() {}
            }, {
                key: "loseFocus",
                value: function() {}
            }, {
                key: "toTEXT",
                value: function() {}
            }, {
                key: "toJSON",
                value: function() {}
            }, {
                key: "isPointInRange",
                value: function() {}
            }]), e
        }();
    e.exports = {
        BaseNote: l,
        type: a
    }
}, , function(e, t) {
    "use strict";

    function n(e) {
        if (r.has(e)) return r.get(e);
        var t = window.getComputedStyle(e, null);
        return r.set(e, t), t
    }

    function i(e, t) {
        var i = n(e),
            o = {};
        return t.forEach(function(e) {
            o[e] = i[e]
        }), o
    }

    function o(e, t) {
        var i = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2],
            r = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
        if (!e) return defaultStyle[t];
        var a = n(e),
            l = a[t];
        if (i && l == defaultStyle[t] && (l = "", r)) {
            var u;
            s.has(e) && (u = s.get(e)), u = u || {}, l = u[t], l || (l = o(e.parentElement, t, i, r), u[t] = l, s.set(e, u))
        }
        return l
    }
    var r = new WeakMap,
        s = new WeakMap;
    e.exports = {
        getComputedAttributes: i,
        getComputedStyle: n,
        getStyle: o
    }
}, function(e, t) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = function() {
            function e() {
                n(this, e), this.events = {}
            }
            return i(e, [{
                key: "on",
                value: function(e, t) {
                    var n, i = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2];
                    return n = i ? [] : this.events[e] || [], n.push(t), this.events[e] = n, this
                }
            }, {
                key: "emit",
                value: function(e, t) {
                    var n = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2],
                        i = this.events[e] || [];
                    return n ? (t instanceof Array || (t = [t]), i.forEach(function(e) {
                        return e.apply(null, t)
                    })) : i.forEach(function(e) {
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
            function i() {}

            function o(e, t) {
                return function() {
                    e.apply(t, arguments)
                }
            }

            function r(e) {
                if ("object" !== t(this)) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e) throw new TypeError("not a function");
                this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], h(e, this)
            }

            function s(e, t) {
                for (; 3 === e._state;) e = e._value;
                return 0 === e._state ? void e._deferreds.push(t) : (e._handled = !0, void r._immediateFn(function() {
                    var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                    if (null === n) return void(1 === e._state ? a : l)(t.promise, e._value);
                    var i;
                    try {
                        i = n(e._value)
                    } catch (e) {
                        return void l(t.promise, e)
                    }
                    a(t.promise, i)
                }))
            }

            function a(e, n) {
                try {
                    if (n === e) throw new TypeError("A promise cannot be resolved with itself.");
                    if (n && ("object" === ("undefined" == typeof n ? "undefined" : t(n)) || "function" == typeof n)) {
                        var i = n.then;
                        if (n instanceof r) return e._state = 3, e._value = n, void u(e);
                        if ("function" == typeof i) return void h(o(i, n), e)
                    }
                    e._state = 1, e._value = n, u(e)
                } catch (t) {
                    l(e, t)
                }
            }

            function l(e, t) {
                e._state = 2, e._value = t, u(e)
            }

            function u(e) {
                2 === e._state && 0 === e._deferreds.length && r._immediateFn(function() {
                    e._handled || r._unhandledRejectionFn(e._value)
                });
                for (var t = 0, n = e._deferreds.length; t < n; t++) s(e, e._deferreds[t]);
                e._deferreds = null
            }

            function c(e, t, n) {
                this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
            }

            function h(e, t) {
                var n = !1;
                try {
                    e(function(e) {
                        n || (n = !0, a(t, e))
                    }, function(e) {
                        n || (n = !0, l(t, e))
                    })
                } catch (e) {
                    if (n) return;
                    n = !0, l(t, e)
                }
            }
            var f = setTimeout;
            r.prototype.catch = function(e) {
                return this.then(null, e)
            }, r.prototype.then = function(e, t) {
                var n = new this.constructor(i);
                return s(this, new c(e, t, n)), n
            }, r.all = function(e) {
                var n = Array.prototype.slice.call(e);
                return new r(function(e, i) {
                    function o(s, a) {
                        try {
                            if (a && ("object" === ("undefined" == typeof a ? "undefined" : t(a)) || "function" == typeof a)) {
                                var l = a.then;
                                if ("function" == typeof l) return void l.call(a, function(e) {
                                    o(s, e)
                                }, i)
                            }
                            n[s] = a, 0 === --r && e(n)
                        } catch (e) {
                            i(e)
                        }
                    }
                    if (0 === n.length) return e([]);
                    for (var r = n.length, s = 0; s < n.length; s++) o(s, n[s])
                })
            }, r.resolve = function(e) {
                return e && "object" === ("undefined" == typeof e ? "undefined" : t(e)) && e.constructor === r ? e : new r(function(t) {
                    t(e)
                })
            }, r.reject = function(e) {
                return new r(function(t, n) {
                    n(e)
                })
            }, r.race = function(e) {
                return new r(function(t, n) {
                    for (var i = 0, o = e.length; i < o; i++) e[i].then(t, n)
                })
            }, r._immediateFn = "function" == typeof e && function(t) {
                e(t)
            } || function(e) {
                f(e, 0)
            }, r._unhandledRejectionFn = function(e) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
            }, r._setImmediateFn = function(e) {
                r._immediateFn = e
            }, r._setUnhandledRejectionFn = function(e) {
                r._unhandledRejectionFn = e
            }, window.Promise || (window.Promise = r)
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
                i.push([this, []])
            }
            var i = [];
            return e.defineProperties(n.prototype, {
                get: {
                    writable: !0,
                    enumerable: !1,
                    configurable: !0,
                    value: function(t) {
                        if (e(this) !== this) throw new TypeError("Method WeakMap.prototype.get called on incompatible receiver " + this);
                        for (var n, o, r, s = 0, a = i.length; s < a;)
                            if (n = i[s++], n[0] === this) {
                                if (e(t) !== t) return;
                                for (o = n[1], s = 0, a = o.length; s < a;)
                                    if (r = o[s++], r[0] === t) return r[1];
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
                        for (var o, r, s, a = 0, l = i.length; a < l;)
                            if (o = i[a++], o[0] === this) {
                                if (e(t) !== t) throw new TypeError("Invalid value used as weak map key");
                                for (r = o[1], a = 0, l = r.length; a < l;)
                                    if (s = r[a++], s[0] === t) return s[1] = n, this;
                                return r.push([t, n]), this
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
                        for (var n, o, r = 0, s = i.length; r < s;)
                            if (n = i[r++], n[0] === this) {
                                if (e(t) !== t) return !1;
                                for (o = n[1], r = 0, s = o.length; r < s;)
                                    if (o[r++][0] === t) return !0;
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
                        for (var n, o, r = 0, s = i.length; r < s;)
                            if (n = i[r++], n[0] === this) {
                                if (e(t) !== t) return !1;
                                for (o = n[1], r = 0, s = o.length; r < s;)
                                    if (o[r++][0] === t) return n[1] = o.slice(0, r - 1).concat(o.slice(r)), !0;
                                return !1
                            }
                        throw new TypeError("Method WeakMap.prototype.delete called on incompatible receiver " + this)
                    }
                }
            }), n
        }(Object, Array.isArray);
        window.WeakMap = n
    }
}, function(e, t) {
    "use strict";

    function n(e) {
        var t = e.origin + e.pathname;
        return "/index.html" == t.substring(t.length - 11) ? t = t.substring(0, t.length - 10) : "/index.htm" == t.substring(t.length - 10) && (t = t.substring(0, t.length - 9)), t
    }
    e.exports = n
}, function(e, t, n) {
    (function(e, t) {
        ! function(e, n) {
            "use strict";

            function i(e) {
                "function" != typeof e && (e = new Function("" + e));
                for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                var i = {
                    callback: e,
                    args: t
                };
                return g[p] = i, d(p), p++
            }

            function o(e) {
                delete g[e]
            }

            function r(e) {
                var t = e.callback,
                    i = e.args;
                switch (i.length) {
                    case 0:
                        t();
                        break;
                    case 1:
                        t(i[0]);
                        break;
                    case 2:
                        t(i[0], i[1]);
                        break;
                    case 3:
                        t(i[0], i[1], i[2]);
                        break;
                    default:
                        t.apply(n, i)
                }
            }

            function s(e) {
                if (v) setTimeout(s, 0, e);
                else {
                    var t = g[e];
                    if (t) {
                        v = !0;
                        try {
                            r(t)
                        } finally {
                            o(e), v = !1
                        }
                    }
                }
            }

            function a() {
                d = function(e) {
                    t.nextTick(function() {
                        s(e)
                    })
                }
            }

            function l() {
                if (e.postMessage && !e.importScripts) {
                    var t = !0,
                        n = e.onmessage;
                    return e.onmessage = function() {
                        t = !1
                    }, e.postMessage("", "*"), e.onmessage = n, t
                }
            }

            function u() {
                var t = "setImmediate$" + Math.random() + "$",
                    n = function(n) {
                        n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && s(+n.data.slice(t.length))
                    };
                e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), d = function(n) {
                    e.postMessage(t + n, "*")
                }
            }

            function c() {
                var e = new MessageChannel;
                e.port1.onmessage = function(e) {
                    var t = e.data;
                    s(t)
                }, d = function(t) {
                    e.port2.postMessage(t)
                }
            }

            function h() {
                var e = m.documentElement;
                d = function(t) {
                    var n = m.createElement("script");
                    n.onreadystatechange = function() {
                        s(t), n.onreadystatechange = null, e.removeChild(n), n = null
                    }, e.appendChild(n)
                }
            }

            function f() {
                d = function(e) {
                    setTimeout(s, 0, e)
                }
            }
            if (!e.setImmediate) {
                var d, p = 1,
                    g = {},
                    v = !1,
                    m = e.document,
                    y = Object.getPrototypeOf && Object.getPrototypeOf(e);
                y = y && y.setTimeout ? y : e, "[object process]" === {}.toString.call(e.process) ? a() : l() ? u() : e.MessageChannel ? c() : m && "onreadystatechange" in m.createElement("script") ? h() : f(), y.setImmediate = i, y.clearImmediate = o
            }
        }("undefined" == typeof self ? "undefined" == typeof e ? this : e : self)
    }).call(t, function() {
        return this
    }(), n(9))
}, function(e, t, n) {
    function i(e, t) {
        this._id = e, this._clearFn = t
    }
    var o = Function.prototype.apply;
    t.setTimeout = function() {
        return new i(o.call(setTimeout, window, arguments), clearTimeout)
    }, t.setInterval = function() {
        return new i(o.call(setInterval, window, arguments), clearInterval)
    }, t.clearTimeout = t.clearInterval = function(e) {
        e && e.close()
    }, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() {
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
}, function(e, t) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = function() {
            function e(t) {
                n(this, e), this.hash = t.hash, this.host = t.host, this.hostname = t.hostname, this.href = t.href, this.origin = t.origin, this.pathname = t.pathname, this.port = t.port, this.protocol = t.protocol, this.search = t.search
            }
            return i(e, [{
                key: "isSameUrl",
                value: function(e) {
                    return this.href == e.href
                }
            }, {
                key: "toJSON",
                value: function() {
                    return {
                        hash: this.hash,
                        host: this.host,
                        hostname: this.hostname,
                        href: this.href,
                        origin: this.origin,
                        pathname: this.pathname,
                        port: this.port,
                        protocol: this.protocol,
                        search: this.search
                    }
                }
            }]), e
        }();
    e.exports = o
}, , , function(e, t) {
    "use strict";

    function n(e) {
        var t = n.canvas || (n.canvas = document.createElement("canvas")),
            i = t.getContext("2d");
        return i.font = e,
            function(e) {
                return i.measureText(e).width
            }
    }
    e.exports = {
        textRuler: n
    }
}, function(e, t) {
    "use strict";
    var n = navigator.userAgent.indexOf("Mac OS X") != -1;
    e.exports = {
        isMac: n
    }
}, , function(e, t, n) {
    "use strict";
    var i = n(2),
        o = n(3);
    e.exports = function() {
        var e = window.BeenoteEventHub;
        o.debug && (e.on(i.LOG_INFO, function(e) {
            console.info(e)
        }), e.on(i.LOG_WARNING, function(e) {
            console.warn(e)
        }), e.on(i.LOG_ERROR, function(e) {
            console.error(e)
        })), o.logEvents.forEach(function(t) {
            e.on(t, function(e) {
                console.log("Events: " + t), console.dir(e)
            })
        })
    }
}, , function(e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        r = n(24),
        s = n(21),
        a = function() {
            function e(t) {
                i(this, e), t ? (this.urlInfo = new r(t.urlInfo), this.title = t.title, this.description = t.description, this.keywords = t.keywords, this.favicon = t.favicon) : (this.urlInfo = new r(window.location), this.title = document.title, this.description = this.getDescription(), this.keywords = this.getKeywords(), this.favicon = "")
            }
            return o(e, [{
                key: "getDescription",
                value: function() {
                    var e = document.getElementsByName("description");
                    return e.length > 0 ? e[0].content : ""
                }
            }, {
                key: "getKeywords",
                value: function() {
                    var e = document.getElementsByName("keywords");
                    return e.length > 0 ? e[0].content : ""
                }
            }, {
                key: "getWebpageIndex",
                value: function() {
                    return s(this.urlInfo)
                }
            }, {
                key: "toJSON",
                value: function() {
                    return {
                        urlInfo: this.urlInfo.toJSON(),
                        pageIndex: s(this.urlInfo),
                        title: this.title,
                        description: this.description,
                        keywords: this.keywords,
                        favicon: this.favicon
                    }
                }
            }]), e
        }();
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var i = n(2),
        o = n(5).sendMessage,
        r = n(5).onMessage,
        s = n(5).createMessage,
        a = n(14),
        l = n(21),
        u = n(32);
    e.exports = function() {
        var e = window.BeenoteEventHub,
            t = !1;
        e.on(i.SaveNote, function(e, n) {
            e.urlId = l(n);
            var i = s(a.SaveNote, e);
            if (i.id = e.noteId, !t) {
                var r = new u;
                i.pageInfo = r.toJSON(), i.updatePage = !0, t = !0
            }
            o(i, function(e) {
                e || console.error("Error occurred when saveNote")
            })
        }), e.on(i.DeleteNote, function(e) {
            var t = s(a.RemoveNote, e);
            t.id = e.noteId, o(t, function(e) {
                e || console.error("Error occurred when deleteNote")
            })
        }), e.on(i.FetchNoteList, function(n) {
            t = !1;
            var r = s(a.FetchNoteList, l(n));
            o(r, function(t) {
                t ? e.emit(i.ReceiveNoteList, t) : console.error("Error occurred when fetchNoteList")
            })
        }), e.on(i.CheckBlackList, function(t) {
            var n = s(a.CheckBlackList, t);
            o(n, function(t) {
                t ? e.emit(i.DisablePage, {}) : e.emit(i.EnablePage, {})
            })
        }), e.on(i.AddBlackList, function(e) {
            var t = s(a.AddBlackList, e);
            o(t, function() {})
        }), e.on(i.RemoveBlackList, function(e) {
            var t = s(a.RemoveBlackList, e);
            o(t, function() {})
        }), r(function(t, n, o) {
            switch (t.type) {
                case a.EnablePage:
                    t.content ? e.emit(i.EnablePage, {}) : e.emit(i.DisablePage, {})
            }
            return !0
        });
        var n = {
            type: a.CheckBlackList,
            content: window.location.href
        };
        o(n, function(t) {
            t && e.emit(i.DisablePage, {})
        })
    }
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        r = n(18);
    n(20), n(19);
    var s = function() {
        function e(t) {
            i(this, e);
            var n = this;
            n.eventEmitter = new r, window.BeenoteEventHub = n.eventEmitter, n.programList = [], t.forEach(function(e) {
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
    e.exports = s
}, function(e, t) {
    "use strict";
    e.exports = function() {}
}, , , , function(e, t) {
    "use strict";
    var n = function(e) {
        for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%^&*()_+-={}[]<>,.?", i = 0; i < e; i++) t += n.charAt(Math.floor(Math.random() * n.length));
        return t
    };
    e.exports = function() {
        return n(8) + Date.now()
    }
}, , function(e, t, n) {
    "use strict";

    function i(e) {
        chrome.runtime.onMessage.addListener(function(t, n, i) {
            return e(t, n, i)
        })
    }

    function o(e) {
        return i(e)
    }

    function r(e, t, n) {
        e.type == a.ContextMenuClick && (l.INFO("context menu click"), window.BeenoteEventHub.emit(a.ContextMenuClick, {
            menuId: e.menuId,
            position: c
        }))
    }

    function s(e) {
        if (3 == e.which || e.ctrlKey && 1 == e.which) {
            var t = u();
            l.INFO("Write click at <" + t.top + "," + t.left + ">"), c.top = t.top, c.left = t.left
        }
    }
    var a = n(2),
        l = n(4),
        u = n(8).mousePosition,
        c = (n(28).isMac, {
            top: 0,
            left: 0
        });
    e.exports = {
        setupMenuListener: function() {
            return o(r)
        },
        saveRightClickPosition: s
    }
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        e.setRefSticker(t), t.setRefHighlight(e)
    }

    function r(e) {
        return !(!e.open || e.isRestored || (e.isRestored = !0, setTimeout(function() {
            return e.open()
        }, 100), 0))
    }

    function s(e) {
        return e.createShadowRoot ? e.createShadowRoot() : e.webkitCreateShadowRoot()
    }
    var a = function() {
            function e(e, t) {
                var n = [],
                    i = !0,
                    o = !1,
                    r = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
                } catch (e) {
                    o = !0, r = e
                } finally {
                    try {
                        !i && a.return && a.return()
                    } finally {
                        if (o) throw r
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        u = n(15).type,
        c = n(3).constant,
        h = n(1).removeElement,
        f = n(1).domMaker,
        d = n(43),
        p = n(68),
        g = n(6),
        v = n(2),
        m = n(1).setStyle,
        y = n(1).styleMaker,
        b = {};
    b[u.Highlight] = p, b[u.Sticker] = b[u.StickerBelongToHighlight] = d;
    var k = [u.Sticker, u.StickerBelongToHighlight, u.Highlight],
        w = y("@media print{*{display:none!important}}[data-text]::after{content:attr(data-text)}"),
        C = function() {
            function e(t) {
                i(this, e);
                var n = this;
                this.id = t, this.root = document.createElement("div"), this.root.id = t, document.body.appendChild(this.root), this.layer = s(this.root), this.layer.appendChild(w.cloneNode(!0)), this.isEnabled = !0, this.noteMap = {}, k.forEach(function(e) {
                    n.noteMap[e] = {}
                }), this.tooltip = null, this.highlightTooltip = null, this.highlightColorTooltip = null, this.svgIconStyleSheet = null, this.stickerButtonStyleSheet = null, this.highlightColorStyleSheet = null, this.layerDefaultStyle = w, this.focusedNote = null, this.shadowDomMap = new WeakMap, this.highlightOverlappingSituation = {}, this.unrenderedNoteMap = {}
            }
            return l(e, [{
                key: "add",
                value: function(e) {
                    var t = this;
                    return e instanceof Array ? e.forEach(function(e) {
                        return t._add(e)
                    }) : this._add(e), this
                }
            }, {
                key: "_add",
                value: function(e) {
                    this.layer.appendChild(e)
                }
            }, {
                key: "addNoteObject",
                value: function(e) {
                    this.noteMap[e.noteType][e.noteId] = e
                }
            }, {
                key: "setFocusedNote",
                value: function(e) {
                    var t = this;
                    if ((!e || !this.focusedNote || this.focusedNote.noteId != e.noteId) && (this.focusedNote && this.focusedNote.loseFocus(this.highlightTooltip, this.highlightColorTooltip), this.focusedNote = e, this.focusedNote)) {
                        var n = this.focusedNote;
                        setTimeout(function() {
                            n.getFocus(t.highlightTooltip, t.highlightColorTooltip)
                        })
                    }
                }
            }, {
                key: "handleNoteClick",
                value: function(e) {
                    if (!this.highlightTooltip.isClickInside(e) && !this.tooltip.isClickInside(e)) {
                        for (var t = 0; t < k.length; t++) {
                            var n = k[t];
                            for (var i in this.noteMap[n]) {
                                var o = this.noteMap[n][i],
                                    r = o.isPointInRange(e);
                                if (r == c.PointInRange.Note) return void this.setFocusedNote(o)
                            }
                        }
                        this.setFocusedNote(null)
                    }
                }
            }, {
                key: "enable",
                value: function() {
                    this.isEnabled || (this.isEnabled = !0, this.renderAllNotes())
                }
            }, {
                key: "disable",
                value: function() {
                    this.isEnabled && (this.isEnabled = !1, this.removeAllNotesFromDom())
                }
            }, {
                key: "showTooltip",
                value: function(e) {
                    this.isEnabled && this.tooltip.show(e)
                }
            }, {
                key: "hideTooltipIfLossFocus",
                value: function(e) {
                    this.tooltip.hideIfLossFocus(e)
                }
            }, {
                key: "createAndRenderNote",
                value: function(e, t) {
                    if (this.isEnabled) {
                        var n = [];
                        if (e == u.StickerBelongToHighlight) {
                            var i;
                            t.constructor && t.constructor == p ? i = t : (i = this.createNote(u.Highlight, t), n.push(i));
                            var r = this.createNote(e, t);
                            o(i, r), n.push(r)
                        } else n.push(this.createNote(e, t));
                        return this.renderNotes(n), n
                    }
                }
            }, {
                key: "computeClosestshadowDom",
                value: function(e) {
                    var t, n, i, o = e.commonAncestorContainer;
                    if ((g.TextNode(o) || g.ImageNode(o)) && (o = o.parentElement), t = this.shadowDomMap.get(o)) i = t.children[0].shadowDomRef;
                    else {
                        var r = {
                            position: "relative",
                            height: 0,
                            display: "inline",
                            padding: 0,
                            margin: 0,
                            width: 0,
                            border: "none",
                            outline: "none",
                            background: "none",
                            whiteSpace: "nowrap",
                            userSelect: "none"
                        };
                        t = f("span", r), r.position = "absolute", n = f("span", r), t.appendChild(n), i = s(n), o.appendChild(t), n.shadowDomRef = i, i.freshCreated = !0, this.shadowDomMap.set(o, t)
                    }
                    return [i, t.children[0], o]
                }
            }, {
                key: "computeHighlightBoxRelativePosition",
                value: function(e, t) {
                    var n = t.getBoundingClientRect(),
                        i = {
                            top: e.top - n.top,
                            left: e.left - n.left,
                            width: e.width,
                            height: e.height
                        },
                        o = {
                            height: i.height,
                            width: i.width,
                            top: e.top + window.pageYOffset,
                            left: e.left + window.pageXOffset
                        };
                    return [i, o]
                }
            }, {
                key: "renderNote",
                value: function(e) {
                    var t = this,
                        n = this;
                    switch (e.noteType) {
                        case u.StickerBelongToHighlight:
                            if (!this.checkNoteRenderResult(e, {})) break;
                            o(this.noteMap[u.Highlight][e.refHighlightId], e);
                            var i = e.refHighlight.elementList[0],
                                s = this.computeClosestshadowDom(i.range),
                                l = a(s, 3),
                                c = l[0],
                                h = l[1],
                                f = l[2],
                                d = this.computeHighlightBoxRelativePosition(i.getBoundingClientRect(), h, f),
                                p = a(d, 2),
                                g = p[0],
                                v = p[1],
                                y = 14;
                            e.render({
                                buttonRelative: {
                                    top: g.top - y,
                                    left: g.left - 15
                                },
                                buttonAbsolute: {
                                    top: v.top - y,
                                    left: v.left - 15
                                }
                            }), c.appendChild(e.elementList[0]), this.layer.appendChild(e.elementList[1]), e.editor.setHost(this.layer);
                            break;
                        case u.Highlight:
                            if (!this.checkNoteRenderResult(e, e.getClientRects())) break;
                            var b = e.getRangeList(),
                                k = new WeakMap,
                                w = (b.forEach(function(e, t) {
                                    var i = n.computeClosestshadowDom(e),
                                        o = a(i, 3),
                                        r = o[0],
                                        s = o[1],
                                        l = o[2];
                                    k.set(e, [r, s, l])
                                }), e.render(b));
                            w.forEach(function(t, i) {
                                var o = k.get(t.range)[1],
                                    r = k.get(t.range)[2],
                                    s = n.computeHighlightBoxRelativePosition(t.boundingBox, o, r),
                                    l = a(s, 2),
                                    u = l[0],
                                    c = l[1];
                                e.updateRenderBox(t, i, c), m(t, {
                                    height: u.height + "px",
                                    top: u.top + "px",
                                    left: u.left + "px"
                                }), "justify" == t.style.textAlign && (t.style.width = u.width + "px", t.whiteSpaceJustify = !0)
                            }), w.forEach(function(e, n) {
                                var i = k.get(e.range)[0];
                                i.freshCreated && (i.appendChild(t.highlightColorStyleSheet.cloneNode(!0)), i.appendChild(t.layerDefaultStyle.cloneNode(!0)), i.appendChild(t.svgIconStyleSheet.cloneNode(!0)), i.appendChild(t.stickerButtonStyleSheet.cloneNode(!0)), i.freshCreated = !1), i.appendChild(w[n])
                            });
                            break;
                        case u.Sticker:
                            e.render(), this.add(e.elementList), e.editor.setHost(this.layer)
                    }
                    r(e) && this.setFocusedNote(e)
                }
            }, {
                key: "renderNotes",
                value: function(e) {
                    var t = this;
                    if (0 != e.length)
                        if (1 == e.length) this.removeNoteFromDom(e[0]), this.renderNote(e[0]);
                        else {
                            e.forEach(function(e) {
                                return t.removeNoteFromDom(e)
                            });
                            var n = [u.Highlight, u.StickerBelongToHighlight, u.Sticker].map(function(t) {
                                return e.filter(function(e) {
                                    return e.noteType == t
                                })
                            });
                            n.forEach(function(e) {
                                return e.forEach(function(e) {
                                    return t.renderNote(e)
                                })
                            })
                        }
                }
            }, {
                key: "renderNoteJSONs",
                value: function(e) {
                    var t = this,
                        n = e.map(function(e) {
                            return t.createNote(e.noteType, e)
                        });
                    this.isEnabled && this.renderNotes(n)
                }
            }, {
                key: "createNote",
                value: function(e, t) {
                    var n = this,
                        i = new b[e](t, e);
                    return this.addNoteObject(i), i.addEventListener("update", function(e) {
                        window.BeenoteEventHub.emit(v.SaveNote, [e.toJSON(), window.location], !0)
                    }).addEventListener("remove", function(e) {
                        e.isDeleted = !0, n.removeNoteFromDom(e), delete n.noteMap[e.noteType][e.noteId], window.BeenoteEventHub.emit(v.DeleteNote, e.toJSON())
                    }), i
                }
            }, {
                key: "renderAllNotes",
                value: function() {
                    if (this.isEnabled) {
                        var e = this,
                            t = [];
                        this.iterateOverAllNotes(function(e) {
                            return t.push(e)
                        }), t.forEach(function(t) {
                            return e.removeNoteFromDom(t)
                        }), this.renderNotes(t)
                    }
                }
            }, {
                key: "removeAllNotesFromDom",
                value: function() {
                    var e = this;
                    this.iterateOverAllNotes(function(t) {
                        return e.removeNoteFromDom(t)
                    })
                }
            }, {
                key: "removeNoteFromDom",
                value: function(e) {
                    (e.elementList || []).forEach(function(e) {
                        return h(e)
                    })
                }
            }, {
                key: "iterateOverAllNotes",
                value: function(e) {
                    var t = this,
                        n = arguments.length <= 1 || void 0 === arguments[1] ? k : arguments[1];
                    n.forEach(function(n) {
                        for (var i in t.noteMap[n]) {
                            var o = t.noteMap[n][i];
                            e(o)
                        }
                    })
                }
            }, {
                key: "adjustHighlightColorFromSelection",
                value: function(e) {
                    if (!e || e.isCollapsed) return void this.restoreHighlightColorFromSelection();
                    for (var t in this.noteMap[u.Highlight]) {
                        var n = this.noteMap[u.Highlight][t],
                            i = this.highlightOverlappingSituation[t] || [],
                            o = n.computeOverlappedBoxes(e),
                            r = n.elementList;
                        o.forEach(function(e, t) {
                            var n = Boolean(i[t]),
                                o = r[t];
                            n != e && (o.style.opacity = e ? .3 : o.defaultOpacity, o.style.color = e ? "rgba(0,0,0,0)" : o.defaultTextColor)
                        }), this.highlightOverlappingSituation[t] = o
                    }
                }
            }, {
                key: "restoreHighlightColorFromSelection",
                value: function() {
                    for (var e in this.noteMap[u.Highlight]) {
                        var t = this.noteMap[u.Highlight][e],
                            n = this.highlightOverlappingSituation[e] || [];
                        n.forEach(function(e, n) {
                            if (e) {
                                var i = t.elementList[n];
                                i.style.opacity = i.defaultOpacity, i.style.color = i.defaultTextColor
                            }
                        }), this.highlightOverlappingSituation[e] = []
                    }
                }
            }, {
                key: "cleanupLayer",
                value: function() {
                    var e = this;
                    this.removeAllNotesFromDom(), this.noteMap = {}, k.forEach(function(t) {
                        return e.noteMap[t] = {}
                    }), this.focusedNote = null, this.highlightOverlappingSituation = {}, this.unrenderedNoteMap = {}
                }
            }, {
                key: "checkNoteRenderResult",
                value: function(e, t) {
                    var n = !0;
                    return e.noteType == u.StickerBelongToHighlight ? this.unrenderedNoteMap[e.refHighlightId] ? (this.unrenderedNoteMap[e.noteId] = e, n = !1) : delete this.unrenderedNoteMap[e.noteId] : e.noteType == u.Highlight && (0 == t.length ? (this.unrenderedNoteMap[e.noteId] = e, n = !1) : delete this.unrenderedNoteMap[e.noteId]), n
                }
            }, {
                key: "renderUnrenderedNotes",
                value: function() {
                    var e = this;
                    this.renderNotes(Object.keys(this.unrenderedNoteMap).map(function(t) {
                        return e.unrenderedNoteMap[t]
                    }))
                }
            }]), e
        }();
    e.exports = {
        Layer: C,
        connectHighlightAndSticker: o
    }
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        a = n(1).domMaker,
        l = n(1).styleMaker,
        u = n(1).setStyle,
        c = (n(7), n(4), n(10).boxAbsolute, n(12).Selection),
        h = n(44).IconSet.Sparkk,
        f = (n(11).Tooltip, n(11).TooltipItem, n(6)),
        d = n(70).SimpleEditor,
        p = (n(8).positionWithSelection, n(8).mouseInRectViewPort),
        g = n(53).setupDragging,
        v = n(8).userIsSelecting,
        m = n(15).BaseNote,
        y = n(15).type,
        b = n(3).constant,
        k = n(3).highlightColor,
        w = n(1).fixWebKit,
        C = void 0,
        x = function(e) {
            function t(e) {
                var n = arguments.length <= 1 || void 0 === arguments[1] ? y.Sticker : arguments[1];
                i(this, t);
                var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)),
                    s = r;
                r.refHighlight = null, r.editor = new d, r.button = a("div", C, "bee-sticker-button"), r.editorPanel = a("div", C, "bee-sticker-container", [s.panel = a("div", C, "bee-sticker-panel", [s.drag = a("div", C, "bee-sticker-drag"), a("div", {
                    overflowX: "hidden",
                    overflowY: "hidden",
                    height: "100%"
                }, "bee-note-panel-scroll", [s.editor.dom]), s.panelToolbar = a("div", C, "bee-sticker-panel-toolbar", [s.delete = a("div", C, "bee-sticker-toolbar-item"), s.pin = a("div", C, "bee-sticker-toolbar-item")]), s.resizer = a("div", C, "bee-sticker-resizer")]), s.preview = a("div", C, "bee-sticker-preview")]), s.editor.dom.style.paddingRight = "20px", h.addIconTo(s.delete, "Delete");
                var l = {};
                return l.opacity = t.stickerOpacity, l.transition = "all .3s ease 0s", u(s.button, l), h.addIconTo(s.button, n, {}, {
                    fill: "RGBA(193, 174, 91, 1.00)",
                    stroke: "RGBA(193, 174, 91, 1.00)"
                }), r.editorPanel.id = r.noteId, s.isRestored ? (r.isPin = e.isPin, r.isOpen = !1, r.refHighlightId = e.refHighlightId, e.selection ? r._selection = new c(e.selection) : r._selection = null, r.editorContent = e.editorContent, r.textContent = e.textContent, r.notePosition = e.notePosition, r.buttonPosition = e.buttonPosition, r.size = e.size) : (r.refHighlightId = null, r.isOpen = !1, r._selection = e, r.buttonPosition = {}, r.editorContent = "", r.textContent = "", r.style = {}, r.size = {
                    width: t.initialEditorWidth + "px",
                    height: t.initialEditorHeight + "px"
                }, r.notePosition = {
                    top: "0px",
                    left: t.initialEditorWidthOffset + "px"
                }, f.UserDefinedSelection(e) ? r._selection = e : (r._selection = null, r.buttonPosition = e)), r.noteType || (r.noteType = n), r.noteType == y.Sticker && (s.button.style.zIndex = 2147483647), u(s.panel, r.notePosition), r.enableButtonDragging = !0, g(r.button, function() {
                    if (r.enableButtonDragging) return u(s.button, {
                        transition: "none",
                        cursor: "move"
                    }), {
                        offsetLeft: s.button.offsetLeft,
                        offsetTop: s.button.offsetTop
                    }
                }, function(e, t, n) {
                    if (r.enableButtonDragging) {
                        var i = n.offsetLeft + (t.clientX - e.clientX),
                            o = n.offsetTop + (t.clientY - e.clientY);
                        s.buttonPosition = {
                            left: i,
                            top: o
                        }
                    }
                }, function() {
                    r.enableButtonDragging && (u(s.button, {
                        transition: l.transition,
                        cursor: "pointer"
                    }), s.emit("update"))
                }, function() {
                    return s.open()
                }), r.isHoverOnButton = !1, r.button.addEventListener("mouseenter", function() {
                    if (!v() && (r.isHoverOnButton = !0, r.uiMouseEnter(), s.refHighlight && s.refHighlight.uiMouseEnter(), !s.isOpen)) {
                        var e = s.editor.dom.innerHTML.trim();
                        e.length >= 5 && (s.preview.innerHTML = e, s.openPreview())
                    }
                }), r.button.addEventListener("mouseleave", function() {
                    v() || (r.isHoverOnButton = !1, r.uiMouseLeft(), s.refHighlight && s.refHighlight.uiMouseLeft(), s.closingPreviewTimeout = setTimeout(function() {
                        s.closePreview()
                    }, 100))
                }), r.preview.onmouseover = function() {
                    return clearTimeout(s.closingPreviewTimeout)
                }, r.preview.onmouseout = function() {
                    return s.closePreview()
                }, r.preview.ondblclick = function() {
                    s.closePreview(), s.open()
                }, r.delete.onclick = function() {
                    confirm("Do you really want to delete this sticker?") && (s.emit("remove"), r.refHighlight && (r.refHighlight.refSticker = null, r.refHighlight.refStickerId = null, r.refHighlight.emit("update")))
                }, g(r.resizer, function() {
                    var e = document.defaultView.getComputedStyle(s.panel);
                    return {
                        startWidth: parseInt(e.width, 10),
                        startHeight: parseInt(e.height, 10)
                    }
                }, function(e, n, i) {
                    s.size = {
                        width: Math.max(i.startWidth + n.clientX - e.clientX, t.minWidth) + "px",
                        height: Math.max(i.startHeight + n.clientY - e.clientY, t.minHeight) + "px"
                    }, u(s.panel, s.size)
                }, function() {
                    s.emit("update")
                }), g(r.drag, function() {
                    return s.panel.style.transitionProperty = "none", {
                        offsetLeft: s.panel.offsetLeft,
                        offsetTop: s.panel.offsetTop
                    }
                }, function(e, t, n) {
                    s.notePosition = {
                        top: t.clientY - e.clientY + n.offsetTop + "px",
                        left: t.clientX - e.clientX + n.offsetLeft + "px"
                    }, u(s.panel, s.notePosition)
                }, function() {
                    s.panel.style.transitionProperty = "top,left,-webkit-transform", s.emit("update")
                }), r.editor.on("update", function() {
                    r.editorContent = r.editor.dom.innerHTML, r.textContent = r.editor.dom.textContent, s.emit("update")
                }), r.editor.dom.innerHTML = r.editorContent, r.pin.onclick = function() {
                    s.isPin = !s.isPin, s.isPin ? h.addIconTo(s.pin, "unpin") : h.addIconTo(s.pin, "pin"), s.emit("update")
                }, s.isPin ? (s.open(), h.addIconTo(s.pin, "unpin")) : h.addIconTo(s.pin, "pin"), u(r.button, w({
                    transform: "scale(1,1)",
                    opacity: t.stickerOpacity
                })), r
            }
            return r(t, e), s(t, null, [{
                key: "addStyleTo",
                value: function(e) {
                    e.add(l(d.cssText)), e.add(l(t.editorCssText)), e.stickerButtonStyleSheet = l(t.buttonCssText), e.add(e.stickerButtonStyleSheet)
                }
            }]), s(t, [{
                key: "setRefHighlight",
                value: function(e) {
                    this.refHighlight = e, this.refHighlightId = e.noteId, this.enableButtonDragging = !1, this.changeButtonColor(e.colorName)
                }
            }, {
                key: "changeButtonColor",
                value: function(e) {
                    Array.prototype.forEach.call(this.button.getElementsByTagName("path"), function(t) {
                        t.style.fill = k.palette[e], t.style.stroke = k.strong[e]
                    })
                }
            }, {
                key: "isPointInRange",
                value: function(e) {
                    var t = this.panel.getBoundingClientRect(),
                        n = this.button.getBoundingClientRect(),
                        i = this.preview.getBoundingClientRect(),
                        o = {
                            x: e.clientX,
                            y: e.clientY
                        };
                    return p(o, t) || p(o, n) || p(o, i) ? b.PointInRange.Note : b.PointInRange.Outside
                }
            }, {
                key: "loseFocus",
                value: function() {
                    this.isPin || this.close()
                }
            }, {
                key: "getFocus",
                value: function() {
                    this.noteType != y.Sticker || this.isHoverOnButton || this.open()
                }
            }, {
                key: "open",
                value: function() {
                    this.isOpen || (this.isOpen = !0, this.closePreview(), this.refHighlight && this.refHighlight.uiMouseEnter(!0), u(this.panel, w({
                        top: this.notePosition.top,
                        left: this.notePosition.left,
                        width: this.size.width,
                        height: this.size.height,
                        transform: "scale(1,1)"
                    })), this.editor.dom.focus())
                }
            }, {
                key: "close",
                value: function() {
                    if (this.isOpen) {
                        if (this.isOpen = !1, this.isPin) return this.isOpen = !1;
                        this.refHighlight && this.refHighlight.uiMouseLeft(!0);
                        var e = {
                            left: t.initialEditorWidthOffset + "px",
                            top: t.initialEditorHeightOffset + "px",
                            transform: "scale(0,0)"
                        };
                        w(e), u(this.panel, e)
                    }
                }
            }, {
                key: "openPreview",
                value: function() {
                    u(this.preview, {
                        display: "initial"
                    })
                }
            }, {
                key: "closePreview",
                value: function() {
                    u(this.preview, {
                        display: "none"
                    })
                }
            }, {
                key: "uiMouseEnter",
                value: function() {
                    u(this.button, w({
                        transform: "scale(1.5,1.5)",
                        opacity: 1
                    }))
                }
            }, {
                key: "uiMouseLeft",
                value: function() {
                    u(this.button, w({
                        transform: "scale(1,1)",
                        opacity: t.stickerOpacity
                    }))
                }
            }, {
                key: "render",
                value: function(e) {
                    return e && (this.buttonPosition = e.buttonRelative, u(this.editorPanel, {
                        top: e.buttonAbsolute.top + "px",
                        left: e.buttonAbsolute.left + "px"
                    })), this.elementList = [this.button, this.editorPanel], this.elementList
                }
            }, {
                key: "toJSON",
                value: function() {
                    var e = "";
                    return this._selection && (e = this._selection.toJSON()), {
                        noteId: this.noteId,
                        noteType: this.noteType,
                        selection: e,
                        style: this.style,
                        buttonPosition: this.buttonPosition,
                        notePosition: this.notePosition,
                        isPin: this.isPin,
                        size: this.size,
                        textContent: this.textContent,
                        editorContent: this.editorContent,
                        refHighlightId: this.refHighlightId,
                        createdTime: +this.createdTime
                    }
                }
            }, {
                key: "buttonPosition",
                set: function(e) {
                    this._buttonPosition = e;
                    var t = {
                        top: e.top + "px",
                        left: e.left + "px"
                    };
                    u(this.button, t), u(this.editorPanel, t)
                },
                get: function() {
                    return this._buttonPosition
                }
            }]), t
        }(m);
    x.minHeight = 188, x.minWidth = 188, x.buttonCssText = ".bee-sticker-button{text-indent:0px;width:25px;height:25px;cursor:pointer;position:absolute;display:inline-block}.bee-sticker-button svg.svg-icon{width:25px;height:25px}.bee-sticker-button svg.svg-icon path,.bee-sticker-button svg.svg-icon polygon,.bee-sticker-button svg.svg-icon rect{fill:#BFAC58}.bee-sticker-button svg.svg-icon path:nth-child(1),.bee-sticker-button svg.svg-icon polygon:nth-child(1),.bee-sticker-button svg.svg-icon rect:nth-child(1){fill:#FFE676}", x.editorCssText = ".bee-sticker-container{font-family:Helvetica,Arial,'Heiti SC','Hiragino Sans GB',Simsun,sans-self;left:100px;position:absolute;top:0;z-index:2147483647}.bee-sticker-container .bee-sticker-preview{background-color:#FFFCF1;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);display:none;font-size:10px;height:auto;left:10px;max-height:100px;max-width:220px;min-width:120px;overflow:hidden;padding:10px;position:absolute;right:20px;text-align:left;transform:translateX(20px);-webkit-transform:translateX(20px);width:auto;word-wrap:break-word}.bee-sticker-container .bee-sticker-preview ol,.bee-sticker-container .bee-sticker-preview ul{margin-left:0;padding-left:12px}.bee-sticker-container .bee-sticker-panel{background-color:RGBA(255,243,197,1);border:none;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);box-sizing:border-box;display:inline-block;height:400px;left:0;max-height:500px;overflow:hidden;position:absolute;top:0;transform:scale(0,0);-webkit-transform:scale(0,0);transition:all .3s ease 0s;transition-property:top,left,-webkit-transform}.bee-sticker-container .bee-sticker-panel .bee-sticker-drag{cursor:move;height:15px;width:100%}.bee-sticker-container .bee-sticker-panel .bee-sticker-editor{background-color:RGBA(255,243,197,1);border:none;font-size:14px;height:70%;margin-left:5%;margin-top:5px;overflow:auto;padding:0;resize:none;width:94%}.bee-sticker-container .bee-sticker-panel .bee-sticker-editor ol,.bee-sticker-container .bee-sticker-panel .bee-sticker-editor ul{margin-bottom:10px;margin-top:0;padding-left:20px}.bee-sticker-container .bee-sticker-panel .bee-sticker-editor img{display:block;margin:0 auto;max-width:80%}.bee-sticker-container .bee-sticker-panel .bee-sticker-editor:focus{outline:0!important}.bee-sticker-container .bee-sticker-panel .bee-sticker-panel-toolbar{bottom:0;display:flex;height:35px;position:absolute;width:100%}.bee-sticker-container .bee-sticker-panel .bee-sticker-panel-toolbar .bee-sticker-toolbar-item{cursor:pointer;margin-bottom:00px;padding-left:5px;padding-right:5px;padding-top:9px}.bee-sticker-container .bee-sticker-panel .bee-sticker-panel-toolbar .bee-sticker-toolbar-item:nth-child(1){margin-left:5px}.bee-sticker-container .bee-sticker-panel .bee-sticker-panel-toolbar .bee-sticker-toolbar-item .svg-icon{height:1em;width:1em}.bee-sticker-container .bee-sticker-panel .bee-sticker-panel-toolbar .bee-sticker-toolbar-item .svg-icon path,.bee-sticker-container .bee-sticker-panel .bee-sticker-panel-toolbar .bee-sticker-toolbar-item .svg-icon polygon,.bee-sticker-container .bee-sticker-panel .bee-sticker-panel-toolbar .bee-sticker-toolbar-item .svg-icon rect{fill:#469106}.bee-sticker-container .bee-sticker-panel .bee-sticker-panel-toolbar .bee-sticker-toolbar-item .svg-icon circle{stroke:#4691f6;stroke-width:1}.bee-sticker-container .bee-sticker-panel .bee-sticker-panel-toolbar .bee-sticker-toolbar-item svg.svg-icon{height:18px;stroke-width:2;width:18px}.bee-sticker-container .bee-sticker-panel .bee-sticker-panel-toolbar .bee-sticker-toolbar-item svg.svg-icon path,.bee-sticker-container .bee-sticker-panel .bee-sticker-panel-toolbar .bee-sticker-toolbar-item svg.svg-icon polygon,.bee-sticker-container .bee-sticker-panel .bee-sticker-panel-toolbar .bee-sticker-toolbar-item svg.svg-icon rect{fill:RGBA(57,57,57,.6)}.bee-sticker-container .bee-sticker-panel .bee-sticker-resizer{bottom:0;cursor:se-resize;height:20px;position:absolute;right:0;width:20px}", x.initialEditorWidth = 250, x.initialEditorHeight = 170, x.initialEditorWidthOffset = -x.initialEditorWidth / 2 + 6, x.initialEditorHeightOffset = -x.initialEditorHeight / 2 + 6, x.stickerOpacity = .6, e.exports = x
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        r = n(4),
        s = n(1).styleMaker,
        a = n(1).setStyle,
        l = n(1).parse,
        u = (n(6), function() {
            function e(t, n, o, r) {
                i(this, e), this.name = t, this.url = n, this.style = o, this.set = r
            }
            return o(e, [{
                key: "addIconTo",
                value: function(e, t) {
                    var n = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2],
                        i = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
                        o = this.set[t];
                    o || r.ERROR("Icon " + t + " is not found!");
                    var s = l(o).children[0];
                    if (i)
                        for (var u = s.getElementsByTagName("path"), c = 0; c < u.length; c++) a(u[c], i);
                    n && a(s, n), e.innerHTML = "", e.appendChild(s)
                }
            }, {
                key: "addToLayer",
                value: function(e) {
                    e.svgIconStyleSheet = s(this.style), e.add(e.svgIconStyleSheet)
                }
            }]), e
        }()),
        c = {
            Highlight: '<svg class=svg-icon style=fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421 viewBox="0 0 20 20"><g transform=matrix(0.330192,0,0,0.330192,2.00217,1.39168)><path d="M30.688,2.5C30.388,2.5 30.2,2.612 30,2.813L24.156,8.625L24.125,8.594L19.813,12.906L39.469,32.563L42.25,29.781L42.313,29.813L49.688,22.406C49.888,22.206 50,21.988 50,21.688L30.688,2.5ZM18.594,14.5L12.594,27.906L7.5,33C7.1,33.4 7.1,34.006 7.5,34.406L18,44.906C18.2,45.106 18.488,45.188 18.688,45.188C18.888,45.188 19.206,45.106 19.406,44.906L24.5,39.813L37.906,33.813L18.594,14.5ZM6.688,36.406L0.313,42.813C0.113,43.112 0,43.513 0,43.813C0.1,44.112 0.294,44.4 0.594,44.5L11.906,48.906C12.006,48.906 12.113,49 12.313,49C12.613,49 12.8,48.888 13,48.688L16,45.688L6.688,36.406Z"style=fill-rule:nonzero /></g></svg>',
            StickerBelongToHighlight: '<svg class=svg-icon style=fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:square;stroke-miterlimit:1.5 viewBox="0 0 20 20"><g transform=matrix(0.0258199,0,0,0.0258199,-4.20612,-3.15811)><g transform=matrix(0.993637,0,0,1.00314,28.961,35.4273)><path d=M833.284,232.788L229.442,232.788L229.442,631.535L419.375,631.535L523.594,740.047L626.147,631.535L833.284,631.535L833.284,232.788Z style=fill:none;stroke:#f8f8f8;stroke-width:54.31px /></g><g transform=matrix(1.10119,0,0,1.10119,-59.9331,-47.4941)><path d=M392.299,378.791L731.454,378.791 style=fill:none;stroke:#f8f8f8;stroke-width:49.24px /></g><g transform=matrix(0.693575,0,0,0.693575,165.422,201.333)><path d=M392.299,378.791L731.454,378.791 style=fill:none;stroke:#f8f8f8;stroke-width:78.18px /></g></g></svg>',
            Delete: '<svg class=svg-icon style=fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421 viewBox="0 0 20 20"><g transform=matrix(0.647036,0,0,0.647036,-0.254535,-0.328197)><path d="M13.594,4L13.281,4.281L12.563,5L6,5L6,7L7,7L7,25C7,26.645 8.355,28 10,28L22,28C23.645,28 25,26.645 25,25L25,7L26,7L26,5L19.438,5L18.719,4.281L18.406,4L18,4L14,4L13.594,4ZM14.438,6L17.563,6L18.281,6.719L18.594,7L23,7L23,25C23,25.555 22.555,26 22,26L10,26C9.445,26 9,25.555 9,25L9,7L13.406,7L13.719,6.719L14.438,6ZM11,11L11,22L13,22L13,11L11,11ZM15,11L15,22L17,22L17,11L15,11ZM19,11L19,22L21,22L21,11L19,11Z"style=fill-rule:nonzero /></g></svg>',
            pin: '<svg class=svg-icon style=fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421 viewBox="0 0 20 20"><g transform=matrix(0.835125,0,0,0.835125,-0.0742473,-0.253593)><path d="M15.594,2L14.906,2.688C14.288,3.305 14.132,4.18 14.469,4.906L10,8.5L9.688,8.188C8.888,7.388 7.706,7.388 6.906,8.188L6,9.094L14.906,18L15.813,17.094C16.613,16.294 16.613,15.113 15.813,14.313L15.5,14L19.156,9.469C19.847,9.72 20.613,9.575 21.188,9L22,8.406L15.594,2ZM8.813,13.813L2,20.594L2,22L3.406,22L10.188,15.188L8.813,13.813Z"style=fill-rule:nonzero /></g></svg>',
            unpin: '<svg class=svg-icon style=fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421 version=1.1 viewBox="0 0 20 20"><g transform=matrix(0.84422,0,0,0.84422,-0.0345575,-0.368585)><path d="M15.594,2L14.906,2.688C14.288,3.305 14.132,4.18 14.469,4.906L11.5,7.313L16.688,12.5L19.156,9.469C19.847,9.72 20.613,9.575 21.188,9L22,8.406L15.594,2ZM3.438,2.031L2.031,3.438L6.844,8.25L6,9.094L14.906,18L15.75,17.156L20.563,21.969L21.969,20.563L3.438,2.031ZM8.813,13.813L2,20.594L2,22L3.406,22L10.188,15.188L8.813,13.813Z"style=fill-rule:nonzero /></g></svg>',
            Google: '<svg class=svg-icon style=fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421 viewBox="0 0 20 20"><g transform=matrix(0.669438,0,0,0.669438,-0.530306,-1.16915)><path d="M16.003,14.063L16.003,18.266L21.992,18.266C21.209,20.813 19.081,22.635 16.003,22.635C12.338,22.635 9.366,19.664 9.366,16C9.366,12.336 12.337,9.365 16.003,9.365C17.651,9.365 19.155,9.969 20.316,10.963L23.412,7.868C21.456,6.086 18.856,5 16.003,5C9.926,5 5,9.925 5,16C5,22.075 9.926,27 16.003,27C25.239,27 27.277,18.365 26.372,14.078L16.003,14.063Z"style=fill-rule:nonzero /></g></svg>',
            Sticker: '<svg class=svg-icon style=fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421 viewBox="0 0 20 20"><g><g transform=matrix(0.988169,0,0,1.01013,0.128666,-0.162874)><rect height=11.675 width=16.983 x=1.515 y=1.709 /></g><g transform=matrix(0.692535,0,0,0.49926,0.610032,11.6766)><rect height=11.675 width=16.983 x=1.515 y=1.709 /></g></g><g transform=matrix(0.832725,0,0,0.832725,0.00205592,0.00397478)><path d=M0,0L0,24L17,24L24,17L24,0L0,0ZM2,2L22,2L22,16L16,16L16,22L2,22L2,2ZM6,7L6,8L16,8L16,7L6,7ZM6,11L6,12L18,12L18,11L6,11Z style=fill-rule:nonzero /></g></svg>'
        },
        h = {
            IconSet: {
                Sparkk: new u("Sparkk", "http://svgicons.sparkk.fr/", ".svg-icon{width:18px;height:18px;}.svg-icon path,.svg-icon polygon,.svg-icon rect{fill:#F8F8F8;}.svg-icon circle{stroke:#F8F8F8;stroke-width:1}", c)
            }
        };
    e.exports = h
}, , , , , , , , , function(e, t) {
    "use strict";

    function n(e, t, n, a, l) {
        t = t || s, n = n || s, l = l || s, a = a || s, e.draggingFlag = i;
        var u = {};
        u.mouseDownEvent = null, u.initInfo = null;
        var c = function(t) {
                return e.draggingFlag == o ? void(e.draggingFlag = r) : void(e.draggingFlag == r && n(u.mouseDownEvent, t, u.initInfo))
            },
            h = function(n) {
                e.draggingFlag = o, u.initInfo = t(), u.mouseDownEvent = n, document.documentElement.addEventListener("mousemove", c, !1), document.documentElement.addEventListener("mouseup", f, !1)
            },
            f = function t(n) {
                e.draggingFlag != r && l(n), a(n), document.documentElement.removeEventListener("mousemove", c, !1), document.documentElement.removeEventListener("mouseup", t, !1), u.mouseDownEvent = null, u.initInfo = null, e.draggingFlag = i
            };
        e.addEventListener("mousedown", h, !1)
    }
    var i = -1,
        o = 0,
        r = 1,
        s = function() {};
    e.exports = {
        setupDragging: n
    }
}, function(e, t) {
    "use strict";

    function n(e, t) {
        var n = document.createElement("a");
        n.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(t)), n.setAttribute("download", e), n.style.display = "none", document.body.appendChild(n), n.click(), document.body.removeChild(n)
    }
    e.exports = {
        downloadTextAsFile: n
    }
}, , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var i = n(2),
        o = n(8).setupOnSelection,
        r = n(8).setupOnSelecting,
        s = n(8).setupOnMouseDown,
        a = (n(8).setupOnMouseUp, n(8).setupOnResize),
        l = n(8).setupObserver,
        u = (n(4), n(12).Selection),
        c = n(41).setupMenuListener,
        h = n(41).saveRightClickPosition;
    e.exports = function() {
        var e = window.BeenoteEventHub;
        o(document.body, function(t) {
            var t = new u(t.getRangeAt(0));
            e.emit(i.UserSelection, t)
        }), s(window, function(t) {
            h(t), e.emit(i.UserMouseDown, t)
        }), r(document.body, function() {
            e.emit(i.UserSelecting, null)
        }, function(t) {
            e.emit(i.UserSelecting, t)
        }), a(window, function(t) {
            e.emit(i.WindowResize, {})
        }), l(document.body, function(t) {
            e.emit(i.PageChanged, t)
        }), c()
    }
}, function(e, t, n) {
    "use strict";
    n(2), e.exports = function() {}
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function r(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var s, a, l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        u = n(1).domMaker,
        c = (n(1).styleMaker, n(1).setStyle),
        h = n(2),
        f = (n(7), n(4)),
        d = n(10).isPointInBox,
        p = n(10).boxAbsolute,
        g = n(12).Selection,
        v = n(11).Tooltip,
        m = n(11).TooltipItem,
        y = n(15).BaseNote,
        b = n(3).constant,
        k = n(15).type,
        w = n(3).highlightColor,
        C = n(11).highlightColorItemDict;
    s = a = {
        space: "&#160;",
        and: "&#38;",
        less: "&#60;",
        greater: "&#62;",
        dquote: "&#34;",
        quote: "&#39;",
        backslash: "&#92;"
    };
    var x = String.fromCharCode(32),
        L = function(e) {
            function t(e) {
                i(this, t);
                var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.isRestored ? (n._selection = new g(e.selection), n.refStickerId = e.refStickerId, n.refSticker = null, n.colorName = e.colorName) : (n._selection = e, n.refStickerId = null, n.refSticker = null, n.style = {
                    position: "absolute",
                    display: "block",
                    cursor: "text",
                    pointerEvents: "none",
                    userSelect: "none"
                }, n.colorName = w.default), n.noteType = k.Highlight, n.elementList = [], n.domRangeList = [], n
            }
            return r(t, e), l(t, [{
                key: "render",
                value: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0];
                    e ? this.boundingBoxes = this._selection.getBoundingBoxes(e) : this.boundingBoxes = this._selection.getBoundingBoxes(this._selection.getRangeList()), this.elementList = [];
                    for (var t = 0; t < this.boundingBoxes.length; t++) {
                        var n = this.boundingBoxes[t],
                            i = u("span", this.style);
                        i.className = "bee-highlight", i.classList.add(this.colorName), i.boundingBox = n, i.range = n.range, c(i, n.style), i.style.whiteSpace = "pre", i.style.lineHeight = n.height + "px";
                        var o = !1;
                        if (n.textContent && "" != n.textContent) {
                            var r = n.textContent;
                            if (n.style.whiteSpace.indexOf("pre") >= 0 ? r = r.replace(/\n/g, "") : ("\n" == r[0] && 0 == n.range.startOffset && (o = !0), r = r.replace(/^\n+/, x), r = r.replace(/\n/g, x)), "" == r) continue;
                            ["normal", "nowrap", "pre-line"].indexOf(n.style.whiteSpace) > -1 && (o && (r = r.trimLeft()), r = r.replace(/\t+/g, x).replace(new RegExp(x + "+", "g"), x)), i.dataset.text = r, i.defaultOpacity = 1
                        } else i.classList.add(this.colorName), i.style.opacity = .4, i.defaultOpacity = .4;
                        i.defaultTextColor = n.style.color, this.elementList.push(i)
                    }
                    return this.elementList
                }
            }, {
                key: "getRangeList",
                value: function() {
                    return this.domRangeList = this._selection.getRangeList(), this.domRangeList
                }
            }, {
                key: "getClientRects",
                value: function() {
                    return this._selection.getClientRects()
                }
            }, {
                key: "updateRenderBox",
                value: function(e, t, n) {
                    console.assert(this.elementList[t] == e), this.elementList[t].absolutePosition = n
                }
            }, {
                key: "setRefSticker",
                value: function(e) {
                    this.refSticker = e, this.refStickerId = e.noteId
                }
            }, {
                key: "isPointInRange",
                value: function(e) {
                    var t = document.caretRangeFromPoint(e.clientX, e.clientY);
                    if (t) {
                        var n = t.startContainer,
                            i = t.startOffset,
                            o = this._selection._nativeRange.isPointInRange(n, i);
                        if (o)
                            for (var r = 0; r < this.elementList.length; r++) {
                                var s = this.elementList[r],
                                    a = s.range.getBoundingClientRect();
                                if (d({
                                        x: e.clientX,
                                        y: e.clientY
                                    }, a)) return b.PointInRange.Note
                            }
                    }
                    return b.PointInRange.Outside
                }
            }, {
                key: "computeOverlappedBoxes",
                value: function(e) {
                    for (var t = e.getRangeAt(0), n = [], i = 0; i < this.elementList.length; i++) {
                        var o = this.elementList[i].range;
                        t.compareBoundaryPoints(Range.END_TO_START, o) > 0 || t.compareBoundaryPoints(Range.START_TO_END, o) < 0 ? n.push(!1) : n.push(!0)
                    }
                    return n
                }
            }, {
                key: "getFocus",
                value: function(e, n) {
                    var i = this,
                        o = this;
                    this.uiMouseEnter();
                    var r = this._selection.getClientRects()[0],
                        s = p(r);
                    e.removeAllItems(), n.removeAllItems();
                    var a = 0;
                    this.refSticker ? this.refSticker.uiMouseEnter() : (e.addItem(new m("StickerBelongToHighlight", "Comment on Highlight", [function() {
                        o.refSticker ? o.refSticker.open() : window.BeenoteEventHub.emit(h.CommentOnHighlight, o)
                    }]), !1), a += 1);
                    var l = !1,
                        u = C[this.colorName];
                    e.addItem(u, !1, !1);
                    for (var c in C) c != this.colorName && n.addItem(C[c], !1);
                    u.dom.onmouseover = function(t) {
                        l = !0, n.setPosition({
                            left: e.currentPosition.left + v.width * a,
                            top: e.currentPosition.top - v.height - 2
                        }), n.display()
                    }, u.dom.onmouseout = function(e) {
                        l = !1, setTimeout(function() {
                            l || n.nodisplay()
                        }, 200)
                    }, n.tooltipContainerDom.onmouseover = function(e) {
                        l = !0
                    }, n.tooltipContainerDom.onmouseout = function(e) {
                        l = !1, setTimeout(function() {
                            l || n.nodisplay()
                        }, 100)
                    }, n.tooltipContainerDom.onmousedown = function(e) {
                        var t = o.colorName;
                        o.colorName = e.target.colorName, o.elementList.forEach(function(e) {
                            e.classList.remove(t), e.classList.add(o.colorName), o.refSticker && o.refSticker.changeButtonColor(o.colorName)
                        }), o.emit("update")
                    }, e.addItem(new m("Delete", "Remove this Highlight", [function() {
                        i.refSticker && !confirm("Do you really want to delete this highlight and note?") || (o.emit("remove"), i.refSticker && i.refSticker.emit("remove"))
                    }]), !1).setPosition({
                        left: s.left + s.width,
                        top: s.top + t.hoverToopTipYOffset - v.height
                    }), e.display()
                }
            }, {
                key: "loseFocus",
                value: function(e, t) {
                    this.uiMouseLeft(), this.refSticker && this.refSticker.uiMouseLeft();
                    var n = t.tooltipContainerDom;
                    for (var i in C) {
                        var o = C[i];
                        o.dom.onmouseover = null, o.dom.onmouseout = null
                    }
                    n.onmousedown = null, n.onmouseover = null, n.onmouseout = null, setTimeout(function() {
                        e.nodisplay()
                    })
                }
            }, {
                key: "uiMouseEnter",
                value: function(e) {
                    this.keepUIMouseState || (f.INFO("highlight ui mouse enter"), this.elementList.forEach(function(e) {
                        e.style.outline = "1px RGBA(146, 200, 246, 0.8) dashed", e.style.zIndex = "1"
                    }), this.refSticker && (this.refSticker.button.style.zIndex = "2"), e && (this.keepUIMouseState = !0))
                }
            }, {
                key: "uiMouseLeft",
                value: function(e) {
                    this.keepUIMouseState && !e || (this.keepUIMouseState = !1, f.INFO("highlight ui mouse left"), this.elementList.forEach(function(e) {
                        e.style.outline = "initial", e.style.zIndex = "auto"
                    }), this.refSticker && (this.refSticker.button.style.zIndex = "auto"))
                }
            }, {
                key: "toJSON",
                value: function() {
                    var e = "";
                    return this._selection && (e = this._selection.toJSON()), {
                        noteId: this.noteId,
                        noteType: this.noteType,
                        selection: e,
                        style: this.style,
                        textContent: this.toTEXT(),
                        colorName: this.colorName,
                        refStickerId: this.refStickerId,
                        createdTime: +this.createdTime
                    }
                }
            }, {
                key: "toTEXT",
                value: function() {
                    return this._selection.toString()
                }
            }]), t
        }(y);
    L.hoverToopTipYOffset = 2, L.hoverLastingTime = 400, L.lineOffset = 0, e.exports = L
}, function(e, t, n) {
    "use strict";
    var i = n(42).Layer,
        o = (n(42).connectHighlightAndSticker, n(2)),
        r = n(4),
        s = n(39),
        a = n(24),
        l = n(11).default,
        u = n(11).highlightColorTooltip,
        c = n(11).highlightColorStyleSheet,
        h = n(11).highlightTooltip,
        f = n(11).type,
        d = n(15).type,
        p = n(43),
        g = n(12).Selection.clearSelection,
        v = n(1).updateStickyElements;
    e.exports = function() {
        var e = new a(window.location),
            t = window.BeenoteEventHub,
            n = new i(s()),
            m = null;
        l.addTo(n), h.addTo(n, !1), u.addTo(n, !1), n.tooltip = l, n.highlightTooltip = h, n.highlightColorTooltip = u, n.add(c), n.highlightColorStyleSheet = c, p.addStyleTo(n), t.on(o.DisablePage, function(e) {
            n.disable()
        }).on(o.EnablePage, function(e) {
            n.enable()
        }).on(o.UserSelection, function(e) {
            return n.showTooltip(e)
        }).on(o.UserMouseDown, function(e) {
            n.hideTooltipIfLossFocus(e), n.handleNoteClick(e)
        }).on(o.UserSelecting, function(e) {
            n.adjustHighlightColorFromSelection(e), e && !e.isCollapsed && n.focusedNote && n.focusedNote.noteType == d.Highlight && n.setFocusedNote(null)
        }).on(o.TooltipClick, function(e, i, r) {
            if (g(), e != f.Google) {
                var s = n.createAndRenderNote(e, i);
                s.forEach(function(e) {
                    return t.emit(o.SaveNote, [e.toJSON(), window.location], !0)
                })
            }
        }).on(o.ContextMenuClick, function(e) {
            var i = n.createAndRenderNote(d.Sticker, e.position);
            i.forEach(function(e) {
                return t.emit(o.SaveNote, [e.toJSON(), window.location], !0)
            })
        }).on(o.CommentOnHighlight, function(e) {
            var i = n.createAndRenderNote(d.StickerBelongToHighlight, e)[0];
            t.emit(o.SaveNote, [e.toJSON(), window.location], !0), t.emit(o.SaveNote, [i.toJSON(), window.location], !0)
        }).on(o.ReceiveNoteList, function(e) {
            n.renderNoteJSONs(e)
        }).on(o.WindowResize, function() {
            n.renderAllNotes()
        }).on(o.PageChanged, function(i) {
            var s = new a(window.location);
            s.isSameUrl(e) ? m || (m = window.setTimeout(function() {
                n.renderUnrenderedNotes(), m = null
            }, 300)) : (r.INFO("Url changed"), e = s, n.cleanupLayer(), window.setTimeout(function() {
                t.emit(o.FetchNoteList, window.location), t.emit(o.CheckBlackList, window.location.href)
            }, 1e3))
        }), t.emit(o.FetchNoteList, window.location), v(document.body, 2), window.setTimeout(function() {
            return n.renderAllNotes()
        }, 5e3)
    }
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t, n) {
        document.execCommand(e, t, n)
    }

    function r(e) {
        var t = e.innerHTML;
        return t = t.replace(/<style([\s\S]*?)<\/style>/gi, ""), t = t.replace(/<script([\s\S]*?)<\/script>/gi, ""), t = t.replace(/<\/div>/gi, "\n"), t = t.replace(/<\/li>/gi, "\n"), t = t.replace(/<li>/gi, "  *  "), t = t.replace(/<\/ul>/gi, "\n"), t = t.replace(/<\/p>/gi, "\n"), t = t.replace(/<br\s*[\/]?>/gi, "\n"), t = t.replace(/<[^>]+>/gi, "")
    }

    function s(e) {
        return new w(e).toString()
    }
    var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        l = n(1).domMaker,
        u = n(1).parse,
        c = n(4),
        h = n(1).removeAttributes,
        f = n(1).hasParent,
        d = n(12).Selection,
        p = n(54),
        g = n(6),
        v = ["xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large"],
        m = {
            SHIFT: 0,
            CTRL: 1,
            ALT: 2,
            META: 3
        },
        y = n(28).isMac,
        b = y ? m.META : m.CTRL,
        k = String.fromCharCode(160),
        w = function() {
            function e(t) {
                i(this, e), this.keys = g.Array(t) ? t.map(function(e) {
                    return m[e] || e
                }) : t
            }
            return a(e, [{
                key: "toString",
                value: function() {
                    var e = this.keys;
                    if (g.Array(e)) {
                        var t = "";
                        for (var n in m) {
                            var i = 0;
                            e.indexOf(m[n]) > -1 && (i = 1), t += n + "-" + i + "-"
                        }
                        return t += e[e.length - 1]
                    }
                    return e
                }
            }]), e
        }(),
        C = function() {
            function e() {
                i(this, e);
                var t = this.editor = l("div", void 0, "bee-sticker-editor");
                this.dom = this.editor, this.hostWindow = null, t.contentEditable = !0, this.fontSize = e.defaultFontSize, this.editor.style.fontSize = v[this.fontSize], this.matchCallbacks = [], this.callbacks = {}, this.eventCallbacks = {};
                var n = this;
                this.updateTimeout = null, t.addEventListener("input", function(t) {
                    var i = n.getCurrentCaret();
                    if (i.commonAncestorContainer != document.body) {
                        var o = i.startContainer.textContent.toString();
                        n.emitKey(o, i)
                    }
                    clearTimeout(n.updateTimeout), n.updateTimeout = setTimeout(function() {
                        (n.eventCallbacks.update || []).forEach(function(e) {
                            return e(t)
                        })
                    }, e.updateWaiting)
                }), t.addEventListener("keydown", function(e) {
                    e.stopPropagation();
                    var t = [];
                    e.ctrlKey && t.push(m.CTRL), e.altKey && t.push(m.ALT), e.shiftKey && t.push(m.SHIFT), e.metaKey && t.push(m.META), t.push(e.key);
                    var i = n.getCurrentCaret();
                    i.event = e, n.emitKey(s(t), i) && (c.INFO("editor preventing Default"), e.preventDefault())
                }), n.onKey(s(["Tab"]), function(e) {
                    return n.tab(e)
                }), n.onKey(s([m.SHIFT, "Tab"]), function(e) {
                    return n.shiftTab(e)
                }), n.onKey(s([b, "u"]), n.underline), n.onKey(s([b, "b"]), n.bold), n.onKey(s([b, "i"]), n.italic), n.onKey(s([b, "d"]), n.strikeThrough), n.onKey(s([b, "="]), function() {
                    return n.increaseFontSize()
                }), n.onKey(s([b, "-"]), function() {
                    return n.decreaseFontSize()
                }), n.onKey("-" + k, function(e) {
                    return n.ul(e)
                }), n.onKey("*" + k, function(e) {
                    return n.ul(e)
                });
                for (var o = 0; o < 10; o++) n.onKey(o + "." + k, function(e) {
                    return n.ol(e)
                });
                n.onKey(function(e) {
                    return n.matchLink(e)
                }, function(e, t) {
                    return n.makeLink(e, t)
                }), n.onKey(s([m.CTRL, "s"]), function() {
                    return n.saveTextToFile()
                }), y && n.onKey(s([m.META, "s"]), function() {
                    return n.saveTextToFile()
                }), t.addEventListener("paste", function(e) {
                    e.preventDefault();
                    var t = (e.originalEvent || e).clipboardData,
                        n = t.getData("text/html") || t.getData("text"),
                        n = h(u(n), ["style", "class"]).innerHTML;
                    document.execCommand("insertHTML", !1, n)
                }), t.addEventListener("click", function(e) {
                    e.target.href && window.open(e.target.text, "_blank")
                })
            }
            return a(e, [{
                key: "getCurrentCaret",
                value: function() {
                    var e = this.hostWindow.getSelection();
                    return e.getRangeAt(0)
                }
            }, {
                key: "getCurrentSelection",
                value: function() {
                    return this.hostWindow.getSelection()
                }
            }, {
                key: "insertNode",
                value: function(e) {
                    var t = this.getCurrentSelection(),
                        n = t.getRangeAt(0);
                    n.insertNode(e), n.setStartAfter(e), n.setEndAfter(e), t.removeAllRanges(), t.addRange(n)
                }
            }, {
                key: "refreshCursor",
                value: function(e) {
                    e = e || this.getCurrentCaret();
                    var t = this.hostWindow.getSelection();
                    t.removeAllRanges(), t.addRange(e)
                }
            }, {
                key: "setEndCursor",
                value: function(e) {
                    var t = document.createRange();
                    t.selectNodeContents(e), t.collapse(!1);
                    var n = window.getSelection();
                    n.removeAllRanges(), n.addRange(t)
                }
            }, {
                key: "on",
                value: function(e, t) {
                    return this.eventCallbacks[e] = this.eventCallbacks[e] || [], this.eventCallbacks[e].push(t), this
                }
            }]), a(e, [{
                key: "_onKey",
                value: function(e, t) {
                    return g.Function(e) ? this.matchCallbacks.push([e, t]) : (this.callbacks[e] = this.callbacks[e] || [], this.callbacks[e].push(t)), this.callbacks[e]
                }
            }, {
                key: "setHost",
                value: function(e) {
                    this.hostWindow = e
                }
            }, {
                key: "onKey",
                value: function(e, t) {
                    g.Array(e) ? e.forEach(function(e) {
                        return self._onKey(e, t)
                    }) : this._onKey(e, t)
                }
            }, {
                key: "emitKey",
                value: function(e, t) {
                    var n = !1,
                        i = this.callbacks[e] || [];
                    return 0 != i.length && i.forEach(function(e) {
                        return n = !e(t)
                    }), this.matchCallbacks.forEach(function(n) {
                        var i = n[0](e);
                        i && n[1](i, t)
                    }), n
                }
            }, {
                key: "saveTextToFile",
                value: function() {
                    p.downloadTextAsFile("note.txt", r(this.editor))
                }
            }, {
                key: "ul",
                value: function(e) {
                    f(e.startContainer, "li") || (o("insertUnorderedList"), e = this.getCurrentCaret(), e.startContainer.nodeValue = "", this.refreshCursor())
                }
            }, {
                key: "ol",
                value: function(e) {
                    f(e.startContainer, "li") || (o("insertOrderedList"), e = this.getCurrentCaret(), e.startContainer.nodeValue = "", this.refreshCursor())
                }
            }, {
                key: "tab",
                value: function(e) {
                    var t = d.serializeRange(e),
                        n = f(e.startContainer, "li");
                    if (!n) return this.insertNode(document.createTextNode("    ")), !1;
                    var i = document.createRange();
                    i.selectNode(n), i.surroundContents(document.createElement(f(n, ["ul", "ol"]).tagName)), this.refreshCursor(d.deserializeRange(t))
                }
            }, {
                key: "shiftTab",
                value: function(e) {
                    var t = d.serializeRange(e),
                        n = f(e.startContainer, "li");
                    if (!n) return !1;
                    var i = f(n, ["ol", "ul"]),
                        o = f(i, ["ol", "ul"], !0);
                    return !!o && (o.appendChild(n), void this.refreshCursor(d.deserializeRange(t)))
                }
            }, {
                key: "underline",
                value: function() {
                    o("underline")
                }
            }, {
                key: "bold",
                value: function() {
                    o("bold")
                }
            }, {
                key: "italic",
                value: function() {
                    o("italic")
                }
            }, {
                key: "getFontSize",
                value: function(e) {
                    for (var t = null; !(t = e.style.fontSize || e.size);) e = e.parentElement;
                    var n = v.indexOf(t);
                    return t = n >= 0 ? n : parseInt(t)
                }
            }, {
                key: "increaseFontSize",
                value: function() {
                    var e = this.getCurrentCaret();
                    if (!e.collapsed) {
                        var t = this.getFontSize(e.startContainer.parentElement);
                        o("fontSize", !1, t + 1)
                    }
                }
            }, {
                key: "decreaseFontSize",
                value: function() {
                    var e = this.getCurrentCaret();
                    if (!e.collapsed) {
                        var t = this.getFontSize(e.startContainer.parentElement);
                        o("fontSize", !1, t - 1)
                    }
                }
            }, {
                key: "strikeThrough",
                value: function() {
                    o("strikeThrough")
                }
            }, {
                key: "matchLink",
                value: function(e) {
                    var t = e.split(k),
                        n = t.length,
                        i = t[n - 1],
                        o = t[n - 2];
                    if ("" == i && g.URL(o)) return o
                }
            }, {
                key: "makeLink",
                value: function(e, t) {
                    var n = document.createElement("span"),
                        i = document.createElement("a");
                    i.href = e, i.target = "_blank", n.contentEditable = !0, n.appendChild(i), i.appendChild(document.createTextNode(e)), t.startContainer.nodeValue = "";
                    var o = k,
                        r = document.createTextNode(o + o);
                    t.insertNode(r), t.insertNode(n);
                    var s = document.createRange();
                    s.setStart(r, 2), s.setEnd(r, 2), this.refreshCursor(s)
                }
            }]), e
        }();
    C.defaultFontSize = 2, C.updateWaiting = 500, C.cssText = ".bee-sticker-editor{text-align:left;}.bee-sticker-editor ul{margin-top:0}.bee-sticker-editor ol{margin-top:0;list-style-type:decimal}.bee-sticker-editor ol ol{list-style-type:lower-alpha}.bee-sticker-editor ol ol ol{list-style-type:lower-roman}.bee-sticker-editor a{cursor:pointer;color:#4682B4}", e.exports = {
        HotKey: w,
        SimpleEditor: C
    }
}]);