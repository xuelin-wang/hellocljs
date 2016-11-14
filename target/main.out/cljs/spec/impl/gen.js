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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__8041__auto__,writer__8042__auto__,opt__8043__auto__){
return cljs.core._write.call(null,writer__8042__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__8612__auto__ = [];
var len__8605__auto___8718 = arguments.length;
var i__8606__auto___8719 = (0);
while(true){
if((i__8606__auto___8719 < len__8605__auto___8718)){
args__8612__auto__.push((arguments[i__8606__auto___8719]));

var G__8720 = (i__8606__auto___8719 + (1));
i__8606__auto___8719 = G__8720;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq8717){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8717));
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
var args__8612__auto__ = [];
var len__8605__auto___8722 = arguments.length;
var i__8606__auto___8723 = (0);
while(true){
if((i__8606__auto___8723 < len__8605__auto___8722)){
args__8612__auto__.push((arguments[i__8606__auto___8723]));

var G__8724 = (i__8606__auto___8723 + (1));
i__8606__auto___8723 = G__8724;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq8721){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8721));
});

var g_QMARK__8725 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_8726 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__8725){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__8725))
,null));
var mkg_8727 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__8725,g_8726){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__8725,g_8726))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__8725,g_8726,mkg_8727){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__8725).call(null,x);
});})(g_QMARK__8725,g_8726,mkg_8727))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__8725,g_8726,mkg_8727){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_8727).call(null,gfn);
});})(g_QMARK__8725,g_8726,mkg_8727))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__8725,g_8726,mkg_8727){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_8726).call(null,generator);
});})(g_QMARK__8725,g_8726,mkg_8727))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__8689__auto___8746 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__8689__auto___8746){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8747 = arguments.length;
var i__8606__auto___8748 = (0);
while(true){
if((i__8606__auto___8748 < len__8605__auto___8747)){
args__8612__auto__.push((arguments[i__8606__auto___8748]));

var G__8749 = (i__8606__auto___8748 + (1));
i__8606__auto___8748 = G__8749;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8689__auto___8746))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8689__auto___8746){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8689__auto___8746),args);
});})(g__8689__auto___8746))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__8689__auto___8746){
return (function (seq8728){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8728));
});})(g__8689__auto___8746))
;


var g__8689__auto___8750 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__8689__auto___8750){
return (function cljs$spec$impl$gen$list(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8751 = arguments.length;
var i__8606__auto___8752 = (0);
while(true){
if((i__8606__auto___8752 < len__8605__auto___8751)){
args__8612__auto__.push((arguments[i__8606__auto___8752]));

var G__8753 = (i__8606__auto___8752 + (1));
i__8606__auto___8752 = G__8753;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8689__auto___8750))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8689__auto___8750){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8689__auto___8750),args);
});})(g__8689__auto___8750))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__8689__auto___8750){
return (function (seq8729){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8729));
});})(g__8689__auto___8750))
;


var g__8689__auto___8754 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__8689__auto___8754){
return (function cljs$spec$impl$gen$map(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8755 = arguments.length;
var i__8606__auto___8756 = (0);
while(true){
if((i__8606__auto___8756 < len__8605__auto___8755)){
args__8612__auto__.push((arguments[i__8606__auto___8756]));

var G__8757 = (i__8606__auto___8756 + (1));
i__8606__auto___8756 = G__8757;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8689__auto___8754))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8689__auto___8754){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8689__auto___8754),args);
});})(g__8689__auto___8754))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__8689__auto___8754){
return (function (seq8730){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8730));
});})(g__8689__auto___8754))
;


var g__8689__auto___8758 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__8689__auto___8758){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8759 = arguments.length;
var i__8606__auto___8760 = (0);
while(true){
if((i__8606__auto___8760 < len__8605__auto___8759)){
args__8612__auto__.push((arguments[i__8606__auto___8760]));

var G__8761 = (i__8606__auto___8760 + (1));
i__8606__auto___8760 = G__8761;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8689__auto___8758))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8689__auto___8758){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8689__auto___8758),args);
});})(g__8689__auto___8758))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__8689__auto___8758){
return (function (seq8731){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8731));
});})(g__8689__auto___8758))
;


