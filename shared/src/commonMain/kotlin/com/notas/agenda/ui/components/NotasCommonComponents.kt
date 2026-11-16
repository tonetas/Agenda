package com.notas.agenda.ui.components

import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.notas.agenda.model.AppointmentCategory
import com.notas.agenda.model.NotasScreen
import com.notas.agenda.model.NotasTab
import com.notas.agenda.theme.NotasTheme
import com.notas.agenda.ui.icons.NotasIcons

@Composable
fun categoryColors(category: AppointmentCategory): Pair<Color, Color> {
    val colors = NotasTheme.colors
    return when (category) {
        AppointmentCategory.PRIMARY -> colors.accentContainer to colors.accentContent
        AppointmentCategory.GREEN -> colors.successContainer to colors.successContent
        AppointmentCategory.AMBER -> colors.warningContainer to colors.warningContent
    }
}

@Composable
fun NotasTopStatusBar(modifier: Modifier = Modifier) {
    val colors = NotasTheme.colors
    Row(
        modifier = modifier
            .fillMaxWidth()
            .height(36.dp)
            .padding(horizontal = 24.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Text(
            text = "9:41",
            color = colors.textPrimary,
            fontSize = 13.sp,
            fontWeight = FontWeight.SemiBold,
        )
        Row(
            verticalAlignment = Alignment.Bottom,
            horizontalArrangement = Arrangement.spacedBy(2.dp),
        ) {
            listOf(4.dp, 6.dp, 8.dp, 10.dp).forEach { barHeight ->
                Box(
                    modifier = Modifier
                        .width(2.dp)
                        .height(barHeight)
                        .clip(RoundedCornerShape(1.dp))
                        .background(colors.textPrimary)
                )
            }
            Spacer(modifier = Modifier.width(6.dp))
            Row(verticalAlignment = Alignment.CenterVertically) {
                Box(
                    modifier = Modifier
                        .size(width = 23.dp, height = 11.dp)
                        .border(1.dp, colors.textPrimary, RoundedCornerShape(3.dp))
                        .padding(2.dp),
                ) {
                    Box(
                        modifier = Modifier
                            .size(width = 17.dp, height = 7.dp)
                            .clip(RoundedCornerShape(1.dp))
                            .background(colors.textPrimary)
                    )
                }
                Spacer(modifier = Modifier.width(1.dp))
                Box(
                    modifier = Modifier
                        .size(width = 2.dp, height = 5.dp)
                        .clip(RoundedCornerShape(1.dp))
                        .background(colors.textPrimary)
                )
            }
        }
    }
}

@Composable
fun NotasHeader(
    eyebrow: String,
    title: String,
    subtitle: String,
    actionIcon: ImageVector? = null,
    actionTint: Color? = null,
    onActionClick: (() -> Unit)? = null,
    backText: String? = null,
    onBackClick: (() -> Unit)? = null,
    modifier: Modifier = Modifier,
) {
    val colors = NotasTheme.colors
    Row(
        modifier = modifier
            .fillMaxWidth()
            .padding(horizontal = 24.dp, vertical = 6.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.Top,
    ) {
        Column(modifier = Modifier.weight(1f)) {
            Row(
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(10.dp),
            ) {
                Text(
                    text = eyebrow,
                    color = colors.accentContent,
                    fontSize = 10.sp,
                    fontWeight = FontWeight.Bold,
                    letterSpacing = 1.8.sp,
                )
                if (backText != null && onBackClick != null) {
                    Text(
                        text = "‹ $backText",
                        color = colors.textSecondary,
                        fontSize = 11.sp,
                        fontWeight = FontWeight.Medium,
                        modifier = Modifier
                            .clip(RoundedCornerShape(8.dp))
                            .clickable(onClick = onBackClick)
                            .padding(horizontal = 6.dp, vertical = 2.dp),
                    )
                }
            }
            Spacer(modifier = Modifier.height(6.dp))
            Text(
                text = title,
                color = colors.textPrimary,
                fontSize = 28.sp,
                fontWeight = FontWeight.SemiBold,
                lineHeight = 32.sp,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
            if (subtitle.isNotEmpty()) {
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = subtitle,
                    color = colors.textSecondary,
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Normal,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis,
                )
            }
        }
        if (actionIcon != null && onActionClick != null) {
            Spacer(modifier = Modifier.width(12.dp))
            Box(
                modifier = Modifier
                    .padding(top = 14.dp)
                    .size(44.dp)
                    .clip(RoundedCornerShape(14.dp))
                    .background(colors.surface)
                    .border(
                        width = if (colors.isDark) 1.dp else 0.5.dp,
                        color = colors.border,
                        shape = RoundedCornerShape(14.dp),
                    )
                    .clickable(onClick = onActionClick),
                contentAlignment = Alignment.Center,
            ) {
                Icon(
                    imageVector = actionIcon,
                    contentDescription = null,
                    tint = actionTint ?: colors.textPrimary,
                    modifier = Modifier.size(22.dp),
                )
            }
        }
    }
}

@Composable
fun NotasSegmentedControl(
    options: List<String>,
    selectedIndex: Int,
    onSelect: (Int) -> Unit,
    height: Dp = 44.dp,
    cornerRadius: Dp = 14.dp,
    modifier: Modifier = Modifier,
) {
    val colors = NotasTheme.colors
    Row(
        modifier = modifier
            .fillMaxWidth()
            .height(height)
            .clip(RoundedCornerShape(cornerRadius))
            .background(colors.surfaceMuted)
            .padding(4.dp),
        horizontalArrangement = Arrangement.spacedBy(4.dp),
    ) {
        options.forEachIndexed { index, label ->
            val selected = index == selectedIndex
            val bgColor by animateColorAsState(
                if (selected) colors.accentSelectedSegment else Color.Transparent
            )
            val textColor by animateColorAsState(
                if (selected) colors.accentContent else colors.textSecondary
            )
            Box(
                modifier = Modifier
                    .weight(1f)
                    .height(height - 8.dp)
                    .clip(RoundedCornerShape((cornerRadius - 3.dp).coerceAtLeast(8.dp)))
                    .background(bgColor)
                    .clickable { onSelect(index) },
                contentAlignment = Alignment.Center,
            ) {
                Text(
                    text = label,
                    color = textColor,
                    fontSize = if (height >= 50.dp) 13.sp else 12.sp,
                    fontWeight = FontWeight.SemiBold,
                )
            }
        }
    }
}

@Composable
fun NotasInputField(
    label: String,
    value: String,
    onValueChange: (String) -> Unit,
    placeholder: String = "",
    isPassword: Boolean = false,
    passwordVisible: Boolean = false,
    onTogglePasswordVisibility: (() -> Unit)? = null,
    singleLine: Boolean = true,
    minHeight: Dp = 52.dp,
    cornerRadius: Dp = 16.dp,
    modifier: Modifier = Modifier,
) {
    val colors = NotasTheme.colors
    Column(modifier = modifier.fillMaxWidth()) {
        Text(
            text = label,
            color = colors.textPrimary,
            fontSize = 12.sp,
            fontWeight = FontWeight.Medium,
        )
        Spacer(modifier = Modifier.height(8.dp))
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .heightIn(min = minHeight)
                .clip(RoundedCornerShape(cornerRadius))
                .background(colors.surface)
                .border(1.dp, colors.border, RoundedCornerShape(cornerRadius))
                .padding(horizontal = 15.dp, vertical = 14.dp),
            verticalAlignment = if (singleLine) Alignment.CenterVertically else Alignment.Top,
        ) {
            Box(modifier = Modifier.weight(1f)) {
                if (value.isEmpty()) {
                    Text(
                        text = placeholder,
                        color = colors.textSecondary,
                        fontSize = 13.sp,
                    )
                }
                BasicTextField(
                    value = value,
                    onValueChange = onValueChange,
                    singleLine = singleLine,
                    textStyle = TextStyle(
                        color = colors.textPrimary,
                        fontSize = 13.sp,
                        fontWeight = FontWeight.Normal,
                    ),
                    cursorBrush = SolidColor(colors.accentButton),
                    visualTransformation = if (isPassword && !passwordVisible) {
                        PasswordVisualTransformation(mask = '•')
                    } else {
                        VisualTransformation.None
                    },
                    modifier = Modifier.fillMaxWidth(),
                )
            }
            if (isPassword && onTogglePasswordVisibility != null) {
                Spacer(modifier = Modifier.width(8.dp))
                Text(
                    text = if (passwordVisible) "Ocultar" else "Ver",
                    color = colors.accentContent,
                    fontSize = 11.sp,
                    fontWeight = FontWeight.SemiBold,
                    modifier = Modifier
                        .clip(RoundedCornerShape(8.dp))
                        .clickable(onClick = onTogglePasswordVisibility)
                        .padding(horizontal = 6.dp, vertical = 2.dp),
                )
            }
        }
    }
}

@Composable
fun NotasPrimaryButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    height: Dp = 50.dp,
    cornerRadius: Dp = 14.dp,
) {
    val colors = NotasTheme.colors
    Box(
        modifier = modifier
            .fillMaxWidth()
            .height(height)
            .clip(RoundedCornerShape(cornerRadius))
            .background(colors.accentButton)
            .clickable(onClick = onClick),
        contentAlignment = Alignment.Center,
    ) {
        Text(
            text = text,
            color = colors.onAccentButton,
            fontSize = 14.sp,
            fontWeight = FontWeight.SemiBold,
        )
    }
}

