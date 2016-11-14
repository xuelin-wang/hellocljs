// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12274){
var map__12299 = p__12274;
var map__12299__$1 = ((((!((map__12299 == null)))?((((map__12299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12299):map__12299);
var m = map__12299__$1;
var n = cljs.core.get.call(null,map__12299__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12299__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6753__auto__)){
var ns = temp__6753__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12301_12323 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12302_12324 = null;
var count__12303_12325 = (0);
var i__12304_12326 = (0);
while(true){
if((i__12304_12326 < count__12303_12325)){
var f_12327 = cljs.core._nth.call(null,chunk__12302_12324,i__12304_12326);
cljs.core.println.call(null,"  ",f_12327);

var G__12328 = seq__12301_12323;
var G__12329 = chunk__12302_12324;
var G__12330 = count__12303_12325;
var G__12331 = (i__12304_12326 + (1));
seq__12301_12323 = G__12328;
chunk__12302_12324 = G__12329;
count__12303_12325 = G__12330;
i__12304_12326 = G__12331;
continue;
} else {
var temp__6753__auto___12332 = cljs.core.seq.call(null,seq__12301_12323);
if(temp__6753__auto___12332){
var seq__12301_12333__$1 = temp__6753__auto___12332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12301_12333__$1)){
var c__10867__auto___12334 = cljs.core.chunk_first.call(null,seq__12301_12333__$1);
var G__12335 = cljs.core.chunk_rest.call(null,seq__12301_12333__$1);
var G__12336 = c__10867__auto___12334;
var G__12337 = cljs.core.count.call(null,c__10867__auto___12334);
var G__12338 = (0);
seq__12301_12323 = G__12335;
chunk__12302_12324 = G__12336;
count__12303_12325 = G__12337;
i__12304_12326 = G__12338;
continue;
} else {
var f_12339 = cljs.core.first.call(null,seq__12301_12333__$1);
cljs.core.println.call(null,"  ",f_12339);

var G__12340 = cljs.core.next.call(null,seq__12301_12333__$1);
var G__12341 = null;
var G__12342 = (0);
var G__12343 = (0);
seq__12301_12323 = G__12340;
chunk__12302_12324 = G__12341;
count__12303_12325 = G__12342;
i__12304_12326 = G__12343;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12344 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__9961__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__9961__auto__)){
return or__9961__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12344);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12344)))?cljs.core.second.call(null,arglists_12344):arglists_12344));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12305_12345 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12306_12346 = null;
var count__12307_12347 = (0);
var i__12308_12348 = (0);
while(true){
if((i__12308_12348 < count__12307_12347)){
var vec__12309_12349 = cljs.core._nth.call(null,chunk__12306_12346,i__12308_12348);
var name_12350 = cljs.core.nth.call(null,vec__12309_12349,(0),null);
var map__12312_12351 = cljs.core.nth.call(null,vec__12309_12349,(1),null);
var map__12312_12352__$1 = ((((!((map__12312_12351 == null)))?((((map__12312_12351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12312_12351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12312_12351):map__12312_12351);
var doc_12353 = cljs.core.get.call(null,map__12312_12352__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12354 = cljs.core.get.call(null,map__12312_12352__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12350);

cljs.core.println.call(null," ",arglists_12354);

if(cljs.core.truth_(doc_12353)){
cljs.core.println.call(null," ",doc_12353);
} else {
}

var G__12355 = seq__12305_12345;
var G__12356 = chunk__12306_12346;
var G__12357 = count__12307_12347;
var G__12358 = (i__12308_12348 + (1));
seq__12305_12345 = G__12355;
chunk__12306_12346 = G__12356;
count__12307_12347 = G__12357;
i__12308_12348 = G__12358;
continue;
} else {
var temp__6753__auto___12359 = cljs.core.seq.call(null,seq__12305_12345);
if(temp__6753__auto___12359){
var seq__12305_12360__$1 = temp__6753__auto___12359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12305_12360__$1)){
var c__10867__auto___12361 = cljs.core.chunk_first.call(null,seq__12305_12360__$1);
var G__12362 = cljs.core.chunk_rest.call(null,seq__12305_12360__$1);
var G__12363 = c__10867__auto___12361;
var G__12364 = cljs.core.count.call(null,c__10867__auto___12361);
var G__12365 = (0);
seq__12305_12345 = G__12362;
chunk__12306_12346 = G__12363;
count__12307_12347 = G__12364;
i__12308_12348 = G__12365;
continue;
} else {
var vec__12314_12366 = cljs.core.first.call(null,seq__12305_12360__$1);
var name_12367 = cljs.core.nth.call(null,vec__12314_12366,(0),null);
var map__12317_12368 = cljs.core.nth.call(null,vec__12314_12366,(1),null);
var map__12317_12369__$1 = ((((!((map__12317_12368 == null)))?((((map__12317_12368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12317_12368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12317_12368):map__12317_12368);
var doc_12370 = cljs.core.get.call(null,map__12317_12369__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12371 = cljs.core.get.call(null,map__12317_12369__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12367);

cljs.core.println.call(null," ",arglists_12371);

if(cljs.core.truth_(doc_12370)){
cljs.core.println.call(null," ",doc_12370);
} else {
}

var G__12372 = cljs.core.next.call(null,seq__12305_12360__$1);
var G__12373 = null;
var G__12374 = (0);
var G__12375 = (0);
seq__12305_12345 = G__12372;
chunk__12306_12346 = G__12373;
count__12307_12347 = G__12374;
i__12308_12348 = G__12375;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6753__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6753__auto__)){
var fnspec = temp__6753__auto__;
cljs.core.print.call(null,"Spec");

var seq__12319 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12320 = null;
var count__12321 = (0);
var i__12322 = (0);
while(true){
if((i__12322 < count__12321)){
var role = cljs.core._nth.call(null,chunk__12320,i__12322);
var temp__6753__auto___12376__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___12376__$1)){
var spec_12377 = temp__6753__auto___12376__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_12377));
} else {
}

var G__12378 = seq__12319;
var G__12379 = chunk__12320;
var G__12380 = count__12321;
var G__12381 = (i__12322 + (1));
seq__12319 = G__12378;
chunk__12320 = G__12379;
count__12321 = G__12380;
i__12322 = G__12381;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__12319);
if(temp__6753__auto____$1){
var seq__12319__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12319__$1)){
var c__10867__auto__ = cljs.core.chunk_first.call(null,seq__12319__$1);
var G__12382 = cljs.core.chunk_rest.call(null,seq__12319__$1);
var G__12383 = c__10867__auto__;
var G__12384 = cljs.core.count.call(null,c__10867__auto__);
var G__12385 = (0);
seq__12319 = G__12382;
chunk__12320 = G__12383;
count__12321 = G__12384;
i__12322 = G__12385;
continue;
} else {
var role = cljs.core.first.call(null,seq__12319__$1);
var temp__6753__auto___12386__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___12386__$2)){
var spec_12387 = temp__6753__auto___12386__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_12387));
} else {
}

var G__12388 = cljs.core.next.call(null,seq__12319__$1);
var G__12389 = null;
var G__12390 = (0);
var G__12391 = (0);
seq__12319 = G__12388;
chunk__12320 = G__12389;
count__12321 = G__12390;
i__12322 = G__12391;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map