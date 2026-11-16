(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './androidx-collection-collection.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./androidx-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    globalThis['compose-multiplatform-core-compose-animation-animation-core'] = factory(typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['androidx-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_androidx_collection_collection, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var hypot = Math.hypot;
  var equals = kotlin_kotlin.$_$.xf;
  var Unit_getInstance = kotlin_kotlin.$_$.n3;
  var VOID = kotlin_kotlin.$_$.e;
  var protoOf = kotlin_kotlin.$_$.ih;
  var objectCreate = kotlin_kotlin.$_$.hh;
  var KMutableProperty1 = kotlin_kotlin.$_$.ti;
  var getPropertyCallableRef = kotlin_kotlin.$_$.dg;
  var coerceIn = kotlin_kotlin.$_$.ei;
  var Long = kotlin_kotlin.$_$.am;
  var constructCallableReference = kotlin_kotlin.$_$.tf;
  var CoroutineImpl = kotlin_kotlin.$_$.zd;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.jd;
  var CancellationException = kotlin_kotlin.$_$.id;
  var initMetadataForLambda = kotlin_kotlin.$_$.lg;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.o2;
  var THROW_CCE = kotlin_kotlin.$_$.hm;
  var toString = kotlin_kotlin.$_$.lh;
  var initMetadataForClass = kotlin_kotlin.$_$.gg;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.v2;
  var SuspendFunction0 = kotlin_kotlin.$_$.ae;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k4;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var Companion_getInstance_0 = kotlin_androidx_compose_runtime_runtime.$_$.i3;
  var rememberUpdatedState = kotlin_androidx_compose_runtime_runtime.$_$.t2;
  var Channel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var SideEffect = kotlin_androidx_compose_runtime_runtime.$_$.p1;
  var LaunchedEffect = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var KProperty0 = kotlin_kotlin.$_$.ui;
  var getLocalDelegateReference = kotlin_kotlin.$_$.bg;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var isInterface = kotlin_kotlin.$_$.vg;
  var ChannelResult__getOrNull_impl_f5e07h = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p2;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.w2;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n4;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p4;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var SuspendFunction1 = kotlin_kotlin.$_$.be;
  var isNaN_0 = kotlin_kotlin.$_$.dn;
  var compare = kotlin_kotlin.$_$.pe;
  var toString_0 = kotlin_kotlin.$_$.tn;
  var initMetadataForInterface = kotlin_kotlin.$_$.kg;
  var divide = kotlin_kotlin.$_$.se;
  var THROW_IAE = kotlin_kotlin.$_$.im;
  var enumEntries = kotlin_kotlin.$_$.ge;
  var Enum = kotlin_kotlin.$_$.ul;
  var hashCode = kotlin_kotlin.$_$.fg;
  var getNumberHashCode = kotlin_kotlin.$_$.cg;
  var equalsLong = kotlin_kotlin.$_$.te;
  var add = kotlin_kotlin.$_$.le;
  var subtract = kotlin_kotlin.$_$.ef;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a5;
  var intListOf = kotlin_androidx_collection_collection.$_$.c1;
  var emptyIntObjectMap = kotlin_androidx_collection_collection.$_$.v;
  var fromInt = kotlin_kotlin.$_$.ue;
  var convertToInt = kotlin_kotlin.$_$.qe;
  var abs = kotlin_kotlin.$_$.mh;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.hn;
  var roundToInt = kotlin_kotlin.$_$.oh;
  var MutableIntList = kotlin_androidx_collection_collection.$_$.h;
  var MutableIntObjectMap = kotlin_androidx_collection_collection.$_$.i;
  var invert = kotlin_kotlin.$_$.ve;
  var shiftLeft = kotlin_kotlin.$_$.bf;
  var bitwiseAnd = kotlin_kotlin.$_$.me;
  var shiftRight = kotlin_kotlin.$_$.df;
  var Pair = kotlin_kotlin.$_$.em;
  var initMetadataForCompanion = kotlin_kotlin.$_$.hg;
  var mutableIntObjectMapOf = kotlin_androidx_collection_collection.$_$.j1;
  var to = kotlin_kotlin.$_$.un;
  var State = kotlin_androidx_compose_runtime_runtime.$_$.s1;
  var numberToInt = kotlin_kotlin.$_$.gh;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ie;
  var computeCubicVerticalBounds = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.z1;
  var _FloatFloatPair___get_packedValue__impl__5lczxp = kotlin_androidx_collection_collection.$_$.w1;
  var floatFromBits = kotlin_kotlin.$_$.zf;
  var findFirstCubicRoot = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d2;
  var evaluateCubic = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c2;
  var FunctionAdapter = kotlin_kotlin.$_$.gf;
  var Annotation = kotlin_kotlin.$_$.ml;
  var numberToLong = kotlin_kotlin.$_$.af;
  var multiply = kotlin_kotlin.$_$.ye;
  var toNumber = kotlin_kotlin.$_$.ff;
  var withFrameNanos = kotlin_androidx_compose_runtime_runtime.$_$.l3;
  var Key_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.qc;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ig;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.h4;
  var Key_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var ensureNotNull = kotlin_kotlin.$_$.an;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var captureStack = kotlin_kotlin.$_$.lf;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g5;
  var toRawBits = kotlin_kotlin.$_$.sn;
  var isNaN_1 = kotlin_kotlin.$_$.en;
  var toRawBits_0 = kotlin_kotlin.$_$.rn;
  var bitwiseOr = kotlin_kotlin.$_$.ne;
  var Key_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.uc;
  var mutableFloatStateOf = kotlin_androidx_compose_runtime_runtime.$_$.i2;
  var mutableLongStateOf = kotlin_androidx_compose_runtime_runtime.$_$.k2;
  var roundToLong = kotlin_kotlin.$_$.ph;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.r2;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n2;
  var DisposableEffectResult = kotlin_androidx_compose_runtime_runtime.$_$.a1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.c3;
  var mutableStateListOf = kotlin_androidx_compose_runtime_runtime.$_$.m2;
  var derivedStateOf = kotlin_androidx_compose_runtime_runtime.$_$.e2;
  var KProperty1 = kotlin_kotlin.$_$.vi;
  var createCompositionCoroutineScope = kotlin_androidx_compose_runtime_runtime.$_$.z1;
  var DisposableEffect = kotlin_androidx_compose_runtime_runtime.$_$.b1;
  var DisposableEffect_0 = kotlin_androidx_compose_runtime_runtime.$_$.c1;
  var Companion_getInstance_6 = kotlin_androidx_compose_runtime_runtime.$_$.g3;
  var until = kotlin_kotlin.$_$.mi;
  var fill = kotlin_kotlin.$_$.y9;
  var intercepted = kotlin_kotlin.$_$.ld;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var returnIfSuspended = kotlin_kotlin.$_$.o3;
  var MutableObjectList = kotlin_androidx_collection_collection.$_$.p;
  var LaunchedEffect_0 = kotlin_androidx_compose_runtime_runtime.$_$.g1;
  var SnapshotStateObserver = kotlin_androidx_compose_runtime_runtime.$_$.g;
  var Companion_getInstance_7 = kotlin_kotlin.$_$.i3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.x;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var _DpOffset___get_x__impl__uauqb5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var _DpOffset___get_y__impl__1h898y = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a3;
  var _DpOffset___init__impl__yq36wy = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var DpOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var _Size___init__impl__aywn0g = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a1;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.u;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j3;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var _IntOffset___init__impl__rq8h7b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d3;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n3;
  var _IntSize___init__impl__emcjft = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l3;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var initMetadataForObject = kotlin_kotlin.$_$.mg;
  var modulo = kotlin_kotlin.$_$.xe;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l4;
  var mapOf = kotlin_kotlin.$_$.fb;
  var compareTo = kotlin_kotlin.$_$.sf;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.i5;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.g4;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(Animatable$runAnimation$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Animatable$snapTo$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Animatable$stop$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(Animatable, 'Animatable', VOID, VOID, VOID, [4, 3, 1, 0]);
  initMetadataForClass(AnimationResult, 'AnimationResult');
  initMetadataForLambda(animateValueAsState$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(animateValueAsState$slambda, CoroutineImpl, VOID, [1]);
  function isFinishedFromNanos(playTimeNanos) {
    return compare(playTimeNanos, this.get_durationNanos_ub5cy_k$()) >= 0;
  }
  initMetadataForInterface(Animation, 'Animation');
  initMetadataForClass(TargetBasedAnimation, 'TargetBasedAnimation', VOID, VOID, [Animation]);
  initMetadataForClass(DecayAnimation, 'DecayAnimation', VOID, VOID, [Animation]);
  initMetadataForClass(AnimationEndReason, 'AnimationEndReason', VOID, Enum);
  initMetadataForInterface(AnimationSpec, 'AnimationSpec');
  initMetadataForInterface(FiniteAnimationSpec, 'FiniteAnimationSpec', VOID, VOID, [AnimationSpec]);
  initMetadataForClass(SpringSpec, 'SpringSpec', SpringSpec, VOID, [FiniteAnimationSpec]);
  initMetadataForInterface(DurationBasedAnimationSpec, 'DurationBasedAnimationSpec', VOID, VOID, [FiniteAnimationSpec]);
  initMetadataForClass(TweenSpec, 'TweenSpec', TweenSpec, VOID, [DurationBasedAnimationSpec]);
  initMetadataForClass(SnapSpec, 'SnapSpec', SnapSpec, VOID, [DurationBasedAnimationSpec]);
  initMetadataForClass(StartDelayAnimationSpec, 'StartDelayAnimationSpec', VOID, VOID, [AnimationSpec]);
  function getEndVelocity(initialValue, targetValue, initialVelocity) {
    return this.getVelocityFromNanos_wafrjo_k$(this.getDurationNanos_c9o343_k$(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  initMetadataForInterface(VectorizedAnimationSpec, 'VectorizedAnimationSpec');
  initMetadataForClass(StartDelayVectorizedAnimationSpec, 'StartDelayVectorizedAnimationSpec', VOID, VOID, [VectorizedAnimationSpec]);
  initMetadataForClass(InfiniteRepeatableSpec, 'InfiniteRepeatableSpec', VOID, VOID, [AnimationSpec]);
  initMetadataForClass(RepeatMode, 'RepeatMode', VOID, Enum);
  initMetadataForClass(ArcAnimationSpec, 'ArcAnimationSpec', ArcAnimationSpec, VOID, [DurationBasedAnimationSpec]);
  initMetadataForClass(StartOffset, 'StartOffset');
  initMetadataForClass(KeyframesSpecBaseConfig, 'KeyframesSpecBaseConfig');
  initMetadataForClass(KeyframesSpecConfig, 'KeyframesSpecConfig', KeyframesSpecConfig, KeyframesSpecBaseConfig);
  initMetadataForClass(KeyframeBaseEntity, 'KeyframeBaseEntity');
  initMetadataForClass(KeyframeEntity, 'KeyframeEntity', VOID, KeyframeBaseEntity);
  initMetadataForClass(KeyframesSpec, 'KeyframesSpec', VOID, VOID, [DurationBasedAnimationSpec]);
  initMetadataForClass(KeyframesWithSplineSpecConfig, 'KeyframesWithSplineSpecConfig', KeyframesWithSplineSpecConfig, KeyframesSpecBaseConfig);
  initMetadataForClass(KeyframesWithSplineSpec, 'KeyframesWithSplineSpec', VOID, VOID, [DurationBasedAnimationSpec]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(StartOffsetType, 'StartOffsetType');
  initMetadataForClass(AnimationState, 'AnimationState', VOID, VOID, [State]);
  initMetadataForClass(AnimationScope, 'AnimationScope');
  initMetadataForClass(AnimationVector, 'AnimationVector');
  initMetadataForClass(AnimationVector1D, 'AnimationVector1D', VOID, AnimationVector);
  initMetadataForClass(AnimationVector4D, 'AnimationVector4D', VOID, AnimationVector);
  initMetadataForClass(AnimationVector2D, 'AnimationVector2D', VOID, AnimationVector);
  initMetadataForClass(AnimationVector3D, 'AnimationVector3D', VOID, AnimationVector);
  initMetadataForClass(Arc, 'Arc');
  initMetadataForClass(ArcSpline, 'ArcSpline');
  initMetadataForInterface(DecayAnimationSpec, 'DecayAnimationSpec');
  initMetadataForClass(DecayAnimationSpecImpl, 'DecayAnimationSpecImpl', VOID, VOID, [DecayAnimationSpec]);
  initMetadataForInterface(VectorizedDecayAnimationSpec, 'VectorizedDecayAnimationSpec');
  initMetadataForClass(VectorizedFloatDecaySpec, 'VectorizedFloatDecaySpec', VOID, VOID, [VectorizedDecayAnimationSpec]);
  initMetadataForInterface(Easing, 'Easing');
  initMetadataForClass(CubicBezierEasing, 'CubicBezierEasing', VOID, VOID, [Easing]);
  initMetadataForClass(sam$androidx_compose_animation_core_Easing$0, 'sam$androidx_compose_animation_core_Easing$0', VOID, VOID, [Easing, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_animation_core_Easing$0_0, 'sam$androidx_compose_animation_core_Easing$0', VOID, VOID, [Easing, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_animation_core_Easing$0_1, 'sam$androidx_compose_animation_core_Easing$0', VOID, VOID, [Easing, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_animation_core_Easing$0_2, 'sam$androidx_compose_animation_core_Easing$0', VOID, VOID, [Easing, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_animation_core_Easing$0_3, 'sam$androidx_compose_animation_core_Easing$0', VOID, VOID, [Easing, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_animation_core_Easing$0_4, 'sam$androidx_compose_animation_core_Easing$0', VOID, VOID, [Easing, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_animation_core_Easing$0_5, 'sam$androidx_compose_animation_core_Easing$0', VOID, VOID, [Easing, FunctionAdapter]);
  initMetadataForClass(ExperimentalAnimationSpecApi, 'ExperimentalAnimationSpecApi', VOID, VOID, [Annotation]);
  initMetadataForClass(ExperimentalDeferredTransitionApi, 'ExperimentalDeferredTransitionApi', VOID, VOID, [Annotation]);
  initMetadataForClass(ExperimentalTransitionApi, 'ExperimentalTransitionApi', VOID, VOID, [Annotation]);
  function getEndVelocity_0(initialValue, targetValue, initialVelocity) {
    return this.getVelocityFromNanos_d1b1ck_k$(this.getDurationNanos_taoclf_k$(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  function vectorize(converter) {
    return VectorizedFloatAnimationSpec_init_$Create$(this);
  }
  function vectorize_0(converter) {
    return this.vectorize_7dxvko_k$(converter);
  }
  initMetadataForInterface(FloatAnimationSpec, 'FloatAnimationSpec', VOID, VOID, [AnimationSpec]);
  initMetadataForClass(FloatTweenSpec, 'FloatTweenSpec', FloatTweenSpec, VOID, [FloatAnimationSpec]);
  initMetadataForClass(FloatSpringSpec, 'FloatSpringSpec', FloatSpringSpec, VOID, [FloatAnimationSpec]);
  initMetadataForInterface(FloatDecayAnimationSpec, 'FloatDecayAnimationSpec');
  initMetadataForClass(FloatExponentialDecaySpec, 'FloatExponentialDecaySpec', FloatExponentialDecaySpec, VOID, [FloatDecayAnimationSpec]);
  initMetadataForLambda(withInfiniteAnimationFrameNanos$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($withInfiniteAnimationFrameNanosCOROUTINE$, CoroutineImpl);
  initMetadataForClass(InternalAnimationApi, 'InternalAnimationApi', VOID, VOID, [Annotation]);
  initMetadataForClass(Mutator, 'Mutator');
  initMetadataForLambda(MutatorMutex$mutate$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(MutatorMutex$mutateWith$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(MutatorMutex, 'MutatorMutex', MutatorMutex, VOID, VOID, [2, 3]);
  initMetadataForClass(MutatePriority, 'MutatePriority', VOID, Enum);
  initMetadataForClass(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', VOID, CancellationException);
  initMetadataForClass(MutationInterruptedException, 'MutationInterruptedException', MutationInterruptedException, PlatformOptimizedCancellationException);
  initMetadataForClass(MonoSpline, 'MonoSpline');
  initMetadataForClass(SpringSimulation, 'SpringSimulation');
  initMetadataForClass(Motion, 'Motion');
  initMetadataForCoroutine($animateCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($callWithFrameNanosCOROUTINE$, CoroutineImpl);
  initMetadataForClass(DeferredAnimationData, 'DeferredAnimationData', VOID, VOID, [State]);
  initMetadataForClass(TransitionAnimationState, 'TransitionAnimationState', VOID, VOID, [State]);
  function isTransitioningTo(_this__u8e3s4, targetState) {
    return equals(_this__u8e3s4, this.get_initialState_2eu9l6_k$()) && equals(targetState, this.get_targetState_kri3mx_k$());
  }
  initMetadataForInterface(Segment, 'Segment');
  initMetadataForClass(SegmentImpl, 'SegmentImpl', VOID, VOID, [Segment]);
  initMetadataForClass(DeferredAnimation, 'DeferredAnimation');
  initMetadataForLambda(Transition$animateTo$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(Transition$animateTo$$inlined$cache$1$2, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(Transition, 'Transition');
  initMetadataForLambda(SeekableTransitionState$seekTo$slambda$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(SeekableTransitionState$seekTo$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(SeekableTransitionState$animateTo$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SeekingAnimationState, 'SeekingAnimationState', SeekingAnimationState);
  initMetadataForCompanion(Companion_0);
  initMetadataForLambda(SeekableTransitionState$snapTo$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(SeekableTransitionState$seekTo$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(SeekableTransitionState$animateTo$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($runAnimationsCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($doOneFrameCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($animateOneFrameCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($waitForCompositionAfterTargetStateChangeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($waitForCompositionCOROUTINE$, CoroutineImpl);
  initMetadataForClass(TransitionState, 'TransitionState');
  initMetadataForClass(SeekableTransitionState, 'SeekableTransitionState', VOID, TransitionState, VOID, [0, 1, 2]);
  initMetadataForClass(MutableTransitionState, 'MutableTransitionState', VOID, TransitionState);
  initMetadataForClass(DeferredTransitionState, 'DeferredTransitionState', VOID, TransitionState);
  initMetadataForClass(TransitionInstance, 'TransitionInstance', VOID, Transition);
  initMetadataForClass(DeferredTransition, 'DeferredTransition', VOID, Transition);
  initMetadataForClass(updateTransition$$inlined$cache$1$1, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(createTransitionAnimation$$inlined$cache$1$1, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(createDeferredAnimation$$inlined$cache$1$1, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForLambda(rememberTransition$lambda$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(rememberTransition$$inlined$cache$1$2, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForLambda(rememberTransition$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(rememberTransition$$inlined$cache$3$1, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForClass(createChildTransitionInternal$$inlined$cache$1$1, VOID, VOID, VOID, [DisposableEffectResult]);
  initMetadataForInterface(TwoWayConverter, 'TwoWayConverter');
  initMetadataForClass(TwoWayConverterImpl, 'TwoWayConverterImpl', VOID, VOID, [TwoWayConverter]);
  function get_isInfinite() {
    return false;
  }
  initMetadataForInterface(VectorizedFiniteAnimationSpec, 'VectorizedFiniteAnimationSpec', VOID, VOID, [VectorizedAnimationSpec]);
  initMetadataForClass(VectorizedSpringSpec, 'VectorizedSpringSpec', VectorizedSpringSpec_init_$Create$, VOID, [VectorizedFiniteAnimationSpec]);
  function getDurationNanos(initialValue, targetValue, initialVelocity) {
    return multiply(numberToLong(this.get_delayMillis_d968n4_k$() + this.get_durationMillis_pqx05f_k$() | 0), new Long(1000000, 0));
  }
  initMetadataForInterface(VectorizedDurationBasedAnimationSpec, 'VectorizedDurationBasedAnimationSpec', VOID, VOID, [VectorizedFiniteAnimationSpec]);
  initMetadataForClass(VectorizedTweenSpec, 'VectorizedTweenSpec', VectorizedTweenSpec, VOID, [VectorizedDurationBasedAnimationSpec]);
  initMetadataForClass(VectorizedSnapSpec, 'VectorizedSnapSpec', VectorizedSnapSpec, VOID, [VectorizedDurationBasedAnimationSpec]);
  initMetadataForInterface(Animations, 'Animations');
  initMetadataForClass(VectorizedFloatAnimationSpec$1, VOID, VOID, VOID, [Animations]);
  initMetadataForClass(VectorizedFloatAnimationSpec, 'VectorizedFloatAnimationSpec', VOID, VOID, [VectorizedFiniteAnimationSpec]);
  initMetadataForObject(DefaultSpringAnimations, 'DefaultSpringAnimations', VOID, VOID, [Animations]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(ArcMode, 'ArcMode');
  initMetadataForClass(VectorizedInfiniteRepeatableSpec, 'VectorizedInfiniteRepeatableSpec', VOID, VOID, [VectorizedAnimationSpec]);
  initMetadataForClass(VectorizedKeyframesSpec, 'VectorizedKeyframesSpec', VOID, VOID, [VectorizedDurationBasedAnimationSpec]);
  initMetadataForClass(VectorizedKeyframeSpecElementInfo, 'VectorizedKeyframeSpecElementInfo');
  initMetadataForClass(createSpringAnimations$1, VOID, VOID, VOID, [Animations]);
  initMetadataForClass(createSpringAnimations$2, VOID, VOID, VOID, [Animations]);
  initMetadataForClass(VectorizedMonoSplineKeyframesSpec, 'VectorizedMonoSplineKeyframesSpec', VOID, VOID, [VectorizedDurationBasedAnimationSpec]);
  initMetadataForClass(AtomicReference, 'AtomicReference');
  initMetadataForClass(NoOp, 'NoOp', VOID, VOID, [Annotation]);
  //endregion
  function get_positiveInfinityBounds1D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds1D;
  }
  var positiveInfinityBounds1D;
  function get_positiveInfinityBounds2D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds2D;
  }
  var positiveInfinityBounds2D;
  function get_positiveInfinityBounds3D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds3D;
  }
  var positiveInfinityBounds3D;
  function get_positiveInfinityBounds4D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds4D;
  }
  var positiveInfinityBounds4D;
  function get_negativeInfinityBounds1D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds1D;
  }
  var negativeInfinityBounds1D;
  function get_negativeInfinityBounds2D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds2D;
  }
  var negativeInfinityBounds2D;
  function get_negativeInfinityBounds3D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds3D;
  }
  var negativeInfinityBounds3D;
  function get_negativeInfinityBounds4D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds4D;
  }
  var negativeInfinityBounds4D;
  var androidx_compose_animation_core_Animatable$stable;
  var androidx_compose_animation_core_AnimationResult$stable;
  function Animatable$runAnimation$slambda$lambda(this$0, $endState, $block, $clampingNeeded) {
    return function ($this$animate) {
      updateState($this$animate, this$0.internalState_1);
      var clamped = clampToBounds(this$0, $this$animate.get_value_j01efc_k$());
      if (!equals(clamped, $this$animate.get_value_j01efc_k$())) {
        this$0.internalState_1.set_value_w62xiq_k$(clamped);
        $endState.set_value_w62xiq_k$(clamped);
        var tmp0_safe_receiver = $block;
        if (tmp0_safe_receiver == null)
          null;
        else
          tmp0_safe_receiver(this$0);
        $this$animate.cancelAnimation_ic0k2u_k$();
        $clampingNeeded._v = true;
      } else {
        var tmp1_safe_receiver = $block;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver(this$0);
      }
      return Unit_getInstance();
    };
  }
  function _get_visibilityThreshold__cvk72g($this) {
    return $this.visibilityThreshold_1;
  }
  function Animatable_init_$Init$(initialValue, typeConverter, visibilityThreshold, $this) {
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    Animatable.call($this, initialValue, typeConverter, visibilityThreshold, 'Animatable');
    return $this;
  }
  function Animatable_init_$Create$(initialValue, typeConverter, visibilityThreshold) {
    return Animatable_init_$Init$(initialValue, typeConverter, visibilityThreshold, objectCreate(protoOf(Animatable)));
  }
  function _set_isRunning__kpbg34($this, _set____db54di) {
    var tmp0 = $this.isRunning$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Animatable$_get_isRunning_$ref_121fnp_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isRunning', 1, tmp, tmp_0, Animatable$_set_isRunning_$ref_g9sy61_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_targetValue__aqsk0r($this, _set____db54di) {
    var tmp0 = $this.targetValue$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Animatable$_get_targetValue_$ref_gosum2_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('targetValue', 1, tmp, tmp_0, Animatable$_set_targetValue_$ref_6l2n3i_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_lowerBound__uvrjui($this, _set____db54di) {
    $this.lowerBound_1 = _set____db54di;
  }
  function _set_upperBound__ul6eat($this, _set____db54di) {
    $this.upperBound_1 = _set____db54di;
  }
  function _get_mutatorMutex__pkek4u($this) {
    return $this.mutatorMutex_1;
  }
  function _get_negativeInfinityBounds__4uptfr($this) {
    return $this.negativeInfinityBounds_1;
  }
  function _get_positiveInfinityBounds__srcx3f($this) {
    return $this.positiveInfinityBounds_1;
  }
  function _set_lowerBoundVector__diyl9z($this, _set____db54di) {
    $this.lowerBoundVector_1 = _set____db54di;
  }
  function _get_lowerBoundVector__sf17md($this) {
    return $this.lowerBoundVector_1;
  }
  function _set_upperBoundVector__vzmpnc($this, _set____db54di) {
    $this.upperBoundVector_1 = _set____db54di;
  }
  function _get_upperBoundVector__9yd390($this) {
    return $this.upperBoundVector_1;
  }
  function runAnimation($this, animation, initialVelocity, block, $completion) {
    var startTime = $this.internalState_1.get_lastFrameTimeNanos_3aprno_k$();
    return $this.mutatorMutex_1.mutate$default_f05kjn_k$(VOID, Animatable$runAnimation$slambda_0($this, initialVelocity, animation, startTime, block, null), $completion);
  }
  function clampToBounds($this, value) {
    if (equals($this.lowerBoundVector_1, $this.negativeInfinityBounds_1) && equals($this.upperBoundVector_1, $this.positiveInfinityBounds_1)) {
      return value;
    }
    var valueVector = $this.typeConverter_1.get_convertToVector_s594l4_k$()(value);
    var clamped = false;
    var inductionVariable = 0;
    var last = valueVector.get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (valueVector.get_jz2icb_k$(i) < $this.lowerBoundVector_1.get_jz2icb_k$(i) || valueVector.get_jz2icb_k$(i) > $this.upperBoundVector_1.get_jz2icb_k$(i)) {
          clamped = true;
          valueVector.set_ln2e3z_k$(i, coerceIn(valueVector.get_jz2icb_k$(i), $this.lowerBoundVector_1.get_jz2icb_k$(i), $this.upperBoundVector_1.get_jz2icb_k$(i)));
        }
      }
       while (inductionVariable < last);
    if (clamped) {
      return $this.typeConverter_1.get_convertFromVector_kmewon_k$()(valueVector);
    } else {
      return value;
    }
  }
  function endAnimation($this) {
    // Inline function 'kotlin.apply' call
    var this_0 = $this.internalState_1;
    this_0.get_velocityVector_v3jmo9_k$().reset_x7qqys_k$();
    this_0.set_lastFrameTimeNanos_lyzzef_k$(new Long(0, -2147483648));
    _set_isRunning__kpbg34($this, false);
  }
  function Animatable$_get_isRunning_$ref_121fnp() {
    return constructCallableReference(function (p0) {
      return p0.get_isRunning_okmtn0_k$();
    }, 1, 0, 'androidx.compose.animation.core/Animatable.isRunning.<get-isRunning>|<get-isRunning>(){}[0]');
  }
  function Animatable$_set_isRunning_$ref_g9sy61() {
    return constructCallableReference(function (p0, p1) {
      _set_isRunning__kpbg34(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Animatable.isRunning.<set-isRunning>|<set-isRunning>(kotlin.Boolean){}[0]');
  }
  function Animatable$_get_isRunning_$ref_121fnp_0() {
    return constructCallableReference(function (p0) {
      return p0.get_isRunning_okmtn0_k$();
    }, 1, 0, 'androidx.compose.animation.core/Animatable.isRunning.<get-isRunning>|<get-isRunning>(){}[0]');
  }
  function Animatable$_set_isRunning_$ref_g9sy61_0() {
    return constructCallableReference(function (p0, p1) {
      _set_isRunning__kpbg34(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Animatable.isRunning.<set-isRunning>|<set-isRunning>(kotlin.Boolean){}[0]');
  }
  function Animatable$_get_targetValue_$ref_gosum2() {
    return constructCallableReference(function (p0) {
      return p0.get_targetValue_kq6mfd_k$();
    }, 1, 0, 'androidx.compose.animation.core/Animatable.targetValue.<get-targetValue>|<get-targetValue>(){}[0]');
  }
  function Animatable$_set_targetValue_$ref_6l2n3i() {
    return constructCallableReference(function (p0, p1) {
      _set_targetValue__aqsk0r(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Animatable.targetValue.<set-targetValue>|<set-targetValue>(1:0){}[0]');
  }
  function Animatable$_get_targetValue_$ref_gosum2_0() {
    return constructCallableReference(function (p0) {
      return p0.get_targetValue_kq6mfd_k$();
    }, 1, 0, 'androidx.compose.animation.core/Animatable.targetValue.<get-targetValue>|<get-targetValue>(){}[0]');
  }
  function Animatable$_set_targetValue_$ref_6l2n3i_0() {
    return constructCallableReference(function (p0, p1) {
      _set_targetValue__aqsk0r(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Animatable.targetValue.<set-targetValue>|<set-targetValue>(1:0){}[0]');
  }
  function Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    this.this$0__1 = this$0;
    this.$initialVelocity_1 = $initialVelocity;
    this.$animation_1 = $animation;
    this.$startTime_1 = $startTime;
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$runAnimation$slambda).invoke_eiavl2_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Animatable$runAnimation$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_eiavl2_k$($completion);
  };
  protoOf(Animatable$runAnimation$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.this$0__1.internalState_1.set_velocityVector_tj9mci_k$(this.this$0__1.typeConverter_1.get_convertToVector_s594l4_k$()(this.$initialVelocity_1));
            _set_targetValue__aqsk0r(this.this$0__1, this.$animation_1.get_targetValue_kq6mfd_k$());
            _set_isRunning__kpbg34(this.this$0__1, true);
            this.endState1__1 = copy(this.this$0__1.internalState_1, VOID, VOID, VOID, new Long(0, -2147483648));
            this.clampingNeeded2__1 = {_v: false};
            this.set_state_rjd8d0_k$(1);
            suspendResult = animate(this.endState1__1, this.$animation_1, this.$startTime_1, Animatable$runAnimation$slambda$lambda(this.this$0__1, this.endState1__1, this.$block_1, this.clampingNeeded2__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var endReason = this.clampingNeeded2__1._v ? AnimationEndReason_BoundReached_getInstance() : AnimationEndReason_Finished_getInstance();
            endAnimation(this.this$0__1);
            this.TRY_RESULT0__1 = new AnimationResult(this.endState1__1, endReason);
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof CancellationException) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_1 = this;
              endAnimation(this.this$0__1);
              throw e;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return this.TRY_RESULT0__1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  protoOf(Animatable$runAnimation$slambda).create_d196fn_k$ = function (completion) {
    return new Animatable$runAnimation$slambda(this.this$0__1, this.$initialVelocity_1, this.$animation_1, this.$startTime_1, this.$block_1, completion);
  };
  function Animatable$runAnimation$slambda_0(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    var i = new Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation);
    return constructCallableReference(function ($completion) {
      return i.invoke_eiavl2_k$($completion);
    }, 0);
  }
  function Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation) {
    this.this$0__1 = this$0;
    this.$targetValue_1 = $targetValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$snapTo$slambda).invoke_h7udsx_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Animatable$snapTo$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_h7udsx_k$($completion);
  };
  protoOf(Animatable$snapTo$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          endAnimation(this.this$0__1);
          var clampedValue = clampToBounds(this.this$0__1, this.$targetValue_1);
          this.this$0__1.internalState_1.set_value_w62xiq_k$(clampedValue);
          _set_targetValue__aqsk0r(this.this$0__1, clampedValue);
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
  protoOf(Animatable$snapTo$slambda).create_d196fn_k$ = function (completion) {
    return new Animatable$snapTo$slambda(this.this$0__1, this.$targetValue_1, completion);
  };
  function Animatable$snapTo$slambda_0(this$0, $targetValue, resultContinuation) {
    var i = new Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation);
    return constructCallableReference(function ($completion) {
      return i.invoke_h7udsx_k$($completion);
    }, 0);
  }
  function Animatable$stop$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$stop$slambda).invoke_h7udsx_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Animatable$stop$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_h7udsx_k$($completion);
  };
  protoOf(Animatable$stop$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          endAnimation(this.this$0__1);
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
  protoOf(Animatable$stop$slambda).create_d196fn_k$ = function (completion) {
    return new Animatable$stop$slambda(this.this$0__1, completion);
  };
  function Animatable$stop$slambda_0(this$0, resultContinuation) {
    var i = new Animatable$stop$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($completion) {
      return i.invoke_h7udsx_k$($completion);
    }, 0);
  }
  function Animatable(initialValue, typeConverter, visibilityThreshold, label) {
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    label = label === VOID ? 'Animatable' : label;
    this.typeConverter_1 = typeConverter;
    this.visibilityThreshold_1 = visibilityThreshold;
    this.label_1 = label;
    this.internalState_1 = new AnimationState(this.typeConverter_1, initialValue);
    this.isRunning$delegate_1 = mutableStateOf(false);
    this.targetValue$delegate_1 = mutableStateOf(initialValue);
    this.lowerBound_1 = null;
    this.upperBound_1 = null;
    this.mutatorMutex_1 = new MutatorMutex();
    this.defaultSpringSpec_1 = new SpringSpec(VOID, VOID, this.visibilityThreshold_1);
    var tmp = this;
    var tmp0_subject = this.get_velocityVector_v3jmo9_k$();
    var tmp_0;
    if (tmp0_subject instanceof AnimationVector1D) {
      tmp_0 = get_negativeInfinityBounds1D();
    } else {
      if (tmp0_subject instanceof AnimationVector2D) {
        tmp_0 = get_negativeInfinityBounds2D();
      } else {
        if (tmp0_subject instanceof AnimationVector3D) {
          tmp_0 = get_negativeInfinityBounds3D();
        } else {
          tmp_0 = get_negativeInfinityBounds4D();
        }
      }
    }
    var tmp_1 = tmp_0;
    tmp.negativeInfinityBounds_1 = tmp_1 instanceof AnimationVector ? tmp_1 : THROW_CCE();
    var tmp_2 = this;
    var tmp0_subject_0 = this.get_velocityVector_v3jmo9_k$();
    var tmp_3;
    if (tmp0_subject_0 instanceof AnimationVector1D) {
      tmp_3 = get_positiveInfinityBounds1D();
    } else {
      if (tmp0_subject_0 instanceof AnimationVector2D) {
        tmp_3 = get_positiveInfinityBounds2D();
      } else {
        if (tmp0_subject_0 instanceof AnimationVector3D) {
          tmp_3 = get_positiveInfinityBounds3D();
        } else {
          tmp_3 = get_positiveInfinityBounds4D();
        }
      }
    }
    var tmp_4 = tmp_3;
    tmp_2.positiveInfinityBounds_1 = tmp_4 instanceof AnimationVector ? tmp_4 : THROW_CCE();
    this.lowerBoundVector_1 = this.negativeInfinityBounds_1;
    this.upperBoundVector_1 = this.positiveInfinityBounds_1;
  }
  protoOf(Animatable).get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  protoOf(Animatable).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  protoOf(Animatable).get_internalState_vquti0_k$ = function () {
    return this.internalState_1;
  };
  protoOf(Animatable).get_value_j01efc_k$ = function () {
    return this.internalState_1.get_value_j01efc_k$();
  };
  protoOf(Animatable).get_velocityVector_v3jmo9_k$ = function () {
    return this.internalState_1.get_velocityVector_v3jmo9_k$();
  };
  protoOf(Animatable).get_velocity_3hqvmu_k$ = function () {
    return this.typeConverter_1.get_convertFromVector_kmewon_k$()(this.get_velocityVector_v3jmo9_k$());
  };
  protoOf(Animatable).get_isRunning_okmtn0_k$ = function () {
    var tmp0 = this.isRunning$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Animatable$_get_isRunning_$ref_121fnp();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isRunning', 1, tmp, tmp_0, Animatable$_set_isRunning_$ref_g9sy61());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(Animatable).get_targetValue_kq6mfd_k$ = function () {
    var tmp0 = this.targetValue$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Animatable$_get_targetValue_$ref_gosum2();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('targetValue', 1, tmp, tmp_0, Animatable$_set_targetValue_$ref_6l2n3i());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(Animatable).get_lowerBound_br3ay_k$ = function () {
    return this.lowerBound_1;
  };
  protoOf(Animatable).get_upperBound_mw839h_k$ = function () {
    return this.upperBound_1;
  };
  protoOf(Animatable).get_defaultSpringSpec_9cgue5_k$ = function () {
    return this.defaultSpringSpec_1;
  };
  protoOf(Animatable).updateBounds_u6omq_k$ = function (lowerBound, upperBound) {
    var tmp;
    if (lowerBound == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      tmp = this.typeConverter_1.get_convertToVector_s594l4_k$()(lowerBound);
    }
    var tmp1_elvis_lhs = tmp;
    var lowerBoundVector = tmp1_elvis_lhs == null ? this.negativeInfinityBounds_1 : tmp1_elvis_lhs;
    var tmp_0;
    if (upperBound == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.run' call
      tmp_0 = this.typeConverter_1.get_convertToVector_s594l4_k$()(upperBound);
    }
    var tmp3_elvis_lhs = tmp_0;
    var upperBoundVector = tmp3_elvis_lhs == null ? this.positiveInfinityBounds_1 : tmp3_elvis_lhs;
    var inductionVariable = 0;
    var last = lowerBoundVector.get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.core.checkPrecondition' call
        if (!(lowerBoundVector.get_jz2icb_k$(i) <= upperBoundVector.get_jz2icb_k$(i))) {
          var tmp$ret$5 = 'Lower bound must be no greater than upper bound on *all* dimensions. The ' + ('provided lower bound: ' + toString(lowerBoundVector) + ' is greater than upper bound ') + (toString(upperBoundVector) + ' on index ' + i);
          throwIllegalStateException(tmp$ret$5);
        }
      }
       while (inductionVariable < last);
    this.lowerBoundVector_1 = lowerBoundVector;
    this.upperBoundVector_1 = upperBoundVector;
    this.upperBound_1 = upperBound;
    this.lowerBound_1 = lowerBound;
    if (!this.get_isRunning_okmtn0_k$()) {
      var clampedValue = clampToBounds(this, this.get_value_j01efc_k$());
      if (!equals(clampedValue, this.get_value_j01efc_k$())) {
        this.internalState_1.set_value_w62xiq_k$(clampedValue);
      }
    }
  };
  protoOf(Animatable).updateBounds$default_zfm6qs_k$ = function (lowerBound, upperBound, $super) {
    lowerBound = lowerBound === VOID ? this.lowerBound_1 : lowerBound;
    upperBound = upperBound === VOID ? this.upperBound_1 : upperBound;
    var tmp;
    if ($super === VOID) {
      this.updateBounds_u6omq_k$(lowerBound, upperBound);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.updateBounds_u6omq_k$.call(this, lowerBound, upperBound);
    }
    return tmp;
  };
  protoOf(Animatable).animateTo_z368sf_k$ = function (targetValue, animationSpec, initialVelocity, block, $completion) {
    var tmp0_initialValue = this.get_value_j01efc_k$();
    var tmp1_typeConverter = this.typeConverter_1;
    var anim = TargetBasedAnimation_0(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, initialVelocity);
    return runAnimation(this, anim, initialVelocity, block, $completion);
  };
  protoOf(Animatable).animateTo$default_71hueo_k$ = function (targetValue, animationSpec, initialVelocity, block, $completion, $super) {
    animationSpec = animationSpec === VOID ? this.defaultSpringSpec_1 : animationSpec;
    initialVelocity = initialVelocity === VOID ? this.get_velocity_3hqvmu_k$() : initialVelocity;
    block = block === VOID ? null : block;
    return $super === VOID ? this.animateTo_z368sf_k$(targetValue, animationSpec, initialVelocity, block, $completion) : $super.animateTo_z368sf_k$.call(this, targetValue, animationSpec, initialVelocity, block, $completion);
  };
  protoOf(Animatable).animateDecay_ic37kv_k$ = function (initialVelocity, animationSpec, block, $completion) {
    var tmp0_initialValue = this.get_value_j01efc_k$();
    var tmp1_initialVelocityVector = this.typeConverter_1.get_convertToVector_s594l4_k$()(initialVelocity);
    var tmp2_typeConverter = this.typeConverter_1;
    var anim = DecayAnimation_init_$Create$(animationSpec, tmp2_typeConverter, tmp0_initialValue, tmp1_initialVelocityVector);
    return runAnimation(this, anim, initialVelocity, block, $completion);
  };
  protoOf(Animatable).animateDecay$default_sr5ljs_k$ = function (initialVelocity, animationSpec, block, $completion, $super) {
    block = block === VOID ? null : block;
    return $super === VOID ? this.animateDecay_ic37kv_k$(initialVelocity, animationSpec, block, $completion) : $super.animateDecay_ic37kv_k$.call(this, initialVelocity, animationSpec, block, $completion);
  };
  protoOf(Animatable).snapTo_o5pd1b_k$ = function (targetValue, $completion) {
    return this.mutatorMutex_1.mutate$default_f05kjn_k$(VOID, Animatable$snapTo$slambda_0(this, targetValue, null), $completion);
  };
  protoOf(Animatable).stop_7piii3_k$ = function ($completion) {
    return this.mutatorMutex_1.mutate$default_f05kjn_k$(VOID, Animatable$stop$slambda_0(this, null), $completion);
  };
  protoOf(Animatable).asState_c4y001_k$ = function () {
    return this.internalState_1;
  };
  function Animatable_0(initialValue, visibilityThreshold) {
    visibilityThreshold = visibilityThreshold === VOID ? 0.01 : visibilityThreshold;
    _init_properties_Animatable_kt__f2hc5e();
    return new Animatable(initialValue, get_VectorConverter_0(FloatCompanionObject_getInstance()), visibilityThreshold);
  }
  function AnimationResult(endState, endReason) {
    this.endState_1 = endState;
    this.endReason_1 = endReason;
  }
  protoOf(AnimationResult).get_endState_3g6vgh_k$ = function () {
    return this.endState_1;
  };
  protoOf(AnimationResult).get_endReason_yf0h1y_k$ = function () {
    return this.endReason_1;
  };
  protoOf(AnimationResult).toString = function () {
    return 'AnimationResult(endReason=' + this.endReason_1.toString() + ', endState=' + this.endState_1.toString() + ')';
  };
  function androidx_compose_animation_core_Animatable$stableprop_getter() {
    return androidx_compose_animation_core_Animatable$stable;
  }
  var properties_initialized_Animatable_kt_s5cd7k;
  function _init_properties_Animatable_kt__f2hc5e() {
    if (!properties_initialized_Animatable_kt_s5cd7k) {
      properties_initialized_Animatable_kt_s5cd7k = true;
      positiveInfinityBounds1D = AnimationVector_0(Infinity);
      positiveInfinityBounds2D = AnimationVector_1(Infinity, Infinity);
      positiveInfinityBounds3D = AnimationVector_2(Infinity, Infinity, Infinity);
      positiveInfinityBounds4D = AnimationVector_3(Infinity, Infinity, Infinity, Infinity);
      negativeInfinityBounds1D = AnimationVector_0(-Infinity);
      negativeInfinityBounds2D = AnimationVector_1(-Infinity, -Infinity);
      negativeInfinityBounds3D = AnimationVector_2(-Infinity, -Infinity, -Infinity);
      negativeInfinityBounds4D = AnimationVector_3(-Infinity, -Infinity, -Infinity, -Infinity);
      androidx_compose_animation_core_Animatable$stable = 8;
      androidx_compose_animation_core_AnimationResult$stable = 0;
    }
  }
  function get_defaultAnimation() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return defaultAnimation;
  }
  var defaultAnimation;
  function get_dpDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return dpDefaultSpring;
  }
  var dpDefaultSpring;
  function get_sizeDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return sizeDefaultSpring;
  }
  var sizeDefaultSpring;
  function get_offsetDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return offsetDefaultSpring;
  }
  var offsetDefaultSpring;
  function get_rectDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return rectDefaultSpring;
  }
  var rectDefaultSpring;
  function get_intDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return intDefaultSpring;
  }
  var intDefaultSpring;
  function get_intOffsetDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return intOffsetDefaultSpring;
  }
  var intOffsetDefaultSpring;
  function get_intSizeDefaultSpring() {
    _init_properties_AnimateAsState_kt__7h7b9a();
    return intSizeDefaultSpring;
  }
  var intSizeDefaultSpring;
  function animateDpAsState(targetValue, animationSpec, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    if (!(($default & 2) === 0))
      animationSpec_0 = get_dpDefaultSpring();
    if (!(($default & 4) === 0))
      label_0 = 'DpAnimation';
    if (!(($default & 8) === 0))
      finishedListener_0 = null;
    var tmp = get_VectorConverter(Companion_getInstance());
    var tmp_0 = animationSpec_0;
    return animateValueAsState(new Dp(targetValue), tmp, tmp_0, null, label_0, finishedListener_0, $composer_0, 14 & $changed | 896 & $changed << 3 | 57344 & $changed << 6 | 458752 & $changed << 6, 8);
  }
  function animateFloatAsState(targetValue, animationSpec, visibilityThreshold, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var visibilityThreshold_0 = visibilityThreshold;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    if (!(($default & 2) === 0))
      animationSpec_0 = get_defaultAnimation();
    if (!(($default & 4) === 0))
      visibilityThreshold_0 = 0.01;
    if (!(($default & 8) === 0))
      label_0 = 'FloatAnimation';
    if (!(($default & 16) === 0))
      finishedListener_0 = null;
    var tmp;
    if (animationSpec_0 === get_defaultAnimation()) {
      $composer_0.startReplaceGroup_5hh8aj_k$(1144115775);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($changed & 896 ^ 384) > 256 && $composer_0.changed_i8bvic_k$(visibilityThreshold_0) || ($changed & 384) === 256;
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = spring(VOID, VOID, visibilityThreshold_0);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp1_group = tmp_0;
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp = tmp1_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(1144225701);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp = animationSpec_0;
    }
    var resolvedAnimSpec = tmp;
    return animateValueAsState(targetValue, get_VectorConverter_0(FloatCompanionObject_getInstance()), resolvedAnimSpec, visibilityThreshold_0 === 0.01 ? null : visibilityThreshold_0, label_0, finishedListener_0, $composer_0, 14 & $changed | 57344 & $changed << 3 | 458752 & $changed << 3, 0);
  }
  function animateValueAsState(targetValue, typeConverter, animationSpec, visibilityThreshold, label, finishedListener, $composer, $changed, $default) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    var animationSpec_0 = animationSpec;
    var visibilityThreshold_0 = visibilityThreshold;
    var label_0 = label;
    var finishedListener_0 = finishedListener;
    var $composer_0 = $composer;
    if (!(($default & 4) === 0)) {
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value = spring();
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      animationSpec_0 = tmp;
    }
    if (!(($default & 8) === 0))
      visibilityThreshold_0 = null;
    if (!(($default & 16) === 0))
      label_0 = 'ValueAnimation';
    if (!(($default & 32) === 0))
      finishedListener_0 = null;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_0;
    if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var value_0 = mutableStateOf(null);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_0 = value_0;
    } else {
      tmp_0 = it_0;
    }
    var toolingOverride = tmp_0;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_1 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var value_1 = new Animatable(targetValue, typeConverter, visibilityThreshold_0, label_0);
      $composer_0.updateRememberedValue_l1wh71_k$(value_1);
      tmp_1 = value_1;
    } else {
      tmp_1 = it_1;
    }
    var animatable = tmp_1;
    var listener$delegate = rememberUpdatedState(finishedListener_0, $composer_0, 14 & $changed >> 15);
    // Inline function 'kotlin.run' call
    var $this$run = animationSpec_0;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    if (!(visibilityThreshold_0 == null)) {
      tmp_4 = $this$run instanceof SpringSpec;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      tmp_3 = !equals($this$run.get_visibilityThreshold_qtbbow_k$(), visibilityThreshold_0);
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      tmp_2 = spring($this$run.get_dampingRatio_syjss2_k$(), $this$run.get_stiffness_dt2sgm_k$(), visibilityThreshold_0);
    } else {
      tmp_2 = $this$run;
    }
    var tmp$ret$12 = tmp_2;
    var animSpec$delegate = rememberUpdatedState(tmp$ret$12, $composer_0, 0);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_2 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_5;
    if (false || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var value_2 = Channel(-1);
      $composer_0.updateRememberedValue_l1wh71_k$(value_2);
      tmp_5 = value_2;
    } else {
      tmp_5 = it_2;
    }
    var channel = tmp_5;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.changedInstance_s1wkiy_k$(channel) | (($changed & 14 ^ 6) > 4 && $composer_0.changedInstance_s1wkiy_k$(targetValue) || ($changed & 6) === 4));
    // Inline function 'kotlin.let' call
    var it_3 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_6;
    if (invalid || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var value_3 = animateValueAsState$lambda_1(channel, targetValue);
      $composer_0.updateRememberedValue_l1wh71_k$(value_3);
      tmp_6 = value_3;
    } else {
      tmp_6 = it_3;
    }
    var tmp$ret$18 = tmp_6;
    SideEffect(tmp$ret$18, $composer_0, 0);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!(!!(!!($composer_0.changedInstance_s1wkiy_k$(channel) | $composer_0.changedInstance_s1wkiy_k$(animatable)) | $composer_0.changed_ga7h3f_k$(animSpec$delegate)) | $composer_0.changed_ga7h3f_k$(listener$delegate));
    // Inline function 'kotlin.let' call
    var it_4 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_7;
    if (invalid_0 || it_4 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var value_4 = animateValueAsState$slambda_0(channel, animatable, animSpec$delegate, listener$delegate, null);
      $composer_0.updateRememberedValue_l1wh71_k$(value_4);
      tmp_7 = value_4;
    } else {
      tmp_7 = it_4;
    }
    var tmp$ret$22 = tmp_7;
    LaunchedEffect(channel, tmp$ret$22, $composer_0, 0);
    var tmp0_elvis_lhs = toolingOverride.get_value_j01efc_k$();
    return tmp0_elvis_lhs == null ? animatable.asState_c4y001_k$() : tmp0_elvis_lhs;
  }
  function animateValueAsState$lambda($listener$delegate) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('listener', KProperty0, false);
    return $listener$delegate.get_value_j01efc_k$();
  }
  function animateValueAsState$lambda_0($animSpec$delegate) {
    _init_properties_AnimateAsState_kt__7h7b9a();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('animSpec', KProperty0, false);
    return $animSpec$delegate.get_value_j01efc_k$();
  }
  function animateValueAsState$lambda_1($channel, $targetValue) {
    return function () {
      $channel.trySend_62dpg8_k$($targetValue);
      return Unit_getInstance();
    };
  }
  function animateValueAsState$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.$newTarget_1 = $newTarget;
    this.$animatable_1 = $animatable;
    this.$animSpec$delegate_1 = $animSpec$delegate;
    this.$listener$delegate_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animateValueAsState$slambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(animateValueAsState$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animateValueAsState$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            if (!equals(this.$newTarget_1, this.$animatable_1.get_targetValue_kq6mfd_k$())) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = this.$animatable_1.animateTo$default_71hueo_k$(this.$newTarget_1, animateValueAsState$lambda_0(this.$animSpec$delegate_1), VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            var tmp0_safe_receiver = animateValueAsState$lambda(this.$listener$delegate_1);
            if (tmp0_safe_receiver == null)
              null;
            else
              tmp0_safe_receiver(this.$animatable_1.get_value_j01efc_k$());
            this.set_state_rjd8d0_k$(2);
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
  protoOf(animateValueAsState$slambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new animateValueAsState$slambda$slambda(this.$newTarget_1, this.$animatable_1, this.$animSpec$delegate_1, this.$listener$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(animateValueAsState$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function animateValueAsState$slambda$slambda_0($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$slambda$slambda($newTarget, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    }, 1);
  }
  function animateValueAsState$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    this.$channel_1 = $channel;
    this.$animatable_1 = $animatable;
    this.$animSpec$delegate_1 = $animSpec$delegate;
    this.$listener$delegate_1 = $listener$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(animateValueAsState$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(animateValueAsState$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(animateValueAsState$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this._iterator_0_yqohr0__1 = this.$channel_1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            suspendResult = this._iterator_0_yqohr0__1.hasNext_nhy1w3_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            var target = this._iterator_0_yqohr0__1.next_20eer_k$();
            var tmp0_elvis_lhs = ChannelResult__getOrNull_impl_f5e07h(this.$channel_1.tryReceive_y3ovg2_k$());
            var newTarget = tmp0_elvis_lhs == null ? target : tmp0_elvis_lhs;
            launch(this.$this$LaunchedEffect_1, VOID, VOID, animateValueAsState$slambda$slambda_0(newTarget, this.$animatable_1, this.$animSpec$delegate_1, this.$listener$delegate_1, null));
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(animateValueAsState$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new animateValueAsState$slambda(this.$channel_1, this.$animatable_1, this.$animSpec$delegate_1, this.$listener$delegate_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(animateValueAsState$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function animateValueAsState$slambda_0($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation) {
    var i = new animateValueAsState$slambda($channel, $animatable, $animSpec$delegate, $listener$delegate, resultContinuation);
    return constructCallableReference(function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    }, 1);
  }
  var properties_initialized_AnimateAsState_kt_bq3rmo;
  function _init_properties_AnimateAsState_kt__7h7b9a() {
    if (!properties_initialized_AnimateAsState_kt_bq3rmo) {
      properties_initialized_AnimateAsState_kt_bq3rmo = true;
      defaultAnimation = spring();
      dpDefaultSpring = spring(VOID, VOID, new Dp(get_VisibilityThreshold(Companion_getInstance())));
      sizeDefaultSpring = spring(VOID, VOID, new Size(get_VisibilityThreshold_0(Companion_getInstance_1())));
      offsetDefaultSpring = spring(VOID, VOID, new Offset(get_VisibilityThreshold_1(Companion_getInstance_2())));
      rectDefaultSpring = spring(VOID, VOID, get_VisibilityThreshold_2(Companion_getInstance_3()));
      intDefaultSpring = spring(VOID, VOID, get_VisibilityThreshold_3(IntCompanionObject_getInstance()));
      intOffsetDefaultSpring = spring(VOID, VOID, new IntOffset(get_VisibilityThreshold_4(Companion_getInstance_4())));
      intSizeDefaultSpring = spring(VOID, VOID, new IntSize(get_VisibilityThreshold_5(Companion_getInstance_5())));
    }
  }
  var androidx_compose_animation_core_TargetBasedAnimation$stable;
  var androidx_compose_animation_core_DecayAnimation$stable;
  function TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $this) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    TargetBasedAnimation.call($this, animationSpec.vectorize_pto10n_k$(typeConverter), typeConverter, initialValue, targetValue, initialVelocityVector);
    return $this;
  }
  function TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    return TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, objectCreate(protoOf(TargetBasedAnimation)));
  }
  function _set_initialValueVector__o0y9gn($this, _set____db54di) {
    $this.initialValueVector_1 = _set____db54di;
  }
  function _get_initialValueVector__9wx1np($this) {
    return $this.initialValueVector_1;
  }
  function _set_targetValueVector__snxbq6($this, _set____db54di) {
    $this.targetValueVector_1 = _set____db54di;
  }
  function _get_targetValueVector__kndtym($this) {
    return $this.targetValueVector_1;
  }
  function _get_initialVelocityVector__y1hbhp($this) {
    return $this.initialVelocityVector_1;
  }
  function _set__durationNanos__n24igl($this, _set____db54di) {
    $this._durationNanos_1 = _set____db54di;
  }
  function _get__durationNanos__2gyxkv($this) {
    return $this._durationNanos_1;
  }
  function _set__endVelocity__wpaxeq($this, _set____db54di) {
    $this._endVelocity_1 = _set____db54di;
  }
  function _get__endVelocity__h5k6um($this) {
    return $this._endVelocity_1;
  }
  function _get_endVelocity__lqkp53($this) {
    var tmp0_elvis_lhs = $this._endVelocity_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.animationSpec_1.getEndVelocity_j9v6ly_k$($this.initialValueVector_1, $this.targetValueVector_1, $this.initialVelocityVector_1);
      $this._endVelocity_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function TargetBasedAnimation(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    this.animationSpec_1 = animationSpec;
    this.typeConverter_1 = typeConverter;
    this.mutableTargetValue_1 = targetValue;
    this.mutableInitialValue_1 = initialValue;
    this.initialValueVector_1 = this.typeConverter_1.get_convertToVector_s594l4_k$()(initialValue);
    this.targetValueVector_1 = this.typeConverter_1.get_convertToVector_s594l4_k$()(targetValue);
    var tmp = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_1(initialVelocityVector);
    tmp.initialVelocityVector_1 = tmp1_elvis_lhs == null ? newInstance(this.typeConverter_1.get_convertToVector_s594l4_k$()(initialValue)) : tmp1_elvis_lhs;
    this._durationNanos_1 = new Long(-1, -1);
    this._endVelocity_1 = null;
  }
  protoOf(TargetBasedAnimation).get_animationSpec_cvf00d_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(TargetBasedAnimation).get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  protoOf(TargetBasedAnimation).set_mutableTargetValue_pyw2ob_k$ = function (value) {
    if (!equals(this.mutableTargetValue_1, value)) {
      this.mutableTargetValue_1 = value;
      this.targetValueVector_1 = this.typeConverter_1.get_convertToVector_s594l4_k$()(value);
      this._endVelocity_1 = null;
      this._durationNanos_1 = new Long(-1, -1);
    }
  };
  protoOf(TargetBasedAnimation).get_mutableTargetValue_tcsps_k$ = function () {
    return this.mutableTargetValue_1;
  };
  protoOf(TargetBasedAnimation).set_mutableInitialValue_6tefqk_k$ = function (value) {
    if (!equals(value, this.mutableInitialValue_1)) {
      this.mutableInitialValue_1 = value;
      this.initialValueVector_1 = this.typeConverter_1.get_convertToVector_s594l4_k$()(value);
      this._endVelocity_1 = null;
      this._durationNanos_1 = new Long(-1, -1);
    }
  };
  protoOf(TargetBasedAnimation).get_mutableInitialValue_ykpv1j_k$ = function () {
    return this.mutableInitialValue_1;
  };
  protoOf(TargetBasedAnimation).get_initialValue_2disdm_k$ = function () {
    return this.mutableInitialValue_1;
  };
  protoOf(TargetBasedAnimation).get_targetValue_kq6mfd_k$ = function () {
    return this.mutableTargetValue_1;
  };
  protoOf(TargetBasedAnimation).get_isInfinite_uffwnt_k$ = function () {
    return this.animationSpec_1.get_isInfinite_uffwnt_k$();
  };
  protoOf(TargetBasedAnimation).getValueFromNanos_i31vd8_k$ = function (playTimeNanos) {
    var tmp;
    if (!this.isFinishedFromNanos_c31w39_k$(playTimeNanos)) {
      // Inline function 'kotlin.let' call
      var it = this.animationSpec_1.getValueFromNanos_xg3j38_k$(playTimeNanos, this.initialValueVector_1, this.targetValueVector_1, this.initialVelocityVector_1);
      var inductionVariable = 0;
      var last = it.get_size_au00c9_k$();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.core.checkPrecondition' call
          if (!!isNaN_0(it.get_jz2icb_k$(i))) {
            var tmp$ret$3 = 'AnimationVector cannot contain a NaN. ' + toString(it) + '. Animation: ' + this.toString() + ',' + (' playTimeNanos: ' + playTimeNanos.toString());
            throwIllegalStateException(tmp$ret$3);
          }
        }
         while (inductionVariable < last);
      tmp = this.typeConverter_1.get_convertFromVector_kmewon_k$()(it);
    } else {
      tmp = this.get_targetValue_kq6mfd_k$();
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).get_durationNanos_ub5cy_k$ = function () {
    if (compare(this._durationNanos_1, new Long(0, 0)) < 0) {
      this._durationNanos_1 = this.animationSpec_1.getDurationNanos_c9o343_k$(this.initialValueVector_1, this.targetValueVector_1, this.initialVelocityVector_1);
    }
    return this._durationNanos_1;
  };
  protoOf(TargetBasedAnimation).getVelocityVectorFromNanos_jouakx_k$ = function (playTimeNanos) {
    var tmp;
    if (!this.isFinishedFromNanos_c31w39_k$(playTimeNanos)) {
      tmp = this.animationSpec_1.getVelocityFromNanos_wafrjo_k$(playTimeNanos, this.initialValueVector_1, this.targetValueVector_1, this.initialVelocityVector_1);
    } else {
      tmp = _get_endVelocity__lqkp53(this);
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).toString = function () {
    return 'TargetBasedAnimation: ' + toString_0(this.get_initialValue_2disdm_k$()) + ' -> ' + toString_0(this.get_targetValue_kq6mfd_k$()) + ',' + ('initial velocity: ' + toString(this.initialVelocityVector_1) + ', duration: ' + get_durationMillis(this).toString() + ' ms,') + ('animationSpec: ' + toString(this.animationSpec_1));
  };
  function TargetBasedAnimation_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocity) {
    return TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, typeConverter.get_convertToVector_s594l4_k$()(initialVelocity));
  }
  function _get_animationSpec__ffhwa6($this) {
    return $this.animationSpec_1;
  }
  function _get_initialValueVector__9wx1np_0($this) {
    return $this.initialValueVector_1;
  }
  function _get_endVelocity__lqkp53_0($this) {
    return $this.endVelocity_1;
  }
  function DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, $this) {
    DecayAnimation.call($this, animationSpec.vectorize_pto10n_k$(typeConverter), typeConverter, initialValue, initialVelocityVector);
    return $this;
  }
  function DecayAnimation_init_$Create$(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    return DecayAnimation_init_$Init$(animationSpec, typeConverter, initialValue, initialVelocityVector, objectCreate(protoOf(DecayAnimation)));
  }
  function DecayAnimation_init_$Init$_0(animationSpec, typeConverter, initialValue, initialVelocity, $this) {
    DecayAnimation.call($this, animationSpec.vectorize_pto10n_k$(typeConverter), typeConverter, initialValue, typeConverter.get_convertToVector_s594l4_k$()(initialVelocity));
    return $this;
  }
  function DecayAnimation_init_$Create$_0(animationSpec, typeConverter, initialValue, initialVelocity) {
    return DecayAnimation_init_$Init$_0(animationSpec, typeConverter, initialValue, initialVelocity, objectCreate(protoOf(DecayAnimation)));
  }
  function DecayAnimation(animationSpec, typeConverter, initialValue, initialVelocityVector) {
    this.animationSpec_1 = animationSpec;
    this.typeConverter_1 = typeConverter;
    this.initialValue_1 = initialValue;
    this.initialValueVector_1 = this.typeConverter_1.get_convertToVector_s594l4_k$()(this.initialValue_1);
    this.initialVelocityVector_1 = copy_1(initialVelocityVector);
    this.targetValue_1 = this.typeConverter_1.get_convertFromVector_kmewon_k$()(this.animationSpec_1.getTargetValue_rut47u_k$(this.initialValueVector_1, initialVelocityVector));
    this.isInfinite_1 = false;
    this.durationNanos_1 = this.animationSpec_1.getDurationNanos_roqu2j_k$(this.initialValueVector_1, initialVelocityVector);
    this.endVelocity_1 = copy_1(this.animationSpec_1.getVelocityFromNanos_2v7bwc_k$(this.durationNanos_1, this.initialValueVector_1, initialVelocityVector));
    var inductionVariable = 0;
    var last = this.endVelocity_1.get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.endVelocity_1.set_ln2e3z_k$(i, coerceIn(this.endVelocity_1.get_jz2icb_k$(i), -this.animationSpec_1.get_absVelocityThreshold_wsgqo5_k$(), this.animationSpec_1.get_absVelocityThreshold_wsgqo5_k$()));
      }
       while (inductionVariable < last);
  }
  protoOf(DecayAnimation).get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  protoOf(DecayAnimation).get_initialValue_2disdm_k$ = function () {
    return this.initialValue_1;
  };
  protoOf(DecayAnimation).get_initialVelocityVector_xb37p7_k$ = function () {
    return this.initialVelocityVector_1;
  };
  protoOf(DecayAnimation).get_targetValue_kq6mfd_k$ = function () {
    return this.targetValue_1;
  };
  protoOf(DecayAnimation).get_durationNanos_ub5cy_k$ = function () {
    return this.durationNanos_1;
  };
  protoOf(DecayAnimation).get_isInfinite_uffwnt_k$ = function () {
    return this.isInfinite_1;
  };
  protoOf(DecayAnimation).getValueFromNanos_i31vd8_k$ = function (playTimeNanos) {
    if (!this.isFinishedFromNanos_c31w39_k$(playTimeNanos)) {
      return this.typeConverter_1.get_convertFromVector_kmewon_k$()(this.animationSpec_1.getValueFromNanos_huzcys_k$(playTimeNanos, this.initialValueVector_1, this.initialVelocityVector_1));
    } else {
      return this.targetValue_1;
    }
  };
  protoOf(DecayAnimation).getVelocityVectorFromNanos_jouakx_k$ = function (playTimeNanos) {
    if (!this.isFinishedFromNanos_c31w39_k$(playTimeNanos)) {
      return this.animationSpec_1.getVelocityFromNanos_2v7bwc_k$(playTimeNanos, this.initialValueVector_1, this.initialVelocityVector_1);
    } else {
      return this.endVelocity_1;
    }
  };
  function Animation() {
  }
  function get_durationMillis(_this__u8e3s4) {
    return divide(_this__u8e3s4.get_durationNanos_ub5cy_k$(), new Long(1000000, 0));
  }
  var static_init_called;
  function static_init() {
    if (static_init_called)
      return Unit_getInstance();
    static_init_called = true;
    AnimationEndReason_BoundReached_instance = new AnimationEndReason('BoundReached', 0);
    AnimationEndReason_Finished_instance = new AnimationEndReason('Finished', 1);
  }
  var AnimationEndReason_BoundReached_instance;
  var AnimationEndReason_Finished_instance;
  function values() {
    static_init();
    return [AnimationEndReason_BoundReached_getInstance(), AnimationEndReason_Finished_getInstance()];
  }
  function valueOf(value) {
    static_init();
    switch (value) {
      case 'BoundReached':
        return AnimationEndReason_BoundReached_getInstance();
      case 'Finished':
        return AnimationEndReason_Finished_getInstance();
      default:
        THROW_IAE('No enum constant androidx.compose.animation.core.AnimationEndReason.' + value);
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
  function AnimationEndReason(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AnimationEndReason_BoundReached_getInstance() {
    static_init();
    return AnimationEndReason_BoundReached_instance;
  }
  function AnimationEndReason_Finished_getInstance() {
    static_init();
    return AnimationEndReason_Finished_instance;
  }
  var androidx_compose_animation_core_AnimationConstants$stable;
  var androidx_compose_animation_core_TweenSpec$stable;
  var androidx_compose_animation_core_SpringSpec$stable;
  var androidx_compose_animation_core_ArcAnimationSpec$stable;
  var androidx_compose_animation_core_RepeatableSpec$stable;
  var androidx_compose_animation_core_InfiniteRepeatableSpec$stable;
  var androidx_compose_animation_core_SnapSpec$stable;
  var androidx_compose_animation_core_KeyframesSpecBaseConfig$stable;
  var androidx_compose_animation_core_KeyframeBaseEntity$stable;
  var androidx_compose_animation_core_KeyframesSpec_KeyframesSpecConfig$stable;
  var androidx_compose_animation_core_KeyframesSpec_KeyframeEntity$stable;
  var androidx_compose_animation_core_KeyframesSpec$stable;
  var androidx_compose_animation_core_KeyframesWithSplineSpec_KeyframesWithSplineSpecConfig$stable;
  var androidx_compose_animation_core_KeyframesWithSplineSpec$stable;
  function FiniteAnimationSpec() {
  }
  function AnimationSpec() {
  }
  function SpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    dampingRatio = dampingRatio === VOID ? 1.0 : dampingRatio;
    stiffness = stiffness === VOID ? 1500.0 : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    this.dampingRatio_1 = dampingRatio;
    this.stiffness_1 = stiffness;
    this.visibilityThreshold_1 = visibilityThreshold;
  }
  protoOf(SpringSpec).get_dampingRatio_syjss2_k$ = function () {
    return this.dampingRatio_1;
  };
  protoOf(SpringSpec).get_stiffness_dt2sgm_k$ = function () {
    return this.stiffness_1;
  };
  protoOf(SpringSpec).get_visibilityThreshold_qtbbow_k$ = function () {
    return this.visibilityThreshold_1;
  };
  protoOf(SpringSpec).vectorize_pto10n_k$ = function (converter) {
    return VectorizedSpringSpec_init_$Create$(this.dampingRatio_1, this.stiffness_1, convert(converter, this.visibilityThreshold_1));
  };
  protoOf(SpringSpec).equals = function (other) {
    var tmp;
    if (other instanceof SpringSpec) {
      tmp = (other.dampingRatio_1 === this.dampingRatio_1 && other.stiffness_1 === this.stiffness_1 && equals(other.visibilityThreshold_1, this.visibilityThreshold_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SpringSpec).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.visibilityThreshold_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return imul(imul(tmp$ret$0, 31) + getNumberHashCode(this.dampingRatio_1) | 0, 31) + getNumberHashCode(this.stiffness_1) | 0;
  };
  function spring(dampingRatio, stiffness, visibilityThreshold) {
    dampingRatio = dampingRatio === VOID ? 1.0 : dampingRatio;
    stiffness = stiffness === VOID ? 1500.0 : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    return new SpringSpec(dampingRatio, stiffness, visibilityThreshold);
  }
  function TweenSpec(durationMillis, delay, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.durationMillis_1 = durationMillis;
    this.delay_1 = delay;
    this.easing_1 = easing;
  }
  protoOf(TweenSpec).get_durationMillis_pqx05f_k$ = function () {
    return this.durationMillis_1;
  };
  protoOf(TweenSpec).get_delay_iq7n8a_k$ = function () {
    return this.delay_1;
  };
  protoOf(TweenSpec).get_easing_cqnn04_k$ = function () {
    return this.easing_1;
  };
  protoOf(TweenSpec).vectorize_pto10n_k$ = function (converter) {
    return new VectorizedTweenSpec(this.durationMillis_1, this.delay_1, this.easing_1);
  };
  protoOf(TweenSpec).equals = function (other) {
    var tmp;
    if (other instanceof TweenSpec) {
      tmp = (other.durationMillis_1 === this.durationMillis_1 && other.delay_1 === this.delay_1 && equals(other.easing_1, this.easing_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TweenSpec).hashCode = function () {
    return imul(imul(this.durationMillis_1, 31) + hashCode(this.easing_1) | 0, 31) + this.delay_1 | 0;
  };
  function tween(durationMillis, delayMillis, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    return new TweenSpec(durationMillis, delayMillis, easing);
  }
  function SnapSpec(delay) {
    delay = delay === VOID ? 0 : delay;
    this.delay_1 = delay;
  }
  protoOf(SnapSpec).get_delay_iq7n8a_k$ = function () {
    return this.delay_1;
  };
  protoOf(SnapSpec).vectorize_pto10n_k$ = function (converter) {
    return new VectorizedSnapSpec(this.delay_1);
  };
  protoOf(SnapSpec).equals = function (other) {
    var tmp;
    if (other instanceof SnapSpec) {
      tmp = other.delay_1 === this.delay_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SnapSpec).hashCode = function () {
    return this.delay_1;
  };
  function snap(delayMillis) {
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    return new SnapSpec(delayMillis);
  }
  function convert(_this__u8e3s4, data) {
    if (data == null) {
      return null;
    } else {
      return _this__u8e3s4.get_convertToVector_s594l4_k$()(data);
    }
  }
  function DurationBasedAnimationSpec() {
  }
  function delayed(animationSpec, startDelayNanos) {
    return new StartDelayAnimationSpec(animationSpec, startDelayNanos);
  }
  function StartDelayAnimationSpec(animationSpec, startDelayNanos) {
    this.animationSpec_1 = animationSpec;
    this.startDelayNanos_1 = startDelayNanos;
  }
  protoOf(StartDelayAnimationSpec).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(StartDelayAnimationSpec).get_startDelayNanos_rdfwq3_k$ = function () {
    return this.startDelayNanos_1;
  };
  protoOf(StartDelayAnimationSpec).vectorize_pto10n_k$ = function (converter) {
    var vecSpec = this.animationSpec_1.vectorize_pto10n_k$(converter);
    return new StartDelayVectorizedAnimationSpec(vecSpec, this.startDelayNanos_1);
  };
  protoOf(StartDelayAnimationSpec).hashCode = function () {
    return imul(31, hashCode(this.animationSpec_1)) + this.startDelayNanos_1.hashCode() | 0;
  };
  protoOf(StartDelayAnimationSpec).equals = function (other) {
    if (!(other instanceof StartDelayAnimationSpec)) {
      return false;
    }
    return equalsLong(other.startDelayNanos_1, this.startDelayNanos_1) && equals(other.animationSpec_1, this.animationSpec_1);
  };
  function StartDelayVectorizedAnimationSpec(vectorizedAnimationSpec, startDelayNanos) {
    this.vectorizedAnimationSpec_1 = vectorizedAnimationSpec;
    this.startDelayNanos_1 = startDelayNanos;
  }
  protoOf(StartDelayVectorizedAnimationSpec).get_vectorizedAnimationSpec_47d5b1_k$ = function () {
    return this.vectorizedAnimationSpec_1;
  };
  protoOf(StartDelayVectorizedAnimationSpec).get_startDelayNanos_rdfwq3_k$ = function () {
    return this.startDelayNanos_1;
  };
  protoOf(StartDelayVectorizedAnimationSpec).get_isInfinite_uffwnt_k$ = function () {
    return this.vectorizedAnimationSpec_1.get_isInfinite_uffwnt_k$();
  };
  protoOf(StartDelayVectorizedAnimationSpec).getDurationNanos_c9o343_k$ = function (initialValue, targetValue, initialVelocity) {
    return add(this.vectorizedAnimationSpec_1.getDurationNanos_c9o343_k$(initialValue, targetValue, initialVelocity), this.startDelayNanos_1);
  };
  protoOf(StartDelayVectorizedAnimationSpec).getVelocityFromNanos_wafrjo_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var tmp;
    if (compare(playTimeNanos, this.startDelayNanos_1) < 0) {
      tmp = initialVelocity;
    } else {
      tmp = this.vectorizedAnimationSpec_1.getVelocityFromNanos_wafrjo_k$(subtract(playTimeNanos, this.startDelayNanos_1), initialValue, targetValue, initialVelocity);
    }
    return tmp;
  };
  protoOf(StartDelayVectorizedAnimationSpec).getValueFromNanos_xg3j38_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var tmp;
    if (compare(playTimeNanos, this.startDelayNanos_1) < 0) {
      tmp = initialValue;
    } else {
      tmp = this.vectorizedAnimationSpec_1.getValueFromNanos_xg3j38_k$(subtract(playTimeNanos, this.startDelayNanos_1), initialValue, targetValue, initialVelocity);
    }
    return tmp;
  };
  protoOf(StartDelayVectorizedAnimationSpec).hashCode = function () {
    return imul(31, hashCode(this.vectorizedAnimationSpec_1)) + this.startDelayNanos_1.hashCode() | 0;
  };
  protoOf(StartDelayVectorizedAnimationSpec).equals = function (other) {
    if (!(other instanceof StartDelayVectorizedAnimationSpec)) {
      return false;
    }
    return equalsLong(other.startDelayNanos_1, this.startDelayNanos_1) && equals(other.vectorizedAnimationSpec_1, this.vectorizedAnimationSpec_1);
  };
  function InfiniteRepeatableSpec_init_$Init$(animation, repeatMode, $this) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    InfiniteRepeatableSpec.call($this, animation, repeatMode, _StartOffset___init__impl__615djw_0(0));
    return $this;
  }
  function InfiniteRepeatableSpec_init_$Create$(animation, repeatMode) {
    return InfiniteRepeatableSpec_init_$Init$(animation, repeatMode, objectCreate(protoOf(InfiniteRepeatableSpec)));
  }
  function InfiniteRepeatableSpec(animation, repeatMode, initialStartOffset) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    initialStartOffset = initialStartOffset === VOID ? _StartOffset___init__impl__615djw_0(0) : initialStartOffset;
    this.animation_1 = animation;
    this.repeatMode_1 = repeatMode;
    this.initialStartOffset_1 = initialStartOffset;
    var tmp0_subject = this.animation_1;
    var tmp;
    if (tmp0_subject instanceof TweenSpec) {
      tmp = (this.animation_1.durationMillis_1 === 0 && this.animation_1.delay_1 === 0);
    } else {
      if (tmp0_subject instanceof SnapSpec) {
        tmp = this.animation_1.delay_1 === 0;
      } else {
        if (tmp0_subject instanceof KeyframesSpec) {
          tmp = (this.animation_1.config_1.durationMillis_1 === 0 && this.animation_1.config_1.delayMillis_1 === 0);
        } else {
          if (tmp0_subject instanceof KeyframesWithSplineSpec) {
            tmp = (this.animation_1.config_1.durationMillis_1 === 0 && this.animation_1.config_1.delayMillis_1 === 0);
          } else {
            if (tmp0_subject instanceof ArcAnimationSpec) {
              tmp = (this.animation_1.durationMillis_1 === 0 && this.animation_1.delayMillis_1 === 0);
            } else {
              tmp = false;
            }
          }
        }
      }
    }
    var isZeroDuration = tmp;
    if (isZeroDuration) {
      throw IllegalArgumentException_init_$Create$('Animation to be infinitely repeated cannot have a 0-duration');
    }
  }
  protoOf(InfiniteRepeatableSpec).get_animation_r0gd0b_k$ = function () {
    return this.animation_1;
  };
  protoOf(InfiniteRepeatableSpec).get_repeatMode_zzqu1_k$ = function () {
    return this.repeatMode_1;
  };
  protoOf(InfiniteRepeatableSpec).get_initialStartOffset_ofn0ob_k$ = function () {
    return this.initialStartOffset_1;
  };
  protoOf(InfiniteRepeatableSpec).vectorize_pto10n_k$ = function (converter) {
    return new VectorizedInfiniteRepeatableSpec(this.animation_1.vectorize_pto10n_k$(converter), this.repeatMode_1, this.initialStartOffset_1);
  };
  protoOf(InfiniteRepeatableSpec).equals = function (other) {
    var tmp;
    if (other instanceof InfiniteRepeatableSpec) {
      tmp = (equals(other.animation_1, this.animation_1) && other.repeatMode_1.equals(this.repeatMode_1) && equals(new StartOffset(other.initialStartOffset_1), new StartOffset(this.initialStartOffset_1)));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(InfiniteRepeatableSpec).hashCode = function () {
    return imul(imul(hashCode(this.animation_1), 31) + this.repeatMode_1.hashCode() | 0, 31) + StartOffset__hashCode_impl_ith3z7(this.initialStartOffset_1) | 0;
  };
  function infiniteRepeatable(animation, repeatMode, initialStartOffset) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    initialStartOffset = initialStartOffset === VOID ? _StartOffset___init__impl__615djw_0(0) : initialStartOffset;
    return new InfiniteRepeatableSpec(animation, repeatMode, initialStartOffset);
  }
  var static_init_called_0;
  function static_init_0() {
    if (static_init_called_0)
      return Unit_getInstance();
    static_init_called_0 = true;
    RepeatMode_Restart_instance = new RepeatMode('Restart', 0);
    RepeatMode_Reverse_instance = new RepeatMode('Reverse', 1);
  }
  var RepeatMode_Restart_instance;
  var RepeatMode_Reverse_instance;
  function values_0() {
    static_init_0();
    return [RepeatMode_Restart_getInstance(), RepeatMode_Reverse_getInstance()];
  }
  function valueOf_0(value) {
    static_init_0();
    switch (value) {
      case 'Restart':
        return RepeatMode_Restart_getInstance();
      case 'Reverse':
        return RepeatMode_Reverse_getInstance();
      default:
        THROW_IAE('No enum constant androidx.compose.animation.core.RepeatMode.' + value);
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
  function RepeatMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ArcAnimationSpec(mode, durationMillis, delayMillis, easing) {
    mode = mode === VOID ? Companion_getInstance_11().get_ArcBelow_sw7yhl_k$() : mode;
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.mode_1 = mode;
    this.durationMillis_1 = durationMillis;
    this.delayMillis_1 = delayMillis;
    this.easing_1 = easing;
  }
  protoOf(ArcAnimationSpec).get_mode_643w4d_k$ = function () {
    return this.mode_1;
  };
  protoOf(ArcAnimationSpec).get_durationMillis_pqx05f_k$ = function () {
    return this.durationMillis_1;
  };
  protoOf(ArcAnimationSpec).get_delayMillis_d968n4_k$ = function () {
    return this.delayMillis_1;
  };
  protoOf(ArcAnimationSpec).get_easing_cqnn04_k$ = function () {
    return this.easing_1;
  };
  protoOf(ArcAnimationSpec).vectorize_pto10n_k$ = function (converter) {
    return new VectorizedKeyframesSpec(intListOf(0, this.durationMillis_1), emptyIntObjectMap(), this.durationMillis_1, this.delayMillis_1, this.easing_1, this.mode_1);
  };
  protoOf(ArcAnimationSpec).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArcAnimationSpec))
      return false;
    if (!equals(new ArcMode(this.mode_1), new ArcMode(other.mode_1)))
      return false;
    if (!(this.durationMillis_1 === other.durationMillis_1))
      return false;
    if (!(this.delayMillis_1 === other.delayMillis_1))
      return false;
    return equals(this.easing_1, other.easing_1);
  };
  protoOf(ArcAnimationSpec).hashCode = function () {
    var result = ArcMode__hashCode_impl_ghaz31(this.mode_1);
    result = imul(31, result) + this.durationMillis_1 | 0;
    result = imul(31, result) + this.delayMillis_1 | 0;
    result = imul(31, result) + hashCode(this.easing_1) | 0;
    return result;
  };
  function _StartOffset___init__impl__615djw(value) {
    return value;
  }
  function _StartOffset___get_value__impl__8sikig($this) {
    return $this;
  }
  function _StartOffset___init__impl__615djw_0(offsetMillis, offsetType) {
    offsetType = offsetType === VOID ? Companion_getInstance_9().Delay_1 : offsetType;
    return _StartOffset___init__impl__615djw(fromInt(imul(offsetMillis, _StartOffsetType___get_value__impl__i1pfem(offsetType))));
  }
  function _StartOffset___get_offsetMillis__impl__x95ylg($this) {
    return abs(convertToInt(_StartOffset___get_value__impl__8sikig($this)));
  }
  function _StartOffset___get_offsetType__impl__92sljs($this) {
    var tmp;
    switch (compare(_StartOffset___get_value__impl__8sikig($this), new Long(0, 0)) > 0) {
      case true:
        tmp = Companion_getInstance_9().FastForward_1;
        break;
      case false:
        tmp = Companion_getInstance_9().Delay_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function StartOffset__toString_impl_2xosto($this) {
    return 'StartOffset(value=' + $this.toString() + ')';
  }
  function StartOffset__hashCode_impl_ith3z7($this) {
    return $this.hashCode();
  }
  function StartOffset__equals_impl_58sbp5($this, other) {
    if (!(other instanceof StartOffset))
      return false;
    var tmp0_other_with_cast = other.value_1;
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function StartOffset(value) {
    this.value_1 = value;
  }
  protoOf(StartOffset).toString = function () {
    return StartOffset__toString_impl_2xosto(this.value_1);
  };
  protoOf(StartOffset).hashCode = function () {
    return StartOffset__hashCode_impl_ith3z7(this.value_1);
  };
  protoOf(StartOffset).equals = function (other) {
    return StartOffset__equals_impl_58sbp5(this.value_1, other);
  };
  function KeyframesSpecConfig() {
    KeyframesSpecBaseConfig.call(this);
  }
  protoOf(KeyframesSpecConfig).createEntityFor_1kfc6w_k$ = function (value) {
    return new KeyframeEntity(value);
  };
  protoOf(KeyframesSpecConfig).at_1dnb16_k$ = function (_this__u8e3s4, timeStamp) {
    // Inline function 'kotlin.also' call
    var this_0 = new KeyframeEntity(_this__u8e3s4);
    this.keyframes_1.set_hupg49_k$(timeStamp, this_0);
    return this_0;
  };
  protoOf(KeyframesSpecConfig).atFraction_i4lk4_k$ = function (_this__u8e3s4, fraction) {
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_0 = this.durationMillis_1 * fraction;
    var tmp;
    if (isNaN_0(this_0)) {
      tmp = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp = roundToInt(this_0);
    }
    var tmp$ret$0 = tmp;
    return this.at_1dnb16_k$(_this__u8e3s4, tmp$ret$0);
  };
  protoOf(KeyframesSpecConfig).with_cuwycf_k$ = function (_this__u8e3s4, easing) {
    _this__u8e3s4.easing_1 = easing;
  };
  protoOf(KeyframesSpecConfig).using_5khw1z_k$ = function (_this__u8e3s4, arcMode) {
    _this__u8e3s4.arcMode_1 = arcMode;
    return _this__u8e3s4;
  };
  function KeyframeEntity(value, easing, arcMode) {
    easing = easing === VOID ? get_LinearEasing() : easing;
    arcMode = arcMode === VOID ? Companion_getInstance_11().get_ArcLinear_4dmwqp_k$() : arcMode;
    KeyframeBaseEntity.call(this, value, easing);
    this.arcMode_1 = arcMode;
  }
  protoOf(KeyframeEntity).set_arcMode_84ij8q_k$ = function (_set____db54di) {
    this.arcMode_1 = _set____db54di;
  };
  protoOf(KeyframeEntity).get_arcMode_se3d9i_k$ = function () {
    return this.arcMode_1;
  };
  protoOf(KeyframeEntity).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof KeyframeEntity))
      return false;
    return equals(other.value_1, this.value_1) && equals(other.easing_1, this.easing_1) && equals(new ArcMode(other.arcMode_1), new ArcMode(this.arcMode_1));
  };
  protoOf(KeyframeEntity).hashCode = function () {
    var tmp0_safe_receiver = this.value_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    result = imul(31, result) + ArcMode__hashCode_impl_ghaz31(this.arcMode_1) | 0;
    result = imul(31, result) + hashCode(this.easing_1) | 0;
    return result;
  };
  function KeyframesSpec(config) {
    this.config_1 = config;
  }
  protoOf(KeyframesSpec).get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  protoOf(KeyframesSpec).vectorize_pto10n_k$ = function (converter) {
    var timestamps = new MutableIntList(this.config_1.keyframes_1.get_size_woubt6_k$() + 2 | 0);
    var timeToInfoMap = new MutableIntObjectMap(this.config_1.keyframes_1.get_size_woubt6_k$());
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var this_0 = this.config_1.keyframes_1;
    var k = this_0.get_keys_8zdyhr_k$();
    var v = this_0.get_values_y8hjwv_k$();
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this_0.get_metadata_ha42hw_k$();
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_1 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  timestamps.add_lnluon_k$(tmp0);
                  timeToInfoMap.set_hupg49_k$(tmp0, new VectorizedKeyframeSpecElementInfo(converter.get_convertToVector_s594l4_k$()(value_0.value_1), value_0.easing_1, value_0.arcMode_1));
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    // Inline function 'androidx.collection.IntObjectMap.contains' call
    if (!this.config_1.keyframes_1.containsKey_qwmoa0_k$(0)) {
      timestamps.add_6jazo1_k$(0, 0);
    }
    var tmp0_0 = this.config_1.keyframes_1;
    // Inline function 'androidx.collection.IntObjectMap.contains' call
    var key = this.config_1.durationMillis_1;
    if (!tmp0_0.containsKey_qwmoa0_k$(key)) {
      timestamps.add_lnluon_k$(this.config_1.durationMillis_1);
    }
    timestamps.sort_6ihik2_k$();
    return new VectorizedKeyframesSpec(timestamps, timeToInfoMap, this.config_1.durationMillis_1, this.config_1.delayMillis_1, get_LinearEasing(), Companion_getInstance_11().get_ArcLinear_4dmwqp_k$());
  };
  function _set_periodicBias__b6zggt($this, _set____db54di) {
    $this.periodicBias_1 = _set____db54di;
  }
  function _get_periodicBias__4cra3b($this) {
    return $this.periodicBias_1;
  }
  function KeyframesWithSplineSpec_init_$Init$(config, periodicBias, $this) {
    KeyframesWithSplineSpec.call($this, config);
    $this.periodicBias_1 = periodicBias;
    return $this;
  }
  function KeyframesWithSplineSpec_init_$Create$(config, periodicBias) {
    return KeyframesWithSplineSpec_init_$Init$(config, periodicBias, objectCreate(protoOf(KeyframesWithSplineSpec)));
  }
  function KeyframesWithSplineSpecConfig() {
    KeyframesSpecBaseConfig.call(this);
  }
  protoOf(KeyframesWithSplineSpecConfig).createEntityFor_1kfc6w_k$ = function (value) {
    return new KeyframeEntity(value);
  };
  function KeyframesWithSplineSpec(config) {
    this.config_1 = config;
    this.periodicBias_1 = NaN;
  }
  protoOf(KeyframesWithSplineSpec).get_config_c0698r_k$ = function () {
    return this.config_1;
  };
  protoOf(KeyframesWithSplineSpec).vectorize_pto10n_k$ = function (converter) {
    var keyframes = this.config_1.keyframes_1;
    var timestamps = new MutableIntList(keyframes.get_size_woubt6_k$() + 2 | 0);
    var timeToVectorMap = new MutableIntObjectMap(keyframes.get_size_woubt6_k$());
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = keyframes.get_keys_8zdyhr_k$();
    var v = keyframes.get_values_y8hjwv_k$();
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = keyframes.get_metadata_ha42hw_k$();
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  timestamps.add_lnluon_k$(tmp0);
                  timeToVectorMap.set_hupg49_k$(tmp0, new Pair(converter.get_convertToVector_s594l4_k$()(value_0.value_1), value_0.easing_1));
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i === lastIndex));
    }
    // Inline function 'androidx.collection.IntObjectMap.contains' call
    if (!keyframes.containsKey_qwmoa0_k$(0)) {
      timestamps.add_6jazo1_k$(0, 0);
    }
    // Inline function 'androidx.collection.IntObjectMap.contains' call
    var key = this.config_1.durationMillis_1;
    if (!keyframes.containsKey_qwmoa0_k$(key)) {
      timestamps.add_lnluon_k$(this.config_1.durationMillis_1);
    }
    timestamps.sort_6ihik2_k$();
    return new VectorizedMonoSplineKeyframesSpec(timestamps, timeToVectorMap, this.config_1.durationMillis_1, this.config_1.delayMillis_1, this.periodicBias_1);
  };
  function _StartOffsetType___init__impl__g1ur7a(value) {
    return value;
  }
  function _StartOffsetType___get_value__impl__i1pfem($this) {
    return $this;
  }
  function Companion() {
    Companion_instance = this;
    this.Delay_1 = _StartOffsetType___init__impl__g1ur7a(-1);
    this.FastForward_1 = _StartOffsetType___init__impl__g1ur7a(1);
  }
  protoOf(Companion).get_Delay_4dknp7_k$ = function () {
    return this.Delay_1;
  };
  protoOf(Companion).get_FastForward_i32a6j_k$ = function () {
    return this.FastForward_1;
  };
  var Companion_instance;
  function Companion_getInstance_9() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function StartOffsetType__toString_impl_3r5832($this) {
    return 'StartOffsetType(value=' + $this + ')';
  }
  function StartOffsetType__hashCode_impl_pib4vx($this) {
    return $this;
  }
  function StartOffsetType__equals_impl_hnkckf($this, other) {
    if (!(other instanceof StartOffsetType))
      return false;
    if (!($this === other.value_1))
      return false;
    return true;
  }
  function StartOffsetType(value) {
    Companion_getInstance_9();
    this.value_1 = value;
  }
  protoOf(StartOffsetType).toString = function () {
    return StartOffsetType__toString_impl_3r5832(this.value_1);
  };
  protoOf(StartOffsetType).hashCode = function () {
    return StartOffsetType__hashCode_impl_pib4vx(this.value_1);
  };
  protoOf(StartOffsetType).equals = function (other) {
    return StartOffsetType__equals_impl_hnkckf(this.value_1, other);
  };
  function KeyframesSpecBaseConfig() {
    this.durationMillis_1 = 300;
    this.delayMillis_1 = 0;
    this.keyframes_1 = mutableIntObjectMapOf();
  }
  protoOf(KeyframesSpecBaseConfig).set_durationMillis_11l8vl_k$ = function (_set____db54di) {
    this.durationMillis_1 = _set____db54di;
  };
  protoOf(KeyframesSpecBaseConfig).get_durationMillis_pqx05f_k$ = function () {
    return this.durationMillis_1;
  };
  protoOf(KeyframesSpecBaseConfig).set_delayMillis_uhofus_k$ = function (_set____db54di) {
    this.delayMillis_1 = _set____db54di;
  };
  protoOf(KeyframesSpecBaseConfig).get_delayMillis_d968n4_k$ = function () {
    return this.delayMillis_1;
  };
  protoOf(KeyframesSpecBaseConfig).get_keyframes_fgkoo7_k$ = function () {
    return this.keyframes_1;
  };
  protoOf(KeyframesSpecBaseConfig).at_1dnb16_k$ = function (_this__u8e3s4, timeStamp) {
    var entity = this.createEntityFor_1kfc6w_k$(_this__u8e3s4);
    this.keyframes_1.set_hupg49_k$(timeStamp, entity);
    return entity;
  };
  protoOf(KeyframesSpecBaseConfig).atFraction_i4lk4_k$ = function (_this__u8e3s4, fraction) {
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_0 = this.durationMillis_1 * fraction;
    var tmp;
    if (isNaN_0(this_0)) {
      tmp = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp = roundToInt(this_0);
    }
    var tmp$ret$0 = tmp;
    return this.at_1dnb16_k$(_this__u8e3s4, tmp$ret$0);
  };
  protoOf(KeyframesSpecBaseConfig).using_gofctp_k$ = function (_this__u8e3s4, easing) {
    _this__u8e3s4.easing_1 = easing;
    return _this__u8e3s4;
  };
  function KeyframeBaseEntity(value, easing) {
    this.value_1 = value;
    this.easing_1 = easing;
  }
  protoOf(KeyframeBaseEntity).get_value_z4oxbv_k$ = function () {
    return this.value_1;
  };
  protoOf(KeyframeBaseEntity).set_easing_4gr030_k$ = function (_set____db54di) {
    this.easing_1 = _set____db54di;
  };
  protoOf(KeyframeBaseEntity).get_easing_8363f3_k$ = function () {
    return this.easing_1;
  };
  protoOf(KeyframeBaseEntity).toPair_d22x5s_k$ = function (convertToVector) {
    return to(convertToVector(this.value_1), this.easing_1);
  };
  function RepeatMode_Restart_getInstance() {
    static_init_0();
    return RepeatMode_Restart_instance;
  }
  function RepeatMode_Reverse_getInstance() {
    static_init_0();
    return RepeatMode_Reverse_instance;
  }
  var androidx_compose_animation_core_AnimationState$stable;
  var androidx_compose_animation_core_AnimationScope$stable;
  function AnimationState$_get_value_$ref_fgr73c() {
    return constructCallableReference(function (p0) {
      return p0.get_value_j01efc_k$();
    }, 1, 0, 'androidx.compose.animation.core/AnimationState.value.<get-value>|<get-value>(){}[0]');
  }
  function AnimationState$_set_value_$ref_q9ieh8() {
    return constructCallableReference(function (p0, p1) {
      p0.set_value_w62xiq_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/AnimationState.value.<set-value>|<set-value>(1:0){}[0]');
  }
  function AnimationState$_get_value_$ref_fgr73c_0() {
    return constructCallableReference(function (p0) {
      return p0.get_value_j01efc_k$();
    }, 1, 0, 'androidx.compose.animation.core/AnimationState.value.<get-value>|<get-value>(){}[0]');
  }
  function AnimationState$_set_value_$ref_q9ieh8_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_value_w62xiq_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/AnimationState.value.<set-value>|<set-value>(1:0){}[0]');
  }
  function AnimationState(typeConverter, initialValue, initialVelocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? new Long(0, -2147483648) : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? new Long(0, -2147483648) : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    this.typeConverter_1 = typeConverter;
    this.value$delegate_1 = mutableStateOf(initialValue);
    var tmp = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_1(initialVelocityVector);
    tmp.velocityVector_1 = tmp1_elvis_lhs == null ? createZeroVectorFrom(this.typeConverter_1, initialValue) : tmp1_elvis_lhs;
    this.lastFrameTimeNanos_1 = lastFrameTimeNanos;
    this.finishedTimeNanos_1 = finishedTimeNanos;
    this.isRunning_1 = isRunning;
  }
  protoOf(AnimationState).get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  protoOf(AnimationState).set_value_w62xiq_k$ = function (_set____db54di) {
    var tmp0 = this.value$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationState$_get_value_$ref_fgr73c_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AnimationState$_set_value_$ref_q9ieh8_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(AnimationState).get_value_j01efc_k$ = function () {
    var tmp0 = this.value$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationState$_get_value_$ref_fgr73c();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AnimationState$_set_value_$ref_q9ieh8());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(AnimationState).set_velocityVector_tj9mci_k$ = function (_set____db54di) {
    this.velocityVector_1 = _set____db54di;
  };
  protoOf(AnimationState).get_velocityVector_v3jmo9_k$ = function () {
    return this.velocityVector_1;
  };
  protoOf(AnimationState).set_lastFrameTimeNanos_lyzzef_k$ = function (_set____db54di) {
    this.lastFrameTimeNanos_1 = _set____db54di;
  };
  protoOf(AnimationState).get_lastFrameTimeNanos_3aprno_k$ = function () {
    return this.lastFrameTimeNanos_1;
  };
  protoOf(AnimationState).set_finishedTimeNanos_76k3z2_k$ = function (_set____db54di) {
    this.finishedTimeNanos_1 = _set____db54di;
  };
  protoOf(AnimationState).get_finishedTimeNanos_t5ryif_k$ = function () {
    return this.finishedTimeNanos_1;
  };
  protoOf(AnimationState).set_isRunning_o0rkdc_k$ = function (_set____db54di) {
    this.isRunning_1 = _set____db54di;
  };
  protoOf(AnimationState).get_isRunning_okmtn0_k$ = function () {
    return this.isRunning_1;
  };
  protoOf(AnimationState).get_velocity_3hqvmu_k$ = function () {
    return this.typeConverter_1.get_convertFromVector_kmewon_k$()(this.velocityVector_1);
  };
  protoOf(AnimationState).toString = function () {
    return 'AnimationState(' + ('value=' + toString_0(this.get_value_j01efc_k$()) + ', ') + ('velocity=' + toString_0(this.get_velocity_3hqvmu_k$()) + ', ') + ('isRunning=' + this.isRunning_1 + ', ') + ('lastFrameTimeNanos=' + this.lastFrameTimeNanos_1.toString() + ', ') + ('finishedTimeNanos=' + this.finishedTimeNanos_1.toString()) + ')';
  };
  function AnimationState_0(initialValue, initialVelocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocity = initialVelocity === VOID ? 0.0 : initialVelocity;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? new Long(0, -2147483648) : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? new Long(0, -2147483648) : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    return new AnimationState(get_VectorConverter_0(FloatCompanionObject_getInstance()), initialValue, AnimationVector_0(initialVelocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function _get_onCancel__fbp26m($this) {
    return $this.onCancel_1;
  }
  function AnimationScope$_get_value_$ref_u38x5x() {
    return constructCallableReference(function (p0) {
      return p0.get_value_j01efc_k$();
    }, 1, 0, 'androidx.compose.animation.core/AnimationScope.value.<get-value>|<get-value>(){}[0]');
  }
  function AnimationScope$_set_value_$ref_bn0oen() {
    return constructCallableReference(function (p0, p1) {
      p0.set_value_w62xiq_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/AnimationScope.value.<set-value>|<set-value>(1:0){}[0]');
  }
  function AnimationScope$_get_value_$ref_u38x5x_0() {
    return constructCallableReference(function (p0) {
      return p0.get_value_j01efc_k$();
    }, 1, 0, 'androidx.compose.animation.core/AnimationScope.value.<get-value>|<get-value>(){}[0]');
  }
  function AnimationScope$_set_value_$ref_bn0oen_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_value_w62xiq_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/AnimationScope.value.<set-value>|<set-value>(1:0){}[0]');
  }
  function AnimationScope$_get_isRunning_$ref_gxcmg9() {
    return constructCallableReference(function (p0) {
      return p0.get_isRunning_okmtn0_k$();
    }, 1, 0, 'androidx.compose.animation.core/AnimationScope.isRunning.<get-isRunning>|<get-isRunning>(){}[0]');
  }
  function AnimationScope$_set_isRunning_$ref_1pl3xx() {
    return constructCallableReference(function (p0, p1) {
      p0.set_isRunning_o0rkdc_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/AnimationScope.isRunning.<set-isRunning>|<set-isRunning>(kotlin.Boolean){}[0]');
  }
  function AnimationScope$_get_isRunning_$ref_gxcmg9_0() {
    return constructCallableReference(function (p0) {
      return p0.get_isRunning_okmtn0_k$();
    }, 1, 0, 'androidx.compose.animation.core/AnimationScope.isRunning.<get-isRunning>|<get-isRunning>(){}[0]');
  }
  function AnimationScope$_set_isRunning_$ref_1pl3xx_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_isRunning_o0rkdc_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/AnimationScope.isRunning.<set-isRunning>|<set-isRunning>(kotlin.Boolean){}[0]');
  }
  function AnimationScope(initialValue, typeConverter, initialVelocityVector, lastFrameTimeNanos, targetValue, startTimeNanos, isRunning, onCancel) {
    this.typeConverter_1 = typeConverter;
    this.targetValue_1 = targetValue;
    this.startTimeNanos_1 = startTimeNanos;
    this.onCancel_1 = onCancel;
    this.value$delegate_1 = mutableStateOf(initialValue);
    this.velocityVector_1 = copy_1(initialVelocityVector);
    this.lastFrameTimeNanos_1 = lastFrameTimeNanos;
    this.finishedTimeNanos_1 = new Long(0, -2147483648);
    this.isRunning$delegate_1 = mutableStateOf(isRunning);
  }
  protoOf(AnimationScope).get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  protoOf(AnimationScope).get_targetValue_kq6mfd_k$ = function () {
    return this.targetValue_1;
  };
  protoOf(AnimationScope).get_startTimeNanos_ru5em1_k$ = function () {
    return this.startTimeNanos_1;
  };
  protoOf(AnimationScope).set_value_w62xiq_k$ = function (_set____db54di) {
    var tmp0 = this.value$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationScope$_get_value_$ref_u38x5x_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AnimationScope$_set_value_$ref_bn0oen_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(AnimationScope).get_value_j01efc_k$ = function () {
    var tmp0 = this.value$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationScope$_get_value_$ref_u38x5x();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AnimationScope$_set_value_$ref_bn0oen());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(AnimationScope).set_velocityVector_tj9mci_k$ = function (_set____db54di) {
    this.velocityVector_1 = _set____db54di;
  };
  protoOf(AnimationScope).get_velocityVector_v3jmo9_k$ = function () {
    return this.velocityVector_1;
  };
  protoOf(AnimationScope).set_lastFrameTimeNanos_lyzzef_k$ = function (_set____db54di) {
    this.lastFrameTimeNanos_1 = _set____db54di;
  };
  protoOf(AnimationScope).get_lastFrameTimeNanos_3aprno_k$ = function () {
    return this.lastFrameTimeNanos_1;
  };
  protoOf(AnimationScope).set_finishedTimeNanos_76k3z2_k$ = function (_set____db54di) {
    this.finishedTimeNanos_1 = _set____db54di;
  };
  protoOf(AnimationScope).get_finishedTimeNanos_t5ryif_k$ = function () {
    return this.finishedTimeNanos_1;
  };
  protoOf(AnimationScope).set_isRunning_o0rkdc_k$ = function (_set____db54di) {
    var tmp0 = this.isRunning$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationScope$_get_isRunning_$ref_gxcmg9_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isRunning', 1, tmp, tmp_0, AnimationScope$_set_isRunning_$ref_1pl3xx_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(AnimationScope).get_isRunning_okmtn0_k$ = function () {
    var tmp0 = this.isRunning$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationScope$_get_isRunning_$ref_gxcmg9();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isRunning', 1, tmp, tmp_0, AnimationScope$_set_isRunning_$ref_1pl3xx());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(AnimationScope).get_velocity_3hqvmu_k$ = function () {
    return this.typeConverter_1.get_convertFromVector_kmewon_k$()(this.velocityVector_1);
  };
  protoOf(AnimationScope).cancelAnimation_ic0k2u_k$ = function () {
    this.set_isRunning_o0rkdc_k$(false);
    this.onCancel_1();
  };
  protoOf(AnimationScope).toAnimationState_sex3co_k$ = function () {
    return new AnimationState(this.typeConverter_1, this.get_value_j01efc_k$(), this.velocityVector_1, this.lastFrameTimeNanos_1, this.finishedTimeNanos_1, this.get_isRunning_okmtn0_k$());
  };
  function copy(_this__u8e3s4, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    value = value === VOID ? _this__u8e3s4.get_value_j01efc_k$() : value;
    velocityVector = velocityVector === VOID ? copy_1(_this__u8e3s4.velocityVector_1) : velocityVector;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? _this__u8e3s4.lastFrameTimeNanos_1 : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? _this__u8e3s4.finishedTimeNanos_1 : finishedTimeNanos;
    isRunning = isRunning === VOID ? _this__u8e3s4.isRunning_1 : isRunning;
    return new AnimationState(_this__u8e3s4.typeConverter_1, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function createZeroVectorFrom(_this__u8e3s4, value) {
    // Inline function 'kotlin.also' call
    var this_0 = _this__u8e3s4.get_convertToVector_s594l4_k$()(value);
    this_0.reset_x7qqys_k$();
    return this_0;
  }
  function copy_0(_this__u8e3s4, value, velocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    value = value === VOID ? _this__u8e3s4.get_value_j01efc_k$() : value;
    velocity = velocity === VOID ? _this__u8e3s4.velocityVector_1.get_value_j01efc_k$() : velocity;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? _this__u8e3s4.lastFrameTimeNanos_1 : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? _this__u8e3s4.finishedTimeNanos_1 : finishedTimeNanos;
    isRunning = isRunning === VOID ? _this__u8e3s4.isRunning_1 : isRunning;
    return new AnimationState(_this__u8e3s4.typeConverter_1, value, AnimationVector_0(velocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function AnimationState_1(typeConverter, initialValue, initialVelocity, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? new Long(0, -2147483648) : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? new Long(0, -2147483648) : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    return new AnimationState(typeConverter, initialValue, typeConverter.get_convertToVector_s594l4_k$()(initialVelocity), lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  var androidx_compose_animation_core_AnimationVector$stable;
  var androidx_compose_animation_core_AnimationVector1D$stable;
  var androidx_compose_animation_core_AnimationVector2D$stable;
  var androidx_compose_animation_core_AnimationVector3D$stable;
  var androidx_compose_animation_core_AnimationVector4D$stable;
  function AnimationVector1D(initVal) {
    AnimationVector.call(this);
    this.value_1 = initVal;
    this.size_1 = 1;
  }
  protoOf(AnimationVector1D).set_value_tsbbnb_k$ = function (_set____db54di) {
    this.value_1 = _set____db54di;
  };
  protoOf(AnimationVector1D).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(AnimationVector1D).reset_x7qqys_k$ = function () {
    this.value_1 = 0.0;
  };
  protoOf(AnimationVector1D).newVector_ez1i80_k$ = function () {
    return new AnimationVector1D(0.0);
  };
  protoOf(AnimationVector1D).get_jz2icb_k$ = function (index) {
    if (index === 0) {
      return this.value_1;
    } else {
      return 0.0;
    }
  };
  protoOf(AnimationVector1D).set_ln2e3z_k$ = function (index, value) {
    if (index === 0) {
      this.value_1 = value;
    }
  };
  protoOf(AnimationVector1D).get_size_au00c9_k$ = function () {
    return this.size_1;
  };
  protoOf(AnimationVector1D).toString = function () {
    return 'AnimationVector1D: value = ' + this.value_1;
  };
  protoOf(AnimationVector1D).equals = function (other) {
    var tmp;
    if (other instanceof AnimationVector1D) {
      tmp = other.value_1 === this.value_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector1D).hashCode = function () {
    return getNumberHashCode(this.value_1);
  };
  function AnimationVector() {
  }
  function AnimationVector4D(v1, v2, v3, v4) {
    AnimationVector.call(this);
    this.v1__1 = v1;
    this.v2__1 = v2;
    this.v3__1 = v3;
    this.v4__1 = v4;
    this.size_1 = 4;
  }
  protoOf(AnimationVector4D).set_v1_dvpkib_k$ = function (_set____db54di) {
    this.v1__1 = _set____db54di;
  };
  protoOf(AnimationVector4D).get_v1_kntnng_k$ = function () {
    return this.v1__1;
  };
  protoOf(AnimationVector4D).set_v2_91mq5u_k$ = function (_set____db54di) {
    this.v2__1 = _set____db54di;
  };
  protoOf(AnimationVector4D).get_v2_kntnnf_k$ = function () {
    return this.v2__1;
  };
  protoOf(AnimationVector4D).set_v3_47jvtd_k$ = function (_set____db54di) {
    this.v3__1 = _set____db54di;
  };
  protoOf(AnimationVector4D).get_v3_kntnne_k$ = function () {
    return this.v3__1;
  };
  protoOf(AnimationVector4D).set_v4_miyj4_k$ = function (_set____db54di) {
    this.v4__1 = _set____db54di;
  };
  protoOf(AnimationVector4D).get_v4_kntnnd_k$ = function () {
    return this.v4__1;
  };
  protoOf(AnimationVector4D).reset_x7qqys_k$ = function () {
    this.v1__1 = 0.0;
    this.v2__1 = 0.0;
    this.v3__1 = 0.0;
    this.v4__1 = 0.0;
  };
  protoOf(AnimationVector4D).newVector_ez1i80_k$ = function () {
    return new AnimationVector4D(0.0, 0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector4D).get_jz2icb_k$ = function (index) {
    switch (index) {
      case 0:
        return this.v1__1;
      case 1:
        return this.v2__1;
      case 2:
        return this.v3__1;
      case 3:
        return this.v4__1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector4D).set_ln2e3z_k$ = function (index, value) {
    switch (index) {
      case 0:
        this.v1__1 = value;
        break;
      case 1:
        this.v2__1 = value;
        break;
      case 2:
        this.v3__1 = value;
        break;
      case 3:
        this.v4__1 = value;
        break;
    }
  };
  protoOf(AnimationVector4D).get_size_au00c9_k$ = function () {
    return this.size_1;
  };
  protoOf(AnimationVector4D).toString = function () {
    return 'AnimationVector4D: v1 = ' + this.v1__1 + ', v2 = ' + this.v2__1 + ', v3 = ' + this.v3__1 + ', v4 = ' + this.v4__1;
  };
  protoOf(AnimationVector4D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof AnimationVector4D) {
      tmp_2 = other.v1__1 === this.v1__1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.v2__1 === this.v2__1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.v3__1 === this.v3__1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.v4__1 === this.v4__1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector4D).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.v1__1), 31) + getNumberHashCode(this.v2__1) | 0, 31) + getNumberHashCode(this.v3__1) | 0, 31) + getNumberHashCode(this.v4__1) | 0;
  };
  function AnimationVector_0(v1) {
    return new AnimationVector1D(v1);
  }
  function AnimationVector2D(v1, v2) {
    AnimationVector.call(this);
    this.v1__1 = v1;
    this.v2__1 = v2;
    this.size_1 = 2;
  }
  protoOf(AnimationVector2D).set_v1_dvpkib_k$ = function (_set____db54di) {
    this.v1__1 = _set____db54di;
  };
  protoOf(AnimationVector2D).get_v1_kntnng_k$ = function () {
    return this.v1__1;
  };
  protoOf(AnimationVector2D).set_v2_91mq5u_k$ = function (_set____db54di) {
    this.v2__1 = _set____db54di;
  };
  protoOf(AnimationVector2D).get_v2_kntnnf_k$ = function () {
    return this.v2__1;
  };
  protoOf(AnimationVector2D).reset_x7qqys_k$ = function () {
    this.v1__1 = 0.0;
    this.v2__1 = 0.0;
  };
  protoOf(AnimationVector2D).newVector_ez1i80_k$ = function () {
    return new AnimationVector2D(0.0, 0.0);
  };
  protoOf(AnimationVector2D).get_jz2icb_k$ = function (index) {
    switch (index) {
      case 0:
        return this.v1__1;
      case 1:
        return this.v2__1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector2D).set_ln2e3z_k$ = function (index, value) {
    if (index === 0)
      this.v1__1 = value;
    else if (index === 1)
      this.v2__1 = value;
  };
  protoOf(AnimationVector2D).get_size_au00c9_k$ = function () {
    return this.size_1;
  };
  protoOf(AnimationVector2D).toString = function () {
    return 'AnimationVector2D: v1 = ' + this.v1__1 + ', v2 = ' + this.v2__1;
  };
  protoOf(AnimationVector2D).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AnimationVector2D) {
      tmp_0 = other.v1__1 === this.v1__1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.v2__1 === this.v2__1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector2D).hashCode = function () {
    return imul(getNumberHashCode(this.v1__1), 31) + getNumberHashCode(this.v2__1) | 0;
  };
  function AnimationVector_1(v1, v2) {
    return new AnimationVector2D(v1, v2);
  }
  function AnimationVector3D(v1, v2, v3) {
    AnimationVector.call(this);
    this.v1__1 = v1;
    this.v2__1 = v2;
    this.v3__1 = v3;
    this.size_1 = 3;
  }
  protoOf(AnimationVector3D).set_v1_dvpkib_k$ = function (_set____db54di) {
    this.v1__1 = _set____db54di;
  };
  protoOf(AnimationVector3D).get_v1_kntnng_k$ = function () {
    return this.v1__1;
  };
  protoOf(AnimationVector3D).set_v2_91mq5u_k$ = function (_set____db54di) {
    this.v2__1 = _set____db54di;
  };
  protoOf(AnimationVector3D).get_v2_kntnnf_k$ = function () {
    return this.v2__1;
  };
  protoOf(AnimationVector3D).set_v3_47jvtd_k$ = function (_set____db54di) {
    this.v3__1 = _set____db54di;
  };
  protoOf(AnimationVector3D).get_v3_kntnne_k$ = function () {
    return this.v3__1;
  };
  protoOf(AnimationVector3D).reset_x7qqys_k$ = function () {
    this.v1__1 = 0.0;
    this.v2__1 = 0.0;
    this.v3__1 = 0.0;
  };
  protoOf(AnimationVector3D).newVector_ez1i80_k$ = function () {
    return new AnimationVector3D(0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector3D).get_jz2icb_k$ = function (index) {
    switch (index) {
      case 0:
        return this.v1__1;
      case 1:
        return this.v2__1;
      case 2:
        return this.v3__1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector3D).set_ln2e3z_k$ = function (index, value) {
    switch (index) {
      case 0:
        this.v1__1 = value;
        break;
      case 1:
        this.v2__1 = value;
        break;
      case 2:
        this.v3__1 = value;
        break;
    }
  };
  protoOf(AnimationVector3D).get_size_au00c9_k$ = function () {
    return this.size_1;
  };
  protoOf(AnimationVector3D).toString = function () {
    return 'AnimationVector3D: v1 = ' + this.v1__1 + ', v2 = ' + this.v2__1 + ', v3 = ' + this.v3__1;
  };
  protoOf(AnimationVector3D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof AnimationVector3D) {
      tmp_1 = other.v1__1 === this.v1__1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.v2__1 === this.v2__1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.v3__1 === this.v3__1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector3D).hashCode = function () {
    return imul(imul(getNumberHashCode(this.v1__1), 31) + getNumberHashCode(this.v2__1) | 0, 31) + getNumberHashCode(this.v3__1) | 0;
  };
  function AnimationVector_2(v1, v2, v3) {
    return new AnimationVector3D(v1, v2, v3);
  }
  function AnimationVector_3(v1, v2, v3, v4) {
    return new AnimationVector4D(v1, v2, v3, v4);
  }
  function copy_1(_this__u8e3s4) {
    var newVector = newInstance(_this__u8e3s4);
    var inductionVariable = 0;
    var last = newVector.get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newVector.set_ln2e3z_k$(i, _this__u8e3s4.get_jz2icb_k$(i));
      }
       while (inductionVariable < last);
    return newVector;
  }
  function newInstance(_this__u8e3s4) {
    var tmp = _this__u8e3s4.newVector_ez1i80_k$();
    return tmp instanceof AnimationVector ? tmp : THROW_CCE();
  }
  function copyFrom(_this__u8e3s4, source) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.set_ln2e3z_k$(i, source.get_jz2icb_k$(i));
      }
       while (inductionVariable < last);
  }
  function get_OurPercentCache() {
    _init_properties_ArcSpline_kt__f15lqp();
    return OurPercentCache;
  }
  var OurPercentCache;
  var androidx_compose_animation_core_ArcSpline_Arc$stable;
  var androidx_compose_animation_core_ArcSpline$stable;
  function _get_x1__ndcd0y($this) {
    return $this.x1__1;
  }
  function _get_y1__ndcdrn($this) {
    return $this.y1__1;
  }
  function _get_x2__ndcd1t($this) {
    return $this.x2__1;
  }
  function _get_y2__ndcdsi($this) {
    return $this.y2__1;
  }
  function _set_arcDistance__dzrwji($this, _set____db54di) {
    $this.arcDistance_1 = _set____db54di;
  }
  function _get_arcDistance__qqxz3q($this) {
    return $this.arcDistance_1;
  }
  function _set_tmpSinAngle__to36bx($this, _set____db54di) {
    $this.tmpSinAngle_1 = _set____db54di;
  }
  function _get_tmpSinAngle__mazzz($this) {
    return $this.tmpSinAngle_1;
  }
  function _set_tmpCosAngle__fdp3z2($this, _set____db54di) {
    $this.tmpCosAngle_1 = _set____db54di;
  }
  function _get_tmpCosAngle__ewp2cu($this) {
    return $this.tmpCosAngle_1;
  }
  function _get_lut__e6cfza($this) {
    return $this.lut_1;
  }
  function _get_oneOverDeltaTime__6tlni8($this) {
    return $this.oneOverDeltaTime_1;
  }
  function _get_arcVelocity__3u700u($this) {
    return $this.arcVelocity_1;
  }
  function _get_vertical__1pbgut($this) {
    return $this.vertical_1;
  }
  function calcAngle($this, time) {
    var percent = ($this.vertical_1 === -1.0 ? $this.time2__1 - time : time - $this.time1__1) * $this.oneOverDeltaTime_1;
    return 1.5707964 * lookup($this, percent);
  }
  function lookup($this, v) {
    if (v <= 0) {
      return 0.0;
    }
    if (v >= 1) {
      return 1.0;
    }
    var pos = v * 100;
    var iv = numberToInt(pos);
    var off = pos - numberToInt(pos);
    return $this.lut_1[iv] + off * ($this.lut_1[iv + 1 | 0] - $this.lut_1[iv]);
  }
  function access$_get_tmpSinAngle__itfxbz($this) {
    return $this.tmpSinAngle_1;
  }
  function access$_get_tmpCosAngle__x3tzou($this) {
    return $this.tmpCosAngle_1;
  }
  function _get_arcs__d3xgqy($this) {
    return $this.arcs_1;
  }
  function _get_isExtrapolate__h1pzzu($this) {
    return $this.isExtrapolate_1;
  }
  function Arc(mode, time1, time2, x1, y1, x2, y2) {
    this.time1__1 = time1;
    this.time2__1 = time2;
    this.x1__1 = x1;
    this.y1__1 = y1;
    this.x2__1 = x2;
    this.y2__1 = y2;
    this.arcDistance_1 = 0.0;
    this.tmpSinAngle_1 = 0.0;
    this.tmpCosAngle_1 = 0.0;
    var dx = this.x2__1 - this.x1__1;
    var dy = this.y2__1 - this.y1__1;
    var isVertical;
    switch (mode) {
      case 1:
        isVertical = true;
        break;
      case 5:
        isVertical = dy < 0;
        break;
      case 4:
        isVertical = dy > 0;
        break;
      default:
        isVertical = false;
        break;
    }
    this.vertical_1 = isVertical ? -1.0 : 1.0;
    this.oneOverDeltaTime_1 = 1 / (this.time2__1 - this.time1__1);
    this.lut_1 = new Float32Array(101);
    var isLinear = mode === 3;
    var tmp;
    var tmp_0;
    if (isLinear) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.math.abs' call
      tmp_0 = Math.abs(dx) < 0.001;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.math.abs' call
      tmp = Math.abs(dy) < 0.001;
    }
    if (tmp) {
      isLinear = true;
      var tmp_1 = this;
      // Inline function 'kotlin.math.hypot' call
      tmp_1.arcDistance_1 = hypot(dy, dx);
      this.arcVelocity_1 = this.arcDistance_1 * this.oneOverDeltaTime_1;
      this.ellipseCenterX_1 = dx * this.oneOverDeltaTime_1;
      this.ellipseCenterY_1 = dy * this.oneOverDeltaTime_1;
      this.ellipseA_1 = NaN;
      this.ellipseB_1 = NaN;
    } else {
      this.ellipseA_1 = dx * this.vertical_1;
      this.ellipseB_1 = dy * -this.vertical_1;
      this.ellipseCenterX_1 = isVertical ? this.x2__1 : this.x1__1;
      this.ellipseCenterY_1 = isVertical ? this.y1__1 : this.y2__1;
      this.buildTable_8xyjbn_k$(this.x1__1, this.y1__1, this.x2__1, this.y2__1);
      this.arcVelocity_1 = this.arcDistance_1 * this.oneOverDeltaTime_1;
    }
    this.isLinear_1 = isLinear;
  }
  protoOf(Arc).get_time1_iz2xgb_k$ = function () {
    return this.time1__1;
  };
  protoOf(Arc).get_time2_iz2xgc_k$ = function () {
    return this.time2__1;
  };
  protoOf(Arc).get_ellipseA_g3iew9_k$ = function () {
    return this.ellipseA_1;
  };
  protoOf(Arc).get_ellipseB_fqwg46_k$ = function () {
    return this.ellipseB_1;
  };
  protoOf(Arc).get_isLinear_yctah7_k$ = function () {
    return this.isLinear_1;
  };
  protoOf(Arc).get_ellipseCenterX_3tytqt_k$ = function () {
    return this.ellipseCenterX_1;
  };
  protoOf(Arc).get_ellipseCenterY_zcqd7w_k$ = function () {
    return this.ellipseCenterY_1;
  };
  protoOf(Arc).get_linearDX_e7yrb5_k$ = function () {
    return this.ellipseCenterX_1;
  };
  protoOf(Arc).get_linearDY_oyqfnk_k$ = function () {
    return this.ellipseCenterY_1;
  };
  protoOf(Arc).setPoint_o7o21y_k$ = function (time) {
    // Inline function 'androidx.compose.animation.core.Arc.calcAngle' call
    var percent = (this.vertical_1 === -1.0 ? this.time2__1 - time : time - this.time1__1) * this.oneOverDeltaTime_1;
    var angle = 1.5707964 * lookup(this, percent);
    var tmp = this;
    // Inline function 'kotlin.math.sin' call
    tmp.tmpSinAngle_1 = Math.sin(angle);
    var tmp_0 = this;
    // Inline function 'kotlin.math.cos' call
    tmp_0.tmpCosAngle_1 = Math.cos(angle);
  };
  protoOf(Arc).calcX_1k7uzn_k$ = function () {
    return this.ellipseCenterX_1 + this.ellipseA_1 * access$_get_tmpSinAngle__itfxbz(this);
  };
  protoOf(Arc).calcY_1k7uzo_k$ = function () {
    return this.ellipseCenterY_1 + this.ellipseB_1 * access$_get_tmpCosAngle__x3tzou(this);
  };
  protoOf(Arc).calcDX_mmcdp3_k$ = function () {
    var vx = this.ellipseA_1 * this.tmpCosAngle_1;
    var vy = -this.ellipseB_1 * this.tmpSinAngle_1;
    // Inline function 'kotlin.math.hypot' call
    var tmp$ret$0 = hypot(vx, vy);
    var norm = this.arcVelocity_1 / tmp$ret$0;
    return vx * this.vertical_1 * norm;
  };
  protoOf(Arc).calcDY_mmcdp2_k$ = function () {
    var vx = this.ellipseA_1 * this.tmpCosAngle_1;
    var vy = -this.ellipseB_1 * this.tmpSinAngle_1;
    // Inline function 'kotlin.math.hypot' call
    var tmp$ret$0 = hypot(vx, vy);
    var norm = this.arcVelocity_1 / tmp$ret$0;
    return vy * this.vertical_1 * norm;
  };
  protoOf(Arc).getLinearX_1v55xh_k$ = function (time) {
    var t = time;
    t = (t - this.time1__1) * this.oneOverDeltaTime_1;
    return this.x1__1 + t * (this.x2__1 - this.x1__1);
  };
  protoOf(Arc).getLinearY_729ra_k$ = function (time) {
    var t = time;
    t = (t - this.time1__1) * this.oneOverDeltaTime_1;
    return this.y1__1 + t * (this.y2__1 - this.y1__1);
  };
  protoOf(Arc).buildTable_8xyjbn_k$ = function (x1, y1, x2, y2) {
    var a = x2 - x1;
    var b = y1 - y2;
    var lx = 0.0;
    var ly = b;
    var dist = 0.0;
    var ourPercent = get_OurPercentCache();
    var lastIndex = ourPercent.length - 1 | 0;
    var lastIndexFloat = lastIndex;
    var lut = this.lut_1;
    var inductionVariable = 1;
    if (inductionVariable <= lastIndex)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.core.toRadians' call
        var angle = 90.0 * i / lastIndex * (3.141592653589793 / 180.0);
        // Inline function 'kotlin.math.sin' call
        var s = Math.sin(angle);
        // Inline function 'kotlin.math.cos' call
        var c = Math.cos(angle);
        var px = a * s;
        var py = b * c;
        var tmp = dist;
        var tmp0 = px - lx;
        // Inline function 'kotlin.math.hypot' call
        var y = py - ly;
        dist = tmp + hypot(tmp0, y);
        ourPercent[i] = dist;
        lx = px;
        ly = py;
      }
       while (!(i === lastIndex));
    this.arcDistance_1 = dist;
    var inductionVariable_0 = 1;
    if (inductionVariable_0 <= lastIndex)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _index_0__fvwizt = i_0;
        ourPercent[_index_0__fvwizt] = ourPercent[_index_0__fvwizt] / dist;
      }
       while (!(i_0 === lastIndex));
    var lutLastIndex = 100;
    var inductionVariable_1 = 0;
    var last = lut.length - 1 | 0;
    if (inductionVariable_1 <= last)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var pos = i_1 / lutLastIndex;
        // Inline function 'androidx.compose.animation.core.binarySearch' call
        var index = binarySearch(ourPercent, pos);
        if (index >= 0) {
          lut[i_1] = index / lastIndexFloat;
        } else if (index === -1) {
          lut[i_1] = 0.0;
        } else {
          var p1 = (-index | 0) - 2 | 0;
          var p2 = (-index | 0) - 1 | 0;
          var ans = (p1 + (pos - ourPercent[p1]) / (ourPercent[p2] - ourPercent[p1])) / lastIndexFloat;
          lut[i_1] = ans;
        }
      }
       while (inductionVariable_1 <= last);
  };
  function ArcSpline(arcModes, timePoints, y) {
    this.isExtrapolate_1 = true;
    var mode = {_v: 1};
    var last = {_v: 1};
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = timePoints.length - 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      switch (arcModes[tmp_3]) {
        case 1:
          mode._v = 1;
          last._v = mode._v;
          break;
        case 2:
          mode._v = 2;
          last._v = mode._v;
          break;
        case 3:
          mode._v = last._v === 1 ? 2 : 1;
          last._v = mode._v;
          break;
        case 0:
          mode._v = 3;
          break;
        case 5:
          mode._v = 5;
          break;
        case 4:
          mode._v = 4;
          break;
      }
      var yArray = y[tmp_3];
      var yArray1 = y[tmp_3 + 1 | 0];
      var timeArray = timePoints[tmp_3];
      var timeArray1 = timePoints[tmp_3 + 1 | 0];
      var dim = (yArray.length / 2 | 0) + (yArray.length % 2 | 0) | 0;
      var tmp_4 = 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_5 = Array(dim);
      while (tmp_4 < dim) {
        var tmp_6 = tmp_4;
        var k = imul(tmp_6, 2);
        tmp_5[tmp_6] = new Arc(mode._v, timeArray, timeArray1, yArray[k], yArray[k + 1 | 0], yArray1[k], yArray1[k + 1 | 0]);
        tmp_4 = tmp_4 + 1 | 0;
      }
      tmp_2[tmp_3] = tmp_5;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.arcs_1 = tmp_2;
  }
  protoOf(ArcSpline).getPos_a1xi8i_k$ = function (time, v) {
    var t = time;
    var arcs = this.arcs_1;
    var lastIndex = arcs.length - 1 | 0;
    var start = arcs[0][0].time1__1;
    var end = arcs[lastIndex][0].time2__1;
    var size = v.length;
    if (this.isExtrapolate_1) {
      if (t < start || t > end) {
        var p;
        var t0;
        if (t > end) {
          p = lastIndex;
          t0 = end;
        } else {
          p = 0;
          t0 = start;
        }
        var dt = t - t0;
        var i = 0;
        var j = 0;
        while (i < (size - 1 | 0)) {
          var arc = arcs[p][j];
          if (arc.isLinear_1) {
            var tmp = i;
            var tmp_0 = arc.getLinearX_1v55xh_k$(t0);
            // Inline function 'androidx.compose.animation.core.Arc.linearDX' call
            v[tmp] = tmp_0 + dt * arc.ellipseCenterX_1;
            var tmp_1 = i + 1 | 0;
            var tmp_2 = arc.getLinearY_729ra_k$(t0);
            // Inline function 'androidx.compose.animation.core.Arc.linearDY' call
            v[tmp_1] = tmp_2 + dt * arc.ellipseCenterY_1;
          } else {
            arc.setPoint_o7o21y_k$(t0);
            var tmp_3 = i;
            // Inline function 'androidx.compose.animation.core.Arc.calcX' call
            v[tmp_3] = arc.ellipseCenterX_1 + arc.ellipseA_1 * access$_get_tmpSinAngle__itfxbz(arc) + dt * arc.calcDX_mmcdp3_k$();
            var tmp_4 = i + 1 | 0;
            // Inline function 'androidx.compose.animation.core.Arc.calcY' call
            v[tmp_4] = arc.ellipseCenterY_1 + arc.ellipseB_1 * access$_get_tmpCosAngle__x3tzou(arc) + dt * arc.calcDY_mmcdp2_k$();
          }
          i = i + 2 | 0;
          j = j + 1 | 0;
        }
        return Unit_getInstance();
      }
    } else {
      // Inline function 'kotlin.math.max' call
      var a = t;
      t = Math.max(a, start);
      // Inline function 'kotlin.math.min' call
      var a_0 = t;
      t = Math.min(a_0, end);
    }
    var populated = false;
    var inductionVariable = 0;
    var last = arcs.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var k = 0;
        var j_0 = 0;
        while (j_0 < (size - 1 | 0)) {
          var arc_0 = arcs[i_0][k];
          if (t <= arc_0.time2__1) {
            if (arc_0.isLinear_1) {
              v[j_0] = arc_0.getLinearX_1v55xh_k$(t);
              v[j_0 + 1 | 0] = arc_0.getLinearY_729ra_k$(t);
            } else {
              arc_0.setPoint_o7o21y_k$(t);
              var tmp_5 = j_0;
              // Inline function 'androidx.compose.animation.core.Arc.calcX' call
              v[tmp_5] = arc_0.ellipseCenterX_1 + arc_0.ellipseA_1 * access$_get_tmpSinAngle__itfxbz(arc_0);
              var tmp_6 = j_0 + 1 | 0;
              // Inline function 'androidx.compose.animation.core.Arc.calcY' call
              v[tmp_6] = arc_0.ellipseCenterY_1 + arc_0.ellipseB_1 * access$_get_tmpCosAngle__x3tzou(arc_0);
            }
            populated = true;
          }
          j_0 = j_0 + 2 | 0;
          k = k + 1 | 0;
        }
        if (populated) {
          return Unit_getInstance();
        }
      }
       while (inductionVariable <= last);
  };
  protoOf(ArcSpline).getSlope_uth26d_k$ = function (time, v) {
    var arcs = this.arcs_1;
    var tmp2 = arcs[0][0].time1__1;
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue = arcs[arcs.length - 1 | 0][0].time2__1;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = time < tmp2 ? tmp2 : time;
    var t = this_0 > maximumValue ? maximumValue : this_0;
    var size = v.length;
    var populated = false;
    var inductionVariable = 0;
    var last = arcs.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var j = 0;
        var k = 0;
        while (j < (size - 1 | 0)) {
          var arc = arcs[i][k];
          if (t <= arc.time2__1) {
            if (arc.isLinear_1) {
              var tmp = j;
              // Inline function 'androidx.compose.animation.core.Arc.linearDX' call
              v[tmp] = arc.ellipseCenterX_1;
              var tmp_0 = j + 1 | 0;
              // Inline function 'androidx.compose.animation.core.Arc.linearDY' call
              v[tmp_0] = arc.ellipseCenterY_1;
            } else {
              arc.setPoint_o7o21y_k$(t);
              v[j] = arc.calcDX_mmcdp3_k$();
              v[j + 1 | 0] = arc.calcDY_mmcdp2_k$();
            }
            populated = true;
          }
          j = j + 2 | 0;
          k = k + 1 | 0;
        }
        if (populated) {
          return Unit_getInstance();
        }
      }
       while (inductionVariable <= last);
  };
  function toRadians(value) {
    _init_properties_ArcSpline_kt__f15lqp();
    return value * (3.141592653589793 / 180.0);
  }
  var properties_initialized_ArcSpline_kt_jqay4z;
  function _init_properties_ArcSpline_kt__f15lqp() {
    if (!properties_initialized_ArcSpline_kt_jqay4z) {
      properties_initialized_ArcSpline_kt_jqay4z = true;
      OurPercentCache = new Float32Array(91);
      androidx_compose_animation_core_ArcSpline_Arc$stable = 8;
      androidx_compose_animation_core_ArcSpline$stable = 8;
    }
  }
  function DecayAnimationSpec() {
  }
  function generateDecayAnimationSpec(_this__u8e3s4) {
    return new DecayAnimationSpecImpl(_this__u8e3s4);
  }
  function exponentialDecay(frictionMultiplier, absVelocityThreshold) {
    frictionMultiplier = frictionMultiplier === VOID ? 1.0 : frictionMultiplier;
    absVelocityThreshold = absVelocityThreshold === VOID ? 0.1 : absVelocityThreshold;
    return generateDecayAnimationSpec(new FloatExponentialDecaySpec(frictionMultiplier, absVelocityThreshold));
  }
  function calculateTargetValue(_this__u8e3s4, initialValue, initialVelocity) {
    var vectorizedSpec = _this__u8e3s4.vectorize_pto10n_k$(get_VectorConverter_0(FloatCompanionObject_getInstance()));
    var targetVector = vectorizedSpec.getTargetValue_rut47u_k$(AnimationVector_0(initialValue), AnimationVector_0(initialVelocity));
    return targetVector.get_value_j01efc_k$();
  }
  function _get_floatDecaySpec__7mcolu($this) {
    return $this.floatDecaySpec_1;
  }
  function DecayAnimationSpecImpl(floatDecaySpec) {
    this.floatDecaySpec_1 = floatDecaySpec;
  }
  protoOf(DecayAnimationSpecImpl).vectorize_pto10n_k$ = function (typeConverter) {
    return new VectorizedFloatDecaySpec(this.floatDecaySpec_1);
  };
  function _set_valueVector__dppd9t($this, _set____db54di) {
    $this.valueVector_1 = _set____db54di;
  }
  function _get_valueVector__r10idf($this) {
    var tmp = $this.valueVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _set_velocityVector__vm30d3($this, _set____db54di) {
    $this.velocityVector_1 = _set____db54di;
  }
  function _get_velocityVector__dvxlkl($this) {
    var tmp = $this.velocityVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _set_targetVector__nu6z6r($this, _set____db54di) {
    $this.targetVector_1 = _set____db54di;
  }
  function _get_targetVector__vn6c89($this) {
    var tmp = $this.targetVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('targetVector');
    }
  }
  function VectorizedFloatDecaySpec(floatDecaySpec) {
    this.floatDecaySpec_1 = floatDecaySpec;
    this.absVelocityThreshold_1 = this.floatDecaySpec_1.get_absVelocityThreshold_wsgqo5_k$();
  }
  protoOf(VectorizedFloatDecaySpec).get_floatDecaySpec_206nc2_k$ = function () {
    return this.floatDecaySpec_1;
  };
  protoOf(VectorizedFloatDecaySpec).get_absVelocityThreshold_wsgqo5_k$ = function () {
    return this.absVelocityThreshold_1;
  };
  protoOf(VectorizedFloatDecaySpec).getValueFromNanos_huzcys_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.valueVector_1 == null)) {
      this.valueVector_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf(this).get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf(this).set_ln2e3z_k$(i, this.floatDecaySpec_1.getValueFromNanos_vizg24_k$(playTimeNanos, initialValue.get_jz2icb_k$(i), initialVelocity.get_jz2icb_k$(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf(this);
  };
  protoOf(VectorizedFloatDecaySpec).getDurationNanos_roqu2j_k$ = function (initialValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    if (!!(this.velocityVector_1 == null)) {
      this.velocityVector_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0 = maxDuration;
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = this.floatDecaySpec_1.getDurationNanos_dl2v11_k$(initialValue.get_jz2icb_k$(i), initialVelocity.get_jz2icb_k$(i));
        maxDuration = compare(tmp0, b) >= 0 ? tmp0 : b;
      }
       while (inductionVariable < last);
    return maxDuration;
  };
  protoOf(VectorizedFloatDecaySpec).getVelocityFromNanos_2v7bwc_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    if (!!(this.velocityVector_1 == null)) {
      this.velocityVector_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl(this).set_ln2e3z_k$(i, this.floatDecaySpec_1.getVelocityFromNanos_eyb6gk_k$(playTimeNanos, initialValue.get_jz2icb_k$(i), initialVelocity.get_jz2icb_k$(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl(this);
  };
  protoOf(VectorizedFloatDecaySpec).getTargetValue_rut47u_k$ = function (initialValue, initialVelocity) {
    if (!!(this.targetVector_1 == null)) {
      this.targetVector_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_targetVector__vn6c89(this).get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_targetVector__vn6c89(this).set_ln2e3z_k$(i, this.floatDecaySpec_1.getTargetValue_k8zsye_k$(initialValue.get_jz2icb_k$(i), initialVelocity.get_jz2icb_k$(i)));
      }
       while (inductionVariable < last);
    return _get_targetVector__vn6c89(this);
  };
  var androidx_compose_animation_core_DeferredTargetAnimation$stable;
  function get_FastOutSlowInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return FastOutSlowInEasing;
  }
  var FastOutSlowInEasing;
  function get_LinearOutSlowInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return LinearOutSlowInEasing;
  }
  var LinearOutSlowInEasing;
  function get_FastOutLinearInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return FastOutLinearInEasing;
  }
  var FastOutLinearInEasing;
  function get_LinearEasing() {
    _init_properties_Easing_kt__v6fq45();
    return LinearEasing;
  }
  var LinearEasing;
  var androidx_compose_animation_core_CubicBezierEasing$stable;
  function _get_a__7mlogg($this) {
    return $this.a_1;
  }
  function _get_b__7mlohb($this) {
    return $this.b_1;
  }
  function _get_c__7mloi6($this) {
    return $this.c_1;
  }
  function _get_d__7mloj1($this) {
    return $this.d_1;
  }
  function _get_min__e6ctxb($this) {
    return $this.min_1;
  }
  function _get_max__e6co8d($this) {
    return $this.max_1;
  }
  function throwNoSolution($this, fraction) {
    throw IllegalArgumentException_init_$Create$('The cubic curve with parameters (' + $this.a_1 + ', ' + $this.b_1 + ', ' + $this.c_1 + ', ' + $this.d_1 + ') has no solution at ' + fraction);
  }
  function CubicBezierEasing(a, b, c, d) {
    this.a_1 = a;
    this.b_1 = b;
    this.c_1 = c;
    this.d_1 = d;
    // Inline function 'androidx.compose.animation.core.requirePrecondition' call
    if (!(!isNaN_0(this.a_1) && !isNaN_0(this.b_1) && !isNaN_0(this.c_1) && !isNaN_0(this.d_1))) {
      var tmp$ret$1 = 'Parameters to CubicBezierEasing cannot be NaN. Actual parameters are: ' + this.a_1 + ', ' + this.b_1 + ', ' + this.c_1 + ', ' + this.d_1 + '.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    var roots = new Float32Array(5);
    var extrema = computeCubicVerticalBounds(0.0, this.b_1, this.d_1, 1.0, roots, 0);
    var tmp = this;
    // Inline function 'androidx.collection.FloatFloatPair.first' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    var bits = convertToInt(shiftRight(_FloatFloatPair___get_packedValue__impl__5lczxp(extrema), 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    tmp.min_1 = floatFromBits(bits);
    var tmp_0 = this;
    // Inline function 'androidx.collection.FloatFloatPair.second' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(_FloatFloatPair___get_packedValue__impl__5lczxp(extrema), new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    tmp_0.max_1 = floatFromBits(bits_0);
  }
  protoOf(CubicBezierEasing).transform_twmo38_k$ = function (fraction) {
    var tmp;
    if (fraction > 0.0 && fraction < 1.0) {
      // Inline function 'kotlin.math.max' call
      var b = 1.1920929E-7;
      var f = Math.max(fraction, b);
      var t = findFirstCubicRoot(0.0 - f, this.a_1 - f, this.c_1 - f, 1.0 - f);
      if (isNaN_0(t)) {
        throwNoSolution(this, fraction);
      }
      var tmp0 = evaluateCubic(this.b_1, this.d_1, t);
      var tmp2 = this.min_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue = this.max_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_0 = tmp0 < tmp2 ? tmp2 : tmp0;
      tmp = this_0 > maximumValue ? maximumValue : this_0;
    } else {
      tmp = fraction;
    }
    return tmp;
  };
  protoOf(CubicBezierEasing).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof CubicBezierEasing) {
      tmp_2 = this.a_1 === other.a_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.b_1 === other.b_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.c_1 === other.c_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.d_1 === other.d_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CubicBezierEasing).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.a_1), 31) + getNumberHashCode(this.b_1) | 0, 31) + getNumberHashCode(this.c_1) | 0, 31) + getNumberHashCode(this.d_1) | 0;
  };
  protoOf(CubicBezierEasing).toString = function () {
    return 'CubicBezierEasing(a=' + this.a_1 + ', b=' + this.b_1 + ', c=' + this.c_1 + ', d=' + this.d_1 + ')';
  };
  function Easing() {
  }
  function sam$androidx_compose_animation_core_Easing$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0).transform_twmo38_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Easing) : false) {
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
  protoOf(sam$androidx_compose_animation_core_Easing$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function LinearEasing$lambda(fraction) {
    _init_properties_Easing_kt__v6fq45();
    return fraction;
  }
  var properties_initialized_Easing_kt_af4f4d;
  function _init_properties_Easing_kt__v6fq45() {
    if (!properties_initialized_Easing_kt_af4f4d) {
      properties_initialized_Easing_kt_af4f4d = true;
      FastOutSlowInEasing = new CubicBezierEasing(0.4, 0.0, 0.2, 1.0);
      LinearOutSlowInEasing = new CubicBezierEasing(0.0, 0.0, 0.2, 1.0);
      FastOutLinearInEasing = new CubicBezierEasing(0.4, 0.0, 1.0, 1.0);
      var tmp = LinearEasing$lambda;
      LinearEasing = new sam$androidx_compose_animation_core_Easing$0(tmp);
      androidx_compose_animation_core_CubicBezierEasing$stable = 0;
    }
  }
  function get_Ease() {
    _init_properties_EasingFunctions_kt__whrude();
    return Ease;
  }
  var Ease;
  function get_EaseOut() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOut;
  }
  var EaseOut;
  function get_EaseIn() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseIn;
  }
  var EaseIn;
  function get_EaseInOut() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOut;
  }
  var EaseInOut;
  function get_EaseInSine() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInSine;
  }
  var EaseInSine;
  function get_EaseOutSine() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutSine;
  }
  var EaseOutSine;
  function get_EaseInOutSine() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutSine;
  }
  var EaseInOutSine;
  function get_EaseInCubic() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInCubic;
  }
  var EaseInCubic;
  function get_EaseOutCubic() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutCubic;
  }
  var EaseOutCubic;
  function get_EaseInOutCubic() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutCubic;
  }
  var EaseInOutCubic;
  function get_EaseInQuint() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInQuint;
  }
  var EaseInQuint;
  function get_EaseOutQuint() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutQuint;
  }
  var EaseOutQuint;
  function get_EaseInOutQuint() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutQuint;
  }
  var EaseInOutQuint;
  function get_EaseInCirc() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInCirc;
  }
  var EaseInCirc;
  function get_EaseOutCirc() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutCirc;
  }
  var EaseOutCirc;
  function get_EaseInOutCirc() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutCirc;
  }
  var EaseInOutCirc;
  function get_EaseInQuad() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInQuad;
  }
  var EaseInQuad;
  function get_EaseOutQuad() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutQuad;
  }
  var EaseOutQuad;
  function get_EaseInOutQuad() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutQuad;
  }
  var EaseInOutQuad;
  function get_EaseInQuart() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInQuart;
  }
  var EaseInQuart;
  function get_EaseOutQuart() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutQuart;
  }
  var EaseOutQuart;
  function get_EaseInOutQuart() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutQuart;
  }
  var EaseInOutQuart;
  function get_EaseInExpo() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInExpo;
  }
  var EaseInExpo;
  function get_EaseOutExpo() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutExpo;
  }
  var EaseOutExpo;
  function get_EaseInOutExpo() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutExpo;
  }
  var EaseInOutExpo;
  function get_EaseInBack() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInBack;
  }
  var EaseInBack;
  function get_EaseOutBack() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutBack;
  }
  var EaseOutBack;
  function get_EaseInOutBack() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutBack;
  }
  var EaseInOutBack;
  function get_EaseInElastic() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInElastic;
  }
  var EaseInElastic;
  function get_EaseOutElastic() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutElastic;
  }
  var EaseOutElastic;
  function get_EaseInOutElastic() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutElastic;
  }
  var EaseInOutElastic;
  function get_EaseOutBounce() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseOutBounce;
  }
  var EaseOutBounce;
  function get_EaseInBounce() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInBounce;
  }
  var EaseInBounce;
  function get_EaseInOutBounce() {
    _init_properties_EasingFunctions_kt__whrude();
    return EaseInOutBounce;
  }
  var EaseInOutBounce;
  function sam$androidx_compose_animation_core_Easing$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0_0).transform_twmo38_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Easing) : false) {
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
  protoOf(sam$androidx_compose_animation_core_Easing$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_animation_core_Easing$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0_1).transform_twmo38_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_1).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Easing) : false) {
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
  protoOf(sam$androidx_compose_animation_core_Easing$0_1).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_animation_core_Easing$0_2(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0_2).transform_twmo38_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_2).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Easing) : false) {
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
  protoOf(sam$androidx_compose_animation_core_Easing$0_2).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_animation_core_Easing$0_3(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0_3).transform_twmo38_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_3).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_3).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Easing) : false) {
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
  protoOf(sam$androidx_compose_animation_core_Easing$0_3).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_animation_core_Easing$0_4(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0_4).transform_twmo38_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_4).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_4).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Easing) : false) {
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
  protoOf(sam$androidx_compose_animation_core_Easing$0_4).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_animation_core_Easing$0_5(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0_5).transform_twmo38_k$ = function (fraction) {
    return this.function_1(fraction);
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_5).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0_5).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Easing) : false) {
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
  protoOf(sam$androidx_compose_animation_core_Easing$0_5).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function EaseInElastic$lambda(fraction) {
    _init_properties_EasingFunctions_kt__whrude();
    var c4 = 2.0 * 3.141592653589793 / 3.0;
    var tmp;
    switch (fraction) {
      case 0.0:
        tmp = 0.0;
        break;
      case 1.0:
        tmp = 1.0;
        break;
      default:
        // Inline function 'kotlin.math.pow' call

        var x = 10.0 * fraction - 10.0;
        var tmp_0 = -Math.pow(2.0, x);
        // Inline function 'kotlin.math.sin' call

        var x_0 = (fraction * 10.0 - 10.75) * c4;
        tmp = tmp_0 * Math.sin(x_0);
        break;
    }
    return tmp;
  }
  function EaseOutElastic$lambda(fraction) {
    _init_properties_EasingFunctions_kt__whrude();
    var c4 = 2.0 * 3.141592653589793 / 3.0;
    var tmp;
    switch (fraction) {
      case 0.0:
        tmp = 0.0;
        break;
      case 1.0:
        tmp = 1.0;
        break;
      default:
        // Inline function 'kotlin.math.pow' call

        var x = -10.0 * fraction;
        var tmp_0 = Math.pow(2.0, x);
        // Inline function 'kotlin.math.sin' call

        var x_0 = (fraction * 10.0 - 0.75) * c4;
        tmp = tmp_0 * Math.sin(x_0) + 1.0;
        break;
    }
    return tmp;
  }
  function EaseInOutElastic$lambda(fraction) {
    _init_properties_EasingFunctions_kt__whrude();
    var c5 = 2.0 * 3.141592653589793 / 4.5;
    var tmp;
    if (fraction === 0.0) {
      tmp = 0.0;
    } else if (fraction === 1.0) {
      tmp = 1.0;
    } else if (0.0 <= fraction ? fraction <= 0.5 : false) {
      // Inline function 'kotlin.math.pow' call
      var x = 20.0 * fraction - 10.0;
      var tmp_0 = Math.pow(2.0, x);
      // Inline function 'kotlin.math.sin' call
      var x_0 = (20.0 * fraction - 11.125) * c5;
      tmp = -(tmp_0 * Math.sin(x_0)) / 2.0;
    } else {
      // Inline function 'kotlin.math.pow' call
      var x_1 = -20.0 * fraction + 10.0;
      var tmp_1 = Math.pow(2.0, x_1);
      // Inline function 'kotlin.math.sin' call
      var x_2 = (fraction * 20.0 - 11.125) * c5;
      tmp = tmp_1 * Math.sin(x_2) / 2.0 + 1.0;
    }
    return tmp;
  }
  function EaseOutBounce$lambda(fraction) {
    _init_properties_EasingFunctions_kt__whrude();
    var n1 = 7.5625;
    var d1 = 2.75;
    var newFraction = fraction;
    var tmp;
    if (newFraction < 1.0 / d1) {
      tmp = n1 * newFraction * newFraction;
    } else if (newFraction < 2.0 / d1) {
      newFraction = newFraction - 1.5 / d1;
      tmp = n1 * newFraction * newFraction + 0.75;
    } else if (newFraction < 2.5 / d1) {
      newFraction = newFraction - 2.25 / d1;
      tmp = n1 * newFraction * newFraction + 0.9375;
    } else {
      newFraction = newFraction - 2.625 / d1;
      tmp = n1 * newFraction * newFraction + 0.984375;
    }
    return tmp;
  }
  function EaseInBounce$lambda(fraction) {
    _init_properties_EasingFunctions_kt__whrude();
    return 1 - get_EaseOutBounce().transform_twmo38_k$(1.0 - fraction);
  }
  function EaseInOutBounce$lambda(fraction) {
    _init_properties_EasingFunctions_kt__whrude();
    var tmp;
    if (fraction < 0.5) {
      tmp = (1 - get_EaseOutBounce().transform_twmo38_k$(1.0 - 2.0 * fraction)) / 2.0;
    } else {
      tmp = (1 + get_EaseOutBounce().transform_twmo38_k$(2.0 * fraction - 1.0)) / 2.0;
    }
    return tmp;
  }
  var properties_initialized_EasingFunctions_kt_3rrobk;
  function _init_properties_EasingFunctions_kt__whrude() {
    if (!properties_initialized_EasingFunctions_kt_3rrobk) {
      properties_initialized_EasingFunctions_kt_3rrobk = true;
      Ease = new CubicBezierEasing(0.25, 0.1, 0.25, 1.0);
      EaseOut = new CubicBezierEasing(0.0, 0.0, 0.58, 1.0);
      EaseIn = new CubicBezierEasing(0.42, 0.0, 1.0, 1.0);
      EaseInOut = new CubicBezierEasing(0.42, 0.0, 0.58, 1.0);
      EaseInSine = new CubicBezierEasing(0.12, 0.0, 0.39, 0.0);
      EaseOutSine = new CubicBezierEasing(0.61, 1.0, 0.88, 1.0);
      EaseInOutSine = new CubicBezierEasing(0.37, 0.0, 0.63, 1.0);
      EaseInCubic = new CubicBezierEasing(0.32, 0.0, 0.67, 0.0);
      EaseOutCubic = new CubicBezierEasing(0.33, 1.0, 0.68, 1.0);
      EaseInOutCubic = new CubicBezierEasing(0.65, 0.0, 0.35, 1.0);
      EaseInQuint = new CubicBezierEasing(0.64, 0.0, 0.78, 0.0);
      EaseOutQuint = new CubicBezierEasing(0.22, 1.0, 0.36, 1.0);
      EaseInOutQuint = new CubicBezierEasing(0.83, 0.0, 0.17, 1.0);
      EaseInCirc = new CubicBezierEasing(0.55, 0.0, 1.0, 0.45);
      EaseOutCirc = new CubicBezierEasing(0.0, 0.55, 0.45, 1.0);
      EaseInOutCirc = new CubicBezierEasing(0.85, 0.0, 0.15, 1.0);
      EaseInQuad = new CubicBezierEasing(0.11, 0.0, 0.5, 0.0);
      EaseOutQuad = new CubicBezierEasing(0.5, 1.0, 0.89, 1.0);
      EaseInOutQuad = new CubicBezierEasing(0.45, 0.0, 0.55, 1.0);
      EaseInQuart = new CubicBezierEasing(0.5, 0.0, 0.75, 0.0);
      EaseOutQuart = new CubicBezierEasing(0.25, 1.0, 0.5, 1.0);
      EaseInOutQuart = new CubicBezierEasing(0.76, 0.0, 0.24, 1.0);
      EaseInExpo = new CubicBezierEasing(0.7, 0.0, 0.84, 0.0);
      EaseOutExpo = new CubicBezierEasing(0.16, 1.0, 0.3, 1.0);
      EaseInOutExpo = new CubicBezierEasing(0.87, 0.0, 0.13, 1.0);
      EaseInBack = new CubicBezierEasing(0.36, 0.0, 0.66, -0.56);
      EaseOutBack = new CubicBezierEasing(0.34, 1.56, 0.64, 1.0);
      EaseInOutBack = new CubicBezierEasing(0.68, -0.6, 0.32, 1.6);
      var tmp = EaseInElastic$lambda;
      EaseInElastic = new sam$androidx_compose_animation_core_Easing$0_0(tmp);
      var tmp_0 = EaseOutElastic$lambda;
      EaseOutElastic = new sam$androidx_compose_animation_core_Easing$0_1(tmp_0);
      var tmp_1 = EaseInOutElastic$lambda;
      EaseInOutElastic = new sam$androidx_compose_animation_core_Easing$0_2(tmp_1);
      var tmp_2 = EaseOutBounce$lambda;
      EaseOutBounce = new sam$androidx_compose_animation_core_Easing$0_3(tmp_2);
      var tmp_3 = EaseInBounce$lambda;
      EaseInBounce = new sam$androidx_compose_animation_core_Easing$0_4(tmp_3);
      var tmp_4 = EaseInOutBounce$lambda;
      EaseInOutBounce = new sam$androidx_compose_animation_core_Easing$0_5(tmp_4);
    }
  }
  function ExperimentalAnimationSpecApi() {
  }
  protoOf(ExperimentalAnimationSpecApi).equals = function (other) {
    if (!(other instanceof ExperimentalAnimationSpecApi))
      return false;
    other instanceof ExperimentalAnimationSpecApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalAnimationSpecApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalAnimationSpecApi).toString = function () {
    return '@androidx.compose.animation.core.ExperimentalAnimationSpecApi(' + ')';
  };
  function ExperimentalDeferredTransitionApi() {
  }
  protoOf(ExperimentalDeferredTransitionApi).equals = function (other) {
    if (!(other instanceof ExperimentalDeferredTransitionApi))
      return false;
    other instanceof ExperimentalDeferredTransitionApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalDeferredTransitionApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalDeferredTransitionApi).toString = function () {
    return '@androidx.compose.animation.core.ExperimentalDeferredTransitionApi(' + ')';
  };
  function ExperimentalTransitionApi() {
  }
  protoOf(ExperimentalTransitionApi).equals = function (other) {
    if (!(other instanceof ExperimentalTransitionApi))
      return false;
    other instanceof ExperimentalTransitionApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalTransitionApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalTransitionApi).toString = function () {
    return '@androidx.compose.animation.core.ExperimentalTransitionApi(' + ')';
  };
  var androidx_compose_animation_core_FloatSpringSpec$stable;
  var androidx_compose_animation_core_FloatTweenSpec$stable;
  function _get_easing__5ar9kw($this) {
    return $this.easing_1;
  }
  function _get_durationNanos__1fe2hy($this) {
    return $this.durationNanos_1;
  }
  function _get_delayNanos__vhee7l($this) {
    return $this.delayNanos_1;
  }
  function clampPlayTimeNanos($this, playTimeNanos) {
    var tmp0 = subtract(playTimeNanos, $this.delayNanos_1);
    var tmp2 = new Long(0, 0);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue = $this.durationNanos_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = compare(tmp0, tmp2) < 0 ? tmp2 : tmp0;
    return compare(this_0, maximumValue) > 0 ? maximumValue : this_0;
  }
  function FloatTweenSpec(duration, delay, easing) {
    duration = duration === VOID ? 300 : duration;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.duration_1 = duration;
    this.delay_1 = delay;
    this.easing_1 = easing;
    this.durationNanos_1 = multiply(numberToLong(this.duration_1), new Long(1000000, 0));
    this.delayNanos_1 = multiply(numberToLong(this.delay_1), new Long(1000000, 0));
  }
  protoOf(FloatTweenSpec).get_duration_6a6kpp_k$ = function () {
    return this.duration_1;
  };
  protoOf(FloatTweenSpec).get_delay_iq7n8a_k$ = function () {
    return this.delay_1;
  };
  protoOf(FloatTweenSpec).getValueFromNanos_rdghrw_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    // Inline function 'androidx.compose.animation.core.FloatTweenSpec.clampPlayTimeNanos' call
    var tmp0 = subtract(playTimeNanos, this.delayNanos_1);
    var tmp2 = new Long(0, 0);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue = this.durationNanos_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = compare(tmp0, tmp2) < 0 ? tmp2 : tmp0;
    var clampedPlayTimeNanos = compare(this_0, maximumValue) > 0 ? maximumValue : this_0;
    var tmp;
    if (this.duration_1 === 0) {
      tmp = 1.0;
    } else {
      // Inline function 'kotlin.Long.div' call
      var other = toNumber(this.durationNanos_1);
      tmp = toNumber(clampedPlayTimeNanos) / other;
    }
    var rawFraction = tmp;
    var fraction = this.easing_1.transform_twmo38_k$(rawFraction);
    // Inline function 'androidx.compose.animation.core.lerp' call
    return initialValue * (1 - fraction) + targetValue * fraction;
  };
  protoOf(FloatTweenSpec).getDurationNanos_taoclf_k$ = function (initialValue, targetValue, initialVelocity) {
    return add(this.delayNanos_1, this.durationNanos_1);
  };
  protoOf(FloatTweenSpec).getVelocityFromNanos_d1b1ck_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    // Inline function 'androidx.compose.animation.core.FloatTweenSpec.clampPlayTimeNanos' call
    var tmp0 = subtract(playTimeNanos, this.delayNanos_1);
    var tmp2 = new Long(0, 0);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue = this.durationNanos_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = compare(tmp0, tmp2) < 0 ? tmp2 : tmp0;
    var clampedPlayTimeNanos = compare(this_0, maximumValue) > 0 ? maximumValue : this_0;
    if (equalsLong(clampedPlayTimeNanos, new Long(0, 0))) {
      return initialVelocity;
    }
    var startNum = this.getValueFromNanos_rdghrw_k$(subtract(clampedPlayTimeNanos, new Long(1000000, 0)), initialValue, targetValue, initialVelocity);
    var endNum = this.getValueFromNanos_rdghrw_k$(clampedPlayTimeNanos, initialValue, targetValue, initialVelocity);
    return (endNum - startNum) * 1000.0;
  };
  protoOf(FloatTweenSpec).vectorize_pto10n_k$ = function (converter) {
    return this.vectorize_7dxvko_k$(converter);
  };
  function FloatAnimationSpec() {
  }
  function _get_visibilityThreshold__cvk72g_0($this) {
    return $this.visibilityThreshold_1;
  }
  function _get_spring__4s3m3i($this) {
    return $this.spring_1;
  }
  function FloatSpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    dampingRatio = dampingRatio === VOID ? 1.0 : dampingRatio;
    stiffness = stiffness === VOID ? 1500.0 : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? 0.01 : visibilityThreshold;
    this.dampingRatio_1 = dampingRatio;
    this.stiffness_1 = stiffness;
    this.visibilityThreshold_1 = visibilityThreshold;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new SpringSimulation(1.0);
    this_0.set_dampingRatio_1d4jya_k$(this.dampingRatio_1);
    this_0.set_stiffness_89bnwm_k$(this.stiffness_1);
    tmp.spring_1 = this_0;
  }
  protoOf(FloatSpringSpec).get_dampingRatio_syjss2_k$ = function () {
    return this.dampingRatio_1;
  };
  protoOf(FloatSpringSpec).get_stiffness_dt2sgm_k$ = function () {
    return this.stiffness_1;
  };
  protoOf(FloatSpringSpec).getValueFromNanos_rdghrw_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = divide(playTimeNanos, new Long(1000000, 0));
    this.spring_1.set_finalPosition_7mu6km_k$(targetValue);
    // Inline function 'androidx.compose.animation.core.Motion.value' call
    var this_0 = this.spring_1.updateValues_e8ut58_k$(initialValue, initialVelocity, playTimeMillis);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Motion___get_packedValue__impl__qymh4n(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  };
  protoOf(FloatSpringSpec).getVelocityFromNanos_d1b1ck_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = divide(playTimeNanos, new Long(1000000, 0));
    this.spring_1.set_finalPosition_7mu6km_k$(targetValue);
    // Inline function 'androidx.compose.animation.core.Motion.velocity' call
    var this_0 = this.spring_1.updateValues_e8ut58_k$(initialValue, initialVelocity, playTimeMillis);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value = _Motion___get_packedValue__impl__qymh4n(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  };
  protoOf(FloatSpringSpec).getEndVelocity_jstvkm_k$ = function (initialValue, targetValue, initialVelocity) {
    return 0.0;
  };
  protoOf(FloatSpringSpec).getDurationNanos_taoclf_k$ = function (initialValue, targetValue, initialVelocity) {
    var tmp0_stiffness = this.spring_1.get_stiffness_dt2sgm_k$();
    var tmp1_dampingRatio = this.spring_1.get_dampingRatio_syjss2_k$();
    var tmp2_initialDisplacement = (initialValue - targetValue) / this.visibilityThreshold_1;
    var tmp3_initialVelocity = initialVelocity / this.visibilityThreshold_1;
    return multiply(estimateAnimationDurationMillis(tmp0_stiffness, tmp1_dampingRatio, tmp3_initialVelocity, tmp2_initialDisplacement, 1.0), new Long(1000000, 0));
  };
  protoOf(FloatSpringSpec).vectorize_pto10n_k$ = function (converter) {
    return this.vectorize_7dxvko_k$(converter);
  };
  var androidx_compose_animation_core_FloatExponentialDecaySpec$stable;
  function FloatDecayAnimationSpec() {
  }
  function _get_friction__4dx5ox($this) {
    return $this.friction_1;
  }
  function FloatExponentialDecaySpec(frictionMultiplier, absVelocityThreshold) {
    frictionMultiplier = frictionMultiplier === VOID ? 1.0 : frictionMultiplier;
    absVelocityThreshold = absVelocityThreshold === VOID ? 0.1 : absVelocityThreshold;
    var tmp = this;
    // Inline function 'kotlin.math.abs' call
    // Inline function 'kotlin.math.max' call
    var b = Math.abs(absVelocityThreshold);
    tmp.absVelocityThreshold_1 = Math.max(1.0E-7, b);
    var tmp_0 = this;
    // Inline function 'kotlin.math.max' call
    tmp_0.friction_1 = -4.2 * Math.max(1.0E-4, frictionMultiplier);
  }
  protoOf(FloatExponentialDecaySpec).get_absVelocityThreshold_wsgqo5_k$ = function () {
    return this.absVelocityThreshold_1;
  };
  protoOf(FloatExponentialDecaySpec).getValueFromNanos_vizg24_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = divide(playTimeNanos, new Long(1000000, 0));
    var tmp = initialValue - initialVelocity / this.friction_1;
    var tmp_0 = initialVelocity / this.friction_1;
    // Inline function 'kotlin.math.exp' call
    var x = this.friction_1 * toNumber(playTimeMillis) / 1000.0;
    return tmp + tmp_0 * Math.exp(x);
  };
  protoOf(FloatExponentialDecaySpec).getVelocityFromNanos_eyb6gk_k$ = function (playTimeNanos, initialValue, initialVelocity) {
    var playTimeMillis = divide(playTimeNanos, new Long(1000000, 0));
    // Inline function 'kotlin.Long.div' call
    // Inline function 'kotlin.math.exp' call
    var x = toNumber(playTimeMillis) / 1000.0 * this.friction_1;
    return initialVelocity * Math.exp(x);
  };
  protoOf(FloatExponentialDecaySpec).getDurationNanos_dl2v11_k$ = function (initialValue, initialVelocity) {
    // Inline function 'kotlin.math.abs' call
    var tmp$ret$0 = Math.abs(initialVelocity);
    // Inline function 'kotlin.math.ln' call
    var x = this.absVelocityThreshold_1 / tmp$ret$0;
    var tmp$ret$1 = Math.log(x);
    return multiply(numberToLong(1000.0 * tmp$ret$1 / this.friction_1), new Long(1000000, 0));
  };
  protoOf(FloatExponentialDecaySpec).getTargetValue_k8zsye_k$ = function (initialValue, initialVelocity) {
    // Inline function 'kotlin.math.abs' call
    if (Math.abs(initialVelocity) <= this.absVelocityThreshold_1) {
      return initialValue;
    }
    // Inline function 'kotlin.math.abs' call
    var x = this.absVelocityThreshold_1 / initialVelocity;
    // Inline function 'kotlin.math.ln' call
    var x_0 = Math.abs(x);
    var duration = Math.log(x_0) / this.friction_1 * 1000;
    var tmp = initialValue - initialVelocity / this.friction_1;
    var tmp_0 = initialVelocity / this.friction_1;
    // Inline function 'kotlin.math.exp' call
    var x_1 = this.friction_1 * duration / 1000.0;
    return tmp + tmp_0 * Math.exp(x_1);
  };
  function withInfiniteAnimationFrameNanos(onFrame, $completion) {
    var tmp = new $withInfiniteAnimationFrameNanosCOROUTINE$(onFrame, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation) {
    this.$onFrame_1 = $onFrame;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(withInfiniteAnimationFrameNanos$slambda).invoke_ib42db_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(withInfiniteAnimationFrameNanos$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = withFrameNanos(this.$onFrame_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(withInfiniteAnimationFrameNanos$slambda).create_d196fn_k$ = function (completion) {
    return new withInfiniteAnimationFrameNanos$slambda(this.$onFrame_1, completion);
  };
  function withInfiniteAnimationFrameNanos$slambda_0($onFrame, resultContinuation) {
    var i = new withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation);
    return constructCallableReference(function ($completion) {
      return i.invoke_ib42db_k$($completion);
    }, 0);
  }
  function $withInfiniteAnimationFrameNanosCOROUTINE$(onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.onFrame_1 = onFrame;
  }
  protoOf($withInfiniteAnimationFrameNanosCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            var policy = this.get_context_h02k06_k$().get_y2st91_k$(Key_getInstance());
            if (policy == null) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = withFrameNanos(this.onFrame_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(1);
              suspendResult = policy.onInfiniteOperation_7vo0x_k$(withInfiniteAnimationFrameNanos$slambda_0(this.onFrame_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.WHEN_RESULT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.WHEN_RESULT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.WHEN_RESULT0__1;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  var androidx_compose_animation_core_InfiniteTransition$stable;
  function InternalAnimationApi() {
  }
  protoOf(InternalAnimationApi).equals = function (other) {
    if (!(other instanceof InternalAnimationApi))
      return false;
    other instanceof InternalAnimationApi || THROW_CCE();
    return true;
  };
  protoOf(InternalAnimationApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalAnimationApi).toString = function () {
    return '@androidx.compose.animation.core.InternalAnimationApi(' + ')';
  };
  var androidx_compose_animation_core_MutationInterruptedException$stable;
  var androidx_compose_animation_core_MutatorMutex$stable;
  function Mutator(priority, job) {
    this.priority_1 = priority;
    this.job_1 = job;
  }
  protoOf(Mutator).get_priority_jyafsd_k$ = function () {
    return this.priority_1;
  };
  protoOf(Mutator).get_job_18j2r0_k$ = function () {
    return this.job_1;
  };
  protoOf(Mutator).canInterrupt_jjffs4_k$ = function (other) {
    return this.priority_1.compareTo_30rs7w_k$(other.priority_1) >= 0;
  };
  protoOf(Mutator).cancel_2l89ey_k$ = function () {
    return this.job_1.cancel_hkmm2i_k$(new MutationInterruptedException());
  };
  function _get_currentMutator__y8yhby($this) {
    return $this.currentMutator_1;
  }
  function _get_mutex__e2dgb2($this) {
    return $this.mutex_1;
  }
  function tryMutateOrCancel($this, mutator) {
    $l$loop: while (true) {
      var oldMutator = $this.currentMutator_1.get_26vq_k$();
      if (oldMutator == null || mutator.canInterrupt_jjffs4_k$(oldMutator)) {
        if ($this.currentMutator_1.compareAndSet_10iwom_k$(oldMutator, mutator)) {
          if (oldMutator == null)
            null;
          else {
            oldMutator.cancel_2l89ey_k$();
          }
          break $l$loop;
        }
      } else
        throw CancellationException_init_$Create$('Current mutation had a higher priority');
    }
  }
  function MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation) {
    this.$priority_1 = $priority;
    this.this$0__1 = this$0;
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutatorMutex$mutate$slambda).invoke_nd4u9n_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutatorMutex$mutate$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_nd4u9n_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutatorMutex$mutate$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(9);
            this.mutator2__1 = new Mutator(this.$priority_1, ensureNotNull(this.$this$coroutineScope_1.get_coroutineContext_115oqo_k$().get_y2st91_k$(Key_getInstance_0())));
            tryMutateOrCancel(this.this$0__1, this.mutator2__1);
            this.this1__1 = this.this$0__1.mutex_1;
            this.owner0__1 = null;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this1__1.lock_ugrcvf_k$(this.owner0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.tmp$ret$23__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(8);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(7);
            this.set_state_rjd8d0_k$(4);
            suspendResult = this.$block_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.tmp$ret$04__1 = suspendResult;
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            var tmp_0 = this.tmp$ret$04__1;
            this.set_exceptionState_fex74n_k$(8);
            this.this$0__1.currentMutator_1.compareAndSet_10iwom_k$(this.mutator2__1, null);
            this.tmp$ret$23__1 = tmp_0;
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            var tmp_1 = this.tmp$ret$23__1;
            this.set_exceptionState_fex74n_k$(9);
            this.this1__1.unlock_ulcrcl_k$(this.owner0__1);
            return tmp_1;
          case 7:
            this.set_exceptionState_fex74n_k$(8);
            var t = this.get_exception_x0n6w6_k$();
            this.this$0__1.currentMutator_1.compareAndSet_10iwom_k$(this.mutator2__1, null);
            throw t;
          case 8:
            this.set_exceptionState_fex74n_k$(9);
            var t_0 = this.get_exception_x0n6w6_k$();
            this.this1__1.unlock_ulcrcl_k$(this.owner0__1);
            throw t_0;
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(MutatorMutex$mutate$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new MutatorMutex$mutate$slambda(this.$priority_1, this.this$0__1, this.$block_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(MutatorMutex$mutate$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MutatorMutex$mutate$slambda_0($priority, this$0, $block, resultContinuation) {
    var i = new MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation);
    return constructCallableReference(function ($this$coroutineScope, $completion) {
      return i.invoke_nd4u9n_k$($this$coroutineScope, $completion);
    }, 1);
  }
  function MutatorMutex$mutateWith$slambda($priority, this$0, $block, $receiver, resultContinuation) {
    this.$priority_1 = $priority;
    this.this$0__1 = this$0;
    this.$block_1 = $block;
    this.$receiver_1 = $receiver;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutatorMutex$mutateWith$slambda).invoke_nd4u9n_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(MutatorMutex$mutateWith$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_nd4u9n_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutatorMutex$mutateWith$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(9);
            this.mutator2__1 = new Mutator(this.$priority_1, ensureNotNull(this.$this$coroutineScope_1.get_coroutineContext_115oqo_k$().get_y2st91_k$(Key_getInstance_0())));
            tryMutateOrCancel(this.this$0__1, this.mutator2__1);
            this.this1__1 = this.this$0__1.mutex_1;
            this.owner0__1 = null;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this1__1.lock_ugrcvf_k$(this.owner0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.tmp$ret$23__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(8);
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(7);
            this.set_state_rjd8d0_k$(4);
            suspendResult = this.$block_1(this.$receiver_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.tmp$ret$04__1 = suspendResult;
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            var tmp_0 = this.tmp$ret$04__1;
            this.set_exceptionState_fex74n_k$(8);
            this.this$0__1.currentMutator_1.compareAndSet_10iwom_k$(this.mutator2__1, null);
            this.tmp$ret$23__1 = tmp_0;
            this.set_exceptionState_fex74n_k$(9);
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            var tmp_1 = this.tmp$ret$23__1;
            this.set_exceptionState_fex74n_k$(9);
            this.this1__1.unlock_ulcrcl_k$(this.owner0__1);
            return tmp_1;
          case 7:
            this.set_exceptionState_fex74n_k$(8);
            var t = this.get_exception_x0n6w6_k$();
            this.this$0__1.currentMutator_1.compareAndSet_10iwom_k$(this.mutator2__1, null);
            throw t;
          case 8:
            this.set_exceptionState_fex74n_k$(9);
            var t_0 = this.get_exception_x0n6w6_k$();
            this.this1__1.unlock_ulcrcl_k$(this.owner0__1);
            throw t_0;
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(MutatorMutex$mutateWith$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new MutatorMutex$mutateWith$slambda(this.$priority_1, this.this$0__1, this.$block_1, this.$receiver_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(MutatorMutex$mutateWith$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function MutatorMutex$mutateWith$slambda_0($priority, this$0, $block, $receiver, resultContinuation) {
    var i = new MutatorMutex$mutateWith$slambda($priority, this$0, $block, $receiver, resultContinuation);
    return constructCallableReference(function ($this$coroutineScope, $completion) {
      return i.invoke_nd4u9n_k$($this$coroutineScope, $completion);
    }, 1);
  }
  function MutatorMutex() {
    this.currentMutator_1 = new AtomicReference(null);
    this.mutex_1 = Mutex();
  }
  protoOf(MutatorMutex).mutate_fsxm7f_k$ = function (priority, block, $completion) {
    return coroutineScope(MutatorMutex$mutate$slambda_0(priority, this, block, null), $completion);
  };
  protoOf(MutatorMutex).mutate$default_f05kjn_k$ = function (priority, block, $completion, $super) {
    priority = priority === VOID ? MutatePriority_Default_getInstance() : priority;
    return $super === VOID ? this.mutate_fsxm7f_k$(priority, block, $completion) : $super.mutate_fsxm7f_k$.call(this, priority, block, $completion);
  };
  protoOf(MutatorMutex).mutateWith_1xzeue_k$ = function (receiver, priority, block, $completion) {
    return coroutineScope(MutatorMutex$mutateWith$slambda_0(priority, this, block, receiver, null), $completion);
  };
  protoOf(MutatorMutex).mutateWith$default_i0v6ui_k$ = function (receiver, priority, block, $completion, $super) {
    priority = priority === VOID ? MutatePriority_Default_getInstance() : priority;
    return $super === VOID ? this.mutateWith_1xzeue_k$(receiver, priority, block, $completion) : $super.mutateWith_1xzeue_k$.call(this, receiver, priority, block, $completion);
  };
  var static_init_called_1;
  function static_init_1() {
    if (static_init_called_1)
      return Unit_getInstance();
    static_init_called_1 = true;
    MutatePriority_Default_instance = new MutatePriority('Default', 0);
    MutatePriority_UserInput_instance = new MutatePriority('UserInput', 1);
    MutatePriority_PreventUserInput_instance = new MutatePriority('PreventUserInput', 2);
  }
  var MutatePriority_Default_instance;
  var MutatePriority_UserInput_instance;
  var MutatePriority_PreventUserInput_instance;
  function values_1() {
    static_init_1();
    return [MutatePriority_Default_getInstance(), MutatePriority_UserInput_getInstance(), MutatePriority_PreventUserInput_getInstance()];
  }
  function valueOf_1(value) {
    static_init_1();
    switch (value) {
      case 'Default':
        return MutatePriority_Default_getInstance();
      case 'UserInput':
        return MutatePriority_UserInput_getInstance();
      case 'PreventUserInput':
        return MutatePriority_PreventUserInput_getInstance();
      default:
        THROW_IAE('No enum constant androidx.compose.animation.core.MutatePriority.' + value);
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
  function MutatePriority(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MutationInterruptedException() {
    PlatformOptimizedCancellationException.call(this, 'Mutation interrupted');
    captureStack(this, MutationInterruptedException);
  }
  function MutatePriority_Default_getInstance() {
    static_init_1();
    return MutatePriority_Default_instance;
  }
  function MutatePriority_UserInput_getInstance() {
    static_init_1();
    return MutatePriority_UserInput_instance;
  }
  function MutatePriority_PreventUserInput_getInstance() {
    static_init_1();
    return MutatePriority_PreventUserInput_instance;
  }
  var androidx_compose_animation_core_MonoSpline$stable;
  function _get_timePoints__q6jqmd($this) {
    return $this.timePoints_1;
  }
  function _get_values__tel787($this) {
    return $this.values_1;
  }
  function _get_tangents__nc3qv1($this) {
    return $this.tangents_1;
  }
  function _get_slopeTemp__9v9vce($this) {
    return $this.slopeTemp_1;
  }
  function makeFloatArray($this, a, b) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = Array(a);
    while (tmp < a) {
      tmp_0[tmp] = new Float32Array(b);
      tmp = tmp + 1 | 0;
    }
    return tmp_0;
  }
  function getSlope($this, time, v) {
    var dim = $this.values_1[0].length;
    var n = $this.timePoints_1.length;
    var tmp2 = $this.timePoints_1[0];
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue = $this.timePoints_1[n - 1 | 0];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = time < tmp2 ? tmp2 : time;
    var t = this_0 > maximumValue ? maximumValue : this_0;
    if (v.length < dim)
      return Unit_getInstance();
    var inductionVariable = 0;
    var last = n - 1 | 0;
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (t <= $this.timePoints_1[i + 1 | 0]) {
          var h = $this.timePoints_1[i + 1 | 0] - $this.timePoints_1[i];
          var x = (t - $this.timePoints_1[i]) / h;
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < dim)
            do {
              var j = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              var y1 = $this.values_1[i][j];
              var y2 = $this.values_1[i + 1 | 0][j];
              var t1 = $this.tangents_1[i][j];
              var t2 = $this.tangents_1[i + 1 | 0][j];
              v[j] = hermiteDifferential(h, x, y1, y2, t1, t2) / h;
            }
             while (inductionVariable_0 < dim);
          break $l$loop;
        }
      }
       while (inductionVariable < last);
  }
  function getSlope_0($this, time, j) {
    var timePoints = $this.timePoints_1;
    var values = $this.values_1;
    var tangents = $this.tangents_1;
    var n = timePoints.length;
    var tmp2 = timePoints[0];
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue = timePoints[n - 1 | 0];
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = time < tmp2 ? tmp2 : time;
    var t = this_0 > maximumValue ? maximumValue : this_0;
    var inductionVariable = 0;
    var last = n - 1 | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (t <= timePoints[i + 1 | 0]) {
          var y1 = values[i][j];
          var y2 = values[i + 1 | 0][j];
          var t1 = tangents[i][j];
          var t2 = tangents[i + 1 | 0][j];
          var h = timePoints[i + 1 | 0] - timePoints[i];
          var x = (t - timePoints[i]) / h;
          return hermiteDifferential(h, x, y1, y2, t1, t2) / h;
        }
      }
       while (inductionVariable < last);
    return 0.0;
  }
  function MonoSpline(time, y, periodicBias) {
    var n = time.length;
    var dim = y[0].length;
    this.slopeTemp_1 = new Float32Array(dim);
    var slope = makeFloatArray(this, n - 1 | 0, dim);
    var tangent = makeFloatArray(this, n, dim);
    var inductionVariable = 0;
    if (inductionVariable < dim)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        var last = n - 1 | 0;
        if (inductionVariable_0 < last)
          do {
            var i = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var dt = time[i + 1 | 0] - time[i];
            slope[i][j] = (y[i + 1 | 0][j] - y[i][j]) / dt;
            if (i === 0) {
              tangent[i][j] = slope[i][j];
            } else {
              tangent[i][j] = (slope[i - 1 | 0][j] + slope[i][j]) * 0.5;
            }
          }
           while (inductionVariable_0 < last);
        tangent[n - 1 | 0][j] = slope[n - 2 | 0][j];
      }
       while (inductionVariable < dim);
    if (!isNaN_0(periodicBias)) {
      var inductionVariable_1 = 0;
      if (inductionVariable_1 < dim)
        do {
          var j_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var adjustedSlope = slope[n - 2 | 0][j_0] * (1 - periodicBias) + slope[0][j_0] * periodicBias;
          slope[0][j_0] = adjustedSlope;
          slope[n - 2 | 0][j_0] = adjustedSlope;
          tangent[n - 1 | 0][j_0] = adjustedSlope;
          tangent[0][j_0] = adjustedSlope;
        }
         while (inductionVariable_1 < dim);
    }
    var inductionVariable_2 = 0;
    var last_0 = n - 1 | 0;
    if (inductionVariable_2 < last_0)
      do {
        var i_0 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        var inductionVariable_3 = 0;
        if (inductionVariable_3 < dim)
          do {
            var j_1 = inductionVariable_3;
            inductionVariable_3 = inductionVariable_3 + 1 | 0;
            if (slope[i_0][j_1] === 0.0) {
              tangent[i_0][j_1] = 0.0;
              tangent[i_0 + 1 | 0][j_1] = 0.0;
            } else {
              var a = tangent[i_0][j_1] / slope[i_0][j_1];
              var b = tangent[i_0 + 1 | 0][j_1] / slope[i_0][j_1];
              // Inline function 'kotlin.math.hypot' call
              var h = hypot(a, b);
              if (h > 9.0) {
                var t = 3.0 / h;
                tangent[i_0][j_1] = t * a * slope[i_0][j_1];
                tangent[i_0 + 1 | 0][j_1] = t * b * slope[i_0][j_1];
              }
            }
          }
           while (inductionVariable_3 < dim);
      }
       while (inductionVariable_2 < last_0);
    this.timePoints_1 = time;
    this.values_1 = y;
    this.tangents_1 = tangent;
  }
  protoOf(MonoSpline).getPos_ostzem_k$ = function (t, j) {
    var values = this.values_1;
    var tangents = this.tangents_1;
    var n = this.timePoints_1.length;
    var index = t <= this.timePoints_1[0] ? 0 : t >= this.timePoints_1[n - 1 | 0] ? n - 1 | 0 : -1;
    if (!(index === -1)) {
      return values[index][j] + (t - this.timePoints_1[index]) * getSlope_0(this, this.timePoints_1[index], j);
    }
    var inductionVariable = 0;
    var last = n - 1 | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (t === this.timePoints_1[i]) {
          return values[i][j];
        }
        if (t < this.timePoints_1[i + 1 | 0]) {
          var h = this.timePoints_1[i + 1 | 0] - this.timePoints_1[i];
          var x = (t - this.timePoints_1[i]) / h;
          var y1 = values[i][j];
          var y2 = values[i + 1 | 0][j];
          var t1 = tangents[i][j];
          var t2 = tangents[i + 1 | 0][j];
          return hermiteInterpolate(h, x, y1, y2, t1, t2);
        }
      }
       while (inductionVariable < last);
    return 0.0;
  };
  protoOf(MonoSpline).getPos_9xwyd7_k$ = function (time, v, index) {
    var n = this.timePoints_1.length;
    var dim = this.values_1[0].length;
    var k = time <= this.timePoints_1[0] ? 0 : time >= this.timePoints_1[n - 1 | 0] ? n - 1 | 0 : -1;
    if (!(k === -1)) {
      getSlope(this, this.timePoints_1[k], this.slopeTemp_1);
      var inductionVariable = 0;
      if (inductionVariable < dim)
        do {
          var j = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          v.set_ln2e3z_k$(j, this.values_1[k][j] + (time - this.timePoints_1[k]) * this.slopeTemp_1[j]);
        }
         while (inductionVariable < dim);
      return Unit_getInstance();
    }
    var inductionVariable_0 = index;
    var last = n - 1 | 0;
    if (inductionVariable_0 < last)
      do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (time === this.timePoints_1[i]) {
          var inductionVariable_1 = 0;
          if (inductionVariable_1 < dim)
            do {
              var j_0 = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              v.set_ln2e3z_k$(j_0, this.values_1[i][j_0]);
            }
             while (inductionVariable_1 < dim);
          return Unit_getInstance();
        }
        if (time < this.timePoints_1[i + 1 | 0]) {
          var h = this.timePoints_1[i + 1 | 0] - this.timePoints_1[i];
          var x = (time - this.timePoints_1[i]) / h;
          var inductionVariable_2 = 0;
          if (inductionVariable_2 < dim)
            do {
              var j_1 = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + 1 | 0;
              var y1 = this.values_1[i][j_1];
              var y2 = this.values_1[i + 1 | 0][j_1];
              var t1 = this.tangents_1[i][j_1];
              var t2 = this.tangents_1[i + 1 | 0][j_1];
              v.set_ln2e3z_k$(j_1, hermiteInterpolate(h, x, y1, y2, t1, t2));
            }
             while (inductionVariable_2 < dim);
          return Unit_getInstance();
        }
      }
       while (inductionVariable_0 < last);
  };
  protoOf(MonoSpline).getPos$default_6o3yzi_k$ = function (time, v, index, $super) {
    index = index === VOID ? 0 : index;
    var tmp;
    if ($super === VOID) {
      this.getPos_9xwyd7_k$(time, v, index);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.getPos_9xwyd7_k$.call(this, time, v, index);
    }
    return tmp;
  };
  protoOf(MonoSpline).getSlope_mvayk2_k$ = function (time, v, index) {
    var timePoints = this.timePoints_1;
    var values = this.values_1;
    var tangents = this.tangents_1;
    var n = timePoints.length;
    var dim = values[0].length;
    var tangentIndex = time <= timePoints[0] ? 0 : time >= timePoints[n - 1 | 0] ? n - 1 | 0 : -1;
    if (!(tangentIndex === -1)) {
      var tangent = tangents[tangentIndex];
      if (tangent.length < dim)
        return Unit_getInstance();
      var inductionVariable = 0;
      if (inductionVariable < dim)
        do {
          var j = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          v.set_ln2e3z_k$(j, tangent[j]);
        }
         while (inductionVariable < dim);
      return Unit_getInstance();
    }
    var inductionVariable_0 = index;
    var last = n - 1 | 0;
    if (inductionVariable_0 < last)
      $l$loop: do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (time <= timePoints[i + 1 | 0]) {
          var h = timePoints[i + 1 | 0] - timePoints[i];
          var x = (time - timePoints[i]) / h;
          var inductionVariable_1 = 0;
          if (inductionVariable_1 < dim)
            do {
              var j_0 = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              var y1 = values[i][j_0];
              var y2 = values[i + 1 | 0][j_0];
              var t1 = tangents[i][j_0];
              var t2 = tangents[i + 1 | 0][j_0];
              v.set_ln2e3z_k$(j_0, hermiteDifferential(h, x, y1, y2, t1, t2) / h);
            }
             while (inductionVariable_1 < dim);
          break $l$loop;
        }
      }
       while (inductionVariable_0 < last);
  };
  protoOf(MonoSpline).getSlope$default_j6pf3f_k$ = function (time, v, index, $super) {
    index = index === VOID ? 0 : index;
    var tmp;
    if ($super === VOID) {
      this.getSlope_mvayk2_k$(time, v, index);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.getSlope_mvayk2_k$.call(this, time, v, index);
    }
    return tmp;
  };
  function hermiteInterpolate(h, x, y1, y2, t1, t2) {
    var x2 = x * x;
    var x3 = x2 * x;
    return h * t1 * (x - 2 * x2 + x3) + h * t2 * (x3 - x2) + y1 - (3 * x2 - 2 * x3) * (y1 - y2);
  }
  function hermiteDifferential(h, x, y1, y2, t1, t2) {
    var x2 = x * x;
    return h * (t1 - 2 * x * (2 * t1 + t2) + 3 * (t1 + t2) * x2) - 6 * (x - x2) * (y1 - y2);
  }
  var androidx_compose_animation_core_PathEasing$stable;
  function checkPrecondition(value, lazyMessage) {
    if (!value) {
      throwIllegalStateException(lazyMessage());
    }
  }
  function requirePrecondition(value, lazyMessage) {
    if (!value) {
      throwIllegalArgumentException(lazyMessage());
    }
  }
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function estimateAnimationDurationMillis(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    if (dampingRatio === 0.0) {
      return new Long(2077252342, 2147);
    }
    return estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    var tmp = 2.0 * dampingRatio;
    // Inline function 'kotlin.math.sqrt' call
    var dampingCoefficient = tmp * Math.sqrt(stiffness);
    var partialRoot = dampingCoefficient * dampingCoefficient - 4.0 * stiffness;
    var tmp_0;
    if (partialRoot < 0.0) {
      tmp_0 = 0.0;
    } else {
      // Inline function 'kotlin.math.sqrt' call
      tmp_0 = Math.sqrt(partialRoot);
    }
    var partialRootReal = tmp_0;
    var tmp_1;
    if (partialRoot < 0.0) {
      // Inline function 'kotlin.math.abs' call
      // Inline function 'kotlin.math.sqrt' call
      var x = Math.abs(partialRoot);
      tmp_1 = Math.sqrt(x);
    } else {
      tmp_1 = 0.0;
    }
    var partialRootImaginary = tmp_1;
    var firstRootReal = (-dampingCoefficient + partialRootReal) * 0.5;
    var firstRootImaginary = partialRootImaginary * 0.5;
    var secondRootReal = (-dampingCoefficient - partialRootReal) * 0.5;
    return estimateDurationInternal(firstRootReal, firstRootImaginary, secondRootReal, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateDurationInternal(firstRootReal, firstRootImaginary, secondRootReal, dampingRatio, initialVelocity, initialPosition, delta) {
    if (initialPosition === 0.0 && initialVelocity === 0.0) {
      return new Long(0, 0);
    }
    var v0 = initialPosition < 0 ? -initialVelocity : initialVelocity;
    // Inline function 'kotlin.math.abs' call
    var p0 = Math.abs(initialPosition);
    return numberToLong((dampingRatio > 1.0 ? estimateOverDamped(firstRootReal, secondRootReal, p0, v0, delta) : dampingRatio < 1.0 ? estimateUnderDamped(firstRootReal, firstRootImaginary, p0, v0, delta) : estimateCriticallyDamped(firstRootReal, p0, v0, delta)) * 1000.0);
  }
  function estimateOverDamped(firstRootReal, secondRootReal, p0, v0, delta) {
    var r1 = firstRootReal;
    var r2 = secondRootReal;
    var c2 = (r1 * p0 - v0) / (r1 - r2);
    var c1 = p0 - c2;
    // Inline function 'kotlin.math.abs' call
    var x = delta / c1;
    // Inline function 'kotlin.math.ln' call
    var x_0 = Math.abs(x);
    var t1 = Math.log(x_0) / r1;
    // Inline function 'kotlin.math.abs' call
    var x_1 = delta / c2;
    // Inline function 'kotlin.math.ln' call
    var x_2 = Math.abs(x_1);
    var t2 = Math.log(x_2) / r2;
    var tmp;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    if (!(compare(bitwiseAnd(toRawBits(t1), new Long(-1, 2147483647)), new Long(0, 2146435072)) < 0)) {
      tmp = t2;
    } else {
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      // Inline function 'androidx.compose.ui.util.fastIsFinite' call
      if (!(compare(bitwiseAnd(toRawBits(t2), new Long(-1, 2147483647)), new Long(0, 2146435072)) < 0)) {
        tmp = t1;
      } else {
        // Inline function 'kotlin.math.max' call
        tmp = Math.max(t1, t2);
      }
    }
    var tCurr = tmp;
    // Inline function 'kotlin.math.ln' call
    var x_3 = c1 * r1 / (-c2 * r2);
    var tInflection = Math.log(x_3) / (r2 - r1);
    var tmp_0;
    if (isNaN_1(tInflection) || tInflection <= 0.0) {
      tmp_0 = -delta;
    } else if (tInflection > 0.0 && -estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) < delta) {
      if (c2 > 0.0 && c1 < 0.0) {
        tCurr = 0.0;
      }
      tmp_0 = -delta;
    } else {
      // Inline function 'kotlin.math.ln' call
      var x_4 = -(c2 * r2 * r2) / (c1 * r1 * r1);
      tCurr = Math.log(x_4) / (r1 - r2);
      tmp_0 = delta;
    }
    var signedDelta = tmp_0;
    var tmp_1 = c1 * r1;
    // Inline function 'kotlin.math.exp' call
    var x_5 = r1 * tCurr;
    var tmp_2 = tmp_1 * Math.exp(x_5);
    var tmp_3 = c2 * r2;
    // Inline function 'kotlin.math.exp' call
    var x_6 = r2 * tCurr;
    // Inline function 'kotlin.math.abs' call
    var x_7 = tmp_2 + tmp_3 * Math.exp(x_6);
    if (Math.abs(x_7) < 1.0E-4) {
      return tCurr;
    }
    var tDelta = 1.7976931348623157E308;
    var iterations = 0;
    while (tDelta > 0.001 && iterations < 100) {
      iterations = iterations + 1 | 0;
      var tLast = tCurr;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var x_8 = tCurr;
      // Inline function 'kotlin.math.exp' call
      var x_9 = r1 * x_8;
      var tmp_4 = c1 * Math.exp(x_9);
      // Inline function 'kotlin.math.exp' call
      var x_10 = r2 * x_8;
      var tmp_5 = tmp_4 + c2 * Math.exp(x_10) + signedDelta;
      var tmp_6 = c1 * r1;
      // Inline function 'kotlin.math.exp' call
      var x_11 = r1 * x_8;
      var tmp_7 = tmp_6 * Math.exp(x_11);
      var tmp_8 = c2 * r2;
      // Inline function 'kotlin.math.exp' call
      var x_12 = r2 * x_8;
      tCurr = x_8 - tmp_5 / (tmp_7 + tmp_8 * Math.exp(x_12));
      // Inline function 'kotlin.math.abs' call
      var x_13 = tLast - tCurr;
      tDelta = Math.abs(x_13);
    }
    return tCurr;
  }
  function estimateUnderDamped(firstRootReal, firstRootImaginary, p0, v0, delta) {
    var r = firstRootReal;
    var c1 = p0;
    var c2 = (v0 - r * c1) / firstRootImaginary;
    // Inline function 'kotlin.math.sqrt' call
    var x = c1 * c1 + c2 * c2;
    var c = Math.sqrt(x);
    // Inline function 'kotlin.math.ln' call
    var x_0 = delta / c;
    return Math.log(x_0) / r;
  }
  function estimateCriticallyDamped(firstRootReal, p0, v0, delta) {
    var r = firstRootReal;
    var c1 = p0;
    var c2 = v0 - r * c1;
    // Inline function 'kotlin.math.abs' call
    var x = delta / c1;
    // Inline function 'kotlin.math.ln' call
    var x_0 = Math.abs(x);
    var t1 = Math.log(x_0) / r;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.math.abs' call
    var x_1 = delta / c2;
    // Inline function 'kotlin.math.ln' call
    var x_2 = Math.abs(x_1);
    var guess = Math.log(x_2);
    var t = guess;
    var inductionVariable = 0;
    if (inductionVariable <= 5)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.math.abs' call
        var x_3 = t / r;
        // Inline function 'kotlin.math.ln' call
        var x_4 = Math.abs(x_3);
        t = guess - Math.log(x_4);
      }
       while (inductionVariable <= 5);
    var t2 = t / r;
    var tmp;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    if (!(compare(bitwiseAnd(toRawBits(t1), new Long(-1, 2147483647)), new Long(0, 2146435072)) < 0)) {
      tmp = t2;
    } else {
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      // Inline function 'androidx.compose.ui.util.fastIsFinite' call
      if (!(compare(bitwiseAnd(toRawBits(t2), new Long(-1, 2147483647)), new Long(0, 2146435072)) < 0)) {
        tmp = t1;
      } else {
        // Inline function 'kotlin.math.max' call
        tmp = Math.max(t1, t2);
      }
    }
    var tCurr = tmp;
    var tInflection = -(r * c1 + c2) / (r * c2);
    // Inline function 'kotlin.math.exp' call
    var x_5 = r * tInflection;
    var tmp_0 = c1 * Math.exp(x_5);
    var tmp_1 = c2 * tInflection;
    // Inline function 'kotlin.math.exp' call
    var x_6 = r * tInflection;
    var xInflection = tmp_0 + tmp_1 * Math.exp(x_6);
    var tmp_2;
    if (isNaN_1(tInflection) || tInflection <= 0.0) {
      tmp_2 = -delta;
    } else if (tInflection > 0.0 && -xInflection < delta) {
      if (c2 < 0 && c1 > 0) {
        tCurr = 0.0;
      }
      tmp_2 = -delta;
    } else {
      tCurr = -(2.0 / r) - c1 / c2;
      tmp_2 = delta;
    }
    var signedDelta = tmp_2;
    var tDelta = 1.7976931348623157E308;
    var iterations = 0;
    while (tDelta > 0.001 && iterations < 100) {
      iterations = iterations + 1 | 0;
      var tLast = tCurr;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var x_7 = tCurr;
      var tmp_3 = c1 + c2 * x_7;
      // Inline function 'kotlin.math.exp' call
      var x_8 = r * x_7;
      var tmp_4 = tmp_3 * Math.exp(x_8) + signedDelta;
      var tmp_5 = c2 * (r * x_7 + 1) + c1 * r;
      // Inline function 'kotlin.math.exp' call
      var x_9 = r * x_7;
      tCurr = x_7 - tmp_4 / (tmp_5 * Math.exp(x_9));
      // Inline function 'kotlin.math.abs' call
      var x_10 = tLast - tCurr;
      tDelta = Math.abs(x_10);
    }
    return tCurr;
  }
  function isNotFinite(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    return !(compare(bitwiseAnd(toRawBits(_this__u8e3s4), new Long(-1, 2147483647)), new Long(0, 2146435072)) < 0);
  }
  function iterateNewtonsMethod(x, fn, fnPrime) {
    return x - fn(x) / fnPrime(x);
  }
  function estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) {
    // Inline function 'kotlin.math.exp' call
    var x = r1 * tInflection;
    var tmp = c1 * Math.exp(x);
    // Inline function 'kotlin.math.exp' call
    var x_0 = r2 * tInflection;
    return tmp + c2 * Math.exp(x_0);
  }
  var androidx_compose_animation_core_SpringSimulation$stable;
  function _set_naturalFreq__cfwulg($this, _set____db54di) {
    $this.naturalFreq_1 = _set____db54di;
  }
  function _get_naturalFreq__sat11s($this) {
    return $this.naturalFreq_1;
  }
  function SpringSimulation(finalPosition) {
    this.finalPosition_1 = finalPosition;
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    tmp.naturalFreq_1 = Math.sqrt(50.0);
    this.dampingRatio_1 = 1.0;
  }
  protoOf(SpringSimulation).set_finalPosition_7mu6km_k$ = function (_set____db54di) {
    this.finalPosition_1 = _set____db54di;
  };
  protoOf(SpringSimulation).get_finalPosition_vxiffa_k$ = function () {
    return this.finalPosition_1;
  };
  protoOf(SpringSimulation).set_stiffness_89bnwm_k$ = function (value) {
    if (this.get_stiffness_dt2sgm_k$() <= 0) {
      throwIllegalArgumentException('Spring stiffness constant must be positive.');
    }
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    tmp.naturalFreq_1 = Math.sqrt(value);
  };
  protoOf(SpringSimulation).get_stiffness_dt2sgm_k$ = function () {
    return this.naturalFreq_1 * this.naturalFreq_1;
  };
  protoOf(SpringSimulation).set_dampingRatio_1d4jya_k$ = function (value) {
    if (value < 0) {
      throwIllegalArgumentException('Damping ratio must be non-negative');
    }
    this.dampingRatio_1 = value;
  };
  protoOf(SpringSimulation).get_dampingRatio_syjss2_k$ = function () {
    return this.dampingRatio_1;
  };
  protoOf(SpringSimulation).getAcceleration_ie4kmu_k$ = function (lastDisplacement, lastVelocity) {
    var adjustedDisplacement = lastDisplacement - this.finalPosition_1;
    var k = this.naturalFreq_1 * this.naturalFreq_1;
    var c = 2.0 * this.naturalFreq_1 * this.dampingRatio_1;
    return -k * adjustedDisplacement - c * lastVelocity;
  };
  protoOf(SpringSimulation).updateValues_e8ut58_k$ = function (lastDisplacement, lastVelocity, timeElapsed) {
    var adjustedDisplacement = lastDisplacement - this.finalPosition_1;
    // Inline function 'kotlin.Long.div' call
    var deltaT = toNumber(timeElapsed) / 1000.0;
    var dampingRatioSquared = this.dampingRatio_1 * this.dampingRatio_1;
    var r = -this.dampingRatio_1 * this.naturalFreq_1;
    var displacement;
    var currentVelocity;
    if (this.dampingRatio_1 > 1) {
      var tmp = this.naturalFreq_1;
      // Inline function 'kotlin.math.sqrt' call
      var x = dampingRatioSquared - 1;
      var s = tmp * Math.sqrt(x);
      var gammaPlus = r + s;
      var gammaMinus = r - s;
      var coeffB = (gammaMinus * adjustedDisplacement - lastVelocity) / (gammaMinus - gammaPlus);
      var coeffA = adjustedDisplacement - coeffB;
      // Inline function 'kotlin.math.exp' call
      var x_0 = gammaMinus * deltaT;
      var tmp_0 = coeffA * Math.exp(x_0);
      // Inline function 'kotlin.math.exp' call
      var x_1 = gammaPlus * deltaT;
      displacement = tmp_0 + coeffB * Math.exp(x_1);
      var tmp_1 = coeffA * gammaMinus;
      // Inline function 'kotlin.math.exp' call
      var x_2 = gammaMinus * deltaT;
      var tmp_2 = tmp_1 * Math.exp(x_2);
      var tmp_3 = coeffB * gammaPlus;
      // Inline function 'kotlin.math.exp' call
      var x_3 = gammaPlus * deltaT;
      currentVelocity = tmp_2 + tmp_3 * Math.exp(x_3);
    } else if (this.dampingRatio_1 === 1.0) {
      var coeffA_0 = adjustedDisplacement;
      var coeffB_0 = lastVelocity + this.naturalFreq_1 * adjustedDisplacement;
      var nFdT = -this.naturalFreq_1 * deltaT;
      var tmp_4 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      displacement = tmp_4 * Math.exp(nFdT);
      var tmp_5 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      var tmp_6 = tmp_5 * Math.exp(nFdT) * -this.naturalFreq_1;
      // Inline function 'kotlin.math.exp' call
      currentVelocity = tmp_6 + coeffB_0 * Math.exp(nFdT);
    } else {
      var tmp_7 = this.naturalFreq_1;
      // Inline function 'kotlin.math.sqrt' call
      var x_4 = 1 - dampingRatioSquared;
      var dampedFreq = tmp_7 * Math.sqrt(x_4);
      var cosCoeff = adjustedDisplacement;
      var sinCoeff = 1 / dampedFreq * (-r * adjustedDisplacement + lastVelocity);
      var dFdT = dampedFreq * deltaT;
      // Inline function 'kotlin.math.exp' call
      var x_5 = r * deltaT;
      var tmp_8 = Math.exp(x_5);
      // Inline function 'kotlin.math.cos' call
      var tmp_9 = cosCoeff * Math.cos(dFdT);
      // Inline function 'kotlin.math.sin' call
      displacement = tmp_8 * (tmp_9 + sinCoeff * Math.sin(dFdT));
      var tmp_10 = displacement * r;
      // Inline function 'kotlin.math.exp' call
      var x_6 = r * deltaT;
      var tmp_11 = Math.exp(x_6);
      var tmp_12 = -dampedFreq * cosCoeff;
      // Inline function 'kotlin.math.sin' call
      var tmp_13 = tmp_12 * Math.sin(dFdT);
      var tmp_14 = dampedFreq * sinCoeff;
      // Inline function 'kotlin.math.cos' call
      currentVelocity = tmp_10 + tmp_11 * (tmp_13 + tmp_14 * Math.cos(dFdT));
    }
    var newValue = displacement + this.finalPosition_1;
    var newVelocity = currentVelocity;
    // Inline function 'androidx.compose.animation.core.Motion' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits_0(newValue));
    var v2 = fromInt(toRawBits_0(newVelocity));
    var tmp$ret$17 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Motion___init__impl__vk56rv(tmp$ret$17);
  };
  function _Motion___init__impl__vk56rv(packedValue) {
    return packedValue;
  }
  function _Motion___get_packedValue__impl__qymh4n($this) {
    return $this;
  }
  function _Motion___get_value__impl__e0x31d($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Motion___get_packedValue__impl__qymh4n($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function _Motion___get_velocity__impl__h2mglt($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value = _Motion___get_packedValue__impl__qymh4n($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    return floatFromBits(bits);
  }
  function Motion__toString_impl_wnrfdh($this) {
    return 'Motion(packedValue=' + $this.toString() + ')';
  }
  function Motion__hashCode_impl_gm6pss($this) {
    return $this.hashCode();
  }
  function Motion__equals_impl_ngoxh4($this, other) {
    if (!(other instanceof Motion))
      return false;
    var tmp0_other_with_cast = other.packedValue_1;
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Motion(packedValue) {
    this.packedValue_1 = packedValue;
  }
  protoOf(Motion).toString = function () {
    return Motion__toString_impl_wnrfdh(this.packedValue_1);
  };
  protoOf(Motion).hashCode = function () {
    return Motion__hashCode_impl_gm6pss(this.packedValue_1);
  };
  protoOf(Motion).equals = function (other) {
    return Motion__equals_impl_ngoxh4(this.packedValue_1, other);
  };
  function Motion_0(value, velocity) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits_0(value));
    var v2 = fromInt(toRawBits_0(velocity));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Motion___init__impl__vk56rv(tmp$ret$0);
  }
  function animateDecay(_this__u8e3s4, animationSpec, sequentialAnimation, block, $completion) {
    sequentialAnimation = sequentialAnimation === VOID ? false : sequentialAnimation;
    var tmp;
    if (block === VOID) {
      tmp = animateDecay$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp0_initialValue = _this__u8e3s4.get_value_j01efc_k$();
    var tmp1_initialVelocityVector = _this__u8e3s4.get_velocityVector_v3jmo9_k$();
    var tmp2_typeConverter = _this__u8e3s4.get_typeConverter_seyvfn_k$();
    var anim = DecayAnimation_init_$Create$(animationSpec, tmp2_typeConverter, tmp0_initialValue, tmp1_initialVelocityVector);
    return animate(_this__u8e3s4, anim, sequentialAnimation ? _this__u8e3s4.get_lastFrameTimeNanos_3aprno_k$() : new Long(0, -2147483648), block, $completion);
  }
  function animateTo(_this__u8e3s4, targetValue, animationSpec, sequentialAnimation, block, $completion) {
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    sequentialAnimation = sequentialAnimation === VOID ? false : sequentialAnimation;
    var tmp;
    if (block === VOID) {
      tmp = animateTo$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp0_initialValue = _this__u8e3s4.get_value_j01efc_k$();
    var tmp1_typeConverter = _this__u8e3s4.get_typeConverter_seyvfn_k$();
    var tmp2_initialVelocityVector = _this__u8e3s4.get_velocityVector_v3jmo9_k$();
    var anim = TargetBasedAnimation_init_$Create$(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, tmp2_initialVelocityVector);
    return animate(_this__u8e3s4, anim, sequentialAnimation ? _this__u8e3s4.get_lastFrameTimeNanos_3aprno_k$() : new Long(0, -2147483648), block, $completion);
  }
  function animate(_this__u8e3s4, animation, startTimeNanos, block, $completion) {
    startTimeNanos = startTimeNanos === VOID ? new Long(0, -2147483648) : startTimeNanos;
    var tmp;
    if (block === VOID) {
      tmp = animate$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp_0 = new $animateCOROUTINE$(_this__u8e3s4, animation, startTimeNanos, block, $completion);
    tmp_0.set_result_xj64lm_k$(Unit_getInstance());
    tmp_0.set_exception_px07aa_k$(null);
    return tmp_0.doResume_5yljmg_k$();
  }
  function updateState(_this__u8e3s4, state) {
    state.set_value_w62xiq_k$(_this__u8e3s4.get_value_j01efc_k$());
    copyFrom(state.get_velocityVector_v3jmo9_k$(), _this__u8e3s4.get_velocityVector_v3jmo9_k$());
    state.set_finishedTimeNanos_76k3z2_k$(_this__u8e3s4.get_finishedTimeNanos_t5ryif_k$());
    state.set_lastFrameTimeNanos_lyzzef_k$(_this__u8e3s4.get_lastFrameTimeNanos_3aprno_k$());
    state.set_isRunning_o0rkdc_k$(_this__u8e3s4.get_isRunning_okmtn0_k$());
  }
  function get_durationScale(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.get_y2st91_k$(Key_getInstance_1());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_scaleFactor_64aucw_k$();
    var scale = tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs;
    // Inline function 'androidx.compose.animation.core.checkPrecondition' call
    if (!(scale >= 0.0)) {
      var tmp$ret$1 = 'negative scale factor';
      throwIllegalStateException(tmp$ret$1);
    }
    return scale;
  }
  function callWithFrameNanos(_this__u8e3s4, onFrame, $completion) {
    var tmp = new $callWithFrameNanosCOROUTINE$(_this__u8e3s4, onFrame, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function doAnimationFrameWithScale(_this__u8e3s4, frameTimeNanos, durationScale, anim, state, block) {
    var tmp;
    if (durationScale === 0.0) {
      tmp = anim.get_durationNanos_ub5cy_k$();
    } else {
      // Inline function 'kotlin.Long.div' call
      var this_0 = subtract(frameTimeNanos, _this__u8e3s4.get_startTimeNanos_ru5em1_k$());
      var tmp$ret$0 = toNumber(this_0) / durationScale;
      tmp = numberToLong(tmp$ret$0);
    }
    var playTimeNanos = tmp;
    doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block);
  }
  function doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block) {
    _this__u8e3s4.set_lastFrameTimeNanos_lyzzef_k$(frameTimeNanos);
    _this__u8e3s4.set_value_w62xiq_k$(anim.getValueFromNanos_i31vd8_k$(playTimeNanos));
    _this__u8e3s4.set_velocityVector_tj9mci_k$(anim.getVelocityVectorFromNanos_jouakx_k$(playTimeNanos));
    var isLastFrame = anim.isFinishedFromNanos_c31w39_k$(playTimeNanos);
    if (isLastFrame) {
      _this__u8e3s4.set_finishedTimeNanos_76k3z2_k$(_this__u8e3s4.get_lastFrameTimeNanos_3aprno_k$());
      _this__u8e3s4.set_isRunning_o0rkdc_k$(false);
    }
    updateState(_this__u8e3s4, state);
    block(_this__u8e3s4);
  }
  function animate_0(initialValue, targetValue, initialVelocity, animationSpec, block, $completion) {
    initialVelocity = initialVelocity === VOID ? 0.0 : initialVelocity;
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    return animate_1(get_VectorConverter_0(FloatCompanionObject_getInstance()), initialValue, targetValue, initialVelocity, animationSpec, block, $completion);
  }
  function animate_1(typeConverter, initialValue, targetValue, initialVelocity, animationSpec, block, $completion) {
    initialVelocity = initialVelocity === VOID ? null : initialVelocity;
    animationSpec = animationSpec === VOID ? spring() : animationSpec;
    var tmp;
    if (initialVelocity == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = typeConverter.get_convertToVector_s594l4_k$()(initialVelocity);
    }
    var tmp1_elvis_lhs = tmp;
    var initialVelocityVector = tmp1_elvis_lhs == null ? newInstance(typeConverter.get_convertToVector_s594l4_k$()(initialValue)) : tmp1_elvis_lhs;
    var anim = TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector);
    var tmp_0 = new AnimationState(typeConverter, initialValue, initialVelocityVector);
    return animate(tmp_0, anim, VOID, animate$lambda_3(block, typeConverter), $completion);
  }
  function animateDecay$lambda(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function animateTo$lambda(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function animate$lambda(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function animate$lambda$lambda($this_animate) {
    return function () {
      $this_animate.set_isRunning_o0rkdc_k$(false);
      return Unit_getInstance();
    };
  }
  function animate$lambda_0($lateInitScope, $initialValue, $animation, $initialVelocityVector, $durationScale, $this_animate, $block) {
    return function (it) {
      var tmp = $animation.get_typeConverter_seyvfn_k$();
      var tmp_0 = $animation.get_targetValue_kq6mfd_k$();
      // Inline function 'kotlin.apply' call
      var this_0 = new AnimationScope($initialValue, tmp, $initialVelocityVector, it, tmp_0, it, true, animate$lambda$lambda($this_animate));
      doAnimationFrameWithScale(this_0, it, $durationScale, $animation, $this_animate, $block);
      $lateInitScope._v = this_0;
      return Unit_getInstance();
    };
  }
  function animate$lambda_1($this_animate) {
    return function () {
      $this_animate.set_isRunning_o0rkdc_k$(false);
      return Unit_getInstance();
    };
  }
  function animate$lambda_2($lateInitScope, $durationScale, $animation, $this_animate, $block) {
    return function (it) {
      doAnimationFrameWithScale(ensureNotNull($lateInitScope._v), it, $durationScale, $animation, $this_animate, $block);
      return Unit_getInstance();
    };
  }
  function callWithFrameNanos$lambda($onFrame) {
    return function (it) {
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = divide(it, fromInt(1));
      return $onFrame(tmp$ret$0);
    };
  }
  function animate$lambda_3($block, $typeConverter) {
    return function ($this$animate) {
      $block($this$animate.get_value_j01efc_k$(), $typeConverter.get_convertFromVector_kmewon_k$()($this$animate.get_velocityVector_v3jmo9_k$()));
      return Unit_getInstance();
    };
  }
  function $animateCOROUTINE$(_this__u8e3s4, animation, startTimeNanos, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.animation_1 = animation;
    this.startTimeNanos_1 = startTimeNanos;
    this.block_1 = block;
  }
  protoOf($animateCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(8);
            var initialValue = this.animation_1.getValueFromNanos_i31vd8_k$(new Long(0, 0));
            var initialVelocityVector = this.animation_1.getVelocityVectorFromNanos_jouakx_k$(new Long(0, 0));
            this.lateInitScope0__1 = {_v: null};
            this.set_exceptionState_fex74n_k$(7);
            if (equalsLong(this.startTimeNanos_1, new Long(0, -2147483648))) {
              var durationScale = get_durationScale(this.get_context_h02k06_k$());
              this.set_state_rjd8d0_k$(1);
              suspendResult = callWithFrameNanos(this.animation_1, animate$lambda_0(this.lateInitScope0__1, initialValue, this.animation_1, initialVelocityVector, durationScale, this._this__u8e3s4__1, this.block_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_0 = this.animation_1.get_typeConverter_seyvfn_k$();
              var tmp_1 = this.animation_1.get_targetValue_kq6mfd_k$();
              var this_0 = new AnimationScope(initialValue, tmp_0, initialVelocityVector, this.startTimeNanos_1, tmp_1, this.startTimeNanos_1, true, animate$lambda_1(this._this__u8e3s4__1));
              doAnimationFrameWithScale(this_0, this.startTimeNanos_1, get_durationScale(this.get_context_h02k06_k$()), this.animation_1, this._this__u8e3s4__1, this.block_1);
              this.lateInitScope0__1._v = this_0;
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            if (!ensureNotNull(this.lateInitScope0__1._v).get_isRunning_okmtn0_k$()) {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

            var durationScale_0 = get_durationScale(this.get_context_h02k06_k$());
            this.set_state_rjd8d0_k$(4);
            suspendResult = callWithFrameNanos(this.animation_1, animate$lambda_2(this.lateInitScope0__1, durationScale_0, this.animation_1, this._this__u8e3s4__1, this.block_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 5:
            this.set_exceptionState_fex74n_k$(8);
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            this.set_exceptionState_fex74n_k$(8);
            return Unit_getInstance();
          case 7:
            this.set_exceptionState_fex74n_k$(8);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof CancellationException) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp0_safe_receiver = this.lateInitScope0__1._v;
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp0_safe_receiver.set_isRunning_o0rkdc_k$(false);
              }
              var tmp1_safe_receiver = this.lateInitScope0__1._v;
              if (equals(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_lastFrameTimeNanos_3aprno_k$(), this._this__u8e3s4__1.get_lastFrameTimeNanos_3aprno_k$())) {
                this._this__u8e3s4__1.set_isRunning_o0rkdc_k$(false);
              }
              throw e;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 8:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 8) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  function $callWithFrameNanosCOROUTINE$(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.onFrame_1 = onFrame;
  }
  protoOf($callWithFrameNanosCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            if (this._this__u8e3s4__1.get_isInfinite_uffwnt_k$()) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = withInfiniteAnimationFrameNanos(this.onFrame_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(1);
              suspendResult = withFrameNanos(callWithFrameNanos$lambda(this.onFrame_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.WHEN_RESULT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.WHEN_RESULT0__1 = suspendResult;
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return this.WHEN_RESULT0__1;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function get_SeekableTransitionStateTotalDurationChanged() {
    _init_properties_Transition_kt__s6zoln();
    return SeekableTransitionStateTotalDurationChanged;
  }
  var SeekableTransitionStateTotalDurationChanged;
  var androidx_compose_animation_core_DeferredTransitionState$stable;
  var androidx_compose_animation_core_DeferredTransition$stable;
  var androidx_compose_animation_core_TransitionState$stable;
  var androidx_compose_animation_core_MutableTransitionState$stable;
  var androidx_compose_animation_core_SeekableTransitionState_SeekingAnimationState$stable;
  var androidx_compose_animation_core_SeekableTransitionState$stable;
  var androidx_compose_animation_core_Transition$stable;
  var androidx_compose_animation_core_TransitionInstance$stable;
  function _set_targetValue__aqsk0r_0($this, _set____db54di) {
    var tmp0 = $this.targetValue$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_targetValue_$ref_k2d87h_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('targetValue', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_targetValue_$ref_9yn0ox_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_targetValue__jjlmb5($this) {
    var tmp0 = $this.targetValue$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_targetValue_$ref_k2d87h();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('targetValue', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_targetValue_$ref_9yn0ox());
    return tmp0.get_value_j01efc_k$();
  }
  function _get_defaultSpring__8tff1f($this) {
    return $this.defaultSpring_1;
  }
  function _set_animationSpec__7qdru($this, _set____db54di) {
    var tmp0 = $this.animationSpec$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_animationSpec_$ref_yvkiem_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('animationSpec', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_animationSpec_$ref_efqna6_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_animation__pan2kh($this, _set____db54di) {
    var tmp0 = $this.animation$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_animation_$ref_xmz6jb_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('animation', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_animation_$ref_if7o0z_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_initialValueAnimation__1y3xoy($this, _set____db54di) {
    $this.initialValueAnimation_1 = _set____db54di;
  }
  function _get_initialValueAnimation__83qa4m($this) {
    return $this.initialValueAnimation_1;
  }
  function _set_useOnlyInitialValue__5vtyit($this, _set____db54di) {
    $this.useOnlyInitialValue_1 = _set____db54di;
  }
  function _get_useOnlyInitialValue__j6k7f5($this) {
    return $this.useOnlyInitialValue_1;
  }
  function _set_velocityVector__vm30d3_0($this, _set____db54di) {
    $this.velocityVector_1 = _set____db54di;
  }
  function _get_velocityVector__dvxlkl_0($this) {
    return $this.velocityVector_1;
  }
  function _set_isSeeking__ngvk6d($this, _set____db54di) {
    $this.isSeeking_1 = _set____db54di;
  }
  function _get_isSeeking__i9e1e7($this) {
    return $this.isSeeking_1;
  }
  function _get_interruptionSpec__ruhcut($this) {
    return $this.interruptionSpec_1;
  }
  function updateAnimation($this, initialValue, isInterrupted) {
    initialValue = initialValue === VOID ? $this.get_value_j01efc_k$() : initialValue;
    isInterrupted = isInterrupted === VOID ? false : isInterrupted;
    var tmp0_safe_receiver = $this.initialValueAnimation_1;
    if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_targetValue_kq6mfd_k$(), _get_targetValue__jjlmb5($this))) {
      _set_animation__pan2kh($this, TargetBasedAnimation_init_$Create$($this.interruptionSpec_1, $this.typeConverter_1, initialValue, initialValue, newInstance($this.velocityVector_1)));
      $this.useOnlyInitialValue_1 = true;
      $this.set_durationNanos_echppp_k$($this.get_animation_r0gd0b_k$().get_durationNanos_ub5cy_k$());
      return Unit_getInstance();
    }
    var tmp;
    if (isInterrupted && !$this.isSeeking_1) {
      var tmp_0;
      var tmp_1 = $this.get_animationSpec_wdk2t2_k$();
      if (tmp_1 instanceof SpringSpec) {
        tmp_0 = $this.get_animationSpec_wdk2t2_k$();
      } else {
        tmp_0 = $this.interruptionSpec_1;
      }
      tmp = tmp_0;
    } else {
      tmp = $this.get_animationSpec_wdk2t2_k$();
    }
    var specWithoutDelay = tmp;
    var tmp_2;
    if (compare($this.$this_1.get_playTimeNanos_50m2yz_k$(), new Long(0, 0)) <= 0) {
      tmp_2 = specWithoutDelay;
    } else {
      tmp_2 = delayed(specWithoutDelay, $this.$this_1.get_playTimeNanos_50m2yz_k$());
    }
    var spec = tmp_2;
    _set_animation__pan2kh($this, TargetBasedAnimation_init_$Create$(spec, $this.typeConverter_1, initialValue, _get_targetValue__jjlmb5($this), $this.velocityVector_1));
    $this.set_durationNanos_echppp_k$($this.get_animation_r0gd0b_k$().get_durationNanos_ub5cy_k$());
    $this.useOnlyInitialValue_1 = false;
    onChildAnimationUpdated($this.$this_1);
  }
  function Transition$TransitionAnimationState$_get_targetValue_$ref_k2d87h() {
    return constructCallableReference(function (p0) {
      return _get_targetValue__jjlmb5(p0);
    }, 1, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.targetValue.<get-targetValue>|<get-targetValue>(){}[0]');
  }
  function Transition$TransitionAnimationState$_set_targetValue_$ref_9yn0ox() {
    return constructCallableReference(function (p0, p1) {
      _set_targetValue__aqsk0r_0(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.targetValue.<set-targetValue>|<set-targetValue>(1:0){}[0]');
  }
  function Transition$TransitionAnimationState$_get_targetValue_$ref_k2d87h_0() {
    return constructCallableReference(function (p0) {
      return _get_targetValue__jjlmb5(p0);
    }, 1, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.targetValue.<get-targetValue>|<get-targetValue>(){}[0]');
  }
  function Transition$TransitionAnimationState$_set_targetValue_$ref_9yn0ox_0() {
    return constructCallableReference(function (p0, p1) {
      _set_targetValue__aqsk0r_0(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.targetValue.<set-targetValue>|<set-targetValue>(1:0){}[0]');
  }
  function Transition$TransitionAnimationState$_get_animationSpec_$ref_yvkiem() {
    return constructCallableReference(function (p0) {
      return p0.get_animationSpec_wdk2t2_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.animationSpec.<get-animationSpec>|<get-animationSpec>(){}[0]');
  }
  function Transition$TransitionAnimationState$_set_animationSpec_$ref_efqna6() {
    return constructCallableReference(function (p0, p1) {
      _set_animationSpec__7qdru(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.animationSpec.<set-animationSpec>|<set-animationSpec>(androidx.compose.animation.core.FiniteAnimationSpec<1:0>){}[0]');
  }
  function Transition$TransitionAnimationState$_get_animationSpec_$ref_yvkiem_0() {
    return constructCallableReference(function (p0) {
      return p0.get_animationSpec_wdk2t2_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.animationSpec.<get-animationSpec>|<get-animationSpec>(){}[0]');
  }
  function Transition$TransitionAnimationState$_set_animationSpec_$ref_efqna6_0() {
    return constructCallableReference(function (p0, p1) {
      _set_animationSpec__7qdru(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.animationSpec.<set-animationSpec>|<set-animationSpec>(androidx.compose.animation.core.FiniteAnimationSpec<1:0>){}[0]');
  }
  function Transition$TransitionAnimationState$_get_animation_$ref_xmz6jb() {
    return constructCallableReference(function (p0) {
      return p0.get_animation_r0gd0b_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.animation.<get-animation>|<get-animation>(){}[0]');
  }
  function Transition$TransitionAnimationState$_set_animation_$ref_if7o0z() {
    return constructCallableReference(function (p0, p1) {
      _set_animation__pan2kh(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.animation.<set-animation>|<set-animation>(androidx.compose.animation.core.TargetBasedAnimation<1:0,1:1>){}[0]');
  }
  function Transition$TransitionAnimationState$_get_animation_$ref_xmz6jb_0() {
    return constructCallableReference(function (p0) {
      return p0.get_animation_r0gd0b_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.animation.<get-animation>|<get-animation>(){}[0]');
  }
  function Transition$TransitionAnimationState$_set_animation_$ref_if7o0z_0() {
    return constructCallableReference(function (p0, p1) {
      _set_animation__pan2kh(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.animation.<set-animation>|<set-animation>(androidx.compose.animation.core.TargetBasedAnimation<1:0,1:1>){}[0]');
  }
  function Transition$TransitionAnimationState$_get_isFinished_$ref_fvu6sx() {
    return constructCallableReference(function (p0) {
      return p0.get_isFinished_i1rrnm_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.isFinished.<get-isFinished>|<get-isFinished>(){}[0]');
  }
  function Transition$TransitionAnimationState$_set_isFinished_$ref_9n998j() {
    return constructCallableReference(function (p0, p1) {
      p0.set_isFinished_o05ie7_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.isFinished.<set-isFinished>|<set-isFinished>(kotlin.Boolean){}[0]');
  }
  function Transition$TransitionAnimationState$_get_isFinished_$ref_fvu6sx_0() {
    return constructCallableReference(function (p0) {
      return p0.get_isFinished_i1rrnm_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.isFinished.<get-isFinished>|<get-isFinished>(){}[0]');
  }
  function Transition$TransitionAnimationState$_set_isFinished_$ref_9n998j_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_isFinished_o05ie7_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.isFinished.<set-isFinished>|<set-isFinished>(kotlin.Boolean){}[0]');
  }
  function Transition$TransitionAnimationState$_get_resetSnapValue_$ref_1qtvjp() {
    return constructCallableReference(function (p0) {
      return p0.get_resetSnapValue_6hgmgu_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.resetSnapValue.<get-resetSnapValue>|<get-resetSnapValue>(){}[0]');
  }
  function Transition$TransitionAnimationState$_set_resetSnapValue_$ref_zcevb3() {
    return constructCallableReference(function (p0, p1) {
      p0.set_resetSnapValue_a8o7uy_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.resetSnapValue.<set-resetSnapValue>|<set-resetSnapValue>(kotlin.Float){}[0]');
  }
  function Transition$TransitionAnimationState$_get_resetSnapValue_$ref_1qtvjp_0() {
    return constructCallableReference(function (p0) {
      return p0.get_resetSnapValue_6hgmgu_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.resetSnapValue.<get-resetSnapValue>|<get-resetSnapValue>(){}[0]');
  }
  function Transition$TransitionAnimationState$_set_resetSnapValue_$ref_zcevb3_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_resetSnapValue_a8o7uy_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.resetSnapValue.<set-resetSnapValue>|<set-resetSnapValue>(kotlin.Float){}[0]');
  }
  function Transition$TransitionAnimationState$_get_value_$ref_sfag84() {
    return constructCallableReference(function (p0) {
      return p0.get_value_j01efc_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.value.<get-value>|<get-value>(){}[0]');
  }
  function Transition$TransitionAnimationState$_set_value_$ref_daz5cg() {
    return constructCallableReference(function (p0, p1) {
      p0.set_value_w62xiq_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.value.<set-value>|<set-value>(1:0){}[0]');
  }
  function Transition$TransitionAnimationState$_get_value_$ref_sfag84_0() {
    return constructCallableReference(function (p0) {
      return p0.get_value_j01efc_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.value.<get-value>|<get-value>(){}[0]');
  }
  function Transition$TransitionAnimationState$_set_value_$ref_daz5cg_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_value_w62xiq_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.value.<set-value>|<set-value>(1:0){}[0]');
  }
  function Transition$TransitionAnimationState$_get_durationNanos_$ref_gmcx6m() {
    return constructCallableReference(function (p0) {
      return p0.get_durationNanos_82ej8f_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.durationNanos.<get-durationNanos>|<get-durationNanos>(){}[0]');
  }
  function Transition$TransitionAnimationState$_set_durationNanos_$ref_53fz3q() {
    return constructCallableReference(function (p0, p1) {
      p0.set_durationNanos_echppp_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.durationNanos.<set-durationNanos>|<set-durationNanos>(kotlin.Long){}[0]');
  }
  function Transition$TransitionAnimationState$_get_durationNanos_$ref_gmcx6m_0() {
    return constructCallableReference(function (p0) {
      return p0.get_durationNanos_82ej8f_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.durationNanos.<get-durationNanos>|<get-durationNanos>(){}[0]');
  }
  function Transition$TransitionAnimationState$_set_durationNanos_$ref_53fz3q_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_durationNanos_echppp_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.TransitionAnimationState.durationNanos.<set-durationNanos>|<set-durationNanos>(kotlin.Long){}[0]');
  }
  function DeferredAnimationData($outer, animation, transitionSpec, targetValueByState) {
    this.$this_1 = $outer;
    this.animation_1 = animation;
    this.transitionSpec_1 = transitionSpec;
    this.targetValueByState_1 = targetValueByState;
  }
  protoOf(DeferredAnimationData).get_animation_r0gd0b_k$ = function () {
    return this.animation_1;
  };
  protoOf(DeferredAnimationData).set_transitionSpec_6vdwmp_k$ = function (_set____db54di) {
    this.transitionSpec_1 = _set____db54di;
  };
  protoOf(DeferredAnimationData).get_transitionSpec_80wxl_k$ = function () {
    return this.transitionSpec_1;
  };
  protoOf(DeferredAnimationData).set_targetValueByState_13c911_k$ = function (_set____db54di) {
    this.targetValueByState_1 = _set____db54di;
  };
  protoOf(DeferredAnimationData).get_targetValueByState_4t5sar_k$ = function () {
    return this.targetValueByState_1;
  };
  protoOf(DeferredAnimationData).updateAnimationStates_reshzh_k$ = function (segment, forcedInitialValue, forcedInitialVelocity) {
    var targetValue = this.targetValueByState_1(segment.get_targetState_kri3mx_k$());
    if (this.$this_1.$this_1.get_isSeeking_vjb393_k$()) {
      var initialValue = this.targetValueByState_1(segment.get_initialState_2eu9l6_k$());
      this.animation_1.updateInitialAndTargetValue_6zlop_k$(initialValue, targetValue, this.transitionSpec_1(segment));
    } else {
      this.animation_1.updateTargetValue_cprzaq_k$(targetValue, this.transitionSpec_1(segment), forcedInitialValue, forcedInitialVelocity);
    }
  };
  protoOf(DeferredAnimationData).updateAnimationStates$default_os0ue7_k$ = function (segment, forcedInitialValue, forcedInitialVelocity, $super) {
    forcedInitialValue = forcedInitialValue === VOID ? null : forcedInitialValue;
    forcedInitialVelocity = forcedInitialVelocity === VOID ? null : forcedInitialVelocity;
    var tmp;
    if ($super === VOID) {
      this.updateAnimationStates_reshzh_k$(segment, forcedInitialValue, forcedInitialVelocity);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.updateAnimationStates_reshzh_k$.call(this, segment, forcedInitialValue, forcedInitialVelocity);
    }
    return tmp;
  };
  protoOf(DeferredAnimationData).get_value_j01efc_k$ = function () {
    this.updateAnimationStates$default_os0ue7_k$(this.$this_1.$this_1.get_segment_xwnoei_k$());
    return this.animation_1.get_value_j01efc_k$();
  };
  function Transition$DeferredAnimation$_get_data_$ref_yf6va6() {
    return constructCallableReference(function (p0) {
      return p0.get_data_np9y8g_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.DeferredAnimation.data.<get-data>|<get-data>(){}[0]');
  }
  function Transition$DeferredAnimation$_set_data_$ref_nt0v86() {
    return constructCallableReference(function (p0, p1) {
      p0.set_data_ozdqqf_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.DeferredAnimation.data.<set-data>|<set-data>(androidx.compose.animation.core.Transition.DeferredAnimation.DeferredAnimationData<1:0,1:1,1:0,1:1,2:0>?){}[0]');
  }
  function Transition$DeferredAnimation$_get_data_$ref_yf6va6_0() {
    return constructCallableReference(function (p0) {
      return p0.get_data_np9y8g_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.DeferredAnimation.data.<get-data>|<get-data>(){}[0]');
  }
  function Transition$DeferredAnimation$_set_data_$ref_nt0v86_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_data_ozdqqf_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.DeferredAnimation.data.<set-data>|<set-data>(androidx.compose.animation.core.Transition.DeferredAnimation.DeferredAnimationData<1:0,1:1,1:0,1:1,2:0>?){}[0]');
  }
  function Transition$animateTo$lambda$slambda$lambda(this$0, $durationScale) {
    return function (it) {
      var tmp;
      if (!this$0.get_isSeeking_vjb393_k$()) {
        // Inline function 'kotlin.Long.div' call
        var tmp$ret$0 = divide(it, fromInt(1));
        this$0.onFrame_wjwgn9_k$(tmp$ret$0, $durationScale);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _get_transitionState__f9djyt($this) {
    return $this.transitionState_1;
  }
  function _set_pendingTargetState__1g34xe($this, _set____db54di) {
    var tmp0 = $this.pendingTargetState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_pendingTargetState_$ref_ou62o0_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('pendingTargetState', 1, tmp, tmp_0, Transition$_set_pendingTargetState_$ref_nxuivg_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set_segment__77iylu($this, _set____db54di) {
    var tmp0 = $this.segment$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_segment_$ref_hll1ky_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('segment', 1, tmp, tmp_0, Transition$_set_segment_$ref_n54u2a_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _set__playTimeNanos__8elh7c($this, _set____db54di) {
    var tmp0 = $this._playTimeNanos$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get__playTimeNanos_$ref_dkmemi_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('_playTimeNanos', 1, tmp, tmp_0, Transition$_set__playTimeNanos_$ref_nimc8a_0());
    tmp0.set_longValue_3qxaje_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get__playTimeNanos__xxox8s($this) {
    var tmp0 = $this._playTimeNanos$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get__playTimeNanos_$ref_dkmemi();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('_playTimeNanos', 1, tmp, tmp_0, Transition$_set__playTimeNanos_$ref_nimc8a());
    return tmp0.get_longValue_ahin58_k$();
  }
  function _set_updateChildrenNeeded__eksjzu($this, _set____db54di) {
    var tmp0 = $this.updateChildrenNeeded$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_updateChildrenNeeded_$ref_m1jdik_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('updateChildrenNeeded', 1, tmp, tmp_0, Transition$_set_updateChildrenNeeded_$ref_hj65vc_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_updateChildrenNeeded__mpvzi($this) {
    var tmp0 = $this.updateChildrenNeeded$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_updateChildrenNeeded_$ref_m1jdik();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('updateChildrenNeeded', 1, tmp, tmp_0, Transition$_set_updateChildrenNeeded_$ref_hj65vc());
    return tmp0.get_value_j01efc_k$();
  }
  function _get__animations__z05tbx($this) {
    return $this._animations_1;
  }
  function _get__transitions__nj1dqs($this) {
    return $this._transitions_1;
  }
  function calculateTotalDurationNanos($this) {
    var maxDurationNanos = new Long(0, 0);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = $this._animations_1;
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        var tmp0 = maxDurationNanos;
        // Inline function 'kotlin.math.max' call
        var b = item.get_durationNanos_82ej8f_k$();
        maxDurationNanos = compare(tmp0, b) >= 0 ? tmp0 : b;
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = $this._transitions_1;
    var inductionVariable_0 = 0;
    var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.get_c1px32_k$(index_0);
        var tmp0_0 = maxDurationNanos;
        // Inline function 'kotlin.math.max' call
        var b_0 = calculateTotalDurationNanos(item_0);
        maxDurationNanos = compare(tmp0_0, b_0) >= 0 ? tmp0_0 : b_0;
      }
       while (inductionVariable_0 <= last_0);
    return maxDurationNanos;
  }
  function onChildAnimationUpdated($this) {
    _set_updateChildrenNeeded__eksjzu($this, true);
    if ($this.get_isSeeking_vjb393_k$()) {
      var maxDurationNanos = new Long(0, 0);
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = $this._animations_1;
      var inductionVariable = 0;
      var last = this_0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.get_c1px32_k$(index);
          var tmp0 = maxDurationNanos;
          // Inline function 'kotlin.math.max' call
          var b = item.get_durationNanos_82ej8f_k$();
          maxDurationNanos = compare(tmp0, b) >= 0 ? tmp0 : b;
          item.seekTo_aywgb2_k$($this.lastSeekedTimeNanos_1);
        }
         while (inductionVariable <= last);
      _set_updateChildrenNeeded__eksjzu($this, false);
    }
  }
  function TransitionAnimationState($outer, initialValue, initialVelocityVector, typeConverter, label) {
    this.$this_1 = $outer;
    this.typeConverter_1 = typeConverter;
    this.label_1 = label;
    this.targetValue$delegate_1 = mutableStateOf(initialValue);
    this.defaultSpring_1 = spring();
    this.animationSpec$delegate_1 = mutableStateOf(this.defaultSpring_1);
    this.animation$delegate_1 = mutableStateOf(TargetBasedAnimation_init_$Create$(this.get_animationSpec_wdk2t2_k$(), this.typeConverter_1, initialValue, _get_targetValue__jjlmb5(this), initialVelocityVector));
    this.initialValueState_1 = null;
    this.initialValueAnimation_1 = null;
    this.isFinished$delegate_1 = mutableStateOf(true);
    this.resetSnapValue$delegate_1 = mutableFloatStateOf(-1.0);
    this.useOnlyInitialValue_1 = false;
    this.value$delegate_1 = mutableStateOf(initialValue);
    this.velocityVector_1 = initialVelocityVector;
    this.durationNanos$delegate_1 = mutableLongStateOf(this.get_animation_r0gd0b_k$().get_durationNanos_ub5cy_k$());
    this.isSeeking_1 = false;
    var tmp0_safe_receiver = get_VisibilityThresholdMap().get_wei43m_k$(this.typeConverter_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var vector = this.typeConverter_1.get_convertToVector_s594l4_k$()(initialValue);
      var inductionVariable = 0;
      var last = vector.get_size_au00c9_k$();
      if (inductionVariable < last)
        do {
          var id = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          vector.set_ln2e3z_k$(id, tmp0_safe_receiver);
        }
         while (inductionVariable < last);
      tmp = this.typeConverter_1.get_convertFromVector_kmewon_k$()(vector);
    }
    var visibilityThreshold = tmp;
    this.interruptionSpec_1 = spring(VOID, VOID, visibilityThreshold);
  }
  protoOf(TransitionAnimationState).get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  protoOf(TransitionAnimationState).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  protoOf(TransitionAnimationState).get_animationSpec_wdk2t2_k$ = function () {
    var tmp0 = this.animationSpec$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_animationSpec_$ref_yvkiem();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('animationSpec', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_animationSpec_$ref_efqna6());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(TransitionAnimationState).get_animation_r0gd0b_k$ = function () {
    var tmp0 = this.animation$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_animation_$ref_xmz6jb();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('animation', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_animation_$ref_if7o0z());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(TransitionAnimationState).set_initialValueState_4l9d6e_k$ = function (_set____db54di) {
    this.initialValueState_1 = _set____db54di;
  };
  protoOf(TransitionAnimationState).get_initialValueState_3a05i0_k$ = function () {
    return this.initialValueState_1;
  };
  protoOf(TransitionAnimationState).set_isFinished_o05ie7_k$ = function (_set____db54di) {
    var tmp0 = this.isFinished$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_isFinished_$ref_fvu6sx_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isFinished', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_isFinished_$ref_9n998j_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(TransitionAnimationState).get_isFinished_i1rrnm_k$ = function () {
    var tmp0 = this.isFinished$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_isFinished_$ref_fvu6sx();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isFinished', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_isFinished_$ref_9n998j());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(TransitionAnimationState).set_resetSnapValue_a8o7uy_k$ = function (_set____db54di) {
    var tmp0 = this.resetSnapValue$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_resetSnapValue_$ref_1qtvjp_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('resetSnapValue', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_resetSnapValue_$ref_zcevb3_0());
    tmp0.set_floatValue_qaujgq_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(TransitionAnimationState).get_resetSnapValue_6hgmgu_k$ = function () {
    var tmp0 = this.resetSnapValue$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_resetSnapValue_$ref_1qtvjp();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('resetSnapValue', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_resetSnapValue_$ref_zcevb3());
    return tmp0.get_floatValue_xw60ou_k$();
  };
  protoOf(TransitionAnimationState).set_value_w62xiq_k$ = function (_set____db54di) {
    var tmp0 = this.value$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_value_$ref_sfag84_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_value_$ref_daz5cg_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(TransitionAnimationState).get_value_j01efc_k$ = function () {
    var tmp0 = this.value$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_value_$ref_sfag84();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_value_$ref_daz5cg());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(TransitionAnimationState).set_durationNanos_echppp_k$ = function (_set____db54di) {
    var tmp0 = this.durationNanos$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_durationNanos_$ref_gmcx6m_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('durationNanos', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_durationNanos_$ref_53fz3q_0());
    tmp0.set_longValue_3qxaje_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(TransitionAnimationState).get_durationNanos_82ej8f_k$ = function () {
    var tmp0 = this.durationNanos$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_durationNanos_$ref_gmcx6m();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('durationNanos', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_durationNanos_$ref_53fz3q());
    return tmp0.get_longValue_ahin58_k$();
  };
  protoOf(TransitionAnimationState).onPlayTimeChanged_uwz36g_k$ = function (playTimeNanos, scaleToEnd) {
    var playTime = scaleToEnd ? this.get_animation_r0gd0b_k$().get_durationNanos_ub5cy_k$() : playTimeNanos;
    this.set_value_w62xiq_k$(this.get_animation_r0gd0b_k$().getValueFromNanos_i31vd8_k$(playTime));
    this.velocityVector_1 = this.get_animation_r0gd0b_k$().getVelocityVectorFromNanos_jouakx_k$(playTime);
    if (this.get_animation_r0gd0b_k$().isFinishedFromNanos_c31w39_k$(playTime)) {
      this.set_isFinished_o05ie7_k$(true);
    }
  };
  protoOf(TransitionAnimationState).seekTo_aywgb2_k$ = function (playTimeNanos) {
    if (!(this.get_resetSnapValue_6hgmgu_k$() === -1.0)) {
      return Unit_getInstance();
    }
    this.isSeeking_1 = true;
    if (equals(this.get_animation_r0gd0b_k$().get_targetValue_kq6mfd_k$(), this.get_animation_r0gd0b_k$().get_initialValue_2disdm_k$())) {
      this.set_value_w62xiq_k$(this.get_animation_r0gd0b_k$().get_targetValue_kq6mfd_k$());
    } else {
      this.set_value_w62xiq_k$(this.get_animation_r0gd0b_k$().getValueFromNanos_i31vd8_k$(playTimeNanos));
      this.velocityVector_1 = this.get_animation_r0gd0b_k$().getVelocityVectorFromNanos_jouakx_k$(playTimeNanos);
    }
  };
  protoOf(TransitionAnimationState).updateInitialValue_pawylf_k$ = function () {
    var tmp0_elvis_lhs = this.initialValueState_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var animState = tmp;
    var tmp1_elvis_lhs = this.initialValueAnimation_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var animation = tmp_0;
    var tmp0 = animState.durationNanos_1;
    // Inline function 'kotlin.Long.times' call
    var other = animState.value_1;
    var tmp$ret$0 = toNumber(tmp0) * other;
    var initialPlayTimeNanos = roundToLong(tmp$ret$0);
    var initialValue = animation.getValueFromNanos_i31vd8_k$(initialPlayTimeNanos);
    if (this.useOnlyInitialValue_1) {
      this.get_animation_r0gd0b_k$().set_mutableTargetValue_pyw2ob_k$(initialValue);
    }
    this.get_animation_r0gd0b_k$().set_mutableInitialValue_6tefqk_k$(initialValue);
    this.set_durationNanos_echppp_k$(this.get_animation_r0gd0b_k$().get_durationNanos_ub5cy_k$());
    if (this.get_resetSnapValue_6hgmgu_k$() === -2.0 || this.useOnlyInitialValue_1) {
      this.set_value_w62xiq_k$(initialValue);
    } else {
      this.seekTo_aywgb2_k$(this.$this_1.get_playTimeNanos_50m2yz_k$());
    }
    if (compare(initialPlayTimeNanos, animState.durationNanos_1) >= 0) {
      this.initialValueState_1 = null;
      this.initialValueAnimation_1 = null;
    } else {
      animState.isComplete_1 = false;
    }
  };
  protoOf(TransitionAnimationState).resetAnimation_64towu_k$ = function () {
    this.set_resetSnapValue_a8o7uy_k$(-2.0);
  };
  protoOf(TransitionAnimationState).resetAnimationValue_y9x6r5_k$ = function (fraction) {
    switch (fraction) {
      case -4.0:
      case -5.0:
        var initAnim = this.initialValueAnimation_1;
        if (!(initAnim == null)) {
          this.get_animation_r0gd0b_k$().set_mutableInitialValue_6tefqk_k$(initAnim.get_targetValue_kq6mfd_k$());
          this.initialValueState_1 = null;
          this.initialValueAnimation_1 = null;
        }

        var tmp;
        if (fraction === -4.0) {
          tmp = this.get_animation_r0gd0b_k$().get_initialValue_2disdm_k$();
        } else {
          tmp = this.get_animation_r0gd0b_k$().get_targetValue_kq6mfd_k$();
        }

        var animationValue = tmp;
        this.get_animation_r0gd0b_k$().set_mutableInitialValue_6tefqk_k$(animationValue);
        this.get_animation_r0gd0b_k$().set_mutableTargetValue_pyw2ob_k$(animationValue);
        this.set_value_w62xiq_k$(animationValue);
        this.set_durationNanos_echppp_k$(this.get_animation_r0gd0b_k$().get_durationNanos_ub5cy_k$());
        break;
      default:
        this.set_resetSnapValue_a8o7uy_k$(fraction);
        break;
    }
  };
  protoOf(TransitionAnimationState).setInitialValueAnimation_38t2b3_k$ = function (animationState) {
    if (!equals(this.get_animation_r0gd0b_k$().get_targetValue_kq6mfd_k$(), this.get_animation_r0gd0b_k$().get_initialValue_2disdm_k$())) {
      this.initialValueAnimation_1 = this.get_animation_r0gd0b_k$();
      this.initialValueState_1 = animationState;
    }
    _set_animation__pan2kh(this, TargetBasedAnimation_init_$Create$(this.interruptionSpec_1, this.typeConverter_1, this.get_value_j01efc_k$(), this.get_value_j01efc_k$(), newInstance(this.velocityVector_1)));
    this.set_durationNanos_echppp_k$(this.get_animation_r0gd0b_k$().get_durationNanos_ub5cy_k$());
    this.useOnlyInitialValue_1 = true;
  };
  protoOf(TransitionAnimationState).clearInitialAnimation_9sdpae_k$ = function () {
    this.initialValueAnimation_1 = null;
    this.initialValueState_1 = null;
    this.useOnlyInitialValue_1 = false;
  };
  protoOf(TransitionAnimationState).toString = function () {
    return 'current value: ' + toString_0(this.get_value_j01efc_k$()) + ', target: ' + toString_0(_get_targetValue__jjlmb5(this)) + ', spec: ' + toString(this.get_animationSpec_wdk2t2_k$());
  };
  protoOf(TransitionAnimationState).updateTargetValue_cprzaq_k$ = function (targetValue, animationSpec, forcedInitialValue, forcedInitialVelocity) {
    var tmp;
    if (this.useOnlyInitialValue_1) {
      var tmp0_safe_receiver = this.initialValueAnimation_1;
      tmp = equals(targetValue, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_targetValue_kq6mfd_k$());
    } else {
      tmp = false;
    }
    if (tmp) {
      return Unit_getInstance();
    }
    if (equals(_get_targetValue__jjlmb5(this), targetValue) && this.get_resetSnapValue_6hgmgu_k$() === -1.0 && (forcedInitialValue == null || equals(forcedInitialValue, this.get_animation_r0gd0b_k$().get_initialValue_2disdm_k$()))) {
      return Unit_getInstance();
    }
    _set_targetValue__aqsk0r_0(this, targetValue);
    _set_animationSpec__7qdru(this, animationSpec);
    var initialValue = forcedInitialValue == null ? this.get_resetSnapValue_6hgmgu_k$() === -3.0 ? targetValue : this.get_value_j01efc_k$() : forcedInitialValue;
    if (!(forcedInitialValue == null)) {
      this.set_value_w62xiq_k$(initialValue);
      if (!(forcedInitialVelocity == null)) {
        this.velocityVector_1 = forcedInitialVelocity;
      }
    }
    updateAnimation(this, initialValue, !this.get_isFinished_i1rrnm_k$());
    this.set_isFinished_o05ie7_k$(this.get_resetSnapValue_6hgmgu_k$() === -3.0);
    if (this.get_resetSnapValue_6hgmgu_k$() >= 0.0) {
      var duration = this.get_animation_r0gd0b_k$().get_durationNanos_ub5cy_k$();
      var tmp_0 = this.get_animation_r0gd0b_k$();
      // Inline function 'kotlin.Long.times' call
      var other = this.get_resetSnapValue_6hgmgu_k$();
      var tmp$ret$0 = toNumber(duration) * other;
      this.set_value_w62xiq_k$(tmp_0.getValueFromNanos_i31vd8_k$(numberToLong(tmp$ret$0)));
    } else if (this.get_resetSnapValue_6hgmgu_k$() === -3.0) {
      this.set_value_w62xiq_k$(targetValue);
    }
    this.useOnlyInitialValue_1 = false;
    this.set_resetSnapValue_a8o7uy_k$(-1.0);
  };
  protoOf(TransitionAnimationState).updateTargetValue$default_fm8oxe_k$ = function (targetValue, animationSpec, forcedInitialValue, forcedInitialVelocity, $super) {
    forcedInitialValue = forcedInitialValue === VOID ? null : forcedInitialValue;
    forcedInitialVelocity = forcedInitialVelocity === VOID ? null : forcedInitialVelocity;
    var tmp;
    if ($super === VOID) {
      this.updateTargetValue_cprzaq_k$(targetValue, animationSpec, forcedInitialValue, forcedInitialVelocity);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.updateTargetValue_cprzaq_k$.call(this, targetValue, animationSpec, forcedInitialValue, forcedInitialVelocity);
    }
    return tmp;
  };
  protoOf(TransitionAnimationState).updateInitialAndTargetValue_6zlop_k$ = function (initialValue, targetValue, animationSpec) {
    _set_targetValue__aqsk0r_0(this, targetValue);
    _set_animationSpec__7qdru(this, animationSpec);
    if (equals(this.get_animation_r0gd0b_k$().get_initialValue_2disdm_k$(), initialValue) && equals(this.get_animation_r0gd0b_k$().get_targetValue_kq6mfd_k$(), targetValue)) {
      return Unit_getInstance();
    }
    updateAnimation(this, initialValue);
  };
  function SegmentImpl(initialState, targetState) {
    this.initialState_1 = initialState;
    this.targetState_1 = targetState;
  }
  protoOf(SegmentImpl).get_initialState_2eu9l6_k$ = function () {
    return this.initialState_1;
  };
  protoOf(SegmentImpl).get_targetState_kri3mx_k$ = function () {
    return this.targetState_1;
  };
  protoOf(SegmentImpl).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Segment) : false) {
      tmp_0 = equals(this.initialState_1, other.get_initialState_2eu9l6_k$());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.targetState_1, other.get_targetState_kri3mx_k$());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SegmentImpl).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.initialState_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.targetState_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
  };
  function Segment() {
  }
  function DeferredAnimation($outer, typeConverter, label) {
    this.$this_1 = $outer;
    this.typeConverter_1 = typeConverter;
    this.label_1 = label;
    this.data$delegate_1 = mutableStateOf(null);
  }
  protoOf(DeferredAnimation).get_typeConverter_seyvfn_k$ = function () {
    return this.typeConverter_1;
  };
  protoOf(DeferredAnimation).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  protoOf(DeferredAnimation).set_data_ozdqqf_k$ = function (_set____db54di) {
    var tmp0 = this.data$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$DeferredAnimation$_get_data_$ref_yf6va6_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('data', 1, tmp, tmp_0, Transition$DeferredAnimation$_set_data_$ref_nt0v86_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(DeferredAnimation).get_data_np9y8g_k$ = function () {
    var tmp0 = this.data$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$DeferredAnimation$_get_data_$ref_yf6va6();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('data', 1, tmp, tmp_0, Transition$DeferredAnimation$_set_data_$ref_nt0v86());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(DeferredAnimation).animate_lt3uhv_k$ = function (transitionSpec, targetValueByState) {
    return this.animate_mgs5a2_k$(transitionSpec, null, null, targetValueByState);
  };
  protoOf(DeferredAnimation).animate_mgs5a2_k$ = function (transitionSpec, forcedInitialValue, forcedInitialVelocity, targetValueByState) {
    var tmp0_elvis_lhs = this.get_data_np9y8g_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = new DeferredAnimationData(this, new TransitionAnimationState(this.$this_1, targetValueByState(this.$this_1.get_currentState_snihnl_k$()), createZeroVectorFrom(this.typeConverter_1, targetValueByState(this.$this_1.get_currentState_snihnl_k$())), this.typeConverter_1, this.label_1), transitionSpec, targetValueByState);
      this.set_data_ozdqqf_k$(this_0);
      this.$this_1.addAnimation_jdgpwc_k$(this_0.animation_1);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var animData = tmp;
    // Inline function 'kotlin.apply' call
    animData.targetValueByState_1 = targetValueByState;
    animData.transitionSpec_1 = transitionSpec;
    animData.updateAnimationStates_reshzh_k$(this.$this_1.get_segment_xwnoei_k$(), forcedInitialValue, forcedInitialVelocity);
    return animData;
  };
  protoOf(DeferredAnimation).animate$default_7ujzjj_k$ = function (transitionSpec, forcedInitialValue, forcedInitialVelocity, targetValueByState, $super) {
    forcedInitialValue = forcedInitialValue === VOID ? null : forcedInitialValue;
    forcedInitialVelocity = forcedInitialVelocity === VOID ? null : forcedInitialVelocity;
    return $super === VOID ? this.animate_mgs5a2_k$(transitionSpec, forcedInitialValue, forcedInitialVelocity, targetValueByState) : $super.animate_mgs5a2_k$.call(this, transitionSpec, forcedInitialValue, forcedInitialVelocity, targetValueByState);
  };
  protoOf(DeferredAnimation).setupSeeking_mq3siu_k$ = function () {
    var tmp0_safe_receiver = this.get_data_np9y8g_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.apply' call
      tmp0_safe_receiver.animation_1.updateInitialAndTargetValue_6zlop_k$(tmp0_safe_receiver.targetValueByState_1(this.$this_1.get_segment_xwnoei_k$().get_initialState_2eu9l6_k$()), tmp0_safe_receiver.targetValueByState_1(this.$this_1.get_segment_xwnoei_k$().get_targetState_kri3mx_k$()), tmp0_safe_receiver.transitionSpec_1(this.$this_1.get_segment_xwnoei_k$()));
    }
  };
  function Transition$_get_targetState_$ref_4jc5u9() {
    return constructCallableReference(function (p0) {
      return p0.get_targetState_kri3mx_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.targetState.<get-targetState>|<get-targetState>(){}[0]');
  }
  function Transition$_set_targetState_$ref_5ke1ob() {
    return constructCallableReference(function (p0, p1) {
      p0.set_targetState_ob8bls_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.targetState.<set-targetState>|<set-targetState>(1:0){}[0]');
  }
  function Transition$_get_targetState_$ref_4jc5u9_0() {
    return constructCallableReference(function (p0) {
      return p0.get_targetState_kri3mx_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.targetState.<get-targetState>|<get-targetState>(){}[0]');
  }
  function Transition$_set_targetState_$ref_5ke1ob_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_targetState_ob8bls_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.targetState.<set-targetState>|<set-targetState>(1:0){}[0]');
  }
  function Transition$_get_pendingTargetState_$ref_ou62o0() {
    return constructCallableReference(function (p0) {
      return p0.get_pendingTargetState_ogufoy_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.pendingTargetState.<get-pendingTargetState>|<get-pendingTargetState>(){}[0]');
  }
  function Transition$_set_pendingTargetState_$ref_nxuivg() {
    return constructCallableReference(function (p0, p1) {
      _set_pendingTargetState__1g34xe(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.pendingTargetState.<set-pendingTargetState>|<set-pendingTargetState>(1:0?){}[0]');
  }
  function Transition$_get_pendingTargetState_$ref_ou62o0_0() {
    return constructCallableReference(function (p0) {
      return p0.get_pendingTargetState_ogufoy_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.pendingTargetState.<get-pendingTargetState>|<get-pendingTargetState>(){}[0]');
  }
  function Transition$_set_pendingTargetState_$ref_nxuivg_0() {
    return constructCallableReference(function (p0, p1) {
      _set_pendingTargetState__1g34xe(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.pendingTargetState.<set-pendingTargetState>|<set-pendingTargetState>(1:0?){}[0]');
  }
  function Transition$_get_segment_$ref_hll1ky() {
    return constructCallableReference(function (p0) {
      return p0.get_segment_xwnoei_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.segment.<get-segment>|<get-segment>(){}[0]');
  }
  function Transition$_set_segment_$ref_n54u2a() {
    return constructCallableReference(function (p0, p1) {
      _set_segment__77iylu(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.segment.<set-segment>|<set-segment>(androidx.compose.animation.core.Transition.Segment<1:0>){}[0]');
  }
  function Transition$_get_segment_$ref_hll1ky_0() {
    return constructCallableReference(function (p0) {
      return p0.get_segment_xwnoei_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.segment.<get-segment>|<get-segment>(){}[0]');
  }
  function Transition$_set_segment_$ref_n54u2a_0() {
    return constructCallableReference(function (p0, p1) {
      _set_segment__77iylu(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.segment.<set-segment>|<set-segment>(androidx.compose.animation.core.Transition.Segment<1:0>){}[0]');
  }
  function Transition$_get__playTimeNanos_$ref_dkmemi() {
    return constructCallableReference(function (p0) {
      return _get__playTimeNanos__xxox8s(p0);
    }, 1, 0, 'androidx.compose.animation.core/Transition._playTimeNanos.<get-_playTimeNanos>|<get-_playTimeNanos>(){}[0]');
  }
  function Transition$_set__playTimeNanos_$ref_nimc8a() {
    return constructCallableReference(function (p0, p1) {
      _set__playTimeNanos__8elh7c(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition._playTimeNanos.<set-_playTimeNanos>|<set-_playTimeNanos>(kotlin.Long){}[0]');
  }
  function Transition$_get__playTimeNanos_$ref_dkmemi_0() {
    return constructCallableReference(function (p0) {
      return _get__playTimeNanos__xxox8s(p0);
    }, 1, 0, 'androidx.compose.animation.core/Transition._playTimeNanos.<get-_playTimeNanos>|<get-_playTimeNanos>(){}[0]');
  }
  function Transition$_set__playTimeNanos_$ref_nimc8a_0() {
    return constructCallableReference(function (p0, p1) {
      _set__playTimeNanos__8elh7c(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition._playTimeNanos.<set-_playTimeNanos>|<set-_playTimeNanos>(kotlin.Long){}[0]');
  }
  function Transition$_get_startTimeNanos_$ref_69ueft() {
    return constructCallableReference(function (p0) {
      return p0.get_startTimeNanos_a57bg6_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.startTimeNanos.<get-startTimeNanos>|<get-startTimeNanos>(){}[0]');
  }
  function Transition$_set_startTimeNanos_$ref_utecez() {
    return constructCallableReference(function (p0, p1) {
      p0.set_startTimeNanos_4qe7d8_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.startTimeNanos.<set-startTimeNanos>|<set-startTimeNanos>(kotlin.Long){}[0]');
  }
  function Transition$_get_startTimeNanos_$ref_69ueft_0() {
    return constructCallableReference(function (p0) {
      return p0.get_startTimeNanos_a57bg6_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.startTimeNanos.<get-startTimeNanos>|<get-startTimeNanos>(){}[0]');
  }
  function Transition$_set_startTimeNanos_$ref_utecez_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_startTimeNanos_4qe7d8_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.startTimeNanos.<set-startTimeNanos>|<set-startTimeNanos>(kotlin.Long){}[0]');
  }
  function Transition$_get_updateChildrenNeeded_$ref_m1jdik() {
    return constructCallableReference(function (p0) {
      return _get_updateChildrenNeeded__mpvzi(p0);
    }, 1, 0, 'androidx.compose.animation.core/Transition.updateChildrenNeeded.<get-updateChildrenNeeded>|<get-updateChildrenNeeded>(){}[0]');
  }
  function Transition$_set_updateChildrenNeeded_$ref_hj65vc() {
    return constructCallableReference(function (p0, p1) {
      _set_updateChildrenNeeded__eksjzu(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.updateChildrenNeeded.<set-updateChildrenNeeded>|<set-updateChildrenNeeded>(kotlin.Boolean){}[0]');
  }
  function Transition$_get_updateChildrenNeeded_$ref_m1jdik_0() {
    return constructCallableReference(function (p0) {
      return _get_updateChildrenNeeded__mpvzi(p0);
    }, 1, 0, 'androidx.compose.animation.core/Transition.updateChildrenNeeded.<get-updateChildrenNeeded>|<get-updateChildrenNeeded>(){}[0]');
  }
  function Transition$_set_updateChildrenNeeded_$ref_hj65vc_0() {
    return constructCallableReference(function (p0, p1) {
      _set_updateChildrenNeeded__eksjzu(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.updateChildrenNeeded.<set-updateChildrenNeeded>|<set-updateChildrenNeeded>(kotlin.Boolean){}[0]');
  }
  function Transition$_get_isSeeking_$ref_mx3xt() {
    return constructCallableReference(function (p0) {
      return p0.get_isSeeking_vjb393_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.isSeeking.<get-isSeeking>|<get-isSeeking>(){}[0]');
  }
  function Transition$_set_isSeeking_$ref_fuomg5() {
    return constructCallableReference(function (p0, p1) {
      p0.set_isSeeking_cprmjv_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.isSeeking.<set-isSeeking>|<set-isSeeking>(kotlin.Boolean){}[0]');
  }
  function Transition$_get_isSeeking_$ref_mx3xt_0() {
    return constructCallableReference(function (p0) {
      return p0.get_isSeeking_vjb393_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.isSeeking.<get-isSeeking>|<get-isSeeking>(){}[0]');
  }
  function Transition$_set_isSeeking_$ref_fuomg5_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_isSeeking_cprmjv_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/Transition.isSeeking.<set-isSeeking>|<set-isSeeking>(kotlin.Boolean){}[0]');
  }
  function Transition$totalDurationNanos$delegate$lambda(this$0) {
    return function () {
      return calculateTotalDurationNanos(this$0);
    };
  }
  function Transition$_get_totalDurationNanos_$ref_owbzlq() {
    return constructCallableReference(function (p0) {
      return p0.get_totalDurationNanos_cuj0z4_k$();
    }, 1, 0, 'androidx.compose.animation.core/Transition.totalDurationNanos.<get-totalDurationNanos>|<get-totalDurationNanos>(){}[0]');
  }
  function animateTo$lambda_0($runFrameLoop$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('runFrameLoop', KProperty0, false);
    return $runFrameLoop$delegate.get_value_j01efc_k$();
  }
  function Transition$animateTo$lambda(this$0) {
    return function () {
      return !equals(this$0.get_targetState_kri3mx_k$(), this$0.get_currentState_snihnl_k$()) || this$0.get_isRunning_okmtn0_k$() || _get_updateChildrenNeeded__mpvzi(this$0);
    };
  }
  function Transition$animateTo$lambda_0() {
    return EmptyCoroutineContext_getInstance();
  }
  function Transition$animateTo$lambda$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Transition$animateTo$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(Transition$animateTo$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Transition$animateTo$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.durationScale0__1 = get_durationScale(this.$this$launch_1.get_coroutineContext_115oqo_k$());
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!get_isActive(this.$this$launch_1)) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = withFrameNanos(Transition$animateTo$lambda$slambda$lambda(this.this$0__1, this.durationScale0__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(Transition$animateTo$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new Transition$animateTo$lambda$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(Transition$animateTo$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function Transition$animateTo$lambda$slambda_0(this$0, resultContinuation) {
    var i = new Transition$animateTo$lambda$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    }, 1);
  }
  function Transition$animateTo$$inlined$cache$1$2() {
  }
  protoOf(Transition$animateTo$$inlined$cache$1$2).dispose_3nnxhr_k$ = function () {
  };
  function Transition$animateTo$lambda_1($coroutineScope, this$0) {
    return function ($this$DisposableEffect) {
      var tmp = CoroutineStart_UNDISPATCHED_getInstance();
      launch($coroutineScope, VOID, tmp, Transition$animateTo$lambda$slambda_0(this$0, null));
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new Transition$animateTo$$inlined$cache$1$2();
    };
  }
  function Transition$animateTo$lambda_2($tmp0_rcvr, $targetState, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.animateTo_rxzkdc_k$($targetState, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Transition(transitionState, parentTransition, label) {
    label = label === VOID ? null : label;
    this.transitionState_1 = transitionState;
    this.parentTransition_1 = parentTransition;
    this.label_1 = label;
    this.targetState$delegate_1 = mutableStateOf(this.get_currentState_snihnl_k$());
    this.pendingTargetState$delegate_1 = mutableStateOf(null);
    this.segment$delegate_1 = mutableStateOf(new SegmentImpl(this.get_currentState_snihnl_k$(), this.get_currentState_snihnl_k$()));
    this._playTimeNanos$delegate_1 = mutableLongStateOf(new Long(0, 0));
    this.startTimeNanos$delegate_1 = mutableLongStateOf(new Long(0, -2147483648));
    this.updateChildrenNeeded$delegate_1 = mutableStateOf(false);
    this._animations_1 = mutableStateListOf();
    this._transitions_1 = mutableStateListOf();
    this.isSeeking$delegate_1 = mutableStateOf(false);
    this.lastSeekedTimeNanos_1 = new Long(0, 0);
    var tmp = this;
    tmp.totalDurationNanos$delegate_1 = derivedStateOf(Transition$totalDurationNanos$delegate$lambda(this));
    this.transitionState_1.transitionConfigured_2ailji_k$(this);
  }
  protoOf(Transition).get_parentTransition_svtbx4_k$ = function () {
    return this.parentTransition_1;
  };
  protoOf(Transition).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  protoOf(Transition).get_currentState_snihnl_k$ = function () {
    return this.transitionState_1.get_currentState_snihnl_k$();
  };
  protoOf(Transition).set_targetState_ob8bls_k$ = function (_set____db54di) {
    var tmp0 = this.targetState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_targetState_$ref_4jc5u9_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('targetState', 1, tmp, tmp_0, Transition$_set_targetState_$ref_5ke1ob_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(Transition).get_targetState_kri3mx_k$ = function () {
    var tmp0 = this.targetState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_targetState_$ref_4jc5u9();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('targetState', 1, tmp, tmp_0, Transition$_set_targetState_$ref_5ke1ob());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(Transition).get_pendingTargetState_ogufoy_k$ = function () {
    var tmp0 = this.pendingTargetState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_pendingTargetState_$ref_ou62o0();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('pendingTargetState', 1, tmp, tmp_0, Transition$_set_pendingTargetState_$ref_nxuivg());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(Transition).updatePendingTarget_co8jy3_k$ = function (value) {
    var previousPending = this.get_pendingTargetState_ogufoy_k$();
    var wasPendingCleared = !(previousPending == null) && value == null && equals(this.get_targetState_kri3mx_k$(), this.get_currentState_snihnl_k$());
    _set_pendingTargetState__1g34xe(this, value);
    if (wasPendingCleared) {
      _set_segment__77iylu(this, new SegmentImpl(previousPending, this.get_targetState_kri3mx_k$()));
      this.transitionState_1.set_currentState_6uk70u_k$(previousPending);
      if (!this.get_isRunning_okmtn0_k$()) {
        _set_updateChildrenNeeded__eksjzu(this, true);
      }
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = this._animations_1;
      var inductionVariable = 0;
      var last = this_0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.get_c1px32_k$(index);
          item.resetAnimation_64towu_k$();
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Transition).get_segment_xwnoei_k$ = function () {
    var tmp0 = this.segment$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_segment_$ref_hll1ky();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('segment', 1, tmp, tmp_0, Transition$_set_segment_$ref_n54u2a());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(Transition).get_isRunning_okmtn0_k$ = function () {
    return !equalsLong(this.get_startTimeNanos_a57bg6_k$(), new Long(0, -2147483648));
  };
  protoOf(Transition).set_playTimeNanos_8390lf_k$ = function (value) {
    if (this.parentTransition_1 == null) {
      _set__playTimeNanos__8elh7c(this, value);
    }
  };
  protoOf(Transition).get_playTimeNanos_50m2yz_k$ = function () {
    var tmp0_safe_receiver = this.parentTransition_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_playTimeNanos_50m2yz_k$();
    return tmp1_elvis_lhs == null ? _get__playTimeNanos__xxox8s(this) : tmp1_elvis_lhs;
  };
  protoOf(Transition).set_startTimeNanos_4qe7d8_k$ = function (_set____db54di) {
    var tmp0 = this.startTimeNanos$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_startTimeNanos_$ref_69ueft_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('startTimeNanos', 1, tmp, tmp_0, Transition$_set_startTimeNanos_$ref_utecez_0());
    tmp0.set_longValue_3qxaje_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(Transition).get_startTimeNanos_a57bg6_k$ = function () {
    var tmp0 = this.startTimeNanos$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_startTimeNanos_$ref_69ueft();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('startTimeNanos', 1, tmp, tmp_0, Transition$_set_startTimeNanos_$ref_utecez());
    return tmp0.get_longValue_ahin58_k$();
  };
  protoOf(Transition).get_transitions_hojw6j_k$ = function () {
    return this._transitions_1;
  };
  protoOf(Transition).get_animations_ez9gco_k$ = function () {
    return this._animations_1;
  };
  protoOf(Transition).set_isSeeking_cprmjv_k$ = function (_set____db54di) {
    var tmp0 = this.isSeeking$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_isSeeking_$ref_mx3xt_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isSeeking', 1, tmp, tmp_0, Transition$_set_isSeeking_$ref_fuomg5_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(Transition).get_isSeeking_vjb393_k$ = function () {
    var tmp0 = this.isSeeking$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_isSeeking_$ref_mx3xt();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isSeeking', 1, tmp, tmp_0, Transition$_set_isSeeking_$ref_fuomg5());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(Transition).set_lastSeekedTimeNanos_shaqh3_k$ = function (_set____db54di) {
    this.lastSeekedTimeNanos_1 = _set____db54di;
  };
  protoOf(Transition).get_lastSeekedTimeNanos_hy07y1_k$ = function () {
    return this.lastSeekedTimeNanos_1;
  };
  protoOf(Transition).get_hasInitialValueAnimations_mdjdrh_k$ = function () {
    var tmp;
    var tmp0 = this._animations_1;
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
          if (!(item.initialValueState_1 == null)) {
            tmp$ret$0 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$0 = false;
    }
    if (tmp$ret$0) {
      tmp = true;
    } else {
      var tmp0_0 = this._transitions_1;
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'androidx.compose.ui.util.fastAny' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable_0 = 0;
        var last_0 = tmp0_0.get_size_woubt6_k$() - 1 | 0;
        if (inductionVariable_0 <= last_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_0 = tmp0_0.get_c1px32_k$(index_0);
            if (item_0.get_hasInitialValueAnimations_mdjdrh_k$()) {
              tmp$ret$4 = true;
              break $l$block_0;
            }
          }
           while (inductionVariable_0 <= last_0);
        tmp$ret$4 = false;
      }
      tmp = tmp$ret$4;
    }
    return tmp;
  };
  protoOf(Transition).get_totalDurationNanos_cuj0z4_k$ = function () {
    var tmp0 = this.totalDurationNanos$delegate_1;
    var tmp = KProperty1;
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('totalDurationNanos', 1, tmp, Transition$_get_totalDurationNanos_$ref_owbzlq(), null);
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(Transition).onFrame_wjwgn9_k$ = function (frameTimeNanos, durationScale) {
    if (equalsLong(this.get_startTimeNanos_a57bg6_k$(), new Long(0, -2147483648))) {
      this.onTransitionStart_tz1xzn_k$(frameTimeNanos);
    }
    var deltaT = subtract(frameTimeNanos, this.get_startTimeNanos_a57bg6_k$());
    var tmp;
    if (durationScale === 0.0) {
      tmp = deltaT;
    } else {
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = toNumber(deltaT) / durationScale;
      tmp = roundToLong(tmp$ret$0);
    }
    var scaledPlayTimeNanos = tmp;
    this.set_playTimeNanos_8390lf_k$(scaledPlayTimeNanos);
    this.onFrame_o9mape_k$(scaledPlayTimeNanos, durationScale === 0.0);
  };
  protoOf(Transition).onFrame_o9mape_k$ = function (scaledPlayTimeNanos, scaleToEnd) {
    if (equalsLong(this.get_startTimeNanos_a57bg6_k$(), new Long(0, -2147483648))) {
      this.onTransitionStart_tz1xzn_k$(scaledPlayTimeNanos);
    } else if (!this.transitionState_1.get_isRunning_yzngqx_k$()) {
      this.transitionState_1.set_isRunning_o0rkdc_k$(true);
    }
    _set_updateChildrenNeeded__eksjzu(this, false);
    var allFinished = true;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this._animations_1;
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        if (!item.get_isFinished_i1rrnm_k$()) {
          item.onPlayTimeChanged_uwz36g_k$(scaledPlayTimeNanos, scaleToEnd);
        }
        if (!item.get_isFinished_i1rrnm_k$()) {
          allFinished = false;
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this._transitions_1;
    var inductionVariable_0 = 0;
    var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.get_c1px32_k$(index_0);
        if (!equals(item_0.get_targetState_kri3mx_k$(), item_0.get_currentState_snihnl_k$())) {
          item_0.onFrame_o9mape_k$(scaledPlayTimeNanos, scaleToEnd);
        }
        if (!equals(item_0.get_targetState_kri3mx_k$(), item_0.get_currentState_snihnl_k$())) {
          allFinished = false;
        }
      }
       while (inductionVariable_0 <= last_0);
    if (allFinished) {
      this.onTransitionEnd_hbma8k_k$();
    }
  };
  protoOf(Transition).onTransitionStart_tz1xzn_k$ = function (frameTimeNanos) {
    this.set_startTimeNanos_4qe7d8_k$(frameTimeNanos);
    this.transitionState_1.set_isRunning_o0rkdc_k$(true);
  };
  protoOf(Transition).onDisposed_dytz1r_k$ = function () {
    this.onTransitionEnd_hbma8k_k$();
    this.transitionState_1.transitionRemoved_oll33s_k$();
  };
  protoOf(Transition).onTransitionEnd_hbma8k_k$ = function () {
    this.set_startTimeNanos_4qe7d8_k$(new Long(0, -2147483648));
    var tmp;
    var tmp_0 = this.transitionState_1;
    if (tmp_0 instanceof MutableTransitionState) {
      tmp = true;
    } else {
      var tmp_1 = this.transitionState_1;
      tmp = tmp_1 instanceof DeferredTransitionState;
    }
    if (tmp) {
      this.transitionState_1.set_currentState_6uk70u_k$(this.get_targetState_kri3mx_k$());
    }
    this.set_playTimeNanos_8390lf_k$(new Long(0, 0));
    this.transitionState_1.set_isRunning_o0rkdc_k$(false);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this._transitions_1;
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        item.onTransitionEnd_hbma8k_k$();
      }
       while (inductionVariable <= last);
  };
  protoOf(Transition).setPlaytimeAfterInitialAndTargetStateEstablished_5eb7ay_k$ = function (initialState, targetState, playTimeNanos) {
    this.set_startTimeNanos_4qe7d8_k$(new Long(0, -2147483648));
    this.transitionState_1.set_isRunning_o0rkdc_k$(false);
    if (!this.get_isSeeking_vjb393_k$() || !equals(this.get_currentState_snihnl_k$(), initialState) || !equals(this.get_targetState_kri3mx_k$(), targetState)) {
      var tmp;
      if (!equals(this.get_currentState_snihnl_k$(), initialState)) {
        var tmp_0;
        var tmp_1 = this.transitionState_1;
        if (tmp_1 instanceof MutableTransitionState) {
          tmp_0 = true;
        } else {
          var tmp_2 = this.transitionState_1;
          tmp_0 = tmp_2 instanceof DeferredTransitionState;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      if (tmp) {
        this.transitionState_1.set_currentState_6uk70u_k$(initialState);
      }
      this.set_targetState_ob8bls_k$(targetState);
      this.set_isSeeking_cprmjv_k$(true);
      _set_segment__77iylu(this, new SegmentImpl(initialState, targetState));
    }
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this._transitions_1;
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        // Inline function 'kotlin.let' call
        var it = item instanceof Transition ? item : THROW_CCE();
        if (it.get_isSeeking_vjb393_k$()) {
          it.setPlaytimeAfterInitialAndTargetStateEstablished_5eb7ay_k$(it.get_currentState_snihnl_k$(), it.get_targetState_kri3mx_k$(), playTimeNanos);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this._animations_1;
    var inductionVariable_0 = 0;
    var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.get_c1px32_k$(index_0);
        item_0.seekTo_aywgb2_k$(playTimeNanos);
      }
       while (inductionVariable_0 <= last_0);
    this.lastSeekedTimeNanos_1 = playTimeNanos;
  };
  protoOf(Transition).addTransition_dtnpqu_k$ = function (transition) {
    return this._transitions_1.add_wl2rvy_k$(transition);
  };
  protoOf(Transition).removeTransition_442hbh_k$ = function (transition) {
    return this._transitions_1.remove_an8aut_k$(transition);
  };
  protoOf(Transition).addAnimation_jdgpwc_k$ = function (animation) {
    return this._animations_1.add_wl2rvy_k$(animation);
  };
  protoOf(Transition).removeAnimation_vd2pap_k$ = function (animation) {
    this._animations_1.remove_an8aut_k$(animation);
  };
  protoOf(Transition).updateTarget_9b8tjr_k$ = function (targetState) {
    if (!equals(this.get_targetState_kri3mx_k$(), targetState)) {
      _set_segment__77iylu(this, new SegmentImpl(this.get_targetState_kri3mx_k$(), targetState));
      if (!equals(this.get_currentState_snihnl_k$(), this.get_targetState_kri3mx_k$())) {
        this.transitionState_1.set_currentState_6uk70u_k$(this.get_targetState_kri3mx_k$());
      }
      this.set_targetState_ob8bls_k$(targetState);
      if (!this.get_isRunning_okmtn0_k$()) {
        _set_updateChildrenNeeded__eksjzu(this, true);
      }
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = this._animations_1;
      var inductionVariable = 0;
      var last = this_0.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.get_c1px32_k$(index);
          item.resetAnimation_64towu_k$();
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Transition).animateTo_rxzkdc_k$ = function (targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1493585151);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.changed_ga7h3f_k$(targetState) : $composer_0.changedInstance_s1wkiy_k$(targetState)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(this) ? 32 : 16);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!this.get_isSeeking_vjb393_k$()) {
        $composer_0.startReplaceGroup_5hh8aj_k$(466062241);
        this.updateTarget_9b8tjr_k$(targetState);
        var tmp0 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = ($dirty & 112) === 32;
        // Inline function 'kotlin.let' call
        var it = tmp0.rememberedValue_4dg93v_k$();
        var tmp;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          var value = derivedStateOf(Transition$animateTo$lambda(this));
          tmp0.updateRememberedValue_l1wh71_k$(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var runFrameLoop$delegate = tmp;
        if (animateTo$lambda_0(runFrameLoop$delegate)) {
          $composer_0.startReplaceGroup_5hh8aj_k$(466470356);
          // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
          var getContext = null;
          var $composer_1 = $composer_0;
          if (!((1 & 1) === 0)) {
            getContext = Transition$animateTo$lambda_0;
          }
          var composer = $composer_1;
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          var it_0 = $composer_1.rememberedValue_4dg93v_k$();
          var tmp_0;
          if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            var value_0 = createCompositionCoroutineScope(getContext(), composer);
            $composer_1.updateRememberedValue_l1wh71_k$(value_0);
            tmp_0 = value_0;
          } else {
            tmp_0 = it_0;
          }
          var coroutineScope = tmp_0;
          var tmp0_0 = $composer_0;
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_0 = !!($composer_0.changedInstance_s1wkiy_k$(coroutineScope) | ($dirty & 112) === 32);
          // Inline function 'kotlin.let' call
          var it_1 = tmp0_0.rememberedValue_4dg93v_k$();
          var tmp_1;
          if (invalid_0 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
            var value_1 = Transition$animateTo$lambda_1(coroutineScope, this);
            tmp0_0.updateRememberedValue_l1wh71_k$(value_1);
            tmp_1 = value_1;
          } else {
            tmp_1 = it_1;
          }
          var tmp$ret$9 = tmp_1;
          DisposableEffect(coroutineScope, this, tmp$ret$9, $composer_0, 112 & $dirty);
          $composer_0.endReplaceGroup_ek144q_k$();
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(467712929);
          $composer_0.endReplaceGroup_ek144q_k$();
        }
        $composer_0.endReplaceGroup_ek144q_k$();
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(467722849);
        $composer_0.endReplaceGroup_ek144q_k$();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp1_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.updateScope_t8jcf_k$(Transition$animateTo$lambda_2(this, targetState, $changed));
    }
  };
  protoOf(Transition).seekAnimations_edwrve_k$ = function (playTimeNanos) {
    if (equalsLong(this.get_startTimeNanos_a57bg6_k$(), new Long(0, -2147483648))) {
      this.set_startTimeNanos_4qe7d8_k$(playTimeNanos);
    }
    this.set_playTimeNanos_8390lf_k$(playTimeNanos);
    _set_updateChildrenNeeded__eksjzu(this, false);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this._animations_1;
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        item.seekTo_aywgb2_k$(playTimeNanos);
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this._transitions_1;
    var inductionVariable_0 = 0;
    var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.get_c1px32_k$(index_0);
        if (!equals(item_0.get_targetState_kri3mx_k$(), item_0.get_currentState_snihnl_k$())) {
          item_0.seekAnimations_edwrve_k$(playTimeNanos);
        }
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).setInitialAnimations_5bv565_k$ = function (animationState) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this._animations_1;
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        item.setInitialValueAnimation_38t2b3_k$(animationState);
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this._transitions_1;
    var inductionVariable_0 = 0;
    var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.get_c1px32_k$(index_0);
        item_0.setInitialAnimations_5bv565_k$(animationState);
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).resetAnimationFraction_ecgbkk_k$ = function (fraction) {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this._animations_1;
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        item.resetAnimationValue_y9x6r5_k$(fraction);
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this._transitions_1;
    var inductionVariable_0 = 0;
    var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.get_c1px32_k$(index_0);
        item_0.resetAnimationFraction_ecgbkk_k$(fraction);
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).clearInitialAnimations_yfnnil_k$ = function () {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this._animations_1;
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        item.clearInitialAnimation_9sdpae_k$();
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this._transitions_1;
    var inductionVariable_0 = 0;
    var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.get_c1px32_k$(index_0);
        item_0.clearInitialAnimations_yfnnil_k$();
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).updateInitialValues_c25wra_k$ = function () {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this._animations_1;
    var inductionVariable = 0;
    var last = this_0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.get_c1px32_k$(index);
        item.updateInitialValue_pawylf_k$();
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this._transitions_1;
    var inductionVariable_0 = 0;
    var last_0 = this_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.get_c1px32_k$(index_0);
        item_0.updateInitialValues_c25wra_k$();
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).toString = function () {
    var tmp0 = this.get_animations_ez9gco_k$();
    // Inline function 'androidx.compose.ui.util.fastFold' call
    var accumulator = 'Transition animation values: ';
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = tmp0.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0.get_c1px32_k$(index);
        accumulator = accumulator + item.toString() + ', ';
      }
       while (inductionVariable <= last);
    return accumulator;
  };
  protoOf(Transition).removeAnimation_gmbwco_k$ = function (deferredAnimation) {
    var tmp0_safe_receiver = deferredAnimation.get_data_np9y8g_k$();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.animation_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.removeAnimation_vd2pap_k$(tmp1_safe_receiver);
    }
  };
  function updateTransition(targetState, label, $composer, $changed, $default) {
    _init_properties_Transition_kt__s6zoln();
    var label_0 = label;
    var $composer_0 = $composer;
    if (!(($default & 2) === 0))
      label_0 = null;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var value = TransitionInstance_init_$Create$_0(targetState, label_0);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var transition = tmp;
    transition.animateTo_rxzkdc_k$(targetState, $composer_0, 48 | 8 & $changed | 14 & $changed);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_0;
    if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var value_0 = updateTransition$lambda(transition);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_0 = value_0;
    } else {
      tmp_0 = it_0;
    }
    var tmp$ret$4 = tmp_0;
    DisposableEffect_0(transition, tmp$ret$4, $composer_0, 54);
    return transition;
  }
  function animateFloat(_this__u8e3s4, transitionSpec, label, targetValueByState, $composer, $changed, $default) {
    _init_properties_Transition_kt__s6zoln();
    var transitionSpec_0 = transitionSpec;
    var label_0 = label;
    var $composer_0 = $composer;
    if (!(($default & 1) === 0)) {
      transitionSpec_0 = animateFloat$lambda;
    }
    if (!(($default & 2) === 0))
      label_0 = 'FloatAnimation';
    var tmp2 = get_VectorConverter_0(FloatCompanionObject_getInstance());
    // Inline function 'androidx.compose.animation.core.animateValue' call
    var $changed_0 = 14 & $changed | 896 & $changed << 3 | 7168 & $changed << 3 | 57344 & $changed << 3;
    var transitionSpec_1 = transitionSpec_0;
    var label_1 = label_0;
    var $composer_1 = $composer_0;
    if (!((0 & 2) === 0)) {
      transitionSpec_1 = animateFloat$lambda_0;
    }
    if (!((0 & 4) === 0))
      label_1 = 'ValueAnimation';
    var tmp;
    if (!_this__u8e3s4.get_isSeeking_vjb393_k$()) {
      $composer_1.startReplaceGroup_5hh8aj_k$(1666573488);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($changed_0 & 14 ^ 6) > 4 && $composer_1.changed_ga7h3f_k$(_this__u8e3s4) || ($changed_0 & 6) === 4;
      // Inline function 'kotlin.let' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var tmp0 = Companion_getInstance_6();
        var tmp$ret$5;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Companion.withoutReadObservation' call
          var previousSnapshot = tmp0.get_currentThreadSnapshot_y07jj6_k$();
          var observer = previousSnapshot == null ? null : previousSnapshot.get_readObserver_t4nv53_k$();
          var newSnapshot = tmp0.makeCurrentNonObservable_yxji5w_k$(previousSnapshot);
          try {
            tmp$ret$5 = _this__u8e3s4.get_currentState_snihnl_k$();
            break $l$block;
          }finally {
            tmp0.restoreNonObservable_baklka_k$(previousSnapshot, newSnapshot, observer);
          }
        }
        var value = tmp$ret$5;
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp1_group = tmp_0;
      $composer_1.endReplaceGroup_ek144q_k$();
      tmp = tmp1_group;
    } else {
      $composer_1.startReplaceGroup_5hh8aj_k$(1666827533);
      $composer_1.endReplaceGroup_ek144q_k$();
      tmp = _this__u8e3s4.get_currentState_snihnl_k$();
    }
    var initialState = tmp;
    var initialValue = targetValueByState(initialState, $composer_1, 112 & $changed_0 >> 9);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = ($changed_0 & 14 ^ 6) > 4 && $composer_1.changed_ga7h3f_k$(_this__u8e3s4) || ($changed_0 & 6) === 4;
    // Inline function 'kotlin.let' call
    var it_0 = $composer_1.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var value_0 = derivedStateOf(animateFloat$lambda_1(_this__u8e3s4));
      $composer_1.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var targetValue = targetValueByState(tmp_1.get_value_j01efc_k$(), $composer_1, 112 & $changed_0 >> 9);
    var tmp_2 = transitionSpec_1;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_1 = ($changed_0 & 14 ^ 6) > 4 && $composer_1.changed_ga7h3f_k$(_this__u8e3s4) || ($changed_0 & 6) === 4;
    // Inline function 'kotlin.let' call
    var it_1 = $composer_1.rememberedValue_4dg93v_k$();
    var tmp_3;
    if (invalid_1 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var value_1 = derivedStateOf(animateFloat$lambda_2(_this__u8e3s4));
      $composer_1.updateRememberedValue_l1wh71_k$(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var animationSpec = tmp_2(tmp_3.get_value_j01efc_k$(), $composer_1, 112 & $changed_0 >> 3);
    return createTransitionAnimation(_this__u8e3s4, initialValue, targetValue, animationSpec, tmp2, label_1, $composer_1, 14 & $changed_0 | 57344 & $changed_0 << 9 | 458752 & $changed_0 << 6);
  }
  function SeekableTransitionState$seekTo$slambda$slambda$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$seekTo$slambda$slambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = runAnimations(this.this$0__1, this);
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
  protoOf(SeekableTransitionState$seekTo$slambda$slambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new SeekableTransitionState$seekTo$slambda$slambda$slambda(this.this$0__1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function SeekableTransitionState$seekTo$slambda$slambda$slambda_0(this$0, resultContinuation) {
    var i = new SeekableTransitionState$seekTo$slambda$slambda$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    }, 1);
  }
  function SeekableTransitionState$seekTo$slambda$slambda($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation) {
    this.$targetState_1 = $targetState;
    this.$oldTargetState_1 = $oldTargetState;
    this.this$0__1 = this$0;
    this.$transition_1 = $transition;
    this.$fraction_1 = $fraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$seekTo$slambda$slambda).invoke_d9fzmj_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            if (!equals(this.$targetState_1, this.$oldTargetState_1)) {
              moveAnimationToInitialState(this.this$0__1);
            } else {
              this.this$0__1.currentAnimation_1 = null;
              if (equals(this.this$0__1.get_currentState_snihnl_k$(), this.$targetState_1)) {
                return Unit_getInstance();
              }
            }

            if (!equals(this.$targetState_1, this.$oldTargetState_1)) {
              this.$transition_1.updateTarget_9b8tjr_k$(this.$targetState_1);
              this.$transition_1.set_playTimeNanos_8390lf_k$(new Long(0, 0));
              this.this$0__1.set_targetState_ob8bls_k$(this.$targetState_1);
              this.$transition_1.resetAnimationFraction_ecgbkk_k$(this.$fraction_1);
            }

            _set_fraction__t78qnf(this.this$0__1, this.$fraction_1);
            if (this.this$0__1.initialValueAnimations_1.isNotEmpty_cjxbwk_k$()) {
              launch(this.$this$coroutineScope_1, VOID, VOID, SeekableTransitionState$seekTo$slambda$slambda$slambda_0(this.this$0__1, null));
            } else {
              this.this$0__1.lastFrameTimeNanos_1 = new Long(0, -2147483648);
            }

            this.set_state_rjd8d0_k$(1);
            suspendResult = waitForCompositionAfterTargetStateChange(this.this$0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            seekToFraction(this.this$0__1);
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
  protoOf(SeekableTransitionState$seekTo$slambda$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new SeekableTransitionState$seekTo$slambda$slambda(this.$targetState_1, this.$oldTargetState_1, this.this$0__1, this.$transition_1, this.$fraction_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(SeekableTransitionState$seekTo$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function SeekableTransitionState$seekTo$slambda$slambda_0($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation) {
    var i = new SeekableTransitionState$seekTo$slambda$slambda($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation);
    return constructCallableReference(function ($this$coroutineScope, $completion) {
      return i.invoke_d9fzmj_k$($this$coroutineScope, $completion);
    }, 1);
  }
  function SeekableTransitionState$animateTo$slambda$slambda(this$0, $targetState, $transition, $animationSpec, resultContinuation) {
    this.this$0__1 = this$0;
    this.$targetState_1 = $targetState;
    this.$transition_1 = $transition;
    this.$animationSpec_1 = $animationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$animateTo$slambda$slambda).invoke_d9fzmj_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_rcuf4x_k$($this$coroutineScope, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SeekableTransitionState$animateTo$slambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SeekableTransitionState$animateTo$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(8);
            var oldTargetState = this.this$0__1.get_targetState_kri3mx_k$();
            if (!equals(this.$targetState_1, oldTargetState)) {
              moveAnimationToInitialState(this.this$0__1);
              _set_fraction__t78qnf(this.this$0__1, 0.0);
              this.$transition_1.updateTarget_9b8tjr_k$(this.$targetState_1);
              this.$transition_1.set_playTimeNanos_8390lf_k$(new Long(0, 0));
              this.this$0__1.set_currentState_6uk70u_k$(oldTargetState);
              this.this$0__1.set_targetState_ob8bls_k$(this.$targetState_1);
            }

            this.this1__1 = this.this$0__1.compositionContinuationMutex_1;
            this.owner0__1 = null;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this1__1.lock_ugrcvf_k$(this.owner0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp$ret$0 = Unit_getInstance();
            l$ret$1: do {
              var tmp_0;
              try {
                tmp$ret$0 = this.this$0__1.composedTargetState_1;
                break l$ret$1;
              } catch ($p) {
                var tmp_1;
                var t = $p;
                this.this1__1.unlock_ulcrcl_k$(this.owner0__1);
                throw t;
              }
            }
             while (false);
            var tmp_2 = tmp$ret$0;
            this.this1__1.unlock_ulcrcl_k$(this.owner0__1);
            var composedTargetState = tmp_2;
            if (!equals(this.$targetState_1, composedTargetState)) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = doOneFrame(this.this$0__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

          case 2:
            this.set_state_rjd8d0_k$(3);
            suspendResult = waitForCompositionAfterTargetStateChange(this.this$0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            if (!equals(this.this$0__1.get_currentState_snihnl_k$(), this.$targetState_1)) {
              if (this.this$0__1.get_fraction_bvkonf_k$() < 1.0) {
                var runningAnimation = this.this$0__1.currentAnimation_1;
                var tmp0_safe_receiver = this.$animationSpec_1;
                var newSpec = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.vectorize_pto10n_k$(get_VectorConverter_0(FloatCompanionObject_getInstance()));
                if (runningAnimation == null || !equals(newSpec, runningAnimation.animationSpec_1)) {
                  var oldSpec = runningAnimation == null ? null : runningAnimation.animationSpec_1;
                  var oldVelocity;
                  if (!(oldSpec == null)) {
                    var tmp_3 = runningAnimation.progressNanos_1;
                    var tmp_4 = runningAnimation.start_1;
                    var tmp_5 = Companion_getInstance_10().Target1__1;
                    var tmp2_elvis_lhs = runningAnimation.initialVelocity_1;
                    oldVelocity = oldSpec.getVelocityFromNanos_wafrjo_k$(tmp_3, tmp_4, tmp_5, tmp2_elvis_lhs == null ? Companion_getInstance_10().ZeroVelocity_1 : tmp2_elvis_lhs);
                  } else if (runningAnimation == null || equalsLong(runningAnimation.progressNanos_1, new Long(0, 0))) {
                    oldVelocity = Companion_getInstance_10().ZeroVelocity_1;
                  } else {
                    var oldDurationNanos = runningAnimation.durationNanos_1;
                    var tmp_6;
                    if (equalsLong(oldDurationNanos, new Long(0, -2147483648))) {
                      tmp_6 = this.this$0__1.totalDurationNanos_1;
                    } else {
                      tmp_6 = oldDurationNanos;
                    }
                    var tmp0 = tmp_6;
                    var other = 1000.0 * toNumber(new Long(1000000, 0));
                    var oldDuration = toNumber(tmp0) / other;
                    if (oldDuration <= toNumber(new Long(0, 0))) {
                      oldVelocity = Companion_getInstance_10().ZeroVelocity_1;
                    } else {
                      oldVelocity = new AnimationVector1D(1.0 / oldDuration);
                    }
                  }
                  var newAnimation = runningAnimation == null ? new SeekingAnimationState() : runningAnimation;
                  newAnimation.animationSpec_1 = newSpec;
                  newAnimation.isComplete_1 = false;
                  newAnimation.value_1 = this.this$0__1.get_fraction_bvkonf_k$();
                  newAnimation.start_1.set_ln2e3z_k$(0, this.this$0__1.get_fraction_bvkonf_k$());
                  newAnimation.durationNanos_1 = this.this$0__1.totalDurationNanos_1;
                  newAnimation.progressNanos_1 = new Long(0, 0);
                  newAnimation.initialVelocity_1 = oldVelocity;
                  var tmp_7 = newAnimation;
                  var tmp5_elvis_lhs = newSpec == null ? null : newSpec.getDurationNanos_c9o343_k$(newAnimation.start_1, Companion_getInstance_10().Target1__1, oldVelocity);
                  var tmp_8;
                  if (tmp5_elvis_lhs == null) {
                    var tmp0_0 = this.this$0__1.totalDurationNanos_1;
                    var other_0 = 1.0 - this.this$0__1.get_fraction_bvkonf_k$();
                    tmp_8 = roundToLong(toNumber(tmp0_0) * other_0);
                  } else {
                    tmp_8 = tmp5_elvis_lhs;
                  }
                  tmp_7.animationSpecDuration_1 = tmp_8;
                  this.this$0__1.currentAnimation_1 = newAnimation;
                }
              }
              this.set_state_rjd8d0_k$(5);
              suspendResult = runAnimations(this.this$0__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(7);
              continue $sm;
            }

          case 5:
            this.this$0__1.set_currentState_6uk70u_k$(this.$targetState_1);
            _set_fraction__t78qnf(this.this$0__1, 0.0);
            this.$transition_1.onTransitionEnd_hbma8k_k$();
            this.set_state_rjd8d0_k$(6);
            suspendResult = waitForComposition(this.this$0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 7:
            return Unit_getInstance();
          case 8:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p_0) {
        var e = $p_0;
        if (this.get_exceptionState_wflpxn_k$() === 8) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(SeekableTransitionState$animateTo$slambda$slambda).create_rcuf4x_k$ = function ($this$coroutineScope, completion) {
    var i = new SeekableTransitionState$animateTo$slambda$slambda(this.this$0__1, this.$targetState_1, this.$transition_1, this.$animationSpec_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(SeekableTransitionState$animateTo$slambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function SeekableTransitionState$animateTo$slambda$slambda_0(this$0, $targetState, $transition, $animationSpec, resultContinuation) {
    var i = new SeekableTransitionState$animateTo$slambda$slambda(this$0, $targetState, $transition, $animationSpec, resultContinuation);
    return constructCallableReference(function ($this$coroutineScope, $completion) {
      return i.invoke_d9fzmj_k$($this$coroutineScope, $completion);
    }, 1);
  }
  function _set_transition__nbji02($this, _set____db54di) {
    $this.transition_1 = _set____db54di;
  }
  function _get_transition__89awuu($this) {
    return $this.transition_1;
  }
  function _get_recalculateTotalDurationNanos__56b5s9($this) {
    return $this.recalculateTotalDurationNanos_1;
  }
  function _set_fraction__t78qnf($this, _set____db54di) {
    var tmp0 = $this.fraction$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SeekableTransitionState$_get_fraction_$ref_yo18y6_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('fraction', 1, tmp, tmp_0, SeekableTransitionState$_set_fraction_$ref_ktc2gu_0());
    tmp0.set_floatValue_qaujgq_k$(_set____db54di);
    return Unit_getInstance();
  }
  function _get_mutatorMutex__pkek4u_0($this) {
    return $this.mutatorMutex_1;
  }
  function _set_lastFrameTimeNanos__ig3c90($this, _set____db54di) {
    $this.lastFrameTimeNanos_1 = _set____db54di;
  }
  function _get_lastFrameTimeNanos__in5els($this) {
    return $this.lastFrameTimeNanos_1;
  }
  function _get_initialValueAnimations__wwtj8v($this) {
    return $this.initialValueAnimations_1;
  }
  function _set_currentAnimation__rj44pg($this, _set____db54di) {
    $this.currentAnimation_1 = _set____db54di;
  }
  function _get_currentAnimation__1k04dc($this) {
    return $this.currentAnimation_1;
  }
  function _get_firstFrameLambda__sbmf0n($this) {
    return $this.firstFrameLambda_1;
  }
  function _set_durationScale__j18wrz($this, _set____db54di) {
    $this.durationScale_1 = _set____db54di;
  }
  function _get_durationScale__3the9n($this) {
    return $this.durationScale_1;
  }
  function _get_animateOneFrameLambda__81jhzy($this) {
    return $this.animateOneFrameLambda_1;
  }
  function endAllAnimations($this) {
    var tmp0_safe_receiver = $this.transition_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.clearInitialAnimations_yfnnil_k$();
    }
    $this.initialValueAnimations_1.clear_j9egeb_k$();
    var current = $this.currentAnimation_1;
    if (!(current == null)) {
      $this.currentAnimation_1 = null;
      _set_fraction__t78qnf($this, 1.0);
      seekToFraction($this);
    }
  }
  function runAnimations($this, $completion) {
    var tmp = new $runAnimationsCOROUTINE$($this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function doOneFrame($this, $completion) {
    var tmp = new $doOneFrameCOROUTINE$($this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function animateOneFrame($this, $completion) {
    var tmp = new $animateOneFrameCOROUTINE$($this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function recalculateAnimationValue($this, animation, deltaPlayTimeNanos) {
    var playTimeNanos = add(animation.progressNanos_1, deltaPlayTimeNanos);
    animation.progressNanos_1 = playTimeNanos;
    var durationNanos = animation.animationSpecDuration_1;
    if (compare(playTimeNanos, durationNanos) >= 0) {
      animation.value_1 = 1.0;
    } else {
      var animationSpec = animation.animationSpec_1;
      if (!(animationSpec == null)) {
        var tmp = animation;
        var tmp_0 = animation.start_1;
        var tmp_1 = Companion_getInstance_10().Target1__1;
        var tmp0_elvis_lhs = animation.initialVelocity_1;
        tmp.value_1 = coerceIn(animationSpec.getValueFromNanos_xg3j38_k$(playTimeNanos, tmp_0, tmp_1, tmp0_elvis_lhs == null ? Companion_getInstance_10().ZeroVelocity_1 : tmp0_elvis_lhs).get_jz2icb_k$(0), 0.0, 1.0);
      } else {
        var tmp_2 = animation;
        var tmp0 = animation.start_1.get_jz2icb_k$(0);
        // Inline function 'androidx.compose.animation.core.lerp' call
        var fraction = toNumber(playTimeNanos) / toNumber(durationNanos);
        tmp_2.value_1 = tmp0 * (1 - fraction) + 1.0 * fraction;
      }
    }
  }
  function waitForCompositionAfterTargetStateChange($this, $completion) {
    var tmp = new $waitForCompositionAfterTargetStateChangeCOROUTINE$($this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function waitForComposition($this, $completion) {
    var tmp = new $waitForCompositionCOROUTINE$($this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function moveAnimationToInitialState($this) {
    var tmp0_elvis_lhs = $this.transition_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    var tmp1_elvis_lhs = $this.currentAnimation_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp_1;
      if (compare($this.totalDurationNanos_1, new Long(0, 0)) <= 0 || $this.get_fraction_bvkonf_k$() === 1.0 || equals($this.get_currentState_snihnl_k$(), $this.get_targetState_kri3mx_k$())) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.also' call
        var this_0 = new SeekingAnimationState();
        this_0.value_1 = $this.get_fraction_bvkonf_k$();
        var totalDurationNanos = $this.totalDurationNanos_1;
        this_0.durationNanos_1 = totalDurationNanos;
        var tmp_2 = this_0;
        // Inline function 'kotlin.Long.times' call
        var other = 1.0 - $this.get_fraction_bvkonf_k$();
        var tmp$ret$2 = toNumber(totalDurationNanos) * other;
        tmp_2.animationSpecDuration_1 = roundToLong(tmp$ret$2);
        this_0.start_1.set_ln2e3z_k$(0, $this.get_fraction_bvkonf_k$());
        tmp_1 = this_0;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var animation = tmp_0;
    if (!(animation == null)) {
      animation.durationNanos_1 = $this.totalDurationNanos_1;
      // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
      $this.initialValueAnimations_1.add_utx5q5_k$(animation);
      transition.setInitialAnimations_5bv565_k$(animation);
    }
    $this.currentAnimation_1 = null;
  }
  function seekToFraction($this) {
    var tmp0_elvis_lhs = $this.transition_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    var playTimeNanos = roundToLong($this.get_fraction_bvkonf_k$() * toNumber(transition.get_totalDurationNanos_cuj0z4_k$()));
    transition.seekAnimations_edwrve_k$(playTimeNanos);
  }
  function SeekingAnimationState() {
    this.progressNanos_1 = new Long(0, 0);
    this.animationSpec_1 = null;
    this.isComplete_1 = false;
    this.value_1 = 0.0;
    this.start_1 = new AnimationVector1D(0.0);
    this.initialVelocity_1 = null;
    this.durationNanos_1 = new Long(0, 0);
    this.animationSpecDuration_1 = new Long(0, 0);
  }
  protoOf(SeekingAnimationState).set_progressNanos_5yzx9z_k$ = function (_set____db54di) {
    this.progressNanos_1 = _set____db54di;
  };
  protoOf(SeekingAnimationState).get_progressNanos_bfnnc9_k$ = function () {
    return this.progressNanos_1;
  };
  protoOf(SeekingAnimationState).set_animationSpec_exomeb_k$ = function (_set____db54di) {
    this.animationSpec_1 = _set____db54di;
  };
  protoOf(SeekingAnimationState).get_animationSpec_wdk2t2_k$ = function () {
    return this.animationSpec_1;
  };
  protoOf(SeekingAnimationState).set_isComplete_rklhgr_k$ = function (_set____db54di) {
    this.isComplete_1 = _set____db54di;
  };
  protoOf(SeekingAnimationState).get_isComplete_rto93g_k$ = function () {
    return this.isComplete_1;
  };
  protoOf(SeekingAnimationState).set_value_bgphas_k$ = function (_set____db54di) {
    this.value_1 = _set____db54di;
  };
  protoOf(SeekingAnimationState).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(SeekingAnimationState).set_start_epzbpr_k$ = function (_set____db54di) {
    this.start_1 = _set____db54di;
  };
  protoOf(SeekingAnimationState).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(SeekingAnimationState).set_initialVelocity_qhj9ub_k$ = function (_set____db54di) {
    this.initialVelocity_1 = _set____db54di;
  };
  protoOf(SeekingAnimationState).get_initialVelocity_xnobx4_k$ = function () {
    return this.initialVelocity_1;
  };
  protoOf(SeekingAnimationState).set_durationNanos_pe7f4_k$ = function (_set____db54di) {
    this.durationNanos_1 = _set____db54di;
  };
  protoOf(SeekingAnimationState).get_durationNanos_ub5cy_k$ = function () {
    return this.durationNanos_1;
  };
  protoOf(SeekingAnimationState).set_animationSpecDuration_1x4oa0_k$ = function (_set____db54di) {
    this.animationSpecDuration_1 = _set____db54di;
  };
  protoOf(SeekingAnimationState).get_animationSpecDuration_wef4ru_k$ = function () {
    return this.animationSpecDuration_1;
  };
  protoOf(SeekingAnimationState).toString = function () {
    return 'progress nanos: ' + this.progressNanos_1.toString() + ', animationSpec: ' + toString_0(this.animationSpec_1) + ',' + (' isComplete: ' + this.isComplete_1 + ', value: ' + this.value_1 + ', start: ' + this.start_1.toString() + ',') + (' initialVelocity: ' + toString_0(this.initialVelocity_1) + ', durationNanos: ' + this.durationNanos_1.toString() + ',') + (' animationSpecDuration: ' + this.animationSpecDuration_1.toString());
  };
  function Companion_0() {
    Companion_instance_0 = this;
    this.ZeroVelocity_1 = new AnimationVector1D(0.0);
    this.Target1__1 = new AnimationVector1D(1.0);
  }
  protoOf(Companion_0).get_ZeroVelocity_6sppn2_k$ = function () {
    return this.ZeroVelocity_1;
  };
  protoOf(Companion_0).get_Target1_3csmgn_k$ = function () {
    return this.Target1__1;
  };
  var Companion_instance_0;
  function Companion_getInstance_10() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function SeekableTransitionState$_get_targetState_$ref_y39d4q() {
    return constructCallableReference(function (p0) {
      return p0.get_targetState_kri3mx_k$();
    }, 1, 0, 'androidx.compose.animation.core/SeekableTransitionState.targetState.<get-targetState>|<get-targetState>(){}[0]');
  }
  function SeekableTransitionState$_set_targetState_$ref_qu4hbu() {
    return constructCallableReference(function (p0, p1) {
      p0.set_targetState_ob8bls_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/SeekableTransitionState.targetState.<set-targetState>|<set-targetState>(1:0){}[0]');
  }
  function SeekableTransitionState$_get_targetState_$ref_y39d4q_0() {
    return constructCallableReference(function (p0) {
      return p0.get_targetState_kri3mx_k$();
    }, 1, 0, 'androidx.compose.animation.core/SeekableTransitionState.targetState.<get-targetState>|<get-targetState>(){}[0]');
  }
  function SeekableTransitionState$_set_targetState_$ref_qu4hbu_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_targetState_ob8bls_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/SeekableTransitionState.targetState.<set-targetState>|<set-targetState>(1:0){}[0]');
  }
  function SeekableTransitionState$_get_currentState_$ref_jj5e70() {
    return constructCallableReference(function (p0) {
      return p0.get_currentState_snihnl_k$();
    }, 1, 0, 'androidx.compose.animation.core/SeekableTransitionState.currentState.<get-currentState>|<get-currentState>(){}[0]');
  }
  function SeekableTransitionState$_set_currentState_$ref_9jyuvs() {
    return constructCallableReference(function (p0, p1) {
      p0.set_currentState_6uk70u_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/SeekableTransitionState.currentState.<set-currentState>|<set-currentState>(1:0){}[0]');
  }
  function SeekableTransitionState$_get_currentState_$ref_jj5e70_0() {
    return constructCallableReference(function (p0) {
      return p0.get_currentState_snihnl_k$();
    }, 1, 0, 'androidx.compose.animation.core/SeekableTransitionState.currentState.<get-currentState>|<get-currentState>(){}[0]');
  }
  function SeekableTransitionState$_set_currentState_$ref_9jyuvs_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_currentState_6uk70u_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/SeekableTransitionState.currentState.<set-currentState>|<set-currentState>(1:0){}[0]');
  }
  function SeekableTransitionState$recalculateTotalDurationNanos$lambda(this$0) {
    return function () {
      var tmp = this$0;
      var tmp0_safe_receiver = this$0.transition_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_totalDurationNanos_cuj0z4_k$();
      tmp.totalDurationNanos_1 = tmp1_elvis_lhs == null ? new Long(0, 0) : tmp1_elvis_lhs;
      return Unit_getInstance();
    };
  }
  function SeekableTransitionState$_get_fraction_$ref_yo18y6() {
    return constructCallableReference(function (p0) {
      return p0.get_fraction_bvkonf_k$();
    }, 1, 0, 'androidx.compose.animation.core/SeekableTransitionState.fraction.<get-fraction>|<get-fraction>(){}[0]');
  }
  function SeekableTransitionState$_set_fraction_$ref_ktc2gu() {
    return constructCallableReference(function (p0, p1) {
      _set_fraction__t78qnf(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/SeekableTransitionState.fraction.<set-fraction>|<set-fraction>(kotlin.Float){}[0]');
  }
  function SeekableTransitionState$_get_fraction_$ref_yo18y6_0() {
    return constructCallableReference(function (p0) {
      return p0.get_fraction_bvkonf_k$();
    }, 1, 0, 'androidx.compose.animation.core/SeekableTransitionState.fraction.<get-fraction>|<get-fraction>(){}[0]');
  }
  function SeekableTransitionState$_set_fraction_$ref_ktc2gu_0() {
    return constructCallableReference(function (p0, p1) {
      _set_fraction__t78qnf(p0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/SeekableTransitionState.fraction.<set-fraction>|<set-fraction>(kotlin.Float){}[0]');
  }
  function SeekableTransitionState$firstFrameLambda$lambda(this$0) {
    return function (frameTimeNanos) {
      this$0.lastFrameTimeNanos_1 = frameTimeNanos;
      return Unit_getInstance();
    };
  }
  function SeekableTransitionState$animateOneFrameLambda$lambda(this$0) {
    return function (frameTimeNanos) {
      var delta = subtract(frameTimeNanos, this$0.lastFrameTimeNanos_1);
      this$0.lastFrameTimeNanos_1 = frameTimeNanos;
      // Inline function 'kotlin.Long.div' call
      var other = this$0.durationScale_1;
      var tmp$ret$0 = toNumber(delta) / other;
      var deltaPlayTimeNanos = roundToLong(tmp$ret$0);
      var tmp;
      if (this$0.initialValueAnimations_1.isNotEmpty_cjxbwk_k$()) {
        // Inline function 'androidx.collection.ObjectList.forEach' call
        var this_0 = this$0.initialValueAnimations_1;
        // Inline function 'kotlin.contracts.contract' call
        var content = this_0.get_content_w2728c_k$();
        var inductionVariable = 0;
        var last = this_0.get__size_vbvbdx_k$();
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var animation = content[i];
            recalculateAnimationValue(this$0, animation, deltaPlayTimeNanos);
            animation.isComplete_1 = true;
          }
           while (inductionVariable < last);
        var tmp0_safe_receiver = this$0.transition_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.updateInitialValues_c25wra_k$();
        }
        // Inline function 'androidx.collection.MutableObjectList.removeIf' call
        var this_1 = this$0.initialValueAnimations_1;
        var gap = 0;
        var size = this_1.get__size_vbvbdx_k$();
        var content_0 = this_1.get_content_w2728c_k$();
        // Inline function 'androidx.collection.ObjectList.indices' call
        var progression = until(0, this_1.get__size_vbvbdx_k$());
        var inductionVariable_0 = progression.get_first_irdx8n_k$();
        var last_0 = progression.get_last_wopotb_k$();
        if (inductionVariable_0 <= last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            content_0[i_0 - gap | 0] = content_0[i_0];
            if (content_0[i_0].isComplete_1) {
              gap = gap + 1 | 0;
            }
          }
           while (!(i_0 === last_0));
        fill(content_0, null, size - gap | 0, size);
        this_1.set__size_z45ukh_k$(this_1.get__size_vbvbdx_k$() - gap | 0);
        tmp = Unit_getInstance();
      }
      var currentAnimation = this$0.currentAnimation_1;
      var tmp_0;
      if (!(currentAnimation == null)) {
        currentAnimation.durationNanos_1 = this$0.totalDurationNanos_1;
        recalculateAnimationValue(this$0, currentAnimation, deltaPlayTimeNanos);
        _set_fraction__t78qnf(this$0, currentAnimation.value_1);
        if (currentAnimation.value_1 === 1.0) {
          this$0.currentAnimation_1 = null;
        }
        seekToFraction(this$0);
        tmp_0 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function SeekableTransitionState$snapTo$slambda(this$0, $targetState, $transition, resultContinuation) {
    this.this$0__1 = this$0;
    this.$targetState_1 = $targetState;
    this.$transition_1 = $transition;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$snapTo$slambda).invoke_h7udsx_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SeekableTransitionState$snapTo$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_h7udsx_k$($completion);
  };
  protoOf(SeekableTransitionState$snapTo$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            endAllAnimations(this.this$0__1);
            this.this$0__1.lastFrameTimeNanos_1 = new Long(0, -2147483648);
            _set_fraction__t78qnf(this.this$0__1, 0.0);
            var tmp0_subject = this.$targetState_1;
            var fraction = equals(tmp0_subject, this.this$0__1.get_currentState_snihnl_k$()) ? -4.0 : equals(tmp0_subject, this.this$0__1.get_targetState_kri3mx_k$()) ? -5.0 : -3.0;
            this.$transition_1.updateTarget_9b8tjr_k$(this.$targetState_1);
            this.$transition_1.set_playTimeNanos_8390lf_k$(new Long(0, 0));
            this.this$0__1.set_targetState_ob8bls_k$(this.$targetState_1);
            _set_fraction__t78qnf(this.this$0__1, 0.0);
            this.this$0__1.set_currentState_6uk70u_k$(this.$targetState_1);
            this.$transition_1.resetAnimationFraction_ecgbkk_k$(fraction);
            if (fraction === -3.0) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = waitForCompositionAfterTargetStateChange(this.this$0__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.$transition_1.onTransitionEnd_hbma8k_k$();
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
  protoOf(SeekableTransitionState$snapTo$slambda).create_d196fn_k$ = function (completion) {
    return new SeekableTransitionState$snapTo$slambda(this.this$0__1, this.$targetState_1, this.$transition_1, completion);
  };
  function SeekableTransitionState$snapTo$slambda_0(this$0, $targetState, $transition, resultContinuation) {
    var i = new SeekableTransitionState$snapTo$slambda(this$0, $targetState, $transition, resultContinuation);
    return constructCallableReference(function ($completion) {
      return i.invoke_h7udsx_k$($completion);
    }, 0);
  }
  function SeekableTransitionState$seekTo$slambda($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation) {
    this.$targetState_1 = $targetState;
    this.$oldTargetState_1 = $oldTargetState;
    this.this$0__1 = this$0;
    this.$transition_1 = $transition;
    this.$fraction_1 = $fraction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$seekTo$slambda).invoke_h7udsx_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SeekableTransitionState$seekTo$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_h7udsx_k$($completion);
  };
  protoOf(SeekableTransitionState$seekTo$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = coroutineScope(SeekableTransitionState$seekTo$slambda$slambda_0(this.$targetState_1, this.$oldTargetState_1, this.this$0__1, this.$transition_1, this.$fraction_1, null), this);
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
  protoOf(SeekableTransitionState$seekTo$slambda).create_d196fn_k$ = function (completion) {
    return new SeekableTransitionState$seekTo$slambda(this.$targetState_1, this.$oldTargetState_1, this.this$0__1, this.$transition_1, this.$fraction_1, completion);
  };
  function SeekableTransitionState$seekTo$slambda_0($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation) {
    var i = new SeekableTransitionState$seekTo$slambda($targetState, $oldTargetState, this$0, $transition, $fraction, resultContinuation);
    return constructCallableReference(function ($completion) {
      return i.invoke_h7udsx_k$($completion);
    }, 0);
  }
  function SeekableTransitionState$animateTo$slambda(this$0, $targetState, $transition, $animationSpec, resultContinuation) {
    this.this$0__1 = this$0;
    this.$targetState_1 = $targetState;
    this.$transition_1 = $transition;
    this.$animationSpec_1 = $animationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SeekableTransitionState$animateTo$slambda).invoke_h7udsx_k$ = function ($completion) {
    var tmp = this.create_d196fn_k$($completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SeekableTransitionState$animateTo$slambda).invoke_ib42db_k$ = function ($completion) {
    return this.invoke_h7udsx_k$($completion);
  };
  protoOf(SeekableTransitionState$animateTo$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = coroutineScope(SeekableTransitionState$animateTo$slambda$slambda_0(this.this$0__1, this.$targetState_1, this.$transition_1, this.$animationSpec_1, null), this);
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
  protoOf(SeekableTransitionState$animateTo$slambda).create_d196fn_k$ = function (completion) {
    return new SeekableTransitionState$animateTo$slambda(this.this$0__1, this.$targetState_1, this.$transition_1, this.$animationSpec_1, completion);
  };
  function SeekableTransitionState$animateTo$slambda_0(this$0, $targetState, $transition, $animationSpec, resultContinuation) {
    var i = new SeekableTransitionState$animateTo$slambda(this$0, $targetState, $transition, $animationSpec, resultContinuation);
    return constructCallableReference(function ($completion) {
      return i.invoke_h7udsx_k$($completion);
    }, 0);
  }
  function $runAnimationsCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($runAnimationsCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            if (this._this__u8e3s4__1.initialValueAnimations_1.isEmpty_y1axqb_k$() && this._this__u8e3s4__1.currentAnimation_1 == null) {
              return Unit_getInstance();
            }

            if (get_durationScale(this.get_context_h02k06_k$()) === 0.0) {
              endAllAnimations(this._this__u8e3s4__1);
              this._this__u8e3s4__1.lastFrameTimeNanos_1 = new Long(0, -2147483648);
              return Unit_getInstance();
            }

            if (equalsLong(this._this__u8e3s4__1.lastFrameTimeNanos_1, new Long(0, -2147483648))) {
              this.set_state_rjd8d0_k$(1);
              suspendResult = withFrameNanos(this._this__u8e3s4__1.firstFrameLambda_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            if (!(this._this__u8e3s4__1.initialValueAnimations_1.isNotEmpty_cjxbwk_k$() || !(this._this__u8e3s4__1.currentAnimation_1 == null))) {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(4);
            suspendResult = animateOneFrame(this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 5:
            this._this__u8e3s4__1.lastFrameTimeNanos_1 = new Long(0, -2147483648);
            return Unit_getInstance();
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $doOneFrameCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($doOneFrameCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            if (equalsLong(this._this__u8e3s4__1.lastFrameTimeNanos_1, new Long(0, -2147483648))) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = withFrameNanos(this._this__u8e3s4__1.firstFrameLambda_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(1);
              suspendResult = animateOneFrame(this._this__u8e3s4__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $animateOneFrameCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($animateOneFrameCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            var durationScale = get_durationScale(this.get_context_h02k06_k$());
            if (durationScale <= 0.0) {
              endAllAnimations(this._this__u8e3s4__1);
              this.set_state_rjd8d0_k$(2);
              continue $sm;
            } else {
              this._this__u8e3s4__1.durationScale_1 = durationScale;
              this.set_state_rjd8d0_k$(1);
              suspendResult = withFrameNanos(this._this__u8e3s4__1.animateOneFrameLambda_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.set_state_rjd8d0_k$(2);
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
  function $waitForCompositionAfterTargetStateChangeCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($waitForCompositionAfterTargetStateChangeCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.expectedState0__1 = this._this__u8e3s4__1.get_targetState_kri3mx_k$();
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.compositionContinuationMutex_1.lock$default_5k4zpp_k$(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (equals(this.expectedState0__1, this._this__u8e3s4__1.composedTargetState_1)) {
              this._this__u8e3s4__1.compositionContinuationMutex_1.unlock$default_in3xrb_k$();
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(2);
              var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
              cancellable.initCancellability_shqc60_k$();
              this._this__u8e3s4__1.compositionContinuation_1 = cancellable;
              this._this__u8e3s4__1.compositionContinuationMutex_1.unlock$default_in3xrb_k$();
              suspendResult = returnIfSuspended(cancellable.getResult_fck196_k$(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            var state = suspendResult;
            if (!equals(state, this.expectedState0__1)) {
              this._this__u8e3s4__1.lastFrameTimeNanos_1 = new Long(0, -2147483648);
              throw CancellationException_init_$Create$('snapTo() was canceled because state was changed to ' + (toString_0(state) + ' instead of ' + toString_0(this.expectedState0__1)));
            }

            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $waitForCompositionCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($waitForCompositionCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.expectedState0__1 = this._this__u8e3s4__1.get_targetState_kri3mx_k$();
            this.set_state_rjd8d0_k$(1);
            suspendResult = this._this__u8e3s4__1.compositionContinuationMutex_1.lock$default_5k4zpp_k$(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_rjd8d0_k$(2);
            var cancellable = new CancellableContinuationImpl(intercepted(this), 1);
            cancellable.initCancellability_shqc60_k$();
            this._this__u8e3s4__1.compositionContinuation_1 = cancellable;
            this._this__u8e3s4__1.compositionContinuationMutex_1.unlock$default_in3xrb_k$();
            suspendResult = returnIfSuspended(cancellable.getResult_fck196_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var state = suspendResult;
            if (!equals(state, this.expectedState0__1)) {
              this._this__u8e3s4__1.lastFrameTimeNanos_1 = new Long(0, -2147483648);
              throw CancellationException_init_$Create$('targetState while waiting for composition');
            }

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
  function SeekableTransitionState(initialState) {
    Companion_getInstance_10();
    TransitionState.call(this);
    this.targetState$delegate_1 = mutableStateOf(initialState);
    this.currentState$delegate_1 = mutableStateOf(initialState);
    this.composedTargetState_1 = initialState;
    this.transition_1 = null;
    this.totalDurationNanos_1 = new Long(0, 0);
    var tmp = this;
    tmp.recalculateTotalDurationNanos_1 = SeekableTransitionState$recalculateTotalDurationNanos$lambda(this);
    this.snapshotStateObserver_1 = null;
    this.fraction$delegate_1 = mutableFloatStateOf(0.0);
    this.compositionContinuation_1 = null;
    this.compositionContinuationMutex_1 = Mutex();
    this.mutatorMutex_1 = new MutatorMutex();
    this.lastFrameTimeNanos_1 = new Long(0, -2147483648);
    this.initialValueAnimations_1 = new MutableObjectList();
    this.currentAnimation_1 = null;
    var tmp_0 = this;
    tmp_0.firstFrameLambda_1 = SeekableTransitionState$firstFrameLambda$lambda(this);
    this.durationScale_1 = 0.0;
    var tmp_1 = this;
    tmp_1.animateOneFrameLambda_1 = SeekableTransitionState$animateOneFrameLambda$lambda(this);
  }
  protoOf(SeekableTransitionState).set_targetState_ob8bls_k$ = function (_set____db54di) {
    var tmp0 = this.targetState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SeekableTransitionState$_get_targetState_$ref_y39d4q_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('targetState', 1, tmp, tmp_0, SeekableTransitionState$_set_targetState_$ref_qu4hbu_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SeekableTransitionState).get_targetState_kri3mx_k$ = function () {
    var tmp0 = this.targetState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SeekableTransitionState$_get_targetState_$ref_y39d4q();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('targetState', 1, tmp, tmp_0, SeekableTransitionState$_set_targetState_$ref_qu4hbu());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SeekableTransitionState).set_currentState_6uk70u_k$ = function (_set____db54di) {
    var tmp0 = this.currentState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SeekableTransitionState$_get_currentState_$ref_jj5e70_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('currentState', 1, tmp, tmp_0, SeekableTransitionState$_set_currentState_$ref_9jyuvs_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(SeekableTransitionState).get_currentState_snihnl_k$ = function () {
    var tmp0 = this.currentState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SeekableTransitionState$_get_currentState_$ref_jj5e70();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('currentState', 1, tmp, tmp_0, SeekableTransitionState$_set_currentState_$ref_9jyuvs());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(SeekableTransitionState).set_composedTargetState_poix8u_k$ = function (_set____db54di) {
    this.composedTargetState_1 = _set____db54di;
  };
  protoOf(SeekableTransitionState).get_composedTargetState_dzunz2_k$ = function () {
    return this.composedTargetState_1;
  };
  protoOf(SeekableTransitionState).set_totalDurationNanos_2fvsbh_k$ = function (_set____db54di) {
    this.totalDurationNanos_1 = _set____db54di;
  };
  protoOf(SeekableTransitionState).get_totalDurationNanos_x1evfx_k$ = function () {
    return this.totalDurationNanos_1;
  };
  protoOf(SeekableTransitionState).set_snapshotStateObserver_n7w4nt_k$ = function (value) {
    if (!equals(this.snapshotStateObserver_1, value)) {
      var tmp0_safe_receiver = this.snapshotStateObserver_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.clear_7p1m0x_k$(this);
      }
      var tmp1_safe_receiver = this.snapshotStateObserver_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.stop_pnug4y_k$();
      }
      this.snapshotStateObserver_1 = value;
      if (value == null)
        null;
      else {
        value.start_fyv442_k$();
      }
      this.observeTotalDuration_1qxch5_k$();
    }
  };
  protoOf(SeekableTransitionState).get_snapshotStateObserver_r61qt3_k$ = function () {
    return this.snapshotStateObserver_1;
  };
  protoOf(SeekableTransitionState).get_fraction_bvkonf_k$ = function () {
    var tmp0 = this.fraction$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SeekableTransitionState$_get_fraction_$ref_yo18y6();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('fraction', 1, tmp, tmp_0, SeekableTransitionState$_set_fraction_$ref_ktc2gu());
    return tmp0.get_floatValue_xw60ou_k$();
  };
  protoOf(SeekableTransitionState).set_compositionContinuation_5cuzj2_k$ = function (_set____db54di) {
    this.compositionContinuation_1 = _set____db54di;
  };
  protoOf(SeekableTransitionState).get_compositionContinuation_quwx05_k$ = function () {
    return this.compositionContinuation_1;
  };
  protoOf(SeekableTransitionState).get_compositionContinuationMutex_ap2pc4_k$ = function () {
    return this.compositionContinuationMutex_1;
  };
  protoOf(SeekableTransitionState).snapTo_3gvjhe_k$ = function (targetState, $completion) {
    var tmp0_elvis_lhs = this.transition_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    if (equals(this.get_currentState_snihnl_k$(), targetState) && equals(this.get_targetState_kri3mx_k$(), targetState)) {
      return Unit_getInstance();
    }
    return this.mutatorMutex_1.mutate$default_f05kjn_k$(VOID, SeekableTransitionState$snapTo$slambda_0(this, targetState, transition, null), $completion);
  };
  protoOf(SeekableTransitionState).seekTo_yhdqgu_k$ = function (fraction, targetState, $completion) {
    // Inline function 'androidx.compose.animation.core.requirePrecondition' call
    if (!(0.0 <= fraction ? fraction <= 1.0 : false)) {
      var tmp$ret$1 = 'Expecting fraction between 0 and 1. Got ' + fraction;
      throwIllegalArgumentException(tmp$ret$1);
    }
    var tmp0_elvis_lhs = this.transition_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    var oldTargetState = this.get_targetState_kri3mx_k$();
    return this.mutatorMutex_1.mutate$default_f05kjn_k$(VOID, SeekableTransitionState$seekTo$slambda_0(targetState, oldTargetState, this, transition, fraction, null), $completion);
  };
  protoOf(SeekableTransitionState).seekTo$default_sdpbbk_k$ = function (fraction, targetState, $completion, $super) {
    targetState = targetState === VOID ? this.get_targetState_kri3mx_k$() : targetState;
    return $super === VOID ? this.seekTo_yhdqgu_k$(fraction, targetState, $completion) : $super.seekTo_yhdqgu_k$.call(this, fraction, targetState, $completion);
  };
  protoOf(SeekableTransitionState).animateTo_yy6la9_k$ = function (targetState, animationSpec, $completion) {
    var tmp0_elvis_lhs = this.transition_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    return this.mutatorMutex_1.mutate$default_f05kjn_k$(VOID, SeekableTransitionState$animateTo$slambda_0(this, targetState, transition, animationSpec, null), $completion);
  };
  protoOf(SeekableTransitionState).animateTo$default_ogxp94_k$ = function (targetState, animationSpec, $completion, $super) {
    targetState = targetState === VOID ? this.get_targetState_kri3mx_k$() : targetState;
    animationSpec = animationSpec === VOID ? null : animationSpec;
    return $super === VOID ? this.animateTo_yy6la9_k$(targetState, animationSpec, $completion) : $super.animateTo_yy6la9_k$.call(this, targetState, animationSpec, $completion);
  };
  protoOf(SeekableTransitionState).transitionConfigured_2ailji_k$ = function (transition) {
    // Inline function 'androidx.compose.animation.core.checkPrecondition' call
    if (!(this.transition_1 == null || equals(transition, this.transition_1))) {
      var tmp$ret$1 = 'An instance of SeekableTransitionState has been used in different Transitions. ' + ('Previous instance: ' + toString_0(this.transition_1) + ', new instance: ' + transition.toString());
      throwIllegalStateException(tmp$ret$1);
    }
    this.transition_1 = transition;
  };
  protoOf(SeekableTransitionState).transitionRemoved_oll33s_k$ = function () {
    this.transition_1 = null;
    var tmp0_safe_receiver = this.snapshotStateObserver_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.clear_7p1m0x_k$(this);
    }
  };
  protoOf(SeekableTransitionState).observeTotalDuration_1qxch5_k$ = function () {
    var tmp0_safe_receiver = this.snapshotStateObserver_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.observeReads_r9h55h_k$(this, get_SeekableTransitionStateTotalDurationChanged(), this.recalculateTotalDurationNanos_1);
    }
  };
  protoOf(SeekableTransitionState).onTotalDurationChanged_golqns_k$ = function () {
    var previousTotalDurationNanos = this.totalDurationNanos_1;
    this.observeTotalDuration_1qxch5_k$();
    if (!equalsLong(previousTotalDurationNanos, this.totalDurationNanos_1)) {
      var animation = this.currentAnimation_1;
      if (!(animation == null)) {
        if (compare(animation.progressNanos_1, this.totalDurationNanos_1) > 0) {
          endAllAnimations(this);
        } else {
          animation.durationNanos_1 = this.totalDurationNanos_1;
          if (animation.animationSpec_1 == null) {
            animation.animationSpecDuration_1 = roundToLong((1.0 - animation.start_1.get_jz2icb_k$(0)) * toNumber(this.totalDurationNanos_1));
          }
        }
      } else if (!equalsLong(this.totalDurationNanos_1, new Long(0, 0))) {
        seekToFraction(this);
      }
    }
  };
  function TransitionState$_get_isRunning_$ref_gi5vj1() {
    return constructCallableReference(function (p0) {
      return p0.get_isRunning_yzngqx_k$();
    }, 1, 0, 'androidx.compose.animation.core/TransitionState.isRunning.<get-isRunning>|<get-isRunning>(){}[0]');
  }
  function TransitionState$_set_isRunning_$ref_1aed0p() {
    return constructCallableReference(function (p0, p1) {
      p0.set_isRunning_o0rkdc_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/TransitionState.isRunning.<set-isRunning>|<set-isRunning>(kotlin.Boolean){}[0]');
  }
  function TransitionState$_get_isRunning_$ref_gi5vj1_0() {
    return constructCallableReference(function (p0) {
      return p0.get_isRunning_yzngqx_k$();
    }, 1, 0, 'androidx.compose.animation.core/TransitionState.isRunning.<get-isRunning>|<get-isRunning>(){}[0]');
  }
  function TransitionState$_set_isRunning_$ref_1aed0p_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_isRunning_o0rkdc_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/TransitionState.isRunning.<set-isRunning>|<set-isRunning>(kotlin.Boolean){}[0]');
  }
  function TransitionState() {
    this.isRunning$delegate_1 = mutableStateOf(false);
  }
  protoOf(TransitionState).set_isRunning_o0rkdc_k$ = function (_set____db54di) {
    var tmp0 = this.isRunning$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TransitionState$_get_isRunning_$ref_gi5vj1_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isRunning', 1, tmp, tmp_0, TransitionState$_set_isRunning_$ref_1aed0p_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(TransitionState).get_isRunning_yzngqx_k$ = function () {
    var tmp0 = this.isRunning$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TransitionState$_get_isRunning_$ref_gi5vj1();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isRunning', 1, tmp, tmp_0, TransitionState$_set_isRunning_$ref_1aed0p());
    return tmp0.get_value_j01efc_k$();
  };
  function MutableTransitionState$_get_currentState_$ref_7vauvk() {
    return constructCallableReference(function (p0) {
      return p0.get_currentState_snihnl_k$();
    }, 1, 0, 'androidx.compose.animation.core/MutableTransitionState.currentState.<get-currentState>|<get-currentState>(){}[0]');
  }
  function MutableTransitionState$_set_currentState_$ref_y2oy0s() {
    return constructCallableReference(function (p0, p1) {
      p0.set_currentState_6uk70u_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/MutableTransitionState.currentState.<set-currentState>|<set-currentState>(1:0){}[0]');
  }
  function MutableTransitionState$_get_currentState_$ref_7vauvk_0() {
    return constructCallableReference(function (p0) {
      return p0.get_currentState_snihnl_k$();
    }, 1, 0, 'androidx.compose.animation.core/MutableTransitionState.currentState.<get-currentState>|<get-currentState>(){}[0]');
  }
  function MutableTransitionState$_set_currentState_$ref_y2oy0s_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_currentState_6uk70u_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/MutableTransitionState.currentState.<set-currentState>|<set-currentState>(1:0){}[0]');
  }
  function MutableTransitionState$_get_targetState_$ref_l85mby() {
    return constructCallableReference(function (p0) {
      return p0.get_targetState_kri3mx_k$();
    }, 1, 0, 'androidx.compose.animation.core/MutableTransitionState.targetState.<get-targetState>|<get-targetState>(){}[0]');
  }
  function MutableTransitionState$_set_targetState_$ref_vbvtui() {
    return constructCallableReference(function (p0, p1) {
      p0.set_targetState_1ag6bn_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/MutableTransitionState.targetState.<set-targetState>|<set-targetState>(1:0){}[0]');
  }
  function MutableTransitionState$_get_targetState_$ref_l85mby_0() {
    return constructCallableReference(function (p0) {
      return p0.get_targetState_kri3mx_k$();
    }, 1, 0, 'androidx.compose.animation.core/MutableTransitionState.targetState.<get-targetState>|<get-targetState>(){}[0]');
  }
  function MutableTransitionState$_set_targetState_$ref_vbvtui_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_targetState_1ag6bn_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/MutableTransitionState.targetState.<set-targetState>|<set-targetState>(1:0){}[0]');
  }
  function MutableTransitionState(initialState) {
    TransitionState.call(this);
    this.currentState$delegate_1 = mutableStateOf(initialState);
    this.targetState$delegate_1 = mutableStateOf(initialState);
  }
  protoOf(MutableTransitionState).set_currentState_6uk70u_k$ = function (_set____db54di) {
    var tmp0 = this.currentState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = MutableTransitionState$_get_currentState_$ref_7vauvk_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('currentState', 1, tmp, tmp_0, MutableTransitionState$_set_currentState_$ref_y2oy0s_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(MutableTransitionState).get_currentState_snihnl_k$ = function () {
    var tmp0 = this.currentState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = MutableTransitionState$_get_currentState_$ref_7vauvk();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('currentState', 1, tmp, tmp_0, MutableTransitionState$_set_currentState_$ref_y2oy0s());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(MutableTransitionState).set_targetState_1ag6bn_k$ = function (_set____db54di) {
    var tmp0 = this.targetState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = MutableTransitionState$_get_targetState_$ref_l85mby_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('targetState', 1, tmp, tmp_0, MutableTransitionState$_set_targetState_$ref_vbvtui_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(MutableTransitionState).set_targetState_ob8bls_k$ = function (_set____db54di) {
    return this.set_targetState_1ag6bn_k$(_set____db54di);
  };
  protoOf(MutableTransitionState).get_targetState_kri3mx_k$ = function () {
    var tmp0 = this.targetState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = MutableTransitionState$_get_targetState_$ref_l85mby();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('targetState', 1, tmp, tmp_0, MutableTransitionState$_set_targetState_$ref_vbvtui());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(MutableTransitionState).get_isIdle_evzi1z_k$ = function () {
    return equals(this.get_currentState_snihnl_k$(), this.get_targetState_kri3mx_k$()) && !this.get_isRunning_yzngqx_k$();
  };
  protoOf(MutableTransitionState).transitionConfigured_2ailji_k$ = function (transition) {
  };
  protoOf(MutableTransitionState).transitionRemoved_oll33s_k$ = function () {
  };
  function DeferredTransitionState$_get_currentState_$ref_6guu1j() {
    return constructCallableReference(function (p0) {
      return p0.get_currentState_snihnl_k$();
    }, 1, 0, 'androidx.compose.animation.core/DeferredTransitionState.currentState.<get-currentState>|<get-currentState>(){}[0]');
  }
  function DeferredTransitionState$_set_currentState_$ref_zh4yut() {
    return constructCallableReference(function (p0, p1) {
      p0.set_currentState_6uk70u_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/DeferredTransitionState.currentState.<set-currentState>|<set-currentState>(1:0){}[0]');
  }
  function DeferredTransitionState$_get_currentState_$ref_6guu1j_0() {
    return constructCallableReference(function (p0) {
      return p0.get_currentState_snihnl_k$();
    }, 1, 0, 'androidx.compose.animation.core/DeferredTransitionState.currentState.<get-currentState>|<get-currentState>(){}[0]');
  }
  function DeferredTransitionState$_set_currentState_$ref_zh4yut_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_currentState_6uk70u_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/DeferredTransitionState.currentState.<set-currentState>|<set-currentState>(1:0){}[0]');
  }
  function DeferredTransitionState$_get_targetState_$ref_6bbk9l() {
    return constructCallableReference(function (p0) {
      return p0.get_targetState_kri3mx_k$();
    }, 1, 0, 'androidx.compose.animation.core/DeferredTransitionState.targetState.<get-targetState>|<get-targetState>(){}[0]');
  }
  function DeferredTransitionState$_set_targetState_$ref_3sen8z() {
    return constructCallableReference(function (p0, p1) {
      p0.set_targetState_ob8bls_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/DeferredTransitionState.targetState.<set-targetState>|<set-targetState>(1:0){}[0]');
  }
  function DeferredTransitionState$_get_targetState_$ref_6bbk9l_0() {
    return constructCallableReference(function (p0) {
      return p0.get_targetState_kri3mx_k$();
    }, 1, 0, 'androidx.compose.animation.core/DeferredTransitionState.targetState.<get-targetState>|<get-targetState>(){}[0]');
  }
  function DeferredTransitionState$_set_targetState_$ref_3sen8z_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_targetState_ob8bls_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/DeferredTransitionState.targetState.<set-targetState>|<set-targetState>(1:0){}[0]');
  }
  function DeferredTransitionState$_get_pendingTargetState_$ref_e63zk8() {
    return constructCallableReference(function (p0) {
      return p0.get_pendingTargetState_ogufoy_k$();
    }, 1, 0, 'androidx.compose.animation.core/DeferredTransitionState.pendingTargetState.<get-pendingTargetState>|<get-pendingTargetState>(){}[0]');
  }
  function DeferredTransitionState$_set_pendingTargetState_$ref_ylwlz8() {
    return constructCallableReference(function (p0, p1) {
      p0.set_pendingTargetState_yi7vg4_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/DeferredTransitionState.pendingTargetState.<set-pendingTargetState>|<set-pendingTargetState>(1:0?){}[0]');
  }
  function DeferredTransitionState$_get_pendingTargetState_$ref_e63zk8_0() {
    return constructCallableReference(function (p0) {
      return p0.get_pendingTargetState_ogufoy_k$();
    }, 1, 0, 'androidx.compose.animation.core/DeferredTransitionState.pendingTargetState.<get-pendingTargetState>|<get-pendingTargetState>(){}[0]');
  }
  function DeferredTransitionState$_set_pendingTargetState_$ref_ylwlz8_0() {
    return constructCallableReference(function (p0, p1) {
      p0.set_pendingTargetState_yi7vg4_k$(p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.animation.core/DeferredTransitionState.pendingTargetState.<set-pendingTargetState>|<set-pendingTargetState>(1:0?){}[0]');
  }
  function DeferredTransitionState(initialState) {
    TransitionState.call(this);
    this.currentState$delegate_1 = mutableStateOf(initialState);
    this.targetState$delegate_1 = mutableStateOf(initialState);
    this.pendingTargetState$delegate_1 = mutableStateOf(null);
  }
  protoOf(DeferredTransitionState).set_currentState_6uk70u_k$ = function (_set____db54di) {
    var tmp0 = this.currentState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = DeferredTransitionState$_get_currentState_$ref_6guu1j_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('currentState', 1, tmp, tmp_0, DeferredTransitionState$_set_currentState_$ref_zh4yut_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(DeferredTransitionState).get_currentState_snihnl_k$ = function () {
    var tmp0 = this.currentState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = DeferredTransitionState$_get_currentState_$ref_6guu1j();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('currentState', 1, tmp, tmp_0, DeferredTransitionState$_set_currentState_$ref_zh4yut());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(DeferredTransitionState).set_targetState_ob8bls_k$ = function (_set____db54di) {
    var tmp0 = this.targetState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = DeferredTransitionState$_get_targetState_$ref_6bbk9l_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('targetState', 1, tmp, tmp_0, DeferredTransitionState$_set_targetState_$ref_3sen8z_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(DeferredTransitionState).get_targetState_kri3mx_k$ = function () {
    var tmp0 = this.targetState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = DeferredTransitionState$_get_targetState_$ref_6bbk9l();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('targetState', 1, tmp, tmp_0, DeferredTransitionState$_set_targetState_$ref_3sen8z());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(DeferredTransitionState).set_pendingTargetState_yi7vg4_k$ = function (_set____db54di) {
    var tmp0 = this.pendingTargetState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = DeferredTransitionState$_get_pendingTargetState_$ref_e63zk8_0();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('pendingTargetState', 1, tmp, tmp_0, DeferredTransitionState$_set_pendingTargetState_$ref_ylwlz8_0());
    tmp0.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  };
  protoOf(DeferredTransitionState).get_pendingTargetState_ogufoy_k$ = function () {
    var tmp0 = this.pendingTargetState$delegate_1;
    var tmp = KMutableProperty1;
    var tmp_0 = DeferredTransitionState$_get_pendingTargetState_$ref_e63zk8();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('pendingTargetState', 1, tmp, tmp_0, DeferredTransitionState$_set_pendingTargetState_$ref_ylwlz8());
    return tmp0.get_value_j01efc_k$();
  };
  protoOf(DeferredTransitionState).defer_ri6em_k$ = function (targetState) {
    if (equals(this.get_targetState_kri3mx_k$(), targetState)) {
      this.set_pendingTargetState_yi7vg4_k$(null);
    } else {
      this.set_pendingTargetState_yi7vg4_k$(targetState);
    }
  };
  protoOf(DeferredTransitionState).animateTo_8pqj4s_k$ = function (targetState) {
    this.set_pendingTargetState_yi7vg4_k$(null);
    this.set_targetState_ob8bls_k$(targetState);
  };
  protoOf(DeferredTransitionState).transitionConfigured_2ailji_k$ = function (transition) {
  };
  protoOf(DeferredTransitionState).transitionRemoved_oll33s_k$ = function () {
  };
  function TransitionInstance_init_$Init$(transitionState, label, $this) {
    label = label === VOID ? null : label;
    TransitionInstance.call($this, transitionState, null, label);
    return $this;
  }
  function TransitionInstance_init_$Create$(transitionState, label) {
    return TransitionInstance_init_$Init$(transitionState, label, objectCreate(protoOf(TransitionInstance)));
  }
  function TransitionInstance_init_$Init$_0(initialState, label, $this) {
    TransitionInstance.call($this, new MutableTransitionState(initialState), null, label);
    return $this;
  }
  function TransitionInstance_init_$Create$_0(initialState, label) {
    return TransitionInstance_init_$Init$_0(initialState, label, objectCreate(protoOf(TransitionInstance)));
  }
  function TransitionInstance_init_$Init$_1(transitionState, label, $this) {
    label = label === VOID ? null : label;
    TransitionInstance.call($this, transitionState instanceof TransitionState ? transitionState : THROW_CCE(), null, label);
    return $this;
  }
  function TransitionInstance_init_$Create$_1(transitionState, label) {
    return TransitionInstance_init_$Init$_1(transitionState, label, objectCreate(protoOf(TransitionInstance)));
  }
  function TransitionInstance(transitionState, parentTransition, label) {
    label = label === VOID ? null : label;
    Transition.call(this, transitionState, parentTransition, label);
  }
  function animateValue(_this__u8e3s4, typeConverter, transitionSpec, label, targetValueByState, $composer, $changed, $default) {
    _init_properties_Transition_kt__s6zoln();
    var transitionSpec_0 = transitionSpec;
    var label_0 = label;
    var $composer_0 = $composer;
    if (!(($default & 2) === 0)) {
      transitionSpec_0 = animateValue$lambda;
    }
    if (!(($default & 4) === 0))
      label_0 = 'ValueAnimation';
    var tmp;
    if (!_this__u8e3s4.get_isSeeking_vjb393_k$()) {
      $composer_0.startReplaceGroup_5hh8aj_k$(1666573488);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4;
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var tmp0 = Companion_getInstance_6();
        var tmp$ret$4;
        $l$block: {
          // Inline function 'androidx.compose.runtime.snapshots.Companion.withoutReadObservation' call
          var previousSnapshot = tmp0.get_currentThreadSnapshot_y07jj6_k$();
          var observer = previousSnapshot == null ? null : previousSnapshot.get_readObserver_t4nv53_k$();
          var newSnapshot = tmp0.makeCurrentNonObservable_yxji5w_k$(previousSnapshot);
          try {
            tmp$ret$4 = _this__u8e3s4.get_currentState_snihnl_k$();
            break $l$block;
          }finally {
            tmp0.restoreNonObservable_baklka_k$(previousSnapshot, newSnapshot, observer);
          }
        }
        var value = tmp$ret$4;
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp1_group = tmp_0;
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp = tmp1_group;
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(1666827533);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp = _this__u8e3s4.get_currentState_snihnl_k$();
    }
    var initialState = tmp;
    var initialValue = targetValueByState(initialState, $composer_0, 112 & $changed >> 9);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_1;
    if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var value_0 = derivedStateOf(animateValue$lambda_0(_this__u8e3s4));
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var targetValue = targetValueByState(tmp_1.get_value_j01efc_k$(), $composer_0, 112 & $changed >> 9);
    var tmp_2 = transitionSpec_0;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_1 = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    var it_1 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_3;
    if (invalid_1 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var value_1 = derivedStateOf(animateValue$lambda_1(_this__u8e3s4));
      $composer_0.updateRememberedValue_l1wh71_k$(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var animationSpec = tmp_2(tmp_3.get_value_j01efc_k$(), $composer_0, 112 & $changed >> 3);
    return createTransitionAnimation(_this__u8e3s4, initialValue, targetValue, animationSpec, typeConverter, label_0, $composer_0, 14 & $changed | 57344 & $changed << 9 | 458752 & $changed << 6);
  }
  function createTransitionAnimation(_this__u8e3s4, initialValue, targetValue, animationSpec, typeConverter, label, $composer, $changed) {
    _init_properties_Transition_kt__s6zoln();
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var tmp0 = Companion_getInstance_6();
      var tmp$ret$4;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.Companion.withoutReadObservation' call
        var previousSnapshot = tmp0.get_currentThreadSnapshot_y07jj6_k$();
        var observer = previousSnapshot == null ? null : previousSnapshot.get_readObserver_t4nv53_k$();
        var newSnapshot = tmp0.makeCurrentNonObservable_yxji5w_k$(previousSnapshot);
        try {
          tmp$ret$4 = new TransitionAnimationState(_this__u8e3s4, initialValue, createZeroVectorFrom(typeConverter, targetValue), typeConverter, label);
          break $l$block;
        }finally {
          tmp0.restoreNonObservable_baklka_k$(previousSnapshot, newSnapshot, observer);
        }
      }
      var value = tmp$ret$4;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var transitionAnimation = tmp;
    UpdateInitialAndTargetValues(_this__u8e3s4, transitionAnimation, initialValue, targetValue, animationSpec, $composer_0, 14 & $changed | (8 & $changed >> 3) << 6 | 896 & $changed << 3 | (8 & $changed >> 3) << 9 | 7168 & $changed << 3 | 57344 & $changed << 3);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!((($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4) | $composer_0.changed_ga7h3f_k$(transitionAnimation));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_0;
    if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var value_0 = createTransitionAnimation$lambda(_this__u8e3s4, transitionAnimation);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_0 = value_0;
    } else {
      tmp_0 = it_0;
    }
    var tmp$ret$6 = tmp_0;
    DisposableEffect_0(transitionAnimation, tmp$ret$6, $composer_0, 0);
    return transitionAnimation;
  }
  function UpdateInitialAndTargetValues(_this__u8e3s4, transitionAnimation, initialValue, targetValue, animationSpec, $composer, $changed) {
    _init_properties_Transition_kt__s6zoln();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(867041821);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(_this__u8e3s4) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(transitionAnimation) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ((($changed & 512) === 0 ? $composer_0.changed_ga7h3f_k$(initialValue) : $composer_0.changedInstance_s1wkiy_k$(initialValue)) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ((($changed & 4096) === 0 ? $composer_0.changed_ga7h3f_k$(targetValue) : $composer_0.changedInstance_s1wkiy_k$(targetValue)) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ((($changed & 32768) === 0 ? $composer_0.changed_ga7h3f_k$(animationSpec) : $composer_0.changedInstance_s1wkiy_k$(animationSpec)) ? 16384 : 8192);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 9363) === 9362), $dirty & 1)) {
      if (_this__u8e3s4.get_isSeeking_vjb393_k$()) {
        transitionAnimation.updateInitialAndTargetValue_6zlop_k$(initialValue, targetValue, animationSpec);
      } else {
        transitionAnimation.updateTargetValue$default_fm8oxe_k$(targetValue, animationSpec);
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(UpdateInitialAndTargetValues$lambda(_this__u8e3s4, transitionAnimation, initialValue, targetValue, animationSpec, $changed));
    }
  }
  function createChildTransition(_this__u8e3s4, label, transformToChildState, $composer, $changed, $default) {
    _init_properties_Transition_kt__s6zoln();
    var label_0 = label;
    var $composer_0 = $composer;
    if (!(($default & 1) === 0))
      label_0 = 'ChildTransition';
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var value = _this__u8e3s4.get_currentState_snihnl_k$();
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var initialParentState = tmp;
    var initialState = transformToChildState(_this__u8e3s4.get_isSeeking_vjb393_k$() ? _this__u8e3s4.get_currentState_snihnl_k$() : initialParentState, $composer_0, 112 & $changed >> 3);
    var targetState = transformToChildState(_this__u8e3s4.get_targetState_kri3mx_k$(), $composer_0, 112 & $changed >> 3);
    var childTransition = createChildTransitionInternal(_this__u8e3s4, initialState, targetState, label_0, $composer_0, 14 & $changed | 7168 & $changed << 6);
    if (!_this__u8e3s4.get_isSeeking_vjb393_k$()) {
      $composer_0.startReplaceGroup_5hh8aj_k$(782386797);
      var tmp0_safe_receiver = _this__u8e3s4.get_pendingTargetState_ogufoy_k$();
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        $composer_0.startReplaceGroup_5hh8aj_k$(782437481);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_0 = null;
      } else {
        $composer_0.startReplaceGroup_5hh8aj_k$(782437482);
        // Inline function 'kotlin.let' call
        var tmp2_group = transformToChildState(tmp0_safe_receiver, $composer_0, 112 & $changed >> 3);
        $composer_0.endReplaceGroup_ek144q_k$();
        tmp_0 = tmp2_group;
      }
      var pendingTargetState = tmp_0;
      childTransition.updatePendingTarget_co8jy3_k$(pendingTargetState);
      $composer_0.endReplaceGroup_ek144q_k$();
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(782538635);
      $composer_0.endReplaceGroup_ek144q_k$();
    }
    return childTransition;
  }
  function createDeferredAnimation(_this__u8e3s4, typeConverter, label, $composer, $changed, $default) {
    _init_properties_Transition_kt__s6zoln();
    var label_0 = label;
    var $composer_0 = $composer;
    if (!(($default & 2) === 0))
      label_0 = 'DeferredAnimation';
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var value = new DeferredAnimation(_this__u8e3s4, typeConverter, label_0);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var lazyAnim = tmp;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!((($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4) | $composer_0.changedInstance_s1wkiy_k$(lazyAnim));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_0;
    if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var value_0 = createDeferredAnimation$lambda(_this__u8e3s4, lazyAnim);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_0 = value_0;
    } else {
      tmp_0 = it_0;
    }
    var tmp$ret$4 = tmp_0;
    DisposableEffect_0(lazyAnim, tmp$ret$4, $composer_0, 0);
    if (_this__u8e3s4.get_isSeeking_vjb393_k$()) {
      lazyAnim.setupSeeking_mq3siu_k$();
    }
    return lazyAnim;
  }
  function rememberTransition(transitionState, label, $composer, $changed, $default) {
    _init_properties_Transition_kt__s6zoln();
    var label_0 = label;
    var $composer_0 = $composer;
    if (!(($default & 2) === 0))
      label_0 = null;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(transitionState) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var tmp0 = Companion_getInstance_6();
      var tmp$ret$4;
      $l$block: {
        // Inline function 'androidx.compose.runtime.snapshots.Companion.withoutReadObservation' call
        var previousSnapshot = tmp0.get_currentThreadSnapshot_y07jj6_k$();
        var observer = previousSnapshot == null ? null : previousSnapshot.get_readObserver_t4nv53_k$();
        var newSnapshot = tmp0.makeCurrentNonObservable_yxji5w_k$(previousSnapshot);
        try {
          var tmp_0;
          if (transitionState instanceof DeferredTransitionState) {
            tmp_0 = new DeferredTransition(transitionState, label_0);
          } else {
            tmp_0 = TransitionInstance_init_$Create$(transitionState, label_0);
          }
          tmp$ret$4 = tmp_0;
          break $l$block;
        }finally {
          tmp0.restoreNonObservable_baklka_k$(previousSnapshot, newSnapshot, observer);
        }
      }
      var value = tmp$ret$4;
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var transition = tmp;
    if (transitionState instanceof SeekableTransitionState) {
      $composer_0.startReplaceGroup_5hh8aj_k$(-1357398105);
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      if (!((1 & 1) === 0)) {
        getContext = rememberTransition$lambda;
      }
      var composer = $composer_1;
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_0 = createCompositionCoroutineScope(getContext(), composer);
        $composer_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var coroutineScope = tmp_1;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = !!($composer_0.changedInstance_s1wkiy_k$(coroutineScope) | (($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(transitionState) || ($changed & 6) === 4));
      // Inline function 'kotlin.let' call
      var it_1 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_2;
      if (invalid_0 || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_1 = rememberTransition$lambda_0(transitionState, coroutineScope);
        $composer_0.updateRememberedValue_l1wh71_k$(value_1);
        tmp_2 = value_1;
      } else {
        tmp_2 = it_1;
      }
      var tmp$ret$11 = tmp_2;
      DisposableEffect_0(coroutineScope, tmp$ret$11, $composer_0, 0);
      var tmp_3 = transitionState.get_currentState_snihnl_k$();
      var tmp_4 = transitionState.get_targetState_kri3mx_k$();
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_1 = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(transitionState) || ($changed & 6) === 4;
      // Inline function 'kotlin.let' call
      var it_2 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_5;
      if (invalid_1 || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        var value_2 = rememberTransition$slambda_0(transitionState, null);
        $composer_0.updateRememberedValue_l1wh71_k$(value_2);
        tmp_5 = value_2;
      } else {
        tmp_5 = it_2;
      }
      var tmp$ret$15 = tmp_5;
      LaunchedEffect_0(tmp_3, tmp_4, tmp$ret$15, $composer_0, 0);
      $composer_0.endReplaceGroup_ek144q_k$();
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(-1356407283);
      transition.animateTo_rxzkdc_k$(transitionState.get_targetState_kri3mx_k$(), $composer_0, 0);
      if (transitionState instanceof DeferredTransitionState) {
        transition.updatePendingTarget_co8jy3_k$(transitionState.get_pendingTargetState_ogufoy_k$());
      }
      $composer_0.endReplaceGroup_ek144q_k$();
    }
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_2 = $composer_0.changed_ga7h3f_k$(transition);
    // Inline function 'kotlin.let' call
    var it_3 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_6;
    if (invalid_2 || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var value_3 = rememberTransition$lambda_1(transition);
      $composer_0.updateRememberedValue_l1wh71_k$(value_3);
      tmp_6 = value_3;
    } else {
      tmp_6 = it_3;
    }
    var tmp$ret$19 = tmp_6;
    DisposableEffect_0(transition, tmp$ret$19, $composer_0, 0);
    return transition;
  }
  function androidx_compose_animation_core_MutableTransitionState$stableprop_getter() {
    return androidx_compose_animation_core_MutableTransitionState$stable;
  }
  function createChildTransitionInternal(_this__u8e3s4, initialState, targetState, childLabel, $composer, $changed) {
    _init_properties_Transition_kt__s6zoln();
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var value = new TransitionInstance(new MutableTransitionState(initialState), _this__u8e3s4, '' + _this__u8e3s4.label_1 + ' > ' + childLabel);
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var transition = tmp;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!((($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(_this__u8e3s4) || ($changed & 6) === 4) | $composer_0.changed_ga7h3f_k$(transition));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.rememberedValue_4dg93v_k$();
    var tmp_0;
    if (invalid_0 || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
      var value_0 = createChildTransitionInternal$lambda(_this__u8e3s4, transition);
      $composer_0.updateRememberedValue_l1wh71_k$(value_0);
      tmp_0 = value_0;
    } else {
      tmp_0 = it_0;
    }
    var tmp$ret$4 = tmp_0;
    DisposableEffect_0(transition, tmp$ret$4, $composer_0, 0);
    if (_this__u8e3s4.get_isSeeking_vjb393_k$()) {
      transition.setPlaytimeAfterInitialAndTargetStateEstablished_5eb7ay_k$(initialState, targetState, _this__u8e3s4.lastSeekedTimeNanos_1);
    } else {
      transition.updateTarget_9b8tjr_k$(targetState);
      transition.set_isSeeking_cprmjv_k$(false);
    }
    return transition;
  }
  function DeferredTransition(transitionState, label) {
    label = label === VOID ? null : label;
    Transition.call(this, transitionState, null, label);
  }
  function SeekableTransitionStateTotalDurationChanged$lambda(it) {
    _init_properties_Transition_kt__s6zoln();
    it.onTotalDurationChanged_golqns_k$();
    return Unit_getInstance();
  }
  function updateTransition$$inlined$cache$1$1($transition) {
    this.$transition_1 = $transition;
  }
  protoOf(updateTransition$$inlined$cache$1$1).dispose_3nnxhr_k$ = function () {
    this.$transition_1.onDisposed_dytz1r_k$();
  };
  function updateTransition$lambda($transition) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new updateTransition$$inlined$cache$1$1($transition);
    };
  }
  function animateFloat$lambda(_this__u8e3s4, $composer, $changed) {
    _init_properties_Transition_kt__s6zoln();
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-985243360);
    var tmp0 = spring();
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  }
  function animateFloat$lambda_0(_this__u8e3s4, $composer, $changed) {
    _init_properties_Transition_kt__s6zoln();
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-2137771706);
    var tmp0 = spring();
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  }
  function animateFloat$lambda_1($this) {
    return function () {
      return $this.get_targetState_kri3mx_k$();
    };
  }
  function animateFloat$lambda_2($this) {
    return function () {
      return $this.get_segment_xwnoei_k$();
    };
  }
  function animateValue$lambda(_this__u8e3s4, $composer, $changed) {
    _init_properties_Transition_kt__s6zoln();
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(-2137771706);
    var tmp0 = spring();
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  }
  function animateValue$lambda_0($this_animateValue) {
    return function () {
      return $this_animateValue.get_targetState_kri3mx_k$();
    };
  }
  function animateValue$lambda_1($this_animateValue) {
    return function () {
      return $this_animateValue.get_segment_xwnoei_k$();
    };
  }
  function createTransitionAnimation$$inlined$cache$1$1($this_createTransitionAnimation, $transitionAnimation) {
    this.$this_createTransitionAnimation_1 = $this_createTransitionAnimation;
    this.$transitionAnimation_1 = $transitionAnimation;
  }
  protoOf(createTransitionAnimation$$inlined$cache$1$1).dispose_3nnxhr_k$ = function () {
    this.$this_createTransitionAnimation_1.removeAnimation_vd2pap_k$(this.$transitionAnimation_1);
  };
  function createTransitionAnimation$lambda($this_createTransitionAnimation, $transitionAnimation) {
    return function ($this$DisposableEffect) {
      $this_createTransitionAnimation.addAnimation_jdgpwc_k$($transitionAnimation);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new createTransitionAnimation$$inlined$cache$1$1($this_createTransitionAnimation, $transitionAnimation);
    };
  }
  function UpdateInitialAndTargetValues$lambda($this_UpdateInitialAndTargetValues, $transitionAnimation, $initialValue, $targetValue, $animationSpec, $$changed) {
    return function ($composer, $force) {
      UpdateInitialAndTargetValues($this_UpdateInitialAndTargetValues, $transitionAnimation, $initialValue, $targetValue, $animationSpec, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function createDeferredAnimation$$inlined$cache$1$1($this_createDeferredAnimation, $lazyAnim) {
    this.$this_createDeferredAnimation_1 = $this_createDeferredAnimation;
    this.$lazyAnim_1 = $lazyAnim;
  }
  protoOf(createDeferredAnimation$$inlined$cache$1$1).dispose_3nnxhr_k$ = function () {
    this.$this_createDeferredAnimation_1.removeAnimation_gmbwco_k$(this.$lazyAnim_1);
  };
  function createDeferredAnimation$lambda($this_createDeferredAnimation, $lazyAnim) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new createDeferredAnimation$$inlined$cache$1$1($this_createDeferredAnimation, $lazyAnim);
    };
  }
  function rememberTransition$lambda() {
    _init_properties_Transition_kt__s6zoln();
    return EmptyCoroutineContext_getInstance();
  }
  function rememberTransition$lambda$lambda$slambda($it, resultContinuation) {
    this.$it_1 = $it;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberTransition$lambda$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(rememberTransition$lambda$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberTransition$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          this.$it_1();
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
  protoOf(rememberTransition$lambda$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new rememberTransition$lambda$lambda$slambda(this.$it_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(rememberTransition$lambda$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function rememberTransition$lambda$lambda$slambda_0($it, resultContinuation) {
    var i = new rememberTransition$lambda$lambda$slambda($it, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    }, 1);
  }
  function rememberTransition$lambda$lambda($thread, $coroutineScope) {
    return function (it) {
      if ($thread === getCurrentThread()) {
        it();
      } else {
        launch($coroutineScope, VOID, VOID, rememberTransition$lambda$lambda$slambda_0(it, null));
      }
      return Unit_getInstance();
    };
  }
  function rememberTransition$$inlined$cache$1$2($transitionState) {
    this.$transitionState_1 = $transitionState;
  }
  protoOf(rememberTransition$$inlined$cache$1$2).dispose_3nnxhr_k$ = function () {
    this.$transitionState_1.set_snapshotStateObserver_n7w4nt_k$(null);
  };
  function rememberTransition$lambda_0($transitionState, $coroutineScope) {
    return function ($this$DisposableEffect) {
      var thread = getCurrentThread();
      var snapshotStateObserver = new SnapshotStateObserver(rememberTransition$lambda$lambda(thread, $coroutineScope));
      $transitionState.set_snapshotStateObserver_n7w4nt_k$(snapshotStateObserver);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new rememberTransition$$inlined$cache$1$2($transitionState);
    };
  }
  function rememberTransition$slambda($transitionState, resultContinuation) {
    this.$transitionState_1 = $transitionState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(rememberTransition$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(rememberTransition$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(rememberTransition$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.$transitionState_1.observeTotalDuration_1qxch5_k$();
            this.this1__1 = this.$transitionState_1.compositionContinuationMutex_1;
            this.owner0__1 = null;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this1__1.lock_ugrcvf_k$(this.owner0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            l$ret$1: do {
              var tmp_0;
              try {
                this.$transitionState_1.composedTargetState_1 = this.$transitionState_1.get_targetState_kri3mx_k$();
                var tmp0_safe_receiver = this.$transitionState_1.compositionContinuation_1;
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  var value = this.$transitionState_1.get_targetState_kri3mx_k$();
                  Companion_getInstance_7();
                  tmp0_safe_receiver.resumeWith_dtxwbr_k$(_Result___init__impl__xyqfz8(value));
                }
                this.$transitionState_1.compositionContinuation_1 = null;
                break l$ret$1;
              } catch ($p) {
                var tmp_1;
                var t = $p;
                this.this1__1.unlock_ulcrcl_k$(this.owner0__1);
                throw t;
              }
            }
             while (false);
            this.this1__1.unlock_ulcrcl_k$(this.owner0__1);
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p_0) {
        var e = $p_0;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(rememberTransition$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new rememberTransition$slambda(this.$transitionState_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(rememberTransition$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function rememberTransition$slambda_0($transitionState, resultContinuation) {
    var i = new rememberTransition$slambda($transitionState, resultContinuation);
    return constructCallableReference(function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    }, 1);
  }
  function rememberTransition$$inlined$cache$3$1($transition) {
    this.$transition_1 = $transition;
  }
  protoOf(rememberTransition$$inlined$cache$3$1).dispose_3nnxhr_k$ = function () {
    this.$transition_1.onDisposed_dytz1r_k$();
  };
  function rememberTransition$lambda_1($transition) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new rememberTransition$$inlined$cache$3$1($transition);
    };
  }
  function createChildTransitionInternal$$inlined$cache$1$1($this_createChildTransitionInternal, $transition) {
    this.$this_createChildTransitionInternal_1 = $this_createChildTransitionInternal;
    this.$transition_1 = $transition;
  }
  protoOf(createChildTransitionInternal$$inlined$cache$1$1).dispose_3nnxhr_k$ = function () {
    this.$this_createChildTransitionInternal_1.removeTransition_442hbh_k$(this.$transition_1);
  };
  function createChildTransitionInternal$lambda($this_createChildTransitionInternal, $transition) {
    return function ($this$DisposableEffect) {
      $this_createChildTransitionInternal.addTransition_dtnpqu_k$($transition);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new createChildTransitionInternal$$inlined$cache$1$1($this_createChildTransitionInternal, $transition);
    };
  }
  var properties_initialized_Transition_kt_wb2qvd;
  function _init_properties_Transition_kt__s6zoln() {
    if (!properties_initialized_Transition_kt_wb2qvd) {
      properties_initialized_Transition_kt_wb2qvd = true;
      SeekableTransitionStateTotalDurationChanged = SeekableTransitionStateTotalDurationChanged$lambda;
      androidx_compose_animation_core_DeferredTransitionState$stable = 0;
      androidx_compose_animation_core_DeferredTransition$stable = 0;
      androidx_compose_animation_core_TransitionState$stable = 0;
      androidx_compose_animation_core_MutableTransitionState$stable = 0;
      androidx_compose_animation_core_SeekableTransitionState_SeekingAnimationState$stable = 8;
      androidx_compose_animation_core_SeekableTransitionState$stable = 8;
      androidx_compose_animation_core_Transition$stable = 0;
      androidx_compose_animation_core_TransitionInstance$stable = 0;
    }
  }
  function get_FloatToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return FloatToVector;
  }
  var FloatToVector;
  function get_IntToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntToVector;
  }
  var IntToVector;
  function get_DpToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpToVector;
  }
  var DpToVector;
  function get_DpOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpOffsetToVector;
  }
  var DpOffsetToVector;
  function get_SizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return SizeToVector;
  }
  var SizeToVector;
  function get_OffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return OffsetToVector;
  }
  var OffsetToVector;
  function get_IntOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntOffsetToVector;
  }
  var IntOffsetToVector;
  function get_IntSizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntSizeToVector;
  }
  var IntSizeToVector;
  function get_RectToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return RectToVector;
  }
  var RectToVector;
  function TwoWayConverter() {
  }
  function get_VectorConverter(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpToVector();
  }
  function get_VectorConverter_0(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_FloatToVector();
  }
  function lerp(start, stop, fraction) {
    _init_properties_VectorConverters_kt__g28mmu();
    return start * (1 - fraction) + stop * fraction;
  }
  function TwoWayConverter_0(convertToVector, convertFromVector) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new TwoWayConverterImpl(convertToVector, convertFromVector);
  }
  function TwoWayConverterImpl(convertToVector, convertFromVector) {
    this.convertToVector_1 = convertToVector;
    this.convertFromVector_1 = convertFromVector;
  }
  protoOf(TwoWayConverterImpl).get_convertToVector_s594l4_k$ = function () {
    return this.convertToVector_1;
  };
  protoOf(TwoWayConverterImpl).get_convertFromVector_kmewon_k$ = function () {
    return this.convertFromVector_1;
  };
  function get_VectorConverter_1(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntToVector();
  }
  function get_VectorConverter_2(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntSizeToVector();
  }
  function get_VectorConverter_3(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntOffsetToVector();
  }
  function get_VectorConverter_4(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_RectToVector();
  }
  function get_VectorConverter_5(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_SizeToVector();
  }
  function get_VectorConverter_6(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_OffsetToVector();
  }
  function get_VectorConverter_7(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpOffsetToVector();
  }
  function FloatToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function FloatToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return it.get_value_j01efc_k$();
  }
  function IntToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function IntToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return numberToInt(it.get_value_j01efc_k$());
  }
  function DpToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(_Dp___get_value__impl__geb1vb(it.value_1));
  }
  function DpToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Dp(_Dp___init__impl__ms3zkb(it.get_value_j01efc_k$()));
  }
  function DpOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Dp___get_value__impl__geb1vb(_DpOffset___get_x__impl__uauqb5(it.packedValue_1)), _Dp___get_value__impl__geb1vb(_DpOffset___get_y__impl__1h898y(it.packedValue_1)));
  }
  function DpOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = it.get_v1_kntnng_k$();
    var tmp0 = _Dp___init__impl__ms3zkb(this_0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_1 = it.get_v2_kntnnf_k$();
    // Inline function 'androidx.compose.ui.unit.DpOffset' call
    var y = _Dp___init__impl__ms3zkb(this_1);
    var tmp0_0 = _Dp___get_value__impl__geb1vb(tmp0);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _Dp___get_value__impl__geb1vb(y);
    var v1 = fromInt(toRawBits_0(tmp0_0));
    var v2 = fromInt(toRawBits_0(val2));
    var tmp$ret$3 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$2 = _DpOffset___init__impl__yq36wy(tmp$ret$3);
    return new DpOffset(tmp$ret$2);
  }
  function SizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    var this_0 = it.packedValue_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    var this_1 = it.packedValue_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$4 = floatFromBits(bits_0);
    return new AnimationVector2D(tmp, tmp$ret$4);
  }
  function SizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    var tmp0 = it.get_v1_kntnng_k$();
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = it.get_v2_kntnnf_k$();
    var v1 = fromInt(toRawBits_0(tmp0));
    var v2 = fromInt(toRawBits_0(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$0 = _Size___init__impl__aywn0g(tmp$ret$1);
    return new Size(tmp$ret$0);
  }
  function OffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_0 = it.packedValue_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_1 = it.packedValue_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(this_1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp$ret$4 = floatFromBits(bits_0);
    return new AnimationVector2D(tmp, tmp$ret$4);
  }
  function OffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    var tmp0 = it.get_v1_kntnng_k$();
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = it.get_v2_kntnnf_k$();
    var v1 = fromInt(toRawBits_0(tmp0));
    var v2 = fromInt(toRawBits_0(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$0 = _Offset___init__impl__c168vi(tmp$ret$1);
    return new Offset(tmp$ret$0);
  }
  function IntOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_IntOffset___get_x__impl__qiqr5o(it.packedValue_1), _IntOffset___get_y__impl__2avpwj(it.packedValue_1));
  }
  function IntOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_0 = it.get_v1_kntnng_k$();
    var tmp;
    if (isNaN_0(this_0)) {
      tmp = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp = roundToInt(this_0);
    }
    var tmp0 = tmp;
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_1 = it.get_v2_kntnnf_k$();
    var tmp_0;
    if (isNaN_0(this_1)) {
      tmp_0 = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp_0 = roundToInt(this_1);
    }
    // Inline function 'androidx.compose.ui.unit.IntOffset' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = tmp_0;
    var tmp$ret$5 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    var tmp$ret$4 = _IntOffset___init__impl__rq8h7b(tmp$ret$5);
    return new IntOffset(tmp$ret$4);
  }
  function IntSizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    var this_0 = it.packedValue_1;
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
    var tmp = convertToInt(shiftRight(value, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    var this_1 = it.packedValue_1;
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
    var tmp$ret$2 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    return new AnimationVector2D(tmp, tmp$ret$2);
  }
  function IntSizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_0 = it.get_v1_kntnng_k$();
    var tmp;
    if (isNaN_0(this_0)) {
      tmp = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp = roundToInt(this_0);
    }
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_1 = tmp;
    var tmp0 = this_1 < 0 ? 0 : this_1;
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_2 = it.get_v2_kntnnf_k$();
    var tmp_0;
    if (isNaN_0(this_2)) {
      tmp_0 = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp_0 = roundToInt(this_2);
    }
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_3 = tmp_0;
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = this_3 < 0 ? 0 : this_3;
    var tmp$ret$7 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    var tmp$ret$6 = _IntSize___init__impl__emcjft(tmp$ret$7);
    return new IntSize(tmp$ret$6);
  }
  function RectToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector4D(it.get_left_woprgw_k$(), it.get_top_18ivbo_k$(), it.get_right_ixz7xv_k$(), it.get_bottom_bj8ras_k$());
  }
  function RectToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Rect(it.get_v1_kntnng_k$(), it.get_v2_kntnnf_k$(), it.get_v3_kntnne_k$(), it.get_v4_kntnnd_k$());
  }
  var properties_initialized_VectorConverters_kt_cg0a6g;
  function _init_properties_VectorConverters_kt__g28mmu() {
    if (!properties_initialized_VectorConverters_kt_cg0a6g) {
      properties_initialized_VectorConverters_kt_cg0a6g = true;
      var tmp = FloatToVector$lambda;
      FloatToVector = TwoWayConverter_0(tmp, FloatToVector$lambda_0);
      var tmp_0 = IntToVector$lambda;
      IntToVector = TwoWayConverter_0(tmp_0, IntToVector$lambda_0);
      var tmp_1 = DpToVector$lambda;
      DpToVector = TwoWayConverter_0(tmp_1, DpToVector$lambda_0);
      var tmp_2 = DpOffsetToVector$lambda;
      DpOffsetToVector = TwoWayConverter_0(tmp_2, DpOffsetToVector$lambda_0);
      var tmp_3 = SizeToVector$lambda;
      SizeToVector = TwoWayConverter_0(tmp_3, SizeToVector$lambda_0);
      var tmp_4 = OffsetToVector$lambda;
      OffsetToVector = TwoWayConverter_0(tmp_4, OffsetToVector$lambda_0);
      var tmp_5 = IntOffsetToVector$lambda;
      IntOffsetToVector = TwoWayConverter_0(tmp_5, IntOffsetToVector$lambda_0);
      var tmp_6 = IntSizeToVector$lambda;
      IntSizeToVector = TwoWayConverter_0(tmp_6, IntSizeToVector$lambda_0);
      var tmp_7 = RectToVector$lambda;
      RectToVector = TwoWayConverter_0(tmp_7, RectToVector$lambda_0);
    }
  }
  function get_EmptyIntArray() {
    _init_properties_VectorizedAnimationSpec_kt__qefgpy();
    return EmptyIntArray;
  }
  var EmptyIntArray;
  function get_EmptyFloatArray() {
    _init_properties_VectorizedAnimationSpec_kt__qefgpy();
    return EmptyFloatArray;
  }
  var EmptyFloatArray;
  function get_EmptyArcSpline() {
    _init_properties_VectorizedAnimationSpec_kt__qefgpy();
    return EmptyArcSpline;
  }
  var EmptyArcSpline;
  var androidx_compose_animation_core_VectorizedKeyframesSpec$stable;
  var androidx_compose_animation_core_VectorizedKeyframeSpecElementInfo$stable;
  var androidx_compose_animation_core_VectorizedSnapSpec$stable;
  var androidx_compose_animation_core_VectorizedInfiniteRepeatableSpec$stable;
  var androidx_compose_animation_core_VectorizedRepeatableSpec$stable;
  var androidx_compose_animation_core_Spring$stable;
  var androidx_compose_animation_core_VectorizedSpringSpec$stable;
  var androidx_compose_animation_core_VectorizedTweenSpec$stable;
  var androidx_compose_animation_core_VectorizedFloatAnimationSpec$stable;
  function VectorizedAnimationSpec() {
  }
  function VectorizedFiniteAnimationSpec() {
  }
  function VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $this) {
    dampingRatio = dampingRatio === VOID ? 1.0 : dampingRatio;
    stiffness = stiffness === VOID ? 1500.0 : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    VectorizedSpringSpec.call($this, dampingRatio, stiffness, createSpringAnimations(visibilityThreshold, dampingRatio, stiffness));
    return $this;
  }
  function VectorizedSpringSpec_init_$Create$(dampingRatio, stiffness, visibilityThreshold) {
    return VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, objectCreate(protoOf(VectorizedSpringSpec)));
  }
  function VectorizedSpringSpec(dampingRatio, stiffness, anims) {
    this.$$delegate_0__1 = new VectorizedFloatAnimationSpec(anims);
    this.dampingRatio_1 = dampingRatio;
    this.stiffness_1 = stiffness;
  }
  protoOf(VectorizedSpringSpec).get_dampingRatio_syjss2_k$ = function () {
    return this.dampingRatio_1;
  };
  protoOf(VectorizedSpringSpec).get_stiffness_dt2sgm_k$ = function () {
    return this.stiffness_1;
  };
  protoOf(VectorizedSpringSpec).get_isInfinite_uffwnt_k$ = function () {
    return this.$$delegate_0__1.get_isInfinite_uffwnt_k$();
  };
  protoOf(VectorizedSpringSpec).getValueFromNanos_xg3j38_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.$$delegate_0__1.getValueFromNanos_xg3j38_k$(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).getVelocityFromNanos_wafrjo_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.$$delegate_0__1.getVelocityFromNanos_wafrjo_k$(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).getDurationNanos_c9o343_k$ = function (initialValue, targetValue, initialVelocity) {
    return this.$$delegate_0__1.getDurationNanos_c9o343_k$(initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).getEndVelocity_j9v6ly_k$ = function (initialValue, targetValue, initialVelocity) {
    return this.$$delegate_0__1.getEndVelocity_j9v6ly_k$(initialValue, targetValue, initialVelocity);
  };
  function _get_anim__d3v13u($this) {
    return $this.anim_1;
  }
  function VectorizedTweenSpec(durationMillis, delayMillis, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.durationMillis_1 = durationMillis;
    this.delayMillis_1 = delayMillis;
    this.easing_1 = easing;
    this.anim_1 = VectorizedFloatAnimationSpec_init_$Create$(new FloatTweenSpec(this.durationMillis_1, this.delayMillis_1, this.easing_1));
  }
  protoOf(VectorizedTweenSpec).get_durationMillis_pqx05f_k$ = function () {
    return this.durationMillis_1;
  };
  protoOf(VectorizedTweenSpec).get_delayMillis_d968n4_k$ = function () {
    return this.delayMillis_1;
  };
  protoOf(VectorizedTweenSpec).get_easing_cqnn04_k$ = function () {
    return this.easing_1;
  };
  protoOf(VectorizedTweenSpec).getValueFromNanos_xg3j38_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.anim_1.getValueFromNanos_xg3j38_k$(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedTweenSpec).getVelocityFromNanos_wafrjo_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.anim_1.getVelocityFromNanos_wafrjo_k$(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  function VectorizedDurationBasedAnimationSpec() {
  }
  function VectorizedSnapSpec(delayMillis) {
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    this.delayMillis_1 = delayMillis;
  }
  protoOf(VectorizedSnapSpec).get_delayMillis_d968n4_k$ = function () {
    return this.delayMillis_1;
  };
  protoOf(VectorizedSnapSpec).getValueFromNanos_xg3j38_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var tmp;
    if (compare(playTimeNanos, multiply(numberToLong(this.delayMillis_1), new Long(1000000, 0))) < 0) {
      tmp = initialValue;
    } else {
      tmp = targetValue;
    }
    return tmp;
  };
  protoOf(VectorizedSnapSpec).getVelocityFromNanos_wafrjo_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return initialVelocity;
  };
  protoOf(VectorizedSnapSpec).get_durationMillis_pqx05f_k$ = function () {
    return 0;
  };
  function Animations() {
  }
  function _get_anims__juyc8h($this) {
    return $this.anims_1;
  }
  function _set_valueVector__dppd9t_0($this, _set____db54di) {
    $this.valueVector_1 = _set____db54di;
  }
  function _get_valueVector__r10idf_0($this) {
    var tmp = $this.valueVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _set_velocityVector__vm30d3_1($this, _set____db54di) {
    $this.velocityVector_1 = _set____db54di;
  }
  function _get_velocityVector__dvxlkl_1($this) {
    var tmp = $this.velocityVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _set_endVelocityVector__h8kq2($this, _set____db54di) {
    $this.endVelocityVector_1 = _set____db54di;
  }
  function _get_endVelocityVector__l8kbka($this) {
    var tmp = $this.endVelocityVector_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('endVelocityVector');
    }
  }
  function VectorizedFloatAnimationSpec_init_$Init$(anim, $this) {
    VectorizedFloatAnimationSpec.call($this, new VectorizedFloatAnimationSpec$1(anim));
    return $this;
  }
  function VectorizedFloatAnimationSpec_init_$Create$(anim) {
    return VectorizedFloatAnimationSpec_init_$Init$(anim, objectCreate(protoOf(VectorizedFloatAnimationSpec)));
  }
  function VectorizedFloatAnimationSpec$1($anim) {
    this.$anim_1 = $anim;
  }
  protoOf(VectorizedFloatAnimationSpec$1).get_c1px32_k$ = function (index) {
    return this.$anim_1;
  };
  function VectorizedFloatAnimationSpec(anims) {
    this.anims_1 = anims;
  }
  protoOf(VectorizedFloatAnimationSpec).getValueFromNanos_xg3j38_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.valueVector_1 == null)) {
      this.valueVector_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf_0(this).get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf_0(this).set_ln2e3z_k$(i, this.anims_1.get_c1px32_k$(i).getValueFromNanos_rdghrw_k$(playTimeNanos, initialValue.get_jz2icb_k$(i), targetValue.get_jz2icb_k$(i), initialVelocity.get_jz2icb_k$(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf_0(this);
  };
  protoOf(VectorizedFloatAnimationSpec).getVelocityFromNanos_wafrjo_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.velocityVector_1 == null)) {
      this.velocityVector_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl_1(this).get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl_1(this).set_ln2e3z_k$(i, this.anims_1.get_c1px32_k$(i).getVelocityFromNanos_d1b1ck_k$(playTimeNanos, initialValue.get_jz2icb_k$(i), targetValue.get_jz2icb_k$(i), initialVelocity.get_jz2icb_k$(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl_1(this);
  };
  protoOf(VectorizedFloatAnimationSpec).getEndVelocity_j9v6ly_k$ = function (initialValue, targetValue, initialVelocity) {
    if (!!(this.endVelocityVector_1 == null)) {
      this.endVelocityVector_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_endVelocityVector__l8kbka(this).get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_endVelocityVector__l8kbka(this).set_ln2e3z_k$(i, this.anims_1.get_c1px32_k$(i).getEndVelocity_jstvkm_k$(initialValue.get_jz2icb_k$(i), targetValue.get_jz2icb_k$(i), initialVelocity.get_jz2icb_k$(i)));
      }
       while (inductionVariable < last);
    return _get_endVelocityVector__l8kbka(this);
  };
  protoOf(VectorizedFloatAnimationSpec).getDurationNanos_c9o343_k$ = function (initialValue, targetValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    var inductionVariable = 0;
    var last = initialValue.get_size_au00c9_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0 = maxDuration;
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = this.anims_1.get_c1px32_k$(i).getDurationNanos_taoclf_k$(initialValue.get_jz2icb_k$(i), targetValue.get_jz2icb_k$(i), initialVelocity.get_jz2icb_k$(i));
        maxDuration = compare(tmp0, b) >= 0 ? tmp0 : b;
      }
       while (inductionVariable < last);
    return maxDuration;
  };
  function createSpringAnimations(visibilityThreshold, dampingRatio, stiffness) {
    _init_properties_VectorizedAnimationSpec_kt__qefgpy();
    if (visibilityThreshold == null && dampingRatio === 1.0 && stiffness === 1500.0) {
      return DefaultSpringAnimations_getInstance();
    }
    var tmp;
    if (!(visibilityThreshold == null)) {
      tmp = new createSpringAnimations$1(visibilityThreshold, dampingRatio, stiffness);
    } else {
      tmp = new createSpringAnimations$2(dampingRatio, stiffness);
    }
    return tmp;
  }
  function _get_anim__d3v13u_0($this) {
    return $this.anim_1;
  }
  function DefaultSpringAnimations() {
    DefaultSpringAnimations_instance = this;
    this.anim_1 = new FloatSpringSpec(1.0, 1500.0);
  }
  protoOf(DefaultSpringAnimations).get_c1px32_k$ = function (index) {
    return this.anim_1;
  };
  var DefaultSpringAnimations_instance;
  function DefaultSpringAnimations_getInstance() {
    if (DefaultSpringAnimations_instance == null)
      new DefaultSpringAnimations();
    return DefaultSpringAnimations_instance;
  }
  function _ArcMode___init__impl__iiwx98(value) {
    return value;
  }
  function _ArcMode___get_value__impl__j60x0o($this) {
    return $this;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.ArcAbove_1 = _ArcMode___init__impl__iiwx98(5);
    this.ArcBelow_1 = _ArcMode___init__impl__iiwx98(4);
    this.ArcLinear_1 = _ArcMode___init__impl__iiwx98(0);
  }
  protoOf(Companion_1).get_ArcAbove_ltcwcl_k$ = function () {
    return this.ArcAbove_1;
  };
  protoOf(Companion_1).get_ArcBelow_sw7yhl_k$ = function () {
    return this.ArcBelow_1;
  };
  protoOf(Companion_1).get_ArcLinear_4dmwqp_k$ = function () {
    return this.ArcLinear_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_11() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ArcMode__toString_impl_wsn638($this) {
    return 'ArcMode(value=' + $this + ')';
  }
  function ArcMode__hashCode_impl_ghaz31($this) {
    return $this;
  }
  function ArcMode__equals_impl_alzc5j($this, other) {
    if (!(other instanceof ArcMode))
      return false;
    if (!($this === other.value_1))
      return false;
    return true;
  }
  function ArcMode(value) {
    Companion_getInstance_11();
    this.value_1 = value;
  }
  protoOf(ArcMode).toString = function () {
    return ArcMode__toString_impl_wsn638(this.value_1);
  };
  protoOf(ArcMode).hashCode = function () {
    return ArcMode__hashCode_impl_ghaz31(this.value_1);
  };
  protoOf(ArcMode).equals = function (other) {
    return ArcMode__equals_impl_alzc5j(this.value_1, other);
  };
  function _get_animation__gfmj03($this) {
    return $this.animation_1;
  }
  function _get_repeatMode__51xaqb($this) {
    return $this.repeatMode_1;
  }
  function VectorizedInfiniteRepeatableSpec_init_$Init$(animation, repeatMode, $this) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    VectorizedInfiniteRepeatableSpec.call($this, animation, repeatMode, _StartOffset___init__impl__615djw_0(0));
    return $this;
  }
  function VectorizedInfiniteRepeatableSpec_init_$Create$(animation, repeatMode) {
    return VectorizedInfiniteRepeatableSpec_init_$Init$(animation, repeatMode, objectCreate(protoOf(VectorizedInfiniteRepeatableSpec)));
  }
  function _get_initialOffsetNanos__jwv1fh($this) {
    return $this.initialOffsetNanos_1;
  }
  function repetitionPlayTimeNanos($this, playTimeNanos) {
    if (compare(add(playTimeNanos, $this.initialOffsetNanos_1), new Long(0, 0)) <= 0) {
      return new Long(0, 0);
    } else {
      var postOffsetPlayTimeNanos = add(playTimeNanos, $this.initialOffsetNanos_1);
      var repeatsCount = divide(postOffsetPlayTimeNanos, $this.durationNanos_1);
      var tmp;
      if ($this.repeatMode_1.equals(RepeatMode_Restart_getInstance())) {
        tmp = true;
      } else {
        // Inline function 'kotlin.Long.rem' call
        var tmp$ret$0 = modulo(repeatsCount, fromInt(2));
        tmp = equalsLong(tmp$ret$0, new Long(0, 0));
      }
      if (tmp) {
        return subtract(postOffsetPlayTimeNanos, multiply(repeatsCount, $this.durationNanos_1));
      } else {
        // Inline function 'kotlin.Long.plus' call
        var tmp$ret$1 = add(repeatsCount, fromInt(1));
        return subtract(multiply(tmp$ret$1, $this.durationNanos_1), postOffsetPlayTimeNanos);
      }
    }
  }
  function repetitionStartVelocity($this, playTimeNanos, start, startVelocity, end) {
    var tmp;
    if (compare(add(playTimeNanos, $this.initialOffsetNanos_1), $this.durationNanos_1) > 0) {
      tmp = $this.animation_1.getVelocityFromNanos_wafrjo_k$(subtract($this.durationNanos_1, $this.initialOffsetNanos_1), start, end, startVelocity);
    } else {
      tmp = startVelocity;
    }
    return tmp;
  }
  function VectorizedInfiniteRepeatableSpec(animation, repeatMode, initialStartOffset) {
    repeatMode = repeatMode === VOID ? RepeatMode_Restart_getInstance() : repeatMode;
    initialStartOffset = initialStartOffset === VOID ? _StartOffset___init__impl__615djw_0(0) : initialStartOffset;
    this.animation_1 = animation;
    this.repeatMode_1 = repeatMode;
    this.durationNanos_1 = multiply(numberToLong(this.animation_1.get_delayMillis_d968n4_k$() + this.animation_1.get_durationMillis_pqx05f_k$() | 0), new Long(1000000, 0));
    this.initialOffsetNanos_1 = multiply(_StartOffset___get_value__impl__8sikig(initialStartOffset), new Long(1000000, 0));
  }
  protoOf(VectorizedInfiniteRepeatableSpec).get_isInfinite_uffwnt_k$ = function () {
    return true;
  };
  protoOf(VectorizedInfiniteRepeatableSpec).get_durationNanos_82ej8f_k$ = function () {
    return this.durationNanos_1;
  };
  protoOf(VectorizedInfiniteRepeatableSpec).getValueFromNanos_xg3j38_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.animation_1.getValueFromNanos_xg3j38_k$(repetitionPlayTimeNanos(this, playTimeNanos), initialValue, targetValue, repetitionStartVelocity(this, playTimeNanos, initialValue, initialVelocity, targetValue));
  };
  protoOf(VectorizedInfiniteRepeatableSpec).getVelocityFromNanos_wafrjo_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.animation_1.getVelocityFromNanos_wafrjo_k$(repetitionPlayTimeNanos(this, playTimeNanos), initialValue, targetValue, repetitionStartVelocity(this, playTimeNanos, initialValue, initialVelocity, targetValue));
  };
  protoOf(VectorizedInfiniteRepeatableSpec).getDurationNanos_c9o343_k$ = function (initialValue, targetValue, initialVelocity) {
    return new Long(-1, 2147483647);
  };
  function _get_timestamps__7fn5de($this) {
    return $this.timestamps_1;
  }
  function _get_keyframes__i12zvw($this) {
    return $this.keyframes_1;
  }
  function _get_defaultEasing__9c32it($this) {
    return $this.defaultEasing_1;
  }
  function _get_initialArcMode__dxv2fa($this) {
    return $this.initialArcMode_1;
  }
  function VectorizedKeyframesSpec_init_$Init$(keyframes, durationMillis, delayMillis, $this) {
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    // Inline function 'kotlin.run' call
    var times = new MutableIntList(keyframes.get_size_woubt6_k$() + 2 | 0);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = keyframes.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var t = element.get_key_18j28a_k$();
      times.add_lnluon_k$(t);
    }
    if (!keyframes.containsKey_aw81wo_k$(0)) {
      times.add_6jazo1_k$(0, 0);
    }
    if (!keyframes.containsKey_aw81wo_k$(durationMillis)) {
      times.add_lnluon_k$(durationMillis);
    }
    times.sort_6ihik2_k$();
    var tmp = times;
    // Inline function 'kotlin.run' call
    var timeToInfoMap = new MutableIntObjectMap();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = keyframes.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
      var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
      // Inline function 'kotlin.collections.component1' call
      var time = element_0.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var valueEasing = element_0.get_value_j01efc_k$();
      timeToInfoMap.set_hupg49_k$(time, new VectorizedKeyframeSpecElementInfo(valueEasing.first, valueEasing.second, Companion_getInstance_11().ArcLinear_1));
    }
    VectorizedKeyframesSpec.call($this, tmp, timeToInfoMap, durationMillis, delayMillis, get_LinearEasing(), Companion_getInstance_11().ArcLinear_1);
    return $this;
  }
  function VectorizedKeyframesSpec_init_$Create$(keyframes, durationMillis, delayMillis) {
    return VectorizedKeyframesSpec_init_$Init$(keyframes, durationMillis, delayMillis, objectCreate(protoOf(VectorizedKeyframesSpec)));
  }
  function _set_modes__hv60ph($this, _set____db54di) {
    $this.modes_1 = _set____db54di;
  }
  function _get_modes__e5yfrz($this) {
    return $this.modes_1;
  }
  function _set_times__l3ccsf($this, _set____db54di) {
    $this.times_1 = _set____db54di;
  }
  function _get_times__axs3p1($this) {
    return $this.times_1;
  }
  function _set_valueVector__dppd9t_1($this, _set____db54di) {
    $this.valueVector_1 = _set____db54di;
  }
  function _get_valueVector__r10idf_1($this) {
    return $this.valueVector_1;
  }
  function _set_velocityVector__vm30d3_2($this, _set____db54di) {
    $this.velocityVector_1 = _set____db54di;
  }
  function _get_velocityVector__dvxlkl_2($this) {
    return $this.velocityVector_1;
  }
  function _set_lastInitialValue__ljswzw($this, _set____db54di) {
    $this.lastInitialValue_1 = _set____db54di;
  }
  function _get_lastInitialValue__7jbc2w($this) {
    return $this.lastInitialValue_1;
  }
  function _set_lastTargetValue__5a9ot7($this, _set____db54di) {
    $this.lastTargetValue_1 = _set____db54di;
  }
  function _get_lastTargetValue__fdzwbr($this) {
    return $this.lastTargetValue_1;
  }
  function _set_posArray__ogcfla($this, _set____db54di) {
    $this.posArray_1 = _set____db54di;
  }
  function _get_posArray__xrvax2($this) {
    return $this.posArray_1;
  }
  function _set_slopeArray__fjfr4n($this, _set____db54di) {
    $this.slopeArray_1 = _set____db54di;
  }
  function _get_slopeArray__uloc9v($this) {
    return $this.slopeArray_1;
  }
  function _set_arcSpline__2kksri($this, _set____db54di) {
    $this.arcSpline_1 = _set____db54di;
  }
  function _get_arcSpline__qq9nn2($this) {
    return $this.arcSpline_1;
  }
  function init($this, initialValue, targetValue, initialVelocity) {
    var requiresArcSpline = {_v: !($this.arcSpline_1 === get_EmptyArcSpline())};
    if ($this.valueVector_1 == null) {
      $this.valueVector_1 = newInstance(initialValue);
      $this.velocityVector_1 = newInstance(initialVelocity);
      var tmp = $this;
      var tmp_0 = 0;
      // Inline function 'androidx.collection.IntList.size' call
      var tmp_1 = $this.timestamps_1.get__size_vbvbdx_k$();
      var tmp_2 = new Float32Array(tmp_1);
      while (tmp_0 < tmp_1) {
        var tmp_3 = tmp_0;
        tmp_2[tmp_3] = $this.timestamps_1.get_c1px32_k$(tmp_3) / toNumber(new Long(1000, 0));
        tmp_0 = tmp_0 + 1 | 0;
      }
      tmp.times_1 = tmp_2;
      var tmp_4 = $this;
      var tmp_5 = 0;
      // Inline function 'androidx.collection.IntList.size' call
      var tmp_6 = $this.timestamps_1.get__size_vbvbdx_k$();
      var tmp_7 = new Int32Array(tmp_6);
      while (tmp_5 < tmp_6) {
        var tmp_8 = tmp_5;
        var tmp0_safe_receiver = $this.keyframes_1.get_c1px32_k$($this.timestamps_1.get_c1px32_k$(tmp_8));
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.arcMode_1;
        var tmp_9;
        var tmp_10 = tmp1_elvis_lhs;
        if ((tmp_10 == null ? null : new ArcMode(tmp_10)) == null) {
          tmp_9 = $this.initialArcMode_1;
        } else {
          tmp_9 = tmp1_elvis_lhs;
        }
        var mode = tmp_9;
        if (!equals(new ArcMode(mode), new ArcMode(Companion_getInstance_11().ArcLinear_1))) {
          requiresArcSpline._v = true;
        }
        tmp_7[tmp_8] = _ArcMode___get_value__impl__j60x0o(mode);
        tmp_5 = tmp_5 + 1 | 0;
      }
      tmp_4.modes_1 = tmp_7;
    }
    if (!requiresArcSpline._v) {
      return Unit_getInstance();
    }
    if ($this.arcSpline_1 === get_EmptyArcSpline() || !equals($this.lastInitialValue_1, initialValue) || !equals($this.lastTargetValue_1, targetValue)) {
      $this.lastInitialValue_1 = initialValue;
      $this.lastTargetValue_1 = targetValue;
      var dimensionCount = (initialValue.get_size_au00c9_k$() % 2 | 0) + initialValue.get_size_au00c9_k$() | 0;
      $this.posArray_1 = new Float32Array(dimensionCount);
      $this.slopeArray_1 = new Float32Array(dimensionCount);
      var tmp_11 = 0;
      // Inline function 'androidx.collection.IntList.size' call
      var tmp_12 = $this.timestamps_1.get__size_vbvbdx_k$();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_13 = Array(tmp_12);
      while (tmp_11 < tmp_12) {
        var tmp_14 = tmp_11;
        var timestamp = $this.timestamps_1.get_c1px32_k$(tmp_14);
        var info = $this.keyframes_1.get_c1px32_k$(timestamp);
        var tmp_15;
        if (timestamp === 0 && info == null) {
          var tmp_16 = 0;
          var tmp_17 = new Float32Array(dimensionCount);
          while (tmp_16 < dimensionCount) {
            var tmp_18 = tmp_16;
            tmp_17[tmp_18] = initialValue.get_jz2icb_k$(tmp_18);
            tmp_16 = tmp_16 + 1 | 0;
          }
          tmp_15 = tmp_17;
        } else if (timestamp === $this.durationMillis_1 && info == null) {
          var tmp_19 = 0;
          var tmp_20 = new Float32Array(dimensionCount);
          while (tmp_19 < dimensionCount) {
            var tmp_21 = tmp_19;
            tmp_20[tmp_21] = targetValue.get_jz2icb_k$(tmp_21);
            tmp_19 = tmp_19 + 1 | 0;
          }
          tmp_15 = tmp_20;
        } else {
          var vectorValue = ensureNotNull(info).vectorValue_1;
          var tmp_22 = 0;
          var tmp_23 = new Float32Array(dimensionCount);
          while (tmp_22 < dimensionCount) {
            var tmp_24 = tmp_22;
            tmp_23[tmp_24] = vectorValue.get_jz2icb_k$(tmp_24);
            tmp_22 = tmp_22 + 1 | 0;
          }
          tmp_15 = tmp_23;
        }
        tmp_13[tmp_14] = tmp_15;
        tmp_11 = tmp_11 + 1 | 0;
      }
      var values = tmp_13;
      $this.arcSpline_1 = new ArcSpline($this.modes_1, $this.times_1, values);
    }
  }
  function getEasedTime($this, timeMillis) {
    var index = findEntryForTimeMillis($this, timeMillis);
    return getEasedTimeFromIndex($this, index, timeMillis, false);
  }
  function getEasedTimeFromIndex($this, index, timeMillis, asFraction) {
    // Inline function 'androidx.collection.IntList.lastIndex' call
    if (index >= ($this.timestamps_1.get__size_vbvbdx_k$() - 1 | 0)) {
      return timeMillis / toNumber(new Long(1000, 0));
    }
    var timeMin = $this.timestamps_1.get_c1px32_k$(index);
    var timeMax = $this.timestamps_1.get_c1px32_k$(index + 1 | 0);
    if (timeMillis === timeMin) {
      return timeMin / toNumber(new Long(1000, 0));
    }
    var timeRange = timeMax - timeMin | 0;
    var tmp0_safe_receiver = $this.keyframes_1.get_c1px32_k$(timeMin);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.easing_1;
    var easing = tmp1_elvis_lhs == null ? $this.defaultEasing_1 : tmp1_elvis_lhs;
    var rawFraction = (timeMillis - timeMin | 0) / timeRange;
    var easedFraction = easing.transform_twmo38_k$(rawFraction);
    if (asFraction) {
      return easedFraction;
    }
    return (timeRange * easedFraction + timeMin) / toNumber(new Long(1000, 0));
  }
  function findEntryForTimeMillis($this, timeMillis) {
    var index = $this.timestamps_1.binarySearch$default_p5am1l_k$(timeMillis);
    return index < -1 ? -(index + 2 | 0) | 0 : index;
  }
  function VectorizedKeyframesSpec(timestamps, keyframes, durationMillis, delayMillis, defaultEasing, initialArcMode) {
    this.timestamps_1 = timestamps;
    this.keyframes_1 = keyframes;
    this.durationMillis_1 = durationMillis;
    this.delayMillis_1 = delayMillis;
    this.defaultEasing_1 = defaultEasing;
    this.initialArcMode_1 = initialArcMode;
    this.modes_1 = get_EmptyIntArray();
    this.times_1 = get_EmptyFloatArray();
    this.valueVector_1 = null;
    this.velocityVector_1 = null;
    this.lastInitialValue_1 = null;
    this.lastTargetValue_1 = null;
    this.posArray_1 = get_EmptyFloatArray();
    this.slopeArray_1 = get_EmptyFloatArray();
    this.arcSpline_1 = get_EmptyArcSpline();
  }
  protoOf(VectorizedKeyframesSpec).get_durationMillis_pqx05f_k$ = function () {
    return this.durationMillis_1;
  };
  protoOf(VectorizedKeyframesSpec).get_delayMillis_d968n4_k$ = function () {
    return this.delayMillis_1;
  };
  protoOf(VectorizedKeyframesSpec).getValueFromNanos_xg3j38_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = divide(playTimeNanos, new Long(1000000, 0));
    var clampedPlayTime = convertToInt(clampPlayTime(this, playTimeMillis));
    var keyframe = this.keyframes_1.get_c1px32_k$(clampedPlayTime);
    if (!(keyframe == null)) {
      return keyframe.vectorValue_1;
    }
    if (clampedPlayTime >= this.durationMillis_1) {
      return targetValue;
    } else if (clampedPlayTime <= 0) {
      return initialValue;
    }
    init(this, initialValue, targetValue, initialVelocity);
    var valueVector = ensureNotNull(this.valueVector_1);
    if (!(this.arcSpline_1 === get_EmptyArcSpline())) {
      var easedTime = getEasedTime(this, clampedPlayTime);
      var posArray = this.posArray_1;
      this.arcSpline_1.getPos_a1xi8i_k$(easedTime, posArray);
      var inductionVariable = 0;
      var last = posArray.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          valueVector.set_ln2e3z_k$(i, posArray[i]);
        }
         while (inductionVariable <= last);
      return valueVector;
    }
    var index = findEntryForTimeMillis(this, clampedPlayTime);
    var easedTime_0 = getEasedTimeFromIndex(this, index, clampedPlayTime, true);
    var timestampStart = this.timestamps_1.get_c1px32_k$(index);
    var startKeyframe = this.keyframes_1.get_c1px32_k$(timestampStart);
    var tmp1_elvis_lhs = startKeyframe == null ? null : startKeyframe.vectorValue_1;
    var startValue = tmp1_elvis_lhs == null ? initialValue : tmp1_elvis_lhs;
    var timestampEnd = this.timestamps_1.get_c1px32_k$(index + 1 | 0);
    var endKeyframe = this.keyframes_1.get_c1px32_k$(timestampEnd);
    var tmp3_elvis_lhs = endKeyframe == null ? null : endKeyframe.vectorValue_1;
    var endValue = tmp3_elvis_lhs == null ? targetValue : tmp3_elvis_lhs;
    var inductionVariable_0 = 0;
    var last_0 = valueVector.get_size_au00c9_k$();
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'androidx.compose.animation.core.lerp' call
        var tmp$ret$0 = startValue.get_jz2icb_k$(i_0) * (1 - easedTime_0) + endValue.get_jz2icb_k$(i_0) * easedTime_0;
        valueVector.set_ln2e3z_k$(i_0, tmp$ret$0);
      }
       while (inductionVariable_0 < last_0);
    return valueVector;
  };
  protoOf(VectorizedKeyframesSpec).getVelocityFromNanos_wafrjo_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = divide(playTimeNanos, new Long(1000000, 0));
    var clampedPlayTime = clampPlayTime(this, playTimeMillis);
    if (compare(clampedPlayTime, new Long(0, 0)) < 0) {
      return initialVelocity;
    }
    init(this, initialValue, targetValue, initialVelocity);
    var velocityVector = ensureNotNull(this.velocityVector_1);
    if (!(this.arcSpline_1 === get_EmptyArcSpline())) {
      var easedTime = getEasedTime(this, convertToInt(clampedPlayTime));
      var slopeArray = this.slopeArray_1;
      this.arcSpline_1.getSlope_uth26d_k$(easedTime, slopeArray);
      var inductionVariable = 0;
      var last = slopeArray.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          velocityVector.set_ln2e3z_k$(i, slopeArray[i]);
        }
         while (inductionVariable <= last);
      return velocityVector;
    }
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$0 = subtract(clampedPlayTime, fromInt(1));
    var startNum = getValueFromMillis(this, tmp$ret$0, initialValue, targetValue, initialVelocity);
    var endNum = getValueFromMillis(this, clampedPlayTime, initialValue, targetValue, initialVelocity);
    var inductionVariable_0 = 0;
    var last_0 = startNum.get_size_au00c9_k$();
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        velocityVector.set_ln2e3z_k$(i_0, (startNum.get_jz2icb_k$(i_0) - endNum.get_jz2icb_k$(i_0)) * 1000.0);
      }
       while (inductionVariable_0 < last_0);
    return velocityVector;
  };
  function VectorizedKeyframeSpecElementInfo(vectorValue, easing, arcMode) {
    this.vectorValue_1 = vectorValue;
    this.easing_1 = easing;
    this.arcMode_1 = arcMode;
  }
  protoOf(VectorizedKeyframeSpecElementInfo).get_vectorValue_ndf4p1_k$ = function () {
    return this.vectorValue_1;
  };
  protoOf(VectorizedKeyframeSpecElementInfo).get_easing_cqnn04_k$ = function () {
    return this.easing_1;
  };
  protoOf(VectorizedKeyframeSpecElementInfo).get_arcMode_skgp7h_k$ = function () {
    return this.arcMode_1;
  };
  protoOf(VectorizedKeyframeSpecElementInfo).component1_7eebsc_k$ = function () {
    return this.vectorValue_1;
  };
  protoOf(VectorizedKeyframeSpecElementInfo).component2_7eebsb_k$ = function () {
    return this.easing_1;
  };
  protoOf(VectorizedKeyframeSpecElementInfo).component3_g1hvp5_k$ = function () {
    return this.arcMode_1;
  };
  protoOf(VectorizedKeyframeSpecElementInfo).copy_mjcnjp_k$ = function (vectorValue, easing, arcMode) {
    return new VectorizedKeyframeSpecElementInfo(vectorValue, easing, arcMode);
  };
  protoOf(VectorizedKeyframeSpecElementInfo).copy$default_dv013i_k$ = function (vectorValue, easing, arcMode, $super) {
    vectorValue = vectorValue === VOID ? this.vectorValue_1 : vectorValue;
    easing = easing === VOID ? this.easing_1 : easing;
    arcMode = arcMode === VOID ? this.arcMode_1 : arcMode;
    return $super === VOID ? this.copy_mjcnjp_k$(vectorValue, easing, arcMode) : $super.copy_mjcnjp_k$.call(this, vectorValue, easing, new ArcMode(arcMode));
  };
  protoOf(VectorizedKeyframeSpecElementInfo).toString = function () {
    return 'VectorizedKeyframeSpecElementInfo(vectorValue=' + toString(this.vectorValue_1) + ', easing=' + toString(this.easing_1) + ', arcMode=' + ArcMode__toString_impl_wsn638(this.arcMode_1) + ')';
  };
  protoOf(VectorizedKeyframeSpecElementInfo).hashCode = function () {
    var result = hashCode(this.vectorValue_1);
    result = imul(result, 31) + hashCode(this.easing_1) | 0;
    result = imul(result, 31) + ArcMode__hashCode_impl_ghaz31(this.arcMode_1) | 0;
    return result;
  };
  protoOf(VectorizedKeyframeSpecElementInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VectorizedKeyframeSpecElementInfo))
      return false;
    if (!equals(this.vectorValue_1, other.vectorValue_1))
      return false;
    if (!equals(this.easing_1, other.easing_1))
      return false;
    if (!equals(new ArcMode(this.arcMode_1), new ArcMode(other.arcMode_1)))
      return false;
    return true;
  };
  function clampPlayTime(_this__u8e3s4, playTime) {
    _init_properties_VectorizedAnimationSpec_kt__qefgpy();
    // Inline function 'kotlin.Long.minus' call
    var other = _this__u8e3s4.get_delayMillis_d968n4_k$();
    var tmp0 = subtract(playTime, fromInt(other));
    var tmp2 = new Long(0, 0);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue = fromInt(_this__u8e3s4.get_durationMillis_pqx05f_k$());
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = compare(tmp0, tmp2) < 0 ? tmp2 : tmp0;
    return compare(this_0, maximumValue) > 0 ? maximumValue : this_0;
  }
  function getValueFromMillis(_this__u8e3s4, playTimeMillis, start, end, startVelocity) {
    _init_properties_VectorizedAnimationSpec_kt__qefgpy();
    return _this__u8e3s4.getValueFromNanos_xg3j38_k$(multiply(playTimeMillis, new Long(1000000, 0)), start, end, startVelocity);
  }
  function _get_anims__juyc8h_0($this) {
    return $this.anims_1;
  }
  function createSpringAnimations$1($visibilityThreshold, $dampingRatio, $stiffness) {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = $visibilityThreshold.get_size_au00c9_k$();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      tmp_2[tmp_3] = new FloatSpringSpec($dampingRatio, $stiffness, $visibilityThreshold.get_jz2icb_k$(tmp_3));
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.anims_1 = tmp_2;
  }
  protoOf(createSpringAnimations$1).get_c1px32_k$ = function (index) {
    return this.anims_1[index];
  };
  function _get_anim__d3v13u_1($this) {
    return $this.anim_1;
  }
  function createSpringAnimations$2($dampingRatio, $stiffness) {
    this.anim_1 = new FloatSpringSpec($dampingRatio, $stiffness);
  }
  protoOf(createSpringAnimations$2).get_c1px32_k$ = function (index) {
    return this.anim_1;
  };
  var properties_initialized_VectorizedAnimationSpec_kt_jkmo58;
  function _init_properties_VectorizedAnimationSpec_kt__qefgpy() {
    if (!properties_initialized_VectorizedAnimationSpec_kt_jkmo58) {
      properties_initialized_VectorizedAnimationSpec_kt_jkmo58 = true;
      EmptyIntArray = new Int32Array(0);
      EmptyFloatArray = new Float32Array(0);
      var tmp = new Int32Array(2);
      var tmp_0 = new Float32Array(2);
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [new Float32Array(2), new Float32Array(2)];
      EmptyArcSpline = new ArcSpline(tmp, tmp_0, tmp$ret$0);
      androidx_compose_animation_core_VectorizedKeyframesSpec$stable = 8;
      androidx_compose_animation_core_VectorizedKeyframeSpecElementInfo$stable = 0;
      androidx_compose_animation_core_VectorizedSnapSpec$stable = 0;
      androidx_compose_animation_core_VectorizedInfiniteRepeatableSpec$stable = 8;
      androidx_compose_animation_core_VectorizedRepeatableSpec$stable = 8;
      androidx_compose_animation_core_Spring$stable = 0;
      androidx_compose_animation_core_VectorizedSpringSpec$stable = 8;
      androidx_compose_animation_core_VectorizedTweenSpec$stable = 8;
      androidx_compose_animation_core_VectorizedFloatAnimationSpec$stable = 8;
    }
  }
  function VectorizedDecayAnimationSpec() {
  }
  var androidx_compose_animation_core_VectorizedMonoSplineKeyframesSpec$stable;
  function _get_timestamps__7fn5de_0($this) {
    return $this.timestamps_1;
  }
  function _get_keyframes__i12zvw_0($this) {
    return $this.keyframes_1;
  }
  function _get_periodicBias__4cra3b_0($this) {
    return $this.periodicBias_1;
  }
  function _set_valueVector__dppd9t_2($this, _set____db54di) {
    $this.valueVector_1 = _set____db54di;
  }
  function _get_valueVector__r10idf_2($this) {
    return $this.valueVector_1;
  }
  function _set_velocityVector__vm30d3_3($this, _set____db54di) {
    $this.velocityVector_1 = _set____db54di;
  }
  function _get_velocityVector__dvxlkl_3($this) {
    return $this.velocityVector_1;
  }
  function _set_times__l3ccsf_0($this, _set____db54di) {
    $this.times_1 = _set____db54di;
  }
  function _get_times__axs3p1_0($this) {
    var tmp = $this.times_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('times');
    }
  }
  function _set_monoSpline__gx5rb1($this, _set____db54di) {
    $this.monoSpline_1 = _set____db54di;
  }
  function _get_monoSpline__vzecg9($this) {
    return $this.monoSpline_1;
  }
  function _set_values__uvbruz($this, _set____db54di) {
    $this.values_1 = _set____db54di;
  }
  function _get_values__tel787_0($this) {
    return $this.values_1;
  }
  function _set_lastInitialValue__ljswzw_0($this, _set____db54di) {
    $this.lastInitialValue_1 = _set____db54di;
  }
  function _get_lastInitialValue__7jbc2w_0($this) {
    return $this.lastInitialValue_1;
  }
  function _set_lastTargetValue__5a9ot7_0($this, _set____db54di) {
    $this.lastTargetValue_1 = _set____db54di;
  }
  function _get_lastTargetValue__fdzwbr_0($this) {
    return $this.lastTargetValue_1;
  }
  function init_0($this, initialValue, targetValue, initialVelocity) {
    if ($this.valueVector_1 == null) {
      $this.valueVector_1 = newInstance(initialValue);
      $this.velocityVector_1 = newInstance(initialVelocity);
      var tmp = $this;
      var tmp_0 = 0;
      // Inline function 'androidx.collection.IntList.size' call
      var tmp_1 = $this.timestamps_1.get__size_vbvbdx_k$();
      var tmp_2 = new Float32Array(tmp_1);
      while (tmp_0 < tmp_1) {
        var tmp_3 = tmp_0;
        tmp_2[tmp_3] = $this.timestamps_1.get_c1px32_k$(tmp_3) / toNumber(new Long(1000, 0));
        tmp_0 = tmp_0 + 1 | 0;
      }
      tmp.times_1 = tmp_2;
    }
    if ($this.monoSpline_1 == null || !equals($this.lastInitialValue_1, initialValue) || !equals($this.lastTargetValue_1, targetValue)) {
      var initialChanged = !equals($this.lastInitialValue_1, initialValue);
      var targetChanged = !equals($this.lastTargetValue_1, targetValue);
      $this.lastInitialValue_1 = initialValue;
      $this.lastTargetValue_1 = targetValue;
      var dimension = initialValue.get_size_au00c9_k$();
      var values = $this.values_1;
      if (values == null) {
        var tmp_4 = 0;
        // Inline function 'androidx.collection.IntList.size' call
        var tmp_5 = $this.timestamps_1.get__size_vbvbdx_k$();
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_6 = Array(tmp_5);
        while (tmp_4 < tmp_5) {
          var tmp_7 = tmp_4;
          var timestamp = $this.timestamps_1.get_c1px32_k$(tmp_7);
          var keyframe = $this.keyframes_1.get_c1px32_k$(timestamp);
          var tmp_8;
          if (timestamp === 0 && keyframe == null) {
            var tmp_9 = 0;
            var tmp_10 = new Float32Array(dimension);
            while (tmp_9 < dimension) {
              var tmp_11 = tmp_9;
              tmp_10[tmp_11] = initialValue.get_jz2icb_k$(tmp_11);
              tmp_9 = tmp_9 + 1 | 0;
            }
            tmp_8 = tmp_10;
          } else if (timestamp === $this.durationMillis_1 && keyframe == null) {
            var tmp_12 = 0;
            var tmp_13 = new Float32Array(dimension);
            while (tmp_12 < dimension) {
              var tmp_14 = tmp_12;
              tmp_13[tmp_14] = targetValue.get_jz2icb_k$(tmp_14);
              tmp_12 = tmp_12 + 1 | 0;
            }
            tmp_8 = tmp_13;
          } else {
            var vectorValue = ensureNotNull(keyframe).first;
            var tmp_15 = 0;
            var tmp_16 = new Float32Array(dimension);
            while (tmp_15 < dimension) {
              var tmp_17 = tmp_15;
              tmp_16[tmp_17] = vectorValue.get_jz2icb_k$(tmp_17);
              tmp_15 = tmp_15 + 1 | 0;
            }
            tmp_8 = tmp_16;
          }
          tmp_6[tmp_7] = tmp_8;
          tmp_4 = tmp_4 + 1 | 0;
        }
        values = tmp_6;
        $this.values_1 = values;
      } else {
        var tmp_18;
        if (initialChanged) {
          // Inline function 'androidx.collection.IntObjectMap.contains' call
          tmp_18 = !$this.keyframes_1.containsKey_qwmoa0_k$(0);
        } else {
          tmp_18 = false;
        }
        if (tmp_18) {
          var index = $this.timestamps_1.binarySearch$default_p5am1l_k$(0);
          var tmp_19 = values;
          var tmp_20 = 0;
          var tmp_21 = new Float32Array(dimension);
          while (tmp_20 < dimension) {
            var tmp_22 = tmp_20;
            tmp_21[tmp_22] = initialValue.get_jz2icb_k$(tmp_22);
            tmp_20 = tmp_20 + 1 | 0;
          }
          tmp_19[index] = tmp_21;
        }
        var tmp_23;
        if (targetChanged) {
          var tmp0 = $this.keyframes_1;
          // Inline function 'androidx.collection.IntObjectMap.contains' call
          var key = $this.durationMillis_1;
          tmp_23 = !tmp0.containsKey_qwmoa0_k$(key);
        } else {
          tmp_23 = false;
        }
        if (tmp_23) {
          var index_0 = $this.timestamps_1.binarySearch$default_p5am1l_k$($this.durationMillis_1);
          var tmp_24 = values;
          var tmp_25 = 0;
          var tmp_26 = new Float32Array(dimension);
          while (tmp_25 < dimension) {
            var tmp_27 = tmp_25;
            tmp_26[tmp_27] = targetValue.get_jz2icb_k$(tmp_27);
            tmp_25 = tmp_25 + 1 | 0;
          }
          tmp_24[index_0] = tmp_26;
        }
      }
      $this.monoSpline_1 = new MonoSpline(_get_times__axs3p1_0($this), values, $this.periodicBias_1);
    }
  }
  function getEasing($this, index) {
    var timestamp = $this.timestamps_1.get_c1px32_k$(index);
    var tmp0_safe_receiver = $this.keyframes_1.get_c1px32_k$(timestamp);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.second;
    return tmp1_elvis_lhs == null ? get_LinearEasing() : tmp1_elvis_lhs;
  }
  function getEasedTimeFromIndex_0($this, index, timeMillis) {
    // Inline function 'androidx.collection.IntList.lastIndex' call
    if (index >= ($this.timestamps_1.get__size_vbvbdx_k$() - 1 | 0)) {
      return timeMillis / toNumber(new Long(1000, 0));
    }
    var timeMin = $this.timestamps_1.get_c1px32_k$(index);
    var timeMax = $this.timestamps_1.get_c1px32_k$(index + 1 | 0);
    if (timeMillis === timeMin) {
      return timeMin / toNumber(new Long(1000, 0));
    }
    var timeRange = timeMax - timeMin | 0;
    var easing = getEasing($this, index);
    var rawFraction = (timeMillis - timeMin | 0) / timeRange;
    var easedFraction = easing.transform_twmo38_k$(rawFraction);
    return (timeRange * easedFraction + timeMin) / toNumber(new Long(1000, 0));
  }
  function findEntryForTimeMillis_0($this, timeMillis) {
    var index = $this.timestamps_1.binarySearch$default_p5am1l_k$(timeMillis);
    return index < -1 ? -(index + 2 | 0) | 0 : index;
  }
  function VectorizedMonoSplineKeyframesSpec(timestamps, keyframes, durationMillis, delayMillis, periodicBias) {
    this.timestamps_1 = timestamps;
    this.keyframes_1 = keyframes;
    this.durationMillis_1 = durationMillis;
    this.delayMillis_1 = delayMillis;
    this.periodicBias_1 = periodicBias;
    this.valueVector_1 = null;
    this.velocityVector_1 = null;
    this.monoSpline_1 = null;
    this.values_1 = null;
    this.lastInitialValue_1 = null;
    this.lastTargetValue_1 = null;
  }
  protoOf(VectorizedMonoSplineKeyframesSpec).get_durationMillis_pqx05f_k$ = function () {
    return this.durationMillis_1;
  };
  protoOf(VectorizedMonoSplineKeyframesSpec).get_delayMillis_d968n4_k$ = function () {
    return this.delayMillis_1;
  };
  protoOf(VectorizedMonoSplineKeyframesSpec).getValueFromNanos_xg3j38_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = divide(playTimeNanos, new Long(1000000, 0));
    var clampedPlayTime = convertToInt(clampPlayTime(this, playTimeMillis));
    var keyframe = this.keyframes_1.get_c1px32_k$(clampedPlayTime);
    if (!(keyframe == null)) {
      return keyframe.first;
    }
    if (clampedPlayTime >= this.durationMillis_1) {
      return targetValue;
    } else if (clampedPlayTime <= 0) {
      return initialValue;
    }
    init_0(this, initialValue, targetValue, initialVelocity);
    var index = findEntryForTimeMillis_0(this, clampedPlayTime);
    var valueVector = ensureNotNull(this.valueVector_1);
    var tmp0_$this = ensureNotNull(this.monoSpline_1);
    var tmp1_time = getEasedTimeFromIndex_0(this, index, clampedPlayTime);
    tmp0_$this.getPos_9xwyd7_k$(tmp1_time, valueVector, index);
    return valueVector;
  };
  protoOf(VectorizedMonoSplineKeyframesSpec).getVelocityFromNanos_wafrjo_k$ = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = divide(playTimeNanos, new Long(1000000, 0));
    var clampedPlayTime = convertToInt(clampPlayTime(this, playTimeMillis));
    init_0(this, initialValue, targetValue, initialVelocity);
    var index = findEntryForTimeMillis_0(this, clampedPlayTime);
    var velocityVector = ensureNotNull(this.velocityVector_1);
    var tmp0_$this = ensureNotNull(this.monoSpline_1);
    var tmp1_time = getEasedTimeFromIndex_0(this, index, clampedPlayTime);
    tmp0_$this.getSlope_mvayk2_k$(tmp1_time, velocityVector, index);
    return velocityVector;
  };
  function get_RectVisibilityThreshold() {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return RectVisibilityThreshold;
  }
  var RectVisibilityThreshold;
  function get_VisibilityThresholdMap() {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return VisibilityThresholdMap;
  }
  var VisibilityThresholdMap;
  function get_VisibilityThreshold(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0.4);
  }
  function get_VisibilityThreshold_0(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits_0(1.0));
    var v2 = fromInt(toRawBits_0(1.0));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$1);
  }
  function get_VisibilityThreshold_1(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits_0(1.0));
    var v2 = fromInt(toRawBits_0(1.0));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$1);
  }
  function get_VisibilityThreshold_2(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return get_RectVisibilityThreshold();
  }
  function get_VisibilityThreshold_3(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return 1;
  }
  function get_VisibilityThreshold_4(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    // Inline function 'androidx.compose.ui.unit.IntOffset' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(1), 32), bitwiseAnd(fromInt(1), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$1);
  }
  function get_VisibilityThreshold_5(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(1), 32), bitwiseAnd(fromInt(1), new Long(-1, 0)));
    return _IntSize___init__impl__emcjft(tmp$ret$1);
  }
  var properties_initialized_VisibilityThresholds_kt_k6rdp8;
  function _init_properties_VisibilityThresholds_kt__rvu6yi() {
    if (!properties_initialized_VisibilityThresholds_kt_k6rdp8) {
      properties_initialized_VisibilityThresholds_kt_k6rdp8 = true;
      RectVisibilityThreshold = new Rect(1.0, 1.0, 1.0, 1.0);
      VisibilityThresholdMap = mapOf([to(get_VectorConverter_1(IntCompanionObject_getInstance()), 1.0), to(get_VectorConverter_2(Companion_getInstance_5()), 1.0), to(get_VectorConverter_3(Companion_getInstance_4()), 1.0), to(get_VectorConverter_0(FloatCompanionObject_getInstance()), 0.01), to(get_VectorConverter_4(Companion_getInstance_3()), 1.0), to(get_VectorConverter_5(Companion_getInstance_1()), 1.0), to(get_VectorConverter_6(Companion_getInstance_2()), 1.0), to(get_VectorConverter(Companion_getInstance()), 0.4), to(get_VectorConverter_7(Companion_getInstance_8()), 0.4)]);
    }
  }
  function binarySearch(_this__u8e3s4, element, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? _this__u8e3s4.length : toIndex;
    rangeCheck(_this__u8e3s4.length, fromIndex, toIndex);
    var low = fromIndex;
    var high = toIndex - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      var cmp = compareTo(midVal, element);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function rangeCheck(size, fromIndex, toIndex) {
    if (fromIndex > toIndex)
      throw IllegalArgumentException_init_$Create$('fromIndex (' + fromIndex + ') is greater than toIndex (' + toIndex + ').');
    else if (fromIndex < 0)
      throw IndexOutOfBoundsException_init_$Create$('fromIndex (' + fromIndex + ') is less than zero.');
    else if (toIndex > size)
      throw IndexOutOfBoundsException_init_$Create$('toIndex (' + toIndex + ') is greater than size (' + size + ').');
  }
  function binarySearch_0(array, position) {
    return binarySearch(array, position);
  }
  var androidx_compose_animation_core_AtomicReference$stable;
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function AtomicReference(value) {
    this.delegate_1 = atomic$ref$1(value);
  }
  protoOf(AtomicReference).get_26vq_k$ = function () {
    return this.delegate_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(AtomicReference).set_inogor_k$ = function (value) {
    this.delegate_1.set_kotlinx$atomicfu$value_508e3y_k$(value);
  };
  protoOf(AtomicReference).getAndSet_6mmyt0_k$ = function (value) {
    return this.delegate_1.atomicfu$getAndSet(value);
  };
  protoOf(AtomicReference).compareAndSet_10iwom_k$ = function (expect, newValue) {
    return this.delegate_1.atomicfu$compareAndSet(expect, newValue);
  };
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
    return '@androidx.compose.animation.core.internal.NoOp(' + ')';
  };
  var androidx_compose_animation_core_internal_PlatformOptimizedCancellationException$stable;
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  function get_thread() {
    return thread;
  }
  var thread;
  function getCurrentThread() {
    return Unit_getInstance();
  }
  //region block: post-declaration
  protoOf(TargetBasedAnimation).isFinishedFromNanos_c31w39_k$ = isFinishedFromNanos;
  protoOf(DecayAnimation).isFinishedFromNanos_c31w39_k$ = isFinishedFromNanos;
  protoOf(StartDelayVectorizedAnimationSpec).getEndVelocity_j9v6ly_k$ = getEndVelocity;
  protoOf(FloatTweenSpec).getEndVelocity_jstvkm_k$ = getEndVelocity_0;
  protoOf(FloatTweenSpec).vectorize_7dxvko_k$ = vectorize;
  protoOf(FloatSpringSpec).vectorize_7dxvko_k$ = vectorize;
  protoOf(SegmentImpl).isTransitioningTo_mjamuk_k$ = isTransitioningTo;
  protoOf(VectorizedTweenSpec).getDurationNanos_c9o343_k$ = getDurationNanos;
  protoOf(VectorizedTweenSpec).get_isInfinite_uffwnt_k$ = get_isInfinite;
  protoOf(VectorizedTweenSpec).getEndVelocity_j9v6ly_k$ = getEndVelocity;
  protoOf(VectorizedSnapSpec).getDurationNanos_c9o343_k$ = getDurationNanos;
  protoOf(VectorizedSnapSpec).get_isInfinite_uffwnt_k$ = get_isInfinite;
  protoOf(VectorizedSnapSpec).getEndVelocity_j9v6ly_k$ = getEndVelocity;
  protoOf(VectorizedFloatAnimationSpec).get_isInfinite_uffwnt_k$ = get_isInfinite;
  protoOf(VectorizedInfiniteRepeatableSpec).getEndVelocity_j9v6ly_k$ = getEndVelocity;
  protoOf(VectorizedKeyframesSpec).getDurationNanos_c9o343_k$ = getDurationNanos;
  protoOf(VectorizedKeyframesSpec).get_isInfinite_uffwnt_k$ = get_isInfinite;
  protoOf(VectorizedKeyframesSpec).getEndVelocity_j9v6ly_k$ = getEndVelocity;
  protoOf(VectorizedMonoSplineKeyframesSpec).getDurationNanos_c9o343_k$ = getDurationNanos;
  protoOf(VectorizedMonoSplineKeyframesSpec).get_isInfinite_uffwnt_k$ = get_isInfinite;
  protoOf(VectorizedMonoSplineKeyframesSpec).getEndVelocity_j9v6ly_k$ = getEndVelocity;
  //endregion
  //region block: init
  androidx_compose_animation_core_TargetBasedAnimation$stable = 8;
  androidx_compose_animation_core_DecayAnimation$stable = 0;
  androidx_compose_animation_core_AnimationConstants$stable = 0;
  androidx_compose_animation_core_TweenSpec$stable = 0;
  androidx_compose_animation_core_SpringSpec$stable = 0;
  androidx_compose_animation_core_ArcAnimationSpec$stable = 0;
  androidx_compose_animation_core_RepeatableSpec$stable = 0;
  androidx_compose_animation_core_InfiniteRepeatableSpec$stable = 8;
  androidx_compose_animation_core_SnapSpec$stable = 0;
  androidx_compose_animation_core_KeyframesSpecBaseConfig$stable = 8;
  androidx_compose_animation_core_KeyframeBaseEntity$stable = 8;
  androidx_compose_animation_core_KeyframesSpec_KeyframesSpecConfig$stable = 8;
  androidx_compose_animation_core_KeyframesSpec_KeyframeEntity$stable = 8;
  androidx_compose_animation_core_KeyframesSpec$stable = 0;
  androidx_compose_animation_core_KeyframesWithSplineSpec_KeyframesWithSplineSpecConfig$stable = 8;
  androidx_compose_animation_core_KeyframesWithSplineSpec$stable = 0;
  androidx_compose_animation_core_AnimationState$stable = 0;
  androidx_compose_animation_core_AnimationScope$stable = 8;
  androidx_compose_animation_core_AnimationVector$stable = 0;
  androidx_compose_animation_core_AnimationVector1D$stable = 8;
  androidx_compose_animation_core_AnimationVector2D$stable = 8;
  androidx_compose_animation_core_AnimationVector3D$stable = 8;
  androidx_compose_animation_core_AnimationVector4D$stable = 8;
  androidx_compose_animation_core_DeferredTargetAnimation$stable = 8;
  androidx_compose_animation_core_FloatSpringSpec$stable = 8;
  androidx_compose_animation_core_FloatTweenSpec$stable = 0;
  androidx_compose_animation_core_FloatExponentialDecaySpec$stable = 0;
  androidx_compose_animation_core_InfiniteTransition$stable = 8;
  androidx_compose_animation_core_MutationInterruptedException$stable = 8;
  androidx_compose_animation_core_MutatorMutex$stable = 0;
  androidx_compose_animation_core_MonoSpline$stable = 8;
  androidx_compose_animation_core_PathEasing$stable = 0;
  androidx_compose_animation_core_SpringSimulation$stable = 8;
  androidx_compose_animation_core_VectorizedMonoSplineKeyframesSpec$stable = 8;
  androidx_compose_animation_core_AtomicReference$stable = 8;
  androidx_compose_animation_core_internal_PlatformOptimizedCancellationException$stable = 8;
  thread = Unit_getInstance();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Animatable_0;
  _.$_$.b = Animatable;
  _.$_$.c = AnimationState_1;
  _.$_$.d = AnimationState_0;
  _.$_$.e = AnimationState;
  _.$_$.f = AnimationVector1D;
  _.$_$.g = AnimationVector2D;
  _.$_$.h = AnimationVector4D;
  _.$_$.i = ArcAnimationSpec;
  _.$_$.j = ArcMode;
  _.$_$.k = CubicBezierEasing;
  _.$_$.l = get_FastOutLinearInEasing;
  _.$_$.m = get_FastOutSlowInEasing;
  _.$_$.n = FiniteAnimationSpec;
  _.$_$.o = FloatDecayAnimationSpec;
  _.$_$.p = get_LinearEasing;
  _.$_$.q = MutableTransitionState;
  _.$_$.r = SnapSpec;
  _.$_$.s = SpringSpec;
  _.$_$.t = TargetBasedAnimation_0;
  _.$_$.u = TweenSpec;
  _.$_$.v = TwoWayConverter_0;
  _.$_$.w = get_VectorConverter_3;
  _.$_$.x = get_VectorConverter;
  _.$_$.y = get_VectorConverter_4;
  _.$_$.z = get_VectorConverter_6;
  _.$_$.a1 = get_VectorConverter_2;
  _.$_$.b1 = get_VectorConverter_0;
  _.$_$.c1 = get_VisibilityThreshold_2;
  _.$_$.d1 = get_VisibilityThreshold_1;
  _.$_$.e1 = get_VisibilityThreshold_4;
  _.$_$.f1 = get_VisibilityThreshold_5;
  _.$_$.g1 = androidx_compose_animation_core_Animatable$stableprop_getter;
  _.$_$.h1 = androidx_compose_animation_core_MutableTransitionState$stableprop_getter;
  _.$_$.i1 = animateDpAsState;
  _.$_$.j1 = animateFloatAsState;
  _.$_$.k1 = animateValueAsState;
  _.$_$.l1 = calculateTargetValue;
  _.$_$.m1 = copy_0;
  _.$_$.n1 = createChildTransitionInternal;
  _.$_$.o1 = createDeferredAnimation;
  _.$_$.p1 = createTransitionAnimation;
  _.$_$.q1 = exponentialDecay;
  _.$_$.r1 = generateDecayAnimationSpec;
  _.$_$.s1 = infiniteRepeatable;
  _.$_$.t1 = rememberTransition;
  _.$_$.u1 = snap;
  _.$_$.v1 = spring;
  _.$_$.w1 = tween;
  _.$_$.x1 = updateTransition;
  _.$_$.y1 = RepeatMode_Restart_getInstance;
  _.$_$.z1 = RepeatMode_Reverse_getInstance;
  _.$_$.a2 = Companion_getInstance_11;
  _.$_$.b2 = animateDecay;
  _.$_$.c2 = animateTo;
  _.$_$.d2 = animate_0;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-animation-animation-core.js.map