@Composable
fun NotasSoftButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    height: Dp = 44.dp,
    cornerRadius: Dp = 14.dp,
) {
    val colors = NotasTheme.colors
    Box(
        modifier = modifier
            .fillMaxWidth()
            .height(height)
            .clip(RoundedCornerShape(cornerRadius))
            .background(colors.accentContainer)
            .clickable(onClick = onClick),
        contentAlignment = Alignment.Center,
    ) {
        Text(
            text = text,
            color = colors.accentContent,
            fontSize = 13.sp,
            fontWeight = FontWeight.SemiBold,
        )
    }
}

@Composable
fun NotasSwitch(
    checked: Boolean,
    onCheckedChange: (Boolean) -> Unit,
    modifier: Modifier = Modifier,
) {
    val colors = NotasTheme.colors
    val trackColor by animateColorAsState(
        if (checked) colors.accentButton else colors.border
    )
    val thumbOffset by animateDpAsState(if (checked) 21.dp else 3.dp)

    Box(
        modifier = modifier
            .size(width = 42.dp, height = 24.dp)
            .clip(RoundedCornerShape(12.dp))
            .background(trackColor)
            .clickable { onCheckedChange(!checked) },
    ) {
        Box(
            modifier = Modifier
                .offset(x = thumbOffset, y = 3.dp)
                .size(18.dp)
                .clip(CircleShape)
                .background(Color.White)
        )
    }
}

