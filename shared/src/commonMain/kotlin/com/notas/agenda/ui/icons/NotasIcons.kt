package com.notas.agenda.ui.icons

import androidx.compose.foundation.Canvas
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.graphics.StrokeJoin
import androidx.compose.ui.graphics.drawscope.scale
import androidx.compose.ui.graphics.drawscope.translate
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.graphics.vector.path
import androidx.compose.ui.unit.dp

/**
 * Símbolo oficial de Notas (interlocking_ribbon.svg) con cinta diagonal turquesa.
 */
@Composable
fun NotasRibbonLogo(
    modifier: Modifier = Modifier,
    primaryColor: Color = Color(0xFF6554D9),
    ribbonColor: Color = Color(0xFF72DCC5),
) {
    Canvas(modifier = modifier) {
        // En Figma: contenedor 56x56 con inset 15% vertical / 16.25% horizontal -> SVG 37.8 x 39.2
        val targetW = size.width * (1f - 2f * 0.1625f)
        val targetH = size.height * (1f - 2f * 0.15f)
        val offsetX = size.width * 0.1625f
        val offsetY = size.height * 0.15f
        val scaleX = targetW / 37.8f
        val scaleY = targetH / 39.2f

        val mainNPath = Path().apply {
            moveTo(0f, 33.6f)
            lineTo(0f, 5.6f)
            cubicTo(0f, 2.5074f, 2.5074f, 0f, 5.6f, 0f)
            cubicTo(7.4599f, 0f, 9.198f, 0.924f, 10.2396f, 2.464f)
            lineTo(28f, 28.728f)
            lineTo(28f, 4.9f)
            cubicTo(28f, 2.1938f, 30.1938f, 0f, 32.9f, 0f)
            cubicTo(35.6062f, 0f, 37.8f, 2.1938f, 37.8f, 4.9f)
            lineTo(37.8f, 33.6f)
            cubicTo(37.8f, 36.6926f, 35.2926f, 39.2f, 32.2f, 39.2f)
            cubicTo(30.3401f, 39.2f, 28.602f, 38.276f, 27.5604f, 36.736f)
            lineTo(9.8f, 10.472f)
            lineTo(9.8f, 34.3f)
            cubicTo(9.8f, 37.0062f, 7.6062f, 39.2f, 4.9f, 39.2f)
            cubicTo(2.1938f, 39.2f, 0f, 37.0062f, 0f, 34.3f)
            close()
        }

        val ribbonPath = Path().apply {
            moveTo(13.886f, 16.5144f)
            lineTo(21.8141f, 11.1496f)
            lineTo(25.3421f, 16.3674f)
            lineTo(17.4139f, 21.7322f)
            close()
        }

        translate(left = offsetX, top = offsetY) {
            scale(scaleX = scaleX, scaleY = scaleY, pivot = androidx.compose.ui.geometry.Offset.Zero) {
                drawPath(path = mainNPath, color = primaryColor)
                drawPath(path = ribbonPath, color = ribbonColor)
            }
        }
    }
}

object NotasIcons {
    val Bell: ImageVector by lazy {
        ImageVector.Builder(
            name = "Bell",
            defaultWidth = 22.dp,
            defaultHeight = 22.dp,
            viewportWidth = 22f,
            viewportHeight = 22f,
        ).apply {
            path(
                stroke = SolidColor(Color.Black),
                strokeLineWidth = 1.7f,
                strokeLineCap = StrokeCap.Round,
                strokeLineJoin = StrokeJoin.Round,
            ) {
                moveTo(9.16667f, 18.3333f)
                horizontalLineTo(12.8333f)
                moveTo(4.58333f, 15.5833f)
                horizontalLineTo(17.4167f)
                lineTo(15.5833f, 12.8333f)
                verticalLineTo(8.25f)
                curveTo(15.5833f, 7.03442f, 15.1004f, 5.86864f, 14.2409f, 5.00909f)
                curveTo(13.3814f, 4.14955f, 12.2156f, 3.66667f, 11f, 3.66667f)
                curveTo(9.78442f, 3.66667f, 8.61864f, 4.14955f, 7.75909f, 5.00909f)
                curveTo(6.89955f, 5.86864f, 6.41667f, 7.03442f, 6.41667f, 8.25f)
                verticalLineTo(12.8333f)
                lineTo(4.58333f, 15.5833f)
                close()
            }
        }.build()
    }

