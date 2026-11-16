(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui.js', './kotlinx-coroutines-core.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-text.js', './compose-multiplatform-core-compose-foundation-foundation.js', './kotlinx-browser.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./kotlinx-coroutines-core.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./kotlinx-browser.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'components-resources-library'.");
    }
    if (typeof globalThis['kotlinx-browser'] === 'undefined') {
      throw new Error("Error loading module 'components-resources-library'. Its dependency 'kotlinx-browser' was not found. Please, check whether 'kotlinx-browser' is loaded prior to 'components-resources-library'.");
    }
    globalThis['components-resources-library'] = factory(typeof globalThis['components-resources-library'] === 'undefined' ? {} : globalThis['components-resources-library'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['kotlinx-coroutines-core'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-text'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['kotlinx-browser']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_kotlinx_kotlinx_browser) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ih;
  var initMetadataForClass = kotlin_kotlin.$_$.gg;
  var VOID = kotlin_kotlin.$_$.e;
  var KProperty0 = kotlin_kotlin.$_$.ui;
  var getPropertyCallableRef = kotlin_kotlin.$_$.dg;
  var initMetadataForInterface = kotlin_kotlin.$_$.kg;
  var ImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a1;
  var constructCallableReference = kotlin_kotlin.$_$.tf;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var Builder = kotlin_org_jetbrains_compose_ui_ui.$_$.z;
  var BitmapPainter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h;
  var lazy = kotlin_kotlin.$_$.gn;
  var androidx_compose_ui_graphics_painter_Painter$stableprop_getter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j;
  var getKClassFromExpression = kotlin_kotlin.$_$.pi;
  var THROW_CCE = kotlin_kotlin.$_$.hm;
  var getStringHashCode = kotlin_kotlin.$_$.eg;
  var charSequenceLength = kotlin_kotlin.$_$.qf;
  var Unit_getInstance = kotlin_kotlin.$_$.n3;
  var Companion_getInstance = kotlin_kotlin.$_$.g3;
  var initMetadataForCompanion = kotlin_kotlin.$_$.hg;
  var THROW_IAE = kotlin_kotlin.$_$.im;
  var enumEntries = kotlin_kotlin.$_$.ge;
  var Enum = kotlin_kotlin.$_$.ul;
  var Annotation = kotlin_kotlin.$_$.ml;
  var toString = kotlin_kotlin.$_$.lh;
  var hashCode = kotlin_kotlin.$_$.fg;
  var equals = kotlin_kotlin.$_$.xf;
  var equalsLong = kotlin_kotlin.$_$.te;
  var CoroutineImpl = kotlin_kotlin.$_$.zd;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a2;
  var isInterface = kotlin_kotlin.$_$.vg;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.jd;
  var initMetadataForLambda = kotlin_kotlin.$_$.lg;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.x7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.q3;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.r3;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ig;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i2;
  var joinAll = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h2;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z1;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.a4;
  var toList = kotlin_kotlin.$_$.wc;
  var initMetadataForObject = kotlin_kotlin.$_$.mg;
  var SuspendFunction1 = kotlin_kotlin.$_$.be;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.b3;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.g2;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.u3;
  var isSystemInDarkTheme = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h2;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.j7;
  var Companion_getInstance_1 = kotlin_androidx_compose_runtime_runtime.$_$.i3;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.a3;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.y2;
  var objectCreate = kotlin_kotlin.$_$.hh;
  var captureStack = kotlin_kotlin.$_$.lf;
  var Exception = kotlin_kotlin.$_$.wl;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.u4;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.l4;
  var to = kotlin_kotlin.$_$.un;
  var mapOf = kotlin_kotlin.$_$.fb;
  var equals_0 = kotlin_kotlin.$_$.oj;
  var numberToInt = kotlin_kotlin.$_$.gh;
  var convertToInt = kotlin_kotlin.$_$.qe;
  var add = kotlin_kotlin.$_$.le;
  var await_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var intercepted = kotlin_kotlin.$_$.ld;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v1;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.i3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.x;
  var createFailure = kotlin_kotlin.$_$.zm;
  var SystemFont_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.m4;
  var startsWith = kotlin_kotlin.$_$.ok;
  var KProperty1 = kotlin_kotlin.$_$.vi;
  var get_undefined = kotlin_org_jetbrains_kotlinx_kotlinx_browser.$_$.b;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Resource, 'Resource');
  initMetadataForClass(FontResource, 'FontResource', VOID, Resource);
  initMetadataForInterface(ImageCache, 'ImageCache');
  initMetadataForClass(Bitmap, 'Bitmap', VOID, VOID, [ImageCache]);
  initMetadataForClass(Vector, 'Vector', VOID, VOID, [ImageCache]);
  initMetadataForClass(Svg, 'Svg', VOID, VOID, [ImageCache]);
  initMetadataForClass(DrawableResource, 'DrawableResource', VOID, Resource);
  initMetadataForClass(PluralStringResource, 'PluralStringResource', VOID, Resource);
  initMetadataForInterface(Qualifier, 'Qualifier');
  initMetadataForClass(LanguageQualifier, 'LanguageQualifier', VOID, VOID, [Qualifier]);
  initMetadataForClass(ScriptQualifier, 'ScriptQualifier', VOID, VOID, [Qualifier]);
  initMetadataForClass(RegionQualifier, 'RegionQualifier', VOID, VOID, [Qualifier]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ThemeQualifier, 'ThemeQualifier', VOID, Enum, [Qualifier]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(DensityQualifier, 'DensityQualifier', VOID, Enum, [Qualifier]);
  initMetadataForClass(ExperimentalResourceApi, 'ExperimentalResourceApi', VOID, VOID, [Annotation]);
  initMetadataForClass(InternalResourceApi, 'InternalResourceApi', VOID, VOID, [Annotation]);
  initMetadataForClass(ResourceItem, 'ResourceItem');
  initMetadataForClass(SharedRequest, 'SharedRequest');
  initMetadataForLambda(AsyncCache$getOrLoad$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($getAllActiveJobsCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($getOrLoadCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($waitAllJobsCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($clearCOROUTINE$, CoroutineImpl);
  initMetadataForClass(AsyncCache, 'AsyncCache', AsyncCache, VOID, VOID, [0, 2]);
  initMetadataForCoroutine($waitAllJobsCOROUTINE$_0, CoroutineImpl);
  initMetadataForCoroutine($clearCOROUTINE$_0, CoroutineImpl);
  initMetadataForObject(ResourceCaches, 'ResourceCaches', VOID, VOID, VOID, [0]);
  initMetadataForInterface(ComposeEnvironment, 'ComposeEnvironment');
  initMetadataForClass(ResourceEnvironment, 'ResourceEnvironment');
  initMetadataForClass(DefaultComposeEnvironment$1, VOID, VOID, VOID, [ComposeEnvironment]);
  initMetadataForInterface(ResourceReader, 'ResourceReader', VOID, VOID, VOID, [1, 3]);
  initMetadataForClass(MissingResourceException, 'MissingResourceException', VOID, Exception);
  initMetadataForClass(StringArrayResource, 'StringArrayResource', VOID, Resource);
  initMetadataForClass(StringResource, 'StringResource', VOID, Resource);
  initMetadataForInterface(StringItem, 'StringItem');
  initMetadataForClass(Value, 'Value', VOID, VOID, [StringItem]);
  initMetadataForClass(Plurals, 'Plurals', VOID, VOID, [StringItem]);
  initMetadataForClass(Array_0, 'Array', VOID, VOID, [StringItem]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(PluralCategory, 'PluralCategory', VOID, Enum);
  initMetadataForLambda(DefaultJsResourceReader$readAsBlob$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($readCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readPartCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($readAsBlobCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($asByteArrayCOROUTINE$, CoroutineImpl);
  initMetadataForObject(DefaultJsResourceReader, 'DefaultJsResourceReader', VOID, VOID, [ResourceReader], [1, 3]);
  initMetadataForObject(WebResourcesConfiguration, 'WebResourcesConfiguration');
  initMetadataForCoroutine($loadCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($resetCacheCOROUTINE$, CoroutineImpl);
  initMetadataForObject(ResourceWebCache, 'ResourceWebCache', VOID, VOID, VOID, [2, 0]);
  //endregion
  var org_jetbrains_compose_resources_FontResource$stable;
  function FontResource(id, items) {
    Resource.call(this, id, items);
  }
  function get_emptyImageBitmap() {
    _init_properties_ImageResources_kt__6e1y7e();
    var tmp0 = emptyImageBitmap$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('emptyImageBitmap', 0, tmp, _get_emptyImageBitmap_$ref_302yd9(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var emptyImageBitmap$delegate;
  function get_emptyImageVector() {
    _init_properties_ImageResources_kt__6e1y7e();
    var tmp0 = emptyImageVector$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('emptyImageVector', 0, tmp, _get_emptyImageVector_$ref_h5qmfr(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var emptyImageVector$delegate;
  function get_emptySvgPainter() {
    _init_properties_ImageResources_kt__6e1y7e();
    var tmp0 = emptySvgPainter$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('emptySvgPainter', 0, tmp, _get_emptySvgPainter_$ref_tgsxpw(), null);
    return tmp0.get_value_j01efc_k$();
  }
  var emptySvgPainter$delegate;
  function get_imageCache() {
    _init_properties_ImageResources_kt__6e1y7e();
    return imageCache;
  }
  var imageCache;
  var org_jetbrains_compose_resources_DrawableResource$stable;
  var org_jetbrains_compose_resources_ImageCache_Bitmap$stable;
  var org_jetbrains_compose_resources_ImageCache_Vector$stable;
  var org_jetbrains_compose_resources_ImageCache_Svg$stable;
  function Bitmap(bitmap) {
    this.bitmap_1 = bitmap;
  }
  protoOf(Bitmap).get_bitmap_bfxu7s_k$ = function () {
    return this.bitmap_1;
  };
  function Vector(vector) {
    this.vector_1 = vector;
  }
  protoOf(Vector).get_vector_kuceh8_k$ = function () {
    return this.vector_1;
  };
  function Svg(painter) {
    this.painter_1 = painter;
  }
  protoOf(Svg).get_painter_bzl4ri_k$ = function () {
    return this.painter_1;
  };
  function ImageCache() {
  }
  function DrawableResource(id, items) {
    Resource.call(this, id, items);
  }
  function emptyImageBitmap$delegate$lambda() {
    _init_properties_ImageResources_kt__6e1y7e();
    return ImageBitmap(1, 1);
  }
  function _get_emptyImageBitmap_$ref_302yd9() {
    return constructCallableReference(function () {
      return get_emptyImageBitmap();
    }, 0, 0, "[ File '/mnt/agent/work/18b28db995a99bcc/components/resources/library/src/commonMain/kotlin/org/jetbrains/compose/resources/ImageResources.kt' <- org.jetbrains.compose.resources/emptyImageBitmap.<get-emptyImageBitmap>|<get-emptyImageBitmap>(){}[0] ]");
  }
  function emptyImageVector$delegate$lambda() {
    _init_properties_ImageResources_kt__6e1y7e();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(1);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(1);
    return (new Builder('emptyImageVector', tmp, tmp$ret$1, 1.0, 1.0)).build_1k0s4u_k$();
  }
  function _get_emptyImageVector_$ref_h5qmfr() {
    return constructCallableReference(function () {
      return get_emptyImageVector();
    }, 0, 0, "[ File '/mnt/agent/work/18b28db995a99bcc/components/resources/library/src/commonMain/kotlin/org/jetbrains/compose/resources/ImageResources.kt' <- org.jetbrains.compose.resources/emptyImageVector.<get-emptyImageVector>|<get-emptyImageVector>(){}[0] ]");
  }
  function emptySvgPainter$delegate$lambda() {
    _init_properties_ImageResources_kt__6e1y7e();
    return new BitmapPainter(get_emptyImageBitmap());
  }
  function _get_emptySvgPainter_$ref_tgsxpw() {
    return constructCallableReference(function () {
      return get_emptySvgPainter();
    }, 0, 0, "[ File '/mnt/agent/work/18b28db995a99bcc/components/resources/library/src/commonMain/kotlin/org/jetbrains/compose/resources/ImageResources.kt' <- org.jetbrains.compose.resources/emptySvgPainter.<get-emptySvgPainter>|<get-emptySvgPainter>(){}[0] ]");
  }
  var properties_initialized_ImageResources_kt_9gvoi4;
  function _init_properties_ImageResources_kt__6e1y7e() {
    if (!properties_initialized_ImageResources_kt_9gvoi4) {
      properties_initialized_ImageResources_kt_9gvoi4 = true;
      emptyImageBitmap$delegate = lazy(emptyImageBitmap$delegate$lambda);
      emptyImageVector$delegate = lazy(emptyImageVector$delegate$lambda);
      emptySvgPainter$delegate = lazy(emptySvgPainter$delegate$lambda);
      imageCache = new AsyncCache();
      org_jetbrains_compose_resources_DrawableResource$stable = 0;
      org_jetbrains_compose_resources_ImageCache_Bitmap$stable = 8;
      org_jetbrains_compose_resources_ImageCache_Vector$stable = 0;
      org_jetbrains_compose_resources_ImageCache_Svg$stable = androidx_compose_ui_graphics_painter_Painter$stableprop_getter();
    }
  }
  var org_jetbrains_compose_resources_PluralStringResource$stable;
  function PluralStringResource(id, key, items) {
    Resource.call(this, id, items);
    this.key_1 = key;
  }
  protoOf(PluralStringResource).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  var org_jetbrains_compose_resources_LanguageQualifier$stable;
  var org_jetbrains_compose_resources_RegionQualifier$stable;
  var org_jetbrains_compose_resources_ScriptQualifier$stable;
  function LanguageQualifier(language) {
    this.language_1 = language;
  }
  protoOf(LanguageQualifier).get_language_cjhhk1_k$ = function () {
    return this.language_1;
  };
  protoOf(LanguageQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof LanguageQualifier))
      THROW_CCE();
    return this.language_1 === other.language_1;
  };
  protoOf(LanguageQualifier).hashCode = function () {
    return getStringHashCode(this.language_1);
  };
  protoOf(LanguageQualifier).toString = function () {
    return "LanguageQualifier(language='" + this.language_1 + "')";
  };
  function ScriptQualifier(script) {
    this.script_1 = script;
  }
  protoOf(ScriptQualifier).get_script_jedas4_k$ = function () {
    return this.script_1;
  };
  protoOf(ScriptQualifier).isEmpty_y1axqb_k$ = function () {
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = this.script_1;
    return charSequenceLength(this_0) === 0;
  };
  protoOf(ScriptQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ScriptQualifier))
      THROW_CCE();
    return this.script_1 === other.script_1;
  };
  protoOf(ScriptQualifier).hashCode = function () {
    return getStringHashCode(this.script_1);
  };
  protoOf(ScriptQualifier).toString = function () {
    return "ScriptQualifier(script='" + this.script_1 + "')";
  };
  function RegionQualifier(region) {
    this.region_1 = region;
  }
  protoOf(RegionQualifier).get_region_iy88ot_k$ = function () {
    return this.region_1;
  };
  protoOf(RegionQualifier).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof RegionQualifier))
      THROW_CCE();
    return this.region_1 === other.region_1;
  };
  protoOf(RegionQualifier).hashCode = function () {
    return getStringHashCode(this.region_1);
  };
  protoOf(RegionQualifier).toString = function () {
    return "RegionQualifier(region='" + this.region_1 + "')";
  };
  var static_init_called;
  function static_init() {
    if (static_init_called)
      return Unit_getInstance();
    static_init_called = true;
    ThemeQualifier_LIGHT_instance = new ThemeQualifier('LIGHT', 0);
    ThemeQualifier_DARK_instance = new ThemeQualifier('DARK', 1);
    if (Companion_instance == null) {
      Companion_getInstance();
      new Companion();
    }
  }
  var ThemeQualifier_LIGHT_instance;
  var ThemeQualifier_DARK_instance;
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).selectByValue_7mr6mx_k$ = function (isDark) {
    return isDark ? ThemeQualifier_DARK_getInstance() : ThemeQualifier_LIGHT_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance_3() {
    static_init();
    return Companion_instance;
  }
  function values() {
    static_init();
    return [ThemeQualifier_LIGHT_getInstance(), ThemeQualifier_DARK_getInstance()];
  }
  function valueOf(value) {
    static_init();
    switch (value) {
      case 'LIGHT':
        return ThemeQualifier_LIGHT_getInstance();
      case 'DARK':
        return ThemeQualifier_DARK_getInstance();
      default:
        THROW_IAE('No enum constant org.jetbrains.compose.resources.ThemeQualifier.' + value);
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
  function ThemeQualifier(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var static_init_called_0;
  function static_init_0() {
    if (static_init_called_0)
      return Unit_getInstance();
    static_init_called_0 = true;
    DensityQualifier_LDPI_instance = new DensityQualifier('LDPI', 0, 120);
    DensityQualifier_MDPI_instance = new DensityQualifier('MDPI', 1, 160);
    DensityQualifier_HDPI_instance = new DensityQualifier('HDPI', 2, 240);
    DensityQualifier_XHDPI_instance = new DensityQualifier('XHDPI', 3, 320);
    DensityQualifier_XXHDPI_instance = new DensityQualifier('XXHDPI', 4, 480);
    DensityQualifier_XXXHDPI_instance = new DensityQualifier('XXXHDPI', 5, 640);
    if (Companion_instance_0 == null) {
      Companion_getInstance();
      new Companion_0();
    }
  }
  var DensityQualifier_LDPI_instance;
  var DensityQualifier_MDPI_instance;
  var DensityQualifier_HDPI_instance;
  var DensityQualifier_XHDPI_instance;
  var DensityQualifier_XXHDPI_instance;
  var DensityQualifier_XXXHDPI_instance;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).selectByValue_h7gwd6_k$ = function (dpi) {
    return dpi <= DensityQualifier_LDPI_getInstance().dpi_1 ? DensityQualifier_LDPI_getInstance() : dpi <= DensityQualifier_MDPI_getInstance().dpi_1 ? DensityQualifier_MDPI_getInstance() : dpi <= DensityQualifier_HDPI_getInstance().dpi_1 ? DensityQualifier_HDPI_getInstance() : dpi <= DensityQualifier_XHDPI_getInstance().dpi_1 ? DensityQualifier_XHDPI_getInstance() : dpi <= DensityQualifier_XXHDPI_getInstance().dpi_1 ? DensityQualifier_XXHDPI_getInstance() : DensityQualifier_XXXHDPI_getInstance();
  };
  protoOf(Companion_0).selectByDensity_fkp6e5_k$ = function (density) {
    return density <= 0.75 ? DensityQualifier_LDPI_getInstance() : density <= 1.0 ? DensityQualifier_MDPI_getInstance() : density <= 1.5 ? DensityQualifier_HDPI_getInstance() : density <= 2.0 ? DensityQualifier_XHDPI_getInstance() : density <= 3.0 ? DensityQualifier_XXHDPI_getInstance() : DensityQualifier_XXXHDPI_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_4() {
    static_init_0();
    return Companion_instance_0;
  }
  function values_0() {
    static_init_0();
    return [DensityQualifier_LDPI_getInstance(), DensityQualifier_MDPI_getInstance(), DensityQualifier_HDPI_getInstance(), DensityQualifier_XHDPI_getInstance(), DensityQualifier_XXHDPI_getInstance(), DensityQualifier_XXXHDPI_getInstance()];
  }
  function valueOf_0(value) {
    static_init_0();
    switch (value) {
      case 'LDPI':
        return DensityQualifier_LDPI_getInstance();
      case 'MDPI':
        return DensityQualifier_MDPI_getInstance();
      case 'HDPI':
        return DensityQualifier_HDPI_getInstance();
      case 'XHDPI':
        return DensityQualifier_XHDPI_getInstance();
      case 'XXHDPI':
        return DensityQualifier_XXHDPI_getInstance();
      case 'XXXHDPI':
        return DensityQualifier_XXXHDPI_getInstance();
      default:
        THROW_IAE('No enum constant org.jetbrains.compose.resources.DensityQualifier.' + value);
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
  function DensityQualifier(name, ordinal, dpi) {
    Enum.call(this, name, ordinal);
    this.dpi_1 = dpi;
  }
  protoOf(DensityQualifier).get_dpi_18j764_k$ = function () {
    return this.dpi_1;
  };
  function Qualifier() {
  }
  function ThemeQualifier_LIGHT_getInstance() {
    static_init();
    return ThemeQualifier_LIGHT_instance;
  }
  function ThemeQualifier_DARK_getInstance() {
    static_init();
    return ThemeQualifier_DARK_instance;
  }
  function DensityQualifier_LDPI_getInstance() {
    static_init_0();
    return DensityQualifier_LDPI_instance;
  }
  function DensityQualifier_MDPI_getInstance() {
    static_init_0();
    return DensityQualifier_MDPI_instance;
  }
  function DensityQualifier_HDPI_getInstance() {
    static_init_0();
    return DensityQualifier_HDPI_instance;
  }
  function DensityQualifier_XHDPI_getInstance() {
    static_init_0();
    return DensityQualifier_XHDPI_instance;
  }
  function DensityQualifier_XXHDPI_getInstance() {
    static_init_0();
    return DensityQualifier_XXHDPI_instance;
  }
  function DensityQualifier_XXXHDPI_getInstance() {
    static_init_0();
    return DensityQualifier_XXXHDPI_instance;
  }
  var org_jetbrains_compose_resources_Resource$stable;
  var org_jetbrains_compose_resources_ResourceItem$stable;
  function ExperimentalResourceApi() {
  }
  protoOf(ExperimentalResourceApi).equals = function (other) {
    if (!(other instanceof ExperimentalResourceApi))
      return false;
    other instanceof ExperimentalResourceApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalResourceApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalResourceApi).toString = function () {
    return '@org.jetbrains.compose.resources.ExperimentalResourceApi(' + ')';
  };
  function InternalResourceApi() {
  }
  protoOf(InternalResourceApi).equals = function (other) {
    if (!(other instanceof InternalResourceApi))
      return false;
    other instanceof InternalResourceApi || THROW_CCE();
    return true;
  };
  protoOf(InternalResourceApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalResourceApi).toString = function () {
    return '@org.jetbrains.compose.resources.InternalResourceApi(' + ')';
  };
  function Resource(id, items) {
    this.id_1 = id;
    this.items_1 = items;
  }
  protoOf(Resource).get_id_fot53j_k$ = function () {
    return this.id_1;
  };
  protoOf(Resource).get_items_cqpf3y_k$ = function () {
    return this.items_1;
  };
  protoOf(Resource).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Resource))
      THROW_CCE();
    return this.id_1 === other.id_1;
  };
  protoOf(Resource).hashCode = function () {
    return getStringHashCode(this.id_1);
  };
  function ResourceItem(qualifiers, path, offset, size) {
    this.qualifiers_1 = qualifiers;
    this.path_1 = path;
    this.offset_1 = offset;
    this.size_1 = size;
  }
  protoOf(ResourceItem).get_qualifiers_3a0pdp_k$ = function () {
    return this.qualifiers_1;
  };
  protoOf(ResourceItem).get_path_qm550n_k$ = function () {
    return this.path_1;
  };
  protoOf(ResourceItem).get_offset_2j7xfd_k$ = function () {
    return this.offset_1;
  };
  protoOf(ResourceItem).get_size_75e1u3_k$ = function () {
    return this.size_1;
  };
  protoOf(ResourceItem).component1_tytzjz_k$ = function () {
    return this.qualifiers_1;
  };
  protoOf(ResourceItem).component2_ciz0u8_k$ = function () {
    return this.path_1;
  };
  protoOf(ResourceItem).component3_g0c0qp_k$ = function () {
    return this.offset_1;
  };
  protoOf(ResourceItem).component4_qhgzni_k$ = function () {
    return this.size_1;
  };
  protoOf(ResourceItem).copy_hpcldu_k$ = function (qualifiers, path, offset, size) {
    return new ResourceItem(qualifiers, path, offset, size);
  };
  protoOf(ResourceItem).copy$default_m51nyw_k$ = function (qualifiers, path, offset, size, $super) {
    qualifiers = qualifiers === VOID ? this.qualifiers_1 : qualifiers;
    path = path === VOID ? this.path_1 : path;
    offset = offset === VOID ? this.offset_1 : offset;
    size = size === VOID ? this.size_1 : size;
    return $super === VOID ? this.copy_hpcldu_k$(qualifiers, path, offset, size) : $super.copy_hpcldu_k$.call(this, qualifiers, path, offset, size);
  };
  protoOf(ResourceItem).toString = function () {
    return 'ResourceItem(qualifiers=' + toString(this.qualifiers_1) + ', path=' + this.path_1 + ', offset=' + this.offset_1.toString() + ', size=' + this.size_1.toString() + ')';
  };
  protoOf(ResourceItem).hashCode = function () {
    var result = hashCode(this.qualifiers_1);
    result = imul(result, 31) + getStringHashCode(this.path_1) | 0;
    result = imul(result, 31) + this.offset_1.hashCode() | 0;
    result = imul(result, 31) + this.size_1.hashCode() | 0;
    return result;
  };
  protoOf(ResourceItem).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ResourceItem))
      return false;
    if (!equals(this.qualifiers_1, other.qualifiers_1))
      return false;
    if (!(this.path_1 === other.path_1))
      return false;
    if (!equalsLong(this.offset_1, other.offset_1))
      return false;
    if (!equalsLong(this.size_1, other.size_1))
      return false;
    return true;
  };
  var org_jetbrains_compose_resources_AsyncCache$stable;
  var org_jetbrains_compose_resources_ResourceCaches$stable;
  function _get_cacheScope__m83lt3($this) {
    return $this.cacheScope_1;
  }
  function _get_mutex__e2dgb2($this) {
    return $this.mutex_1;
  }
  function _get_cache__j44d4h($this) {
    return $this.cache_1;
  }
  function SharedRequest(deferred) {
    this.deferred_1 = deferred;
    this.listenersCount_1 = 0;
  }
  protoOf(SharedRequest).get_deferred_l376u0_k$ = function () {
    return this.deferred_1;
  };
  protoOf(SharedRequest).set_listenersCount_2yd5jv_k$ = function (_set____db54di) {
    this.listenersCount_1 = _set____db54di;
  };
  protoOf(SharedRequest).get_listenersCount_5vaqxz_k$ = function () {
    return this.listenersCount_1;
  };
  function getAllActiveJobs($this, $completion) {
    var tmp = new $getAllActiveJobsCOROUTINE$($this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function AsyncCache$getOrLoad$slambda($load, resultContinuation) {
    this.$load_1 = $load;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncCache$getOrLoad$slambda).invoke_s98mvd_k$ = function ($this$async, $completion) {
    var tmp = this.create_rcuf4x_k$($this$async, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncCache$getOrLoad$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_s98mvd_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncCache$getOrLoad$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.$load_1(this);
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
  protoOf(AsyncCache$getOrLoad$slambda).create_rcuf4x_k$ = function ($this$async, completion) {
    var i = new AsyncCache$getOrLoad$slambda(this.$load_1, completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(AsyncCache$getOrLoad$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function AsyncCache$getOrLoad$slambda_0($load, resultContinuation) {
    var i = new AsyncCache$getOrLoad$slambda($load, resultContinuation);
    return constructCallableReference(function ($this$async, $completion) {
      return i.invoke_s98mvd_k$($this$async, $completion);
    }, 1);
  }
  function $getAllActiveJobsCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($getAllActiveJobsCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.this1__1 = this._this__u8e3s4__1.mutex_1;
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
                var this_0 = this._this__u8e3s4__1.cache_1.get_values_ksazhn_k$();
                var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
                var _iterator__ex2g4s = this_0.iterator_jk1svi_k$();
                while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
                  var item = _iterator__ex2g4s.next_20eer_k$();
                  destination.add_utx5q5_k$(item.deferred_1);
                }
                var destination_0 = ArrayList_init_$Create$_0();
                var _iterator__ex2g4s_0 = destination.iterator_jk1svi_k$();
                while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
                  var element = _iterator__ex2g4s_0.next_20eer_k$();
                  if (element.get_isActive_quafmh_k$()) {
                    destination_0.add_utx5q5_k$(element);
                  }
                }
                tmp$ret$0 = destination_0;
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
            return tmp_2;
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
  function $getOrLoadCOROUTINE$(_this__u8e3s4, key, load, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.key_1 = key;
    this.load_1 = load;
  }
  protoOf($getOrLoadCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(8);
            this.this9__1 = this._this__u8e3s4__1.mutex_1;
            this.owner8__1 = null;
            this.set_state_rjd8d0_k$(1);
            suspendResult = this.this9__1.lock_ugrcvf_k$(this.owner8__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_0 = this;
            var tmp$ret$0 = Unit_getInstance();
            l$ret$1: do {
              var tmp_1;
              try {
                var cached = this._this__u8e3s4__1.cache_1.get_wei43m_k$(this.key_1);
                if (cached == null || cached.deferred_1.get_isCancelled_trk8pu_k$()) {
                  cached = new SharedRequest(async(this._this__u8e3s4__1.cacheScope_1, VOID, VOID, AsyncCache$getOrLoad$slambda_0(this.load_1, null)));
                  var tmp0 = this._this__u8e3s4__1.cache_1;
                  var tmp2 = this.key_1;
                  var value = cached;
                  tmp0.put_4fpzoq_k$(tmp2, value);
                }
                var _receiver__tnumb7 = cached;
                _receiver__tnumb7.listenersCount_1 = _receiver__tnumb7.listenersCount_1 + 1 | 0;
                tmp$ret$0 = cached;
                break l$ret$1;
              } catch ($p) {
                var tmp_2;
                var t = $p;
                this.this9__1.unlock_ulcrcl_k$(this.owner8__1);
                throw t;
              }
            }
             while (false);
            var tmp_3 = tmp$ret$0;
            this.this9__1.unlock_ulcrcl_k$(this.owner8__1);
            tmp_0.request3__1 = tmp_3;
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(6);
            this.set_state_rjd8d0_k$(3);
            suspendResult = this.request3__1.deferred_1.await_4rdzbx_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.tmp$ret$27__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(8);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            this.tmp4__1 = this.tmp$ret$27__1;
            this.set_exceptionState_fex74n_k$(8);
            this.this6__1 = this._this__u8e3s4__1.mutex_1;
            this.owner5__1 = null;
            this.set_state_rjd8d0_k$(5);
            suspendResult = this.this6__1.lock_ugrcvf_k$(this.owner5__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            l$ret$7: do {
              var tmp_4;
              try {
                var _receiver__tnumb7_0 = this.request3__1;
                _receiver__tnumb7_0.listenersCount_1 = _receiver__tnumb7_0.listenersCount_1 - 1 | 0;
                if (this.request3__1.listenersCount_1 === 0 && this.request3__1.deferred_1.get_isActive_quafmh_k$()) {
                  this.request3__1.deferred_1.cancel$default_8haxne_k$();
                }
                break l$ret$7;
              } catch ($p_0) {
                var tmp_5;
                var t_0 = $p_0;
                this.this6__1.unlock_ulcrcl_k$(this.owner5__1);
                throw t_0;
              }
            }
             while (false);
            this.this6__1.unlock_ulcrcl_k$(this.owner5__1);
            return this.tmp4__1;
          case 6:
            this.set_exceptionState_fex74n_k$(8);
            this.t0__1 = this.get_exception_x0n6w6_k$();
            this.this2__1 = this._this__u8e3s4__1.mutex_1;
            this.owner1__1 = null;
            this.set_state_rjd8d0_k$(7);
            suspendResult = this.this2__1.lock_ugrcvf_k$(this.owner1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            l$ret$5: do {
              var tmp_6;
              try {
                var _receiver__tnumb7_1 = this.request3__1;
                _receiver__tnumb7_1.listenersCount_1 = _receiver__tnumb7_1.listenersCount_1 - 1 | 0;
                if (this.request3__1.listenersCount_1 === 0 && this.request3__1.deferred_1.get_isActive_quafmh_k$()) {
                  this.request3__1.deferred_1.cancel$default_8haxne_k$();
                }
                break l$ret$5;
              } catch ($p_1) {
                var tmp_7;
                var t_1 = $p_1;
                this.this2__1.unlock_ulcrcl_k$(this.owner1__1);
                throw t_1;
              }
            }
             while (false);
            this.this2__1.unlock_ulcrcl_k$(this.owner1__1);
            throw this.t0__1;
          case 8:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p_2) {
        var e = $p_2;
        if (this.get_exceptionState_wflpxn_k$() === 8) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $waitAllJobsCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($waitAllJobsCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = getAllActiveJobs(this._this__u8e3s4__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.set_state_rjd8d0_k$(2);
            suspendResult = joinAll(ARGUMENT, this);
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
  function $clearCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($clearCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.this1__1 = this._this__u8e3s4__1.mutex_1;
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
                var _iterator__ex2g4s = this._this__u8e3s4__1.cache_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
                while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
                  var element = _iterator__ex2g4s.next_20eer_k$();
                  var v = element.get_value_j01efc_k$();
                  v.deferred_1.cancel$default_8haxne_k$();
                }
                this._this__u8e3s4__1.cache_1.clear_j9egeb_k$();
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
  function AsyncCache() {
    this.cacheScope_1 = CoroutineScope_0(SupervisorJob());
    this.mutex_1 = Mutex();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.cache_1 = LinkedHashMap_init_$Create$();
    ResourceCaches_getInstance().registerCache_nrorgp_k$(this);
  }
  protoOf(AsyncCache).getOrLoad_lwanaa_k$ = function (key, load, $completion) {
    var tmp = new $getOrLoadCOROUTINE$(this, key, load, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncCache).waitAllJobs_ua3hpx_k$ = function ($completion) {
    var tmp = new $waitAllJobsCOROUTINE$(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(AsyncCache).clear_wi6ip6_k$ = function ($completion) {
    var tmp = new $clearCOROUTINE$(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function _get_caches__oautqe($this) {
    return $this.caches_1;
  }
  function $waitAllJobsCOROUTINE$_0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($waitAllJobsCOROUTINE$_0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this._iterator_0_yqohr0__1 = toList(this._this__u8e3s4__1.caches_1).iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this._iterator_0_yqohr0__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            var element = this._iterator_0_yqohr0__1.next_20eer_k$();
            this.set_state_rjd8d0_k$(2);
            suspendResult = element.waitAllJobs_ua3hpx_k$(this);
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
  function $clearCOROUTINE$_0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($clearCOROUTINE$_0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this._iterator_0_yqohr0__1 = toList(this._this__u8e3s4__1.caches_1).iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!this._iterator_0_yqohr0__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            var element = this._iterator_0_yqohr0__1.next_20eer_k$();
            this.set_state_rjd8d0_k$(2);
            suspendResult = element.clear_wi6ip6_k$(this);
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
  function ResourceCaches() {
    ResourceCaches_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.caches_1 = ArrayList_init_$Create$_0();
  }
  protoOf(ResourceCaches).registerCache_nrorgp_k$ = function (cache) {
    return this.caches_1.add_utx5q5_k$(cache);
  };
  protoOf(ResourceCaches).waitAllJobs_lby4a2_k$ = function ($completion) {
    var tmp = new $waitAllJobsCOROUTINE$_0(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ResourceCaches).clear_ecltgh_k$ = function ($completion) {
    var tmp = new $clearCOROUTINE$_0(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  var ResourceCaches_instance;
  function ResourceCaches_getInstance() {
    if (ResourceCaches_instance == null)
      new ResourceCaches();
    return ResourceCaches_instance;
  }
  function get_DefaultComposeEnvironment() {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return DefaultComposeEnvironment;
  }
  var DefaultComposeEnvironment;
  function get_LocalComposeEnvironment() {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return LocalComposeEnvironment;
  }
  var LocalComposeEnvironment;
  function set_getResourceEnvironment(_set____db54di) {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    getResourceEnvironment = _set____db54di;
  }
  function get_getResourceEnvironment() {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return getResourceEnvironment;
  }
  var getResourceEnvironment;
  var org_jetbrains_compose_resources_ResourceEnvironment$stable;
  function ComposeEnvironment() {
  }
  function ResourceEnvironment(language, script, region, theme, density) {
    this.language_1 = language;
    this.script_1 = script;
    this.region_1 = region;
    this.theme_1 = theme;
    this.density_1 = density;
  }
  protoOf(ResourceEnvironment).get_language_q66oqc_k$ = function () {
    return this.language_1;
  };
  protoOf(ResourceEnvironment).get_script_h3qb41_k$ = function () {
    return this.script_1;
  };
  protoOf(ResourceEnvironment).get_region_424es8_k$ = function () {
    return this.region_1;
  };
  protoOf(ResourceEnvironment).get_theme_j95dl7_k$ = function () {
    return this.theme_1;
  };
  protoOf(ResourceEnvironment).get_density_75p86i_k$ = function () {
    return this.density_1;
  };
  protoOf(ResourceEnvironment).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ResourceEnvironment))
      THROW_CCE();
    if (!this.language_1.equals(other.language_1))
      return false;
    if (!this.script_1.equals(other.script_1))
      return false;
    if (!this.region_1.equals(other.region_1))
      return false;
    if (!this.theme_1.equals(other.theme_1))
      return false;
    if (!this.density_1.equals(other.density_1))
      return false;
    return true;
  };
  protoOf(ResourceEnvironment).hashCode = function () {
    var result = this.language_1.hashCode();
    result = imul(31, result) + this.script_1.hashCode() | 0;
    result = imul(31, result) + this.region_1.hashCode() | 0;
    result = imul(31, result) + this.theme_1.hashCode() | 0;
    result = imul(31, result) + this.density_1.hashCode() | 0;
    return result;
  };
  function DefaultComposeEnvironment$1() {
  }
  protoOf(DefaultComposeEnvironment$1).rememberEnvironment_3peo8j_k$ = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceGroup_5hh8aj_k$(1808039825);
    if (isTraceInProgress()) {
      traceEventStart(1808039825, $changed, -1, 'org.jetbrains.compose.resources.DefaultComposeEnvironment.<no name provided>.rememberEnvironment (ResourceEnvironment.kt:46)');
    }
    var composeLocale = Companion_getInstance_0().get_current_jwi6j4_k$();
    var composeTheme = isSystemInDarkTheme($composer_0, 0);
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalDensity();
    var $composer_1 = $composer_0;
    var composeDensity = $composer_1.consume_ebzcrh_k$(this_0);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!($composer_0.changed_ga7h3f_k$(composeLocale) | $composer_0.changed_jpyyrz_k$(composeTheme)) | $composer_0.changed_ga7h3f_k$(composeDensity));
    // Inline function 'kotlin.let' call
    var it = $composer_0.rememberedValue_4dg93v_k$();
    var tmp;
    if (invalid || it === Companion_getInstance_1().get_Empty_i9b85g_k$()) {
      var value = new ResourceEnvironment(new LanguageQualifier(composeLocale.get_language_cjhhk1_k$()), new ScriptQualifier(composeLocale.get_script_jedas4_k$()), new RegionQualifier(composeLocale.get_region_iy88ot_k$()), Companion_getInstance_3().selectByValue_7mr6mx_k$(composeTheme), Companion_getInstance_4().selectByDensity_fkp6e5_k$(composeDensity.get_density_qy0267_k$()));
      $composer_0.updateRememberedValue_l1wh71_k$(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceGroup_ek144q_k$();
    return tmp0;
  };
  function LocalComposeEnvironment$lambda() {
    _init_properties_ResourceEnvironment_kt__2jx9u5();
    return get_DefaultComposeEnvironment();
  }
  function getSystemEnvironment$ref() {
    return constructCallableReference(function () {
      return getSystemEnvironment();
    }, 0, 0, 'org.jetbrains.compose.resources/getSystemEnvironment|getSystemEnvironment(){}[0]', 'getSystemEnvironment');
  }
  var properties_initialized_ResourceEnvironment_kt_6hb9vv;
  function _init_properties_ResourceEnvironment_kt__2jx9u5() {
    if (!properties_initialized_ResourceEnvironment_kt_6hb9vv) {
      properties_initialized_ResourceEnvironment_kt_6hb9vv = true;
      DefaultComposeEnvironment = new DefaultComposeEnvironment$1();
      LocalComposeEnvironment = staticCompositionLocalOf(LocalComposeEnvironment$lambda);
      getResourceEnvironment = getSystemEnvironment$ref();
      org_jetbrains_compose_resources_ResourceEnvironment$stable = 0;
    }
  }
  function get_DefaultResourceReader() {
    _init_properties_ResourceReader_kt__hdc5sh();
    return DefaultResourceReader;
  }
  var DefaultResourceReader;
  function get_LocalResourceReader() {
    _init_properties_ResourceReader_kt__hdc5sh();
    return LocalResourceReader;
  }
  var LocalResourceReader;
  var org_jetbrains_compose_resources_MissingResourceException$stable;
  function ResourceReader() {
  }
  function MissingResourceException_init_$Init$(path, message, $this) {
    MissingResourceException.call($this, path + '. ' + message);
    return $this;
  }
  function MissingResourceException_init_$Create$(path, message) {
    var tmp = MissingResourceException_init_$Init$(path, message, objectCreate(protoOf(MissingResourceException)));
    captureStack(tmp, MissingResourceException_init_$Create$);
    return tmp;
  }
  function MissingResourceException(path) {
    Exception_init_$Init$('Missing resource with path: ' + path, this);
    captureStack(this, MissingResourceException);
  }
  function readResourceBytes(path, $completion) {
    return get_DefaultResourceReader().read_3sms9f_k$(path, $completion);
  }
  function getResourceUri(path) {
    _init_properties_ResourceReader_kt__hdc5sh();
    return get_DefaultResourceReader().getUri_3gtoqs_k$(path);
  }
  function LocalResourceReader$lambda() {
    _init_properties_ResourceReader_kt__hdc5sh();
    return get_DefaultResourceReader();
  }
  var properties_initialized_ResourceReader_kt_tqilcj;
  function _init_properties_ResourceReader_kt__hdc5sh() {
    if (!properties_initialized_ResourceReader_kt_tqilcj) {
      properties_initialized_ResourceReader_kt_tqilcj = true;
      DefaultResourceReader = getPlatformResourceReader();
      LocalResourceReader = staticCompositionLocalOf(LocalResourceReader$lambda);
      org_jetbrains_compose_resources_MissingResourceException$stable = 8;
    }
  }
  var org_jetbrains_compose_resources_StringArrayResource$stable;
  function StringArrayResource(id, key, items) {
    Resource.call(this, id, items);
    this.key_1 = key;
  }
  protoOf(StringArrayResource).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  var org_jetbrains_compose_resources_StringResource$stable;
  function StringResource(id, key, items) {
    Resource.call(this, id, items);
    this.key_1 = key;
  }
  protoOf(StringResource).get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  function get_SimpleStringFormatRegex() {
    _init_properties_StringResourcesUtils_kt__ckiot9();
    return SimpleStringFormatRegex;
  }
  var SimpleStringFormatRegex;
  function get_stringItemsCache() {
    _init_properties_StringResourcesUtils_kt__ckiot9();
    return stringItemsCache;
  }
  var stringItemsCache;
  var org_jetbrains_compose_resources_StringItem_Value$stable;
  var org_jetbrains_compose_resources_StringItem_Plurals$stable;
  var org_jetbrains_compose_resources_StringItem_Array$stable;
  function Value(text) {
    this.text_1 = text;
  }
  protoOf(Value).get_text_wouvsm_k$ = function () {
    return this.text_1;
  };
  protoOf(Value).component1_7eebsc_k$ = function () {
    return this.text_1;
  };
  protoOf(Value).copy_a35qlh_k$ = function (text) {
    return new Value(text);
  };
  protoOf(Value).copy$default_hb93vy_k$ = function (text, $super) {
    text = text === VOID ? this.text_1 : text;
    return $super === VOID ? this.copy_a35qlh_k$(text) : $super.copy_a35qlh_k$.call(this, text);
  };
  protoOf(Value).toString = function () {
    return 'Value(text=' + this.text_1 + ')';
  };
  protoOf(Value).hashCode = function () {
    return getStringHashCode(this.text_1);
  };
  protoOf(Value).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Value))
      return false;
    if (!(this.text_1 === other.text_1))
      return false;
    return true;
  };
  function Plurals(items) {
    this.items_1 = items;
  }
  protoOf(Plurals).get_items_it823b_k$ = function () {
    return this.items_1;
  };
  protoOf(Plurals).component1_7eebsc_k$ = function () {
    return this.items_1;
  };
  protoOf(Plurals).copy_jkbmgr_k$ = function (items) {
    return new Plurals(items);
  };
  protoOf(Plurals).copy$default_xuqi0y_k$ = function (items, $super) {
    items = items === VOID ? this.items_1 : items;
    return $super === VOID ? this.copy_jkbmgr_k$(items) : $super.copy_jkbmgr_k$.call(this, items);
  };
  protoOf(Plurals).toString = function () {
    return 'Plurals(items=' + toString(this.items_1) + ')';
  };
  protoOf(Plurals).hashCode = function () {
    return hashCode(this.items_1);
  };
  protoOf(Plurals).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Plurals))
      return false;
    if (!equals(this.items_1, other.items_1))
      return false;
    return true;
  };
  function Array_0(items) {
    this.items_1 = items;
  }
  protoOf(Array_0).get_items_it823b_k$ = function () {
    return this.items_1;
  };
  protoOf(Array_0).component1_7eebsc_k$ = function () {
    return this.items_1;
  };
  protoOf(Array_0).copy_is4t59_k$ = function (items) {
    return new Array_0(items);
  };
  protoOf(Array_0).copy$default_2kft8e_k$ = function (items, $super) {
    items = items === VOID ? this.items_1 : items;
    return $super === VOID ? this.copy_is4t59_k$(items) : $super.copy_is4t59_k$.call(this, items);
  };
  protoOf(Array_0).toString = function () {
    return 'Array(items=' + toString(this.items_1) + ')';
  };
  protoOf(Array_0).hashCode = function () {
    return hashCode(this.items_1);
  };
  protoOf(Array_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Array_0))
      return false;
    if (!equals(this.items_1, other.items_1))
      return false;
    return true;
  };
  function StringItem() {
  }
  var properties_initialized_StringResourcesUtils_kt_tq6hb5;
  function _init_properties_StringResourcesUtils_kt__ckiot9() {
    if (!properties_initialized_StringResourcesUtils_kt_tq6hb5) {
      properties_initialized_StringResourcesUtils_kt_tq6hb5 = true;
      SimpleStringFormatRegex = Regex_init_$Create$('%(\\d+)\\$[ds]');
      stringItemsCache = new AsyncCache();
      org_jetbrains_compose_resources_StringItem_Value$stable = 0;
      org_jetbrains_compose_resources_StringItem_Plurals$stable = 8;
      org_jetbrains_compose_resources_StringItem_Array$stable = 8;
    }
  }
  function get_cldrPluralRuleListIndexByLocale() {
    _init_properties_CLDRPluralRuleLists_kt__djqc24();
    return cldrPluralRuleListIndexByLocale;
  }
  var cldrPluralRuleListIndexByLocale;
  function get_cldrPluralRuleLists() {
    _init_properties_CLDRPluralRuleLists_kt__djqc24();
    return cldrPluralRuleLists;
  }
  var cldrPluralRuleLists;
  var properties_initialized_CLDRPluralRuleLists_kt_25xrzi;
  function _init_properties_CLDRPluralRuleLists_kt__djqc24() {
    if (!properties_initialized_CLDRPluralRuleLists_kt_25xrzi) {
      properties_initialized_CLDRPluralRuleLists_kt_25xrzi = true;
      cldrPluralRuleListIndexByLocale = mapOf([to('bm', 0), to('bo', 0), to('dz', 0), to('hnj', 0), to('id', 0), to('ig', 0), to('ii', 0), to('in', 0), to('ja', 0), to('jbo', 0), to('jv', 0), to('jw', 0), to('kde', 0), to('kea', 0), to('km', 0), to('ko', 0), to('lkt', 0), to('lo', 0), to('ms', 0), to('my', 0), to('nqo', 0), to('osa', 0), to('root', 0), to('sah', 0), to('ses', 0), to('sg', 0), to('su', 0), to('th', 0), to('to', 0), to('tpi', 0), to('vi', 0), to('wo', 0), to('yo', 0), to('yue', 0), to('zh', 0), to('am', 1), to('as', 1), to('bn', 1), to('doi', 1), to('fa', 1), to('gu', 1), to('hi', 1), to('kn', 1), to('pcm', 1), to('zu', 1), to('ff', 2), to('hy', 2), to('kab', 2), to('ast', 3), to('de', 3), to('en', 3), to('et', 3), to('fi', 3), to('fy', 3), to('gl', 3), to('ia', 3), to('io', 3), to('ji', 3), to('lij', 3), to('nl', 3), to('sc', 3), to('scn', 3), to('sv', 3), to('sw', 3), to('ur', 3), to('yi', 3), to('si', 4), to('ak', 5), to('bho', 5), to('guw', 5), to('ln', 5), to('mg', 5), to('nso', 5), to('pa', 5), to('ti', 5), to('wa', 5), to('tzm', 6), to('af', 7), to('an', 7), to('asa', 7), to('az', 7), to('bal', 7), to('bem', 7), to('bez', 7), to('bg', 7), to('brx', 7), to('ce', 7), to('cgg', 7), to('chr', 7), to('ckb', 7), to('dv', 7), to('ee', 7), to('el', 7), to('eo', 7), to('eu', 7), to('fo', 7), to('fur', 7), to('gsw', 7), to('ha', 7), to('haw', 7), to('hu', 7), to('jgo', 7), to('jmc', 7), to('ka', 7), to('kaj', 7), to('kcg', 7), to('kk', 7), to('kkj', 7), to('kl', 7), to('ks', 7), to('ksb', 7), to('ku', 7), to('ky', 7), to('lb', 7), to('lg', 7), to('mas', 7), to('mgo', 7), to('ml', 7), to('mn', 7), to('mr', 7), to('nah', 7), to('nb', 7), to('nd', 7), to('ne', 7), to('nn', 7), to('nnh', 7), to('no', 7), to('nr', 7), to('ny', 7), to('nyn', 7), to('om', 7), to('or', 7), to('os', 7), to('pap', 7), to('ps', 7), to('rm', 7), to('rof', 7), to('rwk', 7), to('saq', 7), to('sd', 7), to('sdh', 7), to('seh', 7), to('sn', 7), to('so', 7), to('sq', 7), to('ss', 7), to('ssy', 7), to('st', 7), to('syr', 7), to('ta', 7), to('te', 7), to('teo', 7), to('tig', 7), to('tk', 7), to('tn', 7), to('tr', 7), to('ts', 7), to('ug', 7), to('uz', 7), to('ve', 7), to('vo', 7), to('vun', 7), to('wae', 7), to('xh', 7), to('xog', 7), to('da', 8), to('is', 9), to('mk', 10), to('ceb', 11), to('fil', 11), to('tl', 11), to('lv', 12), to('prg', 12), to('lag', 13), to('ksh', 14), to('blo', 15), to('he', 16), to('iw', 16), to('iu', 17), to('naq', 17), to('sat', 17), to('se', 17), to('sma', 17), to('smi', 17), to('smj', 17), to('smn', 17), to('sms', 17), to('shi', 18), to('mo', 19), to('ro', 19), to('bs', 20), to('hr', 20), to('sh', 20), to('sr', 20), to('fr', 21), to('pt', 22), to('ca', 23), to('it', 23), to('pt_PT', 23), to('vec', 23), to('es', 24), to('gd', 25), to('sl', 26), to('dsb', 27), to('hsb', 27), to('cs', 28), to('sk', 28), to('pl', 29), to('be', 30), to('lt', 31), to('ru', 32), to('uk', 32), to('br', 33), to('mt', 34), to('ga', 35), to('gv', 36), to('kw', 37), to('ar', 38), to('ars', 38), to('cy', 39)]);
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = [to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = [to(PluralCategory_ONE_getInstance(), 'i = 0 or n = 1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = [to(PluralCategory_ONE_getInstance(), 'i = 0,1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = [to(PluralCategory_ONE_getInstance(), 'i = 1 and v = 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = [to(PluralCategory_ONE_getInstance(), 'n = 0,1 or i = 0 and f = 1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_4 = [to(PluralCategory_ONE_getInstance(), 'n = 0..1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_5 = [to(PluralCategory_ONE_getInstance(), 'n = 0..1 or n = 11..99'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_6 = [to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_7 = [to(PluralCategory_ONE_getInstance(), 'n = 1 or t != 0 and i = 0,1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_8 = [to(PluralCategory_ONE_getInstance(), 't = 0 and i % 10 = 1 and i % 100 != 11 or t % 10 = 1 and t % 100 != 11'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_9 = [to(PluralCategory_ONE_getInstance(), 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_10 = [to(PluralCategory_ONE_getInstance(), 'v = 0 and i = 1,2,3 or v = 0 and i % 10 != 4,6,9 or v != 0 and f % 10 != 4,6,9'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_11 = [to(PluralCategory_ZERO_getInstance(), 'n % 10 = 0 or n % 100 = 11..19 or v = 2 and f % 100 = 11..19'), to(PluralCategory_ONE_getInstance(), 'n % 10 = 1 and n % 100 != 11 or v = 2 and f % 10 = 1 and f % 100 != 11 or v != 2 and f % 10 = 1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_12 = [to(PluralCategory_ZERO_getInstance(), 'n = 0'), to(PluralCategory_ONE_getInstance(), 'i = 0,1 and n != 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_13 = [to(PluralCategory_ZERO_getInstance(), 'n = 0'), to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_14 = [to(PluralCategory_ZERO_getInstance(), 'n = 0'), to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_15 = [to(PluralCategory_ONE_getInstance(), 'i = 1 and v = 0 or i = 0 and v != 0'), to(PluralCategory_TWO_getInstance(), 'i = 2 and v = 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_16 = [to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_TWO_getInstance(), 'n = 2'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_17 = [to(PluralCategory_ONE_getInstance(), 'i = 0 or n = 1'), to(PluralCategory_FEW_getInstance(), 'n = 2..10'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_18 = [to(PluralCategory_ONE_getInstance(), 'i = 1 and v = 0'), to(PluralCategory_FEW_getInstance(), 'v != 0 or n = 0 or n != 1 and n % 100 = 1..19'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_19 = [to(PluralCategory_ONE_getInstance(), 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11'), to(PluralCategory_FEW_getInstance(), 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_20 = [to(PluralCategory_ONE_getInstance(), 'i = 0,1'), to(PluralCategory_MANY_getInstance(), 'e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_21 = [to(PluralCategory_ONE_getInstance(), 'i = 0..1'), to(PluralCategory_MANY_getInstance(), 'e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_22 = [to(PluralCategory_ONE_getInstance(), 'i = 1 and v = 0'), to(PluralCategory_MANY_getInstance(), 'e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_23 = [to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_MANY_getInstance(), 'e = 0 and i != 0 and i % 1000000 = 0 and v = 0 or e != 0..5'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_24 = [to(PluralCategory_ONE_getInstance(), 'n = 1,11'), to(PluralCategory_TWO_getInstance(), 'n = 2,12'), to(PluralCategory_FEW_getInstance(), 'n = 3..10,13..19'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_25 = [to(PluralCategory_ONE_getInstance(), 'v = 0 and i % 100 = 1'), to(PluralCategory_TWO_getInstance(), 'v = 0 and i % 100 = 2'), to(PluralCategory_FEW_getInstance(), 'v = 0 and i % 100 = 3..4 or v != 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_26 = [to(PluralCategory_ONE_getInstance(), 'v = 0 and i % 100 = 1 or f % 100 = 1'), to(PluralCategory_TWO_getInstance(), 'v = 0 and i % 100 = 2 or f % 100 = 2'), to(PluralCategory_FEW_getInstance(), 'v = 0 and i % 100 = 3..4 or f % 100 = 3..4'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_27 = [to(PluralCategory_ONE_getInstance(), 'i = 1 and v = 0'), to(PluralCategory_FEW_getInstance(), 'i = 2..4 and v = 0'), to(PluralCategory_MANY_getInstance(), 'v != 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_28 = [to(PluralCategory_ONE_getInstance(), 'i = 1 and v = 0'), to(PluralCategory_FEW_getInstance(), 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14'), to(PluralCategory_MANY_getInstance(), 'v = 0 and i != 1 and i % 10 = 0..1 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 12..14'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_29 = [to(PluralCategory_ONE_getInstance(), 'n % 10 = 1 and n % 100 != 11'), to(PluralCategory_FEW_getInstance(), 'n % 10 = 2..4 and n % 100 != 12..14'), to(PluralCategory_MANY_getInstance(), 'n % 10 = 0 or n % 10 = 5..9 or n % 100 = 11..14'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_30 = [to(PluralCategory_ONE_getInstance(), 'n % 10 = 1 and n % 100 != 11..19'), to(PluralCategory_FEW_getInstance(), 'n % 10 = 2..9 and n % 100 != 11..19'), to(PluralCategory_MANY_getInstance(), 'f != 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_31 = [to(PluralCategory_ONE_getInstance(), 'v = 0 and i % 10 = 1 and i % 100 != 11'), to(PluralCategory_FEW_getInstance(), 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14'), to(PluralCategory_MANY_getInstance(), 'v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_32 = [to(PluralCategory_ONE_getInstance(), 'n % 10 = 1 and n % 100 != 11,71,91'), to(PluralCategory_TWO_getInstance(), 'n % 10 = 2 and n % 100 != 12,72,92'), to(PluralCategory_FEW_getInstance(), 'n % 10 = 3..4,9 and n % 100 != 10..19,70..79,90..99'), to(PluralCategory_MANY_getInstance(), 'n != 0 and n % 1000000 = 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_33 = [to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_TWO_getInstance(), 'n = 2'), to(PluralCategory_FEW_getInstance(), 'n = 0 or n % 100 = 3..10'), to(PluralCategory_MANY_getInstance(), 'n % 100 = 11..19'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_34 = [to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_TWO_getInstance(), 'n = 2'), to(PluralCategory_FEW_getInstance(), 'n = 3..6'), to(PluralCategory_MANY_getInstance(), 'n = 7..10'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_35 = [to(PluralCategory_ONE_getInstance(), 'v = 0 and i % 10 = 1'), to(PluralCategory_TWO_getInstance(), 'v = 0 and i % 10 = 2'), to(PluralCategory_FEW_getInstance(), 'v = 0 and i % 100 = 0,20,40,60,80'), to(PluralCategory_MANY_getInstance(), 'v != 0'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_36 = [to(PluralCategory_ZERO_getInstance(), 'n = 0'), to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_TWO_getInstance(), 'n % 100 = 2,22,42,62,82 or n % 1000 = 0 and n % 100000 = 1000..20000,40000,60000,80000 or n != 0 and n % 1000000 = 100000'), to(PluralCategory_FEW_getInstance(), 'n % 100 = 3,23,43,63,83'), to(PluralCategory_MANY_getInstance(), 'n != 1 and n % 100 = 1,21,41,61,81'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_37 = [to(PluralCategory_ZERO_getInstance(), 'n = 0'), to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_TWO_getInstance(), 'n = 2'), to(PluralCategory_FEW_getInstance(), 'n % 100 = 3..10'), to(PluralCategory_MANY_getInstance(), 'n % 100 = 11..99'), to(PluralCategory_OTHER_getInstance(), '')];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      cldrPluralRuleLists = [tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp_22, tmp_23, tmp_24, tmp_25, tmp_26, tmp_27, tmp_28, tmp_29, tmp_30, tmp_31, tmp_32, tmp_33, tmp_34, tmp_35, tmp_36, tmp_37, [to(PluralCategory_ZERO_getInstance(), 'n = 0'), to(PluralCategory_ONE_getInstance(), 'n = 1'), to(PluralCategory_TWO_getInstance(), 'n = 2'), to(PluralCategory_FEW_getInstance(), 'n = 3'), to(PluralCategory_MANY_getInstance(), 'n = 6'), to(PluralCategory_OTHER_getInstance(), '')]];
    }
  }
  var static_init_called_1;
  function static_init_1() {
    if (static_init_called_1)
      return Unit_getInstance();
    static_init_called_1 = true;
    PluralCategory_ZERO_instance = new PluralCategory('ZERO', 0);
    PluralCategory_ONE_instance = new PluralCategory('ONE', 1);
    PluralCategory_TWO_instance = new PluralCategory('TWO', 2);
    PluralCategory_FEW_instance = new PluralCategory('FEW', 3);
    PluralCategory_MANY_instance = new PluralCategory('MANY', 4);
    PluralCategory_OTHER_instance = new PluralCategory('OTHER', 5);
    if (Companion_instance_1 == null) {
      Companion_getInstance();
      new Companion_1();
    }
  }
  var PluralCategory_ZERO_instance;
  var PluralCategory_ONE_instance;
  var PluralCategory_TWO_instance;
  var PluralCategory_FEW_instance;
  var PluralCategory_MANY_instance;
  var PluralCategory_OTHER_instance;
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).fromString_g5hge7_k$ = function (name) {
    var tmp0 = get_entries_1();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        if (equals_0(element.get_name_woqyms_k$(), name, true)) {
          tmp$ret$0 = element;
          break $l$block;
        }
      }
      tmp$ret$0 = null;
    }
    return tmp$ret$0;
  };
  var Companion_instance_1;
  function Companion_getInstance_5() {
    static_init_1();
    return Companion_instance_1;
  }
  function values_1() {
    static_init_1();
    return [PluralCategory_ZERO_getInstance(), PluralCategory_ONE_getInstance(), PluralCategory_TWO_getInstance(), PluralCategory_FEW_getInstance(), PluralCategory_MANY_getInstance(), PluralCategory_OTHER_getInstance()];
  }
  function valueOf_1(value) {
    static_init_1();
    switch (value) {
      case 'ZERO':
        return PluralCategory_ZERO_getInstance();
      case 'ONE':
        return PluralCategory_ONE_getInstance();
      case 'TWO':
        return PluralCategory_TWO_getInstance();
      case 'FEW':
        return PluralCategory_FEW_getInstance();
      case 'MANY':
        return PluralCategory_MANY_getInstance();
      case 'OTHER':
        return PluralCategory_OTHER_getInstance();
      default:
        THROW_IAE('No enum constant org.jetbrains.compose.resources.plural.PluralCategory.' + value);
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
  function PluralCategory(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PluralCategory_ZERO_getInstance() {
    static_init_1();
    return PluralCategory_ZERO_instance;
  }
  function PluralCategory_ONE_getInstance() {
    static_init_1();
    return PluralCategory_ONE_instance;
  }
  function PluralCategory_TWO_getInstance() {
    static_init_1();
    return PluralCategory_TWO_instance;
  }
  function PluralCategory_FEW_getInstance() {
    static_init_1();
    return PluralCategory_FEW_instance;
  }
  function PluralCategory_MANY_getInstance() {
    static_init_1();
    return PluralCategory_MANY_instance;
  }
  function PluralCategory_OTHER_getInstance() {
    static_init_1();
    return PluralCategory_OTHER_instance;
  }
  var org_jetbrains_compose_resources_plural_PluralRuleParseException$stable;
  var org_jetbrains_compose_resources_plural_PluralRule_Condition_And$stable;
  var org_jetbrains_compose_resources_plural_PluralRule_Condition_Or$stable;
  var org_jetbrains_compose_resources_plural_PluralRule_Condition_Relation$stable;
  var org_jetbrains_compose_resources_plural_PluralRule$stable;
  var org_jetbrains_compose_resources_plural_PluralRuleList$stable;
  var org_jetbrains_compose_resources_vector_xmldom_MalformedXMLException$stable;
  var org_jetbrains_compose_resources_Intl_Locale$stable;
  function getSystemEnvironment() {
    var locale = new Intl.Locale(window.navigator.language);
    var isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dpi = numberToInt(window.devicePixelRatio * 96);
    var tmp = new LanguageQualifier(locale.language);
    var tmp0_elvis_lhs = locale.script;
    var tmp_0 = new ScriptQualifier(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
    var tmp1_elvis_lhs = locale.region;
    return new ResourceEnvironment(tmp, tmp_0, new RegionQualifier(tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs), Companion_getInstance_3().selectByValue_7mr6mx_k$(isDarkTheme), Companion_getInstance_4().selectByValue_h7gwd6_k$(dpi));
  }
  var org_jetbrains_compose_resources_DefaultJsResourceReader$stable;
  function getPlatformResourceReader() {
    return DefaultJsResourceReader_getInstance();
  }
  function readAsBlob($this, path, $completion) {
    var tmp = new $readAsBlobCOROUTINE$($this, path, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function asByteArray($this, $receiver, $completion) {
    var tmp = new $asByteArrayCOROUTINE$($this, $receiver, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function DefaultJsResourceReader$readAsBlob$slambda($resPath, resultContinuation) {
    this.$resPath_1 = $resPath;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultJsResourceReader$readAsBlob$slambda).invoke_7h2f65_k$ = function (it, $completion) {
    var tmp = this.create_99ct7z_k$(it, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DefaultJsResourceReader$readAsBlob$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_7h2f65_k$((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultJsResourceReader$readAsBlob$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = cancellableFetch(this.$resPath_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.TRY_RESULT0__1 = suspendResult;
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var _unused_var__etf5q3 = this.get_exception_x0n6w6_k$();
              var tmp_1 = this;
              throw new MissingResourceException(this.$resPath_1);
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
  protoOf(DefaultJsResourceReader$readAsBlob$slambda).create_99ct7z_k$ = function (it, completion) {
    var i = new DefaultJsResourceReader$readAsBlob$slambda(this.$resPath_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(DefaultJsResourceReader$readAsBlob$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_99ct7z_k$((!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE(), completion);
  };
  function DefaultJsResourceReader$readAsBlob$slambda_0($resPath, resultContinuation) {
    var i = new DefaultJsResourceReader$readAsBlob$slambda($resPath, resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.invoke_7h2f65_k$(it, $completion);
    }, 1);
  }
  function $readCOROUTINE$(_this__u8e3s4, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.path_1 = path;
  }
  protoOf($readCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = readAsBlob(this._this__u8e3s4__1, this.path_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.set_state_rjd8d0_k$(2);
            suspendResult = asByteArray(this._this__u8e3s4__1, ARGUMENT, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function $readPartCOROUTINE$(_this__u8e3s4, path, offset, size, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.path_1 = path;
    this.offset_1 = offset;
    this.size_1 = size;
  }
  protoOf($readPartCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(1);
            suspendResult = readAsBlob(this._this__u8e3s4__1, this.path_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var part = suspendResult.slice(convertToInt(this.offset_1), convertToInt(add(this.offset_1, this.size_1)));
            this.set_state_rjd8d0_k$(2);
            suspendResult = asByteArray(this._this__u8e3s4__1, part, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function $readAsBlobCOROUTINE$(_this__u8e3s4, path, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.path_1 = path;
  }
  protoOf($readAsBlobCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.resPath0__1 = WebResourcesConfiguration_getInstance().get_getResourcePath_p3mxjf_k$()(this.path_1);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = ResourceWebCache_getInstance();
            suspendResult = tmp_0.load_iyfyfe_k$(this.resPath0__1, DefaultJsResourceReader$readAsBlob$slambda_0(this.resPath0__1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            if (!response.ok) {
              throw new MissingResourceException(this.resPath0__1);
            }

            this.set_state_rjd8d0_k$(2);
            suspendResult = await_0(response.blob(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function $asByteArrayCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this._this__u8e3s4__2 = _this__u8e3s4_0;
  }
  protoOf($asByteArrayCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            var tmp_0 = this._this__u8e3s4__2.arrayBuffer();
            var buffer = tmp_0 instanceof Promise ? tmp_0 : THROW_CCE();
            this.set_state_rjd8d0_k$(1);
            suspendResult = await_0(buffer, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new Int8Array(ARGUMENT);
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
  function DefaultJsResourceReader() {
    DefaultJsResourceReader_instance = this;
  }
  protoOf(DefaultJsResourceReader).read_3sms9f_k$ = function (path, $completion) {
    var tmp = new $readCOROUTINE$(this, path, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DefaultJsResourceReader).readPart_jv4s5i_k$ = function (path, offset, size, $completion) {
    var tmp = new $readPartCOROUTINE$(this, path, offset, size, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DefaultJsResourceReader).getUri_3gtoqs_k$ = function (path) {
    var location = window.location;
    return getResourceUrl(location.origin, location.pathname, path);
  };
  var DefaultJsResourceReader_instance;
  function DefaultJsResourceReader_getInstance() {
    if (DefaultJsResourceReader_instance == null)
      new DefaultJsResourceReader();
    return DefaultJsResourceReader_instance;
  }
  function cancellableFetch(url, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.initCancellability_shqc60_k$();
    var ac = new AbortController();
    var tmp = window.fetch(url, {signal: ac.signal});
    var tmp_0 = cancellableFetch$lambda(cancellable);
    tmp.then(tmp_0, cancellableFetch$lambda_0(cancellable));
    cancellable.invokeOnCancellation_kffkqp_k$(cancellableFetch$lambda_1(ac));
    return cancellable.getResult_fck196_k$();
  }
  function cancellableFetch$lambda($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_2();
      var tmp$ret$1 = _Result___init__impl__xyqfz8(it);
      this_0.resumeWith_dtxwbr_k$(tmp$ret$1);
      return Unit_getInstance();
    };
  }
  function cancellableFetch$lambda_0($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance_2();
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(it));
      this_0.resumeWith_dtxwbr_k$(tmp$ret$1);
      return Unit_getInstance();
    };
  }
  function cancellableFetch$lambda_1($ac) {
    return function (it) {
      $ac.abort();
      return Unit_getInstance();
    };
  }
  var org_jetbrains_compose_resources_vector_xmldom_ElementImpl$stable;
  var org_jetbrains_compose_resources_vector_xmldom_NodeImpl$stable;
  var org_jetbrains_compose_resources_DrawCache$stable;
  function get_defaultFont() {
    _init_properties_FontResources_skiko_kt__g77iad();
    return defaultFont;
  }
  var defaultFont;
  function get_fontCache() {
    _init_properties_FontResources_skiko_kt__g77iad();
    return fontCache;
  }
  var fontCache;
  var properties_initialized_FontResources_skiko_kt_wwtlnx;
  function _init_properties_FontResources_skiko_kt__g77iad() {
    if (!properties_initialized_FontResources_skiko_kt_wwtlnx) {
      properties_initialized_FontResources_skiko_kt_wwtlnx = true;
      defaultFont = SystemFont_init_$Create$('org.jetbrains.compose.resources.defaultFont');
      fontCache = new AsyncCache();
    }
  }
  var org_jetbrains_compose_resources_SvgElement$stable;
  var org_jetbrains_compose_resources_SvgPainter$stable;
  var org_jetbrains_compose_resources_WebResourcesConfiguration$stable;
  function getResourceUrl(windowOrigin, windowPathname, resourcePath) {
    var path = WebResourcesConfiguration_getInstance().getResourcePath_1(resourcePath);
    return startsWith(path, '/') ? windowOrigin + path : startsWith(path, 'http://') || startsWith(path, 'https://') ? path : windowOrigin + windowPathname + path;
  }
  function WebResourcesConfiguration$getResourcePath$lambda(it) {
    return './' + it;
  }
  function WebResourcesConfiguration() {
    WebResourcesConfiguration_instance = this;
    var tmp = this;
    tmp.getResourcePath_1 = WebResourcesConfiguration$getResourcePath$lambda;
  }
  protoOf(WebResourcesConfiguration).set_getResourcePath_5sasn4_k$ = function (_set____db54di) {
    this.getResourcePath_1 = _set____db54di;
  };
  protoOf(WebResourcesConfiguration).get_getResourcePath_p3mxjf_k$ = function () {
    return this.getResourcePath_1;
  };
  protoOf(WebResourcesConfiguration).resourcePathMapping_vnuvms_k$ = function (map) {
    this.getResourcePath_1 = map;
  };
  var WebResourcesConfiguration_instance;
  function WebResourcesConfiguration_getInstance() {
    if (WebResourcesConfiguration_instance == null)
      new WebResourcesConfiguration();
    return WebResourcesConfiguration_instance;
  }
  var org_jetbrains_compose_resources_ResourceWebCache$stable;
  function _get_CACHE_NAME__ydhxdv($this) {
    return $this.CACHE_NAME_1;
  }
  function _get_mutexes__lhp03g($this) {
    return $this.mutexes_1;
  }
  function _get_resetMutex__o8dnob($this) {
    return $this.resetMutex_1;
  }
  function _get_supportsCacheApi__uddvv5($this) {
    var tmp0 = $this.supportsCacheApi$delegate_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('supportsCacheApi', 1, tmp, ResourceWebCache$_get_supportsCacheApi_$ref_d8lbja(), null);
    return tmp0.get_value_j01efc_k$();
  }
  function _set_sessionStarted__xd2rh0($this, _set____db54di) {
    $this.sessionStarted_1 = _set____db54di;
  }
  function _get_sessionStarted__7tzbfk($this) {
    return $this.sessionStarted_1;
  }
  function isNewSession($this) {
    return !$this.sessionStarted_1;
  }
  function ResourceWebCache$supportsCacheApi$delegate$lambda() {
    return supportsCacheApi() && isCacheableProtocol();
  }
  function ResourceWebCache$_get_supportsCacheApi_$ref_d8lbja() {
    return constructCallableReference(function (p0) {
      return _get_supportsCacheApi__uddvv5(p0);
    }, 1, 0, 'org.jetbrains.compose.resources/ResourceWebCache.supportsCacheApi.<get-supportsCacheApi>|<get-supportsCacheApi>(){}[0]');
  }
  function $loadCOROUTINE$(_this__u8e3s4, path, onNoCacheHit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.path_1 = path;
    this.onNoCacheHit_1 = onNoCacheHit;
  }
  protoOf($loadCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(20);
            if (!_get_supportsCacheApi__uddvv5(this._this__u8e3s4__1)) {
              this.set_state_rjd8d0_k$(19);
              suspendResult = this.onNoCacheHit_1(this.path_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

          case 1:
            if (isNewSession(this._this__u8e3s4__1)) {
              this.this1__1 = this._this__u8e3s4__1.resetMutex_1;
              this.owner0__1 = null;
              this.set_state_rjd8d0_k$(2);
              suspendResult = this.this1__1.lock_ugrcvf_k$(this.owner0__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(7);
              continue $sm;
            }

          case 2:
            this.tmp$ret$08__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_fex74n_k$(18);
            if (isNewSession(ResourceWebCache_getInstance())) {
              ResourceWebCache_getInstance().sessionStarted_1 = true;
              this.set_state_rjd8d0_k$(4);
              suspendResult = ResourceWebCache_getInstance().resetCache_jmrqnw_k$(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(5);
              continue $sm;
            }

          case 4:
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            this.tmp$ret$08__1 = Unit_getInstance();
            this.set_exceptionState_fex74n_k$(20);
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            this.tmp$ret$08__1;
            this.set_exceptionState_fex74n_k$(20);
            this.this1__1.unlock_ulcrcl_k$(this.owner0__1);
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 7:
            var tmp0 = this._this__u8e3s4__1.mutexes_1;
            var key = this.path_1;
            var value = tmp0.get_wei43m_k$(key);
            var tmp_0;
            if (value == null) {
              var answer = Mutex();
              tmp0.put_4fpzoq_k$(key, answer);
              tmp_0 = answer;
            } else {
              tmp_0 = value;
            }

            var mutex = tmp_0;
            this.this3__1 = mutex;
            this.owner2__1 = null;
            this.set_state_rjd8d0_k$(8);
            suspendResult = this.this3__1.lock_ugrcvf_k$(this.owner2__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.tmp$ret$24__1 = Unit_getInstance();
            this.set_state_rjd8d0_k$(9);
            continue $sm;
          case 9:
            this.set_exceptionState_fex74n_k$(17);
            this.set_state_rjd8d0_k$(10);
            suspendResult = await_1(window.caches.open('compose_web_resources_cache'), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.cache7__1 = suspendResult;
            this.set_state_rjd8d0_k$(11);
            var cacheName = get_undefined();
            var o = {};
            o['ignoreSearch'] = false;
            o['ignoreMethod'] = false;
            o['ignoreVary'] = false;
            o['cacheName'] = cacheName;
            var tmp_1 = this.cache7__1.match(this.path_1, (!(o == null) ? !(o == null) : false) ? o : THROW_CCE());
            suspendResult = await_1(tmp_1 instanceof Promise ? tmp_1 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            var response = suspendResult;
            var tmp1_elvis_lhs = response == null ? null : response.clone();
            if (tmp1_elvis_lhs == null) {
              this.set_state_rjd8d0_k$(12);
              suspendResult = this.onNoCacheHit_1(this.path_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.WHEN_RESULT5__1 = tmp1_elvis_lhs;
              this.set_state_rjd8d0_k$(15);
              continue $sm;
            }

          case 12:
            this.this6__1 = suspendResult;
            var it = this.this6__1;
            if (it.ok) {
              this.set_state_rjd8d0_k$(13);
              suspendResult = await_1(this.cache7__1.put(this.path_1, it.clone()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_rjd8d0_k$(14);
              continue $sm;
            }

          case 13:
            this.set_state_rjd8d0_k$(14);
            continue $sm;
          case 14:
            this.WHEN_RESULT5__1 = this.this6__1;
            this.set_state_rjd8d0_k$(15);
            continue $sm;
          case 15:
            this.tmp$ret$24__1 = this.WHEN_RESULT5__1;
            this.set_exceptionState_fex74n_k$(20);
            this.set_state_rjd8d0_k$(16);
            continue $sm;
          case 16:
            var tmp_2 = this.tmp$ret$24__1;
            this.set_exceptionState_fex74n_k$(20);
            this.this3__1.unlock_ulcrcl_k$(this.owner2__1);
            ResourceWebCache_getInstance().mutexes_1.remove_gppy8k_k$(this.path_1);
            return tmp_2;
          case 17:
            this.set_exceptionState_fex74n_k$(20);
            var t = this.get_exception_x0n6w6_k$();
            this.this3__1.unlock_ulcrcl_k$(this.owner2__1);
            throw t;
          case 18:
            this.set_exceptionState_fex74n_k$(20);
            var t_0 = this.get_exception_x0n6w6_k$();
            this.this1__1.unlock_ulcrcl_k$(this.owner0__1);
            throw t_0;
          case 19:
            return suspendResult;
          case 20:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 20) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  function $resetCacheCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($resetCacheCOROUTINE$).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            suspendResult = await_1(window.caches.delete('compose_web_resources_cache'), this);
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
  function ResourceWebCache() {
    ResourceWebCache_instance = this;
    this.CACHE_NAME_1 = 'compose_web_resources_cache';
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.mutexes_1 = LinkedHashMap_init_$Create$();
    this.resetMutex_1 = Mutex();
    var tmp_0 = this;
    tmp_0.supportsCacheApi$delegate_1 = lazy(ResourceWebCache$supportsCacheApi$delegate$lambda);
    this.sessionStarted_1 = false;
  }
  protoOf(ResourceWebCache).load_iyfyfe_k$ = function (path, onNoCacheHit, $completion) {
    var tmp = new $loadCOROUTINE$(this, path, onNoCacheHit, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ResourceWebCache).resetCache_jmrqnw_k$ = function ($completion) {
    var tmp = new $resetCacheCOROUTINE$(this, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  var ResourceWebCache_instance;
  function ResourceWebCache_getInstance() {
    if (ResourceWebCache_instance == null)
      new ResourceWebCache();
    return ResourceWebCache_instance;
  }
  function supportsCacheApi() {
    return Boolean(window.caches);
  }
  function isCacheableProtocol() {
    return startsWith(window.location.protocol, 'http');
  }
  function await_1(_this__u8e3s4, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.initCancellability_shqc60_k$();
    var tmp = await$lambda(cancellable);
    _this__u8e3s4.then(tmp, await$lambda_0(cancellable));
    return cancellable.getResult_fck196_k$();
  }
  function await$lambda($continuation) {
    return function (it) {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance_2();
      var tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      $continuation.resumeWith_dtxwbr_k$(tmp$ret$0);
      return null;
    };
  }
  function await$lambda_0($continuation) {
    return function (it) {
      // Inline function 'kotlin.js.asJsException' call
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance_2();
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(it));
      this_0.resumeWith_dtxwbr_k$(tmp$ret$2);
      return null;
    };
  }
  //region block: init
  org_jetbrains_compose_resources_FontResource$stable = 0;
  org_jetbrains_compose_resources_PluralStringResource$stable = 0;
  org_jetbrains_compose_resources_LanguageQualifier$stable = 0;
  org_jetbrains_compose_resources_RegionQualifier$stable = 0;
  org_jetbrains_compose_resources_ScriptQualifier$stable = 0;
  org_jetbrains_compose_resources_Resource$stable = 0;
  org_jetbrains_compose_resources_ResourceItem$stable = 0;
  org_jetbrains_compose_resources_AsyncCache$stable = 8;
  org_jetbrains_compose_resources_ResourceCaches$stable = 8;
  org_jetbrains_compose_resources_StringArrayResource$stable = 0;
  org_jetbrains_compose_resources_StringResource$stable = 0;
  org_jetbrains_compose_resources_plural_PluralRuleParseException$stable = 8;
  org_jetbrains_compose_resources_plural_PluralRule_Condition_And$stable = 0;
  org_jetbrains_compose_resources_plural_PluralRule_Condition_Or$stable = 0;
  org_jetbrains_compose_resources_plural_PluralRule_Condition_Relation$stable = 8;
  org_jetbrains_compose_resources_plural_PluralRule$stable = 0;
  org_jetbrains_compose_resources_plural_PluralRuleList$stable = 8;
  org_jetbrains_compose_resources_vector_xmldom_MalformedXMLException$stable = 8;
  org_jetbrains_compose_resources_Intl_Locale$stable = 0;
  org_jetbrains_compose_resources_DefaultJsResourceReader$stable = 0;
  org_jetbrains_compose_resources_vector_xmldom_ElementImpl$stable = 8;
  org_jetbrains_compose_resources_vector_xmldom_NodeImpl$stable = 8;
  org_jetbrains_compose_resources_DrawCache$stable = 8;
  org_jetbrains_compose_resources_SvgElement$stable = 8;
  org_jetbrains_compose_resources_SvgPainter$stable = 8;
  org_jetbrains_compose_resources_WebResourcesConfiguration$stable = 8;
  org_jetbrains_compose_resources_ResourceWebCache$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = readResourceBytes;
  _.$_$.b = getResourceUri;
  //endregion
  return _;
}));

//# sourceMappingURL=components-resources-library.js.map
