(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
      0: function (t, e, n) {
        t.exports = n("zUnb")
      },
      "4R65": function (t, e, n) {
        ! function (t) {
          "use strict";
          var e = Object.freeze;

          function n(t) {
            var e, n, i, r;
            for (n = 1, i = arguments.length; n < i; n++)
              for (e in r = arguments[n]) t[e] = r[e];
            return t
          }
          Object.freeze = function (t) {
            return t
          };
          var i = Object.create || function () {
            function t() {}
            return function (e) {
              return t.prototype = e, new t
            }
          }();

          function r(t, e) {
            var n = Array.prototype.slice;
            if (t.bind) return t.bind.apply(t, n.call(arguments, 1));
            var i = n.call(arguments, 2);
            return function () {
              return t.apply(e, i.length ? i.concat(n.call(arguments)) : arguments)
            }
          }
          var s = 0;

          function o(t) {
            return t._leaflet_id = t._leaflet_id || ++s, t._leaflet_id
          }

          function a(t, e, n) {
            var i, r, s, o;
            return o = function () {
              i = !1, r && (s.apply(n, r), r = !1)
            }, s = function () {
              i ? r = arguments : (t.apply(n, arguments), setTimeout(o, e), i = !0)
            }
          }

          function l(t, e, n) {
            var i = e[1],
              r = e[0],
              s = i - r;
            return t === i && n ? t : ((t - r) % s + s) % s + r
          }

          function c() {
            return !1
          }

          function u(t, e) {
            var n = Math.pow(10, void 0 === e ? 6 : e);
            return Math.round(t * n) / n
          }

          function h(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
          }

          function d(t) {
            return h(t).split(/\s+/)
          }

          function p(t, e) {
            for (var n in t.hasOwnProperty("options") || (t.options = t.options ? i(t.options) : {}), e) t.options[n] = e[n];
            return t.options
          }

          function f(t, e, n) {
            var i = [];
            for (var r in t) i.push(encodeURIComponent(n ? r.toUpperCase() : r) + "=" + encodeURIComponent(t[r]));
            return (e && -1 !== e.indexOf("?") ? "&" : "?") + i.join("&")
          }
          var m = /\{ *([\w_-]+) *\}/g;

          function g(t, e) {
            return t.replace(m, (function (t, n) {
              var i = e[n];
              if (void 0 === i) throw new Error("No value provided for variable " + t);
              return "function" == typeof i && (i = i(e)), i
            }))
          }
          var v = Array.isArray || function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
          };

          function _(t, e) {
            for (var n = 0; n < t.length; n++)
              if (t[n] === e) return n;
            return -1
          }
          var y = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

          function b(t) {
            return window["webkit" + t] || window["moz" + t] || window["ms" + t]
          }
          var w = 0;

          function x(t) {
            var e = +new Date,
              n = Math.max(0, 16 - (e - w));
            return w = e + n, window.setTimeout(t, n)
          }
          var S = window.requestAnimationFrame || b("RequestAnimationFrame") || x,
            C = window.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || function (t) {
              window.clearTimeout(t)
            };

          function k(t, e, n) {
            if (!n || S !== x) return S.call(window, r(t, e));
            t.call(e)
          }

          function P(t) {
            t && C.call(window, t)
          }
          var E = (Object.freeze || Object)({
            freeze: e,
            extend: n,
            create: i,
            bind: r,
            lastId: s,
            stamp: o,
            throttle: a,
            wrapNum: l,
            falseFn: c,
            formatNum: u,
            trim: h,
            splitWords: d,
            setOptions: p,
            getParamString: f,
            template: g,
            isArray: v,
            indexOf: _,
            emptyImageUrl: y,
            requestFn: S,
            cancelFn: C,
            requestAnimFrame: k,
            cancelAnimFrame: P
          });

          function T() {}
          T.extend = function (t) {
            var e = function () {
                this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
              },
              r = e.__super__ = this.prototype,
              s = i(r);
            for (var o in s.constructor = e, e.prototype = s, this) this.hasOwnProperty(o) && "prototype" !== o && "__super__" !== o && (e[o] = this[o]);
            return t.statics && (n(e, t.statics), delete t.statics), t.includes && (function (t) {
              if ("undefined" != typeof L && L && L.Mixin) {
                t = v(t) ? t : [t];
                for (var e = 0; e < t.length; e++) t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
              }
            }(t.includes), n.apply(null, [s].concat(t.includes)), delete t.includes), s.options && (t.options = n(i(s.options), t.options)), n(s, t), s._initHooks = [], s.callInitHooks = function () {
              if (!this._initHooksCalled) {
                r.callInitHooks && r.callInitHooks.call(this), this._initHooksCalled = !0;
                for (var t = 0, e = s._initHooks.length; t < e; t++) s._initHooks[t].call(this)
              }
            }, e
          }, T.include = function (t) {
            return n(this.prototype, t), this
          }, T.mergeOptions = function (t) {
            return n(this.prototype.options, t), this
          }, T.addInitHook = function (t) {
            var e = Array.prototype.slice.call(arguments, 1),
              n = "function" == typeof t ? t : function () {
                this[t].apply(this, e)
              };
            return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(n), this
          };
          var A = {
            on: function (t, e, n) {
              if ("object" == typeof t)
                for (var i in t) this._on(i, t[i], e);
              else
                for (var r = 0, s = (t = d(t)).length; r < s; r++) this._on(t[r], e, n);
              return this
            },
            off: function (t, e, n) {
              if (t)
                if ("object" == typeof t)
                  for (var i in t) this._off(i, t[i], e);
                else
                  for (var r = 0, s = (t = d(t)).length; r < s; r++) this._off(t[r], e, n);
              else delete this._events;
              return this
            },
            _on: function (t, e, n) {
              this._events = this._events || {};
              var i = this._events[t];
              i || (this._events[t] = i = []), n === this && (n = void 0);
              for (var r = {
                  fn: e,
                  ctx: n
                }, s = i, o = 0, a = s.length; o < a; o++)
                if (s[o].fn === e && s[o].ctx === n) return;
              s.push(r)
            },
            _off: function (t, e, n) {
              var i, r, s;
              if (this._events && (i = this._events[t]))
                if (e) {
                  if (n === this && (n = void 0), i)
                    for (r = 0, s = i.length; r < s; r++) {
                      var o = i[r];
                      if (o.ctx === n && o.fn === e) return o.fn = c, this._firingCount && (this._events[t] = i = i.slice()), void i.splice(r, 1)
                    }
                } else {
                  for (r = 0, s = i.length; r < s; r++) i[r].fn = c;
                  delete this._events[t]
                }
            },
            fire: function (t, e, i) {
              if (!this.listens(t, i)) return this;
              var r = n({}, e, {
                type: t,
                target: this,
                sourceTarget: e && e.sourceTarget || this
              });
              if (this._events) {
                var s = this._events[t];
                if (s) {
                  this._firingCount = this._firingCount + 1 || 1;
                  for (var o = 0, a = s.length; o < a; o++) {
                    var l = s[o];
                    l.fn.call(l.ctx || this, r)
                  }
                  this._firingCount--
                }
              }
              return i && this._propagateEvent(r), this
            },
            listens: function (t, e) {
              var n = this._events && this._events[t];
              if (n && n.length) return !0;
              if (e)
                for (var i in this._eventParents)
                  if (this._eventParents[i].listens(t, e)) return !0;
              return !1
            },
            once: function (t, e, n) {
              if ("object" == typeof t) {
                for (var i in t) this.once(i, t[i], e);
                return this
              }
              var s = r((function () {
                this.off(t, e, n).off(t, s, n)
              }), this);
              return this.on(t, e, n).on(t, s, n)
            },
            addEventParent: function (t) {
              return this._eventParents = this._eventParents || {}, this._eventParents[o(t)] = t, this
            },
            removeEventParent: function (t) {
              return this._eventParents && delete this._eventParents[o(t)], this
            },
            _propagateEvent: function (t) {
              for (var e in this._eventParents) this._eventParents[e].fire(t.type, n({
                layer: t.target,
                propagatedFrom: t.target
              }, t), !0)
            }
          };
          A.addEventListener = A.on, A.removeEventListener = A.clearAllEventListeners = A.off, A.addOneTimeEventListener = A.once, A.fireEvent = A.fire, A.hasEventListeners = A.listens;
          var I = T.extend(A);

          function M(t, e, n) {
            this.x = n ? Math.round(t) : t, this.y = n ? Math.round(e) : e
          }
          var O = Math.trunc || function (t) {
            return t > 0 ? Math.floor(t) : Math.ceil(t)
          };

          function N(t, e, n) {
            return t instanceof M ? t : v(t) ? new M(t[0], t[1]) : null == t ? t : "object" == typeof t && "x" in t && "y" in t ? new M(t.x, t.y) : new M(t, e, n)
          }

          function R(t, e) {
            if (t)
              for (var n = e ? [t, e] : t, i = 0, r = n.length; i < r; i++) this.extend(n[i])
          }

          function F(t, e) {
            return !t || t instanceof R ? t : new R(t, e)
          }

          function D(t, e) {
            if (t)
              for (var n = e ? [t, e] : t, i = 0, r = n.length; i < r; i++) this.extend(n[i])
          }

          function z(t, e) {
            return t instanceof D ? t : new D(t, e)
          }

          function j(t, e, n) {
            if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
            this.lat = +t, this.lng = +e, void 0 !== n && (this.alt = +n)
          }

          function V(t, e, n) {
            return t instanceof j ? t : v(t) && "object" != typeof t[0] ? 3 === t.length ? new j(t[0], t[1], t[2]) : 2 === t.length ? new j(t[0], t[1]) : null : null == t ? t : "object" == typeof t && "lat" in t ? new j(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === e ? null : new j(t, e, n)
          }
          M.prototype = {
            clone: function () {
              return new M(this.x, this.y)
            },
            add: function (t) {
              return this.clone()._add(N(t))
            },
            _add: function (t) {
              return this.x += t.x, this.y += t.y, this
            },
            subtract: function (t) {
              return this.clone()._subtract(N(t))
            },
            _subtract: function (t) {
              return this.x -= t.x, this.y -= t.y, this
            },
            divideBy: function (t) {
              return this.clone()._divideBy(t)
            },
            _divideBy: function (t) {
              return this.x /= t, this.y /= t, this
            },
            multiplyBy: function (t) {
              return this.clone()._multiplyBy(t)
            },
            _multiplyBy: function (t) {
              return this.x *= t, this.y *= t, this
            },
            scaleBy: function (t) {
              return new M(this.x * t.x, this.y * t.y)
            },
            unscaleBy: function (t) {
              return new M(this.x / t.x, this.y / t.y)
            },
            round: function () {
              return this.clone()._round()
            },
            _round: function () {
              return this.x = Math.round(this.x), this.y = Math.round(this.y), this
            },
            floor: function () {
              return this.clone()._floor()
            },
            _floor: function () {
              return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
            },
            ceil: function () {
              return this.clone()._ceil()
            },
            _ceil: function () {
              return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
            },
            trunc: function () {
              return this.clone()._trunc()
            },
            _trunc: function () {
              return this.x = O(this.x), this.y = O(this.y), this
            },
            distanceTo: function (t) {
              var e = (t = N(t)).x - this.x,
                n = t.y - this.y;
              return Math.sqrt(e * e + n * n)
            },
            equals: function (t) {
              return (t = N(t)).x === this.x && t.y === this.y
            },
            contains: function (t) {
              return t = N(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
            },
            toString: function () {
              return "Point(" + u(this.x) + ", " + u(this.y) + ")"
            }
          }, R.prototype = {
            extend: function (t) {
              return t = N(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
            },
            getCenter: function (t) {
              return new M((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
            },
            getBottomLeft: function () {
              return new M(this.min.x, this.max.y)
            },
            getTopRight: function () {
              return new M(this.max.x, this.min.y)
            },
            getTopLeft: function () {
              return this.min
            },
            getBottomRight: function () {
              return this.max
            },
            getSize: function () {
              return this.max.subtract(this.min)
            },
            contains: function (t) {
              var e, n;
              return (t = "number" == typeof t[0] || t instanceof M ? N(t) : F(t)) instanceof R ? (e = t.min, n = t.max) : e = n = t, e.x >= this.min.x && n.x <= this.max.x && e.y >= this.min.y && n.y <= this.max.y
            },
            intersects: function (t) {
              t = F(t);
              var e = this.min,
                n = this.max,
                i = t.min,
                r = t.max;
              return r.x >= e.x && i.x <= n.x && r.y >= e.y && i.y <= n.y
            },
            overlaps: function (t) {
              t = F(t);
              var e = this.min,
                n = this.max,
                i = t.min,
                r = t.max;
              return r.x > e.x && i.x < n.x && r.y > e.y && i.y < n.y
            },
            isValid: function () {
              return !(!this.min || !this.max)
            }
          }, D.prototype = {
            extend: function (t) {
              var e, n, i = this._southWest,
                r = this._northEast;
              if (t instanceof j) e = t, n = t;
              else {
                if (!(t instanceof D)) return t ? this.extend(V(t) || z(t)) : this;
                if (n = t._northEast, !(e = t._southWest) || !n) return this
              }
              return i || r ? (i.lat = Math.min(e.lat, i.lat), i.lng = Math.min(e.lng, i.lng), r.lat = Math.max(n.lat, r.lat), r.lng = Math.max(n.lng, r.lng)) : (this._southWest = new j(e.lat, e.lng), this._northEast = new j(n.lat, n.lng)), this
            },
            pad: function (t) {
              var e = this._southWest,
                n = this._northEast,
                i = Math.abs(e.lat - n.lat) * t,
                r = Math.abs(e.lng - n.lng) * t;
              return new D(new j(e.lat - i, e.lng - r), new j(n.lat + i, n.lng + r))
            },
            getCenter: function () {
              return new j((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
            },
            getSouthWest: function () {
              return this._southWest
            },
            getNorthEast: function () {
              return this._northEast
            },
            getNorthWest: function () {
              return new j(this.getNorth(), this.getWest())
            },
            getSouthEast: function () {
              return new j(this.getSouth(), this.getEast())
            },
            getWest: function () {
              return this._southWest.lng
            },
            getSouth: function () {
              return this._southWest.lat
            },
            getEast: function () {
              return this._northEast.lng
            },
            getNorth: function () {
              return this._northEast.lat
            },
            contains: function (t) {
              t = "number" == typeof t[0] || t instanceof j || "lat" in t ? V(t) : z(t);
              var e, n, i = this._southWest,
                r = this._northEast;
              return t instanceof D ? (e = t.getSouthWest(), n = t.getNorthEast()) : e = n = t, e.lat >= i.lat && n.lat <= r.lat && e.lng >= i.lng && n.lng <= r.lng
            },
            intersects: function (t) {
              t = z(t);
              var e = this._southWest,
                n = this._northEast,
                i = t.getSouthWest(),
                r = t.getNorthEast();
              return r.lat >= e.lat && i.lat <= n.lat && r.lng >= e.lng && i.lng <= n.lng
            },
            overlaps: function (t) {
              t = z(t);
              var e = this._southWest,
                n = this._northEast,
                i = t.getSouthWest(),
                r = t.getNorthEast();
              return r.lat > e.lat && i.lat < n.lat && r.lng > e.lng && i.lng < n.lng
            },
            toBBoxString: function () {
              return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
            },
            equals: function (t, e) {
              return !!t && (t = z(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
            },
            isValid: function () {
              return !(!this._southWest || !this._northEast)
            }
          }, j.prototype = {
            equals: function (t, e) {
              return !!t && (t = V(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e))
            },
            toString: function (t) {
              return "LatLng(" + u(this.lat, t) + ", " + u(this.lng, t) + ")"
            },
            distanceTo: function (t) {
              return B.distance(this, V(t))
            },
            wrap: function () {
              return B.wrapLatLng(this)
            },
            toBounds: function (t) {
              var e = 180 * t / 40075017,
                n = e / Math.cos(Math.PI / 180 * this.lat);
              return z([this.lat - e, this.lng - n], [this.lat + e, this.lng + n])
            },
            clone: function () {
              return new j(this.lat, this.lng, this.alt)
            }
          };
          var U, H = {
              latLngToPoint: function (t, e) {
                var n = this.projection.project(t),
                  i = this.scale(e);
                return this.transformation._transform(n, i)
              },
              pointToLatLng: function (t, e) {
                var n = this.scale(e),
                  i = this.transformation.untransform(t, n);
                return this.projection.unproject(i)
              },
              project: function (t) {
                return this.projection.project(t)
              },
              unproject: function (t) {
                return this.projection.unproject(t)
              },
              scale: function (t) {
                return 256 * Math.pow(2, t)
              },
              zoom: function (t) {
                return Math.log(t / 256) / Math.LN2
              },
              getProjectedBounds: function (t) {
                if (this.infinite) return null;
                var e = this.projection.bounds,
                  n = this.scale(t);
                return new R(this.transformation.transform(e.min, n), this.transformation.transform(e.max, n))
              },
              infinite: !1,
              wrapLatLng: function (t) {
                var e = this.wrapLng ? l(t.lng, this.wrapLng, !0) : t.lng;
                return new j(this.wrapLat ? l(t.lat, this.wrapLat, !0) : t.lat, e, t.alt)
              },
              wrapLatLngBounds: function (t) {
                var e = t.getCenter(),
                  n = this.wrapLatLng(e),
                  i = e.lat - n.lat,
                  r = e.lng - n.lng;
                if (0 === i && 0 === r) return t;
                var s = t.getSouthWest(),
                  o = t.getNorthEast();
                return new D(new j(s.lat - i, s.lng - r), new j(o.lat - i, o.lng - r))
              }
            },
            B = n({}, H, {
              wrapLng: [-180, 180],
              R: 6371e3,
              distance: function (t, e) {
                var n = Math.PI / 180,
                  i = t.lat * n,
                  r = e.lat * n,
                  s = Math.sin((e.lat - t.lat) * n / 2),
                  o = Math.sin((e.lng - t.lng) * n / 2),
                  a = s * s + Math.cos(i) * Math.cos(r) * o * o,
                  l = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                return this.R * l
              }
            }),
            $ = {
              R: 6378137,
              MAX_LATITUDE: 85.0511287798,
              project: function (t) {
                var e = Math.PI / 180,
                  n = this.MAX_LATITUDE,
                  i = Math.max(Math.min(n, t.lat), -n),
                  r = Math.sin(i * e);
                return new M(this.R * t.lng * e, this.R * Math.log((1 + r) / (1 - r)) / 2)
              },
              unproject: function (t) {
                var e = 180 / Math.PI;
                return new j((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R)
              },
              bounds: (U = 6378137 * Math.PI, new R([-U, -U], [U, U]))
            };

          function Z(t, e, n, i) {
            if (v(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void(this._d = t[3]);
            this._a = t, this._b = e, this._c = n, this._d = i
          }

          function q(t, e, n, i) {
            return new Z(t, e, n, i)
          }
          Z.prototype = {
            transform: function (t, e) {
              return this._transform(t.clone(), e)
            },
            _transform: function (t, e) {
              return t.x = (e = e || 1) * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
            },
            untransform: function (t, e) {
              return new M((t.x / (e = e || 1) - this._b) / this._a, (t.y / e - this._d) / this._c)
            }
          };
          var G, W = n({}, B, {
              code: "EPSG:3857",
              projection: $,
              transformation: (G = .5 / (Math.PI * $.R), q(G, .5, -G, .5))
            }),
            K = n({}, W, {
              code: "EPSG:900913"
            });

          function Y(t) {
            return document.createElementNS("http://www.w3.org/2000/svg", t)
          }

          function J(t, e) {
            var n, i, r, s, o, a, l = "";
            for (n = 0, r = t.length; n < r; n++) {
              for (i = 0, s = (o = t[n]).length; i < s; i++) l += (i ? "L" : "M") + (a = o[i]).x + " " + a.y;
              l += e ? Lt ? "z" : "x" : ""
            }
            return l || "M0 0"
          }
          var Q = document.documentElement.style,
            X = "ActiveXObject" in window,
            tt = X && !document.addEventListener,
            et = "msLaunchUri" in navigator && !("documentMode" in document),
            nt = It("webkit"),
            it = It("android"),
            rt = It("android 2") || It("android 3"),
            st = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
            ot = it && It("Google") && st < 537 && !("AudioNode" in window),
            at = !!window.opera,
            lt = It("chrome"),
            ct = It("gecko") && !nt && !at && !X,
            ut = !lt && It("safari"),
            ht = It("phantom"),
            dt = "OTransition" in Q,
            pt = 0 === navigator.platform.indexOf("Win"),
            ft = X && "transition" in Q,
            mt = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !rt,
            gt = "MozPerspective" in Q,
            vt = !window.L_DISABLE_3D && (ft || mt || gt) && !dt && !ht,
            _t = "undefined" != typeof orientation || It("mobile"),
            yt = _t && nt,
            bt = _t && mt,
            wt = !window.PointerEvent && window.MSPointerEvent,
            xt = !(nt || !window.PointerEvent && !wt),
            St = !window.L_NO_TOUCH && (xt || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
            Ct = _t && at,
            kt = _t && ct,
            Pt = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
            Et = function () {
              var t = !1;
              try {
                var e = Object.defineProperty({}, "passive", {
                  get: function () {
                    t = !0
                  }
                });
                window.addEventListener("testPassiveEventSupport", c, e), window.removeEventListener("testPassiveEventSupport", c, e)
              } catch (n) {}
              return t
            },
            Tt = !!document.createElement("canvas").getContext,
            Lt = !(!document.createElementNS || !Y("svg").createSVGRect),
            At = !Lt && function () {
              try {
                var t = document.createElement("div");
                t.innerHTML = '<v:shape adj="1"/>';
                var e = t.firstChild;
                return e.style.behavior = "url(#default#VML)", e && "object" == typeof e.adj
              } catch (n) {
                return !1
              }
            }();

          function It(t) {
            return navigator.userAgent.toLowerCase().indexOf(t) >= 0
          }
          var Mt = (Object.freeze || Object)({
              ie: X,
              ielt9: tt,
              edge: et,
              webkit: nt,
              android: it,
              android23: rt,
              androidStock: ot,
              opera: at,
              chrome: lt,
              gecko: ct,
              safari: ut,
              phantom: ht,
              opera12: dt,
              win: pt,
              ie3d: ft,
              webkit3d: mt,
              gecko3d: gt,
              any3d: vt,
              mobile: _t,
              mobileWebkit: yt,
              mobileWebkit3d: bt,
              msPointer: wt,
              pointer: xt,
              touch: St,
              mobileOpera: Ct,
              mobileGecko: kt,
              retina: Pt,
              passiveEvents: Et,
              canvas: Tt,
              svg: Lt,
              vml: At
            }),
            Ot = wt ? "MSPointerDown" : "pointerdown",
            Nt = wt ? "MSPointerMove" : "pointermove",
            Rt = wt ? "MSPointerUp" : "pointerup",
            Ft = wt ? "MSPointerCancel" : "pointercancel",
            Dt = ["INPUT", "SELECT", "OPTION"],
            zt = {},
            jt = !1,
            Vt = 0;

          function Ut(t) {
            zt[t.pointerId] = t, Vt++
          }

          function Ht(t) {
            zt[t.pointerId] && (zt[t.pointerId] = t)
          }

          function Bt(t) {
            delete zt[t.pointerId], Vt--
          }

          function $t(t, e) {
            for (var n in t.touches = [], zt) t.touches.push(zt[n]);
            t.changedTouches = [t], e(t)
          }
          var Zt = wt ? "MSPointerDown" : xt ? "pointerdown" : "touchstart",
            qt = wt ? "MSPointerUp" : xt ? "pointerup" : "touchend",
            Gt = "_leaflet_";

          function Wt(t, e, n) {
            var i, r, s = !1;

            function o(t) {
              var e;
              if (xt) {
                if (!et || "mouse" === t.pointerType) return;
                e = Vt
              } else e = t.touches.length;
              if (!(e > 1)) {
                var n = Date.now(),
                  o = n - (i || n);
                r = t.touches ? t.touches[0] : t, s = o > 0 && o <= 250, i = n
              }
            }

            function a(t) {
              if (s && !r.cancelBubble) {
                if (xt) {
                  if (!et || "mouse" === t.pointerType) return;
                  var n, o, a = {};
                  for (o in r) a[o] = (n = r[o]) && n.bind ? n.bind(r) : n;
                  r = a
                }
                r.type = "dblclick", r.button = 0, e(r), i = null
              }
            }
            return t[Gt + Zt + n] = o, t[Gt + qt + n] = a, t[Gt + "dblclick" + n] = e, t.addEventListener(Zt, o, !!Et && {
              passive: !1
            }), t.addEventListener(qt, a, !!Et && {
              passive: !1
            }), t.addEventListener("dblclick", e, !1), this
          }

          function Kt(t, e) {
            var n = t[Gt + qt + e],
              i = t[Gt + "dblclick" + e];
            return t.removeEventListener(Zt, t[Gt + Zt + e], !!Et && {
              passive: !1
            }), t.removeEventListener(qt, n, !!Et && {
              passive: !1
            }), et || t.removeEventListener("dblclick", i, !1), this
          }
          var Yt, Jt, Qt, Xt, te, ee = ve(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
            ne = ve(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
            ie = "webkitTransition" === ne || "OTransition" === ne ? ne + "End" : "transitionend";

          function re(t) {
            return "string" == typeof t ? document.getElementById(t) : t
          }

          function se(t, e) {
            var n = t.style[e] || t.currentStyle && t.currentStyle[e];
            if ((!n || "auto" === n) && document.defaultView) {
              var i = document.defaultView.getComputedStyle(t, null);
              n = i ? i[e] : null
            }
            return "auto" === n ? null : n
          }

          function oe(t, e, n) {
            var i = document.createElement(t);
            return i.className = e || "", n && n.appendChild(i), i
          }

          function ae(t) {
            var e = t.parentNode;
            e && e.removeChild(t)
          }

          function le(t) {
            for (; t.firstChild;) t.removeChild(t.firstChild)
          }

          function ce(t) {
            var e = t.parentNode;
            e && e.lastChild !== t && e.appendChild(t)
          }

          function ue(t) {
            var e = t.parentNode;
            e && e.firstChild !== t && e.insertBefore(t, e.firstChild)
          }

          function he(t, e) {
            if (void 0 !== t.classList) return t.classList.contains(e);
            var n = me(t);
            return n.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n)
          }

          function de(t, e) {
            if (void 0 !== t.classList)
              for (var n = d(e), i = 0, r = n.length; i < r; i++) t.classList.add(n[i]);
            else if (!he(t, e)) {
              var s = me(t);
              fe(t, (s ? s + " " : "") + e)
            }
          }

          function pe(t, e) {
            void 0 !== t.classList ? t.classList.remove(e) : fe(t, h((" " + me(t) + " ").replace(" " + e + " ", " ")))
          }

          function fe(t, e) {
            void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
          }

          function me(t) {
            return t.correspondingElement && (t = t.correspondingElement), void 0 === t.className.baseVal ? t.className : t.className.baseVal
          }

          function ge(t, e) {
            "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && function (t, e) {
              var n = !1,
                i = "DXImageTransform.Microsoft.Alpha";
              try {
                n = t.filters.item(i)
              } catch (r) {
                if (1 === e) return
              }
              e = Math.round(100 * e), n ? (n.Enabled = 100 !== e, n.Opacity = e) : t.style.filter += " progid:" + i + "(opacity=" + e + ")"
            }(t, e)
          }

          function ve(t) {
            for (var e = document.documentElement.style, n = 0; n < t.length; n++)
              if (t[n] in e) return t[n];
            return !1
          }

          function _e(t, e, n) {
            var i = e || new M(0, 0);
            t.style[ee] = (ft ? "translate(" + i.x + "px," + i.y + "px)" : "translate3d(" + i.x + "px," + i.y + "px,0)") + (n ? " scale(" + n + ")" : "")
          }

          function ye(t, e) {
            t._leaflet_pos = e, vt ? _e(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
          }

          function be(t) {
            return t._leaflet_pos || new M(0, 0)
          }
          if ("onselectstart" in document) Yt = function () {
            Le(window, "selectstart", De)
          }, Jt = function () {
            Ie(window, "selectstart", De)
          };
          else {
            var we = ve(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
            Yt = function () {
              if (we) {
                var t = document.documentElement.style;
                Qt = t[we], t[we] = "none"
              }
            }, Jt = function () {
              we && (document.documentElement.style[we] = Qt, Qt = void 0)
            }
          }

          function xe() {
            Le(window, "dragstart", De)
          }

          function Se() {
            Ie(window, "dragstart", De)
          }

          function Ce(t) {
            for (; - 1 === t.tabIndex;) t = t.parentNode;
            t.style && (ke(), Xt = t, te = t.style.outline, t.style.outline = "none", Le(window, "keydown", ke))
          }

          function ke() {
            Xt && (Xt.style.outline = te, Xt = void 0, te = void 0, Ie(window, "keydown", ke))
          }

          function Pe(t) {
            do {
              t = t.parentNode
            } while (!(t.offsetWidth && t.offsetHeight || t === document.body));
            return t
          }

          function Ee(t) {
            var e = t.getBoundingClientRect();
            return {
              x: e.width / t.offsetWidth || 1,
              y: e.height / t.offsetHeight || 1,
              boundingClientRect: e
            }
          }
          var Te = (Object.freeze || Object)({
            TRANSFORM: ee,
            TRANSITION: ne,
            TRANSITION_END: ie,
            get: re,
            getStyle: se,
            create: oe,
            remove: ae,
            empty: le,
            toFront: ce,
            toBack: ue,
            hasClass: he,
            addClass: de,
            removeClass: pe,
            setClass: fe,
            getClass: me,
            setOpacity: ge,
            testProp: ve,
            setTransform: _e,
            setPosition: ye,
            getPosition: be,
            disableTextSelection: Yt,
            enableTextSelection: Jt,
            disableImageDrag: xe,
            enableImageDrag: Se,
            preventOutline: Ce,
            restoreOutline: ke,
            getSizedParentNode: Pe,
            getScale: Ee
          });

          function Le(t, e, n, i) {
            if ("object" == typeof e)
              for (var r in e) Me(t, r, e[r], n);
            else
              for (var s = 0, o = (e = d(e)).length; s < o; s++) Me(t, e[s], n, i);
            return this
          }
          var Ae = "_leaflet_events";

          function Ie(t, e, n, i) {
            if ("object" == typeof e)
              for (var r in e) Oe(t, r, e[r], n);
            else if (e)
              for (var s = 0, o = (e = d(e)).length; s < o; s++) Oe(t, e[s], n, i);
            else {
              for (var a in t[Ae]) Oe(t, a, t[Ae][a]);
              delete t[Ae]
            }
            return this
          }

          function Me(t, e, n, i) {
            var s = e + o(n) + (i ? "_" + o(i) : "");
            if (t[Ae] && t[Ae][s]) return this;
            var a = function (e) {
                return n.call(i || t, e || window.event)
              },
              l = a;
            xt && 0 === e.indexOf("touch") ? function (t, e, n, i) {
              "touchstart" === e ? function (t, e, n) {
                var i = r((function (t) {
                  if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                    if (!(Dt.indexOf(t.target.tagName) < 0)) return;
                    De(t)
                  }
                  $t(t, e)
                }));
                t["_leaflet_touchstart" + n] = i, t.addEventListener(Ot, i, !1), jt || (document.documentElement.addEventListener(Ot, Ut, !0), document.documentElement.addEventListener(Nt, Ht, !0), document.documentElement.addEventListener(Rt, Bt, !0), document.documentElement.addEventListener(Ft, Bt, !0), jt = !0)
              }(t, n, i) : "touchmove" === e ? function (t, e, n) {
                var i = function (t) {
                  (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && $t(t, e)
                };
                t["_leaflet_touchmove" + n] = i, t.addEventListener(Nt, i, !1)
              }(t, n, i) : "touchend" === e && function (t, e, n) {
                var i = function (t) {
                  $t(t, e)
                };
                t["_leaflet_touchend" + n] = i, t.addEventListener(Rt, i, !1), t.addEventListener(Ft, i, !1)
              }(t, n, i)
            }(t, e, a, s) : !St || "dblclick" !== e || !Wt || xt && lt ? "addEventListener" in t ? "mousewheel" === e ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", a, !!Et && {
              passive: !1
            }) : "mouseenter" === e || "mouseleave" === e ? t.addEventListener("mouseenter" === e ? "mouseover" : "mouseout", a = function (e) {
              e = e || window.event, qe(t, e) && l(e)
            }, !1) : ("click" === e && it && (a = function (t) {
              ! function (t, e) {
                var n = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
                  i = He && n - He;
                i && i > 100 && i < 500 || t.target._simulatedClick && !t._simulated ? ze(t) : (He = n, e(t))
              }(t, l)
            }), t.addEventListener(e, a, !1)) : "attachEvent" in t && t.attachEvent("on" + e, a) : Wt(t, a, s), t[Ae] = t[Ae] || {}, t[Ae][s] = a
          }

          function Oe(t, e, n, i) {
            var r = e + o(n) + (i ? "_" + o(i) : ""),
              s = t[Ae] && t[Ae][r];
            if (!s) return this;
            xt && 0 === e.indexOf("touch") ? function (t, e, n) {
              var i = t["_leaflet_" + e + n];
              "touchstart" === e ? t.removeEventListener(Ot, i, !1) : "touchmove" === e ? t.removeEventListener(Nt, i, !1) : "touchend" === e && (t.removeEventListener(Rt, i, !1), t.removeEventListener(Ft, i, !1))
            }(t, e, r) : !St || "dblclick" !== e || !Kt || xt && lt ? "removeEventListener" in t ? "mousewheel" === e ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", s, !!Et && {
              passive: !1
            }) : t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, s, !1) : "detachEvent" in t && t.detachEvent("on" + e, s) : Kt(t, r), t[Ae][r] = null
          }

          function Ne(t) {
            return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, Ze(t), this
          }

          function Re(t) {
            return Me(t, "mousewheel", Ne), this
          }

          function Fe(t) {
            return Le(t, "mousedown touchstart dblclick", Ne), Me(t, "click", $e), this
          }

          function De(t) {
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
          }

          function ze(t) {
            return De(t), Ne(t), this
          }

          function je(t, e) {
            if (!e) return new M(t.clientX, t.clientY);
            var n = Ee(e),
              i = n.boundingClientRect;
            return new M((t.clientX - i.left) / n.x - e.clientLeft, (t.clientY - i.top) / n.y - e.clientTop)
          }
          var Ve = pt && lt ? 2 * window.devicePixelRatio : ct ? window.devicePixelRatio : 1;

          function Ue(t) {
            return et ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / Ve : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
          }
          var He, Be = {};

          function $e(t) {
            Be[t.type] = !0
          }

          function Ze(t) {
            var e = Be[t.type];
            return Be[t.type] = !1, e
          }

          function qe(t, e) {
            var n = e.relatedTarget;
            if (!n) return !0;
            try {
              for (; n && n !== t;) n = n.parentNode
            } catch (i) {
              return !1
            }
            return n !== t
          }
          var Ge = (Object.freeze || Object)({
              on: Le,
              off: Ie,
              stopPropagation: Ne,
              disableScrollPropagation: Re,
              disableClickPropagation: Fe,
              preventDefault: De,
              stop: ze,
              getMousePosition: je,
              getWheelDelta: Ue,
              fakeStop: $e,
              skipped: Ze,
              isExternalTarget: qe,
              addListener: Le,
              removeListener: Ie
            }),
            We = I.extend({
              run: function (t, e, n, i) {
                this.stop(), this._el = t, this._inProgress = !0, this._duration = n || .25, this._easeOutPower = 1 / Math.max(i || .5, .2), this._startPos = be(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
              },
              stop: function () {
                this._inProgress && (this._step(!0), this._complete())
              },
              _animate: function () {
                this._animId = k(this._animate, this), this._step()
              },
              _step: function (t) {
                var e = +new Date - this._startTime,
                  n = 1e3 * this._duration;
                e < n ? this._runFrame(this._easeOut(e / n), t) : (this._runFrame(1), this._complete())
              },
              _runFrame: function (t, e) {
                var n = this._startPos.add(this._offset.multiplyBy(t));
                e && n._round(), ye(this._el, n), this.fire("step")
              },
              _complete: function () {
                P(this._animId), this._inProgress = !1, this.fire("end")
              },
              _easeOut: function (t) {
                return 1 - Math.pow(1 - t, this._easeOutPower)
              }
            }),
            Ke = I.extend({
              options: {
                crs: W,
                center: void 0,
                zoom: void 0,
                minZoom: void 0,
                maxZoom: void 0,
                layers: [],
                maxBounds: void 0,
                renderer: void 0,
                zoomAnimation: !0,
                zoomAnimationThreshold: 4,
                fadeAnimation: !0,
                markerZoomAnimation: !0,
                transform3DLimit: 8388608,
                zoomSnap: 1,
                zoomDelta: 1,
                trackResize: !0
              },
              initialize: function (t, e) {
                e = p(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = r(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)), e.center && void 0 !== e.zoom && this.setView(V(e.center), e.zoom, {
                  reset: !0
                }), this.callInitHooks(), this._zoomAnimated = ne && vt && !Ct && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), Le(this._proxy, ie, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
              },
              setView: function (t, e, i) {
                return e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(V(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && !0 !== i && (void 0 !== i.animate && (i.zoom = n({
                  animate: i.animate
                }, i.zoom), i.pan = n({
                  animate: i.animate,
                  duration: i.duration
                }, i.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan)) ? (clearTimeout(this._sizeTimer), this) : (this._resetView(t, e), this)
              },
              setZoom: function (t, e) {
                return this._loaded ? this.setView(this.getCenter(), t, {
                  zoom: e
                }) : (this._zoom = t, this)
              },
              zoomIn: function (t, e) {
                return this.setZoom(this._zoom + (t = t || (vt ? this.options.zoomDelta : 1)), e)
              },
              zoomOut: function (t, e) {
                return this.setZoom(this._zoom - (t = t || (vt ? this.options.zoomDelta : 1)), e)
              },
              setZoomAround: function (t, e, n) {
                var i = this.getZoomScale(e),
                  r = this.getSize().divideBy(2),
                  s = (t instanceof M ? t : this.latLngToContainerPoint(t)).subtract(r).multiplyBy(1 - 1 / i),
                  o = this.containerPointToLatLng(r.add(s));
                return this.setView(o, e, {
                  zoom: n
                })
              },
              _getBoundsCenterZoom: function (t, e) {
                e = e || {}, t = t.getBounds ? t.getBounds() : z(t);
                var n = N(e.paddingTopLeft || e.padding || [0, 0]),
                  i = N(e.paddingBottomRight || e.padding || [0, 0]),
                  r = this.getBoundsZoom(t, !1, n.add(i));
                if ((r = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, r) : r) === 1 / 0) return {
                  center: t.getCenter(),
                  zoom: r
                };
                var s = i.subtract(n).divideBy(2),
                  o = this.project(t.getSouthWest(), r),
                  a = this.project(t.getNorthEast(), r);
                return {
                  center: this.unproject(o.add(a).divideBy(2).add(s), r),
                  zoom: r
                }
              },
              fitBounds: function (t, e) {
                if (!(t = z(t)).isValid()) throw new Error("Bounds are not valid.");
                var n = this._getBoundsCenterZoom(t, e);
                return this.setView(n.center, n.zoom, e)
              },
              fitWorld: function (t) {
                return this.fitBounds([
                  [-90, -180],
                  [90, 180]
                ], t)
              },
              panTo: function (t, e) {
                return this.setView(t, this._zoom, {
                  pan: e
                })
              },
              panBy: function (t, e) {
                if (e = e || {}, !(t = N(t).round()).x && !t.y) return this.fire("moveend");
                if (!0 !== e.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
                if (this._panAnim || (this._panAnim = new We, this._panAnim.on({
                    step: this._onPanTransitionStep,
                    end: this._onPanTransitionEnd
                  }, this)), e.noMoveStart || this.fire("movestart"), !1 !== e.animate) {
                  de(this._mapPane, "leaflet-pan-anim");
                  var n = this._getMapPanePos().subtract(t).round();
                  this._panAnim.run(this._mapPane, n, e.duration || .25, e.easeLinearity)
                } else this._rawPanBy(t), this.fire("move").fire("moveend");
                return this
              },
              flyTo: function (t, e, n) {
                if (!1 === (n = n || {}).animate || !vt) return this.setView(t, e, n);
                this._stop();
                var i = this.project(this.getCenter()),
                  r = this.project(t),
                  s = this.getSize(),
                  o = this._zoom;
                t = V(t), e = void 0 === e ? o : e;
                var a = Math.max(s.x, s.y),
                  l = a * this.getZoomScale(o, e),
                  c = r.distanceTo(i) || 1;

                function u(t) {
                  var e = (l * l - a * a + 2.0164 * (t ? -1 : 1) * 2.0164 * c * c) / (2 * (t ? l : a) * 2.0164 * c),
                    n = Math.sqrt(e * e + 1) - e;
                  return n < 1e-9 ? -18 : Math.log(n)
                }

                function h(t) {
                  return (Math.exp(t) - Math.exp(-t)) / 2
                }

                function d(t) {
                  return (Math.exp(t) + Math.exp(-t)) / 2
                }
                var p = u(0),
                  f = Date.now(),
                  m = (u(1) - p) / 1.42,
                  g = n.duration ? 1e3 * n.duration : 1e3 * m * .8;
                return this._moveStart(!0, n.noMoveStart), (function n() {
                  var s = (Date.now() - f) / g,
                    l = function (t) {
                      return 1 - Math.pow(1 - t, 1.5)
                    }(s) * m;
                  s <= 1 ? (this._flyToFrame = k(n, this), this._move(this.unproject(i.add(r.subtract(i).multiplyBy(function (t) {
                    return a * (d(p) * (h(e = p + 1.42 * t) / d(e)) - h(p)) / 2.0164;
                    var e
                  }(l) / c)), o), this.getScaleZoom(a / function (t) {
                    return a * (d(p) / d(p + 1.42 * t))
                  }(l), o), {
                    flyTo: !0
                  })) : this._move(t, e)._moveEnd(!0)
                }).call(this), this
              },
              flyToBounds: function (t, e) {
                var n = this._getBoundsCenterZoom(t, e);
                return this.flyTo(n.center, n.zoom, e)
              },
              setMaxBounds: function (t) {
                return (t = z(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
              },
              setMinZoom: function (t) {
                var e = this.options.minZoom;
                return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
              },
              setMaxZoom: function (t) {
                var e = this.options.maxZoom;
                return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
              },
              panInsideBounds: function (t, e) {
                this._enforcingBounds = !0;
                var n = this.getCenter(),
                  i = this._limitCenter(n, this._zoom, z(t));
                return n.equals(i) || this.panTo(i, e), this._enforcingBounds = !1, this
              },
              panInside: function (t, e) {
                var n = N((e = e || {}).paddingTopLeft || e.padding || [0, 0]),
                  i = N(e.paddingBottomRight || e.padding || [0, 0]),
                  r = this.getCenter(),
                  s = this.project(r),
                  o = this.project(t),
                  a = this.getPixelBounds(),
                  l = a.getSize().divideBy(2),
                  c = F([a.min.add(n), a.max.subtract(i)]);
                if (!c.contains(o)) {
                  this._enforcingBounds = !0;
                  var u = s.subtract(o),
                    h = N(o.x + u.x, o.y + u.y);
                  (o.x < c.min.x || o.x > c.max.x) && (h.x = s.x - u.x, u.x > 0 ? h.x += l.x - n.x : h.x -= l.x - i.x), (o.y < c.min.y || o.y > c.max.y) && (h.y = s.y - u.y, u.y > 0 ? h.y += l.y - n.y : h.y -= l.y - i.y), this.panTo(this.unproject(h), e), this._enforcingBounds = !1
                }
                return this
              },
              invalidateSize: function (t) {
                if (!this._loaded) return this;
                t = n({
                  animate: !1,
                  pan: !0
                }, !0 === t ? {
                  animate: !0
                } : t);
                var e = this.getSize();
                this._sizeChanged = !0, this._lastCenter = null;
                var i = this.getSize(),
                  s = e.divideBy(2).round(),
                  o = i.divideBy(2).round(),
                  a = s.subtract(o);
                return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(r(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                  oldSize: e,
                  newSize: i
                })) : this
              },
              stop: function () {
                return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
              },
              locate: function (t) {
                if (t = this._locateOptions = n({
                    timeout: 1e4,
                    watch: !1
                  }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
                  code: 0,
                  message: "Geolocation not supported."
                }), this;
                var e = r(this._handleGeolocationResponse, this),
                  i = r(this._handleGeolocationError, this);
                return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this
              },
              stopLocate: function () {
                return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
              },
              _handleGeolocationError: function (t) {
                var e = t.code,
                  n = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                  code: e,
                  message: "Geolocation error: " + n + "."
                })
              },
              _handleGeolocationResponse: function (t) {
                var e = new j(t.coords.latitude, t.coords.longitude),
                  n = e.toBounds(2 * t.coords.accuracy),
                  i = this._locateOptions;
                if (i.setView) {
                  var r = this.getBoundsZoom(n);
                  this.setView(e, i.maxZoom ? Math.min(r, i.maxZoom) : r)
                }
                var s = {
                  latlng: e,
                  bounds: n,
                  timestamp: t.timestamp
                };
                for (var o in t.coords) "number" == typeof t.coords[o] && (s[o] = t.coords[o]);
                this.fire("locationfound", s)
              },
              addHandler: function (t, e) {
                if (!e) return this;
                var n = this[t] = new e(this);
                return this._handlers.push(n), this.options[t] && n.enable(), this
              },
              remove: function () {
                if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
                try {
                  delete this._container._leaflet_id, delete this._containerId
                } catch (e) {
                  this._container._leaflet_id = void 0, this._containerId = void 0
                }
                var t;
                for (t in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), ae(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (P(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) this._layers[t].remove();
                for (t in this._panes) ae(this._panes[t]);
                return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
              },
              createPane: function (t, e) {
                var n = oe("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), e || this._mapPane);
                return t && (this._panes[t] = n), n
              },
              getCenter: function () {
                return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
              },
              getZoom: function () {
                return this._zoom
              },
              getBounds: function () {
                var t = this.getPixelBounds();
                return new D(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()))
              },
              getMinZoom: function () {
                return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
              },
              getMaxZoom: function () {
                return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
              },
              getBoundsZoom: function (t, e, n) {
                t = z(t), n = N(n || [0, 0]);
                var i = this.getZoom() || 0,
                  r = this.getMinZoom(),
                  s = this.getMaxZoom(),
                  o = t.getNorthWest(),
                  a = t.getSouthEast(),
                  l = this.getSize().subtract(n),
                  c = F(this.project(a, i), this.project(o, i)).getSize(),
                  u = vt ? this.options.zoomSnap : 1,
                  h = l.x / c.x,
                  d = l.y / c.y,
                  p = e ? Math.max(h, d) : Math.min(h, d);
                return i = this.getScaleZoom(p, i), u && (i = Math.round(i / (u / 100)) * (u / 100), i = e ? Math.ceil(i / u) * u : Math.floor(i / u) * u), Math.max(r, Math.min(s, i))
              },
              getSize: function () {
                return this._size && !this._sizeChanged || (this._size = new M(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
              },
              getPixelBounds: function (t, e) {
                var n = this._getTopLeftPoint(t, e);
                return new R(n, n.add(this.getSize()))
              },
              getPixelOrigin: function () {
                return this._checkIfLoaded(), this._pixelOrigin
              },
              getPixelWorldBounds: function (t) {
                return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
              },
              getPane: function (t) {
                return "string" == typeof t ? this._panes[t] : t
              },
              getPanes: function () {
                return this._panes
              },
              getContainer: function () {
                return this._container
              },
              getZoomScale: function (t, e) {
                var n = this.options.crs;
                return e = void 0 === e ? this._zoom : e, n.scale(t) / n.scale(e)
              },
              getScaleZoom: function (t, e) {
                var n = this.options.crs,
                  i = n.zoom(t * n.scale(e = void 0 === e ? this._zoom : e));
                return isNaN(i) ? 1 / 0 : i
              },
              project: function (t, e) {
                return e = void 0 === e ? this._zoom : e, this.options.crs.latLngToPoint(V(t), e)
              },
              unproject: function (t, e) {
                return e = void 0 === e ? this._zoom : e, this.options.crs.pointToLatLng(N(t), e)
              },
              layerPointToLatLng: function (t) {
                var e = N(t).add(this.getPixelOrigin());
                return this.unproject(e)
              },
              latLngToLayerPoint: function (t) {
                return this.project(V(t))._round()._subtract(this.getPixelOrigin())
              },
              wrapLatLng: function (t) {
                return this.options.crs.wrapLatLng(V(t))
              },
              wrapLatLngBounds: function (t) {
                return this.options.crs.wrapLatLngBounds(z(t))
              },
              distance: function (t, e) {
                return this.options.crs.distance(V(t), V(e))
              },
              containerPointToLayerPoint: function (t) {
                return N(t).subtract(this._getMapPanePos())
              },
              layerPointToContainerPoint: function (t) {
                return N(t).add(this._getMapPanePos())
              },
              containerPointToLatLng: function (t) {
                var e = this.containerPointToLayerPoint(N(t));
                return this.layerPointToLatLng(e)
              },
              latLngToContainerPoint: function (t) {
                return this.layerPointToContainerPoint(this.latLngToLayerPoint(V(t)))
              },
              mouseEventToContainerPoint: function (t) {
                return je(t, this._container)
              },
              mouseEventToLayerPoint: function (t) {
                return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
              },
              mouseEventToLatLng: function (t) {
                return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
              },
              _initContainer: function (t) {
                var e = this._container = re(t);
                if (!e) throw new Error("Map container not found.");
                if (e._leaflet_id) throw new Error("Map container is already initialized.");
                Le(e, "scroll", this._onScroll, this), this._containerId = o(e)
              },
              _initLayout: function () {
                var t = this._container;
                this._fadeAnimated = this.options.fadeAnimation && vt, de(t, "leaflet-container" + (St ? " leaflet-touch" : "") + (Pt ? " leaflet-retina" : "") + (tt ? " leaflet-oldie" : "") + (ut ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
                var e = se(t, "position");
                "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
              },
              _initPanes: function () {
                var t = this._panes = {};
                this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), ye(this._mapPane, new M(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (de(t.markerPane, "leaflet-zoom-hide"), de(t.shadowPane, "leaflet-zoom-hide"))
              },
              _resetView: function (t, e) {
                ye(this._mapPane, new M(0, 0));
                var n = !this._loaded;
                this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
                var i = this._zoom !== e;
                this._moveStart(i, !1)._move(t, e)._moveEnd(i), this.fire("viewreset"), n && this.fire("load")
              },
              _moveStart: function (t, e) {
                return t && this.fire("zoomstart"), e || this.fire("movestart"), this
              },
              _move: function (t, e, n) {
                void 0 === e && (e = this._zoom);
                var i = this._zoom !== e;
                return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (i || n && n.pinch) && this.fire("zoom", n), this.fire("move", n)
              },
              _moveEnd: function (t) {
                return t && this.fire("zoomend"), this.fire("moveend")
              },
              _stop: function () {
                return P(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
              },
              _rawPanBy: function (t) {
                ye(this._mapPane, this._getMapPanePos().subtract(t))
              },
              _getZoomSpan: function () {
                return this.getMaxZoom() - this.getMinZoom()
              },
              _panInsideMaxBounds: function () {
                this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
              },
              _checkIfLoaded: function () {
                if (!this._loaded) throw new Error("Set map center and zoom first.")
              },
              _initEvents: function (t) {
                this._targets = {}, this._targets[o(this._container)] = this;
                var e = t ? Ie : Le;
                e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), vt && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
              },
              _onResize: function () {
                P(this._resizeRequest), this._resizeRequest = k((function () {
                  this.invalidateSize({
                    debounceMoveend: !0
                  })
                }), this)
              },
              _onScroll: function () {
                this._container.scrollTop = 0, this._container.scrollLeft = 0
              },
              _onMoveEnd: function () {
                var t = this._getMapPanePos();
                Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
              },
              _findEventTargets: function (t, e) {
                for (var n, i = [], r = "mouseout" === e || "mouseover" === e, s = t.target || t.srcElement, a = !1; s;) {
                  if ((n = this._targets[o(s)]) && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(n)) {
                    a = !0;
                    break
                  }
                  if (n && n.listens(e, !0)) {
                    if (r && !qe(s, t)) break;
                    if (i.push(n), r) break
                  }
                  if (s === this._container) break;
                  s = s.parentNode
                }
                return i.length || a || r || !qe(s, t) || (i = [this]), i
              },
              _handleDOMEvent: function (t) {
                if (this._loaded && !Ze(t)) {
                  var e = t.type;
                  "mousedown" !== e && "keypress" !== e && "keyup" !== e && "keydown" !== e || Ce(t.target || t.srcElement), this._fireDOMEvent(t, e)
                }
              },
              _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
              _fireDOMEvent: function (t, e, i) {
                if ("click" === t.type) {
                  var r = n({}, t);
                  r.type = "preclick", this._fireDOMEvent(r, r.type, i)
                }
                if (!t._stopped && (i = (i || []).concat(this._findEventTargets(t, e))).length) {
                  var s = i[0];
                  "contextmenu" === e && s.listens(e, !0) && De(t);
                  var o = {
                    originalEvent: t
                  };
                  if ("keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type) {
                    var a = s.getLatLng && (!s._radius || s._radius <= 10);
                    o.containerPoint = a ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t), o.layerPoint = this.containerPointToLayerPoint(o.containerPoint), o.latlng = a ? s.getLatLng() : this.layerPointToLatLng(o.layerPoint)
                  }
                  for (var l = 0; l < i.length; l++)
                    if (i[l].fire(e, o, !0), o.originalEvent._stopped || !1 === i[l].options.bubblingMouseEvents && -1 !== _(this._mouseEvents, e)) return
                }
              },
              _draggableMoved: function (t) {
                return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
              },
              _clearHandlers: function () {
                for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable()
              },
              whenReady: function (t, e) {
                return this._loaded ? t.call(e || this, {
                  target: this
                }) : this.on("load", t, e), this
              },
              _getMapPanePos: function () {
                return be(this._mapPane) || new M(0, 0)
              },
              _moved: function () {
                var t = this._getMapPanePos();
                return t && !t.equals([0, 0])
              },
              _getTopLeftPoint: function (t, e) {
                return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos())
              },
              _getNewPixelOrigin: function (t, e) {
                var n = this.getSize()._divideBy(2);
                return this.project(t, e)._subtract(n)._add(this._getMapPanePos())._round()
              },
              _latLngToNewLayerPoint: function (t, e, n) {
                var i = this._getNewPixelOrigin(n, e);
                return this.project(t, e)._subtract(i)
              },
              _latLngBoundsToNewLayerBounds: function (t, e, n) {
                var i = this._getNewPixelOrigin(n, e);
                return F([this.project(t.getSouthWest(), e)._subtract(i), this.project(t.getNorthWest(), e)._subtract(i), this.project(t.getSouthEast(), e)._subtract(i), this.project(t.getNorthEast(), e)._subtract(i)])
              },
              _getCenterLayerPoint: function () {
                return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
              },
              _getCenterOffset: function (t) {
                return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
              },
              _limitCenter: function (t, e, n) {
                if (!n) return t;
                var i = this.project(t, e),
                  r = this.getSize().divideBy(2),
                  s = new R(i.subtract(r), i.add(r)),
                  o = this._getBoundsOffset(s, n, e);
                return o.round().equals([0, 0]) ? t : this.unproject(i.add(o), e)
              },
              _limitOffset: function (t, e) {
                if (!e) return t;
                var n = this.getPixelBounds(),
                  i = new R(n.min.add(t), n.max.add(t));
                return t.add(this._getBoundsOffset(i, e))
              },
              _getBoundsOffset: function (t, e, n) {
                var i = F(this.project(e.getNorthEast(), n), this.project(e.getSouthWest(), n)),
                  r = i.min.subtract(t.min),
                  s = i.max.subtract(t.max);
                return new M(this._rebound(r.x, -s.x), this._rebound(r.y, -s.y))
              },
              _rebound: function (t, e) {
                return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
              },
              _limitZoom: function (t) {
                var e = this.getMinZoom(),
                  n = this.getMaxZoom(),
                  i = vt ? this.options.zoomSnap : 1;
                return i && (t = Math.round(t / i) * i), Math.max(e, Math.min(n, t))
              },
              _onPanTransitionStep: function () {
                this.fire("move")
              },
              _onPanTransitionEnd: function () {
                pe(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
              },
              _tryAnimatedPan: function (t, e) {
                var n = this._getCenterOffset(t)._trunc();
                return !(!0 !== (e && e.animate) && !this.getSize().contains(n) || (this.panBy(n, e), 0))
              },
              _createAnimProxy: function () {
                var t = this._proxy = oe("div", "leaflet-proxy leaflet-zoom-animated");
                this._panes.mapPane.appendChild(t), this.on("zoomanim", (function (t) {
                  var e = ee,
                    n = this._proxy.style[e];
                  _e(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), n === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd()
                }), this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this)
              },
              _destroyAnimProxy: function () {
                ae(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy
              },
              _animMoveEnd: function () {
                var t = this.getCenter(),
                  e = this.getZoom();
                _e(this._proxy, this.project(t, e), this.getZoomScale(e, 1))
              },
              _catchTransitionEnd: function (t) {
                this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
              },
              _nothingToAnimate: function () {
                return !this._container.getElementsByClassName("leaflet-zoom-animated").length
              },
              _tryAnimatedZoom: function (t, e, n) {
                if (this._animatingZoom) return !0;
                if (n = n || {}, !this._zoomAnimated || !1 === n.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                var i = this.getZoomScale(e),
                  r = this._getCenterOffset(t)._divideBy(1 - 1 / i);
                return !(!0 !== n.animate && !this.getSize().contains(r) || (k((function () {
                  this._moveStart(!0, !1)._animateZoom(t, e, !0)
                }), this), 0))
              },
              _animateZoom: function (t, e, n, i) {
                this._mapPane && (n && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, de(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                  center: t,
                  zoom: e,
                  noUpdate: i
                }), setTimeout(r(this._onZoomTransitionEnd, this), 250))
              },
              _onZoomTransitionEnd: function () {
                this._animatingZoom && (this._mapPane && pe(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), k((function () {
                  this._moveEnd(!0)
                }), this))
              }
            }),
            Ye = T.extend({
              options: {
                position: "topright"
              },
              initialize: function (t) {
                p(this, t)
              },
              getPosition: function () {
                return this.options.position
              },
              setPosition: function (t) {
                var e = this._map;
                return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
              },
              getContainer: function () {
                return this._container
              },
              addTo: function (t) {
                this.remove(), this._map = t;
                var e = this._container = this.onAdd(t),
                  n = this.getPosition(),
                  i = t._controlCorners[n];
                return de(e, "leaflet-control"), -1 !== n.indexOf("bottom") ? i.insertBefore(e, i.firstChild) : i.appendChild(e), this._map.on("unload", this.remove, this), this
              },
              remove: function () {
                return this._map ? (ae(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this
              },
              _refocusOnMap: function (t) {
                this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
              }
            }),
            Je = function (t) {
              return new Ye(t)
            };
          Ke.include({
            addControl: function (t) {
              return t.addTo(this), this
            },
            removeControl: function (t) {
              return t.remove(), this
            },
            _initControlPos: function () {
              var t = this._controlCorners = {},
                e = "leaflet-",
                n = this._controlContainer = oe("div", e + "control-container", this._container);

              function i(i, r) {
                t[i + r] = oe("div", e + i + " " + e + r, n)
              }
              i("top", "left"), i("top", "right"), i("bottom", "left"), i("bottom", "right")
            },
            _clearControlPos: function () {
              for (var t in this._controlCorners) ae(this._controlCorners[t]);
              ae(this._controlContainer), delete this._controlCorners, delete this._controlContainer
            }
          });
          var Qe = Ye.extend({
              options: {
                collapsed: !0,
                position: "topright",
                autoZIndex: !0,
                hideSingleBase: !1,
                sortLayers: !1,
                sortFunction: function (t, e, n, i) {
                  return n < i ? -1 : i < n ? 1 : 0
                }
              },
              initialize: function (t, e, n) {
                for (var i in p(this, n), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, t) this._addLayer(t[i], i);
                for (i in e) this._addLayer(e[i], i, !0)
              },
              onAdd: function (t) {
                this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
                for (var e = 0; e < this._layers.length; e++) this._layers[e].layer.on("add remove", this._onLayerChange, this);
                return this._container
              },
              addTo: function (t) {
                return Ye.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
              },
              onRemove: function () {
                this._map.off("zoomend", this._checkDisabledLayers, this);
                for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
              },
              addBaseLayer: function (t, e) {
                return this._addLayer(t, e), this._map ? this._update() : this
              },
              addOverlay: function (t, e) {
                return this._addLayer(t, e, !0), this._map ? this._update() : this
              },
              removeLayer: function (t) {
                t.off("add remove", this._onLayerChange, this);
                var e = this._getLayer(o(t));
                return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this
              },
              expand: function () {
                de(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
                var t = this._map.getSize().y - (this._container.offsetTop + 50);
                return t < this._section.clientHeight ? (de(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : pe(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
              },
              collapse: function () {
                return pe(this._container, "leaflet-control-layers-expanded"), this
              },
              _initLayout: function () {
                var t = "leaflet-control-layers",
                  e = this._container = oe("div", t),
                  n = this.options.collapsed;
                e.setAttribute("aria-haspopup", !0), Fe(e), Re(e);
                var i = this._section = oe("section", t + "-list");
                n && (this._map.on("click", this.collapse, this), it || Le(e, {
                  mouseenter: this.expand,
                  mouseleave: this.collapse
                }, this));
                var r = this._layersLink = oe("a", t + "-toggle", e);
                r.href = "#", r.title = "Layers", St ? (Le(r, "click", ze), Le(r, "click", this.expand, this)) : Le(r, "focus", this.expand, this), n || this.expand(), this._baseLayersList = oe("div", t + "-base", i), this._separator = oe("div", t + "-separator", i), this._overlaysList = oe("div", t + "-overlays", i), e.appendChild(i)
              },
              _getLayer: function (t) {
                for (var e = 0; e < this._layers.length; e++)
                  if (this._layers[e] && o(this._layers[e].layer) === t) return this._layers[e]
              },
              _addLayer: function (t, e, n) {
                this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
                  layer: t,
                  name: e,
                  overlay: n
                }), this.options.sortLayers && this._layers.sort(r((function (t, e) {
                  return this.options.sortFunction(t.layer, e.layer, t.name, e.name)
                }), this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
              },
              _update: function () {
                if (!this._container) return this;
                le(this._baseLayersList), le(this._overlaysList), this._layerControlInputs = [];
                var t, e, n, i, r = 0;
                for (n = 0; n < this._layers.length; n++) this._addItem(i = this._layers[n]), e = e || i.overlay, t = t || !i.overlay, r += i.overlay ? 0 : 1;
                return this.options.hideSingleBase && (this._baseLayersList.style.display = (t = t && r > 1) ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this
              },
              _onLayerChange: function (t) {
                this._handlingClick || this._update();
                var e = this._getLayer(o(t.target)),
                  n = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
                n && this._map.fire(n, e)
              },
              _createRadioElement: function (t, e) {
                var n = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>",
                  i = document.createElement("div");
                return i.innerHTML = n, i.firstChild
              },
              _addItem: function (t) {
                var e, n = document.createElement("label"),
                  i = this._map.hasLayer(t.layer);
                t.overlay ? ((e = document.createElement("input")).type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = i) : e = this._createRadioElement("leaflet-base-layers_" + o(this), i), this._layerControlInputs.push(e), e.layerId = o(t.layer), Le(e, "click", this._onInputClick, this);
                var r = document.createElement("span");
                r.innerHTML = " " + t.name;
                var s = document.createElement("div");
                return n.appendChild(s), s.appendChild(e), s.appendChild(r), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(n), this._checkDisabledLayers(), n
              },
              _onInputClick: function () {
                var t, e, n = this._layerControlInputs,
                  i = [],
                  r = [];
                this._handlingClick = !0;
                for (var s = n.length - 1; s >= 0; s--) e = this._getLayer((t = n[s]).layerId).layer, t.checked ? i.push(e) : t.checked || r.push(e);
                for (s = 0; s < r.length; s++) this._map.hasLayer(r[s]) && this._map.removeLayer(r[s]);
                for (s = 0; s < i.length; s++) this._map.hasLayer(i[s]) || this._map.addLayer(i[s]);
                this._handlingClick = !1, this._refocusOnMap()
              },
              _checkDisabledLayers: function () {
                for (var t, e, n = this._layerControlInputs, i = this._map.getZoom(), r = n.length - 1; r >= 0; r--) e = this._getLayer((t = n[r]).layerId).layer, t.disabled = void 0 !== e.options.minZoom && i < e.options.minZoom || void 0 !== e.options.maxZoom && i > e.options.maxZoom
              },
              _expandIfNotCollapsed: function () {
                return this._map && !this.options.collapsed && this.expand(), this
              },
              _expand: function () {
                return this.expand()
              },
              _collapse: function () {
                return this.collapse()
              }
            }),
            Xe = Ye.extend({
              options: {
                position: "topleft",
                zoomInText: "+",
                zoomInTitle: "Zoom in",
                zoomOutText: "&#x2212;",
                zoomOutTitle: "Zoom out"
              },
              onAdd: function (t) {
                var e = "leaflet-control-zoom",
                  n = oe("div", e + " leaflet-bar"),
                  i = this.options;
                return this._zoomInButton = this._createButton(i.zoomInText, i.zoomInTitle, e + "-in", n, this._zoomIn), this._zoomOutButton = this._createButton(i.zoomOutText, i.zoomOutTitle, e + "-out", n, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), n
              },
              onRemove: function (t) {
                t.off("zoomend zoomlevelschange", this._updateDisabled, this)
              },
              disable: function () {
                return this._disabled = !0, this._updateDisabled(), this
              },
              enable: function () {
                return this._disabled = !1, this._updateDisabled(), this
              },
              _zoomIn: function (t) {
                !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
              },
              _zoomOut: function (t) {
                !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
              },
              _createButton: function (t, e, n, i, r) {
                var s = oe("a", n, i);
                return s.innerHTML = t, s.href = "#", s.title = e, s.setAttribute("role", "button"), s.setAttribute("aria-label", e), Fe(s), Le(s, "click", ze), Le(s, "click", r, this), Le(s, "click", this._refocusOnMap, this), s
              },
              _updateDisabled: function () {
                var t = this._map,
                  e = "leaflet-disabled";
                pe(this._zoomInButton, e), pe(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMinZoom()) && de(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMaxZoom()) && de(this._zoomInButton, e)
              }
            });
          Ke.mergeOptions({
            zoomControl: !0
          }), Ke.addInitHook((function () {
            this.options.zoomControl && (this.zoomControl = new Xe, this.addControl(this.zoomControl))
          }));
          var tn = Ye.extend({
              options: {
                position: "bottomleft",
                maxWidth: 100,
                metric: !0,
                imperial: !0
              },
              onAdd: function (t) {
                var e = oe("div", "leaflet-control-scale"),
                  n = this.options;
                return this._addScales(n, "leaflet-control-scale-line", e), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), e
              },
              onRemove: function (t) {
                t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
              },
              _addScales: function (t, e, n) {
                t.metric && (this._mScale = oe("div", e, n)), t.imperial && (this._iScale = oe("div", e, n))
              },
              _update: function () {
                var t = this._map,
                  e = t.getSize().y / 2,
                  n = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
                this._updateScales(n)
              },
              _updateScales: function (t) {
                this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
              },
              _updateMetric: function (t) {
                var e = this._getRoundNum(t);
                this._updateScale(this._mScale, e < 1e3 ? e + " m" : e / 1e3 + " km", e / t)
              },
              _updateImperial: function (t) {
                var e, n, i, r = 3.2808399 * t;
                r > 5280 ? (n = this._getRoundNum(e = r / 5280), this._updateScale(this._iScale, n + " mi", n / e)) : (i = this._getRoundNum(r), this._updateScale(this._iScale, i + " ft", i / r))
              },
              _updateScale: function (t, e, n) {
                t.style.width = Math.round(this.options.maxWidth * n) + "px", t.innerHTML = e
              },
              _getRoundNum: function (t) {
                var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                  n = t / e;
                return e * (n >= 10 ? 10 : n >= 5 ? 5 : n >= 3 ? 3 : n >= 2 ? 2 : 1)
              }
            }),
            en = Ye.extend({
              options: {
                position: "bottomright",
                prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
              },
              initialize: function (t) {
                p(this, t), this._attributions = {}
              },
              onAdd: function (t) {
                for (var e in t.attributionControl = this, this._container = oe("div", "leaflet-control-attribution"), Fe(this._container), t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                return this._update(), this._container
              },
              setPrefix: function (t) {
                return this.options.prefix = t, this._update(), this
              },
              addAttribution: function (t) {
                return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this
              },
              removeAttribution: function (t) {
                return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this
              },
              _update: function () {
                if (this._map) {
                  var t = [];
                  for (var e in this._attributions) this._attributions[e] && t.push(e);
                  var n = [];
                  this.options.prefix && n.push(this.options.prefix), t.length && n.push(t.join(", ")), this._container.innerHTML = n.join(" | ")
                }
              }
            });
          Ke.mergeOptions({
            attributionControl: !0
          }), Ke.addInitHook((function () {
            this.options.attributionControl && (new en).addTo(this)
          })), Ye.Layers = Qe, Ye.Zoom = Xe, Ye.Scale = tn, Ye.Attribution = en, Je.layers = function (t, e, n) {
            return new Qe(t, e, n)
          }, Je.zoom = function (t) {
            return new Xe(t)
          }, Je.scale = function (t) {
            return new tn(t)
          }, Je.attribution = function (t) {
            return new en(t)
          };
          var nn = T.extend({
            initialize: function (t) {
              this._map = t
            },
            enable: function () {
              return this._enabled || (this._enabled = !0, this.addHooks()), this
            },
            disable: function () {
              return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this
            },
            enabled: function () {
              return !!this._enabled
            }
          });
          nn.addTo = function (t, e) {
            return t.addHandler(e, this), this
          };
          var rn, sn = {
              Events: A
            },
            on = St ? "touchstart mousedown" : "mousedown",
            an = {
              mousedown: "mouseup",
              touchstart: "touchend",
              pointerdown: "touchend",
              MSPointerDown: "touchend"
            },
            ln = {
              mousedown: "mousemove",
              touchstart: "touchmove",
              pointerdown: "touchmove",
              MSPointerDown: "touchmove"
            },
            cn = I.extend({
              options: {
                clickTolerance: 3
              },
              initialize: function (t, e, n, i) {
                p(this, i), this._element = t, this._dragStartTarget = e || t, this._preventOutline = n
              },
              enable: function () {
                this._enabled || (Le(this._dragStartTarget, on, this._onDown, this), this._enabled = !0)
              },
              disable: function () {
                this._enabled && (cn._dragging === this && this.finishDrag(), Ie(this._dragStartTarget, on, this._onDown, this), this._enabled = !1, this._moved = !1)
              },
              _onDown: function (t) {
                if (!t._simulated && this._enabled && (this._moved = !1, !he(this._element, "leaflet-zoom-anim") && !(cn._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (cn._dragging = this, this._preventOutline && Ce(this._element), xe(), Yt(), this._moving)))) {
                  this.fire("down");
                  var e = t.touches ? t.touches[0] : t,
                    n = Pe(this._element);
                  this._startPoint = new M(e.clientX, e.clientY), this._parentScale = Ee(n), Le(document, ln[t.type], this._onMove, this), Le(document, an[t.type], this._onUp, this)
                }
              },
              _onMove: function (t) {
                if (!t._simulated && this._enabled)
                  if (t.touches && t.touches.length > 1) this._moved = !0;
                  else {
                    var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                      n = new M(e.clientX, e.clientY)._subtract(this._startPoint);
                    (n.x || n.y) && (Math.abs(n.x) + Math.abs(n.y) < this.options.clickTolerance || (n.x /= this._parentScale.x, n.y /= this._parentScale.y, De(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = be(this._element).subtract(n), de(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), de(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(n), this._moving = !0, P(this._animRequest), this._lastEvent = t, this._animRequest = k(this._updatePosition, this, !0)))
                  }
              },
              _updatePosition: function () {
                var t = {
                  originalEvent: this._lastEvent
                };
                this.fire("predrag", t), ye(this._element, this._newPos), this.fire("drag", t)
              },
              _onUp: function (t) {
                !t._simulated && this._enabled && this.finishDrag()
              },
              finishDrag: function () {
                for (var t in pe(document.body, "leaflet-dragging"), this._lastTarget && (pe(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), ln) Ie(document, ln[t], this._onMove, this), Ie(document, an[t], this._onUp, this);
                Se(), Jt(), this._moved && this._moving && (P(this._animRequest), this.fire("dragend", {
                  distance: this._newPos.distanceTo(this._startPos)
                })), this._moving = !1, cn._dragging = !1
              }
            });

          function un(t, e) {
            if (!e || !t.length) return t.slice();
            var n = e * e;
            return function (t, e) {
              var n = t.length,
                i = new(typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(n);
              i[0] = i[n - 1] = 1,
                function t(e, n, i, r, s) {
                  var o, a, l, c = 0;
                  for (a = r + 1; a <= s - 1; a++)(l = mn(e[a], e[r], e[s], !0)) > c && (o = a, c = l);
                  c > i && (n[o] = 1, t(e, n, i, r, o), t(e, n, i, o, s))
                }(t, i, e, 0, n - 1);
              var r, s = [];
              for (r = 0; r < n; r++) i[r] && s.push(t[r]);
              return s
            }(t = function (t, e) {
              for (var n = [t[0]], i = 1, r = 0, s = t.length; i < s; i++)(l = (a = t[r]).x - (o = t[i]).x) * l + (c = a.y - o.y) * c > e && (n.push(t[i]), r = i);
              var o, a, l, c;
              return r < s - 1 && n.push(t[s - 1]), n
            }(t, n), n)
          }

          function hn(t, e, n) {
            return Math.sqrt(mn(t, e, n, !0))
          }

          function dn(t, e, n, i, r) {
            var s, o, a, l = i ? rn : fn(t, n),
              c = fn(e, n);
            for (rn = c;;) {
              if (!(l | c)) return [t, e];
              if (l & c) return !1;
              a = fn(o = pn(t, e, s = l || c, n, r), n), s === l ? (t = o, l = a) : (e = o, c = a)
            }
          }

          function pn(t, e, n, i, r) {
            var s, o, a = e.x - t.x,
              l = e.y - t.y,
              c = i.min,
              u = i.max;
            return 8 & n ? (s = t.x + a * (u.y - t.y) / l, o = u.y) : 4 & n ? (s = t.x + a * (c.y - t.y) / l, o = c.y) : 2 & n ? (s = u.x, o = t.y + l * (u.x - t.x) / a) : 1 & n && (s = c.x, o = t.y + l * (c.x - t.x) / a), new M(s, o, r)
          }

          function fn(t, e) {
            var n = 0;
            return t.x < e.min.x ? n |= 1 : t.x > e.max.x && (n |= 2), t.y < e.min.y ? n |= 4 : t.y > e.max.y && (n |= 8), n
          }

          function mn(t, e, n, i) {
            var r, s = e.x,
              o = e.y,
              a = n.x - s,
              l = n.y - o,
              c = a * a + l * l;
            return c > 0 && ((r = ((t.x - s) * a + (t.y - o) * l) / c) > 1 ? (s = n.x, o = n.y) : r > 0 && (s += a * r, o += l * r)), a = t.x - s, l = t.y - o, i ? a * a + l * l : new M(s, o)
          }

          function gn(t) {
            return !v(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
          }

          function vn(t) {
            return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), gn(t)
          }
          var _n = (Object.freeze || Object)({
            simplify: un,
            pointToSegmentDistance: hn,
            closestPointOnSegment: function (t, e, n) {
              return mn(t, e, n)
            },
            clipSegment: dn,
            _getEdgeIntersection: pn,
            _getBitCode: fn,
            _sqClosestPointOnSegment: mn,
            isFlat: gn,
            _flat: vn
          });

          function yn(t, e, n) {
            var i, r, s, o, a, l, c, u, h, d = [1, 4, 2, 8];
            for (r = 0, c = t.length; r < c; r++) t[r]._code = fn(t[r], e);
            for (o = 0; o < 4; o++) {
              for (u = d[o], i = [], r = 0, s = (c = t.length) - 1; r < c; s = r++) l = t[s], (a = t[r])._code & u ? l._code & u || ((h = pn(l, a, u, e, n))._code = fn(h, e), i.push(h)) : (l._code & u && ((h = pn(l, a, u, e, n))._code = fn(h, e), i.push(h)), i.push(a));
              t = i
            }
            return t
          }
          var bn = (Object.freeze || Object)({
              clipPolygon: yn
            }),
            wn = {
              project: function (t) {
                return new M(t.lng, t.lat)
              },
              unproject: function (t) {
                return new j(t.y, t.x)
              },
              bounds: new R([-180, -90], [180, 90])
            },
            xn = {
              R: 6378137,
              R_MINOR: 6356752.314245179,
              bounds: new R([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
              project: function (t) {
                var e = Math.PI / 180,
                  n = this.R,
                  i = t.lat * e,
                  r = this.R_MINOR / n,
                  s = Math.sqrt(1 - r * r),
                  o = s * Math.sin(i),
                  a = Math.tan(Math.PI / 4 - i / 2) / Math.pow((1 - o) / (1 + o), s / 2);
                return i = -n * Math.log(Math.max(a, 1e-10)), new M(t.lng * e * n, i)
              },
              unproject: function (t) {
                for (var e, n = 180 / Math.PI, i = this.R, r = this.R_MINOR / i, s = Math.sqrt(1 - r * r), o = Math.exp(-t.y / i), a = Math.PI / 2 - 2 * Math.atan(o), l = 0, c = .1; l < 15 && Math.abs(c) > 1e-7; l++) e = s * Math.sin(a), e = Math.pow((1 - e) / (1 + e), s / 2), a += c = Math.PI / 2 - 2 * Math.atan(o * e) - a;
                return new j(a * n, t.x * n / i)
              }
            },
            Sn = (Object.freeze || Object)({
              LonLat: wn,
              Mercator: xn,
              SphericalMercator: $
            }),
            Cn = n({}, B, {
              code: "EPSG:3395",
              projection: xn,
              transformation: function () {
                var t = .5 / (Math.PI * xn.R);
                return q(t, .5, -t, .5)
              }()
            }),
            kn = n({}, B, {
              code: "EPSG:4326",
              projection: wn,
              transformation: q(1 / 180, 1, -1 / 180, .5)
            }),
            Pn = n({}, H, {
              projection: wn,
              transformation: q(1, 0, -1, 0),
              scale: function (t) {
                return Math.pow(2, t)
              },
              zoom: function (t) {
                return Math.log(t) / Math.LN2
              },
              distance: function (t, e) {
                var n = e.lng - t.lng,
                  i = e.lat - t.lat;
                return Math.sqrt(n * n + i * i)
              },
              infinite: !0
            });
          H.Earth = B, H.EPSG3395 = Cn, H.EPSG3857 = W, H.EPSG900913 = K, H.EPSG4326 = kn, H.Simple = Pn;
          var En = I.extend({
            options: {
              pane: "overlayPane",
              attribution: null,
              bubblingMouseEvents: !0
            },
            addTo: function (t) {
              return t.addLayer(this), this
            },
            remove: function () {
              return this.removeFrom(this._map || this._mapToAdd)
            },
            removeFrom: function (t) {
              return t && t.removeLayer(this), this
            },
            getPane: function (t) {
              return this._map.getPane(t ? this.options[t] || t : this.options.pane)
            },
            addInteractiveTarget: function (t) {
              return this._map._targets[o(t)] = this, this
            },
            removeInteractiveTarget: function (t) {
              return delete this._map._targets[o(t)], this
            },
            getAttribution: function () {
              return this.options.attribution
            },
            _layerAdd: function (t) {
              var e = t.target;
              if (e.hasLayer(this)) {
                if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
                  var n = this.getEvents();
                  e.on(n, this), this.once("remove", (function () {
                    e.off(n, this)
                  }), this)
                }
                this.onAdd(e), this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), e.fire("layeradd", {
                  layer: this
                })
              }
            }
          });
          Ke.include({
            addLayer: function (t) {
              if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
              var e = o(t);
              return this._layers[e] || (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t)), this
            },
            removeLayer: function (t) {
              var e = o(t);
              return this._layers[e] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[e], this._loaded && (this.fire("layerremove", {
                layer: t
              }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this
            },
            hasLayer: function (t) {
              return !!t && o(t) in this._layers
            },
            eachLayer: function (t, e) {
              for (var n in this._layers) t.call(e, this._layers[n]);
              return this
            },
            _addLayers: function (t) {
              for (var e = 0, n = (t = t ? v(t) ? t : [t] : []).length; e < n; e++) this.addLayer(t[e])
            },
            _addZoomLimit: function (t) {
              !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[o(t)] = t, this._updateZoomLevels())
            },
            _removeZoomLimit: function (t) {
              var e = o(t);
              this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels())
            },
            _updateZoomLevels: function () {
              var t = 1 / 0,
                e = -1 / 0,
                n = this._getZoomSpan();
              for (var i in this._zoomBoundLayers) {
                var r = this._zoomBoundLayers[i].options;
                t = void 0 === r.minZoom ? t : Math.min(t, r.minZoom), e = void 0 === r.maxZoom ? e : Math.max(e, r.maxZoom)
              }
              this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, n !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
            }
          });
          var Tn = En.extend({
              initialize: function (t, e) {
                var n, i;
                if (p(this, e), this._layers = {}, t)
                  for (n = 0, i = t.length; n < i; n++) this.addLayer(t[n])
              },
              addLayer: function (t) {
                var e = this.getLayerId(t);
                return this._layers[e] = t, this._map && this._map.addLayer(t), this
              },
              removeLayer: function (t) {
                var e = t in this._layers ? t : this.getLayerId(t);
                return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
              },
              hasLayer: function (t) {
                return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
              },
              clearLayers: function () {
                return this.eachLayer(this.removeLayer, this)
              },
              invoke: function (t) {
                var e, n, i = Array.prototype.slice.call(arguments, 1);
                for (e in this._layers)(n = this._layers[e])[t] && n[t].apply(n, i);
                return this
              },
              onAdd: function (t) {
                this.eachLayer(t.addLayer, t)
              },
              onRemove: function (t) {
                this.eachLayer(t.removeLayer, t)
              },
              eachLayer: function (t, e) {
                for (var n in this._layers) t.call(e, this._layers[n]);
                return this
              },
              getLayer: function (t) {
                return this._layers[t]
              },
              getLayers: function () {
                var t = [];
                return this.eachLayer(t.push, t), t
              },
              setZIndex: function (t) {
                return this.invoke("setZIndex", t)
              },
              getLayerId: function (t) {
                return o(t)
              }
            }),
            Ln = Tn.extend({
              addLayer: function (t) {
                return this.hasLayer(t) ? this : (t.addEventParent(this), Tn.prototype.addLayer.call(this, t), this.fire("layeradd", {
                  layer: t
                }))
              },
              removeLayer: function (t) {
                return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Tn.prototype.removeLayer.call(this, t), this.fire("layerremove", {
                  layer: t
                })) : this
              },
              setStyle: function (t) {
                return this.invoke("setStyle", t)
              },
              bringToFront: function () {
                return this.invoke("bringToFront")
              },
              bringToBack: function () {
                return this.invoke("bringToBack")
              },
              getBounds: function () {
                var t = new D;
                for (var e in this._layers) {
                  var n = this._layers[e];
                  t.extend(n.getBounds ? n.getBounds() : n.getLatLng())
                }
                return t
              }
            }),
            An = T.extend({
              options: {
                popupAnchor: [0, 0],
                tooltipAnchor: [0, 0]
              },
              initialize: function (t) {
                p(this, t)
              },
              createIcon: function (t) {
                return this._createIcon("icon", t)
              },
              createShadow: function (t) {
                return this._createIcon("shadow", t)
              },
              _createIcon: function (t, e) {
                var n = this._getIconUrl(t);
                if (!n) {
                  if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                  return null
                }
                var i = this._createImg(n, e && "IMG" === e.tagName ? e : null);
                return this._setIconStyles(i, t), i
              },
              _setIconStyles: function (t, e) {
                var n = this.options,
                  i = n[e + "Size"];
                "number" == typeof i && (i = [i, i]);
                var r = N(i),
                  s = N("shadow" === e && n.shadowAnchor || n.iconAnchor || r && r.divideBy(2, !0));
                t.className = "leaflet-marker-" + e + " " + (n.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), r && (t.style.width = r.x + "px", t.style.height = r.y + "px")
              },
              _createImg: function (t, e) {
                return (e = e || document.createElement("img")).src = t, e
              },
              _getIconUrl: function (t) {
                return Pt && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
              }
            }),
            In = An.extend({
              options: {
                iconUrl: "marker-icon.png",
                iconRetinaUrl: "marker-icon-2x.png",
                shadowUrl: "marker-shadow.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41]
              },
              _getIconUrl: function (t) {
                return In.imagePath || (In.imagePath = this._detectIconPath()), (this.options.imagePath || In.imagePath) + An.prototype._getIconUrl.call(this, t)
              },
              _detectIconPath: function () {
                var t = oe("div", "leaflet-default-icon-path", document.body),
                  e = se(t, "background-image") || se(t, "backgroundImage");
                return document.body.removeChild(t), null === e || 0 !== e.indexOf("url") ? "" : e.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
              }
            }),
            Mn = nn.extend({
              initialize: function (t) {
                this._marker = t
              },
              addHooks: function () {
                var t = this._marker._icon;
                this._draggable || (this._draggable = new cn(t, t, !0)), this._draggable.on({
                  dragstart: this._onDragStart,
                  predrag: this._onPreDrag,
                  drag: this._onDrag,
                  dragend: this._onDragEnd
                }, this).enable(), de(t, "leaflet-marker-draggable")
              },
              removeHooks: function () {
                this._draggable.off({
                  dragstart: this._onDragStart,
                  predrag: this._onPreDrag,
                  drag: this._onDrag,
                  dragend: this._onDragEnd
                }, this).disable(), this._marker._icon && pe(this._marker._icon, "leaflet-marker-draggable")
              },
              moved: function () {
                return this._draggable && this._draggable._moved
              },
              _adjustPan: function (t) {
                var e = this._marker,
                  n = e._map,
                  i = this._marker.options.autoPanSpeed,
                  r = this._marker.options.autoPanPadding,
                  s = be(e._icon),
                  o = n.getPixelBounds(),
                  a = n.getPixelOrigin(),
                  l = F(o.min._subtract(a).add(r), o.max._subtract(a).subtract(r));
                if (!l.contains(s)) {
                  var c = N((Math.max(l.max.x, s.x) - l.max.x) / (o.max.x - l.max.x) - (Math.min(l.min.x, s.x) - l.min.x) / (o.min.x - l.min.x), (Math.max(l.max.y, s.y) - l.max.y) / (o.max.y - l.max.y) - (Math.min(l.min.y, s.y) - l.min.y) / (o.min.y - l.min.y)).multiplyBy(i);
                  n.panBy(c, {
                    animate: !1
                  }), this._draggable._newPos._add(c), this._draggable._startPos._add(c), ye(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = k(this._adjustPan.bind(this, t))
                }
              },
              _onDragStart: function () {
                this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart")
              },
              _onPreDrag: function (t) {
                this._marker.options.autoPan && (P(this._panRequest), this._panRequest = k(this._adjustPan.bind(this, t)))
              },
              _onDrag: function (t) {
                var e = this._marker,
                  n = e._shadow,
                  i = be(e._icon),
                  r = e._map.layerPointToLatLng(i);
                n && ye(n, i), e._latlng = r, t.latlng = r, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t)
              },
              _onDragEnd: function (t) {
                P(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
              }
            }),
            On = En.extend({
              options: {
                icon: new In,
                interactive: !0,
                keyboard: !0,
                title: "",
                alt: "",
                zIndexOffset: 0,
                opacity: 1,
                riseOnHover: !1,
                riseOffset: 250,
                pane: "markerPane",
                shadowPane: "shadowPane",
                bubblingMouseEvents: !1,
                draggable: !1,
                autoPan: !1,
                autoPanPadding: [50, 50],
                autoPanSpeed: 10
              },
              initialize: function (t, e) {
                p(this, e), this._latlng = V(t)
              },
              onAdd: function (t) {
                this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
              },
              onRemove: function (t) {
                this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
              },
              getEvents: function () {
                return {
                  zoom: this.update,
                  viewreset: this.update
                }
              },
              getLatLng: function () {
                return this._latlng
              },
              setLatLng: function (t) {
                var e = this._latlng;
                return this._latlng = V(t), this.update(), this.fire("move", {
                  oldLatLng: e,
                  latlng: this._latlng
                })
              },
              setZIndexOffset: function (t) {
                return this.options.zIndexOffset = t, this.update()
              },
              getIcon: function () {
                return this.options.icon
              },
              setIcon: function (t) {
                return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
              },
              getElement: function () {
                return this._icon
              },
              update: function () {
                if (this._icon && this._map) {
                  var t = this._map.latLngToLayerPoint(this._latlng).round();
                  this._setPos(t)
                }
                return this
              },
              _initIcon: function () {
                var t = this.options,
                  e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                  n = t.icon.createIcon(this._icon),
                  i = !1;
                n !== this._icon && (this._icon && this._removeIcon(), i = !0, t.title && (n.title = t.title), "IMG" === n.tagName && (n.alt = t.alt || "")), de(n, e), t.keyboard && (n.tabIndex = "0"), this._icon = n, t.riseOnHover && this.on({
                  mouseover: this._bringToFront,
                  mouseout: this._resetZIndex
                });
                var r = t.icon.createShadow(this._shadow),
                  s = !1;
                r !== this._shadow && (this._removeShadow(), s = !0), r && (de(r, e), r.alt = ""), this._shadow = r, t.opacity < 1 && this._updateOpacity(), i && this.getPane().appendChild(this._icon), this._initInteraction(), r && s && this.getPane(t.shadowPane).appendChild(this._shadow)
              },
              _removeIcon: function () {
                this.options.riseOnHover && this.off({
                  mouseover: this._bringToFront,
                  mouseout: this._resetZIndex
                }), ae(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
              },
              _removeShadow: function () {
                this._shadow && ae(this._shadow), this._shadow = null
              },
              _setPos: function (t) {
                this._icon && ye(this._icon, t), this._shadow && ye(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
              },
              _updateZIndex: function (t) {
                this._icon && (this._icon.style.zIndex = this._zIndex + t)
              },
              _animateZoom: function (t) {
                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                this._setPos(e)
              },
              _initInteraction: function () {
                if (this.options.interactive && (de(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Mn)) {
                  var t = this.options.draggable;
                  this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Mn(this), t && this.dragging.enable()
                }
              },
              setOpacity: function (t) {
                return this.options.opacity = t, this._map && this._updateOpacity(), this
              },
              _updateOpacity: function () {
                var t = this.options.opacity;
                this._icon && ge(this._icon, t), this._shadow && ge(this._shadow, t)
              },
              _bringToFront: function () {
                this._updateZIndex(this.options.riseOffset)
              },
              _resetZIndex: function () {
                this._updateZIndex(0)
              },
              _getPopupAnchor: function () {
                return this.options.icon.options.popupAnchor
              },
              _getTooltipAnchor: function () {
                return this.options.icon.options.tooltipAnchor
              }
            }),
            Nn = En.extend({
              options: {
                stroke: !0,
                color: "#3388ff",
                weight: 3,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round",
                dashArray: null,
                dashOffset: null,
                fill: !1,
                fillColor: null,
                fillOpacity: .2,
                fillRule: "evenodd",
                interactive: !0,
                bubblingMouseEvents: !0
              },
              beforeAdd: function (t) {
                this._renderer = t.getRenderer(this)
              },
              onAdd: function () {
                this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
              },
              onRemove: function () {
                this._renderer._removePath(this)
              },
              redraw: function () {
                return this._map && this._renderer._updatePath(this), this
              },
              setStyle: function (t) {
                return p(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && t.hasOwnProperty("weight") && this._updateBounds()), this
              },
              bringToFront: function () {
                return this._renderer && this._renderer._bringToFront(this), this
              },
              bringToBack: function () {
                return this._renderer && this._renderer._bringToBack(this), this
              },
              getElement: function () {
                return this._path
              },
              _reset: function () {
                this._project(), this._update()
              },
              _clickTolerance: function () {
                return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
              }
            }),
            Rn = Nn.extend({
              options: {
                fill: !0,
                radius: 10
              },
              initialize: function (t, e) {
                p(this, e), this._latlng = V(t), this._radius = this.options.radius
              },
              setLatLng: function (t) {
                var e = this._latlng;
                return this._latlng = V(t), this.redraw(), this.fire("move", {
                  oldLatLng: e,
                  latlng: this._latlng
                })
              },
              getLatLng: function () {
                return this._latlng
              },
              setRadius: function (t) {
                return this.options.radius = this._radius = t, this.redraw()
              },
              getRadius: function () {
                return this._radius
              },
              setStyle: function (t) {
                var e = t && t.radius || this._radius;
                return Nn.prototype.setStyle.call(this, t), this.setRadius(e), this
              },
              _project: function () {
                this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
              },
              _updateBounds: function () {
                var t = this._radius,
                  e = this._radiusY || t,
                  n = this._clickTolerance(),
                  i = [t + n, e + n];
                this._pxBounds = new R(this._point.subtract(i), this._point.add(i))
              },
              _update: function () {
                this._map && this._updatePath()
              },
              _updatePath: function () {
                this._renderer._updateCircle(this)
              },
              _empty: function () {
                return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
              },
              _containsPoint: function (t) {
                return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
              }
            }),
            Fn = Rn.extend({
              initialize: function (t, e, i) {
                if ("number" == typeof e && (e = n({}, i, {
                    radius: e
                  })), p(this, e), this._latlng = V(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
                this._mRadius = this.options.radius
              },
              setRadius: function (t) {
                return this._mRadius = t, this.redraw()
              },
              getRadius: function () {
                return this._mRadius
              },
              getBounds: function () {
                var t = [this._radius, this._radiusY || this._radius];
                return new D(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
              },
              setStyle: Nn.prototype.setStyle,
              _project: function () {
                var t = this._latlng.lng,
                  e = this._latlng.lat,
                  n = this._map,
                  i = n.options.crs;
                if (i.distance === B.distance) {
                  var r = Math.PI / 180,
                    s = this._mRadius / B.R / r,
                    o = n.project([e + s, t]),
                    a = n.project([e - s, t]),
                    l = o.add(a).divideBy(2),
                    c = n.unproject(l).lat,
                    u = Math.acos((Math.cos(s * r) - Math.sin(e * r) * Math.sin(c * r)) / (Math.cos(e * r) * Math.cos(c * r))) / r;
                  (isNaN(u) || 0 === u) && (u = s / Math.cos(Math.PI / 180 * e)), this._point = l.subtract(n.getPixelOrigin()), this._radius = isNaN(u) ? 0 : l.x - n.project([c, t - u]).x, this._radiusY = l.y - o.y
                } else {
                  var h = i.unproject(i.project(this._latlng).subtract([this._mRadius, 0]));
                  this._point = n.latLngToLayerPoint(this._latlng), this._radius = this._point.x - n.latLngToLayerPoint(h).x
                }
                this._updateBounds()
              }
            }),
            Dn = Nn.extend({
              options: {
                smoothFactor: 1,
                noClip: !1
              },
              initialize: function (t, e) {
                p(this, e), this._setLatLngs(t)
              },
              getLatLngs: function () {
                return this._latlngs
              },
              setLatLngs: function (t) {
                return this._setLatLngs(t), this.redraw()
              },
              isEmpty: function () {
                return !this._latlngs.length
              },
              closestLayerPoint: function (t) {
                for (var e, n, i = 1 / 0, r = null, s = mn, o = 0, a = this._parts.length; o < a; o++)
                  for (var l = this._parts[o], c = 1, u = l.length; c < u; c++) {
                    var h = s(t, e = l[c - 1], n = l[c], !0);
                    h < i && (i = h, r = s(t, e, n))
                  }
                return r && (r.distance = Math.sqrt(i)), r
              },
              getCenter: function () {
                if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                var t, e, n, i, r, s, o, a = this._rings[0],
                  l = a.length;
                if (!l) return null;
                for (t = 0, e = 0; t < l - 1; t++) e += a[t].distanceTo(a[t + 1]) / 2;
                if (0 === e) return this._map.layerPointToLatLng(a[0]);
                for (t = 0, i = 0; t < l - 1; t++)
                  if ((i += n = (r = a[t]).distanceTo(s = a[t + 1])) > e) return this._map.layerPointToLatLng([s.x - (o = (i - e) / n) * (s.x - r.x), s.y - o * (s.y - r.y)])
              },
              getBounds: function () {
                return this._bounds
              },
              addLatLng: function (t, e) {
                return e = e || this._defaultShape(), t = V(t), e.push(t), this._bounds.extend(t), this.redraw()
              },
              _setLatLngs: function (t) {
                this._bounds = new D, this._latlngs = this._convertLatLngs(t)
              },
              _defaultShape: function () {
                return gn(this._latlngs) ? this._latlngs : this._latlngs[0]
              },
              _convertLatLngs: function (t) {
                for (var e = [], n = gn(t), i = 0, r = t.length; i < r; i++) n ? (e[i] = V(t[i]), this._bounds.extend(e[i])) : e[i] = this._convertLatLngs(t[i]);
                return e
              },
              _project: function () {
                var t = new R;
                this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds())
              },
              _updateBounds: function () {
                var t = this._clickTolerance(),
                  e = new M(t, t);
                this._pxBounds = new R([this._rawPxBounds.min.subtract(e), this._rawPxBounds.max.add(e)])
              },
              _projectLatlngs: function (t, e, n) {
                var i, r, s = t.length;
                if (t[0] instanceof j) {
                  for (r = [], i = 0; i < s; i++) r[i] = this._map.latLngToLayerPoint(t[i]), n.extend(r[i]);
                  e.push(r)
                } else
                  for (i = 0; i < s; i++) this._projectLatlngs(t[i], e, n)
              },
              _clipPoints: function () {
                var t = this._renderer._bounds;
                if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                  if (this.options.noClip) this._parts = this._rings;
                  else {
                    var e, n, i, r, s, o, a, l = this._parts;
                    for (e = 0, i = 0, r = this._rings.length; e < r; e++)
                      for (n = 0, s = (a = this._rings[e]).length; n < s - 1; n++)(o = dn(a[n], a[n + 1], t, n, !0)) && (l[i] = l[i] || [], l[i].push(o[0]), o[1] === a[n + 1] && n !== s - 2 || (l[i].push(o[1]), i++))
                  }
              },
              _simplifyPoints: function () {
                for (var t = this._parts, e = this.options.smoothFactor, n = 0, i = t.length; n < i; n++) t[n] = un(t[n], e)
              },
              _update: function () {
                this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
              },
              _updatePath: function () {
                this._renderer._updatePoly(this)
              },
              _containsPoint: function (t, e) {
                var n, i, r, s, o, a, l = this._clickTolerance();
                if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                for (n = 0, s = this._parts.length; n < s; n++)
                  for (i = 0, r = (o = (a = this._parts[n]).length) - 1; i < o; r = i++)
                    if ((e || 0 !== i) && hn(t, a[r], a[i]) <= l) return !0;
                return !1
              }
            });
          Dn._flat = vn;
          var zn = Dn.extend({
              options: {
                fill: !0
              },
              isEmpty: function () {
                return !this._latlngs.length || !this._latlngs[0].length
              },
              getCenter: function () {
                if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                var t, e, n, i, r, s, o, a, l = this._rings[0],
                  c = l.length;
                if (!c) return null;
                for (s = o = a = 0, t = 0, e = c - 1; t < c; e = t++) o += ((n = l[t]).x + (i = l[e]).x) * (r = n.y * i.x - i.y * n.x), a += (n.y + i.y) * r, s += 3 * r;
                return this._map.layerPointToLatLng(0 === s ? l[0] : [o / s, a / s])
              },
              _convertLatLngs: function (t) {
                var e = Dn.prototype._convertLatLngs.call(this, t),
                  n = e.length;
                return n >= 2 && e[0] instanceof j && e[0].equals(e[n - 1]) && e.pop(), e
              },
              _setLatLngs: function (t) {
                Dn.prototype._setLatLngs.call(this, t), gn(this._latlngs) && (this._latlngs = [this._latlngs])
              },
              _defaultShape: function () {
                return gn(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
              },
              _clipPoints: function () {
                var t = this._renderer._bounds,
                  e = this.options.weight,
                  n = new M(e, e);
                if (t = new R(t.min.subtract(n), t.max.add(n)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                  if (this.options.noClip) this._parts = this._rings;
                  else
                    for (var i, r = 0, s = this._rings.length; r < s; r++)(i = yn(this._rings[r], t, !0)).length && this._parts.push(i)
              },
              _updatePath: function () {
                this._renderer._updatePoly(this, !0)
              },
              _containsPoint: function (t) {
                var e, n, i, r, s, o, a, l, c = !1;
                if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                for (r = 0, a = this._parts.length; r < a; r++)
                  for (s = 0, o = (l = (e = this._parts[r]).length) - 1; s < l; o = s++)(n = e[s]).y > t.y != (i = e[o]).y > t.y && t.x < (i.x - n.x) * (t.y - n.y) / (i.y - n.y) + n.x && (c = !c);
                return c || Dn.prototype._containsPoint.call(this, t, !0)
              }
            }),
            jn = Ln.extend({
              initialize: function (t, e) {
                p(this, e), this._layers = {}, t && this.addData(t)
              },
              addData: function (t) {
                var e, n, i, r = v(t) ? t : t.features;
                if (r) {
                  for (e = 0, n = r.length; e < n; e++)((i = r[e]).geometries || i.geometry || i.features || i.coordinates) && this.addData(i);
                  return this
                }
                var s = this.options;
                if (s.filter && !s.filter(t)) return this;
                var o = Vn(t, s);
                return o ? (o.feature = Gn(t), o.defaultOptions = o.options, this.resetStyle(o), s.onEachFeature && s.onEachFeature(t, o), this.addLayer(o)) : this
              },
              resetStyle: function (t) {
                return void 0 === t ? this.eachLayer(this.resetStyle, this) : (t.options = n({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this)
              },
              setStyle: function (t) {
                return this.eachLayer((function (e) {
                  this._setLayerStyle(e, t)
                }), this)
              },
              _setLayerStyle: function (t, e) {
                t.setStyle && ("function" == typeof e && (e = e(t.feature)), t.setStyle(e))
              }
            });

          function Vn(t, e) {
            var n, i, r, s, o = "Feature" === t.type ? t.geometry : t,
              a = o ? o.coordinates : null,
              l = [],
              c = e && e.pointToLayer,
              u = e && e.coordsToLatLng || Hn;
            if (!a && !o) return null;
            switch (o.type) {
              case "Point":
                return Un(c, t, n = u(a), e);
              case "MultiPoint":
                for (r = 0, s = a.length; r < s; r++) n = u(a[r]), l.push(Un(c, t, n, e));
                return new Ln(l);
              case "LineString":
              case "MultiLineString":
                return i = Bn(a, "LineString" === o.type ? 0 : 1, u), new Dn(i, e);
              case "Polygon":
              case "MultiPolygon":
                return i = Bn(a, "Polygon" === o.type ? 1 : 2, u), new zn(i, e);
              case "GeometryCollection":
                for (r = 0, s = o.geometries.length; r < s; r++) {
                  var h = Vn({
                    geometry: o.geometries[r],
                    type: "Feature",
                    properties: t.properties
                  }, e);
                  h && l.push(h)
                }
                return new Ln(l);
              default:
                throw new Error("Invalid GeoJSON object.")
            }
          }

          function Un(t, e, n, i) {
            return t ? t(e, n) : new On(n, i && i.markersInheritOptions && i)
          }

          function Hn(t) {
            return new j(t[1], t[0], t[2])
          }

          function Bn(t, e, n) {
            for (var i, r = [], s = 0, o = t.length; s < o; s++) i = e ? Bn(t[s], e - 1, n) : (n || Hn)(t[s]), r.push(i);
            return r
          }

          function $n(t, e) {
            return e = "number" == typeof e ? e : 6, void 0 !== t.alt ? [u(t.lng, e), u(t.lat, e), u(t.alt, e)] : [u(t.lng, e), u(t.lat, e)]
          }

          function Zn(t, e, n, i) {
            for (var r = [], s = 0, o = t.length; s < o; s++) r.push(e ? Zn(t[s], e - 1, n, i) : $n(t[s], i));
            return !e && n && r.push(r[0]), r
          }

          function qn(t, e) {
            return t.feature ? n({}, t.feature, {
              geometry: e
            }) : Gn(e)
          }

          function Gn(t) {
            return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
              type: "Feature",
              properties: {},
              geometry: t
            }
          }
          var Wn = {
            toGeoJSON: function (t) {
              return qn(this, {
                type: "Point",
                coordinates: $n(this.getLatLng(), t)
              })
            }
          };

          function Kn(t, e) {
            return new jn(t, e)
          }
          On.include(Wn), Fn.include(Wn), Rn.include(Wn), Dn.include({
            toGeoJSON: function (t) {
              var e = !gn(this._latlngs);
              return qn(this, {
                type: (e ? "Multi" : "") + "LineString",
                coordinates: Zn(this._latlngs, e ? 1 : 0, !1, t)
              })
            }
          }), zn.include({
            toGeoJSON: function (t) {
              var e = !gn(this._latlngs),
                n = e && !gn(this._latlngs[0]),
                i = Zn(this._latlngs, n ? 2 : e ? 1 : 0, !0, t);
              return e || (i = [i]), qn(this, {
                type: (n ? "Multi" : "") + "Polygon",
                coordinates: i
              })
            }
          }), Tn.include({
            toMultiPoint: function (t) {
              var e = [];
              return this.eachLayer((function (n) {
                e.push(n.toGeoJSON(t).geometry.coordinates)
              })), qn(this, {
                type: "MultiPoint",
                coordinates: e
              })
            },
            toGeoJSON: function (t) {
              var e = this.feature && this.feature.geometry && this.feature.geometry.type;
              if ("MultiPoint" === e) return this.toMultiPoint(t);
              var n = "GeometryCollection" === e,
                i = [];
              return this.eachLayer((function (e) {
                if (e.toGeoJSON) {
                  var r = e.toGeoJSON(t);
                  if (n) i.push(r.geometry);
                  else {
                    var s = Gn(r);
                    "FeatureCollection" === s.type ? i.push.apply(i, s.features) : i.push(s)
                  }
                }
              })), n ? qn(this, {
                geometries: i,
                type: "GeometryCollection"
              }) : {
                type: "FeatureCollection",
                features: i
              }
            }
          });
          var Yn = Kn,
            Jn = En.extend({
              options: {
                opacity: 1,
                alt: "",
                interactive: !1,
                crossOrigin: !1,
                errorOverlayUrl: "",
                zIndex: 1,
                className: ""
              },
              initialize: function (t, e, n) {
                this._url = t, this._bounds = z(e), p(this, n)
              },
              onAdd: function () {
                this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (de(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
              },
              onRemove: function () {
                ae(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
              },
              setOpacity: function (t) {
                return this.options.opacity = t, this._image && this._updateOpacity(), this
              },
              setStyle: function (t) {
                return t.opacity && this.setOpacity(t.opacity), this
              },
              bringToFront: function () {
                return this._map && ce(this._image), this
              },
              bringToBack: function () {
                return this._map && ue(this._image), this
              },
              setUrl: function (t) {
                return this._url = t, this._image && (this._image.src = t), this
              },
              setBounds: function (t) {
                return this._bounds = z(t), this._map && this._reset(), this
              },
              getEvents: function () {
                var t = {
                  zoom: this._reset,
                  viewreset: this._reset
                };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
              },
              setZIndex: function (t) {
                return this.options.zIndex = t, this._updateZIndex(), this
              },
              getBounds: function () {
                return this._bounds
              },
              getElement: function () {
                return this._image
              },
              _initImage: function () {
                var t = "IMG" === this._url.tagName,
                  e = this._image = t ? this._url : oe("img");
                de(e, "leaflet-image-layer"), this._zoomAnimated && de(e, "leaflet-zoom-animated"), this.options.className && de(e, this.options.className), e.onselectstart = c, e.onmousemove = c, e.onload = r(this.fire, this, "load"), e.onerror = r(this._overlayOnError, this, "error"), (this.options.crossOrigin || "" === this.options.crossOrigin) && (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t ? this._url = e.src : (e.src = this._url, e.alt = this.options.alt)
              },
              _animateZoom: function (t) {
                var e = this._map.getZoomScale(t.zoom),
                  n = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                _e(this._image, n, e)
              },
              _reset: function () {
                var t = this._image,
                  e = new R(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                  n = e.getSize();
                ye(t, e.min), t.style.width = n.x + "px", t.style.height = n.y + "px"
              },
              _updateOpacity: function () {
                ge(this._image, this.options.opacity)
              },
              _updateZIndex: function () {
                this._image && null != this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
              },
              _overlayOnError: function () {
                this.fire("error");
                var t = this.options.errorOverlayUrl;
                t && this._url !== t && (this._url = t, this._image.src = t)
              }
            }),
            Qn = Jn.extend({
              options: {
                autoplay: !0,
                loop: !0,
                keepAspectRatio: !0
              },
              _initImage: function () {
                var t = "VIDEO" === this._url.tagName,
                  e = this._image = t ? this._url : oe("video");
                if (de(e, "leaflet-image-layer"), this._zoomAnimated && de(e, "leaflet-zoom-animated"), this.options.className && de(e, this.options.className), e.onselectstart = c, e.onmousemove = c, e.onloadeddata = r(this.fire, this, "load"), t) {
                  for (var n = e.getElementsByTagName("source"), i = [], s = 0; s < n.length; s++) i.push(n[s].src);
                  this._url = n.length > 0 ? i : [e.src]
                } else {
                  v(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && e.style.hasOwnProperty("objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop;
                  for (var o = 0; o < this._url.length; o++) {
                    var a = oe("source");
                    a.src = this._url[o], e.appendChild(a)
                  }
                }
              }
            }),
            Xn = Jn.extend({
              _initImage: function () {
                var t = this._image = this._url;
                de(t, "leaflet-image-layer"), this._zoomAnimated && de(t, "leaflet-zoom-animated"), this.options.className && de(t, this.options.className), t.onselectstart = c, t.onmousemove = c
              }
            }),
            ti = En.extend({
              options: {
                offset: [0, 7],
                className: "",
                pane: "popupPane"
              },
              initialize: function (t, e) {
                p(this, t), this._source = e
              },
              onAdd: function (t) {
                this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && ge(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && ge(this._container, 1), this.bringToFront()
              },
              onRemove: function (t) {
                t._fadeAnimated ? (ge(this._container, 0), this._removeTimeout = setTimeout(r(ae, void 0, this._container), 200)) : ae(this._container)
              },
              getLatLng: function () {
                return this._latlng
              },
              setLatLng: function (t) {
                return this._latlng = V(t), this._map && (this._updatePosition(), this._adjustPan()), this
              },
              getContent: function () {
                return this._content
              },
              setContent: function (t) {
                return this._content = t, this.update(), this
              },
              getElement: function () {
                return this._container
              },
              update: function () {
                this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
              },
              getEvents: function () {
                var t = {
                  zoom: this._updatePosition,
                  viewreset: this._updatePosition
                };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
              },
              isOpen: function () {
                return !!this._map && this._map.hasLayer(this)
              },
              bringToFront: function () {
                return this._map && ce(this._container), this
              },
              bringToBack: function () {
                return this._map && ue(this._container), this
              },
              _prepareOpen: function (t, e, n) {
                if (e instanceof En || (n = e, e = t), e instanceof Ln)
                  for (var i in t._layers) {
                    e = t._layers[i];
                    break
                  }
                if (!n)
                  if (e.getCenter) n = e.getCenter();
                  else {
                    if (!e.getLatLng) throw new Error("Unable to get source layer LatLng.");
                    n = e.getLatLng()
                  } return this._source = e, this.update(), n
              },
              _updateContent: function () {
                if (this._content) {
                  var t = this._contentNode,
                    e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                  if ("string" == typeof e) t.innerHTML = e;
                  else {
                    for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                    t.appendChild(e)
                  }
                  this.fire("contentupdate")
                }
              },
              _updatePosition: function () {
                if (this._map) {
                  var t = this._map.latLngToLayerPoint(this._latlng),
                    e = N(this.options.offset),
                    n = this._getAnchor();
                  this._zoomAnimated ? ye(this._container, t.add(n)) : e = e.add(t).add(n);
                  var i = this._containerBottom = -e.y,
                    r = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
                  this._container.style.bottom = i + "px", this._container.style.left = r + "px"
                }
              },
              _getAnchor: function () {
                return [0, 0]
              }
            }),
            ei = ti.extend({
              options: {
                maxWidth: 300,
                minWidth: 50,
                maxHeight: null,
                autoPan: !0,
                autoPanPaddingTopLeft: null,
                autoPanPaddingBottomRight: null,
                autoPanPadding: [5, 5],
                keepInView: !1,
                closeButton: !0,
                autoClose: !0,
                closeOnEscapeKey: !0,
                className: ""
              },
              openOn: function (t) {
                return t.openPopup(this), this
              },
              onAdd: function (t) {
                ti.prototype.onAdd.call(this, t), t.fire("popupopen", {
                  popup: this
                }), this._source && (this._source.fire("popupopen", {
                  popup: this
                }, !0), this._source instanceof Nn || this._source.on("preclick", Ne))
              },
              onRemove: function (t) {
                ti.prototype.onRemove.call(this, t), t.fire("popupclose", {
                  popup: this
                }), this._source && (this._source.fire("popupclose", {
                  popup: this
                }, !0), this._source instanceof Nn || this._source.off("preclick", Ne))
              },
              getEvents: function () {
                var t = ti.prototype.getEvents.call(this);
                return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
              },
              _close: function () {
                this._map && this._map.closePopup(this)
              },
              _initLayout: function () {
                var t = "leaflet-popup",
                  e = this._container = oe("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
                  n = this._wrapper = oe("div", t + "-content-wrapper", e);
                if (this._contentNode = oe("div", t + "-content", n), Fe(n), Re(this._contentNode), Le(n, "contextmenu", Ne), this._tipContainer = oe("div", t + "-tip-container", e), this._tip = oe("div", t + "-tip", this._tipContainer), this.options.closeButton) {
                  var i = this._closeButton = oe("a", t + "-close-button", e);
                  i.href = "#close", i.innerHTML = "&#215;", Le(i, "click", this._onCloseButtonClick, this)
                }
              },
              _updateLayout: function () {
                var t = this._contentNode,
                  e = t.style;
                e.width = "", e.whiteSpace = "nowrap";
                var n = t.offsetWidth;
                n = Math.min(n, this.options.maxWidth), n = Math.max(n, this.options.minWidth), e.width = n + 1 + "px", e.whiteSpace = "", e.height = "";
                var i = this.options.maxHeight;
                i && t.offsetHeight > i ? (e.height = i + "px", de(t, "leaflet-popup-scrolled")) : pe(t, "leaflet-popup-scrolled"), this._containerWidth = this._container.offsetWidth
              },
              _animateZoom: function (t) {
                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                  n = this._getAnchor();
                ye(this._container, e.add(n))
              },
              _adjustPan: function () {
                if (this.options.autoPan) {
                  this._map._panAnim && this._map._panAnim.stop();
                  var t = this._map,
                    e = parseInt(se(this._container, "marginBottom"), 10) || 0,
                    n = this._container.offsetHeight + e,
                    i = this._containerWidth,
                    r = new M(this._containerLeft, -n - this._containerBottom);
                  r._add(be(this._container));
                  var s = t.layerPointToContainerPoint(r),
                    o = N(this.options.autoPanPadding),
                    a = N(this.options.autoPanPaddingTopLeft || o),
                    l = N(this.options.autoPanPaddingBottomRight || o),
                    c = t.getSize(),
                    u = 0,
                    h = 0;
                  s.x + i + l.x > c.x && (u = s.x + i - c.x + l.x), s.x - u - a.x < 0 && (u = s.x - a.x), s.y + n + l.y > c.y && (h = s.y + n - c.y + l.y), s.y - h - a.y < 0 && (h = s.y - a.y), (u || h) && t.fire("autopanstart").panBy([u, h])
                }
              },
              _onCloseButtonClick: function (t) {
                this._close(), ze(t)
              },
              _getAnchor: function () {
                return N(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
              }
            });
          Ke.mergeOptions({
            closePopupOnClick: !0
          }), Ke.include({
            openPopup: function (t, e, n) {
              return t instanceof ei || (t = new ei(n).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t))
            },
            closePopup: function (t) {
              return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
            }
          }), En.include({
            bindPopup: function (t, e) {
              return t instanceof ei ? (p(t, e), this._popup = t, t._source = this) : (this._popup && !e || (this._popup = new ei(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
              }), this._popupHandlersAdded = !0), this
            },
            unbindPopup: function () {
              return this._popup && (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
              }), this._popupHandlersAdded = !1, this._popup = null), this
            },
            openPopup: function (t, e) {
              return this._popup && this._map && (e = this._popup._prepareOpen(this, t, e), this._map.openPopup(this._popup, e)), this
            },
            closePopup: function () {
              return this._popup && this._popup._close(), this
            },
            togglePopup: function (t) {
              return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
            },
            isPopupOpen: function () {
              return !!this._popup && this._popup.isOpen()
            },
            setPopupContent: function (t) {
              return this._popup && this._popup.setContent(t), this
            },
            getPopup: function () {
              return this._popup
            },
            _openPopup: function (t) {
              var e = t.layer || t.target;
              this._popup && this._map && (ze(t), e instanceof Nn ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng))
            },
            _movePopup: function (t) {
              this._popup.setLatLng(t.latlng)
            },
            _onKeyPress: function (t) {
              13 === t.originalEvent.keyCode && this._openPopup(t)
            }
          });
          var ni = ti.extend({
            options: {
              pane: "tooltipPane",
              offset: [0, 0],
              direction: "auto",
              permanent: !1,
              sticky: !1,
              interactive: !1,
              opacity: .9
            },
            onAdd: function (t) {
              ti.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
                tooltip: this
              }), this._source && this._source.fire("tooltipopen", {
                tooltip: this
              }, !0)
            },
            onRemove: function (t) {
              ti.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
                tooltip: this
              }), this._source && this._source.fire("tooltipclose", {
                tooltip: this
              }, !0)
            },
            getEvents: function () {
              var t = ti.prototype.getEvents.call(this);
              return St && !this.options.permanent && (t.preclick = this._close), t
            },
            _close: function () {
              this._map && this._map.closeTooltip(this)
            },
            _initLayout: function () {
              this._contentNode = this._container = oe("div", "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"))
            },
            _updateLayout: function () {},
            _adjustPan: function () {},
            _setPosition: function (t) {
              var e = this._map,
                n = this._container,
                i = e.latLngToContainerPoint(e.getCenter()),
                r = e.layerPointToContainerPoint(t),
                s = this.options.direction,
                o = n.offsetWidth,
                a = n.offsetHeight,
                l = N(this.options.offset),
                c = this._getAnchor();
              "top" === s ? t = t.add(N(-o / 2 + l.x, -a + l.y + c.y, !0)) : "bottom" === s ? t = t.subtract(N(o / 2 - l.x, -l.y, !0)) : "center" === s ? t = t.subtract(N(o / 2 + l.x, a / 2 - c.y + l.y, !0)) : "right" === s || "auto" === s && r.x < i.x ? (s = "right", t = t.add(N(l.x + c.x, c.y - a / 2 + l.y, !0))) : (s = "left", t = t.subtract(N(o + c.x - l.x, a / 2 - c.y - l.y, !0))), pe(n, "leaflet-tooltip-right"), pe(n, "leaflet-tooltip-left"), pe(n, "leaflet-tooltip-top"), pe(n, "leaflet-tooltip-bottom"), de(n, "leaflet-tooltip-" + s), ye(n, t)
            },
            _updatePosition: function () {
              var t = this._map.latLngToLayerPoint(this._latlng);
              this._setPosition(t)
            },
            setOpacity: function (t) {
              this.options.opacity = t, this._container && ge(this._container, t)
            },
            _animateZoom: function (t) {
              var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
              this._setPosition(e)
            },
            _getAnchor: function () {
              return N(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
            }
          });
          Ke.include({
            openTooltip: function (t, e, n) {
              return t instanceof ni || (t = new ni(n).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : this.addLayer(t)
            },
            closeTooltip: function (t) {
              return t && this.removeLayer(t), this
            }
          }), En.include({
            bindTooltip: function (t, e) {
              return t instanceof ni ? (p(t, e), this._tooltip = t, t._source = this) : (this._tooltip && !e || (this._tooltip = new ni(e, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
            },
            unbindTooltip: function () {
              return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
            },
            _initTooltipInteractions: function (t) {
              if (t || !this._tooltipHandlersAdded) {
                var e = t ? "off" : "on",
                  n = {
                    remove: this.closeTooltip,
                    move: this._moveTooltip
                  };
                this._tooltip.options.permanent ? n.add = this._openTooltip : (n.mouseover = this._openTooltip, n.mouseout = this.closeTooltip, this._tooltip.options.sticky && (n.mousemove = this._moveTooltip), St && (n.click = this._openTooltip)), this[e](n), this._tooltipHandlersAdded = !t
              }
            },
            openTooltip: function (t, e) {
              return this._tooltip && this._map && (e = this._tooltip._prepareOpen(this, t, e), this._map.openTooltip(this._tooltip, e), this._tooltip.options.interactive && this._tooltip._container && (de(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this
            },
            closeTooltip: function () {
              return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (pe(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this
            },
            toggleTooltip: function (t) {
              return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this
            },
            isTooltipOpen: function () {
              return this._tooltip.isOpen()
            },
            setTooltipContent: function (t) {
              return this._tooltip && this._tooltip.setContent(t), this
            },
            getTooltip: function () {
              return this._tooltip
            },
            _openTooltip: function (t) {
              this._tooltip && this._map && this.openTooltip(t.layer || t.target, this._tooltip.options.sticky ? t.latlng : void 0)
            },
            _moveTooltip: function (t) {
              var e, n, i = t.latlng;
              this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent), n = this._map.containerPointToLayerPoint(e), i = this._map.layerPointToLatLng(n)), this._tooltip.setLatLng(i)
            }
          });
          var ii = An.extend({
            options: {
              iconSize: [12, 12],
              html: !1,
              bgPos: null,
              className: "leaflet-div-icon"
            },
            createIcon: function (t) {
              var e = t && "DIV" === t.tagName ? t : document.createElement("div"),
                n = this.options;
              if (n.html instanceof Element ? (le(e), e.appendChild(n.html)) : e.innerHTML = !1 !== n.html ? n.html : "", n.bgPos) {
                var i = N(n.bgPos);
                e.style.backgroundPosition = -i.x + "px " + -i.y + "px"
              }
              return this._setIconStyles(e, "icon"), e
            },
            createShadow: function () {
              return null
            }
          });
          An.Default = In;
          var ri = En.extend({
              options: {
                tileSize: 256,
                opacity: 1,
                updateWhenIdle: _t,
                updateWhenZooming: !0,
                updateInterval: 200,
                zIndex: 1,
                bounds: null,
                minZoom: 0,
                maxZoom: void 0,
                maxNativeZoom: void 0,
                minNativeZoom: void 0,
                noWrap: !1,
                pane: "tilePane",
                className: "",
                keepBuffer: 2
              },
              initialize: function (t) {
                p(this, t)
              },
              onAdd: function () {
                this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
              },
              beforeAdd: function (t) {
                t._addZoomLimit(this)
              },
              onRemove: function (t) {
                this._removeAllTiles(), ae(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0
              },
              bringToFront: function () {
                return this._map && (ce(this._container), this._setAutoZIndex(Math.max)), this
              },
              bringToBack: function () {
                return this._map && (ue(this._container), this._setAutoZIndex(Math.min)), this
              },
              getContainer: function () {
                return this._container
              },
              setOpacity: function (t) {
                return this.options.opacity = t, this._updateOpacity(), this
              },
              setZIndex: function (t) {
                return this.options.zIndex = t, this._updateZIndex(), this
              },
              isLoading: function () {
                return this._loading
              },
              redraw: function () {
                return this._map && (this._removeAllTiles(), this._update()), this
              },
              getEvents: function () {
                var t = {
                  viewprereset: this._invalidateAll,
                  viewreset: this._resetView,
                  zoom: this._resetView,
                  moveend: this._onMoveEnd
                };
                return this.options.updateWhenIdle || (this._onMove || (this._onMove = a(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
              },
              createTile: function () {
                return document.createElement("div")
              },
              getTileSize: function () {
                var t = this.options.tileSize;
                return t instanceof M ? t : new M(t, t)
              },
              _updateZIndex: function () {
                this._container && null != this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
              },
              _setAutoZIndex: function (t) {
                for (var e, n = this.getPane().children, i = -t(-1 / 0, 1 / 0), r = 0, s = n.length; r < s; r++) e = n[r].style.zIndex, n[r] !== this._container && e && (i = t(i, +e));
                isFinite(i) && (this.options.zIndex = i + t(-1, 1), this._updateZIndex())
              },
              _updateOpacity: function () {
                if (this._map && !tt) {
                  ge(this._container, this.options.opacity);
                  var t = +new Date,
                    e = !1,
                    n = !1;
                  for (var i in this._tiles) {
                    var r = this._tiles[i];
                    if (r.current && r.loaded) {
                      var s = Math.min(1, (t - r.loaded) / 200);
                      ge(r.el, s), s < 1 ? e = !0 : (r.active ? n = !0 : this._onOpaqueTile(r), r.active = !0)
                    }
                  }
                  n && !this._noPrune && this._pruneTiles(), e && (P(this._fadeFrame), this._fadeFrame = k(this._updateOpacity, this))
                }
              },
              _onOpaqueTile: c,
              _initContainer: function () {
                this._container || (this._container = oe("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
              },
              _updateLevels: function () {
                var t = this._tileZoom,
                  e = this.options.maxZoom;
                if (void 0 !== t) {
                  for (var n in this._levels) this._levels[n].el.children.length || n === t ? (this._levels[n].el.style.zIndex = e - Math.abs(t - n), this._onUpdateLevel(n)) : (ae(this._levels[n].el), this._removeTilesAtZoom(n), this._onRemoveLevel(n), delete this._levels[n]);
                  var i = this._levels[t],
                    r = this._map;
                  return i || ((i = this._levels[t] = {}).el = oe("div", "leaflet-tile-container leaflet-zoom-animated", this._container), i.el.style.zIndex = e, i.origin = r.project(r.unproject(r.getPixelOrigin()), t).round(), i.zoom = t, this._setZoomTransform(i, r.getCenter(), r.getZoom()), this._onCreateLevel(i)), this._level = i, i
                }
              },
              _onUpdateLevel: c,
              _onRemoveLevel: c,
              _onCreateLevel: c,
              _pruneTiles: function () {
                if (this._map) {
                  var t, e, n = this._map.getZoom();
                  if (n > this.options.maxZoom || n < this.options.minZoom) this._removeAllTiles();
                  else {
                    for (t in this._tiles)(e = this._tiles[t]).retain = e.current;
                    for (t in this._tiles)
                      if ((e = this._tiles[t]).current && !e.active) {
                        var i = e.coords;
                        this._retainParent(i.x, i.y, i.z, i.z - 5) || this._retainChildren(i.x, i.y, i.z, i.z + 2)
                      } for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
                  }
                }
              },
              _removeTilesAtZoom: function (t) {
                for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e)
              },
              _removeAllTiles: function () {
                for (var t in this._tiles) this._removeTile(t)
              },
              _invalidateAll: function () {
                for (var t in this._levels) ae(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
                this._removeAllTiles(), this._tileZoom = void 0
              },
              _retainParent: function (t, e, n, i) {
                var r = Math.floor(t / 2),
                  s = Math.floor(e / 2),
                  o = n - 1,
                  a = new M(+r, +s);
                a.z = +o;
                var l = this._tileCoordsToKey(a),
                  c = this._tiles[l];
                return c && c.active ? (c.retain = !0, !0) : (c && c.loaded && (c.retain = !0), o > i && this._retainParent(r, s, o, i))
              },
              _retainChildren: function (t, e, n, i) {
                for (var r = 2 * t; r < 2 * t + 2; r++)
                  for (var s = 2 * e; s < 2 * e + 2; s++) {
                    var o = new M(r, s);
                    o.z = n + 1;
                    var a = this._tileCoordsToKey(o),
                      l = this._tiles[a];
                    l && l.active ? l.retain = !0 : (l && l.loaded && (l.retain = !0), n + 1 < i && this._retainChildren(r, s, n + 1, i))
                  }
              },
              _resetView: function (t) {
                var e = t && (t.pinch || t.flyTo);
                this._setView(this._map.getCenter(), this._map.getZoom(), e, e)
              },
              _animateZoom: function (t) {
                this._setView(t.center, t.zoom, !0, t.noUpdate)
              },
              _clampZoom: function (t) {
                var e = this.options;
                return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t
              },
              _setView: function (t, e, n, i) {
                var r = this._clampZoom(Math.round(e));
                (void 0 !== this.options.maxZoom && r > this.options.maxZoom || void 0 !== this.options.minZoom && r < this.options.minZoom) && (r = void 0), i && !(this.options.updateWhenZooming && r !== this._tileZoom) || (this._tileZoom = r, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== r && this._update(t), n || this._pruneTiles(), this._noPrune = !!n), this._setZoomTransforms(t, e)
              },
              _setZoomTransforms: function (t, e) {
                for (var n in this._levels) this._setZoomTransform(this._levels[n], t, e)
              },
              _setZoomTransform: function (t, e, n) {
                var i = this._map.getZoomScale(n, t.zoom),
                  r = t.origin.multiplyBy(i).subtract(this._map._getNewPixelOrigin(e, n)).round();
                vt ? _e(t.el, r, i) : ye(t.el, r)
              },
              _resetGrid: function () {
                var t = this._map,
                  e = t.options.crs,
                  n = this._tileSize = this.getTileSize(),
                  i = this._tileZoom,
                  r = this._map.getPixelWorldBounds(this._tileZoom);
                r && (this._globalTileRange = this._pxBoundsToTileRange(r)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], i).x / n.x), Math.ceil(t.project([0, e.wrapLng[1]], i).x / n.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], i).y / n.x), Math.ceil(t.project([e.wrapLat[1], 0], i).y / n.y)]
              },
              _onMoveEnd: function () {
                this._map && !this._map._animatingZoom && this._update()
              },
              _getTiledPixelBounds: function (t) {
                var e = this._map,
                  n = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
                  i = e.getZoomScale(n, this._tileZoom),
                  r = e.project(t, this._tileZoom).floor(),
                  s = e.getSize().divideBy(2 * i);
                return new R(r.subtract(s), r.add(s))
              },
              _update: function (t) {
                var e = this._map;
                if (e) {
                  var n = this._clampZoom(e.getZoom());
                  if (void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom) {
                    var i = this._getTiledPixelBounds(t),
                      r = this._pxBoundsToTileRange(i),
                      s = r.getCenter(),
                      o = [],
                      a = this.options.keepBuffer,
                      l = new R(r.getBottomLeft().subtract([a, -a]), r.getTopRight().add([a, -a]));
                    if (!(isFinite(r.min.x) && isFinite(r.min.y) && isFinite(r.max.x) && isFinite(r.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                    for (var c in this._tiles) {
                      var u = this._tiles[c].coords;
                      u.z === this._tileZoom && l.contains(new M(u.x, u.y)) || (this._tiles[c].current = !1)
                    }
                    if (Math.abs(n - this._tileZoom) > 1) this._setView(t, n);
                    else {
                      for (var h = r.min.y; h <= r.max.y; h++)
                        for (var d = r.min.x; d <= r.max.x; d++) {
                          var p = new M(d, h);
                          if (p.z = this._tileZoom, this._isValidTile(p)) {
                            var f = this._tiles[this._tileCoordsToKey(p)];
                            f ? f.current = !0 : o.push(p)
                          }
                        }
                      if (o.sort((function (t, e) {
                          return t.distanceTo(s) - e.distanceTo(s)
                        })), 0 !== o.length) {
                        this._loading || (this._loading = !0, this.fire("loading"));
                        var m = document.createDocumentFragment();
                        for (d = 0; d < o.length; d++) this._addTile(o[d], m);
                        this._level.el.appendChild(m)
                      }
                    }
                  }
                }
              },
              _isValidTile: function (t) {
                var e = this._map.options.crs;
                if (!e.infinite) {
                  var n = this._globalTileRange;
                  if (!e.wrapLng && (t.x < n.min.x || t.x > n.max.x) || !e.wrapLat && (t.y < n.min.y || t.y > n.max.y)) return !1
                }
                if (!this.options.bounds) return !0;
                var i = this._tileCoordsToBounds(t);
                return z(this.options.bounds).overlaps(i)
              },
              _keyToBounds: function (t) {
                return this._tileCoordsToBounds(this._keyToTileCoords(t))
              },
              _tileCoordsToNwSe: function (t) {
                var e = this._map,
                  n = this.getTileSize(),
                  i = t.scaleBy(n),
                  r = i.add(n);
                return [e.unproject(i, t.z), e.unproject(r, t.z)]
              },
              _tileCoordsToBounds: function (t) {
                var e = this._tileCoordsToNwSe(t),
                  n = new D(e[0], e[1]);
                return this.options.noWrap || (n = this._map.wrapLatLngBounds(n)), n
              },
              _tileCoordsToKey: function (t) {
                return t.x + ":" + t.y + ":" + t.z
              },
              _keyToTileCoords: function (t) {
                var e = t.split(":"),
                  n = new M(+e[0], +e[1]);
                return n.z = +e[2], n
              },
              _removeTile: function (t) {
                var e = this._tiles[t];
                e && (ae(e.el), delete this._tiles[t], this.fire("tileunload", {
                  tile: e.el,
                  coords: this._keyToTileCoords(t)
                }))
              },
              _initTile: function (t) {
                de(t, "leaflet-tile");
                var e = this.getTileSize();
                t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = c, t.onmousemove = c, tt && this.options.opacity < 1 && ge(t, this.options.opacity), it && !rt && (t.style.WebkitBackfaceVisibility = "hidden")
              },
              _addTile: function (t, e) {
                var n = this._getTilePos(t),
                  i = this._tileCoordsToKey(t),
                  s = this.createTile(this._wrapCoords(t), r(this._tileReady, this, t));
                this._initTile(s), this.createTile.length < 2 && k(r(this._tileReady, this, t, null, s)), ye(s, n), this._tiles[i] = {
                  el: s,
                  coords: t,
                  current: !0
                }, e.appendChild(s), this.fire("tileloadstart", {
                  tile: s,
                  coords: t
                })
              },
              _tileReady: function (t, e, n) {
                e && this.fire("tileerror", {
                  error: e,
                  tile: n,
                  coords: t
                });
                var i = this._tileCoordsToKey(t);
                (n = this._tiles[i]) && (n.loaded = +new Date, this._map._fadeAnimated ? (ge(n.el, 0), P(this._fadeFrame), this._fadeFrame = k(this._updateOpacity, this)) : (n.active = !0, this._pruneTiles()), e || (de(n.el, "leaflet-tile-loaded"), this.fire("tileload", {
                  tile: n.el,
                  coords: t
                })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), tt || !this._map._fadeAnimated ? k(this._pruneTiles, this) : setTimeout(r(this._pruneTiles, this), 250)))
              },
              _getTilePos: function (t) {
                return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
              },
              _wrapCoords: function (t) {
                var e = new M(this._wrapX ? l(t.x, this._wrapX) : t.x, this._wrapY ? l(t.y, this._wrapY) : t.y);
                return e.z = t.z, e
              },
              _pxBoundsToTileRange: function (t) {
                var e = this.getTileSize();
                return new R(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]))
              },
              _noTilesToLoad: function () {
                for (var t in this._tiles)
                  if (!this._tiles[t].loaded) return !1;
                return !0
              }
            }),
            si = ri.extend({
              options: {
                minZoom: 0,
                maxZoom: 18,
                subdomains: "abc",
                errorTileUrl: "",
                zoomOffset: 0,
                tms: !1,
                zoomReverse: !1,
                detectRetina: !1,
                crossOrigin: !1
              },
              initialize: function (t, e) {
                this._url = t, (e = p(this, e)).detectRetina && Pt && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--), e.minZoom = Math.max(0, e.minZoom)), "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")), it || this.on("tileunload", this._onTileRemove)
              },
              setUrl: function (t, e) {
                return this._url === t && void 0 === e && (e = !0), this._url = t, e || this.redraw(), this
              },
              createTile: function (t, e) {
                var n = document.createElement("img");
                return Le(n, "load", r(this._tileOnLoad, this, e, n)), Le(n, "error", r(this._tileOnError, this, e, n)), (this.options.crossOrigin || "" === this.options.crossOrigin) && (n.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), n.alt = "", n.setAttribute("role", "presentation"), n.src = this.getTileUrl(t), n
              },
              getTileUrl: function (t) {
                var e = {
                  r: Pt ? "@2x" : "",
                  s: this._getSubdomain(t),
                  x: t.x,
                  y: t.y,
                  z: this._getZoomForUrl()
                };
                if (this._map && !this._map.options.crs.infinite) {
                  var i = this._globalTileRange.max.y - t.y;
                  this.options.tms && (e.y = i), e["-y"] = i
                }
                return g(this._url, n(e, this.options))
              },
              _tileOnLoad: function (t, e) {
                tt ? setTimeout(r(t, this, null, e), 0) : t(null, e)
              },
              _tileOnError: function (t, e, n) {
                var i = this.options.errorTileUrl;
                i && e.getAttribute("src") !== i && (e.src = i), t(n, e)
              },
              _onTileRemove: function (t) {
                t.tile.onload = null
              },
              _getZoomForUrl: function () {
                var t = this._tileZoom;
                return this.options.zoomReverse && (t = this.options.maxZoom - t), t + this.options.zoomOffset
              },
              _getSubdomain: function (t) {
                var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                return this.options.subdomains[e]
              },
              _abortLoading: function () {
                var t, e;
                for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = c, e.onerror = c, e.complete || (e.src = y, ae(e), delete this._tiles[t]))
              },
              _removeTile: function (t) {
                var e = this._tiles[t];
                if (e) return ot || e.el.setAttribute("src", y), ri.prototype._removeTile.call(this, t)
              },
              _tileReady: function (t, e, n) {
                if (this._map && (!n || n.getAttribute("src") !== y)) return ri.prototype._tileReady.call(this, t, e, n)
              }
            });

          function oi(t, e) {
            return new si(t, e)
          }
          var ai = si.extend({
            defaultWmsParams: {
              service: "WMS",
              request: "GetMap",
              layers: "",
              styles: "",
              format: "image/jpeg",
              transparent: !1,
              version: "1.1.1"
            },
            options: {
              crs: null,
              uppercase: !1
            },
            initialize: function (t, e) {
              this._url = t;
              var i = n({}, this.defaultWmsParams);
              for (var r in e) r in this.options || (i[r] = e[r]);
              var s = (e = p(this, e)).detectRetina && Pt ? 2 : 1,
                o = this.getTileSize();
              i.width = o.x * s, i.height = o.y * s, this.wmsParams = i
            },
            onAdd: function (t) {
              this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version), this.wmsParams[this._wmsVersion >= 1.3 ? "crs" : "srs"] = this._crs.code, si.prototype.onAdd.call(this, t)
            },
            getTileUrl: function (t) {
              var e = this._tileCoordsToNwSe(t),
                n = this._crs,
                i = F(n.project(e[0]), n.project(e[1])),
                r = i.min,
                s = i.max,
                o = (this._wmsVersion >= 1.3 && this._crs === kn ? [r.y, r.x, s.y, s.x] : [r.x, r.y, s.x, s.y]).join(","),
                a = si.prototype.getTileUrl.call(this, t);
              return a + f(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + o
            },
            setParams: function (t, e) {
              return n(this.wmsParams, t), e || this.redraw(), this
            }
          });
          si.WMS = ai, oi.wms = function (t, e) {
            return new ai(t, e)
          };
          var li = En.extend({
              options: {
                padding: .1,
                tolerance: 0
              },
              initialize: function (t) {
                p(this, t), o(this), this._layers = this._layers || {}
              },
              onAdd: function () {
                this._container || (this._initContainer(), this._zoomAnimated && de(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
              },
              onRemove: function () {
                this.off("update", this._updatePaths, this), this._destroyContainer()
              },
              getEvents: function () {
                var t = {
                  viewreset: this._reset,
                  zoom: this._onZoom,
                  moveend: this._update,
                  zoomend: this._onZoomEnd
                };
                return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
              },
              _onAnimZoom: function (t) {
                this._updateTransform(t.center, t.zoom)
              },
              _onZoom: function () {
                this._updateTransform(this._map.getCenter(), this._map.getZoom())
              },
              _updateTransform: function (t, e) {
                var n = this._map.getZoomScale(e, this._zoom),
                  i = be(this._container),
                  r = this._map.getSize().multiplyBy(.5 + this.options.padding),
                  s = this._map.project(this._center, e),
                  o = this._map.project(t, e).subtract(s),
                  a = r.multiplyBy(-n).add(i).add(r).subtract(o);
                vt ? _e(this._container, a, n) : ye(this._container, a)
              },
              _reset: function () {
                for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) this._layers[t]._reset()
              },
              _onZoomEnd: function () {
                for (var t in this._layers) this._layers[t]._project()
              },
              _updatePaths: function () {
                for (var t in this._layers) this._layers[t]._update()
              },
              _update: function () {
                var t = this.options.padding,
                  e = this._map.getSize(),
                  n = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
                this._bounds = new R(n, n.add(e.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
              }
            }),
            ci = li.extend({
              getEvents: function () {
                var t = li.prototype.getEvents.call(this);
                return t.viewprereset = this._onViewPreReset, t
              },
              _onViewPreReset: function () {
                this._postponeUpdatePaths = !0
              },
              onAdd: function () {
                li.prototype.onAdd.call(this), this._draw()
              },
              _initContainer: function () {
                var t = this._container = document.createElement("canvas");
                Le(t, "mousemove", this._onMouseMove, this), Le(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), Le(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
              },
              _destroyContainer: function () {
                P(this._redrawRequest), delete this._ctx, ae(this._container), Ie(this._container), delete this._container
              },
              _updatePaths: function () {
                if (!this._postponeUpdatePaths) {
                  for (var t in this._redrawBounds = null, this._layers) this._layers[t]._update();
                  this._redraw()
                }
              },
              _update: function () {
                if (!this._map._animatingZoom || !this._bounds) {
                  li.prototype._update.call(this);
                  var t = this._bounds,
                    e = this._container,
                    n = t.getSize(),
                    i = Pt ? 2 : 1;
                  ye(e, t.min), e.width = i * n.x, e.height = i * n.y, e.style.width = n.x + "px", e.style.height = n.y + "px", Pt && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
                }
              },
              _reset: function () {
                li.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
              },
              _initPath: function (t) {
                this._updateDashArray(t), this._layers[o(t)] = t;
                var e = t._order = {
                  layer: t,
                  prev: this._drawLast,
                  next: null
                };
                this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast
              },
              _addPath: function (t) {
                this._requestRedraw(t)
              },
              _removePath: function (t) {
                var e = t._order,
                  n = e.next,
                  i = e.prev;
                n ? n.prev = i : this._drawLast = i, i ? i.next = n : this._drawFirst = n, delete t._order, delete this._layers[o(t)], this._requestRedraw(t)
              },
              _updatePath: function (t) {
                this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
              },
              _updateStyle: function (t) {
                this._updateDashArray(t), this._requestRedraw(t)
              },
              _updateDashArray: function (t) {
                if ("string" == typeof t.options.dashArray) {
                  var e, n, i = t.options.dashArray.split(/[, ]+/),
                    r = [];
                  for (n = 0; n < i.length; n++) {
                    if (e = Number(i[n]), isNaN(e)) return;
                    r.push(e)
                  }
                  t.options._dashArray = r
                } else t.options._dashArray = t.options.dashArray
              },
              _requestRedraw: function (t) {
                this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || k(this._redraw, this))
              },
              _extendRedrawBounds: function (t) {
                if (t._pxBounds) {
                  var e = (t.options.weight || 0) + 1;
                  this._redrawBounds = this._redrawBounds || new R, this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]))
                }
              },
              _redraw: function () {
                this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
              },
              _clear: function () {
                var t = this._redrawBounds;
                if (t) {
                  var e = t.getSize();
                  this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y)
                } else this._ctx.clearRect(0, 0, this._container.width, this._container.height)
              },
              _draw: function () {
                var t, e = this._redrawBounds;
                if (this._ctx.save(), e) {
                  var n = e.getSize();
                  this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, n.x, n.y), this._ctx.clip()
                }
                this._drawing = !0;
                for (var i = this._drawFirst; i; i = i.next) t = i.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
                this._drawing = !1, this._ctx.restore()
              },
              _updatePoly: function (t, e) {
                if (this._drawing) {
                  var n, i, r, s, o = t._parts,
                    a = o.length,
                    l = this._ctx;
                  if (a) {
                    for (l.beginPath(), n = 0; n < a; n++) {
                      for (i = 0, r = o[n].length; i < r; i++) l[i ? "lineTo" : "moveTo"]((s = o[n][i]).x, s.y);
                      e && l.closePath()
                    }
                    this._fillStroke(l, t)
                  }
                }
              },
              _updateCircle: function (t) {
                if (this._drawing && !t._empty()) {
                  var e = t._point,
                    n = this._ctx,
                    i = Math.max(Math.round(t._radius), 1),
                    r = (Math.max(Math.round(t._radiusY), 1) || i) / i;
                  1 !== r && (n.save(), n.scale(1, r)), n.beginPath(), n.arc(e.x, e.y / r, i, 0, 2 * Math.PI, !1), 1 !== r && n.restore(), this._fillStroke(n, t)
                }
              },
              _fillStroke: function (t, e) {
                var n = e.options;
                n.fill && (t.globalAlpha = n.fillOpacity, t.fillStyle = n.fillColor || n.color, t.fill(n.fillRule || "evenodd")), n.stroke && 0 !== n.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = n.opacity, t.lineWidth = n.weight, t.strokeStyle = n.color, t.lineCap = n.lineCap, t.lineJoin = n.lineJoin, t.stroke())
              },
              _onClick: function (t) {
                for (var e, n, i = this._map.mouseEventToLayerPoint(t), r = this._drawFirst; r; r = r.next)(e = r.layer).options.interactive && e._containsPoint(i) && !this._map._draggableMoved(e) && (n = e);
                n && ($e(t), this._fireEvent([n], t))
              },
              _onMouseMove: function (t) {
                if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                  var e = this._map.mouseEventToLayerPoint(t);
                  this._handleMouseHover(t, e)
                }
              },
              _handleMouseOut: function (t) {
                var e = this._hoveredLayer;
                e && (pe(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1)
              },
              _handleMouseHover: function (t, e) {
                if (!this._mouseHoverThrottled) {
                  for (var n, i, r = this._drawFirst; r; r = r.next)(n = r.layer).options.interactive && n._containsPoint(e) && (i = n);
                  i !== this._hoveredLayer && (this._handleMouseOut(t), i && (de(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseover"), this._hoveredLayer = i)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t), this._mouseHoverThrottled = !0, setTimeout(L.bind((function () {
                    this._mouseHoverThrottled = !1
                  }), this), 32)
                }
              },
              _fireEvent: function (t, e, n) {
                this._map._fireDOMEvent(e, n || e.type, t)
              },
              _bringToFront: function (t) {
                var e = t._order;
                if (e) {
                  var n = e.next,
                    i = e.prev;
                  n && (n.prev = i, i ? i.next = n : n && (this._drawFirst = n), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t))
                }
              },
              _bringToBack: function (t) {
                var e = t._order;
                if (e) {
                  var n = e.next,
                    i = e.prev;
                  i && (i.next = n, n ? n.prev = i : i && (this._drawLast = i), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t))
                }
              }
            });

          function ui(t) {
            return Tt ? new ci(t) : null
          }
          var hi = function () {
              try {
                return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                  function (t) {
                    return document.createElement("<lvml:" + t + ' class="lvml">')
                  }
              } catch (t) {
                return function (t) {
                  return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                }
              }
            }(),
            di = {
              _initContainer: function () {
                this._container = oe("div", "leaflet-vml-container")
              },
              _update: function () {
                this._map._animatingZoom || (li.prototype._update.call(this), this.fire("update"))
              },
              _initPath: function (t) {
                var e = t._container = hi("shape");
                de(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = hi("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[o(t)] = t
              },
              _addPath: function (t) {
                var e = t._container;
                this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e)
              },
              _removePath: function (t) {
                var e = t._container;
                ae(e), t.removeInteractiveTarget(e), delete this._layers[o(t)]
              },
              _updateStyle: function (t) {
                var e = t._stroke,
                  n = t._fill,
                  i = t.options,
                  r = t._container;
                r.stroked = !!i.stroke, r.filled = !!i.fill, i.stroke ? (e || (e = t._stroke = hi("stroke")), r.appendChild(e), e.weight = i.weight + "px", e.color = i.color, e.opacity = i.opacity, e.dashStyle = i.dashArray ? v(i.dashArray) ? i.dashArray.join(" ") : i.dashArray.replace(/( *, *)/g, " ") : "", e.endcap = i.lineCap.replace("butt", "flat"), e.joinstyle = i.lineJoin) : e && (r.removeChild(e), t._stroke = null), i.fill ? (n || (n = t._fill = hi("fill")), r.appendChild(n), n.color = i.fillColor || i.color, n.opacity = i.fillOpacity) : n && (r.removeChild(n), t._fill = null)
              },
              _updateCircle: function (t) {
                var e = t._point.round(),
                  n = Math.round(t._radius),
                  i = Math.round(t._radiusY || n);
                this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + n + "," + i + " 0,23592600")
              },
              _setPath: function (t, e) {
                t._path.v = e
              },
              _bringToFront: function (t) {
                ce(t._container)
              },
              _bringToBack: function (t) {
                ue(t._container)
              }
            },
            pi = At ? hi : Y,
            fi = li.extend({
              getEvents: function () {
                var t = li.prototype.getEvents.call(this);
                return t.zoomstart = this._onZoomStart, t
              },
              _initContainer: function () {
                this._container = pi("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = pi("g"), this._container.appendChild(this._rootGroup)
              },
              _destroyContainer: function () {
                ae(this._container), Ie(this._container), delete this._container, delete this._rootGroup, delete this._svgSize
              },
              _onZoomStart: function () {
                this._update()
              },
              _update: function () {
                if (!this._map._animatingZoom || !this._bounds) {
                  li.prototype._update.call(this);
                  var t = this._bounds,
                    e = t.getSize(),
                    n = this._container;
                  this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, n.setAttribute("width", e.x), n.setAttribute("height", e.y)), ye(n, t.min), n.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update")
                }
              },
              _initPath: function (t) {
                var e = t._path = pi("path");
                t.options.className && de(e, t.options.className), t.options.interactive && de(e, "leaflet-interactive"), this._updateStyle(t), this._layers[o(t)] = t
              },
              _addPath: function (t) {
                this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
              },
              _removePath: function (t) {
                ae(t._path), t.removeInteractiveTarget(t._path), delete this._layers[o(t)]
              },
              _updatePath: function (t) {
                t._project(), t._update()
              },
              _updateStyle: function (t) {
                var e = t._path,
                  n = t.options;
                e && (n.stroke ? (e.setAttribute("stroke", n.color), e.setAttribute("stroke-opacity", n.opacity), e.setAttribute("stroke-width", n.weight), e.setAttribute("stroke-linecap", n.lineCap), e.setAttribute("stroke-linejoin", n.lineJoin), n.dashArray ? e.setAttribute("stroke-dasharray", n.dashArray) : e.removeAttribute("stroke-dasharray"), n.dashOffset ? e.setAttribute("stroke-dashoffset", n.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), n.fill ? (e.setAttribute("fill", n.fillColor || n.color), e.setAttribute("fill-opacity", n.fillOpacity), e.setAttribute("fill-rule", n.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
              },
              _updatePoly: function (t, e) {
                this._setPath(t, J(t._parts, e))
              },
              _updateCircle: function (t) {
                var e = t._point,
                  n = Math.max(Math.round(t._radius), 1),
                  i = "a" + n + "," + (Math.max(Math.round(t._radiusY), 1) || n) + " 0 1,0 ",
                  r = t._empty() ? "M0 0" : "M" + (e.x - n) + "," + e.y + i + 2 * n + ",0 " + i + 2 * -n + ",0 ";
                this._setPath(t, r)
              },
              _setPath: function (t, e) {
                t._path.setAttribute("d", e)
              },
              _bringToFront: function (t) {
                ce(t._path)
              },
              _bringToBack: function (t) {
                ue(t._path)
              }
            });

          function mi(t) {
            return Lt || At ? new fi(t) : null
          }
          At && fi.include(di), Ke.include({
            getRenderer: function (t) {
              var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
              return e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e
            },
            _getPaneRenderer: function (t) {
              if ("overlayPane" === t || void 0 === t) return !1;
              var e = this._paneRenderers[t];
              return void 0 === e && (e = this._createRenderer({
                pane: t
              }), this._paneRenderers[t] = e), e
            },
            _createRenderer: function (t) {
              return this.options.preferCanvas && ui(t) || mi(t)
            }
          });
          var gi = zn.extend({
            initialize: function (t, e) {
              zn.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
            },
            setBounds: function (t) {
              return this.setLatLngs(this._boundsToLatLngs(t))
            },
            _boundsToLatLngs: function (t) {
              return [(t = z(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
            }
          });
          fi.create = pi, fi.pointsToPath = J, jn.geometryToLayer = Vn, jn.coordsToLatLng = Hn, jn.coordsToLatLngs = Bn, jn.latLngToCoords = $n, jn.latLngsToCoords = Zn, jn.getFeature = qn, jn.asFeature = Gn, Ke.mergeOptions({
            boxZoom: !0
          });
          var vi = nn.extend({
            initialize: function (t) {
              this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
            },
            addHooks: function () {
              Le(this._container, "mousedown", this._onMouseDown, this)
            },
            removeHooks: function () {
              Ie(this._container, "mousedown", this._onMouseDown, this)
            },
            moved: function () {
              return this._moved
            },
            _destroy: function () {
              ae(this._pane), delete this._pane
            },
            _resetState: function () {
              this._resetStateTimeout = 0, this._moved = !1
            },
            _clearDeferredResetState: function () {
              0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
            },
            _onMouseDown: function (t) {
              if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
              this._clearDeferredResetState(), this._resetState(), Yt(), xe(), this._startPoint = this._map.mouseEventToContainerPoint(t), Le(document, {
                contextmenu: ze,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
              }, this)
            },
            _onMouseMove: function (t) {
              this._moved || (this._moved = !0, this._box = oe("div", "leaflet-zoom-box", this._container), de(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
              var e = new R(this._point, this._startPoint),
                n = e.getSize();
              ye(this._box, e.min), this._box.style.width = n.x + "px", this._box.style.height = n.y + "px"
            },
            _finish: function () {
              this._moved && (ae(this._box), pe(this._container, "leaflet-crosshair")), Jt(), Se(), Ie(document, {
                contextmenu: ze,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
              }, this)
            },
            _onMouseUp: function (t) {
              if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(r(this._resetState, this), 0);
                var e = new D(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                this._map.fitBounds(e).fire("boxzoomend", {
                  boxZoomBounds: e
                })
              }
            },
            _onKeyDown: function (t) {
              27 === t.keyCode && this._finish()
            }
          });
          Ke.addInitHook("addHandler", "boxZoom", vi), Ke.mergeOptions({
            doubleClickZoom: !0
          });
          var _i = nn.extend({
            addHooks: function () {
              this._map.on("dblclick", this._onDoubleClick, this)
            },
            removeHooks: function () {
              this._map.off("dblclick", this._onDoubleClick, this)
            },
            _onDoubleClick: function (t) {
              var e = this._map,
                n = e.getZoom(),
                i = e.options.zoomDelta,
                r = t.originalEvent.shiftKey ? n - i : n + i;
              "center" === e.options.doubleClickZoom ? e.setZoom(r) : e.setZoomAround(t.containerPoint, r)
            }
          });
          Ke.addInitHook("addHandler", "doubleClickZoom", _i), Ke.mergeOptions({
            dragging: !0,
            inertia: !rt,
            inertiaDeceleration: 3400,
            inertiaMaxSpeed: 1 / 0,
            easeLinearity: .2,
            worldCopyJump: !1,
            maxBoundsViscosity: 0
          });
          var yi = nn.extend({
            addHooks: function () {
              if (!this._draggable) {
                var t = this._map;
                this._draggable = new cn(t._mapPane, t._container), this._draggable.on({
                  dragstart: this._onDragStart,
                  drag: this._onDrag,
                  dragend: this._onDragEnd
                }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
              }
              de(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
            },
            removeHooks: function () {
              pe(this._map._container, "leaflet-grab"), pe(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
            },
            moved: function () {
              return this._draggable && this._draggable._moved
            },
            moving: function () {
              return this._draggable && this._draggable._moving
            },
            _onDragStart: function () {
              var t = this._map;
              if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                var e = z(this._map.options.maxBounds);
                this._offsetLimit = F(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
              } else this._offsetLimit = null;
              t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
            },
            _onDrag: function (t) {
              if (this._map.options.inertia) {
                var e = this._lastTime = +new Date,
                  n = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                this._positions.push(n), this._times.push(e), this._prunePositions(e)
              }
              this._map.fire("move", t).fire("drag", t)
            },
            _prunePositions: function (t) {
              for (; this._positions.length > 1 && t - this._times[0] > 50;) this._positions.shift(), this._times.shift()
            },
            _onZoomEnd: function () {
              var t = this._map.getSize().divideBy(2),
                e = this._map.latLngToLayerPoint([0, 0]);
              this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
            },
            _viscousLimit: function (t, e) {
              return t - (t - e) * this._viscosity
            },
            _onPreDragLimit: function () {
              if (this._viscosity && this._offsetLimit) {
                var t = this._draggable._newPos.subtract(this._draggable._startPos),
                  e = this._offsetLimit;
                t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
              }
            },
            _onPreDragWrap: function () {
              var t = this._worldWidth,
                e = Math.round(t / 2),
                n = this._initialWorldOffset,
                i = this._draggable._newPos.x,
                r = (i - e + n) % t + e - n,
                s = (i + e + n) % t - e - n,
                o = Math.abs(r + n) < Math.abs(s + n) ? r : s;
              this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = o
            },
            _onDragEnd: function (t) {
              var e = this._map,
                n = e.options,
                i = !n.inertia || this._times.length < 2;
              if (e.fire("dragend", t), i) e.fire("moveend");
              else {
                this._prunePositions(+new Date);
                var r = this._lastPos.subtract(this._positions[0]),
                  s = n.easeLinearity,
                  o = r.multiplyBy(s / ((this._lastTime - this._times[0]) / 1e3)),
                  a = o.distanceTo([0, 0]),
                  l = Math.min(n.inertiaMaxSpeed, a),
                  c = o.multiplyBy(l / a),
                  u = l / (n.inertiaDeceleration * s),
                  h = c.multiplyBy(-u / 2).round();
                h.x || h.y ? (h = e._limitOffset(h, e.options.maxBounds), k((function () {
                  e.panBy(h, {
                    duration: u,
                    easeLinearity: s,
                    noMoveStart: !0,
                    animate: !0
                  })
                }))) : e.fire("moveend")
              }
            }
          });
          Ke.addInitHook("addHandler", "dragging", yi), Ke.mergeOptions({
            keyboard: !0,
            keyboardPanDelta: 80
          });
          var bi = nn.extend({
            keyCodes: {
              left: [37],
              right: [39],
              down: [40],
              up: [38],
              zoomIn: [187, 107, 61, 171],
              zoomOut: [189, 109, 54, 173]
            },
            initialize: function (t) {
              this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
            },
            addHooks: function () {
              var t = this._map._container;
              t.tabIndex <= 0 && (t.tabIndex = "0"), Le(t, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
              }, this), this._map.on({
                focus: this._addHooks,
                blur: this._removeHooks
              }, this)
            },
            removeHooks: function () {
              this._removeHooks(), Ie(this._map._container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
              }, this), this._map.off({
                focus: this._addHooks,
                blur: this._removeHooks
              }, this)
            },
            _onMouseDown: function () {
              if (!this._focused) {
                var t = document.body,
                  e = document.documentElement,
                  n = t.scrollTop || e.scrollTop,
                  i = t.scrollLeft || e.scrollLeft;
                this._map._container.focus(), window.scrollTo(i, n)
              }
            },
            _onFocus: function () {
              this._focused = !0, this._map.fire("focus")
            },
            _onBlur: function () {
              this._focused = !1, this._map.fire("blur")
            },
            _setPanDelta: function (t) {
              var e, n, i = this._panKeys = {},
                r = this.keyCodes;
              for (e = 0, n = r.left.length; e < n; e++) i[r.left[e]] = [-1 * t, 0];
              for (e = 0, n = r.right.length; e < n; e++) i[r.right[e]] = [t, 0];
              for (e = 0, n = r.down.length; e < n; e++) i[r.down[e]] = [0, t];
              for (e = 0, n = r.up.length; e < n; e++) i[r.up[e]] = [0, -1 * t]
            },
            _setZoomDelta: function (t) {
              var e, n, i = this._zoomKeys = {},
                r = this.keyCodes;
              for (e = 0, n = r.zoomIn.length; e < n; e++) i[r.zoomIn[e]] = t;
              for (e = 0, n = r.zoomOut.length; e < n; e++) i[r.zoomOut[e]] = -t
            },
            _addHooks: function () {
              Le(document, "keydown", this._onKeyDown, this)
            },
            _removeHooks: function () {
              Ie(document, "keydown", this._onKeyDown, this)
            },
            _onKeyDown: function (t) {
              if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                var e, n = t.keyCode,
                  i = this._map;
                if (n in this._panKeys) i._panAnim && i._panAnim._inProgress || (e = this._panKeys[n], t.shiftKey && (e = N(e).multiplyBy(3)), i.panBy(e), i.options.maxBounds && i.panInsideBounds(i.options.maxBounds));
                else if (n in this._zoomKeys) i.setZoom(i.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[n]);
                else {
                  if (27 !== n || !i._popup || !i._popup.options.closeOnEscapeKey) return;
                  i.closePopup()
                }
                ze(t)
              }
            }
          });
          Ke.addInitHook("addHandler", "keyboard", bi), Ke.mergeOptions({
            scrollWheelZoom: !0,
            wheelDebounceTime: 40,
            wheelPxPerZoomLevel: 60
          });
          var wi = nn.extend({
            addHooks: function () {
              Le(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
            },
            removeHooks: function () {
              Ie(this._map._container, "mousewheel", this._onWheelScroll, this)
            },
            _onWheelScroll: function (t) {
              var e = Ue(t),
                n = this._map.options.wheelDebounceTime;
              this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
              var i = Math.max(n - (+new Date - this._startTime), 0);
              clearTimeout(this._timer), this._timer = setTimeout(r(this._performZoom, this), i), ze(t)
            },
            _performZoom: function () {
              var t = this._map,
                e = t.getZoom(),
                n = this._map.options.zoomSnap || 0;
              t._stop();
              var i = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(this._delta / (4 * this._map.options.wheelPxPerZoomLevel))))) / Math.LN2,
                r = n ? Math.ceil(i / n) * n : i,
                s = t._limitZoom(e + (this._delta > 0 ? r : -r)) - e;
              this._delta = 0, this._startTime = null, s && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + s) : t.setZoomAround(this._lastMousePos, e + s))
            }
          });
          Ke.addInitHook("addHandler", "scrollWheelZoom", wi), Ke.mergeOptions({
            tap: !0,
            tapTolerance: 15
          });
          var xi = nn.extend({
            addHooks: function () {
              Le(this._map._container, "touchstart", this._onDown, this)
            },
            removeHooks: function () {
              Ie(this._map._container, "touchstart", this._onDown, this)
            },
            _onDown: function (t) {
              if (t.touches) {
                if (De(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                var e = t.touches[0],
                  n = e.target;
                this._startPos = this._newPos = new M(e.clientX, e.clientY), n.tagName && "a" === n.tagName.toLowerCase() && de(n, "leaflet-active"), this._holdTimeout = setTimeout(r((function () {
                  this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", e))
                }), this), 1e3), this._simulateEvent("mousedown", e), Le(document, {
                  touchmove: this._onMove,
                  touchend: this._onUp
                }, this)
              }
            },
            _onUp: function (t) {
              if (clearTimeout(this._holdTimeout), Ie(document, {
                  touchmove: this._onMove,
                  touchend: this._onUp
                }, this), this._fireClick && t && t.changedTouches) {
                var e = t.changedTouches[0],
                  n = e.target;
                n && n.tagName && "a" === n.tagName.toLowerCase() && pe(n, "leaflet-active"), this._simulateEvent("mouseup", e), this._isTapValid() && this._simulateEvent("click", e)
              }
            },
            _isTapValid: function () {
              return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
            },
            _onMove: function (t) {
              var e = t.touches[0];
              this._newPos = new M(e.clientX, e.clientY), this._simulateEvent("mousemove", e)
            },
            _simulateEvent: function (t, e) {
              var n = document.createEvent("MouseEvents");
              n._simulated = !0, e.target._simulatedClick = !0, n.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(n)
            }
          });
          St && !xt && Ke.addInitHook("addHandler", "tap", xi), Ke.mergeOptions({
            touchZoom: St && !rt,
            bounceAtZoomLimits: !0
          });
          var Si = nn.extend({
            addHooks: function () {
              de(this._map._container, "leaflet-touch-zoom"), Le(this._map._container, "touchstart", this._onTouchStart, this)
            },
            removeHooks: function () {
              pe(this._map._container, "leaflet-touch-zoom"), Ie(this._map._container, "touchstart", this._onTouchStart, this)
            },
            _onTouchStart: function (t) {
              var e = this._map;
              if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                var n = e.mouseEventToContainerPoint(t.touches[0]),
                  i = e.mouseEventToContainerPoint(t.touches[1]);
                this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), "center" !== e.options.touchZoom && (this._pinchStartLatLng = e.containerPointToLatLng(n.add(i)._divideBy(2))), this._startDist = n.distanceTo(i), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), Le(document, "touchmove", this._onTouchMove, this), Le(document, "touchend", this._onTouchEnd, this), De(t)
              }
            },
            _onTouchMove: function (t) {
              if (t.touches && 2 === t.touches.length && this._zooming) {
                var e = this._map,
                  n = e.mouseEventToContainerPoint(t.touches[0]),
                  i = e.mouseEventToContainerPoint(t.touches[1]),
                  s = n.distanceTo(i) / this._startDist;
                if (this._zoom = e.getScaleZoom(s, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && s < 1 || this._zoom > e.getMaxZoom() && s > 1) && (this._zoom = e._limitZoom(this._zoom)), "center" === e.options.touchZoom) {
                  if (this._center = this._startLatLng, 1 === s) return
                } else {
                  var o = n._add(i)._divideBy(2)._subtract(this._centerPoint);
                  if (1 === s && 0 === o.x && 0 === o.y) return;
                  this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(o), this._zoom)
                }
                this._moved || (e._moveStart(!0, !1), this._moved = !0), P(this._animRequest);
                var a = r(e._move, e, this._center, this._zoom, {
                  pinch: !0,
                  round: !1
                });
                this._animRequest = k(a, this, !0), De(t)
              }
            },
            _onTouchEnd: function () {
              this._moved && this._zooming ? (this._zooming = !1, P(this._animRequest), Ie(document, "touchmove", this._onTouchMove), Ie(document, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
            }
          });
          Ke.addInitHook("addHandler", "touchZoom", Si), Ke.BoxZoom = vi, Ke.DoubleClickZoom = _i, Ke.Drag = yi, Ke.Keyboard = bi, Ke.ScrollWheelZoom = wi, Ke.Tap = xi, Ke.TouchZoom = Si, Object.freeze = e, t.version = "1.6.0", t.Control = Ye, t.control = Je, t.Browser = Mt, t.Evented = I, t.Mixin = sn, t.Util = E, t.Class = T, t.Handler = nn, t.extend = n, t.bind = r, t.stamp = o, t.setOptions = p, t.DomEvent = Ge, t.DomUtil = Te, t.PosAnimation = We, t.Draggable = cn, t.LineUtil = _n, t.PolyUtil = bn, t.Point = M, t.point = N, t.Bounds = R, t.bounds = F, t.Transformation = Z, t.transformation = q, t.Projection = Sn, t.LatLng = j, t.latLng = V, t.LatLngBounds = D, t.latLngBounds = z, t.CRS = H, t.GeoJSON = jn, t.geoJSON = Kn, t.geoJson = Yn, t.Layer = En, t.LayerGroup = Tn, t.layerGroup = function (t, e) {
            return new Tn(t, e)
          }, t.FeatureGroup = Ln, t.featureGroup = function (t) {
            return new Ln(t)
          }, t.ImageOverlay = Jn, t.imageOverlay = function (t, e, n) {
            return new Jn(t, e, n)
          }, t.VideoOverlay = Qn, t.videoOverlay = function (t, e, n) {
            return new Qn(t, e, n)
          }, t.SVGOverlay = Xn, t.svgOverlay = function (t, e, n) {
            return new Xn(t, e, n)
          }, t.DivOverlay = ti, t.Popup = ei, t.popup = function (t, e) {
            return new ei(t, e)
          }, t.Tooltip = ni, t.tooltip = function (t, e) {
            return new ni(t, e)
          }, t.Icon = An, t.icon = function (t) {
            return new An(t)
          }, t.DivIcon = ii, t.divIcon = function (t) {
            return new ii(t)
          }, t.Marker = On, t.marker = function (t, e) {
            return new On(t, e)
          }, t.TileLayer = si, t.tileLayer = oi, t.GridLayer = ri, t.gridLayer = function (t) {
            return new ri(t)
          }, t.SVG = fi, t.svg = mi, t.Renderer = li, t.Canvas = ci, t.canvas = ui, t.Path = Nn, t.CircleMarker = Rn, t.circleMarker = function (t, e) {
            return new Rn(t, e)
          }, t.Circle = Fn, t.circle = function (t, e, n) {
            return new Fn(t, e, n)
          }, t.Polyline = Dn, t.polyline = function (t, e) {
            return new Dn(t, e)
          }, t.Polygon = zn, t.polygon = function (t, e) {
            return new zn(t, e)
          }, t.Rectangle = gi, t.rectangle = function (t, e) {
            return new gi(t, e)
          }, t.Map = Ke, t.map = function (t, e) {
            return new Ke(t, e)
          };
          var Ci = window.L;
          t.noConflict = function () {
            return window.L = Ci, this
          }, window.L = t
        }(e)
      },
      Hfs6: function (t, e, n) {
        var i, r, s;
        ! function (o) {
          if ("object" == typeof t.exports) {
            var a = o(0, e);
            void 0 !== a && (t.exports = a)
          } else r = [n, e], void 0 === (s = "function" == typeof (i = o) ? i.apply(e, r) : i) || (t.exports = s)
        }((function (t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", {
            value: !0
          });
          var n = void 0;
          e.default = ["fr", [
              ["AM", "PM"], n, n
            ], n, [
              ["D", "L", "M", "M", "J", "V", "S"],
              ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
              ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
              ["di", "lu", "ma", "me", "je", "ve", "sa"]
            ], n, [
              ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
              ["janv.", "f\xe9vr.", "mars", "avr.", "mai", "juin", "juil.", "ao\xfbt", "sept.", "oct.", "nov.", "d\xe9c."],
              ["janvier", "f\xe9vrier", "mars", "avril", "mai", "juin", "juillet", "ao\xfbt", "septembre", "octobre", "novembre", "d\xe9cembre"]
            ], n, [
              ["av. J.-C.", "ap. J.-C."], n, ["avant J\xe9sus-Christ", "apr\xe8s J\xe9sus-Christ"]
            ], 1, [6, 0],
            ["dd/MM/y", "d MMM y", "d MMMM y", "EEEE d MMMM y"],
            ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"],
            ["{1} {0}", "{1} '\xe0' {0}", n, n],
            [",", "\u202f", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
            ["#,##0.###", "#,##0\xa0%", "#,##0.00\xa0\xa4", "#E0"], "EUR", "\u20ac", "euro", {
              ARS: ["$AR", "$"],
              AUD: ["$AU", "$"],
              BEF: ["FB"],
              BMD: ["$BM", "$"],
              BND: ["$BN", "$"],
              BZD: ["$BZ", "$"],
              CAD: ["$CA", "$"],
              CLP: ["$CL", "$"],
              CNY: [n, "\xa5"],
              COP: ["$CO", "$"],
              CYP: ["\xa3CY"],
              EGP: [n, "\xa3E"],
              FJD: ["$FJ", "$"],
              FKP: ["\xa3FK", "\xa3"],
              FRF: ["F"],
              GBP: ["\xa3GB", "\xa3"],
              GIP: ["\xa3GI", "\xa3"],
              HKD: [n, "$"],
              IEP: ["\xa3IE"],
              ILP: ["\xa3IL"],
              ITL: ["\u20a4IT"],
              JPY: [n, "\xa5"],
              KMF: [n, "FC"],
              LBP: ["\xa3LB", "\xa3L"],
              MTP: ["\xa3MT"],
              MXN: ["$MX", "$"],
              NAD: ["$NA", "$"],
              NIO: [n, "$C"],
              NZD: ["$NZ", "$"],
              RHD: ["$RH"],
              RON: [n, "L"],
              RWF: [n, "FR"],
              SBD: ["$SB", "$"],
              SGD: ["$SG", "$"],
              SRD: ["$SR", "$"],
              TOP: [n, "$T"],
              TTD: ["$TT", "$"],
              TWD: [n, "NT$"],
              USD: ["$US", "$"],
              UYU: ["$UY", "$"],
              WST: ["$WS"],
              XCD: [n, "$"],
              XPF: ["FCFP"],
              ZMW: [n, "Kw"]
            }, "ltr",
            function (t) {
              var e = Math.floor(Math.abs(t));
              return 0 === e || 1 === e ? 1 : 5
            }
          ]
        }))
      },
      zUnb: function (t, e, n) {
        "use strict";

        function i(t) {
          return "function" == typeof t
        }
        n.r(e);
        let r = !1;
        const s = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(t) {
            if (t) {
              const t = new Error;
              console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + t.stack)
            } else r && console.log("RxJS: Back to a better error behavior. Thank you. <3");
            r = t
          },
          get useDeprecatedSynchronousErrorHandling() {
            return r
          }
        };

        function o(t) {
          setTimeout(() => {
            throw t
          }, 0)
        }
        const a = {
            closed: !0,
            next(t) {},
            error(t) {
              if (s.useDeprecatedSynchronousErrorHandling) throw t;
              o(t)
            },
            complete() {}
          },
          l = (() => Array.isArray || (t => t && "number" == typeof t.length))();

        function c(t) {
          return null !== t && "object" == typeof t
        }
        const u = (() => {
          function t(t) {
            return Error.call(this), this.message = t ? `${t.length} errors occurred during unsubscription:\n${t.map((t,e)=>`${e+1}) ${t.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = t, this
          }
          return t.prototype = Object.create(Error.prototype), t
        })();
        let h = (() => {
          class t {
            constructor(t) {
              this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._unsubscribe = t)
            }
            unsubscribe() {
              let e;
              if (this.closed) return;
              let {
                _parentOrParents: n,
                _unsubscribe: r,
                _subscriptions: s
              } = this;
              if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof t) n.remove(this);
              else if (null !== n)
                for (let t = 0; t < n.length; ++t) n[t].remove(this);
              if (i(r)) try {
                r.call(this)
              } catch (o) {
                e = o instanceof u ? d(o.errors) : [o]
              }
              if (l(s)) {
                let t = -1,
                  n = s.length;
                for (; ++t < n;) {
                  const n = s[t];
                  if (c(n)) try {
                    n.unsubscribe()
                  } catch (o) {
                    e = e || [], o instanceof u ? e = e.concat(d(o.errors)) : e.push(o)
                  }
                }
              }
              if (e) throw new u(e)
            }
            add(e) {
              let n = e;
              if (!e) return t.EMPTY;
              switch (typeof e) {
                case "function":
                  n = new t(e);
                case "object":
                  if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                  if (this.closed) return n.unsubscribe(), n;
                  if (!(n instanceof t)) {
                    const e = n;
                    n = new t, n._subscriptions = [e]
                  }
                  break;
                default:
                  throw new Error("unrecognized teardown " + e + " added to Subscription.")
              }
              let {
                _parentOrParents: i
              } = n;
              if (null === i) n._parentOrParents = this;
              else if (i instanceof t) {
                if (i === this) return n;
                n._parentOrParents = [i, this]
              } else {
                if (-1 !== i.indexOf(this)) return n;
                i.push(this)
              }
              const r = this._subscriptions;
              return null === r ? this._subscriptions = [n] : r.push(n), n
            }
            remove(t) {
              const e = this._subscriptions;
              if (e) {
                const n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
              }
            }
          }
          return t.EMPTY = function (t) {
            return t.closed = !0, t
          }(new t), t
        })();

        function d(t) {
          return t.reduce((t, e) => t.concat(e instanceof u ? e.errors : e), [])
        }
        const p = (() => "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random())();
        class f extends h {
          constructor(t, e, n) {
            switch (super(), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
              case 0:
                this.destination = a;
                break;
              case 1:
                if (!t) {
                  this.destination = a;
                  break
                }
                if ("object" == typeof t) {
                  t instanceof f ? (this.syncErrorThrowable = t.syncErrorThrowable, this.destination = t, t.add(this)) : (this.syncErrorThrowable = !0, this.destination = new m(this, t));
                  break
                }
                default:
                  this.syncErrorThrowable = !0, this.destination = new m(this, t, e, n)
            }
          } [p]() {
            return this
          }
          static create(t, e, n) {
            const i = new f(t, e, n);
            return i.syncErrorThrowable = !1, i
          }
          next(t) {
            this.isStopped || this._next(t)
          }
          error(t) {
            this.isStopped || (this.isStopped = !0, this._error(t))
          }
          complete() {
            this.isStopped || (this.isStopped = !0, this._complete())
          }
          unsubscribe() {
            this.closed || (this.isStopped = !0, super.unsubscribe())
          }
          _next(t) {
            this.destination.next(t)
          }
          _error(t) {
            this.destination.error(t), this.unsubscribe()
          }
          _complete() {
            this.destination.complete(), this.unsubscribe()
          }
          _unsubscribeAndRecycle() {
            const {
              _parentOrParents: t
            } = this;
            return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
          }
        }
        class m extends f {
          constructor(t, e, n, r) {
            let s;
            super(), this._parentSubscriber = t;
            let o = this;
            i(e) ? s = e : e && (s = e.next, n = e.error, r = e.complete, e !== a && (o = Object.create(e), i(o.unsubscribe) && this.add(o.unsubscribe.bind(o)), o.unsubscribe = this.unsubscribe.bind(this))), this._context = o, this._next = s, this._error = n, this._complete = r
          }
          next(t) {
            if (!this.isStopped && this._next) {
              const {
                _parentSubscriber: e
              } = this;
              s.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
            }
          }
          error(t) {
            if (!this.isStopped) {
              const {
                _parentSubscriber: e
              } = this, {
                useDeprecatedSynchronousErrorHandling: n
              } = s;
              if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
              else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : o(t), this.unsubscribe();
              else {
                if (this.unsubscribe(), n) throw t;
                o(t)
              }
            }
          }
          complete() {
            if (!this.isStopped) {
              const {
                _parentSubscriber: t
              } = this;
              if (this._complete) {
                const e = () => this._complete.call(this._context);
                s.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, e), this.unsubscribe()) : (this.__tryOrUnsub(e), this.unsubscribe())
              } else this.unsubscribe()
            }
          }
          __tryOrUnsub(t, e) {
            try {
              t.call(this._context, e)
            } catch (n) {
              if (this.unsubscribe(), s.useDeprecatedSynchronousErrorHandling) throw n;
              o(n)
            }
          }
          __tryOrSetError(t, e, n) {
            if (!s.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
            try {
              e.call(this._context, n)
            } catch (i) {
              return s.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = i, t.syncErrorThrown = !0, !0) : (o(i), !0)
            }
            return !1
          }
          _unsubscribe() {
            const {
              _parentSubscriber: t
            } = this;
            this._context = null, this._parentSubscriber = null, t.unsubscribe()
          }
        }
        const g = (() => "function" == typeof Symbol && Symbol.observable || "@@observable")();

        function v() {}

        function _(...t) {
          return y(t)
        }

        function y(t) {
          return t ? 1 === t.length ? t[0] : function (e) {
            return t.reduce((t, e) => e(t), e)
          } : v
        }
        let b = (() => {
          class t {
            constructor(t) {
              this._isScalar = !1, t && (this._subscribe = t)
            }
            lift(e) {
              const n = new t;
              return n.source = this, n.operator = e, n
            }
            subscribe(t, e, n) {
              const {
                operator: i
              } = this, r = function (t, e, n) {
                if (t) {
                  if (t instanceof f) return t;
                  if (t[p]) return t[p]()
                }
                return t || e || n ? new f(t, e, n) : new f(a)
              }(t, e, n);
              if (r.add(i ? i.call(r, this.source) : this.source || s.useDeprecatedSynchronousErrorHandling && !r.syncErrorThrowable ? this._subscribe(r) : this._trySubscribe(r)), s.useDeprecatedSynchronousErrorHandling && r.syncErrorThrowable && (r.syncErrorThrowable = !1, r.syncErrorThrown)) throw r.syncErrorValue;
              return r
            }
            _trySubscribe(t) {
              try {
                return this._subscribe(t)
              } catch (e) {
                s.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e),
                  function (t) {
                    for (; t;) {
                      const {
                        closed: e,
                        destination: n,
                        isStopped: i
                      } = t;
                      if (e || i) return !1;
                      t = n && n instanceof f ? n : null
                    }
                    return !0
                  }(t) ? t.error(e) : console.warn(e)
              }
            }
            forEach(t, e) {
              return new(e = w(e))((e, n) => {
                let i;
                i = this.subscribe(e => {
                  try {
                    t(e)
                  } catch (r) {
                    n(r), i && i.unsubscribe()
                  }
                }, n, e)
              })
            }
            _subscribe(t) {
              const {
                source: e
              } = this;
              return e && e.subscribe(t)
            } [g]() {
              return this
            }
            pipe(...t) {
              return 0 === t.length ? this : y(t)(this)
            }
            toPromise(t) {
              return new(t = w(t))((t, e) => {
                let n;
                this.subscribe(t => n = t, t => e(t), () => t(n))
              })
            }
          }
          return t.create = e => new t(e), t
        })();

        function w(t) {
          if (t || (t = s.Promise || Promise), !t) throw new Error("no Promise impl found");
          return t
        }
        const x = (() => {
          function t() {
            return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
          }
          return t.prototype = Object.create(Error.prototype), t
        })();
        class S extends h {
          constructor(t, e) {
            super(), this.subject = t, this.subscriber = e, this.closed = !1
          }
          unsubscribe() {
            if (this.closed) return;
            this.closed = !0;
            const t = this.subject,
              e = t.observers;
            if (this.subject = null, !e || 0 === e.length || t.isStopped || t.closed) return;
            const n = e.indexOf(this.subscriber); - 1 !== n && e.splice(n, 1)
          }
        }
        class C extends f {
          constructor(t) {
            super(t), this.destination = t
          }
        }
        let k = (() => {
          class t extends b {
            constructor() {
              super(), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null
            } [p]() {
              return new C(this)
            }
            lift(t) {
              const e = new P(this, this);
              return e.operator = t, e
            }
            next(t) {
              if (this.closed) throw new x;
              if (!this.isStopped) {
                const {
                  observers: e
                } = this, n = e.length, i = e.slice();
                for (let r = 0; r < n; r++) i[r].next(t)
              }
            }
            error(t) {
              if (this.closed) throw new x;
              this.hasError = !0, this.thrownError = t, this.isStopped = !0;
              const {
                observers: e
              } = this, n = e.length, i = e.slice();
              for (let r = 0; r < n; r++) i[r].error(t);
              this.observers.length = 0
            }
            complete() {
              if (this.closed) throw new x;
              this.isStopped = !0;
              const {
                observers: t
              } = this, e = t.length, n = t.slice();
              for (let i = 0; i < e; i++) n[i].complete();
              this.observers.length = 0
            }
            unsubscribe() {
              this.isStopped = !0, this.closed = !0, this.observers = null
            }
            _trySubscribe(t) {
              if (this.closed) throw new x;
              return super._trySubscribe(t)
            }
            _subscribe(t) {
              if (this.closed) throw new x;
              return this.hasError ? (t.error(this.thrownError), h.EMPTY) : this.isStopped ? (t.complete(), h.EMPTY) : (this.observers.push(t), new S(this, t))
            }
            asObservable() {
              const t = new b;
              return t.source = this, t
            }
          }
          return t.create = (t, e) => new P(t, e), t
        })();
        class P extends k {
          constructor(t, e) {
            super(), this.destination = t, this.source = e
          }
          next(t) {
            const {
              destination: e
            } = this;
            e && e.next && e.next(t)
          }
          error(t) {
            const {
              destination: e
            } = this;
            e && e.error && this.destination.error(t)
          }
          complete() {
            const {
              destination: t
            } = this;
            t && t.complete && this.destination.complete()
          }
          _subscribe(t) {
            const {
              source: e
            } = this;
            return e ? this.source.subscribe(t) : h.EMPTY
          }
        }

        function E(t) {
          return t && "function" == typeof t.schedule
        }
        class T extends f {
          constructor(t, e, n) {
            super(), this.parent = t, this.outerValue = e, this.outerIndex = n, this.index = 0
          }
          _next(t) {
            this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
          }
          _error(t) {
            this.parent.notifyError(t, this), this.unsubscribe()
          }
          _complete() {
            this.parent.notifyComplete(this), this.unsubscribe()
          }
        }
        const L = t => e => {
          for (let n = 0, i = t.length; n < i && !e.closed; n++) e.next(t[n]);
          e.complete()
        };

        function A() {
          return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
        }
        const I = A(),
          M = t => t && "number" == typeof t.length && "function" != typeof t;

        function O(t) {
          return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
        }
        const N = t => {
          if (t && "function" == typeof t[g]) return i = t, t => {
            const e = i[g]();
            if ("function" != typeof e.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
            return e.subscribe(t)
          };
          if (M(t)) return L(t);
          if (O(t)) return n = t, t => (n.then(e => {
            t.closed || (t.next(e), t.complete())
          }, e => t.error(e)).then(null, o), t);
          if (t && "function" == typeof t[I]) return e = t, t => {
            const n = e[I]();
            for (;;) {
              const e = n.next();
              if (e.done) {
                t.complete();
                break
              }
              if (t.next(e.value), t.closed) break
            }
            return "function" == typeof n.return && t.add(() => {
              n.return && n.return()
            }), t
          }; {
            const e = c(t) ? "an invalid object" : `'${t}'`;
            throw new TypeError(`You provided ${e} where a stream was expected.` + " You can provide an Observable, Promise, Array, or Iterable.")
          }
          var e, n, i
        };

        function R(t, e, n, i, r = new T(t, n, i)) {
          if (!r.closed) return e instanceof b ? e.subscribe(r) : N(e)(r)
        }
        class F extends f {
          notifyNext(t, e, n, i, r) {
            this.destination.next(e)
          }
          notifyError(t, e) {
            this.destination.error(t)
          }
          notifyComplete(t) {
            this.destination.complete()
          }
        }

        function D(t, e) {
          return function (n) {
            if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
            return n.lift(new z(t, e))
          }
        }
        class z {
          constructor(t, e) {
            this.project = t, this.thisArg = e
          }
          call(t, e) {
            return e.subscribe(new j(t, this.project, this.thisArg))
          }
        }
        class j extends f {
          constructor(t, e, n) {
            super(t), this.project = e, this.count = 0, this.thisArg = n || this
          }
          _next(t) {
            let e;
            try {
              e = this.project.call(this.thisArg, t, this.count++)
            } catch (n) {
              return void this.destination.error(n)
            }
            this.destination.next(e)
          }
        }

        function V(t, e) {
          return new b(n => {
            const i = new h;
            let r = 0;
            return i.add(e.schedule((function () {
              r !== t.length ? (n.next(t[r++]), n.closed || i.add(this.schedule())) : n.complete()
            }))), i
          })
        }

        function U(t, e) {
          return e ? function (t, e) {
            if (null != t) {
              if (function (t) {
                  return t && "function" == typeof t[g]
                }(t)) return function (t, e) {
                return new b(n => {
                  const i = new h;
                  return i.add(e.schedule(() => {
                    const r = t[g]();
                    i.add(r.subscribe({
                      next(t) {
                        i.add(e.schedule(() => n.next(t)))
                      },
                      error(t) {
                        i.add(e.schedule(() => n.error(t)))
                      },
                      complete() {
                        i.add(e.schedule(() => n.complete()))
                      }
                    }))
                  })), i
                })
              }(t, e);
              if (O(t)) return function (t, e) {
                return new b(n => {
                  const i = new h;
                  return i.add(e.schedule(() => t.then(t => {
                    i.add(e.schedule(() => {
                      n.next(t), i.add(e.schedule(() => n.complete()))
                    }))
                  }, t => {
                    i.add(e.schedule(() => n.error(t)))
                  }))), i
                })
              }(t, e);
              if (M(t)) return V(t, e);
              if (function (t) {
                  return t && "function" == typeof t[I]
                }(t) || "string" == typeof t) return function (t, e) {
                if (!t) throw new Error("Iterable cannot be null");
                return new b(n => {
                  const i = new h;
                  let r;
                  return i.add(() => {
                    r && "function" == typeof r.return && r.return()
                  }), i.add(e.schedule(() => {
                    r = t[I](), i.add(e.schedule((function () {
                      if (n.closed) return;
                      let t, e;
                      try {
                        const n = r.next();
                        t = n.value, e = n.done
                      } catch (i) {
                        return void n.error(i)
                      }
                      e ? n.complete() : (n.next(t), this.schedule())
                    })))
                  })), i
                })
              }(t, e)
            }
            throw new TypeError((null !== t && typeof t || t) + " is not observable")
          }(t, e) : t instanceof b ? t : new b(N(t))
        }

        function H(t, e, n = Number.POSITIVE_INFINITY) {
          return "function" == typeof e ? i => i.pipe(H((n, i) => U(t(n, i)).pipe(D((t, r) => e(n, t, i, r))), n)) : ("number" == typeof e && (n = e), e => e.lift(new B(t, n)))
        }
        class B {
          constructor(t, e = Number.POSITIVE_INFINITY) {
            this.project = t, this.concurrent = e
          }
          call(t, e) {
            return e.subscribe(new $(t, this.project, this.concurrent))
          }
        }
        class $ extends F {
          constructor(t, e, n = Number.POSITIVE_INFINITY) {
            super(t), this.project = e, this.concurrent = n, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0
          }
          _next(t) {
            this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
          }
          _tryNext(t) {
            let e;
            const n = this.index++;
            try {
              e = this.project(t, n)
            } catch (i) {
              return void this.destination.error(i)
            }
            this.active++, this._innerSub(e, t, n)
          }
          _innerSub(t, e, n) {
            const i = new T(this, e, n),
              r = this.destination;
            r.add(i);
            const s = R(this, t, void 0, void 0, i);
            s !== i && r.add(s)
          }
          _complete() {
            this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
          }
          notifyNext(t, e, n, i, r) {
            this.destination.next(e)
          }
          notifyComplete(t) {
            const e = this.buffer;
            this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
          }
        }

        function Z(t) {
          return t
        }

        function q(t = Number.POSITIVE_INFINITY) {
          return H(Z, t)
        }

        function G(t, e) {
          return e ? V(t, e) : new b(L(t))
        }

        function W(...t) {
          let e = Number.POSITIVE_INFINITY,
            n = null,
            i = t[t.length - 1];
          return E(i) ? (n = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (e = t.pop())) : "number" == typeof i && (e = t.pop()), null === n && 1 === t.length && t[0] instanceof b ? t[0] : q(e)(G(t, n))
        }

        function K() {
          return function (t) {
            return t.lift(new Y(t))
          }
        }
        class Y {
          constructor(t) {
            this.connectable = t
          }
          call(t, e) {
            const {
              connectable: n
            } = this;
            n._refCount++;
            const i = new J(t, n),
              r = e.subscribe(i);
            return i.closed || (i.connection = n.connect()), r
          }
        }
        class J extends f {
          constructor(t, e) {
            super(t), this.connectable = e
          }
          _unsubscribe() {
            const {
              connectable: t
            } = this;
            if (!t) return void(this.connection = null);
            this.connectable = null;
            const e = t._refCount;
            if (e <= 0) return void(this.connection = null);
            if (t._refCount = e - 1, e > 1) return void(this.connection = null);
            const {
              connection: n
            } = this, i = t._connection;
            this.connection = null, !i || n && i !== n || i.unsubscribe()
          }
        }
        class Q extends b {
          constructor(t, e) {
            super(), this.source = t, this.subjectFactory = e, this._refCount = 0, this._isComplete = !1
          }
          _subscribe(t) {
            return this.getSubject().subscribe(t)
          }
          getSubject() {
            const t = this._subject;
            return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
          }
          connect() {
            let t = this._connection;
            return t || (this._isComplete = !1, t = this._connection = new h, t.add(this.source.subscribe(new tt(this.getSubject(), this))), t.closed && (this._connection = null, t = h.EMPTY)), t
          }
          refCount() {
            return K()(this)
          }
        }
        const X = (() => {
          const t = Q.prototype;
          return {
            operator: {
              value: null
            },
            _refCount: {
              value: 0,
              writable: !0
            },
            _subject: {
              value: null,
              writable: !0
            },
            _connection: {
              value: null,
              writable: !0
            },
            _subscribe: {
              value: t._subscribe
            },
            _isComplete: {
              value: t._isComplete,
              writable: !0
            },
            getSubject: {
              value: t.getSubject
            },
            connect: {
              value: t.connect
            },
            refCount: {
              value: t.refCount
            }
          }
        })();
        class tt extends C {
          constructor(t, e) {
            super(t), this.connectable = e
          }
          _error(t) {
            this._unsubscribe(), super._error(t)
          }
          _complete() {
            this.connectable._isComplete = !0, this._unsubscribe(), super._complete()
          }
          _unsubscribe() {
            const t = this.connectable;
            if (t) {
              this.connectable = null;
              const e = t._connection;
              t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
            }
          }
        }

        function et(t, e) {
          return function (n) {
            let i;
            if (i = "function" == typeof t ? t : function () {
                return t
              }, "function" == typeof e) return n.lift(new nt(i, e));
            const r = Object.create(n, X);
            return r.source = n, r.subjectFactory = i, r
          }
        }
        class nt {
          constructor(t, e) {
            this.subjectFactory = t, this.selector = e
          }
          call(t, e) {
            const {
              selector: n
            } = this, i = this.subjectFactory(), r = n(i).subscribe(t);
            return r.add(e.subscribe(i)), r
          }
        }

        function it() {
          return new k
        }

        function rt(t) {
          return {
            toString: t
          }.toString()
        }

        function st(t) {
          return function (...e) {
            if (t) {
              const n = t(...e);
              for (const t in n) this[t] = n[t]
            }
          }
        }

        function ot(t, e, n) {
          return rt(() => {
            const i = st(e);

            function r(...t) {
              if (this instanceof r) return i.apply(this, t), this;
              const e = new r(...t);
              return n.annotation = e, n;

              function n(t, n, i) {
                const r = t.hasOwnProperty("__parameters__") ? t.__parameters__ : Object.defineProperty(t, "__parameters__", {
                  value: []
                }).__parameters__;
                for (; r.length <= i;) r.push(null);
                return (r[i] = r[i] || []).push(e), t
              }
            }
            return n && (r.prototype = Object.create(n.prototype)), r.prototype.ngMetadataName = t, r.annotationCls = r, r
          })
        }

        function at(t, e, n, i) {
          return rt(() => {
            const r = st(e);

            function s(...t) {
              if (this instanceof s) return r.apply(this, t), this;
              const e = new s(...t);
              return function (n, r) {
                const s = n.constructor,
                  o = s.hasOwnProperty("__prop__metadata__") ? s.__prop__metadata__ : Object.defineProperty(s, "__prop__metadata__", {
                    value: {}
                  }).__prop__metadata__;
                o[r] = o.hasOwnProperty(r) && o[r] || [], o[r].unshift(e), i && i(n, r, ...t)
              }
            }
            return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = t, s.annotationCls = s, s
          })
        }
        const lt = ot("Inject", t => ({
            token: t
          })),
          ct = ot("Optional"),
          ut = ot("Self"),
          ht = ot("SkipSelf");
        var dt = function (t) {
          return t[t.Default = 0] = "Default", t[t.Host = 1] = "Host", t[t.Self = 2] = "Self", t[t.SkipSelf = 4] = "SkipSelf", t[t.Optional = 8] = "Optional", t
        }({});

        function pt(t) {
          for (let e in t)
            if (t[e] === pt) return e;
          throw Error("Could not find renamed property on target object.")
        }

        function ft(t, e) {
          for (const n in e) e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n])
        }

        function mt(t) {
          return {
            token: t.token,
            providedIn: t.providedIn || null,
            factory: t.factory,
            value: void 0
          }
        }

        function gt(t) {
          return {
            factory: t.factory,
            providers: t.providers || [],
            imports: t.imports || []
          }
        }

        function vt(t) {
          return _t(t, t[bt]) || _t(t, t[St])
        }

        function _t(t, e) {
          return e && e.token === t ? e : null
        }

        function yt(t) {
          return t && (t.hasOwnProperty(wt) || t.hasOwnProperty(Ct)) ? t[wt] : null
        }
        const bt = pt({
            "\u0275prov": pt
          }),
          wt = pt({
            "\u0275inj": pt
          }),
          xt = pt({
            "\u0275provFallback": pt
          }),
          St = pt({
            ngInjectableDef: pt
          }),
          Ct = pt({
            ngInjectorDef: pt
          });

        function kt(t) {
          if ("string" == typeof t) return t;
          if (Array.isArray(t)) return "[" + t.map(kt).join(", ") + "]";
          if (null == t) return "" + t;
          if (t.overriddenName) return `${t.overriddenName}`;
          if (t.name) return `${t.name}`;
          const e = t.toString();
          if (null == e) return "" + e;
          const n = e.indexOf("\n");
          return -1 === n ? e : e.substring(0, n)
        }

        function Pt(t, e) {
          return null == t || "" === t ? null === e ? "" : e : null == e || "" === e ? t : t + " " + e
        }
        const Et = pt({
          __forward_ref__: pt
        });

        function Tt(t) {
          return t.__forward_ref__ = Tt, t.toString = function () {
            return kt(this())
          }, t
        }

        function Lt(t) {
          return At(t) ? t() : t
        }

        function At(t) {
          return "function" == typeof t && t.hasOwnProperty(Et) && t.__forward_ref__ === Tt
        }
        const It = "undefined" != typeof globalThis && globalThis,
          Mt = "undefined" != typeof window && window,
          Ot = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
          Nt = "undefined" != typeof global && global,
          Rt = It || Nt || Mt || Ot,
          Ft = pt({
            "\u0275cmp": pt
          }),
          Dt = pt({
            "\u0275dir": pt
          }),
          zt = pt({
            "\u0275pipe": pt
          }),
          jt = pt({
            "\u0275mod": pt
          }),
          Vt = pt({
            "\u0275loc": pt
          }),
          Ut = pt({
            "\u0275fac": pt
          }),
          Ht = pt({
            __NG_ELEMENT_ID__: pt
          });
        class Bt {
          constructor(t, e) {
            this._desc = t, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof e ? this.__NG_ELEMENT_ID__ = e : void 0 !== e && (this.\u0275prov = mt({
              token: this,
              providedIn: e.providedIn || "root",
              factory: e.factory
            }))
          }
          toString() {
            return `InjectionToken ${this._desc}`
          }
        }
        const $t = new Bt("INJECTOR", -1),
          Zt = {},
          qt = /\n/gm,
          Gt = pt({
            provide: String,
            useValue: pt
          });
        let Wt, Kt = void 0;

        function Yt(t) {
          const e = Kt;
          return Kt = t, e
        }

        function Jt(t) {
          const e = Wt;
          return Wt = t, e
        }

        function Qt(t, e = dt.Default) {
          if (void 0 === Kt) throw new Error("inject() must be called from an injection context");
          return null === Kt ? te(t, void 0, e) : Kt.get(t, e & dt.Optional ? null : void 0, e)
        }

        function Xt(t, e = dt.Default) {
          return (Wt || Qt)(Lt(t), e)
        }

        function te(t, e, n) {
          const i = vt(t);
          if (i && "root" == i.providedIn) return void 0 === i.value ? i.value = i.factory() : i.value;
          if (n & dt.Optional) return null;
          if (void 0 !== e) return e;
          throw new Error(`Injector: NOT_FOUND [${kt(t)}]`)
        }

        function ee(t) {
          const e = [];
          for (let n = 0; n < t.length; n++) {
            const i = Lt(t[n]);
            if (Array.isArray(i)) {
              if (0 === i.length) throw new Error("Arguments array must have arguments.");
              let t = void 0,
                n = dt.Default;
              for (let e = 0; e < i.length; e++) {
                const r = i[e];
                r instanceof ct || "Optional" === r.ngMetadataName || r === ct ? n |= dt.Optional : r instanceof ht || "SkipSelf" === r.ngMetadataName || r === ht ? n |= dt.SkipSelf : r instanceof ut || "Self" === r.ngMetadataName || r === ut ? n |= dt.Self : t = r instanceof lt || r === lt ? r.token : r
              }
              e.push(Xt(t, n))
            } else e.push(Xt(i))
          }
          return e
        }
        class ne {
          get(t, e = Zt) {
            if (e === Zt) {
              const e = new Error(`NullInjectorError: No provider for ${kt(t)}!`);
              throw e.name = "NullInjectorError", e
            }
            return e
          }
        }
        class ie {}
        class re {}

        function se(t, e) {
          t.forEach(t => Array.isArray(t) ? se(t, e) : e(t))
        }

        function oe(t, e, n) {
          e >= t.length ? t.push(n) : t.splice(e, 0, n)
        }

        function ae(t, e) {
          return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0]
        }

        function le(t, e, n) {
          let i = ue(t, e);
          return i >= 0 ? t[1 | i] = n : (i = ~i, function (t, e, n, i) {
            let r = t.length;
            if (r == e) t.push(n, i);
            else if (1 === r) t.push(i, t[0]), t[0] = n;
            else {
              for (r--, t.push(t[r - 1], t[r]); r > e;) t[r] = t[r - 2], r--;
              t[e] = n, t[e + 1] = i
            }
          }(t, i, e, n)), i
        }

        function ce(t, e) {
          const n = ue(t, e);
          if (n >= 0) return t[1 | n]
        }

        function ue(t, e) {
          return function (t, e, n) {
            let i = 0,
              r = t.length >> 1;
            for (; r !== i;) {
              const n = i + (r - i >> 1),
                s = t[n << 1];
              if (e === s) return n << 1;
              s > e ? r = n : i = n + 1
            }
            return ~(r << 1)
          }(t, e)
        }
        const he = function () {
            var t = {
              OnPush: 0,
              Default: 1
            };
            return t[t.OnPush] = "OnPush", t[t.Default] = "Default", t
          }(),
          de = function () {
            var t = {
              Emulated: 0,
              Native: 1,
              None: 2,
              ShadowDom: 3
            };
            return t[t.Emulated] = "Emulated", t[t.Native] = "Native", t[t.None] = "None", t[t.ShadowDom] = "ShadowDom", t
          }(),
          pe = {},
          fe = [];
        let me = 0;

        function ge(t) {
          return rt(() => {
            const e = t.type,
              n = e.prototype,
              i = {},
              r = {
                type: e,
                providersResolver: null,
                decls: t.decls,
                vars: t.vars,
                factory: null,
                template: t.template || null,
                consts: t.consts || null,
                ngContentSelectors: t.ngContentSelectors,
                hostBindings: t.hostBindings || null,
                hostVars: t.hostVars || 0,
                hostAttrs: t.hostAttrs || null,
                contentQueries: t.contentQueries || null,
                declaredInputs: i,
                inputs: null,
                outputs: null,
                exportAs: t.exportAs || null,
                onChanges: null,
                onInit: n.ngOnInit || null,
                doCheck: n.ngDoCheck || null,
                afterContentInit: n.ngAfterContentInit || null,
                afterContentChecked: n.ngAfterContentChecked || null,
                afterViewInit: n.ngAfterViewInit || null,
                afterViewChecked: n.ngAfterViewChecked || null,
                onDestroy: n.ngOnDestroy || null,
                onPush: t.changeDetection === he.OnPush,
                directiveDefs: null,
                pipeDefs: null,
                selectors: t.selectors || fe,
                viewQuery: t.viewQuery || null,
                features: t.features || null,
                data: t.data || {},
                encapsulation: t.encapsulation || de.Emulated,
                id: "c",
                styles: t.styles || fe,
                _: null,
                setInput: null,
                schemas: t.schemas || null,
                tView: null
              },
              s = t.directives,
              o = t.features,
              a = t.pipes;
            return r.id += me++, r.inputs = we(t.inputs, i), r.outputs = we(t.outputs), o && o.forEach(t => t(r)), r.directiveDefs = s ? () => ("function" == typeof s ? s() : s).map(ve) : null, r.pipeDefs = a ? () => ("function" == typeof a ? a() : a).map(_e) : null, r
          })
        }

        function ve(t) {
          return Ce(t) || function (t) {
            return t[Dt] || null
          }(t)
        }

        function _e(t) {
          return function (t) {
            return t[zt] || null
          }(t)
        }
        const ye = {};

        function be(t) {
          const e = {
            type: t.type,
            bootstrap: t.bootstrap || fe,
            declarations: t.declarations || fe,
            imports: t.imports || fe,
            exports: t.exports || fe,
            transitiveCompileScopes: null,
            schemas: t.schemas || null,
            id: t.id || null
          };
          return null != t.id && rt(() => {
            ye[t.id] = t.type
          }), e
        }

        function we(t, e) {
          if (null == t) return pe;
          const n = {};
          for (const i in t)
            if (t.hasOwnProperty(i)) {
              let r = t[i],
                s = r;
              Array.isArray(r) && (s = r[1], r = r[0]), n[r] = i, e && (e[r] = s)
            } return n
        }
        const xe = ge;

        function Se(t) {
          return {
            type: t.type,
            name: t.name,
            factory: null,
            pure: !1 !== t.pure,
            onDestroy: t.type.prototype.ngOnDestroy || null
          }
        }

        function Ce(t) {
          return t[Ft] || null
        }

        function ke(t, e) {
          return t.hasOwnProperty(Ut) ? t[Ut] : null
        }

        function Pe(t, e) {
          const n = t[jt] || null;
          if (!n && !0 === e) throw new Error(`Type ${kt(t)} does not have '\u0275mod' property.`);
          return n
        }

        function Ee(t) {
          return Array.isArray(t) && "object" == typeof t[1]
        }

        function Te(t) {
          return Array.isArray(t) && !0 === t[1]
        }

        function Le(t) {
          return 0 != (8 & t.flags)
        }

        function Ae(t) {
          return 2 == (2 & t.flags)
        }

        function Ie(t) {
          return 1 == (1 & t.flags)
        }

        function Me(t) {
          return null !== t.template
        }

        function Oe(t) {
          return 0 != (512 & t[2])
        }
        let Ne = void 0;

        function Re(t) {
          return !!t.listen
        }
        const Fe = {
          createRenderer: (t, e) => void 0 !== Ne ? Ne : "undefined" != typeof document ? document : void 0
        };

        function De(t) {
          for (; Array.isArray(t);) t = t[0];
          return t
        }

        function ze(t, e) {
          return De(e[t + 19])
        }

        function je(t, e) {
          return De(e[t.index])
        }

        function Ve(t, e) {
          return t.data[e + 19]
        }

        function Ue(t, e) {
          return t[e + 19]
        }

        function He(t, e) {
          const n = e[t];
          return Ee(n) ? n : n[0]
        }

        function Be(t) {
          const e = function (t) {
            return t.__ngContext__ || null
          }(t);
          return e ? Array.isArray(e) ? e : e.lView : null
        }

        function $e(t) {
          return 4 == (4 & t[2])
        }

        function Ze(t) {
          return 128 == (128 & t[2])
        }

        function qe(t, e) {
          return null === t || null == e ? null : t[e]
        }

        function Ge(t) {
          t[18] = 0
        }
        const We = {
          lFrame: gn(null),
          bindingsEnabled: !0,
          checkNoChangesMode: !1
        };

        function Ke() {
          return We.bindingsEnabled
        }

        function Ye() {
          return We.lFrame.lView
        }

        function Je() {
          return We.lFrame.tView
        }

        function Qe(t) {
          We.lFrame.contextLView = t
        }

        function Xe() {
          return We.lFrame.previousOrParentTNode
        }

        function tn(t, e) {
          We.lFrame.previousOrParentTNode = t, We.lFrame.isParent = e
        }

        function en() {
          return We.lFrame.isParent
        }

        function nn() {
          We.lFrame.isParent = !1
        }

        function rn() {
          return We.checkNoChangesMode
        }

        function sn(t) {
          We.checkNoChangesMode = t
        }

        function on() {
          const t = We.lFrame;
          let e = t.bindingRootIndex;
          return -1 === e && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e
        }

        function an() {
          return We.lFrame.bindingIndex
        }

        function ln() {
          return We.lFrame.bindingIndex++
        }

        function cn(t) {
          const e = We.lFrame,
            n = e.bindingIndex;
          return e.bindingIndex = e.bindingIndex + t, n
        }

        function un(t, e) {
          const n = We.lFrame;
          n.bindingIndex = n.bindingRootIndex = t, n.currentDirectiveIndex = e
        }

        function hn() {
          return We.lFrame.currentQueryIndex
        }

        function dn(t) {
          We.lFrame.currentQueryIndex = t
        }

        function pn(t, e) {
          const n = mn();
          We.lFrame = n, n.previousOrParentTNode = e, n.lView = t
        }

        function fn(t, e) {
          const n = mn(),
            i = t[1];
          We.lFrame = n, n.previousOrParentTNode = e, n.lView = t, n.tView = i, n.contextLView = t, n.bindingIndex = i.bindingStartIndex
        }

        function mn() {
          const t = We.lFrame,
            e = null === t ? null : t.child;
          return null === e ? gn(t) : e
        }

        function gn(t) {
          const e = {
            previousOrParentTNode: null,
            isParent: !0,
            lView: null,
            tView: null,
            selectedIndex: 0,
            contextLView: null,
            elementDepthCount: 0,
            currentNamespace: null,
            currentSanitizer: null,
            currentDirectiveIndex: -1,
            bindingRootIndex: -1,
            bindingIndex: -1,
            currentQueryIndex: 0,
            parent: t,
            child: null
          };
          return null !== t && (t.child = e), e
        }

        function vn() {
          const t = We.lFrame;
          return We.lFrame = t.parent, t.previousOrParentTNode = null, t.lView = null, t
        }
        const _n = vn;

        function yn() {
          const t = vn();
          t.isParent = !0, t.tView = null, t.selectedIndex = 0, t.contextLView = null, t.elementDepthCount = 0, t.currentDirectiveIndex = -1, t.currentNamespace = null, t.currentSanitizer = null, t.bindingRootIndex = -1, t.bindingIndex = -1, t.currentQueryIndex = 0
        }

        function bn() {
          return We.lFrame.selectedIndex
        }

        function wn(t) {
          We.lFrame.selectedIndex = t
        }

        function xn() {
          const t = We.lFrame;
          return Ve(t.tView, t.selectedIndex)
        }

        function Sn(t, e) {
          for (let n = e.directiveStart, i = e.directiveEnd; n < i; n++) {
            const e = t.data[n];
            e.afterContentInit && (t.contentHooks || (t.contentHooks = [])).push(-n, e.afterContentInit), e.afterContentChecked && ((t.contentHooks || (t.contentHooks = [])).push(n, e.afterContentChecked), (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, e.afterContentChecked)), e.afterViewInit && (t.viewHooks || (t.viewHooks = [])).push(-n, e.afterViewInit), e.afterViewChecked && ((t.viewHooks || (t.viewHooks = [])).push(n, e.afterViewChecked), (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, e.afterViewChecked)), null != e.onDestroy && (t.destroyHooks || (t.destroyHooks = [])).push(n, e.onDestroy)
          }
        }

        function Cn(t, e, n) {
          En(t, e, 3, n)
        }

        function kn(t, e, n, i) {
          (3 & t[2]) === n && En(t, e, n, i)
        }

        function Pn(t, e) {
          let n = t[2];
          (3 & n) === e && (n &= 1023, n += 1, t[2] = n)
        }

        function En(t, e, n, i) {
          const r = null != i ? i : -1;
          let s = 0;
          for (let o = void 0 !== i ? 65535 & t[18] : 0; o < e.length; o++)
            if ("number" == typeof e[o + 1]) {
              if (s = e[o], null != i && s >= i) break
            } else e[o] < 0 && (t[18] += 65536), (s < r || -1 == r) && (Tn(t, n, e, o), t[18] = (4294901760 & t[18]) + o + 2), o++
        }

        function Tn(t, e, n, i) {
          const r = n[i] < 0,
            s = n[i + 1],
            o = t[r ? -n[i] : n[i]];
          r ? t[2] >> 10 < t[18] >> 16 && (3 & t[2]) === e && (t[2] += 1024, s.call(o)) : s.call(o)
        }
        class Ln {
          constructor(t, e, n) {
            this.factory = t, this.resolving = !1, this.canSeeViewProviders = e, this.injectImpl = n
          }
        }

        function An(t, e, n) {
          const i = Re(t);
          let r = 0;
          for (; r < n.length;) {
            const s = n[r];
            if ("number" == typeof s) {
              if (0 !== s) break;
              r++;
              const o = n[r++],
                a = n[r++],
                l = n[r++];
              i ? t.setAttribute(e, a, l, o) : e.setAttributeNS(o, a, l)
            } else {
              const o = s,
                a = n[++r];
              Mn(o) ? i && t.setProperty(e, o, a) : i ? t.setAttribute(e, o, a) : e.setAttribute(o, a), r++
            }
          }
          return r
        }

        function In(t) {
          return 3 === t || 4 === t || 6 === t
        }

        function Mn(t) {
          return 64 === t.charCodeAt(0)
        }

        function On(t, e) {
          if (null === e || 0 === e.length);
          else if (null === t || 0 === t.length) t = e.slice();
          else {
            let n = -1;
            for (let i = 0; i < e.length; i++) {
              const r = e[i];
              "number" == typeof r ? n = r : 0 === n || Nn(t, n, r, null, -1 === n || 2 === n ? e[++i] : null)
            }
          }
          return t
        }

        function Nn(t, e, n, i, r) {
          let s = 0,
            o = t.length;
          if (-1 === e) o = -1;
          else
            for (; s < t.length;) {
              const n = t[s++];
              if ("number" == typeof n) {
                if (n === e) {
                  o = -1;
                  break
                }
                if (n > e) {
                  o = s - 1;
                  break
                }
              }
            }
          for (; s < t.length;) {
            const e = t[s];
            if ("number" == typeof e) break;
            if (e === n) {
              if (null === i) return void(null !== r && (t[s + 1] = r));
              if (i === t[s + 1]) return void(t[s + 2] = r)
            }
            s++, null !== i && s++, null !== r && s++
          } - 1 !== o && (t.splice(o, 0, e), s = o + 1), t.splice(s++, 0, n), null !== i && t.splice(s++, 0, i), null !== r && t.splice(s++, 0, r)
        }

        function Rn(t) {
          return -1 !== t
        }

        function Fn(t) {
          return 32767 & t
        }

        function Dn(t) {
          return t >> 16
        }

        function zn(t, e) {
          let n = Dn(t),
            i = e;
          for (; n > 0;) i = i[15], n--;
          return i
        }

        function jn(t) {
          return "string" == typeof t ? t : null == t ? "" : "" + t
        }

        function Vn(t) {
          return "function" == typeof t ? t.name || t.toString() : "object" == typeof t && null != t && "function" == typeof t.type ? t.type.name || t.type.toString() : jn(t)
        }
        const Un = (() => ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(Rt))();

        function Hn(t) {
          return t instanceof Function ? t() : t
        }
        let Bn = !0;

        function $n(t) {
          const e = Bn;
          return Bn = t, e
        }
        let Zn = 0;

        function qn(t, e) {
          const n = Wn(t, e);
          if (-1 !== n) return n;
          const i = e[1];
          i.firstCreatePass && (t.injectorIndex = e.length, Gn(i.data, t), Gn(e, null), Gn(i.blueprint, null));
          const r = Kn(t, e),
            s = t.injectorIndex;
          if (Rn(r)) {
            const t = Fn(r),
              n = zn(r, e),
              i = n[1].data;
            for (let r = 0; r < 8; r++) e[s + r] = n[t + r] | i[t + r]
          }
          return e[s + 8] = r, s
        }

        function Gn(t, e) {
          t.push(0, 0, 0, 0, 0, 0, 0, 0, e)
        }

        function Wn(t, e) {
          return -1 === t.injectorIndex || t.parent && t.parent.injectorIndex === t.injectorIndex || null == e[t.injectorIndex + 8] ? -1 : t.injectorIndex
        }

        function Kn(t, e) {
          if (t.parent && -1 !== t.parent.injectorIndex) return t.parent.injectorIndex;
          let n = e[6],
            i = 1;
          for (; n && -1 === n.injectorIndex;) n = (e = e[15]) ? e[6] : null, i++;
          return n ? n.injectorIndex | i << 16 : -1
        }

        function Yn(t, e, n) {
          ! function (t, e, n) {
            let i = "string" != typeof n ? n[Ht] : n.charCodeAt(0) || 0;
            null == i && (i = n[Ht] = Zn++);
            const r = 255 & i,
              s = 1 << r,
              o = 64 & r,
              a = 32 & r,
              l = e.data;
            128 & r ? o ? a ? l[t + 7] |= s : l[t + 6] |= s : a ? l[t + 5] |= s : l[t + 4] |= s : o ? a ? l[t + 3] |= s : l[t + 2] |= s : a ? l[t + 1] |= s : l[t] |= s
          }(t, e, n)
        }

        function Jn(t, e, n, i = dt.Default, r) {
          if (null !== t) {
            const r = function (t) {
              if ("string" == typeof t) return t.charCodeAt(0) || 0;
              const e = t[Ht];
              return "number" == typeof e && e > 0 ? 255 & e : e
            }(n);
            if ("function" == typeof r) {
              pn(e, t);
              try {
                const t = r();
                if (null != t || i & dt.Optional) return t;
                throw new Error(`No provider for ${Vn(n)}!`)
              } finally {
                _n()
              }
            } else if ("number" == typeof r) {
              if (-1 === r) return new ri(t, e);
              let s = null,
                o = Wn(t, e),
                a = -1,
                l = i & dt.Host ? e[16][6] : null;
              for ((-1 === o || i & dt.SkipSelf) && (a = -1 === o ? Kn(t, e) : e[o + 8], ii(i, !1) ? (s = e[1], o = Fn(a), e = zn(a, e)) : o = -1); - 1 !== o;) {
                a = e[o + 8];
                const t = e[1];
                if (ni(r, o, t.data)) {
                  const t = Xn(o, e, n, s, i, l);
                  if (t !== Qn) return t
                }
                ii(i, e[1].data[o + 8] === l) && ni(r, o, e) ? (s = t, o = Fn(a), e = zn(a, e)) : o = -1
              }
            }
          }
          if (i & dt.Optional && void 0 === r && (r = null), 0 == (i & (dt.Self | dt.Host))) {
            const t = e[9],
              s = Jt(void 0);
            try {
              return t ? t.get(n, r, i & dt.Optional) : te(n, r, i & dt.Optional)
            } finally {
              Jt(s)
            }
          }
          if (i & dt.Optional) return r;
          throw new Error(`NodeInjector: NOT_FOUND [${Vn(n)}]`)
        }
        const Qn = {};

        function Xn(t, e, n, i, r, s) {
          const o = e[1],
            a = o.data[t + 8],
            l = ti(a, o, n, null == i ? Ae(a) && Bn : i != o && 3 === a.type, r & dt.Host && s === a);
          return null !== l ? ei(e, o, l, a) : Qn
        }

        function ti(t, e, n, i, r) {
          const s = t.providerIndexes,
            o = e.data,
            a = 65535 & s,
            l = t.directiveStart,
            c = s >> 16,
            u = r ? a + c : t.directiveEnd;
          for (let h = i ? a : a + c; h < u; h++) {
            const t = o[h];
            if (h < l && n === t || h >= l && t.type === n) return h
          }
          if (r) {
            const t = o[l];
            if (t && Me(t) && t.type === n) return l
          }
          return null
        }

        function ei(t, e, n, i) {
          let r = t[n];
          const s = e.data;
          if (r instanceof Ln) {
            const o = r;
            if (o.resolving) throw new Error(`Circular dep for ${Vn(s[n])}`);
            const a = $n(o.canSeeViewProviders);
            let l;
            o.resolving = !0, o.injectImpl && (l = Jt(o.injectImpl)), pn(t, i);
            try {
              r = t[n] = o.factory(void 0, s, t, i), e.firstCreatePass && n >= i.directiveStart && function (t, e, n) {
                const {
                  onChanges: i,
                  onInit: r,
                  doCheck: s
                } = e;
                i && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, i), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, i)), r && (n.preOrderHooks || (n.preOrderHooks = [])).push(-t, r), s && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, s), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, s))
              }(n, s[n], e)
            } finally {
              o.injectImpl && Jt(l), $n(a), o.resolving = !1, _n()
            }
          }
          return r
        }

        function ni(t, e, n) {
          const i = 64 & t,
            r = 32 & t;
          let s;
          return s = 128 & t ? i ? r ? n[e + 7] : n[e + 6] : r ? n[e + 5] : n[e + 4] : i ? r ? n[e + 3] : n[e + 2] : r ? n[e + 1] : n[e], !!(s & 1 << t)
        }

        function ii(t, e) {
          return !(t & dt.Self || t & dt.Host && e)
        }
        class ri {
          constructor(t, e) {
            this._tNode = t, this._lView = e
          }
          get(t, e) {
            return Jn(this._tNode, this._lView, t, void 0, e)
          }
        }

        function si(t) {
          return rt(() => {
            const e = Object.getPrototypeOf(t.prototype).constructor,
              n = e[Ut] || function t(e) {
                const n = e;
                if (At(e)) return () => {
                  const e = t(Lt(n));
                  return e ? e() : null
                };
                let i = ke(n);
                if (null === i) {
                  const t = yt(n);
                  i = t && t.factory
                }
                return i || null
              }(e);
            return null !== n ? n : t => new t
          })
        }

        function oi(t) {
          return t.ngDebugContext
        }

        function ai(t) {
          return t.ngOriginalError
        }

        function li(t, ...e) {
          t.error(...e)
        }
        class ci {
          constructor() {
            this._console = console
          }
          handleError(t) {
            const e = this._findOriginalError(t),
              n = this._findContext(t),
              i = function (t) {
                return t.ngErrorLogger || li
              }(t);
            i(this._console, "ERROR", t), e && i(this._console, "ORIGINAL ERROR", e), n && i(this._console, "ERROR CONTEXT", n)
          }
          _findContext(t) {
            return t ? oi(t) ? oi(t) : this._findContext(ai(t)) : null
          }
          _findOriginalError(t) {
            let e = ai(t);
            for (; e && ai(e);) e = ai(e);
            return e
          }
        }
        class ui {
          constructor(t) {
            this.changingThisBreaksApplicationSecurity = t
          }
          toString() {
            return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}` + " (see http://g.co/ng/security#xss)"
          }
        }

        function hi(t) {
          return t instanceof ui ? t.changingThisBreaksApplicationSecurity : t
        }
        let di = !0,
          pi = !1;

        function fi() {
          return pi = !0, di
        }
        const mi = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
          gi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i,
          vi = function () {
            var t = {
              NONE: 0,
              HTML: 1,
              STYLE: 2,
              SCRIPT: 3,
              URL: 4,
              RESOURCE_URL: 5
            };
            return t[t.NONE] = "NONE", t[t.HTML] = "HTML", t[t.STYLE] = "STYLE", t[t.SCRIPT] = "SCRIPT", t[t.URL] = "URL", t[t.RESOURCE_URL] = "RESOURCE_URL", t
          }();

        function _i(t) {
          const e = function () {
            const t = Ye();
            return t && t[12]
          }();
          return e ? e.sanitize(vi.URL, t) || "" : function (t, e) {
            const n = function (t) {
              return t instanceof ui && t.getTypeName() || null
            }(t);
            if (null != n && n !== e) {
              if ("ResourceURL" === n && "URL" === e) return !0;
              throw new Error(`Required a safe ${e}, got a ${n} (see http://g.co/ng/security#xss)`)
            }
            return n === e
          }(t, "URL") ? hi(t) : (n = jn(t), (n = String(n)).match(mi) || n.match(gi) ? n : (fi() && console.warn(`WARNING: sanitizing unsafe URL value ${n} (see http://g.co/ng/security#xss)`), "unsafe:" + n));
          var n
        }

        function yi(t, e) {
          t.__ngContext__ = e
        }

        function bi(t) {
          throw new Error(`Multiple components match node with tagname ${t.tagName}`)
        }

        function wi() {
          throw new Error("Cannot mix multi providers and regular providers")
        }

        function xi(t, e, n) {
          let i = t.length;
          for (;;) {
            const r = t.indexOf(e, n);
            if (-1 === r) return r;
            if (0 === r || t.charCodeAt(r - 1) <= 32) {
              const n = e.length;
              if (r + n === i || t.charCodeAt(r + n) <= 32) return r
            }
            n = r + 1
          }
        }

        function Si(t, e, n) {
          let i = 0;
          for (; i < t.length;) {
            let r = t[i++];
            if (n && "class" === r) {
              if (r = t[i], -1 !== xi(r.toLowerCase(), e, 0)) return !0
            } else if (1 === r) {
              for (; i < t.length && "string" == typeof (r = t[i++]);)
                if (r.toLowerCase() === e) return !0;
              return !1
            }
          }
          return !1
        }

        function Ci(t, e, n) {
          return e === (0 !== t.type || n ? t.tagName : "ng-template")
        }

        function ki(t, e, n) {
          let i = 4;
          const r = t.attrs || [],
            s = function (t) {
              for (let e = 0; e < t.length; e++)
                if (In(t[e])) return e;
              return t.length
            }(r);
          let o = !1;
          for (let a = 0; a < e.length; a++) {
            const l = e[a];
            if ("number" != typeof l) {
              if (!o)
                if (4 & i) {
                  if (i = 2 | 1 & i, "" !== l && !Ci(t, l, n) || "" === l && 1 === e.length) {
                    if (Pi(i)) return !1;
                    o = !0
                  }
                } else {
                  const c = 8 & i ? l : e[++a];
                  if (8 & i && null !== t.attrs) {
                    if (!Si(t.attrs, c, n)) {
                      if (Pi(i)) return !1;
                      o = !0
                    }
                    continue
                  }
                  const u = Ei(8 & i ? "class" : l, r, 0 == t.type && "ng-template" !== t.tagName, n);
                  if (-1 === u) {
                    if (Pi(i)) return !1;
                    o = !0;
                    continue
                  }
                  if ("" !== c) {
                    let t;
                    t = u > s ? "" : r[u + 1].toLowerCase();
                    const e = 8 & i ? t : null;
                    if (e && -1 !== xi(e, c, 0) || 2 & i && c !== t) {
                      if (Pi(i)) return !1;
                      o = !0
                    }
                  }
                }
            } else {
              if (!o && !Pi(i) && !Pi(l)) return !1;
              if (o && Pi(l)) continue;
              o = !1, i = l | 1 & i
            }
          }
          return Pi(i) || o
        }

        function Pi(t) {
          return 0 == (1 & t)
        }

        function Ei(t, e, n, i) {
          if (null === e) return -1;
          let r = 0;
          if (i || !n) {
            let n = !1;
            for (; r < e.length;) {
              const i = e[r];
              if (i === t) return r;
              if (3 === i || 6 === i) n = !0;
              else {
                if (1 === i || 2 === i) {
                  let t = e[++r];
                  for (;
                    "string" == typeof t;) t = e[++r];
                  continue
                }
                if (4 === i) break;
                if (0 === i) {
                  r += 4;
                  continue
                }
              }
              r += n ? 1 : 2
            }
            return -1
          }
          return function (t, e) {
            let n = t.indexOf(4);
            if (n > -1)
              for (n++; n < t.length;) {
                if (t[n] === e) return n;
                n++
              }
            return -1
          }(e, t)
        }

        function Ti(t, e, n = !1) {
          for (let i = 0; i < e.length; i++)
            if (ki(t, e[i], n)) return !0;
          return !1
        }

        function Li(t, e) {
          return t ? ":not(" + e.trim() + ")" : e
        }

        function Ai(t) {
          let e = t[0],
            n = 1,
            i = 2,
            r = "",
            s = !1;
          for (; n < t.length;) {
            let o = t[n];
            if ("string" == typeof o)
              if (2 & i) {
                const e = t[++n];
                r += "[" + o + (e.length > 0 ? '="' + e + '"' : "") + "]"
              } else 8 & i ? r += "." + o : 4 & i && (r += " " + o);
            else "" === r || Pi(o) || (e += Li(s, r), r = ""), i = o, s = s || !Pi(i);
            n++
          }
          return "" !== r && (e += Li(s, r)), e
        }
        const Ii = {};

        function Mi(t) {
          const e = t[3];
          return Te(e) ? e[3] : e
        }

        function Oi(t) {
          Ni(Je(), Ye(), bn() + t, rn())
        }

        function Ni(t, e, n, i) {
          if (!i)
            if (3 == (3 & e[2])) {
              const i = t.preOrderCheckHooks;
              null !== i && Cn(e, i, n)
            } else {
              const i = t.preOrderHooks;
              null !== i && kn(e, i, 0, n)
            } wn(n)
        }

        function Ri(t, e) {
          return t << 17 | e << 2
        }

        function Fi(t) {
          return t >> 17 & 32767
        }

        function Di(t) {
          return 2 | t
        }

        function zi(t) {
          return (131068 & t) >> 2
        }

        function ji(t, e) {
          return -131069 & t | e << 2
        }

        function Vi(t) {
          return 1 | t
        }

        function Ui(t, e) {
          const n = t.contentQueries;
          if (null !== n)
            for (let i = 0; i < n.length; i += 2) {
              const r = n[i],
                s = n[i + 1];
              if (-1 !== s) {
                const n = t.data[s];
                dn(r), n.contentQueries(2, e[s], s)
              }
            }
        }

        function Hi(t, e, n) {
          return Re(e) ? e.createElement(t, n) : null === n ? e.createElement(t) : e.createElementNS(n, t)
        }

        function Bi(t, e, n, i, r, s, o, a, l, c) {
          const u = e.blueprint.slice();
          return u[0] = r, u[2] = 140 | i, Ge(u), u[3] = u[15] = t, u[8] = n, u[10] = o || t && t[10], u[11] = a || t && t[11], u[12] = l || t && t[12] || null, u[9] = c || t && t[9] || null, u[6] = s, u[16] = 2 == e.type ? t[16] : u, u
        }

        function $i(t, e, n, i, r, s) {
          const o = n + 19,
            a = t.data[o] || function (t, e, n, i, r, s) {
              const o = Xe(),
                a = en(),
                l = a ? o : o && o.parent,
                c = t.data[n] = tr(0, l && l !== e ? l : null, i, n, r, s);
              return null === t.firstChild && (t.firstChild = c), o && (!a || null != o.child || null === c.parent && 2 !== o.type ? a || (o.next = c) : o.child = c), c
            }(t, e, o, i, r, s);
          return tn(a, !0), a
        }

        function Zi(t, e, n) {
          fn(e, e[6]);
          try {
            const i = t.viewQuery;
            null !== i && Sr(1, i, n);
            const r = t.template;
            null !== r && Wi(t, e, r, 1, n), t.firstCreatePass && (t.firstCreatePass = !1), t.staticContentQueries && Ui(t, e), t.staticViewQueries && Sr(2, t.viewQuery, n);
            const s = t.components;
            null !== s && function (t, e) {
              for (let n = 0; n < e.length; n++) _r(t, e[n])
            }(e, s)
          } finally {
            e[2] &= -5, yn()
          }
        }

        function qi(t, e, n, i) {
          const r = e[2];
          if (256 == (256 & r)) return;
          fn(e, e[6]);
          const s = rn();
          try {
            Ge(e), We.lFrame.bindingIndex = t.bindingStartIndex, null !== n && Wi(t, e, n, 2, i);
            const o = 3 == (3 & r);
            if (!s)
              if (o) {
                const n = t.preOrderCheckHooks;
                null !== n && Cn(e, n, null)
              } else {
                const n = t.preOrderHooks;
                null !== n && kn(e, n, 0, null), Pn(e, 0)
              } if (function (t) {
                let e = t[13];
                for (; null !== e;) {
                  let n;
                  if (Te(e) && (n = e[2]) >> 1 == -1) {
                    for (let t = 9; t < e.length; t++) {
                      const n = e[t],
                        i = n[1];
                      Ze(n) && qi(i, n, i.template, n[8])
                    }
                    0 != (1 & n) && gr(e, t[16])
                  }
                  e = e[4]
                }
              }(e), null !== t.contentQueries && Ui(t, e), !s)
              if (o) {
                const n = t.contentCheckHooks;
                null !== n && Cn(e, n)
              } else {
                const n = t.contentHooks;
                null !== n && kn(e, n, 1), Pn(e, 1)
              }!
            function (t, e) {
              try {
                const n = t.expandoInstructions;
                if (null !== n) {
                  let i = t.expandoStartIndex,
                    r = -1,
                    s = -1;
                  for (let t = 0; t < n.length; t++) {
                    const o = n[t];
                    "number" == typeof o ? o <= 0 ? (s = 0 - o, wn(s), i += 9 + n[++t], r = i) : i += o : (null !== o && (un(i, r), o(2, e[r])), r++)
                  }
                }
              } finally {
                wn(-1)
              }
            }(t, e);
            const a = t.components;
            null !== a && function (t, e) {
              for (let n = 0; n < e.length; n++) vr(t, e[n])
            }(e, a);
            const l = t.viewQuery;
            if (null !== l && Sr(2, l, i), !s)
              if (o) {
                const n = t.viewCheckHooks;
                null !== n && Cn(e, n)
              } else {
                const n = t.viewHooks;
                null !== n && kn(e, n, 2), Pn(e, 2)
              }! 0 === t.firstUpdatePass && (t.firstUpdatePass = !1), s || (e[2] &= -73)
          } finally {
            yn()
          }
        }

        function Gi(t, e, n, i) {
          const r = e[10],
            s = !rn(),
            o = $e(e);
          try {
            s && !o && r.begin && r.begin(), o && Zi(t, e, i), qi(t, e, n, i)
          } finally {
            s && !o && r.end && r.end()
          }
        }

        function Wi(t, e, n, i, r) {
          const s = bn();
          try {
            wn(-1), 2 & i && e.length > 19 && Ni(t, e, 0, rn()), n(i, r)
          } finally {
            wn(s)
          }
        }

        function Ki(t, e, n) {
          if (Le(e)) {
            const i = e.directiveEnd;
            for (let r = e.directiveStart; r < i; r++) {
              const e = t.data[r];
              e.contentQueries && e.contentQueries(1, n[r], r)
            }
          }
        }

        function Yi(t, e, n) {
          Ke() && (function (t, e, n, i) {
            const r = n.directiveStart,
              s = n.directiveEnd;
            t.firstCreatePass || qn(n, e), yi(i, e);
            const o = n.initialInputs;
            for (let a = r; a < s; a++) {
              const i = t.data[a],
                s = Me(i);
              s && dr(e, n, i);
              const l = ei(e, t, a, n);
              yi(l, e), null !== o && pr(0, a - r, l, i, 0, o), s && (He(n.index, e)[8] = l)
            }
          }(t, e, n, je(n, e)), 128 == (128 & n.flags) && function (t, e, n) {
            const i = n.directiveStart,
              r = n.directiveEnd,
              s = t.expandoInstructions,
              o = t.firstCreatePass,
              a = n.index - 19;
            try {
              wn(a);
              for (let n = i; n < r; n++) {
                const i = t.data[n],
                  r = e[n];
                null !== i.hostBindings || 0 !== i.hostVars || null !== i.hostAttrs ? or(i, r) : o && s.push(null)
              }
            } finally {
              wn(-1)
            }
          }(t, e, n))
        }

        function Ji(t, e, n = je) {
          const i = e.localNames;
          if (null !== i) {
            let r = e.index + 1;
            for (let s = 0; s < i.length; s += 2) {
              const o = i[s + 1],
                a = -1 === o ? n(e, t) : t[o];
              t[r++] = a
            }
          }
        }

        function Qi(t) {
          return t.tView || (t.tView = Xi(1, -1, t.template, t.decls, t.vars, t.directiveDefs, t.pipeDefs, t.viewQuery, t.schemas, t.consts))
        }

        function Xi(t, e, n, i, r, s, o, a, l, c) {
          const u = 19 + i,
            h = u + r,
            d = function (t, e) {
              const n = [];
              for (let i = 0; i < e; i++) n.push(i < t ? null : Ii);
              return n
            }(u, h);
          return d[1] = {
            type: t,
            id: e,
            blueprint: d,
            template: n,
            queries: null,
            viewQuery: a,
            node: null,
            data: d.slice().fill(null, u),
            bindingStartIndex: u,
            expandoStartIndex: h,
            expandoInstructions: null,
            firstCreatePass: !0,
            firstUpdatePass: !0,
            staticViewQueries: !1,
            staticContentQueries: !1,
            preOrderHooks: null,
            preOrderCheckHooks: null,
            contentHooks: null,
            contentCheckHooks: null,
            viewHooks: null,
            viewCheckHooks: null,
            destroyHooks: null,
            cleanup: null,
            contentQueries: null,
            components: null,
            directiveRegistry: "function" == typeof s ? s() : s,
            pipeRegistry: "function" == typeof o ? o() : o,
            firstChild: null,
            schemas: l,
            consts: c
          }
        }

        function tr(t, e, n, i, r, s) {
          return {
            type: n,
            index: i,
            injectorIndex: e ? e.injectorIndex : -1,
            directiveStart: -1,
            directiveEnd: -1,
            directiveStylingLast: -1,
            propertyBindings: null,
            flags: 0,
            providerIndexes: 0,
            tagName: r,
            attrs: s,
            mergedAttrs: null,
            localNames: null,
            initialInputs: void 0,
            inputs: null,
            outputs: null,
            tViews: null,
            next: null,
            projectionNext: null,
            child: null,
            parent: e,
            projection: null,
            styles: null,
            residualStyles: void 0,
            classes: null,
            residualClasses: void 0,
            classBindings: 0,
            styleBindings: 0
          }
        }

        function er(t, e, n) {
          for (let i in t)
            if (t.hasOwnProperty(i)) {
              const r = t[i];
              (n = null === n ? {} : n).hasOwnProperty(i) ? n[i].push(e, r) : n[i] = [e, r]
            } return n
        }

        function nr(t, e, n, i, r, s, o, a) {
          const l = je(e, n);
          let c, u = e.inputs;
          var h;
          !a && null != u && (c = u[i]) ? (Tr(t, n, c, i, r), Ae(e) && function (t, e) {
            const n = He(e, t);
            16 & n[2] || (n[2] |= 64)
          }(n, e.index)) : 3 === e.type && (i = "class" === (h = i) ? "className" : "for" === h ? "htmlFor" : "formaction" === h ? "formAction" : "innerHtml" === h ? "innerHTML" : "readonly" === h ? "readOnly" : "tabindex" === h ? "tabIndex" : h, r = null != o ? o(r, e.tagName || "", i) : r, Re(s) ? s.setProperty(l, i, r) : Mn(i) || (l.setProperty ? l.setProperty(i, r) : l[i] = r))
        }

        function ir(t, e, n, i) {
          let r = !1;
          if (Ke()) {
            const s = function (t, e, n) {
                const i = t.directiveRegistry;
                let r = null;
                if (i)
                  for (let s = 0; s < i.length; s++) {
                    const o = i[s];
                    Ti(n, o.selectors, !1) && (r || (r = []), Yn(qn(n, e), t, o.type), Me(o) ? (2 & n.flags && bi(n), lr(t, n), r.unshift(o)) : r.push(o))
                  }
                return r
              }(t, e, n),
              o = null === i ? null : {
                "": -1
              };
            if (null !== s) {
              let i = 0;
              r = !0, ur(n, t.data.length, s.length);
              for (let t = 0; t < s.length; t++) {
                const e = s[t];
                e.providersResolver && e.providersResolver(e)
              }
              ar(t, n, s.length);
              let a = !1,
                l = !1;
              for (let r = 0; r < s.length; r++) {
                const c = s[r];
                n.mergedAttrs = On(n.mergedAttrs, c.hostAttrs), hr(t, e, c), cr(t.data.length - 1, c, o), null !== c.contentQueries && (n.flags |= 8), null === c.hostBindings && null === c.hostAttrs && 0 === c.hostVars || (n.flags |= 128), !a && (c.onChanges || c.onInit || c.doCheck) && ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index - 19), a = !0), l || !c.onChanges && !c.doCheck || ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(n.index - 19), l = !0), rr(t, c), i += c.hostVars
              }! function (t, e) {
                const n = e.directiveEnd,
                  i = t.data,
                  r = e.attrs,
                  s = [];
                let o = null,
                  a = null;
                for (let l = e.directiveStart; l < n; l++) {
                  const t = i[l],
                    e = t.inputs;
                  s.push(null !== r ? fr(e, r) : null), o = er(e, l, o), a = er(t.outputs, l, a)
                }
                null !== o && (o.hasOwnProperty("class") && (e.flags |= 16), o.hasOwnProperty("style") && (e.flags |= 32)), e.initialInputs = s, e.inputs = o, e.outputs = a
              }(t, n), sr(t, e, i)
            }
            o && function (t, e, n) {
              if (e) {
                const i = t.localNames = [];
                for (let t = 0; t < e.length; t += 2) {
                  const r = n[e[t + 1]];
                  if (null == r) throw new Error(`Export of name '${e[t+1]}' not found!`);
                  i.push(e[t], r)
                }
              }
            }(n, i, o)
          }
          return n.mergedAttrs = On(n.mergedAttrs, n.attrs), r
        }

        function rr(t, e) {
          const n = t.expandoInstructions;
          n.push(e.hostBindings), 0 !== e.hostVars && n.push(e.hostVars)
        }

        function sr(t, e, n) {
          for (let i = 0; i < n; i++) e.push(Ii), t.blueprint.push(Ii), t.data.push(null)
        }

        function or(t, e) {
          null !== t.hostBindings && t.hostBindings(1, e)
        }

        function ar(t, e, n) {
          const i = 19 - e.index,
            r = t.data.length - (65535 & e.providerIndexes);
          (t.expandoInstructions || (t.expandoInstructions = [])).push(i, r, n)
        }

        function lr(t, e) {
          e.flags |= 2, (t.components || (t.components = [])).push(e.index)
        }

        function cr(t, e, n) {
          if (n) {
            if (e.exportAs)
              for (let i = 0; i < e.exportAs.length; i++) n[e.exportAs[i]] = t;
            Me(e) && (n[""] = t)
          }
        }

        function ur(t, e, n) {
          t.flags |= 1, t.directiveStart = e, t.directiveEnd = e + n, t.providerIndexes = e
        }

        function hr(t, e, n) {
          t.data.push(n);
          const i = n.factory || (n.factory = ke(n.type)),
            r = new Ln(i, Me(n), null);
          t.blueprint.push(r), e.push(r)
        }

        function dr(t, e, n) {
          const i = je(e, t),
            r = Qi(n),
            s = t[10],
            o = yr(t, Bi(t, r, null, n.onPush ? 64 : 16, i, e, s, s.createRenderer(i, n)));
          t[e.index] = o
        }

        function pr(t, e, n, i, r, s) {
          const o = s[e];
          if (null !== o) {
            const t = i.setInput;
            for (let e = 0; e < o.length;) {
              const r = o[e++],
                s = o[e++],
                a = o[e++];
              null !== t ? i.setInput(n, a, r, s) : n[s] = a
            }
          }
        }

        function fr(t, e) {
          let n = null,
            i = 0;
          for (; i < e.length;) {
            const r = e[i];
            if (0 !== r)
              if (5 !== r) {
                if ("number" == typeof r) break;
                t.hasOwnProperty(r) && (null === n && (n = []), n.push(r, t[r], e[i + 1])), i += 2
              } else i += 2;
            else i += 4
          }
          return n
        }

        function mr(t, e, n, i) {
          return new Array(t, !0, -2, e, null, null, i, n, null)
        }

        function gr(t, e) {
          const n = t[5];
          for (let i = 0; i < n.length; i++) {
            const t = n[i],
              r = t[3][3][16];
            if (r !== e && 0 == (16 & r[2])) {
              const e = t[1];
              qi(e, t, e.template, t[8])
            }
          }
        }

        function vr(t, e) {
          const n = He(e, t);
          if (Ze(n) && 80 & n[2]) {
            const t = n[1];
            qi(t, n, t.template, n[8])
          }
        }

        function _r(t, e) {
          const n = He(e, t),
            i = n[1];
          ! function (t, e) {
            for (let n = e.length; n < t.blueprint.length; n++) e.push(t.blueprint[n])
          }(i, n), Zi(i, n, n[8])
        }

        function yr(t, e) {
          return t[13] ? t[14][4] = e : t[13] = e, t[14] = e, e
        }

        function br(t) {
          for (; t;) {
            t[2] |= 64;
            const e = Mi(t);
            if (Oe(t) && !e) return t;
            t = e
          }
          return null
        }

        function wr(t, e, n) {
          const i = e[10];
          i.begin && i.begin();
          try {
            qi(t, e, t.template, n)
          } catch (r) {
            throw Er(e, r), r
          } finally {
            i.end && i.end()
          }
        }

        function xr(t) {
          ! function (t) {
            for (let e = 0; e < t.components.length; e++) {
              const n = t.components[e],
                i = Be(n),
                r = i[1];
              Gi(r, i, r.template, n)
            }
          }(t[8])
        }

        function Sr(t, e, n) {
          dn(0), e(t, n)
        }
        const Cr = (() => Promise.resolve(null))();

        function kr(t) {
          return t[7] || (t[7] = [])
        }

        function Pr(t) {
          return t.cleanup || (t.cleanup = [])
        }

        function Er(t, e) {
          const n = t[9],
            i = n ? n.get(ci, null) : null;
          i && i.handleError(e)
        }

        function Tr(t, e, n, i, r) {
          for (let s = 0; s < n.length;) {
            const o = n[s++],
              a = n[s++],
              l = e[o],
              c = t.data[o];
            null !== c.setInput ? c.setInput(l, r, i, a) : l[a] = r
          }
        }

        function Lr(t, e, n) {
          const i = ze(e, t),
            r = t[11];
          Re(r) ? r.setValue(i, n) : i.textContent = n
        }

        function Ar(t, e) {
          const n = e[3];
          return -1 === t.index ? Te(n) ? n : null : n
        }

        function Ir(t, e) {
          const n = Ar(t, e);
          return n ? Hr(e[11], n[7]) : null
        }

        function Mr(t, e, n, i, r) {
          if (null != i) {
            let s, o = !1;
            Te(i) ? s = i : Ee(i) && (o = !0, i = i[0]);
            const a = De(i);
            0 === t && null !== n ? null == r ? Vr(e, n, a) : jr(e, n, a, r || null) : 1 === t && null !== n ? jr(e, n, a, r || null) : 2 === t ? function (t, e, n) {
              const i = Hr(t, e);
              i && function (t, e, n, i) {
                Re(t) ? t.removeChild(e, n, i) : e.removeChild(n)
              }(t, i, e, n)
            }(e, a, o) : 3 === t && e.destroyNode(a), null != s && function (t, e, n, i, r) {
              const s = n[7];
              s !== De(n) && Mr(e, t, i, s, r);
              for (let o = 9; o < n.length; o++) {
                const r = n[o];
                qr(r[1], r, t, e, i, s)
              }
            }(e, t, s, n, r)
          }
        }

        function Or(t, e, n, i) {
          const r = Ir(t.node, e);
          r && qr(t, e, e[11], n ? 1 : 2, r, i)
        }

        function Nr(t, e) {
          const n = t[5],
            i = n.indexOf(e);
          n.splice(i, 1)
        }

        function Rr(t, e) {
          if (t.length <= 9) return;
          const n = 9 + e,
            i = t[n];
          if (i) {
            const r = i[17];
            null !== r && r !== t && Nr(r, i), e > 0 && (t[n - 1][4] = i[4]);
            const s = ae(t, 9 + e);
            Or(i[1], i, !1, null);
            const o = s[5];
            null !== o && o.detachView(s[1]), i[3] = null, i[4] = null, i[2] &= -129
          }
          return i
        }

        function Fr(t, e) {
          if (!(256 & e[2])) {
            const n = e[11];
            Re(n) && n.destroyNode && qr(t, e, n, 3, null, null),
              function (t) {
                let e = t[13];
                if (!e) return zr(t[1], t);
                for (; e;) {
                  let n = null;
                  if (Ee(e)) n = e[13];
                  else {
                    const t = e[9];
                    t && (n = t)
                  }
                  if (!n) {
                    for (; e && !e[4] && e !== t;) Ee(e) && zr(e[1], e), e = Dr(e, t);
                    null === e && (e = t), Ee(e) && zr(e[1], e), n = e && e[4]
                  }
                  e = n
                }
              }(e)
          }
        }

        function Dr(t, e) {
          let n;
          return Ee(t) && (n = t[6]) && 2 === n.type ? Ar(n, t) : t[3] === e ? null : t[3]
        }

        function zr(t, e) {
          if (!(256 & e[2])) {
            e[2] &= -129, e[2] |= 256,
              function (t, e) {
                let n;
                if (null != t && null != (n = t.destroyHooks))
                  for (let i = 0; i < n.length; i += 2) {
                    const t = e[n[i]];
                    t instanceof Ln || n[i + 1].call(t)
                  }
              }(t, e),
              function (t, e) {
                const n = t.cleanup;
                if (null !== n) {
                  const t = e[7];
                  for (let i = 0; i < n.length - 1; i += 2)
                    if ("string" == typeof n[i]) {
                      const r = n[i + 1],
                        s = "function" == typeof r ? r(e) : De(e[r]),
                        o = t[n[i + 2]],
                        a = n[i + 3];
                      "boolean" == typeof a ? s.removeEventListener(n[i], o, a) : a >= 0 ? t[a]() : t[-a].unsubscribe(), i += 2
                    } else n[i].call(t[n[i + 1]]);
                  e[7] = null
                }
              }(t, e);
            const n = e[6];
            n && 3 === n.type && Re(e[11]) && e[11].destroy();
            const i = e[17];
            if (null !== i && Te(e[3])) {
              i !== e[3] && Nr(i, e);
              const n = e[5];
              null !== n && n.detachView(t)
            }
          }
        }

        function jr(t, e, n, i) {
          Re(t) ? t.insertBefore(e, n, i) : e.insertBefore(n, i, !0)
        }

        function Vr(t, e, n) {
          Re(t) ? t.appendChild(e, n) : e.appendChild(n)
        }

        function Ur(t, e, n, i) {
          null !== i ? jr(t, e, n, i) : Vr(t, e, n)
        }

        function Hr(t, e) {
          return Re(t) ? t.parentNode(e) : e.parentNode
        }

        function Br(t, e, n, i) {
          const r = function (t, e, n) {
            let i = e.parent;
            for (; null != i && (4 === i.type || 5 === i.type);) i = (e = i).parent;
            if (null == i) {
              const t = n[6];
              return 2 === t.type ? Ir(t, n) : n[0]
            }
            if (e && 5 === e.type && 4 & e.flags) return je(e, n).parentNode;
            if (2 & i.flags) {
              const e = t.data,
                n = e[e[i.index].directiveStart].encapsulation;
              if (n !== de.ShadowDom && n !== de.Native) return null
            }
            return je(i, n)
          }(t, i, e);
          if (null != r) {
            const t = e[11],
              s = function (t, e) {
                if (2 === t.type) {
                  const n = Ar(t, e);
                  return null === n ? null : $r(n.indexOf(e, 9) - 9, n)
                }
                return 4 === t.type || 5 === t.type ? je(t, e) : null
              }(i.parent || e[6], e);
            if (Array.isArray(n))
              for (let e = 0; e < n.length; e++) Ur(t, r, n[e], s);
            else Ur(t, r, n, s)
          }
        }

        function $r(t, e) {
          const n = 9 + t + 1;
          if (n < e.length) {
            const t = e[n],
              i = t[1].firstChild;
            if (null !== i) return function t(e, n) {
              if (null !== n) {
                const i = n.type;
                if (3 === i) return je(n, e);
                if (0 === i) return $r(-1, e[n.index]);
                if (4 === i || 5 === i) {
                  const i = n.child;
                  if (null !== i) return t(e, i); {
                    const t = e[n.index];
                    return Te(t) ? $r(-1, t) : De(t)
                  }
                } {
                  const i = e[16],
                    r = i[6],
                    s = Mi(i),
                    o = r.projection[n.projection];
                  return null != o ? t(s, o) : t(e, n.next)
                }
              }
              return null
            }(t, i)
          }
          return e[7]
        }

        function Zr(t, e, n, i, r, s, o) {
          for (; null != n;) {
            const a = i[n.index],
              l = n.type;
            o && 0 === e && (a && yi(De(a), i), n.flags |= 4), 64 != (64 & n.flags) && (4 === l || 5 === l ? (Zr(t, e, n.child, i, r, s, !1), Mr(e, t, r, a, s)) : 1 === l ? Gr(t, e, i, n, r, s) : Mr(e, t, r, a, s)), n = o ? n.projectionNext : n.next
          }
        }

        function qr(t, e, n, i, r, s) {
          Zr(n, i, t.node.child, e, r, s, !1)
        }

        function Gr(t, e, n, i, r, s) {
          const o = n[16],
            a = o[6].projection[i.projection];
          if (Array.isArray(a))
            for (let l = 0; l < a.length; l++) Mr(e, t, r, a[l], s);
          else Zr(t, e, a, o[3], r, s, !0)
        }

        function Wr(t, e, n) {
          Re(t) ? t.setAttribute(e, "style", n) : e.style.cssText = n
        }

        function Kr(t, e, n) {
          Re(t) ? "" === n ? t.removeAttribute(e, "class") : t.setAttribute(e, "class", n) : e.className = n
        }
        class Yr {
          constructor(t, e) {
            this._lView = t, this._cdRefInjectingView = e, this._appRef = null, this._viewContainerRef = null, this._tViewNode = null
          }
          get rootNodes() {
            const t = this._lView;
            return null == t[0] ? function t(e, n, i, r, s = !1) {
              for (; null !== i;) {
                const o = n[i.index];
                if (null !== o && r.push(De(o)), Te(o))
                  for (let e = 9; e < o.length; e++) {
                    const n = o[e],
                      i = n[1].firstChild;
                    null !== i && t(n[1], n, i, r)
                  }
                const a = i.type;
                if (4 === a || 5 === a) t(e, n, i.child, r);
                else if (1 === a) {
                  const e = n[16],
                    s = e[6],
                    o = Mi(e);
                  let a = s.projection[i.projection];
                  null !== a && null !== o && t(o[1], o, a, r, !0)
                }
                i = s ? i.projectionNext : i.next
              }
              return r
            }(t[1], t, t[6].child, []) : []
          }
          get context() {
            return this._lView[8]
          }
          get destroyed() {
            return 256 == (256 & this._lView[2])
          }
          destroy() {
            if (this._appRef) this._appRef.detachView(this);
            else if (this._viewContainerRef) {
              const t = this._viewContainerRef.indexOf(this);
              t > -1 && this._viewContainerRef.detach(t), this._viewContainerRef = null
            }
            Fr(this._lView[1], this._lView)
          }
          onDestroy(t) {
            var e, n, i;
            e = this._lView[1], i = t, kr(n = this._lView).push(i), e.firstCreatePass && Pr(e).push(n[7].length - 1, null)
          }
          markForCheck() {
            br(this._cdRefInjectingView || this._lView)
          }
          detach() {
            this._lView[2] &= -129
          }
          reattach() {
            this._lView[2] |= 128
          }
          detectChanges() {
            wr(this._lView[1], this._lView, this.context)
          }
          checkNoChanges() {
            ! function (t, e, n) {
              sn(!0);
              try {
                wr(t, e, n)
              } finally {
                sn(!1)
              }
            }(this._lView[1], this._lView, this.context)
          }
          attachToViewContainerRef(t) {
            if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
            this._viewContainerRef = t
          }
          detachFromAppRef() {
            var t;
            this._appRef = null, qr(this._lView[1], t = this._lView, t[11], 2, null, null)
          }
          attachToAppRef(t) {
            if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
            this._appRef = t
          }
        }
        class Jr extends Yr {
          constructor(t) {
            super(t), this._view = t
          }
          detectChanges() {
            xr(this._view)
          }
          checkNoChanges() {
            ! function (t) {
              sn(!0);
              try {
                xr(t)
              } finally {
                sn(!1)
              }
            }(this._view)
          }
          get context() {
            return null
          }
        }
        let Qr, Xr, ts;

        function es(t, e, n) {
          return Qr || (Qr = class extends t {}), new Qr(je(e, n))
        }

        function ns(t, e, n, i) {
          return Xr || (Xr = class extends t {
            constructor(t, e, n) {
              super(), this._declarationView = t, this._declarationTContainer = e, this.elementRef = n
            }
            createEmbeddedView(t) {
              const e = this._declarationTContainer.tViews,
                n = Bi(this._declarationView, e, t, 16, null, e.node);
              n[17] = this._declarationView[this._declarationTContainer.index];
              const i = this._declarationView[5];
              null !== i && (n[5] = i.createEmbeddedView(e)), Zi(e, n, t);
              const r = new Yr(n);
              return r._tViewNode = n[6], r
            }
          }), 0 === n.type ? new Xr(i, n, es(e, n, i)) : null
        }

        function is(t, e, n, i) {
          let r;
          ts || (ts = class extends t {
            constructor(t, e, n) {
              super(), this._lContainer = t, this._hostTNode = e, this._hostView = n
            }
            get element() {
              return es(e, this._hostTNode, this._hostView)
            }
            get injector() {
              return new ri(this._hostTNode, this._hostView)
            }
            get parentInjector() {
              const t = Kn(this._hostTNode, this._hostView),
                e = zn(t, this._hostView),
                n = function (t, e, n) {
                  if (n.parent && -1 !== n.parent.injectorIndex) {
                    const t = n.parent.injectorIndex;
                    let e = n.parent;
                    for (; null != e.parent && t == e.parent.injectorIndex;) e = e.parent;
                    return e
                  }
                  let i = Dn(t),
                    r = e,
                    s = e[6];
                  for (; i > 1;) r = r[15], s = r[6], i--;
                  return s
                }(t, this._hostView, this._hostTNode);
              return Rn(t) && null != n ? new ri(n, e) : new ri(null, this._hostView)
            }
            clear() {
              for (; this.length > 0;) this.remove(this.length - 1)
            }
            get(t) {
              return null !== this._lContainer[8] && this._lContainer[8][t] || null
            }
            get length() {
              return this._lContainer.length - 9
            }
            createEmbeddedView(t, e, n) {
              const i = t.createEmbeddedView(e || {});
              return this.insert(i, n), i
            }
            createComponent(t, e, n, i, r) {
              const s = n || this.parentInjector;
              if (!r && null == t.ngModule && s) {
                const t = s.get(ie, null);
                t && (r = t)
              }
              const o = t.create(s, i, void 0, r);
              return this.insert(o.hostView, e), o
            }
            insert(t, e) {
              const n = t._lView,
                i = n[1];
              if (t.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
              if (this.allocateContainerIfNeeded(), Te(n[3])) {
                const e = this.indexOf(t);
                if (-1 !== e) this.detach(e);
                else {
                  const e = n[3],
                    i = new ts(e, e[6], e[3]);
                  i.detach(i.indexOf(t))
                }
              }
              const r = this._adjustIndex(e);
              return function (t, e, n, i) {
                const r = 9 + i,
                  s = n.length;
                i > 0 && (n[r - 1][4] = e), i < s - 9 ? (e[4] = n[r], oe(n, 9 + i, e)) : (n.push(e), e[4] = null), e[3] = n;
                const o = e[17];
                null !== o && n !== o && function (t, e) {
                  const n = t[5],
                    i = e[3][3][16];
                  16 != (16 & i[2]) && e[16] !== i && (t[2] |= 1), null === n ? t[5] = [e] : n.push(e)
                }(o, e);
                const a = e[5];
                null !== a && a.insertView(t), e[2] |= 128
              }(i, n, this._lContainer, r), Or(i, n, !0, $r(r, this._lContainer)), t.attachToViewContainerRef(this), oe(this._lContainer[8], r, t), t
            }
            move(t, e) {
              if (t.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
              return this.insert(t, e)
            }
            indexOf(t) {
              const e = this._lContainer[8];
              return null !== e ? e.indexOf(t) : -1
            }
            remove(t) {
              this.allocateContainerIfNeeded();
              const e = this._adjustIndex(t, -1);
              (function (t, e) {
                const n = Rr(t, e);
                n && Fr(n[1], n)
              })(this._lContainer, e), ae(this._lContainer[8], e)
            }
            detach(t) {
              this.allocateContainerIfNeeded();
              const e = this._adjustIndex(t, -1),
                n = Rr(this._lContainer, e);
              return n && null != ae(this._lContainer[8], e) ? new Yr(n) : null
            }
            _adjustIndex(t, e = 0) {
              return null == t ? this.length + e : t
            }
            allocateContainerIfNeeded() {
              null === this._lContainer[8] && (this._lContainer[8] = [])
            }
          });
          const s = i[n.index];
          if (Te(s)) r = s,
            function (t, e) {
              t[2] = -2
            }(r);
          else {
            let t;
            if (4 === n.type) t = De(s);
            else if (t = i[11].createComment(""), Oe(i)) {
              const e = i[11],
                r = je(n, i);
              jr(e, Hr(e, r), t, function (t, e) {
                return Re(t) ? t.nextSibling(e) : e.nextSibling
              }(e, r))
            } else Br(i[1], i, t, n);
            i[n.index] = r = mr(s, i, t, n), yr(i, r)
          }
          return new ts(r, n, i)
        }
        let rs = (() => {
          class t {}
          return t.__NG_ELEMENT_ID__ = () => ss(), t
        })();
        const ss = function (t = !1) {
            return function (t, e, n) {
              if (!n && Ae(t)) {
                const n = He(t.index, e);
                return new Yr(n, n)
              }
              return 3 === t.type || 0 === t.type || 4 === t.type || 5 === t.type ? new Yr(e[16], e) : null
            }(Xe(), Ye(), t)
          },
          os = new Bt("Set Injector scope."),
          as = {},
          ls = {},
          cs = [];
        let us = void 0;

        function hs() {
          return void 0 === us && (us = new ne), us
        }

        function ds(t, e = null, n = null, i) {
          return new ps(t, n, e || hs(), i)
        }
        class ps {
          constructor(t, e, n, i = null) {
            this.parent = n, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this._destroyed = !1;
            const r = [];
            e && se(e, n => this.processProvider(n, t, e)), se([t], t => this.processInjectorType(t, [], r)), this.records.set($t, gs(void 0, this));
            const s = this.records.get(os);
            this.scope = null != s ? s.value : null, this.source = i || ("object" == typeof t ? null : kt(t))
          }
          get destroyed() {
            return this._destroyed
          }
          destroy() {
            this.assertNotDestroyed(), this._destroyed = !0;
            try {
              this.onDestroy.forEach(t => t.ngOnDestroy())
            } finally {
              this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear()
            }
          }
          get(t, e = Zt, n = dt.Default) {
            this.assertNotDestroyed();
            const i = Yt(this);
            try {
              if (!(n & dt.SkipSelf)) {
                let e = this.records.get(t);
                if (void 0 === e) {
                  const n = ("function" == typeof (r = t) || "object" == typeof r && r instanceof Bt) && vt(t);
                  e = n && this.injectableDefInScope(n) ? gs(fs(t), as) : null, this.records.set(t, e)
                }
                if (null != e) return this.hydrate(t, e)
              }
              return (n & dt.Self ? hs() : this.parent).get(t, e = n & dt.Optional && e === Zt ? null : e)
            } catch (s) {
              if ("NullInjectorError" === s.name) {
                if ((s.ngTempTokenPath = s.ngTempTokenPath || []).unshift(kt(t)), i) throw s;
                return function (t, e, n, i) {
                  const r = t.ngTempTokenPath;
                  throw e.__source && r.unshift(e.__source), t.message = function (t, e, n, i = null) {
                    t = t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1) ? t.substr(2) : t;
                    let r = kt(e);
                    if (Array.isArray(e)) r = e.map(kt).join(" -> ");
                    else if ("object" == typeof e) {
                      let t = [];
                      for (let n in e)
                        if (e.hasOwnProperty(n)) {
                          let i = e[n];
                          t.push(n + ":" + ("string" == typeof i ? JSON.stringify(i) : kt(i)))
                        } r = `{${t.join(", ")}}`
                    }
                    return `${n}${i?"("+i+")":""}[${r}]: ${t.replace(qt,"\n  ")}`
                  }("\n" + t.message, r, n, i), t.ngTokenPath = r, t.ngTempTokenPath = null, t
                }(s, t, "R3InjectorError", this.source)
              }
              throw s
            } finally {
              Yt(i)
            }
            var r
          }
          _resolveInjectorDefTypes() {
            this.injectorDefTypes.forEach(t => this.get(t))
          }
          toString() {
            const t = [];
            return this.records.forEach((e, n) => t.push(kt(n))), `R3Injector[${t.join(", ")}]`
          }
          assertNotDestroyed() {
            if (this._destroyed) throw new Error("Injector has already been destroyed.")
          }
          processInjectorType(t, e, n) {
            if (!(t = Lt(t))) return !1;
            let i = yt(t);
            const r = null == i && t.ngModule || void 0,
              s = void 0 === r ? t : r,
              o = -1 !== n.indexOf(s);
            if (void 0 !== r && (i = yt(r)), null == i) return !1;
            if (null != i.imports && !o) {
              let t;
              n.push(s);
              try {
                se(i.imports, i => {
                  this.processInjectorType(i, e, n) && (void 0 === t && (t = []), t.push(i))
                })
              } finally {}
              if (void 0 !== t)
                for (let e = 0; e < t.length; e++) {
                  const {
                    ngModule: n,
                    providers: i
                  } = t[e];
                  se(i, t => this.processProvider(t, n, i || cs))
                }
            }
            this.injectorDefTypes.add(s), this.records.set(s, gs(i.factory, as));
            const a = i.providers;
            if (null != a && !o) {
              const e = t;
              se(a, t => this.processProvider(t, e, a))
            }
            return void 0 !== r && void 0 !== t.providers
          }
          processProvider(t, e, n) {
            let i = _s(t = Lt(t)) ? t : Lt(t && t.provide);
            const r = function (t, e, n) {
              return vs(t) ? gs(void 0, t.useValue) : gs(ms(t, e, n), as)
            }(t, e, n);
            if (_s(t) || !0 !== t.multi) {
              const t = this.records.get(i);
              t && void 0 !== t.multi && wi()
            } else {
              let e = this.records.get(i);
              e ? void 0 === e.multi && wi() : (e = gs(void 0, as, !0), e.factory = () => ee(e.multi), this.records.set(i, e)), i = t, e.multi.push(t)
            }
            this.records.set(i, r)
          }
          hydrate(t, e) {
            var n;
            return e.value === ls ? function (t) {
              throw new Error(`Cannot instantiate cyclic dependency! ${t}`)
            }(kt(t)) : e.value === as && (e.value = ls, e.value = e.factory()), "object" == typeof e.value && e.value && null !== (n = e.value) && "object" == typeof n && "function" == typeof n.ngOnDestroy && this.onDestroy.add(e.value), e.value
          }
          injectableDefInScope(t) {
            return !!t.providedIn && ("string" == typeof t.providedIn ? "any" === t.providedIn || t.providedIn === this.scope : this.injectorDefTypes.has(t.providedIn))
          }
        }

        function fs(t) {
          const e = vt(t),
            n = null !== e ? e.factory : ke(t);
          if (null !== n) return n;
          const i = yt(t);
          if (null !== i) return i.factory;
          if (t instanceof Bt) throw new Error(`Token ${kt(t)} is missing a \u0275prov definition.`);
          if (t instanceof Function) return function (t) {
            const e = t.length;
            if (e > 0) {
              const n = function (t, e) {
                const n = [];
                for (let i = 0; i < t; i++) n.push("?");
                return n
              }(e);
              throw new Error(`Can't resolve all parameters for ${kt(t)}: (${n.join(", ")}).`)
            }
            const n = function (t) {
              const e = t && (t[bt] || t[St] || t[xt] && t[xt]());
              if (e) {
                const n = function (t) {
                  if (t.hasOwnProperty("name")) return t.name;
                  const e = ("" + t).match(/^function\s*([^\s(]+)/);
                  return null === e ? "" : e[1]
                }(t);
                return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\n` + `This will become an error in v10. Please add @Injectable() to the "${n}" class.`), e
              }
              return null
            }(t);
            return null !== n ? () => n.factory(t) : () => new t
          }(t);
          throw new Error("unreachable")
        }

        function ms(t, e, n) {
          let i = void 0;
          if (_s(t)) {
            const e = Lt(t);
            return ke(e) || fs(e)
          }
          if (vs(t)) i = () => Lt(t.useValue);
          else if ((r = t) && r.useFactory) i = () => t.useFactory(...ee(t.deps || []));
          else if (function (t) {
              return !(!t || !t.useExisting)
            }(t)) i = () => Xt(Lt(t.useExisting));
          else {
            const r = Lt(t && (t.useClass || t.provide));
            if (r || function (t, e, n) {
                let i = "";
                throw t && e && (i = ` - only instances of Provider and Type are allowed, got: [${e.map(t=>t==n?"?"+n+"?":"...").join(", ")}]`), new Error(`Invalid provider for the NgModule '${kt(t)}'` + i)
              }(e, n, t), ! function (t) {
                return !!t.deps
              }(t)) return ke(r) || fs(r);
            i = () => new r(...ee(t.deps))
          }
          var r;
          return i
        }

        function gs(t, e, n = !1) {
          return {
            factory: t,
            value: e,
            multi: n ? [] : void 0
          }
        }

        function vs(t) {
          return null !== t && "object" == typeof t && Gt in t
        }

        function _s(t) {
          return "function" == typeof t
        }
        const ys = function (t, e, n) {
          return function (t, e = null, n = null, i) {
            const r = ds(t, e, n, i);
            return r._resolveInjectorDefTypes(), r
          }({
            name: n
          }, e, t, n)
        };
        let bs = (() => {
          class t {
            static create(t, e) {
              return Array.isArray(t) ? ys(t, e, "") : ys(t.providers, t.parent, t.name || "")
            }
          }
          return t.THROW_IF_NOT_FOUND = Zt, t.NULL = new ne, t.\u0275prov = mt({
            token: t,
            providedIn: "any",
            factory: () => Xt($t)
          }), t.__NG_ELEMENT_ID__ = -1, t
        })();
        const ws = new Bt("AnalyzeForEntryComponents");
        let xs = new Map;
        const Ss = new Set;

        function Cs(t) {
          return "string" == typeof t ? t : t.text()
        }

        function ks(t, e) {
          let n = t.styles,
            i = t.classes,
            r = 0;
          for (let s = 0; s < e.length; s++) {
            const t = e[s];
            "number" == typeof t ? r = t : 1 == r ? i = Pt(i, t) : 2 == r && (n = Pt(n, t + ": " + e[++s] + ";"))
          }
          null !== n && (t.styles = n), null !== i && (t.classes = i)
        }
        let Ps = null;

        function Es() {
          if (!Ps) {
            const t = Rt.Symbol;
            if (t && t.iterator) Ps = t.iterator;
            else {
              const t = Object.getOwnPropertyNames(Map.prototype);
              for (let e = 0; e < t.length; ++e) {
                const n = t[e];
                "entries" !== n && "size" !== n && Map.prototype[n] === Map.prototype.entries && (Ps = n)
              }
            }
          }
          return Ps
        }

        function Ts(t, e) {
          return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e)
        }
        class Ls {
          constructor(t) {
            this.wrapped = t
          }
          static wrap(t) {
            return new Ls(t)
          }
          static unwrap(t) {
            return Ls.isWrapped(t) ? t.wrapped : t
          }
          static isWrapped(t) {
            return t instanceof Ls
          }
        }

        function As(t) {
          return !!Is(t) && (Array.isArray(t) || !(t instanceof Map) && Es() in t)
        }

        function Is(t) {
          return null !== t && ("function" == typeof t || "object" == typeof t)
        }

        function Ms(t, e, n) {
          return t[e] = n
        }

        function Os(t, e, n) {
          return !Object.is(t[e], n) && (t[e] = n, !0)
        }

        function Ns(t, e, n, i) {
          const r = Os(t, e, n);
          return Os(t, e + 1, i) || r
        }

        function Rs(t, e, n, i) {
          const r = Ye();
          return Os(r, ln(), e) && (Je(), function (t, e, n, i, r, s) {
            const o = je(t, e),
              a = e[11];
            if (null == i) Re(a) ? a.removeAttribute(o, n, s) : o.removeAttribute(n);
            else {
              const e = null == r ? jn(i) : r(i, t.tagName || "", n);
              Re(a) ? a.setAttribute(o, n, e, s) : s ? o.setAttributeNS(s, n, e) : o.setAttribute(n, e)
            }
          }(xn(), r, t, e, n, i)), Rs
        }

        function Fs(t, e, n, i) {
          return Os(t, ln(), n) ? e + jn(n) + i : Ii
        }

        function Ds(t, e, n, i, r, s, o, a) {
          const l = Ye(),
            c = Je(),
            u = t + 19,
            h = c.firstCreatePass ? function (t, e, n, i, r, s, o, a, l) {
              const c = e.consts,
                u = $i(e, n[6], t, 0, o || null, qe(c, a));
              ir(e, n, u, qe(c, l)), Sn(e, u);
              const h = u.tViews = Xi(2, -1, i, r, s, e.directiveRegistry, e.pipeRegistry, null, e.schemas, c),
                d = tr(0, null, 2, -1, null, null);
              return d.injectorIndex = u.injectorIndex, h.node = d, null !== e.queries && (e.queries.template(e, u), h.queries = e.queries.embeddedTView(u)), u
            }(t, c, l, e, n, i, r, s, o) : c.data[u];
          tn(h, !1);
          const d = l[11].createComment("");
          Br(c, l, d, h), yi(d, l), yr(l, l[u] = mr(d, l, d, h)), Ie(h) && Yi(c, l, h), null != o && Ji(l, h, a)
        }

        function zs(t) {
          return Ue(We.lFrame.contextLView, t)
        }

        function js(t, e = dt.Default) {
          const n = Ye();
          return null == n ? Xt(t, e) : Jn(Xe(), n, Lt(t), e)
        }

        function Vs(t) {
          return function (t, e) {
            if ("class" === e) return t.classes;
            if ("style" === e) return t.styles;
            const n = t.attrs;
            if (n) {
              const t = n.length;
              let i = 0;
              for (; i < t;) {
                const r = n[i];
                if (In(r)) break;
                if (0 === r) i += 2;
                else if ("number" == typeof r)
                  for (i++; i < t && "string" == typeof n[i];) i++;
                else {
                  if (r === e) return n[i + 1];
                  i += 2
                }
              }
            }
            return null
          }(Xe(), t)
        }

        function Us() {
          throw new Error("invalid")
        }

        function Hs(t, e, n) {
          const i = Ye();
          return Os(i, ln(), e) && nr(Je(), xn(), i, t, e, i[11], n, !1), Hs
        }

        function Bs(t, e, n, i, r) {
          const s = r ? "class" : "style";
          Tr(t, n, e.inputs[s], s, i)
        }

        function $s(t, e, n, i) {
          const r = Ye(),
            s = Je(),
            o = 19 + t,
            a = r[11],
            l = r[o] = Hi(e, a, We.lFrame.currentNamespace),
            c = s.firstCreatePass ? function (t, e, n, i, r, s, o) {
              const a = e.consts,
                l = qe(a, s),
                c = $i(e, n[6], t, 3, r, l);
              return ir(e, n, c, qe(a, o)), null !== c.mergedAttrs && ks(c, c.mergedAttrs), null !== e.queries && e.queries.elementStart(e, c), c
            }(t, s, r, 0, e, n, i) : s.data[o];
          tn(c, !0);
          const u = c.mergedAttrs;
          null !== u && An(a, l, u);
          const h = c.classes;
          null !== h && Kr(a, l, h);
          const d = c.styles;
          null !== d && Wr(a, l, d), Br(s, r, l, c), 0 === We.lFrame.elementDepthCount && yi(l, r), We.lFrame.elementDepthCount++, Ie(c) && (Yi(s, r, c), Ki(s, c, r)), null !== i && Ji(r, c)
        }

        function Zs() {
          let t = Xe();
          en() ? nn() : (t = t.parent, tn(t, !1));
          const e = t;
          We.lFrame.elementDepthCount--;
          const n = Je();
          n.firstCreatePass && (Sn(n, t), Le(t) && n.queries.elementEnd(t)), null !== e.classes && function (t) {
            return 0 != (16 & t.flags)
          }(e) && Bs(n, e, Ye(), e.classes, !0), null !== e.styles && function (t) {
            return 0 != (32 & t.flags)
          }(e) && Bs(n, e, Ye(), e.styles, !1)
        }

        function qs(t, e, n, i) {
          $s(t, e, n, i), Zs()
        }

        function Gs() {
          return Ye()
        }

        function Ws(t) {
          return !!t && "function" == typeof t.then
        }

        function Ks(t) {
          return !!t && "function" == typeof t.subscribe
        }

        function Ys(t, e, n = !1, i) {
          const r = Ye(),
            s = Je(),
            o = Xe();
          return function (t, e, n, i, r, s, o = !1, a) {
            const l = Ie(i),
              c = t.firstCreatePass && (t.cleanup || (t.cleanup = [])),
              u = kr(e);
            let h = !0;
            if (3 === i.type) {
              const d = je(i, e),
                p = a ? a(d) : pe,
                f = p.target || d,
                m = u.length,
                g = a ? t => a(De(t[i.index])).target : i.index;
              if (Re(n)) {
                let o = null;
                if (!a && l && (o = function (t, e, n, i) {
                    const r = t.cleanup;
                    if (null != r)
                      for (let s = 0; s < r.length - 1; s += 2) {
                        const t = r[s];
                        if (t === n && r[s + 1] === i) {
                          const t = e[7],
                            n = r[s + 2];
                          return t.length > n ? t[n] : null
                        }
                        "string" == typeof t && (s += 2)
                      }
                    return null
                  }(t, e, r, i.index)), null !== o)(o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = s, o.__ngLastListenerFn__ = s, h = !1;
                else {
                  s = Qs(i, e, s, !1);
                  const t = n.listen(p.name || f, r, s);
                  u.push(s, t), c && c.push(r, g, m, m + 1)
                }
              } else s = Qs(i, e, s, !0), f.addEventListener(r, s, o), u.push(s), c && c.push(r, g, m, o)
            }
            const d = i.outputs;
            let p;
            if (h && null !== d && (p = d[r])) {
              const t = p.length;
              if (t)
                for (let n = 0; n < t; n += 2) {
                  const t = e[p[n]][p[n + 1]].subscribe(s),
                    o = u.length;
                  u.push(s, t), c && c.push(r, i.index, o, -(o + 1))
                }
            }
          }(s, r, r[11], o, t, e, n, i), Ys
        }

        function Js(t, e, n) {
          try {
            return !1 !== e(n)
          } catch (i) {
            return Er(t, i), !1
          }
        }

        function Qs(t, e, n, i) {
          return function r(s) {
            if (s === Function) return n;
            const o = 2 & t.flags ? He(t.index, e) : e;
            0 == (32 & e[2]) && br(o);
            let a = Js(e, n, s),
              l = r.__ngNextListenerFn__;
            for (; l;) a = Js(e, l, s) && a, l = l.__ngNextListenerFn__;
            return i && !1 === a && (s.preventDefault(), s.returnValue = !1), a
          }
        }

        function Xs(t = 1) {
          return function (t) {
            return (We.lFrame.contextLView = function (t, e) {
              for (; t > 0;) e = e[15], t--;
              return e
            }(t, We.lFrame.contextLView))[8]
          }(t)
        }

        function to(t, e, n, i, r) {
          const s = Ye(),
            o = Fs(s, e, n, i);
          return o !== Ii && nr(Je(), xn(), s, t, o, s[11], r, !1), to
        }
        const eo = [];

        function no(t, e, n, i, r) {
          const s = t[n + 1],
            o = null === e;
          let a = i ? Fi(s) : zi(s),
            l = !1;
          for (; 0 !== a && (!1 === l || o);) {
            const n = t[a + 1];
            io(t[a], e) && (l = !0, t[a + 1] = i ? Vi(n) : Di(n)), a = i ? Fi(n) : zi(n)
          }
          l && (t[n + 1] = i ? Di(s) : Vi(s))
        }

        function io(t, e) {
          return null === t || null == e || (Array.isArray(t) ? t[1] : t) === e || !(!Array.isArray(t) || "string" != typeof e) && ue(t, e) >= 0
        }

        function ro(t, e) {
          return function (t, e, n, i) {
            const r = Ye(),
              s = Je(),
              o = cn(2);
            if (s.firstUpdatePass && function (t, e, n, i) {
                const r = t.data;
                if (null === r[n + 1]) {
                  const i = r[bn() + 19],
                    s = function (t, e) {
                      return e >= t.expandoStartIndex
                    }(t, n);
                  (function (t, e) {
                    return 0 != (16 & t.flags)
                  })(i) && null === e && !s && (e = !1), e = function (t, e, n, i) {
                      const r = function (t) {
                        const e = We.lFrame.currentDirectiveIndex;
                        return -1 === e ? null : t[e]
                      }(t);
                      let s = e.residualClasses;
                      if (null === r) 0 === e.classBindings && (n = oo(n = so(null, t, e, n, !0), e.attrs, !0), s = null);
                      else {
                        const i = e.directiveStylingLast;
                        if (-1 === i || t[i] !== r)
                          if (n = so(r, t, e, n, !0), null === s) {
                            let n = function (t, e, n) {
                              const i = e.classBindings;
                              if (0 !== zi(i)) return t[Fi(i)]
                            }(t, e);
                            void 0 !== n && Array.isArray(n) && (n = so(null, t, e, n[1], !0), n = oo(n, e.attrs, !0), function (t, e, n, i) {
                              t[Fi(e.classBindings)] = i
                            }(t, e, 0, n))
                          } else s = function (t, e, n) {
                            let i = void 0;
                            const r = e.directiveEnd;
                            for (let s = 1 + e.directiveStylingLast; s < r; s++) i = oo(i, t[s].hostAttrs, !0);
                            return oo(i, e.attrs, !0)
                          }(t, e)
                      }
                      return void 0 !== s && (e.residualClasses = s), n
                    }(r, i, e),
                    function (t, e, n, i, r, s) {
                      let o = e.classBindings,
                        a = Fi(o),
                        l = zi(o);
                      t[i] = n;
                      let c, u = !1;
                      if (Array.isArray(n)) {
                        const t = n;
                        c = t[1], (null === c || ue(t, c) > 0) && (u = !0)
                      } else c = n;
                      if (r)
                        if (0 !== l) {
                          const e = Fi(t[a + 1]);
                          t[i + 1] = Ri(e, a), 0 !== e && (t[e + 1] = ji(t[e + 1], i)), t[a + 1] = 131071 & t[a + 1] | i << 17
                        } else t[i + 1] = Ri(a, 0), 0 !== a && (t[a + 1] = ji(t[a + 1], i)), a = i;
                      else t[i + 1] = Ri(l, 0), 0 === a ? a = i : t[l + 1] = ji(t[l + 1], i), l = i;
                      u && (t[i + 1] = Di(t[i + 1])), no(t, c, i, !0), no(t, c, i, !1),
                        function (t, e, n, i, r) {
                          const s = t.residualClasses;
                          null != s && "string" == typeof e && ue(s, e) >= 0 && (n[i + 1] = Vi(n[i + 1]))
                        }(e, c, t, i), o = Ri(a, l), e.classBindings = o
                    }(r, i, e, n, s)
                }
              }(s, t, o), e !== Ii && Os(r, o, e)) {
              let i;
              null == n && (i = function () {
                  const t = We.lFrame;
                  return null === t ? null : t.currentSanitizer
                }()) && (n = i),
                function (t, e, n, i, r, s, o, a) {
                  if (3 !== e.type) return;
                  const l = t.data,
                    c = l[a + 1];
                  lo(1 == (1 & c) ? ao(l, e, n, r, zi(c), !0) : void 0) || (lo(s) || function (t) {
                    return 2 == (2 & t)
                  }(c) && (s = ao(l, null, n, r, a, !0)), function (t, e, n, i, r) {
                    const s = Re(t);
                    r ? s ? t.addClass(n, i) : n.classList.add(i) : s ? t.removeClass(n, i) : n.classList.remove(i)
                  }(i, 0, ze(bn(), n), r, s))
                }(s, s.data[bn() + 19], r, r[11], t, r[o + 1] = function (t, e) {
                  return null == t || ("function" == typeof e ? t = e(t) : "string" == typeof e ? t += e : "object" == typeof t && (t = kt(hi(t)))), t
                }(e, n), 0, o)
            }
          }(t, e, null), ro
        }

        function so(t, e, n, i, r) {
          let s = null;
          const o = n.directiveEnd;
          let a = n.directiveStylingLast;
          for (-1 === a ? a = n.directiveStart : a++; a < o && (s = e[a], i = oo(i, s.hostAttrs, r), s !== t);) a++;
          return null !== t && (n.directiveStylingLast = a), i
        }

        function oo(t, e, n) {
          const i = n ? 1 : 2;
          let r = -1;
          if (null !== e)
            for (let s = 0; s < e.length; s++) {
              const o = e[s];
              "number" == typeof o ? r = o : r === i && (Array.isArray(t) || (t = void 0 === t ? [] : ["", t]), le(t, o, !!n || e[++s]))
            }
          return void 0 === t ? null : t
        }

        function ao(t, e, n, i, r, s) {
          const o = null === e;
          let a = void 0;
          for (; r > 0;) {
            const e = t[r],
              s = Array.isArray(e),
              l = s ? e[1] : e,
              c = null === l;
            let u = n[r + 1];
            u === Ii && (u = c ? eo : void 0);
            let h = c ? ce(u, i) : l === i ? u : void 0;
            if (s && !lo(h) && (h = ce(e, i)), lo(h) && (a = h, o)) return a;
            const d = t[r + 1];
            r = o ? Fi(d) : zi(d)
          }
          if (null !== e) {
            let t = s ? e.residualClasses : e.residualStyles;
            null != t && (a = ce(t, i))
          }
          return a
        }

        function lo(t) {
          return void 0 !== t
        }

        function co(t, e = "") {
          const n = Ye(),
            i = Je(),
            r = t + 19,
            s = i.firstCreatePass ? $i(i, n[6], t, 3, null, null) : i.data[r],
            o = n[r] = function (t, e) {
              return Re(e) ? e.createText(t) : e.createTextNode(t)
            }(e, n[11]);
          Br(i, n, o, s), tn(s, !1)
        }

        function uo(t) {
          return ho("", t, ""), uo
        }

        function ho(t, e, n) {
          const i = Ye(),
            r = Fs(i, t, e, n);
          return r !== Ii && Lr(i, bn(), r), ho
        }

        function po(t, e, n, i, r) {
          const s = Ye(),
            o = function (t, e, n, i, r, s) {
              const o = Ns(t, an(), n, r);
              return cn(2), o ? e + jn(n) + i + jn(r) + s : Ii
            }(s, t, e, n, i, r);
          return o !== Ii && Lr(s, bn(), o), po
        }

        function fo(t, e, n) {
          const i = Ye();
          return Os(i, ln(), e) && nr(Je(), xn(), i, t, e, i[11], n, !0), fo
        }

        function mo(t, e) {
          const n = Be(t)[1],
            i = n.data.length - 1;
          Sn(n, {
            directiveStart: i,
            directiveEnd: i + 1
          })
        }

        function go(t) {
          let e = Object.getPrototypeOf(t.type.prototype).constructor,
            n = !0;
          const i = [t];
          for (; e;) {
            let r = void 0;
            if (Me(t)) r = e.\u0275cmp || e.\u0275dir;
            else {
              if (e.\u0275cmp) throw new Error("Directives cannot inherit Components");
              r = e.\u0275dir
            }
            if (r) {
              if (n) {
                i.push(r);
                const e = t;
                e.inputs = vo(t.inputs), e.declaredInputs = vo(t.declaredInputs), e.outputs = vo(t.outputs);
                const n = r.hostBindings;
                n && bo(t, n);
                const s = r.viewQuery,
                  o = r.contentQueries;
                if (s && _o(t, s), o && yo(t, o), ft(t.inputs, r.inputs), ft(t.declaredInputs, r.declaredInputs), ft(t.outputs, r.outputs), Me(r) && r.data.animation) {
                  const e = t.data;
                  e.animation = (e.animation || []).concat(r.data.animation)
                }
                e.afterContentChecked = e.afterContentChecked || r.afterContentChecked, e.afterContentInit = t.afterContentInit || r.afterContentInit, e.afterViewChecked = t.afterViewChecked || r.afterViewChecked, e.afterViewInit = t.afterViewInit || r.afterViewInit, e.doCheck = t.doCheck || r.doCheck, e.onDestroy = t.onDestroy || r.onDestroy, e.onInit = t.onInit || r.onInit
              }
              const e = r.features;
              if (e)
                for (let i = 0; i < e.length; i++) {
                  const r = e[i];
                  r && r.ngInherit && r(t), r === go && (n = !1)
                }
            }
            e = Object.getPrototypeOf(e)
          }! function (t) {
            let e = 0,
              n = null;
            for (let i = t.length - 1; i >= 0; i--) {
              const r = t[i];
              r.hostVars = e += r.hostVars, r.hostAttrs = On(r.hostAttrs, n = On(n, r.hostAttrs))
            }
          }(i)
        }

        function vo(t) {
          return t === pe ? {} : t === fe ? [] : t
        }

        function _o(t, e) {
          const n = t.viewQuery;
          t.viewQuery = n ? (t, i) => {
            e(t, i), n(t, i)
          } : e
        }

        function yo(t, e) {
          const n = t.contentQueries;
          t.contentQueries = n ? (t, i, r) => {
            e(t, i, r), n(t, i, r)
          } : e
        }

        function bo(t, e) {
          const n = t.hostBindings;
          t.hostBindings = n ? (t, i) => {
            e(t, i), n(t, i)
          } : e
        }
        class wo {
          constructor(t, e, n) {
            this.previousValue = t, this.currentValue = e, this.firstChange = n
          }
          isFirstChange() {
            return this.firstChange
          }
        }

        function xo(t) {
          t.type.prototype.ngOnChanges && (t.setInput = So, t.onChanges = function () {
            const t = Co(this),
              e = t && t.current;
            if (e) {
              const n = t.previous;
              if (n === pe) t.previous = e;
              else
                for (let t in e) n[t] = e[t];
              t.current = null, this.ngOnChanges(e)
            }
          })
        }

        function So(t, e, n, i) {
          const r = Co(t) || function (t, e) {
              return t.__ngSimpleChanges__ = e
            }(t, {
              previous: pe,
              current: null
            }),
            s = r.current || (r.current = {}),
            o = r.previous,
            a = this.declaredInputs[n],
            l = o[a];
          s[a] = new wo(l && l.currentValue, e, o === pe), t[i] = e
        }

        function Co(t) {
          return t.__ngSimpleChanges__ || null
        }

        function ko(t, e, n, i, r) {
          if (t = Lt(t), Array.isArray(t))
            for (let s = 0; s < t.length; s++) ko(t[s], e, n, i, r);
          else {
            const s = Je(),
              o = Ye();
            let a = _s(t) ? t : Lt(t.provide),
              l = ms(t);
            const c = Xe(),
              u = 65535 & c.providerIndexes,
              h = c.directiveStart,
              d = c.providerIndexes >> 16;
            if (_s(t) || !t.multi) {
              const i = new Ln(l, r, js),
                p = To(a, e, r ? u : u + d, h); - 1 === p ? (Yn(qn(c, o), s, a), Po(s, t, e.length), e.push(a), c.directiveStart++, c.directiveEnd++, r && (c.providerIndexes += 65536), n.push(i), o.push(i)) : (n[p] = i, o[p] = i)
            } else {
              const p = To(a, e, u + d, h),
                f = To(a, e, u, u + d),
                m = p >= 0 && n[p],
                g = f >= 0 && n[f];
              if (r && !g || !r && !m) {
                Yn(qn(c, o), s, a);
                const u = function (t, e, n, i, r) {
                  const s = new Ln(t, n, js);
                  return s.multi = [], s.index = e, s.componentProviders = 0, Eo(s, r, i && !n), s
                }(r ? Ao : Lo, n.length, r, i, l);
                !r && g && (n[f].providerFactory = u), Po(s, t, e.length), e.push(a), c.directiveStart++, c.directiveEnd++, r && (c.providerIndexes += 65536), n.push(u), o.push(u)
              } else Po(s, t, p > -1 ? p : f), Eo(n[r ? f : p], l, !r && i);
              !r && i && g && n[f].componentProviders++
            }
          }
        }

        function Po(t, e, n) {
          if (_s(e) || e.useClass) {
            const i = (e.useClass || e).prototype.ngOnDestroy;
            i && (t.destroyHooks || (t.destroyHooks = [])).push(n, i)
          }
        }

        function Eo(t, e, n) {
          t.multi.push(e), n && t.componentProviders++
        }

        function To(t, e, n, i) {
          for (let r = n; r < i; r++)
            if (e[r] === t) return r;
          return -1
        }

        function Lo(t, e, n, i) {
          return Io(this.multi, [])
        }

        function Ao(t, e, n, i) {
          const r = this.multi;
          let s;
          if (this.providerFactory) {
            const t = this.providerFactory.componentProviders,
              e = ei(n, n[1], this.providerFactory.index, i);
            s = e.slice(0, t), Io(r, s);
            for (let n = t; n < e.length; n++) s.push(e[n])
          } else s = [], Io(r, s);
          return s
        }

        function Io(t, e) {
          for (let n = 0; n < t.length; n++) e.push((0, t[n])());
          return e
        }

        function Mo(t, e = []) {
          return n => {
            n.providersResolver = (n, i) => function (t, e, n) {
              const i = Je();
              if (i.firstCreatePass) {
                const r = Me(t);
                ko(n, i.data, i.blueprint, r, !0), ko(e, i.data, i.blueprint, r, !1)
              }
            }(n, i ? i(t) : t, e)
          }
        }
        xo.ngInherit = !0;
        class Oo {}
        class No {
          resolveComponentFactory(t) {
            throw function (t) {
              const e = Error(`No component factory found for ${kt(t)}. Did you add it to @NgModule.entryComponents?`);
              return e.ngComponent = t, e
            }(t)
          }
        }
        let Ro = (() => {
            class t {}
            return t.NULL = new No, t
          })(),
          Fo = (() => {
            class t {
              constructor(t) {
                this.nativeElement = t
              }
            }
            return t.__NG_ELEMENT_ID__ = () => Do(t), t
          })();
        const Do = function (t) {
          return es(t, Xe(), Ye())
        };
        class zo {}
        const jo = function () {
          var t = {
            Important: 1,
            DashCase: 2
          };
          return t[t.Important] = "Important", t[t.DashCase] = "DashCase", t
        }();
        let Vo = (() => {
          class t {}
          return t.__NG_ELEMENT_ID__ = () => Uo(), t
        })();
        const Uo = function () {
          const t = Ye(),
            e = He(Xe().index, t);
          return function (t) {
            const e = t[11];
            if (Re(e)) return e;
            throw new Error("Cannot inject Renderer2 when the application uses Renderer3!")
          }(Ee(e) ? e : t)
        };
        let Ho = (() => {
          class t {}
          return t.\u0275prov = mt({
            token: t,
            providedIn: "root",
            factory: () => null
          }), t
        })();
        class Bo {
          constructor(t) {
            this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".")
          }
        }
        const $o = new Bo("9.1.0");
        class Zo {
          constructor() {}
          supports(t) {
            return As(t)
          }
          create(t) {
            return new Go(t)
          }
        }
        const qo = (t, e) => e;
        class Go {
          constructor(t) {
            this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || qo
          }
          forEachItem(t) {
            let e;
            for (e = this._itHead; null !== e; e = e._next) t(e)
          }
          forEachOperation(t) {
            let e = this._itHead,
              n = this._removalsHead,
              i = 0,
              r = null;
            for (; e || n;) {
              const s = !n || e && e.currentIndex < Jo(n, i, r) ? e : n,
                o = Jo(s, i, r),
                a = s.currentIndex;
              if (s === n) i--, n = n._nextRemoved;
              else if (e = e._next, null == s.previousIndex) i++;
              else {
                r || (r = []);
                const t = o - i,
                  e = a - i;
                if (t != e) {
                  for (let n = 0; n < t; n++) {
                    const i = n < r.length ? r[n] : r[n] = 0,
                      s = i + n;
                    e <= s && s < t && (r[n] = i + 1)
                  }
                  r[s.previousIndex] = e - t
                }
              }
              o !== a && t(s, o, a)
            }
          }
          forEachPreviousItem(t) {
            let e;
            for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e)
          }
          forEachAddedItem(t) {
            let e;
            for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
          }
          forEachMovedItem(t) {
            let e;
            for (e = this._movesHead; null !== e; e = e._nextMoved) t(e)
          }
          forEachRemovedItem(t) {
            let e;
            for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
          }
          forEachIdentityChange(t) {
            let e;
            for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e)
          }
          diff(t) {
            if (null == t && (t = []), !As(t)) throw new Error(`Error trying to diff '${kt(t)}'. Only arrays and iterables are allowed`);
            return this.check(t) ? this : null
          }
          onDestroy() {}
          check(t) {
            this._reset();
            let e, n, i, r = this._itHead,
              s = !1;
            if (Array.isArray(t)) {
              this.length = t.length;
              for (let e = 0; e < this.length; e++) n = t[e], i = this._trackByFn(e, n), null !== r && Ts(r.trackById, i) ? (s && (r = this._verifyReinsertion(r, n, i, e)), Ts(r.item, n) || this._addIdentityChange(r, n)) : (r = this._mismatch(r, n, i, e), s = !0), r = r._next
            } else e = 0,
              function (t, e) {
                if (Array.isArray(t))
                  for (let n = 0; n < t.length; n++) e(t[n]);
                else {
                  const n = t[Es()]();
                  let i;
                  for (; !(i = n.next()).done;) e(i.value)
                }
              }(t, t => {
                i = this._trackByFn(e, t), null !== r && Ts(r.trackById, i) ? (s && (r = this._verifyReinsertion(r, t, i, e)), Ts(r.item, t) || this._addIdentityChange(r, t)) : (r = this._mismatch(r, t, i, e), s = !0), r = r._next, e++
              }), this.length = e;
            return this._truncate(r), this.collection = t, this.isDirty
          }
          get isDirty() {
            return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
          }
          _reset() {
            if (this.isDirty) {
              let t, e;
              for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
              for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
              for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e) t.previousIndex = t.currentIndex, e = t._nextMoved;
              this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
            }
          }
          _mismatch(t, e, n, i) {
            let r;
            return null === t ? r = this._itTail : (r = t._prev, this._remove(t)), null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, i)) ? (Ts(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, r, i)) : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (Ts(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, r, i)) : t = this._addAfter(new Wo(e, n), r, i), t
          }
          _verifyReinsertion(t, e, n, i) {
            let r = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
            return null !== r ? t = this._reinsertAfter(r, t._prev, i) : t.currentIndex != i && (t.currentIndex = i, this._addToMoves(t, i)), t
          }
          _truncate(t) {
            for (; null !== t;) {
              const e = t._next;
              this._addToRemovals(this._unlink(t)), t = e
            }
            null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
          }
          _reinsertAfter(t, e, n) {
            null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
            const i = t._prevRemoved,
              r = t._nextRemoved;
            return null === i ? this._removalsHead = r : i._nextRemoved = r, null === r ? this._removalsTail = i : r._prevRemoved = i, this._insertAfter(t, e, n), this._addToMoves(t, n), t
          }
          _moveAfter(t, e, n) {
            return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t
          }
          _addAfter(t, e, n) {
            return this._insertAfter(t, e, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t
          }
          _insertAfter(t, e, n) {
            const i = null === e ? this._itHead : e._next;
            return t._next = i, t._prev = e, null === i ? this._itTail = t : i._prev = t, null === e ? this._itHead = t : e._next = t, null === this._linkedRecords && (this._linkedRecords = new Yo), this._linkedRecords.put(t), t.currentIndex = n, t
          }
          _remove(t) {
            return this._addToRemovals(this._unlink(t))
          }
          _unlink(t) {
            null !== this._linkedRecords && this._linkedRecords.remove(t);
            const e = t._prev,
              n = t._next;
            return null === e ? this._itHead = n : e._next = n, null === n ? this._itTail = e : n._prev = e, t
          }
          _addToMoves(t, e) {
            return t.previousIndex === e || (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t), t
          }
          _addToRemovals(t) {
            return null === this._unlinkedRecords && (this._unlinkedRecords = new Yo), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t
          }
          _addIdentityChange(t, e) {
            return t.item = e, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t
          }
        }
        class Wo {
          constructor(t, e) {
            this.item = t, this.trackById = e, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
          }
        }
        class Ko {
          constructor() {
            this._head = null, this._tail = null
          }
          add(t) {
            null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t)
          }
          get(t, e) {
            let n;
            for (n = this._head; null !== n; n = n._nextDup)
              if ((null === e || e <= n.currentIndex) && Ts(n.trackById, t)) return n;
            return null
          }
          remove(t) {
            const e = t._prevDup,
              n = t._nextDup;
            return null === e ? this._head = n : e._nextDup = n, null === n ? this._tail = e : n._prevDup = e, null === this._head
          }
        }
        class Yo {
          constructor() {
            this.map = new Map
          }
          put(t) {
            const e = t.trackById;
            let n = this.map.get(e);
            n || (n = new Ko, this.map.set(e, n)), n.add(t)
          }
          get(t, e) {
            const n = this.map.get(t);
            return n ? n.get(t, e) : null
          }
          remove(t) {
            const e = t.trackById;
            return this.map.get(e).remove(t) && this.map.delete(e), t
          }
          get isEmpty() {
            return 0 === this.map.size
          }
          clear() {
            this.map.clear()
          }
        }

        function Jo(t, e, n) {
          const i = t.previousIndex;
          if (null === i) return i;
          let r = 0;
          return n && i < n.length && (r = n[i]), i + e + r
        }
        class Qo {
          constructor() {}
          supports(t) {
            return t instanceof Map || Is(t)
          }
          create() {
            return new Xo
          }
        }
        class Xo {
          constructor() {
            this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
          }
          get isDirty() {
            return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
          }
          forEachItem(t) {
            let e;
            for (e = this._mapHead; null !== e; e = e._next) t(e)
          }
          forEachPreviousItem(t) {
            let e;
            for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e)
          }
          forEachChangedItem(t) {
            let e;
            for (e = this._changesHead; null !== e; e = e._nextChanged) t(e)
          }
          forEachAddedItem(t) {
            let e;
            for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
          }
          forEachRemovedItem(t) {
            let e;
            for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
          }
          diff(t) {
            if (t) {
              if (!(t instanceof Map || Is(t))) throw new Error(`Error trying to diff '${kt(t)}'. Only maps and objects are allowed`)
            } else t = new Map;
            return this.check(t) ? this : null
          }
          onDestroy() {}
          check(t) {
            this._reset();
            let e = this._mapHead;
            if (this._appendAfter = null, this._forEach(t, (t, n) => {
                if (e && e.key === n) this._maybeAddToChanges(e, t), this._appendAfter = e, e = e._next;
                else {
                  const i = this._getOrCreateRecordForKey(n, t);
                  e = this._insertBeforeOrAppend(e, i)
                }
              }), e) {
              e._prev && (e._prev._next = null), this._removalsHead = e;
              for (let t = e; null !== t; t = t._nextRemoved) t === this._mapHead && (this._mapHead = null), this._records.delete(t.key), t._nextRemoved = t._next, t.previousValue = t.currentValue, t.currentValue = null, t._prev = null, t._next = null
            }
            return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
          }
          _insertBeforeOrAppend(t, e) {
            if (t) {
              const n = t._prev;
              return e._next = t, e._prev = n, t._prev = e, n && (n._next = e), t === this._mapHead && (this._mapHead = e), this._appendAfter = t, t
            }
            return this._appendAfter ? (this._appendAfter._next = e, e._prev = this._appendAfter) : this._mapHead = e, this._appendAfter = e, null
          }
          _getOrCreateRecordForKey(t, e) {
            if (this._records.has(t)) {
              const n = this._records.get(t);
              this._maybeAddToChanges(n, e);
              const i = n._prev,
                r = n._next;
              return i && (i._next = r), r && (r._prev = i), n._next = null, n._prev = null, n
            }
            const n = new ta(t);
            return this._records.set(t, n), n.currentValue = e, this._addToAdditions(n), n
          }
          _reset() {
            if (this.isDirty) {
              let t;
              for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next;
              for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
              for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
              this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
            }
          }
          _maybeAddToChanges(t, e) {
            Ts(e, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = e, this._addToChanges(t))
          }
          _addToAdditions(t) {
            null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t)
          }
          _addToChanges(t) {
            null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t)
          }
          _forEach(t, e) {
            t instanceof Map ? t.forEach(e) : Object.keys(t).forEach(n => e(t[n], n))
          }
        }
        class ta {
          constructor(t) {
            this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
          }
        }
        let ea = (() => {
            class t {
              constructor(t) {
                this.factories = t
              }
              static create(e, n) {
                if (null != n) {
                  const t = n.factories.slice();
                  e = e.concat(t)
                }
                return new t(e)
              }
              static extend(e) {
                return {
                  provide: t,
                  useFactory: n => {
                    if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector");
                    return t.create(e, n)
                  },
                  deps: [
                    [t, new ht, new ct]
                  ]
                }
              }
              find(t) {
                const e = this.factories.find(e => e.supports(t));
                if (null != e) return e;
                throw new Error(`Cannot find a differ supporting object '${t}' of type '${n=t,n.name||typeof n}'`);
                var n
              }
            }
            return t.\u0275prov = mt({
              token: t,
              providedIn: "root",
              factory: () => new t([new Zo])
            }), t
          })(),
          na = (() => {
            class t {
              constructor(t) {
                this.factories = t
              }
              static create(e, n) {
                if (n) {
                  const t = n.factories.slice();
                  e = e.concat(t)
                }
                return new t(e)
              }
              static extend(e) {
                return {
                  provide: t,
                  useFactory: n => {
                    if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
                    return t.create(e, n)
                  },
                  deps: [
                    [t, new ht, new ct]
                  ]
                }
              }
              find(t) {
                const e = this.factories.find(e => e.supports(t));
                if (e) return e;
                throw new Error(`Cannot find a differ supporting object '${t}'`)
              }
            }
            return t.\u0275prov = mt({
              token: t,
              providedIn: "root",
              factory: () => new t([new Qo])
            }), t
          })();
        const ia = [new Qo],
          ra = new ea([new Zo]),
          sa = new na(ia);
        let oa = (() => {
          class t {}
          return t.__NG_ELEMENT_ID__ = () => aa(t, Fo), t
        })();
        const aa = function (t, e) {
          return ns(t, e, Xe(), Ye())
        };
        let la = (() => {
          class t {}
          return t.__NG_ELEMENT_ID__ = () => ca(t, Fo), t
        })();
        const ca = function (t, e) {
            return is(t, e, Xe(), Ye())
          },
          ua = {};
        class ha extends Ro {
          constructor(t) {
            super(), this.ngModule = t
          }
          resolveComponentFactory(t) {
            const e = Ce(t);
            return new fa(e, this.ngModule)
          }
        }

        function da(t) {
          const e = [];
          for (let n in t) t.hasOwnProperty(n) && e.push({
            propName: t[n],
            templateName: n
          });
          return e
        }
        const pa = new Bt("SCHEDULER_TOKEN", {
          providedIn: "root",
          factory: () => Un
        });
        class fa extends Oo {
          constructor(t, e) {
            super(), this.componentDef = t, this.ngModule = e, this.componentType = t.type, this.selector = t.selectors.map(Ai).join(","), this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [], this.isBoundToModule = !!e
          }
          get inputs() {
            return da(this.componentDef.inputs)
          }
          get outputs() {
            return da(this.componentDef.outputs)
          }
          create(t, e, n, i) {
            const r = (i = i || this.ngModule) ? function (t, e) {
                return {
                  get: (n, i, r) => {
                    const s = t.get(n, ua, r);
                    return s !== ua || i === ua ? s : e.get(n, i, r)
                  }
                }
              }(t, i.injector) : t,
              s = r.get(zo, Fe),
              o = r.get(Ho, null),
              a = s.createRenderer(null, this.componentDef),
              l = this.componentDef.selectors[0][0] || "div",
              c = n ? function (t, e, n) {
                if (Re(t)) return t.selectRootElement(e, n === de.ShadowDom);
                let i = "string" == typeof e ? t.querySelector(e) : e;
                return i.textContent = "", i
              }(a, n, this.componentDef.encapsulation) : Hi(l, s.createRenderer(null, this.componentDef), function (t) {
                const e = t.toLowerCase();
                return "svg" === e ? "http://www.w3.org/2000/svg" : "math" === e ? "http://www.w3.org/1998/MathML/" : null
              }(l)),
              u = this.componentDef.onPush ? 576 : 528,
              h = "string" == typeof n && /^#root-ng-internal-isolated-\d+/.test(n),
              d = {
                components: [],
                scheduler: Un,
                clean: Cr,
                playerHandler: null,
                flags: 0
              },
              p = Xi(0, -1, null, 1, 0, null, null, null, null, null),
              f = Bi(null, p, d, u, null, null, s, a, o, r);
            let m, g;
            fn(f, null);
            try {
              const t = function (t, e, n, i, r, s) {
                const o = n[1];
                n[19] = t;
                const a = $i(o, null, 0, 3, null, null),
                  l = a.mergedAttrs = e.hostAttrs;
                null !== l && (ks(a, l), null !== t && (An(r, t, l), null !== a.classes && Kr(r, t, a.classes), null !== a.styles && Wr(r, t, a.styles)));
                const c = i.createRenderer(t, e),
                  u = Bi(n, Qi(e), null, e.onPush ? 64 : 16, n[19], a, i, c, void 0);
                return o.firstCreatePass && (Yn(qn(a, n), o, e.type), lr(o, a), ur(a, n.length, 1)), yr(n, u), n[19] = u
              }(c, this.componentDef, f, s, a);
              if (c)
                if (n) An(a, c, ["ng-version", $o.full]);
                else {
                  const {
                    attrs: t,
                    classes: e
                  } = function (t) {
                    const e = [],
                      n = [];
                    let i = 1,
                      r = 2;
                    for (; i < t.length;) {
                      let s = t[i];
                      if ("string" == typeof s) 2 === r ? "" !== s && e.push(s, t[++i]) : 8 === r && n.push(s);
                      else {
                        if (!Pi(r)) break;
                        r = s
                      }
                      i++
                    }
                    return {
                      attrs: e,
                      classes: n
                    }
                  }(this.componentDef.selectors[0]);
                  t && An(a, c, t), e && e.length > 0 && Kr(a, c, e.join(" "))
                } g = Ve(f[1], 0), e && (g.projection = e.map(t => Array.from(t))), m = function (t, e, n, i, r) {
                const s = n[1],
                  o = function (t, e, n) {
                    const i = Xe();
                    t.firstCreatePass && (n.providersResolver && n.providersResolver(n), ar(t, i, 1), hr(t, e, n));
                    const r = ei(e, t, e.length - 1, i);
                    yi(r, e);
                    const s = je(i, e);
                    return s && yi(s, e), r
                  }(s, n, e);
                i.components.push(o), t[8] = o, r && r.forEach(t => t(o, e)), e.contentQueries && e.contentQueries(1, o, n.length - 1);
                const a = Xe();
                if (s.firstCreatePass && (null !== e.hostBindings || null !== e.hostAttrs)) {
                  wn(a.index - 19);
                  const t = n[1];
                  rr(t, e), sr(t, n, e.hostVars), or(e, o)
                }
                return o
              }(t, this.componentDef, f, d, [mo]), Zi(p, f, null)
            } finally {
              yn()
            }
            const v = new ma(this.componentType, m, es(Fo, g, f), f, g);
            return n && !h || (v.hostView._tViewNode.child = g), v
          }
        }
        class ma extends class {} {
          constructor(t, e, n, i, r) {
            super(), this.location = n, this._rootLView = i, this._tNode = r, this.destroyCbs = [], this.instance = e, this.hostView = this.changeDetectorRef = new Jr(i), this.hostView._tViewNode = function (t, e, n, i) {
              let r = t.node;
              return null == r && (t.node = r = tr(0, null, 2, -1, null, null)), i[6] = r
            }(i[1], 0, 0, i), this.componentType = t
          }
          get injector() {
            return new ri(this._tNode, this._rootLView)
          }
          destroy() {
            this.destroyCbs && (this.destroyCbs.forEach(t => t()), this.destroyCbs = null, !this.hostView.destroyed && this.hostView.destroy())
          }
          onDestroy(t) {
            this.destroyCbs && this.destroyCbs.push(t)
          }
        }
        const ga = void 0;
        var va = ["en", [
            ["a", "p"],
            ["AM", "PM"], ga
          ],
          [
            ["AM", "PM"], ga, ga
          ],
          [
            ["S", "M", "T", "W", "T", "F", "S"],
            ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
          ], ga, [
            ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
          ], ga, [
            ["B", "A"],
            ["BC", "AD"],
            ["Before Christ", "Anno Domini"]
          ], 0, [6, 0],
          ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
          ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
          ["{1}, {0}", ga, "{1} 'at' {0}", ga],
          [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
          ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr",
          function (t) {
            let e = Math.floor(Math.abs(t)),
              n = t.toString().replace(/^[^.]*\.?/, "").length;
            return 1 === e && 0 === n ? 1 : 5
          }
        ];
        let _a = {};

        function ya(t) {
          const e = function (t) {
            return t.toLowerCase().replace(/_/g, "-")
          }(t);
          let n = ba(e);
          if (n) return n;
          const i = e.split("-")[0];
          if (n = ba(i), n) return n;
          if ("en" === i) return va;
          throw new Error(`Missing locale data for the locale "${t}".`)
        }

        function ba(t) {
          return t in _a || (_a[t] = Rt.ng && Rt.ng.common && Rt.ng.common.locales && Rt.ng.common.locales[t]), _a[t]
        }
        const wa = function () {
          var t = {
            LocaleId: 0,
            DayPeriodsFormat: 1,
            DayPeriodsStandalone: 2,
            DaysFormat: 3,
            DaysStandalone: 4,
            MonthsFormat: 5,
            MonthsStandalone: 6,
            Eras: 7,
            FirstDayOfWeek: 8,
            WeekendRange: 9,
            DateFormat: 10,
            TimeFormat: 11,
            DateTimeFormat: 12,
            NumberSymbols: 13,
            NumberFormats: 14,
            CurrencyCode: 15,
            CurrencySymbol: 16,
            CurrencyName: 17,
            Currencies: 18,
            Directionality: 19,
            PluralCase: 20,
            ExtraData: 21
          };
          return t[t.LocaleId] = "LocaleId", t[t.DayPeriodsFormat] = "DayPeriodsFormat", t[t.DayPeriodsStandalone] = "DayPeriodsStandalone", t[t.DaysFormat] = "DaysFormat", t[t.DaysStandalone] = "DaysStandalone", t[t.MonthsFormat] = "MonthsFormat", t[t.MonthsStandalone] = "MonthsStandalone", t[t.Eras] = "Eras", t[t.FirstDayOfWeek] = "FirstDayOfWeek", t[t.WeekendRange] = "WeekendRange", t[t.DateFormat] = "DateFormat", t[t.TimeFormat] = "TimeFormat", t[t.DateTimeFormat] = "DateTimeFormat", t[t.NumberSymbols] = "NumberSymbols", t[t.NumberFormats] = "NumberFormats", t[t.CurrencyCode] = "CurrencyCode", t[t.CurrencySymbol] = "CurrencySymbol", t[t.CurrencyName] = "CurrencyName", t[t.Currencies] = "Currencies", t[t.Directionality] = "Directionality", t[t.PluralCase] = "PluralCase", t[t.ExtraData] = "ExtraData", t
        }();
        let xa = "en-US";

        function Sa(t) {
          var e, n;
          n = "Expected localeId to be defined", null == (e = t) && function (t, e, n, i) {
            throw new Error(`ASSERTION ERROR: ${t}` + ` [Expected=> null != ${e} <=Actual]`)
          }(n, e), "string" == typeof t && (xa = t.toLowerCase().replace(/_/g, "-"))
        }
        const Ca = new Map;
        class ka extends ie {
          constructor(t, e) {
            super(), this._parent = e, this._bootstrapComponents = [], this.injector = this, this.destroyCbs = [], this.componentFactoryResolver = new ha(this);
            const n = Pe(t),
              i = t[Vt] || null;
            i && Sa(i), this._bootstrapComponents = Hn(n.bootstrap), this._r3Injector = ds(t, e, [{
              provide: ie,
              useValue: this
            }, {
              provide: Ro,
              useValue: this.componentFactoryResolver
            }], kt(t)), this._r3Injector._resolveInjectorDefTypes(), this.instance = this.get(t)
          }
          get(t, e = bs.THROW_IF_NOT_FOUND, n = dt.Default) {
            return t === bs || t === ie || t === $t ? this : this._r3Injector.get(t, e, n)
          }
          destroy() {
            const t = this._r3Injector;
            !t.destroyed && t.destroy(), this.destroyCbs.forEach(t => t()), this.destroyCbs = null
          }
          onDestroy(t) {
            this.destroyCbs.push(t)
          }
        }
        class Pa extends re {
          constructor(t) {
            super(), this.moduleType = t, null !== Pe(t) && function t(e) {
              if (null !== e.\u0275mod.id) {
                const t = e.\u0275mod.id;
                (function (t, e, n) {
                  if (e && e !== n) throw new Error(`Duplicate module registered for ${t} - ${kt(e)} vs ${kt(e.name)}`)
                })(t, Ca.get(t), e), Ca.set(t, e)
              }
              let n = e.\u0275mod.imports;
              n instanceof Function && (n = n()), n && n.forEach(e => t(e))
            }(t)
          }
          create(t) {
            return new ka(this.moduleType, t)
          }
        }

        function Ea(t, e, n) {
          const i = on() + t,
            r = Ye();
          return r[i] === Ii ? Ms(r, i, n ? e.call(n) : e()) : function (t, e) {
            return t[e]
          }(r, i)
        }

        function Ta(t, e, n, i) {
          return Ia(Ye(), on(), t, e, n, i)
        }

        function La(t, e, n, i, r) {
          return Ma(Ye(), on(), t, e, n, i, r)
        }

        function Aa(t, e) {
          const n = t[e];
          return n === Ii ? void 0 : n
        }

        function Ia(t, e, n, i, r, s) {
          const o = e + n;
          return Os(t, o, r) ? Ms(t, o + 1, s ? i.call(s, r) : i(r)) : Aa(t, o + 1)
        }

        function Ma(t, e, n, i, r, s, o) {
          const a = e + n;
          return Ns(t, a, r, s) ? Ms(t, a + 2, o ? i.call(o, r, s) : i(r, s)) : Aa(t, a + 2)
        }

        function Oa(t, e) {
          const n = Je();
          let i;
          const r = t + 19;
          n.firstCreatePass ? (i = function (t, e) {
            if (e)
              for (let n = e.length - 1; n >= 0; n--) {
                const i = e[n];
                if (t === i.name) return i
              }
            throw new Error(`The pipe '${t}' could not be found!`)
          }(e, n.pipeRegistry), n.data[r] = i, i.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(r, i.onDestroy)) : i = n.data[r];
          const s = i.factory || (i.factory = ke(i.type)),
            o = Jt(js),
            a = s();
          return Jt(o),
            function (t, e, n, i) {
              const r = n + 19;
              r >= t.data.length && (t.data[r] = null, t.blueprint[r] = null), e[r] = i
            }(n, Ye(), t, a), a
        }

        function Na(t, e, n) {
          const i = Ye(),
            r = Ue(i, t);
          return Da(i, Fa(i, t) ? Ia(i, on(), e, r.transform, n, r) : r.transform(n))
        }

        function Ra(t, e, n, i) {
          const r = Ye(),
            s = Ue(r, t);
          return Da(r, Fa(r, t) ? Ma(r, on(), e, s.transform, n, i, s) : s.transform(n, i))
        }

        function Fa(t, e) {
          return t[1].data[e + 19].pure
        }

        function Da(t, e) {
          return Ls.isWrapped(e) && (e = Ls.unwrap(e), t[an()] = Ii), e
        }
        class za extends k {
          constructor(t = !1) {
            super(), this.__isAsync = t
          }
          emit(t) {
            super.next(t)
          }
          subscribe(t, e, n) {
            let i, r = t => null,
              s = () => null;
            t && "object" == typeof t ? (i = this.__isAsync ? e => {
              setTimeout(() => t.next(e))
            } : e => {
              t.next(e)
            }, t.error && (r = this.__isAsync ? e => {
              setTimeout(() => t.error(e))
            } : e => {
              t.error(e)
            }), t.complete && (s = this.__isAsync ? () => {
              setTimeout(() => t.complete())
            } : () => {
              t.complete()
            })) : (i = this.__isAsync ? e => {
              setTimeout(() => t(e))
            } : e => {
              t(e)
            }, e && (r = this.__isAsync ? t => {
              setTimeout(() => e(t))
            } : t => {
              e(t)
            }), n && (s = this.__isAsync ? () => {
              setTimeout(() => n())
            } : () => {
              n()
            }));
            const o = super.subscribe(i, r, s);
            return t instanceof h && t.add(o), o
          }
        }

        function ja() {
          return this._results[Es()]()
        }
        class Va {
          constructor() {
            this.dirty = !0, this._results = [], this.changes = new za, this.length = 0;
            const t = Es(),
              e = Va.prototype;
            e[t] || (e[t] = ja)
          }
          map(t) {
            return this._results.map(t)
          }
          filter(t) {
            return this._results.filter(t)
          }
          find(t) {
            return this._results.find(t)
          }
          reduce(t, e) {
            return this._results.reduce(t, e)
          }
          forEach(t) {
            this._results.forEach(t)
          }
          some(t) {
            return this._results.some(t)
          }
          toArray() {
            return this._results.slice()
          }
          toString() {
            return this._results.toString()
          }
          reset(t) {
            this._results = function t(e, n) {
              void 0 === n && (n = e);
              for (let i = 0; i < e.length; i++) {
                let r = e[i];
                Array.isArray(r) ? (n === e && (n = e.slice(0, i)), t(r, n)) : n !== e && n.push(r)
              }
              return n
            }(t), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0]
          }
          notifyOnChanges() {
            this.changes.emit(this)
          }
          setDirty() {
            this.dirty = !0
          }
          destroy() {
            this.changes.complete(), this.changes.unsubscribe()
          }
        }
        class Ua {
          constructor(t) {
            this.queryList = t, this.matches = null
          }
          clone() {
            return new Ua(this.queryList)
          }
          setDirty() {
            this.queryList.setDirty()
          }
        }
        class Ha {
          constructor(t = []) {
            this.queries = t
          }
          createEmbeddedView(t) {
            const e = t.queries;
            if (null !== e) {
              const n = null !== t.contentQueries ? t.contentQueries[0] : e.length,
                i = [];
              for (let t = 0; t < n; t++) {
                const n = e.getByIndex(t);
                i.push(this.queries[n.indexInDeclarationView].clone())
              }
              return new Ha(i)
            }
            return null
          }
          insertView(t) {
            this.dirtyQueriesWithMatches(t)
          }
          detachView(t) {
            this.dirtyQueriesWithMatches(t)
          }
          dirtyQueriesWithMatches(t) {
            for (let e = 0; e < this.queries.length; e++) null !== Qa(t, e).matches && this.queries[e].setDirty()
          }
        }
        class Ba {
          constructor(t, e, n, i = null) {
            this.predicate = t, this.descendants = e, this.isStatic = n, this.read = i
          }
        }
        class $a {
          constructor(t = []) {
            this.queries = t
          }
          elementStart(t, e) {
            for (let n = 0; n < this.queries.length; n++) this.queries[n].elementStart(t, e)
          }
          elementEnd(t) {
            for (let e = 0; e < this.queries.length; e++) this.queries[e].elementEnd(t)
          }
          embeddedTView(t) {
            let e = null;
            for (let n = 0; n < this.length; n++) {
              const i = null !== e ? e.length : 0,
                r = this.getByIndex(n).embeddedTView(t, i);
              r && (r.indexInDeclarationView = n, null !== e ? e.push(r) : e = [r])
            }
            return null !== e ? new $a(e) : null
          }
          template(t, e) {
            for (let n = 0; n < this.queries.length; n++) this.queries[n].template(t, e)
          }
          getByIndex(t) {
            return this.queries[t]
          }
          get length() {
            return this.queries.length
          }
          track(t) {
            this.queries.push(t)
          }
        }
        class Za {
          constructor(t, e = -1) {
            this.metadata = t, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = e
          }
          elementStart(t, e) {
            this.isApplyingToNode(e) && this.matchTNode(t, e)
          }
          elementEnd(t) {
            this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1)
          }
          template(t, e) {
            this.elementStart(t, e)
          }
          embeddedTView(t, e) {
            return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, e), new Za(this.metadata)) : null
          }
          isApplyingToNode(t) {
            if (this._appliesToNextNode && !1 === this.metadata.descendants) {
              const e = this._declarationNodeIndex;
              let n = t.parent;
              for (; null !== n && 4 === n.type && n.index !== e;) n = n.parent;
              return e === (null !== n ? n.index : -1)
            }
            return this._appliesToNextNode
          }
          matchTNode(t, e) {
            if (Array.isArray(this.metadata.predicate)) {
              const n = this.metadata.predicate;
              for (let i = 0; i < n.length; i++) this.matchTNodeWithReadOption(t, e, qa(e, n[i]))
            } else {
              const n = this.metadata.predicate;
              n === oa ? 0 === e.type && this.matchTNodeWithReadOption(t, e, -1) : this.matchTNodeWithReadOption(t, e, ti(e, t, n, !1, !1))
            }
          }
          matchTNodeWithReadOption(t, e, n) {
            if (null !== n) {
              const i = this.metadata.read;
              if (null !== i)
                if (i === Fo || i === la || i === oa && 0 === e.type) this.addMatch(e.index, -2);
                else {
                  const n = ti(e, t, i, !1, !1);
                  null !== n && this.addMatch(e.index, n)
                }
              else this.addMatch(e.index, n)
            }
          }
          addMatch(t, e) {
            null === this.matches ? this.matches = [t, e] : this.matches.push(t, e)
          }
        }

        function qa(t, e) {
          const n = t.localNames;
          if (null !== n)
            for (let i = 0; i < n.length; i += 2)
              if (n[i] === e) return n[i + 1];
          return null
        }

        function Ga(t, e, n, i) {
          return -1 === n ? function (t, e) {
            return 3 === t.type || 4 === t.type ? es(Fo, t, e) : 0 === t.type ? ns(oa, Fo, t, e) : null
          }(e, t) : -2 === n ? function (t, e, n) {
            return n === Fo ? es(Fo, e, t) : n === oa ? ns(oa, Fo, e, t) : n === la ? is(la, Fo, e, t) : void 0
          }(t, e, i) : ei(t, t[1], n, e)
        }

        function Wa(t, e, n, i) {
          const r = e[5].queries[i];
          if (null === r.matches) {
            const i = t.data,
              s = n.matches,
              o = [];
            for (let t = 0; t < s.length; t += 2) {
              const r = s[t];
              o.push(r < 0 ? null : Ga(e, i[r], s[t + 1], n.metadata.read))
            }
            r.matches = o
          }
          return r.matches
        }

        function Ka(t) {
          const e = Ye(),
            n = Je(),
            i = hn();
          dn(i + 1);
          const r = Qa(n, i);
          if (t.dirty && $e(e) === r.metadata.isStatic) {
            if (null === r.matches) t.reset([]);
            else {
              const s = r.crossesNgTemplate ? function t(e, n, i, r) {
                const s = e.queries.getByIndex(i),
                  o = s.matches;
                if (null !== o) {
                  const a = Wa(e, n, s, i);
                  for (let e = 0; e < o.length; e += 2) {
                    const i = o[e];
                    if (i > 0) r.push(a[e / 2]);
                    else {
                      const s = o[e + 1],
                        a = n[-i];
                      for (let e = 9; e < a.length; e++) {
                        const n = a[e];
                        n[17] === n[3] && t(n[1], n, s, r)
                      }
                      if (null !== a[5]) {
                        const e = a[5];
                        for (let n = 0; n < e.length; n++) {
                          const i = e[n];
                          t(i[1], i, s, r)
                        }
                      }
                    }
                  }
                }
                return r
              }(n, e, i, []) : Wa(n, e, r, i);
              t.reset(s), t.notifyOnChanges()
            }
            return !0
          }
          return !1
        }

        function Ya(t, e, n, i) {
          ! function (t, e, n, i, r, s, o, a) {
            t.firstCreatePass && (function (t, e, n) {
                null === t.queries && (t.queries = new $a), t.queries.track(new Za(e, n))
              }(t, new Ba(n, i, !1, r), o.index), function (t, e) {
                const n = t.contentQueries || (t.contentQueries = []);
                e !== (t.contentQueries.length ? n[n.length - 1] : -1) && n.push(t.queries.length - 1, e)
              }(t, a)),
              function (t, e) {
                const n = new Va;
                ! function (t, e, n, i) {
                  const r = kr(e);
                  r.push(n), t.firstCreatePass && Pr(t).push(i, r.length - 1)
                }(t, e, n, n.destroy), null === e[5] && (e[5] = new Ha), e[5].queries.push(new Ua(n))
              }(t, e)
          }(Je(), Ye(), e, n, i, 0, Xe(), t)
        }

        function Ja() {
          return t = Ye(), e = hn(), t[5].queries[e].queryList;
          var t, e
        }

        function Qa(t, e) {
          return t.queries.getByIndex(e)
        }
        const Xa = at("Input", t => ({
            bindingPropertyName: t
          })),
          tl = at("Output", t => ({
            bindingPropertyName: t
          })),
          el = new Bt("Application Initializer");
        let nl = (() => {
          class t {
            constructor(t) {
              this.appInits = t, this.initialized = !1, this.done = !1, this.donePromise = new Promise((t, e) => {
                this.resolve = t, this.reject = e
              })
            }
            runInitializers() {
              if (this.initialized) return;
              const t = [],
                e = () => {
                  this.done = !0, this.resolve()
                };
              if (this.appInits)
                for (let n = 0; n < this.appInits.length; n++) {
                  const e = this.appInits[n]();
                  Ws(e) && t.push(e)
                }
              Promise.all(t).then(() => {
                e()
              }).catch(t => {
                this.reject(t)
              }), 0 === t.length && e(), this.initialized = !0
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Xt(el, 8))
          }, t.\u0275prov = mt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const il = new Bt("AppId"),
          rl = {
            provide: il,
            useFactory: function () {
              return `${sl()}${sl()}${sl()}`
            },
            deps: []
          };

        function sl() {
          return String.fromCharCode(97 + Math.floor(25 * Math.random()))
        }
        const ol = new Bt("Platform Initializer"),
          al = new Bt("Platform ID"),
          ll = new Bt("appBootstrapListener");
        let cl = (() => {
          class t {
            log(t) {
              console.log(t)
            }
            warn(t) {
              console.warn(t)
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275prov = mt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const ul = new Bt("LocaleId"),
          hl = new Bt("DefaultCurrencyCode");
        class dl {
          constructor(t, e) {
            this.ngModuleFactory = t, this.componentFactories = e
          }
        }
        const pl = function (t) {
            return new Pa(t)
          },
          fl = pl,
          ml = function (t) {
            return Promise.resolve(pl(t))
          },
          gl = function (t) {
            const e = pl(t),
              n = Hn(Pe(t).declarations).reduce((t, e) => {
                const n = Ce(e);
                return n && t.push(new fa(n)), t
              }, []);
            return new dl(e, n)
          },
          vl = gl,
          _l = function (t) {
            return Promise.resolve(gl(t))
          };
        let yl = (() => {
          class t {
            constructor() {
              this.compileModuleSync = fl, this.compileModuleAsync = ml, this.compileModuleAndAllComponentsSync = vl, this.compileModuleAndAllComponentsAsync = _l
            }
            clearCache() {}
            clearCacheFor(t) {}
            getModuleId(t) {}
          }
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275prov = mt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const bl = new Bt("compilerOptions"),
          wl = (() => Promise.resolve(0))();

        function xl(t) {
          "undefined" == typeof Zone ? wl.then(() => {
            t && t.apply(null, null)
          }) : Zone.current.scheduleMicroTask("scheduleMicrotask", t)
        }
        class Sl {
          constructor({
            enableLongStackTrace: t = !1,
            shouldCoalesceEventChangeDetection: e = !1
          }) {
            if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new za(!1), this.onMicrotaskEmpty = new za(!1), this.onStable = new za(!1), this.onError = new za(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
            Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), t && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), this.shouldCoalesceEventChangeDetection = e, this.lastRequestAnimationFrameId = -1, this.nativeRequestAnimationFrame = function () {
                let t = Rt.requestAnimationFrame,
                  e = Rt.cancelAnimationFrame;
                if ("undefined" != typeof Zone && t && e) {
                  const n = t[Zone.__symbol__("OriginalDelegate")];
                  n && (t = n);
                  const i = e[Zone.__symbol__("OriginalDelegate")];
                  i && (e = i)
                }
                return {
                  nativeRequestAnimationFrame: t,
                  nativeCancelAnimationFrame: e
                }
              }().nativeRequestAnimationFrame,
              function (t) {
                const e = !!t.shouldCoalesceEventChangeDetection && t.nativeRequestAnimationFrame && (() => {
                  ! function (t) {
                    -1 === t.lastRequestAnimationFrameId && (t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(Rt, () => {
                      t.lastRequestAnimationFrameId = -1, El(t), Pl(t)
                    }), El(t))
                  }(t)
                });
                t._inner = t._inner.fork({
                  name: "angular",
                  properties: {
                    isAngularZone: !0,
                    maybeDelayChangeDetection: e
                  },
                  onInvokeTask: (n, i, r, s, o, a) => {
                    try {
                      return Tl(t), n.invokeTask(r, s, o, a)
                    } finally {
                      e && "eventTask" === s.type && e(), Ll(t)
                    }
                  },
                  onInvoke: (e, n, i, r, s, o, a) => {
                    try {
                      return Tl(t), e.invoke(i, r, s, o, a)
                    } finally {
                      Ll(t)
                    }
                  },
                  onHasTask: (e, n, i, r) => {
                    e.hasTask(i, r), n === i && ("microTask" == r.change ? (t._hasPendingMicrotasks = r.microTask, El(t), Pl(t)) : "macroTask" == r.change && (t.hasPendingMacrotasks = r.macroTask))
                  },
                  onHandleError: (e, n, i, r) => (e.handleError(i, r), t.runOutsideAngular(() => t.onError.emit(r)), !1)
                })
              }(this)
          }
          static isInAngularZone() {
            return !0 === Zone.current.get("isAngularZone")
          }
          static assertInAngularZone() {
            if (!Sl.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
          }
          static assertNotInAngularZone() {
            if (Sl.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
          }
          run(t, e, n) {
            return this._inner.run(t, e, n)
          }
          runTask(t, e, n, i) {
            const r = this._inner,
              s = r.scheduleEventTask("NgZoneEvent: " + i, t, kl, Cl, Cl);
            try {
              return r.runTask(s, e, n)
            } finally {
              r.cancelTask(s)
            }
          }
          runGuarded(t, e, n) {
            return this._inner.runGuarded(t, e, n)
          }
          runOutsideAngular(t) {
            return this._outer.run(t)
          }
        }

        function Cl() {}
        const kl = {};

        function Pl(t) {
          if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable) try {
            t._nesting++, t.onMicrotaskEmpty.emit(null)
          } finally {
            if (t._nesting--, !t.hasPendingMicrotasks) try {
              t.runOutsideAngular(() => t.onStable.emit(null))
            } finally {
              t.isStable = !0
            }
          }
        }

        function El(t) {
          t.hasPendingMicrotasks = !!(t._hasPendingMicrotasks || t.shouldCoalesceEventChangeDetection && -1 !== t.lastRequestAnimationFrameId)
        }

        function Tl(t) {
          t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null))
        }

        function Ll(t) {
          t._nesting--, Pl(t)
        }
        class Al {
          constructor() {
            this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new za, this.onMicrotaskEmpty = new za, this.onStable = new za, this.onError = new za
          }
          run(t, e, n) {
            return t.apply(e, n)
          }
          runGuarded(t, e, n) {
            return t.apply(e, n)
          }
          runOutsideAngular(t) {
            return t()
          }
          runTask(t, e, n, i) {
            return t.apply(e, n)
          }
        }
        let Il = (() => {
            class t {
              constructor(t) {
                this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), t.run(() => {
                  this.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
                })
              }
              _watchAngularEvents() {
                this._ngZone.onUnstable.subscribe({
                  next: () => {
                    this._didWork = !0, this._isZoneStable = !1
                  }
                }), this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      Sl.assertNotInAngularZone(), xl(() => {
                        this._isZoneStable = !0, this._runCallbacksIfReady()
                      })
                    }
                  })
                })
              }
              increasePendingRequestCount() {
                return this._pendingCount += 1, this._didWork = !0, this._pendingCount
              }
              decreasePendingRequestCount() {
                if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                return this._runCallbacksIfReady(), this._pendingCount
              }
              isStable() {
                return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
              }
              _runCallbacksIfReady() {
                if (this.isStable()) xl(() => {
                  for (; 0 !== this._callbacks.length;) {
                    let t = this._callbacks.pop();
                    clearTimeout(t.timeoutId), t.doneCb(this._didWork)
                  }
                  this._didWork = !1
                });
                else {
                  let t = this.getPendingTasks();
                  this._callbacks = this._callbacks.filter(e => !e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId), !1)), this._didWork = !0
                }
              }
              getPendingTasks() {
                return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(t => ({
                  source: t.source,
                  creationLocation: t.creationLocation,
                  data: t.data
                })) : []
              }
              addCallback(t, e, n) {
                let i = -1;
                e && e > 0 && (i = setTimeout(() => {
                  this._callbacks = this._callbacks.filter(t => t.timeoutId !== i), t(this._didWork, this.getPendingTasks())
                }, e)), this._callbacks.push({
                  doneCb: t,
                  timeoutId: i,
                  updateCb: n
                })
              }
              whenStable(t, e, n) {
                if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                this.addCallback(t, e, n), this._runCallbacksIfReady()
              }
              getPendingRequestCount() {
                return this._pendingCount
              }
              findProviders(t, e, n) {
                return []
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Xt(Sl))
            }, t.\u0275prov = mt({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          Ml = (() => {
            class t {
              constructor() {
                this._applications = new Map, Rl.addToWindow(this)
              }
              registerApplication(t, e) {
                this._applications.set(t, e)
              }
              unregisterApplication(t) {
                this._applications.delete(t)
              }
              unregisterAllApplications() {
                this._applications.clear()
              }
              getTestability(t) {
                return this._applications.get(t) || null
              }
              getAllTestabilities() {
                return Array.from(this._applications.values())
              }
              getAllRootElements() {
                return Array.from(this._applications.keys())
              }
              findTestabilityInTree(t, e = !0) {
                return Rl.findTestabilityInTree(this, t, e)
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)
            }, t.\u0275prov = mt({
              token: t,
              factory: t.\u0275fac
            }), t
          })();
        class Ol {
          addToWindow(t) {}
          findTestabilityInTree(t, e, n) {
            return null
          }
        }
        let Nl, Rl = new Ol,
          Fl = function (t, e, n) {
            const i = t.get(bl, []).concat(e),
              r = new Pa(n);
            if (0 === xs.size) return Promise.resolve(r);
            const s = function (t) {
              const e = [];
              return t.forEach(t => t && e.push(...t)), e
            }(i.map(t => t.providers));
            if (0 === s.length) return Promise.resolve(r);
            const o = function () {
                const t = Rt.ng;
                if (!t || !t.\u0275compilerFacade) throw new Error("Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping.");
                return t.\u0275compilerFacade
              }(),
              a = bs.create({
                providers: s
              }).get(o.ResourceLoader);
            return function (t) {
              const e = [],
                n = new Map;

              function i(t) {
                let e = n.get(t);
                if (!e) {
                  const i = (t => Promise.resolve(a.get(t)))(t);
                  n.set(t, e = i.then(Cs))
                }
                return e
              }
              return xs.forEach((t, n) => {
                const r = [];
                t.templateUrl && r.push(i(t.templateUrl).then(e => {
                  t.template = e
                }));
                const s = t.styleUrls,
                  o = t.styles || (t.styles = []),
                  a = t.styles.length;
                s && s.forEach((e, n) => {
                  o.push(""), r.push(i(e).then(i => {
                    o[a + n] = i, s.splice(s.indexOf(e), 1), 0 == s.length && (t.styleUrls = void 0)
                  }))
                });
                const l = Promise.all(r).then(() => function (t) {
                  Ss.delete(t)
                }(n));
                e.push(l)
              }), xs = new Map, Promise.all(e).then(() => {})
            }().then(() => r)
          };
        const Dl = new Bt("AllowMultipleToken");
        class zl {
          constructor(t, e) {
            this.name = t, this.token = e
          }
        }

        function jl(t, e, n = []) {
          const i = `Platform: ${e}`,
            r = new Bt(i);
          return (e = []) => {
            let s = Vl();
            if (!s || s.injector.get(Dl, !1))
              if (t) t(n.concat(e).concat({
                provide: r,
                useValue: !0
              }));
              else {
                const t = n.concat(e).concat({
                  provide: r,
                  useValue: !0
                }, {
                  provide: os,
                  useValue: "platform"
                });
                ! function (t) {
                  if (Nl && !Nl.destroyed && !Nl.injector.get(Dl, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                  Nl = t.get(Ul);
                  const e = t.get(ol, null);
                  e && e.forEach(t => t())
                }(bs.create({
                  providers: t,
                  name: i
                }))
              } return function (t) {
              const e = Vl();
              if (!e) throw new Error("No platform exists!");
              if (!e.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
              return e
            }(r)
          }
        }

        function Vl() {
          return Nl && !Nl.destroyed ? Nl : null
        }
        let Ul = (() => {
          class t {
            constructor(t) {
              this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1
            }
            bootstrapModuleFactory(t, e) {
              const n = function (t, e) {
                  let n;
                  return n = "noop" === t ? new Al : ("zone.js" === t ? void 0 : t) || new Sl({
                    enableLongStackTrace: fi(),
                    shouldCoalesceEventChangeDetection: e
                  }), n
                }(e ? e.ngZone : void 0, e && e.ngZoneEventCoalescing || !1),
                i = [{
                  provide: Sl,
                  useValue: n
                }];
              return n.run(() => {
                const e = bs.create({
                    providers: i,
                    parent: this.injector,
                    name: t.moduleType.name
                  }),
                  r = t.create(e),
                  s = r.injector.get(ci, null);
                if (!s) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                return r.onDestroy(() => $l(this._modules, r)), n.runOutsideAngular(() => n.onError.subscribe({
                    next: t => {
                      s.handleError(t)
                    }
                  })),
                  function (t, e, n) {
                    try {
                      const i = n();
                      return Ws(i) ? i.catch(n => {
                        throw e.runOutsideAngular(() => t.handleError(n)), n
                      }) : i
                    } catch (i) {
                      throw e.runOutsideAngular(() => t.handleError(i)), i
                    }
                  }(s, n, () => {
                    const t = r.injector.get(nl);
                    return t.runInitializers(), t.donePromise.then(() => (Sa(r.injector.get(ul, "en-US") || "en-US"), this._moduleDoBootstrap(r), r))
                  })
              })
            }
            bootstrapModule(t, e = []) {
              const n = Hl({}, e);
              return Fl(this.injector, n, t).then(t => this.bootstrapModuleFactory(t, n))
            }
            _moduleDoBootstrap(t) {
              const e = t.injector.get(Bl);
              if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach(t => e.bootstrap(t));
              else {
                if (!t.instance.ngDoBootstrap) throw new Error(`The module ${kt(t.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ` + "Please define one of these.");
                t.instance.ngDoBootstrap(e)
              }
              this._modules.push(t)
            }
            onDestroy(t) {
              this._destroyListeners.push(t)
            }
            get injector() {
              return this._injector
            }
            destroy() {
              if (this._destroyed) throw new Error("The platform has already been destroyed!");
              this._modules.slice().forEach(t => t.destroy()), this._destroyListeners.forEach(t => t()), this._destroyed = !0
            }
            get destroyed() {
              return this._destroyed
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Xt(bs))
          }, t.\u0275prov = mt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();

        function Hl(t, e) {
          return Array.isArray(e) ? e.reduce(Hl, t) : Object.assign(Object.assign({}, t), e)
        }
        let Bl = (() => {
          class t {
            constructor(t, e, n, i, r, s) {
              this._zone = t, this._console = e, this._injector = n, this._exceptionHandler = i, this._componentFactoryResolver = r, this._initStatus = s, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = fi(), this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick()
                  })
                }
              });
              const o = new b(t => {
                  this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks, this._zone.runOutsideAngular(() => {
                    t.next(this._stable), t.complete()
                  })
                }),
                a = new b(t => {
                  let e;
                  this._zone.runOutsideAngular(() => {
                    e = this._zone.onStable.subscribe(() => {
                      Sl.assertNotInAngularZone(), xl(() => {
                        this._stable || this._zone.hasPendingMacrotasks || this._zone.hasPendingMicrotasks || (this._stable = !0, t.next(!0))
                      })
                    })
                  });
                  const n = this._zone.onUnstable.subscribe(() => {
                    Sl.assertInAngularZone(), this._stable && (this._stable = !1, this._zone.runOutsideAngular(() => {
                      t.next(!1)
                    }))
                  });
                  return () => {
                    e.unsubscribe(), n.unsubscribe()
                  }
                });
              this.isStable = W(o, a.pipe(t => K()(et(it)(t))))
            }
            bootstrap(t, e) {
              if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
              let n;
              n = t instanceof Oo ? t : this._componentFactoryResolver.resolveComponentFactory(t), this.componentTypes.push(n.componentType);
              const i = n.isBoundToModule ? void 0 : this._injector.get(ie),
                r = n.create(bs.NULL, [], e || n.selector, i);
              r.onDestroy(() => {
                this._unloadComponent(r)
              });
              const s = r.injector.get(Il, null);
              return s && r.injector.get(Ml).registerApplication(r.location.nativeElement, s), this._loadComponent(r), fi() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), r
            }
            tick() {
              if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
              try {
                this._runningTick = !0;
                for (let t of this._views) t.detectChanges();
                if (this._enforceNoNewChanges)
                  for (let t of this._views) t.checkNoChanges()
              } catch (t) {
                this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(t))
              } finally {
                this._runningTick = !1
              }
            }
            attachView(t) {
              const e = t;
              this._views.push(e), e.attachToAppRef(this)
            }
            detachView(t) {
              const e = t;
              $l(this._views, e), e.detachFromAppRef()
            }
            _loadComponent(t) {
              this.attachView(t.hostView), this.tick(), this.components.push(t), this._injector.get(ll, []).concat(this._bootstrapListeners).forEach(e => e(t))
            }
            _unloadComponent(t) {
              this.detachView(t.hostView), $l(this.components, t)
            }
            ngOnDestroy() {
              this._views.slice().forEach(t => t.destroy())
            }
            get viewCount() {
              return this._views.length
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Xt(Sl), Xt(cl), Xt(bs), Xt(ci), Xt(Ro), Xt(nl))
          }, t.\u0275prov = mt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();

        function $l(t, e) {
          const n = t.indexOf(e);
          n > -1 && t.splice(n, 1)
        }
        class Zl {}
        class ql {}
        const Gl = {
          factoryPathPrefix: "",
          factoryPathSuffix: ".ngfactory"
        };
        let Wl = (() => {
          class t {
            constructor(t, e) {
              this._compiler = t, this._config = e || Gl
            }
            load(t) {
              return this.loadAndCompile(t)
            }
            loadAndCompile(t) {
              let [e, i] = t.split("#");
              return void 0 === i && (i = "default"), n("zn8P")(e).then(t => t[i]).then(t => Kl(t, e, i)).then(t => this._compiler.compileModuleAsync(t))
            }
            loadFactory(t) {
              let [e, i] = t.split("#"), r = "NgFactory";
              return void 0 === i && (i = "default", r = ""), n("zn8P")(this._config.factoryPathPrefix + e + this._config.factoryPathSuffix).then(t => t[i + r]).then(t => Kl(t, e, i))
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Xt(yl), Xt(ql, 8))
          }, t.\u0275prov = mt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();

        function Kl(t, e, n) {
          if (!t) throw new Error(`Cannot find '${n}' in '${e}'`);
          return t
        }
        const Yl = jl(null, "core", [{
            provide: al,
            useValue: "unknown"
          }, {
            provide: Ul,
            deps: [bs]
          }, {
            provide: Ml,
            deps: []
          }, {
            provide: cl,
            deps: []
          }]),
          Jl = [{
            provide: Bl,
            useClass: Bl,
            deps: [Sl, cl, bs, ci, Ro, nl]
          }, {
            provide: pa,
            deps: [Sl],
            useFactory: function (t) {
              let e = [];
              return t.onStable.subscribe(() => {
                  for (; e.length;) e.pop()()
                }),
                function (t) {
                  e.push(t)
                }
            }
          }, {
            provide: nl,
            useClass: nl,
            deps: [
              [new ct, el]
            ]
          }, {
            provide: yl,
            useClass: yl,
            deps: []
          }, rl, {
            provide: ea,
            useFactory: function () {
              return ra
            },
            deps: []
          }, {
            provide: na,
            useFactory: function () {
              return sa
            },
            deps: []
          }, {
            provide: ul,
            useFactory: function (t) {
              return Sa(t = t || "undefined" != typeof $localize && $localize.locale || "en-US"), t
            },
            deps: [
              [new lt(ul), new ct, new ht]
            ]
          }, {
            provide: hl,
            useValue: "USD"
          }];
        let Ql = (() => {
            class t {
              constructor(t) {}
            }
            return t.\u0275mod = be({
              type: t
            }), t.\u0275inj = gt({
              factory: function (e) {
                return new(e || t)(Xt(Bl))
              },
              providers: Jl
            }), t
          })(),
          Xl = null;

        function tc() {
          return Xl
        }
        const ec = new Bt("DocumentToken");
        let nc = (() => {
          class t {}
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275prov = mt({
            factory: ic,
            token: t,
            providedIn: "platform"
          }), t
        })();

        function ic() {
          return Xt(sc)
        }
        const rc = new Bt("Location Initialized");
        let sc = (() => {
          class t extends nc {
            constructor(t) {
              super(), this._doc = t, this._init()
            }
            _init() {
              this.location = tc().getLocation(), this._history = tc().getHistory()
            }
            getBaseHrefFromDOM() {
              return tc().getBaseHref(this._doc)
            }
            onPopState(t) {
              tc().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", t, !1)
            }
            onHashChange(t) {
              tc().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", t, !1)
            }
            get href() {
              return this.location.href
            }
            get protocol() {
              return this.location.protocol
            }
            get hostname() {
              return this.location.hostname
            }
            get port() {
              return this.location.port
            }
            get pathname() {
              return this.location.pathname
            }
            get search() {
              return this.location.search
            }
            get hash() {
              return this.location.hash
            }
            set pathname(t) {
              this.location.pathname = t
            }
            pushState(t, e, n) {
              oc() ? this._history.pushState(t, e, n) : this.location.hash = n
            }
            replaceState(t, e, n) {
              oc() ? this._history.replaceState(t, e, n) : this.location.hash = n
            }
            forward() {
              this._history.forward()
            }
            back() {
              this._history.back()
            }
            getState() {
              return this._history.state
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Xt(ec))
          }, t.\u0275prov = mt({
            factory: ac,
            token: t,
            providedIn: "platform"
          }), t
        })();

        function oc() {
          return !!window.history.pushState
        }

        function ac() {
          return new sc(Xt(ec))
        }

        function lc(t, e) {
          if (0 == t.length) return e;
          if (0 == e.length) return t;
          let n = 0;
          return t.endsWith("/") && n++, e.startsWith("/") && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
        }

        function cc(t) {
          const e = t.match(/#|\?|$/),
            n = e && e.index || t.length;
          return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n)
        }

        function uc(t) {
          return t && "?" !== t[0] ? "?" + t : t
        }
        let hc = (() => {
          class t {}
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275prov = mt({
            factory: dc,
            token: t,
            providedIn: "root"
          }), t
        })();

        function dc(t) {
          const e = Xt(ec).location;
          return new fc(Xt(nc), e && e.origin || "")
        }
        const pc = new Bt("appBaseHref");
        let fc = (() => {
            class t extends hc {
              constructor(t, e) {
                if (super(), this._platformLocation = t, null == e && (e = this._platformLocation.getBaseHrefFromDOM()), null == e) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                this._baseHref = e
              }
              onPopState(t) {
                this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
              }
              getBaseHref() {
                return this._baseHref
              }
              prepareExternalUrl(t) {
                return lc(this._baseHref, t)
              }
              path(t = !1) {
                const e = this._platformLocation.pathname + uc(this._platformLocation.search),
                  n = this._platformLocation.hash;
                return n && t ? `${e}${n}` : e
              }
              pushState(t, e, n, i) {
                const r = this.prepareExternalUrl(n + uc(i));
                this._platformLocation.pushState(t, e, r)
              }
              replaceState(t, e, n, i) {
                const r = this.prepareExternalUrl(n + uc(i));
                this._platformLocation.replaceState(t, e, r)
              }
              forward() {
                this._platformLocation.forward()
              }
              back() {
                this._platformLocation.back()
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Xt(nc), Xt(pc, 8))
            }, t.\u0275prov = mt({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          mc = (() => {
            class t extends hc {
              constructor(t, e) {
                super(), this._platformLocation = t, this._baseHref = "", null != e && (this._baseHref = e)
              }
              onPopState(t) {
                this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
              }
              getBaseHref() {
                return this._baseHref
              }
              path(t = !1) {
                let e = this._platformLocation.hash;
                return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e
              }
              prepareExternalUrl(t) {
                const e = lc(this._baseHref, t);
                return e.length > 0 ? "#" + e : e
              }
              pushState(t, e, n, i) {
                let r = this.prepareExternalUrl(n + uc(i));
                0 == r.length && (r = this._platformLocation.pathname), this._platformLocation.pushState(t, e, r)
              }
              replaceState(t, e, n, i) {
                let r = this.prepareExternalUrl(n + uc(i));
                0 == r.length && (r = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, r)
              }
              forward() {
                this._platformLocation.forward()
              }
              back() {
                this._platformLocation.back()
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Xt(nc), Xt(pc, 8))
            }, t.\u0275prov = mt({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          gc = (() => {
            class t {
              constructor(t, e) {
                this._subject = new za, this._urlChangeListeners = [], this._platformStrategy = t;
                const n = this._platformStrategy.getBaseHref();
                this._platformLocation = e, this._baseHref = cc(_c(n)), this._platformStrategy.onPopState(t => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: t.state,
                    type: t.type
                  })
                })
              }
              path(t = !1) {
                return this.normalize(this._platformStrategy.path(t))
              }
              getState() {
                return this._platformLocation.getState()
              }
              isCurrentPathEqualTo(t, e = "") {
                return this.path() == this.normalize(t + uc(e))
              }
              normalize(e) {
                return t.stripTrailingSlash(function (t, e) {
                  return t && e.startsWith(t) ? e.substring(t.length) : e
                }(this._baseHref, _c(e)))
              }
              prepareExternalUrl(t) {
                return t && "/" !== t[0] && (t = "/" + t), this._platformStrategy.prepareExternalUrl(t)
              }
              go(t, e = "", n = null) {
                this._platformStrategy.pushState(n, "", t, e), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + uc(e)), n)
              }
              replaceState(t, e = "", n = null) {
                this._platformStrategy.replaceState(n, "", t, e), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + uc(e)), n)
              }
              forward() {
                this._platformStrategy.forward()
              }
              back() {
                this._platformStrategy.back()
              }
              onUrlChange(t) {
                this._urlChangeListeners.push(t), this.subscribe(t => {
                  this._notifyUrlChangeListeners(t.url, t.state)
                })
              }
              _notifyUrlChangeListeners(t = "", e) {
                this._urlChangeListeners.forEach(n => n(t, e))
              }
              subscribe(t, e, n) {
                return this._subject.subscribe({
                  next: t,
                  error: e,
                  complete: n
                })
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Xt(hc), Xt(nc))
            }, t.normalizeQueryParams = uc, t.joinWithSlash = lc, t.stripTrailingSlash = cc, t.\u0275prov = mt({
              factory: vc,
              token: t,
              providedIn: "root"
            }), t
          })();

        function vc() {
          return new gc(Xt(hc), Xt(nc))
        }

        function _c(t) {
          return t.replace(/\/index.html$/, "")
        }
        const yc = function () {
            var t = {
              Decimal: 0,
              Percent: 1,
              Currency: 2,
              Scientific: 3
            };
            return t[t.Decimal] = "Decimal", t[t.Percent] = "Percent", t[t.Currency] = "Currency", t[t.Scientific] = "Scientific", t
          }(),
          bc = function () {
            var t = {
              Zero: 0,
              One: 1,
              Two: 2,
              Few: 3,
              Many: 4,
              Other: 5
            };
            return t[t.Zero] = "Zero", t[t.One] = "One", t[t.Two] = "Two", t[t.Few] = "Few", t[t.Many] = "Many", t[t.Other] = "Other", t
          }(),
          wc = function () {
            var t = {
              Format: 0,
              Standalone: 1
            };
            return t[t.Format] = "Format", t[t.Standalone] = "Standalone", t
          }(),
          xc = function () {
            var t = {
              Narrow: 0,
              Abbreviated: 1,
              Wide: 2,
              Short: 3
            };
            return t[t.Narrow] = "Narrow", t[t.Abbreviated] = "Abbreviated", t[t.Wide] = "Wide", t[t.Short] = "Short", t
          }(),
          Sc = function () {
            var t = {
              Short: 0,
              Medium: 1,
              Long: 2,
              Full: 3
            };
            return t[t.Short] = "Short", t[t.Medium] = "Medium", t[t.Long] = "Long", t[t.Full] = "Full", t
          }(),
          Cc = function () {
            var t = {
              Decimal: 0,
              Group: 1,
              List: 2,
              PercentSign: 3,
              PlusSign: 4,
              MinusSign: 5,
              Exponential: 6,
              SuperscriptingExponent: 7,
              PerMille: 8,
              Infinity: 9,
              NaN: 10,
              TimeSeparator: 11,
              CurrencyDecimal: 12,
              CurrencyGroup: 13
            };
            return t[t.Decimal] = "Decimal", t[t.Group] = "Group", t[t.List] = "List", t[t.PercentSign] = "PercentSign", t[t.PlusSign] = "PlusSign", t[t.MinusSign] = "MinusSign", t[t.Exponential] = "Exponential", t[t.SuperscriptingExponent] = "SuperscriptingExponent", t[t.PerMille] = "PerMille", t[t.Infinity] = "Infinity", t[t.NaN] = "NaN", t[t.TimeSeparator] = "TimeSeparator", t[t.CurrencyDecimal] = "CurrencyDecimal", t[t.CurrencyGroup] = "CurrencyGroup", t
          }();

        function kc(t, e) {
          return Ac(ya(t)[wa.DateFormat], e)
        }

        function Pc(t, e) {
          return Ac(ya(t)[wa.TimeFormat], e)
        }

        function Ec(t, e) {
          return Ac(ya(t)[wa.DateTimeFormat], e)
        }

        function Tc(t, e) {
          const n = ya(t),
            i = n[wa.NumberSymbols][e];
          if (void 0 === i) {
            if (e === Cc.CurrencyDecimal) return n[wa.NumberSymbols][Cc.Decimal];
            if (e === Cc.CurrencyGroup) return n[wa.NumberSymbols][Cc.Group]
          }
          return i
        }

        function Lc(t) {
          if (!t[wa.ExtraData]) throw new Error(`Missing extra locale data for the locale "${t[wa.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)
        }

        function Ac(t, e) {
          for (let n = e; n > -1; n--)
            if (void 0 !== t[n]) return t[n];
          throw new Error("Locale data API: locale data undefined")
        }

        function Ic(t) {
          const [e, n] = t.split(":");
          return {
            hours: +e,
            minutes: +n
          }
        }
        const Mc = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
          Oc = {},
          Nc = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
          Rc = function () {
            var t = {
              Short: 0,
              ShortGMT: 1,
              Long: 2,
              Extended: 3
            };
            return t[t.Short] = "Short", t[t.ShortGMT] = "ShortGMT", t[t.Long] = "Long", t[t.Extended] = "Extended", t
          }(),
          Fc = function () {
            var t = {
              FullYear: 0,
              Month: 1,
              Date: 2,
              Hours: 3,
              Minutes: 4,
              Seconds: 5,
              FractionalSeconds: 6,
              Day: 7
            };
            return t[t.FullYear] = "FullYear", t[t.Month] = "Month", t[t.Date] = "Date", t[t.Hours] = "Hours", t[t.Minutes] = "Minutes", t[t.Seconds] = "Seconds", t[t.FractionalSeconds] = "FractionalSeconds", t[t.Day] = "Day", t
          }(),
          Dc = function () {
            var t = {
              DayPeriods: 0,
              Days: 1,
              Months: 2,
              Eras: 3
            };
            return t[t.DayPeriods] = "DayPeriods", t[t.Days] = "Days", t[t.Months] = "Months", t[t.Eras] = "Eras", t
          }();

        function zc(t, e) {
          return e && (t = t.replace(/\{([^}]+)}/g, (function (t, n) {
            return null != e && n in e ? e[n] : t
          }))), t
        }

        function jc(t, e, n = "-", i, r) {
          let s = "";
          (t < 0 || r && t <= 0) && (r ? t = 1 - t : (t = -t, s = n));
          let o = String(t);
          for (; o.length < e;) o = "0" + o;
          return i && (o = o.substr(o.length - e)), s + o
        }

        function Vc(t, e, n = 0, i = !1, r = !1) {
          return function (s, o) {
            let a = function (t, e) {
              switch (t) {
                case Fc.FullYear:
                  return e.getFullYear();
                case Fc.Month:
                  return e.getMonth();
                case Fc.Date:
                  return e.getDate();
                case Fc.Hours:
                  return e.getHours();
                case Fc.Minutes:
                  return e.getMinutes();
                case Fc.Seconds:
                  return e.getSeconds();
                case Fc.FractionalSeconds:
                  return e.getMilliseconds();
                case Fc.Day:
                  return e.getDay();
                default:
                  throw new Error(`Unknown DateType value "${t}".`)
              }
            }(t, s);
            if ((n > 0 || a > -n) && (a += n), t === Fc.Hours) 0 === a && -12 === n && (a = 12);
            else if (t === Fc.FractionalSeconds) return l = e, jc(a, 3).substr(0, l);
            var l;
            const c = Tc(o, Cc.MinusSign);
            return jc(a, e, c, i, r)
          }
        }

        function Uc(t, e, n = wc.Format, i = !1) {
          return function (r, s) {
            return function (t, e, n, i, r, s) {
              switch (n) {
                case Dc.Months:
                  return function (t, e, n) {
                    const i = ya(t),
                      r = Ac([i[wa.MonthsFormat], i[wa.MonthsStandalone]], e);
                    return Ac(r, n)
                  }(e, r, i)[t.getMonth()];
                case Dc.Days:
                  return function (t, e, n) {
                    const i = ya(t),
                      r = Ac([i[wa.DaysFormat], i[wa.DaysStandalone]], e);
                    return Ac(r, n)
                  }(e, r, i)[t.getDay()];
                case Dc.DayPeriods:
                  const o = t.getHours(),
                    a = t.getMinutes();
                  if (s) {
                    const t = function (t) {
                        const e = ya(t);
                        return Lc(e), (e[wa.ExtraData][2] || []).map(t => "string" == typeof t ? Ic(t) : [Ic(t[0]), Ic(t[1])])
                      }(e),
                      n = function (t, e, n) {
                        const i = ya(t);
                        Lc(i);
                        const r = Ac([i[wa.ExtraData][0], i[wa.ExtraData][1]], e) || [];
                        return Ac(r, n) || []
                      }(e, r, i);
                    let s;
                    if (t.forEach((t, e) => {
                        if (Array.isArray(t)) {
                          const {
                            hours: i,
                            minutes: r
                          } = t[0], {
                            hours: l,
                            minutes: c
                          } = t[1];
                          o >= i && a >= r && (o < l || o === l && a < c) && (s = n[e])
                        } else {
                          const {
                            hours: i,
                            minutes: r
                          } = t;
                          i === o && r === a && (s = n[e])
                        }
                      }), s) return s
                  }
                  return function (t, e, n) {
                    const i = ya(t),
                      r = Ac([i[wa.DayPeriodsFormat], i[wa.DayPeriodsStandalone]], e);
                    return Ac(r, n)
                  }(e, r, i)[o < 12 ? 0 : 1];
                case Dc.Eras:
                  return function (t, e) {
                    return Ac(ya(t)[wa.Eras], e)
                  }(e, i)[t.getFullYear() <= 0 ? 0 : 1];
                default:
                  throw new Error(`unexpected translation type ${n}`)
              }
            }(r, s, t, e, n, i)
          }
        }

        function Hc(t) {
          return function (e, n, i) {
            const r = -1 * i,
              s = Tc(n, Cc.MinusSign),
              o = r > 0 ? Math.floor(r / 60) : Math.ceil(r / 60);
            switch (t) {
              case Rc.Short:
                return (r >= 0 ? "+" : "") + jc(o, 2, s) + jc(Math.abs(r % 60), 2, s);
              case Rc.ShortGMT:
                return "GMT" + (r >= 0 ? "+" : "") + jc(o, 1, s);
              case Rc.Long:
                return "GMT" + (r >= 0 ? "+" : "") + jc(o, 2, s) + ":" + jc(Math.abs(r % 60), 2, s);
              case Rc.Extended:
                return 0 === i ? "Z" : (r >= 0 ? "+" : "") + jc(o, 2, s) + ":" + jc(Math.abs(r % 60), 2, s);
              default:
                throw new Error(`Unknown zone width "${t}"`)
            }
          }
        }

        function Bc(t, e = !1) {
          return function (n, i) {
            let r;
            if (e) {
              const t = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
                e = n.getDate();
              r = 1 + Math.floor((e + t) / 7)
            } else {
              const t = function (t) {
                  const e = new Date(t, 0, 1).getDay();
                  return new Date(t, 0, 1 + (e <= 4 ? 4 : 11) - e)
                }(n.getFullYear()),
                e = (s = n, new Date(s.getFullYear(), s.getMonth(), s.getDate() + (4 - s.getDay()))).getTime() - t.getTime();
              r = 1 + Math.round(e / 6048e5)
            }
            var s;
            return jc(r, t, Tc(i, Cc.MinusSign))
          }
        }
        const $c = {};

        function Zc(t, e) {
          t = t.replace(/:/g, "");
          const n = Date.parse("Jan 01, 1970 00:00:00 " + t) / 6e4;
          return isNaN(n) ? e : n
        }

        function qc(t) {
          return t instanceof Date && !isNaN(t.valueOf())
        }
        const Gc = /^(\d+)?\.((\d+)(-(\d+))?)?$/;

        function Wc(t) {
          const e = parseInt(t);
          if (isNaN(e)) throw new Error("Invalid integer literal when parsing " + t);
          return e
        }
        class Kc {}
        let Yc = (() => {
          class t extends Kc {
            constructor(t) {
              super(), this.locale = t
            }
            getPluralCategory(t, e) {
              switch (function (t) {
                return ya(t)[wa.PluralCase]
              }(e || this.locale)(t)) {
                case bc.Zero:
                  return "zero";
                case bc.One:
                  return "one";
                case bc.Two:
                  return "two";
                case bc.Few:
                  return "few";
                case bc.Many:
                  return "many";
                default:
                  return "other"
              }
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Xt(ul))
          }, t.\u0275prov = mt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();

        function Jc(t, e) {
          e = encodeURIComponent(e);
          for (const n of t.split(";")) {
            const t = n.indexOf("="),
              [i, r] = -1 == t ? [n, ""] : [n.slice(0, t), n.slice(t + 1)];
            if (i.trim() === e) return decodeURIComponent(r)
          }
          return null
        }
        let Qc = (() => {
          class t {
            constructor(t, e, n, i) {
              this._iterableDiffers = t, this._keyValueDiffers = e, this._ngEl = n, this._renderer = i, this._iterableDiffer = null, this._keyValueDiffer = null, this._initialClasses = [], this._rawClass = null
            }
            set klass(t) {
              this._removeClasses(this._initialClasses), this._initialClasses = "string" == typeof t ? t.split(/\s+/) : [], this._applyClasses(this._initialClasses), this._applyClasses(this._rawClass)
            }
            set ngClass(t) {
              this._removeClasses(this._rawClass), this._applyClasses(this._initialClasses), this._iterableDiffer = null, this._keyValueDiffer = null, this._rawClass = "string" == typeof t ? t.split(/\s+/) : t, this._rawClass && (As(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create())
            }
            ngDoCheck() {
              if (this._iterableDiffer) {
                const t = this._iterableDiffer.diff(this._rawClass);
                t && this._applyIterableChanges(t)
              } else if (this._keyValueDiffer) {
                const t = this._keyValueDiffer.diff(this._rawClass);
                t && this._applyKeyValueChanges(t)
              }
            }
            _applyKeyValueChanges(t) {
              t.forEachAddedItem(t => this._toggleClass(t.key, t.currentValue)), t.forEachChangedItem(t => this._toggleClass(t.key, t.currentValue)), t.forEachRemovedItem(t => {
                t.previousValue && this._toggleClass(t.key, !1)
              })
            }
            _applyIterableChanges(t) {
              t.forEachAddedItem(t => {
                if ("string" != typeof t.item) throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${kt(t.item)}`);
                this._toggleClass(t.item, !0)
              }), t.forEachRemovedItem(t => this._toggleClass(t.item, !1))
            }
            _applyClasses(t) {
              t && (Array.isArray(t) || t instanceof Set ? t.forEach(t => this._toggleClass(t, !0)) : Object.keys(t).forEach(e => this._toggleClass(e, !!t[e])))
            }
            _removeClasses(t) {
              t && (Array.isArray(t) || t instanceof Set ? t.forEach(t => this._toggleClass(t, !1)) : Object.keys(t).forEach(t => this._toggleClass(t, !1)))
            }
            _toggleClass(t, e) {
              (t = t.trim()) && t.split(/\s+/g).forEach(t => {
                e ? this._renderer.addClass(this._ngEl.nativeElement, t) : this._renderer.removeClass(this._ngEl.nativeElement, t)
              })
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(js(ea), js(na), js(Fo), js(Vo))
          }, t.\u0275dir = xe({
            type: t,
            selectors: [
              ["", "ngClass", ""]
            ],
            inputs: {
              klass: ["class", "klass"],
              ngClass: "ngClass"
            }
          }), t
        })();
        class Xc {
          constructor(t, e, n, i) {
            this.$implicit = t, this.ngForOf = e, this.index = n, this.count = i
          }
          get first() {
            return 0 === this.index
          }
          get last() {
            return this.index === this.count - 1
          }
          get even() {
            return this.index % 2 == 0
          }
          get odd() {
            return !this.even
          }
        }
        let tu = (() => {
          class t {
            constructor(t, e, n) {
              this._viewContainer = t, this._template = e, this._differs = n, this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null
            }
            set ngForOf(t) {
              this._ngForOf = t, this._ngForOfDirty = !0
            }
            set ngForTrackBy(t) {
              fi() && null != t && "function" != typeof t && console && console.warn && console.warn(`trackBy must be a function, but received ${JSON.stringify(t)}. ` + "See https://angular.io/api/common/NgForOf#change-propagation for more information."), this._trackByFn = t
            }
            get ngForTrackBy() {
              return this._trackByFn
            }
            set ngForTemplate(t) {
              t && (this._template = t)
            }
            ngDoCheck() {
              if (this._ngForOfDirty) {
                this._ngForOfDirty = !1;
                const n = this._ngForOf;
                if (!this._differ && n) try {
                  this._differ = this._differs.find(n).create(this.ngForTrackBy)
                } catch (e) {
                  throw new Error(`Cannot find a differ supporting object '${n}' of type '${t=n,t.name||typeof t}'. NgFor only supports binding to Iterables such as Arrays.`)
                }
              }
              var t;
              if (this._differ) {
                const t = this._differ.diff(this._ngForOf);
                t && this._applyChanges(t)
              }
            }
            _applyChanges(t) {
              const e = [];
              t.forEachOperation((t, n, i) => {
                if (null == t.previousIndex) {
                  const n = this._viewContainer.createEmbeddedView(this._template, new Xc(null, this._ngForOf, -1, -1), null === i ? void 0 : i),
                    r = new eu(t, n);
                  e.push(r)
                } else if (null == i) this._viewContainer.remove(null === n ? void 0 : n);
                else if (null !== n) {
                  const r = this._viewContainer.get(n);
                  this._viewContainer.move(r, i);
                  const s = new eu(t, r);
                  e.push(s)
                }
              });
              for (let n = 0; n < e.length; n++) this._perViewChange(e[n].view, e[n].record);
              for (let n = 0, i = this._viewContainer.length; n < i; n++) {
                const t = this._viewContainer.get(n);
                t.context.index = n, t.context.count = i, t.context.ngForOf = this._ngForOf
              }
              t.forEachIdentityChange(t => {
                this._viewContainer.get(t.currentIndex).context.$implicit = t.item
              })
            }
            _perViewChange(t, e) {
              t.context.$implicit = e.item
            }
            static ngTemplateContextGuard(t, e) {
              return !0
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(js(la), js(oa), js(ea))
          }, t.\u0275dir = xe({
            type: t,
            selectors: [
              ["", "ngFor", "", "ngForOf", ""]
            ],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate"
            }
          }), t
        })();
        class eu {
          constructor(t, e) {
            this.record = t, this.view = e
          }
        }
        let nu = (() => {
          class t {
            constructor(t, e) {
              this._viewContainer = t, this._context = new iu, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = e
            }
            set ngIf(t) {
              this._context.$implicit = this._context.ngIf = t, this._updateView()
            }
            set ngIfThen(t) {
              ru("ngIfThen", t), this._thenTemplateRef = t, this._thenViewRef = null, this._updateView()
            }
            set ngIfElse(t) {
              ru("ngIfElse", t), this._elseTemplateRef = t, this._elseViewRef = null, this._updateView()
            }
            _updateView() {
              this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
            }
            static ngTemplateContextGuard(t, e) {
              return !0
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(js(la), js(oa))
          }, t.\u0275dir = xe({
            type: t,
            selectors: [
              ["", "ngIf", ""]
            ],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse"
            }
          }), t
        })();
        class iu {
          constructor() {
            this.$implicit = null, this.ngIf = null
          }
        }

        function ru(t, e) {
          if (e && !e.createEmbeddedView) throw new Error(`${t} must be a TemplateRef, but received '${kt(e)}'.`)
        }

        function su(t, e) {
          return Error(`InvalidPipeArgument: '${e}' for pipe '${kt(t)}'`)
        }
        let ou = (() => {
            class t {
              constructor(t) {
                this.locale = t
              }
              transform(e, n = "mediumDate", i, r) {
                if (null == e || "" === e || e != e) return null;
                try {
                  return function (t, e, n, i) {
                    let r = function (t) {
                      if (qc(t)) return t;
                      if ("number" == typeof t && !isNaN(t)) return new Date(t);
                      if ("string" == typeof t) {
                        t = t.trim();
                        const e = parseFloat(t);
                        if (!isNaN(t - e)) return new Date(e);
                        if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(t)) {
                          const [e, n, i] = t.split("-").map(t => +t);
                          return new Date(e, n - 1, i)
                        }
                        let n;
                        if (n = t.match(Mc)) return function (t) {
                          const e = new Date(0);
                          let n = 0,
                            i = 0;
                          const r = t[8] ? e.setUTCFullYear : e.setFullYear,
                            s = t[8] ? e.setUTCHours : e.setHours;
                          t[9] && (n = Number(t[9] + t[10]), i = Number(t[9] + t[11])), r.call(e, Number(t[1]), Number(t[2]) - 1, Number(t[3]));
                          const o = Number(t[4] || 0) - n,
                            a = Number(t[5] || 0) - i,
                            l = Number(t[6] || 0),
                            c = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
                          return s.call(e, o, a, l, c), e
                        }(n)
                      }
                      const e = new Date(t);
                      if (!qc(e)) throw new Error(`Unable to convert "${t}" into a date`);
                      return e
                    }(t);
                    e = function t(e, n) {
                      const i = function (t) {
                        return ya(t)[wa.LocaleId]
                      }(e);
                      if (Oc[i] = Oc[i] || {}, Oc[i][n]) return Oc[i][n];
                      let r = "";
                      switch (n) {
                        case "shortDate":
                          r = kc(e, Sc.Short);
                          break;
                        case "mediumDate":
                          r = kc(e, Sc.Medium);
                          break;
                        case "longDate":
                          r = kc(e, Sc.Long);
                          break;
                        case "fullDate":
                          r = kc(e, Sc.Full);
                          break;
                        case "shortTime":
                          r = Pc(e, Sc.Short);
                          break;
                        case "mediumTime":
                          r = Pc(e, Sc.Medium);
                          break;
                        case "longTime":
                          r = Pc(e, Sc.Long);
                          break;
                        case "fullTime":
                          r = Pc(e, Sc.Full);
                          break;
                        case "short":
                          const n = t(e, "shortTime"),
                            i = t(e, "shortDate");
                          r = zc(Ec(e, Sc.Short), [n, i]);
                          break;
                        case "medium":
                          const s = t(e, "mediumTime"),
                            o = t(e, "mediumDate");
                          r = zc(Ec(e, Sc.Medium), [s, o]);
                          break;
                        case "long":
                          const a = t(e, "longTime"),
                            l = t(e, "longDate");
                          r = zc(Ec(e, Sc.Long), [a, l]);
                          break;
                        case "full":
                          const c = t(e, "fullTime"),
                            u = t(e, "fullDate");
                          r = zc(Ec(e, Sc.Full), [c, u])
                      }
                      return r && (Oc[i][n] = r), r
                    }(n, e) || e;
                    let s, o = [];
                    for (; e;) {
                      if (s = Nc.exec(e), !s) {
                        o.push(e);
                        break
                      } {
                        o = o.concat(s.slice(1));
                        const t = o.pop();
                        if (!t) break;
                        e = t
                      }
                    }
                    let a = r.getTimezoneOffset();
                    i && (a = Zc(i, a), r = function (t, e, n) {
                      const i = t.getTimezoneOffset();
                      return function (t, e) {
                        return (t = new Date(t.getTime())).setMinutes(t.getMinutes() + e), t
                      }(t, -1 * (Zc(e, i) - i))
                    }(r, i));
                    let l = "";
                    return o.forEach(t => {
                      const e = function (t) {
                        if ($c[t]) return $c[t];
                        let e;
                        switch (t) {
                          case "G":
                          case "GG":
                          case "GGG":
                            e = Uc(Dc.Eras, xc.Abbreviated);
                            break;
                          case "GGGG":
                            e = Uc(Dc.Eras, xc.Wide);
                            break;
                          case "GGGGG":
                            e = Uc(Dc.Eras, xc.Narrow);
                            break;
                          case "y":
                            e = Vc(Fc.FullYear, 1, 0, !1, !0);
                            break;
                          case "yy":
                            e = Vc(Fc.FullYear, 2, 0, !0, !0);
                            break;
                          case "yyy":
                            e = Vc(Fc.FullYear, 3, 0, !1, !0);
                            break;
                          case "yyyy":
                            e = Vc(Fc.FullYear, 4, 0, !1, !0);
                            break;
                          case "M":
                          case "L":
                            e = Vc(Fc.Month, 1, 1);
                            break;
                          case "MM":
                          case "LL":
                            e = Vc(Fc.Month, 2, 1);
                            break;
                          case "MMM":
                            e = Uc(Dc.Months, xc.Abbreviated);
                            break;
                          case "MMMM":
                            e = Uc(Dc.Months, xc.Wide);
                            break;
                          case "MMMMM":
                            e = Uc(Dc.Months, xc.Narrow);
                            break;
                          case "LLL":
                            e = Uc(Dc.Months, xc.Abbreviated, wc.Standalone);
                            break;
                          case "LLLL":
                            e = Uc(Dc.Months, xc.Wide, wc.Standalone);
                            break;
                          case "LLLLL":
                            e = Uc(Dc.Months, xc.Narrow, wc.Standalone);
                            break;
                          case "w":
                            e = Bc(1);
                            break;
                          case "ww":
                            e = Bc(2);
                            break;
                          case "W":
                            e = Bc(1, !0);
                            break;
                          case "d":
                            e = Vc(Fc.Date, 1);
                            break;
                          case "dd":
                            e = Vc(Fc.Date, 2);
                            break;
                          case "E":
                          case "EE":
                          case "EEE":
                            e = Uc(Dc.Days, xc.Abbreviated);
                            break;
                          case "EEEE":
                            e = Uc(Dc.Days, xc.Wide);
                            break;
                          case "EEEEE":
                            e = Uc(Dc.Days, xc.Narrow);
                            break;
                          case "EEEEEE":
                            e = Uc(Dc.Days, xc.Short);
                            break;
                          case "a":
                          case "aa":
                          case "aaa":
                            e = Uc(Dc.DayPeriods, xc.Abbreviated);
                            break;
                          case "aaaa":
                            e = Uc(Dc.DayPeriods, xc.Wide);
                            break;
                          case "aaaaa":
                            e = Uc(Dc.DayPeriods, xc.Narrow);
                            break;
                          case "b":
                          case "bb":
                          case "bbb":
                            e = Uc(Dc.DayPeriods, xc.Abbreviated, wc.Standalone, !0);
                            break;
                          case "bbbb":
                            e = Uc(Dc.DayPeriods, xc.Wide, wc.Standalone, !0);
                            break;
                          case "bbbbb":
                            e = Uc(Dc.DayPeriods, xc.Narrow, wc.Standalone, !0);
                            break;
                          case "B":
                          case "BB":
                          case "BBB":
                            e = Uc(Dc.DayPeriods, xc.Abbreviated, wc.Format, !0);
                            break;
                          case "BBBB":
                            e = Uc(Dc.DayPeriods, xc.Wide, wc.Format, !0);
                            break;
                          case "BBBBB":
                            e = Uc(Dc.DayPeriods, xc.Narrow, wc.Format, !0);
                            break;
                          case "h":
                            e = Vc(Fc.Hours, 1, -12);
                            break;
                          case "hh":
                            e = Vc(Fc.Hours, 2, -12);
                            break;
                          case "H":
                            e = Vc(Fc.Hours, 1);
                            break;
                          case "HH":
                            e = Vc(Fc.Hours, 2);
                            break;
                          case "m":
                            e = Vc(Fc.Minutes, 1);
                            break;
                          case "mm":
                            e = Vc(Fc.Minutes, 2);
                            break;
                          case "s":
                            e = Vc(Fc.Seconds, 1);
                            break;
                          case "ss":
                            e = Vc(Fc.Seconds, 2);
                            break;
                          case "S":
                            e = Vc(Fc.FractionalSeconds, 1);
                            break;
                          case "SS":
                            e = Vc(Fc.FractionalSeconds, 2);
                            break;
                          case "SSS":
                            e = Vc(Fc.FractionalSeconds, 3);
                            break;
                          case "Z":
                          case "ZZ":
                          case "ZZZ":
                            e = Hc(Rc.Short);
                            break;
                          case "ZZZZZ":
                            e = Hc(Rc.Extended);
                            break;
                          case "O":
                          case "OO":
                          case "OOO":
                          case "z":
                          case "zz":
                          case "zzz":
                            e = Hc(Rc.ShortGMT);
                            break;
                          case "OOOO":
                          case "ZZZZ":
                          case "zzzz":
                            e = Hc(Rc.Long);
                            break;
                          default:
                            return null
                        }
                        return $c[t] = e, e
                      }(t);
                      l += e ? e(r, n, a) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                    }), l
                  }(e, n, r || this.locale, i)
                } catch (s) {
                  throw su(t, s.message)
                }
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(js(ul))
            }, t.\u0275pipe = Se({
              name: "date",
              type: t,
              pure: !0
            }), t
          })(),
          au = (() => {
            class t {
              transform(t) {
                return JSON.stringify(t, null, 2)
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)
            }, t.\u0275pipe = Se({
              name: "json",
              type: t,
              pure: !1
            }), t
          })(),
          lu = (() => {
            class t {
              constructor(t) {
                this._locale = t
              }
              transform(e, n, i) {
                if (function (t) {
                    return null == t || "" === t || t != t
                  }(e)) return null;
                i = i || this._locale;
                try {
                  return function (t, e, n) {
                    return function (t, e, n, i, r, s, o = !1) {
                      let a = "",
                        l = !1;
                      if (isFinite(t)) {
                        let c = function (t) {
                          let e, n, i, r, s, o = Math.abs(t) + "",
                            a = 0;
                          for ((n = o.indexOf(".")) > -1 && (o = o.replace(".", "")), (i = o.search(/e/i)) > 0 ? (n < 0 && (n = i), n += +o.slice(i + 1), o = o.substring(0, i)) : n < 0 && (n = o.length), i = 0;
                            "0" === o.charAt(i); i++);
                          if (i === (s = o.length)) e = [0], n = 1;
                          else {
                            for (s--;
                              "0" === o.charAt(s);) s--;
                            for (n -= i, e = [], r = 0; i <= s; i++, r++) e[r] = Number(o.charAt(i))
                          }
                          return n > 22 && (e = e.splice(0, 21), a = n - 1, n = 1), {
                            digits: e,
                            exponent: a,
                            integerLen: n
                          }
                        }(t);
                        o && (c = function (t) {
                          if (0 === t.digits[0]) return t;
                          const e = t.digits.length - t.integerLen;
                          return t.exponent ? t.exponent += 2 : (0 === e ? t.digits.push(0, 0) : 1 === e && t.digits.push(0), t.integerLen += 2), t
                        }(c));
                        let u = e.minInt,
                          h = e.minFrac,
                          d = e.maxFrac;
                        if (s) {
                          const t = s.match(Gc);
                          if (null === t) throw new Error(`${s} is not a valid digit info`);
                          const e = t[1],
                            n = t[3],
                            i = t[5];
                          null != e && (u = Wc(e)), null != n && (h = Wc(n)), null != i ? d = Wc(i) : null != n && h > d && (d = h)
                        }! function (t, e, n) {
                          if (e > n) throw new Error(`The minimum number of digits after fraction (${e}) is higher than the maximum (${n}).`);
                          let i = t.digits,
                            r = i.length - t.integerLen;
                          const s = Math.min(Math.max(e, r), n);
                          let o = s + t.integerLen,
                            a = i[o];
                          if (o > 0) {
                            i.splice(Math.max(t.integerLen, o));
                            for (let t = o; t < i.length; t++) i[t] = 0
                          } else {
                            r = Math.max(0, r), t.integerLen = 1, i.length = Math.max(1, o = s + 1), i[0] = 0;
                            for (let t = 1; t < o; t++) i[t] = 0
                          }
                          if (a >= 5)
                            if (o - 1 < 0) {
                              for (let e = 0; e > o; e--) i.unshift(0), t.integerLen++;
                              i.unshift(1), t.integerLen++
                            } else i[o - 1]++;
                          for (; r < Math.max(0, s); r++) i.push(0);
                          let l = 0 !== s;
                          const c = e + t.integerLen,
                            u = i.reduceRight((function (t, e, n, i) {
                              return i[n] = (e += t) < 10 ? e : e - 10, l && (0 === i[n] && n >= c ? i.pop() : l = !1), e >= 10 ? 1 : 0
                            }), 0);
                          u && (i.unshift(u), t.integerLen++)
                        }(c, h, d);
                        let p = c.digits,
                          f = c.integerLen;
                        const m = c.exponent;
                        let g = [];
                        for (l = p.every(t => !t); f < u; f++) p.unshift(0);
                        for (; f < 0; f++) p.unshift(0);
                        f > 0 ? g = p.splice(f, p.length) : (g = p, p = [0]);
                        const v = [];
                        for (p.length >= e.lgSize && v.unshift(p.splice(-e.lgSize, p.length).join("")); p.length > e.gSize;) v.unshift(p.splice(-e.gSize, p.length).join(""));
                        p.length && v.unshift(p.join("")), a = v.join(Tc(n, i)), g.length && (a += Tc(n, r) + g.join("")), m && (a += Tc(n, Cc.Exponential) + "+" + m)
                      } else a = Tc(n, Cc.Infinity);
                      return a = t < 0 && !l ? e.negPre + a + e.negSuf : e.posPre + a + e.posSuf, a
                    }(t, function (t, e = "-") {
                      const n = {
                          minInt: 1,
                          minFrac: 0,
                          maxFrac: 0,
                          posPre: "",
                          posSuf: "",
                          negPre: "",
                          negSuf: "",
                          gSize: 0,
                          lgSize: 0
                        },
                        i = t.split(";"),
                        r = i[0],
                        s = i[1],
                        o = -1 !== r.indexOf(".") ? r.split(".") : [r.substring(0, r.lastIndexOf("0") + 1), r.substring(r.lastIndexOf("0") + 1)],
                        a = o[0],
                        l = o[1] || "";
                      n.posPre = a.substr(0, a.indexOf("#"));
                      for (let u = 0; u < l.length; u++) {
                        const t = l.charAt(u);
                        "0" === t ? n.minFrac = n.maxFrac = u + 1 : "#" === t ? n.maxFrac = u + 1 : n.posSuf += t
                      }
                      const c = a.split(",");
                      if (n.gSize = c[1] ? c[1].length : 0, n.lgSize = c[2] || c[1] ? (c[2] || c[1]).length : 0, s) {
                        const t = r.length - n.posPre.length - n.posSuf.length,
                          e = s.indexOf("#");
                        n.negPre = s.substr(0, e).replace(/'/g, ""), n.negSuf = s.substr(e + t).replace(/'/g, "")
                      } else n.negPre = e + n.posPre, n.negSuf = n.posSuf;
                      return n
                    }(function (t, e) {
                      return ya(t)[wa.NumberFormats][e]
                    }(e, yc.Decimal), Tc(e, Cc.MinusSign)), e, Cc.Group, Cc.Decimal, n)
                  }(function (t) {
                    if ("string" == typeof t && !isNaN(Number(t) - parseFloat(t))) return Number(t);
                    if ("number" != typeof t) throw new Error(`${t} is not a number`);
                    return t
                  }(e), i, n)
                } catch (r) {
                  throw su(t, r.message)
                }
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(js(ul))
            }, t.\u0275pipe = Se({
              name: "number",
              type: t,
              pure: !0
            }), t
          })(),
          cu = (() => {
            class t {}
            return t.\u0275mod = be({
              type: t
            }), t.\u0275inj = gt({
              factory: function (e) {
                return new(e || t)
              },
              providers: [{
                provide: Kc,
                useClass: Yc
              }]
            }), t
          })();

        function uu(t) {
          return "browser" === t
        }
        let hu = (() => {
          class t {}
          return t.\u0275prov = mt({
            token: t,
            providedIn: "root",
            factory: () => new du(Xt(ec), window, Xt(ci))
          }), t
        })();
        class du {
          constructor(t, e, n) {
            this.document = t, this.window = e, this.errorHandler = n, this.offset = () => [0, 0]
          }
          setOffset(t) {
            this.offset = Array.isArray(t) ? () => t : t
          }
          getScrollPosition() {
            return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0]
          }
          scrollToPosition(t) {
            this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1])
          }
          scrollToAnchor(t) {
            if (this.supportScrollRestoration()) {
              t = this.window.CSS && this.window.CSS.escape ? this.window.CSS.escape(t) : t.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, "\\$1");
              try {
                const e = this.document.querySelector(`#${t}`);
                if (e) return void this.scrollToElement(e);
                const n = this.document.querySelector(`[name='${t}']`);
                if (n) return void this.scrollToElement(n)
              } catch (e) {
                this.errorHandler.handleError(e)
              }
            }
          }
          setHistoryScrollRestoration(t) {
            if (this.supportScrollRestoration()) {
              const e = this.window.history;
              e && e.scrollRestoration && (e.scrollRestoration = t)
            }
          }
          scrollToElement(t) {
            const e = t.getBoundingClientRect(),
              n = e.left + this.window.pageXOffset,
              i = e.top + this.window.pageYOffset,
              r = this.offset();
            this.window.scrollTo(n - r[0], i - r[1])
          }
          supportScrollRestoration() {
            try {
              return !!this.window && !!this.window.scrollTo
            } catch (t) {
              return !1
            }
          }
        }
        class pu extends class extends class {} {
          constructor() {
            super()
          }
          supportsDOMEvents() {
            return !0
          }
        } {
          static makeCurrent() {
            var t;
            t = new pu, Xl || (Xl = t)
          }
          getProperty(t, e) {
            return t[e]
          }
          log(t) {
            window.console && window.console.log && window.console.log(t)
          }
          logGroup(t) {
            window.console && window.console.group && window.console.group(t)
          }
          logGroupEnd() {
            window.console && window.console.groupEnd && window.console.groupEnd()
          }
          onAndCancel(t, e, n) {
            return t.addEventListener(e, n, !1), () => {
              t.removeEventListener(e, n, !1)
            }
          }
          dispatchEvent(t, e) {
            t.dispatchEvent(e)
          }
          remove(t) {
            return t.parentNode && t.parentNode.removeChild(t), t
          }
          getValue(t) {
            return t.value
          }
          createElement(t, e) {
            return (e = e || this.getDefaultDocument()).createElement(t)
          }
          createHtmlDocument() {
            return document.implementation.createHTMLDocument("fakeTitle")
          }
          getDefaultDocument() {
            return document
          }
          isElementNode(t) {
            return t.nodeType === Node.ELEMENT_NODE
          }
          isShadowRoot(t) {
            return t instanceof DocumentFragment
          }
          getGlobalEventTarget(t, e) {
            return "window" === e ? window : "document" === e ? t : "body" === e ? t.body : null
          }
          getHistory() {
            return window.history
          }
          getLocation() {
            return window.location
          }
          getBaseHref(t) {
            const e = mu || (mu = document.querySelector("base"), mu) ? mu.getAttribute("href") : null;
            return null == e ? null : (n = e, fu || (fu = document.createElement("a")), fu.setAttribute("href", n), "/" === fu.pathname.charAt(0) ? fu.pathname : "/" + fu.pathname);
            var n
          }
          resetBaseElement() {
            mu = null
          }
          getUserAgent() {
            return window.navigator.userAgent
          }
          performanceNow() {
            return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
          }
          supportsCookies() {
            return !0
          }
          getCookie(t) {
            return Jc(document.cookie, t)
          }
        }
        let fu, mu = null;
        const gu = new Bt("TRANSITION_ID"),
          vu = [{
            provide: el,
            useFactory: function (t, e, n) {
              return () => {
                n.get(nl).donePromise.then(() => {
                  const n = tc();
                  Array.prototype.slice.apply(e.querySelectorAll("style[ng-transition]")).filter(e => e.getAttribute("ng-transition") === t).forEach(t => n.remove(t))
                })
              }
            },
            deps: [gu, ec, bs],
            multi: !0
          }];
        class _u {
          static init() {
            var t;
            t = new _u, Rl = t
          }
          addToWindow(t) {
            Rt.getAngularTestability = (e, n = !0) => {
              const i = t.findTestabilityInTree(e, n);
              if (null == i) throw new Error("Could not find testability for element.");
              return i
            }, Rt.getAllAngularTestabilities = () => t.getAllTestabilities(), Rt.getAllAngularRootElements = () => t.getAllRootElements(), Rt.frameworkStabilizers || (Rt.frameworkStabilizers = []), Rt.frameworkStabilizers.push(t => {
              const e = Rt.getAllAngularTestabilities();
              let n = e.length,
                i = !1;
              const r = function (e) {
                i = i || e, n--, 0 == n && t(i)
              };
              e.forEach((function (t) {
                t.whenStable(r)
              }))
            })
          }
          findTestabilityInTree(t, e, n) {
            if (null == e) return null;
            const i = t.getTestability(e);
            return null != i ? i : n ? tc().isShadowRoot(e) ? this.findTestabilityInTree(t, e.host, !0) : this.findTestabilityInTree(t, e.parentElement, !0) : null
          }
        }
        const yu = new Bt("EventManagerPlugins");
        let bu = (() => {
          class t {
            constructor(t, e) {
              this._zone = e, this._eventNameToPlugin = new Map, t.forEach(t => t.manager = this), this._plugins = t.slice().reverse()
            }
            addEventListener(t, e, n) {
              return this._findPluginFor(e).addEventListener(t, e, n)
            }
            addGlobalEventListener(t, e, n) {
              return this._findPluginFor(e).addGlobalEventListener(t, e, n)
            }
            getZone() {
              return this._zone
            }
            _findPluginFor(t) {
              const e = this._eventNameToPlugin.get(t);
              if (e) return e;
              const n = this._plugins;
              for (let i = 0; i < n.length; i++) {
                const e = n[i];
                if (e.supports(t)) return this._eventNameToPlugin.set(t, e), e
              }
              throw new Error(`No event manager plugin found for event ${t}`)
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Xt(yu), Xt(Sl))
          }, t.\u0275prov = mt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        class wu {
          constructor(t) {
            this._doc = t
          }
          addGlobalEventListener(t, e, n) {
            const i = tc().getGlobalEventTarget(this._doc, t);
            if (!i) throw new Error(`Unsupported event target ${i} for event ${e}`);
            return this.addEventListener(i, e, n)
          }
        }
        let xu = (() => {
            class t {
              constructor() {
                this._stylesSet = new Set
              }
              addStyles(t) {
                const e = new Set;
                t.forEach(t => {
                  this._stylesSet.has(t) || (this._stylesSet.add(t), e.add(t))
                }), this.onStylesAdded(e)
              }
              onStylesAdded(t) {}
              getAllStyles() {
                return Array.from(this._stylesSet)
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)
            }, t.\u0275prov = mt({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          Su = (() => {
            class t extends xu {
              constructor(t) {
                super(), this._doc = t, this._hostNodes = new Set, this._styleNodes = new Set, this._hostNodes.add(t.head)
              }
              _addStylesToHost(t, e) {
                t.forEach(t => {
                  const n = this._doc.createElement("style");
                  n.textContent = t, this._styleNodes.add(e.appendChild(n))
                })
              }
              addHost(t) {
                this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t)
              }
              removeHost(t) {
                this._hostNodes.delete(t)
              }
              onStylesAdded(t) {
                this._hostNodes.forEach(e => this._addStylesToHost(t, e))
              }
              ngOnDestroy() {
                this._styleNodes.forEach(t => tc().remove(t))
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Xt(ec))
            }, t.\u0275prov = mt({
              token: t,
              factory: t.\u0275fac
            }), t
          })();
        const Cu = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: "http://www.w3.org/1999/xhtml",
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
          },
          ku = /%COMP%/g;

        function Pu(t, e, n) {
          for (let i = 0; i < e.length; i++) {
            let r = e[i];
            Array.isArray(r) ? Pu(t, r, n) : (r = r.replace(ku, t), n.push(r))
          }
          return n
        }

        function Eu(t) {
          return e => {
            if ("__ngUnwrap__" === e) return t;
            !1 === t(e) && (e.preventDefault(), e.returnValue = !1)
          }
        }
        let Tu = (() => {
          class t {
            constructor(t, e, n) {
              this.eventManager = t, this.sharedStylesHost = e, this.appId = n, this.rendererByCompId = new Map, this.defaultRenderer = new Lu(t)
            }
            createRenderer(t, e) {
              if (!t || !e) return this.defaultRenderer;
              switch (e.encapsulation) {
                case de.Emulated: {
                  let n = this.rendererByCompId.get(e.id);
                  return n || (n = new Au(this.eventManager, this.sharedStylesHost, e, this.appId), this.rendererByCompId.set(e.id, n)), n.applyToHost(t), n
                }
                case de.Native:
                case de.ShadowDom:
                  return new Iu(this.eventManager, this.sharedStylesHost, t, e);
                default:
                  if (!this.rendererByCompId.has(e.id)) {
                    const t = Pu(e.id, e.styles, []);
                    this.sharedStylesHost.addStyles(t), this.rendererByCompId.set(e.id, this.defaultRenderer)
                  }
                  return this.defaultRenderer
              }
            }
            begin() {}
            end() {}
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Xt(bu), Xt(Su), Xt(il))
          }, t.\u0275prov = mt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        class Lu {
          constructor(t) {
            this.eventManager = t, this.data = Object.create(null)
          }
          destroy() {}
          createElement(t, e) {
            return e ? document.createElementNS(Cu[e] || e, t) : document.createElement(t)
          }
          createComment(t) {
            return document.createComment(t)
          }
          createText(t) {
            return document.createTextNode(t)
          }
          appendChild(t, e) {
            t.appendChild(e)
          }
          insertBefore(t, e, n) {
            t && t.insertBefore(e, n)
          }
          removeChild(t, e) {
            t && t.removeChild(e)
          }
          selectRootElement(t, e) {
            let n = "string" == typeof t ? document.querySelector(t) : t;
            if (!n) throw new Error(`The selector "${t}" did not match any elements`);
            return e || (n.textContent = ""), n
          }
          parentNode(t) {
            return t.parentNode
          }
          nextSibling(t) {
            return t.nextSibling
          }
          setAttribute(t, e, n, i) {
            if (i) {
              e = i + ":" + e;
              const r = Cu[i];
              r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n)
            } else t.setAttribute(e, n)
          }
          removeAttribute(t, e, n) {
            if (n) {
              const i = Cu[n];
              i ? t.removeAttributeNS(i, e) : t.removeAttribute(`${n}:${e}`)
            } else t.removeAttribute(e)
          }
          addClass(t, e) {
            t.classList.add(e)
          }
          removeClass(t, e) {
            t.classList.remove(e)
          }
          setStyle(t, e, n, i) {
            i & jo.DashCase ? t.style.setProperty(e, n, i & jo.Important ? "important" : "") : t.style[e] = n
          }
          removeStyle(t, e, n) {
            n & jo.DashCase ? t.style.removeProperty(e) : t.style[e] = ""
          }
          setProperty(t, e, n) {
            t[e] = n
          }
          setValue(t, e) {
            t.nodeValue = e
          }
          listen(t, e, n) {
            return "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, Eu(n)) : this.eventManager.addEventListener(t, e, Eu(n))
          }
        }
        class Au extends Lu {
          constructor(t, e, n, i) {
            super(t), this.component = n;
            const r = Pu(i + "-" + n.id, n.styles, []);
            e.addStyles(r), this.contentAttr = "_ngcontent-%COMP%".replace(ku, i + "-" + n.id), this.hostAttr = function (t) {
              return "_nghost-%COMP%".replace(ku, t)
            }(i + "-" + n.id)
          }
          applyToHost(t) {
            super.setAttribute(t, this.hostAttr, "")
          }
          createElement(t, e) {
            const n = super.createElement(t, e);
            return super.setAttribute(n, this.contentAttr, ""), n
          }
        }
        class Iu extends Lu {
          constructor(t, e, n, i) {
            super(t), this.sharedStylesHost = e, this.hostEl = n, this.component = i, this.shadowRoot = i.encapsulation === de.ShadowDom ? n.attachShadow({
              mode: "open"
            }) : n.createShadowRoot(), this.sharedStylesHost.addHost(this.shadowRoot);
            const r = Pu(i.id, i.styles, []);
            for (let s = 0; s < r.length; s++) {
              const t = document.createElement("style");
              t.textContent = r[s], this.shadowRoot.appendChild(t)
            }
          }
          nodeOrShadowRoot(t) {
            return t === this.hostEl ? this.shadowRoot : t
          }
          destroy() {
            this.sharedStylesHost.removeHost(this.shadowRoot)
          }
          appendChild(t, e) {
            return super.appendChild(this.nodeOrShadowRoot(t), e)
          }
          insertBefore(t, e, n) {
            return super.insertBefore(this.nodeOrShadowRoot(t), e, n)
          }
          removeChild(t, e) {
            return super.removeChild(this.nodeOrShadowRoot(t), e)
          }
          parentNode(t) {
            return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))
          }
        }
        let Mu = (() => {
          class t extends wu {
            constructor(t) {
              super(t)
            }
            supports(t) {
              return !0
            }
            addEventListener(t, e, n) {
              return t.addEventListener(e, n, !1), () => this.removeEventListener(t, e, n)
            }
            removeEventListener(t, e, n) {
              return t.removeEventListener(e, n)
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Xt(ec))
          }, t.\u0275prov = mt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const Ou = ["alt", "control", "meta", "shift"],
          Nu = {
            "\b": "Backspace",
            "\t": "Tab",
            "\x7f": "Delete",
            "\x1b": "Escape",
            Del: "Delete",
            Esc: "Escape",
            Left: "ArrowLeft",
            Right: "ArrowRight",
            Up: "ArrowUp",
            Down: "ArrowDown",
            Menu: "ContextMenu",
            Scroll: "ScrollLock",
            Win: "OS"
          },
          Ru = {
            A: "1",
            B: "2",
            C: "3",
            D: "4",
            E: "5",
            F: "6",
            G: "7",
            H: "8",
            I: "9",
            J: "*",
            K: "+",
            M: "-",
            N: ".",
            O: "/",
            "`": "0",
            "\x90": "NumLock"
          },
          Fu = {
            alt: t => t.altKey,
            control: t => t.ctrlKey,
            meta: t => t.metaKey,
            shift: t => t.shiftKey
          };
        let Du = (() => {
          class t extends wu {
            constructor(t) {
              super(t)
            }
            supports(e) {
              return null != t.parseEventName(e)
            }
            addEventListener(e, n, i) {
              const r = t.parseEventName(n),
                s = t.eventCallback(r.fullKey, i, this.manager.getZone());
              return this.manager.getZone().runOutsideAngular(() => tc().onAndCancel(e, r.domEventName, s))
            }
            static parseEventName(e) {
              const n = e.toLowerCase().split("."),
                i = n.shift();
              if (0 === n.length || "keydown" !== i && "keyup" !== i) return null;
              const r = t._normalizeKey(n.pop());
              let s = "";
              if (Ou.forEach(t => {
                  const e = n.indexOf(t);
                  e > -1 && (n.splice(e, 1), s += t + ".")
                }), s += r, 0 != n.length || 0 === r.length) return null;
              const o = {};
              return o.domEventName = i, o.fullKey = s, o
            }
            static getEventFullKey(t) {
              let e = "",
                n = function (t) {
                  let e = t.key;
                  if (null == e) {
                    if (e = t.keyIdentifier, null == e) return "Unidentified";
                    e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)), 3 === t.location && Ru.hasOwnProperty(e) && (e = Ru[e]))
                  }
                  return Nu[e] || e
                }(t);
              return n = n.toLowerCase(), " " === n ? n = "space" : "." === n && (n = "dot"), Ou.forEach(i => {
                i != n && (0, Fu[i])(t) && (e += i + ".")
              }), e += n, e
            }
            static eventCallback(e, n, i) {
              return r => {
                t.getEventFullKey(r) === e && i.runGuarded(() => n(r))
              }
            }
            static _normalizeKey(t) {
              switch (t) {
                case "esc":
                  return "escape";
                default:
                  return t
              }
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Xt(ec))
          }, t.\u0275prov = mt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const zu = jl(Yl, "browser", [{
            provide: al,
            useValue: "browser"
          }, {
            provide: ol,
            useValue: function () {
              pu.makeCurrent(), _u.init()
            },
            multi: !0
          }, {
            provide: ec,
            useFactory: function () {
              return function (t) {
                Ne = t
              }(document), document
            },
            deps: []
          }]),
          ju = [
            [], {
              provide: os,
              useValue: "root"
            }, {
              provide: ci,
              useFactory: function () {
                return new ci
              },
              deps: []
            }, {
              provide: yu,
              useClass: Mu,
              multi: !0,
              deps: [ec, Sl, al]
            }, {
              provide: yu,
              useClass: Du,
              multi: !0,
              deps: [ec]
            },
            [], {
              provide: Tu,
              useClass: Tu,
              deps: [bu, Su, il]
            }, {
              provide: zo,
              useExisting: Tu
            }, {
              provide: xu,
              useExisting: Su
            }, {
              provide: Su,
              useClass: Su,
              deps: [ec]
            }, {
              provide: Il,
              useClass: Il,
              deps: [Sl]
            }, {
              provide: bu,
              useClass: bu,
              deps: [yu, Sl]
            },
            []
          ];
        let Vu = (() => {
          class t {
            constructor(t) {
              if (t) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
            }
            static withServerTransition(e) {
              return {
                ngModule: t,
                providers: [{
                  provide: il,
                  useValue: e.appId
                }, {
                  provide: gu,
                  useExisting: il
                }, vu]
              }
            }
          }
          return t.\u0275mod = be({
            type: t
          }), t.\u0275inj = gt({
            factory: function (e) {
              return new(e || t)(Xt(t, 12))
            },
            providers: ju,
            imports: [cu, Ql]
          }), t
        })();

        function Uu(...t) {
          let e = t[t.length - 1];
          return E(e) ? (t.pop(), V(t, e)) : G(t)
        }

        function Hu(t, e) {
          return H(t, e, 1)
        }

        function Bu(t, e) {
          return function (n) {
            return n.lift(new $u(t, e))
          }
        }
        "undefined" != typeof window && window;
        class $u {
          constructor(t, e) {
            this.predicate = t, this.thisArg = e
          }
          call(t, e) {
            return e.subscribe(new Zu(t, this.predicate, this.thisArg))
          }
        }
        class Zu extends f {
          constructor(t, e, n) {
            super(t), this.predicate = e, this.thisArg = n, this.count = 0
          }
          _next(t) {
            let e;
            try {
              e = this.predicate.call(this.thisArg, t, this.count++)
            } catch (n) {
              return void this.destination.error(n)
            }
            e && this.destination.next(t)
          }
        }
        class qu {}
        class Gu {}
        class Wu {
          constructor(t) {
            this.normalizedNames = new Map, this.lazyUpdate = null, t ? this.lazyInit = "string" == typeof t ? () => {
              this.headers = new Map, t.split("\n").forEach(t => {
                const e = t.indexOf(":");
                if (e > 0) {
                  const n = t.slice(0, e),
                    i = n.toLowerCase(),
                    r = t.slice(e + 1).trim();
                  this.maybeSetNormalizedName(n, i), this.headers.has(i) ? this.headers.get(i).push(r) : this.headers.set(i, [r])
                }
              })
            } : () => {
              this.headers = new Map, Object.keys(t).forEach(e => {
                let n = t[e];
                const i = e.toLowerCase();
                "string" == typeof n && (n = [n]), n.length > 0 && (this.headers.set(i, n), this.maybeSetNormalizedName(e, i))
              })
            } : this.headers = new Map
          }
          has(t) {
            return this.init(), this.headers.has(t.toLowerCase())
          }
          get(t) {
            this.init();
            const e = this.headers.get(t.toLowerCase());
            return e && e.length > 0 ? e[0] : null
          }
          keys() {
            return this.init(), Array.from(this.normalizedNames.values())
          }
          getAll(t) {
            return this.init(), this.headers.get(t.toLowerCase()) || null
          }
          append(t, e) {
            return this.clone({
              name: t,
              value: e,
              op: "a"
            })
          }
          set(t, e) {
            return this.clone({
              name: t,
              value: e,
              op: "s"
            })
          }
          delete(t, e) {
            return this.clone({
              name: t,
              value: e,
              op: "d"
            })
          }
          maybeSetNormalizedName(t, e) {
            this.normalizedNames.has(e) || this.normalizedNames.set(e, t)
          }
          init() {
            this.lazyInit && (this.lazyInit instanceof Wu ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(t => this.applyUpdate(t)), this.lazyUpdate = null))
          }
          copyFrom(t) {
            t.init(), Array.from(t.headers.keys()).forEach(e => {
              this.headers.set(e, t.headers.get(e)), this.normalizedNames.set(e, t.normalizedNames.get(e))
            })
          }
          clone(t) {
            const e = new Wu;
            return e.lazyInit = this.lazyInit && this.lazyInit instanceof Wu ? this.lazyInit : this, e.lazyUpdate = (this.lazyUpdate || []).concat([t]), e
          }
          applyUpdate(t) {
            const e = t.name.toLowerCase();
            switch (t.op) {
              case "a":
              case "s":
                let n = t.value;
                if ("string" == typeof n && (n = [n]), 0 === n.length) return;
                this.maybeSetNormalizedName(t.name, e);
                const i = ("a" === t.op ? this.headers.get(e) : void 0) || [];
                i.push(...n), this.headers.set(e, i);
                break;
              case "d":
                const r = t.value;
                if (r) {
                  let t = this.headers.get(e);
                  if (!t) return;
                  t = t.filter(t => -1 === r.indexOf(t)), 0 === t.length ? (this.headers.delete(e), this.normalizedNames.delete(e)) : this.headers.set(e, t)
                } else this.headers.delete(e), this.normalizedNames.delete(e)
            }
          }
          forEach(t) {
            this.init(), Array.from(this.normalizedNames.keys()).forEach(e => t(this.normalizedNames.get(e), this.headers.get(e)))
          }
        }
        class Ku {
          encodeKey(t) {
            return Yu(t)
          }
          encodeValue(t) {
            return Yu(t)
          }
          decodeKey(t) {
            return decodeURIComponent(t)
          }
          decodeValue(t) {
            return decodeURIComponent(t)
          }
        }

        function Yu(t) {
          return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/gi, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%2B/gi, "+").replace(/%3D/gi, "=").replace(/%3F/gi, "?").replace(/%2F/gi, "/")
        }
        class Ju {
          constructor(t = {}) {
            if (this.updates = null, this.cloneFrom = null, this.encoder = t.encoder || new Ku, t.fromString) {
              if (t.fromObject) throw new Error("Cannot specify both fromString and fromObject.");
              this.map = function (t, e) {
                const n = new Map;
                return t.length > 0 && t.split("&").forEach(t => {
                  const i = t.indexOf("="),
                    [r, s] = -1 == i ? [e.decodeKey(t), ""] : [e.decodeKey(t.slice(0, i)), e.decodeValue(t.slice(i + 1))],
                    o = n.get(r) || [];
                  o.push(s), n.set(r, o)
                }), n
              }(t.fromString, this.encoder)
            } else t.fromObject ? (this.map = new Map, Object.keys(t.fromObject).forEach(e => {
              const n = t.fromObject[e];
              this.map.set(e, Array.isArray(n) ? n : [n])
            })) : this.map = null
          }
          has(t) {
            return this.init(), this.map.has(t)
          }
          get(t) {
            this.init();
            const e = this.map.get(t);
            return e ? e[0] : null
          }
          getAll(t) {
            return this.init(), this.map.get(t) || null
          }
          keys() {
            return this.init(), Array.from(this.map.keys())
          }
          append(t, e) {
            return this.clone({
              param: t,
              value: e,
              op: "a"
            })
          }
          set(t, e) {
            return this.clone({
              param: t,
              value: e,
              op: "s"
            })
          }
          delete(t, e) {
            return this.clone({
              param: t,
              value: e,
              op: "d"
            })
          }
          toString() {
            return this.init(), this.keys().map(t => {
              const e = this.encoder.encodeKey(t);
              return this.map.get(t).map(t => e + "=" + this.encoder.encodeValue(t)).join("&")
            }).filter(t => "" !== t).join("&")
          }
          clone(t) {
            const e = new Ju({
              encoder: this.encoder
            });
            return e.cloneFrom = this.cloneFrom || this, e.updates = (this.updates || []).concat([t]), e
          }
          init() {
            null === this.map && (this.map = new Map), null !== this.cloneFrom && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(t => this.map.set(t, this.cloneFrom.map.get(t))), this.updates.forEach(t => {
              switch (t.op) {
                case "a":
                case "s":
                  const e = ("a" === t.op ? this.map.get(t.param) : void 0) || [];
                  e.push(t.value), this.map.set(t.param, e);
                  break;
                case "d":
                  if (void 0 === t.value) {
                    this.map.delete(t.param);
                    break
                  } {
                    let e = this.map.get(t.param) || [];
                    const n = e.indexOf(t.value); - 1 !== n && e.splice(n, 1), e.length > 0 ? this.map.set(t.param, e) : this.map.delete(t.param)
                  }
              }
            }), this.cloneFrom = this.updates = null)
          }
        }

        function Qu(t) {
          return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
        }

        function Xu(t) {
          return "undefined" != typeof Blob && t instanceof Blob
        }

        function th(t) {
          return "undefined" != typeof FormData && t instanceof FormData
        }
        class eh {
          constructor(t, e, n, i) {
            let r;
            if (this.url = e, this.body = null, this.reportProgress = !1, this.withCredentials = !1, this.responseType = "json", this.method = t.toUpperCase(), function (t) {
                switch (t) {
                  case "DELETE":
                  case "GET":
                  case "HEAD":
                  case "OPTIONS":
                  case "JSONP":
                    return !1;
                  default:
                    return !0
                }
              }(this.method) || i ? (this.body = void 0 !== n ? n : null, r = i) : r = n, r && (this.reportProgress = !!r.reportProgress, this.withCredentials = !!r.withCredentials, r.responseType && (this.responseType = r.responseType), r.headers && (this.headers = r.headers), r.params && (this.params = r.params)), this.headers || (this.headers = new Wu), this.params) {
              const t = this.params.toString();
              if (0 === t.length) this.urlWithParams = e;
              else {
                const n = e.indexOf("?");
                this.urlWithParams = e + (-1 === n ? "?" : n < e.length - 1 ? "&" : "") + t
              }
            } else this.params = new Ju, this.urlWithParams = e
          }
          serializeBody() {
            return null === this.body ? null : Qu(this.body) || Xu(this.body) || th(this.body) || "string" == typeof this.body ? this.body : this.body instanceof Ju ? this.body.toString() : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
          }
          detectContentTypeHeader() {
            return null === this.body || th(this.body) ? null : Xu(this.body) ? this.body.type || null : Qu(this.body) ? null : "string" == typeof this.body ? "text/plain" : this.body instanceof Ju ? "application/x-www-form-urlencoded;charset=UTF-8" : "object" == typeof this.body || "number" == typeof this.body || Array.isArray(this.body) ? "application/json" : null
          }
          clone(t = {}) {
            const e = t.method || this.method,
              n = t.url || this.url,
              i = t.responseType || this.responseType,
              r = void 0 !== t.body ? t.body : this.body,
              s = void 0 !== t.withCredentials ? t.withCredentials : this.withCredentials,
              o = void 0 !== t.reportProgress ? t.reportProgress : this.reportProgress;
            let a = t.headers || this.headers,
              l = t.params || this.params;
            return void 0 !== t.setHeaders && (a = Object.keys(t.setHeaders).reduce((e, n) => e.set(n, t.setHeaders[n]), a)), t.setParams && (l = Object.keys(t.setParams).reduce((e, n) => e.set(n, t.setParams[n]), l)), new eh(e, n, r, {
              params: l,
              headers: a,
              reportProgress: o,
              responseType: i,
              withCredentials: s
            })
          }
        }
        const nh = function () {
          var t = {
            Sent: 0,
            UploadProgress: 1,
            ResponseHeader: 2,
            DownloadProgress: 3,
            Response: 4,
            User: 5
          };
          return t[t.Sent] = "Sent", t[t.UploadProgress] = "UploadProgress", t[t.ResponseHeader] = "ResponseHeader", t[t.DownloadProgress] = "DownloadProgress", t[t.Response] = "Response", t[t.User] = "User", t
        }();
        class ih {
          constructor(t, e = 200, n = "OK") {
            this.headers = t.headers || new Wu, this.status = void 0 !== t.status ? t.status : e, this.statusText = t.statusText || n, this.url = t.url || null, this.ok = this.status >= 200 && this.status < 300
          }
        }
        class rh extends ih {
          constructor(t = {}) {
            super(t), this.type = nh.ResponseHeader
          }
          clone(t = {}) {
            return new rh({
              headers: t.headers || this.headers,
              status: void 0 !== t.status ? t.status : this.status,
              statusText: t.statusText || this.statusText,
              url: t.url || this.url || void 0
            })
          }
        }
        class sh extends ih {
          constructor(t = {}) {
            super(t), this.type = nh.Response, this.body = void 0 !== t.body ? t.body : null
          }
          clone(t = {}) {
            return new sh({
              body: void 0 !== t.body ? t.body : this.body,
              headers: t.headers || this.headers,
              status: void 0 !== t.status ? t.status : this.status,
              statusText: t.statusText || this.statusText,
              url: t.url || this.url || void 0
            })
          }
        }
        class oh extends ih {
          constructor(t) {
            super(t, 0, "Unknown Error"), this.name = "HttpErrorResponse", this.ok = !1, this.message = this.status >= 200 && this.status < 300 ? `Http failure during parsing for ${t.url||"(unknown url)"}` : `Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`, this.error = t.error || null
          }
        }

        function ah(t, e) {
          return {
            body: e,
            headers: t.headers,
            observe: t.observe,
            params: t.params,
            reportProgress: t.reportProgress,
            responseType: t.responseType,
            withCredentials: t.withCredentials
          }
        }
        let lh = (() => {
          class t {
            constructor(t) {
              this.handler = t
            }
            request(t, e, n = {}) {
              let i;
              if (t instanceof eh) i = t;
              else {
                let r = void 0;
                r = n.headers instanceof Wu ? n.headers : new Wu(n.headers);
                let s = void 0;
                n.params && (s = n.params instanceof Ju ? n.params : new Ju({
                  fromObject: n.params
                })), i = new eh(t, e, void 0 !== n.body ? n.body : null, {
                  headers: r,
                  params: s,
                  reportProgress: n.reportProgress,
                  responseType: n.responseType || "json",
                  withCredentials: n.withCredentials
                })
              }
              const r = Uu(i).pipe(Hu(t => this.handler.handle(t)));
              if (t instanceof eh || "events" === n.observe) return r;
              const s = r.pipe(Bu(t => t instanceof sh));
              switch (n.observe || "body") {
                case "body":
                  switch (i.responseType) {
                    case "arraybuffer":
                      return s.pipe(D(t => {
                        if (null !== t.body && !(t.body instanceof ArrayBuffer)) throw new Error("Response is not an ArrayBuffer.");
                        return t.body
                      }));
                    case "blob":
                      return s.pipe(D(t => {
                        if (null !== t.body && !(t.body instanceof Blob)) throw new Error("Response is not a Blob.");
                        return t.body
                      }));
                    case "text":
                      return s.pipe(D(t => {
                        if (null !== t.body && "string" != typeof t.body) throw new Error("Response is not a string.");
                        return t.body
                      }));
                    case "json":
                    default:
                      return s.pipe(D(t => t.body))
                  }
                  case "response":
                    return s;
                  default:
                    throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)
              }
            }
            delete(t, e = {}) {
              return this.request("DELETE", t, e)
            }
            get(t, e = {}) {
              return this.request("GET", t, e)
            }
            head(t, e = {}) {
              return this.request("HEAD", t, e)
            }
            jsonp(t, e) {
              return this.request("JSONP", t, {
                params: (new Ju).append(e, "JSONP_CALLBACK"),
                observe: "body",
                responseType: "json"
              })
            }
            options(t, e = {}) {
              return this.request("OPTIONS", t, e)
            }
            patch(t, e, n = {}) {
              return this.request("PATCH", t, ah(n, e))
            }
            post(t, e, n = {}) {
              return this.request("POST", t, ah(n, e))
            }
            put(t, e, n = {}) {
              return this.request("PUT", t, ah(n, e))
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(Xt(qu))
          }, t.\u0275prov = mt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        class ch {
          constructor(t, e) {
            this.next = t, this.interceptor = e
          }
          handle(t) {
            return this.interceptor.intercept(t, this.next)
          }
        }
        const uh = new Bt("HTTP_INTERCEPTORS");
        let hh = (() => {
          class t {
            intercept(t, e) {
              return e.handle(t)
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275prov = mt({
            token: t,
            factory: t.\u0275fac
          }), t
        })();
        const dh = /^\)\]\}',?\n/;
        class ph {}
        let fh = (() => {
            class t {
              constructor() {}
              build() {
                return new XMLHttpRequest
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)
            }, t.\u0275prov = mt({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          mh = (() => {
            class t {
              constructor(t) {
                this.xhrFactory = t
              }
              handle(t) {
                if ("JSONP" === t.method) throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
                return new b(e => {
                  const n = this.xhrFactory.build();
                  if (n.open(t.method, t.urlWithParams), t.withCredentials && (n.withCredentials = !0), t.headers.forEach((t, e) => n.setRequestHeader(t, e.join(","))), t.headers.has("Accept") || n.setRequestHeader("Accept", "application/json, text/plain, */*"), !t.headers.has("Content-Type")) {
                    const e = t.detectContentTypeHeader();
                    null !== e && n.setRequestHeader("Content-Type", e)
                  }
                  if (t.responseType) {
                    const e = t.responseType.toLowerCase();
                    n.responseType = "json" !== e ? e : "text"
                  }
                  const i = t.serializeBody();
                  let r = null;
                  const s = () => {
                      if (null !== r) return r;
                      const e = 1223 === n.status ? 204 : n.status,
                        i = n.statusText || "OK",
                        s = new Wu(n.getAllResponseHeaders()),
                        o = function (t) {
                          return "responseURL" in t && t.responseURL ? t.responseURL : /^X-Request-URL:/m.test(t.getAllResponseHeaders()) ? t.getResponseHeader("X-Request-URL") : null
                        }(n) || t.url;
                      return r = new rh({
                        headers: s,
                        status: e,
                        statusText: i,
                        url: o
                      }), r
                    },
                    o = () => {
                      let {
                        headers: i,
                        status: r,
                        statusText: o,
                        url: a
                      } = s(), l = null;
                      204 !== r && (l = void 0 === n.response ? n.responseText : n.response), 0 === r && (r = l ? 200 : 0);
                      let c = r >= 200 && r < 300;
                      if ("json" === t.responseType && "string" == typeof l) {
                        const t = l;
                        l = l.replace(dh, "");
                        try {
                          l = "" !== l ? JSON.parse(l) : null
                        } catch (u) {
                          l = t, c && (c = !1, l = {
                            error: u,
                            text: l
                          })
                        }
                      }
                      c ? (e.next(new sh({
                        body: l,
                        headers: i,
                        status: r,
                        statusText: o,
                        url: a || void 0
                      })), e.complete()) : e.error(new oh({
                        error: l,
                        headers: i,
                        status: r,
                        statusText: o,
                        url: a || void 0
                      }))
                    },
                    a = t => {
                      const {
                        url: i
                      } = s(), r = new oh({
                        error: t,
                        status: n.status || 0,
                        statusText: n.statusText || "Unknown Error",
                        url: i || void 0
                      });
                      e.error(r)
                    };
                  let l = !1;
                  const c = i => {
                      l || (e.next(s()), l = !0);
                      let r = {
                        type: nh.DownloadProgress,
                        loaded: i.loaded
                      };
                      i.lengthComputable && (r.total = i.total), "text" === t.responseType && n.responseText && (r.partialText = n.responseText), e.next(r)
                    },
                    u = t => {
                      let n = {
                        type: nh.UploadProgress,
                        loaded: t.loaded
                      };
                      t.lengthComputable && (n.total = t.total), e.next(n)
                    };
                  return n.addEventListener("load", o), n.addEventListener("error", a), t.reportProgress && (n.addEventListener("progress", c), null !== i && n.upload && n.upload.addEventListener("progress", u)), n.send(i), e.next({
                    type: nh.Sent
                  }), () => {
                    n.removeEventListener("error", a), n.removeEventListener("load", o), t.reportProgress && (n.removeEventListener("progress", c), null !== i && n.upload && n.upload.removeEventListener("progress", u)), n.abort()
                  }
                })
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Xt(ph))
            }, t.\u0275prov = mt({
              token: t,
              factory: t.\u0275fac
            }), t
          })();
        const gh = new Bt("XSRF_COOKIE_NAME"),
          vh = new Bt("XSRF_HEADER_NAME");
        class _h {}
        let yh = (() => {
            class t {
              constructor(t, e, n) {
                this.doc = t, this.platform = e, this.cookieName = n, this.lastCookieString = "", this.lastToken = null, this.parseCount = 0
              }
              getToken() {
                if ("server" === this.platform) return null;
                const t = this.doc.cookie || "";
                return t !== this.lastCookieString && (this.parseCount++, this.lastToken = Jc(t, this.cookieName), this.lastCookieString = t), this.lastToken
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Xt(ec), Xt(al), Xt(gh))
            }, t.\u0275prov = mt({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          bh = (() => {
            class t {
              constructor(t, e) {
                this.tokenService = t, this.headerName = e
              }
              intercept(t, e) {
                const n = t.url.toLowerCase();
                if ("GET" === t.method || "HEAD" === t.method || n.startsWith("http://") || n.startsWith("https://")) return e.handle(t);
                const i = this.tokenService.getToken();
                return null === i || t.headers.has(this.headerName) || (t = t.clone({
                  headers: t.headers.set(this.headerName, i)
                })), e.handle(t)
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Xt(_h), Xt(vh))
            }, t.\u0275prov = mt({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          wh = (() => {
            class t {
              constructor(t, e) {
                this.backend = t, this.injector = e, this.chain = null
              }
              handle(t) {
                if (null === this.chain) {
                  const t = this.injector.get(uh, []);
                  this.chain = t.reduceRight((t, e) => new ch(t, e), this.backend)
                }
                return this.chain.handle(t)
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Xt(Gu), Xt(bs))
            }, t.\u0275prov = mt({
              token: t,
              factory: t.\u0275fac
            }), t
          })(),
          xh = (() => {
            class t {
              static disable() {
                return {
                  ngModule: t,
                  providers: [{
                    provide: bh,
                    useClass: hh
                  }]
                }
              }
              static withOptions(e = {}) {
                return {
                  ngModule: t,
                  providers: [e.cookieName ? {
                    provide: gh,
                    useValue: e.cookieName
                  } : [], e.headerName ? {
                    provide: vh,
                    useValue: e.headerName
                  } : []]
                }
              }
            }
            return t.\u0275mod = be({
              type: t
            }), t.\u0275inj = gt({
              factory: function (e) {
                return new(e || t)
              },
              providers: [bh, {
                provide: uh,
                useExisting: bh,
                multi: !0
              }, {
                provide: _h,
                useClass: yh
              }, {
                provide: gh,
                useValue: "XSRF-TOKEN"
              }, {
                provide: vh,
                useValue: "X-XSRF-TOKEN"
              }]
            }), t
          })(),
          Sh = (() => {
            class t {}
            return t.\u0275mod = be({
              type: t
            }), t.\u0275inj = gt({
              factory: function (e) {
                return new(e || t)
              },
              providers: [lh, {
                provide: qu,
                useClass: wh
              }, mh, {
                provide: Gu,
                useExisting: mh
              }, fh, {
                provide: ph,
                useExisting: fh
              }],
              imports: [
                [xh.withOptions({
                  cookieName: "XSRF-TOKEN",
                  headerName: "X-XSRF-TOKEN"
                })]
              ]
            }), t
          })(),
          Ch = (() => {
            class t {
              constructor(t) {
                this.injector = t
              }
              intercept(t, e) {
                const n = localStorage.getItem("token");
                if (n) {
                  const i = t.clone({
                    headers: t.headers.set("Authorization", `Bearer ${n}`)
                  });
                  return e.handle(i)
                }
                return e.handle(t)
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(Xt(bs))
            }, t.\u0275prov = mt({
              token: t,
              factory: t.\u0275fac
            }), t
          })();
        class kh extends k {
          constructor(t) {
            super(), this._value = t
          }
          get value() {
            return this.getValue()
          }
          _subscribe(t) {
            const e = super._subscribe(t);
            return e && !e.closed && t.next(this._value), e
          }
          getValue() {
            if (this.hasError) throw this.thrownError;
            if (this.closed) throw new x;
            return this._value
          }
          next(t) {
            super.next(this._value = t)
          }
        }
        const Ph = (() => {
            function t() {
              return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
            }
            return t.prototype = Object.create(Error.prototype), t
          })(),
          Eh = {};
        class Th {
          constructor(t) {
            this.resultSelector = t
          }
          call(t, e) {
            return e.subscribe(new Lh(t, this.resultSelector))
          }
        }
        class Lh extends F {
          constructor(t, e) {
            super(t), this.resultSelector = e, this.active = 0, this.values = [], this.observables = []
          }
          _next(t) {
            this.values.push(Eh), this.observables.push(t)
          }
          _complete() {
            const t = this.observables,
              e = t.length;
            if (0 === e) this.destination.complete();
            else {
              this.active = e, this.toRespond = e;
              for (let n = 0; n < e; n++) {
                const e = t[n];
                this.add(R(this, e, e, n))
              }
            }
          }
          notifyComplete(t) {
            0 == (this.active -= 1) && this.destination.complete()
          }
          notifyNext(t, e, n, i, r) {
            const s = this.values,
              o = this.toRespond ? s[n] === Eh ? --this.toRespond : this.toRespond : 0;
            s[n] = e, 0 === o && (this.resultSelector ? this._tryResultSelector(s) : this.destination.next(s.slice()))
          }
          _tryResultSelector(t) {
            let e;
            try {
              e = this.resultSelector.apply(this, t)
            } catch (n) {
              return void this.destination.error(n)
            }
            this.destination.next(e)
          }
        }
        const Ah = new b(t => t.complete());

        function Ih(t) {
          return t ? function (t) {
            return new b(e => t.schedule(() => e.complete()))
          }(t) : Ah
        }

        function Mh(t) {
          return new b(e => {
            let n;
            try {
              n = t()
            } catch (i) {
              return void e.error(i)
            }
            return (n ? U(n) : Ih()).subscribe(e)
          })
        }

        function Oh() {
          return q(1)
        }
        const Nh = (() => {
          function t() {
            return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
          }
          return t.prototype = Object.create(Error.prototype), t
        })();

        function Rh(t) {
          return function (e) {
            return 0 === t ? Ih() : e.lift(new Fh(t))
          }
        }
        class Fh {
          constructor(t) {
            if (this.total = t, this.total < 0) throw new Nh
          }
          call(t, e) {
            return e.subscribe(new Dh(t, this.total))
          }
        }
        class Dh extends f {
          constructor(t, e) {
            super(t), this.total = e, this.ring = new Array, this.count = 0
          }
          _next(t) {
            const e = this.ring,
              n = this.total,
              i = this.count++;
            e.length < n ? e.push(t) : e[i % n] = t
          }
          _complete() {
            const t = this.destination;
            let e = this.count;
            if (e > 0) {
              const n = this.count >= this.total ? this.total : this.count,
                i = this.ring;
              for (let r = 0; r < n; r++) {
                const r = e++ % n;
                t.next(i[r])
              }
            }
            t.complete()
          }
        }

        function zh(t = Uh) {
          return e => e.lift(new jh(t))
        }
        class jh {
          constructor(t) {
            this.errorFactory = t
          }
          call(t, e) {
            return e.subscribe(new Vh(t, this.errorFactory))
          }
        }
        class Vh extends f {
          constructor(t, e) {
            super(t), this.errorFactory = e, this.hasValue = !1
          }
          _next(t) {
            this.hasValue = !0, this.destination.next(t)
          }
          _complete() {
            if (this.hasValue) return this.destination.complete(); {
              let e;
              try {
                e = this.errorFactory()
              } catch (t) {
                e = t
              }
              this.destination.error(e)
            }
          }
        }

        function Uh() {
          return new Ph
        }

        function Hh(t = null) {
          return e => e.lift(new Bh(t))
        }
        class Bh {
          constructor(t) {
            this.defaultValue = t
          }
          call(t, e) {
            return e.subscribe(new $h(t, this.defaultValue))
          }
        }
        class $h extends f {
          constructor(t, e) {
            super(t), this.defaultValue = e, this.isEmpty = !0
          }
          _next(t) {
            this.isEmpty = !1, this.destination.next(t)
          }
          _complete() {
            this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
          }
        }

        function Zh(t, e) {
          const n = arguments.length >= 2;
          return i => i.pipe(t ? Bu((e, n) => t(e, n, i)) : Z, Rh(1), n ? Hh(e) : zh(() => new Ph))
        }

        function qh(t) {
          return function (e) {
            const n = new Gh(t),
              i = e.lift(n);
            return n.caught = i
          }
        }
        class Gh {
          constructor(t) {
            this.selector = t
          }
          call(t, e) {
            return e.subscribe(new Wh(t, this.selector, this.caught))
          }
        }
        class Wh extends F {
          constructor(t, e, n) {
            super(t), this.selector = e, this.caught = n
          }
          error(t) {
            if (!this.isStopped) {
              let n;
              try {
                n = this.selector(t, this.caught)
              } catch (e) {
                return void super.error(e)
              }
              this._unsubscribeAndRecycle();
              const i = new T(this, void 0, void 0);
              this.add(i);
              const r = R(this, n, void 0, void 0, i);
              r !== i && this.add(r)
            }
          }
        }

        function Kh(t) {
          return e => 0 === t ? Ih() : e.lift(new Yh(t))
        }
        class Yh {
          constructor(t) {
            if (this.total = t, this.total < 0) throw new Nh
          }
          call(t, e) {
            return e.subscribe(new Jh(t, this.total))
          }
        }
        class Jh extends f {
          constructor(t, e) {
            super(t), this.total = e, this.count = 0
          }
          _next(t) {
            const e = this.total,
              n = ++this.count;
            n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
          }
        }

        function Qh(t, e) {
          const n = arguments.length >= 2;
          return i => i.pipe(t ? Bu((e, n) => t(e, n, i)) : Z, Kh(1), n ? Hh(e) : zh(() => new Ph))
        }
        class Xh {
          constructor(t, e, n) {
            this.predicate = t, this.thisArg = e, this.source = n
          }
          call(t, e) {
            return e.subscribe(new td(t, this.predicate, this.thisArg, this.source))
          }
        }
        class td extends f {
          constructor(t, e, n, i) {
            super(t), this.predicate = e, this.thisArg = n, this.source = i, this.index = 0, this.thisArg = n || this
          }
          notifyComplete(t) {
            this.destination.next(t), this.destination.complete()
          }
          _next(t) {
            let e = !1;
            try {
              e = this.predicate.call(this.thisArg, t, this.index++, this.source)
            } catch (n) {
              return void this.destination.error(n)
            }
            e || this.notifyComplete(!1)
          }
          _complete() {
            this.notifyComplete(!0)
          }
        }

        function ed(t, e) {
          return "function" == typeof e ? n => n.pipe(ed((n, i) => U(t(n, i)).pipe(D((t, r) => e(n, t, i, r))))) : e => e.lift(new nd(t))
        }
        class nd {
          constructor(t) {
            this.project = t
          }
          call(t, e) {
            return e.subscribe(new id(t, this.project))
          }
        }
        class id extends F {
          constructor(t, e) {
            super(t), this.project = e, this.index = 0
          }
          _next(t) {
            let e;
            const n = this.index++;
            try {
              e = this.project(t, n)
            } catch (i) {
              return void this.destination.error(i)
            }
            this._innerSub(e, t, n)
          }
          _innerSub(t, e, n) {
            const i = this.innerSubscription;
            i && i.unsubscribe();
            const r = new T(this, e, n),
              s = this.destination;
            s.add(r), this.innerSubscription = R(this, t, void 0, void 0, r), this.innerSubscription !== r && s.add(this.innerSubscription)
          }
          _complete() {
            const {
              innerSubscription: t
            } = this;
            t && !t.closed || super._complete(), this.unsubscribe()
          }
          _unsubscribe() {
            this.innerSubscription = null
          }
          notifyComplete(t) {
            this.destination.remove(t), this.innerSubscription = null, this.isStopped && super._complete()
          }
          notifyNext(t, e, n, i, r) {
            this.destination.next(e)
          }
        }

        function rd(...t) {
          return Oh()(Uu(...t))
        }

        function sd(t, e) {
          let n = !1;
          return arguments.length >= 2 && (n = !0),
            function (i) {
              return i.lift(new od(t, e, n))
            }
        }
        class od {
          constructor(t, e, n = !1) {
            this.accumulator = t, this.seed = e, this.hasSeed = n
          }
          call(t, e) {
            return e.subscribe(new ad(t, this.accumulator, this.seed, this.hasSeed))
          }
        }
        class ad extends f {
          constructor(t, e, n, i) {
            super(t), this.accumulator = e, this._seed = n, this.hasSeed = i, this.index = 0
          }
          get seed() {
            return this._seed
          }
          set seed(t) {
            this.hasSeed = !0, this._seed = t
          }
          _next(t) {
            if (this.hasSeed) return this._tryNext(t);
            this.seed = t, this.destination.next(t)
          }
          _tryNext(t) {
            const e = this.index++;
            let n;
            try {
              n = this.accumulator(this.seed, t, e)
            } catch (i) {
              this.destination.error(i)
            }
            this.seed = n, this.destination.next(n)
          }
        }

        function ld(t, e, n) {
          return function (i) {
            return i.lift(new cd(t, e, n))
          }
        }
        class cd {
          constructor(t, e, n) {
            this.nextOrObserver = t, this.error = e, this.complete = n
          }
          call(t, e) {
            return e.subscribe(new ud(t, this.nextOrObserver, this.error, this.complete))
          }
        }
        class ud extends f {
          constructor(t, e, n, r) {
            super(t), this._tapNext = v, this._tapError = v, this._tapComplete = v, this._tapError = n || v, this._tapComplete = r || v, i(e) ? (this._context = this, this._tapNext = e) : e && (this._context = e, this._tapNext = e.next || v, this._tapError = e.error || v, this._tapComplete = e.complete || v)
          }
          _next(t) {
            try {
              this._tapNext.call(this._context, t)
            } catch (e) {
              return void this.destination.error(e)
            }
            this.destination.next(t)
          }
          _error(t) {
            try {
              this._tapError.call(this._context, t)
            } catch (t) {
              return void this.destination.error(t)
            }
            this.destination.error(t)
          }
          _complete() {
            try {
              this._tapComplete.call(this._context)
            } catch (t) {
              return void this.destination.error(t)
            }
            return this.destination.complete()
          }
        }
        class hd {
          constructor(t) {
            this.callback = t
          }
          call(t, e) {
            return e.subscribe(new dd(t, this.callback))
          }
        }
        class dd extends f {
          constructor(t, e) {
            super(t), this.add(new h(e))
          }
        }
        class pd {
          constructor(t, e) {
            this.id = t, this.url = e
          }
        }
        class fd extends pd {
          constructor(t, e, n = "imperative", i = null) {
            super(t, e), this.navigationTrigger = n, this.restoredState = i
          }
          toString() {
            return `NavigationStart(id: ${this.id}, url: '${this.url}')`
          }
        }
        class md extends pd {
          constructor(t, e, n) {
            super(t, e), this.urlAfterRedirects = n
          }
          toString() {
            return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
          }
        }
        class gd extends pd {
          constructor(t, e, n) {
            super(t, e), this.reason = n
          }
          toString() {
            return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
          }
        }
        class vd extends pd {
          constructor(t, e, n) {
            super(t, e), this.error = n
          }
          toString() {
            return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
          }
        }
        class _d extends pd {
          constructor(t, e, n, i) {
            super(t, e), this.urlAfterRedirects = n, this.state = i
          }
          toString() {
            return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
          }
        }
        class yd extends pd {
          constructor(t, e, n, i) {
            super(t, e), this.urlAfterRedirects = n, this.state = i
          }
          toString() {
            return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
          }
        }
        class bd extends pd {
          constructor(t, e, n, i, r) {
            super(t, e), this.urlAfterRedirects = n, this.state = i, this.shouldActivate = r
          }
          toString() {
            return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
          }
        }
        class wd extends pd {
          constructor(t, e, n, i) {
            super(t, e), this.urlAfterRedirects = n, this.state = i
          }
          toString() {
            return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
          }
        }
        class xd extends pd {
          constructor(t, e, n, i) {
            super(t, e), this.urlAfterRedirects = n, this.state = i
          }
          toString() {
            return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
          }
        }
        class Sd {
          constructor(t) {
            this.route = t
          }
          toString() {
            return `RouteConfigLoadStart(path: ${this.route.path})`
          }
        }
        class Cd {
          constructor(t) {
            this.route = t
          }
          toString() {
            return `RouteConfigLoadEnd(path: ${this.route.path})`
          }
        }
        class kd {
          constructor(t) {
            this.snapshot = t
          }
          toString() {
            return `ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
          }
        }
        class Pd {
          constructor(t) {
            this.snapshot = t
          }
          toString() {
            return `ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
          }
        }
        class Ed {
          constructor(t) {
            this.snapshot = t
          }
          toString() {
            return `ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
          }
        }
        class Td {
          constructor(t) {
            this.snapshot = t
          }
          toString() {
            return `ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
          }
        }
        class Ld {
          constructor(t, e, n) {
            this.routerEvent = t, this.position = e, this.anchor = n
          }
          toString() {
            return `Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`
          }
        }
        let Ad = (() => {
          class t {}
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275cmp = ge({
            type: t,
            selectors: [
              ["ng-component"]
            ],
            decls: 1,
            vars: 0,
            template: function (t, e) {
              1 & t && qs(0, "router-outlet")
            },
            directives: function () {
              return [Ff]
            },
            encapsulation: 2
          }), t
        })();
        class Id {
          constructor(t) {
            this.params = t || {}
          }
          has(t) {
            return this.params.hasOwnProperty(t)
          }
          get(t) {
            if (this.has(t)) {
              const e = this.params[t];
              return Array.isArray(e) ? e[0] : e
            }
            return null
          }
          getAll(t) {
            if (this.has(t)) {
              const e = this.params[t];
              return Array.isArray(e) ? e : [e]
            }
            return []
          }
          get keys() {
            return Object.keys(this.params)
          }
        }

        function Md(t) {
          return new Id(t)
        }

        function Od(t) {
          const e = Error("NavigationCancelingError: " + t);
          return e.ngNavigationCancelingError = !0, e
        }

        function Nd(t, e, n) {
          const i = n.path.split("/");
          if (i.length > t.length) return null;
          if ("full" === n.pathMatch && (e.hasChildren() || i.length < t.length)) return null;
          const r = {};
          for (let s = 0; s < i.length; s++) {
            const e = i[s],
              n = t[s];
            if (e.startsWith(":")) r[e.substring(1)] = n;
            else if (e !== n.path) return null
          }
          return {
            consumed: t.slice(0, i.length),
            posParams: r
          }
        }
        class Rd {
          constructor(t, e) {
            this.routes = t, this.module = e
          }
        }

        function Fd(t, e = "") {
          for (let n = 0; n < t.length; n++) {
            const i = t[n];
            Dd(i, zd(e, i))
          }
        }

        function Dd(t, e) {
          if (!t) throw new Error(`\n      Invalid configuration of route '${e}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `);
          if (Array.isArray(t)) throw new Error(`Invalid configuration of route '${e}': Array cannot be specified`);
          if (!t.component && !t.children && !t.loadChildren && t.outlet && "primary" !== t.outlet) throw new Error(`Invalid configuration of route '${e}': a componentless route without children or loadChildren cannot have a named outlet set`);
          if (t.redirectTo && t.children) throw new Error(`Invalid configuration of route '${e}': redirectTo and children cannot be used together`);
          if (t.redirectTo && t.loadChildren) throw new Error(`Invalid configuration of route '${e}': redirectTo and loadChildren cannot be used together`);
          if (t.children && t.loadChildren) throw new Error(`Invalid configuration of route '${e}': children and loadChildren cannot be used together`);
          if (t.redirectTo && t.component) throw new Error(`Invalid configuration of route '${e}': redirectTo and component cannot be used together`);
          if (t.path && t.matcher) throw new Error(`Invalid configuration of route '${e}': path and matcher cannot be used together`);
          if (void 0 === t.redirectTo && !t.component && !t.children && !t.loadChildren) throw new Error(`Invalid configuration of route '${e}'. One of the following must be provided: component, redirectTo, children or loadChildren`);
          if (void 0 === t.path && void 0 === t.matcher) throw new Error(`Invalid configuration of route '${e}': routes must have either a path or a matcher specified`);
          if ("string" == typeof t.path && "/" === t.path.charAt(0)) throw new Error(`Invalid configuration of route '${e}': path cannot start with a slash`);
          if ("" === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch) throw new Error(`Invalid configuration of route '{path: "${e}", redirectTo: "${t.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`);
          if (void 0 !== t.pathMatch && "full" !== t.pathMatch && "prefix" !== t.pathMatch) throw new Error(`Invalid configuration of route '${e}': pathMatch can only be set to 'prefix' or 'full'`);
          t.children && Fd(t.children, e)
        }

        function zd(t, e) {
          return e ? t || e.path ? t && !e.path ? `${t}/` : !t && e.path ? e.path : `${t}/${e.path}` : "" : t
        }

        function jd(t) {
          const e = t.children && t.children.map(jd),
            n = e ? Object.assign(Object.assign({}, t), {
              children: e
            }) : Object.assign({}, t);
          return !n.component && (e || n.loadChildren) && n.outlet && "primary" !== n.outlet && (n.component = Ad), n
        }

        function Vd(t, e) {
          const n = Object.keys(t),
            i = Object.keys(e);
          if (!n || !i || n.length != i.length) return !1;
          let r;
          for (let s = 0; s < n.length; s++)
            if (r = n[s], !Ud(t[r], e[r])) return !1;
          return !0
        }

        function Ud(t, e) {
          return Array.isArray(t) && Array.isArray(e) ? t.length == e.length && t.every(t => e.indexOf(t) > -1) : t === e
        }

        function Hd(t) {
          return Array.prototype.concat.apply([], t)
        }

        function Bd(t) {
          return t.length > 0 ? t[t.length - 1] : null
        }

        function $d(t, e) {
          for (const n in t) t.hasOwnProperty(n) && e(t[n], n)
        }

        function Zd(t) {
          return Ks(t) ? t : Ws(t) ? U(Promise.resolve(t)) : Uu(t)
        }

        function qd(t, e, n) {
          return n ? function (t, e) {
            return Vd(t, e)
          }(t.queryParams, e.queryParams) && function t(e, n) {
            if (!Yd(e.segments, n.segments)) return !1;
            if (e.numberOfChildren !== n.numberOfChildren) return !1;
            for (const i in n.children) {
              if (!e.children[i]) return !1;
              if (!t(e.children[i], n.children[i])) return !1
            }
            return !0
          }(t.root, e.root) : function (t, e) {
            return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every(n => Ud(t[n], e[n]))
          }(t.queryParams, e.queryParams) && function t(e, n) {
            return function e(n, i, r) {
              if (n.segments.length > r.length) return !!Yd(n.segments.slice(0, r.length), r) && !i.hasChildren();
              if (n.segments.length === r.length) {
                if (!Yd(n.segments, r)) return !1;
                for (const e in i.children) {
                  if (!n.children[e]) return !1;
                  if (!t(n.children[e], i.children[e])) return !1
                }
                return !0
              } {
                const t = r.slice(0, n.segments.length),
                  s = r.slice(n.segments.length);
                return !!Yd(n.segments, t) && !!n.children.primary && e(n.children.primary, i, s)
              }
            }(e, n, n.segments)
          }(t.root, e.root)
        }
        class Gd {
          constructor(t, e, n) {
            this.root = t, this.queryParams = e, this.fragment = n
          }
          get queryParamMap() {
            return this._queryParamMap || (this._queryParamMap = Md(this.queryParams)), this._queryParamMap
          }
          toString() {
            return tp.serialize(this)
          }
        }
        class Wd {
          constructor(t, e) {
            this.segments = t, this.children = e, this.parent = null, $d(e, (t, e) => t.parent = this)
          }
          hasChildren() {
            return this.numberOfChildren > 0
          }
          get numberOfChildren() {
            return Object.keys(this.children).length
          }
          toString() {
            return ep(this)
          }
        }
        class Kd {
          constructor(t, e) {
            this.path = t, this.parameters = e
          }
          get parameterMap() {
            return this._parameterMap || (this._parameterMap = Md(this.parameters)), this._parameterMap
          }
          toString() {
            return ap(this)
          }
        }

        function Yd(t, e) {
          return t.length === e.length && t.every((t, n) => t.path === e[n].path)
        }

        function Jd(t, e) {
          let n = [];
          return $d(t.children, (t, i) => {
            "primary" === i && (n = n.concat(e(t, i)))
          }), $d(t.children, (t, i) => {
            "primary" !== i && (n = n.concat(e(t, i)))
          }), n
        }
        class Qd {}
        class Xd {
          parse(t) {
            const e = new dp(t);
            return new Gd(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment())
          }
          serialize(t) {
            var e;
            return `${`/${function t(e,n){if(!e.hasChildren())return ep(e);if(n){const n=e.children.primary?t(e.children.primary,!1):"",i=[];return $d(e.children,(e,n)=>{"primary"!==n&&i.push(`${n}:${t(e,!1)}`)}),i.length>0?`${n}(${i.join("//")})`: n
          } {
            const n = Jd(e, (n, i) => "primary" === i ? [t(e.children.primary, !1)] : [`${i}:${t(n,!1)}`]);
            return `${ep(e)}/(${n.join("//")})`
          }
        }(t.root, !0)
      }
      `}${function(t){const e=Object.keys(t).map(e=>{const n=t[e];return Array.isArray(n)?n.map(t=>`${ip(e)}=${ip(t)}`).join("&"):`${ip(e)}=${ip(n)}`});return e.length?` ? $ {
        e.join("&")
      }
      `:""}(t.queryParams)}${"string"==typeof t.fragment?`#${e=t.fragment,encodeURI(e)}`:""}`
    }
  }
  const tp = new Xd;

  function ep(t) {
    return t.segments.map(t => ap(t)).join("/")
  }

  function np(t) {
    return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
  }

  function ip(t) {
    return np(t).replace(/%3B/gi, ";")
  }

  function rp(t) {
    return np(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
  }

  function sp(t) {
    return decodeURIComponent(t)
  }

  function op(t) {
    return sp(t.replace(/\+/g, "%20"))
  }

  function ap(t) {
    return `${rp(t.path)}${e=t.parameters,Object.keys(e).map(t=>`;${rp(t)}=${rp(e[t])}`).join("")}`;
    var e
  }
  const lp = /^[^\/()?;=#]+/;

  function cp(t) {
    const e = t.match(lp);
    return e ? e[0] : ""
  }
  const up = /^[^=?&#]+/, hp = /^[^?&#]+/; class dp {
    constructor(t) {
      this.url = t, this.remaining = t
    }
    parseRootSegment() {
      return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new Wd([], {}) : new Wd([], this.parseChildren())
    }
    parseQueryParams() {
      const t = {};
      if (this.consumeOptional("?"))
        do {
          this.parseQueryParam(t)
        } while (this.consumeOptional("&"));
      return t
    }
    parseFragment() {
      return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
    }
    parseChildren() {
      if ("" === this.remaining) return {};
      this.consumeOptional("/");
      const t = [];
      for (this.peekStartsWith("(") || t.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), t.push(this.parseSegment());
      let e = {};
      this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0));
      let n = {};
      return this.peekStartsWith("(") && (n = this.parseParens(!1)), (t.length > 0 || Object.keys(e).length > 0) && (n.primary = new Wd(t, e)), n
    }
    parseSegment() {
      const t = cp(this.remaining);
      if ("" === t && this.peekStartsWith(";")) throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
      return this.capture(t), new Kd(sp(t), this.parseMatrixParams())
    }
    parseMatrixParams() {
      const t = {};
      for (; this.consumeOptional(";");) this.parseParam(t);
      return t
    }
    parseParam(t) {
      const e = cp(this.remaining);
      if (!e) return;
      this.capture(e);
      let n = "";
      if (this.consumeOptional("=")) {
        const t = cp(this.remaining);
        t && (n = t, this.capture(n))
      }
      t[sp(e)] = sp(n)
    }
    parseQueryParam(t) {
      const e = function (t) {
        const e = t.match(up);
        return e ? e[0] : ""
      }(this.remaining);
      if (!e) return;
      this.capture(e);
      let n = "";
      if (this.consumeOptional("=")) {
        const t = function (t) {
          const e = t.match(hp);
          return e ? e[0] : ""
        }(this.remaining);
        t && (n = t, this.capture(n))
      }
      const i = op(e),
        r = op(n);
      if (t.hasOwnProperty(i)) {
        let e = t[i];
        Array.isArray(e) || (e = [e], t[i] = e), e.push(r)
      } else t[i] = r
    }
    parseParens(t) {
      const e = {};
      for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
        const n = cp(this.remaining),
          i = this.remaining[n.length];
        if ("/" !== i && ")" !== i && ";" !== i) throw new Error(`Cannot parse url '${this.url}'`);
        let r = void 0;
        n.indexOf(":") > -1 ? (r = n.substr(0, n.indexOf(":")), this.capture(r), this.capture(":")) : t && (r = "primary");
        const s = this.parseChildren();
        e[r] = 1 === Object.keys(s).length ? s.primary : new Wd([], s), this.consumeOptional("//")
      }
      return e
    }
    peekStartsWith(t) {
      return this.remaining.startsWith(t)
    }
    consumeOptional(t) {
      return !!this.peekStartsWith(t) && (this.remaining = this.remaining.substring(t.length), !0)
    }
    capture(t) {
      if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`)
    }
  }
  class pp {
    constructor(t) {
      this._root = t
    }
    get root() {
      return this._root.value
    }
    parent(t) {
      const e = this.pathFromRoot(t);
      return e.length > 1 ? e[e.length - 2] : null
    }
    children(t) {
      const e = fp(t, this._root);
      return e ? e.children.map(t => t.value) : []
    }
    firstChild(t) {
      const e = fp(t, this._root);
      return e && e.children.length > 0 ? e.children[0].value : null
    }
    siblings(t) {
      const e = mp(t, this._root);
      return e.length < 2 ? [] : e[e.length - 2].children.map(t => t.value).filter(e => e !== t)
    }
    pathFromRoot(t) {
      return mp(t, this._root).map(t => t.value)
    }
  }

  function fp(t, e) {
    if (t === e.value) return e;
    for (const n of e.children) {
      const e = fp(t, n);
      if (e) return e
    }
    return null
  }

  function mp(t, e) {
    if (t === e.value) return [e];
    for (const n of e.children) {
      const i = mp(t, n);
      if (i.length) return i.unshift(e), i
    }
    return []
  }
  class gp {
    constructor(t, e) {
      this.value = t, this.children = e
    }
    toString() {
      return `TreeNode(${this.value})`
    }
  }

  function vp(t) {
    const e = {};
    return t && t.children.forEach(t => e[t.value.outlet] = t), e
  }
  class _p extends pp {
    constructor(t, e) {
      super(t), this.snapshot = e, Cp(this, t)
    }
    toString() {
      return this.snapshot.toString()
    }
  }

  function yp(t, e) {
    const n = function (t, e) {
        const n = new xp([], {}, {}, "", {}, "primary", e, null, t.root, -1, {});
        return new Sp("", new gp(n, []))
      }(t, e),
      i = new kh([new Kd("", {})]),
      r = new kh({}),
      s = new kh({}),
      o = new kh({}),
      a = new kh(""),
      l = new bp(i, r, o, a, s, "primary", e, n.root);
    return l.snapshot = n.root, new _p(new gp(l, []), n)
  }
  class bp {
    constructor(t, e, n, i, r, s, o, a) {
      this.url = t, this.params = e, this.queryParams = n, this.fragment = i, this.data = r, this.outlet = s, this.component = o, this._futureSnapshot = a
    }
    get routeConfig() {
      return this._futureSnapshot.routeConfig
    }
    get root() {
      return this._routerState.root
    }
    get parent() {
      return this._routerState.parent(this)
    }
    get firstChild() {
      return this._routerState.firstChild(this)
    }
    get children() {
      return this._routerState.children(this)
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this)
    }
    get paramMap() {
      return this._paramMap || (this._paramMap = this.params.pipe(D(t => Md(t)))), this._paramMap
    }
    get queryParamMap() {
      return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(D(t => Md(t)))), this._queryParamMap
    }
    toString() {
      return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
    }
  }

  function wp(t, e = "emptyOnly") {
    const n = t.pathFromRoot;
    let i = 0;
    if ("always" !== e)
      for (i = n.length - 1; i >= 1;) {
        const t = n[i],
          e = n[i - 1];
        if (t.routeConfig && "" === t.routeConfig.path) i--;
        else {
          if (e.component) break;
          i--
        }
      }
    return function (t) {
      return t.reduce((t, e) => ({
        params: Object.assign(Object.assign({}, t.params), e.params),
        data: Object.assign(Object.assign({}, t.data), e.data),
        resolve: Object.assign(Object.assign({}, t.resolve), e._resolvedData)
      }), {
        params: {},
        data: {},
        resolve: {}
      })
    }(n.slice(i))
  }
  class xp {
    constructor(t, e, n, i, r, s, o, a, l, c, u) {
      this.url = t, this.params = e, this.queryParams = n, this.fragment = i, this.data = r, this.outlet = s, this.component = o, this.routeConfig = a, this._urlSegment = l, this._lastPathIndex = c, this._resolve = u
    }
    get root() {
      return this._routerState.root
    }
    get parent() {
      return this._routerState.parent(this)
    }
    get firstChild() {
      return this._routerState.firstChild(this)
    }
    get children() {
      return this._routerState.children(this)
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this)
    }
    get paramMap() {
      return this._paramMap || (this._paramMap = Md(this.params)), this._paramMap
    }
    get queryParamMap() {
      return this._queryParamMap || (this._queryParamMap = Md(this.queryParams)), this._queryParamMap
    }
    toString() {
      return `Route(url:'${this.url.map(t=>t.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`
    }
  }
  class Sp extends pp {
    constructor(t, e) {
      super(e), this.url = t, Cp(this, e)
    }
    toString() {
      return kp(this._root)
    }
  }

  function Cp(t, e) {
    e.value._routerState = t, e.children.forEach(e => Cp(t, e))
  }

  function kp(t) {
    const e = t.children.length > 0 ? ` { ${t.children.map(kp).join(", ")} } ` : "";
    return `${t.value}${e}`
  }

  function Pp(t) {
    if (t.snapshot) {
      const e = t.snapshot,
        n = t._futureSnapshot;
      t.snapshot = n, Vd(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams), e.fragment !== n.fragment && t.fragment.next(n.fragment), Vd(e.params, n.params) || t.params.next(n.params),
        function (t, e) {
          if (t.length !== e.length) return !1;
          for (let n = 0; n < t.length; ++n)
            if (!Vd(t[n], e[n])) return !1;
          return !0
        }(e.url, n.url) || t.url.next(n.url), Vd(e.data, n.data) || t.data.next(n.data)
    } else t.snapshot = t._futureSnapshot, t.data.next(t._futureSnapshot.data)
  }

  function Ep(t, e) {
    var n, i;
    return Vd(t.params, e.params) && Yd(n = t.url, i = e.url) && n.every((t, e) => Vd(t.parameters, i[e].parameters)) && !(!t.parent != !e.parent) && (!t.parent || Ep(t.parent, e.parent))
  }

  function Tp(t) {
    return "object" == typeof t && null != t && !t.outlets && !t.segmentPath
  }

  function Lp(t, e, n, i, r) {
    let s = {};
    return i && $d(i, (t, e) => {
      s[e] = Array.isArray(t) ? t.map(t => `${t}`) : `${t}`
    }), new Gd(n.root === t ? e : function t(e, n, i) {
      const r = {};
      return $d(e.children, (e, s) => {
        r[s] = e === n ? i : t(e, n, i)
      }), new Wd(e.segments, r)
    }(n.root, t, e), s, r)
  }
  class Ap {
    constructor(t, e, n) {
      if (this.isAbsolute = t, this.numberOfDoubleDots = e, this.commands = n, t && n.length > 0 && Tp(n[0])) throw new Error("Root segment cannot have matrix parameters");
      const i = n.find(t => "object" == typeof t && null != t && t.outlets);
      if (i && i !== Bd(n)) throw new Error("{outlets:{}} has to be the last command")
    }
    toRoot() {
      return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
    }
  }
  class Ip {
    constructor(t, e, n) {
      this.segmentGroup = t, this.processChildren = e, this.index = n
    }
  }

  function Mp(t) {
    return "object" == typeof t && null != t && t.outlets ? t.outlets.primary : `${t}`
  }

  function Op(t, e, n) {
    if (t || (t = new Wd([], {})), 0 === t.segments.length && t.hasChildren()) return Np(t, e, n);
    const i = function (t, e, n) {
        let i = 0,
          r = e;
        const s = {
          match: !1,
          pathIndex: 0,
          commandIndex: 0
        };
        for (; r < t.segments.length;) {
          if (i >= n.length) return s;
          const e = t.segments[r],
            o = Mp(n[i]),
            a = i < n.length - 1 ? n[i + 1] : null;
          if (r > 0 && void 0 === o) break;
          if (o && a && "object" == typeof a && void 0 === a.outlets) {
            if (!zp(o, a, e)) return s;
            i += 2
          } else {
            if (!zp(o, {}, e)) return s;
            i++
          }
          r++
        }
        return {
          match: !0,
          pathIndex: r,
          commandIndex: i
        }
      }(t, e, n),
      r = n.slice(i.commandIndex);
    if (i.match && i.pathIndex < t.segments.length) {
      const e = new Wd(t.segments.slice(0, i.pathIndex), {});
      return e.children.primary = new Wd(t.segments.slice(i.pathIndex), t.children), Np(e, 0, r)
    }
    return i.match && 0 === r.length ? new Wd(t.segments, {}) : i.match && !t.hasChildren() ? Rp(t, e, n) : i.match ? Np(t, 0, r) : Rp(t, e, n)
  }

  function Np(t, e, n) {
    if (0 === n.length) return new Wd(t.segments, {}); {
      const i = function (t) {
          return "object" != typeof t[0] || void 0 === t[0].outlets ? {
            primary: t
          } : t[0].outlets
        }(n),
        r = {};
      return $d(i, (n, i) => {
        null !== n && (r[i] = Op(t.children[i], e, n))
      }), $d(t.children, (t, e) => {
        void 0 === i[e] && (r[e] = t)
      }), new Wd(t.segments, r)
    }
  }

  function Rp(t, e, n) {
    const i = t.segments.slice(0, e);
    let r = 0;
    for (; r < n.length;) {
      if ("object" == typeof n[r] && void 0 !== n[r].outlets) {
        const t = Fp(n[r].outlets);
        return new Wd(i, t)
      }
      if (0 === r && Tp(n[0])) {
        i.push(new Kd(t.segments[e].path, n[0])), r++;
        continue
      }
      const s = Mp(n[r]),
        o = r < n.length - 1 ? n[r + 1] : null;
      s && o && Tp(o) ? (i.push(new Kd(s, Dp(o))), r += 2) : (i.push(new Kd(s, {})), r++)
    }
    return new Wd(i, {})
  }

  function Fp(t) {
    const e = {};
    return $d(t, (t, n) => {
      null !== t && (e[n] = Rp(new Wd([], {}), 0, t))
    }), e
  }

  function Dp(t) {
    const e = {};
    return $d(t, (t, n) => e[n] = `${t}`), e
  }

  function zp(t, e, n) {
    return t == n.path && Vd(e, n.parameters)
  }
  class jp {
    constructor(t, e, n, i) {
      this.routeReuseStrategy = t, this.futureState = e, this.currState = n, this.forwardEvent = i
    }
    activate(t) {
      const e = this.futureState._root,
        n = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(e, n, t), Pp(this.futureState.root), this.activateChildRoutes(e, n, t)
    }
    deactivateChildRoutes(t, e, n) {
      const i = vp(e);
      t.children.forEach(t => {
        const e = t.value.outlet;
        this.deactivateRoutes(t, i[e], n), delete i[e]
      }), $d(i, (t, e) => {
        this.deactivateRouteAndItsChildren(t, n)
      })
    }
    deactivateRoutes(t, e, n) {
      const i = t.value,
        r = e ? e.value : null;
      if (i === r)
        if (i.component) {
          const r = n.getContext(i.outlet);
          r && this.deactivateChildRoutes(t, e, r.children)
        } else this.deactivateChildRoutes(t, e, n);
      else r && this.deactivateRouteAndItsChildren(e, n)
    }
    deactivateRouteAndItsChildren(t, e) {
      this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, e) : this.deactivateRouteAndOutlet(t, e)
    }
    detachAndStoreRouteSubtree(t, e) {
      const n = e.getContext(t.value.outlet);
      if (n && n.outlet) {
        const e = n.outlet.detach(),
          i = n.children.onOutletDeactivated();
        this.routeReuseStrategy.store(t.value.snapshot, {
          componentRef: e,
          route: t,
          contexts: i
        })
      }
    }
    deactivateRouteAndOutlet(t, e) {
      const n = e.getContext(t.value.outlet);
      if (n) {
        const i = vp(t),
          r = t.value.component ? n.children : e;
        $d(i, (t, e) => this.deactivateRouteAndItsChildren(t, r)), n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated())
      }
    }
    activateChildRoutes(t, e, n) {
      const i = vp(e);
      t.children.forEach(t => {
        this.activateRoutes(t, i[t.value.outlet], n), this.forwardEvent(new Td(t.value.snapshot))
      }), t.children.length && this.forwardEvent(new Pd(t.value.snapshot))
    }
    activateRoutes(t, e, n) {
      const i = t.value,
        r = e ? e.value : null;
      if (Pp(i), i === r)
        if (i.component) {
          const r = n.getOrCreateContext(i.outlet);
          this.activateChildRoutes(t, e, r.children)
        } else this.activateChildRoutes(t, e, n);
      else if (i.component) {
        const e = n.getOrCreateContext(i.outlet);
        if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
          const t = this.routeReuseStrategy.retrieve(i.snapshot);
          this.routeReuseStrategy.store(i.snapshot, null), e.children.onOutletReAttached(t.contexts), e.attachRef = t.componentRef, e.route = t.route.value, e.outlet && e.outlet.attach(t.componentRef, t.route.value), Vp(t.route)
        } else {
          const n = function (t) {
              for (let e = t.parent; e; e = e.parent) {
                const t = e.routeConfig;
                if (t && t._loadedConfig) return t._loadedConfig;
                if (t && t.component) return null
              }
              return null
            }(i.snapshot),
            r = n ? n.module.componentFactoryResolver : null;
          e.attachRef = null, e.route = i, e.resolver = r, e.outlet && e.outlet.activateWith(i, r), this.activateChildRoutes(t, null, e.children)
        }
      } else this.activateChildRoutes(t, null, n)
    }
  }

  function Vp(t) {
    Pp(t.value), t.children.forEach(Vp)
  }

  function Up(t) {
    return "function" == typeof t
  }

  function Hp(t) {
    return t instanceof Gd
  }
  class Bp {
    constructor(t) {
      this.segmentGroup = t || null
    }
  }
  class $p {
    constructor(t) {
      this.urlTree = t
    }
  }

  function Zp(t) {
    return new b(e => e.error(new Bp(t)))
  }

  function qp(t) {
    return new b(e => e.error(new $p(t)))
  }

  function Gp(t) {
    return new b(e => e.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${t}'`)))
  }
  class Wp {
    constructor(t, e, n, i, r) {
      this.configLoader = e, this.urlSerializer = n, this.urlTree = i, this.config = r, this.allowRedirects = !0, this.ngModule = t.get(ie)
    }
    apply() {
      return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, "primary").pipe(D(t => this.createUrlTree(t, this.urlTree.queryParams, this.urlTree.fragment))).pipe(qh(t => {
        if (t instanceof $p) return this.allowRedirects = !1, this.match(t.urlTree);
        if (t instanceof Bp) throw this.noMatchError(t);
        throw t
      }))
    }
    match(t) {
      return this.expandSegmentGroup(this.ngModule, this.config, t.root, "primary").pipe(D(e => this.createUrlTree(e, t.queryParams, t.fragment))).pipe(qh(t => {
        if (t instanceof Bp) throw this.noMatchError(t);
        throw t
      }))
    }
    noMatchError(t) {
      return new Error(`Cannot match any routes. URL Segment: '${t.segmentGroup}'`)
    }
    createUrlTree(t, e, n) {
      const i = t.segments.length > 0 ? new Wd([], {
        primary: t
      }) : t;
      return new Gd(i, e, n)
    }
    expandSegmentGroup(t, e, n, i) {
      return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(t, e, n).pipe(D(t => new Wd([], t))) : this.expandSegment(t, n, e, n.segments, i, !0)
    }
    expandChildren(t, e, n) {
      return function (t, e) {
        if (0 === Object.keys(t).length) return Uu({});
        const n = [],
          i = [],
          r = {};
        return $d(t, (t, s) => {
          const o = e(s, t).pipe(D(t => r[s] = t));
          "primary" === s ? n.push(o) : i.push(o)
        }), Uu.apply(null, n.concat(i)).pipe(Oh(), Zh(), D(() => r))
      }(n.children, (n, i) => this.expandSegmentGroup(t, e, i, n))
    }
    expandSegment(t, e, n, i, r, s) {
      return Uu(...n).pipe(D(o => this.expandSegmentAgainstRoute(t, e, n, o, i, r, s).pipe(qh(t => {
        if (t instanceof Bp) return Uu(null);
        throw t
      }))), Oh(), Qh(t => !!t), qh((t, n) => {
        if (t instanceof Ph || "EmptyError" === t.name) {
          if (this.noLeftoversInUrl(e, i, r)) return Uu(new Wd([], {}));
          throw new Bp(e)
        }
        throw t
      }))
    }
    noLeftoversInUrl(t, e, n) {
      return 0 === e.length && !t.children[n]
    }
    expandSegmentAgainstRoute(t, e, n, i, r, s, o) {
      return Qp(i) !== s ? Zp(e) : void 0 === i.redirectTo ? this.matchSegmentAgainstRoute(t, e, i, r) : o && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, i, r, s) : Zp(e)
    }
    expandSegmentAgainstRouteUsingRedirect(t, e, n, i, r, s) {
      return "**" === i.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, i, s) : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, i, r, s)
    }
    expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, n, i) {
      const r = this.applyRedirectCommands([], n.redirectTo, {});
      return n.redirectTo.startsWith("/") ? qp(r) : this.lineralizeSegments(n, r).pipe(H(n => {
        const r = new Wd(n, {});
        return this.expandSegment(t, r, e, n, i, !1)
      }))
    }
    expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, i, r, s) {
      const {
        matched: o,
        consumedSegments: a,
        lastChild: l,
        positionalParamSegments: c
      } = Kp(e, i, r);
      if (!o) return Zp(e);
      const u = this.applyRedirectCommands(a, i.redirectTo, c);
      return i.redirectTo.startsWith("/") ? qp(u) : this.lineralizeSegments(i, u).pipe(H(i => this.expandSegment(t, e, n, i.concat(r.slice(l)), s, !1)))
    }
    matchSegmentAgainstRoute(t, e, n, i) {
      if ("**" === n.path) return n.loadChildren ? this.configLoader.load(t.injector, n).pipe(D(t => (n._loadedConfig = t, new Wd(i, {})))) : Uu(new Wd(i, {}));
      const {
        matched: r,
        consumedSegments: s,
        lastChild: o
      } = Kp(e, n, i);
      if (!r) return Zp(e);
      const a = i.slice(o);
      return this.getChildConfig(t, n, i).pipe(H(t => {
        const n = t.module,
          i = t.routes,
          {
            segmentGroup: r,
            slicedSegments: o
          } = function (t, e, n, i) {
            return n.length > 0 && function (t, e, n) {
              return n.some(n => Jp(t, e, n) && "primary" !== Qp(n))
            }(t, n, i) ? {
              segmentGroup: Yp(new Wd(e, function (t, e) {
                const n = {};
                n.primary = e;
                for (const i of t) "" === i.path && "primary" !== Qp(i) && (n[Qp(i)] = new Wd([], {}));
                return n
              }(i, new Wd(n, t.children)))),
              slicedSegments: []
            } : 0 === n.length && function (t, e, n) {
              return n.some(n => Jp(t, e, n))
            }(t, n, i) ? {
              segmentGroup: Yp(new Wd(t.segments, function (t, e, n, i) {
                const r = {};
                for (const s of n) Jp(t, e, s) && !i[Qp(s)] && (r[Qp(s)] = new Wd([], {}));
                return Object.assign(Object.assign({}, i), r)
              }(t, n, i, t.children))),
              slicedSegments: n
            } : {
              segmentGroup: t,
              slicedSegments: n
            }
          }(e, s, a, i);
        return 0 === o.length && r.hasChildren() ? this.expandChildren(n, i, r).pipe(D(t => new Wd(s, t))) : 0 === i.length && 0 === o.length ? Uu(new Wd(s, {})) : this.expandSegment(n, r, i, o, "primary", !0).pipe(D(t => new Wd(s.concat(t.segments), t.children)))
      }))
    }
    getChildConfig(t, e, n) {
      return e.children ? Uu(new Rd(e.children, t)) : e.loadChildren ? void 0 !== e._loadedConfig ? Uu(e._loadedConfig) : function (t, e, n) {
        const i = e.canLoad;
        return i && 0 !== i.length ? U(i).pipe(D(i => {
          const r = t.get(i);
          let s;
          if (function (t) {
              return t && Up(t.canLoad)
            }(r)) s = r.canLoad(e, n);
          else {
            if (!Up(r)) throw new Error("Invalid CanLoad guard");
            s = r(e, n)
          }
          return Zd(s)
        })).pipe(Oh(), (r = t => !0 === t, t => t.lift(new Xh(r, void 0, t)))) : Uu(!0);
        var r
      }(t.injector, e, n).pipe(H(n => n ? this.configLoader.load(t.injector, e).pipe(D(t => (e._loadedConfig = t, t))) : function (t) {
        return new b(e => e.error(Od(`Cannot load children because the guard of the route "path: '${t.path}'" returned false`)))
      }(e))) : Uu(new Rd([], t))
    }
    lineralizeSegments(t, e) {
      let n = [],
        i = e.root;
      for (;;) {
        if (n = n.concat(i.segments), 0 === i.numberOfChildren) return Uu(n);
        if (i.numberOfChildren > 1 || !i.children.primary) return Gp(t.redirectTo);
        i = i.children.primary
      }
    }
    applyRedirectCommands(t, e, n) {
      return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n)
    }
    applyRedirectCreatreUrlTree(t, e, n, i) {
      const r = this.createSegmentGroup(t, e.root, n, i);
      return new Gd(r, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment)
    }
    createQueryParams(t, e) {
      const n = {};
      return $d(t, (t, i) => {
        if ("string" == typeof t && t.startsWith(":")) {
          const r = t.substring(1);
          n[i] = e[r]
        } else n[i] = t
      }), n
    }
    createSegmentGroup(t, e, n, i) {
      const r = this.createSegments(t, e.segments, n, i);
      let s = {};
      return $d(e.children, (e, r) => {
        s[r] = this.createSegmentGroup(t, e, n, i)
      }), new Wd(r, s)
    }
    createSegments(t, e, n, i) {
      return e.map(e => e.path.startsWith(":") ? this.findPosParam(t, e, i) : this.findOrReturn(e, n))
    }
    findPosParam(t, e, n) {
      const i = n[e.path.substring(1)];
      if (!i) throw new Error(`Cannot redirect to '${t}'. Cannot find '${e.path}'.`);
      return i
    }
    findOrReturn(t, e) {
      let n = 0;
      for (const i of e) {
        if (i.path === t.path) return e.splice(n), i;
        n++
      }
      return t
    }
  }

  function Kp(t, e, n) {
    if ("" === e.path) return "full" === e.pathMatch && (t.hasChildren() || n.length > 0) ? {
      matched: !1,
      consumedSegments: [],
      lastChild: 0,
      positionalParamSegments: {}
    } : {
      matched: !0,
      consumedSegments: [],
      lastChild: 0,
      positionalParamSegments: {}
    };
    const i = (e.matcher || Nd)(n, t, e);
    return i ? {
      matched: !0,
      consumedSegments: i.consumed,
      lastChild: i.consumed.length,
      positionalParamSegments: i.posParams
    } : {
      matched: !1,
      consumedSegments: [],
      lastChild: 0,
      positionalParamSegments: {}
    }
  }

  function Yp(t) {
    if (1 === t.numberOfChildren && t.children.primary) {
      const e = t.children.primary;
      return new Wd(t.segments.concat(e.segments), e.children)
    }
    return t
  }

  function Jp(t, e, n) {
    return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 !== n.redirectTo
  }

  function Qp(t) {
    return t.outlet || "primary"
  }
  class Xp {
    constructor(t) {
      this.path = t, this.route = this.path[this.path.length - 1]
    }
  }
  class tf {
    constructor(t, e) {
      this.component = t, this.route = e
    }
  }

  function ef(t, e, n) {
    const i = t._root;
    return function t(e, n, i, r, s = {
      canDeactivateChecks: [],
      canActivateChecks: []
    }) {
      const o = vp(n);
      return e.children.forEach(e => {
        ! function (e, n, i, r, s = {
          canDeactivateChecks: [],
          canActivateChecks: []
        }) {
          const o = e.value,
            a = n ? n.value : null,
            l = i ? i.getContext(e.value.outlet) : null;
          if (a && o.routeConfig === a.routeConfig) {
            const c = function (t, e, n) {
              if ("function" == typeof n) return n(t, e);
              switch (n) {
                case "pathParamsChange":
                  return !Yd(t.url, e.url);
                case "pathParamsOrQueryParamsChange":
                  return !Yd(t.url, e.url) || !Vd(t.queryParams, e.queryParams);
                case "always":
                  return !0;
                case "paramsOrQueryParamsChange":
                  return !Ep(t, e) || !Vd(t.queryParams, e.queryParams);
                case "paramsChange":
                default:
                  return !Ep(t, e)
              }
            }(a, o, o.routeConfig.runGuardsAndResolvers);
            c ? s.canActivateChecks.push(new Xp(r)) : (o.data = a.data, o._resolvedData = a._resolvedData), t(e, n, o.component ? l ? l.children : null : i, r, s), c && s.canDeactivateChecks.push(new tf(l && l.outlet && l.outlet.component || null, a))
          } else a && rf(n, l, s), s.canActivateChecks.push(new Xp(r)), t(e, null, o.component ? l ? l.children : null : i, r, s)
        }(e, o[e.value.outlet], i, r.concat([e.value]), s), delete o[e.value.outlet]
      }), $d(o, (t, e) => rf(t, i.getContext(e), s)), s
    }(i, e ? e._root : null, n, [i.value])
  }

  function nf(t, e, n) {
    const i = function (t) {
      if (!t) return null;
      for (let e = t.parent; e; e = e.parent) {
        const t = e.routeConfig;
        if (t && t._loadedConfig) return t._loadedConfig
      }
      return null
    }(e);
    return (i ? i.module.injector : n).get(t)
  }

  function rf(t, e, n) {
    const i = vp(t),
      r = t.value;
    $d(i, (t, i) => {
      rf(t, r.component ? e ? e.children.getContext(i) : null : e, n)
    }), n.canDeactivateChecks.push(new tf(r.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, r))
  }
  const sf = Symbol("INITIAL_VALUE");

  function of () {
    return ed(t => function (...t) {
      let e = null,
        n = null;
      return E(t[t.length - 1]) && (n = t.pop()), "function" == typeof t[t.length - 1] && (e = t.pop()), 1 === t.length && l(t[0]) && (t = t[0]), G(t, n).lift(new Th(e))
    }(...t.map(t => t.pipe(Kh(1), function (...t) {
      const e = t[t.length - 1];
      return E(e) ? (t.pop(), n => rd(t, n, e)) : e => rd(t, e)
    }(sf)))).pipe(sd((t, e) => {
      let n = !1;
      return e.reduce((t, i, r) => {
        if (t !== sf) return t;
        if (i === sf && (n = !0), !n) {
          if (!1 === i) return i;
          if (r === e.length - 1 || Hp(i)) return i
        }
        return t
      }, t)
    }, sf), Bu(t => t !== sf), D(t => Hp(t) ? t : !0 === t), Kh(1)))
  }

  function af(t, e) {
    return null !== t && e && e(new Ed(t)), Uu(!0)
  }

  function lf(t, e) {
    return null !== t && e && e(new kd(t)), Uu(!0)
  }

  function cf(t, e, n) {
    const i = e.routeConfig ? e.routeConfig.canActivate : null;
    return i && 0 !== i.length ? Uu(i.map(i => Mh(() => {
      const r = nf(i, e, n);
      let s;
      if (function (t) {
          return t && Up(t.canActivate)
        }(r)) s = Zd(r.canActivate(e, t));
      else {
        if (!Up(r)) throw new Error("Invalid CanActivate guard");
        s = Zd(r(e, t))
      }
      return s.pipe(Qh())
    }))).pipe( of ()) : Uu(!0)
  }

  function uf(t, e, n) {
    const i = e[e.length - 1],
      r = e.slice(0, e.length - 1).reverse().map(t => function (t) {
        const e = t.routeConfig ? t.routeConfig.canActivateChild : null;
        return e && 0 !== e.length ? {
          node: t,
          guards: e
        } : null
      }(t)).filter(t => null !== t).map(e => Mh(() => Uu(e.guards.map(r => {
        const s = nf(r, e.node, n);
        let o;
        if (function (t) {
            return t && Up(t.canActivateChild)
          }(s)) o = Zd(s.canActivateChild(i, t));
        else {
          if (!Up(s)) throw new Error("Invalid CanActivateChild guard");
          o = Zd(s(i, t))
        }
        return o.pipe(Qh())
      })).pipe( of ())));
    return Uu(r).pipe( of ())
  }
  class hf {}
  class df {
    constructor(t, e, n, i, r, s) {
      this.rootComponentType = t, this.config = e, this.urlTree = n, this.url = i, this.paramsInheritanceStrategy = r, this.relativeLinkResolution = s
    }
    recognize() {
      try {
        const t = mf(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
          e = this.processSegmentGroup(this.config, t, "primary"),
          n = new xp([], Object.freeze({}), Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, "primary", this.rootComponentType, null, this.urlTree.root, -1, {}),
          i = new gp(n, e),
          r = new Sp(this.url, i);
        return this.inheritParamsAndData(r._root), Uu(r)
      } catch (t) {
        return new b(e => e.error(t))
      }
    }
    inheritParamsAndData(t) {
      const e = t.value,
        n = wp(e, this.paramsInheritanceStrategy);
      e.params = Object.freeze(n.params), e.data = Object.freeze(n.data), t.children.forEach(t => this.inheritParamsAndData(t))
    }
    processSegmentGroup(t, e, n) {
      return 0 === e.segments.length && e.hasChildren() ? this.processChildren(t, e) : this.processSegment(t, e, e.segments, n)
    }
    processChildren(t, e) {
      const n = Jd(e, (e, n) => this.processSegmentGroup(t, e, n));
      return function (t) {
        const e = {};
        t.forEach(t => {
          const n = e[t.value.outlet];
          if (n) {
            const e = n.url.map(t => t.toString()).join("/"),
              i = t.value.url.map(t => t.toString()).join("/");
            throw new Error(`Two segments cannot have the same outlet name: '${e}' and '${i}'.`)
          }
          e[t.value.outlet] = t.value
        })
      }(n), n.sort((t, e) => "primary" === t.value.outlet ? -1 : "primary" === e.value.outlet ? 1 : t.value.outlet.localeCompare(e.value.outlet)), n
    }
    processSegment(t, e, n, i) {
      for (const s of t) try {
        return this.processSegmentAgainstRoute(s, e, n, i)
      } catch (r) {
        if (!(r instanceof hf)) throw r
      }
      if (this.noLeftoversInUrl(e, n, i)) return [];
      throw new hf
    }
    noLeftoversInUrl(t, e, n) {
      return 0 === e.length && !t.children[n]
    }
    processSegmentAgainstRoute(t, e, n, i) {
      if (t.redirectTo) throw new hf;
      if ((t.outlet || "primary") !== i) throw new hf;
      let r, s = [],
        o = [];
      if ("**" === t.path) {
        const s = n.length > 0 ? Bd(n).parameters : {};
        r = new xp(n, s, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, _f(t), i, t.component, t, pf(e), ff(e) + n.length, yf(t))
      } else {
        const a = function (t, e, n) {
          if ("" === e.path) {
            if ("full" === e.pathMatch && (t.hasChildren() || n.length > 0)) throw new hf;
            return {
              consumedSegments: [],
              lastChild: 0,
              parameters: {}
            }
          }
          const i = (e.matcher || Nd)(n, t, e);
          if (!i) throw new hf;
          const r = {};
          $d(i.posParams, (t, e) => {
            r[e] = t.path
          });
          const s = i.consumed.length > 0 ? Object.assign(Object.assign({}, r), i.consumed[i.consumed.length - 1].parameters) : r;
          return {
            consumedSegments: i.consumed,
            lastChild: i.consumed.length,
            parameters: s
          }
        }(e, t, n);
        s = a.consumedSegments, o = n.slice(a.lastChild), r = new xp(s, a.parameters, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, _f(t), i, t.component, t, pf(e), ff(e) + s.length, yf(t))
      }
      const a = function (t) {
          return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : []
        }(t),
        {
          segmentGroup: l,
          slicedSegments: c
        } = mf(e, s, o, a, this.relativeLinkResolution);
      if (0 === c.length && l.hasChildren()) {
        const t = this.processChildren(a, l);
        return [new gp(r, t)]
      }
      if (0 === a.length && 0 === c.length) return [new gp(r, [])];
      const u = this.processSegment(a, l, c, "primary");
      return [new gp(r, u)]
    }
  }

  function pf(t) {
    let e = t;
    for (; e._sourceSegment;) e = e._sourceSegment;
    return e
  }

  function ff(t) {
    let e = t,
      n = e._segmentIndexShift ? e._segmentIndexShift : 0;
    for (; e._sourceSegment;) e = e._sourceSegment, n += e._segmentIndexShift ? e._segmentIndexShift : 0;
    return n - 1
  }

  function mf(t, e, n, i, r) {
    if (n.length > 0 && function (t, e, n) {
        return n.some(n => gf(t, e, n) && "primary" !== vf(n))
      }(t, n, i)) {
      const r = new Wd(e, function (t, e, n, i) {
        const r = {};
        r.primary = i, i._sourceSegment = t, i._segmentIndexShift = e.length;
        for (const s of n)
          if ("" === s.path && "primary" !== vf(s)) {
            const n = new Wd([], {});
            n._sourceSegment = t, n._segmentIndexShift = e.length, r[vf(s)] = n
          } return r
      }(t, e, i, new Wd(n, t.children)));
      return r._sourceSegment = t, r._segmentIndexShift = e.length, {
        segmentGroup: r,
        slicedSegments: []
      }
    }
    if (0 === n.length && function (t, e, n) {
        return n.some(n => gf(t, e, n))
      }(t, n, i)) {
      const s = new Wd(t.segments, function (t, e, n, i, r, s) {
        const o = {};
        for (const a of i)
          if (gf(t, n, a) && !r[vf(a)]) {
            const n = new Wd([], {});
            n._sourceSegment = t, n._segmentIndexShift = "legacy" === s ? t.segments.length : e.length, o[vf(a)] = n
          } return Object.assign(Object.assign({}, r), o)
      }(t, e, n, i, t.children, r));
      return s._sourceSegment = t, s._segmentIndexShift = e.length, {
        segmentGroup: s,
        slicedSegments: n
      }
    }
    const s = new Wd(t.segments, t.children);
    return s._sourceSegment = t, s._segmentIndexShift = e.length, {
      segmentGroup: s,
      slicedSegments: n
    }
  }

  function gf(t, e, n) {
    return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 === n.redirectTo
  }

  function vf(t) {
    return t.outlet || "primary"
  }

  function _f(t) {
    return t.data || {}
  }

  function yf(t) {
    return t.resolve || {}
  }

  function bf(t, e, n, i) {
    const r = nf(t, e, i);
    return Zd(r.resolve ? r.resolve(e, n) : r(e, n))
  }

  function wf(t) {
    return function (e) {
      return e.pipe(ed(e => {
        const n = t(e);
        return n ? U(n).pipe(D(() => e)) : U([e])
      }))
    }
  }
  class xf {
    shouldDetach(t) {
      return !1
    }
    store(t, e) {}
    shouldAttach(t) {
      return !1
    }
    retrieve(t) {
      return null
    }
    shouldReuseRoute(t, e) {
      return t.routeConfig === e.routeConfig
    }
  }
  const Sf = new Bt("ROUTES"); class Cf {
    constructor(t, e, n, i) {
      this.loader = t, this.compiler = e, this.onLoadStartListener = n, this.onLoadEndListener = i
    }
    load(t, e) {
      return this.onLoadStartListener && this.onLoadStartListener(e), this.loadModuleFactory(e.loadChildren).pipe(D(n => {
        this.onLoadEndListener && this.onLoadEndListener(e);
        const i = n.create(t);
        return new Rd(Hd(i.injector.get(Sf)).map(jd), i)
      }))
    }
    loadModuleFactory(t) {
      return "string" == typeof t ? U(this.loader.load(t)) : Zd(t()).pipe(H(t => t instanceof re ? Uu(t) : U(this.compiler.compileModuleAsync(t))))
    }
  }
  class kf {
    shouldProcessUrl(t) {
      return !0
    }
    extract(t) {
      return t
    }
    merge(t, e) {
      return t
    }
  }

  function Pf(t) {
    throw t
  }

  function Ef(t, e, n) {
    return e.parse("/")
  }

  function Tf(t, e) {
    return Uu(null)
  }
  let Lf = (() => {
    class t {
      constructor(t, e, n, i, r, s, o, a) {
        this.rootComponentType = t, this.urlSerializer = e, this.rootContexts = n, this.location = i, this.config = a, this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.navigationId = 0, this.isNgZoneEnabled = !1, this.events = new k, this.errorHandler = Pf, this.malformedUriErrorHandler = Ef, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = {
          beforePreactivation: Tf,
          afterPreactivation: Tf
        }, this.urlHandlingStrategy = new kf, this.routeReuseStrategy = new xf, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "legacy", this.ngModule = r.get(ie), this.console = r.get(cl);
        const l = r.get(Sl);
        this.isNgZoneEnabled = l instanceof Sl, this.resetConfig(a), this.currentUrlTree = new Gd(new Wd([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.configLoader = new Cf(s, o, t => this.triggerEvent(new Sd(t)), t => this.triggerEvent(new Cd(t))), this.routerState = yp(this.currentUrlTree, this.rootComponentType), this.transitions = new kh({
          id: 0,
          currentUrlTree: this.currentUrlTree,
          currentRawUrl: this.currentUrlTree,
          extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
          urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
          rawUrl: this.currentUrlTree,
          extras: {},
          resolve: null,
          reject: null,
          promise: Promise.resolve(!0),
          source: "imperative",
          restoredState: null,
          currentSnapshot: this.routerState.snapshot,
          targetSnapshot: null,
          currentRouterState: this.routerState,
          targetRouterState: null,
          guards: {
            canActivateChecks: [],
            canDeactivateChecks: []
          },
          guardsResult: null
        }), this.navigations = this.setupNavigations(this.transitions), this.processNavigations()
      }
      setupNavigations(t) {
        const e = this.events;
        return t.pipe(Bu(t => 0 !== t.id), D(t => Object.assign(Object.assign({}, t), {
          extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl)
        })), ed(t => {
          let n = !1,
            i = !1;
          return Uu(t).pipe(ld(t => {
            this.currentNavigation = {
              id: t.id,
              initialUrl: t.currentRawUrl,
              extractedUrl: t.extractedUrl,
              trigger: t.source,
              extras: t.extras,
              previousNavigation: this.lastSuccessfulNavigation ? Object.assign(Object.assign({}, this.lastSuccessfulNavigation), {
                previousNavigation: null
              }) : null
            }
          }), ed(t => {
            const n = !this.navigated || t.extractedUrl.toString() !== this.browserUrlTree.toString();
            if (("reload" === this.onSameUrlNavigation || n) && this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) return Uu(t).pipe(ed(t => {
              const n = this.transitions.getValue();
              return e.next(new fd(t.id, this.serializeUrl(t.extractedUrl), t.source, t.restoredState)), n !== this.transitions.getValue() ? Ah : [t]
            }), ed(t => Promise.resolve(t)), (i = this.ngModule.injector, r = this.configLoader, s = this.urlSerializer, o = this.config, function (t) {
              return t.pipe(ed(t => function (t, e, n, i, r) {
                return new Wp(t, e, n, i, r).apply()
              }(i, r, s, t.extractedUrl, o).pipe(D(e => Object.assign(Object.assign({}, t), {
                urlAfterRedirects: e
              })))))
            }), ld(t => {
              this.currentNavigation = Object.assign(Object.assign({}, this.currentNavigation), {
                finalUrl: t.urlAfterRedirects
              })
            }), function (t, e, n, i, r) {
              return function (s) {
                return s.pipe(H(s => function (t, e, n, i, r = "emptyOnly", s = "legacy") {
                  return new df(t, e, n, i, r, s).recognize()
                }(t, e, s.urlAfterRedirects, n(s.urlAfterRedirects), i, r).pipe(D(t => Object.assign(Object.assign({}, s), {
                  targetSnapshot: t
                })))))
              }
            }(this.rootComponentType, this.config, t => this.serializeUrl(t), this.paramsInheritanceStrategy, this.relativeLinkResolution), ld(t => {
              "eager" === this.urlUpdateStrategy && (t.extras.skipLocationChange || this.setBrowserUrl(t.urlAfterRedirects, !!t.extras.replaceUrl, t.id, t.extras.state), this.browserUrlTree = t.urlAfterRedirects)
            }), ld(t => {
              const n = new _d(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
              e.next(n)
            }));
            var i, r, s, o;
            if (n && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
              const {
                id: n,
                extractedUrl: i,
                source: r,
                restoredState: s,
                extras: o
              } = t, a = new fd(n, this.serializeUrl(i), r, s);
              e.next(a);
              const l = yp(i, this.rootComponentType).snapshot;
              return Uu(Object.assign(Object.assign({}, t), {
                targetSnapshot: l,
                urlAfterRedirects: i,
                extras: Object.assign(Object.assign({}, o), {
                  skipLocationChange: !1,
                  replaceUrl: !1
                })
              }))
            }
            return this.rawUrlTree = t.rawUrl, this.browserUrlTree = t.urlAfterRedirects, t.resolve(null), Ah
          }), wf(t => {
            const {
              targetSnapshot: e,
              id: n,
              extractedUrl: i,
              rawUrl: r,
              extras: {
                skipLocationChange: s,
                replaceUrl: o
              }
            } = t;
            return this.hooks.beforePreactivation(e, {
              navigationId: n,
              appliedUrlTree: i,
              rawUrlTree: r,
              skipLocationChange: !!s,
              replaceUrl: !!o
            })
          }), ld(t => {
            const e = new yd(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
            this.triggerEvent(e)
          }), D(t => Object.assign(Object.assign({}, t), {
            guards: ef(t.targetSnapshot, t.currentSnapshot, this.rootContexts)
          })), function (t, e) {
            return function (n) {
              return n.pipe(H(n => {
                const {
                  targetSnapshot: i,
                  currentSnapshot: r,
                  guards: {
                    canActivateChecks: s,
                    canDeactivateChecks: o
                  }
                } = n;
                return 0 === o.length && 0 === s.length ? Uu(Object.assign(Object.assign({}, n), {
                  guardsResult: !0
                })) : function (t, e, n, i) {
                  return U(t).pipe(H(t => function (t, e, n, i, r) {
                    const s = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
                    return s && 0 !== s.length ? Uu(s.map(s => {
                      const o = nf(s, e, r);
                      let a;
                      if (function (t) {
                          return t && Up(t.canDeactivate)
                        }(o)) a = Zd(o.canDeactivate(t, e, n, i));
                      else {
                        if (!Up(o)) throw new Error("Invalid CanDeactivate guard");
                        a = Zd(o(t, e, n, i))
                      }
                      return a.pipe(Qh())
                    })).pipe( of ()) : Uu(!0)
                  }(t.component, t.route, n, e, i)), Qh(t => !0 !== t, !0))
                }(o, i, r, t).pipe(H(n => n && "boolean" == typeof n ? function (t, e, n, i) {
                  return U(e).pipe(Hu(e => U([lf(e.route.parent, i), af(e.route, i), uf(t, e.path, n), cf(t, e.route, n)]).pipe(Oh(), Qh(t => !0 !== t, !0))), Qh(t => !0 !== t, !0))
                }(i, s, t, e) : Uu(n)), D(t => Object.assign(Object.assign({}, n), {
                  guardsResult: t
                })))
              }))
            }
          }(this.ngModule.injector, t => this.triggerEvent(t)), ld(t => {
            if (Hp(t.guardsResult)) {
              const e = Od(`Redirecting to "${this.serializeUrl(t.guardsResult)}"`);
              throw e.url = t.guardsResult, e
            }
          }), ld(t => {
            const e = new bd(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
            this.triggerEvent(e)
          }), Bu(t => {
            if (!t.guardsResult) {
              this.resetUrlToCurrentUrlTree();
              const n = new gd(t.id, this.serializeUrl(t.extractedUrl), "");
              return e.next(n), t.resolve(!1), !1
            }
            return !0
          }), wf(t => {
            if (t.guards.canActivateChecks.length) return Uu(t).pipe(ld(t => {
              const e = new wd(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
              this.triggerEvent(e)
            }), (e = this.paramsInheritanceStrategy, n = this.ngModule.injector, function (t) {
              return t.pipe(H(t => {
                const {
                  targetSnapshot: i,
                  guards: {
                    canActivateChecks: r
                  }
                } = t;
                return r.length ? U(r).pipe(Hu(t => function (t, e, n, i) {
                  return function (t, e, n, i) {
                    const r = Object.keys(t);
                    if (0 === r.length) return Uu({});
                    if (1 === r.length) {
                      const s = r[0];
                      return bf(t[s], e, n, i).pipe(D(t => ({
                        [s]: t
                      })))
                    }
                    const s = {};
                    return U(r).pipe(H(r => bf(t[r], e, n, i).pipe(D(t => (s[r] = t, t))))).pipe(Zh(), D(() => s))
                  }(t._resolve, t, e, i).pipe(D(e => (t._resolvedData = e, t.data = Object.assign(Object.assign({}, t.data), wp(t, n).resolve), null)))
                }(t.route, i, e, n)), function (t, e) {
                  return arguments.length >= 2 ? function (n) {
                    return _(sd(t, e), Rh(1), Hh(e))(n)
                  } : function (e) {
                    return _(sd((e, n, i) => t(e, n, i + 1)), Rh(1))(e)
                  }
                }((t, e) => t), D(e => t)) : Uu(t)
              }))
            }), ld(t => {
              const e = new xd(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
              this.triggerEvent(e)
            }));
            var e, n
          }), wf(t => {
            const {
              targetSnapshot: e,
              id: n,
              extractedUrl: i,
              rawUrl: r,
              extras: {
                skipLocationChange: s,
                replaceUrl: o
              }
            } = t;
            return this.hooks.afterPreactivation(e, {
              navigationId: n,
              appliedUrlTree: i,
              rawUrlTree: r,
              skipLocationChange: !!s,
              replaceUrl: !!o
            })
          }), D(t => {
            const e = function (t, e, n) {
              const i = function t(e, n, i) {
                if (i && e.shouldReuseRoute(n.value, i.value.snapshot)) {
                  const r = i.value;
                  r._futureSnapshot = n.value;
                  const s = function (e, n, i) {
                    return n.children.map(n => {
                      for (const r of i.children)
                        if (e.shouldReuseRoute(r.value.snapshot, n.value)) return t(e, n, r);
                      return t(e, n)
                    })
                  }(e, n, i);
                  return new gp(r, s)
                } {
                  const i = e.retrieve(n.value);
                  if (i) {
                    const t = i.route;
                    return function t(e, n) {
                      if (e.value.routeConfig !== n.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
                      if (e.children.length !== n.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                      n.value._futureSnapshot = e.value;
                      for (let i = 0; i < e.children.length; ++i) t(e.children[i], n.children[i])
                    }(n, t), t
                  } {
                    const i = new bp(new kh((r = n.value).url), new kh(r.params), new kh(r.queryParams), new kh(r.fragment), new kh(r.data), r.outlet, r.component, r),
                      s = n.children.map(n => t(e, n));
                    return new gp(i, s)
                  }
                }
                var r
              }(t, e._root, n ? n._root : void 0);
              return new _p(i, e)
            }(this.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
            return Object.assign(Object.assign({}, t), {
              targetRouterState: e
            })
          }), ld(t => {
            this.currentUrlTree = t.urlAfterRedirects, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, t.rawUrl), this.routerState = t.targetRouterState, "deferred" === this.urlUpdateStrategy && (t.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, !!t.extras.replaceUrl, t.id, t.extras.state), this.browserUrlTree = t.urlAfterRedirects)
          }), (s = this.rootContexts, o = this.routeReuseStrategy, a = t => this.triggerEvent(t), D(t => (new jp(o, t.targetRouterState, t.currentRouterState, a).activate(s), t))), ld({
            next() {
              n = !0
            },
            complete() {
              n = !0
            }
          }), (r = () => {
            if (!n && !i) {
              this.resetUrlToCurrentUrlTree();
              const n = new gd(t.id, this.serializeUrl(t.extractedUrl), `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`);
              e.next(n), t.resolve(!1)
            }
            this.currentNavigation = null
          }, t => t.lift(new hd(r))), qh(n => {
            if (i = !0, (r = n) && r.ngNavigationCancelingError) {
              const i = Hp(n.url);
              i || (this.navigated = !0, this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl));
              const r = new gd(t.id, this.serializeUrl(t.extractedUrl), n.message);
              e.next(r), i ? setTimeout(() => {
                const e = this.urlHandlingStrategy.merge(n.url, this.rawUrlTree);
                return this.scheduleNavigation(e, "imperative", null, {
                  skipLocationChange: t.extras.skipLocationChange,
                  replaceUrl: "eager" === this.urlUpdateStrategy
                }, {
                  resolve: t.resolve,
                  reject: t.reject,
                  promise: t.promise
                })
              }, 0) : t.resolve(!1)
            } else {
              this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
              const i = new vd(t.id, this.serializeUrl(t.extractedUrl), n);
              e.next(i);
              try {
                t.resolve(this.errorHandler(n))
              } catch (s) {
                t.reject(s)
              }
            }
            var r;
            return Ah
          }));
          var r, s, o, a
        }))
      }
      resetRootComponentType(t) {
        this.rootComponentType = t, this.routerState.root.component = this.rootComponentType
      }
      getTransition() {
        const t = this.transitions.value;
        return t.urlAfterRedirects = this.browserUrlTree, t
      }
      setTransition(t) {
        this.transitions.next(Object.assign(Object.assign({}, this.getTransition()), t))
      }
      initialNavigation() {
        this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {
          replaceUrl: !0
        })
      }
      setUpLocationChangeListener() {
        this.locationSubscription || (this.locationSubscription = this.location.subscribe(t => {
          let e = this.parseUrl(t.url);
          const n = "popstate" === t.type ? "popstate" : "hashchange",
            i = t.state && t.state.navigationId ? t.state : null;
          setTimeout(() => {
            this.scheduleNavigation(e, n, i, {
              replaceUrl: !0
            })
          }, 0)
        }))
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree)
      }
      getCurrentNavigation() {
        return this.currentNavigation
      }
      triggerEvent(t) {
        this.events.next(t)
      }
      resetConfig(t) {
        Fd(t), this.config = t.map(jd), this.navigated = !1, this.lastSuccessfulId = -1
      }
      ngOnDestroy() {
        this.dispose()
      }
      dispose() {
        this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = null)
      }
      createUrlTree(t, e = {}) {
        const {
          relativeTo: n,
          queryParams: i,
          fragment: r,
          preserveQueryParams: s,
          queryParamsHandling: o,
          preserveFragment: a
        } = e;
        fi() && s && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
        const l = n || this.routerState.root,
          c = a ? this.currentUrlTree.fragment : r;
        let u = null;
        if (o) switch (o) {
          case "merge":
            u = Object.assign(Object.assign({}, this.currentUrlTree.queryParams), i);
            break;
          case "preserve":
            u = this.currentUrlTree.queryParams;
            break;
          default:
            u = i || null
        } else u = s ? this.currentUrlTree.queryParams : i || null;
        return null !== u && (u = this.removeEmptyProps(u)),
          function (t, e, n, i, r) {
            if (0 === n.length) return Lp(e.root, e.root, e, i, r);
            const s = function (t) {
              if ("string" == typeof t[0] && 1 === t.length && "/" === t[0]) return new Ap(!0, 0, t);
              let e = 0,
                n = !1;
              const i = t.reduce((t, i, r) => {
                if ("object" == typeof i && null != i) {
                  if (i.outlets) {
                    const e = {};
                    return $d(i.outlets, (t, n) => {
                      e[n] = "string" == typeof t ? t.split("/") : t
                    }), [...t, {
                      outlets: e
                    }]
                  }
                  if (i.segmentPath) return [...t, i.segmentPath]
                }
                return "string" != typeof i ? [...t, i] : 0 === r ? (i.split("/").forEach((i, r) => {
                  0 == r && "." === i || (0 == r && "" === i ? n = !0 : ".." === i ? e++ : "" != i && t.push(i))
                }), t) : [...t, i]
              }, []);
              return new Ap(n, e, i)
            }(n);
            if (s.toRoot()) return Lp(e.root, new Wd([], {}), e, i, r);
            const o = function (t, e, n) {
                if (t.isAbsolute) return new Ip(e.root, !0, 0);
                if (-1 === n.snapshot._lastPathIndex) return new Ip(n.snapshot._urlSegment, !0, 0);
                const i = Tp(t.commands[0]) ? 0 : 1;
                return function (t, e, n) {
                  let i = t,
                    r = e,
                    s = n;
                  for (; s > r;) {
                    if (s -= r, i = i.parent, !i) throw new Error("Invalid number of '../'");
                    r = i.segments.length
                  }
                  return new Ip(i, !1, r - s)
                }(n.snapshot._urlSegment, n.snapshot._lastPathIndex + i, t.numberOfDoubleDots)
              }(s, e, t),
              a = o.processChildren ? Np(o.segmentGroup, o.index, s.commands) : Op(o.segmentGroup, o.index, s.commands);
            return Lp(o.segmentGroup, a, e, i, r)
          }(l, this.currentUrlTree, t, u, c)
      }
      navigateByUrl(t, e = {
        skipLocationChange: !1
      }) {
        fi() && this.isNgZoneEnabled && !Sl.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
        const n = Hp(t) ? t : this.parseUrl(t),
          i = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
        return this.scheduleNavigation(i, "imperative", null, e)
      }
      navigate(t, e = {
        skipLocationChange: !1
      }) {
        return function (t) {
          for (let e = 0; e < t.length; e++) {
            const n = t[e];
            if (null == n) throw new Error(`The requested path contains ${n} segment at index ${e}`)
          }
        }(t), this.navigateByUrl(this.createUrlTree(t, e), e)
      }
      serializeUrl(t) {
        return this.urlSerializer.serialize(t)
      }
      parseUrl(t) {
        let e;
        try {
          e = this.urlSerializer.parse(t)
        } catch (n) {
          e = this.malformedUriErrorHandler(n, this.urlSerializer, t)
        }
        return e
      }
      isActive(t, e) {
        if (Hp(t)) return qd(this.currentUrlTree, t, e);
        const n = this.parseUrl(t);
        return qd(this.currentUrlTree, n, e)
      }
      removeEmptyProps(t) {
        return Object.keys(t).reduce((e, n) => {
          const i = t[n];
          return null != i && (e[n] = i), e
        }, {})
      }
      processNavigations() {
        this.navigations.subscribe(t => {
          this.navigated = !0, this.lastSuccessfulId = t.id, this.events.next(new md(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(this.currentUrlTree))), this.lastSuccessfulNavigation = this.currentNavigation, this.currentNavigation = null, t.resolve(!0)
        }, t => {
          this.console.warn("Unhandled Navigation Error: ")
        })
      }
      scheduleNavigation(t, e, n, i, r) {
        const s = this.getTransition();
        if (s && "imperative" !== e && "imperative" === s.source && s.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
        if (s && "hashchange" == e && "popstate" === s.source && s.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
        if (s && "popstate" == e && "hashchange" === s.source && s.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
        let o, a, l;
        r ? (o = r.resolve, a = r.reject, l = r.promise) : l = new Promise((t, e) => {
          o = t, a = e
        });
        const c = ++this.navigationId;
        return this.setTransition({
          id: c,
          source: e,
          restoredState: n,
          currentUrlTree: this.currentUrlTree,
          currentRawUrl: this.rawUrlTree,
          rawUrl: t,
          extras: i,
          resolve: o,
          reject: a,
          promise: l,
          currentSnapshot: this.routerState.snapshot,
          currentRouterState: this.routerState
        }), l.catch(t => Promise.reject(t))
      }
      setBrowserUrl(t, e, n, i) {
        const r = this.urlSerializer.serialize(t);
        i = i || {}, this.location.isCurrentPathEqualTo(r) || e ? this.location.replaceState(r, "", Object.assign(Object.assign({}, i), {
          navigationId: n
        })) : this.location.go(r, "", Object.assign(Object.assign({}, i), {
          navigationId: n
        }))
      }
      resetStateAndUrl(t, e, n) {
        this.routerState = t, this.currentUrlTree = e, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n), this.resetUrlToCurrentUrlTree()
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", {
          navigationId: this.lastSuccessfulId
        })
      }
    }
    return t.\u0275fac = function (t) {
      Us()
    }, t.\u0275dir = xe({
      type: t
    }), t
  })(), Af = (() => {
    class t {
      constructor(t, e, n, i, r) {
        this.router = t, this.route = e, this.commands = [], null == n && i.setAttribute(r.nativeElement, "tabindex", "0")
      }
      set routerLink(t) {
        this.commands = null != t ? Array.isArray(t) ? t : [t] : []
      }
      set preserveQueryParams(t) {
        fi() && console && console.warn && console.warn("preserveQueryParams is deprecated!, use queryParamsHandling instead."), this.preserve = t
      }
      onClick() {
        const t = {
          skipLocationChange: Mf(this.skipLocationChange),
          replaceUrl: Mf(this.replaceUrl)
        };
        return this.router.navigateByUrl(this.urlTree, t), !0
      }
      get urlTree() {
        return this.router.createUrlTree(this.commands, {
          relativeTo: this.route,
          queryParams: this.queryParams,
          fragment: this.fragment,
          preserveQueryParams: Mf(this.preserve),
          queryParamsHandling: this.queryParamsHandling,
          preserveFragment: Mf(this.preserveFragment)
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Lf), js(bp), Vs("tabindex"), js(Vo), js(Fo))
    }, t.\u0275dir = xe({
      type: t,
      selectors: [
        ["", "routerLink", "", 5, "a", 5, "area"]
      ],
      hostBindings: function (t, e) {
        1 & t && Ys("click", (function () {
          return e.onClick()
        }))
      },
      inputs: {
        routerLink: "routerLink",
        preserveQueryParams: "preserveQueryParams",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        preserveFragment: "preserveFragment",
        skipLocationChange: "skipLocationChange",
        replaceUrl: "replaceUrl",
        state: "state"
      }
    }), t
  })(), If = (() => {
    class t {
      constructor(t, e, n) {
        this.router = t, this.route = e, this.locationStrategy = n, this.commands = [], this.subscription = t.events.subscribe(t => {
          t instanceof md && this.updateTargetUrlAndHref()
        })
      }
      set routerLink(t) {
        this.commands = null != t ? Array.isArray(t) ? t : [t] : []
      }
      set preserveQueryParams(t) {
        fi() && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."), this.preserve = t
      }
      ngOnChanges(t) {
        this.updateTargetUrlAndHref()
      }
      ngOnDestroy() {
        this.subscription.unsubscribe()
      }
      onClick(t, e, n, i) {
        if (0 !== t || e || n || i) return !0;
        if ("string" == typeof this.target && "_self" != this.target) return !0;
        const r = {
          skipLocationChange: Mf(this.skipLocationChange),
          replaceUrl: Mf(this.replaceUrl),
          state: this.state
        };
        return this.router.navigateByUrl(this.urlTree, r), !1
      }
      updateTargetUrlAndHref() {
        this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))
      }
      get urlTree() {
        return this.router.createUrlTree(this.commands, {
          relativeTo: this.route,
          queryParams: this.queryParams,
          fragment: this.fragment,
          preserveQueryParams: Mf(this.preserve),
          queryParamsHandling: this.queryParamsHandling,
          preserveFragment: Mf(this.preserveFragment)
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Lf), js(bp), js(hc))
    }, t.\u0275dir = xe({
      type: t,
      selectors: [
        ["a", "routerLink", ""],
        ["area", "routerLink", ""]
      ],
      hostVars: 2,
      hostBindings: function (t, e) {
        1 & t && Ys("click", (function (t) {
          return e.onClick(t.button, t.ctrlKey, t.metaKey, t.shiftKey)
        })), 2 & t && (fo("href", e.href, _i), Rs("target", e.target))
      },
      inputs: {
        routerLink: "routerLink",
        preserveQueryParams: "preserveQueryParams",
        target: "target",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        preserveFragment: "preserveFragment",
        skipLocationChange: "skipLocationChange",
        replaceUrl: "replaceUrl",
        state: "state"
      },
      features: [xo]
    }), t
  })();

  function Mf(t) {
    return "" === t || !!t
  }
  let Of = (() => {
    class t {
      constructor(t, e, n, i, r) {
        this.router = t, this.element = e, this.renderer = n, this.link = i, this.linkWithHref = r, this.classes = [], this.isActive = !1, this.routerLinkActiveOptions = {
          exact: !1
        }, this.subscription = t.events.subscribe(t => {
          t instanceof md && this.update()
        })
      }
      ngAfterContentInit() {
        this.links.changes.subscribe(t => this.update()), this.linksWithHrefs.changes.subscribe(t => this.update()), this.update()
      }
      set routerLinkActive(t) {
        const e = Array.isArray(t) ? t : t.split(" ");
        this.classes = e.filter(t => !!t)
      }
      ngOnChanges(t) {
        this.update()
      }
      ngOnDestroy() {
        this.subscription.unsubscribe()
      }
      update() {
        this.links && this.linksWithHrefs && this.router.navigated && Promise.resolve().then(() => {
          const t = this.hasActiveLinks();
          this.isActive !== t && (this.isActive = t, this.classes.forEach(e => {
            t ? this.renderer.addClass(this.element.nativeElement, e) : this.renderer.removeClass(this.element.nativeElement, e)
          }))
        })
      }
      isLinkActive(t) {
        return e => t.isActive(e.urlTree, this.routerLinkActiveOptions.exact)
      }
      hasActiveLinks() {
        const t = this.isLinkActive(this.router);
        return this.link && t(this.link) || this.linkWithHref && t(this.linkWithHref) || this.links.some(t) || this.linksWithHrefs.some(t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Lf), js(Fo), js(Vo), js(Af, 8), js(If, 8))
    }, t.\u0275dir = xe({
      type: t,
      selectors: [
        ["", "routerLinkActive", ""]
      ],
      contentQueries: function (t, e, n) {
        var i;
        1 & t && (Ya(n, Af, !0), Ya(n, If, !0)), 2 & t && (Ka(i = Ja()) && (e.links = i), Ka(i = Ja()) && (e.linksWithHrefs = i))
      },
      inputs: {
        routerLinkActiveOptions: "routerLinkActiveOptions",
        routerLinkActive: "routerLinkActive"
      },
      exportAs: ["routerLinkActive"],
      features: [xo]
    }), t
  })(); class Nf {
    constructor() {
      this.outlet = null, this.route = null, this.resolver = null, this.children = new Rf, this.attachRef = null
    }
  }
  class Rf {
    constructor() {
      this.contexts = new Map
    }
    onChildOutletCreated(t, e) {
      const n = this.getOrCreateContext(t);
      n.outlet = e, this.contexts.set(t, n)
    }
    onChildOutletDestroyed(t) {
      const e = this.getContext(t);
      e && (e.outlet = null)
    }
    onOutletDeactivated() {
      const t = this.contexts;
      return this.contexts = new Map, t
    }
    onOutletReAttached(t) {
      this.contexts = t
    }
    getOrCreateContext(t) {
      let e = this.getContext(t);
      return e || (e = new Nf, this.contexts.set(t, e)), e
    }
    getContext(t) {
      return this.contexts.get(t) || null
    }
  }
  let Ff = (() => {
    class t {
      constructor(t, e, n, i, r) {
        this.parentContexts = t, this.location = e, this.resolver = n, this.changeDetector = r, this.activated = null, this._activatedRoute = null, this.activateEvents = new za, this.deactivateEvents = new za, this.name = i || "primary", t.onChildOutletCreated(this.name, this)
      }
      ngOnDestroy() {
        this.parentContexts.onChildOutletDestroyed(this.name)
      }
      ngOnInit() {
        if (!this.activated) {
          const t = this.parentContexts.getContext(this.name);
          t && t.route && (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.resolver || null))
        }
      }
      get isActivated() {
        return !!this.activated
      }
      get component() {
        if (!this.activated) throw new Error("Outlet is not activated");
        return this.activated.instance
      }
      get activatedRoute() {
        if (!this.activated) throw new Error("Outlet is not activated");
        return this._activatedRoute
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
      }
      detach() {
        if (!this.activated) throw new Error("Outlet is not activated");
        this.location.detach();
        const t = this.activated;
        return this.activated = null, this._activatedRoute = null, t
      }
      attach(t, e) {
        this.activated = t, this._activatedRoute = e, this.location.insert(t.hostView)
      }
      deactivate() {
        if (this.activated) {
          const t = this.component;
          this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(t)
        }
      }
      activateWith(t, e) {
        if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
        this._activatedRoute = t;
        const n = (e = e || this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),
          i = this.parentContexts.getOrCreateContext(this.name).children,
          r = new Df(t, i, this.location.injector);
        this.activated = this.location.createComponent(n, this.location.length, r), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Rf), js(la), js(Ro), Vs("name"), js(rs))
    }, t.\u0275dir = xe({
      type: t,
      selectors: [
        ["router-outlet"]
      ],
      outputs: {
        activateEvents: "activate",
        deactivateEvents: "deactivate"
      },
      exportAs: ["outlet"]
    }), t
  })(); class Df {
    constructor(t, e, n) {
      this.route = t, this.childContexts = e, this.parent = n
    }
    get(t, e) {
      return t === bp ? this.route : t === Rf ? this.childContexts : this.parent.get(t, e)
    }
  }
  class zf {}
  class jf {
    preload(t, e) {
      return Uu(null)
    }
  }
  let Vf = (() => {
    class t {
      constructor(t, e, n, i, r) {
        this.router = t, this.injector = i, this.preloadingStrategy = r, this.loader = new Cf(e, n, e => t.triggerEvent(new Sd(e)), e => t.triggerEvent(new Cd(e)))
      }
      setUpPreloading() {
        this.subscription = this.router.events.pipe(Bu(t => t instanceof md), Hu(() => this.preload())).subscribe(() => {})
      }
      preload() {
        const t = this.injector.get(ie);
        return this.processRoutes(t, this.router.config)
      }
      ngOnDestroy() {
        this.subscription.unsubscribe()
      }
      processRoutes(t, e) {
        const n = [];
        for (const i of e)
          if (i.loadChildren && !i.canLoad && i._loadedConfig) {
            const t = i._loadedConfig;
            n.push(this.processRoutes(t.module, t.routes))
          } else i.loadChildren && !i.canLoad ? n.push(this.preloadConfig(t, i)) : i.children && n.push(this.processRoutes(t, i.children));
        return U(n).pipe(q(), D(t => {}))
      }
      preloadConfig(t, e) {
        return this.preloadingStrategy.preload(e, () => this.loader.load(t.injector, e).pipe(H(t => (e._loadedConfig = t, this.processRoutes(t.module, t.routes)))))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Xt(Lf), Xt(Zl), Xt(yl), Xt(bs), Xt(zf))
    }, t.\u0275prov = mt({
      token: t,
      factory: t.\u0275fac
    }), t
  })(), Uf = (() => {
    class t {
      constructor(t, e, n = {}) {
        this.router = t, this.viewportScroller = e, this.options = n, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, n.scrollPositionRestoration = n.scrollPositionRestoration || "disabled", n.anchorScrolling = n.anchorScrolling || "disabled"
      }
      init() {
        "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents()
      }
      createScrollEvents() {
        return this.router.events.subscribe(t => {
          t instanceof fd ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = t.navigationTrigger, this.restoredId = t.restoredState ? t.restoredState.navigationId : 0) : t instanceof md && (this.lastId = t.id, this.scheduleScrollEvent(t, this.router.parseUrl(t.urlAfterRedirects).fragment))
        })
      }
      consumeScrollEvents() {
        return this.router.events.subscribe(t => {
          t instanceof Ld && (t.position ? "top" === this.options.scrollPositionRestoration ? this.viewportScroller.scrollToPosition([0, 0]) : "enabled" === this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition(t.position) : t.anchor && "enabled" === this.options.anchorScrolling ? this.viewportScroller.scrollToAnchor(t.anchor) : "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition([0, 0]))
        })
      }
      scheduleScrollEvent(t, e) {
        this.router.triggerEvent(new Ld(t, "popstate" === this.lastSource ? this.store[this.restoredId] : null, e))
      }
      ngOnDestroy() {
        this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
      }
    }
    return t.\u0275fac = function (t) {
      Us()
    }, t.\u0275dir = xe({
      type: t
    }), t
  })();
  const Hf = new Bt("ROUTER_CONFIGURATION"), Bf = new Bt("ROUTER_FORROOT_GUARD"), $f = [gc, {
    provide: Qd,
    useClass: Xd
  }, {
    provide: Lf,
    useFactory: function (t, e, n, i, r, s, o, a = {}, l, c) {
      const u = new Lf(null, t, e, n, i, r, s, Hd(o));
      if (l && (u.urlHandlingStrategy = l), c && (u.routeReuseStrategy = c), a.errorHandler && (u.errorHandler = a.errorHandler), a.malformedUriErrorHandler && (u.malformedUriErrorHandler = a.malformedUriErrorHandler), a.enableTracing) {
        const t = tc();
        u.events.subscribe(e => {
          t.logGroup(`Router Event: ${e.constructor.name}`), t.log(e.toString()), t.log(e), t.logGroupEnd()
        })
      }
      return a.onSameUrlNavigation && (u.onSameUrlNavigation = a.onSameUrlNavigation), a.paramsInheritanceStrategy && (u.paramsInheritanceStrategy = a.paramsInheritanceStrategy), a.urlUpdateStrategy && (u.urlUpdateStrategy = a.urlUpdateStrategy), a.relativeLinkResolution && (u.relativeLinkResolution = a.relativeLinkResolution), u
    },
    deps: [Qd, Rf, gc, bs, Zl, yl, Sf, Hf, [class {}, new ct],
      [class {}, new ct]
    ]
  }, Rf, {
    provide: bp,
    useFactory: function (t) {
      return t.routerState.root
    },
    deps: [Lf]
  }, {
    provide: Zl,
    useClass: Wl
  }, Vf, jf, class {
    preload(t, e) {
      return e().pipe(qh(() => Uu(null)))
    }
  }, {
    provide: Hf,
    useValue: {
      enableTracing: !1
    }
  }];

  function Zf() {
    return new zl("Router", Lf)
  }
  let qf = (() => {
    class t {
      constructor(t, e) {}
      static forRoot(e, n) {
        return {
          ngModule: t,
          providers: [$f, Yf(e), {
              provide: Bf,
              useFactory: Kf,
              deps: [
                [Lf, new ct, new ht]
              ]
            }, {
              provide: Hf,
              useValue: n || {}
            }, {
              provide: hc,
              useFactory: Wf,
              deps: [nc, [new lt(pc), new ct], Hf]
            }, {
              provide: Uf,
              useFactory: Gf,
              deps: [Lf, hu, Hf]
            }, {
              provide: zf,
              useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : jf
            }, {
              provide: zl,
              multi: !0,
              useFactory: Zf
            },
            [Jf, {
              provide: el,
              multi: !0,
              useFactory: Qf,
              deps: [Jf]
            }, {
              provide: tm,
              useFactory: Xf,
              deps: [Jf]
            }, {
              provide: ll,
              multi: !0,
              useExisting: tm
            }]
          ]
        }
      }
      static forChild(e) {
        return {
          ngModule: t,
          providers: [Yf(e)]
        }
      }
    }
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)(Xt(Bf, 8), Xt(Lf, 8))
      }
    }), t
  })();

  function Gf(t, e, n) {
    return n.scrollOffset && e.setOffset(n.scrollOffset), new Uf(t, e, n)
  }

  function Wf(t, e, n = {}) {
    return n.useHash ? new mc(t, e) : new fc(t, e)
  }

  function Kf(t) {
    if (t) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
    return "guarded"
  }

  function Yf(t) {
    return [{
      provide: ws,
      multi: !0,
      useValue: t
    }, {
      provide: Sf,
      multi: !0,
      useValue: t
    }]
  }
  let Jf = (() => {
    class t {
      constructor(t) {
        this.injector = t, this.initNavigation = !1, this.resultOfPreactivationDone = new k
      }
      appInitializer() {
        return this.injector.get(rc, Promise.resolve(null)).then(() => {
          let t = null;
          const e = new Promise(e => t = e),
            n = this.injector.get(Lf),
            i = this.injector.get(Hf);
          if (this.isLegacyDisabled(i) || this.isLegacyEnabled(i)) t(!0);
          else if ("disabled" === i.initialNavigation) n.setUpLocationChangeListener(), t(!0);
          else {
            if ("enabled" !== i.initialNavigation) throw new Error(`Invalid initialNavigation options: '${i.initialNavigation}'`);
            n.hooks.afterPreactivation = () => this.initNavigation ? Uu(null) : (this.initNavigation = !0, t(!0), this.resultOfPreactivationDone), n.initialNavigation()
          }
          return e
        })
      }
      bootstrapListener(t) {
        const e = this.injector.get(Hf),
          n = this.injector.get(Vf),
          i = this.injector.get(Uf),
          r = this.injector.get(Lf),
          s = this.injector.get(Bl);
        t === s.components[0] && (this.isLegacyEnabled(e) ? r.initialNavigation() : this.isLegacyDisabled(e) && r.setUpLocationChangeListener(), n.setUpPreloading(), i.init(), r.resetRootComponentType(s.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
      }
      isLegacyEnabled(t) {
        return "legacy_enabled" === t.initialNavigation || !0 === t.initialNavigation || void 0 === t.initialNavigation
      }
      isLegacyDisabled(t) {
        return "legacy_disabled" === t.initialNavigation || !1 === t.initialNavigation
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Xt(bs))
    }, t.\u0275prov = mt({
      token: t,
      factory: t.\u0275fac
    }), t
  })();

  function Qf(t) {
    return t.appInitializer.bind(t)
  }

  function Xf(t) {
    return t.bootstrapListener.bind(t)
  }
  const tm = new Bt("Router Initializer"), em = [{
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  }];
  let nm = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [qf.forRoot(em)], qf
      ]
    }), t
  })(), im = (() => {
    class t {
      constructor() {
        this.title = "csss"
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-root"]
      ],
      decls: 1,
      vars: 0,
      template: function (t, e) {
        1 & t && qs(0, "router-outlet")
      },
      directives: [Ff],
      styles: [""]
    }), t
  })();

  function rm(t, e) {
    return new b(e ? n => e.schedule(sm, 0, {
      error: t,
      subscriber: n
    }) : e => e.error(t))
  }

  function sm({
    error: t,
    subscriber: e
  }) {
    e.error(t)
  }

  function om(t, e, n, r) {
    return i(n) && (r = n, n = void 0), r ? om(t, e, n).pipe(D(t => l(t) ? r(...t) : r(t))) : new b(i => {
      ! function t(e, n, i, r, s) {
        let o;
        if (function (t) {
            return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
          }(e)) {
          const t = e;
          e.addEventListener(n, i, s), o = () => t.removeEventListener(n, i, s)
        } else if (function (t) {
            return t && "function" == typeof t.on && "function" == typeof t.off
          }(e)) {
          const t = e;
          e.on(n, i), o = () => t.off(n, i)
        } else if (function (t) {
            return t && "function" == typeof t.addListener && "function" == typeof t.removeListener
          }(e)) {
          const t = e;
          e.addListener(n, i), o = () => t.removeListener(n, i)
        } else {
          if (!e || !e.length) throw new TypeError("Invalid event target");
          for (let o = 0, a = e.length; o < a; o++) t(e[o], n, i, r, s)
        }
        r.add(o)
      }(t, e, (function (t) {
        i.next(arguments.length > 1 ? Array.prototype.slice.call(arguments) : t)
      }), i, n)
    })
  }
  const am = new b(v); class lm extends h {
    constructor(t, e) {
      super()
    }
    schedule(t, e = 0) {
      return this
    }
  }
  class cm extends lm {
    constructor(t, e) {
      super(t, e), this.scheduler = t, this.work = e, this.pending = !1
    }
    schedule(t, e = 0) {
      if (this.closed) return this;
      this.state = t;
      const n = this.id,
        i = this.scheduler;
      return null != n && (this.id = this.recycleAsyncId(i, n, e)), this.pending = !0, this.delay = e, this.id = this.id || this.requestAsyncId(i, this.id, e), this
    }
    requestAsyncId(t, e, n = 0) {
      return setInterval(t.flush.bind(t, this), n)
    }
    recycleAsyncId(t, e, n = 0) {
      if (null !== n && this.delay === n && !1 === this.pending) return e;
      clearInterval(e)
    }
    execute(t, e) {
      if (this.closed) return new Error("executing a cancelled action");
      this.pending = !1;
      const n = this._execute(t, e);
      if (n) return n;
      !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
    }
    _execute(t, e) {
      let n = !1,
        i = void 0;
      try {
        this.work(t)
      } catch (r) {
        n = !0, i = !!r && r || new Error(r)
      }
      if (n) return this.unsubscribe(), i
    }
    _unsubscribe() {
      const t = this.id,
        e = this.scheduler,
        n = e.actions,
        i = n.indexOf(this);
      this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== i && n.splice(i, 1), null != t && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null
    }
  }
  let um = (() => {
    class t {
      constructor(e, n = t.now) {
        this.SchedulerAction = e, this.now = n
      }
      schedule(t, e = 0, n) {
        return new this.SchedulerAction(this, t).schedule(n, e)
      }
    }
    return t.now = () => Date.now(), t
  })(); class hm extends um {
    constructor(t, e = um.now) {
      super(t, () => hm.delegate && hm.delegate !== this ? hm.delegate.now() : e()), this.actions = [], this.active = !1, this.scheduled = void 0
    }
    schedule(t, e = 0, n) {
      return hm.delegate && hm.delegate !== this ? hm.delegate.schedule(t, e, n) : super.schedule(t, e, n)
    }
    flush(t) {
      const {
        actions: e
      } = this;
      if (this.active) return void e.push(t);
      let n;
      this.active = !0;
      do {
        if (n = t.execute(t.state, t.delay)) break
      } while (t = e.shift());
      if (this.active = !1, n) {
        for (; t = e.shift();) t.unsubscribe();
        throw n
      }
    }
  }
  const dm = new hm(cm);
  let pm = (() => {
    class t {
      constructor(t, e, n) {
        this.kind = t, this.value = e, this.error = n, this.hasValue = "N" === t
      }
      observe(t) {
        switch (this.kind) {
          case "N":
            return t.next && t.next(this.value);
          case "E":
            return t.error && t.error(this.error);
          case "C":
            return t.complete && t.complete()
        }
      }
      do(t, e, n) {
        switch (this.kind) {
          case "N":
            return t && t(this.value);
          case "E":
            return e && e(this.error);
          case "C":
            return n && n()
        }
      }
      accept(t, e, n) {
        return t && "function" == typeof t.next ? this.observe(t) : this.do(t, e, n)
      }
      toObservable() {
        switch (this.kind) {
          case "N":
            return Uu(this.value);
          case "E":
            return rm(this.error);
          case "C":
            return Ih()
        }
        throw new Error("unexpected notification kind value")
      }
      static
      createNext(e) {
        return void 0 !== e ? new t("N", e) : t.undefinedValueNotification
      }
      static createError(e) {
        return new t("E", void 0, e)
      }
      static createComplete() {
        return t.completeNotification
      }
    }
    return t.completeNotification = new t("C"), t.undefinedValueNotification = new t("N", void 0), t
  })(); class fm {
    constructor(t, e) {
      this.delay = t, this.scheduler = e
    }
    call(t, e) {
      return e.subscribe(new mm(t, this.delay, this.scheduler))
    }
  }
  class mm extends f {
    constructor(t, e, n) {
      super(t), this.delay = e, this.scheduler = n, this.queue = [], this.active = !1, this.errored = !1
    }
    static dispatch(t) {
      const e = t.source,
        n = e.queue,
        i = t.scheduler,
        r = t.destination;
      for (; n.length > 0 && n[0].time - i.now() <= 0;) n.shift().notification.observe(r);
      if (n.length > 0) {
        const e = Math.max(0, n[0].time - i.now());
        this.schedule(t, e)
      } else this.unsubscribe(), e.active = !1
    }
    _schedule(t) {
      this.active = !0, this.destination.add(t.schedule(mm.dispatch, this.delay, {
        source: this,
        destination: this.destination,
        scheduler: t
      }))
    }
    scheduleNotification(t) {
      if (!0 === this.errored) return;
      const e = this.scheduler,
        n = new gm(e.now() + this.delay, t);
      this.queue.push(n), !1 === this.active && this._schedule(e)
    }
    _next(t) {
      this.scheduleNotification(pm.createNext(t))
    }
    _error(t) {
      this.errored = !0, this.queue = [], this.destination.error(t), this.unsubscribe()
    }
    _complete() {
      this.scheduleNotification(pm.createComplete()), this.unsubscribe()
    }
  }
  class gm {
    constructor(t, e) {
      this.time = t, this.notification = e
    }
  }
  const vm = "Service workers are disabled or not supported by this browser"; class _m {
    constructor(t) {
      if (this.serviceWorker = t, t) {
        const e = om(t, "controllerchange").pipe(D(() => t.controller)),
          n = rd(Mh(() => Uu(t.controller)), e);
        this.worker = n.pipe(Bu(t => !!t)), this.registration = this.worker.pipe(ed(() => t.getRegistration()));
        const i = om(t, "message").pipe(D(t => t.data)).pipe(Bu(t => t && t.type)).pipe(et(new k));
        i.connect(), this.events = i
      } else this.worker = this.events = this.registration = Mh(() => rm(new Error("Service workers are disabled or not supported by this browser")))
    }
    postMessage(t, e) {
      return this.worker.pipe(Kh(1), ld(n => {
        n.postMessage(Object.assign({
          action: t
        }, e))
      })).toPromise().then(() => {})
    }
    postMessageWithStatus(t, e, n) {
      const i = this.waitForStatus(n),
        r = this.postMessage(t, e);
      return Promise.all([i, r]).then(() => {})
    }
    generateNonce() {
      return Math.round(1e7 * Math.random())
    }
    eventsOfType(t) {
      return this.events.pipe(Bu(e => e.type === t))
    }
    nextEventOfType(t) {
      return this.eventsOfType(t).pipe(Kh(1))
    }
    waitForStatus(t) {
      return this.eventsOfType("STATUS").pipe(Bu(e => e.nonce === t), Kh(1), D(t => {
        if (!t.status) throw new Error(t.error)
      })).toPromise()
    }
    get isEnabled() {
      return !!this.serviceWorker
    }
  }
  let ym = (() => {
    class t {
      constructor(t) {
        if (this.sw = t, this.subscriptionChanges = new k, !t.isEnabled) return this.messages = am, this.notificationClicks = am, void(this.subscription = am);
        this.messages = this.sw.eventsOfType("PUSH").pipe(D(t => t.data)), this.notificationClicks = this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(D(t => t.data)), this.pushManager = this.sw.registration.pipe(D(t => t.pushManager));
        const e = this.pushManager.pipe(ed(t => t.getSubscription()));
        this.subscription = W(e, this.subscriptionChanges)
      }
      get isEnabled() {
        return this.sw.isEnabled
      }
      requestSubscription(t) {
        if (!this.sw.isEnabled) return Promise.reject(new Error(vm));
        const e = {
          userVisibleOnly: !0
        };
        let n = this.decodeBase64(t.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+")),
          i = new Uint8Array(new ArrayBuffer(n.length));
        for (let r = 0; r < n.length; r++) i[r] = n.charCodeAt(r);
        return e.applicationServerKey = i, this.pushManager.pipe(ed(t => t.subscribe(e)), Kh(1)).toPromise().then(t => (this.subscriptionChanges.next(t), t))
      }
      unsubscribe() {
        return this.sw.isEnabled ? this.subscription.pipe(Kh(1), ed(t => {
          if (null === t) throw new Error("Not subscribed to push notifications.");
          return t.unsubscribe().then(t => {
            if (!t) throw new Error("Unsubscribe failed!");
            this.subscriptionChanges.next(null)
          })
        })).toPromise() : Promise.reject(new Error(vm))
      }
      decodeBase64(t) {
        return atob(t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Xt(_m))
    }, t.\u0275prov = mt({
      token: t,
      factory: t.\u0275fac
    }), t
  })(), bm = (() => {
    class t {
      constructor(t) {
        if (this.sw = t, !t.isEnabled) return this.available = am, void(this.activated = am);
        this.available = this.sw.eventsOfType("UPDATE_AVAILABLE"), this.activated = this.sw.eventsOfType("UPDATE_ACTIVATED")
      }
      get isEnabled() {
        return this.sw.isEnabled
      }
      checkForUpdate() {
        if (!this.sw.isEnabled) return Promise.reject(new Error(vm));
        const t = this.sw.generateNonce();
        return this.sw.postMessageWithStatus("CHECK_FOR_UPDATES", {
          statusNonce: t
        }, t)
      }
      activateUpdate() {
        if (!this.sw.isEnabled) return Promise.reject(new Error(vm));
        const t = this.sw.generateNonce();
        return this.sw.postMessageWithStatus("ACTIVATE_UPDATE", {
          statusNonce: t
        }, t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Xt(_m))
    }, t.\u0275prov = mt({
      token: t,
      factory: t.\u0275fac
    }), t
  })(); class wm {}
  const xm = new Bt("NGSW_REGISTER_SCRIPT");

  function Sm(t, e, n, i) {
    return () => {
      if (!uu(i) || !("serviceWorker" in navigator) || !1 === n.enabled) return;
      let r;
      if (navigator.serviceWorker.addEventListener("controllerchange", () => {
          null !== navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
            action: "INITIALIZE"
          })
        }), "function" == typeof n.registrationStrategy) r = n.registrationStrategy();
      else {
        const [e, ...i] = (n.registrationStrategy || "registerWhenStable").split(":");
        switch (e) {
          case "registerImmediately":
            r = Uu(null);
            break;
          case "registerWithDelay":
            r = Uu(null).pipe(function (t, e = dm) {
              var n;
              const i = (n = t) instanceof Date && !isNaN(+n) ? +t - e.now() : Math.abs(t);
              return t => t.lift(new fm(i, e))
            }(+i[0] || 0));
            break;
          case "registerWhenStable":
            r = t.get(Bl).isStable.pipe(Bu(t => t));
            break;
          default:
            throw new Error(`Unknown ServiceWorker registration strategy: ${n.registrationStrategy}`)
        }
      }
      r.pipe(Kh(1)).subscribe(() => navigator.serviceWorker.register(e, {
        scope: n.scope
      }).catch(t => console.error("Service worker registration failed with:", t)))
    }
  }

  function Cm(t, e) {
    return new _m(uu(e) && !1 !== t.enabled ? navigator.serviceWorker : void 0)
  }
  let km = (() => {
    class t {
      static register(e, n = {}) {
        return {
          ngModule: t,
          providers: [{
            provide: xm,
            useValue: e
          }, {
            provide: wm,
            useValue: n
          }, {
            provide: _m,
            useFactory: Cm,
            deps: [wm, al]
          }, {
            provide: el,
            useFactory: Sm,
            deps: [bs, xm, wm, al],
            multi: !0
          }]
        }
      }
    }
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      providers: [ym, bm]
    }), t
  })();
  var Pm = n("Hfs6"), Em = n.n(Pm);

  function Tm(t, e) {
    return new b(n => {
      const i = t.length;
      if (0 === i) return void n.complete();
      const r = new Array(i);
      let s = 0,
        o = 0;
      for (let a = 0; a < i; a++) {
        const l = U(t[a]);
        let c = !1;
        n.add(l.subscribe({
          next: t => {
            c || (c = !0, o++), r[a] = t
          },
          error: t => n.error(t),
          complete: () => {
            s++, s !== i && c || (o === i && n.next(e ? e.reduce((t, e, n) => (t[e] = r[n], t), {}) : r), n.complete())
          }
        }))
      }
    })
  }
  const Lm = new Bt("NgValueAccessor"), Am = {
    provide: Lm,
    useExisting: Tt(() => Im),
    multi: !0
  };
  let Im = (() => {
    class t {
      constructor(t, e) {
        this._renderer = t, this._elementRef = e, this.onChange = t => {}, this.onTouched = () => {}
      }
      writeValue(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "checked", t)
      }
      registerOnChange(t) {
        this.onChange = t
      }
      registerOnTouched(t) {
        this.onTouched = t
      }
      setDisabledState(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Vo), js(Fo))
    }, t.\u0275dir = xe({
      type: t,
      selectors: [
        ["input", "type", "checkbox", "formControlName", ""],
        ["input", "type", "checkbox", "formControl", ""],
        ["input", "type", "checkbox", "ngModel", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Ys("change", (function (t) {
          return e.onChange(t.target.checked)
        }))("blur", (function () {
          return e.onTouched()
        }))
      },
      features: [Mo([Am])]
    }), t
  })();
  const Mm = {
    provide: Lm,
    useExisting: Tt(() => Nm),
    multi: !0
  }, Om = new Bt("CompositionEventMode");
  let Nm = (() => {
    class t {
      constructor(t, e, n) {
        this._renderer = t, this._elementRef = e, this._compositionMode = n, this.onChange = t => {}, this.onTouched = () => {}, this._composing = !1, null == this._compositionMode && (this._compositionMode = ! function () {
          const t = tc() ? tc().getUserAgent() : "";
          return /android (\d+)/.test(t.toLowerCase())
        }())
      }
      writeValue(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "value", null == t ? "" : t)
      }
      registerOnChange(t) {
        this.onChange = t
      }
      registerOnTouched(t) {
        this.onTouched = t
      }
      setDisabledState(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
      }
      _handleInput(t) {
        (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(t)
      }
      _compositionStart() {
        this._composing = !0
      }
      _compositionEnd(t) {
        this._composing = !1, this._compositionMode && this.onChange(t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Vo), js(Fo), js(Om, 8))
    }, t.\u0275dir = xe({
      type: t,
      selectors: [
        ["input", "formControlName", "", 3, "type", "checkbox"],
        ["textarea", "formControlName", ""],
        ["input", "formControl", "", 3, "type", "checkbox"],
        ["textarea", "formControl", ""],
        ["input", "ngModel", "", 3, "type", "checkbox"],
        ["textarea", "ngModel", ""],
        ["", "ngDefaultControl", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Ys("input", (function (t) {
          return e._handleInput(t.target.value)
        }))("blur", (function () {
          return e.onTouched()
        }))("compositionstart", (function () {
          return e._compositionStart()
        }))("compositionend", (function (t) {
          return e._compositionEnd(t.target.value)
        }))
      },
      features: [Mo([Mm])]
    }), t
  })(), Rm = (() => {
    class t {
      get value() {
        return this.control ? this.control.value : null
      }
      get valid() {
        return this.control ? this.control.valid : null
      }
      get invalid() {
        return this.control ? this.control.invalid : null
      }
      get pending() {
        return this.control ? this.control.pending : null
      }
      get disabled() {
        return this.control ? this.control.disabled : null
      }
      get enabled() {
        return this.control ? this.control.enabled : null
      }
      get errors() {
        return this.control ? this.control.errors : null
      }
      get pristine() {
        return this.control ? this.control.pristine : null
      }
      get dirty() {
        return this.control ? this.control.dirty : null
      }
      get touched() {
        return this.control ? this.control.touched : null
      }
      get status() {
        return this.control ? this.control.status : null
      }
      get untouched() {
        return this.control ? this.control.untouched : null
      }
      get statusChanges() {
        return this.control ? this.control.statusChanges : null
      }
      get valueChanges() {
        return this.control ? this.control.valueChanges : null
      }
      get path() {
        return null
      }
      reset(t) {
        this.control && this.control.reset(t)
      }
      hasError(t, e) {
        return !!this.control && this.control.hasError(t, e)
      }
      getError(t, e) {
        return this.control ? this.control.getError(t, e) : null
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275dir = xe({
      type: t
    }), t
  })(), Fm = (() => {
    class t extends Rm {
      get formDirective() {
        return null
      }
      get path() {
        return null
      }
    }
    return t.\u0275fac = function (e) {
      return Dm(e || t)
    }, t.\u0275dir = xe({
      type: t,
      features: [go]
    }), t
  })();
  const Dm = si(Fm);

  function zm() {
    throw new Error("unimplemented")
  }
  class jm extends Rm {
    constructor() {
      super(...arguments), this._parent = null, this.name = null, this.valueAccessor = null, this._rawValidators = [], this._rawAsyncValidators = []
    }
    get validator() {
      return zm()
    }
    get asyncValidator() {
      return zm()
    }
  }
  class Vm {
    constructor(t) {
      this._cd = t
    }
    get ngClassUntouched() {
      return !!this._cd.control && this._cd.control.untouched
    }
    get ngClassTouched() {
      return !!this._cd.control && this._cd.control.touched
    }
    get ngClassPristine() {
      return !!this._cd.control && this._cd.control.pristine
    }
    get ngClassDirty() {
      return !!this._cd.control && this._cd.control.dirty
    }
    get ngClassValid() {
      return !!this._cd.control && this._cd.control.valid
    }
    get ngClassInvalid() {
      return !!this._cd.control && this._cd.control.invalid
    }
    get ngClassPending() {
      return !!this._cd.control && this._cd.control.pending
    }
  }
  let Um = (() => {
    class t extends Vm {
      constructor(t) {
        super(t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(jm, 2))
    }, t.\u0275dir = xe({
      type: t,
      selectors: [
        ["", "formControlName", ""],
        ["", "ngModel", ""],
        ["", "formControl", ""]
      ],
      hostVars: 14,
      hostBindings: function (t, e) {
        2 & t && ro("ng-untouched", e.ngClassUntouched)("ng-touched", e.ngClassTouched)("ng-pristine", e.ngClassPristine)("ng-dirty", e.ngClassDirty)("ng-valid", e.ngClassValid)("ng-invalid", e.ngClassInvalid)("ng-pending", e.ngClassPending)
      },
      features: [go]
    }), t
  })(), Hm = (() => {
    class t extends Vm {
      constructor(t) {
        super(t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Fm, 2))
    }, t.\u0275dir = xe({
      type: t,
      selectors: [
        ["", "formGroupName", ""],
        ["", "formArrayName", ""],
        ["", "ngModelGroup", ""],
        ["", "formGroup", ""],
        ["form", 3, "ngNoForm", ""],
        ["", "ngForm", ""]
      ],
      hostVars: 14,
      hostBindings: function (t, e) {
        2 & t && ro("ng-untouched", e.ngClassUntouched)("ng-touched", e.ngClassTouched)("ng-pristine", e.ngClassPristine)("ng-dirty", e.ngClassDirty)("ng-valid", e.ngClassValid)("ng-invalid", e.ngClassInvalid)("ng-pending", e.ngClassPending)
      },
      features: [go]
    }), t
  })();

  function Bm(t) {
    return null == t || 0 === t.length
  }
  const $m = new Bt("NgValidators"), Zm = new Bt("NgAsyncValidators"), qm = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; class Gm {
    static min(t) {
      return e => {
        if (Bm(e.value) || Bm(t)) return null;
        const n = parseFloat(e.value);
        return !isNaN(n) && n < t ? {
          min: {
            min: t,
            actual: e.value
          }
        } : null
      }
    }
    static max(t) {
      return e => {
        if (Bm(e.value) || Bm(t)) return null;
        const n = parseFloat(e.value);
        return !isNaN(n) && n > t ? {
          max: {
            max: t,
            actual: e.value
          }
        } : null
      }
    }
    static required(t) {
      return Bm(t.value) ? {
        required: !0
      } : null
    }
    static requiredTrue(t) {
      return !0 === t.value ? null : {
        required: !0
      }
    }
    static email(t) {
      return Bm(t.value) || qm.test(t.value) ? null : {
        email: !0
      }
    }
    static minLength(t) {
      return e => {
        if (Bm(e.value)) return null;
        const n = e.value ? e.value.length : 0;
        return n < t ? {
          minlength: {
            requiredLength: t,
            actualLength: n
          }
        } : null
      }
    }
    static maxLength(t) {
      return e => {
        const n = e.value ? e.value.length : 0;
        return n > t ? {
          maxlength: {
            requiredLength: t,
            actualLength: n
          }
        } : null
      }
    }
    static pattern(t) {
      if (!t) return Gm.nullValidator;
      let e, n;
      return "string" == typeof t ? (n = "", "^" !== t.charAt(0) && (n += "^"), n += t, "$" !== t.charAt(t.length - 1) && (n += "$"), e = new RegExp(n)) : (n = t.toString(), e = t), t => {
        if (Bm(t.value)) return null;
        const i = t.value;
        return e.test(i) ? null : {
          pattern: {
            requiredPattern: n,
            actualValue: i
          }
        }
      }
    }
    static nullValidator(t) {
      return null
    }
    static compose(t) {
      if (!t) return null;
      const e = t.filter(Wm);
      return 0 == e.length ? null : function (t) {
        return Ym(function (t, e) {
          return e.map(e => e(t))
        }(t, e))
      }
    }
    static composeAsync(t) {
      if (!t) return null;
      const e = t.filter(Wm);
      return 0 == e.length ? null : function (t) {
        return function (...t) {
          if (1 === t.length) {
            const e = t[0];
            if (l(e)) return Tm(e, null);
            if (c(e) && Object.getPrototypeOf(e) === Object.prototype) {
              const t = Object.keys(e);
              return Tm(t.map(t => e[t]), t)
            }
          }
          if ("function" == typeof t[t.length - 1]) {
            const e = t.pop();
            return Tm(t = 1 === t.length && l(t[0]) ? t[0] : t, null).pipe(D(t => e(...t)))
          }
          return Tm(t, null)
        }(function (t, e) {
          return e.map(e => e(t))
        }(t, e).map(Km)).pipe(D(Ym))
      }
    }
  }

  function Wm(t) {
    return null != t
  }

  function Km(t) {
    const e = Ws(t) ? U(t) : t;
    if (!Ks(e)) throw new Error("Expected validator to return Promise or Observable.");
    return e
  }

  function Ym(t) {
    let e = {};
    return t.forEach(t => {
      e = null != t ? Object.assign(Object.assign({}, e), t) : e
    }), 0 === Object.keys(e).length ? null : e
  }

  function Jm(t) {
    return t.validate ? e => t.validate(e) : t
  }

  function Qm(t) {
    return t.validate ? e => t.validate(e) : t
  }
  const Xm = {
    provide: Lm,
    useExisting: Tt(() => tg),
    multi: !0
  };
  let tg = (() => {
    class t {
      constructor(t, e) {
        this._renderer = t, this._elementRef = e, this.onChange = t => {}, this.onTouched = () => {}
      }
      writeValue(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "value", null == t ? "" : t)
      }
      registerOnChange(t) {
        this.onChange = e => {
          t("" == e ? null : parseFloat(e))
        }
      }
      registerOnTouched(t) {
        this.onTouched = t
      }
      setDisabledState(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Vo), js(Fo))
    }, t.\u0275dir = xe({
      type: t,
      selectors: [
        ["input", "type", "number", "formControlName", ""],
        ["input", "type", "number", "formControl", ""],
        ["input", "type", "number", "ngModel", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Ys("change", (function (t) {
          return e.onChange(t.target.value)
        }))("input", (function (t) {
          return e.onChange(t.target.value)
        }))("blur", (function () {
          return e.onTouched()
        }))
      },
      features: [Mo([Xm])]
    }), t
  })();
  const eg = {
    provide: Lm,
    useExisting: Tt(() => ig),
    multi: !0
  };
  let ng = (() => {
    class t {
      constructor() {
        this._accessors = []
      }
      add(t, e) {
        this._accessors.push([t, e])
      }
      remove(t) {
        for (let e = this._accessors.length - 1; e >= 0; --e)
          if (this._accessors[e][1] === t) return void this._accessors.splice(e, 1)
      }
      select(t) {
        this._accessors.forEach(e => {
          this._isSameGroup(e, t) && e[1] !== t && e[1].fireUncheck(t.value)
        })
      }
      _isSameGroup(t, e) {
        return !!t[0].control && t[0]._parent === e._control._parent && t[1].name === e.name
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275prov = mt({
      token: t,
      factory: t.\u0275fac
    }), t
  })(), ig = (() => {
    class t {
      constructor(t, e, n, i) {
        this._renderer = t, this._elementRef = e, this._registry = n, this._injector = i, this.onChange = () => {}, this.onTouched = () => {}
      }
      ngOnInit() {
        this._control = this._injector.get(jm), this._checkName(), this._registry.add(this._control, this)
      }
      ngOnDestroy() {
        this._registry.remove(this)
      }
      writeValue(t) {
        this._state = t === this.value, this._renderer.setProperty(this._elementRef.nativeElement, "checked", this._state)
      }
      registerOnChange(t) {
        this._fn = t, this.onChange = () => {
          t(this.value), this._registry.select(this)
        }
      }
      fireUncheck(t) {
        this.writeValue(t)
      }
      registerOnTouched(t) {
        this.onTouched = t
      }
      setDisabledState(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
      }
      _checkName() {
        this.name && this.formControlName && this.name !== this.formControlName && this._throwNameError(), !this.name && this.formControlName && (this.name = this.formControlName)
      }
      _throwNameError() {
        throw new Error('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ')
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Vo), js(Fo), js(ng), js(bs))
    }, t.\u0275dir = xe({
      type: t,
      selectors: [
        ["input", "type", "radio", "formControlName", ""],
        ["input", "type", "radio", "formControl", ""],
        ["input", "type", "radio", "ngModel", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Ys("change", (function () {
          return e.onChange()
        }))("blur", (function () {
          return e.onTouched()
        }))
      },
      inputs: {
        name: "name",
        formControlName: "formControlName",
        value: "value"
      },
      features: [Mo([eg])]
    }), t
  })();
  const rg = {
    provide: Lm,
    useExisting: Tt(() => sg),
    multi: !0
  };
  let sg = (() => {
    class t {
      constructor(t, e) {
        this._renderer = t, this._elementRef = e, this.onChange = t => {}, this.onTouched = () => {}
      }
      writeValue(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "value", parseFloat(t))
      }
      registerOnChange(t) {
        this.onChange = e => {
          t("" == e ? null : parseFloat(e))
        }
      }
      registerOnTouched(t) {
        this.onTouched = t
      }
      setDisabledState(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Vo), js(Fo))
    }, t.\u0275dir = xe({
      type: t,
      selectors: [
        ["input", "type", "range", "formControlName", ""],
        ["input", "type", "range", "formControl", ""],
        ["input", "type", "range", "ngModel", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Ys("change", (function (t) {
          return e.onChange(t.target.value)
        }))("input", (function (t) {
          return e.onChange(t.target.value)
        }))("blur", (function () {
          return e.onTouched()
        }))
      },
      features: [Mo([rg])]
    }), t
  })();
  const og = '\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });', ag = '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });'; class lg {
    static controlParentException() {
      throw new Error(`formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ${og}`)
    }
    static ngModelGroupException() {
      throw new Error(`formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a "form" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ${ag}\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        \n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>`)
    }
    static missingFormException() {
      throw new Error(`formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ${og}`)
    }
    static groupParentException() {
      throw new Error(`formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ${ag}`)
    }
    static arrayParentException() {
      throw new Error('formArrayName must be used with a parent formGroup directive.  You\'ll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        \n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });')
    }
    static disabledAttrWarning() {
      console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ")
    }
    static ngModelWarning(t) {
      console.warn(`\n    It looks like you're using ngModel on the same form field as ${t}. \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/${"formControl"===t?"FormControlDirective":"FormControlName"}#use-with-ngmodel\n    `)
    }
  }
  const cg = {
    provide: Lm,
    useExisting: Tt(() => hg),
    multi: !0
  };

  function ug(t, e) {
    return null == t ? `${e}` : (e && "object" == typeof e && (e = "Object"), `${t}: ${e}`.slice(0, 50))
  }
  let hg = (() => {
    class t {
      constructor(t, e) {
        this._renderer = t, this._elementRef = e, this._optionMap = new Map, this._idCounter = 0, this.onChange = t => {}, this.onTouched = () => {}, this._compareWith = Ts
      }
      set compareWith(t) {
        if ("function" != typeof t) throw new Error(`compareWith must be a function, but received ${JSON.stringify(t)}`);
        this._compareWith = t
      }
      writeValue(t) {
        this.value = t;
        const e = this._getOptionId(t);
        null == e && this._renderer.setProperty(this._elementRef.nativeElement, "selectedIndex", -1);
        const n = ug(e, t);
        this._renderer.setProperty(this._elementRef.nativeElement, "value", n)
      }
      registerOnChange(t) {
        this.onChange = e => {
          this.value = this._getOptionValue(e), t(this.value)
        }
      }
      registerOnTouched(t) {
        this.onTouched = t
      }
      setDisabledState(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
      }
      _registerOption() {
        return (this._idCounter++).toString()
      }
      _getOptionId(t) {
        for (const e of Array.from(this._optionMap.keys()))
          if (this._compareWith(this._optionMap.get(e), t)) return e;
        return null
      }
      _getOptionValue(t) {
        const e = function (t) {
          return t.split(":")[0]
        }(t);
        return this._optionMap.has(e) ? this._optionMap.get(e) : t
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Vo), js(Fo))
    }, t.\u0275dir = xe({
      type: t,
      selectors: [
        ["select", "formControlName", "", 3, "multiple", ""],
        ["select", "formControl", "", 3, "multiple", ""],
        ["select", "ngModel", "", 3, "multiple", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Ys("change", (function (t) {
          return e.onChange(t.target.value)
        }))("blur", (function () {
          return e.onTouched()
        }))
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [Mo([cg])]
    }), t
  })(), dg = (() => {
    class t {
      constructor(t, e, n) {
        this._element = t, this._renderer = e, this._select = n, this._select && (this.id = this._select._registerOption())
      }
      set ngValue(t) {
        null != this._select && (this._select._optionMap.set(this.id, t), this._setElementValue(ug(this.id, t)), this._select.writeValue(this._select.value))
      }
      set value(t) {
        this._setElementValue(t), this._select && this._select.writeValue(this._select.value)
      }
      _setElementValue(t) {
        this._renderer.setProperty(this._element.nativeElement, "value", t)
      }
      ngOnDestroy() {
        this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Fo), js(Vo), js(hg, 9))
    }, t.\u0275dir = xe({
      type: t,
      selectors: [
        ["option"]
      ],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    }), t
  })();
  const pg = {
    provide: Lm,
    useExisting: Tt(() => mg),
    multi: !0
  };

  function fg(t, e) {
    return null == t ? `${e}` : ("string" == typeof e && (e = `'${e}'`), e && "object" == typeof e && (e = "Object"), `${t}: ${e}`.slice(0, 50))
  }
  let mg = (() => {
    class t {
      constructor(t, e) {
        this._renderer = t, this._elementRef = e, this._optionMap = new Map, this._idCounter = 0, this.onChange = t => {}, this.onTouched = () => {}, this._compareWith = Ts
      }
      set compareWith(t) {
        if ("function" != typeof t) throw new Error(`compareWith must be a function, but received ${JSON.stringify(t)}`);
        this._compareWith = t
      }
      writeValue(t) {
        let e;
        if (this.value = t, Array.isArray(t)) {
          const n = t.map(t => this._getOptionId(t));
          e = (t, e) => {
            t._setSelected(n.indexOf(e.toString()) > -1)
          }
        } else e = (t, e) => {
          t._setSelected(!1)
        };
        this._optionMap.forEach(e)
      }
      registerOnChange(t) {
        this.onChange = e => {
          const n = [];
          if (e.hasOwnProperty("selectedOptions")) {
            const t = e.selectedOptions;
            for (let e = 0; e < t.length; e++) {
              const i = t.item(e),
                r = this._getOptionValue(i.value);
              n.push(r)
            }
          } else {
            const t = e.options;
            for (let e = 0; e < t.length; e++) {
              const i = t.item(e);
              if (i.selected) {
                const t = this._getOptionValue(i.value);
                n.push(t)
              }
            }
          }
          this.value = n, t(n)
        }
      }
      registerOnTouched(t) {
        this.onTouched = t
      }
      setDisabledState(t) {
        this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t)
      }
      _registerOption(t) {
        const e = (this._idCounter++).toString();
        return this._optionMap.set(e, t), e
      }
      _getOptionId(t) {
        for (const e of Array.from(this._optionMap.keys()))
          if (this._compareWith(this._optionMap.get(e)._value, t)) return e;
        return null
      }
      _getOptionValue(t) {
        const e = function (t) {
          return t.split(":")[0]
        }(t);
        return this._optionMap.has(e) ? this._optionMap.get(e)._value : t
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Vo), js(Fo))
    }, t.\u0275dir = xe({
      type: t,
      selectors: [
        ["select", "multiple", "", "formControlName", ""],
        ["select", "multiple", "", "formControl", ""],
        ["select", "multiple", "", "ngModel", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Ys("change", (function (t) {
          return e.onChange(t.target)
        }))("blur", (function () {
          return e.onTouched()
        }))
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [Mo([pg])]
    }), t
  })(), gg = (() => {
    class t {
      constructor(t, e, n) {
        this._element = t, this._renderer = e, this._select = n, this._select && (this.id = this._select._registerOption(this))
      }
      set ngValue(t) {
        null != this._select && (this._value = t, this._setElementValue(fg(this.id, t)), this._select.writeValue(this._select.value))
      }
      set value(t) {
        this._select ? (this._value = t, this._setElementValue(fg(this.id, t)), this._select.writeValue(this._select.value)) : this._setElementValue(t)
      }
      _setElementValue(t) {
        this._renderer.setProperty(this._element.nativeElement, "value", t)
      }
      _setSelected(t) {
        this._renderer.setProperty(this._element.nativeElement, "selected", t)
      }
      ngOnDestroy() {
        this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Fo), js(Vo), js(mg, 9))
    }, t.\u0275dir = xe({
      type: t,
      selectors: [
        ["option"]
      ],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    }), t
  })();

  function vg(t, e) {
    return [...e.path, t]
  }

  function _g(t, e) {
    t || xg(e, "Cannot find control with"), e.valueAccessor || xg(e, "No value accessor for form control with"), t.validator = Gm.compose([t.validator, e.validator]), t.asyncValidator = Gm.composeAsync([t.asyncValidator, e.asyncValidator]), e.valueAccessor.writeValue(t.value),
      function (t, e) {
        e.valueAccessor.registerOnChange(n => {
          t._pendingValue = n, t._pendingChange = !0, t._pendingDirty = !0, "change" === t.updateOn && yg(t, e)
        })
      }(t, e),
      function (t, e) {
        t.registerOnChange((t, n) => {
          e.valueAccessor.writeValue(t), n && e.viewToModelUpdate(t)
        })
      }(t, e),
      function (t, e) {
        e.valueAccessor.registerOnTouched(() => {
          t._pendingTouched = !0, "blur" === t.updateOn && t._pendingChange && yg(t, e), "submit" !== t.updateOn && t.markAsTouched()
        })
      }(t, e), e.valueAccessor.setDisabledState && t.registerOnDisabledChange(t => {
        e.valueAccessor.setDisabledState(t)
      }), e._rawValidators.forEach(e => {
        e.registerOnValidatorChange && e.registerOnValidatorChange(() => t.updateValueAndValidity())
      }), e._rawAsyncValidators.forEach(e => {
        e.registerOnValidatorChange && e.registerOnValidatorChange(() => t.updateValueAndValidity())
      })
  }

  function yg(t, e) {
    t._pendingDirty && t.markAsDirty(), t.setValue(t._pendingValue, {
      emitModelToViewChange: !1
    }), e.viewToModelUpdate(t._pendingValue), t._pendingChange = !1
  }

  function bg(t, e) {
    null == t && xg(e, "Cannot find control with"), t.validator = Gm.compose([t.validator, e.validator]), t.asyncValidator = Gm.composeAsync([t.asyncValidator, e.asyncValidator])
  }

  function wg(t) {
    return xg(t, "There is no FormControl instance attached to form control element with")
  }

  function xg(t, e) {
    let n;
    throw n = t.path.length > 1 ? `path: '${t.path.join(" -> ")}'` : t.path[0] ? `name: '${t.path}'` : "unspecified name attribute", new Error(`${e} ${n}`)
  }

  function Sg(t) {
    return null != t ? Gm.compose(t.map(Jm)) : null
  }

  function Cg(t) {
    return null != t ? Gm.composeAsync(t.map(Qm)) : null
  }
  const kg = [Im, sg, tg, hg, mg, ig];

  function Pg(t) {
    const e = Tg(t) ? t.validators : t;
    return Array.isArray(e) ? Sg(e) : e || null
  }

  function Eg(t, e) {
    const n = Tg(e) ? e.asyncValidators : t;
    return Array.isArray(n) ? Cg(n) : n || null
  }

  function Tg(t) {
    return null != t && !Array.isArray(t) && "object" == typeof t
  }
  class Lg {
    constructor(t, e) {
      this.validator = t, this.asyncValidator = e, this._onCollectionChange = () => {}, this.pristine = !0, this.touched = !1, this._onDisabledChange = []
    }
    get parent() {
      return this._parent
    }
    get valid() {
      return "VALID" === this.status
    }
    get invalid() {
      return "INVALID" === this.status
    }
    get pending() {
      return "PENDING" == this.status
    }
    get disabled() {
      return "DISABLED" === this.status
    }
    get enabled() {
      return "DISABLED" !== this.status
    }
    get dirty() {
      return !this.pristine
    }
    get untouched() {
      return !this.touched
    }
    get updateOn() {
      return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change"
    }
    setValidators(t) {
      this.validator = Pg(t)
    }
    setAsyncValidators(t) {
      this.asyncValidator = Eg(t)
    }
    clearValidators() {
      this.validator = null
    }
    clearAsyncValidators() {
      this.asyncValidator = null
    }
    markAsTouched(t = {}) {
      this.touched = !0, this._parent && !t.onlySelf && this._parent.markAsTouched(t)
    }
    markAllAsTouched() {
      this.markAsTouched({
        onlySelf: !0
      }), this._forEachChild(t => t.markAllAsTouched())
    }
    markAsUntouched(t = {}) {
      this.touched = !1, this._pendingTouched = !1, this._forEachChild(t => {
        t.markAsUntouched({
          onlySelf: !0
        })
      }), this._parent && !t.onlySelf && this._parent._updateTouched(t)
    }
    markAsDirty(t = {}) {
      this.pristine = !1, this._parent && !t.onlySelf && this._parent.markAsDirty(t)
    }
    markAsPristine(t = {}) {
      this.pristine = !0, this._pendingDirty = !1, this._forEachChild(t => {
        t.markAsPristine({
          onlySelf: !0
        })
      }), this._parent && !t.onlySelf && this._parent._updatePristine(t)
    }
    markAsPending(t = {}) {
      this.status = "PENDING", !1 !== t.emitEvent && this.statusChanges.emit(this.status), this._parent && !t.onlySelf && this._parent.markAsPending(t)
    }
    disable(t = {}) {
      const e = this._parentMarkedDirty(t.onlySelf);
      this.status = "DISABLED", this.errors = null, this._forEachChild(e => {
        e.disable(Object.assign(Object.assign({}, t), {
          onlySelf: !0
        }))
      }), this._updateValue(), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._updateAncestors(Object.assign(Object.assign({}, t), {
        skipPristineCheck: e
      })), this._onDisabledChange.forEach(t => t(!0))
    }
    enable(t = {}) {
      const e = this._parentMarkedDirty(t.onlySelf);
      this.status = "VALID", this._forEachChild(e => {
        e.enable(Object.assign(Object.assign({}, t), {
          onlySelf: !0
        }))
      }), this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: t.emitEvent
      }), this._updateAncestors(Object.assign(Object.assign({}, t), {
        skipPristineCheck: e
      })), this._onDisabledChange.forEach(t => t(!1))
    }
    _updateAncestors(t) {
      this._parent && !t.onlySelf && (this._parent.updateValueAndValidity(t), t.skipPristineCheck || this._parent._updatePristine(), this._parent._updateTouched())
    }
    setParent(t) {
      this._parent = t
    }
    updateValueAndValidity(t = {}) {
      this._setInitialStatus(), this._updateValue(), this.enabled && (this._cancelExistingSubscription(), this.errors = this._runValidator(), this.status = this._calculateStatus(), "VALID" !== this.status && "PENDING" !== this.status || this._runAsyncValidator(t.emitEvent)), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t)
    }
    _updateTreeValidity(t = {
      emitEvent: !0
    }) {
      this._forEachChild(e => e._updateTreeValidity(t)), this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: t.emitEvent
      })
    }
    _setInitialStatus() {
      this.status = this._allControlsDisabled() ? "DISABLED" : "VALID"
    }
    _runValidator() {
      return this.validator ? this.validator(this) : null
    }
    _runAsyncValidator(t) {
      if (this.asyncValidator) {
        this.status = "PENDING";
        const e = Km(this.asyncValidator(this));
        this._asyncValidationSubscription = e.subscribe(e => this.setErrors(e, {
          emitEvent: t
        }))
      }
    }
    _cancelExistingSubscription() {
      this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe()
    }
    setErrors(t, e = {}) {
      this.errors = t, this._updateControlsErrors(!1 !== e.emitEvent)
    }
    get(t) {
      return function (t, e, n) {
        if (null == e) return null;
        if (Array.isArray(e) || (e = e.split(".")), Array.isArray(e) && 0 === e.length) return null;
        let i = t;
        return e.forEach(t => {
          i = i instanceof Ig ? i.controls.hasOwnProperty(t) ? i.controls[t] : null : i instanceof Mg && i.at(t) || null
        }), i
      }(this, t)
    }
    getError(t, e) {
      const n = e ? this.get(e) : this;
      return n && n.errors ? n.errors[t] : null
    }
    hasError(t, e) {
      return !!this.getError(t, e)
    }
    get root() {
      let t = this;
      for (; t._parent;) t = t._parent;
      return t
    }
    _updateControlsErrors(t) {
      this.status = this._calculateStatus(), t && this.statusChanges.emit(this.status), this._parent && this._parent._updateControlsErrors(t)
    }
    _initObservables() {
      this.valueChanges = new za, this.statusChanges = new za
    }
    _calculateStatus() {
      return this._allControlsDisabled() ? "DISABLED" : this.errors ? "INVALID" : this._anyControlsHaveStatus("PENDING") ? "PENDING" : this._anyControlsHaveStatus("INVALID") ? "INVALID" : "VALID"
    }
    _anyControlsHaveStatus(t) {
      return this._anyControls(e => e.status === t)
    }
    _anyControlsDirty() {
      return this._anyControls(t => t.dirty)
    }
    _anyControlsTouched() {
      return this._anyControls(t => t.touched)
    }
    _updatePristine(t = {}) {
      this.pristine = !this._anyControlsDirty(), this._parent && !t.onlySelf && this._parent._updatePristine(t)
    }
    _updateTouched(t = {}) {
      this.touched = this._anyControlsTouched(), this._parent && !t.onlySelf && this._parent._updateTouched(t)
    }
    _isBoxedValue(t) {
      return "object" == typeof t && null !== t && 2 === Object.keys(t).length && "value" in t && "disabled" in t
    }
    _registerOnCollectionChange(t) {
      this._onCollectionChange = t
    }
    _setUpdateStrategy(t) {
      Tg(t) && null != t.updateOn && (this._updateOn = t.updateOn)
    }
    _parentMarkedDirty(t) {
      return !t && this._parent && this._parent.dirty && !this._parent._anyControlsDirty()
    }
  }
  class Ag extends Lg {
    constructor(t = null, e, n) {
      super(Pg(e), Eg(n, e)), this._onChange = [], this._applyFormState(t), this._setUpdateStrategy(e), this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !1
      }), this._initObservables()
    }
    setValue(t, e = {}) {
      this.value = this._pendingValue = t, this._onChange.length && !1 !== e.emitModelToViewChange && this._onChange.forEach(t => t(this.value, !1 !== e.emitViewToModelChange)), this.updateValueAndValidity(e)
    }
    patchValue(t, e = {}) {
      this.setValue(t, e)
    }
    reset(t = null, e = {}) {
      this._applyFormState(t), this.markAsPristine(e), this.markAsUntouched(e), this.setValue(this.value, e), this._pendingChange = !1
    }
    _updateValue() {}
    _anyControls(t) {
      return !1
    }
    _allControlsDisabled() {
      return this.disabled
    }
    registerOnChange(t) {
      this._onChange.push(t)
    }
    _clearChangeFns() {
      this._onChange = [], this._onDisabledChange = [], this._onCollectionChange = () => {}
    }
    registerOnDisabledChange(t) {
      this._onDisabledChange.push(t)
    }
    _forEachChild(t) {}
    _syncPendingControls() {
      return !("submit" !== this.updateOn || (this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), !this._pendingChange) || (this.setValue(this._pendingValue, {
        onlySelf: !0,
        emitModelToViewChange: !1
      }), 0))
    }
    _applyFormState(t) {
      this._isBoxedValue(t) ? (this.value = this._pendingValue = t.value, t.disabled ? this.disable({
        onlySelf: !0,
        emitEvent: !1
      }) : this.enable({
        onlySelf: !0,
        emitEvent: !1
      })) : this.value = this._pendingValue = t
    }
  }
  class Ig extends Lg {
    constructor(t, e, n) {
      super(Pg(e), Eg(n, e)), this.controls = t, this._initObservables(), this._setUpdateStrategy(e), this._setUpControls(), this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !1
      })
    }
    registerControl(t, e) {
      return this.controls[t] ? this.controls[t] : (this.controls[t] = e, e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange), e)
    }
    addControl(t, e) {
      this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange()
    }
    removeControl(t) {
      this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}), delete this.controls[t], this.updateValueAndValidity(), this._onCollectionChange()
    }
    setControl(t, e) {
      this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}), delete this.controls[t], e && this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange()
    }
    contains(t) {
      return this.controls.hasOwnProperty(t) && this.controls[t].enabled
    }
    setValue(t, e = {}) {
      this._checkAllValuesPresent(t), Object.keys(t).forEach(n => {
        this._throwIfControlMissing(n), this.controls[n].setValue(t[n], {
          onlySelf: !0,
          emitEvent: e.emitEvent
        })
      }), this.updateValueAndValidity(e)
    }
    patchValue(t, e = {}) {
      Object.keys(t).forEach(n => {
        this.controls[n] && this.controls[n].patchValue(t[n], {
          onlySelf: !0,
          emitEvent: e.emitEvent
        })
      }), this.updateValueAndValidity(e)
    }
    reset(t = {}, e = {}) {
      this._forEachChild((n, i) => {
        n.reset(t[i], {
          onlySelf: !0,
          emitEvent: e.emitEvent
        })
      }), this._updatePristine(e), this._updateTouched(e), this.updateValueAndValidity(e)
    }
    getRawValue() {
      return this._reduceChildren({}, (t, e, n) => (t[n] = e instanceof Ag ? e.value : e.getRawValue(), t))
    }
    _syncPendingControls() {
      let t = this._reduceChildren(!1, (t, e) => !!e._syncPendingControls() || t);
      return t && this.updateValueAndValidity({
        onlySelf: !0
      }), t
    }
    _throwIfControlMissing(t) {
      if (!Object.keys(this.controls).length) throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
      if (!this.controls[t]) throw new Error(`Cannot find form control with name: ${t}.`)
    }
    _forEachChild(t) {
      Object.keys(this.controls).forEach(e => t(this.controls[e], e))
    }
    _setUpControls() {
      this._forEachChild(t => {
        t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange)
      })
    }
    _updateValue() {
      this.value = this._reduceValue()
    }
    _anyControls(t) {
      let e = !1;
      return this._forEachChild((n, i) => {
        e = e || this.contains(i) && t(n)
      }), e
    }
    _reduceValue() {
      return this._reduceChildren({}, (t, e, n) => ((e.enabled || this.disabled) && (t[n] = e.value), t))
    }
    _reduceChildren(t, e) {
      let n = t;
      return this._forEachChild((t, i) => {
        n = e(n, t, i)
      }), n
    }
    _allControlsDisabled() {
      for (const t of Object.keys(this.controls))
        if (this.controls[t].enabled) return !1;
      return Object.keys(this.controls).length > 0 || this.disabled
    }
    _checkAllValuesPresent(t) {
      this._forEachChild((e, n) => {
        if (void 0 === t[n]) throw new Error(`Must supply a value for form control with name: '${n}'.`)
      })
    }
  }
  class Mg extends Lg {
    constructor(t, e, n) {
      super(Pg(e), Eg(n, e)), this.controls = t, this._initObservables(), this._setUpdateStrategy(e), this._setUpControls(), this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !1
      })
    }
    at(t) {
      return this.controls[t]
    }
    push(t) {
      this.controls.push(t), this._registerControl(t), this.updateValueAndValidity(), this._onCollectionChange()
    }
    insert(t, e) {
      this.controls.splice(t, 0, e), this._registerControl(e), this.updateValueAndValidity()
    }
    removeAt(t) {
      this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}), this.controls.splice(t, 1), this.updateValueAndValidity()
    }
    setControl(t, e) {
      this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}), this.controls.splice(t, 1), e && (this.controls.splice(t, 0, e), this._registerControl(e)), this.updateValueAndValidity(), this._onCollectionChange()
    }
    get length() {
      return this.controls.length
    }
    setValue(t, e = {}) {
      this._checkAllValuesPresent(t), t.forEach((t, n) => {
        this._throwIfControlMissing(n), this.at(n).setValue(t, {
          onlySelf: !0,
          emitEvent: e.emitEvent
        })
      }), this.updateValueAndValidity(e)
    }
    patchValue(t, e = {}) {
      t.forEach((t, n) => {
        this.at(n) && this.at(n).patchValue(t, {
          onlySelf: !0,
          emitEvent: e.emitEvent
        })
      }), this.updateValueAndValidity(e)
    }
    reset(t = [], e = {}) {
      this._forEachChild((n, i) => {
        n.reset(t[i], {
          onlySelf: !0,
          emitEvent: e.emitEvent
        })
      }), this._updatePristine(e), this._updateTouched(e), this.updateValueAndValidity(e)
    }
    getRawValue() {
      return this.controls.map(t => t instanceof Ag ? t.value : t.getRawValue())
    }
    clear() {
      this.controls.length < 1 || (this._forEachChild(t => t._registerOnCollectionChange(() => {})), this.controls.splice(0), this.updateValueAndValidity())
    }
    _syncPendingControls() {
      let t = this.controls.reduce((t, e) => !!e._syncPendingControls() || t, !1);
      return t && this.updateValueAndValidity({
        onlySelf: !0
      }), t
    }
    _throwIfControlMissing(t) {
      if (!this.controls.length) throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
      if (!this.at(t)) throw new Error(`Cannot find form control at index ${t}`)
    }
    _forEachChild(t) {
      this.controls.forEach((e, n) => {
        t(e, n)
      })
    }
    _updateValue() {
      this.value = this.controls.filter(t => t.enabled || this.disabled).map(t => t.value)
    }
    _anyControls(t) {
      return this.controls.some(e => e.enabled && t(e))
    }
    _setUpControls() {
      this._forEachChild(t => this._registerControl(t))
    }
    _checkAllValuesPresent(t) {
      this._forEachChild((e, n) => {
        if (void 0 === t[n]) throw new Error(`Must supply a value for form control at index: ${n}.`)
      })
    }
    _allControlsDisabled() {
      for (const t of this.controls)
        if (t.enabled) return !1;
      return this.controls.length > 0 || this.disabled
    }
    _registerControl(t) {
      t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange)
    }
  }
  let Og = (() => {
    class t extends Fm {
      ngOnInit() {
        this._checkParentType(), this.formDirective.addFormGroup(this)
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeFormGroup(this)
      }
      get control() {
        return this.formDirective.getFormGroup(this)
      }
      get path() {
        return vg(null == this.name ? this.name : this.name.toString(), this._parent)
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null
      }
      get validator() {
        return Sg(this._validators)
      }
      get asyncValidator() {
        return Cg(this._asyncValidators)
      }
      _checkParentType() {}
    }
    return t.\u0275fac = function (e) {
      return Ng(e || t)
    }, t.\u0275dir = xe({
      type: t,
      features: [go]
    }), t
  })();
  const Ng = si(Og);
  let Rg = (() => {
    class t {}
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275dir = xe({
      type: t,
      selectors: [
        ["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]
      ],
      hostAttrs: ["novalidate", ""]
    }), t
  })();
  const Fg = new Bt("NgModelWithFormControlWarning"), Dg = {
    provide: Fm,
    useExisting: Tt(() => zg)
  };
  let zg = (() => {
    class t extends Fm {
      constructor(t, e) {
        super(), this._validators = t, this._asyncValidators = e, this.submitted = !1, this.directives = [], this.form = null, this.ngSubmit = new za
      }
      ngOnChanges(t) {
        this._checkFormPresent(), t.hasOwnProperty("form") && (this._updateValidators(), this._updateDomValue(), this._updateRegistrations())
      }
      get formDirective() {
        return this
      }
      get control() {
        return this.form
      }
      get path() {
        return []
      }
      addControl(t) {
        const e = this.form.get(t.path);
        return _g(e, t), e.updateValueAndValidity({
          emitEvent: !1
        }), this.directives.push(t), e
      }
      getControl(t) {
        return this.form.get(t.path)
      }
      removeControl(t) {
        ! function (t, e) {
          const n = t.indexOf(e);
          n > -1 && t.splice(n, 1)
        }(this.directives, t)
      }
      addFormGroup(t) {
        const e = this.form.get(t.path);
        bg(e, t), e.updateValueAndValidity({
          emitEvent: !1
        })
      }
      removeFormGroup(t) {}
      getFormGroup(t) {
        return this.form.get(t.path)
      }
      addFormArray(t) {
        const e = this.form.get(t.path);
        bg(e, t), e.updateValueAndValidity({
          emitEvent: !1
        })
      }
      removeFormArray(t) {}
      getFormArray(t) {
        return this.form.get(t.path)
      }
      updateModel(t, e) {
        this.form.get(t.path).setValue(e)
      }
      onSubmit(t) {
        return this.submitted = !0, e = this.directives, this.form._syncPendingControls(), e.forEach(t => {
          const e = t.control;
          "submit" === e.updateOn && e._pendingChange && (t.viewToModelUpdate(e._pendingValue), e._pendingChange = !1)
        }), this.ngSubmit.emit(t), !1;
        var e
      }
      onReset() {
        this.resetForm()
      }
      resetForm(t) {
        this.form.reset(t), this.submitted = !1
      }
      _updateDomValue() {
        this.directives.forEach(t => {
          const e = this.form.get(t.path);
          t.control !== e && (function (t, e) {
            e.valueAccessor.registerOnChange(() => wg(e)), e.valueAccessor.registerOnTouched(() => wg(e)), e._rawValidators.forEach(t => {
              t.registerOnValidatorChange && t.registerOnValidatorChange(null)
            }), e._rawAsyncValidators.forEach(t => {
              t.registerOnValidatorChange && t.registerOnValidatorChange(null)
            }), t && t._clearChangeFns()
          }(t.control, t), e && _g(e, t), t.control = e)
        }), this.form._updateTreeValidity({
          emitEvent: !1
        })
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(() => this._updateDomValue()), this._oldForm && this._oldForm._registerOnCollectionChange(() => {}), this._oldForm = this.form
      }
      _updateValidators() {
        const t = Sg(this._validators);
        this.form.validator = Gm.compose([this.form.validator, t]);
        const e = Cg(this._asyncValidators);
        this.form.asyncValidator = Gm.composeAsync([this.form.asyncValidator, e])
      }
      _checkFormPresent() {
        this.form || lg.missingFormException()
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js($m, 10), js(Zm, 10))
    }, t.\u0275dir = xe({
      type: t,
      selectors: [
        ["", "formGroup", ""]
      ],
      hostBindings: function (t, e) {
        1 & t && Ys("submit", (function (t) {
          return e.onSubmit(t)
        }))("reset", (function () {
          return e.onReset()
        }))
      },
      inputs: {
        form: ["formGroup", "form"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [Mo([Dg]), go, xo]
    }), t
  })();
  const jg = {
    provide: Fm,
    useExisting: Tt(() => Vg)
  };
  let Vg = (() => {
    class t extends Og {
      constructor(t, e, n) {
        super(), this._parent = t, this._validators = e, this._asyncValidators = n
      }
      _checkParentType() {
        Bg(this._parent) && lg.groupParentException()
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Fm, 13), js($m, 10), js(Zm, 10))
    }, t.\u0275dir = xe({
      type: t,
      selectors: [
        ["", "formGroupName", ""]
      ],
      inputs: {
        name: ["formGroupName", "name"]
      },
      features: [Mo([jg]), go]
    }), t
  })();
  const Ug = {
    provide: Fm,
    useExisting: Tt(() => Hg)
  };
  let Hg = (() => {
    class t extends Fm {
      constructor(t, e, n) {
        super(), this._parent = t, this._validators = e, this._asyncValidators = n
      }
      ngOnInit() {
        this._checkParentType(), this.formDirective.addFormArray(this)
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeFormArray(this)
      }
      get control() {
        return this.formDirective.getFormArray(this)
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null
      }
      get path() {
        return vg(null == this.name ? this.name : this.name.toString(), this._parent)
      }
      get validator() {
        return Sg(this._validators)
      }
      get asyncValidator() {
        return Cg(this._asyncValidators)
      }
      _checkParentType() {
        Bg(this._parent) && lg.arrayParentException()
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Fm, 13), js($m, 10), js(Zm, 10))
    }, t.\u0275dir = xe({
      type: t,
      selectors: [
        ["", "formArrayName", ""]
      ],
      inputs: {
        name: ["formArrayName", "name"]
      },
      features: [Mo([Ug]), go]
    }), t
  })();

  function Bg(t) {
    return !(t instanceof Vg || t instanceof zg || t instanceof Hg)
  }
  const $g = {
    provide: jm,
    useExisting: Tt(() => Zg)
  };
  let Zg = (() => {
    class t extends jm {
      constructor(t, e, n, i, r) {
        super(), this._ngModelWarningConfig = r, this._added = !1, this.update = new za, this._ngModelWarningSent = !1, this._parent = t, this._rawValidators = e || [], this._rawAsyncValidators = n || [], this.valueAccessor = function (t, e) {
          if (!e) return null;
          Array.isArray(e) || xg(t, "Value accessor was not provided as an array for form control with");
          let n = void 0,
            i = void 0,
            r = void 0;
          return e.forEach(e => {
            var s;
            e.constructor === Nm ? n = e : (s = e, kg.some(t => s.constructor === t) ? (i && xg(t, "More than one built-in value accessor matches form control with"), i = e) : (r && xg(t, "More than one custom value accessor matches form control with"), r = e))
          }), r || i || n || (xg(t, "No valid value accessor for form control with"), null)
        }(this, i)
      }
      set isDisabled(t) {
        lg.disabledAttrWarning()
      }
      ngOnChanges(e) {
        var n, i;
        this._added || this._setUpControl(),
          function (t, e) {
            if (!t.hasOwnProperty("model")) return !1;
            const n = t.model;
            return !!n.isFirstChange() || !Ts(e, n.currentValue)
          }(e, this.viewModel) && ("formControlName", n = t, this, i = this._ngModelWarningConfig, fi() && "never" !== i && ((null !== i && "once" !== i || n._ngModelWarningSentOnce) && ("always" !== i || this._ngModelWarningSent) || (lg.ngModelWarning("formControlName"), n._ngModelWarningSentOnce = !0, this._ngModelWarningSent = !0)), this.viewModel = this.model, this.formDirective.updateModel(this, this.model))
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this)
      }
      viewToModelUpdate(t) {
        this.viewModel = t, this.update.emit(t)
      }
      get path() {
        return vg(null == this.name ? this.name : this.name.toString(), this._parent)
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null
      }
      get validator() {
        return Sg(this._rawValidators)
      }
      get asyncValidator() {
        return Cg(this._rawAsyncValidators)
      }
      _checkParentType() {
        !(this._parent instanceof Vg) && this._parent instanceof Og ? lg.ngModelGroupException() : this._parent instanceof Vg || this._parent instanceof zg || this._parent instanceof Hg || lg.controlParentException()
      }
      _setUpControl() {
        this._checkParentType(), this.control = this.formDirective.addControl(this), this.control.disabled && this.valueAccessor.setDisabledState && this.valueAccessor.setDisabledState(!0), this._added = !0
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Fm, 13), js($m, 10), js(Zm, 10), js(Lm, 10), js(Fg, 8))
    }, t.\u0275dir = xe({
      type: t,
      selectors: [
        ["", "formControlName", ""]
      ],
      inputs: {
        isDisabled: ["disabled", "isDisabled"],
        name: ["formControlName", "name"],
        model: ["ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      features: [Mo([$g]), go, xo]
    }), t._ngModelWarningSentOnce = !1, t
  })();
  const qg = {
    provide: $m,
    useExisting: Tt(() => Gg),
    multi: !0
  };
  let Gg = (() => {
    class t {
      get required() {
        return this._required
      }
      set required(t) {
        this._required = null != t && !1 !== t && "false" !== `${t}`, this._onChange && this._onChange()
      }
      validate(t) {
        return this.required ? Gm.required(t) : null
      }
      registerOnValidatorChange(t) {
        this._onChange = t
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275dir = xe({
      type: t,
      selectors: [
        ["", "required", "", "formControlName", "", 3, "type", "checkbox"],
        ["", "required", "", "formControl", "", 3, "type", "checkbox"],
        ["", "required", "", "ngModel", "", 3, "type", "checkbox"]
      ],
      hostVars: 1,
      hostBindings: function (t, e) {
        2 & t && Rs("required", e.required ? "" : null)
      },
      inputs: {
        required: "required"
      },
      features: [Mo([qg])]
    }), t
  })(), Wg = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      }
    }), t
  })(), Kg = (() => {
    class t {
      group(t, e = null) {
        const n = this._reduceControls(t);
        let i = null,
          r = null,
          s = void 0;
        return null != e && (function (t) {
          return void 0 !== t.asyncValidators || void 0 !== t.validators || void 0 !== t.updateOn
        }(e) ? (i = null != e.validators ? e.validators : null, r = null != e.asyncValidators ? e.asyncValidators : null, s = null != e.updateOn ? e.updateOn : void 0) : (i = null != e.validator ? e.validator : null, r = null != e.asyncValidator ? e.asyncValidator : null)), new Ig(n, {
          asyncValidators: r,
          updateOn: s,
          validators: i
        })
      }
      control(t, e, n) {
        return new Ag(t, e, n)
      }
      array(t, e, n) {
        const i = t.map(t => this._createControl(t));
        return new Mg(i, e, n)
      }
      _reduceControls(t) {
        const e = {};
        return Object.keys(t).forEach(n => {
          e[n] = this._createControl(t[n])
        }), e
      }
      _createControl(t) {
        return t instanceof Ag || t instanceof Ig || t instanceof Mg ? t : Array.isArray(t) ? this.control(t[0], t.length > 1 ? t[1] : null, t.length > 2 ? t[2] : null) : this.control(t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275prov = mt({
      token: t,
      factory: t.\u0275fac
    }), t
  })(), Yg = (() => {
    class t {
      static withConfig(e) {
        return {
          ngModule: t,
          providers: [{
            provide: Fg,
            useValue: e.warnOnNgModelWithFormControl
          }]
        }
      }
    }
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      providers: [Kg, ng],
      imports: [Wg]
    }), t
  })(), Jg = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-authentications-main"]
      ],
      decls: 4,
      vars: 0,
      consts: [
        [1, "authentication"],
        [1, "row", "justify-content-center"],
        [1, "col-lg-5"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "div", 0), $s(1, "div", 1), $s(2, "div", 2), qs(3, "router-outlet"), Zs(), Zs(), Zs())
      },
      directives: [Ff],
      styles: [".authentication[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:100%;width:100%;background-color:#5d6d00;color:#eceff1;padding:30px}"]
    }), t
  })(), Qg = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.router = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/authentication/", this.options = {
          params: new Ju({
            fromString: "access_token=" + this.getToken()
          })
        }
      }
      login(t) {
        return this.http.post(this.baseUrl, t)
      }
      user() {
        return this.http.get(this.baseUrl + "user", this.options)
      }
      validity() {
        return this.http.get(this.baseUrl + "validity", this.options)
      }
      loggedIn() {
        return !!localStorage.getItem("token")
      }
      getToken() {
        return localStorage.getItem("token")
      }
      logoutUser() {
        localStorage.clear(), this.router.navigate(["/"])
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Xt(lh), Xt(Lf))
    }, t.\u0275prov = mt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })();

  function Xg(t, e) {
    1 & t && ($s(0, "div"), co(1, "Mot de passe obligatoire"), Zs())
  }

  function tv(t, e) {
    1 & t && ($s(0, "div"), co(1, "E-mail obligatoire"), Zs())
  }

  function ev(t, e) {
    1 & t && ($s(0, "div"), co(1, "E-mail invalide"), Zs())
  }

  function nv(t, e) {
    if (1 & t && ($s(0, "div", 15), $s(1, "div"), co(2), Zs(), Ds(3, Xg, 2, 0, "div", 8), Ds(4, tv, 2, 0, "div", 8), Ds(5, ev, 2, 0, "div", 8), Zs()), 2 & t) {
      const t = Xs();
      Oi(2), uo(t.errorMessage), Oi(1), Hs("ngIf", null == t.loginForm.get("password").errors ? null : t.loginForm.get("password").errors.required), Oi(1), Hs("ngIf", null == t.loginForm.get("email").errors ? null : t.loginForm.get("email").errors.required), Oi(1), Hs("ngIf", null == t.loginForm.get("email").errors ? null : t.loginForm.get("email").errors.email)
    }
  }

  function iv(t, e) {
    1 & t && qs(0, "div", 16)
  }

  function rv(t, e) {
    1 & t && qs(0, "div")
  }

  function sv(t, e) {
    1 & t && ($s(0, "div"), co(1, "E-mail obligatoire"), Zs())
  }

  function ov(t, e) {
    1 & t && ($s(0, "div"), co(1, "E-mail invalide"), Zs())
  }

  function av(t, e) {
    if (1 & t && ($s(0, "div", 10), $s(1, "div"), co(2), Zs(), Ds(3, sv, 2, 0, "div", 11), Ds(4, ov, 2, 0, "div", 11), Zs()), 2 & t) {
      const t = Xs();
      Oi(2), uo(t.errorMessage), Oi(1), Hs("ngIf", null == t.forgotForm.get("email").errors ? null : t.forgotForm.get("email").errors.required), Oi(1), Hs("ngIf", null == t.forgotForm.get("email").errors ? null : t.forgotForm.get("email").errors.email)
    }
  }

  function lv(t, e) {
    1 & t && qs(0, "div", 12)
  }
  const cv = [{
    path: "",
    component: Jg,
    children: [{
      path: "",
      component: (() => {
        class t {
          constructor(t, e, n) {
            this.fb = t, this.authenticationService = e, this.router = n
          }
          ngOnInit() {
            this.createForm()
          }
          createForm() {
            this.loginForm = this.fb.group({
              email: ["", [Gm.required, Gm.email]],
              password: ["", Gm.required]
            })
          }
          onSubmit() {
            this.authenticationService.login(this.loginForm.value).subscribe(t => {
              localStorage.setItem("token", t.token), "admin" === t.role ? this.router.navigate(["/administrator/dashboard"]) : "officer" === t.role ? this.router.navigate(["/townhalls/dashboard"]) : "avec" === t.role ? this.router.navigate(["/association/dashboard"]) : "supplier" === t.role ? this.router.navigate(["/supplier/dashboard"]) : "banker" === t.role && this.router.navigate(["/bank/dashboard"])
            }, t => {
              t instanceof oh && 404 === t.status && (this.errorMessage = "E-mail ou mot de passe incorrect")
            })
          }
        }
        return t.\u0275fac = function (e) {
          return new(e || t)(js(Kg), js(Qg), js(Lf))
        }, t.\u0275cmp = ge({
          type: t,
          selectors: [
            ["app-authentications-login"]
          ],
          decls: 23,
          vars: 7,
          consts: [
            [1, "text-center"],
            ["src", "../../../assets/images/logo.png", "alt", "logo CSSS", 1, "logo"],
            ["class", "alert alert-danger text-danger", 4, "ngIf"],
            ["class", "alert alert-danger", 4, "ngIf"],
            [3, "formGroup", "ngSubmit"],
            [1, "form-group"],
            ["for", "email"],
            ["type", "email", "name", "email", "formControlName", "email", "id", "email", "placeholder", "ADRESSE E-MAIL", 1, "form-control"],
            [4, "ngIf"],
            ["for", "password"],
            ["type", "password", "name", "password", "formControlName", "password", "id", "password", "placeholder", "MOT DE PASSE", 1, "form-control"],
            [1, "text-right"],
            ["routerLink", "/oversight"],
            ["type", "submit", 1, "button-login", 3, "disabled"],
            ["routerLinkActive", "active", "href", "http://sms.csss-ci.com", 1, "nav-link"],
            [1, "alert", "alert-danger", "text-danger"],
            [1, "alert", "alert-danger"]
          ],
          template: function (t, e) {
            1 & t && ($s(0, "div", 0), qs(1, "img", 1), Zs(), Ds(2, nv, 6, 4, "div", 2), Ds(3, iv, 1, 0, "div", 3), $s(4, "form", 4), Ys("ngSubmit", (function () {
              return e.onSubmit()
            })), $s(5, "div", 5), $s(6, "label", 6), co(7, "Adresse e-mail :"), Zs(), qs(8, "input", 7), Ds(9, rv, 1, 0, "div", 8), Zs(), $s(10, "div", 5), $s(11, "label", 9), co(12, "Mot de passe :"), Zs(), qs(13, "input", 10), $s(14, "div", 11), $s(15, "a", 12), co(16, " Mot de passe oubli\xe9 ?"), Zs(), Zs(), Zs(), $s(17, "div", 5), $s(18, "button", 13), co(19, "CONNEXION"), Zs(), Zs(), Zs(), $s(20, "div", 0), $s(21, "a", 14), co(22, "Acc\xe8s aux comptes SMS"), Zs(), Zs()), 2 & t && (Oi(2), Hs("ngIf", e.errorMessage || e.loginForm.get("password").invalid && e.loginForm.get("password").touched || e.loginForm.get("email").invalid && e.loginForm.get("email").touched), Oi(2), Hs("formGroup", e.loginForm), Oi(4), ro("is-invalid", e.loginForm.get("email").invalid && e.loginForm.get("email").touched), Oi(5), ro("is-invalid", e.loginForm.get("password").invalid && e.loginForm.get("password").touched), Oi(5), Hs("disabled", !e.loginForm.valid))
          },
          directives: [nu, Rg, Hm, zg, Nm, Um, Zg, If, Of],
          styles: ["h1[_ngcontent-%COMP%]{margin-bottom:20px}.button-login[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{text-align:center}.button-login[_ngcontent-%COMP%]{display:block;border-radius:0;border:none;background-color:#d4e157;color:#fff;width:100%;padding:10px 0;font-weight:700}a[_ngcontent-%COMP%]{color:#fff}a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover{text-decoration:none}a[_ngcontent-%COMP%]:hover{color:#f9fbe7}"]
        }), t
      })()
    }, {
      path: "oversight",
      component: (() => {
        class t {
          constructor(t) {
            this.fb = t
          }
          ngOnInit() {
            this.createForm()
          }
          createForm() {
            this.forgotForm = this.fb.group({
              email: ["", [Gm.required, Gm.email]]
            })
          }
          onSubmit() {}
        }
        return t.\u0275fac = function (e) {
          return new(e || t)(js(Kg))
        }, t.\u0275cmp = ge({
          type: t,
          selectors: [
            ["app-authentications-oversight"]
          ],
          decls: 19,
          vars: 5,
          consts: [
            [1, "text-center"],
            ["src", "../../../assets/images/logo.png", "alt", "logo CSSS", 1, "logo"],
            ["class", "alert alert-danger text-danger", 4, "ngIf"],
            ["class", "alert alert-danger", 4, "ngIf"],
            [3, "formGroup", "ngSubmit"],
            [1, "form-group"],
            ["for", "email"],
            ["type", "email", "name", "email", "formControlName", "email", "id", "email", "placeholder", "ADRESSE E-MAIL", 1, "form-control"],
            ["type", "submit", 1, "bouton", "btn-block", 3, "disabled"],
            ["routerLink", "/"],
            [1, "alert", "alert-danger", "text-danger"],
            [4, "ngIf"],
            [1, "alert", "alert-danger"]
          ],
          template: function (t, e) {
            1 & t && ($s(0, "div", 0), qs(1, "img", 1), Zs(), qs(2, "br"), qs(3, "br"), $s(4, "h4", 0), co(5, "Mot de passe oubli\xe9"), Zs(), Ds(6, av, 5, 3, "div", 2), Ds(7, lv, 1, 0, "div", 3), $s(8, "form", 4), Ys("ngSubmit", (function () {
              return e.onSubmit()
            })), $s(9, "div", 5), $s(10, "label", 6), co(11, "Adresse e-mail :"), Zs(), qs(12, "input", 7), Zs(), $s(13, "div", 5), $s(14, "button", 8), co(15, "ENVOYER"), Zs(), Zs(), Zs(), $s(16, "div", 0), $s(17, "a", 9), co(18, "Retourner \xe0 la page de connexion"), Zs(), Zs()), 2 & t && (Oi(6), Hs("ngIf", e.errorMessage || e.forgotForm.get("email").invalid && e.forgotForm.get("email").touched), Oi(2), Hs("formGroup", e.forgotForm), Oi(4), ro("is-invalid", e.forgotForm.get("email").invalid && e.forgotForm.get("email").touched), Oi(2), Hs("disabled", !e.forgotForm.valid))
          },
          directives: [nu, Rg, Hm, zg, Nm, Um, Zg, If],
          styles: [""]
        }), t
      })()
    }]
  }];
  let uv = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [qf.forRoot(cv)], qf
      ]
    }), t
  })(), hv = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [cu, qf, Sh, Yg, uv]
      ]
    }), t
  })();
  const dv = function () {
    return ["/administrator/dashboard"]
  }, pv = function () {
    return {}
  }, fv = function () {
    return ["/administrator/townhalls"]
  }, mv = function () {
    return ["/administrator/associations"]
  }, gv = function () {
    return ["/administrator/households"]
  }, vv = function () {
    return ["/administrator/needs"]
  }, _v = function () {
    return ["/administrator/suppliers"]
  }, yv = function () {
    return ["/administrator/sensitization"]
  }, bv = function () {
    return ["/administrator/banks"]
  };
  let wv = (() => {
    class t {
      constructor(t) {
        this.authService = t
      }
      ngOnInit() {
        this.getUser()
      }
      getUser() {
        this.authService.user().subscribe(t => this.user = t, t => {
          t instanceof oh && 401 === t.status && this.authService.logoutUser()
        })
      }
      sidebar() {
        this.status = !this.status
      }
      responsive() {
        this.mobile = !this.mobile
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Qg))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-admins-main"]
      ],
      decls: 60,
      vars: 20,
      consts: [
        [1, "header"],
        [1, "toggle-btn", 3, "click"],
        ["id", "sidebar", 3, "ngClass"],
        [1, "float-right", "btn-close", 3, "click"],
        [1, "sidebar-sticky"],
        [1, "nav", "flex-column"],
        [1, "nav-item"],
        ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "ngClass"],
        ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"],
        ["data-feather", "users"],
        ["data-feather", "bar-chart-2"],
        ["data-feather", "layers"],
        [1, "sidebar-heading", "d-flex", "justify-content-between", "align-items-center", "px-3", "mt-4", "mb-1", "text-muted"],
        ["href", "#", "aria-label", "Add a new report", 1, "d-flex", "align-items-center", "text-muted"],
        ["data-feather", "plus-circle"],
        [1, "nav", "flex-column", "mb-2"],
        ["href", "#", 1, "nav-link"],
        ["data-feather", "file-text"],
        ["routerLink", "/administrator/administrators", "routerLinkActive", "active", 1, "nav-link"],
        [1, "nav-link", 3, "click"],
        ["id", "main", 3, "ngClass"],
        [1, "container-fluid"],
        ["role", "main"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "header", 0), $s(1, "div", 1), Ys("click", (function () {
          return e.sidebar()
        })), qs(2, "span"), qs(3, "span"), qs(4, "span"), Zs(), Zs(), $s(5, "div", 2), $s(6, "button", 3), Ys("click", (function () {
          return e.sidebar()
        })), co(7, "X"), Zs(), $s(8, "nav"), $s(9, "div", 4), $s(10, "ul", 5), $s(11, "li", 6), $s(12, "a", 7), co(13, " Tableau de Bord "), Zs(), Zs(), $s(14, "li", 6), $s(15, "a", 8), co(16, " Municipalit\xe9 "), Zs(), Zs(), $s(17, "li", 6), $s(18, "a", 8), co(19, " Associations "), Zs(), Zs(), $s(20, "li", 6), $s(21, "a", 8), qs(22, "span", 9), co(23, " M\xe9nages "), Zs(), Zs(), $s(24, "li", 6), $s(25, "a", 8), qs(26, "span", 10), co(27, " Appels d'offre "), Zs(), Zs(), $s(28, "li", 6), $s(29, "a", 8), qs(30, "span", 10), co(31, " Fournisseurs "), Zs(), Zs(), $s(32, "li", 6), $s(33, "a", 8), qs(34, "span", 11), co(35, " Sensibilisations "), Zs(), Zs(), $s(36, "li", 6), $s(37, "a", 8), co(38, " Banques "), Zs(), Zs(), Zs(), $s(39, "h6", 12), $s(40, "span"), co(41, "Param\xe8trages"), Zs(), $s(42, "a", 13), qs(43, "span", 14), Zs(), Zs(), $s(44, "ul", 15), $s(45, "li", 6), $s(46, "a", 16), qs(47, "span", 17), co(48, " Changer de mot de passe "), Zs(), Zs(), $s(49, "li", 6), $s(50, "a", 18), qs(51, "span", 17), co(52, " Administrateurs "), Zs(), Zs(), $s(53, "li", 6), $s(54, "a", 19), Ys("click", (function () {
          return e.authService.logoutUser()
        })), co(55, "D\xe9connexion"), Zs(), Zs(), Zs(), Zs(), Zs(), Zs(), $s(56, "div", 20), $s(57, "div", 21), $s(58, "main", 22), qs(59, "router-outlet"), Zs(), Zs(), Zs()), 2 & t && (Oi(5), Hs("ngClass", e.status ? "sidebar-close" : "sidebar-open"), Oi(7), Hs("routerLink", Ea(11, dv))("ngClass", Ea(12, pv)), Oi(3), Hs("routerLink", Ea(13, fv)), Oi(3), Hs("routerLink", Ea(14, mv)), Oi(3), Hs("routerLink", Ea(15, gv)), Oi(4), Hs("routerLink", Ea(16, vv)), Oi(4), Hs("routerLink", Ea(17, _v)), Oi(4), Hs("routerLink", Ea(18, yv)), Oi(4), Hs("routerLink", Ea(19, bv)), Oi(19), Hs("ngClass", e.status ? "main-yes" : "main-no"))
      },
      directives: [Qc, If, Of, Ff],
      styles: [".logo[_ngcontent-%COMP%]{width:50%;margin-bottom:20px}"]
    }), t
  })(), xv = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/townHalls/", this.options = {
          params: new Ju({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      getTownhalls() {
        return this.http.get(this.baseUrl, this.options)
      }
      getTownhall(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
      setTownhall(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      putTownhall(t) {
        return this.http.put(this.baseUrl, t, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Xt(lh), Xt(Qg))
    }, t.\u0275prov = mt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), Sv = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/associations/", this.options = {
          params: new Ju({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      gets() {
        return this.http.get(this.baseUrl, this.options)
      }
      getAssociation(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
      setAssociation(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      putAssociation(t) {
        return this.http.put(this.baseUrl, t, this.options)
      }
      delAssociation(t) {
        return this.http.delete(this.baseUrl + t, this.options)
      }
      town() {
        return this.http.get(this.baseUrl + "town", this.options)
      }
      townById(t) {
        return this.http.get(this.baseUrl + "town/" + t, this.options)
      }
      familySizeById(t) {
        return this.http.get(this.baseUrl + "familySize/" + t, this.options)
      }
      familySize() {
        return this.http.get(this.baseUrl + "familySize", this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Xt(lh), Xt(Qg))
    }, t.\u0275prov = mt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), Cv = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationsService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/households/", this.options = {
          params: new Ju({
            fromString: "access_token=" + this.authenticationsService.getToken()
          })
        }
      }
      getHouseHolds() {
        return this.http.get(this.baseUrl, this.options)
      }
      getHouseHold(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
      setHouseHold(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      putHouseHold(t) {
        return this.http.put(this.baseUrl, t, this.options)
      }
      delHouseHold(t) {
        return this.http.delete(this.baseUrl + t, this.options)
      }
      address(t) {
        return this.http.put(this.baseUrl + "address", t, this.options)
      }
      association() {
        return this.http.get(this.baseUrl + "association", this.options)
      }
      associationById(t) {
        return this.http.get(this.baseUrl + "association/" + t, this.options)
      }
      town() {
        return this.http.get(this.baseUrl + "town", this.options)
      }
      townById(t) {
        return this.http.get(this.baseUrl + "town/" + t, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Xt(lh), Xt(Qg))
    }, t.\u0275prov = mt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), kv = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/suppliers/", this.options = {
          params: new Ju({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      getSuppliers() {
        return this.http.get(this.baseUrl, this.options)
      }
      getSupplier(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
      setSupplier(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      getDomains() {
        return this.http.get(this.baseUrl + "services", this.options)
      }
      town() {
        return this.http.get(this.baseUrl + "town", this.options)
      }
      townById(t) {
        return this.http.get(this.baseUrl + "town/" + t, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Xt(lh), Xt(Qg))
    }, t.\u0275prov = mt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), Pv = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/needs/", this.options = {
          params: new Ju({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      get(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
      gets() {
        return this.http.get(this.baseUrl, this.options)
      }
      set(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      put(t) {
        return this.http.put(this.baseUrl, t, this.options)
      }
      household(t) {
        return this.http.get(this.baseUrl + "household/" + t, this.options)
      }
      town() {
        return this.http.get(this.baseUrl + "town", this.options)
      }
      townById(t) {
        return this.http.get(this.baseUrl + "town/" + t, this.options)
      }
      supplier() {
        return this.http.get(this.baseUrl + "supplier", this.options)
      }
      supplierById(t) {
        return this.http.get(this.baseUrl + "supplier/" + t, this.options)
      }
      association() {
        return this.http.get(this.baseUrl + "association", this.options)
      }
      associationById(t) {
        return this.http.get(this.baseUrl + "association/" + t, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Xt(lh), Xt(Qg))
    }, t.\u0275prov = mt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), Ev = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/complaints/", this.options = {
          params: new Ju({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      gets() {
        return this.http.get(this.baseUrl, this.options)
      }
      get(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
      set(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      put(t) {
        return this.http.put(this.baseUrl, t, this.options)
      }
      town() {
        return this.http.get(this.baseUrl + "town", this.options)
      }
      townById(t) {
        return this.http.get(this.baseUrl + "town/" + t, this.options)
      }
      association() {
        return this.http.get(this.baseUrl + "association", this.options)
      }
      household(t) {
        return this.http.get(this.baseUrl + "household/" + t, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Xt(lh), Xt(Qg))
    }, t.\u0275prov = mt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), Tv = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/proposals/", this.options = {
          params: new Ju({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      get(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
      gets() {
        return this.http.get(this.baseUrl, this.options)
      }
      set(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      need(t) {
        return this.http.get(this.baseUrl + "need/" + t, this.options)
      }
      myProposals() {
        return this.http.get(this.baseUrl + "myProposals/", this.options)
      }
      myProject(t) {
        return this.http.get(this.baseUrl + "myProject/" + t, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Xt(lh), Xt(Qg))
    }, t.\u0275prov = mt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })();

  function Lv(t, e) {
    if (1 & t && ($s(0, "p", 9), $s(1, "span"), co(2, "Salut, "), $s(3, "b"), co(4), Zs(), Zs(), $s(5, "span"), co(6, "Voici ce qui se passe aujourd'hui."), Zs(), Zs()), 2 & t) {
      const t = Xs();
      Oi(4), uo(t.user.name)
    }
  }
  let Av = (() => {
    class t {
      constructor(t, e, n, i, r, s, o, a, l) {
        this.authService = t, this.townhallsService = e, this.associationsService = n, this.householdsService = i, this.suppliersService = r, this.needsService = s, this.complaintsService = o, this.proposalsService = a, this.router = l
      }
      ngOnInit() {
        this.getUser(), this.getTownHalls(), this.getAssociations(), this.getHouseholds(), this.getSuppliers(), this.getNeeds(), this.getComplaints()
      }
      getUser() {
        this.authService.user().subscribe(t => this.user = t, t => {
          console.log(t)
        })
      }
      getComplaints() {
        this.complaintsService.gets().subscribe(t => this.complaints = t, t => {
          console.log(t)
        })
      }
      getTownHalls() {
        this.townhallsService.getTownhalls().subscribe(t => this.townhalls = t, t => {
          console.log(t)
        })
      }
      getAssociations() {
        this.associationsService.gets().subscribe(t => this.associations = t, t => {
          console.log(t)
        })
      }
      getHouseholds() {
        this.householdsService.getHouseHolds().subscribe(t => this.households = t, t => {
          console.log(t)
        })
      }
      getSuppliers() {
        this.suppliersService.getSuppliers().subscribe(t => this.suppliers = t, t => {
          console.log(t)
        })
      }
      getNeeds() {
        this.needsService.gets().subscribe(t => this.needs = t, t => {
          console.log(t)
        })
      }
      getProposals() {
        this.proposalsService.gets().subscribe(t => this.proposals = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Qg), js(xv), js(Sv), js(Cv), js(kv), js(Pv), js(Ev), js(Tv), js(Lf))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-admins-dashboard"]
      ],
      decls: 55,
      vars: 8,
      consts: [
        ["class", "connected", 4, "ngIf"],
        [1, "row", "enumeration"],
        [1, "col-lg-3"],
        [1, "cadre"],
        [1, "title"],
        [1, "value"],
        [1, "row"],
        [1, "col-lg-4", "title-middle"],
        [1, "col-lg-6", "title-middle"],
        [1, "connected"]
      ],
      template: function (t, e) {
        1 & t && (Ds(0, Lv, 7, 1, "p", 0), $s(1, "section", 1), $s(2, "div", 2), $s(3, "div", 3), $s(4, "p", 4), co(5, "Municipalit\xe9s"), Zs(), $s(6, "p", 5), co(7), Zs(), Zs(), Zs(), $s(8, "div", 2), $s(9, "div", 3), $s(10, "p", 4), co(11, "A.V.E.Cs"), Zs(), $s(12, "p", 5), co(13), Zs(), Zs(), Zs(), $s(14, "div", 2), $s(15, "div", 3), $s(16, "p", 4), co(17, "M\xe9nages"), Zs(), $s(18, "p", 5), co(19), Zs(), Zs(), Zs(), $s(20, "div", 2), $s(21, "div", 3), $s(22, "p", 4), co(23, "Fournisseurs"), Zs(), $s(24, "p", 5), co(25), Zs(), Zs(), Zs(), Zs(), $s(26, "section"), $s(27, "h2"), co(28, "Besoins et Appels d'offres"), Zs(), $s(29, "div", 6), $s(30, "div", 7), $s(31, "p"), co(32), qs(33, "br"), co(34, " Besoins exprim\xe9s "), Zs(), Zs(), $s(35, "div", 7), $s(36, "p"), co(37), qs(38, "br"), co(39, " Propositions "), Zs(), Zs(), $s(40, "div", 7), $s(41, "p"), co(42), qs(43, "br"), co(44, " Plaintes "), Zs(), Zs(), Zs(), Zs(), $s(45, "section"), $s(46, "h2"), co(47, "Bilan financiers"), Zs(), $s(48, "div", 6), $s(49, "div", 8), $s(50, "p"), co(51, "Projets financ\xe9s : 0"), Zs(), Zs(), $s(52, "div", 8), $s(53, "p"), co(54, "0% de financement "), Zs(), Zs(), Zs(), Zs()), 2 & t && (Hs("ngIf", e.user), Oi(7), uo(e.townhalls ? e.townhalls.length : 0), Oi(6), uo(e.associations ? e.associations.length : 0), Oi(6), uo(e.households ? e.households.length : 0), Oi(6), uo(e.suppliers ? e.suppliers.length : 0), Oi(7), ho(" ", e.needs ? e.needs.length : 0, " "), Oi(5), ho(" ", e.proposals ? e.proposals.length : 0, " "), Oi(5), ho(" ", e.complaints ? e.complaints.length : 0, " "))
      },
      directives: [nu],
      styles: [".enumeration[_ngcontent-%COMP%]{text-align:center;font-size:16px;margin-bottom:40px}.enumeration[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Oswald,sans-serif;display:block;text-align:center;color:#827717;font-weight:600}.enumeration[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-family:Roboto Condensed,sans-serif;font-weight:600;font-size:21px;color:#000}.enumeration[_ngcontent-%COMP%]   .cadre[_ngcontent-%COMP%]{border:1px solid #e0e0e0;padding:20px}"]
    }), t
  })(), Iv = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/admins/", this.options = {
          params: new Ju({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      setAdmin(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      getAdmins() {
        return this.http.get(this.baseUrl, this.options)
      }
      getAdmin(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
      putAdmin(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Xt(lh), Xt(Qg))
    }, t.\u0275prov = mt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), Mv = (() => {
    class t {
      constructor(t, e, n) {
        this.adminsService = t, this.fb = e, this.router = n
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.adminForm = this.fb.group({
          admin: ["", Gm.required],
          email: ["", [Gm.required, Gm.email]]
        })
      }
      onSubmit() {
        this.adminsService.setAdmin(this.adminForm.value).subscribe(t => {
          this.router.navigate(["/adminstrator/list"])
        }, t => {
          this.errorMessage = t.message
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Iv), js(Kg), js(Lf))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-admins-add"]
      ],
      decls: 18,
      vars: 2,
      consts: [
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "admin"],
        ["type", "text", "formControlName", "admin", "id", "admin", "required", "", 1, "form-control"],
        ["for", "email"],
        ["type", "email", "formControlName", "email", "id", "email", "required", "", 1, "form-control"],
        ["type", "submit", 1, "button", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "h1"), co(1, "Administrateur"), Zs(), qs(2, "hr"), $s(3, "div", 0), $s(4, "h2"), co(5, "Ajouter Administrateur"), Zs(), $s(6, "form", 1), Ys("ngSubmit", (function () {
          return e.onSubmit()
        })), $s(7, "div", 2), $s(8, "label", 3), co(9, "Nom et prenoms"), Zs(), qs(10, "input", 4), Zs(), $s(11, "div", 2), $s(12, "label", 5), co(13, "Adresse e-mail"), Zs(), qs(14, "input", 6), Zs(), $s(15, "div", 2), $s(16, "button", 7), co(17, "ENREGISTRER"), Zs(), Zs(), Zs(), Zs()), 2 & t && (Oi(6), Hs("formGroup", e.adminForm), Oi(10), Hs("disabled", !e.adminForm.valid))
      },
      directives: [Rg, Hm, zg, Nm, Um, Zg, Gg],
      styles: [""]
    }), t
  })();

  function Ov(t, e) {
    if (1 & t && ($s(0, "div", 9), co(1), Zs()), 2 & t) {
      const t = Xs();
      Oi(1), uo(t.errorMessage)
    }
  }

  function Nv(t, e) {
    if (1 & t && ($s(0, "tr"), $s(1, "td"), co(2), Zs(), $s(3, "td"), co(4), Zs(), Zs()), 2 & t) {
      const t = e.$implicit;
      Oi(2), uo(t.admin), Oi(2), uo(t.email)
    }
  }
  let Rv = (() => {
    class t {
      constructor(t) {
        this.adminsService = t
      }
      ngOnInit() {
        this.getAdmins()
      }
      getAdmins() {
        this.adminsService.getAdmins().subscribe(t => {
          this.admins = t
        }, t => {
          this.errorMessage = t.message
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Iv))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-admins-list"]
      ],
      decls: 21,
      vars: 2,
      consts: [
        ["routerLink", "/administrator/add", 1, "bouton", "float-right"],
        ["aria-label", "breadcrumb"],
        [1, "breadcrumb"],
        [1, "breadcrumb-item"],
        ["routerLink", "/administrator/dashboard"],
        ["aria-current", "page", 1, "breadcrumb-item", "active"],
        ["class", "alert alert-danger", 4, "ngIf"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [1, "alert", "alert-danger"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "h1"), co(1, "Administrateurs"), Zs(), $s(2, "h3"), $s(3, "a", 0), co(4, "AJOUTER"), Zs(), Zs(), $s(5, "nav", 1), $s(6, "ol", 2), $s(7, "li", 3), $s(8, "a", 4), co(9, "Tableau de bord"), Zs(), Zs(), $s(10, "li", 5), co(11, "Administrateurs"), Zs(), Zs(), Zs(), Ds(12, Ov, 2, 1, "div", 6), $s(13, "table", 7), $s(14, "thead"), $s(15, "th"), co(16, "Admin"), Zs(), $s(17, "th"), co(18, "E-mail"), Zs(), Zs(), $s(19, "tbody"), Ds(20, Nv, 5, 2, "tr", 8), Zs(), Zs()), 2 & t && (Oi(12), Hs("ngIf", e.errorMessage), Oi(8), Hs("ngForOf", e.admins))
      },
      directives: [If, nu, tu],
      styles: [""]
    }), t
  })(), Fv = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-sensitization-main"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && ($s(0, "h1"), co(1, "Sensibilisations"), Zs(), qs(2, "router-outlet"))
      },
      directives: [Ff],
      styles: [""]
    }), t
  })(), Dv = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-sms-main"]
      ],
      decls: 1,
      vars: 0,
      template: function (t, e) {
        1 & t && qs(0, "router-outlet")
      },
      directives: [Ff],
      styles: [""]
    }), t
  })(), zv = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/sensitizations", this.options = {
          params: new Ju({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      set(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      setAll(t) {
        return this.http.post(this.baseUrl + "/all", t, this.options)
      }
      setChiefs(t) {
        return this.http.post(this.baseUrl + "/chiefs", t, this.options)
      }
      setAssociation(t) {
        return this.http.post(this.baseUrl + "/association", t, this.options)
      }
      gets() {
        return this.http.get(this.baseUrl, this.options)
      }
      get(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Xt(lh), Xt(Qg))
    }, t.\u0275prov = mt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })();

  function jv(t, e) {
    if (1 & t && ($s(0, "tr"), $s(1, "td"), co(2), Zs(), $s(3, "td"), co(4), Zs(), $s(5, "td"), co(6), Zs(), Zs()), 2 & t) {
      const t = e.$implicit;
      Oi(2), uo(t.message), Oi(2), uo(t.recipient), Oi(2), uo(t.messageDate)
    }
  }
  let Vv = (() => {
    class t {
      constructor(t) {
        this.messagesService = t
      }
      ngOnInit() {
        this.getSms()
      }
      getSms() {
        this.messagesService.gets().subscribe(t => {
          this.messages = t
        }, t => {
          console.error()
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(zv))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-sms-list"]
      ],
      decls: 6,
      vars: 1,
      consts: [
        [1, "table"],
        [4, "ngFor", "ngForOf"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "h3"), co(1, " SMS envoy\xe9s\n"), Zs(), qs(2, "div"), $s(3, "table", 0), $s(4, "tbody"), Ds(5, jv, 7, 3, "tr", 1), Zs(), Zs()), 2 & t && (Oi(5), Hs("ngForOf", e.messages))
      },
      directives: [tu],
      styles: [""]
    }), t
  })();

  function Uv(t, e) {
    if (1 & t && ($s(0, "div", 10), co(1), Oa(2, "json"), Zs()), 2 & t) {
      const t = Xs();
      Oi(1), uo(Na(2, 1, t.errorMessage))
    }
  }

  function Hv(t, e) {
    if (1 & t && ($s(0, "div", 11), co(1), Zs()), 2 & t) {
      const t = Xs();
      Oi(1), uo(t.successMessage)
    }
  }
  let Bv = (() => {
    class t {
      constructor(t, e) {
        this.messagesService = t, this.fb = e
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.smsForm = this.fb.group({
          message: ["", Gm.required],
          recipient: ["", [Gm.required, Gm.minLength(11)]]
        })
      }
      onSubmit() {
        this.messagesService.set(this.smsForm.value).subscribe(t => {
          this.successMessage = "Message envoy\xe9 avec succ\xe8s"
        }, t => {
          this.errorMessage = "Une erreur s'est produite, message non envoy\xe9"
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(zv), js(Kg))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-sms-send"]
      ],
      decls: 19,
      vars: 4,
      consts: [
        ["routerLink", "/administrator/sensitization/sms", 1, "bouton", "float-right"],
        [1, "col-lg-8"],
        ["class", "alert alert-danger", 4, "ngIf"],
        ["class", "alert alert-success", 4, "ngIf"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "recipient"],
        ["type", "text", "name", "recipient", "formControlName", "recipient", "id", "recipient", 1, "form-control"],
        ["name", "message", "formControlName", "message", "id", "message", 1, "form-control"],
        ["type", "submit", 1, "bouton", 3, "disabled"],
        [1, "alert", "alert-danger"],
        [1, "alert", "alert-success"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "h3"), $s(1, "a", 0), co(2, "Retour"), Zs(), co(3, " Envoi de SMS\n"), Zs(), $s(4, "div", 1), Ds(5, Uv, 3, 3, "div", 2), Ds(6, Hv, 2, 1, "div", 3), $s(7, "form", 4), Ys("ngSubmit", (function () {
          return e.onSubmit()
        })), $s(8, "div", 5), $s(9, "label", 6), co(10, "Destinataires"), Zs(), qs(11, "input", 7), Zs(), $s(12, "div", 5), $s(13, "label", 6), co(14, "Message"), Zs(), qs(15, "textarea", 8), Zs(), $s(16, "div", 5), $s(17, "button", 9), co(18, "Envoyer"), Zs(), Zs(), Zs(), Zs()), 2 & t && (Oi(5), Hs("ngIf", e.errorMessage), Oi(1), Hs("ngIf", e.successMessage), Oi(1), Hs("formGroup", e.smsForm), Oi(10), Hs("disabled", !e.smsForm.valid))
      },
      directives: [If, nu, Rg, Hm, zg, Nm, Um, Zg],
      pipes: [au],
      styles: [""]
    }), t
  })(), $v = (() => {
    class t {
      constructor(t, e, n) {
        this.messagesService = t, this.fb = e, this.router = n
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.smsForm = this.fb.group({
          message: ["", Gm.required]
        })
      }
      onSubmit() {
        this.messagesService.setAll(this.smsForm.value).subscribe(t => {
          this.router.navigate(["/administrator/sensitization/sms"])
        }, t => console.log(t))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(zv), js(Kg), js(Lf))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-sms-everyone"]
      ],
      decls: 13,
      vars: 2,
      consts: [
        ["routerLink", "/administrator/sensitization/sms", 1, "bouton", "float-right"],
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "message"],
        ["name", "message", "formControlName", "message", "id", "message", 1, "form-control"],
        ["type", "submit", 1, "bouton", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "h3"), $s(1, "a", 0), co(2, "Retour"), Zs(), co(3, " Envoi de SMS \xe0 toutes les AVEC\n"), Zs(), $s(4, "div", 1), $s(5, "form", 2), Ys("ngSubmit", (function () {
          return e.onSubmit()
        })), $s(6, "div", 3), $s(7, "label", 4), co(8, "Message"), Zs(), qs(9, "textarea", 5), Zs(), $s(10, "div", 3), $s(11, "button", 6), co(12, "Envoyer"), Zs(), Zs(), Zs(), Zs()), 2 & t && (Oi(5), Hs("formGroup", e.smsForm), Oi(6), Hs("disabled", !e.smsForm.valid))
      },
      directives: [If, Rg, Hm, zg, Nm, Um, Zg],
      styles: [""]
    }), t
  })(), Zv = (() => {
    class t {
      constructor(t, e, n) {
        this.messagesService = t, this.fb = e, this.router = n
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.smsForm = this.fb.group({
          message: ["", Gm.required]
        })
      }
      onSubmit() {
        this.messagesService.setChiefs(this.smsForm.value).subscribe(t => {
          this.router.navigate(["/administrator/sensitization/sms"])
        }, t => console.log(t))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(zv), js(Kg), js(Lf))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-sms-chiefs"]
      ],
      decls: 13,
      vars: 2,
      consts: [
        ["routerLink", "/administrator/sensitization/sms", 1, "bouton", "float-right"],
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "message"],
        ["name", "message", "formControlName", "message", "id", "message", 1, "form-control"],
        ["type", "submit", 1, "bouton", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "h3"), $s(1, "a", 0), co(2, "Retour"), Zs(), co(3, " Envoi de SMS aux pr\xe9sidents d'AVEC\n"), Zs(), $s(4, "div", 1), $s(5, "form", 2), Ys("ngSubmit", (function () {
          return e.onSubmit()
        })), $s(6, "div", 3), $s(7, "label", 4), co(8, "Message"), Zs(), qs(9, "textarea", 5), Zs(), $s(10, "div", 3), $s(11, "button", 6), co(12, "Envoyer"), Zs(), Zs(), Zs(), Zs()), 2 & t && (Oi(5), Hs("formGroup", e.smsForm), Oi(6), Hs("disabled", !e.smsForm.valid))
      },
      directives: [If, Rg, Hm, zg, Nm, Um, Zg],
      styles: [""]
    }), t
  })();

  function qv(t, e) {
    if (1 & t && ($s(0, "option", 10), co(1), Zs()), 2 & t) {
      const t = e.$implicit;
      Hs("value", t.idassociation), Oi(1), uo(t.association)
    }
  }
  let Gv = (() => {
    class t {
      constructor(t, e, n, i) {
        this.messagesService = t, this.associationsService = e, this.fb = n, this.router = i
      }
      ngOnInit() {
        this.createForm(), this.getAssociations()
      }
      getAssociations() {
        this.associationsService.gets().subscribe(t => {
          this.associations = t
        }, t => {
          console.log(t)
        })
      }
      createForm() {
        this.smsForm = this.fb.group({
          recipient: ["", Gm.required],
          message: ["", Gm.required]
        })
      }
      onSubmit() {
        this.messagesService.setAssociation(this.smsForm.value).subscribe(t => {
          this.router.navigate(["/administrator/sensitization/sms"])
        }, t => console.log(t))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(zv), js(Sv), js(Kg), js(Lf))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-sms-association"]
      ],
      decls: 20,
      vars: 3,
      consts: [
        ["routerLink", "/administrator/sensitization/sms", 1, "bouton", "float-right"],
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "message"],
        ["name", "recipient", "id", "recipient", "formControlName", "recipient", 1, "form-control"],
        ["value", ""],
        [3, "value", 4, "ngFor", "ngForOf"],
        ["name", "message", "formControlName", "message", "id", "message", 1, "form-control"],
        ["type", "submit", 1, "bouton", 3, "disabled"],
        [3, "value"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "h3"), $s(1, "a", 0), co(2, "Retour"), Zs(), co(3, " Envoi de SMS \xe0 un AVEC\n"), Zs(), $s(4, "div", 1), $s(5, "form", 2), Ys("ngSubmit", (function () {
          return e.onSubmit()
        })), $s(6, "div", 3), $s(7, "label", 4), co(8, "AVEC"), Zs(), $s(9, "select", 5), $s(10, "option", 6), co(11, "Choisir"), Zs(), Ds(12, qv, 2, 2, "option", 7), Zs(), Zs(), $s(13, "div", 3), $s(14, "label", 4), co(15, "Message"), Zs(), qs(16, "textarea", 8), Zs(), $s(17, "div", 3), $s(18, "button", 9), co(19, "Envoyer"), Zs(), Zs(), Zs(), Zs()), 2 & t && (Oi(5), Hs("formGroup", e.smsForm), Oi(7), Hs("ngForOf", e.associations), Oi(6), Hs("disabled", !e.smsForm.valid))
      },
      directives: [If, Rg, Hm, zg, hg, Um, Zg, dg, gg, tu, Nm],
      styles: [""]
    }), t
  })();

  function Wv(t, e) {
    if (1 & t) {
      var n = Gs();
      $s(0, "a", 11), Ys("keyup.enter", (function () {
        return Qe(n), Xs(3), zs(1).previous()
      }))("click", (function () {
        return Qe(n), Xs(3), zs(1).previous()
      })), co(1), $s(2, "span", 12), co(3), Zs(), Zs()
    }
    if (2 & t) {
      var i = Xs(3);
      Rs("aria-label", i.previousLabel + " " + i.screenReaderPageLabel), Oi(1), ho(" ", i.previousLabel, " "), Oi(2), uo(i.screenReaderPageLabel)
    }
  }

  function Kv(t, e) {
    if (1 & t && ($s(0, "span"), co(1), $s(2, "span", 12), co(3), Zs(), Zs()), 2 & t) {
      var n = Xs(3);
      Oi(1), ho(" ", n.previousLabel, " "), Oi(2), uo(n.screenReaderPageLabel)
    }
  }

  function Yv(t, e) {
    if (1 & t && ($s(0, "li", 8), Ds(1, Wv, 4, 3, "a", 9), Ds(2, Kv, 4, 2, "span", 10), Zs()), 2 & t) {
      Xs(2);
      var n = zs(1);
      ro("disabled", n.isFirstPage()), Oi(1), Hs("ngIf", 1 < n.getCurrent()), Oi(1), Hs("ngIf", n.isFirstPage())
    }
  }

  function Jv(t, e) {
    if (1 & t) {
      var n = Gs();
      $s(0, "a", 11), Ys("keyup.enter", (function () {
        Qe(n);
        var t = Xs().$implicit;
        return Xs(2), zs(1).setCurrent(t.value)
      }))("click", (function () {
        Qe(n);
        var t = Xs().$implicit;
        return Xs(2), zs(1).setCurrent(t.value)
      })), $s(1, "span", 12), co(2), Zs(), $s(3, "span"), co(4), Oa(5, "number"), Zs(), Zs()
    }
    if (2 & t) {
      var i = Xs().$implicit,
        r = Xs(2);
      Oi(2), ho("", r.screenReaderPageLabel, " "), Oi(2), uo("..." === i.label ? i.label : Ra(5, 2, i.label, ""))
    }
  }

  function Qv(t, e) {
    if (1 & t && (function (t, e, n) {
        const i = Ye(),
          r = Je(),
          s = r.firstCreatePass ? function (t, e, n, i, r) {
            const s = e.consts,
              o = qe(s, void 0),
              a = $i(e, n[6], 0, 4, "ng-container", o);
            return null !== o && ks(a, o), ir(e, n, a, qe(s, void 0)), null !== e.queries && e.queries.elementStart(e, a), a
          }(0, r, i) : r.data[19];
        tn(s, !0);
        const o = i[19] = i[11].createComment("");
        Br(r, i, o, s), yi(o, i), Ie(s) && (Yi(r, i, s), Ki(r, s, i))
      }(), $s(1, "span", 12), co(2), Zs(), $s(3, "span"), co(4), Oa(5, "number"), Zs(), function () {
        let t = Xe();
        const e = Je();
        en() ? nn() : (t = t.parent, tn(t, !1)), e.firstCreatePass && (Sn(e, t), Le(t) && e.queries.elementEnd(t))
      }()), 2 & t) {
      var n = Xs().$implicit,
        i = Xs(2);
      Oi(2), ho("", i.screenReaderCurrentLabel, " "), Oi(2), uo("..." === n.label ? n.label : Ra(5, 2, n.label, ""))
    }
  }

  function Xv(t, e) {
    if (1 & t && ($s(0, "li"), Ds(1, Jv, 6, 5, "a", 9), Ds(2, Qv, 6, 5, "ng-container", 10), Zs()), 2 & t) {
      var n = e.$implicit;
      Xs(2);
      var i = zs(1);
      ro("current", i.getCurrent() === n.value)("ellipsis", "..." === n.label), Oi(1), Hs("ngIf", i.getCurrent() !== n.value), Oi(1), Hs("ngIf", i.getCurrent() === n.value)
    }
  }

  function t_(t, e) {
    if (1 & t) {
      var n = Gs();
      $s(0, "a", 11), Ys("keyup.enter", (function () {
        return Qe(n), Xs(3), zs(1).next()
      }))("click", (function () {
        return Qe(n), Xs(3), zs(1).next()
      })), co(1), $s(2, "span", 12), co(3), Zs(), Zs()
    }
    if (2 & t) {
      var i = Xs(3);
      Rs("aria-label", i.nextLabel + " " + i.screenReaderPageLabel), Oi(1), ho(" ", i.nextLabel, " "), Oi(2), uo(i.screenReaderPageLabel)
    }
  }

  function e_(t, e) {
    if (1 & t && ($s(0, "span"), co(1), $s(2, "span", 12), co(3), Zs(), Zs()), 2 & t) {
      var n = Xs(3);
      Oi(1), ho(" ", n.nextLabel, " "), Oi(2), uo(n.screenReaderPageLabel)
    }
  }

  function n_(t, e) {
    if (1 & t && ($s(0, "li", 13), Ds(1, t_, 4, 3, "a", 9), Ds(2, e_, 4, 2, "span", 10), Zs()), 2 & t) {
      Xs(2);
      var n = zs(1);
      ro("disabled", n.isLastPage()), Oi(1), Hs("ngIf", !n.isLastPage()), Oi(1), Hs("ngIf", n.isLastPage())
    }
  }

  function i_(t, e) {
    if (1 & t && ($s(0, "ul", 3), Ds(1, Yv, 3, 4, "li", 4), $s(2, "li", 5), co(3), Zs(), Ds(4, Xv, 3, 6, "li", 6), Ds(5, n_, 3, 4, "li", 7), Zs()), 2 & t) {
      var n = Xs(),
        i = zs(1);
      ro("responsive", n.responsive), Rs("aria-label", n.screenReaderPaginationLabel), Oi(1), Hs("ngIf", n.directionLinks), Oi(2), po(" ", i.getCurrent(), " / ", i.getLastPage(), " "), Oi(1), Hs("ngForOf", i.pages), Oi(1), Hs("ngIf", n.directionLinks)
    }
  }
  var r_ = function () {
    function t() {
      this.change = new za, this.instances = {}, this.DEFAULT_ID = "DEFAULT_PAGINATION_ID"
    }
    return t.prototype.defaultId = function () {
      return this.DEFAULT_ID
    }, t.prototype.register = function (t) {
      return null == t.id && (t.id = this.DEFAULT_ID), this.instances[t.id] ? this.updateInstance(t) : (this.instances[t.id] = t, !0)
    }, t.prototype.updateInstance = function (t) {
      var e = !1;
      for (var n in this.instances[t.id]) t[n] !== this.instances[t.id][n] && (this.instances[t.id][n] = t[n], e = !0);
      return e
    }, t.prototype.getCurrentPage = function (t) {
      if (this.instances[t]) return this.instances[t].currentPage
    }, t.prototype.setCurrentPage = function (t, e) {
      if (this.instances[t]) {
        var n = this.instances[t];
        e <= Math.ceil(n.totalItems / n.itemsPerPage) && 1 <= e && (this.instances[t].currentPage = e, this.change.emit(t))
      }
    }, t.prototype.setTotalItems = function (t, e) {
      this.instances[t] && 0 <= e && (this.instances[t].totalItems = e, this.change.emit(t))
    }, t.prototype.setItemsPerPage = function (t, e) {
      this.instances[t] && (this.instances[t].itemsPerPage = e, this.change.emit(t))
    }, t.prototype.getInstance = function (t) {
      return void 0 === t && (t = this.DEFAULT_ID), this.instances[t] ? this.clone(this.instances[t]) : {}
    }, t.prototype.clone = function (t) {
      var e = {};
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      return e
    }, t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275prov = mt({
      token: t,
      factory: function (e) {
        return t.\u0275fac(e)
      }
    }), t
  }(), s_ = function (t, e) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
  }, o_ = Number.MAX_SAFE_INTEGER, a_ = function () {
    function t(t) {
      this.service = t, this.state = {}
    }
    return t.prototype.transform = function (t, e) {
      if (!(t instanceof Array)) {
        var n = e.id || this.service.defaultId();
        return this.state[n] ? this.state[n].slice : t
      }
      var i, r, s = e.totalItems && e.totalItems !== t.length,
        o = this.createInstance(t, e),
        a = o.id,
        l = o.itemsPerPage,
        c = this.service.register(o);
      if (!s && t instanceof Array) {
        if (this.stateIsIdentical(a, t, i = (o.currentPage - 1) * (l = +l || o_), r = i + l)) return this.state[a].slice;
        var u = t.slice(i, r);
        return this.saveState(a, t, u, i, r), this.service.change.emit(a), u
      }
      return c && this.service.change.emit(a), this.saveState(a, t, t, i, r), t
    }, t.prototype.createInstance = function (t, e) {
      return this.checkConfig(e), {
        id: null != e.id ? e.id : this.service.defaultId(),
        itemsPerPage: +e.itemsPerPage || 0,
        currentPage: +e.currentPage || 1,
        totalItems: +e.totalItems || t.length
      }
    }, t.prototype.checkConfig = function (t) {
      var e = ["itemsPerPage", "currentPage"].filter((function (e) {
        return !(e in t)
      }));
      if (0 < e.length) throw new Error("PaginatePipe: Argument is missing the following required properties: " + e.join(", "))
    }, t.prototype.saveState = function (t, e, n, i, r) {
      this.state[t] = {
        collection: e,
        size: e.length,
        slice: n,
        start: i,
        end: r
      }
    }, t.prototype.stateIsIdentical = function (t, e, n, i) {
      var r = this.state[t];
      return !!r && !(r.size !== e.length || r.start !== n || r.end !== i) && r.slice.every((function (t, i) {
        return t === e[n + i]
      }))
    }, (t = function (t, e, n, i) {
      var r, s = arguments.length,
        o = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, n, i);
      else
        for (var a = t.length - 1; a >= 0; a--)(r = t[a]) && (o = (s < 3 ? r(o) : s > 3 ? r(e, n, o) : r(e, n)) || o);
      return s > 3 && o && Object.defineProperty(e, n, o), o
    }([s_("design:paramtypes", [r_])], t)).\u0275fac = function (e) {
      return new(e || t)(js(r_))
    }, t.\u0275pipe = Se({
      name: "paginate",
      type: t,
      pure: !1
    }), t
  }(), l_ = function (t, e, n, i) {
    var r, s = arguments.length,
      o = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, n, i);
    else
      for (var a = t.length - 1; a >= 0; a--)(r = t[a]) && (o = (s < 3 ? r(o) : s > 3 ? r(e, n, o) : r(e, n)) || o);
    return s > 3 && o && Object.defineProperty(e, n, o), o
  }, c_ = function (t, e) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
  };

  function u_(t) {
    return !!t && "false" !== t
  }
  var h_ = function () {
    function t() {
      this.maxSize = 7, this.previousLabel = "Previous", this.nextLabel = "Next", this.screenReaderPaginationLabel = "Pagination", this.screenReaderPageLabel = "page", this.screenReaderCurrentLabel = "You're on page", this.pageChange = new za, this.pageBoundsCorrection = new za, this._directionLinks = !0, this._autoHide = !1, this._responsive = !1
    }
    return Object.defineProperty(t.prototype, "directionLinks", {
      get: function () {
        return this._directionLinks
      },
      set: function (t) {
        this._directionLinks = u_(t)
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(t.prototype, "autoHide", {
      get: function () {
        return this._autoHide
      },
      set: function (t) {
        this._autoHide = u_(t)
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(t.prototype, "responsive", {
      get: function () {
        return this._responsive
      },
      set: function (t) {
        this._responsive = u_(t)
      },
      enumerable: !0,
      configurable: !0
    }), l_([Xa(), c_("design:type", String)], t.prototype, "id", void 0), l_([Xa(), c_("design:type", Number)], t.prototype, "maxSize", void 0), l_([Xa(), c_("design:type", Boolean), c_("design:paramtypes", [Boolean])], t.prototype, "directionLinks", null), l_([Xa(), c_("design:type", Boolean), c_("design:paramtypes", [Boolean])], t.prototype, "autoHide", null), l_([Xa(), c_("design:type", Boolean), c_("design:paramtypes", [Boolean])], t.prototype, "responsive", null), l_([Xa(), c_("design:type", String)], t.prototype, "previousLabel", void 0), l_([Xa(), c_("design:type", String)], t.prototype, "nextLabel", void 0), l_([Xa(), c_("design:type", String)], t.prototype, "screenReaderPaginationLabel", void 0), l_([Xa(), c_("design:type", String)], t.prototype, "screenReaderPageLabel", void 0), l_([Xa(), c_("design:type", String)], t.prototype, "screenReaderCurrentLabel", void 0), l_([tl(), c_("design:type", za)], t.prototype, "pageChange", void 0), l_([tl(), c_("design:type", za)], t.prototype, "pageBoundsCorrection", void 0), t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["pagination-controls"]
      ],
      inputs: {
        maxSize: "maxSize",
        previousLabel: "previousLabel",
        nextLabel: "nextLabel",
        screenReaderPaginationLabel: "screenReaderPaginationLabel",
        screenReaderPageLabel: "screenReaderPageLabel",
        screenReaderCurrentLabel: "screenReaderCurrentLabel",
        directionLinks: "directionLinks",
        autoHide: "autoHide",
        responsive: "responsive",
        id: "id"
      },
      outputs: {
        pageChange: "pageChange",
        pageBoundsCorrection: "pageBoundsCorrection"
      },
      decls: 3,
      vars: 3,
      consts: [
        [3, "id", "maxSize", "pageChange", "pageBoundsCorrection"],
        ["p", "paginationApi"],
        ["class", "ngx-pagination", "role", "navigation", 3, "responsive", 4, "ngIf"],
        ["role", "navigation", 1, "ngx-pagination"],
        ["class", "pagination-previous", 3, "disabled", 4, "ngIf"],
        [1, "small-screen"],
        [3, "current", "ellipsis", 4, "ngFor", "ngForOf"],
        ["class", "pagination-next", 3, "disabled", 4, "ngIf"],
        [1, "pagination-previous"],
        ["tabindex", "0", 3, "keyup.enter", "click", 4, "ngIf"],
        [4, "ngIf"],
        ["tabindex", "0", 3, "keyup.enter", "click"],
        [1, "show-for-sr"],
        [1, "pagination-next"]
      ],
      template: function (t, e) {
        if (1 & t && ($s(0, "pagination-template", 0, 1), Ys("pageChange", (function (t) {
            return e.pageChange.emit(t)
          }))("pageBoundsCorrection", (function (t) {
            return e.pageBoundsCorrection.emit(t)
          })), Ds(2, i_, 6, 8, "ul", 2), Zs()), 2 & t) {
          var n = zs(1);
          Hs("id", e.id)("maxSize", e.maxSize), Oi(2), Hs("ngIf", !(e.autoHide && n.pages.length <= 1))
        }
      },
      directives: function () {
        return [f_, nu, tu]
      },
      pipes: function () {
        return [lu]
      },
      styles: ["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xab';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xbb';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "],
      encapsulation: 2,
      changeDetection: 0
    }), t
  }(), d_ = function (t, e, n, i) {
    var r, s = arguments.length,
      o = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, n, i);
    else
      for (var a = t.length - 1; a >= 0; a--)(r = t[a]) && (o = (s < 3 ? r(o) : s > 3 ? r(e, n, o) : r(e, n)) || o);
    return s > 3 && o && Object.defineProperty(e, n, o), o
  }, p_ = function (t, e) {
    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
  }, f_ = function () {
    function t(t, e) {
      var n = this;
      this.service = t, this.changeDetectorRef = e, this.maxSize = 7, this.pageChange = new za, this.pageBoundsCorrection = new za, this.pages = [], this.changeSub = this.service.change.subscribe((function (t) {
        n.id === t && (n.updatePageLinks(), n.changeDetectorRef.markForCheck(), n.changeDetectorRef.detectChanges())
      }))
    }
    return t.prototype.ngOnInit = function () {
      void 0 === this.id && (this.id = this.service.defaultId()), this.updatePageLinks()
    }, t.prototype.ngOnChanges = function (t) {
      this.updatePageLinks()
    }, t.prototype.ngOnDestroy = function () {
      this.changeSub.unsubscribe()
    }, t.prototype.previous = function () {
      this.checkValidId(), this.setCurrent(this.getCurrent() - 1)
    }, t.prototype.next = function () {
      this.checkValidId(), this.setCurrent(this.getCurrent() + 1)
    }, t.prototype.isFirstPage = function () {
      return 1 === this.getCurrent()
    }, t.prototype.isLastPage = function () {
      return this.getLastPage() === this.getCurrent()
    }, t.prototype.setCurrent = function (t) {
      this.pageChange.emit(t)
    }, t.prototype.getCurrent = function () {
      return this.service.getCurrentPage(this.id)
    }, t.prototype.getLastPage = function () {
      var t = this.service.getInstance(this.id);
      return t.totalItems < 1 ? 1 : Math.ceil(t.totalItems / t.itemsPerPage)
    }, t.prototype.getTotalItems = function () {
      return this.service.getInstance(this.id).totalItems
    }, t.prototype.checkValidId = function () {
      null == this.service.getInstance(this.id).id && console.warn('PaginationControlsDirective: the specified id "' + this.id + '" does not match any registered PaginationInstance')
    }, t.prototype.updatePageLinks = function () {
      var t = this,
        e = this.service.getInstance(this.id),
        n = this.outOfBoundCorrection(e);
      n !== e.currentPage ? setTimeout((function () {
        t.pageBoundsCorrection.emit(n), t.pages = t.createPageArray(e.currentPage, e.itemsPerPage, e.totalItems, t.maxSize)
      })) : this.pages = this.createPageArray(e.currentPage, e.itemsPerPage, e.totalItems, this.maxSize)
    }, t.prototype.outOfBoundCorrection = function (t) {
      var e = Math.ceil(t.totalItems / t.itemsPerPage);
      return e < t.currentPage && 0 < e ? e : t.currentPage < 1 ? 1 : t.currentPage
    }, t.prototype.createPageArray = function (t, e, n, i) {
      i = +i;
      for (var r = [], s = Math.ceil(n / e), o = Math.ceil(i / 2), a = t <= o, l = s - o < t, c = !a && !l, u = i < s, h = 1; h <= s && h <= i;) {
        var d = this.calculatePageNumber(h, t, i, s);
        r.push({
          label: u && (2 === h && (c || l) || h === i - 1 && (c || a)) ? "..." : d,
          value: d
        }), h++
      }
      return r
    }, t.prototype.calculatePageNumber = function (t, e, n, i) {
      var r = Math.ceil(n / 2);
      return t === n ? i : 1 === t ? t : n < i ? i - r < e ? i - n + t : r < e ? e - r + t : t : t
    }, d_([Xa(), p_("design:type", String)], t.prototype, "id", void 0), d_([Xa(), p_("design:type", Number)], t.prototype, "maxSize", void 0), d_([tl(), p_("design:type", za)], t.prototype, "pageChange", void 0), d_([tl(), p_("design:type", za)], t.prototype, "pageBoundsCorrection", void 0), (t = d_([p_("design:paramtypes", [r_, rs])], t)).\u0275fac = function (e) {
      return new(e || t)(js(r_), js(rs))
    }, t.\u0275dir = xe({
      type: t,
      selectors: [
        ["pagination-template"],
        ["", "pagination-template", ""]
      ],
      inputs: {
        maxSize: "maxSize",
        id: "id"
      },
      outputs: {
        pageChange: "pageChange",
        pageBoundsCorrection: "pageBoundsCorrection"
      },
      exportAs: ["paginationApi"],
      features: [xo]
    }), t
  }(), m_ = function () {
    function t() {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      providers: [r_],
      imports: [
        [cu]
      ]
    }), t
  }();

  function g_(t, e) {
    if (1 & t) {
      const t = Gs();
      $s(0, "tr"), $s(1, "td"), co(2), Zs(), $s(3, "td"), co(4), Zs(), $s(5, "td"), $s(6, "a", 10), co(7, "Voir detail"), Zs(), Zs(), $s(8, "td"), $s(9, "a", 11), Ys("click", (function () {
        Qe(t);
        const n = e.$implicit;
        return Xs().delAssociation(n.idassociation)
      })), co(10, "Supprimer"), Zs(), Zs(), Zs()
    }
    if (2 & t) {
      const t = e.$implicit;
      Oi(2), uo(t.association), Oi(2), uo(t.townHall), Oi(2), to("routerLink", "/administrator/associations/view/", t.idassociation, "")
    }
  }
  const v_ = function (t) {
    return {
      itemsPerPage: 10,
      currentPage: t
    }
  };
  let __ = (() => {
    class t {
      constructor(t) {
        this.associationsService = t, this.p = 1
      }
      ngOnInit() {
        this.getAssociations()
      }
      getAssociations() {
        this.associationsService.gets().subscribe(t => {
          this.associations = t
        }, t => {
          console.log(t)
        })
      }
      delAssociation(t) {
        this.associationsService.delAssociation(t).subscribe(t => this.getAssociations())
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Sv))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-associations-list"]
      ],
      decls: 17,
      vars: 6,
      consts: [
        ["aria-label", "breadcrumb"],
        [1, "breadcrumb"],
        [1, "breadcrumb-item"],
        ["routerLink", "/administrator/dashboard"],
        ["aria-current", "page", 1, "breadcrumb-item", "active"],
        ["routerLink", "/administrator/associations/add", 1, "bouton", "float-right"],
        ["previousLabel", "Pr\xe9c\xe9dent", "nextLabel", "Suivant", 3, "pageChange"],
        [1, "table-responsive"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [1, "bouton", 3, "routerLink"],
        [1, "bouton-del", 3, "click"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "nav", 0), $s(1, "ol", 1), $s(2, "li", 2), $s(3, "a", 3), co(4, "Tableau de bord"), Zs(), Zs(), $s(5, "li", 4), co(6, "Associations"), Zs(), Zs(), Zs(), $s(7, "h3"), $s(8, "a", 5), co(9, "Ajouter"), Zs(), co(10, " Liste des associations\n"), Zs(), $s(11, "pagination-controls", 6), Ys("pageChange", (function (t) {
          return e.p = t
        })), Zs(), $s(12, "div", 7), $s(13, "table", 8), $s(14, "tbody"), Ds(15, g_, 11, 3, "tr", 9), Oa(16, "paginate"), Zs(), Zs(), Zs()), 2 & t && (Oi(15), Hs("ngForOf", Ra(16, 1, e.associations, Ta(4, v_, e.p))))
      },
      directives: [If, h_, tu],
      pipes: [a_],
      styles: [""]
    }), t
  })();

  function y_(t, e) {
    if (1 & t && ($s(0, "div", 20), co(1), Oa(2, "json"), Zs()), 2 & t) {
      const t = Xs();
      Oi(1), uo(Na(2, 1, t.errorMessage))
    }
  }

  function b_(t, e) {
    if (1 & t && ($s(0, "option", 21), co(1), Zs()), 2 & t) {
      const t = e.$implicit;
      Hs("value", t.idtownHall), Oi(1), uo(t.townHall)
    }
  }

  function w_(t, e) {
    1 & t && ($s(0, "small", 23), co(1, "Municipalit\xe9 obligatoire"), Zs())
  }

  function x_(t, e) {
    if (1 & t && ($s(0, "div"), Ds(1, w_, 2, 0, "small", 22), Zs()), 2 & t) {
      const t = Xs();
      Oi(1), Hs("ngIf", null == t.associationForm.get("townHallId").errors ? null : t.associationForm.get("townHallId").errors.required)
    }
  }

  function S_(t, e) {
    1 & t && ($s(0, "small", 23), co(1, "AVEC obligatoire"), Zs())
  }

  function C_(t, e) {
    if (1 & t && ($s(0, "div"), Ds(1, S_, 2, 0, "small", 22), Zs()), 2 & t) {
      const t = Xs();
      Oi(1), Hs("ngIf", null == t.associationForm.get("association").errors ? null : t.associationForm.get("association").errors.required)
    }
  }

  function k_(t, e) {
    1 & t && ($s(0, "small", 23), co(1, "E-mail obligatoire"), Zs())
  }

  function P_(t, e) {
    1 & t && ($s(0, "small", 23), co(1, "E-mail invalide"), Zs())
  }

  function E_(t, e) {
    if (1 & t && ($s(0, "div"), Ds(1, k_, 2, 0, "small", 22), Ds(2, P_, 2, 0, "small", 22), Zs()), 2 & t) {
      const t = Xs();
      Oi(1), Hs("ngIf", null == t.associationForm.get("email").errors ? null : t.associationForm.get("email").errors.required), Oi(1), Hs("ngIf", null == t.associationForm.get("email").errors ? null : t.associationForm.get("email").errors.email)
    }
  }
  let T_ = (() => {
    class t {
      constructor(t, e, n, i) {
        this.associationsService = t, this.townhallsService = e, this.fb = n, this.router = i
      }
      ngOnInit() {
        this.createForm(), this.getTownHalls()
      }
      getTownHalls() {
        this.townhallsService.getTownhalls().subscribe(t => this.towns = t)
      }
      createForm() {
        this.associationForm = this.fb.group({
          townHallId: ["", Gm.required],
          association: ["", Gm.required],
          receipt: [""],
          email: ["", [Gm.required, Gm.email]]
        })
      }
      onSubmit() {
        this.associationsService.setAssociation(this.associationForm.value).subscribe(t => {
          this.router.navigate(["/administrator/households/add/" + t])
        }, t => {
          this.errorMessage = t
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Sv), js(xv), js(Kg), js(Lf))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-associations-add"]
      ],
      decls: 31,
      vars: 13,
      consts: [
        [1, "row", "align-items-center"],
        [1, "row", "justify-content-center"],
        [1, "col-lg-8"],
        ["class", "alert alert-danger", 4, "ngIf"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "townhallId"],
        ["name", "townhallId", "id", "townHallId", "formControlName", "townHallId", "required", "", 1, "form-control"],
        [3, "value", 4, "ngFor", "ngForOf"],
        [4, "ngIf"],
        [1, "form-row"],
        [1, "form-group", "col-lg-8"],
        ["for", "association"],
        ["type", "text", "name", "association", "formControlName", "association", "id", "association", 1, "form-control"],
        [1, "form-group", "col-lg-4"],
        ["for", "receipt"],
        ["type", "text", "name", "receipt", "formControlName", "receipt", "id", "receipt", 1, "form-control"],
        ["for", "email"],
        ["type", "email", "name", "email", "formControlName", "email", "id", "email", 1, "form-control"],
        ["type", "submit", 1, "bouton", "btn-block", 3, "disabled"],
        [1, "alert", "alert-danger"],
        [3, "value"],
        ["class", "text-danger", 4, "ngIf"],
        [1, "text-danger"]
      ],
      template: function (t, e) {
        1 & t && (qs(0, "div", 0), $s(1, "div", 1), $s(2, "div", 2), $s(3, "h3"), co(4, "Ajouter une association"), Zs(), Ds(5, y_, 3, 3, "div", 3), $s(6, "form", 4), Ys("ngSubmit", (function () {
          return e.onSubmit()
        })), $s(7, "div", 5), $s(8, "label", 6), co(9, "Municipalit\xe9"), Zs(), $s(10, "select", 7), Ds(11, b_, 2, 2, "option", 8), Zs(), Ds(12, x_, 2, 1, "div", 9), Zs(), $s(13, "div", 10), $s(14, "div", 11), $s(15, "label", 12), co(16, "Nom de l'association :"), Zs(), qs(17, "input", 13), Ds(18, C_, 2, 1, "div", 9), Zs(), $s(19, "div", 14), $s(20, "label", 15), co(21, "Num\xe9ro de r\xe9c\xe9piss\xe9 :"), Zs(), qs(22, "input", 16), Zs(), Zs(), $s(23, "div", 5), $s(24, "label", 17), co(25, "Adresse e-mail de connexion:"), Zs(), qs(26, "input", 18), Ds(27, E_, 3, 2, "div", 9), Zs(), $s(28, "div", 5), $s(29, "button", 19), co(30, " ENR\xc9GISTRER "), Zs(), Zs(), Zs(), Zs(), Zs()), 2 & t && (Oi(5), Hs("ngIf", e.errorMessage), Oi(1), Hs("formGroup", e.associationForm), Oi(5), Hs("ngForOf", e.towns), Oi(1), Hs("ngIf", e.associationForm.get("townHallId").invalid && e.associationForm.get("townHallId").touched), Oi(5), ro("is-invalid", e.associationForm.get("association").invalid && e.associationForm.get("association").touched), Oi(1), Hs("ngIf", e.associationForm.get("association").invalid && e.associationForm.get("association").touched), Oi(4), ro("is-invalid", e.associationForm.get("receipt").invalid && e.associationForm.get("receipt").touched), Oi(4), ro("is-invalid", e.associationForm.get("email").invalid && e.associationForm.get("email").touched), Oi(1), Hs("ngIf", e.associationForm.get("email").invalid && e.associationForm.get("email").touched), Oi(2), Hs("disabled", !e.associationForm.valid))
      },
      directives: [nu, Rg, Hm, zg, hg, Um, Zg, Gg, tu, Nm, dg, gg],
      pipes: [au],
      styles: [""]
    }), t
  })();

  function L_(t, e) {
    if (1 & t && ($s(0, "tr"), $s(1, "td"), co(2), Zs(), $s(3, "td"), co(4), Zs(), $s(5, "td"), co(6), Zs(), $s(7, "td"), $s(8, "a", 20), co(9, "Voir detail"), Zs(), Zs(), Zs()), 2 & t) {
      const t = e.$implicit;
      Oi(2), uo(t.household), Oi(2), uo(t.role), Oi(2), uo(t.cellPhone), Oi(2), to("routerLink", "/administrator/households/view/", t.idhousehold, "")
    }
  }

  function A_(t, e) {
    if (1 & t && ($s(0, "section"), $s(1, "div", 7), $s(2, "div", 14), $s(3, "h4"), co(4, " Liste de M\xe9nages "), Zs(), Zs(), $s(5, "div", 15), $s(6, "div", 16), qs(7, "input", 17), Zs(), Zs(), Zs(), $s(8, "div", 18), $s(9, "table", 19), $s(10, "tbody"), Ds(11, L_, 10, 4, "tr", 0), Zs(), Zs(), Zs(), Zs()), 2 & t) {
      const t = Xs(2);
      Oi(11), Hs("ngForOf", t.households)
    }
  }

  function I_(t, e) {
    if (1 & t && ($s(0, "div"), $s(1, "nav", 1), $s(2, "ol", 2), $s(3, "li", 3), $s(4, "a", 4), co(5, "Tableau de bord"), Zs(), Zs(), $s(6, "li", 3), $s(7, "a", 5), co(8, "Associations"), Zs(), Zs(), $s(9, "li", 6), co(10), Zs(), Zs(), Zs(), $s(11, "section", 7), $s(12, "div", 8), $s(13, "h3"), co(14), qs(15, "br"), $s(16, "small"), co(17), Zs(), Zs(), Zs(), $s(18, "div", 8), $s(19, "div", 7), $s(20, "div", 9), $s(21, "strong", 10), co(22), Zs(), Zs(), $s(23, "div", 9), $s(24, "strong"), co(25), Zs(), Zs(), Zs(), Zs(), $s(26, "div", 11), $s(27, "a", 12), co(28, "Ajouter un m\xe9nage"), Zs(), Zs(), Zs(), Ds(29, A_, 12, 1, "section", 13), Zs()), 2 & t) {
      const t = e.$implicit,
        n = Xs();
      Oi(10), ho("Association ", t.association, ""), Oi(4), ho("", t.association, " "), Oi(3), ho("Municipalit\xe9 de ", t.townHall, ""), Oi(5), ho("", n.households ? n.households.length : 0, " M\xe9nages"), Oi(3), ho("", n.familySize, " Membres "), Oi(2), to("routerLink", "/administrator/households/add/", t.idassociation, ""), Oi(2), Hs("ngIf", n.households.length > 0)
    }
  }
  let M_ = (() => {
    class t {
      constructor(t, e, n) {
        this.activatedRoute = t, this.associationsService = e, this.householdsService = n
      }
      ngOnInit() {
        this.idAssociation = this.activatedRoute.snapshot.params.id, this.getAssociation(this.idAssociation), this.getHouseholds(this.idAssociation), this.getFamilySize(this.idAssociation)
      }
      getAssociation(t) {
        this.associationsService.getAssociation(t).subscribe(t => this.association = t)
      }
      getHouseholds(t) {
        this.householdsService.associationById(t).subscribe(t => this.households = t)
      }
      getFamilySize(t) {
        this.associationsService.familySizeById(t).subscribe(t => this.familySize = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(bp), js(Sv), js(Cv))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-associations-view"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        [4, "ngFor", "ngForOf"],
        ["aria-label", "breadcrumb"],
        [1, "breadcrumb"],
        [1, "breadcrumb-item"],
        ["routerLink", "/administrator/dashboard"],
        ["routerLink", "/administrator/associations"],
        ["aria-current", "page", 1, "breadcrumb-item", "active"],
        [1, "row"],
        [1, "col-lg-5"],
        [1, "col-lg-6"],
        [1, "text-center"],
        [1, "col-lg-2"],
        [1, "bouton", "btn-block", 3, "routerLink"],
        [4, "ngIf"],
        [1, "col-lg-9"],
        [1, "col-lg-3"],
        [1, "form-group"],
        ["type", "search", "name", "", "id", "", "placeholder", "RECHERCHE", 1, "form-control"],
        [1, "table-responsive"],
        [1, "table"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && Ds(0, I_, 30, 7, "div", 0), 2 & t && Hs("ngForOf", e.association)
      },
      directives: [tu, If, nu],
      styles: [""]
    }), t
  })(), O_ = (() => {
    class t {
      constructor(t, e) {
        this.authService = t, this.router = e
      }
      canActivate(t, e) {
        return !!this.authService.loggedIn() || (this.router.navigate(["/login"]), !1)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Xt(Qg), Xt(Lf))
    }, t.\u0275prov = mt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), N_ = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-banks-main"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && ($s(0, "h1"), co(1, "Banques"), Zs(), qs(2, "router-outlet"))
      },
      directives: [Ff],
      styles: [""]
    }), t
  })(), R_ = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/banks/", this.options = {
          params: new Ju({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      gets() {
        return this.http.get(this.baseUrl, this.options)
      }
      get(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
      set(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      put(t) {
        return this.http.put(this.baseUrl, t, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Xt(lh), Xt(Qg))
    }, t.\u0275prov = mt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })();

  function F_(t, e) {
    if (1 & t && ($s(0, "tr"), $s(1, "td"), co(2), Zs(), $s(3, "td"), $s(4, "a", 3), co(5, "Voir detail"), Zs(), Zs(), Zs()), 2 & t) {
      const t = e.$implicit;
      Oi(2), uo(t.bank)
    }
  }
  let D_ = (() => {
    class t {
      constructor(t) {
        this.banksService = t
      }
      ngOnInit() {
        this.getBanks()
      }
      getBanks() {
        this.banksService.gets().subscribe(t => this.banks = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(R_))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-banks-list"]
      ],
      decls: 7,
      vars: 1,
      consts: [
        ["routerLink", "/administrator/banks/add", 1, "bouton", "float-right"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        ["href", ""]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "h3"), co(1, " Liste des banques "), $s(2, "a", 0), co(3, "Ajouter"), Zs(), Zs(), $s(4, "table", 1), $s(5, "tbody"), Ds(6, F_, 6, 1, "tr", 2), Zs(), Zs()), 2 & t && (Oi(6), Hs("ngForOf", e.banks))
      },
      directives: [If, tu],
      styles: [""]
    }), t
  })(), z_ = (() => {
    class t {
      constructor(t, e, n) {
        this.banksService = t, this.fb = e, this.router = n
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.bankForm = this.fb.group({
          bank: ["", Gm.required],
          banker: ["", Gm.required],
          email: ["", [Gm.required, Gm.email]],
          phone: ["", Gm.required]
        })
      }
      onSubmit() {
        this.banksService.set(this.bankForm.value).subscribe(t => this.router.navigate(["/administrator/banks"]))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(R_), js(Kg), js(Lf))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-banks-add"]
      ],
      decls: 23,
      vars: 2,
      consts: [
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "bank"],
        ["type", "text", "formControlName", "bank", "id", "bank", 1, "form-control"],
        ["for", "banker"],
        ["type", "text", "formControlName", "banker", "id", "banker", 1, "form-control"],
        ["for", "phone"],
        ["type", "tel", "formControlName", "phone", "id", "phone", 1, "form-control"],
        ["for", "email"],
        ["type", "email", "formControlName", "email", "id", "email", 1, "form-control"],
        ["type", "submit", 1, "bouton", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "h3"), co(1, "Ajouter une banque"), Zs(), $s(2, "div", 0), $s(3, "form", 1), Ys("ngSubmit", (function () {
          return e.onSubmit()
        })), $s(4, "div", 2), $s(5, "label", 3), co(6, "Banque"), Zs(), qs(7, "input", 4), Zs(), $s(8, "div", 2), $s(9, "label", 5), co(10, "Agent de banque"), Zs(), qs(11, "input", 6), Zs(), $s(12, "div", 2), $s(13, "label", 7), co(14, "T\xe9l\xe9phone"), Zs(), qs(15, "input", 8), Zs(), $s(16, "div", 2), $s(17, "label", 9), co(18, "E-mail"), Zs(), qs(19, "input", 10), Zs(), $s(20, "div", 2), $s(21, "button", 11), co(22, " Enr\xe9gistrer "), Zs(), Zs(), Zs(), Zs()), 2 & t && (Oi(3), Hs("formGroup", e.bankForm), Oi(18), Hs("disabled", !e.bankForm.valid))
      },
      directives: [Rg, Hm, zg, Nm, Um, Zg],
      styles: [""]
    }), t
  })(), j_ = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-complaints-main"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && ($s(0, "h1"), co(1, "Plaintes et Appr\xe9ciation"), Zs(), qs(2, "router-outlet"))
      },
      directives: [Ff],
      styles: [""]
    }), t
  })();

  function V_(t, e) {
    if (1 & t) {
      const t = Gs();
      $s(0, "tr", 7), Ys("click", (function () {
        Qe(t);
        const n = e.$implicit;
        return Xs(2).onSelected(n)
      })), $s(1, "td"), co(2), Zs(), $s(3, "td"), co(4), Zs(), $s(5, "td"), co(6), Zs(), Zs()
    }
    if (2 & t) {
      const t = e.$implicit,
        n = Xs(2);
      Oi(2), ho("", n.textLimit(t.complaint), "..."), Oi(2), uo(t.household), Oi(2), uo(t.complaintDate)
    }
  }

  function U_(t, e) {
    if (1 & t && ($s(0, "div", 1), $s(1, "div", 2), $s(2, "h3"), co(3, "Liste de plaintes"), Zs(), $s(4, "div", 3), co(5, " Clique sur la ligne de la plainte pour voir les details "), Zs(), qs(6, "br"), $s(7, "table", 4), $s(8, "tbody"), Ds(9, V_, 7, 3, "tr", 5), Zs(), Zs(), Zs(), $s(10, "div", 6), qs(11, "router-outlet"), Zs(), Zs()), 2 & t) {
      const t = Xs();
      Oi(9), Hs("ngForOf", t.complaints)
    }
  }
  let H_ = (() => {
    class t {
      constructor(t, e, n) {
        this.complaintsService = t, this.activatedRoute = e, this.router = n
      }
      ngOnInit() {
        this.getComplaints()
      }
      getComplaints() {
        this.complaintsService.gets().subscribe(t => this.complaints = t)
      }
      onSelected(t) {
        this.router.navigate([t.idcomplaint], {
          relativeTo: this.activatedRoute
        })
      }
      textLimit(t) {
        return t.substr(0, 20)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Ev), js(bp), js(Lf))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-complaints-list"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        ["class", "row", 4, "ngIf"],
        [1, "row"],
        [1, "col-lg-8"],
        [1, "alert", "alert-warning"],
        [1, "table"],
        [3, "click", 4, "ngFor", "ngForOf"],
        [1, "col-lg-4"],
        [3, "click"]
      ],
      template: function (t, e) {
        1 & t && Ds(0, U_, 12, 1, "div", 0), 2 & t && Hs("ngIf", e.complaints)
      },
      directives: [nu, tu, Ff],
      styles: [""]
    }), t
  })();

  function B_(t, e) {
    if (1 & t && ($s(0, "div"), $s(1, "h3"), co(2, " Detail de Plainte"), Zs(), $s(3, "h4"), co(4), Zs(), $s(5, "p"), co(6), Zs(), qs(7, "hr"), $s(8, "small"), co(9), Zs(), Zs()), 2 & t) {
      const t = e.$implicit;
      Oi(4), ho(" Plainte de ", t.household, ""), Oi(2), uo(t.complaint), Oi(3), ho("Date: ", t.complaintDate, "")
    }
  }

  function $_(t, e) {
    if (1 & t && ($s(0, "div"), Ds(1, B_, 10, 3, "div", 1), Zs()), 2 & t) {
      const t = Xs();
      Oi(1), Hs("ngForOf", t.complaint)
    }
  }
  let Z_ = (() => {
    class t {
      constructor(t, e) {
        this.complaintsService = t, this.activatedRoute = e
      }
      ngOnInit() {
        this.activatedRoute.params.subscribe(t => this.getComplaint(t.id))
      }
      getComplaint(t) {
        this.complaintsService.get(t).subscribe(t => this.complaint = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Ev), js(bp))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-complaints-detail"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        [4, "ngIf"],
        [4, "ngFor", "ngForOf"]
      ],
      template: function (t, e) {
        1 & t && Ds(0, $_, 2, 1, "div", 0), 2 & t && Hs("ngIf", e.complaint)
      },
      directives: [nu, tu],
      styles: [""]
    }), t
  })(), q_ = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-voice-main"]
      ],
      decls: 1,
      vars: 0,
      template: function (t, e) {
        1 & t && qs(0, "router-outlet")
      },
      directives: [Ff],
      styles: [""]
    }), t
  })();

  function G_(t, e) {
    if (1 & t && ($s(0, "div", 10), co(1), Zs()), 2 & t) {
      const t = Xs();
      Oi(1), uo(t.successMessage)
    }
  }
  let W_ = (() => {
    class t {
      constructor(t, e) {
        this.messagesService = t, this.fb = e
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.smsForm = this.fb.group({
          message: ["", Gm.required],
          recipient: ["", [Gm.required, Gm.minLength(11)]]
        })
      }
      onSubmit() {
        this.messagesService.set(this.smsForm.value).subscribe(t => {}, t => {
          this.errorMessage = "Service momentanement indisponible"
        }, () => {
          this.errorMessage = "Service momentanement indisponible"
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(zv), js(Kg))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-voice-send"]
      ],
      decls: 20,
      vars: 2,
      consts: [
        ["routerLink", "/administrator/sensitization/sms", 1, "bouton", "float-right"],
        [1, "col-lg-8"],
        [1, "alert", "alert-danger"],
        ["class", "alert alert-success", 4, "ngIf"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "recipient"],
        ["type", "text", "name", "recipient", "formControlName", "recipient", "id", "recipient", 1, "form-control"],
        ["type", "file", "name", "message", "formControlName", "message", "id", "message", "accept", "audio/mp3,audio/wav;capture=microphone", 1, "form-control-file"],
        ["type", "submit", "disabled", "", 1, "bouton"],
        [1, "alert", "alert-success"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "h3"), $s(1, "a", 0), co(2, "Retour"), Zs(), co(3, " Envoi de SMS\n"), Zs(), $s(4, "div", 1), $s(5, "div", 2), co(6, "Service momentanement indisponible"), Zs(), Ds(7, G_, 2, 1, "div", 3), $s(8, "form", 4), Ys("ngSubmit", (function () {
          return e.onSubmit()
        })), $s(9, "div", 5), $s(10, "label", 6), co(11, "Destinataires"), Zs(), qs(12, "input", 7), Zs(), $s(13, "div", 5), $s(14, "label", 6), co(15, "T\xe9l\xe9charger message"), Zs(), qs(16, "input", 8), Zs(), $s(17, "div", 5), $s(18, "button", 9), co(19, "Envoyer"), Zs(), Zs(), Zs(), Zs()), 2 & t && (Oi(7), Hs("ngIf", e.successMessage), Oi(1), Hs("formGroup", e.smsForm))
      },
      directives: [If, nu, Rg, Hm, zg, Nm, Um, Zg],
      styles: [""]
    }), t
  })();

  function K_(t, e) {
    if (1 & t && ($s(0, "tr"), $s(1, "td"), co(2), Zs(), $s(3, "td"), $s(4, "a", 3), co(5, "voir detail"), Zs(), Zs(), Zs()), 2 & t) {
      const t = e.$implicit;
      Oi(2), uo(t.townHall), Oi(2), to("routerLink", "view/", t.idtownHall, "")
    }
  }
  let Y_ = (() => {
    class t {
      constructor(t) {
        this.townhallsService = t
      }
      ngOnInit() {
        this.getTownHalls()
      }
      getTownHalls() {
        this.townhallsService.getTownhalls().subscribe(t => this.towns = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(xv))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-townhalls-list"]
      ],
      decls: 7,
      vars: 1,
      consts: [
        ["routerLink", "add", 1, "bouton", "float-right"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "h3"), co(1, " Liste des municipalit\xe9s "), $s(2, "a", 0), co(3, "Ajouter"), Zs(), Zs(), $s(4, "table", 1), $s(5, "tbody"), Ds(6, K_, 6, 2, "tr", 2), Zs(), Zs()), 2 & t && (Oi(6), Hs("ngForOf", e.towns))
      },
      directives: [If, tu],
      styles: [""]
    }), t
  })(), J_ = (() => {
    class t {
      constructor(t, e) {
        this.townService = t, this.fb = e
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.townForm = this.fb.group({
          townHall: ["", Gm.required],
          officer: ["", Gm.required],
          email: ["", [Gm.required, Gm.email]],
          phone: ["", Gm.required]
        })
      }
      onSubmit() {
        this.townService.setTownhall(this.townForm.value).subscribe(t => console.log(t))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(xv), js(Kg))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-townhalls-add"]
      ],
      decls: 21,
      vars: 2,
      consts: [
        [1, "row", "justify-content-center"],
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "townHall"],
        ["type", "text", "formControlName", "townHall", "id", "townHall", 1, "form-control"],
        ["for", "officer"],
        ["type", "text", "formControlName", "officer", "id", "townHall", 1, "form-control"],
        ["for", "phone"],
        ["type", "tel", "formControlName", "phone", "id", "phone", 1, "form-control"],
        ["for", "email"],
        ["type", "email", "formControlName", "email", "id", "email", 1, "form-control"],
        ["type", "submit", 1, "bouton", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "div", 0), $s(1, "div", 1), $s(2, "form", 2), Ys("ngSubmit", (function () {
          return e.onSubmit()
        })), $s(3, "div", 3), $s(4, "label", 4), co(5, "Municipalit\xe9"), Zs(), qs(6, "input", 5), Zs(), $s(7, "div", 3), $s(8, "label", 6), co(9, "Agent de mairie"), Zs(), qs(10, "input", 7), Zs(), $s(11, "div", 3), $s(12, "label", 8), co(13, "T\xe9l\xe9phone"), Zs(), qs(14, "input", 9), Zs(), $s(15, "div", 3), $s(16, "label", 10), co(17, "E-mail"), Zs(), qs(18, "input", 11), Zs(), $s(19, "button", 12), co(20, "Enr\xe9gistrer"), Zs(), Zs(), Zs(), Zs()), 2 & t && (Oi(2), Hs("formGroup", e.townForm), Oi(17), Hs("disabled", !e.townForm.valid))
      },
      directives: [Rg, Hm, zg, Nm, Um, Zg],
      styles: [""]
    }), t
  })();
  var Q_ = n("4R65");
  let X_ = (() => {
    class t {
      constructor(t, e, n) {
        this.townHallsService = t, this.householdsService = e, this.activatedRoute = n, this.options = {
          layers: [Object(Q_.tileLayer)("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors"
          })],
          zoom: 7,
          center: Object(Q_.latLng)([7.6906058, -5.0298408])
        }, this.smallIcon = new Q_.Icon({
          iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png",
          iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
          shadowSize: [41, 41]
        })
      }
      ngAfterViewInit() {
        this.id = this.activatedRoute.snapshot.params.id, this.createMap()
      }
      createMap() {
        this.map = Q_.map("town-map", {
          center: [this.town.lat, this.town.lng],
          zoom: 12
        }), Q_.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          minZoom: 12,
          maxZoom: 17,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
        for (const t of this.households) Q_.marker([t.lat, t.lng], {
          icon: this.smallIcon
        }).addTo(this.map).bindPopup(t.household).openPopup()
      }
      addMarker(t) {
        Q_.marker([t.lat, t.lng], {
          icon: this.smallIcon
        }).addTo(this.map).bindPopup(t.household).openPopup()
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(xv), js(Cv), js(bp))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-townhalls-map"]
      ],
      inputs: {
        town: "town",
        households: "households"
      },
      decls: 3,
      vars: 0,
      consts: [
        [1, "map-wrapper"],
        [1, "map-border"],
        ["id", "town-map"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "div", 0), $s(1, "div", 1), qs(2, "div", 2), Zs(), Zs())
      },
      styles: [""]
    }), t
  })();

  function ty(t, e) {
    if (1 & t && ($s(0, "p", 6), co(1), Zs()), 2 & t) {
      const t = Xs(2);
      Oi(1), uo(t.suppliers ? t.suppliers.length : 0)
    }
  }

  function ey(t, e) {
    if (1 & t && ($s(0, "tr"), $s(1, "td"), co(2), Zs(), $s(3, "td"), co(4), Zs(), $s(5, "td"), co(6), Oa(7, "date"), Zs(), Zs()), 2 & t) {
      const t = e.$implicit,
        n = Xs(2);
      Oi(2), ho("", n.textLimit(t.complaint), "..."), Oi(2), uo(t.household), Oi(2), uo(Ra(7, 3, t.complaintDate, "medium"))
    }
  }

  function ny(t, e) {
    if (1 & t && ($s(0, "div"), $s(1, "h3"), co(2), Zs(), $s(3, "section"), qs(4, "app-townhalls-map", 1), Zs(), $s(5, "section", 2), $s(6, "div", 3), $s(7, "div", 4), $s(8, "p", 5), co(9, "A.V.E.Cs"), Zs(), $s(10, "p", 6), co(11), Zs(), Zs(), Zs(), $s(12, "div", 3), $s(13, "div", 4), $s(14, "p", 5), co(15, "M\xe9nages"), Zs(), $s(16, "p", 6), co(17), Zs(), Zs(), Zs(), $s(18, "div", 3), $s(19, "div", 4), $s(20, "p", 5), co(21, "Appels d'offre"), Zs(), $s(22, "p", 6), co(23), Zs(), Zs(), Zs(), $s(24, "div", 3), $s(25, "div", 4), $s(26, "p", 5), co(27, "Fournisseurs"), Zs(), Ds(28, ty, 2, 1, "p", 7), Zs(), Zs(), Zs(), $s(29, "section", 8), $s(30, "h2"), co(31, "Plaintes"), Zs(), $s(32, "table", 9), $s(33, "tbody"), Ds(34, ey, 8, 6, "tr", 0), Zs(), Zs(), Zs(), Zs()), 2 & t) {
      const t = e.$implicit,
        n = Xs();
      Oi(2), ho("Municipalit\xe9 de ", t.townHall, ""), Oi(2), Hs("town", t)("households", n.getHouseholds(t.idtownHall)), Oi(7), uo(n.associations ? n.associations.length : 0), Oi(6), uo(n.households ? n.households.length : 0), Oi(6), uo(n.needs ? n.needs.length : 0), Oi(5), Hs("ngIf", n.suppliers), Oi(6), Hs("ngForOf", n.complaints)
    }
  }
  let iy = (() => {
    class t {
      constructor(t, e, n, i, r, s, o) {
        this.townhallsService = t, this.activatedRoute = e, this.associationsService = n, this.householdsService = i, this.suppliersService = r, this.needsService = s, this.complaintsService = o
      }
      ngOnInit() {
        this.idTownHall = this.activatedRoute.snapshot.params.id, this.getTownHall(this.idTownHall), this.getAssociations(this.idTownHall), this.getHouseholds(this.idTownHall), this.getSuppliers(this.idTownHall), this.getNeeds(this.idTownHall), this.getComplaints(this.idTownHall)
      }
      getTownHall(t) {
        this.townhallsService.getTownhall(t).subscribe(t => this.townHall = t)
      }
      getComplaints(t) {
        this.complaintsService.townById(t).subscribe(t => this.complaints = t)
      }
      getAssociations(t) {
        this.associationsService.townById(t).subscribe(t => this.associations = t)
      }
      getHouseholds(t) {
        this.householdsService.townById(t).subscribe(t => this.households = t)
      }
      getSuppliers(t) {
        this.suppliersService.townById(t).subscribe(t => this.suppliers = t)
      }
      getNeeds(t) {
        this.needsService.townById(t).subscribe(t => this.needs = t)
      }
      textLimit(t) {
        return t.substr(0, 20)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(xv), js(bp), js(Sv), js(Cv), js(kv), js(Pv), js(Ev))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-townhalls-view"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        [4, "ngFor", "ngForOf"],
        [3, "town", "households"],
        [1, "row", "enumeration"],
        [1, "col-lg-3"],
        [1, "cadre"],
        [1, "title"],
        [1, "value"],
        ["class", "value", 4, "ngIf"],
        [1, "table-responsive"],
        [1, "table"]
      ],
      template: function (t, e) {
        1 & t && Ds(0, ny, 35, 8, "div", 0), 2 & t && Hs("ngForOf", e.townHall)
      },
      directives: [tu, X_, nu],
      pipes: [ou],
      styles: [""]
    }), t
  })(), ry = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-households-main"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && ($s(0, "h1"), co(1, "M\xe9nages"), Zs(), qs(2, "router-outlet"))
      },
      directives: [Ff],
      styles: [""]
    }), t
  })();

  function sy(t, e) {
    if (1 & t) {
      const t = Gs();
      $s(0, "tr"), $s(1, "td"), co(2), Zs(), $s(3, "td"), co(4), Zs(), $s(5, "td"), co(6), Zs(), $s(7, "td"), $s(8, "a", 9), co(9, "Voir detail"), Zs(), Zs(), $s(10, "td"), $s(11, "a", 10), Ys("click", (function () {
        Qe(t);
        const n = e.$implicit;
        return Xs().delHousehold(n.idhousehold)
      })), co(12, "Supprimer"), Zs(), Zs(), Zs()
    }
    if (2 & t) {
      const t = e.$implicit;
      Oi(2), uo(t.household), Oi(2), uo(t.association), Oi(2), uo(t.role), Oi(2), to("routerLink", "/administrator/households/view/", t.idhousehold, "")
    }
  }
  const oy = function (t) {
    return {
      itemsPerPage: 10,
      currentPage: t
    }
  };
  let ay = (() => {
    class t {
      constructor(t) {
        this.householdsService = t, this.p = 1
      }
      ngOnInit() {
        this.getHouseholds()
      }
      getHouseholds() {
        this.householdsService.getHouseHolds().subscribe(t => {
          this.households = t
        }, t => {})
      }
      delHousehold(t) {
        this.householdsService.delHouseHold(t).subscribe(t => this.getHouseholds())
      }
      getOwner(t) {
        return 1 === t ? "Propri\xe9taire" : "Locataire"
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Cv))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-households-list"]
      ],
      decls: 15,
      vars: 6,
      consts: [
        ["aria-label", "breadcrumb"],
        [1, "breadcrumb"],
        [1, "breadcrumb-item"],
        ["routerLink", "/administrator/dashboard"],
        ["aria-current", "page", 1, "breadcrumb-item", "active"],
        ["previousLabel", "Pr\xe9c\xe9dent", "nextLabel", "Suivant", 3, "pageChange"],
        [1, "table-responsive"],
        [1, "table", "table-striped"],
        [4, "ngFor", "ngForOf"],
        [1, "bouton", "btn-sm", 3, "routerLink"],
        [1, "bouton-del", "btn-sm", 3, "click"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "nav", 0), $s(1, "ol", 1), $s(2, "li", 2), $s(3, "a", 3), co(4, "Tableau de bord"), Zs(), Zs(), $s(5, "li", 4), co(6, "Tous les m\xe9nages"), Zs(), Zs(), Zs(), $s(7, "h3"), co(8, "M\xe9nages Enr\xe9gistr\xe9s"), Zs(), $s(9, "pagination-controls", 5), Ys("pageChange", (function (t) {
          return e.p = t
        })), Zs(), $s(10, "div", 6), $s(11, "table", 7), $s(12, "tbody"), Ds(13, sy, 13, 4, "tr", 8), Oa(14, "paginate"), Zs(), Zs(), Zs()), 2 & t && (Oi(13), Hs("ngForOf", Ra(14, 1, e.households, Ta(4, oy, e.p))))
      },
      directives: [If, h_, tu],
      pipes: [a_],
      styles: [""]
    }), t
  })();
  const ly = function (t, e) {
    return {
      "alert-success": t,
      "alert-danger": e
    }
  };

  function cy(t, e) {
    if (1 & t && ($s(0, "div", 32), co(1), Zs()), 2 & t) {
      const t = Xs(2);
      Hs("ngClass", La(3, ly, t.successMessage, t.errorMessage)), Oi(1), po(" ", t.errorMessage, " ", t.successMessage, " ")
    }
  }

  function uy(t, e) {
    if (1 & t && ($s(0, "option", 33), co(1), Zs()), 2 & t) {
      const t = e.$implicit;
      Hs("value", t), Oi(1), uo(t)
    }
  }

  function hy(t, e) {
    if (1 & t && ($s(0, "option", 33), co(1), Zs()), 2 & t) {
      const t = e.$implicit;
      Hs("value", t), Oi(1), uo(t)
    }
  }

  function dy(t, e) {
    if (1 & t) {
      const t = Gs();
      $s(0, "div"), $s(1, "div", 1), $s(2, "div", 2), $s(3, "h3", 3), $s(4, "small"), co(5, "Ajouter un nouveau m\xe9nage pour l'AVEC"), Zs(), qs(6, "br"), co(7), Zs(), Ds(8, cy, 2, 6, "div", 4), $s(9, "form", 5), Ys("ngSubmit", (function () {
        return Qe(t), Xs().onSubmit()
      })), $s(10, "div", 6), $s(11, "div", 7), $s(12, "label", 8), co(13, "Nom et Pr\xe9noms"), Zs(), qs(14, "input", 9), Zs(), $s(15, "div", 10), $s(16, "label", 8), co(17, "Date de naissance"), Zs(), qs(18, "input", 11), Zs(), Zs(), $s(19, "div", 6), $s(20, "div", 10), $s(21, "label", 8), co(22, "Taille de la famille"), Zs(), qs(23, "input", 12), Zs(), $s(24, "div", 7), $s(25, "label", 8), co(26, "Etes-vous propri\xe9taire ?"), Zs(), $s(27, "select", 13), $s(28, "option", 14), co(29, "Votre statut"), Zs(), Ds(30, uy, 2, 2, "option", 15), Zs(), Zs(), Zs(), $s(31, "h5"), co(32, "Vous \xeates :"), Zs(), $s(33, "div", 6), $s(34, "div", 16), $s(35, "div", 17), qs(36, "input", 18), $s(37, "label", 19), co(38, "Homme"), Zs(), Zs(), $s(39, "div", 17), qs(40, "input", 20), $s(41, "label", 21), co(42, "Femme"), Zs(), Zs(), Zs(), $s(43, "div", 16), $s(44, "div", 22), qs(45, "input", 23), $s(46, "label", 24), co(47, "Chef de famille ?"), Zs(), Zs(), Zs(), Zs(), $s(48, "div", 25), $s(49, "label", 8), co(50, "Poste dans l'association"), Zs(), $s(51, "select", 26), $s(52, "option", 14), co(53, "Choisir le poste"), Zs(), Ds(54, hy, 2, 2, "option", 15), Zs(), Zs(), $s(55, "div", 6), $s(56, "div", 10), $s(57, "label", 27), co(58, "T\xe9l\xe9phone Mobile"), Zs(), qs(59, "input", 28), Zs(), $s(60, "div", 7), $s(61, "label", 29), co(62, "E-mail (Facultative)"), Zs(), qs(63, "input", 30), Zs(), Zs(), $s(64, "div", 25), $s(65, "button", 31), co(66, "SUIVANT"), Zs(), Zs(), Zs(), Zs(), Zs(), Zs()
    }
    if (2 & t) {
      const t = e.$implicit,
        n = Xs();
      Oi(7), ho(" ", t.association, " "), Oi(1), Hs("ngIf", n.successMessage && !n.errorMessage || n.errorMessage && !n.successMessage), Oi(1), Hs("formGroup", n.houseForm), Oi(21), Hs("ngForOf", n.owners), Oi(6), Hs("value", 1), Oi(4), Hs("value", 0), Oi(5), Hs("value", 1), Oi(9), Hs("ngForOf", n.roles), Oi(11), Hs("disabled", !n.houseForm.valid)
    }
  }
  let py = (() => {
    class t {
      constructor(t, e, n, i, r) {
        this.householdsService = t, this.associationsService = e, this.fb = n, this.activatedRoute = i, this.router = r, this.roles = ["Pr\xe9sident", " Vice-pr\xe9sident", "S\xe9cr\xe9taire", "S\xe9cr\xe9taire-adjoint", "Tr\xe9sorier", "Tr\xe9sorier-adjoint", "Contr\xf4leur", "Membre"], this.owners = ["Locataire", "Propri\xe9taire", "Autre"]
      }
      ngOnInit() {
        this.idAssociation = this.activatedRoute.snapshot.params.id, this.getAssociation(this.idAssociation), this.createForm()
      }
      getAssociation(t) {
        this.associationsService.getAssociation(t).subscribe(t => this.association = t)
      }
      createForm() {
        this.houseForm = this.fb.group({
          associationId: [this.idAssociation, Gm.required],
          household: ["", Gm.required],
          birthDate: ["", Gm.required],
          sex: ["", Gm.required],
          familyChief: [""],
          familySize: ["", Gm.required],
          role: ["", Gm.required],
          owner: ["", Gm.required],
          cellPhone: ["", Gm.required],
          mail: [""]
        })
      }
      onSubmit() {
        this.householdsService.setHouseHold(this.houseForm.value).subscribe(t => this.router.navigate(["/association/households/address/" + t]), t => {
          t instanceof oh && (405 === t.status ? this.errorMessage = "Vous avez atteint la limite de nombre de m\xe9nage" : 404 === t.status && (this.errorMessage = "Veuillez remplir les champs obligatoire"))
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Cv), js(Sv), js(Kg), js(bp), js(Lf))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-households-add"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        [4, "ngFor", "ngForOf"],
        [1, "row", "justify-content-center"],
        [1, "col-lg-7"],
        [1, "text-center"],
        ["class", "alert", 3, "ngClass", 4, "ngIf"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-row"],
        [1, "form-group", "col-lg-7"],
        ["for", ""],
        ["type", "text", "formControlName", "household", "name", "household", 1, "form-control"],
        [1, "form-group", "col-lg-5"],
        ["type", "date", "formControlName", "birthDate", "name", "birthDay", 1, "form-control"],
        ["type", "number", "formControlName", "familySize", "name", "familySize", 1, "form-control"],
        ["name", "owner", "id", "owner", "formControlName", "owner", 1, "form-control"],
        ["value", "", "selected", ""],
        [3, "value", 4, "ngFor", "ngForOf"],
        [1, "form-group", "col-lg-6"],
        [1, "form-check", "form-check-inline"],
        ["type", "radio", "formControlName", "sex", "name", "sex", "id", "sex1", "checked", "", 1, "form-check-input", 3, "value"],
        ["for", "sex1", 1, "form-check-label"],
        ["type", "radio", "formControlName", "sex", "name", "sex", "id", "sex2", "checked", "", 1, "form-check-input", 3, "value"],
        ["for", "sex2", 1, "form-check-label"],
        [1, "form-check"],
        ["type", "checkbox", "id", "familyChief", "formControlName", "familyChief", 1, "form-check-input", 3, "value"],
        ["for", "familyChief", 1, "form-check-label"],
        [1, "form-group"],
        ["name", "role", "id", "role", "formControlName", "role", 1, "form-control"],
        ["for", "cellPhone"],
        ["type", "tel", "formControlName", "cellPhone", "name", "cellPhone", 1, "form-control"],
        ["for", "mail"],
        ["type", "email", "formControlName", "mail", "name", "mail", 1, "form-control"],
        ["type", "submit", 1, "bouton", "btn-block", 3, "disabled"],
        [1, "alert", 3, "ngClass"],
        [3, "value"]
      ],
      template: function (t, e) {
        1 & t && Ds(0, dy, 67, 9, "div", 0), 2 & t && Hs("ngForOf", e.association)
      },
      directives: [tu, nu, Rg, Hm, zg, Nm, Um, Zg, tg, hg, dg, gg, ig, Im, Qc],
      styles: [""]
    }), t
  })(), fy = (() => {
    class t {
      constructor() {
        this.smallIcon = new Q_.Icon({
          iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png",
          iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
          shadowSize: [41, 41]
        })
      }
      ngAfterViewInit() {
        this.createMap()
      }
      createMap() {
        this.map = Q_.map("map", {
          center: [this.lat, this.lng],
          zoom: 12
        }), Q_.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          minZoom: 12,
          maxZoom: 17,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map), Q_.marker([this.lat, this.lng], {
          icon: this.smallIcon
        }).addTo(this.map).bindPopup(this.household).openPopup()
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-households-map"]
      ],
      inputs: {
        lat: "lat",
        lng: "lng",
        household: "household"
      },
      decls: 3,
      vars: 0,
      consts: [
        [1, "map-wrapper"],
        [1, "map-border"],
        ["id", "map"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "div", 0), $s(1, "div", 1), qs(2, "div", 2), Zs(), Zs())
      },
      styles: ["#map[_ngcontent-%COMP%]{height:250px;width:100%;z-index:1}"]
    }), t
  })();

  function my(t, e) {
    if (1 & t && ($s(0, "div"), $s(1, "nav", 1), $s(2, "ol", 2), $s(3, "li", 3), $s(4, "a", 4), co(5, "Tableau de bord"), Zs(), Zs(), $s(6, "li", 3), $s(7, "a", 5), co(8, "M\xe9nages"), Zs(), Zs(), $s(9, "li", 6), co(10), Zs(), Zs(), Zs(), $s(11, "div", 7), $s(12, "div", 8), $s(13, "h3"), co(14), qs(15, "br"), $s(16, "small"), co(17), Zs(), Zs(), Zs(), $s(18, "div", 9), $s(19, "div", 7), $s(20, "div", 10), $s(21, "p"), $s(22, "strong"), co(23), Zs(), qs(24, "br"), co(25, " Chef de famille: "), $s(26, "strong"), co(27), Zs(), qs(28, "br"), co(29, " Sexe: "), $s(30, "strong"), co(31), Zs(), Zs(), Zs(), $s(32, "div", 10), $s(33, "p"), $s(34, "strong"), co(35), Zs(), qs(36, "br"), co(37, " Tel.: "), $s(38, "strong"), co(39), Zs(), qs(40, "br"), co(41, " E-mail: "), $s(42, "strong"), co(43), Zs(), Zs(), Zs(), Zs(), Zs(), Zs(), $s(44, "div", 11), $s(45, "ul"), $s(46, "li"), $s(47, "a", 12), co(48, "Mettre \xe0 jour"), Zs(), Zs(), $s(49, "li"), $s(50, "a", 12), co(51, "Coordonn\xe9es GPS"), Zs(), Zs(), $s(52, "li"), $s(53, "a", 12), co(54, "Ajouter besoin"), Zs(), Zs(), $s(55, "li"), $s(56, "a", 12), co(57, "Message aux fournisseurs"), Zs(), Zs(), Zs(), Zs(), qs(58, "br"), qs(59, "br"), $s(60, "div", 7), $s(61, "div", 13), $s(62, "section", 14), $s(63, "div", 10), $s(64, "div", 15), $s(65, "p", 16), co(66, "Besoins exprim\xe9s"), Zs(), $s(67, "p", 17), co(68), Zs(), $s(69, "p"), $s(70, "a", 12), co(71, "Voir la liste"), Zs(), Zs(), Zs(), Zs(), $s(72, "div", 10), $s(73, "div", 15), $s(74, "p", 16), co(75, "Plaintes"), Zs(), $s(76, "p", 17), co(77), Zs(), $s(78, "p", 18), $s(79, "a", 12), co(80, "Voir la liste"), Zs(), Zs(), Zs(), Zs(), Zs(), qs(81, "section"), Zs(), $s(82, "div", 19), qs(83, "app-households-map", 20), Zs(), Zs(), Zs()), 2 & t) {
      const t = e.$implicit,
        n = Xs();
      Oi(10), uo(t.household), Oi(4), po("", t.household, " (", n.getAge(t.birthDate), " ans) "), Oi(3), po("", t.role, ", Association ", t.association, ""), Oi(6), uo(n.getOwner(t.owner)), Oi(4), uo(n.getChief(t.familyChief)), Oi(4), uo(n.getSex(t.sex)), Oi(4), ho("", t.familySize, " Membres"), Oi(4), ho(" (225) ", t.cellPhone, ""), Oi(4), ho(" ", t.mail, " "), Oi(4), to("routerLink", "/association/households/update/", t.idhousehold, ""), Oi(3), to("routerLink", "/association/households/address/", t.idhousehold, ""), Oi(3), to("routerLink", "/association/needs/add/", t.idhousehold, ""), Oi(3), to("routerLink", "/association/complaints/add/", t.idhousehold, ""), Oi(12), uo(n.needs ? n.needs.length : 0), Oi(2), to("routerLink", "/association/needs/household/", t.idhousehold, ""), Oi(7), uo(n.complaints ? n.complaints.length : 0), Oi(2), to("routerLink", "/association/needs/household/", t.idhousehold, ""), Oi(4), Hs("lat", t.lat)("lng", t.lng)("household", t.household)
    }
  }
  let gy = (() => {
    class t {
      constructor(t, e, n, i) {
        this.householdsService = t, this.complaintsService = e, this.needsService = n, this.activatedRoute = i
      }
      ngOnInit() {
        this.idHousehold = this.activatedRoute.snapshot.params.id, this.getHousehold(this.idHousehold), this.getComplaints(this.idHousehold), this.getNeeds(this.idHousehold)
      }
      getHousehold(t) {
        this.householdsService.getHouseHold(t).subscribe(t => this.household = t)
      }
      getComplaints(t) {
        this.complaintsService.household(t).subscribe(t => this.complaints = t)
      }
      getNeeds(t) {
        this.needsService.household(t).subscribe(t => this.needs = t)
      }
      getOwner(t) {
        return ["Locataire", "Propri\xe9taire", "Autre"][t]
      }
      getAge(t) {
        const e = new Date(t),
          n = Math.abs(Date.now() - e.getTime());
        return Math.floor(n / 864e5 / 365)
      }
      getChief(t) {
        return 1 == t ? "OUI" : "NON"
      }
      getSex(t) {
        return 1 == t ? "Masculin" : "F\xe9minin"
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Cv), js(Ev), js(Pv), js(bp))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-households-view"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        [4, "ngFor", "ngForOf"],
        ["aria-label", "breadcrumb"],
        [1, "breadcrumb"],
        [1, "breadcrumb-item"],
        ["routerLink", "/association/dashbord"],
        ["routerLink", "/association/households/"],
        ["aria-current", "page", 1, "breadcrumb-item", "active"],
        [1, "row"],
        [1, "col-lg-5"],
        [1, "col-lg-7"],
        [1, "col-lg-6"],
        [1, "subMenu"],
        [3, "routerLink"],
        [1, "col-lg-8"],
        [1, "row", "enumeration"],
        [1, "cadre"],
        [1, "title"],
        [1, "value"],
        [1, "text-center"],
        [1, "col-lg-4"],
        [3, "lat", "lng", "household"]
      ],
      template: function (t, e) {
        1 & t && Ds(0, my, 84, 22, "div", 0), 2 & t && Hs("ngForOf", e.household)
      },
      directives: [tu, If, fy],
      styles: [".subMenu[_ngcontent-%COMP%]{background-color:#9e9d24;padding:10px 40px}.subMenu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0}.subMenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;padding:0 20px}.subMenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#f0f4c3}"]
    }), t
  })(), vy = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-needs-main"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && ($s(0, "h1"), co(1, "Appels d'offres"), Zs(), qs(2, "router-outlet"))
      },
      directives: [Ff],
      styles: [""]
    }), t
  })();

  function _y(t, e) {
    if (1 & t && ($s(0, "tr"), $s(1, "td"), co(2), Zs(), $s(3, "td"), co(4), Zs(), $s(5, "td"), co(6), Oa(7, "date"), Zs(), $s(8, "td"), $s(9, "a", 3), co(10, "voir detail"), Zs(), Zs(), Zs()), 2 & t) {
      const t = e.$implicit,
        n = Xs();
      Oi(2), uo(t.need), Oi(2), uo(n.getStatus(t.status)), Oi(2), uo(Ra(7, 4, t.needDate, "medium")), Oi(3), to("routerLink", "view/", t.idneed, "")
    }
  }
  let yy = (() => {
    class t {
      constructor(t) {
        this.needsService = t
      }
      ngOnInit() {
        this.getNeeds()
      }
      getNeeds() {
        this.needsService.gets().subscribe(t => {
          this.needs = t
        }, t => {
          console.log(t)
        })
      }
      getStatus(t) {
        return {
          0: "NON PUBLI\xc9",
          1: "PUBLI\xc9",
          2: "ANNUL\xc9E"
        } [t]
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Pv))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-needs-list"]
      ],
      decls: 6,
      vars: 2,
      consts: [
        [1, "table-responsive"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "h3"), co(1), Zs(), $s(2, "div", 0), $s(3, "table", 1), $s(4, "tbody"), Ds(5, _y, 11, 7, "tr", 2), Zs(), Zs(), Zs()), 2 & t && (Oi(1), ho(" Liste des besoins (", e.needs ? e.needs.length : 0, ") "), Oi(4), Hs("ngForOf", e.needs))
      },
      directives: [tu, If],
      pipes: [ou],
      styles: [""]
    }), t
  })();

  function by(t, e) {
    if (1 & t) {
      const t = Gs();
      $s(0, "div"), $s(1, "nav", 1), $s(2, "ol", 2), $s(3, "li", 3), $s(4, "a", 4), co(5, "Tableau de bord"), Zs(), Zs(), $s(6, "li", 3), $s(7, "a", 5), co(8, "M\xe9nages"), Zs(), Zs(), $s(9, "li", 3), $s(10, "a", 6), co(11), Zs(), Zs(), $s(12, "li", 7), co(13, "Ajouter Besoin"), Zs(), Zs(), Zs(), $s(14, "div", 8), $s(15, "div", 9), $s(16, "h3", 10), $s(17, "small"), co(18, " D\xe9claration de besoin"), Zs(), qs(19, "br"), co(20), Zs(), $s(21, "form", 11), Ys("ngSubmit", (function () {
        return Qe(t), Xs().onSubmit()
      })), $s(22, "div", 12), $s(23, "label", 13), co(24, "Titre de besoin"), Zs(), qs(25, "input", 14), Zs(), $s(26, "div", 12), $s(27, "label", 15), co(28, "Description"), Zs(), qs(29, "textarea", 16), Zs(), $s(30, "div", 12), $s(31, "button", 17), co(32, "Enr\xe9gistrer"), Zs(), Zs(), Zs(), Zs(), Zs(), Zs()
    }
    if (2 & t) {
      const t = e.$implicit,
        n = Xs();
      Oi(10), to("routerLink", "/association/households/view/", t.idhousehold, ""), Oi(1), uo(t.household), Oi(9), ho(" ", t.household, " "), Oi(1), Hs("formGroup", n.needForm), Oi(10), Hs("disabled", !n.needForm.valid)
    }
  }
  let wy = (() => {
    class t {
      constructor(t, e, n, i, r) {
        this.needsService = t, this.householdsService = e, this.fb = n, this.activatedRoute = i, this.router = r
      }
      ngOnInit() {
        this.householdId = this.activatedRoute.snapshot.params.id, this.getHousehold(this.householdId), this.createForm()
      }
      getHousehold(t) {
        this.householdsService.getHouseHold(t).subscribe(t => {
          this.household = t
        }, t => {
          console.log(t)
        })
      }
      createForm() {
        this.needForm = this.fb.group({
          householdId: [this.householdId, Gm.required],
          need: ["", Gm.required],
          description: ["", Gm.required]
        })
      }
      onSubmit() {
        this.needsService.set(this.needForm.value).subscribe(t => {
          this.router.navigate(["/association/households/view/" + this.householdId])
        }, t => {
          console.log(t)
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Pv), js(Cv), js(Kg), js(bp), js(Lf))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-needs-add"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        [4, "ngFor", "ngForOf"],
        ["aria-label", "breadcrumb"],
        [1, "breadcrumb"],
        [1, "breadcrumb-item"],
        ["routerLink", "/association/dashbord"],
        ["routerLink", "/association/households/"],
        [3, "routerLink"],
        ["aria-current", "page", 1, "breadcrumb-item", "active"],
        [1, "row", "justify-content-center"],
        [1, "col-lg-6"],
        [1, "text-center"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "need"],
        ["type", "text", "formControlName", "need", "name", "need", 1, "form-control"],
        ["for", "description"],
        ["formControlName", "description", "name", "description", "id", "description", 1, "form-control"],
        ["type", "submit", 1, "bouton", "btn-block", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && Ds(0, by, 33, 5, "div", 0), 2 & t && Hs("ngForOf", e.household)
      },
      directives: [tu, If, Rg, Hm, zg, Nm, Um, Zg],
      styles: [""]
    }), t
  })(), xy = (() => {
    class t {
      constructor() {
        this.smallIcon = new Q_.Icon({
          iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png",
          iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
          shadowSize: [41, 41]
        })
      }
      ngAfterViewInit() {
        this.createMap()
      }
      createMap() {
        this.map = Q_.map("map", {
          center: [this.lat, this.lng],
          zoom: 12
        }), Q_.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          minZoom: 12,
          maxZoom: 17,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map), Q_.marker([this.lat, this.lng], {
          icon: this.smallIcon
        }).addTo(this.map).bindPopup(this.household).openPopup()
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-needs-map"]
      ],
      inputs: {
        lat: "lat",
        lng: "lng",
        household: "household"
      },
      decls: 3,
      vars: 0,
      consts: [
        [1, "map-wrapper"],
        [1, "map-border"],
        ["id", "map"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "div", 0), $s(1, "div", 1), qs(2, "div", 2), Zs(), Zs())
      },
      styles: ["#map[_ngcontent-%COMP%]{position:relative;height:100%;width:100%;z-index:1}"]
    }), t
  })();

  function Sy(t, e) {
    if (1 & t && ($s(0, "div"), $s(1, "div", 1), $s(2, "div", 2), $s(3, "h4"), co(4, "M\xe9nage"), Zs(), $s(5, "div"), $s(6, "h5"), co(7), Zs(), $s(8, "p"), co(9), qs(10, "br"), co(11), Zs(), Zs(), Zs(), $s(12, "div", 3), $s(13, "h4"), co(14, "Situation du besoin"), Zs(), $s(15, "h5"), co(16), Zs(), $s(17, "p"), co(18), Zs(), Zs(), $s(19, "div", 4), $s(20, "h4"), co(21, "Suivi"), Zs(), co(22), Oa(23, "date"), Zs(), Zs(), $s(24, "div", 1), $s(25, "div", 3), qs(26, "app-needs-map", 5), Zs(), $s(27, "div", 6), qs(28, "router-outlet", 7), Zs(), Zs(), Zs()), 2 & t) {
      const t = e.$implicit,
        n = Xs();
      Oi(7), po(" ", t.household, ", ", n.getOwner(t.owner), ""), Oi(2), ho(" ", t.familySize, " Membres "), Oi(2), ho(" (225) ", t.cellPhone, " "), Oi(5), ho(" ", t.need, ""), Oi(2), ho("", t.description, " "), Oi(4), ho(" Cr\xe9\xe9 le ", Ra(23, 10, t.needDate, "medium"), " "), Oi(4), Hs("lat", t.lat)("lng", t.lng)("household", t.household)
    }
  }
  let Cy = (() => {
    class t {
      constructor(t, e, n) {
        this.needsService = t, this.proposalsService = e, this.activatedRoute = n
      }
      ngOnInit() {
        this.idNeed = this.activatedRoute.snapshot.params.id, this.getNeed(this.idNeed), this.getProposals(this.idNeed)
      }
      getNeed(t) {
        this.needsService.get(t).subscribe(t => {
          this.need = t
        }, t => {
          console.log(t)
        })
      }
      getProposals(t) {
        this.proposalsService.need(t).subscribe(t => this.proposals = t)
      }
      getOwner(t) {
        return ["Locataire", "Propri\xe9taire", "Autre"][t]
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Pv), js(Tv), js(bp))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-needs-view"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        [4, "ngFor", "ngForOf"],
        [1, "row"],
        [1, "col-lg-4"],
        [1, "col-lg-5"],
        [1, "col-lg-3"],
        [3, "lat", "lng", "household"],
        [1, "col-lg-7"],
        ["name", "proposalOutlet"]
      ],
      template: function (t, e) {
        1 & t && Ds(0, Sy, 29, 13, "div", 0), 2 & t && Hs("ngForOf", e.need)
      },
      directives: [tu, xy, Ff],
      pipes: [ou],
      styles: [""]
    }), t
  })(), ky = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-officers-main"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && ($s(0, "h1"), co(1, "Agent de Municipalit\xe9"), Zs(), qs(2, "router-outlet"))
      },
      directives: [Ff],
      styles: [""]
    }), t
  })(), Py = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/officers/", this.options = {
          params: new Ju({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      gets() {
        return this.http.get(this.baseUrl, this.options)
      }
      get(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
      set(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      put(t) {
        return this.http.put(this.baseUrl, t, this.options)
      }
      password(t) {
        return this.http.put(this.baseUrl + "password", t, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Xt(lh), Xt(Qg))
    }, t.\u0275prov = mt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })();

  function Ey(t, e) {
    if (1 & t && ($s(0, "tr"), $s(1, "td"), co(2), Zs(), $s(3, "td"), co(4), Zs(), $s(5, "td"), co(6), Zs(), $s(7, "td"), $s(8, "a", 2), co(9, "Voir detail"), Zs(), Zs(), Zs()), 2 & t) {
      const t = e.$implicit;
      Oi(2), uo(t.officer), Oi(2), uo(t.phone), Oi(2), uo(t.email), Oi(2), to("routerLink", "/administrator/officers/view/", t.idofficer, "")
    }
  }
  let Ty = (() => {
    class t {
      constructor(t) {
        this.officersService = t
      }
      ngOnInit() {
        this.getOfficers()
      }
      getOfficers() {
        this.officersService.gets().subscribe(t => this.officers = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Py))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-officers-list"]
      ],
      decls: 5,
      vars: 1,
      consts: [
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "h3"), co(1, "Liste des agents municipaux"), Zs(), $s(2, "table", 0), $s(3, "tbody"), Ds(4, Ey, 10, 4, "tr", 1), Zs(), Zs()), 2 & t && (Oi(4), Hs("ngForOf", e.officers))
      },
      directives: [tu, If],
      styles: [""]
    }), t
  })();

  function Ly(t, e) {
    if (1 & t) {
      const t = Gs();
      $s(0, "div", 1), $s(1, "h3"), co(2, "Info Agent Municipal"), Zs(), $s(3, "form", 2), Ys("ngSubmit", (function () {
        return Qe(t), Xs().onSubmit()
      })), $s(4, "div", 3), $s(5, "label", 4), co(6, "Nom et prenom"), Zs(), $s(7, "input", 5), Ys("ngModelChange", (function (n) {
        return Qe(t), e.$implicit.officer = n
      })), Zs(), Zs(), $s(8, "div", 3), $s(9, "label", 6), co(10, "Adresse e-mail"), Zs(), $s(11, "input", 7), Ys("ngModelChange", (function (n) {
        return Qe(t), e.$implicit.email = n
      })), Zs(), Zs(), $s(12, "div", 3), $s(13, "label", 8), co(14, "T\xe9l\xe9phone"), Zs(), $s(15, "input", 9), Ys("ngModelChange", (function (n) {
        return Qe(t), e.$implicit.phone = n
      })), Zs(), Zs(), $s(16, "div", 3), $s(17, "button", 10), co(18, "Valider"), Zs(), Zs(), Zs(), Zs()
    }
    if (2 & t) {
      const t = e.$implicit,
        n = Xs();
      Oi(3), Hs("formGroup", n.officerForm), Oi(4), Hs("ngModel", t.officer), Oi(4), Hs("ngModel", t.email), Oi(4), Hs("ngModel", t.phone), Oi(2), Hs("disabled", !n.officerForm.valid)
    }
  }
  let Ay = (() => {
    class t {
      constructor(t, e, n) {
        this.officesService = t, this.fb = e, this.activatedRoute = n
      }
      ngOnInit() {
        this.idOfficer = this.activatedRoute.snapshot.params.id, this.getOfficer(this.idOfficer), this.createForm()
      }
      getOfficer(t) {
        this.officesService.get(t).subscribe(t => this.officer = t)
      }
      createForm() {
        this.officerForm = this.fb.group({
          officer: ["", Gm.required],
          email: ["", Gm.required],
          phone: ["", Gm.required]
        })
      }
      onSubmit() {
        this.officesService.put(this.officerForm.value).subscribe(t => {
          this.successMessage = "Mise \xe0 jour \xe9ffectu\xe9e avec succ\xe8s"
        }, t => {
          this.errorMessage = "Erreur"
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Py), js(Kg), js(bp))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-officers-view"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        ["class", "col-lg-8", 4, "ngFor", "ngForOf"],
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "officer"],
        ["type", "text", "formControlName", "officer", "name", "officer", "id", "officer", 1, "form-control", 3, "ngModel", "ngModelChange"],
        ["for", "email"],
        ["type", "email", "formControlName", "email", "name", "email", "id", "email", 1, "form-control", 3, "ngModel", "ngModelChange"],
        ["for", "phone"],
        ["type", "tel", "formControlName", "phone", "name", "phone", "id", "phone", 1, "form-control", 3, "ngModel", "ngModelChange"],
        ["type", "submit", 1, "bouton", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && Ds(0, Ly, 19, 5, "div", 0), 2 & t && Hs("ngForOf", e.officer)
      },
      directives: [tu, Rg, Hm, zg, Nm, Um, Zg],
      styles: [""]
    }), t
  })(), Iy = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-associations-container"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && ($s(0, "h1"), co(1, "Associations"), Zs(), qs(2, "router-outlet"))
      },
      directives: [Ff],
      styles: [""]
    }), t
  })(), My = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-townhalls-container"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && ($s(0, "h1"), co(1, "Municipalit\xe9"), Zs(), qs(2, "router-outlet"))
      },
      directives: [Ff],
      styles: [""]
    }), t
  })();

  function Oy(t, e) {
    if (1 & t && ($s(0, "tr"), $s(1, "td"), co(2), Zs(), $s(3, "td"), co(4), Zs(), $s(5, "td"), co(6), Zs(), $s(7, "td"), $s(8, "a", 2), co(9, "Voir detail"), Zs(), Zs(), Zs()), 2 & t) {
      const t = e.$implicit;
      Oi(2), uo(t.supplier), Oi(2), uo(t.service), Oi(2), uo(t.phone), Oi(2), to("routerLink", "view/", t.idsupplier, "")
    }
  }
  let Ny = (() => {
    class t {
      constructor(t) {
        this.suppliersService = t
      }
      ngOnInit() {
        this.getSuppliers()
      }
      getSuppliers() {
        this.suppliersService.getSuppliers().subscribe(t => {
          this.suppliers = t
        }, t => {})
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(kv))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-suppliers-list"]
      ],
      decls: 3,
      vars: 1,
      consts: [
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "table", 0), $s(1, "tbody"), Ds(2, Oy, 10, 4, "tr", 1), Zs(), Zs()), 2 & t && (Oi(2), Hs("ngForOf", e.suppliers))
      },
      directives: [tu, If],
      styles: [""]
    }), t
  })();

  function Ry(t, e) {
    if (1 & t && ($s(0, "div"), $s(1, "div", 1), $s(2, "div", 2), $s(3, "h3"), co(4), qs(5, "br"), $s(6, "small"), co(7), Zs(), Zs(), Zs(), $s(8, "div", 3), $s(9, "div", 1), $s(10, "div", 4), co(11, " G\xe9rant: "), $s(12, "strong"), co(13), Zs(), qs(14, "br"), co(15, " Forme Juridique: "), $s(16, "strong"), co(17), Zs(), qs(18, "br"), co(19, "Registre de commerce: "), $s(20, "strong"), co(21), Zs(), qs(22, "br"), co(23, " Num\xe9ro Contribuable: "), $s(24, "strong"), co(25), Zs(), Zs(), $s(26, "div", 4), co(27, " Si\xe8ge social: "), $s(28, "strong"), co(29), Zs(), qs(30, "br"), co(31, "E-mail: "), $s(32, "strong"), co(33), Zs(), qs(34, "br"), co(35, " Tel.: "), $s(36, "strong"), co(37), Zs(), qs(38, "br"), co(39, "Derni\xe8re connexion: "), $s(40, "strong"), co(41), Zs(), Zs(), Zs(), Zs(), Zs(), Zs()), 2 & t) {
      const t = e.$implicit;
      Oi(4), ho(" ", t.supplier, " "), Oi(3), po("", t.townHall, ", ", t.service, ""), Oi(6), uo(t.manager), Oi(4), uo(t.legalForm), Oi(4), uo(t.tradeRegister), Oi(4), uo(t.taxpayer), Oi(4), ho(" ", t.address, ""), Oi(4), uo(t.email), Oi(4), uo(t.phone), Oi(4), uo(null !== t.connectedDate ? t.connectedDate : "Jamais")
    }
  }
  let Fy = (() => {
    class t {
      constructor(t, e) {
        this.suppliersService = t, this.ar = e
      }
      ngOnInit() {
        this.id = this.ar.snapshot.params.id, this.getSupplier(this.id)
      }
      getSupplier(t) {
        this.suppliersService.getSupplier(t).subscribe(t => this.supplier = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(kv), js(bp))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-suppliers-view"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        [4, "ngFor", "ngForOf"],
        [1, "row"],
        [1, "col-lg-5"],
        [1, "col-lg-7"],
        [1, "col-lg-6"]
      ],
      template: function (t, e) {
        1 & t && Ds(0, Ry, 42, 11, "div", 0), 2 & t && Hs("ngForOf", e.supplier)
      },
      directives: [tu],
      styles: [""]
    }), t
  })(), Dy = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-suppliers-container"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && ($s(0, "h1"), co(1, "Fournisseurs"), Zs(), qs(2, "router-outlet"))
      },
      directives: [Ff],
      styles: [""]
    }), t
  })(), zy = (() => {
    class t {
      constructor() {
        this.smallIcon = new Q_.Icon({
          iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png",
          iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
          shadowSize: [41, 41]
        })
      }
      ngAfterViewInit() {
        this.createMap()
      }
      createMap() {
        const t = {
          lat: 5.324388151020659,
          lng: -4.076144442074325
        };
        this.map = Q_.map("map", {
          center: [t.lat, t.lng],
          zoom: 12
        }), Q_.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          minZoom: 12,
          maxZoom: 17,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map), this.addMarker({
          coords: t,
          text: "",
          open: !1
        })
      }
      addMarker({
        coords: t,
        text: e,
        open: n
      }) {
        const i = Q_.marker([t.lat, t.lng], {
          icon: this.smallIcon
        });
        n ? i.addTo(this.map).bindPopup(e).openPopup() : i.addTo(this.map).bindPopup(e)
      }
      onMapClick() {
        console.log(Q_.latLng)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-associations-map"]
      ],
      decls: 3,
      vars: 0,
      consts: [
        [1, "map-wrapper"],
        [1, "map-border"],
        ["id", "map", 3, "click"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "div", 0), $s(1, "div", 1), $s(2, "div", 2), Ys("click", (function () {
          return e.onMapClick()
        })), Zs(), Zs(), Zs())
      },
      styles: [""]
    }), t
  })();

  function jy(t, e) {
    if (1 & t && ($s(0, "div"), $s(1, "nav", 6), $s(2, "ol", 7), $s(3, "li", 8), $s(4, "a", 9), co(5, "Tableau de bord"), Zs(), Zs(), $s(6, "li", 8), $s(7, "a", 10), co(8, "M\xe9nages"), Zs(), Zs(), $s(9, "li", 8), $s(10, "a", 11), co(11), Zs(), Zs(), $s(12, "li", 12), co(13, "Coordonn\xe9es GPS"), Zs(), Zs(), Zs(), Zs()), 2 & t) {
      const t = e.$implicit;
      Oi(10), to("routerLink", "/association/households/view/", t.idhousehold, ""), Oi(1), uo(t.household)
    }
  }
  const Vy = function (t, e) {
    return {
      "alert-danger": t,
      "alert-success": e
    }
  };

  function Uy(t, e) {
    if (1 & t) {
      const t = Gs();
      $s(0, "div"), $s(1, "h3", 13), $s(2, "small"), co(3, " Coordonn\xe9es g\xe9ographique de"), Zs(), qs(4, "br"), co(5), Zs(), $s(6, "div", 14), co(7), Zs(), $s(8, "form", 15), Ys("ngSubmit", (function () {
        return Qe(t), Xs().onSubmit()
      })), $s(9, "h5"), co(10, "Coordonn\xe9es G\xe9ographique"), Zs(), $s(11, "div", 16), co(12, "Cliquer sur la carte pour avoir la position"), Zs(), $s(13, "div", 17), $s(14, "div", 18), $s(15, "label", 19), co(16, "Latitude"), Zs(), $s(17, "input", 20), Ys("ngModelChange", (function (n) {
        return Qe(t), e.$implicit.lat = n
      })), Zs(), Zs(), $s(18, "div", 18), $s(19, "label", 21), co(20, "Longitude"), Zs(), $s(21, "input", 22), Ys("ngModelChange", (function (n) {
        return Qe(t), e.$implicit.lng = n
      })), Zs(), Zs(), Zs(), $s(22, "div", 23), $s(23, "button", 24), co(24, "Enr\xe9gistrer"), Zs(), Zs(), Zs(), Zs()
    }
    if (2 & t) {
      const t = e.$implicit,
        n = Xs();
      Oi(5), ho(" ", t.household, " "), Oi(1), Hs("ngClass", La(8, Vy, n.errorMessage && !n.successMessage, !n.errorMessage && n.successMessage)), Oi(1), po(" ", n.errorMessage, " ", n.successMessage, " "), Oi(1), Hs("formGroup", n.gpsForm), Oi(9), Hs("ngModel", t.lat), Oi(4), Hs("ngModel", t.lng), Oi(2), Hs("disabled", !n.gpsForm.valid)
    }
  }
  let Hy = (() => {
    class t {
      constructor(t, e, n, i) {
        this.fb = t, this.ar = e, this.router = n, this.householdsService = i, this.options = {
          layers: [Object(Q_.tileLayer)("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors"
          })],
          zoom: 7,
          center: Object(Q_.latLng)([46.879966, -121.726909])
        }, this.smallIcon = new Q_.Icon({
          iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png",
          iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
          shadowSize: [41, 41]
        })
      }
      ngAfterViewInit() {
        this.createMap()
      }
      ngOnInit() {
        this.idHousehold = this.ar.snapshot.params.id, this.getHousehold(this.idHousehold), this.createForm()
      }
      createMap() {
        this.map = Q_.map("map", {
          center: [5.324388151020659, -4.076144442074325],
          zoom: 12
        }), Q_.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          minZoom: 12,
          maxZoom: 17,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map), this.map.on("click", t => {
          this.gpsForm.controls.lat.setValue(t.latlng.lat), this.gpsForm.controls.lng.setValue(t.latlng.lng), Q_.marker([t.latlng.lat, t.latlng.lng], {
            icon: this.smallIcon
          }).addTo(this.map)
        })
      }
      getHousehold(t) {
        this.householdsService.getHouseHold(t).subscribe(t => this.household = t)
      }
      createForm() {
        this.gpsForm = this.fb.group({
          idhousehold: [this.idHousehold, Gm.required],
          lat: ["", Gm.required],
          lng: ["", Gm.required]
        })
      }
      onSubmit() {
        this.householdsService.address(this.gpsForm.value).subscribe(t => this.successMessage = t, t => this.errorMessage = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Kg), js(bp), js(Lf), js(Cv))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-households-address"]
      ],
      decls: 8,
      vars: 2,
      consts: [
        [4, "ngFor", "ngForOf"],
        [1, "row", "justify-content-center"],
        [1, "col-lg-5"],
        [1, "map-wrapper"],
        [1, "map-border"],
        ["id", "map"],
        ["aria-label", "breadcrumb"],
        [1, "breadcrumb"],
        [1, "breadcrumb-item"],
        ["routerLink", "/association/dashbord"],
        ["routerLink", "/association/households/"],
        [3, "routerLink"],
        ["aria-current", "page", 1, "breadcrumb-item", "active"],
        [1, "text-center"],
        [1, "alert", 3, "ngClass"],
        [3, "formGroup", "ngSubmit"],
        [1, "alert", "alert-warning"],
        [1, "form-group", "row"],
        [1, "form-group", "col-lg-6"],
        ["for", "lat"],
        ["type", "text", "formControlName", "lat", "name", "lat", 1, "form-control", 3, "ngModel", "ngModelChange"],
        ["for", "lng"],
        ["type", "text", "formControlName", "lng", "name", "lng", 1, "form-control", 3, "ngModel", "ngModelChange"],
        [1, "form-group"],
        ["type", "submit", 1, "bouton", "btn-block", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && (Ds(0, jy, 14, 2, "div", 0), $s(1, "div", 1), $s(2, "div", 2), Ds(3, Uy, 25, 11, "div", 0), Zs(), $s(4, "div", 2), $s(5, "div", 3), $s(6, "div", 4), qs(7, "div", 5), Zs(), Zs(), Zs(), Zs()), 2 & t && (Hs("ngForOf", e.household), Oi(3), Hs("ngForOf", e.household))
      },
      directives: [tu, If, Qc, Rg, Hm, zg, Nm, Um, Zg],
      styles: ["#map[_ngcontent-%COMP%]{height:350px;width:100%;z-index:1}"]
    }), t
  })();
  const By = [{
    path: "administrator",
    component: wv,
    canActivate: [O_],
    children: [{
      path: "dashboard",
      component: Av
    }, {
      path: "add",
      component: Mv
    }, {
      path: "administrators",
      component: Rv
    }, {
      path: "townhalls",
      component: My,
      children: [{
        path: "",
        component: Y_
      }, {
        path: "add",
        component: J_
      }, {
        path: "view/:id",
        component: iy,
        children: [{
          path: "",
          component: X_,
          outlet: "townMap"
        }]
      }]
    }, {
      path: "suppliers",
      component: Dy,
      children: [{
        path: "",
        component: Ny
      }, {
        path: "view/:id",
        component: Fy
      }]
    }, {
      path: "officers",
      component: ky,
      children: [{
        path: "",
        component: Ty
      }, {
        path: "view/:id",
        component: Ay
      }]
    }, {
      path: "complaints",
      component: j_,
      children: [{
        path: "",
        component: H_,
        children: [{
          path: ":id",
          component: Z_
        }]
      }]
    }, {
      path: "banks",
      component: N_,
      children: [{
        path: "",
        component: D_
      }, {
        path: "add",
        component: z_
      }]
    }, {
      path: "sensitization",
      component: Fv,
      children: [{
        path: "",
        component: (() => {
          class t {
            constructor() {}
            ngOnInit() {}
          }
          return t.\u0275fac = function (e) {
            return new(e || t)
          }, t.\u0275cmp = ge({
            type: t,
            selectors: [
              ["app-sensitization-dashboard"]
            ],
            decls: 40,
            vars: 0,
            consts: [
              [1, "connected"],
              [1, "container", "enumeration"],
              [1, "row", "justify-content-center"],
              [1, "col-lg-4"],
              [1, "cadre"],
              ["routerLink", "/administrator/sensitization/sms/chiefs", 1, "bouton"],
              ["routerLink", "/administrator/sensitization/sms/everyone", 1, "bouton"],
              ["routerLink", "/administrator/sensitization/sms/association", 1, "bouton"],
              ["routerLink", "/administrator/sensitization/sms/send", 1, "bouton"],
              ["routerLink", "/administrator/sensitization/voice/send", 1, "bouton"],
              ["routerLink", "/administrator/sensitization/voice/association", 1, "bouton"]
            ],
            template: function (t, e) {
              1 & t && ($s(0, "p", 0), co(1, " Envoyer des messages de sensibilisation:SMS et vocale\n"), Zs(), $s(2, "section", 1), $s(3, "div", 2), $s(4, "div", 3), $s(5, "div", 4), $s(6, "p", 0), co(7, "Envoyer un SMS aux Pr\xe9sidents d'associations"), Zs(), $s(8, "a", 5), co(9, "Envoyer SMS"), Zs(), Zs(), Zs(), $s(10, "div", 3), $s(11, "div", 4), $s(12, "p", 0), co(13, "Envoyer un SMS \xe0 toutes les associations"), Zs(), $s(14, "a", 6), co(15, "Envoyer SMS"), Zs(), Zs(), Zs(), $s(16, "div", 3), $s(17, "div", 4), $s(18, "p", 0), co(19, "Envoyer un SMS \xe0 une association"), Zs(), $s(20, "a", 7), co(21, "Envoyer"), Zs(), Zs(), Zs(), $s(22, "div", 3), $s(23, "div", 4), $s(24, "p", 0), co(25, "Envoyer un SMS Priv\xe9"), Zs(), $s(26, "a", 8), co(27, "ENVOYER SMS"), Zs(), Zs(), Zs(), $s(28, "div", 3), $s(29, "div", 4), $s(30, "p", 0), co(31, "Envoyer Message Vocal"), Zs(), $s(32, "a", 9), co(33, "ENVOYER SMS Vocal"), Zs(), Zs(), Zs(), $s(34, "div", 3), $s(35, "div", 4), $s(36, "p", 0), co(37, "Envoyer Message Vocal \xe0 une association "), Zs(), $s(38, "a", 10), co(39, "ENVOYER SMS Vocal"), Zs(), Zs(), Zs(), Zs(), Zs())
            },
            directives: [If],
            styles: [""]
          }), t
        })()
      }, {
        path: "sms",
        component: Dv,
        children: [{
          path: "",
          component: Vv
        }, {
          path: "send",
          component: Bv
        }, {
          path: "chiefs",
          component: Zv
        }, {
          path: "association",
          component: Gv
        }, {
          path: "everyone",
          component: $v
        }]
      }, {
        path: "voice",
        component: q_,
        children: [{
          path: "send",
          component: W_
        }]
      }]
    }, {
      path: "needs",
      component: vy,
      children: [{
        path: "",
        component: yy
      }, {
        path: "add/:id",
        component: wy
      }, {
        path: "view/:id",
        component: Cy
      }]
    }, {
      path: "households",
      component: ry,
      children: [{
        path: "",
        component: ay
      }, {
        path: "view/:id",
        component: gy
      }, {
        path: "add/:id",
        component: py
      }, {
        path: "address/:id",
        component: Hy
      }]
    }, {
      path: "associations",
      component: Iy,
      children: [{
        path: "",
        component: __
      }, {
        path: "add",
        component: T_,
        children: [{
          path: "",
          component: zy,
          outlet: "associationMap"
        }]
      }, {
        path: "view/:id",
        component: M_
      }]
    }]
  }];
  let $y = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [qf.forRoot(By)], qf
      ]
    }), t
  })();
  const Zy = [{
    path: "sensitization",
    component: Fv,
    canActivate: [O_],
    children: [{
      path: "sms",
      component: Dv,
      children: [{
        path: "",
        component: Vv
      }, {
        path: "send",
        component: Bv
      }, {
        path: "everyone",
        component: $v
      }]
    }]
  }];
  let qy = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [qf.forRoot(Zy)], qf
      ]
    }), t
  })(), Gy = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [cu, qf, Sh, Yg]
      ]
    }), t
  })(), Wy = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [cu, qf, Sh, Yg]
      ]
    }), t
  })(), Ky = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [cu, qf, Sh, Yg, Gy, qy, Wy]
      ]
    }), t
  })(), Yy = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [cu, qf, Yg, Sh, $y, Ky]
      ]
    }), t
  })();
  const Jy = function () {
    return ["/townhalls/dashboard"]
  }, Qy = function () {
    return ["/townhalls/associations"]
  };
  let Xy = (() => {
    class t {
      constructor(t) {
        this.authService = t
      }
      ngOnInit() {}
      sidebar() {
        this.status = !this.status
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Qg))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-townhalls-main"]
      ],
      decls: 51,
      vars: 6,
      consts: [
        [1, "header"],
        [1, "toggle-btn", 3, "click"],
        ["id", "sidebar", 3, "ngClass"],
        [1, "float-right", "btn-close", 3, "click"],
        [1, "sidebar-sticky"],
        [1, "nav", "flex-column"],
        [1, "nav-item"],
        ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"],
        ["routerLink", "/townhalls/households", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "users"],
        ["routerLink", "/townhalls/needs", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "bar-chart-2"],
        ["routerLink", "/townhalls/complaints", "routerLinkActive", "active", 1, "nav-link"],
        ["routerLink", "/townhalls/suppliers", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "layers"],
        [1, "sidebar-heading", "d-flex", "justify-content-between", "align-items-center", "px-3", "mt-4", "mb-1", "text-muted"],
        ["href", "#", "aria-label", "Add a new report", 1, "d-flex", "align-items-center", "text-muted"],
        ["data-feather", "plus-circle"],
        [1, "nav", "flex-column", "mb-2"],
        ["routerLink", "/townhalls/officers/password", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "file-text"],
        [1, "nav-link", 3, "click"],
        ["id", "main", 3, "ngClass"],
        [1, "container-fluid"],
        ["role", "main"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "header", 0), $s(1, "div", 1), Ys("click", (function () {
          return e.sidebar()
        })), qs(2, "span"), qs(3, "span"), qs(4, "span"), Zs(), Zs(), $s(5, "div", 2), $s(6, "button", 3), Ys("click", (function () {
          return e.sidebar()
        })), co(7, "X"), Zs(), $s(8, "nav"), $s(9, "div", 4), $s(10, "ul", 5), $s(11, "li", 6), $s(12, "a", 7), co(13, " Tableau de Bord "), Zs(), Zs(), $s(14, "li", 6), $s(15, "a", 7), co(16, " Asoociations "), Zs(), Zs(), $s(17, "li", 6), $s(18, "a", 8), qs(19, "span", 9), co(20, " M\xe9nages "), Zs(), Zs(), $s(21, "li", 6), $s(22, "a", 10), qs(23, "span", 11), co(24, " Appels d'offre "), Zs(), Zs(), $s(25, "li", 6), $s(26, "a", 12), qs(27, "span", 11), co(28, " R\xe9actions "), Zs(), Zs(), $s(29, "li", 6), $s(30, "a", 13), qs(31, "span", 14), co(32, " Fournisseurs "), Zs(), Zs(), Zs(), $s(33, "h6", 15), $s(34, "span"), co(35, "Param\xe8trages"), Zs(), $s(36, "a", 16), qs(37, "span", 17), Zs(), Zs(), $s(38, "ul", 18), $s(39, "li", 6), $s(40, "a", 19), qs(41, "span", 20), co(42, " Changer de mot de passe "), Zs(), Zs(), $s(43, "li", 6), $s(44, "a", 21), Ys("click", (function () {
          return e.authService.logoutUser()
        })), qs(45, "span", 20), co(46, " Deconnexion "), Zs(), Zs(), Zs(), Zs(), Zs(), Zs(), $s(47, "div", 22), $s(48, "div", 23), $s(49, "main", 24), qs(50, "router-outlet"), Zs(), Zs(), Zs()), 2 & t && (Oi(5), Hs("ngClass", e.status ? "sidebar-close" : "sidebar-open"), Oi(7), Hs("routerLink", Ea(4, Jy)), Oi(3), Hs("routerLink", Ea(5, Qy)), Oi(32), Hs("ngClass", e.status ? "main-yes" : "main-no"))
      },
      directives: [Qc, If, Of, Ff],
      styles: [""]
    }), t
  })();

  function tb(t, e) {
    if (1 & t && ($s(0, "p", 11), $s(1, "span"), co(2, "Salut, "), $s(3, "b"), co(4), Zs(), Zs(), $s(5, "span"), co(6, "Voici ce qui se passe aujourd'hui."), Zs(), Zs()), 2 & t) {
      const t = Xs();
      Oi(4), uo(t.user.name)
    }
  }

  function eb(t, e) {
    if (1 & t && ($s(0, "div", 12), $s(1, "p", 13), co(2, "A.V.E.Cs"), Zs(), $s(3, "p", 14), co(4), Zs(), Zs()), 2 & t) {
      const t = Xs();
      Oi(4), uo(t.associations.length)
    }
  }

  function nb(t, e) {
    if (1 & t && ($s(0, "div", 12), $s(1, "p", 13), co(2, "M\xe9nages"), Zs(), $s(3, "p", 14), co(4), Zs(), Zs()), 2 & t) {
      const t = Xs();
      Oi(4), uo(t.households.length)
    }
  }

  function ib(t, e) {
    if (1 & t && ($s(0, "p", 14), co(1), Zs()), 2 & t) {
      const t = Xs(2);
      Oi(1), uo(t.suppliers.length)
    }
  }

  function rb(t, e) {
    1 & t && ($s(0, "p", 14), co(1, "0"), Zs())
  }

  function sb(t, e) {
    if (1 & t && ($s(0, "div", 12), $s(1, "p", 13), co(2, "Appels d'offre"), Zs(), Ds(3, ib, 2, 1, "p", 15), Ds(4, rb, 2, 0, "p", 15), Zs()), 2 & t) {
      const t = Xs();
      Oi(3), Hs("ngIf", t.suppliers), Oi(1), Hs("ngIf", !t.suppliers)
    }
  }

  function ob(t, e) {
    if (1 & t && ($s(0, "p", 14), co(1), Zs()), 2 & t) {
      const t = Xs(2);
      Oi(1), uo(t.suppliers.length)
    }
  }

  function ab(t, e) {
    1 & t && ($s(0, "p", 14), co(1, "0"), Zs())
  }

  function lb(t, e) {
    if (1 & t && ($s(0, "div", 12), $s(1, "p", 13), co(2, "Fournisseurs"), Zs(), Ds(3, ob, 2, 1, "p", 15), Ds(4, ab, 2, 0, "p", 15), Zs()), 2 & t) {
      const t = Xs();
      Oi(3), Hs("ngIf", t.suppliers), Oi(1), Hs("ngIf", !t.suppliers)
    }
  }

  function cb(t, e) {
    if (1 & t && ($s(0, "div", 7), $s(1, "p", 16), co(2), qs(3, "br"), co(4, " Besoins exprim\xe9s "), Zs(), Zs()), 2 & t) {
      const t = Xs();
      Oi(2), ho("", t.needs.length, " ")
    }
  }

  function ub(t, e) {
    if (1 & t && ($s(0, "p", 17), co(1), qs(2, "br"), co(3, " Plaintes "), Zs()), 2 & t) {
      const t = Xs();
      Oi(1), ho(" ", t.complaints.length, " ")
    }
  }
  let hb = (() => {
    class t {
      constructor(t, e, n, i, r, s, o) {
        this.authService = t, this.associationsService = e, this.householdsService = n, this.suppliersService = i, this.needsService = r, this.complaintsService = s, this.router = o
      }
      ngOnInit() {
        this.getUser(), this.getAssociations(), this.getHouseholds(), this.getSuppliers(), this.getNeeds(), this.getComplaints()
      }
      getUser() {
        this.authService.user().subscribe(t => this.user = t, t => {
          t instanceof oh && 401 === t.status && this.router.navigate(["/login"])
        })
      }
      getComplaints() {
        this.complaintsService.town().subscribe(t => this.complaints = t)
      }
      getAssociations() {
        this.associationsService.town().subscribe(t => this.associations = t)
      }
      getHouseholds() {
        this.householdsService.town().subscribe(t => this.households = t)
      }
      getSuppliers() {
        this.suppliersService.town().subscribe(t => this.suppliers = t)
      }
      getNeeds() {
        this.needsService.town().subscribe(t => this.needs = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Qg), js(Sv), js(Cv), js(kv), js(Pv), js(Ev), js(Lf))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-townhalls-dashboard"]
      ],
      decls: 24,
      vars: 7,
      consts: [
        ["class", "connected", 4, "ngIf"],
        [1, "row", "enumeration"],
        [1, "col-lg-3"],
        ["class", "cadre", 4, "ngIf"],
        [1, "needs"],
        [1, "row"],
        ["class", "col-lg-4", 4, "ngIf"],
        [1, "col-lg-4"],
        [1, "col-lg-4", "text-center"],
        ["class", "big-title-green", 4, "ngIf"],
        ["routerLink", "/administrator/complaints"],
        [1, "connected"],
        [1, "cadre"],
        [1, "title"],
        [1, "value"],
        ["class", "value", 4, "ngIf"],
        [1, "big-title"],
        [1, "big-title-green"]
      ],
      template: function (t, e) {
        1 & t && (Ds(0, tb, 7, 1, "p", 0), $s(1, "section", 1), $s(2, "div", 2), Ds(3, eb, 5, 1, "div", 3), Zs(), $s(4, "div", 2), Ds(5, nb, 5, 1, "div", 3), Zs(), $s(6, "div", 2), Ds(7, sb, 5, 2, "div", 3), Zs(), $s(8, "div", 2), Ds(9, lb, 5, 2, "div", 3), Zs(), Zs(), $s(10, "section", 4), $s(11, "h2"), co(12, "Besoins et plaintes"), Zs(), $s(13, "div", 5), Ds(14, cb, 5, 1, "div", 6), $s(15, "div", 7), $s(16, "p"), co(17, " Besoins Trait\xe9s: 0"), Zs(), $s(18, "p"), co(19, " Sans r\xe9actions: 0"), Zs(), Zs(), $s(20, "div", 8), Ds(21, ub, 4, 1, "p", 9), $s(22, "a", 10), co(23, "Voir toutes les plaintes"), Zs(), Zs(), Zs(), Zs()), 2 & t && (Hs("ngIf", e.user), Oi(3), Hs("ngIf", e.associations), Oi(2), Hs("ngIf", e.households), Oi(2), Hs("ngIf", e.suppliers), Oi(2), Hs("ngIf", e.suppliers), Oi(5), Hs("ngIf", e.needs), Oi(7), Hs("ngIf", e.complaints))
      },
      directives: [nu, If],
      styles: [""]
    }), t
  })();

  function db(t, e) {
    if (1 & t) {
      const t = Gs();
      $s(0, "tr", 7), Ys("click", (function () {
        Qe(t);
        const n = e.$implicit;
        return Xs(2).onSelected(n)
      })), $s(1, "td"), co(2), Zs(), $s(3, "td"), co(4), Zs(), $s(5, "td"), co(6), Zs(), Zs()
    }
    if (2 & t) {
      const t = e.$implicit,
        n = Xs(2);
      Oi(2), ho("", n.textLimit(t.complaint), "..."), Oi(2), uo(t.household), Oi(2), uo(t.complaintDate)
    }
  }

  function pb(t, e) {
    if (1 & t && ($s(0, "div", 1), $s(1, "div", 2), $s(2, "h3"), co(3, "Liste de plaintes"), Zs(), $s(4, "div", 3), co(5, " Clique sur la ligne de la plainte pour voir les details "), Zs(), qs(6, "br"), $s(7, "table", 4), $s(8, "tbody"), Ds(9, db, 7, 3, "tr", 5), Zs(), Zs(), Zs(), $s(10, "div", 6), qs(11, "router-outlet"), Zs(), Zs()), 2 & t) {
      const t = Xs();
      Oi(9), Hs("ngForOf", t.complaints)
    }
  }
  let fb = (() => {
    class t {
      constructor(t, e, n) {
        this.complaintsService = t, this.activatedRoute = e, this.router = n
      }
      ngOnInit() {
        this.getComplaints()
      }
      getComplaints() {
        this.complaintsService.town().subscribe(t => this.complaints = t)
      }
      onSelected(t) {
        this.router.navigate([t.idcomplaint], {
          relativeTo: this.activatedRoute
        })
      }
      textLimit(t) {
        return t.substr(0, 20)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Ev), js(bp), js(Lf))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-complaints-town"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        ["class", "row", 4, "ngIf"],
        [1, "row"],
        [1, "col-lg-8"],
        [1, "alert", "alert-warning"],
        [1, "table"],
        [3, "click", 4, "ngFor", "ngForOf"],
        [1, "col-lg-4"],
        [3, "click"]
      ],
      template: function (t, e) {
        1 & t && Ds(0, pb, 12, 1, "div", 0), 2 & t && Hs("ngIf", e.complaints)
      },
      directives: [nu, tu, Ff],
      styles: [""]
    }), t
  })();

  function mb(t, e) {
    if (1 & t && ($s(0, "tr"), $s(1, "td"), co(2), Zs(), $s(3, "td"), co(4), Zs(), $s(5, "td"), $s(6, "a", 5), co(7, "Voir detail"), Zs(), Zs(), Zs()), 2 & t) {
      const t = e.$implicit;
      Oi(2), uo(t.association), Oi(2), uo(t.townHall), Oi(2), to("routerLink", "/administrator/associations/view/", t.idassociation, "")
    }
  }
  const gb = function (t) {
    return {
      itemsPerPage: 10,
      currentPage: t
    }
  };
  let vb = (() => {
    class t {
      constructor(t, e) {
        this.townService = t, this.associationsService = e, this.p = 1
      }
      ngOnInit() {
        this.getAssociation()
      }
      getAssociation() {
        this.associationsService.town().subscribe(t => this.associations = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(xv), js(Sv))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-associations-town"]
      ],
      decls: 8,
      vars: 6,
      consts: [
        ["routerLink", "/townhalls/associations/add", 1, "bouton", "float-right"],
        ["previousLabel", "Pr\xe9c\xe9dent", "nextLabel", "Suivant", 3, "pageChange"],
        [1, "table-responsive"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "a", 0), co(1, "Ajouter"), Zs(), $s(2, "pagination-controls", 1), Ys("pageChange", (function (t) {
          return e.p = t
        })), Zs(), $s(3, "div", 2), $s(4, "table", 3), $s(5, "tbody"), Ds(6, mb, 8, 3, "tr", 4), Oa(7, "paginate"), Zs(), Zs(), Zs()), 2 & t && (Oi(6), Hs("ngForOf", Ra(7, 1, e.associations, Ta(4, gb, e.p))))
      },
      directives: [If, h_, tu],
      pipes: [a_],
      styles: [""]
    }), t
  })();

  function _b(t, e) {
    if (1 & t && ($s(0, "tr"), $s(1, "td"), co(2), Zs(), $s(3, "td"), co(4), Zs(), $s(5, "td"), co(6), Zs(), $s(7, "td"), $s(8, "a", 2), co(9, "Voir detail"), Zs(), Zs(), Zs()), 2 & t) {
      const t = e.$implicit;
      Oi(2), uo(t.household), Oi(2), uo(t.association), Oi(2), uo(t.cellPhone), Oi(2), to("routerLink", "/townhalls/households/view/", t.idhousehold, "")
    }
  }
  let yb = (() => {
    class t {
      constructor(t) {
        this.householdsService = t
      }
      ngOnInit() {
        this.getHouseholds()
      }
      getHouseholds() {
        this.householdsService.town().subscribe(t => this.households = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Cv))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-households-town"]
      ],
      decls: 6,
      vars: 2,
      consts: [
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "h3"), co(1), Zs(), $s(2, "table", 0), qs(3, "thead"), $s(4, "tbody"), Ds(5, _b, 10, 4, "tr", 1), Zs(), Zs()), 2 & t && (Oi(1), ho(" Liste des M\xe9nages(", e.households ? e.households.length : 0, ")"), Oi(4), Hs("ngForOf", e.households))
      },
      directives: [tu, If],
      styles: [""]
    }), t
  })();

  function bb(t, e) {
    if (1 & t && ($s(0, "h3"), co(1), Zs()), 2 & t) {
      const t = Xs();
      Oi(1), ho(" Liste des besoins (", t.needs.length, ")")
    }
  }

  function wb(t, e) {
    if (1 & t && ($s(0, "tr"), $s(1, "td"), co(2), Zs(), $s(3, "td"), co(4), Oa(5, "date"), Zs(), $s(6, "td"), $s(7, "a", 3), co(8, "voir detail"), Zs(), Zs(), Zs()), 2 & t) {
      const t = e.$implicit;
      Oi(2), uo(t.need), Oi(2), uo(Ra(5, 3, t.needDate, "medium")), Oi(3), to("routerLink", "/townhalls/needs/view/", t.idneed, "")
    }
  }
  let xb = (() => {
    class t {
      constructor(t) {
        this.needsService = t
      }
      ngOnInit() {
        this.getNeeds()
      }
      getNeeds() {
        this.needsService.town().subscribe(t => this.needs = t)
      }
      getStatus(t) {
        return ["NON PUBLI\xc9", "PUBLI\xc9", "ANNUL\xc9E"][t]
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Pv))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-needs-town"]
      ],
      decls: 4,
      vars: 2,
      consts: [
        [4, "ngIf"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Ds(0, bb, 2, 1, "h3", 0), $s(1, "table", 1), $s(2, "tbody"), Ds(3, wb, 9, 6, "tr", 2), Zs(), Zs()), 2 & t && (Hs("ngIf", e.needs), Oi(3), Hs("ngForOf", e.needs))
      },
      directives: [nu, tu, If],
      pipes: [ou],
      styles: [""]
    }), t
  })();

  function Sb(t, e) {
    if (1 & t && ($s(0, "tr"), $s(1, "td"), co(2), Zs(), $s(3, "td"), co(4), Zs(), $s(5, "td"), co(6), Zs(), $s(7, "td"), $s(8, "a", 4), co(9, "Voir detail"), Zs(), Zs(), Zs()), 2 & t) {
      const t = e.$implicit;
      Oi(2), uo(t.supplier), Oi(2), uo(t.service), Oi(2), uo(t.phone), Oi(2), to("routerLink", "view/", t.idsupplier, "")
    }
  }
  let Cb = (() => {
    class t {
      constructor(t) {
        this.suppliersService = t
      }
      ngOnInit() {
        this.getSuppliers()
      }
      getSuppliers() {
        this.suppliersService.town().subscribe(t => this.suppliers = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(kv))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-suppliers-town"]
      ],
      decls: 8,
      vars: 1,
      consts: [
        ["routerLink", "add", 1, "bouton", "float-right"],
        [1, "table-responsive"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "h3"), co(1, " Fournisseurs de la municipalit\xe9 "), $s(2, "a", 0), co(3, "Ajouter"), Zs(), Zs(), $s(4, "div", 1), $s(5, "table", 2), $s(6, "tbody"), Ds(7, Sb, 10, 4, "tr", 3), Zs(), Zs(), Zs()), 2 & t && (Oi(7), Hs("ngForOf", e.suppliers))
      },
      directives: [If, tu],
      styles: [""]
    }), t
  })(), kb = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/services/", this.options = {
          params: new Ju({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      gets() {
        return this.http.get(this.baseUrl, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Xt(lh), Xt(Qg))
    }, t.\u0275prov = mt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })();

  function Pb(t, e) {
    if (1 & t && ($s(0, "div", 34), co(1), Zs()), 2 & t) {
      const t = Xs();
      Oi(1), uo(t.successMessage)
    }
  }

  function Eb(t, e) {
    if (1 & t && ($s(0, "option", 35), co(1), Zs()), 2 & t) {
      const t = e.$implicit;
      Hs("value", t.idservice), Oi(1), uo(t.service)
    }
  }

  function Tb(t, e) {
    1 & t && ($s(0, "div", 32), $s(1, "label", 36), co(2, "Zone de couverture de collecte"), Zs(), qs(3, "input", 37), Zs())
  }
  let Lb = (() => {
    class t {
      constructor(t, e, n) {
        this.suppliersService = t, this.servicesService = e, this.fb = n, this.successMessage = ""
      }
      ngOnInit() {
        this.getDomains(), this.createForm()
      }
      getDomains() {
        this.servicesService.gets().subscribe(t => {
          this.services = t
        }, t => {
          console.log(t)
        })
      }
      createForm() {
        this.supplierForm = this.fb.group({
          serviceId: ["", Gm.required],
          supplier: ["", Gm.required],
          manager: ["", Gm.required],
          address: ["", Gm.required],
          legalForm: ["", Gm.required],
          tradeRegister: ["", Gm.required],
          taxpayer: ["", Gm.required],
          coverageArea: [""],
          phone: ["", Gm.required],
          email: ["", [Gm.required, Gm.email]]
        })
      }
      onSubmit() {
        this.suppliersService.setSupplier(this.supplierForm.value).subscribe(t => {
          this.supplierForm.reset(), this.successMessage = "Fournisseur enr\xe9gistr\xe9 avec succ\xe8s"
        }, t => {
          this.errorMessage = "L'enregistrement a \xe9chou\xe9"
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(kv), js(kb), js(Kg))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-suppliers-add"]
      ],
      decls: 53,
      vars: 5,
      consts: [
        [1, "row", "justify-content-center"],
        [1, "col-lg-8"],
        [1, "text-center"],
        ["class", "alert alert-success", 4, "ngIf"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-row"],
        [1, "form-group", "col-lg-7"],
        ["for", "supplier"],
        ["type", "text", "formControlName", "supplier", "name", "supplier", 1, "form-control"],
        [1, "form-group", "col-lg-5"],
        ["for", "manager"],
        ["type", "text", "formControlName", "manager", "name", "manager", 1, "form-control"],
        ["for", "serviceId"],
        ["name", "serviceId", "id", "serviceId", "formControlName", "serviceId", 1, "form-control"],
        ["value", ""],
        [3, "value", 4, "ngFor", "ngForOf"],
        ["for", "address"],
        ["type", "text", "formControlName", "address", "name", "address", 1, "form-control"],
        [1, "form-group", "col-lg-4"],
        ["for", "legalForm"],
        ["type", "text", "formControlName", "legalForm", "name", "legalForm", 1, "form-control"],
        ["for", "tradeRegister"],
        ["type", "text", "formControlName", "tradeRegister", "name", "tradeRegister", 1, "form-control"],
        ["for", "taxpayer"],
        ["type", "text", "formControlName", "taxpayer", "name", "taxpayer", 1, "form-control"],
        [1, "form-group", "col-md-5"],
        ["for", "phone"],
        ["type", "tel", "formControlName", "phone", "name", "phone", 1, "form-control"],
        [1, "form-group", "col-md-7"],
        ["for", "mail"],
        ["type", "email", "formControlName", "email", "name", "email", 1, "form-control"],
        ["class", "form-group", 4, "ngIf"],
        [1, "form-group"],
        ["type", "submit", 1, "bouton", "btn-block", 3, "disabled"],
        [1, "alert", "alert-success"],
        [3, "value"],
        ["for", "coverageArea"],
        ["type", "text", "formControlName", "coverageArea", "name", "coverageArea", 1, "form-control"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "div", 0), $s(1, "div", 1), $s(2, "h3", 2), co(3, "Ajouter un nouveau fournisseur"), Zs(), Ds(4, Pb, 2, 1, "div", 3), $s(5, "form", 4), Ys("ngSubmit", (function () {
          return e.onSubmit()
        })), $s(6, "div", 5), $s(7, "div", 6), $s(8, "label", 7), co(9, "Entreprise"), Zs(), qs(10, "input", 8), Zs(), $s(11, "div", 9), $s(12, "label", 10), co(13, "G\xe9rant"), Zs(), qs(14, "input", 11), Zs(), Zs(), $s(15, "div", 5), $s(16, "div", 9), $s(17, "label", 12), co(18, "Service"), Zs(), $s(19, "select", 13), $s(20, "option", 14), co(21, "Choisir"), Zs(), Ds(22, Eb, 2, 2, "option", 15), Zs(), Zs(), $s(23, "div", 6), $s(24, "label", 16), co(25, "Si\xe8ge social"), Zs(), qs(26, "input", 17), Zs(), Zs(), $s(27, "div", 5), $s(28, "div", 18), $s(29, "label", 19), co(30, "Forme Juridique "), Zs(), qs(31, "input", 20), Zs(), $s(32, "div", 18), $s(33, "label", 21), co(34, "R\xe9gistre de Commerce"), Zs(), qs(35, "input", 22), Zs(), $s(36, "div", 18), $s(37, "label", 23), co(38, "Num\xe9ro Contribuable"), Zs(), qs(39, "input", 24), Zs(), Zs(), $s(40, "div", 5), $s(41, "div", 25), $s(42, "label", 26), co(43, "T\xe9l\xe9phone"), Zs(), qs(44, "input", 27), Zs(), $s(45, "div", 28), $s(46, "label", 29), co(47, "Adresse e-mail"), Zs(), qs(48, "input", 30), Zs(), Zs(), Ds(49, Tb, 4, 0, "div", 31), $s(50, "div", 32), $s(51, "button", 33), co(52, "ENR\xc9GISTRER"), Zs(), Zs(), Zs(), Zs(), Zs()), 2 & t && (Oi(4), Hs("ngIf", e.successMessage), Oi(1), Hs("formGroup", e.supplierForm), Oi(17), Hs("ngForOf", e.services), Oi(27), Hs("ngIf", 3 == e.supplierForm.get("serviceId").value), Oi(2), Hs("disabled", !e.supplierForm.valid))
      },
      directives: [nu, Rg, Hm, zg, Nm, Um, Zg, hg, dg, gg, tu],
      styles: [""]
    }), t
  })(), Ab = (() => {
    class t {
      constructor(t, e, n) {
        this.officesService = t, this.fb = e, this.router = n
      }
      ngOnInit() {
        this.createForm()
      }
      createForm() {
        this.officerForm = this.fb.group({
          password: ["", Gm.required],
          newPassword: ["", Gm.required],
          confirmPassword: ["", [Gm.required]]
        })
      }
      onSubmit() {
        this.officesService.password(this.officerForm.value).subscribe(t => {
          this.successMessage = "Mot de passe modifi\xe9", this.router.navigate(["/login"])
        }, t => {
          this.errorMessage = "Erreur"
        })
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Py), js(Kg), js(Lf))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-officers-password"]
      ],
      decls: 20,
      vars: 2,
      consts: [
        [1, "row", "justify-content-center"],
        [1, "col-lg-8"],
        [3, "formGroup", "ngSubmit"],
        [1, "form-group"],
        ["for", "password"],
        ["type", "password", "formControlName", "password", "name", "password", "id", "password", 1, "form-control"],
        ["for", "newPassword"],
        ["type", "password", "formControlName", "newPassword", "name", "newPassword", "id", "newPassword", 1, "form-control"],
        ["for", "confirmPassword"],
        ["type", "password", "formControlName", "confirmPassword", "name", "confirmPassword", "id", "confirmPassword", 1, "form-control"],
        ["type", "submit", 1, "bouton", 3, "disabled"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "div", 0), $s(1, "div", 1), $s(2, "h3"), co(3, "Changer de mot de passe"), Zs(), $s(4, "form", 2), Ys("ngSubmit", (function () {
          return e.onSubmit()
        })), $s(5, "div", 3), $s(6, "label", 4), co(7, "Ancien Mot de passe"), Zs(), qs(8, "input", 5), Zs(), $s(9, "div", 3), $s(10, "label", 6), co(11, "Ancien Mot de passe"), Zs(), qs(12, "input", 7), Zs(), $s(13, "div", 3), $s(14, "label", 8), co(15, "Ancien Mot de passe"), Zs(), qs(16, "input", 9), Zs(), $s(17, "div", 3), $s(18, "button", 10), co(19, "Valider"), Zs(), Zs(), Zs(), Zs(), Zs()), 2 & t && (Oi(4), Hs("formGroup", e.officerForm), Oi(14), Hs("disabled", !e.officerForm.valid))
      },
      directives: [Rg, Hm, zg, Nm, Um, Zg],
      styles: [""]
    }), t
  })();

  function Ib(t, e) {
    if (1 & t && ($s(0, "div", 1), $s(1, "div", 2), qs(2, "img", 3), Zs(), $s(3, "div", 4), $s(4, "h3"), co(5), $s(6, "span", 5), co(7), qs(8, "br"), co(9), Zs(), Zs(), $s(10, "p"), co(11), Zs(), $s(12, "p"), $s(13, "a", 6), co(14, "Choisir cette offre"), Zs(), Zs(), Zs(), Zs()), 2 & t) {
      const t = e.$implicit;
      Oi(5), ho(" ", t.supplier, " "), Oi(2), ho("Co\xfbt: ", t.price, " CFA "), Oi(2), ho("D\xe9lai d'\xe9x\xe9cution: ", t.timeLimit, " Jours"), Oi(2), ho(" ", t.detail, " ")
    }
  }
  let Mb = (() => {
    class t {
      constructor(t, e) {
        this.proposalsService = t, this.ar = e
      }
      ngOnInit() {
        this.idNeed = this.ar.snapshot.params.id, this.getProposals(this.idNeed)
      }
      getProposals(t) {
        this.proposalsService.need(t).subscribe(t => this.proposals = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Tv), js(bp))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-proposals-need"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        ["class", "chat-suppliers", 4, "ngFor", "ngForOf"],
        [1, "chat-suppliers"],
        [1, "chat-user"],
        ["src", "../../../assets/images/chateur.png", "alt", "Fournisseur", 1, "logo"],
        [1, "chat-message"],
        [1, "float-right"],
        [1, "bouton"]
      ],
      template: function (t, e) {
        1 & t && Ds(0, Ib, 15, 4, "div", 0), 2 & t && Hs("ngForOf", e.proposals)
      },
      directives: [tu],
      styles: [""]
    }), t
  })();
  const Ob = [{
    path: "townhalls",
    component: Xy,
    canActivate: [O_],
    children: [{
      path: "dashboard",
      component: hb
    }, {
      path: "associations",
      component: Iy,
      children: [{
        path: "",
        component: vb
      }, {
        path: "add",
        component: T_
      }, {
        path: "view/:id",
        component: M_
      }]
    }, {
      path: "officers",
      component: ky,
      children: [{
        path: "password",
        component: Ab
      }, {
        path: "view",
        component: Ay
      }]
    }, {
      path: "suppliers",
      component: Dy,
      children: [{
        path: "",
        component: Cb
      }, {
        path: "add",
        component: Lb
      }, {
        path: "view/:id",
        component: Fy
      }]
    }, {
      path: "households",
      component: ry,
      children: [{
        path: "",
        component: yb
      }, {
        path: "add",
        component: py
      }, {
        path: "view/:id",
        component: py
      }]
    }, {
      path: "needs",
      component: vy,
      children: [{
        path: "",
        component: xb
      }, {
        path: "view/:id",
        component: Cy,
        children: [{
          path: "",
          component: Mb,
          outlet: "proposalOutlet"
        }]
      }]
    }, {
      path: "complaints",
      component: j_,
      children: [{
        path: "",
        component: fb,
        children: [{
          path: ":id",
          component: Z_
        }]
      }]
    }]
  }];
  let Nb = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [qf.forRoot(Ob)], qf
      ]
    }), t
  })(), Rb = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [cu, qf, Yg, Sh, Nb]
      ]
    }), t
  })(); $localize `:@@ngb.alert.close␟f4e529ae5ffd73001d1ff4bbdeeb0a72e342e5c8␟7819314041543176992:Close`, $localize `:@@ngb.carousel.previous␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`, $localize `:@@ngb.carousel.next␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`, $localize `:@@ngb.datepicker.previous-month␟c3b08b07b5ab98e7cdcf18df39355690ab7d3884␟8586908745456864217:Previous month`, $localize `:@@ngb.datepicker.previous-month␟c3b08b07b5ab98e7cdcf18df39355690ab7d3884␟8586908745456864217:Previous month`, $localize `:@@ngb.datepicker.next-month␟4bd046985cfe13040d5ef0cd881edce0968a111a␟3628374603023447227:Next month`, $localize `:@@ngb.datepicker.next-month␟4bd046985cfe13040d5ef0cd881edce0968a111a␟3628374603023447227:Next month`, $localize `:@@ngb.datepicker.select-month␟1dbc84807f35518112f62e5775d1daebd3d8462b␟2253869508135064750:Select month`, $localize `:@@ngb.datepicker.select-month␟1dbc84807f35518112f62e5775d1daebd3d8462b␟2253869508135064750:Select month`, $localize `:@@ngb.datepicker.select-year␟8ceb09d002bf0c5d1cac171dfbffe1805d2b3962␟8852264961585484321:Select year`, $localize `:@@ngb.datepicker.select-year␟8ceb09d002bf0c5d1cac171dfbffe1805d2b3962␟8852264961585484321:Select year`, $localize `:@@ngb.pagination.first␟656506dfd46380956a655f919f1498d018f75ca0␟6867721956102594380:««`, $localize `:@@ngb.pagination.previous␟6e52b6ee77a4848d899dd21b591c6fd499e3aef3␟6479320895410098858:«`, $localize `:@@ngb.pagination.next␟ba9cbb4ff311464308a3627e4f1c3345d9fe6d7d␟5458177150283468089:»`, $localize `:@@ngb.pagination.last␟49f27a460bc97e7e00be5b37098bfa79884fc7d9␟5277020320267646988:»»`, $localize `:@@ngb.pagination.first-aria␟f2f852318759c6396b5d3d17031d53817d7b38cc␟2241508602425256033:First`, $localize `:@@ngb.pagination.previous-aria␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`, $localize `:@@ngb.pagination.next-aria␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`, $localize `:@@ngb.pagination.last-aria␟5c729788ba138508aca1bec050b610f7bf81db3e␟4882268002141858767:Last`, $localize `:@@ngb.progressbar.value␟04d611d19c117c60c9e14d0a04399a027184bc77␟5214781723415385277:${"\ufffd0\ufffd"}:INTERPOLATION:%`, $localize `:@@ngb.timepicker.HH␟ce676ab1d6d98f85c836381cf100a4a91ef95a1f␟4043638465245303811:HH`, $localize `:@@ngb.timepicker.hours␟3bbce5fef7e1151da052a4e529453edb340e3912␟8070396816726827304:Hours`, $localize `:@@ngb.timepicker.MM␟72c8edf6a50068a05bde70991e36b1e881f4ca54␟1647282246509919852:MM`, $localize `:@@ngb.timepicker.minutes␟41e62daa962947c0d23ded0981975d1bddf0bf38␟5531237363767747080:Minutes`, $localize `:@@ngb.timepicker.increment-hours␟cb74bc1d625a6c1742f0d7d47306cf495780c218␟5939278348542933629:Increment hours`, $localize `:@@ngb.timepicker.decrement-hours␟147c7a19429da7d999e247d22e33fee370b1691b␟3651829882940481818:Decrement hours`, $localize `:@@ngb.timepicker.increment-minutes␟f5a4a3bc05e053f6732475d0e74875ec01c3a348␟180147720391025024:Increment minutes`, $localize `:@@ngb.timepicker.decrement-minutes␟c1a6899e529c096da5b660385d4e77fe1f7ad271␟7447789825403243588:Decrement minutes`, $localize `:@@ngb.timepicker.SS␟ebe38d36a40a2383c5fefa9b4608ffbda08bd4a3␟3628127143071124194:SS`, $localize `:@@ngb.timepicker.seconds␟4f2ed9e71a7c981db3e50ae2fedb28aff2ec4e6c␟8874012390997067175:Seconds`, $localize `:@@ngb.timepicker.increment-seconds␟912322ecee7d659d04dcf494a70e22e49d334b26␟5364772110539092174:Increment seconds`, $localize `:@@ngb.timepicker.decrement-seconds␟5db47ac104294243a70eb9124fbea9d0004ddf69␟753633511487974857:Decrement seconds`, $localize `:@@ngb.timepicker.PM␟8d6e691e10306c1b34c6b26805151aaea320ef7f␟3564199131264287502:${"\ufffd0\ufffd"}:INTERPOLATION:`, $localize `:@@ngb.timepicker.AM␟69a1f176a93998876952adac57c3bc3863b6105e␟4592818992509942761:${"\ufffd0\ufffd"}:INTERPOLATION:`, $localize `:@@ngb.toast.close-aria␟f4e529ae5ffd73001d1ff4bbdeeb0a72e342e5c8␟7819314041543176992:Close`, "undefined" == typeof Element || Element.prototype.closest || (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest = function (t) {
    let e = this;
    if (!document.documentElement.contains(e)) return null;
    do {
      if (e.matches(t)) return e;
      e = e.parentElement || e.parentNode
    } while (null !== e && 1 === e.nodeType);
    return null
  });
  let Fb = (() => {
    let t = class {};
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [cu]
      ]
    }), t
  })(), Db = (() => {
    let t = class {};
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [cu]
      ]
    }), t
  })(), zb = (() => {
    class t {
      constructor(t) {
        this.authService = t
      }
      ngOnInit() {}
      sidebar() {
        this.status = !this.status
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Qg))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-associations-main"]
      ],
      decls: 42,
      vars: 2,
      consts: [
        [1, "header"],
        [1, "toggle-btn", 3, "click"],
        ["id", "sidebar", 3, "ngClass"],
        [1, "sidebar-sticky"],
        [1, "nav", "flex-column"],
        [1, "nav-item"],
        ["routerLink", "/association/dashboard", "routerLinkActive", "active", 1, "nav-link"],
        ["routerLink", "/association/households", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "users"],
        ["routerLink", "/association/needs", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "bar-chart-2"],
        ["routerLink", "/association/complaints", "routerLinkActive", "active", 1, "nav-link"],
        [1, "sidebar-heading", "d-flex", "justify-content-between", "align-items-center", "px-3", "mt-4", "mb-1", "text-muted"],
        ["href", "#", "aria-label", "Add a new report", 1, "d-flex", "align-items-center", "text-muted"],
        ["data-feather", "plus-circle"],
        [1, "nav", "flex-column", "mb-2"],
        ["routerLink", "/townhalls/officers/password", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "file-text"],
        [1, "nav-link", 3, "click"],
        ["id", "main", 3, "ngClass"],
        [1, "container-fluid"],
        ["role", "main"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "header", 0), $s(1, "div", 1), Ys("click", (function () {
          return e.sidebar()
        })), qs(2, "span"), qs(3, "span"), qs(4, "span"), Zs(), Zs(), $s(5, "div", 2), $s(6, "nav"), $s(7, "div", 3), $s(8, "ul", 4), $s(9, "li", 5), $s(10, "a", 6), co(11, " Tableau de Bord "), Zs(), Zs(), $s(12, "li", 5), $s(13, "a", 7), qs(14, "span", 8), co(15, " M\xe9nages "), Zs(), Zs(), $s(16, "li", 5), $s(17, "a", 9), qs(18, "span", 10), co(19, " Appels d'offre "), Zs(), Zs(), $s(20, "li", 5), $s(21, "a", 11), qs(22, "span", 10), co(23, " R\xe9actions "), Zs(), Zs(), Zs(), $s(24, "h6", 12), $s(25, "span"), co(26, "Param\xe8trages"), Zs(), $s(27, "a", 13), qs(28, "span", 14), Zs(), Zs(), $s(29, "ul", 15), $s(30, "li", 5), $s(31, "a", 16), qs(32, "span", 17), co(33, " Changer de mot de passe "), Zs(), Zs(), $s(34, "li", 5), $s(35, "a", 18), Ys("click", (function () {
          return e.authService.logoutUser()
        })), qs(36, "span", 17), co(37, " Deconnexion "), Zs(), Zs(), Zs(), Zs(), Zs(), Zs(), $s(38, "div", 19), $s(39, "div", 20), $s(40, "main", 21), qs(41, "router-outlet"), Zs(), Zs(), Zs()), 2 & t && (Oi(5), Hs("ngClass", e.status ? "sidebar-close" : "sidebar-open"), Oi(33), Hs("ngClass", e.status ? "main-yes" : "main-no"))
      },
      directives: [Qc, If, Of, Ff],
      styles: [""]
    }), t
  })();

  function jb(t, e) {
    if (1 & t && ($s(0, "p", 13), $s(1, "span"), co(2, "Salut, "), $s(3, "b"), co(4), Zs(), Zs(), $s(5, "span"), co(6, "Voici ce qui se passe aujourd'hui."), Zs(), Zs()), 2 & t) {
      const t = Xs();
      Oi(4), uo(t.user.name)
    }
  }

  function Vb(t, e) {
    if (1 & t && ($s(0, "div", 14), $s(1, "p", 15), co(2, "M\xe9nages"), Zs(), $s(3, "p", 16), co(4), Zs(), Zs()), 2 & t) {
      const t = Xs();
      Oi(4), uo(t.households.length)
    }
  }

  function Ub(t, e) {
    if (1 & t && ($s(0, "p", 16), co(1), Zs()), 2 & t) {
      const t = Xs(2);
      Oi(1), uo(t.complaints.length)
    }
  }

  function Hb(t, e) {
    if (1 & t && ($s(0, "div", 14), $s(1, "p", 15), co(2, "Plaintes"), Zs(), Ds(3, Ub, 2, 1, "p", 17), Zs()), 2 & t) {
      const t = Xs();
      Oi(3), Hs("ngIf", t.complaints)
    }
  }

  function Bb(t, e) {
    if (1 & t && ($s(0, "div", 18), $s(1, "p", 19), co(2), qs(3, "br"), co(4, " Besoins exprim\xe9s "), Zs(), Zs()), 2 & t) {
      const t = Xs();
      Oi(2), ho("", t.needs.length, " ")
    }
  }

  function $b(t, e) {
    if (1 & t && ($s(0, "p", 20), co(1), qs(2, "br"), co(3, " Plaintes "), Zs()), 2 & t) {
      const t = Xs();
      Oi(1), ho(" ", t.complaints.length, " ")
    }
  }
  let Zb = (() => {
    class t {
      constructor(t, e, n, i, r) {
        this.authService = t, this.householdsService = e, this.needsService = n, this.complaintsService = i, this.router = r
      }
      ngOnInit() {
        this.getUser(), this.getHouseholds(), this.getNeeds(), this.getComplaints()
      }
      getUser() {
        this.authService.user().subscribe(t => this.user = t)
      }
      getComplaints() {
        this.complaintsService.association().subscribe(t => this.complaints = t)
      }
      getHouseholds() {
        this.householdsService.association().subscribe(t => this.households = t)
      }
      getNeeds() {
        this.needsService.association().subscribe(t => this.needs = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Qg), js(Cv), js(Pv), js(Ev), js(Lf))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-associations-dashboard"]
      ],
      decls: 25,
      vars: 5,
      consts: [
        ["class", "connected", 4, "ngIf"],
        [1, "row", "enumeration"],
        [1, "col-lg-3"],
        ["class", "cadre", 4, "ngIf"],
        [1, "needs"],
        [1, "row"],
        [1, "col-lg-6"],
        ["class", "col-lg-4", 4, "ngIf"],
        [1, "col-lg-5"],
        [1, "btn", "btn-success"],
        [1, "col-lg-6", "text-center"],
        ["class", "big-title-green", 4, "ngIf"],
        ["routerLink", "/administrator/complaints"],
        [1, "connected"],
        [1, "cadre"],
        [1, "title"],
        [1, "value"],
        ["class", "value", 4, "ngIf"],
        [1, "col-lg-4"],
        [1, "big-title"],
        [1, "big-title-green"]
      ],
      template: function (t, e) {
        1 & t && (Ds(0, jb, 7, 1, "p", 0), $s(1, "section", 1), $s(2, "div", 2), Ds(3, Vb, 5, 1, "div", 3), Zs(), $s(4, "div", 2), Ds(5, Hb, 4, 1, "div", 3), Zs(), Zs(), $s(6, "section", 4), $s(7, "div", 5), $s(8, "div", 6), $s(9, "h2"), co(10, "Expressions des besoins"), Zs(), $s(11, "div", 5), Ds(12, Bb, 5, 1, "div", 7), $s(13, "div", 8), $s(14, "p"), co(15, " Besoins Trait\xe9s: 0"), Zs(), $s(16, "p"), co(17, " Sans r\xe9actions: 0"), Zs(), Zs(), $s(18, "div", 2), $s(19, "a", 9), co(20, "Voir les besoins"), Zs(), Zs(), Zs(), Zs(), $s(21, "div", 10), Ds(22, $b, 4, 1, "p", 11), $s(23, "a", 12), co(24, "Voir toutes les plaintes"), Zs(), Zs(), Zs(), Zs()), 2 & t && (Hs("ngIf", e.user), Oi(3), Hs("ngIf", e.households), Oi(2), Hs("ngIf", e.complaints), Oi(7), Hs("ngIf", e.needs), Oi(10), Hs("ngIf", e.complaints))
      },
      directives: [nu, If],
      styles: [""]
    }), t
  })();

  function qb(t, e) {
    if (1 & t && ($s(0, "tr"), $s(1, "td"), co(2), Zs(), $s(3, "td"), co(4), Zs(), $s(5, "td"), co(6), Zs(), $s(7, "td"), $s(8, "a", 2), co(9, "Voir detail"), Zs(), Zs(), Zs()), 2 & t) {
      const t = e.$implicit;
      Oi(2), uo(t.household), Oi(2), uo(t.association), Oi(2), uo(t.cellPhone), Oi(2), to("routerLink", "view/", t.idhousehold, "")
    }
  }
  let Gb = (() => {
    class t {
      constructor(t) {
        this.householdsService = t
      }
      ngOnInit() {
        this.getHouseholds()
      }
      getHouseholds() {
        this.householdsService.association().subscribe(t => this.households = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Cv))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-households-association"]
      ],
      decls: 6,
      vars: 2,
      consts: [
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "h3"), co(1), Zs(), $s(2, "table", 0), qs(3, "thead"), $s(4, "tbody"), Ds(5, qb, 10, 4, "tr", 1), Zs(), Zs()), 2 & t && (Oi(1), ho(" Liste des M\xe9nages(", e.households ? e.households.length : 0, ")"), Oi(4), Hs("ngForOf", e.households))
      },
      directives: [tu, If],
      styles: [""]
    }), t
  })();

  function Wb(t, e) {
    if (1 & t && ($s(0, "h3"), co(1), Zs()), 2 & t) {
      const t = Xs();
      Oi(1), ho(" Liste des besoins (", t.needs.length, ")")
    }
  }

  function Kb(t, e) {
    if (1 & t && ($s(0, "tr"), $s(1, "td"), co(2), Zs(), $s(3, "td"), co(4), Zs(), $s(5, "td"), co(6), Zs(), $s(7, "td"), $s(8, "a", 3), co(9, "voir detail"), Zs(), Zs(), Zs()), 2 & t) {
      const t = e.$implicit,
        n = Xs();
      Oi(2), uo(t.need), Oi(2), uo(n.getStatus(t.status)), Oi(2), uo(t.needDate), Oi(2), to("routerLink", "/townhalls/needs/view/", t.idneed, "")
    }
  }
  let Yb = (() => {
    class t {
      constructor(t) {
        this.needsService = t
      }
      ngOnInit() {}
      getNeeds() {
        this.needsService.association().subscribe(t => this.needs = t)
      }
      getStatus(t) {
        return {
          0: "NON PUBLI\xc9",
          1: "PUBLI\xc9",
          2: "ANNUL\xc9E"
        } [t]
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Pv))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-needs-association"]
      ],
      decls: 4,
      vars: 2,
      consts: [
        [4, "ngIf"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Ds(0, Wb, 2, 1, "h3", 0), $s(1, "table", 1), $s(2, "tbody"), Ds(3, Kb, 10, 4, "tr", 2), Zs(), Zs()), 2 & t && (Hs("ngIf", e.needs), Oi(3), Hs("ngForOf", e.needs))
      },
      directives: [nu, tu, If],
      styles: [""]
    }), t
  })();

  function Jb(t, e) {
    if (1 & t) {
      const t = Gs();
      $s(0, "tr", 7), Ys("click", (function () {
        Qe(t);
        const n = e.$implicit;
        return Xs(2).onSelected(n)
      })), $s(1, "td"), co(2), Zs(), $s(3, "td"), co(4), Zs(), $s(5, "td"), co(6), Zs(), Zs()
    }
    if (2 & t) {
      const t = e.$implicit,
        n = Xs(2);
      Oi(2), ho("", n.textLimit(t.complaint), "..."), Oi(2), uo(t.household), Oi(2), uo(t.complaintDate)
    }
  }

  function Qb(t, e) {
    if (1 & t && ($s(0, "div", 1), $s(1, "div", 2), $s(2, "h3"), co(3, "Liste de plaintes"), Zs(), $s(4, "div", 3), co(5, " Clique sur la ligne de la plainte pour voir les details "), Zs(), qs(6, "br"), $s(7, "table", 4), $s(8, "tbody"), Ds(9, Jb, 7, 3, "tr", 5), Zs(), Zs(), Zs(), $s(10, "div", 6), qs(11, "router-outlet"), Zs(), Zs()), 2 & t) {
      const t = Xs();
      Oi(9), Hs("ngForOf", t.complaints)
    }
  }
  let Xb = (() => {
    class t {
      constructor(t, e, n) {
        this.complaintsService = t, this.activatedRoute = e, this.router = n
      }
      ngOnInit() {
        this.getComplaints()
      }
      getComplaints() {
        this.complaintsService.association().subscribe(t => this.complaints = t)
      }
      onSelected(t) {
        this.router.navigate([t.idcomplaint], {
          relativeTo: this.activatedRoute
        })
      }
      textLimit(t) {
        return t.substr(0, 20)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Ev), js(bp), js(Lf))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-complaints-association"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        ["class", "row", 4, "ngIf"],
        [1, "row"],
        [1, "col-lg-8"],
        [1, "alert", "alert-warning"],
        [1, "table"],
        [3, "click", 4, "ngFor", "ngForOf"],
        [1, "col-lg-4"],
        [3, "click"]
      ],
      template: function (t, e) {
        1 & t && Ds(0, Qb, 12, 1, "div", 0), 2 & t && Hs("ngIf", e.complaints)
      },
      directives: [nu, tu, Ff],
      styles: [""]
    }), t
  })();

  function tw(t, e) {
    if (1 & t && ($s(0, "tr"), $s(1, "td"), co(2), Zs(), $s(3, "td"), co(4), Oa(5, "date"), Zs(), $s(6, "td"), $s(7, "a", 6), co(8, "Voir detail"), Zs(), Zs(), Zs()), 2 & t) {
      const t = e.$implicit;
      Oi(2), uo(t.need), Oi(2), ho(" ", Ra(5, 3, t.needDate, "medium"), " "), Oi(3), to("routerLink", "/association/needs/view/", t.idneed, "")
    }
  }

  function ew(t, e) {
    if (1 & t && ($s(0, "div"), $s(1, "h3"), co(2), Zs(), $s(3, "nav", 1), $s(4, "ol", 2), $s(5, "li", 3), $s(6, "a", 4), co(7, "Tableau de bord"), Zs(), Zs(), $s(8, "li", 3), $s(9, "a", 5), co(10, "M\xe9nages"), Zs(), Zs(), $s(11, "li", 3), $s(12, "a", 6), co(13), Zs(), Zs(), $s(14, "li", 7), co(15, "Appels d'offre"), Zs(), Zs(), Zs(), $s(16, "div", 8), $s(17, "table", 9), $s(18, "tbody"), Ds(19, tw, 9, 6, "tr", 0), Zs(), Zs(), Zs(), Zs()), 2 & t) {
      const t = e.$implicit,
        n = Xs();
      Oi(2), ho("Besoins de ", t.household, ""), Oi(10), to("routerLink", "/association/household/view/", t.idhousehold, ""), Oi(1), uo(t.household), Oi(6), Hs("ngForOf", n.needs)
    }
  }
  let nw = (() => {
    class t {
      constructor(t, e, n) {
        this.householdsService = t, this.needsService = e, this.ar = n
      }
      ngOnInit() {
        this.id = this.ar.snapshot.params.id, this.getHousehold(this.id), this.getNeeds(this.id)
      }
      getHousehold(t) {
        this.householdsService.getHouseHold(t).subscribe(t => this.household = t)
      }
      getNeeds(t) {
        this.needsService.household(t).subscribe(t => this.needs = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Cv), js(Pv), js(bp))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-needs-household"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        [4, "ngFor", "ngForOf"],
        ["aria-label", "breadcrumb"],
        [1, "breadcrumb"],
        [1, "breadcrumb-item"],
        ["routerLink", "/association/dashboard"],
        ["routerLink", "/association/households"],
        [3, "routerLink"],
        ["aria-current", "page", 1, "breadcrumb-item", "active"],
        [1, "table-responsive"],
        [1, "table", "table-striped"]
      ],
      template: function (t, e) {
        1 & t && Ds(0, ew, 20, 4, "div", 0), 2 & t && Hs("ngForOf", e.household)
      },
      directives: [tu, If],
      pipes: [ou],
      styles: [""]
    }), t
  })();
  const iw = function (t, e) {
    return {
      "alert-success": t,
      "alert-danger": e
    }
  };

  function rw(t, e) {
    if (1 & t && ($s(0, "div", 39), co(1), Zs()), 2 & t) {
      const t = Xs(2);
      Hs("ngClass", La(3, iw, t.successMessage, t.errorMessage)), Oi(1), po(" ", t.errorMessage, " ", t.successMessage, " ")
    }
  }

  function sw(t, e) {
    if (1 & t && ($s(0, "option", 40), co(1), Zs()), 2 & t) {
      const t = e.$implicit;
      Hs("value", e.index), Oi(1), uo(t)
    }
  }

  function ow(t, e) {
    if (1 & t && ($s(0, "option", 40), co(1), Zs()), 2 & t) {
      const t = e.$implicit;
      Hs("value", t), Oi(1), uo(t)
    }
  }

  function aw(t, e) {
    if (1 & t) {
      const t = Gs();
      $s(0, "div"), $s(1, "nav", 1), $s(2, "ol", 2), $s(3, "li", 3), $s(4, "a", 4), co(5, "Tableau de bord"), Zs(), Zs(), $s(6, "li", 3), $s(7, "a", 5), co(8, "M\xe9nages"), Zs(), Zs(), $s(9, "li", 3), $s(10, "a", 6), co(11), Zs(), Zs(), $s(12, "li", 7), co(13, "Mettre \xe0 jour"), Zs(), Zs(), Zs(), $s(14, "div", 8), $s(15, "div", 9), $s(16, "h3", 10), $s(17, "small"), co(18, "Mise \xe0 jour du m\xe9nage"), Zs(), qs(19, "br"), co(20), Zs(), Ds(21, rw, 2, 6, "div", 11), $s(22, "form", 12), Ys("ngSubmit", (function () {
        return Qe(t), Xs().onSubmit()
      })), $s(23, "div", 13), $s(24, "div", 14), $s(25, "label", 15), co(26, "Nom et Pr\xe9noms"), Zs(), $s(27, "input", 16), Ys("ngModelChange", (function (n) {
        return Qe(t), e.$implicit.household = n
      })), Zs(), Zs(), $s(28, "div", 17), $s(29, "label", 15), co(30, "Date de naissance"), Zs(), $s(31, "input", 18), Ys("ngModelChange", (function (n) {
        return Qe(t), e.$implicit.birthDate = n
      })), Zs(), Zs(), Zs(), $s(32, "div", 13), $s(33, "div", 17), $s(34, "label", 15), co(35, "Taille de la famille"), Zs(), $s(36, "input", 19), Ys("ngModelChange", (function (n) {
        return Qe(t), e.$implicit.familySize = n
      })), Zs(), Zs(), $s(37, "div", 14), $s(38, "label", 15), co(39, "Etes-vous propri\xe9taire ?"), Zs(), $s(40, "select", 20), Ys("ngModelChange", (function (n) {
        return Qe(t), e.$implicit.owner = n
      })), $s(41, "option", 21), co(42), Zs(), Ds(43, sw, 2, 2, "option", 22), Zs(), Zs(), Zs(), $s(44, "h5"), co(45, "Vous \xeates :"), Zs(), $s(46, "div", 13), $s(47, "div", 23), $s(48, "div", 24), $s(49, "input", 25), Ys("ngModelChange", (function (n) {
        return Qe(t), e.$implicit.sex = n
      })), Zs(), $s(50, "label", 26), co(51, "Homme"), Zs(), Zs(), $s(52, "div", 24), $s(53, "input", 27), Ys("ngModelChange", (function (n) {
        return Qe(t), e.$implicit.sex = n
      })), Zs(), $s(54, "label", 28), co(55, "Femme"), Zs(), Zs(), Zs(), $s(56, "div", 23), $s(57, "div", 29), $s(58, "input", 30), Ys("ngModelChange", (function (n) {
        return Qe(t), e.$implicit.familyChief = n
      })), Zs(), $s(59, "label", 31), co(60, "Chef de famille ?"), Zs(), Zs(), Zs(), Zs(), $s(61, "div", 32), $s(62, "label", 15), co(63, "Poste dans l'association"), Zs(), $s(64, "select", 33), Ys("ngModelChange", (function (n) {
        return Qe(t), e.$implicit.role = n
      })), $s(65, "option", 21), co(66), Zs(), Ds(67, ow, 2, 2, "option", 22), Zs(), Zs(), $s(68, "div", 13), $s(69, "div", 17), $s(70, "label", 34), co(71, "T\xe9l\xe9phone Mobile"), Zs(), $s(72, "input", 35), Ys("ngModelChange", (function (n) {
        return Qe(t), e.$implicit.cellPhone = n
      })), Zs(), Zs(), $s(73, "div", 14), $s(74, "label", 36), co(75, "E-mail (Facultative)"), Zs(), $s(76, "input", 37), Ys("ngModelChange", (function (n) {
        return Qe(t), e.$implicit.mail = n
      })), Zs(), Zs(), Zs(), $s(77, "div", 32), $s(78, "button", 38), co(79, "METTRE \xc0 JOUR"), Zs(), Zs(), Zs(), Zs(), Zs(), Zs()
    }
    if (2 & t) {
      const t = e.$implicit,
        n = Xs();
      Oi(10), to("routerLink", "/association/households/view/", t.idhousehold, ""), Oi(1), uo(t.household), Oi(9), ho(" ", t.household, " "), Oi(1), Hs("ngIf", n.successMessage && !n.errorMessage || n.errorMessage && !n.successMessage), Oi(1), Hs("formGroup", n.houseForm), Oi(5), Hs("ngModel", t.household), Oi(4), Hs("ngModel", t.birthDate), Oi(5), Hs("ngModel", t.familySize), Oi(4), Hs("ngModel", t.owner), Oi(1), Hs("value", t.owner), Oi(1), uo(n.getOwner(t.owner)), Oi(1), Hs("ngForOf", n.owners), Oi(6), Hs("value", 1)("ngModel", t.sex)("checked", t.sex), Oi(4), Hs("value", 0)("ngModel", t.sex)("checked", t.sex), Oi(5), Hs("value", 1)("ngModel", t.familyChief), Oi(6), Hs("ngModel", t.role), Oi(1), Hs("value", t.role), Oi(1), uo(t.role), Oi(1), Hs("ngForOf", n.roles), Oi(5), Hs("ngModel", t.cellPhone), Oi(4), Hs("ngModel", t.mail), Oi(2), Hs("disabled", !n.houseForm.valid)("disabled", !n.houseForm.valid)
    }
  }

  function lw(t, e) {
    if (1 & t) {
      const t = Gs();
      $s(0, "div"), $s(1, "nav", 1), $s(2, "ol", 2), $s(3, "li", 3), $s(4, "a", 4), co(5, "Tableau de bord"), Zs(), Zs(), $s(6, "li", 3), $s(7, "a", 5), co(8, "M\xe9nages"), Zs(), Zs(), $s(9, "li", 3), $s(10, "a", 6), co(11), Zs(), Zs(), $s(12, "li", 7), co(13, "Message aux fournisseurs"), Zs(), Zs(), Zs(), $s(14, "div", 8), $s(15, "div", 9), $s(16, "h3", 10), $s(17, "small"), co(18, "Message aux fournisseurs"), Zs(), qs(19, "br"), co(20), Zs(), $s(21, "form", 11), Ys("ngSubmit", (function () {
        return Qe(t), Xs().onSubmit()
      })), $s(22, "div", 12), $s(23, "label", 13), co(24, "Votre Message"), Zs(), qs(25, "textarea", 14), Zs(), $s(26, "div", 12), $s(27, "button", 15), co(28, "Enr\xe9gistrer"), Zs(), Zs(), Zs(), Zs(), Zs(), Zs()
    }
    if (2 & t) {
      const t = e.$implicit,
        n = Xs();
      Oi(10), to("routerLink", "/association/households/view/", t.idhousehold, ""), Oi(1), uo(t.household), Oi(9), ho(" ", t.household, " "), Oi(1), Hs("formGroup", n.complaintForm), Oi(6), Hs("disabled", !n.complaintForm.valid)
    }
  }
  const cw = [{
    path: "association",
    component: zb,
    canActivate: [O_],
    children: [{
      path: "dashboard",
      component: Zb
    }, {
      path: "households",
      component: ry,
      children: [{
        path: "",
        component: Gb
      }, {
        path: "add",
        component: py
      }, {
        path: "address/:id",
        component: Hy
      }, {
        path: "update/:id",
        component: (() => {
          class t {
            constructor(t, e, n, i) {
              this.fb = t, this.ar = e, this.router = n, this.householdsService = i, this.roles = ["Pr\xe9sident", " Vice-pr\xe9sident", "S\xe9cr\xe9taire", "S\xe9cr\xe9taire-adjoint", "Tr\xe9sorier", "Tr\xe9sorier-adjoint", "Contr\xf4leur", "Membre"], this.owners = ["Locataire", "Propri\xe9taire", "Autre"]
            }
            ngOnInit() {
              this.id = this.ar.snapshot.params.id, this.getHousehold(this.id), this.createForm()
            }
            getHousehold(t) {
              this.householdsService.getHouseHold(t).subscribe(t => this.household = t)
            }
            createForm() {
              this.houseForm = this.fb.group({
                idhousehold: [this.id, Gm.required],
                household: ["", Gm.required],
                birthDate: ["", Gm.required],
                sex: ["", Gm.required],
                familyChief: [""],
                familySize: ["", Gm.required],
                role: ["", Gm.required],
                owner: ["", Gm.required],
                cellPhone: ["", Gm.required],
                mail: [""]
              })
            }
            onSubmit() {
              this.householdsService.putHouseHold(this.houseForm.value).subscribe(t => this.router.navigate(["/association/households/view/" + this.id]), t => this.errorMessage = t.message)
            }
            getOwner(t) {
              return this.owners[t]
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(js(Kg), js(bp), js(Lf), js(Cv))
          }, t.\u0275cmp = ge({
            type: t,
            selectors: [
              ["app-households-update"]
            ],
            decls: 1,
            vars: 1,
            consts: [
              [4, "ngFor", "ngForOf"],
              ["aria-label", "breadcrumb"],
              [1, "breadcrumb"],
              [1, "breadcrumb-item"],
              ["routerLink", "/association/dashbord"],
              ["routerLink", "/association/households/"],
              [3, "routerLink"],
              ["aria-current", "page", 1, "breadcrumb-item", "active"],
              [1, "row", "justify-content-center"],
              [1, "col-lg-7"],
              [1, "text-center"],
              ["class", "alert", 3, "ngClass", 4, "ngIf"],
              [3, "formGroup", "ngSubmit"],
              [1, "form-row"],
              [1, "form-group", "col-lg-7"],
              ["for", ""],
              ["type", "text", "formControlName", "household", "name", "household", 1, "form-control", 3, "ngModel", "ngModelChange"],
              [1, "form-group", "col-lg-5"],
              ["type", "date", "formControlName", "birthDate", "name", "birthDay", 1, "form-control", 3, "ngModel", "ngModelChange"],
              ["type", "number", "formControlName", "familySize", "name", "familySize", 1, "form-control", 3, "ngModel", "ngModelChange"],
              ["name", "owner", "id", "owner", "formControlName", "owner", 1, "form-control", 3, "ngModel", "ngModelChange"],
              ["selected", "", 3, "value"],
              [3, "value", 4, "ngFor", "ngForOf"],
              [1, "form-group", "col-lg-6"],
              [1, "form-check", "form-check-inline"],
              ["type", "radio", "formControlName", "sex", "name", "sex", "id", "sex1", 1, "form-check-input", 3, "value", "ngModel", "checked", "ngModelChange"],
              ["for", "sex1", 1, "form-check-label"],
              ["type", "radio", "formControlName", "sex", "name", "sex", "id", "sex2", 1, "form-check-input", 3, "value", "ngModel", "checked", "ngModelChange"],
              ["for", "sex2", 1, "form-check-label"],
              [1, "form-check"],
              ["type", "checkbox", "id", "familyChief", "formControlName", "familyChief", "checked", "h.familyChief==1", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"],
              ["for", "familyChief", 1, "form-check-label"],
              [1, "form-group"],
              ["name", "role", "id", "role", "formControlName", "role", 1, "form-control", 3, "ngModel", "ngModelChange"],
              ["for", "cellPhone"],
              ["type", "tel", "formControlName", "cellPhone", "name", "cellPhone", 1, "form-control", 3, "ngModel", "ngModelChange"],
              ["for", "mail"],
              ["type", "email", "formControlName", "mail", "name", "mail", 1, "form-control", 3, "ngModel", "ngModelChange"],
              ["type", "submit", 1, "bouton", "btn-block", 3, "disabled"],
              [1, "alert", 3, "ngClass"],
              [3, "value"]
            ],
            template: function (t, e) {
              1 & t && Ds(0, aw, 80, 28, "div", 0), 2 & t && Hs("ngForOf", e.household)
            },
            directives: [tu, If, nu, Rg, Hm, zg, Nm, Um, Zg, tg, hg, dg, gg, ig, Im, Qc],
            styles: [""]
          }), t
        })()
      }, {
        path: "view/:id",
        component: gy,
        children: [{
          path: "",
          component: nw,
          outlet: "needOutlet"
        }]
      }]
    }, {
      path: "needs",
      component: vy,
      children: [{
        path: "",
        component: Yb
      }, {
        path: "add/:id",
        component: wy
      }, {
        path: "household/:id",
        component: nw
      }, {
        path: "view/:id",
        component: Cy,
        children: [{
          path: "",
          component: Mb,
          outlet: "proposalOutlet"
        }]
      }]
    }, {
      path: "complaints",
      component: j_,
      children: [{
        path: "add/:id",
        component: (() => {
          class t {
            constructor(t, e, n, i, r) {
              this.complaintsService = t, this.householdsService = e, this.fb = n, this.activatedRoute = i, this.router = r
            }
            ngOnInit() {
              this.householdId = this.activatedRoute.snapshot.params.id, this.getHousehold(this.householdId), this.createForm()
            }
            getHousehold(t) {
              this.householdsService.getHouseHold(t).subscribe(t => {
                this.household = t
              }, t => {
                console.log(t)
              })
            }
            createForm() {
              this.complaintForm = this.fb.group({
                householdId: [this.householdId, Gm.required],
                complaint: ["", Gm.required]
              })
            }
            onSubmit() {
              this.complaintsService.set(this.complaintForm.value).subscribe(t => t)
            }
          }
          return t.\u0275fac = function (e) {
            return new(e || t)(js(Ev), js(Cv), js(Kg), js(bp), js(Lf))
          }, t.\u0275cmp = ge({
            type: t,
            selectors: [
              ["app-complaints-add"]
            ],
            decls: 1,
            vars: 1,
            consts: [
              [4, "ngFor", "ngForOf"],
              ["aria-label", "breadcrumb"],
              [1, "breadcrumb"],
              [1, "breadcrumb-item"],
              ["routerLink", "/association/dashbord"],
              ["routerLink", "/association/households/"],
              [3, "routerLink"],
              ["aria-current", "page", 1, "breadcrumb-item", "active"],
              [1, "row", "justify-content-center"],
              [1, "col-lg-6"],
              [1, "text-center"],
              [3, "formGroup", "ngSubmit"],
              [1, "form-group"],
              ["for", "complaint"],
              ["formControlName", "complaint", "name", "complaint", "id", "complaint", 1, "form-control"],
              ["type", "submit", 1, "bouton", "btn-block", 3, "disabled"]
            ],
            template: function (t, e) {
              1 & t && Ds(0, lw, 29, 5, "div", 0), 2 & t && Hs("ngForOf", e.household)
            },
            directives: [tu, If, Rg, Hm, zg, Nm, Um, Zg],
            styles: [""]
          }), t
        })()
      }, {
        path: "",
        component: Xb,
        children: [{
          path: ":id",
          component: Z_
        }]
      }]
    }]
  }];
  let uw = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [qf.forRoot(cw)], qf
      ]
    }), t
  })(), hw = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [cu, qf, Yg, Sh, uw, m_, Db, Fb]
      ]
    }), t
  })(), dw = (() => {
    class t {
      constructor(t) {
        this.authService = t
      }
      ngOnInit() {}
      sidebar() {
        this.status = !this.status
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Qg))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-suppliers-main"]
      ],
      decls: 42,
      vars: 2,
      consts: [
        [1, "header"],
        [1, "toggle-btn", 3, "click"],
        ["id", "sidebar", 3, "ngClass"],
        [1, "sidebar-sticky"],
        [1, "nav", "flex-column"],
        [1, "nav-item"],
        ["routerLink", "/supplier/dashboard", "routerLinkActive", "active", 1, "nav-link"],
        ["routerLink", "/supplier/needs", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "bar-chart-2"],
        ["routerLink", "/supplier/proposals", "routerLinkActive", "active", 1, "nav-link"],
        ["routerLink", "/supplier/complaints", "routerLinkActive", "active", 1, "nav-link"],
        [1, "sidebar-heading", "d-flex", "justify-content-between", "align-items-center", "px-3", "mt-4", "mb-1", "text-muted"],
        ["href", "#", "aria-label", "Add a new report", 1, "d-flex", "align-items-center", "text-muted"],
        ["data-feather", "plus-circle"],
        [1, "nav", "flex-column", "mb-2"],
        ["routerLink", "/suppliers/password", "routerLinkActive", "active", 1, "nav-link"],
        ["data-feather", "file-text"],
        [1, "nav-link", 3, "click"],
        ["id", "main", 3, "ngClass"],
        [1, "container-fluid"],
        ["role", "main"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "header", 0), $s(1, "div", 1), Ys("click", (function () {
          return e.sidebar()
        })), qs(2, "span"), qs(3, "span"), qs(4, "span"), Zs(), Zs(), $s(5, "div", 2), $s(6, "nav"), $s(7, "div", 3), $s(8, "ul", 4), $s(9, "li", 5), $s(10, "a", 6), co(11, " Tableau de Bord "), Zs(), Zs(), $s(12, "li", 5), $s(13, "a", 7), qs(14, "span", 8), co(15, " Appels d'offre "), Zs(), Zs(), $s(16, "li", 5), $s(17, "a", 9), qs(18, "span", 8), co(19, " Mes propositions "), Zs(), Zs(), $s(20, "li", 5), $s(21, "a", 10), qs(22, "span", 8), co(23, " R\xe9actions "), Zs(), Zs(), Zs(), $s(24, "h6", 11), $s(25, "span"), co(26, "Param\xe8trages"), Zs(), $s(27, "a", 12), qs(28, "span", 13), Zs(), Zs(), $s(29, "ul", 14), $s(30, "li", 5), $s(31, "a", 15), qs(32, "span", 16), co(33, " Changer de mot de passe "), Zs(), Zs(), $s(34, "li", 5), $s(35, "a", 17), Ys("click", (function () {
          return e.authService.logoutUser()
        })), qs(36, "span", 16), co(37, " Deconnexion "), Zs(), Zs(), Zs(), Zs(), Zs(), Zs(), $s(38, "div", 18), $s(39, "div", 19), $s(40, "main", 20), qs(41, "router-outlet"), Zs(), Zs(), Zs()), 2 & t && (Oi(5), Hs("ngClass", e.status ? "sidebar-close" : "sidebar-open"), Oi(33), Hs("ngClass", e.status ? "main-yes" : "main-no"))
      },
      directives: [Qc, If, Of, Ff],
      styles: [""]
    }), t
  })();

  function pw(t, e) {
    if (1 & t && ($s(0, "p", 9), $s(1, "span"), co(2, "Salut, "), $s(3, "b"), co(4), Zs(), Zs(), $s(5, "span"), co(6, "Voici ce qui se passe aujourd'hui."), Zs(), Zs()), 2 & t) {
      const t = Xs();
      Oi(4), uo(t.user.name)
    }
  }

  function fw(t, e) {
    if (1 & t && ($s(0, "tr"), $s(1, "td"), co(2), Zs(), $s(3, "td"), co(4), Zs(), $s(5, "td"), $s(6, "a", 10), co(7, "voir detail"), Zs(), Zs(), Zs()), 2 & t) {
      const t = e.$implicit;
      Oi(2), uo(t.need), Oi(2), uo(t.needDate), Oi(2), to("routerLink", "/supplier/proposals/view/", t.idneed, "")
    }
  }
  let mw = (() => {
    class t {
      constructor(t, e, n, i, r, s, o, a) {
        this.authService = t, this.associationsService = e, this.householdsService = n, this.suppliersService = i, this.needsService = r, this.complaintsService = s, this.proposalsService = o, this.router = a
      }
      ngOnInit() {
        this.getUser(), this.getNeeds(), this.getComplaints()
      }
      getUser() {
        this.authService.user().subscribe(t => this.user = t, t => {
          t instanceof oh && 401 === t.status && this.router.navigate(["/login"])
        })
      }
      getComplaints() {
        this.complaintsService.town().subscribe(t => this.complaints = t)
      }
      getNeeds() {
        this.needsService.town().subscribe(t => this.needs = t)
      }
      getProposals() {
        this.proposalsService.myProposals().subscribe(t => this.proposals = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Qg), js(Sv), js(Cv), js(kv), js(Pv), js(Ev), js(Tv), js(Lf))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-suppliers-dashboard"]
      ],
      decls: 26,
      vars: 5,
      consts: [
        ["class", "connected", 4, "ngIf"],
        [1, "row", "enumeration"],
        [1, "col-lg-4"],
        [1, "cadre"],
        [1, "title"],
        [1, "value"],
        [1, "table-responsive"],
        [1, "table"],
        [4, "ngFor", "ngForOf"],
        [1, "connected"],
        [3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && (Ds(0, pw, 7, 1, "p", 0), $s(1, "section", 1), $s(2, "div", 2), $s(3, "div", 3), $s(4, "p", 4), co(5, "Appels d'offres"), Zs(), $s(6, "p", 5), co(7), Zs(), Zs(), Zs(), $s(8, "div", 2), $s(9, "div", 3), $s(10, "p", 4), co(11, "Mes Propositions"), Zs(), $s(12, "p", 5), co(13), Zs(), Zs(), Zs(), $s(14, "div", 2), $s(15, "div", 3), $s(16, "p", 4), co(17, "Plaintes"), Zs(), $s(18, "p", 5), co(19), Zs(), Zs(), Zs(), Zs(), $s(20, "section", 6), $s(21, "h3"), co(22, " Liste des besoins"), Zs(), $s(23, "table", 7), $s(24, "tbody"), Ds(25, fw, 8, 3, "tr", 8), Zs(), Zs(), Zs()), 2 & t && (Hs("ngIf", e.user), Oi(7), uo(e.needs ? e.needs.length : 0), Oi(6), uo(e.proposals ? e.proposals.length : 0), Oi(6), uo(e.complaints ? e.complaints.length : 0), Oi(6), Hs("ngForOf", e.needs))
      },
      directives: [nu, tu, If],
      styles: [""]
    }), t
  })();

  function gw(t, e) {
    if (1 & t && ($s(0, "div"), $s(1, "h4"), co(2), Zs(), $s(3, "p"), co(4), Zs(), qs(5, "hr"), Zs()), 2 & t) {
      const t = e.$implicit;
      Oi(2), uo(t.need), Oi(2), uo(t.description)
    }
  }

  function vw(t, e) {
    if (1 & t && ($s(0, "tr"), $s(1, "td"), co(2), Zs(), $s(3, "td"), co(4), Oa(5, "date"), Zs(), $s(6, "td"), $s(7, "a", 3), co(8, "Faire une proposition"), Zs(), Zs(), Zs()), 2 & t) {
      const t = e.$implicit;
      Oi(2), uo(t.need), Oi(2), uo(Ra(5, 3, t.needDate, "medium")), Oi(3), to("routerLink", "/supplier/proposals/view/", t.idneed, "")
    }
  }
  let _w = (() => {
    class t {
      constructor(t) {
        this.needsService = t
      }
      ngOnInit() {
        this.getNeeds()
      }
      getNeeds() {
        this.needsService.town().subscribe(t => this.needs = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Pv))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-needs-supplier"]
      ],
      decls: 7,
      vars: 3,
      consts: [
        [4, "ngFor", "ngForOf"],
        [1, "table-responsive"],
        [1, "table", "table-striped"],
        [1, "bouton", 3, "routerLink"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "h3"), co(1), Zs(), Ds(2, gw, 6, 2, "div", 0), $s(3, "div", 1), $s(4, "table", 2), $s(5, "tbody"), Ds(6, vw, 9, 6, "tr", 0), Zs(), Zs(), Zs()), 2 & t && (Oi(1), ho("Liste des besoins (", e.needs ? e.needs.length : 0, ")"), Oi(1), Hs("ngForOf", e.needs), Oi(4), Hs("ngForOf", e.needs))
      },
      directives: [tu, If],
      pipes: [ou],
      styles: [""]
    }), t
  })();

  function yw(t, e) {
    if (1 & t && ($s(0, "div", 16), co(1), Zs()), 2 & t) {
      const t = Xs();
      Oi(1), ho(" ", t.successMessage, "")
    }
  }
  let bw = (() => {
    class t {
      constructor(t, e, n, i, r) {
        this.needsService = t, this.proposalsService = e, this.fb = n, this.ar = i, this.router = r
      }
      ngOnInit() {
        this.id = this.ar.snapshot.params.id, this.getNeed(this.id), this.getProposals(this.id), this.createForm()
      }
      getNeed(t) {
        this.needsService.get(t).subscribe(t => this.need = t)
      }
      getProposals(t) {
        this.proposalsService.need(t).subscribe(t => this.proposals = t)
      }
      createForm() {
        this.proposalForm = this.fb.group({
          needId: [this.id, Gm.required],
          price: ["", Gm.required],
          timeLimit: ["", Gm.required],
          detail: ["", Gm.required]
        })
      }
      onSubmit() {
        this.proposalsService.set(this.proposalForm.value).subscribe(t => this.router.navigate(["/supplier/proposals/view/" + this.id]))
      }
      getOwner(t) {
        return ["Locataire", "Propri\xe9taire", "Autre"][t]
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Pv), js(Tv), js(Kg), js(bp), js(Lf))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-proposals-add"]
      ],
      decls: 27,
      vars: 3,
      consts: [
        [1, "text-center"],
        [3, "formGroup", "ngSubmit"],
        ["class", "alert alert-success", 4, "ngIf"],
        [1, "form-row"],
        [1, "form-group", "col-lg-6"],
        ["for", "price"],
        [1, "input-group", "mb-2"],
        ["type", "number", "formControlName", "price", "name", "price", "id", "price", 1, "form-control"],
        [1, "input-group-prepend"],
        [1, "input-group-text"],
        ["for", "timeLimit"],
        ["type", "number", "formControlName", "timeLimit", "name", "timeLimit", "id", "timeLimit", 1, "form-control"],
        [1, "form-group"],
        ["for", "detail"],
        ["formControlName", "detail", "name", "detail", "id", "detail", 1, "form-control"],
        ["type", "submit", 1, "bouton", "btn-block", 3, "disabled"],
        [1, "alert", "alert-success"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "h3", 0), co(1, " Ma Proposition"), Zs(), $s(2, "form", 1), Ys("ngSubmit", (function () {
          return e.onSubmit()
        })), Ds(3, yw, 2, 1, "div", 2), $s(4, "div", 3), $s(5, "div", 4), $s(6, "label", 5), co(7, "Co\xfbt des travaux"), Zs(), $s(8, "div", 6), qs(9, "input", 7), $s(10, "div", 8), $s(11, "div", 9), co(12, "CFA"), Zs(), Zs(), Zs(), Zs(), $s(13, "div", 4), $s(14, "label", 10), co(15, "Duree des travaux"), Zs(), $s(16, "div", 8), qs(17, "input", 11), $s(18, "div", 9), co(19, "Jours"), Zs(), Zs(), Zs(), Zs(), $s(20, "div", 12), $s(21, "label", 13), co(22, "Detail des travaux"), Zs(), qs(23, "textarea", 14), Zs(), $s(24, "div", 12), $s(25, "button", 15), co(26, "Enregistrer"), Zs(), Zs(), Zs()), 2 & t && (Oi(2), Hs("formGroup", e.proposalForm), Oi(1), Hs("ngIf", e.successMessage), Oi(22), Hs("disabled", !e.proposalForm.valid))
      },
      directives: [Rg, Hm, zg, nu, tg, Nm, Um, Zg],
      styles: [""]
    }), t
  })(), ww = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-proposals-main"]
      ],
      decls: 3,
      vars: 0,
      template: function (t, e) {
        1 & t && ($s(0, "h1"), co(1, "Proposition de fournisseur"), Zs(), qs(2, "router-outlet"))
      },
      directives: [Ff],
      styles: [""]
    }), t
  })();

  function xw(t, e) {
    if (1 & t && ($s(0, "tr"), $s(1, "td"), co(2), Zs(), $s(3, "td"), co(4), Zs(), $s(5, "td"), co(6), Oa(7, "date"), Zs(), $s(8, "td"), $s(9, "a"), co(10, "Voir detail"), Zs(), Zs(), Zs()), 2 & t) {
      const t = e.$implicit,
        n = e.index;
      Oi(2), uo(n + 1), Oi(2), uo(t.need), Oi(2), uo(Ra(7, 3, t.proposalDate, "medium"))
    }
  }
  let Sw = (() => {
    class t {
      constructor(t) {
        this.proposalsService = t
      }
      ngOnInit() {
        this.getProposals()
      }
      getProposals() {
        this.proposalsService.myProposals().subscribe(t => this.proposals = t)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Tv))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-proposals-supplier"]
      ],
      decls: 5,
      vars: 1,
      consts: [
        [1, "table-responsive"],
        [1, "table", "table-striped"],
        [4, "ngFor", "ngForOf"]
      ],
      template: function (t, e) {
        1 & t && ($s(0, "h3"), co(1, "Mes propositions"), Zs(), $s(2, "div", 0), $s(3, "table", 1), Ds(4, xw, 11, 6, "tr", 2), Zs(), Zs()), 2 & t && (Oi(4), Hs("ngForOf", e.proposals))
      },
      directives: [tu],
      pipes: [ou],
      styles: [""]
    }), t
  })(), Cw = (() => {
    class t {
      constructor() {}
      ngOnInit() {}
    }
    return t.\u0275fac = function (e) {
      return new(e || t)
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-roadmaps-main"]
      ],
      decls: 2,
      vars: 0,
      template: function (t, e) {
        1 & t && ($s(0, "p"), co(1, "roadmaps-main works!"), Zs())
      },
      styles: [""]
    }), t
  })();

  function kw(t, e) {
    if (1 & t && ($s(0, "div", 1), $s(1, "div", 2), $s(2, "h3"), co(3, "Ma proposition"), Zs(), co(4, " Co\xfbt: "), $s(5, "strong"), co(6), Zs(), qs(7, "br"), co(8, " Dur\xe9e: "), $s(9, "strong"), co(10), Zs(), qs(11, "br"), co(12, "Date: "), $s(13, "strong"), co(14), Oa(15, "date"), Zs(), qs(16, "br"), co(17), Zs(), $s(18, "div", 6), qs(19, "router-outlet", 7), Zs(), Zs()), 2 & t) {
      const t = e.$implicit;
      Oi(6), ho(" ", t.price, " CFA"), Oi(4), ho("", t.timeLimit, " Jours"), Oi(4), uo(Ra(15, 4, t.proposalDate, "medium")), Oi(3), ho("Detail: ", t.detail, " ")
    }
  }

  function Pw(t, e) {
    if (1 & t && ($s(0, "div"), $s(1, "div", 1), $s(2, "div", 2), $s(3, "h4"), co(4, "M\xe9nage"), Zs(), $s(5, "div"), $s(6, "h5"), co(7), Zs(), $s(8, "p"), co(9), qs(10, "br"), co(11), Zs(), Zs(), Zs(), $s(12, "div", 3), $s(13, "h4"), co(14, "Situation du besoin"), Zs(), $s(15, "h5"), co(16), Zs(), $s(17, "p"), co(18), Zs(), Zs(), $s(19, "div", 4), $s(20, "h4"), co(21, "Suivi"), Zs(), co(22), Oa(23, "date"), Zs(), Zs(), Ds(24, kw, 20, 7, "div", 5), Zs()), 2 & t) {
      const t = e.$implicit,
        n = Xs();
      Oi(7), po(" ", t.household, ", ", n.getOwner(t.owner), ""), Oi(2), ho(" ", t.familySize, " Membres "), Oi(2), ho(" (225) ", t.cellPhone, " "), Oi(5), ho(" ", t.need, ""), Oi(2), ho("", t.description, " "), Oi(4), ho(" Cr\xe9\xe9 le ", Ra(23, 8, t.needDate, "medium"), " "), Oi(2), Hs("ngForOf", n.proposal)
    }
  }
  let Ew = (() => {
    class t {
      constructor(t, e, n) {
        this.proposalsService = t, this.needsService = e, this.ar = n
      }
      ngOnInit() {
        this.idNeed = this.ar.snapshot.params.id, this.getNeed(this.idNeed), this.getProposal(this.idNeed)
      }
      getProposal(t) {
        this.proposalsService.myProject(t).subscribe(t => this.proposal = t)
      }
      getNeed(t) {
        this.needsService.get(t).subscribe(t => {
          this.need = t
        }, t => {
          console.log(t)
        })
      }
      getOwner(t) {
        return ["Locataire", "Propri\xe9taire", "Autre"][t]
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(js(Tv), js(Pv), js(bp))
    }, t.\u0275cmp = ge({
      type: t,
      selectors: [
        ["app-proposals-view"]
      ],
      decls: 1,
      vars: 1,
      consts: [
        [4, "ngFor", "ngForOf"],
        [1, "row"],
        [1, "col-lg-4"],
        [1, "col-lg-5"],
        [1, "col-lg-3"],
        ["class", "row", 4, "ngFor", "ngForOf"],
        [1, "col-lg-8"],
        ["name", "roadmapAddOutlet"]
      ],
      template: function (t, e) {
        1 & t && Ds(0, Pw, 25, 11, "div", 0), 2 & t && Hs("ngForOf", e.need)
      },
      directives: [tu, Ff],
      pipes: [ou],
      styles: [""]
    }), t
  })(), Tw = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/roadmaps/", this.options = {
          params: new Ju({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      get(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
      set(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      put(t) {
        return this.http.put(this.baseUrl, t, this.options)
      }
      need(t) {
        return this.http.get(this.baseUrl + "need/" + t, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Xt(lh), Xt(Qg))
    }, t.\u0275prov = mt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })();
  const Lw = function (t, e) {
    return {
      "alert-danger": t,
      "alert-success": e
    }
  };

  function Aw(t, e) {
    if (1 & t) {
      const t = Gs();
      $s(0, "div"), $s(1, "h3"), co(2), Zs(), $s(3, "h4"), co(4, "Ajouter une t\xe2ches"), Zs(), $s(5, "div", 3), co(6), Zs(), $s(7, "form", 4), Ys("ngSubmit", (function () {
        return Qe(t), Xs().onSubmit()
      })), $s(8, "div", 5), $s(9, "input", 6), Ys("ngModelChange", (function (n) {
        return Qe(t), e.$implicit.idproposal = n
      })), Zs(), $s(10, "div", 7), qs(11, "input", 8), Zs(), $s(12, "div", 9), $s(13, "div", 10), qs(14, "input", 11), $s(15, "div", 12), $s(16, "div", 13), co(17, "JOURS"), Zs(), Zs(), Zs(), Zs(), $s(18, "div", 14), $s(19, "button", 15), co(20, "ENR\xc9GISTRER"), Zs(), Zs(), Zs(), Zs(), Zs()
    }
    if (2 & t) {
      const t = e.$implicit,
        n = Xs();
      Oi(2), ho("Plan de travail N\xb0 ", t.idproposal, ""), Oi(3), Hs("ngClass", La(8, Lw, n.errorMessage && !n.successMessage, !n.errorMessage && n.successMessage)), Oi(1), po("", n.errorMessage, " ", n.successMessage, ""), Oi(1), Hs("formGroup", n.roadMapForm), Oi(2), Hs("value", t.idproposal)("ngModel", t.idproposal), Oi(10), Hs("disabled", !n.roadMapForm.valid)
    }
  }

  function Iw(t, e) {
    if (1 & t && ($s(0, "tr"), $s(1, "td"), co(2), Zs(), $s(3, "td"), co(4), Zs(), $s(5, "td"), co(6), Zs(), $s(7, "td"), co(8), Zs(), $s(9, "td"), co(10), Zs(), Zs()), 2 & t) {
      const t = e.$implicit,
        n = e.index;
      Oi(2), uo(n + 1), Oi(2), uo(t.task), Oi(2), ho("", t.duration, " Jour(s)"), Oi(2), uo(t.executed), Oi(2), uo(t.executedDate)
    }
  }
  const Mw = [{
    path: "supplier",
    component: dw,
    canActivate: [O_],
    children: [{
      path: "dashboard",
      component: mw
    }, {
      path: "view",
      component: Fy
    }, {
      path: "needs",
      component: vy,
      children: [{
        path: "",
        component: _w
      }]
    }, {
      path: "proposals",
      component: ww,
      children: [{
        path: "",
        component: Sw
      }, {
        path: "add/:id",
        component: Cy,
        children: [{
          path: "",
          component: bw,
          outlet: "proposalOutlet"
        }]
      }, {
        path: "view/:id",
        component: Ew,
        children: [{
          path: "",
          component: (() => {
            class t {
              constructor(t, e, n, i) {
                this.roadmapsService = t, this.proposalsService = e, this.ar = n, this.fb = i
              }
              ngOnInit() {
                this.idNeed = this.ar.snapshot.params.id, this.getProject(this.idNeed), this.getRoadMaps(this.idNeed), this.createForm()
              }
              getProject(t) {
                this.proposalsService.myProject(t).subscribe(t => {
                  this.proposal = t, this.idProposal = this.proposal.idproposal
                })
              }
              getRoadMaps(t) {
                this.roadmapsService.need(t).subscribe(t => this.roadmaps = t)
              }
              createForm() {
                this.roadMapForm = this.fb.group({
                  proposalId: ["", Gm.required],
                  task: ["", Gm.required],
                  timeLimit: ["", Gm.required]
                })
              }
              onSubmit() {
                this.roadmapsService.set(this.roadMapForm.value).subscribe(t => {
                  this.getRoadMaps(this.idNeed)
                }, t => {
                  t instanceof oh && (this.errorMessage = t.message)
                })
              }
            }
            return t.\u0275fac = function (e) {
              return new(e || t)(js(Tw), js(Tv), js(bp), js(Kg))
            }, t.\u0275cmp = ge({
              type: t,
              selectors: [
                ["app-roadmaps-add"]
              ],
              decls: 7,
              vars: 2,
              consts: [
                [4, "ngFor", "ngForOf"],
                [1, "table-responsive"],
                [1, "table", "table-striped"],
                [1, "alert", 3, "ngClass"],
                [3, "formGroup", "ngSubmit"],
                [1, "form-row"],
                ["type", "hidden", "formControlName", "proposalId", 1, "form-control", 3, "value", "ngModel", "ngModelChange"],
                [1, "col-lg-7"],
                ["type", "text", "formControlName", "task", "placeholder", "Activit\xe9", 1, "form-control"],
                [1, "col-lg-3"],
                [1, "input-group", "mb-2"],
                ["type", "number", "formControlName", "timeLimit", "placeholder", "0", 1, "form-control"],
                [1, "input-group-prepend"],
                [1, "input-group-text"],
                [1, "col-lg-2"],
                ["type", "submit", 1, "bouton", "btn-block", 3, "disabled"]
              ],
              template: function (t, e) {
                1 & t && (Ds(0, Aw, 21, 11, "div", 0), $s(1, "h4"), co(2, "Liste des t\xe2ches \xe0 \xe9ffectuer"), Zs(), $s(3, "div", 1), $s(4, "table", 2), $s(5, "tbody"), Ds(6, Iw, 11, 5, "tr", 0), Zs(), Zs(), Zs()), 2 & t && (Hs("ngForOf", e.proposal), Oi(6), Hs("ngForOf", e.roadmaps))
              },
              directives: [tu, Qc, Rg, Hm, zg, Nm, Um, Zg, tg],
              styles: [""]
            }), t
          })(),
          outlet: "roadmapAddOutlet"
        }]
      }]
    }, {
      path: "roadmaps",
      component: Cw,
      children: [{
        path: "add/:id",
        component: Cy,
        children: [{
          path: "",
          component: bw,
          outlet: "proposalOutlet"
        }]
      }, {
        path: "view/:id",
        component: bw
      }]
    }, {
      path: "complaints",
      component: j_,
      children: [{
        path: "",
        component: fb,
        children: [{
          path: ":id",
          component: Z_
        }]
      }]
    }]
  }];
  let Ow = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [qf.forRoot(Mw)], qf
      ]
    }), t
  })(), Nw = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [cu, qf, Yg, Sh, Ow]
      ]
    }), t
  })(), Rw = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [cu, qf, Sh, Yg]
      ]
    }), t
  })(), Fw = (() => {
    class t {
      constructor(t, e) {
        this.authService = t, this.router = e
      }
      canActivate(t, e) {
        return !(!this.authService.loggedIn() || !this.authService.validity() || (this.router.navigate(["/administrator/dashboard"]), 0))
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Xt(Qg), Xt(Lf))
    }, t.\u0275prov = mt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), Dw = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [cu, qf, Sh, Yg]
      ]
    }), t
  })(), zw = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [cu, qf, Yg, Sh, m_]
      ]
    }), t
  })(), jw = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [cu, qf, Sh, Yg]
      ]
    }), t
  })(), Vw = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [cu, qf, Sh, Yg]
      ]
    }), t
  })(), Uw = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [cu, qf, Sh, Yg]
      ]
    }), t
  })(), Hw = (() => {
    class t {
      constructor(t, e) {
        this.http = t, this.authenticationService = e, this.baseUrl = "https://dashboard.csss-ci.com/server/rest/v1/bankers/", this.options = {
          params: new Ju({
            fromString: "access_token=" + this.authenticationService.getToken()
          })
        }
      }
      gets() {
        return this.http.get(this.baseUrl, this.options)
      }
      get(t) {
        return this.http.get(this.baseUrl + t, this.options)
      }
      set(t) {
        return this.http.post(this.baseUrl, t, this.options)
      }
      put(t) {
        return this.http.put(this.baseUrl, t, this.options)
      }
    }
    return t.\u0275fac = function (e) {
      return new(e || t)(Xt(lh), Xt(Qg))
    }, t.\u0275prov = mt({
      token: t,
      factory: t.\u0275fac,
      providedIn: "root"
    }), t
  })(), Bw = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      imports: [
        [cu, qf, Sh, Yg]
      ]
    }), t
  })(); ! function (t, e, n) {
    "string" != typeof e && (n = e, e = t[wa.LocaleId]), e = e.toLowerCase().replace(/_/g, "-"), _a[e] = t, n && (_a[e][wa.ExtraData] = n)
  }(Em.a, void 0, void 0);
  let $w = (() => {
    class t {}
    return t.\u0275mod = be({
      type: t,
      bootstrap: [im]
    }), t.\u0275inj = gt({
      factory: function (e) {
        return new(e || t)
      },
      providers: [{
        provide: uh,
        useClass: Ch,
        multi: !0
      }, {
        provide: ul,
        useValue: "fr-FR"
      }, Qg, xv, Sv, Cv, kv, Pv, zv, R_, Ev, kb, Tw, Hw, Tw, O_, Fw],
      imports: [
        [Vu, nm, hv, Yy, Rb, hw, zw, jw, Nw, Ky, Rw, Dw, Vw, Uw, Bw, km.register("ngsw-worker.js", {
          enabled: !0
        })]
      ]
    }), t
  })();
  (function () {
    if (pi) throw new Error("Cannot enable prod mode after platform setup.");
    di = !1
  })(), zu().bootstrapModule($w).catch(t => console.error(t))
}, zn8P: function (t, e) {
  function n(t) {
    return Promise.resolve().then((function () {
      var e = new Error("Cannot find module '" + t + "'");
      throw e.code = "MODULE_NOT_FOUND", e
    }))
  }
  n.keys = function () {
    return []
  }, n.resolve = n, t.exports = n, n.id = "zn8P"
}
}, [
  [0, 0]
]]);