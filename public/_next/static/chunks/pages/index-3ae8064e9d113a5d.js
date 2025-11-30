(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5301: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return c(3061);
        },
      ]);
    },
    3061: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          __N_SSG: function () {
            return ga;
          },
          default: function () {
            return ha;
          },
        });
      var d = c(7997),
        e = c(969),
        f = c(6691),
        g = c(1720),
        h = c(8863),
        i = c.n(h),
        j = {
          marks: {
            link: function (a) {
              return (0, d.tZ)("a", {
                href: a.mark.url,
                target: "_blank",
                rel: "noopener noreferrer",
                children: a.children,
              });
            },
          },
        },
        k = function (a) {
          var b = a.body;
          return (0, d.tZ)(i(), {
            blocks: b,
            serializers: j,
          });
        },
        l = c(9729),
        m = c.n(l),
        n = m()({
          projectId: "ywe09d8y",
          dataset: "production",
          useCdn: !1,
          apiVersion: new Date().toISOString().slice(0, 10),
        }),
        o = n,
        p = c(1202),
        q = c(5675);

      function r(a, b, c) {
        return (
          b in a
            ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[b] = c),
          a
        );
      }

      function s(a) {
        for (var b = 1; b < arguments.length; b++) {
          var c = null != arguments[b] ? arguments[b] : {},
            d = Object.keys(c);
          "function" == typeof Object.getOwnPropertySymbols &&
            (d = d.concat(
              Object.getOwnPropertySymbols(c).filter(function (a) {
                return Object.getOwnPropertyDescriptor(c, a).enumerable;
              })
            )),
            d.forEach(function (b) {
              r(a, b, c[b]);
            });
        }
        return a;
      }

      function t(a, b) {
        return (
          b || (b = a.slice(0)),
          Object.freeze(
            Object.defineProperties(a, {
              raw: {
                value: Object.freeze(b),
              },
            })
          )
        );
      }

      function u() {
        var a = t([
          "\n  width: 100%;\n  height: 100%;\n  position: relative;\n\n  > span {\n    height: 100% !important;\n  }\n\n  &.isLoaded > span > span:after {\n    transform: scaleY(0);\n  }\n",
        ]);
        return (
          (u = function () {
            return a;
          }),
          a
        );
      }

      function v() {
        var a = t([
          "\n  position: absolute;\n  inset: 0;\n  transform-origin: 50% 100%;\n  transition: transform;\n  transition-timing-function: linear;\n  transition-duration: 1.25s;\n  background-color: var(--dominantColor);\n  transform: scaleY(",
          ");\n",
        ]);
        return (
          (v = function () {
            return a;
          }),
          a
        );
      }
      var w = function (a) {
          var b = a.src,
            c = a.layout,
            e = (function (a, b) {
              if (null == a) return {};
              var c,
                d,
                e = (function (a, b) {
                  if (null == a) return {};
                  var c,
                    d,
                    e = {},
                    f = Object.keys(a);
                  for (d = 0; d < f.length; d++)
                    (c = f[d]), b.indexOf(c) >= 0 || (e[c] = a[c]);
                  return e;
                })(a, b);
              if (Object.getOwnPropertySymbols) {
                var f = Object.getOwnPropertySymbols(a);
                for (d = 0; d < f.length; d++)
                  (c = f[d]),
                    !(b.indexOf(c) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(a, c) &&
                      (e[c] = a[c]);
              }
              return e;
            })(a, ["src", "layout"]),
            f = (0, g.useState)(!1),
            h = f[0],
            i = f[1],
            j = (0, p.J)(o, b, {
              blurUpAmount: 32,
              imageBuilder: function (a, b) {
                return a.width(b.width).height(b.height).quality(80);
              },
            });
          return (
            "fill" === c && (delete j.width, delete j.height),
            (0, d.BX)(x, {
              isLoaded: h,
              children: [
                (0, d.tZ)(
                  q.default,
                  s({}, j, e, {
                    layout: c,
                    onLoadingComplete: function () {
                      i(!0);
                    },
                  })
                ),
                !e.priority &&
                  (0, d.tZ)(y, {
                    isLoaded: h,
                  }),
              ],
            })
          );
        },
        x = f.Z.div(u()),
        y = f.Z.span(v(), function (a) {
          return a.isLoaded ? 0 : 1;
        }),
        z = function (a) {
          var b;
          return (null === (b = a.src) || void 0 === b ? void 0 : b.asset)
            ? (0, d.tZ)(w, s({}, a))
            : null;
        };

      function A(a, b) {
        return (
          b || (b = a.slice(0)),
          Object.freeze(
            Object.defineProperties(a, {
              raw: {
                value: Object.freeze(b),
              },
            })
          )
        );
      }

      function B() {
        var a = A([
          "\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: var(--accentYellow);\n  z-index: 99;\n  transition: transform 1s;\n  transform: translate3d(0, ",
          ", 0);\n\n  @media (max-width: 720px) {\n    text-align: center;\n    overflow-y: auto;\n    padding-bottom: 120px;\n  }\n",
        ]);
        return (
          (B = function () {
            return a;
          }),
          a
        );
      }

      function C() {
        var a = A([
          "\n  background-color: var(--accentYellow);\n  position: relative;\n\n  img {\n    mix-blend-mode: multiply;\n  }\n\n  @media (min-width: 720px) {\n    aspect-ratio: 4 / 6;\n    height: 40vh;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n  }\n\n  @media (max-width: 720px) {\n    padding: 120px 0 90px;\n    width: 60%;\n    margin: auto;\n  }\n",
        ]);
        return (
          (C = function () {
            return a;
          }),
          a
        );
      }

      function D() {
        var a = A([
          "\n  @media (min-width: 720px) {\n    transition: transform 2s ",
          " var(--easing);\n    transform: translate3d(0, ",
          ", 0);\n  }\n",
        ]);
        return (
          (D = function () {
            return a;
          }),
          a
        );
      }

      function E() {
        var a = A(["\n  p + p {\n    margin-top: 1rem;\n  }\n"]);
        return (
          (E = function () {
            return a;
          }),
          a
        );
      }

      function F() {
        var a = A([
          "\n  line-height: 1.2;\n\n  a {\n    text-decoration: underline;\n  }\n\n  @media (min-width: 720px) {\n    width: 100%;\n    position: absolute;\n    display: flex;\n    bottom: 0;\n    padding: 16px;\n\n    > div:first-of-type {\n      width: calc(50% - ((40vh * (4 / 6)) / 2) - 48px);\n      margin-right: 48px;\n    }\n\n    > div:last-of-type {\n      display: flex;\n      align-items: flex-end;\n      flex-grow: 1;\n      justify-content: space-between;\n\n      > div:last-of-type {\n        text-align: right;\n      }\n    }\n  }\n\n  @media (max-width: 720px) {\n    p {\n      max-width: 320px;\n      margin: auto;\n    }\n\n    > div + div {\n      margin-top: 35px;\n    }\n\n    > div:last-of-type {\n      > div:last-of-type {\n        margin-top: 35px;\n      }\n    }\n  }\n",
        ]);
        return (
          (F = function () {
            return a;
          }),
          a
        );
      }
      var G = f.Z.div(B(), function (a) {
          return a.isActive ? 0 : "100%";
        }),
        H = f.Z.div(C()),
        I = f.Z.div(
          D(),
          function (a) {
            return a.delay;
          },
          function (a) {
            return a.isVisible ? 0 : "100vh";
          }
        ),
        J = (0, f.Z)(I)(E()),
        K = f.Z.div(F()),
        L = function (a) {
          var b = a.data,
            c = (0, e.Z)(function (a) {
              return a.isAbout;
            }),
            f = e.Z.getState().setIsAbout,
            h = b.description,
            i = b.images,
            j = b.contact,
            l = (0, g.useRef)();
          return (
            (0, g.useEffect)(
              function () {
                window.addEventListener("keyup", function (a) {
                  "Escape" === a.code && f(!1);
                });
              },
              [f]
            ),
            (0, g.useEffect)(
              function () {
                var a;
                return (
                  c ||
                    (a = setTimeout(function () {
                      l.current.scrollTop = 0;
                    }, 1000)),
                  function () {
                    clearTimeout(a);
                  }
                );
              },
              [c]
            ),
            (0, d.BX)(G, {
              isActive: c,
              ref: l,
              children: [
                (0, d.tZ)(H, {
                  children: (0, d.tZ)(z, {
                    src: i[0],
                    alt: i[0].alt,
                    objectFit: "contain",
                    placeholder: "empty",
                    loading: "eager",
                  }),
                }),
                (0, d.BX)(K, {
                  children: [
                    (0, d.tZ)(J, {
                      isVisible: c,
                      delay: "0.1s",
                      children: (0, d.tZ)(k, {
                        body: h,
                      }),
                    }),
                    (0, d.BX)("div", {
                      children: [
                        (0, d.tZ)(I, {
                          isVisible: c,
                          delay: "0.2s",
                          children: (0, d.tZ)(k, {
                            body: j,
                          }),
                        }),
                        (0, d.tZ)(I, {
                          isVisible: c,
                          delay: "0.3s",
                          children: (0, d.BX)("ul", {
                            children: [
                              (0, d.BX)("li", {
                                children: [
                                  "Design",
                                  " ",
                                  (0, d.tZ)("a", {
                                    href: "https://kalokyeung.com",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "Kalok Yeung",
                                  }),
                                ],
                              }),
                              (0, d.BX)("li", {
                                children: [
                                  "Code",
                                  " ",
                                  (0, d.tZ)("a", {
                                    href: "https://ezekielaquino.com",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "Ezekiel Aquino",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        M = c(7994),
        N = c(6018),
        O = c(131);

      function P() {
        var a,
          b,
          c =
            ((a = [
              "\n  position: relative;\n  padding-top: 12px;\n  padding-left: ",
              ";\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: ",
              ";\n  line-height: 1.2;\n\n  h2,\n  > div,\n  aside {\n    transition: opacity 1s;\n    opacity: ",
              ";\n  }\n\n  aside {\n    margin-left: ",
              ";\n  }\n\n  @media (min-width: 720px) {\n    font-size: 16px;\n\n    aside {\n      margin-right: 80px;\n    }\n  }\n\n  @media (max-width: 720px) {\n    font-size: 12px;\n\n    aside {\n      margin-right: 40px;\n    }\n  }\n",
            ]),
            b || (b = a.slice(0)),
            Object.freeze(
              Object.defineProperties(a, {
                raw: {
                  value: Object.freeze(b),
                },
              })
            ));
        return (
          (P = function () {
            return c;
          }),
          c
        );
      }
      var Q = f.Z.figcaption(
          P(),
          function (a) {
            return a.isFullBleed && "24px";
          },
          function (a) {
            return a.captionAlign;
          },
          function (a) {
            return a.inView ? 1 : 0;
          },
          function (a) {
            return "flex-start" === a.captionAlign && "16px";
          }
        ),
        R = function (a) {
          var b,
            c = a.title,
            e = a.subtitle,
            f = a.aside,
            g = a.captionAlign,
            h = a.isFullBleed,
            i =
              (function (a) {
                if (Array.isArray(a)) return a;
              })(
                (b = (0, O.YD)({
                  root: document.querySelector("#root"),
                  rootMargin: "-35% 0px 0px 0px",
                }))
              ) ||
              (function (a, b) {
                var c = [],
                  d = !0,
                  e = !1,
                  f = void 0;
                try {
                  for (
                    var g, h = a[Symbol.iterator]();
                    !(d = (g = h.next()).done) &&
                    (c.push(g.value), !b || c.length !== b);
                    d = !0
                  );
                } catch (a) {
                  (e = !0), (f = a);
                } finally {
                  try {
                    d || null == h.return || h.return();
                  } finally {
                    if (e) throw f;
                  }
                }
                return c;
              })(b, 2) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance"
                );
              })(),
            j = i[0],
            l = i[1];
          return (0, d.BX)(Q, {
            ref: j,
            isFullBleed: h,
            inView: l,
            captionAlign: g,
            children: [
              (0, d.BX)("div", {
                children: [
                  (0, d.tZ)("h2", {
                    children: c,
                  }),
                  e &&
                    (0, d.tZ)("div", {
                      children: (0, d.tZ)(k, {
                        body: e,
                      }),
                    }),
                ],
              }),
              (0, d.tZ)("aside", {
                children: f,
              }),
            ],
          });
        };

      function S(a, b, c) {
        return (
          b in a
            ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (a[b] = c),
          a
        );
      }

      function T(a, b) {
        return (
          b || (b = a.slice(0)),
          Object.freeze(
            Object.defineProperties(a, {
              raw: {
                value: Object.freeze(b),
              },
            })
          )
        );
      }

      function U() {
        var a = T([
          "\n  width: 100%;\n  position: relative;\n  display: ",
          ";\n  justify-content: ",
          ";\n  user-select: none;\n\n  &:last-of-type {\n    margin-bottom: 30vw;\n  }\n\n  figure {\n    position: relative;\n    width: ",
          ";\n  }\n\n  @media (max-width: 720px) {\n    figure {\n      width: ",
          ";\n    }\n  }\n",
        ]);
        return (
          (U = function () {
            return a;
          }),
          a
        );
      }

      function V() {
        var a = T([
          "\n  height: ",
          "px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  > div {\n    width: 80%;\n    height: 70vh;\n  }\n\n  @media (min-width: 720px) {\n    height: 100vh;\n\n    & + article {\n      margin-top: calc(400px - 10vh) !important;\n    }\n  }\n\n  @media (max-width: 720px) {\n    & + article {\n      margin-top: 8vh !important;\n    }\n  }\n",
        ]);
        return (
          (V = function () {
            return a;
          }),
          a
        );
      }
      var W,
        X = (function (a) {
          var b = a.low,
            c = a.high,
            d = a.increment,
            e = a.start;
          if (b > c || d < 0)
            return function () {
              return NaN;
            };
          var f = void 0 !== e ? e : b;
          return function () {
            var a = f;
            return ((f += d) + d > c || f + d < b) && (d = -d), a;
          };
        })({
          low: -1,
          high: 1,
          increment: 1,
          start: 0,
        }),
        Y = (
          (function (a) {
            if (Array.isArray(a)) {
              for (var b = 0, c = new Array(a.length); b < a.length; b++)
                c[b] = a[b];
              return c;
            }
          })((W = Array(200))) ||
          (function (a) {
            if (
              Symbol.iterator in Object(a) ||
              "[object Arguments]" === Object.prototype.toString.call(a)
            )
              return Array.from(a);
          })(W) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        ).map(function () {
          return X();
        }),
        Z = {
          "-1": "flex-start",
          0: "center",
          1: "flex-end",
        },
        $ = {
          "-1": "flex-start",
          0: "flex-end",
          1: "flex-end",
        },
        _ = f.Z.article(
          U(),
          function (a) {
            return a.isFullBleed ? "block" : "flex";
          },
          function (a) {
            return a.flexAlign;
          },
          function (a) {
            return a.isFullBleed ? "100%" : "60%";
          },
          function (a) {
            return a.isFullBleed ? "100%" : "70%";
          }
        ),
        aa = (0, f.Z)(_)(V(), function (a) {
          return a.height;
        }),
        ba = function (a) {
          var b,
            c = a.data,
            f = a.index,
            h = e.Z.getState().setColors,
            i =
              (function (a) {
                if (Array.isArray(a)) return a;
              })(
                (b = (0, M.KS)({
                  root: document.querySelector("#root"),
                }))
              ) ||
              (function (a, b) {
                var c = [],
                  d = !0,
                  e = !1,
                  f = void 0;
                try {
                  for (
                    var g, h = a[Symbol.iterator]();
                    !(d = (g = h.next()).done) &&
                    (c.push(g.value), !b || c.length !== b);
                    d = !0
                  );
                } catch (a) {
                  (e = !0), (f = a);
                } finally {
                  try {
                    d || null == h.return || h.return();
                  } finally {
                    if (e) throw f;
                  }
                }
                return c;
              })(b, 2) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance"
                );
              })(),
            j = i[0],
            k = i[1],
            l = (0, g.useState)(!1),
            m = l[0],
            n = l[1],
            o = c.image,
            p = c.isFullBleed,
            q = c.topColor,
            r = c.bottomColor,
            s = (0, N.Z)(window.innerWidth, window.innerHeight).height,
            t = Y[f],
            u = (0, g.useMemo)(
              function () {
                return Z[t];
              },
              [t]
            ),
            v = (0, g.useMemo)(
              function () {
                return $[t];
              },
              [t]
            ),
            w = (0, g.useMemo)(
              function () {
                return !p && Math.random() > 0.5;
              },
              [p]
            );
          return ((0, g.useEffect)(function () {
            n(!0);
          }, []),
          (0, g.useEffect)(
            function () {
              0 === f &&
                (document.documentElement.style.setProperty("--bgFrom", q.hex),
                document.documentElement.style.setProperty("--bgTo", r.hex));
            },
            [f, q, r]
          ),
          (0, g.useEffect)(
            function () {
              var a, b;
              k >= (0 === f ? 0 : 0.25) &&
                k <= 0.75 &&
                h({
                  top:
                    null !== (a = null == q ? void 0 : q.hex) && void 0 !== a
                      ? a
                      : "#ffffff",
                  bottom:
                    null !== (b = null == r ? void 0 : r.hex) && void 0 !== b
                      ? b
                      : "#f4f4f4",
                });
            },
            [k, f, q, r, h]
          ),
          m)
            ? 0 === f
              ? (0, d.tZ)(aa, {
                  ref: j,
                  height: s,
                  children: (0, d.tZ)("div", {
                    children: (0, d.tZ)(z, {
                      src: o,
                      alt: o.alt,
                      layout: "responsive",
                      objectFit: "contain",
                      placeholder: "empty",
                      priority: !0,
                    }),
                  }),
                })
              : (0, d.tZ)(_, {
                  ref: j,
                  isFullBleed: p,
                  isTop: w,
                  flexAlign: u,
                  children: (0, d.BX)("figure", {
                    style: {
                      "--dominantColor": o.dominantColor,
                    },
                    children: [
                      (0, d.tZ)(z, {
                        src: o,
                        alt: o.alt,
                        sizes: p ? "100vw" : "70vw",
                        layout: "responsive",
                        objectFit: "cover",
                        priority: 0 === f,
                        placeholder: "empty",
                      }),
                      (0, d.tZ)(
                        R,
                        (function (a) {
                          for (var b = 1; b < arguments.length; b++) {
                            var c = null != arguments[b] ? arguments[b] : {},
                              d = Object.keys(c);
                            "function" == typeof Object.getOwnPropertySymbols &&
                              (d = d.concat(
                                Object.getOwnPropertySymbols(c).filter(
                                  function (a) {
                                    return Object.getOwnPropertyDescriptor(c, a)
                                      .enumerable;
                                  }
                                )
                              )),
                              d.forEach(function (b) {
                                S(a, b, c[b]);
                              });
                          }
                          return a;
                        })(
                          {
                            captionAlign: v,
                            isFullBleed: p,
                          },
                          c
                        )
                      ),
                    ],
                  }),
                })
            : null;
        };

      function ca() {
        var a,
          b,
          c =
            ((a = [
              "\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow-y: auto;\n  /* -webkit-overflow-scrolling: touch; */\n\n  .no-scroll & {\n    overflow: hidden;\n  }\n\n  @media (min-width: 720px) {\n    article + article {\n      margin-top: 400px;\n    }\n  }\n\n  @media (max-width: 720px) {\n    article + article {\n      margin-top: 180px;\n    }\n  }\n",
            ]),
            b || (b = a.slice(0)),
            Object.freeze(
              Object.defineProperties(a, {
                raw: {
                  value: Object.freeze(b),
                },
              })
            ));
        return (
          (ca = function () {
            return c;
          }),
          c
        );
      }
      var da = f.Z.div(ca()),
        ea = function (a) {
          var b = a.media;
          return (0, d.tZ)(d.HY, {
            children: (0, d.tZ)(da, {
              id: "root",
              children: b.map(function (a, b) {
                return (0, d.tZ)(
                  ba,
                  {
                    data: a,
                    index: b,
                  },
                  "article-".concat(b)
                );
              }),
            }),
          });
        },
        fa = c(2962),
        ga = !0,
        ha = function (a) {
          var b = a.siteData,
            c = a.media,
            e = b.name,
            f =
              (b.description,
              b.description
                .map(function (a) {
                  return "block" === a._type && a.children
                    ? a.children
                        .map(function (a) {
                          return a.text;
                        })
                        .join("")
                    : "";
                })
                .join("\n\n")
                .replace(/\xA0/g, " "));
          return (0, d.BX)(d.HY, {
            children: [
              (0, d.tZ)(fa.PB, {
                title: e,
                description: f,
                canonical: "https://Neha_sniekers1111.com",
                openGraph: {
                  type: "website",
                  locale: "en_IE",
                  url: "https://Neha_sniekers1111.com",
                  title: e,
                  description: f,
                  images: [
                    {
                      url: "https://Neha_sniekers111.com/og-image.png",
                      width: 1200,
                      height: 630,
                      alt: f,
                    },
                  ],
                  site_name: e,
                },
                twitter: {
                  cardType: "summary_large_image",
                },
              }),
              (0, d.tZ)(L, {
                data: b,
              }),
              (0, d.tZ)(
                ea,
                {
                  media: c,
                },
                "grid"
              ),
            ],
          });
        };
    },
  },
  function (a) {
    a.O(0, [774, 600, 888, 179], function () {
      return a((a.s = 5301));
    }),
      (_N_E = a.O());
  },
]);
