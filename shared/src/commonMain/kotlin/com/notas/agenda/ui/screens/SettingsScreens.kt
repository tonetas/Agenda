package com.notas.agenda.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.notas.agenda.model.NotasAppState
import com.notas.agenda.model.NotasScreen
import com.notas.agenda.model.NotasTab
import com.notas.agenda.theme.NotasAccentOption
import com.notas.agenda.theme.NotasTheme
import com.notas.agenda.ui.components.NotasBottomNavigation
import com.notas.agenda.ui.components.NotasFeedbackBanner
import com.notas.agenda.ui.components.NotasHeader
import com.notas.agenda.ui.components.NotasInputField
import com.notas.agenda.ui.components.NotasModalFooter
import com.notas.agenda.ui.components.NotasPrimaryButton
import com.notas.agenda.ui.components.NotasSegmentedControl
import com.notas.agenda.ui.components.NotasSwitch
import com.notas.agenda.ui.components.NotasTopStatusBar
import com.notas.agenda.ui.icons.NotasIcons

@Composable
fun Notas07PersonalizacionScreen(
    state: NotasAppState,
    nightModeScreen: Boolean = false,
) {
    val colors = NotasTheme.colors

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(colors.background),
    ) {
        NotasTopStatusBar()
        NotasHeader(
            eyebrow = if (nightModeScreen || state.isDarkMode) "NOTAS" else "NOTAS",
            title = "Tu espacio",
            subtitle = if (state.isDarkMode) {
                "Todo a tu manera, también de noche"
            } else {
                "Haz que Notas se adapte a ti"
            },
            actionIcon = if (nightModeScreen) NotasIcons.Bell else NotasIcons.Close,
            onActionClick = {
                if (nightModeScreen) {
                    state.navigateTo(NotasScreen.CONFIGURE_ALERTS)
                } else {
                    state.navigateTo(state.previousAgendaScreen)
                }
            },
        )
        NotasFeedbackBanner(
            message = state.feedbackMessage,
            onDismiss = { state.feedbackMessage = null },
        )

        Column(
            modifier = Modifier
                .weight(1f)
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 24.dp),
        ) {
            Spacer(modifier = Modifier.height(6.dp))

            // Tarjeta TU CUENTA
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(18.dp))
                    .background(colors.surface)
                    .border(
                        width = if (colors.isDark) 1.dp else 0.5.dp,
                        color = colors.border,
                        shape = RoundedCornerShape(18.dp),
                    )
                    .padding(horizontal = 18.dp, vertical = 16.dp),
            ) {
                Column(modifier = Modifier.fillMaxWidth()) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically,
                    ) {
                        Text(
                            text = "TU CUENTA",
                            color = colors.accentContent,
                            fontSize = 9.sp,
                            fontWeight = FontWeight.Bold,
                        )
                        Box(
                            modifier = Modifier
                                .height(26.dp)
                                .clip(RoundedCornerShape(13.dp))
                                .background(colors.successContainer)
                                .padding(horizontal = 10.dp),
                            contentAlignment = Alignment.Center,
                        ) {
                            Text(
                                text = "Activa",
                                color = colors.successContent,
                                fontSize = 10.sp,
                                fontWeight = FontWeight.SemiBold,
                            )
                        }
                    }
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(
                        text = state.userName,
                        color = colors.textPrimary,
                        fontSize = 20.sp,
                        fontWeight = FontWeight.SemiBold,
                    )
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(
                        text = state.userRole,
                        color = colors.textSecondary,
                        fontSize = 12.sp,
                    )
                }
            }

            Spacer(modifier = Modifier.height(22.dp))
            Text(
                text = "APARIENCIA",
                color = colors.textSecondary,
                fontSize = 10.sp,
                fontWeight = FontWeight.Bold,
            )
            Spacer(modifier = Modifier.height(10.dp))

            NotasSegmentedControl(
                options = listOf("Día", "Noche"),
                selectedIndex = if (state.isDarkMode) 1 else 0,
                onSelect = { idx -> state.setDarkModeAndSync(idx == 1) },
                height = 54.dp,
                cornerRadius = 15.dp,
            )

            Spacer(modifier = Modifier.height(22.dp))
            Text(
                text = "Color de tu espacio",
                color = colors.textPrimary,
                fontSize = 14.sp,
                fontWeight = FontWeight.Medium,
            )
            Spacer(modifier = Modifier.height(14.dp))

            Row(horizontalArrangement = Arrangement.spacedBy(16.dp)) {
                NotasAccentOption.entries.forEach { option ->
                    val selected = state.accentOption == option
                    Box(
                        modifier = Modifier
                            .size(40.dp)
                            .clip(CircleShape)
                            .background(option.primary)
                            .clickable { state.accentOption = option },
                        contentAlignment = Alignment.Center,
                    ) {
                        if (selected) {
                            Text(
                                text = "✓",
                                color = Color.White,
                                fontSize = 19.sp,
                                fontWeight = FontWeight.SemiBold,
                            )
                        }
                    }
                }
            }
            Spacer(modifier = Modifier.height(10.dp))
            Text(
                text = state.accentOption.label,
                color = colors.textSecondary,
                fontSize = 11.sp,
            )

            Spacer(modifier = Modifier.height(20.dp))

            // Preferencias (Alertas y sonido / Cambiar contraseña)
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(18.dp))
                    .background(colors.surface)
                    .border(
                        width = if (colors.isDark) 1.dp else 0.5.dp,
                        color = colors.border,
                        shape = RoundedCornerShape(18.dp),
                    ),
            ) {
                PreferenceRow(
                    title = "Alertas y sonido",
                    subtitle = "${state.alertAdvanceMinutes} minutos antes · ${if (state.soundAlertEnabled) "sonido suave" else "silencio"}",
                    onClick = { state.navigateTo(NotasScreen.CONFIGURE_ALERTS) },
                )
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 18.dp)
                        .height(1.dp)
                        .background(colors.border)
                )
                PreferenceRow(
                    title = "Cambiar contraseña",
                    subtitle = "Tu acceso, siempre protegido",
                    onClick = { state.navigateTo(NotasScreen.CHANGE_PASSWORD) },
                )
            }

            Spacer(modifier = Modifier.height(22.dp))
            NotasPrimaryButton(
                text = "Guardar preferencias",
                onClick = { state.feedbackMessage = "Preferencias guardadas" },
            )
            Spacer(modifier = Modifier.height(18.dp))
            Text(
                text = "Cerrar sesión",
                color = colors.textSecondary,
                fontSize = 12.sp,
                fontWeight = FontWeight.Medium,
                modifier = Modifier
                    .clip(RoundedCornerShape(8.dp))
                    .clickable { state.navigateTo(NotasScreen.LOGIN) }
                    .padding(vertical = 4.dp, horizontal = 2.dp),
            )
            Spacer(modifier = Modifier.height(16.dp))
        }

        NotasBottomNavigation(
            activeTab = NotasTab.SETTINGS,
            onSelectTab = state::navigateToTab,
        )
    }
}

