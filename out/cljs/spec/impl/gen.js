// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__10613__auto__,writer__10614__auto__,opt__10615__auto__){
return cljs.core._write.call(null,writer__10614__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13260 = arguments.length;
var i__11178__auto___13261 = (0);
while(true){
if((i__11178__auto___13261 < len__11177__auto___13260)){
args__11184__auto__.push((arguments[i__11178__auto___13261]));

var G__13262 = (i__11178__auto___13261 + (1));
i__11178__auto___13261 = G__13262;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq13259){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13259));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13264 = arguments.length;
var i__11178__auto___13265 = (0);
while(true){
if((i__11178__auto___13265 < len__11177__auto___13264)){
args__11184__auto__.push((arguments[i__11178__auto___13265]));

var G__13266 = (i__11178__auto___13265 + (1));
i__11178__auto___13265 = G__13266;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq13263){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13263));
});

var g_QMARK__13267 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_13268 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__13267){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__13267))
,null));
var mkg_13269 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__13267,g_13268){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__13267,g_13268))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__13267,g_13268,mkg_13269){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__13267).call(null,x);
});})(g_QMARK__13267,g_13268,mkg_13269))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__13267,g_13268,mkg_13269){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_13269).call(null,gfn);
});})(g_QMARK__13267,g_13268,mkg_13269))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__13267,g_13268,mkg_13269){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_13268).call(null,generator);
});})(g_QMARK__13267,g_13268,mkg_13269))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__11261__auto___13288 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__11261__auto___13288){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13289 = arguments.length;
var i__11178__auto___13290 = (0);
while(true){
if((i__11178__auto___13290 < len__11177__auto___13289)){
args__11184__auto__.push((arguments[i__11178__auto___13290]));

var G__13291 = (i__11178__auto___13290 + (1));
i__11178__auto___13290 = G__13291;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11261__auto___13288))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11261__auto___13288){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11261__auto___13288),args);
});})(g__11261__auto___13288))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__11261__auto___13288){
return (function (seq13270){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13270));
});})(g__11261__auto___13288))
;


var g__11261__auto___13292 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__11261__auto___13292){
return (function cljs$spec$impl$gen$list(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13293 = arguments.length;
var i__11178__auto___13294 = (0);
while(true){
if((i__11178__auto___13294 < len__11177__auto___13293)){
args__11184__auto__.push((arguments[i__11178__auto___13294]));

var G__13295 = (i__11178__auto___13294 + (1));
i__11178__auto___13294 = G__13295;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11261__auto___13292))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11261__auto___13292){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11261__auto___13292),args);
});})(g__11261__auto___13292))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__11261__auto___13292){
return (function (seq13271){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13271));
});})(g__11261__auto___13292))
;


var g__11261__auto___13296 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__11261__auto___13296){
return (function cljs$spec$impl$gen$map(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13297 = arguments.length;
var i__11178__auto___13298 = (0);
while(true){
if((i__11178__auto___13298 < len__11177__auto___13297)){
args__11184__auto__.push((arguments[i__11178__auto___13298]));

var G__13299 = (i__11178__auto___13298 + (1));
i__11178__auto___13298 = G__13299;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11261__auto___13296))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11261__auto___13296){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11261__auto___13296),args);
});})(g__11261__auto___13296))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__11261__auto___13296){
return (function (seq13272){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13272));
});})(g__11261__auto___13296))
;


var g__11261__auto___13300 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__11261__auto___13300){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13301 = arguments.length;
var i__11178__auto___13302 = (0);
while(true){
if((i__11178__auto___13302 < len__11177__auto___13301)){
args__11184__auto__.push((arguments[i__11178__auto___13302]));

var G__13303 = (i__11178__auto___13302 + (1));
i__11178__auto___13302 = G__13303;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11261__auto___13300))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11261__auto___13300){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11261__auto___13300),args);
});})(g__11261__auto___13300))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__11261__auto___13300){
return (function (seq13273){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13273));
});})(g__11261__auto___13300))
;


