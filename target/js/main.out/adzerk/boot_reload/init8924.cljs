(ns adzerk.boot-reload.init8924 (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:52779" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (+))})