    val Calendar: ImageVector by lazy {
        ImageVector.Builder(
            name = "Calendar",
            defaultWidth = 22.dp,
            defaultHeight = 22.dp,
            viewportWidth = 22f,
            viewportHeight = 22f,
        ).apply {
            path(
                stroke = SolidColor(Color.Black),
                strokeLineWidth = 1.7f,
                strokeLineCap = StrokeCap.Round,
                strokeLineJoin = StrokeJoin.Round,
            ) {
                moveTo(5.5f, 4.58333f)
                horizontalLineTo(16.5f)
                curveTo(18.0188f, 4.58333f, 19.25f, 5.81455f, 19.25f, 7.33333f)
                verticalLineTo(16.5f)
                curveTo(19.25f, 18.0188f, 18.0188f, 19.25f, 16.5f, 19.25f)
                horizontalLineTo(5.5f)
                curveTo(3.98122f, 19.25f, 2.75f, 18.0188f, 2.75f, 16.5f)
                verticalLineTo(7.33333f)
                curveTo(2.75f, 5.81455f, 3.98122f, 4.58333f, 5.5f, 4.58333f)
                close()
            }
            path(
                stroke = SolidColor(Color.Black),
                strokeLineWidth = 1.7f,
                strokeLineCap = StrokeCap.Round,
                strokeLineJoin = StrokeJoin.Round,
            ) {
                moveTo(6.41667f, 2.75f)
                verticalLineTo(6.41667f)
                moveTo(15.5833f, 2.75f)
                verticalLineTo(6.41667f)
                moveTo(2.75f, 10.0833f)
                horizontalLineTo(19.25f)
                moveTo(7.33333f, 13.75f)
                horizontalLineTo(9.16667f)
                moveTo(12.8333f, 13.75f)
                horizontalLineTo(14.6667f)
            }
        }.build()
    }

    val Chat: ImageVector by lazy {
        ImageVector.Builder(
            name = "Chat",
            defaultWidth = 22.dp,
            defaultHeight = 22.dp,
            viewportWidth = 22f,
            viewportHeight = 22f,
        ).apply {
            path(
                stroke = SolidColor(Color.Black),
                strokeLineWidth = 1.7f,
                strokeLineCap = StrokeCap.Round,
                strokeLineJoin = StrokeJoin.Round,
            ) {
                moveTo(19.25f, 10.0833f)
                curveTo(19.25f, 12.0283f, 18.4774f, 13.8935f, 17.1021f, 15.2688f)
                curveTo(15.7269f, 16.644f, 13.8616f, 17.4167f, 11.9167f, 17.4167f)
                horizontalLineTo(6.41667f)
                lineTo(2.75f, 20.1667f)
                verticalLineTo(6.41667f)
                curveTo(2.75f, 5.44421f, 3.13631f, 4.51157f, 3.82394f, 3.82394f)
                curveTo(4.51158f, 3.13631f, 5.44421f, 2.75f, 6.41667f, 2.75f)
                horizontalLineTo(11.9167f)
                curveTo(13.8616f, 2.75f, 15.7269f, 3.52262f, 17.1021f, 4.89788f)
                curveTo(18.4774f, 6.27315f, 19.25f, 8.13841f, 19.25f, 10.0833f)
                close()
            }
            path(
                stroke = SolidColor(Color.Black),
                strokeLineWidth = 1.7f,
                strokeLineCap = StrokeCap.Round,
                strokeLineJoin = StrokeJoin.Round,
            ) {
                moveTo(6.41667f, 7.33333f)
                horizontalLineTo(14.6667f)
                moveTo(6.41667f, 11f)
                horizontalLineTo(11.9167f)
            }
        }.build()
    }

    val Settings: ImageVector by lazy {
        ImageVector.Builder(
            name = "Settings",
            defaultWidth = 22.dp,
            defaultHeight = 22.dp,
            viewportWidth = 22f,
            viewportHeight = 22f,
        ).apply {
            path(
                stroke = SolidColor(Color.Black),
                strokeLineWidth = 1.7f,
                strokeLineCap = StrokeCap.Round,
                strokeLineJoin = StrokeJoin.Round,
            ) {
                moveTo(8.25f, 2.75f)
                horizontalLineTo(13.75f)
                lineTo(14.6667f, 5.5f)
                lineTo(17.4167f, 6.41667f)
                lineTo(19.25f, 11f)
                lineTo(17.4167f, 15.5833f)
                lineTo(14.6667f, 16.5f)
                lineTo(13.75f, 19.25f)
                horizontalLineTo(8.25f)
                lineTo(7.33333f, 16.5f)
                lineTo(4.58333f, 15.5833f)
                lineTo(2.75f, 11f)
                lineTo(4.58333f, 6.41667f)
                lineTo(7.33333f, 5.5f)
                lineTo(8.25f, 2.75f)
                close()
            }
            path(
                stroke = SolidColor(Color.Black),
                strokeLineWidth = 1.7f,
                strokeLineCap = StrokeCap.Round,
                strokeLineJoin = StrokeJoin.Round,
            ) {
                moveTo(13.75f, 11f)
                curveTo(13.75f, 12.5188f, 12.5188f, 13.75f, 11f, 13.75f)
                curveTo(9.48122f, 13.75f, 8.25f, 12.5188f, 8.25f, 11f)
                curveTo(8.25f, 9.48122f, 9.48122f, 8.25f, 11f, 8.25f)
                curveTo(12.5188f, 8.25f, 13.75f, 9.48122f, 13.75f, 11f)
                close()
            }
        }.build()
    }