@Composable
private fun PreferenceRow(
    title: String,
    subtitle: String,
    onClick: () -> Unit,
) {
    val colors = NotasTheme.colors
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clickable(onClick = onClick)
            .padding(horizontal = 18.dp, vertical = 16.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Column(modifier = Modifier.weight(1f)) {
            Text(
                text = title,
                color = colors.textPrimary,
                fontSize = 14.sp,
                fontWeight = FontWeight.Medium,
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = subtitle,
                color = colors.textSecondary,
                fontSize = 11.sp,
            )
        }
        Text(
            text = "›",
            color = colors.textSecondary,
            fontSize = 24.sp,
        )
    }
}

@Composable
fun Notas08CambiarContrasenaScreen(state: NotasAppState) {
    val colors = NotasTheme.colors
    var currentPwd by remember { mutableStateOf(state.loginPassword) }
    var newPwd by remember { mutableStateOf("NotasSeguro26!") }
    var confirmPwd by remember { mutableStateOf("NotasSeguro26!") }
    var showCurrent by remember { mutableStateOf(false) }
    var showNew by remember { mutableStateOf(false) }
    var showConfirm by remember { mutableStateOf(false) }
    var errorText by remember { mutableStateOf<String?>(null) }

    val hasLength = newPwd.length >= 8
    val hasNumber = newPwd.any { it.isDigit() }
    val hasSymbol = newPwd.any { !it.isLetterOrDigit() }
    val allRulesOk = hasLength && hasNumber && hasSymbol

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(colors.background),
    ) {
        NotasTopStatusBar()
        NotasHeader(
            eyebrow = "NOTAS",
            title = "Seguridad",
            subtitle = "Actualiza tu contraseña",
            actionIcon = NotasIcons.Close,
            onActionClick = {
                state.navigateTo(if (state.isDarkMode) NotasScreen.NIGHT_APPEARANCE else NotasScreen.PERSONALIZATION)
            },
        )

        Column(
            modifier = Modifier
                .weight(1f)
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 24.dp),
        ) {
            Spacer(modifier = Modifier.height(6.dp))

            // Banner Una contraseña solo tuya
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(18.dp))
                    .background(colors.accentContainer)
                    .padding(horizontal = 18.dp, vertical = 16.dp),
            ) {
                Text(
                    text = "Una contraseña solo tuya",
                    color = colors.accentContent,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.SemiBold,
                )
                Spacer(modifier = Modifier.height(6.dp))
                Text(
                    text = "Evita reutilizar contraseñas de otras cuentas.",
                    color = colors.textSecondary,
                    fontSize = 12.sp,
                )
            }

            Spacer(modifier = Modifier.height(22.dp))
            NotasInputField(
                label = "Contraseña actual",
                value = currentPwd,
                onValueChange = { currentPwd = it; errorText = null },
                isPassword = true,
                passwordVisible = showCurrent,
                onTogglePasswordVisibility = { showCurrent = !showCurrent },
                cornerRadius = 18.dp,
            )
            Spacer(modifier = Modifier.height(18.dp))
            NotasInputField(
                label = "Nueva contraseña",
                value = newPwd,
                onValueChange = { newPwd = it; errorText = null },
                isPassword = true,
                passwordVisible = showNew,
                onTogglePasswordVisibility = { showNew = !showNew },
                cornerRadius = 18.dp,
            )
            Spacer(modifier = Modifier.height(18.dp))
            NotasInputField(
                label = "Confirmar nueva contraseña",
                value = confirmPwd,
                onValueChange = { confirmPwd = it; errorText = null },
                isPassword = true,
                passwordVisible = showConfirm,
                onTogglePasswordVisibility = { showConfirm = !showConfirm },
                cornerRadius = 18.dp,
            )

            Spacer(modifier = Modifier.height(20.dp))

            // Requisitos cumplidos
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(18.dp))
                    .background(if (allRulesOk) colors.successContainer else colors.surfaceMuted)
                    .padding(horizontal = 16.dp, vertical = 14.dp),
                verticalArrangement = Arrangement.spacedBy(8.dp),
            ) {
                PasswordRequirementRow("Al menos 8 caracteres", hasLength)
                PasswordRequirementRow("Al menos 1 número", hasNumber)
                PasswordRequirementRow("Al menos 1 símbolo", hasSymbol)
            }

            if (errorText != null) {
                Spacer(modifier = Modifier.height(10.dp))
                Text(
                    text = errorText!!,
                    color = colors.warningContent,
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Medium,
                )
            }

            Spacer(modifier = Modifier.height(22.dp))
            NotasPrimaryButton(
                text = "Actualizar contraseña",
                onClick = {
                    when {
                        !allRulesOk -> errorText = "La contraseña debe cumplir los 3 requisitos."
                        newPwd != confirmPwd -> errorText = "Las contraseñas nuevas no coinciden."
                        else -> {
                            state.loginPassword = newPwd
                            state.navigateTo(
                                if (state.isDarkMode) NotasScreen.NIGHT_APPEARANCE else NotasScreen.PERSONALIZATION
                            )
                            state.feedbackMessage = "Contraseña actualizada"
                        }
                    }
                },
            )
            Spacer(modifier = Modifier.height(20.dp))
        }

        NotasModalFooter()
    }
}