@Composable
fun NotasBottomNavigation(
    activeTab: NotasTab,
    onSelectTab: (NotasTab) -> Unit,
    modifier: Modifier = Modifier,
) {
    val colors = NotasTheme.colors
    Column(
        modifier = modifier
            .fillMaxWidth()
            .background(colors.surface),
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .height(1.dp)
                .background(colors.border)
        )
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(top = 9.dp, bottom = 10.dp),
            horizontalArrangement = Arrangement.SpaceEvenly,
            verticalAlignment = Alignment.CenterVertically,
        ) {
            BottomNavItem(
                label = "Agenda",
                icon = NotasIcons.Calendar,
                selected = activeTab == NotasTab.AGENDA,
                onClick = { onSelectTab(NotasTab.AGENDA) },
            )
            BottomNavItem(
                label = "Equipo",
                icon = NotasIcons.Chat,
                selected = activeTab == NotasTab.TEAM,
                onClick = { onSelectTab(NotasTab.TEAM) },
            )
            BottomNavItem(
                label = "Ajustes",
                icon = NotasIcons.Settings,
                selected = activeTab == NotasTab.SETTINGS,
                onClick = { onSelectTab(NotasTab.SETTINGS) },
            )
        }
    }
}

@Composable
private fun BottomNavItem(
    label: String,
    icon: ImageVector,
    selected: Boolean,
    onClick: () -> Unit,
) {
    val colors = NotasTheme.colors
    val tint = if (selected) colors.accentContent else colors.textSecondary
    Column(
        modifier = Modifier
            .clip(RoundedCornerShape(14.dp))
            .clickable(onClick = onClick)
            .padding(horizontal = 12.dp, vertical = 2.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Box(
            modifier = Modifier
                .size(width = 62.dp, height = 32.dp)
                .clip(RoundedCornerShape(16.dp))
                .background(if (selected) colors.accentContainer else Color.Transparent),
            contentAlignment = Alignment.Center,
        ) {
            Icon(
                imageVector = icon,
                contentDescription = label,
                tint = tint,
                modifier = Modifier.size(22.dp),
            )
        }
        Spacer(modifier = Modifier.height(4.dp))
        Text(
            text = label,
            color = tint,
            fontSize = 10.sp,
            fontWeight = if (selected) FontWeight.SemiBold else FontWeight.Medium,
        )
    }
}

@Composable
fun NotasModalFooter(
    caption: String = "NOTAS · TU TIEMPO, CONECTADO",
    modifier: Modifier = Modifier,
) {
    val colors = NotasTheme.colors
    Column(
        modifier = modifier
            .fillMaxWidth()
            .background(colors.surface),
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .height(1.dp)
                .background(colors.border)
        )
        Text(
            text = caption,
            color = colors.textSecondary,
            fontSize = 9.sp,
            fontWeight = FontWeight.Medium,
            letterSpacing = 0.8.sp,
            modifier = Modifier.padding(vertical = 18.dp),
        )
    }
}