    val Close: ImageVector by lazy {
        ImageVector.Builder(
            name = "Close",
            defaultWidth = 22.dp,
            defaultHeight = 22.dp,
            viewportWidth = 22f,
            viewportHeight = 22f,
        ).apply {
            path(
                stroke = SolidColor(Color.Black),
                strokeLineWidth = 1.7f,
                strokeLineCap = StrokeCap.Round,
                strokeLineJoin = StrokeJoin.Round,
            ) {
                moveTo(5.5f, 5.5f)
                lineTo(16.5f, 16.5f)
                moveTo(16.5f, 5.5f)
                lineTo(5.5f, 16.5f)
            }
        }.build()
    }

    val Plus: ImageVector by lazy {
        ImageVector.Builder(
            name = "Plus",
            defaultWidth = 22.dp,
            defaultHeight = 22.dp,
            viewportWidth = 22f,
            viewportHeight = 22f,
        ).apply {
            path(
                stroke = SolidColor(Color.Black),
                strokeLineWidth = 1.7f,
                strokeLineCap = StrokeCap.Round,
                strokeLineJoin = StrokeJoin.Round,
            ) {
                moveTo(11f, 4.58333f)
                verticalLineTo(17.4167f)
                moveTo(4.58333f, 11f)
                horizontalLineTo(17.4167f)
            }
        }.build()
    }

    val Search: ImageVector by lazy {
        ImageVector.Builder(
            name = "Search",
            defaultWidth = 22.dp,
            defaultHeight = 22.dp,
            viewportWidth = 22f,
            viewportHeight = 22f,
        ).apply {
            path(
                stroke = SolidColor(Color.Black),
                strokeLineWidth = 1.7f,
                strokeLineCap = StrokeCap.Round,
                strokeLineJoin = StrokeJoin.Round,
            ) {
                moveTo(14.6667f, 9.16667f)
                curveTo(14.6667f, 12.2042f, 12.2042f, 14.6667f, 9.16667f, 14.6667f)
                curveTo(6.1291f, 14.6667f, 3.66667f, 12.2042f, 3.66667f, 9.16667f)
                curveTo(3.66667f, 6.1291f, 6.1291f, 3.66667f, 9.16667f, 3.66667f)
                curveTo(12.2042f, 3.66667f, 14.6667f, 6.1291f, 14.6667f, 9.16667f)
                close()
            }
            path(
                stroke = SolidColor(Color.Black),
                strokeLineWidth = 1.7f,
                strokeLineCap = StrokeCap.Round,
                strokeLineJoin = StrokeJoin.Round,
            ) {
                moveTo(13.75f, 13.75f)
                lineTo(18.3333f, 18.3333f)
            }
        }.build()
    }

    val ChevronRight: ImageVector by lazy {
        ImageVector.Builder(
            name = "ChevronRight",
            defaultWidth = 22.dp,
            defaultHeight = 22.dp,
            viewportWidth = 22f,
            viewportHeight = 22f,
        ).apply {
            path(
                stroke = SolidColor(Color.Black),
                strokeLineWidth = 1.7f,
                strokeLineCap = StrokeCap.Round,
                strokeLineJoin = StrokeJoin.Round,
            ) {
                moveTo(8.25f, 4.58333f)
                lineTo(14.6667f, 11f)
                lineTo(8.25f, 17.4167f)
            }
        }.build()
    }

