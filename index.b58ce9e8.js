// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"YaJJs":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "e6ad5f78b58ce9e8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"iwNeP":[function(require,module,exports) {
var _picker = require("./modules/Picker");
const vis = new (0, _picker.Picker)();

},{"./modules/Picker":"jqzOf"}],"jqzOf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Picker", ()=>Picker);
var _enums = require("../constants/enums");
var _common = require("./Common");
var _visualizer = require("./Visualizer");
var _insertion = require("../algos/quadratic/insertion");
var _bubble = require("../algos/quadratic/bubble");
var _selection = require("../algos/quadratic/selection");
var _bitonic = require("../algos/logarithmic/bitonic");
var _bogoSort = require("../algos/weird/bogoSort");
var _quickSort = require("../algos/logarithmic/quickSort");
const DEFAULT_ARRAY_SIZE = 100;
//beyond that size of array it may impact performance
const DANGER_ZONE = 1500;
const DANGER_ZONE_MESSAGE = "Caution: This action may impact performance.";
class Picker extends (0, _common.Common) {
    constructor(n){
        super();
        this.newArrBtn = this.bindElementByClass("newArr");
        this.playBtn = this.bindElementByClass("play");
        this.speed = (0, _enums.VisualizationSpeed).FAST;
        this.n = n !== null && n !== void 0 ? n : DEFAULT_ARRAY_SIZE;
        this.visualizer = new (0, _visualizer.Visualizer)(this.n, this.speed);
        this.algorithm = {
            AlgorithmFunction: (0, _bubble.bubbleSort),
            AlgorithmName: (0, _enums.Algorithms).BUBBLE
        };
        this.addEventListeners();
        this.resetVisualizer();
    }
    addEventListeners() {
        this.addGenNewArrListener();
        this.addPlayBtnListener();
        this.addSortSelectionListener();
        this.addRangeListener();
        this.addResetListener();
        this.addSpeedSelectionListener();
    }
    addSpeedSelectionListener() {
        const select = this.bindElementByClass("speed");
        select.addEventListener("change", this.handleSpeedSelectionChange.bind(this));
    }
    handleSpeedSelectionChange(event) {
        const speed = Number((0, _enums.VisualizationSpeed)[event.target.value]);
        this.speed = speed;
        this.visualizer.setSpeed = speed;
    }
    addRangeListener() {
        const range = this.bindElementByClass("range");
        const rangeP = this.bindElementByClass("rangeInputDescription");
        const danger = this.bindElementByClass("danger");
        range.addEventListener("input", (e)=>{
            if (this.algorithm.AlgorithmName == (0, _enums.Algorithms).BITONIC) {
                this.n = Math.pow(2, Number(range.value));
                rangeP.textContent = String(this.n);
                this.handleRangeInputChangeBitonic(danger);
            } else this.handleRangeInputChange(rangeP, danger, e);
        });
    }
    handleRangeInputChange(rangeP, danger, event) {
        this.resetVisualizer();
        if (this.n >= DANGER_ZONE) danger.textContent = DANGER_ZONE_MESSAGE;
        else danger.textContent = "";
        const val = event.target.value;
        this.n = val;
        rangeP.textContent = val;
        this.visualizer.setNumbersCount = val;
    }
    handleRangeInputChangeBitonic(danger) {
        this.resetVisualizer();
        if (this.n >= DANGER_ZONE) danger.textContent = DANGER_ZONE_MESSAGE;
        else danger.textContent = "";
        this.visualizer.setNumbersCount = this.n;
    }
    addGenNewArrListener() {
        this.newArrBtn.addEventListener("click", this.handleNewArrButtonClick.bind(this));
    }
    handleNewArrButtonClick() {
        if (!this.visualizer.isAlgoRunning) this.visualizer.initializeNewArr();
        else this.displayMessageAtTheTopOfTheScreen(`${this.algorithm.AlgorithmName} sort is currently running`, (0, _enums.Logger).Error);
    }
    resetVisualizer() {
        this.visualizer.animate = function() {};
        this.visualizer.runSortedArray = function() {};
        this.visualizer = new (0, _visualizer.Visualizer)(this.n, this.speed);
    }
    addResetListener() {
        const reset = this.bindElementByClass("reset");
        reset.addEventListener("click", this.handleResetButtonClick.bind(this));
    }
    handleResetButtonClick() {
        this.resetVisualizer();
    }
    addPlayBtnListener() {
        this.playBtn.addEventListener("click", this.handlePlayButtonClick.bind(this));
    }
    handlePlayButtonClick() {
        const copy = [
            ...this.visualizer.getArr
        ];
        const moves = this.algorithm.AlgorithmFunction(copy);
        if (!this.visualizer.isAlgoRunning) this.visualizer.animate(moves, moves[0]);
        else this.displayMessageAtTheTopOfTheScreen(`${this.algorithm.AlgorithmName} sort is currently running`, (0, _enums.Logger).Error);
    }
    addSortSelectionListener() {
        const select = this.bindElementByClass("sorting-algo");
        select.addEventListener("change", this.handleSortSelectionChange.bind(this));
    }
    handleBitonicSortSelect() {
        const range = this.bindElementByClass("range");
        const rangeP = this.bindElementByClass("rangeInputDescription");
        range.max = "11";
        range.min = "4";
        range.value = "4";
        range.step = range.value !== "4" ? String(Number(range.value) * 2) : "1";
        this.n = Number(range.value) * 4;
        this.resetVisualizer();
        rangeP.textContent = String(Number(range.value) * 4);
    }
    handleBogoSortSelect() {
        const range = this.bindElementByClass("range");
        const rangeP = this.bindElementByClass("rangeInputDescription");
        range.max = "10";
        range.min = "4";
        range.value = "4";
        range.step = "1";
        this.n = Number(range.value);
        this.resetVisualizer();
        rangeP.textContent = range.value;
    }
    resetRangeValuesToDefault() {
        const range = this.bindElementByClass("range");
        const rangeP = this.bindElementByClass("rangeInputDescription");
        range.max = "2000";
        range.min = "10";
        range.value = "100";
        range.step = "5";
        this.n = Number(range.value);
        this.resetVisualizer();
        rangeP.textContent = range.value;
    }
    handleSortSelectionChange(event) {
        const sortType = event.target.value;
        this.resetRangeValuesToDefault();
        this.resetVisualizer();
        switch(sortType){
            case (0, _enums.Algorithms).BUBBLE:
                this.setAlgorithmAndName((0, _bubble.bubbleSort), (0, _enums.Algorithms).BUBBLE);
                break;
            case (0, _enums.Algorithms).SELECTION:
                this.setAlgorithmAndName((0, _selection.selectionSort), (0, _enums.Algorithms).SELECTION);
                break;
            case (0, _enums.Algorithms).INSERTION:
                this.setAlgorithmAndName((0, _insertion.insertionSort), (0, _enums.Algorithms).INSERTION);
                break;
            case (0, _enums.Algorithms).BITONIC:
                this.setAlgorithmAndName((0, _bitonic.bitonicSort), (0, _enums.Algorithms).BITONIC);
                this.handleBitonicSortSelect();
                break;
            case (0, _enums.Algorithms).BOGO:
                this.setAlgorithmAndName((0, _bogoSort.bogosort), (0, _enums.Algorithms).BOGO);
                this.handleBogoSortSelect();
                break;
            case (0, _enums.Algorithms).QUICK:
                this.setAlgorithmAndName((0, _quickSort.quickSortWrapper), (0, _enums.Algorithms).QUICK);
                break;
            default:
                this.setAlgorithmAndName((0, _bubble.bubbleSort), (0, _enums.Algorithms).BUBBLE);
        }
    }
    setAlgorithmAndName(algorithmFunction, algorithmName) {
        this.algorithm = {
            AlgorithmFunction: algorithmFunction,
            AlgorithmName: algorithmName
        };
    }
}

},{"./Common":"dMCAR","./Visualizer":"bYpvg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../constants/enums":"7XfrQ","../algos/quadratic/insertion":"hdqPT","../algos/quadratic/bubble":"gvyFg","../algos/quadratic/selection":"jWa54","../algos/logarithmic/bitonic":"av4La","../algos/weird/bogoSort":"dKYpR","../algos/logarithmic/quickSort":"eTllg"}],"dMCAR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Common", ()=>Common);
var _classNames = require("../constants/classNames");
var _enums = require("../constants/enums");
class Common {
    constructor(...elementId){
        this.elementId = this.getElementId(elementId);
    }
    bindElementById(elementToFindById) {
        const element = this.getElementById(elementToFindById);
        if (!element) throw new Error(`Nie znaleziono elementu ${elementToFindById}`);
        return element;
    }
    bindElementByClass(elementToFindByClass) {
        const element = this.querySelector("." + elementToFindByClass);
        if (!element) throw new Error(`Nie znaleziono elementu ${elementToFindByClass}`);
        return element;
    }
    bindElementByClassNoError(elementToFindByClass) {
        return this.querySelector("." + elementToFindByClass);
    }
    changeVisbilityOfGivenElement(element, flag) {
        element === null || element === void 0 || element.classList.toggle((0, _classNames.HIDDEN), !flag);
    }
    bindMultipleElements(elementsTobBind) {
        const elements = this.querySelectorAll("." + elementsTobBind);
        if (!elements) throw new Error(`Nie znaleziono elementu ${elementsTobBind}`);
        return elements;
    }
    displayMessageAtTheTopOfTheScreen(message, status) {
        if (status > 2 || status < 0) throw new Error("Nieprawidłowy status wiadomości, wprowadź wartości z enuma Errors");
        const messageNode = this.bindElementByClass("MESSAGE");
        this.setStyleBasedOnStatus(messageNode, status);
        this.changeVisbilityOfGivenElement(messageNode, true);
        setTimeout(()=>{
            this.changeVisbilityOfGivenElement(messageNode, false);
        }, 1500);
        messageNode.textContent = message;
    }
    // Private methods below...
    getElementId(elementId) {
        if (elementId && elementId[0]) return this.bindElementById(elementId[0]);
        else return undefined;
    }
    getElementById(elementToFindById) {
        return document.getElementById(elementToFindById);
    }
    querySelector(selector) {
        return document.documentElement.querySelector(selector);
    }
    querySelectorAll(selector) {
        return document.querySelectorAll(selector);
    }
    setStyleBasedOnStatus(messageNode, status) {
        switch(status){
            case (0, _enums.Logger).Error:
                messageNode.style.color = "red";
                break;
            case (0, _enums.Logger).Message:
                messageNode.style.color = "green";
                break;
            case (0, _enums.Logger).Warn:
                messageNode.style.color = "orange";
                break;
        }
    }
}

},{"../constants/classNames":"fj5bP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../constants/enums":"7XfrQ"}],"fj5bP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HIDDEN", ()=>HIDDEN);
const HIDDEN = "hidden";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7XfrQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VisualizationSpeed", ()=>VisualizationSpeed);
parcelHelpers.export(exports, "MoveType", ()=>MoveType);
parcelHelpers.export(exports, "Logger", ()=>Logger);
parcelHelpers.export(exports, "Algorithms", ()=>Algorithms);
var VisualizationSpeed;
(function(VisualizationSpeed) {
    VisualizationSpeed[VisualizationSpeed["ULTRA_FAST"] = 4] = "ULTRA_FAST";
    VisualizationSpeed[VisualizationSpeed["FASTER"] = 8] = "FASTER";
    VisualizationSpeed[VisualizationSpeed["FAST"] = 15] = "FAST";
    VisualizationSpeed[VisualizationSpeed["AVERAGE"] = 20] = "AVERAGE";
    VisualizationSpeed[VisualizationSpeed["SLOW"] = 30] = "SLOW";
    VisualizationSpeed[VisualizationSpeed["SLOWER"] = 50] = "SLOWER";
    VisualizationSpeed[VisualizationSpeed["ULTRA_SLOW"] = 250] = "ULTRA_SLOW";
})(VisualizationSpeed || (VisualizationSpeed = {}));
var MoveType;
(function(MoveType) {
    MoveType["swap"] = "swap";
    MoveType["comp"] = "comparrison";
})(MoveType || (MoveType = {}));
var Logger;
(function(Logger) {
    Logger[Logger["Message"] = 0] = "Message";
    Logger[Logger["Warn"] = 1] = "Warn";
    Logger[Logger["Error"] = 2] = "Error";
})(Logger || (Logger = {}));
var Algorithms;
(function(Algorithms) {
    Algorithms["BUBBLE"] = "bubble";
    Algorithms["SELECTION"] = "selection";
    Algorithms["INSERTION"] = "insertion";
    Algorithms["QUICK"] = "quick";
    Algorithms["MERGE"] = "merge";
    Algorithms["HEAP"] = "heap";
    Algorithms["SHELL"] = "shell";
    Algorithms["BOGO"] = "bogo";
    Algorithms["COUNTING"] = "counting";
    Algorithms["RADIX"] = "radix";
    Algorithms["BUCKET"] = "bucket";
    Algorithms["COMB"] = "comb";
    Algorithms["PIGEONHOLE"] = "pigeonhole";
    Algorithms["CYCLE"] = "cycle";
    Algorithms["GNOME"] = "gnome";
    Algorithms["BITONIC"] = "bitonic";
})(Algorithms || (Algorithms = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bYpvg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Visualizer", ()=>Visualizer);
var _enums = require("../constants/enums");
var _common = require("./Common");
var _calulateDur = require("../helpers/calulateDur");
class Visualizer extends (0, _common.Common) {
    constructor(n, speed){
        super("visualization");
        this.audioContext = new AudioContext();
        this.arr = [];
        this.n = n;
        this.speed = speed;
        this.isRunningAlgorithm = false;
        this.initializeNewArr();
    }
    get getArr() {
        return this.arr;
    }
    get isAlgoRunning() {
        return this.isRunningAlgorithm;
    }
    set setNumbersCount(value) {
        this.n = value;
        this.arr = [];
        this.initializeNewArr();
    }
    set setSpeed(speed) {
        this.speed = speed;
    }
    visualizeNewArr(sorter) {
        sorter(this.arr);
        this.clearArrayView();
        this.createArrayView();
    }
    initializeNewArr() {
        this.clearArrayView();
        this.populateRandomArray();
        this.initializeArrayView();
    }
    createNewArr() {
        this.clearArrayView();
        this.populateRandomArray();
        this.createArrayView();
    }
    animate(moves, prevMove) {
        if (moves.length === 0) {
            this.createArrayView();
            this.runSortedArray(0);
            this.isRunningAlgorithm = false;
            return;
        }
        this.isRunningAlgorithm = true;
        const move = moves.shift();
        const [i, j] = move === null || move === void 0 ? void 0 : move.indices;
        if (!(move === null || move === void 0 ? void 0 : move.type) || (move === null || move === void 0 ? void 0 : move.type) === (0, _enums.MoveType).swap) [this.arr[i], this.arr[j]] = [
            this.arr[j],
            this.arr[i]
        ];
        this.playSoundOnStep(i);
        this.playSoundOnStep(j);
        this.createArrayView(move, prevMove);
        setTimeout(()=>{
            this.animate(moves, move);
        }, this.speed);
    }
    populateRandomArray() {
        for(let i = 0; i < this.n; i++)this.arr[i] = Math.random();
    }
    clearArrayView() {
        this.elementId.innerHTML = "";
    }
    runSortedArray(i) {
        if (i > this.arr.length) return;
        this.playSoundOnStep(i);
        this.iterateOverSortedArray(i);
        setTimeout(()=>{
            this.runSortedArray(i + 1);
        }, this.speed);
    }
    setColorOfWholeArray() {
        for(let i = 0; i < this.arr.length; i++){
            const bar = this.bindElementByClass(`bar${i}`);
            bar.style.backgroundColor = "#3498db";
        }
    }
    iterateOverSortedArray(i) {
        if (i >= this.arr.length) {
            this.setColorOfWholeArray();
            return;
        }
        const bar = this.bindElementByClassNoError(`bar${i}`);
        bar.style.backgroundColor = "green";
    }
    playSoundOnStep(step) {
        const fastest = this.speed == (0, _enums.VisualizationSpeed).FASTER || this.speed == (0, _enums.VisualizationSpeed).ULTRA_FAST;
        const avg = this.speed == (0, _enums.VisualizationSpeed).FAST || this.speed == (0, _enums.VisualizationSpeed).AVERAGE;
        const slow = this.speed == (0, _enums.VisualizationSpeed).SLOW || this.speed == (0, _enums.VisualizationSpeed).SLOWER;
        const slowest = this.speed === (0, _enums.VisualizationSpeed).ULTRA_SLOW;
        if (fastest && step % 5 === 0) this.playSound(200 + this.arr[step] * 1500);
        if (avg && step % 3 === 0) this.playSound(200 + this.arr[step] * 1500);
        if (slow && step % 2 === 0) this.playSound(200 + this.arr[step] * 1500);
        if (slowest) this.playSound(200 + this.arr[step] * 1500);
    }
    initializeArrayView() {
        const fragment = document.createDocumentFragment();
        for(let i = 0; i < this.arr.length; i++){
            const bar = document.createElement("div");
            bar.classList.add(`bar`, `bar${i}`);
            this.styleArrayBar(bar, i);
            fragment.appendChild(bar);
        }
        this.elementId.appendChild(fragment);
    }
    styleArrayBar(bar, i) {
        bar.style.height = `${this.arr[i] * 100}%`;
        bar.style.width = `${100 / this.n}%`;
        if (this.n > 200 && this.n < 300) bar.style.margin = "0.5px";
        if (this.n > 300) bar.style.margin = "0px";
    }
    createArrayView(move, prevMove) {
        if (move && prevMove) {
            const [idx1, idx2, oldIdx1, oldIdx2] = [
                move.indices[0],
                move.indices[1],
                prevMove.indices[0],
                prevMove.indices[1]
            ];
            const [bar1, bar2, oldBar1, oldBar2] = [
                this.bindElementByClass(`bar${idx1}`),
                this.bindElementByClass(`bar${idx2}`),
                this.bindElementByClass(`bar${oldIdx1}`),
                this.bindElementByClass(`bar${oldIdx2}`)
            ];
            const temp = bar1.style.height;
            bar1.style.height = bar2.style.height;
            bar2.style.height = temp;
            oldBar2.style.backgroundColor = "#3498db";
            oldBar1.style.backgroundColor = "#3498db";
            bar1.style.backgroundColor = "red";
            bar2.style.backgroundColor = "red";
        }
        if (!prevMove && !move) this.setColorOfWholeArray();
    }
    playSound(freq) {
        const duration = (0, _calulateDur.calculateDuration)(this.speed);
        const osc = this.audioContext.createOscillator();
        osc.frequency.value = isNaN(freq) ? 1500 : freq;
        osc.type = "sine";
        osc.start();
        osc.stop(this.audioContext.currentTime + duration);
        const node = this.audioContext.createGain();
        node.gain.value = 0.1;
        node.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + duration);
        osc.connect(node);
        node.connect(this.audioContext.destination);
    }
}

},{"./Common":"dMCAR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../constants/enums":"7XfrQ","../helpers/calulateDur":"c9N8r"}],"c9N8r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calculateDuration", ()=>calculateDuration);
var _enums = require("../constants/enums");
const calculateDuration = (speed)=>{
    let duration = speed;
    switch(speed){
        case (0, _enums.VisualizationSpeed).ULTRA_FAST:
            duration = speed / 70;
            break;
        case (0, _enums.VisualizationSpeed).FASTER:
            duration = speed / 100;
            break;
        case (0, _enums.VisualizationSpeed).FAST:
            duration = speed / 150;
            break;
        case (0, _enums.VisualizationSpeed).AVERAGE:
            duration = speed / 250;
            break;
        case (0, _enums.VisualizationSpeed).SLOWER:
            duration = speed / 400;
            break;
        case (0, _enums.VisualizationSpeed).SLOW:
            duration = speed / 200;
            break;
        case (0, _enums.VisualizationSpeed).ULTRA_SLOW:
            duration = speed / 1500;
            break;
        default:
            duration = speed / 150;
    }
    return duration;
};

},{"../constants/enums":"7XfrQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hdqPT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "insertionSort", ()=>insertionSort);
const insertionSort = (arr)=>{
    const n = arr.length;
    const moves = [];
    for(let i = 1; i < n; i++){
        let currentElement = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > currentElement){
            arr[j + 1] = arr[j];
            moves.push({
                indices: [
                    j + 1,
                    j
                ]
            });
            j--;
        }
        arr[j + 1] = currentElement;
    }
    return moves;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gvyFg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bubbleSort", ()=>bubbleSort);
const bubbleSort = (arr)=>{
    const n = arr.length;
    const moves = [];
    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - i - 1; j++)if (arr[j] > arr[j + 1]) {
            moves.push({
                indices: [
                    j + 1,
                    j
                ]
            });
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
    return moves;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jWa54":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "selectionSort", ()=>selectionSort);
const selectionSort = (arr)=>{
    const n = arr.length - 1;
    const moves = [];
    for(let i = 0; i <= n; i++){
        let min = i;
        for(let j = i + 1; j <= n; j++)if (arr[j] < arr[min]) min = j;
        if (min != i) {
            moves.push({
                indices: [
                    min,
                    i
                ]
            });
            const temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
    return moves;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"av4La":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bitonicSort", ()=>bitonicSort);
function bitonicSort(arr) {
    const n = arr.length;
    const moves = [];
    // Ensure the length of the array is a power of 2
    if (!Number.isInteger(Math.log2(n))) throw new Error("Array length must be a power of 2");
    // Perform bitonic sort
    for(let k = 2; k <= n; k *= 2){
        for(let j = k / 2; j > 0; j /= 2)for(let i = 0; i < n; i++){
            const l = i ^ j;
            if (l > i) {
                const descending = (i & k) === 0; // Determine the sorting direction
                if (descending && arr[i] > arr[l] || !descending && arr[i] < arr[l]) {
                    moves.push({
                        indices: [
                            i,
                            l
                        ]
                    });
                    const temp = arr[i];
                    arr[i] = arr[l];
                    arr[l] = temp;
                }
            }
        }
    }
    return moves;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dKYpR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bogosort", ()=>bogosort);
function isSorted(arr) {
    for(let i = 1; i < arr.length; i++){
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
}
function shuffleArray(arr, moves) {
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        moves.push({
            indices: [
                i,
                j
            ]
        });
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
function bogosort(arr) {
    const moves = [];
    while(!isSorted(arr))shuffleArray(arr, moves);
    return moves;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eTllg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "quickSortWrapper", ()=>quickSortWrapper);
const quickSortWrapper = (arr)=>{
    const moves = [];
    function quickSort(arr, low = 0, high = arr.length - 1) {
        if (low < high) {
            const pivotIndex = partition(arr, low, high);
            quickSort(arr, low, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, high);
        }
    }
    function partition(arr, low, high) {
        const pivot = arr[high];
        let i = low - 1;
        for(let j = low; j < high; j++)if (arr[j] <= pivot) {
            i++;
            moves.push({
                indices: [
                    i,
                    j
                ]
            });
            [arr[i], arr[j]] = [
                arr[j],
                arr[i]
            ];
        }
        moves.push({
            indices: [
                i + 1,
                high
            ]
        });
        [arr[i + 1], arr[high]] = [
            arr[high],
            arr[i + 1]
        ];
        return i + 1;
    }
    quickSort(arr);
    console.log(arr);
    return moves;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["YaJJs","iwNeP"], "iwNeP", "parcelRequire94c2")

//# sourceMappingURL=index.b58ce9e8.js.map