var g__11261__auto___13304 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__11261__auto___13304){
return (function cljs$spec$impl$gen$set(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13305 = arguments.length;
var i__11178__auto___13306 = (0);
while(true){
if((i__11178__auto___13306 < len__11177__auto___13305)){
args__11184__auto__.push((arguments[i__11178__auto___13306]));

var G__13307 = (i__11178__auto___13306 + (1));
i__11178__auto___13306 = G__13307;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11261__auto___13304))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11261__auto___13304){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11261__auto___13304),args);
});})(g__11261__auto___13304))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__11261__auto___13304){
return (function (seq13274){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13274));
});})(g__11261__auto___13304))
;


var g__11261__auto___13308 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__11261__auto___13308){
return (function cljs$spec$impl$gen$vector(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13309 = arguments.length;
var i__11178__auto___13310 = (0);
while(true){
if((i__11178__auto___13310 < len__11177__auto___13309)){
args__11184__auto__.push((arguments[i__11178__auto___13310]));

var G__13311 = (i__11178__auto___13310 + (1));
i__11178__auto___13310 = G__13311;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11261__auto___13308))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11261__auto___13308){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11261__auto___13308),args);
});})(g__11261__auto___13308))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__11261__auto___13308){
return (function (seq13275){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13275));
});})(g__11261__auto___13308))
;


var g__11261__auto___13312 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__11261__auto___13312){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13313 = arguments.length;
var i__11178__auto___13314 = (0);
while(true){
if((i__11178__auto___13314 < len__11177__auto___13313)){
args__11184__auto__.push((arguments[i__11178__auto___13314]));

var G__13315 = (i__11178__auto___13314 + (1));
i__11178__auto___13314 = G__13315;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11261__auto___13312))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11261__auto___13312){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11261__auto___13312),args);
});})(g__11261__auto___13312))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__11261__auto___13312){
return (function (seq13276){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13276));
});})(g__11261__auto___13312))
;


var g__11261__auto___13316 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__11261__auto___13316){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13317 = arguments.length;
var i__11178__auto___13318 = (0);
while(true){
if((i__11178__auto___13318 < len__11177__auto___13317)){
args__11184__auto__.push((arguments[i__11178__auto___13318]));

var G__13319 = (i__11178__auto___13318 + (1));
i__11178__auto___13318 = G__13319;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11261__auto___13316))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11261__auto___13316){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11261__auto___13316),args);
});})(g__11261__auto___13316))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__11261__auto___13316){
return (function (seq13277){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13277));
});})(g__11261__auto___13316))
;


var g__11261__auto___13320 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__11261__auto___13320){
return (function cljs$spec$impl$gen$elements(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13321 = arguments.length;
var i__11178__auto___13322 = (0);
while(true){
if((i__11178__auto___13322 < len__11177__auto___13321)){
args__11184__auto__.push((arguments[i__11178__auto___13322]));

var G__13323 = (i__11178__auto___13322 + (1));
i__11178__auto___13322 = G__13323;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11261__auto___13320))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11261__auto___13320){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11261__auto___13320),args);
});})(g__11261__auto___13320))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__11261__auto___13320){
return (function (seq13278){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13278));
});})(g__11261__auto___13320))
;


var g__11261__auto___13324 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__11261__auto___13324){
return (function cljs$spec$impl$gen$bind(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13325 = arguments.length;
var i__11178__auto___13326 = (0);
while(true){
if((i__11178__auto___13326 < len__11177__auto___13325)){
args__11184__auto__.push((arguments[i__11178__auto___13326]));

var G__13327 = (i__11178__auto___13326 + (1));
i__11178__auto___13326 = G__13327;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11261__auto___13324))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11261__auto___13324){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11261__auto___13324),args);
});})(g__11261__auto___13324))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__11261__auto___13324){
return (function (seq13279){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13279));
});})(g__11261__auto___13324))
;


