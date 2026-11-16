(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-viewmodel-compose'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-lifecycle-lifecycle-viewmodel-compose'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-viewmodel-compose'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'androidx-lifecycle-lifecycle-viewmodel-compose'.");
    }
    globalThis['androidx-lifecycle-lifecycle-viewmodel-compose'] = factory(typeof globalThis['androidx-lifecycle-lifecycle-viewmodel-compose'] === 'undefined' ? {} : globalThis['androidx-lifecycle-lifecycle-viewmodel-compose'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.ih;
  var HostDefaultKey = kotlin_androidx_compose_runtime_runtime.$_$.d1;
  var initMetadataForClass = kotlin_kotlin.$_$.gg;
  var VOID = kotlin_kotlin.$_$.e;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ViewModelStoreOwnerHostDefaultKey$1, VOID, VOID, VOID, [HostDefaultKey]);
  //endregion
  var androidx_lifecycle_viewmodel_compose_LocalViewModelStoreOwner$stable;
  function get_ViewModelStoreOwnerHostDefaultKey() {
    _init_properties_LocalViewModelStoreOwner_nonJvm_kt__uqn9ej();
    return ViewModelStoreOwnerHostDefaultKey;
  }
  var ViewModelStoreOwnerHostDefaultKey;
  function ViewModelStoreOwnerHostDefaultKey$1() {
  }
  var properties_initialized_LocalViewModelStoreOwner_nonJvm_kt_80m61z;
  function _init_properties_LocalViewModelStoreOwner_nonJvm_kt__uqn9ej() {
    if (!properties_initialized_LocalViewModelStoreOwner_nonJvm_kt_80m61z) {
      properties_initialized_LocalViewModelStoreOwner_nonJvm_kt_80m61z = true;
      ViewModelStoreOwnerHostDefaultKey = new ViewModelStoreOwnerHostDefaultKey$1();
    }
  }
  //region block: init
  androidx_lifecycle_viewmodel_compose_LocalViewModelStoreOwner$stable = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_ViewModelStoreOwnerHostDefaultKey;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-lifecycle-lifecycle-viewmodel-compose.js.map
