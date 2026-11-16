(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './components-resources-library.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-material3-material3.js', './compose-multiplatform-core-compose-ui-ui-text.js', './compose-multiplatform-core-compose-animation-animation.js', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-compose-ui-ui-geometry.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./components-resources-library.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-material3-material3.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./compose-multiplatform-core-compose-animation-animation.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'NotasAgend:shared'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'NotasAgend:shared'.");
    }
    if (typeof globalThis['components-resources-library'] === 'undefined') {
      throw new Error("Error loading module 'NotasAgend:shared'. Its dependency 'components-resources-library' was not found. Please, check whether 'components-resources-library' is loaded prior to 'NotasAgend:shared'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'NotasAgend:shared'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'NotasAgend:shared'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'NotasAgend:shared'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'NotasAgend:shared'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'NotasAgend:shared'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'NotasAgend:shared'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'NotasAgend:shared'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation-layout' is loaded prior to 'NotasAgend:shared'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'NotasAgend:shared'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'NotasAgend:shared'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'NotasAgend:shared'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'NotasAgend:shared'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-material3-material3'] === 'undefined') {
      throw new Error("Error loading module 'NotasAgend:shared'. Its dependency 'compose-multiplatform-core-compose-material3-material3' was not found. Please, check whether 'compose-multiplatform-core-compose-material3-material3' is loaded prior to 'NotasAgend:shared'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'NotasAgend:shared'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'NotasAgend:shared'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation'] === 'undefined') {
      throw new Error("Error loading module 'NotasAgend:shared'. Its dependency 'compose-multiplatform-core-compose-animation-animation' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation' is loaded prior to 'NotasAgend:shared'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'NotasAgend:shared'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'NotasAgend:shared'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'NotasAgend:shared'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'NotasAgend:shared'.");
    }
    globalThis['NotasAgend:shared'] = factory(typeof globalThis['NotasAgend:shared'] === 'undefined' ? {} : globalThis['NotasAgend:shared'], globalThis['kotlin-kotlin-stdlib'], globalThis['components-resources-library'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-material3-material3'], globalThis['compose-multiplatform-core-compose-ui-ui-text'], globalThis['compose-multiplatform-core-compose-animation-animation'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry']);
  }
}(function (_, kotlin_kotlin, kotlin_components_resources_library, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_animation_animation, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_geometry) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ih;
  var initMetadataForObject = kotlin_kotlin.$_$.mg;
  var readResourceBytes = kotlin_components_resources_library.$_$.a;
  var getResourceUri = kotlin_components_resources_library.$_$.b;
  var VOID = kotlin_kotlin.$_$.e;
  var KProperty1 = kotlin_kotlin.$_$.vi;
  var getPropertyCallableRef = kotlin_kotlin.$_$.dg;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.a4;
  var constructCallableReference = kotlin_kotlin.$_$.tf;
  var lazy = kotlin_kotlin.$_$.gn;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.x2;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.b3;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.g2;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.w2;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.i3;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.v2;
  var rememberComposableLambda = kotlin_androidx_compose_runtime_runtime.$_$.d;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.a3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.hn;
  var Unit_getInstance = kotlin_kotlin.$_$.n3;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.tc;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a2;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.sc;
  var columnMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j;
  var get_currentCompositeKeyHashCode = kotlin_androidx_compose_runtime_runtime.$_$.a2;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.eb;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.oc;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.f2;
  var Applier = kotlin_androidx_compose_runtime_runtime.$_$.s;
  var isInterface = kotlin_kotlin.$_$.vg;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.d3;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.f3;
  var Updater__reconcile_impl_1mfi6g = kotlin_androidx_compose_runtime_runtime.$_$.e3;
  var ColumnScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.o1;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.x;
  var widthIn = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.f1;
  var height = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p;
  var Spacer = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g;
  var padding_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.w;
  var maybeCachedBoxMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.r;
  var BoxScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.n1;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.n;
  var heightIn = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.o;
  var fillMaxHeight = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b1;
  var shadow = kotlin_org_jetbrains_compose_ui_ui.$_$.n;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.i;
  var border = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b2;
  var Long = kotlin_kotlin.$_$.am;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w;
  var BoxWithConstraints = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.c3;
  var THROW_IAE = kotlin_kotlin.$_$.im;
  var enumEntries = kotlin_kotlin.$_$.ge;
  var Enum = kotlin_kotlin.$_$.ul;
  var initMetadataForClass = kotlin_kotlin.$_$.gg;
  var getStringHashCode = kotlin_kotlin.$_$.eg;
  var getBooleanHashCode = kotlin_kotlin.$_$.ag;
  var lastOrNull = kotlin_kotlin.$_$.ya;
  var toString = kotlin_kotlin.$_$.lh;
  var hashCode = kotlin_kotlin.$_$.fg;
  var equals = kotlin_kotlin.$_$.xf;
  var substringBefore = kotlin_kotlin.$_$.rk;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.o2;
  var mutableStateListOf = kotlin_androidx_compose_runtime_runtime.$_$.l2;
  var listOf = kotlin_kotlin.$_$.db;
  var listOf_0 = kotlin_kotlin.$_$.cb;
  var KMutableProperty1 = kotlin_kotlin.$_$.ti;
  var first = kotlin_kotlin.$_$.ea;
  var THROW_CCE = kotlin_kotlin.$_$.hm;
  var isCharSequence = kotlin_kotlin.$_$.rg;
  var trim = kotlin_kotlin.$_$.gl;
  var charSequenceLength = kotlin_kotlin.$_$.qf;
  var split = kotlin_kotlin.$_$.nk;
  var firstOrNull = kotlin_kotlin.$_$.aa;
  var take = kotlin_kotlin.$_$.uk;
  var isBlank = kotlin_kotlin.$_$.tj;
  var equals_0 = kotlin_kotlin.$_$.oj;
  var coerceAtLeast = kotlin_kotlin.$_$.yh;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.r3;
  var joinToString = kotlin_kotlin.$_$.pa;
  var Collection = kotlin_kotlin.$_$.e6;
  var plus = kotlin_kotlin.$_$.pb;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z2;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x2;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z3;
  var lightColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.e;
  var darkColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.d;
  var androidx_compose_runtime_ProvidedValue$stableprop_getter = kotlin_androidx_compose_runtime_runtime.$_$.v1;
  var CompositionLocalProvider = kotlin_androidx_compose_runtime_runtime.$_$.x;
  var Typography_init_$Create$ = kotlin_org_jetbrains_compose_material3_material3.$_$.f;
  var MaterialTheme = kotlin_org_jetbrains_compose_material3_material3.$_$.b;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.y2;
  var to = kotlin_kotlin.$_$.un;
  var rowMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.z;
  var RowScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p1;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.n3;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p3;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.t2;
  var Text = kotlin_org_jetbrains_compose_material3_material3.$_$.c;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var width = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h1;
  var Box = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c;
  var size = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c1;
  var padding_1 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u;
  var get_sp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var clickable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d2;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.f4;
  var size_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.d1;
  var Icon = kotlin_org_jetbrains_compose_material3_material3.$_$.a;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var checkIndexOverflow = kotlin_kotlin.$_$.v7;
  var animateColorAsState = kotlin_org_jetbrains_compose_animation_animation.$_$.e;
  var coerceAtLeast_0 = kotlin_kotlin.$_$.xh;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.t4;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r1;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.t3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.q;
  var PasswordVisualTransformation = kotlin_org_jetbrains_compose_ui_ui_text.$_$.q;
  var BasicTextField = kotlin_org_jetbrains_compose_foundation_foundation.$_$.r1;
  var animateDpAsState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.i1;
  var offset = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s;
  var get_CircleShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.x;
  var rememberScrollState = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i2;
  var horizontalScroll = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f2;
  var KProperty0 = kotlin_kotlin.$_$.ui;
  var getLocalDelegateReference = kotlin_kotlin.$_$.bg;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.s1;
  var Canvas = kotlin_org_jetbrains_compose_foundation_foundation.$_$.w1;
  var Builder = kotlin_org_jetbrains_compose_ui_ui.$_$.z;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j4;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k4;
  var get_DefaultFillType = kotlin_org_jetbrains_compose_ui_ui.$_$.y;
  var PathBuilder = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var shiftRight = kotlin_kotlin.$_$.df;
  var convertToInt = kotlin_kotlin.$_$.qe;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.v2;
  var floatFromBits = kotlin_kotlin.$_$.zf;
  var bitwiseAnd = kotlin_kotlin.$_$.me;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l1;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var verticalScroll = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.r1;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r2;
  var chunked = kotlin_kotlin.$_$.w7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.x7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.q3;
  var toSet = kotlin_kotlin.$_$.cd;
  var setOf = kotlin_kotlin.$_$.yb;
  var plus_0 = kotlin_kotlin.$_$.mb;
  var take_0 = kotlin_kotlin.$_$.oc;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.b4;
  var numberRangeToNumber = kotlin_kotlin.$_$.dh;
  var padStart = kotlin_kotlin.$_$.dk;
  var toIntOrNull = kotlin_kotlin.$_$.yk;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p3;
  var KMutableProperty0 = kotlin_kotlin.$_$.si;
  var coerceAtMost = kotlin_kotlin.$_$.ci;
  var charSequenceGet = kotlin_kotlin.$_$.pf;
  var isDigit = kotlin_kotlin.$_$.uj;
  var isLetterOrDigit = kotlin_kotlin.$_$.wj;
  var ensureNotNull = kotlin_kotlin.$_$.an;
  var contains = kotlin_kotlin.$_$.jj;
  var ComposeViewport = kotlin_org_jetbrains_compose_ui_ui.$_$.ka;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.c;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(drawable, 'drawable');
  initMetadataForObject(string, 'string');
  initMetadataForObject(array, 'array');
  initMetadataForObject(plurals, 'plurals');
  initMetadataForObject(font, 'font');
  initMetadataForObject(Res, 'Res', VOID, VOID, VOID, [1]);
  initMetadataForClass(NotasScreen, 'NotasScreen', VOID, Enum);
  initMetadataForClass(NotasTab, 'NotasTab', VOID, Enum);
  initMetadataForClass(AppointmentCategory, 'AppointmentCategory', VOID, Enum);
  initMetadataForClass(AppointmentItem, 'AppointmentItem');
  initMetadataForClass(ChatMessage, 'ChatMessage');
  initMetadataForClass(ChatRoom, 'ChatRoom');
  initMetadataForClass(Teammate, 'Teammate');
  initMetadataForClass(NotasAppState, 'NotasAppState', NotasAppState);
  initMetadataForClass(NotasAccentOption, 'NotasAccentOption', VOID, Enum);
  initMetadataForClass(NotasColors, 'NotasColors');
  initMetadataForObject(NotasTheme, 'NotasTheme');
  initMetadataForObject(NotasIcons, 'NotasIcons');
  initMetadataForClass(MonthCell, 'MonthCell');
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  //endregion
  var notasagend_shared_generated_resources_Res_drawable$stable;
  var notasagend_shared_generated_resources_Res_string$stable;
  var notasagend_shared_generated_resources_Res_array$stable;
  var notasagend_shared_generated_resources_Res_plurals$stable;
  var notasagend_shared_generated_resources_Res_font$stable;
  var notasagend_shared_generated_resources_Res$stable;
  function drawable() {
    drawable_instance = this;
  }
  var drawable_instance;
  function drawable_getInstance() {
    if (drawable_instance == null)
      new drawable();
    return drawable_instance;
  }
  function string() {
    string_instance = this;
  }
  var string_instance;
  function string_getInstance() {
    if (string_instance == null)
      new string();
    return string_instance;
  }
  function array() {
    array_instance = this;
  }
  var array_instance;
  function array_getInstance() {
    if (array_instance == null)
      new array();
    return array_instance;
  }
  function plurals() {
    plurals_instance = this;
  }
  var plurals_instance;
  function plurals_getInstance() {
    if (plurals_instance == null)
      new plurals();
    return plurals_instance;
  }
  function font() {
    font_instance = this;
  }
  var font_instance;
  function font_getInstance() {
    if (font_instance == null)
      new font();
    return font_instance;
  }
  function Res() {
    Res_instance = this;
  }
  protoOf(Res).readBytes_74yvde_k$ = function (path, $completion) {
    return readResourceBytes('composeResources/notasagend.shared.generated.resources/' + path, $completion);
  };
  protoOf(Res).getUri_3gtoqs_k$ = function (path) {
    return getResourceUri('composeResources/notasagend.shared.generated.resources/' + path);
  };
  var Res_instance;
  function Res_getInstance() {
    if (Res_instance == null)
      new Res();
    return Res_instance;
  }
  function notasagend_shared_generated_resources_Res_drawable$stableprop_getter() {
    return notasagend_shared_generated_resources_Res_drawable$stable;
  }
  function notasagend_shared_generated_resources_Res_string$stableprop_getter() {
    return notasagend_shared_generated_resources_Res_string$stable;
  }
  function notasagend_shared_generated_resources_Res_array$stableprop_getter() {
    return notasagend_shared_generated_resources_Res_array$stable;
  }
  function notasagend_shared_generated_resources_Res_plurals$stableprop_getter() {
    return notasagend_shared_generated_resources_Res_plurals$stable;
  }
  function notasagend_shared_generated_resources_Res_font$stableprop_getter() {
    return notasagend_shared_generated_resources_Res_font$stable;
  }
  function notasagend_shared_generated_resources_Res$stableprop_getter() {
    return notasagend_shared_generated_resources_Res$stable;
  }
  function get_allDrawableResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    var tmp0 = allDrawableResources$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('allDrawableResources', 1, tmp, _get_allDrawableResources_$ref_ur5d6c(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var allDrawableResources$delegate;
  function get_allStringResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    var tmp0 = allStringResources$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('allStringResources', 1, tmp, _get_allStringResources_$ref_vnst3t(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var allStringResources$delegate;
  function get_allStringArrayResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    var tmp0 = allStringArrayResources$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('allStringArrayResources', 1, tmp, _get_allStringArrayResources_$ref_h1tkxq(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var allStringArrayResources$delegate;
  function get_allPluralStringResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    var tmp0 = allPluralStringResources$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('allPluralStringResources', 1, tmp, _get_allPluralStringResources_$ref_zbk6r9(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var allPluralStringResources$delegate;
  function get_allFontResources(_this__u8e3s4) {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    var tmp0 = allFontResources$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('allFontResources', 1, tmp, _get_allFontResources_$ref_7qqkuz(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var allFontResources$delegate;
  function allDrawableResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function _get_allDrawableResources_$ref_ur5d6c() {
    return constructCallableReference(function (p0) {
      return get_allDrawableResources(p0);
    }, 1, 0, 'notasagend.shared.generated.resources/allDrawableResources.<get-allDrawableResources>|<get-allDrawableResources>@notasagend.shared.generated.resources.Res(){}[0]');
  }
  function allStringResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function _get_allStringResources_$ref_vnst3t() {
    return constructCallableReference(function (p0) {
      return get_allStringResources(p0);
    }, 1, 0, 'notasagend.shared.generated.resources/allStringResources.<get-allStringResources>|<get-allStringResources>@notasagend.shared.generated.resources.Res(){}[0]');
  }
  function allStringArrayResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function _get_allStringArrayResources_$ref_h1tkxq() {
    return constructCallableReference(function (p0) {
      return get_allStringArrayResources(p0);
    }, 1, 0, 'notasagend.shared.generated.resources/allStringArrayResources.<get-allStringArrayResources>|<get-allStringArrayResources>@notasagend.shared.generated.resources.Res(){}[0]');
  }
  function allPluralStringResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function _get_allPluralStringResources_$ref_zbk6r9() {
    return constructCallableReference(function (p0) {
      return get_allPluralStringResources(p0);
    }, 1, 0, 'notasagend.shared.generated.resources/allPluralStringResources.<get-allPluralStringResources>|<get-allPluralStringResources>@notasagend.shared.generated.resources.Res(){}[0]');
  }
  function allFontResources$delegate$lambda() {
    _init_properties_ActualResourceCollectors_kt__u9rwji();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    return map;
  }
  function _get_allFontResources_$ref_7qqkuz() {
    return constructCallableReference(function (p0) {
      return get_allFontResources(p0);
    }, 1, 0, 'notasagend.shared.generated.resources/allFontResources.<get-allFontResources>|<get-allFontResources>@notasagend.shared.generated.resources.Res(){}[0]');
  }
  var properties_initialized_ActualResourceCollectors_kt_vf8u04;
  function _init_properties_ActualResourceCollectors_kt__u9rwji() {
    if (!properties_initialized_ActualResourceCollectors_kt_vf8u04) {
      properties_initialized_ActualResourceCollectors_kt_vf8u04 = true;
      allDrawableResources$delegate = lazy(allDrawableResources$delegate$lambda);
      allStringResources$delegate = lazy(allStringResources$delegate$lambda);
      allStringArrayResources$delegate = lazy(allStringArrayResources$delegate$lambda);
      allPluralStringResources$delegate = lazy(allPluralStringResources$delegate$lambda);
      allFontResources$delegate = lazy(allFontResources$delegate$lambda);
    }
  }
  function NotasApp($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1473702907);
    sourceInformation($composer_0, 'C(NotasApp)45@2144L28,50@2274L2280,47@2178L2376:App.kt#ee4z4u');
    if ($composer_0.shouldExecute_4fplh_k$(!($changed === 0), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1473702907, $changed, -1, 'com.notas.agenda.NotasApp (App.kt:44)');
      }
      sourceInformationMarkerStart($composer_0, -1110712969, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = new NotasAppState();
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp0_group = tmp;
      sourceInformationMarkerEnd($composer_0);
      var state = tmp0_group;
      var tmp_0 = state.get_isDarkMode_4i3lkk_k$();
      var tmp_1 = state.get_accentOption_mj5qe0_k$();
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(812954510, true, NotasApp$lambda(state), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp$ret$4 = tmp_2;
      NotasTheme_0(tmp_0, tmp_1, tmp$ret$4, $composer_0, 384);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(NotasApp$lambda_0($changed));
    }
  }
  function NotasScreenRouter(state, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(2099370358);
    sourceInformation($composer_0, 'C(NotasScreenRouter):App.kt#ee4z4u');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(state) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(2099370358, $dirty, -1, 'com.notas.agenda.NotasScreenRouter (App.kt:110)');
      }
      switch (state.get_currentScreen_zelgpw_k$().get_ordinal_ip24qg_k$()) {
        case 0:
          $composer_0.startReplaceGroup_5hh8aj_k$(-1139711600);
          sourceInformation($composer_0, '112@4686L26');
          Notas01AccesoScreen(state, $composer_0, 14 & $dirty);
          $composer_0.endReplaceGroup_ek144q_k$();
          break;
        case 1:
          $composer_0.startReplaceGroup_5hh8aj_k$(-1139709581);
          sourceInformation($composer_0, '113@4749L29');
          Notas02AgendaMesScreen(state, $composer_0, 14 & $dirty);
          $composer_0.endReplaceGroup_ek144q_k$();
          break;
        case 2:
          $composer_0.startReplaceGroup_5hh8aj_k$(-1139707498);
          sourceInformation($composer_0, '114@4814L32');
          Notas03AgendaSemanaScreen(state, $composer_0, 14 & $dirty);
          $composer_0.endReplaceGroup_ek144q_k$();
          break;
        case 3:
          $composer_0.startReplaceGroup_5hh8aj_k$(-1139705357);
          sourceInformation($composer_0, '115@4881L29');
          Notas04AgendaDiaScreen(state, $composer_0, 14 & $dirty);
          $composer_0.endReplaceGroup_ek144q_k$();
          break;
        case 4:
          $composer_0.startReplaceGroup_5hh8aj_k$(-1139703149);
          sourceInformation($composer_0, '116@4950L29');
          Notas05NuevaCitaScreen(state, $composer_0, 14 & $dirty);
          $composer_0.endReplaceGroup_ek144q_k$();
          break;
        case 5:
          $composer_0.startReplaceGroup_5hh8aj_k$(-1139700908);
          sourceInformation($composer_0, '117@5020L30');
          Notas06EditarCitaScreen(state, $composer_0, 14 & $dirty);
          $composer_0.endReplaceGroup_ek144q_k$();
          break;
        case 6:
          $composer_0.startReplaceGroup_5hh8aj_k$(-1139698638);
          sourceInformation($composer_0, '118@5090L60');
          Notas07PersonalizacionScreen(state, false, $composer_0, 48 | 14 & $dirty, 0);
          $composer_0.endReplaceGroup_ek144q_k$();
          break;
        case 7:
          $composer_0.startReplaceGroup_5hh8aj_k$(-1139695461);
          sourceInformation($composer_0, '119@5190L37');
          Notas08CambiarContrasenaScreen(state, $composer_0, 14 & $dirty);
          $composer_0.endReplaceGroup_ek144q_k$();
          break;
        case 8:
          $composer_0.startReplaceGroup_5hh8aj_k$(-1139692965);
          sourceInformation($composer_0, '120@5268L37');
          Notas09ConfigurarAlertasScreen(state, $composer_0, 14 & $dirty);
          $composer_0.endReplaceGroup_ek144q_k$();
          break;
        case 9:
          $composer_0.startReplaceGroup_5hh8aj_k$(-1139690667);
          sourceInformation($composer_0, '121@5340L31');
          Notas11SalasDeChatScreen(state, $composer_0, 14 & $dirty);
          $composer_0.endReplaceGroup_ek144q_k$();
          break;
        case 10:
          $composer_0.startReplaceGroup_5hh8aj_k$(-1139688525);
          sourceInformation($composer_0, '122@5407L29');
          Notas12CrearSalaScreen(state, $composer_0, 14 & $dirty);
          $composer_0.endReplaceGroup_ek144q_k$();
          break;
        case 11:
          $composer_0.startReplaceGroup_5hh8aj_k$(-1139686437);
          sourceInformation($composer_0, '123@5472L37');
          Notas13InvitarCompanerosScreen(state, $composer_0, 14 & $dirty);
          $composer_0.endReplaceGroup_ek144q_k$();
          break;
        case 12:
          $composer_0.startReplaceGroup_5hh8aj_k$(-1139683909);
          sourceInformation($composer_0, '124@5551L37');
          Notas14AceptarInvitacionScreen(state, $composer_0, 14 & $dirty);
          $composer_0.endReplaceGroup_ek144q_k$();
          break;
        case 13:
          $composer_0.startReplaceGroup_5hh8aj_k$(-1139681546);
          sourceInformation($composer_0, '125@5625L32');
          Notas15ConversacionScreen(state, $composer_0, 14 & $dirty);
          $composer_0.endReplaceGroup_ek144q_k$();
          break;
        case 14:
          $composer_0.startReplaceGroup_5hh8aj_k$(-1139679183);
          sourceInformation($composer_0, '126@5698L59');
          Notas07PersonalizacionScreen(state, true, $composer_0, 48 | 14 & $dirty, 0);
          $composer_0.endReplaceGroup_ek144q_k$();
          break;
        default:
          $composer_0.startReplaceGroup_5hh8aj_k$(-1139712347);
          $composer_0.endReplaceGroup_ek144q_k$();
          noWhenBranchMatchedException();
          break;
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(NotasScreenRouter$lambda(state, $changed));
    }
  }
  function NotasAppState$navigateTo$ref(p0) {
    return constructCallableReference(function (p0_0) {
      p0.navigateTo_ndxrxs_k$(p0_0);
      return Unit_getInstance();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.navigateTo|navigateTo(com.notas.agenda.model.NotasScreen){}[0]', 'navigateTo', [p0]);
  }
  function NotasApp$lambda$lambda($outerBackdrop, $state, $colors) {
    return function ($this$BoxWithConstraints, $composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C:App.kt#ee4z4u');
      var $dirty = $changed;
      var tmp;
      if (($changed & 6) === 0) {
        $dirty = $dirty | ($composer_0.changed_ga7h3f_k$($this$BoxWithConstraints) ? 4 : 2);
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(-2081445276, $dirty, -1, 'com.notas.agenda.NotasApp.<anonymous>.<anonymous> (App.kt:59)');
        }
        var tmp_1 = $this$BoxWithConstraints.get_maxWidth_u7u2hk_k$();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(520);
        var isWideViewport = Dp__compareTo_impl_tlg3dl(tmp_1, tmp$ret$0) > 0;
        if (isWideViewport) {
          $composer_0.startReplaceGroup_5hh8aj_k$(-1893230112);
          sourceInformation($composer_0, '62@2695L1566');
          var tmp_2 = background(fillMaxSize(Companion_getInstance_0()), $outerBackdrop);
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$1 = _Dp___init__impl__ms3zkb(10);
          // Inline function 'androidx.compose.foundation.layout.Column' call
          var modifier = padding(tmp_2, VOID, tmp$ret$1);
          var verticalArrangement = null;
          var horizontalAlignment = Companion_getInstance_1().get_CenterHorizontally_97ab0v_k$();
          var $composer_1 = $composer_0;
          if (!((2 & 1) === 0))
            modifier = Companion_getInstance_0();
          if (!((2 & 2) === 0))
            verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
          if (!((2 & 4) === 0))
            horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
          var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 384 >> 3 | 112 & 384 >> 3);
          // Inline function 'androidx.compose.ui.layout.Layout' call
          var modifier_0 = modifier;
          var $composer_2 = $composer_1;
          if (!((0 & 2) === 0))
            modifier_0 = Companion_getInstance_0();
          var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
          var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
          var materialized = materialize($composer_2, modifier_0);
          var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
          // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
          var $composer_3 = $composer_2;
          var tmp_3 = $composer_3.get_applier_bupu8u_k$();
          if (!isInterface(tmp_3, Applier)) {
            invalidApplier();
          }
          $composer_3.startReusableNode_jjgeyp_k$();
          if ($composer_3.get_inserting_25mlsw_k$()) {
            $composer_3.createNode_ahrd54_k$(tmp0);
          } else {
            $composer_3.useNode_io5s9l_k$();
          }
          var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
          Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
          Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
          var $composer_4 = $composer_3;
          var tmp0_0 = ColumnScopeInstance_getInstance();
          var $composer_5 = $composer_4;
          sourceInformationMarkerStart($composer_5, 832603920, 'C71@3123L17,69@2997L233,74@3251L40,75@3312L931:App.kt#ee4z4u');
          var tmp_4 = $state.get_currentScreen_zelgpw_k$();
          var tmp0_1 = $state;
          sourceInformationMarkerStart($composer_5, 165408326, 'CC(remember):App.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          var it = $composer_5.rememberedValue_4dg93v_k$();
          var tmp_5;
          if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
            var value = NotasAppState$navigateTo$ref(tmp0_1);
            $composer_5.updateRememberedValue_l1wh71_k$(value);
            tmp_5 = value;
          } else {
            tmp_5 = it;
          }
          var tmp0_group = tmp_5;
          sourceInformationMarkerEnd($composer_5);
          var tmp_6 = Companion_getInstance_0();
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$12 = _Dp___init__impl__ms3zkb(960);
          NotasScreenExplorerBar(tmp_4, tmp0_group, widthIn(tmp_6, VOID, tmp$ret$12), $composer_5, 384, 0);
          var tmp_7 = Companion_getInstance_0();
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$13 = _Dp___init__impl__ms3zkb(8);
          Spacer(height(tmp_7, tmp$ret$13), $composer_5, 6);
          var tmp_8 = tmp0_0.weight$default_gbkz97_k$(Companion_getInstance_0(), 1.0);
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$14 = _Dp___init__impl__ms3zkb(8);
          // Inline function 'androidx.compose.foundation.layout.Box' call
          var modifier_1 = padding_0(tmp_8, VOID, VOID, VOID, tmp$ret$14);
          var contentAlignment = Companion_getInstance_1().get_Center_3arb0i_k$();
          var propagateMinConstraints = false;
          var $composer_6 = $composer_5;
          if (!((4 & 1) === 0))
            modifier_1 = Companion_getInstance_0();
          if (!((4 & 2) === 0))
            contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
          if (!((4 & 4) === 0))
            propagateMinConstraints = false;
          var measurePolicy_0 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
          // Inline function 'androidx.compose.ui.layout.Layout' call
          var modifier_2 = modifier_1;
          var $composer_7 = $composer_6;
          if (!((0 & 2) === 0))
            modifier_2 = Companion_getInstance_0();
          var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
          var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
          var materialized_0 = materialize($composer_7, modifier_2);
          var tmp0_2 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
          // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
          var $composer_8 = $composer_7;
          var tmp_9 = $composer_8.get_applier_bupu8u_k$();
          if (!isInterface(tmp_9, Applier)) {
            invalidApplier();
          }
          $composer_8.startReusableNode_jjgeyp_k$();
          if ($composer_8.get_inserting_25mlsw_k$()) {
            $composer_8.createNode_ahrd54_k$(tmp0_2);
          } else {
            $composer_8.useNode_io5s9l_k$();
          }
          var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
          Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
          Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
          var $composer_9 = $composer_8;
          BoxScopeInstance_getInstance();
          var $composer_10 = $composer_9;
          sourceInformationMarkerStart($composer_10, -1549002602, 'C81@3563L658:App.kt#ee4z4u');
          var tmp_10 = Companion_getInstance_0();
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$21 = _Dp___init__impl__ms3zkb(396);
          var tmp_11 = fillMaxWidth(widthIn(tmp_10, VOID, tmp$ret$21));
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$22 = _Dp___init__impl__ms3zkb(860);
          var tmp_12 = fillMaxHeight(heightIn(tmp_11, VOID, tmp$ret$22));
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp_13 = _Dp___init__impl__ms3zkb(24);
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$24 = _Dp___init__impl__ms3zkb(28);
          var tmp_14 = shadow(tmp_12, tmp_13, RoundedCornerShape(tmp$ret$24));
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$25 = _Dp___init__impl__ms3zkb(28);
          var tmp_15 = clip(tmp_14, RoundedCornerShape(tmp$ret$25));
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp_16 = _Dp___init__impl__ms3zkb(1);
          var tmp_17 = $colors.get_border_pp3j8c_k$();
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$27 = _Dp___init__impl__ms3zkb(28);
          // Inline function 'androidx.compose.foundation.layout.Box' call
          var modifier_3 = background(border(tmp_15, tmp_16, tmp_17, RoundedCornerShape(tmp$ret$27)), $colors.get_background_8l4942_k$());
          var contentAlignment_0 = null;
          var propagateMinConstraints_0 = false;
          var $composer_11 = $composer_10;
          if (!((6 & 1) === 0))
            modifier_3 = Companion_getInstance_0();
          if (!((6 & 2) === 0))
            contentAlignment_0 = Companion_getInstance_1().get_TopStart_o4x792_k$();
          if (!((6 & 4) === 0))
            propagateMinConstraints_0 = false;
          var measurePolicy_1 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
          // Inline function 'androidx.compose.ui.layout.Layout' call
          var modifier_4 = modifier_3;
          var $composer_12 = $composer_11;
          if (!((0 & 2) === 0))
            modifier_4 = Companion_getInstance_0();
          var compositeKeyHash_1 = get_currentCompositeKeyHashCode($composer_12, 0).hashCode();
          var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
          var materialized_1 = materialize($composer_12, modifier_4);
          var tmp0_3 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
          // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
          var $composer_13 = $composer_12;
          var tmp_18 = $composer_13.get_applier_bupu8u_k$();
          if (!isInterface(tmp_18, Applier)) {
            invalidApplier();
          }
          $composer_13.startReusableNode_jjgeyp_k$();
          if ($composer_13.get_inserting_25mlsw_k$()) {
            $composer_13.createNode_ahrd54_k$(tmp0_3);
          } else {
            $composer_13.useNode_io5s9l_k$();
          }
          var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
          Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_1, compositeKeyHash_1, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
          Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_1, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().get_SetModifier_6tz580_k$());
          var $composer_14 = $composer_13;
          BoxScopeInstance_getInstance();
          var $composer_15 = $composer_14;
          sourceInformationMarkerStart($composer_15, -1070821622, 'C92@4171L24:App.kt#ee4z4u');
          NotasScreenRouter($state, $composer_15, 6);
          sourceInformationMarkerEnd($composer_15);
          $composer_13.endNode_3m0yfn_k$();
          sourceInformationMarkerEnd($composer_10);
          $composer_8.endNode_3m0yfn_k$();
          sourceInformationMarkerEnd($composer_5);
          $composer_3.endNode_3m0yfn_k$();
          $composer_0.endReplaceGroup_ek144q_k$();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(-1891680515);
          sourceInformation($composer_0, '97@4299L225');
          // Inline function 'androidx.compose.foundation.layout.Column' call
          var modifier_5 = background(fillMaxSize(Companion_getInstance_0()), $colors.get_background_8l4942_k$());
          var verticalArrangement_0 = null;
          var horizontalAlignment_0 = null;
          var $composer_16 = $composer_0;
          if (!((6 & 1) === 0))
            modifier_5 = Companion_getInstance_0();
          if (!((6 & 2) === 0))
            verticalArrangement_0 = Arrangement_getInstance().get_Top_18jj1w_k$();
          if (!((6 & 4) === 0))
            horizontalAlignment_0 = Companion_getInstance_1().get_Start_ih4i6x_k$();
          var measurePolicy_2 = columnMeasurePolicy(verticalArrangement_0, horizontalAlignment_0, $composer_16, 14 & 0 >> 3 | 112 & 0 >> 3);
          // Inline function 'androidx.compose.ui.layout.Layout' call
          var modifier_6 = modifier_5;
          var $composer_17 = $composer_16;
          if (!((0 & 2) === 0))
            modifier_6 = Companion_getInstance_0();
          var compositeKeyHash_2 = get_currentCompositeKeyHashCode($composer_17, 0).hashCode();
          var localMap_2 = $composer_17.get_currentCompositionLocalMap_fmcf79_k$();
          var materialized_2 = materialize($composer_17, modifier_6);
          var tmp0_4 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
          // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
          var $composer_18 = $composer_17;
          var tmp_19 = $composer_18.get_applier_bupu8u_k$();
          if (!isInterface(tmp_19, Applier)) {
            invalidApplier();
          }
          $composer_18.startReusableNode_jjgeyp_k$();
          if ($composer_18.get_inserting_25mlsw_k$()) {
            $composer_18.createNode_ahrd54_k$(tmp0_4);
          } else {
            $composer_18.useNode_io5s9l_k$();
          }
          var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_18);
          Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_2, compositeKeyHash_2, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
          Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_2, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().get_SetModifier_6tz580_k$());
          var $composer_19 = $composer_18;
          ColumnScopeInstance_getInstance();
          var $composer_20 = $composer_19;
          sourceInformationMarkerStart($composer_20, -2105400979, 'C102@4482L24:App.kt#ee4z4u');
          NotasScreenRouter($state, $composer_20, 6);
          sourceInformationMarkerEnd($composer_20);
          $composer_18.endNode_3m0yfn_k$();
          $composer_0.endReplaceGroup_ek144q_k$();
        }
        var tmp_20;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_20 = Unit_getInstance();
        }
        tmp_0 = tmp_20;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref(p0) {
    return constructCallableReference(function (p0_0, p1, p2) {
      p0.invoke_c9vvnb_k$(p0_0, p1, p2);
      return Unit_getInstance();
    }, 3, 0, 'androidx.compose.runtime.internal/ComposableLambda.invoke|invoke(kotlin.Any?;androidx.compose.runtime.Composer;kotlin.Int){}[0]', VOID, [p0]);
  }
  function NotasApp$lambda($state) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C51@2308L6,58@2591L1957,54@2412L2136:App.kt#ee4z4u');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(812954510, $changed, -1, 'com.notas.agenda.NotasApp.<anonymous> (App.kt:51)');
        }
        var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
        var outerBackdrop = colors.get_isDark_evw91l_k$() ? Color(new Long(-16117988, 0)) : Color(new Long(-1446667, 0));
        var tmp_0 = background(fillMaxSize(Companion_getInstance_0()), colors.get_isDark_evw91l_k$() ? outerBackdrop : colors.get_background_8l4942_k$());
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-2081445276, true, NotasApp$lambda$lambda(outerBackdrop, $state, colors), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp$ret$0 = tmp_1;
        BoxWithConstraints(tmp_0, null, false, tmp$ret$0, $composer_0, 3072, 6);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_getInstance();
        }
        tmp = tmp_2;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return constructCallableReference(function (p0_0, p1) {
      p0.invoke_z8di7s_k$(p0_0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.runtime.internal/ComposableLambda.invoke|invoke(androidx.compose.runtime.Composer;kotlin.Int){}[0]', VOID, [p0]);
  }
  function NotasApp$lambda_0($$changed) {
    return function ($composer, $force) {
      NotasApp($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NotasScreenRouter$lambda($state, $$changed) {
    return function ($composer, $force) {
      NotasScreenRouter($state, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var com_notas_agenda_model_AppointmentItem$stable;
  var com_notas_agenda_model_ChatMessage$stable;
  var com_notas_agenda_model_ChatRoom$stable;
  var com_notas_agenda_model_Teammate$stable;
  var com_notas_agenda_model_NotasAppState$stable;
  var static_init_called;
  function static_init() {
    if (static_init_called)
      return Unit_getInstance();
    static_init_called = true;
    NotasScreen_LOGIN_instance = new NotasScreen('LOGIN', 0, '01', 'Acceso');
    NotasScreen_AGENDA_MONTH_instance = new NotasScreen('AGENDA_MONTH', 1, '02', 'Agenda \xB7 Mes');
    NotasScreen_AGENDA_WEEK_instance = new NotasScreen('AGENDA_WEEK', 2, '03', 'Agenda \xB7 Semana');
    NotasScreen_AGENDA_DAY_instance = new NotasScreen('AGENDA_DAY', 3, '04', 'Agenda \xB7 D\xEDa');
    NotasScreen_NEW_APPOINTMENT_instance = new NotasScreen('NEW_APPOINTMENT', 4, '05', 'Nueva cita');
    NotasScreen_EDIT_APPOINTMENT_instance = new NotasScreen('EDIT_APPOINTMENT', 5, '06', 'Editar cita');
    NotasScreen_PERSONALIZATION_instance = new NotasScreen('PERSONALIZATION', 6, '07', 'Personalizaci\xF3n');
    NotasScreen_CHANGE_PASSWORD_instance = new NotasScreen('CHANGE_PASSWORD', 7, '08', 'Cambiar contrase\xF1a');
    NotasScreen_CONFIGURE_ALERTS_instance = new NotasScreen('CONFIGURE_ALERTS', 8, '09', 'Configurar alertas');
    NotasScreen_CHAT_ROOMS_instance = new NotasScreen('CHAT_ROOMS', 9, '11', 'Salas de chat');
    NotasScreen_CREATE_ROOM_instance = new NotasScreen('CREATE_ROOM', 10, '12', 'Crear sala');
    NotasScreen_INVITE_TEAM_instance = new NotasScreen('INVITE_TEAM', 11, '13', 'Invitar compa\xF1eros');
    NotasScreen_ACCEPT_INVITATION_instance = new NotasScreen('ACCEPT_INVITATION', 12, '14', 'Aceptar invitaci\xF3n');
    NotasScreen_CONVERSATION_instance = new NotasScreen('CONVERSATION', 13, '15', 'Conversaci\xF3n');
    NotasScreen_NIGHT_APPEARANCE_instance = new NotasScreen('NIGHT_APPEARANCE', 14, '16', 'Apariencia nocturna');
  }
  var NotasScreen_LOGIN_instance;
  var NotasScreen_AGENDA_MONTH_instance;
  var NotasScreen_AGENDA_WEEK_instance;
  var NotasScreen_AGENDA_DAY_instance;
  var NotasScreen_NEW_APPOINTMENT_instance;
  var NotasScreen_EDIT_APPOINTMENT_instance;
  var NotasScreen_PERSONALIZATION_instance;
  var NotasScreen_CHANGE_PASSWORD_instance;
  var NotasScreen_CONFIGURE_ALERTS_instance;
  var NotasScreen_CHAT_ROOMS_instance;
  var NotasScreen_CREATE_ROOM_instance;
  var NotasScreen_INVITE_TEAM_instance;
  var NotasScreen_ACCEPT_INVITATION_instance;
  var NotasScreen_CONVERSATION_instance;
  var NotasScreen_NIGHT_APPEARANCE_instance;
  function values() {
    static_init();
    return [NotasScreen_LOGIN_getInstance(), NotasScreen_AGENDA_MONTH_getInstance(), NotasScreen_AGENDA_WEEK_getInstance(), NotasScreen_AGENDA_DAY_getInstance(), NotasScreen_NEW_APPOINTMENT_getInstance(), NotasScreen_EDIT_APPOINTMENT_getInstance(), NotasScreen_PERSONALIZATION_getInstance(), NotasScreen_CHANGE_PASSWORD_getInstance(), NotasScreen_CONFIGURE_ALERTS_getInstance(), NotasScreen_CHAT_ROOMS_getInstance(), NotasScreen_CREATE_ROOM_getInstance(), NotasScreen_INVITE_TEAM_getInstance(), NotasScreen_ACCEPT_INVITATION_getInstance(), NotasScreen_CONVERSATION_getInstance(), NotasScreen_NIGHT_APPEARANCE_getInstance()];
  }
  function valueOf(value) {
    static_init();
    switch (value) {
      case 'LOGIN':
        return NotasScreen_LOGIN_getInstance();
      case 'AGENDA_MONTH':
        return NotasScreen_AGENDA_MONTH_getInstance();
      case 'AGENDA_WEEK':
        return NotasScreen_AGENDA_WEEK_getInstance();
      case 'AGENDA_DAY':
        return NotasScreen_AGENDA_DAY_getInstance();
      case 'NEW_APPOINTMENT':
        return NotasScreen_NEW_APPOINTMENT_getInstance();
      case 'EDIT_APPOINTMENT':
        return NotasScreen_EDIT_APPOINTMENT_getInstance();
      case 'PERSONALIZATION':
        return NotasScreen_PERSONALIZATION_getInstance();
      case 'CHANGE_PASSWORD':
        return NotasScreen_CHANGE_PASSWORD_getInstance();
      case 'CONFIGURE_ALERTS':
        return NotasScreen_CONFIGURE_ALERTS_getInstance();
      case 'CHAT_ROOMS':
        return NotasScreen_CHAT_ROOMS_getInstance();
      case 'CREATE_ROOM':
        return NotasScreen_CREATE_ROOM_getInstance();
      case 'INVITE_TEAM':
        return NotasScreen_INVITE_TEAM_getInstance();
      case 'ACCEPT_INVITATION':
        return NotasScreen_ACCEPT_INVITATION_getInstance();
      case 'CONVERSATION':
        return NotasScreen_CONVERSATION_getInstance();
      case 'NIGHT_APPEARANCE':
        return NotasScreen_NIGHT_APPEARANCE_getInstance();
      default:
        THROW_IAE('No enum constant com.notas.agenda.model.NotasScreen.' + value);
        break;
    }
  }
  function get_entries() {
    static_init();
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var $ENTRIES;
  function NotasScreen(name, ordinal, code, shortTitle) {
    Enum.call(this, name, ordinal);
    this.code_1 = code;
    this.shortTitle_1 = shortTitle;
  }
  protoOf(NotasScreen).get_code_wok7xy_k$ = function () {
    return this.code_1;
  };
  protoOf(NotasScreen).get_shortTitle_5jurwl_k$ = function () {
    return this.shortTitle_1;
  };
  var static_init_called_0;
  function static_init_0() {
    if (static_init_called_0)
      return Unit_getInstance();
    static_init_called_0 = true;
    NotasTab_AGENDA_instance = new NotasTab('AGENDA', 0);
    NotasTab_TEAM_instance = new NotasTab('TEAM', 1);
    NotasTab_SETTINGS_instance = new NotasTab('SETTINGS', 2);
  }
  var NotasTab_AGENDA_instance;
  var NotasTab_TEAM_instance;
  var NotasTab_SETTINGS_instance;
  function values_0() {
    static_init_0();
    return [NotasTab_AGENDA_getInstance(), NotasTab_TEAM_getInstance(), NotasTab_SETTINGS_getInstance()];
  }
  function valueOf_0(value) {
    static_init_0();
    switch (value) {
      case 'AGENDA':
        return NotasTab_AGENDA_getInstance();
      case 'TEAM':
        return NotasTab_TEAM_getInstance();
      case 'SETTINGS':
        return NotasTab_SETTINGS_getInstance();
      default:
        THROW_IAE('No enum constant com.notas.agenda.model.NotasTab.' + value);
        break;
    }
  }
  function get_entries_0() {
    static_init_0();
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var $ENTRIES_0;
  function NotasTab(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var static_init_called_1;
  function static_init_1() {
    if (static_init_called_1)
      return Unit_getInstance();
    static_init_called_1 = true;
    AppointmentCategory_PRIMARY_instance = new AppointmentCategory('PRIMARY', 0);
    AppointmentCategory_GREEN_instance = new AppointmentCategory('GREEN', 1);
    AppointmentCategory_AMBER_instance = new AppointmentCategory('AMBER', 2);
  }
  var AppointmentCategory_PRIMARY_instance;
  var AppointmentCategory_GREEN_instance;
  var AppointmentCategory_AMBER_instance;
  function values_1() {
    static_init_1();
    return [AppointmentCategory_PRIMARY_getInstance(), AppointmentCategory_GREEN_getInstance(), AppointmentCategory_AMBER_getInstance()];
  }
  function valueOf_1(value) {
    static_init_1();
    switch (value) {
      case 'PRIMARY':
        return AppointmentCategory_PRIMARY_getInstance();
      case 'GREEN':
        return AppointmentCategory_GREEN_getInstance();
      case 'AMBER':
        return AppointmentCategory_AMBER_getInstance();
      default:
        THROW_IAE('No enum constant com.notas.agenda.model.AppointmentCategory.' + value);
        break;
    }
  }
  function get_entries_1() {
    static_init_1();
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var $ENTRIES_1;
  function AppointmentCategory(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AppointmentItem(id, title, weekShortLabel, dayOfMonth, dateLabel, startTime, endTime, durationText, location, notes, reminderEnabled, category) {
    this.id_1 = id;
    this.title_1 = title;
    this.weekShortLabel_1 = weekShortLabel;
    this.dayOfMonth_1 = dayOfMonth;
    this.dateLabel_1 = dateLabel;
    this.startTime_1 = startTime;
    this.endTime_1 = endTime;
    this.durationText_1 = durationText;
    this.location_1 = location;
    this.notes_1 = notes;
    this.reminderEnabled_1 = reminderEnabled;
    this.category_1 = category;
  }
  protoOf(AppointmentItem).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(AppointmentItem).get_title_iz32un_k$ = function () {
    return this.title_1;
  };
  protoOf(AppointmentItem).get_weekShortLabel_oh86q3_k$ = function () {
    return this.weekShortLabel_1;
  };
  protoOf(AppointmentItem).get_dayOfMonth_vblo3a_k$ = function () {
    return this.dayOfMonth_1;
  };
  protoOf(AppointmentItem).get_dateLabel_43kjel_k$ = function () {
    return this.dateLabel_1;
  };
  protoOf(AppointmentItem).get_startTime_qp7d5m_k$ = function () {
    return this.startTime_1;
  };
  protoOf(AppointmentItem).get_endTime_pbcuqp_k$ = function () {
    return this.endTime_1;
  };
  protoOf(AppointmentItem).get_durationText_rgrhee_k$ = function () {
    return this.durationText_1;
  };
  protoOf(AppointmentItem).get_location_d3s02_k$ = function () {
    return this.location_1;
  };
  protoOf(AppointmentItem).get_notes_ivw520_k$ = function () {
    return this.notes_1;
  };
  protoOf(AppointmentItem).get_reminderEnabled_uwxg8q_k$ = function () {
    return this.reminderEnabled_1;
  };
  protoOf(AppointmentItem).get_category_uyv41l_k$ = function () {
    return this.category_1;
  };
  protoOf(AppointmentItem).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(AppointmentItem).component2_7eebsb_k$ = function () {
    return this.title_1;
  };
  protoOf(AppointmentItem).component3_7eebsa_k$ = function () {
    return this.weekShortLabel_1;
  };
  protoOf(AppointmentItem).component4_7eebs9_k$ = function () {
    return this.dayOfMonth_1;
  };
  protoOf(AppointmentItem).component5_7eebs8_k$ = function () {
    return this.dateLabel_1;
  };
  protoOf(AppointmentItem).component6_7eebs7_k$ = function () {
    return this.startTime_1;
  };
  protoOf(AppointmentItem).component7_7eebs6_k$ = function () {
    return this.endTime_1;
  };
  protoOf(AppointmentItem).component8_7eebs5_k$ = function () {
    return this.durationText_1;
  };
  protoOf(AppointmentItem).component9_7eebs4_k$ = function () {
    return this.location_1;
  };
  protoOf(AppointmentItem).component10_gazzfo_k$ = function () {
    return this.notes_1;
  };
  protoOf(AppointmentItem).component11_gazzfn_k$ = function () {
    return this.reminderEnabled_1;
  };
  protoOf(AppointmentItem).component12_gazzfm_k$ = function () {
    return this.category_1;
  };
  protoOf(AppointmentItem).copy_4h6woq_k$ = function (id, title, weekShortLabel, dayOfMonth, dateLabel, startTime, endTime, durationText, location, notes, reminderEnabled, category) {
    return new AppointmentItem(id, title, weekShortLabel, dayOfMonth, dateLabel, startTime, endTime, durationText, location, notes, reminderEnabled, category);
  };
  protoOf(AppointmentItem).copy$default_ajkedt_k$ = function (id, title, weekShortLabel, dayOfMonth, dateLabel, startTime, endTime, durationText, location, notes, reminderEnabled, category, $super) {
    id = id === VOID ? this.id_1 : id;
    title = title === VOID ? this.title_1 : title;
    weekShortLabel = weekShortLabel === VOID ? this.weekShortLabel_1 : weekShortLabel;
    dayOfMonth = dayOfMonth === VOID ? this.dayOfMonth_1 : dayOfMonth;
    dateLabel = dateLabel === VOID ? this.dateLabel_1 : dateLabel;
    startTime = startTime === VOID ? this.startTime_1 : startTime;
    endTime = endTime === VOID ? this.endTime_1 : endTime;
    durationText = durationText === VOID ? this.durationText_1 : durationText;
    location = location === VOID ? this.location_1 : location;
    notes = notes === VOID ? this.notes_1 : notes;
    reminderEnabled = reminderEnabled === VOID ? this.reminderEnabled_1 : reminderEnabled;
    category = category === VOID ? this.category_1 : category;
    return $super === VOID ? this.copy_4h6woq_k$(id, title, weekShortLabel, dayOfMonth, dateLabel, startTime, endTime, durationText, location, notes, reminderEnabled, category) : $super.copy_4h6woq_k$.call(this, id, title, weekShortLabel, dayOfMonth, dateLabel, startTime, endTime, durationText, location, notes, reminderEnabled, category);
  };
  protoOf(AppointmentItem).toString = function () {
    return 'AppointmentItem(id=' + this.id_1 + ', title=' + this.title_1 + ', weekShortLabel=' + this.weekShortLabel_1 + ', dayOfMonth=' + this.dayOfMonth_1 + ', dateLabel=' + this.dateLabel_1 + ', startTime=' + this.startTime_1 + ', endTime=' + this.endTime_1 + ', durationText=' + this.durationText_1 + ', location=' + this.location_1 + ', notes=' + this.notes_1 + ', reminderEnabled=' + this.reminderEnabled_1 + ', category=' + this.category_1.toString() + ')';
  };
  protoOf(AppointmentItem).hashCode = function () {
    var result = getStringHashCode(this.id_1);
    result = imul(result, 31) + getStringHashCode(this.title_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.weekShortLabel_1) | 0;
    result = imul(result, 31) + this.dayOfMonth_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.dateLabel_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.startTime_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.endTime_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.durationText_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.location_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.notes_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.reminderEnabled_1) | 0;
    result = imul(result, 31) + this.category_1.hashCode() | 0;
    return result;
  };
  protoOf(AppointmentItem).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AppointmentItem))
      return false;
    if (!(this.id_1 === other.id_1))
      return false;
    if (!(this.title_1 === other.title_1))
      return false;
    if (!(this.weekShortLabel_1 === other.weekShortLabel_1))
      return false;
    if (!(this.dayOfMonth_1 === other.dayOfMonth_1))
      return false;
    if (!(this.dateLabel_1 === other.dateLabel_1))
      return false;
    if (!(this.startTime_1 === other.startTime_1))
      return false;
    if (!(this.endTime_1 === other.endTime_1))
      return false;
    if (!(this.durationText_1 === other.durationText_1))
      return false;
    if (!(this.location_1 === other.location_1))
      return false;
    if (!(this.notes_1 === other.notes_1))
      return false;
    if (!(this.reminderEnabled_1 === other.reminderEnabled_1))
      return false;
    if (!this.category_1.equals(other.category_1))
      return false;
    return true;
  };
  function ChatMessage(id, sender, body, time, isOutgoing, statusText) {
    statusText = statusText === VOID ? null : statusText;
    this.id_1 = id;
    this.sender_1 = sender;
    this.body_1 = body;
    this.time_1 = time;
    this.isOutgoing_1 = isOutgoing;
    this.statusText_1 = statusText;
  }
  protoOf(ChatMessage).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(ChatMessage).get_sender_jfe81q_k$ = function () {
    return this.sender_1;
  };
  protoOf(ChatMessage).get_body_wojkyz_k$ = function () {
    return this.body_1;
  };
  protoOf(ChatMessage).get_time_wouyhi_k$ = function () {
    return this.time_1;
  };
  protoOf(ChatMessage).get_isOutgoing_w9tjgh_k$ = function () {
    return this.isOutgoing_1;
  };
  protoOf(ChatMessage).get_statusText_g2lgzc_k$ = function () {
    return this.statusText_1;
  };
  protoOf(ChatMessage).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(ChatMessage).component2_7eebsb_k$ = function () {
    return this.sender_1;
  };
  protoOf(ChatMessage).component3_7eebsa_k$ = function () {
    return this.body_1;
  };
  protoOf(ChatMessage).component4_7eebs9_k$ = function () {
    return this.time_1;
  };
  protoOf(ChatMessage).component5_7eebs8_k$ = function () {
    return this.isOutgoing_1;
  };
  protoOf(ChatMessage).component6_7eebs7_k$ = function () {
    return this.statusText_1;
  };
  protoOf(ChatMessage).copy_324h8p_k$ = function (id, sender, body, time, isOutgoing, statusText) {
    return new ChatMessage(id, sender, body, time, isOutgoing, statusText);
  };
  protoOf(ChatMessage).copy$default_hml5t1_k$ = function (id, sender, body, time, isOutgoing, statusText, $super) {
    id = id === VOID ? this.id_1 : id;
    sender = sender === VOID ? this.sender_1 : sender;
    body = body === VOID ? this.body_1 : body;
    time = time === VOID ? this.time_1 : time;
    isOutgoing = isOutgoing === VOID ? this.isOutgoing_1 : isOutgoing;
    statusText = statusText === VOID ? this.statusText_1 : statusText;
    return $super === VOID ? this.copy_324h8p_k$(id, sender, body, time, isOutgoing, statusText) : $super.copy_324h8p_k$.call(this, id, sender, body, time, isOutgoing, statusText);
  };
  protoOf(ChatMessage).toString = function () {
    return 'ChatMessage(id=' + this.id_1 + ', sender=' + this.sender_1 + ', body=' + this.body_1 + ', time=' + this.time_1 + ', isOutgoing=' + this.isOutgoing_1 + ', statusText=' + this.statusText_1 + ')';
  };
  protoOf(ChatMessage).hashCode = function () {
    var result = getStringHashCode(this.id_1);
    result = imul(result, 31) + getStringHashCode(this.sender_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.body_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.time_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.isOutgoing_1) | 0;
    result = imul(result, 31) + (this.statusText_1 == null ? 0 : getStringHashCode(this.statusText_1)) | 0;
    return result;
  };
  protoOf(ChatMessage).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChatMessage))
      return false;
    if (!(this.id_1 === other.id_1))
      return false;
    if (!(this.sender_1 === other.sender_1))
      return false;
    if (!(this.body_1 === other.body_1))
      return false;
    if (!(this.time_1 === other.time_1))
      return false;
    if (!(this.isOutgoing_1 === other.isOutgoing_1))
      return false;
    if (!(this.statusText_1 == other.statusText_1))
      return false;
    return true;
  };
  function ChatRoom(id, name, description, category, unreadCount, memberCount, onlineCount, joinNotice, messages) {
    this.id_1 = id;
    this.name_1 = name;
    this.description_1 = description;
    this.category_1 = category;
    this.unreadCount_1 = unreadCount;
    this.memberCount_1 = memberCount;
    this.onlineCount_1 = onlineCount;
    this.joinNotice_1 = joinNotice;
    this.messages_1 = messages;
  }
  protoOf(ChatRoom).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(ChatRoom).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(ChatRoom).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  protoOf(ChatRoom).get_category_uyv41l_k$ = function () {
    return this.category_1;
  };
  protoOf(ChatRoom).get_unreadCount_3tfxl5_k$ = function () {
    return this.unreadCount_1;
  };
  protoOf(ChatRoom).get_memberCount_yocst0_k$ = function () {
    return this.memberCount_1;
  };
  protoOf(ChatRoom).get_onlineCount_l52c5v_k$ = function () {
    return this.onlineCount_1;
  };
  protoOf(ChatRoom).get_joinNotice_2iq9m3_k$ = function () {
    return this.joinNotice_1;
  };
  protoOf(ChatRoom).get_messages_vl21at_k$ = function () {
    return this.messages_1;
  };
  protoOf(ChatRoom).get_lastPreview_v8kffb_k$ = function () {
    var tmp0_elvis_lhs = lastOrNull(this.messages_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.description_1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var last = tmp;
    var prefix = last.isOutgoing_1 ? 'T\xFA' : last.sender_1;
    return prefix + ': ' + last.body_1;
  };
  protoOf(ChatRoom).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(ChatRoom).component2_7eebsb_k$ = function () {
    return this.name_1;
  };
  protoOf(ChatRoom).component3_7eebsa_k$ = function () {
    return this.description_1;
  };
  protoOf(ChatRoom).component4_7eebs9_k$ = function () {
    return this.category_1;
  };
  protoOf(ChatRoom).component5_7eebs8_k$ = function () {
    return this.unreadCount_1;
  };
  protoOf(ChatRoom).component6_7eebs7_k$ = function () {
    return this.memberCount_1;
  };
  protoOf(ChatRoom).component7_7eebs6_k$ = function () {
    return this.onlineCount_1;
  };
  protoOf(ChatRoom).component8_7eebs5_k$ = function () {
    return this.joinNotice_1;
  };
  protoOf(ChatRoom).component9_7eebs4_k$ = function () {
    return this.messages_1;
  };
  protoOf(ChatRoom).copy_h991z3_k$ = function (id, name, description, category, unreadCount, memberCount, onlineCount, joinNotice, messages) {
    return new ChatRoom(id, name, description, category, unreadCount, memberCount, onlineCount, joinNotice, messages);
  };
  protoOf(ChatRoom).copy$default_g3rn5e_k$ = function (id, name, description, category, unreadCount, memberCount, onlineCount, joinNotice, messages, $super) {
    id = id === VOID ? this.id_1 : id;
    name = name === VOID ? this.name_1 : name;
    description = description === VOID ? this.description_1 : description;
    category = category === VOID ? this.category_1 : category;
    unreadCount = unreadCount === VOID ? this.unreadCount_1 : unreadCount;
    memberCount = memberCount === VOID ? this.memberCount_1 : memberCount;
    onlineCount = onlineCount === VOID ? this.onlineCount_1 : onlineCount;
    joinNotice = joinNotice === VOID ? this.joinNotice_1 : joinNotice;
    messages = messages === VOID ? this.messages_1 : messages;
    return $super === VOID ? this.copy_h991z3_k$(id, name, description, category, unreadCount, memberCount, onlineCount, joinNotice, messages) : $super.copy_h991z3_k$.call(this, id, name, description, category, unreadCount, memberCount, onlineCount, joinNotice, messages);
  };
  protoOf(ChatRoom).toString = function () {
    return 'ChatRoom(id=' + this.id_1 + ', name=' + this.name_1 + ', description=' + this.description_1 + ', category=' + this.category_1.toString() + ', unreadCount=' + this.unreadCount_1 + ', memberCount=' + this.memberCount_1 + ', onlineCount=' + this.onlineCount_1 + ', joinNotice=' + this.joinNotice_1 + ', messages=' + toString(this.messages_1) + ')';
  };
  protoOf(ChatRoom).hashCode = function () {
    var result = getStringHashCode(this.id_1);
    result = imul(result, 31) + getStringHashCode(this.name_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.description_1) | 0;
    result = imul(result, 31) + this.category_1.hashCode() | 0;
    result = imul(result, 31) + this.unreadCount_1 | 0;
    result = imul(result, 31) + this.memberCount_1 | 0;
    result = imul(result, 31) + this.onlineCount_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.joinNotice_1) | 0;
    result = imul(result, 31) + hashCode(this.messages_1) | 0;
    return result;
  };
  protoOf(ChatRoom).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChatRoom))
      return false;
    if (!(this.id_1 === other.id_1))
      return false;
    if (!(this.name_1 === other.name_1))
      return false;
    if (!(this.description_1 === other.description_1))
      return false;
    if (!this.category_1.equals(other.category_1))
      return false;
    if (!(this.unreadCount_1 === other.unreadCount_1))
      return false;
    if (!(this.memberCount_1 === other.memberCount_1))
      return false;
    if (!(this.onlineCount_1 === other.onlineCount_1))
      return false;
    if (!(this.joinNotice_1 === other.joinNotice_1))
      return false;
    if (!equals(this.messages_1, other.messages_1))
      return false;
    return true;
  };
  function Teammate(id, name, role) {
    this.id_1 = id;
    this.name_1 = name;
    this.role_1 = role;
  }
  protoOf(Teammate).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(Teammate).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(Teammate).get_role_wotsxr_k$ = function () {
    return this.role_1;
  };
  protoOf(Teammate).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(Teammate).component2_7eebsb_k$ = function () {
    return this.name_1;
  };
  protoOf(Teammate).component3_7eebsa_k$ = function () {
    return this.role_1;
  };
  protoOf(Teammate).copy_nc7k0r_k$ = function (id, name, role) {
    return new Teammate(id, name, role);
  };
  protoOf(Teammate).copy$default_amr5o9_k$ = function (id, name, role, $super) {
    id = id === VOID ? this.id_1 : id;
    name = name === VOID ? this.name_1 : name;
    role = role === VOID ? this.role_1 : role;
    return $super === VOID ? this.copy_nc7k0r_k$(id, name, role) : $super.copy_nc7k0r_k$.call(this, id, name, role);
  };
  protoOf(Teammate).toString = function () {
    return 'Teammate(id=' + this.id_1 + ', name=' + this.name_1 + ', role=' + this.role_1 + ')';
  };
  protoOf(Teammate).hashCode = function () {
    var result = getStringHashCode(this.id_1);
    result = imul(result, 31) + getStringHashCode(this.name_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.role_1) | 0;
    return result;
  };
  protoOf(Teammate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Teammate))
      return false;
    if (!(this.id_1 === other.id_1))
      return false;
    if (!(this.name_1 === other.name_1))
      return false;
    if (!(this.role_1 === other.role_1))
      return false;
    return true;
  };
  function NotasAppState$_get_currentScreen_$ref_gtevro() {
    return constructCallableReference(function (p0) {
      return p0.get_currentScreen_zelgpw_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.currentScreen.<get-currentScreen>|<get-currentScreen>(){}[0]');
  }
  function NotasAppState$_set_currentScreen_$ref_4we0io() {
    return constructCallableReference(function (p0, p1) {
      p0.set_currentScreen_ho3j3o_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.currentScreen.<set-currentScreen>|<set-currentScreen>(com.notas.agenda.model.NotasScreen){}[0]');
  }
  function NotasAppState$_get_currentScreen_$ref_gtevro_0() {
    return constructCallableReference(function (p0) {
      return p0.get_currentScreen_zelgpw_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.currentScreen.<get-currentScreen>|<get-currentScreen>(){}[0]');
  }
  function NotasAppState$_set_currentScreen_$ref_4we0io_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_currentScreen_ho3j3o_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.currentScreen.<set-currentScreen>|<set-currentScreen>(com.notas.agenda.model.NotasScreen){}[0]');
  }
  function NotasAppState$_get_previousAgendaScreen_$ref_v1vlmi() {
    return constructCallableReference(function (p0) {
      return p0.get_previousAgendaScreen_3j9ax4_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.previousAgendaScreen.<get-previousAgendaScreen>|<get-previousAgendaScreen>(){}[0]');
  }
  function NotasAppState$_set_previousAgendaScreen_$ref_qjidza() {
    return constructCallableReference(function (p0, p1) {
      p0.set_previousAgendaScreen_isbjg0_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.previousAgendaScreen.<set-previousAgendaScreen>|<set-previousAgendaScreen>(com.notas.agenda.model.NotasScreen){}[0]');
  }
  function NotasAppState$_get_previousAgendaScreen_$ref_v1vlmi_0() {
    return constructCallableReference(function (p0) {
      return p0.get_previousAgendaScreen_3j9ax4_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.previousAgendaScreen.<get-previousAgendaScreen>|<get-previousAgendaScreen>(){}[0]');
  }
  function NotasAppState$_set_previousAgendaScreen_$ref_qjidza_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_previousAgendaScreen_isbjg0_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.previousAgendaScreen.<set-previousAgendaScreen>|<set-previousAgendaScreen>(com.notas.agenda.model.NotasScreen){}[0]');
  }
  function NotasAppState$_get_isDarkMode_$ref_jbpobq() {
    return constructCallableReference(function (p0) {
      return p0.get_isDarkMode_4i3lkk_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.isDarkMode.<get-isDarkMode>|<get-isDarkMode>(){}[0]');
  }
  function NotasAppState$_set_isDarkMode_$ref_67drpq() {
    return constructCallableReference(function (p0, p1) {
      p0.set_isDarkMode_i7duwb_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.isDarkMode.<set-isDarkMode>|<set-isDarkMode>(kotlin.Boolean){}[0]');
  }
  function NotasAppState$_get_isDarkMode_$ref_jbpobq_0() {
    return constructCallableReference(function (p0) {
      return p0.get_isDarkMode_4i3lkk_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.isDarkMode.<get-isDarkMode>|<get-isDarkMode>(){}[0]');
  }
  function NotasAppState$_set_isDarkMode_$ref_67drpq_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_isDarkMode_i7duwb_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.isDarkMode.<set-isDarkMode>|<set-isDarkMode>(kotlin.Boolean){}[0]');
  }
  function NotasAppState$_get_accentOption_$ref_t0l4zu() {
    return constructCallableReference(function (p0) {
      return p0.get_accentOption_mj5qe0_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.accentOption.<get-accentOption>|<get-accentOption>(){}[0]');
  }
  function NotasAppState$_set_accentOption_$ref_2j42y() {
    return constructCallableReference(function (p0, p1) {
      p0.set_accentOption_j5q6lc_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.accentOption.<set-accentOption>|<set-accentOption>(com.notas.agenda.theme.NotasAccentOption){}[0]');
  }
  function NotasAppState$_get_accentOption_$ref_t0l4zu_0() {
    return constructCallableReference(function (p0) {
      return p0.get_accentOption_mj5qe0_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.accentOption.<get-accentOption>|<get-accentOption>(){}[0]');
  }
  function NotasAppState$_set_accentOption_$ref_2j42y_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_accentOption_j5q6lc_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.accentOption.<set-accentOption>|<set-accentOption>(com.notas.agenda.theme.NotasAccentOption){}[0]');
  }
  function NotasAppState$_get_userName_$ref_8e41f1() {
    return constructCallableReference(function (p0) {
      return p0.get_userName_ytepxb_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.userName.<get-userName>|<get-userName>(){}[0]');
  }
  function NotasAppState$_set_userName_$ref_nxurz5() {
    return constructCallableReference(function (p0, p1) {
      p0.set_userName_6tcal3_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.userName.<set-userName>|<set-userName>(kotlin.String){}[0]');
  }
  function NotasAppState$_get_userName_$ref_8e41f1_0() {
    return constructCallableReference(function (p0) {
      return p0.get_userName_ytepxb_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.userName.<get-userName>|<get-userName>(){}[0]');
  }
  function NotasAppState$_set_userName_$ref_nxurz5_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_userName_6tcal3_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.userName.<set-userName>|<set-userName>(kotlin.String){}[0]');
  }
  function NotasAppState$_get_userRole_$ref_n8nzug() {
    return constructCallableReference(function (p0) {
      return p0.get_userRole_ythk8a_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.userRole.<get-userRole>|<get-userRole>(){}[0]');
  }
  function NotasAppState$_set_userRole_$ref_w8pbkk() {
    return constructCallableReference(function (p0, p1) {
      p0.set_userRole_682jas_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.userRole.<set-userRole>|<set-userRole>(kotlin.String){}[0]');
  }
  function NotasAppState$_get_userRole_$ref_n8nzug_0() {
    return constructCallableReference(function (p0) {
      return p0.get_userRole_ythk8a_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.userRole.<get-userRole>|<get-userRole>(){}[0]');
  }
  function NotasAppState$_set_userRole_$ref_w8pbkk_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_userRole_682jas_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.userRole.<set-userRole>|<set-userRole>(kotlin.String){}[0]');
  }
  function NotasAppState$_get_userEmail_$ref_29dy5c() {
    return constructCallableReference(function (p0) {
      return p0.get_userEmail_dq8ru0_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.userEmail.<get-userEmail>|<get-userEmail>(){}[0]');
  }
  function NotasAppState$_set_userEmail_$ref_cydkd0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_userEmail_tzea0m_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.userEmail.<set-userEmail>|<set-userEmail>(kotlin.String){}[0]');
  }
  function NotasAppState$_get_userEmail_$ref_29dy5c_0() {
    return constructCallableReference(function (p0) {
      return p0.get_userEmail_dq8ru0_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.userEmail.<get-userEmail>|<get-userEmail>(){}[0]');
  }
  function NotasAppState$_set_userEmail_$ref_cydkd0_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_userEmail_tzea0m_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.userEmail.<set-userEmail>|<set-userEmail>(kotlin.String){}[0]');
  }
  function NotasAppState$_get_loginPassword_$ref_dxx4ur() {
    return constructCallableReference(function (p0) {
      return p0.get_loginPassword_3kfbi3_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.loginPassword.<get-loginPassword>|<get-loginPassword>(){}[0]');
  }
  function NotasAppState$_set_loginPassword_$ref_7rvrfl() {
    return constructCallableReference(function (p0, p1) {
      p0.set_loginPassword_hm8vur_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.loginPassword.<set-loginPassword>|<set-loginPassword>(kotlin.String){}[0]');
  }
  function NotasAppState$_get_loginPassword_$ref_dxx4ur_0() {
    return constructCallableReference(function (p0) {
      return p0.get_loginPassword_3kfbi3_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.loginPassword.<get-loginPassword>|<get-loginPassword>(){}[0]');
  }
  function NotasAppState$_set_loginPassword_$ref_7rvrfl_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_loginPassword_hm8vur_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.loginPassword.<set-loginPassword>|<set-loginPassword>(kotlin.String){}[0]');
  }
  function NotasAppState$_get_remindersEnabled_$ref_hc9ykp() {
    return constructCallableReference(function (p0) {
      return p0.get_remindersEnabled_f25lyv_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.remindersEnabled.<get-remindersEnabled>|<get-remindersEnabled>(){}[0]');
  }
  function NotasAppState$_set_remindersEnabled_$ref_vacml1() {
    return constructCallableReference(function (p0, p1) {
      p0.set_remindersEnabled_222dtk_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.remindersEnabled.<set-remindersEnabled>|<set-remindersEnabled>(kotlin.Boolean){}[0]');
  }
  function NotasAppState$_get_remindersEnabled_$ref_hc9ykp_0() {
    return constructCallableReference(function (p0) {
      return p0.get_remindersEnabled_f25lyv_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.remindersEnabled.<get-remindersEnabled>|<get-remindersEnabled>(){}[0]');
  }
  function NotasAppState$_set_remindersEnabled_$ref_vacml1_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_remindersEnabled_222dtk_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.remindersEnabled.<set-remindersEnabled>|<set-remindersEnabled>(kotlin.Boolean){}[0]');
  }
  function NotasAppState$_get_alertAdvanceMinutes_$ref_iymos8() {
    return constructCallableReference(function (p0) {
      return p0.get_alertAdvanceMinutes_bbtzhs_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.alertAdvanceMinutes.<get-alertAdvanceMinutes>|<get-alertAdvanceMinutes>(){}[0]');
  }
  function NotasAppState$_set_alertAdvanceMinutes_$ref_vlbyxg() {
    return constructCallableReference(function (p0, p1) {
      p0.set_alertAdvanceMinutes_tf4zqk_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.alertAdvanceMinutes.<set-alertAdvanceMinutes>|<set-alertAdvanceMinutes>(kotlin.Int){}[0]');
  }
  function NotasAppState$_get_alertAdvanceMinutes_$ref_iymos8_0() {
    return constructCallableReference(function (p0) {
      return p0.get_alertAdvanceMinutes_bbtzhs_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.alertAdvanceMinutes.<get-alertAdvanceMinutes>|<get-alertAdvanceMinutes>(){}[0]');
  }
  function NotasAppState$_set_alertAdvanceMinutes_$ref_vlbyxg_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_alertAdvanceMinutes_tf4zqk_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.alertAdvanceMinutes.<set-alertAdvanceMinutes>|<set-alertAdvanceMinutes>(kotlin.Int){}[0]');
  }
  function NotasAppState$_get_modalAlertEnabled_$ref_leiykh() {
    return constructCallableReference(function (p0) {
      return p0.get_modalAlertEnabled_ljwycp_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.modalAlertEnabled.<get-modalAlertEnabled>|<get-modalAlertEnabled>(){}[0]');
  }
  function NotasAppState$_set_modalAlertEnabled_$ref_f8wm4t() {
    return constructCallableReference(function (p0, p1) {
      p0.set_modalAlertEnabled_vj17r4_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.modalAlertEnabled.<set-modalAlertEnabled>|<set-modalAlertEnabled>(kotlin.Boolean){}[0]');
  }
  function NotasAppState$_get_modalAlertEnabled_$ref_leiykh_0() {
    return constructCallableReference(function (p0) {
      return p0.get_modalAlertEnabled_ljwycp_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.modalAlertEnabled.<get-modalAlertEnabled>|<get-modalAlertEnabled>(){}[0]');
  }
  function NotasAppState$_set_modalAlertEnabled_$ref_f8wm4t_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_modalAlertEnabled_vj17r4_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.modalAlertEnabled.<set-modalAlertEnabled>|<set-modalAlertEnabled>(kotlin.Boolean){}[0]');
  }
  function NotasAppState$_get_soundAlertEnabled_$ref_x2b0yr() {
    return constructCallableReference(function (p0) {
      return p0.get_soundAlertEnabled_clh83v_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.soundAlertEnabled.<get-soundAlertEnabled>|<get-soundAlertEnabled>(){}[0]');
  }
  function NotasAppState$_set_soundAlertEnabled_$ref_qwooj3() {
    return constructCallableReference(function (p0, p1) {
      p0.set_soundAlertEnabled_9zpsbm_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.soundAlertEnabled.<set-soundAlertEnabled>|<set-soundAlertEnabled>(kotlin.Boolean){}[0]');
  }
  function NotasAppState$_get_soundAlertEnabled_$ref_x2b0yr_0() {
    return constructCallableReference(function (p0) {
      return p0.get_soundAlertEnabled_clh83v_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.soundAlertEnabled.<get-soundAlertEnabled>|<get-soundAlertEnabled>(){}[0]');
  }
  function NotasAppState$_set_soundAlertEnabled_$ref_qwooj3_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_soundAlertEnabled_9zpsbm_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.soundAlertEnabled.<set-soundAlertEnabled>|<set-soundAlertEnabled>(kotlin.Boolean){}[0]');
  }
  function NotasAppState$_get_selectedTone_$ref_j10jgk() {
    return constructCallableReference(function (p0) {
      return p0.get_selectedTone_ogzwga_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.selectedTone.<get-selectedTone>|<get-selectedTone>(){}[0]');
  }
  function NotasAppState$_set_selectedTone_$ref_mwz9fs() {
    return constructCallableReference(function (p0, p1) {
      p0.set_selectedTone_hc1lvk_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.selectedTone.<set-selectedTone>|<set-selectedTone>(kotlin.String){}[0]');
  }
  function NotasAppState$_get_selectedTone_$ref_j10jgk_0() {
    return constructCallableReference(function (p0) {
      return p0.get_selectedTone_ogzwga_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.selectedTone.<get-selectedTone>|<get-selectedTone>(){}[0]');
  }
  function NotasAppState$_set_selectedTone_$ref_mwz9fs_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_selectedTone_hc1lvk_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.selectedTone.<set-selectedTone>|<set-selectedTone>(kotlin.String){}[0]');
  }
  function NotasAppState$_get_selectedDayOfMonth_$ref_wbqgrl() {
    return constructCallableReference(function (p0) {
      return p0.get_selectedDayOfMonth_5gc2j3_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.selectedDayOfMonth.<get-selectedDayOfMonth>|<get-selectedDayOfMonth>(){}[0]');
  }
  function NotasAppState$_set_selectedDayOfMonth_$ref_a2n0bx() {
    return constructCallableReference(function (p0, p1) {
      p0.set_selectedDayOfMonth_xad83n_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.selectedDayOfMonth.<set-selectedDayOfMonth>|<set-selectedDayOfMonth>(kotlin.Int){}[0]');
  }
  function NotasAppState$_get_selectedDayOfMonth_$ref_wbqgrl_0() {
    return constructCallableReference(function (p0) {
      return p0.get_selectedDayOfMonth_5gc2j3_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.selectedDayOfMonth.<get-selectedDayOfMonth>|<get-selectedDayOfMonth>(){}[0]');
  }
  function NotasAppState$_set_selectedDayOfMonth_$ref_a2n0bx_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_selectedDayOfMonth_xad83n_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.selectedDayOfMonth.<set-selectedDayOfMonth>|<set-selectedDayOfMonth>(kotlin.Int){}[0]');
  }
  function NotasAppState$_get_monthOffset_$ref_clxbwi() {
    return constructCallableReference(function (p0) {
      return p0.get_monthOffset_njsssq_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.monthOffset.<get-monthOffset>|<get-monthOffset>(){}[0]');
  }
  function NotasAppState$_set_monthOffset_$ref_mpnjf2() {
    return constructCallableReference(function (p0, p1) {
      p0.set_monthOffset_jbc2ry_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.monthOffset.<set-monthOffset>|<set-monthOffset>(kotlin.Int){}[0]');
  }
  function NotasAppState$_get_monthOffset_$ref_clxbwi_0() {
    return constructCallableReference(function (p0) {
      return p0.get_monthOffset_njsssq_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.monthOffset.<get-monthOffset>|<get-monthOffset>(){}[0]');
  }
  function NotasAppState$_set_monthOffset_$ref_mpnjf2_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_monthOffset_jbc2ry_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.monthOffset.<set-monthOffset>|<set-monthOffset>(kotlin.Int){}[0]');
  }
  function NotasAppState$_get_editingAppointmentId_$ref_f55lnr() {
    return constructCallableReference(function (p0) {
      return p0.get_editingAppointmentId_p80uqz_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.editingAppointmentId.<get-editingAppointmentId>|<get-editingAppointmentId>(){}[0]');
  }
  function NotasAppState$_set_editingAppointmentId_$ref_amse0j() {
    return constructCallableReference(function (p0, p1) {
      p0.set_editingAppointmentId_1wqu2g_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.editingAppointmentId.<set-editingAppointmentId>|<set-editingAppointmentId>(kotlin.String?){}[0]');
  }
  function NotasAppState$_get_editingAppointmentId_$ref_f55lnr_0() {
    return constructCallableReference(function (p0) {
      return p0.get_editingAppointmentId_p80uqz_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.editingAppointmentId.<get-editingAppointmentId>|<get-editingAppointmentId>(){}[0]');
  }
  function NotasAppState$_set_editingAppointmentId_$ref_amse0j_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_editingAppointmentId_1wqu2g_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.editingAppointmentId.<set-editingAppointmentId>|<set-editingAppointmentId>(kotlin.String?){}[0]');
  }
  function NotasAppState$_get_hasPendingInvitation_$ref_k24c3x() {
    return constructCallableReference(function (p0) {
      return p0.get_hasPendingInvitation_vxnvxb_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.hasPendingInvitation.<get-hasPendingInvitation>|<get-hasPendingInvitation>(){}[0]');
  }
  function NotasAppState$_set_hasPendingInvitation_$ref_okhjr5() {
    return constructCallableReference(function (p0, p1) {
      p0.set_hasPendingInvitation_jh5y8u_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.hasPendingInvitation.<set-hasPendingInvitation>|<set-hasPendingInvitation>(kotlin.Boolean){}[0]');
  }
  function NotasAppState$_get_hasPendingInvitation_$ref_k24c3x_0() {
    return constructCallableReference(function (p0) {
      return p0.get_hasPendingInvitation_vxnvxb_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.hasPendingInvitation.<get-hasPendingInvitation>|<get-hasPendingInvitation>(){}[0]');
  }
  function NotasAppState$_set_hasPendingInvitation_$ref_okhjr5_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_hasPendingInvitation_jh5y8u_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.hasPendingInvitation.<set-hasPendingInvitation>|<set-hasPendingInvitation>(kotlin.Boolean){}[0]');
  }
  function NotasAppState$_get_roomSearchQuery_$ref_wvo1jg() {
    return constructCallableReference(function (p0) {
      return p0.get_roomSearchQuery_wr0xmk_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.roomSearchQuery.<get-roomSearchQuery>|<get-roomSearchQuery>(){}[0]');
  }
  function NotasAppState$_set_roomSearchQuery_$ref_jkxsn4() {
    return constructCallableReference(function (p0, p1) {
      p0.set_roomSearchQuery_pe72aq_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.roomSearchQuery.<set-roomSearchQuery>|<set-roomSearchQuery>(kotlin.String){}[0]');
  }
  function NotasAppState$_get_roomSearchQuery_$ref_wvo1jg_0() {
    return constructCallableReference(function (p0) {
      return p0.get_roomSearchQuery_wr0xmk_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.roomSearchQuery.<get-roomSearchQuery>|<get-roomSearchQuery>(){}[0]');
  }
  function NotasAppState$_set_roomSearchQuery_$ref_jkxsn4_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_roomSearchQuery_pe72aq_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.roomSearchQuery.<set-roomSearchQuery>|<set-roomSearchQuery>(kotlin.String){}[0]');
  }
  function NotasAppState$_get_teammateSearchQuery_$ref_ehw019() {
    return constructCallableReference(function (p0) {
      return p0.get_teammateSearchQuery_b0vtxx_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.teammateSearchQuery.<get-teammateSearchQuery>|<get-teammateSearchQuery>(){}[0]');
  }
  function NotasAppState$_set_teammateSearchQuery_$ref_5z9e87() {
    return constructCallableReference(function (p0, p1) {
      p0.set_teammateSearchQuery_52mqp5_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.teammateSearchQuery.<set-teammateSearchQuery>|<set-teammateSearchQuery>(kotlin.String){}[0]');
  }
  function NotasAppState$_get_teammateSearchQuery_$ref_ehw019_0() {
    return constructCallableReference(function (p0) {
      return p0.get_teammateSearchQuery_b0vtxx_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.teammateSearchQuery.<get-teammateSearchQuery>|<get-teammateSearchQuery>(){}[0]');
  }
  function NotasAppState$_set_teammateSearchQuery_$ref_5z9e87_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_teammateSearchQuery_52mqp5_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.teammateSearchQuery.<set-teammateSearchQuery>|<set-teammateSearchQuery>(kotlin.String){}[0]');
  }
  function NotasAppState$_get_draftRoomName_$ref_o2q5ii() {
    return constructCallableReference(function (p0) {
      return p0.get_draftRoomName_yi2pwe_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.draftRoomName.<get-draftRoomName>|<get-draftRoomName>(){}[0]');
  }
  function NotasAppState$_set_draftRoomName_$ref_p8l06a() {
    return constructCallableReference(function (p0, p1) {
      p0.set_draftRoomName_2jkwn4_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.draftRoomName.<set-draftRoomName>|<set-draftRoomName>(kotlin.String){}[0]');
  }
  function NotasAppState$_get_draftRoomName_$ref_o2q5ii_0() {
    return constructCallableReference(function (p0) {
      return p0.get_draftRoomName_yi2pwe_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.draftRoomName.<get-draftRoomName>|<get-draftRoomName>(){}[0]');
  }
  function NotasAppState$_set_draftRoomName_$ref_p8l06a_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_draftRoomName_2jkwn4_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.draftRoomName.<set-draftRoomName>|<set-draftRoomName>(kotlin.String){}[0]');
  }
  function NotasAppState$_get_draftRoomDescription_$ref_ahek7d() {
    return constructCallableReference(function (p0) {
      return p0.get_draftRoomDescription_t2nj3r_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.draftRoomDescription.<get-draftRoomDescription>|<get-draftRoomDescription>(){}[0]');
  }
  function NotasAppState$_set_draftRoomDescription_$ref_5z1ck5() {
    return constructCallableReference(function (p0, p1) {
      p0.set_draftRoomDescription_nuceib_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.draftRoomDescription.<set-draftRoomDescription>|<set-draftRoomDescription>(kotlin.String){}[0]');
  }
  function NotasAppState$_get_draftRoomDescription_$ref_ahek7d_0() {
    return constructCallableReference(function (p0) {
      return p0.get_draftRoomDescription_t2nj3r_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.draftRoomDescription.<get-draftRoomDescription>|<get-draftRoomDescription>(){}[0]');
  }
  function NotasAppState$_set_draftRoomDescription_$ref_5z1ck5_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_draftRoomDescription_nuceib_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.draftRoomDescription.<set-draftRoomDescription>|<set-draftRoomDescription>(kotlin.String){}[0]');
  }
  function NotasAppState$_get_activeRoomId_$ref_z28ho3() {
    return constructCallableReference(function (p0) {
      return p0.get_activeRoomId_rkads5_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.activeRoomId.<get-activeRoomId>|<get-activeRoomId>(){}[0]');
  }
  function NotasAppState$_set_activeRoomId_$ref_6vrb89() {
    return constructCallableReference(function (p0, p1) {
      p0.set_activeRoomId_v0uawf_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.activeRoomId.<set-activeRoomId>|<set-activeRoomId>(kotlin.String){}[0]');
  }
  function NotasAppState$_get_activeRoomId_$ref_z28ho3_0() {
    return constructCallableReference(function (p0) {
      return p0.get_activeRoomId_rkads5_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.activeRoomId.<get-activeRoomId>|<get-activeRoomId>(){}[0]');
  }
  function NotasAppState$_set_activeRoomId_$ref_6vrb89_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_activeRoomId_v0uawf_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.activeRoomId.<set-activeRoomId>|<set-activeRoomId>(kotlin.String){}[0]');
  }
  function NotasAppState$_get_feedbackMessage_$ref_2lzstt() {
    return constructCallableReference(function (p0) {
      return p0.get_feedbackMessage_z5ejaf_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.feedbackMessage.<get-feedbackMessage>|<get-feedbackMessage>(){}[0]');
  }
  function NotasAppState$_set_feedbackMessage_$ref_fwq1q5() {
    return constructCallableReference(function (p0, p1) {
      p0.set_feedbackMessage_t4kquq_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.feedbackMessage.<set-feedbackMessage>|<set-feedbackMessage>(kotlin.String?){}[0]');
  }
  function NotasAppState$_get_feedbackMessage_$ref_2lzstt_0() {
    return constructCallableReference(function (p0) {
      return p0.get_feedbackMessage_z5ejaf_k$();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.feedbackMessage.<get-feedbackMessage>|<get-feedbackMessage>(){}[0]');
  }
  function NotasAppState$_set_feedbackMessage_$ref_fwq1q5_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_feedbackMessage_t4kquq_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'com.notas.agenda.model/NotasAppState.feedbackMessage.<set-feedbackMessage>|<set-feedbackMessage>(kotlin.String?){}[0]');
  }
  function NotasAppState$sendRoomInvitations$lambda(it) {
    return substringBefore(it.name_1, ' ');
  }
  function NotasAppState() {
    this.currentScreen$delegate_1 = mutableStateOf(NotasScreen_LOGIN_getInstance());
    this.previousAgendaScreen$delegate_1 = mutableStateOf(NotasScreen_AGENDA_MONTH_getInstance());
    this.isDarkMode$delegate_1 = mutableStateOf(false);
    this.accentOption$delegate_1 = mutableStateOf(NotasAccentOption_VIOLET_getInstance());
    this.userName$delegate_1 = mutableStateOf('Antonio Gomez');
    this.userRole$delegate_1 = mutableStateOf('Producto y dise\xF1o \xB7 Notas');
    this.userEmail$delegate_1 = mutableStateOf('antonio@gomex.com');
    this.loginPassword$delegate_1 = mutableStateOf('NotasAgend1!');
    this.remindersEnabled$delegate_1 = mutableStateOf(true);
    this.alertAdvanceMinutes$delegate_1 = mutableStateOf(5);
    this.modalAlertEnabled$delegate_1 = mutableStateOf(true);
    this.soundAlertEnabled$delegate_1 = mutableStateOf(true);
    this.selectedTone$delegate_1 = mutableStateOf('Campana suave');
    this.selectedDayOfMonth$delegate_1 = mutableStateOf(16);
    this.monthOffset$delegate_1 = mutableStateOf(0);
    this.editingAppointmentId$delegate_1 = mutableStateOf(null);
    this.appointments_1 = mutableStateListOf([new AppointmentItem('apt_1', 'Reuni\xF3n de equipo', 'Equipo', 16, 'Lunes, 16 de noviembre de 2026', '10:00', '10:45', '45 min', 'Sala Notas', 'Objetivos y prioridades de la semana.', true, AppointmentCategory_PRIMARY_getInstance()), new AppointmentItem('apt_2', 'Proyecto Aurora', 'Aurora', 16, 'Lunes, 16 de noviembre de 2026', '14:00', '15:00', '1 h', 'Videollamada', 'Revisi\xF3n de avances con dise\xF1o y frontend.', true, AppointmentCategory_GREEN_getInstance()), new AppointmentItem('apt_3', 'Cierre del d\xEDa', 'Cierre', 16, 'Lunes, 16 de noviembre de 2026', '16:00', '16:30', '30 min', 'Equipo de producto', 'Resumen de bloqueos y pr\xF3ximos pasos.', true, AppointmentCategory_AMBER_getInstance()), new AppointmentItem('apt_4', 'Sesi\xF3n de foco', 'Foco', 17, 'Martes, 17 de noviembre de 2026', '11:00', '12:00', '1 h', 'Espacio silencioso', 'Prototipado de componentes compartidos.', true, AppointmentCategory_GREEN_getInstance()), new AppointmentItem('apt_5', 'Revisi\xF3n de dise\xF1o', 'Dise\xF1o', 18, 'Mi\xE9rcoles, 18 de noviembre de 2026', '10:00', '10:45', '45 min', 'Sala Notas', 'Validaci\xF3n visual en m\xF3vil, web y desktop.', true, AppointmentCategory_PRIMARY_getInstance()), new AppointmentItem('apt_6', 'Demo semanal', 'Demo', 18, 'Mi\xE9rcoles, 18 de noviembre de 2026', '13:00', '13:45', '45 min', 'Videollamada \xB7 Notas Meet', 'Presentaci\xF3n de funcionalidades.', true, AppointmentCategory_AMBER_getInstance()), new AppointmentItem('apt_7', 'Sincronizaci\xF3n Aurora', 'Aurora', 19, 'Jueves, 19 de noviembre de 2026', '12:00', '13:00', '1 h', 'Videollamada', 'Estado de entregas del sprint.', true, AppointmentCategory_GREEN_getInstance()), new AppointmentItem('apt_8', 'Planificaci\xF3n equipo', 'Equipo', 20, 'Viernes, 20 de noviembre de 2026', '10:00', '10:45', '45 min', 'Sala Notas', 'Preparaci\xF3n de la siguiente semana.', true, AppointmentCategory_PRIMARY_getInstance()), new AppointmentItem('apt_9', 'Cierre semanal', 'Cierre', 20, 'Viernes, 20 de noviembre de 2026', '14:00', '14:45', '45 min', 'Equipo de producto', 'Retrospectiva r\xE1pida del equipo.', false, AppointmentCategory_AMBER_getInstance())]);
    this.hasPendingInvitation$delegate_1 = mutableStateOf(true);
    this.roomSearchQuery$delegate_1 = mutableStateOf('');
    this.teammateSearchQuery$delegate_1 = mutableStateOf('');
    this.draftRoomName$delegate_1 = mutableStateOf('Proyecto final');
    this.draftRoomDescription$delegate_1 = mutableStateOf('Ideas, entregas y decisiones del proyecto.');
    this.selectedTeammateIds_1 = mutableStateListOf(['t_sergio', 't_marta']);
    this.teammates_1 = listOf([new Teammate('t_sergio', 'Sergio Ruiz', 'Dise\xF1o de producto'), new Teammate('t_marta', 'Marta L\xF3pez', 'Desarrollo frontend'), new Teammate('t_alex', '\xC1lex Romero', 'Operaciones'), new Teammate('t_elena', 'Elena Torres', 'Direcci\xF3n de producto')]);
    this.rooms_1 = mutableStateListOf([new ChatRoom('room_general', 'General', 'Novedades diarias del estudio', AppointmentCategory_PRIMARY_getInstance(), 2, 5, 3, 'Todo el equipo conectado en General', listOf_0(new ChatMessage('g1', 'Sergio', '\xA1Buenos d\xEDas, equipo!', '09:10', false))), new ChatRoom('room_aurora', 'Proyecto Aurora', 'Ideas, entregas y decisiones del proyecto.', AppointmentCategory_GREEN_getInstance(), 0, 3, 2, 'Sergio y Marta se han unido a la sala', listOf([new ChatMessage('a1', 'Sergio', '\xA1Buenos d\xEDas! La propuesta de Aurora ya est\xE1 en la carpeta del equipo.', '09:24', false), new ChatMessage('a2', 'Marta', 'Genial. La revisamos en la reuni\xF3n de las 14:00.', '09:24', false), new ChatMessage('a3', 'T\xFA', 'Perfecto, nos vemos a las 14:00. Gracias, equipo.', '09:28', true, '09:28 \xB7 Le\xEDdo')])), new ChatRoom('room_producto', 'Producto', 'Prototipos, UX y entregas', AppointmentCategory_AMBER_getInstance(), 1, 4, 2, 'Marta comparti\xF3 una actualizaci\xF3n', listOf_0(new ChatMessage('p1', 'Marta', 'Ya est\xE1 listo el prototipo', '09:35', false)))]);
    this.activeRoomId$delegate_1 = mutableStateOf('room_aurora');
    this.feedbackMessage$delegate_1 = mutableStateOf(null);
  }
  protoOf(NotasAppState).set_currentScreen_ho3j3o_k$ = function (_set____db54di) {
    var tmp0 = this.currentScreen$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_currentScreen_$ref_gtevro_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('currentScreen', 1, tmp, tmp_0, NotasAppState$_set_currentScreen_$ref_4we0io_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(NotasAppState).get_currentScreen_zelgpw_k$ = function () {
    var tmp0 = this.currentScreen$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_currentScreen_$ref_gtevro();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('currentScreen', 1, tmp, tmp_0, NotasAppState$_set_currentScreen_$ref_4we0io());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasAppState).set_previousAgendaScreen_isbjg0_k$ = function (_set____db54di) {
    var tmp0 = this.previousAgendaScreen$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_previousAgendaScreen_$ref_v1vlmi_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('previousAgendaScreen', 1, tmp, tmp_0, NotasAppState$_set_previousAgendaScreen_$ref_qjidza_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(NotasAppState).get_previousAgendaScreen_3j9ax4_k$ = function () {
    var tmp0 = this.previousAgendaScreen$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_previousAgendaScreen_$ref_v1vlmi();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('previousAgendaScreen', 1, tmp, tmp_0, NotasAppState$_set_previousAgendaScreen_$ref_qjidza());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasAppState).set_isDarkMode_i7duwb_k$ = function (_set____db54di) {
    var tmp0 = this.isDarkMode$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_isDarkMode_$ref_jbpobq_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isDarkMode', 1, tmp, tmp_0, NotasAppState$_set_isDarkMode_$ref_67drpq_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(NotasAppState).get_isDarkMode_4i3lkk_k$ = function () {
    var tmp0 = this.isDarkMode$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_isDarkMode_$ref_jbpobq();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isDarkMode', 1, tmp, tmp_0, NotasAppState$_set_isDarkMode_$ref_67drpq());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasAppState).set_accentOption_j5q6lc_k$ = function (_set____db54di) {
    var tmp0 = this.accentOption$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_accentOption_$ref_t0l4zu_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('accentOption', 1, tmp, tmp_0, NotasAppState$_set_accentOption_$ref_2j42y_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(NotasAppState).get_accentOption_mj5qe0_k$ = function () {
    var tmp0 = this.accentOption$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_accentOption_$ref_t0l4zu();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('accentOption', 1, tmp, tmp_0, NotasAppState$_set_accentOption_$ref_2j42y());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasAppState).set_userName_6tcal3_k$ = function (_set____db54di) {
    var tmp0 = this.userName$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_userName_$ref_8e41f1_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('userName', 1, tmp, tmp_0, NotasAppState$_set_userName_$ref_nxurz5_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(NotasAppState).get_userName_ytepxb_k$ = function () {
    var tmp0 = this.userName$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_userName_$ref_8e41f1();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('userName', 1, tmp, tmp_0, NotasAppState$_set_userName_$ref_nxurz5());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasAppState).set_userRole_682jas_k$ = function (_set____db54di) {
    var tmp0 = this.userRole$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_userRole_$ref_n8nzug_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('userRole', 1, tmp, tmp_0, NotasAppState$_set_userRole_$ref_w8pbkk_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(NotasAppState).get_userRole_ythk8a_k$ = function () {
    var tmp0 = this.userRole$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_userRole_$ref_n8nzug();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('userRole', 1, tmp, tmp_0, NotasAppState$_set_userRole_$ref_w8pbkk());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasAppState).set_userEmail_tzea0m_k$ = function (_set____db54di) {
    var tmp0 = this.userEmail$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_userEmail_$ref_29dy5c_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('userEmail', 1, tmp, tmp_0, NotasAppState$_set_userEmail_$ref_cydkd0_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(NotasAppState).get_userEmail_dq8ru0_k$ = function () {
    var tmp0 = this.userEmail$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_userEmail_$ref_29dy5c();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('userEmail', 1, tmp, tmp_0, NotasAppState$_set_userEmail_$ref_cydkd0());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasAppState).set_loginPassword_hm8vur_k$ = function (_set____db54di) {
    var tmp0 = this.loginPassword$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_loginPassword_$ref_dxx4ur_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('loginPassword', 1, tmp, tmp_0, NotasAppState$_set_loginPassword_$ref_7rvrfl_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(NotasAppState).get_loginPassword_3kfbi3_k$ = function () {
    var tmp0 = this.loginPassword$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_loginPassword_$ref_dxx4ur();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('loginPassword', 1, tmp, tmp_0, NotasAppState$_set_loginPassword_$ref_7rvrfl());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasAppState).set_remindersEnabled_222dtk_k$ = function (_set____db54di) {
    var tmp0 = this.remindersEnabled$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_remindersEnabled_$ref_hc9ykp_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('remindersEnabled', 1, tmp, tmp_0, NotasAppState$_set_remindersEnabled_$ref_vacml1_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(NotasAppState).get_remindersEnabled_f25lyv_k$ = function () {
    var tmp0 = this.remindersEnabled$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_remindersEnabled_$ref_hc9ykp();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('remindersEnabled', 1, tmp, tmp_0, NotasAppState$_set_remindersEnabled_$ref_vacml1());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasAppState).set_alertAdvanceMinutes_tf4zqk_k$ = function (_set____db54di) {
    var tmp0 = this.alertAdvanceMinutes$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_alertAdvanceMinutes_$ref_iymos8_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('alertAdvanceMinutes', 1, tmp, tmp_0, NotasAppState$_set_alertAdvanceMinutes_$ref_vlbyxg_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(NotasAppState).get_alertAdvanceMinutes_bbtzhs_k$ = function () {
    var tmp0 = this.alertAdvanceMinutes$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_alertAdvanceMinutes_$ref_iymos8();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('alertAdvanceMinutes', 1, tmp, tmp_0, NotasAppState$_set_alertAdvanceMinutes_$ref_vlbyxg());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasAppState).set_modalAlertEnabled_vj17r4_k$ = function (_set____db54di) {
    var tmp0 = this.modalAlertEnabled$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_modalAlertEnabled_$ref_leiykh_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('modalAlertEnabled', 1, tmp, tmp_0, NotasAppState$_set_modalAlertEnabled_$ref_f8wm4t_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(NotasAppState).get_modalAlertEnabled_ljwycp_k$ = function () {
    var tmp0 = this.modalAlertEnabled$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_modalAlertEnabled_$ref_leiykh();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('modalAlertEnabled', 1, tmp, tmp_0, NotasAppState$_set_modalAlertEnabled_$ref_f8wm4t());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasAppState).set_soundAlertEnabled_9zpsbm_k$ = function (_set____db54di) {
    var tmp0 = this.soundAlertEnabled$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_soundAlertEnabled_$ref_x2b0yr_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('soundAlertEnabled', 1, tmp, tmp_0, NotasAppState$_set_soundAlertEnabled_$ref_qwooj3_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(NotasAppState).get_soundAlertEnabled_clh83v_k$ = function () {
    var tmp0 = this.soundAlertEnabled$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_soundAlertEnabled_$ref_x2b0yr();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('soundAlertEnabled', 1, tmp, tmp_0, NotasAppState$_set_soundAlertEnabled_$ref_qwooj3());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasAppState).set_selectedTone_hc1lvk_k$ = function (_set____db54di) {
    var tmp0 = this.selectedTone$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_selectedTone_$ref_j10jgk_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('selectedTone', 1, tmp, tmp_0, NotasAppState$_set_selectedTone_$ref_mwz9fs_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(NotasAppState).get_selectedTone_ogzwga_k$ = function () {
    var tmp0 = this.selectedTone$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_selectedTone_$ref_j10jgk();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('selectedTone', 1, tmp, tmp_0, NotasAppState$_set_selectedTone_$ref_mwz9fs());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasAppState).set_selectedDayOfMonth_xad83n_k$ = function (_set____db54di) {
    var tmp0 = this.selectedDayOfMonth$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_selectedDayOfMonth_$ref_wbqgrl_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('selectedDayOfMonth', 1, tmp, tmp_0, NotasAppState$_set_selectedDayOfMonth_$ref_a2n0bx_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(NotasAppState).get_selectedDayOfMonth_5gc2j3_k$ = function () {
    var tmp0 = this.selectedDayOfMonth$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_selectedDayOfMonth_$ref_wbqgrl();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('selectedDayOfMonth', 1, tmp, tmp_0, NotasAppState$_set_selectedDayOfMonth_$ref_a2n0bx());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasAppState).set_monthOffset_jbc2ry_k$ = function (_set____db54di) {
    var tmp0 = this.monthOffset$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_monthOffset_$ref_clxbwi_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('monthOffset', 1, tmp, tmp_0, NotasAppState$_set_monthOffset_$ref_mpnjf2_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(NotasAppState).get_monthOffset_njsssq_k$ = function () {
    var tmp0 = this.monthOffset$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_monthOffset_$ref_clxbwi();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('monthOffset', 1, tmp, tmp_0, NotasAppState$_set_monthOffset_$ref_mpnjf2());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasAppState).set_editingAppointmentId_1wqu2g_k$ = function (_set____db54di) {
    var tmp0 = this.editingAppointmentId$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_editingAppointmentId_$ref_f55lnr_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('editingAppointmentId', 1, tmp, tmp_0, NotasAppState$_set_editingAppointmentId_$ref_amse0j_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(NotasAppState).get_editingAppointmentId_p80uqz_k$ = function () {
    var tmp0 = this.editingAppointmentId$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_editingAppointmentId_$ref_f55lnr();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('editingAppointmentId', 1, tmp, tmp_0, NotasAppState$_set_editingAppointmentId_$ref_amse0j());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasAppState).get_appointments_toel8d_k$ = function () {
    return this.appointments_1;
  };
  protoOf(NotasAppState).set_hasPendingInvitation_jh5y8u_k$ = function (_set____db54di) {
    var tmp0 = this.hasPendingInvitation$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_hasPendingInvitation_$ref_k24c3x_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('hasPendingInvitation', 1, tmp, tmp_0, NotasAppState$_set_hasPendingInvitation_$ref_okhjr5_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(NotasAppState).get_hasPendingInvitation_vxnvxb_k$ = function () {
    var tmp0 = this.hasPendingInvitation$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_hasPendingInvitation_$ref_k24c3x();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('hasPendingInvitation', 1, tmp, tmp_0, NotasAppState$_set_hasPendingInvitation_$ref_okhjr5());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasAppState).set_roomSearchQuery_pe72aq_k$ = function (_set____db54di) {
    var tmp0 = this.roomSearchQuery$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_roomSearchQuery_$ref_wvo1jg_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('roomSearchQuery', 1, tmp, tmp_0, NotasAppState$_set_roomSearchQuery_$ref_jkxsn4_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(NotasAppState).get_roomSearchQuery_wr0xmk_k$ = function () {
    var tmp0 = this.roomSearchQuery$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_roomSearchQuery_$ref_wvo1jg();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('roomSearchQuery', 1, tmp, tmp_0, NotasAppState$_set_roomSearchQuery_$ref_jkxsn4());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasAppState).set_teammateSearchQuery_52mqp5_k$ = function (_set____db54di) {
    var tmp0 = this.teammateSearchQuery$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_teammateSearchQuery_$ref_ehw019_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('teammateSearchQuery', 1, tmp, tmp_0, NotasAppState$_set_teammateSearchQuery_$ref_5z9e87_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(NotasAppState).get_teammateSearchQuery_b0vtxx_k$ = function () {
    var tmp0 = this.teammateSearchQuery$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_teammateSearchQuery_$ref_ehw019();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('teammateSearchQuery', 1, tmp, tmp_0, NotasAppState$_set_teammateSearchQuery_$ref_5z9e87());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasAppState).set_draftRoomName_2jkwn4_k$ = function (_set____db54di) {
    var tmp0 = this.draftRoomName$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_draftRoomName_$ref_o2q5ii_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('draftRoomName', 1, tmp, tmp_0, NotasAppState$_set_draftRoomName_$ref_p8l06a_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(NotasAppState).get_draftRoomName_yi2pwe_k$ = function () {
    var tmp0 = this.draftRoomName$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_draftRoomName_$ref_o2q5ii();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('draftRoomName', 1, tmp, tmp_0, NotasAppState$_set_draftRoomName_$ref_p8l06a());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasAppState).set_draftRoomDescription_nuceib_k$ = function (_set____db54di) {
    var tmp0 = this.draftRoomDescription$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_draftRoomDescription_$ref_ahek7d_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('draftRoomDescription', 1, tmp, tmp_0, NotasAppState$_set_draftRoomDescription_$ref_5z1ck5_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(NotasAppState).get_draftRoomDescription_t2nj3r_k$ = function () {
    var tmp0 = this.draftRoomDescription$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_draftRoomDescription_$ref_ahek7d();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('draftRoomDescription', 1, tmp, tmp_0, NotasAppState$_set_draftRoomDescription_$ref_5z1ck5());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasAppState).get_selectedTeammateIds_sn5thq_k$ = function () {
    return this.selectedTeammateIds_1;
  };
  protoOf(NotasAppState).get_teammates_5t9qnc_k$ = function () {
    return this.teammates_1;
  };
  protoOf(NotasAppState).get_rooms_iy37wv_k$ = function () {
    return this.rooms_1;
  };
  protoOf(NotasAppState).set_activeRoomId_v0uawf_k$ = function (_set____db54di) {
    var tmp0 = this.activeRoomId$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_activeRoomId_$ref_z28ho3_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('activeRoomId', 1, tmp, tmp_0, NotasAppState$_set_activeRoomId_$ref_6vrb89_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(NotasAppState).get_activeRoomId_rkads5_k$ = function () {
    var tmp0 = this.activeRoomId$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_activeRoomId_$ref_z28ho3();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('activeRoomId', 1, tmp, tmp_0, NotasAppState$_set_activeRoomId_$ref_6vrb89());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasAppState).set_feedbackMessage_t4kquq_k$ = function (_set____db54di) {
    var tmp0 = this.feedbackMessage$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_feedbackMessage_$ref_2lzstt_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('feedbackMessage', 1, tmp, tmp_0, NotasAppState$_set_feedbackMessage_$ref_fwq1q5_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(NotasAppState).get_feedbackMessage_z5ejaf_k$ = function () {
    var tmp0 = this.feedbackMessage$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = NotasAppState$_get_feedbackMessage_$ref_2lzstt();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('feedbackMessage', 1, tmp, tmp_0, NotasAppState$_set_feedbackMessage_$ref_fwq1q5());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasAppState).activeRoom_xsvym9_k$ = function () {
    var tmp0 = this.rooms_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (element.id_1 === this.get_activeRoomId_rkads5_k$()) {
          tmp$ret$0 = element;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? first(this.rooms_1) : tmp0_elvis_lhs;
  };
  protoOf(NotasAppState).navigateTo_ndxrxs_k$ = function (screen) {
    switch (screen.get_ordinal_ip24qg_k$()) {
      case 1:
      case 2:
      case 3:
        this.set_previousAgendaScreen_isbjg0_k$(screen);
        break;
      case 14:
        this.set_isDarkMode_i7duwb_k$(true);
        break;
      case 6:
        break;
      default:
        break;
    }
    this.set_currentScreen_ho3j3o_k$(screen);
    this.set_feedbackMessage_t4kquq_k$(null);
  };
  protoOf(NotasAppState).navigateToTab_431qr_k$ = function (tab) {
    switch (tab.get_ordinal_ip24qg_k$()) {
      case 0:
        this.navigateTo_ndxrxs_k$(this.get_previousAgendaScreen_3j9ax4_k$());
        break;
      case 1:
        this.navigateTo_ndxrxs_k$(NotasScreen_CHAT_ROOMS_getInstance());
        break;
      case 2:
        this.navigateTo_ndxrxs_k$(this.get_isDarkMode_4i3lkk_k$() ? NotasScreen_NIGHT_APPEARANCE_getInstance() : NotasScreen_PERSONALIZATION_getInstance());
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
  };
  protoOf(NotasAppState).openNewAppointment_zhi0op_k$ = function () {
    this.set_editingAppointmentId_1wqu2g_k$(null);
    this.set_currentScreen_ho3j3o_k$(NotasScreen_NEW_APPOINTMENT_getInstance());
  };
  protoOf(NotasAppState).openEditAppointment_dk9ttr_k$ = function (appointmentId) {
    this.set_editingAppointmentId_1wqu2g_k$(appointmentId);
    this.set_currentScreen_ho3j3o_k$(NotasScreen_EDIT_APPOINTMENT_getInstance());
  };
  protoOf(NotasAppState).saveNewAppointment_qbcnkp_k$ = function (title, dateLabel, startTime, endTime, location, notes, reminderEnabled) {
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.ifEmpty' call
    var this_0 = toString(trim(isCharSequence(title) ? title : THROW_CCE()));
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(this_0) === 0) {
      tmp = 'Revisi\xF3n de propuesta';
    } else {
      tmp = this_0;
    }
    var cleanTitle = tmp;
    var tmp0_safe_receiver = firstOrNull(split(cleanTitle, [' ']));
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : take(tmp0_safe_receiver, 8);
    var short = tmp1_elvis_lhs == null ? 'Cita' : tmp1_elvis_lhs;
    var tmp_0 = 'apt_' + (this.appointments_1.get_size_woubt6_k$() + 1 | 0);
    var tmp_1 = this.get_selectedDayOfMonth_5gc2j3_k$();
    // Inline function 'kotlin.text.ifBlank' call
    var tmp_2;
    if (isBlank(dateLabel)) {
      tmp_2 = 'Lunes, ' + this.get_selectedDayOfMonth_5gc2j3_k$() + ' de noviembre de 2026';
    } else {
      tmp_2 = dateLabel;
    }
    var tmp_3 = tmp_2;
    // Inline function 'kotlin.text.ifBlank' call
    var tmp_4;
    if (isBlank(startTime)) {
      tmp_4 = '12:00';
    } else {
      tmp_4 = startTime;
    }
    var tmp_5 = tmp_4;
    // Inline function 'kotlin.text.ifBlank' call
    var tmp_6;
    if (isBlank(endTime)) {
      tmp_6 = '12:45';
    } else {
      tmp_6 = endTime;
    }
    var tmp_7 = tmp_6;
    // Inline function 'kotlin.text.ifBlank' call
    var tmp_8;
    if (isBlank(location)) {
      tmp_8 = 'Videollamada \xB7 Notas Meet';
    } else {
      tmp_8 = location;
    }
    var tmp$ret$10 = tmp_8;
    this.appointments_1.add_wl2rvy_k$(new AppointmentItem(tmp_0, cleanTitle, short, tmp_1, tmp_3, tmp_5, tmp_7, '45 min', tmp$ret$10, notes, reminderEnabled, AppointmentCategory_PRIMARY_getInstance()));
    this.set_currentScreen_ho3j3o_k$(this.get_previousAgendaScreen_3j9ax4_k$());
    this.set_feedbackMessage_t4kquq_k$('Cita creada en tu agenda');
  };
  protoOf(NotasAppState).updateExistingAppointment_ji6hie_k$ = function (id, title, dateLabel, startTime, endTime, location, notes, reminderEnabled) {
    var tmp0 = this.appointments_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfFirst' call
      var index = 0;
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        if (item.id_1 === id) {
          tmp$ret$0 = index;
          break $l$block;
        }
        index = index + 1 | 0;
      }
      tmp$ret$0 = -1;
    }
    var index_0 = tmp$ret$0;
    if (index_0 >= 0) {
      var existing = this.appointments_1.get_c1px32_k$(index_0);
      // Inline function 'kotlin.text.trim' call
      // Inline function 'kotlin.text.ifEmpty' call
      var this_0 = toString(trim(isCharSequence(title) ? title : THROW_CCE()));
      var tmp;
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(this_0) === 0) {
        tmp = existing.title_1;
      } else {
        tmp = this_0;
      }
      var cleanTitle = tmp;
      var tmp0_safe_receiver = firstOrNull(split(cleanTitle, [' ']));
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : take(tmp0_safe_receiver, 8);
      var tmp_0 = tmp1_elvis_lhs == null ? existing.weekShortLabel_1 : tmp1_elvis_lhs;
      // Inline function 'kotlin.text.ifBlank' call
      var tmp_1;
      if (isBlank(dateLabel)) {
        tmp_1 = existing.dateLabel_1;
      } else {
        tmp_1 = dateLabel;
      }
      var tmp_2 = tmp_1;
      // Inline function 'kotlin.text.ifBlank' call
      var tmp_3;
      if (isBlank(startTime)) {
        tmp_3 = existing.startTime_1;
      } else {
        tmp_3 = startTime;
      }
      var tmp_4 = tmp_3;
      // Inline function 'kotlin.text.ifBlank' call
      var tmp_5;
      if (isBlank(endTime)) {
        tmp_5 = existing.endTime_1;
      } else {
        tmp_5 = endTime;
      }
      var tmp_6 = tmp_5;
      // Inline function 'kotlin.text.ifBlank' call
      var tmp_7;
      if (isBlank(location)) {
        tmp_7 = existing.location_1;
      } else {
        tmp_7 = location;
      }
      var tmp$ret$12 = tmp_7;
      this.appointments_1.set_9t5s9l_k$(index_0, existing.copy$default_ajkedt_k$(VOID, cleanTitle, tmp_0, VOID, tmp_2, tmp_4, tmp_6, VOID, tmp$ret$12, notes, reminderEnabled));
    }
    this.set_currentScreen_ho3j3o_k$(this.get_previousAgendaScreen_3j9ax4_k$());
    this.set_feedbackMessage_t4kquq_k$('Cambios guardados');
  };
  protoOf(NotasAppState).toggleTeammateSelection_zfhz3g_k$ = function (id) {
    if (this.selectedTeammateIds_1.contains_ccp5tc_k$(id)) {
      this.selectedTeammateIds_1.remove_an8aut_k$(id);
    } else {
      this.selectedTeammateIds_1.add_wl2rvy_k$(id);
    }
  };
  protoOf(NotasAppState).sendRoomInvitations_g9oujr_k$ = function () {
    // Inline function 'kotlin.text.trim' call
    var this_0 = this.get_draftRoomName_yi2pwe_k$();
    // Inline function 'kotlin.text.ifEmpty' call
    var this_1 = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(this_1) === 0) {
      tmp = 'Nueva sala';
    } else {
      tmp = this_1;
    }
    var cleanName = tmp;
    var tmp0 = this.rooms_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (equals_0(element.name_1, cleanName, true)) {
          tmp$ret$4 = element;
          break $l$block;
        }
      }
      tmp$ret$4 = null;
    }
    var existing = tmp$ret$4;
    if (!(existing == null)) {
      this.set_activeRoomId_v0uawf_k$(existing.id_1);
    } else {
      var newId = 'room_' + (this.rooms_1.get_size_woubt6_k$() + 1 | 0);
      var invitedCount = coerceAtLeast(this.selectedTeammateIds_1.get_size_woubt6_k$(), 1);
      // Inline function 'kotlin.collections.filter' call
      var tmp0_0 = this.teammates_1;
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s_0 = tmp0_0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
        if (this.selectedTeammateIds_1.contains_ccp5tc_k$(element_0.id_1)) {
          destination.add_utx5q5_k$(element_0);
        }
      }
      var tmp_0 = destination;
      // Inline function 'kotlin.text.ifEmpty' call
      var this_2 = joinToString(tmp_0, ' y ', VOID, VOID, VOID, VOID, NotasAppState$sendRoomInvitations$lambda);
      var tmp_1;
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(this_2) === 0) {
        tmp_1 = 'El equipo';
      } else {
        tmp_1 = this_2;
      }
      var invitedNames = tmp_1;
      // Inline function 'kotlin.text.ifBlank' call
      var this_3 = this.get_draftRoomDescription_t2nj3r_k$();
      var tmp_2;
      if (isBlank(this_3)) {
        tmp_2 = 'Espacio permanente del equipo.';
      } else {
        tmp_2 = this_3;
      }
      var tmp$ret$12 = tmp_2;
      this.rooms_1.add_gaf1mg_k$(0, new ChatRoom(newId, cleanName, tmp$ret$12, AppointmentCategory_PRIMARY_getInstance(), 0, invitedCount + 1 | 0, 2, invitedNames + ' se han unido a la sala', listOf_0(new ChatMessage(newId + '_m1', 'Sergio', '\xA1Sala creada! Aqu\xED compartimos todo sobre ' + cleanName + '.', '09:41', false))));
      this.set_activeRoomId_v0uawf_k$(newId);
    }
    this.set_currentScreen_ho3j3o_k$(NotasScreen_CONVERSATION_getInstance());
    this.set_feedbackMessage_t4kquq_k$('Invitaciones enviadas');
  };
  protoOf(NotasAppState).acceptPendingInvitation_d4nwk8_k$ = function () {
    var labId = 'room_lab';
    var tmp0 = this.rooms_1;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.none' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (element.id_1 === labId) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    if (tmp$ret$0) {
      this.rooms_1.add_gaf1mg_k$(0, new ChatRoom(labId, 'Laboratorio de ideas', 'Un lugar para compartir propuestas, inspiraci\xF3n y pr\xF3ximos retos.', AppointmentCategory_GREEN_getInstance(), 0, 6, 3, 'Te has unido a la sala de Elena Torres', listOf_0(new ChatMessage('lab_1', 'Elena', '\xA1Bienvenidos al Laboratorio de ideas! Compartid aqu\xED vuestras propuestas.', '09:38', false))));
    }
    this.set_hasPendingInvitation_jh5y8u_k$(false);
    this.set_activeRoomId_v0uawf_k$(labId);
    this.set_currentScreen_ho3j3o_k$(NotasScreen_CONVERSATION_getInstance());
  };
  protoOf(NotasAppState).sendMessageToActiveRoom_n59ywf_k$ = function (rawText) {
    // Inline function 'kotlin.text.trim' call
    var text = toString(trim(isCharSequence(rawText) ? rawText : THROW_CCE()));
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(text) === 0)
      return Unit_getInstance();
    var tmp0 = this.rooms_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfFirst' call
      var index = 0;
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        if (item.id_1 === this.get_activeRoomId_rkads5_k$()) {
          tmp$ret$2 = index;
          break $l$block;
        }
        index = index + 1 | 0;
      }
      tmp$ret$2 = -1;
    }
    var index_0 = tmp$ret$2;
    if (index_0 >= 0) {
      var room = this.rooms_1.get_c1px32_k$(index_0);
      var newMsg = new ChatMessage('msg_' + (room.messages_1.get_size_woubt6_k$() + 1 | 0), 'T\xFA', text, '09:41', true, '09:41 \xB7 Enviado');
      this.rooms_1.set_9t5s9l_k$(index_0, room.copy$default_g3rn5e_k$(VOID, VOID, VOID, VOID, 0, VOID, VOID, VOID, plus(room.messages_1, newMsg)));
    }
  };
  protoOf(NotasAppState).openRoom_ndqpq3_k$ = function (roomId) {
    var tmp0 = this.rooms_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfFirst' call
      var index = 0;
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        if (item.id_1 === roomId) {
          tmp$ret$0 = index;
          break $l$block;
        }
        index = index + 1 | 0;
      }
      tmp$ret$0 = -1;
    }
    var index_0 = tmp$ret$0;
    if (index_0 >= 0) {
      this.rooms_1.set_9t5s9l_k$(index_0, this.rooms_1.get_c1px32_k$(index_0).copy$default_g3rn5e_k$(VOID, VOID, VOID, VOID, 0));
    }
    this.set_activeRoomId_v0uawf_k$(roomId);
    this.set_currentScreen_ho3j3o_k$(NotasScreen_CONVERSATION_getInstance());
  };
  protoOf(NotasAppState).setDarkModeAndSync_rezh9e_k$ = function (dark) {
    this.set_isDarkMode_i7duwb_k$(dark);
    if (this.get_currentScreen_zelgpw_k$().equals(NotasScreen_PERSONALIZATION_getInstance()) && dark) {
      this.set_currentScreen_ho3j3o_k$(NotasScreen_NIGHT_APPEARANCE_getInstance());
    } else if (this.get_currentScreen_zelgpw_k$().equals(NotasScreen_NIGHT_APPEARANCE_getInstance()) && !dark) {
      this.set_currentScreen_ho3j3o_k$(NotasScreen_PERSONALIZATION_getInstance());
    }
  };
  function com_notas_agenda_model_AppointmentItem$stableprop_getter() {
    return com_notas_agenda_model_AppointmentItem$stable;
  }
  function com_notas_agenda_model_ChatMessage$stableprop_getter() {
    return com_notas_agenda_model_ChatMessage$stable;
  }
  function com_notas_agenda_model_ChatRoom$stableprop_getter() {
    return com_notas_agenda_model_ChatRoom$stable;
  }
  function com_notas_agenda_model_Teammate$stableprop_getter() {
    return com_notas_agenda_model_Teammate$stable;
  }
  function com_notas_agenda_model_NotasAppState$stableprop_getter() {
    return com_notas_agenda_model_NotasAppState$stable;
  }
  function NotasScreen_LOGIN_getInstance() {
    static_init();
    return NotasScreen_LOGIN_instance;
  }
  function NotasScreen_AGENDA_MONTH_getInstance() {
    static_init();
    return NotasScreen_AGENDA_MONTH_instance;
  }
  function NotasScreen_AGENDA_WEEK_getInstance() {
    static_init();
    return NotasScreen_AGENDA_WEEK_instance;
  }
  function NotasScreen_AGENDA_DAY_getInstance() {
    static_init();
    return NotasScreen_AGENDA_DAY_instance;
  }
  function NotasScreen_NEW_APPOINTMENT_getInstance() {
    static_init();
    return NotasScreen_NEW_APPOINTMENT_instance;
  }
  function NotasScreen_EDIT_APPOINTMENT_getInstance() {
    static_init();
    return NotasScreen_EDIT_APPOINTMENT_instance;
  }
  function NotasScreen_PERSONALIZATION_getInstance() {
    static_init();
    return NotasScreen_PERSONALIZATION_instance;
  }
  function NotasScreen_CHANGE_PASSWORD_getInstance() {
    static_init();
    return NotasScreen_CHANGE_PASSWORD_instance;
  }
  function NotasScreen_CONFIGURE_ALERTS_getInstance() {
    static_init();
    return NotasScreen_CONFIGURE_ALERTS_instance;
  }
  function NotasScreen_CHAT_ROOMS_getInstance() {
    static_init();
    return NotasScreen_CHAT_ROOMS_instance;
  }
  function NotasScreen_CREATE_ROOM_getInstance() {
    static_init();
    return NotasScreen_CREATE_ROOM_instance;
  }
  function NotasScreen_INVITE_TEAM_getInstance() {
    static_init();
    return NotasScreen_INVITE_TEAM_instance;
  }
  function NotasScreen_ACCEPT_INVITATION_getInstance() {
    static_init();
    return NotasScreen_ACCEPT_INVITATION_instance;
  }
  function NotasScreen_CONVERSATION_getInstance() {
    static_init();
    return NotasScreen_CONVERSATION_instance;
  }
  function NotasScreen_NIGHT_APPEARANCE_getInstance() {
    static_init();
    return NotasScreen_NIGHT_APPEARANCE_instance;
  }
  function NotasTab_AGENDA_getInstance() {
    static_init_0();
    return NotasTab_AGENDA_instance;
  }
  function NotasTab_TEAM_getInstance() {
    static_init_0();
    return NotasTab_TEAM_instance;
  }
  function NotasTab_SETTINGS_getInstance() {
    static_init_0();
    return NotasTab_SETTINGS_instance;
  }
  function AppointmentCategory_PRIMARY_getInstance() {
    static_init_1();
    return AppointmentCategory_PRIMARY_instance;
  }
  function AppointmentCategory_GREEN_getInstance() {
    static_init_1();
    return AppointmentCategory_GREEN_instance;
  }
  function AppointmentCategory_AMBER_getInstance() {
    static_init_1();
    return AppointmentCategory_AMBER_instance;
  }
  function get_LocalNotasColors() {
    _init_properties_NotasTheme_kt__othx98();
    return LocalNotasColors;
  }
  var LocalNotasColors;
  var com_notas_agenda_theme_NotasColors$stable;
  var com_notas_agenda_theme_NotasTheme$stable;
  var static_init_called_2;
  function static_init_2() {
    if (static_init_called_2)
      return Unit_getInstance();
    static_init_called_2 = true;
    NotasAccentOption_VIOLET_instance = new NotasAccentOption('VIOLET', 0, 'Violeta Notas', Color(new Long(-10136359, 0)), Color(new Long(-4740353, 0)), Color(new Long(-1119493, 0)), Color(new Long(-13356209, 0)));
    NotasAccentOption_GREEN_instance = new NotasAccentOption('GREEN', 1, 'Verde Esmeralda', Color(new Long(-15171725, 0)), Color(new Long(-7085117, 0)), Color(new Long(-1772049, 0)), Color(new Long(-14598341, 0)));
    NotasAccentOption_AMBER_instance = new NotasAccentOption('AMBER', 2, '\xC1mbar C\xE1lido', Color(new Long(-3770302, 0)), Color(new Long(-805000, 0)), Color(new Long(-3875, 0)), Color(new Long(-12964579, 0)));
    NotasAccentOption_PINK_instance = new NotasAccentOption('PINK', 3, 'Magenta Notas', Color(new Long(-4371576, 0)), Color(new Long(-874546, 0)), Color(new Long(-201741, 0)), Color(new Long(-12901322, 0)));
  }
  var NotasAccentOption_VIOLET_instance;
  var NotasAccentOption_GREEN_instance;
  var NotasAccentOption_AMBER_instance;
  var NotasAccentOption_PINK_instance;
  function values_2() {
    static_init_2();
    return [NotasAccentOption_VIOLET_getInstance(), NotasAccentOption_GREEN_getInstance(), NotasAccentOption_AMBER_getInstance(), NotasAccentOption_PINK_getInstance()];
  }
  function valueOf_2(value) {
    static_init_2();
    switch (value) {
      case 'VIOLET':
        return NotasAccentOption_VIOLET_getInstance();
      case 'GREEN':
        return NotasAccentOption_GREEN_getInstance();
      case 'AMBER':
        return NotasAccentOption_AMBER_getInstance();
      case 'PINK':
        return NotasAccentOption_PINK_getInstance();
      default:
        THROW_IAE('No enum constant com.notas.agenda.theme.NotasAccentOption.' + value);
        break;
    }
  }
  function get_entries_2() {
    static_init_2();
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var $ENTRIES_2;
  function NotasAccentOption(name, ordinal, label, primary, darkAccentText, softLight, softDark) {
    Enum.call(this, name, ordinal);
    this.label_1 = label;
    this.primary_1 = primary;
    this.darkAccentText_1 = darkAccentText;
    this.softLight_1 = softLight;
    this.softDark_1 = softDark;
  }
  protoOf(NotasAccentOption).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  protoOf(NotasAccentOption).get_primary_gfn28_k$ = function () {
    return this.primary_1;
  };
  protoOf(NotasAccentOption).get_darkAccentText_fzz6t9_k$ = function () {
    return this.darkAccentText_1;
  };
  protoOf(NotasAccentOption).get_softLight_gnyxhm_k$ = function () {
    return this.softLight_1;
  };
  protoOf(NotasAccentOption).get_softDark_rgn5kg_k$ = function () {
    return this.softDark_1;
  };
  function NotasColors(isDark, accentOption, background, surface, surfaceMuted, border, textPrimary, textSecondary, textMuted, accentButton, accentContent, accentContainer, accentSelectedSegment, successContainer, successContent, warningContainer, warningContent, checkboxBorder, radioBorder, onAccentButton, outgoingSubtext) {
    this.isDark_1 = isDark;
    this.accentOption_1 = accentOption;
    this.background_1 = background;
    this.surface_1 = surface;
    this.surfaceMuted_1 = surfaceMuted;
    this.border_1 = border;
    this.textPrimary_1 = textPrimary;
    this.textSecondary_1 = textSecondary;
    this.textMuted_1 = textMuted;
    this.accentButton_1 = accentButton;
    this.accentContent_1 = accentContent;
    this.accentContainer_1 = accentContainer;
    this.accentSelectedSegment_1 = accentSelectedSegment;
    this.successContainer_1 = successContainer;
    this.successContent_1 = successContent;
    this.warningContainer_1 = warningContainer;
    this.warningContent_1 = warningContent;
    this.checkboxBorder_1 = checkboxBorder;
    this.radioBorder_1 = radioBorder;
    this.onAccentButton_1 = onAccentButton;
    this.outgoingSubtext_1 = outgoingSubtext;
  }
  protoOf(NotasColors).get_isDark_evw91l_k$ = function () {
    return this.isDark_1;
  };
  protoOf(NotasColors).get_accentOption_mj5qe0_k$ = function () {
    return this.accentOption_1;
  };
  protoOf(NotasColors).get_background_8l4942_k$ = function () {
    return this.background_1;
  };
  protoOf(NotasColors).get_surface_ya87t7_k$ = function () {
    return this.surface_1;
  };
  protoOf(NotasColors).get_surfaceMuted_41zcuq_k$ = function () {
    return this.surfaceMuted_1;
  };
  protoOf(NotasColors).get_border_pp3j8c_k$ = function () {
    return this.border_1;
  };
  protoOf(NotasColors).get_textPrimary_mf1tv7_k$ = function () {
    return this.textPrimary_1;
  };
  protoOf(NotasColors).get_textSecondary_kl22jf_k$ = function () {
    return this.textSecondary_1;
  };
  protoOf(NotasColors).get_textMuted_gkraf8_k$ = function () {
    return this.textMuted_1;
  };
  protoOf(NotasColors).get_accentButton_k5y1fw_k$ = function () {
    return this.accentButton_1;
  };
  protoOf(NotasColors).get_accentContent_6vke99_k$ = function () {
    return this.accentContent_1;
  };
  protoOf(NotasColors).get_accentContainer_6iiayz_k$ = function () {
    return this.accentContainer_1;
  };
  protoOf(NotasColors).get_accentSelectedSegment_jjrx64_k$ = function () {
    return this.accentSelectedSegment_1;
  };
  protoOf(NotasColors).get_successContainer_dqfg6m_k$ = function () {
    return this.successContainer_1;
  };
  protoOf(NotasColors).get_successContent_tyisdi_k$ = function () {
    return this.successContent_1;
  };
  protoOf(NotasColors).get_warningContainer_128a97_k$ = function () {
    return this.warningContainer_1;
  };
  protoOf(NotasColors).get_warningContent_6yfjgt_k$ = function () {
    return this.warningContent_1;
  };
  protoOf(NotasColors).get_checkboxBorder_e5x4pr_k$ = function () {
    return this.checkboxBorder_1;
  };
  protoOf(NotasColors).get_radioBorder_mhg8d7_k$ = function () {
    return this.radioBorder_1;
  };
  protoOf(NotasColors).get_onAccentButton_kaa6fp_k$ = function () {
    return this.onAccentButton_1;
  };
  protoOf(NotasColors).get_outgoingSubtext_x20erj_k$ = function () {
    return this.outgoingSubtext_1;
  };
  protoOf(NotasColors).component1_7eebsc_k$ = function () {
    return this.isDark_1;
  };
  protoOf(NotasColors).component2_7eebsb_k$ = function () {
    return this.accentOption_1;
  };
  protoOf(NotasColors).component3_waba3h_k$ = function () {
    return this.background_1;
  };
  protoOf(NotasColors).component4_844jr2_k$ = function () {
    return this.surface_1;
  };
  protoOf(NotasColors).component5_g226ld_k$ = function () {
    return this.surfaceMuted_1;
  };
  protoOf(NotasColors).component6_usv51c_k$ = function () {
    return this.border_1;
  };
  protoOf(NotasColors).component7_6moeox_k$ = function () {
    return this.textPrimary_1;
  };
  protoOf(NotasColors).component8_hjibni_k$ = function () {
    return this.textSecondary_1;
  };
  protoOf(NotasColors).component9_tbezz7_k$ = function () {
    return this.textMuted_1;
  };
  protoOf(NotasColors).component10_9b09ct_k$ = function () {
    return this.accentButton_1;
  };
  protoOf(NotasColors).component11_xh6zp8_k$ = function () {
    return this.accentContent_1;
  };
  protoOf(NotasColors).component12_ddqbxh_k$ = function () {
    return this.accentContainer_1;
  };
  protoOf(NotasColors).component13_asgeey_k$ = function () {
    return this.accentSelectedSegment_1;
  };
  protoOf(NotasColors).component14_yyn4rd_k$ = function () {
    return this.successContainer_1;
  };
  protoOf(NotasColors).component15_bwa6vc_k$ = function () {
    return this.successContent_1;
  };
  protoOf(NotasColors).component16_c9wjh3_k$ = function () {
    return this.warningContainer_1;
  };
  protoOf(NotasColors).component17_yl0s5m_k$ = function () {
    return this.warningContent_1;
  };
  protoOf(NotasColors).component18_aeu1t7_k$ = function () {
    return this.checkboxBorder_1;
  };
  protoOf(NotasColors).component19_drcoj8_k$ = function () {
    return this.radioBorder_1;
  };
  protoOf(NotasColors).component20_mpfnoi_k$ = function () {
    return this.onAccentButton_1;
  };
  protoOf(NotasColors).component21_1gr2nx_k$ = function () {
    return this.outgoingSubtext_1;
  };
  protoOf(NotasColors).copy_ogwvyr_k$ = function (isDark, accentOption, background, surface, surfaceMuted, border, textPrimary, textSecondary, textMuted, accentButton, accentContent, accentContainer, accentSelectedSegment, successContainer, successContent, warningContainer, warningContent, checkboxBorder, radioBorder, onAccentButton, outgoingSubtext) {
    return new NotasColors(isDark, accentOption, background, surface, surfaceMuted, border, textPrimary, textSecondary, textMuted, accentButton, accentContent, accentContainer, accentSelectedSegment, successContainer, successContent, warningContainer, warningContent, checkboxBorder, radioBorder, onAccentButton, outgoingSubtext);
  };
  protoOf(NotasColors).copy$default_r2qycs_k$ = function (isDark, accentOption, background, surface, surfaceMuted, border, textPrimary, textSecondary, textMuted, accentButton, accentContent, accentContainer, accentSelectedSegment, successContainer, successContent, warningContainer, warningContent, checkboxBorder, radioBorder, onAccentButton, outgoingSubtext, $super) {
    isDark = isDark === VOID ? this.isDark_1 : isDark;
    accentOption = accentOption === VOID ? this.accentOption_1 : accentOption;
    background = background === VOID ? this.background_1 : background;
    surface = surface === VOID ? this.surface_1 : surface;
    surfaceMuted = surfaceMuted === VOID ? this.surfaceMuted_1 : surfaceMuted;
    border = border === VOID ? this.border_1 : border;
    textPrimary = textPrimary === VOID ? this.textPrimary_1 : textPrimary;
    textSecondary = textSecondary === VOID ? this.textSecondary_1 : textSecondary;
    textMuted = textMuted === VOID ? this.textMuted_1 : textMuted;
    accentButton = accentButton === VOID ? this.accentButton_1 : accentButton;
    accentContent = accentContent === VOID ? this.accentContent_1 : accentContent;
    accentContainer = accentContainer === VOID ? this.accentContainer_1 : accentContainer;
    accentSelectedSegment = accentSelectedSegment === VOID ? this.accentSelectedSegment_1 : accentSelectedSegment;
    successContainer = successContainer === VOID ? this.successContainer_1 : successContainer;
    successContent = successContent === VOID ? this.successContent_1 : successContent;
    warningContainer = warningContainer === VOID ? this.warningContainer_1 : warningContainer;
    warningContent = warningContent === VOID ? this.warningContent_1 : warningContent;
    checkboxBorder = checkboxBorder === VOID ? this.checkboxBorder_1 : checkboxBorder;
    radioBorder = radioBorder === VOID ? this.radioBorder_1 : radioBorder;
    onAccentButton = onAccentButton === VOID ? this.onAccentButton_1 : onAccentButton;
    outgoingSubtext = outgoingSubtext === VOID ? this.outgoingSubtext_1 : outgoingSubtext;
    return $super === VOID ? this.copy_ogwvyr_k$(isDark, accentOption, background, surface, surfaceMuted, border, textPrimary, textSecondary, textMuted, accentButton, accentContent, accentContainer, accentSelectedSegment, successContainer, successContent, warningContainer, warningContent, checkboxBorder, radioBorder, onAccentButton, outgoingSubtext) : $super.copy_ogwvyr_k$.call(this, isDark, accentOption, new Color_0(background), new Color_0(surface), new Color_0(surfaceMuted), new Color_0(border), new Color_0(textPrimary), new Color_0(textSecondary), new Color_0(textMuted), new Color_0(accentButton), new Color_0(accentContent), new Color_0(accentContainer), new Color_0(accentSelectedSegment), new Color_0(successContainer), new Color_0(successContent), new Color_0(warningContainer), new Color_0(warningContent), new Color_0(checkboxBorder), new Color_0(radioBorder), new Color_0(onAccentButton), new Color_0(outgoingSubtext));
  };
  protoOf(NotasColors).toString = function () {
    return 'NotasColors(isDark=' + this.isDark_1 + ', accentOption=' + this.accentOption_1.toString() + ', background=' + Color__toString_impl_hpzmaq(this.background_1) + ', surface=' + Color__toString_impl_hpzmaq(this.surface_1) + ', surfaceMuted=' + Color__toString_impl_hpzmaq(this.surfaceMuted_1) + ', border=' + Color__toString_impl_hpzmaq(this.border_1) + ', textPrimary=' + Color__toString_impl_hpzmaq(this.textPrimary_1) + ', textSecondary=' + Color__toString_impl_hpzmaq(this.textSecondary_1) + ', textMuted=' + Color__toString_impl_hpzmaq(this.textMuted_1) + ', accentButton=' + Color__toString_impl_hpzmaq(this.accentButton_1) + ', accentContent=' + Color__toString_impl_hpzmaq(this.accentContent_1) + ', accentContainer=' + Color__toString_impl_hpzmaq(this.accentContainer_1) + ', accentSelectedSegment=' + Color__toString_impl_hpzmaq(this.accentSelectedSegment_1) + ', successContainer=' + Color__toString_impl_hpzmaq(this.successContainer_1) + ', successContent=' + Color__toString_impl_hpzmaq(this.successContent_1) + ', warningContainer=' + Color__toString_impl_hpzmaq(this.warningContainer_1) + ', warningContent=' + Color__toString_impl_hpzmaq(this.warningContent_1) + ', checkboxBorder=' + Color__toString_impl_hpzmaq(this.checkboxBorder_1) + ', radioBorder=' + Color__toString_impl_hpzmaq(this.radioBorder_1) + ', onAccentButton=' + Color__toString_impl_hpzmaq(this.onAccentButton_1) + ', outgoingSubtext=' + Color__toString_impl_hpzmaq(this.outgoingSubtext_1) + ')';
  };
  protoOf(NotasColors).hashCode = function () {
    var result = getBooleanHashCode(this.isDark_1);
    result = imul(result, 31) + this.accentOption_1.hashCode() | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.background_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.surface_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.surfaceMuted_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.border_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.textPrimary_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.textSecondary_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.textMuted_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.accentButton_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.accentContent_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.accentContainer_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.accentSelectedSegment_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.successContainer_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.successContent_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.warningContainer_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.warningContent_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.checkboxBorder_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.radioBorder_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.onAccentButton_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.outgoingSubtext_1) | 0;
    return result;
  };
  protoOf(NotasColors).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NotasColors))
      return false;
    if (!(this.isDark_1 === other.isDark_1))
      return false;
    if (!this.accentOption_1.equals(other.accentOption_1))
      return false;
    if (!equals(new Color_0(this.background_1), new Color_0(other.background_1)))
      return false;
    if (!equals(new Color_0(this.surface_1), new Color_0(other.surface_1)))
      return false;
    if (!equals(new Color_0(this.surfaceMuted_1), new Color_0(other.surfaceMuted_1)))
      return false;
    if (!equals(new Color_0(this.border_1), new Color_0(other.border_1)))
      return false;
    if (!equals(new Color_0(this.textPrimary_1), new Color_0(other.textPrimary_1)))
      return false;
    if (!equals(new Color_0(this.textSecondary_1), new Color_0(other.textSecondary_1)))
      return false;
    if (!equals(new Color_0(this.textMuted_1), new Color_0(other.textMuted_1)))
      return false;
    if (!equals(new Color_0(this.accentButton_1), new Color_0(other.accentButton_1)))
      return false;
    if (!equals(new Color_0(this.accentContent_1), new Color_0(other.accentContent_1)))
      return false;
    if (!equals(new Color_0(this.accentContainer_1), new Color_0(other.accentContainer_1)))
      return false;
    if (!equals(new Color_0(this.accentSelectedSegment_1), new Color_0(other.accentSelectedSegment_1)))
      return false;
    if (!equals(new Color_0(this.successContainer_1), new Color_0(other.successContainer_1)))
      return false;
    if (!equals(new Color_0(this.successContent_1), new Color_0(other.successContent_1)))
      return false;
    if (!equals(new Color_0(this.warningContainer_1), new Color_0(other.warningContainer_1)))
      return false;
    if (!equals(new Color_0(this.warningContent_1), new Color_0(other.warningContent_1)))
      return false;
    if (!equals(new Color_0(this.checkboxBorder_1), new Color_0(other.checkboxBorder_1)))
      return false;
    if (!equals(new Color_0(this.radioBorder_1), new Color_0(other.radioBorder_1)))
      return false;
    if (!equals(new Color_0(this.onAccentButton_1), new Color_0(other.onAccentButton_1)))
      return false;
    if (!equals(new Color_0(this.outgoingSubtext_1), new Color_0(other.outgoingSubtext_1)))
      return false;
    return true;
  };
  function notasPalette(isDark, accentOption) {
    _init_properties_NotasTheme_kt__othx98();
    var tmp;
    if (isDark) {
      tmp = new NotasColors(true, accentOption, Color(new Long(-15656918, 0)), Color(new Long(-14932678, 0)), Color(new Long(-15195851, 0)), Color(new Long(-14011058, 0)), Color(new Long(-986116, 0)), Color(new Long(-6116156, 0)), Color(new Long(-9734510, 0)), accentOption.primary_1, accentOption.darkAccentText_1, accentOption.softDark_1, accentOption.softDark_1, Color(new Long(-14598341, 0)), Color(new Long(-7085117, 0)), Color(new Long(-12964579, 0)), Color(new Long(-805000, 0)), Color(new Long(-12102544, 0)), Color(new Long(-12102544, 0)), Companion_getInstance_3().get_White_xpp3qf_k$(), Color(new Long(-1777666, 0)));
    } else {
      tmp = new NotasColors(false, accentOption, Color(new Long(-526084, 0)), Companion_getInstance_3().get_White_xpp3qf_k$(), Color(new Long(-1183754, 0)), Color(new Long(-1709839, 0)), Color(new Long(-15261382, 0)), Color(new Long(-9866357, 0)), Color(new Long(-5853504, 0)), accentOption.primary_1, accentOption.primary_1, accentOption.softLight_1, Companion_getInstance_3().get_White_xpp3qf_k$(), Color(new Long(-1772049, 0)), Color(new Long(-15306145, 0)), Color(new Long(-3875, 0)), Color(new Long(-6595558, 0)), Color(new Long(-4406059, 0)), Color(new Long(-4866608, 0)), Companion_getInstance_3().get_White_xpp3qf_k$(), Color(new Long(-1777666, 0)));
    }
    return tmp;
  }
  function NotasTheme() {
    NotasTheme_instance = this;
  }
  protoOf(NotasTheme).get_colors_rimeqo_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1952707029, 'C(<get-colors>)133@4483L7:NotasTheme.kt#3t1m9v');
    if (isTraceInProgress()) {
      traceEventStart(1952707029, $changed, -1, 'com.notas.agenda.theme.NotasTheme.<get-colors> (NotasTheme.kt:133)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalNotasColors();
    var $composer_1 = $composer_0;
    var tmp0 = $composer_1.consume_ebzcrh_k$(this_0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  var NotasTheme_instance;
  function NotasTheme_getInstance() {
    if (NotasTheme_instance == null)
      new NotasTheme();
    return NotasTheme_instance;
  }
  function NotasTheme_0(isDark, accentOption, content, $composer, $changed) {
    _init_properties_NotasTheme_kt__othx98();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(366777608);
    sourceInformation($composer_0, 'C(NotasTheme)P(2)165@5503L149,165@5443L209:NotasTheme.kt#3t1m9v');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(isDark) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(accentOption.get_ordinal_ip24qg_k$()) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 256 : 128);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 147) === 146), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(366777608, $dirty, -1, 'com.notas.agenda.theme.NotasTheme (NotasTheme.kt:141)');
      }
      var palette = notasPalette(isDark, accentOption);
      var tmp;
      if (isDark) {
        tmp = darkColorScheme(palette.accentButton_1, palette.onAccentButton_1, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, palette.background_1, palette.textPrimary_1, palette.surface_1, palette.textPrimary_1, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, palette.border_1);
      } else {
        tmp = lightColorScheme(palette.accentButton_1, palette.onAccentButton_1, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, palette.background_1, palette.textPrimary_1, palette.surface_1, palette.textPrimary_1, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, palette.border_1);
      }
      var colorScheme = tmp;
      var tmp_0 = get_LocalNotasColors().provides_3agxel_k$(palette);
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(823425480, true, NotasTheme$lambda(colorScheme, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp$ret$0 = tmp_1;
      CompositionLocalProvider(tmp_0, tmp$ret$0, $composer_0, 48 | androidx_compose_runtime_ProvidedValue$stableprop_getter());
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(NotasTheme$lambda_0(isDark, accentOption, content, $changed));
    }
  }
  function com_notas_agenda_theme_NotasColors$stableprop_getter() {
    return com_notas_agenda_theme_NotasColors$stable;
  }
  function com_notas_agenda_theme_NotasTheme$stableprop_getter() {
    return com_notas_agenda_theme_NotasTheme$stable;
  }
  function LocalNotasColors$lambda() {
    _init_properties_NotasTheme_kt__othx98();
    return notasPalette(false, NotasAccentOption_VIOLET_getInstance());
  }
  function NotasTheme$lambda($colorScheme, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C166@5513L133:NotasTheme.kt#3t1m9v');
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        if (isTraceInProgress()) {
          traceEventStart(823425480, $changed, -1, 'com.notas.agenda.theme.NotasTheme.<anonymous> (NotasTheme.kt:166)');
        }
        MaterialTheme($colorScheme, null, Typography_init_$Create$(), $content, $composer_0, 384, 2);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return constructCallableReference(function (p0_0, p1) {
      p0.invoke_z8di7s_k$(p0_0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.runtime.internal/ComposableLambda.invoke|invoke(androidx.compose.runtime.Composer;kotlin.Int){}[0]', VOID, [p0]);
  }
  function NotasTheme$lambda_0($isDark, $accentOption, $content, $$changed) {
    return function ($composer, $force) {
      NotasTheme_0($isDark, $accentOption, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NotasAccentOption_VIOLET_getInstance() {
    static_init_2();
    return NotasAccentOption_VIOLET_instance;
  }
  function NotasAccentOption_GREEN_getInstance() {
    static_init_2();
    return NotasAccentOption_GREEN_instance;
  }
  function NotasAccentOption_AMBER_getInstance() {
    static_init_2();
    return NotasAccentOption_AMBER_instance;
  }
  function NotasAccentOption_PINK_getInstance() {
    static_init_2();
    return NotasAccentOption_PINK_instance;
  }
  var properties_initialized_NotasTheme_kt_ru0qgq;
  function _init_properties_NotasTheme_kt__othx98() {
    if (!properties_initialized_NotasTheme_kt_ru0qgq) {
      properties_initialized_NotasTheme_kt_ru0qgq = true;
      LocalNotasColors = staticCompositionLocalOf(LocalNotasColors$lambda);
      com_notas_agenda_theme_NotasColors$stable = 0;
      com_notas_agenda_theme_NotasTheme$stable = 0;
    }
  }
  function categoryColors(category, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -197228011, 'C(categoryColors)50@2268L6:NotasCommonComponents.kt#sk2dic');
    if (isTraceInProgress()) {
      traceEventStart(-197228011, $changed, -1, 'com.notas.agenda.ui.components.categoryColors (NotasCommonComponents.kt:49)');
    }
    var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
    var tmp;
    switch (category.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = to(new Color_0(colors.get_accentContainer_6iiayz_k$()), new Color_0(colors.get_accentContent_6vke99_k$()));
        break;
      case 1:
        tmp = to(new Color_0(colors.get_successContainer_dqfg6m_k$()), new Color_0(colors.get_successContent_tyisdi_k$()));
        break;
      case 2:
        tmp = to(new Color_0(colors.get_warningContainer_128a97_k$()), new Color_0(colors.get_warningContent_6yfjgt_k$()));
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function NotasTopStatusBar(modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(510236534);
    sourceInformation($composer_0, 'C(NotasTopStatusBar)60@2666L6,61@2677L1922:NotasCommonComponents.kt#sk2dic');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (isTraceInProgress()) {
        traceEventStart(510236534, $dirty, -1, 'com.notas.agenda.ui.components.NotasTopStatusBar (NotasCommonComponents.kt:59)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      var tmp = fillMaxWidth(modifier_0._v);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(36);
      var tmp_0 = height(tmp, tmp$ret$0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_1 = padding(tmp_0, tmp$ret$1);
      var horizontalArrangement = Arrangement_getInstance().get_SpaceBetween_5p3wqd_k$();
      var verticalAlignment = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_1 = $composer_0;
      if (!((0 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((0 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((0 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_2);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp_1 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      RowScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -1330436743, 'C69@2937L158,75@3104L1489:NotasCommonComponents.kt#sk2dic');
      var tmp_2 = colors.get_textPrimary_mf1tv7_k$();
      var tmp_3 = get_sp(13);
      var tmp_4 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_7 = _TextOverflow___init__impl__obguoe(0);
      Text('9:41', null, tmp_2, null, tmp_3, null, tmp_4, null, tmp_5, null, null, tmp_6, tmp_7, false, 0, 0, null, null, $composer_5, 1597446, 0, 262058);
      var tmp0_verticalAlignment = Companion_getInstance_1().get_Bottom_3m75bg_k$();
      var tmp_8 = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$8 = _Dp___init__impl__ms3zkb(2);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_3 = null;
      var horizontalArrangement_0 = tmp_8.spacedBy_wt7oji_k$(tmp$ret$8);
      var verticalAlignment_0 = tmp0_verticalAlignment;
      var $composer_6 = $composer_5;
      if (!((1 & 1) === 0))
        modifier_3 = Companion_getInstance_0();
      if (!((1 & 2) === 0))
        horizontalArrangement_0 = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((1 & 4) === 0))
        verticalAlignment_0 = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_0 = rowMeasurePolicy(horizontalArrangement_0, verticalAlignment_0, $composer_6, 14 & 432 >> 3 | 112 & 432 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_7 = $composer_6;
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_4);
      var tmp0_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      var tmp_9 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_9, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_0);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_9 = $composer_8;
      RowScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, -1610364771, 'C88@3599L39,89@3651L932:NotasCommonComponents.kt#sk2dic');
      $composer_10.startReplaceGroup_5hh8aj_k$(779336737);
      sourceInformation($composer_10, '*80@3318L254');
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_10 = _Dp___init__impl__ms3zkb(4);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_11 = _Dp___init__impl__ms3zkb(6);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_12 = _Dp___init__impl__ms3zkb(8);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$18 = _Dp___init__impl__ms3zkb(10);
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = listOf([new Dp(tmp_10), new Dp(tmp_11), new Dp(tmp_12), new Dp(tmp$ret$18)]).iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        var barHeight = element.value_1;
        var tmp_13 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$21 = _Dp___init__impl__ms3zkb(2);
        var tmp_14 = height(width(tmp_13, tmp$ret$21), barHeight);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$22 = _Dp___init__impl__ms3zkb(1);
        Box(background(clip(tmp_14, RoundedCornerShape(tmp$ret$22)), colors.get_textPrimary_mf1tv7_k$()), $composer_10, 0);
      }
      $composer_10.endReplaceGroup_ek144q_k$();
      var tmp_15 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$23 = _Dp___init__impl__ms3zkb(6);
      Spacer(width(tmp_15, tmp$ret$23), $composer_10, 6);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_5 = null;
      var horizontalArrangement_1 = null;
      var verticalAlignment_1 = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_11 = $composer_10;
      if (!((3 & 1) === 0))
        modifier_5 = Companion_getInstance_0();
      if (!((3 & 2) === 0))
        horizontalArrangement_1 = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((3 & 4) === 0))
        verticalAlignment_1 = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_1 = rowMeasurePolicy(horizontalArrangement_1, verticalAlignment_1, $composer_11, 14 & 384 >> 3 | 112 & 384 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_6 = modifier_5;
      var $composer_12 = $composer_11;
      if (!((0 & 2) === 0))
        modifier_6 = Companion_getInstance_0();
      var compositeKeyHash_1 = get_currentCompositeKeyHashCode($composer_12, 0).hashCode();
      var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_1 = materialize($composer_12, modifier_6);
      var tmp0_1 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_13 = $composer_12;
      var tmp_16 = $composer_13.get_applier_bupu8u_k$();
      if (!isInterface(tmp_16, Applier)) {
        invalidApplier();
      }
      $composer_13.startReusableNode_jjgeyp_k$();
      if ($composer_13.get_inserting_25mlsw_k$()) {
        $composer_13.createNode_ahrd54_k$(tmp0_1);
      } else {
        $composer_13.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, compositeKeyHash_1, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_1, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_14 = $composer_13;
      RowScopeInstance_getInstance();
      var $composer_15 = $composer_14;
      sourceInformationMarkerStart($composer_15, -422197143, 'C90@3721L542,103@4280L39,104@4336L233:NotasCommonComponents.kt#sk2dic');
      var tmp_17 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_18 = _Dp___init__impl__ms3zkb(23);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$31 = _Dp___init__impl__ms3zkb(11);
      var tmp_19 = size(tmp_17, tmp_18, tmp$ret$31);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_20 = _Dp___init__impl__ms3zkb(1);
      var tmp_21 = colors.get_textPrimary_mf1tv7_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$33 = _Dp___init__impl__ms3zkb(3);
      var tmp_22 = border(tmp_19, tmp_20, tmp_21, RoundedCornerShape(tmp$ret$33));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$34 = _Dp___init__impl__ms3zkb(2);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_7 = padding_1(tmp_22, tmp$ret$34);
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_16 = $composer_15;
      if (!((6 & 1) === 0))
        modifier_7 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_2 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_8 = modifier_7;
      var $composer_17 = $composer_16;
      if (!((0 & 2) === 0))
        modifier_8 = Companion_getInstance_0();
      var compositeKeyHash_2 = get_currentCompositeKeyHashCode($composer_17, 0).hashCode();
      var localMap_2 = $composer_17.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_2 = materialize($composer_17, modifier_8);
      var tmp0_2 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_18 = $composer_17;
      var tmp_23 = $composer_18.get_applier_bupu8u_k$();
      if (!isInterface(tmp_23, Applier)) {
        invalidApplier();
      }
      $composer_18.startReusableNode_jjgeyp_k$();
      if ($composer_18.get_inserting_25mlsw_k$()) {
        $composer_18.createNode_ahrd54_k$(tmp0_2);
      } else {
        $composer_18.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_18);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, compositeKeyHash_2, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_2, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_19 = $composer_18;
      BoxScopeInstance_getInstance();
      var $composer_20 = $composer_19;
      sourceInformationMarkerStart($composer_20, 1689811713, 'C96@3991L254:NotasCommonComponents.kt#sk2dic');
      var tmp_24 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_25 = _Dp___init__impl__ms3zkb(17);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$42 = _Dp___init__impl__ms3zkb(7);
      var tmp_26 = size(tmp_24, tmp_25, tmp$ret$42);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$43 = _Dp___init__impl__ms3zkb(1);
      Box(background(clip(tmp_26, RoundedCornerShape(tmp$ret$43)), colors.get_textPrimary_mf1tv7_k$()), $composer_20, 0);
      sourceInformationMarkerEnd($composer_20);
      $composer_18.endNode_3m0yfn_k$();
      var tmp_27 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$44 = _Dp___init__impl__ms3zkb(1);
      Spacer(width(tmp_27, tmp$ret$44), $composer_15, 6);
      var tmp_28 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_29 = _Dp___init__impl__ms3zkb(2);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$46 = _Dp___init__impl__ms3zkb(5);
      var tmp_30 = size(tmp_28, tmp_29, tmp$ret$46);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$47 = _Dp___init__impl__ms3zkb(1);
      Box(background(clip(tmp_30, RoundedCornerShape(tmp$ret$47)), colors.get_textPrimary_mf1tv7_k$()), $composer_15, 0);
      sourceInformationMarkerEnd($composer_15);
      $composer_13.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_10);
      $composer_8.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(NotasTopStatusBar$lambda(modifier_0, $changed, $default));
    }
  }
  function NotasHeader(eyebrow, title, subtitle, actionIcon, actionTint, onActionClick, backText, onBackClick, modifier, $composer, $changed, $default) {
    var actionIcon_0 = {_v: actionIcon};
    var tmp = actionTint;
    var actionTint_0 = {_v: tmp == null ? null : new Color_0(tmp)};
    var onActionClick_0 = {_v: onActionClick};
    var backText_0 = {_v: backText};
    var onBackClick_0 = {_v: onBackClick};
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(564716350);
    sourceInformation($composer_0, 'C(NotasHeader)P(3,8,7!1,1:c#ui.graphics.Color,5!1,6)127@4939L6,128@4950L3038:NotasCommonComponents.kt#sk2dic');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(eyebrow) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(subtitle) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(actionIcon_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(actionTint_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onActionClick_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(backText_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onBackClick_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 67108864 : 33554432);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 38347923) === 38347922), $dirty & 1)) {
      if (!(($default & 8) === 0)) {
        actionIcon_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        actionTint_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        onActionClick_0._v = null;
      }
      if (!(($default & 64) === 0)) {
        backText_0._v = null;
      }
      if (!(($default & 128) === 0)) {
        onBackClick_0._v = null;
      }
      if (!(($default & 256) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (isTraceInProgress()) {
        traceEventStart(564716350, $dirty, -1, 'com.notas.agenda.ui.components.NotasHeader (NotasCommonComponents.kt:126)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      var tmp_0 = fillMaxWidth(modifier_0._v);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_1 = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(6);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_1 = padding(tmp_0, tmp_1, tmp$ret$1);
      var horizontalArrangement = Arrangement_getInstance().get_SpaceBetween_5p3wqd_k$();
      var verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var $composer_1 = $composer_0;
      if (!((0 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((0 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((0 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_2);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp_2 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_2, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      var tmp0_0 = RowScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 1826529438, 'C135@5187L1831:NotasCommonComponents.kt#sk2dic');
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_3 = tmp0_0.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0);
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_6 = $composer_5;
      if (!((6 & 1) === 0))
        modifier_3 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_7 = $composer_6;
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_4);
      var tmp0_1 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      var tmp_3 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_3, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_1);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_9 = $composer_8;
      ColumnScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, 2099393335, 'C136@5240L992,160@6245L40,161@6298L293:NotasCommonComponents.kt#sk2dic');
      var tmp0_verticalAlignment = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var tmp_4 = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$14 = _Dp___init__impl__ms3zkb(10);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_5 = null;
      var horizontalArrangement_0 = tmp_4.spacedBy_wt7oji_k$(tmp$ret$14);
      var verticalAlignment_0 = tmp0_verticalAlignment;
      var $composer_11 = $composer_10;
      if (!((1 & 1) === 0))
        modifier_5 = Companion_getInstance_0();
      if (!((1 & 2) === 0))
        horizontalArrangement_0 = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((1 & 4) === 0))
        verticalAlignment_0 = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_1 = rowMeasurePolicy(horizontalArrangement_0, verticalAlignment_0, $composer_11, 14 & 432 >> 3 | 112 & 432 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_6 = modifier_5;
      var $composer_12 = $composer_11;
      if (!((0 & 2) === 0))
        modifier_6 = Companion_getInstance_0();
      var compositeKeyHash_1 = get_currentCompositeKeyHashCode($composer_12, 0).hashCode();
      var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_1 = materialize($composer_12, modifier_6);
      var tmp0_2 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_13 = $composer_12;
      var tmp_5 = $composer_13.get_applier_bupu8u_k$();
      if (!isInterface(tmp_5, Applier)) {
        invalidApplier();
      }
      $composer_13.startReusableNode_jjgeyp_k$();
      if ($composer_13.get_inserting_25mlsw_k$()) {
        $composer_13.createNode_ahrd54_k$(tmp0_2);
      } else {
        $composer_13.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, compositeKeyHash_1, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_1, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_14 = $composer_13;
      RowScopeInstance_getInstance();
      var $composer_15 = $composer_14;
      sourceInformationMarkerStart($composer_15, 517050587, 'C140@5410L241:NotasCommonComponents.kt#sk2dic');
      var tmp_6 = colors.get_accentContent_6vke99_k$();
      var tmp_7 = get_sp(10);
      var tmp_8 = Companion_getInstance_4().get_Bold_wnz5ke_k$();
      var tmp_9 = get_sp_0(1.8);
      var tmp_10 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_11 = _TextOverflow___init__impl__obguoe(0);
      Text(eyebrow, null, tmp_6, null, tmp_7, null, tmp_8, null, tmp_9, null, null, tmp_10, tmp_11, false, 0, 0, null, null, $composer_15, 102260736 | 14 & $dirty, 0, 261802);
      if (!(backText_0._v == null) && !(onBackClick_0._v == null)) {
        $composer_15.startReplaceGroup_5hh8aj_k$(517362353);
        sourceInformation($composer_15, '148@5735L465');
        var tmp0_text = '\u2039 ' + backText_0._v;
        var tmp1_color = colors.get_textSecondary_kl22jf_k$();
        var tmp2_fontSize = get_sp(11);
        var tmp3_fontWeight = Companion_getInstance_4().get_Medium_1fiba6_k$();
        var tmp_12 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$21 = _Dp___init__impl__ms3zkb(8);
        var tmp_13 = clickable(clip(tmp_12, RoundedCornerShape(tmp$ret$21)), VOID, VOID, VOID, VOID, onBackClick_0._v);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp_14 = _Dp___init__impl__ms3zkb(6);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$23 = _Dp___init__impl__ms3zkb(2);
        var tmp4_modifier = padding(tmp_13, tmp_14, tmp$ret$23);
        var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_16 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_17 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp0_text, tmp4_modifier, tmp1_color, null, tmp2_fontSize, null, tmp3_fontWeight, null, tmp_15, null, null, tmp_16, tmp_17, false, 0, 0, null, null, $composer_15, 1597440, 0, 262056);
        $composer_15.endReplaceGroup_ek144q_k$();
      } else {
        $composer_15.startReplaceGroup_5hh8aj_k$(517827074);
        $composer_15.endReplaceGroup_ek144q_k$();
      }
      sourceInformationMarkerEnd($composer_15);
      $composer_13.endNode_3m0yfn_k$();
      var tmp_18 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$24 = _Dp___init__impl__ms3zkb(6);
      Spacer(height(tmp_18, tmp$ret$24), $composer_10, 6);
      var tmp2_color = colors.get_textPrimary_mf1tv7_k$();
      var tmp3_fontSize = get_sp(28);
      var tmp4_fontWeight = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp5_lineHeight = get_sp(32);
      var tmp6_overflow = Companion_getInstance_5().get_Ellipsis_8ygjpt_k$();
      var tmp_19 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      Text(title, null, tmp2_color, null, tmp3_fontSize, null, tmp4_fontWeight, null, tmp_19, null, null, tmp5_lineHeight, tmp6_overflow, false, 1, 0, null, null, $composer_10, 1597440 | 14 & $dirty >> 3, 25008, 239530);
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(subtitle) > 0) {
        $composer_10.startReplaceGroup_5hh8aj_k$(2100730085);
        sourceInformation($composer_10, '171@6649L40,172@6706L288');
        var tmp_20 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$26 = _Dp___init__impl__ms3zkb(4);
        Spacer(height(tmp_20, tmp$ret$26), $composer_10, 6);
        var tmp7_color = colors.get_textSecondary_kl22jf_k$();
        var tmp8_fontSize = get_sp(12);
        var tmp9_fontWeight = Companion_getInstance_4().get_Normal_22avww_k$();
        var tmp10_overflow = Companion_getInstance_5().get_Ellipsis_8ygjpt_k$();
        var tmp_21 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_22 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        Text(subtitle, null, tmp7_color, null, tmp8_fontSize, null, tmp9_fontWeight, null, tmp_21, null, null, tmp_22, tmp10_overflow, false, 1, 0, null, null, $composer_10, 1597440 | 14 & $dirty >> 6, 24960, 241578);
        $composer_10.endReplaceGroup_ek144q_k$();
      } else {
        $composer_10.startReplaceGroup_5hh8aj_k$(2101092382);
        $composer_10.endReplaceGroup_ek144q_k$();
      }
      sourceInformationMarkerEnd($composer_10);
      $composer_8.endNode_3m0yfn_k$();
      if (!(actionIcon_0._v == null) && !(onActionClick_0._v == null)) {
        $composer_5.startReplaceGroup_5hh8aj_k$(1828344766);
        sourceInformation($composer_5, '183@7090L40,184@7143L829');
        var tmp_23 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$27 = _Dp___init__impl__ms3zkb(12);
        Spacer(width(tmp_23, tmp$ret$27), $composer_5, 6);
        var tmp_24 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$28 = _Dp___init__impl__ms3zkb(14);
        var tmp_25 = padding_0(tmp_24, VOID, tmp$ret$28);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$29 = _Dp___init__impl__ms3zkb(44);
        var tmp_26 = size_0(tmp_25, tmp$ret$29);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$30 = _Dp___init__impl__ms3zkb(14);
        var tmp_27 = background(clip(tmp_26, RoundedCornerShape(tmp$ret$30)), colors.get_surface_ya87t7_k$());
        var tmp_28;
        if (colors.get_isDark_evw91l_k$()) {
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp_28 = _Dp___init__impl__ms3zkb(1);
        } else {
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp_28 = _Dp___init__impl__ms3zkb(0.5);
        }
        var tmp_29 = tmp_28;
        var tmp_30 = colors.get_border_pp3j8c_k$();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$33 = _Dp___init__impl__ms3zkb(14);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier_7 = clickable(border(tmp_27, tmp_29, tmp_30, RoundedCornerShape(tmp$ret$33)), VOID, VOID, VOID, VOID, onActionClick_0._v);
        var contentAlignment = Companion_getInstance_1().get_Center_3arb0i_k$();
        var propagateMinConstraints = false;
        var $composer_16 = $composer_5;
        if (!((4 & 1) === 0))
          modifier_7 = Companion_getInstance_0();
        if (!((4 & 2) === 0))
          contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
        if (!((4 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy_2 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_8 = modifier_7;
        var $composer_17 = $composer_16;
        if (!((0 & 2) === 0))
          modifier_8 = Companion_getInstance_0();
        var compositeKeyHash_2 = get_currentCompositeKeyHashCode($composer_17, 0).hashCode();
        var localMap_2 = $composer_17.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized_2 = materialize($composer_17, modifier_8);
        var tmp0_3 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_18 = $composer_17;
        var tmp_31 = $composer_18.get_applier_bupu8u_k$();
        if (!isInterface(tmp_31, Applier)) {
          invalidApplier();
        }
        $composer_18.startReusableNode_jjgeyp_k$();
        if ($composer_18.get_inserting_25mlsw_k$()) {
          $composer_18.createNode_ahrd54_k$(tmp0_3);
        } else {
          $composer_18.useNode_io5s9l_k$();
        }
        var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_18);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, compositeKeyHash_2, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_2, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        var $composer_19 = $composer_18;
        BoxScopeInstance_getInstance();
        var $composer_20 = $composer_19;
        sourceInformationMarkerStart($composer_20, 1980300900, 'C198@7728L230:NotasCommonComponents.kt#sk2dic');
        var tmp1_imageVector = actionIcon_0._v;
        var tmp_32 = actionTint_0._v;
        var tmp0_elvis_lhs = tmp_32 == null ? null : tmp_32.value_1;
        var tmp_33;
        var tmp_34 = tmp0_elvis_lhs;
        if ((tmp_34 == null ? null : new Color_0(tmp_34)) == null) {
          tmp_33 = colors.get_textPrimary_mf1tv7_k$();
        } else {
          tmp_33 = tmp0_elvis_lhs;
        }
        var tmp2_tint = tmp_33;
        var tmp_35 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$40 = _Dp___init__impl__ms3zkb(22);
        var tmp3_modifier = size_0(tmp_35, tmp$ret$40);
        Icon(tmp1_imageVector, null, tmp3_modifier, tmp2_tint, $composer_20, 432 | 14 & $dirty >> 9, 0);
        sourceInformationMarkerEnd($composer_20);
        $composer_18.endNode_3m0yfn_k$();
        $composer_5.endReplaceGroup_ek144q_k$();
      } else {
        $composer_5.startReplaceGroup_5hh8aj_k$(1829215432);
        $composer_5.endReplaceGroup_ek144q_k$();
      }
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(NotasHeader$lambda(eyebrow, title, subtitle, actionIcon_0, actionTint_0, onActionClick_0, backText_0, onBackClick_0, modifier_0, $changed, $default));
    }
  }
  function NotasSegmentedControl(options, selectedIndex, onSelect, height_0, cornerRadius, modifier, $composer, $changed, $default) {
    var height_1 = {_v: new Dp(height_0)};
    var cornerRadius_0 = {_v: new Dp(cornerRadius)};
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-957474423);
    sourceInformation($composer_0, 'C(NotasSegmentedControl)P(4,5,3,1:c#ui.unit.Dp,0:c#ui.unit.Dp)218@8232L6,219@8243L1311:NotasCommonComponents.kt#sk2dic');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(options) : $composer_0.changedInstance_s1wkiy_k$(options)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(selectedIndex) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onSelect) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_i8bvic_k$(_Dp___get_value__impl__geb1vb(height_1._v.value_1)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_i8bvic_k$(_Dp___get_value__impl__geb1vb(cornerRadius_0._v.value_1)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 131072 : 65536);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 74899) === 74898), $dirty & 1)) {
      if (!(($default & 8) === 0)) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(44);
        height_1._v = new Dp(tmp$ret$0);
      }
      if (!(($default & 16) === 0)) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$1 = _Dp___init__impl__ms3zkb(14);
        cornerRadius_0._v = new Dp(tmp$ret$1);
      }
      if (!(($default & 32) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (isTraceInProgress()) {
        traceEventStart(-957474423, $dirty, -1, 'com.notas.agenda.ui.components.NotasSegmentedControl (NotasCommonComponents.kt:217)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      var tmp = background(clip(height(fillMaxWidth(modifier_0._v), height_1._v.value_1), RoundedCornerShape(cornerRadius_0._v.value_1)), colors.get_surfaceMuted_41zcuq_k$());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(4);
      var tmp0 = padding_1(tmp, tmp$ret$2);
      var tmp_0 = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$3 = _Dp___init__impl__ms3zkb(4);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_1 = tmp0;
      var horizontalArrangement = tmp_0.spacedBy_wt7oji_k$(tmp$ret$3);
      var verticalAlignment = null;
      var $composer_1 = $composer_0;
      if (!((4 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((4 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((4 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 48 >> 3 | 112 & 48 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_2);
      var tmp0_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp_1 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0_0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      var tmp0_1 = RowScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 1777881247, 'C:NotasCommonComponents.kt#sk2dic');
      $composer_5.startReplaceGroup_5hh8aj_k$(195898588);
      sourceInformation($composer_5, '*230@8651L116,233@8797L111,242@9198L19,236@8921L617');
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var _iterator__ex2g4s = options.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var item = _iterator__ex2g4s.next_20eer_k$();
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var index_0 = checkIndexOverflow(_unary__edvuaz);
        var selected = index_0 === selectedIndex;
        var tmp_2 = selected ? colors.get_accentSelectedSegment_jjrx64_k$() : Companion_getInstance_3().get_Transparent_if5ln4_k$();
        var bgColor$delegate = animateColorAsState(tmp_2, null, null, null, $composer_5, 0, 14);
        var tmp_3 = selected ? colors.get_accentContent_6vke99_k$() : colors.get_textSecondary_kl22jf_k$();
        var textColor$delegate = animateColorAsState(tmp_3, null, null, null, $composer_5, 0, 14);
        var tmp_4 = tmp0_1.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0);
        var tmp0_2 = height_1._v.value_1;
        // Inline function 'androidx.compose.ui.unit.dp' call
        // Inline function 'androidx.compose.ui.unit.Dp.minus' call
        var other = _Dp___init__impl__ms3zkb(8);
        var tmp$ret$13 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_2) - _Dp___get_value__impl__geb1vb(other));
        var tmp_5 = height(tmp_4, tmp$ret$13);
        var tmp0_3 = cornerRadius_0._v.value_1;
        // Inline function 'androidx.compose.ui.unit.dp' call
        // Inline function 'androidx.compose.ui.unit.Dp.minus' call
        var other_0 = _Dp___init__impl__ms3zkb(3);
        var tmp_6 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_3) - _Dp___get_value__impl__geb1vb(other_0));
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$16 = _Dp___init__impl__ms3zkb(8);
        var tmp_7 = background(clip(tmp_5, RoundedCornerShape(coerceAtLeast_0(new Dp(tmp_6), new Dp(tmp$ret$16)).value_1)), NotasSegmentedControl$lambda(bgColor$delegate));
        sourceInformationMarkerStart($composer_5, 1537334886, 'CC(remember):NotasCommonComponents.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!(($dirty & 896) === 256 | $composer_0.changed_kpusro_k$(index_0));
        // Inline function 'kotlin.let' call
        var it = $composer_5.rememberedValue_4dg93v_k$();
        var tmp_8;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = NotasSegmentedControl$lambda_1(onSelect, index_0);
          $composer_5.updateRememberedValue_l1wh71_k$(value);
          tmp_8 = value;
        } else {
          tmp_8 = it;
        }
        var tmp0_group = tmp_8;
        sourceInformationMarkerEnd($composer_5);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier_3 = clickable(tmp_7, VOID, VOID, VOID, VOID, tmp0_group);
        var contentAlignment = Companion_getInstance_1().get_Center_3arb0i_k$();
        var propagateMinConstraints = false;
        var $composer_6 = $composer_5;
        if (!((4 & 1) === 0))
          modifier_3 = Companion_getInstance_0();
        if (!((4 & 2) === 0))
          contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
        if (!((4 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy_0 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_4 = modifier_3;
        var $composer_7 = $composer_6;
        if (!((0 & 2) === 0))
          modifier_4 = Companion_getInstance_0();
        var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
        var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized_0 = materialize($composer_7, modifier_4);
        var tmp0_4 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_8 = $composer_7;
        var tmp_9 = $composer_8.get_applier_bupu8u_k$();
        if (!isInterface(tmp_9, Applier)) {
          invalidApplier();
        }
        $composer_8.startReusableNode_jjgeyp_k$();
        if ($composer_8.get_inserting_25mlsw_k$()) {
          $composer_8.createNode_ahrd54_k$(tmp0_4);
        } else {
          $composer_8.useNode_io5s9l_k$();
        }
        var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        var $composer_9 = $composer_8;
        BoxScopeInstance_getInstance();
        var $composer_10 = $composer_9;
        sourceInformationMarkerStart($composer_10, -1969463826, 'C245@9304L220:NotasCommonComponents.kt#sk2dic');
        var tmp_10 = NotasSegmentedControl$lambda_0(textColor$delegate);
        var tmp_11;
        var tmp_12 = height_1._v;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$27 = _Dp___init__impl__ms3zkb(50);
        if (Dp__compareTo_impl_tlg3dl(tmp_12.value_1, tmp$ret$27) >= 0) {
          tmp_11 = get_sp(13);
        } else {
          tmp_11 = get_sp(12);
        }
        var tmp_13 = tmp_11;
        var tmp_14 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
        var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_16 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_17 = _TextOverflow___init__impl__obguoe(0);
        Text(item, null, tmp_10, null, tmp_13, null, tmp_14, null, tmp_15, null, null, tmp_16, tmp_17, false, 0, 0, null, null, $composer_10, 1572864, 0, 262058);
        sourceInformationMarkerEnd($composer_10);
        $composer_8.endNode_3m0yfn_k$();
      }
      $composer_5.endReplaceGroup_ek144q_k$();
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(NotasSegmentedControl$lambda_2(options, selectedIndex, onSelect, height_1, cornerRadius_0, modifier_0, $changed, $default));
    }
  }
  function NotasInputField(label, value, onValueChange, placeholder, isPassword, passwordVisible, onTogglePasswordVisibility, singleLine, minHeight, cornerRadius, modifier, $composer, $changed, $changed1, $default) {
    var placeholder_0 = {_v: placeholder};
    var isPassword_0 = {_v: isPassword};
    var passwordVisible_0 = {_v: passwordVisible};
    var onTogglePasswordVisibility_0 = {_v: onTogglePasswordVisibility};
    var singleLine_0 = {_v: singleLine};
    var minHeight_0 = {_v: new Dp(minHeight)};
    var cornerRadius_0 = {_v: new Dp(cornerRadius)};
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(142379416);
    sourceInformation($composer_0, 'C(NotasInputField)P(2,10,6,8,1,7,5,9,3:c#ui.unit.Dp,0:c#ui.unit.Dp)270@9977L6,271@9988L2449:NotasCommonComponents.kt#sk2dic');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(label) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(value) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onValueChange) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(placeholder_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(isPassword_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(passwordVisible_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onTogglePasswordVisibility_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(singleLine_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.changed_i8bvic_k$(_Dp___get_value__impl__geb1vb(minHeight_0._v.value_1)) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.changed_i8bvic_k$(_Dp___get_value__impl__geb1vb(cornerRadius_0._v.value_1)) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 306783379) === 306783378) || !(($dirty1 & 3) === 2), $dirty & 1)) {
      if (!(($default & 8) === 0)) {
        placeholder_0._v = '';
      }
      if (!(($default & 16) === 0)) {
        isPassword_0._v = false;
      }
      if (!(($default & 32) === 0)) {
        passwordVisible_0._v = false;
      }
      if (!(($default & 64) === 0)) {
        onTogglePasswordVisibility_0._v = null;
      }
      if (!(($default & 128) === 0)) {
        singleLine_0._v = true;
      }
      if (!(($default & 256) === 0)) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(52);
        minHeight_0._v = new Dp(tmp$ret$0);
      }
      if (!(($default & 512) === 0)) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$1 = _Dp___init__impl__ms3zkb(16);
        cornerRadius_0._v = new Dp(tmp$ret$1);
      }
      if (!(($default & 1024) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (isTraceInProgress()) {
        traceEventStart(142379416, $dirty, $dirty1, 'com.notas.agenda.ui.components.NotasInputField (NotasCommonComponents.kt:269)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = fillMaxWidth(modifier_0._v);
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_2);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -977629601, 'C272@10041L155,278@10205L40,279@10254L2177:NotasCommonComponents.kt#sk2dic');
      var tmp_0 = colors.get_textPrimary_mf1tv7_k$();
      var tmp_1 = get_sp(12);
      var tmp_2 = Companion_getInstance_4().get_Medium_1fiba6_k$();
      var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextOverflow___init__impl__obguoe(0);
      Text(label, null, tmp_0, null, tmp_1, null, tmp_2, null, tmp_3, null, null, tmp_4, tmp_5, false, 0, 0, null, null, $composer_5, 1597440 | 14 & $dirty, 0, 262058);
      var tmp_6 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$8 = _Dp___init__impl__ms3zkb(8);
      Spacer(height(tmp_6, tmp$ret$8), $composer_5, 6);
      var tmp_7 = background(clip(heightIn(fillMaxWidth(Companion_getInstance_0()), minHeight_0._v.value_1), RoundedCornerShape(cornerRadius_0._v.value_1)), colors.get_surface_ya87t7_k$());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$9 = _Dp___init__impl__ms3zkb(1);
      var tmp_8 = border(tmp_7, tmp$ret$9, colors.get_border_pp3j8c_k$(), RoundedCornerShape(cornerRadius_0._v.value_1));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_9 = _Dp___init__impl__ms3zkb(15);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$11 = _Dp___init__impl__ms3zkb(14);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_3 = padding(tmp_8, tmp_9, tmp$ret$11);
      var horizontalArrangement = null;
      var verticalAlignment = singleLine_0._v ? Companion_getInstance_1().get_CenterVertically_dmkbbz_k$() : Companion_getInstance_1().get_Top_18jj1w_k$();
      var $composer_6 = $composer_5;
      if (!((2 & 1) === 0))
        modifier_3 = Companion_getInstance_0();
      if (!((2 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((2 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_0 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_7 = $composer_6;
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_4);
      var tmp0_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      var tmp_10 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_10, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_0);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_9 = $composer_8;
      var tmp0_1 = RowScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, 1282345108, 'C289@10728L1064:NotasCommonComponents.kt#sk2dic');
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_5 = tmp0_1.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0);
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_11 = $composer_10;
      if (!((6 & 1) === 0))
        modifier_5 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_1 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_6 = modifier_5;
      var $composer_12 = $composer_11;
      if (!((0 & 2) === 0))
        modifier_6 = Companion_getInstance_0();
      var compositeKeyHash_1 = get_currentCompositeKeyHashCode($composer_12, 0).hashCode();
      var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_1 = materialize($composer_12, modifier_6);
      var tmp0_2 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_13 = $composer_12;
      var tmp_11 = $composer_13.get_applier_bupu8u_k$();
      if (!isInterface(tmp_11, Applier)) {
        invalidApplier();
      }
      $composer_13.startReusableNode_jjgeyp_k$();
      if ($composer_13.get_inserting_25mlsw_k$()) {
        $composer_13.createNode_ahrd54_k$(tmp0_2);
      } else {
        $composer_13.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, compositeKeyHash_1, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_1, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_14 = $composer_13;
      BoxScopeInstance_getInstance();
      var $composer_15 = $composer_14;
      sourceInformationMarkerStart($composer_15, -144458137, 'C297@11027L751:NotasCommonComponents.kt#sk2dic');
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(value) === 0) {
        $composer_15.startReplaceGroup_5hh8aj_k$(-144461765);
        sourceInformation($composer_15, '291@10825L167');
        var tmp_12 = placeholder_0._v;
        var tmp_13 = colors.get_textSecondary_kl22jf_k$();
        var tmp_14 = get_sp(13);
        var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_16 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_17 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_12, null, tmp_13, null, tmp_14, null, null, null, tmp_15, null, null, tmp_16, tmp_17, false, 0, 0, null, null, $composer_15, 24576 | 14 & $dirty >> 9, 0, 262122);
        $composer_15.endReplaceGroup_ek144q_k$();
      } else {
        $composer_15.startReplaceGroup_5hh8aj_k$(-144262838);
        $composer_15.endReplaceGroup_ek144q_k$();
      }
      var tmp0_textStyle = TextStyle_init_$Create$(colors.get_textPrimary_mf1tv7_k$(), get_sp(13), Companion_getInstance_4().get_Normal_22avww_k$());
      var tmp1_cursorBrush = new SolidColor(colors.get_accentButton_k5y1fw_k$());
      var tmp_18;
      if (isPassword_0._v && !passwordVisible_0._v) {
        tmp_18 = new PasswordVisualTransformation(_Char___init__impl__6a9atx(8226));
      } else {
        tmp_18 = Companion_getInstance_6().get_None_wo6tgh_k$();
      }
      var tmp2_visualTransformation = tmp_18;
      var tmp3_modifier = fillMaxWidth(Companion_getInstance_0());
      var tmp_19 = singleLine_0._v;
      BasicTextField(value, onValueChange, tmp3_modifier, false, false, tmp0_textStyle, null, null, tmp_19, 0, 0, tmp2_visualTransformation, null, null, tmp1_cursorBrush, null, $composer_15, 384 | 14 & $dirty >> 3 | 112 & $dirty >> 3 | 234881024 & $dirty << 3, 0, 46808);
      sourceInformationMarkerEnd($composer_15);
      $composer_13.endNode_3m0yfn_k$();
      if (isPassword_0._v && !(onTogglePasswordVisibility_0._v == null)) {
        $composer_10.startReplaceGroup_5hh8aj_k$(1283431998);
        sourceInformation($composer_10, '316@11877L39,317@11933L474');
        var tmp_20 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$25 = _Dp___init__impl__ms3zkb(8);
        Spacer(width(tmp_20, tmp$ret$25), $composer_10, 6);
        var tmp0_text = passwordVisible_0._v ? 'Ocultar' : 'Ver';
        var tmp1_color = colors.get_accentContent_6vke99_k$();
        var tmp2_fontSize = get_sp(11);
        var tmp3_fontWeight = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
        var tmp_21 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$26 = _Dp___init__impl__ms3zkb(8);
        var tmp_22 = clickable(clip(tmp_21, RoundedCornerShape(tmp$ret$26)), VOID, VOID, VOID, VOID, onTogglePasswordVisibility_0._v);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp_23 = _Dp___init__impl__ms3zkb(6);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$28 = _Dp___init__impl__ms3zkb(2);
        var tmp4_modifier = padding(tmp_22, tmp_23, tmp$ret$28);
        var tmp_24 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_25 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_26 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp0_text, tmp4_modifier, tmp1_color, null, tmp2_fontSize, null, tmp3_fontWeight, null, tmp_24, null, null, tmp_25, tmp_26, false, 0, 0, null, null, $composer_10, 1597440, 0, 262056);
        $composer_10.endReplaceGroup_ek144q_k$();
      } else {
        $composer_10.startReplaceGroup_5hh8aj_k$(1283972080);
        $composer_10.endReplaceGroup_ek144q_k$();
      }
      sourceInformationMarkerEnd($composer_10);
      $composer_8.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(NotasInputField$lambda(label, value, onValueChange, placeholder_0, isPassword_0, passwordVisible_0, onTogglePasswordVisibility_0, singleLine_0, minHeight_0, cornerRadius_0, modifier_0, $changed, $changed1, $default));
    }
  }
  function NotasPrimaryButton(text, onClick, modifier, height_0, cornerRadius, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var height_1 = {_v: new Dp(height_0)};
    var cornerRadius_0 = {_v: new Dp(cornerRadius)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1363986677);
    sourceInformation($composer_0, 'C(NotasPrimaryButton)P(4,3,2,1:c#ui.unit.Dp,0:c#ui.unit.Dp)340@12641L6,341@12652L455:NotasCommonComponents.kt#sk2dic');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_i8bvic_k$(_Dp___get_value__impl__geb1vb(height_1._v.value_1)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_i8bvic_k$(_Dp___get_value__impl__geb1vb(cornerRadius_0._v.value_1)) ? 16384 : 8192);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 9363) === 9362), $dirty & 1)) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (!(($default & 8) === 0)) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(50);
        height_1._v = new Dp(tmp$ret$0);
      }
      if (!(($default & 16) === 0)) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$1 = _Dp___init__impl__ms3zkb(14);
        cornerRadius_0._v = new Dp(tmp$ret$1);
      }
      if (isTraceInProgress()) {
        traceEventStart(1363986677, $dirty, -1, 'com.notas.agenda.ui.components.NotasPrimaryButton (NotasCommonComponents.kt:339)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_1 = clickable(background(clip(height(fillMaxWidth(modifier_0._v), height_1._v.value_1), RoundedCornerShape(cornerRadius_0._v.value_1)), colors.get_accentButton_k5y1fw_k$()), VOID, VOID, VOID, VOID, onClick);
      var contentAlignment = Companion_getInstance_1().get_Center_3arb0i_k$();
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      if (!((4 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((4 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_2);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      BoxScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 1093425525, 'C350@12942L159:NotasCommonComponents.kt#sk2dic');
      var tmp_0 = colors.get_onAccentButton_kaa6fp_k$();
      var tmp_1 = get_sp(14);
      var tmp_2 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextOverflow___init__impl__obguoe(0);
      Text(text, null, tmp_0, null, tmp_1, null, tmp_2, null, tmp_3, null, null, tmp_4, tmp_5, false, 0, 0, null, null, $composer_5, 1597440 | 14 & $dirty, 0, 262058);
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(NotasPrimaryButton$lambda(text, onClick, modifier_0, height_1, cornerRadius_0, $changed, $default));
    }
  }
  function NotasSoftButton(text, onClick, modifier, height_0, cornerRadius, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var height_1 = {_v: new Dp(height_0)};
    var cornerRadius_0 = {_v: new Dp(cornerRadius)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1345750891);
    sourceInformation($composer_0, 'C(NotasSoftButton)P(4,3,2,1:c#ui.unit.Dp,0:c#ui.unit.Dp)367@13308L6,368@13319L457:NotasCommonComponents.kt#sk2dic');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_i8bvic_k$(_Dp___get_value__impl__geb1vb(height_1._v.value_1)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_i8bvic_k$(_Dp___get_value__impl__geb1vb(cornerRadius_0._v.value_1)) ? 16384 : 8192);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 9363) === 9362), $dirty & 1)) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (!(($default & 8) === 0)) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(44);
        height_1._v = new Dp(tmp$ret$0);
      }
      if (!(($default & 16) === 0)) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$1 = _Dp___init__impl__ms3zkb(14);
        cornerRadius_0._v = new Dp(tmp$ret$1);
      }
      if (isTraceInProgress()) {
        traceEventStart(1345750891, $dirty, -1, 'com.notas.agenda.ui.components.NotasSoftButton (NotasCommonComponents.kt:366)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_1 = clickable(background(clip(height(fillMaxWidth(modifier_0._v), height_1._v.value_1), RoundedCornerShape(cornerRadius_0._v.value_1)), colors.get_accentContainer_6iiayz_k$()), VOID, VOID, VOID, VOID, onClick);
      var contentAlignment = Companion_getInstance_1().get_Center_3arb0i_k$();
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      if (!((4 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((4 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_2);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      BoxScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -1300452396, 'C377@13612L158:NotasCommonComponents.kt#sk2dic');
      var tmp_0 = colors.get_accentContent_6vke99_k$();
      var tmp_1 = get_sp(13);
      var tmp_2 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextOverflow___init__impl__obguoe(0);
      Text(text, null, tmp_0, null, tmp_1, null, tmp_2, null, tmp_3, null, null, tmp_4, tmp_5, false, 0, 0, null, null, $composer_5, 1597440 | 14 & $dirty, 0, 262058);
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(NotasSoftButton$lambda(text, onClick, modifier_0, height_1, cornerRadius_0, $changed, $default));
    }
  }
  function NotasSwitch(checked, onCheckedChange, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1693760933);
    sourceInformation($composer_0, 'C(NotasSwitch)P(!1,2)392@13938L6,393@13967L86,396@14077L46,403@14315L29,398@14129L441:NotasCommonComponents.kt#sk2dic');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(checked) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onCheckedChange) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 256 : 128);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 147) === 146), $dirty & 1)) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (isTraceInProgress()) {
        traceEventStart(1693760933, $dirty, -1, 'com.notas.agenda.ui.components.NotasSwitch (NotasCommonComponents.kt:391)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      var tmp = checked ? colors.get_accentButton_k5y1fw_k$() : colors.get_border_pp3j8c_k$();
      var trackColor$delegate = animateColorAsState(tmp, null, null, null, $composer_0, 0, 14);
      var tmp_0;
      if (checked) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_0 = _Dp___init__impl__ms3zkb(21);
      } else {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_0 = _Dp___init__impl__ms3zkb(3);
      }
      var tmp_1 = tmp_0;
      var thumbOffset$delegate = animateDpAsState(tmp_1, null, null, null, $composer_0, 0, 14);
      var tmp_2 = modifier_0._v;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_3 = _Dp___init__impl__ms3zkb(42);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$3 = _Dp___init__impl__ms3zkb(24);
      var tmp_4 = size(tmp_2, tmp_3, tmp$ret$3);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$4 = _Dp___init__impl__ms3zkb(12);
      var tmp_5 = background(clip(tmp_4, RoundedCornerShape(tmp$ret$4)), NotasSwitch$lambda(trackColor$delegate));
      sourceInformationMarkerStart($composer_0, -88331806, 'CC(remember):NotasCommonComponents.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 112) === 32 | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = NotasSwitch$lambda_1(onCheckedChange, checked);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp_6 = value;
      } else {
        tmp_6 = it;
      }
      var tmp0_group = tmp_6;
      sourceInformationMarkerEnd($composer_0);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_1 = clickable(tmp_5, VOID, VOID, VOID, VOID, tmp0_group);
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_2);
      var tmp0_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp_7 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_7, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0_0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      BoxScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -1028389638, 'C405@14362L202:NotasCommonComponents.kt#sk2dic');
      var tmp_8 = Companion_getInstance_0();
      var tmp_9 = NotasSwitch$lambda_0(thumbOffset$delegate);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$15 = _Dp___init__impl__ms3zkb(3);
      var tmp_10 = offset(tmp_8, tmp_9, tmp$ret$15);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$16 = _Dp___init__impl__ms3zkb(18);
      Box(background(clip(size_0(tmp_10, tmp$ret$16), get_CircleShape()), Companion_getInstance_3().get_White_xpp3qf_k$()), $composer_5, 0);
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(NotasSwitch$lambda_2(checked, onCheckedChange, modifier_0, $changed, $default));
    }
  }
  function NotasBottomNavigation(activeTab, onSelectTab, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(948825294);
    sourceInformation($composer_0, 'C(NotasBottomNavigation)P(!1,2)421@14742L6,422@14753L1257:NotasCommonComponents.kt#sk2dic');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(activeTab.get_ordinal_ip24qg_k$()) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onSelectTab) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 256 : 128);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 147) === 146), $dirty & 1)) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (isTraceInProgress()) {
        traceEventStart(948825294, $dirty, -1, 'com.notas.agenda.ui.components.NotasBottomNavigation (NotasCommonComponents.kt:420)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = background(fillMaxWidth(modifier_0._v), colors.get_surface_ya87t7_k$());
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_2);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -686739371, 'C427@14874L151,433@15034L970:NotasCommonComponents.kt#sk2dic');
      var tmp_0 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$6 = _Dp___init__impl__ms3zkb(1);
      Box(background(height(tmp_0, tmp$ret$6), colors.get_border_pp3j8c_k$()), $composer_5, 0);
      var tmp_1 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_2 = _Dp___init__impl__ms3zkb(9);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$8 = _Dp___init__impl__ms3zkb(10);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_3 = padding_0(tmp_1, VOID, tmp_2, VOID, tmp$ret$8);
      var horizontalArrangement = Arrangement_getInstance().get_SpaceEvenly_3s2yx0_k$();
      var verticalAlignment = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_6 = $composer_5;
      if (!((0 & 1) === 0))
        modifier_3 = Companion_getInstance_0();
      if (!((0 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((0 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_0 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_6, 14 & 438 >> 3 | 112 & 438 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_7 = $composer_6;
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_4);
      var tmp0_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      var tmp_3 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_3, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_0);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_9 = $composer_8;
      RowScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, -1578788121, 'C444@15478L32,440@15302L223,450@15708L30,446@15538L215,456@15945L34,452@15766L228:NotasCommonComponents.kt#sk2dic');
      var tmp_4 = NotasIcons_getInstance().get_Calendar_xomb4p_k$();
      var tmp_5 = activeTab.equals(NotasTab_AGENDA_getInstance());
      sourceInformationMarkerStart($composer_10, 1196002312, 'CC(remember):NotasCommonComponents.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 112) === 32;
      // Inline function 'kotlin.let' call
      var it = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = NotasBottomNavigation$lambda(onSelectTab);
        $composer_10.updateRememberedValue_l1wh71_k$(value);
        tmp_6 = value;
      } else {
        tmp_6 = it;
      }
      var tmp0_group = tmp_6;
      sourceInformationMarkerEnd($composer_10);
      BottomNavItem('Agenda', tmp_4, tmp_5, tmp0_group, $composer_10, 6);
      var tmp_7 = NotasIcons_getInstance().get_Chat_wnzn41_k$();
      var tmp_8 = activeTab.equals(NotasTab_TEAM_getInstance());
      sourceInformationMarkerStart($composer_10, 1196009670, 'CC(remember):NotasCommonComponents.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($dirty & 112) === 32;
      // Inline function 'kotlin.let' call
      var it_0 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = NotasBottomNavigation$lambda_0(onSelectTab);
        $composer_10.updateRememberedValue_l1wh71_k$(value_0);
        tmp_9 = value_0;
      } else {
        tmp_9 = it_0;
      }
      var tmp1_group = tmp_9;
      sourceInformationMarkerEnd($composer_10);
      BottomNavItem('Equipo', tmp_7, tmp_8, tmp1_group, $composer_10, 6);
      var tmp_10 = NotasIcons_getInstance().get_Settings_70b2es_k$();
      var tmp_11 = activeTab.equals(NotasTab_SETTINGS_getInstance());
      sourceInformationMarkerStart($composer_10, 1196017258, 'CC(remember):NotasCommonComponents.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = ($dirty & 112) === 32;
      // Inline function 'kotlin.let' call
      var it_1 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_12;
      if (invalid_1 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = NotasBottomNavigation$lambda_1(onSelectTab);
        $composer_10.updateRememberedValue_l1wh71_k$(value_1);
        tmp_12 = value_1;
      } else {
        tmp_12 = it_1;
      }
      var tmp2_group = tmp_12;
      sourceInformationMarkerEnd($composer_10);
      BottomNavItem('Ajustes', tmp_10, tmp_11, tmp2_group, $composer_10, 6);
      sourceInformationMarkerEnd($composer_10);
      $composer_8.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(NotasBottomNavigation$lambda_2(activeTab, onSelectTab, modifier_0, $changed, $default));
    }
  }
  function BottomNavItem(label, icon, selected, onClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-924332304);
    sourceInformation($composer_0, 'C(BottomNavItem)P(1!1,3)469@16175L6,471@16262L991:NotasCommonComponents.kt#sk2dic');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(label) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(icon) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(selected) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 2048 : 1024);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 1171) === 1170), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-924332304, $dirty, -1, 'com.notas.agenda.ui.components.BottomNavItem (NotasCommonComponents.kt:468)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      var tint = selected ? colors.get_accentContent_6vke99_k$() : colors.get_textSecondary_kl22jf_k$();
      var tmp = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(14);
      var tmp_0 = clickable(clip(tmp, RoundedCornerShape(tmp$ret$0)), VOID, VOID, VOID, VOID, onClick);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_1 = _Dp___init__impl__ms3zkb(12);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(2);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = padding(tmp_0, tmp_1, tmp$ret$2);
      var verticalArrangement = null;
      var horizontalAlignment = Companion_getInstance_1().get_CenterHorizontally_97ab0v_k$();
      var $composer_1 = $composer_0;
      if (!((2 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((2 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((2 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 384 >> 3 | 112 & 384 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp_2 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_2, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 1874578130, 'C478@16520L489,492@17018L40,493@17067L180:NotasCommonComponents.kt#sk2dic');
      var tmp_3 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_4 = _Dp___init__impl__ms3zkb(62);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$10 = _Dp___init__impl__ms3zkb(32);
      var tmp_5 = size(tmp_3, tmp_4, tmp$ret$10);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$11 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_1 = background(clip(tmp_5, RoundedCornerShape(tmp$ret$11)), selected ? colors.get_accentContainer_6iiayz_k$() : Companion_getInstance_3().get_Transparent_if5ln4_k$());
      var contentAlignment = Companion_getInstance_1().get_Center_3arb0i_k$();
      var propagateMinConstraints = false;
      var $composer_6 = $composer_5;
      if (!((4 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((4 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_0 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      var tmp0_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      var tmp_6 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_6, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_0);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_9 = $composer_8;
      BoxScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, 1650395454, 'C485@16822L177:NotasCommonComponents.kt#sk2dic');
      var tmp_7 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$18 = _Dp___init__impl__ms3zkb(22);
      var tmp0_modifier = size_0(tmp_7, tmp$ret$18);
      Icon(icon, label, tmp0_modifier, tint, $composer_10, 384 | 14 & $dirty >> 3 | 112 & $dirty << 3, 0);
      sourceInformationMarkerEnd($composer_10);
      $composer_8.endNode_3m0yfn_k$();
      var tmp_8 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$19 = _Dp___init__impl__ms3zkb(4);
      Spacer(height(tmp_8, tmp$ret$19), $composer_5, 6);
      var tmp_9 = get_sp(10);
      var tmp_10 = selected ? Companion_getInstance_4().get_SemiBold_aid1c4_k$() : Companion_getInstance_4().get_Medium_1fiba6_k$();
      var tmp_11 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_12 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_13 = _TextOverflow___init__impl__obguoe(0);
      Text(label, null, tint, null, tmp_9, null, tmp_10, null, tmp_11, null, null, tmp_12, tmp_13, false, 0, 0, null, null, $composer_5, 24576 | 14 & $dirty, 0, 262058);
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(BottomNavItem$lambda(label, icon, selected, onClick, $changed));
    }
  }
  function NotasModalFooter(caption, modifier, $composer, $changed, $default) {
    var caption_0 = {_v: caption};
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-2076283563);
    sourceInformation($composer_0, 'C(NotasModalFooter)507@17412L6,508@17423L600:NotasCommonComponents.kt#sk2dic');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(caption_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        caption_0._v = 'NOTAS \xB7 TU TIEMPO, CONECTADO';
      }
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (isTraceInProgress()) {
        traceEventStart(-2076283563, $dirty, -1, 'com.notas.agenda.ui.components.NotasModalFooter (NotasCommonComponents.kt:506)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = background(fillMaxWidth(modifier_0._v), colors.get_surface_ya87t7_k$());
      var verticalArrangement = null;
      var horizontalAlignment = Companion_getInstance_1().get_CenterHorizontally_97ab0v_k$();
      var $composer_1 = $composer_0;
      if (!((2 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((2 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((2 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 384 >> 3 | 112 & 384 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_2);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -1794793017, 'C514@17604L151,520@17764L253:NotasCommonComponents.kt#sk2dic');
      var tmp_0 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$6 = _Dp___init__impl__ms3zkb(1);
      Box(background(height(tmp_0, tmp$ret$6), colors.get_border_pp3j8c_k$()), $composer_5, 0);
      var tmp0_color = colors.get_textSecondary_kl22jf_k$();
      var tmp1_fontSize = get_sp(9);
      var tmp2_fontWeight = Companion_getInstance_4().get_Medium_1fiba6_k$();
      var tmp3_letterSpacing = get_sp_0(0.8);
      var tmp_1 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$7 = _Dp___init__impl__ms3zkb(18);
      var tmp4_modifier = padding(tmp_1, VOID, tmp$ret$7);
      var tmp_2 = caption_0._v;
      var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_4 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp_2, tmp4_modifier, tmp0_color, null, tmp1_fontSize, null, tmp2_fontWeight, null, tmp3_letterSpacing, null, null, tmp_3, tmp_4, false, 0, 0, null, null, $composer_5, 102260784 | 14 & $dirty, 0, 261800);
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(NotasModalFooter$lambda(caption_0, modifier_0, $changed, $default));
    }
  }
  function NotasFeedbackBanner(message, onDismiss, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(2008815735);
    sourceInformation($composer_0, 'C(NotasFeedbackBanner)537@18177L6,538@18188L785:NotasCommonComponents.kt#sk2dic');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(message) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onDismiss) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(2008815735, $dirty, -1, 'com.notas.agenda.ui.components.NotasFeedbackBanner (NotasCommonComponents.kt:535)');
      }
      if (message == null) {
        if (isTraceInProgress()) {
          traceEventEnd();
        }
        var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.updateScope_t8jcf_k$(NotasFeedbackBanner$lambda(message, onDismiss, $changed));
        }
        return Unit_getInstance();
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      var tmp = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_0 = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(6);
      var tmp_1 = padding(tmp, tmp_0, tmp$ret$1);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(12);
      var tmp_2 = clickable(background(clip(tmp_1, RoundedCornerShape(tmp$ret$2)), colors.get_successContainer_dqfg6m_k$()), VOID, VOID, VOID, VOID, onDismiss);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_3 = _Dp___init__impl__ms3zkb(14);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$4 = _Dp___init__impl__ms3zkb(10);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier = padding(tmp_2, tmp_3, tmp$ret$4);
      var horizontalArrangement = Arrangement_getInstance().get_SpaceBetween_5p3wqd_k$();
      var verticalAlignment = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_1 = $composer_0;
      if (!((0 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((0 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((0 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp_4 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_4, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      RowScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 1619225476, 'C549@18635L168,555@18812L155:NotasCommonComponents.kt#sk2dic');
      var tmp_5 = '\u2713  ' + message;
      var tmp_6 = colors.get_successContent_tyisdi_k$();
      var tmp_7 = get_sp(12);
      var tmp_8 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_9 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_10 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_11 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp_5, null, tmp_6, null, tmp_7, null, tmp_8, null, tmp_9, null, null, tmp_10, tmp_11, false, 0, 0, null, null, $composer_5, 1597440, 0, 262058);
      var tmp_12 = colors.get_successContent_tyisdi_k$();
      var tmp_13 = get_sp(11);
      var tmp_14 = Companion_getInstance_4().get_Bold_wnz5ke_k$();
      var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_16 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_17 = _TextOverflow___init__impl__obguoe(0);
      Text('OK', null, tmp_12, null, tmp_13, null, tmp_14, null, tmp_15, null, null, tmp_16, tmp_17, false, 0, 0, null, null, $composer_5, 1597446, 0, 262058);
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(NotasFeedbackBanner$lambda_0(message, onDismiss, $changed));
    }
  }
  function NotasScreenExplorerBar(currentScreen, onSelectScreen, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(142122710);
    sourceInformation($composer_0, 'C(NotasScreenExplorerBar)P(!1,2)574@19333L6,578@19435L21,575@19344L1311:NotasCommonComponents.kt#sk2dic');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_kpusro_k$(currentScreen.get_ordinal_ip24qg_k$()) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onSelectScreen) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 256 : 128);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 147) === 146), $dirty & 1)) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (isTraceInProgress()) {
        traceEventStart(142122710, $dirty, -1, 'com.notas.agenda.ui.components.NotasScreenExplorerBar (NotasCommonComponents.kt:573)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      var tmp = fillMaxWidth(modifier_0._v);
      var tmp_0 = horizontalScroll(tmp, rememberScrollState(0, $composer_0, 0, 1));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_1 = _Dp___init__impl__ms3zkb(12);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(8);
      var tmp0 = padding(tmp_0, tmp_1, tmp$ret$1);
      var tmp_2 = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(6);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_1 = tmp0;
      var horizontalArrangement = tmp_2.spacedBy_wt7oji_k$(tmp$ret$2);
      var verticalAlignment = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_1 = $composer_0;
      if (!((0 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((0 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((0 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_2);
      var tmp0_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp_3 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_3, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0_0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      RowScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -405520031, 'C:NotasCommonComponents.kt#sk2dic');
      $composer_5.startReplaceGroup_5hh8aj_k$(1510939982);
      sourceInformation($composer_5, '*594@20198L26,585@19752L887');
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = get_entries().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        var selected = element.equals(currentScreen);
        var tmp_4 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$11 = _Dp___init__impl__ms3zkb(10);
        var tmp_5 = background(clip(tmp_4, RoundedCornerShape(tmp$ret$11)), selected ? colors.get_accentButton_k5y1fw_k$() : colors.get_surface_ya87t7_k$());
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp_6 = _Dp___init__impl__ms3zkb(1);
        var tmp_7 = selected ? colors.get_accentButton_k5y1fw_k$() : colors.get_border_pp3j8c_k$();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$13 = _Dp___init__impl__ms3zkb(10);
        var tmp_8 = border(tmp_5, tmp_6, tmp_7, RoundedCornerShape(tmp$ret$13));
        sourceInformationMarkerStart($composer_5, 503525422, 'CC(remember):NotasCommonComponents.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!(($dirty & 112) === 32 | $composer_0.changed_kpusro_k$(element.get_ordinal_ip24qg_k$()));
        // Inline function 'kotlin.let' call
        var it = $composer_5.rememberedValue_4dg93v_k$();
        var tmp_9;
        if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value = NotasScreenExplorerBar$lambda(onSelectScreen, element);
          $composer_5.updateRememberedValue_l1wh71_k$(value);
          tmp_9 = value;
        } else {
          tmp_9 = it;
        }
        var tmp0_group = tmp_9;
        sourceInformationMarkerEnd($composer_5);
        var tmp_10 = clickable(tmp_8, VOID, VOID, VOID, VOID, tmp0_group);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp_11 = _Dp___init__impl__ms3zkb(10);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$19 = _Dp___init__impl__ms3zkb(6);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier_3 = padding(tmp_10, tmp_11, tmp$ret$19);
        var contentAlignment = null;
        var propagateMinConstraints = false;
        var $composer_6 = $composer_5;
        if (!((6 & 1) === 0))
          modifier_3 = Companion_getInstance_0();
        if (!((6 & 2) === 0))
          contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
        if (!((6 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy_0 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_4 = modifier_3;
        var $composer_7 = $composer_6;
        if (!((0 & 2) === 0))
          modifier_4 = Companion_getInstance_0();
        var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
        var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized_0 = materialize($composer_7, modifier_4);
        var tmp0_1 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_8 = $composer_7;
        var tmp_12 = $composer_8.get_applier_bupu8u_k$();
        if (!isInterface(tmp_12, Applier)) {
          invalidApplier();
        }
        $composer_8.startReusableNode_jjgeyp_k$();
        if ($composer_8.get_inserting_25mlsw_k$()) {
          $composer_8.createNode_ahrd54_k$(tmp0_1);
        } else {
          $composer_8.useNode_io5s9l_k$();
        }
        var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        var $composer_9 = $composer_8;
        BoxScopeInstance_getInstance();
        var $composer_10 = $composer_9;
        sourceInformationMarkerStart($composer_10, 389610748, 'C597@20324L301:NotasCommonComponents.kt#sk2dic');
        var tmp_13 = element.get_code_wok7xy_k$() + ' \xB7 ' + element.get_shortTitle_5jurwl_k$();
        var tmp_14 = selected ? Companion_getInstance_3().get_White_xpp3qf_k$() : colors.get_textSecondary_kl22jf_k$();
        var tmp_15 = get_sp(11);
        var tmp_16 = selected ? Companion_getInstance_4().get_SemiBold_aid1c4_k$() : Companion_getInstance_4().get_Medium_1fiba6_k$();
        var tmp_17 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_18 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_19 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_13, null, tmp_14, null, tmp_15, null, tmp_16, null, tmp_17, null, null, tmp_18, tmp_19, false, 0, 0, null, null, $composer_10, 24576, 0, 262058);
        sourceInformationMarkerEnd($composer_10);
        $composer_8.endNode_3m0yfn_k$();
      }
      $composer_5.endReplaceGroup_ek144q_k$();
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(NotasScreenExplorerBar$lambda_0(currentScreen, onSelectScreen, modifier_0, $changed, $default));
    }
  }
  function NotasTopStatusBar$lambda($modifier, $$changed, $$default) {
    return function ($composer, $force) {
      NotasTopStatusBar($modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function NotasHeader$lambda($eyebrow, $title, $subtitle, $actionIcon, $actionTint, $onActionClick, $backText, $onBackClick, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      var tmp = $actionIcon._v;
      var tmp_0 = $actionTint._v;
      NotasHeader($eyebrow, $title, $subtitle, tmp, tmp_0 == null ? null : tmp_0.value_1, $onActionClick._v, $backText._v, $onBackClick._v, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function NotasSegmentedControl$lambda($bgColor$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('bgColor', KProperty0, false);
    return $bgColor$delegate.get_value_j01efc_k$().value_1;
  }
  function NotasSegmentedControl$lambda_0($textColor$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('textColor', KProperty0, false);
    return $textColor$delegate.get_value_j01efc_k$().value_1;
  }
  function NotasSegmentedControl$lambda_1($onSelect, $index) {
    return function () {
      $onSelect($index);
      return Unit_getInstance();
    };
  }
  function NotasSegmentedControl$lambda_2($options, $selectedIndex, $onSelect, $height, $cornerRadius, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      NotasSegmentedControl($options, $selectedIndex, $onSelect, $height._v.value_1, $cornerRadius._v.value_1, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function NotasInputField$lambda($label, $value, $onValueChange, $placeholder, $isPassword, $passwordVisible, $onTogglePasswordVisibility, $singleLine, $minHeight, $cornerRadius, $modifier, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      NotasInputField($label, $value, $onValueChange, $placeholder._v, $isPassword._v, $passwordVisible._v, $onTogglePasswordVisibility._v, $singleLine._v, $minHeight._v.value_1, $cornerRadius._v.value_1, $modifier._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  function NotasPrimaryButton$lambda($text, $onClick, $modifier, $height, $cornerRadius, $$changed, $$default) {
    return function ($composer, $force) {
      NotasPrimaryButton($text, $onClick, $modifier._v, $height._v.value_1, $cornerRadius._v.value_1, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function NotasSoftButton$lambda($text, $onClick, $modifier, $height, $cornerRadius, $$changed, $$default) {
    return function ($composer, $force) {
      NotasSoftButton($text, $onClick, $modifier._v, $height._v.value_1, $cornerRadius._v.value_1, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function NotasSwitch$lambda($trackColor$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('trackColor', KProperty0, false);
    return $trackColor$delegate.get_value_j01efc_k$().value_1;
  }
  function NotasSwitch$lambda_0($thumbOffset$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('thumbOffset', KProperty0, false);
    return $thumbOffset$delegate.get_value_j01efc_k$().value_1;
  }
  function NotasSwitch$lambda_1($onCheckedChange, $checked) {
    return function () {
      $onCheckedChange(!$checked);
      return Unit_getInstance();
    };
  }
  function NotasSwitch$lambda_2($checked, $onCheckedChange, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      NotasSwitch($checked, $onCheckedChange, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function NotasBottomNavigation$lambda($onSelectTab) {
    return function () {
      $onSelectTab(NotasTab_AGENDA_getInstance());
      return Unit_getInstance();
    };
  }
  function NotasBottomNavigation$lambda_0($onSelectTab) {
    return function () {
      $onSelectTab(NotasTab_TEAM_getInstance());
      return Unit_getInstance();
    };
  }
  function NotasBottomNavigation$lambda_1($onSelectTab) {
    return function () {
      $onSelectTab(NotasTab_SETTINGS_getInstance());
      return Unit_getInstance();
    };
  }
  function NotasBottomNavigation$lambda_2($activeTab, $onSelectTab, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      NotasBottomNavigation($activeTab, $onSelectTab, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function BottomNavItem$lambda($label, $icon, $selected, $onClick, $$changed) {
    return function ($composer, $force) {
      BottomNavItem($label, $icon, $selected, $onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NotasModalFooter$lambda($caption, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      NotasModalFooter($caption._v, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function NotasFeedbackBanner$lambda($message, $onDismiss, $$changed) {
    return function ($composer, $force) {
      NotasFeedbackBanner($message, $onDismiss, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NotasFeedbackBanner$lambda_0($message, $onDismiss, $$changed) {
    return function ($composer, $force) {
      NotasFeedbackBanner($message, $onDismiss, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NotasScreenExplorerBar$lambda($onSelectScreen, $screen) {
    return function () {
      $onSelectScreen($screen);
      return Unit_getInstance();
    };
  }
  function NotasScreenExplorerBar$lambda_0($currentScreen, $onSelectScreen, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      NotasScreenExplorerBar($currentScreen, $onSelectScreen, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var com_notas_agenda_ui_icons_NotasIcons$stable;
  function NotasRibbonLogo(modifier, primaryColor, ribbonColor, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var primaryColor_0 = {_v: new Color_0(primaryColor)};
    var ribbonColor_0 = {_v: new Color_0(ribbonColor)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-800498900);
    sourceInformation($composer_0, 'C(NotasRibbonLogo)P(!1,1:c#ui.graphics.Color,2:c#ui.graphics.Color)25@910L1715,25@882L1743:NotasIcons.kt#pse9h0');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_j54hty_k$(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(primaryColor_0._v.value_1))) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_j54hty_k$(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(ribbonColor_0._v.value_1))) ? 256 : 128);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 147) === 146), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (!(($default & 2) === 0)) {
        primaryColor_0._v = new Color_0(Color(new Long(-10136359, 0)));
      }
      if (!(($default & 4) === 0)) {
        ribbonColor_0._v = new Color_0(Color(new Long(-9249595, 0)));
      }
      if (isTraceInProgress()) {
        traceEventStart(-800498900, $dirty, -1, 'com.notas.agenda.ui.icons.NotasRibbonLogo (NotasIcons.kt:24)');
      }
      var tmp = modifier_0._v;
      sourceInformationMarkerStart($composer_0, -480289409, 'CC(remember):NotasIcons.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 112) === 32 | ($dirty & 896) === 256);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = NotasRibbonLogo$lambda(primaryColor_0, ribbonColor_0);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp0_group = tmp_0;
      sourceInformationMarkerEnd($composer_0);
      Canvas(tmp, tmp0_group, $composer_0, 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(NotasRibbonLogo$lambda_0(modifier_0, primaryColor_0, ribbonColor_0, $changed, $default));
    }
  }
  function NotasIcons$Bell$delegate$lambda() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(22);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(22);
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder('Bell', tmp, tmp$ret$1, 22.0, 22.0);
    var tmp5 = new SolidColor(Companion_getInstance_3().get_Black_t4k9fh_k$());
    var tmp10 = Companion_getInstance_7().get_Round_hjra1h_k$();
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var strokeLineJoin = Companion_getInstance_8().get_Round_o8jjqp_k$();
    var pathFillType = get_DefaultFillType();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var $this$with = new PathBuilder();
    $this$with.moveTo_n8tdjo_k$(9.16667, 18.3333);
    $this$with.horizontalLineTo_w9x139_k$(12.8333);
    $this$with.moveTo_n8tdjo_k$(4.58333, 15.5833);
    $this$with.horizontalLineTo_w9x139_k$(17.4167);
    $this$with.lineTo_985bqp_k$(15.5833, 12.8333);
    $this$with.verticalLineTo_1gpzkd_k$(8.25);
    $this$with.curveTo_y0llje_k$(15.5833, 7.03442, 15.1004, 5.86864, 14.2409, 5.00909);
    $this$with.curveTo_y0llje_k$(13.3814, 4.14955, 12.2156, 3.66667, 11.0, 3.66667);
    $this$with.curveTo_y0llje_k$(9.78442, 3.66667, 8.61864, 4.14955, 7.75909, 5.00909);
    $this$with.curveTo_y0llje_k$(6.89955, 5.86864, 6.41667, 7.03442, 6.41667, 8.25);
    $this$with.verticalLineTo_1gpzkd_k$(12.8333);
    $this$with.lineTo_985bqp_k$(4.58333, 15.5833);
    $this$with.close_1keygo_k$();
    var tmp$ret$5 = $this$with.get_nodes_ivvt6w_k$();
    this_0.addPath$default_98yxvz_k$(tmp$ret$5, pathFillType, '', null, 1.0, tmp5, 1.0, 1.7, tmp10, strokeLineJoin, 4.0);
    return this_0.build_1k0s4u_k$();
  }
  function NotasIcons$_get_Bell_$ref_b7a60q() {
    return constructCallableReference(function (p0) {
      return p0.get_Bell_wnyy5o_k$();
    }, 1, 0, 'com.notas.agenda.ui.icons/NotasIcons.Bell.<get-Bell>|<get-Bell>(){}[0]');
  }
  function NotasIcons$Calendar$delegate$lambda() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(22);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(22);
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder('Calendar', tmp, tmp$ret$1, 22.0, 22.0);
    var tmp5 = new SolidColor(Companion_getInstance_3().get_Black_t4k9fh_k$());
    var tmp10 = Companion_getInstance_7().get_Round_hjra1h_k$();
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var strokeLineJoin = Companion_getInstance_8().get_Round_o8jjqp_k$();
    var pathFillType = get_DefaultFillType();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var $this$with = new PathBuilder();
    $this$with.moveTo_n8tdjo_k$(5.5, 4.58333);
    $this$with.horizontalLineTo_w9x139_k$(16.5);
    $this$with.curveTo_y0llje_k$(18.0188, 4.58333, 19.25, 5.81455, 19.25, 7.33333);
    $this$with.verticalLineTo_1gpzkd_k$(16.5);
    $this$with.curveTo_y0llje_k$(19.25, 18.0188, 18.0188, 19.25, 16.5, 19.25);
    $this$with.horizontalLineTo_w9x139_k$(5.5);
    $this$with.curveTo_y0llje_k$(3.98122, 19.25, 2.75, 18.0188, 2.75, 16.5);
    $this$with.verticalLineTo_1gpzkd_k$(7.33333);
    $this$with.curveTo_y0llje_k$(2.75, 5.81455, 3.98122, 4.58333, 5.5, 4.58333);
    $this$with.close_1keygo_k$();
    var tmp$ret$5 = $this$with.get_nodes_ivvt6w_k$();
    this_0.addPath$default_98yxvz_k$(tmp$ret$5, pathFillType, '', null, 1.0, tmp5, 1.0, 1.7, tmp10, strokeLineJoin, 4.0);
    var tmp5_0 = new SolidColor(Companion_getInstance_3().get_Black_t4k9fh_k$());
    var tmp10_0 = Companion_getInstance_7().get_Round_hjra1h_k$();
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var strokeLineJoin_0 = Companion_getInstance_8().get_Round_o8jjqp_k$();
    var pathFillType_0 = get_DefaultFillType();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var $this$with_0 = new PathBuilder();
    $this$with_0.moveTo_n8tdjo_k$(6.41667, 2.75);
    $this$with_0.verticalLineTo_1gpzkd_k$(6.41667);
    $this$with_0.moveTo_n8tdjo_k$(15.5833, 2.75);
    $this$with_0.verticalLineTo_1gpzkd_k$(6.41667);
    $this$with_0.moveTo_n8tdjo_k$(2.75, 10.0833);
    $this$with_0.horizontalLineTo_w9x139_k$(19.25);
    $this$with_0.moveTo_n8tdjo_k$(7.33333, 13.75);
    $this$with_0.horizontalLineTo_w9x139_k$(9.16667);
    $this$with_0.moveTo_n8tdjo_k$(12.8333, 13.75);
    $this$with_0.horizontalLineTo_w9x139_k$(14.6667);
    var tmp$ret$10 = $this$with_0.get_nodes_ivvt6w_k$();
    this_0.addPath$default_98yxvz_k$(tmp$ret$10, pathFillType_0, '', null, 1.0, tmp5_0, 1.0, 1.7, tmp10_0, strokeLineJoin_0, 4.0);
    return this_0.build_1k0s4u_k$();
  }
  function NotasIcons$_get_Calendar_$ref_6yjql1() {
    return constructCallableReference(function (p0) {
      return p0.get_Calendar_xomb4p_k$();
    }, 1, 0, 'com.notas.agenda.ui.icons/NotasIcons.Calendar.<get-Calendar>|<get-Calendar>(){}[0]');
  }
  function NotasIcons$Chat$delegate$lambda() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(22);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(22);
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder('Chat', tmp, tmp$ret$1, 22.0, 22.0);
    var tmp5 = new SolidColor(Companion_getInstance_3().get_Black_t4k9fh_k$());
    var tmp10 = Companion_getInstance_7().get_Round_hjra1h_k$();
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var strokeLineJoin = Companion_getInstance_8().get_Round_o8jjqp_k$();
    var pathFillType = get_DefaultFillType();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var $this$with = new PathBuilder();
    $this$with.moveTo_n8tdjo_k$(19.25, 10.0833);
    $this$with.curveTo_y0llje_k$(19.25, 12.0283, 18.4774, 13.8935, 17.1021, 15.2688);
    $this$with.curveTo_y0llje_k$(15.7269, 16.644, 13.8616, 17.4167, 11.9167, 17.4167);
    $this$with.horizontalLineTo_w9x139_k$(6.41667);
    $this$with.lineTo_985bqp_k$(2.75, 20.1667);
    $this$with.verticalLineTo_1gpzkd_k$(6.41667);
    $this$with.curveTo_y0llje_k$(2.75, 5.44421, 3.13631, 4.51157, 3.82394, 3.82394);
    $this$with.curveTo_y0llje_k$(4.51158, 3.13631, 5.44421, 2.75, 6.41667, 2.75);
    $this$with.horizontalLineTo_w9x139_k$(11.9167);
    $this$with.curveTo_y0llje_k$(13.8616, 2.75, 15.7269, 3.52262, 17.1021, 4.89788);
    $this$with.curveTo_y0llje_k$(18.4774, 6.27315, 19.25, 8.13841, 19.25, 10.0833);
    $this$with.close_1keygo_k$();
    var tmp$ret$5 = $this$with.get_nodes_ivvt6w_k$();
    this_0.addPath$default_98yxvz_k$(tmp$ret$5, pathFillType, '', null, 1.0, tmp5, 1.0, 1.7, tmp10, strokeLineJoin, 4.0);
    var tmp5_0 = new SolidColor(Companion_getInstance_3().get_Black_t4k9fh_k$());
    var tmp10_0 = Companion_getInstance_7().get_Round_hjra1h_k$();
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var strokeLineJoin_0 = Companion_getInstance_8().get_Round_o8jjqp_k$();
    var pathFillType_0 = get_DefaultFillType();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var $this$with_0 = new PathBuilder();
    $this$with_0.moveTo_n8tdjo_k$(6.41667, 7.33333);
    $this$with_0.horizontalLineTo_w9x139_k$(14.6667);
    $this$with_0.moveTo_n8tdjo_k$(6.41667, 11.0);
    $this$with_0.horizontalLineTo_w9x139_k$(11.9167);
    var tmp$ret$10 = $this$with_0.get_nodes_ivvt6w_k$();
    this_0.addPath$default_98yxvz_k$(tmp$ret$10, pathFillType_0, '', null, 1.0, tmp5_0, 1.0, 1.7, tmp10_0, strokeLineJoin_0, 4.0);
    return this_0.build_1k0s4u_k$();
  }
  function NotasIcons$_get_Chat_$ref_trp70x() {
    return constructCallableReference(function (p0) {
      return p0.get_Chat_wnzn41_k$();
    }, 1, 0, 'com.notas.agenda.ui.icons/NotasIcons.Chat.<get-Chat>|<get-Chat>(){}[0]');
  }
  function NotasIcons$Settings$delegate$lambda() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(22);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(22);
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder('Settings', tmp, tmp$ret$1, 22.0, 22.0);
    var tmp5 = new SolidColor(Companion_getInstance_3().get_Black_t4k9fh_k$());
    var tmp10 = Companion_getInstance_7().get_Round_hjra1h_k$();
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var strokeLineJoin = Companion_getInstance_8().get_Round_o8jjqp_k$();
    var pathFillType = get_DefaultFillType();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var $this$with = new PathBuilder();
    $this$with.moveTo_n8tdjo_k$(8.25, 2.75);
    $this$with.horizontalLineTo_w9x139_k$(13.75);
    $this$with.lineTo_985bqp_k$(14.6667, 5.5);
    $this$with.lineTo_985bqp_k$(17.4167, 6.41667);
    $this$with.lineTo_985bqp_k$(19.25, 11.0);
    $this$with.lineTo_985bqp_k$(17.4167, 15.5833);
    $this$with.lineTo_985bqp_k$(14.6667, 16.5);
    $this$with.lineTo_985bqp_k$(13.75, 19.25);
    $this$with.horizontalLineTo_w9x139_k$(8.25);
    $this$with.lineTo_985bqp_k$(7.33333, 16.5);
    $this$with.lineTo_985bqp_k$(4.58333, 15.5833);
    $this$with.lineTo_985bqp_k$(2.75, 11.0);
    $this$with.lineTo_985bqp_k$(4.58333, 6.41667);
    $this$with.lineTo_985bqp_k$(7.33333, 5.5);
    $this$with.lineTo_985bqp_k$(8.25, 2.75);
    $this$with.close_1keygo_k$();
    var tmp$ret$5 = $this$with.get_nodes_ivvt6w_k$();
    this_0.addPath$default_98yxvz_k$(tmp$ret$5, pathFillType, '', null, 1.0, tmp5, 1.0, 1.7, tmp10, strokeLineJoin, 4.0);
    var tmp5_0 = new SolidColor(Companion_getInstance_3().get_Black_t4k9fh_k$());
    var tmp10_0 = Companion_getInstance_7().get_Round_hjra1h_k$();
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var strokeLineJoin_0 = Companion_getInstance_8().get_Round_o8jjqp_k$();
    var pathFillType_0 = get_DefaultFillType();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var $this$with_0 = new PathBuilder();
    $this$with_0.moveTo_n8tdjo_k$(13.75, 11.0);
    $this$with_0.curveTo_y0llje_k$(13.75, 12.5188, 12.5188, 13.75, 11.0, 13.75);
    $this$with_0.curveTo_y0llje_k$(9.48122, 13.75, 8.25, 12.5188, 8.25, 11.0);
    $this$with_0.curveTo_y0llje_k$(8.25, 9.48122, 9.48122, 8.25, 11.0, 8.25);
    $this$with_0.curveTo_y0llje_k$(12.5188, 8.25, 13.75, 9.48122, 13.75, 11.0);
    $this$with_0.close_1keygo_k$();
    var tmp$ret$10 = $this$with_0.get_nodes_ivvt6w_k$();
    this_0.addPath$default_98yxvz_k$(tmp$ret$10, pathFillType_0, '', null, 1.0, tmp5_0, 1.0, 1.7, tmp10_0, strokeLineJoin_0, 4.0);
    return this_0.build_1k0s4u_k$();
  }
  function NotasIcons$_get_Settings_$ref_lm21nq() {
    return constructCallableReference(function (p0) {
      return p0.get_Settings_70b2es_k$();
    }, 1, 0, 'com.notas.agenda.ui.icons/NotasIcons.Settings.<get-Settings>|<get-Settings>(){}[0]');
  }
  function NotasIcons$Close$delegate$lambda() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(22);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(22);
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder('Close', tmp, tmp$ret$1, 22.0, 22.0);
    var tmp5 = new SolidColor(Companion_getInstance_3().get_Black_t4k9fh_k$());
    var tmp10 = Companion_getInstance_7().get_Round_hjra1h_k$();
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var strokeLineJoin = Companion_getInstance_8().get_Round_o8jjqp_k$();
    var pathFillType = get_DefaultFillType();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var $this$with = new PathBuilder();
    $this$with.moveTo_n8tdjo_k$(5.5, 5.5);
    $this$with.lineTo_985bqp_k$(16.5, 16.5);
    $this$with.moveTo_n8tdjo_k$(16.5, 5.5);
    $this$with.lineTo_985bqp_k$(5.5, 16.5);
    var tmp$ret$5 = $this$with.get_nodes_ivvt6w_k$();
    this_0.addPath$default_98yxvz_k$(tmp$ret$5, pathFillType, '', null, 1.0, tmp5, 1.0, 1.7, tmp10, strokeLineJoin, 4.0);
    return this_0.build_1k0s4u_k$();
  }
  function NotasIcons$_get_Close_$ref_3fcr7d() {
    return constructCallableReference(function (p0) {
      return p0.get_Close_i86z73_k$();
    }, 1, 0, 'com.notas.agenda.ui.icons/NotasIcons.Close.<get-Close>|<get-Close>(){}[0]');
  }
  function NotasIcons$Plus$delegate$lambda() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(22);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(22);
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder('Plus', tmp, tmp$ret$1, 22.0, 22.0);
    var tmp5 = new SolidColor(Companion_getInstance_3().get_Black_t4k9fh_k$());
    var tmp10 = Companion_getInstance_7().get_Round_hjra1h_k$();
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var strokeLineJoin = Companion_getInstance_8().get_Round_o8jjqp_k$();
    var pathFillType = get_DefaultFillType();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var $this$with = new PathBuilder();
    $this$with.moveTo_n8tdjo_k$(11.0, 4.58333);
    $this$with.verticalLineTo_1gpzkd_k$(17.4167);
    $this$with.moveTo_n8tdjo_k$(4.58333, 11.0);
    $this$with.horizontalLineTo_w9x139_k$(17.4167);
    var tmp$ret$5 = $this$with.get_nodes_ivvt6w_k$();
    this_0.addPath$default_98yxvz_k$(tmp$ret$5, pathFillType, '', null, 1.0, tmp5, 1.0, 1.7, tmp10, strokeLineJoin, 4.0);
    return this_0.build_1k0s4u_k$();
  }
  function NotasIcons$_get_Plus_$ref_lhh6wh() {
    return constructCallableReference(function (p0) {
      return p0.get_Plus_wo81dv_k$();
    }, 1, 0, 'com.notas.agenda.ui.icons/NotasIcons.Plus.<get-Plus>|<get-Plus>(){}[0]');
  }
  function NotasIcons$Search$delegate$lambda() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(22);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(22);
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder('Search', tmp, tmp$ret$1, 22.0, 22.0);
    var tmp5 = new SolidColor(Companion_getInstance_3().get_Black_t4k9fh_k$());
    var tmp10 = Companion_getInstance_7().get_Round_hjra1h_k$();
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var strokeLineJoin = Companion_getInstance_8().get_Round_o8jjqp_k$();
    var pathFillType = get_DefaultFillType();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var $this$with = new PathBuilder();
    $this$with.moveTo_n8tdjo_k$(14.6667, 9.16667);
    $this$with.curveTo_y0llje_k$(14.6667, 12.2042, 12.2042, 14.6667, 9.16667, 14.6667);
    $this$with.curveTo_y0llje_k$(6.1291, 14.6667, 3.66667, 12.2042, 3.66667, 9.16667);
    $this$with.curveTo_y0llje_k$(3.66667, 6.1291, 6.1291, 3.66667, 9.16667, 3.66667);
    $this$with.curveTo_y0llje_k$(12.2042, 3.66667, 14.6667, 6.1291, 14.6667, 9.16667);
    $this$with.close_1keygo_k$();
    var tmp$ret$5 = $this$with.get_nodes_ivvt6w_k$();
    this_0.addPath$default_98yxvz_k$(tmp$ret$5, pathFillType, '', null, 1.0, tmp5, 1.0, 1.7, tmp10, strokeLineJoin, 4.0);
    var tmp5_0 = new SolidColor(Companion_getInstance_3().get_Black_t4k9fh_k$());
    var tmp10_0 = Companion_getInstance_7().get_Round_hjra1h_k$();
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var strokeLineJoin_0 = Companion_getInstance_8().get_Round_o8jjqp_k$();
    var pathFillType_0 = get_DefaultFillType();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var $this$with_0 = new PathBuilder();
    $this$with_0.moveTo_n8tdjo_k$(13.75, 13.75);
    $this$with_0.lineTo_985bqp_k$(18.3333, 18.3333);
    var tmp$ret$10 = $this$with_0.get_nodes_ivvt6w_k$();
    this_0.addPath$default_98yxvz_k$(tmp$ret$10, pathFillType_0, '', null, 1.0, tmp5_0, 1.0, 1.7, tmp10_0, strokeLineJoin_0, 4.0);
    return this_0.build_1k0s4u_k$();
  }
  function NotasIcons$_get_Search_$ref_y178g1() {
    return constructCallableReference(function (p0) {
      return p0.get_Search_49qaxd_k$();
    }, 1, 0, 'com.notas.agenda.ui.icons/NotasIcons.Search.<get-Search>|<get-Search>(){}[0]');
  }
  function NotasIcons$ChevronRight$delegate$lambda() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(22);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(22);
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder('ChevronRight', tmp, tmp$ret$1, 22.0, 22.0);
    var tmp5 = new SolidColor(Companion_getInstance_3().get_Black_t4k9fh_k$());
    var tmp10 = Companion_getInstance_7().get_Round_hjra1h_k$();
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var strokeLineJoin = Companion_getInstance_8().get_Round_o8jjqp_k$();
    var pathFillType = get_DefaultFillType();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var $this$with = new PathBuilder();
    $this$with.moveTo_n8tdjo_k$(8.25, 4.58333);
    $this$with.lineTo_985bqp_k$(14.6667, 11.0);
    $this$with.lineTo_985bqp_k$(8.25, 17.4167);
    var tmp$ret$5 = $this$with.get_nodes_ivvt6w_k$();
    this_0.addPath$default_98yxvz_k$(tmp$ret$5, pathFillType, '', null, 1.0, tmp5, 1.0, 1.7, tmp10, strokeLineJoin, 4.0);
    return this_0.build_1k0s4u_k$();
  }
  function NotasIcons$_get_ChevronRight_$ref_wg6n8o() {
    return constructCallableReference(function (p0) {
      return p0.get_ChevronRight_glf4sq_k$();
    }, 1, 0, 'com.notas.agenda.ui.icons/NotasIcons.ChevronRight.<get-ChevronRight>|<get-ChevronRight>(){}[0]');
  }
  function NotasIcons$Lock$delegate$lambda() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(22);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(22);
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder('Lock', tmp, tmp$ret$1, 22.0, 22.0);
    var tmp5 = new SolidColor(Companion_getInstance_3().get_Black_t4k9fh_k$());
    var tmp10 = Companion_getInstance_7().get_Round_hjra1h_k$();
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var strokeLineJoin = Companion_getInstance_8().get_Round_o8jjqp_k$();
    var pathFillType = get_DefaultFillType();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var $this$with = new PathBuilder();
    $this$with.moveTo_n8tdjo_k$(6.41667, 9.16667);
    $this$with.horizontalLineTo_w9x139_k$(15.5833);
    $this$with.curveTo_y0llje_k$(16.5959, 9.16667, 17.4167, 9.98748, 17.4167, 11.0);
    $this$with.verticalLineTo_1gpzkd_k$(17.4167);
    $this$with.curveTo_y0llje_k$(17.4167, 18.4292, 16.5959, 19.25, 15.5833, 19.25);
    $this$with.horizontalLineTo_w9x139_k$(6.41667);
    $this$with.curveTo_y0llje_k$(5.40414, 19.25, 4.58333, 18.4292, 4.58333, 17.4167);
    $this$with.verticalLineTo_1gpzkd_k$(11.0);
    $this$with.curveTo_y0llje_k$(4.58333, 9.98748, 5.40414, 9.16667, 6.41667, 9.16667);
    $this$with.close_1keygo_k$();
    var tmp$ret$5 = $this$with.get_nodes_ivvt6w_k$();
    this_0.addPath$default_98yxvz_k$(tmp$ret$5, pathFillType, '', null, 1.0, tmp5, 1.0, 1.7, tmp10, strokeLineJoin, 4.0);
    var tmp5_0 = new SolidColor(Companion_getInstance_3().get_Black_t4k9fh_k$());
    var tmp10_0 = Companion_getInstance_7().get_Round_hjra1h_k$();
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var strokeLineJoin_0 = Companion_getInstance_8().get_Round_o8jjqp_k$();
    var pathFillType_0 = get_DefaultFillType();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var $this$with_0 = new PathBuilder();
    $this$with_0.moveTo_n8tdjo_k$(7.33333, 9.16667);
    $this$with_0.verticalLineTo_1gpzkd_k$(6.41667);
    $this$with_0.curveTo_y0llje_k$(7.33333, 5.44421, 7.71964, 4.51157, 8.40728, 3.82394);
    $this$with_0.curveTo_y0llje_k$(9.09491, 3.13631, 10.0275, 2.75, 11.0, 2.75);
    $this$with_0.curveTo_y0llje_k$(11.9725, 2.75, 12.9051, 3.13631, 13.5927, 3.82394);
    $this$with_0.curveTo_y0llje_k$(14.2804, 4.51157, 14.6667, 5.44421, 14.6667, 6.41667);
    $this$with_0.verticalLineTo_1gpzkd_k$(9.16667);
    $this$with_0.moveTo_n8tdjo_k$(11.0, 13.75);
    $this$with_0.verticalLineTo_1gpzkd_k$(15.5833);
    var tmp$ret$10 = $this$with_0.get_nodes_ivvt6w_k$();
    this_0.addPath$default_98yxvz_k$(tmp$ret$10, pathFillType_0, '', null, 1.0, tmp5_0, 1.0, 1.7, tmp10_0, strokeLineJoin_0, 4.0);
    return this_0.build_1k0s4u_k$();
  }
  function NotasIcons$_get_Lock_$ref_cejpr6() {
    return constructCallableReference(function (p0) {
      return p0.get_Lock_wo5j84_k$();
    }, 1, 0, 'com.notas.agenda.ui.icons/NotasIcons.Lock.<get-Lock>|<get-Lock>(){}[0]');
  }
  function NotasIcons$Sound$delegate$lambda() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(24);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(24);
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder('Sound', tmp, tmp$ret$1, 24.0, 24.0);
    var tmp5 = new SolidColor(Companion_getInstance_3().get_Black_t4k9fh_k$());
    var tmp10 = Companion_getInstance_7().get_Round_hjra1h_k$();
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var strokeLineJoin = Companion_getInstance_8().get_Round_o8jjqp_k$();
    var pathFillType = get_DefaultFillType();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var $this$with = new PathBuilder();
    $this$with.moveTo_n8tdjo_k$(16.0, 8.0);
    $this$with.curveTo_y0llje_k$(16.9839, 9.10004, 17.5279, 10.5241, 17.5279, 12.0);
    $this$with.curveTo_y0llje_k$(17.5279, 13.4759, 16.9839, 14.9, 16.0, 16.0);
    $this$with.moveTo_n8tdjo_k$(19.0, 5.0);
    $this$with.curveTo_y0llje_k$(20.8323, 6.86929, 21.8586, 9.38247, 21.8586, 12.0);
    $this$with.curveTo_y0llje_k$(21.8586, 14.6175, 20.8323, 17.1307, 19.0, 19.0);
    $this$with.moveTo_n8tdjo_k$(4.0, 9.0);
    $this$with.horizontalLineTo_w9x139_k$(8.0);
    $this$with.lineTo_985bqp_k$(13.0, 5.0);
    $this$with.verticalLineTo_1gpzkd_k$(19.0);
    $this$with.lineTo_985bqp_k$(8.0, 15.0);
    $this$with.horizontalLineTo_w9x139_k$(4.0);
    $this$with.verticalLineTo_1gpzkd_k$(9.0);
    $this$with.close_1keygo_k$();
    var tmp$ret$5 = $this$with.get_nodes_ivvt6w_k$();
    this_0.addPath$default_98yxvz_k$(tmp$ret$5, pathFillType, '', null, 1.0, tmp5, 1.0, 1.7, tmp10, strokeLineJoin, 4.0);
    return this_0.build_1k0s4u_k$();
  }
  function NotasIcons$_get_Sound_$ref_vuv30i() {
    return constructCallableReference(function (p0) {
      return p0.get_Sound_ih1pza_k$();
    }, 1, 0, 'com.notas.agenda.ui.icons/NotasIcons.Sound.<get-Sound>|<get-Sound>(){}[0]');
  }
  function NotasIcons$Play$delegate$lambda() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(22);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(22);
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder('Play', tmp, tmp$ret$1, 22.0, 22.0);
    var tmp5 = new SolidColor(Companion_getInstance_3().get_Black_t4k9fh_k$());
    var tmp10 = Companion_getInstance_7().get_Round_hjra1h_k$();
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var strokeLineJoin = Companion_getInstance_8().get_Round_o8jjqp_k$();
    var pathFillType = get_DefaultFillType();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var $this$with = new PathBuilder();
    $this$with.moveTo_n8tdjo_k$(8.25, 4.58333);
    $this$with.lineTo_985bqp_k$(17.4167, 11.0);
    $this$with.lineTo_985bqp_k$(8.25, 17.4167);
    $this$with.verticalLineTo_1gpzkd_k$(4.58333);
    $this$with.close_1keygo_k$();
    var tmp$ret$5 = $this$with.get_nodes_ivvt6w_k$();
    this_0.addPath$default_98yxvz_k$(tmp$ret$5, pathFillType, '', null, 1.0, tmp5, 1.0, 1.7, tmp10, strokeLineJoin, 4.0);
    return this_0.build_1k0s4u_k$();
  }
  function NotasIcons$_get_Play_$ref_s2ox3f() {
    return constructCallableReference(function (p0) {
      return p0.get_Play_wo80wt_k$();
    }, 1, 0, 'com.notas.agenda.ui.icons/NotasIcons.Play.<get-Play>|<get-Play>(){}[0]');
  }
  function NotasIcons$Send$delegate$lambda() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(22);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(22);
    // Inline function 'kotlin.apply' call
    var this_0 = new Builder('Send', tmp, tmp$ret$1, 22.0, 22.0);
    var tmp5 = new SolidColor(Companion_getInstance_3().get_Black_t4k9fh_k$());
    var tmp10 = Companion_getInstance_7().get_Round_hjra1h_k$();
    // Inline function 'androidx.compose.ui.graphics.vector.path' call
    var strokeLineJoin = Companion_getInstance_8().get_Round_o8jjqp_k$();
    var pathFillType = get_DefaultFillType();
    // Inline function 'androidx.compose.ui.graphics.vector.PathData' call
    // Inline function 'kotlin.with' call
    var $this$with = new PathBuilder();
    $this$with.moveTo_n8tdjo_k$(6.41667, 11.0);
    $this$with.lineTo_985bqp_k$(2.75, 19.25);
    $this$with.lineTo_985bqp_k$(19.25, 11.0);
    $this$with.lineTo_985bqp_k$(2.75, 2.75);
    $this$with.lineTo_985bqp_k$(6.41667, 11.0);
    $this$with.close_1keygo_k$();
    $this$with.moveTo_n8tdjo_k$(19.25, 11.0);
    $this$with.horizontalLineTo_w9x139_k$(6.41667);
    var tmp$ret$5 = $this$with.get_nodes_ivvt6w_k$();
    this_0.addPath$default_98yxvz_k$(tmp$ret$5, pathFillType, '', null, 1.0, tmp5, 1.0, 1.7, tmp10, strokeLineJoin, 4.0);
    return this_0.build_1k0s4u_k$();
  }
  function NotasIcons$_get_Send_$ref_3f1foh() {
    return constructCallableReference(function (p0) {
      return p0.get_Send_wo9sz5_k$();
    }, 1, 0, 'com.notas.agenda.ui.icons/NotasIcons.Send.<get-Send>|<get-Send>(){}[0]');
  }
  function NotasIcons() {
    NotasIcons_instance = this;
    var tmp = this;
    tmp.Bell$delegate_1 = lazy(NotasIcons$Bell$delegate$lambda);
    var tmp_0 = this;
    tmp_0.Calendar$delegate_1 = lazy(NotasIcons$Calendar$delegate$lambda);
    var tmp_1 = this;
    tmp_1.Chat$delegate_1 = lazy(NotasIcons$Chat$delegate$lambda);
    var tmp_2 = this;
    tmp_2.Settings$delegate_1 = lazy(NotasIcons$Settings$delegate$lambda);
    var tmp_3 = this;
    tmp_3.Close$delegate_1 = lazy(NotasIcons$Close$delegate$lambda);
    var tmp_4 = this;
    tmp_4.Plus$delegate_1 = lazy(NotasIcons$Plus$delegate$lambda);
    var tmp_5 = this;
    tmp_5.Search$delegate_1 = lazy(NotasIcons$Search$delegate$lambda);
    var tmp_6 = this;
    tmp_6.ChevronRight$delegate_1 = lazy(NotasIcons$ChevronRight$delegate$lambda);
    var tmp_7 = this;
    tmp_7.Lock$delegate_1 = lazy(NotasIcons$Lock$delegate$lambda);
    var tmp_8 = this;
    tmp_8.Sound$delegate_1 = lazy(NotasIcons$Sound$delegate$lambda);
    var tmp_9 = this;
    tmp_9.Play$delegate_1 = lazy(NotasIcons$Play$delegate$lambda);
    var tmp_10 = this;
    tmp_10.Send$delegate_1 = lazy(NotasIcons$Send$delegate$lambda);
  }
  protoOf(NotasIcons).get_Bell_wnyy5o_k$ = function () {
    var tmp0 = this.Bell$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('Bell', 1, tmp, NotasIcons$_get_Bell_$ref_b7a60q(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasIcons).get_Calendar_xomb4p_k$ = function () {
    var tmp0 = this.Calendar$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('Calendar', 1, tmp, NotasIcons$_get_Calendar_$ref_6yjql1(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasIcons).get_Chat_wnzn41_k$ = function () {
    var tmp0 = this.Chat$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('Chat', 1, tmp, NotasIcons$_get_Chat_$ref_trp70x(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasIcons).get_Settings_70b2es_k$ = function () {
    var tmp0 = this.Settings$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('Settings', 1, tmp, NotasIcons$_get_Settings_$ref_lm21nq(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasIcons).get_Close_i86z73_k$ = function () {
    var tmp0 = this.Close$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('Close', 1, tmp, NotasIcons$_get_Close_$ref_3fcr7d(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasIcons).get_Plus_wo81dv_k$ = function () {
    var tmp0 = this.Plus$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('Plus', 1, tmp, NotasIcons$_get_Plus_$ref_lhh6wh(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasIcons).get_Search_49qaxd_k$ = function () {
    var tmp0 = this.Search$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('Search', 1, tmp, NotasIcons$_get_Search_$ref_y178g1(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasIcons).get_ChevronRight_glf4sq_k$ = function () {
    var tmp0 = this.ChevronRight$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('ChevronRight', 1, tmp, NotasIcons$_get_ChevronRight_$ref_wg6n8o(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasIcons).get_Lock_wo5j84_k$ = function () {
    var tmp0 = this.Lock$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('Lock', 1, tmp, NotasIcons$_get_Lock_$ref_cejpr6(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasIcons).get_Sound_ih1pza_k$ = function () {
    var tmp0 = this.Sound$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('Sound', 1, tmp, NotasIcons$_get_Sound_$ref_vuv30i(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasIcons).get_Play_wo80wt_k$ = function () {
    var tmp0 = this.Play$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('Play', 1, tmp, NotasIcons$_get_Play_$ref_s2ox3f(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(NotasIcons).get_Send_wo9sz5_k$ = function () {
    var tmp0 = this.Send$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('Send', 1, tmp, NotasIcons$_get_Send_$ref_3f1foh(), null);
    return tmp0.get_value_j01efc_k$();
  };
  var NotasIcons_instance;
  function NotasIcons_getInstance() {
    if (NotasIcons_instance == null)
      new NotasIcons();
    return NotasIcons_instance;
  }
  function com_notas_agenda_ui_icons_NotasIcons$stableprop_getter() {
    return com_notas_agenda_ui_icons_NotasIcons$stable;
  }
  function NotasRibbonLogo$lambda($primaryColor, $ribbonColor) {
    return function ($this$Canvas) {
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      var this_0 = $this$Canvas.get_size_cxx1ym_k$();
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Size___get_packedValue__impl__7rlt1o(this_0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var targetW = floatFromBits(bits) * (1.0 - 2.0 * 0.1625);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      var this_1 = $this$Canvas.get_size_cxx1ym_k$();
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var targetH = floatFromBits(bits_0) * (1.0 - 2.0 * 0.15);
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      var this_2 = $this$Canvas.get_size_cxx1ym_k$();
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_1 = _Size___get_packedValue__impl__7rlt1o(this_2);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_1 = convertToInt(shiftRight(value_1, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var offsetX = floatFromBits(bits_1) * 0.1625;
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      var this_3 = $this$Canvas.get_size_cxx1ym_k$();
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_2 = _Size___get_packedValue__impl__7rlt1o(this_3);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var offsetY = floatFromBits(bits_2) * 0.15;
      var scaleX = targetW / 37.8;
      var scaleY = targetH / 39.2;
      // Inline function 'kotlin.apply' call
      var this_4 = Path();
      this_4.moveTo_22horo_k$(0.0, 33.6);
      this_4.lineTo_o2nyip_k$(0.0, 5.6);
      this_4.cubicTo_8sju51_k$(0.0, 2.5074, 2.5074, 0.0, 5.6, 0.0);
      this_4.cubicTo_8sju51_k$(7.4599, 0.0, 9.198, 0.924, 10.2396, 2.464);
      this_4.lineTo_o2nyip_k$(28.0, 28.728);
      this_4.lineTo_o2nyip_k$(28.0, 4.9);
      this_4.cubicTo_8sju51_k$(28.0, 2.1938, 30.1938, 0.0, 32.9, 0.0);
      this_4.cubicTo_8sju51_k$(35.6062, 0.0, 37.8, 2.1938, 37.8, 4.9);
      this_4.lineTo_o2nyip_k$(37.8, 33.6);
      this_4.cubicTo_8sju51_k$(37.8, 36.6926, 35.2926, 39.2, 32.2, 39.2);
      this_4.cubicTo_8sju51_k$(30.3401, 39.2, 28.602, 38.276, 27.5604, 36.736);
      this_4.lineTo_o2nyip_k$(9.8, 10.472);
      this_4.lineTo_o2nyip_k$(9.8, 34.3);
      this_4.cubicTo_8sju51_k$(9.8, 37.0062, 7.6062, 39.2, 4.9, 39.2);
      this_4.cubicTo_8sju51_k$(2.1938, 39.2, 0.0, 37.0062, 0.0, 34.3);
      this_4.close_yn9xrc_k$();
      var mainNPath = this_4;
      // Inline function 'kotlin.apply' call
      var this_5 = Path();
      this_5.moveTo_22horo_k$(13.886, 16.5144);
      this_5.lineTo_o2nyip_k$(21.8141, 11.1496);
      this_5.lineTo_o2nyip_k$(25.3421, 16.3674);
      this_5.lineTo_o2nyip_k$(17.4139, 21.7322);
      this_5.close_yn9xrc_k$();
      var ribbonPath = this_5;
      // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
      $this$Canvas.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(offsetX, offsetY);
      try {
        // Inline function 'androidx.compose.ui.graphics.drawscope.scale' call
        var pivot = Companion_getInstance_9().get_Zero_k6n73t_k$();
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        // Inline function 'kotlin.with' call
        var $this$with = $this$Canvas.get_drawContext_ffwztu_k$();
        var previousSize = $this$with.get_size_cxx1ym_k$();
        $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
        try {
          $this$with.get_transform_px941v_k$().scale_rbtyk0_k$(scaleX, scaleY, pivot);
          $this$Canvas.drawPath$default_16x1km_k$(mainNPath, $primaryColor._v.value_1);
          $this$Canvas.drawPath$default_16x1km_k$(ribbonPath, $ribbonColor._v.value_1);
        }finally {
          $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
          $this$with.set_size_6a0e6q_k$(previousSize);
        }
      }finally {
        $this$Canvas.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-offsetX, -offsetY);
      }
      return Unit_getInstance();
    };
  }
  function NotasRibbonLogo$lambda_0($modifier, $primaryColor, $ribbonColor, $$changed, $$default) {
    return function ($composer, $force) {
      NotasRibbonLogo($modifier._v, $primaryColor._v.value_1, $ribbonColor._v.value_1, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Notas01AccesoScreen(state, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-509078844);
    sourceInformation($composer_0, 'C(Notas01AccesoScreen)57@2592L6,58@2626L34,60@2666L2230:AuthAndAgendaScreens.kt#bisg3d');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(state) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-509078844, $dirty, -1, 'com.notas.agenda.ui.screens.Notas01AccesoScreen (AuthAndAgendaScreens.kt:56)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      sourceInformationMarkerStart($composer_0, 401506214, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = mutableStateOf(false);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp0_group = tmp;
      sourceInformationMarkerEnd($composer_0);
      var passwordVisible$delegate = tmp0_group;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = background(fillMaxSize(Companion_getInstance_0()), colors.get_background_8l4942_k$());
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp_0 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_0, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      var tmp0_0 = ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 1674886452, 'C65@2789L19,69@2917L21,66@2817L2073:AuthAndAgendaScreens.kt#bisg3d');
      NotasTopStatusBar(null, $composer_5, 0, 1);
      var tmp_1 = tmp0_0.weight$default_gbkz97_k$(Companion_getInstance_0(), 1.0);
      var tmp_2 = verticalScroll(tmp_1, rememberScrollState(0, $composer_5, 0, 1));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$10 = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = padding(tmp_2, tmp$ret$10);
      var verticalArrangement_0 = null;
      var horizontalAlignment_0 = Companion_getInstance_1().get_CenterHorizontally_97ab0v_k$();
      var $composer_6 = $composer_5;
      if (!((2 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((2 & 2) === 0))
        verticalArrangement_0 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((2 & 4) === 0))
        horizontalAlignment_0 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement_0, horizontalAlignment_0, $composer_6, 14 & 384 >> 3 | 112 & 384 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      var tmp0_1 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      var tmp_3 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_3, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_1);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_9 = $composer_8;
      ColumnScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, -1675015867, 'C73@3074L41,74@3128L131,78@3272L41,79@3326L215,86@3554L40,87@3607L196,93@3816L41,97@3995L24,94@3870L252,101@4135L41,105@4321L28,109@4528L38,102@4189L430,112@4632L41,115@4765L46,113@4686L140,117@4839L41:AuthAndAgendaScreens.kt#bisg3d');
      var tmp_4 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$17 = _Dp___init__impl__ms3zkb(76);
      Spacer(height(tmp_4, tmp$ret$17), $composer_10, 6);
      var tmp_5 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$18 = _Dp___init__impl__ms3zkb(56);
      var tmp_6 = size_0(tmp_5, tmp$ret$18);
      var tmp_7 = colors.get_accentButton_k5y1fw_k$();
      NotasRibbonLogo(tmp_6, tmp_7, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_10, 6, 4);
      var tmp_8 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$19 = _Dp___init__impl__ms3zkb(14);
      Spacer(height(tmp_8, tmp$ret$19), $composer_10, 6);
      var tmp_9 = colors.get_textPrimary_mf1tv7_k$();
      var tmp_10 = get_sp(14);
      var tmp_11 = Companion_getInstance_4().get_Bold_wnz5ke_k$();
      var tmp_12 = get_sp_0(2.4);
      var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_14 = _TextOverflow___init__impl__obguoe(0);
      Text('NOTAS', null, tmp_9, null, tmp_10, null, tmp_11, null, tmp_12, null, null, tmp_13, tmp_14, false, 0, 0, null, null, $composer_10, 102260742, 0, 261802);
      var tmp_15 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$20 = _Dp___init__impl__ms3zkb(6);
      Spacer(height(tmp_15, tmp$ret$20), $composer_10, 6);
      var tmp_16 = colors.get_textSecondary_kl22jf_k$();
      var tmp_17 = get_sp(9);
      var tmp_18 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_19 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_20 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_21 = _TextOverflow___init__impl__obguoe(0);
      Text('N O T A S   A G E N D', null, tmp_16, null, tmp_17, null, tmp_18, null, tmp_19, null, null, tmp_20, tmp_21, false, 0, 0, null, null, $composer_10, 1597446, 0, 262058);
      var tmp_22 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$21 = _Dp___init__impl__ms3zkb(44);
      Spacer(height(tmp_22, tmp$ret$21), $composer_10, 6);
      var tmp_23 = state.get_userEmail_dq8ru0_k$();
      sourceInformationMarkerStart($composer_10, -54005080, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_0 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_24;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = Notas01AccesoScreen$lambda_1(state);
        $composer_10.updateRememberedValue_l1wh71_k$(value_0);
        tmp_24 = value_0;
      } else {
        tmp_24 = it_0;
      }
      var tmp0_group_0 = tmp_24;
      sourceInformationMarkerEnd($composer_10);
      var tmp_25 = _Dp___init__impl__ms3zkb(0.0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_26 = _Dp___init__impl__ms3zkb(18);
      NotasInputField('Usuario', tmp_23, tmp0_group_0, 'correo@notas.com', false, false, null, false, tmp_25, tmp_26, null, $composer_10, 805309446, 0, 1520);
      var tmp_27 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$27 = _Dp___init__impl__ms3zkb(22);
      Spacer(height(tmp_27, tmp$ret$27), $composer_10, 6);
      var tmp_28 = state.get_loginPassword_3kfbi3_k$();
      sourceInformationMarkerStart($composer_10, -53994644, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_1 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_29;
      if (invalid_0 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = Notas01AccesoScreen$lambda_2(state);
        $composer_10.updateRememberedValue_l1wh71_k$(value_1);
        tmp_29 = value_1;
      } else {
        tmp_29 = it_1;
      }
      var tmp1_group = tmp_29;
      sourceInformationMarkerEnd($composer_10);
      var tmp_30 = Notas01AccesoScreen$lambda(passwordVisible$delegate);
      sourceInformationMarkerStart($composer_10, -53988010, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_2 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_31;
      if (false || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_2 = Notas01AccesoScreen$lambda_3(passwordVisible$delegate);
        $composer_10.updateRememberedValue_l1wh71_k$(value_2);
        tmp_31 = value_2;
      } else {
        tmp_31 = it_2;
      }
      var tmp2_group = tmp_31;
      sourceInformationMarkerEnd($composer_10);
      var tmp_32 = _Dp___init__impl__ms3zkb(0.0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_33 = _Dp___init__impl__ms3zkb(18);
      NotasInputField('Contrase\xF1a', tmp_28, tmp1_group, '\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022', true, tmp_30, tmp2_group, false, tmp_32, tmp_33, null, $composer_10, 806906886, 0, 1408);
      var tmp_34 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$37 = _Dp___init__impl__ms3zkb(34);
      Spacer(height(tmp_34, tmp$ret$37), $composer_10, 6);
      sourceInformationMarkerStart($composer_10, -53980418, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_3 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_35;
      if (invalid_1 || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_3 = Notas01AccesoScreen$lambda_4(state);
        $composer_10.updateRememberedValue_l1wh71_k$(value_3);
        tmp_35 = value_3;
      } else {
        tmp_35 = it_3;
      }
      var tmp3_group = tmp_35;
      sourceInformationMarkerEnd($composer_10);
      var tmp_36 = _Dp___init__impl__ms3zkb(0.0);
      NotasPrimaryButton('Entrar', tmp3_group, null, tmp_36, _Dp___init__impl__ms3zkb(0.0), $composer_10, 6, 28);
      var tmp_37 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$42 = _Dp___init__impl__ms3zkb(24);
      Spacer(height(tmp_37, tmp$ret$42), $composer_10, 6);
      sourceInformationMarkerEnd($composer_10);
      $composer_8.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(Notas01AccesoScreen$lambda_5(state, $changed));
    }
  }
  function MonthCell(dayNumber, inCurrentMonth) {
    this.dayNumber_1 = dayNumber;
    this.inCurrentMonth_1 = inCurrentMonth;
  }
  protoOf(MonthCell).get_dayNumber_3su6ck_k$ = function () {
    return this.dayNumber_1;
  };
  protoOf(MonthCell).get_inCurrentMonth_1zfhkb_k$ = function () {
    return this.inCurrentMonth_1;
  };
  protoOf(MonthCell).component1_7eebsc_k$ = function () {
    return this.dayNumber_1;
  };
  protoOf(MonthCell).component2_7eebsb_k$ = function () {
    return this.inCurrentMonth_1;
  };
  protoOf(MonthCell).copy_wkc01q_k$ = function (dayNumber, inCurrentMonth) {
    return new MonthCell(dayNumber, inCurrentMonth);
  };
  protoOf(MonthCell).copy$default_t42yri_k$ = function (dayNumber, inCurrentMonth, $super) {
    dayNumber = dayNumber === VOID ? this.dayNumber_1 : dayNumber;
    inCurrentMonth = inCurrentMonth === VOID ? this.inCurrentMonth_1 : inCurrentMonth;
    return $super === VOID ? this.copy_wkc01q_k$(dayNumber, inCurrentMonth) : $super.copy_wkc01q_k$.call(this, dayNumber, inCurrentMonth);
  };
  protoOf(MonthCell).toString = function () {
    return 'MonthCell(dayNumber=' + this.dayNumber_1 + ', inCurrentMonth=' + this.inCurrentMonth_1 + ')';
  };
  protoOf(MonthCell).hashCode = function () {
    var result = this.dayNumber_1;
    result = imul(result, 31) + getBooleanHashCode(this.inCurrentMonth_1) | 0;
    return result;
  };
  protoOf(MonthCell).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MonthCell))
      return false;
    if (!(this.dayNumber_1 === other.dayNumber_1))
      return false;
    if (!(this.inCurrentMonth_1 === other.inCurrentMonth_1))
      return false;
    return true;
  };
  function buildNovember2026Cells() {
    // Inline function 'kotlin.collections.mutableListOf' call
    var cells = ArrayList_init_$Create$();
    var inductionVariable = 26;
    if (inductionVariable <= 31)
      do {
        var d = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        cells.add_utx5q5_k$(new MonthCell(d, false));
      }
       while (inductionVariable <= 31);
    var inductionVariable_0 = 1;
    if (inductionVariable_0 <= 30)
      do {
        var d_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        cells.add_utx5q5_k$(new MonthCell(d_0, true));
      }
       while (inductionVariable_0 <= 30);
    var inductionVariable_1 = 1;
    if (inductionVariable_1 <= 6)
      do {
        var d_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        cells.add_utx5q5_k$(new MonthCell(d_1, false));
      }
       while (inductionVariable_1 <= 6);
    return chunked(cells, 7);
  }
  function dayNameForNov2026(day) {
    var names = listOf(['Domingo', 'Lunes', 'Martes', 'Mi\xE9rcoles', 'Jueves', 'Viernes', 'S\xE1bado']);
    return names.get_c1px32_k$((day - 1 | 0) % 7 | 0);
  }
  function Notas02AgendaMesScreen(state, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(2118574530);
    sourceInformation($composer_0, 'C(Notas02AgendaMesScreen)143@5600L6,144@5623L37,148@5925L143,155@6229L9492:AuthAndAgendaScreens.kt#bisg3d');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(state) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(2118574530, $dirty, -1, 'com.notas.agenda.ui.screens.Notas02AgendaMesScreen (AuthAndAgendaScreens.kt:142)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      sourceInformationMarkerStart($composer_0, 135628327, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = buildNovember2026Cells();
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp0_group = tmp;
      sourceInformationMarkerEnd($composer_0);
      var weeks = tmp0_group;
      var monthTitles = listOf(['Octubre 2026', 'Noviembre 2026', 'Diciembre 2026']);
      // Inline function 'kotlin.collections.getOrElse' call
      var index = state.get_monthOffset_njsssq_k$() + 1 | 0;
      var tmp_0;
      if (0 <= index ? index < monthTitles.get_size_woubt6_k$() : false) {
        tmp_0 = monthTitles.get_c1px32_k$(index);
      } else {
        tmp_0 = 'Noviembre 2026';
      }
      var activeMonthTitle = tmp_0;
      var selectedDayName = dayNameForNov2026(state.get_selectedDayOfMonth_5gc2j3_k$());
      var tmp1_remember$arg$0 = state.get_appointments_toel8d_k$().get_size_woubt6_k$();
      var tmp2_remember$arg$1 = state.get_appointments_toel8d_k$().toList_edfyo7_k$();
      sourceInformationMarkerStart($composer_0, 135638097, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!($composer_0.changed_kpusro_k$(tmp1_remember$arg$0) | $composer_0.changed_ga7h3f_k$(tmp2_remember$arg$1));
      // Inline function 'kotlin.let' call
      var it_0 = tmp0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        // Inline function 'kotlin.collections.map' call
        var this_1 = state.get_appointments_toel8d_k$();
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
        var _iterator__ex2g4s = this_1.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var item = _iterator__ex2g4s.next_20eer_k$();
          var tmp$ret$12 = item.get_dayOfMonth_vblo3a_k$();
          destination.add_utx5q5_k$(tmp$ret$12);
        }
        var value_0 = plus_0(toSet(destination), setOf([24, 26]));
        tmp0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp3_group = tmp_1;
      sourceInformationMarkerEnd($composer_0);
      var eventDays = tmp3_group;
      // Inline function 'kotlin.collections.filter' call
      var tmp0_0 = state.get_appointments_toel8d_k$();
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_0 = tmp0_0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s_0.next_20eer_k$();
        if (element.get_dayOfMonth_vblo3a_k$() === state.get_selectedDayOfMonth_5gc2j3_k$()) {
          destination_0.add_utx5q5_k$(element);
        }
      }
      // Inline function 'kotlin.collections.ifEmpty' call
      var tmp_2;
      if (destination_0.isEmpty_y1axqb_k$()) {
        tmp_2 = take_0(state.get_appointments_toel8d_k$(), 2);
      } else {
        tmp_2 = destination_0;
      }
      var dayAppointments = tmp_2;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = background(fillMaxSize(Companion_getInstance_0()), colors.get_background_8l4942_k$());
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0_1 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp_3 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_3, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0_1);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      var tmp0_2 = ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 854488580, 'C160@6352L19,166@6612L50,161@6380L293,170@6772L32,168@6682L133,176@6925L21,173@6825L8759,369@15684L20,367@15594L121:AuthAndAgendaScreens.kt#bisg3d');
      NotasTopStatusBar(null, $composer_5, 0, 1);
      var tmp_4 = selectedDayName + ', ' + state.get_selectedDayOfMonth_5gc2j3_k$() + ' de noviembre';
      var tmp_5 = NotasIcons_getInstance().get_Bell_wnyy5o_k$();
      sourceInformationMarkerStart($composer_5, -665173506, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_1 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid_0 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = Notas02AgendaMesScreen$lambda(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value_1);
        tmp_6 = value_1;
      } else {
        tmp_6 = it_1;
      }
      var tmp0_group_0 = tmp_6;
      sourceInformationMarkerEnd($composer_5);
      NotasHeader('NOTAS', 'Tu agenda', tmp_4, tmp_5, null, tmp0_group_0, null, null, null, $composer_5, 54, 464);
      var tmp_7 = state.get_feedbackMessage_z5ejaf_k$();
      sourceInformationMarkerStart($composer_5, -665168404, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_2 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_8;
      if (invalid_1 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_2 = Notas02AgendaMesScreen$lambda_0(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value_2);
        tmp_8 = value_2;
      } else {
        tmp_8 = it_2;
      }
      var tmp1_group = tmp_8;
      sourceInformationMarkerEnd($composer_5);
      NotasFeedbackBanner(tmp_7, tmp1_group, $composer_5, 0);
      var tmp_9 = tmp0_2.weight$default_gbkz97_k$(Companion_getInstance_0(), 1.0);
      var tmp_10 = verticalScroll(tmp_9, rememberScrollState(0, $composer_5, 0, 1));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$32 = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = padding(tmp_10, tmp$ret$32);
      var verticalArrangement_0 = null;
      var horizontalAlignment_0 = null;
      var $composer_6 = $composer_5;
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_0 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_0 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement_0, horizontalAlignment_0, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      var tmp0_3 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      var tmp_11 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_11, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_3);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_9 = $composer_8;
      ColumnScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, 1928800065, 'C179@7018L40,183@7214L222,180@7071L380,190@7464L41,193@7561L6299,325@13874L41,326@13928L1170,355@15112L41,364@15533L41:AuthAndAgendaScreens.kt#bisg3d');
      var tmp_12 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$39 = _Dp___init__impl__ms3zkb(6);
      Spacer(height(tmp_12, tmp$ret$39), $composer_10, 6);
      var tmp_13 = listOf(['Mes', 'Semana', 'D\xEDa']);
      sourceInformationMarkerStart($composer_10, 1309143284, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_3 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_14;
      if (invalid_2 || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_3 = Notas02AgendaMesScreen$lambda_1(state);
        $composer_10.updateRememberedValue_l1wh71_k$(value_3);
        tmp_14 = value_3;
      } else {
        tmp_14 = it_3;
      }
      var tmp0_group_1 = tmp_14;
      sourceInformationMarkerEnd($composer_10);
      var tmp_15 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_16 = _Dp___init__impl__ms3zkb(0.0);
      NotasSegmentedControl(tmp_13, 0, tmp0_group_1, tmp_15, tmp_16, null, $composer_10, 54, 56);
      var tmp_17 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$44 = _Dp___init__impl__ms3zkb(18);
      Spacer(height(tmp_17, tmp$ret$44), $composer_10, 6);
      var tmp_18 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$45 = _Dp___init__impl__ms3zkb(16);
      var tmp_19 = background(clip(tmp_18, RoundedCornerShape(tmp$ret$45)), colors.get_surface_ya87t7_k$());
      var tmp_20;
      if (colors.get_isDark_evw91l_k$()) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_20 = _Dp___init__impl__ms3zkb(1);
      } else {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_20 = _Dp___init__impl__ms3zkb(0.5);
      }
      var tmp_21 = tmp_20;
      var tmp_22 = colors.get_border_pp3j8c_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$48 = _Dp___init__impl__ms3zkb(16);
      var tmp_23 = border(tmp_19, tmp_21, tmp_22, RoundedCornerShape(tmp$ret$48));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_24 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$50 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_3 = padding(tmp_23, tmp_24, tmp$ret$50);
      var verticalArrangement_1 = null;
      var horizontalAlignment_1 = null;
      var $composer_11 = $composer_10;
      if (!((6 & 1) === 0))
        modifier_3 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_1 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_1 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_1 = columnMeasurePolicy(verticalArrangement_1, horizontalAlignment_1, $composer_11, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_12 = $composer_11;
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_0();
      var compositeKeyHash_1 = get_currentCompositeKeyHashCode($composer_12, 0).hashCode();
      var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_1 = materialize($composer_12, modifier_4);
      var tmp0_4 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_13 = $composer_12;
      var tmp_25 = $composer_13.get_applier_bupu8u_k$();
      if (!isInterface(tmp_25, Applier)) {
        invalidApplier();
      }
      $composer_13.startReusableNode_jjgeyp_k$();
      if ($composer_13.get_inserting_25mlsw_k$()) {
        $composer_13.createNode_ahrd54_k$(tmp0_4);
      } else {
        $composer_13.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, compositeKeyHash_1, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_1, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_14 = $composer_13;
      ColumnScopeInstance_getInstance();
      var $composer_15 = $composer_14;
      sourceInformationMarkerStart($composer_15, -1180615983, 'C205@8068L1546,237@9631L41,239@9690L540,251@10247L41,299@12894L41,300@12952L191,306@13160L41,307@13218L628:AuthAndAgendaScreens.kt#bisg3d');
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_5 = fillMaxWidth(Companion_getInstance_0());
      var horizontalArrangement = Arrangement_getInstance().get_SpaceBetween_5p3wqd_k$();
      var verticalAlignment = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_16 = $composer_15;
      if (!((0 & 1) === 0))
        modifier_5 = Companion_getInstance_0();
      if (!((0 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((0 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_2 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_16, 14 & 438 >> 3 | 112 & 438 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_6 = modifier_5;
      var $composer_17 = $composer_16;
      if (!((0 & 2) === 0))
        modifier_6 = Companion_getInstance_0();
      var compositeKeyHash_2 = get_currentCompositeKeyHashCode($composer_17, 0).hashCode();
      var localMap_2 = $composer_17.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_2 = materialize($composer_17, modifier_6);
      var tmp0_5 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_18 = $composer_17;
      var tmp_26 = $composer_18.get_applier_bupu8u_k$();
      if (!isInterface(tmp_26, Applier)) {
        invalidApplier();
      }
      $composer_18.startReusableNode_jjgeyp_k$();
      if ($composer_18.get_inserting_25mlsw_k$()) {
        $composer_18.createNode_ahrd54_k$(tmp0_5);
      } else {
        $composer_18.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_18);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, compositeKeyHash_2, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_2, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_19 = $composer_18;
      RowScopeInstance_getInstance();
      var $composer_20 = $composer_19;
      sourceInformationMarkerStart($composer_20, -1625351394, 'C210@8307L228,216@8556L1040:AuthAndAgendaScreens.kt#bisg3d');
      var tmp_27 = colors.get_textPrimary_mf1tv7_k$();
      var tmp_28 = get_sp(18);
      var tmp_29 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_30 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_31 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_32 = _TextOverflow___init__impl__obguoe(0);
      Text(activeMonthTitle, null, tmp_27, null, tmp_28, null, tmp_29, null, tmp_30, null, null, tmp_31, tmp_32, false, 0, 0, null, null, $composer_20, 1597440, 0, 262058);
      var tmp_33 = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$63 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_7 = null;
      var horizontalArrangement_0 = tmp_33.spacedBy_wt7oji_k$(tmp$ret$63);
      var verticalAlignment_0 = null;
      var $composer_21 = $composer_20;
      if (!((5 & 1) === 0))
        modifier_7 = Companion_getInstance_0();
      if (!((5 & 2) === 0))
        horizontalArrangement_0 = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((5 & 4) === 0))
        verticalAlignment_0 = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_3 = rowMeasurePolicy(horizontalArrangement_0, verticalAlignment_0, $composer_21, 14 & 48 >> 3 | 112 & 48 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_8 = modifier_7;
      var $composer_22 = $composer_21;
      if (!((0 & 2) === 0))
        modifier_8 = Companion_getInstance_0();
      var compositeKeyHash_3 = get_currentCompositeKeyHashCode($composer_22, 0).hashCode();
      var localMap_3 = $composer_22.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_3 = materialize($composer_22, modifier_8);
      var tmp0_6 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_23 = $composer_22;
      var tmp_34 = $composer_23.get_applier_bupu8u_k$();
      if (!isInterface(tmp_34, Applier)) {
        invalidApplier();
      }
      $composer_23.startReusableNode_jjgeyp_k$();
      if ($composer_23.get_inserting_25mlsw_k$()) {
        $composer_23.createNode_ahrd54_k$(tmp0_6);
      } else {
        $composer_23.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_3 = _Updater___init__impl__rbfxm8($composer_23);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, measurePolicy_3, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, localMap_3, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, compositeKeyHash_3, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_3, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, materialized_3, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_24 = $composer_23;
      RowScopeInstance_getInstance();
      var $composer_25 = $composer_24;
      sourceInformationMarkerStart($composer_25, 636608804, 'C223@8944L65,217@8639L457,232@9424L63,226@9121L453:AuthAndAgendaScreens.kt#bisg3d');
      var tmp0_color = colors.get_textSecondary_kl22jf_k$();
      var tmp1_fontSize = get_sp(24);
      var tmp_35 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$70 = _Dp___init__impl__ms3zkb(8);
      var tmp_36 = clip(tmp_35, RoundedCornerShape(tmp$ret$70));
      sourceInformationMarkerStart($composer_25, -810739335, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_4 = $composer_25.rememberedValue_4dg93v_k$();
      var tmp_37;
      if (invalid_3 || it_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_4 = Notas02AgendaMesScreen$lambda_2(state);
        $composer_25.updateRememberedValue_l1wh71_k$(value_4);
        tmp_37 = value_4;
      } else {
        tmp_37 = it_4;
      }
      var tmp0_group_2 = tmp_37;
      sourceInformationMarkerEnd($composer_25);
      var tmp_38 = clickable(tmp_36, VOID, VOID, VOID, VOID, tmp0_group_2);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$75 = _Dp___init__impl__ms3zkb(6);
      var tmp2_modifier = padding(tmp_38, tmp$ret$75);
      var tmp_39 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_40 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_41 = _TextOverflow___init__impl__obguoe(0);
      Text('\u2039', tmp2_modifier, tmp0_color, null, tmp1_fontSize, null, null, null, tmp_39, null, null, tmp_40, tmp_41, false, 0, 0, null, null, $composer_25, 24582, 0, 262120);
      var tmp3_color = colors.get_textPrimary_mf1tv7_k$();
      var tmp4_fontSize = get_sp(24);
      var tmp_42 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$76 = _Dp___init__impl__ms3zkb(8);
      var tmp_43 = clip(tmp_42, RoundedCornerShape(tmp$ret$76));
      sourceInformationMarkerStart($composer_25, -810723977, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_4 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_5 = $composer_25.rememberedValue_4dg93v_k$();
      var tmp_44;
      if (invalid_4 || it_5 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_5 = Notas02AgendaMesScreen$lambda_3(state);
        $composer_25.updateRememberedValue_l1wh71_k$(value_5);
        tmp_44 = value_5;
      } else {
        tmp_44 = it_5;
      }
      var tmp1_group_0 = tmp_44;
      sourceInformationMarkerEnd($composer_25);
      var tmp_45 = clickable(tmp_43, VOID, VOID, VOID, VOID, tmp1_group_0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$81 = _Dp___init__impl__ms3zkb(6);
      var tmp5_modifier = padding(tmp_45, tmp$ret$81);
      var tmp_46 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_47 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_48 = _TextOverflow___init__impl__obguoe(0);
      Text('\u203A', tmp5_modifier, tmp3_color, null, tmp4_fontSize, null, null, null, tmp_46, null, null, tmp_47, tmp_48, false, 0, 0, null, null, $composer_25, 24582, 0, 262120);
      sourceInformationMarkerEnd($composer_25);
      $composer_23.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_20);
      $composer_18.endNode_3m0yfn_k$();
      var tmp_49 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$82 = _Dp___init__impl__ms3zkb(14);
      Spacer(height(tmp_49, tmp$ret$82), $composer_15, 6);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_9 = fillMaxWidth(Companion_getInstance_0());
      var horizontalArrangement_1 = null;
      var verticalAlignment_1 = null;
      var $composer_26 = $composer_15;
      if (!((6 & 1) === 0))
        modifier_9 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        horizontalArrangement_1 = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((6 & 4) === 0))
        verticalAlignment_1 = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_4 = rowMeasurePolicy(horizontalArrangement_1, verticalAlignment_1, $composer_26, 14 & 6 >> 3 | 112 & 6 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_10 = modifier_9;
      var $composer_27 = $composer_26;
      if (!((0 & 2) === 0))
        modifier_10 = Companion_getInstance_0();
      var compositeKeyHash_4 = get_currentCompositeKeyHashCode($composer_27, 0).hashCode();
      var localMap_4 = $composer_27.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_4 = materialize($composer_27, modifier_10);
      var tmp0_7 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_28 = $composer_27;
      var tmp_50 = $composer_28.get_applier_bupu8u_k$();
      if (!isInterface(tmp_50, Applier)) {
        invalidApplier();
      }
      $composer_28.startReusableNode_jjgeyp_k$();
      if ($composer_28.get_inserting_25mlsw_k$()) {
        $composer_28.createNode_ahrd54_k$(tmp0_7);
      } else {
        $composer_28.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_4 = _Updater___init__impl__rbfxm8($composer_28);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, measurePolicy_4, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, localMap_4, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, compositeKeyHash_4, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_4, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, materialized_4, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_29 = $composer_28;
      var tmp0_8 = RowScopeInstance_getInstance();
      var $composer_30 = $composer_29;
      sourceInformationMarkerStart($composer_30, 1879270514, 'C:AuthAndAgendaScreens.kt#bisg3d');
      $composer_30.startReplaceGroup_5hh8aj_k$(-355019065);
      sourceInformation($composer_30, '*241@9835L355');
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_1 = listOf(['L', 'M', 'X', 'J', 'V', 'S', 'D']).iterator_jk1svi_k$();
      while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
        var element_0 = _iterator__ex2g4s_1.next_20eer_k$();
        var tmp0_color_0 = colors.get_textSecondary_kl22jf_k$();
        var tmp1_fontSize_0 = get_sp(10);
        var tmp2_fontWeight = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
        var tmp3_textAlign = Companion_getInstance_10().get_Center_fp5t1o_k$();
        var tmp4_modifier = tmp0_8.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0);
        var tmp_51 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_52 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_53 = _TextOverflow___init__impl__obguoe(0);
        Text(element_0, tmp4_modifier, tmp0_color_0, null, tmp1_fontSize_0, null, tmp2_fontWeight, null, tmp_51, null, tmp3_textAlign, tmp_52, tmp_53, false, 0, 0, null, null, $composer_30, 1597440, 0, 261032);
      }
      $composer_30.endReplaceGroup_ek144q_k$();
      sourceInformationMarkerEnd($composer_30);
      $composer_28.endNode_3m0yfn_k$();
      var tmp_54 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$91 = _Dp___init__impl__ms3zkb(10);
      Spacer(height(tmp_54, tmp$ret$91), $composer_15, 6);
      $composer_15.startReplaceGroup_5hh8aj_k$(654720868);
      sourceInformation($composer_15, '*254@10350L2508');
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_2 = weeks.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
        var element_1 = _iterator__ex2g4s_2.next_20eer_k$();
        var tmp_55 = fillMaxWidth(Companion_getInstance_0());
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$94 = _Dp___init__impl__ms3zkb(2);
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var modifier_11 = padding(tmp_55, VOID, tmp$ret$94);
        var horizontalArrangement_2 = null;
        var verticalAlignment_2 = null;
        var $composer_31 = $composer_15;
        if (!((6 & 1) === 0))
          modifier_11 = Companion_getInstance_0();
        if (!((6 & 2) === 0))
          horizontalArrangement_2 = Arrangement_getInstance().get_Start_ih4i6x_k$();
        if (!((6 & 4) === 0))
          verticalAlignment_2 = Companion_getInstance_1().get_Top_18jj1w_k$();
        var measurePolicy_5 = rowMeasurePolicy(horizontalArrangement_2, verticalAlignment_2, $composer_31, 14 & 6 >> 3 | 112 & 6 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_12 = modifier_11;
        var $composer_32 = $composer_31;
        if (!((0 & 2) === 0))
          modifier_12 = Companion_getInstance_0();
        var compositeKeyHash_5 = get_currentCompositeKeyHashCode($composer_32, 0).hashCode();
        var localMap_5 = $composer_32.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized_5 = materialize($composer_32, modifier_12);
        var tmp0_9 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_33 = $composer_32;
        var tmp_56 = $composer_33.get_applier_bupu8u_k$();
        if (!isInterface(tmp_56, Applier)) {
          invalidApplier();
        }
        $composer_33.startReusableNode_jjgeyp_k$();
        if ($composer_33.get_inserting_25mlsw_k$()) {
          $composer_33.createNode_ahrd54_k$(tmp0_9);
        } else {
          $composer_33.useNode_io5s9l_k$();
        }
        var $this$ReusableComposeNode_5 = _Updater___init__impl__rbfxm8($composer_33);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_5, measurePolicy_5, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_5, localMap_5, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_5, compositeKeyHash_5, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_5, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_5, materialized_5, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        var $composer_34 = $composer_33;
        var tmp0_10 = RowScopeInstance_getInstance();
        var $composer_35 = $composer_34;
        sourceInformationMarkerStart($composer_35, 1494005226, 'C:AuthAndAgendaScreens.kt#bisg3d');
        $composer_35.startReplaceGroup_5hh8aj_k$(186741204);
        sourceInformation($composer_35, '*268@11221L121,262@10810L2000');
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_3 = element_1.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_3.hasNext_bitz1p_k$()) {
          var element_2 = _iterator__ex2g4s_3.next_20eer_k$();
          var isSelected = element_2.inCurrentMonth_1 && element_2.dayNumber_1 === state.get_selectedDayOfMonth_5gc2j3_k$();
          var hasEvents = element_2.inCurrentMonth_1 && eventDays.contains_aljjnj_k$(element_2.dayNumber_1);
          var tmp_57 = tmp0_10.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0);
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$103 = _Dp___init__impl__ms3zkb(33);
          var tmp_58 = height(tmp_57, tmp$ret$103);
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$104 = _Dp___init__impl__ms3zkb(11);
          var tmp_59 = background(clip(tmp_58, RoundedCornerShape(tmp$ret$104)), isSelected ? colors.get_accentButton_k5y1fw_k$() : Companion_getInstance_3().get_Transparent_if5ln4_k$());
          sourceInformationMarkerStart($composer_35, 832273195, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_5 = !!(($dirty & 14) === 4 | $composer_0.changed_ga7h3f_k$(element_2));
          // Inline function 'kotlin.let' call
          var it_6 = $composer_35.rememberedValue_4dg93v_k$();
          var tmp_60;
          if (invalid_5 || it_6 === Companion_getInstance().get_Empty_i9b85g_k$()) {
            var value_6 = Notas02AgendaMesScreen$lambda_4(state, element_2);
            $composer_35.updateRememberedValue_l1wh71_k$(value_6);
            tmp_60 = value_6;
          } else {
            tmp_60 = it_6;
          }
          var tmp0_group_3 = tmp_60;
          sourceInformationMarkerEnd($composer_35);
          // Inline function 'androidx.compose.foundation.layout.Box' call
          var modifier_13 = clickable(tmp_59, element_2.inCurrentMonth_1, VOID, VOID, VOID, tmp0_group_3);
          var contentAlignment = Companion_getInstance_1().get_Center_3arb0i_k$();
          var propagateMinConstraints = false;
          var $composer_36 = $composer_35;
          if (!((4 & 1) === 0))
            modifier_13 = Companion_getInstance_0();
          if (!((4 & 2) === 0))
            contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
          if (!((4 & 4) === 0))
            propagateMinConstraints = false;
          var measurePolicy_6 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
          // Inline function 'androidx.compose.ui.layout.Layout' call
          var modifier_14 = modifier_13;
          var $composer_37 = $composer_36;
          if (!((0 & 2) === 0))
            modifier_14 = Companion_getInstance_0();
          var compositeKeyHash_6 = get_currentCompositeKeyHashCode($composer_37, 0).hashCode();
          var localMap_6 = $composer_37.get_currentCompositionLocalMap_fmcf79_k$();
          var materialized_6 = materialize($composer_37, modifier_14);
          var tmp0_11 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
          // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
          var $composer_38 = $composer_37;
          var tmp_61 = $composer_38.get_applier_bupu8u_k$();
          if (!isInterface(tmp_61, Applier)) {
            invalidApplier();
          }
          $composer_38.startReusableNode_jjgeyp_k$();
          if ($composer_38.get_inserting_25mlsw_k$()) {
            $composer_38.createNode_ahrd54_k$(tmp0_11);
          } else {
            $composer_38.useNode_io5s9l_k$();
          }
          var $this$ReusableComposeNode_6 = _Updater___init__impl__rbfxm8($composer_38);
          Updater__set_impl_v7kwss($this$ReusableComposeNode_6, measurePolicy_6, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_6, localMap_6, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_6, compositeKeyHash_6, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
          Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_6, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_6, materialized_6, Companion_getInstance_2().get_SetModifier_6tz580_k$());
          var $composer_39 = $composer_38;
          BoxScopeInstance_getInstance();
          var $composer_40 = $composer_39;
          sourceInformationMarkerStart($composer_40, -1516701548, 'C273@11477L1303:AuthAndAgendaScreens.kt#bisg3d');
          // Inline function 'androidx.compose.foundation.layout.Column' call
          var modifier_15 = null;
          var verticalArrangement_2 = null;
          var horizontalAlignment_2 = Companion_getInstance_1().get_CenterHorizontally_97ab0v_k$();
          var $composer_41 = $composer_40;
          if (!((3 & 1) === 0))
            modifier_15 = Companion_getInstance_0();
          if (!((3 & 2) === 0))
            verticalArrangement_2 = Arrangement_getInstance().get_Top_18jj1w_k$();
          if (!((3 & 4) === 0))
            horizontalAlignment_2 = Companion_getInstance_1().get_Start_ih4i6x_k$();
          var measurePolicy_7 = columnMeasurePolicy(verticalArrangement_2, horizontalAlignment_2, $composer_41, 14 & 384 >> 3 | 112 & 384 >> 3);
          // Inline function 'androidx.compose.ui.layout.Layout' call
          var modifier_16 = modifier_15;
          var $composer_42 = $composer_41;
          if (!((0 & 2) === 0))
            modifier_16 = Companion_getInstance_0();
          var compositeKeyHash_7 = get_currentCompositeKeyHashCode($composer_42, 0).hashCode();
          var localMap_7 = $composer_42.get_currentCompositionLocalMap_fmcf79_k$();
          var materialized_7 = materialize($composer_42, modifier_16);
          var tmp0_12 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
          // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
          var $composer_43 = $composer_42;
          var tmp_62 = $composer_43.get_applier_bupu8u_k$();
          if (!isInterface(tmp_62, Applier)) {
            invalidApplier();
          }
          $composer_43.startReusableNode_jjgeyp_k$();
          if ($composer_43.get_inserting_25mlsw_k$()) {
            $composer_43.createNode_ahrd54_k$(tmp0_12);
          } else {
            $composer_43.useNode_io5s9l_k$();
          }
          var $this$ReusableComposeNode_7 = _Updater___init__impl__rbfxm8($composer_43);
          Updater__set_impl_v7kwss($this$ReusableComposeNode_7, measurePolicy_7, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_7, localMap_7, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_7, compositeKeyHash_7, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
          Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_7, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_7, materialized_7, Companion_getInstance_2().get_SetModifier_6tz580_k$());
          var $composer_44 = $composer_43;
          ColumnScopeInstance_getInstance();
          var $composer_45 = $composer_44;
          sourceInformationMarkerStart($composer_45, 1947193601, 'C274@11574L607:AuthAndAgendaScreens.kt#bisg3d');
          var tmp_63 = element_2.dayNumber_1.toString();
          var tmp_64 = isSelected ? Companion_getInstance_3().get_White_xpp3qf_k$() : element_2.inCurrentMonth_1 ? colors.get_textPrimary_mf1tv7_k$() : colors.get_textMuted_gkraf8_k$();
          var tmp_65 = get_sp(12);
          var tmp_66 = isSelected ? Companion_getInstance_4().get_Bold_wnz5ke_k$() : Companion_getInstance_4().get_Medium_1fiba6_k$();
          var tmp_67 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_68 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_69 = _TextOverflow___init__impl__obguoe(0);
          Text(tmp_63, null, tmp_64, null, tmp_65, null, tmp_66, null, tmp_67, null, null, tmp_68, tmp_69, false, 0, 0, null, null, $composer_45, 24576, 0, 262058);
          if (hasEvents) {
            $composer_45.startReplaceGroup_5hh8aj_k$(1947826899);
            sourceInformation($composer_45, '285@12275L40,286@12356L352');
            var tmp_70 = Companion_getInstance_0();
            // Inline function 'androidx.compose.ui.unit.dp' call
            var tmp$ret$121 = _Dp___init__impl__ms3zkb(2);
            Spacer(height(tmp_70, tmp$ret$121), $composer_45, 6);
            var tmp_71 = Companion_getInstance_0();
            // Inline function 'androidx.compose.ui.unit.dp' call
            var tmp$ret$122 = _Dp___init__impl__ms3zkb(4);
            Box(background(clip(size_0(tmp_71, tmp$ret$122), get_CircleShape()), isSelected ? Companion_getInstance_3().get_White_xpp3qf_k$() : colors.get_accentContent_6vke99_k$()), $composer_45, 0);
            $composer_45.endReplaceGroup_ek144q_k$();
          } else {
            $composer_45.startReplaceGroup_5hh8aj_k$(1948319892);
            $composer_45.endReplaceGroup_ek144q_k$();
          }
          sourceInformationMarkerEnd($composer_45);
          $composer_43.endNode_3m0yfn_k$();
          sourceInformationMarkerEnd($composer_40);
          $composer_38.endNode_3m0yfn_k$();
        }
        $composer_35.endReplaceGroup_ek144q_k$();
        sourceInformationMarkerEnd($composer_35);
        $composer_33.endNode_3m0yfn_k$();
      }
      $composer_15.endReplaceGroup_ek144q_k$();
      var tmp_72 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$123 = _Dp___init__impl__ms3zkb(12);
      Spacer(height(tmp_72, tmp$ret$123), $composer_15, 6);
      var tmp_73 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$124 = _Dp___init__impl__ms3zkb(1);
      Box(background(height(tmp_73, tmp$ret$124), colors.get_border_pp3j8c_k$()), $composer_15, 0);
      var tmp_74 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$125 = _Dp___init__impl__ms3zkb(10);
      Spacer(height(tmp_74, tmp$ret$125), $composer_15, 6);
      var tmp0_verticalAlignment = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var tmp_75 = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$126 = _Dp___init__impl__ms3zkb(8);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_17 = null;
      var horizontalArrangement_3 = tmp_75.spacedBy_wt7oji_k$(tmp$ret$126);
      var verticalAlignment_3 = tmp0_verticalAlignment;
      var $composer_46 = $composer_15;
      if (!((1 & 1) === 0))
        modifier_17 = Companion_getInstance_0();
      if (!((1 & 2) === 0))
        horizontalArrangement_3 = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((1 & 4) === 0))
        verticalAlignment_3 = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_8 = rowMeasurePolicy(horizontalArrangement_3, verticalAlignment_3, $composer_46, 14 & 432 >> 3 | 112 & 432 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_18 = modifier_17;
      var $composer_47 = $composer_46;
      if (!((0 & 2) === 0))
        modifier_18 = Companion_getInstance_0();
      var compositeKeyHash_8 = get_currentCompositeKeyHashCode($composer_47, 0).hashCode();
      var localMap_8 = $composer_47.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_8 = materialize($composer_47, modifier_18);
      var tmp0_13 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_48 = $composer_47;
      var tmp_76 = $composer_48.get_applier_bupu8u_k$();
      if (!isInterface(tmp_76, Applier)) {
        invalidApplier();
      }
      $composer_48.startReusableNode_jjgeyp_k$();
      if ($composer_48.get_inserting_25mlsw_k$()) {
        $composer_48.createNode_ahrd54_k$(tmp0_13);
      } else {
        $composer_48.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_8 = _Updater___init__impl__rbfxm8($composer_48);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_8, measurePolicy_8, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_8, localMap_8, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_8, compositeKeyHash_8, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_8, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_8, materialized_8, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_49 = $composer_48;
      RowScopeInstance_getInstance();
      var $composer_50 = $composer_49;
      sourceInformationMarkerStart($composer_50, 1368257270, 'C311@13403L219,317@13643L185:AuthAndAgendaScreens.kt#bisg3d');
      var tmp_77 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$133 = _Dp___init__impl__ms3zkb(5);
      Box(background(clip(size_0(tmp_77, tmp$ret$133), get_CircleShape()), colors.get_accentContent_6vke99_k$()), $composer_50, 0);
      var tmp_78 = colors.get_textSecondary_kl22jf_k$();
      var tmp_79 = get_sp(10);
      var tmp_80 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_81 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_82 = _TextOverflow___init__impl__obguoe(0);
      Text('D\xEDas con citas de tu equipo', null, tmp_78, null, tmp_79, null, null, null, tmp_80, null, null, tmp_81, tmp_82, false, 0, 0, null, null, $composer_50, 24582, 0, 262122);
      sourceInformationMarkerEnd($composer_50);
      $composer_48.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_15);
      $composer_13.endNode_3m0yfn_k$();
      var tmp_83 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$134 = _Dp___init__impl__ms3zkb(16);
      Spacer(height(tmp_83, tmp$ret$134), $composer_10, 6);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_19 = fillMaxWidth(Companion_getInstance_0());
      var horizontalArrangement_4 = Arrangement_getInstance().get_SpaceBetween_5p3wqd_k$();
      var verticalAlignment_4 = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_51 = $composer_10;
      if (!((0 & 1) === 0))
        modifier_19 = Companion_getInstance_0();
      if (!((0 & 2) === 0))
        horizontalArrangement_4 = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((0 & 4) === 0))
        verticalAlignment_4 = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_9 = rowMeasurePolicy(horizontalArrangement_4, verticalAlignment_4, $composer_51, 14 & 438 >> 3 | 112 & 438 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_20 = modifier_19;
      var $composer_52 = $composer_51;
      if (!((0 & 2) === 0))
        modifier_20 = Companion_getInstance_0();
      var compositeKeyHash_9 = get_currentCompositeKeyHashCode($composer_52, 0).hashCode();
      var localMap_9 = $composer_52.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_9 = materialize($composer_52, modifier_20);
      var tmp0_14 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_53 = $composer_52;
      var tmp_84 = $composer_53.get_applier_bupu8u_k$();
      if (!isInterface(tmp_84, Applier)) {
        invalidApplier();
      }
      $composer_53.startReusableNode_jjgeyp_k$();
      if ($composer_53.get_inserting_25mlsw_k$()) {
        $composer_53.createNode_ahrd54_k$(tmp0_14);
      } else {
        $composer_53.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_9 = _Updater___init__impl__rbfxm8($composer_53);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_9, measurePolicy_9, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_9, localMap_9, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_9, compositeKeyHash_9, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_9, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_9, materialized_9, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_54 = $composer_53;
      RowScopeInstance_getInstance();
      var $composer_55 = $composer_54;
      sourceInformationMarkerStart($composer_55, 1581201032, 'C331@14147L256,342@14656L30,337@14420L664:AuthAndAgendaScreens.kt#bisg3d');
      // Inline function 'kotlin.text.uppercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_85 = 'HOY \xB7 ' + selectedDayName.toUpperCase() + ' ' + state.get_selectedDayOfMonth_5gc2j3_k$();
      var tmp_86 = colors.get_textSecondary_kl22jf_k$();
      var tmp_87 = get_sp(10);
      var tmp_88 = Companion_getInstance_4().get_Bold_wnz5ke_k$();
      var tmp_89 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_90 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_91 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp_85, null, tmp_86, null, tmp_87, null, tmp_88, null, tmp_89, null, null, tmp_90, tmp_91, false, 0, 0, null, null, $composer_55, 1597440, 0, 262058);
      var tmp_92 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$143 = _Dp___init__impl__ms3zkb(32);
      var tmp_93 = height(tmp_92, tmp$ret$143);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$144 = _Dp___init__impl__ms3zkb(13);
      var tmp_94 = background(clip(tmp_93, RoundedCornerShape(tmp$ret$144)), colors.get_accentContainer_6iiayz_k$());
      sourceInformationMarkerStart($composer_55, -1888640784, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_6 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_7 = $composer_55.rememberedValue_4dg93v_k$();
      var tmp_95;
      if (invalid_6 || it_7 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_7 = Notas02AgendaMesScreen$lambda_5(state);
        $composer_55.updateRememberedValue_l1wh71_k$(value_7);
        tmp_95 = value_7;
      } else {
        tmp_95 = it_7;
      }
      var tmp0_group_4 = tmp_95;
      sourceInformationMarkerEnd($composer_55);
      var tmp_96 = clickable(tmp_94, VOID, VOID, VOID, VOID, tmp0_group_4);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$149 = _Dp___init__impl__ms3zkb(14);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_21 = padding(tmp_96, tmp$ret$149);
      var contentAlignment_0 = Companion_getInstance_1().get_Center_3arb0i_k$();
      var propagateMinConstraints_0 = false;
      var $composer_56 = $composer_55;
      if (!((4 & 1) === 0))
        modifier_21 = Companion_getInstance_0();
      if (!((4 & 2) === 0))
        contentAlignment_0 = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((4 & 4) === 0))
        propagateMinConstraints_0 = false;
      var measurePolicy_10 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_22 = modifier_21;
      var $composer_57 = $composer_56;
      if (!((0 & 2) === 0))
        modifier_22 = Companion_getInstance_0();
      var compositeKeyHash_10 = get_currentCompositeKeyHashCode($composer_57, 0).hashCode();
      var localMap_10 = $composer_57.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_10 = materialize($composer_57, modifier_22);
      var tmp0_15 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_58 = $composer_57;
      var tmp_97 = $composer_58.get_applier_bupu8u_k$();
      if (!isInterface(tmp_97, Applier)) {
        invalidApplier();
      }
      $composer_58.startReusableNode_jjgeyp_k$();
      if ($composer_58.get_inserting_25mlsw_k$()) {
        $composer_58.createNode_ahrd54_k$(tmp0_15);
      } else {
        $composer_58.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_10 = _Updater___init__impl__rbfxm8($composer_58);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_10, measurePolicy_10, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_10, localMap_10, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_10, compositeKeyHash_10, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_10, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_10, materialized_10, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_59 = $composer_58;
      BoxScopeInstance_getInstance();
      var $composer_60 = $composer_59;
      sourceInformationMarkerStart($composer_60, 559637939, 'C346@14838L228:AuthAndAgendaScreens.kt#bisg3d');
      var tmp_98 = colors.get_accentContent_6vke99_k$();
      var tmp_99 = get_sp(13);
      var tmp_100 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_101 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_102 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_103 = _TextOverflow___init__impl__obguoe(0);
      Text('+ Nueva cita', null, tmp_98, null, tmp_99, null, tmp_100, null, tmp_101, null, null, tmp_102, tmp_103, false, 0, 0, null, null, $composer_60, 1597446, 0, 262058);
      sourceInformationMarkerEnd($composer_60);
      $composer_58.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_55);
      $composer_53.endNode_3m0yfn_k$();
      var tmp_104 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$156 = _Dp___init__impl__ms3zkb(10);
      Spacer(height(tmp_104, tmp$ret$156), $composer_10, 6);
      $composer_10.startReplaceGroup_5hh8aj_k$(1309398376);
      sourceInformation($composer_10, '*360@15392L37,357@15215L233,362@15465L41');
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_4 = dayAppointments.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_4.hasNext_bitz1p_k$()) {
        var element_3 = _iterator__ex2g4s_4.next_20eer_k$();
        var tmp_105 = element_3.get_startTime_qp7d5m_k$() + '\u2013' + element_3.get_endTime_pbcuqp_k$() + ' \xB7 ' + element_3.get_location_d3s02_k$();
        sourceInformationMarkerStart($composer_10, -1011254752, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_7 = !!(($dirty & 14) === 4 | $composer_0.changed_ga7h3f_k$(element_3));
        // Inline function 'kotlin.let' call
        var it_8 = $composer_10.rememberedValue_4dg93v_k$();
        var tmp_106;
        if (invalid_7 || it_8 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_8 = Notas02AgendaMesScreen$lambda_6(state, element_3);
          $composer_10.updateRememberedValue_l1wh71_k$(value_8);
          tmp_106 = value_8;
        } else {
          tmp_106 = it_8;
        }
        var tmp0_group_5 = tmp_106;
        sourceInformationMarkerEnd($composer_10);
        AppointmentSummaryCard(element_3, tmp_105, tmp0_group_5, null, _Dp___init__impl__ms3zkb(0.0), $composer_10, 0, 24);
        var tmp_107 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$163 = _Dp___init__impl__ms3zkb(10);
        Spacer(height(tmp_107, tmp$ret$163), $composer_10, 6);
      }
      $composer_10.endReplaceGroup_ek144q_k$();
      var tmp_108 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$164 = _Dp___init__impl__ms3zkb(12);
      Spacer(height(tmp_108, tmp$ret$164), $composer_10, 6);
      sourceInformationMarkerEnd($composer_10);
      $composer_8.endNode_3m0yfn_k$();
      var tmp_109 = NotasTab_AGENDA_getInstance();
      sourceInformationMarkerStart($composer_5, -664883232, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_8 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_9 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_110;
      if (invalid_8 || it_9 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_9 = NotasAppState$navigateToTab$ref(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value_9);
        tmp_110 = value_9;
      } else {
        tmp_110 = it_9;
      }
      var tmp2_group = tmp_110;
      sourceInformationMarkerEnd($composer_5);
      NotasBottomNavigation(tmp_109, tmp2_group, null, $composer_5, 6, 4);
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp4_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp4_safe_receiver == null)
      null;
    else {
      tmp4_safe_receiver.updateScope_t8jcf_k$(Notas02AgendaMesScreen$lambda_7(state, $changed));
    }
  }
  function Notas03AgendaSemanaScreen(state, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(163765227);
    sourceInformation($composer_0, 'C(Notas03AgendaSemanaScreen)376@15819L6,390@16120L8650:AuthAndAgendaScreens.kt#bisg3d');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(state) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(163765227, $dirty, -1, 'com.notas.agenda.ui.screens.Notas03AgendaSemanaScreen (AuthAndAgendaScreens.kt:375)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      var weekDays = listOf([to('L', 16), to('M', 17), to('X', 18), to('J', 19), to('V', 20), to('S', 21), to('D', 22)]);
      var hours = numberRangeToNumber(9, 16);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var rowHeight = _Dp___init__impl__ms3zkb(44);
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = state.get_appointments_toel8d_k$();
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        var containsArg = element.get_dayOfMonth_vblo3a_k$();
        if (16 <= containsArg ? containsArg <= 22 : false) {
          destination.add_utx5q5_k$(element);
        }
      }
      var weekEvents = destination;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = background(fillMaxSize(Companion_getInstance_0()), colors.get_background_8l4942_k$());
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0_0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      var tmp0_1 = ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 664434841, 'C395@16243L19,401@16471L50,396@16271L261,407@16642L21,404@16542L8091,590@24733L20,588@24643L121:AuthAndAgendaScreens.kt#bisg3d');
      NotasTopStatusBar(null, $composer_5, 0, 1);
      var tmp_0 = NotasIcons_getInstance().get_Bell_wnyy5o_k$();
      sourceInformationMarkerStart($composer_5, 159979539, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = Notas03AgendaSemanaScreen$lambda(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp0_group = tmp_1;
      sourceInformationMarkerEnd($composer_5);
      NotasHeader('NOTAS', 'Tu agenda', '16\u201322 de noviembre de 2026', tmp_0, null, tmp0_group, null, null, null, $composer_5, 438, 464);
      var tmp_2 = tmp0_1.weight$default_gbkz97_k$(Companion_getInstance_0(), 1.0);
      var tmp_3 = verticalScroll(tmp_2, rememberScrollState(0, $composer_5, 0, 1));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$14 = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = padding(tmp_3, tmp$ret$14);
      var verticalArrangement_0 = null;
      var horizontalAlignment_0 = null;
      var $composer_6 = $composer_5;
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_0 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_0 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement_0, horizontalAlignment_0, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      var tmp0_2 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      var tmp_4 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_4, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_2);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_9 = $composer_8;
      ColumnScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, 8649788, 'C410@16735L40,414@16931L223,411@16788L381,421@17182L41,423@17237L1238,455@18489L41,458@18578L5094,562@23686L41,565@23780L789,585@24582L41:AuthAndAgendaScreens.kt#bisg3d');
      var tmp_5 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$21 = _Dp___init__impl__ms3zkb(6);
      Spacer(height(tmp_5, tmp$ret$21), $composer_10, 6);
      var tmp_6 = listOf(['Mes', 'Semana', 'D\xEDa']);
      sourceInformationMarkerStart($composer_10, 1801392950, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_0 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = Notas03AgendaSemanaScreen$lambda_0(state);
        $composer_10.updateRememberedValue_l1wh71_k$(value_0);
        tmp_7 = value_0;
      } else {
        tmp_7 = it_0;
      }
      var tmp0_group_0 = tmp_7;
      sourceInformationMarkerEnd($composer_10);
      var tmp_8 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_9 = _Dp___init__impl__ms3zkb(0.0);
      NotasSegmentedControl(tmp_6, 1, tmp0_group_0, tmp_8, tmp_9, null, $composer_10, 54, 56);
      var tmp_10 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$26 = _Dp___init__impl__ms3zkb(16);
      Spacer(height(tmp_10, tmp$ret$26), $composer_10, 6);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_3 = fillMaxWidth(Companion_getInstance_0());
      var horizontalArrangement = Arrangement_getInstance().get_SpaceBetween_5p3wqd_k$();
      var verticalAlignment = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_11 = $composer_10;
      if (!((0 & 1) === 0))
        modifier_3 = Companion_getInstance_0();
      if (!((0 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((0 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_1 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_11, 14 & 438 >> 3 | 112 & 438 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_12 = $composer_11;
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_0();
      var compositeKeyHash_1 = get_currentCompositeKeyHashCode($composer_12, 0).hashCode();
      var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_1 = materialize($composer_12, modifier_4);
      var tmp0_3 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_13 = $composer_12;
      var tmp_11 = $composer_13.get_applier_bupu8u_k$();
      if (!isInterface(tmp_11, Applier)) {
        invalidApplier();
      }
      $composer_13.startReusableNode_jjgeyp_k$();
      if ($composer_13.get_inserting_25mlsw_k$()) {
        $composer_13.createNode_ahrd54_k$(tmp0_3);
      } else {
        $composer_13.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, compositeKeyHash_1, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_1, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_14 = $composer_13;
      RowScopeInstance_getInstance();
      var $composer_15 = $composer_14;
      sourceInformationMarkerStart($composer_15, -1820039845, 'C428@17456L209,439@17918L154,434@17682L779:AuthAndAgendaScreens.kt#bisg3d');
      var tmp_12 = colors.get_textPrimary_mf1tv7_k$();
      var tmp_13 = get_sp(18);
      var tmp_14 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_16 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_17 = _TextOverflow___init__impl__obguoe(0);
      Text('16\u201322 noviembre', null, tmp_12, null, tmp_13, null, tmp_14, null, tmp_15, null, null, tmp_16, tmp_17, false, 0, 0, null, null, $composer_15, 1597446, 0, 262058);
      var tmp_18 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$33 = _Dp___init__impl__ms3zkb(32);
      var tmp_19 = height(tmp_18, tmp$ret$33);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$34 = _Dp___init__impl__ms3zkb(13);
      var tmp_20 = background(clip(tmp_19, RoundedCornerShape(tmp$ret$34)), colors.get_accentContainer_6iiayz_k$());
      sourceInformationMarkerStart($composer_15, -1305623019, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_1 = $composer_15.rememberedValue_4dg93v_k$();
      var tmp_21;
      if (invalid_1 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = Notas03AgendaSemanaScreen$lambda_1(state);
        $composer_15.updateRememberedValue_l1wh71_k$(value_1);
        tmp_21 = value_1;
      } else {
        tmp_21 = it_1;
      }
      var tmp0_group_1 = tmp_21;
      sourceInformationMarkerEnd($composer_15);
      var tmp_22 = clickable(tmp_20, VOID, VOID, VOID, VOID, tmp0_group_1);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$39 = _Dp___init__impl__ms3zkb(15);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_5 = padding(tmp_22, tmp$ret$39);
      var contentAlignment = Companion_getInstance_1().get_Center_3arb0i_k$();
      var propagateMinConstraints = false;
      var $composer_16 = $composer_15;
      if (!((4 & 1) === 0))
        modifier_5 = Companion_getInstance_0();
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((4 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_2 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_6 = modifier_5;
      var $composer_17 = $composer_16;
      if (!((0 & 2) === 0))
        modifier_6 = Companion_getInstance_0();
      var compositeKeyHash_2 = get_currentCompositeKeyHashCode($composer_17, 0).hashCode();
      var localMap_2 = $composer_17.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_2 = materialize($composer_17, modifier_6);
      var tmp0_4 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_18 = $composer_17;
      var tmp_23 = $composer_18.get_applier_bupu8u_k$();
      if (!isInterface(tmp_23, Applier)) {
        invalidApplier();
      }
      $composer_18.startReusableNode_jjgeyp_k$();
      if ($composer_18.get_inserting_25mlsw_k$()) {
        $composer_18.createNode_ahrd54_k$(tmp0_4);
      } else {
        $composer_18.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_18);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, compositeKeyHash_2, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_2, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_19 = $composer_18;
      BoxScopeInstance_getInstance();
      var $composer_20 = $composer_19;
      sourceInformationMarkerStart($composer_20, -531338649, 'C446@18224L219:AuthAndAgendaScreens.kt#bisg3d');
      var tmp_24 = colors.get_accentContent_6vke99_k$();
      var tmp_25 = get_sp(13);
      var tmp_26 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_27 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_28 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_29 = _TextOverflow___init__impl__obguoe(0);
      Text('Hoy', null, tmp_24, null, tmp_25, null, tmp_26, null, tmp_27, null, null, tmp_28, tmp_29, false, 0, 0, null, null, $composer_20, 1597446, 0, 262058);
      sourceInformationMarkerEnd($composer_20);
      $composer_18.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_15);
      $composer_13.endNode_3m0yfn_k$();
      var tmp_30 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$46 = _Dp___init__impl__ms3zkb(14);
      Spacer(height(tmp_30, tmp$ret$46), $composer_10, 6);
      var tmp_31 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$47 = _Dp___init__impl__ms3zkb(16);
      var tmp_32 = background(clip(tmp_31, RoundedCornerShape(tmp$ret$47)), colors.get_surface_ya87t7_k$());
      var tmp_33;
      if (colors.get_isDark_evw91l_k$()) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_33 = _Dp___init__impl__ms3zkb(1);
      } else {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_33 = _Dp___init__impl__ms3zkb(0.5);
      }
      var tmp_34 = tmp_33;
      var tmp_35 = colors.get_border_pp3j8c_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$50 = _Dp___init__impl__ms3zkb(16);
      var tmp_36 = border(tmp_32, tmp_34, tmp_35, RoundedCornerShape(tmp$ret$50));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_37 = _Dp___init__impl__ms3zkb(10);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$52 = _Dp___init__impl__ms3zkb(10);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_7 = padding(tmp_36, tmp_37, tmp$ret$52);
      var verticalArrangement_1 = null;
      var horizontalAlignment_1 = null;
      var $composer_21 = $composer_10;
      if (!((6 & 1) === 0))
        modifier_7 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_1 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_1 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_3 = columnMeasurePolicy(verticalArrangement_1, horizontalAlignment_1, $composer_21, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_8 = modifier_7;
      var $composer_22 = $composer_21;
      if (!((0 & 2) === 0))
        modifier_8 = Companion_getInstance_0();
      var compositeKeyHash_3 = get_currentCompositeKeyHashCode($composer_22, 0).hashCode();
      var localMap_3 = $composer_22.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_3 = materialize($composer_22, modifier_8);
      var tmp0_5 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_23 = $composer_22;
      var tmp_38 = $composer_23.get_applier_bupu8u_k$();
      if (!isInterface(tmp_38, Applier)) {
        invalidApplier();
      }
      $composer_23.startReusableNode_jjgeyp_k$();
      if ($composer_23.get_inserting_25mlsw_k$()) {
        $composer_23.createNode_ahrd54_k$(tmp0_5);
      } else {
        $composer_23.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_3 = _Updater___init__impl__rbfxm8($composer_23);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, measurePolicy_3, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, localMap_3, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, compositeKeyHash_3, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_3, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, materialized_3, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_24 = $composer_23;
      ColumnScopeInstance_getInstance();
      var $composer_25 = $composer_24;
      sourceInformationMarkerStart($composer_25, -597884406, 'C471@19134L1643,504@20795L40:AuthAndAgendaScreens.kt#bisg3d');
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_9 = fillMaxWidth(Companion_getInstance_0());
      var horizontalArrangement_0 = null;
      var verticalAlignment_0 = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_26 = $composer_25;
      if (!((2 & 1) === 0))
        modifier_9 = Companion_getInstance_0();
      if (!((2 & 2) === 0))
        horizontalArrangement_0 = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((2 & 4) === 0))
        verticalAlignment_0 = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_4 = rowMeasurePolicy(horizontalArrangement_0, verticalAlignment_0, $composer_26, 14 & 390 >> 3 | 112 & 390 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_10 = modifier_9;
      var $composer_27 = $composer_26;
      if (!((0 & 2) === 0))
        modifier_10 = Companion_getInstance_0();
      var compositeKeyHash_4 = get_currentCompositeKeyHashCode($composer_27, 0).hashCode();
      var localMap_4 = $composer_27.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_4 = materialize($composer_27, modifier_10);
      var tmp0_6 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_28 = $composer_27;
      var tmp_39 = $composer_28.get_applier_bupu8u_k$();
      if (!isInterface(tmp_39, Applier)) {
        invalidApplier();
      }
      $composer_28.startReusableNode_jjgeyp_k$();
      if ($composer_28.get_inserting_25mlsw_k$()) {
        $composer_28.createNode_ahrd54_k$(tmp0_6);
      } else {
        $composer_28.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_4 = _Updater___init__impl__rbfxm8($composer_28);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, measurePolicy_4, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, localMap_4, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, compositeKeyHash_4, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_4, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, materialized_4, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_29 = $composer_28;
      var tmp0_7 = RowScopeInstance_getInstance();
      var $composer_30 = $composer_29;
      sourceInformationMarkerStart($composer_30, -4037310, 'C475@19303L40:AuthAndAgendaScreens.kt#bisg3d');
      var tmp_40 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$65 = _Dp___init__impl__ms3zkb(28);
      Spacer(width(tmp_40, tmp$ret$65), $composer_30, 6);
      $composer_30.startReplaceGroup_5hh8aj_k$(969703259);
      sourceInformation($composer_30, '*483@19814L37,478@19501L1236');
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = weekDays.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
        var letter = element_0.component1_7eebsc_k$();
        var dayNum = element_0.component2_7eebsb_k$();
        var selected = state.get_selectedDayOfMonth_5gc2j3_k$() === dayNum;
        var tmp_41 = tmp0_7.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$68 = _Dp___init__impl__ms3zkb(10);
        var tmp_42 = background(clip(tmp_41, RoundedCornerShape(tmp$ret$68)), selected ? colors.get_accentContainer_6iiayz_k$() : Companion_getInstance_3().get_Transparent_if5ln4_k$());
        sourceInformationMarkerStart($composer_30, -798100913, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = !!(($dirty & 14) === 4 | $composer_0.changed_kpusro_k$(dayNum));
        // Inline function 'kotlin.let' call
        var it_2 = $composer_30.rememberedValue_4dg93v_k$();
        var tmp_43;
        if (invalid_2 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_2 = Notas03AgendaSemanaScreen$lambda_2(state, dayNum);
          $composer_30.updateRememberedValue_l1wh71_k$(value_2);
          tmp_43 = value_2;
        } else {
          tmp_43 = it_2;
        }
        var tmp0_group_2 = tmp_43;
        sourceInformationMarkerEnd($composer_30);
        var tmp_44 = clickable(tmp_42, VOID, VOID, VOID, VOID, tmp0_group_2);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$73 = _Dp___init__impl__ms3zkb(4);
        // Inline function 'androidx.compose.foundation.layout.Column' call
        var modifier_11 = padding(tmp_44, VOID, tmp$ret$73);
        var verticalArrangement_2 = null;
        var horizontalAlignment_2 = Companion_getInstance_1().get_CenterHorizontally_97ab0v_k$();
        var $composer_31 = $composer_30;
        if (!((2 & 1) === 0))
          modifier_11 = Companion_getInstance_0();
        if (!((2 & 2) === 0))
          verticalArrangement_2 = Arrangement_getInstance().get_Top_18jj1w_k$();
        if (!((2 & 4) === 0))
          horizontalAlignment_2 = Companion_getInstance_1().get_Start_ih4i6x_k$();
        var measurePolicy_5 = columnMeasurePolicy(verticalArrangement_2, horizontalAlignment_2, $composer_31, 14 & 384 >> 3 | 112 & 384 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_12 = modifier_11;
        var $composer_32 = $composer_31;
        if (!((0 & 2) === 0))
          modifier_12 = Companion_getInstance_0();
        var compositeKeyHash_5 = get_currentCompositeKeyHashCode($composer_32, 0).hashCode();
        var localMap_5 = $composer_32.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized_5 = materialize($composer_32, modifier_12);
        var tmp0_8 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_33 = $composer_32;
        var tmp_45 = $composer_33.get_applier_bupu8u_k$();
        if (!isInterface(tmp_45, Applier)) {
          invalidApplier();
        }
        $composer_33.startReusableNode_jjgeyp_k$();
        if ($composer_33.get_inserting_25mlsw_k$()) {
          $composer_33.createNode_ahrd54_k$(tmp0_8);
        } else {
          $composer_33.useNode_io5s9l_k$();
        }
        var $this$ReusableComposeNode_5 = _Updater___init__impl__rbfxm8($composer_33);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_5, measurePolicy_5, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_5, localMap_5, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_5, compositeKeyHash_5, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_5, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_5, materialized_5, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        var $composer_34 = $composer_33;
        ColumnScopeInstance_getInstance();
        var $composer_35 = $composer_34;
        sourceInformationMarkerStart($composer_35, -2060677929, 'C487@20047L257,493@20333L40,494@20402L309:AuthAndAgendaScreens.kt#bisg3d');
        var tmp_46 = colors.get_textSecondary_kl22jf_k$();
        var tmp_47 = get_sp(9);
        var tmp_48 = Companion_getInstance_4().get_Medium_1fiba6_k$();
        var tmp_49 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_50 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_51 = _TextOverflow___init__impl__obguoe(0);
        Text(letter, null, tmp_46, null, tmp_47, null, tmp_48, null, tmp_49, null, null, tmp_50, tmp_51, false, 0, 0, null, null, $composer_35, 1597440, 0, 262058);
        var tmp_52 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$80 = _Dp___init__impl__ms3zkb(2);
        Spacer(height(tmp_52, tmp$ret$80), $composer_35, 6);
        var tmp_53 = dayNum.toString();
        var tmp_54 = selected ? colors.get_accentContent_6vke99_k$() : colors.get_textPrimary_mf1tv7_k$();
        var tmp_55 = get_sp(12);
        var tmp_56 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
        var tmp_57 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_58 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_59 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_53, null, tmp_54, null, tmp_55, null, tmp_56, null, tmp_57, null, null, tmp_58, tmp_59, false, 0, 0, null, null, $composer_35, 1597440, 0, 262058);
        sourceInformationMarkerEnd($composer_35);
        $composer_33.endNode_3m0yfn_k$();
      }
      $composer_30.endReplaceGroup_ek144q_k$();
      sourceInformationMarkerEnd($composer_30);
      $composer_28.endNode_3m0yfn_k$();
      var tmp_60 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$81 = _Dp___init__impl__ms3zkb(8);
      Spacer(height(tmp_60, tmp$ret$81), $composer_25, 6);
      $composer_25.startReplaceGroup_5hh8aj_k$(-1266158054);
      sourceInformation($composer_25, '*509@21000L2640');
      // Inline function 'kotlin.collections.forEach' call
      var inductionVariable = hours.get_first_irdx8n_k$();
      var last = hours.get_last_wopotb_k$();
      if (inductionVariable <= last)
        do {
          var element_1 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var hour = element_1;
          var hourLabel = padStart(hour.toString(), 2, _Char___init__impl__6a9atx(48));
          // Inline function 'androidx.compose.foundation.layout.Row' call
          var modifier_13 = height(fillMaxWidth(Companion_getInstance_0()), rowHeight);
          var horizontalArrangement_1 = null;
          var verticalAlignment_1 = Companion_getInstance_1().get_Top_18jj1w_k$();
          var $composer_36 = $composer_25;
          if (!((2 & 1) === 0))
            modifier_13 = Companion_getInstance_0();
          if (!((2 & 2) === 0))
            horizontalArrangement_1 = Arrangement_getInstance().get_Start_ih4i6x_k$();
          if (!((2 & 4) === 0))
            verticalAlignment_1 = Companion_getInstance_1().get_Top_18jj1w_k$();
          var measurePolicy_6 = rowMeasurePolicy(horizontalArrangement_1, verticalAlignment_1, $composer_36, 14 & 390 >> 3 | 112 & 390 >> 3);
          // Inline function 'androidx.compose.ui.layout.Layout' call
          var modifier_14 = modifier_13;
          var $composer_37 = $composer_36;
          if (!((0 & 2) === 0))
            modifier_14 = Companion_getInstance_0();
          var compositeKeyHash_6 = get_currentCompositeKeyHashCode($composer_37, 0).hashCode();
          var localMap_6 = $composer_37.get_currentCompositionLocalMap_fmcf79_k$();
          var materialized_6 = materialize($composer_37, modifier_14);
          var tmp0_9 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
          // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
          var $composer_38 = $composer_37;
          var tmp_61 = $composer_38.get_applier_bupu8u_k$();
          if (!isInterface(tmp_61, Applier)) {
            invalidApplier();
          }
          $composer_38.startReusableNode_jjgeyp_k$();
          if ($composer_38.get_inserting_25mlsw_k$()) {
            $composer_38.createNode_ahrd54_k$(tmp0_9);
          } else {
            $composer_38.useNode_io5s9l_k$();
          }
          var $this$ReusableComposeNode_6 = _Updater___init__impl__rbfxm8($composer_38);
          Updater__set_impl_v7kwss($this$ReusableComposeNode_6, measurePolicy_6, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_6, localMap_6, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_6, compositeKeyHash_6, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
          Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_6, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_6, materialized_6, Companion_getInstance_2().get_SetModifier_6tz580_k$());
          var $composer_39 = $composer_38;
          var tmp0_10 = RowScopeInstance_getInstance();
          var $composer_40 = $composer_39;
          sourceInformationMarkerStart($composer_40, 1073740632, 'C515@21248L328:AuthAndAgendaScreens.kt#bisg3d');
          var tmp0_color = colors.get_textSecondary_kl22jf_k$();
          var tmp1_fontSize = get_sp(9);
          var tmp_62 = Companion_getInstance_0();
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$90 = _Dp___init__impl__ms3zkb(28);
          var tmp_63 = width(tmp_62, tmp$ret$90);
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$91 = _Dp___init__impl__ms3zkb(2);
          var tmp2_modifier = padding_0(tmp_63, VOID, tmp$ret$91);
          var tmp_64 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_65 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_66 = _TextOverflow___init__impl__obguoe(0);
          Text(hourLabel, tmp2_modifier, tmp0_color, null, tmp1_fontSize, null, null, null, tmp_64, null, null, tmp_65, tmp_66, false, 0, 0, null, null, $composer_40, 24624, 0, 262120);
          $composer_40.startReplaceGroup_5hh8aj_k$(588837345);
          sourceInformation($composer_40, '*528@21928L1664');
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_1 = weekDays.iterator_jk1svi_k$();
          while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
            var element_2 = _iterator__ex2g4s_1.next_20eer_k$();
            var dayNum_0 = element_2.component2_7eebsb_k$();
            var tmp$ret$94;
            $l$block: {
              // Inline function 'kotlin.collections.firstOrNull' call
              var _iterator__ex2g4s_2 = weekEvents.iterator_jk1svi_k$();
              while (_iterator__ex2g4s_2.hasNext_bitz1p_k$()) {
                var element_3 = _iterator__ex2g4s_2.next_20eer_k$();
                if (element_3.get_dayOfMonth_vblo3a_k$() === dayNum_0 && toIntOrNull(substringBefore(element_3.get_startTime_qp7d5m_k$(), ':')) === hour) {
                  tmp$ret$94 = element_3;
                  break $l$block;
                }
              }
              tmp$ret$94 = null;
            }
            var matchingEvent = tmp$ret$94;
            var tmp_67 = height(tmp0_10.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0), rowHeight);
            // Inline function 'androidx.compose.ui.unit.dp' call
            var tmp$ret$96 = _Dp___init__impl__ms3zkb(0.5);
            var tmp_68 = border(tmp_67, tmp$ret$96, Color__copy$default_impl_ectz3s(colors.get_border_pp3j8c_k$(), 0.7));
            // Inline function 'androidx.compose.ui.unit.dp' call
            var tmp$ret$97 = _Dp___init__impl__ms3zkb(2);
            // Inline function 'androidx.compose.foundation.layout.Box' call
            var modifier_15 = padding_1(tmp_68, tmp$ret$97);
            var contentAlignment_0 = Companion_getInstance_1().get_Center_3arb0i_k$();
            var propagateMinConstraints_0 = false;
            var $composer_41 = $composer_40;
            if (!((4 & 1) === 0))
              modifier_15 = Companion_getInstance_0();
            if (!((4 & 2) === 0))
              contentAlignment_0 = Companion_getInstance_1().get_TopStart_o4x792_k$();
            if (!((4 & 4) === 0))
              propagateMinConstraints_0 = false;
            var measurePolicy_7 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
            // Inline function 'androidx.compose.ui.layout.Layout' call
            var modifier_16 = modifier_15;
            var $composer_42 = $composer_41;
            if (!((0 & 2) === 0))
              modifier_16 = Companion_getInstance_0();
            var compositeKeyHash_7 = get_currentCompositeKeyHashCode($composer_42, 0).hashCode();
            var localMap_7 = $composer_42.get_currentCompositionLocalMap_fmcf79_k$();
            var materialized_7 = materialize($composer_42, modifier_16);
            var tmp0_11 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
            // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
            var $composer_43 = $composer_42;
            var tmp_69 = $composer_43.get_applier_bupu8u_k$();
            if (!isInterface(tmp_69, Applier)) {
              invalidApplier();
            }
            $composer_43.startReusableNode_jjgeyp_k$();
            if ($composer_43.get_inserting_25mlsw_k$()) {
              $composer_43.createNode_ahrd54_k$(tmp0_11);
            } else {
              $composer_43.useNode_io5s9l_k$();
            }
            var $this$ReusableComposeNode_7 = _Updater___init__impl__rbfxm8($composer_43);
            Updater__set_impl_v7kwss($this$ReusableComposeNode_7, measurePolicy_7, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
            Updater__set_impl_v7kwss($this$ReusableComposeNode_7, localMap_7, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
            Updater__set_impl_v7kwss($this$ReusableComposeNode_7, compositeKeyHash_7, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
            Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_7, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
            Updater__set_impl_v7kwss($this$ReusableComposeNode_7, materialized_7, Companion_getInstance_2().get_SetModifier_6tz580_k$());
            var $composer_44 = $composer_43;
            BoxScopeInstance_getInstance();
            var $composer_45 = $composer_44;
            sourceInformationMarkerStart($composer_45, -1310110316, 'C:AuthAndAgendaScreens.kt#bisg3d');
            if (!(matchingEvent == null)) {
              $composer_45.startReplaceGroup_5hh8aj_k$(-1310084370);
              sourceInformation($composer_45, '537@22439L38,543@22829L47,538@22514L1014');
              var _destruct__k2r9zo = categoryColors(matchingEvent.get_category_uyv41l_k$(), $composer_45, 0);
              var bg = _destruct__k2r9zo.component1_7eebsc_k$().value_1;
              var fg = _destruct__k2r9zo.component2_7eebsb_k$().value_1;
              var tmp_70 = fillMaxSize(Companion_getInstance_0());
              // Inline function 'androidx.compose.ui.unit.dp' call
              var tmp$ret$104 = _Dp___init__impl__ms3zkb(7);
              var tmp_71 = background(clip(tmp_70, RoundedCornerShape(tmp$ret$104)), bg);
              sourceInformationMarkerStart($composer_45, -1981910389, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
              // Inline function 'androidx.compose.runtime.cache' call
              var invalid_3 = !!(($dirty & 14) === 4 | $composer_0.changed_ga7h3f_k$(matchingEvent));
              // Inline function 'kotlin.let' call
              var it_3 = $composer_45.rememberedValue_4dg93v_k$();
              var tmp_72;
              if (invalid_3 || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
                var value_3 = Notas03AgendaSemanaScreen$lambda_3(state, matchingEvent);
                $composer_45.updateRememberedValue_l1wh71_k$(value_3);
                tmp_72 = value_3;
              } else {
                tmp_72 = it_3;
              }
              var tmp0_group_3 = tmp_72;
              sourceInformationMarkerEnd($composer_45);
              // Inline function 'androidx.compose.foundation.layout.Box' call
              var modifier_17 = clickable(tmp_71, VOID, VOID, VOID, VOID, tmp0_group_3);
              var contentAlignment_1 = Companion_getInstance_1().get_Center_3arb0i_k$();
              var propagateMinConstraints_1 = false;
              var $composer_46 = $composer_45;
              if (!((4 & 1) === 0))
                modifier_17 = Companion_getInstance_0();
              if (!((4 & 2) === 0))
                contentAlignment_1 = Companion_getInstance_1().get_TopStart_o4x792_k$();
              if (!((4 & 4) === 0))
                propagateMinConstraints_1 = false;
              var measurePolicy_8 = maybeCachedBoxMeasurePolicy(contentAlignment_1, propagateMinConstraints_1);
              // Inline function 'androidx.compose.ui.layout.Layout' call
              var modifier_18 = modifier_17;
              var $composer_47 = $composer_46;
              if (!((0 & 2) === 0))
                modifier_18 = Companion_getInstance_0();
              var compositeKeyHash_8 = get_currentCompositeKeyHashCode($composer_47, 0).hashCode();
              var localMap_8 = $composer_47.get_currentCompositionLocalMap_fmcf79_k$();
              var materialized_8 = materialize($composer_47, modifier_18);
              var tmp0_12 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
              // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
              var $composer_48 = $composer_47;
              var tmp_73 = $composer_48.get_applier_bupu8u_k$();
              if (!isInterface(tmp_73, Applier)) {
                invalidApplier();
              }
              $composer_48.startReusableNode_jjgeyp_k$();
              if ($composer_48.get_inserting_25mlsw_k$()) {
                $composer_48.createNode_ahrd54_k$(tmp0_12);
              } else {
                $composer_48.useNode_io5s9l_k$();
              }
              var $this$ReusableComposeNode_8 = _Updater___init__impl__rbfxm8($composer_48);
              Updater__set_impl_v7kwss($this$ReusableComposeNode_8, measurePolicy_8, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
              Updater__set_impl_v7kwss($this$ReusableComposeNode_8, localMap_8, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
              Updater__set_impl_v7kwss($this$ReusableComposeNode_8, compositeKeyHash_8, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
              Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_8, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
              Updater__set_impl_v7kwss($this$ReusableComposeNode_8, materialized_8, Companion_getInstance_2().get_SetModifier_6tz580_k$());
              var $composer_49 = $composer_48;
              BoxScopeInstance_getInstance();
              var $composer_50 = $composer_49;
              sourceInformationMarkerStart($composer_50, 118966625, 'C546@23035L455:AuthAndAgendaScreens.kt#bisg3d');
              var tmp0_text = matchingEvent.get_weekShortLabel_oh86q3_k$();
              var tmp1_fontSize_0 = get_sp(8);
              var tmp2_fontWeight = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
              var tmp3_overflow = Companion_getInstance_5().get_Clip_ypf2ge_k$();
              var tmp_74 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
              var tmp_75 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
              Text(tmp0_text, null, fg, null, tmp1_fontSize_0, null, tmp2_fontWeight, null, tmp_74, null, null, tmp_75, tmp3_overflow, false, 1, 0, null, null, $composer_50, 1597440, 24960, 241578);
              sourceInformationMarkerEnd($composer_50);
              $composer_48.endNode_3m0yfn_k$();
              $composer_45.endReplaceGroup_ek144q_k$();
            } else {
              $composer_45.startReplaceGroup_5hh8aj_k$(-1308954234);
              $composer_45.endReplaceGroup_ek144q_k$();
            }
            sourceInformationMarkerEnd($composer_45);
            $composer_43.endNode_3m0yfn_k$();
          }
          $composer_40.endReplaceGroup_ek144q_k$();
          sourceInformationMarkerEnd($composer_40);
          $composer_38.endNode_3m0yfn_k$();
        }
         while (!(element_1 === last));
      $composer_25.endReplaceGroup_ek144q_k$();
      sourceInformationMarkerEnd($composer_25);
      $composer_23.endNode_3m0yfn_k$();
      var tmp_76 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$115 = _Dp___init__impl__ms3zkb(18);
      Spacer(height(tmp_76, tmp$ret$115), $composer_10, 6);
      var tmp_77 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$116 = _Dp___init__impl__ms3zkb(16);
      var tmp_78 = background(clip(tmp_77, RoundedCornerShape(tmp$ret$116)), colors.get_accentContainer_6iiayz_k$());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_79 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$118 = _Dp___init__impl__ms3zkb(14);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_19 = padding(tmp_78, tmp_79, tmp$ret$118);
      var verticalArrangement_3 = null;
      var horizontalAlignment_3 = null;
      var $composer_51 = $composer_10;
      if (!((6 & 1) === 0))
        modifier_19 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_3 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_3 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_9 = columnMeasurePolicy(verticalArrangement_3, horizontalAlignment_3, $composer_51, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_20 = modifier_19;
      var $composer_52 = $composer_51;
      if (!((0 & 2) === 0))
        modifier_20 = Companion_getInstance_0();
      var compositeKeyHash_9 = get_currentCompositeKeyHashCode($composer_52, 0).hashCode();
      var localMap_9 = $composer_52.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_9 = materialize($composer_52, modifier_20);
      var tmp0_13 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_53 = $composer_52;
      var tmp_80 = $composer_53.get_applier_bupu8u_k$();
      if (!isInterface(tmp_80, Applier)) {
        invalidApplier();
      }
      $composer_53.startReusableNode_jjgeyp_k$();
      if ($composer_53.get_inserting_25mlsw_k$()) {
        $composer_53.createNode_ahrd54_k$(tmp0_13);
      } else {
        $composer_53.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_9 = _Updater___init__impl__rbfxm8($composer_53);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_9, measurePolicy_9, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_9, localMap_9, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_9, compositeKeyHash_9, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_9, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_9, materialized_9, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_54 = $composer_53;
      ColumnScopeInstance_getInstance();
      var $composer_55 = $composer_54;
      sourceInformationMarkerStart($composer_55, 202439961, 'C572@24069L220,578@24306L40,579@24363L192:AuthAndAgendaScreens.kt#bisg3d');
      var tmp_81 = colors.get_accentContent_6vke99_k$();
      var tmp_82 = get_sp(14);
      var tmp_83 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_84 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_85 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_86 = _TextOverflow___init__impl__obguoe(0);
      Text('Una semana en equilibrio', null, tmp_81, null, tmp_82, null, tmp_83, null, tmp_84, null, null, tmp_85, tmp_86, false, 0, 0, null, null, $composer_55, 1597446, 0, 262058);
      var tmp_87 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$125 = _Dp___init__impl__ms3zkb(4);
      Spacer(height(tmp_87, tmp$ret$125), $composer_55, 6);
      var tmp_88 = '' + weekEvents.get_size_woubt6_k$() + ' citas \xB7 S\xE1bado y domingo libres';
      var tmp_89 = colors.get_textSecondary_kl22jf_k$();
      var tmp_90 = get_sp(11);
      var tmp_91 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_92 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_93 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp_88, null, tmp_89, null, tmp_90, null, null, null, tmp_91, null, null, tmp_92, tmp_93, false, 0, 0, null, null, $composer_55, 24576, 0, 262122);
      sourceInformationMarkerEnd($composer_55);
      $composer_53.endNode_3m0yfn_k$();
      var tmp_94 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$126 = _Dp___init__impl__ms3zkb(16);
      Spacer(height(tmp_94, tmp$ret$126), $composer_10, 6);
      sourceInformationMarkerEnd($composer_10);
      $composer_8.endNode_3m0yfn_k$();
      var tmp_95 = NotasTab_AGENDA_getInstance();
      sourceInformationMarkerStart($composer_5, 160243893, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_4 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_4 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_96;
      if (invalid_4 || it_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_4 = NotasAppState$navigateToTab$ref_0(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value_4);
        tmp_96 = value_4;
      } else {
        tmp_96 = it_4;
      }
      var tmp1_group = tmp_96;
      sourceInformationMarkerEnd($composer_5);
      NotasBottomNavigation(tmp_95, tmp1_group, null, $composer_5, 6, 4);
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Notas03AgendaSemanaScreen$lambda_4(state, $changed));
    }
  }
  function Notas04AgendaDiaScreen(state, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-772691615);
    sourceInformation($composer_0, 'C(Notas04AgendaDiaScreen)597@24865L6,610@25212L6890:AuthAndAgendaScreens.kt#bisg3d');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(state) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-772691615, $dirty, -1, 'com.notas.agenda.ui.screens.Notas04AgendaDiaScreen (AuthAndAgendaScreens.kt:596)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      var weekDays = listOf([to('L', 16), to('M', 17), to('X', 18), to('J', 19), to('V', 20), to('S', 21), to('D', 22)]);
      // Inline function 'kotlin.let' call
      var it = state.get_selectedDayOfMonth_5gc2j3_k$();
      var selectedDay = (16 <= it ? it <= 22 : false) ? it : 16;
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = state.get_appointments_toel8d_k$();
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (element.get_dayOfMonth_vblo3a_k$() === selectedDay) {
          destination.add_utx5q5_k$(element);
        }
      }
      var dayAppointments = destination;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = background(fillMaxSize(Companion_getInstance_0()), colors.get_background_8l4942_k$());
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0_0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      var tmp0_1 = ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -1581163793, 'C615@25335L19,621@25597L50,616@25363L295,627@25768L21,624@25668L6297,780@32065L20,778@31975L121:AuthAndAgendaScreens.kt#bisg3d');
      NotasTopStatusBar(null, $composer_5, 0, 1);
      var tmp_0 = dayNameForNov2026(selectedDay) + ', ' + selectedDay + ' de noviembre';
      var tmp_1 = NotasIcons_getInstance().get_Bell_wnyy5o_k$();
      sourceInformationMarkerStart($composer_5, -328098275, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_0 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = Notas04AgendaDiaScreen$lambda(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it_0;
      }
      var tmp0_group = tmp_2;
      sourceInformationMarkerEnd($composer_5);
      NotasHeader('NOTAS', 'Tu agenda', tmp_0, tmp_1, null, tmp0_group, null, null, null, $composer_5, 54, 464);
      var tmp_3 = tmp0_1.weight$default_gbkz97_k$(Companion_getInstance_0(), 1.0);
      var tmp_4 = verticalScroll(tmp_3, rememberScrollState(0, $composer_5, 0, 1));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$15 = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = padding(tmp_4, tmp$ret$15);
      var verticalArrangement_0 = null;
      var horizontalAlignment_0 = null;
      var $composer_6 = $composer_5;
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_0 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_0 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement_0, horizontalAlignment_0, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      var tmp0_2 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      var tmp_5 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_5, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_2);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_9 = $composer_8;
      ColumnScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, -506847968, 'C630@25861L40,634@26057L224,631@25914L382,641@26309L41,644@26403L2040,688@28457L41,691@28557L1050,718@29621L41,719@29675L193,725@29881L41,768@31647L40,771@31786L30,769@31700L201,775@31914L41:AuthAndAgendaScreens.kt#bisg3d');
      var tmp_6 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$22 = _Dp___init__impl__ms3zkb(6);
      Spacer(height(tmp_6, tmp$ret$22), $composer_10, 6);
      var tmp_7 = listOf(['Mes', 'Semana', 'D\xEDa']);
      sourceInformationMarkerStart($composer_10, 1646218453, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_1 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_8;
      if (invalid_0 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = Notas04AgendaDiaScreen$lambda_0(state);
        $composer_10.updateRememberedValue_l1wh71_k$(value_0);
        tmp_8 = value_0;
      } else {
        tmp_8 = it_1;
      }
      var tmp0_group_0 = tmp_8;
      sourceInformationMarkerEnd($composer_10);
      var tmp_9 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_10 = _Dp___init__impl__ms3zkb(0.0);
      NotasSegmentedControl(tmp_7, 2, tmp0_group_0, tmp_9, tmp_10, null, $composer_10, 54, 56);
      var tmp_11 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$27 = _Dp___init__impl__ms3zkb(18);
      Spacer(height(tmp_11, tmp$ret$27), $composer_10, 6);
      var tmp_12 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$28 = _Dp___init__impl__ms3zkb(70);
      var tmp_13 = height(tmp_12, tmp$ret$28);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$29 = _Dp___init__impl__ms3zkb(16);
      var tmp_14 = background(clip(tmp_13, RoundedCornerShape(tmp$ret$29)), colors.get_surface_ya87t7_k$());
      var tmp_15;
      if (colors.get_isDark_evw91l_k$()) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_15 = _Dp___init__impl__ms3zkb(1);
      } else {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_15 = _Dp___init__impl__ms3zkb(0.5);
      }
      var tmp_16 = tmp_15;
      var tmp_17 = colors.get_border_pp3j8c_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$32 = _Dp___init__impl__ms3zkb(16);
      var tmp_18 = border(tmp_14, tmp_16, tmp_17, RoundedCornerShape(tmp$ret$32));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_19 = _Dp___init__impl__ms3zkb(6);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$34 = _Dp___init__impl__ms3zkb(6);
      var tmp0_3 = padding(tmp_18, tmp_19, tmp$ret$34);
      var tmp_20 = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$35 = _Dp___init__impl__ms3zkb(4);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_3 = tmp0_3;
      var horizontalArrangement = tmp_20.spacedBy_wt7oji_k$(tmp$ret$35);
      var verticalAlignment = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_11 = $composer_10;
      if (!((0 & 1) === 0))
        modifier_3 = Companion_getInstance_0();
      if (!((0 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((0 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_1 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_11, 14 & 432 >> 3 | 112 & 432 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_12 = $composer_11;
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_0();
      var compositeKeyHash_1 = get_currentCompositeKeyHashCode($composer_12, 0).hashCode();
      var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_1 = materialize($composer_12, modifier_4);
      var tmp0_4 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_13 = $composer_12;
      var tmp_21 = $composer_13.get_applier_bupu8u_k$();
      if (!isInterface(tmp_21, Applier)) {
        invalidApplier();
      }
      $composer_13.startReusableNode_jjgeyp_k$();
      if ($composer_13.get_inserting_25mlsw_k$()) {
        $composer_13.createNode_ahrd54_k$(tmp0_4);
      } else {
        $composer_13.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, compositeKeyHash_1, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_1, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_14 = $composer_13;
      var tmp0_5 = RowScopeInstance_getInstance();
      var $composer_15 = $composer_14;
      sourceInformationMarkerStart($composer_15, -854357659, 'C:AuthAndAgendaScreens.kt#bisg3d');
      $composer_15.startReplaceGroup_5hh8aj_k$(-1551580299);
      sourceInformation($composer_15, '*667@27521L37,661@27188L1223');
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = weekDays.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
        var letter = element_0.component1_7eebsc_k$();
        var dayNum = element_0.component2_7eebsb_k$();
        var selected = dayNum === selectedDay;
        var tmp_22 = tmp0_5.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$44 = _Dp___init__impl__ms3zkb(58);
        var tmp_23 = height(tmp_22, tmp$ret$44);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$45 = _Dp___init__impl__ms3zkb(13);
        var tmp_24 = background(clip(tmp_23, RoundedCornerShape(tmp$ret$45)), selected ? colors.get_accentButton_k5y1fw_k$() : Companion_getInstance_3().get_Transparent_if5ln4_k$());
        sourceInformationMarkerStart($composer_15, 1764136829, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = !!(($dirty & 14) === 4 | $composer_0.changed_kpusro_k$(dayNum));
        // Inline function 'kotlin.let' call
        var it_2 = $composer_15.rememberedValue_4dg93v_k$();
        var tmp_25;
        if (invalid_1 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_1 = Notas04AgendaDiaScreen$lambda_1(state, dayNum);
          $composer_15.updateRememberedValue_l1wh71_k$(value_1);
          tmp_25 = value_1;
        } else {
          tmp_25 = it_2;
        }
        var tmp0_group_1 = tmp_25;
        sourceInformationMarkerEnd($composer_15);
        var tmp0_modifier = clickable(tmp_24, VOID, VOID, VOID, VOID, tmp0_group_1);
        var tmp1_horizontalAlignment = Companion_getInstance_1().get_CenterHorizontally_97ab0v_k$();
        // Inline function 'androidx.compose.foundation.layout.Column' call
        var modifier_5 = tmp0_modifier;
        var verticalArrangement_1 = Arrangement_getInstance().get_Center_3arb0i_k$();
        var horizontalAlignment_1 = tmp1_horizontalAlignment;
        var $composer_16 = $composer_15;
        if (!((0 & 1) === 0))
          modifier_5 = Companion_getInstance_0();
        if (!((0 & 2) === 0))
          verticalArrangement_1 = Arrangement_getInstance().get_Top_18jj1w_k$();
        if (!((0 & 4) === 0))
          horizontalAlignment_1 = Companion_getInstance_1().get_Start_ih4i6x_k$();
        var measurePolicy_2 = columnMeasurePolicy(verticalArrangement_1, horizontalAlignment_1, $composer_16, 14 & 432 >> 3 | 112 & 432 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_6 = modifier_5;
        var $composer_17 = $composer_16;
        if (!((0 & 2) === 0))
          modifier_6 = Companion_getInstance_0();
        var compositeKeyHash_2 = get_currentCompositeKeyHashCode($composer_17, 0).hashCode();
        var localMap_2 = $composer_17.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized_2 = materialize($composer_17, modifier_6);
        var tmp0_6 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_18 = $composer_17;
        var tmp_26 = $composer_18.get_applier_bupu8u_k$();
        if (!isInterface(tmp_26, Applier)) {
          invalidApplier();
        }
        $composer_18.startReusableNode_jjgeyp_k$();
        if ($composer_18.get_inserting_25mlsw_k$()) {
          $composer_18.createNode_ahrd54_k$(tmp0_6);
        } else {
          $composer_18.useNode_io5s9l_k$();
        }
        var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_18);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, compositeKeyHash_2, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_2, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        var $composer_19 = $composer_18;
        ColumnScopeInstance_getInstance();
        var $composer_20 = $composer_19;
        sourceInformationMarkerStart($composer_20, -1125335658, 'C671@27750L269,677@28044L40,678@28109L280:AuthAndAgendaScreens.kt#bisg3d');
        var tmp_27 = selected ? Companion_getInstance_3().get_White_xpp3qf_k$() : colors.get_textSecondary_kl22jf_k$();
        var tmp_28 = get_sp(10);
        var tmp_29 = Companion_getInstance_4().get_Medium_1fiba6_k$();
        var tmp_30 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_31 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_32 = _TextOverflow___init__impl__obguoe(0);
        Text(letter, null, tmp_27, null, tmp_28, null, tmp_29, null, tmp_30, null, null, tmp_31, tmp_32, false, 0, 0, null, null, $composer_20, 1597440, 0, 262058);
        var tmp_33 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$56 = _Dp___init__impl__ms3zkb(5);
        Spacer(height(tmp_33, tmp$ret$56), $composer_20, 6);
        var tmp_34 = dayNum.toString();
        var tmp_35 = selected ? Companion_getInstance_3().get_White_xpp3qf_k$() : colors.get_textPrimary_mf1tv7_k$();
        var tmp_36 = get_sp(16);
        var tmp_37 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
        var tmp_38 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_39 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_40 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_34, null, tmp_35, null, tmp_36, null, tmp_37, null, tmp_38, null, null, tmp_39, tmp_40, false, 0, 0, null, null, $composer_20, 1597440, 0, 262058);
        sourceInformationMarkerEnd($composer_20);
        $composer_18.endNode_3m0yfn_k$();
      }
      $composer_15.endReplaceGroup_ek144q_k$();
      sourceInformationMarkerEnd($composer_15);
      $composer_13.endNode_3m0yfn_k$();
      var tmp_41 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$57 = _Dp___init__impl__ms3zkb(18);
      Spacer(height(tmp_41, tmp$ret$57), $composer_10, 6);
      var tmp_42 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$58 = _Dp___init__impl__ms3zkb(66);
      var tmp_43 = height(tmp_42, tmp$ret$58);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$59 = _Dp___init__impl__ms3zkb(16);
      var tmp_44 = background(clip(tmp_43, RoundedCornerShape(tmp$ret$59)), colors.get_successContainer_dqfg6m_k$());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_45 = _Dp___init__impl__ms3zkb(17);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$61 = _Dp___init__impl__ms3zkb(10);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_7 = padding(tmp_44, tmp_45, tmp$ret$61);
      var verticalArrangement_2 = Arrangement_getInstance().get_Center_3arb0i_k$();
      var horizontalAlignment_2 = null;
      var $composer_21 = $composer_10;
      if (!((4 & 1) === 0))
        modifier_7 = Companion_getInstance_0();
      if (!((4 & 2) === 0))
        verticalArrangement_2 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((4 & 4) === 0))
        horizontalAlignment_2 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_3 = columnMeasurePolicy(verticalArrangement_2, horizontalAlignment_2, $composer_21, 14 & 48 >> 3 | 112 & 48 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_8 = modifier_7;
      var $composer_22 = $composer_21;
      if (!((0 & 2) === 0))
        modifier_8 = Companion_getInstance_0();
      var compositeKeyHash_3 = get_currentCompositeKeyHashCode($composer_22, 0).hashCode();
      var localMap_3 = $composer_22.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_3 = materialize($composer_22, modifier_8);
      var tmp0_7 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_23 = $composer_22;
      var tmp_46 = $composer_23.get_applier_bupu8u_k$();
      if (!isInterface(tmp_46, Applier)) {
        invalidApplier();
      }
      $composer_23.startReusableNode_jjgeyp_k$();
      if ($composer_23.get_inserting_25mlsw_k$()) {
        $composer_23.createNode_ahrd54_k$(tmp0_7);
      } else {
        $composer_23.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_3 = _Updater___init__impl__rbfxm8($composer_23);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, measurePolicy_3, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, localMap_3, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, compositeKeyHash_3, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_3, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, materialized_3, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_24 = $composer_23;
      ColumnScopeInstance_getInstance();
      var $composer_25 = $composer_24;
      sourceInformationMarkerStart($composer_25, 678620727, 'C700@28940L226,706@29183L40,707@29240L353:AuthAndAgendaScreens.kt#bisg3d');
      var tmp_47 = '' + dayAppointments.get_size_woubt6_k$() + ' citas';
      var tmp_48 = colors.get_successContent_tyisdi_k$();
      var tmp_49 = get_sp(21);
      var tmp_50 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_51 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_52 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_53 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp_47, null, tmp_48, null, tmp_49, null, tmp_50, null, tmp_51, null, null, tmp_52, tmp_53, false, 0, 0, null, null, $composer_25, 1597440, 0, 262058);
      var tmp_54 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$68 = _Dp___init__impl__ms3zkb(2);
      Spacer(height(tmp_54, tmp$ret$68), $composer_25, 6);
      var tmp_55;
      if (dayAppointments.isEmpty_y1axqb_k$()) {
        tmp_55 = 'D\xEDa despejado para avanzar a tu ritmo';
      } else {
        tmp_55 = '2 h 15 min para conectar con tu equipo';
      }
      var tmp_56 = tmp_55;
      var tmp_57 = colors.get_successContent_tyisdi_k$();
      var tmp_58 = get_sp(11);
      var tmp_59 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_60 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_61 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp_56, null, tmp_57, null, tmp_58, null, null, null, tmp_59, null, null, tmp_60, tmp_61, false, 0, 0, null, null, $composer_25, 24576, 0, 262122);
      sourceInformationMarkerEnd($composer_25);
      $composer_23.endNode_3m0yfn_k$();
      var tmp_62 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$69 = _Dp___init__impl__ms3zkb(20);
      Spacer(height(tmp_62, tmp$ret$69), $composer_10, 6);
      var tmp_63 = colors.get_textSecondary_kl22jf_k$();
      var tmp_64 = get_sp(10);
      var tmp_65 = Companion_getInstance_4().get_Bold_wnz5ke_k$();
      var tmp_66 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_67 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_68 = _TextOverflow___init__impl__obguoe(0);
      Text('TU D\xCDA, DE UN VISTAZO', null, tmp_63, null, tmp_64, null, tmp_65, null, tmp_66, null, null, tmp_67, tmp_68, false, 0, 0, null, null, $composer_10, 1597446, 0, 262058);
      var tmp_69 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$70 = _Dp___init__impl__ms3zkb(12);
      Spacer(height(tmp_69, tmp$ret$70), $composer_10, 6);
      if (dayAppointments.isEmpty_y1axqb_k$()) {
        $composer_10.startReplaceGroup_5hh8aj_k$(-502945782);
        sourceInformation($composer_10, '728@29985L547');
        var tmp_70 = fillMaxWidth(Companion_getInstance_0());
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$71 = _Dp___init__impl__ms3zkb(16);
        var tmp_71 = background(clip(tmp_70, RoundedCornerShape(tmp$ret$71)), colors.get_surface_ya87t7_k$());
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$72 = _Dp___init__impl__ms3zkb(20);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier_9 = padding_1(tmp_71, tmp$ret$72);
        var contentAlignment = Companion_getInstance_1().get_Center_3arb0i_k$();
        var propagateMinConstraints = false;
        var $composer_26 = $composer_10;
        if (!((4 & 1) === 0))
          modifier_9 = Companion_getInstance_0();
        if (!((4 & 2) === 0))
          contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
        if (!((4 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy_4 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_10 = modifier_9;
        var $composer_27 = $composer_26;
        if (!((0 & 2) === 0))
          modifier_10 = Companion_getInstance_0();
        var compositeKeyHash_4 = get_currentCompositeKeyHashCode($composer_27, 0).hashCode();
        var localMap_4 = $composer_27.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized_4 = materialize($composer_27, modifier_10);
        var tmp0_8 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_28 = $composer_27;
        var tmp_72 = $composer_28.get_applier_bupu8u_k$();
        if (!isInterface(tmp_72, Applier)) {
          invalidApplier();
        }
        $composer_28.startReusableNode_jjgeyp_k$();
        if ($composer_28.get_inserting_25mlsw_k$()) {
          $composer_28.createNode_ahrd54_k$(tmp0_8);
        } else {
          $composer_28.useNode_io5s9l_k$();
        }
        var $this$ReusableComposeNode_4 = _Updater___init__impl__rbfxm8($composer_28);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_4, measurePolicy_4, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_4, localMap_4, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_4, compositeKeyHash_4, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_4, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_4, materialized_4, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        var $composer_29 = $composer_28;
        BoxScopeInstance_getInstance();
        var $composer_30 = $composer_29;
        sourceInformationMarkerStart($composer_30, -746107158, 'C736@30317L197:AuthAndAgendaScreens.kt#bisg3d');
        var tmp_73 = colors.get_textSecondary_kl22jf_k$();
        var tmp_74 = get_sp(13);
        var tmp_75 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_76 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_77 = _TextOverflow___init__impl__obguoe(0);
        Text('No hay citas registradas para este d\xEDa.', null, tmp_73, null, tmp_74, null, null, null, tmp_75, null, null, tmp_76, tmp_77, false, 0, 0, null, null, $composer_30, 24582, 0, 262122);
        sourceInformationMarkerEnd($composer_30);
        $composer_28.endNode_3m0yfn_k$();
        $composer_10.endReplaceGroup_ek144q_k$();
      } else {
        $composer_10.startReplaceGroup_5hh8aj_k$(-502349900);
        sourceInformation($composer_10, '*744@30623L978');
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_1 = dayAppointments.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_1.hasNext_bitz1p_k$()) {
          var element_1 = _iterator__ex2g4s_1.next_20eer_k$();
          var tmp_78 = fillMaxWidth(Companion_getInstance_0());
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$81 = _Dp___init__impl__ms3zkb(14);
          // Inline function 'androidx.compose.foundation.layout.Row' call
          var modifier_11 = padding_0(tmp_78, VOID, VOID, VOID, tmp$ret$81);
          var horizontalArrangement_0 = null;
          var verticalAlignment_0 = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
          var $composer_31 = $composer_10;
          if (!((2 & 1) === 0))
            modifier_11 = Companion_getInstance_0();
          if (!((2 & 2) === 0))
            horizontalArrangement_0 = Arrangement_getInstance().get_Start_ih4i6x_k$();
          if (!((2 & 4) === 0))
            verticalAlignment_0 = Companion_getInstance_1().get_Top_18jj1w_k$();
          var measurePolicy_5 = rowMeasurePolicy(horizontalArrangement_0, verticalAlignment_0, $composer_31, 14 & 390 >> 3 | 112 & 390 >> 3);
          // Inline function 'androidx.compose.ui.layout.Layout' call
          var modifier_12 = modifier_11;
          var $composer_32 = $composer_31;
          if (!((0 & 2) === 0))
            modifier_12 = Companion_getInstance_0();
          var compositeKeyHash_5 = get_currentCompositeKeyHashCode($composer_32, 0).hashCode();
          var localMap_5 = $composer_32.get_currentCompositionLocalMap_fmcf79_k$();
          var materialized_5 = materialize($composer_32, modifier_12);
          var tmp0_9 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
          // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
          var $composer_33 = $composer_32;
          var tmp_79 = $composer_33.get_applier_bupu8u_k$();
          if (!isInterface(tmp_79, Applier)) {
            invalidApplier();
          }
          $composer_33.startReusableNode_jjgeyp_k$();
          if ($composer_33.get_inserting_25mlsw_k$()) {
            $composer_33.createNode_ahrd54_k$(tmp0_9);
          } else {
            $composer_33.useNode_io5s9l_k$();
          }
          var $this$ReusableComposeNode_5 = _Updater___init__impl__rbfxm8($composer_33);
          Updater__set_impl_v7kwss($this$ReusableComposeNode_5, measurePolicy_5, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_5, localMap_5, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_5, compositeKeyHash_5, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
          Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_5, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode_5, materialized_5, Companion_getInstance_2().get_SetModifier_6tz580_k$());
          var $composer_34 = $composer_33;
          var tmp0_10 = RowScopeInstance_getInstance();
          var $composer_35 = $composer_34;
          sourceInformationMarkerStart($composer_35, 879977184, 'C750@30890L307,760@31411L37,757@31222L357:AuthAndAgendaScreens.kt#bisg3d');
          var tmp0_text = element_1.get_startTime_qp7d5m_k$();
          var tmp1_color = colors.get_textSecondary_kl22jf_k$();
          var tmp2_fontSize = get_sp(11);
          var tmp3_fontWeight = Companion_getInstance_4().get_Medium_1fiba6_k$();
          var tmp_80 = Companion_getInstance_0();
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$88 = _Dp___init__impl__ms3zkb(56);
          var tmp4_modifier = width(tmp_80, tmp$ret$88);
          var tmp_81 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_82 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_83 = _TextOverflow___init__impl__obguoe(0);
          Text(tmp0_text, tmp4_modifier, tmp1_color, null, tmp2_fontSize, null, tmp3_fontWeight, null, tmp_81, null, null, tmp_82, tmp_83, false, 0, 0, null, null, $composer_35, 1597488, 0, 262056);
          var tmp_84 = element_1.get_durationText_rgrhee_k$() + ' \xB7 ' + element_1.get_location_d3s02_k$();
          sourceInformationMarkerStart($composer_35, -1772712937, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_2 = !!(($dirty & 14) === 4 | $composer_0.changed_ga7h3f_k$(element_1));
          // Inline function 'kotlin.let' call
          var it_3 = $composer_35.rememberedValue_4dg93v_k$();
          var tmp_85;
          if (invalid_2 || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
            var value_2 = Notas04AgendaDiaScreen$lambda_2(state, element_1);
            $composer_35.updateRememberedValue_l1wh71_k$(value_2);
            tmp_85 = value_2;
          } else {
            tmp_85 = it_3;
          }
          var tmp0_group_2 = tmp_85;
          sourceInformationMarkerEnd($composer_35);
          var tmp_86 = tmp0_10.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0);
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$93 = _Dp___init__impl__ms3zkb(82);
          AppointmentSummaryCard(element_1, tmp_84, tmp0_group_2, tmp_86, tmp$ret$93, $composer_35, 24576, 0);
          sourceInformationMarkerEnd($composer_35);
          $composer_33.endNode_3m0yfn_k$();
        }
        $composer_10.endReplaceGroup_ek144q_k$();
      }
      var tmp_87 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$94 = _Dp___init__impl__ms3zkb(8);
      Spacer(height(tmp_87, tmp$ret$94), $composer_10, 6);
      sourceInformationMarkerStart($composer_10, 1646401587, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_4 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_88;
      if (invalid_3 || it_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_3 = Notas04AgendaDiaScreen$lambda_3(state);
        $composer_10.updateRememberedValue_l1wh71_k$(value_3);
        tmp_88 = value_3;
      } else {
        tmp_88 = it_4;
      }
      var tmp1_group = tmp_88;
      sourceInformationMarkerEnd($composer_10);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_89 = _Dp___init__impl__ms3zkb(48);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$100 = _Dp___init__impl__ms3zkb(13);
      NotasPrimaryButton('+  Nueva cita', tmp1_group, null, tmp_89, tmp$ret$100, $composer_10, 27654, 4);
      var tmp_90 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$101 = _Dp___init__impl__ms3zkb(16);
      Spacer(height(tmp_90, tmp$ret$101), $composer_10, 6);
      sourceInformationMarkerEnd($composer_10);
      $composer_8.endNode_3m0yfn_k$();
      var tmp_91 = NotasTab_AGENDA_getInstance();
      sourceInformationMarkerStart($composer_5, -327891329, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_4 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_5 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_92;
      if (invalid_4 || it_5 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_4 = NotasAppState$navigateToTab$ref_1(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value_4);
        tmp_92 = value_4;
      } else {
        tmp_92 = it_5;
      }
      var tmp1_group_0 = tmp_92;
      sourceInformationMarkerEnd($composer_5);
      NotasBottomNavigation(tmp_91, tmp1_group_0, null, $composer_5, 6, 4);
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Notas04AgendaDiaScreen$lambda_4(state, $changed));
    }
  }
  function AppointmentSummaryCard(appointment, subtitle, onClick, modifier, height_0, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var height_1 = {_v: new Dp(height_0)};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1911542782);
    sourceInformation($composer_0, 'C(AppointmentSummaryCard)P(!1,4,3,2,1:c#ui.unit.Dp)793@32351L6,794@32388L36,795@32429L1416:AuthAndAgendaScreens.kt#bisg3d');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(appointment) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(subtitle) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_i8bvic_k$(_Dp___get_value__impl__geb1vb(height_1._v.value_1)) ? 16384 : 8192);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 9363) === 9362), $dirty & 1)) {
      if (!(($default & 8) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (!(($default & 16) === 0)) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(72);
        height_1._v = new Dp(tmp$ret$0);
      }
      if (isTraceInProgress()) {
        traceEventStart(-1911542782, $dirty, -1, 'com.notas.agenda.ui.screens.AppointmentSummaryCard (AuthAndAgendaScreens.kt:792)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      var indicatorColor = categoryColors(appointment.get_category_uyv41l_k$(), $composer_0, 0).component2_7eebsb_k$().value_1;
      var tmp = height(fillMaxWidth(modifier_0._v), height_1._v.value_1);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(16);
      var tmp_0 = background(clip(tmp, RoundedCornerShape(tmp$ret$1)), colors.get_surface_ya87t7_k$());
      var tmp_1;
      if (colors.get_isDark_evw91l_k$()) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_1 = _Dp___init__impl__ms3zkb(1);
      } else {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_1 = _Dp___init__impl__ms3zkb(0.5);
      }
      var tmp_2 = tmp_1;
      var tmp_3 = colors.get_border_pp3j8c_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$4 = _Dp___init__impl__ms3zkb(16);
      var tmp_4 = clickable(border(tmp_0, tmp_2, tmp_3, RoundedCornerShape(tmp$ret$4)), VOID, VOID, VOID, VOID, onClick);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$5 = _Dp___init__impl__ms3zkb(14);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_1 = padding(tmp_4, VOID, tmp$ret$5);
      var horizontalArrangement = null;
      var verticalAlignment = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_1 = $composer_0;
      if (!((2 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((2 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((2 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 384 >> 3 | 112 & 384 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_2);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp_5 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_5, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      var tmp0_0 = RowScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 533140765, 'C810@32943L207,817@33159L40,818@33208L631:AuthAndAgendaScreens.kt#bisg3d');
      var tmp_6 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$12 = _Dp___init__impl__ms3zkb(4);
      var tmp_7 = width(tmp_6, tmp$ret$12);
      var tmp0_1 = height_1._v.value_1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      // Inline function 'androidx.compose.ui.unit.Dp.minus' call
      var other = _Dp___init__impl__ms3zkb(28);
      var tmp$ret$14 = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0_1) - _Dp___get_value__impl__geb1vb(other));
      var tmp_8 = height(tmp_7, tmp$ret$14);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$15 = _Dp___init__impl__ms3zkb(2);
      Box(background(clip(tmp_8, RoundedCornerShape(tmp$ret$15)), indicatorColor), $composer_5, 0);
      var tmp_9 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$16 = _Dp___init__impl__ms3zkb(12);
      Spacer(width(tmp_9, tmp$ret$16), $composer_5, 6);
      var tmp_10 = tmp0_0.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$17 = _Dp___init__impl__ms3zkb(14);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_3 = padding_0(tmp_10, VOID, VOID, tmp$ret$17);
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_6 = $composer_5;
      if (!((6 & 1) === 0))
        modifier_3 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_7 = $composer_6;
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_4);
      var tmp0_2 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      var tmp_11 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_11, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_2);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_9 = $composer_8;
      ColumnScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, 839100324, 'C819@33282L269,827@33564L40,828@33617L212:AuthAndAgendaScreens.kt#bisg3d');
      var tmp0_text = appointment.get_title_iz32un_k$();
      var tmp1_color = colors.get_textPrimary_mf1tv7_k$();
      var tmp2_fontSize = get_sp(14);
      var tmp3_fontWeight = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp4_overflow = Companion_getInstance_5().get_Ellipsis_8ygjpt_k$();
      var tmp_12 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      Text(tmp0_text, null, tmp1_color, null, tmp2_fontSize, null, tmp3_fontWeight, null, tmp_12, null, null, tmp_13, tmp4_overflow, false, 1, 0, null, null, $composer_10, 1597440, 24960, 241578);
      var tmp_14 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$24 = _Dp___init__impl__ms3zkb(5);
      Spacer(height(tmp_14, tmp$ret$24), $composer_10, 6);
      var tmp5_color = colors.get_textSecondary_kl22jf_k$();
      var tmp6_fontSize = get_sp(11);
      var tmp7_overflow = Companion_getInstance_5().get_Ellipsis_8ygjpt_k$();
      var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_16 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      Text(subtitle, null, tmp5_color, null, tmp6_fontSize, null, null, null, tmp_15, null, null, tmp_16, tmp7_overflow, false, 1, 0, null, null, $composer_10, 24576 | 14 & $dirty >> 3, 24960, 241642);
      sourceInformationMarkerEnd($composer_10);
      $composer_8.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AppointmentSummaryCard$lambda(appointment, subtitle, onClick, modifier_0, height_1, $changed, $default));
    }
  }
  function Notas05NuevaCitaScreen(state, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(453783308);
    sourceInformation($composer_0, 'C(Notas05NuevaCitaScreen)841@33916L111:AuthAndAgendaScreens.kt#bisg3d');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(state) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(453783308, $dirty, -1, 'com.notas.agenda.ui.screens.Notas05NuevaCitaScreen (AuthAndAgendaScreens.kt:840)');
      }
      AppointmentFormScreen(state, false, null, $composer_0, 432 | 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Notas05NuevaCitaScreen$lambda(state, $changed));
    }
  }
  function Notas06EditarCitaScreen(state, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1619075433);
    sourceInformation($composer_0, 'C(Notas06EditarCitaScreen)852@34227L114:AuthAndAgendaScreens.kt#bisg3d');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(state) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1619075433, $dirty, -1, 'com.notas.agenda.ui.screens.Notas06EditarCitaScreen (AuthAndAgendaScreens.kt:849)');
      }
      var tmp0 = state.get_appointments_toel8d_k$();
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          if (element.get_id_kntnx8_k$() === state.get_editingAppointmentId_p80uqz_k$()) {
            tmp$ret$0 = element;
            break $l$block;
          }
        }
        tmp$ret$0 = null;
      }
      var tmp0_elvis_lhs = tmp$ret$0;
      var existing = tmp0_elvis_lhs == null ? first(state.get_appointments_toel8d_k$()) : tmp0_elvis_lhs;
      AppointmentFormScreen(state, true, existing, $composer_0, 48 | 14 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Notas06EditarCitaScreen$lambda(state, $changed));
    }
  }
  function AppointmentFormScreen(state, isEdit, existingAppointment, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(480850147);
    sourceInformation($composer_0, 'C(AppointmentFormScreen)P(2,1)865@34514L6,866@34538L127,869@34686L140,872@34848L115,875@34983L113,878@35117L134,881@35269L141,884@35433L118,888@35557L5402:AuthAndAgendaScreens.kt#bisg3d');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(state) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(isEdit) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(existingAppointment) ? 256 : 128);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 147) === 146), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(480850147, $dirty, -1, 'com.notas.agenda.ui.screens.AppointmentFormScreen (AuthAndAgendaScreens.kt:864)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      var tmp0_remember$arg$1 = existingAppointment == null ? null : existingAppointment.get_id_kntnx8_k$();
      sourceInformationMarkerStart($composer_0, -1759471038, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 112) === 32 | $composer_0.changed_ga7h3f_k$(tmp0_remember$arg$1));
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp1_elvis_lhs = existingAppointment == null ? null : existingAppointment.get_title_iz32un_k$();
        var value = mutableStateOf(tmp1_elvis_lhs == null ? 'Revisi\xF3n de propuesta' : tmp1_elvis_lhs);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp1_group = tmp;
      sourceInformationMarkerEnd($composer_0);
      var title$delegate = tmp1_group;
      var tmp2_remember$arg$1 = existingAppointment == null ? null : existingAppointment.get_id_kntnx8_k$();
      sourceInformationMarkerStart($composer_0, -1759466289, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      var tmp0_0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!(($dirty & 112) === 32 | $composer_0.changed_ga7h3f_k$(tmp2_remember$arg$1));
      // Inline function 'kotlin.let' call
      var it_0 = tmp0_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp1_elvis_lhs_0 = existingAppointment == null ? null : existingAppointment.get_dateLabel_43kjel_k$();
        var value_0 = mutableStateOf(tmp1_elvis_lhs_0 == null ? 'Lunes, 16 de noviembre de 2026' : tmp1_elvis_lhs_0);
        tmp0_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_0 = value_0;
      } else {
        tmp_0 = it_0;
      }
      var tmp3_group = tmp_0;
      sourceInformationMarkerEnd($composer_0);
      var dateText$delegate = tmp3_group;
      var tmp4_remember$arg$1 = existingAppointment == null ? null : existingAppointment.get_id_kntnx8_k$();
      sourceInformationMarkerStart($composer_0, -1759461130, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      var tmp0_1 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = !!(($dirty & 112) === 32 | $composer_0.changed_ga7h3f_k$(tmp4_remember$arg$1));
      // Inline function 'kotlin.let' call
      var it_1 = tmp0_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_1 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp1_elvis_lhs_1 = existingAppointment == null ? null : existingAppointment.get_startTime_qp7d5m_k$();
        var value_1 = mutableStateOf(tmp1_elvis_lhs_1 == null ? '12:00' : tmp1_elvis_lhs_1);
        tmp0_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_1 = value_1;
      } else {
        tmp_1 = it_1;
      }
      var tmp5_group = tmp_1;
      sourceInformationMarkerEnd($composer_0);
      var startTime$delegate = tmp5_group;
      var tmp6_remember$arg$1 = existingAppointment == null ? null : existingAppointment.get_id_kntnx8_k$();
      sourceInformationMarkerStart($composer_0, -1759456812, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      var tmp0_2 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = !!(($dirty & 112) === 32 | $composer_0.changed_ga7h3f_k$(tmp6_remember$arg$1));
      // Inline function 'kotlin.let' call
      var it_2 = tmp0_2.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid_2 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp1_elvis_lhs_2 = existingAppointment == null ? null : existingAppointment.get_endTime_pbcuqp_k$();
        var value_2 = mutableStateOf(tmp1_elvis_lhs_2 == null ? '12:45' : tmp1_elvis_lhs_2);
        tmp0_2.updateRememberedValue_l1wh71_k$(value_2);
        tmp_2 = value_2;
      } else {
        tmp_2 = it_2;
      }
      var tmp7_group = tmp_2;
      sourceInformationMarkerEnd($composer_0);
      var endTime$delegate = tmp7_group;
      var tmp8_remember$arg$1 = existingAppointment == null ? null : existingAppointment.get_id_kntnx8_k$();
      sourceInformationMarkerStart($composer_0, -1759452503, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      var tmp0_3 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = !!(($dirty & 112) === 32 | $composer_0.changed_ga7h3f_k$(tmp8_remember$arg$1));
      // Inline function 'kotlin.let' call
      var it_3 = tmp0_3.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_3 || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp1_elvis_lhs_3 = existingAppointment == null ? null : existingAppointment.get_location_d3s02_k$();
        var value_3 = mutableStateOf(tmp1_elvis_lhs_3 == null ? 'Videollamada \xB7 Notas Meet' : tmp1_elvis_lhs_3);
        tmp0_3.updateRememberedValue_l1wh71_k$(value_3);
        tmp_3 = value_3;
      } else {
        tmp_3 = it_3;
      }
      var tmp9_group = tmp_3;
      sourceInformationMarkerEnd($composer_0);
      var location$delegate = tmp9_group;
      var tmp10_remember$arg$1 = existingAppointment == null ? null : existingAppointment.get_id_kntnx8_k$();
      sourceInformationMarkerStart($composer_0, -1759447632, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      var tmp0_4 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_4 = !!(($dirty & 112) === 32 | $composer_0.changed_ga7h3f_k$(tmp10_remember$arg$1));
      // Inline function 'kotlin.let' call
      var it_4 = tmp0_4.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid_4 || it_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp1_elvis_lhs_4 = existingAppointment == null ? null : existingAppointment.get_notes_ivw520_k$();
        var value_4 = mutableStateOf(tmp1_elvis_lhs_4 == null ? 'Revisar la propuesta con el equipo.' : tmp1_elvis_lhs_4);
        tmp0_4.updateRememberedValue_l1wh71_k$(value_4);
        tmp_4 = value_4;
      } else {
        tmp_4 = it_4;
      }
      var tmp11_group = tmp_4;
      sourceInformationMarkerEnd($composer_0);
      var notes$delegate = tmp11_group;
      var tmp12_remember$arg$1 = existingAppointment == null ? null : existingAppointment.get_id_kntnx8_k$();
      sourceInformationMarkerStart($composer_0, -1759442407, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      var tmp0_5 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_5 = !!(($dirty & 112) === 32 | $composer_0.changed_ga7h3f_k$(tmp12_remember$arg$1));
      // Inline function 'kotlin.let' call
      var it_5 = tmp0_5.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid_5 || it_5 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var tmp1_elvis_lhs_5 = existingAppointment == null ? null : existingAppointment.get_reminderEnabled_uwxg8q_k$();
        var value_5 = mutableStateOf(tmp1_elvis_lhs_5 == null ? true : tmp1_elvis_lhs_5);
        tmp0_5.updateRememberedValue_l1wh71_k$(value_5);
        tmp_5 = value_5;
      } else {
        tmp_5 = it_5;
      }
      var tmp13_group = tmp_5;
      sourceInformationMarkerEnd($composer_0);
      var reminderOn$delegate = tmp13_group;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = background(fillMaxSize(Companion_getInstance_0()), colors.get_background_8l4942_k$());
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0_6 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp_6 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_6, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0_6);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      var tmp0_7 = ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 826412625, 'C893@35680L19,899@36017L48,894@35708L368,905@36186L21,902@36086L4839,1025@40935L18:AuthAndAgendaScreens.kt#bisg3d');
      NotasTopStatusBar(null, $composer_5, 0, 1);
      var tmp_7 = isEdit ? 'Editar cita' : 'Nueva cita';
      var tmp_8;
      if (isEdit) {
        var tmp1_elvis_lhs_6 = existingAppointment == null ? null : existingAppointment.get_title_iz32un_k$();
        tmp_8 = tmp1_elvis_lhs_6 == null ? 'Reuni\xF3n de equipo' : tmp1_elvis_lhs_6;
      } else {
        tmp_8 = 'Reserva tiempo para lo importante';
      }
      var tmp_9 = tmp_8;
      var tmp_10 = NotasIcons_getInstance().get_Close_i86z73_k$();
      sourceInformationMarkerStart($composer_5, -1774451287, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_6 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_6 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_11;
      if (invalid_6 || it_6 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_6 = AppointmentFormScreen$lambda_13(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value_6);
        tmp_11 = value_6;
      } else {
        tmp_11 = it_6;
      }
      var tmp0_group = tmp_11;
      sourceInformationMarkerEnd($composer_5);
      NotasHeader('NOTAS', tmp_7, tmp_9, tmp_10, null, tmp0_group, null, null, null, $composer_5, 6, 464);
      var tmp_12 = tmp0_7.weight$default_gbkz97_k$(Companion_getInstance_0(), 1.0);
      var tmp_13 = verticalScroll(tmp_12, rememberScrollState(0, $composer_5, 0, 1));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$38 = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = padding(tmp_13, tmp$ret$38);
      var verticalArrangement_0 = null;
      var horizontalAlignment_0 = null;
      var $composer_6 = $composer_5;
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_0 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_0 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement_0, horizontalAlignment_0, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      var tmp0_8 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      var tmp_14 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_14, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_8);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_9 = $composer_8;
      ColumnScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, 612190328, 'C908@36279L40,912@36457L14,909@36332L213,915@36558L41,919@36728L17,916@36612L212,922@36837L41,923@36891L711,942@37615L41,946@37789L17,943@37669L205,949@37887L41,953@38054L14,950@37941L198,956@38152L41,959@38254L1373,994@39641L41,997@39813L1033,995@39695L1166,1022@40874L41:AuthAndAgendaScreens.kt#bisg3d');
      var tmp_15 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$45 = _Dp___init__impl__ms3zkb(6);
      Spacer(height(tmp_15, tmp$ret$45), $composer_10, 6);
      var tmp_16 = AppointmentFormScreen$lambda(title$delegate);
      sourceInformationMarkerStart($composer_10, 19749149, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_7 = $composer_10.changed_ga7h3f_k$(title$delegate);
      // Inline function 'kotlin.let' call
      var it_7 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_17;
      if (invalid_7 || it_7 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_7 = AppointmentFormScreen$lambda_14(title$delegate);
        $composer_10.updateRememberedValue_l1wh71_k$(value_7);
        tmp_17 = value_7;
      } else {
        tmp_17 = it_7;
      }
      var tmp0_group_0 = tmp_17;
      sourceInformationMarkerEnd($composer_10);
      var tmp_18 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_19 = _Dp___init__impl__ms3zkb(0.0);
      NotasInputField('T\xEDtulo de la cita', tmp_16, tmp0_group_0, 'Ej. Revisi\xF3n de propuesta', false, false, null, false, tmp_18, tmp_19, null, $composer_10, 3078, 0, 2032);
      var tmp_20 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$50 = _Dp___init__impl__ms3zkb(16);
      Spacer(height(tmp_20, tmp$ret$50), $composer_10, 6);
      var tmp_21 = AppointmentFormScreen$lambda_1(dateText$delegate);
      sourceInformationMarkerStart($composer_10, 19757824, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_8 = $composer_10.changed_ga7h3f_k$(dateText$delegate);
      // Inline function 'kotlin.let' call
      var it_8 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_22;
      if (invalid_8 || it_8 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_8 = AppointmentFormScreen$lambda_15(dateText$delegate);
        $composer_10.updateRememberedValue_l1wh71_k$(value_8);
        tmp_22 = value_8;
      } else {
        tmp_22 = it_8;
      }
      var tmp1_group_0 = tmp_22;
      sourceInformationMarkerEnd($composer_10);
      var tmp_23 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_24 = _Dp___init__impl__ms3zkb(0.0);
      NotasInputField('Fecha', tmp_21, tmp1_group_0, 'Lunes, 16 de noviembre de 2026', false, false, null, false, tmp_23, tmp_24, null, $composer_10, 3078, 0, 2032);
      var tmp_25 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$55 = _Dp___init__impl__ms3zkb(16);
      Spacer(height(tmp_25, tmp$ret$55), $composer_10, 6);
      var tmp0_9 = fillMaxWidth(Companion_getInstance_0());
      var tmp_26 = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$56 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_3 = tmp0_9;
      var horizontalArrangement = tmp_26.spacedBy_wt7oji_k$(tmp$ret$56);
      var verticalAlignment = null;
      var $composer_11 = $composer_10;
      if (!((4 & 1) === 0))
        modifier_3 = Companion_getInstance_0();
      if (!((4 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((4 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_1 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_11, 14 & 54 >> 3 | 112 & 54 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_12 = $composer_11;
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_0();
      var compositeKeyHash_1 = get_currentCompositeKeyHashCode($composer_12, 0).hashCode();
      var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_1 = materialize($composer_12, modifier_4);
      var tmp0_10 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_13 = $composer_12;
      var tmp_27 = $composer_13.get_applier_bupu8u_k$();
      if (!isInterface(tmp_27, Applier)) {
        invalidApplier();
      }
      $composer_13.startReusableNode_jjgeyp_k$();
      if ($composer_13.get_inserting_25mlsw_k$()) {
        $composer_13.createNode_ahrd54_k$(tmp0_10);
      } else {
        $composer_13.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, compositeKeyHash_1, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_1, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_14 = $composer_13;
      var tmp0_11 = RowScopeInstance_getInstance();
      var $composer_15 = $composer_14;
      sourceInformationMarkerStart($composer_15, 358505717, 'C930@37180L18,927@37049L263,937@37458L16,934@37329L259:AuthAndAgendaScreens.kt#bisg3d');
      var tmp_28 = AppointmentFormScreen$lambda_3(startTime$delegate);
      sourceInformationMarkerStart($composer_15, 1674136357, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_9 = $composer_15.changed_ga7h3f_k$(startTime$delegate);
      // Inline function 'kotlin.let' call
      var it_9 = $composer_15.rememberedValue_4dg93v_k$();
      var tmp_29;
      if (invalid_9 || it_9 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_9 = AppointmentFormScreen$lambda_16(startTime$delegate);
        $composer_15.updateRememberedValue_l1wh71_k$(value_9);
        tmp_29 = value_9;
      } else {
        tmp_29 = it_9;
      }
      var tmp0_group_1 = tmp_29;
      sourceInformationMarkerEnd($composer_15);
      var tmp_30 = _Dp___init__impl__ms3zkb(0.0);
      NotasInputField('Empieza', tmp_28, tmp0_group_1, '12:00', false, false, null, false, tmp_30, _Dp___init__impl__ms3zkb(0.0), tmp0_11.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0), $composer_15, 3078, 0, 1008);
      var tmp_31 = AppointmentFormScreen$lambda_5(endTime$delegate);
      sourceInformationMarkerStart($composer_15, 1674145251, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_10 = $composer_15.changed_ga7h3f_k$(endTime$delegate);
      // Inline function 'kotlin.let' call
      var it_10 = $composer_15.rememberedValue_4dg93v_k$();
      var tmp_32;
      if (invalid_10 || it_10 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_10 = AppointmentFormScreen$lambda_17(endTime$delegate);
        $composer_15.updateRememberedValue_l1wh71_k$(value_10);
        tmp_32 = value_10;
      } else {
        tmp_32 = it_10;
      }
      var tmp1_group_1 = tmp_32;
      sourceInformationMarkerEnd($composer_15);
      var tmp_33 = _Dp___init__impl__ms3zkb(0.0);
      NotasInputField('Termina', tmp_31, tmp1_group_1, '12:45', false, false, null, false, tmp_33, _Dp___init__impl__ms3zkb(0.0), tmp0_11.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0), $composer_15, 3078, 0, 1008);
      sourceInformationMarkerEnd($composer_15);
      $composer_13.endNode_3m0yfn_k$();
      var tmp_34 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$71 = _Dp___init__impl__ms3zkb(16);
      Spacer(height(tmp_34, tmp$ret$71), $composer_10, 6);
      var tmp_35 = AppointmentFormScreen$lambda_7(location$delegate);
      sourceInformationMarkerStart($composer_10, 19791776, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_11 = $composer_10.changed_ga7h3f_k$(location$delegate);
      // Inline function 'kotlin.let' call
      var it_11 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_36;
      if (invalid_11 || it_11 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_11 = AppointmentFormScreen$lambda_18(location$delegate);
        $composer_10.updateRememberedValue_l1wh71_k$(value_11);
        tmp_36 = value_11;
      } else {
        tmp_36 = it_11;
      }
      var tmp2_group = tmp_36;
      sourceInformationMarkerEnd($composer_10);
      var tmp_37 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_38 = _Dp___init__impl__ms3zkb(0.0);
      NotasInputField('Ubicaci\xF3n', tmp_35, tmp2_group, 'Sala o videollamada', false, false, null, false, tmp_37, tmp_38, null, $composer_10, 3078, 0, 2032);
      var tmp_39 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$76 = _Dp___init__impl__ms3zkb(16);
      Spacer(height(tmp_39, tmp$ret$76), $composer_10, 6);
      var tmp_40 = AppointmentFormScreen$lambda_9(notes$delegate);
      sourceInformationMarkerStart($composer_10, 19800253, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_12 = $composer_10.changed_ga7h3f_k$(notes$delegate);
      // Inline function 'kotlin.let' call
      var it_12 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_41;
      if (invalid_12 || it_12 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_12 = AppointmentFormScreen$lambda_19(notes$delegate);
        $composer_10.updateRememberedValue_l1wh71_k$(value_12);
        tmp_41 = value_12;
      } else {
        tmp_41 = it_12;
      }
      var tmp3_group_0 = tmp_41;
      sourceInformationMarkerEnd($composer_10);
      var tmp_42 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_43 = _Dp___init__impl__ms3zkb(0.0);
      NotasInputField('Notas', tmp_40, tmp3_group_0, 'Detalles de la reuni\xF3n', false, false, null, false, tmp_42, tmp_43, null, $composer_10, 3078, 0, 2032);
      var tmp_44 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$81 = _Dp___init__impl__ms3zkb(20);
      Spacer(height(tmp_44, tmp$ret$81), $composer_10, 6);
      var tmp_45 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$82 = _Dp___init__impl__ms3zkb(60);
      var tmp_46 = height(tmp_45, tmp$ret$82);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$83 = _Dp___init__impl__ms3zkb(16);
      var tmp_47 = background(clip(tmp_46, RoundedCornerShape(tmp$ret$83)), colors.get_accentContainer_6iiayz_k$());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$84 = _Dp___init__impl__ms3zkb(15);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_5 = padding(tmp_47, tmp$ret$84);
      var horizontalArrangement_0 = null;
      var verticalAlignment_0 = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_16 = $composer_10;
      if (!((2 & 1) === 0))
        modifier_5 = Companion_getInstance_0();
      if (!((2 & 2) === 0))
        horizontalArrangement_0 = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((2 & 4) === 0))
        verticalAlignment_0 = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_2 = rowMeasurePolicy(horizontalArrangement_0, verticalAlignment_0, $composer_16, 14 & 384 >> 3 | 112 & 384 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_6 = modifier_5;
      var $composer_17 = $composer_16;
      if (!((0 & 2) === 0))
        modifier_6 = Companion_getInstance_0();
      var compositeKeyHash_2 = get_currentCompositeKeyHashCode($composer_17, 0).hashCode();
      var localMap_2 = $composer_17.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_2 = materialize($composer_17, modifier_6);
      var tmp0_12 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_18 = $composer_17;
      var tmp_48 = $composer_18.get_applier_bupu8u_k$();
      if (!isInterface(tmp_48, Applier)) {
        invalidApplier();
      }
      $composer_18.startReusableNode_jjgeyp_k$();
      if ($composer_18.get_inserting_25mlsw_k$()) {
        $composer_18.createNode_ahrd54_k$(tmp0_12);
      } else {
        $composer_18.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_18);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, compositeKeyHash_2, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_2, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_19 = $composer_18;
      var tmp0_13 = RowScopeInstance_getInstance();
      var $composer_20 = $composer_19;
      sourceInformationMarkerStart($composer_20, 909105849, 'C968@38621L223,974@38861L40,975@38918L547,990@39575L19,988@39482L131:AuthAndAgendaScreens.kt#bisg3d');
      var tmp0_imageVector = NotasIcons_getInstance().get_Bell_wnyy5o_k$();
      var tmp1_tint = colors.get_accentContent_6vke99_k$();
      var tmp_49 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$91 = _Dp___init__impl__ms3zkb(22);
      var tmp2_modifier = size_0(tmp_49, tmp$ret$91);
      Icon(tmp0_imageVector, null, tmp2_modifier, tmp1_tint, $composer_20, 432, 0);
      var tmp_50 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$92 = _Dp___init__impl__ms3zkb(12);
      Spacer(width(tmp_50, tmp$ret$92), $composer_20, 6);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_7 = tmp0_13.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0);
      var verticalArrangement_1 = null;
      var horizontalAlignment_1 = null;
      var $composer_21 = $composer_20;
      if (!((6 & 1) === 0))
        modifier_7 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_1 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_1 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_3 = columnMeasurePolicy(verticalArrangement_1, horizontalAlignment_1, $composer_21, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_8 = modifier_7;
      var $composer_22 = $composer_21;
      if (!((0 & 2) === 0))
        modifier_8 = Companion_getInstance_0();
      var compositeKeyHash_3 = get_currentCompositeKeyHashCode($composer_22, 0).hashCode();
      var localMap_3 = $composer_22.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_3 = materialize($composer_22, modifier_8);
      var tmp0_14 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_23 = $composer_22;
      var tmp_51 = $composer_23.get_applier_bupu8u_k$();
      if (!isInterface(tmp_51, Applier)) {
        invalidApplier();
      }
      $composer_23.startReusableNode_jjgeyp_k$();
      if ($composer_23.get_inserting_25mlsw_k$()) {
        $composer_23.createNode_ahrd54_k$(tmp0_14);
      } else {
        $composer_23.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_3 = _Updater___init__impl__rbfxm8($composer_23);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, measurePolicy_3, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, localMap_3, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, compositeKeyHash_3, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_3, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, materialized_3, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_24 = $composer_23;
      ColumnScopeInstance_getInstance();
      var $composer_25 = $composer_24;
      sourceInformationMarkerStart($composer_25, -1829948017, 'C976@38979L267,982@39267L180:AuthAndAgendaScreens.kt#bisg3d');
      var tmp_52 = 'Avisarme ' + state.get_alertAdvanceMinutes_bbtzhs_k$() + ' minutos antes';
      var tmp_53 = colors.get_accentContent_6vke99_k$();
      var tmp_54 = get_sp(12);
      var tmp_55 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_56 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_57 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_58 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp_52, null, tmp_53, null, tmp_54, null, tmp_55, null, tmp_56, null, null, tmp_57, tmp_58, false, 0, 0, null, null, $composer_25, 1597440, 0, 262058);
      var tmp_59 = colors.get_textSecondary_kl22jf_k$();
      var tmp_60 = get_sp(10);
      var tmp_61 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_62 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_63 = _TextOverflow___init__impl__obguoe(0);
      Text('Ventana y sonido suave', null, tmp_59, null, tmp_60, null, null, null, tmp_61, null, null, tmp_62, tmp_63, false, 0, 0, null, null, $composer_25, 24582, 0, 262122);
      sourceInformationMarkerEnd($composer_25);
      $composer_23.endNode_3m0yfn_k$();
      var tmp_64 = AppointmentFormScreen$lambda_11(reminderOn$delegate);
      sourceInformationMarkerStart($composer_20, -1079023107, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_13 = $composer_20.changed_ga7h3f_k$(reminderOn$delegate);
      // Inline function 'kotlin.let' call
      var it_13 = $composer_20.rememberedValue_4dg93v_k$();
      var tmp_65;
      if (invalid_13 || it_13 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_13 = AppointmentFormScreen$lambda_20(reminderOn$delegate);
        $composer_20.updateRememberedValue_l1wh71_k$(value_13);
        tmp_65 = value_13;
      } else {
        tmp_65 = it_13;
      }
      var tmp0_group_2 = tmp_65;
      sourceInformationMarkerEnd($composer_20);
      NotasSwitch(tmp_64, tmp0_group_2, null, $composer_20, 0, 4);
      sourceInformationMarkerEnd($composer_20);
      $composer_18.endNode_3m0yfn_k$();
      var tmp_66 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$103 = _Dp___init__impl__ms3zkb(22);
      Spacer(height(tmp_66, tmp$ret$103), $composer_10, 6);
      var tmp_67 = isEdit ? 'Guardar cambios' : 'Crear cita';
      sourceInformationMarkerStart($composer_10, 19857560, 'CC(remember):AuthAndAgendaScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_14 = !!(!!(!!(!!(!!(!!(!!(!!(!!(($dirty & 112) === 32 | ($dirty & 896) === 256) | ($dirty & 14) === 4) | $composer_0.changed_ga7h3f_k$(title$delegate)) | $composer_0.changed_ga7h3f_k$(dateText$delegate)) | $composer_0.changed_ga7h3f_k$(startTime$delegate)) | $composer_0.changed_ga7h3f_k$(endTime$delegate)) | $composer_0.changed_ga7h3f_k$(location$delegate)) | $composer_0.changed_ga7h3f_k$(notes$delegate)) | $composer_0.changed_ga7h3f_k$(reminderOn$delegate));
      // Inline function 'kotlin.let' call
      var it_14 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_68;
      if (invalid_14 || it_14 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_14 = AppointmentFormScreen$lambda_21(isEdit, existingAppointment, state, title$delegate, dateText$delegate, startTime$delegate, endTime$delegate, location$delegate, notes$delegate, reminderOn$delegate);
        $composer_10.updateRememberedValue_l1wh71_k$(value_14);
        tmp_68 = value_14;
      } else {
        tmp_68 = it_14;
      }
      var tmp4_group = tmp_68;
      sourceInformationMarkerEnd($composer_10);
      var tmp_69 = _Dp___init__impl__ms3zkb(0.0);
      NotasPrimaryButton(tmp_67, tmp4_group, null, tmp_69, _Dp___init__impl__ms3zkb(0.0), $composer_10, 0, 28);
      var tmp_70 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$108 = _Dp___init__impl__ms3zkb(20);
      Spacer(height(tmp_70, tmp$ret$108), $composer_10, 6);
      sourceInformationMarkerEnd($composer_10);
      $composer_8.endNode_3m0yfn_k$();
      NotasModalFooter(null, null, $composer_5, 0, 3);
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp14_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp14_safe_receiver == null)
      null;
    else {
      tmp14_safe_receiver.updateScope_t8jcf_k$(AppointmentFormScreen$lambda_22(state, isEdit, existingAppointment, $changed));
    }
  }
  function Notas01AccesoScreen$lambda($passwordVisible$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('passwordVisible', KMutableProperty0, true);
    return $passwordVisible$delegate.get_value_j01efc_k$();
  }
  function Notas01AccesoScreen$lambda_0($passwordVisible$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('passwordVisible', KMutableProperty0, true);
    $passwordVisible$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function Notas01AccesoScreen$lambda_1($state) {
    return function (it) {
      $state.set_userEmail_tzea0m_k$(it);
      return Unit_getInstance();
    };
  }
  function Notas01AccesoScreen$lambda_2($state) {
    return function (it) {
      $state.set_loginPassword_hm8vur_k$(it);
      return Unit_getInstance();
    };
  }
  function Notas01AccesoScreen$lambda_3($passwordVisible$delegate) {
    return function () {
      Notas01AccesoScreen$lambda_0($passwordVisible$delegate, !Notas01AccesoScreen$lambda($passwordVisible$delegate));
      return Unit_getInstance();
    };
  }
  function Notas01AccesoScreen$lambda_4($state) {
    return function () {
      $state.navigateTo_ndxrxs_k$(NotasScreen_AGENDA_MONTH_getInstance());
      return Unit_getInstance();
    };
  }
  function Notas01AccesoScreen$lambda_5($state, $$changed) {
    return function ($composer, $force) {
      Notas01AccesoScreen($state, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Notas02AgendaMesScreen$lambda($state) {
    return function () {
      $state.navigateTo_ndxrxs_k$(NotasScreen_CONFIGURE_ALERTS_getInstance());
      return Unit_getInstance();
    };
  }
  function Notas02AgendaMesScreen$lambda_0($state) {
    return function () {
      $state.set_feedbackMessage_t4kquq_k$(null);
      return Unit_getInstance();
    };
  }
  function Notas02AgendaMesScreen$lambda_1($state) {
    return function (idx) {
      var tmp;
      if (idx === 1) {
        $state.navigateTo_ndxrxs_k$(NotasScreen_AGENDA_WEEK_getInstance());
        tmp = Unit_getInstance();
      } else if (idx === 2) {
        $state.navigateTo_ndxrxs_k$(NotasScreen_AGENDA_DAY_getInstance());
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Notas02AgendaMesScreen$lambda_2($state) {
    return function () {
      $state.set_monthOffset_jbc2ry_k$(coerceAtLeast($state.get_monthOffset_njsssq_k$() - 1 | 0, -1));
      return Unit_getInstance();
    };
  }
  function Notas02AgendaMesScreen$lambda_3($state) {
    return function () {
      $state.set_monthOffset_jbc2ry_k$(coerceAtMost($state.get_monthOffset_njsssq_k$() + 1 | 0, 1));
      return Unit_getInstance();
    };
  }
  function Notas02AgendaMesScreen$lambda_4($state, $cell) {
    return function () {
      $state.set_selectedDayOfMonth_xad83n_k$($cell.dayNumber_1);
      return Unit_getInstance();
    };
  }
  function Notas02AgendaMesScreen$lambda_5($state) {
    return function () {
      $state.openNewAppointment_zhi0op_k$();
      return Unit_getInstance();
    };
  }
  function Notas02AgendaMesScreen$lambda_6($state, $apt) {
    return function () {
      $state.openEditAppointment_dk9ttr_k$($apt.get_id_kntnx8_k$());
      return Unit_getInstance();
    };
  }
  function NotasAppState$navigateToTab$ref(p0) {
    return constructCallableReference(function (p0_0) {
      p0.navigateToTab_431qr_k$(p0_0);
      return Unit_getInstance();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.navigateToTab|navigateToTab(com.notas.agenda.model.NotasTab){}[0]', 'navigateToTab', [p0]);
  }
  function Notas02AgendaMesScreen$lambda_7($state, $$changed) {
    return function ($composer, $force) {
      Notas02AgendaMesScreen($state, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Notas03AgendaSemanaScreen$lambda($state) {
    return function () {
      $state.navigateTo_ndxrxs_k$(NotasScreen_CONFIGURE_ALERTS_getInstance());
      return Unit_getInstance();
    };
  }
  function Notas03AgendaSemanaScreen$lambda_0($state) {
    return function (idx) {
      var tmp;
      if (idx === 0) {
        $state.navigateTo_ndxrxs_k$(NotasScreen_AGENDA_MONTH_getInstance());
        tmp = Unit_getInstance();
      } else if (idx === 2) {
        $state.navigateTo_ndxrxs_k$(NotasScreen_AGENDA_DAY_getInstance());
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Notas03AgendaSemanaScreen$lambda_1($state) {
    return function () {
      $state.set_selectedDayOfMonth_xad83n_k$(16);
      $state.navigateTo_ndxrxs_k$(NotasScreen_AGENDA_DAY_getInstance());
      return Unit_getInstance();
    };
  }
  function Notas03AgendaSemanaScreen$lambda_2($state, $dayNum) {
    return function () {
      $state.set_selectedDayOfMonth_xad83n_k$($dayNum);
      return Unit_getInstance();
    };
  }
  function Notas03AgendaSemanaScreen$lambda_3($state, $matchingEvent) {
    return function () {
      $state.openEditAppointment_dk9ttr_k$($matchingEvent.get_id_kntnx8_k$());
      return Unit_getInstance();
    };
  }
  function NotasAppState$navigateToTab$ref_0(p0) {
    return constructCallableReference(function (p0_0) {
      p0.navigateToTab_431qr_k$(p0_0);
      return Unit_getInstance();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.navigateToTab|navigateToTab(com.notas.agenda.model.NotasTab){}[0]', 'navigateToTab', [p0]);
  }
  function Notas03AgendaSemanaScreen$lambda_4($state, $$changed) {
    return function ($composer, $force) {
      Notas03AgendaSemanaScreen($state, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Notas04AgendaDiaScreen$lambda($state) {
    return function () {
      $state.navigateTo_ndxrxs_k$(NotasScreen_CONFIGURE_ALERTS_getInstance());
      return Unit_getInstance();
    };
  }
  function Notas04AgendaDiaScreen$lambda_0($state) {
    return function (idx) {
      var tmp;
      if (idx === 0) {
        $state.navigateTo_ndxrxs_k$(NotasScreen_AGENDA_MONTH_getInstance());
        tmp = Unit_getInstance();
      } else if (idx === 1) {
        $state.navigateTo_ndxrxs_k$(NotasScreen_AGENDA_WEEK_getInstance());
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Notas04AgendaDiaScreen$lambda_1($state, $dayNum) {
    return function () {
      $state.set_selectedDayOfMonth_xad83n_k$($dayNum);
      return Unit_getInstance();
    };
  }
  function Notas04AgendaDiaScreen$lambda_2($state, $apt) {
    return function () {
      $state.openEditAppointment_dk9ttr_k$($apt.get_id_kntnx8_k$());
      return Unit_getInstance();
    };
  }
  function Notas04AgendaDiaScreen$lambda_3($state) {
    return function () {
      $state.openNewAppointment_zhi0op_k$();
      return Unit_getInstance();
    };
  }
  function NotasAppState$navigateToTab$ref_1(p0) {
    return constructCallableReference(function (p0_0) {
      p0.navigateToTab_431qr_k$(p0_0);
      return Unit_getInstance();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.navigateToTab|navigateToTab(com.notas.agenda.model.NotasTab){}[0]', 'navigateToTab', [p0]);
  }
  function Notas04AgendaDiaScreen$lambda_4($state, $$changed) {
    return function ($composer, $force) {
      Notas04AgendaDiaScreen($state, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AppointmentSummaryCard$lambda($appointment, $subtitle, $onClick, $modifier, $height, $$changed, $$default) {
    return function ($composer, $force) {
      AppointmentSummaryCard($appointment, $subtitle, $onClick, $modifier._v, $height._v.value_1, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Notas05NuevaCitaScreen$lambda($state, $$changed) {
    return function ($composer, $force) {
      Notas05NuevaCitaScreen($state, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Notas06EditarCitaScreen$lambda($state, $$changed) {
    return function ($composer, $force) {
      Notas06EditarCitaScreen($state, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function AppointmentFormScreen$lambda($title$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('title', KMutableProperty0, true);
    return $title$delegate.get_value_j01efc_k$();
  }
  function AppointmentFormScreen$lambda_0($title$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('title', KMutableProperty0, true);
    $title$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function AppointmentFormScreen$lambda_1($dateText$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('dateText', KMutableProperty0, true);
    return $dateText$delegate.get_value_j01efc_k$();
  }
  function AppointmentFormScreen$lambda_2($dateText$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('dateText', KMutableProperty0, true);
    $dateText$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function AppointmentFormScreen$lambda_3($startTime$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('startTime', KMutableProperty0, true);
    return $startTime$delegate.get_value_j01efc_k$();
  }
  function AppointmentFormScreen$lambda_4($startTime$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('startTime', KMutableProperty0, true);
    $startTime$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function AppointmentFormScreen$lambda_5($endTime$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('endTime', KMutableProperty0, true);
    return $endTime$delegate.get_value_j01efc_k$();
  }
  function AppointmentFormScreen$lambda_6($endTime$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('endTime', KMutableProperty0, true);
    $endTime$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function AppointmentFormScreen$lambda_7($location$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('location', KMutableProperty0, true);
    return $location$delegate.get_value_j01efc_k$();
  }
  function AppointmentFormScreen$lambda_8($location$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('location', KMutableProperty0, true);
    $location$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function AppointmentFormScreen$lambda_9($notes$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('notes', KMutableProperty0, true);
    return $notes$delegate.get_value_j01efc_k$();
  }
  function AppointmentFormScreen$lambda_10($notes$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('notes', KMutableProperty0, true);
    $notes$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function AppointmentFormScreen$lambda_11($reminderOn$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('reminderOn', KMutableProperty0, true);
    return $reminderOn$delegate.get_value_j01efc_k$();
  }
  function AppointmentFormScreen$lambda_12($reminderOn$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('reminderOn', KMutableProperty0, true);
    $reminderOn$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function AppointmentFormScreen$lambda_13($state) {
    return function () {
      $state.navigateTo_ndxrxs_k$($state.get_previousAgendaScreen_3j9ax4_k$());
      return Unit_getInstance();
    };
  }
  function AppointmentFormScreen$lambda_14($title$delegate) {
    return function (it) {
      AppointmentFormScreen$lambda_0($title$delegate, it);
      return Unit_getInstance();
    };
  }
  function AppointmentFormScreen$lambda_15($dateText$delegate) {
    return function (it) {
      AppointmentFormScreen$lambda_2($dateText$delegate, it);
      return Unit_getInstance();
    };
  }
  function AppointmentFormScreen$lambda_16($startTime$delegate) {
    return function (it) {
      AppointmentFormScreen$lambda_4($startTime$delegate, it);
      return Unit_getInstance();
    };
  }
  function AppointmentFormScreen$lambda_17($endTime$delegate) {
    return function (it) {
      AppointmentFormScreen$lambda_6($endTime$delegate, it);
      return Unit_getInstance();
    };
  }
  function AppointmentFormScreen$lambda_18($location$delegate) {
    return function (it) {
      AppointmentFormScreen$lambda_8($location$delegate, it);
      return Unit_getInstance();
    };
  }
  function AppointmentFormScreen$lambda_19($notes$delegate) {
    return function (it) {
      AppointmentFormScreen$lambda_10($notes$delegate, it);
      return Unit_getInstance();
    };
  }
  function AppointmentFormScreen$lambda_20($reminderOn$delegate) {
    return function (it) {
      AppointmentFormScreen$lambda_12($reminderOn$delegate, it);
      return Unit_getInstance();
    };
  }
  function AppointmentFormScreen$lambda_21($isEdit, $existingAppointment, $state, $title$delegate, $dateText$delegate, $startTime$delegate, $endTime$delegate, $location$delegate, $notes$delegate, $reminderOn$delegate) {
    return function () {
      var tmp;
      if ($isEdit && !($existingAppointment == null)) {
        $state.updateExistingAppointment_ji6hie_k$($existingAppointment.get_id_kntnx8_k$(), AppointmentFormScreen$lambda($title$delegate), AppointmentFormScreen$lambda_1($dateText$delegate), AppointmentFormScreen$lambda_3($startTime$delegate), AppointmentFormScreen$lambda_5($endTime$delegate), AppointmentFormScreen$lambda_7($location$delegate), AppointmentFormScreen$lambda_9($notes$delegate), AppointmentFormScreen$lambda_11($reminderOn$delegate));
        tmp = Unit_getInstance();
      } else {
        $state.saveNewAppointment_qbcnkp_k$(AppointmentFormScreen$lambda($title$delegate), AppointmentFormScreen$lambda_1($dateText$delegate), AppointmentFormScreen$lambda_3($startTime$delegate), AppointmentFormScreen$lambda_5($endTime$delegate), AppointmentFormScreen$lambda_7($location$delegate), AppointmentFormScreen$lambda_9($notes$delegate), AppointmentFormScreen$lambda_11($reminderOn$delegate));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function AppointmentFormScreen$lambda_22($state, $isEdit, $existingAppointment, $$changed) {
    return function ($composer, $force) {
      AppointmentFormScreen($state, $isEdit, $existingAppointment, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Notas07PersonalizacionScreen(state, nightModeScreen, $composer, $changed, $default) {
    var nightModeScreen_0 = {_v: nightModeScreen};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1554355041);
    sourceInformation($composer_0, 'C(Notas07PersonalizacionScreen)P(1)55@2397L6,57@2409L8078:SettingsScreens.kt#bisg3d');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(state) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(nightModeScreen_0._v) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        nightModeScreen_0._v = false;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1554355041, $dirty, -1, 'com.notas.agenda.ui.screens.Notas07PersonalizacionScreen (SettingsScreens.kt:54)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = background(fillMaxSize(Companion_getInstance_0()), colors.get_background_8l4942_k$());
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      var tmp0_0 = ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -1418955103, 'C62@2532L19,72@2988L229,63@2560L668,82@3327L32,80@3237L133,88@3480L21,85@3380L6968,259@10450L20,257@10358L123:SettingsScreens.kt#bisg3d');
      NotasTopStatusBar(null, $composer_5, 0, 1);
      var tmp_0 = nightModeScreen_0._v || state.get_isDarkMode_4i3lkk_k$() ? 'NOTAS' : 'NOTAS';
      var tmp_1;
      if (state.get_isDarkMode_4i3lkk_k$()) {
        tmp_1 = 'Todo a tu manera, tambi\xE9n de noche';
      } else {
        tmp_1 = 'Haz que Notas se adapte a ti';
      }
      var tmp_2 = tmp_1;
      var tmp_3 = nightModeScreen_0._v ? NotasIcons_getInstance().get_Bell_wnyy5o_k$() : NotasIcons_getInstance().get_Close_i86z73_k$();
      sourceInformationMarkerStart($composer_5, -738502534, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 112) === 32 | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      var it = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = Notas07PersonalizacionScreen$lambda(nightModeScreen_0, state);
        $composer_5.updateRememberedValue_l1wh71_k$(value);
        tmp_4 = value;
      } else {
        tmp_4 = it;
      }
      var tmp0_group = tmp_4;
      sourceInformationMarkerEnd($composer_5);
      NotasHeader(tmp_0, 'Tu espacio', tmp_2, tmp_3, null, tmp0_group, null, null, null, $composer_5, 48, 464);
      var tmp_5 = state.get_feedbackMessage_z5ejaf_k$();
      sourceInformationMarkerStart($composer_5, -738491883, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_0 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = Notas07PersonalizacionScreen$lambda_0(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value_0);
        tmp_6 = value_0;
      } else {
        tmp_6 = it_0;
      }
      var tmp1_group = tmp_6;
      sourceInformationMarkerEnd($composer_5);
      NotasFeedbackBanner(tmp_5, tmp1_group, $composer_5, 0);
      var tmp_7 = tmp0_0.weight$default_gbkz97_k$(Companion_getInstance_0(), 1.0);
      var tmp_8 = verticalScroll(tmp_7, rememberScrollState(0, $composer_5, 0, 1));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$14 = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = padding(tmp_8, tmp$ret$14);
      var verticalArrangement_0 = null;
      var horizontalAlignment_0 = null;
      var $composer_6 = $composer_5;
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_0 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_0 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement_0, horizontalAlignment_0, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      var tmp0_1 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      var tmp_9 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_9, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_1);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_9 = $composer_8;
      ColumnScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, -609191925, 'C91@3573L40,94@3660L2413,150@6087L41,151@6141L182,157@6336L41,162@6555L45,159@6391L294,167@6699L41,168@6753L191,174@6957L41,176@7012L951,198@7976L41,199@8030L148,205@8192L41,208@8315L1262,238@9591L41,241@9738L52,239@9645L160,243@9818L41,251@10165L39,244@9872L412,254@10297L41:SettingsScreens.kt#bisg3d');
      var tmp_10 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$21 = _Dp___init__impl__ms3zkb(6);
      Spacer(height(tmp_10, tmp$ret$21), $composer_10, 6);
      var tmp_11 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$22 = _Dp___init__impl__ms3zkb(18);
      var tmp_12 = background(clip(tmp_11, RoundedCornerShape(tmp$ret$22)), colors.get_surface_ya87t7_k$());
      var tmp_13;
      if (colors.get_isDark_evw91l_k$()) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_13 = _Dp___init__impl__ms3zkb(1);
      } else {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_13 = _Dp___init__impl__ms3zkb(0.5);
      }
      var tmp_14 = tmp_13;
      var tmp_15 = colors.get_border_pp3j8c_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$25 = _Dp___init__impl__ms3zkb(18);
      var tmp_16 = border(tmp_12, tmp_14, tmp_15, RoundedCornerShape(tmp$ret$25));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_17 = _Dp___init__impl__ms3zkb(18);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$27 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_3 = padding(tmp_16, tmp_17, tmp$ret$27);
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_11 = $composer_10;
      if (!((6 & 1) === 0))
        modifier_3 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_1 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_12 = $composer_11;
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_0();
      var compositeKeyHash_1 = get_currentCompositeKeyHashCode($composer_12, 0).hashCode();
      var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_1 = materialize($composer_12, modifier_4);
      var tmp0_2 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_13 = $composer_12;
      var tmp_18 = $composer_13.get_applier_bupu8u_k$();
      if (!isInterface(tmp_18, Applier)) {
        invalidApplier();
      }
      $composer_13.startReusableNode_jjgeyp_k$();
      if ($composer_13.get_inserting_25mlsw_k$()) {
        $composer_13.createNode_ahrd54_k$(tmp0_2);
      } else {
        $composer_13.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, compositeKeyHash_1, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_1, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_14 = $composer_13;
      BoxScopeInstance_getInstance();
      var $composer_15 = $composer_14;
      sourceInformationMarkerStart($composer_15, 594366603, 'C106@4164L1895:SettingsScreens.kt#bisg3d');
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_5 = fillMaxWidth(Companion_getInstance_0());
      var verticalArrangement_1 = null;
      var horizontalAlignment_1 = null;
      var $composer_16 = $composer_15;
      if (!((6 & 1) === 0))
        modifier_5 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_1 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_1 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_2 = columnMeasurePolicy(verticalArrangement_1, horizontalAlignment_1, $composer_16, 14 & 6 >> 3 | 112 & 6 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_6 = modifier_5;
      var $composer_17 = $composer_16;
      if (!((0 & 2) === 0))
        modifier_6 = Companion_getInstance_0();
      var compositeKeyHash_2 = get_currentCompositeKeyHashCode($composer_17, 0).hashCode();
      var localMap_2 = $composer_17.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_2 = materialize($composer_17, modifier_6);
      var tmp0_3 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_18 = $composer_17;
      var tmp_19 = $composer_18.get_applier_bupu8u_k$();
      if (!isInterface(tmp_19, Applier)) {
        invalidApplier();
      }
      $composer_18.startReusableNode_jjgeyp_k$();
      if ($composer_18.get_inserting_25mlsw_k$()) {
        $composer_18.createNode_ahrd54_k$(tmp0_3);
      } else {
        $composer_18.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_18);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, compositeKeyHash_2, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_2, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_19 = $composer_18;
      ColumnScopeInstance_getInstance();
      var $composer_20 = $composer_19;
      sourceInformationMarkerStart($composer_20, -627198776, 'C107@4229L1252,134@5502L40,135@5563L226,141@5810L40,142@5871L170:SettingsScreens.kt#bisg3d');
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_7 = fillMaxWidth(Companion_getInstance_0());
      var horizontalArrangement = Arrangement_getInstance().get_SpaceBetween_5p3wqd_k$();
      var verticalAlignment = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_21 = $composer_20;
      if (!((0 & 1) === 0))
        modifier_7 = Companion_getInstance_0();
      if (!((0 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((0 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_3 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_21, 14 & 438 >> 3 | 112 & 438 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_8 = modifier_7;
      var $composer_22 = $composer_21;
      if (!((0 & 2) === 0))
        modifier_8 = Companion_getInstance_0();
      var compositeKeyHash_3 = get_currentCompositeKeyHashCode($composer_22, 0).hashCode();
      var localMap_3 = $composer_22.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_3 = materialize($composer_22, modifier_8);
      var tmp0_4 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_23 = $composer_22;
      var tmp_20 = $composer_23.get_applier_bupu8u_k$();
      if (!isInterface(tmp_20, Applier)) {
        invalidApplier();
      }
      $composer_23.startReusableNode_jjgeyp_k$();
      if ($composer_23.get_inserting_25mlsw_k$()) {
        $composer_23.createNode_ahrd54_k$(tmp0_4);
      } else {
        $composer_23.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_3 = _Updater___init__impl__rbfxm8($composer_23);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, measurePolicy_3, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, localMap_3, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, compositeKeyHash_3, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_3, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, materialized_3, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_24 = $composer_23;
      RowScopeInstance_getInstance();
      var $composer_25 = $composer_24;
      sourceInformationMarkerStart($composer_25, -651702899, 'C112@4488L240,118@4753L706:SettingsScreens.kt#bisg3d');
      var tmp_21 = colors.get_accentContent_6vke99_k$();
      var tmp_22 = get_sp(9);
      var tmp_23 = Companion_getInstance_4().get_Bold_wnz5ke_k$();
      var tmp_24 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_25 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_26 = _TextOverflow___init__impl__obguoe(0);
      Text('TU CUENTA', null, tmp_21, null, tmp_22, null, tmp_23, null, tmp_24, null, null, tmp_25, tmp_26, false, 0, 0, null, null, $composer_25, 1597446, 0, 262058);
      var tmp_27 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$46 = _Dp___init__impl__ms3zkb(26);
      var tmp_28 = height(tmp_27, tmp$ret$46);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$47 = _Dp___init__impl__ms3zkb(13);
      var tmp_29 = background(clip(tmp_28, RoundedCornerShape(tmp$ret$47)), colors.get_successContainer_dqfg6m_k$());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$48 = _Dp___init__impl__ms3zkb(10);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_9 = padding(tmp_29, tmp$ret$48);
      var contentAlignment_0 = Companion_getInstance_1().get_Center_3arb0i_k$();
      var propagateMinConstraints_0 = false;
      var $composer_26 = $composer_25;
      if (!((4 & 1) === 0))
        modifier_9 = Companion_getInstance_0();
      if (!((4 & 2) === 0))
        contentAlignment_0 = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((4 & 4) === 0))
        propagateMinConstraints_0 = false;
      var measurePolicy_4 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_10 = modifier_9;
      var $composer_27 = $composer_26;
      if (!((0 & 2) === 0))
        modifier_10 = Companion_getInstance_0();
      var compositeKeyHash_4 = get_currentCompositeKeyHashCode($composer_27, 0).hashCode();
      var localMap_4 = $composer_27.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_4 = materialize($composer_27, modifier_10);
      var tmp0_5 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_28 = $composer_27;
      var tmp_30 = $composer_28.get_applier_bupu8u_k$();
      if (!isInterface(tmp_30, Applier)) {
        invalidApplier();
      }
      $composer_28.startReusableNode_jjgeyp_k$();
      if ($composer_28.get_inserting_25mlsw_k$()) {
        $composer_28.createNode_ahrd54_k$(tmp0_5);
      } else {
        $composer_28.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_4 = _Updater___init__impl__rbfxm8($composer_28);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, measurePolicy_4, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, localMap_4, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, compositeKeyHash_4, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_4, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, materialized_4, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_29 = $composer_28;
      BoxScopeInstance_getInstance();
      var $composer_30 = $composer_29;
      sourceInformationMarkerStart($composer_30, -1476376053, 'C126@5170L263:SettingsScreens.kt#bisg3d');
      var tmp_31 = colors.get_successContent_tyisdi_k$();
      var tmp_32 = get_sp(10);
      var tmp_33 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_34 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_35 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_36 = _TextOverflow___init__impl__obguoe(0);
      Text('Activa', null, tmp_31, null, tmp_32, null, tmp_33, null, tmp_34, null, null, tmp_35, tmp_36, false, 0, 0, null, null, $composer_30, 1597446, 0, 262058);
      sourceInformationMarkerEnd($composer_30);
      $composer_28.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_25);
      $composer_23.endNode_3m0yfn_k$();
      var tmp_37 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$55 = _Dp___init__impl__ms3zkb(4);
      Spacer(height(tmp_37, tmp$ret$55), $composer_20, 6);
      var tmp_38 = state.get_userName_ytepxb_k$();
      var tmp_39 = colors.get_textPrimary_mf1tv7_k$();
      var tmp_40 = get_sp(20);
      var tmp_41 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_42 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_43 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_44 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp_38, null, tmp_39, null, tmp_40, null, tmp_41, null, tmp_42, null, null, tmp_43, tmp_44, false, 0, 0, null, null, $composer_20, 1597440, 0, 262058);
      var tmp_45 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$56 = _Dp___init__impl__ms3zkb(4);
      Spacer(height(tmp_45, tmp$ret$56), $composer_20, 6);
      var tmp_46 = state.get_userRole_ythk8a_k$();
      var tmp_47 = colors.get_textSecondary_kl22jf_k$();
      var tmp_48 = get_sp(12);
      var tmp_49 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_50 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_51 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp_46, null, tmp_47, null, tmp_48, null, null, null, tmp_49, null, null, tmp_50, tmp_51, false, 0, 0, null, null, $composer_20, 24576, 0, 262122);
      sourceInformationMarkerEnd($composer_20);
      $composer_18.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_15);
      $composer_13.endNode_3m0yfn_k$();
      var tmp_52 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$57 = _Dp___init__impl__ms3zkb(22);
      Spacer(height(tmp_52, tmp$ret$57), $composer_10, 6);
      var tmp_53 = colors.get_textSecondary_kl22jf_k$();
      var tmp_54 = get_sp(10);
      var tmp_55 = Companion_getInstance_4().get_Bold_wnz5ke_k$();
      var tmp_56 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_57 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_58 = _TextOverflow___init__impl__obguoe(0);
      Text('APARIENCIA', null, tmp_53, null, tmp_54, null, tmp_55, null, tmp_56, null, null, tmp_57, tmp_58, false, 0, 0, null, null, $composer_10, 1597446, 0, 262058);
      var tmp_59 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$58 = _Dp___init__impl__ms3zkb(10);
      Spacer(height(tmp_59, tmp$ret$58), $composer_10, 6);
      var tmp_60 = listOf(['D\xEDa', 'Noche']);
      var tmp_61 = state.get_isDarkMode_4i3lkk_k$() ? 1 : 0;
      sourceInformationMarkerStart($composer_10, 534626680, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_1 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_62;
      if (invalid_1 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = Notas07PersonalizacionScreen$lambda_1(state);
        $composer_10.updateRememberedValue_l1wh71_k$(value_1);
        tmp_62 = value_1;
      } else {
        tmp_62 = it_1;
      }
      var tmp0_group_0 = tmp_62;
      sourceInformationMarkerEnd($composer_10);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_63 = _Dp___init__impl__ms3zkb(54);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_64 = _Dp___init__impl__ms3zkb(15);
      NotasSegmentedControl(tmp_60, tmp_61, tmp0_group_0, tmp_63, tmp_64, null, $composer_10, 27654, 32);
      var tmp_65 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$65 = _Dp___init__impl__ms3zkb(22);
      Spacer(height(tmp_65, tmp$ret$65), $composer_10, 6);
      var tmp_66 = colors.get_textPrimary_mf1tv7_k$();
      var tmp_67 = get_sp(14);
      var tmp_68 = Companion_getInstance_4().get_Medium_1fiba6_k$();
      var tmp_69 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_70 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_71 = _TextOverflow___init__impl__obguoe(0);
      Text('Color de tu espacio', null, tmp_66, null, tmp_67, null, tmp_68, null, tmp_69, null, null, tmp_70, tmp_71, false, 0, 0, null, null, $composer_10, 1597446, 0, 262058);
      var tmp_72 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$66 = _Dp___init__impl__ms3zkb(14);
      Spacer(height(tmp_72, tmp$ret$66), $composer_10, 6);
      var tmp_73 = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$67 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_11 = null;
      var horizontalArrangement_0 = tmp_73.spacedBy_wt7oji_k$(tmp$ret$67);
      var verticalAlignment_0 = null;
      var $composer_31 = $composer_10;
      if (!((5 & 1) === 0))
        modifier_11 = Companion_getInstance_0();
      if (!((5 & 2) === 0))
        horizontalArrangement_0 = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((5 & 4) === 0))
        verticalAlignment_0 = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_5 = rowMeasurePolicy(horizontalArrangement_0, verticalAlignment_0, $composer_31, 14 & 48 >> 3 | 112 & 48 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_12 = modifier_11;
      var $composer_32 = $composer_31;
      if (!((0 & 2) === 0))
        modifier_12 = Companion_getInstance_0();
      var compositeKeyHash_5 = get_currentCompositeKeyHashCode($composer_32, 0).hashCode();
      var localMap_5 = $composer_32.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_5 = materialize($composer_32, modifier_12);
      var tmp0_6 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_33 = $composer_32;
      var tmp_74 = $composer_33.get_applier_bupu8u_k$();
      if (!isInterface(tmp_74, Applier)) {
        invalidApplier();
      }
      $composer_33.startReusableNode_jjgeyp_k$();
      if ($composer_33.get_inserting_25mlsw_k$()) {
        $composer_33.createNode_ahrd54_k$(tmp0_6);
      } else {
        $composer_33.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_5 = _Updater___init__impl__rbfxm8($composer_33);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_5, measurePolicy_5, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_5, localMap_5, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_5, compositeKeyHash_5, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_5, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_5, materialized_5, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_34 = $composer_33;
      RowScopeInstance_getInstance();
      var $composer_35 = $composer_34;
      sourceInformationMarkerStart($composer_35, 260018902, 'C:SettingsScreens.kt#bisg3d');
      $composer_35.startReplaceGroup_5hh8aj_k$(-1515632141);
      sourceInformation($composer_35, '*184@7449L31,179@7217L714');
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = get_entries_2().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        var selected = state.get_accentOption_mj5qe0_k$().equals(element);
        var tmp_75 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$76 = _Dp___init__impl__ms3zkb(40);
        var tmp_76 = background(clip(size_0(tmp_75, tmp$ret$76), get_CircleShape()), element.get_primary_gfn28_k$());
        sourceInformationMarkerStart($composer_35, 739300603, 'CC(remember):SettingsScreens.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = !!(($dirty & 14) === 4 | $composer_0.changed_kpusro_k$(element.get_ordinal_ip24qg_k$()));
        // Inline function 'kotlin.let' call
        var it_2 = $composer_35.rememberedValue_4dg93v_k$();
        var tmp_77;
        if (invalid_2 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_2 = Notas07PersonalizacionScreen$lambda_2(state, element);
          $composer_35.updateRememberedValue_l1wh71_k$(value_2);
          tmp_77 = value_2;
        } else {
          tmp_77 = it_2;
        }
        var tmp0_group_1 = tmp_77;
        sourceInformationMarkerEnd($composer_35);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier_13 = clickable(tmp_76, VOID, VOID, VOID, VOID, tmp0_group_1);
        var contentAlignment_1 = Companion_getInstance_1().get_Center_3arb0i_k$();
        var propagateMinConstraints_1 = false;
        var $composer_36 = $composer_35;
        if (!((4 & 1) === 0))
          modifier_13 = Companion_getInstance_0();
        if (!((4 & 2) === 0))
          contentAlignment_1 = Companion_getInstance_1().get_TopStart_o4x792_k$();
        if (!((4 & 4) === 0))
          propagateMinConstraints_1 = false;
        var measurePolicy_6 = maybeCachedBoxMeasurePolicy(contentAlignment_1, propagateMinConstraints_1);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_14 = modifier_13;
        var $composer_37 = $composer_36;
        if (!((0 & 2) === 0))
          modifier_14 = Companion_getInstance_0();
        var compositeKeyHash_6 = get_currentCompositeKeyHashCode($composer_37, 0).hashCode();
        var localMap_6 = $composer_37.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized_6 = materialize($composer_37, modifier_14);
        var tmp0_7 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_38 = $composer_37;
        var tmp_78 = $composer_38.get_applier_bupu8u_k$();
        if (!isInterface(tmp_78, Applier)) {
          invalidApplier();
        }
        $composer_38.startReusableNode_jjgeyp_k$();
        if ($composer_38.get_inserting_25mlsw_k$()) {
          $composer_38.createNode_ahrd54_k$(tmp0_7);
        } else {
          $composer_38.useNode_io5s9l_k$();
        }
        var $this$ReusableComposeNode_6 = _Updater___init__impl__rbfxm8($composer_38);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_6, measurePolicy_6, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_6, localMap_6, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_6, compositeKeyHash_6, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_6, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_6, materialized_6, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        var $composer_39 = $composer_38;
        BoxScopeInstance_getInstance();
        var $composer_40 = $composer_39;
        sourceInformationMarkerStart($composer_40, 1934811043, 'C:SettingsScreens.kt#bisg3d');
        if (selected) {
          $composer_40.startReplaceGroup_5hh8aj_k$(1934824496);
          sourceInformation($composer_40, '188@7635L248');
          var tmp_79 = Companion_getInstance_3().get_White_xpp3qf_k$();
          var tmp_80 = get_sp(19);
          var tmp_81 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
          var tmp_82 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_83 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_84 = _TextOverflow___init__impl__obguoe(0);
          Text('\u2713', null, tmp_79, null, tmp_80, null, tmp_81, null, tmp_82, null, null, tmp_83, tmp_84, false, 0, 0, null, null, $composer_40, 1597830, 0, 262058);
          $composer_40.endReplaceGroup_ek144q_k$();
        } else {
          $composer_40.startReplaceGroup_5hh8aj_k$(1935116640);
          $composer_40.endReplaceGroup_ek144q_k$();
        }
        sourceInformationMarkerEnd($composer_40);
        $composer_38.endNode_3m0yfn_k$();
      }
      $composer_35.endReplaceGroup_ek144q_k$();
      sourceInformationMarkerEnd($composer_35);
      $composer_33.endNode_3m0yfn_k$();
      var tmp_85 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$87 = _Dp___init__impl__ms3zkb(10);
      Spacer(height(tmp_85, tmp$ret$87), $composer_10, 6);
      var tmp_86 = state.get_accentOption_mj5qe0_k$().get_label_iuj8p7_k$();
      var tmp_87 = colors.get_textSecondary_kl22jf_k$();
      var tmp_88 = get_sp(11);
      var tmp_89 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_90 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_91 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp_86, null, tmp_87, null, tmp_88, null, null, null, tmp_89, null, null, tmp_90, tmp_91, false, 0, 0, null, null, $composer_10, 24576, 0, 262122);
      var tmp_92 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$88 = _Dp___init__impl__ms3zkb(20);
      Spacer(height(tmp_92, tmp$ret$88), $composer_10, 6);
      var tmp_93 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$89 = _Dp___init__impl__ms3zkb(18);
      var tmp_94 = background(clip(tmp_93, RoundedCornerShape(tmp$ret$89)), colors.get_surface_ya87t7_k$());
      var tmp_95;
      if (colors.get_isDark_evw91l_k$()) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_95 = _Dp___init__impl__ms3zkb(1);
      } else {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_95 = _Dp___init__impl__ms3zkb(0.5);
      }
      var tmp_96 = tmp_95;
      var tmp_97 = colors.get_border_pp3j8c_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$92 = _Dp___init__impl__ms3zkb(18);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_15 = border(tmp_94, tmp_96, tmp_97, RoundedCornerShape(tmp$ret$92));
      var verticalArrangement_2 = null;
      var horizontalAlignment_2 = null;
      var $composer_41 = $composer_10;
      if (!((6 & 1) === 0))
        modifier_15 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_2 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_2 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_7 = columnMeasurePolicy(verticalArrangement_2, horizontalAlignment_2, $composer_41, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_16 = modifier_15;
      var $composer_42 = $composer_41;
      if (!((0 & 2) === 0))
        modifier_16 = Companion_getInstance_0();
      var compositeKeyHash_7 = get_currentCompositeKeyHashCode($composer_42, 0).hashCode();
      var localMap_7 = $composer_42.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_7 = materialize($composer_42, modifier_16);
      var tmp0_8 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_43 = $composer_42;
      var tmp_98 = $composer_43.get_applier_bupu8u_k$();
      if (!isInterface(tmp_98, Applier)) {
        invalidApplier();
      }
      $composer_43.startReusableNode_jjgeyp_k$();
      if ($composer_43.get_inserting_25mlsw_k$()) {
        $composer_43.createNode_ahrd54_k$(tmp0_8);
      } else {
        $composer_43.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_7 = _Updater___init__impl__rbfxm8($composer_43);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_7, measurePolicy_7, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_7, localMap_7, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_7, compositeKeyHash_7, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_7, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_7, materialized_7, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_44 = $composer_43;
      ColumnScopeInstance_getInstance();
      var $composer_45 = $composer_44;
      sourceInformationMarkerStart($composer_45, -1738865030, 'C222@8990L50,219@8755L304,224@9076L244,234@9495L49,231@9337L226:SettingsScreens.kt#bisg3d');
      var tmp_99 = '' + state.get_alertAdvanceMinutes_bbtzhs_k$() + ' minutos antes \xB7 ' + (state.get_soundAlertEnabled_clh83v_k$() ? 'sonido suave' : 'silencio');
      sourceInformationMarkerStart($composer_45, 1467934995, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_3 = $composer_45.rememberedValue_4dg93v_k$();
      var tmp_100;
      if (invalid_3 || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_3 = Notas07PersonalizacionScreen$lambda_3(state);
        $composer_45.updateRememberedValue_l1wh71_k$(value_3);
        tmp_100 = value_3;
      } else {
        tmp_100 = it_3;
      }
      var tmp0_group_2 = tmp_100;
      sourceInformationMarkerEnd($composer_45);
      PreferenceRow('Alertas y sonido', tmp_99, tmp0_group_2, $composer_45, 6);
      var tmp_101 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$103 = _Dp___init__impl__ms3zkb(18);
      var tmp_102 = padding(tmp_101, tmp$ret$103);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$104 = _Dp___init__impl__ms3zkb(1);
      Box(background(height(tmp_102, tmp$ret$104), colors.get_border_pp3j8c_k$()), $composer_45, 0);
      sourceInformationMarkerStart($composer_45, 1467951154, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_4 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_4 = $composer_45.rememberedValue_4dg93v_k$();
      var tmp_103;
      if (invalid_4 || it_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_4 = Notas07PersonalizacionScreen$lambda_4(state);
        $composer_45.updateRememberedValue_l1wh71_k$(value_4);
        tmp_103 = value_4;
      } else {
        tmp_103 = it_4;
      }
      var tmp1_group_0 = tmp_103;
      sourceInformationMarkerEnd($composer_45);
      PreferenceRow('Cambiar contrase\xF1a', 'Tu acceso, siempre protegido', tmp1_group_0, $composer_45, 54);
      sourceInformationMarkerEnd($composer_45);
      $composer_43.endNode_3m0yfn_k$();
      var tmp_104 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$109 = _Dp___init__impl__ms3zkb(22);
      Spacer(height(tmp_104, tmp$ret$109), $composer_10, 6);
      sourceInformationMarkerStart($composer_10, 534728543, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_5 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_5 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_105;
      if (invalid_5 || it_5 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_5 = Notas07PersonalizacionScreen$lambda_5(state);
        $composer_10.updateRememberedValue_l1wh71_k$(value_5);
        tmp_105 = value_5;
      } else {
        tmp_105 = it_5;
      }
      var tmp1_group_1 = tmp_105;
      sourceInformationMarkerEnd($composer_10);
      var tmp_106 = _Dp___init__impl__ms3zkb(0.0);
      NotasPrimaryButton('Guardar preferencias', tmp1_group_1, null, tmp_106, _Dp___init__impl__ms3zkb(0.0), $composer_10, 6, 28);
      var tmp_107 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$114 = _Dp___init__impl__ms3zkb(18);
      Spacer(height(tmp_107, tmp$ret$114), $composer_10, 6);
      var tmp3_color = colors.get_textSecondary_kl22jf_k$();
      var tmp4_fontSize = get_sp(12);
      var tmp5_fontWeight = Companion_getInstance_4().get_Medium_1fiba6_k$();
      var tmp_108 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$115 = _Dp___init__impl__ms3zkb(8);
      var tmp_109 = clip(tmp_108, RoundedCornerShape(tmp$ret$115));
      sourceInformationMarkerStart($composer_10, 534742194, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_6 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_6 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_110;
      if (invalid_6 || it_6 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_6 = Notas07PersonalizacionScreen$lambda_6(state);
        $composer_10.updateRememberedValue_l1wh71_k$(value_6);
        tmp_110 = value_6;
      } else {
        tmp_110 = it_6;
      }
      var tmp2_group = tmp_110;
      sourceInformationMarkerEnd($composer_10);
      var tmp0_$receiver = clickable(tmp_109, VOID, VOID, VOID, VOID, tmp2_group);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp1_vertical = _Dp___init__impl__ms3zkb(4);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp2_horizontal = _Dp___init__impl__ms3zkb(2);
      var tmp6_modifier = padding(tmp0_$receiver, tmp2_horizontal, tmp1_vertical);
      var tmp_111 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_112 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_113 = _TextOverflow___init__impl__obguoe(0);
      Text('Cerrar sesi\xF3n', tmp6_modifier, tmp3_color, null, tmp4_fontSize, null, tmp5_fontWeight, null, tmp_111, null, null, tmp_112, tmp_113, false, 0, 0, null, null, $composer_10, 1597446, 0, 262056);
      var tmp_114 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$122 = _Dp___init__impl__ms3zkb(16);
      Spacer(height(tmp_114, tmp$ret$122), $composer_10, 6);
      sourceInformationMarkerEnd($composer_10);
      $composer_8.endNode_3m0yfn_k$();
      var tmp_115 = NotasTab_SETTINGS_getInstance();
      sourceInformationMarkerStart($composer_5, -738263959, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_7 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_7 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_116;
      if (invalid_7 || it_7 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_7 = NotasAppState$navigateToTab$ref_2(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value_7);
        tmp_116 = value_7;
      } else {
        tmp_116 = it_7;
      }
      var tmp2_group_0 = tmp_116;
      sourceInformationMarkerEnd($composer_5);
      NotasBottomNavigation(tmp_115, tmp2_group_0, null, $composer_5, 6, 4);
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Notas07PersonalizacionScreen$lambda_7(state, nightModeScreen_0, $changed, $default));
    }
  }
  function PreferenceRow(title, subtitle, onClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(186612490);
    sourceInformation($composer_0, 'C(PreferenceRow)P(2,1)270@10628L6,271@10639L855:SettingsScreens.kt#bisg3d');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(title) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(subtitle) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 256 : 128);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 147) === 146), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(186612490, $dirty, -1, 'com.notas.agenda.ui.screens.PreferenceRow (SettingsScreens.kt:269)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      var tmp = clickable(fillMaxWidth(Companion_getInstance_0()), VOID, VOID, VOID, VOID, onClick);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_0 = _Dp___init__impl__ms3zkb(18);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier = padding(tmp, tmp_0, tmp$ret$1);
      var horizontalArrangement = Arrangement_getInstance().get_SpaceBetween_5p3wqd_k$();
      var verticalAlignment = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_1 = $composer_0;
      if (!((0 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((0 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((0 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp_1 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_1, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      var tmp0_0 = RowScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -1055630543, 'C279@10932L436,293@11377L111:SettingsScreens.kt#bisg3d');
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = tmp0_0.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0);
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_6 = $composer_5;
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      var tmp0_1 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      var tmp_2 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_2, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_1);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_9 = $composer_8;
      ColumnScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, 154080126, 'C280@10985L175,286@11173L40,287@11226L132:SettingsScreens.kt#bisg3d');
      var tmp_3 = colors.get_textPrimary_mf1tv7_k$();
      var tmp_4 = get_sp(14);
      var tmp_5 = Companion_getInstance_4().get_Medium_1fiba6_k$();
      var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_8 = _TextOverflow___init__impl__obguoe(0);
      Text(title, null, tmp_3, null, tmp_4, null, tmp_5, null, tmp_6, null, null, tmp_7, tmp_8, false, 0, 0, null, null, $composer_10, 1597440 | 14 & $dirty, 0, 262058);
      var tmp_9 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$14 = _Dp___init__impl__ms3zkb(4);
      Spacer(height(tmp_9, tmp$ret$14), $composer_10, 6);
      var tmp_10 = colors.get_textSecondary_kl22jf_k$();
      var tmp_11 = get_sp(11);
      var tmp_12 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_14 = _TextOverflow___init__impl__obguoe(0);
      Text(subtitle, null, tmp_10, null, tmp_11, null, null, null, tmp_12, null, null, tmp_13, tmp_14, false, 0, 0, null, null, $composer_10, 24576 | 14 & $dirty >> 3, 0, 262122);
      sourceInformationMarkerEnd($composer_10);
      $composer_8.endNode_3m0yfn_k$();
      var tmp_15 = colors.get_textSecondary_kl22jf_k$();
      var tmp_16 = get_sp(24);
      var tmp_17 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_18 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_19 = _TextOverflow___init__impl__obguoe(0);
      Text('\u203A', null, tmp_15, null, tmp_16, null, null, null, tmp_17, null, null, tmp_18, tmp_19, false, 0, 0, null, null, $composer_5, 24582, 0, 262122);
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(PreferenceRow$lambda(title, subtitle, onClick, $changed));
    }
  }
  function Notas08CambiarContrasenaScreen(state, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-601890236);
    sourceInformation($composer_0, 'C(Notas08CambiarContrasenaScreen)303@11597L6,304@11626L48,305@11693L45,306@11761L45,307@11830L34,308@11884L34,309@11942L34,310@11998L42,317@12248L4883:SettingsScreens.kt#bisg3d');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(state) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-601890236, $dirty, -1, 'com.notas.agenda.ui.screens.Notas08CambiarContrasenaScreen (SettingsScreens.kt:302)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      sourceInformationMarkerStart($composer_0, 1404071924, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = mutableStateOf(state.get_loginPassword_3kfbi3_k$());
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp0_group = tmp;
      sourceInformationMarkerEnd($composer_0);
      var currentPwd$delegate = tmp0_group;
      sourceInformationMarkerStart($composer_0, 1404074065, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = mutableStateOf('NotasSeguro26!');
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_0 = value_0;
      } else {
        tmp_0 = it_0;
      }
      var tmp1_group = tmp_0;
      sourceInformationMarkerEnd($composer_0);
      var newPwd$delegate = tmp1_group;
      sourceInformationMarkerStart($composer_0, 1404076241, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_1 = this_2.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = mutableStateOf('NotasSeguro26!');
        this_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_1 = value_1;
      } else {
        tmp_1 = it_1;
      }
      var tmp2_group = tmp_1;
      sourceInformationMarkerEnd($composer_0);
      var confirmPwd$delegate = tmp2_group;
      sourceInformationMarkerStart($composer_0, 1404078438, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_3 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_2 = this_3.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_2 = mutableStateOf(false);
        this_3.updateRememberedValue_l1wh71_k$(value_2);
        tmp_2 = value_2;
      } else {
        tmp_2 = it_2;
      }
      var tmp3_group = tmp_2;
      sourceInformationMarkerEnd($composer_0);
      var showCurrent$delegate = tmp3_group;
      sourceInformationMarkerStart($composer_0, 1404080166, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_4 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_3 = this_4.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_3 = mutableStateOf(false);
        this_4.updateRememberedValue_l1wh71_k$(value_3);
        tmp_3 = value_3;
      } else {
        tmp_3 = it_3;
      }
      var tmp4_group = tmp_3;
      sourceInformationMarkerEnd($composer_0);
      var showNew$delegate = tmp4_group;
      sourceInformationMarkerStart($composer_0, 1404082022, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_5 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_4 = this_5.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (false || it_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_4 = mutableStateOf(false);
        this_5.updateRememberedValue_l1wh71_k$(value_4);
        tmp_4 = value_4;
      } else {
        tmp_4 = it_4;
      }
      var tmp5_group = tmp_4;
      sourceInformationMarkerEnd($composer_0);
      var showConfirm$delegate = tmp5_group;
      sourceInformationMarkerStart($composer_0, 1404083822, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var this_6 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_5 = this_6.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (false || it_5 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_5 = mutableStateOf(null);
        this_6.updateRememberedValue_l1wh71_k$(value_5);
        tmp_5 = value_5;
      } else {
        tmp_5 = it_5;
      }
      var tmp6_group = tmp_5;
      sourceInformationMarkerEnd($composer_0);
      var errorText$delegate = tmp6_group;
      var hasLength = Notas08CambiarContrasenaScreen$lambda_1(newPwd$delegate).length >= 8;
      var tmp0 = Notas08CambiarContrasenaScreen$lambda_1(newPwd$delegate);
      var tmp$ret$28;
      $l$block: {
        // Inline function 'kotlin.text.any' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp0)) {
          var element = charSequenceGet(tmp0, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (isDigit(element)) {
            tmp$ret$28 = true;
            break $l$block;
          }
        }
        tmp$ret$28 = false;
      }
      var hasNumber = tmp$ret$28;
      var tmp0_0 = Notas08CambiarContrasenaScreen$lambda_1(newPwd$delegate);
      var tmp$ret$30;
      $l$block_0: {
        // Inline function 'kotlin.text.any' call
        var inductionVariable_0 = 0;
        while (inductionVariable_0 < charSequenceLength(tmp0_0)) {
          var element_0 = charSequenceGet(tmp0_0, inductionVariable_0);
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (!isLetterOrDigit(element_0)) {
            tmp$ret$30 = true;
            break $l$block_0;
          }
        }
        tmp$ret$30 = false;
      }
      var hasSymbol = tmp$ret$30;
      var allRulesOk = hasLength && hasNumber && hasSymbol;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = background(fillMaxSize(Companion_getInstance_0()), colors.get_background_8l4942_k$());
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0_1 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp_6 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_6, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0_1);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      var tmp0_2 = ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 1593728887, 'C322@12371L19,328@12597L133,323@12399L342,336@12851L21,333@12751L4346,440@17107L18:SettingsScreens.kt#bisg3d');
      NotasTopStatusBar(null, $composer_5, 0, 1);
      var tmp_7 = NotasIcons_getInstance().get_Close_i86z73_k$();
      sourceInformationMarkerStart($composer_5, -1195512769, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_6 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_8;
      if (invalid || it_6 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_6 = Notas08CambiarContrasenaScreen$lambda_13(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value_6);
        tmp_8 = value_6;
      } else {
        tmp_8 = it_6;
      }
      var tmp0_group_0 = tmp_8;
      sourceInformationMarkerEnd($composer_5);
      NotasHeader('NOTAS', 'Seguridad', 'Actualiza tu contrase\xF1a', tmp_7, null, tmp0_group_0, null, null, null, $composer_5, 438, 464);
      var tmp_9 = tmp0_2.weight$default_gbkz97_k$(Companion_getInstance_0(), 1.0);
      var tmp_10 = verticalScroll(tmp_9, rememberScrollState(0, $composer_5, 0, 1));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$42 = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = padding(tmp_10, tmp$ret$42);
      var verticalArrangement_0 = null;
      var horizontalAlignment_0 = null;
      var $composer_6 = $composer_5;
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_0 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_0 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement_0, horizontalAlignment_0, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      var tmp0_3 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      var tmp_11 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_11, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_3);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_9 = $composer_8;
      ColumnScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, 937944516, 'C339@12944L40,342@13045L785,363@13844L41,367@14028L37,370@14194L30,364@13898L379,373@14290L41,377@14469L33,380@14627L22,374@14344L358,383@14715L41,387@14908L37,390@15074L30,384@14769L388,394@15171L41,397@15262L612,420@16219L41,423@16367L651,421@16273L760,437@17046L41:SettingsScreens.kt#bisg3d');
      var tmp_12 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$49 = _Dp___init__impl__ms3zkb(6);
      Spacer(height(tmp_12, tmp$ret$49), $composer_10, 6);
      var tmp_13 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$50 = _Dp___init__impl__ms3zkb(18);
      var tmp_14 = background(clip(tmp_13, RoundedCornerShape(tmp$ret$50)), colors.get_accentContainer_6iiayz_k$());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_15 = _Dp___init__impl__ms3zkb(18);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$52 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_3 = padding(tmp_14, tmp_15, tmp$ret$52);
      var verticalArrangement_1 = null;
      var horizontalAlignment_1 = null;
      var $composer_11 = $composer_10;
      if (!((6 & 1) === 0))
        modifier_3 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_1 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_1 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_1 = columnMeasurePolicy(verticalArrangement_1, horizontalAlignment_1, $composer_11, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_12 = $composer_11;
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_0();
      var compositeKeyHash_1 = get_currentCompositeKeyHashCode($composer_12, 0).hashCode();
      var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_1 = materialize($composer_12, modifier_4);
      var tmp0_4 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_13 = $composer_12;
      var tmp_16 = $composer_13.get_applier_bupu8u_k$();
      if (!isInterface(tmp_16, Applier)) {
        invalidApplier();
      }
      $composer_13.startReusableNode_jjgeyp_k$();
      if ($composer_13.get_inserting_25mlsw_k$()) {
        $composer_13.createNode_ahrd54_k$(tmp0_4);
      } else {
        $composer_13.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, compositeKeyHash_1, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_1, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_14 = $composer_13;
      ColumnScopeInstance_getInstance();
      var $composer_15 = $composer_14;
      sourceInformationMarkerStart($composer_15, 331352507, 'C349@13334L220,355@13571L40,356@13628L188:SettingsScreens.kt#bisg3d');
      var tmp_17 = colors.get_accentContent_6vke99_k$();
      var tmp_18 = get_sp(16);
      var tmp_19 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_20 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_21 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_22 = _TextOverflow___init__impl__obguoe(0);
      Text('Una contrase\xF1a solo tuya', null, tmp_17, null, tmp_18, null, tmp_19, null, tmp_20, null, null, tmp_21, tmp_22, false, 0, 0, null, null, $composer_15, 1597446, 0, 262058);
      var tmp_23 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$59 = _Dp___init__impl__ms3zkb(6);
      Spacer(height(tmp_23, tmp$ret$59), $composer_15, 6);
      var tmp_24 = colors.get_textSecondary_kl22jf_k$();
      var tmp_25 = get_sp(12);
      var tmp_26 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_27 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_28 = _TextOverflow___init__impl__obguoe(0);
      Text('Evita reutilizar contrase\xF1as de otras cuentas.', null, tmp_24, null, tmp_25, null, null, null, tmp_26, null, null, tmp_27, tmp_28, false, 0, 0, null, null, $composer_15, 24582, 0, 262122);
      sourceInformationMarkerEnd($composer_15);
      $composer_13.endNode_3m0yfn_k$();
      var tmp_29 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$60 = _Dp___init__impl__ms3zkb(22);
      Spacer(height(tmp_29, tmp$ret$60), $composer_10, 6);
      var tmp_30 = Notas08CambiarContrasenaScreen$lambda(currentPwd$delegate);
      sourceInformationMarkerStart($composer_10, 445928853, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_7 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_31;
      if (false || it_7 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_7 = Notas08CambiarContrasenaScreen$lambda_14(currentPwd$delegate, errorText$delegate);
        $composer_10.updateRememberedValue_l1wh71_k$(value_7);
        tmp_31 = value_7;
      } else {
        tmp_31 = it_7;
      }
      var tmp0_group_1 = tmp_31;
      sourceInformationMarkerEnd($composer_10);
      var tmp_32 = Notas08CambiarContrasenaScreen$lambda_5(showCurrent$delegate);
      sourceInformationMarkerStart($composer_10, 445934158, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_8 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_33;
      if (false || it_8 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_8 = Notas08CambiarContrasenaScreen$lambda_15(showCurrent$delegate);
        $composer_10.updateRememberedValue_l1wh71_k$(value_8);
        tmp_33 = value_8;
      } else {
        tmp_33 = it_8;
      }
      var tmp1_group_0 = tmp_33;
      sourceInformationMarkerEnd($composer_10);
      var tmp_34 = _Dp___init__impl__ms3zkb(0.0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_35 = _Dp___init__impl__ms3zkb(18);
      NotasInputField('Contrase\xF1a actual', tmp_30, tmp0_group_1, null, true, tmp_32, tmp1_group_0, false, tmp_34, tmp_35, null, $composer_10, 806904198, 0, 1416);
      var tmp_36 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$70 = _Dp___init__impl__ms3zkb(18);
      Spacer(height(tmp_36, tmp$ret$70), $composer_10, 6);
      var tmp_37 = Notas08CambiarContrasenaScreen$lambda_1(newPwd$delegate);
      sourceInformationMarkerStart($composer_10, 445942961, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_9 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_38;
      if (false || it_9 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_9 = Notas08CambiarContrasenaScreen$lambda_16(newPwd$delegate, errorText$delegate);
        $composer_10.updateRememberedValue_l1wh71_k$(value_9);
        tmp_38 = value_9;
      } else {
        tmp_38 = it_9;
      }
      var tmp2_group_0 = tmp_38;
      sourceInformationMarkerEnd($composer_10);
      var tmp_39 = Notas08CambiarContrasenaScreen$lambda_7(showNew$delegate);
      sourceInformationMarkerStart($composer_10, 445948006, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_10 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_40;
      if (false || it_10 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_10 = Notas08CambiarContrasenaScreen$lambda_17(showNew$delegate);
        $composer_10.updateRememberedValue_l1wh71_k$(value_10);
        tmp_40 = value_10;
      } else {
        tmp_40 = it_10;
      }
      var tmp3_group_0 = tmp_40;
      sourceInformationMarkerEnd($composer_10);
      var tmp_41 = _Dp___init__impl__ms3zkb(0.0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_42 = _Dp___init__impl__ms3zkb(18);
      NotasInputField('Nueva contrase\xF1a', tmp_37, tmp2_group_0, null, true, tmp_39, tmp3_group_0, false, tmp_41, tmp_42, null, $composer_10, 806904198, 0, 1416);
      var tmp_43 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$80 = _Dp___init__impl__ms3zkb(18);
      Spacer(height(tmp_43, tmp$ret$80), $composer_10, 6);
      var tmp_44 = Notas08CambiarContrasenaScreen$lambda_3(confirmPwd$delegate);
      sourceInformationMarkerStart($composer_10, 445957013, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_11 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_45;
      if (false || it_11 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_11 = Notas08CambiarContrasenaScreen$lambda_18(confirmPwd$delegate, errorText$delegate);
        $composer_10.updateRememberedValue_l1wh71_k$(value_11);
        tmp_45 = value_11;
      } else {
        tmp_45 = it_11;
      }
      var tmp4_group_0 = tmp_45;
      sourceInformationMarkerEnd($composer_10);
      var tmp_46 = Notas08CambiarContrasenaScreen$lambda_9(showConfirm$delegate);
      sourceInformationMarkerStart($composer_10, 445962318, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_12 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_47;
      if (false || it_12 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_12 = Notas08CambiarContrasenaScreen$lambda_19(showConfirm$delegate);
        $composer_10.updateRememberedValue_l1wh71_k$(value_12);
        tmp_47 = value_12;
      } else {
        tmp_47 = it_12;
      }
      var tmp5_group_0 = tmp_47;
      sourceInformationMarkerEnd($composer_10);
      var tmp_48 = _Dp___init__impl__ms3zkb(0.0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_49 = _Dp___init__impl__ms3zkb(18);
      NotasInputField('Confirmar nueva contrase\xF1a', tmp_44, tmp4_group_0, null, true, tmp_46, tmp5_group_0, false, tmp_48, tmp_49, null, $composer_10, 806904198, 0, 1416);
      var tmp_50 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$90 = _Dp___init__impl__ms3zkb(20);
      Spacer(height(tmp_50, tmp$ret$90), $composer_10, 6);
      var tmp_51 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$91 = _Dp___init__impl__ms3zkb(18);
      var tmp_52 = background(clip(tmp_51, RoundedCornerShape(tmp$ret$91)), allRulesOk ? colors.get_successContainer_dqfg6m_k$() : colors.get_surfaceMuted_41zcuq_k$());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_53 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$93 = _Dp___init__impl__ms3zkb(14);
      var tmp0_5 = padding(tmp_52, tmp_53, tmp$ret$93);
      var tmp_54 = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$94 = _Dp___init__impl__ms3zkb(8);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_5 = tmp0_5;
      var verticalArrangement_2 = tmp_54.spacedBy_wt7oji_k$(tmp$ret$94);
      var horizontalAlignment_2 = null;
      var $composer_16 = $composer_10;
      if (!((4 & 1) === 0))
        modifier_5 = Companion_getInstance_0();
      if (!((4 & 2) === 0))
        verticalArrangement_2 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((4 & 4) === 0))
        horizontalAlignment_2 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_2 = columnMeasurePolicy(verticalArrangement_2, horizontalAlignment_2, $composer_16, 14 & 48 >> 3 | 112 & 48 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_6 = modifier_5;
      var $composer_17 = $composer_16;
      if (!((0 & 2) === 0))
        modifier_6 = Companion_getInstance_0();
      var compositeKeyHash_2 = get_currentCompositeKeyHashCode($composer_17, 0).hashCode();
      var localMap_2 = $composer_17.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_2 = materialize($composer_17, modifier_6);
      var tmp0_6 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_18 = $composer_17;
      var tmp_55 = $composer_18.get_applier_bupu8u_k$();
      if (!isInterface(tmp_55, Applier)) {
        invalidApplier();
      }
      $composer_18.startReusableNode_jjgeyp_k$();
      if ($composer_18.get_inserting_25mlsw_k$()) {
        $composer_18.createNode_ahrd54_k$(tmp0_6);
      } else {
        $composer_18.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_18);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, compositeKeyHash_2, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_2, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_19 = $composer_18;
      ColumnScopeInstance_getInstance();
      var $composer_20 = $composer_19;
      sourceInformationMarkerStart($composer_20, 1131841949, 'C405@15659L58,406@15734L54,407@15805L55:SettingsScreens.kt#bisg3d');
      PasswordRequirementRow('Al menos 8 caracteres', hasLength, $composer_20, 6);
      PasswordRequirementRow('Al menos 1 n\xFAmero', hasNumber, $composer_20, 6);
      PasswordRequirementRow('Al menos 1 s\xEDmbolo', hasSymbol, $composer_20, 6);
      sourceInformationMarkerEnd($composer_20);
      $composer_18.endNode_3m0yfn_k$();
      if (!(Notas08CambiarContrasenaScreen$lambda_11(errorText$delegate) == null)) {
        $composer_10.startReplaceGroup_5hh8aj_k$(940768460);
        sourceInformation($composer_10, '411@15929L41,412@15987L204');
        var tmp_56 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$101 = _Dp___init__impl__ms3zkb(10);
        Spacer(height(tmp_56, tmp$ret$101), $composer_10, 6);
        var tmp_57 = ensureNotNull(Notas08CambiarContrasenaScreen$lambda_11(errorText$delegate));
        var tmp_58 = colors.get_warningContent_6yfjgt_k$();
        var tmp_59 = get_sp(12);
        var tmp_60 = Companion_getInstance_4().get_Medium_1fiba6_k$();
        var tmp_61 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_62 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_63 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_57, null, tmp_58, null, tmp_59, null, tmp_60, null, tmp_61, null, null, tmp_62, tmp_63, false, 0, 0, null, null, $composer_10, 1597440, 0, 262058);
        $composer_10.endReplaceGroup_ek144q_k$();
      } else {
        $composer_10.startReplaceGroup_5hh8aj_k$(941050994);
        $composer_10.endReplaceGroup_ek144q_k$();
      }
      var tmp_64 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$102 = _Dp___init__impl__ms3zkb(22);
      Spacer(height(tmp_64, tmp$ret$102), $composer_10, 6);
      sourceInformationMarkerStart($composer_10, 446004315, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!($composer_0.changed_jpyyrz_k$(allRulesOk) | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      var it_13 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_65;
      if (invalid_0 || it_13 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_13 = Notas08CambiarContrasenaScreen$lambda_20(allRulesOk, state, errorText$delegate, newPwd$delegate, confirmPwd$delegate);
        $composer_10.updateRememberedValue_l1wh71_k$(value_13);
        tmp_65 = value_13;
      } else {
        tmp_65 = it_13;
      }
      var tmp6_group_0 = tmp_65;
      sourceInformationMarkerEnd($composer_10);
      var tmp_66 = _Dp___init__impl__ms3zkb(0.0);
      NotasPrimaryButton('Actualizar contrase\xF1a', tmp6_group_0, null, tmp_66, _Dp___init__impl__ms3zkb(0.0), $composer_10, 6, 28);
      var tmp_67 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$107 = _Dp___init__impl__ms3zkb(20);
      Spacer(height(tmp_67, tmp$ret$107), $composer_10, 6);
      sourceInformationMarkerEnd($composer_10);
      $composer_8.endNode_3m0yfn_k$();
      NotasModalFooter(null, null, $composer_5, 0, 3);
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp7_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp7_safe_receiver == null)
      null;
    else {
      tmp7_safe_receiver.updateScope_t8jcf_k$(Notas08CambiarContrasenaScreen$lambda_21(state, $changed));
    }
  }
  function PasswordRequirementRow(text, met, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1880329066);
    sourceInformation($composer_0, 'C(PasswordRequirementRow)P(1)446@17240L6,448@17324L150:SettingsScreens.kt#bisg3d');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(met) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1880329066, $dirty, -1, 'com.notas.agenda.ui.screens.PasswordRequirementRow (SettingsScreens.kt:445)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      var color = met ? colors.get_successContent_tyisdi_k$() : colors.get_textSecondary_kl22jf_k$();
      var tmp = (met ? '\u2713' : '\u25CB') + '  ' + text;
      var tmp_0 = get_sp(12);
      var tmp_1 = Companion_getInstance_4().get_Medium_1fiba6_k$();
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_4 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp, null, color, null, tmp_0, null, tmp_1, null, tmp_2, null, null, tmp_3, tmp_4, false, 0, 0, null, null, $composer_0, 1597440, 0, 262058);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(PasswordRequirementRow$lambda(text, met, $changed));
    }
  }
  function Notas09ConfigurarAlertasScreen(state, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1658692140);
    sourceInformation($composer_0, 'C(Notas09ConfigurarAlertasScreen)458@17577L6,461@17665L11175:SettingsScreens.kt#bisg3d');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(state) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1658692140, $dirty, -1, 'com.notas.agenda.ui.screens.Notas09ConfigurarAlertasScreen (SettingsScreens.kt:457)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      var tones = listOf(['Campana suave', 'Brisa cristalina', 'Pulso c\xE1lido']);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = background(fillMaxSize(Companion_getInstance_0()), colors.get_background_8l4942_k$());
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      var tmp0_0 = ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 518681555, 'C466@17788L19,472@18024L133,467@17816L352,478@18267L32,476@18177L133,484@18420L21,481@18320L10381,731@28803L20,729@28711L123:SettingsScreens.kt#bisg3d');
      NotasTopStatusBar(null, $composer_5, 0, 1);
      var tmp_0 = NotasIcons_getInstance().get_Close_i86z73_k$();
      sourceInformationMarkerStart($composer_5, 1125106959, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = Notas09ConfigurarAlertasScreen$lambda(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp0_group = tmp_1;
      sourceInformationMarkerEnd($composer_5);
      NotasHeader('NOTAS', 'Alertas', 'Llega a tiempo, sin estar pendiente', tmp_0, null, tmp0_group, null, null, null, $composer_5, 438, 464);
      var tmp_2 = state.get_feedbackMessage_z5ejaf_k$();
      sourceInformationMarkerStart($composer_5, 1125114634, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_0 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = Notas09ConfigurarAlertasScreen$lambda_0(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp1_group = tmp_3;
      sourceInformationMarkerEnd($composer_5);
      NotasFeedbackBanner(tmp_2, tmp1_group, $composer_5, 0);
      var tmp_4 = tmp0_0.weight$default_gbkz97_k$(Companion_getInstance_0(), 1.0);
      var tmp_5 = verticalScroll(tmp_4, rememberScrollState(0, $composer_5, 0, 1));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$14 = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = padding(tmp_5, tmp$ret$14);
      var verticalArrangement_0 = null;
      var horizontalAlignment_0 = null;
      var $composer_6 = $composer_5;
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_0 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_0 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement_0, horizontalAlignment_0, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      var tmp0_1 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      var tmp_6 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_6, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_1);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_9 = $composer_8;
      ColumnScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, -137110783, 'C487@18513L40,490@18606L1409,524@20029L41,525@20083L195,531@20291L41,581@22613L41,584@22697L3036,656@25747L41,670@26302L174,659@25832L2367,716@28213L41,719@28355L267,717@28267L370,726@28650L41:SettingsScreens.kt#bisg3d');
      var tmp_7 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$21 = _Dp___init__impl__ms3zkb(6);
      Spacer(height(tmp_7, tmp$ret$21), $composer_10, 6);
      var tmp_8 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$22 = _Dp___init__impl__ms3zkb(16);
      var tmp_9 = background(clip(tmp_8, RoundedCornerShape(tmp$ret$22)), colors.get_surface_ya87t7_k$());
      var tmp_10;
      if (colors.get_isDark_evw91l_k$()) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_10 = _Dp___init__impl__ms3zkb(1);
      } else {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_10 = _Dp___init__impl__ms3zkb(0.5);
      }
      var tmp_11 = tmp_10;
      var tmp_12 = colors.get_border_pp3j8c_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$25 = _Dp___init__impl__ms3zkb(16);
      var tmp_13 = border(tmp_9, tmp_11, tmp_12, RoundedCornerShape(tmp$ret$25));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_14 = _Dp___init__impl__ms3zkb(17);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$27 = _Dp___init__impl__ms3zkb(18);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_3 = padding(tmp_13, tmp_14, tmp$ret$27);
      var horizontalArrangement = Arrangement_getInstance().get_SpaceBetween_5p3wqd_k$();
      var verticalAlignment = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_11 = $composer_10;
      if (!((0 & 1) === 0))
        modifier_3 = Companion_getInstance_0();
      if (!((0 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((0 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_1 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_11, 14 & 432 >> 3 | 112 & 432 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_12 = $composer_11;
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_0();
      var compositeKeyHash_1 = get_currentCompositeKeyHashCode($composer_12, 0).hashCode();
      var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_1 = materialize($composer_12, modifier_4);
      var tmp0_2 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_13 = $composer_12;
      var tmp_15 = $composer_13.get_applier_bupu8u_k$();
      if (!isInterface(tmp_15, Applier)) {
        invalidApplier();
      }
      $composer_13.startReusableNode_jjgeyp_k$();
      if ($composer_13.get_inserting_25mlsw_k$()) {
        $composer_13.createNode_ahrd54_k$(tmp0_2);
      } else {
        $composer_13.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, compositeKeyHash_1, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_1, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_14 = $composer_13;
      var tmp0_3 = RowScopeInstance_getInstance();
      var $composer_15 = $composer_14;
      sourceInformationMarkerStart($composer_15, -1965878970, 'C504@19240L589,520@19951L31,518@19846L155:SettingsScreens.kt#bisg3d');
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_5 = tmp0_3.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0);
      var verticalArrangement_1 = null;
      var horizontalAlignment_1 = null;
      var $composer_16 = $composer_15;
      if (!((6 & 1) === 0))
        modifier_5 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_1 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_1 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_2 = columnMeasurePolicy(verticalArrangement_1, horizontalAlignment_1, $composer_16, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_6 = modifier_5;
      var $composer_17 = $composer_16;
      if (!((0 & 2) === 0))
        modifier_6 = Companion_getInstance_0();
      var compositeKeyHash_2 = get_currentCompositeKeyHashCode($composer_17, 0).hashCode();
      var localMap_2 = $composer_17.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_2 = materialize($composer_17, modifier_6);
      var tmp0_4 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_18 = $composer_17;
      var tmp_16 = $composer_18.get_applier_bupu8u_k$();
      if (!isInterface(tmp_16, Applier)) {
        invalidApplier();
      }
      $composer_18.startReusableNode_jjgeyp_k$();
      if ($composer_18.get_inserting_25mlsw_k$()) {
        $composer_18.createNode_ahrd54_k$(tmp0_4);
      } else {
        $composer_18.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_18);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, compositeKeyHash_2, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_2, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_19 = $composer_18;
      ColumnScopeInstance_getInstance();
      var $composer_20 = $composer_19;
      sourceInformationMarkerStart($composer_20, 171753643, 'C505@19301L237,511@19559L40,512@19620L191:SettingsScreens.kt#bisg3d');
      var tmp_17 = colors.get_textPrimary_mf1tv7_k$();
      var tmp_18 = get_sp(15);
      var tmp_19 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_20 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_21 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_22 = _TextOverflow___init__impl__obguoe(0);
      Text('Recordatorios activados', null, tmp_17, null, tmp_18, null, tmp_19, null, tmp_20, null, null, tmp_21, tmp_22, false, 0, 0, null, null, $composer_20, 1597446, 0, 262058);
      var tmp_23 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$40 = _Dp___init__impl__ms3zkb(4);
      Spacer(height(tmp_23, tmp$ret$40), $composer_20, 6);
      var tmp_24 = colors.get_textSecondary_kl22jf_k$();
      var tmp_25 = get_sp(11);
      var tmp_26 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_27 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_28 = _TextOverflow___init__impl__obguoe(0);
      Text('Para todas las citas de tu agenda', null, tmp_24, null, tmp_25, null, null, null, tmp_26, null, null, tmp_27, tmp_28, false, 0, 0, null, null, $composer_20, 24582, 0, 262122);
      sourceInformationMarkerEnd($composer_20);
      $composer_18.endNode_3m0yfn_k$();
      var tmp_29 = state.get_remindersEnabled_f25lyv_k$();
      sourceInformationMarkerStart($composer_15, -340488093, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_1 = $composer_15.rememberedValue_4dg93v_k$();
      var tmp_30;
      if (invalid_1 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = Notas09ConfigurarAlertasScreen$lambda_1(state);
        $composer_15.updateRememberedValue_l1wh71_k$(value_1);
        tmp_30 = value_1;
      } else {
        tmp_30 = it_1;
      }
      var tmp0_group_0 = tmp_30;
      sourceInformationMarkerEnd($composer_15);
      NotasSwitch(tmp_29, tmp0_group_0, null, $composer_15, 0, 4);
      sourceInformationMarkerEnd($composer_15);
      $composer_13.endNode_3m0yfn_k$();
      var tmp_31 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$45 = _Dp___init__impl__ms3zkb(22);
      Spacer(height(tmp_31, tmp$ret$45), $composer_10, 6);
      var tmp_32 = colors.get_textSecondary_kl22jf_k$();
      var tmp_33 = get_sp(10);
      var tmp_34 = Companion_getInstance_4().get_Bold_wnz5ke_k$();
      var tmp_35 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_36 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_37 = _TextOverflow___init__impl__obguoe(0);
      Text('\xBFCON CU\xC1NTA ANTELACI\xD3N?', null, tmp_32, null, tmp_33, null, tmp_34, null, tmp_35, null, null, tmp_36, tmp_37, false, 0, 0, null, null, $composer_10, 1597446, 0, 262058);
      var tmp_38 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$46 = _Dp___init__impl__ms3zkb(12);
      Spacer(height(tmp_38, tmp$ret$46), $composer_10, 6);
      $composer_10.startReplaceGroup_5hh8aj_k$(-1528392293);
      sourceInformation($composer_10, '*546@21036L39,535@20469L2058,578@22544L41');
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = listOf([5, 10, 15]).iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        var selected = state.get_alertAdvanceMinutes_bbtzhs_k$() === element;
        var tmp_39 = fillMaxWidth(Companion_getInstance_0());
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$49 = _Dp___init__impl__ms3zkb(48);
        var tmp_40 = height(tmp_39, tmp$ret$49);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$50 = _Dp___init__impl__ms3zkb(13);
        var tmp_41 = background(clip(tmp_40, RoundedCornerShape(tmp$ret$50)), selected ? colors.get_accentContainer_6iiayz_k$() : colors.get_surface_ya87t7_k$());
        var tmp_42;
        if (selected || !colors.get_isDark_evw91l_k$()) {
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp_42 = _Dp___init__impl__ms3zkb(0);
        } else {
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp_42 = _Dp___init__impl__ms3zkb(1);
        }
        var tmp_43 = tmp_42;
        var tmp_44 = colors.get_border_pp3j8c_k$();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$53 = _Dp___init__impl__ms3zkb(13);
        var tmp_45 = border(tmp_41, tmp_43, tmp_44, RoundedCornerShape(tmp$ret$53));
        sourceInformationMarkerStart($composer_10, -701455361, 'CC(remember):SettingsScreens.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = !!(($dirty & 14) === 4 | $composer_0.changed_kpusro_k$(element));
        // Inline function 'kotlin.let' call
        var it_2 = $composer_10.rememberedValue_4dg93v_k$();
        var tmp_46;
        if (invalid_2 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_2 = Notas09ConfigurarAlertasScreen$lambda_2(state, element);
          $composer_10.updateRememberedValue_l1wh71_k$(value_2);
          tmp_46 = value_2;
        } else {
          tmp_46 = it_2;
        }
        var tmp0_group_1 = tmp_46;
        sourceInformationMarkerEnd($composer_10);
        var tmp_47 = clickable(tmp_45, VOID, VOID, VOID, VOID, tmp0_group_1);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$58 = _Dp___init__impl__ms3zkb(16);
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var modifier_7 = padding(tmp_47, tmp$ret$58);
        var horizontalArrangement_0 = Arrangement_getInstance().get_SpaceBetween_5p3wqd_k$();
        var verticalAlignment_0 = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
        var $composer_21 = $composer_10;
        if (!((0 & 1) === 0))
          modifier_7 = Companion_getInstance_0();
        if (!((0 & 2) === 0))
          horizontalArrangement_0 = Arrangement_getInstance().get_Start_ih4i6x_k$();
        if (!((0 & 4) === 0))
          verticalAlignment_0 = Companion_getInstance_1().get_Top_18jj1w_k$();
        var measurePolicy_3 = rowMeasurePolicy(horizontalArrangement_0, verticalAlignment_0, $composer_21, 14 & 432 >> 3 | 112 & 432 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_8 = modifier_7;
        var $composer_22 = $composer_21;
        if (!((0 & 2) === 0))
          modifier_8 = Companion_getInstance_0();
        var compositeKeyHash_3 = get_currentCompositeKeyHashCode($composer_22, 0).hashCode();
        var localMap_3 = $composer_22.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized_3 = materialize($composer_22, modifier_8);
        var tmp0_5 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_23 = $composer_22;
        var tmp_48 = $composer_23.get_applier_bupu8u_k$();
        if (!isInterface(tmp_48, Applier)) {
          invalidApplier();
        }
        $composer_23.startReusableNode_jjgeyp_k$();
        if ($composer_23.get_inserting_25mlsw_k$()) {
          $composer_23.createNode_ahrd54_k$(tmp0_5);
        } else {
          $composer_23.useNode_io5s9l_k$();
        }
        var $this$ReusableComposeNode_3 = _Updater___init__impl__rbfxm8($composer_23);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_3, measurePolicy_3, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_3, localMap_3, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_3, compositeKeyHash_3, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_3, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_3, materialized_3, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        var $composer_24 = $composer_23;
        RowScopeInstance_getInstance();
        var $composer_25 = $composer_24;
        sourceInformationMarkerStart($composer_25, -1984491018, 'C551@21308L313,557@21642L867:SettingsScreens.kt#bisg3d');
        var tmp_49 = '' + element + ' minutos antes';
        var tmp_50 = selected ? colors.get_accentContent_6vke99_k$() : colors.get_textPrimary_mf1tv7_k$();
        var tmp_51 = get_sp(13);
        var tmp_52 = selected ? Companion_getInstance_4().get_SemiBold_aid1c4_k$() : Companion_getInstance_4().get_Medium_1fiba6_k$();
        var tmp_53 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_54 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_55 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_49, null, tmp_50, null, tmp_51, null, tmp_52, null, tmp_53, null, null, tmp_54, tmp_55, false, 0, 0, null, null, $composer_25, 24576, 0, 262058);
        var tmp_56 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$65 = _Dp___init__impl__ms3zkb(18);
        var tmp_57 = clip(size_0(tmp_56, tmp$ret$65), get_CircleShape());
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$66 = _Dp___init__impl__ms3zkb(1.5);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier_9 = border(tmp_57, tmp$ret$66, selected ? colors.get_accentContent_6vke99_k$() : colors.get_radioBorder_mhg8d7_k$(), get_CircleShape());
        var contentAlignment = Companion_getInstance_1().get_Center_3arb0i_k$();
        var propagateMinConstraints = false;
        var $composer_26 = $composer_25;
        if (!((4 & 1) === 0))
          modifier_9 = Companion_getInstance_0();
        if (!((4 & 2) === 0))
          contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
        if (!((4 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy_4 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_10 = modifier_9;
        var $composer_27 = $composer_26;
        if (!((0 & 2) === 0))
          modifier_10 = Companion_getInstance_0();
        var compositeKeyHash_4 = get_currentCompositeKeyHashCode($composer_27, 0).hashCode();
        var localMap_4 = $composer_27.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized_4 = materialize($composer_27, modifier_10);
        var tmp0_6 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_28 = $composer_27;
        var tmp_58 = $composer_28.get_applier_bupu8u_k$();
        if (!isInterface(tmp_58, Applier)) {
          invalidApplier();
        }
        $composer_28.startReusableNode_jjgeyp_k$();
        if ($composer_28.get_inserting_25mlsw_k$()) {
          $composer_28.createNode_ahrd54_k$(tmp0_6);
        } else {
          $composer_28.useNode_io5s9l_k$();
        }
        var $this$ReusableComposeNode_4 = _Updater___init__impl__rbfxm8($composer_28);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_4, measurePolicy_4, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_4, localMap_4, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_4, compositeKeyHash_4, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_4, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_4, materialized_4, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        var $composer_29 = $composer_28;
        BoxScopeInstance_getInstance();
        var $composer_30 = $composer_29;
        sourceInformationMarkerStart($composer_30, -148480585, 'C:SettingsScreens.kt#bisg3d');
        if (selected) {
          $composer_30.startReplaceGroup_5hh8aj_k$(-148467132);
          sourceInformation($composer_30, '569@22201L260');
          var tmp_59 = Companion_getInstance_0();
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$73 = _Dp___init__impl__ms3zkb(10);
          Box(background(clip(size_0(tmp_59, tmp$ret$73), get_CircleShape()), colors.get_accentContent_6vke99_k$()), $composer_30, 0);
          $composer_30.endReplaceGroup_ek144q_k$();
        } else {
          $composer_30.startReplaceGroup_5hh8aj_k$(-148163456);
          $composer_30.endReplaceGroup_ek144q_k$();
        }
        sourceInformationMarkerEnd($composer_30);
        $composer_28.endNode_3m0yfn_k$();
        sourceInformationMarkerEnd($composer_25);
        $composer_23.endNode_3m0yfn_k$();
        var tmp_60 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$74 = _Dp___init__impl__ms3zkb(10);
        Spacer(height(tmp_60, tmp$ret$74), $composer_10, 6);
      }
      $composer_10.endReplaceGroup_ek144q_k$();
      var tmp_61 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$75 = _Dp___init__impl__ms3zkb(10);
      Spacer(height(tmp_61, tmp$ret$75), $composer_10, 6);
      var tmp_62 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$76 = _Dp___init__impl__ms3zkb(16);
      var tmp_63 = background(clip(tmp_62, RoundedCornerShape(tmp$ret$76)), colors.get_surface_ya87t7_k$());
      var tmp_64;
      if (colors.get_isDark_evw91l_k$()) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_64 = _Dp___init__impl__ms3zkb(1);
      } else {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_64 = _Dp___init__impl__ms3zkb(0.5);
      }
      var tmp_65 = tmp_64;
      var tmp_66 = colors.get_border_pp3j8c_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$79 = _Dp___init__impl__ms3zkb(16);
      var tmp_67 = border(tmp_63, tmp_65, tmp_66, RoundedCornerShape(tmp$ret$79));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$80 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_11 = padding(tmp_67, tmp$ret$80);
      var verticalArrangement_2 = null;
      var horizontalAlignment_2 = null;
      var $composer_31 = $composer_10;
      if (!((6 & 1) === 0))
        modifier_11 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_2 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_2 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_5 = columnMeasurePolicy(verticalArrangement_2, horizontalAlignment_2, $composer_31, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_12 = modifier_11;
      var $composer_32 = $composer_31;
      if (!((0 & 2) === 0))
        modifier_12 = Companion_getInstance_0();
      var compositeKeyHash_5 = get_currentCompositeKeyHashCode($composer_32, 0).hashCode();
      var localMap_5 = $composer_32.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_5 = materialize($composer_32, modifier_12);
      var tmp0_7 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_33 = $composer_32;
      var tmp_68 = $composer_33.get_applier_bupu8u_k$();
      if (!isInterface(tmp_68, Applier)) {
        invalidApplier();
      }
      $composer_33.startReusableNode_jjgeyp_k$();
      if ($composer_33.get_inserting_25mlsw_k$()) {
        $composer_33.createNode_ahrd54_k$(tmp0_7);
      } else {
        $composer_33.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_5 = _Updater___init__impl__rbfxm8($composer_33);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_5, measurePolicy_5, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_5, localMap_5, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_5, compositeKeyHash_5, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_5, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_5, materialized_5, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_34 = $composer_33;
      ColumnScopeInstance_getInstance();
      var $composer_35 = $composer_34;
      sourceInformationMarkerStart($composer_35, -743826296, 'C596@23186L1151,622@24354L191,628@24562L1157:SettingsScreens.kt#bisg3d');
      var tmp_69 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$87 = _Dp___init__impl__ms3zkb(15);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_13 = padding(tmp_69, VOID, tmp$ret$87);
      var horizontalArrangement_1 = Arrangement_getInstance().get_SpaceBetween_5p3wqd_k$();
      var verticalAlignment_1 = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_36 = $composer_35;
      if (!((0 & 1) === 0))
        modifier_13 = Companion_getInstance_0();
      if (!((0 & 2) === 0))
        horizontalArrangement_1 = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((0 & 4) === 0))
        verticalAlignment_1 = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_6 = rowMeasurePolicy(horizontalArrangement_1, verticalAlignment_1, $composer_36, 14 & 438 >> 3 | 112 & 438 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_14 = modifier_13;
      var $composer_37 = $composer_36;
      if (!((0 & 2) === 0))
        modifier_14 = Companion_getInstance_0();
      var compositeKeyHash_6 = get_currentCompositeKeyHashCode($composer_37, 0).hashCode();
      var localMap_6 = $composer_37.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_6 = materialize($composer_37, modifier_14);
      var tmp0_8 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_38 = $composer_37;
      var tmp_70 = $composer_38.get_applier_bupu8u_k$();
      if (!isInterface(tmp_70, Applier)) {
        invalidApplier();
      }
      $composer_38.startReusableNode_jjgeyp_k$();
      if ($composer_38.get_inserting_25mlsw_k$()) {
        $composer_38.createNode_ahrd54_k$(tmp0_8);
      } else {
        $composer_38.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_6 = _Updater___init__impl__rbfxm8($composer_38);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_6, measurePolicy_6, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_6, localMap_6, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_6, compositeKeyHash_6, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_6, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_6, materialized_6, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_39 = $composer_38;
      var tmp0_9 = RowScopeInstance_getInstance();
      var $composer_40 = $composer_39;
      sourceInformationMarkerStart($composer_40, -149888649, 'C603@23501L628,619@24264L32,617@24150L169:SettingsScreens.kt#bisg3d');
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_15 = tmp0_9.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0);
      var verticalArrangement_3 = null;
      var horizontalAlignment_3 = null;
      var $composer_41 = $composer_40;
      if (!((6 & 1) === 0))
        modifier_15 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_3 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_3 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_7 = columnMeasurePolicy(verticalArrangement_3, horizontalAlignment_3, $composer_41, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_16 = modifier_15;
      var $composer_42 = $composer_41;
      if (!((0 & 2) === 0))
        modifier_16 = Companion_getInstance_0();
      var compositeKeyHash_7 = get_currentCompositeKeyHashCode($composer_42, 0).hashCode();
      var localMap_7 = $composer_42.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_7 = materialize($composer_42, modifier_16);
      var tmp0_10 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_43 = $composer_42;
      var tmp_71 = $composer_43.get_applier_bupu8u_k$();
      if (!isInterface(tmp_71, Applier)) {
        invalidApplier();
      }
      $composer_43.startReusableNode_jjgeyp_k$();
      if ($composer_43.get_inserting_25mlsw_k$()) {
        $composer_43.createNode_ahrd54_k$(tmp0_10);
      } else {
        $composer_43.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_7 = _Updater___init__impl__rbfxm8($composer_43);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_7, measurePolicy_7, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_7, localMap_7, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_7, compositeKeyHash_7, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_7, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_7, materialized_7, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_44 = $composer_43;
      ColumnScopeInstance_getInstance();
      var $composer_45 = $composer_44;
      sourceInformationMarkerStart($composer_45, 648993974, 'C604@23566L245,610@23836L40,611@23901L206:SettingsScreens.kt#bisg3d');
      var tmp_72 = colors.get_textPrimary_mf1tv7_k$();
      var tmp_73 = get_sp(13);
      var tmp_74 = Companion_getInstance_4().get_Medium_1fiba6_k$();
      var tmp_75 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_76 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_77 = _TextOverflow___init__impl__obguoe(0);
      Text('Ventana modal', null, tmp_72, null, tmp_73, null, tmp_74, null, tmp_75, null, null, tmp_76, tmp_77, false, 0, 0, null, null, $composer_45, 1597446, 0, 262058);
      var tmp_78 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$100 = _Dp___init__impl__ms3zkb(3);
      Spacer(height(tmp_78, tmp$ret$100), $composer_45, 6);
      var tmp_79 = colors.get_textSecondary_kl22jf_k$();
      var tmp_80 = get_sp(10);
      var tmp_81 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_82 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_83 = _TextOverflow___init__impl__obguoe(0);
      Text('Un aviso visible sobre tu agenda', null, tmp_79, null, tmp_80, null, null, null, tmp_81, null, null, tmp_82, tmp_83, false, 0, 0, null, null, $composer_45, 24582, 0, 262122);
      sourceInformationMarkerEnd($composer_45);
      $composer_43.endNode_3m0yfn_k$();
      var tmp_84 = state.get_modalAlertEnabled_ljwycp_k$();
      sourceInformationMarkerStart($composer_40, 1934851162, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_3 = $composer_40.rememberedValue_4dg93v_k$();
      var tmp_85;
      if (invalid_3 || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_3 = Notas09ConfigurarAlertasScreen$lambda_3(state);
        $composer_40.updateRememberedValue_l1wh71_k$(value_3);
        tmp_85 = value_3;
      } else {
        tmp_85 = it_3;
      }
      var tmp0_group_2 = tmp_85;
      sourceInformationMarkerEnd($composer_40);
      NotasSwitch(tmp_84, tmp0_group_2, null, $composer_40, 0, 4);
      sourceInformationMarkerEnd($composer_40);
      $composer_38.endNode_3m0yfn_k$();
      var tmp_86 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$105 = _Dp___init__impl__ms3zkb(1);
      Box(background(height(tmp_86, tmp$ret$105), colors.get_border_pp3j8c_k$()), $composer_35, 0);
      var tmp_87 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$106 = _Dp___init__impl__ms3zkb(15);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_17 = padding(tmp_87, VOID, tmp$ret$106);
      var horizontalArrangement_2 = Arrangement_getInstance().get_SpaceBetween_5p3wqd_k$();
      var verticalAlignment_2 = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_46 = $composer_35;
      if (!((0 & 1) === 0))
        modifier_17 = Companion_getInstance_0();
      if (!((0 & 2) === 0))
        horizontalArrangement_2 = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((0 & 4) === 0))
        verticalAlignment_2 = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_8 = rowMeasurePolicy(horizontalArrangement_2, verticalAlignment_2, $composer_46, 14 & 438 >> 3 | 112 & 438 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_18 = modifier_17;
      var $composer_47 = $composer_46;
      if (!((0 & 2) === 0))
        modifier_18 = Companion_getInstance_0();
      var compositeKeyHash_8 = get_currentCompositeKeyHashCode($composer_47, 0).hashCode();
      var localMap_8 = $composer_47.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_8 = materialize($composer_47, modifier_18);
      var tmp0_11 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_48 = $composer_47;
      var tmp_88 = $composer_48.get_applier_bupu8u_k$();
      if (!isInterface(tmp_88, Applier)) {
        invalidApplier();
      }
      $composer_48.startReusableNode_jjgeyp_k$();
      if ($composer_48.get_inserting_25mlsw_k$()) {
        $composer_48.createNode_ahrd54_k$(tmp0_11);
      } else {
        $composer_48.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_8 = _Updater___init__impl__rbfxm8($composer_48);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_8, measurePolicy_8, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_8, localMap_8, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_8, compositeKeyHash_8, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_8, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_8, materialized_8, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_49 = $composer_48;
      var tmp0_12 = RowScopeInstance_getInstance();
      var $composer_50 = $composer_49;
      sourceInformationMarkerStart($composer_50, 446973210, 'C635@24877L634,651@25646L32,649@25532L169:SettingsScreens.kt#bisg3d');
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_19 = tmp0_12.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0);
      var verticalArrangement_4 = null;
      var horizontalAlignment_4 = null;
      var $composer_51 = $composer_50;
      if (!((6 & 1) === 0))
        modifier_19 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_4 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_4 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_9 = columnMeasurePolicy(verticalArrangement_4, horizontalAlignment_4, $composer_51, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_20 = modifier_19;
      var $composer_52 = $composer_51;
      if (!((0 & 2) === 0))
        modifier_20 = Companion_getInstance_0();
      var compositeKeyHash_9 = get_currentCompositeKeyHashCode($composer_52, 0).hashCode();
      var localMap_9 = $composer_52.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_9 = materialize($composer_52, modifier_20);
      var tmp0_13 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_53 = $composer_52;
      var tmp_89 = $composer_53.get_applier_bupu8u_k$();
      if (!isInterface(tmp_89, Applier)) {
        invalidApplier();
      }
      $composer_53.startReusableNode_jjgeyp_k$();
      if ($composer_53.get_inserting_25mlsw_k$()) {
        $composer_53.createNode_ahrd54_k$(tmp0_13);
      } else {
        $composer_53.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_9 = _Updater___init__impl__rbfxm8($composer_53);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_9, measurePolicy_9, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_9, localMap_9, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_9, compositeKeyHash_9, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_9, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_9, materialized_9, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_54 = $composer_53;
      ColumnScopeInstance_getInstance();
      var $composer_55 = $composer_54;
      sourceInformationMarkerStart($composer_55, -621537831, 'C636@24942L249,642@25216L40,643@25281L208:SettingsScreens.kt#bisg3d');
      var tmp_90 = colors.get_textPrimary_mf1tv7_k$();
      var tmp_91 = get_sp(13);
      var tmp_92 = Companion_getInstance_4().get_Medium_1fiba6_k$();
      var tmp_93 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_94 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_95 = _TextOverflow___init__impl__obguoe(0);
      Text('Reproducir sonido', null, tmp_90, null, tmp_91, null, tmp_92, null, tmp_93, null, null, tmp_94, tmp_95, false, 0, 0, null, null, $composer_55, 1597446, 0, 262058);
      var tmp_96 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$119 = _Dp___init__impl__ms3zkb(3);
      Spacer(height(tmp_96, tmp$ret$119), $composer_55, 6);
      var tmp_97 = colors.get_textSecondary_kl22jf_k$();
      var tmp_98 = get_sp(10);
      var tmp_99 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_100 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_101 = _TextOverflow___init__impl__obguoe(0);
      Text('Tambi\xE9n cuando la app est\xE9 abierta', null, tmp_97, null, tmp_98, null, null, null, tmp_99, null, null, tmp_100, tmp_101, false, 0, 0, null, null, $composer_55, 24582, 0, 262122);
      sourceInformationMarkerEnd($composer_55);
      $composer_53.endNode_3m0yfn_k$();
      var tmp_102 = state.get_soundAlertEnabled_clh83v_k$();
      sourceInformationMarkerStart($composer_50, -1648125679, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_4 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_4 = $composer_50.rememberedValue_4dg93v_k$();
      var tmp_103;
      if (invalid_4 || it_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_4 = Notas09ConfigurarAlertasScreen$lambda_4(state);
        $composer_50.updateRememberedValue_l1wh71_k$(value_4);
        tmp_103 = value_4;
      } else {
        tmp_103 = it_4;
      }
      var tmp0_group_3 = tmp_103;
      sourceInformationMarkerEnd($composer_50);
      NotasSwitch(tmp_102, tmp0_group_3, null, $composer_50, 0, 4);
      sourceInformationMarkerEnd($composer_50);
      $composer_48.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_35);
      $composer_33.endNode_3m0yfn_k$();
      var tmp_104 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$124 = _Dp___init__impl__ms3zkb(16);
      Spacer(height(tmp_104, tmp$ret$124), $composer_10, 6);
      var tmp_105 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$125 = _Dp___init__impl__ms3zkb(62);
      var tmp_106 = height(tmp_105, tmp$ret$125);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$126 = _Dp___init__impl__ms3zkb(16);
      var tmp_107 = background(clip(tmp_106, RoundedCornerShape(tmp$ret$126)), colors.get_surface_ya87t7_k$());
      var tmp_108;
      if (colors.get_isDark_evw91l_k$()) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_108 = _Dp___init__impl__ms3zkb(1);
      } else {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_108 = _Dp___init__impl__ms3zkb(0.5);
      }
      var tmp_109 = tmp_108;
      var tmp_110 = colors.get_border_pp3j8c_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$129 = _Dp___init__impl__ms3zkb(16);
      var tmp_111 = border(tmp_107, tmp_109, tmp_110, RoundedCornerShape(tmp$ret$129));
      sourceInformationMarkerStart($composer_10, -1528204338, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_5 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_5 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_112;
      if (invalid_5 || it_5 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_5 = Notas09ConfigurarAlertasScreen$lambda_5(tones, state);
        $composer_10.updateRememberedValue_l1wh71_k$(value_5);
        tmp_112 = value_5;
      } else {
        tmp_112 = it_5;
      }
      var tmp0_group_4 = tmp_112;
      sourceInformationMarkerEnd($composer_10);
      var tmp_113 = clickable(tmp_111, VOID, VOID, VOID, VOID, tmp0_group_4);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$134 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_21 = padding(tmp_113, tmp$ret$134);
      var horizontalArrangement_3 = null;
      var verticalAlignment_3 = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_56 = $composer_10;
      if (!((2 & 1) === 0))
        modifier_21 = Companion_getInstance_0();
      if (!((2 & 2) === 0))
        horizontalArrangement_3 = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((2 & 4) === 0))
        verticalAlignment_3 = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_10 = rowMeasurePolicy(horizontalArrangement_3, verticalAlignment_3, $composer_56, 14 & 384 >> 3 | 112 & 384 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_22 = modifier_21;
      var $composer_57 = $composer_56;
      if (!((0 & 2) === 0))
        modifier_22 = Companion_getInstance_0();
      var compositeKeyHash_10 = get_currentCompositeKeyHashCode($composer_57, 0).hashCode();
      var localMap_10 = $composer_57.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_10 = materialize($composer_57, modifier_22);
      var tmp0_14 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_58 = $composer_57;
      var tmp_114 = $composer_58.get_applier_bupu8u_k$();
      if (!isInterface(tmp_114, Applier)) {
        invalidApplier();
      }
      $composer_58.startReusableNode_jjgeyp_k$();
      if ($composer_58.get_inserting_25mlsw_k$()) {
        $composer_58.createNode_ahrd54_k$(tmp0_14);
      } else {
        $composer_58.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_10 = _Updater___init__impl__rbfxm8($composer_58);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_10, measurePolicy_10, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_10, localMap_10, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_10, compositeKeyHash_10, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_10, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_10, materialized_10, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_59 = $composer_58;
      var tmp0_15 = RowScopeInstance_getInstance();
      var $composer_60 = $composer_59;
      sourceInformationMarkerStart($composer_60, -1757116498, 'C677@26623L224,683@26864L40,684@26921L525,702@27697L117,697@27463L722:SettingsScreens.kt#bisg3d');
      var tmp0_imageVector = NotasIcons_getInstance().get_Sound_ih1pza_k$();
      var tmp1_tint = colors.get_accentContent_6vke99_k$();
      var tmp_115 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$141 = _Dp___init__impl__ms3zkb(24);
      var tmp2_modifier = size_0(tmp_115, tmp$ret$141);
      Icon(tmp0_imageVector, null, tmp2_modifier, tmp1_tint, $composer_60, 432, 0);
      var tmp_116 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$142 = _Dp___init__impl__ms3zkb(13);
      Spacer(width(tmp_116, tmp$ret$142), $composer_60, 6);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_23 = tmp0_15.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0);
      var verticalArrangement_5 = null;
      var horizontalAlignment_5 = null;
      var $composer_61 = $composer_60;
      if (!((6 & 1) === 0))
        modifier_23 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_5 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_5 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_11 = columnMeasurePolicy(verticalArrangement_5, horizontalAlignment_5, $composer_61, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_24 = modifier_23;
      var $composer_62 = $composer_61;
      if (!((0 & 2) === 0))
        modifier_24 = Companion_getInstance_0();
      var compositeKeyHash_11 = get_currentCompositeKeyHashCode($composer_62, 0).hashCode();
      var localMap_11 = $composer_62.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_11 = materialize($composer_62, modifier_24);
      var tmp0_16 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_63 = $composer_62;
      var tmp_117 = $composer_63.get_applier_bupu8u_k$();
      if (!isInterface(tmp_117, Applier)) {
        invalidApplier();
      }
      $composer_63.startReusableNode_jjgeyp_k$();
      if ($composer_63.get_inserting_25mlsw_k$()) {
        $composer_63.createNode_ahrd54_k$(tmp0_16);
      } else {
        $composer_63.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_11 = _Updater___init__impl__rbfxm8($composer_63);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_11, measurePolicy_11, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_11, localMap_11, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_11, compositeKeyHash_11, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_11, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_11, materialized_11, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_64 = $composer_63;
      ColumnScopeInstance_getInstance();
      var $composer_65 = $composer_64;
      sourceInformationMarkerStart($composer_65, -482909228, 'C685@26982L230,691@27233L195:SettingsScreens.kt#bisg3d');
      var tmp_118 = state.get_selectedTone_ogzwga_k$();
      var tmp_119 = colors.get_textPrimary_mf1tv7_k$();
      var tmp_120 = get_sp(13);
      var tmp_121 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_122 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_123 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_124 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp_118, null, tmp_119, null, tmp_120, null, tmp_121, null, tmp_122, null, null, tmp_123, tmp_124, false, 0, 0, null, null, $composer_65, 1597440, 0, 262058);
      var tmp_125 = colors.get_textSecondary_kl22jf_k$();
      var tmp_126 = get_sp(10);
      var tmp_127 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_128 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_129 = _TextOverflow___init__impl__obguoe(0);
      Text('Tono seleccionado (toca para cambiar)', null, tmp_125, null, tmp_126, null, null, null, tmp_127, null, null, tmp_128, tmp_129, false, 0, 0, null, null, $composer_65, 24582, 0, 262122);
      sourceInformationMarkerEnd($composer_65);
      $composer_63.endNode_3m0yfn_k$();
      var tmp_130 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$149 = _Dp___init__impl__ms3zkb(38);
      var tmp_131 = size_0(tmp_130, tmp$ret$149);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$150 = _Dp___init__impl__ms3zkb(12);
      var tmp_132 = background(clip(tmp_131, RoundedCornerShape(tmp$ret$150)), colors.get_accentContainer_6iiayz_k$());
      sourceInformationMarkerStart($composer_60, -1719216240, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_6 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_6 = $composer_60.rememberedValue_4dg93v_k$();
      var tmp_133;
      if (invalid_6 || it_6 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_6 = Notas09ConfigurarAlertasScreen$lambda_6(state);
        $composer_60.updateRememberedValue_l1wh71_k$(value_6);
        tmp_133 = value_6;
      } else {
        tmp_133 = it_6;
      }
      var tmp0_group_5 = tmp_133;
      sourceInformationMarkerEnd($composer_60);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_25 = clickable(tmp_132, VOID, VOID, VOID, VOID, tmp0_group_5);
      var contentAlignment_0 = Companion_getInstance_1().get_Center_3arb0i_k$();
      var propagateMinConstraints_0 = false;
      var $composer_66 = $composer_60;
      if (!((4 & 1) === 0))
        modifier_25 = Companion_getInstance_0();
      if (!((4 & 2) === 0))
        contentAlignment_0 = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((4 & 4) === 0))
        propagateMinConstraints_0 = false;
      var measurePolicy_12 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_26 = modifier_25;
      var $composer_67 = $composer_66;
      if (!((0 & 2) === 0))
        modifier_26 = Companion_getInstance_0();
      var compositeKeyHash_12 = get_currentCompositeKeyHashCode($composer_67, 0).hashCode();
      var localMap_12 = $composer_67.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_12 = materialize($composer_67, modifier_26);
      var tmp0_17 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_68 = $composer_67;
      var tmp_134 = $composer_68.get_applier_bupu8u_k$();
      if (!isInterface(tmp_134, Applier)) {
        invalidApplier();
      }
      $composer_68.startReusableNode_jjgeyp_k$();
      if ($composer_68.get_inserting_25mlsw_k$()) {
        $composer_68.createNode_ahrd54_k$(tmp0_17);
      } else {
        $composer_68.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_12 = _Updater___init__impl__rbfxm8($composer_68);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_12, measurePolicy_12, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_12, localMap_12, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_12, compositeKeyHash_12, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_12, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_12, materialized_12, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_69 = $composer_68;
      BoxScopeInstance_getInstance();
      var $composer_70 = $composer_69;
      sourceInformationMarkerStart($composer_70, -246282492, 'C707@27913L254:SettingsScreens.kt#bisg3d');
      var tmp0_imageVector_0 = NotasIcons_getInstance().get_Play_wo80wt_k$();
      var tmp1_tint_0 = colors.get_accentContent_6vke99_k$();
      var tmp_135 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$161 = _Dp___init__impl__ms3zkb(20);
      var tmp2_modifier_0 = size_0(tmp_135, tmp$ret$161);
      Icon(tmp0_imageVector_0, 'Escuchar tono', tmp2_modifier_0, tmp1_tint_0, $composer_70, 432, 0);
      sourceInformationMarkerEnd($composer_70);
      $composer_68.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_60);
      $composer_58.endNode_3m0yfn_k$();
      var tmp_136 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$162 = _Dp___init__impl__ms3zkb(20);
      Spacer(height(tmp_136, tmp$ret$162), $composer_10, 6);
      sourceInformationMarkerStart($composer_10, -1528138549, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_7 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_7 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_137;
      if (invalid_7 || it_7 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_7 = Notas09ConfigurarAlertasScreen$lambda_7(state);
        $composer_10.updateRememberedValue_l1wh71_k$(value_7);
        tmp_137 = value_7;
      } else {
        tmp_137 = it_7;
      }
      var tmp1_group_0 = tmp_137;
      sourceInformationMarkerEnd($composer_10);
      var tmp_138 = _Dp___init__impl__ms3zkb(0.0);
      NotasPrimaryButton('Guardar alertas', tmp1_group_0, null, tmp_138, _Dp___init__impl__ms3zkb(0.0), $composer_10, 6, 28);
      var tmp_139 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$167 = _Dp___init__impl__ms3zkb(16);
      Spacer(height(tmp_139, tmp$ret$167), $composer_10, 6);
      sourceInformationMarkerEnd($composer_10);
      $composer_8.endNode_3m0yfn_k$();
      var tmp_140 = NotasTab_SETTINGS_getInstance();
      sourceInformationMarkerStart($composer_5, 1125451774, 'CC(remember):SettingsScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_8 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_8 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_141;
      if (invalid_8 || it_8 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_8 = NotasAppState$navigateToTab$ref_3(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value_8);
        tmp_141 = value_8;
      } else {
        tmp_141 = it_8;
      }
      var tmp2_group = tmp_141;
      sourceInformationMarkerEnd($composer_5);
      NotasBottomNavigation(tmp_140, tmp2_group, null, $composer_5, 6, 4);
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Notas09ConfigurarAlertasScreen$lambda_8(state, $changed));
    }
  }
  function Notas07PersonalizacionScreen$lambda($nightModeScreen, $state) {
    return function () {
      var tmp;
      if ($nightModeScreen._v) {
        $state.navigateTo_ndxrxs_k$(NotasScreen_CONFIGURE_ALERTS_getInstance());
        tmp = Unit_getInstance();
      } else {
        $state.navigateTo_ndxrxs_k$($state.get_previousAgendaScreen_3j9ax4_k$());
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Notas07PersonalizacionScreen$lambda_0($state) {
    return function () {
      $state.set_feedbackMessage_t4kquq_k$(null);
      return Unit_getInstance();
    };
  }
  function Notas07PersonalizacionScreen$lambda_1($state) {
    return function (idx) {
      $state.setDarkModeAndSync_rezh9e_k$(idx === 1);
      return Unit_getInstance();
    };
  }
  function Notas07PersonalizacionScreen$lambda_2($state, $option) {
    return function () {
      $state.set_accentOption_j5q6lc_k$($option);
      return Unit_getInstance();
    };
  }
  function Notas07PersonalizacionScreen$lambda_3($state) {
    return function () {
      $state.navigateTo_ndxrxs_k$(NotasScreen_CONFIGURE_ALERTS_getInstance());
      return Unit_getInstance();
    };
  }
  function Notas07PersonalizacionScreen$lambda_4($state) {
    return function () {
      $state.navigateTo_ndxrxs_k$(NotasScreen_CHANGE_PASSWORD_getInstance());
      return Unit_getInstance();
    };
  }
  function Notas07PersonalizacionScreen$lambda_5($state) {
    return function () {
      $state.set_feedbackMessage_t4kquq_k$('Preferencias guardadas');
      return Unit_getInstance();
    };
  }
  function Notas07PersonalizacionScreen$lambda_6($state) {
    return function () {
      $state.navigateTo_ndxrxs_k$(NotasScreen_LOGIN_getInstance());
      return Unit_getInstance();
    };
  }
  function NotasAppState$navigateToTab$ref_2(p0) {
    return constructCallableReference(function (p0_0) {
      p0.navigateToTab_431qr_k$(p0_0);
      return Unit_getInstance();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.navigateToTab|navigateToTab(com.notas.agenda.model.NotasTab){}[0]', 'navigateToTab', [p0]);
  }
  function Notas07PersonalizacionScreen$lambda_7($state, $nightModeScreen, $$changed, $$default) {
    return function ($composer, $force) {
      Notas07PersonalizacionScreen($state, $nightModeScreen._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function PreferenceRow$lambda($title, $subtitle, $onClick, $$changed) {
    return function ($composer, $force) {
      PreferenceRow($title, $subtitle, $onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Notas08CambiarContrasenaScreen$lambda($currentPwd$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentPwd', KMutableProperty0, true);
    return $currentPwd$delegate.get_value_j01efc_k$();
  }
  function Notas08CambiarContrasenaScreen$lambda_0($currentPwd$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('currentPwd', KMutableProperty0, true);
    $currentPwd$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function Notas08CambiarContrasenaScreen$lambda_1($newPwd$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('newPwd', KMutableProperty0, true);
    return $newPwd$delegate.get_value_j01efc_k$();
  }
  function Notas08CambiarContrasenaScreen$lambda_2($newPwd$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('newPwd', KMutableProperty0, true);
    $newPwd$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function Notas08CambiarContrasenaScreen$lambda_3($confirmPwd$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('confirmPwd', KMutableProperty0, true);
    return $confirmPwd$delegate.get_value_j01efc_k$();
  }
  function Notas08CambiarContrasenaScreen$lambda_4($confirmPwd$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('confirmPwd', KMutableProperty0, true);
    $confirmPwd$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function Notas08CambiarContrasenaScreen$lambda_5($showCurrent$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('showCurrent', KMutableProperty0, true);
    return $showCurrent$delegate.get_value_j01efc_k$();
  }
  function Notas08CambiarContrasenaScreen$lambda_6($showCurrent$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('showCurrent', KMutableProperty0, true);
    $showCurrent$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function Notas08CambiarContrasenaScreen$lambda_7($showNew$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('showNew', KMutableProperty0, true);
    return $showNew$delegate.get_value_j01efc_k$();
  }
  function Notas08CambiarContrasenaScreen$lambda_8($showNew$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('showNew', KMutableProperty0, true);
    $showNew$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function Notas08CambiarContrasenaScreen$lambda_9($showConfirm$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('showConfirm', KMutableProperty0, true);
    return $showConfirm$delegate.get_value_j01efc_k$();
  }
  function Notas08CambiarContrasenaScreen$lambda_10($showConfirm$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('showConfirm', KMutableProperty0, true);
    $showConfirm$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function Notas08CambiarContrasenaScreen$lambda_11($errorText$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('errorText', KMutableProperty0, true);
    return $errorText$delegate.get_value_j01efc_k$();
  }
  function Notas08CambiarContrasenaScreen$lambda_12($errorText$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('errorText', KMutableProperty0, true);
    $errorText$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function Notas08CambiarContrasenaScreen$lambda_13($state) {
    return function () {
      $state.navigateTo_ndxrxs_k$($state.get_isDarkMode_4i3lkk_k$() ? NotasScreen_NIGHT_APPEARANCE_getInstance() : NotasScreen_PERSONALIZATION_getInstance());
      return Unit_getInstance();
    };
  }
  function Notas08CambiarContrasenaScreen$lambda_14($currentPwd$delegate, $errorText$delegate) {
    return function (it) {
      Notas08CambiarContrasenaScreen$lambda_0($currentPwd$delegate, it);
      Notas08CambiarContrasenaScreen$lambda_12($errorText$delegate, null);
      return Unit_getInstance();
    };
  }
  function Notas08CambiarContrasenaScreen$lambda_15($showCurrent$delegate) {
    return function () {
      Notas08CambiarContrasenaScreen$lambda_6($showCurrent$delegate, !Notas08CambiarContrasenaScreen$lambda_5($showCurrent$delegate));
      return Unit_getInstance();
    };
  }
  function Notas08CambiarContrasenaScreen$lambda_16($newPwd$delegate, $errorText$delegate) {
    return function (it) {
      Notas08CambiarContrasenaScreen$lambda_2($newPwd$delegate, it);
      Notas08CambiarContrasenaScreen$lambda_12($errorText$delegate, null);
      return Unit_getInstance();
    };
  }
  function Notas08CambiarContrasenaScreen$lambda_17($showNew$delegate) {
    return function () {
      Notas08CambiarContrasenaScreen$lambda_8($showNew$delegate, !Notas08CambiarContrasenaScreen$lambda_7($showNew$delegate));
      return Unit_getInstance();
    };
  }
  function Notas08CambiarContrasenaScreen$lambda_18($confirmPwd$delegate, $errorText$delegate) {
    return function (it) {
      Notas08CambiarContrasenaScreen$lambda_4($confirmPwd$delegate, it);
      Notas08CambiarContrasenaScreen$lambda_12($errorText$delegate, null);
      return Unit_getInstance();
    };
  }
  function Notas08CambiarContrasenaScreen$lambda_19($showConfirm$delegate) {
    return function () {
      Notas08CambiarContrasenaScreen$lambda_10($showConfirm$delegate, !Notas08CambiarContrasenaScreen$lambda_9($showConfirm$delegate));
      return Unit_getInstance();
    };
  }
  function Notas08CambiarContrasenaScreen$lambda_20($allRulesOk, $state, $errorText$delegate, $newPwd$delegate, $confirmPwd$delegate) {
    return function () {
      var tmp;
      if (!$allRulesOk) {
        Notas08CambiarContrasenaScreen$lambda_12($errorText$delegate, 'La contrase\xF1a debe cumplir los 3 requisitos.');
        tmp = Unit_getInstance();
      } else if (!(Notas08CambiarContrasenaScreen$lambda_1($newPwd$delegate) === Notas08CambiarContrasenaScreen$lambda_3($confirmPwd$delegate))) {
        Notas08CambiarContrasenaScreen$lambda_12($errorText$delegate, 'Las contrase\xF1as nuevas no coinciden.');
        tmp = Unit_getInstance();
      } else {
        $state.set_loginPassword_hm8vur_k$(Notas08CambiarContrasenaScreen$lambda_1($newPwd$delegate));
        $state.navigateTo_ndxrxs_k$($state.get_isDarkMode_4i3lkk_k$() ? NotasScreen_NIGHT_APPEARANCE_getInstance() : NotasScreen_PERSONALIZATION_getInstance());
        $state.set_feedbackMessage_t4kquq_k$('Contrase\xF1a actualizada');
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function Notas08CambiarContrasenaScreen$lambda_21($state, $$changed) {
    return function ($composer, $force) {
      Notas08CambiarContrasenaScreen($state, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function PasswordRequirementRow$lambda($text, $met, $$changed) {
    return function ($composer, $force) {
      PasswordRequirementRow($text, $met, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Notas09ConfigurarAlertasScreen$lambda($state) {
    return function () {
      $state.navigateTo_ndxrxs_k$($state.get_isDarkMode_4i3lkk_k$() ? NotasScreen_NIGHT_APPEARANCE_getInstance() : NotasScreen_PERSONALIZATION_getInstance());
      return Unit_getInstance();
    };
  }
  function Notas09ConfigurarAlertasScreen$lambda_0($state) {
    return function () {
      $state.set_feedbackMessage_t4kquq_k$(null);
      return Unit_getInstance();
    };
  }
  function Notas09ConfigurarAlertasScreen$lambda_1($state) {
    return function (it) {
      $state.set_remindersEnabled_222dtk_k$(it);
      return Unit_getInstance();
    };
  }
  function Notas09ConfigurarAlertasScreen$lambda_2($state, $minutes) {
    return function () {
      $state.set_alertAdvanceMinutes_tf4zqk_k$($minutes);
      return Unit_getInstance();
    };
  }
  function Notas09ConfigurarAlertasScreen$lambda_3($state) {
    return function (it) {
      $state.set_modalAlertEnabled_vj17r4_k$(it);
      return Unit_getInstance();
    };
  }
  function Notas09ConfigurarAlertasScreen$lambda_4($state) {
    return function (it) {
      $state.set_soundAlertEnabled_9zpsbm_k$(it);
      return Unit_getInstance();
    };
  }
  function Notas09ConfigurarAlertasScreen$lambda_5($tones, $state) {
    return function () {
      var nextIdx = ($tones.indexOf_si1fv9_k$($state.get_selectedTone_ogzwga_k$()) + 1 | 0) % $tones.get_size_woubt6_k$() | 0;
      $state.set_selectedTone_hc1lvk_k$($tones.get_c1px32_k$(nextIdx));
      return Unit_getInstance();
    };
  }
  function Notas09ConfigurarAlertasScreen$lambda_6($state) {
    return function () {
      $state.set_feedbackMessage_t4kquq_k$('Reproduciendo ' + $state.get_selectedTone_ogzwga_k$());
      return Unit_getInstance();
    };
  }
  function Notas09ConfigurarAlertasScreen$lambda_7($state) {
    return function () {
      $state.navigateTo_ndxrxs_k$($state.get_isDarkMode_4i3lkk_k$() ? NotasScreen_NIGHT_APPEARANCE_getInstance() : NotasScreen_PERSONALIZATION_getInstance());
      $state.set_feedbackMessage_t4kquq_k$('Configuraci\xF3n de alertas guardada');
      return Unit_getInstance();
    };
  }
  function NotasAppState$navigateToTab$ref_3(p0) {
    return constructCallableReference(function (p0_0) {
      p0.navigateToTab_431qr_k$(p0_0);
      return Unit_getInstance();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.navigateToTab|navigateToTab(com.notas.agenda.model.NotasTab){}[0]', 'navigateToTab', [p0]);
  }
  function Notas09ConfigurarAlertasScreen$lambda_8($state, $$changed) {
    return function ($composer, $force) {
      Notas09ConfigurarAlertasScreen($state, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function NotasSearchBar(query, onQueryChange, placeholder, $composer, $changed, $default) {
    var placeholder_0 = {_v: placeholder};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(2057747154);
    sourceInformation($composer_0, 'C(NotasSearchBar)P(2)63@2755L6,64@2766L1404:TeamChatScreens.kt#bisg3d');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(query) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onQueryChange) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(placeholder_0._v) ? 256 : 128);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 147) === 146), $dirty & 1)) {
      if (!(($default & 4) === 0)) {
        placeholder_0._v = 'Buscar en el equipo';
      }
      if (isTraceInProgress()) {
        traceEventStart(2057747154, $dirty, -1, 'com.notas.agenda.ui.screens.NotasSearchBar (TeamChatScreens.kt:62)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      var tmp = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(50);
      var tmp_0 = height(tmp, tmp$ret$0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(14);
      var tmp_1 = background(clip(tmp_0, RoundedCornerShape(tmp$ret$1)), colors.get_surface_ya87t7_k$());
      var tmp_2;
      if (colors.get_isDark_evw91l_k$()) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_2 = _Dp___init__impl__ms3zkb(1);
      } else {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_2 = _Dp___init__impl__ms3zkb(0.5);
      }
      var tmp_3 = tmp_2;
      var tmp_4 = colors.get_border_pp3j8c_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$4 = _Dp___init__impl__ms3zkb(14);
      var tmp_5 = border(tmp_1, tmp_3, tmp_4, RoundedCornerShape(tmp$ret$4));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$5 = _Dp___init__impl__ms3zkb(15);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier = padding(tmp_5, tmp$ret$5);
      var horizontalArrangement = null;
      var verticalAlignment = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_1 = $composer_0;
      if (!((2 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((2 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((2 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 384 >> 3 | 112 & 384 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp_6 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_6, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      var tmp0_0 = RowScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 1215979216, 'C78@3239L189,84@3437L40,85@3486L678:TeamChatScreens.kt#bisg3d');
      var tmp0_imageVector = NotasIcons_getInstance().get_Search_49qaxd_k$();
      var tmp1_tint = colors.get_textSecondary_kl22jf_k$();
      var tmp_7 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$12 = _Dp___init__impl__ms3zkb(20);
      var tmp2_modifier = size_0(tmp_7, tmp$ret$12);
      Icon(tmp0_imageVector, 'Buscar', tmp2_modifier, tmp1_tint, $composer_5, 432, 0);
      var tmp_8 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$13 = _Dp___init__impl__ms3zkb(12);
      Spacer(width(tmp_8, tmp$ret$13), $composer_5, 6);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_1 = tmp0_0.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0);
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_6 = $composer_5;
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_0 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      var tmp0_1 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      var tmp_9 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_9, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_1);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_9 = $composer_8;
      BoxScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, -142195875, 'C93@3753L401:TeamChatScreens.kt#bisg3d');
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(query) === 0) {
        $composer_10.startReplaceGroup_5hh8aj_k$(-142188529);
        sourceInformation($composer_10, '87@3575L151');
        var tmp_10 = placeholder_0._v;
        var tmp_11 = colors.get_textSecondary_kl22jf_k$();
        var tmp_12 = get_sp(12);
        var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_14 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_15 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_10, null, tmp_11, null, tmp_12, null, null, null, tmp_13, null, null, tmp_14, tmp_15, false, 0, 0, null, null, $composer_10, 24576 | 14 & $dirty >> 6, 0, 262122);
        $composer_10.endReplaceGroup_ek144q_k$();
      } else {
        $composer_10.startReplaceGroup_5hh8aj_k$(-142012666);
        $composer_10.endReplaceGroup_ek144q_k$();
      }
      var tmp0_textStyle = TextStyle_init_$Create$(colors.get_textPrimary_mf1tv7_k$(), get_sp(13));
      var tmp1_cursorBrush = new SolidColor(colors.get_accentButton_k5y1fw_k$());
      var tmp2_modifier_0 = fillMaxWidth(Companion_getInstance_0());
      BasicTextField(query, onQueryChange, tmp2_modifier_0, false, false, tmp0_textStyle, null, null, true, 0, 0, null, null, null, tmp1_cursorBrush, null, $composer_10, 100663680 | 14 & $dirty | 112 & $dirty, 0, 48856);
      sourceInformationMarkerEnd($composer_10);
      $composer_8.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(NotasSearchBar$lambda(query, onQueryChange, placeholder_0, $changed, $default));
    }
  }
  function Notas11SalasDeChatScreen(state, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(901278706);
    sourceInformation($composer_0, 'C(Notas11SalasDeChatScreen)110@4267L6,117@4537L5495:TeamChatScreens.kt#bisg3d');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(state) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(901278706, $dirty, -1, 'com.notas.agenda.ui.screens.Notas11SalasDeChatScreen (TeamChatScreens.kt:109)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = state.get_rooms_iy37wv_k$();
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (isBlank(state.get_roomSearchQuery_wr0xmk_k$()) || contains(element.get_name_woqyms_k$(), state.get_roomSearchQuery_wr0xmk_k$(), true) || contains(element.get_lastPreview_v8kffb_k$(), state.get_roomSearchQuery_wr0xmk_k$(), true)) {
          destination.add_utx5q5_k$(element);
        }
      }
      var filteredRooms = destination;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = background(fillMaxSize(Companion_getInstance_0()), colors.get_background_8l4942_k$());
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0_0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      var tmp0_1 = ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -28297051, 'C122@4660L19,128@4893L45,123@4688L261,132@5048L32,130@4958L133,138@5201L21,135@5101L4796,257@9995L20,255@9907L119:TeamChatScreens.kt#bisg3d');
      NotasTopStatusBar(null, $composer_5, 0, 1);
      var tmp_0 = NotasIcons_getInstance().get_Plus_wo81dv_k$();
      sourceInformationMarkerStart($composer_5, -1940573323, 'CC(remember):TeamChatScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = Notas11SalasDeChatScreen$lambda(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp0_group = tmp_1;
      sourceInformationMarkerEnd($composer_5);
      NotasHeader('NOTAS', 'Tu equipo', 'Conversaciones que nos conectan', tmp_0, null, tmp0_group, null, null, null, $composer_5, 438, 464);
      var tmp_2 = state.get_feedbackMessage_z5ejaf_k$();
      sourceInformationMarkerStart($composer_5, -1940568376, 'CC(remember):TeamChatScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_0 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = Notas11SalasDeChatScreen$lambda_0(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp1_group = tmp_3;
      sourceInformationMarkerEnd($composer_5);
      NotasFeedbackBanner(tmp_2, tmp1_group, $composer_5, 0);
      var tmp_4 = tmp0_1.weight$default_gbkz97_k$(Companion_getInstance_0(), 1.0);
      var tmp_5 = verticalScroll(tmp_4, rememberScrollState(0, $composer_5, 0, 1));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$17 = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = padding(tmp_5, tmp$ret$17);
      var verticalArrangement_0 = null;
      var horizontalAlignment_0 = null;
      var $composer_6 = $composer_5;
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_0 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_0 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement_0, horizontalAlignment_0, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      var tmp0_2 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      var tmp_6 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_6, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_2);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_9 = $composer_8;
      ColumnScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, 916753108, 'C141@5294L40,144@5442L30,142@5347L140,183@7136L41,184@7190L1064,212@8268L41,222@8620L1213,252@9846L41:TeamChatScreens.kt#bisg3d');
      var tmp_7 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$24 = _Dp___init__impl__ms3zkb(6);
      Spacer(height(tmp_7, tmp$ret$24), $composer_10, 6);
      var tmp_8 = state.get_roomSearchQuery_wr0xmk_k$();
      sourceInformationMarkerStart($composer_10, -1910089796, 'CC(remember):TeamChatScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_1 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_9;
      if (invalid_1 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = Notas11SalasDeChatScreen$lambda_1(state);
        $composer_10.updateRememberedValue_l1wh71_k$(value_1);
        tmp_9 = value_1;
      } else {
        tmp_9 = it_1;
      }
      var tmp0_group_0 = tmp_9;
      sourceInformationMarkerEnd($composer_10);
      NotasSearchBar(tmp_8, tmp0_group_0, null, $composer_10, 0, 4);
      if (state.get_hasPendingInvitation_vxnvxb_k$()) {
        $composer_10.startReplaceGroup_5hh8aj_k$(916897071);
        sourceInformation($composer_10, '148@5551L41,155@5885L51,149@5609L1499');
        var tmp_10 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$29 = _Dp___init__impl__ms3zkb(18);
        Spacer(height(tmp_10, tmp$ret$29), $composer_10, 6);
        var tmp_11 = fillMaxWidth(Companion_getInstance_0());
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$30 = _Dp___init__impl__ms3zkb(74);
        var tmp_12 = height(tmp_11, tmp$ret$30);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$31 = _Dp___init__impl__ms3zkb(16);
        var tmp_13 = background(clip(tmp_12, RoundedCornerShape(tmp$ret$31)), colors.get_accentContainer_6iiayz_k$());
        sourceInformationMarkerStart($composer_10, -1910075599, 'CC(remember):TeamChatScreens.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_2 = ($dirty & 14) === 4;
        // Inline function 'kotlin.let' call
        var it_2 = $composer_10.rememberedValue_4dg93v_k$();
        var tmp_14;
        if (invalid_2 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_2 = Notas11SalasDeChatScreen$lambda_2(state);
          $composer_10.updateRememberedValue_l1wh71_k$(value_2);
          tmp_14 = value_2;
        } else {
          tmp_14 = it_2;
        }
        var tmp1_group_0 = tmp_14;
        sourceInformationMarkerEnd($composer_10);
        var tmp_15 = clickable(tmp_13, VOID, VOID, VOID, VOID, tmp1_group_0);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$36 = _Dp___init__impl__ms3zkb(16);
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var modifier_3 = padding(tmp_15, tmp$ret$36);
        var horizontalArrangement = Arrangement_getInstance().get_SpaceBetween_5p3wqd_k$();
        var verticalAlignment = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
        var $composer_11 = $composer_10;
        if (!((0 & 1) === 0))
          modifier_3 = Companion_getInstance_0();
        if (!((0 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
        if (!((0 & 4) === 0))
          verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
        var measurePolicy_1 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_11, 14 & 432 >> 3 | 112 & 432 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_4 = modifier_3;
        var $composer_12 = $composer_11;
        if (!((0 & 2) === 0))
          modifier_4 = Companion_getInstance_0();
        var compositeKeyHash_1 = get_currentCompositeKeyHashCode($composer_12, 0).hashCode();
        var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized_1 = materialize($composer_12, modifier_4);
        var tmp0_3 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_13 = $composer_12;
        var tmp_16 = $composer_13.get_applier_bupu8u_k$();
        if (!isInterface(tmp_16, Applier)) {
          invalidApplier();
        }
        $composer_13.startReusableNode_jjgeyp_k$();
        if ($composer_13.get_inserting_25mlsw_k$()) {
          $composer_13.createNode_ahrd54_k$(tmp0_3);
        } else {
          $composer_13.useNode_io5s9l_k$();
        }
        var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, compositeKeyHash_1, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_1, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        var $composer_14 = $composer_13;
        var tmp0_4 = RowScopeInstance_getInstance();
        var $composer_15 = $composer_14;
        sourceInformationMarkerStart($composer_15, -1979362355, 'C160@6169L649,174@6839L251:TeamChatScreens.kt#bisg3d');
        // Inline function 'androidx.compose.foundation.layout.Column' call
        var modifier_5 = tmp0_4.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0);
        var verticalArrangement_1 = null;
        var horizontalAlignment_1 = null;
        var $composer_16 = $composer_15;
        if (!((6 & 1) === 0))
          modifier_5 = Companion_getInstance_0();
        if (!((6 & 2) === 0))
          verticalArrangement_1 = Arrangement_getInstance().get_Top_18jj1w_k$();
        if (!((6 & 4) === 0))
          horizontalAlignment_1 = Companion_getInstance_1().get_Start_ih4i6x_k$();
        var measurePolicy_2 = columnMeasurePolicy(verticalArrangement_1, horizontalAlignment_1, $composer_16, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_6 = modifier_5;
        var $composer_17 = $composer_16;
        if (!((0 & 2) === 0))
          modifier_6 = Companion_getInstance_0();
        var compositeKeyHash_2 = get_currentCompositeKeyHashCode($composer_17, 0).hashCode();
        var localMap_2 = $composer_17.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized_2 = materialize($composer_17, modifier_6);
        var tmp0_5 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_18 = $composer_17;
        var tmp_17 = $composer_18.get_applier_bupu8u_k$();
        if (!isInterface(tmp_17, Applier)) {
          invalidApplier();
        }
        $composer_18.startReusableNode_jjgeyp_k$();
        if ($composer_18.get_inserting_25mlsw_k$()) {
          $composer_18.createNode_ahrd54_k$(tmp0_5);
        } else {
          $composer_18.useNode_io5s9l_k$();
        }
        var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_18);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, compositeKeyHash_2, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_2, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        var $composer_19 = $composer_18;
        ColumnScopeInstance_getInstance();
        var $composer_20 = $composer_19;
        sourceInformationMarkerStart($composer_20, -1502428898, 'C161@6234L260,167@6519L40,168@6584L212:TeamChatScreens.kt#bisg3d');
        var tmp_18 = colors.get_accentContent_6vke99_k$();
        var tmp_19 = get_sp(14);
        var tmp_20 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
        var tmp_21 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_22 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_23 = _TextOverflow___init__impl__obguoe(0);
        Text('Una invitaci\xF3n te espera', null, tmp_18, null, tmp_19, null, tmp_20, null, tmp_21, null, null, tmp_22, tmp_23, false, 0, 0, null, null, $composer_20, 1597446, 0, 262058);
        var tmp_24 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$49 = _Dp___init__impl__ms3zkb(4);
        Spacer(height(tmp_24, tmp$ret$49), $composer_20, 6);
        var tmp_25 = colors.get_textSecondary_kl22jf_k$();
        var tmp_26 = get_sp(10);
        var tmp_27 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_28 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_29 = _TextOverflow___init__impl__obguoe(0);
        Text('Elena te invita a Laboratorio de ideas', null, tmp_25, null, tmp_26, null, null, null, tmp_27, null, null, tmp_28, tmp_29, false, 0, 0, null, null, $composer_20, 24582, 0, 262122);
        sourceInformationMarkerEnd($composer_20);
        $composer_18.endNode_3m0yfn_k$();
        var tmp0_imageVector = NotasIcons_getInstance().get_ChevronRight_glf4sq_k$();
        var tmp1_tint = colors.get_accentContent_6vke99_k$();
        var tmp_30 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$50 = _Dp___init__impl__ms3zkb(22);
        var tmp2_modifier = size_0(tmp_30, tmp$ret$50);
        Icon(tmp0_imageVector, null, tmp2_modifier, tmp1_tint, $composer_15, 432, 0);
        sourceInformationMarkerEnd($composer_15);
        $composer_13.endNode_3m0yfn_k$();
        $composer_10.endReplaceGroup_ek144q_k$();
      } else {
        $composer_10.startReplaceGroup_5hh8aj_k$(918424100);
        $composer_10.endReplaceGroup_ek144q_k$();
      }
      var tmp_31 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$51 = _Dp___init__impl__ms3zkb(20);
      Spacer(height(tmp_31, tmp$ret$51), $composer_10, 6);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_7 = fillMaxWidth(Companion_getInstance_0());
      var horizontalArrangement_0 = Arrangement_getInstance().get_SpaceBetween_5p3wqd_k$();
      var verticalAlignment_0 = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_21 = $composer_10;
      if (!((0 & 1) === 0))
        modifier_7 = Companion_getInstance_0();
      if (!((0 & 2) === 0))
        horizontalArrangement_0 = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((0 & 4) === 0))
        verticalAlignment_0 = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_3 = rowMeasurePolicy(horizontalArrangement_0, verticalAlignment_0, $composer_21, 14 & 438 >> 3 | 112 & 438 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_8 = modifier_7;
      var $composer_22 = $composer_21;
      if (!((0 & 2) === 0))
        modifier_8 = Companion_getInstance_0();
      var compositeKeyHash_3 = get_currentCompositeKeyHashCode($composer_22, 0).hashCode();
      var localMap_3 = $composer_22.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_3 = materialize($composer_22, modifier_8);
      var tmp0_6 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_23 = $composer_22;
      var tmp_32 = $composer_23.get_applier_bupu8u_k$();
      if (!isInterface(tmp_32, Applier)) {
        invalidApplier();
      }
      $composer_23.startReusableNode_jjgeyp_k$();
      if ($composer_23.get_inserting_25mlsw_k$()) {
        $composer_23.createNode_ahrd54_k$(tmp0_6);
      } else {
        $composer_23.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_3 = _Updater___init__impl__rbfxm8($composer_23);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, measurePolicy_3, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, localMap_3, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, compositeKeyHash_3, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_3, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, materialized_3, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_24 = $composer_23;
      RowScopeInstance_getInstance();
      var $composer_25 = $composer_24;
      sourceInformationMarkerStart($composer_25, -825232670, 'C189@7409L201,195@7627L613:TeamChatScreens.kt#bisg3d');
      var tmp_33 = colors.get_textSecondary_kl22jf_k$();
      var tmp_34 = get_sp(10);
      var tmp_35 = Companion_getInstance_4().get_Bold_wnz5ke_k$();
      var tmp_36 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_37 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_38 = _TextOverflow___init__impl__obguoe(0);
      Text('TUS SALAS', null, tmp_33, null, tmp_34, null, tmp_35, null, tmp_36, null, null, tmp_37, tmp_38, false, 0, 0, null, null, $composer_25, 1597446, 0, 262058);
      var tmp_39 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$58 = _Dp___init__impl__ms3zkb(25);
      var tmp_40 = height(tmp_39, tmp$ret$58);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$59 = _Dp___init__impl__ms3zkb(12);
      var tmp_41 = background(clip(tmp_40, RoundedCornerShape(tmp$ret$59)), colors.get_accentContainer_6iiayz_k$());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$60 = _Dp___init__impl__ms3zkb(10);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_9 = padding(tmp_41, tmp$ret$60);
      var contentAlignment = Companion_getInstance_1().get_Center_3arb0i_k$();
      var propagateMinConstraints = false;
      var $composer_26 = $composer_25;
      if (!((4 & 1) === 0))
        modifier_9 = Companion_getInstance_0();
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((4 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_4 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_10 = modifier_9;
      var $composer_27 = $composer_26;
      if (!((0 & 2) === 0))
        modifier_10 = Companion_getInstance_0();
      var compositeKeyHash_4 = get_currentCompositeKeyHashCode($composer_27, 0).hashCode();
      var localMap_4 = $composer_27.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_4 = materialize($composer_27, modifier_10);
      var tmp0_7 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_28 = $composer_27;
      var tmp_42 = $composer_28.get_applier_bupu8u_k$();
      if (!isInterface(tmp_42, Applier)) {
        invalidApplier();
      }
      $composer_28.startReusableNode_jjgeyp_k$();
      if ($composer_28.get_inserting_25mlsw_k$()) {
        $composer_28.createNode_ahrd54_k$(tmp0_7);
      } else {
        $composer_28.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_4 = _Updater___init__impl__rbfxm8($composer_28);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, measurePolicy_4, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, localMap_4, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, compositeKeyHash_4, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_4, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, materialized_4, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_29 = $composer_28;
      BoxScopeInstance_getInstance();
      var $composer_30 = $composer_29;
      sourceInformationMarkerStart($composer_30, -1060854936, 'C203@7979L243:TeamChatScreens.kt#bisg3d');
      var tmp_43 = '' + filteredRooms.get_size_woubt6_k$() + ' salas';
      var tmp_44 = colors.get_accentContent_6vke99_k$();
      var tmp_45 = get_sp(10);
      var tmp_46 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_47 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_48 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_49 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp_43, null, tmp_44, null, tmp_45, null, tmp_46, null, tmp_47, null, null, tmp_48, tmp_49, false, 0, 0, null, null, $composer_30, 1597440, 0, 262058);
      sourceInformationMarkerEnd($composer_30);
      $composer_28.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_25);
      $composer_23.endNode_3m0yfn_k$();
      var tmp_50 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$67 = _Dp___init__impl__ms3zkb(14);
      Spacer(height(tmp_50, tmp$ret$67), $composer_10, 6);
      $composer_10.startReplaceGroup_5hh8aj_k$(-1909996993);
      sourceInformation($composer_10, '*216@8443L27,214@8370L119,218@8506L41');
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = filteredRooms.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
        sourceInformationMarkerStart($composer_10, 1353905963, 'CC(remember):TeamChatScreens.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_3 = !!(($dirty & 14) === 4 | $composer_0.changedInstance_s1wkiy_k$(element_0));
        // Inline function 'kotlin.let' call
        var it_3 = $composer_10.rememberedValue_4dg93v_k$();
        var tmp_51;
        if (invalid_3 || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_3 = Notas11SalasDeChatScreen$lambda_3(state, element_0);
          $composer_10.updateRememberedValue_l1wh71_k$(value_3);
          tmp_51 = value_3;
        } else {
          tmp_51 = it_3;
        }
        var tmp0_group_1 = tmp_51;
        sourceInformationMarkerEnd($composer_10);
        RoomCard(element_0, tmp0_group_1, $composer_10, 0);
        var tmp_52 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$74 = _Dp___init__impl__ms3zkb(14);
        Spacer(height(tmp_52, tmp$ret$74), $composer_10, 6);
      }
      $composer_10.endReplaceGroup_ek144q_k$();
      var tmp_53 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$75 = _Dp___init__impl__ms3zkb(16);
      var tmp_54 = background(clip(tmp_53, RoundedCornerShape(tmp$ret$75)), colors.get_accentContainer_6iiayz_k$());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_55 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$77 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_11 = padding(tmp_54, tmp_55, tmp$ret$77);
      var horizontalArrangement_1 = null;
      var verticalAlignment_1 = Companion_getInstance_1().get_Top_18jj1w_k$();
      var $composer_31 = $composer_10;
      if (!((2 & 1) === 0))
        modifier_11 = Companion_getInstance_0();
      if (!((2 & 2) === 0))
        horizontalArrangement_1 = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((2 & 4) === 0))
        verticalAlignment_1 = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_5 = rowMeasurePolicy(horizontalArrangement_1, verticalAlignment_1, $composer_31, 14 & 384 >> 3 | 112 & 384 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_12 = modifier_11;
      var $composer_32 = $composer_31;
      if (!((0 & 2) === 0))
        modifier_12 = Companion_getInstance_0();
      var compositeKeyHash_5 = get_currentCompositeKeyHashCode($composer_32, 0).hashCode();
      var localMap_5 = $composer_32.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_5 = materialize($composer_32, modifier_12);
      var tmp0_8 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_33 = $composer_32;
      var tmp_56 = $composer_33.get_applier_bupu8u_k$();
      if (!isInterface(tmp_56, Applier)) {
        invalidApplier();
      }
      $composer_33.startReusableNode_jjgeyp_k$();
      if ($composer_33.get_inserting_25mlsw_k$()) {
        $composer_33.createNode_ahrd54_k$(tmp0_8);
      } else {
        $composer_33.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_5 = _Updater___init__impl__rbfxm8($composer_33);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_5, measurePolicy_5, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_5, localMap_5, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_5, compositeKeyHash_5, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_5, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_5, materialized_5, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_34 = $composer_33;
      RowScopeInstance_getInstance();
      var $composer_35 = $composer_34;
      sourceInformationMarkerStart($composer_35, 1970507468, 'C230@8957L223,236@9197L40,237@9254L565:TeamChatScreens.kt#bisg3d');
      var tmp0_imageVector_0 = NotasIcons_getInstance().get_Lock_wo5j84_k$();
      var tmp1_tint_0 = colors.get_accentContent_6vke99_k$();
      var tmp_57 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$84 = _Dp___init__impl__ms3zkb(20);
      var tmp2_modifier_0 = size_0(tmp_57, tmp$ret$84);
      Icon(tmp0_imageVector_0, null, tmp2_modifier_0, tmp1_tint_0, $composer_35, 432, 0);
      var tmp_58 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$85 = _Dp___init__impl__ms3zkb(12);
      Spacer(width(tmp_58, tmp$ret$85), $composer_35, 6);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_13 = null;
      var verticalArrangement_2 = null;
      var horizontalAlignment_2 = null;
      var $composer_36 = $composer_35;
      if (!((7 & 1) === 0))
        modifier_13 = Companion_getInstance_0();
      if (!((7 & 2) === 0))
        verticalArrangement_2 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((7 & 4) === 0))
        horizontalAlignment_2 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_6 = columnMeasurePolicy(verticalArrangement_2, horizontalAlignment_2, $composer_36, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_14 = modifier_13;
      var $composer_37 = $composer_36;
      if (!((0 & 2) === 0))
        modifier_14 = Companion_getInstance_0();
      var compositeKeyHash_6 = get_currentCompositeKeyHashCode($composer_37, 0).hashCode();
      var localMap_6 = $composer_37.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_6 = materialize($composer_37, modifier_14);
      var tmp0_9 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_38 = $composer_37;
      var tmp_59 = $composer_38.get_applier_bupu8u_k$();
      if (!isInterface(tmp_59, Applier)) {
        invalidApplier();
      }
      $composer_38.startReusableNode_jjgeyp_k$();
      if ($composer_38.get_inserting_25mlsw_k$()) {
        $composer_38.createNode_ahrd54_k$(tmp0_9);
      } else {
        $composer_38.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_6 = _Updater___init__impl__rbfxm8($composer_38);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_6, measurePolicy_6, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_6, localMap_6, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_6, compositeKeyHash_6, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_6, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_6, materialized_6, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_39 = $composer_38;
      ColumnScopeInstance_getInstance();
      var $composer_40 = $composer_39;
      sourceInformationMarkerStart($composer_40, 1077667822, 'C238@9283L240,244@9544L40,245@9605L196:TeamChatScreens.kt#bisg3d');
      var tmp_60 = colors.get_accentContent_6vke99_k$();
      var tmp_61 = get_sp(12);
      var tmp_62 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_63 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_64 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_65 = _TextOverflow___init__impl__obguoe(0);
      Text('El historial se conserva', null, tmp_60, null, tmp_61, null, tmp_62, null, tmp_63, null, null, tmp_64, tmp_65, false, 0, 0, null, null, $composer_40, 1597446, 0, 262058);
      var tmp_66 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$92 = _Dp___init__impl__ms3zkb(3);
      Spacer(height(tmp_66, tmp$ret$92), $composer_40, 6);
      var tmp_67 = colors.get_textSecondary_kl22jf_k$();
      var tmp_68 = get_sp(11);
      var tmp_69 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_70 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_71 = _TextOverflow___init__impl__obguoe(0);
      Text('No se pueden borrar salas ni mensajes.', null, tmp_67, null, tmp_68, null, null, null, tmp_69, null, null, tmp_70, tmp_71, false, 0, 0, null, null, $composer_40, 24582, 0, 262122);
      sourceInformationMarkerEnd($composer_40);
      $composer_38.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_35);
      $composer_33.endNode_3m0yfn_k$();
      var tmp_72 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$93 = _Dp___init__impl__ms3zkb(18);
      Spacer(height(tmp_72, tmp$ret$93), $composer_10, 6);
      sourceInformationMarkerEnd($composer_10);
      $composer_8.endNode_3m0yfn_k$();
      var tmp_73 = NotasTab_TEAM_getInstance();
      sourceInformationMarkerStart($composer_5, -1940410084, 'CC(remember):TeamChatScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_4 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_4 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_74;
      if (invalid_4 || it_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_4 = NotasAppState$navigateToTab$ref_4(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value_4);
        tmp_74 = value_4;
      } else {
        tmp_74 = it_4;
      }
      var tmp2_group = tmp_74;
      sourceInformationMarkerEnd($composer_5);
      NotasBottomNavigation(tmp_73, tmp2_group, null, $composer_5, 6, 4);
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Notas11SalasDeChatScreen$lambda_4(state, $changed));
    }
  }
  function RoomCard(room, onClick, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1881115087);
    sourceInformation($composer_0, 'C(RoomCard)P(1)267@10147L6,268@10183L29,269@10217L2179:TeamChatScreens.kt#bisg3d');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(room) : $composer_0.changedInstance_s1wkiy_k$(room)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onClick) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1881115087, $dirty, -1, 'com.notas.agenda.ui.screens.RoomCard (TeamChatScreens.kt:266)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      var _destruct__k2r9zo = categoryColors(room.get_category_uyv41l_k$(), $composer_0, 0);
      var badgeBg = _destruct__k2r9zo.component1_7eebsc_k$().value_1;
      var badgeFg = _destruct__k2r9zo.component2_7eebsb_k$().value_1;
      var tmp = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(86);
      var tmp_0 = height(tmp, tmp$ret$0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(16);
      var tmp_1 = background(clip(tmp_0, RoundedCornerShape(tmp$ret$1)), colors.get_surface_ya87t7_k$());
      var tmp_2;
      if (colors.get_isDark_evw91l_k$()) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_2 = _Dp___init__impl__ms3zkb(1);
      } else {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_2 = _Dp___init__impl__ms3zkb(0.5);
      }
      var tmp_3 = tmp_2;
      var tmp_4 = colors.get_border_pp3j8c_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$4 = _Dp___init__impl__ms3zkb(16);
      var tmp_5 = clickable(border(tmp_1, tmp_3, tmp_4, RoundedCornerShape(tmp$ret$4)), VOID, VOID, VOID, VOID, onClick);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$5 = _Dp___init__impl__ms3zkb(14);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier = padding(tmp_5, tmp$ret$5);
      var horizontalArrangement = null;
      var verticalAlignment = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_1 = $composer_0;
      if (!((2 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((2 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((2 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 384 >> 3 | 112 & 384 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp_6 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_6, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      var tmp0_0 = RowScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -708178754, 'C284@10732L400,298@11141L40,299@11190L610:TeamChatScreens.kt#bisg3d');
      var tmp_7 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$12 = _Dp___init__impl__ms3zkb(46);
      var tmp_8 = size_0(tmp_7, tmp$ret$12);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$13 = _Dp___init__impl__ms3zkb(14);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_1 = background(clip(tmp_8, RoundedCornerShape(tmp$ret$13)), badgeBg);
      var contentAlignment = Companion_getInstance_1().get_Center_3arb0i_k$();
      var propagateMinConstraints = false;
      var $composer_6 = $composer_5;
      if (!((4 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((4 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_0 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      var tmp0_1 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      var tmp_9 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_9, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_1);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_9 = $composer_8;
      BoxScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, -852259494, 'C291@10958L164:TeamChatScreens.kt#bisg3d');
      var tmp_10 = get_sp(22);
      var tmp_11 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_12 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_14 = _TextOverflow___init__impl__obguoe(0);
      Text('#', null, badgeFg, null, tmp_10, null, tmp_11, null, tmp_12, null, null, tmp_13, tmp_14, false, 0, 0, null, null, $composer_10, 1597446, 0, 262058);
      sourceInformationMarkerEnd($composer_10);
      $composer_8.endNode_3m0yfn_k$();
      var tmp_15 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$20 = _Dp___init__impl__ms3zkb(13);
      Spacer(width(tmp_15, tmp$ret$20), $composer_5, 6);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_3 = tmp0_0.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0);
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_11 = $composer_5;
      if (!((6 & 1) === 0))
        modifier_3 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_1 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_11, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_12 = $composer_11;
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_0();
      var compositeKeyHash_1 = get_currentCompositeKeyHashCode($composer_12, 0).hashCode();
      var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_1 = materialize($composer_12, modifier_4);
      var tmp0_2 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_13 = $composer_12;
      var tmp_16 = $composer_13.get_applier_bupu8u_k$();
      if (!isInterface(tmp_16, Applier)) {
        invalidApplier();
      }
      $composer_13.startReusableNode_jjgeyp_k$();
      if ($composer_13.get_inserting_25mlsw_k$()) {
        $composer_13.createNode_ahrd54_k$(tmp0_2);
      } else {
        $composer_13.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, compositeKeyHash_1, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_1, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_14 = $composer_13;
      ColumnScopeInstance_getInstance();
      var $composer_15 = $composer_14;
      sourceInformationMarkerStart($composer_15, -230526933, 'C300@11243L261,308@11517L40,309@11570L220:TeamChatScreens.kt#bisg3d');
      var tmp0_text = room.get_name_woqyms_k$();
      var tmp1_color = colors.get_textPrimary_mf1tv7_k$();
      var tmp2_fontSize = get_sp(14);
      var tmp3_fontWeight = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp4_overflow = Companion_getInstance_5().get_Ellipsis_8ygjpt_k$();
      var tmp_17 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_18 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      Text(tmp0_text, null, tmp1_color, null, tmp2_fontSize, null, tmp3_fontWeight, null, tmp_17, null, null, tmp_18, tmp4_overflow, false, 1, 0, null, null, $composer_15, 1597440, 24960, 241578);
      var tmp_19 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$27 = _Dp___init__impl__ms3zkb(5);
      Spacer(height(tmp_19, tmp$ret$27), $composer_15, 6);
      var tmp5_text = room.get_lastPreview_v8kffb_k$();
      var tmp6_color = colors.get_textSecondary_kl22jf_k$();
      var tmp7_fontSize = get_sp(11);
      var tmp8_overflow = Companion_getInstance_5().get_Ellipsis_8ygjpt_k$();
      var tmp_20 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_21 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      Text(tmp5_text, null, tmp6_color, null, tmp7_fontSize, null, null, null, tmp_20, null, null, tmp_21, tmp8_overflow, false, 1, 0, null, null, $composer_15, 24576, 24960, 241642);
      sourceInformationMarkerEnd($composer_15);
      $composer_13.endNode_3m0yfn_k$();
      if (room.get_unreadCount_3tfxl5_k$() > 0) {
        $composer_5.startReplaceGroup_5hh8aj_k$(-707118772);
        sourceInformation($composer_5, '318@11849L40,319@11902L478');
        var tmp_22 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$28 = _Dp___init__impl__ms3zkb(10);
        Spacer(width(tmp_22, tmp$ret$28), $composer_5, 6);
        var tmp_23 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$29 = _Dp___init__impl__ms3zkb(24);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier_5 = background(clip(size_0(tmp_23, tmp$ret$29), get_CircleShape()), colors.get_accentButton_k5y1fw_k$());
        var contentAlignment_0 = Companion_getInstance_1().get_Center_3arb0i_k$();
        var propagateMinConstraints_0 = false;
        var $composer_16 = $composer_5;
        if (!((4 & 1) === 0))
          modifier_5 = Companion_getInstance_0();
        if (!((4 & 2) === 0))
          contentAlignment_0 = Companion_getInstance_1().get_TopStart_o4x792_k$();
        if (!((4 & 4) === 0))
          propagateMinConstraints_0 = false;
        var measurePolicy_2 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_6 = modifier_5;
        var $composer_17 = $composer_16;
        if (!((0 & 2) === 0))
          modifier_6 = Companion_getInstance_0();
        var compositeKeyHash_2 = get_currentCompositeKeyHashCode($composer_17, 0).hashCode();
        var localMap_2 = $composer_17.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized_2 = materialize($composer_17, modifier_6);
        var tmp0_3 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_18 = $composer_17;
        var tmp_24 = $composer_18.get_applier_bupu8u_k$();
        if (!isInterface(tmp_24, Applier)) {
          invalidApplier();
        }
        $composer_18.startReusableNode_jjgeyp_k$();
        if ($composer_18.get_inserting_25mlsw_k$()) {
          $composer_18.createNode_ahrd54_k$(tmp0_3);
        } else {
          $composer_18.useNode_io5s9l_k$();
        }
        var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_18);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, compositeKeyHash_2, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_2, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        var $composer_19 = $composer_18;
        BoxScopeInstance_getInstance();
        var $composer_20 = $composer_19;
        sourceInformationMarkerStart($composer_20, 350245509, 'C326@12154L212:TeamChatScreens.kt#bisg3d');
        var tmp_25 = room.get_unreadCount_3tfxl5_k$().toString();
        var tmp_26 = Companion_getInstance_3().get_White_xpp3qf_k$();
        var tmp_27 = get_sp(11);
        var tmp_28 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
        var tmp_29 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_30 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_31 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_25, null, tmp_26, null, tmp_27, null, tmp_28, null, tmp_29, null, null, tmp_30, tmp_31, false, 0, 0, null, null, $composer_20, 1597824, 0, 262058);
        sourceInformationMarkerEnd($composer_20);
        $composer_18.endNode_3m0yfn_k$();
        $composer_5.endReplaceGroup_ek144q_k$();
      } else {
        $composer_5.startReplaceGroup_5hh8aj_k$(-706585417);
        $composer_5.endReplaceGroup_ek144q_k$();
      }
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(RoomCard$lambda(room, onClick, $changed));
    }
  }
  function Notas12CrearSalaScreen(state, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(386866002);
    sourceInformation($composer_0, 'C(Notas12CrearSalaScreen)339@12491L6,341@12503L5480:TeamChatScreens.kt#bisg3d');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(state) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(386866002, $dirty, -1, 'com.notas.agenda.ui.screens.Notas12CrearSalaScreen (TeamChatScreens.kt:338)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = background(fillMaxSize(Companion_getInstance_0()), colors.get_background_8l4942_k$());
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      var tmp0_0 = ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -781543948, 'C346@12626L19,352@12863L44,347@12654L264,358@13028L21,355@12928L5021,485@17959L18:TeamChatScreens.kt#bisg3d');
      NotasTopStatusBar(null, $composer_5, 0, 1);
      var tmp_0 = NotasIcons_getInstance().get_Close_i86z73_k$();
      sourceInformationMarkerStart($composer_5, -1964871468, 'CC(remember):TeamChatScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = Notas12CrearSalaScreen$lambda(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp0_group = tmp_1;
      sourceInformationMarkerEnd($composer_5);
      NotasHeader('NOTAS', 'Crear una sala', 'Un espacio para cada proyecto', tmp_0, null, tmp0_group, null, null, null, $composer_5, 438, 464);
      var tmp_2 = tmp0_0.weight$default_gbkz97_k$(Companion_getInstance_0(), 1.0);
      var tmp_3 = verticalScroll(tmp_2, rememberScrollState(0, $composer_5, 0, 1));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$10 = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = padding(tmp_3, tmp$ret$10);
      var verticalArrangement_0 = null;
      var horizontalAlignment_0 = null;
      var $composer_6 = $composer_5;
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_0 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_0 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement_0, horizontalAlignment_0, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      var tmp0_1 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      var tmp_4 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_4, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_1);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_9 = $composer_8;
      ColumnScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, 1713278899, 'C361@13121L40,365@13313L28,362@13174L235,368@13422L41,372@13616L35,369@13476L337,378@13827L41,379@13881L190,385@14084L41,387@14139L1997,438@16150L41,439@16204L1215,470@17433L41,471@17487L172,477@17673L41,480@17825L45,478@17727L158,482@17898L41:TeamChatScreens.kt#bisg3d');
      var tmp_5 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$17 = _Dp___init__impl__ms3zkb(6);
      Spacer(height(tmp_5, tmp$ret$17), $composer_10, 6);
      var tmp_6 = state.get_draftRoomName_yi2pwe_k$();
      sourceInformationMarkerStart($composer_10, -1191657574, 'CC(remember):TeamChatScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_0 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = Notas12CrearSalaScreen$lambda_0(state);
        $composer_10.updateRememberedValue_l1wh71_k$(value_0);
        tmp_7 = value_0;
      } else {
        tmp_7 = it_0;
      }
      var tmp0_group_0 = tmp_7;
      sourceInformationMarkerEnd($composer_10);
      var tmp_8 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_9 = _Dp___init__impl__ms3zkb(0.0);
      NotasInputField('Nombre de la sala', tmp_6, tmp0_group_0, 'Ej. Proyecto Aurora', false, false, null, false, tmp_8, tmp_9, null, $composer_10, 3078, 0, 2032);
      var tmp_10 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$22 = _Dp___init__impl__ms3zkb(20);
      Spacer(height(tmp_10, tmp$ret$22), $composer_10, 6);
      var tmp_11 = state.get_draftRoomDescription_t2nj3r_k$();
      sourceInformationMarkerStart($composer_10, -1191647871, 'CC(remember):TeamChatScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_1 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_12;
      if (invalid_1 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = Notas12CrearSalaScreen$lambda_1(state);
        $composer_10.updateRememberedValue_l1wh71_k$(value_1);
        tmp_12 = value_1;
      } else {
        tmp_12 = it_1;
      }
      var tmp1_group = tmp_12;
      sourceInformationMarkerEnd($composer_10);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_13 = _Dp___init__impl__ms3zkb(88);
      var tmp_14 = _Dp___init__impl__ms3zkb(0.0);
      NotasInputField('Descripci\xF3n', tmp_11, tmp1_group, 'Ideas, entregas y decisiones del proyecto.', false, false, null, false, tmp_13, tmp_14, null, $composer_10, 113249286, 0, 1648);
      var tmp_15 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$28 = _Dp___init__impl__ms3zkb(26);
      Spacer(height(tmp_15, tmp$ret$28), $composer_10, 6);
      var tmp_16 = colors.get_textSecondary_kl22jf_k$();
      var tmp_17 = get_sp(10);
      var tmp_18 = Companion_getInstance_4().get_Bold_wnz5ke_k$();
      var tmp_19 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_20 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_21 = _TextOverflow___init__impl__obguoe(0);
      Text('QUI\xC9N PUEDE ENTRAR', null, tmp_16, null, tmp_17, null, tmp_18, null, tmp_19, null, null, tmp_20, tmp_21, false, 0, 0, null, null, $composer_10, 1597446, 0, 262058);
      var tmp_22 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$29 = _Dp___init__impl__ms3zkb(12);
      Spacer(height(tmp_22, tmp$ret$29), $composer_10, 6);
      var tmp_23 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$30 = _Dp___init__impl__ms3zkb(78);
      var tmp_24 = height(tmp_23, tmp$ret$30);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$31 = _Dp___init__impl__ms3zkb(16);
      var tmp_25 = background(clip(tmp_24, RoundedCornerShape(tmp$ret$31)), colors.get_surface_ya87t7_k$());
      var tmp_26;
      if (colors.get_isDark_evw91l_k$()) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_26 = _Dp___init__impl__ms3zkb(1);
      } else {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_26 = _Dp___init__impl__ms3zkb(0.5);
      }
      var tmp_27 = tmp_26;
      var tmp_28 = colors.get_border_pp3j8c_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$34 = _Dp___init__impl__ms3zkb(16);
      var tmp_29 = border(tmp_25, tmp_27, tmp_28, RoundedCornerShape(tmp$ret$34));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$35 = _Dp___init__impl__ms3zkb(17);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_3 = padding(tmp_29, tmp$ret$35);
      var horizontalArrangement = null;
      var verticalAlignment = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_11 = $composer_10;
      if (!((2 & 1) === 0))
        modifier_3 = Companion_getInstance_0();
      if (!((2 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((2 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_1 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_11, 14 & 384 >> 3 | 112 & 384 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_12 = $composer_11;
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_0();
      var compositeKeyHash_1 = get_currentCompositeKeyHashCode($composer_12, 0).hashCode();
      var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_1 = materialize($composer_12, modifier_4);
      var tmp0_2 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_13 = $composer_12;
      var tmp_30 = $composer_13.get_applier_bupu8u_k$();
      if (!isInterface(tmp_30, Applier)) {
        invalidApplier();
      }
      $composer_13.startReusableNode_jjgeyp_k$();
      if ($composer_13.get_inserting_25mlsw_k$()) {
        $composer_13.createNode_ahrd54_k$(tmp0_2);
      } else {
        $composer_13.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, compositeKeyHash_1, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_1, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_14 = $composer_13;
      var tmp0_3 = RowScopeInstance_getInstance();
      var $composer_15 = $composer_14;
      sourceInformationMarkerStart($composer_15, -1072990165, 'C401@14724L223,407@14964L40,408@15021L578,422@15616L506:TeamChatScreens.kt#bisg3d');
      var tmp0_imageVector = NotasIcons_getInstance().get_Lock_wo5j84_k$();
      var tmp1_tint = colors.get_accentContent_6vke99_k$();
      var tmp_31 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$42 = _Dp___init__impl__ms3zkb(22);
      var tmp2_modifier = size_0(tmp_31, tmp$ret$42);
      Icon(tmp0_imageVector, null, tmp2_modifier, tmp1_tint, $composer_15, 432, 0);
      var tmp_32 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$43 = _Dp___init__impl__ms3zkb(14);
      Spacer(width(tmp_32, tmp$ret$43), $composer_15, 6);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_5 = tmp0_3.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0);
      var verticalArrangement_1 = null;
      var horizontalAlignment_1 = null;
      var $composer_16 = $composer_15;
      if (!((6 & 1) === 0))
        modifier_5 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_1 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_1 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_2 = columnMeasurePolicy(verticalArrangement_1, horizontalAlignment_1, $composer_16, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_6 = modifier_5;
      var $composer_17 = $composer_16;
      if (!((0 & 2) === 0))
        modifier_6 = Companion_getInstance_0();
      var compositeKeyHash_2 = get_currentCompositeKeyHashCode($composer_17, 0).hashCode();
      var localMap_2 = $composer_17.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_2 = materialize($composer_17, modifier_6);
      var tmp0_4 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_18 = $composer_17;
      var tmp_33 = $composer_18.get_applier_bupu8u_k$();
      if (!isInterface(tmp_33, Applier)) {
        invalidApplier();
      }
      $composer_18.startReusableNode_jjgeyp_k$();
      if ($composer_18.get_inserting_25mlsw_k$()) {
        $composer_18.createNode_ahrd54_k$(tmp0_4);
      } else {
        $composer_18.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_18);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, compositeKeyHash_2, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_2, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_19 = $composer_18;
      ColumnScopeInstance_getInstance();
      var $composer_20 = $composer_19;
      sourceInformationMarkerStart($composer_20, 1406452504, 'C409@15082L233,415@15336L40,416@15397L184:TeamChatScreens.kt#bisg3d');
      var tmp_34 = colors.get_textPrimary_mf1tv7_k$();
      var tmp_35 = get_sp(14);
      var tmp_36 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_37 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_38 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_39 = _TextOverflow___init__impl__obguoe(0);
      Text('Solo por invitaci\xF3n', null, tmp_34, null, tmp_35, null, tmp_36, null, tmp_37, null, null, tmp_38, tmp_39, false, 0, 0, null, null, $composer_20, 1597446, 0, 262058);
      var tmp_40 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$50 = _Dp___init__impl__ms3zkb(3);
      Spacer(height(tmp_40, tmp$ret$50), $composer_20, 6);
      var tmp_41 = colors.get_textSecondary_kl22jf_k$();
      var tmp_42 = get_sp(11);
      var tmp_43 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_44 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_45 = _TextOverflow___init__impl__obguoe(0);
      Text('T\xFA eliges a tus compa\xF1eros', null, tmp_41, null, tmp_42, null, null, null, tmp_43, null, null, tmp_44, tmp_45, false, 0, 0, null, null, $composer_20, 24582, 0, 262122);
      sourceInformationMarkerEnd($composer_20);
      $composer_18.endNode_3m0yfn_k$();
      var tmp_46 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$51 = _Dp___init__impl__ms3zkb(22);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_7 = background(clip(size_0(tmp_46, tmp$ret$51), get_CircleShape()), colors.get_accentButton_k5y1fw_k$());
      var contentAlignment = Companion_getInstance_1().get_Center_3arb0i_k$();
      var propagateMinConstraints = false;
      var $composer_21 = $composer_15;
      if (!((4 & 1) === 0))
        modifier_7 = Companion_getInstance_0();
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((4 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_3 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_8 = modifier_7;
      var $composer_22 = $composer_21;
      if (!((0 & 2) === 0))
        modifier_8 = Companion_getInstance_0();
      var compositeKeyHash_3 = get_currentCompositeKeyHashCode($composer_22, 0).hashCode();
      var localMap_3 = $composer_22.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_3 = materialize($composer_22, modifier_8);
      var tmp0_5 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_23 = $composer_22;
      var tmp_47 = $composer_23.get_applier_bupu8u_k$();
      if (!isInterface(tmp_47, Applier)) {
        invalidApplier();
      }
      $composer_23.startReusableNode_jjgeyp_k$();
      if ($composer_23.get_inserting_25mlsw_k$()) {
        $composer_23.createNode_ahrd54_k$(tmp0_5);
      } else {
        $composer_23.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_3 = _Updater___init__impl__rbfxm8($composer_23);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, measurePolicy_3, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, localMap_3, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, compositeKeyHash_3, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_3, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, materialized_3, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_24 = $composer_23;
      BoxScopeInstance_getInstance();
      var $composer_25 = $composer_24;
      sourceInformationMarkerStart($composer_25, 1152427595, 'C429@15896L208:TeamChatScreens.kt#bisg3d');
      var tmp_48 = Companion_getInstance_3().get_White_xpp3qf_k$();
      var tmp_49 = get_sp(13);
      var tmp_50 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_51 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_52 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_53 = _TextOverflow___init__impl__obguoe(0);
      Text('\u2713', null, tmp_48, null, tmp_49, null, tmp_50, null, tmp_51, null, null, tmp_52, tmp_53, false, 0, 0, null, null, $composer_25, 1597830, 0, 262058);
      sourceInformationMarkerEnd($composer_25);
      $composer_23.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_15);
      $composer_13.endNode_3m0yfn_k$();
      var tmp_54 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$58 = _Dp___init__impl__ms3zkb(22);
      Spacer(height(tmp_54, tmp$ret$58), $composer_10, 6);
      var tmp_55 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$59 = _Dp___init__impl__ms3zkb(16);
      var tmp_56 = background(clip(tmp_55, RoundedCornerShape(tmp$ret$59)), colors.get_accentContainer_6iiayz_k$());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_57 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$61 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_9 = padding(tmp_56, tmp_57, tmp$ret$61);
      var horizontalArrangement_0 = null;
      var verticalAlignment_0 = Companion_getInstance_1().get_Top_18jj1w_k$();
      var $composer_26 = $composer_10;
      if (!((2 & 1) === 0))
        modifier_9 = Companion_getInstance_0();
      if (!((2 & 2) === 0))
        horizontalArrangement_0 = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((2 & 4) === 0))
        verticalAlignment_0 = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_4 = rowMeasurePolicy(horizontalArrangement_0, verticalAlignment_0, $composer_26, 14 & 384 >> 3 | 112 & 384 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_10 = modifier_9;
      var $composer_27 = $composer_26;
      if (!((0 & 2) === 0))
        modifier_10 = Companion_getInstance_0();
      var compositeKeyHash_4 = get_currentCompositeKeyHashCode($composer_27, 0).hashCode();
      var localMap_4 = $composer_27.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_4 = materialize($composer_27, modifier_10);
      var tmp0_6 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_28 = $composer_27;
      var tmp_58 = $composer_28.get_applier_bupu8u_k$();
      if (!isInterface(tmp_58, Applier)) {
        invalidApplier();
      }
      $composer_28.startReusableNode_jjgeyp_k$();
      if ($composer_28.get_inserting_25mlsw_k$()) {
        $composer_28.createNode_ahrd54_k$(tmp0_6);
      } else {
        $composer_28.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_4 = _Updater___init__impl__rbfxm8($composer_28);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, measurePolicy_4, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, localMap_4, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, compositeKeyHash_4, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_4, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, materialized_4, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_29 = $composer_28;
      RowScopeInstance_getInstance();
      var $composer_30 = $composer_29;
      sourceInformationMarkerStart($composer_30, 601409002, 'C447@16541L223,453@16781L40,454@16838L567:TeamChatScreens.kt#bisg3d');
      var tmp0_imageVector_0 = NotasIcons_getInstance().get_Lock_wo5j84_k$();
      var tmp1_tint_0 = colors.get_accentContent_6vke99_k$();
      var tmp_59 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$68 = _Dp___init__impl__ms3zkb(20);
      var tmp2_modifier_0 = size_0(tmp_59, tmp$ret$68);
      Icon(tmp0_imageVector_0, null, tmp2_modifier_0, tmp1_tint_0, $composer_30, 432, 0);
      var tmp_60 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$69 = _Dp___init__impl__ms3zkb(12);
      Spacer(width(tmp_60, tmp$ret$69), $composer_30, 6);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_11 = null;
      var verticalArrangement_2 = null;
      var horizontalAlignment_2 = null;
      var $composer_31 = $composer_30;
      if (!((7 & 1) === 0))
        modifier_11 = Companion_getInstance_0();
      if (!((7 & 2) === 0))
        verticalArrangement_2 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((7 & 4) === 0))
        horizontalAlignment_2 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_5 = columnMeasurePolicy(verticalArrangement_2, horizontalAlignment_2, $composer_31, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_12 = modifier_11;
      var $composer_32 = $composer_31;
      if (!((0 & 2) === 0))
        modifier_12 = Companion_getInstance_0();
      var compositeKeyHash_5 = get_currentCompositeKeyHashCode($composer_32, 0).hashCode();
      var localMap_5 = $composer_32.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_5 = materialize($composer_32, modifier_12);
      var tmp0_7 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_33 = $composer_32;
      var tmp_61 = $composer_33.get_applier_bupu8u_k$();
      if (!isInterface(tmp_61, Applier)) {
        invalidApplier();
      }
      $composer_33.startReusableNode_jjgeyp_k$();
      if ($composer_33.get_inserting_25mlsw_k$()) {
        $composer_33.createNode_ahrd54_k$(tmp0_7);
      } else {
        $composer_33.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_5 = _Updater___init__impl__rbfxm8($composer_33);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_5, measurePolicy_5, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_5, localMap_5, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_5, compositeKeyHash_5, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_5, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_5, materialized_5, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_34 = $composer_33;
      ColumnScopeInstance_getInstance();
      var $composer_35 = $composer_34;
      sourceInformationMarkerStart($composer_35, -338073204, 'C455@16867L237,461@17125L40,462@17186L201:TeamChatScreens.kt#bisg3d');
      var tmp_62 = colors.get_accentContent_6vke99_k$();
      var tmp_63 = get_sp(12);
      var tmp_64 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_65 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_66 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_67 = _TextOverflow___init__impl__obguoe(0);
      Text('Un espacio permanente', null, tmp_62, null, tmp_63, null, tmp_64, null, tmp_65, null, null, tmp_66, tmp_67, false, 0, 0, null, null, $composer_35, 1597446, 0, 262058);
      var tmp_68 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$76 = _Dp___init__impl__ms3zkb(3);
      Spacer(height(tmp_68, tmp$ret$76), $composer_35, 6);
      var tmp_69 = colors.get_textSecondary_kl22jf_k$();
      var tmp_70 = get_sp(11);
      var tmp_71 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_72 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_73 = _TextOverflow___init__impl__obguoe(0);
      Text('La sala y sus mensajes no se podr\xE1n borrar.', null, tmp_69, null, tmp_70, null, null, null, tmp_71, null, null, tmp_72, tmp_73, false, 0, 0, null, null, $composer_35, 24582, 0, 262122);
      sourceInformationMarkerEnd($composer_35);
      $composer_33.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_30);
      $composer_28.endNode_3m0yfn_k$();
      var tmp_74 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$77 = _Dp___init__impl__ms3zkb(20);
      Spacer(height(tmp_74, tmp$ret$77), $composer_10, 6);
      var tmp_75 = colors.get_textSecondary_kl22jf_k$();
      var tmp_76 = get_sp(11);
      var tmp_77 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_78 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_79 = _TextOverflow___init__impl__obguoe(0);
      Text('En el siguiente paso podr\xE1s invitar al equipo.', null, tmp_75, null, tmp_76, null, null, null, tmp_77, null, null, tmp_78, tmp_79, false, 0, 0, null, null, $composer_10, 24582, 0, 262122);
      var tmp_80 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$78 = _Dp___init__impl__ms3zkb(24);
      Spacer(height(tmp_80, tmp$ret$78), $composer_10, 6);
      sourceInformationMarkerStart($composer_10, -1191513173, 'CC(remember):TeamChatScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_2 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_81;
      if (invalid_2 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_2 = Notas12CrearSalaScreen$lambda_2(state);
        $composer_10.updateRememberedValue_l1wh71_k$(value_2);
        tmp_81 = value_2;
      } else {
        tmp_81 = it_2;
      }
      var tmp2_group = tmp_81;
      sourceInformationMarkerEnd($composer_10);
      var tmp_82 = _Dp___init__impl__ms3zkb(0.0);
      NotasPrimaryButton('Crear y elegir compa\xF1eros', tmp2_group, null, tmp_82, _Dp___init__impl__ms3zkb(0.0), $composer_10, 6, 28);
      var tmp_83 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$83 = _Dp___init__impl__ms3zkb(20);
      Spacer(height(tmp_83, tmp$ret$83), $composer_10, 6);
      sourceInformationMarkerEnd($composer_10);
      $composer_8.endNode_3m0yfn_k$();
      NotasModalFooter(null, null, $composer_5, 0, 3);
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Notas12CrearSalaScreen$lambda_3(state, $changed));
    }
  }
  function Notas13InvitarCompanerosScreen(state, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(560952259);
    sourceInformation($composer_0, 'C(Notas13InvitarCompanerosScreen)491@18086L6,500@18509L5088:TeamChatScreens.kt#bisg3d');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(state) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(560952259, $dirty, -1, 'com.notas.agenda.ui.screens.Notas13InvitarCompanerosScreen (TeamChatScreens.kt:490)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      // Inline function 'kotlin.collections.filter' call
      var tmp0 = state.get_teammates_5t9qnc_k$();
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$();
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (isBlank(state.get_teammateSearchQuery_b0vtxx_k$()) || contains(element.get_name_woqyms_k$(), state.get_teammateSearchQuery_b0vtxx_k$(), true) || contains(element.get_role_wotsxr_k$(), state.get_teammateSearchQuery_b0vtxx_k$(), true)) {
          destination.add_utx5q5_k$(element);
        }
      }
      var filteredTeammates = destination;
      var selectedCount = state.get_selectedTeammateIds_sn5thq_k$().get_size_woubt6_k$();
      // Inline function 'kotlin.text.ifBlank' call
      var this_0 = state.get_draftRoomName_yi2pwe_k$();
      var tmp;
      if (isBlank(this_0)) {
        tmp = 'Proyecto Aurora';
      } else {
        tmp = this_0;
      }
      var roomSubtitle = 'Sala \xB7 ' + tmp;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = background(fillMaxSize(Companion_getInstance_0()), colors.get_background_8l4942_k$());
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp_0 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_0, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0_0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      var tmp0_1 = ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 628294251, 'C505@18632L19,511@18853L44,506@18660L248,517@19018L21,514@18918L4645,628@23573L18:TeamChatScreens.kt#bisg3d');
      NotasTopStatusBar(null, $composer_5, 0, 1);
      var tmp_1 = NotasIcons_getInstance().get_Close_i86z73_k$();
      sourceInformationMarkerStart($composer_5, -395372283, 'CC(remember):TeamChatScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = Notas13InvitarCompanerosScreen$lambda(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp0_group = tmp_2;
      sourceInformationMarkerEnd($composer_5);
      NotasHeader('NOTAS', 'Invitar al equipo', roomSubtitle, tmp_1, null, tmp0_group, null, null, null, $composer_5, 54, 464);
      var tmp_3 = tmp0_1.weight$default_gbkz97_k$(Companion_getInstance_0(), 1.0);
      var tmp_4 = verticalScroll(tmp_3, rememberScrollState(0, $composer_5, 0, 1));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$15 = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = padding(tmp_4, tmp$ret$15);
      var verticalArrangement_0 = null;
      var horizontalAlignment_0 = null;
      var $composer_6 = $composer_5;
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_0 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_0 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement_0, horizontalAlignment_0, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      var tmp0_2 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      var tmp_5 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_5, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_2);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_9 = $composer_8;
      ColumnScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, -27487206, 'C520@19111L40,523@19263L34,521@19164L148,526@19326L41,527@19380L558,543@19952L41,544@20006L191,550@20210L41,609@22903L40,610@22956L172,615@23141L41,623@23453L31,621@23374L125,625@23512L41:TeamChatScreens.kt#bisg3d');
      var tmp_6 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$22 = _Dp___init__impl__ms3zkb(6);
      Spacer(height(tmp_6, tmp$ret$22), $composer_10, 6);
      var tmp_7 = state.get_teammateSearchQuery_b0vtxx_k$();
      sourceInformationMarkerStart($composer_10, 1246039761, 'CC(remember):TeamChatScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_0 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_8;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = Notas13InvitarCompanerosScreen$lambda_0(state);
        $composer_10.updateRememberedValue_l1wh71_k$(value_0);
        tmp_8 = value_0;
      } else {
        tmp_8 = it_0;
      }
      var tmp0_group_0 = tmp_8;
      sourceInformationMarkerEnd($composer_10);
      NotasSearchBar(tmp_7, tmp0_group_0, null, $composer_10, 0, 4);
      var tmp_9 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$27 = _Dp___init__impl__ms3zkb(16);
      Spacer(height(tmp_9, tmp$ret$27), $composer_10, 6);
      var tmp_10 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$28 = _Dp___init__impl__ms3zkb(25);
      var tmp_11 = height(tmp_10, tmp$ret$28);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$29 = _Dp___init__impl__ms3zkb(12);
      var tmp_12 = background(clip(tmp_11, RoundedCornerShape(tmp$ret$29)), colors.get_accentContainer_6iiayz_k$());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$30 = _Dp___init__impl__ms3zkb(10);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_3 = padding(tmp_12, tmp$ret$30);
      var contentAlignment = Companion_getInstance_1().get_Center_3arb0i_k$();
      var propagateMinConstraints = false;
      var $composer_11 = $composer_10;
      if (!((4 & 1) === 0))
        modifier_3 = Companion_getInstance_0();
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((4 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_1 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_12 = $composer_11;
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_0();
      var compositeKeyHash_1 = get_currentCompositeKeyHashCode($composer_12, 0).hashCode();
      var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_1 = materialize($composer_12, modifier_4);
      var tmp0_3 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_13 = $composer_12;
      var tmp_13 = $composer_13.get_applier_bupu8u_k$();
      if (!isInterface(tmp_13, Applier)) {
        invalidApplier();
      }
      $composer_13.startReusableNode_jjgeyp_k$();
      if ($composer_13.get_inserting_25mlsw_k$()) {
        $composer_13.createNode_ahrd54_k$(tmp0_3);
      } else {
        $composer_13.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, compositeKeyHash_1, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_1, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_14 = $composer_13;
      BoxScopeInstance_getInstance();
      var $composer_15 = $composer_14;
      sourceInformationMarkerStart($composer_15, 1844956942, 'C535@19700L224:TeamChatScreens.kt#bisg3d');
      var tmp_14 = '' + selectedCount + ' seleccionados';
      var tmp_15 = colors.get_accentContent_6vke99_k$();
      var tmp_16 = get_sp(10);
      var tmp_17 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_18 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_19 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_20 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp_14, null, tmp_15, null, tmp_16, null, tmp_17, null, tmp_18, null, null, tmp_19, tmp_20, false, 0, 0, null, null, $composer_15, 1597440, 0, 262058);
      sourceInformationMarkerEnd($composer_15);
      $composer_13.endNode_3m0yfn_k$();
      var tmp_21 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$37 = _Dp___init__impl__ms3zkb(20);
      Spacer(height(tmp_21, tmp$ret$37), $composer_10, 6);
      var tmp_22 = colors.get_textSecondary_kl22jf_k$();
      var tmp_23 = get_sp(10);
      var tmp_24 = Companion_getInstance_4().get_Bold_wnz5ke_k$();
      var tmp_25 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_26 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_27 = _TextOverflow___init__impl__obguoe(0);
      Text('COMPA\xD1EROS DE NOTAS', null, tmp_22, null, tmp_23, null, tmp_24, null, tmp_25, null, null, tmp_26, tmp_27, false, 0, 0, null, null, $composer_10, 1597446, 0, 262058);
      var tmp_28 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$38 = _Dp___init__impl__ms3zkb(12);
      Spacer(height(tmp_28, tmp$ret$38), $composer_10, 6);
      $composer_10.startReplaceGroup_5hh8aj_k$(1246074973);
      sourceInformation($composer_10, '*565@20906L42,554@20392L2425,606@22834L41');
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = filteredTeammates.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
        var selected = state.get_selectedTeammateIds_sn5thq_k$().contains_ccp5tc_k$(element_0.get_id_kntnx8_k$());
        var tmp_29 = fillMaxWidth(Companion_getInstance_0());
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$41 = _Dp___init__impl__ms3zkb(70);
        var tmp_30 = height(tmp_29, tmp$ret$41);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$42 = _Dp___init__impl__ms3zkb(16);
        var tmp_31 = background(clip(tmp_30, RoundedCornerShape(tmp$ret$42)), colors.get_surface_ya87t7_k$());
        var tmp_32;
        if (colors.get_isDark_evw91l_k$()) {
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp_32 = _Dp___init__impl__ms3zkb(1);
        } else {
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp_32 = _Dp___init__impl__ms3zkb(0.5);
        }
        var tmp_33 = tmp_32;
        var tmp_34 = colors.get_border_pp3j8c_k$();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$45 = _Dp___init__impl__ms3zkb(16);
        var tmp_35 = border(tmp_31, tmp_33, tmp_34, RoundedCornerShape(tmp$ret$45));
        sourceInformationMarkerStart($composer_10, 469204314, 'CC(remember):TeamChatScreens.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_1 = !!(($dirty & 14) === 4 | $composer_0.changed_ga7h3f_k$(element_0));
        // Inline function 'kotlin.let' call
        var it_1 = $composer_10.rememberedValue_4dg93v_k$();
        var tmp_36;
        if (invalid_1 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
          var value_1 = Notas13InvitarCompanerosScreen$lambda_1(state, element_0);
          $composer_10.updateRememberedValue_l1wh71_k$(value_1);
          tmp_36 = value_1;
        } else {
          tmp_36 = it_1;
        }
        var tmp0_group_1 = tmp_36;
        sourceInformationMarkerEnd($composer_10);
        var tmp_37 = clickable(tmp_35, VOID, VOID, VOID, VOID, tmp0_group_1);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$50 = _Dp___init__impl__ms3zkb(17);
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var modifier_5 = padding(tmp_37, tmp$ret$50);
        var horizontalArrangement = Arrangement_getInstance().get_SpaceBetween_5p3wqd_k$();
        var verticalAlignment = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
        var $composer_16 = $composer_10;
        if (!((0 & 1) === 0))
          modifier_5 = Companion_getInstance_0();
        if (!((0 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
        if (!((0 & 4) === 0))
          verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
        var measurePolicy_2 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_16, 14 & 432 >> 3 | 112 & 432 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_6 = modifier_5;
        var $composer_17 = $composer_16;
        if (!((0 & 2) === 0))
          modifier_6 = Companion_getInstance_0();
        var compositeKeyHash_2 = get_currentCompositeKeyHashCode($composer_17, 0).hashCode();
        var localMap_2 = $composer_17.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized_2 = materialize($composer_17, modifier_6);
        var tmp0_4 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_18 = $composer_17;
        var tmp_38 = $composer_18.get_applier_bupu8u_k$();
        if (!isInterface(tmp_38, Applier)) {
          invalidApplier();
        }
        $composer_18.startReusableNode_jjgeyp_k$();
        if ($composer_18.get_inserting_25mlsw_k$()) {
          $composer_18.createNode_ahrd54_k$(tmp0_4);
        } else {
          $composer_18.useNode_io5s9l_k$();
        }
        var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_18);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, compositeKeyHash_2, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_2, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        var $composer_19 = $composer_18;
        var tmp0_5 = RowScopeInstance_getInstance();
        var $composer_20 = $composer_19;
        sourceInformationMarkerStart($composer_20, 1215292229, 'C570@21181L599,584@21801L998:TeamChatScreens.kt#bisg3d');
        // Inline function 'androidx.compose.foundation.layout.Column' call
        var modifier_7 = tmp0_5.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0);
        var verticalArrangement_1 = null;
        var horizontalAlignment_1 = null;
        var $composer_21 = $composer_20;
        if (!((6 & 1) === 0))
          modifier_7 = Companion_getInstance_0();
        if (!((6 & 2) === 0))
          verticalArrangement_1 = Arrangement_getInstance().get_Top_18jj1w_k$();
        if (!((6 & 4) === 0))
          horizontalAlignment_1 = Companion_getInstance_1().get_Start_ih4i6x_k$();
        var measurePolicy_3 = columnMeasurePolicy(verticalArrangement_1, horizontalAlignment_1, $composer_21, 14 & 0 >> 3 | 112 & 0 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_8 = modifier_7;
        var $composer_22 = $composer_21;
        if (!((0 & 2) === 0))
          modifier_8 = Companion_getInstance_0();
        var compositeKeyHash_3 = get_currentCompositeKeyHashCode($composer_22, 0).hashCode();
        var localMap_3 = $composer_22.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized_3 = materialize($composer_22, modifier_8);
        var tmp0_6 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_23 = $composer_22;
        var tmp_39 = $composer_23.get_applier_bupu8u_k$();
        if (!isInterface(tmp_39, Applier)) {
          invalidApplier();
        }
        $composer_23.startReusableNode_jjgeyp_k$();
        if ($composer_23.get_inserting_25mlsw_k$()) {
          $composer_23.createNode_ahrd54_k$(tmp0_6);
        } else {
          $composer_23.useNode_io5s9l_k$();
        }
        var $this$ReusableComposeNode_3 = _Updater___init__impl__rbfxm8($composer_23);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_3, measurePolicy_3, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_3, localMap_3, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_3, compositeKeyHash_3, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_3, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_3, materialized_3, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        var $composer_24 = $composer_23;
        ColumnScopeInstance_getInstance();
        var $composer_25 = $composer_24;
        sourceInformationMarkerStart($composer_25, -1870957619, 'C571@21246L241,577@21512L40,578@21577L181:TeamChatScreens.kt#bisg3d');
        var tmp_40 = element_0.get_name_woqyms_k$();
        var tmp_41 = colors.get_textPrimary_mf1tv7_k$();
        var tmp_42 = get_sp(14);
        var tmp_43 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
        var tmp_44 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_45 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_46 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_40, null, tmp_41, null, tmp_42, null, tmp_43, null, tmp_44, null, null, tmp_45, tmp_46, false, 0, 0, null, null, $composer_25, 1597440, 0, 262058);
        var tmp_47 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$63 = _Dp___init__impl__ms3zkb(4);
        Spacer(height(tmp_47, tmp$ret$63), $composer_25, 6);
        var tmp_48 = element_0.get_role_wotsxr_k$();
        var tmp_49 = colors.get_textSecondary_kl22jf_k$();
        var tmp_50 = get_sp(11);
        var tmp_51 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_52 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_53 = _TextOverflow___init__impl__obguoe(0);
        Text(tmp_48, null, tmp_49, null, tmp_50, null, null, null, tmp_51, null, null, tmp_52, tmp_53, false, 0, 0, null, null, $composer_25, 24576, 0, 262122);
        sourceInformationMarkerEnd($composer_25);
        $composer_23.endNode_3m0yfn_k$();
        var tmp_54 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$64 = _Dp___init__impl__ms3zkb(24);
        var tmp_55 = size_0(tmp_54, tmp$ret$64);
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$65 = _Dp___init__impl__ms3zkb(7);
        var tmp_56 = background(clip(tmp_55, RoundedCornerShape(tmp$ret$65)), selected ? colors.get_accentButton_k5y1fw_k$() : colors.get_surface_ya87t7_k$());
        var tmp_57;
        if (selected) {
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp_57 = _Dp___init__impl__ms3zkb(0);
        } else {
          // Inline function 'androidx.compose.ui.unit.dp' call
          tmp_57 = _Dp___init__impl__ms3zkb(1);
        }
        var tmp_58 = tmp_57;
        var tmp_59 = selected ? Companion_getInstance_3().get_Transparent_if5ln4_k$() : colors.get_checkboxBorder_e5x4pr_k$();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$68 = _Dp___init__impl__ms3zkb(7);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier_9 = border(tmp_56, tmp_58, tmp_59, RoundedCornerShape(tmp$ret$68));
        var contentAlignment_0 = Companion_getInstance_1().get_Center_3arb0i_k$();
        var propagateMinConstraints_0 = false;
        var $composer_26 = $composer_20;
        if (!((4 & 1) === 0))
          modifier_9 = Companion_getInstance_0();
        if (!((4 & 2) === 0))
          contentAlignment_0 = Companion_getInstance_1().get_TopStart_o4x792_k$();
        if (!((4 & 4) === 0))
          propagateMinConstraints_0 = false;
        var measurePolicy_4 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_10 = modifier_9;
        var $composer_27 = $composer_26;
        if (!((0 & 2) === 0))
          modifier_10 = Companion_getInstance_0();
        var compositeKeyHash_4 = get_currentCompositeKeyHashCode($composer_27, 0).hashCode();
        var localMap_4 = $composer_27.get_currentCompositionLocalMap_fmcf79_k$();
        var materialized_4 = materialize($composer_27, modifier_10);
        var tmp0_7 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_28 = $composer_27;
        var tmp_60 = $composer_28.get_applier_bupu8u_k$();
        if (!isInterface(tmp_60, Applier)) {
          invalidApplier();
        }
        $composer_28.startReusableNode_jjgeyp_k$();
        if ($composer_28.get_inserting_25mlsw_k$()) {
          $composer_28.createNode_ahrd54_k$(tmp0_7);
        } else {
          $composer_28.useNode_io5s9l_k$();
        }
        var $this$ReusableComposeNode_4 = _Updater___init__impl__rbfxm8($composer_28);
        Updater__set_impl_v7kwss($this$ReusableComposeNode_4, measurePolicy_4, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_4, localMap_4, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_4, compositeKeyHash_4, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_4, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
        Updater__set_impl_v7kwss($this$ReusableComposeNode_4, materialized_4, Companion_getInstance_2().get_SetModifier_6tz580_k$());
        var $composer_29 = $composer_28;
        BoxScopeInstance_getInstance();
        var $composer_30 = $composer_29;
        sourceInformationMarkerStart($composer_30, -1251724321, 'C:TeamChatScreens.kt#bisg3d');
        if (selected) {
          $composer_30.startReplaceGroup_5hh8aj_k$(-1251710868);
          sourceInformation($composer_30, '597@22503L248');
          var tmp_61 = Companion_getInstance_3().get_White_xpp3qf_k$();
          var tmp_62 = get_sp(14);
          var tmp_63 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
          var tmp_64 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_65 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_66 = _TextOverflow___init__impl__obguoe(0);
          Text('\u2713', null, tmp_61, null, tmp_62, null, tmp_63, null, tmp_64, null, null, tmp_65, tmp_66, false, 0, 0, null, null, $composer_30, 1597830, 0, 262058);
          $composer_30.endReplaceGroup_ek144q_k$();
        } else {
          $composer_30.startReplaceGroup_5hh8aj_k$(-1251418724);
          $composer_30.endReplaceGroup_ek144q_k$();
        }
        sourceInformationMarkerEnd($composer_30);
        $composer_28.endNode_3m0yfn_k$();
        sourceInformationMarkerEnd($composer_20);
        $composer_18.endNode_3m0yfn_k$();
        var tmp_67 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$75 = _Dp___init__impl__ms3zkb(12);
        Spacer(height(tmp_67, tmp$ret$75), $composer_10, 6);
      }
      $composer_10.endReplaceGroup_ek144q_k$();
      var tmp_68 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$76 = _Dp___init__impl__ms3zkb(8);
      Spacer(height(tmp_68, tmp$ret$76), $composer_10, 6);
      var tmp_69 = colors.get_textSecondary_kl22jf_k$();
      var tmp_70 = get_sp(11);
      var tmp_71 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_72 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_73 = _TextOverflow___init__impl__obguoe(0);
      Text('Recibir\xE1n una invitaci\xF3n para aceptar la sala.', null, tmp_69, null, tmp_70, null, null, null, tmp_71, null, null, tmp_72, tmp_73, false, 0, 0, null, null, $composer_10, 24582, 0, 262122);
      var tmp_74 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$77 = _Dp___init__impl__ms3zkb(22);
      Spacer(height(tmp_74, tmp$ret$77), $composer_10, 6);
      var tmp_75;
      if (selectedCount === 1) {
        tmp_75 = 'Enviar 1 invitaci\xF3n';
      } else {
        tmp_75 = 'Enviar ' + selectedCount + ' invitaciones';
      }
      var btnLabel = tmp_75;
      sourceInformationMarkerStart($composer_10, 1246173838, 'CC(remember):TeamChatScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_2 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_76;
      if (invalid_2 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_2 = Notas13InvitarCompanerosScreen$lambda_2(state);
        $composer_10.updateRememberedValue_l1wh71_k$(value_2);
        tmp_76 = value_2;
      } else {
        tmp_76 = it_2;
      }
      var tmp1_group = tmp_76;
      sourceInformationMarkerEnd($composer_10);
      var tmp_77 = _Dp___init__impl__ms3zkb(0.0);
      NotasPrimaryButton(btnLabel, tmp1_group, null, tmp_77, _Dp___init__impl__ms3zkb(0.0), $composer_10, 0, 28);
      var tmp_78 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$82 = _Dp___init__impl__ms3zkb(20);
      Spacer(height(tmp_78, tmp$ret$82), $composer_10, 6);
      sourceInformationMarkerEnd($composer_10);
      $composer_8.endNode_3m0yfn_k$();
      NotasModalFooter(null, null, $composer_5, 0, 3);
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Notas13InvitarCompanerosScreen$lambda_3(state, $changed));
    }
  }
  function Notas14AceptarInvitacionScreen(state, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-494938212);
    sourceInformation($composer_0, 'C(Notas14AceptarInvitacionScreen)634@23700L6,636@23712L4748:TeamChatScreens.kt#bisg3d');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(state) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-494938212, $dirty, -1, 'com.notas.agenda.ui.screens.Notas14AceptarInvitacionScreen (TeamChatScreens.kt:633)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = background(fillMaxSize(Companion_getInstance_0()), colors.get_background_8l4942_k$());
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      var tmp0_0 = ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 935738054, 'C641@23835L19,647@24067L50,642@23863L265,653@24238L21,650@24138L4187,761@28423L20,759@28335L119:TeamChatScreens.kt#bisg3d');
      NotasTopStatusBar(null, $composer_5, 0, 1);
      var tmp_0 = NotasIcons_getInstance().get_Bell_wnyy5o_k$();
      sourceInformationMarkerStart($composer_5, -1493832700, 'CC(remember):TeamChatScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = Notas14AceptarInvitacionScreen$lambda(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp0_group = tmp_1;
      sourceInformationMarkerEnd($composer_5);
      NotasHeader('NOTAS', 'Invitaciones', 'Tienes una nueva invitaci\xF3n', tmp_0, null, tmp0_group, null, null, null, $composer_5, 438, 464);
      var tmp_2 = tmp0_0.weight$default_gbkz97_k$(Companion_getInstance_0(), 1.0);
      var tmp_3 = verticalScroll(tmp_2, rememberScrollState(0, $composer_5, 0, 1));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$10 = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = padding(tmp_3, tmp$ret$10);
      var verticalArrangement_0 = null;
      var horizontalAlignment_0 = null;
      var $composer_6 = $composer_5;
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_0 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_0 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement_0, horizontalAlignment_0, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      var tmp0_1 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      var tmp_4 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_4, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_1);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_9 = $composer_8;
      ColumnScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, 279952939, 'C656@24331L40,657@24384L542,673@24940L41,676@25042L2487,739@27543L41,742@27686L35,740@27597L139,744@27749L41,747@27881L44,745@27803L137,749@27953L41,750@28007L254,756@28274L41:TeamChatScreens.kt#bisg3d');
      var tmp_5 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$17 = _Dp___init__impl__ms3zkb(8);
      Spacer(height(tmp_5, tmp$ret$17), $composer_10, 6);
      var tmp_6 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$18 = _Dp___init__impl__ms3zkb(25);
      var tmp_7 = height(tmp_6, tmp$ret$18);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$19 = _Dp___init__impl__ms3zkb(12);
      var tmp_8 = background(clip(tmp_7, RoundedCornerShape(tmp$ret$19)), colors.get_accentContainer_6iiayz_k$());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$20 = _Dp___init__impl__ms3zkb(10);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_3 = padding(tmp_8, tmp$ret$20);
      var contentAlignment = Companion_getInstance_1().get_Center_3arb0i_k$();
      var propagateMinConstraints = false;
      var $composer_11 = $composer_10;
      if (!((4 & 1) === 0))
        modifier_3 = Companion_getInstance_0();
      if (!((4 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((4 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_1 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_12 = $composer_11;
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_0();
      var compositeKeyHash_1 = get_currentCompositeKeyHashCode($composer_12, 0).hashCode();
      var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_1 = materialize($composer_12, modifier_4);
      var tmp0_2 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_13 = $composer_12;
      var tmp_9 = $composer_13.get_applier_bupu8u_k$();
      if (!isInterface(tmp_9, Applier)) {
        invalidApplier();
      }
      $composer_13.startReusableNode_jjgeyp_k$();
      if ($composer_13.get_inserting_25mlsw_k$()) {
        $composer_13.createNode_ahrd54_k$(tmp0_2);
      } else {
        $composer_13.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, compositeKeyHash_1, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_1, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_14 = $composer_13;
      BoxScopeInstance_getInstance();
      var $composer_15 = $composer_14;
      sourceInformationMarkerStart($composer_15, -2142556507, 'C665@24704L208:TeamChatScreens.kt#bisg3d');
      var tmp_10 = colors.get_accentContent_6vke99_k$();
      var tmp_11 = get_sp(10);
      var tmp_12 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_14 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_15 = _TextOverflow___init__impl__obguoe(0);
      Text('RECIBIDA HOY', null, tmp_10, null, tmp_11, null, tmp_12, null, tmp_13, null, null, tmp_14, tmp_15, false, 0, 0, null, null, $composer_15, 1597446, 0, 262058);
      sourceInformationMarkerEnd($composer_15);
      $composer_13.endNode_3m0yfn_k$();
      var tmp_16 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$27 = _Dp___init__impl__ms3zkb(22);
      Spacer(height(tmp_16, tmp$ret$27), $composer_10, 6);
      var tmp_17 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$28 = _Dp___init__impl__ms3zkb(16);
      var tmp_18 = background(clip(tmp_17, RoundedCornerShape(tmp$ret$28)), colors.get_surface_ya87t7_k$());
      var tmp_19;
      if (colors.get_isDark_evw91l_k$()) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_19 = _Dp___init__impl__ms3zkb(1);
      } else {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_19 = _Dp___init__impl__ms3zkb(0.5);
      }
      var tmp_20 = tmp_19;
      var tmp_21 = colors.get_border_pp3j8c_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$31 = _Dp___init__impl__ms3zkb(16);
      var tmp_22 = border(tmp_18, tmp_20, tmp_21, RoundedCornerShape(tmp$ret$31));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$32 = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_5 = padding_1(tmp_22, tmp$ret$32);
      var verticalArrangement_1 = null;
      var horizontalAlignment_1 = null;
      var $composer_16 = $composer_10;
      if (!((6 & 1) === 0))
        modifier_5 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_1 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_1 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_2 = columnMeasurePolicy(verticalArrangement_1, horizontalAlignment_1, $composer_16, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_6 = modifier_5;
      var $composer_17 = $composer_16;
      if (!((0 & 2) === 0))
        modifier_6 = Companion_getInstance_0();
      var compositeKeyHash_2 = get_currentCompositeKeyHashCode($composer_17, 0).hashCode();
      var localMap_2 = $composer_17.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_2 = materialize($composer_17, modifier_6);
      var tmp0_3 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_18 = $composer_17;
      var tmp_23 = $composer_18.get_applier_bupu8u_k$();
      if (!isInterface(tmp_23, Applier)) {
        invalidApplier();
      }
      $composer_18.startReusableNode_jjgeyp_k$();
      if ($composer_18.get_inserting_25mlsw_k$()) {
        $composer_18.createNode_ahrd54_k$(tmp0_3);
      } else {
        $composer_18.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_18);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, compositeKeyHash_2, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_2, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_19 = $composer_18;
      ColumnScopeInstance_getInstance();
      var $composer_20 = $composer_19;
      sourceInformationMarkerStart($composer_20, -326587176, 'C688@25518L534,702@26069L41,703@26127L255,710@26399L41,711@26457L175,716@26649L41,717@26707L246,723@26970L41,724@27028L191,730@27236L41,731@27294L221:TeamChatScreens.kt#bisg3d');
      var tmp_24 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$39 = _Dp___init__impl__ms3zkb(58);
      var tmp_25 = size_0(tmp_24, tmp$ret$39);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$40 = _Dp___init__impl__ms3zkb(18);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_7 = background(clip(tmp_25, RoundedCornerShape(tmp$ret$40)), colors.get_successContainer_dqfg6m_k$());
      var contentAlignment_0 = Companion_getInstance_1().get_Center_3arb0i_k$();
      var propagateMinConstraints_0 = false;
      var $composer_21 = $composer_20;
      if (!((4 & 1) === 0))
        modifier_7 = Companion_getInstance_0();
      if (!((4 & 2) === 0))
        contentAlignment_0 = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((4 & 4) === 0))
        propagateMinConstraints_0 = false;
      var measurePolicy_3 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_8 = modifier_7;
      var $composer_22 = $composer_21;
      if (!((0 & 2) === 0))
        modifier_8 = Companion_getInstance_0();
      var compositeKeyHash_3 = get_currentCompositeKeyHashCode($composer_22, 0).hashCode();
      var localMap_3 = $composer_22.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_3 = materialize($composer_22, modifier_8);
      var tmp0_4 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_23 = $composer_22;
      var tmp_26 = $composer_23.get_applier_bupu8u_k$();
      if (!isInterface(tmp_26, Applier)) {
        invalidApplier();
      }
      $composer_23.startReusableNode_jjgeyp_k$();
      if ($composer_23.get_inserting_25mlsw_k$()) {
        $composer_23.createNode_ahrd54_k$(tmp0_4);
      } else {
        $composer_23.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_3 = _Updater___init__impl__rbfxm8($composer_23);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, measurePolicy_3, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, localMap_3, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, compositeKeyHash_3, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_3, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, materialized_3, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_24 = $composer_23;
      BoxScopeInstance_getInstance();
      var $composer_25 = $composer_24;
      sourceInformationMarkerStart($composer_25, 1477461541, 'C695@25816L218:TeamChatScreens.kt#bisg3d');
      var tmp_27 = colors.get_successContent_tyisdi_k$();
      var tmp_28 = get_sp(28);
      var tmp_29 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_30 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_31 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_32 = _TextOverflow___init__impl__obguoe(0);
      Text('#', null, tmp_27, null, tmp_28, null, tmp_29, null, tmp_30, null, null, tmp_31, tmp_32, false, 0, 0, null, null, $composer_25, 1597446, 0, 262058);
      sourceInformationMarkerEnd($composer_25);
      $composer_23.endNode_3m0yfn_k$();
      var tmp_33 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$47 = _Dp___init__impl__ms3zkb(22);
      Spacer(height(tmp_33, tmp$ret$47), $composer_20, 6);
      var tmp_34 = colors.get_textPrimary_mf1tv7_k$();
      var tmp_35 = get_sp(27);
      var tmp_36 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_37 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_38 = get_sp(32);
      var tmp_39 = _TextOverflow___init__impl__obguoe(0);
      Text('Laboratorio\nde ideas', null, tmp_34, null, tmp_35, null, tmp_36, null, tmp_37, null, null, tmp_38, tmp_39, false, 0, 0, null, null, $composer_20, 1597446, 48, 260010);
      var tmp_40 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$48 = _Dp___init__impl__ms3zkb(10);
      Spacer(height(tmp_40, tmp$ret$48), $composer_20, 6);
      var tmp_41 = colors.get_textSecondary_kl22jf_k$();
      var tmp_42 = get_sp(13);
      var tmp_43 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_44 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_45 = _TextOverflow___init__impl__obguoe(0);
      Text('Elena Torres te invita a su sala.', null, tmp_41, null, tmp_42, null, null, null, tmp_43, null, null, tmp_44, tmp_45, false, 0, 0, null, null, $composer_20, 24582, 0, 262122);
      var tmp_46 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$49 = _Dp___init__impl__ms3zkb(16);
      Spacer(height(tmp_46, tmp$ret$49), $composer_20, 6);
      var tmp_47 = colors.get_textPrimary_mf1tv7_k$();
      var tmp_48 = get_sp(13);
      var tmp_49 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_50 = get_sp(19);
      var tmp_51 = _TextOverflow___init__impl__obguoe(0);
      Text('Un lugar para compartir propuestas,\ninspiraci\xF3n y pr\xF3ximos retos.', null, tmp_47, null, tmp_48, null, null, null, tmp_49, null, null, tmp_50, tmp_51, false, 0, 0, null, null, $composer_20, 24582, 48, 260074);
      var tmp_52 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$50 = _Dp___init__impl__ms3zkb(22);
      Spacer(height(tmp_52, tmp$ret$50), $composer_20, 6);
      var tmp_53 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$51 = _Dp___init__impl__ms3zkb(1);
      Box(background(height(tmp_53, tmp$ret$51), colors.get_border_pp3j8c_k$()), $composer_20, 0);
      var tmp_54 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$52 = _Dp___init__impl__ms3zkb(16);
      Spacer(height(tmp_54, tmp$ret$52), $composer_20, 6);
      var tmp_55 = colors.get_successContent_tyisdi_k$();
      var tmp_56 = get_sp(11);
      var tmp_57 = Companion_getInstance_4().get_Medium_1fiba6_k$();
      var tmp_58 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_59 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_60 = _TextOverflow___init__impl__obguoe(0);
      Text('5 compa\xF1eros ya participan', null, tmp_55, null, tmp_56, null, tmp_57, null, tmp_58, null, null, tmp_59, tmp_60, false, 0, 0, null, null, $composer_20, 1597446, 0, 262058);
      sourceInformationMarkerEnd($composer_20);
      $composer_18.endNode_3m0yfn_k$();
      var tmp_61 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$53 = _Dp___init__impl__ms3zkb(24);
      Spacer(height(tmp_61, tmp$ret$53), $composer_10, 6);
      sourceInformationMarkerStart($composer_10, 147681483, 'CC(remember):TeamChatScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_0 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_62;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = Notas14AceptarInvitacionScreen$lambda_0(state);
        $composer_10.updateRememberedValue_l1wh71_k$(value_0);
        tmp_62 = value_0;
      } else {
        tmp_62 = it_0;
      }
      var tmp0_group_0 = tmp_62;
      sourceInformationMarkerEnd($composer_10);
      var tmp_63 = _Dp___init__impl__ms3zkb(0.0);
      NotasPrimaryButton('Aceptar y entrar', tmp0_group_0, null, tmp_63, _Dp___init__impl__ms3zkb(0.0), $composer_10, 6, 28);
      var tmp_64 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$58 = _Dp___init__impl__ms3zkb(14);
      Spacer(height(tmp_64, tmp$ret$58), $composer_10, 6);
      sourceInformationMarkerStart($composer_10, 147687732, 'CC(remember):TeamChatScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_1 = $composer_10.rememberedValue_4dg93v_k$();
      var tmp_65;
      if (invalid_1 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = Notas14AceptarInvitacionScreen$lambda_1(state);
        $composer_10.updateRememberedValue_l1wh71_k$(value_1);
        tmp_65 = value_1;
      } else {
        tmp_65 = it_1;
      }
      var tmp1_group = tmp_65;
      sourceInformationMarkerEnd($composer_10);
      var tmp_66 = _Dp___init__impl__ms3zkb(0.0);
      NotasSoftButton('Ahora no', tmp1_group, null, tmp_66, _Dp___init__impl__ms3zkb(0.0), $composer_10, 6, 28);
      var tmp_67 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$63 = _Dp___init__impl__ms3zkb(20);
      Spacer(height(tmp_67, tmp$ret$63), $composer_10, 6);
      var tmp_68 = colors.get_textSecondary_kl22jf_k$();
      var tmp_69 = get_sp(11);
      var tmp_70 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_71 = get_sp(16);
      var tmp_72 = _TextOverflow___init__impl__obguoe(0);
      Text('El historial estar\xE1 disponible cuando entres.\nLas salas y los mensajes no se pueden borrar.', null, tmp_68, null, tmp_69, null, null, null, tmp_70, null, null, tmp_71, tmp_72, false, 0, 0, null, null, $composer_10, 24582, 48, 260074);
      var tmp_73 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$64 = _Dp___init__impl__ms3zkb(16);
      Spacer(height(tmp_73, tmp$ret$64), $composer_10, 6);
      sourceInformationMarkerEnd($composer_10);
      $composer_8.endNode_3m0yfn_k$();
      var tmp_74 = NotasTab_TEAM_getInstance();
      sourceInformationMarkerStart($composer_5, -1493693338, 'CC(remember):TeamChatScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_2 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_75;
      if (invalid_2 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_2 = NotasAppState$navigateToTab$ref_5(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value_2);
        tmp_75 = value_2;
      } else {
        tmp_75 = it_2;
      }
      var tmp1_group_0 = tmp_75;
      sourceInformationMarkerEnd($composer_5);
      NotasBottomNavigation(tmp_74, tmp1_group_0, null, $composer_5, 6, 4);
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Notas14AceptarInvitacionScreen$lambda_2(state, $changed));
    }
  }
  function Notas15ConversacionScreen(state, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1795890677);
    sourceInformation($composer_0, 'C(Notas15ConversacionScreen)768@28558L6,770@28623L40,772@28669L4979:TeamChatScreens.kt#bisg3d');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(state) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1795890677, $dirty, -1, 'com.notas.agenda.ui.screens.Notas15ConversacionScreen (TeamChatScreens.kt:767)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      var room = state.activeRoom_xsvym9_k$();
      var tmp0_remember$arg$0 = room.get_id_kntnx8_k$();
      sourceInformationMarkerStart($composer_0, -725907651, 'CC(remember):TeamChatScreens.kt#9igjgp');
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changed_ga7h3f_k$(tmp0_remember$arg$0);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value = mutableStateOf('');
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp1_group = tmp;
      sourceInformationMarkerEnd($composer_0);
      var messageDraft$delegate = tmp1_group;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = background(fillMaxSize(Companion_getInstance_0()), colors.get_background_8l4942_k$());
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_1 = $composer_0;
      if (!((6 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp_0 = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp_0, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0_0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      var tmp0_1 = ColumnScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 54258674, 'C777@28792L19,783@29053L50,785@29163L44,778@28820L398,791@29328L21,788@29228L2147,848@31424L2089,904@33611L20,902@33523L119:TeamChatScreens.kt#bisg3d');
      NotasTopStatusBar(null, $composer_5, 0, 1);
      var tmp_1 = room.get_name_woqyms_k$();
      var tmp_2 = '' + room.get_memberCount_yocst0_k$() + ' compa\xF1eros \xB7 ' + room.get_onlineCount_l52c5v_k$() + ' en l\xEDnea';
      var tmp_3 = NotasIcons_getInstance().get_Bell_wnyy5o_k$();
      sourceInformationMarkerStart($composer_5, 1387227153, 'CC(remember):TeamChatScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_0 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (invalid_0 || it_0 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_0 = Notas15ConversacionScreen$lambda_1(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp0_group = tmp_4;
      sourceInformationMarkerEnd($composer_5);
      sourceInformationMarkerStart($composer_5, 1387230667, 'CC(remember):TeamChatScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_1 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid_1 || it_1 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_1 = Notas15ConversacionScreen$lambda_2(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = it_1;
      }
      var tmp1_group_0 = tmp_5;
      sourceInformationMarkerEnd($composer_5);
      NotasHeader('NOTAS', tmp_1, tmp_2, tmp_3, null, tmp0_group, 'Salas', tmp1_group_0, null, $composer_5, 1572870, 272);
      var tmp_6 = tmp0_1.weight$default_gbkz97_k$(Companion_getInstance_0(), 1.0);
      var tmp_7 = verticalScroll(tmp_6, rememberScrollState(0, $composer_5, 0, 1));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$18 = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = padding(tmp_7, tmp$ret$18);
      var verticalArrangement_0 = null;
      var horizontalAlignment_0 = null;
      var $composer_6 = $composer_5;
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement_0 = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment_0 = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement_0, horizontalAlignment_0, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      var tmp0_2 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      var tmp_8 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_8, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_2);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_9 = $composer_8;
      ColumnScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, -713423742, 'C794@29421L40,797@29521L905,821@30440L41,822@30494L291,830@30798L41,831@30852L237,838@31102L41,844@31325L40:TeamChatScreens.kt#bisg3d');
      var tmp_9 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$25 = _Dp___init__impl__ms3zkb(4);
      Spacer(height(tmp_9, tmp$ret$25), $composer_10, 6);
      var tmp_10 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$26 = _Dp___init__impl__ms3zkb(54);
      var tmp_11 = height(tmp_10, tmp$ret$26);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$27 = _Dp___init__impl__ms3zkb(14);
      var tmp_12 = background(clip(tmp_11, RoundedCornerShape(tmp$ret$27)), colors.get_accentContainer_6iiayz_k$());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$28 = _Dp___init__impl__ms3zkb(14);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_3 = padding(tmp_12, tmp$ret$28);
      var horizontalArrangement = null;
      var verticalAlignment = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_11 = $composer_10;
      if (!((2 & 1) === 0))
        modifier_3 = Companion_getInstance_0();
      if (!((2 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((2 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_1 = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_11, 14 & 384 >> 3 | 112 & 384 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_4 = modifier_3;
      var $composer_12 = $composer_11;
      if (!((0 & 2) === 0))
        modifier_4 = Companion_getInstance_0();
      var compositeKeyHash_1 = get_currentCompositeKeyHashCode($composer_12, 0).hashCode();
      var localMap_1 = $composer_12.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_1 = materialize($composer_12, modifier_4);
      var tmp0_3 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_13 = $composer_12;
      var tmp_13 = $composer_13.get_applier_bupu8u_k$();
      if (!isInterface(tmp_13, Applier)) {
        invalidApplier();
      }
      $composer_13.startReusableNode_jjgeyp_k$();
      if ($composer_13.get_inserting_25mlsw_k$()) {
        $composer_13.createNode_ahrd54_k$(tmp0_3);
      } else {
        $composer_13.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_1 = _Updater___init__impl__rbfxm8($composer_13);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, measurePolicy_1, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, localMap_1, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, compositeKeyHash_1, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_1, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_1, materialized_1, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_14 = $composer_13;
      RowScopeInstance_getInstance();
      var $composer_15 = $composer_14;
      sourceInformationMarkerStart($composer_15, 1123044210, 'C806@29888L223,812@30128L40,813@30185L227:TeamChatScreens.kt#bisg3d');
      var tmp0_imageVector = NotasIcons_getInstance().get_Lock_wo5j84_k$();
      var tmp1_tint = colors.get_accentContent_6vke99_k$();
      var tmp_14 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$35 = _Dp___init__impl__ms3zkb(19);
      var tmp2_modifier = size_0(tmp_14, tmp$ret$35);
      Icon(tmp0_imageVector, null, tmp2_modifier, tmp1_tint, $composer_15, 432, 0);
      var tmp_15 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$36 = _Dp___init__impl__ms3zkb(10);
      Spacer(width(tmp_15, tmp$ret$36), $composer_15, 6);
      var tmp_16 = colors.get_accentContent_6vke99_k$();
      var tmp_17 = get_sp(11);
      var tmp_18 = Companion_getInstance_4().get_Medium_1fiba6_k$();
      var tmp_19 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_20 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_21 = _TextOverflow___init__impl__obguoe(0);
      Text('Los mensajes no se pueden borrar.', null, tmp_16, null, tmp_17, null, tmp_18, null, tmp_19, null, null, tmp_20, tmp_21, false, 0, 0, null, null, $composer_15, 1597446, 0, 262058);
      sourceInformationMarkerEnd($composer_15);
      $composer_13.endNode_3m0yfn_k$();
      var tmp_22 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$37 = _Dp___init__impl__ms3zkb(20);
      Spacer(height(tmp_22, tmp$ret$37), $composer_10, 6);
      var tmp0_color = colors.get_textSecondary_kl22jf_k$();
      var tmp1_fontSize = get_sp(9);
      var tmp2_fontWeight = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp3_textAlign = Companion_getInstance_10().get_Center_fp5t1o_k$();
      var tmp4_modifier = fillMaxWidth(Companion_getInstance_0());
      var tmp_23 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_24 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_25 = _TextOverflow___init__impl__obguoe(0);
      Text('HOY \xB7 16 NOVIEMBRE', tmp4_modifier, tmp0_color, null, tmp1_fontSize, null, tmp2_fontWeight, null, tmp_23, null, tmp3_textAlign, tmp_24, tmp_25, false, 0, 0, null, null, $composer_10, 1597494, 0, 261032);
      var tmp_26 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$38 = _Dp___init__impl__ms3zkb(14);
      Spacer(height(tmp_26, tmp$ret$38), $composer_10, 6);
      var tmp5_text = room.get_joinNotice_2iq9m3_k$();
      var tmp6_color = colors.get_textSecondary_kl22jf_k$();
      var tmp7_fontSize = get_sp(10);
      var tmp8_textAlign = Companion_getInstance_10().get_Center_fp5t1o_k$();
      var tmp9_modifier = fillMaxWidth(Companion_getInstance_0());
      var tmp_27 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_28 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_29 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp5_text, tmp9_modifier, tmp6_color, null, tmp7_fontSize, null, null, null, tmp_27, null, tmp8_textAlign, tmp_28, tmp_29, false, 0, 0, null, null, $composer_10, 24624, 0, 261096);
      var tmp_30 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$39 = _Dp___init__impl__ms3zkb(20);
      Spacer(height(tmp_30, tmp$ret$39), $composer_10, 6);
      $composer_10.startReplaceGroup_5hh8aj_k$(-1962622122);
      sourceInformation($composer_10, '*841@31208L32,842@31257L41');
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = room.get_messages_vl21at_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        MessageBubble(element, $composer_10, 0);
        var tmp_31 = Companion_getInstance_0();
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$42 = _Dp___init__impl__ms3zkb(16);
        Spacer(height(tmp_31, tmp$ret$42), $composer_10, 6);
      }
      $composer_10.endReplaceGroup_ek144q_k$();
      var tmp_32 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$43 = _Dp___init__impl__ms3zkb(8);
      Spacer(height(tmp_32, tmp$ret$43), $composer_10, 6);
      sourceInformationMarkerEnd($composer_10);
      $composer_8.endNode_3m0yfn_k$();
      var tmp_33 = fillMaxWidth(Companion_getInstance_0());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_34 = _Dp___init__impl__ms3zkb(24);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$45 = _Dp___init__impl__ms3zkb(10);
      var tmp_35 = padding(tmp_33, tmp_34, tmp$ret$45);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$46 = _Dp___init__impl__ms3zkb(58);
      var tmp_36 = height(tmp_35, tmp$ret$46);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$47 = _Dp___init__impl__ms3zkb(17);
      var tmp_37 = background(clip(tmp_36, RoundedCornerShape(tmp$ret$47)), colors.get_surface_ya87t7_k$());
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_38 = _Dp___init__impl__ms3zkb(1);
      var tmp_39 = colors.get_border_pp3j8c_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$49 = _Dp___init__impl__ms3zkb(17);
      var tmp_40 = border(tmp_37, tmp_38, tmp_39, RoundedCornerShape(tmp$ret$49));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_41 = _Dp___init__impl__ms3zkb(15);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$51 = _Dp___init__impl__ms3zkb(9);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier_5 = padding_0(tmp_40, tmp_41, VOID, tmp$ret$51);
      var horizontalArrangement_0 = null;
      var verticalAlignment_0 = Companion_getInstance_1().get_CenterVertically_dmkbbz_k$();
      var $composer_16 = $composer_5;
      if (!((2 & 1) === 0))
        modifier_5 = Companion_getInstance_0();
      if (!((2 & 2) === 0))
        horizontalArrangement_0 = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((2 & 4) === 0))
        verticalAlignment_0 = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy_2 = rowMeasurePolicy(horizontalArrangement_0, verticalAlignment_0, $composer_16, 14 & 384 >> 3 | 112 & 384 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_6 = modifier_5;
      var $composer_17 = $composer_16;
      if (!((0 & 2) === 0))
        modifier_6 = Companion_getInstance_0();
      var compositeKeyHash_2 = get_currentCompositeKeyHashCode($composer_17, 0).hashCode();
      var localMap_2 = $composer_17.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_2 = materialize($composer_17, modifier_6);
      var tmp0_4 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_18 = $composer_17;
      var tmp_42 = $composer_18.get_applier_bupu8u_k$();
      if (!isInterface(tmp_42, Applier)) {
        invalidApplier();
      }
      $composer_18.startReusableNode_jjgeyp_k$();
      if ($composer_18.get_inserting_25mlsw_k$()) {
        $composer_18.createNode_ahrd54_k$(tmp0_4);
      } else {
        $composer_18.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_2 = _Updater___init__impl__rbfxm8($composer_18);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, measurePolicy_2, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, localMap_2, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, compositeKeyHash_2, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_2, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_2, materialized_2, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_19 = $composer_18;
      var tmp0_5 = RowScopeInstance_getInstance();
      var $composer_20 = $composer_19;
      sourceInformationMarkerStart($composer_20, 1640005882, 'C859@31889L787,879@32689L39,885@32952L224,880@32741L762:TeamChatScreens.kt#bisg3d');
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_7 = tmp0_5.weight$default_yewrvp_k$(Companion_getInstance_0(), 1.0);
      var contentAlignment = null;
      var propagateMinConstraints = false;
      var $composer_21 = $composer_20;
      if (!((6 & 1) === 0))
        modifier_7 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        contentAlignment = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((6 & 4) === 0))
        propagateMinConstraints = false;
      var measurePolicy_3 = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_8 = modifier_7;
      var $composer_22 = $composer_21;
      if (!((0 & 2) === 0))
        modifier_8 = Companion_getInstance_0();
      var compositeKeyHash_3 = get_currentCompositeKeyHashCode($composer_22, 0).hashCode();
      var localMap_3 = $composer_22.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_3 = materialize($composer_22, modifier_8);
      var tmp0_6 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_23 = $composer_22;
      var tmp_43 = $composer_23.get_applier_bupu8u_k$();
      if (!isInterface(tmp_43, Applier)) {
        invalidApplier();
      }
      $composer_23.startReusableNode_jjgeyp_k$();
      if ($composer_23.get_inserting_25mlsw_k$()) {
        $composer_23.createNode_ahrd54_k$(tmp0_6);
      } else {
        $composer_23.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_3 = _Updater___init__impl__rbfxm8($composer_23);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, measurePolicy_3, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, localMap_3, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, compositeKeyHash_3, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_3, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_3, materialized_3, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_24 = $composer_23;
      BoxScopeInstance_getInstance();
      var $composer_25 = $composer_24;
      sourceInformationMarkerStart($composer_25, 1198987807, 'C869@32300L21,867@32206L456:TeamChatScreens.kt#bisg3d');
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = Notas15ConversacionScreen$lambda(messageDraft$delegate);
      if (charSequenceLength(this_0) === 0) {
        $composer_25.startReplaceGroup_5hh8aj_k$(1199000051);
        sourceInformation($composer_25, '861@31993L178');
        var tmp_44 = colors.get_textSecondary_kl22jf_k$();
        var tmp_45 = get_sp(12);
        var tmp_46 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_47 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_48 = _TextOverflow___init__impl__obguoe(0);
        Text('Escribe a tu equipo\u2026', null, tmp_44, null, tmp_45, null, null, null, tmp_46, null, null, tmp_47, tmp_48, false, 0, 0, null, null, $composer_25, 24582, 0, 262122);
        $composer_25.endReplaceGroup_ek144q_k$();
      } else {
        $composer_25.startReplaceGroup_5hh8aj_k$(1199209549);
        $composer_25.endReplaceGroup_ek144q_k$();
      }
      var tmp0_value = Notas15ConversacionScreen$lambda(messageDraft$delegate);
      var tmp1_textStyle = TextStyle_init_$Create$(colors.get_textPrimary_mf1tv7_k$(), get_sp(13));
      var tmp2_cursorBrush = new SolidColor(colors.get_accentButton_k5y1fw_k$());
      var tmp3_modifier = fillMaxWidth(Companion_getInstance_0());
      sourceInformationMarkerStart($composer_25, -2039522230, 'CC(remember):TeamChatScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_2 = $composer_25.changed_ga7h3f_k$(messageDraft$delegate);
      // Inline function 'kotlin.let' call
      var it_2 = $composer_25.rememberedValue_4dg93v_k$();
      var tmp_49;
      if (invalid_2 || it_2 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_2 = Notas15ConversacionScreen$lambda_3(messageDraft$delegate);
        $composer_25.updateRememberedValue_l1wh71_k$(value_2);
        tmp_49 = value_2;
      } else {
        tmp_49 = it_2;
      }
      var tmp0_group_0 = tmp_49;
      sourceInformationMarkerEnd($composer_25);
      BasicTextField(tmp0_value, tmp0_group_0, tmp3_modifier, false, false, tmp1_textStyle, null, null, true, 0, 0, null, null, null, tmp2_cursorBrush, null, $composer_25, 100663680, 0, 48856);
      sourceInformationMarkerEnd($composer_25);
      $composer_23.endNode_3m0yfn_k$();
      var tmp_50 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$69 = _Dp___init__impl__ms3zkb(8);
      Spacer(width(tmp_50, tmp$ret$69), $composer_20, 6);
      var tmp_51 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$70 = _Dp___init__impl__ms3zkb(40);
      var tmp_52 = size_0(tmp_51, tmp$ret$70);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$71 = _Dp___init__impl__ms3zkb(13);
      var tmp_53 = background(clip(tmp_52, RoundedCornerShape(tmp$ret$71)), colors.get_accentButton_k5y1fw_k$());
      sourceInformationMarkerStart($composer_20, 1715504027, 'CC(remember):TeamChatScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_3 = !!($composer_0.changed_ga7h3f_k$(messageDraft$delegate) | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      var it_3 = $composer_20.rememberedValue_4dg93v_k$();
      var tmp_54;
      if (invalid_3 || it_3 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_3 = Notas15ConversacionScreen$lambda_4(state, messageDraft$delegate);
        $composer_20.updateRememberedValue_l1wh71_k$(value_3);
        tmp_54 = value_3;
      } else {
        tmp_54 = it_3;
      }
      var tmp0_group_1 = tmp_54;
      sourceInformationMarkerEnd($composer_20);
      // Inline function 'androidx.compose.foundation.layout.Box' call
      var modifier_9 = clickable(tmp_53, VOID, VOID, VOID, VOID, tmp0_group_1);
      var contentAlignment_0 = Companion_getInstance_1().get_Center_3arb0i_k$();
      var propagateMinConstraints_0 = false;
      var $composer_26 = $composer_20;
      if (!((4 & 1) === 0))
        modifier_9 = Companion_getInstance_0();
      if (!((4 & 2) === 0))
        contentAlignment_0 = Companion_getInstance_1().get_TopStart_o4x792_k$();
      if (!((4 & 4) === 0))
        propagateMinConstraints_0 = false;
      var measurePolicy_4 = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_10 = modifier_9;
      var $composer_27 = $composer_26;
      if (!((0 & 2) === 0))
        modifier_10 = Companion_getInstance_0();
      var compositeKeyHash_4 = get_currentCompositeKeyHashCode($composer_27, 0).hashCode();
      var localMap_4 = $composer_27.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_4 = materialize($composer_27, modifier_10);
      var tmp0_7 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_28 = $composer_27;
      var tmp_55 = $composer_28.get_applier_bupu8u_k$();
      if (!isInterface(tmp_55, Applier)) {
        invalidApplier();
      }
      $composer_28.startReusableNode_jjgeyp_k$();
      if ($composer_28.get_inserting_25mlsw_k$()) {
        $composer_28.createNode_ahrd54_k$(tmp0_7);
      } else {
        $composer_28.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_4 = _Updater___init__impl__rbfxm8($composer_28);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, measurePolicy_4, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, localMap_4, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, compositeKeyHash_4, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_4, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_4, materialized_4, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_29 = $composer_28;
      BoxScopeInstance_getInstance();
      var $composer_30 = $composer_29;
      sourceInformationMarkerStart($composer_30, 1299034147, 'C893@33263L226:TeamChatScreens.kt#bisg3d');
      var tmp0_imageVector_0 = NotasIcons_getInstance().get_Send_wo9sz5_k$();
      var tmp1_tint_0 = Companion_getInstance_3().get_White_xpp3qf_k$();
      var tmp_56 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$82 = _Dp___init__impl__ms3zkb(20);
      var tmp2_modifier_0 = size_0(tmp_56, tmp$ret$82);
      Icon(tmp0_imageVector_0, 'Enviar mensaje', tmp2_modifier_0, tmp1_tint_0, $composer_30, 3504, 0);
      sourceInformationMarkerEnd($composer_30);
      $composer_28.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_20);
      $composer_18.endNode_3m0yfn_k$();
      var tmp_57 = NotasTab_TEAM_getInstance();
      sourceInformationMarkerStart($composer_5, 1387372979, 'CC(remember):TeamChatScreens.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_4 = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      var it_4 = $composer_5.rememberedValue_4dg93v_k$();
      var tmp_58;
      if (invalid_4 || it_4 === Companion_getInstance().get_Empty_i9b85g_k$()) {
        var value_4 = NotasAppState$navigateToTab$ref_6(state);
        $composer_5.updateRememberedValue_l1wh71_k$(value_4);
        tmp_58 = value_4;
      } else {
        tmp_58 = it_4;
      }
      var tmp2_group = tmp_58;
      sourceInformationMarkerEnd($composer_5);
      NotasBottomNavigation(tmp_57, tmp2_group, null, $composer_5, 6, 4);
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(Notas15ConversacionScreen$lambda_5(state, $changed));
    }
  }
  function MessageBubble(message, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-918457903);
    sourceInformation($composer_0, 'C(MessageBubble)911@33742L6,912@33753L1602:TeamChatScreens.kt#bisg3d');
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(message) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-918457903, $dirty, -1, 'com.notas.agenda.ui.screens.MessageBubble (TeamChatScreens.kt:910)');
      }
      var colors = NotasTheme_getInstance().get_colors_rimeqo_k$($composer_0, 6);
      // Inline function 'androidx.compose.foundation.layout.Row' call
      var modifier = fillMaxWidth(Companion_getInstance_0());
      var horizontalArrangement = message.get_isOutgoing_w9tjgh_k$() ? Arrangement_getInstance().get_End_18ju7i_k$() : Arrangement_getInstance().get_Start_ih4i6x_k$();
      var verticalAlignment = null;
      var $composer_1 = $composer_0;
      if (!((4 & 1) === 0))
        modifier = Companion_getInstance_0();
      if (!((4 & 2) === 0))
        horizontalArrangement = Arrangement_getInstance().get_Start_ih4i6x_k$();
      if (!((4 & 4) === 0))
        verticalAlignment = Companion_getInstance_1().get_Top_18jj1w_k$();
      var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 6 >> 3 | 112 & 6 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jjgeyp_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_ahrd54_k$(tmp0);
      } else {
        $composer_3.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_4 = $composer_3;
      RowScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 259259259, 'C916@33914L1435:TeamChatScreens.kt#bisg3d');
      var tmp_0 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$6 = _Dp___init__impl__ms3zkb(286);
      var tmp_1 = widthIn(tmp_0, VOID, tmp$ret$6);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$7 = _Dp___init__impl__ms3zkb(17);
      var tmp_2 = background(clip(tmp_1, RoundedCornerShape(tmp$ret$7)), message.get_isOutgoing_w9tjgh_k$() ? colors.get_accentButton_k5y1fw_k$() : colors.get_surface_ya87t7_k$());
      var tmp_3;
      if (message.get_isOutgoing_w9tjgh_k$() || !colors.get_isDark_evw91l_k$()) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_3 = _Dp___init__impl__ms3zkb(0);
      } else {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_3 = _Dp___init__impl__ms3zkb(1);
      }
      var tmp_4 = tmp_3;
      var tmp_5 = colors.get_border_pp3j8c_k$();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$10 = _Dp___init__impl__ms3zkb(17);
      var tmp_6 = border(tmp_2, tmp_4, tmp_5, RoundedCornerShape(tmp$ret$10));
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp_7 = _Dp___init__impl__ms3zkb(16);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$12 = _Dp___init__impl__ms3zkb(13);
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier_1 = padding(tmp_6, tmp_7, tmp$ret$12);
      var verticalArrangement = null;
      var horizontalAlignment = null;
      var $composer_6 = $composer_5;
      if (!((6 & 1) === 0))
        modifier_1 = Companion_getInstance_0();
      if (!((6 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().get_Top_18jj1w_k$();
      if (!((6 & 4) === 0))
        horizontalAlignment = Companion_getInstance_1().get_Start_ih4i6x_k$();
      var measurePolicy_0 = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_2 = modifier_1;
      var $composer_7 = $composer_6;
      if (!((0 & 2) === 0))
        modifier_2 = Companion_getInstance_0();
      var compositeKeyHash_0 = get_currentCompositeKeyHashCode($composer_7, 0).hashCode();
      var localMap_0 = $composer_7.get_currentCompositionLocalMap_fmcf79_k$();
      var materialized_0 = materialize($composer_7, modifier_2);
      var tmp0_0 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_8 = $composer_7;
      var tmp_8 = $composer_8.get_applier_bupu8u_k$();
      if (!isInterface(tmp_8, Applier)) {
        invalidApplier();
      }
      $composer_8.startReusableNode_jjgeyp_k$();
      if ($composer_8.get_inserting_25mlsw_k$()) {
        $composer_8.createNode_ahrd54_k$(tmp0_0);
      } else {
        $composer_8.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, compositeKeyHash_0, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode_0, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode_0, materialized_0, Companion_getInstance_2().get_SetModifier_6tz580_k$());
      var $composer_9 = $composer_8;
      var tmp0_1 = ColumnScopeInstance_getInstance();
      var $composer_10 = $composer_9;
      sourceInformationMarkerStart($composer_10, -164837165, 'C928@34450L240,934@34703L40,935@34756L211,941@34980L41,942@35034L305:TeamChatScreens.kt#bisg3d');
      var tmp_9 = message.get_sender_jfe81q_k$();
      var tmp_10 = message.get_isOutgoing_w9tjgh_k$() ? colors.get_outgoingSubtext_x20erj_k$() : colors.get_accentContent_6vke99_k$();
      var tmp_11 = get_sp(10);
      var tmp_12 = Companion_getInstance_4().get_SemiBold_aid1c4_k$();
      var tmp_13 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_14 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_15 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp_9, null, tmp_10, null, tmp_11, null, tmp_12, null, tmp_13, null, null, tmp_14, tmp_15, false, 0, 0, null, null, $composer_10, 1597440, 0, 262058);
      var tmp_16 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$19 = _Dp___init__impl__ms3zkb(6);
      Spacer(height(tmp_16, tmp$ret$19), $composer_10, 6);
      var tmp_17 = message.get_body_wojkyz_k$();
      var tmp_18 = message.get_isOutgoing_w9tjgh_k$() ? Companion_getInstance_3().get_White_xpp3qf_k$() : colors.get_textPrimary_mf1tv7_k$();
      var tmp_19 = get_sp(13);
      var tmp_20 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_21 = get_sp(18);
      var tmp_22 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp_17, null, tmp_18, null, tmp_19, null, null, null, tmp_20, null, null, tmp_21, tmp_22, false, 0, 0, null, null, $composer_10, 24576, 48, 260074);
      var tmp_23 = Companion_getInstance_0();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$20 = _Dp___init__impl__ms3zkb(10);
      Spacer(height(tmp_23, tmp$ret$20), $composer_10, 6);
      var tmp0_elvis_lhs = message.get_statusText_g2lgzc_k$();
      var tmp1_text = tmp0_elvis_lhs == null ? message.get_time_wouyhi_k$() : tmp0_elvis_lhs;
      var tmp2_color = message.get_isOutgoing_w9tjgh_k$() ? colors.get_outgoingSubtext_x20erj_k$() : colors.get_textSecondary_kl22jf_k$();
      var tmp3_fontSize = get_sp(9);
      var tmp4_modifier = message.get_isOutgoing_w9tjgh_k$() ? tmp0_1.align_92hj17_k$(Companion_getInstance_0(), Companion_getInstance_1().get_End_18ju7i_k$()) : Companion_getInstance_0();
      var tmp_24 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_25 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_26 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp1_text, tmp4_modifier, tmp2_color, null, tmp3_fontSize, null, null, null, tmp_24, null, null, tmp_25, tmp_26, false, 0, 0, null, null, $composer_10, 24576, 0, 262120);
      sourceInformationMarkerEnd($composer_10);
      $composer_8.endNode_3m0yfn_k$();
      sourceInformationMarkerEnd($composer_5);
      $composer_3.endNode_3m0yfn_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(MessageBubble$lambda(message, $changed));
    }
  }
  function NotasSearchBar$lambda($query, $onQueryChange, $placeholder, $$changed, $$default) {
    return function ($composer, $force) {
      NotasSearchBar($query, $onQueryChange, $placeholder._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function Notas11SalasDeChatScreen$lambda($state) {
    return function () {
      $state.navigateTo_ndxrxs_k$(NotasScreen_CREATE_ROOM_getInstance());
      return Unit_getInstance();
    };
  }
  function Notas11SalasDeChatScreen$lambda_0($state) {
    return function () {
      $state.set_feedbackMessage_t4kquq_k$(null);
      return Unit_getInstance();
    };
  }
  function Notas11SalasDeChatScreen$lambda_1($state) {
    return function (it) {
      $state.set_roomSearchQuery_pe72aq_k$(it);
      return Unit_getInstance();
    };
  }
  function Notas11SalasDeChatScreen$lambda_2($state) {
    return function () {
      $state.navigateTo_ndxrxs_k$(NotasScreen_ACCEPT_INVITATION_getInstance());
      return Unit_getInstance();
    };
  }
  function Notas11SalasDeChatScreen$lambda_3($state, $room) {
    return function () {
      $state.openRoom_ndqpq3_k$($room.get_id_kntnx8_k$());
      return Unit_getInstance();
    };
  }
  function NotasAppState$navigateToTab$ref_4(p0) {
    return constructCallableReference(function (p0_0) {
      p0.navigateToTab_431qr_k$(p0_0);
      return Unit_getInstance();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.navigateToTab|navigateToTab(com.notas.agenda.model.NotasTab){}[0]', 'navigateToTab', [p0]);
  }
  function Notas11SalasDeChatScreen$lambda_4($state, $$changed) {
    return function ($composer, $force) {
      Notas11SalasDeChatScreen($state, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function RoomCard$lambda($room, $onClick, $$changed) {
    return function ($composer, $force) {
      RoomCard($room, $onClick, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Notas12CrearSalaScreen$lambda($state) {
    return function () {
      $state.navigateTo_ndxrxs_k$(NotasScreen_CHAT_ROOMS_getInstance());
      return Unit_getInstance();
    };
  }
  function Notas12CrearSalaScreen$lambda_0($state) {
    return function (it) {
      $state.set_draftRoomName_2jkwn4_k$(it);
      return Unit_getInstance();
    };
  }
  function Notas12CrearSalaScreen$lambda_1($state) {
    return function (it) {
      $state.set_draftRoomDescription_nuceib_k$(it);
      return Unit_getInstance();
    };
  }
  function Notas12CrearSalaScreen$lambda_2($state) {
    return function () {
      $state.navigateTo_ndxrxs_k$(NotasScreen_INVITE_TEAM_getInstance());
      return Unit_getInstance();
    };
  }
  function Notas12CrearSalaScreen$lambda_3($state, $$changed) {
    return function ($composer, $force) {
      Notas12CrearSalaScreen($state, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Notas13InvitarCompanerosScreen$lambda($state) {
    return function () {
      $state.navigateTo_ndxrxs_k$(NotasScreen_CHAT_ROOMS_getInstance());
      return Unit_getInstance();
    };
  }
  function Notas13InvitarCompanerosScreen$lambda_0($state) {
    return function (it) {
      $state.set_teammateSearchQuery_52mqp5_k$(it);
      return Unit_getInstance();
    };
  }
  function Notas13InvitarCompanerosScreen$lambda_1($state, $mate) {
    return function () {
      $state.toggleTeammateSelection_zfhz3g_k$($mate.get_id_kntnx8_k$());
      return Unit_getInstance();
    };
  }
  function Notas13InvitarCompanerosScreen$lambda_2($state) {
    return function () {
      $state.sendRoomInvitations_g9oujr_k$();
      return Unit_getInstance();
    };
  }
  function Notas13InvitarCompanerosScreen$lambda_3($state, $$changed) {
    return function ($composer, $force) {
      Notas13InvitarCompanerosScreen($state, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Notas14AceptarInvitacionScreen$lambda($state) {
    return function () {
      $state.navigateTo_ndxrxs_k$(NotasScreen_CONFIGURE_ALERTS_getInstance());
      return Unit_getInstance();
    };
  }
  function Notas14AceptarInvitacionScreen$lambda_0($state) {
    return function () {
      $state.acceptPendingInvitation_d4nwk8_k$();
      return Unit_getInstance();
    };
  }
  function Notas14AceptarInvitacionScreen$lambda_1($state) {
    return function () {
      $state.navigateTo_ndxrxs_k$(NotasScreen_CHAT_ROOMS_getInstance());
      return Unit_getInstance();
    };
  }
  function NotasAppState$navigateToTab$ref_5(p0) {
    return constructCallableReference(function (p0_0) {
      p0.navigateToTab_431qr_k$(p0_0);
      return Unit_getInstance();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.navigateToTab|navigateToTab(com.notas.agenda.model.NotasTab){}[0]', 'navigateToTab', [p0]);
  }
  function Notas14AceptarInvitacionScreen$lambda_2($state, $$changed) {
    return function ($composer, $force) {
      Notas14AceptarInvitacionScreen($state, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Notas15ConversacionScreen$lambda($messageDraft$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('messageDraft', KMutableProperty0, true);
    return $messageDraft$delegate.get_value_j01efc_k$();
  }
  function Notas15ConversacionScreen$lambda_0($messageDraft$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('messageDraft', KMutableProperty0, true);
    $messageDraft$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function Notas15ConversacionScreen$lambda_1($state) {
    return function () {
      $state.navigateTo_ndxrxs_k$(NotasScreen_CONFIGURE_ALERTS_getInstance());
      return Unit_getInstance();
    };
  }
  function Notas15ConversacionScreen$lambda_2($state) {
    return function () {
      $state.navigateTo_ndxrxs_k$(NotasScreen_CHAT_ROOMS_getInstance());
      return Unit_getInstance();
    };
  }
  function Notas15ConversacionScreen$lambda_3($messageDraft$delegate) {
    return function (it) {
      Notas15ConversacionScreen$lambda_0($messageDraft$delegate, it);
      return Unit_getInstance();
    };
  }
  function Notas15ConversacionScreen$lambda_4($state, $messageDraft$delegate) {
    return function () {
      var tmp;
      // Inline function 'kotlin.text.isNotBlank' call
      var this_0 = Notas15ConversacionScreen$lambda($messageDraft$delegate);
      if (!isBlank(this_0)) {
        $state.sendMessageToActiveRoom_n59ywf_k$(Notas15ConversacionScreen$lambda($messageDraft$delegate));
        Notas15ConversacionScreen$lambda_0($messageDraft$delegate, '');
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function NotasAppState$navigateToTab$ref_6(p0) {
    return constructCallableReference(function (p0_0) {
      p0.navigateToTab_431qr_k$(p0_0);
      return Unit_getInstance();
    }, 1, 0, 'com.notas.agenda.model/NotasAppState.navigateToTab|navigateToTab(com.notas.agenda.model.NotasTab){}[0]', 'navigateToTab', [p0]);
  }
  function Notas15ConversacionScreen$lambda_5($state, $$changed) {
    return function ($composer, $force) {
      Notas15ConversacionScreen($state, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function MessageBubble$lambda($message, $$changed) {
    return function ($composer, $force) {
      MessageBubble($message, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function main() {
    ComposeViewport(VOID, VOID, ComposableSingletons$MainKt_getInstance().lambda$422037963__1);
  }
  function ComposableLambda$invoke$ref_2(p0) {
    return constructCallableReference(function (p0_0, p1) {
      p0.invoke_z8di7s_k$(p0_0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.runtime.internal/ComposableLambda.invoke|invoke(androidx.compose.runtime.Composer;kotlin.Int){}[0]', VOID, [p0]);
  }
  function ComposableSingletons$MainKt$lambda$422037963$lambda($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C8@212L10:main.kt#ee4z4u');
    if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(422037963, $changed, -1, 'com.notas.agenda.ComposableSingletons$MainKt.lambda$422037963.<anonymous> (main.kt:8)');
      }
      NotasApp($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda$422037963__1 = ComposableLambda$invoke$ref_2(composableLambdaInstance(422037963, false, ComposableSingletons$MainKt$lambda$422037963$lambda));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda$422037963_3yo1f6_k$ = function () {
    return this.lambda$422037963__1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function mainWrapper() {
    main();
  }
  //region block: init
  notasagend_shared_generated_resources_Res_drawable$stable = 0;
  notasagend_shared_generated_resources_Res_string$stable = 0;
  notasagend_shared_generated_resources_Res_array$stable = 0;
  notasagend_shared_generated_resources_Res_plurals$stable = 0;
  notasagend_shared_generated_resources_Res_font$stable = 0;
  notasagend_shared_generated_resources_Res$stable = 0;
  com_notas_agenda_model_AppointmentItem$stable = 0;
  com_notas_agenda_model_ChatMessage$stable = 0;
  com_notas_agenda_model_ChatRoom$stable = 8;
  com_notas_agenda_model_Teammate$stable = 0;
  com_notas_agenda_model_NotasAppState$stable = 0;
  com_notas_agenda_ui_icons_NotasIcons$stable = 0;
  //endregion
  //region block: exports
  kotlin_kotlin.$jsExportAll$(_);
  //endregion
  mainWrapper();
  return _;
}));