var g__8689__auto___8762 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__8689__auto___8762){
return (function cljs$spec$impl$gen$set(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8763 = arguments.length;
var i__8606__auto___8764 = (0);
while(true){
if((i__8606__auto___8764 < len__8605__auto___8763)){
args__8612__auto__.push((arguments[i__8606__auto___8764]));

var G__8765 = (i__8606__auto___8764 + (1));
i__8606__auto___8764 = G__8765;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8689__auto___8762))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8689__auto___8762){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8689__auto___8762),args);
});})(g__8689__auto___8762))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__8689__auto___8762){
return (function (seq8732){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8732));
});})(g__8689__auto___8762))
;


var g__8689__auto___8766 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__8689__auto___8766){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8767 = arguments.length;
var i__8606__auto___8768 = (0);
while(true){
if((i__8606__auto___8768 < len__8605__auto___8767)){
args__8612__auto__.push((arguments[i__8606__auto___8768]));

var G__8769 = (i__8606__auto___8768 + (1));
i__8606__auto___8768 = G__8769;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8689__auto___8766))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8689__auto___8766){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8689__auto___8766),args);
});})(g__8689__auto___8766))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__8689__auto___8766){
return (function (seq8733){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8733));
});})(g__8689__auto___8766))
;


var g__8689__auto___8770 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__8689__auto___8770){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8771 = arguments.length;
var i__8606__auto___8772 = (0);
while(true){
if((i__8606__auto___8772 < len__8605__auto___8771)){
args__8612__auto__.push((arguments[i__8606__auto___8772]));

var G__8773 = (i__8606__auto___8772 + (1));
i__8606__auto___8772 = G__8773;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8689__auto___8770))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8689__auto___8770){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8689__auto___8770),args);
});})(g__8689__auto___8770))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__8689__auto___8770){
return (function (seq8734){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8734));
});})(g__8689__auto___8770))
;


var g__8689__auto___8774 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__8689__auto___8774){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8775 = arguments.length;
var i__8606__auto___8776 = (0);
while(true){
if((i__8606__auto___8776 < len__8605__auto___8775)){
args__8612__auto__.push((arguments[i__8606__auto___8776]));

var G__8777 = (i__8606__auto___8776 + (1));
i__8606__auto___8776 = G__8777;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8689__auto___8774))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8689__auto___8774){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8689__auto___8774),args);
});})(g__8689__auto___8774))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__8689__auto___8774){
return (function (seq8735){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8735));
});})(g__8689__auto___8774))
;


var g__8689__auto___8778 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__8689__auto___8778){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8779 = arguments.length;
var i__8606__auto___8780 = (0);
while(true){
if((i__8606__auto___8780 < len__8605__auto___8779)){
args__8612__auto__.push((arguments[i__8606__auto___8780]));

var G__8781 = (i__8606__auto___8780 + (1));
i__8606__auto___8780 = G__8781;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8689__auto___8778))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8689__auto___8778){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8689__auto___8778),args);
});})(g__8689__auto___8778))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__8689__auto___8778){
return (function (seq8736){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8736));
});})(g__8689__auto___8778))
;


var g__8689__auto___8782 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__8689__auto___8782){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8783 = arguments.length;
var i__8606__auto___8784 = (0);
while(true){
if((i__8606__auto___8784 < len__8605__auto___8783)){
args__8612__auto__.push((arguments[i__8606__auto___8784]));

var G__8785 = (i__8606__auto___8784 + (1));
i__8606__auto___8784 = G__8785;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8689__auto___8782))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8689__auto___8782){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8689__auto___8782),args);
});})(g__8689__auto___8782))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__8689__auto___8782){
return (function (seq8737){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8737));
});})(g__8689__auto___8782))
;