var g__11261__auto___13328 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__11261__auto___13328){
return (function cljs$spec$impl$gen$choose(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13329 = arguments.length;
var i__11178__auto___13330 = (0);
while(true){
if((i__11178__auto___13330 < len__11177__auto___13329)){
args__11184__auto__.push((arguments[i__11178__auto___13330]));

var G__13331 = (i__11178__auto___13330 + (1));
i__11178__auto___13330 = G__13331;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11261__auto___13328))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11261__auto___13328){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11261__auto___13328),args);
});})(g__11261__auto___13328))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__11261__auto___13328){
return (function (seq13280){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13280));
});})(g__11261__auto___13328))
;


var g__11261__auto___13332 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__11261__auto___13332){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13333 = arguments.length;
var i__11178__auto___13334 = (0);
while(true){
if((i__11178__auto___13334 < len__11177__auto___13333)){
args__11184__auto__.push((arguments[i__11178__auto___13334]));

var G__13335 = (i__11178__auto___13334 + (1));
i__11178__auto___13334 = G__13335;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11261__auto___13332))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11261__auto___13332){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11261__auto___13332),args);
});})(g__11261__auto___13332))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__11261__auto___13332){
return (function (seq13281){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13281));
});})(g__11261__auto___13332))
;


var g__11261__auto___13336 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__11261__auto___13336){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13337 = arguments.length;
var i__11178__auto___13338 = (0);
while(true){
if((i__11178__auto___13338 < len__11177__auto___13337)){
args__11184__auto__.push((arguments[i__11178__auto___13338]));

var G__13339 = (i__11178__auto___13338 + (1));
i__11178__auto___13338 = G__13339;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11261__auto___13336))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11261__auto___13336){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11261__auto___13336),args);
});})(g__11261__auto___13336))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__11261__auto___13336){
return (function (seq13282){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13282));
});})(g__11261__auto___13336))
;


var g__11261__auto___13340 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__11261__auto___13340){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13341 = arguments.length;
var i__11178__auto___13342 = (0);
while(true){
if((i__11178__auto___13342 < len__11177__auto___13341)){
args__11184__auto__.push((arguments[i__11178__auto___13342]));

var G__13343 = (i__11178__auto___13342 + (1));
i__11178__auto___13342 = G__13343;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11261__auto___13340))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11261__auto___13340){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11261__auto___13340),args);
});})(g__11261__auto___13340))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__11261__auto___13340){
return (function (seq13283){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13283));
});})(g__11261__auto___13340))
;


var g__11261__auto___13344 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__11261__auto___13344){
return (function cljs$spec$impl$gen$sample(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13345 = arguments.length;
var i__11178__auto___13346 = (0);
while(true){
if((i__11178__auto___13346 < len__11177__auto___13345)){
args__11184__auto__.push((arguments[i__11178__auto___13346]));

var G__13347 = (i__11178__auto___13346 + (1));
i__11178__auto___13346 = G__13347;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11261__auto___13344))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11261__auto___13344){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11261__auto___13344),args);
});})(g__11261__auto___13344))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__11261__auto___13344){
return (function (seq13284){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13284));
});})(g__11261__auto___13344))
;


var g__11261__auto___13348 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__11261__auto___13348){
return (function cljs$spec$impl$gen$return(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13349 = arguments.length;
var i__11178__auto___13350 = (0);
while(true){
if((i__11178__auto___13350 < len__11177__auto___13349)){
args__11184__auto__.push((arguments[i__11178__auto___13350]));

var G__13351 = (i__11178__auto___13350 + (1));
i__11178__auto___13350 = G__13351;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11261__auto___13348))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11261__auto___13348){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11261__auto___13348),args);
});})(g__11261__auto___13348))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__11261__auto___13348){
return (function (seq13285){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13285));
});})(g__11261__auto___13348))
;


