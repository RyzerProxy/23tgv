(function(t) {
    function e(e) {
        for (var n, o, r = e[0], c = e[1], l = e[2], d = 0, A = []; d < r.length; d++)
            o = r[d],
            Object.prototype.hasOwnProperty.call(i, o) && i[o] && A.push(i[o][0]),
            i[o] = 0;
        for (n in c)
            Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
        u && u(e);
        while (A.length)
            A.shift()();
        return s.push.apply(s, l || []),
        a()
    }
    function a() {
        for (var t, e = 0; e < s.length; e++) {
            for (var a = s[e], n = !0, r = 1; r < a.length; r++) {
                var c = a[r];
                0 !== i[c] && (n = !1)
            }
            n && (s.splice(e--, 1),
            t = o(o.s = a[0]))
        }
        return t
    }
    var n = {}
      , i = {
        app: 0
    }
      , s = [];
    function o(e) {
        if (n[e])
            return n[e].exports;
        var a = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, o),
        a.l = !0,
        a.exports
    }
    o.m = t,
    o.c = n,
    o.d = function(t, e, a) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }
    ,
    o.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(t, e) {
        if (1 & e && (t = o(t)),
        8 & e)
            return t;
        if (4 & e && "object" === typeof t && t && t.__esModule)
            return t;
        var a = Object.create(null);
        if (o.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var n in t)
                o.d(a, n, function(e) {
                    return t[e]
                }
                .bind(null, n));
        return a
    }
    ,
    o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        }
        : function() {
            return t
        }
        ;
        return o.d(e, "a", e),
        e
    }
    ,
    o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    o.p = "";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || []
      , c = r.push.bind(r);
    r.push = e,
    r = r.slice();
    for (var l = 0; l < r.length; l++)
        e(r[l]);
    var u = c;
    s.push([0, "chunk-vendors"]),
    a()
}
)({
    0: function(t, e, a) {
        t.exports = a("56d7")
    },
    "034f": function(t, e, a) {
        "use strict";
        var n = a("474b")
          , i = a.n(n);
        i.a
    },
    "0cbf": function(t, e, a) {
        "use strict";
        var n = a("6211")
          , i = a.n(n);
        i.a
    },
    "14c2": function(t, e) {
        t.exports = "data:image/png;base64,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"
    },
    "22ab": function(t, e, a) {},
    2818: function(t, e, a) {
        "use strict";
        var n = a("998c")
          , i = a.n(n);
        i.a
    },
    2998: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAoFJREFUWEftlzGL1EAUx9/bZBE7C21E5QRlG4vszIRlEfGEs7DSRivBu0bwG4gW7oFy2CgoKFro2boWfgI9G2GXzOw2NmJxiJ2IWO7CzpMJyRJDspNkc1aXKsm8ef9f3pu8N4OQuDqdzrHpdHrccZwDyfe2+yAIdmw2eeMYD3DO3wLA1QqOdqSUF9LzhBCrRcBCAM75awBYryBupuQCENERKWV/kV9kjK0jogEAInrluu7D4XD4tSLMfJqJABF9BIBriyCQc/4MAG7lfUlVkASAcZELYQAMpaHdVEr1qgpmrYEoAvFQJsT/BMiMRG0AQoiLANDSWrcQsWXuAeBERkT/icTSAIyx6wBwAxHXSqRvDlEZoN1uC8dxnhORKCGcNA0hKgH4vr+mtX4DAEcris8XZmkAIcRlIjLFpbmkeLgoSwF0u92Dk8nkEyL6dYiXTgFj7D4i3q1L3PgpHAHGGEfEoID4NwD4Edmt1vYbCiFeENHNlMPfRPSh0Wi801oHSikjHl6pUpxbDQtFIOPrTf/va637o9HoZ1ZUMgCql2LG2B1EfBB1zA2l1LYtFbU2I875CAC82Wx2cjwe79rEUymwtuOF3dDzvEOO45hcn07m2AYRRcC+IbG1Y9/3Pa31OSnlU5tocjxvS8YY6yHieWNrtnLWRcg5vyKlfF9GfJFtBHAvAkArQF3CsZ99gP0IZEUgPhFtSyk36l50aX+JE9gXKeUZ8xdsAcBtANgloi2l1Mu9gGCMnQKAJ4h4KSrpPaXUZnw0Mw3l8F4IZ/kkos9KqbPhfiA2WOJwWoqbiB43m81Hg8Eg3DPMAcyD53krruuulPJY0JiIfgHAdynln+SUvyTw5wy+QUvVAAAAAElFTkSuQmCC"
    },
    "2d71": function(t, e, a) {
        "use strict";
        var n = a("d9a3")
          , i = a.n(n);
        i.a
    },
    "474b": function(t, e, a) {},
    "56d7": function(t, e, a) {
        "use strict";
        a.r(e);
        a("e260"),
        a("e6cf"),
        a("cca6"),
        a("a79d");
        var n = a("2b0e")
          , i = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                attrs: {
                    id: "app"
                },
                on: {
                    click: t.isTimeOut
                }
            }, [t.isRouterAlive ? a("router-view") : t._e()], 1)
        }
          , s = []
          , o = {
            name: "App",
            provide: function() {
                return {
                    reload: this.reload
                }
            },
            data: function() {
                return {
                    isRouterAlive: !0,
                    lastTime: null,
                    currentTime: null,
                    timeOut: 36e5
                }
            },
            created: function() {
                this.lastTime = (new Date).getTime()
            },
            methods: {
                isTimeOut: function() {
                    this.currentTime = (new Date).getTime(),
                    this.currentTime - this.lastTime > this.timeOut ? (console.log("时间到"),
                    window.location.href = this.$hose_base_url) : this.lastTime = (new Date).getTime()
                },
                reload: function() {
                    this.isRouterAlive = !1,
                    this.$nextTick((function() {
                        this.isRouterAlive = !0
                    }
                    ))
                }
            }
        }
          , r = o
          , c = (a("034f"),
        a("2877"))
          , l = Object(c["a"])(r, i, s, !1, null, null, null)
          , u = l.exports
          , d = (a("1951"),
        a("450d"),
        a("eedf"))
          , A = a.n(d)
          , f = (a("425f"),
        a("4105"))
          , h = a.n(f)
          , g = (a("eca7"),
        a("3787"))
          , m = a.n(g)
          , p = (a("7a0f"),
        a("0f6c"))
          , v = a.n(p)
          , C = (a("f4f9"),
        a("c2cc"))
          , b = a.n(C)
          , w = (a("10cb"),
        a("f3ad"))
          , y = a.n(w)
          , x = (a("aaa5"),
        a("a578"))
          , B = a.n(x)
          , E = (a("4ca3"),
        a("443e"))
          , D = a.n(E)
          , S = (a("ce18"),
        a("f58e"))
          , L = a.n(S)
          , k = (a("8bd8"),
        a("4cb2"))
          , I = a.n(k)
          , T = (a("cb70"),
        a("b370"))
          , Q = a.n(T)
          , j = (a("960d"),
        a("defb"))
          , R = a.n(j)
          , O = (a("bd49"),
        a("18ff"))
          , V = a.n(O)
          , F = (a("a7cc"),
        a("df33"))
          , N = a.n(F)
          , z = (a("be4f"),
        a("896a"))
          , W = a.n(z)
          , M = (a("38a0"),
        a("ad41"))
          , J = a.n(M)
          , U = (a("5466"),
        a("ecdf"))
          , Z = a.n(U)
          , G = (a("b8e0"),
        a("a4c4"))
          , H = a.n(G)
          , K = (a("826b"),
        a("c263"))
          , q = a.n(K)
          , Y = (a("672e"),
        a("101e"))
          , P = a.n(Y)
          , X = (a("1f1a"),
        a("4e4b"))
          , _ = a.n(X)
          , $ = (a("6611"),
        a("e772"))
          , tt = a.n($)
          , et = (a("cbb5"),
        a("8bbc"))
          , at = a.n(et)
          , nt = (a("f225"),
        a("89a9"))
          , it = a.n(nt)
          , st = (a("075a"),
        a("72aa"))
          , ot = a.n(st)
          , rt = (a("e612"),
        a("dd87"))
          , ct = a.n(rt)
          , lt = (a("b5d8"),
        a("f494"))
          , ut = a.n(lt)
          , dt = (a("3c52"),
        a("0d7b"))
          , At = a.n(dt)
          , ft = (a("fe07"),
        a("6ac5"))
          , ht = a.n(ft)
          , gt = (a("560b"),
        a("dcdc"))
          , mt = a.n(gt)
          , pt = (a("d4df"),
        a("7fc1"))
          , vt = a.n(pt)
          , Ct = (a("4ffc"),
        a("946e"))
          , bt = a.n(Ct)
          , wt = (a("28b2"),
        a("c7ad"))
          , yt = a.n(wt)
          , xt = (a("9d4c"),
        a("e450"))
          , Bt = a.n(xt)
          , Et = (a("acb6"),
        a("c673"))
          , Dt = a.n(Et)
          , St = (a("06f1"),
        a("6ac9"))
          , Lt = a.n(St)
          , kt = (a("e960"),
        a("b35b"))
          , It = a.n(kt)
          , Tt = (a("5e32"),
        a("6721"))
          , Qt = a.n(Tt)
          , jt = (a("0c67"),
        a("299c"))
          , Rt = a.n(jt)
          , Ot = (a("e3ea"),
        a("7bc3"))
          , Vt = a.n(Ot)
          , Ft = (a("915d"),
        a("e04d"))
          , Nt = a.n(Ft);
        n["default"].use(A.a).use(h.a).use(m.a).use(v.a).use(b.a).use(y.a).use(B.a).use(D.a).use(L.a).use(I.a).use(Q.a).use(R.a).use(V.a).use(N.a).use(W.a).use(J.a).use(Z.a).use(H.a).use(q.a).use(P.a).use(_.a).use(tt.a).use(at.a).use(it.a).use(ot.a).use(ct.a).use(ut.a).use(At.a).use(ht.a).use(mt.a).use(vt.a).use(bt.a).use(yt.a).use(Bt.a).use(Dt.a).use(Lt.a).use(It.a).use(Qt.a).use(Rt.a).use(Vt.a).use(Nt.a);
        var zt = a("b2d8")
          , Wt = a.n(zt)
          , Mt = (a("64e1"),
        a("8c4f"))
          , Jt = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "box loginDiv",
                attrs: {
                    id: "Top"
                }
            }, ["" != t.noticeData ? n("el-card", {
                staticClass: "box-card"
            }, [n("div", {
                staticClass: "clearfix",
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [n("span", [t._v("tips")]), n("el-button", {
                staticStyle: {
                    float: "right",
                    padding: "3px 0"
                },
                attrs: {
                    type: "text"
                },
                on: {
                    click: function(e) {
                        t.noticeData = ""
                    }
                }
            }, [t._v("close")])], 1), n("div", {
                staticClass: "noticeData",
                domProps: {
                    innerHTML: t._s(t.noticeData)
                }
            })]) : t._e(), n("section", [n("div", {
                ref: "msg-box",
                staticClass: "chatListView flex justifyCenter",
                attrs: {
                    id: "chatListView"
                }
            }, [0 == t.allQuestionList.length ? n("div", {
                staticClass: "chatList noChatList"
            }, [n("div", {
                staticClass: "title"
            }, [t._v("ChatGPT")]), n("div", {
                staticClass: "intro",
                staticStyle: {
                    "margin-bottom": "20px",
                    "font-weight": "normal"
                }
            }, [t._v("ChatGPT is a chatbot model based on GPT-3 (Generative Pre-trained Transformer). GPT-3 is a large pre-trained language model that can perform various natural language processing tasks, such as text generation, question answering, translation, by adjusting the model’s parameters after being pre-trained on a large amount of text data. ChatGPT is a special application for chatbots that simulates human conversations and attempts to answer users’ questions or provide suggestions.")]), n("div", {
                staticClass: "intro",
                staticStyle: {
                    "margin-bottom": "20px"
                }
            }, [t._v("Disclaimer: This website strictly prohibits the use of its services by citizens or residents of the People’s Republic of China. Any access or use of this site by individuals from China is unauthorized and strictly prohibited. The website is not responsible for any consequences, damages, or legal actions arising from any unauthorized use of its services by Chinese citizens or residents. By accessing this website, you agree to abide by this disclaimer and acknowledge that you are not a citizen or resident of China.")]), n("div", {
                staticClass: "intro"
            }, [t._v("免责声明：本网站严禁中华人民共和国公民或居民使用其服务。任何来自中国的个人访问或使用本网站均为未经授权且严格禁止。本网站对中国公民或居民未经授权使用其服务所引起的任何后果、损害或法律行动不承担任何责任。通过访问本网站，您同意遵守本免责声明并确认您不是中国公民或居民。")]), n("div", {
                staticClass: "fucBtn",
                on: {
                    click: t.inputFocusBtn
                }
            }, [t._v("Click the text box below and try it~")])]) : n("section", {
                staticClass: "chatList"
            }, t._l(t.allQuestionList, (function(e, i) {
                return n("div", {
                    key: i,
                    staticClass: "chatLi"
                }, [n("div", {
                    staticClass: "chatLiContent flex justifyCenter"
                }, [n("div", {
                    staticClass: "chatLiContentDiv flex justifyCenter"
                }, [n("img", {
                    staticClass: "left",
                    attrs: {
                        src: a("bb36"),
                        alt: ""
                    }
                }), n("div", {
                    staticClass: "contentDiv"
                }, [n("div", {
                    staticClass: "questionContent"
                }, [t._v(t._s(e.detail.question))])])])]), n("div", {
                    staticClass: "chatLiContent answerChatLiContent flex justifyCenter"
                }, [n("div", {
                    staticClass: "chatLiContentDiv flex justifyCenter"
                }, [n("img", {
                    staticClass: "left",
                    attrs: {
                        src: a("14c2"),
                        alt: ""
                    }
                }), n("div", {
                    staticClass: "contentDiv"
                }, [i == t.allQuestionList.length - 1 && "" == e.detail.answer ? n("div", [n("span", {
                    staticClass: "blinkCursor"
                }), n("div", {
                    staticClass: "redWarnWords"
                }, [t._v(t._s(t.gptRateLimiting))])]) : n("div", {
                    staticClass: "content"
                }, [n("MavonEditorShowDiv", {
                    staticClass: "queryListContent",
                    attrs: {
                        mavonEditorValue: e.detail.answer
                    }
                })], 1)]), n("div", {
                    staticClass: "rightFucBtn"
                }, [i < t.allQuestionList.length - 1 || "" != e.detail.answer && t.sureSubmitLoading ? n("div", {
                    staticClass: "flex"
                }, [2 != e.detail.liskIconStatus ? n("div", {
                    staticClass: "imgDiv"
                }, [n("img", {
                    attrs: {
                        src: 1 == e.detail.liskIconStatus ? a("a96b") : a("a080"),
                        alt: ""
                    },
                    on: {
                        click: function(a) {
                            return t.islikeIcon("lisk", i, e)
                        }
                    }
                })]) : t._e(), 1 != e.detail.liskIconStatus ? n("div", {
                    staticClass: "imgDiv unLikeImg"
                }, [n("img", {
                    attrs: {
                        src: 2 == e.detail.liskIconStatus ? a("cb98") : a("a080"),
                        alt: ""
                    },
                    on: {
                        click: function(a) {
                            return t.islikeIcon("no", i, e)
                        }
                    }
                })]) : t._e(), e.detail.share_code ? n("div", {
                    staticClass: "imgDiv"
                }, [n("img", {
                    staticClass: "shareIcon",
                    attrs: {
                        "data-clipboard-text": (e.detail.share_host ? e.detail.share_host : t.$hose_base_url) + "#/questionDetail?code=" + e.detail.share_code,
                        src: a("2998"),
                        alt: ""
                    },
                    on: {
                        click: function(e) {
                            return t.shareIcon(".shareIcon")
                        }
                    }
                })]) : t._e()]) : t._e()])])])])
            }
            )), 0)]), n("div", {
                staticClass: "fucView flex justifyCenter"
            }, [n("div", {
                staticClass: "formView flex justifyCenter alignCenter"
            }, [n("el-input", {
                ref: "inputDiv",
                staticClass: "textarea",
                attrs: {
                    type: "textarea",
                    autosize: "",
                    placeholder: "Send a message...",
                    rows: 1
                },
                nativeOn: {
                    keydown: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.carriageReturn(e)
                    }
                },
                model: {
                    value: t.question,
                    callback: function(e) {
                        t.question = e
                    },
                    expression: "question"
                }
            }), t.sureSubmitLoading ? n("i", {
                staticClass: "el-icon-s-promotion",
                on: {
                    click: t.sureSendWay
                }
            }) : n("div", {
                staticClass: "flex justifyCenter threePointLoadingView"
            }, [n("ThreePointLoadingDiv")], 1)], 1)])]), n("section", {
                staticClass: "fixedDiv"
            }, [t.allDataShareCode ? n("div", {
                staticClass: "allDataShareIcon option-box flex justifyCenter alignCenter",
                attrs: {
                    "data-clipboard-text": (t.allQuestionList[0].detail.share_host ? t.allQuestionList[0].detail.share_host : t.$hose_base_url) + "#/questionDetail?code=" + t.allDataShareCode
                },
                on: {
                    click: function(e) {
                        return t.shareIcon(".allDataShareIcon")
                    }
                }
            }, [n("img", {
                staticClass: "shareIcon",
                attrs: {
                    src: a("2998"),
                    alt: ""
                }
            }), t._m(0)]) : t._e(), n("div", {
                staticClass: "option-box-div"
            }, [t.backtopBtnShow ? n("div", {
                staticClass: "option-box flex justifyCenter alignCenter"
            }, [n("v-backtopBtn", {
                on: {
                    fatherSetTop: t.fatherSetTop
                }
            })], 1) : t._e()])])], 1)
        }
          , Ut = [function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("p", [t._v("share"), a("br"), t._v("chat")])
        }
        ]
          , Zt = (a("caad"),
        a("2532"),
        a("159b"),
        a("0fb7"),
        a("f529"))
          , Gt = a.n(Zt);
        a("9e1f"),
        a("6ed5");
        function Ht(t) {
            return Gt.a.warning(t)
        }
        function Kt(t, e) {
            e = isNaN(e) ? 2e3 : e;
            var a = document.createElement("div");
            a.innerHTML = t,
            a.style.cssText = "padding:5px 20px;color: rgb(255, 255, 255);line-height: 20px;text-align: center;border-radius: 15px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 14px;",
            document.body.appendChild(a),
            setTimeout((function() {
                var t = .5;
                a.style.webkitTransition = "-webkit-transform " + t + "s ease-in, opacity " + t + "s ease-in",
                a.style.opacity = "0",
                setTimeout((function() {
                    document.body.removeChild(a)
                }
                ), 1e3 * t)
            }
            ), e)
        }
        var qt = function() {
            var t = this
              , e = t.$createElement;
            t._self._c;
            return t._m(0)
        }
          , Yt = [function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "loading"
            }, [a("div"), a("div"), a("div")])
        }
        ]
          , Pt = {
            name: "threePointLoadingDiv"
        }
          , Xt = Pt
          , _t = (a("0cbf"),
        Object(c["a"])(Xt, qt, Yt, !1, null, "47b11699", null))
          , $t = _t.exports
          , te = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("mavon-editor", {
                ref: "docDetaileNode",
                staticStyle: {
                    "min-height": "0px",
                    "min-width": "0px"
                },
                attrs: {
                    subfield: !1,
                    editable: !1,
                    ishljs: !0,
                    "box-shadow-style": "0 0 0 0 rgba(0,0,0,0)",
                    "default-open": "preview",
                    "toolbars-flag": !1
                },
                model: {
                    value: t.mavonEditorValue,
                    callback: function(e) {
                        t.mavonEditorValue = e
                    },
                    expression: "mavonEditorValue"
                }
            })
        }
          , ee = []
          , ae = {
            name: "MavonEditorShowDiv",
            props: ["mavonEditorValue"],
            created: function() {},
            mounted: function() {},
            methods: {}
        }
          , ne = ae
          , ie = (a("2d71"),
        Object(c["a"])(ne, te, ee, !1, null, null, null))
          , se = ie.exports
          , oe = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("a", {
                staticClass: "set_top_box",
                on: {
                    click: t.setTop
                }
            }, [t._m(0), n("img", {
                staticClass: "shareIcon el-icon-bottom",
                attrs: {
                    src: a("9905")
                }
            })])
        }
          , re = [function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("p", [t._v("返回"), a("br"), t._v("底部")])
        }
        ]
          , ce = {
            props: {
                getText: {
                    type: String,
                    default: function() {
                        return ""
                    }
                }
            },
            methods: {
                setTop: function() {
                    this.$emit("fatherSetTop")
                }
            }
        }
          , le = ce
          , ue = (a("826b2"),
        Object(c["a"])(le, oe, re, !1, null, "558b6000", null))
          , de = ue.exports
          , Ae = a("b311")
          , fe = a.n(Ae)
          , he = {
            components: {
                ThreePointLoadingDiv: $t,
                MavonEditorShowDiv: se,
                vBacktopBtn: de
            },
            inject: ["reload"],
            data: function() {
                return {
                    backtopBtnShow: !1,
                    lastTime: 0,
                    question: "",
                    parent_id: "0",
                    session_id: "",
                    user_fake_id: "",
                    allQuestionList: [],
                    sureSubmitLoading: !0,
                    gptRateLimiting: "",
                    noticeData: "",
                    streamingDataStr: {
                        str_: "",
                        i: 0,
                        nowAnswer: ""
                    },
                    allDataShareCode: ""
                }
            },
            created: function() {
                this.session_id = this.setRandomNumberWay(),
                localStorage.getItem("chatgptproxy_gpt_tool_fake_id") ? (this.user_fake_id = localStorage.getItem("chatgptproxy_gpt_tool_fake_id"),
                this.chatHeartWay()) : this.setUserId(),
                this.getChatNotice()
            },
            mounted: function() {
                this.getClientHeight(),
                window.addEventListener("scroll", this.handleScroll, !0)
            },
            methods: {
                getClientHeight: function() {
                    document.getElementById("Top").style.height = document.documentElement.clientHeight + "px",
                    document.getElementById("chatListView").style.height = document.documentElement.clientHeight - 80 + "px",
                    this.inputFocusBtn()
                },
                chatHeartWay: function() {
                    var t = this
                      , e = function e() {
                        t.$jsonPost(t.$axiosUrl.chatHeart, {
                            data: {
                                user_fake_id: t.user_fake_id,
                                session_id: t.session_id
                            }
                        }).then((function() {
                            t.heartPollingTimeout = setTimeout((function() {
                                e()
                            }
                            ), 1e4)
                        }
                        )).catch((function(t) {
                            console.log(t),
                            ("ECONNABORTED" == t.code || "Network Error" == t.message || t.message.includes("timeout") || t.message.includes("code 502")) && (console.log("chatHeart--catch"),
                            e())
                        }
                        ))
                    };
                    e()
                },
                setRandomNumberWay: function() {
                    for (var t, e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], a = "", n = 0; n < 16; n++)
                        t = Math.floor(36 * Math.random()),
                        a += e[t];
                    return a
                },
                getChatNotice: function() {
                    var t = this;
                    setTimeout((function() {
                        t.$jsonPost(t.$axiosUrl.chatNotice, {
                            data: {
                                user_fake_id: t.user_fake_id,
                                session_id: t.session_id,
                                host: t.$hose_base_url
                            }
                        }).then((function(e) {
                            t.noticeData = e.resp_data.notice
                        }
                        ))
                    }
                    ), 6e4)
                },
                inputFocusBtn: function() {
                    this.$refs.inputDiv.focus()
                },
                setUserId: function() {
                    var t = this;
                    this.user_fake_id = t.setRandomNumberWay(),
                    localStorage.setItem("chatgptproxy_gpt_tool_fake_id", t.setRandomNumberWay()),
                    this.chatHeartWay()
                },
                islikeIcon: function(t, e, a) {
                    console.log(a);
                    var n = this;
                    if (0 == a.detail.liskIconStatus) {
                        var i = {
                            chat_id: a.chat_id || 0,
                            label: "lisk" == t ? 1 : -1,
                            user_fake_id: n.user_fake_id
                        };
                        n.$jsonPost(n.$axiosUrl.chatLabel, {
                            data: i
                        }).then((function() {
                            n.$set(n.allQuestionList[e].detail, "liskIconStatus", "lisk" == t ? 1 : 2),
                            Kt("lisk" == t ? "Wow! It's so great to receive your approval, I'm really happy about it~" : "Bummer, I'm sorry that my answer didn't satisfy you, but I'll keep trying my best~")
                        }
                        ))
                    }
                },
                shareIcon: function(t) {
                    var e = new fe.a(t);
                    e.on("success", (function() {
                        Kt("Copied to clipboard, go ahead and share it~"),
                        e.destroy()
                    }
                    )),
                    e.on("error", (function() {
                        Ht("This device does not support automatic copying!"),
                        e.destroy()
                    }
                    ))
                },
                inputWay: function(t) {
                    this.question = t
                },
                carriageReturn: function() {
                    var t = window.event || arguments[0];
                    if ("Enter" == t.key && "Enter" == t.code && 13 == t.keyCode) {
                        if (!t.metaKey)
                            return t.returnValue = !1,
                            this.carriageReturnThrottle(),
                            console.log(this.question),
                            !1;
                        this.question = this.question + "\n",
                        console.log(this.question)
                    }
                },
                carriageReturnThrottle: function() {
                    var t = this
                      , e = (new Date).valueOf();
                    0 == this.lastTime ? (console.log("触发事件"),
                    this.lastTime = e,
                    t.sureSendWay()) : e - this.lastTime > 2e3 ? (this.lastTime = e,
                    console.log("间隔大于2秒，可以试试触发方法"),
                    t.sureSendWay()) : console.log("不触发")
                },
                sureSendWay: function() {
                    var t = this;
                    if (console.log(t.question),
                    t.sureSubmitLoading && t.question) {
                        console.log("允许提交问题");
                        var e = {
                            parent_id: t.parent_id,
                            session_id: t.session_id,
                            question: t.question,
                            user_fake_id: t.user_fake_id
                        };
                        console.log(e),
                        t.streamingDataStr.nowAnswer = "",
                        t.streamingDataStr.str_ = "",
                        t.streamingDataStr.i = 0,
                        console.log(t.streamingDataStr),
                        this.$refs.inputDiv.blur(),
                        t.$jsonPost(t.$axiosUrl.chatConversation, {
                            data: e
                        }).then((function(e) {
                            t.allQuestionList.push({
                                type: "no",
                                chat_id: e.resp_data.chat_id,
                                detail: {
                                    question: t.question,
                                    answer: "",
                                    share_code: "",
                                    share_host: "",
                                    status: 1,
                                    liskIconStatus: 0
                                }
                            }),
                            t.sureSubmitLoading = !1,
                            t.question = "",
                            setTimeout((function() {
                                t.scrollBottm()
                            }
                            ), 500),
                            t.parent_id = e.resp_data.chat_id,
                            console.log(e),
                            t.getChatResultWay(e.resp_data.chat_id)
                        }
                        )).catch((function(e) {
                            console.log(e),
                            Kt(e.code_msg),
                            t.sureSubmitLoading = !0
                        }
                        ))
                    }
                },
                getChatResultWay: function(t) {
                    var e = this
                      , a = {
                        chat_id: t,
                        user_fake_id: e.user_fake_id,
                        session_id: e.session_id
                    }
                      , n = function t() {
                        e.$jsonPost(e.$axiosUrl.chatResult, {
                            data: a
                        }).then((function(a) {
                            switch (e.gptRateLimiting = "",
                            a.resp_data.status) {
                            case 1:
                                e.streamingDataWay(a.resp_data, 1),
                                e.pollingTimeout = setTimeout((function() {
                                    t()
                                }
                                ), 1e3);
                                break;
                            case 2:
                                console.log("答案给了一半，之后就不再返回了"),
                                e.streamingDataWay(a.resp_data, 2),
                                Kt("ChatGPT has timed out, please ask again."),
                                e.sureSubmitLoading = !0,
                                clearTimeout(e.pollingTimeout);
                                break;
                            case 3:
                                console.log(a.resp_data.answer),
                                e.sureSubmitLoading = !0,
                                e.streamingDataWay(a.resp_data, 3),
                                clearTimeout(e.pollingTimeout);
                                break;
                            case 5:
                                e.gptRateLimiting = "ChatGPT is being throttled, retrying~",
                                e.pollingTimeout = setTimeout((function() {
                                    t()
                                }
                                ), 1e3);
                                break;
                            default:
                                e.sureSubmitLoading = !0,
                                Kt("Sorry, I didn't understand your meaning, please try asking in a different way~"),
                                clearTimeout(e.pollingTimeout),
                                e.$set(e.allQuestionList[e.allQuestionList.length - 1].detail, "answer", "抱歉，没有明白你的意思～"),
                                setTimeout((function() {
                                    e.scrollBottm()
                                }
                                ), 500);
                                break
                            }
                        }
                        )).catch((function(e) {
                            console.log(e),
                            ("ECONNABORTED" == e.code || "Network Error" == e.message || e.message.includes("timeout") || e.message.includes("code 502")) && (console.log("chatResult--catch"),
                            t())
                        }
                        ))
                    };
                    n()
                },
                streamingDataWay: function(t, e) {
                    var a, n = this;
                    if (n.streamingDataStr.nowAnswer = t.answer,
                    1 != e) {
                        if (n.$set(n.allQuestionList[n.allQuestionList.length - 1].detail, "share_code", t.share_code),
                        n.$set(n.allQuestionList[n.allQuestionList.length - 1].detail, "share_host", t.share_host),
                        n.allDataShareCode = t.share_code_all,
                        n.streamingDataStr.str_ = t.answer,
                        clearInterval(a),
                        n.$set(n.allQuestionList[n.allQuestionList.length - 1].detail, "answer", n.streamingDataStr.str_),
                        document.getElementsByClassName("v-show-content")[0]) {
                            var i = document.querySelectorAll(".result-streaming");
                            i.forEach((function(t) {
                                return t.classList.remove("result-streaming")
                            }
                            ))
                        }
                        setTimeout((function() {
                            n.scrollBottm()
                        }
                        ), 500)
                    } else
                        a = setInterval((function() {
                            if (n.streamingDataStr.str_.length < n.streamingDataStr.nowAnswer.length) {
                                n.streamingDataStr.str_ += n.streamingDataStr.nowAnswer[n.streamingDataStr.i++],
                                n.$set(n.allQuestionList[n.allQuestionList.length - 1].detail, "answer", n.streamingDataStr.str_);
                                var e = n.allQuestionList.length - 1
                                  , i = !!document.getElementsByClassName("v-show-content")[e] && document.getElementsByClassName("v-show-content")[e].classList.contains("result-streaming");
                                t.answer && document.getElementsByClassName("v-show-content")[e] && !i && (console.log("-------------" + i),
                                document.getElementsByClassName("v-show-content")[e].classList.add("result-streaming"))
                            } else
                                clearInterval(a),
                                n.$set(n.allQuestionList[n.allQuestionList.length - 1].detail, "answer", n.streamingDataStr.str_);
                            setTimeout((function() {
                                n.scrollBottm()
                            }
                            ), 500)
                        }
                        ), 100)
                },
                scrollBottm: function() {
                    var t = this
                      , e = t.$refs["msg-box"];
                    e && (e.scrollTop = e.scrollHeight,
                    t.$forceUpdate())
                },
                fatherSetTop: function() {
                    var t = this
                      , e = setInterval((function() {
                        var a = t.$refs["msg-box"];
                        if (a) {
                            var n = document.documentElement.clientHeight - 80
                              , i = a.scrollHeight - n
                              , s = Math.ceil(i / 10);
                            a.scrollTop = a.scrollTop + s,
                            a.scrollTop == i && clearInterval(e)
                        }
                    }
                    ), 10)
                },
                handleScroll: function() {
                    var t = this;
                    document.querySelector(".chatList") && this.$nextTick((function() {
                        var e = t.$refs["msg-box"];
                        if (e) {
                            var a = document.documentElement.clientHeight - 80
                              , n = e.scrollHeight - a;
                            e.scrollTop < n ? 0 == t.backtopBtnShow && (t.backtopBtnShow = !0) : 1 == t.backtopBtnShow && (t.backtopBtnShow = !1)
                        }
                    }
                    ))
                }
            },
            beforeDestroy: function() {
                clearTimeout(this.heartPollingTimeout),
                clearTimeout(this.pollingTimeout)
            }
        }
          , ge = he
          , me = (a("a59b"),
        a("66c9"),
        Object(c["a"])(ge, Jt, Ut, !1, null, "1c1121a7", null))
          , pe = me.exports
          , ve = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "box loginDiv",
                attrs: {
                    id: "Top"
                }
            }, [n("section", [n("div", {
                ref: "msg-box",
                staticClass: "chatListView flex justifyCenter",
                attrs: {
                    id: "chatListView"
                }
            }, [n("section", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: t.questionDetailLoading,
                    expression: "questionDetailLoading"
                }],
                staticClass: "chatList"
            }, t._l(t.questionDetailData, (function(e, i) {
                return n("div", {
                    key: i,
                    staticClass: "chatLi"
                }, [n("div", {
                    staticClass: "chatLiContent flex justifyCenter"
                }, [n("div", {
                    staticClass: "chatLiContentDiv flex justifyCenter"
                }, [n("img", {
                    staticClass: "left",
                    attrs: {
                        src: a("bb36"),
                        alt: ""
                    }
                }), n("div", {
                    staticClass: "contentDiv"
                }, [n("div", {
                    staticClass: "questionContent"
                }, [t._v(t._s(e.question))])])])]), n("div", {
                    staticClass: "chatLiContent answerChatLiContent flex justifyCenter"
                }, [n("div", {
                    staticClass: "chatLiContentDiv flex justifyCenter"
                }, [n("img", {
                    staticClass: "left",
                    attrs: {
                        src: a("14c2"),
                        alt: ""
                    }
                }), n("div", {
                    staticClass: "contentDiv"
                }, [n("div", {
                    staticClass: "content"
                }, [n("MavonEditorShowDiv", {
                    staticClass: "queryListContent",
                    attrs: {
                        mavonEditorValue: e.answer
                    }
                })], 1)])])])])
            }
            )), 0)]), n("div", {
                staticClass: "fucView flex justifyCenter"
            }, [n("div", {
                staticClass: "formView flex justifyBetween alignCenter"
            }, [n("div", {
                on: {
                    click: t.tryChatIndex
                }
            }, [t._v("If you have any questions, go ahead and give it a try >")]), n("el-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: t.tryChatIndex
                }
            }, [t._v("Try it now")])], 1)])])])
        }
          , Ce = []
          , be = (a("5319"),
        {
            components: {
                MavonEditorShowDiv: se
            },
            inject: ["reload"],
            data: function() {
                return {
                    code: "",
                    questionDetailLoading: !0,
                    questionDetailData: {}
                }
            },
            created: function() {
                this.code = this.$route.query.code,
                this.getChatDetail()
            },
            mounted: function() {
                this.getClientHeight()
            },
            methods: {
                getClientHeight: function() {
                    document.getElementById("Top").style.height = document.documentElement.clientHeight + "px",
                    document.getElementById("chatListView").style.height = document.documentElement.clientHeight - 80 + "px"
                },
                getChatDetail: function() {
                    var t = this;
                    t.$jsonPost(t.$axiosUrl.chatDetail, {
                        data: {
                            code: t.code
                        }
                    }).then((function(e) {
                        console.log(e),
                        t.questionDetailData = e.resp_data,
                        t.questionDetailLoading = !1
                    }
                    )).catch((function(e) {
                        console.log(e),
                        Kt(e.code_msg),
                        t.questionDetailLoading = !1
                    }
                    ))
                },
                tryChatIndex: function() {
                    this.$router.replace("/")
                }
            }
        })
          , we = be
          , ye = (a("2818"),
        Object(c["a"])(we, ve, Ce, !1, null, "6c1850e4", null))
          , xe = ye.exports;
        n["default"].use(Mt["a"]);
        var Be = [{
            path: "/",
            name: "ChatIndex",
            component: pe,
            meta: {
                auth: !1
            }
        }, {
            path: "/questionDetail",
            name: "QuestionDetail",
            component: xe,
            meta: {
                auth: !1
            }
        }]
          , Ee = new Mt["a"]({
            routes: Be
        })
          , De = Ee
          , Se = (a("d3b7"),
        a("96cf"),
        a("2f62"));
        function Le(t) {
            return sessionStorage.getItem(t)
        }
        function ke(t, e) {
            return sessionStorage.setItem(t, e)
        }
        function Ie(t) {
            return sessionStorage.removeItem(t)
        }
        n["default"].use(Se["a"]);
        var Te = new Se["a"].Store({
            state: {
                tagsList: [{
                    title: "首页",
                    path: "/home"
                }],
                baseInfo: {
                    token: ""
                },
                navMenus: []
            },
            mutations: {
                getBaseInfo: function(t, e) {
                    t.baseInfo = {
                        token: e.token
                    }
                },
                getNavMenus: function(t, e) {
                    t.navMenus = e
                },
                changeTags: function(t, e) {
                    t.tagsList = e
                }
            },
            actions: {
                GetBaseInfo: function(t, e) {
                    var a;
                    return regeneratorRuntime.async((function(n) {
                        while (1)
                            switch (n.prev = n.next) {
                            case 0:
                                return a = t.commit,
                                ke("researchToken", e.token),
                                a("getBaseInfo", {
                                    token: e.token
                                }),
                                n.abrupt("return", !0);
                            case 4:
                            case "end":
                                return n.stop()
                            }
                    }
                    ))
                },
                GetNavMenus: function(t, e) {
                    var a;
                    return regeneratorRuntime.async((function(n) {
                        while (1)
                            switch (n.prev = n.next) {
                            case 0:
                                return a = t.commit,
                                ke("navMenus", JSON.stringify(e)),
                                a("getNavMenus", {
                                    navMenus: e
                                }),
                                n.abrupt("return", !0);
                            case 4:
                            case "end":
                                return n.stop()
                            }
                    }
                    ))
                },
                ChangeTags: function(t, e) {
                    var a;
                    return regeneratorRuntime.async((function(n) {
                        while (1)
                            switch (n.prev = n.next) {
                            case 0:
                                return a = t.commit,
                                ke("tagsList", JSON.stringify(e)),
                                a("changeTags", {
                                    tagsList: e
                                }),
                                n.abrupt("return", !0);
                            case 4:
                            case "end":
                                return n.stop()
                            }
                    }
                    ))
                },
                LoginOut: function(t) {
                    var e;
                    return regeneratorRuntime.async((function(a) {
                        while (1)
                            switch (a.prev = a.next) {
                            case 0:
                                return e = t.commit,
                                Ie("researchToken"),
                                Ie("tagsList"),
                                Ie("navMenus"),
                                e("getBaseInfo", {
                                    token: ""
                                }),
                                e("changeTags", {
                                    tagsList: []
                                }),
                                a.abrupt("return", !0);
                            case 7:
                            case "end":
                                return a.stop()
                            }
                    }
                    ))
                }
            },
            modules: {}
        })
          , Qe = a("bc3a")
          , je = a.n(Qe)
          , Re = a("9c59")
          , Oe = a.n(Re);
        function Ve(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new Promise((function(a, n) {
                je.a.get(t, {
                    params: e,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                        token: Le("researchToken")
                    }
                }).then((function(t) {
                    200 === t.data.code ? a(t.data) : (n(t.data),
                    Gt.a.error(t.data.msg))
                }
                )).catch((function(t) {
                    n(t)
                }
                ))
            }
            ))
        }
        function Fe(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new Promise((function(a, n) {
                e = Oe.a.stringify(e),
                je.a.post(t, e, {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                        token: Le("researchToken")
                    }
                }).then((function(t) {
                    0 === t.data.code ? a(t.data) : (n(t.data),
                    Gt.a.error(t.data.msg))
                }
                )).catch((function(t) {
                    n(t),
                    Gt.a.error("网络出错，请重试！")
                }
                ))
            }
            ))
        }
        function Ne(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new Promise((function(a, n) {
                e = JSON.stringify(e),
                je.a.post(t, e, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + Le("researchToken")
                    }
                }).then((function(t) {
                    200 === t.data.code ? (a(t.data),
                    Gt.a.closeAll()) : n(t.data)
                }
                )).catch((function(t) {
                    n(t),
                    console.log(t),
                    console.log("http--catch "),
                    console.log(t.message)
                }
                ))
            }
            ))
        }
        function ze(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new Promise((function(a, n) {
                je.a.post(t, e, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        token: Le("researchToken")
                    }
                }).then((function(t) {
                    0 === t.data.code ? a(t.data) : (n(t.data),
                    Gt.a.error(t.data.msg))
                }
                )).catch((function(t) {
                    n(t),
                    Gt.a.error("网络出错，请重试！")
                }
                ))
            }
            ))
        }
        console.log(window.location.protocol + "//" + window.location.host),
        je.a.defaults.timeout = 3e6,
        je.a.defaults.baseURL = window.location.protocol + "//" + window.location.host,
        je.a.interceptors.request.use((function(t) {
            return t
        }
        ), (function(t) {
            return Promise.reject(t)
        }
        ));
        var We = {
            chatResult: "/api/v1/chat/result",
            chatConversation: "/api/v1/chat/conversation",
            chatHeart: "/api/v1/chat/heart",
            chatLabel: "/api/v1/chat/label",
            chatDetail: "/api/v1/chat/detail",
            chatNotice: "/api/v1/chat/notice"
        }
          , Me = a("323e")
          , Je = a.n(Me)
          , Ue = (a("a5d8"),
        {
            install: function(t) {
                t.directive("preventReClick", {
                    bind: function(t, e) {
                        var a;
                        t.addEventListener("click", (function(t) {
                            a ? t && t.stopImmediatePropagation() : a = setTimeout((function() {
                                a = null
                            }
                            ), e.value || 1e3)
                        }
                        ), !0)
                    }
                })
            }
        });
        n["default"].use(Wt.a),
        Je.a.configure({
            showSpinner: !1
        }),
        n["default"].config.productionTip = !1,
        n["default"].prototype.$post = Fe,
        n["default"].prototype.$get = Ve,
        n["default"].prototype.$jsonPost = Ne,
        n["default"].prototype.$uploadPost = ze,
        n["default"].prototype.$axiosUrl = We,
        n["default"].prototype.$hose_base_url = window.location.protocol + "//" + window.location.host + "/index.html",
        n["default"].use(Ue),
        n["default"].prototype.$bus = new n["default"],
        De.beforeEach((function(t, e, a) {
            Je.a.start(),
            a(),
            Je.a.done()
        }
        )),
        new n["default"]({
            router: De,
            store: Te,
            render: function(t) {
                return t(u)
            }
        }).$mount("#app")
    },
    6211: function(t, e, a) {},
    "66c9": function(t, e, a) {
        "use strict";
        var n = a("e2a1")
          , i = a.n(n);
        i.a
    },
    "826b2": function(t, e, a) {
        "use strict";
        var n = a("fb3e")
          , i = a.n(n);
        i.a
    },
    9905: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAcJJREFUWEftV7tKA0EUvWfyAdZ2YqlYZGcWBBux8gEiCH6Agp12VhaJhZWdVgr6AQFBBB+V2AhCZpJCtBQ7az8gc2XDbljCvmaTQmS3Gtg59545d+6eu6CSj1JqhZlPAjiAA631Q5lQKAMKMJ7nNQA0gzUzH3U6nf7a9RmFQBNAoyJQKVApUClQKfB/FVBKLVprp4QQotfrvXa73Y+40Xiel+kF9Xp9plarzVtrrRDiS2v9nGRUqWYkpdwjotMQ9CaE2Gi3259RkCwCvu9PW2tviGgu3L9vjDlzIqCU2mbmywjEzBrAujHmO7TjRAWklJPMfAtARVgAO1rrKycCgYRCiBYRzcaAL0S0Zoz5SVJASjlBRHdEtBDDvFtrt4ZLOCCXNUCkkHgiomVmPozPAwCOieiRiJaKJu9PU3kTTAqJe2ZuDxHwiWjVJXkhAsGmJBLMfA1gM/wODNYhgUzZ44fOVSDanKJEkoCFkxdWwIGEU3JnAmnlcJW9VAnioIRyOJ+8UBvmtSiArfASttL6PK/LCl/CvEBl3/8NAoHzlT3BKLjAIaGUOmfm3VEClcUCuICUkssGGAcOcVcbR0CXGMFf9S8DA0cTQLKqHgAAAABJRU5ErkJggg=="
    },
    "998c": function(t, e, a) {},
    a080: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAf1JREFUWEfF10uoTVEcx/HPnRnIQJlINxMTBupS8iomXmV4lYFHKcVAyWuIoWcZKOqWbt0kysDEY0LyGjC5RTKgGCgpoUwM6F9rXfse97D3Pufs/a9Tu9Na+/dd//Vb//XfQ1qOoZb11QWYh1F8xyu8qLuQOgCLcR1LCqJHcLYORB2AEI/Vv8Qz7EnCa/GoKkQdgF9JZBWeYhw78RhrmgTI8OtwH58R3qgUvWQgzw3RT/iCuZXUqXwKsli4f04SyxmIk7B80ABhuDE8wPokth8XcQPbBg1wC1txDoeTWIgHxCnc+Q/Ae7wtjqnige24im9YmQpQvCsMGNtQNqZlqgzACmzG8aRwAicLaruxq6R6Bj2NYzGnCBACUWCKFa7zvftwqaTYTMOidkS9mNIuAvwrlbHia3jdg3hMnZ3ujxkBcoXLUJHqyEqIx3M/Isr1Q0xiaecWNAFwABcwgR1tAFxBmPYozrQB8BzLsAl3mwYIb/3ALMzHx6YBRlLn9AHD2dHFYzhoE+Z75Da2tAFwHgeT+cKEf6pReh50BsJ0G9IpiC6qcYDY+wWpZ5jqopvywCK8wdfUtv1sOgN7cRlPsLpY04sZeIeFqdvJY+L6jO6n18jX8Ebc6wYQHxaHelXqMj8un5sdfcRfJow/IgPx63d0zWKZjqjfMNPe1zrAb2OydiFFo8+TAAAAAElFTkSuQmCC"
    },
    a59b: function(t, e, a) {
        "use strict";
        var n = a("22ab")
          , i = a.n(n);
        i.a
    },
    a96b: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAdVJREFUWEfl179LG2EYB/Dvc0neQEs2N9PLIMm9VyHQH9BNKl1cXBRx6B9QQXBycatbBzsFKnbpplAKhS7iYgMuXcRBMBet0LzJ6iIiyZt4j4QSCOYakti379B3ft/n++E57r3nCJYXjZofuGIBwAIDTwDaR3iz49daxWHr3QfwuQ3oDowBk1mlT4ZBjAQIxpDCA3HZG0QHUjWmjANK48kcxbh8N4iBn77SWfOAdPwlOc73iKArqXTKOCB4lFgC0WZE0LVU+qF5gCu+AZjtCSIoWdEZo4DTjJgPGV+iQhg48pV+agxwnk5mmw4fAoh8zsT46lX1nDFA4IpfAP7YYmJe9qrND0YA5Yz4wYwXfYuT80pW6vt/FXDmisctxi4R3L6FGYoJnwYOD8Ni++qmspvcijrkqcab0u/3fQ+AGLjwEBsZXKDAFXz3DIE+dgGiLpwhYvpsZS7+3wBmbNjtALBoFxAjaRNwIZUeswnYk0rPWAMQ8M5Tes0awCG8zlX0tjUAh8j7NX1sB8A4lVXtte9IKwBifu9Vm6vWAByG052fGBsdOJRKP+98ov45gIC3ntLrVgAE1OMh5SdqjTMrAAe0klONQveEQCU38SxqZPBVsz39Gl+3UPcOLKEaJGYAAAAASUVORK5CYII="
    },
    bb36: function(t, e) {
        t.exports = "data:image/png;base64,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"
    },
    cb98: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAVRJREFUWEfl170rRlEcB/DPs1hkMzN5iVJeyiayWCwkgz+AUiaLjc3A9BSx2CgpZZEFZbHIoJSXQXaLJBsdPPUM9/Hc++g6g1N3u+d8P/3Oyz23IHIr/CJ/AuHpxjF2cJp1vN8Adr8B5ZmduM6CqBXQgOeEoDMM/AWgFTcJQfdo+QvAIE4Sgl4QqpO61ToFM1hPSHlFfep01Ao4wGhC0COa8waMY69CyCV68gSEBXbxwzzvYyxPwEOVEs9iLS/AOfqrDD78fSqmNqRZhB04RFOVUcMC3Eqd/HVsnwbARoVO0wj7/Qh1GQbO8moxAN4TemyiBEg6cLKE/PTuZwX+NWAldgUmYwPaYwKe0BgTELb3SEzAMhZiAqawHRPQhatYgFu0hSMyFmAV8zEBQ6WfmBgVCDeqvtIXKgZgEUuxAG8Iq/8uFmAOxfILQpiC3go3hjBXubcPsnxhOcQiF10AAAAASUVORK5CYII="
    },
    d9a3: function(t, e, a) {},
    e2a1: function(t, e, a) {},
    fb3e: function(t, e, a) {}
});
//# sourceMappingURL=app.3be3eb69.js.map