@Composable
fun NotasFeedbackBanner(
    message: String?,
    onDismiss: () -> Unit,
) {
    if (message == null) return
    val colors = NotasTheme.colors
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 24.dp, vertical = 6.dp)
            .clip(RoundedCornerShape(12.dp))
            .background(colors.successContainer)
            .clickable(onClick = onDismiss)
            .padding(horizontal = 14.dp, vertical = 10.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Text(
            text = "✓  $message",
            color = colors.successContent,
            fontSize = 12.sp,
            fontWeight = FontWeight.SemiBold,
        )
        Text(
            text = "OK",
            color = colors.successContent,
            fontSize = 11.sp,
            fontWeight = FontWeight.Bold,
        )
    }
}

/**
 * Barra superior compacta para explorar directamente cualquiera de las 15 pantallas de Notas
 * además de la navegación interactiva natural dentro de la aplicación.
 */
@Composable
fun NotasScreenExplorerBar(
    currentScreen: NotasScreen,
    onSelectScreen: (NotasScreen) -> Unit,
    modifier: Modifier = Modifier,
) {
    val colors = NotasTheme.colors
    Row(
        modifier = modifier
            .fillMaxWidth()
            .horizontalScroll(rememberScrollState())
            .padding(horizontal = 12.dp, vertical = 8.dp),
        horizontalArrangement = Arrangement.spacedBy(6.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        NotasScreen.entries.forEach { screen ->
            val selected = screen == currentScreen
            Box(
                modifier = Modifier
                    .clip(RoundedCornerShape(10.dp))
                    .background(if (selected) colors.accentButton else colors.surface)
                    .border(
                        width = 1.dp,
                        color = if (selected) colors.accentButton else colors.border,
                        shape = RoundedCornerShape(10.dp),
                    )
                    .clickable { onSelectScreen(screen) }
                    .padding(horizontal = 10.dp, vertical = 6.dp),
            ) {
                Text(
                    text = "${screen.code} · ${screen.shortTitle}",
                    color = if (selected) Color.White else colors.textSecondary,
                    fontSize = 11.sp,
                    fontWeight = if (selected) FontWeight.SemiBold else FontWeight.Medium,
                )
            }
        }
    }
}