var g__8689__auto___8786 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__8689__auto___8786){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8787 = arguments.length;
var i__8606__auto___8788 = (0);
while(true){
if((i__8606__auto___8788 < len__8605__auto___8787)){
args__8612__auto__.push((arguments[i__8606__auto___8788]));

var G__8789 = (i__8606__auto___8788 + (1));
i__8606__auto___8788 = G__8789;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8689__auto___8786))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8689__auto___8786){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8689__auto___8786),args);
});})(g__8689__auto___8786))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__8689__auto___8786){
return (function (seq8738){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8738));
});})(g__8689__auto___8786))
;


var g__8689__auto___8790 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__8689__auto___8790){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8791 = arguments.length;
var i__8606__auto___8792 = (0);
while(true){
if((i__8606__auto___8792 < len__8605__auto___8791)){
args__8612__auto__.push((arguments[i__8606__auto___8792]));

var G__8793 = (i__8606__auto___8792 + (1));
i__8606__auto___8792 = G__8793;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8689__auto___8790))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8689__auto___8790){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8689__auto___8790),args);
});})(g__8689__auto___8790))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__8689__auto___8790){
return (function (seq8739){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8739));
});})(g__8689__auto___8790))
;


var g__8689__auto___8794 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__8689__auto___8794){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8795 = arguments.length;
var i__8606__auto___8796 = (0);
while(true){
if((i__8606__auto___8796 < len__8605__auto___8795)){
args__8612__auto__.push((arguments[i__8606__auto___8796]));

var G__8797 = (i__8606__auto___8796 + (1));
i__8606__auto___8796 = G__8797;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8689__auto___8794))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8689__auto___8794){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8689__auto___8794),args);
});})(g__8689__auto___8794))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__8689__auto___8794){
return (function (seq8740){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8740));
});})(g__8689__auto___8794))
;


var g__8689__auto___8798 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__8689__auto___8798){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8799 = arguments.length;
var i__8606__auto___8800 = (0);
while(true){
if((i__8606__auto___8800 < len__8605__auto___8799)){
args__8612__auto__.push((arguments[i__8606__auto___8800]));

var G__8801 = (i__8606__auto___8800 + (1));
i__8606__auto___8800 = G__8801;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8689__auto___8798))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8689__auto___8798){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8689__auto___8798),args);
});})(g__8689__auto___8798))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__8689__auto___8798){
return (function (seq8741){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8741));
});})(g__8689__auto___8798))
;


var g__8689__auto___8802 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__8689__auto___8802){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8803 = arguments.length;
var i__8606__auto___8804 = (0);
while(true){
if((i__8606__auto___8804 < len__8605__auto___8803)){
args__8612__auto__.push((arguments[i__8606__auto___8804]));

var G__8805 = (i__8606__auto___8804 + (1));
i__8606__auto___8804 = G__8805;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8689__auto___8802))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8689__auto___8802){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8689__auto___8802),args);
});})(g__8689__auto___8802))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__8689__auto___8802){
return (function (seq8742){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8742));
});})(g__8689__auto___8802))
;


var g__8689__auto___8806 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__8689__auto___8806){
return (function cljs$spec$impl$gen$return(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8807 = arguments.length;
var i__8606__auto___8808 = (0);
while(true){
if((i__8606__auto___8808 < len__8605__auto___8807)){
args__8612__auto__.push((arguments[i__8606__auto___8808]));

var G__8809 = (i__8606__auto___8808 + (1));
i__8606__auto___8808 = G__8809;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8689__auto___8806))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8689__auto___8806){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8689__auto___8806),args);
});})(g__8689__auto___8806))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__8689__auto___8806){
return (function (seq8743){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8743));
});})(g__8689__auto___8806))
;


