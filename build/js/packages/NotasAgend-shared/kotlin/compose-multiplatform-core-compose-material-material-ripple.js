(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-animation-animation-core.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './androidx-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./androidx-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    globalThis['compose-multiplatform-core-compose-material-material-ripple'] = factory(typeof globalThis['compose-multiplatform-core-compose-material-material-ripple'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-material-material-ripple'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['androidx-compose-runtime-runtime']);
  }
}(function (_, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_androidx_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var get_LinearEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.p;
  var VOID = kotlin_kotlin.$_$.e;
  var TweenSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.u;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var protoOf = kotlin_kotlin.$_$.ih;
  var getNumberHashCode = kotlin_kotlin.$_$.cg;
  var initMetadataForClass = kotlin_kotlin.$_$.gg;
  var luminance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z3;
  var initMetadataForCompanion = kotlin_kotlin.$_$.hg;
  var initMetadataForInterface = kotlin_kotlin.$_$.kg;
  var initMetadataForObject = kotlin_kotlin.$_$.mg;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.y2;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(RippleAlpha, 'RippleAlpha');
  initMetadataForCompanion(Companion);
  initMetadataForInterface(RippleTheme, 'RippleTheme');
  initMetadataForObject(DebugRippleTheme, 'DebugRippleTheme', VOID, VOID, [RippleTheme]);
  //endregion
  var androidx_compose_material_ripple_CommonRipple$stable;
  var androidx_compose_material_ripple_CommonRippleNode$stable;
  function get_DefaultTweenSpec() {
    _init_properties_Ripple_kt__d55ieo();
    return DefaultTweenSpec;
  }
  var DefaultTweenSpec;
  var androidx_compose_material_ripple_Ripple$stable;
  var androidx_compose_material_ripple_RippleIndicationInstance$stable;
  var androidx_compose_material_ripple_RippleNode$stable;
  var properties_initialized_Ripple_kt_3wqvym;
  function _init_properties_Ripple_kt__d55ieo() {
    if (!properties_initialized_Ripple_kt_3wqvym) {
      properties_initialized_Ripple_kt_3wqvym = true;
      DefaultTweenSpec = new TweenSpec(15, VOID, get_LinearEasing());
      androidx_compose_material_ripple_Ripple$stable = 0;
      androidx_compose_material_ripple_RippleIndicationInstance$stable = 8;
      androidx_compose_material_ripple_RippleNode$stable = 8;
    }
  }
  function get_BoundedRippleExtraRadius() {
    _init_properties_RippleAnimation_kt__8sy0vy();
    return BoundedRippleExtraRadius;
  }
  var BoundedRippleExtraRadius;
  var androidx_compose_material_ripple_RippleAnimation$stable;
  var properties_initialized_RippleAnimation_kt_4ja21o;
  function _init_properties_RippleAnimation_kt__8sy0vy() {
    if (!properties_initialized_RippleAnimation_kt_4ja21o) {
      properties_initialized_RippleAnimation_kt_4ja21o = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      BoundedRippleExtraRadius = _Dp___init__impl__ms3zkb(10);
      androidx_compose_material_ripple_RippleAnimation$stable = 8;
    }
  }
  function get_LocalRippleTheme() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return LocalRippleTheme;
  }
  var LocalRippleTheme;
  function get_LightThemeHighContrastRippleAlpha() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return LightThemeHighContrastRippleAlpha;
  }
  var LightThemeHighContrastRippleAlpha;
  function get_LightThemeLowContrastRippleAlpha() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return LightThemeLowContrastRippleAlpha;
  }
  var LightThemeLowContrastRippleAlpha;
  function get_DarkThemeRippleAlpha() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return DarkThemeRippleAlpha;
  }
  var DarkThemeRippleAlpha;
  var androidx_compose_material_ripple_RippleAlpha$stable;
  function RippleAlpha(draggedAlpha, focusedAlpha, hoveredAlpha, pressedAlpha) {
    this.draggedAlpha_1 = draggedAlpha;
    this.focusedAlpha_1 = focusedAlpha;
    this.hoveredAlpha_1 = hoveredAlpha;
    this.pressedAlpha_1 = pressedAlpha;
  }
  protoOf(RippleAlpha).get_draggedAlpha_4hlfij_k$ = function () {
    return this.draggedAlpha_1;
  };
  protoOf(RippleAlpha).get_focusedAlpha_9tm3xs_k$ = function () {
    return this.focusedAlpha_1;
  };
  protoOf(RippleAlpha).get_hoveredAlpha_oe6bn8_k$ = function () {
    return this.hoveredAlpha_1;
  };
  protoOf(RippleAlpha).get_pressedAlpha_4p7l23_k$ = function () {
    return this.pressedAlpha_1;
  };
  protoOf(RippleAlpha).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleAlpha))
      return false;
    if (!(this.draggedAlpha_1 === other.draggedAlpha_1))
      return false;
    if (!(this.focusedAlpha_1 === other.focusedAlpha_1))
      return false;
    if (!(this.hoveredAlpha_1 === other.hoveredAlpha_1))
      return false;
    if (!(this.pressedAlpha_1 === other.pressedAlpha_1))
      return false;
    return true;
  };
  protoOf(RippleAlpha).hashCode = function () {
    var result = getNumberHashCode(this.draggedAlpha_1);
    result = imul(31, result) + getNumberHashCode(this.focusedAlpha_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.hoveredAlpha_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.pressedAlpha_1) | 0;
    return result;
  };
  protoOf(RippleAlpha).toString = function () {
    return 'RippleAlpha(draggedAlpha=' + this.draggedAlpha_1 + ', focusedAlpha=' + this.focusedAlpha_1 + ', ' + ('hoveredAlpha=' + this.hoveredAlpha_1 + ', pressedAlpha=' + this.pressedAlpha_1 + ')');
  };
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).defaultRippleColor_nmy1zh_k$ = function (contentColor, lightTheme) {
    var contentLuminance = luminance(contentColor);
    var tmp;
    if (!lightTheme && contentLuminance < 0.5) {
      tmp = Companion_getInstance().get_White_xpp3qf_k$();
    } else {
      tmp = contentColor;
    }
    return tmp;
  };
  protoOf(Companion).defaultRippleAlpha_gyw72t_k$ = function (contentColor, lightTheme) {
    var tmp;
    if (lightTheme) {
      var tmp_0;
      if (luminance(contentColor) > 0.5) {
        tmp_0 = get_LightThemeHighContrastRippleAlpha();
      } else {
        tmp_0 = get_LightThemeLowContrastRippleAlpha();
      }
      tmp = tmp_0;
    } else {
      tmp = get_DarkThemeRippleAlpha();
    }
    return tmp;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function RippleTheme() {
  }
  function DebugRippleTheme() {
    DebugRippleTheme_instance = this;
  }
  protoOf(DebugRippleTheme).defaultColor_r23c72_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(2042140174);
    var tmp0 = Companion_getInstance_0().defaultRippleColor_nmy1zh_k$(Companion_getInstance().get_Black_t4k9fh_k$(), true);
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  };
  protoOf(DebugRippleTheme).rippleAlpha_2ak7e3_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-1629816343);
    var tmp0 = Companion_getInstance_0().defaultRippleAlpha_gyw72t_k$(Companion_getInstance().get_Black_t4k9fh_k$(), true);
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  };
  var DebugRippleTheme_instance;
  function DebugRippleTheme_getInstance() {
    if (DebugRippleTheme_instance == null)
      new DebugRippleTheme();
    return DebugRippleTheme_instance;
  }
  function LocalRippleTheme$lambda() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return DebugRippleTheme_getInstance();
  }
  var properties_initialized_RippleTheme_kt_m09bsn;
  function _init_properties_RippleTheme_kt__e4jrk7() {
    if (!properties_initialized_RippleTheme_kt_m09bsn) {
      properties_initialized_RippleTheme_kt_m09bsn = true;
      LocalRippleTheme = staticCompositionLocalOf(LocalRippleTheme$lambda);
      LightThemeHighContrastRippleAlpha = new RippleAlpha(0.16, 0.24, 0.08, 0.24);
      LightThemeLowContrastRippleAlpha = new RippleAlpha(0.08, 0.12, 0.04, 0.12);
      DarkThemeRippleAlpha = new RippleAlpha(0.08, 0.12, 0.04, 0.1);
      androidx_compose_material_ripple_RippleAlpha$stable = 0;
    }
  }
  //region block: init
  androidx_compose_material_ripple_CommonRipple$stable = 0;
  androidx_compose_material_ripple_CommonRippleNode$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = RippleAlpha;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-material-material-ripple.js.map
