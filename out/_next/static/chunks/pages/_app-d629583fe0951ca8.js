(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    1118: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(4786);
        },
      ]);
    },
    1516: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, r, n) {
          return !1;
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    3740: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = r(6495).Z,
        o = r(2648).Z,
        i = r(1598).Z,
        l = r(7273).Z,
        a = i(r(7294)),
        c = o(r(2636)),
        s = r(7757),
        u = r(3735),
        f = r(3341);
      r(4210);
      var d = o(r(7746));
      let p = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
      function h(e) {
        return void 0 !== e.default;
      }
      function g(e) {
        return "number" == typeof e || void 0 === e
          ? e
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function m(e, t, r, o, i, l, a) {
        if (!e || e["data-loaded-src"] === t) return;
        e["data-loaded-src"] = t;
        let c = "decode" in e ? e.decode() : Promise.resolve();
        c.catch(() => {}).then(() => {
          if (e.parentElement && e.isConnected) {
            if (("blur" === r && l(!0), null == o ? void 0 : o.current)) {
              let t = new Event("load");
              Object.defineProperty(t, "target", { writable: !1, value: e });
              let r = !1,
                i = !1;
              o.current(
                n({}, t, {
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => r,
                  isPropagationStopped: () => i,
                  persist: () => {},
                  preventDefault: () => {
                    (r = !0), t.preventDefault();
                  },
                  stopPropagation: () => {
                    (i = !0), t.stopPropagation();
                  },
                })
              );
            }
            (null == i ? void 0 : i.current) && i.current(e);
          }
        });
      }
      let v = a.forwardRef((e, t) => {
          var {
              imgAttributes: r,
              heightInt: o,
              widthInt: i,
              qualityInt: c,
              className: s,
              imgStyle: u,
              blurStyle: f,
              isLazy: d,
              fill: p,
              placeholder: h,
              loading: g,
              srcString: v,
              config: _,
              unoptimized: b,
              loader: y,
              onLoadRef: w,
              onLoadingCompleteRef: j,
              setBlurComplete: x,
              setShowAltText: E,
              onLoad: C,
              onError: S,
            } = e,
            M = l(e, [
              "imgAttributes",
              "heightInt",
              "widthInt",
              "qualityInt",
              "className",
              "imgStyle",
              "blurStyle",
              "isLazy",
              "fill",
              "placeholder",
              "loading",
              "srcString",
              "config",
              "unoptimized",
              "loader",
              "onLoadRef",
              "onLoadingCompleteRef",
              "setBlurComplete",
              "setShowAltText",
              "onLoad",
              "onError",
            ]);
          return (
            (g = d ? "lazy" : g),
            a.default.createElement(
              a.default.Fragment,
              null,
              a.default.createElement(
                "img",
                Object.assign(
                  {},
                  M,
                  {
                    loading: g,
                    width: i,
                    height: o,
                    decoding: "async",
                    "data-nimg": p ? "fill" : "1",
                    className: s,
                    style: n({}, u, f),
                  },
                  r,
                  {
                    ref: a.useCallback(
                      (e) => {
                        t &&
                          ("function" == typeof t
                            ? t(e)
                            : "object" == typeof t && (t.current = e)),
                          e &&
                            (S && (e.src = e.src),
                            e.complete && m(e, v, h, w, j, x, b));
                      },
                      [v, h, w, j, x, S, b, t]
                    ),
                    onLoad: (e) => {
                      let t = e.currentTarget;
                      m(t, v, h, w, j, x, b);
                    },
                    onError: (e) => {
                      E(!0), "blur" === h && x(!0), S && S(e);
                    },
                  }
                )
              )
            )
          );
        }),
        _ = a.forwardRef((e, t) => {
          let r, o;
          var i,
            {
              src: m,
              sizes: _,
              unoptimized: b = !1,
              priority: y = !1,
              loading: w,
              className: j,
              quality: x,
              width: E,
              height: C,
              fill: S,
              style: M,
              onLoad: k,
              onLoadingComplete: O,
              placeholder: P = "empty",
              blurDataURL: R,
              layout: z,
              objectFit: I,
              objectPosition: L,
              lazyBoundary: N,
              lazyRoot: A,
            } = e,
            H = l(e, [
              "src",
              "sizes",
              "unoptimized",
              "priority",
              "loading",
              "className",
              "quality",
              "width",
              "height",
              "fill",
              "style",
              "onLoad",
              "onLoadingComplete",
              "placeholder",
              "blurDataURL",
              "layout",
              "objectFit",
              "objectPosition",
              "lazyBoundary",
              "lazyRoot",
            ]);
          let T = a.useContext(f.ImageConfigContext),
            D = a.useMemo(() => {
              let e = p || T || u.imageConfigDefault,
                t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                r = e.deviceSizes.sort((e, t) => e - t);
              return n({}, e, { allSizes: t, deviceSizes: r });
            }, [T]),
            F = H,
            U = F.loader || d.default;
          delete F.loader;
          let B = "__next_img_default" in U;
          if (B) {
            if ("custom" === D.loader)
              throw Error(
                'Image with src "'.concat(m, '" is missing "loader" prop.') +
                  "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"
              );
          } else {
            let e = U;
            U = (t) => {
              let { config: r } = t,
                n = l(t, ["config"]);
              return e(n);
            };
          }
          if (z) {
            "fill" === z && (S = !0);
            let e = {
              intrinsic: { maxWidth: "100%", height: "auto" },
              responsive: { width: "100%", height: "auto" },
            }[z];
            e && (M = n({}, M, e));
            let t = { responsive: "100vw", fill: "100vw" }[z];
            t && !_ && (_ = t);
          }
          let W = "",
            G = g(E),
            q = g(C);
          if ("object" == typeof (i = m) && (h(i) || void 0 !== i.src)) {
            let e = h(m) ? m.default : m;
            if (!e.src)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                  JSON.stringify(e)
                )
              );
            if (!e.height || !e.width)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                  JSON.stringify(e)
                )
              );
            if (
              ((r = e.blurWidth),
              (o = e.blurHeight),
              (R = R || e.blurDataURL),
              (W = e.src),
              !S)
            ) {
              if (G || q) {
                if (G && !q) {
                  let t = G / e.width;
                  q = Math.round(e.height * t);
                } else if (!G && q) {
                  let t = q / e.height;
                  G = Math.round(e.width * t);
                }
              } else (G = e.width), (q = e.height);
            }
          }
          let Z = !y && ("lazy" === w || void 0 === w);
          ((m = "string" == typeof m ? m : W).startsWith("data:") ||
            m.startsWith("blob:")) &&
            ((b = !0), (Z = !1)),
            D.unoptimized && (b = !0),
            B && m.endsWith(".svg") && !D.dangerouslyAllowSVG && (b = !0);
          let [V, K] = a.useState(!1),
            [J, Q] = a.useState(!1),
            X = g(x),
            Y = Object.assign(
              S
                ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: I,
                    objectPosition: L,
                  }
                : {},
              J ? {} : { color: "transparent" },
              M
            ),
            $ =
              "blur" === P && R && !V
                ? {
                    backgroundSize: Y.objectFit || "cover",
                    backgroundPosition: Y.objectPosition || "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage:
                      'url("data:image/svg+xml;charset=utf-8,'.concat(
                        s.getImageBlurSvg({
                          widthInt: G,
                          heightInt: q,
                          blurWidth: r,
                          blurHeight: o,
                          blurDataURL: R,
                          objectFit: Y.objectFit,
                        }),
                        '")'
                      ),
                  }
                : {},
            ee = (function (e) {
              let {
                config: t,
                src: r,
                unoptimized: n,
                width: o,
                quality: i,
                sizes: l,
                loader: a,
              } = e;
              if (n) return { src: r, srcSet: void 0, sizes: void 0 };
              let { widths: c, kind: s } = (function (e, t, r) {
                  let { deviceSizes: n, allSizes: o } = e;
                  if (r) {
                    let e = /(^|\s)(1?\d?\d)vw/g,
                      t = [];
                    for (let n; (n = e.exec(r)); n) t.push(parseInt(n[2]));
                    if (t.length) {
                      let e = 0.01 * Math.min(...t);
                      return {
                        widths: o.filter((t) => t >= n[0] * e),
                        kind: "w",
                      };
                    }
                    return { widths: o, kind: "w" };
                  }
                  if ("number" != typeof t) return { widths: n, kind: "w" };
                  let i = [
                    ...new Set(
                      [t, 2 * t].map(
                        (e) => o.find((t) => t >= e) || o[o.length - 1]
                      )
                    ),
                  ];
                  return { widths: i, kind: "x" };
                })(t, o, l),
                u = c.length - 1;
              return {
                sizes: l || "w" !== s ? l : "100vw",
                srcSet: c
                  .map((e, n) =>
                    ""
                      .concat(
                        a({ config: t, src: r, quality: i, width: e }),
                        " "
                      )
                      .concat("w" === s ? e : n + 1)
                      .concat(s)
                  )
                  .join(", "),
                src: a({ config: t, src: r, quality: i, width: c[u] }),
              };
            })({
              config: D,
              src: m,
              unoptimized: b,
              width: G,
              quality: X,
              sizes: _,
              loader: U,
            }),
            et = m,
            er = {
              imageSrcSet: ee.srcSet,
              imageSizes: ee.sizes,
              crossOrigin: F.crossOrigin,
            },
            en = a.useRef(k);
          a.useEffect(() => {
            en.current = k;
          }, [k]);
          let eo = a.useRef(O);
          a.useEffect(() => {
            eo.current = O;
          }, [O]);
          let ei = n(
            {
              isLazy: Z,
              imgAttributes: ee,
              heightInt: q,
              widthInt: G,
              qualityInt: X,
              className: j,
              imgStyle: Y,
              blurStyle: $,
              loading: w,
              config: D,
              fill: S,
              unoptimized: b,
              placeholder: P,
              loader: U,
              srcString: et,
              onLoadRef: en,
              onLoadingCompleteRef: eo,
              setBlurComplete: K,
              setShowAltText: Q,
            },
            F
          );
          return a.default.createElement(
            a.default.Fragment,
            null,
            a.default.createElement(v, Object.assign({}, ei, { ref: t })),
            y
              ? a.default.createElement(
                  c.default,
                  null,
                  a.default.createElement(
                    "link",
                    Object.assign(
                      {
                        key: "__nimg-" + ee.src + ee.srcSet + ee.sizes,
                        rel: "preload",
                        as: "image",
                        href: ee.srcSet ? void 0 : ee.src,
                      },
                      er
                    )
                  )
                )
              : null
          );
        });
      (t.default = _),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    5569: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = r(2648).Z,
        o = r(7273).Z,
        i = n(r(7294)),
        l = r(4532),
        a = r(3353),
        c = r(1410),
        s = r(9064),
        u = r(370),
        f = r(9955),
        d = r(4224),
        p = r(508),
        h = r(1516),
        g = r(4266);
      let m = new Set();
      function v(e, t, r, n, o) {
        if (o || a.isLocalURL(t)) {
          if (!n.bypassPrefetchedCheck) {
            let o =
                void 0 !== n.locale
                  ? n.locale
                  : "locale" in e
                  ? e.locale
                  : void 0,
              i = t + "%" + r + "%" + o;
            if (m.has(i)) return;
            m.add(i);
          }
          Promise.resolve(e.prefetch(t, r, n)).catch((e) => {});
        }
      }
      function _(e) {
        return "string" == typeof e ? e : c.formatUrl(e);
      }
      let b = i.default.forwardRef(function (e, t) {
        let r, n;
        let {
            href: c,
            as: m,
            children: b,
            prefetch: y,
            passHref: w,
            replace: j,
            shallow: x,
            scroll: E,
            locale: C,
            onClick: S,
            onMouseEnter: M,
            onTouchStart: k,
            legacyBehavior: O = !1,
          } = e,
          P = o(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (r = b),
          O &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = i.default.createElement("a", null, r));
        let R = !1 !== y,
          z = i.default.useContext(f.RouterContext),
          I = i.default.useContext(d.AppRouterContext),
          L = null != z ? z : I,
          N = !z,
          { href: A, as: H } = i.default.useMemo(() => {
            if (!z) {
              let e = _(c);
              return { href: e, as: m ? _(m) : e };
            }
            let [e, t] = l.resolveHref(z, c, !0);
            return { href: e, as: m ? l.resolveHref(z, m) : t || e };
          }, [z, c, m]),
          T = i.default.useRef(A),
          D = i.default.useRef(H);
        O && (n = i.default.Children.only(r));
        let F = O ? n && "object" == typeof n && n.ref : t,
          [U, B, W] = p.useIntersection({ rootMargin: "200px" }),
          G = i.default.useCallback(
            (e) => {
              (D.current !== H || T.current !== A) &&
                (W(), (D.current = H), (T.current = A)),
                U(e),
                F &&
                  ("function" == typeof F
                    ? F(e)
                    : "object" == typeof F && (F.current = e));
            },
            [H, F, A, W, U]
          );
        i.default.useEffect(() => {
          L && B && R && v(L, A, H, { locale: C }, N);
        }, [H, A, B, C, R, null == z ? void 0 : z.locale, L, N]);
        let q = {
          ref: G,
          onClick(e) {
            O || "function" != typeof S || S(e),
              O &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              L &&
                !e.defaultPrevented &&
                (function (e, t, r, n, o, l, c, s, u, f) {
                  let { nodeName: d } = e.currentTarget,
                    p = "A" === d.toUpperCase();
                  if (
                    p &&
                    ((function (e) {
                      let t = e.currentTarget,
                        r = t.getAttribute("target");
                      return (
                        (r && "_self" !== r) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!u && !a.isLocalURL(r)))
                  )
                    return;
                  e.preventDefault();
                  let h = () => {
                    "beforePopState" in t
                      ? t[o ? "replace" : "push"](r, n, {
                          shallow: l,
                          locale: s,
                          scroll: c,
                        })
                      : t[o ? "replace" : "push"](n || r, {
                          forceOptimisticNavigation: !f,
                        });
                  };
                  u ? i.default.startTransition(h) : h();
                })(e, L, A, H, j, x, E, C, N, R);
          },
          onMouseEnter(e) {
            O || "function" != typeof M || M(e),
              O &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              L &&
                (R || !N) &&
                v(
                  L,
                  A,
                  H,
                  { locale: C, priority: !0, bypassPrefetchedCheck: !0 },
                  N
                );
          },
          onTouchStart(e) {
            O || "function" != typeof k || k(e),
              O &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              L &&
                (R || !N) &&
                v(
                  L,
                  A,
                  H,
                  { locale: C, priority: !0, bypassPrefetchedCheck: !0 },
                  N
                );
          },
        };
        if (s.isAbsoluteUrl(H)) q.href = H;
        else if (!O || w || ("a" === n.type && !("href" in n.props))) {
          let e = void 0 !== C ? C : null == z ? void 0 : z.locale,
            t =
              (null == z ? void 0 : z.isLocaleDomain) &&
              h.getDomainLocale(
                H,
                e,
                null == z ? void 0 : z.locales,
                null == z ? void 0 : z.domainLocales
              );
          q.href =
            t ||
            g.addBasePath(
              u.addLocale(H, e, null == z ? void 0 : z.defaultLocale)
            );
        }
        return O
          ? i.default.cloneElement(n, q)
          : i.default.createElement("a", Object.assign({}, P, q), r);
      });
      (t.default = b),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    508: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          let { rootRef: t, rootMargin: r, disabled: c } = e,
            s = c || !i,
            [u, f] = n.useState(!1),
            d = n.useRef(null),
            p = n.useCallback((e) => {
              d.current = e;
            }, []);
          n.useEffect(() => {
            if (i) {
              if (s || u) return;
              let e = d.current;
              if (e && e.tagName) {
                let n = (function (e, t, r) {
                  let {
                    id: n,
                    observer: o,
                    elements: i,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = a.find(
                        (e) => e.root === r.root && e.margin === r.margin
                      );
                    if (n && (t = l.get(n))) return t;
                    let o = new Map(),
                      i = new IntersectionObserver((e) => {
                        e.forEach((e) => {
                          let t = o.get(e.target),
                            r = e.isIntersecting || e.intersectionRatio > 0;
                          t && r && t(r);
                        });
                      }, e);
                    return (
                      (t = { id: r, observer: i, elements: o }),
                      a.push(r),
                      l.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    i.set(e, t),
                    o.observe(e),
                    function () {
                      if ((i.delete(e), o.unobserve(e), 0 === i.size)) {
                        o.disconnect(), l.delete(n);
                        let e = a.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                        e > -1 && a.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && f(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
                return n;
              }
            } else if (!u) {
              let e = o.requestIdleCallback(() => f(!0));
              return () => o.cancelIdleCallback(e);
            }
          }, [s, r, t, u, d.current]);
          let h = n.useCallback(() => {
            f(!1);
          }, []);
          return [p, u, h];
        });
      var n = r(7294),
        o = r(29);
      let i = "function" == typeof IntersectionObserver,
        l = new Map(),
        a = [];
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7757: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getImageBlurSvg = function (e) {
          let {
              widthInt: t,
              heightInt: r,
              blurWidth: n,
              blurHeight: o,
              blurDataURL: i,
              objectFit: l,
            } = e,
            a = n || t,
            c = o || r,
            s = i.startsWith("data:image/jpeg")
              ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%"
              : "";
          return a && c
            ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "
                .concat(a, " ")
                .concat(
                  c,
                  "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"
                )
                .concat(n && o ? "1" : "20", "'/%3E")
                .concat(
                  s,
                  "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"
                )
                .concat(i, "'/%3E%3C/svg%3E")
            : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"
                .concat(
                  "contain" === l
                    ? "xMidYMid"
                    : "cover" === l
                    ? "xMidYMid slice"
                    : "none",
                  "' x='0' y='0' height='100%25' width='100%25' href='"
                )
                .concat(i, "'/%3E%3C/svg%3E");
        });
    },
    7746: function (e, t) {
      "use strict";
      function r(e) {
        let { config: t, src: r, width: n, quality: o } = e;
        return ""
          .concat(t.path, "?url=")
          .concat(encodeURIComponent(r), "&w=")
          .concat(n, "&q=")
          .concat(o || 75);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (r.__next_img_default = !0),
        (t.default = r);
    },
    4786: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return f;
          },
        });
      var n = r(5893),
        o = r(9008),
        i = r.n(o);
      r(7294);
      var l = r(1664),
        a = r.n(l);
      function c() {
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("div", {
            className: "nav-class",
            children: [
              (0, n.jsx)(a(), { href: "/", children: "Home" }),
              (0, n.jsx)(a(), { href: "/about", children: "about" }),
              (0, n.jsx)(a(), { href: "/contact", children: "Contact" }),
              (0, n.jsx)(a(), {
                href: "/flights",
                children: "DepatingFlights",
              }),
              (0, n.jsx)(a(), { href: "/flights", children: "ArivingFlight" }),
              (0, n.jsx)(a(), { href: "/training", children: "Training" }),
              (0, n.jsx)(a(), { href: "/users", children: "Users" }),
              (0, n.jsx)(a(), { href: "/checkout", children: "checkout" }),
            ],
          }),
        });
      }
      r(7952);
      var s = r(9854),
        u = r.n(s);
      r(5675);
      var f = function (e) {
        let { Component: t, pageProps: r } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(i(), {
              children: [
                (0, n.jsx)("title", { children: "StarBound" }),
                (0, n.jsx)("meta", {
                  name: "description",
                  content: "Generated by create next app",
                }),
                (0, n.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
              ],
            }),
            (0, n.jsx)(c, {}),
            (0, n.jsx)(t, { ...r }),
            (0, n.jsx)("footer", {
              className: u().footer,
              children: (0, n.jsx)("div", {
                children: "Hello i am your footer",
              }),
            }),
          ],
        });
      };
    },
    7952: function () {},
    9854: function (e) {
      e.exports = {
        main: "Home_main__EtNt2",
        description: "Home_description__Qwq1f",
        code: "Home_code__aGV0U",
        grid: "Home_grid__c_g6N",
        card: "Home_card__7oz7W",
        center: "Home_center__V0nxp",
        logo: "Home_logo__80mSr",
        thirteen: "Home_thirteen__ocdUI",
        rotate: "Home_rotate__99GkW",
        content: "Home_content___fOQz",
        vercelLogo: "Home_vercelLogo__lhIxO",
      };
    },
    9008: function (e, t, r) {
      e.exports = r(2636);
    },
    5675: function (e, t, r) {
      r(3740);
    },
    1664: function (e, t, r) {
      e.exports = r(5569);
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(1118), t(6885);
    }),
      (_N_E = e.O());
  },
]);