var g__8689__auto___8810 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__8689__auto___8810){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8811 = arguments.length;
var i__8606__auto___8812 = (0);
while(true){
if((i__8606__auto___8812 < len__8605__auto___8811)){
args__8612__auto__.push((arguments[i__8606__auto___8812]));

var G__8813 = (i__8606__auto___8812 + (1));
i__8606__auto___8812 = G__8813;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8689__auto___8810))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8689__auto___8810){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8689__auto___8810),args);
});})(g__8689__auto___8810))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__8689__auto___8810){
return (function (seq8744){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8744));
});})(g__8689__auto___8810))
;


var g__8689__auto___8814 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__8689__auto___8814){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8815 = arguments.length;
var i__8606__auto___8816 = (0);
while(true){
if((i__8606__auto___8816 < len__8605__auto___8815)){
args__8612__auto__.push((arguments[i__8606__auto___8816]));

var G__8817 = (i__8606__auto___8816 + (1));
i__8606__auto___8816 = G__8817;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8689__auto___8814))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8689__auto___8814){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8689__auto___8814),args);
});})(g__8689__auto___8814))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__8689__auto___8814){
return (function (seq8745){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8745));
});})(g__8689__auto___8814))
;

var g__8702__auto___8839 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__8702__auto___8839){
return (function cljs$spec$impl$gen$any(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8840 = arguments.length;
var i__8606__auto___8841 = (0);
while(true){
if((i__8606__auto___8841 < len__8605__auto___8840)){
args__8612__auto__.push((arguments[i__8606__auto___8841]));

var G__8842 = (i__8606__auto___8841 + (1));
i__8606__auto___8841 = G__8842;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8702__auto___8839))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8702__auto___8839){
return (function (args){
return cljs.core.deref.call(null,g__8702__auto___8839);
});})(g__8702__auto___8839))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__8702__auto___8839){
return (function (seq8818){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8818));
});})(g__8702__auto___8839))
;


var g__8702__auto___8843 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__8702__auto___8843){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8844 = arguments.length;
var i__8606__auto___8845 = (0);
while(true){
if((i__8606__auto___8845 < len__8605__auto___8844)){
args__8612__auto__.push((arguments[i__8606__auto___8845]));

var G__8846 = (i__8606__auto___8845 + (1));
i__8606__auto___8845 = G__8846;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8702__auto___8843))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8702__auto___8843){
return (function (args){
return cljs.core.deref.call(null,g__8702__auto___8843);
});})(g__8702__auto___8843))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__8702__auto___8843){
return (function (seq8819){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8819));
});})(g__8702__auto___8843))
;


var g__8702__auto___8847 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__8702__auto___8847){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8848 = arguments.length;
var i__8606__auto___8849 = (0);
while(true){
if((i__8606__auto___8849 < len__8605__auto___8848)){
args__8612__auto__.push((arguments[i__8606__auto___8849]));

var G__8850 = (i__8606__auto___8849 + (1));
i__8606__auto___8849 = G__8850;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8702__auto___8847))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8702__auto___8847){
return (function (args){
return cljs.core.deref.call(null,g__8702__auto___8847);
});})(g__8702__auto___8847))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__8702__auto___8847){
return (function (seq8820){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8820));
});})(g__8702__auto___8847))
;


var g__8702__auto___8851 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__8702__auto___8851){
return (function cljs$spec$impl$gen$char(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8852 = arguments.length;
var i__8606__auto___8853 = (0);
while(true){
if((i__8606__auto___8853 < len__8605__auto___8852)){
args__8612__auto__.push((arguments[i__8606__auto___8853]));

var G__8854 = (i__8606__auto___8853 + (1));
i__8606__auto___8853 = G__8854;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8702__auto___8851))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8702__auto___8851){
return (function (args){
return cljs.core.deref.call(null,g__8702__auto___8851);
});})(g__8702__auto___8851))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__8702__auto___8851){
return (function (seq8821){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8821));
});})(g__8702__auto___8851))
;


