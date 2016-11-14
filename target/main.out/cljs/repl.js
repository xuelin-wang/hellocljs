// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__10655){
var map__10680 = p__10655;
var map__10680__$1 = ((((!((map__10680 == null)))?((((map__10680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10680):map__10680);
var m = map__10680__$1;
var n = cljs.core.get.call(null,map__10680__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__10680__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__10682_10704 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10683_10705 = null;
var count__10684_10706 = (0);
var i__10685_10707 = (0);
while(true){
if((i__10685_10707 < count__10684_10706)){
var f_10708 = cljs.core._nth.call(null,chunk__10683_10705,i__10685_10707);
cljs.core.println.call(null,"  ",f_10708);

var G__10709 = seq__10682_10704;
var G__10710 = chunk__10683_10705;
var G__10711 = count__10684_10706;
var G__10712 = (i__10685_10707 + (1));
seq__10682_10704 = G__10709;
chunk__10683_10705 = G__10710;
count__10684_10706 = G__10711;
i__10685_10707 = G__10712;
continue;
} else {
var temp__6753__auto___10713 = cljs.core.seq.call(null,seq__10682_10704);
if(temp__6753__auto___10713){
var seq__10682_10714__$1 = temp__6753__auto___10713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10682_10714__$1)){
var c__8295__auto___10715 = cljs.core.chunk_first.call(null,seq__10682_10714__$1);
var G__10716 = cljs.core.chunk_rest.call(null,seq__10682_10714__$1);
var G__10717 = c__8295__auto___10715;
var G__10718 = cljs.core.count.call(null,c__8295__auto___10715);
var G__10719 = (0);
seq__10682_10704 = G__10716;
chunk__10683_10705 = G__10717;
count__10684_10706 = G__10718;
i__10685_10707 = G__10719;
continue;
} else {
var f_10720 = cljs.core.first.call(null,seq__10682_10714__$1);
cljs.core.println.call(null,"  ",f_10720);

var G__10721 = cljs.core.next.call(null,seq__10682_10714__$1);
var G__10722 = null;
var G__10723 = (0);
var G__10724 = (0);
seq__10682_10704 = G__10721;
chunk__10683_10705 = G__10722;
count__10684_10706 = G__10723;
i__10685_10707 = G__10724;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_10725 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7389__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7389__auto__)){
return or__7389__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_10725);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_10725)))?cljs.core.second.call(null,arglists_10725):arglists_10725));
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
var seq__10686_10726 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10687_10727 = null;
var count__10688_10728 = (0);
var i__10689_10729 = (0);
while(true){
if((i__10689_10729 < count__10688_10728)){
var vec__10690_10730 = cljs.core._nth.call(null,chunk__10687_10727,i__10689_10729);
var name_10731 = cljs.core.nth.call(null,vec__10690_10730,(0),null);
var map__10693_10732 = cljs.core.nth.call(null,vec__10690_10730,(1),null);
var map__10693_10733__$1 = ((((!((map__10693_10732 == null)))?((((map__10693_10732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10693_10732.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10693_10732):map__10693_10732);
var doc_10734 = cljs.core.get.call(null,map__10693_10733__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10735 = cljs.core.get.call(null,map__10693_10733__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10731);

cljs.core.println.call(null," ",arglists_10735);

if(cljs.core.truth_(doc_10734)){
cljs.core.println.call(null," ",doc_10734);
} else {
}

var G__10736 = seq__10686_10726;
var G__10737 = chunk__10687_10727;
var G__10738 = count__10688_10728;
var G__10739 = (i__10689_10729 + (1));
seq__10686_10726 = G__10736;
chunk__10687_10727 = G__10737;
count__10688_10728 = G__10738;
i__10689_10729 = G__10739;
continue;
} else {
var temp__6753__auto___10740 = cljs.core.seq.call(null,seq__10686_10726);
if(temp__6753__auto___10740){
var seq__10686_10741__$1 = temp__6753__auto___10740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10686_10741__$1)){
var c__8295__auto___10742 = cljs.core.chunk_first.call(null,seq__10686_10741__$1);
var G__10743 = cljs.core.chunk_rest.call(null,seq__10686_10741__$1);
var G__10744 = c__8295__auto___10742;
var G__10745 = cljs.core.count.call(null,c__8295__auto___10742);
var G__10746 = (0);
seq__10686_10726 = G__10743;
chunk__10687_10727 = G__10744;
count__10688_10728 = G__10745;
i__10689_10729 = G__10746;
continue;
} else {
var vec__10695_10747 = cljs.core.first.call(null,seq__10686_10741__$1);
var name_10748 = cljs.core.nth.call(null,vec__10695_10747,(0),null);
var map__10698_10749 = cljs.core.nth.call(null,vec__10695_10747,(1),null);
var map__10698_10750__$1 = ((((!((map__10698_10749 == null)))?((((map__10698_10749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10698_10749.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10698_10749):map__10698_10749);
var doc_10751 = cljs.core.get.call(null,map__10698_10750__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10752 = cljs.core.get.call(null,map__10698_10750__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10748);

cljs.core.println.call(null," ",arglists_10752);

if(cljs.core.truth_(doc_10751)){
cljs.core.println.call(null," ",doc_10751);
} else {
}

var G__10753 = cljs.core.next.call(null,seq__10686_10741__$1);
var G__10754 = null;
var G__10755 = (0);
var G__10756 = (0);
seq__10686_10726 = G__10753;
chunk__10687_10727 = G__10754;
count__10688_10728 = G__10755;
i__10689_10729 = G__10756;
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

var seq__10700 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__10701 = null;
var count__10702 = (0);
var i__10703 = (0);
while(true){
if((i__10703 < count__10702)){
var role = cljs.core._nth.call(null,chunk__10701,i__10703);
var temp__6753__auto___10757__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___10757__$1)){
var spec_10758 = temp__6753__auto___10757__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_10758));
} else {
}

var G__10759 = seq__10700;
var G__10760 = chunk__10701;
var G__10761 = count__10702;
var G__10762 = (i__10703 + (1));
seq__10700 = G__10759;
chunk__10701 = G__10760;
count__10702 = G__10761;
i__10703 = G__10762;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__10700);
if(temp__6753__auto____$1){
var seq__10700__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10700__$1)){
var c__8295__auto__ = cljs.core.chunk_first.call(null,seq__10700__$1);
var G__10763 = cljs.core.chunk_rest.call(null,seq__10700__$1);
var G__10764 = c__8295__auto__;
var G__10765 = cljs.core.count.call(null,c__8295__auto__);
var G__10766 = (0);
seq__10700 = G__10763;
chunk__10701 = G__10764;
count__10702 = G__10765;
i__10703 = G__10766;
continue;
} else {
var role = cljs.core.first.call(null,seq__10700__$1);
var temp__6753__auto___10767__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___10767__$2)){
var spec_10768 = temp__6753__auto___10767__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_10768));
} else {
}

var G__10769 = cljs.core.next.call(null,seq__10700__$1);
var G__10770 = null;
var G__10771 = (0);
var G__10772 = (0);
seq__10700 = G__10769;
chunk__10701 = G__10770;
count__10702 = G__10771;
i__10703 = G__10772;
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