var g__11261__auto___13352 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__11261__auto___13352){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13353 = arguments.length;
var i__11178__auto___13354 = (0);
while(true){
if((i__11178__auto___13354 < len__11177__auto___13353)){
args__11184__auto__.push((arguments[i__11178__auto___13354]));

var G__13355 = (i__11178__auto___13354 + (1));
i__11178__auto___13354 = G__13355;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11261__auto___13352))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11261__auto___13352){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11261__auto___13352),args);
});})(g__11261__auto___13352))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__11261__auto___13352){
return (function (seq13286){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13286));
});})(g__11261__auto___13352))
;


var g__11261__auto___13356 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__11261__auto___13356){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13357 = arguments.length;
var i__11178__auto___13358 = (0);
while(true){
if((i__11178__auto___13358 < len__11177__auto___13357)){
args__11184__auto__.push((arguments[i__11178__auto___13358]));

var G__13359 = (i__11178__auto___13358 + (1));
i__11178__auto___13358 = G__13359;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11261__auto___13356))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11261__auto___13356){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__11261__auto___13356),args);
});})(g__11261__auto___13356))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__11261__auto___13356){
return (function (seq13287){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13287));
});})(g__11261__auto___13356))
;

var g__11274__auto___13381 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__11274__auto___13381){
return (function cljs$spec$impl$gen$any(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13382 = arguments.length;
var i__11178__auto___13383 = (0);
while(true){
if((i__11178__auto___13383 < len__11177__auto___13382)){
args__11184__auto__.push((arguments[i__11178__auto___13383]));

var G__13384 = (i__11178__auto___13383 + (1));
i__11178__auto___13383 = G__13384;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11274__auto___13381))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11274__auto___13381){
return (function (args){
return cljs.core.deref.call(null,g__11274__auto___13381);
});})(g__11274__auto___13381))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__11274__auto___13381){
return (function (seq13360){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13360));
});})(g__11274__auto___13381))
;


var g__11274__auto___13385 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__11274__auto___13385){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13386 = arguments.length;
var i__11178__auto___13387 = (0);
while(true){
if((i__11178__auto___13387 < len__11177__auto___13386)){
args__11184__auto__.push((arguments[i__11178__auto___13387]));

var G__13388 = (i__11178__auto___13387 + (1));
i__11178__auto___13387 = G__13388;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11274__auto___13385))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11274__auto___13385){
return (function (args){
return cljs.core.deref.call(null,g__11274__auto___13385);
});})(g__11274__auto___13385))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__11274__auto___13385){
return (function (seq13361){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13361));
});})(g__11274__auto___13385))
;


var g__11274__auto___13389 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__11274__auto___13389){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13390 = arguments.length;
var i__11178__auto___13391 = (0);
while(true){
if((i__11178__auto___13391 < len__11177__auto___13390)){
args__11184__auto__.push((arguments[i__11178__auto___13391]));

var G__13392 = (i__11178__auto___13391 + (1));
i__11178__auto___13391 = G__13392;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11274__auto___13389))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11274__auto___13389){
return (function (args){
return cljs.core.deref.call(null,g__11274__auto___13389);
});})(g__11274__auto___13389))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__11274__auto___13389){
return (function (seq13362){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13362));
});})(g__11274__auto___13389))
;


var g__11274__auto___13393 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__11274__auto___13393){
return (function cljs$spec$impl$gen$char(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13394 = arguments.length;
var i__11178__auto___13395 = (0);
while(true){
if((i__11178__auto___13395 < len__11177__auto___13394)){
args__11184__auto__.push((arguments[i__11178__auto___13395]));

var G__13396 = (i__11178__auto___13395 + (1));
i__11178__auto___13395 = G__13396;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11274__auto___13393))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11274__auto___13393){
return (function (args){
return cljs.core.deref.call(null,g__11274__auto___13393);
});})(g__11274__auto___13393))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__11274__auto___13393){
return (function (seq13363){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13363));
});})(g__11274__auto___13393))
;