var g__8702__auto___8855 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__8702__auto___8855){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8856 = arguments.length;
var i__8606__auto___8857 = (0);
while(true){
if((i__8606__auto___8857 < len__8605__auto___8856)){
args__8612__auto__.push((arguments[i__8606__auto___8857]));

var G__8858 = (i__8606__auto___8857 + (1));
i__8606__auto___8857 = G__8858;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8702__auto___8855))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8702__auto___8855){
return (function (args){
return cljs.core.deref.call(null,g__8702__auto___8855);
});})(g__8702__auto___8855))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__8702__auto___8855){
return (function (seq8822){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8822));
});})(g__8702__auto___8855))
;


var g__8702__auto___8859 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__8702__auto___8859){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8860 = arguments.length;
var i__8606__auto___8861 = (0);
while(true){
if((i__8606__auto___8861 < len__8605__auto___8860)){
args__8612__auto__.push((arguments[i__8606__auto___8861]));

var G__8862 = (i__8606__auto___8861 + (1));
i__8606__auto___8861 = G__8862;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8702__auto___8859))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8702__auto___8859){
return (function (args){
return cljs.core.deref.call(null,g__8702__auto___8859);
});})(g__8702__auto___8859))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__8702__auto___8859){
return (function (seq8823){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8823));
});})(g__8702__auto___8859))
;


var g__8702__auto___8863 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__8702__auto___8863){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8864 = arguments.length;
var i__8606__auto___8865 = (0);
while(true){
if((i__8606__auto___8865 < len__8605__auto___8864)){
args__8612__auto__.push((arguments[i__8606__auto___8865]));

var G__8866 = (i__8606__auto___8865 + (1));
i__8606__auto___8865 = G__8866;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8702__auto___8863))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8702__auto___8863){
return (function (args){
return cljs.core.deref.call(null,g__8702__auto___8863);
});})(g__8702__auto___8863))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__8702__auto___8863){
return (function (seq8824){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8824));
});})(g__8702__auto___8863))
;


var g__8702__auto___8867 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__8702__auto___8867){
return (function cljs$spec$impl$gen$double(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8868 = arguments.length;
var i__8606__auto___8869 = (0);
while(true){
if((i__8606__auto___8869 < len__8605__auto___8868)){
args__8612__auto__.push((arguments[i__8606__auto___8869]));

var G__8870 = (i__8606__auto___8869 + (1));
i__8606__auto___8869 = G__8870;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8702__auto___8867))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8702__auto___8867){
return (function (args){
return cljs.core.deref.call(null,g__8702__auto___8867);
});})(g__8702__auto___8867))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__8702__auto___8867){
return (function (seq8825){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8825));
});})(g__8702__auto___8867))
;


var g__8702__auto___8871 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__8702__auto___8871){
return (function cljs$spec$impl$gen$int(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8872 = arguments.length;
var i__8606__auto___8873 = (0);
while(true){
if((i__8606__auto___8873 < len__8605__auto___8872)){
args__8612__auto__.push((arguments[i__8606__auto___8873]));

var G__8874 = (i__8606__auto___8873 + (1));
i__8606__auto___8873 = G__8874;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8702__auto___8871))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8702__auto___8871){
return (function (args){
return cljs.core.deref.call(null,g__8702__auto___8871);
});})(g__8702__auto___8871))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__8702__auto___8871){
return (function (seq8826){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8826));
});})(g__8702__auto___8871))
;


var g__8702__auto___8875 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__8702__auto___8875){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8876 = arguments.length;
var i__8606__auto___8877 = (0);
while(true){
if((i__8606__auto___8877 < len__8605__auto___8876)){
args__8612__auto__.push((arguments[i__8606__auto___8877]));

var G__8878 = (i__8606__auto___8877 + (1));
i__8606__auto___8877 = G__8878;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8702__auto___8875))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8702__auto___8875){
return (function (args){
return cljs.core.deref.call(null,g__8702__auto___8875);
});})(g__8702__auto___8875))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__8702__auto___8875){
return (function (seq8827){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8827));
});})(g__8702__auto___8875))
;


