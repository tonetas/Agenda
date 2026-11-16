package com.notas.agenda.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Typography
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.graphics.Color

enum class NotasAccentOption(
    val label: String,
    val primary: Color,
    val darkAccentText: Color,
    val softLight: Color,
    val softDark: Color,
) {
    VIOLET(
        label = "Violeta Notas",
        primary = Color(0xFF6554D9),
        darkAccentText = Color(0xFFB7AAFF),
        softLight = Color(0xFFEEEAFB),
        softDark = Color(0xFF34334F),
    ),
    GREEN(
        label = "Verde Esmeralda",
        primary = Color(0xFF187F73),
        darkAccentText = Color(0xFF93E3C3),
        softLight = Color(0xFFE4F5EF),
        softDark = Color(0xFF213F3B),
    ),
    AMBER(
        label = "Ámbar Cálido",
        primary = Color(0xFFC67842),
        darkAccentText = Color(0xFFF3B778),
        softLight = Color(0xFFFFF0DD),
        softDark = Color(0xFF3A2D1D),
    ),
    PINK(
        label = "Magenta Notas",
        primary = Color(0xFFBD4B88),
        darkAccentText = Color(0xFFF2A7CE),
        softLight = Color(0xFFFCEBF3),
        softDark = Color(0xFF3B2436),
    ),
}

@Immutable
data class NotasColors(
    val isDark: Boolean,
    val accentOption: NotasAccentOption,
    val background: Color,
    val surface: Color,
    val surfaceMuted: Color,
    val border: Color,
    val textPrimary: Color,
    val textSecondary: Color,
    val textMuted: Color,
    val accentButton: Color,
    val accentContent: Color,
    val accentContainer: Color,
    val accentSelectedSegment: Color,
    val successContainer: Color,
    val successContent: Color,
    val warningContainer: Color,
    val warningContent: Color,
    val checkboxBorder: Color,
    val radioBorder: Color,
    val onAccentButton: Color,
    val outgoingSubtext: Color,
)

fun notasPalette(isDark: Boolean, accentOption: NotasAccentOption): NotasColors {
    return if (isDark) {
        NotasColors(
            isDark = true,
            accentOption = accentOption,
            background = Color(0xFF11182A),
            surface = Color(0xFF1C253A),
            surfaceMuted = Color(0xFF182135),
            border = Color(0xFF2A354E),
            textPrimary = Color(0xFFF0F3FC),
            textSecondary = Color(0xFFA2ACC4),
            textMuted = Color(0xFF6B7692),
            accentButton = accentOption.primary,
            accentContent = accentOption.darkAccentText,
            accentContainer = accentOption.softDark,
            accentSelectedSegment = accentOption.softDark,
            successContainer = Color(0xFF213F3B),
            successContent = Color(0xFF93E3C3),
            warningContainer = Color(0xFF3A2D1D),
            warningContent = Color(0xFFF3B778),
            checkboxBorder = Color(0xFF475470),
            radioBorder = Color(0xFF475470),
            onAccentButton = Color.White,
            outgoingSubtext = Color(0xFFE4DFFE),
        )
    } else {
        NotasColors(
            isDark = false,
            accentOption = accentOption,
            background = Color(0xFFF7F8FC),
            surface = Color.White,
            surfaceMuted = Color(0xFFEDEFF6),
            border = Color(0xFFE5E8F1),
            textPrimary = Color(0xFF17213A),
            textSecondary = Color(0xFF69738B),
            textMuted = Color(0xFFA6AEC0),
            accentButton = accentOption.primary,
            accentContent = accentOption.primary,
            accentContainer = accentOption.softLight,
            accentSelectedSegment = Color.White,
            successContainer = Color(0xFFE4F5EF),
            successContent = Color(0xFF16725F),
            warningContainer = Color(0xFFFFF0DD),
            warningContent = Color(0xFF9B5C1A),
            checkboxBorder = Color(0xFFBCC4D5),
            radioBorder = Color(0xFFB5BDD0),
            onAccentButton = Color.White,
            outgoingSubtext = Color(0xFFE4DFFE),
        )
    }
}

val LocalNotasColors = staticCompositionLocalOf {
    notasPalette(isDark = false, accentOption = NotasAccentOption.VIOLET)
}

object NotasTheme {
    val colors: NotasColors
        @Composable
        get() = LocalNotasColors.current
}

@Composable
fun NotasTheme(
    isDark: Boolean,
    accentOption: NotasAccentOption,
    content: @Composable () -> Unit,
) {
    val palette = notasPalette(isDark = isDark, accentOption = accentOption)
    val colorScheme = if (isDark) {
        darkColorScheme(
            primary = palette.accentButton,
            onPrimary = palette.onAccentButton,
            background = palette.background,
            onBackground = palette.textPrimary,
            surface = palette.surface,
            onSurface = palette.textPrimary,
            outline = palette.border,
        )
    } else {
        lightColorScheme(
            primary = palette.accentButton,
            onPrimary = palette.onAccentButton,
            background = palette.background,
            onBackground = palette.textPrimary,
            surface = palette.surface,
            onSurface = palette.textPrimary,
            outline = palette.border,
        )
    }

    CompositionLocalProvider(LocalNotasColors provides palette) {
        MaterialTheme(
            colorScheme = colorScheme,
            typography = Typography(),
            content = content,
        )
    }
}