var g__11274__auto___13397 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__11274__auto___13397){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13398 = arguments.length;
var i__11178__auto___13399 = (0);
while(true){
if((i__11178__auto___13399 < len__11177__auto___13398)){
args__11184__auto__.push((arguments[i__11178__auto___13399]));

var G__13400 = (i__11178__auto___13399 + (1));
i__11178__auto___13399 = G__13400;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11274__auto___13397))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11274__auto___13397){
return (function (args){
return cljs.core.deref.call(null,g__11274__auto___13397);
});})(g__11274__auto___13397))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__11274__auto___13397){
return (function (seq13364){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13364));
});})(g__11274__auto___13397))
;


var g__11274__auto___13401 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__11274__auto___13401){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13402 = arguments.length;
var i__11178__auto___13403 = (0);
while(true){
if((i__11178__auto___13403 < len__11177__auto___13402)){
args__11184__auto__.push((arguments[i__11178__auto___13403]));

var G__13404 = (i__11178__auto___13403 + (1));
i__11178__auto___13403 = G__13404;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11274__auto___13401))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11274__auto___13401){
return (function (args){
return cljs.core.deref.call(null,g__11274__auto___13401);
});})(g__11274__auto___13401))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__11274__auto___13401){
return (function (seq13365){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13365));
});})(g__11274__auto___13401))
;


var g__11274__auto___13405 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__11274__auto___13405){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13406 = arguments.length;
var i__11178__auto___13407 = (0);
while(true){
if((i__11178__auto___13407 < len__11177__auto___13406)){
args__11184__auto__.push((arguments[i__11178__auto___13407]));

var G__13408 = (i__11178__auto___13407 + (1));
i__11178__auto___13407 = G__13408;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11274__auto___13405))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11274__auto___13405){
return (function (args){
return cljs.core.deref.call(null,g__11274__auto___13405);
});})(g__11274__auto___13405))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__11274__auto___13405){
return (function (seq13366){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13366));
});})(g__11274__auto___13405))
;


var g__11274__auto___13409 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__11274__auto___13409){
return (function cljs$spec$impl$gen$double(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13410 = arguments.length;
var i__11178__auto___13411 = (0);
while(true){
if((i__11178__auto___13411 < len__11177__auto___13410)){
args__11184__auto__.push((arguments[i__11178__auto___13411]));

var G__13412 = (i__11178__auto___13411 + (1));
i__11178__auto___13411 = G__13412;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11274__auto___13409))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11274__auto___13409){
return (function (args){
return cljs.core.deref.call(null,g__11274__auto___13409);
});})(g__11274__auto___13409))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__11274__auto___13409){
return (function (seq13367){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13367));
});})(g__11274__auto___13409))
;


var g__11274__auto___13413 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__11274__auto___13413){
return (function cljs$spec$impl$gen$int(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13414 = arguments.length;
var i__11178__auto___13415 = (0);
while(true){
if((i__11178__auto___13415 < len__11177__auto___13414)){
args__11184__auto__.push((arguments[i__11178__auto___13415]));

var G__13416 = (i__11178__auto___13415 + (1));
i__11178__auto___13415 = G__13416;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11274__auto___13413))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11274__auto___13413){
return (function (args){
return cljs.core.deref.call(null,g__11274__auto___13413);
});})(g__11274__auto___13413))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__11274__auto___13413){
return (function (seq13368){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13368));
});})(g__11274__auto___13413))
;


var g__11274__auto___13417 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__11274__auto___13417){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13418 = arguments.length;
var i__11178__auto___13419 = (0);
while(true){
if((i__11178__auto___13419 < len__11177__auto___13418)){
args__11184__auto__.push((arguments[i__11178__auto___13419]));

var G__13420 = (i__11178__auto___13419 + (1));
i__11178__auto___13419 = G__13420;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11274__auto___13417))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11274__auto___13417){
return (function (args){
return cljs.core.deref.call(null,g__11274__auto___13417);
});})(g__11274__auto___13417))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__11274__auto___13417){
return (function (seq13369){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13369));
});})(g__11274__auto___13417))
;