    val Lock: ImageVector by lazy {
        ImageVector.Builder(
            name = "Lock",
            defaultWidth = 22.dp,
            defaultHeight = 22.dp,
            viewportWidth = 22f,
            viewportHeight = 22f,
        ).apply {
            path(
                stroke = SolidColor(Color.Black),
                strokeLineWidth = 1.7f,
                strokeLineCap = StrokeCap.Round,
                strokeLineJoin = StrokeJoin.Round,
            ) {
                moveTo(6.41667f, 9.16667f)
                horizontalLineTo(15.5833f)
                curveTo(16.5959f, 9.16667f, 17.4167f, 9.98748f, 17.4167f, 11f)
                verticalLineTo(17.4167f)
                curveTo(17.4167f, 18.4292f, 16.5959f, 19.25f, 15.5833f, 19.25f)
                horizontalLineTo(6.41667f)
                curveTo(5.40414f, 19.25f, 4.58333f, 18.4292f, 4.58333f, 17.4167f)
                verticalLineTo(11f)
                curveTo(4.58333f, 9.98748f, 5.40414f, 9.16667f, 6.41667f, 9.16667f)
                close()
            }
            path(
                stroke = SolidColor(Color.Black),
                strokeLineWidth = 1.7f,
                strokeLineCap = StrokeCap.Round,
                strokeLineJoin = StrokeJoin.Round,
            ) {
                moveTo(7.33333f, 9.16667f)
                verticalLineTo(6.41667f)
                curveTo(7.33333f, 5.44421f, 7.71964f, 4.51157f, 8.40728f, 3.82394f)
                curveTo(9.09491f, 3.13631f, 10.0275f, 2.75f, 11f, 2.75f)
                curveTo(11.9725f, 2.75f, 12.9051f, 3.13631f, 13.5927f, 3.82394f)
                curveTo(14.2804f, 4.51157f, 14.6667f, 5.44421f, 14.6667f, 6.41667f)
                verticalLineTo(9.16667f)
                moveTo(11f, 13.75f)
                verticalLineTo(15.5833f)
            }
        }.build()
    }

    val Sound: ImageVector by lazy {
        ImageVector.Builder(
            name = "Sound",
            defaultWidth = 24.dp,
            defaultHeight = 24.dp,
            viewportWidth = 24f,
            viewportHeight = 24f,
        ).apply {
            path(
                stroke = SolidColor(Color.Black),
                strokeLineWidth = 1.7f,
                strokeLineCap = StrokeCap.Round,
                strokeLineJoin = StrokeJoin.Round,
            ) {
                moveTo(16f, 8f)
                curveTo(16.9839f, 9.10004f, 17.5279f, 10.5241f, 17.5279f, 12f)
                curveTo(17.5279f, 13.4759f, 16.9839f, 14.9f, 16f, 16f)
                moveTo(19f, 5f)
                curveTo(20.8323f, 6.86929f, 21.8586f, 9.38247f, 21.8586f, 12f)
                curveTo(21.8586f, 14.6175f, 20.8323f, 17.1307f, 19f, 19f)
                moveTo(4f, 9f)
                horizontalLineTo(8f)
                lineTo(13f, 5f)
                verticalLineTo(19f)
                lineTo(8f, 15f)
                horizontalLineTo(4f)
                verticalLineTo(9f)
                close()
            }
        }.build()
    }

    val Play: ImageVector by lazy {
        ImageVector.Builder(
            name = "Play",
            defaultWidth = 22.dp,
            defaultHeight = 22.dp,
            viewportWidth = 22f,
            viewportHeight = 22f,
        ).apply {
            path(
                stroke = SolidColor(Color.Black),
                strokeLineWidth = 1.7f,
                strokeLineCap = StrokeCap.Round,
                strokeLineJoin = StrokeJoin.Round,
            ) {
                moveTo(8.25f, 4.58333f)
                lineTo(17.4167f, 11f)
                lineTo(8.25f, 17.4167f)
                verticalLineTo(4.58333f)
                close()
            }
        }.build()
    }

    val Send: ImageVector by lazy {
        ImageVector.Builder(
            name = "Send",
            defaultWidth = 22.dp,
            defaultHeight = 22.dp,
            viewportWidth = 22f,
            viewportHeight = 22f,
        ).apply {
            path(
                stroke = SolidColor(Color.Black),
                strokeLineWidth = 1.7f,
                strokeLineCap = StrokeCap.Round,
                strokeLineJoin = StrokeJoin.Round,
            ) {
                moveTo(6.41667f, 11f)
                lineTo(2.75f, 19.25f)
                lineTo(19.25f, 11f)
                lineTo(2.75f, 2.75f)
                lineTo(6.41667f, 11f)
                close()
                moveTo(19.25f, 11f)
                horizontalLineTo(6.41667f)
            }
        }.build()
    }
}
