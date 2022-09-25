var _ = Object.defineProperty;
var f = (t, r, e) => r in t ? _(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var o = (t, r, e) => (f(t, typeof r != "symbol" ? r + "" : r, e), e);
import { ref as q, watch as a } from "vue";
class p {
  constructor(r, e, s) {
    o(this, "_router");
    o(this, "_queries");
    this._router = r;
    const u = this, n = () => {
      const c = {};
      for (const [i, h] of Object.entries(s))
        u[i] = q(e.query[i] ? e.query[i] : h), a(u[i], () => {
          this._setQuery(this._queries);
        }), c[i] = u[i];
      return c;
    };
    this._queries = n();
  }
  get queries() {
    return this._queries;
  }
  _setQuery(r) {
    this._router.replace({ path: "", query: { ...this._fixQueriesToSet(r) } });
  }
  _fixQueriesToSet(r) {
    const e = { ...r };
    return Object.keys(e).forEach(function(s) {
      e[s].value ? e[s] = e[s].value : delete e[s];
    }), e;
  }
}
export {
  p as SfpService
};