var g__11274__auto___13421 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__11274__auto___13421){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13422 = arguments.length;
var i__11178__auto___13423 = (0);
while(true){
if((i__11178__auto___13423 < len__11177__auto___13422)){
args__11184__auto__.push((arguments[i__11178__auto___13423]));

var G__13424 = (i__11178__auto___13423 + (1));
i__11178__auto___13423 = G__13424;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11274__auto___13421))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11274__auto___13421){
return (function (args){
return cljs.core.deref.call(null,g__11274__auto___13421);
});})(g__11274__auto___13421))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__11274__auto___13421){
return (function (seq13370){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13370));
});})(g__11274__auto___13421))
;


var g__11274__auto___13425 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__11274__auto___13425){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13426 = arguments.length;
var i__11178__auto___13427 = (0);
while(true){
if((i__11178__auto___13427 < len__11177__auto___13426)){
args__11184__auto__.push((arguments[i__11178__auto___13427]));

var G__13428 = (i__11178__auto___13427 + (1));
i__11178__auto___13427 = G__13428;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11274__auto___13425))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11274__auto___13425){
return (function (args){
return cljs.core.deref.call(null,g__11274__auto___13425);
});})(g__11274__auto___13425))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__11274__auto___13425){
return (function (seq13371){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13371));
});})(g__11274__auto___13425))
;


var g__11274__auto___13429 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__11274__auto___13429){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13430 = arguments.length;
var i__11178__auto___13431 = (0);
while(true){
if((i__11178__auto___13431 < len__11177__auto___13430)){
args__11184__auto__.push((arguments[i__11178__auto___13431]));

var G__13432 = (i__11178__auto___13431 + (1));
i__11178__auto___13431 = G__13432;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11274__auto___13429))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11274__auto___13429){
return (function (args){
return cljs.core.deref.call(null,g__11274__auto___13429);
});})(g__11274__auto___13429))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__11274__auto___13429){
return (function (seq13372){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13372));
});})(g__11274__auto___13429))
;


var g__11274__auto___13433 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__11274__auto___13433){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13434 = arguments.length;
var i__11178__auto___13435 = (0);
while(true){
if((i__11178__auto___13435 < len__11177__auto___13434)){
args__11184__auto__.push((arguments[i__11178__auto___13435]));

var G__13436 = (i__11178__auto___13435 + (1));
i__11178__auto___13435 = G__13436;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11274__auto___13433))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11274__auto___13433){
return (function (args){
return cljs.core.deref.call(null,g__11274__auto___13433);
});})(g__11274__auto___13433))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__11274__auto___13433){
return (function (seq13373){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13373));
});})(g__11274__auto___13433))
;


var g__11274__auto___13437 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__11274__auto___13437){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13438 = arguments.length;
var i__11178__auto___13439 = (0);
while(true){
if((i__11178__auto___13439 < len__11177__auto___13438)){
args__11184__auto__.push((arguments[i__11178__auto___13439]));

var G__13440 = (i__11178__auto___13439 + (1));
i__11178__auto___13439 = G__13440;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11274__auto___13437))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11274__auto___13437){
return (function (args){
return cljs.core.deref.call(null,g__11274__auto___13437);
});})(g__11274__auto___13437))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__11274__auto___13437){
return (function (seq13374){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13374));
});})(g__11274__auto___13437))
;


var g__11274__auto___13441 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__11274__auto___13441){
return (function cljs$spec$impl$gen$string(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13442 = arguments.length;
var i__11178__auto___13443 = (0);
while(true){
if((i__11178__auto___13443 < len__11177__auto___13442)){
args__11184__auto__.push((arguments[i__11178__auto___13443]));

var G__13444 = (i__11178__auto___13443 + (1));
i__11178__auto___13443 = G__13444;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11274__auto___13441))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11274__auto___13441){
return (function (args){
return cljs.core.deref.call(null,g__11274__auto___13441);
});})(g__11274__auto___13441))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__11274__auto___13441){
return (function (seq13375){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13375));
});})(g__11274__auto___13441))
;


