(ns adzerk.boot-reload.init8892 (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:52633" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (+))})