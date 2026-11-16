(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-tooling-preview'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-tooling-preview'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-tooling-preview'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-tooling-preview'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-tooling-preview'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var split = kotlin_kotlin.$_$.nk;
  //endregion
  //region block: pre-declaration
  //endregion
  var androidx_compose_ui_tooling_preview_AndroidUiModes$stable;
  var androidx_compose_ui_tooling_preview_Devices$stable;
  var androidx_compose_ui_tooling_preview_Wallpapers$stable;
  var androidx_compose_ui_tooling_preview_datasource_CollectionPreviewParameterProvider$stable;
  function get_LOREM_IPSUM_SOURCE() {
    _init_properties_LoremIpsum_kt__hrvh2l();
    return LOREM_IPSUM_SOURCE;
  }
  var LOREM_IPSUM_SOURCE;
  var androidx_compose_ui_tooling_preview_datasource_LoremIpsum$stable;
  var properties_initialized_LoremIpsum_kt_kuq5r;
  function _init_properties_LoremIpsum_kt__hrvh2l() {
    if (!properties_initialized_LoremIpsum_kt_kuq5r) {
      properties_initialized_LoremIpsum_kt_kuq5r = true;
      LOREM_IPSUM_SOURCE = split('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales laoreet commodo. Phasellus a purus eu risus elementum consequat. Aenean eu elit ut nunc convallis laoreet non ut libero. Suspendisse interdum placerat risus vel ornare. Donec vehicula, turpis sed consectetur ullamcorper, ante nunc egestas quam, ultricies adipiscing velit enim at nunc. Aenean id diam neque. Praesent ut lacus sed justo viverra fermentum et ut sem. Fusce convallis gravida lacinia. Integer semper dolor ut elit sagittis lacinia. Praesent sodales scelerisque eros at rhoncus. Duis posuere sapien vel ipsum ornare interdum at eu quam. Vestibulum vel massa erat. Aenean quis sagittis purus. Phasellus arcu purus, rutrum id consectetur non, bibendum at nibh. \n\nDuis nec erat dolor. Nulla vitae consectetur ligula. Quisque nec mi est. Ut quam ante, rutrum at pellentesque gravida, pretium in dui. Cras eget sapien velit. Suspendisse ut sem nec tellus vehicula eleifend sit amet quis velit. Phasellus quis suscipit nisi. Nam elementum malesuada tincidunt. Curabitur iaculis pretium eros, malesuada faucibus leo eleifend a. Curabitur congue orci in neque euismod a blandit libero vehicula.', [' ']);
      androidx_compose_ui_tooling_preview_datasource_LoremIpsum$stable = 0;
    }
  }
  //region block: init
  androidx_compose_ui_tooling_preview_AndroidUiModes$stable = 0;
  androidx_compose_ui_tooling_preview_Devices$stable = 0;
  androidx_compose_ui_tooling_preview_Wallpapers$stable = 0;
  androidx_compose_ui_tooling_preview_datasource_CollectionPreviewParameterProvider$stable = 8;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-tooling-preview.js.map
