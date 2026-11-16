(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './androidx-compose-runtime-runtime.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./androidx-compose-runtime-runtime.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-navigationevent-navigationevent-compose'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'androidx-navigationevent-navigationevent-compose'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-navigationevent-navigationevent-compose'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-navigationevent-navigationevent-compose'.");
    }
    globalThis['androidx-navigationevent-navigationevent-compose'] = factory(typeof globalThis['androidx-navigationevent-navigationevent-compose'] === 'undefined' ? {} : globalThis['androidx-navigationevent-navigationevent-compose'], globalThis['androidx-compose-runtime-runtime'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_androidx_compose_runtime_runtime, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var compositionLocalWithHostDefaultOf = kotlin_androidx_compose_runtime_runtime.$_$.y1;
  var protoOf = kotlin_kotlin.$_$.ih;
  var initMetadataForObject = kotlin_kotlin.$_$.mg;
  var HostDefaultKey = kotlin_androidx_compose_runtime_runtime.$_$.d1;
  var initMetadataForClass = kotlin_kotlin.$_$.gg;
  var VOID = kotlin_kotlin.$_$.e;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(LocalNavigationEventDispatcherOwner, 'LocalNavigationEventDispatcherOwner');
  initMetadataForClass(NavigationEventDispatcherOwnerHostDefaultKey$1, VOID, VOID, VOID, [HostDefaultKey]);
  //endregion
  var androidx_navigationevent_compose_LocalNavigationEventDispatcherOwner$stable;
  function _get_LocalNavigationEventDispatcherOwner__ituigw($this) {
    return $this.LocalNavigationEventDispatcherOwner_1;
  }
  function LocalNavigationEventDispatcherOwner() {
    LocalNavigationEventDispatcherOwner_instance = this;
    this.LocalNavigationEventDispatcherOwner_1 = compositionLocalWithHostDefaultOf(get_NavigationEventDispatcherOwnerHostDefaultKey());
  }
  protoOf(LocalNavigationEventDispatcherOwner).get_current_2iudd5_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = this.LocalNavigationEventDispatcherOwner_1;
    var $composer_1 = $composer_0;
    return $composer_1.consume_ebzcrh_k$(this_0);
  };
  protoOf(LocalNavigationEventDispatcherOwner).provides_5yxyxn_k$ = function (navigationEventDispatcherOwner) {
    return this.LocalNavigationEventDispatcherOwner_1.provides_3agxel_k$(navigationEventDispatcherOwner);
  };
  var LocalNavigationEventDispatcherOwner_instance;
  function LocalNavigationEventDispatcherOwner_getInstance() {
    if (LocalNavigationEventDispatcherOwner_instance == null)
      new LocalNavigationEventDispatcherOwner();
    return LocalNavigationEventDispatcherOwner_instance;
  }
  function androidx_navigationevent_compose_LocalNavigationEventDispatcherOwner$stableprop_getter() {
    return androidx_navigationevent_compose_LocalNavigationEventDispatcherOwner$stable;
  }
  var androidx_navigationevent_compose_NavigationEventState$stable;
  function get_NavigationEventDispatcherOwnerHostDefaultKey() {
    _init_properties_LocalNavigationEventDispatcherOwner_nonAndroid_kt__urt727();
    return NavigationEventDispatcherOwnerHostDefaultKey;
  }
  var NavigationEventDispatcherOwnerHostDefaultKey;
  function NavigationEventDispatcherOwnerHostDefaultKey$1() {
  }
  var properties_initialized_LocalNavigationEventDispatcherOwner_nonAndroid_kt_e10jcx;
  function _init_properties_LocalNavigationEventDispatcherOwner_nonAndroid_kt__urt727() {
    if (!properties_initialized_LocalNavigationEventDispatcherOwner_nonAndroid_kt_e10jcx) {
      properties_initialized_LocalNavigationEventDispatcherOwner_nonAndroid_kt_e10jcx = true;
      NavigationEventDispatcherOwnerHostDefaultKey = new NavigationEventDispatcherOwnerHostDefaultKey$1();
    }
  }
  //region block: init
  androidx_navigationevent_compose_LocalNavigationEventDispatcherOwner$stable = 0;
  androidx_navigationevent_compose_NavigationEventState$stable = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_NavigationEventDispatcherOwnerHostDefaultKey;
  _.$_$.b = androidx_navigationevent_compose_LocalNavigationEventDispatcherOwner$stableprop_getter;
  _.$_$.c = LocalNavigationEventDispatcherOwner_getInstance;
  //endregion
  return _;
}));