var g__8702__auto___8879 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__8702__auto___8879){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8880 = arguments.length;
var i__8606__auto___8881 = (0);
while(true){
if((i__8606__auto___8881 < len__8605__auto___8880)){
args__8612__auto__.push((arguments[i__8606__auto___8881]));

var G__8882 = (i__8606__auto___8881 + (1));
i__8606__auto___8881 = G__8882;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8702__auto___8879))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8702__auto___8879){
return (function (args){
return cljs.core.deref.call(null,g__8702__auto___8879);
});})(g__8702__auto___8879))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__8702__auto___8879){
return (function (seq8828){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8828));
});})(g__8702__auto___8879))
;


var g__8702__auto___8883 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__8702__auto___8883){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8884 = arguments.length;
var i__8606__auto___8885 = (0);
while(true){
if((i__8606__auto___8885 < len__8605__auto___8884)){
args__8612__auto__.push((arguments[i__8606__auto___8885]));

var G__8886 = (i__8606__auto___8885 + (1));
i__8606__auto___8885 = G__8886;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8702__auto___8883))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8702__auto___8883){
return (function (args){
return cljs.core.deref.call(null,g__8702__auto___8883);
});})(g__8702__auto___8883))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__8702__auto___8883){
return (function (seq8829){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8829));
});})(g__8702__auto___8883))
;


var g__8702__auto___8887 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__8702__auto___8887){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8888 = arguments.length;
var i__8606__auto___8889 = (0);
while(true){
if((i__8606__auto___8889 < len__8605__auto___8888)){
args__8612__auto__.push((arguments[i__8606__auto___8889]));

var G__8890 = (i__8606__auto___8889 + (1));
i__8606__auto___8889 = G__8890;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8702__auto___8887))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8702__auto___8887){
return (function (args){
return cljs.core.deref.call(null,g__8702__auto___8887);
});})(g__8702__auto___8887))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__8702__auto___8887){
return (function (seq8830){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8830));
});})(g__8702__auto___8887))
;


var g__8702__auto___8891 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__8702__auto___8891){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8892 = arguments.length;
var i__8606__auto___8893 = (0);
while(true){
if((i__8606__auto___8893 < len__8605__auto___8892)){
args__8612__auto__.push((arguments[i__8606__auto___8893]));

var G__8894 = (i__8606__auto___8893 + (1));
i__8606__auto___8893 = G__8894;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8702__auto___8891))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8702__auto___8891){
return (function (args){
return cljs.core.deref.call(null,g__8702__auto___8891);
});})(g__8702__auto___8891))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__8702__auto___8891){
return (function (seq8831){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8831));
});})(g__8702__auto___8891))
;


var g__8702__auto___8895 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__8702__auto___8895){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8896 = arguments.length;
var i__8606__auto___8897 = (0);
while(true){
if((i__8606__auto___8897 < len__8605__auto___8896)){
args__8612__auto__.push((arguments[i__8606__auto___8897]));

var G__8898 = (i__8606__auto___8897 + (1));
i__8606__auto___8897 = G__8898;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8702__auto___8895))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8702__auto___8895){
return (function (args){
return cljs.core.deref.call(null,g__8702__auto___8895);
});})(g__8702__auto___8895))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__8702__auto___8895){
return (function (seq8832){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8832));
});})(g__8702__auto___8895))
;


var g__8702__auto___8899 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__8702__auto___8899){
return (function cljs$spec$impl$gen$string(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8900 = arguments.length;
var i__8606__auto___8901 = (0);
while(true){
if((i__8606__auto___8901 < len__8605__auto___8900)){
args__8612__auto__.push((arguments[i__8606__auto___8901]));

var G__8902 = (i__8606__auto___8901 + (1));
i__8606__auto___8901 = G__8902;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8702__auto___8899))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8702__auto___8899){
return (function (args){
return cljs.core.deref.call(null,g__8702__auto___8899);
});})(g__8702__auto___8899))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__8702__auto___8899){
return (function (seq8833){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8833));
});})(g__8702__auto___8899))
;


