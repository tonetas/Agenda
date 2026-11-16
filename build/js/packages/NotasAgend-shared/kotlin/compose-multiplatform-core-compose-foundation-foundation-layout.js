(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui.js', './androidx-compose-runtime-runtime.js', './androidx-collection-collection.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./androidx-compose-runtime-runtime.js'), require('./androidx-collection-collection.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] = factory(typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['androidx-compose-runtime-runtime'], globalThis['androidx-collection-collection']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_collection_collection) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ih;
  var equals = kotlin_kotlin.$_$.xf;
  var FunctionAdapter = kotlin_kotlin.$_$.gf;
  var isInterface = kotlin_kotlin.$_$.vg;
  var hashCode = kotlin_kotlin.$_$.fg;
  var initMetadataForClass = kotlin_kotlin.$_$.gg;
  var VOID = kotlin_kotlin.$_$.e;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var initMetadataForInterface = kotlin_kotlin.$_$.kg;
  var initMetadataForObject = kotlin_kotlin.$_$.mg;
  var Unit_getInstance = kotlin_kotlin.$_$.n3;
  var LayoutDirection_Rtl_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i4;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h4;
  var Dp__toString_impl_kcddez = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var toString = kotlin_kotlin.$_$.tn;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var getBooleanHashCode = kotlin_kotlin.$_$.ag;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.sc;
  var roundToInt = kotlin_kotlin.$_$.oh;
  var isNaN_0 = kotlin_kotlin.$_$.dn;
  var get_lastIndex = kotlin_kotlin.$_$.sa;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.tc;
  var get_currentCompositeKeyHashCode = kotlin_androidx_compose_runtime_runtime.$_$.a2;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.eb;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.oc;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.f2;
  var Applier = kotlin_androidx_compose_runtime_runtime.$_$.s;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.d3;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.f3;
  var Updater__reconcile_impl_1mfi6g = kotlin_androidx_compose_runtime_runtime.$_$.e3;
  var MutableScatterMap = kotlin_androidx_collection_collection.$_$.r;
  var THROW_CCE = kotlin_kotlin.$_$.hm;
  var Placeable = kotlin_org_jetbrains_compose_ui_ui.$_$.e4;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n2;
  var _Constraints___get_value__impl__3ah2ax = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var Long = kotlin_kotlin.$_$.am;
  var bitwiseAnd = kotlin_kotlin.$_$.me;
  var _Constraints___init__impl__v8ud31 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j4;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var toString_0 = kotlin_kotlin.$_$.lh;
  var minIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.w3;
  var minIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.v3;
  var maxIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.u3;
  var maxIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.t3;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.x3;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.v7;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.f8;
  var fromInt = kotlin_kotlin.$_$.ue;
  var shiftLeft = kotlin_kotlin.$_$.bf;
  var bitwiseOr = kotlin_kotlin.$_$.ne;
  var _IntSize___init__impl__emcjft = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l3;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.t5;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.xa;
  var ParentDataModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.v5;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.c3;
  var Companion_getInstance_3 = kotlin_androidx_compose_runtime_runtime.$_$.i3;
  var SubcomposeLayout = kotlin_org_jetbrains_compose_ui_ui.$_$.g4;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k4;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l2;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g2;
  var Constraints__toString_impl_37yskr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var Constraints__hashCode_impl_ij7484 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var constructCallableReference = kotlin_kotlin.$_$.tf;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.c;
  var ensureNotNull = kotlin_kotlin.$_$.an;
  var coerceAtMost = kotlin_kotlin.$_$.bi;
  var Annotation = kotlin_kotlin.$_$.ml;
  var toPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h;
  var toPx_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i;
  var roundToPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c;
  var roundToPx_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d;
  var toDp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g;
  var toDp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f;
  var toDp_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var toSp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l;
  var toSp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m;
  var toSp_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var toRect = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k;
  var toDpSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var getNumberHashCode = kotlin_kotlin.$_$.cg;
  var Comparator = kotlin_kotlin.$_$.tl;
  var compareTo = kotlin_kotlin.$_$.sf;
  var THROW_IAE = kotlin_kotlin.$_$.im;
  var enumEntries = kotlin_kotlin.$_$.ge;
  var Enum = kotlin_kotlin.$_$.ul;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n4;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j1;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.r5;
  var invalidatePlacement = kotlin_org_jetbrains_compose_ui_ui.$_$.s6;
  var minIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.q5;
  var minIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.p5;
  var maxIntrinsicWidth_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.o5;
  var maxIntrinsicHeight_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.n5;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.hg;
  var offset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var constrainWidth = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i1;
  var constrainHeight = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h1;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var get_FirstBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.i3;
  var androidx_compose_ui_Modifier_Node$stableprop_getter = kotlin_org_jetbrains_compose_ui_ui.$_$.bb;
  var multiply = kotlin_kotlin.$_$.ye;
  var numberToLong = kotlin_kotlin.$_$.af;
  var subtract = kotlin_kotlin.$_$.ef;
  var compare = kotlin_kotlin.$_$.pe;
  var toNumber = kotlin_kotlin.$_$.ff;
  var get_sign = kotlin_kotlin.$_$.rh;
  var add = kotlin_kotlin.$_$.le;
  var convertToInt = kotlin_kotlin.$_$.qe;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n3;
  var shiftRight = kotlin_kotlin.$_$.df;
  var _IntOffset___init__impl__rq8h7b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d3;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p4;
  var getKClassFromExpression = kotlin_kotlin.$_$.pi;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var coerceIn = kotlin_kotlin.$_$.fi;
  var _Constraints___get_hasFixedWidth__impl__4p17wc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j2;
  var _Constraints___get_hasFixedHeight__impl__y56fxx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.n4;
  var charSequenceLength = kotlin_kotlin.$_$.qf;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.q;
  var invalidateMeasurement = kotlin_org_jetbrains_compose_ui_ui.$_$.r6;
  var traverseDescendants = kotlin_org_jetbrains_compose_ui_ui.$_$.b7;
  var TraverseDescendantsAction_SkipSubtreeAndContinueTraversal_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.sb;
  var traverseAncestors = kotlin_org_jetbrains_compose_ui_ui.$_$.a7;
  var TraversableNode = kotlin_org_jetbrains_compose_ui_ui.$_$.g6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g5;
  var get_LocalPlatformWindowInsets = kotlin_org_jetbrains_compose_ui_ui.$_$.p7;
  var get_safeDrawing = kotlin_org_jetbrains_compose_ui_ui.$_$.h8;
  var PlatformWindowInsetsProviderNode = kotlin_org_jetbrains_compose_ui_ui.$_$.a8;
  var observeReads = kotlin_org_jetbrains_compose_ui_ui.$_$.u6;
  var ObserverModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.u5;
  var get_safeGestures = kotlin_org_jetbrains_compose_ui_ui.$_$.i8;
  var get_safeContent = kotlin_org_jetbrains_compose_ui_ui.$_$.g8;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(SpacingAlignmentCalculator, 'SpacingAlignmentCalculator');
  initMetadataForClass(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0, 'sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0', VOID, VOID, [SpacingAlignmentCalculator, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_0, 'sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0', VOID, VOID, [SpacingAlignmentCalculator, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_1, 'sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0', VOID, VOID, [SpacingAlignmentCalculator, FunctionAdapter]);
  function get_spacing() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  initMetadataForInterface(Horizontal, 'Horizontal');
  initMetadataForClass(Arrangement$Absolute$Left$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$Absolute$Center$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$Absolute$Right$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$Absolute$SpaceBetween$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$Absolute$SpaceEvenly$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$Absolute$SpaceAround$1, VOID, VOID, VOID, [Horizontal]);
  function get_spacing_0() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  initMetadataForInterface(Vertical, 'Vertical');
  function get_spacing_1() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  initMetadataForInterface(HorizontalOrVertical, 'HorizontalOrVertical', VOID, VOID, [Horizontal, Vertical]);
  initMetadataForObject(Absolute, 'Absolute');
  initMetadataForClass(SpacedAligned, 'SpacedAligned', VOID, VOID, [HorizontalOrVertical]);
  initMetadataForClass(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_2, 'sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0', VOID, VOID, [SpacingAlignmentCalculator, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_3, 'sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0', VOID, VOID, [SpacingAlignmentCalculator, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_4, 'sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0', VOID, VOID, [SpacingAlignmentCalculator, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_5, 'sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0', VOID, VOID, [SpacingAlignmentCalculator, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_6, 'sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0', VOID, VOID, [SpacingAlignmentCalculator, FunctionAdapter]);
  initMetadataForClass(Arrangement$Start$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$End$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$Top$1, VOID, VOID, VOID, [Vertical]);
  initMetadataForClass(Arrangement$Bottom$1, VOID, VOID, VOID, [Vertical]);
  initMetadataForClass(Arrangement$Center$1, VOID, VOID, VOID, [HorizontalOrVertical]);
  initMetadataForClass(Arrangement$SpaceEvenly$1, VOID, VOID, VOID, [HorizontalOrVertical]);
  initMetadataForClass(Arrangement$SpaceBetween$1, VOID, VOID, VOID, [HorizontalOrVertical]);
  initMetadataForClass(Arrangement$SpaceAround$1, VOID, VOID, VOID, [HorizontalOrVertical]);
  initMetadataForObject(Arrangement, 'Arrangement');
  initMetadataForInterface(BoxScope, 'BoxScope');
  initMetadataForClass(BoxMeasurePolicy, 'BoxMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForObject(BoxScopeInstance, 'BoxScopeInstance', VOID, VOID, [BoxScope]);
  initMetadataForClass(BoxChildDataElement, 'BoxChildDataElement', VOID, ModifierNodeElement);
  initMetadataForClass(BoxChildDataNode, 'BoxChildDataNode', VOID, Node, [ParentDataModifierNode]);
  initMetadataForClass(sam$androidx_compose_ui_layout_MeasurePolicy$0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', VOID, VOID, [MeasurePolicy, FunctionAdapter]);
  initMetadataForInterface(BoxWithConstraintsScope, 'BoxWithConstraintsScope', VOID, VOID, [BoxScope]);
  initMetadataForClass(BoxWithConstraintsScopeImpl, 'BoxWithConstraintsScopeImpl', VOID, VOID, [BoxWithConstraintsScope, BoxScope]);
  function weight$default(_this__u8e3s4, weight, fill, $super) {
    fill = fill === VOID ? true : fill;
    return $super === VOID ? this.weight_9ecvc_k$(_this__u8e3s4, weight, fill) : $super.weight_9ecvc_k$.call(this, _this__u8e3s4, weight, fill);
  }
  initMetadataForInterface(ColumnScope, 'ColumnScope');
  function createConstraints$default(mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing, $super) {
    isPrioritizing = isPrioritizing === VOID ? false : isPrioritizing;
    return $super === VOID ? this.createConstraints_abox2e_k$(mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) : $super.createConstraints_abox2e_k$.call(this, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing).value_1;
  }
  initMetadataForInterface(RowColumnMeasurePolicy, 'RowColumnMeasurePolicy');
  initMetadataForClass(ColumnMeasurePolicy, 'ColumnMeasurePolicy', VOID, VOID, [MeasurePolicy, RowColumnMeasurePolicy]);
  initMetadataForInterface(AlignmentLineProviderBlock, 'AlignmentLineProviderBlock');
  initMetadataForClass(sam$androidx_compose_foundation_layout_AlignmentLineProviderBlock$0, 'sam$androidx_compose_foundation_layout_AlignmentLineProviderBlock$0', VOID, VOID, [AlignmentLineProviderBlock, FunctionAdapter]);
  initMetadataForObject(ColumnScopeInstance, 'ColumnScopeInstance', VOID, VOID, [ColumnScope]);
  initMetadataForClass(ExperimentalGridApi, 'ExperimentalGridApi', VOID, VOID, [Annotation]);
  initMetadataForClass(ExperimentalLayoutApi, 'ExperimentalLayoutApi', VOID, VOID, [Annotation]);
  initMetadataForClass(DefaultDensity$1, VOID, VOID, VOID, [Density]);
  initMetadataForClass(FlowLayoutData, 'FlowLayoutData');
  initMetadataForClass(GridItem, 'GridItem');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(IntrinsicSize, 'IntrinsicSize', VOID, Enum);
  initMetadataForClass(IntrinsicWidthElement, 'IntrinsicWidthElement', VOID, ModifierNodeElement);
  initMetadataForClass(IntrinsicSizeModifier, 'IntrinsicSizeModifier', VOID, Node, [LayoutModifierNode]);
  initMetadataForClass(IntrinsicWidthNode, 'IntrinsicWidthNode', VOID, IntrinsicSizeModifier);
  initMetadataForClass(LayoutScopeMarker, 'LayoutScopeMarker', VOID, VOID, [Annotation]);
  initMetadataForClass(OffsetElement, 'OffsetElement', VOID, ModifierNodeElement);
  initMetadataForClass(OffsetNode, 'OffsetNode', VOID, Node, [LayoutModifierNode]);
  initMetadataForInterface(PaddingValues, 'PaddingValues');
  initMetadataForClass(Absolute_0, 'Absolute', Absolute_0, VOID, [PaddingValues]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(PaddingValuesImpl, 'PaddingValuesImpl', PaddingValuesImpl, VOID, [PaddingValues]);
  initMetadataForClass(PaddingElement, 'PaddingElement', VOID, ModifierNodeElement);
  initMetadataForClass(PaddingValuesElement, 'PaddingValuesElement', VOID, ModifierNodeElement);
  initMetadataForClass(PaddingNode, 'PaddingNode', VOID, Node, [LayoutModifierNode]);
  initMetadataForClass(PaddingValuesModifier, 'PaddingValuesModifier', VOID, Node, [LayoutModifierNode]);
  function weight$default_0(_this__u8e3s4, weight, fill, $super) {
    fill = fill === VOID ? true : fill;
    return $super === VOID ? this.weight_9ecvc_k$(_this__u8e3s4, weight, fill) : $super.weight_9ecvc_k$.call(this, _this__u8e3s4, weight, fill);
  }
  initMetadataForInterface(RowScope, 'RowScope');
  initMetadataForClass(RowMeasurePolicy, 'RowMeasurePolicy', VOID, VOID, [MeasurePolicy, RowColumnMeasurePolicy]);
  initMetadataForClass(sam$androidx_compose_foundation_layout_AlignmentLineProviderBlock$0_0, 'sam$androidx_compose_foundation_layout_AlignmentLineProviderBlock$0', VOID, VOID, [AlignmentLineProviderBlock, FunctionAdapter]);
  initMetadataForObject(RowScopeInstance, 'RowScopeInstance', VOID, VOID, [RowScope]);
  initMetadataForClass(RowColumnParentData, 'RowColumnParentData', RowColumnParentData);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(CrossAxisAlignment, 'CrossAxisAlignment');
  initMetadataForClass(AlignmentLineCrossAxisAlignment, 'AlignmentLineCrossAxisAlignment', VOID, CrossAxisAlignment);
  initMetadataForClass(VerticalCrossAxisAlignment, 'VerticalCrossAxisAlignment', VOID, CrossAxisAlignment);
  initMetadataForClass(HorizontalCrossAxisAlignment, 'HorizontalCrossAxisAlignment', VOID, CrossAxisAlignment);
  initMetadataForObject(IntrinsicMeasureBlocks, 'IntrinsicMeasureBlocks');
  initMetadataForClass(LayoutWeightElement, 'LayoutWeightElement', VOID, ModifierNodeElement);
  initMetadataForClass(HorizontalAlignElement, 'HorizontalAlignElement', VOID, ModifierNodeElement);
  initMetadataForClass(WithAlignmentLineElement, 'WithAlignmentLineElement', VOID, ModifierNodeElement);
  initMetadataForClass(WithAlignmentLineBlockElement, 'WithAlignmentLineBlockElement', VOID, ModifierNodeElement);
  initMetadataForClass(VerticalAlignElement, 'VerticalAlignElement', VOID, ModifierNodeElement);
  initMetadataForClass(AlignmentLineProvider, 'AlignmentLineProvider');
  initMetadataForClass(Block, 'Block', VOID, AlignmentLineProvider);
  initMetadataForClass(Value, 'Value', VOID, AlignmentLineProvider);
  initMetadataForClass(LayoutWeightNode, 'LayoutWeightNode', VOID, Node, [ParentDataModifierNode]);
  initMetadataForClass(HorizontalAlignNode, 'HorizontalAlignNode', VOID, Node, [ParentDataModifierNode]);
  initMetadataForClass(SiblingsAlignedNode, 'SiblingsAlignedNode', VOID, Node, [ParentDataModifierNode]);
  initMetadataForClass(WithAlignmentLineBlockNode, 'WithAlignmentLineBlockNode', VOID, SiblingsAlignedNode);
  initMetadataForClass(WithAlignmentLineNode, 'WithAlignmentLineNode', VOID, SiblingsAlignedNode);
  initMetadataForClass(VerticalAlignNode, 'VerticalAlignNode', VOID, Node, [ParentDataModifierNode]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(FillElement, 'FillElement', VOID, ModifierNodeElement);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(WrapContentElement, 'WrapContentElement', VOID, ModifierNodeElement);
  initMetadataForClass(SizeElement, 'SizeElement', VOID, ModifierNodeElement);
  initMetadataForClass(UnspecifiedConstraintsElement, 'UnspecifiedConstraintsElement', UnspecifiedConstraintsElement, ModifierNodeElement);
  initMetadataForClass(FillNode, 'FillNode', VOID, Node, [LayoutModifierNode]);
  initMetadataForClass(Direction, 'Direction', VOID, Enum);
  initMetadataForClass(WrapContentNode, 'WrapContentNode', VOID, Node, [LayoutModifierNode]);
  initMetadataForClass(SizeNode, 'SizeNode', VOID, Node, [LayoutModifierNode]);
  initMetadataForClass(UnspecifiedConstraintsNode, 'UnspecifiedConstraintsNode', UnspecifiedConstraintsNode, Node, [LayoutModifierNode]);
  initMetadataForObject(SpacerMeasurePolicy, 'SpacerMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForCompanion(Companion_3);
  initMetadataForInterface(WindowInsets, 'WindowInsets');
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(WindowInsetsSides, 'WindowInsetsSides');
  initMetadataForClass(FixedIntInsets, 'FixedIntInsets', VOID, VOID, [WindowInsets]);
  initMetadataForClass(LimitInsets, 'LimitInsets', VOID, VOID, [WindowInsets]);
  initMetadataForClass(UnionInsets, 'UnionInsets', VOID, VOID, [WindowInsets]);
  initMetadataForClass(InsetsPaddingModifierElement, 'InsetsPaddingModifierElement', VOID, ModifierNodeElement);
  initMetadataForClass(InsetsConsumingModifierNode, 'InsetsConsumingModifierNode', VOID, Node, [TraversableNode]);
  initMetadataForClass(InsetsPaddingModifierNode, 'InsetsPaddingModifierNode', VOID, InsetsConsumingModifierNode, [LayoutModifierNode]);
  initMetadataForInterface(WindowInsetsWidthCalculator, 'WindowInsetsWidthCalculator');
  initMetadataForInterface(WindowInsetsHeightCalculator, 'WindowInsetsHeightCalculator');
  initMetadataForClass(sam$androidx_compose_foundation_layout_WindowInsetsWidthCalculator$0, 'sam$androidx_compose_foundation_layout_WindowInsetsWidthCalculator$0', VOID, VOID, [WindowInsetsWidthCalculator, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_foundation_layout_WindowInsetsWidthCalculator$0_0, 'sam$androidx_compose_foundation_layout_WindowInsetsWidthCalculator$0', VOID, VOID, [WindowInsetsWidthCalculator, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_foundation_layout_WindowInsetsHeightCalculator$0, 'sam$androidx_compose_foundation_layout_WindowInsetsHeightCalculator$0', VOID, VOID, [WindowInsetsHeightCalculator, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_foundation_layout_WindowInsetsHeightCalculator$0_0, 'sam$androidx_compose_foundation_layout_WindowInsetsHeightCalculator$0', VOID, VOID, [WindowInsetsHeightCalculator, FunctionAdapter]);
  initMetadataForClass(NoOp, 'NoOp', VOID, VOID, [Annotation]);
  initMetadataForClass(toWindowInsets$1, VOID, VOID, VOID, [WindowInsets]);
  initMetadataForClass(PlatformInsetsPaddingModifierElement, 'PlatformInsetsPaddingModifierElement', VOID, ModifierNodeElement);
  initMetadataForClass(PlatformWindowInsetsPaddingModifierElement, 'PlatformWindowInsetsPaddingModifierElement', VOID, ModifierNodeElement);
  initMetadataForClass(PlatformInsetsPaddingModifierNode, 'PlatformInsetsPaddingModifierNode', PlatformInsetsPaddingModifierNode, InsetsPaddingModifierNode);
  initMetadataForClass(PlatformWindowInsetsPaddingModifierNode, 'PlatformWindowInsetsPaddingModifierNode', VOID, PlatformWindowInsetsProviderNode, [ObserverModifierNode]);
  //endregion
  var androidx_compose_foundation_layout_Arrangement_Absolute$stable;
  var androidx_compose_foundation_layout_Arrangement_SpacedAligned$stable;
  var androidx_compose_foundation_layout_Arrangement$stable;
  function sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0).align_jsq0mf_k$ = function (size, layoutDirection) {
    return this.function_1(size, layoutDirection);
  };
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, SpacingAlignmentCalculator) : false) {
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
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_0).align_jsq0mf_k$ = function (size, layoutDirection) {
    return this.function_1(size, layoutDirection);
  };
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, SpacingAlignmentCalculator) : false) {
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
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_1).align_jsq0mf_k$ = function (size, layoutDirection) {
    return this.function_1(size, layoutDirection);
  };
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_1).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, SpacingAlignmentCalculator) : false) {
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
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_1).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function Arrangement$Absolute$Left$1() {
  }
  protoOf(Arrangement$Absolute$Left$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeLeftOrTop_d8pxhp_k$(sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$Left$1).toString = function () {
    return 'AbsoluteArrangement#Left';
  };
  function Arrangement$Absolute$Center$1() {
  }
  protoOf(Arrangement$Absolute$Center$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeCenter_5ptz3r_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$Center$1).toString = function () {
    return 'AbsoluteArrangement#Center';
  };
  function Arrangement$Absolute$Right$1() {
  }
  protoOf(Arrangement$Absolute$Right$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeRightOrBottom_jbnppa_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$Right$1).toString = function () {
    return 'AbsoluteArrangement#Right';
  };
  function Arrangement$Absolute$SpaceBetween$1() {
  }
  protoOf(Arrangement$Absolute$SpaceBetween$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeSpaceBetween_xk0w8s_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$SpaceBetween$1).toString = function () {
    return 'AbsoluteArrangement#SpaceBetween';
  };
  function Arrangement$Absolute$SpaceEvenly$1() {
  }
  protoOf(Arrangement$Absolute$SpaceEvenly$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeSpaceEvenly_nbsqyn_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$SpaceEvenly$1).toString = function () {
    return 'AbsoluteArrangement#SpaceEvenly';
  };
  function Arrangement$Absolute$SpaceAround$1() {
  }
  protoOf(Arrangement$Absolute$SpaceAround$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    return Arrangement_getInstance().placeSpaceAround_vivrfr_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Absolute$SpaceAround$1).toString = function () {
    return 'AbsoluteArrangement#SpaceAround';
  };
  function Arrangement$Absolute$spacedBy$lambda($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_y7fd6v_k$(0, size, layoutDirection);
    };
  }
  function Arrangement$Absolute$spacedBy$lambda_0($alignment) {
    return function (size, _unused_var__etf5q3) {
      return $alignment.align_k316px_k$(0, size);
    };
  }
  function Arrangement$Absolute$aligned$lambda($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_y7fd6v_k$(0, size, layoutDirection);
    };
  }
  function Horizontal() {
  }
  function Vertical() {
  }
  function HorizontalOrVertical() {
  }
  function Absolute() {
    Absolute_instance = this;
    var tmp = this;
    tmp.Left_1 = new Arrangement$Absolute$Left$1();
    var tmp_0 = this;
    tmp_0.Center_1 = new Arrangement$Absolute$Center$1();
    var tmp_1 = this;
    tmp_1.Right_1 = new Arrangement$Absolute$Right$1();
    var tmp_2 = this;
    tmp_2.SpaceBetween_1 = new Arrangement$Absolute$SpaceBetween$1();
    var tmp_3 = this;
    tmp_3.SpaceEvenly_1 = new Arrangement$Absolute$SpaceEvenly$1();
    var tmp_4 = this;
    tmp_4.SpaceAround_1 = new Arrangement$Absolute$SpaceAround$1();
  }
  protoOf(Absolute).get_Left_wo5bw0_k$ = function () {
    return this.Left_1;
  };
  protoOf(Absolute).get_Center_3arb0i_k$ = function () {
    return this.Center_1;
  };
  protoOf(Absolute).get_Right_igdsyb_k$ = function () {
    return this.Right_1;
  };
  protoOf(Absolute).get_SpaceBetween_5p3wqd_k$ = function () {
    return this.SpaceBetween_1;
  };
  protoOf(Absolute).get_SpaceEvenly_3s2yx0_k$ = function () {
    return this.SpaceEvenly_1;
  };
  protoOf(Absolute).get_SpaceAround_1tvu22_k$ = function () {
    return this.SpaceAround_1;
  };
  protoOf(Absolute).spacedBy_wt7oji_k$ = function (space) {
    return new SpacedAligned(space, false, null);
  };
  protoOf(Absolute).spacedBy_k2qzj_k$ = function (space, alignment) {
    var tmp = Arrangement$Absolute$spacedBy$lambda(alignment);
    return new SpacedAligned(space, false, new sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0(tmp));
  };
  protoOf(Absolute).spacedBy_ree0zx_k$ = function (space, alignment) {
    var tmp = Arrangement$Absolute$spacedBy$lambda_0(alignment);
    return new SpacedAligned(space, false, new sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_0(tmp));
  };
  protoOf(Absolute).aligned_ze1awx_k$ = function (alignment) {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(0);
    var tmp_0 = Arrangement$Absolute$aligned$lambda(alignment);
    return new SpacedAligned(tmp, false, new sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_1(tmp_0));
  };
  var Absolute_instance;
  function Absolute_getInstance() {
    if (Absolute_instance == null)
      new Absolute();
    return Absolute_instance;
  }
  function SpacingAlignmentCalculator() {
  }
  function SpacedAligned(space, rtlMirror, alignment) {
    this.space_1 = space;
    this.rtlMirror_1 = rtlMirror;
    this.alignment_1 = alignment;
    this.spacing_1 = this.space_1;
  }
  protoOf(SpacedAligned).get_space_1qqjay_k$ = function () {
    return this.space_1;
  };
  protoOf(SpacedAligned).get_rtlMirror_4wv9cw_k$ = function () {
    return this.rtlMirror_1;
  };
  protoOf(SpacedAligned).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(SpacedAligned).get_spacing_zb7agn_k$ = function () {
    return this.spacing_1;
  };
  protoOf(SpacedAligned).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (sizes.length === 0)
      return Unit_getInstance();
    var spacePx = _this__u8e3s4.roundToPx_yb7vg8_k$(this.space_1);
    var isRtl = this.rtlMirror_1 && layoutDirection.equals(LayoutDirection_Rtl_getInstance());
    var lastSpace = 0;
    var freeSpace = totalSize;
    if (isRtl) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = sizes.length;
      while (inductionVariable < last) {
        var item = sizes[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = freeSpace - item | 0;
        outPositions[_unary__edvuaz] = Math.max(0, b);
        // Inline function 'kotlin.math.min' call
        var b_0 = outPositions[_unary__edvuaz];
        lastSpace = Math.min(spacePx, b_0);
        freeSpace = outPositions[_unary__edvuaz] - lastSpace | 0;
      }
      freeSpace = freeSpace + lastSpace | 0;
    } else {
      var occupied = 0;
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index_0 = 0;
      var inductionVariable_0 = 0;
      var last_0 = sizes.length;
      while (inductionVariable_0 < last_0) {
        var item_0 = sizes[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz_0 = index_0;
        index_0 = _unary__edvuaz_0 + 1 | 0;
        var tmp0 = occupied;
        // Inline function 'kotlin.math.min' call
        var b_1 = totalSize - item_0 | 0;
        outPositions[_unary__edvuaz_0] = Math.min(tmp0, b_1);
        // Inline function 'kotlin.math.min' call
        var b_2 = (totalSize - outPositions[_unary__edvuaz_0] | 0) - item_0 | 0;
        lastSpace = Math.min(spacePx, b_2);
        occupied = (outPositions[_unary__edvuaz_0] + item_0 | 0) + lastSpace | 0;
      }
      occupied = occupied - lastSpace | 0;
      freeSpace = totalSize - occupied | 0;
    }
    if (!(this.alignment_1 == null) && freeSpace > 0) {
      var groupPosition = this.alignment_1.align_jsq0mf_k$(freeSpace, layoutDirection);
      var offset = isRtl ? groupPosition - freeSpace | 0 : groupPosition;
      if (!(offset === 0)) {
        var inductionVariable_1 = 0;
        var last_1 = outPositions.length - 1 | 0;
        if (inductionVariable_1 <= last_1)
          do {
            var index_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            outPositions[index_1] = outPositions[index_1] + offset | 0;
          }
           while (inductionVariable_1 <= last_1);
      }
    }
  };
  protoOf(SpacedAligned).arrange_1pnoh8_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return this.arrange_f41npy_k$(_this__u8e3s4, totalSize, sizes, LayoutDirection_Ltr_getInstance(), outPositions);
  };
  protoOf(SpacedAligned).toString = function () {
    return (this.rtlMirror_1 ? '' : 'Absolute') + 'Arrangement#spacedAligned(' + Dp__toString_impl_kcddez(this.space_1) + ', ' + toString(this.alignment_1) + ')';
  };
  protoOf(SpacedAligned).component1_k79ve9_k$ = function () {
    return this.space_1;
  };
  protoOf(SpacedAligned).component2_7eebsb_k$ = function () {
    return this.rtlMirror_1;
  };
  protoOf(SpacedAligned).component3_7eebsa_k$ = function () {
    return this.alignment_1;
  };
  protoOf(SpacedAligned).copy_sitq7u_k$ = function (space, rtlMirror, alignment) {
    return new SpacedAligned(space, rtlMirror, alignment);
  };
  protoOf(SpacedAligned).copy$default_fxwoqh_k$ = function (space, rtlMirror, alignment, $super) {
    space = space === VOID ? this.space_1 : space;
    rtlMirror = rtlMirror === VOID ? this.rtlMirror_1 : rtlMirror;
    alignment = alignment === VOID ? this.alignment_1 : alignment;
    return $super === VOID ? this.copy_sitq7u_k$(space, rtlMirror, alignment) : $super.copy_sitq7u_k$.call(this, new Dp(space), rtlMirror, alignment);
  };
  protoOf(SpacedAligned).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.space_1);
    result = imul(result, 31) + getBooleanHashCode(this.rtlMirror_1) | 0;
    result = imul(result, 31) + (this.alignment_1 == null ? 0 : hashCode(this.alignment_1)) | 0;
    return result;
  };
  protoOf(SpacedAligned).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpacedAligned))
      return false;
    if (!equals(new Dp(this.space_1), new Dp(other.space_1)))
      return false;
    if (!(this.rtlMirror_1 === other.rtlMirror_1))
      return false;
    if (!equals(this.alignment_1, other.alignment_1))
      return false;
    return true;
  };
  function forEachIndexed($this, $receiver, reversed, action) {
    if (!reversed) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = $receiver.length;
      while (inductionVariable < last) {
        var item = $receiver[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        action(_unary__edvuaz, item);
      }
    } else {
      var inductionVariable_0 = $receiver.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          action(i, $receiver[i]);
        }
         while (0 <= inductionVariable_0);
    }
  }
  function sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_2(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_2).align_jsq0mf_k$ = function (size, layoutDirection) {
    return this.function_1(size, layoutDirection);
  };
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_2).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, SpacingAlignmentCalculator) : false) {
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
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_2).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_3(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_3).align_jsq0mf_k$ = function (size, layoutDirection) {
    return this.function_1(size, layoutDirection);
  };
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_3).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_3).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, SpacingAlignmentCalculator) : false) {
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
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_3).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_4(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_4).align_jsq0mf_k$ = function (size, layoutDirection) {
    return this.function_1(size, layoutDirection);
  };
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_4).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_4).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, SpacingAlignmentCalculator) : false) {
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
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_4).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_5(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_5).align_jsq0mf_k$ = function (size, layoutDirection) {
    return this.function_1(size, layoutDirection);
  };
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_5).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_5).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, SpacingAlignmentCalculator) : false) {
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
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_5).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_6(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_6).align_jsq0mf_k$ = function (size, layoutDirection) {
    return this.function_1(size, layoutDirection);
  };
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_6).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_6).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, SpacingAlignmentCalculator) : false) {
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
  protoOf(sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_6).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function Arrangement$Start$1() {
  }
  protoOf(Arrangement$Start$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeLeftOrTop_d8pxhp_k$(sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeRightOrBottom_jbnppa_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$Start$1).toString = function () {
    return 'Arrangement#Start';
  };
  function Arrangement$End$1() {
  }
  protoOf(Arrangement$End$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeRightOrBottom_jbnppa_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeLeftOrTop_d8pxhp_k$(sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$End$1).toString = function () {
    return 'Arrangement#End';
  };
  function Arrangement$Top$1() {
  }
  protoOf(Arrangement$Top$1).arrange_1pnoh8_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeLeftOrTop_d8pxhp_k$(sizes, outPositions, false);
  };
  protoOf(Arrangement$Top$1).toString = function () {
    return 'Arrangement#Top';
  };
  function Arrangement$Bottom$1() {
  }
  protoOf(Arrangement$Bottom$1).arrange_1pnoh8_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeRightOrBottom_jbnppa_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Bottom$1).toString = function () {
    return 'Arrangement#Bottom';
  };
  function Arrangement$Center$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.spacing_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$Center$1).get_spacing_zb7agn_k$ = function () {
    return this.spacing_1;
  };
  protoOf(Arrangement$Center$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeCenter_5ptz3r_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeCenter_5ptz3r_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$Center$1).arrange_1pnoh8_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeCenter_5ptz3r_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Center$1).toString = function () {
    return 'Arrangement#Center';
  };
  function Arrangement$SpaceEvenly$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.spacing_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceEvenly$1).get_spacing_zb7agn_k$ = function () {
    return this.spacing_1;
  };
  protoOf(Arrangement$SpaceEvenly$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeSpaceEvenly_nbsqyn_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeSpaceEvenly_nbsqyn_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceEvenly$1).arrange_1pnoh8_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeSpaceEvenly_nbsqyn_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceEvenly$1).toString = function () {
    return 'Arrangement#SpaceEvenly';
  };
  function Arrangement$SpaceBetween$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.spacing_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceBetween$1).get_spacing_zb7agn_k$ = function () {
    return this.spacing_1;
  };
  protoOf(Arrangement$SpaceBetween$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeSpaceBetween_xk0w8s_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeSpaceBetween_xk0w8s_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceBetween$1).arrange_1pnoh8_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeSpaceBetween_xk0w8s_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceBetween$1).toString = function () {
    return 'Arrangement#SpaceBetween';
  };
  function Arrangement$SpaceAround$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.spacing_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceAround$1).get_spacing_zb7agn_k$ = function () {
    return this.spacing_1;
  };
  protoOf(Arrangement$SpaceAround$1).arrange_f41npy_k$ = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().placeSpaceAround_vivrfr_k$(totalSize, sizes, outPositions, false);
      tmp = Unit_getInstance();
    } else {
      Arrangement_getInstance().placeSpaceAround_vivrfr_k$(totalSize, sizes, outPositions, true);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceAround$1).arrange_1pnoh8_k$ = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().placeSpaceAround_vivrfr_k$(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceAround$1).toString = function () {
    return 'Arrangement#SpaceAround';
  };
  function Arrangement$spacedBy$lambda(size, layoutDirection) {
    return Companion_getInstance().get_Start_ih4i6x_k$().align_y7fd6v_k$(0, size, layoutDirection);
  }
  function Arrangement$spacedBy$lambda_0($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_y7fd6v_k$(0, size, layoutDirection);
    };
  }
  function Arrangement$spacedBy$lambda_1($alignment) {
    return function (size, _unused_var__etf5q3) {
      return $alignment.align_k316px_k$(0, size);
    };
  }
  function Arrangement$aligned$lambda($alignment) {
    return function (size, layoutDirection) {
      return $alignment.align_y7fd6v_k$(0, size, layoutDirection);
    };
  }
  function Arrangement$aligned$lambda_0($alignment) {
    return function (size, _unused_var__etf5q3) {
      return $alignment.align_k316px_k$(0, size);
    };
  }
  function Arrangement() {
    Arrangement_instance = this;
    var tmp = this;
    tmp.Start_1 = new Arrangement$Start$1();
    var tmp_0 = this;
    tmp_0.End_1 = new Arrangement$End$1();
    var tmp_1 = this;
    tmp_1.Top_1 = new Arrangement$Top$1();
    var tmp_2 = this;
    tmp_2.Bottom_1 = new Arrangement$Bottom$1();
    var tmp_3 = this;
    tmp_3.Center_1 = new Arrangement$Center$1();
    var tmp_4 = this;
    tmp_4.SpaceEvenly_1 = new Arrangement$SpaceEvenly$1();
    var tmp_5 = this;
    tmp_5.SpaceBetween_1 = new Arrangement$SpaceBetween$1();
    var tmp_6 = this;
    tmp_6.SpaceAround_1 = new Arrangement$SpaceAround$1();
  }
  protoOf(Arrangement).get_Start_ih4i6x_k$ = function () {
    return this.Start_1;
  };
  protoOf(Arrangement).get_End_18ju7i_k$ = function () {
    return this.End_1;
  };
  protoOf(Arrangement).get_Top_18jj1w_k$ = function () {
    return this.Top_1;
  };
  protoOf(Arrangement).get_Bottom_3m75bg_k$ = function () {
    return this.Bottom_1;
  };
  protoOf(Arrangement).get_Center_3arb0i_k$ = function () {
    return this.Center_1;
  };
  protoOf(Arrangement).get_SpaceEvenly_3s2yx0_k$ = function () {
    return this.SpaceEvenly_1;
  };
  protoOf(Arrangement).get_SpaceBetween_5p3wqd_k$ = function () {
    return this.SpaceBetween_1;
  };
  protoOf(Arrangement).get_SpaceAround_1tvu22_k$ = function () {
    return this.SpaceAround_1;
  };
  protoOf(Arrangement).spacedBy_wt7oji_k$ = function (space) {
    var tmp = Arrangement$spacedBy$lambda;
    return new SpacedAligned(space, true, new sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_2(tmp));
  };
  protoOf(Arrangement).spacedBy_k2qzj_k$ = function (space, alignment) {
    var tmp = Arrangement$spacedBy$lambda_0(alignment);
    return new SpacedAligned(space, true, new sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_3(tmp));
  };
  protoOf(Arrangement).spacedBy_ree0zx_k$ = function (space, alignment) {
    var tmp = Arrangement$spacedBy$lambda_1(alignment);
    return new SpacedAligned(space, false, new sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_4(tmp));
  };
  protoOf(Arrangement).aligned_ze1awx_k$ = function (alignment) {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(0);
    var tmp_0 = Arrangement$aligned$lambda(alignment);
    return new SpacedAligned(tmp, true, new sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_5(tmp_0));
  };
  protoOf(Arrangement).aligned_wvl7yp_k$ = function (alignment) {
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(0);
    var tmp_0 = Arrangement$aligned$lambda_0(alignment);
    return new SpacedAligned(tmp, false, new sam$androidx_compose_foundation_layout_Arrangement_SpacingAlignmentCalculator$0_6(tmp_0));
  };
  protoOf(Arrangement).placeRightOrBottom_jbnppa_k$ = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var current = totalSize - consumedSize | 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        outPosition[_unary__edvuaz] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          var it = size[i];
          outPosition[i] = current;
          current = current + it | 0;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).placeLeftOrTop_d8pxhp_k$ = function (size, outPosition, reverseInput) {
    var current = 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = size.length;
      while (inductionVariable < last) {
        var item = size[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        outPosition[_unary__edvuaz] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_0 = size.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          var it = size[i];
          outPosition[i] = current;
          current = current + it | 0;
        }
         while (0 <= inductionVariable_0);
    }
  };
  protoOf(Arrangement).placeCenter_5ptz3r_k$ = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var current = (totalSize - consumedSize | 0) / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        var this_0 = current;
        var tmp;
        if (isNaN_0(this_0)) {
          tmp = 0;
        } else {
          // Inline function 'kotlin.math.roundToInt' call
          tmp = roundToInt(this_0);
        }
        outPosition[_unary__edvuaz] = tmp;
        current = current + item;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          var this_1 = current;
          var tmp_0;
          if (isNaN_0(this_1)) {
            tmp_0 = 0;
          } else {
            // Inline function 'kotlin.math.roundToInt' call
            tmp_0 = roundToInt(this_1);
          }
          outPosition[i] = tmp_0;
          current = current + it;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).placeSpaceEvenly_nbsqyn_k$ = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var gapSize = (totalSize - consumedSize | 0) / (size.length + 1 | 0);
    var current = gapSize;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        var this_0 = current;
        var tmp;
        if (isNaN_0(this_0)) {
          tmp = 0;
        } else {
          // Inline function 'kotlin.math.roundToInt' call
          tmp = roundToInt(this_0);
        }
        outPosition[_unary__edvuaz] = tmp;
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          var this_1 = current;
          var tmp_0;
          if (isNaN_0(this_1)) {
            tmp_0 = 0;
          } else {
            // Inline function 'kotlin.math.roundToInt' call
            tmp_0 = roundToInt(this_1);
          }
          outPosition[i] = tmp_0;
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).placeSpaceBetween_xk0w8s_k$ = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (size.length === 0)
      return Unit_getInstance();
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = get_lastIndex(size);
    var noOfGaps = Math.max(a, 1);
    var gapSize = (totalSize - consumedSize | 0) / noOfGaps;
    var current = 0.0;
    if (reverseInput && size.length === 1) {
      current = gapSize;
    }
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        var this_0 = current;
        var tmp;
        if (isNaN_0(this_0)) {
          tmp = 0;
        } else {
          // Inline function 'kotlin.math.roundToInt' call
          tmp = roundToInt(this_0);
        }
        outPosition[_unary__edvuaz] = tmp;
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          var this_1 = current;
          var tmp_0;
          if (isNaN_0(this_1)) {
            tmp_0 = 0;
          } else {
            // Inline function 'kotlin.math.roundToInt' call
            tmp_0 = roundToInt(this_1);
          }
          outPosition[i] = tmp_0;
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).placeSpaceAround_vivrfr_k$ = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(size.length === 0)) {
      tmp = (totalSize - consumedSize | 0) / size.length;
    } else {
      tmp = 0.0;
    }
    var gapSize = tmp;
    var current = gapSize / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        var this_0 = current;
        var tmp_0;
        if (isNaN_0(this_0)) {
          tmp_0 = 0;
        } else {
          // Inline function 'kotlin.math.roundToInt' call
          tmp_0 = roundToInt(this_0);
        }
        outPosition[_unary__edvuaz] = tmp_0;
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          var this_1 = current;
          var tmp_1;
          if (isNaN_0(this_1)) {
            tmp_1 = 0;
          } else {
            // Inline function 'kotlin.math.roundToInt' call
            tmp_1 = roundToInt(this_1);
          }
          outPosition[i] = tmp_1;
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  var Arrangement_instance;
  function Arrangement_getInstance() {
    if (Arrangement_instance == null)
      new Arrangement();
    return Arrangement_instance;
  }
  function get_Cache1() {
    _init_properties_Box_kt__tvzvdl();
    return Cache1;
  }
  var Cache1;
  function get_Cache2() {
    _init_properties_Box_kt__tvzvdl();
    return Cache2;
  }
  var Cache2;
  function get_DefaultBoxMeasurePolicy() {
    _init_properties_Box_kt__tvzvdl();
    return DefaultBoxMeasurePolicy;
  }
  var DefaultBoxMeasurePolicy;
  function get_EmptyBoxMeasurePolicy() {
    _init_properties_Box_kt__tvzvdl();
    return EmptyBoxMeasurePolicy;
  }
  var EmptyBoxMeasurePolicy;
  var androidx_compose_foundation_layout_BoxScopeInstance$stable;
  function Box(modifier, contentAlignment, propagateMinConstraints, content, $composer, $changed, $default) {
    _init_properties_Box_kt__tvzvdl();
    var modifier_0 = modifier;
    var contentAlignment_0 = contentAlignment;
    var propagateMinConstraints_0 = propagateMinConstraints;
    var $composer_0 = $composer;
    if (!(($default & 1) === 0))
      modifier_0 = Companion_getInstance_0();
    if (!(($default & 2) === 0))
      contentAlignment_0 = Companion_getInstance().get_TopStart_o4x792_k$();
    if (!(($default & 4) === 0))
      propagateMinConstraints_0 = false;
    var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment_0, propagateMinConstraints_0);
    // Inline function 'androidx.compose.ui.layout.Layout' call
    var modifier_1 = modifier_0;
    var $composer_1 = $composer_0;
    if (!((0 & 2) === 0))
      modifier_1 = Companion_getInstance_0();
    var compositeKeyHash = get_currentCompositeKeyHashCode($composer_1, 0).hashCode();
    var localMap = $composer_1.get_currentCompositionLocalMap_fmcf79_k$();
    var materialized = materialize($composer_1, modifier_1);
    var tmp0 = Companion_getInstance_1().get_Constructor_f7ieep_k$();
    // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
    var $composer_2 = $composer_1;
    var tmp = $composer_2.get_applier_bupu8u_k$();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_2.startReusableNode_jjgeyp_k$();
    if ($composer_2.get_inserting_25mlsw_k$()) {
      $composer_2.createNode_ahrd54_k$(tmp0);
    } else {
      $composer_2.useNode_io5s9l_k$();
    }
    var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
    Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().get_SetResolvedCompositionLocals_rc2u9t_k$());
    Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_1().get_SetCompositeKeyHash_n8lgg1_k$());
    Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_1().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
    Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().get_SetModifier_6tz580_k$());
    var $composer_3 = $composer_2;
    content(BoxScopeInstance_getInstance(), $composer_3, 6 | 112 & $changed >> 6);
    $composer_2.endNode_3m0yfn_k$();
  }
  function BoxScope() {
  }
  function Box_0(modifier, $composer, $changed) {
    _init_properties_Box_kt__tvzvdl();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-211209833);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier) ? 4 : 2);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 3) === 2), $dirty & 1)) {
      var tmp2 = get_EmptyBoxMeasurePolicy();
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_1 = $composer_0;
      if (!((0 & 1) === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_1, 0).hashCode();
      var materialized = materialize($composer_1, modifier_0);
      var localMap = $composer_1.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_1().get_Constructor_f7ieep_k$();
      var $composer_2 = $composer_1;
      var tmp = $composer_2.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_2.startReusableNode_jjgeyp_k$();
      if ($composer_2.get_inserting_25mlsw_k$()) {
        $composer_2.createNode_ahrd54_k$(factory);
      } else {
        $composer_2.useNode_io5s9l_k$();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp2, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_1().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().get_SetModifier_6tz580_k$());
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_1().get_SetCompositeKeyHash_n8lgg1_k$());
      $composer_2.endNode_3m0yfn_k$();
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(Box$lambda(modifier, $changed));
    }
  }
  function cacheFor(propagate) {
    _init_properties_Box_kt__tvzvdl();
    // Inline function 'kotlin.apply' call
    var this_0 = new MutableScatterMap(9);
    this_0.set_b9w55f_k$(Companion_getInstance().get_TopStart_o4x792_k$(), new BoxMeasurePolicy(Companion_getInstance().get_TopStart_o4x792_k$(), propagate));
    this_0.set_b9w55f_k$(Companion_getInstance().get_TopCenter_u4q5vl_k$(), new BoxMeasurePolicy(Companion_getInstance().get_TopCenter_u4q5vl_k$(), propagate));
    this_0.set_b9w55f_k$(Companion_getInstance().get_TopEnd_4wiiy7_k$(), new BoxMeasurePolicy(Companion_getInstance().get_TopEnd_4wiiy7_k$(), propagate));
    this_0.set_b9w55f_k$(Companion_getInstance().get_CenterStart_2305fg_k$(), new BoxMeasurePolicy(Companion_getInstance().get_CenterStart_2305fg_k$(), propagate));
    this_0.set_b9w55f_k$(Companion_getInstance().get_Center_3arb0i_k$(), new BoxMeasurePolicy(Companion_getInstance().get_Center_3arb0i_k$(), propagate));
    this_0.set_b9w55f_k$(Companion_getInstance().get_CenterEnd_uti4xp_k$(), new BoxMeasurePolicy(Companion_getInstance().get_CenterEnd_uti4xp_k$(), propagate));
    this_0.set_b9w55f_k$(Companion_getInstance().get_BottomStart_v81qpa_k$(), new BoxMeasurePolicy(Companion_getInstance().get_BottomStart_v81qpa_k$(), propagate));
    this_0.set_b9w55f_k$(Companion_getInstance().get_BottomCenter_yatb1z_k$(), new BoxMeasurePolicy(Companion_getInstance().get_BottomCenter_yatb1z_k$(), propagate));
    this_0.set_b9w55f_k$(Companion_getInstance().get_BottomEnd_ayz0tj_k$(), new BoxMeasurePolicy(Companion_getInstance().get_BottomEnd_ayz0tj_k$(), propagate));
    return this_0;
  }
  function _get_alignment__wcztn2($this) {
    return $this.alignment_1;
  }
  function _get_propagateMinConstraints__xgo1gc($this) {
    return $this.propagateMinConstraints_1;
  }
  function component1($this) {
    return $this.alignment_1;
  }
  function component2($this) {
    return $this.propagateMinConstraints_1;
  }
  function BoxMeasurePolicy$measure$lambda($this$layout) {
    return Unit_getInstance();
  }
  function BoxMeasurePolicy$measure$lambda_0($placeable, $measurable, $this_measure, $boxWidth, $boxHeight, this$0) {
    return function ($this$layout) {
      placeInBox($this$layout, $placeable, $measurable, $this_measure.get_layoutDirection_7e37v0_k$(), $boxWidth, $boxHeight, this$0.alignment_1);
      return Unit_getInstance();
    };
  }
  function BoxMeasurePolicy$measure$lambda_1($placeables, $measurables, $this_measure, $boxWidth, $boxHeight, this$0) {
    return function ($this$layout) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        if (!(item instanceof Placeable))
          THROW_CCE();
        var measurable = $measurables.get_c1px32_k$(_unary__edvuaz);
        placeInBox($this$layout, item, measurable, $this_measure.get_layoutDirection_7e37v0_k$(), $boxWidth._v, $boxHeight._v, this$0.alignment_1);
      }
      return Unit_getInstance();
    };
  }
  function BoxMeasurePolicy(alignment, propagateMinConstraints) {
    this.alignment_1 = alignment;
    this.propagateMinConstraints_1 = propagateMinConstraints;
  }
  protoOf(BoxMeasurePolicy).measure_xg9b01_k$ = function (_this__u8e3s4, measurables, constraints) {
    if (measurables.isEmpty_y1axqb_k$()) {
      var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      return _this__u8e3s4.layout$default_n19e5l_k$(tmp, tmp_0, VOID, BoxMeasurePolicy$measure$lambda);
    }
    var tmp_1;
    if (this.propagateMinConstraints_1) {
      tmp_1 = constraints;
    } else {
      // Inline function 'androidx.compose.ui.unit.Constraints.copyMaxDimensions' call
      tmp_1 = _Constraints___init__impl__v8ud31(bitwiseAnd(_Constraints___get_value__impl__3ah2ax(constraints), new Long(3, -2)));
    }
    var contentConstraints = tmp_1;
    if (measurables.get_size_woubt6_k$() === 1) {
      var measurable = measurables.get_c1px32_k$(0);
      var boxWidth;
      var boxHeight;
      var placeable;
      if (!get_matchesParentSize(measurable)) {
        placeable = measurable.measure_4dmfk1_k$(contentConstraints);
        var tmp0 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
        // Inline function 'kotlin.math.max' call
        var b = placeable.get_width_j0q4yl_k$();
        boxWidth = Math.max(tmp0, b);
        var tmp0_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
        // Inline function 'kotlin.math.max' call
        var b_0 = placeable.get_height_e7t92o_k$();
        boxHeight = Math.max(tmp0_0, b_0);
      } else {
        boxWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
        boxHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
        placeable = measurable.measure_4dmfk1_k$(Companion_getInstance_2().fixed_rd8fwx_k$(_Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_minHeight__impl__ev4bgx(constraints)));
      }
      return _this__u8e3s4.layout$default_n19e5l_k$(boxWidth, boxHeight, VOID, BoxMeasurePolicy$measure$lambda_0(placeable, measurable, _this__u8e3s4, boxWidth, boxHeight, this));
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.get_size_woubt6_k$();
    var placeables = Array(size);
    var hasMatchParentSizeChildren = false;
    var boxWidth_0 = {_v: _Constraints___get_minWidth__impl__hi9lfi(constraints)};
    var boxHeight_0 = {_v: _Constraints___get_minHeight__impl__ev4bgx(constraints)};
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    var inductionVariable = 0;
    var last = measurables.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = measurables.get_c1px32_k$(index);
        if (!get_matchesParentSize(item)) {
          var placeable_0 = item.measure_4dmfk1_k$(contentConstraints);
          placeables[index] = placeable_0;
          var tmp0_1 = boxWidth_0._v;
          // Inline function 'kotlin.math.max' call
          var b_1 = placeable_0.get_width_j0q4yl_k$();
          boxWidth_0._v = Math.max(tmp0_1, b_1);
          var tmp0_2 = boxHeight_0._v;
          // Inline function 'kotlin.math.max' call
          var b_2 = placeable_0.get_height_e7t92o_k$();
          boxHeight_0._v = Math.max(tmp0_2, b_2);
        } else {
          hasMatchParentSizeChildren = true;
        }
      }
       while (inductionVariable <= last);
    if (hasMatchParentSizeChildren) {
      var tmp0_minWidth = !(boxWidth_0._v === 2147483647) ? boxWidth_0._v : 0;
      var tmp1_minHeight = !(boxHeight_0._v === 2147483647) ? boxHeight_0._v : 0;
      var tmp2_maxWidth = boxWidth_0._v;
      var tmp3_maxHeight = boxHeight_0._v;
      var matchParentSizeConstraints = Constraints(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
      // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.get_c1px32_k$(index_0);
          if (get_matchesParentSize(item_0)) {
            placeables[index_0] = item_0.measure_4dmfk1_k$(matchParentSizeConstraints);
          }
        }
         while (inductionVariable_0 <= last_0);
    }
    var tmp_2 = boxWidth_0._v;
    var tmp_3 = boxHeight_0._v;
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp_2, tmp_3, VOID, BoxMeasurePolicy$measure$lambda_1(placeables, measurables, _this__u8e3s4, boxWidth_0, boxHeight_0, this));
  };
  protoOf(BoxMeasurePolicy).copy_rn860z_k$ = function (alignment, propagateMinConstraints) {
    return new BoxMeasurePolicy(alignment, propagateMinConstraints);
  };
  protoOf(BoxMeasurePolicy).copy$default_sj1k1e_k$ = function (alignment, propagateMinConstraints, $super) {
    alignment = alignment === VOID ? this.alignment_1 : alignment;
    propagateMinConstraints = propagateMinConstraints === VOID ? this.propagateMinConstraints_1 : propagateMinConstraints;
    return $super === VOID ? this.copy_rn860z_k$(alignment, propagateMinConstraints) : $super.copy_rn860z_k$.call(this, alignment, propagateMinConstraints);
  };
  protoOf(BoxMeasurePolicy).toString = function () {
    return 'BoxMeasurePolicy(alignment=' + toString_0(this.alignment_1) + ', propagateMinConstraints=' + this.propagateMinConstraints_1 + ')';
  };
  protoOf(BoxMeasurePolicy).hashCode = function () {
    var result = hashCode(this.alignment_1);
    result = imul(result, 31) + getBooleanHashCode(this.propagateMinConstraints_1) | 0;
    return result;
  };
  protoOf(BoxMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BoxMeasurePolicy))
      return false;
    if (!equals(this.alignment_1, other.alignment_1))
      return false;
    if (!(this.propagateMinConstraints_1 === other.propagateMinConstraints_1))
      return false;
    return true;
  };
  function maybeCachedBoxMeasurePolicy(alignment, propagateMinConstraints) {
    _init_properties_Box_kt__tvzvdl();
    var cache = propagateMinConstraints ? get_Cache1() : get_Cache2();
    var tmp0_elvis_lhs = cache.get_wei43m_k$(alignment);
    return tmp0_elvis_lhs == null ? new BoxMeasurePolicy(alignment, propagateMinConstraints) : tmp0_elvis_lhs;
  }
  function BoxScopeInstance$align$lambda($alignment) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.set_name_wkmnld_k$('align');
      _this__u8e3s4.set_value_rjqr2d_k$($alignment);
      return Unit_getInstance();
    };
  }
  function BoxScopeInstance$matchParentSize$lambda(_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('matchParentSize');
    return Unit_getInstance();
  }
  function BoxScopeInstance() {
    BoxScopeInstance_instance = this;
  }
  protoOf(BoxScopeInstance).align_uxv7cf_k$ = function (_this__u8e3s4, alignment) {
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = BoxScopeInstance$align$lambda(alignment);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.then_g5qrxq_k$(new BoxChildDataElement(alignment, false, tmp$ret$0));
  };
  protoOf(BoxScopeInstance).matchParentSize_g7jbar_k$ = function (_this__u8e3s4) {
    var tmp = Companion_getInstance().get_Center_3arb0i_k$();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp_0;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp_0 = BoxScopeInstance$matchParentSize$lambda;
    } else {
      tmp_0 = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp_0;
    return _this__u8e3s4.then_g5qrxq_k$(new BoxChildDataElement(tmp, true, tmp$ret$0));
  };
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    if (BoxScopeInstance_instance == null)
      new BoxScopeInstance();
    return BoxScopeInstance_instance;
  }
  function get_matchesParentSize(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.matchParentSize_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function placeInBox(_this__u8e3s4, placeable, measurable, layoutDirection, boxWidth, boxHeight, alignment) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(measurable);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.alignment_1;
    var childAlignment = tmp1_elvis_lhs == null ? alignment : tmp1_elvis_lhs;
    var tmp0 = placeable.get_width_j0q4yl_k$();
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = placeable.get_height_e7t92o_k$();
    var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    var tmp = _IntSize___init__impl__emcjft(tmp$ret$1);
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$3 = bitwiseOr(shiftLeft(fromInt(boxWidth), 32), bitwiseAnd(fromInt(boxHeight), new Long(-1, 0)));
    var tmp$ret$2 = _IntSize___init__impl__emcjft(tmp$ret$3);
    var position = childAlignment.align_mb8mzc_k$(tmp, tmp$ret$2, layoutDirection);
    _this__u8e3s4.place$default_dbzi3k_k$(placeable, position);
  }
  function BoxChildDataElement(alignment, matchParentSize, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.alignment_1 = alignment;
    this.matchParentSize_1 = matchParentSize;
    this.inspectorInfo_1 = inspectorInfo;
  }
  protoOf(BoxChildDataElement).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(BoxChildDataElement).get_matchParentSize_onsyh3_k$ = function () {
    return this.matchParentSize_1;
  };
  protoOf(BoxChildDataElement).get_inspectorInfo_jx2bdo_k$ = function () {
    return this.inspectorInfo_1;
  };
  protoOf(BoxChildDataElement).create_md4cuc_k$ = function () {
    return new BoxChildDataNode(this.alignment_1, this.matchParentSize_1);
  };
  protoOf(BoxChildDataElement).update_6wuvmq_k$ = function (node) {
    node.alignment_1 = this.alignment_1;
    node.matchParentSize_1 = this.matchParentSize_1;
  };
  protoOf(BoxChildDataElement).update_9wd57p_k$ = function (node) {
    return this.update_6wuvmq_k$(node instanceof BoxChildDataNode ? node : THROW_CCE());
  };
  protoOf(BoxChildDataElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    this.inspectorInfo_1(_this__u8e3s4);
  };
  protoOf(BoxChildDataElement).hashCode = function () {
    var result = hashCode(this.alignment_1);
    result = imul(31, result) + getBooleanHashCode(this.matchParentSize_1) | 0;
    return result;
  };
  protoOf(BoxChildDataElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof BoxChildDataElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.alignment_1, otherModifier.alignment_1) && this.matchParentSize_1 === otherModifier.matchParentSize_1;
  };
  function BoxChildDataNode(alignment, matchParentSize) {
    Node.call(this);
    this.alignment_1 = alignment;
    this.matchParentSize_1 = matchParentSize;
  }
  protoOf(BoxChildDataNode).set_alignment_b4ulsx_k$ = function (_set____db54di) {
    this.alignment_1 = _set____db54di;
  };
  protoOf(BoxChildDataNode).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(BoxChildDataNode).set_matchParentSize_u0byam_k$ = function (_set____db54di) {
    this.matchParentSize_1 = _set____db54di;
  };
  protoOf(BoxChildDataNode).get_matchParentSize_onsyh3_k$ = function () {
    return this.matchParentSize_1;
  };
  protoOf(BoxChildDataNode).modifyParentData_nittj_k$ = function (_this__u8e3s4, parentData) {
    return this;
  };
  function get_boxChildDataNode(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _this__u8e3s4.get_parentData_o87vnn_k$();
    return tmp instanceof BoxChildDataNode ? tmp : null;
  }
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).measure_xg9b01_k$ = function (_this__u8e3s4, measurables, constraints) {
    return this.function_1(_this__u8e3s4, measurables, new Constraints_0(constraints));
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, MeasurePolicy) : false) {
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
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function EmptyBoxMeasurePolicy$lambda($this$MeasurePolicy, _unused_var__etf5q3, constraints) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints.value_1);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints.value_1);
    return $this$MeasurePolicy.layout$default_n19e5l_k$(tmp, tmp_0, VOID, EmptyBoxMeasurePolicy$lambda$lambda);
  }
  function EmptyBoxMeasurePolicy$lambda$lambda($this$layout) {
    _init_properties_Box_kt__tvzvdl();
    return Unit_getInstance();
  }
  function Box$lambda($modifier, $$changed) {
    return function ($composer, $force) {
      Box_0($modifier, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var properties_initialized_Box_kt_kr8cbp;
  function _init_properties_Box_kt__tvzvdl() {
    if (!properties_initialized_Box_kt_kr8cbp) {
      properties_initialized_Box_kt_kr8cbp = true;
      Cache1 = cacheFor(true);
      Cache2 = cacheFor(false);
      DefaultBoxMeasurePolicy = new BoxMeasurePolicy(Companion_getInstance().get_TopStart_o4x792_k$(), false);
      var tmp = EmptyBoxMeasurePolicy$lambda;
      EmptyBoxMeasurePolicy = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp);
      androidx_compose_foundation_layout_BoxScopeInstance$stable = 0;
    }
  }
  function BoxWithConstraints(modifier, contentAlignment, propagateMinConstraints, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var contentAlignment_0 = {_v: contentAlignment};
    var propagateMinConstraints_0 = {_v: propagateMinConstraints};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(380139498);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(contentAlignment_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.changed_jpyyrz_k$(propagateMinConstraints_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 2048 : 1024);
    if ($composer_0.shouldExecute_4fplh_k$(!(($dirty & 1171) === 1170), $dirty & 1)) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (!(($default & 2) === 0)) {
        contentAlignment_0._v = Companion_getInstance().get_TopStart_o4x792_k$();
      }
      if (!(($default & 4) === 0)) {
        propagateMinConstraints_0._v = false;
      }
      var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment_0._v, propagateMinConstraints_0._v);
      var tmp = modifier_0._v;
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 7168) === 2048 | $composer_0.changed_ga7h3f_k$(measurePolicy));
      // Inline function 'kotlin.let' call
      var it = tmp0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_3().get_Empty_i9b85g_k$()) {
        var value = BoxWithConstraints$lambda(measurePolicy, content);
        tmp0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp$ret$0 = tmp_0;
      SubcomposeLayout(tmp, tmp$ret$0, $composer_0, 14 & $dirty, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(BoxWithConstraints$lambda_0(modifier_0, contentAlignment_0, propagateMinConstraints_0, content, $changed, $default));
    }
  }
  function BoxWithConstraintsScope() {
  }
  function _get_density__l5pazb($this) {
    return $this.density_1;
  }
  function component1_0($this) {
    return $this.density_1;
  }
  function BoxWithConstraintsScopeImpl(density, constraints) {
    this.$$delegate_0__1 = BoxScopeInstance_getInstance();
    this.density_1 = density;
    this.constraints_1 = constraints;
  }
  protoOf(BoxWithConstraintsScopeImpl).get_constraints_y0yfdk_k$ = function () {
    return this.constraints_1;
  };
  protoOf(BoxWithConstraintsScopeImpl).get_minWidth_3ut7ei_k$ = function () {
    // Inline function 'kotlin.with' call
    return this.density_1.toDp_fjakf4_k$(_Constraints___get_minWidth__impl__hi9lfi(this.constraints_1));
  };
  protoOf(BoxWithConstraintsScopeImpl).get_maxWidth_u7u2hk_k$ = function () {
    // Inline function 'kotlin.with' call
    var $this$with = this.density_1;
    return _Constraints___get_hasBoundedWidth__impl__7hd0wr(this.constraints_1) ? $this$with.toDp_fjakf4_k$(_Constraints___get_maxWidth__impl__uuyqc(this.constraints_1)) : Companion_getInstance_4().get_Infinity_kvyweq_k$();
  };
  protoOf(BoxWithConstraintsScopeImpl).get_minHeight_lqlp2r_k$ = function () {
    // Inline function 'kotlin.with' call
    return this.density_1.toDp_fjakf4_k$(_Constraints___get_minHeight__impl__ev4bgx(this.constraints_1));
  };
  protoOf(BoxWithConstraintsScopeImpl).get_maxHeight_cjye1t_k$ = function () {
    // Inline function 'kotlin.with' call
    var $this$with = this.density_1;
    return _Constraints___get_hasBoundedHeight__impl__bsh4rw(this.constraints_1) ? $this$with.toDp_fjakf4_k$(_Constraints___get_maxHeight__impl__dt3e8z(this.constraints_1)) : Companion_getInstance_4().get_Infinity_kvyweq_k$();
  };
  protoOf(BoxWithConstraintsScopeImpl).component2_ovt9ao_k$ = function () {
    return this.constraints_1;
  };
  protoOf(BoxWithConstraintsScopeImpl).copy_y7g1dc_k$ = function (density, constraints) {
    return new BoxWithConstraintsScopeImpl(density, constraints);
  };
  protoOf(BoxWithConstraintsScopeImpl).copy$default_4q4pgw_k$ = function (density, constraints, $super) {
    density = density === VOID ? this.density_1 : density;
    constraints = constraints === VOID ? this.constraints_1 : constraints;
    return $super === VOID ? this.copy_y7g1dc_k$(density, constraints) : $super.copy_y7g1dc_k$.call(this, density, new Constraints_0(constraints));
  };
  protoOf(BoxWithConstraintsScopeImpl).toString = function () {
    return 'BoxWithConstraintsScopeImpl(density=' + toString_0(this.density_1) + ', constraints=' + Constraints__toString_impl_37yskr(this.constraints_1) + ')';
  };
  protoOf(BoxWithConstraintsScopeImpl).hashCode = function () {
    var result = hashCode(this.density_1);
    result = imul(result, 31) + Constraints__hashCode_impl_ij7484(this.constraints_1) | 0;
    return result;
  };
  protoOf(BoxWithConstraintsScopeImpl).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BoxWithConstraintsScopeImpl))
      return false;
    if (!equals(this.density_1, other.density_1))
      return false;
    if (!equals(new Constraints_0(this.constraints_1), new Constraints_0(other.constraints_1)))
      return false;
    return true;
  };
  protoOf(BoxWithConstraintsScopeImpl).align_uxv7cf_k$ = function (_this__u8e3s4, alignment) {
    return this.$$delegate_0__1.align_uxv7cf_k$(_this__u8e3s4, alignment);
  };
  protoOf(BoxWithConstraintsScopeImpl).matchParentSize_g7jbar_k$ = function (_this__u8e3s4) {
    return this.$$delegate_0__1.matchParentSize_g7jbar_k$(_this__u8e3s4);
  };
  function ComposableLambda$invoke$ref(p0) {
    return constructCallableReference(function (p0_0, p1) {
      p0.invoke_z8di7s_k$(p0_0, p1);
      return Unit_getInstance();
    }, 2, 0, 'androidx.compose.runtime.internal/ComposableLambda.invoke|invoke(androidx.compose.runtime.Composer;kotlin.Int){}[0]', VOID, [p0]);
  }
  function BoxWithConstraints$lambda$lambda($content, $scope) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.shouldExecute_4fplh_k$(!(($changed & 3) === 2), $changed & 1)) {
        tmp = $content($scope, $composer_0, 0);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function BoxWithConstraints$lambda($measurePolicy, $content) {
    return function ($this$SubcomposeLayout, constraints) {
      var scope = new BoxWithConstraintsScopeImpl($this$SubcomposeLayout, constraints.value_1);
      var measurables = $this$SubcomposeLayout.subcompose_c0wkc9_k$(Unit_getInstance(), ComposableLambda$invoke$ref(composableLambdaInstance(-431986394, true, BoxWithConstraints$lambda$lambda($content, scope))));
      // Inline function 'kotlin.with' call
      return $measurePolicy.measure_xg9b01_k$($this$SubcomposeLayout, measurables, constraints.value_1);
    };
  }
  function BoxWithConstraints$lambda_0($modifier, $contentAlignment, $propagateMinConstraints, $content, $$changed, $$default) {
    return function ($composer, $force) {
      BoxWithConstraints($modifier._v, $contentAlignment._v, $propagateMinConstraints._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function get_DefaultColumnMeasurePolicy() {
    _init_properties_Column_kt__s1zb92();
    return DefaultColumnMeasurePolicy;
  }
  var DefaultColumnMeasurePolicy;
  var androidx_compose_foundation_layout_ColumnMeasurePolicy$stable;
  var androidx_compose_foundation_layout_ColumnScopeInstance$stable;
  function Column(modifier, verticalArrangement, horizontalAlignment, content, $composer, $changed, $default) {
    _init_properties_Column_kt__s1zb92();
    var modifier_0 = modifier;
    var verticalArrangement_0 = verticalArrangement;
    var horizontalAlignment_0 = horizontalAlignment;
    var $composer_0 = $composer;
    if (!(($default & 1) === 0))
      modifier_0 = Companion_getInstance_0();
    if (!(($default & 2) === 0))
      verticalArrangement_0 = Arrangement_getInstance().get_Top_18jj1w_k$();
    if (!(($default & 4) === 0))
      horizontalAlignment_0 = Companion_getInstance().get_Start_ih4i6x_k$();
    var measurePolicy = columnMeasurePolicy(verticalArrangement_0, horizontalAlignment_0, $composer_0, 14 & $changed >> 3 | 112 & $changed >> 3);
    // Inline function 'androidx.compose.ui.layout.Layout' call
    var modifier_1 = modifier_0;
    var $composer_1 = $composer_0;
    if (!((0 & 2) === 0))
      modifier_1 = Companion_getInstance_0();
    var compositeKeyHash = get_currentCompositeKeyHashCode($composer_1, 0).hashCode();
    var localMap = $composer_1.get_currentCompositionLocalMap_fmcf79_k$();
    var materialized = materialize($composer_1, modifier_1);
    var tmp0 = Companion_getInstance_1().get_Constructor_f7ieep_k$();
    // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
    var $composer_2 = $composer_1;
    var tmp = $composer_2.get_applier_bupu8u_k$();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_2.startReusableNode_jjgeyp_k$();
    if ($composer_2.get_inserting_25mlsw_k$()) {
      $composer_2.createNode_ahrd54_k$(tmp0);
    } else {
      $composer_2.useNode_io5s9l_k$();
    }
    var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
    Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().get_SetResolvedCompositionLocals_rc2u9t_k$());
    Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_1().get_SetCompositeKeyHash_n8lgg1_k$());
    Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_1().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
    Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().get_SetModifier_6tz580_k$());
    var $composer_3 = $composer_2;
    content(ColumnScopeInstance_getInstance(), $composer_3, 6 | 112 & $changed >> 6);
    $composer_2.endNode_3m0yfn_k$();
  }
  function ColumnScope() {
  }
  function _get_verticalArrangement__8o51lp($this) {
    return $this.verticalArrangement_1;
  }
  function _get_horizontalAlignment__hyzxw2($this) {
    return $this.horizontalAlignment_1;
  }
  function getCrossAxisPosition($this, placeable, parentData, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, layoutDirection) {
    var childCrossAlignment = parentData == null ? null : parentData.get_crossAxisAlignment_ebqiz9_k$();
    var tmp2_elvis_lhs = childCrossAlignment == null ? null : childCrossAlignment.align_aa0s5b_k$(crossAxisLayoutSize, $this.crossAxisSize_2m3wdq_k$(placeable), layoutDirection, placeable, beforeCrossAxisAlignmentLine);
    return tmp2_elvis_lhs == null ? $this.horizontalAlignment_1.align_y7fd6v_k$($this.crossAxisSize_2m3wdq_k$(placeable), crossAxisLayoutSize, layoutDirection) : tmp2_elvis_lhs;
  }
  function component1_1($this) {
    return $this.verticalArrangement_1;
  }
  function component2_0($this) {
    return $this.horizontalAlignment_1;
  }
  function ColumnMeasurePolicy$placeHelper$lambda($placeables, this$0, $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $measureScope, $mainAxisPositions) {
    return function ($this$layout) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var crossAxisPosition = getCrossAxisPosition(this$0, ensureNotNull(item), get_rowColumnParentData(item), $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $measureScope.get_layoutDirection_7e37v0_k$());
        $this$layout.place$default_61faqz_k$(item, crossAxisPosition, $mainAxisPositions[_unary__edvuaz]);
      }
      return Unit_getInstance();
    };
  }
  function ColumnMeasurePolicy(verticalArrangement, horizontalAlignment) {
    this.verticalArrangement_1 = verticalArrangement;
    this.horizontalAlignment_1 = horizontalAlignment;
  }
  protoOf(ColumnMeasurePolicy).mainAxisSize_q9nnsp_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_height_e7t92o_k$();
  };
  protoOf(ColumnMeasurePolicy).crossAxisSize_2m3wdq_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_width_j0q4yl_k$();
  };
  protoOf(ColumnMeasurePolicy).populateMainAxisPositions_z5r5pw_k$ = function (mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    // Inline function 'kotlin.with' call
    this.verticalArrangement_1.arrange_1pnoh8_k$(measureScope, mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions);
  };
  protoOf(ColumnMeasurePolicy).placeHelper_9ldirp_k$ = function (placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex) {
    // Inline function 'kotlin.with' call
    return measureScope.layout$default_n19e5l_k$(crossAxisLayoutSize, mainAxisLayoutSize, VOID, ColumnMeasurePolicy$placeHelper$lambda(placeables, this, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, measureScope, mainAxisPositions));
  };
  protoOf(ColumnMeasurePolicy).createConstraints_abox2e_k$ = function (mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) {
    return createColumnConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax);
  };
  protoOf(ColumnMeasurePolicy).measure_xg9b01_k$ = function (_this__u8e3s4, measurables, constraints) {
    var tmp = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp_1 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var tmp_2 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_3 = _this__u8e3s4.roundToPx_yb7vg8_k$(this.verticalArrangement_1.get_spacing_zb7agn_k$());
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.get_size_woubt6_k$();
    var tmp$ret$0 = Array(size);
    return measure(this, tmp, tmp_0, tmp_1, tmp_2, tmp_3, _this__u8e3s4, measurables, tmp$ret$0, 0, measurables.get_size_woubt6_k$());
  };
  protoOf(ColumnMeasurePolicy).minIntrinsicWidth_dwfcse_k$ = function (_this__u8e3s4, measurables, height) {
    return IntrinsicMeasureBlocks_getInstance().VerticalMinWidth_nd8iv_k$(measurables, height, _this__u8e3s4.roundToPx_yb7vg8_k$(this.verticalArrangement_1.get_spacing_zb7agn_k$()));
  };
  protoOf(ColumnMeasurePolicy).minIntrinsicHeight_xlhgwn_k$ = function (_this__u8e3s4, measurables, width) {
    return IntrinsicMeasureBlocks_getInstance().VerticalMinHeight_x1j23k_k$(measurables, width, _this__u8e3s4.roundToPx_yb7vg8_k$(this.verticalArrangement_1.get_spacing_zb7agn_k$()));
  };
  protoOf(ColumnMeasurePolicy).maxIntrinsicWidth_cx7ze4_k$ = function (_this__u8e3s4, measurables, height) {
    return IntrinsicMeasureBlocks_getInstance().VerticalMaxWidth_ycc5uz_k$(measurables, height, _this__u8e3s4.roundToPx_yb7vg8_k$(this.verticalArrangement_1.get_spacing_zb7agn_k$()));
  };
  protoOf(ColumnMeasurePolicy).maxIntrinsicHeight_3a4xm1_k$ = function (_this__u8e3s4, measurables, width) {
    return IntrinsicMeasureBlocks_getInstance().VerticalMaxHeight_drchte_k$(measurables, width, _this__u8e3s4.roundToPx_yb7vg8_k$(this.verticalArrangement_1.get_spacing_zb7agn_k$()));
  };
  protoOf(ColumnMeasurePolicy).copy_btg6p0_k$ = function (verticalArrangement, horizontalAlignment) {
    return new ColumnMeasurePolicy(verticalArrangement, horizontalAlignment);
  };
  protoOf(ColumnMeasurePolicy).copy$default_2g139s_k$ = function (verticalArrangement, horizontalAlignment, $super) {
    verticalArrangement = verticalArrangement === VOID ? this.verticalArrangement_1 : verticalArrangement;
    horizontalAlignment = horizontalAlignment === VOID ? this.horizontalAlignment_1 : horizontalAlignment;
    return $super === VOID ? this.copy_btg6p0_k$(verticalArrangement, horizontalAlignment) : $super.copy_btg6p0_k$.call(this, verticalArrangement, horizontalAlignment);
  };
  protoOf(ColumnMeasurePolicy).toString = function () {
    return 'ColumnMeasurePolicy(verticalArrangement=' + toString_0(this.verticalArrangement_1) + ', horizontalAlignment=' + toString_0(this.horizontalAlignment_1) + ')';
  };
  protoOf(ColumnMeasurePolicy).hashCode = function () {
    var result = hashCode(this.verticalArrangement_1);
    result = imul(result, 31) + hashCode(this.horizontalAlignment_1) | 0;
    return result;
  };
  protoOf(ColumnMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColumnMeasurePolicy))
      return false;
    if (!equals(this.verticalArrangement_1, other.verticalArrangement_1))
      return false;
    if (!equals(this.horizontalAlignment_1, other.horizontalAlignment_1))
      return false;
    return true;
  };
  function columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer, $changed) {
    _init_properties_Column_kt__s1zb92();
    var $composer_0 = $composer;
    var tmp;
    if (equals(verticalArrangement, Arrangement_getInstance().get_Top_18jj1w_k$()) && equals(horizontalAlignment, Companion_getInstance().get_Start_ih4i6x_k$())) {
      $composer_0.startReplaceGroup_5hh8aj_k$(-1446604504);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp = get_DefaultColumnMeasurePolicy();
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(-1446550657);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(verticalArrangement) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.changed_ga7h3f_k$(horizontalAlignment) || ($changed & 48) === 32));
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_3().get_Empty_i9b85g_k$()) {
        var value = new ColumnMeasurePolicy(verticalArrangement, horizontalAlignment);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp1_group = tmp_0;
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp = tmp1_group;
    }
    return tmp;
  }
  function sam$androidx_compose_foundation_layout_AlignmentLineProviderBlock$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_layout_AlignmentLineProviderBlock$0).calculateAlignmentLinePosition_3ovdt7_k$ = function (measured) {
    return this.function_1(measured);
  };
  protoOf(sam$androidx_compose_foundation_layout_AlignmentLineProviderBlock$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_foundation_layout_AlignmentLineProviderBlock$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, AlignmentLineProviderBlock) : false) {
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
  protoOf(sam$androidx_compose_foundation_layout_AlignmentLineProviderBlock$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function ColumnScopeInstance$alignBy$lambda($alignmentLineBlock) {
    return function (it) {
      return $alignmentLineBlock(it);
    };
  }
  function ColumnScopeInstance() {
    ColumnScopeInstance_instance = this;
  }
  protoOf(ColumnScopeInstance).weight_9ecvc_k$ = function (_this__u8e3s4, weight, fill) {
    // Inline function 'androidx.compose.foundation.layout.internal.requirePrecondition' call
    if (!(weight > 0.0)) {
      var tmp$ret$1 = 'invalid weight; must be greater than zero';
      throwIllegalArgumentException(tmp$ret$1);
    }
    return _this__u8e3s4.then_g5qrxq_k$(new LayoutWeightElement(coerceAtMost(weight, 3.4028235E38), fill));
  };
  protoOf(ColumnScopeInstance).align_92hj17_k$ = function (_this__u8e3s4, alignment) {
    return _this__u8e3s4.then_g5qrxq_k$(new HorizontalAlignElement(alignment));
  };
  protoOf(ColumnScopeInstance).alignBy_j8kgee_k$ = function (_this__u8e3s4, alignmentLine) {
    return _this__u8e3s4.then_g5qrxq_k$(new WithAlignmentLineElement(alignmentLine));
  };
  protoOf(ColumnScopeInstance).alignBy_u3ww9h_k$ = function (_this__u8e3s4, alignmentLineBlock) {
    var tmp = ColumnScopeInstance$alignBy$lambda(alignmentLineBlock);
    return _this__u8e3s4.then_g5qrxq_k$(new WithAlignmentLineBlockElement(new sam$androidx_compose_foundation_layout_AlignmentLineProviderBlock$0(tmp)));
  };
  var ColumnScopeInstance_instance;
  function ColumnScopeInstance_getInstance() {
    if (ColumnScopeInstance_instance == null)
      new ColumnScopeInstance();
    return ColumnScopeInstance_instance;
  }
  function createColumnConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax) {
    _init_properties_Column_kt__s1zb92();
    var tmp;
    if (!isPrioritizing) {
      tmp = Constraints(crossAxisMin, crossAxisMax, mainAxisMin, mainAxisMax);
    } else {
      tmp = Companion_getInstance_2().fitPrioritizingHeight_cdcbfz_k$(crossAxisMin, crossAxisMax, mainAxisMin, mainAxisMax);
    }
    return tmp;
  }
  var properties_initialized_Column_kt_nm4x4;
  function _init_properties_Column_kt__s1zb92() {
    if (!properties_initialized_Column_kt_nm4x4) {
      properties_initialized_Column_kt_nm4x4 = true;
      DefaultColumnMeasurePolicy = new ColumnMeasurePolicy(Arrangement_getInstance().get_Top_18jj1w_k$(), Companion_getInstance().get_Start_ih4i6x_k$());
      androidx_compose_foundation_layout_ColumnMeasurePolicy$stable = 0;
      androidx_compose_foundation_layout_ColumnScopeInstance$stable = 0;
    }
  }
  var androidx_compose_foundation_layout_ComposeFoundationLayoutFlags$stable;
  var androidx_compose_foundation_layout_ContextualFlowRowScopeImpl$stable;
  var androidx_compose_foundation_layout_ContextualFlowColumnScopeImpl$stable;
  var androidx_compose_foundation_layout_ContextualFlowRowOverflowScopeImpl$stable;
  var androidx_compose_foundation_layout_ContextualFlowColumnOverflowScopeImpl$stable;
  var androidx_compose_foundation_layout_ContextualFlowItemIterator$stable;
  var androidx_compose_foundation_layout_FlowLineInfo$stable;
  function ExperimentalGridApi() {
  }
  protoOf(ExperimentalGridApi).equals = function (other) {
    if (!(other instanceof ExperimentalGridApi))
      return false;
    other instanceof ExperimentalGridApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalGridApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalGridApi).toString = function () {
    return '@androidx.compose.foundation.layout.ExperimentalGridApi(' + ')';
  };
  function ExperimentalLayoutApi() {
  }
  protoOf(ExperimentalLayoutApi).equals = function (other) {
    if (!(other instanceof ExperimentalLayoutApi))
      return false;
    other instanceof ExperimentalLayoutApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalLayoutApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalLayoutApi).toString = function () {
    return '@androidx.compose.foundation.layout.ExperimentalLayoutApi(' + ')';
  };
  function get_DefaultDensity() {
    _init_properties_FlexBox_kt__u9e7kw();
    return DefaultDensity;
  }
  var DefaultDensity;
  var androidx_compose_foundation_layout_FlexBoxScopeInstance$stable;
  var androidx_compose_foundation_layout_FlexBoxChildElement$stable;
  var androidx_compose_foundation_layout_FlexBoxChildDataNode$stable;
  var androidx_compose_foundation_layout_ResolvedFlexBoxConfig$stable;
  var androidx_compose_foundation_layout_ResolvedFlexItemInfo$stable;
  var androidx_compose_foundation_layout_CombinedFlexBoxConfig$stable;
  var androidx_compose_foundation_layout_CombinedFlexConfig$stable;
  function DefaultDensity$1() {
    this.density_1 = 1.0;
    this.fontScale_1 = 1.0;
  }
  protoOf(DefaultDensity$1).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(DefaultDensity$1).get_fontScale_h56n3i_k$ = function () {
    return this.fontScale_1;
  };
  var properties_initialized_FlexBox_kt_6qryyq;
  function _init_properties_FlexBox_kt__u9e7kw() {
    if (!properties_initialized_FlexBox_kt_6qryyq) {
      properties_initialized_FlexBox_kt_6qryyq = true;
      DefaultDensity = new DefaultDensity$1();
      androidx_compose_foundation_layout_FlexBoxScopeInstance$stable = 0;
      androidx_compose_foundation_layout_FlexBoxChildElement$stable = 0;
      androidx_compose_foundation_layout_FlexBoxChildDataNode$stable = 8;
      androidx_compose_foundation_layout_ResolvedFlexBoxConfig$stable = 0;
      androidx_compose_foundation_layout_ResolvedFlexItemInfo$stable = 0;
      androidx_compose_foundation_layout_CombinedFlexBoxConfig$stable = 0;
      androidx_compose_foundation_layout_CombinedFlexConfig$stable = 0;
    }
  }
  function get_CROSS_AXIS_ALIGNMENT_TOP() {
    _init_properties_FlowLayout_kt__ftkyso();
    return CROSS_AXIS_ALIGNMENT_TOP;
  }
  var CROSS_AXIS_ALIGNMENT_TOP;
  function get_CROSS_AXIS_ALIGNMENT_START() {
    _init_properties_FlowLayout_kt__ftkyso();
    return CROSS_AXIS_ALIGNMENT_START;
  }
  var CROSS_AXIS_ALIGNMENT_START;
  var androidx_compose_foundation_layout_FlowRowScopeInstance$stable;
  var androidx_compose_foundation_layout_FlowRowOverflowScopeImpl$stable;
  var androidx_compose_foundation_layout_FlowColumnOverflowScopeImpl$stable;
  var androidx_compose_foundation_layout_FlowColumnScopeInstance$stable;
  var androidx_compose_foundation_layout_FlowLayoutData$stable;
  var androidx_compose_foundation_layout_FillCrossAxisSizeNode$stable;
  var androidx_compose_foundation_layout_FillCrossAxisSizeElement$stable;
  function FlowLayoutData(fillCrossAxisFraction) {
    this.fillCrossAxisFraction_1 = fillCrossAxisFraction;
  }
  protoOf(FlowLayoutData).set_fillCrossAxisFraction_8h96h1_k$ = function (_set____db54di) {
    this.fillCrossAxisFraction_1 = _set____db54di;
  };
  protoOf(FlowLayoutData).get_fillCrossAxisFraction_cbepx3_k$ = function () {
    return this.fillCrossAxisFraction_1;
  };
  protoOf(FlowLayoutData).component1_7eebsc_k$ = function () {
    return this.fillCrossAxisFraction_1;
  };
  protoOf(FlowLayoutData).copy_s06gv7_k$ = function (fillCrossAxisFraction) {
    return new FlowLayoutData(fillCrossAxisFraction);
  };
  protoOf(FlowLayoutData).copy$default_3i4fnw_k$ = function (fillCrossAxisFraction, $super) {
    fillCrossAxisFraction = fillCrossAxisFraction === VOID ? this.fillCrossAxisFraction_1 : fillCrossAxisFraction;
    return $super === VOID ? this.copy_s06gv7_k$(fillCrossAxisFraction) : $super.copy_s06gv7_k$.call(this, fillCrossAxisFraction);
  };
  protoOf(FlowLayoutData).toString = function () {
    return 'FlowLayoutData(fillCrossAxisFraction=' + this.fillCrossAxisFraction_1 + ')';
  };
  protoOf(FlowLayoutData).hashCode = function () {
    return getNumberHashCode(this.fillCrossAxisFraction_1);
  };
  protoOf(FlowLayoutData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlowLayoutData))
      return false;
    if (!equals(this.fillCrossAxisFraction_1, other.fillCrossAxisFraction_1))
      return false;
    return true;
  };
  var properties_initialized_FlowLayout_kt_edjldy;
  function _init_properties_FlowLayout_kt__ftkyso() {
    if (!properties_initialized_FlowLayout_kt_edjldy) {
      properties_initialized_FlowLayout_kt_edjldy = true;
      CROSS_AXIS_ALIGNMENT_TOP = Companion_getInstance_8().vertical_75z78f_k$(Companion_getInstance().get_Top_18jj1w_k$());
      CROSS_AXIS_ALIGNMENT_START = Companion_getInstance_8().horizontal_qgwvz5_k$(Companion_getInstance().get_Start_ih4i6x_k$());
      androidx_compose_foundation_layout_FlowRowScopeInstance$stable = 0;
      androidx_compose_foundation_layout_FlowRowOverflowScopeImpl$stable = 0;
      androidx_compose_foundation_layout_FlowColumnOverflowScopeImpl$stable = 0;
      androidx_compose_foundation_layout_FlowColumnScopeInstance$stable = 0;
      androidx_compose_foundation_layout_FlowLayoutData$stable = 8;
      androidx_compose_foundation_layout_FillCrossAxisSizeNode$stable = 8;
      androidx_compose_foundation_layout_FillCrossAxisSizeElement$stable = 0;
    }
  }
  var androidx_compose_foundation_layout_FlowLayoutBuildingBlocks_WrapInfo$stable;
  var androidx_compose_foundation_layout_FlowLayoutBuildingBlocks_WrapEllipsisInfo$stable;
  var androidx_compose_foundation_layout_FlowLayoutBuildingBlocks$stable;
  var androidx_compose_foundation_layout_FlowRowOverflow$stable;
  var androidx_compose_foundation_layout_FlowColumnOverflow$stable;
  var androidx_compose_foundation_layout_ContextualFlowRowOverflow$stable;
  var androidx_compose_foundation_layout_ContextualFlowColumnOverflow$stable;
  var androidx_compose_foundation_layout_FlowLayoutOverflow$stable;
  var androidx_compose_foundation_layout_FlowLayoutOverflowState$stable;
  function get_GridItemsComparator() {
    _init_properties_Grid_kt__s3o6ca();
    return GridItemsComparator;
  }
  var GridItemsComparator;
  var androidx_compose_foundation_layout_GridScopeInstance$stable;
  var androidx_compose_foundation_layout_GridMeasurePolicy$stable;
  function GridItem(measurable, row, column, rowSpan, columnSpan, alignment, placeable, offsetX, offsetY) {
    placeable = placeable === VOID ? null : placeable;
    offsetX = offsetX === VOID ? 0 : offsetX;
    offsetY = offsetY === VOID ? 0 : offsetY;
    this.measurable_1 = measurable;
    this.row_1 = row;
    this.column_1 = column;
    this.rowSpan_1 = rowSpan;
    this.columnSpan_1 = columnSpan;
    this.alignment_1 = alignment;
    this.placeable_1 = placeable;
    this.offsetX_1 = offsetX;
    this.offsetY_1 = offsetY;
  }
  protoOf(GridItem).get_measurable_axoh8q_k$ = function () {
    return this.measurable_1;
  };
  protoOf(GridItem).set_row_c83mad_k$ = function (_set____db54di) {
    this.row_1 = _set____db54di;
  };
  protoOf(GridItem).get_row_18iwsv_k$ = function () {
    return this.row_1;
  };
  protoOf(GridItem).set_column_1qqbf9_k$ = function (_set____db54di) {
    this.column_1 = _set____db54di;
  };
  protoOf(GridItem).get_column_c05ahr_k$ = function () {
    return this.column_1;
  };
  protoOf(GridItem).set_rowSpan_ep6ybl_k$ = function (_set____db54di) {
    this.rowSpan_1 = _set____db54di;
  };
  protoOf(GridItem).get_rowSpan_o71xsr_k$ = function () {
    return this.rowSpan_1;
  };
  protoOf(GridItem).set_columnSpan_k7l9lh_k$ = function (_set____db54di) {
    this.columnSpan_1 = _set____db54di;
  };
  protoOf(GridItem).get_columnSpan_g1au6h_k$ = function () {
    return this.columnSpan_1;
  };
  protoOf(GridItem).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(GridItem).set_placeable_eqmbf5_k$ = function (_set____db54di) {
    this.placeable_1 = _set____db54di;
  };
  protoOf(GridItem).get_placeable_wvc2iw_k$ = function () {
    return this.placeable_1;
  };
  protoOf(GridItem).set_offsetX_s6aw5c_k$ = function (_set____db54di) {
    this.offsetX_1 = _set____db54di;
  };
  protoOf(GridItem).get_offsetX_ocbsn8_k$ = function () {
    return this.offsetX_1;
  };
  protoOf(GridItem).set_offsetY_6pd0bl_k$ = function (_set____db54di) {
    this.offsetY_1 = _set____db54di;
  };
  protoOf(GridItem).get_offsetY_ocbsn7_k$ = function () {
    return this.offsetY_1;
  };
  function sam$kotlin_Comparator$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function GridItemsComparator$lambda(a, b) {
    _init_properties_Grid_kt__s3o6ca();
    var rowCompare = compareTo(a.row_1, b.row_1);
    return !(rowCompare === 0) ? rowCompare : compareTo(a.column_1, b.column_1);
  }
  var properties_initialized_Grid_kt_7qunnc;
  function _init_properties_Grid_kt__s3o6ca() {
    if (!properties_initialized_Grid_kt_7qunnc) {
      properties_initialized_Grid_kt_7qunnc = true;
      var tmp = GridItemsComparator$lambda;
      GridItemsComparator = new sam$kotlin_Comparator$0(tmp);
      androidx_compose_foundation_layout_GridScopeInstance$stable = 0;
      androidx_compose_foundation_layout_GridMeasurePolicy$stable = 0;
    }
  }
  function width(_this__u8e3s4, intrinsicSize) {
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = width$lambda(intrinsicSize);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.then_g5qrxq_k$(new IntrinsicWidthElement(intrinsicSize, true, tmp$ret$0));
  }
  var static_init_called;
  function static_init() {
    if (static_init_called)
      return Unit_getInstance();
    static_init_called = true;
    IntrinsicSize_Min_instance = new IntrinsicSize('Min', 0);
    IntrinsicSize_Max_instance = new IntrinsicSize('Max', 1);
  }
  var IntrinsicSize_Min_instance;
  var IntrinsicSize_Max_instance;
  function values() {
    static_init();
    return [IntrinsicSize_Min_getInstance(), IntrinsicSize_Max_getInstance()];
  }
  function valueOf(value) {
    static_init();
    switch (value) {
      case 'Min':
        return IntrinsicSize_Min_getInstance();
      case 'Max':
        return IntrinsicSize_Max_getInstance();
      default:
        THROW_IAE('No enum constant androidx.compose.foundation.layout.IntrinsicSize.' + value);
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
  function IntrinsicSize(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function IntrinsicWidthElement(width, enforceIncoming, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.width_1 = width;
    this.enforceIncoming_1 = enforceIncoming;
    this.inspectorInfo_1 = inspectorInfo;
  }
  protoOf(IntrinsicWidthElement).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(IntrinsicWidthElement).get_enforceIncoming_ilwx4x_k$ = function () {
    return this.enforceIncoming_1;
  };
  protoOf(IntrinsicWidthElement).get_inspectorInfo_jx2bdo_k$ = function () {
    return this.inspectorInfo_1;
  };
  protoOf(IntrinsicWidthElement).create_md4cuc_k$ = function () {
    return new IntrinsicWidthNode(this.width_1, this.enforceIncoming_1);
  };
  protoOf(IntrinsicWidthElement).update_gcdo1g_k$ = function (node) {
    node.width_1 = this.width_1;
    node.enforceIncoming_1 = this.enforceIncoming_1;
  };
  protoOf(IntrinsicWidthElement).update_9wd57p_k$ = function (node) {
    return this.update_gcdo1g_k$(node instanceof IntrinsicWidthNode ? node : THROW_CCE());
  };
  protoOf(IntrinsicWidthElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof IntrinsicWidthElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifierElement = tmp;
    return this.width_1.equals(otherModifierElement.width_1) && this.enforceIncoming_1 === otherModifierElement.enforceIncoming_1;
  };
  protoOf(IntrinsicWidthElement).hashCode = function () {
    return imul(31, this.width_1.hashCode()) + getBooleanHashCode(this.enforceIncoming_1) | 0;
  };
  protoOf(IntrinsicWidthElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    this.inspectorInfo_1(_this__u8e3s4);
  };
  function IntrinsicWidthNode(width, enforceIncoming) {
    IntrinsicSizeModifier.call(this);
    this.width_1 = width;
    this.enforceIncoming_1 = enforceIncoming;
  }
  protoOf(IntrinsicWidthNode).set_width_7bmmz7_k$ = function (_set____db54di) {
    this.width_1 = _set____db54di;
  };
  protoOf(IntrinsicWidthNode).get_width_j0q4yl_k$ = function () {
    return this.width_1;
  };
  protoOf(IntrinsicWidthNode).set_enforceIncoming_qike0a_k$ = function (_set____db54di) {
    this.enforceIncoming_1 = _set____db54di;
  };
  protoOf(IntrinsicWidthNode).get_enforceIncoming_ilwx4x_k$ = function () {
    return this.enforceIncoming_1;
  };
  protoOf(IntrinsicWidthNode).calculateContentConstraints_p67blf_k$ = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    if (this.width_1.equals(IntrinsicSize_Min_getInstance())) {
      tmp = measurable.minIntrinsicWidth_jyhjuj_k$(_Constraints___get_maxHeight__impl__dt3e8z(constraints));
    } else {
      tmp = measurable.maxIntrinsicWidth_b8umbx_k$(_Constraints___get_maxHeight__impl__dt3e8z(constraints));
    }
    var measuredWidth = tmp;
    if (measuredWidth < 0) {
      measuredWidth = 0;
    }
    return Companion_getInstance_2().fixedWidth_sctdsx_k$(measuredWidth);
  };
  protoOf(IntrinsicWidthNode).minIntrinsicWidth_nsvhwg_k$ = function (_this__u8e3s4, measurable, height) {
    return this.width_1.equals(IntrinsicSize_Min_getInstance()) ? measurable.minIntrinsicWidth_jyhjuj_k$(height) : measurable.maxIntrinsicWidth_b8umbx_k$(height);
  };
  protoOf(IntrinsicWidthNode).maxIntrinsicWidth_epsb1u_k$ = function (_this__u8e3s4, measurable, height) {
    return this.width_1.equals(IntrinsicSize_Min_getInstance()) ? measurable.minIntrinsicWidth_jyhjuj_k$(height) : measurable.maxIntrinsicWidth_b8umbx_k$(height);
  };
  function IntrinsicSizeModifier$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.placeRelative$default_hx4h58_k$($placeable, Companion_getInstance_5().get_Zero_6hc3i8_k$());
      return Unit_getInstance();
    };
  }
  function IntrinsicSizeModifier() {
    Node.call(this);
  }
  protoOf(IntrinsicSizeModifier).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var contentConstraints = this.calculateContentConstraints_p67blf_k$(_this__u8e3s4, measurable, constraints);
    var placeable = measurable.measure_4dmfk1_k$(this.get_enforceIncoming_ilwx4x_k$() ? constrain(constraints, contentConstraints) : contentConstraints);
    var tmp = placeable.get_width_j0q4yl_k$();
    var tmp_0 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp, tmp_0, VOID, IntrinsicSizeModifier$measure$lambda(placeable));
  };
  protoOf(IntrinsicSizeModifier).minIntrinsicWidth_nsvhwg_k$ = function (_this__u8e3s4, measurable, height) {
    return measurable.minIntrinsicWidth_jyhjuj_k$(height);
  };
  protoOf(IntrinsicSizeModifier).minIntrinsicHeight_xt6ly1_k$ = function (_this__u8e3s4, measurable, width) {
    return measurable.minIntrinsicHeight_p2a4ou_k$(width);
  };
  protoOf(IntrinsicSizeModifier).maxIntrinsicWidth_epsb1u_k$ = function (_this__u8e3s4, measurable, height) {
    return measurable.maxIntrinsicWidth_b8umbx_k$(height);
  };
  protoOf(IntrinsicSizeModifier).maxIntrinsicHeight_nrifyt_k$ = function (_this__u8e3s4, measurable, width) {
    return measurable.maxIntrinsicHeight_b0krtc_k$(width);
  };
  function width$lambda($intrinsicSize) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.set_name_wkmnld_k$('width');
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('intrinsicSize', $intrinsicSize);
      return Unit_getInstance();
    };
  }
  function IntrinsicSize_Min_getInstance() {
    static_init();
    return IntrinsicSize_Min_instance;
  }
  function IntrinsicSize_Max_getInstance() {
    static_init();
    return IntrinsicSize_Max_instance;
  }
  function LayoutScopeMarker() {
  }
  protoOf(LayoutScopeMarker).equals = function (other) {
    if (!(other instanceof LayoutScopeMarker))
      return false;
    other instanceof LayoutScopeMarker || THROW_CCE();
    return true;
  };
  protoOf(LayoutScopeMarker).hashCode = function () {
    return 0;
  };
  protoOf(LayoutScopeMarker).toString = function () {
    return '@androidx.compose.foundation.layout.LayoutScopeMarker(' + ')';
  };
  function offset_0(_this__u8e3s4, x, y) {
    var tmp;
    if (x === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = x;
    }
    x = tmp;
    var tmp_0;
    if (y === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = y;
    }
    y = tmp_0;
    return _this__u8e3s4.then_g5qrxq_k$(new OffsetElement(x, y, true, offset$lambda(x, y)));
  }
  function OffsetElement(x, y, rtlAware, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.x_1 = x;
    this.y_1 = y;
    this.rtlAware_1 = rtlAware;
    this.inspectorInfo_1 = inspectorInfo;
  }
  protoOf(OffsetElement).get_x_1efzdg_k$ = function () {
    return this.x_1;
  };
  protoOf(OffsetElement).get_y_xikap9_k$ = function () {
    return this.y_1;
  };
  protoOf(OffsetElement).get_rtlAware_ydysrn_k$ = function () {
    return this.rtlAware_1;
  };
  protoOf(OffsetElement).get_inspectorInfo_jx2bdo_k$ = function () {
    return this.inspectorInfo_1;
  };
  protoOf(OffsetElement).create_md4cuc_k$ = function () {
    return new OffsetNode(this.x_1, this.y_1, this.rtlAware_1);
  };
  protoOf(OffsetElement).update_m29w7g_k$ = function (node) {
    node.update_gj3df8_k$(this.x_1, this.y_1, this.rtlAware_1);
  };
  protoOf(OffsetElement).update_9wd57p_k$ = function (node) {
    return this.update_m29w7g_k$(node instanceof OffsetNode ? node : THROW_CCE());
  };
  protoOf(OffsetElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof OffsetElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifierElement = tmp;
    return equals(new Dp(this.x_1), new Dp(otherModifierElement.x_1)) && equals(new Dp(this.y_1), new Dp(otherModifierElement.y_1)) && this.rtlAware_1 === otherModifierElement.rtlAware_1;
  };
  protoOf(OffsetElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.x_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.y_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.rtlAware_1) | 0;
    return result;
  };
  protoOf(OffsetElement).toString = function () {
    return 'OffsetModifierElement(x=' + Dp__toString_impl_kcddez(this.x_1) + ', y=' + Dp__toString_impl_kcddez(this.y_1) + ', rtlAware=' + this.rtlAware_1 + ')';
  };
  protoOf(OffsetElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    this.inspectorInfo_1(_this__u8e3s4);
  };
  function OffsetNode$measure$lambda(this$0, $placeable) {
    return function ($this$layout) {
      var tmp;
      if (this$0.rtlAware_1) {
        $this$layout.placeRelative$default_rb5x33_k$($placeable, $this$layout.roundToPx_yb7vg8_k$(this$0.x_1), $this$layout.roundToPx_yb7vg8_k$(this$0.y_1));
        tmp = Unit_getInstance();
      } else {
        $this$layout.place$default_61faqz_k$($placeable, $this$layout.roundToPx_yb7vg8_k$(this$0.x_1), $this$layout.roundToPx_yb7vg8_k$(this$0.y_1));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function OffsetNode(x, y, rtlAware) {
    Node.call(this);
    this.x_1 = x;
    this.y_1 = y;
    this.rtlAware_1 = rtlAware;
    this.shouldAutoInvalidate_1 = false;
  }
  protoOf(OffsetNode).set_x_gusmuk_k$ = function (_set____db54di) {
    this.x_1 = _set____db54di;
  };
  protoOf(OffsetNode).get_x_1efzdg_k$ = function () {
    return this.x_1;
  };
  protoOf(OffsetNode).set_y_gmb7d7_k$ = function (_set____db54di) {
    this.y_1 = _set____db54di;
  };
  protoOf(OffsetNode).get_y_xikap9_k$ = function () {
    return this.y_1;
  };
  protoOf(OffsetNode).set_rtlAware_e2bw6c_k$ = function (_set____db54di) {
    this.rtlAware_1 = _set____db54di;
  };
  protoOf(OffsetNode).get_rtlAware_ydysrn_k$ = function () {
    return this.rtlAware_1;
  };
  protoOf(OffsetNode).get_shouldAutoInvalidate_lc75y2_k$ = function () {
    return this.shouldAutoInvalidate_1;
  };
  protoOf(OffsetNode).update_gj3df8_k$ = function (x, y, rtlAware) {
    if (!equals(new Dp(this.x_1), new Dp(x)) || !equals(new Dp(this.y_1), new Dp(y)) || !(this.rtlAware_1 === rtlAware)) {
      invalidatePlacement(this);
    }
    this.x_1 = x;
    this.y_1 = y;
    this.rtlAware_1 = rtlAware;
  };
  protoOf(OffsetNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var placeable = measurable.measure_4dmfk1_k$(constraints);
    var tmp = placeable.get_width_j0q4yl_k$();
    var tmp_0 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp, tmp_0, VOID, OffsetNode$measure$lambda(this, placeable));
  };
  function offset$lambda($x, $y) {
    return function ($this$OffsetElement) {
      $this$OffsetElement.set_name_wkmnld_k$('offset');
      $this$OffsetElement.get_properties_zhllqc_k$().set_vvveh5_k$('x', new Dp($x));
      $this$OffsetElement.get_properties_zhllqc_k$().set_vvveh5_k$('y', new Dp($y));
      return Unit_getInstance();
    };
  }
  var androidx_compose_foundation_layout_PaddingValues_Absolute$stable;
  var androidx_compose_foundation_layout_PaddingValuesImpl$stable;
  function _get_left__d9qyp0($this) {
    return $this.left_1;
  }
  function _get_top__e6hfbw($this) {
    return $this.top_1;
  }
  function _get_right__bvz45n($this) {
    return $this.right_1;
  }
  function _get_bottom__w3218g($this) {
    return $this.bottom_1;
  }
  function Absolute_0(left, top, right, bottom) {
    var tmp;
    if (left === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = left;
    }
    left = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (right === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = right;
    }
    right = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    this.left_1 = left;
    this.top_1 = top;
    this.right_1 = right;
    this.bottom_1 = bottom;
    // Inline function 'androidx.compose.foundation.layout.internal.requirePrecondition' call
    if (!!!(!!(!!(_Dp___get_value__impl__geb1vb(this.left_1) >= 0.0 & _Dp___get_value__impl__geb1vb(this.top_1) >= 0.0) & _Dp___get_value__impl__geb1vb(this.right_1) >= 0.0) & _Dp___get_value__impl__geb1vb(this.bottom_1) >= 0.0)) {
      var tmp$ret$5 = 'Padding must be non-negative';
      throwIllegalArgumentException(tmp$ret$5);
    }
  }
  protoOf(Absolute_0).calculateLeftPadding_trh5z9_k$ = function (layoutDirection) {
    return this.left_1;
  };
  protoOf(Absolute_0).calculateTopPadding_vlylwf_k$ = function () {
    return this.top_1;
  };
  protoOf(Absolute_0).calculateRightPadding_yc2gi_k$ = function (layoutDirection) {
    return this.right_1;
  };
  protoOf(Absolute_0).calculateBottomPadding_6z7ugt_k$ = function () {
    return this.bottom_1;
  };
  protoOf(Absolute_0).equals = function (other) {
    if (!(other instanceof Absolute_0))
      return false;
    return equals(new Dp(this.left_1), new Dp(other.left_1)) && equals(new Dp(this.top_1), new Dp(other.top_1)) && equals(new Dp(this.right_1), new Dp(other.right_1)) && equals(new Dp(this.bottom_1), new Dp(other.bottom_1));
  };
  protoOf(Absolute_0).hashCode = function () {
    return imul(imul(imul(Dp__hashCode_impl_sxkrra(this.left_1), 31) + Dp__hashCode_impl_sxkrra(this.top_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.right_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.bottom_1) | 0;
  };
  protoOf(Absolute_0).toString = function () {
    return 'PaddingValues.Absolute(left=' + Dp__toString_impl_kcddez(this.left_1) + ', top=' + Dp__toString_impl_kcddez(this.top_1) + ', right=' + Dp__toString_impl_kcddez(this.right_1) + ', bottom=' + Dp__toString_impl_kcddez(this.bottom_1) + ')';
  };
  function Companion() {
    Companion_instance = this;
    this.Zero_1 = new Absolute_0();
  }
  protoOf(Companion).get_Zero_woe9zl_k$ = function () {
    return this.Zero_1;
  };
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function PaddingValues() {
  }
  function PaddingValues_0(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    return new PaddingValuesImpl(start, top, end, bottom);
  }
  function padding(_this__u8e3s4, start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    return _this__u8e3s4.then_g5qrxq_k$(new PaddingElement(start, top, end, bottom, true, padding$lambda(start, top, end, bottom)));
  }
  function padding_0(_this__u8e3s4, horizontal, vertical) {
    var tmp;
    if (horizontal === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = horizontal;
    }
    horizontal = tmp;
    var tmp_0;
    if (vertical === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = vertical;
    }
    vertical = tmp_0;
    return _this__u8e3s4.then_g5qrxq_k$(new PaddingElement(horizontal, vertical, horizontal, vertical, true, padding$lambda_0(horizontal, vertical)));
  }
  function PaddingValues_1(all) {
    return new PaddingValuesImpl(all, all, all, all);
  }
  function calculateStartPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.calculateLeftPadding_trh5z9_k$(layoutDirection);
    } else {
      tmp = _this__u8e3s4.calculateRightPadding_yc2gi_k$(layoutDirection);
    }
    return tmp;
  }
  function calculateEndPadding(_this__u8e3s4, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = _this__u8e3s4.calculateRightPadding_yc2gi_k$(layoutDirection);
    } else {
      tmp = _this__u8e3s4.calculateLeftPadding_trh5z9_k$(layoutDirection);
    }
    return tmp;
  }
  function PaddingValues_2(horizontal, vertical) {
    var tmp;
    if (horizontal === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = horizontal;
    }
    horizontal = tmp;
    var tmp_0;
    if (vertical === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = vertical;
    }
    vertical = tmp_0;
    return new PaddingValuesImpl(horizontal, vertical, horizontal, vertical);
  }
  function padding_1(_this__u8e3s4, paddingValues) {
    return _this__u8e3s4.then_g5qrxq_k$(new PaddingValuesElement(paddingValues, padding$lambda_1(paddingValues)));
  }
  function PaddingValuesImpl(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    this.start_1 = start;
    this.top_1 = top;
    this.end_1 = end;
    this.bottom_1 = bottom;
    // Inline function 'androidx.compose.foundation.layout.internal.requirePrecondition' call
    if (!!!(!!(!!(_Dp___get_value__impl__geb1vb(this.start_1) >= 0.0 & _Dp___get_value__impl__geb1vb(this.top_1) >= 0.0) & _Dp___get_value__impl__geb1vb(this.end_1) >= 0.0) & _Dp___get_value__impl__geb1vb(this.bottom_1) >= 0.0)) {
      var tmp$ret$5 = 'Padding must be non-negative';
      throwIllegalArgumentException(tmp$ret$5);
    }
  }
  protoOf(PaddingValuesImpl).get_start_ehpdnu_k$ = function () {
    return this.start_1;
  };
  protoOf(PaddingValuesImpl).get_top_t6yz49_k$ = function () {
    return this.top_1;
  };
  protoOf(PaddingValuesImpl).get_end_hk2rin_k$ = function () {
    return this.end_1;
  };
  protoOf(PaddingValuesImpl).get_bottom_sk2u7j_k$ = function () {
    return this.bottom_1;
  };
  protoOf(PaddingValuesImpl).calculateLeftPadding_trh5z9_k$ = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.start_1 : this.end_1;
  };
  protoOf(PaddingValuesImpl).calculateTopPadding_vlylwf_k$ = function () {
    return this.top_1;
  };
  protoOf(PaddingValuesImpl).calculateRightPadding_yc2gi_k$ = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.end_1 : this.start_1;
  };
  protoOf(PaddingValuesImpl).calculateBottomPadding_6z7ugt_k$ = function () {
    return this.bottom_1;
  };
  protoOf(PaddingValuesImpl).equals = function (other) {
    if (!(other instanceof PaddingValuesImpl))
      return false;
    return equals(new Dp(this.start_1), new Dp(other.start_1)) && equals(new Dp(this.top_1), new Dp(other.top_1)) && equals(new Dp(this.end_1), new Dp(other.end_1)) && equals(new Dp(this.bottom_1), new Dp(other.bottom_1));
  };
  protoOf(PaddingValuesImpl).hashCode = function () {
    return imul(imul(imul(Dp__hashCode_impl_sxkrra(this.start_1), 31) + Dp__hashCode_impl_sxkrra(this.top_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.end_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.bottom_1) | 0;
  };
  protoOf(PaddingValuesImpl).toString = function () {
    return 'PaddingValues(start=' + Dp__toString_impl_kcddez(this.start_1) + ', top=' + Dp__toString_impl_kcddez(this.top_1) + ', end=' + Dp__toString_impl_kcddez(this.end_1) + ', bottom=' + Dp__toString_impl_kcddez(this.bottom_1) + ')';
  };
  function PaddingElement(start, top, end, bottom, rtlAware, inspectorInfo) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    ModifierNodeElement.call(this);
    this.start_1 = start;
    this.top_1 = top;
    this.end_1 = end;
    this.bottom_1 = bottom;
    this.rtlAware_1 = rtlAware;
    this.inspectorInfo_1 = inspectorInfo;
    var tmp_3;
    if (_Dp___get_value__impl__geb1vb(this.start_1) >= 0.0) {
      tmp_3 = true;
    } else {
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      var this_0 = this.start_1;
      tmp_3 = isNaN_0(_Dp___get_value__impl__geb1vb(this_0));
    }
    var tmp_4 = tmp_3;
    var tmp_5;
    if (_Dp___get_value__impl__geb1vb(this.top_1) >= 0.0) {
      tmp_5 = true;
    } else {
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      var this_1 = this.top_1;
      tmp_5 = isNaN_0(_Dp___get_value__impl__geb1vb(this_1));
    }
    var tmp_6 = !!(tmp_4 & tmp_5);
    var tmp_7;
    if (_Dp___get_value__impl__geb1vb(this.end_1) >= 0.0) {
      tmp_7 = true;
    } else {
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      var this_2 = this.end_1;
      tmp_7 = isNaN_0(_Dp___get_value__impl__geb1vb(this_2));
    }
    var tmp_8 = !!(tmp_6 & tmp_7);
    var tmp_9;
    if (_Dp___get_value__impl__geb1vb(this.bottom_1) >= 0.0) {
      tmp_9 = true;
    } else {
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      var this_3 = this.bottom_1;
      tmp_9 = isNaN_0(_Dp___get_value__impl__geb1vb(this_3));
    }
    // Inline function 'androidx.compose.foundation.layout.internal.requirePrecondition' call
    if (!!!(tmp_8 & tmp_9)) {
      var tmp$ret$9 = 'Padding must be non-negative';
      throwIllegalArgumentException(tmp$ret$9);
    }
  }
  protoOf(PaddingElement).set_start_g1n0n6_k$ = function (_set____db54di) {
    this.start_1 = _set____db54di;
  };
  protoOf(PaddingElement).get_start_ehpdnu_k$ = function () {
    return this.start_1;
  };
  protoOf(PaddingElement).set_top_ad6hzl_k$ = function (_set____db54di) {
    this.top_1 = _set____db54di;
  };
  protoOf(PaddingElement).get_top_t6yz49_k$ = function () {
    return this.top_1;
  };
  protoOf(PaddingElement).set_end_cihadz_k$ = function (_set____db54di) {
    this.end_1 = _set____db54di;
  };
  protoOf(PaddingElement).get_end_hk2rin_k$ = function () {
    return this.end_1;
  };
  protoOf(PaddingElement).set_bottom_s6futb_k$ = function (_set____db54di) {
    this.bottom_1 = _set____db54di;
  };
  protoOf(PaddingElement).get_bottom_sk2u7j_k$ = function () {
    return this.bottom_1;
  };
  protoOf(PaddingElement).set_rtlAware_e2bw6c_k$ = function (_set____db54di) {
    this.rtlAware_1 = _set____db54di;
  };
  protoOf(PaddingElement).get_rtlAware_ydysrn_k$ = function () {
    return this.rtlAware_1;
  };
  protoOf(PaddingElement).get_inspectorInfo_jx2bdo_k$ = function () {
    return this.inspectorInfo_1;
  };
  protoOf(PaddingElement).create_md4cuc_k$ = function () {
    return new PaddingNode(this.start_1, this.top_1, this.end_1, this.bottom_1, this.rtlAware_1);
  };
  protoOf(PaddingElement).update_pvlr8i_k$ = function (node) {
    node.start_1 = this.start_1;
    node.top_1 = this.top_1;
    node.end_1 = this.end_1;
    node.bottom_1 = this.bottom_1;
    node.rtlAware_1 = this.rtlAware_1;
  };
  protoOf(PaddingElement).update_9wd57p_k$ = function (node) {
    return this.update_pvlr8i_k$(node instanceof PaddingNode ? node : THROW_CCE());
  };
  protoOf(PaddingElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.start_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.top_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.end_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.bottom_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.rtlAware_1) | 0;
    return result;
  };
  protoOf(PaddingElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifierElement = tmp;
    return equals(new Dp(this.start_1), new Dp(otherModifierElement.start_1)) && equals(new Dp(this.top_1), new Dp(otherModifierElement.top_1)) && equals(new Dp(this.end_1), new Dp(otherModifierElement.end_1)) && equals(new Dp(this.bottom_1), new Dp(otherModifierElement.bottom_1)) && this.rtlAware_1 === otherModifierElement.rtlAware_1;
  };
  protoOf(PaddingElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    this.inspectorInfo_1(_this__u8e3s4);
  };
  function PaddingValuesElement(paddingValues, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.paddingValues_1 = paddingValues;
    this.inspectorInfo_1 = inspectorInfo;
  }
  protoOf(PaddingValuesElement).get_paddingValues_bdsiui_k$ = function () {
    return this.paddingValues_1;
  };
  protoOf(PaddingValuesElement).get_inspectorInfo_jx2bdo_k$ = function () {
    return this.inspectorInfo_1;
  };
  protoOf(PaddingValuesElement).create_md4cuc_k$ = function () {
    return new PaddingValuesModifier(this.paddingValues_1);
  };
  protoOf(PaddingValuesElement).update_1ky7sl_k$ = function (node) {
    node.paddingValues_1 = this.paddingValues_1;
  };
  protoOf(PaddingValuesElement).update_9wd57p_k$ = function (node) {
    return this.update_1ky7sl_k$(node instanceof PaddingValuesModifier ? node : THROW_CCE());
  };
  protoOf(PaddingValuesElement).hashCode = function () {
    return hashCode(this.paddingValues_1);
  };
  protoOf(PaddingValuesElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingValuesElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherElement = tmp;
    return equals(this.paddingValues_1, otherElement.paddingValues_1);
  };
  protoOf(PaddingValuesElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    this.inspectorInfo_1(_this__u8e3s4);
  };
  function PaddingNode$measure$lambda(this$0, $placeable) {
    return function ($this$layout) {
      var tmp;
      if (this$0.rtlAware_1) {
        $this$layout.placeRelative$default_rb5x33_k$($placeable, $this$layout.roundToPx_yb7vg8_k$(this$0.start_1), $this$layout.roundToPx_yb7vg8_k$(this$0.top_1));
        tmp = Unit_getInstance();
      } else {
        $this$layout.place$default_61faqz_k$($placeable, $this$layout.roundToPx_yb7vg8_k$(this$0.start_1), $this$layout.roundToPx_yb7vg8_k$(this$0.top_1));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function PaddingNode(start, top, end, bottom, rtlAware) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    Node.call(this);
    this.start_1 = start;
    this.top_1 = top;
    this.end_1 = end;
    this.bottom_1 = bottom;
    this.rtlAware_1 = rtlAware;
  }
  protoOf(PaddingNode).set_start_g1n0n6_k$ = function (_set____db54di) {
    this.start_1 = _set____db54di;
  };
  protoOf(PaddingNode).get_start_ehpdnu_k$ = function () {
    return this.start_1;
  };
  protoOf(PaddingNode).set_top_ad6hzl_k$ = function (_set____db54di) {
    this.top_1 = _set____db54di;
  };
  protoOf(PaddingNode).get_top_t6yz49_k$ = function () {
    return this.top_1;
  };
  protoOf(PaddingNode).set_end_cihadz_k$ = function (_set____db54di) {
    this.end_1 = _set____db54di;
  };
  protoOf(PaddingNode).get_end_hk2rin_k$ = function () {
    return this.end_1;
  };
  protoOf(PaddingNode).set_bottom_s6futb_k$ = function (_set____db54di) {
    this.bottom_1 = _set____db54di;
  };
  protoOf(PaddingNode).get_bottom_sk2u7j_k$ = function () {
    return this.bottom_1;
  };
  protoOf(PaddingNode).set_rtlAware_e2bw6c_k$ = function (_set____db54di) {
    this.rtlAware_1 = _set____db54di;
  };
  protoOf(PaddingNode).get_rtlAware_ydysrn_k$ = function () {
    return this.rtlAware_1;
  };
  protoOf(PaddingNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var horizontal = _this__u8e3s4.roundToPx_yb7vg8_k$(this.start_1) + _this__u8e3s4.roundToPx_yb7vg8_k$(this.end_1) | 0;
    var vertical = _this__u8e3s4.roundToPx_yb7vg8_k$(this.top_1) + _this__u8e3s4.roundToPx_yb7vg8_k$(this.bottom_1) | 0;
    var placeable = measurable.measure_4dmfk1_k$(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.get_width_j0q4yl_k$() + horizontal | 0);
    var height = constrainHeight(constraints, placeable.get_height_e7t92o_k$() + vertical | 0);
    return _this__u8e3s4.layout$default_n19e5l_k$(width, height, VOID, PaddingNode$measure$lambda(this, placeable));
  };
  function PaddingValuesModifier$measure$lambda($placeable, $roundedLeftPadding, $roundedTopPadding) {
    return function ($this$layout) {
      $this$layout.place$default_61faqz_k$($placeable, $roundedLeftPadding, $roundedTopPadding);
      return Unit_getInstance();
    };
  }
  function PaddingValuesModifier(paddingValues) {
    Node.call(this);
    this.paddingValues_1 = paddingValues;
  }
  protoOf(PaddingValuesModifier).set_paddingValues_3xw8eb_k$ = function (_set____db54di) {
    this.paddingValues_1 = _set____db54di;
  };
  protoOf(PaddingValuesModifier).get_paddingValues_bdsiui_k$ = function () {
    return this.paddingValues_1;
  };
  protoOf(PaddingValuesModifier).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var leftPadding = this.paddingValues_1.calculateLeftPadding_trh5z9_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$());
    var topPadding = this.paddingValues_1.calculateTopPadding_vlylwf_k$();
    var rightPadding = this.paddingValues_1.calculateRightPadding_yc2gi_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$());
    var bottomPadding = this.paddingValues_1.calculateBottomPadding_6z7ugt_k$();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    var tmp = Dp__compareTo_impl_tlg3dl(leftPadding, tmp$ret$0) >= 0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
    var tmp_0 = !!(tmp & Dp__compareTo_impl_tlg3dl(topPadding, tmp$ret$1) >= 0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$2 = _Dp___init__impl__ms3zkb(0);
    var tmp_1 = !!(tmp_0 & Dp__compareTo_impl_tlg3dl(rightPadding, tmp$ret$2) >= 0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$3 = _Dp___init__impl__ms3zkb(0);
    // Inline function 'androidx.compose.foundation.layout.internal.requirePrecondition' call
    if (!!!(tmp_1 & Dp__compareTo_impl_tlg3dl(bottomPadding, tmp$ret$3) >= 0)) {
      var tmp$ret$5 = 'Padding must be non-negative';
      throwIllegalArgumentException(tmp$ret$5);
    }
    var roundedLeftPadding = _this__u8e3s4.roundToPx_yb7vg8_k$(leftPadding);
    var horizontal = roundedLeftPadding + _this__u8e3s4.roundToPx_yb7vg8_k$(rightPadding) | 0;
    var roundedTopPadding = _this__u8e3s4.roundToPx_yb7vg8_k$(topPadding);
    var vertical = roundedTopPadding + _this__u8e3s4.roundToPx_yb7vg8_k$(bottomPadding) | 0;
    var placeable = measurable.measure_4dmfk1_k$(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.get_width_j0q4yl_k$() + horizontal | 0);
    var height = constrainHeight(constraints, placeable.get_height_e7t92o_k$() + vertical | 0);
    return _this__u8e3s4.layout$default_n19e5l_k$(width, height, VOID, PaddingValuesModifier$measure$lambda(placeable, roundedLeftPadding, roundedTopPadding));
  };
  function padding_2(_this__u8e3s4, all) {
    return _this__u8e3s4.then_g5qrxq_k$(new PaddingElement(all, all, all, all, true, padding$lambda_2(all)));
  }
  function padding$lambda($start, $top, $end, $bottom) {
    return function ($this$PaddingElement) {
      $this$PaddingElement.set_name_wkmnld_k$('padding');
      $this$PaddingElement.get_properties_zhllqc_k$().set_vvveh5_k$('start', new Dp($start));
      $this$PaddingElement.get_properties_zhllqc_k$().set_vvveh5_k$('top', new Dp($top));
      $this$PaddingElement.get_properties_zhllqc_k$().set_vvveh5_k$('end', new Dp($end));
      $this$PaddingElement.get_properties_zhllqc_k$().set_vvveh5_k$('bottom', new Dp($bottom));
      return Unit_getInstance();
    };
  }
  function padding$lambda_0($horizontal, $vertical) {
    return function ($this$PaddingElement) {
      $this$PaddingElement.set_name_wkmnld_k$('padding');
      $this$PaddingElement.get_properties_zhllqc_k$().set_vvveh5_k$('horizontal', new Dp($horizontal));
      $this$PaddingElement.get_properties_zhllqc_k$().set_vvveh5_k$('vertical', new Dp($vertical));
      return Unit_getInstance();
    };
  }
  function padding$lambda_1($paddingValues) {
    return function ($this$PaddingValuesElement) {
      $this$PaddingValuesElement.set_name_wkmnld_k$('padding');
      $this$PaddingValuesElement.get_properties_zhllqc_k$().set_vvveh5_k$('paddingValues', $paddingValues);
      return Unit_getInstance();
    };
  }
  function padding$lambda_2($all) {
    return function ($this$PaddingElement) {
      $this$PaddingElement.set_name_wkmnld_k$('padding');
      $this$PaddingElement.set_value_rjqr2d_k$(new Dp($all));
      return Unit_getInstance();
    };
  }
  function get_DefaultRowMeasurePolicy() {
    _init_properties_Row_kt__jenljs();
    return DefaultRowMeasurePolicy;
  }
  var DefaultRowMeasurePolicy;
  var androidx_compose_foundation_layout_RowMeasurePolicy$stable;
  var androidx_compose_foundation_layout_RowScopeInstance$stable;
  function Row(modifier, horizontalArrangement, verticalAlignment, content, $composer, $changed, $default) {
    _init_properties_Row_kt__jenljs();
    var modifier_0 = modifier;
    var horizontalArrangement_0 = horizontalArrangement;
    var verticalAlignment_0 = verticalAlignment;
    var $composer_0 = $composer;
    if (!(($default & 1) === 0))
      modifier_0 = Companion_getInstance_0();
    if (!(($default & 2) === 0))
      horizontalArrangement_0 = Arrangement_getInstance().get_Start_ih4i6x_k$();
    if (!(($default & 4) === 0))
      verticalAlignment_0 = Companion_getInstance().get_Top_18jj1w_k$();
    var measurePolicy = rowMeasurePolicy(horizontalArrangement_0, verticalAlignment_0, $composer_0, 14 & $changed >> 3 | 112 & $changed >> 3);
    // Inline function 'androidx.compose.ui.layout.Layout' call
    var modifier_1 = modifier_0;
    var $composer_1 = $composer_0;
    if (!((0 & 2) === 0))
      modifier_1 = Companion_getInstance_0();
    var compositeKeyHash = get_currentCompositeKeyHashCode($composer_1, 0).hashCode();
    var localMap = $composer_1.get_currentCompositionLocalMap_fmcf79_k$();
    var materialized = materialize($composer_1, modifier_1);
    var tmp0 = Companion_getInstance_1().get_Constructor_f7ieep_k$();
    // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
    var $composer_2 = $composer_1;
    var tmp = $composer_2.get_applier_bupu8u_k$();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_2.startReusableNode_jjgeyp_k$();
    if ($composer_2.get_inserting_25mlsw_k$()) {
      $composer_2.createNode_ahrd54_k$(tmp0);
    } else {
      $composer_2.useNode_io5s9l_k$();
    }
    var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
    Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().get_SetResolvedCompositionLocals_rc2u9t_k$());
    Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_1().get_SetCompositeKeyHash_n8lgg1_k$());
    Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_1().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
    Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().get_SetModifier_6tz580_k$());
    var $composer_3 = $composer_2;
    content(RowScopeInstance_getInstance(), $composer_3, 6 | 112 & $changed >> 6);
    $composer_2.endNode_3m0yfn_k$();
  }
  function RowScope() {
  }
  function _get_horizontalArrangement__yigl9x($this) {
    return $this.horizontalArrangement_1;
  }
  function _get_verticalAlignment__1j8kpw($this) {
    return $this.verticalAlignment_1;
  }
  function getCrossAxisPosition_0($this, placeable, parentData, crossAxisLayoutSize, beforeCrossAxisAlignmentLine) {
    var childCrossAlignment = parentData == null ? null : parentData.get_crossAxisAlignment_ebqiz9_k$();
    var tmp2_elvis_lhs = childCrossAlignment == null ? null : childCrossAlignment.align_aa0s5b_k$(crossAxisLayoutSize, $this.crossAxisSize_2m3wdq_k$(placeable), LayoutDirection_Ltr_getInstance(), placeable, beforeCrossAxisAlignmentLine);
    return tmp2_elvis_lhs == null ? $this.verticalAlignment_1.align_k316px_k$($this.crossAxisSize_2m3wdq_k$(placeable), crossAxisLayoutSize) : tmp2_elvis_lhs;
  }
  function component1_2($this) {
    return $this.horizontalArrangement_1;
  }
  function component2_1($this) {
    return $this.verticalAlignment_1;
  }
  function RowMeasurePolicy$placeHelper$lambda($placeables, this$0, $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $mainAxisPositions) {
    return function ($this$layout) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var crossAxisPosition = getCrossAxisPosition_0(this$0, ensureNotNull(item), get_rowColumnParentData(item), $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine);
        $this$layout.place$default_61faqz_k$(item, $mainAxisPositions[_unary__edvuaz], crossAxisPosition);
      }
      return Unit_getInstance();
    };
  }
  function RowMeasurePolicy(horizontalArrangement, verticalAlignment) {
    this.horizontalArrangement_1 = horizontalArrangement;
    this.verticalAlignment_1 = verticalAlignment;
  }
  protoOf(RowMeasurePolicy).mainAxisSize_q9nnsp_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_width_j0q4yl_k$();
  };
  protoOf(RowMeasurePolicy).crossAxisSize_2m3wdq_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_height_e7t92o_k$();
  };
  protoOf(RowMeasurePolicy).measure_xg9b01_k$ = function (_this__u8e3s4, measurables, constraints) {
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_2 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var tmp_3 = _this__u8e3s4.roundToPx_yb7vg8_k$(this.horizontalArrangement_1.get_spacing_zb7agn_k$());
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.get_size_woubt6_k$();
    var tmp$ret$0 = Array(size);
    return measure(this, tmp, tmp_0, tmp_1, tmp_2, tmp_3, _this__u8e3s4, measurables, tmp$ret$0, 0, measurables.get_size_woubt6_k$());
  };
  protoOf(RowMeasurePolicy).populateMainAxisPositions_z5r5pw_k$ = function (mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    // Inline function 'kotlin.with' call
    this.horizontalArrangement_1.arrange_f41npy_k$(measureScope, mainAxisLayoutSize, childrenMainAxisSize, measureScope.get_layoutDirection_7e37v0_k$(), mainAxisPositions);
  };
  protoOf(RowMeasurePolicy).placeHelper_9ldirp_k$ = function (placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex) {
    // Inline function 'kotlin.with' call
    return measureScope.layout$default_n19e5l_k$(mainAxisLayoutSize, crossAxisLayoutSize, VOID, RowMeasurePolicy$placeHelper$lambda(placeables, this, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, mainAxisPositions));
  };
  protoOf(RowMeasurePolicy).createConstraints_abox2e_k$ = function (mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) {
    return createRowConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax);
  };
  protoOf(RowMeasurePolicy).minIntrinsicWidth_dwfcse_k$ = function (_this__u8e3s4, measurables, height) {
    return IntrinsicMeasureBlocks_getInstance().HorizontalMinWidth_glftwr_k$(measurables, height, _this__u8e3s4.roundToPx_yb7vg8_k$(this.horizontalArrangement_1.get_spacing_zb7agn_k$()));
  };
  protoOf(RowMeasurePolicy).minIntrinsicHeight_xlhgwn_k$ = function (_this__u8e3s4, measurables, width) {
    return IntrinsicMeasureBlocks_getInstance().HorizontalMinHeight_4bpnim_k$(measurables, width, _this__u8e3s4.roundToPx_yb7vg8_k$(this.horizontalArrangement_1.get_spacing_zb7agn_k$()));
  };
  protoOf(RowMeasurePolicy).maxIntrinsicWidth_cx7ze4_k$ = function (_this__u8e3s4, measurables, height) {
    return IntrinsicMeasureBlocks_getInstance().HorizontalMaxWidth_jfytoj_k$(measurables, height, _this__u8e3s4.roundToPx_yb7vg8_k$(this.horizontalArrangement_1.get_spacing_zb7agn_k$()));
  };
  protoOf(RowMeasurePolicy).maxIntrinsicHeight_3a4xm1_k$ = function (_this__u8e3s4, measurables, width) {
    return IntrinsicMeasureBlocks_getInstance().HorizontalMaxHeight_nlw7ss_k$(measurables, width, _this__u8e3s4.roundToPx_yb7vg8_k$(this.horizontalArrangement_1.get_spacing_zb7agn_k$()));
  };
  protoOf(RowMeasurePolicy).copy_fg961o_k$ = function (horizontalArrangement, verticalAlignment) {
    return new RowMeasurePolicy(horizontalArrangement, verticalAlignment);
  };
  protoOf(RowMeasurePolicy).copy$default_84bqfw_k$ = function (horizontalArrangement, verticalAlignment, $super) {
    horizontalArrangement = horizontalArrangement === VOID ? this.horizontalArrangement_1 : horizontalArrangement;
    verticalAlignment = verticalAlignment === VOID ? this.verticalAlignment_1 : verticalAlignment;
    return $super === VOID ? this.copy_fg961o_k$(horizontalArrangement, verticalAlignment) : $super.copy_fg961o_k$.call(this, horizontalArrangement, verticalAlignment);
  };
  protoOf(RowMeasurePolicy).toString = function () {
    return 'RowMeasurePolicy(horizontalArrangement=' + toString_0(this.horizontalArrangement_1) + ', verticalAlignment=' + toString_0(this.verticalAlignment_1) + ')';
  };
  protoOf(RowMeasurePolicy).hashCode = function () {
    var result = hashCode(this.horizontalArrangement_1);
    result = imul(result, 31) + hashCode(this.verticalAlignment_1) | 0;
    return result;
  };
  protoOf(RowMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowMeasurePolicy))
      return false;
    if (!equals(this.horizontalArrangement_1, other.horizontalArrangement_1))
      return false;
    if (!equals(this.verticalAlignment_1, other.verticalAlignment_1))
      return false;
    return true;
  };
  function rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer, $changed) {
    _init_properties_Row_kt__jenljs();
    var $composer_0 = $composer;
    var tmp;
    if (equals(horizontalArrangement, Arrangement_getInstance().get_Start_ih4i6x_k$()) && equals(verticalAlignment, Companion_getInstance().get_Top_18jj1w_k$())) {
      $composer_0.startReplaceGroup_5hh8aj_k$(-1073830487);
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp = get_DefaultRowMeasurePolicy();
    } else {
      $composer_0.startReplaceGroup_5hh8aj_k$(-1073779616);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.changed_ga7h3f_k$(horizontalArrangement) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.changed_ga7h3f_k$(verticalAlignment) || ($changed & 48) === 32));
      // Inline function 'kotlin.let' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid || it === Companion_getInstance_3().get_Empty_i9b85g_k$()) {
        var value = new RowMeasurePolicy(horizontalArrangement, verticalAlignment);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp1_group = tmp_0;
      $composer_0.endReplaceGroup_ek144q_k$();
      tmp = tmp1_group;
    }
    return tmp;
  }
  function sam$androidx_compose_foundation_layout_AlignmentLineProviderBlock$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_layout_AlignmentLineProviderBlock$0_0).calculateAlignmentLinePosition_3ovdt7_k$ = function (measured) {
    return this.function_1(measured);
  };
  protoOf(sam$androidx_compose_foundation_layout_AlignmentLineProviderBlock$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_foundation_layout_AlignmentLineProviderBlock$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, AlignmentLineProviderBlock) : false) {
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
  protoOf(sam$androidx_compose_foundation_layout_AlignmentLineProviderBlock$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function RowScopeInstance$alignBy$lambda($alignmentLineBlock) {
    return function (it) {
      return $alignmentLineBlock(it);
    };
  }
  function RowScopeInstance() {
    RowScopeInstance_instance = this;
  }
  protoOf(RowScopeInstance).weight_9ecvc_k$ = function (_this__u8e3s4, weight, fill) {
    // Inline function 'androidx.compose.foundation.layout.internal.requirePrecondition' call
    if (!(weight > 0.0)) {
      var tmp$ret$1 = 'invalid weight; must be greater than zero';
      throwIllegalArgumentException(tmp$ret$1);
    }
    return _this__u8e3s4.then_g5qrxq_k$(new LayoutWeightElement(coerceAtMost(weight, 3.4028235E38), fill));
  };
  protoOf(RowScopeInstance).align_7cl60d_k$ = function (_this__u8e3s4, alignment) {
    return _this__u8e3s4.then_g5qrxq_k$(new VerticalAlignElement(alignment));
  };
  protoOf(RowScopeInstance).alignBy_vm0eeg_k$ = function (_this__u8e3s4, alignmentLine) {
    return _this__u8e3s4.then_g5qrxq_k$(new WithAlignmentLineElement(alignmentLine));
  };
  protoOf(RowScopeInstance).alignByBaseline_ebowro_k$ = function (_this__u8e3s4) {
    return this.alignBy_vm0eeg_k$(_this__u8e3s4, get_FirstBaseline());
  };
  protoOf(RowScopeInstance).alignBy_u3ww9h_k$ = function (_this__u8e3s4, alignmentLineBlock) {
    var tmp = RowScopeInstance$alignBy$lambda(alignmentLineBlock);
    return _this__u8e3s4.then_g5qrxq_k$(new WithAlignmentLineBlockElement(new sam$androidx_compose_foundation_layout_AlignmentLineProviderBlock$0_0(tmp)));
  };
  var RowScopeInstance_instance;
  function RowScopeInstance_getInstance() {
    if (RowScopeInstance_instance == null)
      new RowScopeInstance();
    return RowScopeInstance_instance;
  }
  function createRowConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax) {
    _init_properties_Row_kt__jenljs();
    var tmp;
    if (!isPrioritizing) {
      tmp = Constraints(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
    } else {
      tmp = Companion_getInstance_2().fitPrioritizingWidth_o0ab04_k$(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
    }
    return tmp;
  }
  var properties_initialized_Row_kt_sbxnna;
  function _init_properties_Row_kt__jenljs() {
    if (!properties_initialized_Row_kt_sbxnna) {
      properties_initialized_Row_kt_sbxnna = true;
      DefaultRowMeasurePolicy = new RowMeasurePolicy(Arrangement_getInstance().get_Start_ih4i6x_k$(), Companion_getInstance().get_Top_18jj1w_k$());
      androidx_compose_foundation_layout_RowMeasurePolicy$stable = 0;
      androidx_compose_foundation_layout_RowScopeInstance$stable = 0;
    }
  }
  var androidx_compose_foundation_layout_CrossAxisAlignment$stable;
  var androidx_compose_foundation_layout_IntrinsicMeasureBlocks$stable;
  var androidx_compose_foundation_layout_LayoutWeightElement$stable;
  var androidx_compose_foundation_layout_LayoutWeightNode$stable;
  var androidx_compose_foundation_layout_WithAlignmentLineBlockElement$stable;
  var androidx_compose_foundation_layout_WithAlignmentLineElement$stable;
  var androidx_compose_foundation_layout_SiblingsAlignedNode_WithAlignmentLineBlockNode$stable;
  var androidx_compose_foundation_layout_SiblingsAlignedNode_WithAlignmentLineNode$stable;
  var androidx_compose_foundation_layout_SiblingsAlignedNode$stable;
  var androidx_compose_foundation_layout_HorizontalAlignElement$stable;
  var androidx_compose_foundation_layout_HorizontalAlignNode$stable;
  var androidx_compose_foundation_layout_VerticalAlignElement$stable;
  var androidx_compose_foundation_layout_VerticalAlignNode$stable;
  var androidx_compose_foundation_layout_RowColumnParentData$stable;
  var androidx_compose_foundation_layout_AlignmentLineProvider_Block$stable;
  var androidx_compose_foundation_layout_AlignmentLineProvider_Value$stable;
  var androidx_compose_foundation_layout_AlignmentLineProvider$stable;
  function RowColumnParentData(weight, fill, crossAxisAlignment, flowLayoutData) {
    weight = weight === VOID ? 0.0 : weight;
    fill = fill === VOID ? true : fill;
    crossAxisAlignment = crossAxisAlignment === VOID ? null : crossAxisAlignment;
    flowLayoutData = flowLayoutData === VOID ? null : flowLayoutData;
    this.weight_1 = weight;
    this.fill_1 = fill;
    this.crossAxisAlignment_1 = crossAxisAlignment;
    this.flowLayoutData_1 = flowLayoutData;
  }
  protoOf(RowColumnParentData).set_weight_l75ca5_k$ = function (_set____db54di) {
    this.weight_1 = _set____db54di;
  };
  protoOf(RowColumnParentData).get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  protoOf(RowColumnParentData).set_fill_3wer9x_k$ = function (_set____db54di) {
    this.fill_1 = _set____db54di;
  };
  protoOf(RowColumnParentData).get_fill_wom0ng_k$ = function () {
    return this.fill_1;
  };
  protoOf(RowColumnParentData).set_crossAxisAlignment_3nt3xe_k$ = function (_set____db54di) {
    this.crossAxisAlignment_1 = _set____db54di;
  };
  protoOf(RowColumnParentData).get_crossAxisAlignment_ebqiz9_k$ = function () {
    return this.crossAxisAlignment_1;
  };
  protoOf(RowColumnParentData).set_flowLayoutData_rwf4pq_k$ = function (_set____db54di) {
    this.flowLayoutData_1 = _set____db54di;
  };
  protoOf(RowColumnParentData).get_flowLayoutData_cl5r63_k$ = function () {
    return this.flowLayoutData_1;
  };
  protoOf(RowColumnParentData).component1_7eebsc_k$ = function () {
    return this.weight_1;
  };
  protoOf(RowColumnParentData).component2_7eebsb_k$ = function () {
    return this.fill_1;
  };
  protoOf(RowColumnParentData).component3_7eebsa_k$ = function () {
    return this.crossAxisAlignment_1;
  };
  protoOf(RowColumnParentData).component4_7eebs9_k$ = function () {
    return this.flowLayoutData_1;
  };
  protoOf(RowColumnParentData).copy_z5c3xk_k$ = function (weight, fill, crossAxisAlignment, flowLayoutData) {
    return new RowColumnParentData(weight, fill, crossAxisAlignment, flowLayoutData);
  };
  protoOf(RowColumnParentData).copy$default_8rho3c_k$ = function (weight, fill, crossAxisAlignment, flowLayoutData, $super) {
    weight = weight === VOID ? this.weight_1 : weight;
    fill = fill === VOID ? this.fill_1 : fill;
    crossAxisAlignment = crossAxisAlignment === VOID ? this.crossAxisAlignment_1 : crossAxisAlignment;
    flowLayoutData = flowLayoutData === VOID ? this.flowLayoutData_1 : flowLayoutData;
    return $super === VOID ? this.copy_z5c3xk_k$(weight, fill, crossAxisAlignment, flowLayoutData) : $super.copy_z5c3xk_k$.call(this, weight, fill, crossAxisAlignment, flowLayoutData);
  };
  protoOf(RowColumnParentData).toString = function () {
    return 'RowColumnParentData(weight=' + this.weight_1 + ', fill=' + this.fill_1 + ', crossAxisAlignment=' + toString(this.crossAxisAlignment_1) + ', flowLayoutData=' + toString(this.flowLayoutData_1) + ')';
  };
  protoOf(RowColumnParentData).hashCode = function () {
    var result = getNumberHashCode(this.weight_1);
    result = imul(result, 31) + getBooleanHashCode(this.fill_1) | 0;
    result = imul(result, 31) + (this.crossAxisAlignment_1 == null ? 0 : hashCode(this.crossAxisAlignment_1)) | 0;
    result = imul(result, 31) + (this.flowLayoutData_1 == null ? 0 : this.flowLayoutData_1.hashCode()) | 0;
    return result;
  };
  protoOf(RowColumnParentData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowColumnParentData))
      return false;
    if (!equals(this.weight_1, other.weight_1))
      return false;
    if (!(this.fill_1 === other.fill_1))
      return false;
    if (!equals(this.crossAxisAlignment_1, other.crossAxisAlignment_1))
      return false;
    if (!equals(this.flowLayoutData_1, other.flowLayoutData_1))
      return false;
    return true;
  };
  function get_rowColumnParentData(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    var tmp = _this__u8e3s4.get_parentData_o87vnn_k$();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).AlignmentLine_tujeb5_k$ = function (alignmentLine) {
    return new AlignmentLineCrossAxisAlignment(new Value(alignmentLine));
  };
  protoOf(Companion_0).Relative_yycgpe_k$ = function (alignmentLineProvider) {
    return new AlignmentLineCrossAxisAlignment(alignmentLineProvider);
  };
  protoOf(Companion_0).vertical_75z78f_k$ = function (vertical) {
    return new VerticalCrossAxisAlignment(vertical);
  };
  protoOf(Companion_0).horizontal_qgwvz5_k$ = function (horizontal) {
    return new HorizontalCrossAxisAlignment(horizontal);
  };
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function AlignmentLineCrossAxisAlignment(alignmentLineProvider) {
    CrossAxisAlignment.call(this);
    this.alignmentLineProvider_1 = alignmentLineProvider;
  }
  protoOf(AlignmentLineCrossAxisAlignment).get_alignmentLineProvider_242uu9_k$ = function () {
    return this.alignmentLineProvider_1;
  };
  protoOf(AlignmentLineCrossAxisAlignment).get_isRelative_7qih6l_k$ = function () {
    return true;
  };
  protoOf(AlignmentLineCrossAxisAlignment).calculateAlignmentLinePosition_kp8mom_k$ = function (placeable) {
    return this.alignmentLineProvider_1.calculateAlignmentLinePosition_lw7yd4_k$(placeable);
  };
  protoOf(AlignmentLineCrossAxisAlignment).align_aa0s5b_k$ = function (size, itemCrossAxisSize, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    var alignmentLinePosition = this.alignmentLineProvider_1.calculateAlignmentLinePosition_lw7yd4_k$(placeable);
    var tmp;
    if (!(alignmentLinePosition === -2147483648)) {
      var line = beforeCrossAxisAlignmentLine - alignmentLinePosition | 0;
      var tmp_0;
      if (layoutDirection.equals(LayoutDirection_Rtl_getInstance())) {
        tmp_0 = (size - itemCrossAxisSize | 0) - line | 0;
      } else {
        tmp_0 = line;
      }
      tmp = tmp_0;
    } else {
      tmp = 0;
    }
    return tmp;
  };
  function VerticalCrossAxisAlignment(vertical) {
    CrossAxisAlignment.call(this);
    this.vertical_1 = vertical;
  }
  protoOf(VerticalCrossAxisAlignment).get_vertical_6ev9z3_k$ = function () {
    return this.vertical_1;
  };
  protoOf(VerticalCrossAxisAlignment).align_aa0s5b_k$ = function (size, itemCrossAxisSize, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.vertical_1.align_k316px_k$(itemCrossAxisSize, size);
  };
  protoOf(VerticalCrossAxisAlignment).component1_7eebsc_k$ = function () {
    return this.vertical_1;
  };
  protoOf(VerticalCrossAxisAlignment).copy_ysuu68_k$ = function (vertical) {
    return new VerticalCrossAxisAlignment(vertical);
  };
  protoOf(VerticalCrossAxisAlignment).copy$default_p5f22c_k$ = function (vertical, $super) {
    vertical = vertical === VOID ? this.vertical_1 : vertical;
    return $super === VOID ? this.copy_ysuu68_k$(vertical) : $super.copy_ysuu68_k$.call(this, vertical);
  };
  protoOf(VerticalCrossAxisAlignment).toString = function () {
    return 'VerticalCrossAxisAlignment(vertical=' + toString_0(this.vertical_1) + ')';
  };
  protoOf(VerticalCrossAxisAlignment).hashCode = function () {
    return hashCode(this.vertical_1);
  };
  protoOf(VerticalCrossAxisAlignment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerticalCrossAxisAlignment))
      return false;
    if (!equals(this.vertical_1, other.vertical_1))
      return false;
    return true;
  };
  function HorizontalCrossAxisAlignment(horizontal) {
    CrossAxisAlignment.call(this);
    this.horizontal_1 = horizontal;
  }
  protoOf(HorizontalCrossAxisAlignment).get_horizontal_2rwn8t_k$ = function () {
    return this.horizontal_1;
  };
  protoOf(HorizontalCrossAxisAlignment).align_aa0s5b_k$ = function (size, itemCrossAxisSize, layoutDirection, placeable, beforeCrossAxisAlignmentLine) {
    return this.horizontal_1.align_y7fd6v_k$(itemCrossAxisSize, size, layoutDirection);
  };
  protoOf(HorizontalCrossAxisAlignment).component1_7eebsc_k$ = function () {
    return this.horizontal_1;
  };
  protoOf(HorizontalCrossAxisAlignment).copy_ank2s2_k$ = function (horizontal) {
    return new HorizontalCrossAxisAlignment(horizontal);
  };
  protoOf(HorizontalCrossAxisAlignment).copy$default_ecyf90_k$ = function (horizontal, $super) {
    horizontal = horizontal === VOID ? this.horizontal_1 : horizontal;
    return $super === VOID ? this.copy_ank2s2_k$(horizontal) : $super.copy_ank2s2_k$.call(this, horizontal);
  };
  protoOf(HorizontalCrossAxisAlignment).toString = function () {
    return 'HorizontalCrossAxisAlignment(horizontal=' + toString_0(this.horizontal_1) + ')';
  };
  protoOf(HorizontalCrossAxisAlignment).hashCode = function () {
    return hashCode(this.horizontal_1);
  };
  protoOf(HorizontalCrossAxisAlignment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HorizontalCrossAxisAlignment))
      return false;
    if (!equals(this.horizontal_1, other.horizontal_1))
      return false;
    return true;
  };
  function CrossAxisAlignment() {
    Companion_getInstance_8();
  }
  protoOf(CrossAxisAlignment).get_isRelative_7qih6l_k$ = function () {
    return false;
  };
  protoOf(CrossAxisAlignment).calculateAlignmentLinePosition_kp8mom_k$ = function (placeable) {
    return null;
  };
  function IntrinsicMeasureBlocks() {
    IntrinsicMeasureBlocks_instance = this;
  }
  protoOf(IntrinsicMeasureBlocks).HorizontalMinWidth_glftwr_k$ = function (measurables, availableHeight, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var weightUnitSpace = 0;
      var fixedSpace = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.get_c1px32_k$(index);
          var weight = get_weight(get_rowColumnParentData_0(item));
          var size = item.minIntrinsicWidth_jyhjuj_k$(availableHeight);
          if (weight === 0.0) {
            fixedSpace = fixedSpace + size | 0;
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
            var tmp0 = weightUnitSpace;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            var this_0 = size / weight;
            var tmp;
            if (isNaN_0(this_0)) {
              tmp = 0;
            } else {
              // Inline function 'kotlin.math.roundToInt' call
              tmp = roundToInt(this_0);
            }
            // Inline function 'kotlin.math.max' call
            var b = tmp;
            weightUnitSpace = Math.max(tmp0, b);
          }
        }
         while (inductionVariable <= last);
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      var this_1 = weightUnitSpace * totalWeight;
      var tmp_0;
      if (isNaN_0(this_1)) {
        tmp_0 = 0;
      } else {
        // Inline function 'kotlin.math.roundToInt' call
        tmp_0 = roundToInt(this_1);
      }
      tmp$ret$0 = (tmp_0 + fixedSpace | 0) + imul(measurables.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing) | 0;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).VerticalMinWidth_nd8iv_k$ = function (measurables, availableHeight, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      // Inline function 'kotlin.math.min' call
      var a = imul(measurables.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing);
      var fixedSpace = Math.min(a, availableHeight);
      var crossAxisMax = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.get_c1px32_k$(index);
          var weight = get_weight(get_rowColumnParentData_0(item));
          if (weight === 0.0) {
            var remaining = availableHeight === 2147483647 ? 2147483647 : availableHeight - fixedSpace | 0;
            var w = 2147483647;
            // Inline function 'kotlin.math.min' call
            var a_0 = item.maxIntrinsicHeight_b0krtc_k$(w);
            var mainAxisSpace = Math.min(a_0, remaining);
            fixedSpace = fixedSpace + mainAxisSpace | 0;
            var tmp0 = crossAxisMax;
            // Inline function 'kotlin.math.max' call
            var b = item.minIntrinsicWidth_jyhjuj_k$(mainAxisSpace);
            crossAxisMax = Math.max(tmp0, b);
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (totalWeight === 0.0) {
        tmp = 0;
      } else if (availableHeight === 2147483647) {
        tmp = 2147483647;
      } else {
        // Inline function 'kotlin.math.max' call
        var a_1 = availableHeight - fixedSpace | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        var this_0 = Math.max(a_1, 0) / totalWeight;
        var tmp_0;
        if (isNaN_0(this_0)) {
          tmp_0 = 0;
        } else {
          // Inline function 'kotlin.math.roundToInt' call
          tmp_0 = roundToInt(this_0);
        }
        tmp = tmp_0;
      }
      var weightUnitSpace = tmp;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.get_c1px32_k$(index_0);
          var weight_0 = get_weight(get_rowColumnParentData_0(item_0));
          if (weight_0 > 0.0) {
            var tmp0_0 = crossAxisMax;
            var tmp_1;
            if (!(weightUnitSpace === 2147483647)) {
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              var this_1 = weightUnitSpace * weight_0;
              var tmp_2;
              if (isNaN_0(this_1)) {
                tmp_2 = 0;
              } else {
                // Inline function 'kotlin.math.roundToInt' call
                tmp_2 = roundToInt(this_1);
              }
              tmp_1 = tmp_2;
            } else {
              tmp_1 = 2147483647;
            }
            var h = tmp_1;
            // Inline function 'kotlin.math.max' call
            var b_0 = item_0.minIntrinsicWidth_jyhjuj_k$(h);
            crossAxisMax = Math.max(tmp0_0, b_0);
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$0 = crossAxisMax;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).HorizontalMinHeight_4bpnim_k$ = function (measurables, availableWidth, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      // Inline function 'kotlin.math.min' call
      var a = imul(measurables.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing);
      var fixedSpace = Math.min(a, availableWidth);
      var crossAxisMax = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.get_c1px32_k$(index);
          var weight = get_weight(get_rowColumnParentData_0(item));
          if (weight === 0.0) {
            var remaining = availableWidth === 2147483647 ? 2147483647 : availableWidth - fixedSpace | 0;
            var h = 2147483647;
            // Inline function 'kotlin.math.min' call
            var a_0 = item.maxIntrinsicWidth_b8umbx_k$(h);
            var mainAxisSpace = Math.min(a_0, remaining);
            fixedSpace = fixedSpace + mainAxisSpace | 0;
            var tmp0 = crossAxisMax;
            // Inline function 'kotlin.math.max' call
            var b = item.minIntrinsicHeight_p2a4ou_k$(mainAxisSpace);
            crossAxisMax = Math.max(tmp0, b);
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (totalWeight === 0.0) {
        tmp = 0;
      } else if (availableWidth === 2147483647) {
        tmp = 2147483647;
      } else {
        // Inline function 'kotlin.math.max' call
        var a_1 = availableWidth - fixedSpace | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        var this_0 = Math.max(a_1, 0) / totalWeight;
        var tmp_0;
        if (isNaN_0(this_0)) {
          tmp_0 = 0;
        } else {
          // Inline function 'kotlin.math.roundToInt' call
          tmp_0 = roundToInt(this_0);
        }
        tmp = tmp_0;
      }
      var weightUnitSpace = tmp;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.get_c1px32_k$(index_0);
          var weight_0 = get_weight(get_rowColumnParentData_0(item_0));
          if (weight_0 > 0.0) {
            var tmp0_0 = crossAxisMax;
            var tmp_1;
            if (!(weightUnitSpace === 2147483647)) {
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              var this_1 = weightUnitSpace * weight_0;
              var tmp_2;
              if (isNaN_0(this_1)) {
                tmp_2 = 0;
              } else {
                // Inline function 'kotlin.math.roundToInt' call
                tmp_2 = roundToInt(this_1);
              }
              tmp_1 = tmp_2;
            } else {
              tmp_1 = 2147483647;
            }
            var w = tmp_1;
            // Inline function 'kotlin.math.max' call
            var b_0 = item_0.minIntrinsicHeight_p2a4ou_k$(w);
            crossAxisMax = Math.max(tmp0_0, b_0);
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$0 = crossAxisMax;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).VerticalMinHeight_x1j23k_k$ = function (measurables, availableWidth, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var weightUnitSpace = 0;
      var fixedSpace = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.get_c1px32_k$(index);
          var weight = get_weight(get_rowColumnParentData_0(item));
          var size = item.minIntrinsicHeight_p2a4ou_k$(availableWidth);
          if (weight === 0.0) {
            fixedSpace = fixedSpace + size | 0;
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
            var tmp0 = weightUnitSpace;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            var this_0 = size / weight;
            var tmp;
            if (isNaN_0(this_0)) {
              tmp = 0;
            } else {
              // Inline function 'kotlin.math.roundToInt' call
              tmp = roundToInt(this_0);
            }
            // Inline function 'kotlin.math.max' call
            var b = tmp;
            weightUnitSpace = Math.max(tmp0, b);
          }
        }
         while (inductionVariable <= last);
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      var this_1 = weightUnitSpace * totalWeight;
      var tmp_0;
      if (isNaN_0(this_1)) {
        tmp_0 = 0;
      } else {
        // Inline function 'kotlin.math.roundToInt' call
        tmp_0 = roundToInt(this_1);
      }
      tmp$ret$0 = (tmp_0 + fixedSpace | 0) + imul(measurables.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing) | 0;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).HorizontalMaxWidth_jfytoj_k$ = function (measurables, availableHeight, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var weightUnitSpace = 0;
      var fixedSpace = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.get_c1px32_k$(index);
          var weight = get_weight(get_rowColumnParentData_0(item));
          var size = item.maxIntrinsicWidth_b8umbx_k$(availableHeight);
          if (weight === 0.0) {
            fixedSpace = fixedSpace + size | 0;
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
            var tmp0 = weightUnitSpace;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            var this_0 = size / weight;
            var tmp;
            if (isNaN_0(this_0)) {
              tmp = 0;
            } else {
              // Inline function 'kotlin.math.roundToInt' call
              tmp = roundToInt(this_0);
            }
            // Inline function 'kotlin.math.max' call
            var b = tmp;
            weightUnitSpace = Math.max(tmp0, b);
          }
        }
         while (inductionVariable <= last);
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      var this_1 = weightUnitSpace * totalWeight;
      var tmp_0;
      if (isNaN_0(this_1)) {
        tmp_0 = 0;
      } else {
        // Inline function 'kotlin.math.roundToInt' call
        tmp_0 = roundToInt(this_1);
      }
      tmp$ret$0 = (tmp_0 + fixedSpace | 0) + imul(measurables.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing) | 0;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).VerticalMaxWidth_ycc5uz_k$ = function (measurables, availableHeight, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      // Inline function 'kotlin.math.min' call
      var a = imul(measurables.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing);
      var fixedSpace = Math.min(a, availableHeight);
      var crossAxisMax = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.get_c1px32_k$(index);
          var weight = get_weight(get_rowColumnParentData_0(item));
          if (weight === 0.0) {
            var remaining = availableHeight === 2147483647 ? 2147483647 : availableHeight - fixedSpace | 0;
            var w = 2147483647;
            // Inline function 'kotlin.math.min' call
            var a_0 = item.maxIntrinsicHeight_b0krtc_k$(w);
            var mainAxisSpace = Math.min(a_0, remaining);
            fixedSpace = fixedSpace + mainAxisSpace | 0;
            var tmp0 = crossAxisMax;
            // Inline function 'kotlin.math.max' call
            var b = item.maxIntrinsicWidth_b8umbx_k$(mainAxisSpace);
            crossAxisMax = Math.max(tmp0, b);
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (totalWeight === 0.0) {
        tmp = 0;
      } else if (availableHeight === 2147483647) {
        tmp = 2147483647;
      } else {
        // Inline function 'kotlin.math.max' call
        var a_1 = availableHeight - fixedSpace | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        var this_0 = Math.max(a_1, 0) / totalWeight;
        var tmp_0;
        if (isNaN_0(this_0)) {
          tmp_0 = 0;
        } else {
          // Inline function 'kotlin.math.roundToInt' call
          tmp_0 = roundToInt(this_0);
        }
        tmp = tmp_0;
      }
      var weightUnitSpace = tmp;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.get_c1px32_k$(index_0);
          var weight_0 = get_weight(get_rowColumnParentData_0(item_0));
          if (weight_0 > 0.0) {
            var tmp0_0 = crossAxisMax;
            var tmp_1;
            if (!(weightUnitSpace === 2147483647)) {
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              var this_1 = weightUnitSpace * weight_0;
              var tmp_2;
              if (isNaN_0(this_1)) {
                tmp_2 = 0;
              } else {
                // Inline function 'kotlin.math.roundToInt' call
                tmp_2 = roundToInt(this_1);
              }
              tmp_1 = tmp_2;
            } else {
              tmp_1 = 2147483647;
            }
            var h = tmp_1;
            // Inline function 'kotlin.math.max' call
            var b_0 = item_0.maxIntrinsicWidth_b8umbx_k$(h);
            crossAxisMax = Math.max(tmp0_0, b_0);
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$0 = crossAxisMax;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).HorizontalMaxHeight_nlw7ss_k$ = function (measurables, availableWidth, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicCrossAxisSize' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      // Inline function 'kotlin.math.min' call
      var a = imul(measurables.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing);
      var fixedSpace = Math.min(a, availableWidth);
      var crossAxisMax = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.get_c1px32_k$(index);
          var weight = get_weight(get_rowColumnParentData_0(item));
          if (weight === 0.0) {
            var remaining = availableWidth === 2147483647 ? 2147483647 : availableWidth - fixedSpace | 0;
            var h = 2147483647;
            // Inline function 'kotlin.math.min' call
            var a_0 = item.maxIntrinsicWidth_b8umbx_k$(h);
            var mainAxisSpace = Math.min(a_0, remaining);
            fixedSpace = fixedSpace + mainAxisSpace | 0;
            var tmp0 = crossAxisMax;
            // Inline function 'kotlin.math.max' call
            var b = item.maxIntrinsicHeight_b0krtc_k$(mainAxisSpace);
            crossAxisMax = Math.max(tmp0, b);
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
          }
        }
         while (inductionVariable <= last);
      var tmp;
      if (totalWeight === 0.0) {
        tmp = 0;
      } else if (availableWidth === 2147483647) {
        tmp = 2147483647;
      } else {
        // Inline function 'kotlin.math.max' call
        var a_1 = availableWidth - fixedSpace | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        var this_0 = Math.max(a_1, 0) / totalWeight;
        var tmp_0;
        if (isNaN_0(this_0)) {
          tmp_0 = 0;
        } else {
          // Inline function 'kotlin.math.roundToInt' call
          tmp_0 = roundToInt(this_0);
        }
        tmp = tmp_0;
      }
      var weightUnitSpace = tmp;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.get_c1px32_k$(index_0);
          var weight_0 = get_weight(get_rowColumnParentData_0(item_0));
          if (weight_0 > 0.0) {
            var tmp0_0 = crossAxisMax;
            var tmp_1;
            if (!(weightUnitSpace === 2147483647)) {
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              var this_1 = weightUnitSpace * weight_0;
              var tmp_2;
              if (isNaN_0(this_1)) {
                tmp_2 = 0;
              } else {
                // Inline function 'kotlin.math.roundToInt' call
                tmp_2 = roundToInt(this_1);
              }
              tmp_1 = tmp_2;
            } else {
              tmp_1 = 2147483647;
            }
            var w = tmp_1;
            // Inline function 'kotlin.math.max' call
            var b_0 = item_0.maxIntrinsicHeight_b0krtc_k$(w);
            crossAxisMax = Math.max(tmp0_0, b_0);
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$0 = crossAxisMax;
    }
    return tmp$ret$0;
  };
  protoOf(IntrinsicMeasureBlocks).VerticalMaxHeight_drchte_k$ = function (measurables, availableWidth, mainAxisSpacing) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.foundation.layout.intrinsicMainAxisSize' call
      if (measurables.isEmpty_y1axqb_k$()) {
        tmp$ret$0 = 0;
        break $l$block;
      }
      var weightUnitSpace = 0;
      var fixedSpace = 0;
      var totalWeight = 0.0;
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = measurables.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = measurables.get_c1px32_k$(index);
          var weight = get_weight(get_rowColumnParentData_0(item));
          var size = item.maxIntrinsicHeight_b0krtc_k$(availableWidth);
          if (weight === 0.0) {
            fixedSpace = fixedSpace + size | 0;
          } else if (weight > 0.0) {
            totalWeight = totalWeight + weight;
            var tmp0 = weightUnitSpace;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            var this_0 = size / weight;
            var tmp;
            if (isNaN_0(this_0)) {
              tmp = 0;
            } else {
              // Inline function 'kotlin.math.roundToInt' call
              tmp = roundToInt(this_0);
            }
            // Inline function 'kotlin.math.max' call
            var b = tmp;
            weightUnitSpace = Math.max(tmp0, b);
          }
        }
         while (inductionVariable <= last);
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      var this_1 = weightUnitSpace * totalWeight;
      var tmp_0;
      if (isNaN_0(this_1)) {
        tmp_0 = 0;
      } else {
        // Inline function 'kotlin.math.roundToInt' call
        tmp_0 = roundToInt(this_1);
      }
      tmp$ret$0 = (tmp_0 + fixedSpace | 0) + imul(measurables.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing) | 0;
    }
    return tmp$ret$0;
  };
  var IntrinsicMeasureBlocks_instance;
  function IntrinsicMeasureBlocks_getInstance() {
    if (IntrinsicMeasureBlocks_instance == null)
      new IntrinsicMeasureBlocks();
    return IntrinsicMeasureBlocks_instance;
  }
  function LayoutWeightElement(weight, fill) {
    ModifierNodeElement.call(this);
    this.weight_1 = weight;
    this.fill_1 = fill;
  }
  protoOf(LayoutWeightElement).get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  protoOf(LayoutWeightElement).get_fill_wom0ng_k$ = function () {
    return this.fill_1;
  };
  protoOf(LayoutWeightElement).create_md4cuc_k$ = function () {
    return new LayoutWeightNode(this.weight_1, this.fill_1);
  };
  protoOf(LayoutWeightElement).update_y7g91_k$ = function (node) {
    node.weight_1 = this.weight_1;
    node.fill_1 = this.fill_1;
  };
  protoOf(LayoutWeightElement).update_9wd57p_k$ = function (node) {
    return this.update_y7g91_k$(node instanceof LayoutWeightNode ? node : THROW_CCE());
  };
  protoOf(LayoutWeightElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('weight');
    _this__u8e3s4.set_value_rjqr2d_k$(this.weight_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('weight', this.weight_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('fill', this.fill_1);
  };
  protoOf(LayoutWeightElement).hashCode = function () {
    var result = getNumberHashCode(this.weight_1);
    result = imul(31, result) + getBooleanHashCode(this.fill_1) | 0;
    return result;
  };
  protoOf(LayoutWeightElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof LayoutWeightElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return this.weight_1 === otherModifier.weight_1 && this.fill_1 === otherModifier.fill_1;
  };
  function HorizontalAlignElement(horizontal) {
    ModifierNodeElement.call(this);
    this.horizontal_1 = horizontal;
  }
  protoOf(HorizontalAlignElement).get_horizontal_2rwn8t_k$ = function () {
    return this.horizontal_1;
  };
  protoOf(HorizontalAlignElement).create_md4cuc_k$ = function () {
    return new HorizontalAlignNode(this.horizontal_1);
  };
  protoOf(HorizontalAlignElement).update_v6ktzs_k$ = function (node) {
    node.horizontal_1 = this.horizontal_1;
  };
  protoOf(HorizontalAlignElement).update_9wd57p_k$ = function (node) {
    return this.update_v6ktzs_k$(node instanceof HorizontalAlignNode ? node : THROW_CCE());
  };
  protoOf(HorizontalAlignElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('align');
    _this__u8e3s4.set_value_rjqr2d_k$(this.horizontal_1);
  };
  protoOf(HorizontalAlignElement).hashCode = function () {
    return hashCode(this.horizontal_1);
  };
  protoOf(HorizontalAlignElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof HorizontalAlignElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.horizontal_1, otherModifier.horizontal_1);
  };
  function WithAlignmentLineElement(alignmentLine) {
    ModifierNodeElement.call(this);
    this.alignmentLine_1 = alignmentLine;
  }
  protoOf(WithAlignmentLineElement).get_alignmentLine_xlj9o2_k$ = function () {
    return this.alignmentLine_1;
  };
  protoOf(WithAlignmentLineElement).create_md4cuc_k$ = function () {
    return new WithAlignmentLineNode(this.alignmentLine_1);
  };
  protoOf(WithAlignmentLineElement).update_ak6d1j_k$ = function (node) {
    node.alignmentLine_1 = this.alignmentLine_1;
  };
  protoOf(WithAlignmentLineElement).update_9wd57p_k$ = function (node) {
    return this.update_ak6d1j_k$(node instanceof WithAlignmentLineNode ? node : THROW_CCE());
  };
  protoOf(WithAlignmentLineElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('alignBy');
    _this__u8e3s4.set_value_rjqr2d_k$(this.alignmentLine_1);
  };
  protoOf(WithAlignmentLineElement).hashCode = function () {
    return hashCode(this.alignmentLine_1);
  };
  protoOf(WithAlignmentLineElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof WithAlignmentLineElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.alignmentLine_1, otherModifier.alignmentLine_1);
  };
  function WithAlignmentLineBlockElement(block) {
    ModifierNodeElement.call(this);
    this.block_1 = block;
  }
  protoOf(WithAlignmentLineBlockElement).get_block_ip8l7o_k$ = function () {
    return this.block_1;
  };
  protoOf(WithAlignmentLineBlockElement).create_md4cuc_k$ = function () {
    return new WithAlignmentLineBlockNode(this.block_1);
  };
  protoOf(WithAlignmentLineBlockElement).update_2oxl4g_k$ = function (node) {
    node.block_1 = this.block_1;
  };
  protoOf(WithAlignmentLineBlockElement).update_9wd57p_k$ = function (node) {
    return this.update_2oxl4g_k$(node instanceof WithAlignmentLineBlockNode ? node : THROW_CCE());
  };
  protoOf(WithAlignmentLineBlockElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof WithAlignmentLineBlockElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return this.block_1 === otherModifier.block_1;
  };
  protoOf(WithAlignmentLineBlockElement).hashCode = function () {
    return hashCode(this.block_1);
  };
  protoOf(WithAlignmentLineBlockElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('alignBy');
    _this__u8e3s4.set_value_rjqr2d_k$(this.block_1);
  };
  function AlignmentLineProviderBlock() {
  }
  function VerticalAlignElement(alignment) {
    ModifierNodeElement.call(this);
    this.alignment_1 = alignment;
  }
  protoOf(VerticalAlignElement).get_alignment_xa1jnq_k$ = function () {
    return this.alignment_1;
  };
  protoOf(VerticalAlignElement).create_md4cuc_k$ = function () {
    return new VerticalAlignNode(this.alignment_1);
  };
  protoOf(VerticalAlignElement).update_85o3e_k$ = function (node) {
    node.vertical_1 = this.alignment_1;
  };
  protoOf(VerticalAlignElement).update_9wd57p_k$ = function (node) {
    return this.update_85o3e_k$(node instanceof VerticalAlignNode ? node : THROW_CCE());
  };
  protoOf(VerticalAlignElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('align');
    _this__u8e3s4.set_value_rjqr2d_k$(this.alignment_1);
  };
  protoOf(VerticalAlignElement).hashCode = function () {
    return hashCode(this.alignment_1);
  };
  protoOf(VerticalAlignElement).equals = function (other) {
    if (this === other)
      return true;
    var tmp0_elvis_lhs = other instanceof VerticalAlignElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.alignment_1, otherModifier.alignment_1);
  };
  function Block(lineProviderBlock) {
    AlignmentLineProvider.call(this);
    this.lineProviderBlock_1 = lineProviderBlock;
  }
  protoOf(Block).get_lineProviderBlock_1gxdy7_k$ = function () {
    return this.lineProviderBlock_1;
  };
  protoOf(Block).calculateAlignmentLinePosition_lw7yd4_k$ = function (placeable) {
    return this.lineProviderBlock_1.calculateAlignmentLinePosition_3ovdt7_k$(placeable);
  };
  protoOf(Block).component1_7eebsc_k$ = function () {
    return this.lineProviderBlock_1;
  };
  protoOf(Block).copy_mjt5vg_k$ = function (lineProviderBlock) {
    return new Block(lineProviderBlock);
  };
  protoOf(Block).copy$default_ngobaz_k$ = function (lineProviderBlock, $super) {
    lineProviderBlock = lineProviderBlock === VOID ? this.lineProviderBlock_1 : lineProviderBlock;
    return $super === VOID ? this.copy_mjt5vg_k$(lineProviderBlock) : $super.copy_mjt5vg_k$.call(this, lineProviderBlock);
  };
  protoOf(Block).toString = function () {
    return 'Block(lineProviderBlock=' + toString_0(this.lineProviderBlock_1) + ')';
  };
  protoOf(Block).hashCode = function () {
    return hashCode(this.lineProviderBlock_1);
  };
  protoOf(Block).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Block))
      return false;
    if (!equals(this.lineProviderBlock_1, other.lineProviderBlock_1))
      return false;
    return true;
  };
  function Value(alignmentLine) {
    AlignmentLineProvider.call(this);
    this.alignmentLine_1 = alignmentLine;
  }
  protoOf(Value).get_alignmentLine_xlj9o2_k$ = function () {
    return this.alignmentLine_1;
  };
  protoOf(Value).calculateAlignmentLinePosition_lw7yd4_k$ = function (placeable) {
    return placeable.get_pk047k_k$(this.alignmentLine_1);
  };
  protoOf(Value).component1_7eebsc_k$ = function () {
    return this.alignmentLine_1;
  };
  protoOf(Value).copy_jxuxcf_k$ = function (alignmentLine) {
    return new Value(alignmentLine);
  };
  protoOf(Value).copy$default_yh9ino_k$ = function (alignmentLine, $super) {
    alignmentLine = alignmentLine === VOID ? this.alignmentLine_1 : alignmentLine;
    return $super === VOID ? this.copy_jxuxcf_k$(alignmentLine) : $super.copy_jxuxcf_k$.call(this, alignmentLine);
  };
  protoOf(Value).toString = function () {
    return 'Value(alignmentLine=' + toString_0(this.alignmentLine_1) + ')';
  };
  protoOf(Value).hashCode = function () {
    return hashCode(this.alignmentLine_1);
  };
  protoOf(Value).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Value))
      return false;
    if (!equals(this.alignmentLine_1, other.alignmentLine_1))
      return false;
    return true;
  };
  function AlignmentLineProvider() {
  }
  function intrinsicMainAxisSize(children, mainAxisSize, crossAxisAvailable, mainAxisSpacing) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    if (children.isEmpty_y1axqb_k$())
      return 0;
    var weightUnitSpace = 0;
    var fixedSpace = 0;
    var totalWeight = 0.0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = children.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = children.get_c1px32_k$(index);
        var weight = get_weight(get_rowColumnParentData_0(item));
        var size = mainAxisSize(item, crossAxisAvailable);
        if (weight === 0.0) {
          fixedSpace = fixedSpace + size | 0;
        } else if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          var tmp0 = weightUnitSpace;
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          var this_0 = size / weight;
          var tmp;
          if (isNaN_0(this_0)) {
            tmp = 0;
          } else {
            // Inline function 'kotlin.math.roundToInt' call
            tmp = roundToInt(this_0);
          }
          // Inline function 'kotlin.math.max' call
          var b = tmp;
          weightUnitSpace = Math.max(tmp0, b);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_1 = weightUnitSpace * totalWeight;
    var tmp_0;
    if (isNaN_0(this_1)) {
      tmp_0 = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp_0 = roundToInt(this_1);
    }
    return (tmp_0 + fixedSpace | 0) + imul(children.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing) | 0;
  }
  function intrinsicCrossAxisSize(children, mainAxisSize, crossAxisSize, mainAxisAvailable, mainAxisSpacing) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    if (children.isEmpty_y1axqb_k$())
      return 0;
    // Inline function 'kotlin.math.min' call
    var a = imul(children.get_size_woubt6_k$() - 1 | 0, mainAxisSpacing);
    var fixedSpace = Math.min(a, mainAxisAvailable);
    var crossAxisMax = 0;
    var totalWeight = 0.0;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = children.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = children.get_c1px32_k$(index);
        var weight = get_weight(get_rowColumnParentData_0(item));
        if (weight === 0.0) {
          var remaining = mainAxisAvailable === 2147483647 ? 2147483647 : mainAxisAvailable - fixedSpace | 0;
          // Inline function 'kotlin.math.min' call
          var a_0 = mainAxisSize(item, 2147483647);
          var mainAxisSpace = Math.min(a_0, remaining);
          fixedSpace = fixedSpace + mainAxisSpace | 0;
          var tmp0 = crossAxisMax;
          // Inline function 'kotlin.math.max' call
          var b = crossAxisSize(item, mainAxisSpace);
          crossAxisMax = Math.max(tmp0, b);
        } else if (weight > 0.0) {
          totalWeight = totalWeight + weight;
        }
      }
       while (inductionVariable <= last);
    var tmp;
    if (totalWeight === 0.0) {
      tmp = 0;
    } else if (mainAxisAvailable === 2147483647) {
      tmp = 2147483647;
    } else {
      // Inline function 'kotlin.math.max' call
      var a_1 = mainAxisAvailable - fixedSpace | 0;
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      var this_0 = Math.max(a_1, 0) / totalWeight;
      var tmp_0;
      if (isNaN_0(this_0)) {
        tmp_0 = 0;
      } else {
        // Inline function 'kotlin.math.roundToInt' call
        tmp_0 = roundToInt(this_0);
      }
      tmp = tmp_0;
    }
    var weightUnitSpace = tmp;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable_0 = 0;
    var last_0 = children.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = children.get_c1px32_k$(index_0);
        var weight_0 = get_weight(get_rowColumnParentData_0(item_0));
        if (weight_0 > 0.0) {
          var tmp0_0 = crossAxisMax;
          var tmp_1;
          if (!(weightUnitSpace === 2147483647)) {
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            var this_1 = weightUnitSpace * weight_0;
            var tmp_2;
            if (isNaN_0(this_1)) {
              tmp_2 = 0;
            } else {
              // Inline function 'kotlin.math.roundToInt' call
              tmp_2 = roundToInt(this_1);
            }
            tmp_1 = tmp_2;
          } else {
            tmp_1 = 2147483647;
          }
          // Inline function 'kotlin.math.max' call
          var b_0 = crossAxisSize(item_0, tmp_1);
          crossAxisMax = Math.max(tmp0_0, b_0);
        }
      }
       while (inductionVariable_0 <= last_0);
    return crossAxisMax;
  }
  function LayoutWeightNode(weight, fill) {
    Node.call(this);
    this.weight_1 = weight;
    this.fill_1 = fill;
  }
  protoOf(LayoutWeightNode).set_weight_l75ca5_k$ = function (_set____db54di) {
    this.weight_1 = _set____db54di;
  };
  protoOf(LayoutWeightNode).get_weight_lbhkzl_k$ = function () {
    return this.weight_1;
  };
  protoOf(LayoutWeightNode).set_fill_3wer9x_k$ = function (_set____db54di) {
    this.fill_1 = _set____db54di;
  };
  protoOf(LayoutWeightNode).get_fill_wom0ng_k$ = function () {
    return this.fill_1;
  };
  protoOf(LayoutWeightNode).modifyParentData_nittj_k$ = function (_this__u8e3s4, parentData) {
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    // Inline function 'kotlin.also' call
    var this_0 = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    this_0.weight_1 = this.weight_1;
    this_0.fill_1 = this.fill_1;
    return this_0;
  };
  function HorizontalAlignNode(horizontal) {
    Node.call(this);
    this.horizontal_1 = horizontal;
  }
  protoOf(HorizontalAlignNode).set_horizontal_fvwuq_k$ = function (_set____db54di) {
    this.horizontal_1 = _set____db54di;
  };
  protoOf(HorizontalAlignNode).get_horizontal_2rwn8t_k$ = function () {
    return this.horizontal_1;
  };
  protoOf(HorizontalAlignNode).modifyParentData_nittj_k$ = function (_this__u8e3s4, parentData) {
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    // Inline function 'kotlin.also' call
    var this_0 = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    this_0.crossAxisAlignment_1 = Companion_getInstance_8().horizontal_qgwvz5_k$(this.horizontal_1);
    return this_0;
  };
  function WithAlignmentLineBlockNode(block) {
    SiblingsAlignedNode.call(this);
    this.block_1 = block;
  }
  protoOf(WithAlignmentLineBlockNode).set_block_pthzsf_k$ = function (_set____db54di) {
    this.block_1 = _set____db54di;
  };
  protoOf(WithAlignmentLineBlockNode).get_block_ip8l7o_k$ = function () {
    return this.block_1;
  };
  protoOf(WithAlignmentLineBlockNode).modifyParentData_nittj_k$ = function (_this__u8e3s4, parentData) {
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    // Inline function 'kotlin.also' call
    var this_0 = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    this_0.crossAxisAlignment_1 = Companion_getInstance_8().Relative_yycgpe_k$(new Block(this.block_1));
    return this_0;
  };
  function WithAlignmentLineNode(alignmentLine) {
    SiblingsAlignedNode.call(this);
    this.alignmentLine_1 = alignmentLine;
  }
  protoOf(WithAlignmentLineNode).set_alignmentLine_pygt0k_k$ = function (_set____db54di) {
    this.alignmentLine_1 = _set____db54di;
  };
  protoOf(WithAlignmentLineNode).get_alignmentLine_xlj9o2_k$ = function () {
    return this.alignmentLine_1;
  };
  protoOf(WithAlignmentLineNode).modifyParentData_nittj_k$ = function (_this__u8e3s4, parentData) {
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    // Inline function 'kotlin.also' call
    var this_0 = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    this_0.crossAxisAlignment_1 = Companion_getInstance_8().Relative_yycgpe_k$(new Value(this.alignmentLine_1));
    return this_0;
  };
  function SiblingsAlignedNode() {
    Node.call(this);
  }
  function VerticalAlignNode(vertical) {
    Node.call(this);
    this.vertical_1 = vertical;
  }
  protoOf(VerticalAlignNode).set_vertical_f3kzla_k$ = function (_set____db54di) {
    this.vertical_1 = _set____db54di;
  };
  protoOf(VerticalAlignNode).get_vertical_6ev9z3_k$ = function () {
    return this.vertical_1;
  };
  protoOf(VerticalAlignNode).modifyParentData_nittj_k$ = function (_this__u8e3s4, parentData) {
    var tmp0_elvis_lhs = parentData instanceof RowColumnParentData ? parentData : null;
    // Inline function 'kotlin.also' call
    var this_0 = tmp0_elvis_lhs == null ? new RowColumnParentData() : tmp0_elvis_lhs;
    this_0.crossAxisAlignment_1 = Companion_getInstance_8().vertical_75z78f_k$(this.vertical_1);
    return this_0;
  };
  function get_weight(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.weight_1;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  }
  function get_rowColumnParentData_0(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    var tmp = _this__u8e3s4.get_parentData_o87vnn_k$();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function get_isRelative(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    var tmp0_safe_receiver = get_crossAxisAlignment(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isRelative_7qih6l_k$();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function get_fill(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.fill_1;
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function get_crossAxisAlignment(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    return _this__u8e3s4 == null ? null : _this__u8e3s4.crossAxisAlignment_1;
  }
  var properties_initialized_RowColumnImpl_kt_57qerk;
  function _init_properties_RowColumnImpl_kt__c7pbaa() {
    if (!properties_initialized_RowColumnImpl_kt_57qerk) {
      properties_initialized_RowColumnImpl_kt_57qerk = true;
      androidx_compose_foundation_layout_CrossAxisAlignment$stable = 0;
      androidx_compose_foundation_layout_IntrinsicMeasureBlocks$stable = 0;
      androidx_compose_foundation_layout_LayoutWeightElement$stable = 0;
      androidx_compose_foundation_layout_LayoutWeightNode$stable = 8;
      androidx_compose_foundation_layout_WithAlignmentLineBlockElement$stable = 0;
      androidx_compose_foundation_layout_WithAlignmentLineElement$stable = 0;
      androidx_compose_foundation_layout_SiblingsAlignedNode_WithAlignmentLineBlockNode$stable = 8;
      androidx_compose_foundation_layout_SiblingsAlignedNode_WithAlignmentLineNode$stable = 8;
      androidx_compose_foundation_layout_SiblingsAlignedNode$stable = androidx_compose_ui_Modifier_Node$stableprop_getter();
      androidx_compose_foundation_layout_HorizontalAlignElement$stable = 0;
      androidx_compose_foundation_layout_HorizontalAlignNode$stable = 8;
      androidx_compose_foundation_layout_VerticalAlignElement$stable = 0;
      androidx_compose_foundation_layout_VerticalAlignNode$stable = 8;
      androidx_compose_foundation_layout_RowColumnParentData$stable = 8;
      androidx_compose_foundation_layout_AlignmentLineProvider_Block$stable = 8;
      androidx_compose_foundation_layout_AlignmentLineProvider_Value$stable = 0;
      androidx_compose_foundation_layout_AlignmentLineProvider$stable = 0;
    }
  }
  function RowColumnMeasurePolicy() {
  }
  function measure(_this__u8e3s4, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, arrangementSpacingInt, measureScope, measurables, placeables, startIndex, endIndex, crossAxisOffset, currentLineIndex) {
    crossAxisOffset = crossAxisOffset === VOID ? null : crossAxisOffset;
    currentLineIndex = currentLineIndex === VOID ? 0 : currentLineIndex;
    var arrangementSpacingPx = fromInt(arrangementSpacingInt);
    var totalWeight = 0.0;
    var fixedSpace = 0;
    var crossAxisSpace = 0;
    var weightChildrenCount = 0;
    var anyAlignBy = false;
    var subSize = endIndex - startIndex | 0;
    var childrenMainAxisSize = new Int32Array(subSize);
    var beforeCrossAxisAlignmentLine = 0;
    var afterCrossAxisAlignmentLine = 0;
    var spaceAfterLastNoWeight = 0;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var child = measurables.get_c1px32_k$(i);
        var parentData = get_rowColumnParentData_0(child);
        var weight = get_weight(parentData);
        anyAlignBy = anyAlignBy || get_isRelative(parentData);
        if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          weightChildrenCount = weightChildrenCount + 1 | 0;
        } else {
          var tmp;
          if (crossAxisMax === 2147483647) {
            tmp = null;
          } else {
            var tmp1_safe_receiver = parentData == null ? null : parentData.get_flowLayoutData_cl5r63_k$();
            var tmp_0;
            if (tmp1_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.let' call
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              var this_0 = tmp1_safe_receiver.get_fillCrossAxisFraction_cbepx3_k$() * crossAxisMax;
              var tmp_1;
              if (isNaN_0(this_0)) {
                tmp_1 = 0;
              } else {
                // Inline function 'kotlin.math.roundToInt' call
                tmp_1 = roundToInt(this_0);
              }
              tmp_0 = tmp_1;
            }
            tmp = tmp_0;
          }
          var crossAxisDesiredSize = tmp;
          var remaining = mainAxisMax - fixedSpace | 0;
          var tmp2_elvis_lhs = placeables[i];
          var tmp_2;
          if (tmp2_elvis_lhs == null) {
            var tmp_3 = crossAxisDesiredSize == null ? 0 : crossAxisDesiredSize;
            var tmp_4;
            if (mainAxisMax === 2147483647) {
              tmp_4 = 2147483647;
            } else {
              // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
              tmp_4 = remaining < 0 ? 0 : remaining;
            }
            var tmp_5 = tmp_4;
            tmp_2 = child.measure_4dmfk1_k$(_this__u8e3s4.createConstraints$default_x2rfs3_k$(0, tmp_3, tmp_5, crossAxisDesiredSize == null ? crossAxisMax : crossAxisDesiredSize));
          } else {
            tmp_2 = tmp2_elvis_lhs;
          }
          var placeable = tmp_2;
          var placeableMainAxisSize = _this__u8e3s4.mainAxisSize_q9nnsp_k$(placeable);
          var placeableCrossAxisSize = _this__u8e3s4.crossAxisSize_2m3wdq_k$(placeable);
          childrenMainAxisSize[i - startIndex | 0] = placeableMainAxisSize;
          // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
          var this_1 = remaining - placeableMainAxisSize | 0;
          // Inline function 'kotlin.math.min' call
          var b = this_1 < 0 ? 0 : this_1;
          spaceAfterLastNoWeight = Math.min(arrangementSpacingInt, b);
          fixedSpace = fixedSpace + (placeableMainAxisSize + spaceAfterLastNoWeight | 0) | 0;
          // Inline function 'kotlin.math.max' call
          var a = crossAxisSpace;
          crossAxisSpace = Math.max(a, placeableCrossAxisSize);
          placeables[i] = placeable;
        }
      }
       while (inductionVariable < endIndex);
    var weightedSpace = 0;
    if (weightChildrenCount === 0) {
      fixedSpace = fixedSpace - spaceAfterLastNoWeight | 0;
    } else {
      var tmp_6;
      if (!(mainAxisMax === 2147483647)) {
        tmp_6 = mainAxisMax;
      } else {
        tmp_6 = mainAxisMin;
      }
      var targetSpace = tmp_6;
      // Inline function 'kotlin.Long.times' call
      var other = weightChildrenCount - 1 | 0;
      var arrangementSpacingTotal = multiply(arrangementSpacingPx, fromInt(other));
      var tmp0 = subtract(numberToLong(targetSpace - fixedSpace | 0), arrangementSpacingTotal);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var minimumValue = new Long(0, 0);
      var remainingToTarget = compare(tmp0, minimumValue) < 0 ? minimumValue : tmp0;
      // Inline function 'kotlin.Long.div' call
      var other_0 = totalWeight;
      var weightUnitSpace = toNumber(remainingToTarget) / other_0;
      var remainder = remainingToTarget;
      var inductionVariable_0 = startIndex;
      if (inductionVariable_0 < endIndex)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var measurable = measurables.get_c1px32_k$(i_0);
          var itemWeight = get_weight(get_rowColumnParentData_0(measurable));
          var weightedSize = weightUnitSpace * itemWeight;
          var tmp0_0 = remainder;
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          var tmp_7;
          if (isNaN_0(weightedSize)) {
            tmp_7 = 0;
          } else {
            // Inline function 'kotlin.math.roundToInt' call
            tmp_7 = roundToInt(weightedSize);
          }
          // Inline function 'kotlin.Long.minus' call
          var other_1 = tmp_7;
          remainder = subtract(tmp0_0, fromInt(other_1));
        }
         while (inductionVariable_0 < endIndex);
      var inductionVariable_1 = startIndex;
      if (inductionVariable_1 < endIndex)
        do {
          var i_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          if (placeables[i_1] == null) {
            var child_0 = measurables.get_c1px32_k$(i_1);
            var parentData_0 = get_rowColumnParentData_0(child_0);
            var weight_0 = get_weight(parentData_0);
            var tmp_8;
            if (crossAxisMax === 2147483647) {
              tmp_8 = null;
            } else {
              var tmp6_safe_receiver = parentData_0 == null ? null : parentData_0.get_flowLayoutData_cl5r63_k$();
              var tmp_9;
              if (tmp6_safe_receiver == null) {
                tmp_9 = null;
              } else {
                // Inline function 'kotlin.let' call
                // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
                var this_2 = tmp6_safe_receiver.get_fillCrossAxisFraction_cbepx3_k$() * crossAxisMax;
                var tmp_10;
                if (isNaN_0(this_2)) {
                  tmp_10 = 0;
                } else {
                  // Inline function 'kotlin.math.roundToInt' call
                  tmp_10 = roundToInt(this_2);
                }
                tmp_9 = tmp_10;
              }
              tmp_8 = tmp_9;
            }
            var crossAxisDesiredSize_0 = tmp_8;
            // Inline function 'androidx.compose.foundation.layout.internal.checkPrecondition' call
            if (!(weight_0 > 0)) {
              var tmp$ret$19 = 'All weights <= 0 should have placeables';
              throwIllegalStateException(tmp$ret$19);
            }
            var remainderUnit = get_sign(remainder);
            // Inline function 'kotlin.Long.minus' call
            var this_3 = remainder;
            remainder = subtract(this_3, fromInt(remainderUnit));
            var weightedSize_0 = weightUnitSpace * weight_0;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            var tmp_11;
            if (isNaN_0(weightedSize_0)) {
              tmp_11 = 0;
            } else {
              // Inline function 'kotlin.math.roundToInt' call
              tmp_11 = roundToInt(weightedSize_0);
            }
            // Inline function 'kotlin.math.max' call
            var b_0 = tmp_11 + remainderUnit | 0;
            var childMainAxisSize = Math.max(0, b_0);
            var tmp_12;
            if (get_fill(parentData_0) && !(childMainAxisSize === 2147483647)) {
              tmp_12 = childMainAxisSize;
            } else {
              tmp_12 = 0;
            }
            var tmp_13 = tmp_12;
            var tmp_14 = crossAxisDesiredSize_0 == null ? 0 : crossAxisDesiredSize_0;
            var childConstraints = _this__u8e3s4.createConstraints_abox2e_k$(tmp_13, tmp_14, childMainAxisSize, crossAxisDesiredSize_0 == null ? crossAxisMax : crossAxisDesiredSize_0, true);
            var placeable_0 = child_0.measure_4dmfk1_k$(childConstraints);
            var placeableMainAxisSize_0 = _this__u8e3s4.mainAxisSize_q9nnsp_k$(placeable_0);
            var placeableCrossAxisSize_0 = _this__u8e3s4.crossAxisSize_2m3wdq_k$(placeable_0);
            childrenMainAxisSize[i_1 - startIndex | 0] = placeableMainAxisSize_0;
            weightedSpace = weightedSpace + placeableMainAxisSize_0 | 0;
            // Inline function 'kotlin.math.max' call
            var a_0 = crossAxisSpace;
            crossAxisSpace = Math.max(a_0, placeableCrossAxisSize_0);
            placeables[i_1] = placeable_0;
          }
        }
         while (inductionVariable_1 < endIndex);
      var tmp0_1 = convertToInt(add(numberToLong(weightedSpace), arrangementSpacingTotal));
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue = mainAxisMax - fixedSpace | 0;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_4 = tmp0_1 < 0 ? 0 : tmp0_1;
      weightedSpace = this_4 > maximumValue ? maximumValue : this_4;
    }
    if (anyAlignBy) {
      var inductionVariable_2 = startIndex;
      if (inductionVariable_2 < endIndex)
        do {
          var i_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var placeable_1 = placeables[i_2];
          var parentData_1 = get_rowColumnParentData(ensureNotNull(placeable_1));
          var tmp9_safe_receiver = get_crossAxisAlignment(parentData_1);
          var alignmentLinePosition = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.calculateAlignmentLinePosition_kp8mom_k$(placeable_1);
          if (alignmentLinePosition == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            var placeableCrossAxisSize_1 = _this__u8e3s4.crossAxisSize_2m3wdq_k$(placeable_1);
            var tmp0_2 = beforeCrossAxisAlignmentLine;
            // Inline function 'kotlin.math.max' call
            var b_1 = !(alignmentLinePosition === -2147483648) ? alignmentLinePosition : 0;
            beforeCrossAxisAlignmentLine = Math.max(tmp0_2, b_1);
            var tmp0_3 = afterCrossAxisAlignmentLine;
            var tmp_15;
            if (!(alignmentLinePosition === -2147483648)) {
              tmp_15 = alignmentLinePosition;
            } else {
              tmp_15 = placeableCrossAxisSize_1;
            }
            // Inline function 'kotlin.math.max' call
            var b_2 = placeableCrossAxisSize_1 - tmp_15 | 0;
            afterCrossAxisAlignmentLine = Math.max(tmp0_3, b_2);
          }
        }
         while (inductionVariable_2 < endIndex);
    }
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_5 = fixedSpace + weightedSpace | 0;
    // Inline function 'kotlin.math.max' call
    var a_1 = this_5 < 0 ? 0 : this_5;
    var mainAxisLayoutSize = Math.max(a_1, mainAxisMin);
    var tmp0_4 = crossAxisSpace;
    // Inline function 'kotlin.comparisons.maxOf' call
    var c = beforeCrossAxisAlignmentLine + afterCrossAxisAlignmentLine | 0;
    var crossAxisLayoutSize = Math.max(tmp0_4, crossAxisMin, c);
    var mainAxisPositions = new Int32Array(subSize);
    _this__u8e3s4.populateMainAxisPositions_z5r5pw_k$(mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope);
    return _this__u8e3s4.placeHelper_9ldirp_k$(placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex);
  }
  function get_FillWholeMaxWidth() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxWidth;
  }
  var FillWholeMaxWidth;
  function get_FillWholeMaxHeight() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxHeight;
  }
  var FillWholeMaxHeight;
  function get_FillWholeMaxSize() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxSize;
  }
  var FillWholeMaxSize;
  function get_WrapContentWidthCenter() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentWidthCenter;
  }
  var WrapContentWidthCenter;
  function get_WrapContentWidthStart() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentWidthStart;
  }
  var WrapContentWidthStart;
  function get_WrapContentHeightCenter() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentHeightCenter;
  }
  var WrapContentHeightCenter;
  function get_WrapContentHeightTop() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentHeightTop;
  }
  var WrapContentHeightTop;
  function get_WrapContentSizeCenter() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentSizeCenter;
  }
  var WrapContentSizeCenter;
  function get_WrapContentSizeTopStart() {
    _init_properties_Size_kt__jcru8v();
    return WrapContentSizeTopStart;
  }
  var WrapContentSizeTopStart;
  function sizeIn(_this__u8e3s4, minWidth, minHeight, maxWidth, maxHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : maxHeight;
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = sizeIn$lambda(minWidth, minHeight, maxWidth, maxHeight);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.then_g5qrxq_k$(new SizeElement(minWidth, minHeight, maxWidth, maxHeight, true, tmp$ret$0));
  }
  function heightIn(_this__u8e3s4, min, max) {
    min = min === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : min;
    max = max === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : max;
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = heightIn$lambda(min, max);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.then_g5qrxq_k$(new SizeElement(VOID, min, VOID, max, true, tmp$ret$0));
  }
  function defaultMinSize(_this__u8e3s4, minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minHeight;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.then_g5qrxq_k$(new UnspecifiedConstraintsElement(minWidth, minHeight));
  }
  function fillMaxSize(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.then_g5qrxq_k$(fraction === 1.0 ? get_FillWholeMaxSize() : Companion_getInstance_9().size_34i8tl_k$(fraction));
  }
  function widthIn(_this__u8e3s4, min, max) {
    min = min === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : min;
    max = max === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : max;
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = widthIn$lambda(min, max);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.then_g5qrxq_k$(new SizeElement(min, VOID, max, VOID, true, tmp$ret$0));
  }
  function size(_this__u8e3s4, size) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = size$lambda(size);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return _this__u8e3s4.then_g5qrxq_k$(new SizeElement(size, size, size, size, true, tmp0_inspectorInfo));
  }
  function fillMaxWidth(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.then_g5qrxq_k$(fraction === 1.0 ? get_FillWholeMaxWidth() : Companion_getInstance_9().width_h0xe6_k$(fraction));
  }
  function fillMaxHeight(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.then_g5qrxq_k$(fraction === 1.0 ? get_FillWholeMaxHeight() : Companion_getInstance_9().height_21djpr_k$(fraction));
  }
  function height(_this__u8e3s4, height) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = height$lambda(height);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.then_g5qrxq_k$(new SizeElement(VOID, height, VOID, height, true, tmp$ret$0));
  }
  function wrapContentHeight(_this__u8e3s4, align, unbounded) {
    align = align === VOID ? Companion_getInstance().get_CenterVertically_dmkbbz_k$() : align;
    unbounded = unbounded === VOID ? false : unbounded;
    _init_properties_Size_kt__jcru8v();
    var tmp;
    if (equals(align, Companion_getInstance().get_CenterVertically_dmkbbz_k$()) && !unbounded) {
      tmp = get_WrapContentHeightCenter();
    } else if (equals(align, Companion_getInstance().get_Top_18jj1w_k$()) && !unbounded) {
      tmp = get_WrapContentHeightTop();
    } else {
      tmp = Companion_getInstance_10().height_lq0arx_k$(align, unbounded);
    }
    return _this__u8e3s4.then_g5qrxq_k$(tmp);
  }
  function _get_direction__hwzary($this) {
    return $this.direction_1;
  }
  function _get_fraction__t0yzux($this) {
    return $this.fraction_1;
  }
  function _get_inspectorName__omemen($this) {
    return $this.inspectorName_1;
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).width_h0xe6_k$ = function (fraction) {
    return new FillElement(Direction_Horizontal_getInstance(), fraction, 'fillMaxWidth');
  };
  protoOf(Companion_1).height_21djpr_k$ = function (fraction) {
    return new FillElement(Direction_Vertical_getInstance(), fraction, 'fillMaxHeight');
  };
  protoOf(Companion_1).size_34i8tl_k$ = function (fraction) {
    return new FillElement(Direction_Both_getInstance(), fraction, 'fillMaxSize');
  };
  var Companion_instance_1;
  function Companion_getInstance_9() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function FillElement(direction, fraction, inspectorName) {
    Companion_getInstance_9();
    ModifierNodeElement.call(this);
    this.direction_1 = direction;
    this.fraction_1 = fraction;
    this.inspectorName_1 = inspectorName;
  }
  protoOf(FillElement).create_md4cuc_k$ = function () {
    return new FillNode(this.direction_1, this.fraction_1);
  };
  protoOf(FillElement).update_60b29w_k$ = function (node) {
    node.direction_1 = this.direction_1;
    node.fraction_1 = this.fraction_1;
  };
  protoOf(FillElement).update_9wd57p_k$ = function (node) {
    return this.update_60b29w_k$(node instanceof FillNode ? node : THROW_CCE());
  };
  protoOf(FillElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$(this.inspectorName_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('fraction', this.fraction_1);
  };
  protoOf(FillElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FillElement))
      return false;
    if (!this.direction_1.equals(other.direction_1))
      return false;
    if (!(this.fraction_1 === other.fraction_1))
      return false;
    return true;
  };
  protoOf(FillElement).hashCode = function () {
    var result = this.direction_1.hashCode();
    result = imul(31, result) + getNumberHashCode(this.fraction_1) | 0;
    return result;
  };
  function WrapContentElement$Companion$width$lambda($align) {
    return function (size, layoutDirection) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = size.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var tmp$ret$0 = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntOffset' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val1 = $align.align_y7fd6v_k$(0, tmp$ret$0, layoutDirection);
      var tmp$ret$3 = bitwiseOr(shiftLeft(fromInt(val1), 32), bitwiseAnd(fromInt(0), new Long(-1, 0)));
      var tmp$ret$2 = _IntOffset___init__impl__rq8h7b(tmp$ret$3);
      return new IntOffset(tmp$ret$2);
    };
  }
  function WrapContentElement$Companion$height$lambda($align) {
    return function (size, _unused_var__etf5q3) {
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_0 = size.packedValue_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var tmp$ret$0 = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
      // Inline function 'androidx.compose.ui.unit.IntOffset' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = $align.align_k316px_k$(0, tmp$ret$0);
      var tmp$ret$3 = bitwiseOr(shiftLeft(fromInt(0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$2 = _IntOffset___init__impl__rq8h7b(tmp$ret$3);
      return new IntOffset(tmp$ret$2);
    };
  }
  function WrapContentElement$Companion$size$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset($align.align_mb8mzc_k$(Companion_getInstance_6().get_Zero_9we0a6_k$(), size.packedValue_1, layoutDirection));
    };
  }
  function _get_direction__hwzary_0($this) {
    return $this.direction_1;
  }
  function _get_unbounded__vdc64z($this) {
    return $this.unbounded_1;
  }
  function _get_alignmentCallback__m7n7k9($this) {
    return $this.alignmentCallback_1;
  }
  function _get_align__jw21zo($this) {
    return $this.align_1;
  }
  function _get_inspectorName__omemen_0($this) {
    return $this.inspectorName_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).width_5b10pq_k$ = function (align, unbounded) {
    var tmp = Direction_Horizontal_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$width$lambda(align), align, 'wrapContentWidth');
  };
  protoOf(Companion_2).height_lq0arx_k$ = function (align, unbounded) {
    var tmp = Direction_Vertical_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$height$lambda(align), align, 'wrapContentHeight');
  };
  protoOf(Companion_2).size_xsrtan_k$ = function (align, unbounded) {
    var tmp = Direction_Both_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$size$lambda(align), align, 'wrapContentSize');
  };
  var Companion_instance_2;
  function Companion_getInstance_10() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function WrapContentElement(direction, unbounded, alignmentCallback, align, inspectorName) {
    Companion_getInstance_10();
    ModifierNodeElement.call(this);
    this.direction_1 = direction;
    this.unbounded_1 = unbounded;
    this.alignmentCallback_1 = alignmentCallback;
    this.align_1 = align;
    this.inspectorName_1 = inspectorName;
  }
  protoOf(WrapContentElement).create_md4cuc_k$ = function () {
    return new WrapContentNode(this.direction_1, this.unbounded_1, this.alignmentCallback_1);
  };
  protoOf(WrapContentElement).update_5r7r4s_k$ = function (node) {
    node.direction_1 = this.direction_1;
    node.unbounded_1 = this.unbounded_1;
    node.alignmentCallback_1 = this.alignmentCallback_1;
  };
  protoOf(WrapContentElement).update_9wd57p_k$ = function (node) {
    return this.update_5r7r4s_k$(node instanceof WrapContentNode ? node : THROW_CCE());
  };
  protoOf(WrapContentElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$(this.inspectorName_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('align', this.align_1);
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('unbounded', this.unbounded_1);
  };
  protoOf(WrapContentElement).equals = function (other) {
    if (this === other)
      return true;
    if (other === null)
      return false;
    if (!getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof WrapContentElement))
      THROW_CCE();
    if (!this.direction_1.equals(other.direction_1))
      return false;
    if (!(this.unbounded_1 === other.unbounded_1))
      return false;
    if (!equals(this.align_1, other.align_1))
      return false;
    return true;
  };
  protoOf(WrapContentElement).hashCode = function () {
    var result = this.direction_1.hashCode();
    result = imul(31, result) + getBooleanHashCode(this.unbounded_1) | 0;
    result = imul(31, result) + hashCode(this.align_1) | 0;
    return result;
  };
  function _get_minWidth__tgi6yf($this) {
    return $this.minWidth_1;
  }
  function _get_minHeight__j32lk8($this) {
    return $this.minHeight_1;
  }
  function _get_maxWidth__golao9($this) {
    return $this.maxWidth_1;
  }
  function _get_maxHeight__b29xja($this) {
    return $this.maxHeight_1;
  }
  function _get_enforceIncoming__5fpgix($this) {
    return $this.enforceIncoming_1;
  }
  function _get_inspectorInfo__ojvtbg($this) {
    return $this.inspectorInfo_1;
  }
  function SizeElement(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming, inspectorInfo) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : maxHeight;
    ModifierNodeElement.call(this);
    this.minWidth_1 = minWidth;
    this.minHeight_1 = minHeight;
    this.maxWidth_1 = maxWidth;
    this.maxHeight_1 = maxHeight;
    this.enforceIncoming_1 = enforceIncoming;
    this.inspectorInfo_1 = inspectorInfo;
  }
  protoOf(SizeElement).create_md4cuc_k$ = function () {
    return new SizeNode(this.minWidth_1, this.minHeight_1, this.maxWidth_1, this.maxHeight_1, this.enforceIncoming_1);
  };
  protoOf(SizeElement).update_ocbjcq_k$ = function (node) {
    node.minWidth_1 = this.minWidth_1;
    node.minHeight_1 = this.minHeight_1;
    node.maxWidth_1 = this.maxWidth_1;
    node.maxHeight_1 = this.maxHeight_1;
    node.enforceIncoming_1 = this.enforceIncoming_1;
  };
  protoOf(SizeElement).update_9wd57p_k$ = function (node) {
    return this.update_ocbjcq_k$(node instanceof SizeNode ? node : THROW_CCE());
  };
  protoOf(SizeElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    this.inspectorInfo_1(_this__u8e3s4);
  };
  protoOf(SizeElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SizeElement))
      return false;
    if (!equals(new Dp(this.minWidth_1), new Dp(other.minWidth_1)))
      return false;
    if (!equals(new Dp(this.minHeight_1), new Dp(other.minHeight_1)))
      return false;
    if (!equals(new Dp(this.maxWidth_1), new Dp(other.maxWidth_1)))
      return false;
    if (!equals(new Dp(this.maxHeight_1), new Dp(other.maxHeight_1)))
      return false;
    if (!(this.enforceIncoming_1 === other.enforceIncoming_1))
      return false;
    return true;
  };
  protoOf(SizeElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.minWidth_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.minHeight_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.maxWidth_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.maxHeight_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.enforceIncoming_1) | 0;
    return result;
  };
  function UnspecifiedConstraintsElement(minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minHeight;
    ModifierNodeElement.call(this);
    this.minWidth_1 = minWidth;
    this.minHeight_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsElement).get_minWidth_3ut7ei_k$ = function () {
    return this.minWidth_1;
  };
  protoOf(UnspecifiedConstraintsElement).get_minHeight_lqlp2r_k$ = function () {
    return this.minHeight_1;
  };
  protoOf(UnspecifiedConstraintsElement).create_md4cuc_k$ = function () {
    return new UnspecifiedConstraintsNode(this.minWidth_1, this.minHeight_1);
  };
  protoOf(UnspecifiedConstraintsElement).update_9i36x4_k$ = function (node) {
    node.minWidth_1 = this.minWidth_1;
    node.minHeight_1 = this.minHeight_1;
  };
  protoOf(UnspecifiedConstraintsElement).update_9wd57p_k$ = function (node) {
    return this.update_9i36x4_k$(node instanceof UnspecifiedConstraintsNode ? node : THROW_CCE());
  };
  protoOf(UnspecifiedConstraintsElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_wkmnld_k$('defaultMinSize');
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('minWidth', new Dp(this.minWidth_1));
    _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('minHeight', new Dp(this.minHeight_1));
  };
  protoOf(UnspecifiedConstraintsElement).equals = function (other) {
    if (!(other instanceof UnspecifiedConstraintsElement))
      return false;
    return equals(new Dp(this.minWidth_1), new Dp(other.minWidth_1)) && equals(new Dp(this.minHeight_1), new Dp(other.minHeight_1));
  };
  protoOf(UnspecifiedConstraintsElement).hashCode = function () {
    return imul(Dp__hashCode_impl_sxkrra(this.minWidth_1), 31) + Dp__hashCode_impl_sxkrra(this.minHeight_1) | 0;
  };
  function FillNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.placeRelative$default_rb5x33_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function FillNode(direction, fraction) {
    Node.call(this);
    this.direction_1 = direction;
    this.fraction_1 = fraction;
  }
  protoOf(FillNode).set_direction_yuha1y_k$ = function (_set____db54di) {
    this.direction_1 = _set____db54di;
  };
  protoOf(FillNode).get_direction_7ekune_k$ = function () {
    return this.direction_1;
  };
  protoOf(FillNode).set_fraction_7zdj49_k$ = function (_set____db54di) {
    this.fraction_1 = _set____db54di;
  };
  protoOf(FillNode).get_fraction_bvkonf_k$ = function () {
    return this.fraction_1;
  };
  protoOf(FillNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var minWidth;
    var maxWidth;
    if (_Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) && !this.direction_1.equals(Direction_Vertical_getInstance())) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      var this_0 = _Constraints___get_maxWidth__impl__uuyqc(constraints) * this.fraction_1;
      var tmp;
      if (isNaN_0(this_0)) {
        tmp = 0;
      } else {
        // Inline function 'kotlin.math.roundToInt' call
        tmp = roundToInt(this_0);
      }
      var tmp0 = tmp;
      var tmp2 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue = _Constraints___get_maxWidth__impl__uuyqc(constraints);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_1 = tmp0 < tmp2 ? tmp2 : tmp0;
      var width = this_1 > maximumValue ? maximumValue : this_1;
      minWidth = width;
      maxWidth = width;
    } else {
      minWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      maxWidth = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var minHeight;
    var maxHeight;
    if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints) && !this.direction_1.equals(Direction_Horizontal_getInstance())) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      var this_2 = _Constraints___get_maxHeight__impl__dt3e8z(constraints) * this.fraction_1;
      var tmp_0;
      if (isNaN_0(this_2)) {
        tmp_0 = 0;
      } else {
        // Inline function 'kotlin.math.roundToInt' call
        tmp_0 = roundToInt(this_2);
      }
      var tmp0_0 = tmp_0;
      var tmp2_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_3 = tmp0_0 < tmp2_0 ? tmp2_0 : tmp0_0;
      var height = this_3 > maximumValue_0 ? maximumValue_0 : this_3;
      minHeight = height;
      maxHeight = height;
    } else {
      minHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var placeable = measurable.measure_4dmfk1_k$(Constraints(minWidth, maxWidth, minHeight, maxHeight));
    var tmp_1 = placeable.get_width_j0q4yl_k$();
    var tmp_2 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp_1, tmp_2, VOID, FillNode$measure$lambda(placeable));
  };
  var static_init_called_0;
  function static_init_0() {
    if (static_init_called_0)
      return Unit_getInstance();
    static_init_called_0 = true;
    Direction_Vertical_instance = new Direction('Vertical', 0);
    Direction_Horizontal_instance = new Direction('Horizontal', 1);
    Direction_Both_instance = new Direction('Both', 2);
  }
  var Direction_Vertical_instance;
  var Direction_Horizontal_instance;
  var Direction_Both_instance;
  function values_0() {
    static_init_0();
    return [Direction_Vertical_getInstance(), Direction_Horizontal_getInstance(), Direction_Both_getInstance()];
  }
  function valueOf_0(value) {
    static_init_0();
    switch (value) {
      case 'Vertical':
        return Direction_Vertical_getInstance();
      case 'Horizontal':
        return Direction_Horizontal_getInstance();
      case 'Both':
        return Direction_Both_getInstance();
      default:
        THROW_IAE('No enum constant androidx.compose.foundation.layout.Direction.' + value);
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
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function WrapContentNode$measure$lambda(this$0, $wrapperWidth, $placeable, $wrapperHeight, $this_measure) {
    return function ($this$layout) {
      var tmp = this$0.alignmentCallback_1;
      var tmp0 = $wrapperWidth - $placeable.get_width_j0q4yl_k$() | 0;
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = $wrapperHeight - $placeable.get_height_e7t92o_k$() | 0;
      var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$0 = _IntSize___init__impl__emcjft(tmp$ret$1);
      var position = tmp(new IntSize(tmp$ret$0), $this_measure.get_layoutDirection_7e37v0_k$()).packedValue_1;
      $this$layout.place$default_dbzi3k_k$($placeable, position);
      return Unit_getInstance();
    };
  }
  function WrapContentNode(direction, unbounded, alignmentCallback) {
    Node.call(this);
    this.direction_1 = direction;
    this.unbounded_1 = unbounded;
    this.alignmentCallback_1 = alignmentCallback;
  }
  protoOf(WrapContentNode).set_direction_yuha1y_k$ = function (_set____db54di) {
    this.direction_1 = _set____db54di;
  };
  protoOf(WrapContentNode).get_direction_7ekune_k$ = function () {
    return this.direction_1;
  };
  protoOf(WrapContentNode).set_unbounded_s9oby_k$ = function (_set____db54di) {
    this.unbounded_1 = _set____db54di;
  };
  protoOf(WrapContentNode).get_unbounded_x1kds5_k$ = function () {
    return this.unbounded_1;
  };
  protoOf(WrapContentNode).set_alignmentCallback_1e0ra7_k$ = function (_set____db54di) {
    this.alignmentCallback_1 = _set____db54di;
  };
  protoOf(WrapContentNode).get_alignmentCallback_mp8hup_k$ = function () {
    return this.alignmentCallback_1;
  };
  protoOf(WrapContentNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var tmp0_minWidth = !this.direction_1.equals(Direction_Vertical_getInstance()) ? 0 : _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp1_minHeight = !this.direction_1.equals(Direction_Horizontal_getInstance()) ? 0 : _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp;
    if (!this.direction_1.equals(Direction_Vertical_getInstance()) && this.unbounded_1) {
      tmp = 2147483647;
    } else {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var tmp2_maxWidth = tmp;
    var tmp_0;
    if (!this.direction_1.equals(Direction_Horizontal_getInstance()) && this.unbounded_1) {
      tmp_0 = 2147483647;
    } else {
      tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var tmp3_maxHeight = tmp_0;
    var wrappedConstraints = Constraints(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
    var placeable = measurable.measure_4dmfk1_k$(wrappedConstraints);
    var wrapperWidth = coerceIn(placeable.get_width_j0q4yl_k$(), _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
    var wrapperHeight = coerceIn(placeable.get_height_e7t92o_k$(), _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    return _this__u8e3s4.layout$default_n19e5l_k$(wrapperWidth, wrapperHeight, VOID, WrapContentNode$measure$lambda(this, wrapperWidth, placeable, wrapperHeight, _this__u8e3s4));
  };
  function _get_targetConstraints__wn7g24($this, $receiver) {
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_0 = $this.maxWidth_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_1 = $receiver.roundToPx_yb7vg8_k$($this.maxWidth_1);
      tmp = this_1 < 0 ? 0 : this_1;
    } else {
      tmp = 2147483647;
    }
    var maxWidth = tmp;
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_2 = $this.maxHeight_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_2))) {
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_3 = $receiver.roundToPx_yb7vg8_k$($this.maxHeight_1);
      tmp_0 = this_3 < 0 ? 0 : this_3;
    } else {
      tmp_0 = 2147483647;
    }
    var maxHeight = tmp_0;
    var tmp_1;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_4 = $this.minWidth_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_4))) {
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_5 = $receiver.roundToPx_yb7vg8_k$($this.minWidth_1);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_6 = this_5 < 0 ? 0 : this_5;
      // Inline function 'kotlin.let' call
      var it = this_6 > maxWidth ? maxWidth : this_6;
      tmp_1 = !(it === 2147483647) ? it : 0;
    } else {
      tmp_1 = 0;
    }
    var minWidth = tmp_1;
    var tmp_2;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_7 = $this.minHeight_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_7))) {
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_8 = $receiver.roundToPx_yb7vg8_k$($this.minHeight_1);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_9 = this_8 < 0 ? 0 : this_8;
      // Inline function 'kotlin.let' call
      var it_0 = this_9 > maxHeight ? maxHeight : this_9;
      tmp_2 = !(it_0 === 2147483647) ? it_0 : 0;
    } else {
      tmp_2 = 0;
    }
    var minHeight = tmp_2;
    return Constraints(minWidth, maxWidth, minHeight, maxHeight);
  }
  function SizeNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.placeRelative$default_rb5x33_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function SizeNode(minWidth, minHeight, maxWidth, maxHeight, enforceIncoming) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : maxHeight;
    Node.call(this);
    this.minWidth_1 = minWidth;
    this.minHeight_1 = minHeight;
    this.maxWidth_1 = maxWidth;
    this.maxHeight_1 = maxHeight;
    this.enforceIncoming_1 = enforceIncoming;
  }
  protoOf(SizeNode).set_minWidth_nt0wsq_k$ = function (_set____db54di) {
    this.minWidth_1 = _set____db54di;
  };
  protoOf(SizeNode).get_minWidth_3ut7ei_k$ = function () {
    return this.minWidth_1;
  };
  protoOf(SizeNode).set_minHeight_o84vor_k$ = function (_set____db54di) {
    this.minHeight_1 = _set____db54di;
  };
  protoOf(SizeNode).get_minHeight_lqlp2r_k$ = function () {
    return this.minHeight_1;
  };
  protoOf(SizeNode).set_maxWidth_llwtu0_k$ = function (_set____db54di) {
    this.maxWidth_1 = _set____db54di;
  };
  protoOf(SizeNode).get_maxWidth_u7u2hk_k$ = function () {
    return this.maxWidth_1;
  };
  protoOf(SizeNode).set_maxHeight_bgxpqx_k$ = function (_set____db54di) {
    this.maxHeight_1 = _set____db54di;
  };
  protoOf(SizeNode).get_maxHeight_cjye1t_k$ = function () {
    return this.maxHeight_1;
  };
  protoOf(SizeNode).set_enforceIncoming_qike0a_k$ = function (_set____db54di) {
    this.enforceIncoming_1 = _set____db54di;
  };
  protoOf(SizeNode).get_enforceIncoming_ilwx4x_k$ = function () {
    return this.enforceIncoming_1;
  };
  protoOf(SizeNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'kotlin.let' call
    var targetConstraints = _get_targetConstraints__wn7g24(this, _this__u8e3s4);
    var tmp;
    if (this.enforceIncoming_1) {
      tmp = constrain(constraints, targetConstraints);
    } else {
      var tmp_0;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      var this_0 = this.minWidth_1;
      if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
        tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(targetConstraints);
      } else {
        var tmp0 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
        // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
        var maximumValue = _Constraints___get_maxWidth__impl__uuyqc(targetConstraints);
        tmp_0 = tmp0 > maximumValue ? maximumValue : tmp0;
      }
      var resolvedMinWidth = tmp_0;
      var tmp_1;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      var this_1 = this.maxWidth_1;
      if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_1))) {
        tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(targetConstraints);
      } else {
        var tmp0_0 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
        // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
        var minimumValue = _Constraints___get_minWidth__impl__hi9lfi(targetConstraints);
        tmp_1 = tmp0_0 < minimumValue ? minimumValue : tmp0_0;
      }
      var resolvedMaxWidth = tmp_1;
      var tmp_2;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      var this_2 = this.minHeight_1;
      if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_2))) {
        tmp_2 = _Constraints___get_minHeight__impl__ev4bgx(targetConstraints);
      } else {
        var tmp0_1 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
        // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
        var maximumValue_0 = _Constraints___get_maxHeight__impl__dt3e8z(targetConstraints);
        tmp_2 = tmp0_1 > maximumValue_0 ? maximumValue_0 : tmp0_1;
      }
      var resolvedMinHeight = tmp_2;
      var tmp_3;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      var this_3 = this.maxHeight_1;
      if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_3))) {
        tmp_3 = _Constraints___get_maxHeight__impl__dt3e8z(targetConstraints);
      } else {
        var tmp0_2 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
        // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
        var minimumValue_0 = _Constraints___get_minHeight__impl__ev4bgx(targetConstraints);
        tmp_3 = tmp0_2 < minimumValue_0 ? minimumValue_0 : tmp0_2;
      }
      var resolvedMaxHeight = tmp_3;
      tmp = Constraints(resolvedMinWidth, resolvedMaxWidth, resolvedMinHeight, resolvedMaxHeight);
    }
    var wrappedConstraints = tmp;
    var placeable = measurable.measure_4dmfk1_k$(wrappedConstraints);
    var tmp_4 = placeable.get_width_j0q4yl_k$();
    var tmp_5 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp_4, tmp_5, VOID, SizeNode$measure$lambda(placeable));
  };
  protoOf(SizeNode).minIntrinsicWidth_nsvhwg_k$ = function (_this__u8e3s4, measurable, height) {
    var constraints = _get_targetConstraints__wn7g24(this, _this__u8e3s4);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__4p17wc(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      var childHeight = this.enforceIncoming_1 ? height : constrainHeight(constraints, height);
      tmp = constrainWidth(constraints, measurable.minIntrinsicWidth_jyhjuj_k$(childHeight));
    }
    return tmp;
  };
  protoOf(SizeNode).minIntrinsicHeight_xt6ly1_k$ = function (_this__u8e3s4, measurable, width) {
    var constraints = _get_targetConstraints__wn7g24(this, _this__u8e3s4);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__y56fxx(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    } else {
      var childWidth = this.enforceIncoming_1 ? width : constrainWidth(constraints, width);
      tmp = constrainHeight(constraints, measurable.minIntrinsicHeight_p2a4ou_k$(childWidth));
    }
    return tmp;
  };
  protoOf(SizeNode).maxIntrinsicWidth_epsb1u_k$ = function (_this__u8e3s4, measurable, height) {
    var constraints = _get_targetConstraints__wn7g24(this, _this__u8e3s4);
    var tmp;
    if (_Constraints___get_hasFixedWidth__impl__4p17wc(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      var childHeight = this.enforceIncoming_1 ? height : constrainHeight(constraints, height);
      tmp = constrainWidth(constraints, measurable.maxIntrinsicWidth_b8umbx_k$(childHeight));
    }
    return tmp;
  };
  protoOf(SizeNode).maxIntrinsicHeight_nrifyt_k$ = function (_this__u8e3s4, measurable, width) {
    var constraints = _get_targetConstraints__wn7g24(this, _this__u8e3s4);
    var tmp;
    if (_Constraints___get_hasFixedHeight__impl__y56fxx(constraints)) {
      tmp = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    } else {
      var childWidth = this.enforceIncoming_1 ? width : constrainWidth(constraints, width);
      tmp = constrainHeight(constraints, measurable.maxIntrinsicHeight_b0krtc_k$(childWidth));
    }
    return tmp;
  };
  function UnspecifiedConstraintsNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.placeRelative$default_rb5x33_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function UnspecifiedConstraintsNode(minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minHeight;
    Node.call(this);
    this.minWidth_1 = minWidth;
    this.minHeight_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsNode).set_minWidth_nt0wsq_k$ = function (_set____db54di) {
    this.minWidth_1 = _set____db54di;
  };
  protoOf(UnspecifiedConstraintsNode).get_minWidth_3ut7ei_k$ = function () {
    return this.minWidth_1;
  };
  protoOf(UnspecifiedConstraintsNode).set_minHeight_o84vor_k$ = function (_set____db54di) {
    this.minHeight_1 = _set____db54di;
  };
  protoOf(UnspecifiedConstraintsNode).get_minHeight_lqlp2r_k$ = function () {
    return this.minHeight_1;
  };
  protoOf(UnspecifiedConstraintsNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_0 = this.minWidth_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(constraints) === 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp0 = _this__u8e3s4.roundToPx_yb7vg8_k$(this.minWidth_1);
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue = _Constraints___get_maxWidth__impl__uuyqc(constraints);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_1 = tmp0 < 0 ? 0 : tmp0;
      tmp = this_1 > maximumValue ? maximumValue : this_1;
    } else {
      tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    }
    var tmp_1 = tmp;
    var tmp_2 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_3;
    var tmp_4;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_2 = this.minHeight_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_2))) {
      tmp_4 = _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      var tmp0_0 = _this__u8e3s4.roundToPx_yb7vg8_k$(this.minHeight_1);
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_3 = tmp0_0 < 0 ? 0 : tmp0_0;
      tmp_3 = this_3 > maximumValue_0 ? maximumValue_0 : this_3;
    } else {
      tmp_3 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    }
    var wrappedConstraints = Constraints(tmp_1, tmp_2, tmp_3, _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    var placeable = measurable.measure_4dmfk1_k$(wrappedConstraints);
    var tmp_5 = placeable.get_width_j0q4yl_k$();
    var tmp_6 = placeable.get_height_e7t92o_k$();
    return _this__u8e3s4.layout$default_n19e5l_k$(tmp_5, tmp_6, VOID, UnspecifiedConstraintsNode$measure$lambda(placeable));
  };
  protoOf(UnspecifiedConstraintsNode).minIntrinsicWidth_nsvhwg_k$ = function (_this__u8e3s4, measurable, height) {
    var tmp0 = measurable.minIntrinsicWidth_jyhjuj_k$(height);
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_0 = this.minWidth_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      tmp = _this__u8e3s4.roundToPx_yb7vg8_k$(this.minWidth_1);
    } else {
      tmp = 0;
    }
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = tmp;
    return tmp0 < minimumValue ? minimumValue : tmp0;
  };
  protoOf(UnspecifiedConstraintsNode).maxIntrinsicWidth_epsb1u_k$ = function (_this__u8e3s4, measurable, height) {
    var tmp0 = measurable.maxIntrinsicWidth_b8umbx_k$(height);
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_0 = this.minWidth_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      tmp = _this__u8e3s4.roundToPx_yb7vg8_k$(this.minWidth_1);
    } else {
      tmp = 0;
    }
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = tmp;
    return tmp0 < minimumValue ? minimumValue : tmp0;
  };
  protoOf(UnspecifiedConstraintsNode).minIntrinsicHeight_xt6ly1_k$ = function (_this__u8e3s4, measurable, width) {
    var tmp0 = measurable.minIntrinsicHeight_p2a4ou_k$(width);
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_0 = this.minHeight_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      tmp = _this__u8e3s4.roundToPx_yb7vg8_k$(this.minHeight_1);
    } else {
      tmp = 0;
    }
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = tmp;
    return tmp0 < minimumValue ? minimumValue : tmp0;
  };
  protoOf(UnspecifiedConstraintsNode).maxIntrinsicHeight_nrifyt_k$ = function (_this__u8e3s4, measurable, width) {
    var tmp0 = measurable.maxIntrinsicHeight_b0krtc_k$(width);
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_0 = this.minHeight_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      tmp = _this__u8e3s4.roundToPx_yb7vg8_k$(this.minHeight_1);
    } else {
      tmp = 0;
    }
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var minimumValue = tmp;
    return tmp0 < minimumValue ? minimumValue : tmp0;
  };
  function requiredSizeIn(_this__u8e3s4, minWidth, minHeight, maxWidth, maxHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : minHeight;
    maxWidth = maxWidth === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : maxWidth;
    maxHeight = maxHeight === VOID ? Companion_getInstance_4().get_Unspecified_9b9rm3_k$() : maxHeight;
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = requiredSizeIn$lambda(minWidth, minHeight, maxWidth, maxHeight);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.then_g5qrxq_k$(new SizeElement(minWidth, minHeight, maxWidth, maxHeight, false, tmp$ret$0));
  }
  function size_0(_this__u8e3s4, width, height) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = size$lambda_0(width, height);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return _this__u8e3s4.then_g5qrxq_k$(new SizeElement(width, height, width, height, true, tmp0_inspectorInfo));
  }
  function width_0(_this__u8e3s4, width) {
    _init_properties_Size_kt__jcru8v();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = width$lambda_0(width);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.then_g5qrxq_k$(new SizeElement(width, VOID, width, VOID, true, tmp$ret$0));
  }
  function sizeIn$lambda($minWidth, $minHeight, $maxWidth, $maxHeight) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.set_name_wkmnld_k$('sizeIn');
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('minWidth', new Dp($minWidth));
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('minHeight', new Dp($minHeight));
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('maxWidth', new Dp($maxWidth));
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('maxHeight', new Dp($maxHeight));
      return Unit_getInstance();
    };
  }
  function heightIn$lambda($min, $max) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.set_name_wkmnld_k$('heightIn');
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('min', new Dp($min));
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('max', new Dp($max));
      return Unit_getInstance();
    };
  }
  function widthIn$lambda($min, $max) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.set_name_wkmnld_k$('widthIn');
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('min', new Dp($min));
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('max', new Dp($max));
      return Unit_getInstance();
    };
  }
  function size$lambda($size) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.set_name_wkmnld_k$('size');
      _this__u8e3s4.set_value_rjqr2d_k$(new Dp($size));
      return Unit_getInstance();
    };
  }
  function height$lambda($height) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.set_name_wkmnld_k$('height');
      _this__u8e3s4.set_value_rjqr2d_k$(new Dp($height));
      return Unit_getInstance();
    };
  }
  function requiredSizeIn$lambda($minWidth, $minHeight, $maxWidth, $maxHeight) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.set_name_wkmnld_k$('requiredSizeIn');
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('minWidth', new Dp($minWidth));
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('minHeight', new Dp($minHeight));
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('maxWidth', new Dp($maxWidth));
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('maxHeight', new Dp($maxHeight));
      return Unit_getInstance();
    };
  }
  function size$lambda_0($width, $height) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.set_name_wkmnld_k$('size');
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('width', new Dp($width));
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('height', new Dp($height));
      return Unit_getInstance();
    };
  }
  function width$lambda_0($width) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.set_name_wkmnld_k$('width');
      _this__u8e3s4.set_value_rjqr2d_k$(new Dp($width));
      return Unit_getInstance();
    };
  }
  function Direction_Vertical_getInstance() {
    static_init_0();
    return Direction_Vertical_instance;
  }
  function Direction_Horizontal_getInstance() {
    static_init_0();
    return Direction_Horizontal_instance;
  }
  function Direction_Both_getInstance() {
    static_init_0();
    return Direction_Both_instance;
  }
  var properties_initialized_Size_kt_x7rk2r;
  function _init_properties_Size_kt__jcru8v() {
    if (!properties_initialized_Size_kt_x7rk2r) {
      properties_initialized_Size_kt_x7rk2r = true;
      FillWholeMaxWidth = Companion_getInstance_9().width_h0xe6_k$(1.0);
      FillWholeMaxHeight = Companion_getInstance_9().height_21djpr_k$(1.0);
      FillWholeMaxSize = Companion_getInstance_9().size_34i8tl_k$(1.0);
      WrapContentWidthCenter = Companion_getInstance_10().width_5b10pq_k$(Companion_getInstance().get_CenterHorizontally_97ab0v_k$(), false);
      WrapContentWidthStart = Companion_getInstance_10().width_5b10pq_k$(Companion_getInstance().get_Start_ih4i6x_k$(), false);
      WrapContentHeightCenter = Companion_getInstance_10().height_lq0arx_k$(Companion_getInstance().get_CenterVertically_dmkbbz_k$(), false);
      WrapContentHeightTop = Companion_getInstance_10().height_lq0arx_k$(Companion_getInstance().get_Top_18jj1w_k$(), false);
      WrapContentSizeCenter = Companion_getInstance_10().size_xsrtan_k$(Companion_getInstance().get_Center_3arb0i_k$(), false);
      WrapContentSizeTopStart = Companion_getInstance_10().size_xsrtan_k$(Companion_getInstance().get_TopStart_o4x792_k$(), false);
    }
  }
  function Spacer(modifier, $composer, $changed) {
    var $composer_0 = $composer;
    var tmp2 = SpacerMeasurePolicy_getInstance();
    // Inline function 'androidx.compose.ui.layout.Layout' call
    var modifier_0 = modifier;
    var $composer_1 = $composer_0;
    if (!((0 & 1) === 0))
      modifier_0 = Companion_getInstance_0();
    var compositeKeyHash = get_currentCompositeKeyHashCode($composer_1, 0).hashCode();
    var materialized = materialize($composer_1, modifier_0);
    var localMap = $composer_1.get_currentCompositionLocalMap_fmcf79_k$();
    // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
    var factory = Companion_getInstance_1().get_Constructor_f7ieep_k$();
    var $composer_2 = $composer_1;
    var tmp = $composer_2.get_applier_bupu8u_k$();
    if (!isInterface(tmp, Applier)) {
      invalidApplier();
    }
    $composer_2.startReusableNode_jjgeyp_k$();
    if ($composer_2.get_inserting_25mlsw_k$()) {
      $composer_2.createNode_ahrd54_k$(factory);
    } else {
      $composer_2.useNode_io5s9l_k$();
    }
    var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp2, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
    Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().get_SetResolvedCompositionLocals_rc2u9t_k$());
    Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_1().get_ApplyOnDeactivatedNodeAssertion_wnqbfw_k$());
    Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().get_SetModifier_6tz580_k$());
    Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_1().get_SetCompositeKeyHash_n8lgg1_k$());
    $composer_2.endNode_3m0yfn_k$();
  }
  function SpacerMeasurePolicy$measure$lambda($this$layout) {
    return Unit_getInstance();
  }
  function SpacerMeasurePolicy() {
    SpacerMeasurePolicy_instance = this;
  }
  protoOf(SpacerMeasurePolicy).measure_xg9b01_k$ = function (_this__u8e3s4, measurables, constraints) {
    // Inline function 'kotlin.with' call
    var width = _Constraints___get_hasFixedWidth__impl__4p17wc(constraints) ? _Constraints___get_maxWidth__impl__uuyqc(constraints) : 0;
    var height = _Constraints___get_hasFixedHeight__impl__y56fxx(constraints) ? _Constraints___get_maxHeight__impl__dt3e8z(constraints) : 0;
    return _this__u8e3s4.layout$default_n19e5l_k$(width, height, VOID, SpacerMeasurePolicy$measure$lambda);
  };
  var SpacerMeasurePolicy_instance;
  function SpacerMeasurePolicy_getInstance() {
    if (SpacerMeasurePolicy_instance == null)
      new SpacerMeasurePolicy();
    return SpacerMeasurePolicy_instance;
  }
  function get_EmptyWindowInsets() {
    _init_properties_WindowInsets_kt__lpu9pi();
    return EmptyWindowInsets;
  }
  var EmptyWindowInsets;
  var androidx_compose_foundation_layout_MutableWindowInsets$stable;
  var androidx_compose_foundation_layout_ValueInsets$stable;
  var androidx_compose_foundation_layout_InsetsValues$stable;
  function Companion_3() {
    Companion_instance_3 = this;
  }
  var Companion_instance_3;
  function Companion_getInstance_11() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function WindowInsets() {
  }
  function only(_this__u8e3s4, sides) {
    _init_properties_WindowInsets_kt__lpu9pi();
    return new LimitInsets(_this__u8e3s4, sides);
  }
  function _WindowInsetsSides___init__impl__nuufbx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function WindowInsetsSides__plus_impl_9q9m59($this, sides) {
    return _WindowInsetsSides___init__impl__nuufbx(_get_value__a43j40($this) | _get_value__a43j40(sides));
  }
  function WindowInsetsSides__hasAny_impl_v1wjnf($this, sides) {
    return !((_get_value__a43j40($this) & _get_value__a43j40(sides)) === 0);
  }
  function WindowInsetsSides__toString_impl_h23h9x($this) {
    return 'WindowInsetsSides(' + valueToString($this) + ')';
  }
  function valueToString($this) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_12().Start_1)) === _get_value__a43j40(Companion_getInstance_12().Start_1)) {
      valueToString$appendPlus(this_0, 'Start');
    }
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_12().Left_1)) === _get_value__a43j40(Companion_getInstance_12().Left_1)) {
      valueToString$appendPlus(this_0, 'Left');
    }
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_12().Top_1)) === _get_value__a43j40(Companion_getInstance_12().Top_1)) {
      valueToString$appendPlus(this_0, 'Top');
    }
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_12().End_1)) === _get_value__a43j40(Companion_getInstance_12().End_1)) {
      valueToString$appendPlus(this_0, 'End');
    }
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_12().Right_1)) === _get_value__a43j40(Companion_getInstance_12().Right_1)) {
      valueToString$appendPlus(this_0, 'Right');
    }
    if ((_get_value__a43j40($this) & _get_value__a43j40(Companion_getInstance_12().Bottom_1)) === _get_value__a43j40(Companion_getInstance_12().Bottom_1)) {
      valueToString$appendPlus(this_0, 'Bottom');
    }
    return this_0.toString();
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.AllowLeftInLtr_1 = _WindowInsetsSides___init__impl__nuufbx(8);
    this.AllowRightInLtr_1 = _WindowInsetsSides___init__impl__nuufbx(4);
    this.AllowLeftInRtl_1 = _WindowInsetsSides___init__impl__nuufbx(2);
    this.AllowRightInRtl_1 = _WindowInsetsSides___init__impl__nuufbx(1);
    this.Start_1 = WindowInsetsSides__plus_impl_9q9m59(this.AllowLeftInLtr_1, this.AllowRightInRtl_1);
    this.End_1 = WindowInsetsSides__plus_impl_9q9m59(this.AllowRightInLtr_1, this.AllowLeftInRtl_1);
    this.Top_1 = _WindowInsetsSides___init__impl__nuufbx(16);
    this.Bottom_1 = _WindowInsetsSides___init__impl__nuufbx(32);
    this.Left_1 = WindowInsetsSides__plus_impl_9q9m59(this.AllowLeftInLtr_1, this.AllowLeftInRtl_1);
    this.Right_1 = WindowInsetsSides__plus_impl_9q9m59(this.AllowRightInLtr_1, this.AllowRightInRtl_1);
    this.Horizontal_1 = WindowInsetsSides__plus_impl_9q9m59(this.Left_1, this.Right_1);
    this.Vertical_1 = WindowInsetsSides__plus_impl_9q9m59(this.Top_1, this.Bottom_1);
  }
  protoOf(Companion_4).get_AllowLeftInLtr_k8ojjk_k$ = function () {
    return this.AllowLeftInLtr_1;
  };
  protoOf(Companion_4).get_AllowRightInLtr_xgjf17_k$ = function () {
    return this.AllowRightInLtr_1;
  };
  protoOf(Companion_4).get_AllowLeftInRtl_5zsd5c_k$ = function () {
    return this.AllowLeftInRtl_1;
  };
  protoOf(Companion_4).get_AllowRightInRtl_782icb_k$ = function () {
    return this.AllowRightInRtl_1;
  };
  protoOf(Companion_4).get_Start_xy9wj1_k$ = function () {
    return this.Start_1;
  };
  protoOf(Companion_4).get_End_zb8kxy_k$ = function () {
    return this.End_1;
  };
  protoOf(Companion_4).get_Top_xmufy8_k$ = function () {
    return this.Top_1;
  };
  protoOf(Companion_4).get_Bottom_mn6gjc_k$ = function () {
    return this.Bottom_1;
  };
  protoOf(Companion_4).get_Left_7jhl0c_k$ = function () {
    return this.Left_1;
  };
  protoOf(Companion_4).get_Right_ts0y3d_k$ = function () {
    return this.Right_1;
  };
  protoOf(Companion_4).get_Horizontal_9ftwyp_k$ = function () {
    return this.Horizontal_1;
  };
  protoOf(Companion_4).get_Vertical_ny832l_k$ = function () {
    return this.Vertical_1;
  };
  var Companion_instance_4;
  function Companion_getInstance_12() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function WindowInsetsSides__hashCode_impl_w7unwc($this) {
    return $this;
  }
  function WindowInsetsSides__equals_impl_fwz4tk($this, other) {
    if (!(other instanceof WindowInsetsSides))
      return false;
    if (!($this === other.value_1))
      return false;
    return true;
  }
  function valueToString$appendPlus($this_buildString, text) {
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength($this_buildString) > 0) {
      $this_buildString.append_am5a4z_k$(_Char___init__impl__6a9atx(43));
    }
    $this_buildString.append_22ad7x_k$(text);
  }
  function WindowInsetsSides(value) {
    Companion_getInstance_12();
    this.value_1 = value;
  }
  protoOf(WindowInsetsSides).toString = function () {
    return WindowInsetsSides__toString_impl_h23h9x(this.value_1);
  };
  protoOf(WindowInsetsSides).hashCode = function () {
    return WindowInsetsSides__hashCode_impl_w7unwc(this.value_1);
  };
  protoOf(WindowInsetsSides).equals = function (other) {
    return WindowInsetsSides__equals_impl_fwz4tk(this.value_1, other);
  };
  function _get_leftVal__7g7e4p($this) {
    return $this.leftVal_1;
  }
  function _get_topVal__iy0agv($this) {
    return $this.topVal_1;
  }
  function _get_rightVal__1fxr7e($this) {
    return $this.rightVal_1;
  }
  function _get_bottomVal__lks4yj($this) {
    return $this.bottomVal_1;
  }
  function FixedIntInsets(leftVal, topVal, rightVal, bottomVal) {
    this.leftVal_1 = leftVal;
    this.topVal_1 = topVal;
    this.rightVal_1 = rightVal;
    this.bottomVal_1 = bottomVal;
  }
  protoOf(FixedIntInsets).getLeft_sdff2j_k$ = function (density, layoutDirection) {
    return this.leftVal_1;
  };
  protoOf(FixedIntInsets).getTop_j1mevb_k$ = function (density) {
    return this.topVal_1;
  };
  protoOf(FixedIntInsets).getRight_nwst5g_k$ = function (density, layoutDirection) {
    return this.rightVal_1;
  };
  protoOf(FixedIntInsets).getBottom_4od39h_k$ = function (density) {
    return this.bottomVal_1;
  };
  protoOf(FixedIntInsets).toString = function () {
    return 'Insets(left=' + this.leftVal_1 + ', top=' + this.topVal_1 + ', right=' + this.rightVal_1 + ', bottom=' + this.bottomVal_1 + ')';
  };
  protoOf(FixedIntInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof FixedIntInsets)) {
      return false;
    }
    return this.leftVal_1 === other.leftVal_1 && this.topVal_1 === other.topVal_1 && this.rightVal_1 === other.rightVal_1 && this.bottomVal_1 === other.bottomVal_1;
  };
  protoOf(FixedIntInsets).hashCode = function () {
    var result = this.leftVal_1;
    result = imul(31, result) + this.topVal_1 | 0;
    result = imul(31, result) + this.rightVal_1 | 0;
    result = imul(31, result) + this.bottomVal_1 | 0;
    return result;
  };
  function LimitInsets(insets, sides) {
    this.insets_1 = insets;
    this.sides_1 = sides;
  }
  protoOf(LimitInsets).get_insets_etzdhb_k$ = function () {
    return this.insets_1;
  };
  protoOf(LimitInsets).get_sides_kggi1z_k$ = function () {
    return this.sides_1;
  };
  protoOf(LimitInsets).getLeft_sdff2j_k$ = function (density, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = Companion_getInstance_12().AllowLeftInLtr_1;
    } else {
      tmp = Companion_getInstance_12().AllowLeftInRtl_1;
    }
    var layoutDirectionSide = tmp;
    var allowLeft = WindowInsetsSides__hasAny_impl_v1wjnf(this.sides_1, layoutDirectionSide);
    var tmp_0;
    if (allowLeft) {
      tmp_0 = this.insets_1.getLeft_sdff2j_k$(density, layoutDirection);
    } else {
      tmp_0 = 0;
    }
    return tmp_0;
  };
  protoOf(LimitInsets).getTop_j1mevb_k$ = function (density) {
    return WindowInsetsSides__hasAny_impl_v1wjnf(this.sides_1, Companion_getInstance_12().Top_1) ? this.insets_1.getTop_j1mevb_k$(density) : 0;
  };
  protoOf(LimitInsets).getRight_nwst5g_k$ = function (density, layoutDirection) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = Companion_getInstance_12().AllowRightInLtr_1;
    } else {
      tmp = Companion_getInstance_12().AllowRightInRtl_1;
    }
    var layoutDirectionSide = tmp;
    var allowRight = WindowInsetsSides__hasAny_impl_v1wjnf(this.sides_1, layoutDirectionSide);
    var tmp_0;
    if (allowRight) {
      tmp_0 = this.insets_1.getRight_nwst5g_k$(density, layoutDirection);
    } else {
      tmp_0 = 0;
    }
    return tmp_0;
  };
  protoOf(LimitInsets).getBottom_4od39h_k$ = function (density) {
    return WindowInsetsSides__hasAny_impl_v1wjnf(this.sides_1, Companion_getInstance_12().Bottom_1) ? this.insets_1.getBottom_4od39h_k$(density) : 0;
  };
  protoOf(LimitInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof LimitInsets)) {
      return false;
    }
    return equals(this.insets_1, other.insets_1) && equals(new WindowInsetsSides(this.sides_1), new WindowInsetsSides(other.sides_1));
  };
  protoOf(LimitInsets).hashCode = function () {
    var result = hashCode(this.insets_1);
    result = imul(31, result) + WindowInsetsSides__hashCode_impl_w7unwc(this.sides_1) | 0;
    return result;
  };
  protoOf(LimitInsets).toString = function () {
    return '(' + toString_0(this.insets_1) + ' only ' + WindowInsetsSides__toString_impl_h23h9x(this.sides_1) + ')';
  };
  function union(_this__u8e3s4, insets) {
    _init_properties_WindowInsets_kt__lpu9pi();
    return new UnionInsets(_this__u8e3s4, insets);
  }
  function makeEmptyWindowInsets() {
    _init_properties_WindowInsets_kt__lpu9pi();
    return get_EmptyWindowInsets();
  }
  function _get_first__hkbbvj($this) {
    return $this.first_1;
  }
  function _get_second__njbah($this) {
    return $this.second_1;
  }
  function UnionInsets(first, second) {
    this.first_1 = first;
    this.second_1 = second;
  }
  protoOf(UnionInsets).getLeft_sdff2j_k$ = function (density, layoutDirection) {
    var tmp0 = this.first_1.getLeft_sdff2j_k$(density, layoutDirection);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = this.second_1.getLeft_sdff2j_k$(density, layoutDirection);
    return Math.max(tmp0, b);
  };
  protoOf(UnionInsets).getTop_j1mevb_k$ = function (density) {
    var tmp0 = this.first_1.getTop_j1mevb_k$(density);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = this.second_1.getTop_j1mevb_k$(density);
    return Math.max(tmp0, b);
  };
  protoOf(UnionInsets).getRight_nwst5g_k$ = function (density, layoutDirection) {
    var tmp0 = this.first_1.getRight_nwst5g_k$(density, layoutDirection);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = this.second_1.getRight_nwst5g_k$(density, layoutDirection);
    return Math.max(tmp0, b);
  };
  protoOf(UnionInsets).getBottom_4od39h_k$ = function (density) {
    var tmp0 = this.first_1.getBottom_4od39h_k$(density);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = this.second_1.getBottom_4od39h_k$(density);
    return Math.max(tmp0, b);
  };
  protoOf(UnionInsets).hashCode = function () {
    return hashCode(this.first_1) + imul(hashCode(this.second_1), 31) | 0;
  };
  protoOf(UnionInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof UnionInsets)) {
      return false;
    }
    return equals(other.first_1, this.first_1) && equals(other.second_1, this.second_1);
  };
  protoOf(UnionInsets).toString = function () {
    return '(' + toString_0(this.first_1) + ' \u222A ' + toString_0(this.second_1) + ')';
  };
  var properties_initialized_WindowInsets_kt_2k4ux4;
  function _init_properties_WindowInsets_kt__lpu9pi() {
    if (!properties_initialized_WindowInsets_kt_2k4ux4) {
      properties_initialized_WindowInsets_kt_2k4ux4 = true;
      EmptyWindowInsets = new FixedIntInsets(0, 0, 0, 0);
      androidx_compose_foundation_layout_MutableWindowInsets$stable = 0;
      androidx_compose_foundation_layout_ValueInsets$stable = 0;
      androidx_compose_foundation_layout_InsetsValues$stable = 0;
    }
  }
  var androidx_compose_foundation_layout_InsetsPaddingModifier$stable;
  var androidx_compose_foundation_layout_InsetsConsumingModifierNode$stable;
  var androidx_compose_foundation_layout_InsetsPaddingModifierNode$stable;
  function windowInsetsPadding(_this__u8e3s4, insets) {
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = windowInsetsPadding$lambda(insets);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return _this__u8e3s4.then_g5qrxq_k$(new InsetsPaddingModifierElement(insets, tmp$ret$0));
  }
  function _get_insets__v8zl7($this) {
    return $this.insets_1;
  }
  function _get_inspectorInfo__ojvtbg_0($this) {
    return $this.inspectorInfo_1;
  }
  function InsetsPaddingModifierElement(insets, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.insets_1 = insets;
    this.inspectorInfo_1 = inspectorInfo;
  }
  protoOf(InsetsPaddingModifierElement).create_md4cuc_k$ = function () {
    return new InsetsPaddingModifierNode(this.insets_1);
  };
  protoOf(InsetsPaddingModifierElement).update_tt8y9y_k$ = function (node) {
    node.update_k9ywa1_k$(this.insets_1);
  };
  protoOf(InsetsPaddingModifierElement).update_9wd57p_k$ = function (node) {
    return this.update_tt8y9y_k$(node instanceof InsetsPaddingModifierNode ? node : THROW_CCE());
  };
  protoOf(InsetsPaddingModifierElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    this.inspectorInfo_1(_this__u8e3s4);
  };
  protoOf(InsetsPaddingModifierElement).hashCode = function () {
    return hashCode(this.insets_1);
  };
  protoOf(InsetsPaddingModifierElement).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof InsetsPaddingModifierElement)) {
      return false;
    }
    return equals(other.insets_1, this.insets_1);
  };
  function _set_insets__2bzk7z($this, _set____db54di) {
    $this.insets_1 = _set____db54di;
  }
  function _get_insets__v8zl7_0($this) {
    return $this.insets_1;
  }
  function InsetsPaddingModifierNode$measure$lambda($placeable, $left, $top) {
    return function ($this$layout) {
      $this$layout.place$default_61faqz_k$($placeable, $left, $top);
      return Unit_getInstance();
    };
  }
  function InsetsPaddingModifierNode(insets) {
    InsetsConsumingModifierNode.call(this);
    this.insets_1 = insets;
  }
  protoOf(InsetsPaddingModifierNode).calculateInsets_xm97f8_k$ = function (ancestorConsumedInsets) {
    return union(ancestorConsumedInsets, this.insets_1);
  };
  protoOf(InsetsPaddingModifierNode).insetsInvalidated_iem76r_k$ = function () {
    protoOf(InsetsConsumingModifierNode).insetsInvalidated_iem76r_k$.call(this);
    invalidateMeasurement(this);
  };
  protoOf(InsetsPaddingModifierNode).update_k9ywa1_k$ = function (insets) {
    if (!equals(insets, this.insets_1)) {
      this.insets_1 = insets;
      this.insetsInvalidated_iem76r_k$();
    }
  };
  protoOf(InsetsPaddingModifierNode).measure_z885gt_k$ = function (_this__u8e3s4, measurable, constraints) {
    var left = this.consumedInsets_1.getLeft_sdff2j_k$(_this__u8e3s4, _this__u8e3s4.get_layoutDirection_7e37v0_k$()) - this.ancestorConsumedInsets_1.getLeft_sdff2j_k$(_this__u8e3s4, _this__u8e3s4.get_layoutDirection_7e37v0_k$()) | 0;
    var top = this.consumedInsets_1.getTop_j1mevb_k$(_this__u8e3s4) - this.ancestorConsumedInsets_1.getTop_j1mevb_k$(_this__u8e3s4) | 0;
    var right = this.consumedInsets_1.getRight_nwst5g_k$(_this__u8e3s4, _this__u8e3s4.get_layoutDirection_7e37v0_k$()) - this.ancestorConsumedInsets_1.getRight_nwst5g_k$(_this__u8e3s4, _this__u8e3s4.get_layoutDirection_7e37v0_k$()) | 0;
    var bottom = this.consumedInsets_1.getBottom_4od39h_k$(_this__u8e3s4) - this.ancestorConsumedInsets_1.getBottom_4od39h_k$(_this__u8e3s4) | 0;
    var horizontal = left + right | 0;
    var vertical = top + bottom | 0;
    var childConstraints = offset(constraints, -horizontal | 0, -vertical | 0);
    var placeable = measurable.measure_4dmfk1_k$(childConstraints);
    var width = constrainWidth(constraints, placeable.get_width_j0q4yl_k$() + horizontal | 0);
    var height = constrainHeight(constraints, placeable.get_height_e7t92o_k$() + vertical | 0);
    return _this__u8e3s4.layout$default_n19e5l_k$(width, height, VOID, InsetsPaddingModifierNode$measure$lambda(placeable, left, top));
  };
  function _set_ancestorConsumedInsets__wfbdru($this, _set____db54di) {
    $this.ancestorConsumedInsets_1 = _set____db54di;
  }
  function _set_consumedInsets__2lpxax($this, _set____db54di) {
    $this.consumedInsets_1 = _set____db54di;
  }
  function setAncestorConsumedInsets($this, ancestorConsumedInsets) {
    if (!equals($this.ancestorConsumedInsets_1, ancestorConsumedInsets)) {
      $this.ancestorConsumedInsets_1 = ancestorConsumedInsets;
      $this.insetsInvalidated_iem76r_k$();
    }
  }
  function invalidateChildConsumedInsets($this) {
    var tmp = $this.get_traverseKey_bnnfac_k$();
    traverseDescendants($this, tmp, InsetsConsumingModifierNode$invalidateChildConsumedInsets$lambda($this));
  }
  function InsetsConsumingModifierNode$onAttach$lambda(this$0) {
    return function (parent) {
      var tmp = this$0;
      tmp.ancestorConsumedInsets_1 = (parent instanceof InsetsConsumingModifierNode ? parent : THROW_CCE()).consumedInsets_1;
      return false;
    };
  }
  function InsetsConsumingModifierNode$invalidateChildConsumedInsets$lambda(this$0) {
    return function (child) {
      setAncestorConsumedInsets(child instanceof InsetsConsumingModifierNode ? child : THROW_CCE(), this$0.consumedInsets_1);
      return TraverseDescendantsAction_SkipSubtreeAndContinueTraversal_getInstance();
    };
  }
  function InsetsConsumingModifierNode() {
    Node.call(this);
    this.ancestorConsumedInsets_1 = makeEmptyWindowInsets();
    this.consumedInsets_1 = makeEmptyWindowInsets();
  }
  protoOf(InsetsConsumingModifierNode).get_ancestorConsumedInsets_3qw98a_k$ = function () {
    return this.ancestorConsumedInsets_1;
  };
  protoOf(InsetsConsumingModifierNode).get_traverseKey_bnnfac_k$ = function () {
    return 'androidx.compose.foundation.layout.ConsumedInsetsProvider';
  };
  protoOf(InsetsConsumingModifierNode).get_consumedInsets_pkvpxj_k$ = function () {
    return this.consumedInsets_1;
  };
  protoOf(InsetsConsumingModifierNode).onAttach_juzy2c_k$ = function () {
    var tmp = this.get_traverseKey_bnnfac_k$();
    traverseAncestors(this, tmp, InsetsConsumingModifierNode$onAttach$lambda(this));
    this.insetsInvalidated_iem76r_k$();
    protoOf(Node).onAttach_juzy2c_k$.call(this);
  };
  protoOf(InsetsConsumingModifierNode).onDetach_8dig02_k$ = function () {
    this.consumedInsets_1 = this.ancestorConsumedInsets_1;
    invalidateChildConsumedInsets(this);
    protoOf(Node).onDetach_8dig02_k$.call(this);
  };
  protoOf(InsetsConsumingModifierNode).onReset_y3iodc_k$ = function () {
    protoOf(Node).onReset_y3iodc_k$.call(this);
    this.ancestorConsumedInsets_1 = makeEmptyWindowInsets();
  };
  protoOf(InsetsConsumingModifierNode).insetsInvalidated_iem76r_k$ = function () {
    this.consumedInsets_1 = this.calculateInsets_xm97f8_k$(this.ancestorConsumedInsets_1);
    invalidateChildConsumedInsets(this);
  };
  function windowInsetsPadding$lambda($insets) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.set_name_wkmnld_k$('windowInsetsPadding');
      _this__u8e3s4.get_properties_zhllqc_k$().set_vvveh5_k$('insets', $insets);
      return Unit_getInstance();
    };
  }
  function get_startCalc() {
    _init_properties_WindowInsetsSize_kt__yxgjzt();
    return startCalc;
  }
  var startCalc;
  function get_endCalc() {
    _init_properties_WindowInsetsSize_kt__yxgjzt();
    return endCalc;
  }
  var endCalc;
  function get_topCalc() {
    _init_properties_WindowInsetsSize_kt__yxgjzt();
    return topCalc;
  }
  var topCalc;
  function get_bottomCalc() {
    _init_properties_WindowInsetsSize_kt__yxgjzt();
    return bottomCalc;
  }
  var bottomCalc;
  function WindowInsetsWidthCalculator() {
  }
  function WindowInsetsHeightCalculator() {
  }
  function sam$androidx_compose_foundation_layout_WindowInsetsWidthCalculator$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_layout_WindowInsetsWidthCalculator$0).calculate_ng5l0c_k$ = function (insets, layoutDirection, density) {
    return this.function_1(insets, layoutDirection, density);
  };
  protoOf(sam$androidx_compose_foundation_layout_WindowInsetsWidthCalculator$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_foundation_layout_WindowInsetsWidthCalculator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, WindowInsetsWidthCalculator) : false) {
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
  protoOf(sam$androidx_compose_foundation_layout_WindowInsetsWidthCalculator$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_foundation_layout_WindowInsetsWidthCalculator$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_layout_WindowInsetsWidthCalculator$0_0).calculate_ng5l0c_k$ = function (insets, layoutDirection, density) {
    return this.function_1(insets, layoutDirection, density);
  };
  protoOf(sam$androidx_compose_foundation_layout_WindowInsetsWidthCalculator$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_foundation_layout_WindowInsetsWidthCalculator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, WindowInsetsWidthCalculator) : false) {
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
  protoOf(sam$androidx_compose_foundation_layout_WindowInsetsWidthCalculator$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_foundation_layout_WindowInsetsHeightCalculator$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_layout_WindowInsetsHeightCalculator$0).calculate_613pdo_k$ = function (insets, density) {
    return this.function_1(insets, density);
  };
  protoOf(sam$androidx_compose_foundation_layout_WindowInsetsHeightCalculator$0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_foundation_layout_WindowInsetsHeightCalculator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, WindowInsetsHeightCalculator) : false) {
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
  protoOf(sam$androidx_compose_foundation_layout_WindowInsetsHeightCalculator$0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function sam$androidx_compose_foundation_layout_WindowInsetsHeightCalculator$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_layout_WindowInsetsHeightCalculator$0_0).calculate_613pdo_k$ = function (insets, density) {
    return this.function_1(insets, density);
  };
  protoOf(sam$androidx_compose_foundation_layout_WindowInsetsHeightCalculator$0_0).getFunctionDelegate_jtodtf_k$ = function () {
    return this.function_1;
  };
  protoOf(sam$androidx_compose_foundation_layout_WindowInsetsHeightCalculator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, WindowInsetsHeightCalculator) : false) {
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
  protoOf(sam$androidx_compose_foundation_layout_WindowInsetsHeightCalculator$0_0).hashCode = function () {
    return hashCode(this.getFunctionDelegate_jtodtf_k$());
  };
  function startCalc$lambda(insets, layoutDirection, density) {
    _init_properties_WindowInsetsSize_kt__yxgjzt();
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      tmp = insets.getLeft_sdff2j_k$(density, layoutDirection);
    } else {
      tmp = insets.getRight_nwst5g_k$(density, layoutDirection);
    }
    return tmp;
  }
  function endCalc$lambda(insets, layoutDirection, density) {
    _init_properties_WindowInsetsSize_kt__yxgjzt();
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Rtl_getInstance())) {
      tmp = insets.getLeft_sdff2j_k$(density, layoutDirection);
    } else {
      tmp = insets.getRight_nwst5g_k$(density, layoutDirection);
    }
    return tmp;
  }
  function topCalc$lambda(insets, density) {
    _init_properties_WindowInsetsSize_kt__yxgjzt();
    return insets.getTop_j1mevb_k$(density);
  }
  function bottomCalc$lambda(insets, density) {
    _init_properties_WindowInsetsSize_kt__yxgjzt();
    return insets.getBottom_4od39h_k$(density);
  }
  var properties_initialized_WindowInsetsSize_kt_qu7cqf;
  function _init_properties_WindowInsetsSize_kt__yxgjzt() {
    if (!properties_initialized_WindowInsetsSize_kt_qu7cqf) {
      properties_initialized_WindowInsetsSize_kt_qu7cqf = true;
      var tmp = startCalc$lambda;
      startCalc = new sam$androidx_compose_foundation_layout_WindowInsetsWidthCalculator$0(tmp);
      var tmp_0 = endCalc$lambda;
      endCalc = new sam$androidx_compose_foundation_layout_WindowInsetsWidthCalculator$0_0(tmp_0);
      var tmp_1 = topCalc$lambda;
      topCalc = new sam$androidx_compose_foundation_layout_WindowInsetsHeightCalculator$0(tmp_1);
      var tmp_2 = bottomCalc$lambda;
      bottomCalc = new sam$androidx_compose_foundation_layout_WindowInsetsHeightCalculator$0_0(tmp_2);
    }
  }
  function requirePrecondition(value, lazyMessage) {
    if (!value) {
      throwIllegalArgumentException(lazyMessage());
    }
  }
  function checkPrecondition(value, lazyMessage) {
    if (!value) {
      throwIllegalStateException(lazyMessage());
    }
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
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
    return '@androidx.compose.foundation.layout.internal.NoOp(' + ')';
  };
  function get_safeDrawing_0(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalPlatformWindowInsets();
    var $composer_1 = $composer_0;
    var tmp$ret$0 = $composer_1.consume_ebzcrh_k$(this_0);
    return toWindowInsets(get_safeDrawing(tmp$ret$0));
  }
  function get_systemBars(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalPlatformWindowInsets();
    var $composer_1 = $composer_0;
    var tmp$ret$0 = $composer_1.consume_ebzcrh_k$(this_0);
    return toWindowInsets(tmp$ret$0.get_systemBars_9jtmg8_k$());
  }
  function toWindowInsets(_this__u8e3s4) {
    return new toWindowInsets$1(_this__u8e3s4);
  }
  function toWindowInsets$1($this_toWindowInsets) {
    this.$this_toWindowInsets_1 = $this_toWindowInsets;
  }
  protoOf(toWindowInsets$1).getLeft_sdff2j_k$ = function (density, layoutDirection) {
    return this.$this_toWindowInsets_1.get_left_woprgw_k$();
  };
  protoOf(toWindowInsets$1).getTop_j1mevb_k$ = function (density) {
    return this.$this_toWindowInsets_1.get_top_18ivbo_k$();
  };
  protoOf(toWindowInsets$1).getRight_nwst5g_k$ = function (density, layoutDirection) {
    return this.$this_toWindowInsets_1.get_right_ixz7xv_k$();
  };
  protoOf(toWindowInsets$1).getBottom_4od39h_k$ = function (density) {
    return this.$this_toWindowInsets_1.get_bottom_bj8ras_k$();
  };
  protoOf(toWindowInsets$1).toString = function () {
    return 'PlatformInsets.toWindowInsets(getLeft=' + this.$this_toWindowInsets_1.get_left_woprgw_k$() + ', getTop=' + this.$this_toWindowInsets_1.get_top_18ivbo_k$() + ', getRight=' + this.$this_toWindowInsets_1.get_right_ixz7xv_k$() + ', getBottom=' + this.$this_toWindowInsets_1.get_bottom_bj8ras_k$() + ')';
  };
  function get_safeDrawingPaddingLambda() {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return safeDrawingPaddingLambda;
  }
  var safeDrawingPaddingLambda;
  function get_safeGesturesPaddingLambda() {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return safeGesturesPaddingLambda;
  }
  var safeGesturesPaddingLambda;
  function get_safeContentPaddingLambda() {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return safeContentPaddingLambda;
  }
  var safeContentPaddingLambda;
  function get_systemBarsPaddingLambda() {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return systemBarsPaddingLambda;
  }
  var systemBarsPaddingLambda;
  function get_displayCutoutPaddingLambda() {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return displayCutoutPaddingLambda;
  }
  var displayCutoutPaddingLambda;
  function get_statusBarsPaddingLambda() {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return statusBarsPaddingLambda;
  }
  var statusBarsPaddingLambda;
  function get_imePaddingLambda() {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return imePaddingLambda;
  }
  var imePaddingLambda;
  function get_navigationBarsPaddingLambda() {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return navigationBarsPaddingLambda;
  }
  var navigationBarsPaddingLambda;
  function get_captionBarPaddingLambda() {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return captionBarPaddingLambda;
  }
  var captionBarPaddingLambda;
  function get_waterfallPaddingLambda() {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return waterfallPaddingLambda;
  }
  var waterfallPaddingLambda;
  function get_systemGesturesPaddingLambda() {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return systemGesturesPaddingLambda;
  }
  var systemGesturesPaddingLambda;
  function get_mandatorySystemGesturesPaddingLambda() {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return mandatorySystemGesturesPaddingLambda;
  }
  var mandatorySystemGesturesPaddingLambda;
  function imePadding(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = imePadding$lambda;
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return windowInsetsPadding_0(_this__u8e3s4, tmp$ret$0, get_imePaddingLambda());
  }
  function windowInsetsPadding_0(_this__u8e3s4, inspectorInfo, insetsCalculation) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return _this__u8e3s4.then_g5qrxq_k$(new PlatformInsetsPaddingModifierElement(inspectorInfo)).then_g5qrxq_k$(new PlatformWindowInsetsPaddingModifierElement(inspectorInfo, insetsCalculation));
  }
  function _get_inspectorInfo__ojvtbg_1($this) {
    return $this.inspectorInfo_1;
  }
  function PlatformInsetsPaddingModifierElement(inspectorInfo) {
    ModifierNodeElement.call(this);
    this.inspectorInfo_1 = inspectorInfo;
  }
  protoOf(PlatformInsetsPaddingModifierElement).create_md4cuc_k$ = function () {
    return new PlatformInsetsPaddingModifierNode();
  };
  protoOf(PlatformInsetsPaddingModifierElement).update_tub3ch_k$ = function (node) {
  };
  protoOf(PlatformInsetsPaddingModifierElement).update_9wd57p_k$ = function (node) {
    return this.update_tub3ch_k$(node instanceof PlatformInsetsPaddingModifierNode ? node : THROW_CCE());
  };
  protoOf(PlatformInsetsPaddingModifierElement).hashCode = function () {
    return 0;
  };
  protoOf(PlatformInsetsPaddingModifierElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformInsetsPaddingModifierElement))
      return false;
    return this.inspectorInfo_1 === other.inspectorInfo_1;
  };
  protoOf(PlatformInsetsPaddingModifierElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    return this.inspectorInfo_1(_this__u8e3s4);
  };
  function _get_inspectorInfo__ojvtbg_2($this) {
    return $this.inspectorInfo_1;
  }
  function _get_insetsGetter__vkbigm($this) {
    return $this.insetsGetter_1;
  }
  function PlatformWindowInsetsPaddingModifierElement(inspectorInfo, insetsGetter) {
    ModifierNodeElement.call(this);
    this.inspectorInfo_1 = inspectorInfo;
    this.insetsGetter_1 = insetsGetter;
  }
  protoOf(PlatformWindowInsetsPaddingModifierElement).create_md4cuc_k$ = function () {
    return new PlatformWindowInsetsPaddingModifierNode(this.insetsGetter_1);
  };
  protoOf(PlatformWindowInsetsPaddingModifierElement).update_pmnzzr_k$ = function (node) {
    return node.update_vix9fl_k$(this.insetsGetter_1);
  };
  protoOf(PlatformWindowInsetsPaddingModifierElement).update_9wd57p_k$ = function (node) {
    return this.update_pmnzzr_k$(node instanceof PlatformWindowInsetsPaddingModifierNode ? node : THROW_CCE());
  };
  protoOf(PlatformWindowInsetsPaddingModifierElement).inspectableProperties_e25ntu_k$ = function (_this__u8e3s4) {
    return this.inspectorInfo_1(_this__u8e3s4);
  };
  protoOf(PlatformWindowInsetsPaddingModifierElement).hashCode = function () {
    return hashCode(this.insetsGetter_1);
  };
  protoOf(PlatformWindowInsetsPaddingModifierElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformWindowInsetsPaddingModifierElement))
      return false;
    return this.insetsGetter_1 === other.insetsGetter_1;
  };
  function PlatformInsetsPaddingModifierNode() {
    InsetsPaddingModifierNode.call(this, makeEmptyWindowInsets());
  }
  function _set_insetsGetter__nx1sye($this, _set____db54di) {
    $this.insetsGetter_1 = _set____db54di;
  }
  function _get_insetsGetter__vkbigm_0($this) {
    return $this.insetsGetter_1;
  }
  function _set_insetsPaddingNode__o7o48o($this, _set____db54di) {
    $this.insetsPaddingNode_1 = _set____db54di;
  }
  function _get_insetsPaddingNode__p3n1g4($this) {
    return $this.insetsPaddingNode_1;
  }
  function PlatformWindowInsetsPaddingModifierNode$onAttach$lambda(this$0) {
    return function (node) {
      var tmp;
      if (node instanceof PlatformInsetsPaddingModifierNode) {
        this$0.insetsPaddingNode_1 = node;
        tmp = false;
      } else {
        tmp = true;
      }
      return tmp;
    };
  }
  function PlatformWindowInsetsPaddingModifierNode$onObservedReadsChanged$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.insetsPaddingNode_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.update_k9ywa1_k$(this$0.insetsGetter_1(this$0.get_windowInsets_ipw88h_k$()));
      }
      return Unit_getInstance();
    };
  }
  function PlatformWindowInsetsPaddingModifierNode(insetsGetter) {
    PlatformWindowInsetsProviderNode.call(this);
    this.insetsGetter_1 = insetsGetter;
    this.insetsPaddingNode_1 = null;
  }
  protoOf(PlatformWindowInsetsPaddingModifierNode).update_vix9fl_k$ = function (insetsGetter) {
    if (!(this.insetsGetter_1 === insetsGetter)) {
      this.insetsGetter_1 = insetsGetter;
      this.windowInsetsInvalidated_i8ogml_k$();
    }
  };
  protoOf(PlatformWindowInsetsPaddingModifierNode).calculatePlatformInsets_q1xoga_k$ = function (ancestorWindowInsets) {
    return ancestorWindowInsets;
  };
  protoOf(PlatformWindowInsetsPaddingModifierNode).onAttach_juzy2c_k$ = function () {
    protoOf(PlatformWindowInsetsProviderNode).onAttach_juzy2c_k$.call(this);
    traverseAncestors(this, 'androidx.compose.foundation.layout.ConsumedInsetsProvider', PlatformWindowInsetsPaddingModifierNode$onAttach$lambda(this));
    this.onObservedReadsChanged_hqt4ia_k$();
  };
  protoOf(PlatformWindowInsetsPaddingModifierNode).onReset_y3iodc_k$ = function () {
    this.insetsPaddingNode_1 = null;
    protoOf(PlatformWindowInsetsProviderNode).onReset_y3iodc_k$.call(this);
  };
  protoOf(PlatformWindowInsetsPaddingModifierNode).onDetach_8dig02_k$ = function () {
    this.insetsPaddingNode_1 = null;
    protoOf(PlatformWindowInsetsProviderNode).onDetach_8dig02_k$.call(this);
  };
  protoOf(PlatformWindowInsetsPaddingModifierNode).windowInsetsInvalidated_i8ogml_k$ = function () {
    protoOf(PlatformWindowInsetsProviderNode).windowInsetsInvalidated_i8ogml_k$.call(this);
    this.onObservedReadsChanged_hqt4ia_k$();
  };
  protoOf(PlatformWindowInsetsPaddingModifierNode).onObservedReadsChanged_hqt4ia_k$ = function () {
    observeReads(this, PlatformWindowInsetsPaddingModifierNode$onObservedReadsChanged$lambda(this));
  };
  function safeDrawingPaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(get_safeDrawing(_this__u8e3s4));
  }
  function safeGesturesPaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(get_safeGestures(_this__u8e3s4));
  }
  function safeContentPaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(get_safeContent(_this__u8e3s4));
  }
  function systemBarsPaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(_this__u8e3s4.get_systemBars_9jtmg8_k$());
  }
  function displayCutoutPaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(_this__u8e3s4.get_displayCutout_wby2h1_k$());
  }
  function statusBarsPaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(_this__u8e3s4.get_statusBars_g2x1ut_k$());
  }
  function imePaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(_this__u8e3s4.get_ime_18j3jc_k$());
  }
  function navigationBarsPaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(_this__u8e3s4.get_navigationBars_yulq0z_k$());
  }
  function captionBarPaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(_this__u8e3s4.get_captionBar_yz42zu_k$());
  }
  function waterfallPaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(_this__u8e3s4.get_waterfall_4zbx49_k$());
  }
  function systemGesturesPaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(_this__u8e3s4.get_systemGestures_ue5ise_k$());
  }
  function mandatorySystemGesturesPaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(_this__u8e3s4.get_mandatorySystemGestures_u95ey1_k$());
  }
  function imePadding$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    _this__u8e3s4.set_name_wkmnld_k$('imePadding');
    return Unit_getInstance();
  }
  var properties_initialized_WindowInsetsPadding_skiko_kt_tc289q;
  function _init_properties_WindowInsetsPadding_skiko_kt__j76ce8() {
    if (!properties_initialized_WindowInsetsPadding_skiko_kt_tc289q) {
      properties_initialized_WindowInsetsPadding_skiko_kt_tc289q = true;
      safeDrawingPaddingLambda = safeDrawingPaddingLambda$lambda;
      safeGesturesPaddingLambda = safeGesturesPaddingLambda$lambda;
      safeContentPaddingLambda = safeContentPaddingLambda$lambda;
      systemBarsPaddingLambda = systemBarsPaddingLambda$lambda;
      displayCutoutPaddingLambda = displayCutoutPaddingLambda$lambda;
      statusBarsPaddingLambda = statusBarsPaddingLambda$lambda;
      imePaddingLambda = imePaddingLambda$lambda;
      navigationBarsPaddingLambda = navigationBarsPaddingLambda$lambda;
      captionBarPaddingLambda = captionBarPaddingLambda$lambda;
      waterfallPaddingLambda = waterfallPaddingLambda$lambda;
      systemGesturesPaddingLambda = systemGesturesPaddingLambda$lambda;
      mandatorySystemGesturesPaddingLambda = mandatorySystemGesturesPaddingLambda$lambda;
    }
  }
  //region block: post-declaration
  protoOf(Arrangement$Absolute$Left$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$Absolute$Center$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$Absolute$Right$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$Absolute$SpaceBetween$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$Absolute$SpaceEvenly$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$Absolute$SpaceAround$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$Start$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$End$1).get_spacing_zb7agn_k$ = get_spacing;
  protoOf(Arrangement$Top$1).get_spacing_zb7agn_k$ = get_spacing_0;
  protoOf(Arrangement$Bottom$1).get_spacing_zb7agn_k$ = get_spacing_0;
  protoOf(BoxMeasurePolicy).minIntrinsicWidth_dwfcse_k$ = minIntrinsicWidth;
  protoOf(BoxMeasurePolicy).minIntrinsicHeight_xlhgwn_k$ = minIntrinsicHeight;
  protoOf(BoxMeasurePolicy).maxIntrinsicWidth_cx7ze4_k$ = maxIntrinsicWidth;
  protoOf(BoxMeasurePolicy).maxIntrinsicHeight_3a4xm1_k$ = maxIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).minIntrinsicWidth_dwfcse_k$ = minIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).minIntrinsicHeight_xlhgwn_k$ = minIntrinsicHeight;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).maxIntrinsicWidth_cx7ze4_k$ = maxIntrinsicWidth;
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).maxIntrinsicHeight_3a4xm1_k$ = maxIntrinsicHeight;
  protoOf(ColumnMeasurePolicy).createConstraints$default_x2rfs3_k$ = createConstraints$default;
  protoOf(ColumnScopeInstance).weight$default_gbkz97_k$ = weight$default;
  protoOf(DefaultDensity$1).toPx_mycba2_k$ = toPx;
  protoOf(DefaultDensity$1).toPx_plt68j_k$ = toPx_0;
  protoOf(DefaultDensity$1).roundToPx_yb7vg8_k$ = roundToPx;
  protoOf(DefaultDensity$1).roundToPx_cw9j9b_k$ = roundToPx_0;
  protoOf(DefaultDensity$1).toDp_fjakf4_k$ = toDp;
  protoOf(DefaultDensity$1).toDp_hs0w0_k$ = toDp_0;
  protoOf(DefaultDensity$1).toDp_m8rr7q_k$ = toDp_1;
  protoOf(DefaultDensity$1).toSp_97l7ws_k$ = toSp;
  protoOf(DefaultDensity$1).toSp_fixg4_k$ = toSp_0;
  protoOf(DefaultDensity$1).toSp_apeb1_k$ = toSp_1;
  protoOf(DefaultDensity$1).toRect_ysncr2_k$ = toRect;
  protoOf(DefaultDensity$1).toSize_7jb2uc_k$ = toSize;
  protoOf(DefaultDensity$1).toDpSize_5hpeec_k$ = toDpSize;
  protoOf(OffsetNode).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth_0;
  protoOf(OffsetNode).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight_0;
  protoOf(OffsetNode).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth_0;
  protoOf(OffsetNode).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight_0;
  protoOf(PaddingNode).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth_0;
  protoOf(PaddingNode).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight_0;
  protoOf(PaddingNode).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth_0;
  protoOf(PaddingNode).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight_0;
  protoOf(PaddingValuesModifier).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth_0;
  protoOf(PaddingValuesModifier).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight_0;
  protoOf(PaddingValuesModifier).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth_0;
  protoOf(PaddingValuesModifier).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight_0;
  protoOf(RowMeasurePolicy).createConstraints$default_x2rfs3_k$ = createConstraints$default;
  protoOf(RowScopeInstance).weight$default_yewrvp_k$ = weight$default_0;
  protoOf(FillNode).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth_0;
  protoOf(FillNode).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight_0;
  protoOf(FillNode).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth_0;
  protoOf(FillNode).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight_0;
  protoOf(WrapContentNode).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth_0;
  protoOf(WrapContentNode).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight_0;
  protoOf(WrapContentNode).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth_0;
  protoOf(WrapContentNode).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight_0;
  protoOf(SpacerMeasurePolicy).minIntrinsicWidth_dwfcse_k$ = minIntrinsicWidth;
  protoOf(SpacerMeasurePolicy).minIntrinsicHeight_xlhgwn_k$ = minIntrinsicHeight;
  protoOf(SpacerMeasurePolicy).maxIntrinsicWidth_cx7ze4_k$ = maxIntrinsicWidth;
  protoOf(SpacerMeasurePolicy).maxIntrinsicHeight_3a4xm1_k$ = maxIntrinsicHeight;
  protoOf(InsetsPaddingModifierNode).minIntrinsicWidth_nsvhwg_k$ = minIntrinsicWidth_0;
  protoOf(InsetsPaddingModifierNode).minIntrinsicHeight_xt6ly1_k$ = minIntrinsicHeight_0;
  protoOf(InsetsPaddingModifierNode).maxIntrinsicWidth_epsb1u_k$ = maxIntrinsicWidth_0;
  protoOf(InsetsPaddingModifierNode).maxIntrinsicHeight_nrifyt_k$ = maxIntrinsicHeight_0;
  //endregion
  //region block: init
  androidx_compose_foundation_layout_Arrangement_Absolute$stable = 0;
  androidx_compose_foundation_layout_Arrangement_SpacedAligned$stable = 0;
  androidx_compose_foundation_layout_Arrangement$stable = 0;
  androidx_compose_foundation_layout_ComposeFoundationLayoutFlags$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowRowScopeImpl$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowColumnScopeImpl$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowRowOverflowScopeImpl$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowColumnOverflowScopeImpl$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowItemIterator$stable = 8;
  androidx_compose_foundation_layout_FlowLineInfo$stable = 8;
  androidx_compose_foundation_layout_FlowLayoutBuildingBlocks_WrapInfo$stable = 0;
  androidx_compose_foundation_layout_FlowLayoutBuildingBlocks_WrapEllipsisInfo$stable = 8;
  androidx_compose_foundation_layout_FlowLayoutBuildingBlocks$stable = 8;
  androidx_compose_foundation_layout_FlowRowOverflow$stable = 0;
  androidx_compose_foundation_layout_FlowColumnOverflow$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowRowOverflow$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowColumnOverflow$stable = 0;
  androidx_compose_foundation_layout_FlowLayoutOverflow$stable = 0;
  androidx_compose_foundation_layout_FlowLayoutOverflowState$stable = 8;
  androidx_compose_foundation_layout_PaddingValues_Absolute$stable = 0;
  androidx_compose_foundation_layout_PaddingValuesImpl$stable = 0;
  androidx_compose_foundation_layout_InsetsPaddingModifier$stable = 0;
  androidx_compose_foundation_layout_InsetsConsumingModifierNode$stable = 8;
  androidx_compose_foundation_layout_InsetsPaddingModifierNode$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Horizontal;
  _.$_$.b = BoxWithConstraints;
  _.$_$.c = Box_0;
  _.$_$.d = PaddingValues_2;
  _.$_$.e = PaddingValues_1;
  _.$_$.f = PaddingValues_0;
  _.$_$.g = Spacer;
  _.$_$.h = calculateEndPadding;
  _.$_$.i = calculateStartPadding;
  _.$_$.j = columnMeasurePolicy;
  _.$_$.k = defaultMinSize;
  _.$_$.l = fillMaxHeight;
  _.$_$.m = fillMaxSize;
  _.$_$.n = fillMaxWidth;
  _.$_$.o = heightIn;
  _.$_$.p = height;
  _.$_$.q = imePadding;
  _.$_$.r = maybeCachedBoxMeasurePolicy;
  _.$_$.s = offset_0;
  _.$_$.t = only;
  _.$_$.u = padding_2;
  _.$_$.v = padding_1;
  _.$_$.w = padding;
  _.$_$.x = padding_0;
  _.$_$.y = requiredSizeIn;
  _.$_$.z = rowMeasurePolicy;
  _.$_$.a1 = get_safeDrawing_0;
  _.$_$.b1 = sizeIn;
  _.$_$.c1 = size_0;
  _.$_$.d1 = size;
  _.$_$.e1 = get_systemBars;
  _.$_$.f1 = widthIn;
  _.$_$.g1 = width;
  _.$_$.h1 = width_0;
  _.$_$.i1 = windowInsetsPadding;
  _.$_$.j1 = wrapContentHeight;
  _.$_$.k1 = WindowInsetsSides__plus_impl_9q9m59;
  _.$_$.l1 = IntrinsicSize_Max_getInstance;
  _.$_$.m1 = Arrangement_getInstance;
  _.$_$.n1 = BoxScopeInstance_getInstance;
  _.$_$.o1 = ColumnScopeInstance_getInstance;
  _.$_$.p1 = RowScopeInstance_getInstance;
  _.$_$.q1 = Companion_getInstance_11;
  _.$_$.r1 = Companion_getInstance_12;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-foundation-foundation-layout.js.map
