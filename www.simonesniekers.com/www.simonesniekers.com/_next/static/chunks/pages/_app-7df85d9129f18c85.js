(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    6691: function (a, b, c) {
      "use strict";
      c.d(b, {
        Z: function () {
          return va;
        },
      });
      var d,
        e = c(1720);

      function f() {
        return (f =
          Object.assign ||
          function (a) {
            for (var b = 1; b < arguments.length; b++) {
              var c = arguments[b];
              for (var d in c)
                Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
            }
            return a;
          }).apply(this, arguments);
      }
      var g = function (a) {
          var b = Object.create(null);
          return function (c) {
            return void 0 === b[c] && (b[c] = a(c)), b[c];
          };
        },
        h =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        i = g(function (a) {
          return (
            h.test(a) ||
            (111 === a.charCodeAt(0) &&
              110 === a.charCodeAt(1) &&
              91 > a.charCodeAt(2))
          );
        }),
        j = (function () {
          function a(a) {
            var b = this;
            (this._insertTag = function (a) {
              var c;
              (c =
                0 === b.tags.length
                  ? b.insertionPoint
                    ? b.insertionPoint.nextSibling
                    : b.prepend
                    ? b.container.firstChild
                    : b.before
                  : b.tags[b.tags.length - 1].nextSibling),
                b.container.insertBefore(a, c),
                b.tags.push(a);
            }),
              (this.isSpeedy = void 0 === a.speedy || a.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = a.nonce),
              (this.key = a.key),
              (this.container = a.container),
              (this.prepend = a.prepend),
              (this.insertionPoint = a.insertionPoint),
              (this.before = null);
          }
          var b = a.prototype;
          return (
            (b.hydrate = function (a) {
              a.forEach(this._insertTag);
            }),
            (b.insert = function (a) {
              if (this.ctr % (this.isSpeedy ? 65000 : 1) == 0) {
                var b, c;
                this._insertTag(
                  ((b = this),
                  (c = document.createElement("style")).setAttribute(
                    "data-emotion",
                    b.key
                  ),
                  void 0 !== b.nonce && c.setAttribute("nonce", b.nonce),
                  c.appendChild(document.createTextNode("")),
                  c.setAttribute("data-s", ""),
                  c)
                );
              }
              var d = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                var e = (function (a) {
                  if (a.sheet) return a.sheet;
                  for (var b = 0; b < document.styleSheets.length; b++)
                    if (document.styleSheets[b].ownerNode === a)
                      return document.styleSheets[b];
                })(d);
                try {
                  e.insertRule(a, e.cssRules.length);
                } catch (a) {}
              } else d.appendChild(document.createTextNode(a));
              this.ctr++;
            }),
            (b.flush = function () {
              this.tags.forEach(function (a) {
                return a.parentNode && a.parentNode.removeChild(a);
              }),
                (this.tags = []),
                (this.ctr = 0);
            }),
            a
          );
        })(),
        k = Math.abs,
        l = String.fromCharCode;

      function m(a) {
        return a.trim();
      }

      function n(a, b, c) {
        return a.replace(b, c);
      }

      function o(a, b) {
        return a.indexOf(b);
      }

      function p(a, b) {
        return 0 | a.charCodeAt(b);
      }

      function q(a, b, c) {
        return a.slice(b, c);
      }

      function r(a) {
        return a.length;
      }

      function s(a) {
        return a.length;
      }

      function t(a, b) {
        return b.push(a), a;
      }
      var u = 1,
        v = 1,
        w = 0,
        x = 0,
        y = 0,
        z = "";

      function A(a, b, c, d, e, f, g) {
        return {
          value: a,
          root: b,
          parent: c,
          type: d,
          props: e,
          children: f,
          line: u,
          column: v,
          length: g,
          return: "",
        };
      }

      function B(a, b, c) {
        return A(a, b.root, b.parent, c, b.props, b.children, 0);
      }

      function C() {
        return (y = x > 0 ? p(z, --x) : 0), v--, 10 === y && ((v = 1), u--), y;
      }

      function D() {
        return (y = x < w ? p(z, x++) : 0), v++, 10 === y && ((v = 1), u++), y;
      }

      function E() {
        return p(z, x);
      }

      function F() {
        return x;
      }

      function G(a, b) {
        return q(z, a, b);
      }

      function H(a) {
        switch (a) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }

      function I(a) {
        return (u = v = 1), (w = r((z = a))), (x = 0), [];
      }

      function J(a) {
        return (z = ""), a;
      }

      function K(a) {
        return m(G(x - 1, N(91 === a ? a + 2 : 40 === a ? a + 1 : a)));
      }

      function L(a) {
        for (; (y = E()); )
          if (y < 33) D();
          else break;
        return H(a) > 2 || H(y) > 3 ? "" : " ";
      }

      function M(a, b) {
        for (
          ;
          --b &&
          D() &&
          !(y < 48) &&
          !(y > 102) &&
          (!(y > 57) || !(y < 65)) &&
          (!(y > 70) || !(y < 97));

        );
        return G(a, F() + (b < 6 && 32 == E() && 32 == D()));
      }

      function N(a) {
        for (; D(); )
          switch (y) {
            case a:
              return x;
            case 34:
            case 39:
              return N(34 === a || 39 === a ? a : y);
            case 40:
              41 === a && N(a);
              break;
            case 92:
              D();
              break;
          }
        return x;
      }

      function O(a, b) {
        for (; D(); )
          if (a + y === 57) break;
          else if (a + y === 84 && 47 === E()) break;
        return "/*" + G(b, x - 1) + "*" + l(47 === a ? a : D());
      }

      function P(a) {
        for (; !H(E()); ) D();
        return G(a, x);
      }

      function Q(a, b) {
        for (var c = "", d = s(a), e = 0; e < d; e++)
          c += b(a[e], e, a, b) || "";
        return c;
      }

      function R(a, b, c, d) {
        switch (a.type) {
          case "@import":
          case "decl":
            return (a.return = a.return || a.value);
          case "comm":
            return "";
          case "rule":
            a.value = a.props.join(",");
        }
        return r((c = Q(a.children, d)))
          ? (a.return = a.value + "{" + c + "}")
          : "";
      }

      function S(a, b) {
        var c;
        switch (
          (((((((b << 2) ^ p((c = a), 0)) << 2) ^ p(c, 1)) << 2) ^ p(c, 2)) <<
            2) ^
          p(c, 3)
        ) {
          case 5103:
            return "-webkit-print-" + a + a;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return "-webkit-" + a + a;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
          case 6828:
          case 4268:
            return "-webkit-" + a + "-ms-" + a + a;
          case 6165:
            return "-webkit-" + a + "-ms-flex-" + a + a;
          case 5187:
            return (
              "-webkit-" +
              a +
              n(a, /(\w+).+(:[^]+)/, "-webkit-box-$1$2-ms-flex-$1$2") +
              a
            );
          case 5443:
            return (
              "-webkit-" + a + "-ms-flex-item-" + n(a, /flex-|-self/, "") + a
            );
          case 4675:
            return (
              "-webkit-" +
              a +
              "-ms-flex-line-pack" +
              n(a, /align-content|flex-|-self/, "") +
              a
            );
          case 5548:
            return "-webkit-" + a + "-ms-" + n(a, "shrink", "negative") + a;
          case 5292:
            return (
              "-webkit-" + a + "-ms-" + n(a, "basis", "preferred-size") + a
            );
          case 6060:
            return (
              "-webkit-box-" +
              n(a, "-grow", "") +
              "-webkit-" +
              a +
              "-ms-" +
              n(a, "grow", "positive") +
              a
            );
          case 4554:
            return "-webkit-" + n(a, /([^-])(transform)/g, "$1-webkit-$2") + a;
          case 6187:
            return (
              n(
                n(
                  n(a, /(zoom-|grab)/, "-webkit-$1"),
                  /(image-set)/,
                  "-webkit-$1"
                ),
                a,
                ""
              ) + a
            );
          case 5495:
          case 3959:
            return n(a, /(image-set\([^]*)/, "-webkit-$1$`$1");
          case 4968:
            return (
              n(
                n(
                  a,
                  /(.+:)(flex-)?(.*)/,
                  "-webkit-box-pack:$3-ms-flex-pack:$3"
                ),
                /s.+-b[^;]+/,
                "justify"
              ) +
              "-webkit-" +
              a +
              a
            );
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return n(a, /(.+)-inline(.+)/, "-webkit-$1$2") + a;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (r(a) - 1 - b > 6)
              switch (p(a, b + 1)) {
                case 109:
                  if (45 !== p(a, b + 4)) break;
                case 102:
                  return (
                    n(
                      a,
                      /(.+:)(.+)-([^]+)/,
                      "$1-webkit-$2-$3$1-moz-" +
                        (108 == p(a, b + 3) ? "$3" : "$2-$3")
                    ) + a
                  );
                case 115:
                  return ~o(a, "stretch")
                    ? S(n(a, "stretch", "fill-available"), b) + a
                    : a;
              }
            break;
          case 4949:
            if (115 !== p(a, b + 1)) break;
          case 6444:
            switch (p(a, r(a) - 3 - (~o(a, "!important") && 10))) {
              case 107:
                return n(a, ":", ":-webkit-") + a;
              case 101:
                return (
                  n(
                    a,
                    /(.+:)([^;!]+)(;|!.+)?/,
                    "$1-webkit-" +
                      (45 === p(a, 14) ? "inline-" : "") +
                      "box$3$1-webkit-$2$3$1-ms-$2box$3"
                  ) + a
                );
            }
            break;
          case 5936:
            switch (p(a, b + 11)) {
              case 114:
                return (
                  "-webkit-" + a + "-ms-" + n(a, /[svh]\w+-[tblr]{2}/, "tb") + a
                );
              case 108:
                return (
                  "-webkit-" +
                  a +
                  "-ms-" +
                  n(a, /[svh]\w+-[tblr]{2}/, "tb-rl") +
                  a
                );
              case 45:
                return (
                  "-webkit-" + a + "-ms-" + n(a, /[svh]\w+-[tblr]{2}/, "lr") + a
                );
            }
            return "-webkit-" + a + "-ms-" + a + a;
        }
        return a;
      }

      function T(a, b, c, d, e, f, g, h, i) {
        for (
          var j = 0,
            k = 0,
            m = g,
            o = 0,
            p = 0,
            q = 0,
            s = 1,
            u = 1,
            v = 1,
            w = 0,
            x = "",
            y = e,
            z = f,
            A = d,
            B = x;
          u;

        )
          switch (((q = w), (w = D()))) {
            case 34:
            case 39:
            case 91:
            case 40:
              B += K(w);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              B += L(q);
              break;
            case 92:
              B += M(F() - 1, 7);
              continue;
            case 47:
              switch (E()) {
                case 42:
                case 47:
                  t(V(O(D(), F()), b, c), i);
                  break;
                default:
                  B += "/";
              }
              break;
            case 123 * s:
              h[j++] = r(B) * v;
            case 125 * s:
            case 59:
            case 0:
              switch (w) {
                case 0:
                case 125:
                  u = 0;
                case 59 + k:
                  p > 0 &&
                    r(B) - m &&
                    t(
                      p > 32
                        ? W(B + ";", d, c, m - 1)
                        : W(n(B, " ", "") + ";", d, c, m - 2),
                      i
                    );
                  break;
                case 59:
                  B += ";";
                default:
                  if (
                    (t(
                      (A = U(B, b, c, j, k, e, h, x, (y = []), (z = []), m)),
                      f
                    ),
                    123 === w)
                  )
                    if (0 === k) T(B, b, A, A, y, f, m, h, z);
                    else
                      switch (o) {
                        case 100:
                        case 109:
                        case 115:
                          T(
                            a,
                            A,
                            A,
                            d &&
                              t(U(a, A, A, 0, 0, e, h, x, e, (y = []), m), z),
                            e,
                            z,
                            m,
                            h,
                            d ? y : z
                          );
                          break;
                        default:
                          T(B, A, A, A, [""], z, m, h, z);
                      }
              }
              (j = k = p = 0), (s = v = 1), (x = B = ""), (m = g);
              break;
            case 58:
              (m = 1 + r(B)), (p = q);
            default:
              if (s < 1) {
                if (123 == w) --s;
                else if (125 == w && 0 == s++ && 125 == C()) continue;
              }
              switch (((B += l(w)), w * s)) {
                case 38:
                  v = k > 0 ? 1 : ((B += "\f"), -1);
                  break;
                case 44:
                  (h[j++] = (r(B) - 1) * v), (v = 1);
                  break;
                case 64:
                  45 === E() && (B += K(D())),
                    (o = E()),
                    (k = r((x = B += P(F())))),
                    w++;
                  break;
                case 45:
                  45 === q && 2 == r(B) && (s = 0);
              }
          }
        return f;
      }

      function U(a, b, c, d, e, f, g, h, i, j, l) {
        for (
          var o = e - 1, p = 0 === e ? f : [""], r = s(p), t = 0, u = 0, v = 0;
          t < d;
          ++t
        )
          for (
            var w = 0, x = q(a, o + 1, (o = k((u = g[t])))), y = a;
            w < r;
            ++w
          )
            (y = m(u > 0 ? p[w] + " " + x : n(x, /&\f/g, p[w]))) &&
              (i[v++] = y);
        return A(a, b, c, 0 === e ? "rule" : h, i, j, l);
      }

      function V(a, b, c) {
        return A(a, b, c, "comm", l(y), q(a, 2, -2), 0);
      }

      function W(a, b, c, d) {
        return A(a, b, c, "decl", q(a, 0, d), q(a, d + 1, -1), d);
      }
      var X = function (a, b, c) {
          for (var d = 0, e = 0; ; ) {
            if (((d = e), (e = E()), 38 === d && 12 === e && (b[c] = 1), H(e)))
              break;
            D();
          }
          return G(a, x);
        },
        Y = function (a, b) {
          var c = -1,
            d = 44;
          do
            switch (H(d)) {
              case 0:
                38 === d && 12 === E() && (b[c] = 1), (a[c] += X(x - 1, b, c));
                break;
              case 2:
                a[c] += K(d);
                break;
              case 4:
                if (44 === d) {
                  (a[++c] = 58 === E() ? "&\f" : ""), (b[c] = a[c].length);
                  break;
                }
              default:
                a[c] += l(d);
            }
          while ((d = D()));
          return a;
        },
        Z = new WeakMap(),
        $ = function (a) {
          if ("rule" === a.type && a.parent && a.length) {
            for (
              var b = a.value,
                c = a.parent,
                d = a.column === c.column && a.line === c.line;
              "rule" !== c.type;

            )
              if (!(c = c.parent)) return;
            if (
              (1 !== a.props.length || 58 === b.charCodeAt(0) || Z.get(c)) &&
              !d
            ) {
              Z.set(a, !0);
              for (
                var e,
                  f,
                  g = [],
                  h = ((e = b), (f = g), J(Y(I(e), f))),
                  i = c.props,
                  j = 0,
                  k = 0;
                j < h.length;
                j++
              )
                for (var l = 0; l < i.length; l++, k++)
                  a.props[k] = g[j]
                    ? h[j].replace(/&\f/g, i[l])
                    : i[l] + " " + h[j];
            }
          }
        },
        _ = function (a) {
          if ("decl" === a.type) {
            var b = a.value;
            108 === b.charCodeAt(0) &&
              98 === b.charCodeAt(2) &&
              ((a.return = ""), (a.value = ""));
          }
        },
        aa = [
          function (a, b, c, d) {
            if (!a.return)
              switch (a.type) {
                case "decl":
                  a.return = S(a.value, a.length);
                  break;
                case "@keyframes":
                  return Q([B(n(a.value, "@", "@-webkit-"), a, "")], d);
                case "rule":
                  if (a.length)
                    return (function (a, b) {
                      return a.map(b).join("");
                    })(a.props, function (b) {
                      var c;
                      switch (
                        ((c = b),
                        (c = /(::plac\w+|:read-\w+)/.exec(c)) ? c[0] : c)
                      ) {
                        case ":read-only":
                        case ":read-write":
                          return Q(
                            [B(n(b, /:(read-\w+)/, ":-moz-$1"), a, "")],
                            d
                          );
                        case "::placeholder":
                          return Q(
                            [
                              B(n(b, /:(plac\w+)/, ":-webkit-input-$1"), a, ""),
                              B(n(b, /:(plac\w+)/, ":-moz-$1"), a, ""),
                              B(n(b, /:(plac\w+)/, "-ms-input-$1"), a, ""),
                            ],
                            d
                          );
                      }
                      return "";
                    });
              }
          },
        ],
        ba = function (a) {
          for (var b, c = 0, d = 0, e = a.length; e >= 4; ++d, e -= 4)
            (b =
              (65535 &
                (b =
                  (255 & a.charCodeAt(d)) |
                  ((255 & a.charCodeAt(++d)) << 8) |
                  ((255 & a.charCodeAt(++d)) << 16) |
                  ((255 & a.charCodeAt(++d)) << 24))) *
                1540483477 +
              (((b >>> 16) * 59797) << 16)),
              (c =
                ((65535 & (b >>>= 24)) * 1540483477 +
                  (((b >>> 16) * 59797) << 16)) ^
                ((65535 & c) * 1540483477 + (((c >>> 16) * 59797) << 16)));
          switch (e) {
            case 3:
              c ^= (255 & a.charCodeAt(d + 2)) << 16;
            case 2:
              c ^= (255 & a.charCodeAt(d + 1)) << 8;
            case 1:
              c =
                (65535 & (c ^= 255 & a.charCodeAt(d))) * 1540483477 +
                (((c >>> 16) * 59797) << 16);
          }
          return (
            ((c =
              (65535 & (c >>>= 13)) * 1540483477 +
              (((c >>> 16) * 59797) << 16)) ^
              (c >>> 15)) >>>
            0
          ).toString(36);
        },
        ca = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        da = /[A-Z]|^ms/g,
        ea = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        fa = function (a) {
          return 45 === a.charCodeAt(1);
        },
        ga = function (a) {
          return null != a && "boolean" != typeof a;
        },
        ha = g(function (a) {
          return fa(a) ? a : a.replace(da, "-$&").toLowerCase();
        }),
        ia = function (a, b) {
          switch (a) {
            case "animation":
            case "animationName":
              if ("string" == typeof b)
                return b.replace(ea, function (a, b, c) {
                  return (
                    (d = {
                      name: b,
                      styles: c,
                      next: d,
                    }),
                    b
                  );
                });
          }
          return 1 === ca[a] || fa(a) || "number" != typeof b || 0 === b
            ? b
            : b + "px";
        };

      function ja(a, b, c) {
        if (null == c) return "";
        if (void 0 !== c.__emotion_styles) return c;
        switch (typeof c) {
          case "boolean":
            return "";
          case "object":
            if (1 === c.anim)
              return (
                (d = {
                  name: c.name,
                  styles: c.styles,
                  next: d,
                }),
                c.name
              );
            if (void 0 !== c.styles) {
              var e = c.next;
              if (void 0 !== e)
                for (; void 0 !== e; )
                  (d = {
                    name: e.name,
                    styles: e.styles,
                    next: d,
                  }),
                    (e = e.next);
              return c.styles + ";";
            }
            return ka(a, b, c);
          case "function":
            if (void 0 !== a) {
              var f = d,
                g = c(a);
              return (d = f), ja(a, b, g);
            }
            break;
          case "string":
            break;
        }
        if (null == b) return c;
        var h = b[c];
        return void 0 !== h ? h : c;
      }

      function ka(a, b, c) {
        var d = "";
        if (Array.isArray(c))
          for (var e = 0; e < c.length; e++) d += ja(a, b, c[e]) + ";";
        else
          for (var f in c) {
            var g = c[f];
            if ("object" != typeof g)
              null != b && void 0 !== b[g]
                ? (d += f + "{" + b[g] + "}")
                : ga(g) && (d += ha(f) + ":" + ia(f, g) + ";");
            else if (
              Array.isArray(g) &&
              "string" == typeof g[0] &&
              (null == b || void 0 === b[g[0]])
            )
              for (var h = 0; h < g.length; h++)
                ga(g[h]) && (d += ha(f) + ":" + ia(f, g[h]) + ";");
            else {
              var i = ja(a, b, g);
              switch (f) {
                case "animation":
                case "animationName":
                  d += ha(f) + ":" + i + ";";
                  break;
                default:
                  d += f + "{" + i + "}";
              }
            }
          }
        return d;
      }
      var la = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
        ma = function (a, b, c) {
          if (
            1 === a.length &&
            "object" == typeof a[0] &&
            null !== a[0] &&
            void 0 !== a[0].styles
          )
            return a[0];
          var e,
            f = !0,
            g = "";
          d = void 0;
          var h = a[0];
          null == h || void 0 === h.raw
            ? ((f = !1), (g += ja(c, b, h)))
            : (g += h[0]);
          for (var i = 1; i < a.length; i++)
            (g += ja(c, b, a[i])), f && (g += h[i]);
          la.lastIndex = 0;
          for (var j = ""; null !== (e = la.exec(g)); ) j += "-" + e[1];
          return {
            name: ba(g) + j,
            styles: g,
            next: d,
          };
        },
        na = {}.hasOwnProperty,
        oa = (0, e.createContext)(
          "undefined" != typeof HTMLElement
            ? (function (a) {
                var b,
                  c,
                  d,
                  e = a.key;
                if ("css" === e) {
                  var f = document.querySelectorAll(
                    "style[data-emotion]:not([data-s])"
                  );
                  Array.prototype.forEach.call(f, function (a) {
                    -1 !== a.getAttribute("data-emotion").indexOf(" ") &&
                      (document.head.appendChild(a),
                      a.setAttribute("data-s", ""));
                  });
                }
                var g = a.stylisPlugins || aa,
                  h = {},
                  i = [];
                (b = a.container || document.head),
                  Array.prototype.forEach.call(
                    document.querySelectorAll(
                      'style[data-emotion^="' + e + ' "]'
                    ),
                    function (a) {
                      for (
                        var b = a.getAttribute("data-emotion").split(" "),
                          c = 1;
                        c < b.length;
                        c++
                      )
                        h[b[c]] = !0;
                      i.push(a);
                    }
                  );
                var k,
                  l,
                  m = [
                    R,
                    (function (a) {
                      return function (b) {
                        !b.root && (b = b.return) && a(b);
                      };
                    })(function (a) {
                      d.insert(a);
                    }),
                  ],
                  n =
                    ((l = s((k = [$, _].concat(g, m)))),
                    function (a, b, c, d) {
                      for (var e = "", f = 0; f < l; f++)
                        e += k[f](a, b, c, d) || "";
                      return e;
                    }),
                  o = function (a) {
                    var b;
                    return Q(
                      J(
                        T(
                          "",
                          null,
                          null,
                          null,
                          [""],
                          (b = I((b = a))),
                          0,
                          [0],
                          b
                        )
                      ),
                      n
                    );
                  };
                c = function (a, b, c, e) {
                  (d = c),
                    o(a ? a + "{" + b.styles + "}" : b.styles),
                    e && (p.inserted[b.name] = !0);
                };
                var p = {
                  key: e,
                  sheet: new j({
                    key: e,
                    container: b,
                    nonce: a.nonce,
                    speedy: a.speedy,
                    prepend: a.prepend,
                    insertionPoint: a.insertionPoint,
                  }),
                  nonce: a.nonce,
                  inserted: h,
                  registered: {},
                  insert: c,
                };
                return p.sheet.hydrate(i), p;
              })({
                key: "css",
              })
            : null
        );
      oa.Provider;
      var pa = (0, e.createContext)({}),
        qa = function (a, b, c) {
          var d = a.key + "-" + b.name;
          if (
            (!1 === c &&
              void 0 === a.registered[d] &&
              (a.registered[d] = b.styles),
            void 0 === a.inserted[b.name])
          ) {
            var e = b;
            do a.insert(b === e ? "." + d : "", e, a.sheet, !0), (e = e.next);
            while (void 0 !== e);
          }
        },
        ra = i,
        sa = function (a) {
          return "string" == typeof a && a.charCodeAt(0) > 96
            ? ra
            : function (a) {
                return "theme" !== a;
              };
        },
        ta = function (a, b, c) {
          var d;
          if (b) {
            var e = b.shouldForwardProp;
            d =
              a.__emotion_forwardProp && e
                ? function (b) {
                    return a.__emotion_forwardProp(b) && e(b);
                  }
                : e;
          }
          return (
            "function" != typeof d && c && (d = a.__emotion_forwardProp), d
          );
        },
        ua = function a(b, c) {
          var d,
            g,
            h = b.__emotion_real === b,
            i = (h && b.__emotion_base) || b;
          void 0 !== c && ((d = c.label), (g = c.target));
          var j = ta(b, c, h),
            k = j || sa(i),
            l = !k("as");
          return function () {
            var m = arguments,
              n =
                h && void 0 !== b.__emotion_styles
                  ? b.__emotion_styles.slice(0)
                  : [];
            if (
              (void 0 !== d && n.push("label:" + d + ";"),
              null == m[0] || void 0 === m[0].raw)
            )
              n.push.apply(n, m);
            else {
              n.push(m[0][0]);
              for (var o = m.length, p = 1; p < o; p++) n.push(m[p], m[0][p]);
            }
            var q = (function (a) {
              return (0, e.forwardRef)(function (b, c) {
                return a(b, (0, e.useContext)(oa), c);
              });
            })(function (a, b, c) {
              var d,
                f,
                h,
                m = (l && a.as) || i,
                o = "",
                p = [],
                q = a;
              if (null == a.theme) {
                for (var r in ((q = {}), a)) q[r] = a[r];
                q.theme = (0, e.useContext)(pa);
              }
              "string" == typeof a.className
                ? (o =
                    ((d = b.registered),
                    (f = p),
                    (h = ""),
                    a.className.split(" ").forEach(function (a) {
                      void 0 !== d[a] ? f.push(d[a] + ";") : (h += a + " ");
                    }),
                    h))
                : null != a.className && (o = a.className + " ");
              var s = ma(n.concat(p), b.registered, q);
              qa(b, s, "string" == typeof m),
                (o += b.key + "-" + s.name),
                void 0 !== g && (o += " " + g);
              var t = l && void 0 === j ? sa(m) : k,
                u = {};
              for (var v in a) (!l || "as" !== v) && t(v) && (u[v] = a[v]);
              (u.className = o), (u.ref = c);
              var w = (0, e.createElement)(m, u),
                x = (0, e.createElement)(function () {
                  return null;
                }, null);
              return (0, e.createElement)(e.Fragment, null, x, w);
            });
            return (
              (q.displayName =
                void 0 !== d
                  ? d
                  : "Styled(" +
                    ("string" == typeof i
                      ? i
                      : i.displayName || i.name || "Component") +
                    ")"),
              (q.defaultProps = b.defaultProps),
              (q.__emotion_real = q),
              (q.__emotion_base = i),
              (q.__emotion_styles = n),
              (q.__emotion_forwardProp = j),
              Object.defineProperty(q, "toString", {
                value: function () {
                  return "." + g;
                },
              }),
              (q.withComponent = function (b, d) {
                return a(
                  b,
                  f({}, c, d, {
                    shouldForwardProp: ta(q, d, !0),
                  })
                ).apply(void 0, n);
              }),
              q
            );
          };
        }.bind();
      [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "tspan",
      ].forEach(function (a) {
        ua[a] = ua(a);
      });
      var va = ua;
    },
    6363: function (a, b, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return c(6230);
        },
      ]);
    },
    6230: function (a, b, c) {
      "use strict";
      c.r(b),
        c.d(b, {
          default: function () {
            return p;
          },
        });
      var d,
        e,
        f = c(7997),
        g = c(969),
        h = c(6691),
        i = c(1720),
        j = c(6018);

      function k() {
        var a,
          b,
          c =
            ((a = [
              "\n  width: 100%;\n  height: 56px;\n  position: fixed;\n  padding: 16px;\n  bottom: 0;\n  transform: translate3d(\n    0,\n    ",
              ",\n    0\n  );\n  transition: transform 1.04s;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 99999;\n  mix-blend-mode: ",
              ";\n  color: ",
              ";\n  user-select: none;\n\n  h1 {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate3d(-50%, -50%, 0);\n  }\n",
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
          (k = function () {
            return c;
          }),
          c
        );
      }
      var l = h.Z.header(
          k(),
          function (a) {
            return a.isActive ? "calc(-".concat(a.height, "px + 56px)") : 0;
          },
          function (a) {
            return a.isActive ? "none" : "difference";
          },
          function (a) {
            return a.isActive ? "#000" : "#fff";
          }
        ),
        m = function () {
          var a = (0, g.Z)(function (a) {
              return a.isAbout;
            }),
            b = (0, g.Z)(function (a) {
              return a.setIsAbout;
            }),
            c = (0, i.useState)("0"),
            d = c[0],
            e = c[1],
            h = (0, j.Z)(window.innerWidth, window.innerHeight).height;
          return (
            (0, i.useEffect)(function () {
              var a = document.querySelector("#root");
              a.addEventListener("scroll", function () {
                e(
                  Math.abs(
                    (a.scrollTop / (a.scrollHeight - window.innerHeight)) * 100
                  ).toFixed(0)
                );
              });
            }, []),
            (0, f.BX)(l, {
              isActive: a,
              height: h,
              children: [
                (0, f.BX)("span", {
                  children: [d, "%"],
                }),
                (0, f.tZ)("h1", {
                  children: "Neha_ Sniekers",
                }),
                (0, f.tZ)("button", {
                  onClick: function () {
                    return b(!a);
                  },
                  children: a ? "Close" : "Info",
                }),
              ],
            })
          );
        },
        n = c(6400);

      function o(a, b, c) {
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
      c(3403),
        (d = "undefined" != typeof document),
        (e = n.YM.vnode),
        (n.YM.vnode = function (a) {
          "noscript" === a.type && d && (a.props.children = null), e && e(a);
        });
      var p = function (a) {
        var b = a.Component,
          c = a.pageProps,
          d = (0, g.Z)(function (a) {
            return a.colors;
          });
        return (
          (0, i.useEffect)(
            function () {
              document.documentElement.style.setProperty("--bgFrom", d.top),
                document.documentElement.style.setProperty("--bgTo", d.bottom);
            },
            [d]
          ),
          (0, f.BX)(f.HY, {
            children: [
              (0, f.tZ)(m, {}),
              (0, f.tZ)(
                b,
                (function (a) {
                  for (var b = 1; b < arguments.length; b++) {
                    var c = null != arguments[b] ? arguments[b] : {},
                      d = Object.keys(c);
                    "function" == typeof Object.getOwnPropertySymbols &&
                      (d = d.concat(
                        Object.getOwnPropertySymbols(c).filter(function (a) {
                          return Object.getOwnPropertyDescriptor(
                            c,
                            a
                          ).enumerable;
                        })
                      )),
                      d.forEach(function (b) {
                        o(a, b, c[b]);
                      });
                  }
                  return a;
                })({}, c)
              ),
            ],
          })
        );
      };
    },
    969: function (a, b, c) {
      "use strict";
      c.d(b, {
        Z: function () {
          return g;
        },
      });
      var d = c(1720);
      const e =
          "undefined" == typeof window ||
          !window.navigator ||
          /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        f = e ? d.useEffect : d.useLayoutEffect;
      var g = (function (a) {
        const b =
            "function" == typeof a
              ? (function (a) {
                  let b;
                  const c = new Set(),
                    d = (a, d) => {
                      const e = "function" == typeof a ? a(b) : a;
                      if (e !== b) {
                        const f = b;
                        (b = d ? e : Object.assign({}, b, e)),
                          c.forEach((a) => a(b, f));
                      }
                    },
                    e = () => b,
                    f = (a, d = e, f = Object.is) => {
                      console.warn(
                        "[DEPRECATED] Please use `subscribeWithSelector` middleware"
                      );
                      let g = d(b);

                      function h() {
                        const c = d(b);
                        if (!f(g, c)) {
                          const e = g;
                          a((g = c), e);
                        }
                      }
                      return c.add(h), () => c.delete(h);
                    },
                    g = (a, b, d) =>
                      b || d ? f(a, b, d) : (c.add(a), () => c.delete(a)),
                    h = () => c.clear(),
                    i = {
                      setState: d,
                      getState: e,
                      subscribe: g,
                      destroy: h,
                    };
                  return (b = a(d, e, i)), i;
                })(a)
              : a,
          c = (a = b.getState, c = Object.is) => {
            const [, e] = (0, d.useReducer)((a) => a + 1, 0),
              g = b.getState(),
              h = (0, d.useRef)(g),
              i = (0, d.useRef)(a),
              j = (0, d.useRef)(c),
              k = (0, d.useRef)(!1),
              l = (0, d.useRef)();
            void 0 === l.current && (l.current = a(g));
            let m,
              n = !1;
            (h.current !== g ||
              i.current !== a ||
              j.current !== c ||
              k.current) &&
              ((m = a(g)), (n = !c(l.current, m))),
              f(() => {
                n && (l.current = m),
                  (h.current = g),
                  (i.current = a),
                  (j.current = c),
                  (k.current = !1);
              });
            const o = (0, d.useRef)(g);
            f(() => {
              const a = () => {
                  try {
                    const a = b.getState(),
                      c = i.current(a);
                    j.current(l.current, c) ||
                      ((h.current = a), (l.current = c), e());
                  } catch (a) {
                    (k.current = !0), e();
                  }
                },
                c = b.subscribe(a);
              return b.getState() !== o.current && a(), c;
            }, []);
            const p = n ? m : l.current;
            return (0, d.useDebugValue)(p), p;
          };
        return (
          Object.assign(c, b),
          (c[Symbol.iterator] = function () {
            console.warn(
              "[useStore, api] = create() is deprecated and will be removed in v4"
            );
            const a = [c, b];
            return {
              next() {
                const d = a.length <= 0;
                return {
                  value: a.shift(),
                  done: d,
                };
              },
            };
          }),
          c
        );
      })(function (a) {
        return {
          colors: {
            top: "",
            bottom: "",
          },
          isAbout: !1,
          setColors: function (b) {
            return a(function () {
              return {
                colors: b,
              };
            });
          },
          setIsAbout: function (b) {
            return a(function () {
              return {
                isAbout: b,
              };
            });
          },
        };
      });
    },
    3403: function () {},
    6018: function (a, b, c) {
      "use strict";
      c.d(b, {
        Z: function () {
          return i;
        },
      });
      var d = c(1720),
        e = function (a) {
          (0, d.useEffect)(a, []);
        },
        f = function (a) {
          var b = (0, d.useRef)(a);
          (b.current = a),
            e(function () {
              return function () {
                return b.current();
              };
            });
        },
        g = function (a) {
          var b = (0, d.useRef)(0),
            c = (0, d.useState)(a),
            e = c[0],
            g = c[1],
            h = (0, d.useCallback)(function (a) {
              cancelAnimationFrame(b.current),
                (b.current = requestAnimationFrame(function () {
                  g(a);
                }));
            }, []);
          return (
            f(function () {
              cancelAnimationFrame(b.current);
            }),
            [e, h]
          );
        },
        h = "undefined" != typeof window,
        i = function (a, b) {
          void 0 === a && (a = 1 / 0), void 0 === b && (b = 1 / 0);
          var c = g({
              width: h ? window.innerWidth : a,
              height: h ? window.innerHeight : b,
            }),
            e = c[0],
            f = c[1];
          return (
            (0, d.useEffect)(function () {
              if (h) {
                var a = function () {
                  f({
                    width: window.innerWidth,
                    height: window.innerHeight,
                  });
                };
                return (
                  (function (a) {
                    for (var b = [], c = 1; c < arguments.length; c++)
                      b[c - 1] = arguments[c];
                    a && a.addEventListener && a.addEventListener.apply(a, b);
                  })(window, "resize", a),
                  function () {
                    !(function (a) {
                      for (var b = [], c = 1; c < arguments.length; c++)
                        b[c - 1] = arguments[c];
                      a &&
                        a.removeEventListener &&
                        a.removeEventListener.apply(a, b);
                    })(window, "resize", a);
                  }
                );
              }
            }, []),
            e
          );
        };
    },
  },
  function (a) {
    var b = function (b) {
      return a((a.s = b));
    };
    a.O(0, [774, 179], function () {
      return b(6363), b(387);
    }),
      (_N_E = a.O());
  },
]);