var g__11274__auto___13445 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__11274__auto___13445){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13446 = arguments.length;
var i__11178__auto___13447 = (0);
while(true){
if((i__11178__auto___13447 < len__11177__auto___13446)){
args__11184__auto__.push((arguments[i__11178__auto___13447]));

var G__13448 = (i__11178__auto___13447 + (1));
i__11178__auto___13447 = G__13448;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11274__auto___13445))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11274__auto___13445){
return (function (args){
return cljs.core.deref.call(null,g__11274__auto___13445);
});})(g__11274__auto___13445))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__11274__auto___13445){
return (function (seq13376){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13376));
});})(g__11274__auto___13445))
;


var g__11274__auto___13449 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__11274__auto___13449){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13450 = arguments.length;
var i__11178__auto___13451 = (0);
while(true){
if((i__11178__auto___13451 < len__11177__auto___13450)){
args__11184__auto__.push((arguments[i__11178__auto___13451]));

var G__13452 = (i__11178__auto___13451 + (1));
i__11178__auto___13451 = G__13452;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11274__auto___13449))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11274__auto___13449){
return (function (args){
return cljs.core.deref.call(null,g__11274__auto___13449);
});})(g__11274__auto___13449))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__11274__auto___13449){
return (function (seq13377){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13377));
});})(g__11274__auto___13449))
;


var g__11274__auto___13453 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__11274__auto___13453){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13454 = arguments.length;
var i__11178__auto___13455 = (0);
while(true){
if((i__11178__auto___13455 < len__11177__auto___13454)){
args__11184__auto__.push((arguments[i__11178__auto___13455]));

var G__13456 = (i__11178__auto___13455 + (1));
i__11178__auto___13455 = G__13456;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11274__auto___13453))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11274__auto___13453){
return (function (args){
return cljs.core.deref.call(null,g__11274__auto___13453);
});})(g__11274__auto___13453))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__11274__auto___13453){
return (function (seq13378){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13378));
});})(g__11274__auto___13453))
;


var g__11274__auto___13457 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__11274__auto___13457){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13458 = arguments.length;
var i__11178__auto___13459 = (0);
while(true){
if((i__11178__auto___13459 < len__11177__auto___13458)){
args__11184__auto__.push((arguments[i__11178__auto___13459]));

var G__13460 = (i__11178__auto___13459 + (1));
i__11178__auto___13459 = G__13460;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11274__auto___13457))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11274__auto___13457){
return (function (args){
return cljs.core.deref.call(null,g__11274__auto___13457);
});})(g__11274__auto___13457))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__11274__auto___13457){
return (function (seq13379){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13379));
});})(g__11274__auto___13457))
;


var g__11274__auto___13461 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__11274__auto___13461){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13462 = arguments.length;
var i__11178__auto___13463 = (0);
while(true){
if((i__11178__auto___13463 < len__11177__auto___13462)){
args__11184__auto__.push((arguments[i__11178__auto___13463]));

var G__13464 = (i__11178__auto___13463 + (1));
i__11178__auto___13463 = G__13464;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});})(g__11274__auto___13461))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__11274__auto___13461){
return (function (args){
return cljs.core.deref.call(null,g__11274__auto___13461);
});})(g__11274__auto___13461))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__11274__auto___13461){
return (function (seq13380){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13380));
});})(g__11274__auto___13461))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__11184__auto__ = [];
var len__11177__auto___13467 = arguments.length;
var i__11178__auto___13468 = (0);
while(true){
if((i__11178__auto___13468 < len__11177__auto___13467)){
args__11184__auto__.push((arguments[i__11178__auto___13468]));

var G__13469 = (i__11178__auto___13468 + (1));
i__11178__auto___13468 = G__13469;
continue;
} else {
}
break;
}

var argseq__11185__auto__ = ((((0) < args__11184__auto__.length))?(new cljs.core.IndexedSeq(args__11184__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__11185__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__13465_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__13465_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq13466){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13466));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__13470_SHARP_){
return (new Date(p1__13470_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map