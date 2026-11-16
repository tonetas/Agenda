(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-collection-collection.js', './androidx-lifecycle-lifecycle-common.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-collection-collection.js'), require('./androidx-lifecycle-lifecycle-common.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-lifecycle-lifecycle-runtime'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-runtime'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'androidx-lifecycle-lifecycle-runtime'.");
    }
    if (typeof globalThis['androidx-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-runtime'. Its dependency 'androidx-lifecycle-lifecycle-common' was not found. Please, check whether 'androidx-lifecycle-lifecycle-common' is loaded prior to 'androidx-lifecycle-lifecycle-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'androidx-lifecycle-lifecycle-runtime'.");
    }
    globalThis['androidx-lifecycle-lifecycle-runtime'] = factory(typeof globalThis['androidx-lifecycle-lifecycle-runtime'] === 'undefined' ? {} : globalThis['androidx-lifecycle-lifecycle-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-collection-collection'], globalThis['androidx-lifecycle-lifecycle-common'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_collection_collection, kotlin_androidx_lifecycle_lifecycle_common, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ih;
  var VOID = kotlin_kotlin.$_$.e;
  var toString = kotlin_kotlin.$_$.tn;
  var hashCode = kotlin_kotlin.$_$.fg;
  var equals = kotlin_kotlin.$_$.xf;
  var Entry = kotlin_kotlin.$_$.p6;
  var initMetadataForClass = kotlin_kotlin.$_$.gg;
  var MutableScatterMap = kotlin_androidx_collection_collection.$_$.r;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.l5;
  var objectCreate = kotlin_kotlin.$_$.hh;
  var Unit_getInstance = kotlin_kotlin.$_$.n3;
  var State_DESTROYED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.k;
  var toString_0 = kotlin_kotlin.$_$.lh;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g5;
  var Lifecycling_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.p;
  var ensureNotNull = kotlin_kotlin.$_$.an;
  var initMetadataForCompanion = kotlin_kotlin.$_$.hg;
  var Companion_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.o;
  var removeLastOrNull = kotlin_kotlin.$_$.ub;
  var Lifecycle = kotlin_androidx_lifecycle_lifecycle_common.$_$.c;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.r3;
  var State_INITIALIZED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.l;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var State_CREATED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.j;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Entry_0, 'Entry', VOID, VOID, [Entry]);
  initMetadataForClass(FastSafeIterableMap, 'FastSafeIterableMap', FastSafeIterableMap);
  initMetadataForClass(ObserverWithState, 'ObserverWithState');
  initMetadataForCompanion(Companion);
  initMetadataForClass(LifecycleRegistry, 'LifecycleRegistry', VOID, Lifecycle);
  initMetadataForClass(WeakReference, 'WeakReference');
  //endregion
  function _set_isRemoved__1hyn9t($this, _set____db54di) {
    $this.isRemoved_1 = _set____db54di;
  }
  function _get_map__e6co1h($this) {
    return $this.map_1;
  }
  function _set_head__9nromv($this, _set____db54di) {
    $this.head_1 = _set____db54di;
  }
  function _get_head__d7jo8b($this) {
    return $this.head_1;
  }
  function _set_tail__9uatxj($this, _set____db54di) {
    $this.tail_1 = _set____db54di;
  }
  function _get_tail__de2tiz($this) {
    return $this.tail_1;
  }
  function Entry_0(key, value) {
    this.key_1 = key;
    this.value_1 = value;
    this.next_1 = null;
    this.prev_1 = null;
    this.isRemoved_1 = false;
  }
  protoOf(Entry_0).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(Entry_0).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Entry_0).set_next_2b5sy0_k$ = function (_set____db54di) {
    this.next_1 = _set____db54di;
  };
  protoOf(Entry_0).get_next_wor1vg_k$ = function () {
    return this.next_1;
  };
  protoOf(Entry_0).set_prev_jhhda0_k$ = function (_set____db54di) {
    this.prev_1 = _set____db54di;
  };
  protoOf(Entry_0).get_prev_wosl18_k$ = function () {
    return this.prev_1;
  };
  protoOf(Entry_0).get_isRemoved_gzdz59_k$ = function () {
    return this.isRemoved_1;
  };
  protoOf(Entry_0).markRemoved_rv4t1f_k$ = function () {
    this.isRemoved_1 = true;
  };
  protoOf(Entry_0).component1_7eebsc_k$ = function () {
    return this.key_1;
  };
  protoOf(Entry_0).component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  protoOf(Entry_0).copy_vc066o_k$ = function (key, value) {
    return new Entry_0(key, value);
  };
  protoOf(Entry_0).copy$default_noc8v3_k$ = function (key, value, $super) {
    key = key === VOID ? this.key_1 : key;
    value = value === VOID ? this.value_1 : value;
    return $super === VOID ? this.copy_vc066o_k$(key, value) : $super.copy_vc066o_k$.call(this, key, value);
  };
  protoOf(Entry_0).toString = function () {
    return 'Entry(key=' + toString(this.key_1) + ', value=' + toString(this.value_1) + ')';
  };
  protoOf(Entry_0).hashCode = function () {
    var result = this.key_1 == null ? 0 : hashCode(this.key_1);
    result = imul(result, 31) + (this.value_1 == null ? 0 : hashCode(this.value_1)) | 0;
    return result;
  };
  protoOf(Entry_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Entry_0))
      return false;
    if (!equals(this.key_1, other.key_1))
      return false;
    if (!equals(this.value_1, other.value_1))
      return false;
    return true;
  };
  function FastSafeIterableMap() {
    this.map_1 = new MutableScatterMap();
    this.head_1 = null;
    this.tail_1 = null;
  }
  protoOf(FastSafeIterableMap).contains_7vtym0_k$ = function (key) {
    return this.map_1.containsKey_aw81wo_k$(key);
  };
  protoOf(FastSafeIterableMap).putIfAbsent_pewa1y_k$ = function (key, value) {
    var existing = this.map_1.get_wei43m_k$(key);
    if (!(existing == null)) {
      return existing.value_1;
    }
    var newEntry = new Entry_0(key, value);
    this.map_1.set_b9w55f_k$(key, newEntry);
    if (this.tail_1 == null) {
      this.head_1 = newEntry;
      this.tail_1 = newEntry;
    } else {
      var tmp0_safe_receiver = this.tail_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.next_1 = newEntry;
      }
      newEntry.prev_1 = this.tail_1;
      this.tail_1 = newEntry;
    }
    return null;
  };
  protoOf(FastSafeIterableMap).remove_1r2rzn_k$ = function (key) {
    var tmp0_elvis_lhs = this.map_1.remove_gppy8k_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var entry = tmp;
    if (entry.prev_1 == null)
      this.head_1 = entry.next_1;
    else {
      var tmp1_safe_receiver = entry.prev_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.next_1 = entry.next_1;
      }
    }
    if (entry.next_1 == null)
      this.tail_1 = entry.prev_1;
    else {
      var tmp2_safe_receiver = entry.next_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.prev_1 = entry.prev_1;
      }
    }
    entry.markRemoved_rv4t1f_k$();
    return entry.value_1;
  };
  protoOf(FastSafeIterableMap).ceil_wvwtri_k$ = function (key) {
    var tmp0_safe_receiver = this.map_1.get_wei43m_k$(key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.prev_1;
  };
  protoOf(FastSafeIterableMap).first_1m0hio_k$ = function () {
    var tmp0_elvis_lhs = this.head_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw NoSuchElementException_init_$Create$('Collection is empty.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(FastSafeIterableMap).last_1z1cm_k$ = function () {
    var tmp0_elvis_lhs = this.tail_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw NoSuchElementException_init_$Create$('Collection is empty.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(FastSafeIterableMap).lastOrNull_u4yjpc_k$ = function () {
    return this.tail_1;
  };
  protoOf(FastSafeIterableMap).size_23och_k$ = function () {
    return this.map_1.get_size_woubt6_k$();
  };
  protoOf(FastSafeIterableMap).forEachWithAdditions_i721n7_k$ = function (action) {
    var current = this.head_1;
    while (!(current == null)) {
      if (!current.isRemoved_1) {
        action(current);
      }
      current = current.next_1;
    }
  };
  protoOf(FastSafeIterableMap).forEachReversed_7vaw32_k$ = function (action) {
    var current = this.tail_1;
    while (!(current == null)) {
      if (!current.isRemoved_1) {
        action(current);
      }
      current = current.prev_1;
    }
  };
  function _get_enforceMainThread__q5vxos($this) {
    return $this.enforceMainThread_1;
  }
  function _set_observerMap__9dzsv5($this, _set____db54di) {
    $this.observerMap_1 = _set____db54di;
  }
  function _get_observerMap__kwedgr($this) {
    return $this.observerMap_1;
  }
  function _get_lifecycleOwner__2mqcw2($this) {
    return $this.lifecycleOwner_1;
  }
  function _set_addingObserverCounter__i7ol1c($this, _set____db54di) {
    $this.addingObserverCounter_1 = _set____db54di;
  }
  function _get_addingObserverCounter__c228lo($this) {
    return $this.addingObserverCounter_1;
  }
  function _set_handlingEvent__f3o6y8($this, _set____db54di) {
    $this.handlingEvent_1 = _set____db54di;
  }
  function _get_handlingEvent__43bk4($this) {
    return $this.handlingEvent_1;
  }
  function _set_newEventOccurred__wbal5k($this, _set____db54di) {
    $this.newEventOccurred_1 = _set____db54di;
  }
  function _get_newEventOccurred__9mp7qs($this) {
    return $this.newEventOccurred_1;
  }
  function _set_parentStates__rvr72j($this, _set____db54di) {
    $this.parentStates_1 = _set____db54di;
  }
  function _get_parentStates__rlm4ch($this) {
    return $this.parentStates_1;
  }
  function LifecycleRegistry_init_$Init$(provider, $this) {
    LifecycleRegistry.call($this, provider, true);
    return $this;
  }
  function LifecycleRegistry_init_$Create$(provider) {
    return LifecycleRegistry_init_$Init$(provider, objectCreate(protoOf(LifecycleRegistry)));
  }
  function _set_state__ks53v8($this, _set____db54di) {
    $this.state_1 = _set____db54di;
  }
  function _get_state__b8zcm8($this) {
    return $this.state_1;
  }
  function _get__currentStateFlow__l7oor8($this) {
    return $this._currentStateFlow_1;
  }
  function moveToState($this, next) {
    if ($this.state_1.equals(next)) {
      return Unit_getInstance();
    }
    checkLifecycleStateTransition($this.lifecycleOwner_1.get_26vq_k$(), $this.state_1, next);
    $this.state_1 = next;
    if ($this.handlingEvent_1 || !($this.addingObserverCounter_1 === 0)) {
      $this.newEventOccurred_1 = true;
      return Unit_getInstance();
    }
    $this.handlingEvent_1 = true;
    sync($this);
    $this.handlingEvent_1 = false;
    if ($this.state_1.equals(State_DESTROYED_getInstance())) {
      $this.observerMap_1 = new FastSafeIterableMap();
    }
  }
  function _get_isSynced__dwdj3t($this) {
    if ($this.observerMap_1.size_23och_k$() === 0) {
      return true;
    }
    var eldestObserverState = $this.observerMap_1.first_1m0hio_k$().get_value_j01efc_k$().state_1;
    var newestObserverState = $this.observerMap_1.last_1z1cm_k$().get_value_j01efc_k$().state_1;
    return eldestObserverState.equals(newestObserverState) && $this.state_1.equals(newestObserverState);
  }
  function calculateTargetState($this, observer) {
    var map = $this.observerMap_1.ceil_wvwtri_k$(observer);
    var tmp1_safe_receiver = map == null ? null : map.get_value_j01efc_k$();
    var siblingState = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.state_1;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.parentStates_1.isEmpty_y1axqb_k$()) {
      tmp = $this.parentStates_1.get_c1px32_k$($this.parentStates_1.get_size_woubt6_k$() - 1 | 0);
    } else {
      tmp = null;
    }
    var parentState = tmp;
    return min(min($this.state_1, siblingState), parentState);
  }
  function forwardPass($this, lifecycleOwner) {
    var tmp = $this.observerMap_1;
    tmp.forEachWithAdditions_i721n7_k$(LifecycleRegistry$forwardPass$lambda($this, lifecycleOwner));
  }
  function backwardPass($this, lifecycleOwner) {
    var tmp = $this.observerMap_1;
    tmp.forEachReversed_7vaw32_k$(LifecycleRegistry$backwardPass$lambda($this, lifecycleOwner));
  }
  function sync($this) {
    var tmp0 = $this.lifecycleOwner_1.get_26vq_k$();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'LifecycleOwner of this LifecycleRegistry is already garbage collected. It is too late to change lifecycle state.';
        throw IllegalStateException_init_$Create$(toString_0(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    var lifecycleOwner = tmp$ret$0;
    while (!_get_isSynced__dwdj3t($this)) {
      $this.newEventOccurred_1 = false;
      if ($this.state_1.compareTo_30rs7w_k$($this.observerMap_1.first_1m0hio_k$().get_value_j01efc_k$().state_1) < 0) {
        backwardPass($this, lifecycleOwner);
      }
      var newest = $this.observerMap_1.lastOrNull_u4yjpc_k$();
      if (!$this.newEventOccurred_1 && !(newest == null) && $this.state_1.compareTo_30rs7w_k$(newest.get_value_j01efc_k$().state_1) > 0) {
        forwardPass($this, lifecycleOwner);
      }
    }
    $this.newEventOccurred_1 = false;
    $this._currentStateFlow_1.set_value_v1vabv_k$($this.get_currentState_snihnl_k$());
  }
  function enforceMainThreadIfNeeded($this, methodName) {
    if ($this.enforceMainThread_1) {
      // Inline function 'kotlin.check' call
      if (!isMainThread()) {
        var message = 'Method ' + methodName + ' must be called on the main thread';
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
    }
  }
  function ObserverWithState(observer, initialState) {
    this.state_1 = initialState;
    this.lifecycleObserver_1 = Lifecycling_getInstance().lifecycleEventObserver_pvwem0_k$(ensureNotNull(observer));
  }
  protoOf(ObserverWithState).set_state_m4vg9k_k$ = function (_set____db54di) {
    this.state_1 = _set____db54di;
  };
  protoOf(ObserverWithState).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  protoOf(ObserverWithState).set_lifecycleObserver_oackgk_k$ = function (_set____db54di) {
    this.lifecycleObserver_1 = _set____db54di;
  };
  protoOf(ObserverWithState).get_lifecycleObserver_bbxygn_k$ = function () {
    return this.lifecycleObserver_1;
  };
  protoOf(ObserverWithState).dispatchEvent_khas59_k$ = function (owner, event) {
    var newState = event.get_targetState_kri3mx_k$();
    this.state_1 = min(this.state_1, newState);
    this.lifecycleObserver_1.onStateChanged_3qr65s_k$(ensureNotNull(owner), event);
    this.state_1 = newState;
  };
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).createUnsafe_8zlsyc_k$ = function (owner) {
    return new LifecycleRegistry(owner, false);
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function LifecycleRegistry$forwardPass$lambda(this$0, $lifecycleOwner) {
    return function (_destruct__k2r9zo) {
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var observer = _destruct__k2r9zo.get_value_j01efc_k$();
      while (observer.state_1.compareTo_30rs7w_k$(this$0.state_1) < 0 && !this$0.newEventOccurred_1 && this$0.observerMap_1.contains_7vtym0_k$(key)) {
        this$0.parentStates_1.add_utx5q5_k$(observer.state_1);
        var tmp0 = Companion_getInstance().upFrom_qzigd5_k$(observer.state_1);
        var tmp$ret$2;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          if (tmp0 == null) {
            var message = 'no event up from ' + observer.state_1.toString();
            throw IllegalStateException_init_$Create$(toString_0(message));
          } else {
            tmp$ret$2 = tmp0;
            break $l$block;
          }
        }
        var event = tmp$ret$2;
        observer.dispatchEvent_khas59_k$($lifecycleOwner, event);
        removeLastOrNull(this$0.parentStates_1);
      }
      return Unit_getInstance();
    };
  }
  function LifecycleRegistry$backwardPass$lambda(this$0, $lifecycleOwner) {
    return function (_destruct__k2r9zo) {
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var observer = _destruct__k2r9zo.get_value_j01efc_k$();
      while (observer.state_1.compareTo_30rs7w_k$(this$0.state_1) > 0 && !this$0.newEventOccurred_1 && this$0.observerMap_1.contains_7vtym0_k$(key)) {
        var tmp0 = Companion_getInstance().downFrom_nwe7y8_k$(observer.state_1);
        var tmp$ret$2;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          if (tmp0 == null) {
            var message = 'no event down from ' + observer.state_1.toString();
            throw IllegalStateException_init_$Create$(toString_0(message));
          } else {
            tmp$ret$2 = tmp0;
            break $l$block;
          }
        }
        var event = tmp$ret$2;
        this$0.parentStates_1.add_utx5q5_k$(event.get_targetState_kri3mx_k$());
        observer.dispatchEvent_khas59_k$($lifecycleOwner, event);
        removeLastOrNull(this$0.parentStates_1);
      }
      return Unit_getInstance();
    };
  }
  function LifecycleRegistry(provider, enforceMainThread) {
    Companion_getInstance_0();
    Lifecycle.call(this);
    this.enforceMainThread_1 = enforceMainThread;
    this.observerMap_1 = new FastSafeIterableMap();
    this.lifecycleOwner_1 = new WeakReference(provider);
    this.addingObserverCounter_1 = 0;
    this.handlingEvent_1 = false;
    this.newEventOccurred_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.parentStates_1 = ArrayList_init_$Create$();
    this.state_1 = State_INITIALIZED_getInstance();
    this._currentStateFlow_1 = MutableStateFlow(this.state_1);
  }
  protoOf(LifecycleRegistry).markState_e4zjq0_k$ = function (state) {
    enforceMainThreadIfNeeded(this, 'markState');
    this.set_currentState_4q36uf_k$(state);
  };
  protoOf(LifecycleRegistry).set_currentState_4q36uf_k$ = function (state) {
    enforceMainThreadIfNeeded(this, 'setCurrentState');
    moveToState(this, state);
  };
  protoOf(LifecycleRegistry).get_currentState_snihnl_k$ = function () {
    return this.state_1;
  };
  protoOf(LifecycleRegistry).get_currentStateFlow_8lod67_k$ = function () {
    return asStateFlow(this._currentStateFlow_1);
  };
  protoOf(LifecycleRegistry).handleLifecycleEvent_yoinvo_k$ = function (event) {
    enforceMainThreadIfNeeded(this, 'handleLifecycleEvent');
    moveToState(this, event.get_targetState_kri3mx_k$());
  };
  protoOf(LifecycleRegistry).addObserver_xhlg3u_k$ = function (observer) {
    enforceMainThreadIfNeeded(this, 'addObserver');
    var initialState = this.state_1.equals(State_DESTROYED_getInstance()) ? State_DESTROYED_getInstance() : State_INITIALIZED_getInstance();
    var statefulObserver = new ObserverWithState(observer, initialState);
    var previous = this.observerMap_1.putIfAbsent_pewa1y_k$(observer, statefulObserver);
    if (!(previous == null)) {
      return Unit_getInstance();
    }
    var tmp0_elvis_lhs = this.lifecycleOwner_1.get_26vq_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var lifecycleOwner = tmp;
    var isReentrance = !(this.addingObserverCounter_1 === 0) || this.handlingEvent_1;
    var targetState = calculateTargetState(this, observer);
    this.addingObserverCounter_1 = this.addingObserverCounter_1 + 1 | 0;
    while (statefulObserver.state_1.compareTo_30rs7w_k$(targetState) < 0 && this.observerMap_1.contains_7vtym0_k$(observer)) {
      this.parentStates_1.add_utx5q5_k$(statefulObserver.state_1);
      var tmp1_elvis_lhs = Companion_getInstance().upFrom_qzigd5_k$(statefulObserver.state_1);
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('no event up from ' + statefulObserver.state_1.toString());
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var event = tmp_0;
      statefulObserver.dispatchEvent_khas59_k$(lifecycleOwner, event);
      removeLastOrNull(this.parentStates_1);
      targetState = calculateTargetState(this, observer);
    }
    if (!isReentrance) {
      sync(this);
    }
    this.addingObserverCounter_1 = this.addingObserverCounter_1 - 1 | 0;
  };
  protoOf(LifecycleRegistry).removeObserver_thdcdj_k$ = function (observer) {
    enforceMainThreadIfNeeded(this, 'removeObserver');
    this.observerMap_1.remove_1r2rzn_k$(observer);
  };
  protoOf(LifecycleRegistry).get_observerCount_bk9968_k$ = function () {
    enforceMainThreadIfNeeded(this, 'getObserverCount');
    return this.observerMap_1.size_23och_k$();
  };
  function checkLifecycleStateTransition(owner, current, next) {
    if (current.equals(State_INITIALIZED_getInstance()) && next.equals(State_DESTROYED_getInstance())) {
      // Inline function 'kotlin.error' call
      var message = "State must be at least '" + State_CREATED_getInstance().toString() + "' to be moved to '" + next.toString() + "' in component " + toString(owner);
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    if (current.equals(State_DESTROYED_getInstance()) && !current.equals(next)) {
      // Inline function 'kotlin.error' call
      var message_0 = "State is '" + State_DESTROYED_getInstance().toString() + "' and cannot be moved to `" + next.toString() + '` in component ' + toString(owner);
      throw IllegalStateException_init_$Create$(toString_0(message_0));
    }
  }
  function min(state1, state2) {
    return !(state2 == null) && state2.compareTo_30rs7w_k$(state1) < 0 ? state2 : state1;
  }
  function _set_delegate__v6dc6q($this, _set____db54di) {
    $this.delegate_1 = _set____db54di;
  }
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function WeakReference(reference) {
    this.delegate_1 = new WeakRef(reference);
  }
  protoOf(WeakReference).get_26vq_k$ = function () {
    var tmp0_safe_receiver = this.delegate_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.deref();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp1_safe_receiver;
    }
    return tmp;
  };
  function isMainThread() {
    return true;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_getInstance_0;
  _.$_$.b = LifecycleRegistry_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-lifecycle-lifecycle-runtime.js.map
