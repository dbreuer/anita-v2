/*! Ihatetomatoes - v - 2015-06-15 */
!function () {
    for (var a, b = function () {
    }, c = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], d = c.length, e = window.console = window.console || {}; d--;)a = c[d], e[a] || (e[a] = b)
}(), function (a) {
    var b = {reCalcOnWindowResize: !0, throttleDuration: 17}, c = function (a) {
        var b = a.find("img").attr("src");
        a.data("imageSrc", b), d(b, function (b, c) {
            a.data({imageW: c.width, imageH: c.height}), g(a)
        })
    }, d = function (b, c) {
        a("<img />").one("load", function () {
            c(null, {width: this.width, height: this.height})
        }).attr("src", b)
    }, e = function (a, b) {
        var c = !1;
        return function () {
            var d = Array.prototype.slice.call(arguments, 0);
            return c ? !1 : (c = !0, void setTimeout(function () {
                c = !1, a.apply(null, d)
            }, b))
        }
    }, f = function (a, b, c, d, e) {
        var f = Math.floor(b / 2), g = (d + 1) / 2, h = Math.floor(c / a), i = Math.floor(g * h);
        e && (i = h - i);
        var j = i - f, k = h - i, l = b - f;
        return l > k && (j -= l - k), 0 > j && (j = 0), -100 * j / b + "%"
    }, g = function (a) {
        var b = a.data("imageW"), d = a.data("imageH"), e = a.data("imageSrc");
        if (!b && !d && !e)return c(a);
        var g = a.width(), h = a.height(), i = parseFloat(a.data("focusX")), j = parseFloat(a.data("focusY")), k = a.find("img").first(), l = 0, m = 0;
        if (!(g > 0 && h > 0 && b > 0 && d > 0))return !1;
        var n = b / g, o = d / h;
        k.css({
            "max-width": "",
            "max-height": ""
        }), b > g && d > h && k.css(n > o ? "max-height" : "max-width", "100%"), n > o ? l = f(o, g, b, i) : o > n && (m = f(n, h, d, j, !0)), k.css({
            top: m,
            left: l
        })
    }, h = a(window), i = function (a, b) {
        var c = b.throttleDuration ? e(function () {
            g(a)
        }, b.throttleDuration) : function () {
            g(a)
        }, d = !1;
        return g(a), {
            adjustFocus: function () {
                return g(a)
            }, windowOn: function () {
                return d ? void 0 : (h.on("resize", c), d = !0)
            }, windowOff: function () {
                return d ? (h.off("resize", c), d = !1, !0) : void 0
            }
        }
    };
    a.fn.focusPoint = function (c) {
        if ("string" == typeof c)return this.each(function () {
            var b = a(this);
            b.data("focusPoint")[c]()
        });
        var d = a.extend({}, b, c);
        return this.each(function () {
            var b = a(this), c = i(b, d);
            b.data("focusPoint") && b.data("focusPoint").windowOff(), b.data("focusPoint", c), d.reCalcOnWindowResize && c.windowOn()
        })
    }, a.fn.adjustFocus = function () {
        return this.each(function () {
            g(a(this))
        })
    }
}(jQuery), $(document).ready(function () {
    function a(a, b, c, d) {
        $("#xmas, #intro, #windowOutlines").height(b).width(a).css({left: d, top: c})
    }

    function b() {
        function a() {
            tlStar.play()
        }

        function b() {
            tlMouseInTree.play()
        }

        function c() {
            tlLogos.play()
        }

        tlClear = new TimelineLite, tlClear.set([q, rb, r, Y, W, J, C, l, P, R, T, U, L, O], {autoAlpha: 0}).set(O, {
            xPercent: 150,
            yPercent: 36
        }).set(L, {xPercent: -650, yPercent: 40}).set(X, {
            scale: .2,
            xPercent: 1100,
            transformOrigin: "center bottom"
        }), tlIntro = new TimelineMax, tlIntro.set(h, {
            xPercent: 40,
            yPercent: 30,
            scale: 3,
            transformOrigin: "right bottom"
        }).from(h, 2, {autoAlpha: 0}).to(i, 4, {strokeDashoffset: 0}, "3"), tlBlink = new TimelineMax({
            repeat: -1,
            repeatDelay: 2
        }), tlBlink.set(j, {xPercent: -70}).fromTo(m, .2, {
            yPercent: 70,
            ease: Power4.easeOut
        }, {yPercent: 0}).fromTo(o, .3, {
            xPercent: 0,
            ease: Power4.easeIn
        }, {xPercent: -90}, "left").fromTo(n, .1, {xPercent: 0}, {xPercent: -30}, "left").fromTo(m, .2, {
            yPercent: 70,
            ease: Power4.easeOut
        }, {yPercent: 0}).fromTo(o, .3, {
            xPercent: -90,
            ease: Power4.easeIn
        }, {xPercent: 0}, "right").fromTo(n, .1, {xPercent: -30}, {xPercent: 0}, "right"), tlOutline = new TimelineMax, tlOutline.to([k], .3, {
            yPercent: 50,
            autoAlpha: 0,
            ease: Back.easeIn
        }).fromTo(j, .7, {xPercent: -70}, {
            xPercent: 500,
            autoAlpha: 0,
            ease: Power4.easeIn
        }, "+=0.3").to(h, .7, {
            xPercent: 0,
            yPercent: 0,
            scale: 1,
            transformOrigin: "right bottom",
            ease: Power4.easeOut
        }).to(h, 1, {autoAlpha: 0}, "fadeOut").to(p, 1, {autoAlpha: 1}, "fadeOut"), tlTree = new TimelineMax, tlTree.set(O, {autoAlpha: 1}).fromTo(O, 2.4, {
            xPercent: 150,
            yPercent: 36
        }, {xPercent: -280, yPercent: 36, ease: Power2.easeOut}).to(X, 2.4, {
            scale: .2,
            xPercent: 0,
            transformOrigin: "center bottom",
            ease: Power2.easeOut
        }, "0").set(O, {rotationY: 180, transformOrigin: "center bottom"}).to(O, 1.2, {
            xPercent: 150,
            yPercent: 36,
            ease: Power4.easeOut
        }), tlTreeGrow = new TimelineMax, tlTreeGrow.set(Y, {autoAlpha: 1}).set([Z, _, ab, bb, cb, db], {autoAlpha: 0}).to(X, .4, {
            scale: .5,
            transformOrigin: "center bottom",
            ease: Power4.easeOut
        }).fromTo(db, .4, {
            yPercent: 270,
            xPercent: -5,
            autoAlpha: 0,
            scale: .3,
            transformOrigin: "center bottom"
        }, {
            yPercent: 130,
            xPercent: 0,
            autoAlpha: 1,
            scale: .5,
            transformOrigin: "center bottom"
        }, "0.1").fromTo(cb, .4, {
            yPercent: 150,
            xPercent: -2,
            autoAlpha: 0,
            scale: .3,
            transformOrigin: "center bottom"
        }, {
            yPercent: 75,
            xPercent: 0,
            autoAlpha: 1,
            scale: .5,
            transformOrigin: "center bottom"
        }, "0.16").fromTo(bb, .4, {
            yPercent: 100,
            xPercent: -2,
            autoAlpha: 0,
            scale: .3,
            transformOrigin: "center bottom"
        }, {
            yPercent: 50,
            xPercent: 0,
            autoAlpha: 1,
            scale: .5,
            transformOrigin: "center bottom"
        }, "0.25").fromTo(ab, .4, {
            yPercent: 90,
            xPercent: -2,
            autoAlpha: 0,
            scale: .3,
            transformOrigin: "center bottom"
        }, {
            yPercent: 56,
            xPercent: 0,
            autoAlpha: 1,
            scale: .5,
            transformOrigin: "center bottom"
        }, "0.25").fromTo(_, .4, {
            yPercent: 50,
            xPercent: -2,
            autoAlpha: 0,
            scale: .3,
            transformOrigin: "center bottom"
        }, {
            yPercent: 20,
            xPercent: 0,
            autoAlpha: 1,
            scale: .5,
            transformOrigin: "center bottom"
        }, "0.34").fromTo(Z, .4, {
            yPercent: 10,
            xPercent: -2,
            autoAlpha: 0,
            scale: .3,
            transformOrigin: "center bottom"
        }, {
            yPercent: 0,
            xPercent: 0,
            autoAlpha: 1,
            scale: .5,
            transformOrigin: "center bottom"
        }, "0.4").to([db, cb, bb, ab, _, Z, X], 1, {
            yPercent: 0,
            xPercent: 0,
            scale: 1,
            transformOrigin: "center bottom",
            ease: Back.easeInOut
        }, "0.5").fromTo(C, .3, {scale: 1, transformOrigin: "center center", autoAlpha: 0}, {
            scale: 1,
            autoAlpha: 1,
            ease: Back.easeInOut
        }, "0.5").from(ib, .4, {autoAlpha: 0, scale: .3}).to(ib, 1, {
            autoAlpha: .3,
            autoAlpha: 1,
            scale: 1.8,
            repeat: -1,
            yoyo: !0
        }), tlRotatingBaubles = new TimelineMax({repeat: -1, yoyo: !0}), Q.each(function (a, b) {
            tlRotatingBaubles.add(TweenMax.fromTo(b, 2, {rotation: -2, transformOrigin: "top center"}, {
                rotation: 2,
                transformOrigin: "top center",
                ease: Power1.easeInOut
            }), "0")
        }), tlStarLight = new TimelineMax({
            yoyo: !0,
            repeat: -1
        }), tlStarLight.fromTo(J, .6, {autoAlpha: .2}, {
            autoAlpha: 1,
            rotation: 10,
            transformOrigin: "center center"
        }, "+=0.8").staggerFromTo(K, 8, {scale: .1, fill: "#928685", transformOrigin: "center center"}, {
            scale: .5,
            fill: "#FBB03B"
        }, .1, "0").staggerTo(K, .6, {fill: "#ffffff"}, .2).staggerTo(S, 2, {fill: "#E85E4D"}, .2).staggerTo(V, 2, {fill: "#00938E"}, .2, "-=0.5").staggerTo(V, 2, {stroke: "#00938E"}, .2, "-=2"), tlLogos = new TimelineMax({paused: !0}), tlLogos.fromTo(eb, .4, {
            xPercent: -300,
            immediateRender: !0
        }, {xPercent: 0, ease: Power4.easeOut, autoAlpha: 1}).fromTo(fb, .4, {
            xPercent: 200,
            autoAlpha: 0,
            immediateRender: !0
        }, {xPercent: 0, ease: Power4.easeOut, autoAlpha: 1}, "socialIn").staggerFromTo(gb, .6, {
            xPercent: 500,
            autoAlpha: 0
        }, {xPercent: 0, autoAlpha: 1, ease: Power4.easeOut}, .1, "socialIn").fromTo(rb, .4, {
            xPercent: 200,
            immediateRender: !0
        }, {
            xPercent: 0,
            ease: Power4.easeOut,
            autoAlpha: 1
        }).add(tlStarLight, 0).add(tlRotatingBaubles, 0), tlHighlightShare = new TimelineMax({
            yoyo: !0,
            repeat: -1,
            delay: 4,
            repeatDelay: 2
        }), tlHighlightShare.staggerTo(gb, .6, {
            rotation: 360,
            transformOrigin: "center center",
            ease: Power4.easeOut
        }, .1).staggerTo(hb, .6, {fill: "#ffffff"}, .1, "0"), snowLeft = new TimelineMax({repeat: -1}), snowLeft.set([w, v, x], {
            autoAlpha: 0,
            yPercent: 0
        }).to(v, 2, {
            autoAlpha: 1,
            yPercent: 40,
            xPercent: -1,
            ease: Linear.easeNone
        }).add("firstIn").to(v, 8, {autoAlpha: 0, yPercent: 140, ease: Linear.easeNone}).to(w, 5, {
            autoAlpha: 1,
            yPercent: 70,
            xPercent: 2,
            ease: Linear.easeNone
        }, "firstIn").add("secondIn").to(w, 6, {
            autoAlpha: 0,
            yPercent: 130,
            ease: Linear.easeNone
        }, "firstIn+=5").to(x, 5, {
            autoAlpha: 1,
            yPercent: 60,
            ease: Linear.easeNone
        }, "secondIn-=5").to(x, 5, {
            autoAlpha: 0,
            yPercent: 140,
            ease: Linear.easeNone
        }, "secondIn"), snowRight = new TimelineMax({repeat: -1}), snowRight.set([y, z, A], {
            autoAlpha: 0,
            yPercent: 0
        }).to(y, 2, {
            autoAlpha: 1,
            yPercent: 40,
            xPercent: -2,
            ease: Linear.easeNone
        }).add("firstIn").to(y, 8, {autoAlpha: 0, yPercent: 140, ease: Linear.easeNone}).to(z, 5, {
            autoAlpha: 1,
            yPercent: 70,
            xPercent: 1,
            ease: Linear.easeNone
        }, "firstIn").add("secondIn").to(z, 6, {
            autoAlpha: 0,
            yPercent: 130,
            ease: Linear.easeNone
        }, "firstIn+=5").to(A, 5, {
            autoAlpha: 1,
            yPercent: 60,
            ease: Linear.easeNone
        }, "secondIn-=5").to(A, 5, {
            autoAlpha: 0,
            yPercent: 140,
            ease: Linear.easeNone
        }, "secondIn"), snowflakeMove = new TimelineMax({repeat: -1, yoyo: !0}), B.each(function (a, b) {
            snowflakeMove.add(TweenLite.to(b, 5, {
                xPercent: 300 * Math.random(),
                ease: Linear.easeNone
            }), "0"), snowflakeMove.add(TweenLite.to(b, 5, {xPercent: 400 * Math.random(), ease: Linear.easeNone}), "0")
        }), tlPresents = new TimelineMax, tlPresents.set([D, F, G, H, L], {autoAlpha: 1}).set(I, {autoAlpha: 0}).set(L, {
            rotationY: 180,
            transformOrigin: "center bottom"
        }).add("firstPresetnIn").fromTo(O, 2, {xPercent: -882, yPercent: 18, ease: Power4.easeOut}, {
            xPercent: -482,
            yPercent: 18,
            ease: Cubic.easeInOut
        }, "firstPresetnIn").fromTo(F, 2, {xPercent: -402, ease: Power4.easeOut}, {
            xPercent: 0,
            ease: Cubic.easeInOut
        }, "firstPresetnIn").set(O, {rotationY: 360, transformOrigin: "center bottom"}).to(O, 1, {
            xPercent: -882,
            ease: Cubic.easeOut
        }).add("secondPresetnIn").fromTo(L, 2, {xPercent: 470, yPercent: 60, ease: Power4.easeOut}, {
            xPercent: -20,
            yPercent: 60,
            ease: Cubic.easeInOut
        }, "secondPresetnIn-=1").fromTo(H, 2, {xPercent: 302, ease: Power4.easeOut}, {
            xPercent: 0,
            ease: Cubic.easeInOut
        }, "secondPresetnIn-=1").set(L, {rotationY: 360, transformOrigin: "center bottom"}).to(L, 1, {
            xPercent: 370,
            ease: Cubic.easeOut
        }).add("thirdPresetnIn").set(O, {
            yPercent: 62,
            xPercent: -822,
            rotationY: 180,
            transformOrigin: "center bottom"
        }, "thirdPresetnIn-=1").fromTo(O, 2, {yPercent: 62, xPercent: -822}, {
            xPercent: -397,
            ease: Cubic.easeInOut
        }, "thirdPresetnIn-=1").fromTo(G, 2, {xPercent: -392, ease: Power4.easeOut}, {
            xPercent: 0,
            ease: Cubic.easeInOut
        }, "thirdPresetnIn-=1").set(O, {rotationY: 360, transformOrigin: "center bottom"}).to(O, 1, {
            xPercent: -822,
            ease: Cubic.easeOut,
            onComplete: a
        }), tlDecoration = new TimelineMax({paused: !0}), tlDecoration.add("BaublesFlat").to(ib, .4, {
            autoAlpha: 1,
            scale: 2.5,
            ease: Power4.easeOut
        }).to(ib, .2, {autoAlpha: 0, scale: .1}).to(R, .4, {autoAlpha: 1}).staggerFromTo(S, .3, {
            autoAlpha: 0,
            scale: .7
        }, {
            autoAlpha: 1,
            scale: 1,
            ease: Back.easeOut
        }, .1).add("BaublesStriped").set(P, {autoAlpha: 1}).staggerFromTo(Q, .4, {
            autoAlpha: 0,
            rotation: -10,
            transformOrigin: "top center",
            ease: Back.easeOut
        }, {
            autoAlpha: 1,
            rotation: -2,
            transformOrigin: "top center",
            ease: Back.easeOut
        }, .2).add("BaublesString").set(V, {
            autoAlpha: 0,
            scale: .3
        }).set(T, {autoAlpha: 1}).staggerFromTo(U, .2, {autoAlpha: 0, yPercent: -30}, {
            autoAlpha: 1,
            yPercent: 0
        }, .15).staggerFromTo(V, .2, {autoAlpha: 0, rotation: -10, transformOrigin: "top center"}, {
            autoAlpha: 1,
            rotation: 0,
            scale: 1,
            transformOrigin: "top center"
        }, .06).fromTo(ob, .3, {rotation: 10, autoAlpha: 0, transformOrigin: "top center"}, {
            rotation: 0,
            autoAlpha: 1,
            ease: Back.easeOut
        }).fromTo(pb, .3, {rotation: -10, autoAlpha: 0, transformOrigin: "top center"}, {
            rotation: 0,
            autoAlpha: 1,
            ease: Back.easeOut
        }, "-=0.15").to(t, 2, {strokeDashoffset: 0, ease: Power1.easeOut}).to(u, 2, {
            strokeDashoffset: 0,
            ease: Power1.easeOut
        }, "-=0.4").to([q, r], .5, {autoAlpha: 1}).set(s, {autoAlpha: 0}).add("snow").add(snowLeft, "snow").add(snowRight, "snow").add("presents").add(tlPresents, "snow"), tlMouseInTree = new TimelineMax({
            paused: !0,
            onComplete: c
        }), tlMouseInTree.set(L, {rotationY: 180, transformOrigin: "center bottom"}).to(L, .7, {
            xPercent: -50,
            yPercent: 80,
            ease: Power1.easeOut
        }).to(L, .3, {xPercent: -185, yPercent: 34, ease: Power1.easeIn, rotation: 45}).to(L, .1, {
            xPercent: -212,
            yPercent: -24,
            rotation: 90,
            autoAlpha: 0,
            ease: Linear.easeNone
        }).staggerFromTo([Z, _, ab, bb, cb, db], .1, {
            rotation: 0,
            transformOrigin: "top bottom",
            ease: RoughEase.easeInOut
        }, {
            rotation: 2,
            transformOrigin: "top bottom",
            ease: RoughEase.easeInOut,
            repeat: 4
        }, .05).to(l, .3, {autoAlpha: 1}, "+=0.5"), tlStar = new TimelineMax({paused: !0}), tlStar.set(W, {autoAlpha: 1}).fromTo(W, .4, {yPercent: -600}, {
            yPercent: 0,
            ease: Power4.easeOut
        }).fromTo(jb, .6, {xPercent: 100}, {
            xPercent: 0,
            ease: Power2.easeInOut
        }, "+=0.3").fromTo(kb, .8, {xPercent: -100}, {
            xPercent: 0,
            ease: Linear.easeNone
        }).fromTo(lb, .6, {xPercent: 100}, {xPercent: 0, ease: Power2.easeInOut}).fromTo(nb, .8, {
            scale: 1.5,
            autoAlpha: 0,
            x: -10,
            y: -10
        }, {scale: 1, autoAlpha: 1, x: 0, y: 0, ease: Back.easeOut}).fromTo(mb, .8, {
            scale: 1.5,
            autoAlpha: 0,
            x: -10,
            y: -10
        }, {
            scale: 1,
            autoAlpha: 1,
            x: 0,
            y: 0,
            ease: Back.easeOut,
            onComplete: b
        }, "-=0.4"), tlMouseAway = new TimelineMax({paused: !0}), tlMouseAway.to([l, pb], .2, {
            autoAlpha: 0,
            scale: .5,
            ease: Power1.easeIn
        }).set(L, {
            rotationY: "0",
            xPercent: -162,
            yPercent: 16,
            transformOrigin: "center center"
        }).staggerFromTo([cb, bb, ab, _, Z], .1, {
            rotation: 0,
            transformOrigin: "top bottom",
            ease: RoughEase.easeInOut
        }, {
            rotation: 2,
            transformOrigin: "top bottom",
            ease: RoughEase.easeInOut,
            repeat: 4
        }, .05).to(L, .3, {
            xPercent: -162,
            yPercent: 46,
            rotation: "45",
            autoAlpha: 1,
            ease: Power1.easeIn
        }, "+=0.2").to(L, .3, {
            xPercent: -162,
            yPercent: 66,
            rotation: "0",
            ease: Linear.easeNone
        }).to(N, .2, {
            scale: .5,
            autoAlpha: 0,
            x: "+=10",
            y: "+=10",
            transformOrigin: "top center"
        }).fromTo(M, .5, {scale: .2, autoAlpha: 0}, {
            scale: .5,
            autoAlpha: 1,
            transformOrigin: "bottom center"
        }, "-=0.2"), l.mouseenter(function () {
            tlMouseAway.play()
        });
        var d = new TimelineMax;
        return d.add(tlClear).add(tlIntro, "intro").add(tlBlink, "intro").add(tlOutline, "intro+=6").add(tlTree, "intro+=9").add(tlTreeGrow, "intro+=12"), d.play(), d
    }

    function c() {
        b()
    }

    CSSPlugin.defaultSmoothOrigin = !1, $(".bcgAlign").focusPoint(), $bcgMaster = $("#bcg-01 img"), p = $("#xmas, #intro, #windowOutlines");
    var d = $bcgMaster.width(), e = $bcgMaster.height(), f = $bcgMaster.css("top"), g = $bcgMaster.css("left");
    a(d, e, f, g), $(window).resize(function () {
        setTimeout(function () {
            d = $bcgMaster.width(), e = $bcgMaster.height(), f = $bcgMaster.css("top"), g = $bcgMaster.css("left"), a(d, e, f, g)
        }, 200)
    });
    var h = $("#intro"), i = $("#outline"), j = $("#MouseDarkBlack"), k = $("#MouseDark"), l = $("#MouseInTree"), m = $(".eyelid"), n = $(".nose"), o = $(".eyeBulb"), p = ($(".eyes"), $("#xmas")), q = $("#WindowRight"), r = $("#WindowLeft"), s = $("#windowOutlines"), t = $("#windowLeftOutline"), u = $("#windowRightOutline"), v = $("#Snowflakes"), w = $("#SnowflakesB"), x = $("#SnowflakesC"), y = $("#Snowflakes_1_A"), z = $("#Snowflakes_1_B"), A = $("#Snowflakes_1_C"), B = $(".snowflake"), C = $("#ShadowTree"), D = ($("#XmasTree"), $("#Presents")), E = $(".box"), F = $("#PresentA"), G = $("#PresentB"), H = $("#PresentC"), I = $("#PresentOpen"), J = $("#StarLight"), K = $("#StarLight circle"), L = $("#MouseRight"), M = $("#mouseRightHover"), N = $("#MouseRightSmall"), O = $("#MouseLeft"), P = $("#BaublesStriped"), Q = $("#BaublesStriped g"), R = $("#BaublesFlat"), S = $("#BaublesFlat circle"), T = $("#BaublesString"), U = $("#BaublesString g"), V = $("#BaublesString circle"), W = ($("#Merry"), $("#RibbonBack"), $("#Christmas"), $("#Star")), X = $("#Trunk"), Y = $("#Tree"), Z = $("#TreePart_1"), _ = $("#TreePart_2"), ab = $("#TreePart_3"), bb = $("#TreePart_4"), cb = $("#TreePart_5"), db = $("#TreePart_6"), eb = $("#logoIcon"), fb = $("#socialLinks"), gb = $(".sIcon"), hb = $(".sIcon path"), ib = $("#mouseClick"), jb = $("#MaskMerry"), kb = $("#MaskBack"), lb = $("#MaskFront"), mb = $("#txtChristmas"), nb = $("#txtMerry"), ob = $("#Lolypop1"), pb = $("#Lolypop2"), qb = $(".socialLinkP"), rb = $("#carbonads-container");
    tlJumpPresent = new TimelineMax({paused: !0}), E.mouseenter(function () {
        $PresentBox = $(this).find(".PresentBox"), $PresentBoxShadow = $(this).find(".PresentBoxShadow"), tlJumpPresent.to($PresentBox, .5, {
            scaleX: .8,
            transformOrigin: "bottom center",
            y: -20,
            ease: Power4.easeInOut
        }).to($PresentBox, .2, {
            scaleX: 1,
            transformOrigin: "bottom center",
            y: 0,
            ease: Bounce.easeOut
        }).to($PresentBoxShadow, .5, {
            scaleX: .8,
            transformOrigin: "bottom center",
            ease: Power4.easeInOut
        }, "0").to($PresentBoxShadow, .2, {
            scaleX: 1,
            transformOrigin: "bottom center",
            ease: Bounce.easeOut
        }, "0.5"), tlJumpPresent.play()
    }), E.click(function () {
        function a(a) {
            $(a).unbind("mouseenter click"), $(a).css("cursor: default")
        }

        event.preventDefault(), $thisBox = this, $PresentBoxRibbon = $(this).find(".PresentBoxRibbon"), $PresentBoxTop = $(this).find(".boxTop"), $PresentBoxTopShadow = $(this).find(".boxTopShadow"), $PresentRibbonSide = $(this).find(".ribbonSide"), qb = $(this).find(".socialLinkP"), tlOpenPresent = new TimelineMax({paused: !0}), tlOpenPresent.to($PresentBoxRibbon, .4, {
            yPercent: 252,
            ease: Power4.easeInOut
        }).to($PresentBoxTop, .4, {
            yPercent: -80,
            ease: Power4.easeOut
        }, "0").to($PresentBoxTopShadow, .2, {autoAlpha: 0}, "0").to($PresentRibbonSide, .4, {
            scaleY: .3,
            transformOrigin: "bottom center",
            onComplete: a,
            onCompleteParams: [$thisBox]
        }, "0.2").to($PresentBoxTop, .4, {
            rotation: -90,
            transformOrigin: "left center",
            ease: Power4.easeInOut
        }, "0").to($PresentBoxTop, .3, {
            yPercent: 400,
            transformOrigin: "left center",
            ease: Bounce.easeOut
        }, "0.4").to($PresentBoxTop, .4, {
            rotation: -180,
            transformOrigin: "left center",
            ease: Power4.easeIn
        }, "0.7").to(qb, .6, {
            scale: 1.4,
            yPercent: -130,
            transformOrigin: "top center",
            ease: Power4.easeInOut
        }, "-=0.4"), tlOpenPresent.play()
    }), ib.click(function () {
        event.preventDefault(), tlLogos.stop(), tlDecoration.play()
    }), c()
});