@Composable
private fun PasswordRequirementRow(text: String, met: Boolean) {
    val colors = NotasTheme.colors
    val color = if (met) colors.successContent else colors.textSecondary
    Text(
        text = "${if (met) "✓" else "○"}  $text",
        color = color,
        fontSize = 12.sp,
        fontWeight = FontWeight.Medium,
    )
}

@Composable
fun Notas09ConfigurarAlertasScreen(state: NotasAppState) {
    val colors = NotasTheme.colors
    val tones = listOf("Campana suave", "Brisa cristalina", "Pulso cálido")

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(colors.background),
    ) {
        NotasTopStatusBar()
        NotasHeader(
            eyebrow = "NOTAS",
            title = "Alertas",
            subtitle = "Llega a tiempo, sin estar pendiente",
            actionIcon = NotasIcons.Close,
            onActionClick = {
                state.navigateTo(if (state.isDarkMode) NotasScreen.NIGHT_APPEARANCE else NotasScreen.PERSONALIZATION)
            },
        )
        NotasFeedbackBanner(
            message = state.feedbackMessage,
            onDismiss = { state.feedbackMessage = null },
        )

        Column(
            modifier = Modifier
                .weight(1f)
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 24.dp),
        ) {
            Spacer(modifier = Modifier.height(6.dp))

            // Recordatorios activados
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(16.dp))
                    .background(colors.surface)
                    .border(
                        width = if (colors.isDark) 1.dp else 0.5.dp,
                        color = colors.border,
                        shape = RoundedCornerShape(16.dp),
                    )
                    .padding(horizontal = 17.dp, vertical = 18.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = "Recordatorios activados",
                        color = colors.textPrimary,
                        fontSize = 15.sp,
                        fontWeight = FontWeight.SemiBold,
                    )
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(
                        text = "Para todas las citas de tu agenda",
                        color = colors.textSecondary,
                        fontSize = 11.sp,
                    )
                }
                NotasSwitch(
                    checked = state.remindersEnabled,
                    onCheckedChange = { state.remindersEnabled = it },
                )
            }

            Spacer(modifier = Modifier.height(22.dp))
            Text(
                text = "¿CON CUÁNTA ANTELACIÓN?",
                color = colors.textSecondary,
                fontSize = 10.sp,
                fontWeight = FontWeight.Bold,
            )
            Spacer(modifier = Modifier.height(12.dp))

            listOf(5, 10, 15).forEach { minutes ->
                val selected = state.alertAdvanceMinutes == minutes
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(48.dp)
                        .clip(RoundedCornerShape(13.dp))
                        .background(if (selected) colors.accentContainer else colors.surface)
                        .border(
                            width = if (selected || !colors.isDark) 0.dp else 1.dp,
                            color = colors.border,
                            shape = RoundedCornerShape(13.dp),
                        )
                        .clickable { state.alertAdvanceMinutes = minutes }
                        .padding(horizontal = 16.dp),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Text(
                        text = "$minutes minutos antes",
                        color = if (selected) colors.accentContent else colors.textPrimary,
                        fontSize = 13.sp,
                        fontWeight = if (selected) FontWeight.SemiBold else FontWeight.Medium,
                    )
                    Box(
                        modifier = Modifier
                            .size(18.dp)
                            .clip(CircleShape)
                            .border(
                                width = 1.5.dp,
                                color = if (selected) colors.accentContent else colors.radioBorder,
                                shape = CircleShape,
                            ),
                        contentAlignment = Alignment.Center,
                    ) {
                        if (selected) {
                            Box(
                                modifier = Modifier
                                    .size(10.dp)
                                    .clip(CircleShape)
                                    .background(colors.accentContent)
                            )
                        }
                    }
                }
                Spacer(modifier = Modifier.height(10.dp))
            }

            Spacer(modifier = Modifier.height(10.dp))

            // Cómo avisarte
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(16.dp))
                    .background(colors.surface)
                    .border(
                        width = if (colors.isDark) 1.dp else 0.5.dp,
                        color = colors.border,
                        shape = RoundedCornerShape(16.dp),
                    )
                    .padding(horizontal = 16.dp),
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(vertical = 15.dp),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Column(modifier = Modifier.weight(1f)) {
                        Text(
                            text = "Ventana modal",
                            color = colors.textPrimary,
                            fontSize = 13.sp,
                            fontWeight = FontWeight.Medium,
                        )
                        Spacer(modifier = Modifier.height(3.dp))
                        Text(
                            text = "Un aviso visible sobre tu agenda",
                            color = colors.textSecondary,
                            fontSize = 10.sp,
                        )
                    }
                    NotasSwitch(
                        checked = state.modalAlertEnabled,
                        onCheckedChange = { state.modalAlertEnabled = it },
                    )
                }
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(1.dp)
                        .background(colors.border)
                )
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(vertical = 15.dp),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Column(modifier = Modifier.weight(1f)) {
                        Text(
                            text = "Reproducir sonido",
                            color = colors.textPrimary,
                            fontSize = 13.sp,
                            fontWeight = FontWeight.Medium,
                        )
                        Spacer(modifier = Modifier.height(3.dp))
                        Text(
                            text = "También cuando la app esté abierta",
                            color = colors.textSecondary,
                            fontSize = 10.sp,
                        )
                    }
                    NotasSwitch(
                        checked = state.soundAlertEnabled,
                        onCheckedChange = { state.soundAlertEnabled = it },
                    )
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            // Tono del aviso
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(62.dp)
                    .clip(RoundedCornerShape(16.dp))
                    .background(colors.surface)
                    .border(
                        width = if (colors.isDark) 1.dp else 0.5.dp,
                        color = colors.border,
                        shape = RoundedCornerShape(16.dp),
                    )
                    .clickable {
                        val nextIdx = (tones.indexOf(state.selectedTone) + 1) % tones.size
                        state.selectedTone = tones[nextIdx]
                    }
                    .padding(horizontal = 16.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Icon(
                    imageVector = NotasIcons.Sound,
                    contentDescription = null,
                    tint = colors.accentContent,
                    modifier = Modifier.size(24.dp),
                )
                Spacer(modifier = Modifier.width(13.dp))
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = state.selectedTone,
                        color = colors.textPrimary,
                        fontSize = 13.sp,
                        fontWeight = FontWeight.SemiBold,
                    )
                    Text(
                        text = "Tono seleccionado (toca para cambiar)",
                        color = colors.textSecondary,
                        fontSize = 10.sp,
                    )
                }
                Box(
                    modifier = Modifier
                        .size(38.dp)
                        .clip(RoundedCornerShape(12.dp))
                        .background(colors.accentContainer)
                        .clickable {
                            state.feedbackMessage = "Reproduciendo ${state.selectedTone}"
                        },
                    contentAlignment = Alignment.Center,
                ) {
                    Icon(
                        imageVector = NotasIcons.Play,
                        contentDescription = "Escuchar tono",
                        tint = colors.accentContent,
                        modifier = Modifier.size(20.dp),
                    )
                }
            }

            Spacer(modifier = Modifier.height(20.dp))
            NotasPrimaryButton(
                text = "Guardar alertas",
                onClick = {
                    state.navigateTo(
                        if (state.isDarkMode) NotasScreen.NIGHT_APPEARANCE else NotasScreen.PERSONALIZATION
                    )
                    state.feedbackMessage = "Configuración de alertas guardada"
                },
            )
            Spacer(modifier = Modifier.height(16.dp))
        }

        NotasBottomNavigation(
            activeTab = NotasTab.SETTINGS,
            onSelectTab = state::navigateToTab,
        )
    }
}
