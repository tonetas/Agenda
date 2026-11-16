(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-animation-animation-core.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui.js', './androidx-compose-runtime-runtime.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui-text.js', './androidx-collection-collection.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./androidx-compose-runtime-runtime.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./androidx-collection-collection.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    globalThis['compose-multiplatform-core-compose-animation-animation'] = factory(typeof globalThis['compose-multiplatform-core-compose-animation-animation'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-animation-animation'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['androidx-compose-runtime-runtime'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui-text'], globalThis['androidx-collection-collection']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_androidx_collection_collection) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sign = Math.sign;
  var protoOf = kotlin_kotlin.$_$.ih;
  var equals = kotlin_kotlin.$_$.xf;
  var FunctionAdapter = kotlin_kotlin.$_$.gf;
  var isInterface = kotlin_kotlin.$_$.vg;
  var hashCode = kotlin_kotlin.$_$.fg;
  var initMetadataForClass = kotlin_kotlin.$_$.gg;
  var VOID = kotlin_kotlin.$_$.e;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var get_VisibilityThreshold = kotlin_org_jetbrains_compose_animation_animation_core.$_$.c1;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.v1;
  var fromInt = kotlin_kotlin.$_$.ue;
  var shiftLeft = kotlin_kotlin.$_$.bf;
  var Long = kotlin_kotlin.$_$.am;
  var bitwiseAnd = kotlin_kotlin.$_$.me;
  var bitwiseOr = kotlin_kotlin.$_$.ne;
  var _IntSize___init__impl__emcjft = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l3;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.tc;
  var updateTransition = kotlin_org_jetbrains_compose_animation_animation_core.$_$.x1;
  var Companion_getInstance_1 = kotlin_androidx_compose_runtime_runtime.$_$.i3;
  var Unit_getInstance = kotlin_kotlin.$_$.n3;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.v7;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.f8;
  var composed = kotlin_org_jetbrains_compose_ui_ui.$_$.cb;
  var initMetadataForInterface = kotlin_kotlin.$_$.kg;
  var layout = kotlin_org_jetbrains_compose_ui_ui.$_$.o4;
  var THROW_IAE = kotlin_kotlin.$_$.im;
  var enumEntries = kotlin_kotlin.$_$.ge;
  var Enum = kotlin_kotlin.$_$.ul;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.o2;
  var createChildTransitionInternal = kotlin_org_jetbrains_compose_animation_animation_core.$_$.n1;
  var rememberUpdatedState = kotlin_androidx_compose_runtime_runtime.$_$.t2;
  var produceState = kotlin_androidx_compose_runtime_runtime.$_$.q2;
  var get_currentCompositeKeyHashCode = kotlin_androidx_compose_runtime_runtime.$_$.a2;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.eb;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.oc;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.f2;
  var Applier = kotlin_androidx_compose_runtime_runtime.$_$.s;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.d3;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.f3;
  var Updater__reconcile_impl_1mfi6g = kotlin_androidx_compose_runtime_runtime.$_$.e3;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p4;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.q3;
  var get_lastIndex = kotlin_kotlin.$_$.ua;
  var compareTo = kotlin_kotlin.$_$.sf;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.x3;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.c3;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n3;
  var shiftRight = kotlin_kotlin.$_$.df;
  var convertToInt = kotlin_kotlin.$_$.qe;
  var KMutableProperty0 = kotlin_kotlin.$_$.si;
  var getLocalDelegateReference = kotlin_kotlin.$_$.bg;
  var KProperty0 = kotlin_kotlin.$_$.ui;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var CoroutineImpl = kotlin_kotlin.$_$.zd;
  var THROW_CCE = kotlin_kotlin.$_$.hm;
  var initMetadataForLambda = kotlin_kotlin.$_$.lg;
  var constructCallableReference = kotlin_kotlin.$_$.tf;
  var ProduceStateScope = kotlin_androidx_compose_runtime_runtime.$_$.k1;
  var snapshotFlow = kotlin_androidx_compose_runtime_runtime.$_$.u2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.jd;
  var SuspendFunction1 = kotlin_kotlin.$_$.be;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.xa;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.r5;
  var androidx_compose_ui_Modifier_Node$stableprop_getter = kotlin_org_jetbrains_compose_ui_ui.$_$.bb;
  var KMutableProperty1 = kotlin_kotlin.$_$.ti;
  var getPropertyCallableRef = kotlin_kotlin.$_$.dg;
  var ensureNotNull = kotlin_kotlin.$_$.an;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var TwoWayConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.v;
  var ColorSpaces_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s3;
  var Color__convert_impl_so5m8t = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v2;
  var _Color___get_red__impl__cwrsk6 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y2;
  var _Color___get_green__impl__bta9rs = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w2;
  var _Color___get_blue__impl__xwez13 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t2;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s2;
  var AnimationVector4D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.y2;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z3;
  var lazy = kotlin_kotlin.$_$.gn;
  var ValueTimeMark__elapsedNow_impl_eonqvs = kotlin_kotlin.$_$.o;
  var _Duration___get_inWholeMilliseconds__impl__msfiry = kotlin_kotlin.$_$.h;
  var VelocityTracker1D_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui.$_$.ad;
  var VelocityTracker = kotlin_org_jetbrains_compose_ui_ui.$_$.a2;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j3;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var toRawBits = kotlin_kotlin.$_$.rn;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.u;
  var Monotonic_getInstance = kotlin_kotlin.$_$.d3;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui.$_$.dc;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n4;
  var TransformOrigin = kotlin_org_jetbrains_compose_ui_ui.$_$.d1;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var isNaN_0 = kotlin_kotlin.$_$.dn;
  var AnimationVector1D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.f;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a1;
  var equalsLong = kotlin_kotlin.$_$.te;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s4;
  var Velocity = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d1;
  var _Velocity___get_x__impl__qqcikv = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c4;
  var _Velocity___get_y__impl__239yhc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d4;
  var AnimationVector2D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.v2;
  var floatFromBits = kotlin_kotlin.$_$.zf;
  var IntOffset__plus_impl_nqoa9b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h3;
  var mutableFloatStateOf = kotlin_androidx_compose_runtime_runtime.$_$.i2;
  var modifierLocalOf = kotlin_org_jetbrains_compose_ui_ui.$_$.b5;
  var initMetadataForCompanion = kotlin_kotlin.$_$.hg;
  var plus = kotlin_kotlin.$_$.lb;
  var get_VisibilityThreshold_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.f1;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui.$_$.sc;
  var get_VectorConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.w;
  var createDeferredAnimation = kotlin_org_jetbrains_compose_animation_animation_core.$_$.o1;
  var get_VectorConverter_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a1;
  var _Color___get_colorSpace__impl__jqqozk = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u2;
  var modifierLocalProvider = kotlin_org_jetbrains_compose_ui_ui.$_$.c5;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.f1;
  var booleanArrayOf = kotlin_kotlin.$_$.jf;
  var Annotation = kotlin_kotlin.$_$.ml;
  var emptyMap = kotlin_kotlin.$_$.u9;
  var toString = kotlin_kotlin.$_$.tn;
  var toString_0 = kotlin_kotlin.$_$.lh;
  var getBooleanHashCode = kotlin_kotlin.$_$.ag;
  var getNumberHashCode = kotlin_kotlin.$_$.cg;
  var TransformOrigin__toString_impl_nn7ftd = kotlin_org_jetbrains_compose_ui_ui.$_$.ib;
  var TransformOrigin__hashCode_impl_pmqpcw = kotlin_org_jetbrains_compose_ui_ui.$_$.fb;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z2;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x2;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.t5;
  var get_VectorConverter_1 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.hn;
  var requireLayoutCoordinates = kotlin_org_jetbrains_compose_ui_ui.$_$.y6;
  var _Size___init__impl__aywn0g = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var positionInParent = kotlin_org_jetbrains_compose_ui_ui.$_$.r4;
  var bitwiseXor = kotlin_kotlin.$_$.oe;
  var onMeasureResultChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.h5;
  var DrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.i5;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h4;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var IntOffset__minus_impl_4m69hb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f3;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k1;
  var onRemeasured = kotlin_org_jetbrains_compose_ui_ui.$_$.l5;
  var LayoutAwareModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.m5;
  var _TransformOrigin___get_pivotFractionX__impl__a9pmci = kotlin_org_jetbrains_compose_ui_ui.$_$.gb;
  var _TransformOrigin___get_pivotFractionY__impl__ijwupp = kotlin_org_jetbrains_compose_ui_ui.$_$.hb;
  var TransformOrigin_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.c1;
  var get_VisibilityThreshold_1 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e1;
  var toNumber = kotlin_kotlin.$_$.ff;
  var compare = kotlin_kotlin.$_$.pe;
  var numberToLong = kotlin_kotlin.$_$.af;
  var Color_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var get_LinearEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.p;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.w1;
  var RepeatMode_Reverse_getInstance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.z1;
  var infiniteRepeatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.s1;
  var RepeatMode_Restart_getInstance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.y1;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l1;
  var listOf = kotlin_kotlin.$_$.db;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p2;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x3;
  var Paint = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h1;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e4;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p3;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.t4;
  var drawText = kotlin_org_jetbrains_compose_ui_ui_text.$_$.d2;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var Companion_getInstance_13 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f4;
  var Companion_getInstance_14 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.n3;
  var Companion_getInstance_15 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y3;
  var SnapSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.r;
  var TweenSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.u;
  var ArcMode = kotlin_org_jetbrains_compose_animation_animation_core.$_$.j;
  var Companion_getInstance_16 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a2;
  var ArcAnimationSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.i;
  var get_VectorConverter_2 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.y;
  var TargetBasedAnimation = kotlin_org_jetbrains_compose_animation_animation_core.$_$.t;
  var subtract = kotlin_kotlin.$_$.ef;
  var Offset__minus_impl_hoj2c0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.z;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var MutableScatterMap = kotlin_androidx_collection_collection.$_$.r;
  var invalidateDraw = kotlin_org_jetbrains_compose_ui_ui.$_$.o6;
  var drawLayer = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a5;
  var requireGraphicsContext = kotlin_org_jetbrains_compose_ui_ui.$_$.x6;
  var minIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.q5;
  var minIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.p5;
  var maxIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.o5;
  var maxIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.n5;
  var get_providedValues = kotlin_org_jetbrains_compose_ui_ui.$_$.x4;
  var provide = kotlin_org_jetbrains_compose_ui_ui.$_$.y4;
  var get_current = kotlin_org_jetbrains_compose_ui_ui.$_$.w4;
  var ModifierLocalModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.z4;
  var round = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var Rect_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var currentValueOf = kotlin_org_jetbrains_compose_ui_ui.$_$.j6;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.j7;
  var get_LocalLayoutDirection = kotlin_org_jetbrains_compose_ui_ui.$_$.o7;
  var get_LocalFontFamilyResolver = kotlin_org_jetbrains_compose_ui_ui.$_$.l7;
  var TextMeasurer = kotlin_org_jetbrains_compose_ui_ui_text.$_$.v1;
  var println = kotlin_kotlin.$_$.je;
  var to = kotlin_kotlin.$_$.un;
  var modifierLocalMapOf = kotlin_org_jetbrains_compose_ui_ui.$_$.a5;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var Rect_1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f;
  var observeReads = kotlin_org_jetbrains_compose_ui_ui.$_$.u6;
  var positionInRoot = kotlin_org_jetbrains_compose_ui_ui.$_$.s4;
  var IntSize__toString_impl_54w9zl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o3;
  var roundToInt = kotlin_kotlin.$_$.oh;
  var roundToIntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var Companion_getInstance_17 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j4;
  var coerceAtLeast = kotlin_kotlin.$_$.yh;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var Constraints__toString_impl_37yskr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var requireDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.w6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g5;
  var isPlacementApproachInProgress = kotlin_org_jetbrains_compose_ui_ui.$_$.c3;
  var minApproachIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.g3;
  var minApproachIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.f3;
  var maxApproachIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.e3;
  var maxApproachIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.d3;
  var ApproachLayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.h3;
  var ObserverModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.u5;
  var CompositionLocalConsumerModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.d5;
  var get_VisibilityThreshold_2 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.d1;
  var SpringSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.s;
  var emptyList = kotlin_kotlin.$_$.t9;
  var get_VectorConverter_3 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.z;
  var Animatable_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.r3;
  var plus_0 = kotlin_kotlin.$_$.pb;
  var minus = kotlin_kotlin.$_$.gb;
  var Size__toString_impl_o87ni8 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var RememberObserver = kotlin_androidx_compose_runtime_runtime.$_$.m1;
  var Comparator = kotlin_kotlin.$_$.tl;
  var initMetadataForObject = kotlin_kotlin.$_$.mg;
  var Companion_getInstance_18 = kotlin_org_jetbrains_compose_ui_ui.$_$.nc;
  var approachLayout = kotlin_org_jetbrains_compose_ui_ui.$_$.i4;
  var LookaheadScope = kotlin_org_jetbrains_compose_ui_ui.$_$.s3;
  var addOutline = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u1;
  var Collection = kotlin_kotlin.$_$.e6;
  var MutableTransitionState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.q;
  var androidx_compose_animation_core_MutableTransitionState$stableprop_getter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h1;
  var rememberTransition = kotlin_org_jetbrains_compose_animation_animation_core.$_$.t1;
  var mutableIntStateOf = kotlin_androidx_compose_runtime_runtime.$_$.j2;
  var MutableObjectList = kotlin_androidx_collection_collection.$_$.p;
  var mutableStateMapOf = kotlin_androidx_compose_runtime_runtime.$_$.n2;
  var localLookaheadPositionOf$default = kotlin_org_jetbrains_compose_ui_ui.$_$.zc;
  var Offset__plus_impl_c78cg0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b1;
  var animateValueAsState = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k1;
  var _ScaleFactor___get_packedValue__impl__x2069g = kotlin_org_jetbrains_compose_ui_ui.$_$.nb;
  var _ScaleFactor___init__impl__ttdtvk = kotlin_org_jetbrains_compose_ui_ui.$_$.mb;
  var coerceIn = kotlin_kotlin.$_$.ei;
  var numberToInt = kotlin_kotlin.$_$.gh;
  var generateDecayAnimationSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.r1;
  var divide = kotlin_kotlin.$_$.se;
  var multiply = kotlin_kotlin.$_$.ye;
  var FloatDecayAnimationSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.o;
  var Companion_getInstance_19 = kotlin_androidx_compose_runtime_runtime.$_$.g3;
  var derivedStateOf = kotlin_androidx_compose_runtime_runtime.$_$.e2;
  var createTransitionAnimation = kotlin_org_jetbrains_compose_animation_animation_core.$_$.p1;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(BoundsTransform, 'BoundsTransform');
  initMetadataForClass(sam$androidx_compose_animation_BoundsTransform$0, 'sam$androidx_compose_animation_BoundsTransform$0', VOID, VOID, [BoundsTransform, FunctionAdapter]);
  function animateEnterExit(_this__u8e3s4, enter, exit, label) {
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = AnimatedVisibilityScope$animateEnterExit$lambda(enter, exit, label);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp_0 = tmp;
    return composed(_this__u8e3s4, tmp_0, AnimatedVisibilityScope$animateEnterExit$lambda_0(this, enter, exit, label));
  }
  function animateEnterExit$default(_this__u8e3s4, enter, exit, label, $super) {
    enter = enter === VOID ? fadeIn() : enter;
    exit = exit === VOID ? fadeOut() : exit;
    label = label === VOID ? 'animateEnterExit' : label;
    return $super === VOID ? this.animateEnterExit_z97dqu_k$(_this__u8e3s4, enter, exit, label) : animateEnterExit(_this__u8e3s4, enter, exit, label);
  }
  initMetadataForInterface(AnimatedVisibilityScope, 'AnimatedVisibilityScope');
  initMetadataForClass(EnterExitState, 'EnterExitState', VOID, Enum);
  initMetadataForInterface(OnLookaheadMeasured, 'OnLookaheadMeasured');
  initMetadataForClass(AnimatedVisibilityScopeImpl, 'AnimatedVisibilityScopeImpl', VOID, VOID, [AnimatedVisibilityScope]);
  initMetadataForClass(AnimatedEnterExitMeasurePolicy, 'AnimatedEnterExitMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(AnimatedEnterExitImpl$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AnimatedEnterExitImpl$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(LayoutModifierNodeWithPassThroughIntrinsics, 'LayoutModifierNodeWithPassThroughIntrinsics', VOID, Node, [LayoutModifierNode]);
  initMetadataForClass(BoundsAnimation, 'BoundsAnimation');
  initMetadataForClass(MutableTransform, 'MutableTransform', MutableTransform);
  initMetadataForClass(SharedMutableTransformState, 'SharedMutableTransformState', SharedMutableTransformState);
  initMetadataForInterface(TransformScope, 'TransformScope');
  initMetadataForClass(TransformScopeImpl, 'TransformScopeImpl', TransformScopeImpl, VOID, [TransformScope]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(EnterTransition, 'EnterTransition');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ExitTransition, 'ExitTransition');
  initMetadataForClass(ExperimentalAnimationApi, 'ExperimentalAnimationApi', VOID, VOID, [Annotation]);
  initMetadataForClass(TransitionData, 'TransitionData', TransitionData);
  initMetadataForClass(EnterTransitionImpl, 'EnterTransitionImpl', VOID, EnterTransition);
  initMetadataForClass(Fade, 'Fade');
  initMetadataForClass(Slide, 'Slide');
  initMetadataForClass(ChangeSize, 'ChangeSize');
  initMetadataForClass(Scale, 'Scale');
  initMetadataForClass(Veil, 'Veil');
  initMetadataForInterface(TransitionEffectKey, 'TransitionEffectKey');
  initMetadataForClass(TransitionEffect, 'TransitionEffect');
  initMetadataForClass(ExitTransitionImpl, 'ExitTransitionImpl', VOID, ExitTransition);
  initMetadataForClass(VeilModifierElement, 'VeilModifierElement', VOID, ModifierNodeElement);
  initMetadataForInterface(GraphicsLayerBlockForEnterExit, 'GraphicsLayerBlockForEnterExit');
  initMetadataForClass(EnterExitTransitionElement, 'EnterExitTransitionElement', VOID, ModifierNodeElement);
  initMetadataForClass(VeilModifierNode, 'VeilModifierNode', VOID, Node, [DrawModifierNode]);
  initMetadataForClass(EnterExitTransitionModifierNode, 'EnterExitTransitionModifierNode', VOID, LayoutModifierNodeWithPassThroughIntrinsics, [LayoutAwareModifierNode]);
  initMetadataForClass(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0, 'sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0', VOID, VOID, [GraphicsLayerBlockForEnterExit, FunctionAdapter]);
  initMetadataForClass(ExperimentalLookaheadAnimationVisualDebugApi, 'ExperimentalLookaheadAnimationVisualDebugApi', VOID, VOID, [Annotation]);
  initMetadataForClass(FlingInfo, 'FlingInfo');
  initMetadataForClass(FlingCalculator, 'FlingCalculator');
  initMetadataForClass(LookaheadAnimationVisualDebugConfig, 'LookaheadAnimationVisualDebugConfig', LookaheadAnimationVisualDebugConfig);
  initMetadataForLambda(LookaheadAnimationVisualDebugHelper$onAttach$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(LookaheadAnimationVisualDebugHelper$onAttach$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(LookaheadAnimationVisualDebugHelper$onDetach$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(LookaheadAnimationVisualDebugHelper, 'LookaheadAnimationVisualDebugHelper', LookaheadAnimationVisualDebugHelper);
  initMetadataForClass(RenderInTransitionOverlayNodeElement, 'RenderInTransitionOverlayNodeElement', VOID, ModifierNodeElement);
  initMetadataForInterface(LayerRenderer, 'LayerRenderer');
  initMetadataForClass(LayerWithRenderer, 'LayerWithRenderer', VOID, VOID, [LayerRenderer]);
  initMetadataForClass(RenderInTransitionOverlayNode, 'RenderInTransitionOverlayNode', VOID, Node, [LayoutModifierNode, DrawModifierNode, ModifierLocalModifierNode]);
  initMetadataForClass(SharedBoundsNodeElement, 'SharedBoundsNodeElement', VOID, ModifierNodeElement);
  initMetadataForClass(sam$androidx_compose_animation_BoundsTransform$0_0, 'sam$androidx_compose_animation_BoundsTransform$0', VOID, VOID, [BoundsTransform, FunctionAdapter]);
  function get_modifierLocalTransformState() {
    return null;
  }
  initMetadataForInterface(BoundsProvider, 'BoundsProvider');
  initMetadataForClass(SharedBoundsNode, 'SharedBoundsNode', VOID, Node, [ApproachLayoutModifierNode, DrawModifierNode, ModifierLocalModifierNode, ObserverModifierNode, BoundsProvider, CompositionLocalConsumerModifierNode]);
  initMetadataForLambda(SharedElement$updateExitVelocity$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(SharedElement$momentumAnimationOffset$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SharedElement, 'SharedElement');
  initMetadataForClass(SharedElementEntry, 'SharedElementEntry', VOID, VOID, [LayerRenderer, RememberObserver]);
  initMetadataForObject(LayerRendererComparator, 'LayerRendererComparator', VOID, VOID, [Comparator]);
  initMetadataForInterface(PlaceholderSize, 'PlaceholderSize');
  initMetadataForClass(sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0, 'sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0', VOID, VOID, [PlaceholderSize, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0_0, 'sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0', VOID, VOID, [PlaceholderSize, FunctionAdapter]);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForInterface(ResizeMode, 'ResizeMode');
  initMetadataForInterface(OverlayClip, 'OverlayClip');
  initMetadataForClass(SharedContentState, 'SharedContentState');
  function get_isEnabled(_this__u8e3s4) {
    return true;
  }
  function get_shouldKeepEnabledForOngoingAnimation() {
    return true;
  }
  function get_permitTransformDuringDeferredTransition() {
    return true;
  }
  function alternativeTargetBoundsInTransitionScopeAfterRemoval(_this__u8e3s4, targetBoundsBeforeRemoval, sharedTransitionLayoutSize) {
    return null;
  }
  initMetadataForInterface(SharedContentConfig_0, 'SharedContentConfig');
  initMetadataForClass(SharedTransitionScope$SharedContentConfig$1, VOID, VOID, VOID, [SharedContentConfig_0]);
  function skipToLookaheadSize$default(_this__u8e3s4, enabled, $super) {
    var tmp;
    if (enabled === VOID) {
      tmp = SharedTransitionScope$skipToLookaheadSize$lambda(this);
    } else {
      tmp = enabled;
    }
    enabled = tmp;
    return $super === VOID ? this.skipToLookaheadSize_fy7u2l_k$(_this__u8e3s4, enabled) : $super.skipToLookaheadSize_fy7u2l_k$.call(this, _this__u8e3s4, enabled);
  }
  function skipToLookaheadPosition(_this__u8e3s4, enabled) {
    var tmp = SharedTransitionScope$skipToLookaheadPosition$lambda_0;
    var tmp_0 = SharedTransitionScope$skipToLookaheadPosition$lambda_1(enabled);
    return approachLayout(_this__u8e3s4, tmp, tmp_0, SharedTransitionScope$skipToLookaheadPosition$lambda_2(enabled, this));
  }
  function skipToLookaheadPosition$default(_this__u8e3s4, enabled, $super) {
    var tmp;
    if (enabled === VOID) {
      tmp = SharedTransitionScope$skipToLookaheadPosition$lambda(this);
    } else {
      tmp = enabled;
    }
    enabled = tmp;
    return $super === VOID ? this.skipToLookaheadPosition_gd5pgr_k$(_this__u8e3s4, enabled) : skipToLookaheadPosition(_this__u8e3s4, enabled);
  }
  function renderInSharedTransitionScopeOverlay$default(_this__u8e3s4, zIndexInOverlay, renderInOverlay, $super) {
    zIndexInOverlay = zIndexInOverlay === VOID ? 0.0 : zIndexInOverlay;
    var tmp;
    if (renderInOverlay === VOID) {
      tmp = SharedTransitionScope$renderInSharedTransitionScopeOverlay$lambda(this);
    } else {
      tmp = renderInOverlay;
    }
    renderInOverlay = tmp;
    return $super === VOID ? this.renderInSharedTransitionScopeOverlay_x89i4l_k$(_this__u8e3s4, zIndexInOverlay, renderInOverlay) : $super.renderInSharedTransitionScopeOverlay_x89i4l_k$.call(this, _this__u8e3s4, zIndexInOverlay, renderInOverlay);
  }
  function sharedElement$default(_this__u8e3s4, sharedContentState, animatedVisibilityScope, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition, $super) {
    boundsTransform = boundsTransform === VOID ? SharedTransitionDefaults_getInstance().BoundsTransform_1 : boundsTransform;
    placeholderSize = placeholderSize === VOID ? Companion_getInstance_22().ContentSize_1 : placeholderSize;
    renderInOverlayDuringTransition = renderInOverlayDuringTransition === VOID ? true : renderInOverlayDuringTransition;
    zIndexInOverlay = zIndexInOverlay === VOID ? 0.0 : zIndexInOverlay;
    clipInOverlayDuringTransition = clipInOverlayDuringTransition === VOID ? get_ParentClip() : clipInOverlayDuringTransition;
    return $super === VOID ? this.sharedElement_swjtlq_k$(_this__u8e3s4, sharedContentState, animatedVisibilityScope, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) : $super.sharedElement_swjtlq_k$.call(this, _this__u8e3s4, sharedContentState, animatedVisibilityScope, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  }
  function sharedBounds$default(_this__u8e3s4, sharedContentState, animatedVisibilityScope, enter, exit, boundsTransform, resizeMode, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition, $super) {
    enter = enter === VOID ? fadeIn() : enter;
    exit = exit === VOID ? fadeOut() : exit;
    boundsTransform = boundsTransform === VOID ? SharedTransitionDefaults_getInstance().BoundsTransform_1 : boundsTransform;
    resizeMode = resizeMode === VOID ? Companion_getInstance_23().scaleToBounds_38olcd_k$(Companion_getInstance_18().get_FillWidth_n2o75m_k$(), Companion_getInstance_9().get_Center_3arb0i_k$()) : resizeMode;
    placeholderSize = placeholderSize === VOID ? Companion_getInstance_22().ContentSize_1 : placeholderSize;
    renderInOverlayDuringTransition = renderInOverlayDuringTransition === VOID ? true : renderInOverlayDuringTransition;
    zIndexInOverlay = zIndexInOverlay === VOID ? 0.0 : zIndexInOverlay;
    clipInOverlayDuringTransition = clipInOverlayDuringTransition === VOID ? get_ParentClip() : clipInOverlayDuringTransition;
    return $super === VOID ? this.sharedBounds_39r956_k$(_this__u8e3s4, sharedContentState, animatedVisibilityScope, enter, exit, boundsTransform, resizeMode, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) : $super.sharedBounds_39r956_k$.call(this, _this__u8e3s4, sharedContentState, animatedVisibilityScope, enter, exit, boundsTransform, resizeMode, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  }
  function sharedElementWithCallerManagedVisibility$default(_this__u8e3s4, sharedContentState, visible, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition, $super) {
    boundsTransform = boundsTransform === VOID ? SharedTransitionDefaults_getInstance().BoundsTransform_1 : boundsTransform;
    placeholderSize = placeholderSize === VOID ? Companion_getInstance_22().ContentSize_1 : placeholderSize;
    renderInOverlayDuringTransition = renderInOverlayDuringTransition === VOID ? true : renderInOverlayDuringTransition;
    zIndexInOverlay = zIndexInOverlay === VOID ? 0.0 : zIndexInOverlay;
    clipInOverlayDuringTransition = clipInOverlayDuringTransition === VOID ? get_ParentClip() : clipInOverlayDuringTransition;
    return $super === VOID ? this.sharedElementWithCallerManagedVisibility_lqpqms_k$(_this__u8e3s4, sharedContentState, visible, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) : $super.sharedElementWithCallerManagedVisibility_lqpqms_k$.call(this, _this__u8e3s4, sharedContentState, visible, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  }
  function rememberSharedContentState(key, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(800730162);
    var tmp0 = this.rememberSharedContentState_z7zs23_k$(key, SharedContentConfig_getInstance(), $composer_0, 48 | 14 & $changed | 896 & $changed << 3);
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  }
  function rememberSharedContentState_0(key, config, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-148945892);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.changed_ga7h3f_k$(key);
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value = new SharedContentState(key, config);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    // Inline function 'kotlin.also' call
    var this_0 = tmp;
    this_0.set_config_r265w_k$(config);
    $composer_0.endReplaceGroup_ek144q_k$();
    return this_0;
  }
  function makeSharedContentConfig() {
    return CachedSharedContentConfig_getInstance();
  }
  function SharedContentConfig(permitTransformDuringDeferredTransition) {
    if (permitTransformDuringDeferredTransition) {
      return CachedSharedContentConfig_getInstance();
    }
    return new SharedTransitionScope$SharedContentConfig$1(permitTransformDuringDeferredTransition);
  }
  initMetadataForInterface(SharedTransitionScope, 'SharedTransitionScope', VOID, VOID, [LookaheadScope]);
  initMetadataForClass(ShapeBasedClip, 'ShapeBasedClip', VOID, VOID, [OverlayClip]);
  initMetadataForLambda(SharedTransitionScopeImpl$onEntryRemoved$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SharedTransitionScopeImpl, 'SharedTransitionScopeImpl', VOID, VOID, [SharedTransitionScope, LookaheadScope]);
  initMetadataForClass(ScaleToBoundsImpl, 'ScaleToBoundsImpl', VOID, VOID, [ResizeMode]);
  initMetadataForObject(RemeasureImpl, 'RemeasureImpl', VOID, VOID, [ResizeMode]);
  initMetadataForObject(SharedContentConfig_1, 'SharedContentConfig', VOID, VOID, [SharedContentConfig_0]);
  initMetadataForClass(sam$androidx_compose_animation_BoundsTransform$0_1, 'sam$androidx_compose_animation_BoundsTransform$0', VOID, VOID, [BoundsTransform, FunctionAdapter]);
  initMetadataForObject(SharedTransitionDefaults, 'SharedTransitionDefaults');
  initMetadataForObject(CachedSharedContentConfig, 'CachedSharedContentConfig', VOID, VOID, [SharedContentConfig_0]);
  initMetadataForClass(ParentClip$1, VOID, VOID, VOID, [OverlayClip]);
  initMetadataForClass(State, 'State');
  initMetadataForClass(SharedTransitionStateMachine, 'SharedTransitionStateMachine');
  initMetadataForClass(TargetData, 'TargetData');
  initMetadataForClass(StateChangeRequest, 'StateChangeRequest', VOID, Enum);
  initMetadataForObject(NoMatchFound, 'NoMatchFound', VOID, State);
  initMetadataForClass(ActiveMatchFoundConfigPending, 'ActiveMatchFoundConfigPending', VOID, State);
  initMetadataForClass(MatchIsOrHasBeenConfigured, 'MatchIsOrHasBeenConfigured', VOID, State);
  initMetadataForClass(ActiveMatchConfigured, 'ActiveMatchConfigured', VOID, MatchIsOrHasBeenConfigured);
  initMetadataForClass(ActiveMatchRemovedDuringTransition, 'ActiveMatchRemovedDuringTransition', VOID, MatchIsOrHasBeenConfigured);
  initMetadataForClass(SkipToLookaheadSizeElement, 'SkipToLookaheadSizeElement', SkipToLookaheadSizeElement, ModifierNodeElement);
  initMetadataForClass(SkipToLookaheadSizeNode, 'SkipToLookaheadSizeNode', VOID, Node, [LayoutModifierNode]);
  initMetadataForClass(FlingResult, 'FlingResult');
  initMetadataForObject(AndroidFlingSpline, 'AndroidFlingSpline');
  initMetadataForClass(SplineBasedFloatDecayAnimationSpec, 'SplineBasedFloatDecayAnimationSpec', VOID, VOID, [FloatDecayAnimationSpec]);
  initMetadataForClass(NoOp, 'NoOp', VOID, VOID, [Annotation]);
  //endregion
  function get_DefaultBoundsTransform() {
    _init_properties_AnimateBoundsModifier_kt__rz48or();
    return DefaultBoundsTransform;
  }
  var DefaultBoundsTransform;
  var androidx_compose_animation_BoundsAnimationElement$stable;
  var androidx_compose_animation_BoundsAnimationModifierNode$stable;
  var androidx_compose_animation_BoundsTransformDeferredAnimation$stable;
  function sam$androidx_compose_animation_BoundsTransform$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_BoundsTransform$0).createAnimationSpec_whg8mb_k$ = function (initialBounds, targetBounds) {
    return this.function_1(initialBounds, targetBounds);
  };
  protoOf(sam$androidx_compose_animation_BoundsTransform$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_BoundsTransform$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, BoundsTransform) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_animation_BoundsTransform$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function DefaultBoundsTransform$lambda(_unused_var__etf5q3, _unused_var__etf5q3_0) {
    _init_properties_AnimateBoundsModifier_kt__rz48or();
    return spring(1.0, 400.0, get_VisibilityThreshold(Companion_getInstance()));
  }
  var properties_initialized_AnimateBoundsModifier_kt_8xxu7x;
  function _init_properties_AnimateBoundsModifier_kt__rz48or() {
    if (!properties_initialized_AnimateBoundsModifier_kt_8xxu7x) {
      properties_initialized_AnimateBoundsModifier_kt_8xxu7x = true;
      var tmp = DefaultBoundsTransform$lambda;
      DefaultBoundsTransform = new sam$androidx_compose_animation_BoundsTransform$0(tmp);
      androidx_compose_animation_BoundsAnimationElement$stable = 0;
      androidx_compose_animation_BoundsAnimationModifierNode$stable = 8;
      androidx_compose_animation_BoundsTransformDeferredAnimation$stable = 8;
    }
  }
  function get_UnspecifiedSize() {
    _init_properties_AnimatedContent_kt__n7dixw();
    return UnspecifiedSize;
  }
  var UnspecifiedSize;
  var androidx_compose_animation_ContentTransform$stable;
  var androidx_compose_animation_PendingAnimatedContentTransitionScope$stable;
  var androidx_compose_animation_AnimatedContentTransitionScopeImpl_ChildData$stable;
  var androidx_compose_animation_AnimatedContentTransitionScopeImpl$stable;
  var androidx_compose_animation_MutableContentTransform$stable;
  var properties_initialized_AnimatedContent_kt_39yooq;
  function _init_properties_AnimatedContent_kt__n7dixw() {
    if (!properties_initialized_AnimatedContent_kt_39yooq) {
      properties_initialized_AnimatedContent_kt_39yooq = true;
      var tmp0 = -2147483648;
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = -2147483648;
      var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      UnspecifiedSize = _IntSize___init__impl__emcjft(tmp$ret$1);
      androidx_compose_animation_ContentTransform$stable = 8;
      androidx_compose_animation_PendingAnimatedContentTransitionScope$stable = 0;
      androidx_compose_animation_AnimatedContentTransitionScopeImpl_ChildData$stable = 0;
      androidx_compose_animation_AnimatedContentTransitionScopeImpl$stable = 8;
      androidx_compose_animation_MutableContentTransform$stable = 8;
    }
  }
  var androidx_compose_animation_AnimatedVisibilityScopeImpl$stable;
  function AnimatedVisibility(_this__u8e3s4, visible, modifier, enter, exit, label, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enter_0 = {_v: enter};
    var exit_0 = {_v: exit};
    var label_0 = {_v: label};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(234057107);
    var $dirty = $changed;
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(visible) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(enter_0._v) ? 2048 : 1024);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(exit_0._v) ? 16384 : 8192);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(label_0._v) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 1048576 : 524288);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 599185) === 599184), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (!(($default & 4) === 0)) {
        enter_0._v = fadeIn().plus_w36lq9_k$(expandHorizontally());
      }
      if (!(($default & 8) === 0)) {
        exit_0._v = fadeOut().plus_buzi7t_k$(shrinkHorizontally());
      }
      if (!(($default & 16) === 0)) {
        label_0._v = 'AnimatedVisibility';
      }
      var transition = updateTransition(visible, label_0._v, $composer_0, 14 & $dirty >> 3 | 112 & $dirty >> 12, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value = AnimatedVisibility$lambda;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = modifier_0._v;
      var tmp_2 = enter_0._v;
      var tmp_3 = exit_0._v;
      AnimatedVisibilityImpl(transition, tmp_0, tmp_1, tmp_2, tmp_3, null, content, $composer_0, 48 | 896 & $dirty | 7168 & $dirty | 57344 & $dirty | 3670016 & $dirty, 32);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AnimatedVisibility$lambda_0(_this__u8e3s4, visible, modifier_0, enter_0, exit_0, label_0, content, $changed, $default));
    }
  }
  function AnimatedVisibilityScope$animateEnterExit$lambda($enter, $exit, $label) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.set_name_wkmnld_k$('animateEnterExit');
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('enter', $enter);
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('exit', $exit);
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('label', $label);
      return Unit_getInstance();
    };
  }
  function AnimatedVisibilityScope$animateEnterExit$lambda_0(this$0, $enter, $exit, $label) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceGroup_5hh8aj_k$(1840112047);
      var tmp = this$0.get_transition_mcca1q_k$();
      var tmp0 = $this$composed.then_g5qrxq_k$(createModifier(tmp, $enter, $exit, false, null, null, $label, $composer_0, 0, 28));
      $composer_0.endReplaceGroup_ek144q_k$();
      return tmp0;
    };
  }
  function AnimatedVisibilityScope() {
  }
  function AnimatedVisibility_0(_this__u8e3s4, visible, modifier, enter, exit, label, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enter_0 = {_v: enter};
    var exit_0 = {_v: exit};
    var label_0 = {_v: label};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(1799879339);
    var $dirty = $changed;
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(visible) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(enter_0._v) ? 2048 : 1024);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(exit_0._v) ? 16384 : 8192);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(label_0._v) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 1048576 : 524288);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 599185) === 599184), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (!(($default & 4) === 0)) {
        enter_0._v = fadeIn().plus_w36lq9_k$(expandVertically());
      }
      if (!(($default & 8) === 0)) {
        exit_0._v = fadeOut().plus_buzi7t_k$(shrinkVertically());
      }
      if (!(($default & 16) === 0)) {
        label_0._v = 'AnimatedVisibility';
      }
      var transition = updateTransition(visible, label_0._v, $composer_0, 14 & $dirty >> 3 | 112 & $dirty >> 12, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value = AnimatedVisibility$lambda_1;
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp_1 = modifier_0._v;
      var tmp_2 = enter_0._v;
      var tmp_3 = exit_0._v;
      AnimatedVisibilityImpl(transition, tmp_0, tmp_1, tmp_2, tmp_3, null, content, $composer_0, 48 | 896 & $dirty | 7168 & $dirty | 57344 & $dirty | 3670016 & $dirty, 32);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AnimatedVisibility$lambda_2(_this__u8e3s4, visible, modifier_0, enter_0, exit_0, label_0, content, $changed, $default));
    }
  }
  function AnimatedVisibilityImpl(transition, visible, modifier, enter, exit, mutableTransform, content, $composer, $changed, $default) {
    var mutableTransform_0 = {_v: mutableTransform};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-497872534);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(transition) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(visible) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(enter) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(exit) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(mutableTransform_0._v) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 1048576 : 524288);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 599187) === 599186), $dirty & 1)) {
      if (!(($default & 32) === 0)) {
        mutableTransform_0._v = null;
      }
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 112) === 32 | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value = AnimatedVisibilityImpl$lambda(visible, transition);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp$ret$0 = tmp;
      var tmp_0 = layout(modifier, tmp$ret$0);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_0 = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value_0 = AnimatedVisibilityImpl$lambda_0;
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      AnimatedEnterExitImpl(transition, visible, tmp_0, enter, exit, tmp_2, null, mutableTransform_0._v, content, $composer_0, 196608 | 14 & $dirty | 112 & $dirty | 7168 & $dirty | 57344 & $dirty | 29360128 & $dirty << 6 | 234881024 & $dirty << 6, 64);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AnimatedVisibilityImpl$lambda_1(transition, visible, modifier, enter, exit, mutableTransform_0, content, $changed, $default));
    }
  }
  var static_init_called;
  function static_init() {
    if (static_init_called)
      return Unit_getInstance();
    static_init_called = true;
    EnterExitState_PreEnter_instance = new EnterExitState('PreEnter', 0);
    EnterExitState_Visible_instance = new EnterExitState('Visible', 1);
    EnterExitState_PostExit_instance = new EnterExitState('PostExit', 2);
  }
  var EnterExitState_PreEnter_instance;
  var EnterExitState_Visible_instance;
  var EnterExitState_PostExit_instance;
  function values() {
    static_init();
    return [EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance()];
  }
  function valueOf(value) {
    static_init();
    switch (value) {
      case 'PreEnter':
        return EnterExitState_PreEnter_getInstance();
      case 'Visible':
        return EnterExitState_Visible_getInstance();
      case 'PostExit':
        return EnterExitState_PostExit_getInstance();
      default:
        THROW_IAE('No enum constant androidx.compose.animation.EnterExitState.' + value);
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
  function EnterExitState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AnimatedEnterExitImpl(transition, visible, modifier, enter, exit, shouldDisposeBlock, onLookaheadMeasured, mutableTransformData, content, $composer, $changed, $default) {
    var onLookaheadMeasured_0 = {_v: onLookaheadMeasured};
    var mutableTransformData_0 = {_v: mutableTransformData};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1310802509);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(transition) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(visible) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(enter) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(exit) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(shouldDisposeBlock) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ((($changed & 2097152) === 0 ? $composer_0.changed_ga7h3f_k$(onLookaheadMeasured_0._v) : $composer_0.changedInstance_s1wkiy_k$(onLookaheadMeasured_0._v)) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(mutableTransformData_0._v) ? 8388608 : 4194304);
    if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 67108864 : 33554432);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 38347923) === 38347922), $dirty & 1)) {
      if (!(($default & 64) === 0)) {
        onLookaheadMeasured_0._v = null;
      }
      if (!(($default & 128) === 0)) {
        mutableTransformData_0._v = null;
      }
      var localPendingTargetState = transition.get_pendingTargetState_ogufoy_k$();
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value = mutableStateOf(false);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var hasBeenPending$delegate = tmp;
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value_0 = AnimatedEnterExitImpl$lambda_1(hasBeenPending$delegate);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_0 = value_0;
      } else {
        tmp_0 = it_0;
      }
      var tmp$ret$4 = tmp_0;
      DeferredTransitionCleanupEffect(transition, tmp$ret$4, $composer_0, 48 | 14 & $dirty);
      if (!(localPendingTargetState == null) && visible(localPendingTargetState)) {
        AnimatedEnterExitImpl$lambda_0(hasBeenPending$delegate, true);
      }
      if (visible(transition.get_targetState_kri3mx_k$()) || visible(transition.get_currentState_snihnl_k$()) || (!(localPendingTargetState == null) && visible(localPendingTargetState)) || (AnimatedEnterExitImpl$lambda(hasBeenPending$delegate) && !equals(transition.get_currentState_snihnl_k$(), transition.get_targetState_kri3mx_k$())) || transition.get_isSeeking_vjb393_k$() || transition.get_hasInitialValueAnimations_mdjdrh_k$()) {
        $composer_0.startReplaceGroup_5hh8aj_k$(-273709037);
        // Inline function 'androidx.compose.animation.core.createChildTransition' call
        var $changed_0 = 48 | 14 & $dirty;
        var label = 'EnterExitTransition';
        var $composer_1 = $composer_0;
        if (!((0 & 1) === 0))
          label = 'ChildTransition';
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = ($changed_0 & 14 ^ 6) > 4 && $composer_1.changed_ga7h3f_k$(transition) || ($changed_0 & 6) === 4;
        // Inline function 'kotlin.let' call
        var it_1 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it_1 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          var value_1 = transition.get_currentState_snihnl_k$();
          $composer_1.updateRememberedValue_l1wh71_k$(value_1);
          tmp_1 = value_1;
        } else {
          tmp_1 = it_1;
        }
        var initialParentState = tmp_1;
        var tmp0 = transition.get_isSeeking_vjb393_k$() ? transition.get_currentState_snihnl_k$() : initialParentState;
        var $changed_1 = 112 & $changed_0 >> 3;
        var $composer_2 = $composer_1;
        $composer_2.startReplaceGroup_5hh8aj_k$(2016262395);
        var tmp0_0 = targetEnterExit(transition, visible, tmp0, $composer_2, 14 & $dirty | 112 & $dirty | 896 & $changed_1 << 6);
        $composer_2.endReplaceGroup_ek144q_k$();
        var initialState = tmp0_0;
        var tmp0_1 = transition.get_targetState_kri3mx_k$();
        var $changed_2 = 112 & $changed_0 >> 3;
        var $composer_3 = $composer_1;
        $composer_3.startReplaceGroup_5hh8aj_k$(2016262395);
        var tmp0_2 = targetEnterExit(transition, visible, tmp0_1, $composer_3, 14 & $dirty | 112 & $dirty | 896 & $changed_2 << 6);
        $composer_3.endReplaceGroup_ek144q_k$();
        var targetState = tmp0_2;
        var childTransition = createChildTransitionInternal(transition, initialState, targetState, label, $composer_1, 14 & $changed_0 | 7168 & $changed_0 << 6);
        if (!transition.get_isSeeking_vjb393_k$()) {
          $composer_1.startReplaceGroup_5hh8aj_k$(782386797);
          var tmp0_safe_receiver = transition.get_pendingTargetState_ogufoy_k$();
          var tmp_2;
          if (tmp0_safe_receiver == null) {
            $composer_1.startReplaceGroup_5hh8aj_k$(782437481);
            $composer_1.endReplaceGroup_ek144q_k$();
            tmp_2 = null;
          } else {
            $composer_1.startReplaceGroup_5hh8aj_k$(782437482);
            // Inline function 'kotlin.let' call
            var $changed_3 = 112 & $changed_0 >> 3;
            var $composer_4 = $composer_1;
            $composer_4.startReplaceGroup_5hh8aj_k$(2016262395);
            var tmp0_3 = targetEnterExit(transition, visible, tmp0_safe_receiver, $composer_4, 14 & $dirty | 112 & $dirty | 896 & $changed_3 << 6);
            $composer_4.endReplaceGroup_ek144q_k$();
            $composer_1.endReplaceGroup_ek144q_k$();
            tmp_2 = tmp0_3;
          }
          var pendingTargetState = tmp_2;
          childTransition.updatePendingTarget_co8jy3_k$(pendingTargetState);
          $composer_1.endReplaceGroup_ek144q_k$();
        } else {
          $composer_1.startReplaceGroup_5hh8aj_k$(782538635);
          $composer_1.endReplaceGroup_ek144q_k$();
        }
        var childTransition_0 = childTransition;
        var activeEnter = trackActiveEnter(childTransition_0, enter, $composer_0, 112 & $dirty >> 6);
        var activeExit = trackActiveExit(childTransition_0, exit, $composer_0, 112 & $dirty >> 9);
        var shouldDisposeBlockUpdated$delegate = rememberUpdatedState(shouldDisposeBlock, $composer_0, 14 & $dirty >> 15);
        var tmp_3 = shouldDisposeBlock(childTransition_0.get_currentState_snihnl_k$(), childTransition_0.get_targetState_kri3mx_k$());
        var tmp0_4 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = !!($composer_0.changed_ga7h3f_k$(childTransition_0) | $composer_0.changed_ga7h3f_k$(shouldDisposeBlockUpdated$delegate));
        // Inline function 'kotlin.let' call
        var it_2 = tmp0_4.rememberedValue_4dg93v_k$();
        var tmp_4;
        if (invalid_0 || it_2 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          var value_2 = AnimatedEnterExitImpl$slambda_0(childTransition_0, shouldDisposeBlockUpdated$delegate, null);
          tmp0_4.updateRememberedValue_l1wh71_k$(value_2);
          tmp_4 = value_2;
        } else {
          tmp_4 = it_2;
        }
        var tmp$ret$18 = tmp_4;
        var shouldDisposeAfterExit$delegate = produceState(tmp_3, tmp$ret$18, $composer_0, 0);
        if (!get_exitFinished(childTransition_0) || !AnimatedEnterExitImpl$lambda_3(shouldDisposeAfterExit$delegate)) {
          $composer_0.startReplaceGroup_5hh8aj_k$(-272022668);
          var tmp0_5 = $composer_0;
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_1 = ($dirty & 14) === 4;
          // Inline function 'kotlin.let' call
          var it_3 = tmp0_5.rememberedValue_4dg93v_k$();
          var tmp_5;
          if (invalid_1 || it_3 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
            var value_3 = new AnimatedVisibilityScopeImpl(childTransition_0);
            tmp0_5.updateRememberedValue_l1wh71_k$(value_3);
            tmp_5 = value_3;
          } else {
            tmp_5 = it_3;
          }
          var scope = tmp_5;
          scope.sharedMutableTransformState_1.set_mutableData_q5fgnw_k$(mutableTransformData_0._v);
          var tmp_6 = createModifier(childTransition_0, activeEnter, activeExit, false, null, scope.sharedMutableTransformState_1, 'Built-in', $composer_0, 1575936, 8);
          var tmp_7;
          if (!(onLookaheadMeasured_0._v == null)) {
            $composer_0.startReplaceGroup_5hh8aj_k$(-271239112);
            var tmp_8 = Companion_getInstance_0();
            var tmp0_6 = $composer_0;
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid_2 = ($dirty & 3670016) === 1048576 || (!(($dirty & 2097152) === 0) && $composer_0.changedInstance_s1wkiy_k$(onLookaheadMeasured_0._v));
            // Inline function 'kotlin.let' call
            var it_4 = tmp0_6.rememberedValue_4dg93v_k$();
            var tmp_9;
            if (invalid_2 || it_4 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
              var value_4 = AnimatedEnterExitImpl$lambda_4(onLookaheadMeasured_0);
              tmp0_6.updateRememberedValue_l1wh71_k$(value_4);
              tmp_9 = value_4;
            } else {
              tmp_9 = it_4;
            }
            var tmp$ret$26 = tmp_9;
            var tmp0_group = layout(tmp_8, tmp$ret$26);
            $composer_0.endReplaceGroup_ek144q_k$();
            tmp_7 = tmp0_group;
          } else {
            $composer_0.startReplaceGroup_5hh8aj_k$(-1255657861);
            $composer_0.endReplaceGroup_ek144q_k$();
            tmp_7 = Companion_getInstance_0();
          }
          var tmp0_7 = modifier.then_g5qrxq_k$(tmp_6.then_g5qrxq_k$(tmp_7));
          // Inline function 'androidx.compose.runtime.cache' call
          var this_2 = $composer_0;
          // Inline function 'kotlin.let' call
          var it_5 = this_2.rememberedValue_4dg93v_k$();
          var tmp_10;
          if (false || it_5 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
            var value_5 = new AnimatedEnterExitMeasurePolicy(scope);
            this_2.updateRememberedValue_l1wh71_k$(value_5);
            tmp_10 = value_5;
          } else {
            tmp_10 = it_5;
          }
          var tmp2 = tmp_10;
          // Inline function 'androidx.compose.ui.layout.Layout' call
          var modifier_0 = tmp0_7;
          var $composer_5 = $composer_0;
          if (!((0 & 2) === 0))
            modifier_0 = Companion_getInstance_0();
          var compositeKeyHash = get_currentCompositeKeyHashCode($composer_5, 0).hashCode();
          var localMap = $composer_5.get_currentCompositionLocalMap_fmcf79_k$();
          var materialized = materialize($composer_5, modifier_0);
          var tmp0_8 = Companion_getInstance_2().get_Constructor_f7ieep_k$();
          // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
          var $composer_6 = $composer_5;
          var tmp_11 = $composer_6.get_applier_bupu8u_k$();
          if (!isInterface(tmp_11, Applier)) {
            invalidApplier();
          }
          $composer_6.startReusableNode_jjgeyp_k$();
          if ($composer_6.get_inserting_25mlsw_k$()) {
            $composer_6.createNode_ahrd54_k$(tmp0_8);
          } else {
            $composer_6.useNode_io5s9l_k$();
          }
          var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_6);
          Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp2, Companion_getInstance_2().get_SetMeasurePolicy_on6ujt_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_2().get_SetResolvedCompositionLocals_rc2u9t_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_2().get_SetCompositeKeyHash_n8lgg1_k$());
          Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_2().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
          Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_2().get_SetModifier_6tz580_k$());
          var $composer_7 = $composer_6;
          content(scope, $composer_7, 112 & $dirty >> 21);
          $composer_6.endNode_3m0yfn_k$();
          $composer_0.endReplaceGroup_ek144q_k$();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(-270520625);
          $composer_0.endReplaceGroup_ek144q_k$();
        }
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(-270514673);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(AnimatedEnterExitImpl$lambda_5(transition, visible, modifier, enter, exit, shouldDisposeBlock, onLookaheadMeasured_0, mutableTransformData_0, content, $changed, $default));
    }
  }
  function OnLookaheadMeasured() {
  }
  function targetEnterExit(_this__u8e3s4, visible, targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startMovableGroup_clfloq_k$(-422486566, _this__u8e3s4);
    var tmp;
    if (_this__u8e3s4.get_isSeeking_vjb393_k$()) {
      $composer_0.startReplaceGroup_5hh8aj_k$(-212166497);
      $composer_0.endReplaceGroup_ek144q_k$();
      var tmp_0;
      if (visible(targetState)) {
        tmp_0 = EnterExitState_Visible_getInstance();
      } else {
        var tmp_1;
        if (visible(_this__u8e3s4.get_currentState_snihnl_k$())) {
          tmp_1 = EnterExitState_PostExit_getInstance();
        } else {
          tmp_1 = EnterExitState_PreEnter_getInstance();
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(-211886815);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (false || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value = mutableStateOf(false);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var hasBeenVisible = tmp_2;
      var localPendingTargetState = _this__u8e3s4.get_pendingTargetState_ogufoy_k$();
      if (visible(_this__u8e3s4.get_currentState_snihnl_k$()) || (!(localPendingTargetState == null) && visible(localPendingTargetState))) {
        hasBeenVisible.set_value_v1vabv_k$(true);
      }
      var tmp_3;
      if (visible(targetState)) {
        tmp_3 = EnterExitState_Visible_getInstance();
      } else if (!(localPendingTargetState == null) && visible(localPendingTargetState)) {
        tmp_3 = EnterExitState_PreEnter_getInstance();
      } else if (hasBeenVisible.get_value_j01efc_k$()) {
        tmp_3 = EnterExitState_PostExit_getInstance();
      } else {
        tmp_3 = EnterExitState_PreEnter_getInstance();
      }
      var tmp2_group = tmp_3;
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp = tmp2_group;
    }
    var tmp1 = tmp;
    $composer_0.endMovableGroup_kd2hcs_k$();
    return tmp1;
  }
  function get_exitFinished(_this__u8e3s4) {
    return _this__u8e3s4.get_currentState_snihnl_k$().equals(EnterExitState_PostExit_getInstance()) && _this__u8e3s4.get_targetState_kri3mx_k$().equals(EnterExitState_PostExit_getInstance());
  }
  function AnimatedVisibilityScopeImpl(transition) {
    this.transition_1 = transition;
    this.targetSize_1 = mutableStateOf(new IntSize(Companion_getInstance_3().get_Zero_9we0a6_k$()));
    this.sharedMutableTransformState_1 = new SharedMutableTransformState();
  }
  protoOf(AnimatedVisibilityScopeImpl).set_transition_3a2emy_k$ = function (_set____db54di) {
    this.transition_1 = _set____db54di;
  };
  protoOf(AnimatedVisibilityScopeImpl).get_transition_mcca1q_k$ = function () {
    return this.transition_1;
  };
  protoOf(AnimatedVisibilityScopeImpl).get_targetSize_7bn39k_k$ = function () {
    return this.targetSize_1;
  };
  protoOf(AnimatedVisibilityScopeImpl).get_sharedMutableTransformState_jmqwqy_k$ = function () {
    return this.sharedMutableTransformState_1;
  };
  function AnimatedEnterExitMeasurePolicy$measure$lambda($placeables) {
    return function ($this$layout) {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = $placeables;
      var inductionVariable = 0;
      var last = this_0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.get_c1px32_k$(index);
          $this$layout.place$default_61faqz_k$(item, 0, 0);
        }
         while (inductionVariable <= last);
      return Unit_getInstance();
    };
  }
  function AnimatedEnterExitMeasurePolicy(scope) {
    this.scope_1 = scope;
    this.hasLookaheadOccurred_1 = false;
  }
  protoOf(AnimatedEnterExitMeasurePolicy).get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).set_hasLookaheadOccurred_d76kgb_k$ = function (_set____db54di) {
    this.hasLookaheadOccurred_1 = _set____db54di;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).get_hasLookaheadOccurred_nov622_k$ = function () {
    return this.hasLookaheadOccurred_1;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).measure_xg9b01_k$ = function (_this__u8e3s4, measurables, constraints) {
    var maxWidth = 0;
    var maxHeight = 0;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var target = ArrayList_init_$Create$(measurables.get_size_woubt6_k$());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = measurables.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = measurables.get_c1px32_k$(index);
        // Inline function 'kotlin.apply' call
        var this_0 = item.measure_4dmfk1_k$(constraints);
        var tmp0 = maxWidth;
        // Inline function 'kotlin.math.max' call
        var b = this_0.get_width_j0q4yl_k$();
        maxWidth = Math.max(tmp0, b);
        var tmp0_0 = maxHeight;
        // Inline function 'kotlin.math.max' call
        var b_0 = this_0.get_height_e7t92o_k$();
        maxHeight = Math.max(tmp0_0, b_0);
        // Inline function 'kotlin.collections.plusAssign' call
        target.add_utx5q5_k$(this_0);
      }
       while (inductionVariable <= last);
    var placeables = target;
    if (_this__u8e3s4.get_isLookingAhead_2057g1_k$()) {
      this.hasLookaheadOccurred_1 = true;
      var tmp0_1 = maxWidth;
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = maxHeight;
      var tmp$ret$10 = bitwiseOr(shiftLeft(fromInt(tmp0_1), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$9 = _IntSize___init__impl__emcjft(tmp$ret$10);
      this.scope_1.targetSize_1.set_value_v1vabv_k$(new IntSize(tmp$ret$9));
    } else if (!this.hasLookaheadOccurred_1) {
      var tmp0_2 = maxWidth;
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2_0 = maxHeight;
      var tmp$ret$12 = bitwiseOr(shiftLeft(fromInt(tmp0_2), 32), bitwiseAnd(fromInt(val2_0), new Long(-1, 0)));
      var tmp$ret$11 = _IntSize___init__impl__emcjft(tmp$ret$12);
      this.scope_1.targetSize_1.set_value_v1vabv_k$(new IntSize(tmp$ret$11));
    }
    var tmp = maxWidth;
    var tmp_0 = maxHeight;
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp, tmp_0, VOID, AnimatedEnterExitMeasurePolicy$measure$lambda(placeables));
  };
  protoOf(AnimatedEnterExitMeasurePolicy).minIntrinsicWidth_dwfcse_k$ = function (_this__u8e3s4, measurables, height) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrDefault' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var maxValue = measurables.get_c1px32_k$(0).minIntrinsicWidth_jyhjuj_k$(height);
      var inductionVariable = 1;
      var last = get_lastIndex(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var v = measurables.get_c1px32_k$(i).minIntrinsicWidth_jyhjuj_k$(height);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    return tmp$ret$0;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).minIntrinsicHeight_xlhgwn_k$ = function (_this__u8e3s4, measurables, width) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrDefault' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var maxValue = measurables.get_c1px32_k$(0).minIntrinsicHeight_p2a4ou_k$(width);
      var inductionVariable = 1;
      var last = get_lastIndex(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var v = measurables.get_c1px32_k$(i).minIntrinsicHeight_p2a4ou_k$(width);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    return tmp$ret$0;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).maxIntrinsicWidth_cx7ze4_k$ = function (_this__u8e3s4, measurables, height) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrDefault' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var maxValue = measurables.get_c1px32_k$(0).maxIntrinsicWidth_b8umbx_k$(height);
      var inductionVariable = 1;
      var last = get_lastIndex(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var v = measurables.get_c1px32_k$(i).maxIntrinsicWidth_b8umbx_k$(height);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    return tmp$ret$0;
  };
  protoOf(AnimatedEnterExitMeasurePolicy).maxIntrinsicHeight_3a4xm1_k$ = function (_this__u8e3s4, measurables, width) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastMaxOfOrDefault' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var maxValue = measurables.get_c1px32_k$(0).maxIntrinsicHeight_b0krtc_k$(width);
      var inductionVariable = 1;
      var last = get_lastIndex(measurables);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var v = measurables.get_c1px32_k$(i).maxIntrinsicHeight_b0krtc_k$(width);
          if (compareTo(v, maxValue) > 0)
            maxValue = v;
        }
         while (!(i === last));
      tmp$ret$0 = maxValue;
    }
    return tmp$ret$0;
  };
  function AnimatedVisibility$lambda(it) {
    return it;
  }
  function AnimatedVisibility$lambda_0($this_AnimatedVisibility, $visible, $modifier, $enter, $exit, $label, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedVisibility($this_AnimatedVisibility, $visible, $modifier._v, $enter._v, $exit._v, $label._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function AnimatedVisibility$lambda_1(it) {
    return it;
  }
  function AnimatedVisibility$lambda_2($this_AnimatedVisibility, $visible, $modifier, $enter, $exit, $label, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedVisibility_0($this_AnimatedVisibility, $visible, $modifier._v, $enter._v, $exit._v, $label._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function AnimatedVisibilityImpl$lambda$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.place$default_61faqz_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function AnimatedVisibilityImpl$lambda($visible, $transition) {
    return function ($this$layout, measurable, constraints) {
      var placeable = measurable.measure_4dmfk1_k$(constraints.value_1);
      var tmp;
      if ($this$layout.get_isLookingAhead_2057g1_k$() && !$visible($transition.get_targetState_kri3mx_k$())) {
        tmp = Companion_getInstance_3().get_Zero_9we0a6_k$();
      } else {
        var tmp0 = placeable.get_width_j0q4yl_k$();
        // Inline function 'androidx.compose.ui.unit.IntSize' call
        // Inline function 'androidx.compose.ui.util.packInts' call
        var val2 = placeable.get_height_e7t92o_k$();
        var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
        tmp = _IntSize___init__impl__emcjft(tmp$ret$1);
      }
      var _destruct__k2r9zo = tmp;
      // Inline function 'androidx.compose.ui.unit.IntSize.component1' call
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(_destruct__k2r9zo);
      var w = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.component2' call
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(_destruct__k2r9zo);
      var h = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      return $this$layout.layout$default_n19e5l_k$(w, h, VOID, AnimatedVisibilityImpl$lambda$lambda(placeable));
    };
  }
  function AnimatedVisibilityImpl$lambda_0(current, target) {
    return current.equals(target) && target.equals(EnterExitState_PostExit_getInstance());
  }
  function AnimatedVisibilityImpl$lambda_1($transition, $visible, $modifier, $enter, $exit, $mutableTransform, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedVisibilityImpl($transition, $visible, $modifier, $enter, $exit, $mutableTransform._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function AnimatedEnterExitImpl$lambda($hasBeenPending$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('hasBeenPending', KMutableProperty0, true);
    return $hasBeenPending$delegate.get_value_j01efc_k$();
  }
  function AnimatedEnterExitImpl$lambda_0($hasBeenPending$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('hasBeenPending', KMutableProperty0, true);
    $hasBeenPending$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function AnimatedEnterExitImpl$lambda_1($hasBeenPending$delegate) {
    return function () {
      AnimatedEnterExitImpl$lambda_0($hasBeenPending$delegate, false);
      return Unit_getInstance();
    };
  }
  function AnimatedEnterExitImpl$lambda_2($shouldDisposeBlockUpdated$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('shouldDisposeBlockUpdated', KProperty0, false);
    return $shouldDisposeBlockUpdated$delegate.get_value_j01efc_k$();
  }
  function AnimatedEnterExitImpl$lambda_3($shouldDisposeAfterExit$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('shouldDisposeAfterExit', KProperty0, false);
    return $shouldDisposeAfterExit$delegate.get_value_j01efc_k$();
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).emit_t92u1f_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function AnimatedEnterExitImpl$slambda$lambda($childTransition) {
    return function () {
      return get_exitFinished($childTransition);
    };
  }
  function AnimatedEnterExitImpl$slambda$slambda($this_produceState, $childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    this.$this_produceState_1 = $this_produceState;
    this.$childTransition_1 = $childTransition;
    this.$shouldDisposeBlockUpdated$delegate_1 = $shouldDisposeBlockUpdated$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedEnterExitImpl$slambda$slambda).invoke_f29lti_k$ = function (it, $completion) {
    var tmp = this.create_vh5neu_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AnimatedEnterExitImpl$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_f29lti_k$((!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedEnterExitImpl$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          var tmp_0;
          if (this.it_1) {
            tmp_0 = AnimatedEnterExitImpl$lambda_2(this.$shouldDisposeBlockUpdated$delegate_1)(this.$childTransition_1.get_currentState_snihnl_k$(), this.$childTransition_1.get_targetState_kri3mx_k$());
          } else {
            tmp_0 = false;
          }
          this.$this_produceState_1.set_value_v1vabv_k$(tmp_0);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(AnimatedEnterExitImpl$slambda$slambda).create_vh5neu_k$ = function (it, completion) {
    var i = new AnimatedEnterExitImpl$slambda$slambda(this.$this_produceState_1, this.$childTransition_1, this.$shouldDisposeBlockUpdated$delegate_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(AnimatedEnterExitImpl$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_vh5neu_k$((!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE(), completion);
  };
  function AnimatedEnterExitImpl$slambda$slambda_0($this_produceState, $childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    var i = new AnimatedEnterExitImpl$slambda$slambda($this_produceState, $childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.invoke_f29lti_k$(it, $completion);
    }, 1);
  }
  function AnimatedEnterExitImpl$slambda($childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    this.$childTransition_1 = $childTransition;
    this.$shouldDisposeBlockUpdated$delegate_1 = $shouldDisposeBlockUpdated$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedEnterExitImpl$slambda).invoke_2og0l1_k$ = function ($this$produceState, $completion) {
    var tmp = this.create_i0ekpj_k$($this$produceState, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AnimatedEnterExitImpl$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_2og0l1_k$((!(p1 == null) ? isInterface(p1, ProduceStateScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedEnterExitImpl$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = snapshotFlow(AnimatedEnterExitImpl$slambda$lambda(this.$childTransition_1));
            var tmp_1 = AnimatedEnterExitImpl$slambda$slambda_0(this.$this$produceState_1, this.$childTransition_1, this.$shouldDisposeBlockUpdated$delegate_1, null);
            suspendResult = tmp_0.collect_aksokr_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(AnimatedEnterExitImpl$slambda).create_i0ekpj_k$ = function ($this$produceState, completion) {
    var i = new AnimatedEnterExitImpl$slambda(this.$childTransition_1, this.$shouldDisposeBlockUpdated$delegate_1, completion);
    i.$this$produceState_1 = $this$produceState;
    return i;
  };
  protoOf(AnimatedEnterExitImpl$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_i0ekpj_k$((!(value == null) ? isInterface(value, ProduceStateScope) : false) ? value : THROW_CCE(), completion);
  };
  function AnimatedEnterExitImpl$slambda_0($childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    var i = new AnimatedEnterExitImpl$slambda($childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation);
    return constructCallableReference(function ($this$produceState, $completion) {
      return i.invoke_2og0l1_k$($this$produceState, $completion);
    }, 1);
  }
  function AnimatedEnterExitImpl$lambda$lambda($$this$run) {
    return function ($this$layout) {
      $this$layout.place$default_61faqz_k$($$this$run, 0, 0);
      return Unit_getInstance();
    };
  }
  function AnimatedEnterExitImpl$lambda_4($onLookaheadMeasured) {
    return function ($this$layout, measurable, constraints) {
      // Inline function 'kotlin.run' call
      var $this$run = measurable.measure_4dmfk1_k$(constraints.value_1);
      if ($this$layout.get_isLookingAhead_2057g1_k$()) {
        var tmp = $onLookaheadMeasured._v;
        var tmp0 = $this$run.get_width_j0q4yl_k$();
        // Inline function 'androidx.compose.ui.unit.IntSize' call
        // Inline function 'androidx.compose.ui.util.packInts' call
        var val2 = $this$run.get_height_e7t92o_k$();
        var tmp$ret$3 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
        var tmp$ret$2 = _IntSize___init__impl__emcjft(tmp$ret$3);
        tmp.invoke_53rnn3_k$(tmp$ret$2);
      }
      var tmp_0 = $this$run.get_width_j0q4yl_k$();
      var tmp_1 = $this$run.get_height_e7t92o_k$();
      return $this$layout.layout$default_n19e5l_k$(tmp_0, tmp_1, VOID, AnimatedEnterExitImpl$lambda$lambda($this$run));
    };
  }
  function AnimatedEnterExitImpl$lambda_5($transition, $visible, $modifier, $enter, $exit, $shouldDisposeBlock, $onLookaheadMeasured, $mutableTransformData, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedEnterExitImpl($transition, $visible, $modifier, $enter, $exit, $shouldDisposeBlock, $onLookaheadMeasured._v, $mutableTransformData._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function EnterExitState_PreEnter_getInstance() {
    static_init();
    return EnterExitState_PreEnter_instance;
  }
  function EnterExitState_Visible_getInstance() {
    static_init();
    return EnterExitState_Visible_instance;
  }
  function EnterExitState_PostExit_getInstance() {
    static_init();
    return EnterExitState_PostExit_instance;
  }
  function get_InvalidSize() {
    _init_properties_AnimationModifier_kt__u6vzef();
    return InvalidSize;
  }
  var InvalidSize;
  var androidx_compose_animation_SizeAnimationModifierNode_AnimData$stable;
  var androidx_compose_animation_LayoutModifierNodeWithPassThroughIntrinsics$stable;
  function LayoutModifierNodeWithPassThroughIntrinsics() {
    Node.call(this);
  }
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).minIntrinsicWidth_nsvhwg_k$ = function (_this__u8e3s4, measurable, height) {
    return measurable.minIntrinsicWidth_jyhjuj_k$(height);
  };
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).minIntrinsicHeight_xt6ly1_k$ = function (_this__u8e3s4, measurable, width) {
    return measurable.minIntrinsicHeight_p2a4ou_k$(width);
  };
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).maxIntrinsicWidth_epsb1u_k$ = function (_this__u8e3s4, measurable, height) {
    return measurable.maxIntrinsicWidth_b8umbx_k$(height);
  };
  protoOf(LayoutModifierNodeWithPassThroughIntrinsics).maxIntrinsicHeight_nrifyt_k$ = function (_this__u8e3s4, measurable, width) {
    return measurable.maxIntrinsicHeight_b0krtc_k$(width);
  };
  function get_isValid(_this__u8e3s4) {
    _init_properties_AnimationModifier_kt__u6vzef();
    return !equals(new IntSize(_this__u8e3s4), new IntSize(get_InvalidSize()));
  }
  var properties_initialized_AnimationModifier_kt_fvv7xx;
  function _init_properties_AnimationModifier_kt__u6vzef() {
    if (!properties_initialized_AnimationModifier_kt_fvv7xx) {
      properties_initialized_AnimationModifier_kt_fvv7xx = true;
      var tmp0 = -2147483648;
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = -2147483648;
      var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      InvalidSize = _IntSize___init__impl__emcjft(tmp$ret$1);
      androidx_compose_animation_SizeAnimationModifierNode_AnimData$stable = 8;
      androidx_compose_animation_LayoutModifierNodeWithPassThroughIntrinsics$stable = androidx_compose_ui_Modifier_Node$stableprop_getter();
    }
  }
  function get_DefaultBoundsAnimation() {
    _init_properties_BoundsAnimation_kt__z215v();
    return DefaultBoundsAnimation;
  }
  var DefaultBoundsAnimation;
  var androidx_compose_animation_BoundsAnimation$stable;
  function _set_animation__pan2kh($this, _set____db54di) {
    var tmp0 = $this.animation$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = BoundsAnimation$_get_animation_$ref_tlzlmh_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('animation', 1, tmp, tmp_0, BoundsAnimation$_set_animation_$ref_ee8345_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_boundsTransform__qqq4ha($this, _set____db54di) {
    var tmp0 = $this.boundsTransform$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = BoundsAnimation$_get_boundsTransform_$ref_5heh6c_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('boundsTransform', 1, tmp, tmp_0, BoundsAnimation$_set_boundsTransform_$ref_7tbrq0_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_boundsTransform__y6npza($this) {
    var tmp0 = $this.boundsTransform$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = BoundsAnimation$_get_boundsTransform_$ref_5heh6c();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('boundsTransform', 1, tmp, tmp_0, BoundsAnimation$_set_boundsTransform_$ref_7tbrq0());
    return tmp0.get_value_j01efc_k$();
  }
  function _get_transitionSpecLambda__ti4oks($this) {
    return $this.transitionSpecLambda_1;
  }
  function _set_currentBoundsForLambda__pg4n1n($this, _set____db54di) {
    $this.currentBoundsForLambda_1 = _set____db54di;
  }
  function _get_currentBoundsForLambda__3716lz($this) {
    return $this.currentBoundsForLambda_1;
  }
  function _set_targetBoundsForLambda__cx8n6t($this, _set____db54di) {
    $this.targetBoundsForLambda_1 = _set____db54di;
  }
  function _get_targetBoundsForLambda__j2uzmh($this) {
    return $this.targetBoundsForLambda_1;
  }
  function _get_targetValueByStateLambda__ifvss6($this) {
    return $this.targetValueByStateLambda_1;
  }
  function BoundsAnimation$_get_animation_$ref_tlzlmh() {
    return constructCallableReference(function (p0) {
      return p0.get_animation_r0gd0b_k$();
    }, 1, 0, 'androidx.compose.animation/BoundsAnimation.animation.<get-animation>|<get-animation>(){}[0]');
  }
  function BoundsAnimation$_set_animation_$ref_ee8345() {
    return constructCallableReference(function (p0, p1) {
      _set_animation__pan2kh(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/BoundsAnimation.animation.<set-animation>|<set-animation>(androidx.compose.animation.core.Transition.DeferredAnimation<androidx.compose.ui.geometry.Rect,androidx.compose.animation.core.AnimationVector4D,kotlin.Boolean>){}[0]');
  }
  function BoundsAnimation$_get_animation_$ref_tlzlmh_0() {
    return constructCallableReference(function (p0) {
      return p0.get_animation_r0gd0b_k$();
    }, 1, 0, 'androidx.compose.animation/BoundsAnimation.animation.<get-animation>|<get-animation>(){}[0]');
  }
  function BoundsAnimation$_set_animation_$ref_ee8345_0() {
    return constructCallableReference(function (p0, p1) {
      _set_animation__pan2kh(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/BoundsAnimation.animation.<set-animation>|<set-animation>(androidx.compose.animation.core.Transition.DeferredAnimation<androidx.compose.ui.geometry.Rect,androidx.compose.animation.core.AnimationVector4D,kotlin.Boolean>){}[0]');
  }
  function BoundsAnimation$_get_boundsTransform_$ref_5heh6c() {
    return constructCallableReference(function (p0) {
      return _get_boundsTransform__y6npza(p0);
    }, 1, 0, 'androidx.compose.animation/BoundsAnimation.boundsTransform.<get-boundsTransform>|<get-boundsTransform>(){}[0]');
  }
  function BoundsAnimation$_set_boundsTransform_$ref_7tbrq0() {
    return constructCallableReference(function (p0, p1) {
      _set_boundsTransform__qqq4ha(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/BoundsAnimation.boundsTransform.<set-boundsTransform>|<set-boundsTransform>(androidx.compose.animation.BoundsTransform){}[0]');
  }
  function BoundsAnimation$_get_boundsTransform_$ref_5heh6c_0() {
    return constructCallableReference(function (p0) {
      return _get_boundsTransform__y6npza(p0);
    }, 1, 0, 'androidx.compose.animation/BoundsAnimation.boundsTransform.<get-boundsTransform>|<get-boundsTransform>(){}[0]');
  }
  function BoundsAnimation$_set_boundsTransform_$ref_7tbrq0_0() {
    return constructCallableReference(function (p0, p1) {
      _set_boundsTransform__qqq4ha(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/BoundsAnimation.boundsTransform.<set-boundsTransform>|<set-boundsTransform>(androidx.compose.animation.BoundsTransform){}[0]');
  }
  function BoundsAnimation$transitionSpecLambda$lambda(this$0) {
    return function (_this__u8e3s4) {
      return this$0.animationSpec_1;
    };
  }
  function BoundsAnimation$_get_animationState_$ref_pbhvr6() {
    return constructCallableReference(function (p0) {
      return p0.get_animationState_98s4ty_k$();
    }, 1, 0, 'androidx.compose.animation/BoundsAnimation.animationState.<get-animationState>|<get-animationState>(){}[0]');
  }
  function BoundsAnimation$_set_animationState_$ref_brqv3m() {
    return constructCallableReference(function (p0, p1) {
      p0.set_animationState_b8sgwb_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/BoundsAnimation.animationState.<set-animationState>|<set-animationState>(androidx.compose.runtime.State<androidx.compose.ui.geometry.Rect>?){}[0]');
  }
  function BoundsAnimation$_get_animationState_$ref_pbhvr6_0() {
    return constructCallableReference(function (p0) {
      return p0.get_animationState_98s4ty_k$();
    }, 1, 0, 'androidx.compose.animation/BoundsAnimation.animationState.<get-animationState>|<get-animationState>(){}[0]');
  }
  function BoundsAnimation$_set_animationState_$ref_brqv3m_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_animationState_b8sgwb_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/BoundsAnimation.animationState.<set-animationState>|<set-animationState>(androidx.compose.runtime.State<androidx.compose.ui.geometry.Rect>?){}[0]');
  }
  function BoundsAnimation$targetValueByStateLambda$lambda(this$0) {
    return function (it) {
      var tmp;
      if (it === this$0.transition_1.get_targetState_kri3mx_k$()) {
        tmp = ensureNotNull(this$0.targetBoundsForLambda_1);
      } else {
        tmp = ensureNotNull(this$0.currentBoundsForLambda_1);
      }
      return tmp;
    };
  }
  function BoundsAnimation(transitionScope, transition, animation, boundsTransform, momentumOffset) {
    this.transitionScope_1 = transitionScope;
    this.transition_1 = transition;
    this.momentumOffset_1 = momentumOffset;
    this.animation$delegate_1 = mutableStateOf(animation);
    this.boundsTransform$delegate_1 = mutableStateOf(boundsTransform);
    this.animationSpec_1 = get_DefaultBoundsAnimation();
    var tmp = this;
    tmp.transitionSpecLambda_1 = BoundsAnimation$transitionSpecLambda$lambda(this);
    this.animationState$delegate_1 = mutableStateOf(null);
    this.currentBoundsForLambda_1 = null;
    this.targetBoundsForLambda_1 = null;
    var tmp_0 = this;
    tmp_0.targetValueByStateLambda_1 = BoundsAnimation$targetValueByStateLambda$lambda(this);
  }
  protoOf(BoundsAnimation).get_transitionScope_6wk9w6_k$ = function () {
    return this.transitionScope_1;
  };
  protoOf(BoundsAnimation).get_transition_mcca1q_k$ = function () {
    return this.transition_1;
  };
  protoOf(BoundsAnimation).get_momentumOffset_fyqkks_k$ = function () {
    return this.momentumOffset_1;
  };
  protoOf(BoundsAnimation).get_animation_r0gd0b_k$ = function () {
    var tmp0 = this.animation$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = BoundsAnimation$_get_animation_$ref_tlzlmh();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('animation', 1, tmp, tmp_0, BoundsAnimation$_set_animation_$ref_ee8345());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(BoundsAnimation).updateAnimation_opighb_k$ = function (animation, boundsTransform) {
    if (!equals(this.get_animation_r0gd0b_k$(), animation)) {
      _set_animation__pan2kh(this, animation);
      this.set_animationState_b8sgwb_k$(null);
      this.animationSpec_1 = get_DefaultBoundsAnimation();
    }
    _set_boundsTransform__qqq4ha(this, boundsTransform);
  };
  protoOf(BoundsAnimation).get_isRunning_okmtn0_k$ = function () {
    var parent = this.transition_1;
    while (!(parent.get_parentTransition_svtbx4_k$() == null)) {
      parent = ensureNotNull(parent.get_parentTransition_svtbx4_k$());
    }
    return !equals(parent.get_currentState_snihnl_k$(), parent.get_targetState_kri3mx_k$());
  };
  protoOf(BoundsAnimation).set_animationSpec_fee48z_k$ = function (_set____db54di) {
    this.animationSpec_1 = _set____db54di;
  };
  protoOf(BoundsAnimation).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(BoundsAnimation).set_animationState_b8sgwb_k$ = function (_set____db54di) {
    var tmp0 = this.animationState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = BoundsAnimation$_get_animationState_$ref_pbhvr6_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('animationState', 1, tmp, tmp_0, BoundsAnimation$_set_animationState_$ref_brqv3m_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(BoundsAnimation).get_animationState_98s4ty_k$ = function () {
    var tmp0 = this.animationState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = BoundsAnimation$_get_animationState_$ref_pbhvr6();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('animationState', 1, tmp, tmp_0, BoundsAnimation$_set_animationState_$ref_brqv3m());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(BoundsAnimation).get_value_j01efc_k$ = function () {
    var tmp;
    if (this.transitionScope_1.get_isTransitionActive_t69j02_k$()) {
      var tmp0_safe_receiver = this.get_animationState_98s4ty_k$();
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_value_j01efc_k$();
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        var offset = this.momentumOffset_1().packedValue_1;
        var tmp_1;
        if (!equals(new Offset(offset), new Offset(Companion_getInstance_4().get_Zero_k6n73t_k$()))) {
          tmp_1 = tmp1_safe_receiver.translate_e972jg_k$(offset);
        } else {
          tmp_1 = tmp1_safe_receiver;
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(BoundsAnimation).animate_9bys7z_k$ = function (currentBounds, targetBounds, forcedBoundsTransform, forcedInitialValue, forcedInitialVelocity) {
    if (this.transitionScope_1.get_isTransitionActive_t69j02_k$()) {
      this.currentBoundsForLambda_1 = currentBounds;
      this.targetBoundsForLambda_1 = targetBounds;
      if (this.get_animationState_98s4ty_k$() == null) {
        var tmp = this;
        tmp.animationSpec_1 = (forcedBoundsTransform == null ? _get_boundsTransform__y6npza(this) : forcedBoundsTransform).createAnimationSpec_whg8mb_k$(currentBounds, targetBounds);
      }
      this.set_animationState_b8sgwb_k$(this.get_animation_r0gd0b_k$().animate_mgs5a2_k$(this.transitionSpecLambda_1, forcedInitialValue, forcedInitialVelocity, this.targetValueByStateLambda_1));
    }
  };
  protoOf(BoundsAnimation).animate$default_w99a01_k$ = function (currentBounds, targetBounds, forcedBoundsTransform, forcedInitialValue, forcedInitialVelocity, $super) {
    forcedBoundsTransform = forcedBoundsTransform === VOID ? null : forcedBoundsTransform;
    forcedInitialValue = forcedInitialValue === VOID ? null : forcedInitialValue;
    forcedInitialVelocity = forcedInitialVelocity === VOID ? null : forcedInitialVelocity;
    var tmp;
    if ($super === VOID) {
      this.animate_9bys7z_k$(currentBounds, targetBounds, forcedBoundsTransform, forcedInitialValue, forcedInitialVelocity);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.animate_9bys7z_k$.call(this, currentBounds, targetBounds, forcedBoundsTransform, forcedInitialValue, forcedInitialVelocity);
    }
    return tmp;
  };
  protoOf(BoundsAnimation).get_target_juba8q_k$ = function () {
    return this.transition_1.get_targetState_kri3mx_k$();
  };
  var properties_initialized_BoundsAnimation_kt_perd29;
  function _init_properties_BoundsAnimation_kt__z215v() {
    if (!properties_initialized_BoundsAnimation_kt_perd29) {
      properties_initialized_BoundsAnimation_kt_perd29 = true;
      DefaultBoundsAnimation = spring(VOID, 400.0, get_VisibilityThreshold(Companion_getInstance()));
      androidx_compose_animation_BoundsAnimation$stable = 8;
    }
  }
  function get_ColorToVector() {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return ColorToVector;
  }
  var ColorToVector;
  function get_VectorConverter_4(_this__u8e3s4) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return get_ColorToVector();
  }
  function ColorToVector$lambda(colorSpace) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var tmp = ColorToVector$lambda$lambda;
    return TwoWayConverter(tmp, ColorToVector$lambda$lambda_0(colorSpace));
  }
  function ColorToVector$lambda$lambda(color) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var _destruct__k2r9zo = Color__convert_impl_so5m8t(color.value_1, ColorSpaces_getInstance().get_Oklab_ierso8_k$());
    // Inline function 'androidx.compose.ui.graphics.Color.component1' call
    var l = _Color___get_red__impl__cwrsk6(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.graphics.Color.component2' call
    var a = _Color___get_green__impl__bta9rs(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.graphics.Color.component3' call
    var b = _Color___get_blue__impl__xwez13(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.graphics.Color.component4' call
    var alpha = _Color___get_alpha__impl__wcfyv1(_destruct__k2r9zo);
    return new AnimationVector4D(alpha, l, a, b);
  }
  function ColorToVector$lambda$lambda_0($colorSpace) {
    return function (vector) {
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_0 = vector.get_v2_kntnnf_k$();
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_1 = this_0 < 0.0 ? 0.0 : this_0;
      var tmp = this_1 > 1.0 ? 1.0 : this_1;
      var tmp0 = vector.get_v3_kntnne_k$();
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var minimumValue = -0.5;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_2 = tmp0 < minimumValue ? minimumValue : tmp0;
      var tmp_0 = this_2 > 0.5 ? 0.5 : this_2;
      var tmp0_0 = vector.get_v4_kntnnd_k$();
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var minimumValue_0 = -0.5;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_3 = tmp0_0 < minimumValue_0 ? minimumValue_0 : tmp0_0;
      var tmp_1 = this_3 > 0.5 ? 0.5 : this_3;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_4 = vector.get_v1_kntnng_k$();
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_5 = this_4 < 0.0 ? 0.0 : this_4;
      var tmp$ret$9 = this_5 > 1.0 ? 1.0 : this_5;
      return new Color_0(Color__convert_impl_so5m8t(Color(tmp, tmp_0, tmp_1, tmp$ret$9, ColorSpaces_getInstance().get_Oklab_ierso8_k$()), $colorSpace));
    };
  }
  var properties_initialized_ColorVectorConverter_kt_jaoojo;
  function _init_properties_ColorVectorConverter_kt__qncuxy() {
    if (!properties_initialized_ColorVectorConverter_kt_jaoojo) {
      properties_initialized_ColorVectorConverter_kt_jaoojo = true;
      ColorToVector = ColorToVector$lambda;
    }
  }
  function get_LocalLookaheadAnimationVisualDebugConfig() {
    _init_properties_CompositionLocals_kt__uo3k1s();
    var tmp0 = LocalLookaheadAnimationVisualDebugConfig$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('LocalLookaheadAnimationVisualDebugConfig', 0, tmp, _get_LocalLookaheadAnimationVisualDebugConfig_$ref_etgexa(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var LocalLookaheadAnimationVisualDebugConfig$delegate;
  function get_LocalLookaheadAnimationVisualDebugColor() {
    _init_properties_CompositionLocals_kt__uo3k1s();
    var tmp0 = LocalLookaheadAnimationVisualDebugColor$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('LocalLookaheadAnimationVisualDebugColor', 0, tmp, _get_LocalLookaheadAnimationVisualDebugColor_$ref_gcfeyl(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var LocalLookaheadAnimationVisualDebugColor$delegate;
  function LocalLookaheadAnimationVisualDebugConfig$delegate$lambda() {
    _init_properties_CompositionLocals_kt__uo3k1s();
    return staticCompositionLocalOf(LocalLookaheadAnimationVisualDebugConfig$delegate$lambda$lambda);
  }
  function LocalLookaheadAnimationVisualDebugConfig$delegate$lambda$lambda() {
    _init_properties_CompositionLocals_kt__uo3k1s();
    return new LookaheadAnimationVisualDebugConfig(false);
  }
  function _get_LocalLookaheadAnimationVisualDebugConfig_$ref_etgexa() {
    return constructCallableReference(function () {
      return get_LocalLookaheadAnimationVisualDebugConfig();
    }, 0, 0, 'androidx.compose.animation/LocalLookaheadAnimationVisualDebugConfig.<get-LocalLookaheadAnimationVisualDebugConfig>|<get-LocalLookaheadAnimationVisualDebugConfig>(){}[0]');
  }
  function LocalLookaheadAnimationVisualDebugColor$delegate$lambda() {
    _init_properties_CompositionLocals_kt__uo3k1s();
    return staticCompositionLocalOf(LocalLookaheadAnimationVisualDebugColor$delegate$lambda$lambda);
  }
  function LocalLookaheadAnimationVisualDebugColor$delegate$lambda$lambda() {
    _init_properties_CompositionLocals_kt__uo3k1s();
    return new Color_0(Companion_getInstance_5().get_Unspecified_j397pn_k$());
  }
  function _get_LocalLookaheadAnimationVisualDebugColor_$ref_gcfeyl() {
    return constructCallableReference(function () {
      return get_LocalLookaheadAnimationVisualDebugColor();
    }, 0, 0, 'androidx.compose.animation/LocalLookaheadAnimationVisualDebugColor.<get-LocalLookaheadAnimationVisualDebugColor>|<get-LocalLookaheadAnimationVisualDebugColor>(){}[0]');
  }
  var properties_initialized_CompositionLocals_kt_24dxlq;
  function _init_properties_CompositionLocals_kt__uo3k1s() {
    if (!properties_initialized_CompositionLocals_kt_24dxlq) {
      properties_initialized_CompositionLocals_kt_24dxlq = true;
      LocalLookaheadAnimationVisualDebugConfig$delegate = lazy(LocalLookaheadAnimationVisualDebugConfig$delegate$lambda);
      LocalLookaheadAnimationVisualDebugColor$delegate = lazy(LocalLookaheadAnimationVisualDebugColor$delegate$lambda);
    }
  }
  function set_testTimeSource(_set____db54di) {
    _init_properties_DeferredEnterExitTransition_kt__7tov7e();
    testTimeSource = _set____db54di;
  }
  function get_testTimeSource() {
    _init_properties_DeferredEnterExitTransition_kt__7tov7e();
    return testTimeSource;
  }
  var testTimeSource;
  function get_ModifierLocalSharedMutableTransformState() {
    _init_properties_DeferredEnterExitTransition_kt__7tov7e();
    return ModifierLocalSharedMutableTransformState;
  }
  var ModifierLocalSharedMutableTransformState;
  var androidx_compose_animation_MutableTransform$stable;
  var androidx_compose_animation_TransformScopeImpl$stable;
  var androidx_compose_animation_SharedMutableTransformState$stable;
  function MutableTransform(veilMatchParentSize, offsetVelocityProvider, block) {
    veilMatchParentSize = veilMatchParentSize === VOID ? false : veilMatchParentSize;
    offsetVelocityProvider = offsetVelocityProvider === VOID ? null : offsetVelocityProvider;
    block = block === VOID ? null : block;
    this.veilMatchParentSize_1 = veilMatchParentSize;
    this.offsetVelocityProvider_1 = offsetVelocityProvider;
    this.block_1 = block;
  }
  protoOf(MutableTransform).set_veilMatchParentSize_h85ekd_k$ = function (_set____db54di) {
    this.veilMatchParentSize_1 = _set____db54di;
  };
  protoOf(MutableTransform).get_veilMatchParentSize_y4d5ya_k$ = function () {
    return this.veilMatchParentSize_1;
  };
  protoOf(MutableTransform).set_offsetVelocityProvider_d8n1r4_k$ = function (_set____db54di) {
    this.offsetVelocityProvider_1 = _set____db54di;
  };
  protoOf(MutableTransform).get_offsetVelocityProvider_ar2r6f_k$ = function () {
    return this.offsetVelocityProvider_1;
  };
  protoOf(MutableTransform).set_block_1lzfd5_k$ = function (_set____db54di) {
    this.block_1 = _set____db54di;
  };
  protoOf(MutableTransform).get_block_1384cx_k$ = function () {
    return this.block_1;
  };
  protoOf(MutableTransform).update_i0bhck_k$ = function (block) {
    this.block_1 = block;
  };
  protoOf(MutableTransform).clear_fhabkm_k$ = function () {
    this.block_1 = null;
    this.veilMatchParentSize_1 = false;
    this.offsetVelocityProvider_1 = null;
  };
  function _get__isMutating__guytln($this) {
    return $this._isMutating_1;
  }
  function _set_isHandoffActive__aprn7t($this, _set____db54di) {
    var tmp0 = $this.isHandoffActive$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedMutableTransformState$_get_isHandoffActive_$ref_xizz8a_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isHandoffActive', 1, tmp, tmp_0, SharedMutableTransformState$_set_isHandoffActive_$ref_o7dtui_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_lastMutableData__avb0wb($this, _set____db54di) {
    $this.lastMutableData_1 = _set____db54di;
  }
  function _get_lastMutableData__kz18ev($this) {
    return $this.lastMutableData_1;
  }
  function _get_timeSource__i1au6b($this) {
    return $this.timeSource_1;
  }
  function _get_startTime__n7n9b6($this) {
    return $this.startTime_1;
  }
  function _get_currentMillis__126we($this) {
    var tmp0_safe_receiver = get_testTimeSource();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver();
    return tmp1_elvis_lhs == null ? _Duration___get_inWholeMilliseconds__impl__msfiry(ValueTimeMark__elapsedNow_impl_eonqvs($this.startTime_1)) : tmp1_elvis_lhs;
  }
  function _set_scaleVelocityTracker__y7lrie($this, _set____db54di) {
    $this.scaleVelocityTracker_1 = _set____db54di;
  }
  function _get_scaleVelocityTracker__k9j3i2($this) {
    return $this.scaleVelocityTracker_1;
  }
  function _set_offsetVelocityTracker__bb73ur($this, _set____db54di) {
    $this.offsetVelocityTracker_1 = _set____db54di;
  }
  function _get_offsetVelocityTracker__hgtgaf($this) {
    return $this.offsetVelocityTracker_1;
  }
  function trackScaleVelocity($this, value) {
    if ($this.scaleVelocityTracker_1 == null) {
      $this.scaleVelocityTracker_1 = VelocityTracker1D_init_$Create$(false);
    }
    var tmp0_safe_receiver = $this.scaleVelocityTracker_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.addDataPoint_z0nzrz_k$(_get_currentMillis__126we($this), value);
    }
  }
  function trackSlideVelocity($this, value) {
    if ($this.offsetVelocityTracker_1 == null) {
      $this.offsetVelocityTracker_1 = new VelocityTracker();
    }
    var tmp0_safe_receiver = $this.offsetVelocityTracker_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp = _get_currentMillis__126we($this);
      var tmp0 = _IntOffset___get_x__impl__qiqr5o(value);
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2 = _IntOffset___get_y__impl__2avpwj(value);
      var v1 = fromInt(toRawBits(tmp0));
      var v2 = fromInt(toRawBits(val2));
      var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      var tmp$ret$0 = _Offset___init__impl__c168vi(tmp$ret$1);
      tmp0_safe_receiver.addPosition_sjfzti_k$(tmp, tmp$ret$0);
    }
  }
  function SharedMutableTransformState$_get_isHandoffActive_$ref_xizz8a() {
    return constructCallableReference(function (p0) {
      return p0.get_isHandoffActive_yl5uc3_k$();
    }, 1, 0, 'androidx.compose.animation/SharedMutableTransformState.isHandoffActive.<get-isHandoffActive>|<get-isHandoffActive>(){}[0]');
  }
  function SharedMutableTransformState$_set_isHandoffActive_$ref_o7dtui() {
    return constructCallableReference(function (p0, p1) {
      _set_isHandoffActive__aprn7t(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedMutableTransformState.isHandoffActive.<set-isHandoffActive>|<set-isHandoffActive>(kotlin.Boolean){}[0]');
  }
  function SharedMutableTransformState$_get_isHandoffActive_$ref_xizz8a_0() {
    return constructCallableReference(function (p0) {
      return p0.get_isHandoffActive_yl5uc3_k$();
    }, 1, 0, 'androidx.compose.animation/SharedMutableTransformState.isHandoffActive.<get-isHandoffActive>|<get-isHandoffActive>(){}[0]');
  }
  function SharedMutableTransformState$_set_isHandoffActive_$ref_o7dtui_0() {
    return constructCallableReference(function (p0, p1) {
      _set_isHandoffActive__aprn7t(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedMutableTransformState.isHandoffActive.<set-isHandoffActive>|<set-isHandoffActive>(kotlin.Boolean){}[0]');
  }
  function SharedMutableTransformState() {
    this._isMutating_1 = mutableStateOf(false);
    this.isHandoffActive$delegate_1 = mutableStateOf(false);
    this.lastMutableData_1 = null;
    this.mutableData_1 = null;
    this.transformScope_1 = new TransformScopeImpl();
    this.timeSource_1 = Monotonic_getInstance();
    this.startTime_1 = this.timeSource_1.markNow_ns2ype_k$();
    this.parentLayoutCoordinates_1 = null;
    this.lastVeil_1 = Companion_getInstance_5().get_Transparent_if5ln4_k$();
    this.lastAlpha_1 = 1.0;
    this.lastScale_1 = 1.0;
    this.lastTransformOrigin_1 = Companion_getInstance_6().get_Center_bvqaiy_k$();
    this.lastSlide_1 = Companion_getInstance_7().get_Zero_6hc3i8_k$();
    this.lastManualScale_1 = 1.0;
    this.lastManualSlide_1 = Companion_getInstance_7().get_Zero_6hc3i8_k$();
    this.scaleVelocityTracker_1 = null;
    this.offsetVelocityTracker_1 = null;
  }
  protoOf(SharedMutableTransformState).set_isMutating_13zvzp_k$ = function (value) {
    if (this._isMutating_1.get_value_j01efc_k$() && !value) {
      _set_isHandoffActive__aprn7t(this, true);
    } else if (value) {
      _set_isHandoffActive__aprn7t(this, false);
    }
    this._isMutating_1.set_value_v1vabv_k$(value);
  };
  protoOf(SharedMutableTransformState).get_isMutating_iz608a_k$ = function () {
    return this._isMutating_1.get_value_j01efc_k$();
  };
  protoOf(SharedMutableTransformState).get_isHandoffActive_yl5uc3_k$ = function () {
    var tmp0 = this.isHandoffActive$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedMutableTransformState$_get_isHandoffActive_$ref_xizz8a();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isHandoffActive', 1, tmp, tmp_0, SharedMutableTransformState$_set_isHandoffActive_$ref_o7dtui());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedMutableTransformState).set_mutableData_q5fgnw_k$ = function (value) {
    if (!(value == null)) {
      this.lastMutableData_1 = value;
    }
    this.mutableData_1 = value;
  };
  protoOf(SharedMutableTransformState).get_mutableData_fyq261_k$ = function () {
    return this.mutableData_1;
  };
  protoOf(SharedMutableTransformState).get_transformScope_91b71e_k$ = function () {
    return this.transformScope_1;
  };
  protoOf(SharedMutableTransformState).get_activeScale_qpa39k_k$ = function () {
    return this.transformScope_1.get_isScaleMutated_a0lcp3_k$() ? this.transformScope_1.get_scale_iyf28x_k$() : 1.0;
  };
  protoOf(SharedMutableTransformState).get_activeOffset_iba37k_k$ = function () {
    return this.transformScope_1.isOffsetMutated_1 ? this.transformScope_1.offset_1 : Companion_getInstance_7().get_Zero_6hc3i8_k$();
  };
  protoOf(SharedMutableTransformState).get_activeTransformOrigin_oeyqwo_k$ = function () {
    return this.transformScope_1.get_isTransformOriginMutated_2uqeg1_k$() ? this.transformScope_1.get_transformOrigin_bc7467_k$() : Companion_getInstance_6().get_Center_bvqaiy_k$();
  };
  protoOf(SharedMutableTransformState).set_parentLayoutCoordinates_tau2j6_k$ = function (_set____db54di) {
    this.parentLayoutCoordinates_1 = _set____db54di;
  };
  protoOf(SharedMutableTransformState).get_parentLayoutCoordinates_fdh4ou_k$ = function () {
    return this.parentLayoutCoordinates_1;
  };
  protoOf(SharedMutableTransformState).set_lastVeil_mncxem_k$ = function (_set____db54di) {
    this.lastVeil_1 = _set____db54di;
  };
  protoOf(SharedMutableTransformState).get_lastVeil_ibh81k_k$ = function () {
    return this.lastVeil_1;
  };
  protoOf(SharedMutableTransformState).set_lastAlpha_5bwykd_k$ = function (_set____db54di) {
    this.lastAlpha_1 = _set____db54di;
  };
  protoOf(SharedMutableTransformState).get_lastAlpha_tojuip_k$ = function () {
    return this.lastAlpha_1;
  };
  protoOf(SharedMutableTransformState).set_lastScale_nzfyp_k$ = function (_set____db54di) {
    this.lastScale_1 = _set____db54di;
  };
  protoOf(SharedMutableTransformState).get_lastScale_tetlqt_k$ = function () {
    return this.lastScale_1;
  };
  protoOf(SharedMutableTransformState).set_lastTransformOrigin_aw95rn_k$ = function (_set____db54di) {
    this.lastTransformOrigin_1 = _set____db54di;
  };
  protoOf(SharedMutableTransformState).get_lastTransformOrigin_mnagwl_k$ = function () {
    return this.lastTransformOrigin_1;
  };
  protoOf(SharedMutableTransformState).set_lastSlide_gss4fx_k$ = function (_set____db54di) {
    this.lastSlide_1 = _set____db54di;
  };
  protoOf(SharedMutableTransformState).get_lastSlide_7r3tb3_k$ = function () {
    return this.lastSlide_1;
  };
  protoOf(SharedMutableTransformState).set_lastManualScale_ore8y1_k$ = function (_set____db54di) {
    this.lastManualScale_1 = _set____db54di;
  };
  protoOf(SharedMutableTransformState).get_lastManualScale_g6hiz_k$ = function () {
    return this.lastManualScale_1;
  };
  protoOf(SharedMutableTransformState).set_lastManualSlide_mr6rqb_k$ = function (_set____db54di) {
    this.lastManualSlide_1 = _set____db54di;
  };
  protoOf(SharedMutableTransformState).get_lastManualSlide_6kx3ut_k$ = function () {
    return this.lastManualSlide_1;
  };
  protoOf(SharedMutableTransformState).get_veilRequiresAnimation_dikdd1_k$ = function () {
    var tmp;
    var tmp_0;
    var tmp0_safe_receiver = this.mutableData_1;
    if (!((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.block_1) == null)) {
      tmp_0 = this.transformScope_1.get_isVeilMutated_18x3nd_k$();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !equals(new Color_0(this.lastVeil_1), new Color_0(Companion_getInstance_5().get_Transparent_if5ln4_k$()));
    }
    return tmp;
  };
  protoOf(SharedMutableTransformState).get_alphaRequiresAnimation_wvai0x_k$ = function () {
    var tmp;
    var tmp_0;
    var tmp0_safe_receiver = this.mutableData_1;
    if (!((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.block_1) == null)) {
      tmp_0 = this.transformScope_1.get_isAlphaMutated_et1r77_k$();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !(this.lastAlpha_1 === 1.0);
    }
    return tmp;
  };
  protoOf(SharedMutableTransformState).get_scaleRequiresAnimation_dkx36d_k$ = function () {
    var tmp;
    var tmp_0;
    var tmp0_safe_receiver = this.mutableData_1;
    if (!((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.block_1) == null)) {
      tmp_0 = this.transformScope_1.get_isScaleMutated_a0lcp3_k$();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !(this.lastScale_1 === 1.0);
    }
    return tmp;
  };
  protoOf(SharedMutableTransformState).get_transformOriginRequiresAnimation_5klwlv_k$ = function () {
    var tmp;
    var tmp_0;
    var tmp0_safe_receiver = this.mutableData_1;
    if (!((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.block_1) == null)) {
      tmp_0 = this.transformScope_1.get_isTransformOriginMutated_2uqeg1_k$();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !equals(new TransformOrigin(this.lastTransformOrigin_1), new TransformOrigin(Companion_getInstance_6().get_Center_bvqaiy_k$()));
    }
    return tmp;
  };
  protoOf(SharedMutableTransformState).get_slideRequiresAnimation_vnaevi_k$ = function () {
    var tmp;
    var tmp_0;
    var tmp0_safe_receiver = this.mutableData_1;
    if (!((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.block_1) == null)) {
      tmp_0 = this.transformScope_1.isOffsetMutated_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !equals(new IntOffset(this.lastSlide_1), new IntOffset(Companion_getInstance_7().get_Zero_6hc3i8_k$()));
    }
    return tmp;
  };
  protoOf(SharedMutableTransformState).get_veilHandoffValue_jcp0lu_k$ = function () {
    return this.get_isHandoffActive_yl5uc3_k$() ? this.lastVeil_1 : null;
  };
  protoOf(SharedMutableTransformState).get_alphaHandoffValue_381yti_k$ = function () {
    return this.get_isHandoffActive_yl5uc3_k$() ? this.lastAlpha_1 : null;
  };
  protoOf(SharedMutableTransformState).get_scaleHandoffValue_fsga6m_k$ = function () {
    return this.get_isHandoffActive_yl5uc3_k$() ? this.lastScale_1 : null;
  };
  protoOf(SharedMutableTransformState).get_transformOriginHandoffValue_ahfesv_k$ = function () {
    return this.get_isHandoffActive_yl5uc3_k$() ? this.lastTransformOrigin_1 : null;
  };
  protoOf(SharedMutableTransformState).get_slideHandoffValue_jz2v95_k$ = function () {
    return this.get_isHandoffActive_yl5uc3_k$() ? this.lastSlide_1 : null;
  };
  protoOf(SharedMutableTransformState).get_scaleHandoffVelocity_f7nfp8_k$ = function () {
    var tmp;
    if (this.get_isHandoffActive_yl5uc3_k$()) {
      var tmp0_safe_receiver = this.scaleVelocityTracker_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.calculateVelocity_kkdbab_k$();
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.takeUnless' call
        var tmp_1;
        if (!isNaN_0(tmp1_safe_receiver)) {
          tmp_1 = tmp1_safe_receiver;
        } else {
          tmp_1 = null;
        }
        tmp_0 = tmp_1;
      }
      var tmp2_elvis_lhs = tmp_0;
      var vel = tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
      tmp = new AnimationVector1D(vel);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SharedMutableTransformState).get_slideHandoffVelocity_4qhcdx_k$ = function () {
    var tmp;
    if (this.get_isHandoffActive_yl5uc3_k$()) {
      var tmp0_safe_receiver = this.lastMutableData_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.offsetVelocityProvider_1;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp_1 = tmp1_safe_receiver();
        tmp_0 = tmp_1 == null ? null : tmp_1.packedValue_1;
      }
      var v = tmp_0;
      var tmp_2;
      var tmp_3;
      var tmp_4 = v;
      if (!((tmp_4 == null ? null : new Offset(tmp_4)) == null)) {
        // Inline function 'androidx.compose.ui.geometry.isSpecified' call
        tmp_3 = !equalsLong(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(v), new Long(2147483647, 2147483647)), new Long(2143289344, 2143289344));
      } else {
        tmp_3 = false;
      }
      if (tmp_3) {
        // Inline function 'androidx.compose.ui.geometry.Offset.x' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value = _Offset___get_packedValue__impl__xh2k8q(v);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits = convertToInt(shiftRight(value, 32));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        var tmp_5 = floatFromBits(bits);
        // Inline function 'androidx.compose.ui.geometry.Offset.y' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_0 = _Offset___get_packedValue__impl__xh2k8q(v);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        var tmp$ret$5 = floatFromBits(bits_0);
        tmp_2 = new AnimationVector2D(tmp_5, tmp$ret$5);
      } else {
        var tmp2_safe_receiver = this.offsetVelocityTracker_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.calculateVelocity_2fo5in_k$();
        var tmp_6;
        var tmp_7 = tmp3_elvis_lhs;
        if ((tmp_7 == null ? null : new Velocity(tmp_7)) == null) {
          tmp_6 = Companion_getInstance_8().get_Zero_m4dhvl_k$();
        } else {
          tmp_6 = tmp3_elvis_lhs;
        }
        var vel = tmp_6;
        // Inline function 'kotlin.takeUnless' call
        var this_0 = _Velocity___get_x__impl__qqcikv(vel);
        var tmp_8;
        if (!isNaN_0(this_0)) {
          tmp_8 = this_0;
        } else {
          tmp_8 = null;
        }
        var tmp4_elvis_lhs = tmp_8;
        var tmp_9 = tmp4_elvis_lhs == null ? 0.0 : tmp4_elvis_lhs;
        // Inline function 'kotlin.takeUnless' call
        var this_1 = _Velocity___get_y__impl__239yhc(vel);
        var tmp_10;
        if (!isNaN_0(this_1)) {
          tmp_10 = this_1;
        } else {
          tmp_10 = null;
        }
        var tmp5_elvis_lhs = tmp_10;
        tmp_2 = new AnimationVector2D(tmp_9, tmp5_elvis_lhs == null ? 0.0 : tmp5_elvis_lhs);
      }
      tmp = tmp_2;
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SharedMutableTransformState).evaluateTransformBlock_4wsnm7_k$ = function (fullSize) {
    if (this.get_isMutating_iz608a_k$()) {
      var tmp0_safe_receiver = this.mutableData_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.block_1;
      if (tmp1_safe_receiver == null)
        null;
      else
        tmp1_safe_receiver(this.transformScope_1, new IntSize(fullSize));
    }
  };
  protoOf(SharedMutableTransformState).combinedAlpha_uqmbgh_k$ = function (transitionValue) {
    var isMutated = this.get_isMutating_iz608a_k$() && this.transformScope_1.get_isAlphaMutated_et1r77_k$();
    var combined = transitionValue * (isMutated ? this.transformScope_1.get_alpha_iooth1_k$() : 1.0);
    if (this.get_isMutating_iz608a_k$()) {
      this.lastAlpha_1 = combined;
    }
    return combined;
  };
  protoOf(SharedMutableTransformState).combinedScale_f1nz83_k$ = function (transitionValue) {
    var isMutated = this.get_isMutating_iz608a_k$() && this.transformScope_1.get_isScaleMutated_a0lcp3_k$();
    var combined = transitionValue * (isMutated ? this.transformScope_1.get_scale_iyf28x_k$() : 1.0);
    if (this.get_isMutating_iz608a_k$()) {
      this.lastScale_1 = combined;
      this.lastManualScale_1 = isMutated ? this.transformScope_1.get_scale_iyf28x_k$() : 1.0;
      if (isMutated) {
        trackScaleVelocity(this, combined);
      }
    }
    return combined;
  };
  protoOf(SharedMutableTransformState).combinedTransformOrigin_7mwi2r_k$ = function (transitionValue) {
    var isMutated = this.get_isMutating_iz608a_k$() && this.transformScope_1.get_isTransformOriginMutated_2uqeg1_k$();
    var combined = isMutated ? this.transformScope_1.get_transformOrigin_bc7467_k$() : transitionValue;
    if (this.get_isMutating_iz608a_k$())
      this.lastTransformOrigin_1 = combined;
    return combined;
  };
  protoOf(SharedMutableTransformState).combinedSlide_61c4l3_k$ = function (transitionValue, fullSize) {
    this.evaluateTransformBlock_4wsnm7_k$(fullSize);
    var isMutated = this.get_isMutating_iz608a_k$() && this.transformScope_1.isOffsetMutated_1;
    var combined = IntOffset__plus_impl_nqoa9b(transitionValue, isMutated ? this.transformScope_1.offset_1 : Companion_getInstance_7().get_Zero_6hc3i8_k$());
    if (this.get_isMutating_iz608a_k$()) {
      this.lastSlide_1 = combined;
      this.lastManualSlide_1 = isMutated ? this.transformScope_1.offset_1 : Companion_getInstance_7().get_Zero_6hc3i8_k$();
      if (isMutated) {
        trackSlideVelocity(this, combined);
      }
    }
    return combined;
  };
  protoOf(SharedMutableTransformState).combinedVeil_wl9j1n_k$ = function (transitionValue) {
    var isMutated = this.get_isMutating_iz608a_k$() && this.transformScope_1.get_isVeilMutated_18x3nd_k$();
    var combined = isMutated ? this.transformScope_1.get_veil_9vd6o2_k$() : transitionValue;
    if (this.get_isMutating_iz608a_k$())
      this.lastVeil_1 = combined;
    return combined;
  };
  protoOf(SharedMutableTransformState).clear_j9egeb_k$ = function () {
    _set_isHandoffActive__aprn7t(this, false);
    this.set_isMutating_13zvzp_k$(false);
    this.transformScope_1.reset_5u6xz3_k$();
    this.lastVeil_1 = Companion_getInstance_5().get_Transparent_if5ln4_k$();
    this.lastAlpha_1 = 1.0;
    this.lastScale_1 = 1.0;
    var tmp0_safe_receiver = this.scaleVelocityTracker_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.resetTracking_2ior4m_k$();
    }
    this.lastTransformOrigin_1 = Companion_getInstance_6().get_Center_bvqaiy_k$();
    this.lastSlide_1 = Companion_getInstance_7().get_Zero_6hc3i8_k$();
    this.lastManualScale_1 = 1.0;
    this.lastManualSlide_1 = Companion_getInstance_7().get_Zero_6hc3i8_k$();
    var tmp1_safe_receiver = this.offsetVelocityTracker_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.resetTracking_2ior4m_k$();
    }
    this.lastMutableData_1 = null;
    this.set_mutableData_q5fgnw_k$(null);
  };
  function TransformScope() {
  }
  function _get__alpha__bu8lmc($this) {
    return $this._alpha_1;
  }
  function _get__scale__3gn1ls($this) {
    return $this._scale_1;
  }
  function _get__transformOrigin__1i7q2g($this) {
    return $this._transformOrigin_1;
  }
  function _get__veil__kopvcw($this) {
    return $this._veil_1;
  }
  function TransformScopeImpl$_get_isAlphaMutated_$ref_7psnrg() {
    return constructCallableReference(function (p0) {
      return p0.get_isAlphaMutated_et1r77_k$();
    }, 1, 0, 'androidx.compose.animation/TransformScopeImpl.isAlphaMutated.<get-isAlphaMutated>|<get-isAlphaMutated>(){}[0]');
  }
  function TransformScopeImpl$_set_isAlphaMutated_$ref_tdg33c() {
    return constructCallableReference(function (p0, p1) {
      p0.set_isAlphaMutated_u6945q_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/TransformScopeImpl.isAlphaMutated.<set-isAlphaMutated>|<set-isAlphaMutated>(kotlin.Boolean){}[0]');
  }
  function TransformScopeImpl$_get_isAlphaMutated_$ref_7psnrg_0() {
    return constructCallableReference(function (p0) {
      return p0.get_isAlphaMutated_et1r77_k$();
    }, 1, 0, 'androidx.compose.animation/TransformScopeImpl.isAlphaMutated.<get-isAlphaMutated>|<get-isAlphaMutated>(){}[0]');
  }
  function TransformScopeImpl$_set_isAlphaMutated_$ref_tdg33c_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_isAlphaMutated_u6945q_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/TransformScopeImpl.isAlphaMutated.<set-isAlphaMutated>|<set-isAlphaMutated>(kotlin.Boolean){}[0]');
  }
  function TransformScopeImpl$_get_isScaleMutated_$ref_bapl8o() {
    return constructCallableReference(function (p0) {
      return p0.get_isScaleMutated_a0lcp3_k$();
    }, 1, 0, 'androidx.compose.animation/TransformScopeImpl.isScaleMutated.<get-isScaleMutated>|<get-isScaleMutated>(){}[0]');
  }
  function TransformScopeImpl$_set_isScaleMutated_$ref_mn5pvo() {
    return constructCallableReference(function (p0, p1) {
      p0.set_isScaleMutated_on0jba_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/TransformScopeImpl.isScaleMutated.<set-isScaleMutated>|<set-isScaleMutated>(kotlin.Boolean){}[0]');
  }
  function TransformScopeImpl$_get_isScaleMutated_$ref_bapl8o_0() {
    return constructCallableReference(function (p0) {
      return p0.get_isScaleMutated_a0lcp3_k$();
    }, 1, 0, 'androidx.compose.animation/TransformScopeImpl.isScaleMutated.<get-isScaleMutated>|<get-isScaleMutated>(){}[0]');
  }
  function TransformScopeImpl$_set_isScaleMutated_$ref_mn5pvo_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_isScaleMutated_on0jba_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/TransformScopeImpl.isScaleMutated.<set-isScaleMutated>|<set-isScaleMutated>(kotlin.Boolean){}[0]');
  }
  function TransformScopeImpl$_get_isTransformOriginMutated_$ref_4ewkyo() {
    return constructCallableReference(function (p0) {
      return p0.get_isTransformOriginMutated_2uqeg1_k$();
    }, 1, 0, 'androidx.compose.animation/TransformScopeImpl.isTransformOriginMutated.<get-isTransformOriginMutated>|<get-isTransformOriginMutated>(){}[0]');
  }
  function TransformScopeImpl$_set_isTransformOriginMutated_$ref_blhjx0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_isTransformOriginMutated_8d8spu_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/TransformScopeImpl.isTransformOriginMutated.<set-isTransformOriginMutated>|<set-isTransformOriginMutated>(kotlin.Boolean){}[0]');
  }
  function TransformScopeImpl$_get_isTransformOriginMutated_$ref_4ewkyo_0() {
    return constructCallableReference(function (p0) {
      return p0.get_isTransformOriginMutated_2uqeg1_k$();
    }, 1, 0, 'androidx.compose.animation/TransformScopeImpl.isTransformOriginMutated.<get-isTransformOriginMutated>|<get-isTransformOriginMutated>(){}[0]');
  }
  function TransformScopeImpl$_set_isTransformOriginMutated_$ref_blhjx0_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_isTransformOriginMutated_8d8spu_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/TransformScopeImpl.isTransformOriginMutated.<set-isTransformOriginMutated>|<set-isTransformOriginMutated>(kotlin.Boolean){}[0]');
  }
  function TransformScopeImpl$_get_isVeilMutated_$ref_fwc4gy() {
    return constructCallableReference(function (p0) {
      return p0.get_isVeilMutated_18x3nd_k$();
    }, 1, 0, 'androidx.compose.animation/TransformScopeImpl.isVeilMutated.<get-isVeilMutated>|<get-isVeilMutated>(){}[0]');
  }
  function TransformScopeImpl$_set_isVeilMutated_$ref_xez17u() {
    return constructCallableReference(function (p0, p1) {
      p0.set_isVeilMutated_w4zz5c_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/TransformScopeImpl.isVeilMutated.<set-isVeilMutated>|<set-isVeilMutated>(kotlin.Boolean){}[0]');
  }
  function TransformScopeImpl$_get_isVeilMutated_$ref_fwc4gy_0() {
    return constructCallableReference(function (p0) {
      return p0.get_isVeilMutated_18x3nd_k$();
    }, 1, 0, 'androidx.compose.animation/TransformScopeImpl.isVeilMutated.<get-isVeilMutated>|<get-isVeilMutated>(){}[0]');
  }
  function TransformScopeImpl$_set_isVeilMutated_$ref_xez17u_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_isVeilMutated_w4zz5c_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/TransformScopeImpl.isVeilMutated.<set-isVeilMutated>|<set-isVeilMutated>(kotlin.Boolean){}[0]');
  }
  function TransformScopeImpl() {
    this.isAlphaMutated$delegate_1 = mutableStateOf(false);
    this._alpha_1 = mutableFloatStateOf(1.0);
    this.isScaleMutated$delegate_1 = mutableStateOf(false);
    this._scale_1 = mutableFloatStateOf(1.0);
    this.isOffsetMutated_1 = false;
    this.offset_1 = Companion_getInstance_7().get_Zero_6hc3i8_k$();
    this.isTransformOriginMutated$delegate_1 = mutableStateOf(false);
    this._transformOrigin_1 = mutableStateOf(new TransformOrigin(Companion_getInstance_6().get_Center_bvqaiy_k$()));
    this.isVeilMutated$delegate_1 = mutableStateOf(false);
    this._veil_1 = mutableStateOf(new Color_0(Companion_getInstance_5().get_Transparent_if5ln4_k$()));
  }
  protoOf(TransformScopeImpl).set_isAlphaMutated_u6945q_k$ = function (_set____db54di) {
    var tmp0 = this.isAlphaMutated$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TransformScopeImpl$_get_isAlphaMutated_$ref_7psnrg_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isAlphaMutated', 1, tmp, tmp_0, TransformScopeImpl$_set_isAlphaMutated_$ref_tdg33c_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(TransformScopeImpl).get_isAlphaMutated_et1r77_k$ = function () {
    var tmp0 = this.isAlphaMutated$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TransformScopeImpl$_get_isAlphaMutated_$ref_7psnrg();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isAlphaMutated', 1, tmp, tmp_0, TransformScopeImpl$_set_isAlphaMutated_$ref_tdg33c());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(TransformScopeImpl).set_alpha_tvzcqh_k$ = function (value) {
    this._alpha_1.set_floatValue_qaujgq_k$(value);
    this.set_isAlphaMutated_u6945q_k$(true);
  };
  protoOf(TransformScopeImpl).get_alpha_iooth1_k$ = function () {
    return this._alpha_1.get_floatValue_xw60ou_k$();
  };
  protoOf(TransformScopeImpl).set_isScaleMutated_on0jba_k$ = function (_set____db54di) {
    var tmp0 = this.isScaleMutated$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TransformScopeImpl$_get_isScaleMutated_$ref_bapl8o_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isScaleMutated', 1, tmp, tmp_0, TransformScopeImpl$_set_isScaleMutated_$ref_mn5pvo_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(TransformScopeImpl).get_isScaleMutated_a0lcp3_k$ = function () {
    var tmp0 = this.isScaleMutated$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TransformScopeImpl$_get_isScaleMutated_$ref_bapl8o();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isScaleMutated', 1, tmp, tmp_0, TransformScopeImpl$_set_isScaleMutated_$ref_mn5pvo());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(TransformScopeImpl).set_scale_yjwvc5_k$ = function (value) {
    this._scale_1.set_floatValue_qaujgq_k$(value);
    this.set_isScaleMutated_on0jba_k$(true);
  };
  protoOf(TransformScopeImpl).get_scale_iyf28x_k$ = function () {
    return this._scale_1.get_floatValue_xw60ou_k$();
  };
  protoOf(TransformScopeImpl).set_isOffsetMutated_g9sf_k$ = function (_set____db54di) {
    this.isOffsetMutated_1 = _set____db54di;
  };
  protoOf(TransformScopeImpl).get_isOffsetMutated_7l38dk_k$ = function () {
    return this.isOffsetMutated_1;
  };
  protoOf(TransformScopeImpl).set_offset_cc4d1n_k$ = function (value) {
    this.offset_1 = value;
    this.isOffsetMutated_1 = true;
  };
  protoOf(TransformScopeImpl).get_offset_bksmdx_k$ = function () {
    return this.offset_1;
  };
  protoOf(TransformScopeImpl).set_isTransformOriginMutated_8d8spu_k$ = function (_set____db54di) {
    var tmp0 = this.isTransformOriginMutated$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TransformScopeImpl$_get_isTransformOriginMutated_$ref_4ewkyo_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isTransformOriginMutated', 1, tmp, tmp_0, TransformScopeImpl$_set_isTransformOriginMutated_$ref_blhjx0_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(TransformScopeImpl).get_isTransformOriginMutated_2uqeg1_k$ = function () {
    var tmp0 = this.isTransformOriginMutated$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TransformScopeImpl$_get_isTransformOriginMutated_$ref_4ewkyo();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isTransformOriginMutated', 1, tmp, tmp_0, TransformScopeImpl$_set_isTransformOriginMutated_$ref_blhjx0());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(TransformScopeImpl).set_transformOrigin_wfji5_k$ = function (value) {
    this._transformOrigin_1.set_value_v1vabv_k$(new TransformOrigin(value));
    this.set_isTransformOriginMutated_8d8spu_k$(true);
  };
  protoOf(TransformScopeImpl).get_transformOrigin_bc7467_k$ = function () {
    return this._transformOrigin_1.get_value_j01efc_k$().packedValue_1;
  };
  protoOf(TransformScopeImpl).set_isVeilMutated_w4zz5c_k$ = function (_set____db54di) {
    var tmp0 = this.isVeilMutated$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TransformScopeImpl$_get_isVeilMutated_$ref_fwc4gy_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isVeilMutated', 1, tmp, tmp_0, TransformScopeImpl$_set_isVeilMutated_$ref_xez17u_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(TransformScopeImpl).get_isVeilMutated_18x3nd_k$ = function () {
    var tmp0 = this.isVeilMutated$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TransformScopeImpl$_get_isVeilMutated_$ref_fwc4gy();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isVeilMutated', 1, tmp, tmp_0, TransformScopeImpl$_set_isVeilMutated_$ref_xez17u());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(TransformScopeImpl).set_veil_89c5yk_k$ = function (value) {
    this._veil_1.set_value_v1vabv_k$(new Color_0(value));
    this.set_isVeilMutated_w4zz5c_k$(true);
  };
  protoOf(TransformScopeImpl).get_veil_9vd6o2_k$ = function () {
    return this._veil_1.get_value_j01efc_k$().value_1;
  };
  protoOf(TransformScopeImpl).reset_5u6xz3_k$ = function () {
    this.set_isAlphaMutated_u6945q_k$(false);
    this.set_isScaleMutated_on0jba_k$(false);
    this.isOffsetMutated_1 = false;
    this.set_isTransformOriginMutated_8d8spu_k$(false);
    this.set_isVeilMutated_w4zz5c_k$(false);
  };
  function ModifierLocalSharedMutableTransformState$lambda() {
    _init_properties_DeferredEnterExitTransition_kt__7tov7e();
    return null;
  }
  var properties_initialized_DeferredEnterExitTransition_kt_avvrq4;
  function _init_properties_DeferredEnterExitTransition_kt__7tov7e() {
    if (!properties_initialized_DeferredEnterExitTransition_kt_avvrq4) {
      properties_initialized_DeferredEnterExitTransition_kt_avvrq4 = true;
      testTimeSource = null;
      ModifierLocalSharedMutableTransformState = modifierLocalOf(ModifierLocalSharedMutableTransformState$lambda);
      androidx_compose_animation_MutableTransform$stable = 8;
      androidx_compose_animation_TransformScopeImpl$stable = 8;
      androidx_compose_animation_SharedMutableTransformState$stable = 8;
    }
  }
  function get_TransformOriginVectorConverter() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return TransformOriginVectorConverter;
  }
  var TransformOriginVectorConverter;
  function get_DefaultAlphaAndScaleSpring() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultAlphaAndScaleSpring;
  }
  var DefaultAlphaAndScaleSpring;
  function get_DefaultColorAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultColorAnimationSpec;
  }
  var DefaultColorAnimationSpec;
  function get_DefaultOffsetAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultOffsetAnimationSpec;
  }
  var DefaultOffsetAnimationSpec;
  function get_DefaultSizeAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultSizeAnimationSpec;
  }
  var DefaultSizeAnimationSpec;
  var androidx_compose_animation_EnterTransition$stable;
  var androidx_compose_animation_ExitTransition$stable;
  var androidx_compose_animation_TransitionEffect$stable;
  var androidx_compose_animation_ContentScaleTransitionEffect$stable;
  var androidx_compose_animation_Fade$stable;
  var androidx_compose_animation_Slide$stable;
  var androidx_compose_animation_ChangeSize$stable;
  var androidx_compose_animation_Scale$stable;
  var androidx_compose_animation_Veil$stable;
  var androidx_compose_animation_TransitionData$stable;
  function Companion() {
    Companion_instance = this;
    this.None_1 = new EnterTransitionImpl(new TransitionData());
  }
  protoOf(Companion).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  var Companion_instance;
  function Companion_getInstance_20() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function EnterTransition() {
    Companion_getInstance_20();
  }
  protoOf(EnterTransition).plus_w36lq9_k$ = function (enter) {
    var tmp0_elvis_lhs = enter.get_data_jntocg_k$().fade_1;
    var tmp = tmp0_elvis_lhs == null ? this.get_data_jntocg_k$().fade_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = enter.get_data_jntocg_k$().slide_1;
    var tmp_0 = tmp1_elvis_lhs == null ? this.get_data_jntocg_k$().slide_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = enter.get_data_jntocg_k$().changeSize_1;
    var tmp_1 = tmp2_elvis_lhs == null ? this.get_data_jntocg_k$().changeSize_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = enter.get_data_jntocg_k$().scale_1;
    var tmp_2 = tmp3_elvis_lhs == null ? this.get_data_jntocg_k$().scale_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = enter.get_data_jntocg_k$().veil_1;
    return new EnterTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp_2, tmp4_elvis_lhs == null ? this.get_data_jntocg_k$().veil_1 : tmp4_elvis_lhs, VOID, plus(this.get_data_jntocg_k$().effectsMap_1, enter.get_data_jntocg_k$().effectsMap_1)));
  };
  protoOf(EnterTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_20().None_1)) {
      tmp = 'EnterTransition.None';
    } else {
      // Inline function 'kotlin.run' call
      var $this$run = this.get_data_jntocg_k$();
      var tmp0_safe_receiver = $this$run.fade_1;
      var tmp_0 = 'EnterTransition: Fade - ' + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString()) + ', Slide - ';
      var tmp1_safe_receiver = $this$run.slide_1;
      var tmp_1 = tmp_0 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ', Shrink - ';
      var tmp2_safe_receiver = $this$run.changeSize_1;
      var tmp_2 = tmp_1 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ', Scale - ';
      var tmp3_safe_receiver = $this$run.scale_1;
      var tmp_3 = tmp_2 + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ', Veil - ';
      var tmp4_safe_receiver = $this$run.veil_1;
      tmp = tmp_3 + (tmp4_safe_receiver == null ? null : tmp4_safe_receiver.toString());
    }
    return tmp;
  };
  protoOf(EnterTransition).equals = function (other) {
    var tmp;
    if (other instanceof EnterTransition) {
      tmp = other.get_data_jntocg_k$().equals(this.get_data_jntocg_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EnterTransition).hashCode = function () {
    return this.get_data_jntocg_k$().hashCode();
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.None_1 = new ExitTransitionImpl(new TransitionData());
    this.KeepUntilTransitionsFinished_1 = new ExitTransitionImpl(new TransitionData(VOID, VOID, VOID, VOID, VOID, true));
  }
  protoOf(Companion_0).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_0).get_KeepUntilTransitionsFinished_bul00d_k$ = function () {
    return this.KeepUntilTransitionsFinished_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_21() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ExitTransition() {
    Companion_getInstance_21();
  }
  protoOf(ExitTransition).plus_buzi7t_k$ = function (exit) {
    var tmp0_elvis_lhs = exit.get_data_jntocg_k$().fade_1;
    var tmp = tmp0_elvis_lhs == null ? this.get_data_jntocg_k$().fade_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = exit.get_data_jntocg_k$().slide_1;
    var tmp_0 = tmp1_elvis_lhs == null ? this.get_data_jntocg_k$().slide_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = exit.get_data_jntocg_k$().changeSize_1;
    var tmp_1 = tmp2_elvis_lhs == null ? this.get_data_jntocg_k$().changeSize_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = exit.get_data_jntocg_k$().scale_1;
    var tmp_2 = tmp3_elvis_lhs == null ? this.get_data_jntocg_k$().scale_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = exit.get_data_jntocg_k$().veil_1;
    return new ExitTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp_2, tmp4_elvis_lhs == null ? this.get_data_jntocg_k$().veil_1 : tmp4_elvis_lhs, exit.get_data_jntocg_k$().hold_1 || this.get_data_jntocg_k$().hold_1, plus(this.get_data_jntocg_k$().effectsMap_1, exit.get_data_jntocg_k$().effectsMap_1)));
  };
  protoOf(ExitTransition).equals = function (other) {
    var tmp;
    if (other instanceof ExitTransition) {
      tmp = other.get_data_jntocg_k$().equals(this.get_data_jntocg_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ExitTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_21().None_1)) {
      tmp = 'ExitTransition.None';
    } else if (this.equals(Companion_getInstance_21().KeepUntilTransitionsFinished_1)) {
      tmp = 'ExitTransition.KeepUntilTransitionsFinished';
    } else {
      // Inline function 'kotlin.run' call
      var $this$run = this.get_data_jntocg_k$();
      var tmp0_safe_receiver = $this$run.fade_1;
      var tmp_0 = 'ExitTransition:  Fade - ' + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString()) + ',  Slide - ';
      var tmp1_safe_receiver = $this$run.slide_1;
      var tmp_1 = tmp_0 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',  Shrink - ';
      var tmp2_safe_receiver = $this$run.changeSize_1;
      var tmp_2 = tmp_1 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',  Scale - ';
      var tmp3_safe_receiver = $this$run.scale_1;
      var tmp_3 = tmp_2 + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',  Veil - ';
      var tmp4_safe_receiver = $this$run.veil_1;
      tmp = tmp_3 + (tmp4_safe_receiver == null ? null : tmp4_safe_receiver.toString()) + ',  KeepUntilTransitionsFinished - ' + $this$run.hold_1;
    }
    return tmp;
  };
  protoOf(ExitTransition).hashCode = function () {
    return this.get_data_jntocg_k$().hashCode();
  };
  function expandHorizontally(animationSpec, expandFrom, clip, initialWidth) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0, new IntSize(get_VisibilityThreshold_0(Companion_getInstance_3()))) : animationSpec;
    expandFrom = expandFrom === VOID ? Companion_getInstance_9().get_End_18ju7i_k$() : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (initialWidth === VOID) {
      tmp = expandHorizontally$lambda;
    } else {
      tmp = initialWidth;
    }
    initialWidth = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment(expandFrom);
    return expandIn(animationSpec, tmp_0, clip, expandHorizontally$lambda_0(initialWidth));
  }
  function expandVertically(animationSpec, expandFrom, clip, initialHeight) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0, new IntSize(get_VisibilityThreshold_0(Companion_getInstance_3()))) : animationSpec;
    expandFrom = expandFrom === VOID ? Companion_getInstance_9().get_Bottom_3m75bg_k$() : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (initialHeight === VOID) {
      tmp = expandVertically$lambda;
    } else {
      tmp = initialHeight;
    }
    initialHeight = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment_0(expandFrom);
    return expandIn(animationSpec, tmp_0, clip, expandVertically$lambda_0(initialHeight));
  }
  function shrinkHorizontally(animationSpec, shrinkTowards, clip, targetWidth) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0, new IntSize(get_VisibilityThreshold_0(Companion_getInstance_3()))) : animationSpec;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_9().get_End_18ju7i_k$() : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (targetWidth === VOID) {
      tmp = shrinkHorizontally$lambda;
    } else {
      tmp = targetWidth;
    }
    targetWidth = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment(shrinkTowards);
    return shrinkOut(animationSpec, tmp_0, clip, shrinkHorizontally$lambda_0(targetWidth));
  }
  function shrinkVertically(animationSpec, shrinkTowards, clip, targetHeight) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0, new IntSize(get_VisibilityThreshold_0(Companion_getInstance_3()))) : animationSpec;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_9().get_Bottom_3m75bg_k$() : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (targetHeight === VOID) {
      tmp = shrinkVertically$lambda;
    } else {
      tmp = targetHeight;
    }
    targetHeight = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment_0(shrinkTowards);
    return shrinkOut(animationSpec, tmp_0, clip, shrinkVertically$lambda_0(targetHeight));
  }
  function fadeIn(animationSpec, initialAlpha) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0) : animationSpec;
    initialAlpha = initialAlpha === VOID ? 0.0 : initialAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(new Fade(initialAlpha, animationSpec)));
  }
  function fadeOut(animationSpec, targetAlpha) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0) : animationSpec;
    targetAlpha = targetAlpha === VOID ? 0.0 : targetAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(new Fade(targetAlpha, animationSpec)));
  }
  function createModifier(_this__u8e3s4, enter, exit, trackActiveEnterExit, isEnabled, sharedMutableTransformState, label, $composer, $changed, $default) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var trackActiveEnterExit_0 = trackActiveEnterExit;
    var isEnabled_0 = {_v: isEnabled};
    var sharedMutableTransformState_0 = sharedMutableTransformState;
    var $composer_0 = $composer;
    if (!(($default & 4) === 0))
      trackActiveEnterExit_0 = true;
    if (!(($default & 8) === 0)) {
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value = createModifier$lambda;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      isEnabled_0._v = tmp;
    }
    if (!(($default & 16) === 0))
      sharedMutableTransformState_0 = null;
    var tmp_0;
    if (trackActiveEnterExit_0) {
      $composer_0.startReplaceGroup_5hh8aj_k$(-1491184033);
      var tmp1_group = trackActiveEnter(_this__u8e3s4, enter, $composer_0, 14 & $changed | 112 & $changed);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_0 = tmp1_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(-1491182875);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_0 = enter;
    }
    var activeEnter = tmp_0;
    var tmp_1;
    if (trackActiveEnterExit_0) {
      $composer_0.startReplaceGroup_5hh8aj_k$(-1491181156);
      var tmp2_group = trackActiveExit(_this__u8e3s4, exit, $composer_0, 14 & $changed | 112 & $changed >> 3);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_1 = tmp2_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(-1491180092);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_1 = exit;
    }
    var activeExit = tmp_1;
    var activeMutableState = trackActiveMutableState(_this__u8e3s4, sharedMutableTransformState_0, $composer_0, 14 & $changed | 112 & $changed >> 12);
    var shouldAnimateVeil = !(activeEnter.get_data_jntocg_k$().veil_1 == null) || !(activeExit.get_data_jntocg_k$().veil_1 == null) || activeMutableState.get_veilRequiresAnimation_dikdd1_k$();
    var shouldAnimateSlide = !(activeEnter.get_data_jntocg_k$().slide_1 == null) || !(activeExit.get_data_jntocg_k$().slide_1 == null) || activeMutableState.get_slideRequiresAnimation_vnaevi_k$();
    var shouldAnimateSizeChange = !(activeEnter.get_data_jntocg_k$().changeSize_1 == null) || !(activeExit.get_data_jntocg_k$().changeSize_1 == null);
    var tmp_2;
    if (shouldAnimateSlide) {
      $composer_0.startReplaceGroup_5hh8aj_k$(1018653691);
      var tmp_3 = get_VectorConverter(Companion_getInstance_7());
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (false || it_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value_0 = label + ' slide';
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp$ret$4 = tmp_4;
      var tmp3_group = createDeferredAnimation(_this__u8e3s4, tmp_3, tmp$ret$4, $composer_0, 384 | 14 & $changed, 0);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_2 = tmp3_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(1018759494);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_2 = null;
    }
    var slideAnimation = tmp_2;
    var tmp_5;
    if (shouldAnimateSizeChange) {
      $composer_0.startReplaceGroup_5hh8aj_k$(1018851285);
      var tmp_6 = get_VectorConverter_0(Companion_getInstance_3());
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (false || it_1 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value_1 = label + ' shrink/expand';
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp$ret$8 = tmp_7;
      var tmp4_group = createDeferredAnimation(_this__u8e3s4, tmp_6, tmp$ret$8, $composer_0, 384 | 14 & $changed, 0);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_5 = tmp4_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(1018962109);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_5 = null;
    }
    var sizeAnimation = tmp_5;
    var tmp_8;
    if (shouldAnimateSizeChange) {
      $composer_0.startReplaceGroup_5hh8aj_k$(1019035735);
      var tmp_9 = get_VectorConverter(Companion_getInstance_7());
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_2 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_10;
      if (false || it_2 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value_2 = label + ' InterruptionHandlingOffset';
        $composer_0.updateRememberedValue_l1wh71_k$(value_2);
        tmp_10 = value_2;
      } else {
        tmp_10 = it_2;
      }
      var tmp$ret$12 = tmp_10;
      var tmp5_group = createDeferredAnimation(_this__u8e3s4, tmp_9, tmp$ret$12, $composer_0, 384 | 14 & $changed, 0);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_8 = tmp5_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(1019206141);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_8 = null;
    }
    var offsetAnimation = tmp_8;
    var tmp_11;
    var tmp_12;
    var tmp0_safe_receiver = activeEnter.get_data_jntocg_k$().changeSize_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.clip_1) === false) {
      tmp_12 = true;
    } else {
      var tmp1_safe_receiver = activeExit.get_data_jntocg_k$().changeSize_1;
      tmp_12 = (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.clip_1) === false;
    }
    if (tmp_12) {
      tmp_11 = true;
    } else {
      tmp_11 = !shouldAnimateSizeChange;
    }
    var disableClip = tmp_11;
    var tmp2_safe_receiver = activeEnter.get_data_jntocg_k$().veil_1;
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.initialColor_1;
    var tmp_13;
    var tmp_14 = tmp3_safe_receiver;
    if ((tmp_14 == null ? null : new Color_0(tmp_14)) == null) {
      tmp_13 = null;
    } else {
      tmp_13 = _Color___get_colorSpace__impl__jqqozk(tmp3_safe_receiver);
    }
    var tmp4_elvis_lhs = tmp_13;
    var tmp_15;
    if (tmp4_elvis_lhs == null) {
      var tmp5_safe_receiver = activeEnter.get_data_jntocg_k$().veil_1;
      var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.targetColor_1;
      var tmp_16;
      var tmp_17 = tmp6_safe_receiver;
      if ((tmp_17 == null ? null : new Color_0(tmp_17)) == null) {
        tmp_16 = null;
      } else {
        tmp_16 = _Color___get_colorSpace__impl__jqqozk(tmp6_safe_receiver);
      }
      tmp_15 = tmp_16;
    } else {
      tmp_15 = tmp4_elvis_lhs;
    }
    var tmp7_elvis_lhs = tmp_15;
    var tmp_18;
    if (tmp7_elvis_lhs == null) {
      var tmp8_safe_receiver = activeExit.get_data_jntocg_k$().veil_1;
      var tmp9_safe_receiver = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.initialColor_1;
      var tmp_19;
      var tmp_20 = tmp9_safe_receiver;
      if ((tmp_20 == null ? null : new Color_0(tmp_20)) == null) {
        tmp_19 = null;
      } else {
        tmp_19 = _Color___get_colorSpace__impl__jqqozk(tmp9_safe_receiver);
      }
      tmp_18 = tmp_19;
    } else {
      tmp_18 = tmp7_elvis_lhs;
    }
    var tmp10_elvis_lhs = tmp_18;
    var tmp_21;
    if (tmp10_elvis_lhs == null) {
      var tmp11_safe_receiver = activeExit.get_data_jntocg_k$().veil_1;
      var tmp12_safe_receiver = tmp11_safe_receiver == null ? null : tmp11_safe_receiver.targetColor_1;
      var tmp_22;
      var tmp_23 = tmp12_safe_receiver;
      if ((tmp_23 == null ? null : new Color_0(tmp_23)) == null) {
        tmp_22 = null;
      } else {
        tmp_22 = _Color___get_colorSpace__impl__jqqozk(tmp12_safe_receiver);
      }
      tmp_21 = tmp_22;
    } else {
      tmp_21 = tmp10_elvis_lhs;
    }
    var tmp13_elvis_lhs = tmp_21;
    var colorSpace = tmp13_elvis_lhs == null ? ColorSpaces_getInstance().get_Srgb_woa2g3_k$() : tmp13_elvis_lhs;
    var tmp_24;
    if (shouldAnimateVeil) {
      $composer_0.startReplaceGroup_5hh8aj_k$(1019733235);
      var tmp_25 = get_VectorConverter_4(Companion_getInstance_5())(colorSpace);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_3 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_26;
      if (false || it_3 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value_3 = label + ' veil';
        $composer_0.updateRememberedValue_l1wh71_k$(value_3);
        tmp_26 = value_3;
      } else {
        tmp_26 = it_3;
      }
      var tmp$ret$16 = tmp_26;
      var veilAnimation = createDeferredAnimation(_this__u8e3s4, tmp_25, tmp$ret$16, $composer_0, 384 | 14 & $changed, 0);
      var tmp6_group = new VeilModifierElement(_this__u8e3s4, veilAnimation, activeEnter, activeExit, activeMutableState);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_24 = tmp6_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(1020031362);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_24 = Companion_getInstance_0();
    }
    var veilModifierElement = tmp_24;
    var tmp14_safe_receiver = activeEnter.get_data_jntocg_k$().veil_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.matchParentSize_1;
    var tmp_27;
    if (tmp15_elvis_lhs == null) {
      var tmp16_safe_receiver = activeExit.get_data_jntocg_k$().veil_1;
      tmp_27 = tmp16_safe_receiver == null ? null : tmp16_safe_receiver.matchParentSize_1;
    } else {
      tmp_27 = tmp15_elvis_lhs;
    }
    var tmp17_elvis_lhs = tmp_27;
    var tmp_28;
    if (tmp17_elvis_lhs == null) {
      var tmp18_safe_receiver = activeMutableState.get_mutableData_fyq261_k$();
      tmp_28 = tmp18_safe_receiver == null ? null : tmp18_safe_receiver.get_veilMatchParentSize_y4d5ya_k$();
    } else {
      tmp_28 = tmp17_elvis_lhs;
    }
    var tmp19_elvis_lhs = tmp_28;
    var shouldVeilMatchParentSize = tmp19_elvis_lhs == null ? false : tmp19_elvis_lhs;
    var graphicsLayerBlock = createGraphicsLayerBlock(_this__u8e3s4, activeEnter, activeExit, activeMutableState, label, $composer_0, 14 & $changed | 57344 & $changed >> 6);
    var tmp_29 = Companion_getInstance_0();
    var tmp_30 = get_ModifierLocalSharedMutableTransformState();
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.changedInstance_s1wkiy_k$(activeMutableState);
    // Inline function 'kotlin.let' call
    var it_4 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_31;
    if (invalid || it_4 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value_4 = createModifier$lambda_0(activeMutableState);
      $composer_0.updateRememberedValue_l1wh71_k$(value_4);
      tmp_31 = value_4;
    } else {
      tmp_31 = it_4;
    }
    var tmp$ret$20 = tmp_31;
    var tmp_32 = modifierLocalProvider(tmp_29, tmp_30, tmp$ret$20).then_g5qrxq_k$(shouldVeilMatchParentSize ? veilModifierElement : Companion_getInstance_0());
    var tmp_33 = Companion_getInstance_0();
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!($composer_0.changed_jpyyrz_k$(disableClip) | (($changed & 57344 ^ 24576) > 16384 && $composer_0.changed_ga7h3f_k$(isEnabled_0._v) || ($changed & 24576) === 16384));
    // Inline function 'kotlin.let' call
    var it_5 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_34;
    if (invalid_0 || it_5 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value_5 = createModifier$lambda_1(disableClip, isEnabled_0);
      $composer_0.updateRememberedValue_l1wh71_k$(value_5);
      tmp_34 = value_5;
    } else {
      tmp_34 = it_5;
    }
    var tmp$ret$24 = tmp_34;
    return tmp_32.then_g5qrxq_k$(graphicsLayer(tmp_33, tmp$ret$24)).then_g5qrxq_k$(new EnterExitTransitionElement(_this__u8e3s4, sizeAnimation, offsetAnimation, slideAnimation, activeEnter, activeExit, activeMutableState, isEnabled_0._v, graphicsLayerBlock)).then_g5qrxq_k$(!shouldVeilMatchParentSize ? veilModifierElement : Companion_getInstance_0());
  }
  function DeferredTransitionCleanupEffect(_this__u8e3s4, effect, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1186853286);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(_this__u8e3s4) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(effect) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      var isMutating = !(_this__u8e3s4.get_pendingTargetState_ogufoy_k$() == null);
      if (equals(_this__u8e3s4.get_currentState_snihnl_k$(), _this__u8e3s4.get_targetState_kri3mx_k$()) && !isMutating) {
        effect();
      }
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'kotlin.booleanArrayOf' call
        var value = booleanArrayOf([isMutating]);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var wasMutating = tmp;
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (false || it_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        // Inline function 'kotlin.arrayOfNulls' call
        var value_0 = Array(1);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_0 = value_0;
      } else {
        tmp_0 = it_0;
      }
      var lastTarget = tmp_0;
      if (!equals(lastTarget[0], _this__u8e3s4.get_targetState_kri3mx_k$())) {
        if (!isMutating && !wasMutating[0]) {
          effect();
        }
        lastTarget[0] = _this__u8e3s4.get_targetState_kri3mx_k$();
      }
      wasMutating[0] = isMutating;
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(DeferredTransitionCleanupEffect$lambda(_this__u8e3s4, effect, $changed));
    }
  }
  function trackActiveEnter(_this__u8e3s4, enter, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value = mutableStateOf(enter);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var activeEnter$delegate = tmp;
    if (_this__u8e3s4.get_currentState_snihnl_k$().equals(_this__u8e3s4.get_targetState_kri3mx_k$()) && _this__u8e3s4.get_currentState_snihnl_k$().equals(EnterExitState_Visible_getInstance())) {
      if (_this__u8e3s4.get_isSeeking_vjb393_k$()) {
        trackActiveEnter$lambda_0(activeEnter$delegate, enter);
      } else {
        trackActiveEnter$lambda_0(activeEnter$delegate, Companion_getInstance_20().None_1);
      }
    } else if (!_this__u8e3s4.get_targetState_kri3mx_k$().equals(EnterExitState_PostExit_getInstance())) {
      trackActiveEnter$lambda_0(activeEnter$delegate, trackActiveEnter$lambda(activeEnter$delegate).plus_w36lq9_k$(enter));
    }
    return trackActiveEnter$lambda(activeEnter$delegate);
  }
  function trackActiveExit(_this__u8e3s4, exit, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value = mutableStateOf(exit);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var activeExit$delegate = tmp;
    if (_this__u8e3s4.get_currentState_snihnl_k$().equals(_this__u8e3s4.get_targetState_kri3mx_k$()) && _this__u8e3s4.get_currentState_snihnl_k$().equals(EnterExitState_Visible_getInstance())) {
      $composer_0.startReplaceGroup_5hh8aj_k$(-505142498);
      $composer_0.endReplaceGroup_ek144q_k$();
      if (_this__u8e3s4.get_isSeeking_vjb393_k$()) {
        trackActiveExit$lambda_0(activeExit$delegate, exit);
      } else {
        trackActiveExit$lambda_0(activeExit$delegate, Companion_getInstance_21().None_1);
      }
    } else if (!_this__u8e3s4.get_targetState_kri3mx_k$().equals(EnterExitState_Visible_getInstance())) {
      $composer_0.startReplaceGroup_5hh8aj_k$(-504838512);
      var tmp0_safe_receiver = trackActiveExit$lambda(activeExit$delegate).get_data_jntocg_k$().fade_1;
      var tmp5_fade = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.copy$default_ma0w9o_k$(1.0);
      var tmp1_safe_receiver = trackActiveExit$lambda(activeExit$delegate).get_data_jntocg_k$().scale_1;
      var tmp6_scale = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.copy$default_nonyxv_k$(1.0);
      var tmp2_safe_receiver = trackActiveExit$lambda(activeExit$delegate).get_data_jntocg_k$().slide_1;
      var tmp_0;
      if (tmp2_safe_receiver == null) {
        $composer_0.startReplaceGroup_5hh8aj_k$(-504119809);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_0 = null;
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(-708998590);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (false || it_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          var value_0 = trackActiveExit$lambda_1;
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp$ret$4 = tmp_1;
        var tmp1_group = tmp2_safe_receiver.copy$default_redmhi_k$(tmp$ret$4);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_0 = tmp1_group;
      }
      var tmp7_slide = tmp_0;
      var tmp3_safe_receiver = trackActiveExit$lambda(activeExit$delegate).get_data_jntocg_k$().changeSize_1;
      var tmp_2;
      if (tmp3_safe_receiver == null) {
        $composer_0.startReplaceGroup_5hh8aj_k$(-504024174);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_2 = null;
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(-708995505);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (false || it_1 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          var value_1 = trackActiveExit$lambda_2;
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_3 = value_1;
        } else {
          tmp_3 = it_1;
        }
        var tmp$ret$8 = tmp_3;
        var tmp2_group = tmp3_safe_receiver.copy$default_lm9k9y_k$(VOID, tmp$ret$8);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_2 = tmp2_group;
      }
      var tmp8_changeSize = tmp_2;
      var tmp4_safe_receiver = trackActiveExit$lambda(activeExit$delegate).get_data_jntocg_k$().veil_1;
      var tmp_4;
      if (tmp4_safe_receiver == null) {
        tmp_4 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_4 = tmp4_safe_receiver.copy$default_kff6mb_k$(VOID, tmp4_safe_receiver.initialColor_1);
      }
      var tmp9_veil = tmp_4;
      var neutralData = new TransitionData(tmp5_fade, tmp7_slide, tmp8_changeSize, tmp6_scale, tmp9_veil);
      trackActiveExit$lambda_0(activeExit$delegate, (new ExitTransitionImpl(neutralData)).plus_buzi7t_k$(exit));
      $composer_0.endReplaceGroup_ek144q_k$();
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(-503833306);
      $composer_0.endReplaceGroup_ek144q_k$();
    }
    return trackActiveExit$lambda(activeExit$delegate);
  }
  function ExperimentalAnimationApi() {
  }
  protoOf(ExperimentalAnimationApi).equals = function (other) {
    if (!(other instanceof ExperimentalAnimationApi))
      return false;
    other instanceof ExperimentalAnimationApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalAnimationApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalAnimationApi).toString = function () {
    return '@androidx.compose.animation.ExperimentalAnimationApi(' + ')';
  };
  function TransitionData(fade, slide, changeSize, scale, veil, hold, effectsMap) {
    fade = fade === VOID ? null : fade;
    slide = slide === VOID ? null : slide;
    changeSize = changeSize === VOID ? null : changeSize;
    scale = scale === VOID ? null : scale;
    veil = veil === VOID ? null : veil;
    hold = hold === VOID ? false : hold;
    effectsMap = effectsMap === VOID ? emptyMap() : effectsMap;
    this.fade_1 = fade;
    this.slide_1 = slide;
    this.changeSize_1 = changeSize;
    this.scale_1 = scale;
    this.veil_1 = veil;
    this.hold_1 = hold;
    this.effectsMap_1 = effectsMap;
  }
  protoOf(TransitionData).get_fade_woluit_k$ = function () {
    return this.fade_1;
  };
  protoOf(TransitionData).get_slide_iykyvc_k$ = function () {
    return this.slide_1;
  };
  protoOf(TransitionData).get_changeSize_fljy3e_k$ = function () {
    return this.changeSize_1;
  };
  protoOf(TransitionData).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(TransitionData).get_veil_wow5ej_k$ = function () {
    return this.veil_1;
  };
  protoOf(TransitionData).get_hold_wonf2g_k$ = function () {
    return this.hold_1;
  };
  protoOf(TransitionData).get_effectsMap_87u2yr_k$ = function () {
    return this.effectsMap_1;
  };
  protoOf(TransitionData).component1_7eebsc_k$ = function () {
    return this.fade_1;
  };
  protoOf(TransitionData).component2_7eebsb_k$ = function () {
    return this.slide_1;
  };
  protoOf(TransitionData).component3_7eebsa_k$ = function () {
    return this.changeSize_1;
  };
  protoOf(TransitionData).component4_7eebs9_k$ = function () {
    return this.scale_1;
  };
  protoOf(TransitionData).component5_7eebs8_k$ = function () {
    return this.veil_1;
  };
  protoOf(TransitionData).component6_7eebs7_k$ = function () {
    return this.hold_1;
  };
  protoOf(TransitionData).component7_7eebs6_k$ = function () {
    return this.effectsMap_1;
  };
  protoOf(TransitionData).copy_rq0ada_k$ = function (fade, slide, changeSize, scale, veil, hold, effectsMap) {
    return new TransitionData(fade, slide, changeSize, scale, veil, hold, effectsMap);
  };
  protoOf(TransitionData).copy$default_7nww7c_k$ = function (fade, slide, changeSize, scale, veil, hold, effectsMap, $super) {
    fade = fade === VOID ? this.fade_1 : fade;
    slide = slide === VOID ? this.slide_1 : slide;
    changeSize = changeSize === VOID ? this.changeSize_1 : changeSize;
    scale = scale === VOID ? this.scale_1 : scale;
    veil = veil === VOID ? this.veil_1 : veil;
    hold = hold === VOID ? this.hold_1 : hold;
    effectsMap = effectsMap === VOID ? this.effectsMap_1 : effectsMap;
    return $super === VOID ? this.copy_rq0ada_k$(fade, slide, changeSize, scale, veil, hold, effectsMap) : $super.copy_rq0ada_k$.call(this, fade, slide, changeSize, scale, veil, hold, effectsMap);
  };
  protoOf(TransitionData).toString = function () {
    return 'TransitionData(fade=' + toString(this.fade_1) + ', slide=' + toString(this.slide_1) + ', changeSize=' + toString(this.changeSize_1) + ', scale=' + toString(this.scale_1) + ', veil=' + toString(this.veil_1) + ', hold=' + this.hold_1 + ', effectsMap=' + toString_0(this.effectsMap_1) + ')';
  };
  protoOf(TransitionData).hashCode = function () {
    var result = this.fade_1 == null ? 0 : this.fade_1.hashCode();
    result = imul(result, 31) + (this.slide_1 == null ? 0 : this.slide_1.hashCode()) | 0;
    result = imul(result, 31) + (this.changeSize_1 == null ? 0 : this.changeSize_1.hashCode()) | 0;
    result = imul(result, 31) + (this.scale_1 == null ? 0 : this.scale_1.hashCode()) | 0;
    result = imul(result, 31) + (this.veil_1 == null ? 0 : this.veil_1.hashCode()) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.hold_1) | 0;
    result = imul(result, 31) + hashCode(this.effectsMap_1) | 0;
    return result;
  };
  protoOf(TransitionData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransitionData))
      return false;
    if (!equals(this.fade_1, other.fade_1))
      return false;
    if (!equals(this.slide_1, other.slide_1))
      return false;
    if (!equals(this.changeSize_1, other.changeSize_1))
      return false;
    if (!equals(this.scale_1, other.scale_1))
      return false;
    if (!equals(this.veil_1, other.veil_1))
      return false;
    if (!(this.hold_1 === other.hold_1))
      return false;
    if (!equals(this.effectsMap_1, other.effectsMap_1))
      return false;
    return true;
  };
  function EnterTransitionImpl(data) {
    EnterTransition.call(this);
    this.data_1 = data;
  }
  protoOf(EnterTransitionImpl).get_data_jntocg_k$ = function () {
    return this.data_1;
  };
  function Fade(alpha, animationSpec) {
    this.alpha_1 = alpha;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Fade).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(Fade).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Fade).component1_7eebsc_k$ = function () {
    return this.alpha_1;
  };
  protoOf(Fade).component2_7eebsb_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Fade).copy_z8z8aw_k$ = function (alpha, animationSpec) {
    return new Fade(alpha, animationSpec);
  };
  protoOf(Fade).copy$default_ma0w9o_k$ = function (alpha, animationSpec, $super) {
    alpha = alpha === VOID ? this.alpha_1 : alpha;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_z8z8aw_k$(alpha, animationSpec) : $super.copy_z8z8aw_k$.call(this, alpha, animationSpec);
  };
  protoOf(Fade).toString = function () {
    return 'Fade(alpha=' + this.alpha_1 + ', animationSpec=' + toString_0(this.animationSpec_1) + ')';
  };
  protoOf(Fade).hashCode = function () {
    var result = getNumberHashCode(this.alpha_1);
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Fade).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Fade))
      return false;
    if (!equals(this.alpha_1, other.alpha_1))
      return false;
    if (!equals(this.animationSpec_1, other.animationSpec_1))
      return false;
    return true;
  };
  function Slide(slideOffset, animationSpec) {
    this.slideOffset_1 = slideOffset;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Slide).get_slideOffset_3j6nyd_k$ = function () {
    return this.slideOffset_1;
  };
  protoOf(Slide).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Slide).component1_7eebsc_k$ = function () {
    return this.slideOffset_1;
  };
  protoOf(Slide).component2_7eebsb_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Slide).copy_rxbt3p_k$ = function (slideOffset, animationSpec) {
    return new Slide(slideOffset, animationSpec);
  };
  protoOf(Slide).copy$default_redmhi_k$ = function (slideOffset, animationSpec, $super) {
    slideOffset = slideOffset === VOID ? this.slideOffset_1 : slideOffset;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_rxbt3p_k$(slideOffset, animationSpec) : $super.copy_rxbt3p_k$.call(this, slideOffset, animationSpec);
  };
  protoOf(Slide).toString = function () {
    return 'Slide(slideOffset=' + toString_0(this.slideOffset_1) + ', animationSpec=' + toString_0(this.animationSpec_1) + ')';
  };
  protoOf(Slide).hashCode = function () {
    var result = hashCode(this.slideOffset_1);
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Slide).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Slide))
      return false;
    if (!equals(this.slideOffset_1, other.slideOffset_1))
      return false;
    if (!equals(this.animationSpec_1, other.animationSpec_1))
      return false;
    return true;
  };
  function ChangeSize$_init_$lambda_705jnq(it) {
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(0), 32), bitwiseAnd(fromInt(0), new Long(-1, 0)));
    var tmp$ret$0 = _IntSize___init__impl__emcjft(tmp$ret$1);
    return new IntSize(tmp$ret$0);
  }
  function ChangeSize(alignment, size, animationSpec, clip) {
    var tmp;
    if (size === VOID) {
      tmp = ChangeSize$_init_$lambda_705jnq;
    } else {
      tmp = size;
    }
    size = tmp;
    clip = clip === VOID ? true : clip;
    this.alignment_1 = alignment;
    this.size_1 = size;
    this.animationSpec_1 = animationSpec;
    this.clip_1 = clip;
  }
  protoOf(ChangeSize).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(ChangeSize).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(ChangeSize).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(ChangeSize).get_clip_wok5uh_k$ = function () {
    return this.clip_1;
  };
  protoOf(ChangeSize).component1_7eebsc_k$ = function () {
    return this.alignment_1;
  };
  protoOf(ChangeSize).component2_7eebsb_k$ = function () {
    return this.size_1;
  };
  protoOf(ChangeSize).component3_7eebsa_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(ChangeSize).component4_7eebs9_k$ = function () {
    return this.clip_1;
  };
  protoOf(ChangeSize).copy_v6ndrn_k$ = function (alignment, size, animationSpec, clip) {
    return new ChangeSize(alignment, size, animationSpec, clip);
  };
  protoOf(ChangeSize).copy$default_lm9k9y_k$ = function (alignment, size, animationSpec, clip, $super) {
    alignment = alignment === VOID ? this.alignment_1 : alignment;
    size = size === VOID ? this.size_1 : size;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    clip = clip === VOID ? this.clip_1 : clip;
    return $super === VOID ? this.copy_v6ndrn_k$(alignment, size, animationSpec, clip) : $super.copy_v6ndrn_k$.call(this, alignment, size, animationSpec, clip);
  };
  protoOf(ChangeSize).toString = function () {
    return 'ChangeSize(alignment=' + toString_0(this.alignment_1) + ', size=' + toString_0(this.size_1) + ', animationSpec=' + toString_0(this.animationSpec_1) + ', clip=' + this.clip_1 + ')';
  };
  protoOf(ChangeSize).hashCode = function () {
    var result = hashCode(this.alignment_1);
    result = imul(result, 31) + hashCode(this.size_1) | 0;
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.clip_1) | 0;
    return result;
  };
  protoOf(ChangeSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChangeSize))
      return false;
    if (!equals(this.alignment_1, other.alignment_1))
      return false;
    if (!equals(this.size_1, other.size_1))
      return false;
    if (!equals(this.animationSpec_1, other.animationSpec_1))
      return false;
    if (!(this.clip_1 === other.clip_1))
      return false;
    return true;
  };
  function Scale(scale, transformOrigin, animationSpec) {
    this.scale_1 = scale;
    this.transformOrigin_1 = transformOrigin;
    this.animationSpec_1 = animationSpec;
  }
  protoOf(Scale).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(Scale).get_transformOrigin_bc7467_k$ = function () {
    return this.transformOrigin_1;
  };
  protoOf(Scale).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Scale).component1_7eebsc_k$ = function () {
    return this.scale_1;
  };
  protoOf(Scale).component2_vce5p_k$ = function () {
    return this.transformOrigin_1;
  };
  protoOf(Scale).component3_7eebsa_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Scale).copy_yexmra_k$ = function (scale, transformOrigin, animationSpec) {
    return new Scale(scale, transformOrigin, animationSpec);
  };
  protoOf(Scale).copy$default_nonyxv_k$ = function (scale, transformOrigin, animationSpec, $super) {
    scale = scale === VOID ? this.scale_1 : scale;
    transformOrigin = transformOrigin === VOID ? this.transformOrigin_1 : transformOrigin;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    return $super === VOID ? this.copy_yexmra_k$(scale, transformOrigin, animationSpec) : $super.copy_yexmra_k$.call(this, scale, new TransformOrigin(transformOrigin), animationSpec);
  };
  protoOf(Scale).toString = function () {
    return 'Scale(scale=' + this.scale_1 + ', transformOrigin=' + TransformOrigin__toString_impl_nn7ftd(this.transformOrigin_1) + ', animationSpec=' + toString_0(this.animationSpec_1) + ')';
  };
  protoOf(Scale).hashCode = function () {
    var result = getNumberHashCode(this.scale_1);
    result = imul(result, 31) + TransformOrigin__hashCode_impl_pmqpcw(this.transformOrigin_1) | 0;
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    return result;
  };
  protoOf(Scale).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Scale))
      return false;
    if (!equals(this.scale_1, other.scale_1))
      return false;
    if (!equals(new TransformOrigin(this.transformOrigin_1), new TransformOrigin(other.transformOrigin_1)))
      return false;
    if (!equals(this.animationSpec_1, other.animationSpec_1))
      return false;
    return true;
  };
  function Veil(initialColor, targetColor, animationSpec, matchParentSize) {
    this.initialColor_1 = initialColor;
    this.targetColor_1 = targetColor;
    this.animationSpec_1 = animationSpec;
    this.matchParentSize_1 = matchParentSize;
  }
  protoOf(Veil).get_initialColor_xuw9v5_k$ = function () {
    return this.initialColor_1;
  };
  protoOf(Veil).get_targetColor_4dgeog_k$ = function () {
    return this.targetColor_1;
  };
  protoOf(Veil).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Veil).get_matchParentSize_onsyh3_k$ = function () {
    return this.matchParentSize_1;
  };
  protoOf(Veil).component1_9lkot7_k$ = function () {
    return this.initialColor_1;
  };
  protoOf(Veil).component2_ekm1j8_k$ = function () {
    return this.targetColor_1;
  };
  protoOf(Veil).component3_7eebsa_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(Veil).component4_7eebs9_k$ = function () {
    return this.matchParentSize_1;
  };
  protoOf(Veil).copy_ym4std_k$ = function (initialColor, targetColor, animationSpec, matchParentSize) {
    return new Veil(initialColor, targetColor, animationSpec, matchParentSize);
  };
  protoOf(Veil).copy$default_kff6mb_k$ = function (initialColor, targetColor, animationSpec, matchParentSize, $super) {
    initialColor = initialColor === VOID ? this.initialColor_1 : initialColor;
    targetColor = targetColor === VOID ? this.targetColor_1 : targetColor;
    animationSpec = animationSpec === VOID ? this.animationSpec_1 : animationSpec;
    matchParentSize = matchParentSize === VOID ? this.matchParentSize_1 : matchParentSize;
    return $super === VOID ? this.copy_ym4std_k$(initialColor, targetColor, animationSpec, matchParentSize) : $super.copy_ym4std_k$.call(this, new Color_0(initialColor), new Color_0(targetColor), animationSpec, matchParentSize);
  };
  protoOf(Veil).toString = function () {
    return 'Veil(initialColor=' + Color__toString_impl_hpzmaq(this.initialColor_1) + ', targetColor=' + Color__toString_impl_hpzmaq(this.targetColor_1) + ', animationSpec=' + toString_0(this.animationSpec_1) + ', matchParentSize=' + this.matchParentSize_1 + ')';
  };
  protoOf(Veil).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.initialColor_1);
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.targetColor_1) | 0;
    result = imul(result, 31) + hashCode(this.animationSpec_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.matchParentSize_1) | 0;
    return result;
  };
  protoOf(Veil).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Veil))
      return false;
    if (!equals(new Color_0(this.initialColor_1), new Color_0(other.initialColor_1)))
      return false;
    if (!equals(new Color_0(this.targetColor_1), new Color_0(other.targetColor_1)))
      return false;
    if (!equals(this.animationSpec_1, other.animationSpec_1))
      return false;
    if (!(this.matchParentSize_1 === other.matchParentSize_1))
      return false;
    return true;
  };
  function TransitionEffectKey() {
  }
  function TransitionEffect() {
  }
  function ExitTransitionImpl(data) {
    ExitTransition.call(this);
    this.data_1 = data;
  }
  protoOf(ExitTransitionImpl).get_data_jntocg_k$ = function () {
    return this.data_1;
  };
  function expandIn(animationSpec, expandFrom, clip, initialSize) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0, new IntSize(get_VisibilityThreshold_0(Companion_getInstance_3()))) : animationSpec;
    expandFrom = expandFrom === VOID ? Companion_getInstance_9().get_BottomEnd_ayz0tj_k$() : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (initialSize === VOID) {
      tmp = expandIn$lambda;
    } else {
      tmp = initialSize;
    }
    initialSize = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(expandFrom, initialSize, animationSpec, clip)));
  }
  function toAlignment(_this__u8e3s4) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return equals(_this__u8e3s4, Companion_getInstance_9().get_Start_ih4i6x_k$()) ? Companion_getInstance_9().get_CenterStart_2305fg_k$() : equals(_this__u8e3s4, Companion_getInstance_9().get_End_18ju7i_k$()) ? Companion_getInstance_9().get_CenterEnd_uti4xp_k$() : Companion_getInstance_9().get_Center_3arb0i_k$();
  }
  function toAlignment_0(_this__u8e3s4) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return equals(_this__u8e3s4, Companion_getInstance_9().get_Top_18jj1w_k$()) ? Companion_getInstance_9().get_TopCenter_u4q5vl_k$() : equals(_this__u8e3s4, Companion_getInstance_9().get_Bottom_3m75bg_k$()) ? Companion_getInstance_9().get_BottomCenter_yatb1z_k$() : Companion_getInstance_9().get_Center_3arb0i_k$();
  }
  function shrinkOut(animationSpec, shrinkTowards, clip, targetSize) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0, new IntSize(get_VisibilityThreshold_0(Companion_getInstance_3()))) : animationSpec;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_9().get_BottomEnd_ayz0tj_k$() : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (targetSize === VOID) {
      tmp = shrinkOut$lambda;
    } else {
      tmp = targetSize;
    }
    targetSize = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(shrinkTowards, targetSize, animationSpec, clip)));
  }
  function trackActiveMutableState(_this__u8e3s4, sharedMutableTransformState, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    var tmp;
    if (sharedMutableTransformState == null) {
      $composer_0.startReplaceGroup_5hh8aj_k$(-968938819);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4;
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value = new SharedMutableTransformState();
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp1_group = tmp_0;
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp = tmp1_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(-31257052);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp = sharedMutableTransformState;
    }
    var shared = tmp;
    var isMutating = !(_this__u8e3s4.get_pendingTargetState_ogufoy_k$() == null);
    shared.set_isMutating_13zvzp_k$(isMutating);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = $composer_0.changedInstance_s1wkiy_k$(shared);
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (invalid_0 || it_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value_0 = trackActiveMutableState$lambda(shared);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp$ret$4 = tmp_1;
    DeferredTransitionCleanupEffect(_this__u8e3s4, tmp$ret$4, $composer_0, 14 & $changed);
    return shared;
  }
  function VeilModifierElement(transition, veilAnimation, enter, exit, mutableTransformState) {
    ModifierNodeElement.call(this);
    this.transition_1 = transition;
    this.veilAnimation_1 = veilAnimation;
    this.enter_1 = enter;
    this.exit_1 = exit;
    this.mutableTransformState_1 = mutableTransformState;
  }
  protoOf(VeilModifierElement).get_transition_mcca1q_k$ = function () {
    return this.transition_1;
  };
  protoOf(VeilModifierElement).get_veilAnimation_dbg1av_k$ = function () {
    return this.veilAnimation_1;
  };
  protoOf(VeilModifierElement).get_enter_iqxcq7_k$ = function () {
    return this.enter_1;
  };
  protoOf(VeilModifierElement).get_exit_wolopz_k$ = function () {
    return this.exit_1;
  };
  protoOf(VeilModifierElement).get_mutableTransformState_5w8nvi_k$ = function () {
    return this.mutableTransformState_1;
  };
  protoOf(VeilModifierElement).create_md4cuc_k$ = function () {
    return new VeilModifierNode(this.transition_1, this.veilAnimation_1, this.enter_1, this.exit_1, this.mutableTransformState_1);
  };
  protoOf(VeilModifierElement).update_cq57z6_k$ = function (node) {
    node.transition_1 = this.transition_1;
    node.veilAnimation_1 = this.veilAnimation_1;
    node.enter_1 = this.enter_1;
    node.exit_1 = this.exit_1;
    node.mutableTransformState_1 = this.mutableTransformState_1;
  };
  protoOf(VeilModifierElement).update_9wd57p_k$ = function (node) {
    return this.update_cq57z6_k$(node instanceof VeilModifierNode ? node : THROW_CCE());
  };
  protoOf(VeilModifierElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('veil');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('transition', this.transition_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('veilAnimation', this.veilAnimation_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('enter', this.enter_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('exit', this.exit_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('mutableTransformState', this.mutableTransformState_1);
  };
  protoOf(VeilModifierElement).component1_7eebsc_k$ = function () {
    return this.transition_1;
  };
  protoOf(VeilModifierElement).component2_7eebsb_k$ = function () {
    return this.veilAnimation_1;
  };
  protoOf(VeilModifierElement).component3_7eebsa_k$ = function () {
    return this.enter_1;
  };
  protoOf(VeilModifierElement).component4_7eebs9_k$ = function () {
    return this.exit_1;
  };
  protoOf(VeilModifierElement).component5_7eebs8_k$ = function () {
    return this.mutableTransformState_1;
  };
  protoOf(VeilModifierElement).copy_7whlx8_k$ = function (transition, veilAnimation, enter, exit, mutableTransformState) {
    return new VeilModifierElement(transition, veilAnimation, enter, exit, mutableTransformState);
  };
  protoOf(VeilModifierElement).copy$default_brjgk6_k$ = function (transition, veilAnimation, enter, exit, mutableTransformState, $super) {
    transition = transition === VOID ? this.transition_1 : transition;
    veilAnimation = veilAnimation === VOID ? this.veilAnimation_1 : veilAnimation;
    enter = enter === VOID ? this.enter_1 : enter;
    exit = exit === VOID ? this.exit_1 : exit;
    mutableTransformState = mutableTransformState === VOID ? this.mutableTransformState_1 : mutableTransformState;
    return $super === VOID ? this.copy_7whlx8_k$(transition, veilAnimation, enter, exit, mutableTransformState) : $super.copy_7whlx8_k$.call(this, transition, veilAnimation, enter, exit, mutableTransformState);
  };
  protoOf(VeilModifierElement).toString = function () {
    return 'VeilModifierElement(transition=' + this.transition_1.toString() + ', veilAnimation=' + toString_0(this.veilAnimation_1) + ', enter=' + this.enter_1.toString() + ', exit=' + this.exit_1.toString() + ', mutableTransformState=' + toString_0(this.mutableTransformState_1) + ')';
  };
  protoOf(VeilModifierElement).hashCode = function () {
    var result = hashCode(this.transition_1);
    result = imul(result, 31) + hashCode(this.veilAnimation_1) | 0;
    result = imul(result, 31) + this.enter_1.hashCode() | 0;
    result = imul(result, 31) + this.exit_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.mutableTransformState_1) | 0;
    return result;
  };
  protoOf(VeilModifierElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VeilModifierElement))
      return false;
    if (!equals(this.transition_1, other.transition_1))
      return false;
    if (!equals(this.veilAnimation_1, other.veilAnimation_1))
      return false;
    if (!this.enter_1.equals(other.enter_1))
      return false;
    if (!this.exit_1.equals(other.exit_1))
      return false;
    if (!equals(this.mutableTransformState_1, other.mutableTransformState_1))
      return false;
    return true;
  };
  function GraphicsLayerBlockForEnterExit() {
  }
  function createGraphicsLayerBlock(_this__u8e3s4, enter, exit, mutableTransformState, label, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    var shouldAnimateAlpha = !(enter.get_data_jntocg_k$().fade_1 == null) || !(exit.get_data_jntocg_k$().fade_1 == null) || mutableTransformState.get_alphaRequiresAnimation_wvai0x_k$();
    var shouldAnimateScale = !(enter.get_data_jntocg_k$().scale_1 == null) || !(exit.get_data_jntocg_k$().scale_1 == null) || mutableTransformState.get_scaleRequiresAnimation_dkx36d_k$();
    var tmp;
    if (shouldAnimateAlpha) {
      $composer_0.startReplaceGroup_5hh8aj_k$(-1511865571);
      var tmp_0 = get_VectorConverter_1(FloatCompanionObject_getInstance());
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value = label + ' alpha';
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp$ret$0 = tmp_1;
      var tmp1_group = createDeferredAnimation(_this__u8e3s4, tmp_0, tmp$ret$0, $composer_0, 384 | 14 & $changed, 0);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp = tmp1_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(-1511696126);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp = null;
    }
    var alphaAnimation = tmp;
    var tmp_2;
    if (shouldAnimateScale) {
      $composer_0.startReplaceGroup_5hh8aj_k$(-1511628483);
      var tmp_3 = get_VectorConverter_1(FloatCompanionObject_getInstance());
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_4;
      if (false || it_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value_0 = label + ' scale';
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp$ret$4 = tmp_4;
      var tmp2_group = createDeferredAnimation(_this__u8e3s4, tmp_3, tmp$ret$4, $composer_0, 384 | 14 & $changed, 0);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_2 = tmp2_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(-1511459038);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_2 = null;
    }
    var scaleAnimation = tmp_2;
    var tmp_5;
    if (shouldAnimateScale) {
      $composer_0.startReplaceGroup_5hh8aj_k$(-1511381382);
      var tmp3_group = createDeferredAnimation(_this__u8e3s4, get_TransformOriginVectorConverter(), 'TransformOriginInterruptionHandling', $composer_0, 384 | 14 & $changed, 0);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_5 = tmp3_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(-1511209054);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp_5 = null;
    }
    var transformOriginAnimation = tmp_5;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!(!!(!!(!!(!!($composer_0.changedInstance_s1wkiy_k$(alphaAnimation) | (($changed & 112 ^ 48) > 32 && $composer_0.changed_ga7h3f_k$(enter) || ($changed & 48) === 32)) | (($changed & 896 ^ 384) > 256 && $composer_0.changed_ga7h3f_k$(exit) || ($changed & 384) === 256)) | $composer_0.changedInstance_s1wkiy_k$(mutableTransformState)) | $composer_0.changedInstance_s1wkiy_k$(scaleAnimation)) | (($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4)) | $composer_0.changedInstance_s1wkiy_k$(transformOriginAnimation));
    // Inline function 'kotlin.let' call
    var it_1 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_6;
    if (invalid || it_1 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var tmp_7 = createGraphicsLayerBlock$lambda(alphaAnimation, mutableTransformState, scaleAnimation, _this__u8e3s4, enter, exit, transformOriginAnimation);
      var value_1 = new sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0(tmp_7);
      $composer_0.updateRememberedValue_l1wh71_k$(value_1);
      tmp_6 = value_1;
    } else {
      tmp_6 = it_1;
    }
    return tmp_6;
  }
  function EnterExitTransitionElement(transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, mutableTransformState, isEnabled, graphicsLayerBlock) {
    ModifierNodeElement.call(this);
    this.transition_1 = transition;
    this.sizeAnimation_1 = sizeAnimation;
    this.offsetAnimation_1 = offsetAnimation;
    this.slideAnimation_1 = slideAnimation;
    this.enter_1 = enter;
    this.exit_1 = exit;
    this.mutableTransformState_1 = mutableTransformState;
    this.isEnabled_1 = isEnabled;
    this.graphicsLayerBlock_1 = graphicsLayerBlock;
  }
  protoOf(EnterExitTransitionElement).get_transition_mcca1q_k$ = function () {
    return this.transition_1;
  };
  protoOf(EnterExitTransitionElement).set_sizeAnimation_d1qqsi_k$ = function (_set____db54di) {
    this.sizeAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_sizeAnimation_oj7fx6_k$ = function () {
    return this.sizeAnimation_1;
  };
  protoOf(EnterExitTransitionElement).set_offsetAnimation_sbtt4u_k$ = function (_set____db54di) {
    this.offsetAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_offsetAnimation_bqy8g8_k$ = function () {
    return this.offsetAnimation_1;
  };
  protoOf(EnterExitTransitionElement).set_slideAnimation_8zf29m_k$ = function (_set____db54di) {
    this.slideAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_slideAnimation_1jny1w_k$ = function () {
    return this.slideAnimation_1;
  };
  protoOf(EnterExitTransitionElement).set_enter_kk8oi8_k$ = function (_set____db54di) {
    this.enter_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_enter_iqxcq7_k$ = function () {
    return this.enter_1;
  };
  protoOf(EnterExitTransitionElement).set_exit_jz1ms6_k$ = function (_set____db54di) {
    this.exit_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_exit_wolopz_k$ = function () {
    return this.exit_1;
  };
  protoOf(EnterExitTransitionElement).set_mutableTransformState_ue352u_k$ = function (_set____db54di) {
    this.mutableTransformState_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_mutableTransformState_5w8nvi_k$ = function () {
    return this.mutableTransformState_1;
  };
  protoOf(EnterExitTransitionElement).set_isEnabled_9kb97j_k$ = function (_set____db54di) {
    this.isEnabled_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_isEnabled_roz1ma_k$ = function () {
    return this.isEnabled_1;
  };
  protoOf(EnterExitTransitionElement).set_graphicsLayerBlock_3ehvm4_k$ = function (_set____db54di) {
    this.graphicsLayerBlock_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionElement).get_graphicsLayerBlock_45d73k_k$ = function () {
    return this.graphicsLayerBlock_1;
  };
  protoOf(EnterExitTransitionElement).create_md4cuc_k$ = function () {
    return new EnterExitTransitionModifierNode(this.transition_1, this.sizeAnimation_1, this.offsetAnimation_1, this.slideAnimation_1, this.enter_1, this.exit_1, this.mutableTransformState_1, this.isEnabled_1, this.graphicsLayerBlock_1);
  };
  protoOf(EnterExitTransitionElement).update_gf33yv_k$ = function (node) {
    node.transition_1 = this.transition_1;
    node.sizeAnimation_1 = this.sizeAnimation_1;
    node.offsetAnimation_1 = this.offsetAnimation_1;
    node.slideAnimation_1 = this.slideAnimation_1;
    node.enter_1 = this.enter_1;
    node.exit_1 = this.exit_1;
    node.mutableTransformState_1 = this.mutableTransformState_1;
    node.isEnabled_1 = this.isEnabled_1;
    node.graphicsLayerBlock_1 = this.graphicsLayerBlock_1;
  };
  protoOf(EnterExitTransitionElement).update_9wd57p_k$ = function (node) {
    return this.update_gf33yv_k$(node instanceof EnterExitTransitionModifierNode ? node : THROW_CCE());
  };
  protoOf(EnterExitTransitionElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('enterExitTransition');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('transition', this.transition_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('sizeAnimation', this.sizeAnimation_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('offsetAnimation', this.offsetAnimation_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('slideAnimation', this.slideAnimation_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('enter', this.enter_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('exit', this.exit_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('mutableTransformState', this.mutableTransformState_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('graphicsLayerBlock', this.graphicsLayerBlock_1);
  };
  protoOf(EnterExitTransitionElement).hashCode = function () {
    var tmp = imul(hashCode(this.transition_1), 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.sizeAnimation_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp_0 = imul(tmp + tmp$ret$0 | 0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.offsetAnimation_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    var tmp_1 = imul(tmp_0 + tmp$ret$1 | 0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.slideAnimation_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    var tmp$ret$2 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
    return (imul(imul(imul(imul(tmp_1 + tmp$ret$2 | 0, 31) + this.enter_1.hashCode() | 0, 31) + this.exit_1.hashCode() | 0, 31) + hashCode(this.isEnabled_1) | 0, 31) + imul(hashCode(this.graphicsLayerBlock_1), 31) | 0) + hashCode(this.mutableTransformState_1) | 0;
  };
  protoOf(EnterExitTransitionElement).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    var tmp_6;
    var tmp_7;
    if (other instanceof EnterExitTransitionElement) {
      tmp_7 = equals(other.transition_1, this.transition_1);
    } else {
      tmp_7 = false;
    }
    if (tmp_7) {
      tmp_6 = equals(other.sizeAnimation_1, this.sizeAnimation_1);
    } else {
      tmp_6 = false;
    }
    if (tmp_6) {
      tmp_5 = equals(other.offsetAnimation_1, this.offsetAnimation_1);
    } else {
      tmp_5 = false;
    }
    if (tmp_5) {
      tmp_4 = equals(other.slideAnimation_1, this.slideAnimation_1);
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      tmp_3 = other.enter_1.equals(this.enter_1);
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      tmp_2 = other.exit_1.equals(this.exit_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = equals(other.mutableTransformState_1, this.mutableTransformState_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.isEnabled_1 === this.isEnabled_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.graphicsLayerBlock_1, this.graphicsLayerBlock_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  function VeilModifierNode$draw$lambda(this$0) {
    return function ($this$animate) {
      var tmp;
      if ($this$animate.isTransitioningTo_mjamuk_k$(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = this$0.enter_1.get_data_jntocg_k$().veil_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animationSpec_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultColorAnimationSpec() : tmp1_elvis_lhs;
      } else if ($this$animate.isTransitioningTo_mjamuk_k$(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = this$0.exit_1.get_data_jntocg_k$().veil_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.animationSpec_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultColorAnimationSpec() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultColorAnimationSpec();
      }
      return tmp;
    };
  }
  function VeilModifierNode$draw$lambda_0(this$0) {
    return function (it) {
      var tmp;
      switch (it.get_ordinal_ip24qg_k$()) {
        case 1:
          var tmp1_safe_receiver = this$0.enter_1.get_data_jntocg_k$().veil_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.targetColor_1;
          var tmp_0;
          var tmp_1 = tmp2_elvis_lhs;
          if ((tmp_1 == null ? null : new Color_0(tmp_1)) == null) {
            var tmp3_safe_receiver = this$0.exit_1.get_data_jntocg_k$().veil_1;
            tmp_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.initialColor_1;
          } else {
            tmp_0 = tmp2_elvis_lhs;
          }

          var tmp4_elvis_lhs = tmp_0;
          var tmp_2;
          var tmp_3 = tmp4_elvis_lhs;
          if ((tmp_3 == null ? null : new Color_0(tmp_3)) == null) {
            tmp_2 = Companion_getInstance_5().get_Transparent_if5ln4_k$();
          } else {
            tmp_2 = tmp4_elvis_lhs;
          }

          tmp = tmp_2;
          break;
        case 0:
          var tmp5_safe_receiver = this$0.enter_1.get_data_jntocg_k$().veil_1;
          var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.initialColor_1;
          var tmp_4;
          var tmp_5 = tmp6_elvis_lhs;
          if ((tmp_5 == null ? null : new Color_0(tmp_5)) == null) {
            tmp_4 = Companion_getInstance_5().get_Transparent_if5ln4_k$();
          } else {
            tmp_4 = tmp6_elvis_lhs;
          }

          tmp = tmp_4;
          break;
        case 2:
          var tmp7_safe_receiver = this$0.exit_1.get_data_jntocg_k$().veil_1;
          var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.targetColor_1;
          var tmp_6;
          var tmp_7 = tmp8_elvis_lhs;
          if ((tmp_7 == null ? null : new Color_0(tmp_7)) == null) {
            tmp_6 = this$0.mutableTransformState_1.get_lastVeil_ibh81k_k$();
          } else {
            tmp_6 = tmp8_elvis_lhs;
          }

          tmp = tmp_6;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return new Color_0(tmp);
    };
  }
  function VeilModifierNode(transition, veilAnimation, enter, exit, mutableTransformState) {
    Node.call(this);
    this.transition_1 = transition;
    this.veilAnimation_1 = veilAnimation;
    this.enter_1 = enter;
    this.exit_1 = exit;
    this.mutableTransformState_1 = mutableTransformState;
  }
  protoOf(VeilModifierNode).set_transition_3a2emy_k$ = function (_set____db54di) {
    this.transition_1 = _set____db54di;
  };
  protoOf(VeilModifierNode).get_transition_mcca1q_k$ = function () {
    return this.transition_1;
  };
  protoOf(VeilModifierNode).set_veilAnimation_qmjfzq_k$ = function (_set____db54di) {
    this.veilAnimation_1 = _set____db54di;
  };
  protoOf(VeilModifierNode).get_veilAnimation_dbg1av_k$ = function () {
    return this.veilAnimation_1;
  };
  protoOf(VeilModifierNode).set_enter_kk8oi8_k$ = function (_set____db54di) {
    this.enter_1 = _set____db54di;
  };
  protoOf(VeilModifierNode).get_enter_iqxcq7_k$ = function () {
    return this.enter_1;
  };
  protoOf(VeilModifierNode).set_exit_jz1ms6_k$ = function (_set____db54di) {
    this.exit_1 = _set____db54di;
  };
  protoOf(VeilModifierNode).get_exit_wolopz_k$ = function () {
    return this.exit_1;
  };
  protoOf(VeilModifierNode).set_mutableTransformState_ue352u_k$ = function (_set____db54di) {
    this.mutableTransformState_1 = _set____db54di;
  };
  protoOf(VeilModifierNode).get_mutableTransformState_5w8nvi_k$ = function () {
    return this.mutableTransformState_1;
  };
  protoOf(VeilModifierNode).draw_2h95cs_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.drawContent_m0wwjp_k$();
    var tmp = this.veilAnimation_1;
    var tmp_0 = VeilModifierNode$draw$lambda(this);
    var tmp_1 = this.mutableTransformState_1.get_veilHandoffValue_jcp0lu_k$();
    var tmp_2 = tmp_1 == null ? null : new Color_0(tmp_1);
    var veilColor = tmp.animate$default_7ujzjj_k$(tmp_0, tmp_2, VOID, VeilModifierNode$draw$lambda_0(this));
    var combinedVeilColor = this.mutableTransformState_1.combinedVeil_wl9j1n_k$(veilColor.get_value_j01efc_k$().value_1);
    if (!(_Color___get_alpha__impl__wcfyv1(combinedVeilColor) === 0.0)) {
      var tmp0_elvis_lhs = this.enter_1.get_data_jntocg_k$().veil_1;
      var veil = tmp0_elvis_lhs == null ? this.exit_1.get_data_jntocg_k$().veil_1 : tmp0_elvis_lhs;
      if ((veil == null ? null : veil.matchParentSize_1) === true) {
        var layoutCoordinates = requireLayoutCoordinates(this);
        var tmp1_safe_receiver = layoutCoordinates.get_parentLayoutCoordinates_fdh4ou_k$();
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_size_kd98kr_k$();
        var tmp_3;
        var tmp_4 = tmp2_safe_receiver;
        if ((tmp_4 == null ? null : new IntSize(tmp_4)) == null) {
          tmp_3 = null;
        } else {
          var tmp_5 = tmp2_safe_receiver;
          // Inline function 'kotlin.let' call
          var it = (tmp_5 == null ? null : new IntSize(tmp_5)).packedValue_1;
          // Inline function 'androidx.compose.ui.unit.IntSize.width' call
          // Inline function 'androidx.compose.ui.util.unpackInt1' call
          var value = _IntSize___get_packedValue__impl__uho7jf(it);
          var tmp0 = convertToInt(shiftRight(value, 32));
          // Inline function 'androidx.compose.ui.unit.IntSize.height' call
          // Inline function 'androidx.compose.ui.util.unpackInt2' call
          var value_0 = _IntSize___get_packedValue__impl__uho7jf(it);
          // Inline function 'androidx.compose.ui.geometry.Size' call
          // Inline function 'androidx.compose.ui.util.packFloats' call
          var val2 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
          var v1 = fromInt(toRawBits(tmp0));
          var v2 = fromInt(toRawBits(val2));
          var tmp$ret$7 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
          tmp_3 = _Size___init__impl__aywn0g(tmp$ret$7);
        }
        var tmp3_elvis_lhs = tmp_3;
        var tmp_6;
        var tmp_7 = tmp3_elvis_lhs;
        if ((tmp_7 == null ? null : new Size(tmp_7)) == null) {
          tmp_6 = Companion_getInstance_10().get_Zero_rugywl_k$();
        } else {
          tmp_6 = tmp3_elvis_lhs;
        }
        var parentSize = tmp_6;
        var offsetInParent = positionInParent(layoutCoordinates);
        // Inline function 'androidx.compose.ui.geometry.Offset.unaryMinus' call
        var tmp4_topLeft = _Offset___init__impl__c168vi(bitwiseXor(_Offset___get_packedValue__impl__xh2k8q(offsetInParent), new Long(-2147483648, -2147483648)));
        _this__u8e3s4.drawRect$default_5x4e2k_k$(combinedVeilColor, tmp4_topLeft, parentSize);
      } else {
        _this__u8e3s4.drawRect$default_5x4e2k_k$(combinedVeilColor);
      }
    }
  };
  function _set_lookaheadConstraintsAvailable__g4tuk0($this, _set____db54di) {
    $this.lookaheadConstraintsAvailable_1 = _set____db54di;
  }
  function _get_lookaheadConstraintsAvailable__6k3wx0($this) {
    return $this.lookaheadConstraintsAvailable_1;
  }
  function _set_lookaheadSize__8e6fb6($this, _set____db54di) {
    $this.lookaheadSize_1 = _set____db54di;
  }
  function _get_lookaheadSize__6tl376($this) {
    return $this.lookaheadSize_1;
  }
  function _set_lookaheadConstraints__uusx37($this, value) {
    $this.lookaheadConstraintsAvailable_1 = true;
    $this.lookaheadConstraints_1 = value;
  }
  function _get_lookaheadConstraints__gwq92v($this) {
    return $this.lookaheadConstraints_1;
  }
  function EnterExitTransitionModifierNode$sizeTransitionSpec$lambda(this$0) {
    return function (_this__u8e3s4) {
      var tmp;
      if (_this__u8e3s4.isTransitioningTo_mjamuk_k$(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = this$0.enter_1.get_data_jntocg_k$().changeSize_1;
        tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animationSpec_1;
      } else if (_this__u8e3s4.isTransitioningTo_mjamuk_k$(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp1_safe_receiver = this$0.exit_1.get_data_jntocg_k$().changeSize_1;
        tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.animationSpec_1;
      } else {
        tmp = get_DefaultSizeAnimationSpec();
      }
      var tmp2_elvis_lhs = tmp;
      return tmp2_elvis_lhs == null ? get_DefaultSizeAnimationSpec() : tmp2_elvis_lhs;
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.place$default_61faqz_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_0(this$0, $target) {
    return function (it) {
      return new IntSize(this$0.sizeByState_uhydwr_k$(it, $target));
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_1($this$animate) {
    return get_DefaultOffsetAnimationSpec();
  }
  function EnterExitTransitionModifierNode$measure$lambda_2(this$0, $target) {
    return function (it) {
      return new IntOffset(this$0.targetOffsetByState_8xbww4_k$(it, $target));
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_3(this$0, $target) {
    return function (it) {
      var tmp;
      if (it.equals(EnterExitState_PostExit_getInstance()) && this$0.exit_1.get_data_jntocg_k$().slide_1 == null) {
        tmp = this$0.mutableTransformState_1.get_lastSlide_7r3tb3_k$();
      } else {
        tmp = this$0.slideTargetValueByState_dfs3rb_k$(it, $target);
      }
      return new IntOffset(tmp);
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_4(this$0, $animSlideOffsetState, $measuredSize, $target, $currentSize, $placeable, $offsetDelta, $layerBlock) {
    return function ($this$layout) {
      var tmp = this$0.mutableTransformState_1;
      var tmp0_safe_receiver = $animSlideOffsetState;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp_1 = tmp0_safe_receiver.get_value_j01efc_k$();
        tmp_0 = tmp_1 == null ? null : tmp_1.packedValue_1;
      }
      var tmp1_elvis_lhs = tmp_0;
      var tmp_2;
      var tmp_3 = tmp1_elvis_lhs;
      if ((tmp_3 == null ? null : new IntOffset(tmp_3)) == null) {
        tmp_2 = Companion_getInstance_7().get_Zero_6hc3i8_k$();
      } else {
        tmp_2 = tmp1_elvis_lhs;
      }
      var combinedSlideOffset = tmp.combinedSlide_61c4l3_k$(tmp_2, $measuredSize);
      var tmp2_safe_receiver = this$0.currentAlignment_1;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.align_mb8mzc_k$($target, $currentSize, LayoutDirection_Ltr_getInstance());
      var tmp_4;
      var tmp_5 = tmp3_elvis_lhs;
      if ((tmp_5 == null ? null : new IntOffset(tmp_5)) == null) {
        tmp_4 = Companion_getInstance_7().get_Zero_6hc3i8_k$();
      } else {
        tmp_4 = tmp3_elvis_lhs;
      }
      var offset = IntOffset__plus_impl_nqoa9b(tmp_4, combinedSlideOffset);
      $this$layout.placeWithLayer_c7y141_k$($placeable, _IntOffset___get_x__impl__qiqr5o(offset) + _IntOffset___get_x__impl__qiqr5o($offsetDelta) | 0, _IntOffset___get_y__impl__2avpwj(offset) + _IntOffset___get_y__impl__2avpwj($offsetDelta) | 0, 0.0, $layerBlock);
      return Unit_getInstance();
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_5($$this$run) {
    return function ($this$layout) {
      $this$layout.place$default_61faqz_k$($$this$run, 0, 0);
      return Unit_getInstance();
    };
  }
  function EnterExitTransitionModifierNode$slideSpec$lambda(this$0) {
    return function (_this__u8e3s4) {
      var tmp;
      if (_this__u8e3s4.isTransitioningTo_mjamuk_k$(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = this$0.enter_1.get_data_jntocg_k$().slide_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animationSpec_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultOffsetAnimationSpec() : tmp1_elvis_lhs;
      } else if (_this__u8e3s4.isTransitioningTo_mjamuk_k$(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = this$0.exit_1.get_data_jntocg_k$().slide_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.animationSpec_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultOffsetAnimationSpec() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultOffsetAnimationSpec();
      }
      return tmp;
    };
  }
  function EnterExitTransitionModifierNode(transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, mutableTransformState, isEnabled, graphicsLayerBlock) {
    LayoutModifierNodeWithPassThroughIntrinsics.call(this);
    this.transition_1 = transition;
    this.sizeAnimation_1 = sizeAnimation;
    this.offsetAnimation_1 = offsetAnimation;
    this.slideAnimation_1 = slideAnimation;
    this.enter_1 = enter;
    this.exit_1 = exit;
    this.mutableTransformState_1 = mutableTransformState;
    this.isEnabled_1 = isEnabled;
    this.graphicsLayerBlock_1 = graphicsLayerBlock;
    this.lookaheadConstraintsAvailable_1 = false;
    this.lookaheadSize_1 = get_InvalidSize();
    this.lookaheadConstraints_1 = Constraints();
    this.currentAlignment_1 = null;
    var tmp = this;
    tmp.sizeTransitionSpec_1 = EnterExitTransitionModifierNode$sizeTransitionSpec$lambda(this);
    var tmp_0 = this;
    tmp_0.slideSpec_1 = EnterExitTransitionModifierNode$slideSpec$lambda(this);
  }
  protoOf(EnterExitTransitionModifierNode).set_transition_3a2emy_k$ = function (_set____db54di) {
    this.transition_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_transition_mcca1q_k$ = function () {
    return this.transition_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_sizeAnimation_d1qqsi_k$ = function (_set____db54di) {
    this.sizeAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_sizeAnimation_oj7fx6_k$ = function () {
    return this.sizeAnimation_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_offsetAnimation_sbtt4u_k$ = function (_set____db54di) {
    this.offsetAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_offsetAnimation_bqy8g8_k$ = function () {
    return this.offsetAnimation_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_slideAnimation_8zf29m_k$ = function (_set____db54di) {
    this.slideAnimation_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_slideAnimation_1jny1w_k$ = function () {
    return this.slideAnimation_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_enter_kk8oi8_k$ = function (_set____db54di) {
    this.enter_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_enter_iqxcq7_k$ = function () {
    return this.enter_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_exit_jz1ms6_k$ = function (_set____db54di) {
    this.exit_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_exit_wolopz_k$ = function () {
    return this.exit_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_mutableTransformState_ue352u_k$ = function (_set____db54di) {
    this.mutableTransformState_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_mutableTransformState_5w8nvi_k$ = function () {
    return this.mutableTransformState_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_isEnabled_9kb97j_k$ = function (_set____db54di) {
    this.isEnabled_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_isEnabled_roz1ma_k$ = function () {
    return this.isEnabled_1;
  };
  protoOf(EnterExitTransitionModifierNode).set_graphicsLayerBlock_3ehvm4_k$ = function (_set____db54di) {
    this.graphicsLayerBlock_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_graphicsLayerBlock_45d73k_k$ = function () {
    return this.graphicsLayerBlock_1;
  };
  protoOf(EnterExitTransitionModifierNode).onPlaced_l0he8c_k$ = function (coordinates) {
    this.mutableTransformState_1.set_parentLayoutCoordinates_tau2j6_k$(coordinates);
  };
  protoOf(EnterExitTransitionModifierNode).set_currentAlignment_hwjxzb_k$ = function (_set____db54di) {
    this.currentAlignment_1 = _set____db54di;
  };
  protoOf(EnterExitTransitionModifierNode).get_currentAlignment_1b8qb7_k$ = function () {
    return this.currentAlignment_1;
  };
  protoOf(EnterExitTransitionModifierNode).get_alignment_xa1jnq_k$ = function () {
    // Inline function 'kotlin.with' call
    var tmp;
    if (this.transition_1.get_segment_xwnoei_k$().isTransitioningTo_mjamuk_k$(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
      var tmp0_safe_receiver = this.enter_1.get_data_jntocg_k$().changeSize_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.alignment_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp2_safe_receiver = this.exit_1.get_data_jntocg_k$().changeSize_1;
        tmp_0 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.alignment_1;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      var tmp3_safe_receiver = this.exit_1.get_data_jntocg_k$().changeSize_1;
      var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.alignment_1;
      var tmp_1;
      if (tmp4_elvis_lhs == null) {
        var tmp5_safe_receiver = this.enter_1.get_data_jntocg_k$().changeSize_1;
        tmp_1 = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.alignment_1;
      } else {
        tmp_1 = tmp4_elvis_lhs;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).get_sizeTransitionSpec_sffkq_k$ = function () {
    return this.sizeTransitionSpec_1;
  };
  protoOf(EnterExitTransitionModifierNode).sizeByState_uhydwr_k$ = function (targetState, fullSize) {
    var tmp;
    switch (targetState.get_ordinal_ip24qg_k$()) {
      case 1:
        tmp = fullSize;
        break;
      case 0:
        var tmp1_safe_receiver = this.enter_1.get_data_jntocg_k$().changeSize_1;
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.size_1;
        var tmp_0;
        if (tmp2_safe_receiver == null) {
          tmp_0 = null;
        } else {
          var tmp_1 = tmp2_safe_receiver(new IntSize(fullSize));
          tmp_0 = tmp_1 == null ? null : tmp_1.packedValue_1;
        }

        var tmp3_elvis_lhs = tmp_0;
        var tmp_2;
        var tmp_3 = tmp3_elvis_lhs;
        if ((tmp_3 == null ? null : new IntSize(tmp_3)) == null) {
          tmp_2 = fullSize;
        } else {
          tmp_2 = tmp3_elvis_lhs;
        }

        tmp = tmp_2;
        break;
      case 2:
        var tmp4_safe_receiver = this.exit_1.get_data_jntocg_k$().changeSize_1;
        var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.size_1;
        var tmp_4;
        if (tmp5_safe_receiver == null) {
          tmp_4 = null;
        } else {
          var tmp_5 = tmp5_safe_receiver(new IntSize(fullSize));
          tmp_4 = tmp_5 == null ? null : tmp_5.packedValue_1;
        }

        var tmp6_elvis_lhs = tmp_4;
        var tmp_6;
        var tmp_7 = tmp6_elvis_lhs;
        if ((tmp_7 == null ? null : new IntSize(tmp_7)) == null) {
          tmp_6 = fullSize;
        } else {
          tmp_6 = tmp6_elvis_lhs;
        }

        tmp = tmp_6;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).onAttach_juzy2c_k$ = function () {
    protoOf(LayoutModifierNodeWithPassThroughIntrinsics).onAttach_juzy2c_k$.call(this);
    this.lookaheadConstraintsAvailable_1 = false;
    this.lookaheadSize_1 = get_InvalidSize();
  };
  protoOf(EnterExitTransitionModifierNode).targetOffsetByState_8xbww4_k$ = function (targetState, fullSize) {
    var tmp;
    if (this.currentAlignment_1 == null) {
      tmp = Companion_getInstance_7().get_Zero_6hc3i8_k$();
    } else if (this.get_alignment_xa1jnq_k$() == null) {
      tmp = Companion_getInstance_7().get_Zero_6hc3i8_k$();
    } else if (equals(this.currentAlignment_1, this.get_alignment_xa1jnq_k$())) {
      tmp = Companion_getInstance_7().get_Zero_6hc3i8_k$();
    } else {
      var tmp_0;
      switch (targetState.get_ordinal_ip24qg_k$()) {
        case 1:
          tmp_0 = Companion_getInstance_7().get_Zero_6hc3i8_k$();
          break;
        case 0:
          tmp_0 = Companion_getInstance_7().get_Zero_6hc3i8_k$();
          break;
        case 2:
          var tmp1_safe_receiver = this.exit_1.get_data_jntocg_k$().changeSize_1;
          var tmp_1;
          if (tmp1_safe_receiver == null) {
            tmp_1 = null;
          } else {
            // Inline function 'kotlin.let' call
            var endSize = tmp1_safe_receiver.size_1(new IntSize(fullSize)).packedValue_1;
            var targetOffset = ensureNotNull(this.get_alignment_xa1jnq_k$()).align_mb8mzc_k$(fullSize, endSize, LayoutDirection_Ltr_getInstance());
            var currentOffset = ensureNotNull(this.currentAlignment_1).align_mb8mzc_k$(fullSize, endSize, LayoutDirection_Ltr_getInstance());
            tmp_1 = IntOffset__minus_impl_4m69hb(targetOffset, currentOffset);
          }

          var tmp2_elvis_lhs = tmp_1;
          var tmp_2;
          var tmp_3 = tmp2_elvis_lhs;
          if ((tmp_3 == null ? null : new IntOffset(tmp_3)) == null) {
            tmp_2 = Companion_getInstance_7().get_Zero_6hc3i8_k$();
          } else {
            tmp_2 = tmp2_elvis_lhs;
          }

          tmp_0 = tmp_2;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    if (this.transition_1.get_currentState_snihnl_k$().equals(this.transition_1.get_targetState_kri3mx_k$())) {
      this.currentAlignment_1 = null;
    } else if (this.currentAlignment_1 == null) {
      var tmp = this;
      var tmp0_elvis_lhs = this.get_alignment_xa1jnq_k$();
      tmp.currentAlignment_1 = tmp0_elvis_lhs == null ? Companion_getInstance_9().get_TopStart_o4x792_k$() : tmp0_elvis_lhs;
    }
    if (_this__u8e3s4.get_isLookingAhead_2057g1_k$()) {
      var placeable = measurable.measure_4dmfk1_k$(constraints);
      var tmp0 = placeable.get_width_j0q4yl_k$();
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = placeable.get_height_e7t92o_k$();
      var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var measuredSize = _IntSize___init__impl__emcjft(tmp$ret$1);
      this.lookaheadSize_1 = measuredSize;
      _set_lookaheadConstraints__uusx37(this, constraints);
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(measuredSize);
      var tmp_0 = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(measuredSize);
      var tmp_1 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      return _this__u8e3s4.layout$default_n19e5l_k$(tmp_0, tmp_1, VOID, EnterExitTransitionModifierNode$measure$lambda(placeable));
    } else if (this.isEnabled_1()) {
      var layerBlock = this.graphicsLayerBlock_1.init_1xdsg_k$();
      var placeable_0 = measurable.measure_4dmfk1_k$(constraints);
      var tmp0_0 = placeable_0.get_width_j0q4yl_k$();
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2_0 = placeable_0.get_height_e7t92o_k$();
      var tmp$ret$7 = bitwiseOr(shiftLeft(fromInt(tmp0_0), 32), bitwiseAnd(fromInt(val2_0), new Long(-1, 0)));
      var measuredSize_0 = _IntSize___init__impl__emcjft(tmp$ret$7);
      var target = get_isValid(this.lookaheadSize_1) ? this.lookaheadSize_1 : measuredSize_0;
      var tmp1_safe_receiver = this.sizeAnimation_1;
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        tmp_2 = tmp1_safe_receiver.animate_lt3uhv_k$(this.sizeTransitionSpec_1, EnterExitTransitionModifierNode$measure$lambda_0(this, target));
      }
      var animSize = tmp_2;
      var tmp_3;
      if (animSize == null) {
        tmp_3 = null;
      } else {
        var tmp_4 = animSize.get_value_j01efc_k$();
        tmp_3 = tmp_4 == null ? null : tmp_4.packedValue_1;
      }
      var tmp3_elvis_lhs = tmp_3;
      var tmp_5;
      var tmp_6 = tmp3_elvis_lhs;
      if ((tmp_6 == null ? null : new IntSize(tmp_6)) == null) {
        tmp_5 = measuredSize_0;
      } else {
        tmp_5 = tmp3_elvis_lhs;
      }
      var currentSize = constrain(constraints, tmp_5);
      var tmp4_safe_receiver = this.offsetAnimation_1;
      var tmp_7;
      if (tmp4_safe_receiver == null) {
        tmp_7 = null;
      } else {
        var tmp_8 = EnterExitTransitionModifierNode$measure$lambda_1;
        tmp_7 = tmp4_safe_receiver.animate_lt3uhv_k$(tmp_8, EnterExitTransitionModifierNode$measure$lambda_2(this, target));
      }
      var tmp5_safe_receiver = tmp_7;
      var tmp_9;
      if (tmp5_safe_receiver == null) {
        tmp_9 = null;
      } else {
        var tmp_10 = tmp5_safe_receiver.get_value_j01efc_k$();
        tmp_9 = tmp_10 == null ? null : tmp_10.packedValue_1;
      }
      var tmp6_elvis_lhs = tmp_9;
      var tmp_11;
      var tmp_12 = tmp6_elvis_lhs;
      if ((tmp_12 == null ? null : new IntOffset(tmp_12)) == null) {
        tmp_11 = Companion_getInstance_7().get_Zero_6hc3i8_k$();
      } else {
        tmp_11 = tmp6_elvis_lhs;
      }
      var offsetDelta = tmp_11;
      var tmp7_safe_receiver = this.slideAnimation_1;
      var tmp_13;
      if (tmp7_safe_receiver == null) {
        tmp_13 = null;
      } else {
        var tmp_14 = this.mutableTransformState_1.get_slideHandoffValue_jz2v95_k$();
        var tmp_15 = tmp_14 == null ? null : new IntOffset(tmp_14);
        var tmp_16 = this.mutableTransformState_1.get_slideHandoffVelocity_4qhcdx_k$();
        tmp_13 = tmp7_safe_receiver.animate_mgs5a2_k$(this.slideSpec_1, tmp_15, tmp_16, EnterExitTransitionModifierNode$measure$lambda_3(this, target));
      }
      var animSlideOffsetState = tmp_13;
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value_1 = _IntSize___get_packedValue__impl__uho7jf(currentSize);
      var tmp_17 = convertToInt(shiftRight(value_1, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_2 = _IntSize___get_packedValue__impl__uho7jf(currentSize);
      var tmp_18 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      return _this__u8e3s4.layout$default_n19e5l_k$(tmp_17, tmp_18, VOID, EnterExitTransitionModifierNode$measure$lambda_4(this, animSlideOffsetState, measuredSize_0, target, currentSize, placeable_0, offsetDelta, layerBlock));
    } else {
      // Inline function 'kotlin.run' call
      var $this$run = measurable.measure_4dmfk1_k$(constraints);
      var tmp_19 = $this$run.get_width_j0q4yl_k$();
      var tmp_20 = $this$run.get_height_e7t92o_k$();
      return _this__u8e3s4.layout$default_n19e5l_k$(tmp_19, tmp_20, VOID, EnterExitTransitionModifierNode$measure$lambda_5($this$run));
    }
  };
  protoOf(EnterExitTransitionModifierNode).get_slideSpec_4nowbh_k$ = function () {
    return this.slideSpec_1;
  };
  protoOf(EnterExitTransitionModifierNode).slideTargetValueByState_dfs3rb_k$ = function (targetState, fullSize) {
    var tmp0_safe_receiver = this.enter_1.get_data_jntocg_k$().slide_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.slideOffset_1;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp_0 = tmp1_safe_receiver(new IntSize(fullSize));
      tmp = tmp_0 == null ? null : tmp_0.packedValue_1;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_1;
    var tmp_2 = tmp2_elvis_lhs;
    if ((tmp_2 == null ? null : new IntOffset(tmp_2)) == null) {
      tmp_1 = Companion_getInstance_7().get_Zero_6hc3i8_k$();
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    var preEnter = tmp_1;
    var tmp3_safe_receiver = this.exit_1.get_data_jntocg_k$().slide_1;
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.slideOffset_1;
    var tmp_3;
    if (tmp4_safe_receiver == null) {
      tmp_3 = null;
    } else {
      var tmp_4 = tmp4_safe_receiver(new IntSize(fullSize));
      tmp_3 = tmp_4 == null ? null : tmp_4.packedValue_1;
    }
    var tmp5_elvis_lhs = tmp_3;
    var tmp_5;
    var tmp_6 = tmp5_elvis_lhs;
    if ((tmp_6 == null ? null : new IntOffset(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_7().get_Zero_6hc3i8_k$();
    } else {
      tmp_5 = tmp5_elvis_lhs;
    }
    var postExit = tmp_5;
    var tmp_7;
    switch (targetState.get_ordinal_ip24qg_k$()) {
      case 1:
        tmp_7 = Companion_getInstance_7().get_Zero_6hc3i8_k$();
        break;
      case 0:
        tmp_7 = preEnter;
        break;
      case 2:
        tmp_7 = postExit;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_7;
  };
  function sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).init_1xdsg_k$ = function () {
    return this.function_1();
  };
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, GraphicsLayerBlockForEnterExit) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function TransformOriginVectorConverter$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new AnimationVector2D(_TransformOrigin___get_pivotFractionX__impl__a9pmci(it.packedValue_1), _TransformOrigin___get_pivotFractionY__impl__ijwupp(it.packedValue_1));
  }
  function TransformOriginVectorConverter$lambda_0(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new TransformOrigin(TransformOrigin_0(it.get_v1_kntnng_k$(), it.get_v2_kntnnf_k$()));
  }
  function expandHorizontally$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function expandHorizontally$lambda_0($initialWidth) {
    return function (it) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = it.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var tmp$ret$0 = convertToInt(shiftRight(value, 32));
      var tmp0 = $initialWidth(tmp$ret$0);
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_1 = it.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      var tmp$ret$5 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$4 = _IntSize___init__impl__emcjft(tmp$ret$5);
      return new IntSize(tmp$ret$4);
    };
  }
  function expandVertically$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function expandVertically$lambda_0($initialHeight) {
    return function (it) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = it.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var tmp0 = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_1 = it.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
      var tmp$ret$2 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = $initialHeight(tmp$ret$2);
      var tmp$ret$5 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$4 = _IntSize___init__impl__emcjft(tmp$ret$5);
      return new IntSize(tmp$ret$4);
    };
  }
  function shrinkHorizontally$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function shrinkHorizontally$lambda_0($targetWidth) {
    return function (it) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = it.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var tmp$ret$0 = convertToInt(shiftRight(value, 32));
      var tmp0 = $targetWidth(tmp$ret$0);
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_1 = it.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      var tmp$ret$5 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$4 = _IntSize___init__impl__emcjft(tmp$ret$5);
      return new IntSize(tmp$ret$4);
    };
  }
  function shrinkVertically$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function shrinkVertically$lambda_0($targetHeight) {
    return function (it) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = it.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var tmp0 = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_1 = it.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
      var tmp$ret$2 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = $targetHeight(tmp$ret$2);
      var tmp$ret$5 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$4 = _IntSize___init__impl__emcjft(tmp$ret$5);
      return new IntSize(tmp$ret$4);
    };
  }
  function createModifier$lambda() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return true;
  }
  function createModifier$lambda_0($activeMutableState) {
    return function () {
      return $activeMutableState;
    };
  }
  function createModifier$lambda_1($disableClip, $isEnabled) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.set_clip_a88iug_k$(!$disableClip && $isEnabled._v());
      return Unit_getInstance();
    };
  }
  function DeferredTransitionCleanupEffect$lambda($this_DeferredTransitionCleanupEffect, $effect, $$changed) {
    return function ($composer, $force) {
      DeferredTransitionCleanupEffect($this_DeferredTransitionCleanupEffect, $effect, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function trackActiveEnter$lambda($activeEnter$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('activeEnter', KMutableProperty0, true);
    return $activeEnter$delegate.get_value_j01efc_k$();
  }
  function trackActiveEnter$lambda_0($activeEnter$delegate, _set____db54di) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('activeEnter', KMutableProperty0, true);
    $activeEnter$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function trackActiveExit$lambda($activeExit$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('activeExit', KMutableProperty0, true);
    return $activeExit$delegate.get_value_j01efc_k$();
  }
  function trackActiveExit$lambda_0($activeExit$delegate, _set____db54di) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('activeExit', KMutableProperty0, true);
    $activeExit$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function trackActiveExit$lambda_1(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new IntOffset(Companion_getInstance_7().get_Zero_6hc3i8_k$());
  }
  function trackActiveExit$lambda_2(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return it;
  }
  function expandIn$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(0), 32), bitwiseAnd(fromInt(0), new Long(-1, 0)));
    var tmp$ret$0 = _IntSize___init__impl__emcjft(tmp$ret$1);
    return new IntSize(tmp$ret$0);
  }
  function shrinkOut$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(0), 32), bitwiseAnd(fromInt(0), new Long(-1, 0)));
    var tmp$ret$0 = _IntSize___init__impl__emcjft(tmp$ret$1);
    return new IntSize(tmp$ret$0);
  }
  function trackActiveMutableState$lambda($shared) {
    return function () {
      $shared.clear_j9egeb_k$();
      return Unit_getInstance();
    };
  }
  function createGraphicsLayerBlock$lambda$lambda($enter, $exit) {
    return function ($this$animate) {
      var tmp;
      if ($this$animate.isTransitioningTo_mjamuk_k$(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = $enter.get_data_jntocg_k$().fade_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animationSpec_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp1_elvis_lhs;
      } else if ($this$animate.isTransitioningTo_mjamuk_k$(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = $exit.get_data_jntocg_k$().fade_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.animationSpec_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultAlphaAndScaleSpring();
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_0($enter, $exit, $mutableTransformState) {
    return function (it) {
      var tmp;
      switch (it.get_ordinal_ip24qg_k$()) {
        case 1:
          tmp = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.get_data_jntocg_k$().fade_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.alpha_1;
          tmp = tmp2_elvis_lhs == null ? 1.0 : tmp2_elvis_lhs;
          break;
        case 2:
          var tmp3_safe_receiver = $exit.get_data_jntocg_k$().fade_1;
          var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.alpha_1;
          tmp = tmp4_elvis_lhs == null ? $mutableTransformState.get_lastAlpha_tojuip_k$() : tmp4_elvis_lhs;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_1($enter, $exit) {
    return function ($this$animate) {
      var tmp;
      if ($this$animate.isTransitioningTo_mjamuk_k$(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = $enter.get_data_jntocg_k$().scale_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animationSpec_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp1_elvis_lhs;
      } else if ($this$animate.isTransitioningTo_mjamuk_k$(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.animationSpec_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultAlphaAndScaleSpring();
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_2($enter, $exit, $mutableTransformState) {
    return function (it) {
      var tmp;
      switch (it.get_ordinal_ip24qg_k$()) {
        case 1:
          tmp = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.get_data_jntocg_k$().scale_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.scale_1;
          tmp = tmp2_elvis_lhs == null ? 1.0 : tmp2_elvis_lhs;
          break;
        case 2:
          var tmp3_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
          var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.scale_1;
          tmp = tmp4_elvis_lhs == null ? $mutableTransformState.get_lastScale_tetlqt_k$() : tmp4_elvis_lhs;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_3($this$animate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return spring();
  }
  function createGraphicsLayerBlock$lambda$lambda_4($transformOriginWhenVisible, $enter, $exit, $mutableTransformState) {
    return function (it) {
      var tmp;
      switch (it.get_ordinal_ip24qg_k$()) {
        case 1:
          tmp = $transformOriginWhenVisible;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.get_data_jntocg_k$().scale_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.transformOrigin_1;
          var tmp_0;
          var tmp_1 = tmp2_elvis_lhs;
          if ((tmp_1 == null ? null : new TransformOrigin(tmp_1)) == null) {
            var tmp3_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
            tmp_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.transformOrigin_1;
          } else {
            tmp_0 = tmp2_elvis_lhs;
          }

          tmp = tmp_0;
          break;
        case 2:
          var tmp4_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
          var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.transformOrigin_1;
          var tmp_2;
          var tmp_3 = tmp5_elvis_lhs;
          if ((tmp_3 == null ? null : new TransformOrigin(tmp_3)) == null) {
            tmp_2 = $mutableTransformState.get_lastTransformOrigin_mnagwl_k$();
          } else {
            tmp_2 = tmp5_elvis_lhs;
          }

          tmp = tmp_2;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp6_elvis_lhs = tmp;
      var tmp_4;
      var tmp_5 = tmp6_elvis_lhs;
      if ((tmp_5 == null ? null : new TransformOrigin(tmp_5)) == null) {
        tmp_4 = Companion_getInstance_6().get_Center_bvqaiy_k$();
      } else {
        tmp_4 = tmp6_elvis_lhs;
      }
      return new TransformOrigin(tmp_4);
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_5($mutableTransformState, $alpha, $scale, $transformOrigin) {
    return function (_this__u8e3s4) {
      var tmp0_safe_receiver = $alpha;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_value_j01efc_k$();
      _this__u8e3s4.set_alpha_tvzcqh_k$($mutableTransformState.combinedAlpha_uqmbgh_k$(tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs));
      var tmp2_safe_receiver = $scale;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_value_j01efc_k$();
      var combinedScale = $mutableTransformState.combinedScale_f1nz83_k$(tmp3_elvis_lhs == null ? 1.0 : tmp3_elvis_lhs);
      _this__u8e3s4.set_scaleX_ykjjzx_k$(combinedScale);
      _this__u8e3s4.set_scaleY_i4eqp0_k$(combinedScale);
      var tmp4_safe_receiver = $transformOrigin;
      var tmp;
      if (tmp4_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = tmp4_safe_receiver.get_value_j01efc_k$();
        tmp = tmp_0 == null ? null : tmp_0.packedValue_1;
      }
      var tmp5_elvis_lhs = tmp;
      var tmp_1;
      var tmp_2 = tmp5_elvis_lhs;
      if ((tmp_2 == null ? null : new TransformOrigin(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_6().get_Center_bvqaiy_k$();
      } else {
        tmp_1 = tmp5_elvis_lhs;
      }
      _this__u8e3s4.set_transformOrigin_wfji5_k$($mutableTransformState.combinedTransformOrigin_7mwi2r_k$(tmp_1));
      return Unit_getInstance();
    };
  }
  function createGraphicsLayerBlock$lambda($alphaAnimation, $mutableTransformState, $scaleAnimation, $this_createGraphicsLayerBlock, $enter, $exit, $transformOriginAnimation) {
    return function () {
      var tmp0_safe_receiver = $alphaAnimation;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = createGraphicsLayerBlock$lambda$lambda($enter, $exit);
        var tmp_1 = $mutableTransformState.get_alphaHandoffValue_381yti_k$();
        tmp = tmp0_safe_receiver.animate$default_7ujzjj_k$(tmp_0, tmp_1, VOID, createGraphicsLayerBlock$lambda$lambda_0($enter, $exit, $mutableTransformState));
      }
      var alpha = tmp;
      var tmp1_safe_receiver = $scaleAnimation;
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        var tmp_3 = createGraphicsLayerBlock$lambda$lambda_1($enter, $exit);
        var tmp_4 = $mutableTransformState.get_scaleHandoffValue_fsga6m_k$();
        var tmp_5 = $mutableTransformState.get_scaleHandoffVelocity_f7nfp8_k$();
        tmp_2 = tmp1_safe_receiver.animate_mgs5a2_k$(tmp_3, tmp_4, tmp_5, createGraphicsLayerBlock$lambda$lambda_2($enter, $exit, $mutableTransformState));
      }
      var scale = tmp_2;
      var tmp_6;
      if ($this_createGraphicsLayerBlock.get_currentState_snihnl_k$().equals(EnterExitState_PreEnter_getInstance())) {
        var tmp2_safe_receiver = $enter.get_data_jntocg_k$().scale_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.transformOrigin_1;
        var tmp_7;
        var tmp_8 = tmp3_elvis_lhs;
        if ((tmp_8 == null ? null : new TransformOrigin(tmp_8)) == null) {
          var tmp4_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
          tmp_7 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.transformOrigin_1;
        } else {
          tmp_7 = tmp3_elvis_lhs;
        }
        tmp_6 = tmp_7;
      } else {
        var tmp5_safe_receiver = $exit.get_data_jntocg_k$().scale_1;
        var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.transformOrigin_1;
        var tmp_9;
        var tmp_10 = tmp6_elvis_lhs;
        if ((tmp_10 == null ? null : new TransformOrigin(tmp_10)) == null) {
          var tmp7_safe_receiver = $enter.get_data_jntocg_k$().scale_1;
          tmp_9 = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.transformOrigin_1;
        } else {
          tmp_9 = tmp6_elvis_lhs;
        }
        tmp_6 = tmp_9;
      }
      var transformOriginWhenVisible = tmp_6;
      var tmp8_safe_receiver = $transformOriginAnimation;
      var tmp_11;
      if (tmp8_safe_receiver == null) {
        tmp_11 = null;
      } else {
        var tmp_12 = createGraphicsLayerBlock$lambda$lambda_3;
        var tmp_13 = $mutableTransformState.get_transformOriginHandoffValue_ahfesv_k$();
        var tmp_14 = tmp_13 == null ? null : new TransformOrigin(tmp_13);
        tmp_11 = tmp8_safe_receiver.animate$default_7ujzjj_k$(tmp_12, tmp_14, VOID, createGraphicsLayerBlock$lambda$lambda_4(transformOriginWhenVisible, $enter, $exit, $mutableTransformState));
      }
      var transformOrigin = tmp_11;
      var block = createGraphicsLayerBlock$lambda$lambda_5($mutableTransformState, alpha, scale, transformOrigin);
      return block;
    };
  }
  var properties_initialized_EnterExitTransition_kt_te1nvp;
  function _init_properties_EnterExitTransition_kt__2obrqf() {
    if (!properties_initialized_EnterExitTransition_kt_te1nvp) {
      properties_initialized_EnterExitTransition_kt_te1nvp = true;
      var tmp = TransformOriginVectorConverter$lambda;
      TransformOriginVectorConverter = TwoWayConverter(tmp, TransformOriginVectorConverter$lambda_0);
      DefaultAlphaAndScaleSpring = spring(VOID, 400.0);
      DefaultColorAnimationSpec = spring(VOID, 400.0);
      DefaultOffsetAnimationSpec = spring(VOID, 400.0, new IntOffset(get_VisibilityThreshold_1(Companion_getInstance_7())));
      DefaultSizeAnimationSpec = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold_0(Companion_getInstance_3())));
      androidx_compose_animation_EnterTransition$stable = 0;
      androidx_compose_animation_ExitTransition$stable = 0;
      androidx_compose_animation_TransitionEffect$stable = 0;
      androidx_compose_animation_ContentScaleTransitionEffect$stable = 0;
      androidx_compose_animation_Fade$stable = 0;
      androidx_compose_animation_Slide$stable = 0;
      androidx_compose_animation_ChangeSize$stable = 0;
      androidx_compose_animation_Scale$stable = 0;
      androidx_compose_animation_Veil$stable = 0;
      androidx_compose_animation_TransitionData$stable = 0;
    }
  }
  function ExperimentalLookaheadAnimationVisualDebugApi() {
  }
  protoOf(ExperimentalLookaheadAnimationVisualDebugApi).equals = function (other) {
    if (!(other instanceof ExperimentalLookaheadAnimationVisualDebugApi))
      return false;
    other instanceof ExperimentalLookaheadAnimationVisualDebugApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalLookaheadAnimationVisualDebugApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalLookaheadAnimationVisualDebugApi).toString = function () {
    return '@androidx.compose.animation.ExperimentalLookaheadAnimationVisualDebugApi(' + ')';
  };
  function get_DecelerationRate() {
    _init_properties_FlingCalculator_kt__ornu7o();
    return DecelerationRate;
  }
  var DecelerationRate;
  var androidx_compose_animation_FlingCalculator_FlingInfo$stable;
  var androidx_compose_animation_FlingCalculator$stable;
  function _get_friction__4dx5ox($this) {
    return $this.friction_1;
  }
  function _get_magicPhysicalCoefficient__7ixkai($this) {
    return $this.magicPhysicalCoefficient_1;
  }
  function computeDeceleration($this, density) {
    return computeDeceleration_0(0.84, density.get_density_qy0267_k$());
  }
  function getSplineDeceleration($this, velocity) {
    return AndroidFlingSpline_getInstance().deceleration_7lhbmp_k$(velocity, $this.friction_1 * $this.magicPhysicalCoefficient_1);
  }
  function FlingInfo(initialVelocity, distance, duration) {
    this.initialVelocity_1 = initialVelocity;
    this.distance_1 = distance;
    this.duration_1 = duration;
  }
  protoOf(FlingInfo).get_initialVelocity_xnobx4_k$ = function () {
    return this.initialVelocity_1;
  };
  protoOf(FlingInfo).get_distance_r171oi_k$ = function () {
    return this.distance_1;
  };
  protoOf(FlingInfo).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(FlingInfo).position_oaxlut_k$ = function (time) {
    var tmp;
    if (compare(this.duration_1, new Long(0, 0)) > 0) {
      // Inline function 'kotlin.Long.div' call
      var other = toNumber(this.duration_1);
      tmp = toNumber(time) / other;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    // Inline function 'kotlin.math.sign' call
    var x = this.initialVelocity_1;
    var tmp$ret$1 = sign(x);
    return this.distance_1 * tmp$ret$1 * AndroidFlingSpline_getInstance().flingPosition_kqyylv_k$(splinePos).get_distanceCoefficient_3vhbop_k$();
  };
  protoOf(FlingInfo).velocity_2zfv01_k$ = function (time) {
    var tmp;
    if (compare(this.duration_1, new Long(0, 0)) > 0) {
      // Inline function 'kotlin.Long.div' call
      var other = toNumber(this.duration_1);
      tmp = toNumber(time) / other;
    } else {
      tmp = 1.0;
    }
    var splinePos = tmp;
    var tmp_0 = AndroidFlingSpline_getInstance().flingPosition_kqyylv_k$(splinePos).get_velocityCoefficient_w8qjlb_k$();
    // Inline function 'kotlin.math.sign' call
    var x = this.initialVelocity_1;
    return tmp_0 * sign(x) * this.distance_1 / toNumber(this.duration_1) * 1000.0;
  };
  protoOf(FlingInfo).component1_7eebsc_k$ = function () {
    return this.initialVelocity_1;
  };
  protoOf(FlingInfo).component2_7eebsb_k$ = function () {
    return this.distance_1;
  };
  protoOf(FlingInfo).component3_7eebsa_k$ = function () {
    return this.duration_1;
  };
  protoOf(FlingInfo).copy_g5ll21_k$ = function (initialVelocity, distance, duration) {
    return new FlingInfo(initialVelocity, distance, duration);
  };
  protoOf(FlingInfo).copy$default_w0uq4e_k$ = function (initialVelocity, distance, duration, $super) {
    initialVelocity = initialVelocity === VOID ? this.initialVelocity_1 : initialVelocity;
    distance = distance === VOID ? this.distance_1 : distance;
    duration = duration === VOID ? this.duration_1 : duration;
    return $super === VOID ? this.copy_g5ll21_k$(initialVelocity, distance, duration) : $super.copy_g5ll21_k$.call(this, initialVelocity, distance, duration);
  };
  protoOf(FlingInfo).toString = function () {
    return 'FlingInfo(initialVelocity=' + this.initialVelocity_1 + ', distance=' + this.distance_1 + ', duration=' + this.duration_1.toString() + ')';
  };
  protoOf(FlingInfo).hashCode = function () {
    var result = getNumberHashCode(this.initialVelocity_1);
    result = imul(result, 31) + getNumberHashCode(this.distance_1) | 0;
    result = imul(result, 31) + this.duration_1.hashCode() | 0;
    return result;
  };
  protoOf(FlingInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingInfo))
      return false;
    if (!equals(this.initialVelocity_1, other.initialVelocity_1))
      return false;
    if (!equals(this.distance_1, other.distance_1))
      return false;
    if (!equalsLong(this.duration_1, other.duration_1))
      return false;
    return true;
  };
  function FlingCalculator(friction, density) {
    this.friction_1 = friction;
    this.density_1 = density;
    this.magicPhysicalCoefficient_1 = computeDeceleration(this, this.density_1);
  }
  protoOf(FlingCalculator).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(FlingCalculator).flingDuration_g3t3l4_k$ = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    // Inline function 'kotlin.math.exp' call
    var x = l / decelMinusOne;
    var tmp$ret$0 = Math.exp(x);
    return numberToLong(1000.0 * tmp$ret$0);
  };
  protoOf(FlingCalculator).flingDistance_e8js0p_k$ = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.friction_1 * this.magicPhysicalCoefficient_1;
    // Inline function 'kotlin.math.exp' call
    var x = get_DecelerationRate() / decelMinusOne * l;
    return tmp * Math.exp(x);
  };
  protoOf(FlingCalculator).flingInfo_sr0d1q_k$ = function (velocity) {
    var l = getSplineDeceleration(this, velocity);
    var decelMinusOne = get_DecelerationRate() - 1.0;
    var tmp = this.friction_1 * this.magicPhysicalCoefficient_1;
    // Inline function 'kotlin.math.exp' call
    var x = get_DecelerationRate() / decelMinusOne * l;
    var tmp_0 = tmp * Math.exp(x);
    // Inline function 'kotlin.math.exp' call
    var x_0 = l / decelMinusOne;
    var tmp$ret$1 = Math.exp(x_0);
    return new FlingInfo(velocity, tmp_0, numberToLong(1000.0 * tmp$ret$1));
  };
  function computeDeceleration_0(friction, density) {
    _init_properties_FlingCalculator_kt__ornu7o();
    return 9.80665 * 39.37 * density * 160.0 * friction;
  }
  var properties_initialized_FlingCalculator_kt_aw7aky;
  function _init_properties_FlingCalculator_kt__ornu7o() {
    if (!properties_initialized_FlingCalculator_kt_aw7aky) {
      properties_initialized_FlingCalculator_kt_aw7aky = true;
      // Inline function 'kotlin.math.ln' call
      var tmp = Math.log(0.78);
      // Inline function 'kotlin.math.ln' call
      DecelerationRate = tmp / Math.log(0.9);
      androidx_compose_animation_FlingCalculator_FlingInfo$stable = 0;
      androidx_compose_animation_FlingCalculator$stable = 0;
    }
  }
  function get_isLookaheadAnimationVisualDebuggingEnabledDefault() {
    return isLookaheadAnimationVisualDebuggingEnabledDefault;
  }
  var isLookaheadAnimationVisualDebuggingEnabledDefault;
  function get_isLookaheadAnimationVisualDebuggingForceEnabled() {
    return isLookaheadAnimationVisualDebuggingForceEnabled;
  }
  var isLookaheadAnimationVisualDebuggingForceEnabled;
  function get_isLookaheadAnimationVisualDebuggingEnabled() {
    return isLookaheadAnimationVisualDebuggingEnabledDefault || isLookaheadAnimationVisualDebuggingForceEnabled;
  }
  var androidx_compose_animation_LookaheadAnimationVisualDebugConfig$stable;
  function LookaheadAnimationVisualDebugConfig(isEnabled, overlayColor, multipleMatchesColor, unmatchedElementColor, inactiveElementColor, isShowKeyLabelEnabled) {
    isEnabled = isEnabled === VOID ? true : isEnabled;
    overlayColor = overlayColor === VOID ? Color_1(new Long(-2144032685, 0)) : overlayColor;
    multipleMatchesColor = multipleMatchesColor === VOID ? Color_1(new Long(-1424587, 0)) : multipleMatchesColor;
    unmatchedElementColor = unmatchedElementColor === VOID ? Color_1(new Long(-6643546, 0)) : unmatchedElementColor;
    inactiveElementColor = inactiveElementColor === VOID ? Color_1(new Long(-16777216, 0)) : inactiveElementColor;
    isShowKeyLabelEnabled = isShowKeyLabelEnabled === VOID ? false : isShowKeyLabelEnabled;
    this.isEnabled_1 = isEnabled;
    this.overlayColor_1 = overlayColor;
    this.multipleMatchesColor_1 = multipleMatchesColor;
    this.unmatchedElementColor_1 = unmatchedElementColor;
    this.inactiveElementColor_1 = inactiveElementColor;
    this.isShowKeyLabelEnabled_1 = isShowKeyLabelEnabled;
  }
  protoOf(LookaheadAnimationVisualDebugConfig).get_isEnabled_roz1ma_k$ = function () {
    return this.isEnabled_1;
  };
  protoOf(LookaheadAnimationVisualDebugConfig).get_overlayColor_s5d9ml_k$ = function () {
    return this.overlayColor_1;
  };
  protoOf(LookaheadAnimationVisualDebugConfig).get_multipleMatchesColor_9v7opc_k$ = function () {
    return this.multipleMatchesColor_1;
  };
  protoOf(LookaheadAnimationVisualDebugConfig).get_unmatchedElementColor_h2n9ww_k$ = function () {
    return this.unmatchedElementColor_1;
  };
  protoOf(LookaheadAnimationVisualDebugConfig).get_inactiveElementColor_4kr83m_k$ = function () {
    return this.inactiveElementColor_1;
  };
  protoOf(LookaheadAnimationVisualDebugConfig).get_isShowKeyLabelEnabled_wh6dks_k$ = function () {
    return this.isShowKeyLabelEnabled_1;
  };
  protoOf(LookaheadAnimationVisualDebugConfig).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LookaheadAnimationVisualDebugConfig))
      return false;
    if (!(this.isEnabled_1 === other.isEnabled_1))
      return false;
    if (!equals(new Color_0(this.overlayColor_1), new Color_0(other.overlayColor_1)))
      return false;
    if (!equals(new Color_0(this.multipleMatchesColor_1), new Color_0(other.multipleMatchesColor_1)))
      return false;
    if (!equals(new Color_0(this.unmatchedElementColor_1), new Color_0(other.unmatchedElementColor_1)))
      return false;
    if (!equals(new Color_0(this.inactiveElementColor_1), new Color_0(other.inactiveElementColor_1)))
      return false;
    if (!(this.isShowKeyLabelEnabled_1 === other.isShowKeyLabelEnabled_1))
      return false;
    return true;
  };
  protoOf(LookaheadAnimationVisualDebugConfig).hashCode = function () {
    var result = getBooleanHashCode(this.isEnabled_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.overlayColor_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.multipleMatchesColor_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.unmatchedElementColor_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.inactiveElementColor_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.isShowKeyLabelEnabled_1) | 0;
    return result;
  };
  protoOf(LookaheadAnimationVisualDebugConfig).toString = function () {
    return 'LookaheadAnimationVisualDebugConfig(isEnabled=' + this.isEnabled_1 + ', ' + ('overlayColor=' + Color__toString_impl_hpzmaq(this.overlayColor_1) + ', ') + ('multipleMatchesColor=' + Color__toString_impl_hpzmaq(this.multipleMatchesColor_1) + ', ') + ('unmatchedElementColor=' + Color__toString_impl_hpzmaq(this.unmatchedElementColor_1) + ', ') + ('inactiveElementColor=' + Color__toString_impl_hpzmaq(this.inactiveElementColor_1) + ', ') + ('isShowKeyLabelEnabled=' + this.isShowKeyLabelEnabled_1 + ')');
  };
  function set_colorIndex(_set____db54di) {
    _init_properties_LookaheadAnimationVisualDebugHelper_kt__4gnjcj();
    colorIndex = _set____db54di;
  }
  function get_colorIndex() {
    _init_properties_LookaheadAnimationVisualDebugHelper_kt__4gnjcj();
    return colorIndex;
  }
  var colorIndex;
  function get_keyToColor() {
    _init_properties_LookaheadAnimationVisualDebugHelper_kt__4gnjcj();
    return keyToColor;
  }
  var keyToColor;
  var androidx_compose_animation_LookaheadAnimationVisualDebugHelper$stable;
  function _get_reverseProgress__tnkmda($this) {
    return $this.reverseProgress_1;
  }
  function _get_restartProgress__9dr41h($this) {
    return $this.restartProgress_1;
  }
  function _set_isProgressAnimationRunning__mu5sgr($this, _set____db54di) {
    $this.isProgressAnimationRunning_1 = _set____db54di;
  }
  function _get_isProgressAnimationRunning__lfc21z($this) {
    return $this.isProgressAnimationRunning_1;
  }
  function findPositionAlongPerimeter($this, distanceTraveled) {
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    var this_0 = $this.sharedTransitionScopeSize_1;
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
    var width = convertToInt(shiftRight(value, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    var this_1 = $this.sharedTransitionScopeSize_1;
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
    var height = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    if (distanceTraveled <= width) {
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var v1 = fromInt(toRawBits(distanceTraveled));
      var v2 = fromInt(toRawBits(0.0));
      var tmp$ret$5 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      return _Offset___init__impl__c168vi(tmp$ret$5);
    }
    if (distanceTraveled <= width + height) {
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2 = distanceTraveled - width;
      var v1_0 = fromInt(toRawBits(width));
      var v2_0 = fromInt(toRawBits(val2));
      var tmp$ret$7 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
      return _Offset___init__impl__c168vi(tmp$ret$7);
    }
    if (distanceTraveled <= width * 2 + height) {
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val1 = width * 2 + height - distanceTraveled;
      var v1_1 = fromInt(toRawBits(val1));
      var v2_1 = fromInt(toRawBits(height));
      var tmp$ret$9 = bitwiseOr(shiftLeft(v1_1, 32), bitwiseAnd(v2_1, new Long(-1, 0)));
      return _Offset___init__impl__c168vi(tmp$ret$9);
    }
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2_0 = height * 2 + width * 2 - distanceTraveled;
    var v1_2 = fromInt(toRawBits(0.0));
    var v2_2 = fromInt(toRawBits(val2_0));
    var tmp$ret$11 = bitwiseOr(shiftLeft(v1_2, 32), bitwiseAnd(v2_2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$11);
  }
  function calculatePathCenter($this, diamondWidth) {
    $this.centerPath_1.rewind_xb9q0b_k$();
    // Inline function 'kotlin.apply' call
    var this_0 = $this.centerPath_1;
    this_0.moveTo_22horo_k$(0.0, -diamondWidth);
    this_0.lineTo_o2nyip_k$(diamondWidth, 0.0);
    this_0.lineTo_o2nyip_k$(0.0, diamondWidth);
    this_0.lineTo_o2nyip_k$(-diamondWidth, 0.0);
    this_0.close_yn9xrc_k$();
  }
  function LookaheadAnimationVisualDebugHelper$onAttach$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LookaheadAnimationVisualDebugHelper$onAttach$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(LookaheadAnimationVisualDebugHelper$onAttach$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(LookaheadAnimationVisualDebugHelper$onAttach$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.reverseProgress_1.snapTo_o5pd1b_k$(0.0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.this$0__1.reverseProgress_1.animateTo$default_71hueo_k$(1.0, infiniteRepeatable(tween(500, VOID, get_LinearEasing()), RepeatMode_Reverse_getInstance()), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(LookaheadAnimationVisualDebugHelper$onAttach$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new LookaheadAnimationVisualDebugHelper$onAttach$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(LookaheadAnimationVisualDebugHelper$onAttach$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function LookaheadAnimationVisualDebugHelper$onAttach$slambda_0(this$0, resultContinuation) {
    var i = new LookaheadAnimationVisualDebugHelper$onAttach$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    }, 1);
  }
  function LookaheadAnimationVisualDebugHelper$onAttach$slambda_1(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LookaheadAnimationVisualDebugHelper$onAttach$slambda_1).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(LookaheadAnimationVisualDebugHelper$onAttach$slambda_1).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(LookaheadAnimationVisualDebugHelper$onAttach$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.restartProgress_1.snapTo_o5pd1b_k$(0.0, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.this$0__1.restartProgress_1.animateTo$default_71hueo_k$(1.0, infiniteRepeatable(tween(1000, VOID, get_LinearEasing()), RepeatMode_Restart_getInstance()), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(LookaheadAnimationVisualDebugHelper$onAttach$slambda_1).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new LookaheadAnimationVisualDebugHelper$onAttach$slambda_1(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(LookaheadAnimationVisualDebugHelper$onAttach$slambda_1).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function LookaheadAnimationVisualDebugHelper$onAttach$slambda_2(this$0, resultContinuation) {
    var i = new LookaheadAnimationVisualDebugHelper$onAttach$slambda_1(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    }, 1);
  }
  function LookaheadAnimationVisualDebugHelper$onDetach$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LookaheadAnimationVisualDebugHelper$onDetach$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(LookaheadAnimationVisualDebugHelper$onDetach$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(LookaheadAnimationVisualDebugHelper$onDetach$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.reverseProgress_1.stop_7piii3_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.this$0__1.restartProgress_1.stop_7piii3_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(LookaheadAnimationVisualDebugHelper$onDetach$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new LookaheadAnimationVisualDebugHelper$onDetach$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(LookaheadAnimationVisualDebugHelper$onDetach$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function LookaheadAnimationVisualDebugHelper$onDetach$slambda_0(this$0, resultContinuation) {
    var i = new LookaheadAnimationVisualDebugHelper$onDetach$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    }, 1);
  }
  function LookaheadAnimationVisualDebugHelper() {
    this.reverseProgress_1 = Animatable(0.0);
    this.restartProgress_1 = Animatable(0.0);
    this.isProgressAnimationRunning_1 = false;
    this.sharedTransitionScopeOffset_1 = Companion_getInstance_4().get_Zero_k6n73t_k$();
    this.sharedTransitionScopeSize_1 = Companion_getInstance_3().get_Zero_9we0a6_k$();
    this.debugOffset_1 = Companion_getInstance_4().get_Zero_k6n73t_k$();
    this.debugPath_1 = Path();
    this.centerPath_1 = Path();
    this.colors_1 = listOf([new Color_0(Color_1(new Long(-1424587, 0))), new Color_0(Color_1(new Long(-880601, 0))), new Color_0(Color_1(new Long(-3061541, 0))), new Color_0(Color_1(new Long(-12417548, 0))), new Color_0(Color_1(new Long(-12928838, 0)))]);
  }
  protoOf(LookaheadAnimationVisualDebugHelper).set_sharedTransitionScopeOffset_nv34ye_k$ = function (_set____db54di) {
    this.sharedTransitionScopeOffset_1 = _set____db54di;
  };
  protoOf(LookaheadAnimationVisualDebugHelper).get_sharedTransitionScopeOffset_lkwq3q_k$ = function () {
    return this.sharedTransitionScopeOffset_1;
  };
  protoOf(LookaheadAnimationVisualDebugHelper).set_sharedTransitionScopeSize_u5bcmj_k$ = function (_set____db54di) {
    this.sharedTransitionScopeSize_1 = _set____db54di;
  };
  protoOf(LookaheadAnimationVisualDebugHelper).get_sharedTransitionScopeSize_1yqzzn_k$ = function () {
    return this.sharedTransitionScopeSize_1;
  };
  protoOf(LookaheadAnimationVisualDebugHelper).set_debugOffset_kv284v_k$ = function (_set____db54di) {
    this.debugOffset_1 = _set____db54di;
  };
  protoOf(LookaheadAnimationVisualDebugHelper).get_debugOffset_htox2l_k$ = function () {
    return this.debugOffset_1;
  };
  protoOf(LookaheadAnimationVisualDebugHelper).get_debugPath_58eyr3_k$ = function () {
    return this.debugPath_1;
  };
  protoOf(LookaheadAnimationVisualDebugHelper).get_centerPath_yikbh_k$ = function () {
    return this.centerPath_1;
  };
  protoOf(LookaheadAnimationVisualDebugHelper).get_colors_c05661_k$ = function () {
    return this.colors_1;
  };
  protoOf(LookaheadAnimationVisualDebugHelper).onAttach_3axsbv_k$ = function (coroutineScope) {
    if (!this.isProgressAnimationRunning_1) {
      this.isProgressAnimationRunning_1 = true;
      launch(coroutineScope, VOID, VOID, LookaheadAnimationVisualDebugHelper$onAttach$slambda_0(this, null));
      launch(coroutineScope, VOID, VOID, LookaheadAnimationVisualDebugHelper$onAttach$slambda_2(this, null));
    }
  };
  protoOf(LookaheadAnimationVisualDebugHelper).onDetach_j79dl3_k$ = function (coroutineScope) {
    if (this.isProgressAnimationRunning_1) {
      this.isProgressAnimationRunning_1 = false;
      launch(coroutineScope, VOID, VOID, LookaheadAnimationVisualDebugHelper$onDetach$slambda_0(this, null));
    }
  };
  protoOf(LookaheadAnimationVisualDebugHelper).updateDrawingCoordinates_iwri7g_k$ = function (offsetInSharedTransitionScope, sizeOfSharedTransitionScope) {
    this.sharedTransitionScopeOffset_1 = offsetInSharedTransitionScope;
    this.sharedTransitionScopeSize_1 = sizeOfSharedTransitionScope;
  };
  protoOf(LookaheadAnimationVisualDebugHelper).drawGlobalVisualizations_4hpr11_k$ = function (_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    var this_0 = this.sharedTransitionScopeSize_1;
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
    var tmp$ret$0 = convertToInt(shiftRight(value, 32));
    var tmp = imul(2, tmp$ret$0);
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    var this_1 = this.sharedTransitionScopeSize_1;
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
    var tmp$ret$2 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var animatedDistance = (tmp + imul(2, tmp$ret$2) | 0) * this.restartProgress_1.get_value_j01efc_k$();
    var perimeterCenter = findPositionAlongPerimeter(this, animatedDistance);
    var gradientColors = listOf([new Color_0(Color_1(new Long(-1424587, 0))), new Color_0(Color_1(new Long(-12417548, 0))), new Color_0(Color_1(new Long(-13326253, 0))), new Color_0(Color_1(new Long(-279548, 0))), new Color_0(Color_1(new Long(-1424587, 0)))]);
    var perimeterBrush = Companion_getInstance_11().radialGradient$default_upgqlg_k$(gradientColors, perimeterCenter, 2000.0);
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var canvas = _this__u8e3s4.get_drawContext_ffwztu_k$().get_canvas_bshgm9_k$();
    var paint = Paint();
    perimeterBrush.applyTo_5ix92b_k$(_this__u8e3s4.get_size_cxx1ym_k$(), paint, 1.0);
    paint.set_style_t4zhmv_k$(Companion_getInstance_12().get_Stroke_fu1ixu_k$());
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$6 = _Dp___init__impl__ms3zkb(8);
    var tmp_0 = _this__u8e3s4.toPx_mycba2_k$(tmp$ret$6) * this.reverseProgress_1.get_value_j01efc_k$();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$7 = _Dp___init__impl__ms3zkb(4);
    paint.set_strokeWidth_owqvpl_k$(tmp_0 + _this__u8e3s4.toPx_mycba2_k$(tmp$ret$7));
    canvas.save_fbe7h_k$();
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_2 = this.sharedTransitionScopeOffset_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(this_2);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value_1, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_1 = -floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_3 = this.sharedTransitionScopeOffset_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(this_3);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$12 = floatFromBits(bits_0);
    canvas.translate_7gghdu_k$(tmp_1, -tmp$ret$12);
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    var this_4 = this.sharedTransitionScopeSize_1;
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value_3 = _IntSize___get_packedValue__impl__uho7jf(this_4);
    var tmp_2 = convertToInt(shiftRight(value_3, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    var this_5 = this.sharedTransitionScopeSize_1;
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_4 = _IntSize___get_packedValue__impl__uho7jf(this_5);
    var tmp$ret$18 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    canvas.drawRect_njf28a_k$(0.0, 0.0, tmp_2, tmp$ret$18, paint);
    canvas.restore_a1ykhu_k$();
  };
  protoOf(LookaheadAnimationVisualDebugHelper).drawOverlay_h5samm_k$ = function (_this__u8e3s4, overlayColor) {
    _this__u8e3s4.drawRect$default_5x4e2k_k$(overlayColor);
  };
  protoOf(LookaheadAnimationVisualDebugHelper).chooseColor_wcyc5e_k$ = function (key) {
    if (get_keyToColor().contains_vbgn2f_k$(key)) {
      return ensureNotNull(get_keyToColor().get_wei43m_k$(key)).value_1;
    } else {
      if (get_colorIndex() >= this.colors_1.get_size_woubt6_k$()) {
        set_colorIndex(0);
      }
      var currentColor = this.colors_1.get_c1px32_k$(get_colorIndex()).value_1;
      set_colorIndex(get_colorIndex() + 1 | 0);
      get_keyToColor().set_b9w55f_k$(key, new Color_0(currentColor));
      return currentColor;
    }
  };
  protoOf(LookaheadAnimationVisualDebugHelper).drawInactiveVisualizations_giod8l_k$ = function (_this__u8e3s4, inactiveElementColor, isShowKeyLabelEnabled, strokeWidth, key, textMeasurer) {
    if (equals(new Color_0(inactiveElementColor), new Color_0(Companion_getInstance_5().get_Transparent_if5ln4_k$())))
      return Unit_getInstance();
    var highlightWidth = strokeWidth * 2.0;
    _this__u8e3s4.drawRect$default_5x4e2k_k$(Companion_getInstance_5().get_White_xpp3qf_k$(), VOID, VOID, VOID, new Stroke(highlightWidth));
    _this__u8e3s4.drawRect$default_5x4e2k_k$(inactiveElementColor, VOID, VOID, VOID, new Stroke(strokeWidth));
    if (isShowKeyLabelEnabled) {
      if (!(textMeasurer == null)) {
        var textLayoutResult = textMeasurer.measure$default_bw1pgx_k$(toString_0(key), TextStyle_init_$Create$(inactiveElementColor, get_sp(18), VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, Color__copy$default_impl_ectz3s(Companion_getInstance_5().get_White_xpp3qf_k$(), 0.6)));
        // Inline function 'androidx.compose.ui.geometry.Offset' call
        // Inline function 'androidx.compose.ui.util.packFloats' call
        var v1 = fromInt(toRawBits(10.0));
        var v2 = fromInt(toRawBits(10.0));
        var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
        var tmp$ret$0 = _Offset___init__impl__c168vi(tmp$ret$1);
        drawText(_this__u8e3s4, textLayoutResult, VOID, tmp$ret$0);
      }
    }
  };
  protoOf(LookaheadAnimationVisualDebugHelper).drawInactiveVisualizations$default_9yatlf_k$ = function (_this__u8e3s4, inactiveElementColor, isShowKeyLabelEnabled, strokeWidth, key, textMeasurer, $super) {
    textMeasurer = textMeasurer === VOID ? null : textMeasurer;
    var tmp;
    if ($super === VOID) {
      this.drawInactiveVisualizations_giod8l_k$(_this__u8e3s4, inactiveElementColor, isShowKeyLabelEnabled, strokeWidth, key, textMeasurer);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawInactiveVisualizations_giod8l_k$.call(this, _this__u8e3s4, new Color_0(inactiveElementColor), isShowKeyLabelEnabled, strokeWidth, key, textMeasurer);
    }
    return tmp;
  };
  protoOf(LookaheadAnimationVisualDebugHelper).drawLocalVisualizations_grbav4_k$ = function (_this__u8e3s4, animationColor, targetOffset, targetSize, currentRect, center, isShowKeyLabelEnabled, strokeWidth, key, textMeasurer) {
    if (equals(new Color_0(animationColor), new Color_0(Companion_getInstance_5().get_Transparent_if5ln4_k$())))
      return Unit_getInstance();
    var highlightWidth = strokeWidth * 2.0;
    var tmp;
    if (!equals(new Color_0(animationColor), new Color_0(Companion_getInstance_5().get_Unspecified_j397pn_k$()))) {
      tmp = animationColor;
    } else {
      _this__u8e3s4.drawRect$default_5x4e2k_k$(Companion_getInstance_5().get_White_xpp3qf_k$(), VOID, VOID, VOID, new Stroke(highlightWidth));
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(targetOffset);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_0 = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_0 = currentRect.get_topLeft_ypvrd5_k$();
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(this_0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(shiftRight(value_0, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp2 = tmp_0 - floatFromBits(bits_0);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_1 = _Offset___get_packedValue__impl__xh2k8q(targetOffset);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_1 = floatFromBits(bits_1);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_1 = currentRect.get_topLeft_ypvrd5_k$();
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_2 = _Offset___get_packedValue__impl__xh2k8q(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
      var top = tmp_1 - floatFromBits(bits_2);
      _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(tmp2, top);
      try {
        _this__u8e3s4.drawRect$default_5x4e2k_k$(Companion_getInstance_5().get_White_xpp3qf_k$(), VOID, targetSize, VOID, new Stroke(highlightWidth));
      }finally {
        _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-tmp2, -top);
      }
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_3 = _Offset___get_packedValue__impl__xh2k8q(targetOffset);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_3 = convertToInt(shiftRight(value_3, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_2 = floatFromBits(bits_3);
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_2 = currentRect.get_topLeft_ypvrd5_k$();
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_4 = _Offset___get_packedValue__impl__xh2k8q(this_2);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_4 = convertToInt(shiftRight(value_4, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_3 = tmp_2 - floatFromBits(bits_4);
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_3 = this.debugOffset_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_5 = _Offset___get_packedValue__impl__xh2k8q(this_3);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_5 = convertToInt(shiftRight(value_5, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp2_0 = tmp_3 - floatFromBits(bits_5);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_6 = _Offset___get_packedValue__impl__xh2k8q(targetOffset);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_4 = floatFromBits(bits_6);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_4 = currentRect.get_topLeft_ypvrd5_k$();
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_7 = _Offset___get_packedValue__impl__xh2k8q(this_4);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_7 = convertToInt(bitwiseAnd(value_7, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_5 = tmp_4 - floatFromBits(bits_7);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_5 = this.debugOffset_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_8 = _Offset___get_packedValue__impl__xh2k8q(this_5);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_8 = convertToInt(bitwiseAnd(value_8, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
      var top_0 = tmp_5 - floatFromBits(bits_8);
      _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(tmp2_0, top_0);
      try {
        // Inline function 'androidx.compose.ui.geometry.Size.width' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_9 = _Size___get_packedValue__impl__7rlt1o(targetSize);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_9 = convertToInt(shiftRight(value_9, 32));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        var tmp2_1 = floatFromBits(bits_9) * 0.5;
        // Inline function 'androidx.compose.ui.geometry.Size.height' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_10 = _Size___get_packedValue__impl__7rlt1o(targetSize);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_10 = convertToInt(bitwiseAnd(value_10, new Long(-1, 0)));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
        var top_1 = floatFromBits(bits_10) * 0.5;
        _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(tmp2_1, top_1);
        try {
          var tmp_6 = Companion_getInstance_5().get_White_xpp3qf_k$();
          var tmp_7 = Companion_getInstance_13();
          // Inline function 'kotlin.floatArrayOf' call
          var tmp$ret$54 = new Float32Array([20.0, 10.0]);
          _this__u8e3s4.drawPath$default_16x1km_k$(this.debugPath_1, tmp_6, VOID, new Stroke(highlightWidth, VOID, VOID, VOID, tmp_7.dashPathEffect$default_i901tt_k$(tmp$ret$54)));
        }finally {
          _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-tmp2_1, -top_1);
        }
      }finally {
        _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-tmp2_0, -top_0);
      }
      calculatePathCenter(this, strokeWidth * 3.5);
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_11 = _Offset___get_packedValue__impl__xh2k8q(center);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_11 = convertToInt(shiftRight(value_11, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp2_2 = floatFromBits(bits_11);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_12 = _Offset___get_packedValue__impl__xh2k8q(center);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_12 = convertToInt(bitwiseAnd(value_12, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
      var top_2 = floatFromBits(bits_12);
      _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(tmp2_2, top_2);
      try {
        _this__u8e3s4.drawPath$default_16x1km_k$(this.centerPath_1, Companion_getInstance_5().get_White_xpp3qf_k$());
      }finally {
        _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-tmp2_2, -top_2);
      }
      tmp = this.chooseColor_wcyc5e_k$(key);
    }
    var chosenColor = tmp;
    _this__u8e3s4.drawRect$default_5x4e2k_k$(chosenColor, VOID, VOID, VOID, new Stroke(strokeWidth));
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_13 = _Offset___get_packedValue__impl__xh2k8q(targetOffset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_13 = convertToInt(shiftRight(value_13, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_8 = floatFromBits(bits_13);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_6 = currentRect.get_topLeft_ypvrd5_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_14 = _Offset___get_packedValue__impl__xh2k8q(this_6);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_14 = convertToInt(shiftRight(value_14, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp2_3 = tmp_8 - floatFromBits(bits_14);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_15 = _Offset___get_packedValue__impl__xh2k8q(targetOffset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_15 = convertToInt(bitwiseAnd(value_15, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_9 = floatFromBits(bits_15);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_7 = currentRect.get_topLeft_ypvrd5_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_16 = _Offset___get_packedValue__impl__xh2k8q(this_7);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_16 = convertToInt(bitwiseAnd(value_16, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
    var top_3 = tmp_9 - floatFromBits(bits_16);
    _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(tmp2_3, top_3);
    try {
      _this__u8e3s4.drawRect$default_5x4e2k_k$(chosenColor, VOID, targetSize, VOID, new Stroke(strokeWidth));
    }finally {
      _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-tmp2_3, -top_3);
    }
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_17 = _Offset___get_packedValue__impl__xh2k8q(targetOffset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_17 = convertToInt(shiftRight(value_17, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_10 = floatFromBits(bits_17);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_8 = currentRect.get_topLeft_ypvrd5_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_18 = _Offset___get_packedValue__impl__xh2k8q(this_8);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_18 = convertToInt(shiftRight(value_18, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_11 = tmp_10 - floatFromBits(bits_18);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_9 = this.debugOffset_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_19 = _Offset___get_packedValue__impl__xh2k8q(this_9);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_19 = convertToInt(shiftRight(value_19, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp2_4 = tmp_11 - floatFromBits(bits_19);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_20 = _Offset___get_packedValue__impl__xh2k8q(targetOffset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_20 = convertToInt(bitwiseAnd(value_20, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_12 = floatFromBits(bits_20);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_10 = currentRect.get_topLeft_ypvrd5_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_21 = _Offset___get_packedValue__impl__xh2k8q(this_10);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_21 = convertToInt(bitwiseAnd(value_21, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_13 = tmp_12 - floatFromBits(bits_21);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_11 = this.debugOffset_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_22 = _Offset___get_packedValue__impl__xh2k8q(this_11);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_22 = convertToInt(bitwiseAnd(value_22, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
    var top_4 = tmp_13 - floatFromBits(bits_22);
    _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(tmp2_4, top_4);
    try {
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_23 = _Size___get_packedValue__impl__7rlt1o(targetSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_23 = convertToInt(shiftRight(value_23, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp2_5 = floatFromBits(bits_23) * 0.5;
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_24 = _Size___get_packedValue__impl__7rlt1o(targetSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_24 = convertToInt(bitwiseAnd(value_24, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
      var top_5 = floatFromBits(bits_24) * 0.5;
      _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(tmp2_5, top_5);
      try {
        var tmp_14 = Companion_getInstance_13();
        // Inline function 'kotlin.floatArrayOf' call
        var tmp$ret$119 = new Float32Array([20.0, 10.0]);
        _this__u8e3s4.drawPath$default_16x1km_k$(this.debugPath_1, chosenColor, VOID, new Stroke(strokeWidth, VOID, VOID, VOID, tmp_14.dashPathEffect$default_i901tt_k$(tmp$ret$119)));
      }finally {
        _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-tmp2_5, -top_5);
      }
    }finally {
      _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-tmp2_4, -top_4);
    }
    calculatePathCenter(this, strokeWidth * 3);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_25 = _Offset___get_packedValue__impl__xh2k8q(center);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_25 = convertToInt(shiftRight(value_25, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp2_6 = floatFromBits(bits_25);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_26 = _Offset___get_packedValue__impl__xh2k8q(center);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_26 = convertToInt(bitwiseAnd(value_26, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
    var top_6 = floatFromBits(bits_26);
    _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(tmp2_6, top_6);
    try {
      _this__u8e3s4.drawPath$default_16x1km_k$(this.centerPath_1, chosenColor);
    }finally {
      _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-tmp2_6, -top_6);
    }
    if (isShowKeyLabelEnabled) {
      if (!(textMeasurer == null)) {
        var textLayoutResult = textMeasurer.measure$default_bw1pgx_k$(toString_0(key), TextStyle_init_$Create$(chosenColor, get_sp(18), VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, Color__copy$default_impl_ectz3s(Companion_getInstance_5().get_White_xpp3qf_k$(), 0.6)));
        // Inline function 'androidx.compose.ui.geometry.Offset' call
        // Inline function 'androidx.compose.ui.util.packFloats' call
        var v1 = fromInt(toRawBits(10.0));
        var v2 = fromInt(toRawBits(10.0));
        var tmp$ret$131 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
        var tmp$ret$130 = _Offset___init__impl__c168vi(tmp$ret$131);
        drawText(_this__u8e3s4, textLayoutResult, VOID, tmp$ret$130);
        // Inline function 'androidx.compose.ui.geometry.Offset.x' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_27 = _Offset___get_packedValue__impl__xh2k8q(targetOffset);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_27 = convertToInt(shiftRight(value_27, 32));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        var tmp_15 = floatFromBits(bits_27);
        // Inline function 'androidx.compose.ui.geometry.Offset.x' call
        var this_12 = currentRect.get_topLeft_ypvrd5_k$();
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_28 = _Offset___get_packedValue__impl__xh2k8q(this_12);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_28 = convertToInt(shiftRight(value_28, 32));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        var tmp2_7 = tmp_15 - floatFromBits(bits_28);
        // Inline function 'androidx.compose.ui.geometry.Offset.y' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_29 = _Offset___get_packedValue__impl__xh2k8q(targetOffset);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_29 = convertToInt(bitwiseAnd(value_29, new Long(-1, 0)));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        var tmp_16 = floatFromBits(bits_29);
        // Inline function 'androidx.compose.ui.geometry.Offset.y' call
        var this_13 = currentRect.get_topLeft_ypvrd5_k$();
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_30 = _Offset___get_packedValue__impl__xh2k8q(this_13);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_30 = convertToInt(bitwiseAnd(value_30, new Long(-1, 0)));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
        var top_7 = tmp_16 - floatFromBits(bits_30);
        _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(tmp2_7, top_7);
        try {
          // Inline function 'androidx.compose.ui.geometry.Offset' call
          // Inline function 'androidx.compose.ui.util.packFloats' call
          var v1_0 = fromInt(toRawBits(10.0));
          var v2_0 = fromInt(toRawBits(10.0));
          var tmp$ret$151 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
          var tmp$ret$150 = _Offset___init__impl__c168vi(tmp$ret$151);
          drawText(_this__u8e3s4, textLayoutResult, VOID, tmp$ret$150);
        }finally {
          _this__u8e3s4.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-tmp2_7, -top_7);
        }
      }
    }
  };
  protoOf(LookaheadAnimationVisualDebugHelper).drawLocalVisualizations$default_azwdpk_k$ = function (_this__u8e3s4, animationColor, targetOffset, targetSize, currentRect, center, isShowKeyLabelEnabled, strokeWidth, key, textMeasurer, $super) {
    textMeasurer = textMeasurer === VOID ? null : textMeasurer;
    var tmp;
    if ($super === VOID) {
      this.drawLocalVisualizations_grbav4_k$(_this__u8e3s4, animationColor, targetOffset, targetSize, currentRect, center, isShowKeyLabelEnabled, strokeWidth, key, textMeasurer);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.drawLocalVisualizations_grbav4_k$.call(this, _this__u8e3s4, new Color_0(animationColor), new Offset(targetOffset), new Size(targetSize), currentRect, new Offset(center), isShowKeyLabelEnabled, strokeWidth, key, textMeasurer);
    }
    return tmp;
  };
  protoOf(LookaheadAnimationVisualDebugHelper).drawMultipleMatchesElement_bhlnwf_k$ = function (_this__u8e3s4, multipleMatchesColor, isShowKeyLabelEnabled, key, numMatches, textMeasurer, strokeWidth) {
    var highlightWidth = strokeWidth * 2.0;
    _this__u8e3s4.drawRect$default_5x4e2k_k$(Companion_getInstance_5().get_White_xpp3qf_k$(), VOID, VOID, VOID, new Stroke(highlightWidth));
    _this__u8e3s4.drawRect$default_5x4e2k_k$(multipleMatchesColor, VOID, VOID, VOID, new Stroke(strokeWidth));
    if (isShowKeyLabelEnabled) {
      var emoji;
      switch (numMatches) {
        case 2:
          emoji = '2\uFE0F\u20E3';
          break;
        case 3:
          emoji = '3\uFE0F\u20E3';
          break;
        case 4:
          emoji = '4\uFE0F\u20E3';
          break;
        case 5:
          emoji = '5\uFE0F\u20E3';
          break;
        case 6:
          emoji = '6\uFE0F\u20E3';
          break;
        case 7:
          emoji = '7\uFE0F\u20E3';
          break;
        case 8:
          emoji = '8\uFE0F\u20E3';
          break;
        case 9:
          emoji = '9\uFE0F\u20E3';
          break;
        default:
          emoji = '> 9\uFE0F\u20E3';
          break;
      }
      var tmp = toString_0(key) + ': ' + emoji + ' matches';
      var tmp1_color = Companion_getInstance_5().get_White_xpp3qf_k$();
      var tmp2_fontSize = get_sp(22);
      var tmp3_background = Color__copy$default_impl_ectz3s(multipleMatchesColor, 0.8);
      var tmp4_fontWeight = Companion_getInstance_14().get_Bold_wnz5ke_k$();
      var textLayoutResult = textMeasurer.measure$default_bw1pgx_k$(tmp, TextStyle_init_$Create$(tmp1_color, tmp2_fontSize, tmp4_fontWeight, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_background));
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var v1 = fromInt(toRawBits(10.0));
      var v2 = fromInt(toRawBits(10.0));
      var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      var tmp$ret$0 = _Offset___init__impl__c168vi(tmp$ret$1);
      drawText(_this__u8e3s4, textLayoutResult, VOID, tmp$ret$0);
    }
  };
  protoOf(LookaheadAnimationVisualDebugHelper).drawUnmatchedElement_oigdbj_k$ = function (_this__u8e3s4, unmatchedColor, isShowKeyLabelEnabled, key, textMeasurer, strokeWidth) {
    var highlightWidth = strokeWidth * 2.0;
    _this__u8e3s4.drawRect$default_5x4e2k_k$(Companion_getInstance_5().get_White_xpp3qf_k$(), VOID, VOID, VOID, new Stroke(highlightWidth));
    _this__u8e3s4.drawRect$default_5x4e2k_k$(unmatchedColor, VOID, VOID, VOID, new Stroke(strokeWidth));
    // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    var this_0 = _this__u8e3s4.get_size_cxx1ym_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var right = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    var this_1 = _this__u8e3s4.get_size_cxx1ym_k$();
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var bottom = floatFromBits(bits_0);
    var clipOp = Companion_getInstance_15().get_Intersect_gpxc6n_k$();
    // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
    // Inline function 'kotlin.with' call
    var $this$with = _this__u8e3s4.get_drawContext_ffwztu_k$();
    var previousSize = $this$with.get_size_cxx1ym_k$();
    $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
    try {
      $this$with.get_transform_px941v_k$().clipRect_3spswv_k$(0.0, 0.0, right, bottom, clipOp);
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      var this_2 = _this__u8e3s4.get_size_cxx1ym_k$();
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_1 = _Size___get_packedValue__impl__7rlt1o(this_2);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_1 = convertToInt(shiftRight(value_1, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var w = floatFromBits(bits_1);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      var this_3 = _this__u8e3s4.get_size_cxx1ym_k$();
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_2 = _Size___get_packedValue__impl__7rlt1o(this_3);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var h = floatFromBits(bits_2);
      var x = -h;
      while (x < w) {
        var tmp = Color__copy$default_impl_ectz3s(unmatchedColor, 0.3);
        // Inline function 'androidx.compose.ui.geometry.Offset' call
        // Inline function 'androidx.compose.ui.util.packFloats' call
        var val1 = x;
        var v1 = fromInt(toRawBits(val1));
        var v2 = fromInt(toRawBits(h));
        var tmp$ret$23 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
        var tmp_0 = _Offset___init__impl__c168vi(tmp$ret$23);
        // Inline function 'androidx.compose.ui.geometry.Offset' call
        // Inline function 'androidx.compose.ui.util.packFloats' call
        var val1_0 = x + h;
        var v1_0 = fromInt(toRawBits(val1_0));
        var v2_0 = fromInt(toRawBits(0.0));
        var tmp$ret$25 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
        var tmp$ret$24 = _Offset___init__impl__c168vi(tmp$ret$25);
        _this__u8e3s4.drawLine$default_457gsp_k$(tmp, tmp_0, tmp$ret$24, strokeWidth);
        x = x + strokeWidth * 4;
      }
    }finally {
      $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
      $this$with.set_size_6a0e6q_k$(previousSize);
    }
    if (isShowKeyLabelEnabled) {
      var tmp_1 = toString_0(key) + ': 0\uFE0F\u20E3 matches';
      var tmp0_color = Companion_getInstance_5().get_White_xpp3qf_k$();
      var tmp1_fontSize = get_sp(22);
      var tmp2_background = Color__copy$default_impl_ectz3s(unmatchedColor, 0.8);
      var tmp3_fontWeight = Companion_getInstance_14().get_Bold_wnz5ke_k$();
      var textLayoutResult = textMeasurer.measure$default_bw1pgx_k$(tmp_1, TextStyle_init_$Create$(tmp0_color, tmp1_fontSize, tmp3_fontWeight, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp2_background));
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var v1_1 = fromInt(toRawBits(10.0));
      var v2_1 = fromInt(toRawBits(10.0));
      var tmp$ret$27 = bitwiseOr(shiftLeft(v1_1, 32), bitwiseAnd(v2_1, new Long(-1, 0)));
      var tmp$ret$26 = _Offset___init__impl__c168vi(tmp$ret$27);
      drawText(_this__u8e3s4, textLayoutResult, VOID, tmp$ret$26);
    }
  };
  protoOf(LookaheadAnimationVisualDebugHelper).calculatePath_wh97fu_k$ = function (spec, current, target, initialVelocity) {
    this.debugPath_1.rewind_xb9q0b_k$();
    var tmp;
    var tmp_0;
    if (spec instanceof TweenSpec) {
      tmp_0 = true;
    } else {
      tmp_0 = spec instanceof SnapSpec;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      var tmp_1;
      if (spec instanceof ArcAnimationSpec) {
        tmp_1 = equals(new ArcMode(spec.get_mode_643w4d_k$()), new ArcMode(Companion_getInstance_16().get_ArcLinear_4dmwqp_k$()));
      } else {
        tmp_1 = false;
      }
      tmp = tmp_1;
    }
    if (tmp) {
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_0 = current.get_center_dcexec_k$();
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(this_0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_2 = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_1 = current.get_center_dcexec_k$();
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$6 = floatFromBits(bits_0);
      this.debugPath_1.moveTo_22horo_k$(tmp_2, tmp$ret$6);
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_2 = target.get_center_dcexec_k$();
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_1 = _Offset___get_packedValue__impl__xh2k8q(this_2);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_1 = convertToInt(shiftRight(value_1, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp_3 = floatFromBits(bits_1);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_3 = target.get_center_dcexec_k$();
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_2 = _Offset___get_packedValue__impl__xh2k8q(this_3);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$14 = floatFromBits(bits_2);
      this.debugPath_1.lineTo_o2nyip_k$(tmp_3, tmp$ret$14);
      // Inline function 'androidx.compose.ui.geometry.Offset.unaryMinus' call
      var this_4 = current.get_center_dcexec_k$();
      var tmp$ret$18 = _Offset___init__impl__c168vi(bitwiseXor(_Offset___get_packedValue__impl__xh2k8q(this_4), new Long(-2147483648, -2147483648)));
      this.debugPath_1.translate_nzlwb0_k$(tmp$ret$18);
      this.debugOffset_1 = Offset__minus_impl_hoj2c0(target.get_center_dcexec_k$(), current.get_center_dcexec_k$());
    } else {
      var pathAnim = TargetBasedAnimation(spec, get_VectorConverter_2(Companion_getInstance()), current, target, initialVelocity);
      var durationNanos = pathAnim.get_durationNanos_ub5cy_k$();
      var startValue = pathAnim.getValueFromNanos_i31vd8_k$(new Long(0, 0));
      var numSteps = 400;
      var inductionVariable = 0;
      if (inductionVariable <= numSteps)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.Long.times' call
          var other = i / (numSteps - 1 | 0);
          var tmp$ret$19 = toNumber(durationNanos) * other;
          var playTime = subtract(durationNanos, numberToLong(tmp$ret$19));
          var rectAtTime = pathAnim.getValueFromNanos_i31vd8_k$(playTime);
          var point = rectAtTime.get_center_dcexec_k$();
          if (i === 0) {
            // Inline function 'androidx.compose.ui.geometry.Offset.x' call
            // Inline function 'androidx.compose.ui.util.unpackFloat1' call
            var value_3 = _Offset___get_packedValue__impl__xh2k8q(point);
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            var bits_3 = convertToInt(shiftRight(value_3, 32));
            // Inline function 'kotlin.fromBits' call
            FloatCompanionObject_getInstance();
            var tmp_4 = floatFromBits(bits_3);
            // Inline function 'androidx.compose.ui.geometry.Offset.y' call
            // Inline function 'androidx.compose.ui.util.unpackFloat2' call
            var value_4 = _Offset___get_packedValue__impl__xh2k8q(point);
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
            // Inline function 'kotlin.fromBits' call
            FloatCompanionObject_getInstance();
            var tmp$ret$24 = floatFromBits(bits_4);
            this.debugPath_1.moveTo_22horo_k$(tmp_4, tmp$ret$24);
          } else {
            // Inline function 'androidx.compose.ui.geometry.Offset.x' call
            // Inline function 'androidx.compose.ui.util.unpackFloat1' call
            var value_5 = _Offset___get_packedValue__impl__xh2k8q(point);
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            var bits_5 = convertToInt(shiftRight(value_5, 32));
            // Inline function 'kotlin.fromBits' call
            FloatCompanionObject_getInstance();
            var tmp_5 = floatFromBits(bits_5);
            // Inline function 'androidx.compose.ui.geometry.Offset.y' call
            // Inline function 'androidx.compose.ui.util.unpackFloat2' call
            var value_6 = _Offset___get_packedValue__impl__xh2k8q(point);
            // Inline function 'androidx.compose.ui.util.floatFromBits' call
            var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
            // Inline function 'kotlin.fromBits' call
            FloatCompanionObject_getInstance();
            var tmp$ret$32 = floatFromBits(bits_6);
            this.debugPath_1.lineTo_o2nyip_k$(tmp_5, tmp$ret$32);
          }
        }
         while (!(i === numSteps));
      // Inline function 'androidx.compose.ui.geometry.Offset.unaryMinus' call
      var this_5 = startValue.get_center_dcexec_k$();
      var tmp$ret$36 = _Offset___init__impl__c168vi(bitwiseXor(_Offset___get_packedValue__impl__xh2k8q(this_5), new Long(-2147483648, -2147483648)));
      this.debugPath_1.translate_nzlwb0_k$(tmp$ret$36);
      this.debugOffset_1 = Offset__minus_impl_hoj2c0(target.get_center_dcexec_k$(), startValue.get_center_dcexec_k$());
    }
  };
  protoOf(LookaheadAnimationVisualDebugHelper).calculatePath$default_mi9420_k$ = function (spec, current, target, initialVelocity, $super) {
    var tmp;
    if (initialVelocity === VOID) {
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var v1 = fromInt(toRawBits(0.0));
      var v2 = fromInt(toRawBits(0.0));
      var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      var tmp$ret$0 = _Offset___init__impl__c168vi(tmp$ret$1);
      tmp = Rect(tmp$ret$0, 0.0);
    } else {
      tmp = initialVelocity;
    }
    initialVelocity = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.calculatePath_wh97fu_k$(spec, current, target, initialVelocity);
      tmp_0 = Unit_getInstance();
    } else {
      tmp_0 = $super.calculatePath_wh97fu_k$.call(this, spec, current, target, initialVelocity);
    }
    return tmp_0;
  };
  var properties_initialized_LookaheadAnimationVisualDebugHelper_kt_gph6b5;
  function _init_properties_LookaheadAnimationVisualDebugHelper_kt__4gnjcj() {
    if (!properties_initialized_LookaheadAnimationVisualDebugHelper_kt_gph6b5) {
      properties_initialized_LookaheadAnimationVisualDebugHelper_kt_gph6b5 = true;
      colorIndex = 0;
      keyToColor = new MutableScatterMap();
      androidx_compose_animation_LookaheadAnimationVisualDebugHelper$stable = 8;
    }
  }
  var androidx_compose_animation_RenderInTransitionOverlayNodeElement$stable;
  var androidx_compose_animation_RenderInTransitionOverlayNode$stable;
  function RenderInTransitionOverlayNodeElement(sharedTransitionScope, renderInOverlay, zIndexInOverlay) {
    ModifierNodeElement.call(this);
    this.sharedTransitionScope_1 = sharedTransitionScope;
    this.renderInOverlay_1 = renderInOverlay;
    this.zIndexInOverlay_1 = zIndexInOverlay;
  }
  protoOf(RenderInTransitionOverlayNodeElement).set_sharedTransitionScope_jrj0tv_k$ = function (_set____db54di) {
    this.sharedTransitionScope_1 = _set____db54di;
  };
  protoOf(RenderInTransitionOverlayNodeElement).get_sharedTransitionScope_rd4vgv_k$ = function () {
    return this.sharedTransitionScope_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).set_renderInOverlay_apxsrl_k$ = function (_set____db54di) {
    this.renderInOverlay_1 = _set____db54di;
  };
  protoOf(RenderInTransitionOverlayNodeElement).get_renderInOverlay_hmdu9g_k$ = function () {
    return this.renderInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).get_zIndexInOverlay_tqowly_k$ = function () {
    return this.zIndexInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNodeElement).create_md4cuc_k$ = function () {
    return new RenderInTransitionOverlayNode(this.sharedTransitionScope_1, this.renderInOverlay_1, this.zIndexInOverlay_1);
  };
  protoOf(RenderInTransitionOverlayNodeElement).update_v1wnug_k$ = function (node) {
    node.sharedScope_1 = this.sharedTransitionScope_1;
    node.renderInOverlay_1 = this.renderInOverlay_1;
    node.set_zIndexInOverlay_d3b21a_k$(this.zIndexInOverlay_1);
  };
  protoOf(RenderInTransitionOverlayNodeElement).update_9wd57p_k$ = function (node) {
    return this.update_v1wnug_k$(node instanceof RenderInTransitionOverlayNode ? node : THROW_CCE());
  };
  protoOf(RenderInTransitionOverlayNodeElement).hashCode = function () {
    return imul(imul(hashCode(this.sharedTransitionScope_1), 31) + hashCode(this.renderInOverlay_1) | 0, 31) + getNumberHashCode(this.zIndexInOverlay_1) | 0;
  };
  protoOf(RenderInTransitionOverlayNodeElement).equals = function (other) {
    if (other instanceof RenderInTransitionOverlayNodeElement) {
      return equals(this.sharedTransitionScope_1, other.sharedTransitionScope_1) && this.renderInOverlay_1 === other.renderInOverlay_1 && this.zIndexInOverlay_1 === other.zIndexInOverlay_1;
    }
    return false;
  };
  protoOf(RenderInTransitionOverlayNodeElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('renderInSharedTransitionOverlay');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('sharedTransitionScope', this.sharedTransitionScope_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('renderInOverlay', this.renderInOverlay_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('zIndexInOverlay', this.zIndexInOverlay_1);
  };
  function _set__zIndexInOverlay__4vl54t($this, _set____db54di) {
    var tmp0 = $this._zIndexInOverlay$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = RenderInTransitionOverlayNode$_get__zIndexInOverlay_$ref_jp99t4_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('_zIndexInOverlay', 1, tmp, tmp_0, RenderInTransitionOverlayNode$_set__zIndexInOverlay_$ref_xnbxtg_0());
    tmp0.set_floatValue_qaujgq_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get__zIndexInOverlay__o7j3xz($this) {
    var tmp0 = $this._zIndexInOverlay$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = RenderInTransitionOverlayNode$_get__zIndexInOverlay_$ref_jp99t4();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('_zIndexInOverlay', 1, tmp, tmp_0, RenderInTransitionOverlayNode$_set__zIndexInOverlay_$ref_xnbxtg());
    return tmp0.get_floatValue_xw60ou_k$();
  }
  function _set_enabled__gwlwmc($this, value) {
    if (!(value === $this.enabled_1)) {
      var tmp0_safe_receiver = $this.sharedScope_1.get_invalidateOverlay_sqmoz0_k$();
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver();
      invalidateDraw($this);
      $this.enabled_1 = value;
    }
  }
  function _get_enabled__8pmdqo($this) {
    return $this.enabled_1;
  }
  function _set_positionInOverlay__3s8f5v($this, value) {
    if (!equals(new Offset(value), new Offset($this.positionInOverlay_1))) {
      var tmp0_safe_receiver = $this.sharedScope_1.get_invalidateOverlay_sqmoz0_k$();
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver();
      invalidateDraw($this);
      $this.positionInOverlay_1 = value;
    }
  }
  function _get_positionInOverlay__hxkh4h($this) {
    return $this.positionInOverlay_1;
  }
  function LayerWithRenderer($outer, layer) {
    this.$this_1 = $outer;
    this.layer_1 = layer;
  }
  protoOf(LayerWithRenderer).get_layer_iujprc_k$ = function () {
    return this.layer_1;
  };
  protoOf(LayerWithRenderer).get_parentState_ui10gu_k$ = function () {
    return this.$this_1.get_parentState_ui10gu_k$();
  };
  protoOf(LayerWithRenderer).get_zIndex_mbbc75_k$ = function () {
    return this.$this_1.get_zIndexInOverlay_tqowly_k$();
  };
  protoOf(LayerWithRenderer).drawInOverlay_a94erc_k$ = function (drawScope, graphicsContext) {
    if (this.$this_1.enabled_1) {
      // Inline function 'kotlin.with' call
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_0 = this.$this_1.positionInOverlay_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(this_0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp2 = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_1 = this.$this_1.positionInOverlay_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
      var top = floatFromBits(bits_0);
      drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(tmp2, top);
      try {
        drawLayer(drawScope, this.layer_1);
      }finally {
        drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-tmp2, -top);
      }
    }
  };
  function _set_layerWithRenderer__a4xuol($this, _set____db54di) {
    $this.layerWithRenderer_1 = _set____db54di;
  }
  function _get_layerWithRenderer__vuqqyx($this) {
    return $this.layerWithRenderer_1;
  }
  function RenderInTransitionOverlayNode$_get__zIndexInOverlay_$ref_jp99t4() {
    return constructCallableReference(function (p0) {
      return _get__zIndexInOverlay__o7j3xz(p0);
    }, 1, 0, 'androidx.compose.animation/RenderInTransitionOverlayNode._zIndexInOverlay.<get-_zIndexInOverlay>|<get-_zIndexInOverlay>(){}[0]');
  }
  function RenderInTransitionOverlayNode$_set__zIndexInOverlay_$ref_xnbxtg() {
    return constructCallableReference(function (p0, p1) {
      _set__zIndexInOverlay__4vl54t(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/RenderInTransitionOverlayNode._zIndexInOverlay.<set-_zIndexInOverlay>|<set-_zIndexInOverlay>(kotlin.Float){}[0]');
  }
  function RenderInTransitionOverlayNode$_get__zIndexInOverlay_$ref_jp99t4_0() {
    return constructCallableReference(function (p0) {
      return _get__zIndexInOverlay__o7j3xz(p0);
    }, 1, 0, 'androidx.compose.animation/RenderInTransitionOverlayNode._zIndexInOverlay.<get-_zIndexInOverlay>|<get-_zIndexInOverlay>(){}[0]');
  }
  function RenderInTransitionOverlayNode$_set__zIndexInOverlay_$ref_xnbxtg_0() {
    return constructCallableReference(function (p0, p1) {
      _set__zIndexInOverlay__4vl54t(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/RenderInTransitionOverlayNode._zIndexInOverlay.<set-_zIndexInOverlay>|<set-_zIndexInOverlay>(kotlin.Float){}[0]');
  }
  function RenderInTransitionOverlayNode$measure$lambda($this_measure, this$0, $$this$run) {
    return function ($this$layout) {
      var tmp;
      if (!$this_measure.get_isLookingAhead_2057g1_k$()) {
        if (this$0.renderInOverlay_1()) {
          if ($this$layout.get_coordinates_q6f2pa_k$() == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            _set_enabled__gwlwmc(this$0, true);
            _set_positionInOverlay__3s8f5v(this$0, this$0.sharedScope_1.get_root_4w1woo_k$().localPositionOf_hrey0l_k$(requireLayoutCoordinates(this$0), Companion_getInstance_4().get_Zero_k6n73t_k$()));
          }
        } else {
          _set_enabled__gwlwmc(this$0, false);
        }
        tmp = Unit_getInstance();
      }
      $this$layout.place$default_61faqz_k$($$this$run, 0, 0);
      return Unit_getInstance();
    };
  }
  function RenderInTransitionOverlayNode$draw$lambda($this_draw) {
    return function ($this$record) {
      $this_draw.drawContent_m0wwjp_k$();
      return Unit_getInstance();
    };
  }
  function RenderInTransitionOverlayNode(sharedScope, renderInOverlay, zIndexInOverlay) {
    Node.call(this);
    this.sharedScope_1 = sharedScope;
    this.renderInOverlay_1 = renderInOverlay;
    this._zIndexInOverlay$delegate_1 = mutableFloatStateOf(zIndexInOverlay);
    this.enabled_1 = false;
    this.positionInOverlay_1 = Companion_getInstance_4().get_Zero_k6n73t_k$();
    this.layerWithRenderer_1 = null;
  }
  protoOf(RenderInTransitionOverlayNode).set_sharedScope_5efco2_k$ = function (_set____db54di) {
    this.sharedScope_1 = _set____db54di;
  };
  protoOf(RenderInTransitionOverlayNode).get_sharedScope_mhvhxi_k$ = function () {
    return this.sharedScope_1;
  };
  protoOf(RenderInTransitionOverlayNode).set_renderInOverlay_apxsrl_k$ = function (_set____db54di) {
    this.renderInOverlay_1 = _set____db54di;
  };
  protoOf(RenderInTransitionOverlayNode).get_renderInOverlay_hmdu9g_k$ = function () {
    return this.renderInOverlay_1;
  };
  protoOf(RenderInTransitionOverlayNode).set_zIndexInOverlay_d3b21a_k$ = function (value) {
    if (!(_get__zIndexInOverlay__o7j3xz(this) === value)) {
      _set__zIndexInOverlay__4vl54t(this, value);
      this.sharedScope_1.zOrderChanged_lnjylf_k$();
    }
  };
  protoOf(RenderInTransitionOverlayNode).get_zIndexInOverlay_tqowly_k$ = function () {
    return _get__zIndexInOverlay__o7j3xz(this);
  };
  protoOf(RenderInTransitionOverlayNode).get_parentState_ui10gu_k$ = function () {
    return this.get_current_2exe6q_k$(get_ModifierLocalSharedElementInternalState());
  };
  protoOf(RenderInTransitionOverlayNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'kotlin.run' call
    var $this$run = measurable.measure_4dmfk1_k$(constraints);
    var tmp = $this$run.get_width_j0q4yl_k$();
    var tmp_0 = $this$run.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp, tmp_0, VOID, RenderInTransitionOverlayNode$measure$lambda(_this__u8e3s4, this, $this$run));
  };
  protoOf(RenderInTransitionOverlayNode).draw_2h95cs_k$ = function (_this__u8e3s4) {
    var tmp0 = this.get_layer_iujprc_k$();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Error: layer never initialized';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    var layer = tmp$ret$0;
    _this__u8e3s4.record$default_m64s38_k$(layer, VOID, RenderInTransitionOverlayNode$draw$lambda(_this__u8e3s4));
    if (!this.enabled_1) {
      drawLayer(_this__u8e3s4, layer);
    }
  };
  protoOf(RenderInTransitionOverlayNode).get_layer_iujprc_k$ = function () {
    var tmp0_safe_receiver = this.layerWithRenderer_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.layer_1;
  };
  protoOf(RenderInTransitionOverlayNode).onAttach_juzy2c_k$ = function () {
    // Inline function 'kotlin.let' call
    var it = new LayerWithRenderer(this, requireGraphicsContext(this).createGraphicsLayer_a0ja3u_k$());
    this.sharedScope_1.onLayerRendererCreated_lwx1jm_k$(it);
    this.layerWithRenderer_1 = it;
  };
  protoOf(RenderInTransitionOverlayNode).onDetach_8dig02_k$ = function () {
    var tmp0_safe_receiver = this.layerWithRenderer_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.sharedScope_1.onLayerRendererRemoved_bn3slm_k$(tmp0_safe_receiver);
      requireGraphicsContext(this).releaseGraphicsLayer_8n1d07_k$(tmp0_safe_receiver.layer_1);
    }
  };
  function get_ModifierLocalSharedElementInternalState() {
    _init_properties_SharedContentNode_kt__22dkzo();
    return ModifierLocalSharedElementInternalState;
  }
  var ModifierLocalSharedElementInternalState;
  var androidx_compose_animation_SharedBoundsNodeElement$stable;
  var androidx_compose_animation_SharedBoundsNode$stable;
  function calculatePivot(parentCoords, rootCoords, transformOrigin) {
    _init_properties_SharedContentNode_kt__22dkzo();
    var parentBoundsInRoot = rootCoords.localBoundingBoxOf_v0eey6_k$(parentCoords, false);
    var tmp = parentBoundsInRoot.get_left_woprgw_k$();
    // Inline function 'androidx.compose.ui.geometry.Rect.width' call
    var tmp0 = tmp + (parentBoundsInRoot.get_right_ixz7xv_k$() - parentBoundsInRoot.get_left_woprgw_k$()) * _TransformOrigin___get_pivotFractionX__impl__a9pmci(transformOrigin);
    var tmp_0 = parentBoundsInRoot.get_top_18ivbo_k$();
    // Inline function 'androidx.compose.ui.geometry.Rect.height' call
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp_0 + (parentBoundsInRoot.get_bottom_bj8ras_k$() - parentBoundsInRoot.get_top_18ivbo_k$()) * _TransformOrigin___get_pivotFractionY__impl__ijwupp(transformOrigin);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$3 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$3);
  }
  function SharedBoundsNodeElement(sharedElementState) {
    ModifierNodeElement.call(this);
    this.sharedElementState_1 = sharedElementState;
  }
  protoOf(SharedBoundsNodeElement).get_sharedElementState_80iykj_k$ = function () {
    return this.sharedElementState_1;
  };
  protoOf(SharedBoundsNodeElement).create_md4cuc_k$ = function () {
    return new SharedBoundsNode(this.sharedElementState_1);
  };
  protoOf(SharedBoundsNodeElement).update_hnpobl_k$ = function (node) {
    node.set_sharedElementEntry_fu5d2q_k$(this.sharedElementState_1);
  };
  protoOf(SharedBoundsNodeElement).update_9wd57p_k$ = function (node) {
    return this.update_hnpobl_k$(node instanceof SharedBoundsNode ? node : THROW_CCE());
  };
  protoOf(SharedBoundsNodeElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('sharedBounds');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('sharedElementState', this.sharedElementState_1);
  };
  protoOf(SharedBoundsNodeElement).component1_7eebsc_k$ = function () {
    return this.sharedElementState_1;
  };
  protoOf(SharedBoundsNodeElement).copy_hith5w_k$ = function (sharedElementState) {
    return new SharedBoundsNodeElement(sharedElementState);
  };
  protoOf(SharedBoundsNodeElement).copy$default_i6lb18_k$ = function (sharedElementState, $super) {
    sharedElementState = sharedElementState === VOID ? this.sharedElementState_1 : sharedElementState;
    return $super === VOID ? this.copy_hith5w_k$(sharedElementState) : $super.copy_hith5w_k$.call(this, sharedElementState);
  };
  protoOf(SharedBoundsNodeElement).toString = function () {
    return 'SharedBoundsNodeElement(sharedElementState=' + toString_0(this.sharedElementState_1) + ')';
  };
  protoOf(SharedBoundsNodeElement).hashCode = function () {
    return hashCode(this.sharedElementState_1);
  };
  protoOf(SharedBoundsNodeElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SharedBoundsNodeElement))
      return false;
    if (!equals(this.sharedElementState_1, other.sharedElementState_1))
      return false;
    return true;
  };
  function _set_forcedHandoffBounds__5cja09($this, _set____db54di) {
    $this.forcedHandoffBounds_1 = _set____db54di;
  }
  function _get_forcedHandoffBounds__in9iwl($this) {
    return $this.forcedHandoffBounds_1;
  }
  function _set_forcedHandoffVelocity__24dum9($this, _set____db54di) {
    $this.forcedHandoffVelocity_1 = _set____db54di;
  }
  function _get_forcedHandoffVelocity__418htf($this) {
    return $this.forcedHandoffVelocity_1;
  }
  function _set_boundsBeforeDetached__s0znqp($this, _set____db54di) {
    $this.boundsBeforeDetached_1 = _set____db54di;
  }
  function _get_boundsBeforeDetached__e2wzqd($this) {
    return $this.boundsBeforeDetached_1;
  }
  function _set_resolvedTransformState__h7zehm($this, _set____db54di) {
    $this.resolvedTransformState_1 = _set____db54di;
  }
  function _get_resolvedTransformState__vk171u($this) {
    return $this.resolvedTransformState_1;
  }
  function _get_approachCoordinates__8yzp32($this) {
    return requireLayoutCoordinates($this);
  }
  function _set_isPlaced__jjpkts($this, _set____db54di) {
    $this.isPlaced_1 = _set____db54di;
  }
  function _get_isPlaced__6qt9d0($this) {
    return $this.isPlaced_1;
  }
  function _get_rootCoords__hhtj4l($this) {
    return _get_sharedElement__nuo62($this).get_scope_iyfcq3_k$().get_root_4w1woo_k$();
  }
  function requireLookaheadLayoutCoordinates($this) {
    // Inline function 'kotlin.with' call
    return $this.sharedElementEntry_1.get_sharedElement_xjw30y_k$().get_scope_iyfcq3_k$().toLookaheadCoordinates_1gvv32_k$(requireLayoutCoordinates($this));
  }
  function _get_boundsAnimation__ff0bi($this) {
    return $this.sharedElementEntry_1.get_boundsAnimation_bx9g2i_k$();
  }
  function _set_layer__h6sopg($this, value) {
    var oldLayer = $this.sharedElementEntry_1.get_layer_iujprc_k$();
    if (!equals(value, oldLayer)) {
      if (oldLayer == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        requireGraphicsContext($this).releaseGraphicsLayer_8n1d07_k$(oldLayer);
      }
      $this.sharedElementEntry_1.set_layer_t4w1t1_k$(value);
    }
  }
  function _get_layer__eubrs0($this) {
    return $this.sharedElementEntry_1.get_layer_iujprc_k$();
  }
  function _get_sharedElement__nuo62($this) {
    return $this.sharedElementEntry_1.get_sharedElement_xjw30y_k$();
  }
  function setup($this) {
    $this.provide_fhfib2_k$(get_ModifierLocalSharedElementInternalState(), $this.sharedElementEntry_1);
    $this.sharedElementEntry_1.set_parentState_qcv6mg_k$($this.get_current_2exe6q_k$(get_ModifierLocalSharedElementInternalState()));
    _set_layer__h6sopg($this, null);
    $this.isPlaced_1 = false;
    $this.sharedElementEntry_1.set_boundsProvider_6jjacs_k$($this);
  }
  function _set_textMeasurer__ivtei2($this, _set____db54di) {
    $this.textMeasurer_1 = _set____db54di;
  }
  function _get_textMeasurer__3c2nxy($this) {
    return $this.textMeasurer_1;
  }
  function _set_lookaheadAnimationVisualDebugHelper__bliu8q($this, _set____db54di) {
    $this.lookaheadAnimationVisualDebugHelper_1 = _set____db54di;
  }
  function _get_lookaheadAnimationVisualDebugHelper__hjbeha($this) {
    return $this.lookaheadAnimationVisualDebugHelper_1;
  }
  function _set_currentResolver__e4ossm($this, _set____db54di) {
    $this.currentResolver_1 = _set____db54di;
  }
  function _get_currentResolver__o8f0b6($this) {
    return $this.currentResolver_1;
  }
  function _set_currentDensity__bnbcnc($this, _set____db54di) {
    $this.currentDensity_1 = _set____db54di;
  }
  function _get_currentDensity__xup9ac($this) {
    return $this.currentDensity_1;
  }
  function _set_currentLayoutDirection__7u0gth($this, _set____db54di) {
    $this.currentLayoutDirection_1 = _set____db54di;
  }
  function _get_currentLayoutDirection__ef2zm7($this) {
    return $this.currentLayoutDirection_1;
  }
  function approachPlaceMatchBeyondTransition($this, $receiver, placeable, currentBounds) {
    if (!_get_boundsAnimation__ff0bi($this).get_target_juba8q_k$()) {
      var bounds = currentBounds;
      var tmp0_safe_receiver = $receiver.get_coordinates_q6f2pa_k$();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        var positionInScope = _get_rootCoords__hhtj4l($this).localPositionOf_hrey0l_k$(tmp0_safe_receiver, Companion_getInstance_4().get_Zero_k6n73t_k$());
        tmp = round(Offset__minus_impl_hoj2c0(bounds.get_topLeft_ypvrd5_k$(), positionInScope));
      }
      var tmp1_elvis_lhs = tmp;
      var tmp_0;
      var tmp_1 = tmp1_elvis_lhs;
      if ((tmp_1 == null ? null : new IntOffset(tmp_1)) == null) {
        tmp_0 = Companion_getInstance_7().get_Zero_6hc3i8_k$();
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var _destruct__k2r9zo = tmp_0;
      // Inline function 'androidx.compose.ui.unit.IntOffset.component1' call
      var x = _IntOffset___get_x__impl__qiqr5o(_destruct__k2r9zo);
      // Inline function 'androidx.compose.ui.unit.IntOffset.component2' call
      var y = _IntOffset___get_y__impl__2avpwj(_destruct__k2r9zo);
      $receiver.place$default_61faqz_k$(placeable, x, y);
    } else {
      $receiver.place$default_61faqz_k$(placeable, 0, 0);
    }
  }
  function approachPlace($this, $receiver, placeable) {
    var tmp;
    if (_get_sharedElement__nuo62($this).get_state_wrioid_k$().get_matchIsOrHasBeenConfigured_wqv4it_k$()) {
      var tmp_0 = $this.sharedElementEntry_1.get_placeholderSize_2cay1h_k$();
      var tmp_1 = requireLookaheadLayoutCoordinates($this).get_size_kd98kr_k$();
      var tmp0 = placeable.get_width_j0q4yl_k$();
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = placeable.get_height_e7t92o_k$();
      var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$0 = _IntSize___init__impl__emcjft(tmp$ret$1);
      tmp = tmp_0.calculateSize_sx87iu_k$(tmp_1, tmp$ret$0);
    } else {
      var tmp0_0 = placeable.get_width_j0q4yl_k$();
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2_0 = placeable.get_height_e7t92o_k$();
      var tmp$ret$3 = bitwiseOr(shiftLeft(fromInt(tmp0_0), 32), bitwiseAnd(fromInt(val2_0), new Long(-1, 0)));
      tmp = _IntSize___init__impl__emcjft(tmp$ret$3);
    }
    var _destruct__k2r9zo = tmp;
    // Inline function 'androidx.compose.ui.unit.IntSize.component1' call
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf(_destruct__k2r9zo);
    var w = convertToInt(shiftRight(value, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.component2' call
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntSize___get_packedValue__impl__uho7jf(_destruct__k2r9zo);
    var h = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    return $receiver.layout$default_n19e5l_k$(w, h, VOID, SharedBoundsNode$approachPlace$lambda($this, placeable));
  }
  function updateDeferredHandoffValues($this) {
    if (_get_sharedElement__nuo62($this).get_state_wrioid_k$().get_targetData_c4trx8_k$() == null)
      return Unit_getInstance();
    var tmp0_elvis_lhs = _get_sharedElement__nuo62($this).get_state_wrioid_k$().get_currentBounds_rrenad_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentBounds = tmp;
    var mutableState = $this.sharedElementEntry_1.get_activeMutableTransformState_qzv8if_k$();
    if (mutableState == null || !mutableState.get_isHandoffActive_yl5uc3_k$()) {
      $this.sharedElementEntry_1.set_hasHandoffOccurred_kpqgqy_k$(false);
      return Unit_getInstance();
    }
    if ($this.sharedElementEntry_1.get_hasHandoffOccurred_obknof_k$()) {
      return Unit_getInstance();
    }
    var parentCoords = mutableState.get_parentLayoutCoordinates_fdh4ou_k$();
    if (parentCoords == null || !parentCoords.get_isAttached_odsl1l_k$() || !_get_rootCoords__hhtj4l($this).get_isAttached_odsl1l_k$()) {
      return Unit_getInstance();
    }
    var manualScale = mutableState.get_lastManualScale_g6hiz_k$();
    var manualOffset = mutableState.get_lastManualSlide_6kx3ut_k$();
    var transformOrigin = mutableState.get_lastTransformOrigin_mnagwl_k$();
    var pivot = calculatePivot(parentCoords, _get_rootCoords__hhtj4l($this), transformOrigin);
    var newTopLeft = transform(currentBounds.get_topLeft_ypvrd5_k$(), pivot, manualScale, manualOffset);
    var tmp1_safe_receiver = $this.sharedElementEntry_1.get_boundsProvider_o6pxkh_k$();
    var isOwnContainerMutating = (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_modifierLocalTransformState_46shsg_k$()) === mutableState;
    var containerAppliesTransforms = !$this.sharedElementEntry_1.get_shouldRenderInOverlay_7o8ntm_k$() && isOwnContainerMutating;
    var scale = containerAppliesTransforms ? 1.0 : manualScale;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(newTopLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Rect.width' call
    var newRight = tmp_0 + (currentBounds.get_right_ixz7xv_k$() - currentBounds.get_left_woprgw_k$()) * scale;
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(newTopLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_1 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Rect.height' call
    var newBottom = tmp_1 + (currentBounds.get_bottom_bj8ras_k$() - currentBounds.get_top_18ivbo_k$()) * scale;
    var tmp_2 = $this;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(newTopLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_3 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(newTopLeft);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$14 = floatFromBits(bits_2);
    tmp_2.forcedHandoffBounds_1 = new Rect_0(tmp_3, tmp$ret$14, newRight, newBottom);
    if (!containerAppliesTransforms) {
      var tmp2_safe_receiver = mutableState.get_scaleHandoffVelocity_f7nfp8_k$();
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_value_j01efc_k$();
      var scaleVelocity = tmp3_elvis_lhs == null ? 0.0 : tmp3_elvis_lhs;
      var offsetVelocity = mutableState.get_slideHandoffVelocity_4qhcdx_k$();
      var tmp5_elvis_lhs = offsetVelocity == null ? null : offsetVelocity.get_v1_kntnng_k$();
      var offsetVelocityX = tmp5_elvis_lhs == null ? 0.0 : tmp5_elvis_lhs;
      var tmp7_elvis_lhs = offsetVelocity == null ? null : offsetVelocity.get_v2_kntnnf_k$();
      var offsetVelocityY = tmp7_elvis_lhs == null ? 0.0 : tmp7_elvis_lhs;
      var tmp_4 = currentBounds.get_left_woprgw_k$();
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_3 = _Offset___get_packedValue__impl__xh2k8q(pivot);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_3 = convertToInt(shiftRight(value_3, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var velocityLeft = (tmp_4 - floatFromBits(bits_3)) * scaleVelocity + offsetVelocityX;
      var tmp_5 = currentBounds.get_top_18ivbo_k$();
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_4 = _Offset___get_packedValue__impl__xh2k8q(pivot);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var velocityTop = (tmp_5 - floatFromBits(bits_4)) * scaleVelocity + offsetVelocityY;
      var tmp_6 = currentBounds.get_right_ixz7xv_k$();
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_5 = _Offset___get_packedValue__impl__xh2k8q(pivot);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_5 = convertToInt(shiftRight(value_5, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var velocityRight = (tmp_6 - floatFromBits(bits_5)) * scaleVelocity + offsetVelocityX;
      var tmp_7 = currentBounds.get_bottom_bj8ras_k$();
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_6 = _Offset___get_packedValue__impl__xh2k8q(pivot);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var velocityBottom = (tmp_7 - floatFromBits(bits_6)) * scaleVelocity + offsetVelocityY;
      $this.forcedHandoffVelocity_1 = new AnimationVector4D(velocityLeft, velocityTop, velocityRight, velocityBottom);
    } else {
      $this.forcedHandoffVelocity_1 = null;
    }
    $this.sharedElementEntry_1.set_hasHandoffOccurred_kpqgqy_k$(true);
  }
  function drawContentWithOptionalDebug($this, $receiver, layer, bounds) {
    var tmp;
    // Inline function 'androidx.compose.animation.isLookaheadAnimationVisualDebuggingEnabled' call
    if (get_isLookaheadAnimationVisualDebuggingEnabledDefault() || get_isLookaheadAnimationVisualDebuggingForceEnabled()) {
      tmp = currentValueOf($this, get_LocalLookaheadAnimationVisualDebugConfig());
    } else {
      tmp = null;
    }
    var visualDebugConfig = tmp;
    if (!(visualDebugConfig == null) && visualDebugConfig.get_isEnabled_roz1ma_k$()) {
      drawContentWithLookaheadAnimationDebug($this, $receiver, layer, bounds, visualDebugConfig);
    } else if (!(layer == null)) {
      $receiver.record$default_m64s38_k$(layer, VOID, SharedBoundsNode$drawContentWithOptionalDebug$lambda(bounds, $this, $receiver));
    } else {
      $receiver.drawContent_m0wwjp_k$();
    }
  }
  function drawContentWithLookaheadAnimationDebug($this, $receiver, layer, bounds, visualDebugConfig) {
    if ($this.lookaheadAnimationVisualDebugHelper_1 == null) {
      $this.lookaheadAnimationVisualDebugHelper_1 = new LookaheadAnimationVisualDebugHelper();
    }
    if ($this.currentDensity_1 == null) {
      $this.currentDensity_1 = currentValueOf($this, get_LocalDensity());
      $this.currentLayoutDirection_1 = currentValueOf($this, get_LocalLayoutDirection());
    }
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(2.5);
    var strokeWeight = $receiver.toPx_mycba2_k$(tmp$ret$0);
    var targetData = _get_sharedElement__nuo62($this).get_state_wrioid_k$().get_targetData_c4trx8_k$();
    updateTextMeasurer($this, currentValueOf($this, get_LocalFontFamilyResolver()));
    if (!(layer == null)) {
      $receiver.record$default_m64s38_k$(layer, VOID, SharedBoundsNode$drawContentWithLookaheadAnimationDebug$lambda($receiver, $this, visualDebugConfig, strokeWeight, targetData, bounds));
    } else {
      $receiver.drawContent_m0wwjp_k$();
      drawContentWithLookaheadAnimationDebug$drawDebug($this, visualDebugConfig, strokeWeight, targetData, bounds, $receiver);
    }
  }
  function updateTextMeasurer($this, fontFamilyResolver) {
    if ($this.textMeasurer_1 == null || !equals($this.currentResolver_1, fontFamilyResolver)) {
      $this.textMeasurer_1 = new TextMeasurer(fontFamilyResolver, ensureNotNull($this.currentDensity_1), ensureNotNull($this.currentLayoutDirection_1));
      $this.currentResolver_1 = fontFamilyResolver;
    }
  }
  function sam$androidx_compose_animation_BoundsTransform$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_BoundsTransform$0_0).createAnimationSpec_whg8mb_k$ = function (initialBounds, targetBounds) {
    return this.function_1(initialBounds, targetBounds);
  };
  protoOf(sam$androidx_compose_animation_BoundsTransform$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_BoundsTransform$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, BoundsTransform) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_animation_BoundsTransform$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function SharedBoundsNode$measure$lambda($placeable, this$0) {
    return function ($this$layout) {
      $this$layout.place$default_61faqz_k$($placeable, 0, 0);
      _get_sharedElement__nuo62(this$0).onLookaheadPlaced_1dsesa_k$($this$layout, this$0.sharedElementEntry_1);
      return Unit_getInstance();
    };
  }
  function SharedBoundsNode$approachPlaceMatchInTransition$lambda(_unused_var__etf5q3, _unused_var__etf5q3_0) {
    return spring(VOID, VOID, get_VisibilityThreshold(Companion_getInstance()));
  }
  function SharedBoundsNode$approachPlaceMatchInTransition$lambda_0(_unused_var__etf5q3, _unused_var__etf5q3_0) {
    return spring(VOID, VOID, get_VisibilityThreshold(Companion_getInstance()));
  }
  function SharedBoundsNode$approachPlace$lambda(this$0, $placeable) {
    return function ($this$layout) {
      this$0.isPlaced_1 = true;
      this$0.boundsBeforeDetached_1 = null;
      var matchState = _get_sharedElement__nuo62(this$0).get_state_wrioid_k$();
      var tmp;
      if (!this$0.sharedElementEntry_1.get_isEnabled_roz1ma_k$()) {
        $this$layout.place$default_61faqz_k$($placeable, 0, 0);
        tmp = Unit_getInstance();
      } else if (matchState.get_matchIsOrHasBeenConfigured_wqv4it_k$()) {
        var tmp0 = matchState.get_targetData_c4trx8_k$();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlin.requireNotNull' call
          if (tmp0 == null) {
            var message = 'Match State is configured, but target data is null. State = ' + toString_0(matchState);
            throw IllegalArgumentException_init_$Create$(toString_0(message));
          } else {
            tmp$ret$0 = tmp0;
            break $l$block;
          }
        }
        var targetData = tmp$ret$0;
        var tmp0_0 = matchState.get_currentBounds_rrenad_k$();
        var tmp$ret$2;
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (tmp0_0 == null) {
            var message_0 = 'Match State is configured, but current bounds is null. State = ' + toString_0(matchState);
            throw IllegalArgumentException_init_$Create$(toString_0(message_0));
          } else {
            tmp$ret$2 = tmp0_0;
            break $l$block_0;
          }
        }
        var currentBounds = tmp$ret$2;
        var tmp_0;
        if (_get_sharedElement__nuo62(this$0).get_scope_iyfcq3_k$().get_isTransitionActive_t69j02_k$()) {
          this$0.approachPlaceMatchInTransition_snbq9w_k$($this$layout, $placeable, targetData, currentBounds);
          tmp_0 = Unit_getInstance();
        } else {
          approachPlaceMatchBeyondTransition(this$0, $this$layout, $placeable, currentBounds);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $this$layout.place$default_61faqz_k$($placeable, 0, 0);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SharedBoundsNode$drawContentWithOptionalDebug$lambda($bounds, this$0, $this_drawContentWithOptionalDebug) {
    return function ($this$record) {
      // Inline function 'androidx.compose.animation.sharedTransitionDebug' call
      if (false) {
        var tmp0_safe_receiver = $bounds;
        var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_size_cxx1ym_k$();
        var tmp$ret$1 = 'record layer at size: ' + toString(tmp == null ? null : new Size(tmp)) + ' for key = ' + toString_0(_get_sharedElement__nuo62(this$0).get_key_18j28a_k$());
        println('SharedTransition: ' + tmp$ret$1);
      }
      $this_drawContentWithOptionalDebug.drawContent_m0wwjp_k$();
      return Unit_getInstance();
    };
  }
  function drawContentWithLookaheadAnimationDebug$drawDebug(this$0, $visualDebugConfig, strokeWeight, targetData, $bounds, drawScope) {
    if (!this$0.sharedElementEntry_1.get_isEnabled_roz1ma_k$())
      return Unit_getInstance();
    // Inline function 'kotlin.with' call
    var $this$with = ensureNotNull(this$0.lookaheadAnimationVisualDebugHelper_1);
    if (_get_sharedElement__nuo62(this$0).get_scope_iyfcq3_k$().get_isTransitionActive_t69j02_k$()) {
      if (_get_sharedElement__nuo62(this$0).get_boundsTransformIsActive_so0kla_k$()) {
        if (_get_sharedElement__nuo62(this$0).get_enabledEntries_97jleg_k$().get_size_woubt6_k$() > 2) {
          $this$with.drawMultipleMatchesElement_bhlnwf_k$(drawScope, $visualDebugConfig.get_multipleMatchesColor_9v7opc_k$(), $visualDebugConfig.get_isShowKeyLabelEnabled_wh6dks_k$(), _get_sharedElement__nuo62(this$0).get_key_18j28a_k$(), _get_sharedElement__nuo62(this$0).get_enabledEntries_97jleg_k$().get_size_woubt6_k$() - 1 | 0, ensureNotNull(this$0.textMeasurer_1), strokeWeight * 3);
        } else if (!(targetData == null) && !($bounds == null)) {
          if (!equals($bounds, get_targetBounds(targetData))) {
            $this$with.drawLocalVisualizations_grbav4_k$(drawScope, currentValueOf(this$0, get_LocalLookaheadAnimationVisualDebugColor()).value_1, get_targetBounds(targetData).get_topLeft_ypvrd5_k$(), targetData.get_size_cxx1ym_k$(), $bounds, drawScope.get_center_dcexec_k$(), $visualDebugConfig.get_isShowKeyLabelEnabled_wh6dks_k$(), strokeWeight, _get_sharedElement__nuo62(this$0).get_key_18j28a_k$(), this$0.textMeasurer_1);
          } else {
            $this$with.drawInactiveVisualizations_giod8l_k$(drawScope, $visualDebugConfig.get_inactiveElementColor_4kr83m_k$(), $visualDebugConfig.get_isShowKeyLabelEnabled_wh6dks_k$(), strokeWeight, _get_sharedElement__nuo62(this$0).get_key_18j28a_k$(), this$0.textMeasurer_1);
          }
        }
      } else {
        if (!_get_sharedElement__nuo62(this$0).get_foundMatch_g4mbjg_k$()) {
          $this$with.drawUnmatchedElement_oigdbj_k$(drawScope, $visualDebugConfig.get_unmatchedElementColor_h2n9ww_k$(), $visualDebugConfig.get_isShowKeyLabelEnabled_wh6dks_k$(), _get_sharedElement__nuo62(this$0).get_key_18j28a_k$(), ensureNotNull(this$0.textMeasurer_1), strokeWeight);
        } else {
          $this$with.drawInactiveVisualizations_giod8l_k$(drawScope, $visualDebugConfig.get_inactiveElementColor_4kr83m_k$(), $visualDebugConfig.get_isShowKeyLabelEnabled_wh6dks_k$(), strokeWeight, _get_sharedElement__nuo62(this$0).get_key_18j28a_k$(), this$0.textMeasurer_1);
        }
      }
    } else {
      $this$with.drawInactiveVisualizations_giod8l_k$(drawScope, $visualDebugConfig.get_inactiveElementColor_4kr83m_k$(), $visualDebugConfig.get_isShowKeyLabelEnabled_wh6dks_k$(), strokeWeight, _get_sharedElement__nuo62(this$0).get_key_18j28a_k$(), this$0.textMeasurer_1);
    }
  }
  function SharedBoundsNode$drawContentWithLookaheadAnimationDebug$lambda($this_drawContentWithLookaheadAnimationDebug, this$0, $visualDebugConfig, $strokeWeight, $targetData, $bounds) {
    return function ($this$record) {
      var drawScope = $this_drawContentWithLookaheadAnimationDebug;
      drawScope.drawContent_m0wwjp_k$();
      drawContentWithLookaheadAnimationDebug$drawDebug(this$0, $visualDebugConfig, $strokeWeight, $targetData, $bounds, drawScope);
      return Unit_getInstance();
    };
  }
  function SharedBoundsNode(state) {
    Node.call(this);
    this.forcedHandoffBounds_1 = null;
    this.forcedHandoffVelocity_1 = null;
    this.boundsBeforeDetached_1 = null;
    this.resolvedTransformState_1 = null;
    this.isPlaced_1 = false;
    this.sharedElementEntry_1 = state;
    this.providedValues_1 = modifierLocalMapOf(to(get_ModifierLocalSharedElementInternalState(), state));
    this.textMeasurer_1 = null;
    this.lookaheadAnimationVisualDebugHelper_1 = null;
    this.currentResolver_1 = null;
    this.currentDensity_1 = null;
    this.currentLayoutDirection_1 = null;
  }
  protoOf(SharedBoundsNode).get_lastBoundsInSharedTransitionScope_e0le3l_k$ = function () {
    if (!this.get_isAttached_odsl1l_k$())
      return null;
    if (!this.isPlaced_1)
      return this.boundsBeforeDetached_1;
    return Rect_1(_get_rootCoords__hhtj4l(this).localPositionOf$default_f8vt4q_k$(_get_approachCoordinates__8yzp32(this)), toSize(_get_approachCoordinates__8yzp32(this).get_size_kd98kr_k$()));
  };
  protoOf(SharedBoundsNode).calculateAlternativeTargetBounds_c8liz8_k$ = function (targetBoundsBeforeDisposed) {
    return this.sharedElementEntry_1.calculateTargetBounds_gkv33n_k$(targetBoundsBeforeDisposed);
  };
  protoOf(SharedBoundsNode).get_modifierLocalTransformState_46shsg_k$ = function () {
    if (!this.get_isAttached_odsl1l_k$())
      return null;
    var state = this.resolvedTransformState_1;
    if (state == null) {
      state = this.get_current_2exe6q_k$(get_ModifierLocalSharedMutableTransformState());
      this.resolvedTransformState_1 = state;
    }
    return state;
  };
  protoOf(SharedBoundsNode).set_sharedElementEntry_fu5d2q_k$ = function (value) {
    if (!equals(value, this.sharedElementEntry_1)) {
      this.sharedElementEntry_1.set_isAttached_wr99di_k$(false);
      this.sharedElementEntry_1 = value;
      value.set_isAttached_wr99di_k$(this.get_isAttached_odsl1l_k$());
      if (this.get_isAttached_odsl1l_k$()) {
        setup(this);
      }
    }
  };
  protoOf(SharedBoundsNode).get_sharedElementEntry_7sqeec_k$ = function () {
    return this.sharedElementEntry_1;
  };
  protoOf(SharedBoundsNode).get_providedValues_crrbpu_k$ = function () {
    return this.providedValues_1;
  };
  protoOf(SharedBoundsNode).onAttach_juzy2c_k$ = function () {
    protoOf(Node).onAttach_juzy2c_k$.call(this);
    observeReads(this, _get_sharedElement__nuo62(this).get_observingVisibilityChange_3rwt7l_k$());
    setup(this);
    this.sharedElementEntry_1.set_isAttached_wr99di_k$(true);
  };
  protoOf(SharedBoundsNode).onDetach_8dig02_k$ = function () {
    protoOf(Node).onDetach_8dig02_k$.call(this);
    this.resolvedTransformState_1 = null;
    var rootCoords = _get_sharedElement__nuo62(this).get_scope_iyfcq3_k$().get_nullableRoot_26hlbb_k$();
    if (!(rootCoords == null)) {
      var tmp = this;
      var tmp_0;
      if (rootCoords.get_isAttached_odsl1l_k$() && this.isPlaced_1) {
        tmp_0 = Rect_1(Offset__minus_impl_hoj2c0(positionInRoot(_get_approachCoordinates__8yzp32(this)), positionInRoot(rootCoords)), toSize(_get_approachCoordinates__8yzp32(this).get_size_kd98kr_k$()));
      } else {
        tmp_0 = null;
      }
      tmp.boundsBeforeDetached_1 = tmp_0;
    }
    _set_layer__h6sopg(this, null);
    this.sharedElementEntry_1.set_parentState_qcv6mg_k$(null);
    this.sharedElementEntry_1.set_boundsProvider_6jjacs_k$(null);
    this.sharedElementEntry_1.set_isAttached_wr99di_k$(false);
    this.isPlaced_1 = false;
  };
  protoOf(SharedBoundsNode).onReset_y3iodc_k$ = function () {
    protoOf(Node).onReset_y3iodc_k$.call(this);
    this.boundsBeforeDetached_1 = null;
    _set_layer__h6sopg(this, null);
  };
  protoOf(SharedBoundsNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.measure_4dmfk1_k$(constraints);
    var tmp = placeable.get_width_j0q4yl_k$();
    var tmp_0 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp, tmp_0, VOID, SharedBoundsNode$measure$lambda(placeable, this));
  };
  protoOf(SharedBoundsNode).approachPlaceMatchInTransition_snbq9w_k$ = function (_this__u8e3s4, placeable, targetData, currentBounds) {
    var coordinates = _this__u8e3s4.get_coordinates_q6f2pa_k$();
    if (coordinates == null) {
      _this__u8e3s4.place$default_61faqz_k$(placeable, 0, 0);
      return Unit_getInstance();
    }
    var activeMatchRemoved = !_get_sharedElement__nuo62(this).get_state_wrioid_k$().get_activeMatchFound_5y5djo_k$();
    var positionInScope = _get_rootCoords__hhtj4l(this).localPositionOf_hrey0l_k$(coordinates, Companion_getInstance_4().get_Zero_k6n73t_k$());
    var targetBounds = get_targetBounds(targetData);
    var spec = null;
    var actualIsLookaheadAnimationVisualDebuggingEnabled = false;
    // Inline function 'androidx.compose.animation.isLookaheadAnimationVisualDebuggingEnabled' call
    if (get_isLookaheadAnimationVisualDebuggingEnabledDefault() || get_isLookaheadAnimationVisualDebuggingForceEnabled()) {
      actualIsLookaheadAnimationVisualDebuggingEnabled = currentValueOf(this, get_LocalLookaheadAnimationVisualDebugConfig()).get_isEnabled_roz1ma_k$();
    }
    if (activeMatchRemoved) {
      if (actualIsLookaheadAnimationVisualDebuggingEnabled) {
        var tmp = SharedBoundsNode$approachPlaceMatchInTransition$lambda;
        var boundsTransform = new sam$androidx_compose_animation_BoundsTransform$0_0(tmp);
        spec = boundsTransform.createAnimationSpec_whg8mb_k$(currentBounds, targetBounds);
      }
      var tmp_0 = _get_boundsAnimation__ff0bi(this);
      var tmp_1 = get_targetBounds(targetData);
      var tmp_2 = SharedBoundsNode$approachPlaceMatchInTransition$lambda_0;
      tmp_0.animate_9bys7z_k$(currentBounds, tmp_1, new sam$androidx_compose_animation_BoundsTransform$0_0(tmp_2), this.forcedHandoffBounds_1, this.forcedHandoffVelocity_1);
    } else {
      if (actualIsLookaheadAnimationVisualDebuggingEnabled) {
        spec = spring();
      }
      _get_boundsAnimation__ff0bi(this).animate$default_w99a01_k$(currentBounds, get_targetBounds(targetData), VOID, this.forcedHandoffBounds_1, this.forcedHandoffVelocity_1);
    }
    if (actualIsLookaheadAnimationVisualDebuggingEnabled) {
      if (!(this.lookaheadAnimationVisualDebugHelper_1 == null)) {
        ensureNotNull(this.lookaheadAnimationVisualDebugHelper_1).calculatePath$default_mi9420_k$(ensureNotNull(spec), currentBounds, targetBounds);
      }
    }
    this.forcedHandoffBounds_1 = null;
    this.forcedHandoffVelocity_1 = null;
    var animatedBounds = _get_boundsAnimation__ff0bi(this).get_value_j01efc_k$();
    var topLeft;
    var tmp_3;
    if (animatedBounds == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_3 = calculateOffsetFromDirectManipulation(targetData, animatedBounds);
    }
    var animatedTopLeft = tmp_3;
    if (_get_boundsAnimation__ff0bi(this).get_target_juba8q_k$() || activeMatchRemoved) {
      var tmp_4;
      var tmp_5 = animatedTopLeft;
      if ((tmp_5 == null ? null : new Offset(tmp_5)) == null) {
        tmp_4 = positionInScope;
      } else {
        tmp_4 = animatedTopLeft;
      }
      topLeft = tmp_4;
      var tmp_6;
      var tmp_7 = animatedTopLeft;
      if ((tmp_7 == null ? null : new Offset(tmp_7)) == null) {
        tmp_6 = Rect_1(positionInScope, toSize(coordinates.get_size_kd98kr_k$()));
      } else {
        tmp_6 = Rect_1(animatedTopLeft, animatedBounds.get_size_cxx1ym_k$());
      }
      var bounds = tmp_6;
      _get_sharedElement__nuo62(this).get_state_wrioid_k$().updateBounds_rr2frf_k$(bounds);
      // Inline function 'androidx.compose.animation.sharedTransitionDebug' call
      if (false) {
        var tmp$ret$4 = 'animated bounds: ' + bounds.toString() + ',' + (' target: ' + get_targetBounds(targetData).toString() + ',') + (' scope size: ' + IntSize__toString_impl_54w9zl(_get_sharedElement__nuo62(this).get_scope_iyfcq3_k$().get_lookaheadRoot_u3i6mw_k$().get_size_kd98kr_k$()) + ',') + (' ' + toString_0(_get_sharedElement__nuo62(this).get_state_wrioid_k$()));
        println('SharedTransition: ' + tmp$ret$4);
      }
    } else {
      var tmp_8;
      var tmp_9 = animatedTopLeft;
      if ((tmp_9 == null ? null : new Offset(tmp_9)) == null) {
        tmp_8 = currentBounds.get_topLeft_ypvrd5_k$();
      } else {
        tmp_8 = animatedTopLeft;
      }
      topLeft = tmp_8;
    }
    var mutableTransformState = this.sharedElementEntry_1.get_activeMutableTransformState_qzv8if_k$();
    var finalTopLeft = topLeft;
    if ((mutableTransformState == null ? null : mutableTransformState.get_isMutating_iz608a_k$()) === true) {
      if (!_get_boundsAnimation__ff0bi(this).get_isRunning_okmtn0_k$()) {
        finalTopLeft = positionInScope;
      }
      var parentCoords = mutableTransformState.get_parentLayoutCoordinates_fdh4ou_k$();
      if (!(parentCoords == null) && parentCoords.get_isAttached_odsl1l_k$() && _get_rootCoords__hhtj4l(this).get_isAttached_odsl1l_k$()) {
        var scale = mutableTransformState.get_activeScale_qpa39k_k$();
        var offset = mutableTransformState.get_activeOffset_iba37k_k$();
        var transformOrigin = mutableTransformState.get_activeTransformOrigin_oeyqwo_k$();
        var pivot = calculatePivot(parentCoords, _get_rootCoords__hhtj4l(this), transformOrigin);
        finalTopLeft = transform(topLeft, pivot, scale, offset);
      }
    }
    var localOffset = coordinates.localPositionOf_hrey0l_k$(_get_rootCoords__hhtj4l(this), finalTopLeft);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(localOffset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_0 = floatFromBits(bits);
    var tmp_10;
    if (isNaN_0(this_0)) {
      tmp_10 = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp_10 = roundToInt(this_0);
    }
    var tmp_11 = tmp_10;
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(localOffset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_1 = floatFromBits(bits_0);
    var tmp_12;
    if (isNaN_0(this_1)) {
      tmp_12 = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp_12 = roundToInt(this_1);
    }
    var tmp$ret$15 = tmp_12;
    _this__u8e3s4.place$default_61faqz_k$(placeable, tmp_11, tmp$ret$15);
  };
  protoOf(SharedBoundsNode).isMeasurementApproachInProgress_fyhlil_k$ = function (lookaheadSize) {
    return this.sharedElementEntry_1.get_isEnabled_roz1ma_k$() && _get_sharedElement__nuo62(this).get_foundMatch_g4mbjg_k$() && _get_sharedElement__nuo62(this).get_scope_iyfcq3_k$().get_isTransitionActive_t69j02_k$();
  };
  protoOf(SharedBoundsNode).approachMeasure_xs6k22_k$ = function (_this__u8e3s4, measurable, constraints) {
    updateDeferredHandoffValues(this);
    var tmp0_elvis_lhs = this.forcedHandoffBounds_1;
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? _get_boundsAnimation__ff0bi(this).get_value_j01efc_k$() : tmp0_elvis_lhs;
    var tmp2_safe_receiver = tmp1_elvis_lhs == null ? _get_sharedElement__nuo62(this).tryInitializingCurrentBounds_hhp1hi_k$() : tmp1_elvis_lhs;
    var tmp;
    if (tmp2_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var _destruct__k2r9zo = roundToIntSize(tmp2_safe_receiver.get_size_cxx1ym_k$());
      // Inline function 'androidx.compose.ui.unit.IntSize.component1' call
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(_destruct__k2r9zo);
      var width = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.component2' call
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(_destruct__k2r9zo);
      var height = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.require' call
      if (!(!(width === 2147483647) && !(height === 2147483647))) {
        var message = 'Error: Infinite width/height is invalid. ' + ('animated bounds: ' + toString(_get_boundsAnimation__ff0bi(this).get_value_j01efc_k$()) + ',') + (' current bounds: ' + toString(_get_sharedElement__nuo62(this).get_state_wrioid_k$().get_currentBounds_rrenad_k$()));
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
      tmp = Companion_getInstance_17().fixed_rd8fwx_k$(coerceAtLeast(width, 0), coerceAtLeast(height, 0));
    }
    var tmp3_elvis_lhs = tmp;
    var tmp_0;
    var tmp_1 = tmp3_elvis_lhs;
    if ((tmp_1 == null ? null : new Constraints_0(tmp_1)) == null) {
      tmp_0 = constraints;
    } else {
      tmp_0 = tmp3_elvis_lhs;
    }
    var resolvedConstraints = tmp_0;
    // Inline function 'androidx.compose.animation.sharedTransitionDebug' call
    if (false) {
      var tmp$ret$11 = 'approach measure constraints: ' + Constraints__toString_impl_37yskr(resolvedConstraints) + ',' + (' key = ' + toString_0(_get_sharedElement__nuo62(this).get_key_18j28a_k$()) + ', state: ' + toString_0(_get_sharedElement__nuo62(this).get_state_wrioid_k$()));
      println('SharedTransition: ' + tmp$ret$11);
    }
    var placeable = measurable.measure_4dmfk1_k$(resolvedConstraints);
    return approachPlace(this, _this__u8e3s4, placeable);
  };
  protoOf(SharedBoundsNode).draw_2h95cs_k$ = function (_this__u8e3s4) {
    var sharedElement = _get_sharedElement__nuo62(this);
    var matchState = sharedElement.get_state_wrioid_k$();
    var bounds = matchState.get_currentBounds_rrenad_k$();
    // Inline function 'androidx.compose.animation.sharedTransitionDebug' call
    if (false) {
      var tmp = bounds == null ? null : bounds.get_size_cxx1ym_k$();
      var tmp$ret$1 = 'ContentDrawScope.draw() invoked. Bounds size: ' + toString(tmp == null ? null : new Size(tmp)) + (' for key = ' + toString_0(sharedElement.get_key_18j28a_k$()) + ', ' + this.sharedElementEntry_1.get_shouldRenderInOverlay_7o8ntm_k$() + ',') + (' becoming visible? ' + this.sharedElementEntry_1.get_target_juba8q_k$() + ', ') + ('should render in overlay? ' + this.sharedElementEntry_1.get_shouldRenderInOverlay_7o8ntm_k$());
      println('SharedTransition: ' + tmp$ret$1);
    }
    if (!this.sharedElementEntry_1.get_shouldRenderInOverlay_7o8ntm_k$()) {
      this.sharedElementEntry_1.set_clipPathInOverlay_uhdx0g_k$(null);
      _set_layer__h6sopg(this, null);
      if (this.sharedElementEntry_1.get_shouldRenderInPlace_x76dxs_k$()) {
        drawContentWithOptionalDebug(this, _this__u8e3s4, null, bounds);
      }
      return Unit_getInstance();
    }
    var tmp_0 = this.sharedElementEntry_1;
    var tmp_1;
    if (!(bounds == null)) {
      tmp_1 = this.sharedElementEntry_1.get_overlayClip_75q8uv_k$().getClipPath_nnv5ej_k$(this.sharedElementEntry_1.get_userState_dy2db1_k$(), bounds, _this__u8e3s4.get_layoutDirection_7e37v0_k$(), requireDensity(this));
    } else {
      tmp_1 = null;
    }
    tmp_0.set_clipPathInOverlay_uhdx0g_k$(tmp_1);
    if (_get_layer__eubrs0(this) == null) {
      _set_layer__h6sopg(this, requireGraphicsContext(this).createGraphicsLayer_a0ja3u_k$());
    }
    var tmp0 = this.sharedElementEntry_1.get_layer_iujprc_k$();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'Error: shared element does not have a layer for rendering in the overlay.';
        throw IllegalStateException_init_$Create$(toString_0(message));
      } else {
        tmp$ret$2 = tmp0;
        break $l$block;
      }
    }
    var layer = tmp$ret$2;
    drawContentWithOptionalDebug(this, _this__u8e3s4, layer, bounds);
    if (this.sharedElementEntry_1.get_shouldRenderInPlace_x76dxs_k$()) {
      // Inline function 'androidx.compose.animation.sharedTransitionDebug' call
      if (false) {
        var tmp$ret$5 = 'drawing in place. key = ' + toString_0(sharedElement.get_key_18j28a_k$());
        println('SharedTransition: ' + tmp$ret$5);
      }
      drawLayer(_this__u8e3s4, layer);
    }
  };
  protoOf(SharedBoundsNode).onObservedReadsChanged_hqt4ia_k$ = function () {
    _get_sharedElement__nuo62(this).updateMatch_oeh0qv_k$();
    observeReads(this, _get_sharedElement__nuo62(this).get_observingVisibilityChange_3rwt7l_k$());
  };
  function transform(_this__u8e3s4, pivot, scale, offset) {
    _init_properties_SharedContentNode_kt__22dkzo();
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(pivot);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(shiftRight(value_0, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_0 = (tmp - floatFromBits(bits_0)) * scale;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(pivot);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp0 = tmp_0 + floatFromBits(bits_1) + _IntOffset___get_x__impl__qiqr5o(offset);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_1 = floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(pivot);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp_2 = (tmp_1 - floatFromBits(bits_3)) * scale;
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _Offset___get_packedValue__impl__xh2k8q(pivot);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp_2 + floatFromBits(bits_4) + _IntOffset___get_y__impl__2avpwj(offset);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$25 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$25);
  }
  function ModifierLocalSharedElementInternalState$lambda() {
    _init_properties_SharedContentNode_kt__22dkzo();
    return null;
  }
  var properties_initialized_SharedContentNode_kt_1ekm3q;
  function _init_properties_SharedContentNode_kt__22dkzo() {
    if (!properties_initialized_SharedContentNode_kt_1ekm3q) {
      properties_initialized_SharedContentNode_kt_1ekm3q = true;
      ModifierLocalSharedElementInternalState = modifierLocalOf(ModifierLocalSharedElementInternalState$lambda);
      androidx_compose_animation_SharedBoundsNodeElement$stable = 0;
      androidx_compose_animation_SharedBoundsNode$stable = 8;
    }
  }
  function get_DefaultMomentumSpring() {
    _init_properties_SharedElement_kt__1lnsv9();
    return DefaultMomentumSpring;
  }
  var DefaultMomentumSpring;
  var androidx_compose_animation_SharedElement$stable;
  function _get_stateMachine__afkxhx($this) {
    return $this.stateMachine_1;
  }
  function _set__allEntries__q1xmd3($this, _set____db54di) {
    var tmp0 = $this._allEntries$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElement$_get__allEntries_$ref_oz3jgl_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('_allEntries', 1, tmp, tmp_0, SharedElement$_set__allEntries_$ref_evdby1_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get__allEntries__eos9a5($this) {
    var tmp0 = $this._allEntries$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElement$_get__allEntries_$ref_oz3jgl();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('_allEntries', 1, tmp, tmp_0, SharedElement$_set__allEntries_$ref_evdby1());
    return tmp0.get_value_j01efc_k$();
  }
  function _set__enabledEntries__uwpn8p($this, _set____db54di) {
    var tmp0 = $this._enabledEntries$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElement$_get__enabledEntries_$ref_ecs2vv_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('_enabledEntries', 1, tmp, tmp_0, SharedElement$_set__enabledEntries_$ref_rnibs7_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get__enabledEntries__kszfq5($this) {
    var tmp0 = $this._enabledEntries$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElement$_get__enabledEntries_$ref_ecs2vv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('_enabledEntries', 1, tmp, tmp_0, SharedElement$_set__enabledEntries_$ref_rnibs7());
    return tmp0.get_value_j01efc_k$();
  }
  function _get_momentumAnimation__nxs7ph($this) {
    return $this.momentumAnimation_1;
  }
  function _set_animationSpecFinalized__w40oz4($this, _set____db54di) {
    $this.animationSpecFinalized_1 = _set____db54di;
  }
  function _get_animationSpecFinalized__9ux8jg($this) {
    return $this.animationSpecFinalized_1;
  }
  function SharedElement$_get__allEntries_$ref_oz3jgl() {
    return constructCallableReference(function (p0) {
      return _get__allEntries__eos9a5(p0);
    }, 1, 0, 'androidx.compose.animation/SharedElement._allEntries.<get-_allEntries>|<get-_allEntries>(){}[0]');
  }
  function SharedElement$_set__allEntries_$ref_evdby1() {
    return constructCallableReference(function (p0, p1) {
      _set__allEntries__q1xmd3(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElement._allEntries.<set-_allEntries>|<set-_allEntries>(kotlin.collections.List<androidx.compose.animation.SharedElementEntry>){}[0]');
  }
  function SharedElement$_get__allEntries_$ref_oz3jgl_0() {
    return constructCallableReference(function (p0) {
      return _get__allEntries__eos9a5(p0);
    }, 1, 0, 'androidx.compose.animation/SharedElement._allEntries.<get-_allEntries>|<get-_allEntries>(){}[0]');
  }
  function SharedElement$_set__allEntries_$ref_evdby1_0() {
    return constructCallableReference(function (p0, p1) {
      _set__allEntries__q1xmd3(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElement._allEntries.<set-_allEntries>|<set-_allEntries>(kotlin.collections.List<androidx.compose.animation.SharedElementEntry>){}[0]');
  }
  function SharedElement$_get__enabledEntries_$ref_ecs2vv() {
    return constructCallableReference(function (p0) {
      return _get__enabledEntries__kszfq5(p0);
    }, 1, 0, 'androidx.compose.animation/SharedElement._enabledEntries.<get-_enabledEntries>|<get-_enabledEntries>(){}[0]');
  }
  function SharedElement$_set__enabledEntries_$ref_rnibs7() {
    return constructCallableReference(function (p0, p1) {
      _set__enabledEntries__uwpn8p(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElement._enabledEntries.<set-_enabledEntries>|<set-_enabledEntries>(kotlin.collections.List<androidx.compose.animation.SharedElementEntry>){}[0]');
  }
  function SharedElement$_get__enabledEntries_$ref_ecs2vv_0() {
    return constructCallableReference(function (p0) {
      return _get__enabledEntries__kszfq5(p0);
    }, 1, 0, 'androidx.compose.animation/SharedElement._enabledEntries.<get-_enabledEntries>|<get-_enabledEntries>(){}[0]');
  }
  function SharedElement$_set__enabledEntries_$ref_rnibs7_0() {
    return constructCallableReference(function (p0, p1) {
      _set__enabledEntries__uwpn8p(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElement._enabledEntries.<set-_enabledEntries>|<set-_enabledEntries>(kotlin.collections.List<androidx.compose.animation.SharedElementEntry>){}[0]');
  }
  function SharedElement$updateExitVelocity$slambda(this$0, $velocity, resultContinuation) {
    this.this$0__1 = this$0;
    this.$velocity_1 = $velocity;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SharedElement$updateExitVelocity$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SharedElement$updateExitVelocity$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SharedElement$updateExitVelocity$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.momentumAnimation_1.animateTo$default_71hueo_k$(new Offset(Companion_getInstance_4().get_Zero_k6n73t_k$()), get_DefaultMomentumSpring(), new Offset(toOffset(this.$velocity_1)), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.this$0__1.animationSpecFinalized_1 = true;
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(SharedElement$updateExitVelocity$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new SharedElement$updateExitVelocity$slambda(this.this$0__1, this.$velocity_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(SharedElement$updateExitVelocity$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function SharedElement$updateExitVelocity$slambda_0(this$0, $velocity, resultContinuation) {
    var i = new SharedElement$updateExitVelocity$slambda(this$0, $velocity, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    }, 1);
  }
  function SharedElement$momentumAnimationOffset$lambda$slambda(this$0, $spring, resultContinuation) {
    this.this$0__1 = this$0;
    this.$spring_1 = $spring;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SharedElement$momentumAnimationOffset$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SharedElement$momentumAnimationOffset$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SharedElement$momentumAnimationOffset$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this$0__1.momentumAnimation_1.animateTo$default_71hueo_k$(new Offset(Companion_getInstance_4().get_Zero_k6n73t_k$()), this.$spring_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(SharedElement$momentumAnimationOffset$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new SharedElement$momentumAnimationOffset$lambda$slambda(this.this$0__1, this.$spring_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(SharedElement$momentumAnimationOffset$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function SharedElement$momentumAnimationOffset$lambda$slambda_0(this$0, $spring, resultContinuation) {
    var i = new SharedElement$momentumAnimationOffset$lambda$slambda(this$0, $spring, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    }, 1);
  }
  function SharedElement$momentumAnimationOffset$lambda(this$0) {
    return function () {
      var tmp;
      if (!this$0.animationSpecFinalized_1 && this$0.scope_1.get_isTransitionActive_t69j02_k$() && this$0.momentumAnimation_1.get_isRunning_okmtn0_k$()) {
        var tmp0 = this$0.get_enabledEntries_97jleg_k$();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
          // Inline function 'androidx.compose.ui.util.fastForEach' call
          var inductionVariable = 0;
          var last = tmp0.get_size_woubt6_k$() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0.get_c1px32_k$(index);
              if (item.get_target_juba8q_k$()) {
                tmp$ret$0 = item;
                break $l$block;
              }
            }
             while (inductionVariable <= last);
          tmp$ret$0 = null;
        }
        var tmp0_safe_receiver = tmp$ret$0;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          var targetSpec = tmp0_safe_receiver.get_boundsAnimation_bx9g2i_k$().get_animationSpec_wdk2t2_k$();
          if (targetSpec instanceof SpringSpec) {
            var spring_0 = spring(targetSpec.get_dampingRatio_syjss2_k$(), targetSpec.get_stiffness_dt2sgm_k$(), new Offset(get_VisibilityThreshold_2(Companion_getInstance_4())));
            var tmp_0 = this$0.scope_1.get_coroutineScope_5k7h45_k$();
            launch(tmp_0, VOID, VOID, SharedElement$momentumAnimationOffset$lambda$slambda_0(this$0, spring_0, null));
          }
          this$0.animationSpecFinalized_1 = true;
        }
        tmp = Unit_getInstance();
      }
      return this$0.momentumAnimation_1.get_value_j01efc_k$();
    };
  }
  function SharedElement$observingVisibilityChange$lambda(this$0) {
    return function () {
      var tmp0 = this$0.get_allEntries_nhmbbc_k$();
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastAny' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable = 0;
        var last = tmp0.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0.get_c1px32_k$(index);
            if (item.get_target_juba8q_k$() && item.get_isEnabled_roz1ma_k$()) {
              break $l$block;
            }
          }
           while (inductionVariable <= last);
      }
      return Unit_getInstance();
    };
  }
  function SharedElement(key, scope) {
    this.key_1 = key;
    this.scope_1 = scope;
    this.stateMachine_1 = new SharedTransitionStateMachine(this);
    this._allEntries$delegate_1 = mutableStateOf(emptyList());
    this._enabledEntries$delegate_1 = mutableStateOf(emptyList());
    this.momentumAnimation_1 = new Animatable_0(new Offset(Companion_getInstance_4().get_Zero_k6n73t_k$()), get_VectorConverter_3(Companion_getInstance_4()));
    this.animationSpecFinalized_1 = false;
    var tmp = this;
    tmp.momentumAnimationOffset_1 = SharedElement$momentumAnimationOffset$lambda(this);
    var tmp_0 = this;
    tmp_0.observingVisibilityChange_1 = SharedElement$observingVisibilityChange$lambda(this);
  }
  protoOf(SharedElement).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(SharedElement).get_scope_iyfcq3_k$ = function () {
    return this.scope_1;
  };
  protoOf(SharedElement).get_state_wrioid_k$ = function () {
    return this.stateMachine_1.get_state_iypx7s_k$();
  };
  protoOf(SharedElement).get_enabledEntries_97jleg_k$ = function () {
    return _get__enabledEntries__kszfq5(this);
  };
  protoOf(SharedElement).get_allEntries_nhmbbc_k$ = function () {
    return _get__allEntries__eos9a5(this);
  };
  protoOf(SharedElement).isAnimating_x1kvqk_k$ = function () {
    var tmp0 = this.get_enabledEntries_97jleg_k$();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0.get_c1px32_k$(index);
          if (item.get_boundsAnimation_bx9g2i_k$().get_isRunning_okmtn0_k$()) {
            tmp$ret$0 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  };
  protoOf(SharedElement).isMutating_1732dp_k$ = function () {
    var tmp0 = this.get_enabledEntries_97jleg_k$();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0.get_c1px32_k$(index);
          var tmp0_safe_receiver = item.get_activeMutableTransformState_qzv8if_k$();
          if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isMutating_iz608a_k$()) === true) {
            tmp$ret$0 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  };
  protoOf(SharedElement).updateMatch_oeh0qv_k$ = function () {
    var tmp0_safe_receiver = this.scope_1.get_testBlockToRun_sdf6ma_k$();
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver();
    var allEntries = _get__allEntries__eos9a5(this);
    // Inline function 'kotlin.collections.mutableListOf' call
    var newEnabledEntries = ArrayList_init_$Create$_0();
    var hasVisibleContent = false;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = allEntries.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = allEntries.get_c1px32_k$(index);
        if (item.get_isEnabled_roz1ma_k$()) {
          newEnabledEntries.add_utx5q5_k$(item);
          if (item.get_boundsAnimation_bx9g2i_k$().get_target_juba8q_k$())
            hasVisibleContent = true;
        }
      }
       while (inductionVariable <= last);
    _set__enabledEntries__uwpn8p(this, newEnabledEntries);
    this.stateMachine_1.checkForAndDeferStateUpdates_dprwzk_k$(hasVisibleContent);
  };
  protoOf(SharedElement).updateExitVelocity_u2vwtv_k$ = function (velocity) {
    var tmp = this.scope_1.get_coroutineScope_5k7h45_k$();
    launch(tmp, VOID, VOID, SharedElement$updateExitVelocity$slambda_0(this, velocity, null));
  };
  protoOf(SharedElement).get_momentumAnimationOffset_v7y4ra_k$ = function () {
    return this.momentumAnimationOffset_1;
  };
  protoOf(SharedElement).invalidateTargetBoundsProvider_wcz26a_k$ = function () {
    return this.stateMachine_1.invalidateTargetBoundsProvider_wcz26a_k$();
  };
  protoOf(SharedElement).tryInitializingCurrentBounds_hhp1hi_k$ = function () {
    return this.stateMachine_1.tryInitializingCurrentBounds_hhp1hi_k$();
  };
  protoOf(SharedElement).onSharedTransitionFinished_4wcl9h_k$ = function () {
    if (this.get_enabledEntries_97jleg_k$().get_size_woubt6_k$() <= 1 || !hasVisibleContent(this.get_enabledEntries_97jleg_k$())) {
      this.stateMachine_1.resetState_9cgocu_k$();
    }
  };
  protoOf(SharedElement).get_foundMatch_g4mbjg_k$ = function () {
    return this.get_state_wrioid_k$().get_activeMatchFound_5y5djo_k$() || this.get_state_wrioid_k$().get_matchIsOrHasBeenConfigured_wqv4it_k$() || this.stateMachine_1.get_activeMatchDeferred_90t7ud_k$();
  };
  protoOf(SharedElement).get_boundsTransformIsActive_so0kla_k$ = function () {
    return this.get_state_wrioid_k$().get_matchIsOrHasBeenConfigured_wqv4it_k$();
  };
  protoOf(SharedElement).onLookaheadPlaced_1dsesa_k$ = function (placementScope, state) {
    this.stateMachine_1.processPendingRequest_ehf2h_k$();
    if (equals(this.get_state_wrioid_k$(), NoMatchFound_getInstance()) || !state.get_isEnabled_roz1ma_k$())
      return Unit_getInstance();
    var matchState = this.get_state_wrioid_k$();
    if (state.get_boundsAnimation_bx9g2i_k$().get_target_juba8q_k$() && matchState.get_activeMatchFound_5y5djo_k$()) {
      // Inline function 'kotlin.with' call
      var tmp0_safe_receiver = placementScope.get_coordinates_q6f2pa_k$();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        var lookaheadSize = toSize(tmp0_safe_receiver.get_size_kd98kr_k$());
        // Inline function 'kotlin.with' call
        var topLeft = state.get_sharedElement_xjw30y_k$().scope_1.localLookaheadPositionOf$default_10xwp7_k$(state.get_sharedElement_xjw30y_k$().scope_1.get_lookaheadRoot_u3i6mw_k$(), tmp0_safe_receiver);
        // Inline function 'kotlin.with' call
        state.get_sharedElement_xjw30y_k$().scope_1;
        var structuralOffset = state.get_sharedElement_xjw30y_k$().scope_1.get_lookaheadRoot_u3i6mw_k$().localPositionOf$default_f8vt4q_k$(tmp0_safe_receiver, VOID, false);
        this.stateMachine_1.configureActiveMatch_bn4iml_k$(lookaheadSize, topLeft, structuralOffset);
        tmp = Unit_getInstance();
      }
    }
  };
  protoOf(SharedElement).get_observingVisibilityChange_3rwt7l_k$ = function () {
    return this.observingVisibilityChange_1;
  };
  protoOf(SharedElement).addEntry_5r9v5k_k$ = function (sharedElementState) {
    _set__allEntries__q1xmd3(this, plus_0(_get__allEntries__eos9a5(this), sharedElementState));
    this.updateMatch_oeh0qv_k$();
  };
  protoOf(SharedElement).removeEntry_rdoucb_k$ = function (sharedElementState) {
    _set__allEntries__q1xmd3(this, minus(_get__allEntries__eos9a5(this), sharedElementState));
    _set__enabledEntries__uwpn8p(this, minus(_get__enabledEntries__kszfq5(this), sharedElementState));
    this.updateMatch_oeh0qv_k$();
  };
  function toOffset(_this__u8e3s4) {
    _init_properties_SharedElement_kt__1lnsv9();
    var tmp0 = _Velocity___get_x__impl__qqcikv(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _Velocity___get_y__impl__239yhc(_this__u8e3s4);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$1);
  }
  function hasVisibleContent(_this__u8e3s4) {
    _init_properties_SharedElement_kt__1lnsv9();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = _this__u8e3s4.get_c1px32_k$(index);
          if (item.get_boundsAnimation_bx9g2i_k$().get_target_juba8q_k$()) {
            tmp$ret$0 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  var properties_initialized_SharedElement_kt_8z8h3t;
  function _init_properties_SharedElement_kt__1lnsv9() {
    if (!properties_initialized_SharedElement_kt_8z8h3t) {
      properties_initialized_SharedElement_kt_8z8h3t = true;
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var v1 = fromInt(toRawBits(3.0));
      var v2 = fromInt(toRawBits(3.0));
      var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      var tmp$ret$0 = _Offset___init__impl__c168vi(tmp$ret$1);
      DefaultMomentumSpring = spring(VOID, 400.0, new Offset(tmp$ret$0));
      androidx_compose_animation_SharedElement$stable = 8;
    }
  }
  var androidx_compose_animation_SharedElementEntry$stable;
  function _set__zIndex__8wzz66($this, _set____db54di) {
    var tmp0 = $this._zIndex$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get__zIndex_$ref_owuqsg_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('_zIndex', 1, tmp, tmp_0, SharedElementEntry$_set__zIndex_$ref_ftv4us_0());
    tmp0.set_floatValue_qaujgq_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get__zIndex__gp8b6u($this) {
    var tmp0 = $this._zIndex$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get__zIndex_$ref_owuqsg();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('_zIndex', 1, tmp, tmp_0, SharedElementEntry$_set__zIndex_$ref_ftv4us());
    return tmp0.get_floatValue_xw60ou_k$();
  }
  function _get_isMutating__5wl1su($this) {
    var tmp0_safe_receiver = $this.boundsProvider_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_modifierLocalTransformState_46shsg_k$();
    return (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_isMutating_iz608a_k$()) === true;
  }
  function _set__parentState__xyywb3($this, _set____db54di) {
    $this._parentState_1 = _set____db54di;
  }
  function _get__parentState__lief3x($this) {
    return $this._parentState_1;
  }
  function _get_shouldRenderAtAll__64ljqk($this) {
    return $this.get_boundsAnimation_bx9g2i_k$().get_target_juba8q_k$() || ($this.get_sharedElement_xjw30y_k$().get_state_wrioid_k$().get_matchIsOrHasBeenConfigured_wqv4it_k$() && !$this.get_sharedElement_xjw30y_k$().get_state_wrioid_k$().get_activeMatchFound_5y5djo_k$()) || !$this.get_renderOnlyWhenVisible_62mrql_k$();
  }
  function SharedElementEntry$_get_isAttached_$ref_d8klhx() {
    return constructCallableReference(function (p0) {
      return p0.get_isAttached_odsl1l_k$();
    }, 1, 0, 'androidx.compose.animation/SharedElementEntry.isAttached.<get-isAttached>|<get-isAttached>(){}[0]');
  }
  function SharedElementEntry$_set_isAttached_$ref_caiujj() {
    return constructCallableReference(function (p0, p1) {
      p0.set_isAttached_wr99di_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElementEntry.isAttached.<set-isAttached>|<set-isAttached>(kotlin.Boolean){}[0]');
  }
  function SharedElementEntry$_get_isAttached_$ref_d8klhx_0() {
    return constructCallableReference(function (p0) {
      return p0.get_isAttached_odsl1l_k$();
    }, 1, 0, 'androidx.compose.animation/SharedElementEntry.isAttached.<get-isAttached>|<get-isAttached>(){}[0]');
  }
  function SharedElementEntry$_set_isAttached_$ref_caiujj_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_isAttached_wr99di_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElementEntry.isAttached.<set-isAttached>|<set-isAttached>(kotlin.Boolean){}[0]');
  }
  function SharedElementEntry$_get__zIndex_$ref_owuqsg() {
    return constructCallableReference(function (p0) {
      return _get__zIndex__gp8b6u(p0);
    }, 1, 0, 'androidx.compose.animation/SharedElementEntry._zIndex.<get-_zIndex>|<get-_zIndex>(){}[0]');
  }
  function SharedElementEntry$_set__zIndex_$ref_ftv4us() {
    return constructCallableReference(function (p0, p1) {
      _set__zIndex__8wzz66(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElementEntry._zIndex.<set-_zIndex>|<set-_zIndex>(kotlin.Float){}[0]');
  }
  function SharedElementEntry$_get__zIndex_$ref_owuqsg_0() {
    return constructCallableReference(function (p0) {
      return _get__zIndex__gp8b6u(p0);
    }, 1, 0, 'androidx.compose.animation/SharedElementEntry._zIndex.<get-_zIndex>|<get-_zIndex>(){}[0]');
  }
  function SharedElementEntry$_set__zIndex_$ref_ftv4us_0() {
    return constructCallableReference(function (p0, p1) {
      _set__zIndex__8wzz66(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElementEntry._zIndex.<set-_zIndex>|<set-_zIndex>(kotlin.Float){}[0]');
  }
  function SharedElementEntry$_get_renderInOverlayDuringTransition_$ref_a85ws() {
    return constructCallableReference(function (p0) {
      return p0.get_renderInOverlayDuringTransition_4yqpjy_k$();
    }, 1, 0, 'androidx.compose.animation/SharedElementEntry.renderInOverlayDuringTransition.<get-renderInOverlayDuringTransition>|<get-renderInOverlayDuringTransition>(){}[0]');
  }
  function SharedElementEntry$_set_renderInOverlayDuringTransition_$ref_680q5c() {
    return constructCallableReference(function (p0, p1) {
      p0.set_renderInOverlayDuringTransition_bhc293_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElementEntry.renderInOverlayDuringTransition.<set-renderInOverlayDuringTransition>|<set-renderInOverlayDuringTransition>(kotlin.Boolean){}[0]');
  }
  function SharedElementEntry$_get_renderInOverlayDuringTransition_$ref_a85ws_0() {
    return constructCallableReference(function (p0) {
      return p0.get_renderInOverlayDuringTransition_4yqpjy_k$();
    }, 1, 0, 'androidx.compose.animation/SharedElementEntry.renderInOverlayDuringTransition.<get-renderInOverlayDuringTransition>|<get-renderInOverlayDuringTransition>(){}[0]');
  }
  function SharedElementEntry$_set_renderInOverlayDuringTransition_$ref_680q5c_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_renderInOverlayDuringTransition_bhc293_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElementEntry.renderInOverlayDuringTransition.<set-renderInOverlayDuringTransition>|<set-renderInOverlayDuringTransition>(kotlin.Boolean){}[0]');
  }
  function SharedElementEntry$_get_sharedElement_$ref_exlt7k() {
    return constructCallableReference(function (p0) {
      return p0.get_sharedElement_xjw30y_k$();
    }, 1, 0, 'androidx.compose.animation/SharedElementEntry.sharedElement.<get-sharedElement>|<get-sharedElement>(){}[0]');
  }
  function SharedElementEntry$_set_sharedElement_$ref_ydpch8() {
    return constructCallableReference(function (p0, p1) {
      p0.set_sharedElement_2xbsqt_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElementEntry.sharedElement.<set-sharedElement>|<set-sharedElement>(androidx.compose.animation.SharedElement){}[0]');
  }
  function SharedElementEntry$_get_sharedElement_$ref_exlt7k_0() {
    return constructCallableReference(function (p0) {
      return p0.get_sharedElement_xjw30y_k$();
    }, 1, 0, 'androidx.compose.animation/SharedElementEntry.sharedElement.<get-sharedElement>|<get-sharedElement>(){}[0]');
  }
  function SharedElementEntry$_set_sharedElement_$ref_ydpch8_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_sharedElement_2xbsqt_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElementEntry.sharedElement.<set-sharedElement>|<set-sharedElement>(androidx.compose.animation.SharedElement){}[0]');
  }
  function SharedElementEntry$_get_boundsAnimation_$ref_1as560() {
    return constructCallableReference(function (p0) {
      return p0.get_boundsAnimation_bx9g2i_k$();
    }, 1, 0, 'androidx.compose.animation/SharedElementEntry.boundsAnimation.<get-boundsAnimation>|<get-boundsAnimation>(){}[0]');
  }
  function SharedElementEntry$_set_boundsAnimation_$ref_bzy3qc() {
    return constructCallableReference(function (p0, p1) {
      p0.set_boundsAnimation_mkzem3_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElementEntry.boundsAnimation.<set-boundsAnimation>|<set-boundsAnimation>(androidx.compose.animation.BoundsAnimation){}[0]');
  }
  function SharedElementEntry$_get_boundsAnimation_$ref_1as560_0() {
    return constructCallableReference(function (p0) {
      return p0.get_boundsAnimation_bx9g2i_k$();
    }, 1, 0, 'androidx.compose.animation/SharedElementEntry.boundsAnimation.<get-boundsAnimation>|<get-boundsAnimation>(){}[0]');
  }
  function SharedElementEntry$_set_boundsAnimation_$ref_bzy3qc_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_boundsAnimation_mkzem3_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElementEntry.boundsAnimation.<set-boundsAnimation>|<set-boundsAnimation>(androidx.compose.animation.BoundsAnimation){}[0]');
  }
  function SharedElementEntry$_get_placeholderSize_$ref_kbbfct() {
    return constructCallableReference(function (p0) {
      return p0.get_placeholderSize_2cay1h_k$();
    }, 1, 0, 'androidx.compose.animation/SharedElementEntry.placeholderSize.<get-placeholderSize>|<get-placeholderSize>(){}[0]');
  }
  function SharedElementEntry$_set_placeholderSize_$ref_xm1o95() {
    return constructCallableReference(function (p0, p1) {
      p0.set_placeholderSize_w5vr6v_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElementEntry.placeholderSize.<set-placeholderSize>|<set-placeholderSize>(androidx.compose.animation.SharedTransitionScope.PlaceholderSize){}[0]');
  }
  function SharedElementEntry$_get_placeholderSize_$ref_kbbfct_0() {
    return constructCallableReference(function (p0) {
      return p0.get_placeholderSize_2cay1h_k$();
    }, 1, 0, 'androidx.compose.animation/SharedElementEntry.placeholderSize.<get-placeholderSize>|<get-placeholderSize>(){}[0]');
  }
  function SharedElementEntry$_set_placeholderSize_$ref_xm1o95_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_placeholderSize_w5vr6v_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElementEntry.placeholderSize.<set-placeholderSize>|<set-placeholderSize>(androidx.compose.animation.SharedTransitionScope.PlaceholderSize){}[0]');
  }
  function SharedElementEntry$_get_renderOnlyWhenVisible_$ref_gbzem7() {
    return constructCallableReference(function (p0) {
      return p0.get_renderOnlyWhenVisible_62mrql_k$();
    }, 1, 0, 'androidx.compose.animation/SharedElementEntry.renderOnlyWhenVisible.<get-renderOnlyWhenVisible>|<get-renderOnlyWhenVisible>(){}[0]');
  }
  function SharedElementEntry$_set_renderOnlyWhenVisible_$ref_e34vnv() {
    return constructCallableReference(function (p0, p1) {
      p0.set_renderOnlyWhenVisible_f63i0s_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElementEntry.renderOnlyWhenVisible.<set-renderOnlyWhenVisible>|<set-renderOnlyWhenVisible>(kotlin.Boolean){}[0]');
  }
  function SharedElementEntry$_get_renderOnlyWhenVisible_$ref_gbzem7_0() {
    return constructCallableReference(function (p0) {
      return p0.get_renderOnlyWhenVisible_62mrql_k$();
    }, 1, 0, 'androidx.compose.animation/SharedElementEntry.renderOnlyWhenVisible.<get-renderOnlyWhenVisible>|<get-renderOnlyWhenVisible>(){}[0]');
  }
  function SharedElementEntry$_set_renderOnlyWhenVisible_$ref_e34vnv_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_renderOnlyWhenVisible_f63i0s_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElementEntry.renderOnlyWhenVisible.<set-renderOnlyWhenVisible>|<set-renderOnlyWhenVisible>(kotlin.Boolean){}[0]');
  }
  function SharedElementEntry$_get_overlayClip_$ref_vtctd5() {
    return constructCallableReference(function (p0) {
      return p0.get_overlayClip_75q8uv_k$();
    }, 1, 0, 'androidx.compose.animation/SharedElementEntry.overlayClip.<get-overlayClip>|<get-overlayClip>(){}[0]');
  }
  function SharedElementEntry$_set_overlayClip_$ref_t4113f() {
    return constructCallableReference(function (p0, p1) {
      p0.set_overlayClip_a8g9zt_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElementEntry.overlayClip.<set-overlayClip>|<set-overlayClip>(androidx.compose.animation.SharedTransitionScope.OverlayClip){}[0]');
  }
  function SharedElementEntry$_get_overlayClip_$ref_vtctd5_0() {
    return constructCallableReference(function (p0) {
      return p0.get_overlayClip_75q8uv_k$();
    }, 1, 0, 'androidx.compose.animation/SharedElementEntry.overlayClip.<get-overlayClip>|<get-overlayClip>(){}[0]');
  }
  function SharedElementEntry$_set_overlayClip_$ref_t4113f_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_overlayClip_a8g9zt_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElementEntry.overlayClip.<set-overlayClip>|<set-overlayClip>(androidx.compose.animation.SharedTransitionScope.OverlayClip){}[0]');
  }
  function SharedElementEntry$_get_userState_$ref_k06vqn() {
    return constructCallableReference(function (p0) {
      return p0.get_userState_dy2db1_k$();
    }, 1, 0, 'androidx.compose.animation/SharedElementEntry.userState.<get-userState>|<get-userState>(){}[0]');
  }
  function SharedElementEntry$_set_userState_$ref_4sfd8b() {
    return constructCallableReference(function (p0, p1) {
      p0.set_userState_zl3ka_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElementEntry.userState.<set-userState>|<set-userState>(androidx.compose.animation.SharedTransitionScope.SharedContentState){}[0]');
  }
  function SharedElementEntry$_get_userState_$ref_k06vqn_0() {
    return constructCallableReference(function (p0) {
      return p0.get_userState_dy2db1_k$();
    }, 1, 0, 'androidx.compose.animation/SharedElementEntry.userState.<get-userState>|<get-userState>(){}[0]');
  }
  function SharedElementEntry$_set_userState_$ref_4sfd8b_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_userState_zl3ka_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElementEntry.userState.<set-userState>|<set-userState>(androidx.compose.animation.SharedTransitionScope.SharedContentState){}[0]');
  }
  function SharedElementEntry$_get_layer_$ref_ejr8re() {
    return constructCallableReference(function (p0) {
      return p0.get_layer_iujprc_k$();
    }, 1, 0, 'androidx.compose.animation/SharedElementEntry.layer.<get-layer>|<get-layer>(){}[0]');
  }
  function SharedElementEntry$_set_layer_$ref_r6ict6() {
    return constructCallableReference(function (p0, p1) {
      p0.set_layer_t4w1t1_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElementEntry.layer.<set-layer>|<set-layer>(androidx.compose.ui.graphics.layer.GraphicsLayer?){}[0]');
  }
  function SharedElementEntry$_get_layer_$ref_ejr8re_0() {
    return constructCallableReference(function (p0) {
      return p0.get_layer_iujprc_k$();
    }, 1, 0, 'androidx.compose.animation/SharedElementEntry.layer.<get-layer>|<get-layer>(){}[0]');
  }
  function SharedElementEntry$_set_layer_$ref_r6ict6_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_layer_t4w1t1_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedElementEntry.layer.<set-layer>|<set-layer>(androidx.compose.ui.graphics.layer.GraphicsLayer?){}[0]');
  }
  function SharedElementEntry(sharedElement, boundsAnimation, placeholderSize, renderOnlyWhenVisible, overlayClip, renderInOverlayDuringTransition, userState, zIndex) {
    this.isAttached$delegate_1 = mutableStateOf(false);
    this._zIndex$delegate_1 = mutableFloatStateOf(zIndex);
    this.renderInOverlayDuringTransition$delegate_1 = mutableStateOf(renderInOverlayDuringTransition);
    this.sharedElement$delegate_1 = mutableStateOf(sharedElement);
    this.boundsAnimation$delegate_1 = mutableStateOf(boundsAnimation);
    this.placeholderSize$delegate_1 = mutableStateOf(placeholderSize);
    this.renderOnlyWhenVisible$delegate_1 = mutableStateOf(renderOnlyWhenVisible);
    this.overlayClip$delegate_1 = mutableStateOf(overlayClip);
    this.userState$delegate_1 = mutableStateOf(userState);
    this.hasHandoffOccurred_1 = false;
    this.clipPathInOverlay_1 = null;
    this._parentState_1 = null;
    this.boundsProvider_1 = null;
    this.layer$delegate_1 = mutableStateOf(null);
  }
  protoOf(SharedElementEntry).set_isAttached_wr99di_k$ = function (_set____db54di) {
    var tmp0 = this.isAttached$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_isAttached_$ref_d8klhx_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isAttached', 1, tmp, tmp_0, SharedElementEntry$_set_isAttached_$ref_caiujj_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementEntry).get_isAttached_odsl1l_k$ = function () {
    var tmp0 = this.isAttached$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_isAttached_$ref_d8klhx();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isAttached', 1, tmp, tmp_0, SharedElementEntry$_set_isAttached_$ref_caiujj());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementEntry).set_zIndex_58jhbh_k$ = function (value) {
    if (!(_get__zIndex__gp8b6u(this) === value)) {
      _set__zIndex__8wzz66(this, value);
      this.get_sharedElement_xjw30y_k$().get_scope_iyfcq3_k$().zOrderChanged_lnjylf_k$();
    }
  };
  protoOf(SharedElementEntry).get_zIndex_mbbc75_k$ = function () {
    return _get__zIndex__gp8b6u(this);
  };
  protoOf(SharedElementEntry).set_renderInOverlayDuringTransition_bhc293_k$ = function (_set____db54di) {
    var tmp0 = this.renderInOverlayDuringTransition$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_renderInOverlayDuringTransition_$ref_a85ws_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('renderInOverlayDuringTransition', 1, tmp, tmp_0, SharedElementEntry$_set_renderInOverlayDuringTransition_$ref_680q5c_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementEntry).get_renderInOverlayDuringTransition_4yqpjy_k$ = function () {
    var tmp0 = this.renderInOverlayDuringTransition$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_renderInOverlayDuringTransition_$ref_a85ws();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('renderInOverlayDuringTransition', 1, tmp, tmp_0, SharedElementEntry$_set_renderInOverlayDuringTransition_$ref_680q5c());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementEntry).set_sharedElement_2xbsqt_k$ = function (_set____db54di) {
    var tmp0 = this.sharedElement$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_sharedElement_$ref_exlt7k_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('sharedElement', 1, tmp, tmp_0, SharedElementEntry$_set_sharedElement_$ref_ydpch8_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementEntry).get_sharedElement_xjw30y_k$ = function () {
    var tmp0 = this.sharedElement$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_sharedElement_$ref_exlt7k();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('sharedElement', 1, tmp, tmp_0, SharedElementEntry$_set_sharedElement_$ref_ydpch8());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementEntry).set_boundsAnimation_mkzem3_k$ = function (_set____db54di) {
    var tmp0 = this.boundsAnimation$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_boundsAnimation_$ref_1as560_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('boundsAnimation', 1, tmp, tmp_0, SharedElementEntry$_set_boundsAnimation_$ref_bzy3qc_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementEntry).get_boundsAnimation_bx9g2i_k$ = function () {
    var tmp0 = this.boundsAnimation$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_boundsAnimation_$ref_1as560();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('boundsAnimation', 1, tmp, tmp_0, SharedElementEntry$_set_boundsAnimation_$ref_bzy3qc());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementEntry).set_placeholderSize_w5vr6v_k$ = function (_set____db54di) {
    var tmp0 = this.placeholderSize$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_placeholderSize_$ref_kbbfct_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('placeholderSize', 1, tmp, tmp_0, SharedElementEntry$_set_placeholderSize_$ref_xm1o95_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementEntry).get_placeholderSize_2cay1h_k$ = function () {
    var tmp0 = this.placeholderSize$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_placeholderSize_$ref_kbbfct();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('placeholderSize', 1, tmp, tmp_0, SharedElementEntry$_set_placeholderSize_$ref_xm1o95());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementEntry).set_renderOnlyWhenVisible_f63i0s_k$ = function (_set____db54di) {
    var tmp0 = this.renderOnlyWhenVisible$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_renderOnlyWhenVisible_$ref_gbzem7_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('renderOnlyWhenVisible', 1, tmp, tmp_0, SharedElementEntry$_set_renderOnlyWhenVisible_$ref_e34vnv_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementEntry).get_renderOnlyWhenVisible_62mrql_k$ = function () {
    var tmp0 = this.renderOnlyWhenVisible$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_renderOnlyWhenVisible_$ref_gbzem7();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('renderOnlyWhenVisible', 1, tmp, tmp_0, SharedElementEntry$_set_renderOnlyWhenVisible_$ref_e34vnv());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementEntry).set_overlayClip_a8g9zt_k$ = function (_set____db54di) {
    var tmp0 = this.overlayClip$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_overlayClip_$ref_vtctd5_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('overlayClip', 1, tmp, tmp_0, SharedElementEntry$_set_overlayClip_$ref_t4113f_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementEntry).get_overlayClip_75q8uv_k$ = function () {
    var tmp0 = this.overlayClip$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_overlayClip_$ref_vtctd5();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('overlayClip', 1, tmp, tmp_0, SharedElementEntry$_set_overlayClip_$ref_t4113f());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementEntry).set_userState_zl3ka_k$ = function (_set____db54di) {
    var tmp0 = this.userState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_userState_$ref_k06vqn_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('userState', 1, tmp, tmp_0, SharedElementEntry$_set_userState_$ref_4sfd8b_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementEntry).get_userState_dy2db1_k$ = function () {
    var tmp0 = this.userState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_userState_$ref_k06vqn();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('userState', 1, tmp, tmp_0, SharedElementEntry$_set_userState_$ref_4sfd8b());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementEntry).get_activeMutableTransformState_qzv8if_k$ = function () {
    if (!this.get_userState_dy2db1_k$().get_config_1xuuqw_k$().get_permitTransformDuringDeferredTransition_6q9ytf_k$())
      return null;
    var tmp0_safe_receiver = this.boundsProvider_1;
    var transformState = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_modifierLocalTransformState_46shsg_k$();
    var isIncoming = _get_isMutating__5wl1su(this) ? !this.get_target_juba8q_k$() : this.get_target_juba8q_k$();
    if (isIncoming) {
      var tmp0 = this.get_sharedElement_xjw30y_k$().get_enabledEntries_97jleg_k$();
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable = 0;
        var last = tmp0.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0.get_c1px32_k$(index);
            if (_get_isMutating__5wl1su(item) ? item.get_target_juba8q_k$() : !item.get_target_juba8q_k$()) {
              tmp$ret$0 = item;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$0 = null;
      }
      var exitingEntry = tmp$ret$0;
      var tmp2_safe_receiver = exitingEntry == null ? null : exitingEntry.boundsProvider_1;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_modifierLocalTransformState_46shsg_k$();
      return tmp3_elvis_lhs == null ? transformState : tmp3_elvis_lhs;
    }
    return transformState;
  };
  protoOf(SharedElementEntry).set_hasHandoffOccurred_kpqgqy_k$ = function (_set____db54di) {
    this.hasHandoffOccurred_1 = _set____db54di;
  };
  protoOf(SharedElementEntry).get_hasHandoffOccurred_obknof_k$ = function () {
    return this.hasHandoffOccurred_1;
  };
  protoOf(SharedElementEntry).get_isEnabled_roz1ma_k$ = function () {
    // Inline function 'kotlin.with' call
    var $this$with = this.get_userState_dy2db1_k$();
    return this.get_isAttached_odsl1l_k$() && $this$with.get_isEnabledByUser_1o81i5_k$();
  };
  protoOf(SharedElementEntry).calculateTargetBounds_gkv33n_k$ = function (previousTargetBoundsBeforeLosingTarget) {
    // Inline function 'kotlin.with' call
    return this.get_userState_dy2db1_k$().get_config_1xuuqw_k$().alternativeTargetBoundsInTransitionScopeAfterRemoval_b74dnl_k$(this.get_userState_dy2db1_k$(), previousTargetBoundsBeforeLosingTarget, toSize(this.get_sharedElement_xjw30y_k$().get_scope_iyfcq3_k$().get_lookaheadRoot_u3i6mw_k$().get_size_kd98kr_k$()));
  };
  protoOf(SharedElementEntry).set_clipPathInOverlay_uhdx0g_k$ = function (_set____db54di) {
    this.clipPathInOverlay_1 = _set____db54di;
  };
  protoOf(SharedElementEntry).get_clipPathInOverlay_rtg516_k$ = function () {
    return this.clipPathInOverlay_1;
  };
  protoOf(SharedElementEntry).drawInOverlay_a94erc_k$ = function (drawScope, graphicsContext) {
    // Inline function 'androidx.compose.animation.sharedTransitionDebug' call
    if (false) {
      var tmp$ret$1 = 'Rendering in overlay for key ' + toString_0(this.get_sharedElement_xjw30y_k$().get_key_18j28a_k$()) + ', becoming visible? ' + this.get_target_juba8q_k$();
      println('SharedTransition: ' + tmp$ret$1);
    }
    if (this.get_shouldRenderInOverlay_7o8ntm_k$()) {
      if (this.get_layer_iujprc_k$() == null) {
        this.set_layer_t4w1t1_k$(graphicsContext.createGraphicsLayer_a0ja3u_k$());
      }
    }
    var tmp0_elvis_lhs = this.get_layer_iujprc_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var layer = tmp;
    var matchState = this.get_sharedElement_xjw30y_k$().get_state_wrioid_k$();
    var tmp1_elvis_lhs = matchState.get_currentBounds_rrenad_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var currentBounds = tmp_0;
    if (this.get_shouldRenderInOverlay_7o8ntm_k$()) {
      // Inline function 'kotlin.with' call
      var _destruct__k2r9zo = currentBounds.get_topLeft_ypvrd5_k$();
      // Inline function 'androidx.compose.ui.geometry.Offset.component1' call
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(_destruct__k2r9zo);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var x = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.Offset.component2' call
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(_destruct__k2r9zo);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var y = floatFromBits(bits_0);
      var scale = 1.0;
      var offsetX = 0.0;
      var offsetY = 0.0;
      var pivotX = 0.0;
      var pivotY = 0.0;
      var mutableTransformState = this.get_activeMutableTransformState_qzv8if_k$();
      var parentCoords = mutableTransformState == null ? null : mutableTransformState.get_parentLayoutCoordinates_fdh4ou_k$();
      var rootCoords = this.get_sharedElement_xjw30y_k$().get_scope_iyfcq3_k$().get_root_4w1woo_k$();
      var tmp_1;
      var tmp_2;
      var tmp_3;
      if ((mutableTransformState == null ? null : mutableTransformState.get_isMutating_iz608a_k$()) === true) {
        tmp_3 = !(parentCoords == null);
      } else {
        tmp_3 = false;
      }
      if (tmp_3) {
        tmp_2 = parentCoords.get_isAttached_odsl1l_k$();
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = rootCoords.get_isAttached_odsl1l_k$();
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        scale = mutableTransformState.get_activeScale_qpa39k_k$();
        var offset = mutableTransformState.get_activeOffset_iba37k_k$();
        offsetX = _IntOffset___get_x__impl__qiqr5o(offset);
        offsetY = _IntOffset___get_y__impl__2avpwj(offset);
        var transformOrigin = mutableTransformState.get_activeTransformOrigin_oeyqwo_k$();
        var pivot = calculatePivot(parentCoords, rootCoords, transformOrigin);
        // Inline function 'androidx.compose.ui.geometry.Offset.x' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_1 = _Offset___get_packedValue__impl__xh2k8q(pivot);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_1 = convertToInt(shiftRight(value_1, 32));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        pivotX = floatFromBits(bits_1);
        // Inline function 'androidx.compose.ui.geometry.Offset.y' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_2 = _Offset___get_packedValue__impl__xh2k8q(pivot);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        pivotY = floatFromBits(bits_2);
      }
      // Inline function 'androidx.compose.animation.sharedTransitionDebug' call
      if (false) {
        var tmp$ret$23 = 'drawing in overlay. key = ' + toString_0(this.get_sharedElement_xjw30y_k$().get_key_18j28a_k$()) + ',' + (' at ' + x + ', ' + y + ' current size: ' + Size__toString_impl_o87ni8(currentBounds.get_size_cxx1ym_k$()) + ' ') + ('state: ' + toString_0(matchState));
        println('SharedTransition: ' + tmp$ret$23);
      }
      var clipPath = this.clipPathInOverlay_1;
      var tmp2 = offsetX;
      // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
      var top = offsetY;
      drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(tmp2, top);
      try {
        var tmp2_0 = scale;
        var tmp4 = scale;
        var tmp0 = pivotX;
        // Inline function 'androidx.compose.ui.geometry.Offset' call
        // Inline function 'androidx.compose.ui.util.packFloats' call
        var val2 = pivotY;
        var v1 = fromInt(toRawBits(tmp0));
        var v2 = fromInt(toRawBits(val2));
        var tmp$ret$27 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
        // Inline function 'androidx.compose.ui.graphics.drawscope.scale' call
        var pivot_0 = _Offset___init__impl__c168vi(tmp$ret$27);
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        // Inline function 'kotlin.with' call
        var $this$with = drawScope.get_drawContext_ffwztu_k$();
        var previousSize = $this$with.get_size_cxx1ym_k$();
        $this$with.get_canvas_bshgm9_k$().save_fbe7h_k$();
        try {
          $this$with.get_transform_px941v_k$().scale_rbtyk0_k$(tmp2_0, tmp4, pivot_0);
          if (!(clipPath == null)) {
            // Inline function 'androidx.compose.ui.graphics.drawscope.clipPath' call
            var clipOp = Companion_getInstance_15().get_Intersect_gpxc6n_k$();
            // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
            // Inline function 'kotlin.with' call
            var $this$with_0 = drawScope.get_drawContext_ffwztu_k$();
            var previousSize_0 = $this$with_0.get_size_cxx1ym_k$();
            $this$with_0.get_canvas_bshgm9_k$().save_fbe7h_k$();
            try {
              $this$with_0.get_transform_px941v_k$().clipPath_tlqunt_k$(clipPath, clipOp);
              // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
              drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(x, y);
              try {
                drawLayer(drawScope, layer);
              }finally {
                drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-x, -y);
              }
            }finally {
              $this$with_0.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
              $this$with_0.set_size_6a0e6q_k$(previousSize_0);
            }
          } else {
            // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
            drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(x, y);
            try {
              drawLayer(drawScope, layer);
            }finally {
              drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-x, -y);
            }
          }
        }finally {
          $this$with.get_canvas_bshgm9_k$().restore_a1ykhu_k$();
          $this$with.set_size_6a0e6q_k$(previousSize);
        }
      }finally {
        drawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_7gghdu_k$(-tmp2, -top);
      }
    }
  };
  protoOf(SharedElementEntry).set_parentState_qcv6mg_k$ = function (value) {
    if (!equals(this._parentState_1, value)) {
      this._parentState_1 = value;
      this.get_sharedElement_xjw30y_k$().get_scope_iyfcq3_k$().zOrderChanged_lnjylf_k$();
    }
  };
  protoOf(SharedElementEntry).get_parentState_ui10gu_k$ = function () {
    return this._parentState_1;
  };
  protoOf(SharedElementEntry).get_target_juba8q_k$ = function () {
    return this.get_boundsAnimation_bx9g2i_k$().get_target_juba8q_k$();
  };
  protoOf(SharedElementEntry).set_boundsProvider_6jjacs_k$ = function (_set____db54di) {
    this.boundsProvider_1 = _set____db54di;
  };
  protoOf(SharedElementEntry).get_boundsProvider_o6pxkh_k$ = function () {
    return this.boundsProvider_1;
  };
  protoOf(SharedElementEntry).set_layer_t4w1t1_k$ = function (_set____db54di) {
    var tmp0 = this.layer$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_layer_$ref_ejr8re_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('layer', 1, tmp, tmp_0, SharedElementEntry$_set_layer_$ref_r6ict6_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedElementEntry).get_layer_iujprc_k$ = function () {
    var tmp0 = this.layer$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedElementEntry$_get_layer_$ref_ejr8re();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('layer', 1, tmp, tmp_0, SharedElementEntry$_set_layer_$ref_r6ict6());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedElementEntry).get_shouldRenderInOverlay_7o8ntm_k$ = function () {
    return _get_shouldRenderAtAll__64ljqk(this) && this.get_sharedElement_xjw30y_k$().get_boundsTransformIsActive_so0kla_k$() && this.get_isEnabled_roz1ma_k$() && this.get_renderInOverlayDuringTransition_4yqpjy_k$() && (this.get_sharedElement_xjw30y_k$().get_scope_iyfcq3_k$().get_isTransitionActive_t69j02_k$() || _get_isMutating__5wl1su(this));
  };
  protoOf(SharedElementEntry).get_shouldRenderInPlace_x76dxs_k$ = function () {
    return !this.get_sharedElement_xjw30y_k$().get_boundsTransformIsActive_so0kla_k$() || (!this.get_shouldRenderInOverlay_7o8ntm_k$() && _get_shouldRenderAtAll__64ljqk(this));
  };
  protoOf(SharedElementEntry).onRemembered_68t2e3_k$ = function () {
    this.get_sharedElement_xjw30y_k$().get_scope_iyfcq3_k$().onEntryAdded_8atu1p_k$(this);
    this.get_sharedElement_xjw30y_k$().invalidateTargetBoundsProvider_wcz26a_k$();
  };
  protoOf(SharedElementEntry).onForgotten_pbqifp_k$ = function () {
    this.get_sharedElement_xjw30y_k$().get_scope_iyfcq3_k$().onEntryRemoved_ijc9q5_k$(this);
    this.get_sharedElement_xjw30y_k$().invalidateTargetBoundsProvider_wcz26a_k$();
  };
  protoOf(SharedElementEntry).onAbandoned_1gx7a3_k$ = function () {
  };
  function BoundsProvider() {
  }
  function get_DefaultSpring() {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return DefaultSpring;
  }
  var DefaultSpring;
  function get_ParentClip() {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return ParentClip;
  }
  var ParentClip;
  function get_cachedScaleToBoundsImplMap() {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return cachedScaleToBoundsImplMap;
  }
  var cachedScaleToBoundsImplMap;
  var androidx_compose_animation_SharedTransitionScope_SharedContentState$stable;
  var androidx_compose_animation_SharedTransitionScopeImpl$stable;
  var androidx_compose_animation_ScaleToBoundsImpl$stable;
  var androidx_compose_animation_SharedTransitionDefaults_SharedContentConfig$stable;
  var androidx_compose_animation_SharedTransitionDefaults$stable;
  function BoundsTransform() {
  }
  function comparator($this, it) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (it.get_zIndex_mbbc75_k$() === 0.0) {
      tmp_1 = it instanceof SharedElementEntry;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = it.get_parentState_ui10gu_k$() == null;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = -1.0;
    } else {
      tmp = it.get_zIndex_mbbc75_k$();
    }
    return tmp;
  }
  function LayerRendererComparator() {
    LayerRendererComparator_instance = this;
  }
  protoOf(LayerRendererComparator).compare_scyq3l_k$ = function (a, b) {
    return compareTo(comparator(this, a), comparator(this, b));
  };
  protoOf(LayerRendererComparator).compare = function (a, b) {
    var tmp = (!(a == null) ? isInterface(a, LayerRenderer) : false) ? a : THROW_CCE();
    return this.compare_scyq3l_k$(tmp, (!(b == null) ? isInterface(b, LayerRenderer) : false) ? b : THROW_CCE());
  };
  var LayerRendererComparator_instance;
  function LayerRendererComparator_getInstance() {
    if (LayerRendererComparator_instance == null)
      new LayerRendererComparator();
    return LayerRendererComparator_instance;
  }
  function LayerRenderer() {
  }
  function sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0).calculateSize_sx87iu_k$ = function (contentSize, animatedSize) {
    return this.function_1(new IntSize(contentSize), new IntSize(animatedSize)).packedValue_1;
  };
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, PlaceholderSize) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0_0).calculateSize_sx87iu_k$ = function (contentSize, animatedSize) {
    return this.function_1(new IntSize(contentSize), new IntSize(animatedSize)).packedValue_1;
  };
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, PlaceholderSize) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function SharedTransitionScope$PlaceholderSize$Companion$AnimatedSize$lambda(_unused_var__etf5q3, animatedSize) {
    return animatedSize;
  }
  function SharedTransitionScope$PlaceholderSize$Companion$ContentSize$lambda(contentSize, _unused_var__etf5q3) {
    return contentSize;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp_0 = SharedTransitionScope$PlaceholderSize$Companion$AnimatedSize$lambda;
    tmp.AnimatedSize_1 = new sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0(tmp_0);
    var tmp_1 = this;
    var tmp_2 = SharedTransitionScope$PlaceholderSize$Companion$ContentSize$lambda;
    tmp_1.ContentSize_1 = new sam$androidx_compose_animation_SharedTransitionScope_PlaceholderSize$0_0(tmp_2);
  }
  protoOf(Companion_1).get_AnimatedSize_olm019_k$ = function () {
    return this.AnimatedSize_1;
  };
  protoOf(Companion_1).get_ContentSize_z1i26p_k$ = function () {
    return this.ContentSize_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_22() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.RemeasureToBounds_1 = RemeasureImpl_getInstance();
  }
  protoOf(Companion_2).get_RemeasureToBounds_vc94xe_k$ = function () {
    return this.RemeasureToBounds_1;
  };
  protoOf(Companion_2).scaleToBounds_38olcd_k$ = function (contentScale, alignment) {
    return ScaleToBoundsCached(contentScale, alignment);
  };
  protoOf(Companion_2).scaleToBounds$default_s9ktl6_k$ = function (contentScale, alignment, $super) {
    contentScale = contentScale === VOID ? Companion_getInstance_18().get_FillWidth_n2o75m_k$() : contentScale;
    alignment = alignment === VOID ? Companion_getInstance_9().get_Center_3arb0i_k$() : alignment;
    return $super === VOID ? this.scaleToBounds_38olcd_k$(contentScale, alignment) : $super.scaleToBounds_38olcd_k$.call(this, contentScale, alignment);
  };
  var Companion_instance_2;
  function Companion_getInstance_23() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function _get_nonNullInternalState__g66s5n($this) {
    var tmp0 = $this.get_internalState_d3bhs8_k$();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Error: SharedContentState has not been added to a sharedElement/sharedBoundsmodifier yet. Therefore the internal state has not been initialized.';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$0;
  }
  function SharedTransitionScope$SharedContentState$_get_config_$ref_65x4et() {
    return constructCallableReference(function (p0) {
      return p0.get_config_1xuuqw_k$();
    }, 1, 0, 'androidx.compose.animation/SharedTransitionScope.SharedContentState.config.<get-config>|<get-config>(){}[0]');
  }
  function SharedTransitionScope$SharedContentState$_set_config_$ref_l85pk1() {
    return constructCallableReference(function (p0, p1) {
      p0.set_config_r265w_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedTransitionScope.SharedContentState.config.<set-config>|<set-config>(androidx.compose.animation.SharedTransitionScope.SharedContentConfig){}[0]');
  }
  function SharedTransitionScope$SharedContentState$_get_config_$ref_65x4et_0() {
    return constructCallableReference(function (p0) {
      return p0.get_config_1xuuqw_k$();
    }, 1, 0, 'androidx.compose.animation/SharedTransitionScope.SharedContentState.config.<get-config>|<get-config>(){}[0]');
  }
  function SharedTransitionScope$SharedContentState$_set_config_$ref_l85pk1_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_config_r265w_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedTransitionScope.SharedContentState.config.<set-config>|<set-config>(androidx.compose.animation.SharedTransitionScope.SharedContentConfig){}[0]');
  }
  function SharedTransitionScope$SharedContentState$_get_internalState_$ref_b9767j() {
    return constructCallableReference(function (p0) {
      return p0.get_internalState_d3bhs8_k$();
    }, 1, 0, 'androidx.compose.animation/SharedTransitionScope.SharedContentState.internalState.<get-internalState>|<get-internalState>(){}[0]');
  }
  function SharedTransitionScope$SharedContentState$_set_internalState_$ref_wz02hv() {
    return constructCallableReference(function (p0, p1) {
      p0.set_internalState_a6ckva_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedTransitionScope.SharedContentState.internalState.<set-internalState>|<set-internalState>(androidx.compose.animation.SharedElementEntry?){}[0]');
  }
  function SharedTransitionScope$SharedContentState$_get_internalState_$ref_b9767j_0() {
    return constructCallableReference(function (p0) {
      return p0.get_internalState_d3bhs8_k$();
    }, 1, 0, 'androidx.compose.animation/SharedTransitionScope.SharedContentState.internalState.<get-internalState>|<get-internalState>(){}[0]');
  }
  function SharedTransitionScope$SharedContentState$_set_internalState_$ref_wz02hv_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_internalState_a6ckva_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedTransitionScope.SharedContentState.internalState.<set-internalState>|<set-internalState>(androidx.compose.animation.SharedElementEntry?){}[0]');
  }
  function PlaceholderSize() {
  }
  function ResizeMode() {
  }
  function OverlayClip() {
  }
  function SharedContentState(key, config) {
    config = config === VOID ? SharedContentConfig_getInstance() : config;
    this.key_1 = key;
    this.config$delegate_1 = mutableStateOf(config);
    this.internalState$delegate_1 = mutableStateOf(null);
  }
  protoOf(SharedContentState).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  protoOf(SharedContentState).get_isAnimating_1l8qrs_k$ = function () {
    var tmp0_safe_receiver = this.get_internalState_d3bhs8_k$();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_boundsAnimation_bx9g2i_k$();
    return !((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_animationState_98s4ty_k$()) == null);
  };
  protoOf(SharedContentState).set_config_r265w_k$ = function (_set____db54di) {
    var tmp0 = this.config$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionScope$SharedContentState$_get_config_$ref_65x4et_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('config', 1, tmp, tmp_0, SharedTransitionScope$SharedContentState$_set_config_$ref_l85pk1_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedContentState).get_config_1xuuqw_k$ = function () {
    var tmp0 = this.config$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionScope$SharedContentState$_get_config_$ref_65x4et();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('config', 1, tmp, tmp_0, SharedTransitionScope$SharedContentState$_set_config_$ref_l85pk1());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedContentState).get_isEnabledByUser_1o81i5_k$ = function () {
    // Inline function 'kotlin.with' call
    var $this$with = this.get_config_1xuuqw_k$();
    return $this$with.get_isEnabled_6836ux_k$(this) || (this.get_isAnimating_1l8qrs_k$() && $this$with.get_shouldKeepEnabledForOngoingAnimation_t2umwi_k$());
  };
  protoOf(SharedContentState).get_isMatchFound_44sa8_k$ = function () {
    var tmp0_safe_receiver = this.get_internalState_d3bhs8_k$();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_sharedElement_xjw30y_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_foundMatch_g4mbjg_k$();
    return tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
  };
  protoOf(SharedContentState).prepareTransitionWithInitialVelocity_k2t7cz_k$ = function (initialVelocity) {
    // Inline function 'kotlin.let' call
    var it = _get_nonNullInternalState__g66s5n(this);
    // Inline function 'kotlin.with' call
    if (!this.get_config_1xuuqw_k$().get_isEnabled_6836ux_k$(this))
      return Unit_getInstance();
    it.get_sharedElement_xjw30y_k$().updateExitVelocity_u2vwtv_k$(initialVelocity);
  };
  protoOf(SharedContentState).get_clipPathInOverlay_c5z0b7_k$ = function () {
    return _get_nonNullInternalState__g66s5n(this).get_clipPathInOverlay_rtg516_k$();
  };
  protoOf(SharedContentState).get_parentSharedContentState_agqmhc_k$ = function () {
    var tmp0_safe_receiver = _get_nonNullInternalState__g66s5n(this).get_parentState_ui10gu_k$();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_userState_dy2db1_k$();
  };
  protoOf(SharedContentState).set_internalState_a6ckva_k$ = function (_set____db54di) {
    var tmp0 = this.internalState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionScope$SharedContentState$_get_internalState_$ref_b9767j_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('internalState', 1, tmp, tmp_0, SharedTransitionScope$SharedContentState$_set_internalState_$ref_wz02hv_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SharedContentState).get_internalState_d3bhs8_k$ = function () {
    var tmp0 = this.internalState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionScope$SharedContentState$_get_internalState_$ref_b9767j();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('internalState', 1, tmp, tmp_0, SharedTransitionScope$SharedContentState$_set_internalState_$ref_wz02hv());
    return tmp0.get_value_j01efc_k$();
  };
  function SharedContentConfig_0() {
  }
  function SharedTransitionScope$skipToLookaheadSize$lambda(this$0) {
    return function () {
      return this$0.get_isTransitionActive_t69j02_k$();
    };
  }
  function SharedTransitionScope$skipToLookaheadPosition$lambda(this$0) {
    return function () {
      return this$0.get_isTransitionActive_t69j02_k$();
    };
  }
  function SharedTransitionScope$skipToLookaheadPosition$lambda_0(it) {
    return false;
  }
  function SharedTransitionScope$skipToLookaheadPosition$lambda_1($enabled) {
    return function ($this$approachLayout, it) {
      return $enabled();
    };
  }
  function SharedTransitionScope$skipToLookaheadPosition$lambda$lambda($enabled, this$0, $$this$run) {
    return function ($this$layout) {
      var tmp;
      if ($enabled()) {
        var tmp0_safe_receiver = $this$layout.get_coordinates_q6f2pa_k$();
        var tmp_0;
        if (tmp0_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          var target = this$0.localLookaheadPositionOf$default_10xwp7_k$(this$0.get_lookaheadScopeCoordinates_sb7bj3_k$($this$layout), tmp0_safe_receiver);
          var actual = this$0.get_lookaheadScopeCoordinates_sb7bj3_k$($this$layout).localPositionOf$default_f8vt4q_k$(tmp0_safe_receiver);
          var delta = Offset__minus_impl_hoj2c0(target, actual);
          var offset = Offset__minus_impl_hoj2c0(tmp0_safe_receiver.localPositionOf_hrey0l_k$(this$0.get_lookaheadScopeCoordinates_sb7bj3_k$($this$layout), delta), tmp0_safe_receiver.localPositionOf$default_f8vt4q_k$(this$0.get_lookaheadScopeCoordinates_sb7bj3_k$($this$layout)));
          $this$layout.place$default_dbzi3k_k$($$this$run, round(offset));
          tmp_0 = Unit_getInstance();
        }
        var tmp1_elvis_lhs = tmp_0;
        var tmp_1;
        if (tmp1_elvis_lhs == null) {
          $this$layout.place$default_61faqz_k$($$this$run, 0, 0);
          tmp_1 = Unit_getInstance();
        } else {
          tmp_1 = tmp1_elvis_lhs;
        }
        tmp = tmp_1;
      } else {
        $this$layout.place$default_61faqz_k$($$this$run, 0, 0);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SharedTransitionScope$skipToLookaheadPosition$lambda_2($enabled, this$0) {
    return function ($this$approachLayout, m, c) {
      // Inline function 'kotlin.run' call
      var $this$run = m.measure_4dmfk1_k$(c.value_1);
      var tmp = $this$run.get_width_j0q4yl_k$();
      var tmp_0 = $this$run.get_height_e7t92o_k$();
      return $this$approachLayout.layout$default_n19e5l_k$(tmp, tmp_0, VOID, SharedTransitionScope$skipToLookaheadPosition$lambda$lambda($enabled, this$0, $this$run));
    };
  }
  function SharedTransitionScope$renderInSharedTransitionScopeOverlay$lambda(this$0) {
    return function () {
      return this$0.get_isTransitionActive_t69j02_k$();
    };
  }
  function SharedTransitionScope$SharedContentConfig$1($permitTransformDuringDeferredTransition) {
    this.$permitTransformDuringDeferredTransition_1 = $permitTransformDuringDeferredTransition;
  }
  protoOf(SharedTransitionScope$SharedContentConfig$1).get_permitTransformDuringDeferredTransition_6q9ytf_k$ = function () {
    return this.$permitTransformDuringDeferredTransition_1;
  };
  function SharedTransitionScope() {
  }
  function _get_path__dbvv7q($this) {
    return $this.path_1;
  }
  function _set_isTransitionActive__umwr0u($this, _set____db54di) {
    var tmp0 = $this.isTransitionActive$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionScopeImpl$_get_isTransitionActive_$ref_59dojl_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isTransitionActive', 1, tmp, tmp_0, SharedTransitionScopeImpl$_set_isTransitionActive_$ref_rih4z9_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function attachLookaheadAnimationVisualDebugHelper($this) {
    // Inline function 'androidx.compose.animation.isLookaheadAnimationVisualDebuggingEnabled' call
    if (get_isLookaheadAnimationVisualDebuggingEnabledDefault() || get_isLookaheadAnimationVisualDebuggingForceEnabled()) {
      var tmp0_safe_receiver = $this.lookaheadAnimationVisualDebugHelper_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.onAttach_3axsbv_k$($this.coroutineScope_1);
      }
    }
  }
  function detachLookaheadAnimationVisualDebugHelper($this) {
    // Inline function 'androidx.compose.animation.isLookaheadAnimationVisualDebuggingEnabled' call
    if (get_isLookaheadAnimationVisualDebuggingEnabledDefault() || get_isLookaheadAnimationVisualDebuggingForceEnabled()) {
      var tmp0_safe_receiver = $this.lookaheadAnimationVisualDebugHelper_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.onDetach_j79dl3_k$($this.coroutineScope_1);
      }
    }
  }
  function sharedBoundsImpl($this, $receiver, sharedContentState, parentTransition, visible, boundsTransform, placeholderSize, renderOnlyWhenVisible, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) {
    placeholderSize = placeholderSize === VOID ? Companion_getInstance_22().ContentSize_1 : placeholderSize;
    return composed($receiver, VOID, SharedTransitionScopeImpl$sharedBoundsImpl$lambda(sharedContentState, $this, parentTransition, visible, boundsTransform, placeholderSize, renderOnlyWhenVisible, clipInOverlayDuringTransition, zIndexInOverlay, renderInOverlayDuringTransition));
  }
  function rememberSharedElementState($this, sharedElement, boundsAnimation, placeholderSize, renderOnlyWhenVisible, sharedContentState, clipInOverlayDuringTransition, zIndexInOverlay, renderInOverlayDuringTransition, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value = new SharedElementEntry(sharedElement, boundsAnimation, placeholderSize, renderOnlyWhenVisible, clipInOverlayDuringTransition, renderInOverlayDuringTransition, sharedContentState, zIndexInOverlay);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    // Inline function 'kotlin.also' call
    var this_0 = tmp;
    sharedContentState.set_internalState_a6ckva_k$(this_0);
    this_0.set_sharedElement_2xbsqt_k$(sharedElement);
    this_0.set_renderOnlyWhenVisible_f63i0s_k$(renderOnlyWhenVisible);
    this_0.set_boundsAnimation_mkzem3_k$(boundsAnimation);
    this_0.set_placeholderSize_w5vr6v_k$(placeholderSize);
    this_0.set_overlayClip_a8g9zt_k$(clipInOverlayDuringTransition);
    this_0.set_zIndex_58jhbh_k$(zIndexInOverlay);
    this_0.set_renderInOverlayDuringTransition_bhc293_k$(renderInOverlayDuringTransition);
    this_0.set_userState_zl3ka_k$(sharedContentState);
    return this_0;
  }
  function _set_nullableRoot__vzbsx8($this, _set____db54di) {
    $this.nullableRoot_1 = _set____db54di;
  }
  function _set__nullableLookaheadRoot__f966sz($this, _set____db54di) {
    $this._nullableLookaheadRoot_1 = _set____db54di;
  }
  function _get__nullableLookaheadRoot__xiueqh($this) {
    return $this._nullableLookaheadRoot_1;
  }
  function _set_renderersVersion__k7wfu7($this, _set____db54di) {
    var tmp0 = $this.renderersVersion$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionScopeImpl$_get_renderersVersion_$ref_p43edg_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('renderersVersion', 1, tmp, tmp_0, SharedTransitionScopeImpl$_set_renderersVersion_$ref_b60qd4_0());
    tmp0.set_intValue_s3g6dz_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_renderersVersion__lq3d25($this) {
    var tmp0 = $this.renderersVersion$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionScopeImpl$_get_renderersVersion_$ref_p43edg();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('renderersVersion', 1, tmp, tmp_0, SharedTransitionScopeImpl$_set_renderersVersion_$ref_b60qd4());
    return tmp0.get_intValue_mlvnn9_k$();
  }
  function _get_renderers__1vdp6n($this) {
    return $this.renderers_1;
  }
  function _get_sharedElements__kjeuj3($this) {
    return $this.sharedElements_1;
  }
  function _get_sharedElementsIterator__ryogu9($this) {
    return $this.sharedElements_1.toMap_1tsnvl_k$().get_values_ksazhn_k$();
  }
  function sharedElementsFor($this, key) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = $this.sharedElements_1;
    var value = this_0.get_wei43m_k$(key);
    var tmp;
    if (value == null) {
      var answer = new SharedElement(key, $this);
      this_0.put_4fpzoq_k$(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  }
  function _set_lastSortedVersion__c8obnk($this, _set____db54di) {
    $this.lastSortedVersion_1 = _set____db54di;
  }
  function _get_lastSortedVersion__xyh7xw($this) {
    return $this.lastSortedVersion_1;
  }
  function ShapeBasedClip(clipShape) {
    this.clipShape_1 = clipShape;
    this.path_1 = Path();
  }
  protoOf(ShapeBasedClip).get_clipShape_i6onlk_k$ = function () {
    return this.clipShape_1;
  };
  protoOf(ShapeBasedClip).getClipPath_nnv5ej_k$ = function (sharedContentState, bounds, layoutDirection, density) {
    this.path_1.reset_5u6xz3_k$();
    addOutline(this.path_1, this.clipShape_1.createOutline_nnkieo_k$(bounds.get_size_cxx1ym_k$(), layoutDirection, density));
    this.path_1.translate_nzlwb0_k$(bounds.get_topLeft_ypvrd5_k$());
    return this.path_1;
  };
  function SharedTransitionScopeImpl$_get_isTransitionActive_$ref_59dojl() {
    return constructCallableReference(function (p0) {
      return p0.get_isTransitionActive_t69j02_k$();
    }, 1, 0, 'androidx.compose.animation/SharedTransitionScopeImpl.isTransitionActive.<get-isTransitionActive>|<get-isTransitionActive>(){}[0]');
  }
  function SharedTransitionScopeImpl$_set_isTransitionActive_$ref_rih4z9() {
    return constructCallableReference(function (p0, p1) {
      _set_isTransitionActive__umwr0u(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedTransitionScopeImpl.isTransitionActive.<set-isTransitionActive>|<set-isTransitionActive>(kotlin.Boolean){}[0]');
  }
  function SharedTransitionScopeImpl$_get_isTransitionActive_$ref_59dojl_0() {
    return constructCallableReference(function (p0) {
      return p0.get_isTransitionActive_t69j02_k$();
    }, 1, 0, 'androidx.compose.animation/SharedTransitionScopeImpl.isTransitionActive.<get-isTransitionActive>|<get-isTransitionActive>(){}[0]');
  }
  function SharedTransitionScopeImpl$_set_isTransitionActive_$ref_rih4z9_0() {
    return constructCallableReference(function (p0, p1) {
      _set_isTransitionActive__umwr0u(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedTransitionScopeImpl.isTransitionActive.<set-isTransitionActive>|<set-isTransitionActive>(kotlin.Boolean){}[0]');
  }
  function SharedTransitionScopeImpl$sharedElement$lambda(it) {
    return it.equals(EnterExitState_Visible_getInstance());
  }
  function SharedTransitionScopeImpl$sharedBounds$lambda(it) {
    return it.equals(EnterExitState_Visible_getInstance());
  }
  function SharedTransitionScopeImpl$sharedBounds$lambda$lambda($sharedContentState) {
    return function () {
      return $sharedContentState.get_isMatchFound_44sa8_k$();
    };
  }
  function SharedTransitionScopeImpl$sharedBounds$lambda$lambda_0($sharedContentState) {
    return function () {
      return $sharedContentState.get_isMatchFound_44sa8_k$();
    };
  }
  function SharedTransitionScopeImpl$sharedBounds$lambda_0($animatedVisibilityScope, $enter, $exit, $sharedContentState, $resizeMode) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceGroup_5hh8aj_k$(-233734437);
      var tmp = $animatedVisibilityScope.get_transition_mcca1q_k$();
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.changedInstance_s1wkiy_k$($sharedContentState);
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value = SharedTransitionScopeImpl$sharedBounds$lambda$lambda($sharedContentState);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp_2 = createModifier(tmp, $enter, $exit, false, tmp_1, null, 'enter/exit for ' + toString_0($sharedContentState.key_1), $composer_0, 0, 20);
      var tmp_3;
      if ($resizeMode instanceof ScaleToBoundsImpl) {
        $composer_0.startReplaceGroup_5hh8aj_k$(-1039792755);
        var tmp_4 = Companion_getInstance_0();
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = $composer_0.changedInstance_s1wkiy_k$($sharedContentState);
        // Inline function 'kotlin.let' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_5;
        if (invalid_0 || it_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          var value_0 = SharedTransitionScopeImpl$sharedBounds$lambda$lambda_0($sharedContentState);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_5 = value_0;
        } else {
          tmp_5 = it_0;
        }
        var tmp$ret$4 = tmp_5;
        var tmp1_group = createContentScaleModifier(tmp_4, $resizeMode, tmp$ret$4);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_3 = tmp1_group;
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(-1039175545);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_3 = Companion_getInstance_0();
      }
      var tmp0 = tmp_2.then_g5qrxq_k$(tmp_3);
      $composer_0.endReplaceGroup_ek144q_k$();
      return tmp0;
    };
  }
  function SharedTransitionScopeImpl$sharedElementWithCallerManagedVisibility$lambda($visible) {
    return function (it) {
      return $visible;
    };
  }
  function SharedTransitionScopeImpl$sharedBoundsWithCallerManagedVisibility$lambda($visible) {
    return function (it) {
      return $visible;
    };
  }
  function SharedTransitionScopeImpl$observeAnimatingBlock$lambda(this$0) {
    return function () {
      // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.sharedElementsIterator' call
      var tmp0 = this$0.sharedElements_1.toMap_1tsnvl_k$().get_values_ksazhn_k$();
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp;
        if (isInterface(tmp0, Collection)) {
          tmp = tmp0.isEmpty_y1axqb_k$();
        } else {
          tmp = false;
        }
        if (tmp) {
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          if (element.isAnimating_x1kvqk_k$() || element.isMutating_1732dp_k$()) {
            break $l$block_0;
          }
        }
      }
      return Unit_getInstance();
    };
  }
  function SharedTransitionScopeImpl$sharedBoundsImpl$lambda($sharedContentState, this$0, $parentTransition, $visible, $boundsTransform, $placeholderSize, $renderOnlyWhenVisible, $clipInOverlayDuringTransition, $zIndexInOverlay, $renderInOverlayDuringTransition) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceGroup_5hh8aj_k$(-1539505585);
      var key = $sharedContentState.key_1;
      $composer_0.startMovableGroup_clfloq_k$(-1996110647, key);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value = sharedElementsFor(this$0, key);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var sharedElement = tmp;
      $composer_0.startMovableGroup_clfloq_k$(-1996106866, $parentTransition);
      var tmp_0;
      if (!($parentTransition == null)) {
        $composer_0.startReplaceGroup_5hh8aj_k$(-1749734647);
        var tmp0 = $parentTransition;
        // Inline function 'androidx.compose.animation.core.createChildTransition' call
        var label = toString_0(key);
        var $composer_1 = $composer_0;
        if (!((0 & 1) === 0))
          label = 'ChildTransition';
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = (0 & 14 ^ 6) > 4 && $composer_1.changed_ga7h3f_k$(tmp0) || (0 & 6) === 4;
        // Inline function 'kotlin.let' call
        var it_0 = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          var value_0 = tmp0.get_currentState_snihnl_k$();
          $composer_1.updateRememberedValue_l1wh71_k$(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var initialParentState = tmp_1;
        var tmp0_0 = tmp0.get_isSeeking_vjb393_k$() ? tmp0.get_currentState_snihnl_k$() : initialParentState;
        var $composer_2 = $composer_1;
        $composer_0.startReplaceGroup_5hh8aj_k$(1498260051);
        var tmp0_1 = $visible(tmp0_0);
        $composer_0.endReplaceGroup_ek144q_k$();
        var initialState = tmp0_1;
        var tmp0_2 = tmp0.get_targetState_kri3mx_k$();
        var $composer_3 = $composer_1;
        $composer_0.startReplaceGroup_5hh8aj_k$(1498260051);
        var tmp0_3 = $visible(tmp0_2);
        $composer_0.endReplaceGroup_ek144q_k$();
        var targetState = tmp0_3;
        var childTransition = createChildTransitionInternal(tmp0, initialState, targetState, label, $composer_1, 14 & 0 | 7168 & 0 << 6);
        if (!tmp0.get_isSeeking_vjb393_k$()) {
          $composer_1.startReplaceGroup_5hh8aj_k$(782386797);
          var tmp0_safe_receiver = tmp0.get_pendingTargetState_ogufoy_k$();
          var tmp_2;
          if (tmp0_safe_receiver == null) {
            $composer_1.startReplaceGroup_5hh8aj_k$(782437481);
            $composer_1.endReplaceGroup_ek144q_k$();
            tmp_2 = null;
          } else {
            $composer_1.startReplaceGroup_5hh8aj_k$(782437482);
            // Inline function 'kotlin.let' call
            var $composer_4 = $composer_1;
            $composer_0.startReplaceGroup_5hh8aj_k$(1498260051);
            var tmp0_4 = $visible(tmp0_safe_receiver);
            $composer_0.endReplaceGroup_ek144q_k$();
            $composer_1.endReplaceGroup_ek144q_k$();
            tmp_2 = tmp0_4;
          }
          var pendingTargetState = tmp_2;
          childTransition.updatePendingTarget_co8jy3_k$(pendingTargetState);
          $composer_1.endReplaceGroup_ek144q_k$();
        } else {
          $composer_1.startReplaceGroup_5hh8aj_k$(782538635);
          $composer_1.endReplaceGroup_ek144q_k$();
        }
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_0 = childTransition;
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(-1749482679);
        var targetState_0 = (typeof $visible === 'function' ? $visible : THROW_CCE())(Unit_getInstance());
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (false || it_1 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
          var tmp_4;
          if (sharedElement.get_enabledEntries_97jleg_k$().isEmpty_y1axqb_k$()) {
            tmp_4 = targetState_0;
          } else {
            tmp_4 = !targetState_0;
          }
          var initialState_0 = tmp_4;
          var value_1 = new MutableTransitionState(initialState_0);
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_3 = value_1;
        } else {
          tmp_3 = it_1;
        }
        // Inline function 'kotlin.also' call
        var this_0 = tmp_3;
        this_0.set_targetState_1ag6bn_k$(targetState_0);
        var transitionState = this_0;
        var tmp4_group = rememberTransition(transitionState, null, $composer_0, androidx_compose_animation_core_MutableTransitionState$stableprop_getter(), 2);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_0 = tmp4_group;
      }
      var boundsTransition = tmp_0;
      $composer_0.startMovableGroup_clfloq_k$(-1996043323, this$0.get_isTransitionActive_t69j02_k$());
      var tmp_5 = get_VectorConverter_2(Companion_getInstance());
      var tmp5 = createDeferredAnimation(boundsTransition, tmp_5, null, $composer_0, 0, 2);
      $composer_0.endMovableGroup_kd2hcs_k$();
      var animation = tmp5;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_0.changed_ga7h3f_k$(boundsTransition);
      // Inline function 'kotlin.let' call
      var it_2 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_6;
      if (invalid_0 || it_2 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var value_2 = new BoundsAnimation(this$0, boundsTransition, animation, $boundsTransform, sharedElement.get_momentumAnimationOffset_v7y4ra_k$());
        $composer_0.updateRememberedValue_l1wh71_k$(value_2);
        tmp_6 = value_2;
      } else {
        tmp_6 = it_2;
      }
      // Inline function 'kotlin.also' call
      var this_1 = tmp_6;
      this_1.updateAnimation_opighb_k$(animation, $boundsTransform);
      // Inline function 'androidx.compose.animation.sharedTransitionDebug' call
      if (false) {
        var tmp$ret$27 = 'current state:' + (' ' + boundsTransition.get_currentState_snihnl_k$()) + (', target: ' + boundsTransition.get_targetState_kri3mx_k$());
        println('SharedTransition: ' + tmp$ret$27);
      }
      $composer_0.endMovableGroup_kd2hcs_k$();
      var boundsAnimation = this_1;
      var tmp1 = rememberSharedElementState(this$0, sharedElement, boundsAnimation, $placeholderSize, $renderOnlyWhenVisible, $sharedContentState, $clipInOverlayDuringTransition, $zIndexInOverlay, $renderInOverlayDuringTransition, $composer_0, 0);
      $composer_0.endMovableGroup_kd2hcs_k$();
      var sharedElementState = tmp1;
      var tmp0_5 = $this$composed.then_g5qrxq_k$(new SharedBoundsNodeElement(sharedElementState));
      $composer_0.endReplaceGroup_ek144q_k$();
      return tmp0_5;
    };
  }
  function SharedTransitionScopeImpl$_get_renderersVersion_$ref_p43edg() {
    return constructCallableReference(function (p0) {
      return _get_renderersVersion__lq3d25(p0);
    }, 1, 0, 'androidx.compose.animation/SharedTransitionScopeImpl.renderersVersion.<get-renderersVersion>|<get-renderersVersion>(){}[0]');
  }
  function SharedTransitionScopeImpl$_set_renderersVersion_$ref_b60qd4() {
    return constructCallableReference(function (p0, p1) {
      _set_renderersVersion__k7wfu7(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedTransitionScopeImpl.renderersVersion.<set-renderersVersion>|<set-renderersVersion>(kotlin.Int){}[0]');
  }
  function SharedTransitionScopeImpl$_get_renderersVersion_$ref_p43edg_0() {
    return constructCallableReference(function (p0) {
      return _get_renderersVersion__lq3d25(p0);
    }, 1, 0, 'androidx.compose.animation/SharedTransitionScopeImpl.renderersVersion.<get-renderersVersion>|<get-renderersVersion>(){}[0]');
  }
  function SharedTransitionScopeImpl$_set_renderersVersion_$ref_b60qd4_0() {
    return constructCallableReference(function (p0, p1) {
      _set_renderersVersion__k7wfu7(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedTransitionScopeImpl.renderersVersion.<set-renderersVersion>|<set-renderersVersion>(kotlin.Int){}[0]');
  }
  function SharedTransitionScopeImpl$onEntryRemoved$slambda($$this$with, $sharedElementState, resultContinuation) {
    this.$$this$with_1 = $$this$with;
    this.$sharedElementState_1 = $sharedElementState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SharedTransitionScopeImpl$onEntryRemoved$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SharedTransitionScopeImpl$onEntryRemoved$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SharedTransitionScopeImpl$onEntryRemoved$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          if (this.$$this$with_1.get_allEntries_nhmbbc_k$().isEmpty_y1axqb_k$()) {
            if (false) {
              println('SharedTransition: ' + ('key removed. key =' + (' ' + toString_0(this.$sharedElementState_1.get_sharedElement_xjw30y_k$().get_key_18j28a_k$()) + ',') + (' state: ' + toString_0(this.$sharedElementState_1.get_sharedElement_xjw30y_k$().get_state_wrioid_k$()))));
            }
            this.$$this$with_1.get_scope_iyfcq3_k$().sharedElements_1.remove_gppy8k_k$(this.$$this$with_1.get_key_18j28a_k$());
          }
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(SharedTransitionScopeImpl$onEntryRemoved$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new SharedTransitionScopeImpl$onEntryRemoved$slambda(this.$$this$with_1, this.$sharedElementState_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(SharedTransitionScopeImpl$onEntryRemoved$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function SharedTransitionScopeImpl$onEntryRemoved$slambda_0($$this$with, $sharedElementState, resultContinuation) {
    var i = new SharedTransitionScopeImpl$onEntryRemoved$slambda($$this$with, $sharedElementState, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    }, 1);
  }
  function SharedTransitionScopeImpl(lookaheadScope, coroutineScope) {
    this.$$delegate_0__1 = lookaheadScope;
    this.coroutineScope_1 = coroutineScope;
    this.invalidateOverlay_1 = null;
    this.isTransitionActive$delegate_1 = mutableStateOf(false);
    this.lookaheadAnimationVisualDebugHelper_1 = null;
    this.testBlockToRun_1 = null;
    var tmp = this;
    tmp.observeAnimatingBlock_1 = SharedTransitionScopeImpl$observeAnimatingBlock$lambda(this);
    this.nullableRoot_1 = null;
    this._nullableLookaheadRoot_1 = null;
    this.renderersVersion$delegate_1 = mutableIntStateOf(0);
    this.renderers_1 = new MutableObjectList();
    this.sharedElements_1 = mutableStateMapOf();
    this.lastSortedVersion_1 = -1;
  }
  protoOf(SharedTransitionScopeImpl).get_coroutineScope_5k7h45_k$ = function () {
    return this.coroutineScope_1;
  };
  protoOf(SharedTransitionScopeImpl).set_invalidateOverlay_6lw7a5_k$ = function (_set____db54di) {
    this.invalidateOverlay_1 = _set____db54di;
  };
  protoOf(SharedTransitionScopeImpl).get_invalidateOverlay_sqmoz0_k$ = function () {
    return this.invalidateOverlay_1;
  };
  protoOf(SharedTransitionScopeImpl).get_isTransitionActive_t69j02_k$ = function () {
    var tmp0 = this.isTransitionActive$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionScopeImpl$_get_isTransitionActive_$ref_59dojl();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isTransitionActive', 1, tmp, tmp_0, SharedTransitionScopeImpl$_set_isTransitionActive_$ref_rih4z9());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedTransitionScopeImpl).set_lookaheadAnimationVisualDebugHelper_9klnv7_k$ = function (_set____db54di) {
    this.lookaheadAnimationVisualDebugHelper_1 = _set____db54di;
  };
  protoOf(SharedTransitionScopeImpl).get_lookaheadAnimationVisualDebugHelper_v9b7k3_k$ = function () {
    return this.lookaheadAnimationVisualDebugHelper_1;
  };
  protoOf(SharedTransitionScopeImpl).set_testBlockToRun_hi61k9_k$ = function (_set____db54di) {
    this.testBlockToRun_1 = _set____db54di;
  };
  protoOf(SharedTransitionScopeImpl).get_testBlockToRun_sdf6ma_k$ = function () {
    return this.testBlockToRun_1;
  };
  protoOf(SharedTransitionScopeImpl).sharedElementForKey_zcicmg_k$ = function (key) {
    return this.sharedElements_1.get_wei43m_k$(key);
  };
  protoOf(SharedTransitionScopeImpl).skipToLookaheadSize_fy7u2l_k$ = function (_this__u8e3s4, enabled) {
    return _this__u8e3s4.then_g5qrxq_k$(new SkipToLookaheadSizeElement(VOID, enabled));
  };
  protoOf(SharedTransitionScopeImpl).renderInSharedTransitionScopeOverlay_x89i4l_k$ = function (_this__u8e3s4, zIndexInOverlay, renderInOverlay) {
    return _this__u8e3s4.then_g5qrxq_k$(new RenderInTransitionOverlayNodeElement(this, renderInOverlay, zIndexInOverlay));
  };
  protoOf(SharedTransitionScopeImpl).sharedElement_swjtlq_k$ = function (_this__u8e3s4, sharedContentState, animatedVisibilityScope, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) {
    var tmp = animatedVisibilityScope.get_transition_mcca1q_k$();
    return sharedBoundsImpl(this, _this__u8e3s4, sharedContentState, tmp, SharedTransitionScopeImpl$sharedElement$lambda, boundsTransform, placeholderSize, true, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  };
  protoOf(SharedTransitionScopeImpl).sharedBounds_39r956_k$ = function (_this__u8e3s4, sharedContentState, animatedVisibilityScope, enter, exit, boundsTransform, resizeMode, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) {
    var tmp0_parentTransition = animatedVisibilityScope.get_transition_mcca1q_k$();
    var tmp = sharedBoundsImpl(this, _this__u8e3s4, sharedContentState, tmp0_parentTransition, SharedTransitionScopeImpl$sharedBounds$lambda, boundsTransform, placeholderSize, false, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
    return composed(tmp, VOID, SharedTransitionScopeImpl$sharedBounds$lambda_0(animatedVisibilityScope, enter, exit, sharedContentState, resizeMode));
  };
  protoOf(SharedTransitionScopeImpl).sharedElementWithCallerManagedVisibility_lqpqms_k$ = function (_this__u8e3s4, sharedContentState, visible, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) {
    return sharedBoundsImpl(this, _this__u8e3s4, sharedContentState, null, SharedTransitionScopeImpl$sharedElementWithCallerManagedVisibility$lambda(visible), boundsTransform, placeholderSize, true, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  };
  protoOf(SharedTransitionScopeImpl).sharedBoundsWithCallerManagedVisibility_rguvx4_k$ = function (_this__u8e3s4, sharedContentState, visible, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) {
    return sharedBoundsImpl(this, _this__u8e3s4, sharedContentState, null, SharedTransitionScopeImpl$sharedBoundsWithCallerManagedVisibility$lambda(visible), boundsTransform, placeholderSize, false, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  };
  protoOf(SharedTransitionScopeImpl).sharedBoundsWithCallerManagedVisibility$default_megph9_k$ = function (_this__u8e3s4, sharedContentState, visible, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition, $super) {
    boundsTransform = boundsTransform === VOID ? SharedTransitionDefaults_getInstance().BoundsTransform_1 : boundsTransform;
    placeholderSize = placeholderSize === VOID ? Companion_getInstance_22().ContentSize_1 : placeholderSize;
    renderInOverlayDuringTransition = renderInOverlayDuringTransition === VOID ? true : renderInOverlayDuringTransition;
    zIndexInOverlay = zIndexInOverlay === VOID ? 0.0 : zIndexInOverlay;
    clipInOverlayDuringTransition = clipInOverlayDuringTransition === VOID ? get_ParentClip() : clipInOverlayDuringTransition;
    return $super === VOID ? this.sharedBoundsWithCallerManagedVisibility_rguvx4_k$(_this__u8e3s4, sharedContentState, visible, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition) : $super.sharedBoundsWithCallerManagedVisibility_rguvx4_k$.call(this, _this__u8e3s4, sharedContentState, visible, boundsTransform, placeholderSize, renderInOverlayDuringTransition, zIndexInOverlay, clipInOverlayDuringTransition);
  };
  protoOf(SharedTransitionScopeImpl).OverlayClip_rtukmp_k$ = function (clipShape) {
    return new ShapeBasedClip(clipShape);
  };
  protoOf(SharedTransitionScopeImpl).get_observeAnimatingBlock_yc7cr3_k$ = function () {
    return this.observeAnimatingBlock_1;
  };
  protoOf(SharedTransitionScopeImpl).updateTransitionActiveness_isl67c_k$ = function () {
    // Inline function 'androidx.compose.animation.SharedTransitionScopeImpl.sharedElementsIterator' call
    var sharedElements = this.sharedElements_1.toMap_1tsnvl_k$().get_values_ksazhn_k$();
    var isActive = false;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = sharedElements.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      element.updateMatch_oeh0qv_k$();
      isActive = isActive || (element.get_foundMatch_g4mbjg_k$() && (element.isAnimating_x1kvqk_k$() || element.isMutating_1732dp_k$()));
    }
    if (!(isActive === this.get_isTransitionActive_t69j02_k$())) {
      _set_isTransitionActive__umwr0u(this, isActive);
      if (!isActive) {
        attachLookaheadAnimationVisualDebugHelper(this);
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = sharedElements.iterator_jk1svi_k$();
        while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
          var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
          element_0.onSharedTransitionFinished_4wcl9h_k$();
        }
      } else {
        detachLookaheadAnimationVisualDebugHelper(this);
      }
    }
  };
  protoOf(SharedTransitionScopeImpl).set_root_rgs4c_k$ = function (value) {
    this.nullableRoot_1 = value;
  };
  protoOf(SharedTransitionScopeImpl).get_root_4w1woo_k$ = function () {
    var tmp0 = this.nullableRoot_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Error: Uninitialized LayoutCoordinates. Please make sure when using the SharedTransitionScope composable function, the modifier passed to the child content is being used, or use SharedTransitionLayout instead.';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$0;
  };
  protoOf(SharedTransitionScopeImpl).get_nullableRoot_26hlbb_k$ = function () {
    return this.nullableRoot_1;
  };
  protoOf(SharedTransitionScopeImpl).set_lookaheadRoot_54xy3g_k$ = function (value) {
    this._nullableLookaheadRoot_1 = value;
  };
  protoOf(SharedTransitionScopeImpl).get_lookaheadRoot_u3i6mw_k$ = function () {
    var tmp0 = this._nullableLookaheadRoot_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Error: Uninitialized LayoutCoordinates. Please make sure when using the SharedTransitionScope composable function, the modifier passed to the child content is being used, or use SharedTransitionLayout instead.';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$0;
  };
  protoOf(SharedTransitionScopeImpl).zOrderChanged_lnjylf_k$ = function () {
    var _unary__edvuaz = _get_renderersVersion__lq3d25(this);
    _set_renderersVersion__k7wfu7(this, _unary__edvuaz + 1 | 0);
  };
  protoOf(SharedTransitionScopeImpl).drawInOverlay_10iooa_k$ = function (scope, graphicsContext) {
    var version = _get_renderersVersion__lq3d25(this);
    if (!(this.lastSortedVersion_1 === version)) {
      sortWith(this.renderers_1, LayerRendererComparator_getInstance());
      this.lastSortedVersion_1 = version;
    }
    // Inline function 'androidx.collection.ObjectList.forEach' call
    var this_0 = this.renderers_1;
    // Inline function 'kotlin.contracts.contract' call
    var content = this_0.get_content_w2728c_k$();
    var inductionVariable = 0;
    var last = this_0.get__size_vbvbdx_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        content[i].drawInOverlay_a94erc_k$(scope, graphicsContext);
      }
       while (inductionVariable < last);
  };
  protoOf(SharedTransitionScopeImpl).onEntryRemoved_ijc9q5_k$ = function (sharedElementState) {
    // Inline function 'androidx.compose.animation.sharedTransitionDebug' call
    if (false) {
      var tmp$ret$1 = 'entry removed, key: ' + toString_0(sharedElementState.get_sharedElement_xjw30y_k$().get_key_18j28a_k$()) + ',' + (' state: ' + toString_0(sharedElementState.get_sharedElement_xjw30y_k$().get_state_wrioid_k$()));
      println('SharedTransition: ' + tmp$ret$1);
    }
    // Inline function 'kotlin.with' call
    var $this$with = sharedElementState.get_sharedElement_xjw30y_k$();
    $this$with.removeEntry_rdoucb_k$(sharedElementState);
    this.updateTransitionActiveness_isl67c_k$();
    // Inline function 'androidx.collection.MutableObjectList.minusAssign' call
    this.renderers_1.remove_cedx0m_k$(sharedElementState);
    var _unary__edvuaz = _get_renderersVersion__lq3d25(this);
    _set_renderersVersion__k7wfu7(this, _unary__edvuaz + 1 | 0);
    if ($this$with.get_allEntries_nhmbbc_k$().isEmpty_y1axqb_k$()) {
      var tmp = $this$with.get_scope_iyfcq3_k$().coroutineScope_1;
      launch(tmp, VOID, VOID, SharedTransitionScopeImpl$onEntryRemoved$slambda_0($this$with, sharedElementState, null));
    }
  };
  protoOf(SharedTransitionScopeImpl).onEntryAdded_8atu1p_k$ = function (sharedElementState) {
    // Inline function 'kotlin.with' call
    sharedElementState.get_sharedElement_xjw30y_k$().addEntry_5r9v5k_k$(sharedElementState);
    this.updateTransitionActiveness_isl67c_k$();
    var tmp0 = this.renderers_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.collection.ObjectList.indexOfFirst' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = tmp0.get_content_w2728c_k$();
      var inductionVariable = 0;
      var last = tmp0.get__size_vbvbdx_k$();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var it = content[i];
          var tmp0_safe_receiver = it instanceof SharedElementEntry ? it : null;
          if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_sharedElement_xjw30y_k$(), sharedElementState.get_sharedElement_xjw30y_k$())) {
            tmp$ret$2 = i;
            break $l$block;
          }
        }
         while (inductionVariable < last);
      tmp$ret$2 = -1;
    }
    var id = tmp$ret$2;
    if (id === -1 || id >= (this.renderers_1.get_size_woubt6_k$() - 1 | 0)) {
      // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
      this.renderers_1.add_utx5q5_k$(sharedElementState);
    } else {
      this.renderers_1.add_dl6gt3_k$(id + 1 | 0, sharedElementState);
    }
    var _unary__edvuaz = _get_renderersVersion__lq3d25(this);
    _set_renderersVersion__k7wfu7(this, _unary__edvuaz + 1 | 0);
  };
  protoOf(SharedTransitionScopeImpl).onLayerRendererCreated_lwx1jm_k$ = function (renderer) {
    // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
    this.renderers_1.add_utx5q5_k$(renderer);
    var _unary__edvuaz = _get_renderersVersion__lq3d25(this);
    _set_renderersVersion__k7wfu7(this, _unary__edvuaz + 1 | 0);
  };
  protoOf(SharedTransitionScopeImpl).onLayerRendererRemoved_bn3slm_k$ = function (renderer) {
    // Inline function 'androidx.collection.MutableObjectList.minusAssign' call
    this.renderers_1.remove_cedx0m_k$(renderer);
    var _unary__edvuaz = _get_renderersVersion__lq3d25(this);
    _set_renderersVersion__k7wfu7(this, _unary__edvuaz + 1 | 0);
  };
  protoOf(SharedTransitionScopeImpl).toLookaheadCoordinates_1gvv32_k$ = function (_this__u8e3s4) {
    return this.$$delegate_0__1.toLookaheadCoordinates_1gvv32_k$(_this__u8e3s4);
  };
  protoOf(SharedTransitionScopeImpl).localLookaheadPositionOf_b7sqvq_k$ = function (_this__u8e3s4, sourceCoordinates, relativeToSource, includeMotionFrameOfReference) {
    return this.$$delegate_0__1.localLookaheadPositionOf_b7sqvq_k$(_this__u8e3s4, sourceCoordinates, relativeToSource, includeMotionFrameOfReference);
  };
  protoOf(SharedTransitionScopeImpl).get_lookaheadScopeCoordinates_sb7bj3_k$ = function (_this__u8e3s4) {
    return this.$$delegate_0__1.get_lookaheadScopeCoordinates_sb7bj3_k$(_this__u8e3s4);
  };
  function ScaleToBoundsImpl(contentScale, alignment) {
    this.contentScale_1 = contentScale;
    this.alignment_1 = alignment;
  }
  protoOf(ScaleToBoundsImpl).get_contentScale_i3wrkq_k$ = function () {
    return this.contentScale_1;
  };
  protoOf(ScaleToBoundsImpl).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  function RemeasureImpl() {
    RemeasureImpl_instance = this;
  }
  var RemeasureImpl_instance;
  function RemeasureImpl_getInstance() {
    if (RemeasureImpl_instance == null)
      new RemeasureImpl();
    return RemeasureImpl_instance;
  }
  function ScaleToBoundsCached(contentScale, alignment) {
    _init_properties_SharedTransitionScope_kt__irnofc();
    if (get_shouldCache(contentScale) && get_shouldCache_0(alignment)) {
      // Inline function 'androidx.collection.MutableScatterMap.getOrPut' call
      var this_0 = get_cachedScaleToBoundsImplMap();
      var tmp0_elvis_lhs = this_0.get_wei43m_k$(contentScale);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_1 = new MutableScatterMap();
        this_0.set_b9w55f_k$(contentScale, this_1);
        tmp = this_1;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var map = tmp;
      // Inline function 'androidx.collection.MutableScatterMap.getOrPut' call
      var tmp0_elvis_lhs_0 = map.get_wei43m_k$(alignment);
      var tmp_0;
      if (tmp0_elvis_lhs_0 == null) {
        // Inline function 'kotlin.also' call
        var this_2 = new ScaleToBoundsImpl(contentScale, alignment);
        map.set_b9w55f_k$(alignment, this_2);
        tmp_0 = this_2;
      } else {
        tmp_0 = tmp0_elvis_lhs_0;
      }
      return tmp_0;
    } else {
      return new ScaleToBoundsImpl(contentScale, alignment);
    }
  }
  function SharedContentConfig_1() {
    SharedContentConfig_instance = this;
  }
  var SharedContentConfig_instance;
  function SharedContentConfig_getInstance() {
    if (SharedContentConfig_instance == null)
      new SharedContentConfig_1();
    return SharedContentConfig_instance;
  }
  function sam$androidx_compose_animation_BoundsTransform$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_BoundsTransform$0_1).createAnimationSpec_whg8mb_k$ = function (initialBounds, targetBounds) {
    return this.function_1(initialBounds, targetBounds);
  };
  protoOf(sam$androidx_compose_animation_BoundsTransform$0_1).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_BoundsTransform$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, BoundsTransform) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.getFunctionDelegate_jtodtf_k$(), other.getFunctionDelegate_jtodtf_k$());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_compose_animation_BoundsTransform$0_1).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function SharedTransitionDefaults$BoundsTransform$lambda(_unused_var__etf5q3, _unused_var__etf5q3_0) {
    return get_DefaultSpring();
  }
  function SharedTransitionDefaults() {
    SharedTransitionDefaults_instance = this;
    var tmp = this;
    var tmp_0 = SharedTransitionDefaults$BoundsTransform$lambda;
    tmp.BoundsTransform_1 = new sam$androidx_compose_animation_BoundsTransform$0_1(tmp_0);
  }
  protoOf(SharedTransitionDefaults).get_BoundsTransform_ti28r6_k$ = function () {
    return this.BoundsTransform_1;
  };
  var SharedTransitionDefaults_instance;
  function SharedTransitionDefaults_getInstance() {
    if (SharedTransitionDefaults_instance == null)
      new SharedTransitionDefaults();
    return SharedTransitionDefaults_instance;
  }
  function CachedSharedContentConfig() {
    CachedSharedContentConfig_instance = this;
  }
  var CachedSharedContentConfig_instance;
  function CachedSharedContentConfig_getInstance() {
    if (CachedSharedContentConfig_instance == null)
      new CachedSharedContentConfig();
    return CachedSharedContentConfig_instance;
  }
  function sortWith(_this__u8e3s4, comparator) {
    _init_properties_SharedTransitionScope_kt__irnofc();
    var inductionVariable = 1;
    var last = _this__u8e3s4.get_size_woubt6_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var current = _this__u8e3s4.get_c1px32_k$(i);
        var j = i - 1 | 0;
        while (j >= 0 && comparator.compare(_this__u8e3s4.get_c1px32_k$(j), current) > 0) {
          _this__u8e3s4.set_82063s_k$(j + 1 | 0, _this__u8e3s4.get_c1px32_k$(j));
          j = j - 1 | 0;
        }
        _this__u8e3s4.set_82063s_k$(j + 1 | 0, current);
      }
       while (inductionVariable < last);
  }
  function get_shouldCache(_this__u8e3s4) {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return _this__u8e3s4 === Companion_getInstance_18().get_FillWidth_n2o75m_k$() || _this__u8e3s4 === Companion_getInstance_18().get_FillHeight_262ytp_k$() || _this__u8e3s4 === Companion_getInstance_18().get_FillBounds_4umybj_k$() || _this__u8e3s4 === Companion_getInstance_18().get_Fit_18jtko_k$() || _this__u8e3s4 === Companion_getInstance_18().get_Crop_wnzuux_k$() || _this__u8e3s4 === Companion_getInstance_18().get_None_wo6tgh_k$() || _this__u8e3s4 === Companion_getInstance_18().get_Inside_bggkb_k$();
  }
  function get_shouldCache_0(_this__u8e3s4) {
    _init_properties_SharedTransitionScope_kt__irnofc();
    return _this__u8e3s4 === Companion_getInstance_9().get_TopStart_o4x792_k$() || _this__u8e3s4 === Companion_getInstance_9().get_TopCenter_u4q5vl_k$() || _this__u8e3s4 === Companion_getInstance_9().get_TopEnd_4wiiy7_k$() || _this__u8e3s4 === Companion_getInstance_9().get_CenterStart_2305fg_k$() || _this__u8e3s4 === Companion_getInstance_9().get_Center_3arb0i_k$() || _this__u8e3s4 === Companion_getInstance_9().get_CenterEnd_uti4xp_k$() || _this__u8e3s4 === Companion_getInstance_9().get_BottomStart_v81qpa_k$() || _this__u8e3s4 === Companion_getInstance_9().get_BottomCenter_yatb1z_k$() || _this__u8e3s4 === Companion_getInstance_9().get_BottomEnd_ayz0tj_k$();
  }
  function ParentClip$1() {
  }
  protoOf(ParentClip$1).getClipPath_nnv5ej_k$ = function (sharedContentState, bounds, layoutDirection, density) {
    var tmp0_safe_receiver = sharedContentState.get_parentSharedContentState_agqmhc_k$();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_clipPathInOverlay_c5z0b7_k$();
  };
  var properties_initialized_SharedTransitionScope_kt_rkj5u2;
  function _init_properties_SharedTransitionScope_kt__irnofc() {
    if (!properties_initialized_SharedTransitionScope_kt_rkj5u2) {
      properties_initialized_SharedTransitionScope_kt_rkj5u2 = true;
      DefaultSpring = spring(VOID, 400.0, get_VisibilityThreshold(Companion_getInstance()));
      ParentClip = new ParentClip$1();
      cachedScaleToBoundsImplMap = new MutableScatterMap();
      androidx_compose_animation_SharedTransitionScope_SharedContentState$stable = 8;
      androidx_compose_animation_SharedTransitionScopeImpl$stable = 0;
      androidx_compose_animation_ScaleToBoundsImpl$stable = 0;
      androidx_compose_animation_SharedTransitionDefaults_SharedContentConfig$stable = 0;
      androidx_compose_animation_SharedTransitionDefaults$stable = 8;
    }
  }
  var androidx_compose_animation_SharedTransitionStateMachine_State$stable;
  var androidx_compose_animation_SharedTransitionStateMachine$stable;
  var androidx_compose_animation_NoMatchFound$stable;
  var androidx_compose_animation_ActiveMatchFoundConfigPending$stable;
  var androidx_compose_animation_MatchIsOrHasBeenConfigured$stable;
  var androidx_compose_animation_ActiveMatchConfigured$stable;
  var androidx_compose_animation_ActiveMatchRemovedDuringTransition$stable;
  var androidx_compose_animation_TargetData$stable;
  function sharedTransitionDebug(message) {
    if (false) {
      println('SharedTransition: ' + message());
    }
  }
  function State() {
  }
  protoOf(State).get_targetData_c4trx8_k$ = function () {
    return null;
  };
  protoOf(State).get_currentBounds_rrenad_k$ = function () {
    return null;
  };
  protoOf(State).get_activeMatchFound_5y5djo_k$ = function () {
    return false;
  };
  protoOf(State).get_matchIsOrHasBeenConfigured_wqv4it_k$ = function () {
    return false;
  };
  protoOf(State).updateBounds_rr2frf_k$ = function (bounds) {
  };
  protoOf(State).initializeCurrentBounds_wgn9af_k$ = function (sharedElement) {
    return this.get_currentBounds_rrenad_k$();
  };
  protoOf(State).configureActiveMatch_22bsda_k$ = function (sharedElement, targetBoundsProvider, lookaheadSize, topLeft, structuralOffset) {
    // Inline function 'kotlin.error' call
    var message = 'Active match can only be configured in ActiveMatchFoundConfigPending or' + (' ActiveMatchConfigured state. Current state: ' + toString_0(this));
    throw IllegalStateException_init_$Create$(toString_0(message));
  };
  function _set_state__ks53v8($this, _set____db54di) {
    var tmp0 = $this.state$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionStateMachine$_get_state_$ref_lkxq0r_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('state', 1, tmp, tmp_0, SharedTransitionStateMachine$_set_state_$ref_7pwqdt_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_lastHandledRequestId__np5iib($this, _set____db54di) {
    $this.lastHandledRequestId_1 = _set____db54di;
  }
  function _get_lastHandledRequestId__9r2uhz($this) {
    return $this.lastHandledRequestId_1;
  }
  function _set_requestId__kpqe4b($this, _set____db54di) {
    var tmp0 = $this.requestId$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionStateMachine$_get_requestId_$ref_t7ssbi_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('requestId', 1, tmp, tmp_0, SharedTransitionStateMachine$_set_requestId_$ref_e019t6_0());
    tmp0.set_intValue_s3g6dz_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_requestId__l0j7g9($this) {
    var tmp0 = $this.requestId$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionStateMachine$_get_requestId_$ref_t7ssbi();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('requestId', 1, tmp, tmp_0, SharedTransitionStateMachine$_set_requestId_$ref_e019t6());
    return tmp0.get_intValue_mlvnn9_k$();
  }
  function _set_requestToBeHandled__kuu5hk($this, _set____db54di) {
    $this.requestToBeHandled_1 = _set____db54di;
  }
  function _get_requestToBeHandled__d315ms($this) {
    return $this.requestToBeHandled_1;
  }
  function _get_allEntries__82rm4c($this) {
    return $this.sharedElement_1.get_allEntries_nhmbbc_k$();
  }
  function _get_enabledEntries__hv5uqk($this) {
    return $this.sharedElement_1.get_enabledEntries_97jleg_k$();
  }
  function _set_targetBoundsProvider__ob9lds($this, _set____db54di) {
    $this.targetBoundsProvider_1 = _set____db54di;
  }
  function _get_targetBoundsProvider__ad6xdg($this) {
    return $this.targetBoundsProvider_1;
  }
  function _set_targetBoundsProviderUpdateRequestId__f69jd1($this, _set____db54di) {
    var tmp0 = $this.targetBoundsProviderUpdateRequestId$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionStateMachine$_get_targetBoundsProviderUpdateRequestId_$ref_6cqxr6_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('targetBoundsProviderUpdateRequestId', 1, tmp, tmp_0, SharedTransitionStateMachine$_set_targetBoundsProviderUpdateRequestId_$ref_g36506_0());
    tmp0.set_intValue_s3g6dz_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_targetBoundsProviderUpdateRequestId__l423ll($this) {
    var tmp0 = $this.targetBoundsProviderUpdateRequestId$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionStateMachine$_get_targetBoundsProviderUpdateRequestId_$ref_6cqxr6();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('targetBoundsProviderUpdateRequestId', 1, tmp, tmp_0, SharedTransitionStateMachine$_set_targetBoundsProviderUpdateRequestId_$ref_g36506());
    return tmp0.get_intValue_mlvnn9_k$();
  }
  function _set_lastHandledTargetProviderUpdateRequestId__uvzmqm($this, _set____db54di) {
    $this.lastHandledTargetProviderUpdateRequestId_1 = _set____db54di;
  }
  function _get_lastHandledTargetProviderUpdateRequestId__d9clw2($this) {
    return $this.lastHandledTargetProviderUpdateRequestId_1;
  }
  function SharedTransitionStateMachine$_get_state_$ref_lkxq0r() {
    return constructCallableReference(function (p0) {
      return p0.get_state_iypx7s_k$();
    }, 1, 0, 'androidx.compose.animation/SharedTransitionStateMachine.state.<get-state>|<get-state>(){}[0]');
  }
  function SharedTransitionStateMachine$_set_state_$ref_7pwqdt() {
    return constructCallableReference(function (p0, p1) {
      _set_state__ks53v8(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedTransitionStateMachine.state.<set-state>|<set-state>(androidx.compose.animation.SharedTransitionStateMachine.State){}[0]');
  }
  function SharedTransitionStateMachine$_get_state_$ref_lkxq0r_0() {
    return constructCallableReference(function (p0) {
      return p0.get_state_iypx7s_k$();
    }, 1, 0, 'androidx.compose.animation/SharedTransitionStateMachine.state.<get-state>|<get-state>(){}[0]');
  }
  function SharedTransitionStateMachine$_set_state_$ref_7pwqdt_0() {
    return constructCallableReference(function (p0, p1) {
      _set_state__ks53v8(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedTransitionStateMachine.state.<set-state>|<set-state>(androidx.compose.animation.SharedTransitionStateMachine.State){}[0]');
  }
  function SharedTransitionStateMachine$_get_requestId_$ref_t7ssbi() {
    return constructCallableReference(function (p0) {
      return _get_requestId__l0j7g9(p0);
    }, 1, 0, 'androidx.compose.animation/SharedTransitionStateMachine.requestId.<get-requestId>|<get-requestId>(){}[0]');
  }
  function SharedTransitionStateMachine$_set_requestId_$ref_e019t6() {
    return constructCallableReference(function (p0, p1) {
      _set_requestId__kpqe4b(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedTransitionStateMachine.requestId.<set-requestId>|<set-requestId>(kotlin.Int){}[0]');
  }
  function SharedTransitionStateMachine$_get_requestId_$ref_t7ssbi_0() {
    return constructCallableReference(function (p0) {
      return _get_requestId__l0j7g9(p0);
    }, 1, 0, 'androidx.compose.animation/SharedTransitionStateMachine.requestId.<get-requestId>|<get-requestId>(){}[0]');
  }
  function SharedTransitionStateMachine$_set_requestId_$ref_e019t6_0() {
    return constructCallableReference(function (p0, p1) {
      _set_requestId__kpqe4b(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedTransitionStateMachine.requestId.<set-requestId>|<set-requestId>(kotlin.Int){}[0]');
  }
  function SharedTransitionStateMachine$_get_targetBoundsProviderUpdateRequestId_$ref_6cqxr6() {
    return constructCallableReference(function (p0) {
      return _get_targetBoundsProviderUpdateRequestId__l423ll(p0);
    }, 1, 0, 'androidx.compose.animation/SharedTransitionStateMachine.targetBoundsProviderUpdateRequestId.<get-targetBoundsProviderUpdateRequestId>|<get-targetBoundsProviderUpdateRequestId>(){}[0]');
  }
  function SharedTransitionStateMachine$_set_targetBoundsProviderUpdateRequestId_$ref_g36506() {
    return constructCallableReference(function (p0, p1) {
      _set_targetBoundsProviderUpdateRequestId__f69jd1(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedTransitionStateMachine.targetBoundsProviderUpdateRequestId.<set-targetBoundsProviderUpdateRequestId>|<set-targetBoundsProviderUpdateRequestId>(kotlin.Int){}[0]');
  }
  function SharedTransitionStateMachine$_get_targetBoundsProviderUpdateRequestId_$ref_6cqxr6_0() {
    return constructCallableReference(function (p0) {
      return _get_targetBoundsProviderUpdateRequestId__l423ll(p0);
    }, 1, 0, 'androidx.compose.animation/SharedTransitionStateMachine.targetBoundsProviderUpdateRequestId.<get-targetBoundsProviderUpdateRequestId>|<get-targetBoundsProviderUpdateRequestId>(){}[0]');
  }
  function SharedTransitionStateMachine$_set_targetBoundsProviderUpdateRequestId_$ref_g36506_0() {
    return constructCallableReference(function (p0, p1) {
      _set_targetBoundsProviderUpdateRequestId__f69jd1(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SharedTransitionStateMachine.targetBoundsProviderUpdateRequestId.<set-targetBoundsProviderUpdateRequestId>|<set-targetBoundsProviderUpdateRequestId>(kotlin.Int){}[0]');
  }
  function SharedTransitionStateMachine(sharedElement) {
    this.sharedElement_1 = sharedElement;
    this.state$delegate_1 = mutableStateOf(NoMatchFound_getInstance());
    this.lastHandledRequestId_1 = 0;
    this.requestId$delegate_1 = mutableIntStateOf(0);
    this.requestToBeHandled_1 = StateChangeRequest_NoRequest_getInstance();
    this.targetBoundsProvider_1 = null;
    this.targetBoundsProviderUpdateRequestId$delegate_1 = mutableIntStateOf(0);
    this.lastHandledTargetProviderUpdateRequestId_1 = 0;
  }
  protoOf(SharedTransitionStateMachine).get_sharedElement_xjw30y_k$ = function () {
    return this.sharedElement_1;
  };
  protoOf(SharedTransitionStateMachine).get_activeMatchDeferred_90t7ud_k$ = function () {
    return this.requestToBeHandled_1.equals(StateChangeRequest_MatchFound_getInstance());
  };
  protoOf(SharedTransitionStateMachine).get_state_iypx7s_k$ = function () {
    var tmp0 = this.state$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SharedTransitionStateMachine$_get_state_$ref_lkxq0r();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('state', 1, tmp, tmp_0, SharedTransitionStateMachine$_set_state_$ref_7pwqdt());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SharedTransitionStateMachine).resetState_9cgocu_k$ = function () {
    // Inline function 'androidx.compose.animation.sharedTransitionDebug' call
    if (false) {
      var tmp$ret$1 = 'StateMachine, reset state machine to NoMatchFound';
      println('SharedTransition: ' + tmp$ret$1);
    }
    this.requestToBeHandled_1 = StateChangeRequest_NoRequest_getInstance();
    this.lastHandledRequestId_1 = _get_requestId__l0j7g9(this);
    _set_state__ks53v8(this, NoMatchFound_getInstance());
  };
  protoOf(SharedTransitionStateMachine).deferRequest_mlopmx_k$ = function (request) {
    // Inline function 'androidx.compose.animation.sharedTransitionDebug' call
    if (false) {
      var tmp$ret$1 = 'StateMachine: new request posted: ' + request.toString() + ' for current state: ' + toString_0(this.get_state_iypx7s_k$());
      println('SharedTransition: ' + tmp$ret$1);
    }
    this.requestToBeHandled_1 = request;
    _set_requestId__kpqe4b(this, this.lastHandledRequestId_1 + 1 | 0);
  };
  protoOf(SharedTransitionStateMachine).processPendingRequest_ehf2h_k$ = function () {
    if (!(_get_requestId__l0j7g9(this) === this.lastHandledRequestId_1)) {
      // Inline function 'androidx.compose.animation.sharedTransitionDebug' call
      if (false) {
        var tmp$ret$1 = 'StateMachine: handle request: ' + this.requestToBeHandled_1.toString();
        println('SharedTransition: ' + tmp$ret$1);
      }
      this.lastHandledRequestId_1 = _get_requestId__l0j7g9(this);
      var tmp;
      switch (this.requestToBeHandled_1.get_ordinal_ip24qg_k$()) {
        case 3:
          tmp = NoMatchFound_getInstance();
          break;
        case 0:
          tmp = this.get_state_iypx7s_k$();
          break;
        case 1:
          tmp = this.get_state_iypx7s_k$().onMatchFound_dz6d1_k$(this.targetBoundsProvider_1);
          break;
        case 2:
          var tmp_0;
          var tmp0 = _get_enabledEntries__hv5uqk(this);
          var tmp$ret$2;
          $l$block: {
            // Inline function 'androidx.compose.ui.util.fastAny' call
            // Inline function 'androidx.compose.ui.util.fastForEach' call
            var inductionVariable = 0;
            var last = tmp0.get_size_woubt6_k$() - 1 | 0;
            if (inductionVariable <= last)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var item = tmp0.get_c1px32_k$(index);
                if (equals(item.get_boundsProvider_o6pxkh_k$(), this.targetBoundsProvider_1)) {
                  tmp$ret$2 = true;
                  break $l$block;
                }
              }
               while (inductionVariable <= last);
            tmp$ret$2 = false;
          }

          if (tmp$ret$2) {
            tmp_0 = NoMatchFound_getInstance();
          } else {
            tmp_0 = this.get_state_iypx7s_k$().onVisibleContentRemovedDuringTransition_ceetlc_k$();
          }

          tmp = tmp_0;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      _set_state__ks53v8(this, tmp);
      this.requestToBeHandled_1 = StateChangeRequest_NoRequest_getInstance();
    }
    this.updateTargetBoundsProvider_2flfc3_k$();
  };
  protoOf(SharedTransitionStateMachine).checkForAndDeferStateUpdates_dprwzk_k$ = function (hasVisibleContent) {
    if (_get_enabledEntries__hv5uqk(this).get_size_woubt6_k$() > 1 && hasVisibleContent) {
      this.deferRequest_mlopmx_k$(StateChangeRequest_MatchFound_getInstance());
    } else if (this.sharedElement_1.get_scope_iyfcq3_k$().get_isTransitionActive_t69j02_k$()) {
      if (!hasVisibleContent) {
        this.deferRequest_mlopmx_k$(StateChangeRequest_VisibleContentAbsentDuringTransition_getInstance());
      }
    } else {
      this.resetState_9cgocu_k$();
    }
    this.invalidateTargetBoundsProvider_wcz26a_k$();
  };
  protoOf(SharedTransitionStateMachine).invalidateTargetBoundsProvider_wcz26a_k$ = function () {
    var tmp0 = _get_enabledEntries__hv5uqk(this);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0.get_c1px32_k$(index);
          if (item.get_target_juba8q_k$()) {
            tmp$ret$0 = item;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$0 = null;
    }
    var target = tmp$ret$0;
    if (target == null && this.targetBoundsProvider_1 == null)
      return Unit_getInstance();
    if (equals(target == null ? null : target.get_boundsProvider_o6pxkh_k$(), this.targetBoundsProvider_1))
      return Unit_getInstance();
    _set_targetBoundsProviderUpdateRequestId__f69jd1(this, this.lastHandledTargetProviderUpdateRequestId_1 + 1 | 0);
  };
  protoOf(SharedTransitionStateMachine).updateTargetBoundsProvider_2flfc3_k$ = function () {
    if (!(_get_targetBoundsProviderUpdateRequestId__l423ll(this) === this.lastHandledTargetProviderUpdateRequestId_1)) {
      var tmp;
      if (this.sharedElement_1.get_scope_iyfcq3_k$().get_isTransitionActive_t69j02_k$()) {
        var tmp0 = _get_enabledEntries__hv5uqk(this);
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
          // Inline function 'androidx.compose.ui.util.fastForEach' call
          var inductionVariable = 0;
          var last = tmp0.get_size_woubt6_k$() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0.get_c1px32_k$(index);
              if (item.get_target_juba8q_k$()) {
                tmp$ret$0 = item;
                break $l$block;
              }
            }
             while (inductionVariable <= last);
          tmp$ret$0 = null;
        }
        var tmp0_safe_receiver = tmp$ret$0;
        tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_boundsProvider_o6pxkh_k$();
      } else {
        var tmp0_0 = _get_allEntries__82rm4c(this);
        var tmp$ret$4;
        $l$block_0: {
          // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
          // Inline function 'androidx.compose.ui.util.fastForEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp0_0.get_size_woubt6_k$() - 1 | 0;
          if (inductionVariable_0 <= last_0)
            do {
              var index_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var item_0 = tmp0_0.get_c1px32_k$(index_0);
              if (item_0.get_target_juba8q_k$()) {
                tmp$ret$4 = item_0;
                break $l$block_0;
              }
            }
             while (inductionVariable_0 <= last_0);
          tmp$ret$4 = null;
        }
        var tmp1_safe_receiver = tmp$ret$4;
        tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_boundsProvider_o6pxkh_k$();
      }
      var newTargetBoundsProvider = tmp;
      if (!equals(newTargetBoundsProvider, this.targetBoundsProvider_1)) {
        this.targetBoundsProvider_1 = newTargetBoundsProvider;
      }
      this.lastHandledTargetProviderUpdateRequestId_1 = _get_targetBoundsProviderUpdateRequestId__l423ll(this);
    }
  };
  protoOf(SharedTransitionStateMachine).tryInitializingCurrentBounds_hhp1hi_k$ = function () {
    this.processPendingRequest_ehf2h_k$();
    // Inline function 'kotlin.also' call
    var this_0 = this.get_state_iypx7s_k$().initializeCurrentBounds_wgn9af_k$(this.sharedElement_1);
    // Inline function 'androidx.compose.animation.sharedTransitionDebug' call
    if (false) {
      var tmp$ret$3 = 'try initializing current bounds. state = ' + toString_0(this.get_state_iypx7s_k$()) + ', key =' + (' ' + toString_0(this.sharedElement_1.get_key_18j28a_k$()) + '. Current bounds: ' + toString(this_0));
      println('SharedTransition: ' + tmp$ret$3);
    }
    return this_0;
  };
  protoOf(SharedTransitionStateMachine).configureActiveMatch_bn4iml_k$ = function (lookaheadSize, topLeft, structuralOffset) {
    _set_state__ks53v8(this, this.get_state_iypx7s_k$().configureActiveMatch_22bsda_k$(this.sharedElement_1, ensureNotNull(this.targetBoundsProvider_1), lookaheadSize, topLeft, structuralOffset));
  };
  function TargetData$_get_size_$ref_cdnorm() {
    return constructCallableReference(function (p0) {
      return new Size(p0.get_size_cxx1ym_k$());
    }, 1, 0, 'androidx.compose.animation/TargetData.size.<get-size>|<get-size>(){}[0]');
  }
  function TargetData$_set_size_$ref_p6k08e() {
    return constructCallableReference(function (p0, p1) {
      p0.set_size_6a0e6q_k$(p1.packedValue_1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/TargetData.size.<set-size>|<set-size>(androidx.compose.ui.geometry.Size){}[0]');
  }
  function TargetData$_get_size_$ref_cdnorm_0() {
    return constructCallableReference(function (p0) {
      return new Size(p0.get_size_cxx1ym_k$());
    }, 1, 0, 'androidx.compose.animation/TargetData.size.<get-size>|<get-size>(){}[0]');
  }
  function TargetData$_set_size_$ref_p6k08e_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_size_6a0e6q_k$(p1.packedValue_1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/TargetData.size.<set-size>|<set-size>(androidx.compose.ui.geometry.Size){}[0]');
  }
  function TargetData$_get_initialMfrOffset_$ref_3i9w1n() {
    return constructCallableReference(function (p0) {
      return new Offset(p0.get_initialMfrOffset_6o7ny1_k$());
    }, 1, 0, 'androidx.compose.animation/TargetData.initialMfrOffset.<get-initialMfrOffset>|<get-initialMfrOffset>(){}[0]');
  }
  function TargetData$_set_initialMfrOffset_$ref_hgck1z() {
    return constructCallableReference(function (p0, p1) {
      p0.set_initialMfrOffset_zdul1n_k$(p1.packedValue_1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/TargetData.initialMfrOffset.<set-initialMfrOffset>|<set-initialMfrOffset>(androidx.compose.ui.geometry.Offset){}[0]');
  }
  function TargetData$_get_initialMfrOffset_$ref_3i9w1n_0() {
    return constructCallableReference(function (p0) {
      return new Offset(p0.get_initialMfrOffset_6o7ny1_k$());
    }, 1, 0, 'androidx.compose.animation/TargetData.initialMfrOffset.<get-initialMfrOffset>|<get-initialMfrOffset>(){}[0]');
  }
  function TargetData$_set_initialMfrOffset_$ref_hgck1z_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_initialMfrOffset_zdul1n_k$(p1.packedValue_1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/TargetData.initialMfrOffset.<set-initialMfrOffset>|<set-initialMfrOffset>(androidx.compose.ui.geometry.Offset){}[0]');
  }
  function TargetData$_get_targetStructuralOffset_$ref_w67msi() {
    return constructCallableReference(function (p0) {
      return new Offset(p0.get_targetStructuralOffset_diba68_k$());
    }, 1, 0, 'androidx.compose.animation/TargetData.targetStructuralOffset.<get-targetStructuralOffset>|<get-targetStructuralOffset>(){}[0]');
  }
  function TargetData$_set_targetStructuralOffset_$ref_urdwdq() {
    return constructCallableReference(function (p0, p1) {
      p0.set_targetStructuralOffset_prn3mk_k$(p1.packedValue_1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/TargetData.targetStructuralOffset.<set-targetStructuralOffset>|<set-targetStructuralOffset>(androidx.compose.ui.geometry.Offset){}[0]');
  }
  function TargetData$_get_targetStructuralOffset_$ref_w67msi_0() {
    return constructCallableReference(function (p0) {
      return new Offset(p0.get_targetStructuralOffset_diba68_k$());
    }, 1, 0, 'androidx.compose.animation/TargetData.targetStructuralOffset.<get-targetStructuralOffset>|<get-targetStructuralOffset>(){}[0]');
  }
  function TargetData$_set_targetStructuralOffset_$ref_urdwdq_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_targetStructuralOffset_prn3mk_k$(p1.packedValue_1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/TargetData.targetStructuralOffset.<set-targetStructuralOffset>|<set-targetStructuralOffset>(androidx.compose.ui.geometry.Offset){}[0]');
  }
  function TargetData$_get_currentMfrOffset_$ref_f9yhhs() {
    return constructCallableReference(function (p0) {
      return new Offset(p0.get_currentMfrOffset_68hisy_k$());
    }, 1, 0, 'androidx.compose.animation/TargetData.currentMfrOffset.<get-currentMfrOffset>|<get-currentMfrOffset>(){}[0]');
  }
  function TargetData$_set_currentMfrOffset_$ref_1bvthg() {
    return constructCallableReference(function (p0, p1) {
      p0.set_currentMfrOffset_k9brqi_k$(p1.packedValue_1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/TargetData.currentMfrOffset.<set-currentMfrOffset>|<set-currentMfrOffset>(androidx.compose.ui.geometry.Offset){}[0]');
  }
  function TargetData$_get_currentMfrOffset_$ref_f9yhhs_0() {
    return constructCallableReference(function (p0) {
      return new Offset(p0.get_currentMfrOffset_68hisy_k$());
    }, 1, 0, 'androidx.compose.animation/TargetData.currentMfrOffset.<get-currentMfrOffset>|<get-currentMfrOffset>(){}[0]');
  }
  function TargetData$_set_currentMfrOffset_$ref_1bvthg_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_currentMfrOffset_k9brqi_k$(p1.packedValue_1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/TargetData.currentMfrOffset.<set-currentMfrOffset>|<set-currentMfrOffset>(androidx.compose.ui.geometry.Offset){}[0]');
  }
  function TargetData(size, initialMfrOffset, targetStructuralOffset) {
    this.size$delegate_1 = mutableStateOf(new Size(size));
    this.initialMfrOffset$delegate_1 = mutableStateOf(new Offset(initialMfrOffset));
    this.targetStructuralOffset$delegate_1 = mutableStateOf(new Offset(targetStructuralOffset));
    this.currentMfrOffset$delegate_1 = mutableStateOf(new Offset(initialMfrOffset));
  }
  protoOf(TargetData).set_size_6a0e6q_k$ = function (_set____db54di) {
    var tmp0 = this.size$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_size_$ref_cdnorm_0();
    getPropertyCallableRef('size', 1, tmp, tmp_0, TargetData$_set_size_$ref_p6k08e_0());
    // Inline function 'androidx.compose.runtime.setValue' call
    var value = new Size(_set____db54di);
    tmp0.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  };
  protoOf(TargetData).get_size_cxx1ym_k$ = function () {
    var tmp0 = this.size$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_size_$ref_cdnorm();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('size', 1, tmp, tmp_0, TargetData$_set_size_$ref_p6k08e());
    return tmp0.get_value_j01efc_k$().packedValue_1;
  };
  protoOf(TargetData).set_initialMfrOffset_zdul1n_k$ = function (_set____db54di) {
    var tmp0 = this.initialMfrOffset$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_initialMfrOffset_$ref_3i9w1n_0();
    getPropertyCallableRef('initialMfrOffset', 1, tmp, tmp_0, TargetData$_set_initialMfrOffset_$ref_hgck1z_0());
    // Inline function 'androidx.compose.runtime.setValue' call
    var value = new Offset(_set____db54di);
    tmp0.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  };
  protoOf(TargetData).get_initialMfrOffset_6o7ny1_k$ = function () {
    var tmp0 = this.initialMfrOffset$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_initialMfrOffset_$ref_3i9w1n();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('initialMfrOffset', 1, tmp, tmp_0, TargetData$_set_initialMfrOffset_$ref_hgck1z());
    return tmp0.get_value_j01efc_k$().packedValue_1;
  };
  protoOf(TargetData).set_targetStructuralOffset_prn3mk_k$ = function (_set____db54di) {
    var tmp0 = this.targetStructuralOffset$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_targetStructuralOffset_$ref_w67msi_0();
    getPropertyCallableRef('targetStructuralOffset', 1, tmp, tmp_0, TargetData$_set_targetStructuralOffset_$ref_urdwdq_0());
    // Inline function 'androidx.compose.runtime.setValue' call
    var value = new Offset(_set____db54di);
    tmp0.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  };
  protoOf(TargetData).get_targetStructuralOffset_diba68_k$ = function () {
    var tmp0 = this.targetStructuralOffset$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_targetStructuralOffset_$ref_w67msi();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('targetStructuralOffset', 1, tmp, tmp_0, TargetData$_set_targetStructuralOffset_$ref_urdwdq());
    return tmp0.get_value_j01efc_k$().packedValue_1;
  };
  protoOf(TargetData).set_currentMfrOffset_k9brqi_k$ = function (_set____db54di) {
    var tmp0 = this.currentMfrOffset$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_currentMfrOffset_$ref_f9yhhs_0();
    getPropertyCallableRef('currentMfrOffset', 1, tmp, tmp_0, TargetData$_set_currentMfrOffset_$ref_1bvthg_0());
    // Inline function 'androidx.compose.runtime.setValue' call
    var value = new Offset(_set____db54di);
    tmp0.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  };
  protoOf(TargetData).get_currentMfrOffset_68hisy_k$ = function () {
    var tmp0 = this.currentMfrOffset$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TargetData$_get_currentMfrOffset_$ref_f9yhhs();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('currentMfrOffset', 1, tmp, tmp_0, TargetData$_set_currentMfrOffset_$ref_1bvthg());
    return tmp0.get_value_j01efc_k$().packedValue_1;
  };
  var static_init_called_0;
  function static_init_0() {
    if (static_init_called_0)
      return Unit_getInstance();
    static_init_called_0 = true;
    StateChangeRequest_NoRequest_instance = new StateChangeRequest('NoRequest', 0);
    StateChangeRequest_MatchFound_instance = new StateChangeRequest('MatchFound', 1);
    StateChangeRequest_VisibleContentAbsentDuringTransition_instance = new StateChangeRequest('VisibleContentAbsentDuringTransition', 2);
    StateChangeRequest_NoMatchFound_instance = new StateChangeRequest('NoMatchFound', 3);
  }
  var StateChangeRequest_NoRequest_instance;
  var StateChangeRequest_MatchFound_instance;
  var StateChangeRequest_VisibleContentAbsentDuringTransition_instance;
  var StateChangeRequest_NoMatchFound_instance;
  function values_0() {
    static_init_0();
    return [StateChangeRequest_NoRequest_getInstance(), StateChangeRequest_MatchFound_getInstance(), StateChangeRequest_VisibleContentAbsentDuringTransition_getInstance(), StateChangeRequest_NoMatchFound_getInstance()];
  }
  function valueOf_0(value) {
    static_init_0();
    switch (value) {
      case 'NoRequest':
        return StateChangeRequest_NoRequest_getInstance();
      case 'MatchFound':
        return StateChangeRequest_MatchFound_getInstance();
      case 'VisibleContentAbsentDuringTransition':
        return StateChangeRequest_VisibleContentAbsentDuringTransition_getInstance();
      case 'NoMatchFound':
        return StateChangeRequest_NoMatchFound_getInstance();
      default:
        THROW_IAE('No enum constant androidx.compose.animation.StateChangeRequest.' + value);
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
  function StateChangeRequest(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function NoMatchFound() {
    NoMatchFound_instance = this;
    State.call(this);
  }
  protoOf(NoMatchFound).onMatchFound_dz6d1_k$ = function (previousTargetBoundsProvider) {
    // Inline function 'androidx.compose.animation.sharedTransitionDebug' call
    if (false) {
      var tmp$ret$1 = 'StateMachine: Transitioning from NoMatch to ActiveMatchPending,' + (' previous target bounds provider: ' + toString(previousTargetBoundsProvider));
      println('SharedTransition: ' + tmp$ret$1);
    }
    return new ActiveMatchFoundConfigPending(previousTargetBoundsProvider);
  };
  protoOf(NoMatchFound).onVisibleContentRemovedDuringTransition_ceetlc_k$ = function () {
    return this;
  };
  var NoMatchFound_instance;
  function NoMatchFound_getInstance() {
    if (NoMatchFound_instance == null)
      new NoMatchFound();
    return NoMatchFound_instance;
  }
  function _set_currentBounds__186mx5($this, _set____db54di) {
    var tmp0 = $this.currentBounds$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = ActiveMatchFoundConfigPending$_get_currentBounds_$ref_ygzd34_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('currentBounds', 1, tmp, tmp_0, ActiveMatchFoundConfigPending$_set_currentBounds_$ref_cr6gss_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ActiveMatchFoundConfigPending$_get_currentBounds_$ref_ygzd34() {
    return constructCallableReference(function (p0) {
      return p0.get_currentBounds_rrenad_k$();
    }, 1, 0, 'androidx.compose.animation/ActiveMatchFoundConfigPending.currentBounds.<get-currentBounds>|<get-currentBounds>(){}[0]');
  }
  function ActiveMatchFoundConfigPending$_set_currentBounds_$ref_cr6gss() {
    return constructCallableReference(function (p0, p1) {
      _set_currentBounds__186mx5(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/ActiveMatchFoundConfigPending.currentBounds.<set-currentBounds>|<set-currentBounds>(androidx.compose.ui.geometry.Rect?){}[0]');
  }
  function ActiveMatchFoundConfigPending$_get_currentBounds_$ref_ygzd34_0() {
    return constructCallableReference(function (p0) {
      return p0.get_currentBounds_rrenad_k$();
    }, 1, 0, 'androidx.compose.animation/ActiveMatchFoundConfigPending.currentBounds.<get-currentBounds>|<get-currentBounds>(){}[0]');
  }
  function ActiveMatchFoundConfigPending$_set_currentBounds_$ref_cr6gss_0() {
    return constructCallableReference(function (p0, p1) {
      _set_currentBounds__186mx5(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/ActiveMatchFoundConfigPending.currentBounds.<set-currentBounds>|<set-currentBounds>(androidx.compose.ui.geometry.Rect?){}[0]');
  }
  function ActiveMatchFoundConfigPending(targetBoundsProviderBeforeConfig, targetData, currentBounds) {
    targetData = targetData === VOID ? null : targetData;
    currentBounds = currentBounds === VOID ? null : currentBounds;
    State.call(this);
    this.targetBoundsProviderBeforeConfig_1 = targetBoundsProviderBeforeConfig;
    this.targetData_1 = targetData;
    this.currentBounds$delegate_1 = mutableStateOf(currentBounds);
  }
  protoOf(ActiveMatchFoundConfigPending).set_targetBoundsProviderBeforeConfig_7jrq8u_k$ = function (_set____db54di) {
    this.targetBoundsProviderBeforeConfig_1 = _set____db54di;
  };
  protoOf(ActiveMatchFoundConfigPending).get_targetBoundsProviderBeforeConfig_rtdkqn_k$ = function () {
    return this.targetBoundsProviderBeforeConfig_1;
  };
  protoOf(ActiveMatchFoundConfigPending).get_targetData_c4trx8_k$ = function () {
    return this.targetData_1;
  };
  protoOf(ActiveMatchFoundConfigPending).get_activeMatchFound_5y5djo_k$ = function () {
    return true;
  };
  protoOf(ActiveMatchFoundConfigPending).get_currentBounds_rrenad_k$ = function () {
    var tmp0 = this.currentBounds$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = ActiveMatchFoundConfigPending$_get_currentBounds_$ref_ygzd34();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('currentBounds', 1, tmp, tmp_0, ActiveMatchFoundConfigPending$_set_currentBounds_$ref_cr6gss());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(ActiveMatchFoundConfigPending).initializeCurrentBounds_wgn9af_k$ = function (sharedElement) {
    var bounds = this.get_currentBounds_rrenad_k$();
    if (!(bounds == null))
      return bounds;
    if (this.get_currentBounds_rrenad_k$() == null) {
      var tmp0_elvis_lhs = this.targetBoundsProviderBeforeConfig_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        var tmp0 = sharedElement.get_allEntries_nhmbbc_k$();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
          // Inline function 'androidx.compose.ui.util.fastForEach' call
          var inductionVariable = 0;
          var last = tmp0.get_size_woubt6_k$() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0.get_c1px32_k$(index);
              if (sharedElement.get_enabledEntries_97jleg_k$().contains_aljjnj_k$(item)) {
                tmp$ret$0 = item;
                break $l$block;
              }
            }
             while (inductionVariable <= last);
          tmp$ret$0 = null;
        }
        var tmp1_safe_receiver = tmp$ret$0;
        tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_boundsProvider_o6pxkh_k$();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var lastTarget = tmp;
      var tmp2_safe_receiver = obtainBoundsFromLastTarget(sharedElement, lastTarget);
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        _set_currentBounds__186mx5(this, tmp2_safe_receiver);
      }
    }
    return this.get_currentBounds_rrenad_k$();
  };
  protoOf(ActiveMatchFoundConfigPending).configureActiveMatch_22bsda_k$ = function (sharedElement, targetBoundsProvider, lookaheadSize, topLeft, structuralOffset) {
    var tmp0_elvis_lhs = this.targetData_1;
    var targetData = tmp0_elvis_lhs == null ? new TargetData(lookaheadSize, Offset__minus_impl_hoj2c0(topLeft, structuralOffset), structuralOffset) : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = this.get_currentBounds_rrenad_k$();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp2_elvis_lhs = this.targetBoundsProviderBeforeConfig_1;
      var tmp_0;
      if (tmp2_elvis_lhs == null) {
        var tmp0 = sharedElement.get_allEntries_nhmbbc_k$();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
          // Inline function 'androidx.compose.ui.util.fastForEach' call
          var inductionVariable = 0;
          var last = tmp0.get_size_woubt6_k$() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0.get_c1px32_k$(index);
              if (sharedElement.get_enabledEntries_97jleg_k$().contains_aljjnj_k$(item)) {
                tmp$ret$0 = item;
                break $l$block;
              }
            }
             while (inductionVariable <= last);
          tmp$ret$0 = null;
        }
        var tmp3_safe_receiver = tmp$ret$0;
        tmp_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.get_boundsProvider_o6pxkh_k$();
      } else {
        tmp_0 = tmp2_elvis_lhs;
      }
      tmp = obtainBoundsFromLastTarget(sharedElement, tmp_0);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var tmp4_elvis_lhs = tmp;
    var currentBounds = tmp4_elvis_lhs == null ? Rect_1(topLeft, lookaheadSize) : tmp4_elvis_lhs;
    updateTargetData(targetData, lookaheadSize, topLeft, structuralOffset, true);
    return new ActiveMatchConfigured(targetData, targetBoundsProvider, currentBounds);
  };
  protoOf(ActiveMatchFoundConfigPending).onMatchFound_dz6d1_k$ = function (previousTargetBoundsProvider) {
    if (this.targetBoundsProviderBeforeConfig_1 == null) {
      this.targetBoundsProviderBeforeConfig_1 = previousTargetBoundsProvider;
    }
    return this;
  };
  protoOf(ActiveMatchFoundConfigPending).updateBounds_rr2frf_k$ = function (bounds) {
    // Inline function 'androidx.compose.animation.sharedTransitionDebug' call
    if (false) {
      var tmp$ret$1 = 'updating currentBounds to ' + bounds.toString() + ' for state ' + toString_0(this);
      println('SharedTransition: ' + tmp$ret$1);
    }
    _set_currentBounds__186mx5(this, bounds);
  };
  protoOf(ActiveMatchFoundConfigPending).onVisibleContentRemovedDuringTransition_ceetlc_k$ = function () {
    // Inline function 'androidx.compose.animation.sharedTransitionDebug' call
    if (false) {
      var tmp$ret$1 = 'StateMachine: Transitioning from ActiveMatchPending to NoMatch';
      println('SharedTransition: ' + tmp$ret$1);
    }
    return NoMatchFound_getInstance();
  };
  function obtainBoundsFromLastTarget(_this__u8e3s4, lastTargetBoundsProvider) {
    var tmp;
    var tmp_0;
    if (!(lastTargetBoundsProvider == null)) {
      var tmp0 = _this__u8e3s4.get_allEntries_nhmbbc_k$();
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastAny' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable = 0;
        var last = tmp0.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0.get_c1px32_k$(index);
            if (equals(item.get_boundsProvider_o6pxkh_k$(), lastTargetBoundsProvider)) {
              tmp$ret$0 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$0 = false;
      }
      tmp_0 = tmp$ret$0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = lastTargetBoundsProvider.get_lastBoundsInSharedTransitionScope_e0le3l_k$();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function updateTargetData(targetData, lookaheadSize, topLeft, structuralOffset, targetBoundsProviderChanged) {
    if (!equals(new Offset(targetData.get_targetStructuralOffset_diba68_k$()), new Offset(structuralOffset)) || !equals(new Size(targetData.get_size_cxx1ym_k$()), new Size(lookaheadSize)) || targetBoundsProviderChanged) {
      targetData.set_size_6a0e6q_k$(lookaheadSize);
      targetData.set_targetStructuralOffset_prn3mk_k$(structuralOffset);
      if (targetBoundsProviderChanged) {
        targetData.set_initialMfrOffset_zdul1n_k$(Offset__minus_impl_hoj2c0(Offset__minus_impl_hoj2c0(topLeft, structuralOffset), Offset__minus_impl_hoj2c0(targetData.get_currentMfrOffset_68hisy_k$(), targetData.get_initialMfrOffset_6o7ny1_k$())));
      }
    }
    targetData.set_currentMfrOffset_k9brqi_k$(Offset__minus_impl_hoj2c0(topLeft, structuralOffset));
  }
  function _set_currentBounds__186mx5_0($this, _set____db54di) {
    var tmp0 = $this.currentBounds$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = ActiveMatchConfigured$_get_currentBounds_$ref_sppd91_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('currentBounds', 1, tmp, tmp_0, ActiveMatchConfigured$_set_currentBounds_$ref_6zwgyp_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ActiveMatchConfigured$_get_targetBoundsProvider_$ref_mkpukq() {
    return constructCallableReference(function (p0) {
      return p0.get_targetBoundsProvider_bhjtvk_k$();
    }, 1, 0, 'androidx.compose.animation/ActiveMatchConfigured.targetBoundsProvider.<get-targetBoundsProvider>|<get-targetBoundsProvider>(){}[0]');
  }
  function ActiveMatchConfigured$_set_targetBoundsProvider_$ref_i2cmxi() {
    return constructCallableReference(function (p0, p1) {
      p0.set_targetBoundsProvider_od7uve_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/ActiveMatchConfigured.targetBoundsProvider.<set-targetBoundsProvider>|<set-targetBoundsProvider>(androidx.compose.animation.BoundsProvider){}[0]');
  }
  function ActiveMatchConfigured$_get_targetBoundsProvider_$ref_mkpukq_0() {
    return constructCallableReference(function (p0) {
      return p0.get_targetBoundsProvider_bhjtvk_k$();
    }, 1, 0, 'androidx.compose.animation/ActiveMatchConfigured.targetBoundsProvider.<get-targetBoundsProvider>|<get-targetBoundsProvider>(){}[0]');
  }
  function ActiveMatchConfigured$_set_targetBoundsProvider_$ref_i2cmxi_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_targetBoundsProvider_od7uve_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/ActiveMatchConfigured.targetBoundsProvider.<set-targetBoundsProvider>|<set-targetBoundsProvider>(androidx.compose.animation.BoundsProvider){}[0]');
  }
  function ActiveMatchConfigured$_get_currentBounds_$ref_sppd91() {
    return constructCallableReference(function (p0) {
      return p0.get_currentBounds_rrenad_k$();
    }, 1, 0, 'androidx.compose.animation/ActiveMatchConfigured.currentBounds.<get-currentBounds>|<get-currentBounds>(){}[0]');
  }
  function ActiveMatchConfigured$_set_currentBounds_$ref_6zwgyp() {
    return constructCallableReference(function (p0, p1) {
      _set_currentBounds__186mx5_0(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/ActiveMatchConfigured.currentBounds.<set-currentBounds>|<set-currentBounds>(androidx.compose.ui.geometry.Rect){}[0]');
  }
  function ActiveMatchConfigured$_get_currentBounds_$ref_sppd91_0() {
    return constructCallableReference(function (p0) {
      return p0.get_currentBounds_rrenad_k$();
    }, 1, 0, 'androidx.compose.animation/ActiveMatchConfigured.currentBounds.<get-currentBounds>|<get-currentBounds>(){}[0]');
  }
  function ActiveMatchConfigured$_set_currentBounds_$ref_6zwgyp_0() {
    return constructCallableReference(function (p0, p1) {
      _set_currentBounds__186mx5_0(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/ActiveMatchConfigured.currentBounds.<set-currentBounds>|<set-currentBounds>(androidx.compose.ui.geometry.Rect){}[0]');
  }
  function ActiveMatchConfigured(targetData, targetBoundsProvider, currentBounds) {
    MatchIsOrHasBeenConfigured.call(this);
    this.targetData_1 = targetData;
    this.targetBoundsProvider$delegate_1 = mutableStateOf(targetBoundsProvider);
    this.currentBounds$delegate_1 = mutableStateOf(currentBounds);
  }
  protoOf(ActiveMatchConfigured).get_targetData_c4trx8_k$ = function () {
    return this.targetData_1;
  };
  protoOf(ActiveMatchConfigured).get_activeMatchFound_5y5djo_k$ = function () {
    return true;
  };
  protoOf(ActiveMatchConfigured).set_targetBoundsProvider_od7uve_k$ = function (_set____db54di) {
    var tmp0 = this.targetBoundsProvider$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = ActiveMatchConfigured$_get_targetBoundsProvider_$ref_mkpukq_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('targetBoundsProvider', 1, tmp, tmp_0, ActiveMatchConfigured$_set_targetBoundsProvider_$ref_i2cmxi_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(ActiveMatchConfigured).get_targetBoundsProvider_bhjtvk_k$ = function () {
    var tmp0 = this.targetBoundsProvider$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = ActiveMatchConfigured$_get_targetBoundsProvider_$ref_mkpukq();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('targetBoundsProvider', 1, tmp, tmp_0, ActiveMatchConfigured$_set_targetBoundsProvider_$ref_i2cmxi());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(ActiveMatchConfigured).get_currentBounds_rrenad_k$ = function () {
    var tmp0 = this.currentBounds$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = ActiveMatchConfigured$_get_currentBounds_$ref_sppd91();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('currentBounds', 1, tmp, tmp_0, ActiveMatchConfigured$_set_currentBounds_$ref_6zwgyp());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(ActiveMatchConfigured).onMatchFound_dz6d1_k$ = function (previousTargetBoundsProvider) {
    return this;
  };
  protoOf(ActiveMatchConfigured).configureActiveMatch_22bsda_k$ = function (sharedElement, targetBoundsProvider, lookaheadSize, topLeft, structuralOffset) {
    var targetBoundsProviderChanged = !equals(this.get_targetBoundsProvider_bhjtvk_k$(), targetBoundsProvider);
    updateTargetData(this.targetData_1, lookaheadSize, topLeft, structuralOffset, targetBoundsProviderChanged);
    this.set_targetBoundsProvider_od7uve_k$(targetBoundsProvider);
    return this;
  };
  protoOf(ActiveMatchConfigured).onVisibleContentRemovedDuringTransition_ceetlc_k$ = function () {
    // Inline function 'androidx.compose.animation.sharedTransitionDebug' call
    if (false) {
      var tmp$ret$1 = 'StateMachine: Transitioning from ActiveMatchConfigured to ActiveMatchRemovedDuringTransition';
      println('SharedTransition: ' + tmp$ret$1);
    }
    var lastTarget = Rect_1(Offset__plus_impl_c78cg0(this.targetData_1.get_currentMfrOffset_68hisy_k$(), this.targetData_1.get_targetStructuralOffset_diba68_k$()), this.targetData_1.get_size_cxx1ym_k$());
    var newTarget = this.get_targetBoundsProvider_bhjtvk_k$().calculateAlternativeTargetBounds_c8liz8_k$(lastTarget);
    if (newTarget == null) {
      return NoMatchFound_getInstance();
    } else {
      // Inline function 'kotlin.also' call
      var this_0 = new TargetData(newTarget.get_size_cxx1ym_k$(), this.targetData_1.get_initialMfrOffset_6o7ny1_k$(), Offset__minus_impl_hoj2c0(newTarget.get_topLeft_ypvrd5_k$(), this.targetData_1.get_currentMfrOffset_68hisy_k$()));
      this_0.set_currentMfrOffset_k9brqi_k$(this.targetData_1.get_currentMfrOffset_68hisy_k$());
      var updatedTargetData = this_0;
      return new ActiveMatchRemovedDuringTransition(updatedTargetData, this.get_currentBounds_rrenad_k$());
    }
  };
  protoOf(ActiveMatchConfigured).updateBounds_rr2frf_k$ = function (bounds) {
    // Inline function 'androidx.compose.animation.sharedTransitionDebug' call
    if (false) {
      var tmp$ret$1 = 'updating currentBounds to ' + bounds.toString() + ' for state ' + toString_0(this);
      println('SharedTransition: ' + tmp$ret$1);
    }
    _set_currentBounds__186mx5_0(this, bounds);
  };
  function MatchIsOrHasBeenConfigured() {
    State.call(this);
  }
  protoOf(MatchIsOrHasBeenConfigured).get_matchIsOrHasBeenConfigured_wqv4it_k$ = function () {
    return true;
  };
  function _set_currentBounds__186mx5_1($this, _set____db54di) {
    var tmp0 = $this.currentBounds$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = ActiveMatchRemovedDuringTransition$_get_currentBounds_$ref_46pta3_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('currentBounds', 1, tmp, tmp_0, ActiveMatchRemovedDuringTransition$_set_currentBounds_$ref_hj3309_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function ActiveMatchRemovedDuringTransition$_get_currentBounds_$ref_46pta3() {
    return constructCallableReference(function (p0) {
      return p0.get_currentBounds_rrenad_k$();
    }, 1, 0, 'androidx.compose.animation/ActiveMatchRemovedDuringTransition.currentBounds.<get-currentBounds>|<get-currentBounds>(){}[0]');
  }
  function ActiveMatchRemovedDuringTransition$_set_currentBounds_$ref_hj3309() {
    return constructCallableReference(function (p0, p1) {
      _set_currentBounds__186mx5_1(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/ActiveMatchRemovedDuringTransition.currentBounds.<set-currentBounds>|<set-currentBounds>(androidx.compose.ui.geometry.Rect){}[0]');
  }
  function ActiveMatchRemovedDuringTransition$_get_currentBounds_$ref_46pta3_0() {
    return constructCallableReference(function (p0) {
      return p0.get_currentBounds_rrenad_k$();
    }, 1, 0, 'androidx.compose.animation/ActiveMatchRemovedDuringTransition.currentBounds.<get-currentBounds>|<get-currentBounds>(){}[0]');
  }
  function ActiveMatchRemovedDuringTransition$_set_currentBounds_$ref_hj3309_0() {
    return constructCallableReference(function (p0, p1) {
      _set_currentBounds__186mx5_1(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/ActiveMatchRemovedDuringTransition.currentBounds.<set-currentBounds>|<set-currentBounds>(androidx.compose.ui.geometry.Rect){}[0]');
  }
  function ActiveMatchRemovedDuringTransition(targetData, currentBounds) {
    MatchIsOrHasBeenConfigured.call(this);
    this.targetData_1 = targetData;
    this.currentBounds$delegate_1 = mutableStateOf(currentBounds);
    this.alternativeTargetConfigured_1 = false;
  }
  protoOf(ActiveMatchRemovedDuringTransition).get_targetData_c4trx8_k$ = function () {
    return this.targetData_1;
  };
  protoOf(ActiveMatchRemovedDuringTransition).get_currentBounds_rrenad_k$ = function () {
    var tmp0 = this.currentBounds$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = ActiveMatchRemovedDuringTransition$_get_currentBounds_$ref_46pta3();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('currentBounds', 1, tmp, tmp_0, ActiveMatchRemovedDuringTransition$_set_currentBounds_$ref_hj3309());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(ActiveMatchRemovedDuringTransition).set_alternativeTargetConfigured_7d67x2_k$ = function (_set____db54di) {
    this.alternativeTargetConfigured_1 = _set____db54di;
  };
  protoOf(ActiveMatchRemovedDuringTransition).get_alternativeTargetConfigured_kievhp_k$ = function () {
    return this.alternativeTargetConfigured_1;
  };
  protoOf(ActiveMatchRemovedDuringTransition).onMatchFound_dz6d1_k$ = function (previousTargetBoundsProvider) {
    // Inline function 'androidx.compose.animation.sharedTransitionDebug' call
    if (false) {
      var tmp$ret$1 = 'StateMachine: Transitioning from ActiveMatchRemovedDuringTransition to ActiveMatchPending';
      println('SharedTransition: ' + tmp$ret$1);
    }
    return new ActiveMatchFoundConfigPending(previousTargetBoundsProvider, this.targetData_1, this.get_currentBounds_rrenad_k$());
  };
  protoOf(ActiveMatchRemovedDuringTransition).updateBounds_rr2frf_k$ = function (bounds) {
    // Inline function 'androidx.compose.animation.sharedTransitionDebug' call
    if (false) {
      var tmp$ret$1 = 'updating currentBounds to ' + bounds.toString() + ' for state ' + toString_0(this);
      println('SharedTransition: ' + tmp$ret$1);
    }
    _set_currentBounds__186mx5_1(this, bounds);
  };
  protoOf(ActiveMatchRemovedDuringTransition).onVisibleContentRemovedDuringTransition_ceetlc_k$ = function () {
    return this;
  };
  function get_targetBounds(_this__u8e3s4) {
    return Rect_1(Offset__plus_impl_c78cg0(_this__u8e3s4.get_initialMfrOffset_6o7ny1_k$(), _this__u8e3s4.get_targetStructuralOffset_diba68_k$()), _this__u8e3s4.get_size_cxx1ym_k$());
  }
  function calculateOffsetFromDirectManipulation(_this__u8e3s4, animatedBounds) {
    return Offset__plus_impl_c78cg0(Offset__minus_impl_hoj2c0(animatedBounds.get_topLeft_ypvrd5_k$(), _this__u8e3s4.get_initialMfrOffset_6o7ny1_k$()), _this__u8e3s4.get_currentMfrOffset_68hisy_k$());
  }
  function StateChangeRequest_NoRequest_getInstance() {
    static_init_0();
    return StateChangeRequest_NoRequest_instance;
  }
  function StateChangeRequest_MatchFound_getInstance() {
    static_init_0();
    return StateChangeRequest_MatchFound_instance;
  }
  function StateChangeRequest_VisibleContentAbsentDuringTransition_getInstance() {
    static_init_0();
    return StateChangeRequest_VisibleContentAbsentDuringTransition_instance;
  }
  function StateChangeRequest_NoMatchFound_getInstance() {
    static_init_0();
    return StateChangeRequest_NoMatchFound_instance;
  }
  function get_colorDefaultSpring() {
    _init_properties_SingleValueAnimation_kt__hxy1sr();
    return colorDefaultSpring;
  }
  var colorDefaultSpring;
  function animateColorAsState(targetValue, animationSpec, label, finishedListener, $composer, $changed, $default) {
    _init_properties_SingleValueAnimation_kt__hxy1sr();
    var animationSpec_0 = animationSpec;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    if (!(($default & 2) === 0))
      animationSpec_0 = get_colorDefaultSpring();
    if (!(($default & 4) === 0))
      label_0 = 'ColorAnimation';
    if (!(($default & 8) === 0))
      finishedListener_0 = null;
    var tmp1_remember$arg$0 = _Color___get_colorSpace__impl__jqqozk(targetValue);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.changed_ga7h3f_k$(tmp1_remember$arg$0);
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value = get_VectorConverter_4(Companion_getInstance_5())(_Color___get_colorSpace__impl__jqqozk(targetValue));
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var converter = tmp;
    var tmp_0 = animationSpec_0;
    return animateValueAsState(new Color_0(targetValue), converter, tmp_0, null, label_0, finishedListener_0, $composer_0, 14 & $changed | 896 & $changed << 3 | 57344 & $changed << 6 | 458752 & $changed << 6, 8);
  }
  var properties_initialized_SingleValueAnimation_kt_kqgwkj;
  function _init_properties_SingleValueAnimation_kt__hxy1sr() {
    if (!properties_initialized_SingleValueAnimation_kt_kqgwkj) {
      properties_initialized_SingleValueAnimation_kt_kqgwkj = true;
      colorDefaultSpring = spring();
    }
  }
  function get_DefaultEnabled() {
    _init_properties_SkipToLookaheadSizeNode_kt__v47psp();
    return DefaultEnabled;
  }
  var DefaultEnabled;
  var androidx_compose_animation_SkipToLookaheadSizeNode$stable;
  var androidx_compose_animation_SkipToLookaheadSizeElement$stable;
  function SkipToLookaheadSizeElement(scaleToBounds, isEnabled) {
    scaleToBounds = scaleToBounds === VOID ? null : scaleToBounds;
    isEnabled = isEnabled === VOID ? get_DefaultEnabled() : isEnabled;
    ModifierNodeElement.call(this);
    this.scaleToBounds_1 = scaleToBounds;
    this.isEnabled_1 = isEnabled;
  }
  protoOf(SkipToLookaheadSizeElement).get_scaleToBounds_v7yegf_k$ = function () {
    return this.scaleToBounds_1;
  };
  protoOf(SkipToLookaheadSizeElement).get_isEnabled_roz1ma_k$ = function () {
    return this.isEnabled_1;
  };
  protoOf(SkipToLookaheadSizeElement).create_md4cuc_k$ = function () {
    return new SkipToLookaheadSizeNode(this.scaleToBounds_1, this.isEnabled_1);
  };
  protoOf(SkipToLookaheadSizeElement).update_1px3qs_k$ = function (node) {
    node.set_scaleToBounds_7de1qi_k$(this.scaleToBounds_1);
    node.set_isEnabled_9kb97j_k$(this.isEnabled_1);
  };
  protoOf(SkipToLookaheadSizeElement).update_9wd57p_k$ = function (node) {
    return this.update_1px3qs_k$(node instanceof SkipToLookaheadSizeNode ? node : THROW_CCE());
  };
  protoOf(SkipToLookaheadSizeElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('skipToLookahead');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('scaleToBounds', this.scaleToBounds_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('isEnabled', this.isEnabled_1);
  };
  protoOf(SkipToLookaheadSizeElement).hashCode = function () {
    var tmp = imul(hashCode(this.isEnabled_1), 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.scaleToBounds_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  protoOf(SkipToLookaheadSizeElement).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof SkipToLookaheadSizeElement) {
      tmp_0 = other.isEnabled_1 === this.isEnabled_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.scaleToBounds_1, this.scaleToBounds_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  function createContentScaleModifier(_this__u8e3s4, scaleToBounds, isEnabled) {
    _init_properties_SkipToLookaheadSizeNode_kt__v47psp();
    var tmp;
    if (equals(scaleToBounds.get_contentScale_i3wrkq_k$(), Companion_getInstance_18().get_Crop_wnzuux_k$())) {
      var tmp_0 = Companion_getInstance_0();
      tmp = graphicsLayer(tmp_0, createContentScaleModifier$lambda(isEnabled));
    } else {
      tmp = Companion_getInstance_0();
    }
    return _this__u8e3s4.then_g5qrxq_k$(tmp).then_g5qrxq_k$(new SkipToLookaheadSizeElement(scaleToBounds, isEnabled));
  }
  function _set_lookaheadConstraints__uusx37_0($this, _set____db54di) {
    $this.lookaheadConstraints_1 = _set____db54di;
  }
  function _get_lookaheadConstraints__gwq92v_0($this) {
    return $this.lookaheadConstraints_1;
  }
  function _set_lookaheadSize__8e6fb6_0($this, _set____db54di) {
    $this.lookaheadSize_1 = _set____db54di;
  }
  function _get_lookaheadSize__6tl376_0($this) {
    return $this.lookaheadSize_1;
  }
  function SkipToLookaheadSizeNode$_get_scaleToBounds_$ref_8macab() {
    return constructCallableReference(function (p0) {
      return p0.get_scaleToBounds_v7yegf_k$();
    }, 1, 0, 'androidx.compose.animation/SkipToLookaheadSizeNode.scaleToBounds.<get-scaleToBounds>|<get-scaleToBounds>(){}[0]');
  }
  function SkipToLookaheadSizeNode$_set_scaleToBounds_$ref_d3ik01() {
    return constructCallableReference(function (p0, p1) {
      p0.set_scaleToBounds_7de1qi_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SkipToLookaheadSizeNode.scaleToBounds.<set-scaleToBounds>|<set-scaleToBounds>(androidx.compose.animation.ScaleToBoundsImpl?){}[0]');
  }
  function SkipToLookaheadSizeNode$_get_scaleToBounds_$ref_8macab_0() {
    return constructCallableReference(function (p0) {
      return p0.get_scaleToBounds_v7yegf_k$();
    }, 1, 0, 'androidx.compose.animation/SkipToLookaheadSizeNode.scaleToBounds.<get-scaleToBounds>|<get-scaleToBounds>(){}[0]');
  }
  function SkipToLookaheadSizeNode$_set_scaleToBounds_$ref_d3ik01_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_scaleToBounds_7de1qi_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SkipToLookaheadSizeNode.scaleToBounds.<set-scaleToBounds>|<set-scaleToBounds>(androidx.compose.animation.ScaleToBoundsImpl?){}[0]');
  }
  function SkipToLookaheadSizeNode$_get_isEnabled_$ref_k97xe8() {
    return constructCallableReference(function (p0) {
      return p0.get_isEnabled_roz1ma_k$();
    }, 1, 0, 'androidx.compose.animation/SkipToLookaheadSizeNode.isEnabled.<get-isEnabled>|<get-isEnabled>(){}[0]');
  }
  function SkipToLookaheadSizeNode$_set_isEnabled_$ref_51gevw() {
    return constructCallableReference(function (p0, p1) {
      p0.set_isEnabled_9kb97j_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SkipToLookaheadSizeNode.isEnabled.<set-isEnabled>|<set-isEnabled>(kotlin.Function0<kotlin.Boolean>){}[0]');
  }
  function SkipToLookaheadSizeNode$_get_isEnabled_$ref_k97xe8_0() {
    return constructCallableReference(function (p0) {
      return p0.get_isEnabled_roz1ma_k$();
    }, 1, 0, 'androidx.compose.animation/SkipToLookaheadSizeNode.isEnabled.<get-isEnabled>|<get-isEnabled>(){}[0]');
  }
  function SkipToLookaheadSizeNode$_set_isEnabled_$ref_51gevw_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_isEnabled_9kb97j_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation/SkipToLookaheadSizeNode.isEnabled.<set-isEnabled>|<set-isEnabled>(kotlin.Function0<kotlin.Boolean>){}[0]');
  }
  function SkipToLookaheadSizeNode$measure$lambda($$this$run) {
    return function ($this$layout) {
      $this$layout.place$default_61faqz_k$($$this$run, 0, 0);
      return Unit_getInstance();
    };
  }
  function SkipToLookaheadSizeNode$measure$lambda$lambda($resolvedScale) {
    return function ($this$placeWithLayer) {
      // Inline function 'androidx.compose.ui.layout.ScaleFactor.scaleX' call
      var this_0 = $resolvedScale;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _ScaleFactor___get_packedValue__impl__x2069g(this_0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$0 = floatFromBits(bits);
      $this$placeWithLayer.set_scaleX_ykjjzx_k$(tmp$ret$0);
      // Inline function 'androidx.compose.ui.layout.ScaleFactor.scaleY' call
      var this_1 = $resolvedScale;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _ScaleFactor___get_packedValue__impl__x2069g(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'kotlin.fromBits' call
      FloatCompanionObject_getInstance();
      var tmp$ret$4 = floatFromBits(bits_0);
      $this$placeWithLayer.set_scaleY_i4eqp0_k$(tmp$ret$4);
      $this$placeWithLayer.set_transformOrigin_wfji5_k$(TransformOrigin_0(0.0, 0.0));
      return Unit_getInstance();
    };
  }
  function SkipToLookaheadSizeNode$measure$lambda_0(this$0, $p, $constrainedSize, $this_measure) {
    return function ($this$layout) {
      var scaleToBounds = this$0.get_scaleToBounds_v7yegf_k$();
      var tmp;
      if (scaleToBounds == null) {
        $this$layout.place$default_61faqz_k$($p, 0, 0);
        tmp = Unit_getInstance();
      } else {
        var contentScale = scaleToBounds.get_contentScale_i3wrkq_k$();
        var tmp_0;
        var tmp_1;
        // Inline function 'androidx.compose.ui.unit.IntSize.width' call
        var this_0 = this$0.lookaheadSize_1;
        // Inline function 'androidx.compose.ui.util.unpackInt1' call
        var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
        if (convertToInt(shiftRight(value, 32)) === 0) {
          tmp_1 = true;
        } else {
          // Inline function 'androidx.compose.ui.unit.IntSize.height' call
          var this_1 = this$0.lookaheadSize_1;
          // Inline function 'androidx.compose.ui.util.unpackInt2' call
          var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
          tmp_1 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0))) === 0;
        }
        if (tmp_1) {
          // Inline function 'androidx.compose.ui.layout.ScaleFactor' call
          // Inline function 'androidx.compose.ui.util.packFloats' call
          var v1 = fromInt(toRawBits(1.0));
          var v2 = fromInt(toRawBits(1.0));
          var tmp$ret$5 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
          tmp_0 = _ScaleFactor___init__impl__ttdtvk(tmp$ret$5);
        } else {
          tmp_0 = contentScale.computeScaleFactor_swd2p8_k$(toSize(this$0.lookaheadSize_1), toSize($constrainedSize));
        }
        var resolvedScale = tmp_0;
        var tmp_2 = scaleToBounds.get_alignment_xa1jnq_k$();
        // Inline function 'androidx.compose.ui.unit.IntSize.width' call
        var this_2 = this$0.lookaheadSize_1;
        // Inline function 'androidx.compose.ui.util.unpackInt1' call
        var value_1 = _IntSize___get_packedValue__impl__uho7jf(this_2);
        var tmp_3 = convertToInt(shiftRight(value_1, 32));
        // Inline function 'androidx.compose.ui.layout.ScaleFactor.scaleX' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_2 = _ScaleFactor___get_packedValue__impl__x2069g(resolvedScale);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits = convertToInt(shiftRight(value_2, 32));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        // Inline function 'kotlin.math.roundToInt' call
        var this_3 = tmp_3 * floatFromBits(bits);
        var tmp0 = roundToInt(this_3);
        // Inline function 'androidx.compose.ui.unit.IntSize.height' call
        var this_4 = this$0.lookaheadSize_1;
        // Inline function 'androidx.compose.ui.util.unpackInt2' call
        var value_3 = _IntSize___get_packedValue__impl__uho7jf(this_4);
        var tmp_4 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
        // Inline function 'androidx.compose.ui.layout.ScaleFactor.scaleY' call
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_4 = _ScaleFactor___get_packedValue__impl__x2069g(resolvedScale);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        var bits_0 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
        // Inline function 'kotlin.fromBits' call
        FloatCompanionObject_getInstance();
        // Inline function 'kotlin.math.roundToInt' call
        var this_5 = tmp_4 * floatFromBits(bits_0);
        // Inline function 'androidx.compose.ui.unit.IntSize' call
        // Inline function 'androidx.compose.ui.util.packInts' call
        var val2 = roundToInt(this_5);
        var tmp$ret$21 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
        var tmp$ret$20 = _IntSize___init__impl__emcjft(tmp$ret$21);
        var _destruct__k2r9zo = tmp_2.align_mb8mzc_k$(tmp$ret$20, $constrainedSize, $this_measure.get_layoutDirection_7e37v0_k$());
        // Inline function 'androidx.compose.ui.unit.IntOffset.component1' call
        var x = _IntOffset___get_x__impl__qiqr5o(_destruct__k2r9zo);
        // Inline function 'androidx.compose.ui.unit.IntOffset.component2' call
        var y = _IntOffset___get_y__impl__2avpwj(_destruct__k2r9zo);
        $this$layout.placeWithLayer$default_kqry46_k$($p, x, y, VOID, SkipToLookaheadSizeNode$measure$lambda$lambda(resolvedScale));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SkipToLookaheadSizeNode(scaleToBounds, isEnabled) {
    Node.call(this);
    this.scaleToBounds$delegate_1 = mutableStateOf(scaleToBounds);
    this.isEnabled$delegate_1 = mutableStateOf(isEnabled);
    this.lookaheadConstraints_1 = null;
    this.lookaheadSize_1 = get_InvalidSize();
  }
  protoOf(SkipToLookaheadSizeNode).set_scaleToBounds_7de1qi_k$ = function (_set____db54di) {
    var tmp0 = this.scaleToBounds$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SkipToLookaheadSizeNode$_get_scaleToBounds_$ref_8macab_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('scaleToBounds', 1, tmp, tmp_0, SkipToLookaheadSizeNode$_set_scaleToBounds_$ref_d3ik01_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SkipToLookaheadSizeNode).get_scaleToBounds_v7yegf_k$ = function () {
    var tmp0 = this.scaleToBounds$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SkipToLookaheadSizeNode$_get_scaleToBounds_$ref_8macab();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('scaleToBounds', 1, tmp, tmp_0, SkipToLookaheadSizeNode$_set_scaleToBounds_$ref_d3ik01());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SkipToLookaheadSizeNode).set_isEnabled_9kb97j_k$ = function (_set____db54di) {
    var tmp0 = this.isEnabled$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SkipToLookaheadSizeNode$_get_isEnabled_$ref_k97xe8_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isEnabled', 1, tmp, tmp_0, SkipToLookaheadSizeNode$_set_isEnabled_$ref_51gevw_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SkipToLookaheadSizeNode).get_isEnabled_roz1ma_k$ = function () {
    var tmp0 = this.isEnabled$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SkipToLookaheadSizeNode$_get_isEnabled_$ref_k97xe8();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isEnabled', 1, tmp, tmp_0, SkipToLookaheadSizeNode$_set_isEnabled_$ref_51gevw());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SkipToLookaheadSizeNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    if (_this__u8e3s4.get_isLookingAhead_2057g1_k$()) {
      this.lookaheadConstraints_1 = constraints;
    }
    if (!this.get_isEnabled_roz1ma_k$()()) {
      // Inline function 'kotlin.run' call
      var $this$run = measurable.measure_4dmfk1_k$(constraints);
      var tmp = $this$run.get_width_j0q4yl_k$();
      var tmp_0 = $this$run.get_height_e7t92o_k$();
      return _this__u8e3s4.layout$default_n19e5l_k$(tmp, tmp_0, VOID, SkipToLookaheadSizeNode$measure$lambda($this$run));
    }
    var tmp_1;
    if (_this__u8e3s4.get_isLookingAhead_2057g1_k$()) {
      // Inline function 'kotlin.also' call
      var this_0 = measurable.measure_4dmfk1_k$(constraints);
      var tmp_2 = this;
      var tmp0 = this_0.get_width_j0q4yl_k$();
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = this_0.get_height_e7t92o_k$();
      var tmp$ret$5 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      tmp_2.lookaheadSize_1 = _IntSize___init__impl__emcjft(tmp$ret$5);
      tmp_1 = this_0;
    } else {
      var tmp_3 = this.lookaheadConstraints_1;
      tmp_1 = measurable.measure_4dmfk1_k$(ensureNotNull(tmp_3 == null ? null : new Constraints_0(tmp_3)).value_1);
    }
    var p = tmp_1;
    var constrainedSize = constrain(constraints, this.lookaheadSize_1);
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf(constrainedSize);
    var tmp_4 = convertToInt(shiftRight(value, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntSize___get_packedValue__impl__uho7jf(constrainedSize);
    var tmp_5 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp_4, tmp_5, VOID, SkipToLookaheadSizeNode$measure$lambda_0(this, p, constrainedSize, _this__u8e3s4));
  };
  protoOf(SkipToLookaheadSizeNode).maxIntrinsicWidth_epsb1u_k$ = function (_this__u8e3s4, measurable, height) {
    var tmp;
    if (!_this__u8e3s4.get_isLookingAhead_2057g1_k$() && get_isValid(this.lookaheadSize_1)) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = this.lookaheadSize_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      tmp = convertToInt(shiftRight(value, 32));
    } else {
      tmp = measurable.maxIntrinsicWidth_b8umbx_k$(height);
    }
    return tmp;
  };
  protoOf(SkipToLookaheadSizeNode).minIntrinsicWidth_nsvhwg_k$ = function (_this__u8e3s4, measurable, height) {
    var tmp;
    if (!_this__u8e3s4.get_isLookingAhead_2057g1_k$() && get_isValid(this.lookaheadSize_1)) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = this.lookaheadSize_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      tmp = convertToInt(shiftRight(value, 32));
    } else {
      tmp = measurable.minIntrinsicWidth_jyhjuj_k$(height);
    }
    return tmp;
  };
  protoOf(SkipToLookaheadSizeNode).maxIntrinsicHeight_nrifyt_k$ = function (_this__u8e3s4, measurable, width) {
    var tmp;
    if (!_this__u8e3s4.get_isLookingAhead_2057g1_k$() && get_isValid(this.lookaheadSize_1)) {
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_0 = this.lookaheadSize_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      tmp = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    } else {
      tmp = measurable.maxIntrinsicHeight_b0krtc_k$(width);
    }
    return tmp;
  };
  protoOf(SkipToLookaheadSizeNode).minIntrinsicHeight_xt6ly1_k$ = function (_this__u8e3s4, measurable, width) {
    var tmp;
    if (!_this__u8e3s4.get_isLookingAhead_2057g1_k$() && get_isValid(this.lookaheadSize_1)) {
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_0 = this.lookaheadSize_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      tmp = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    } else {
      tmp = measurable.minIntrinsicHeight_p2a4ou_k$(width);
    }
    return tmp;
  };
  function DefaultEnabled$lambda() {
    _init_properties_SkipToLookaheadSizeNode_kt__v47psp();
    return true;
  }
  function createContentScaleModifier$lambda($isEnabled) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.set_clip_a88iug_k$($isEnabled());
      return Unit_getInstance();
    };
  }
  var properties_initialized_SkipToLookaheadSizeNode_kt_1of78b;
  function _init_properties_SkipToLookaheadSizeNode_kt__v47psp() {
    if (!properties_initialized_SkipToLookaheadSizeNode_kt_1of78b) {
      properties_initialized_SkipToLookaheadSizeNode_kt_1of78b = true;
      DefaultEnabled = DefaultEnabled$lambda;
      androidx_compose_animation_SkipToLookaheadSizeNode$stable = 8;
      androidx_compose_animation_SkipToLookaheadSizeElement$stable = 0;
    }
  }
  var androidx_compose_animation_AndroidFlingSpline_FlingResult$stable;
  var androidx_compose_animation_AndroidFlingSpline$stable;
  function _get_NbSamples__pl9lcs($this) {
    return $this.NbSamples_1;
  }
  function _get_SplinePositions__4lf5u0($this) {
    return $this.SplinePositions_1;
  }
  function _get_SplineTimes__1bv5pg($this) {
    return $this.SplineTimes_1;
  }
  function FlingResult(distanceCoefficient, velocityCoefficient) {
    this.distanceCoefficient_1 = distanceCoefficient;
    this.velocityCoefficient_1 = velocityCoefficient;
  }
  protoOf(FlingResult).get_distanceCoefficient_3vhbop_k$ = function () {
    return this.distanceCoefficient_1;
  };
  protoOf(FlingResult).get_velocityCoefficient_w8qjlb_k$ = function () {
    return this.velocityCoefficient_1;
  };
  protoOf(FlingResult).component1_7eebsc_k$ = function () {
    return this.distanceCoefficient_1;
  };
  protoOf(FlingResult).component2_7eebsb_k$ = function () {
    return this.velocityCoefficient_1;
  };
  protoOf(FlingResult).copy_4tzoad_k$ = function (distanceCoefficient, velocityCoefficient) {
    return new FlingResult(distanceCoefficient, velocityCoefficient);
  };
  protoOf(FlingResult).copy$default_ujshx8_k$ = function (distanceCoefficient, velocityCoefficient, $super) {
    distanceCoefficient = distanceCoefficient === VOID ? this.distanceCoefficient_1 : distanceCoefficient;
    velocityCoefficient = velocityCoefficient === VOID ? this.velocityCoefficient_1 : velocityCoefficient;
    return $super === VOID ? this.copy_4tzoad_k$(distanceCoefficient, velocityCoefficient) : $super.copy_4tzoad_k$.call(this, distanceCoefficient, velocityCoefficient);
  };
  protoOf(FlingResult).toString = function () {
    return 'FlingResult(distanceCoefficient=' + this.distanceCoefficient_1 + ', velocityCoefficient=' + this.velocityCoefficient_1 + ')';
  };
  protoOf(FlingResult).hashCode = function () {
    var result = getNumberHashCode(this.distanceCoefficient_1);
    result = imul(result, 31) + getNumberHashCode(this.velocityCoefficient_1) | 0;
    return result;
  };
  protoOf(FlingResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlingResult))
      return false;
    if (!equals(this.distanceCoefficient_1, other.distanceCoefficient_1))
      return false;
    if (!equals(this.velocityCoefficient_1, other.velocityCoefficient_1))
      return false;
    return true;
  };
  function AndroidFlingSpline() {
    AndroidFlingSpline_instance = this;
    this.NbSamples_1 = 100;
    this.SplinePositions_1 = new Float32Array(101);
    this.SplineTimes_1 = new Float32Array(101);
    computeSplineInfo(this.SplinePositions_1, this.SplineTimes_1, 100);
  }
  protoOf(AndroidFlingSpline).flingPosition_kqyylv_k$ = function (time) {
    var clampedTime = coerceIn(time, 0.0, 1.0);
    var index = numberToInt(100 * clampedTime);
    var distanceCoef = 1.0;
    var velocityCoef = 0.0;
    if (index < 100) {
      var tInf = index / 100;
      var tSup = (index + 1 | 0) / 100;
      var dInf = this.SplinePositions_1[index];
      var dSup = this.SplinePositions_1[index + 1 | 0];
      velocityCoef = (dSup - dInf) / (tSup - tInf);
      distanceCoef = dInf + (clampedTime - tInf) * velocityCoef;
    }
    return new FlingResult(distanceCoef, velocityCoef);
  };
  protoOf(AndroidFlingSpline).deceleration_7lhbmp_k$ = function (velocity, friction) {
    // Inline function 'kotlin.math.abs' call
    // Inline function 'kotlin.math.ln' call
    var x = 0.35 * Math.abs(velocity) / friction;
    return Math.log(x);
  };
  var AndroidFlingSpline_instance;
  function AndroidFlingSpline_getInstance() {
    if (AndroidFlingSpline_instance == null)
      new AndroidFlingSpline();
    return AndroidFlingSpline_instance;
  }
  function computeSplineInfo(splinePositions, splineTimes, nbSamples) {
    var xMin = 0.0;
    var yMin = 0.0;
    var inductionVariable = 0;
    if (inductionVariable < nbSamples)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var alpha = i / nbSamples;
        var xMax = 1.0;
        var x;
        var tx;
        var coef;
        $l$loop: while (true) {
          x = xMin + (xMax - xMin) / 2.0;
          coef = 3.0 * x * (1.0 - x);
          tx = coef * ((1.0 - x) * 0.175 + x * 0.35000002) + x * x * x;
          // Inline function 'kotlin.math.abs' call
          var x_0 = tx - alpha;
          if (Math.abs(x_0) < 1.0E-5)
            break $l$loop;
          if (tx > alpha)
            xMax = x;
          else
            xMin = x;
        }
        splinePositions[i] = coef * ((1.0 - x) * 0.5 + x) + x * x * x;
        var yMax = 1.0;
        var y;
        var dy;
        $l$loop_0: while (true) {
          y = yMin + (yMax - yMin) / 2.0;
          coef = 3.0 * y * (1.0 - y);
          dy = coef * ((1.0 - y) * 0.5 + y) + y * y * y;
          // Inline function 'kotlin.math.abs' call
          var x_1 = dy - alpha;
          if (Math.abs(x_1) < 1.0E-5)
            break $l$loop_0;
          if (dy > alpha)
            yMax = y;
          else
            yMin = y;
        }
        splineTimes[i] = coef * ((1.0 - y) * 0.175 + y * 0.35000002) + y * y * y;
      }
       while (inductionVariable < nbSamples);
    splineTimes[nbSamples] = 1.0;
    splinePositions[nbSamples] = splineTimes[nbSamples];
  }
  function splineBasedDecay(density) {
    return generateDecayAnimationSpec(new SplineBasedFloatDecayAnimationSpec(density));
  }
  var androidx_compose_animation_SplineBasedFloatDecayAnimationSpec$stable;
  function _get_flingCalculator__k6f165($this) {
    return $this.flingCalculator_1;
  }
  function flingDistance($this, startVelocity) {
    var tmp = $this.flingCalculator_1.flingDistance_e8js0p_k$(startVelocity);
    // Inline function 'kotlin.math.sign' call
    return tmp * sign(startVelocity);
  }
  function SplineBasedFloatDecayAnimationSpec(density) {
    this.flingCalculator_1 = new FlingCalculator(get_platformFlingScrollFriction(), density);
  }
  protoOf(SplineBasedFloatDecayAnimationSpec).get_absVelocityThreshold_wsgqo5_k$ = function () {
    return 0.0;
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getTargetValue_k8zsye_k$ = function (initialValue, initialVelocity) {
    return initialValue + flingDistance(this, initialVelocity);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getValueFromNanos_vizg24_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = divide(playTimeNanos, new Long(1000000, 0));
    return initialValue + this.flingCalculator_1.flingInfo_sr0d1q_k$(initialVelocity).position_oaxlut_k$(playTimeMillis);
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getDurationNanos_dl2v11_k$ = function (initialValue, initialVelocity) {
    return multiply(this.flingCalculator_1.flingDuration_g3t3l4_k$(initialVelocity), new Long(1000000, 0));
  };
  protoOf(SplineBasedFloatDecayAnimationSpec).getVelocityFromNanos_eyb6gk_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = divide(playTimeNanos, new Long(1000000, 0));
    return this.flingCalculator_1.flingInfo_sr0d1q_k$(initialVelocity).velocity_2zfv01_k$(playTimeMillis);
  };
  function animateColor(_this__u8e3s4, transitionSpec, label, targetValueByState, $composer, $changed, $default) {
    var transitionSpec_0 = transitionSpec;
    var label_0 = label;
    var $composer_0 = $composer;
    if (!(($default & 1) === 0)) {
      transitionSpec_0 = animateColor$lambda;
    }
    if (!(($default & 2) === 0))
      label_0 = 'ColorAnimation';
    var colorSpace = _Color___get_colorSpace__impl__jqqozk(targetValueByState(_this__u8e3s4.get_targetState_kri3mx_k$(), $composer_0, 112 & $changed >> 6).value_1);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.changed_ga7h3f_k$(colorSpace);
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value = get_VectorConverter_4(Companion_getInstance_5())(colorSpace);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var typeConverter = tmp;
    // Inline function 'androidx.compose.animation.core.animateValue' call
    var $changed_0 = 14 & $changed | 896 & $changed << 3 | 7168 & $changed << 3 | 57344 & $changed << 3;
    var transitionSpec_1 = transitionSpec_0;
    var label_1 = label_0;
    var $composer_1 = $composer_0;
    if (!((0 & 2) === 0)) {
      transitionSpec_1 = animateColor$lambda_0;
    }
    if (!((0 & 4) === 0))
      label_1 = 'ValueAnimation';
    var tmp_0;
    if (!_this__u8e3s4.get_isSeeking_vjb393_k$()) {
      $composer_1.startReplaceGroup_5hh8aj_k$(1666573488);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = ($changed_0 & 14 ^ 6) > 4 && $composer_1.changed_ga7h3f_k$(_this__u8e3s4) || ($changed_0 & 6) === 4;
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (invalid_0 || it_0 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
        var tmp0 = Companion_getInstance_19();
        var tmp$ret$9;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Companion.withoutReadObservation' call
          var previousSnapshot = tmp0.get_currentThreadSnapshot_y07jj6_k$();
          var observer = previousSnapshot == null ? null : previousSnapshot.get_readObserver_t4nv53_k$();
          var newSnapshot = tmp0.makeCurrentNonObservable_yxji5w_k$(previousSnapshot);
          try {
            tmp$ret$9 = _this__u8e3s4.get_currentState_snihnl_k$();
            break $l$block;
          }finally {
            tmp0.restoreNonObservable_baklka_k$(previousSnapshot, newSnapshot, observer);
          }
        }
        var value_0 = tmp$ret$9;
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp1_group = tmp_1;
      $composer_1.endReplaceGroup_ek144q_k$();
      tmp_0 = tmp1_group;
    } else {
      $composer_1.startReplaceGroup_5hh8aj_k$(1666827533);
      $composer_1.endReplaceGroup_ek144q_k$();
      tmp_0 = _this__u8e3s4.get_currentState_snihnl_k$();
    }
    var initialState = tmp_0;
    var initialValue = targetValueByState(initialState, $composer_1, 112 & $changed_0 >> 9);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_1 = ($changed_0 & 14 ^ 6) > 4 && $composer_1.changed_ga7h3f_k$(_this__u8e3s4) || ($changed_0 & 6) === 4;
    // Inline function 'kotlin.let' call
    var it_1 = $composer_1.rememberedValue_4dg93v_k$();
    var tmp_2;
    if (invalid_1 || it_1 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value_1 = derivedStateOf(animateColor$lambda_1(_this__u8e3s4));
      $composer_1.updateRememberedValue_l1wh71_k$(value_1);
      tmp_2 = value_1;
    } else {
      tmp_2 = it_1;
    }
    var targetValue = targetValueByState(tmp_2.get_value_j01efc_k$(), $composer_1, 112 & $changed_0 >> 9);
    var tmp_3 = transitionSpec_1;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_2 = ($changed_0 & 14 ^ 6) > 4 && $composer_1.changed_ga7h3f_k$(_this__u8e3s4) || ($changed_0 & 6) === 4;
    // Inline function 'kotlin.let' call
    var it_2 = $composer_1.rememberedValue_4dg93v_k$();
    var tmp_4;
    if (invalid_2 || it_2 === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value_2 = derivedStateOf(animateColor$lambda_2(_this__u8e3s4));
      $composer_1.updateRememberedValue_l1wh71_k$(value_2);
      tmp_4 = value_2;
    } else {
      tmp_4 = it_2;
    }
    var animationSpec = tmp_3(tmp_4.get_value_j01efc_k$(), $composer_1, 112 & $changed_0 >> 3);
    return createTransitionAnimation(_this__u8e3s4, initialValue, targetValue, animationSpec, typeConverter, label_1, $composer_1, 14 & $changed_0 | 57344 & $changed_0 << 9 | 458752 & $changed_0 << 6);
  }
  function animateColor$lambda(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-781456724);
    var tmp0 = spring();
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  }
  function animateColor$lambda_0(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-2137771706);
    var tmp0 = spring();
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  }
  function animateColor$lambda_1($this) {
    return function () {
      return $this.get_targetState_kri3mx_k$();
    };
  }
  function animateColor$lambda_2($this) {
    return function () {
      return $this.get_segment_xwnoei_k$();
    };
  }
  function get_platformFlingScrollFriction() {
    return platformFlingScrollFriction;
  }
  var platformFlingScrollFriction;
  function rememberSplineBasedDecay($composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    var density = $composer_1.consume_ebzcrh_k$(this_0);
    var tmp1_remember$arg$0 = density.get_density_qy0267_k$();
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.changed_i8bvic_k$(tmp1_remember$arg$0);
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value = generateDecayAnimationSpec(new SplineBasedFloatDecayAnimationSpec(density));
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    return tmp;
  }
  function NoOp() {
  }
  protoOf(NoOp).equals = function (other) {
    if (!(other instanceof NoOp))
      return false;
    other instanceof NoOp || THROW_CCE();
    return true;
  };
  protoOf(NoOp).hashCode = function () {
    return 0;
  };
  protoOf(NoOp).toString = function () {
    return '@androidx.compose.animation.internal.NoOp(' + ')';
  };
  //region block: post-declaration
  protoOf(AnimatedVisibilityScopeImpl).animateEnterExit_z97dqu_k$ = animateEnterExit;
  protoOf(AnimatedVisibilityScopeImpl).animateEnterExit$default_4f8dik_k$ = animateEnterExit$default;
  protoOf(VeilModifierNode).onMeasureResultChanged_ipbzyg_k$ = onMeasureResultChanged;
  protoOf(EnterExitTransitionModifierNode).onRemeasured_izdx67_k$ = onRemeasured;
  protoOf(RenderInTransitionOverlayNode).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth;
  protoOf(RenderInTransitionOverlayNode).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight;
  protoOf(RenderInTransitionOverlayNode).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth;
  protoOf(RenderInTransitionOverlayNode).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight;
  protoOf(RenderInTransitionOverlayNode).onMeasureResultChanged_ipbzyg_k$ = onMeasureResultChanged;
  protoOf(RenderInTransitionOverlayNode).get_providedValues_crrbpu_k$ = get_providedValues;
  protoOf(RenderInTransitionOverlayNode).provide_fhfib2_k$ = provide;
  protoOf(RenderInTransitionOverlayNode).get_current_2exe6q_k$ = get_current;
  protoOf(SharedBoundsNode).isPlacementApproachInProgress_3haoks_k$ = isPlacementApproachInProgress;
  protoOf(SharedBoundsNode).minApproachIntrinsicWidth_kl18vr_k$ = minApproachIntrinsicWidth;
  protoOf(SharedBoundsNode).minApproachIntrinsicHeight_ophp8g_k$ = minApproachIntrinsicHeight;
  protoOf(SharedBoundsNode).maxApproachIntrinsicWidth_haaviz_k$ = maxApproachIntrinsicWidth;
  protoOf(SharedBoundsNode).maxApproachIntrinsicHeight_cs57u6_k$ = maxApproachIntrinsicHeight;
  protoOf(SharedBoundsNode).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth;
  protoOf(SharedBoundsNode).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight;
  protoOf(SharedBoundsNode).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth;
  protoOf(SharedBoundsNode).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight;
  protoOf(SharedBoundsNode).onMeasureResultChanged_ipbzyg_k$ = onMeasureResultChanged;
  protoOf(SharedBoundsNode).provide_fhfib2_k$ = provide;
  protoOf(SharedBoundsNode).get_current_2exe6q_k$ = get_current;
  protoOf(SharedTransitionScope$SharedContentConfig$1).get_isEnabled_6836ux_k$ = get_isEnabled;
  protoOf(SharedTransitionScope$SharedContentConfig$1).get_shouldKeepEnabledForOngoingAnimation_t2umwi_k$ = get_shouldKeepEnabledForOngoingAnimation;
  protoOf(SharedTransitionScope$SharedContentConfig$1).alternativeTargetBoundsInTransitionScopeAfterRemoval_b74dnl_k$ = alternativeTargetBoundsInTransitionScopeAfterRemoval;
  protoOf(SharedTransitionScopeImpl).skipToLookaheadSize$default_xnca0i_k$ = skipToLookaheadSize$default;
  protoOf(SharedTransitionScopeImpl).renderInSharedTransitionScopeOverlay$default_29ersv_k$ = renderInSharedTransitionScopeOverlay$default;
  protoOf(SharedTransitionScopeImpl).sharedElement$default_ilu2lb_k$ = sharedElement$default;
  protoOf(SharedTransitionScopeImpl).sharedBounds$default_jahwwo_k$ = sharedBounds$default;
  protoOf(SharedTransitionScopeImpl).sharedElementWithCallerManagedVisibility$default_50uk43_k$ = sharedElementWithCallerManagedVisibility$default;
  protoOf(SharedTransitionScopeImpl).localLookaheadPositionOf$default_10xwp7_k$ = localLookaheadPositionOf$default;
  protoOf(SharedTransitionScopeImpl).skipToLookaheadPosition_gd5pgr_k$ = skipToLookaheadPosition;
  protoOf(SharedTransitionScopeImpl).skipToLookaheadPosition$default_v1ktei_k$ = skipToLookaheadPosition$default;
  protoOf(SharedTransitionScopeImpl).rememberSharedContentState_92w4g5_k$ = rememberSharedContentState;
  protoOf(SharedTransitionScopeImpl).rememberSharedContentState_z7zs23_k$ = rememberSharedContentState_0;
  protoOf(SharedTransitionScopeImpl).makeSharedContentConfig = makeSharedContentConfig;
  protoOf(SharedTransitionScopeImpl).SharedContentConfig_py9tqn_k$ = SharedContentConfig;
  protoOf(SharedContentConfig_1).get_isEnabled_6836ux_k$ = get_isEnabled;
  protoOf(SharedContentConfig_1).get_shouldKeepEnabledForOngoingAnimation_t2umwi_k$ = get_shouldKeepEnabledForOngoingAnimation;
  protoOf(SharedContentConfig_1).get_permitTransformDuringDeferredTransition_6q9ytf_k$ = get_permitTransformDuringDeferredTransition;
  protoOf(SharedContentConfig_1).alternativeTargetBoundsInTransitionScopeAfterRemoval_b74dnl_k$ = alternativeTargetBoundsInTransitionScopeAfterRemoval;
  protoOf(CachedSharedContentConfig).get_isEnabled_6836ux_k$ = get_isEnabled;
  protoOf(CachedSharedContentConfig).get_shouldKeepEnabledForOngoingAnimation_t2umwi_k$ = get_shouldKeepEnabledForOngoingAnimation;
  protoOf(CachedSharedContentConfig).get_permitTransformDuringDeferredTransition_6q9ytf_k$ = get_permitTransformDuringDeferredTransition;
  protoOf(CachedSharedContentConfig).alternativeTargetBoundsInTransitionScopeAfterRemoval_b74dnl_k$ = alternativeTargetBoundsInTransitionScopeAfterRemoval;
  //endregion
  //region block: init
  androidx_compose_animation_AnimatedVisibilityScopeImpl$stable = 8;
  isLookaheadAnimationVisualDebuggingEnabledDefault = true;
  isLookaheadAnimationVisualDebuggingForceEnabled = false;
  androidx_compose_animation_LookaheadAnimationVisualDebugConfig$stable = 0;
  androidx_compose_animation_RenderInTransitionOverlayNodeElement$stable = 0;
  androidx_compose_animation_RenderInTransitionOverlayNode$stable = 8;
  androidx_compose_animation_SharedElementEntry$stable = 8;
  androidx_compose_animation_SharedTransitionStateMachine_State$stable = 0;
  androidx_compose_animation_SharedTransitionStateMachine$stable = 8;
  androidx_compose_animation_NoMatchFound$stable = 0;
  androidx_compose_animation_ActiveMatchFoundConfigPending$stable = 8;
  androidx_compose_animation_MatchIsOrHasBeenConfigured$stable = 0;
  androidx_compose_animation_ActiveMatchConfigured$stable = 0;
  androidx_compose_animation_ActiveMatchRemovedDuringTransition$stable = 8;
  androidx_compose_animation_TargetData$stable = 0;
  androidx_compose_animation_AndroidFlingSpline_FlingResult$stable = 0;
  androidx_compose_animation_AndroidFlingSpline$stable = 8;
  androidx_compose_animation_SplineBasedFloatDecayAnimationSpec$stable = 0;
  platformFlingScrollFriction = 0.015;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AnimatedVisibility;
  _.$_$.b = AnimatedVisibility_0;
  _.$_$.c = SplineBasedFloatDecayAnimationSpec;
  _.$_$.d = get_VectorConverter_4;
  _.$_$.e = animateColorAsState;
  _.$_$.f = expandHorizontally;
  _.$_$.g = expandVertically;
  _.$_$.h = fadeIn;
  _.$_$.i = fadeOut;
  _.$_$.j = rememberSplineBasedDecay;
  _.$_$.k = shrinkHorizontally;
  _.$_$.l = shrinkVertically;
  _.$_$.m = splineBasedDecay;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-animation-animation.js.map