var g__8702__auto___8903 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__8702__auto___8903){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8904 = arguments.length;
var i__8606__auto___8905 = (0);
while(true){
if((i__8606__auto___8905 < len__8605__auto___8904)){
args__8612__auto__.push((arguments[i__8606__auto___8905]));

var G__8906 = (i__8606__auto___8905 + (1));
i__8606__auto___8905 = G__8906;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8702__auto___8903))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8702__auto___8903){
return (function (args){
return cljs.core.deref.call(null,g__8702__auto___8903);
});})(g__8702__auto___8903))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__8702__auto___8903){
return (function (seq8834){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8834));
});})(g__8702__auto___8903))
;


var g__8702__auto___8907 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__8702__auto___8907){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8908 = arguments.length;
var i__8606__auto___8909 = (0);
while(true){
if((i__8606__auto___8909 < len__8605__auto___8908)){
args__8612__auto__.push((arguments[i__8606__auto___8909]));

var G__8910 = (i__8606__auto___8909 + (1));
i__8606__auto___8909 = G__8910;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8702__auto___8907))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8702__auto___8907){
return (function (args){
return cljs.core.deref.call(null,g__8702__auto___8907);
});})(g__8702__auto___8907))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__8702__auto___8907){
return (function (seq8835){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8835));
});})(g__8702__auto___8907))
;


var g__8702__auto___8911 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__8702__auto___8911){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8912 = arguments.length;
var i__8606__auto___8913 = (0);
while(true){
if((i__8606__auto___8913 < len__8605__auto___8912)){
args__8612__auto__.push((arguments[i__8606__auto___8913]));

var G__8914 = (i__8606__auto___8913 + (1));
i__8606__auto___8913 = G__8914;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8702__auto___8911))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8702__auto___8911){
return (function (args){
return cljs.core.deref.call(null,g__8702__auto___8911);
});})(g__8702__auto___8911))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__8702__auto___8911){
return (function (seq8836){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8836));
});})(g__8702__auto___8911))
;


var g__8702__auto___8915 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__8702__auto___8915){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8916 = arguments.length;
var i__8606__auto___8917 = (0);
while(true){
if((i__8606__auto___8917 < len__8605__auto___8916)){
args__8612__auto__.push((arguments[i__8606__auto___8917]));

var G__8918 = (i__8606__auto___8917 + (1));
i__8606__auto___8917 = G__8918;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8702__auto___8915))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8702__auto___8915){
return (function (args){
return cljs.core.deref.call(null,g__8702__auto___8915);
});})(g__8702__auto___8915))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__8702__auto___8915){
return (function (seq8837){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8837));
});})(g__8702__auto___8915))
;


var g__8702__auto___8919 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__8702__auto___8919){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8920 = arguments.length;
var i__8606__auto___8921 = (0);
while(true){
if((i__8606__auto___8921 < len__8605__auto___8920)){
args__8612__auto__.push((arguments[i__8606__auto___8921]));

var G__8922 = (i__8606__auto___8921 + (1));
i__8606__auto___8921 = G__8922;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});})(g__8702__auto___8919))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8702__auto___8919){
return (function (args){
return cljs.core.deref.call(null,g__8702__auto___8919);
});})(g__8702__auto___8919))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__8702__auto___8919){
return (function (seq8838){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8838));
});})(g__8702__auto___8919))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8612__auto__ = [];
var len__8605__auto___8925 = arguments.length;
var i__8606__auto___8926 = (0);
while(true){
if((i__8606__auto___8926 < len__8605__auto___8925)){
args__8612__auto__.push((arguments[i__8606__auto___8926]));

var G__8927 = (i__8606__auto___8926 + (1));
i__8606__auto___8926 = G__8927;
continue;
} else {
}
break;
}

var argseq__8613__auto__ = ((((0) < args__8612__auto__.length))?(new cljs.core.IndexedSeq(args__8612__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8613__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__8923_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__8923_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq8924){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8924));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__8928_SHARP_){
return (new Date(p1__8928_SHARP_));
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